import { Arc } from "../derivable/interface";
import { IVec2 } from "../point/interface";
import { ipsEstimateQuadifyError, vsNumberVec2, vsQuadifyCurve } from "./vs-quadify";

function findIntersection(p1: IVec2, d1: IVec2, d2: IVec2, p2: IVec2): IVec2 | null {
	const det = d2.x * d1.y - d2.y * d1.x;
	const numU = (p2.y - p1.y) * d2.x - (p2.x - p1.x) * d2.y;
	const numV = (p2.y - p1.y) * d1.x - (p2.x - p1.x) * d1.y;

	if (Math.abs(det) < 1e-6) {
		if (
			Math.abs(numU) < 1e-12 &&
			Math.abs(numV) < 1e-12 &&
			numU * det <= 0 &&
			numV * det >= 0
		) {
			return {
				x: (p1.x + p2.x) / 2,
				y: (p1.y + p2.y) / 2
			};
		} else {
			return null;
		}
	}
	const u = numU / det;
	const v = numV / det;
	if (u <= 0 || v >= 0) return null;
	return {
		x: p1.x + d1.x * u,
		y: p1.y + d1.y * u
	};
}

export function quadifyCurve(c: Arc, n: number = 1): IVec2[] | null {
	if (n <= 0) return [];
	if (n === 1) {
		const m = findIntersection(c.eval(0), c.derivative(0), c.derivative(1), c.eval(1));
		if (m) return [m];
		else return null;
	}
	return vsQuadifyCurve(vsNumberVec2, c, n);
}

export function autoQuadifyCurve(
	c: Arc,
	allowError: number = 0.1,
	maxSegments: number = 32
): IVec2[] | null {
	let results = null;
	for (let s = 1; s <= maxSegments; s++) {
		try {
			let offPoints = quadifyCurve(c, s);
			if (!offPoints || !offPoints.length) continue;
			let err = ipsEstimateQuadifyError(vsNumberVec2, c, offPoints);
			if (err <= allowError * allowError) return offPoints;
			results = offPoints;
		} catch (e) {}
	}
	return results;
}
