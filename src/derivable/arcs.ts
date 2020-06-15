import mix from "../fn/mix";
import { IPoint } from "../point/interface";
import { Point } from "../point/point";
import { Arc, DerivableFunction, ShapeTransform } from "./interface";

export class FromXY implements Arc {
	constructor(private readonly x: DerivableFunction, private readonly y: DerivableFunction) {}
	eval(t: number) {
		return new Point(this.x.eval(t), this.y.eval(t));
	}
	derivative(t: number) {
		return new Point(this.x.derivative(t), this.y.derivative(t));
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
		public readonly a: IPoint,
		public readonly b: IPoint,
		public readonly c: IPoint,
		public readonly d: IPoint
	) {}

	eval(t: number) {
		return new Point(
			bez3(this.a.x, this.b.x, this.c.x, this.d.x, t),
			bez3(this.a.y, this.b.y, this.c.y, this.d.y, t)
		);
	}

	derivative(t: number) {
		return new Point(
			bezT3(this.a.x, this.b.x, this.c.x, this.d.x, t),
			bezT3(this.a.y, this.b.y, this.c.y, this.d.y, t)
		);
	}

	isLinear(toleranceX: number = 1) {
		const tolerance = (toleranceX * Point.from(this.a).minus(this.d).mag()) / 16384;
		const pb = Point.scalarProject(this.a, this.d, this.b);
		const pc = Point.scalarProject(this.a, this.d, this.c);
		const db = Point.dist(this.a, this.d, this.b);
		const dc = Point.dist(this.a, this.d, this.c);
		return (
			pb > 0 &&
			pb < 1 &&
			pc > 0 &&
			pc < 1 &&
			Math.abs(db) < tolerance &&
			Math.abs(dc) < tolerance
		);
	}

	static fromStraightSegment(ss: StraightSegment) {
		return new Bez3(
			ss.a,
			Point.from(ss.a).mix(ss.b, 1 / 3),
			Point.from(ss.a).mix(ss.b, 2 / 3),
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
		return new Point(d.x * dF, d.y * dF);
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
		return new Point(
			this.centerX + this.radius * Math.cos(t),
			this.centerY + this.radius * Math.sin(t)
		);
	}
	derivative(t: number) {
		return new Point(-this.radius * Math.sin(t), this.radius * Math.cos(t));
	}
}

export class StraightSegment implements Arc {
	constructor(public readonly a: IPoint, public readonly b: IPoint) {}
	eval(t: number) {
		return new Point(mix(this.a.x, this.b.x, t), mix(this.a.y, this.b.y, t));
	}
	derivative() {
		return new Point(this.b.x - this.a.x, this.b.y - this.a.y);
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
		return new Point(za.x + (zb.x - za.x) * m, za.y + (zb.y - za.y) * m);
	}
	derivative(t: number) {
		const za = this.a.eval(t);
		const zb = this.b.eval(t);
		const dza = this.a.derivative(t);
		const dzb = this.b.derivative(t);
		const m = this.mix.eval(t);
		const dm = this.mix.derivative(t);
		return new Point(
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
		return new Point(
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
		return new Point(
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
		return new Point(this.tfm.x(z.x, z.y), this.tfm.y(z.x, z.y));
	}
	derivative(t: number) {
		const z = this.c.eval(t);
		const d = this.c.derivative(t);
		return new Point(
			d.x * this.tfm.dxx(z.x, z.y) + d.y * this.tfm.dxy(z.x, z.y),
			d.x * this.tfm.dyx(z.x, z.y) + d.y * this.tfm.dyy(z.x, z.y)
		);
	}
}
