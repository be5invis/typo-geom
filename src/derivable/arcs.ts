import { mix, numberClose } from "../fn";
import { IVec2 } from "../point/interface";
import { Offset2, Point2 } from "../point/point";
import { segTSearch } from "../util/seg-index-search";
import { Arc, DerivableFunction, ShapeTransform } from "./interface";

export class FromXY implements Arc {
	constructor(private readonly x: DerivableFunction, private readonly y: DerivableFunction) {}
	eval(t: number) {
		return new Point2(this.x.eval(t), this.y.eval(t));
	}
	derivative(t: number) {
		return new Offset2(this.x.derivative(t), this.y.derivative(t));
	}
}

function bez3(a: number, b: number, c: number, d: number, t: number): number {
	const cot = 1 - t;
	return cot * cot * (a * cot + 3 * b * t) + t * t * (3 * c * cot + d * t);
}

function bezT3(a: number, b: number, c: number, d: number, t: number) {
	const cot = 1 - t;
	return 3 * cot * cot * (b - a) + 6 * t * cot * (c - b) + 3 * t * t * (d - c);
}

export class Bez3 implements Arc {
	constructor(
		public readonly a: IVec2,
		public readonly b: IVec2,
		public readonly c: IVec2,
		public readonly d: IVec2
	) {}

	eval(t: number) {
		return new Point2(
			bez3(this.a.x, this.b.x, this.c.x, this.d.x, t),
			bez3(this.a.y, this.b.y, this.c.y, this.d.y, t)
		);
	}

	derivative(t: number) {
		return new Offset2(
			bezT3(this.a.x, this.b.x, this.c.x, this.d.x, t),
			bezT3(this.a.y, this.b.y, this.c.y, this.d.y, t)
		);
	}

	isStraight() {
		const p1 = Point2.from(this.a),
			p2 = Point2.from(this.d);
		const h1 = Offset2.differenceFrom(this.b, this.a),
			h2 = Offset2.differenceFrom(this.c, this.d);
		if (h1.isAlmostZero() || h2.isAlmostZero()) return true;

		const v = p2.minus(p1);
		if (v.isAlmostZero()) return false;

		if (
			numberClose(0, Point2.pointLineDist(this.a, this.d, this.b)) &&
			numberClose(0, Point2.pointLineDist(this.a, this.d, this.c))
		) {
			const div = v.dot(v),
				s1 = v.dot(h1) / div,
				s2 = v.dot(h2) / div;
			return s1 >= 0 && s1 <= 1 && s2 <= 0 && s2 >= -1;
		}
		return false;
	}

	static fromStraightSegment(ss: StraightSegment) {
		return new Bez3(
			ss.a,
			Point2.from(ss.a).mix(Point2.from(ss.b), 1 / 3),
			Point2.from(ss.a).mix(Point2.from(ss.b), 2 / 3),
			ss.b
		);
	}
}

export class Reparametrized implements Arc {
	curve: Arc;
	fn: DerivableFunction;
	constructor(c: Arc, fn: DerivableFunction) {
		this.curve = c;
		this.fn = fn;
	}
	eval(t: number) {
		return this.curve.eval(this.fn.eval(t));
	}
	derivative(t: number) {
		const d = this.curve.derivative(this.fn.eval(t));
		const dF = this.fn.derivative(t);
		return new Offset2(d.x * dF, d.y * dF);
	}
}

export class Reverted implements Arc {
	curve: Arc;
	constructor(c: Arc) {
		this.curve = c;
	}
	eval(t: number) {
		return this.curve.eval(1 - t);
	}
	derivative(t: number) {
		const d = this.curve.derivative(1 - t);
		return new Offset2(-d.x, -d.y);
	}
}

export class Circle implements Arc {
	centerX: number;
	centerY: number;
	radius: number;
	constructor(cx: number, cy: number, radius: number) {
		this.centerX = cx;
		this.centerY = cy;
		this.radius = radius;
	}
	eval(t: number) {
		return new Point2(
			this.centerX + this.radius * Math.cos(t),
			this.centerY + this.radius * Math.sin(t)
		);
	}
	derivative(t: number) {
		return new Offset2(-this.radius * Math.sin(t), this.radius * Math.cos(t));
	}
}

export class StraightSegment implements Arc {
	constructor(public readonly a: IVec2, public readonly b: IVec2) {}
	eval(t: number) {
		return new Point2(mix(this.a.x, this.b.x, t), mix(this.a.y, this.b.y, t));
	}
	derivative() {
		return new Offset2(this.b.x - this.a.x, this.b.y - this.a.y);
	}
}

