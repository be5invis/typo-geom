export const EPSILON = 1e-12;
export const MACHINE_EPSILON = 1.12e-16;
export const CURVE_TIME_EPSILON = 1e-8;
export const GEOMETRIC_EPSILON = 1e-7;

export function numberClose(x: number, y: number, epsilon = EPSILON) {
	return Math.abs(x - y) < epsilon;
}

export function mix(a: number, b: number, t: number) {
	return a + (b - a) * t;
}
export function clamp(value: number, min: number, max: number) {
	return value < min ? min : value > max ? max : value;
}

/**
 * Bezier curve intersection algorithm and utilities
 *
 * Directly extracted from PaperJS' implementation bezier curve fat-line clipping
 * The original source code is available under the MIT licence at
 * https://github.com/paperjs/paper.js/
 */

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

/**
 * Solve a quadratic equation in a numerically robust manner;
 * given a quadratic equation ax² + bx + c = 0, find the values of x.
 */
export function solveQuadratic(
	a: number,
	b: number,
	c: number,
	roots: number[],
	min: number,
	max: number
) {
	let x1 = Infinity,
		x2 = Infinity;
	if (Math.abs(a) < EPSILON) {
		// This could just be a linear equation
		if (Math.abs(b) < EPSILON) return Math.abs(c) < EPSILON ? -1 : 0;
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
	let count = 0,
		boundless = min == null,
		minB = min - EPSILON,
		maxB = max + EPSILON;
	// We need to include EPSILON in the comparisons with min / max,
	// as some solutions are ever so lightly out of bounds.
	if (isFinite(x1) && (boundless || (x1 > minB && x1 < maxB)))
		roots[count++] = boundless ? x1 : clamp(x1, min, max);
	if (x2 !== x1 && isFinite(x2) && (boundless || (x2 > minB && x2 < maxB)))
		roots[count++] = boundless ? x2 : clamp(x2, min, max);
	return count;
}

export function solveCubic(
	a: number,
	b: number,
	c: number,
	d: number,
	roots: number[],
	min: number,
	max: number
) {
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
	// The cubic has been deflated to a quadratic.
	var count = solveQuadratic(a, b1, c2, roots, min, max),
		boundless = min == null;
	if (
		isFinite(x) &&
		(count === 0 || (count > 0 && x !== roots[0] && x !== roots[1])) &&
		(boundless || (x > min - EPSILON && x < max + EPSILON))
	)
		roots[count++] = boundless ? x : clamp(x, min, max);
	return count;
}

export function bezierSolveCubic(
	v0: number,
	v1: number,
	v2: number,
	v3: number,
	val: number,
	roots: number[],
	min: number,
	max: number
) {
	let res = 0;
	if (
		!(
			(v0 < val && v3 < val && v1 < val && v2 < val) ||
			(v0 > val && v3 > val && v1 > val && v2 > val)
		)
	) {
		const c = 3 * (v1 - v0),
			b = 3 * (v2 - v1) - c,
			a = v3 - v0 - c - b;
		res = solveCubic(a, b, c, v0 - val, roots, min, max);
	}
	return res;
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
