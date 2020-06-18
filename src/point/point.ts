import { IPoint } from "./interface";
import { numberClose, MACHINE_EPSILON, EPSILON } from "../fn";

export function z(x: number, y: number) {
	return new Point(x, y);
}

export class Point implements IPoint {
	x: number;
	y: number;

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
	addScale(s: number, b: IPoint) {
		return new Point(this.x + s * b.x, this.y + s * b.y);
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
		return this.minus(z).scale(t).add(z);
	}
	scaleAroundXY(z: Point, tx: number, ty: number) {
		return this.minus(z).scaleXY(tx, ty).add(z);
	}
	toLength(d: number) {
		const h = Math.hypot(this.x, this.y);
		return new Point((d * this.x) / h, (d * this.y) / h);
	}
	rotate90() {
		return new Point(this.y, -this.x);
	}
	isClose(b: IPoint, tolerance: number) {
		return Point.squareDist(this, b) <= tolerance * tolerance;
	}
	static intersect(a: IPoint, b: IPoint, c: IPoint, d: IPoint, fInfinite = false) {
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
				return new Point(p1x + u1 * v1x, p1y + u1 * v1y);
			}
		}
		return null;
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
		const scalar = Point.scalarProject(a, b, p);
		return Point.from(a).mix(b, scalar);
	}
	static scalarProject(a: IPoint, b: IPoint, p: IPoint) {
		const apx = p.x - a.x,
			apy = p.y - a.y;
		const abx = b.x - a.x,
			aby = b.y - a.y;
		return (apx * abx + apy * aby) / (abx * abx + aby * aby);
	}
	static cosAngle(a: IPoint, b: IPoint, p: IPoint) {
		const vp = Point.from(p).minus(a);
		const vb = Point.from(b).minus(a);
		return Math.min(1, Math.max(-1, vp.dot(vb) / (vp.mag() * vb.mag())));
	}
	static squareDist(a: IPoint, b: IPoint) {
		return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
	}
	static dist(a: IPoint, b: IPoint) {
		return Math.hypot(a.x - b.x, a.y - b.y);
	}
	static signedPointLineDist(a: IPoint, b: IPoint, p: IPoint) {
		return signedDistance(a.x, a.y, b.x, b.y, p.x, p.y);
	}
	static pointLineDist(a: IPoint, b: IPoint, p: IPoint) {
		return getDistance(a.x, a.y, b.x, b.y, p.x, p.y);
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

function signedDistance(px: number, py: number, vx: number, vy: number, x: number, y: number) {
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
function getDistance(px: number, py: number, vx: number, vy: number, x: number, y: number) {
	return Math.abs(signedDistance(px, py, vx, vy, x, y));
}