export class Mixed implements Arc {
	a: Arc;
	b: Arc;
	mix: DerivableFunction;
	constructor(a: Arc, b: Arc, mix: DerivableFunction) {
		this.a = a;
		this.b = b;
		this.mix = mix;
	}
	eval(t: number) {
		const za = this.a.eval(t);
		const zb = this.b.eval(t);
		const m = this.mix.eval(t);
		return new Point2(za.x + (zb.x - za.x) * m, za.y + (zb.y - za.y) * m);
	}
	derivative(t: number) {
		const za = this.a.eval(t);
		const zb = this.b.eval(t);
		const dza = this.a.derivative(t);
		const dzb = this.b.derivative(t);
		const m = this.mix.eval(t);
		const dm = this.mix.derivative(t);
		return new Offset2(
			(1 - m) * dza.x + (zb.x - za.x) * dm + m * dzb.x,
			(1 - m) * dza.y + (zb.y - za.y) * dm + m * dzb.y
		);
	}
}

export class Mixed3 implements Arc {
	n: Arc;
	a: Arc;
	b: Arc;
	f: DerivableFunction;
	g: DerivableFunction;

	constructor(n: Arc, f: DerivableFunction, a: Arc, g: DerivableFunction, b: Arc) {
		this.n = n;
		this.a = a;
		this.b = b;
		this.f = f;
		this.g = g;
	}
	eval(t: number) {
		const n = this.n.eval(t);
		const a = this.a.eval(t);
		const b = this.b.eval(t);
		const f = this.f.eval(t);
		const g = this.g.eval(t);
		return new Point2(
			(1 - f - g) * n.x + f * a.x + g * b.x,
			(1 - f - g) * n.y + f * a.y + g * b.y
		);
	}
	derivative(t: number) {
		const n = this.n.eval(t);
		const a = this.a.eval(t);
		const b = this.b.eval(t);
		const f = this.f.eval(t);
		const g = this.g.eval(t);
		const dn = this.n.derivative(t);
		const da = this.a.derivative(t);
		const db = this.b.derivative(t);
		const df = this.f.derivative(t);
		const dg = this.g.derivative(t);
		return new Offset2(
			f * da.x + a.x * df + g * db.x + b.x * dg - n.x * (df + dg) - (f + g - 1) * dn.x,
			f * da.y + a.y * df + g * db.y + b.y * dg - n.y * (df + dg) - (f + g - 1) * dn.y
		);
	}
}

export class Transformed implements Arc {
	c: Arc;
	tfm: ShapeTransform;
	constructor(t: ShapeTransform, c: Arc) {
		this.c = c;
		this.tfm = t;
	}
	eval(t: number) {
		return this.tfm.eval(this.c.eval(t));
	}
	derivative(t: number) {
		const z = this.c.eval(t);
		const d = this.c.derivative(t);
		const j = this.tfm.derivative(z);
		return new Offset2(d.x * j.dxx + d.y * j.dxy, d.x * j.dyx + d.y * j.dyy);
	}
}

export interface CurveMeasurer<T> {
	measureLength(a: T): number;
}

export class CombinedArc<T extends Arc> implements Arc {
	public readonly segments: T[];
	protected readonly totalLength: number;
	protected readonly stops: number[] = [];
	protected readonly endAdjustments: Offset2[] = [];

	constructor(measurer: CurveMeasurer<T>, _segments: T[]) {
		// Copy segments
		this.segments = [..._segments];

		// Filter out zero-length segments
		let rear = 0;
		for (let j = 0; j < this.segments.length; j++) {
			if (measurer.measureLength(this.segments[j]) > 0) {
				this.segments[rear++] = this.segments[j];
			}
		}
		this.segments.length = rear;

		// Compute total length and stops
		let totalLength = 0;
		for (let j = 0; j < this.segments.length; j++) {
			this.stops[j] = totalLength;
			totalLength += measurer.measureLength(this.segments[j]);
		}
		for (let j = 0; j < this.segments.length; j++) {
			this.stops[j] /= totalLength;
		}
		this.totalLength = totalLength;

		// Amend the start adjustments
		for (let i = 0; i < this.segments.length; i++) {
			if (i + 1 < this.segments.length) {
				const a = this.segments[i].eval(1);
				const b = this.segments[i + 1].eval(0);
				this.endAdjustments[i] = Offset2.differenceFrom(b, a);
			} else {
				this.endAdjustments[i] = new Offset2(0, 0);
			}
		}
	}

	public isEmpty() {
		return this.segments.length === 0 || this.totalLength === 0;
	}

	eval(t: number) {
		const j = segTSearch(this.stops, t);
		const tBefore = this.stops[j];
		const tNext = j < this.stops.length - 1 ? this.stops[j + 1] : 1;
		let tRelative = (t - tBefore) / (tNext - tBefore);
		if (t <= tBefore) tRelative = 0;
		if (t >= tNext) tRelative = 1;

		return Point2.addScale(this.segments[j].eval(tRelative), tRelative, this.endAdjustments[j]);
	}

	derivative(t: number) {
		const j = segTSearch(this.stops, t);
		const tBefore = this.stops[j];
		const tNext = j < this.stops.length - 1 ? this.stops[j + 1] : 1;
		let tRelative = (t - tBefore) / (tNext - tBefore);
		if (t <= tBefore) tRelative = 0;
		if (t >= tNext) tRelative = 1;

		return this.endAdjustments[j]
			.add(this.segments[j].derivative(tRelative))
			.scale(1 / (tNext - tBefore));
	}
}
