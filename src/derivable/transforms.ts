import { IJacobian2, IVec2 } from "../point/interface";
import { Jacobian2 } from "../point/jacobian";
import { Point2 } from "../point/point";
import { Transformed } from "./arcs";
import { Shape, ShapeTransform } from "./interface";

export class LinearTransform implements ShapeTransform {
	public readonly xx: number;
	public readonly yx: number;
	public readonly xy: number;
	public readonly yy: number;
	public readonly tx: number;
	public readonly ty: number;

	public readonly j: Jacobian2;

	constructor(xx: number, xy: number, yx: number, yy: number, x: number, y: number) {
		this.xx = xx;
		this.xy = xy;
		this.yx = yx;
		this.yy = yy;
		this.tx = x;
		this.ty = y;

		this.j = new Jacobian2(this.xx, this.xy, this.yx, this.yy);
	}

	eval(t: IVec2): IVec2 {
		return new Point2(
			t.x * this.xx + t.y * this.xy + this.tx,
			t.x * this.yx + t.y * this.yy + this.ty
		);
	}
	derivative(_t: IVec2): IJacobian2 {
		return this.j;
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

/**
 * Combination of two transforms, apply a first then b.
 *
 * Note that b is the first parameter in the constructor
 */
export class CompositeTransform implements ShapeTransform {
	private constructor(private b: ShapeTransform, private a: ShapeTransform) {}

	eval(z: IVec2): IVec2 {
		return this.b.eval(this.a.eval(z));
	}

	derivative(z: IVec2): IJacobian2 {
		const z1 = this.a.eval(z);
		const j1 = this.a.derivative(z);
		const j2 = this.b.derivative(z1);
		return Jacobian2.multiply(j2, j1);
	}

	static from(a: ShapeTransform, b: ShapeTransform) {
		if (a === LinearTransform.neutral) return b;
		if (b === LinearTransform.neutral) return a;
		return new CompositeTransform(a, b);
	}
}

export function transformShape(sh: Shape, tfm: ShapeTransform) {
	let out: Shape = [];
	for (let j = 0; j < sh.length; j++) {
		const c = sh[j];
		const contour: (typeof sh)[0] = [];
		for (let k = 0; k < c.length; k++) {
			contour[k] = new Transformed(tfm, c[k]);
		}
		out[j] = contour;
	}
	return out;
}
