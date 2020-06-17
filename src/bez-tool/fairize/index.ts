import { Arc, Arcs } from "../../derivable";
import {
	ClampedRootSink,
	CURVE_TIME_EPSILON,
	GEOMETRIC_EPSILON,
	IRootSink,
	solveQuadratic
} from "../../fn";
import { IPoint } from "../../point/interface";
import { Point } from "../../point/point";
import { inPlaceRotateArray } from "../../util/in-place-array";
import { Bez3Slice, CornerType } from "../shared/slice-arc";
import { CombinedArc } from "./combined-curve";

export function fairizeBezierShape(shape: Arcs.Bez3[][]): Arc[][] {
	let results: Arc[][] = [];
	for (const contour of shape) {
		if (!contour.length) continue;
		const bezSlicesContour = [];
		for (const arc of contour) bezSlicesContour.push(new Bez3Slice(arc.a, arc.b, arc.c, arc.d));
		results.push(fairizeBezierContour(bezSlicesContour));
	}
	return results;
}

function fairizeBezierContour(contour: Bez3Slice[]) {
	let splitContour: Bez3Slice[] = [];
	inPlaceFilterDegenerates(contour);
	markCornersAndSplit(contour, splitContour);
	canonicalStart(splitContour);

	let results: Arc[] = [];
	let front = 0,
		rear = 0;
	advanceFront: for (; front < splitContour.length; ) {
		advanceRear: for (; rear < splitContour.length; rear++) {
			if (isStopCt(splitContour[rear].cornerTypeAfter)) {
				results.push(
					new CombinedArc(splitContour.slice(front, rear + 1)).reduceIfStraight()
				);
				front = rear = rear + 1;
				continue advanceFront;
			}
		}
		// If the entire contour is smooth, then process as a whole
		// This shouldn't happen though
		results.push(new CombinedArc(splitContour.slice(front)).reduceIfStraight());
		front = rear = splitContour.length;
		break;
	}
	return results;
}

function markCornersAndSplit(contour: Bez3Slice[], sink: Bez3Slice[]) {
	for (let j = 0; j < contour.length; j++) {
		let cBefore = j === 0 ? contour[contour.length - 1] : contour[j - 1];
		let cAfter = contour[j];
		let z1 = cAfter.a,
			z0 = cBefore.c,
			z2 = cAfter.b,
			z11 = cBefore.d;
		if (!Point.from(z1).isClose(z11, GEOMETRIC_EPSILON)) {
			cBefore.cornerTypeAfter = cAfter.cornerTypeBefore = CornerType.Corner;
		} else {
			const hetero = cBefore.isStraight() !== cAfter.isStraight();
			const almostLinear = Point.dist(z0, z2, z1) < GEOMETRIC_EPSILON;
			const inBetween = Point.dot(Point.from(z0).minus(z1), Point.from(z2).minus(z1)) < 0;
			if (hetero) {
				cBefore.cornerTypeAfter = cAfter.cornerTypeBefore = CornerType.Hetero;
			} else if (almostLinear && inBetween) {
				const isExtrema =
					!cBefore.isStraight() &&
					!cAfter.isStraight() &&
					(Math.abs(z0.x - z2.x) < GEOMETRIC_EPSILON ||
						Math.abs(z0.y - z2.y) < GEOMETRIC_EPSILON);
				if (isExtrema) {
					cBefore.cornerTypeAfter = cAfter.cornerTypeBefore = CornerType.Extrema;
				} else {
					cBefore.cornerTypeAfter = cAfter.cornerTypeBefore = CornerType.Smooth;
				}
			} else {
				cBefore.cornerTypeAfter = cAfter.cornerTypeBefore = CornerType.Corner;
			}
		}
	}
	for (let j = 0; j < contour.length; j++) {
		splitAtExtrema(contour[j], sink);
	}
}

function inPlaceFilterDegenerates(contour: Bez3Slice[]) {
	let i = 0,
		j = 0;

	while (i < contour.length) {
		const arc = contour[i];
		const isStraight = arc.isStraight();
		const isDegenerate = isStraight && Point.from(arc.d).minus(arc.a).mag() < GEOMETRIC_EPSILON;
		if (!isDegenerate) {
			if (isStraight) {
				contour[j++] = arc.forceStraight();
			} else {
				contour[j++] = arc;
			}
		}
		i++;
	}
	contour.length = j;
}

function splitAtExtrema(arc: Bez3Slice, sink: Bez3Slice[]) {
	let ts = findAllExtrema(arc);

	// Ensure enough gaps between Ts
	if (ts.length > 1) {
		let i = 1,
			j = 1;
		for (; i < ts.length; i++) {
			if (ts[i] - ts[j - 1] >= CURVE_TIME_EPSILON) ts[j++] = ts[i];
		}
		ts.length = j;
	}

	// Ensure 0 and 1 exists in ts
	if (ts.length && ts[0] < CURVE_TIME_EPSILON) {
		ts[0] = 0;
	} else {
		ts.unshift(0);
	}
	if (ts.length && ts[ts.length - 1] > 1 - CURVE_TIME_EPSILON) {
		ts[ts.length - 1] = 1;
	} else {
		ts.push(1);
	}

	// Perform split
	for (let k = 1; k < ts.length; k++) {
		let slice = arc.sliceRatio(ts[k - 1], ts[k]);
		slice.cornerTypeBefore = k === 1 ? arc.cornerTypeBefore : CornerType.Extrema;
		slice.cornerTypeAfter = k === ts.length - 1 ? arc.cornerTypeAfter : CornerType.Extrema;
		sink.push(slice);
	}
}

function findExtrema(v0: number, v1: number, v2: number, v3: number, sink: IRootSink) {
	const a = 3 * (-v0 + 3 * v1 - 3 * v2 + v3);
	const b = 6 * (v0 - 2 * v1 + v2);
	const c = 3 * (v1 - v0);
	solveQuadratic(a, b, c, sink);
}
function ascending(a: number, b: number) {
	return a - b;
}
function findAllExtrema(arc: Bez3Slice) {
	const sink = new ClampedRootSink(0, 1, false);
	findExtrema(arc.a.x, arc.b.x, arc.c.x, arc.d.x, sink);
	findExtrema(arc.a.y, arc.b.y, arc.c.y, arc.d.y, sink);
	return sink.roots.sort(ascending);
}

function isStopCt(ct: CornerType) {
	return ct !== CornerType.Smooth;
}
function canonicalStart(contour: Bez3Slice[]) {
	let zStart: null | IPoint = null,
		jStart = 0;

	for (let j = 0; j < contour.length; j++) {
		if (isStopCt(contour[j].cornerTypeBefore)) {
			if (
				!zStart ||
				contour[j].a.y < zStart.y ||
				(contour[j].a.y === zStart.y && contour[j].a.x < zStart.x)
			) {
				zStart = contour[j].a;
				jStart = j;
			}
		}
	}
	if (zStart) inPlaceRotateArray(contour, -jStart);
}
