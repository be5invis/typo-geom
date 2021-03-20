import { Derivable } from "../derivable";
import { IVec2 } from "../point/interface";
import { Offset2 } from "../point/point";

export interface VectorSpace<T, X> {
	readonly neutral: T;
	// x + s * y
	addScale(x: T, s: X, y: T): T;
}

export interface InnerProductSpace<T, X> extends VectorSpace<T, X> {
	innerProduct(a: T, b: T): X;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export function vsQuadifyCurve<V>(vs: VectorSpace<V, number>, arc: Derivable<V>, n: number) {
	if (n < 1) throw new RangeError("vsQuadifyCurve: Must have at least 2 inner points");
	let knots: V[] = [];
	let zBefore = arc.eval(0),
		dBefore = arc.derivative(0);
	for (let k = 0; k < n; k++) {
		const tAfter = (k + 1) / n;
		const zAfter = arc.eval(tAfter);
		const dAfter = arc.derivative(tAfter);
		knots.push(vs.addScale(zBefore, 1 / (4 * n), dBefore));
		knots.push(vs.addScale(zAfter, -1 / (4 * n), dAfter));
		zBefore = zAfter;
		dBefore = dAfter;
	}

	return knots;
}

export const vsNumber: VectorSpace<number, number> = {
	neutral: 0,
	addScale: (a, b, c) => a + b * c
};
export const vsNumberVec2: InnerProductSpace<IVec2, number> = {
	neutral: new Offset2(0, 0),
	addScale: (a, b, c) => new Offset2(a.x + b * c.x, a.y + b * c.y),
	innerProduct: (a, b) => a.x * b.x + a.y * b.y
};

///////////////////////////////////////////////////////////////////////////////////////////////////

export function ipsErrorFitsIn<T>(
	ips: InnerProductSpace<T, number>,
	c: Derivable<T>,
	offPoints: T[],
	squareError: number
) {
	let zBefore = c.eval(0),
		dBefore = c.derivative(0);

	const n = offPoints.length;

	for (let j = 0; j < n; j++) {
		const zOffQu = offPoints[j];

		const tAfter = (j + 1) / n;
		const zAfter = c.eval(tAfter);
		const dAfter = c.derivative(tAfter);

		if (j % 2) {
			const zOffQuPrev = offPoints[j - 1];
			const zBeforeQu = vsMix(ips, zOffQu, zOffQuPrev, 1 / 2);
			const dBeforeQu = vsScale(ips, n, vsDifference(ips, zOffQu, zOffQuPrev));
			if (ipsSquareDist(ips, zBefore, zBeforeQu) > squareError) return false;
			if (ipsSquareDist(ips, dBefore, dBeforeQu) > 4 * n * n * squareError) return false;
		}

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
	for (let s = 1; s <= maxSegments; s++) {
		let offPoints = vsQuadifyCurve(ips, c, s);
		if (!offPoints || !offPoints.length) continue;
		if (ipsErrorFitsIn(ips, c, offPoints, allowError * allowError)) return offPoints;
		results = offPoints;
	}
	return results;
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function vsScale<T>(vs: VectorSpace<T, number>, s: number, x: T) {
	return vs.addScale(vs.neutral, s, x);
}

function vsDifference<T>(vs: VectorSpace<T, number>, a: T, b: T) {
	return vs.addScale(a, -1, b);
}

function vsMix<T>(vs: VectorSpace<T, number>, a: T, b: T, p: number) {
	return vs.addScale(a, p, vsDifference(vs, b, a));
}

function ipsSquareDist<T>(ips: InnerProductSpace<T, number>, a: T, b: T) {
	const d = vsDifference(ips, a, b);
	return ips.innerProduct(d, d);
}
