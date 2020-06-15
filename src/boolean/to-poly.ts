import { FIntersection } from "./intersections";
import { Bez3Slice } from "./slice-arc";
import { Point } from "../point/point";
import { IntPoint, IIntPoint } from "clipper-lib";

export type IntKnot = IIntPoint & { t: number };
export function keyOfZ(z: IIntPoint) {
	return "X" + z.X + "Y" + z.Y;
}
function by_t(a: IntKnot, b: IntKnot) {
	return a.t - b.t;
}
function filterKnots(knots: IntKnot[]) {
	knots = knots.sort(by_t);
	let ans = [knots[0]];
	for (let z of knots) {
		const last = ans[ans.length - 1];
		if (z.X !== last.X || z.Y !== last.Y) {
			ans.push(z);
		} else {
			last.t = z.t < 1 / 2 ? Math.min(z.t, last.t) : Math.max(z.t, last.t);
		}
	}
	return ans;
}

export type SegEntry = [Bez3Slice, number, number, number, number, number];
function setSegHash(segHash: Map<string, SegEntry>, key: string, entry: SegEntry) {
	if (segHash.has(key)) {
		const [seg, t1, t2, sindex, j, k] = entry;
		const [seg1, t11, t21, sindex1, j1, k1] = segHash.get(key)!;
		if (
			sindex < sindex1 ||
			(sindex === sindex1 && j < j1) ||
			(sindex === sindex1 && j === j1 && k < k1)
		) {
			segHash.set(key, entry);
		}
	} else {
		segHash.set(key, entry);
	}
}

function computeStaticBreaks(arc: Bez3Slice) {
	return arc.isLinear()
		? 1
		: Math.max(
				5,
				Math.ceil(
					(Point.from(arc.a).minus(arc.b).mag() +
						Point.from(arc.b).minus(arc.c).mag() +
						Point.from(arc.c).minus(arc.d).mag()) /
						8
				)
		  );
}

export function toPoly(
	shape: Bez3Slice[][],
	sindex: number,
	splats: FIntersection[][],
	segHash: Map<string, SegEntry>,
	termHash: Set<string>,
	resolution: number
) {
	let ans: IntPoint[][] = [];
	for (let j = 0; j < shape.length; j++) {
		let points: IntPoint[] = [];
		const contour = shape[j];
		const splat = splats[j];
		for (let k = 0; k < contour.length; k++) {
			let knots = [];
			const nStaticBreaks = computeStaticBreaks(contour[k]);
			for (let j = 0; j <= nStaticBreaks; j++) {
				const z = contour[k].eval(j / nStaticBreaks);
				const knot = {
					X: Math.round(z.x * resolution),
					Y: Math.round(z.y * resolution),
					t: j / nStaticBreaks
				};
				knots.push(knot);
				if (j === 0 || (j === nStaticBreaks && k === contour.length - 1)) {
					termHash.add(keyOfZ(knot));
				}
			}

			for (let s of splat) {
				if (s.t <= k || s.t >= k + 1) continue;
				const knot = {
					X: Math.round(s.x * resolution),
					Y: Math.round(s.y * resolution),
					t: s.t - k
				};
				knots.push(knot);
				termHash.add(keyOfZ(knot));
			}
			knots = filterKnots(knots);
			for (let j = 0; j < knots.length - 1; j++) {
				setSegHash(segHash, keyOfZ(knots[j]) + "-" + keyOfZ(knots[j + 1]), [
					contour[k],
					knots[j].t,
					knots[j + 1].t,
					sindex,
					j,
					k
				]);
				setSegHash(segHash, keyOfZ(knots[j + 1]) + "-" + keyOfZ(knots[j]), [
					contour[k],
					knots[j + 1].t,
					knots[j].t,
					sindex,
					j,
					k
				]);
			}
			for (let m = k > 0 ? 1 : 0; m < knots.length; m++) {
				points.push(new IntPoint(knots[m].X, knots[m].Y));
			}
		}
		ans.push(points);
	}
	return ans;
}
