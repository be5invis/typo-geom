import { Arc, Arcs } from "../../derivable";
import { CombinedArc } from "../../derivable/arcs";
import { numberClose } from "../../fn";
import { Point2 } from "../../point/point";
import { Bez3Slice } from "../shared/slice-arc";

const Bez3Measurer = {
	measureLength(a: Bez3Slice) {
		return a.getLength();
	}
};

export class FairizeCombinedArc extends CombinedArc<Bez3Slice> {
	constructor(arcs: Bez3Slice[]) {
		super(Bez3Measurer, arcs);
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
