import { Arcs } from "../derivable";
import { BB } from "../derivable/bounding-box";
import mix from "../fn/mix";
import { IPoint } from "../point/interface";
import { Point } from "../point/point";

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

	getBoundingBox() {
		let tValues: number[] = [],
			a: number,
			b: number,
			c: number,
			t: number,
			t1: number,
			t2: number,
			b2ac: number,
			sqrtB2AC: number;
		for (let i = 0; i < 2; ++i) {
			if (i == 0) {
				b = 6 * this.a.x - 12 * this.b.x + 6 * this.c.x;
				a = -3 * this.a.x + 9 * this.b.x - 9 * this.c.x + 3 * this.d.x;
				c = 3 * this.b.x - 3 * this.a.x;
			} else {
				b = 6 * this.a.y - 12 * this.b.y + 6 * this.c.y;
				a = -3 * this.a.y + 9 * this.b.y - 9 * this.c.y + 3 * this.d.y;
				c = 3 * this.b.y - 3 * this.a.y;
			}
			if (Math.abs(a) < 1e-12) {
				if (Math.abs(b) < 1e-12) {
					continue;
				}
				t = -c / b;
				if (0 < t && t < 1) {
					tValues.push(t);
				}
				continue;
			}
			b2ac = b * b - 4 * c * a;
			if (b2ac < 0) {
				continue;
			}
			sqrtB2AC = Math.sqrt(b2ac);
			t1 = (-b + sqrtB2AC) / (2 * a);
			if (0 < t1 && t1 < 1) {
				tValues.push(t1);
			}
			t2 = (-b - sqrtB2AC) / (2 * a);
			if (0 < t2 && t2 < 1) {
				tValues.push(t2);
			}
		}

		const box = BB.empty();
		BB.coverX(box, this.a.x), BB.coverX(box, this.d.x);
		BB.coverY(box, this.a.y), BB.coverY(box, this.d.y);
		let j = tValues.length;
		while (j--) {
			t = tValues[j];
			BB.coverPoint(box, this.eval(t));
		}
		return box;
	}
}
