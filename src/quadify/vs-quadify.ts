import { allowedNodeEnvironmentFlags } from "process";
import { Derivable } from "../derivable";
import { IVec2 } from "../point/interface";
import { Offset2 } from "../point/point";

export interface VectorSpace<T, X> {
	readonly neutral: T;
	addScale(x: T, s: X, y: T): T;
}

export interface InnerProductSpace<T, X> extends VectorSpace<T, X> {
	innerProduct(a: T, b: T): X;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export function vsQuadifyCurve<V>(vs: VectorSpace<V, number>, arc: Derivable<V>, n: number) {
	if (n < 2) throw new RangeError("vsQuadifyCurve: Must have at least 2 inner points");
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
export const vsNumberVec2: InnerProductSpace<IVec2, number> = {
	neutral: new Offset2(0, 0),
	addScale: (a, b, c) => new Offset2(a.x + b * c.x, a.y + b * c.y),
	innerProduct: (a, b) => a.x * b.x + a.y * b.y
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

///////////////////////////////////////////////////////////////////////////////////////////////////

export function ipsErrorFitsIn<T>(
	ips: InnerProductSpace<T, number>,
	c: Derivable<T>,
	offPoints: T[],
	squareError: number
) {
	let zBefore = c.eval(0),
		dBefore = c.derivative(0);

	for (let j = 0; j < offPoints.length; j++) {
		const zOffQu = offPoints[j];

		const zBeforeQu = j > 0 ? vsMix(ips, zOffQu, offPoints[j - 1], 1 / 2) : c.eval(0);
		const zAfterQu =
			j < offPoints.length - 1 ? vsMix(ips, zOffQu, offPoints[j + 1], 1 / 2) : c.eval(1);

		const tAfter = (j + 1) / offPoints.length;
		const zAfter = c.eval(tAfter);
		const dAfter = c.derivative(tAfter);

		const dbBeforeCubic = vsScale(ips, 1 / (3 * offPoints.length), dBefore);
		const dbAfterCubic = vsScale(ips, -1 / (3 * offPoints.length), dAfter);
		const dbBeforeQu = vsScale(ips, 2 / 3, vsDifference(ips, zOffQu, zBeforeQu));
		const dbAfterQu = vsScale(ips, 2 / 3, vsDifference(ips, zOffQu, zAfterQu));

		if (ipsSquareDist(ips, zBefore, zBeforeQu) > squareError) return false;
		if (ipsSquareDist(ips, zAfter, zAfterQu) > squareError) return false;
		if (ipsSquareDist(ips, dbBeforeCubic, dbBeforeQu) > squareError) return false;
		if (ipsSquareDist(ips, dbAfterCubic, dbAfterQu) > squareError) return false;

		zBefore = zAfter;
		dBefore = dAfter;
	}
	return true;
}

export function ipsAutoQuadify<T>(
	ips: InnerProductSpace<T, number>,
	c: Derivable<T>,
	allowError: number = 0.1,
	maxSegments: number = 32
) {
	let results = null;
	for (let s = 2; s <= maxSegments; s++) {
		let offPoints = vsQuadifyCurve(ips, c, s);
		if (!offPoints || !offPoints.length) continue;
		if (ipsErrorFitsIn(ips, c, offPoints, allowError * allowError)) return offPoints;
		results = offPoints;
	}
	return results;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function vsDifference<T>(vs: VectorSpace<T, number>, a: T, b: T) {
	return vs.addScale(a, -1, b);
}

function vsScale<T>(vs: VectorSpace<T, number>, p: number, a: T) {
	return vs.addScale(vs.neutral, p, a);
}

function vsMix<T>(vs: VectorSpace<T, number>, a: T, b: T, p: number) {
	return vs.addScale(a, p, vsDifference(vs, b, a));
}

function ipsSquareDist<T>(ips: InnerProductSpace<T, number>, a: T, b: T) {
	const d = vsDifference(ips, a, b);
	return ips.innerProduct(d, d);
}
