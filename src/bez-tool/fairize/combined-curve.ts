import { Arc, Arcs } from "../../derivable";
import { numberClose } from "../../fn";
import { Offset2, Point2 } from "../../point/point";
import { Bez3Slice } from "../shared/slice-arc";
import { segTSearch } from "./seg-index-search";

export class CombinedArc implements Arc {
	private readonly stops: number[] = [];

	constructor(public readonly segments: Bez3Slice[]) {
		let totalLength = 0;
		for (let j = 0; j < this.segments.length; j++) {
			this.stops[j] = totalLength;
			totalLength += segments[j].getLength();
		}
		for (let j = 0; j < this.segments.length; j++) {
			this.stops[j] /= totalLength;
		}
	}

	eval(t: number) {
		const j = segTSearch(this.stops, t);
		const tBefore = this.stops[j];
		const tNext = j < this.stops.length - 1 ? this.stops[j + 1] : 1;
		const tRelative = (t - tBefore) / (tNext - tBefore);
		return this.segments[j].eval(tRelative);
	}

	derivative(t: number) {
		const j = segTSearch(this.stops, t);
		const tBefore = this.stops[j];
		const tNext = j < this.stops.length - 1 ? this.stops[j + 1] : 1;
		const tRelative = (t - tBefore) / (tNext - tBefore);
		return Offset2.scaleFrom(1 / (tNext - tBefore), this.segments[j].derivative(tRelative));
	}

	reduceIfStraight(): Arc {
		if (!this.segments.length) return this;

		const z0 = this.segments[0].a,
			z1 = this.segments[this.segments.length - 1].d;
		for (const seg of this.segments) {
			if (
				!numberClose(0, Point2.pointLineDist(z0, z1, seg.a)) ||
				!numberClose(0, Point2.pointLineDist(z0, z1, seg.b)) ||
				!numberClose(0, Point2.pointLineDist(z0, z1, seg.c)) ||
				!numberClose(0, Point2.pointLineDist(z0, z1, seg.d))
			) {
				return this;
			}
		}
		return new Arcs.StraightSegment(z0, z1);
	}
}
