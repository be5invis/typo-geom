/**
 * Bezier curve intersection algorithm and utilities
 *
 * Portions ported from PaperJS: https://github.com/paperjs/paper.js/
 */

import { EPSILON, numberClose, RootSolver } from "../../fn";
import { Point2 } from "../../point/point";
import { getOverlaps } from "./bez3-overlap";
import { Bez3Slice } from "../shared/slice-arc";

export interface SelfIntersectionSink {
	add(t: number): void;
}
export interface CrossIntersectionSink {
	add(t1: number, t2: number): void;
}

function possibleIntersect(v1: Bez3Slice, v2: Bez3Slice) {
	return (
		Math.max(v1.a.x, v1.b.x, v1.c.x, v1.d.x) + EPSILON >
			Math.min(v2.a.x, v2.b.x, v2.c.x, v2.d.x) &&
		Math.min(v1.a.x, v1.b.x, v1.c.x, v1.d.x) - EPSILON <
			Math.max(v2.a.x, v2.b.x, v2.c.x, v2.d.x) &&
		Math.max(v1.a.y, v1.b.y, v1.c.y, v1.d.y) + EPSILON >
			Math.min(v2.a.y, v2.b.y, v2.c.y, v2.d.y) &&
		Math.min(v1.a.y, v1.b.y, v1.c.y, v1.d.y) - EPSILON <
			Math.max(v2.a.y, v2.b.y, v2.c.y, v2.d.y)
	);
}

export function bez3Intersections(v1: Bez3Slice, v2: Bez3Slice, sink: CrossIntersectionSink): void {
	if (!possibleIntersect(v1, v2)) return;
	const overlaps = getOverlaps(v1, v2);
	if (overlaps) {
		for (const [ta, tb] of overlaps) {
			sink.add(ta, tb);
		}
	} else {
		var straight1 = v1.isStraight(),
			straight2 = v2.isStraight();

		if (straight1 && straight2) {
			lineIntersectionImpl(v1, v2, sink);
		} else if (straight1) {
			lineCurveIntersectionImpl(v2, v1, sink, true);
		} else if (straight2) {
			lineCurveIntersectionImpl(v1, v2, sink, false);
		} else {
			curveIntersectionImpl(v1, v2, sink, false, 0, 0, 0, 1, 0, 1);
		}
	}
}

export function bez3SelfIntersections(arc: Bez3Slice, sink: SelfIntersectionSink): void {
	const rs = new RootSolver.ClampedRootSink(0, 1, false);
	arc.classify(rs);
	arc.getXExtrema(rs);
	arc.getYExtrema(rs);
	for (const root of rs.roots) sink.add(root);
}

export type PointArrayRep = [number, number];

function lineIntersectionImpl(v1: Bez3Slice, v2: Bez3Slice, sink: CrossIntersectionSink) {
	const pt = Point2.intersect(v1.a, v1.d, v2.a, v2.d);
	if (pt) {
		const t1 = v1.getTOf(pt),
			t2 = v2.getTOf(pt);
		if (t1 != null && t2 != null) sink.add(t1, t2);
	}
}

function lineCurveIntersectionImpl(
	v1: Bez3Slice,
	v2: Bez3Slice,
	sink: CrossIntersectionSink,
	flip: boolean
) {
	// addCurveLineIntersections() is called so that v1 is always the curve
	// and v2 the line. flip indicates whether the curves need to be flipped
	// in the call to addLocation().

	const x1 = v2.a.x,
		y1 = v2.a.y,
		x2 = v2.d.x,
		y2 = v2.d.y;
	const roots = getCurveLineIntersections(v1, x1, y1, x2 - x1, y2 - y1);
	// NOTE: count could be -1 for infinite solutions, but that should only
	// happen with lines, in which case we should not be here.
	for (let i = 0, l = roots.length; i < l; i++) {
		// For each found solution on the rotated curve, get the point on
		// the real curve and with that the location on the line.
		var t1 = roots[i],
			p1 = v1.eval(t1),
			t2 = v2.getTOf(p1);
		if (t2 != null) {
			if (flip) {
				sink.add(t2, t1);
			} else {
				sink.add(t1, t2);
			}
		}
	}
}
function getCurveLineIntersections(v: Bez3Slice, px: number, py: number, vx: number, vy: number) {
	if (numberClose(vx, 0) && numberClose(vy, 0)) {
		// Handle special case of a line with no direction as a point,
		// and check if it is on the curve.
		const t = v.getTOf(new Point2(px, py));
		return t === null ? [] : [t];
	}

	// Calculate angle to the x-axis (1, 0).
	const angle = Math.atan2(-vy, vx),
		sin = Math.sin(angle),
		cos = Math.cos(angle),
		// (rlx1, rly1) = (0, 0)
		// Calculate the curve values of the rotated curve.
		rv: number[] = [],
		zs = [v.a, v.b, v.c, v.d];
	for (var i = 0; i < 4; i++) {
		var x = zs[i].x - px,
			y = zs[i].y - py;
		rv.push(x * sin + y * cos);
	}
	const rs = new RootSolver.ClampedRootSink(0, 1, true);
	RootSolver.bezierSolveCubic(rv[0], rv[1], rv[2], rv[3], 0, rs);
	return rs.roots;
}

