import { IIntPoint } from "clipper-lib";
import { Point } from "../../point/point";
import { inPlaceRotateArray } from "../../util/in-place-array";
import { Bez3Slice } from "../shared/slice-arc";
import { keyOfZ, SegEntry } from "./to-poly";

export function rebuildShape(
	polys: IIntPoint[][],
	segHash: Map<string, SegEntry>,
	termHash: Set<string>,
	resolution: number
) {
	let rebuiltShape: Bez3Slice[][] = [];
	for (const poly of polys) {
		let rebuiltArc: Bez3Slice[] = [];
		rebuildContour(poly, segHash, termHash, resolution, rebuiltArc);
		if (rebuiltArc.length) rebuiltShape.push(rebuiltArc);
	}
	return rebuiltShape;
}

function rebuildContour(
	poly: IIntPoint[],
	segHash: Map<string, SegEntry>,
	termHash: Set<string>,
	resolution: number,
	sink: Bez3Slice[]
) {
	if (poly.length <= 1) return;
	preparePoly(poly, termHash);
	let primSegments = collectPrimSegments(poly, segHash, resolution);
	inPlaceAnnexPrimSegments(primSegments);
	for (const seg of primSegments) sink.push(seg.toArc());
}

function preparePoly(poly: IIntPoint[], termHash: Set<string>) {
	for (let j = 0; j < poly.length; j++) {
		if (termHash.has(keyOfZ(poly[j]))) {
			inPlaceRotateArray(poly, -j);
			break;
		}
	}
	if (poly[0].X !== poly[poly.length - 1].X || poly[0].Y !== poly[poly.length - 1].Y) {
		poly.push(poly[0]);
	}
}
function collectPrimSegments(
	poly: IIntPoint[],
	segHash: Map<string, SegEntry>,
	resolution: number
) {
	let primSegments: SegEntry[] = [];
	for (let j = 0; j < poly.length - 1; j++) {
		const segKey = keyOfZ(poly[j]) + "-" + keyOfZ(poly[j + 1]);
		if (segHash.has(segKey)) {
			primSegments.push(segHash.get(segKey) as any);
		} else {
			const a = descale(poly[j], resolution);
			const d = descale(poly[j + 1], resolution);
			const b = Point.from(a).mix(d, 1 / 3);
			const c = Point.from(a).mix(d, 2 / 3);
			primSegments.push(new SegEntry(new Bez3Slice(a, b, c, d), 0, 1));
		}
	}
	return primSegments;
}
function descale(Z: IIntPoint, resolution: number) {
	return new Point(Z.X / resolution, Z.Y / resolution);
}

function inPlaceAnnexPrimSegments(primSegments: SegEntry[]) {
	if (!primSegments.length) return;
	let i = 1,
		j = 1;
	for (; i < primSegments.length; i++) {
		let last = primSegments[j - 1],
			cur = primSegments[i];
		if (!last.tryAnnex(cur)) {
			primSegments[j++] = cur;
		}
	}
	primSegments.length = j;
}
