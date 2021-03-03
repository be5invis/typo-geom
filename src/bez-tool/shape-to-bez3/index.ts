import { Arc, Arcs } from "../../derivable";
import { mix } from "../../fn";
import { Point2 } from "../../point/point";
import { Bez3Slice } from "../shared/slice-arc";

export function convertShapeToBez3(shape: Arc[][], err: number): Bez3Slice[][] {
	let ans: Bez3Slice[][] = [];
	for (let contour of shape) ans.push(convertContourToBez3(contour, err));
	return ans;
}
export function convertContourToBez3(contour: Arc[], err: number): Bez3Slice[] {
	let arcs: Bez3Slice[] = [];
	for (let j = 0; j < contour.length; j++) {
		const jLast = (j - 1 + contour.length) % contour.length;
		const arcLast = contour[jLast];
		const arc = contour[j];
		const zLast = arcLast.eval(1),
			zStart = arc.eval(0);
		if (!Point2.areClose(zLast, zStart, err)) {
			arcs.push(Bez3Slice.fromStraightSegment(new Arcs.StraightSegment(zLast, zStart)));
		}
		if (arc instanceof Arcs.Bez3) {
			arcs.push(new Bez3Slice(arc.a, arc.b, arc.c, arc.d));
		} else {
			convertArcToBez3(arc, err, arcs, 0, 1, 0, 8);
		}
	}
	return arcs;
}

const PROBE_STOPS = 4;
function convertArcToBez3(
	arc: Arc,
	err: number,
	sink: Bez3Slice[],
	t0: number,
	t1: number,
	depth: number,
	maxDepth: number
) {
	const testArc = Bez3Slice.fromArcSlice(arc, t0, t1);
	if (depth >= maxDepth) {
		sink.push(testArc);
		return;
	}

	let needsSubdivide = false;
	for (let t = 1; t < PROBE_STOPS; t++) {
		const zTest = testArc.eval(t / PROBE_STOPS);
		const zArc = arc.eval(mix(t0, t1, t / PROBE_STOPS));
		if (!Point2.areClose(zTest, zArc, err)) {
			needsSubdivide = true;
			break;
		}
	}

	if (!needsSubdivide) {
		sink.push(testArc);
	} else {
		let tMid = mix(t0, t1, 1 / 2);
		convertArcToBez3(arc, err, sink, t0, tMid, depth + 1, maxDepth);
		convertArcToBez3(arc, err, sink, tMid, t1, depth + 1, maxDepth);
	}
}
