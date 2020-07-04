import { Arc, Arcs } from "../../derivable";
import { GEOMETRIC_EPSILON } from "../../fn";
import { IVec2 } from "../../point/interface";
import { Point2, Offset2 } from "../../point/point";
import { inPlaceRotateArray } from "../../util/in-place-array";
import { Bez3Slice, CornerType } from "../shared/slice-arc";
import { splitAtExtrema } from "../shared/split-at-extrema";
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
		if (!Point2.from(z1).isClose(z11, GEOMETRIC_EPSILON)) {
			cBefore.cornerTypeAfter = cAfter.cornerTypeBefore = CornerType.Corner;
		} else {
			const hetero = cBefore.isStraight() !== cAfter.isStraight();
			const almostLinear = Point2.pointLineDist(z0, z2, z1) < GEOMETRIC_EPSILON;
			const inBetween =
				Offset2.dot(Offset2.differenceFrom(z0, z1), Offset2.differenceFrom(z2, z1)) < 0;
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
		const isDegenerate = isStraight && Point2.areClose(arc.d, arc.a, GEOMETRIC_EPSILON);
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

function isStopCt(ct: CornerType) {
	return ct !== CornerType.Smooth;
}
function canonicalStart(contour: Bez3Slice[]) {
	let zStart: null | IVec2 = null,
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
