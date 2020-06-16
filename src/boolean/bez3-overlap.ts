import { CURVE_TIME_EPSILON, GEOMETRIC_EPSILON, getDistance } from "../fn";
import { Point } from "../point/point";
import { Bez3Slice } from "./slice-arc";

/**
 * Bezier curve intersection algorithm and utilities
 *
 * Directly extracted from PaperJS' implementation bezier curve fat-line clipping
 * The original source code is available under the MIT licence at
 * https://github.com/paperjs/paper.js/
 */

function getSquaredLineLength(v: Bez3Slice) {
	var x = v.d.x - v.a.x,
		y = v.d.y - v.a.y;
	return x * x + y * y;
}

export type OverlapSpot = [number, number];
export function getOverlaps(v1: Bez3Slice, v2: Bez3Slice) {
	let straight1 = v1.isStraight(),
		straight2 = v2.isStraight(),
		straightBoth = straight1 && straight2;
	const flip = getSquaredLineLength(v1) < getSquaredLineLength(v2);
	const l1 = flip ? v2 : v1,
		l2 = flip ? v1 : v2;
	const px = l1.a.x,
		py = l2.a.y,
		vx = l1.d.x,
		vy = l1.d.y;

	// See if the starting and end point of curve two are very close to the
	// picked line. Note that the curve for the picked line might not
	// actually be a line, so we have to perform more checks after.
	if (
		getDistance(px, py, vx, vy, l2.a.x, l2.a.y) < GEOMETRIC_EPSILON &&
		getDistance(px, py, vx, vy, l2.d.x, l2.d.y) < GEOMETRIC_EPSILON
	) {
		// If not both curves are straight, check against both of their
		// handles, and treat them as straight if they are very close.
		if (
			!straightBoth &&
			getDistance(px, py, vx, vy, l1.b.x, l1.b.y) < GEOMETRIC_EPSILON &&
			getDistance(px, py, vx, vy, l1.c.x, l1.c.y) < GEOMETRIC_EPSILON &&
			getDistance(px, py, vx, vy, l2.b.x, l2.b.y) < GEOMETRIC_EPSILON &&
			getDistance(px, py, vx, vy, l2.c.x, l2.c.y) < GEOMETRIC_EPSILON
		) {
			straight1 = straight2 = straightBoth = true;
		}
	} else if (straightBoth) {
		// If both curves are straight and not very close to each other,
		// there can't be a solution.
		return null;
	}
	if (straight1 !== straight2) {
		// If one curve is straight, the other curve must be straight too,
		// otherwise they cannot overlap.
		return null;
	}

	let v = [v1, v2],
		pairs: null | OverlapSpot[] = [];
	// Iterate through all end points:
	// First p1 of curve 1 & 2, then p2 of curve 1 & 2.
	for (var i = 0; i < 4 && pairs.length < 2; i++) {
		const i1 = i & 1, // 0, 1, 0, 1
			i2 = i1 ^ 1, // 1, 0, 1, 0
			t1 = i >> 1, // 0, 0, 1, 1
			t2 = v[i1].getTOf(Point.from(t1 ? v[i2].d : v[i2].a));
		if (t2 != null) {
			// If point is on curve
			const pair: OverlapSpot = i1 ? [t1, t2] : [t2, t1];
			// Filter out tiny overlaps.
			if (
				!pairs.length ||
				(Math.abs(pair[0] - pairs[0][0]) > CURVE_TIME_EPSILON &&
					Math.abs(pair[1] - pairs[0][1]) > CURVE_TIME_EPSILON)
			) {
				pairs.push(pair);
			}
		}
		// We checked 3 points but found no match, curves can't overlap.
		if (i > 2 && !pairs.length) break;
	}

	if (pairs.length !== 2) {
		pairs = null;
	} else if (!straightBoth) {
		// Straight pairs don't need further checks. If we found 2 pairs,
		// the end points on v1 & v2 should be the same.
		var o1 = v1.sliceRatio(pairs[0][0], pairs[1][0]),
			o2 = v2.sliceRatio(pairs[0][1], pairs[1][1]);
		// Check if handles of the overlapping curves are the same too.
		if (
			Math.abs(o2.b.x - o1.b.x) > GEOMETRIC_EPSILON ||
			Math.abs(o2.b.y - o1.b.y) > GEOMETRIC_EPSILON ||
			Math.abs(o2.c.x - o1.c.x) > GEOMETRIC_EPSILON ||
			Math.abs(o2.c.y - o1.c.y) > GEOMETRIC_EPSILON
		)
			pairs = null;
	}
	return pairs;
}
