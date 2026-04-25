import type { IntPoint } from "js-angusj-clipper";

import { mix } from "../../fn";
import type { IVec2 } from "../../point/interface";
import { Bez3Slice } from "../shared/slice-arc";

import type { FIntersection } from "./intersections";

export type IntKnot = IntPoint & { t: number };

export class SegHashStore {
	private terms = new Map<number, Map<number, SegStart>>();

	public addStart(z: IntPoint) {
		let s = this.terms.get(z.x);
		if (!s) {
			s = new Map();
			this.terms.set(z.x, s);
		}

		let t = s.get(z.y);
		if (!t) {
			t = new SegStart();
			s.set(z.y, t);
		}
		return t;
	}

	public getStart(z: IntPoint): undefined | SegStart {
		const s = this.terms.get(z.x);
		if (!s) return undefined;
		return s.get(z.y);
	}

	public getSegment(start: IntPoint, end: IntPoint) {
		const s = this.getStart(start);
		if (!s) return undefined;
		return s.getEnd(end);
	}
}

export class SegStart {
	private segments = new Map<number, Map<number, SegEntry>>();

	public addEnd(dest: IntPoint, entry: SegEntry) {
		let m = this.segments.get(dest.x);
		if (!m) {
			m = new Map();
			this.segments.set(dest.x, m);
		}
		const existing = m.get(dest.y);
		if (!existing || entry.compare(existing) < 0) {
			m.set(dest.y, entry);
		}
	}

	public getEnd(dest: IntPoint): undefined | SegEntry {
		const m = this.segments.get(dest.x);
		if (!m) return undefined;
		return m.get(dest.y);
	}
}

export class SegEntry {
	constructor(
		readonly arc: Bez3Slice,
		public start: number,
		public end: number,
		public readonly sid: number = 0,
		public readonly jid = 0,
		public readonly kid = 0,
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
			const rev = this.arc.sliceRatio(this.end, this.start);
			return new Bez3Slice(rev.d, rev.c, rev.b, rev.a);
		}
	}
}

export function toPoly(
	shape: Bez3Slice[][],
	sid: number,
	splats: FIntersection[][],
	segHash: SegHashStore,
	resolution: number,
) {
	const ans: IntPoint[][] = [];
	for (let j = 0; j < shape.length; j++) {
		const points: IntPoint[] = [];
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
					x: Math.round(z.x * resolution),
					y: Math.round(z.y * resolution),
				});
			}

			// Add intersections
			for (const s of splat) {
				if (s <= k || s >= k + 1) continue;
				const z = arc.eval(s - k);
				knots.push({
					t: s - k,
					x: Math.round(z.x * resolution),
					y: Math.round(z.y * resolution),
				});
			}

			knots = diceKnots(arc, resolution, knots);
			for (let j = 0; j < knots.length - 1; j++) {
				const start = knots[j],
					end = knots[j + 1];

				const forward = segHash.addStart(start);
				forward.addEnd(end, new SegEntry(arc, start.t, end.t, sid, j, k));

				const backward = segHash.addStart(end);
				backward.addEnd(start, new SegEntry(arc, end.t, start.t, sid, j, k));
			}
			for (let m = k > 0 ? 1 : 0; m < knots.length; m++) {
				points.push({ x: knots[m].x, y: knots[m].y });
			}
		}
		ans.push(points);
	}
	return ans;
}

function by_t(a: IntKnot, b: IntKnot) {
	return a.t - b.t;
}
function MakeKnot(t: number, s: IVec2, resolution: number) {
	return {
		x: Math.round(s.x * resolution),
		y: Math.round(s.y * resolution),
		t: t,
	};
}
function intKnotNotSame(knot: IntKnot, last: IntKnot) {
	return knot.x !== last.x || knot.y !== last.y;
}

const DICING_STOPS = 4;
function diceKnots(arc: Bez3Slice, resolution: number, knots: IntKnot[]) {
	const enableDicing = DICING_STOPS && !arc.isStraight();
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

export function PolySetIsEmpty(poly: IntPoint[][]) {
	if (!poly || poly.length === 0) return true;
	for (const contour of poly) {
		if (contour.length > 0) return false;
	}
	return true;
}
