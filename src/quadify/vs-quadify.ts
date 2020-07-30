import { Derivable } from "../derivable";
import { IVec2 } from "../point/interface";
import { Offset2 } from "../point/point";

export interface VectorSpace<T, X> {
	readonly neutral: T;
	addScale(x: T, s: X, y: T): T;
}

export function vsQuadifyCurve<V>(vs: VectorSpace<V, number>, arc: Derivable<V>, n: number) {
	const v = getConstantTerms(vs, arc, n);
	const a = Array(n).fill(0);
	const b = Array(n).fill(0);
	const c = Array(n).fill(0);
	getTriDiagonalABC(n, a, b, c);
	inPlaceSolveTridiagonal(vs, n, a, b, c, v);
	return v;
}

export const vsNumber: VectorSpace<number, number> = {
	neutral: 0,
	addScale: (a, b, c) => a * b + c
};
export const vsNumberVec2: VectorSpace<IVec2, number> = {
	neutral: new Offset2(0, 0),
	addScale: (a, b, c) => new Offset2(a.x + b * c.x, a.y + b * c.y)
};

// Generalized, in-place Thomas algorithm
function inPlaceSolveTridiagonal<V>(
	vs: VectorSpace<V, number>,
	n: number,
	a: number[],
	b: number[],
	c: number[],
	x: V[]
) {
	for (let j = 1; j < n; j++) {
		const w = a[j] / b[j - 1];
		b[j] -= w * c[j - 1];
		x[j] = vs.addScale(x[j], -w, x[j - 1]);
	}

	x[n - 1] = vs.addScale(vs.neutral, 1 / b[n - 1], x[n - 1]);
	for (let i = n - 1; i-- > 0; ) {
		x[i] = vs.addScale(x[i], -c[i], x[i + 1]);
		x[i] = vs.addScale(vs.neutral, 1 / b[i], x[i]);
	}
}

function getTriDiagonalABC(n: number, a: number[], b: number[], c: number[]) {
	b[0] = b[n - 1] = 1;
	for (let j = 1; j < n - 1; j++) {
		const mixBefore = 1 / 8,
			mixHere = 3 / 4,
			mixNext = 1 / 8;
		a[j] = mixBefore;
		b[j] = mixHere;
		c[j] = mixNext;
	}
}

function getConstantTerms<V>(vs: VectorSpace<V, number>, c: Derivable<V>, n: number) {
	const constantTerms: V[] = Array(n);
	const start = c.eval(0);
	const end = c.eval(1);
	const dStart = c.derivative(0);
	const dEnd = c.derivative(1);
	const dScale = 1 / (2 * n);

	constantTerms[0] = vs.addScale(start, dScale, dStart);
	for (let j = 1; j < n - 1; j++) constantTerms[j] = c.eval((j + 1 / 2) / n);
	constantTerms[n - 1] = vs.addScale(end, -dScale, dEnd);

	return constantTerms;
}
