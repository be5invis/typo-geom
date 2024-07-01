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
	let sink = new ContourConversionSink();
	for (let j = 0; j < contour.length; j++) {
		convertArcToBez3(contour[j], err, sink);
	}
	sink.close();
	return sink.result;
}

class ContourConversionSink {
	private segments: Bez3Slice[] = [];
	public get result() {
		return this.segments;
	}

	public add(result: Bez3Slice) {
		if (this.segments.length > 0) {
			this.connectEndsIfNecessary(this.segments[this.segments.length - 1], result);
		}
		this.segments.push(result);
	}

	public close() {
		if (this.segments.length > 0) {
			this.connectEndsIfNecessary(this.segments[this.segments.length - 1], this.segments[0]);
		}
	}

	private connectEndsIfNecessary(prev: Bez3Slice, next: Bez3Slice) {
		if (!Point2.areClose(prev.d, next.a, 1e-6)) {
			this.segments.push(
				Bez3Slice.fromStraightSegment(new Arcs.StraightSegment(prev.d, next.a))
			);
		}
	}
}

function convertArcToBez3(arc: Arc, err: number, sink: ContourConversionSink) {
	if (arc instanceof Arcs.Bez3) {
		sink.add(new Bez3Slice(arc.a, arc.b, arc.c, arc.d));
	} else if (arc instanceof Arcs.CombinedArc) {
		for (let seg of arc.segments) {
			convertArcToBez3(seg, err, sink);
		}
	} else {
		convertArcToBez3Impl(arc, err, sink, 0, 1, 0, 8);
	}
}

const PROBE_STOPS = 4;
function convertArcToBez3Impl(
	arc: Arc,
	err: number,
	sink: ContourConversionSink,
	t0: number,
	t1: number,
	depth: number,
	maxDepth: number
) {
	const testArc = Bez3Slice.fromArcSlice(arc, t0, t1);
	if (depth >= maxDepth) {
		sink.add(testArc);
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
		sink.add(testArc);
	} else {
		let tMid = mix(t0, t1, 1 / 2);
		convertArcToBez3Impl(arc, err, sink, t0, tMid, depth + 1, maxDepth);
		convertArcToBez3Impl(arc, err, sink, tMid, t1, depth + 1, maxDepth);
	}
}
