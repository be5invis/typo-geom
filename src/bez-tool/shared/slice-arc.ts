/**
 * Bezier curve intersection algorithm and utilities
 *
 * Portions ported from PaperJS: https://github.com/paperjs/paper.js/
 */

import { Arc, Arcs } from "../../derivable";
import { EPSILON, GEOMETRIC_EPSILON, Integral, numberClose, RootSolver } from "../../fn";
import { IRootSink } from "../../fn/solver";
import { IVec2 } from "../../point/interface";
import { Point2, Offset2 } from "../../point/point";

export enum CornerType {
	Smooth = 0,
	Corner = 1,
	Extrema = 2,
	Hetero = 3
}

export type CurveClass = "line" | "quadratic" | "serpentine" | "cusp" | "loop" | "arch";
export type CurveClassifyResult = { type: CurveClass; roots: null | number[] };

export class Bez3Slice extends Arcs.Bez3 {
	constructor(a: IVec2, b: IVec2, c: IVec2, d: IVec2) {
		super(a, b, c, d);
	}
	public cornerTypeBefore = CornerType.Corner;
	public cornerTypeAfter = CornerType.Corner;
	private isStraightCache?: boolean;

	forceStraight() {
		const arc = new Bez3Slice(
			this.a,
			Point2.from(this.a).mix(Point2.from(this.d), 1 / 3),
			Point2.from(this.a).mix(Point2.from(this.d), 2 / 3),
			this.d
		);
		arc.cornerTypeBefore = this.cornerTypeBefore;
		arc.cornerTypeAfter = this.cornerTypeAfter;
		return arc;
	}

	isStraight() {
		if (this.isStraightCache != null) return this.isStraightCache;
		const isStraight = super.isStraight();
		this.isStraightCache = isStraight;
		return isStraight;
	}

	toString() {
		return (
			`(${this.a.x}, ${this.a.y}) -- (${this.b.x}, ${this.b.y}) .. ` +
			`(${this.c.x}, ${this.c.y}) -- (${this.d.x}, ${this.d.y})`
		);
	}
	splitRatio(t = 0.5): [Bez3Slice, Bez3Slice] {
		// Triangle computation, with loops unrolled.
		let u = 1 - t;
		// Interpolate from 4 to 3 points
		let p3x = u * this.a.x + t * this.b.x;
		let p3y = u * this.a.y + t * this.b.y;
		let p4x = u * this.b.x + t * this.c.x;
		let p4y = u * this.b.y + t * this.c.y;
		let p5x = u * this.c.x + t * this.d.x;
		let p5y = u * this.c.y + t * this.d.y;
		// Interpolate from 3 to 2 points
		let p6x = u * p3x + t * p4x;
		let p6y = u * p3y + t * p4y;
		let p7x = u * p4x + t * p5x;
		let p7y = u * p4y + t * p5y;
		// Interpolate from 2 points to 1 point
		let p8x = u * p6x + t * p7x;
		let p8y = u * p6y + t * p7y;

		// We now have all the values we need to build the sub-curves [left, right]:
		return [
			new Bez3Slice(this.a, new Point2(p3x, p3y), new Point2(p6x, p6y), new Point2(p8x, p8y)),
			new Bez3Slice(new Point2(p8x, p8y), new Point2(p7x, p7y), new Point2(p5x, p5y), this.d)
		];
	}

	sliceRatio(t1: number, t2: number) {
		let v: Bez3Slice = this;
		if (t1 > 0) {
			v = v.splitRatio(t1)[1]; // right
		}
		// Interpolate the parameter at 't2' in the new curve and cut there.
		if (t2 < 1) {
			v = v.splitRatio((t2 - t1) / (1.0 - t1))[0]; // left
		}
		return v;
	}

	getTOf(point: IVec2): number | null {
		let p0 = Point2.from(this.a),
			p3 = Point2.from(this.d);
		if (p0.isClose(point, EPSILON)) return 0;
		if (p3.isClose(point, EPSILON)) return 1;

		const coords = [point.x, point.y],
			coeffs = [
				this.a.x,
				this.b.x,
				this.c.x,
				this.d.x,
				this.a.y,
				this.b.y,
				this.c.y,
				this.d.y
			];

		for (let c = 0; c < 2; c++) {
			const rs = new RootSolver.ClampedRootSink(0, 1, true);
			RootSolver.bezierSolveCubic(
				coeffs[c * 4 + 0],
				coeffs[c * 4 + 1],
				coeffs[c * 4 + 2],
				coeffs[c * 4 + 3],
				coords[c],
				rs
			);
			for (let i = 0; i < rs.rootCount; i++) {
				const u = rs.roots[i];
				if (this.eval(u).isClose(point, GEOMETRIC_EPSILON)) return u;
			}
		}

		if (p0.isClose(point, GEOMETRIC_EPSILON)) return 0;
		if (p3.isClose(point, GEOMETRIC_EPSILON)) return 1;
		return null;
	}