const FAT_LINE_EPSILON = 1e-9;
const MAX_CALLS = 65535;
const MAX_RECURSE = 40;
function curveIntersectionImpl(
	v1: Bez3Slice,
	v2: Bez3Slice,
	sink: CrossIntersectionSink,
	flip: boolean,
	recursion: number,
	calls: number,
	tMin: number,
	tMax: number,
	uMin: number,
	uMax: number
): number {
	// Avoid deeper recursion, by counting the total amount of recursions,
	// as well as the total amount of calls, to avoid massive call-trees as
	// suggested by @iconexperience in #904#issuecomment-225283430.
	// See also: #565 #899 #1074
	if (++calls >= MAX_CALLS || ++recursion >= MAX_RECURSE) return calls;

	// Calculate the fat-line L for Q is the baseline l and two
	// offsets which completely encloses the curve P.
	let d1 = Point2.signedPointLineDist(v2.a, v2.d, v2.b),
		d2 = Point2.signedPointLineDist(v2.a, v2.d, v2.c),
		factor = d1 * d2 > 0 ? 3 / 4 : 4 / 9,
		dMin = factor * Math.min(0, d1, d2),
		dMax = factor * Math.max(0, d1, d2);

	// Calculate non-parametric bezier curve D(ti, di(t)) - di(t) is the
	// distance of P from the baseline l of the fat-line, ti is equally
	// spaced in [0, 1]
	let dp0 = Point2.signedPointLineDist(v2.a, v2.d, v1.a);
	let dp1 = Point2.signedPointLineDist(v2.a, v2.d, v1.b);
	let dp2 = Point2.signedPointLineDist(v2.a, v2.d, v1.c);
	let dp3 = Point2.signedPointLineDist(v2.a, v2.d, v1.d);
	let hull = getConvexHull(dp0, dp1, dp2, dp3),
		top = hull[0],
		bottom = hull[1];

	let tMinClip: null | number = null,
		tMaxClip: null | number = null;

	// Stop iteration if all points and control points are collinear.
	if (
		(d1 === 0 && d2 === 0 && dp0 === 0 && dp1 === 0 && dp2 === 0 && dp3 === 0) ||
		// Clip convex-hull with dMin and dMax, taking into account that
		// there will be no intersections if one of the results is null.
		(tMinClip = clipConvexHull(top, bottom, dMin, dMax)) == null ||
		(tMaxClip = clipConvexHull(top.reverse(), bottom.reverse(), dMin, dMax)) == null
	)
		return calls;

	// tMin and tMax are within the range (0, 1). Project it back to the
	// original parameter range for v2.
	let tMinNew = tMin + (tMax - tMin) * tMinClip,
		tMaxNew = tMin + (tMax - tMin) * tMaxClip;

	if (Math.max(uMax - uMin, tMaxNew - tMinNew) < FAT_LINE_EPSILON) {
		// We have isolated the intersection with sufficient precision
		var t = (tMinNew + tMaxNew) / 2,
			u = (uMin + uMax) / 2;
		if (flip) {
			sink.add(u, t);
		} else {
			sink.add(t, u);
		}
	} else {
		// Apply the result of the clipping to curve 1:
		v1 = v1.sliceRatio(tMinClip, tMaxClip);
		let uDiff = uMax - uMin;

		if (tMaxClip - tMinClip > 0.8) {
			// Subdivide the curve which has converged the least.
			if (tMaxNew - tMinNew > uDiff) {
				let parts = v1.splitRatio(0.5),
					t = (tMinNew + tMaxNew) / 2;
				calls = curveIntersectionImpl(
					v2,
					parts[0],
					sink,
					!flip,
					recursion,
					calls,
					uMin,
					uMax,
					tMinNew,
					t
				);
				calls = curveIntersectionImpl(
					v2,
					parts[1],
					sink,
					!flip,
					recursion,
					calls,
					uMin,
					uMax,
					t,
					tMaxNew
				);
			} else {
				var parts = v2.splitRatio(0.5),
					u = (uMin + uMax) / 2;
				calls = curveIntersectionImpl(
					parts[0],
					v1,
					sink,
					!flip,
					recursion,
					calls,
					uMin,
					u,
					tMinNew,
					tMaxNew
				);
				calls = curveIntersectionImpl(
					parts[1],
					v1,
					sink,
					!flip,
					recursion,
					calls,
					u,
					uMax,
					tMinNew,
					tMaxNew
				);
			}
		} else {
			// Iterate
			// For some unclear reason we need to check against uDiff === 0
			// here, to prevent a regression from happening, see #1638.
			// Maybe @iconexperience could shed some light on this.
			if (uDiff === 0 || uDiff >= FAT_LINE_EPSILON) {
				calls = curveIntersectionImpl(
					v2,
					v1,
					sink,
					!flip,
					recursion,
					calls,
					uMin,
					uMax,
					tMinNew,
					tMaxNew
				);
			} else {
				// The interval on the other curve is already tight enough,
				// therefore we keep iterating on the same curve.
				calls = curveIntersectionImpl(
					v1,
					v2,
					sink,
					flip,
					recursion,
					calls,
					tMinNew,
					tMaxNew,
					uMin,
					uMax
				);
			}
		}
	}
	return calls;
}

