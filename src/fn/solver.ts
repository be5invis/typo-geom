/**
 * Bezier curve intersection algorithm and utilities
 *
 * Portions ported from PaperJS: https://github.com/paperjs/paper.js/
 */

import { EPSILON, MACHINE_EPSILON } from "./constants";
import { clamp, numberClose } from "./utility";

function getDiscriminant(a: number, b: number, c: number) {
	// d = b^2 - a * c  computed accurately enough by a tricky scheme.
	// Ported from @hkrish's polysolve.c
	function split(v: number) {
		var x = v * 134217729,
			y = v - x,
			hi = y + x, // Don't optimize y away!
			lo = v - hi;
		return [hi, lo];
	}

	var D = b * b - a * c,
		E = b * b + a * c;
	if (Math.abs(D) * 3 < E) {
		var ad = split(a),
			bd = split(b),
			cd = split(c),
			p = b * b,
			dp = bd[0] * bd[0] - p + 2 * bd[0] * bd[1] + bd[1] * bd[1],
			q = a * c,
			dq = ad[0] * cd[0] - q + ad[0] * cd[1] + ad[1] * cd[0] + ad[1] * cd[1];
		D = p - q + (dp - dq); // Don’t omit parentheses!
	}
	return D;
}

function getNormalizationFactor(...args: number[]) {
	// Normalize coefficients à la Jenkins & Traub's RPOLY.
	// Normalization is done by scaling coefficients with a power of 2, so
	// that all the bits in the mantissa remain unchanged.
	// Use the infinity norm (max(sum(abs(a)…)) to determine the appropriate
	// scale factor. See @hkrish in #1087#issuecomment-231526156
	var norm = Math.max.apply(Math, args);
	return norm && (norm < 1e-8 || norm > 1e8) ? Math.pow(2, -Math.round(Math.log2(norm))) : 0;
}

export interface IRootSink {
	degenerated(): void;
	addRoot(x: number): boolean;
}

/**
 * Solve a quadratic equation in a numerically robust manner;
 * given a quadratic equation ax² + bx + c = 0, find the values of x.
 */
export function solveQuadratic(a: number, b: number, c: number, sink: IRootSink): void {
	let x1 = Infinity,
		x2 = Infinity;
	if (Math.abs(a) < EPSILON) {
		// This could just be a linear equation
		if (Math.abs(b) < EPSILON) sink.degenerated();
		x1 = -c / b;
	} else {
		// a, b, c are expected to be the coefficients of the equation:
		// Ax² - 2Bx + C == 0, so we take b = -b/2:
		b *= -0.5;
		let D = getDiscriminant(a, b, c);
		// If the discriminant is very small, we can try to normalize
		// the coefficients, so that we may get better accuracy.
		if (D && Math.abs(D) < MACHINE_EPSILON) {
			let f = getNormalizationFactor(Math.abs(a), Math.abs(b), Math.abs(c));
			if (f) {
				a *= f;
				b *= f;
				c *= f;
				D = getDiscriminant(a, b, c);
			}
		}
		if (D >= -MACHINE_EPSILON) {
			// No real roots if D < 0
			let Q = D < 0 ? 0 : Math.sqrt(D),
				R = b + (b < 0 ? -Q : Q);
			// Try to minimize floating point noise.
			if (R === 0) {
				x1 = c / a;
				x2 = -x1;
			} else {
				x1 = R / a;
				x2 = c / R;
			}
		}
	}
	if (isFinite(x1)) sink.addRoot(x1);
	if (isFinite(x2)) sink.addRoot(x2);
}

/**
 * Solve a cubic equation, using numerically stable methods,
 * given an equation of the form ax³ + bx² + cx + d = 0.
 *
 * This algorithm avoids the trigonometric/inverse trigonometric
 * calculations required by the "Italins"' formula. Cardano's method
 * works well enough for exact computations, this method takes a
 * numerical approach where the double precision error bound is kept
 * very low.
 *
 * References:
 *  Kahan W. - "To Solve a Real Cubic Equation"
 *   http://www.cs.berkeley.edu/~wkahan/Math128/Cubic.pdf
 *  Harikrishnan G.
 *  https://gist.github.com/hkrish/9e0de1f121971ee0fbab281f5c986de9
 *
 * W. Kahan's paper contains inferences on accuracy of cubic
 * zero-finding methods. Also testing methods for robustness.
 *
 * @author Harikrishnan Gopalakrishnan <hari.exeption@gmail.com>
 */
