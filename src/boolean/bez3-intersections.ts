////// Ported from https://github.com/Morhaus/curve-intersection

import { Arcs } from "../derivable";
import { Point } from "../point/point";
import { Bez3Slice } from "./slice-arc";

/**
 * Bezier curve intersection algorithm and utilities
 *
 * Directly extracted from PaperJS's implementation bezier curve fat-line clipping
 * The original source code is available under the MIT licence at
 * https://github.com/paperjs/paper.js/
 */

export type PointArrayRep = [number, number];

const TOLERANCE = 1e-5;
const EPSILON = 1e-10;

function isZero(val: number) {
	return Math.abs(val) <= EPSILON;
}

/**
 * Computes the signed distance of (x, y) between (px, py) and (vx, vy)
 */
function signedDistance(px: number, py: number, vx: number, vy: number, x: number, y: number) {
	vx -= px;
	vy -= py;
	if (isZero(vx)) {
		return vy >= 0 ? px - x : x - px;
	} else if (isZero(vy)) {
		return vx >= 0 ? y - py : py - y;
	} else {
		return (vx * (y - py) - vy * (x - px)) / Math.sqrt(vx * vx + vy * vy);
	}
}

/**
 * Calculate the convex hull for the non-parametric bezier curve D(ti, di(t))
 * The ti is equally spaced across [0..1] — [0, 1/3, 2/3, 1] for
 * di(t), [dq0, dq1, dq2, dq3] respectively. In other words our CVs for the
 * curve are already sorted in the X axis in the increasing order.
 * Calculating convex-hull is much easier than a set of arbitrary points.
 *
 * The convex-hull is returned as two parts [TOP, BOTTOM]:
 *   (both are in a coordinate space where y increases upwards with origin at
 *   bottom-left)
 *   * TOP: The part that lies above the 'median' (line connecting end points of
 *     the curve)
 *   * BOTTOM: The part that lies below the median.
 */
function convexHull(dq0: number, dq1: number, dq2: number, dq3: number) {
	let p0: PointArrayRep = [0, dq0];
	let p1: PointArrayRep = [1.0 / 3, dq1];
	let p2: PointArrayRep = [2.0 / 3, dq2];
	let p3: PointArrayRep = [1, dq3];

	// Find signed distance of p1 and p2 from line [ p0, p3 ]
	let dist1 = signedDistance(0, dq0, 1, dq3, 1.0 / 3, dq1);
	let dist2 = signedDistance(0, dq0, 1, dq3, 2.0 / 3, dq2);

	let flip = false;
	let hull: PointArrayRep[][];

	// Check if p1 and p2 are on the same side of the line [ p0, p3 ]
	if (dist1 * dist2 < 0) {
		// p1 and p2 lie on different sides of [ p0, p3 ]. The hull is a
		// quadrilateral and line [ p0, p3 ] is NOT part of the hull so we
		// are pretty much done here.
		// The top part includes p1,
		// we will reverse it later if that is not the case
		hull = [
			[p0, p1, p3],
			[p0, p2, p3]
		];
		flip = dist1 < 0;
	} else {
		// p1 and p2 lie on the same sides of [ p0, p3 ]. The hull can be
		// a triangle or a quadrilateral and line [ p0, p3 ] is part of the
		// hull. Check if the hull is a triangle or a quadrilateral.
		// Also, if at least one of the distances for p1 or p2, from line
		// [p0, p3] is zero then hull must at most have 3 vertices.
		let pMax: PointArrayRep;
		let cross = 0;
		let distZero = dist1 == 0 || dist2 == 0;
		if (Math.abs(dist1) > Math.abs(dist2)) {
			pMax = p1;
			// apex is dq3 and the other apex point is dq0 vector dqapex ->
			// dqapex2 or base vector which is already part of the hull.
			cross = ((dq3 - dq2 - (dq3 - dq0) / 3.0) * (2 * (dq3 - dq2) - dq3 + dq1)) / 3.0;
		} else {
			pMax = p2;
			// apex is dq0 in this case, and the other apex point is dq3
			// vector dqapex -> dqapex2 or base vector which is already part
			// of the hull.
			cross = ((dq1 - dq0 + (dq0 - dq3) / 3.0) * (-2 * (dq0 - dq1) + dq0 - dq2)) / 3.0;
		}

		// Compare cross products of these vectors to determine if the point
		// is in the triangle [ p3, pmax, p0 ], or if it is a quadrilateral.
		hull =
			cross < 0 || distZero
				? [
						[p0, pMax, p3],
						[p0, p3]
				  ]
				: [
						[p0, p1, p2, p3],
						[p0, p3]
				  ];
		flip = dist1 ? dist1 < 0 : dist2 < 0;
	}
	if (flip) {
		hull.reverse();
	}
	return hull;
}

