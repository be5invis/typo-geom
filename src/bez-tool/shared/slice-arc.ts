import { Arcs } from "../../derivable";
import {
	bezierSolveCubic,
	ClampedRootSink,
	EPSILON,
	GEOMETRIC_EPSILON,
	mix,
	numberClose
} from "../../fn";
import { IPoint } from "../../point/interface";
import { Point } from "../../point/point";

export enum CornerType {
	Smooth = 0,
	Corner = 1,
	Extrema = 2,
	Hetero = 3
}

export type CurveClass = "line" | "quadratic" | "serpentine" | "cusp" | "loop" | "arch";
export type CurveClassifyResult = { type: CurveClass; roots: null | number[] };

export class Bez3Slice extends Arcs.Bez3 {
	constructor(
		a: IPoint,
		b: IPoint,
		c: IPoint,
		d: IPoint,
		public t1: number = 0,
		public t2: number = 1
	) {
		super(a, b, c, d);
	}
	public cornerTypeBefore = CornerType.Corner;
	public cornerTypeAfter = CornerType.Corner;
	private isStraightCache?: boolean;

	forceStraight() {
		const arc = new Bez3Slice(
			this.a,
			Point.from(this.a).mix(this.d, 1 / 3),
			Point.from(this.a).mix(this.d, 2 / 3),
			this.d,
			this.t1,
			this.t2
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
			new Bez3Slice(
				this.a,
				new Point(p3x, p3y),
				new Point(p6x, p6y),
				new Point(p8x, p8y),
				this.t1,
				mix(this.t1, t, this.t2)
			),
			new Bez3Slice(
				new Point(p8x, p8y),
				new Point(p7x, p7y),
				new Point(p5x, p5y),
				this.d,
				mix(this.t1, t, this.t2),
				this.t2
			)
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

	getTOf(point: IPoint): number | null {
		let p0 = Point.from(this.a),
			p3 = Point.from(this.d);
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
			const rs = new ClampedRootSink(0, 1, true);
			bezierSolveCubic(
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

	classify() {
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
			s = l !== 0 ? 1 / l : 0,
			serpentine: CurveClass = "serpentine"; // short-cut
		d1 *= s;
		d2 *= s;
		d3 *= s;

		function type(type: string, t1?: number, t2?: number) {
			let hasRoots = t1 !== undefined,
				t1Ok = hasRoots && t1 !== undefined && t1 > 0 && t1 < 1,
				t2Ok = hasRoots && t2 !== undefined && t2 > 0 && t2 < 1;
			// Degrade to arch for serpentine, cusp or loop if no solutions
			// within 0..1 are found. loop requires 2 solutions to be valid.
			if (hasRoots && (!(t1Ok || t2Ok) || (type === "loop" && !(t1Ok && t2Ok)))) {
				type = "arch";
				t1Ok = t2Ok = false;
			}
			return {
				type: type,
				roots:
					t1Ok || t2Ok
						? t1Ok && t2Ok
							? t1! < t2!
								? [t1!, t2!]
								: [t2!, t1!] // 2 solutions
							: [t1Ok ? t1! : t2!] // 1 solution
						: null
			};
		}

		if (numberClose(d1, 0)) {
			return numberClose(d2, 0)
				? type(numberClose(d3, 0) ? "line" : "quadratic") // 5. / 4.
				: type(serpentine, d3 / (3 * d2)); // 3b.
		}
		var d = 3 * d2 * d2 - 4 * d1 * d3;
		if (numberClose(d, 0)) {
			return type("cusp", d2 / (2 * d1)); // 3a.
		}
		var f1 = d > 0 ? Math.sqrt(d / 3) : Math.sqrt(-d),
			f2 = 2 * d1;
		return type(
			d > 0 ? serpentine : "loop", // 1. / 2.
			(d2 + f1) / f2,
			(d2 - f1) / f2
		);
	}
}
