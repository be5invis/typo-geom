import { IJacobian2 } from "./interface";

/**
 * Represents a 2x2 Jacobian matrix
 * Arranged as:
 * ⎛ dxx dxy ⎞
 * ⎝ dyx dyy ⎠
 */
export class Jacobian2 implements IJacobian2 {
	constructor(
		public readonly dxx: number,
		public readonly dxy: number,
		public readonly dyx: number,
		public readonly dyy: number
	) {}

	static readonly identity: Jacobian2 = new Jacobian2(1, 0, 0, 1);
	static from(j: IJacobian2) {
		return new Jacobian2(j.dxx, j.dxy, j.dyx, j.dyy);
	}
	static multiply(l: IJacobian2, r: IJacobian2) {
		return new Jacobian2(
			l.dxx * r.dxx + l.dxy * r.dyx,
			l.dxx * r.dxy + l.dxy * r.dyy,
			l.dyx * r.dxx + l.dyy * r.dyx,
			l.dyx * r.dxy + l.dyy * r.dyy
		);
	}
}
