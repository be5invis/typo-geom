import { EPSILON, MACHINE_EPSILON, numberClose } from "../fn";
import { IVec2 } from "./interface";

export class Offset2 implements IVec2 {
	private _m_vector_type: "Vec2" = "Vec2";
	x: number;
	y: number;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}
	clone() {
		return new Offset2(this.x, this.y);
	}
	dot(z: IVec2) {
		return this.x * z.x + this.y * z.y;
	}
	add(b: IVec2) {
		return new Offset2(this.x + b.x, this.y + b.y);
	}
	addScale(s: number, b: IVec2) {
		return new Offset2(this.x + s * b.x, this.y + s * b.y);
	}
	minus(b: IVec2) {
		return new Offset2(this.x - b.x, this.y - b.y);
	}
	mix(b: Offset2, t: number) {
		return new Offset2(this.x + (b.x - this.x) * t, this.y + (b.y - this.y) * t);
	}
	angle() {
		return Math.atan2(this.y, this.x);
	}
	mag() {
		return Math.hypot(this.x, this.y);
	}
	isAlmostZero(ep: number = EPSILON) {
		return this.x * this.x + this.y * this.y < ep * ep;
	}
	scale(t: number) {
		return new Offset2(this.x * t, this.y * t);
	}
	scaleXY(tx: number, ty: number) {
		return new Offset2(this.x * tx, this.y * ty);
	}
	toLength(d: number) {
		const h = Math.hypot(this.x, this.y);
		return new Offset2((d * this.x) / h, (d * this.y) / h);
	}
	static from(p: IVec2) {
		return new Offset2(p.x, p.y);
	}
	static differenceFrom(a: IVec2, b: IVec2) {
		return new Offset2(a.x - b.x, a.y - b.y);
	}
	static dot(a: IVec2, b: IVec2) {
		return a.x * b.x + a.y * b.y;
	}
	static cross(a: IVec2, b: IVec2) {
		return a.x * b.y - a.y * b.x;
	}
}

export class Point2 implements IVec2 {
	private _m_vector_type: "Point" = "Point";
	x: number;
	y: number;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}
	clone() {
		return new Point2(this.x, this.y);
	}

	mix(b: Point2, t: number) {
		return new Point2(this.x + (b.x - this.x) * t, this.y + (b.y - this.y) * t);
	}
	add(b: Offset2) {
		return new Point2(this.x + b.x, this.y + b.y);
	}
	addScale(s: number, b: Offset2) {
		return new Point2(this.x + s * b.x, this.y + s * b.y);
	}
	minus(b: Point2) {
		return new Offset2(this.x - b.x, this.y - b.y);
	}
	scaleAround(z: Point2, t: number) {
		return z.add(this.minus(z).scale(t));
	}
	scaleAroundXY(z: Point2, tx: number, ty: number) {
		return z.add(this.minus(z).scaleXY(tx, ty));
	}
	isClose(b: IVec2, tolerance: number) {
		return Point2.squareDist(this, b) <= tolerance * tolerance;
	}
	static intersect(a: IVec2, b: IVec2, c: IVec2, d: IVec2, fInfinite = false) {
		const p1x = a.x,
			p1y = a.y,
			v1x = b.x - a.x,
			v1y = b.y - a.y,
			p2x = c.x,
			p2y = c.y,
			v2x = d.x - c.x,
			v2y = d.y - c.y;

		const cross = v1x * v2y - v1y * v2x;
		if (!numberClose(cross, 0, MACHINE_EPSILON)) {
			let dx = p1x - p2x,
				dy = p1y - p2y,
				u1 = (v2x * dy - v2y * dx) / cross,
				u2 = (v1x * dy - v1y * dx) / cross,
				// Check the ranges of the u parameters if the line is not
				// allowed to extend beyond the definition points, but
				// compare with EPSILON tolerance over the [0, 1] bounds.
				uMin = -EPSILON,
				uMax = 1 + EPSILON;
			if (fInfinite || (uMin < u1 && u1 < uMax && uMin < u2 && u2 < uMax)) {
				if (!fInfinite) u1 = u1 <= 0 ? 0 : u1 >= 1 ? 1 : u1;
				return new Point2(p1x + u1 * v1x, p1y + u1 * v1y);
			}
		}
		return null;
	}
	static rayIntersection(p1: IVec2, _d1: IVec2, _d2: IVec2, p2: IVec2): Point2 | null {
		const d1 = Offset2.differenceFrom(_d1, p1);
		const d2 = Offset2.differenceFrom(_d2, p2);
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
				return new Point2((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
			} else {
				return null;
			}
		}
		const u = numU / det;
		const v = numV / det;
		if (u <= 0 || v <= 0) return null;
		return new Point2(p1.x + d1.x * u, p1.y + d1.y * u);
	}

	static project(a: IVec2, b: IVec2, p: IVec2) {
		const scalar = Point2.scalarProject(a, b, p);
		return Point2.from(a).mix(Point2.from(b), scalar);
	}
	static scalarProject(a: IVec2, b: IVec2, p: IVec2) {
		const apx = p.x - a.x,
			apy = p.y - a.y;
		const abx = b.x - a.x,
			aby = b.y - a.y;
		return (apx * abx + apy * aby) / (abx * abx + aby * aby);
	}
	static cosAngle(a: IVec2, b: IVec2, p: IVec2) {
		const vp = Offset2.differenceFrom(p, a);
		const vb = Offset2.differenceFrom(b, a);
		return Math.min(1, Math.max(-1, vp.dot(vb) / (vp.mag() * vb.mag())));
	}
	static squareDist(a: IVec2, b: IVec2) {
		return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
	}
	static areClose(a: IVec2, b: IVec2, t: number) {
		return this.squareDist(a, b) < t * t;
	}
	static dist(a: IVec2, b: IVec2) {
		return Math.hypot(a.x - b.x, a.y - b.y);
	}
	static signedPointLineDist(a: IVec2, b: IVec2, p: IVec2) {
		return signedDistanceImpl(a.x, a.y, b.x, b.y, p.x, p.y);
	}
	static pointLineDist(a: IVec2, b: IVec2, p: IVec2) {
		return getDistanceImpl(a.x, a.y, b.x, b.y, p.x, p.y);
	}
	static from(p: IVec2) {
		return new Point2(p.x, p.y);
	}
}

function signedDistanceImpl(px: number, py: number, vx: number, vy: number, x: number, y: number) {
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
function getDistanceImpl(px: number, py: number, vx: number, vy: number, x: number, y: number) {
	return Math.abs(signedDistanceImpl(px, py, vx, vy, x, y));
}