	classify(sink?: IRootSink) {
		// See: Loop and Blinn, 2005, Resolution Independent Curve Rendering
		// using Programmable Graphics Hardware, GPU Gems 3 chapter 25
		//
		// Possible types:
		//   'line'       (d1 == d2 == d3 == 0)
		//   'quadratic'  (d1 == d2 == 0)
		//   'serpentine' (d > 0)
		//   'cusp'       (d == 0)
		//   'loop'       (d < 0)
		//   'arch'       (serpentine, cusp or loop with roots outside 0..1)
		//
		// NOTE: Roots for serpentine, cusp and loop curves are only
		// considered if they are within 0..1. If the roots are outside,
		// then we degrade the type of curve down to an 'arch'.
		const x0 = this.a.x,
			y0 = this.a.y,
			x1 = this.b.x,
			y1 = this.b.y,
			x2 = this.c.x,
			y2 = this.c.y,
			x3 = this.d.x,
			y3 = this.d.y;

		// Calculate coefficients of I(s, t), of which the roots are
		// inflection points.
		let a1 = x0 * (y3 - y2) + y0 * (x2 - x3) + x3 * y2 - y3 * x2,
			a2 = x1 * (y0 - y3) + y1 * (x3 - x0) + x0 * y3 - y0 * x3,
			a3 = x2 * (y1 - y0) + y2 * (x0 - x1) + x1 * y0 - y1 * x0,
			d3 = 3 * a3,
			d2 = d3 - a2,
			d1 = d2 - a2 + a1,
			// Normalize the vector (d1, d2, d3) to keep error consistent.
			l = Math.sqrt(d1 * d1 + d2 * d2 + d3 * d3),
			s = l !== 0 ? 1 / l : 0;
		d1 *= s;
		d2 *= s;
		d3 *= s;

		if (numberClose(d1, 0)) {
			return numberClose(d2, 0)
				? this.cleanupClassifyResults(numberClose(d3, 0) ? "line" : "quadratic", sink) // 5. / 4.
				: this.cleanupClassifyResults("serpentine", sink, d3 / (3 * d2)); // 3b.
		}
		var d = 3 * d2 * d2 - 4 * d1 * d3;
		if (numberClose(d, 0)) {
			return this.cleanupClassifyResults("cusp", sink, d2 / (2 * d1)); // 3a.
		}
		var f1 = d > 0 ? Math.sqrt(d / 3) : Math.sqrt(-d),
			f2 = 2 * d1;
		return this.cleanupClassifyResults(
			d > 0 ? "serpentine" : "loop", // 1. / 2.
			sink,
			(d2 + f1) / f2,
			(d2 - f1) / f2
		);
	}
	private cleanupClassifyResults(type: CurveClass, sink?: IRootSink, t1?: number, t2?: number) {
		let hasRoots = t1 !== undefined,
			t1Ok = hasRoots && t1 !== undefined && t1 > 0 && t1 < 1,
			t2Ok = hasRoots && t2 !== undefined && t2 > 0 && t2 < 1;
		// Degrade to arch for serpentine, cusp or loop if no solutions
		// within 0..1 are found. loop requires 2 solutions to be valid.
		if (hasRoots && (!(t1Ok || t2Ok) || (type === "loop" && !(t1Ok && t2Ok)))) {
			type = "arch";
			t1Ok = t2Ok = false;
		}
		if (sink && t1Ok) sink.addRoot(t1!);
		if (sink && t2Ok) sink.addRoot(t2!);
	}

	getLength(a: number = 0, b: number = 1) {
		if (this.isStraight()) {
			const slice = this.sliceRatio(a, b);
			return Point2.dist(slice.a, slice.d);
		} else {
			return Integral.gaussLegendre(
				this.getLengthIntegrand(),
				a,
				b,
				this.getLengthSteps(a, b)
			);
		}
	}
	private getLengthIntegrand() {
		// Calculate the coefficients of a Bezier derivative.
		const ax = 9 * (this.b.x - this.c.x) + 3 * (this.d.x - this.a.x),
			bx = 6 * (this.a.x + this.c.x) - 12 * this.b.x,
			cx = 3 * (this.b.x - this.a.x),
			ay = 9 * (this.b.y - this.c.y) + 3 * (this.d.y - this.a.y),
			by = 6 * (this.a.y + this.c.y) - 12 * this.b.y,
			cy = 3 * (this.b.y - this.a.y);

		return function (t: number) {
			// Calculate quadratic equations of derivatives for x and y
			return Math.hypot((ax * t + bx) * t + cx, (ay * t + by) * t + cy);
		};
	}
	private getLengthSteps(a: number, b: number) {
		// Guess required precision based and size of range...
		// TODO: There should be much better educated guesses for
		// this. Also, what does this depend on? Required precision?
		return Math.max(2, Math.min(16, Math.ceil(Math.abs(b - a) * 32)));
	}

	getXExtrema(sink: RootSolver.IRootSink) {
		return this.getExtremaImpl(this.a.x, this.b.x, this.c.x, this.d.x, sink);
	}
	getYExtrema(sink: RootSolver.IRootSink) {
		return this.getExtremaImpl(this.a.y, this.b.y, this.c.y, this.d.y, sink);
	}
	private getExtremaImpl(
		v0: number,
		v1: number,
		v2: number,
		v3: number,
		sink: RootSolver.IRootSink
	) {
		const a = 3 * (-v0 + 3 * v1 - 3 * v2 + v3);
		const b = 6 * (v0 - 2 * v1 + v2);
		const c = 3 * (v1 - v0);
		RootSolver.solveQuadratic(a, b, c, sink);
	}
	static fromStraightSegment(ss: Arcs.StraightSegment) {
		return new Bez3Slice(
			ss.a,
			Point2.from(ss.a).mix(Point2.from(ss.b), 1 / 3),
			Point2.from(ss.a).mix(Point2.from(ss.b), 2 / 3),
			ss.b
		);
	}
	static fromArcSlice(arc: Arc, t0: number, t1: number) {
		const scalar = t1 - t0;
		const z0 = arc.eval(t0),
			z1 = arc.eval(t1);
		return new Bez3Slice(
			z0,
			Point2.from(z0).addScale(scalar / 3, Offset2.from(arc.derivative(t0))),
			Point2.from(z1).addScale(-scalar / 3, Offset2.from(arc.derivative(t1))),
			z1
		);
	}
}
