import { Arc, Arcs } from "../../derivable";
import { numberClose } from "../../fn";
import { Point } from "../../point/point";
import { Bez3Slice } from "../shared/slice-arc";

export class CombinedArc implements Arc {
	private readonly lengths: number[] = [];
	constructor(public readonly segments: Bez3Slice[]) {
		for (let j = 0; j < segments.length; j++) {
			this.lengths[j] = segments[j].getLength();
		}
		let totalLength = 0;
		for (let j = 0; j < this.lengths.length; j++) totalLength += this.lengths[j];
		let lengthSofar = 0;
		for (let j = 0; j < this.lengths.length; j++) {
			let segLen = this.lengths[j];
			this.lengths[j] = lengthSofar / totalLength;
			lengthSofar += segLen;
		}
	}
	private getIndex(t: number) {
		let j = this.lengths.length - 1;
		while (j > 0 && this.lengths[j] > t) j--;
		return j;
	}
	eval(t: number) {
		const j = this.getIndex(t);
		const tBefore = this.lengths[j];
		const tNext = j < this.lengths.length - 1 ? this.lengths[j + 1] : 1;
		const tRelative = (t - tBefore) / (tNext - tBefore);
		return this.segments[j].eval(tRelative);
	}
	derivative(t: number) {
		const j = this.getIndex(t);
		const tBefore = this.lengths[j];
		const tNext = j < this.lengths.length - 1 ? this.lengths[j + 1] : 1;
		const tRelative = (t - tBefore) / (tNext - tBefore);
		const d = this.segments[j].derivative(tRelative);
		return new Point(d.x / (tNext - tBefore), d.y / (tNext - tBefore));
	}
	reduceIfStraight(): Arc {
		if (!this.segments.length) return this;

		const z0 = this.segments[0].a,
			z1 = this.segments[this.segments.length - 1].d;
		for (const seg of this.segments) {
			if (
				!numberClose(0, Point.pointLineDist(z0, z1, seg.a)) ||
				!numberClose(0, Point.pointLineDist(z0, z1, seg.b)) ||
				!numberClose(0, Point.pointLineDist(z0, z1, seg.c)) ||
				!numberClose(0, Point.pointLineDist(z0, z1, seg.d))
			) {
				return this;
			}
		}
		return new Arcs.StraightSegment(z0, z1);
	}
}