/**
 * Clips the convex-hull and returns [tMin, tMax] for the curve contained.
 */
function clipConvexHull(
	hullTop: PointArrayRep[],
	hullBottom: PointArrayRep[],
	dMin: number,
	dMax: number
) {
	if (hullTop[0][1] < dMin) {
		// Left of hull is below dMin, walk through the hull until it
		// enters the region between dMin and dMax
		return clipConvexHullPart(hullTop, true, dMin);
	} else if (hullBottom[0][1] > dMax) {
		// Left of hull is above dMax, walk through the hull until it
		// enters the region between dMin and dMax
		return clipConvexHullPart(hullBottom, false, dMax);
	} else {
		// Left of hull is between dMin and dMax, no clipping possible
		return hullTop[0][0];
	}
}

function clipConvexHullPart(part: PointArrayRep[], top: boolean, threshold: number) {
	let [px, py] = part[0];
	for (let i = 1; i < part.length; i++) {
		let [qx, qy] = part[i];
		if (top ? qy >= threshold : qy <= threshold) {
			return px + ((threshold - py) * (qx - px)) / (qy - py);
		}
		[px, py] = [qx, qy];
	}
	// All points of hull are above / below the threshold
	return null;
}

/**
 * Calculates the fat line of a curve and returns the maximum and minimum offset widths
 * for the fatline of a curve
 */
function getFatline(v: Bez3Slice) {
	// Starting point of the curve
	let q0x = v.a.x;
	let q0y = v.a.y;
	// End point of the curve
	let q3x = v.d.x;
	let q3y = v.d.y;
	// Calculate the fat-line L, for Q is the baseline l and two
	// offsets which completely encloses the curve P.
	let d1 = signedDistance(q0x, q0y, q3x, q3y, v.b.x, v.b.y) || 0;
	let d2 = signedDistance(q0x, q0y, q3x, q3y, v.c.x, v.c.y) || 0;
	let factor = d1 * d2 > 0 ? 3.0 / 4.0 : 4.0 / 9.0; // Get a tighter fit
	let dMin = factor * Math.min(0, d1, d2);
	let dMax = factor * Math.max(0, d1, d2);
	// The width of the 'fatline' is |dMin| + |dMax|
	return [dMin, dMax];
}

export type IntersectionResult = [number, Point, number, Point];
/**
 * Computes the intersections of two bezier curves
 */