/**
 * Calculate the convex hull for the non-parametric bezier curve D(ti, di(t))
 * The ti is equally spaced across [0..1] — [0, 1/3, 2/3, 1] for
 * di(t), [dq0, dq1, dq2, dq3] respectively. In other words our CVs for the
 * curve are already sorted in the X axis in the increasing order.
 * Calculating convex-hull is much easier than a set of arbitrary points.
 *
 * The convex-hull is returned as two parts [TOP, BOTTOM]:
 * (both are in a coordinate space where y increases upwards with origin at
 * bottom-left)
 * TOP: The part that lies above the 'median' (line connecting end points of
 * the curve)
 * BOTTOM: The part that lies below the median.
 */
function getConvexHull(dq0: number, dq1: number, dq2: number, dq3: number): PointArrayRep[][] {
	var p0: PointArrayRep = [0, dq0],
		p1: PointArrayRep = [1 / 3, dq1],
		p2: PointArrayRep = [2 / 3, dq2],
		p3: PointArrayRep = [1, dq3],
		// Find vertical signed distance of p1 and p2 from line [p0, p3]
		dist1 = dq1 - (2 * dq0 + dq3) / 3,
		dist2 = dq2 - (dq0 + 2 * dq3) / 3,
		hull: PointArrayRep[][];
	// Check if p1 and p2 are on the opposite side of the line [p0, p3]
	if (dist1 * dist2 < 0) {
		// p1 and p2 lie on different sides of [p0, p3]. The hull is a
		// quadrilateral and line [p0, p3] is NOT part of the hull so we are
		// pretty much done here. The top part includes p1, we will reverse
		// it later if that is not the case.
		hull = [
			[p0, p1, p3],
			[p0, p2, p3]
		];
	} else {
		// p1 and p2 lie on the same sides of [p0, p3]. The hull can be a
		// triangle or a quadrilateral and line [p0, p3] is part of the
		// hull. Check if the hull is a triangle or a quadrilateral. We have
		// a triangle if the vertical distance of one of the middle points
		// (p1, p2) is equal or less than half the vertical distance of the
		// other middle point.
		var distRatio = dist1 / dist2;
		hull = [
			// p2 is inside, the hull is a triangle.
			distRatio >= 2
				? [p0, p1, p3]
				: // p1 is inside, the hull is a triangle.
				distRatio <= 0.5
				? [p0, p2, p3]
				: // Hull is a quadrilateral, we need all lines in correct order.
				  [p0, p1, p2, p3],
			// Line [p0, p3] is part of the hull.
			[p0, p3]
		];
	}
	// Flip hull if dist1 is negative or if it is zero and dist2 is negative
	return (dist1 || dist2) < 0 ? hull.reverse() : hull;
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
	// Calculate the fat-line L, for Q is the baseline l and two
	// offsets which completely encloses the curve P.
	let d1 = Point2.signedPointLineDist(v.a, v.d, v.b) || 0;
	let d2 = Point2.signedPointLineDist(v.a, v.d, v.c) || 0;
	let factor = d1 * d2 > 0 ? 3.0 / 4.0 : 4.0 / 9.0; // Get a tighter fit
	let dMin = factor * Math.min(0, d1, d2);
	let dMax = factor * Math.max(0, d1, d2);
	// The width of the 'fatline' is |dMin| + |dMax|
	return [dMin, dMax];
}
