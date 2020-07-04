import { mix, numberClose } from "../fn";
import { IVec2 } from "../point/interface";
import { Point2, Offset2 } from "../point/point";
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
	const ab = mix(a, b, t);
	const bc = mix(b, c, t);
	const cd = mix(c, d, t);
	const abc = mix(ab, bc, t);
	const bcd = mix(bc, cd, t);
	return mix(abc, bcd, t);
}

function bezT3(P0: number, P1: number, P2: number, P3: number, t: number) {
	return (
		-3 * (1 - t) * (1 - t) * P0 +
		3 * (1 - t) * (1 - t) * P1 -
		6 * t * (1 - t) * P1 -
		3 * t * t * P2 +
		6 * t * (1 - t) * P2 +
		3 * t * t * P3
	);
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
	constructor(c: Arc, t: ShapeTransform) {
		this.c = c;
		this.tfm = t;
	}
	eval(t: number) {
		const z = this.c.eval(t);
		return new Point2(this.tfm.x(z.x, z.y), this.tfm.y(z.x, z.y));
	}
	derivative(t: number) {
		const z = this.c.eval(t);
		const d = this.c.derivative(t);
		return new Offset2(
			d.x * this.tfm.dxx(z.x, z.y) + d.y * this.tfm.dxy(z.x, z.y),
			d.x * this.tfm.dyx(z.x, z.y) + d.y * this.tfm.dyy(z.x, z.y)
		);
	}
}
