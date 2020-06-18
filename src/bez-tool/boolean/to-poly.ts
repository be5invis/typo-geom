import { IIntPoint, IntPoint } from "clipper-lib";
import { mix } from "../../fn";
import { IPoint } from "../../point/interface";
import { Bez3Slice } from "../shared/slice-arc";
import { FIntersection } from "./intersections";

export type IntKnot = IIntPoint & { t: number };
export function keyOfZ(z: IIntPoint) {
	return "X" + z.X + "Y" + z.Y;
}

export class SegEntry {
	constructor(
		readonly arc: Bez3Slice,
		public start: number,
		public end: number,
		public readonly sid: number = 0,
		public readonly jid = 0,
		public readonly kid = 0
	) {}
	compare(b: SegEntry) {
		return this.sid - b.sid || this.jid - b.jid || this.kid - b.kid;
	}
	tryAnnex(b: SegEntry) {
		if (this.arc === b.arc) {
			if (this.start < b.end) {
				this.start = Math.min(this.start, b.start);
				this.end = Math.max(this.end, b.end);
			} else {
				this.start = Math.max(this.start, b.start);
				this.end = Math.min(this.end, b.end);
			}
			return true;
		} else {
			return false;
		}
	}
	toArc() {
		if (this.start <= this.end) {
			return this.arc.sliceRatio(this.start, this.end);
		} else {
			let rev = this.arc.sliceRatio(this.end, this.start);
			return new Bez3Slice(rev.d, rev.c, rev.b, rev.a);
		}
	}
}

function setSegHash(segHash: Map<string, SegEntry>, key: string, entry: SegEntry) {
	const existing = segHash.get(key);
	if (!existing || entry.compare(existing) < 0) {
		segHash.set(key, entry);
	}
}

export function toPoly(
	shape: Bez3Slice[][],
	sid: number,
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
				setSegHash(
					segHash,
					keyOfZ(knots[j]) + "-" + keyOfZ(knots[j + 1]),
					new SegEntry(arc, knots[j].t, knots[j + 1].t, sid, j, k)
				);
				setSegHash(
					segHash,
					keyOfZ(knots[j + 1]) + "-" + keyOfZ(knots[j]),
					new SegEntry(arc, knots[j + 1].t, knots[j].t, sid, j, k)
				);
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

const DICING_STOPS = 0;
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