export function solveCubic(a: number, b: number, c: number, d: number, sink: IRootSink) {
	let f = getNormalizationFactor(Math.abs(a), Math.abs(b), Math.abs(c), Math.abs(d)),
		x: number = 0,
		b1: number = 0,
		c2: number = 0,
		qd: number = 0,
		q: number = 0;
	if (f) {
		a *= f;
		b *= f;
		c *= f;
		d *= f;
	}

	function evaluate(x0: number) {
		x = x0;
		// Evaluate q, q', b1 and c2 at x
		var tmp = a * x;
		b1 = tmp + b;
		c2 = b1 * x + c;
		qd = (tmp + b1) * x + c2;
		q = c2 * x + d;
	}

	// If a or d is zero, we only need to solve a quadratic, so we set
	// the coefficients appropriately.
	if (Math.abs(a) < EPSILON) {
		a = b;
		b1 = c;
		c2 = d;
		x = Infinity;
	} else if (Math.abs(d) < EPSILON) {
		b1 = b;
		c2 = c;
		x = 0;
	} else {
		// Here onwards we iterate for the leftmost root. Proceed to
		// deflate the cubic into a quadratic (as a side effect to the
		// iteration) and solve the quadratic.
		evaluate(-(b / a) / 3);
		// Get a good initial approximation.
		let t = q / a,
			r = Math.pow(Math.abs(t), 1 / 3),
			s = t < 0 ? -1 : 1,
			td = -qd / a,
			// See Kahan's notes on why 1.324718*... works.
			rd = td > 0 ? 1.324717957244746 * Math.max(r, Math.sqrt(td)) : r,
			x0 = x - s * rd;
		if (x0 !== x) {
			do {
				evaluate(x0);
				// Newton's. Divide by 1 + MACHINE_EPSILON (1.000...002)
				// to avoid x0 crossing over a root.
				x0 = qd === 0 ? x : x - q / qd / (1 + MACHINE_EPSILON);
			} while (s * x0 > s * x);
			// Adjust the coefficients for the quadratic.
			if (Math.abs(a) * x * x > Math.abs(d / x)) {
				c2 = -d / x;
				b1 = (c2 - c) / x;
			}
		}
	}
	solveQuadratic(a, b1, c2, sink);
	if (isFinite(x)) sink.addRoot(x);
}

export function bezierSolveCubic(
	v0: number,
	v1: number,
	v2: number,
	v3: number,
	val: number,
	sink: IRootSink
) {
	if (
		!(
			(v0 < val && v3 < val && v1 < val && v2 < val) ||
			(v0 > val && v3 > val && v1 > val && v2 > val)
		)
	) {
		const c = 3 * (v1 - v0),
			b = 3 * (v2 - v1) - c,
			a = v3 - v0 - c - b;
		solveCubic(a, b, c, v0 - val, sink);
	}
}

export function signedDistance(
	px: number,
	py: number,
	vx: number,
	vy: number,
	x: number,
	y: number
) {
	vx -= px;
	vy -= py;
	if (numberClose(vx, 0)) {
		return vy >= 0 ? px - x : x - px;
	} else if (numberClose(vy, 0)) {
		return vx >= 0 ? y - py : py - y;
	} else {
		return (vx * (y - py) - vy * (x - px)) / Math.sqrt(vx * vx + vy * vy);
	}
}
export function getDistance(px: number, py: number, vx: number, vy: number, x: number, y: number) {
	return Math.abs(signedDistance(px, py, vx, vy, x, y));
}

export class ClampedRootSink implements IRootSink {
	constructor(
		private readonly min: number,
		private readonly max: number,
		private readonly fInclusive: boolean
	) {}
	public readonly roots: number[] = [];
	public rootCount: number = 0;
	addRoot(x: number) {
		let addable = this.fInclusive
			? x > this.min - EPSILON && x < this.max + EPSILON
			: x > this.min && x < this.max;
		for (let j = 0; j < this.rootCount; j++) {
			if (this.roots[j] === x) addable = false;
		}
		if (addable) {
			this.roots[this.rootCount++] = clamp(x, this.min, this.max);
			return true;
		} else {
			return false;
		}
	}
	degenerated() {
		this.rootCount = -1;
	}
}