function bez3IntersectionsImpl(
	v1: Bez3Slice,
	v2: Bez3Slice,
	tMin = 0.0,
	tMax = 1.0,
	uMin = 0.0,
	uMax = 1.0,
	oldTDiff = 1.0,
	reverse = false,
	recursion = 0,
	recursionLimit = 16,
	tLimit = 0.8
): IntersectionResult[] {
	// Avoid deeper recursion.
	// NOTE: @iconexperience determined that more than 20 recursions are
	// needed sometimes, depending on the tDiff threshold values further
	// below when determining which curve converges the least. He also
	// recommended a threshold of 0.5 instead of the initial 0.8
	// See: https:#github.com/paperjs/paper.js/issues/565
	if (recursion > recursionLimit) {
		return [];
	}

	// Let P be the first curve and Q be the second
	let q0x = v2.a.x;
	let q0y = v2.a.y;
	let q3x = v2.d.x;
	let q3y = v2.d.y;

	// Calculate the fat-line L for Q is the baseline l and two
	// offsets which completely encloses the curve P.
	let [dMin, dMax] = getFatline(v2);

	// Calculate non-parametric bezier curve D(ti, di(t)) - di(t) is the
	// distance of P from the baseline l of the fat-line, ti is equally
	// spaced in [0, 1]
	let dp0 = signedDistance(q0x, q0y, q3x, q3y, v1.a.x, v1.a.y);
	let dp1 = signedDistance(q0x, q0y, q3x, q3y, v1.b.x, v1.b.y);
	let dp2 = signedDistance(q0x, q0y, q3x, q3y, v1.c.x, v1.c.y);
	let dp3 = signedDistance(q0x, q0y, q3x, q3y, v1.d.x, v1.d.y);
	let tMinNew = 0.0;
	let tMaxNew = 0.0;
	let tDiff = 0.0;

	// NOTE: the recursion threshold of 4 is needed to prevent issue #571
	// from occurring: https://github.com/paperjs/paper.js/issues/571
	if (q0x == q3x && uMax - uMin <= EPSILON && recursion > 4) {
		// The fatline of Q has converged to a point, the clipping is not
		// reliable. Return the value we have even though we will miss the
		// precision.
		tMaxNew = tMinNew = (tMax + tMin) / 2.0;
		tDiff = 0;
	} else {
		// Get the top and bottom parts of the convex-hull
		let hull = convexHull(dp0, dp1, dp2, dp3);
		let top = hull[0];
		let bottom = hull[1];
		let tMinClip;
		let tMaxClip;
		// Clip the convex-hull with dMin and dMax
		tMinClip = clipConvexHull(top, bottom, dMin, dMax);
		top.reverse();
		bottom.reverse();
		tMaxClip = clipConvexHull(top, bottom, dMin, dMax);
		// No intersections if one of the tvalues are null or 'undefined'
		if (tMinClip === null || tMaxClip === null) {
			return [];
		}
		// Clip P with the fatline for Q
		v1 = v1.sliceRatio(tMinClip, tMaxClip);
		tDiff = tMaxClip - tMinClip;
		// tMin and tMax are within the range (0, 1). We need to project it
		// to the original parameter range for v2.
		tMinNew = tMax * tMinClip + tMin * (1 - tMinClip);
		tMaxNew = tMax * tMaxClip + tMin * (1 - tMaxClip);
	}

	let intersections: IntersectionResult[];

	// Check if we need to subdivide the curves
	if (oldTDiff > tLimit && tDiff > tLimit) {
		// Subdivide the curve which has converged the least.
		if (tMaxNew - tMinNew > uMax - uMin) {
			let parts = v1.splitRatio(0.5);
			let t = tMinNew + (tMaxNew - tMinNew) / 2.0;
			intersections = [
				...bez3IntersectionsImpl(
					v2,
					parts[0],
					uMin,
					uMax,
					tMinNew,
					t,
					tDiff,
					!reverse,
					recursion + 1,
					recursionLimit,
					tLimit
				),
				...bez3IntersectionsImpl(
					v2,
					parts[1],
					uMin,
					uMax,
					t,
					tMaxNew,
					tDiff,
					!reverse,
					recursion + 1,
					recursionLimit,
					tLimit
				)
			];
		} else {
			let parts = v2.splitRatio(0.5);
			let t = uMin + (uMax - uMin) / 2.0;
			intersections = [
				...bez3IntersectionsImpl(
					parts[0],
					v1,
					uMin,
					t,
					tMinNew,
					tMaxNew,
					tDiff,
					!reverse,
					recursion + 1,
					recursionLimit,
					tLimit
				),
				...bez3IntersectionsImpl(
					parts[1],
					v1,
					t,
					uMax,
					tMinNew,
					tMaxNew,
					tDiff,
					!reverse,
					recursion + 1,
					recursionLimit,
					tLimit
				)
			];
		}
	} else if (Math.max(uMax - uMin, tMaxNew - tMinNew) < TOLERANCE) {
		// We have isolated the intersection with sufficient precision
		let t1 = tMinNew + (tMaxNew - tMinNew) / 2.0;
		let t2 = uMin + (uMax - uMin) / 2.0;
		if (reverse) {
			intersections = [[t2, v2.eval(t2), t1, v1.eval(t1)]];
		} else {
			intersections = [[t1, v1.eval(t1), t2, v2.eval(t2)]];
		}
	} else {
		intersections = bez3IntersectionsImpl(
			v2,
			v1,
			uMin,
			uMax,
			tMinNew,
			tMaxNew,
			tDiff,
			!reverse,
			recursion + 1,
			recursionLimit,
			tLimit
		);
	}

	return intersections;
}

export function bez3Intersections(a: Bez3Slice, b: Bez3Slice) {
	return bez3IntersectionsImpl(a, b);
}
