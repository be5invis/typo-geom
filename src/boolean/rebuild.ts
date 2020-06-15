import { IIntPoint } from "clipper-lib";
import { Point } from "../point/point";
import { Bez3Slice } from "./slice-arc";
import { keyOfZ, SegEntry } from "./to-poly";

type PrimSegment = [Bez3Slice, number, number];

export function rebuildShape(
	polys: IIntPoint[][],
	segHash: Map<string, SegEntry>,
	termHash: Set<string>,
	RESOLUTION: number
) {
	let ans = [];
	for (let c = 0; c < polys.length; c++) {
		let cx = rebuildContour(polys[c], segHash, termHash, RESOLUTION);
		if (cx.length) ans.push(cx);
	}
	return ans;
}

function rebuildContour(
	_poly: IIntPoint[],
	segHash: Map<string, SegEntry>,
	termHash: Set<string>,
	RESOLUTION: number
) {
	let j0 = 0;
	for (; j0 < _poly.length && !termHash.has(keyOfZ(_poly[j0])); j0++);
	const poly = _poly.slice(j0).concat(_poly.slice(0, j0 + 1));
	let primSegments: PrimSegment[] = [];
	for (let j = 0; j < poly.length - 1; j++) {
		const segKey = keyOfZ(poly[j]) + "-" + keyOfZ(poly[j + 1]);
		if (segHash.has(segKey)) {
			primSegments.push(segHash.get(segKey) as any);
		} else {
			const a = descale(poly[j], RESOLUTION);
			const d = descale(poly[j + 1], RESOLUTION);
			const b = Point.from(a).mix(d, 1 / 3);
			const c = Point.from(a).mix(d, 2 / 3);
			primSegments.push([new Bez3Slice(a, b, c, d, 0, 1), 0, 1]);
		}
	}
	let ans = [primSegments[0]];
	for (let j = 1; j < primSegments.length; j++) {
		const last = ans[ans.length - 1];
		if (primSegments[j][0] === last[0]) {
			// annex
			if (last[1] < last[2]) {
				last[1] = Math.min(last[1], primSegments[j][1]);
				last[2] = Math.max(last[2], primSegments[j][2]);
			} else {
				last[1] = Math.max(last[1], primSegments[j][1]);
				last[2] = Math.min(last[2], primSegments[j][2]);
			}
		} else {
			// push
			ans.push(primSegments[j]);
		}
	}
	return ans.map(([s, t1, t2]) => split(s, t1, t2));
}
function descale(Z: IIntPoint, RESOLUTION: number) {
	return new Point(Z.X / RESOLUTION, Z.Y / RESOLUTION);
}
function split(s: Bez3Slice, t1: number, t2: number) {
	if (t1 > t2) {
		const b = splitImpl(s, t2, t1);
		return new Bez3Slice(b.d, b.c, b.b, b.a, b.t2, b.t1);
	} else {
		return splitImpl(s, t1, t2);
	}
}
function splitImpl(s: Bez3Slice, t1: number, t2: number) {
	return s.sliceRatio(t1, t2);
}
