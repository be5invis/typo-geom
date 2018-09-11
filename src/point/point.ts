import { IPoint } from "./interface";

export class Point implements IPoint {
	x: number = 0;
	y: number = 0;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}
	clone() {
		return new Point(this.x, this.y);
	}
	dot(z: IPoint) {
		return this.x * z.x + this.y * z.y;
	}
	mix(b: IPoint, t: number) {
		return new Point(this.x + (b.x - this.x) * t, this.y + (b.y - this.y) * t);
	}
	add(b: IPoint) {
		return new Point(this.x + b.x, this.y + b.y);
	}
	minus(b: IPoint) {
		return new Point(this.x - b.x, this.y - b.y);
	}
	angle() {
		return Math.atan2(this.y, this.x);
	}
	mag() {
		return Math.hypot(this.x, this.y);
	}
	scale(t: number) {
		return new Point(this.x * t, this.y * t);
	}
	scaleXY(tx: number, ty: number) {
		return new Point(this.x * tx, this.y * ty);
	}
	scaleAround(z: Point, t: number) {
		return this.minus(z)
			.scale(t)
			.add(z);
	}
	scaleAroundXY(z: Point, tx: number, ty: number) {
		return this.minus(z)
			.scaleXY(tx, ty)
			.add(z);
	}
	toLength(d: number) {
		const h = Math.hypot(this.x, this.y);
		return new Point((d * this.x) / h, (d * this.y) / h);
	}
	rotate90() {
		return new Point(this.y, -this.x);
	}
	static intersection(a: IPoint, b: IPoint, c: IPoint, d: IPoint) {
		const a1 = b.y - a.y;
		const b1 = a.x - b.x;
		const c1 = -1 * a1 * a.x - b1 * a.y;
		const a2 = d.y - c.y;
		const b2 = c.x - d.x;
		const c2 = -1 * a2 * c.x - b2 * c.y;
		const temp = b1 * a2 - b2 * a1;
		return new Point((c1 * b2 - c2 * b1) / temp, (a1 * c2 - a2 * c1) / temp);
	}
	static rayIntersection(p1: IPoint, _d1: IPoint, _d2: IPoint, p2: IPoint): Point | null {
		const d1 = Point.from(_d1).minus(p1);
		const d2 = Point.from(_d2).minus(p2);
		const det = d2.x * d1.y - d2.y * d1.x;
		const numU = (p2.y - p1.y) * d2.x - (p2.x - p1.x) * d2.y;
		const numV = (p2.y - p1.y) * d1.x - (p2.x - p1.x) * d1.y;

		if (Math.abs(det) < 1e-6) {
			if (
				Math.abs(numU) < 1e-12 &&
				Math.abs(numV) < 1e-12 &&
				numU * det <= 0 &&
				numV * det <= 0
			) {
				return new Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
			} else {
				return null;
			}
		}
		const u = numU / det;
		const v = numV / det;
		if (u <= 0 || v <= 0) return null;
		return new Point(p1.x + d1.x * u, p1.y + d1.y * u);
	}
	static project(a: IPoint, b: IPoint, p: IPoint) {
		const apx = p.x - a.x,
			apy = p.y - a.y;
		const abx = b.x - a.x,
			aby = b.y - a.y;
		const mag = (apx * abx + apy * aby) / (abx * abx + aby * aby);
		return new Point(a.x + abx * mag, a.y + aby * mag);
	}
	static projectSignedDist(a: IPoint, b: IPoint, p: IPoint) {
		return Point.project(a, b, p)
			.minus(a)
			.dot(
				Point.from(b)
					.minus(a)
					.toLength(1)
			);
	}
	static projectSignedProp(a: IPoint, b: IPoint, p: IPoint) {
		const vProj = Point.from(p).minus(a);
		const vba = Point.from(b).minus(a);
		return vProj.dot(vba) / (vba.mag() * vba.mag());
	}
	static cosAngle(a: IPoint, b: IPoint, p: IPoint) {
		const vp = Point.from(p).minus(a);
		const vb = Point.from(b).minus(a);
		return Math.min(1, Math.max(-1, vp.dot(vb) / (vp.mag() * vb.mag())));
	}
	static dist(a: IPoint, b: IPoint, p: IPoint) {
		const c = Point.cross(new Point(0, 0).add(a).minus(b), new Point(0, 0).add(p).minus(b));
		const d = Point.project(a, b, p)
			.minus(p)
			.mag();
		return c > 0 ? d : -d;
	}
	static dot(a: IPoint, b: IPoint) {
		return a.x * b.x + a.y * b.y;
	}
	static cross(a: IPoint, b: IPoint) {
		return a.x * b.y - a.y * b.x;
	}
	static mixRange(a: IPoint, b: IPoint, c: IPoint, d: IPoint, t: number) {
		return new Point(b.x - t * (b.x - a.x + d.x - c.x), b.y - t * (b.y - a.y + d.y - c.y));
	}
	static from(p: IPoint) {
		return new Point(p.x, p.y);
	}
}

export class GlyphPoint extends Point {
	on: boolean = false;
	key: boolean = false;

	constructor(x: number = 0, y: number = 0, on: boolean = false, key: boolean = false) {
		super(x, y);
		this.on = on;
		this.key = key;
	}
	clone() {
		return new GlyphPoint(this.x, this.y, this.on, this.key);
	}
}

export function z(x: number, y: number) {
	return new Point(x, y);
}
