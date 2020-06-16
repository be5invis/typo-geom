import {
	bez3Intersections,
	bez3SelfIntersections,
	CrossIntersectionSink,
	SelfIntersectionSink
} from "./bez3-intersections";
import { Bez3Slice } from "./slice-arc";

export type FIntersection = number;

class CSelfIntersectionSink implements SelfIntersectionSink {
	constructor(private readonly iArc: number, private readonly results: FIntersection[]) {}
	add(t: number) {
		this.results.push(this.iArc + t);
	}
}
export function findSelfIntersections(shape: Bez3Slice[][]) {
	let ans: FIntersection[][] = [];
	for (let c = 0; c < shape.length; c++) {
		let contour = shape[c],
			results: FIntersection[] = [];
		for (let i = 0; i < contour.length; i++) {
			bez3SelfIntersections(contour[i], new CSelfIntersectionSink(i, results));
		}
		ans.push(results);
	}
	return ans;
}

class CCrossIntersectionSink implements CrossIntersectionSink {
	constructor(
		private readonly iArc1: number,
		private readonly iArc2: number,
		private readonly results1: FIntersection[],
		private readonly results2: FIntersection[]
	) {}
	add(t1: number, t2: number) {
		this.results1.push(this.iArc1 + t1);
		this.results2.push(this.iArc2 + t2);
	}
}

export function findCrossIntersections(
	shape1: Bez3Slice[][],
	shape2: Bez3Slice[][],
	i1: FIntersection[][],
	i2: FIntersection[][],
	sameShape: boolean
) {
	for (let c1 = 0; c1 < shape1.length; c1++) {
		const contour1 = shape1[c1];
		for (let a1 = 0; a1 < contour1.length; a1++) {
			for (let c2 = 0; c2 < shape2.length; c2++) {
				const contour2 = shape2[c2];
				for (let a2 = 0; a2 < contour2.length; a2++) {
					if (sameShape && (c1 > c2 || (c1 === c2 && a1 >= a2))) continue;
					const sink = new CCrossIntersectionSink(a1, a2, i1[c1], i2[c2]);
					bez3Intersections(contour1[a1], contour2[a2], sink);
				}
			}
		}
	}
}
