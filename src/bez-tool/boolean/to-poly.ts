import { IIntPoint, IntPoint } from "clipper-lib";
import { mix, clamp } from "../../fn";
import { IPoint } from "../../point/interface";
import { FIntersection } from "./intersections";
import { Bez3Slice } from "../shared/slice-arc";

export type IntKnot = IIntPoint & { t: number };
export function keyOfZ(z: IIntPoint) {
	return "X" + z.X + "Y" + z.Y;
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
			const arc = contour[k];
			let knots = [];

			// Add terminals
			for (let j = 0; j <= 1; j++) {
				const z = arc.eval(j);
				knots.push({
					t: j,
					X: Math.round(z.x * resolution),
					Y: Math.round(z.y * resolution)
				});
			}

			// Add intersections
			for (let s of splat) {
				if (s <= k || s >= k + 1) continue;
				const z = arc.eval(s - k);
				knots.push({
					t: s - k,
					X: Math.round(z.x * resolution),
					Y: Math.round(z.y * resolution)
				});
			}

			knots = diceKnots(arc, resolution, knots);
			for (let j = 0; j < knots.length - 1; j++) {
				termHash.add(keyOfZ(knots[j]));
				termHash.add(keyOfZ(knots[j + 1]));
				setSegHash(segHash, keyOfZ(knots[j]) + "-" + keyOfZ(knots[j + 1]), [
					arc,
					knots[j].t,
					knots[j + 1].t,
					sindex,
					j,
					k
				]);
				setSegHash(segHash, keyOfZ(knots[j + 1]) + "-" + keyOfZ(knots[j]), [
					arc,
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

function by_t(a: IntKnot, b: IntKnot) {
	return a.t - b.t;
}
function MakeKnot(t: number, s: IPoint, resolution: number) {
	return {
		X: Math.round(s.x * resolution),
		Y: Math.round(s.y * resolution),
		t: t
	};
}
function intKnotNotSame(knot: IntKnot, last: IntKnot) {
	return knot.X !== last.X || knot.Y !== last.Y;
}

const DICING_STOPS = 4;
function diceKnots(arc: Bez3Slice, resolution: number, knots: IntKnot[]) {
	let enableDicing = DICING_STOPS && !arc.isStraight();
	knots = knots.sort(by_t);
	let ans = [knots[0]],
		last = knots[0];
	for (let k = 1; k < knots.length; k++) {
		const knot = knots[k];
		if (intKnotNotSame(knot, last)) {
			if (enableDicing) {
				let lastStop = last;
				for (let p = 1; p < DICING_STOPS; p++) {
					const t = mix(last.t, knot.t, p / DICING_STOPS);
					const k = MakeKnot(t, arc.eval(t), resolution);
					if (intKnotNotSame(lastStop, k) && intKnotNotSame(knot, k)) {
						ans.push(k);
						lastStop = k;
					}
				}
			}
			ans.push(knot);
			last = knot;
		} else {
			last.t = knot.t < 1 / 2 ? Math.min(knot.t, last.t) : Math.max(knot.t, last.t);
		}
	}
	return ans;
}
