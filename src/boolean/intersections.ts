import { Bez3Slice } from "./slice-arc";
import { bez3Intersections } from "./bez3-intersections";
import { BoundingBox, BB } from "../derivable";

export type FIntersection = { t: number; x: number; y: number };
export type FIntersectionPair = [FIntersection, FIntersection];

const g_boundingBoxCache = new WeakMap<Bez3Slice, BoundingBox>();
function getBoundingBoxCached(c: Bez3Slice) {
	if (g_boundingBoxCache.has(c)) {
		return g_boundingBoxCache.get(c)!;
	} else {
		const box = c.getBoundingBox();
		g_boundingBoxCache.set(c, box);
		return box;
	}
}

function pairIteration(c1: Bez3Slice, c2: Bez3Slice, results: FIntersectionPair[]) {
	if (c1.isLinear() && c2.isLinear()) return;
	const intersections = bez3Intersections(c1, c2);
	for (let [t1, z1, t2, z2] of intersections) {
		results.push([
			{ t: c1.t1 + t1, x: z1.x, y: z1.y },
			{ t: c2.t1 + t2, x: z2.x, y: z2.y }
		]);
	}
}

function curveIntersects(c1: Bez3Slice[], c2: Bez3Slice[], threshold: number) {
	let intersections: FIntersectionPair[] = [];
	let nBBI = 0,
		nTotal = 0;
	for (const a1 of c1) {
		for (const a2 of c2) {
			nTotal += 1;
			if (BB.intersects(getBoundingBoxCached(a1), getBoundingBoxCached(a2))) {
				nBBI += 1;
				pairIteration(a1, a2, intersections);
			}
		}
	}
	return intersections;
}

export function findAllSelfIntersections(shape: Bez3Slice[][], threshold: number) {
	let ans: FIntersection[][] = [];
	for (let c = 0; c < shape.length; c++) {
		let contour = shape[c];
		let i,
			len = contour.length - 2,
			results: FIntersection[] = [],
			result,
			left,
			right;
		// For any close contour, neighbor segments should not have any intersection.
		for (i = 0; i < len; i++) {
			left = contour.slice(i, i + 1);
			right = contour.slice(i + 2);
			result = curveIntersects(left, right, threshold);
			for (const [a, b] of result) results.push(a, b);
		}
		ans.push(results);
	}
	return ans;
}

export function findCrossIntersections(
	shape1: Bez3Slice[][],
	shape2: Bez3Slice[][],
	i1: FIntersection[][],
	i2: FIntersection[][],
	sameShape: boolean,
	threshold: number
) {
	for (let c = 0; c < shape1.length; c++) {
		for (let d = 0; d < shape2.length; d++) {
			if (!sameShape || c < d) {
				let l = shape1[c],
					r = shape2[d];
				let intersections = curveIntersects(l, r, threshold);
				for (const [a, b] of intersections) {
					i1[c].push(a), i2[d].push(b);
				}
			}
		}
	}
}

function by_t(a: FIntersection, b: FIntersection) {
	return a.t - b.t;
}
export function reduceIntersections(is: FIntersection[]) {
	if (!is.length) return is;
	is = is.sort(by_t);
	const ans = [is[0]];
	for (let j = 1; j < is.length; j++) {
		const last = ans[ans.length - 1];
		const current = is[j];
		if (current.t - last.t > 1e-5) {
			ans.push(current);
		}
	}
	return ans;
}
