import { ShapeTransform, Shape, BoundingBox } from "./interface";
import { IPoint } from "../point/interface";
import { Point } from "../point/point";
import { BB } from "./bounding-box";
import { Transformed } from "./arcs";

export class LinearTransform implements ShapeTransform {
	xx: number;
	yx: number;
	xy: number;
	yy: number;
	tx: number;
	ty: number;
	constructor(xx: number, xy: number, yx: number, yy: number, x: number, y: number) {
		this.xx = xx;
		this.xy = xy;
		this.yx = yx;
		this.yy = yy;
		this.tx = x;
		this.ty = y;
	}

	x(x: number, y: number) {
		return x * this.xx + y * this.xy + this.tx;
	}
	y(x: number, y: number) {
		return x * this.yx + y * this.yy + this.ty;
	}
	dxx(x: number, y: number) {
		return this.xx;
	}
	dxy(x: number, y: number) {
		return this.xy;
	}
	dyx(x: number, y: number) {
		return this.yx;
	}
	dyy(x: number, y: number) {
		return this.yy;
	}

	inverse() {
		const denom = this.xx * this.yy - this.yx * this.xy;
		return new LinearTransform(
			this.yy / denom,
			-this.xy / denom,
			-this.yx / denom,
			this.xx / denom,
			-(this.tx * this.yy - this.ty * this.xy) / denom,
			-(-this.tx * this.yx + this.ty * this.xx) / denom
		);
	}

	static neutral: LinearTransform = new LinearTransform(1, 0, 0, 1, 0, 0);
}

export class CompositeTransform implements ShapeTransform {
	private constructor(private a: ShapeTransform, private b: ShapeTransform) {}
	x(x: number, y: number) {
		const x1 = this.a.x(x, y);
		const y1 = this.a.y(x, y);
		return this.b.x(x1, y1);
	}
	y(x: number, y: number) {
		const x1 = this.a.x(x, y);
		const y1 = this.a.y(x, y);
		return this.b.y(x1, y1);
	}
	dxx(x: number, y: number) {
		const x1 = this.a.x(x, y);
		const y1 = this.a.y(x, y);
		return this.b.dxx(x1, y1) * this.a.dxx(x, y) + this.b.dxy(x1, y1) * this.a.dyx(x, y);
	}
	dxy(x: number, y: number) {
		const x1 = this.a.x(x, y);
		const y1 = this.a.y(x, y);
		return this.b.dxx(x1, y1) * this.a.dxy(x, y) + this.b.dxy(x1, y1) * this.a.dyy(x, y);
	}
	dyx(x: number, y: number) {
		const x1 = this.a.x(x, y);
		const y1 = this.a.y(x, y);
		return this.b.dyx(x1, y1) * this.a.dxx(x, y) + this.b.dyy(x1, y1) * this.a.dyx(x, y);
	}
	dyy(x: number, y: number) {
		const x1 = this.a.x(x, y);
		const y1 = this.a.y(x, y);
		return this.b.dyx(x1, y1) * this.a.dxy(x, y) + this.b.dyy(x1, y1) * this.a.dyy(x, y);
	}

	static from(a: ShapeTransform, b: ShapeTransform) {
		if (a === LinearTransform.neutral) return b;
		if (b === LinearTransform.neutral) return a;
		return new CompositeTransform(a, b);
	}
}

export function transformPoint(t: ShapeTransform, z: IPoint) {
	return new Point(t.x(z.x, z.y), t.y(z.x, z.y));
}

export function transformPointXY(t: ShapeTransform, x: number, y: number) {
	return new Point(t.x(x, y), t.y(x, y));
}

export function transformShape(sh: Shape, tfm: ShapeTransform) {
	let out: Shape = [];
	for (let j = 0; j < sh.length; j++) {
		const c = sh[j];
		const contour: typeof sh[0] = [];
		for (let k = 0; k < c.length; k++) {
			contour[k] = new Transformed(c[k], tfm);
		}
		out[j] = contour;
	}
	return out;
}

export function transformBoundingBox(tfm: ShapeTransform, b: BoundingBox) {
	const nbb = BB.empty();
	BB.coverPoint(nbb, transformPointXY(tfm, b.xMin, b.yMin));
	BB.coverPoint(nbb, transformPointXY(tfm, b.xMax, b.yMax));
	BB.coverPoint(nbb, transformPointXY(tfm, b.xMax, b.yMin));
	BB.coverPoint(nbb, transformPointXY(tfm, b.xMin, b.yMax));
	return nbb;
}
