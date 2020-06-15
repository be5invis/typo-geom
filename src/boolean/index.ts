import * as ClipperLib from "clipper-lib";
import { Arcs } from "../derivable";
import {
	findAllSelfIntersections,
	findCrossIntersections,
	reduceIntersections
} from "./intersections";
import { rebuildShape } from "./rebuild";
import { Bez3Slice } from "./slice-arc";
import { SegEntry, toPoly } from "./to-poly";

function combineImpl(
	op: ClipperLib.ClipType,
	s1: Bez3Slice[][],
	s2: Bez3Slice[][],
	rule1: ClipperLib.PolyFillType,
	rule2: ClipperLib.PolyFillType,
	resolution = 256
) {
	if (!s1.length) return s2;
	if (!s2.length) return s1;

	const tolerance = 1 / resolution;

	const i1 = findAllSelfIntersections(s1, tolerance);
	const i2 = findAllSelfIntersections(s2, tolerance);
	findCrossIntersections(s1, s1, i1, i1, true, tolerance);
	findCrossIntersections(s2, s2, i2, i2, true, tolerance);
	findCrossIntersections(s1, s2, i1, i2, true, tolerance);
	for (let c = 0; c < i1.length; c++) {
		i1[c] = reduceIntersections(i1[c]);
	}
	for (let c = 0; c < i2.length; c++) {
		i2[c] = reduceIntersections(i2[c]);
	}

	const segHash = new Map<string, SegEntry>();
	const termHash = new Set<string>();

	const p1 = toPoly(s1, 1, i1, segHash, termHash, resolution);
	const p2 = toPoly(s2, 2, i2, segHash, termHash, resolution);

	const cpr = new ClipperLib.Clipper(
		ClipperLib.Clipper.ioReverseSolution | ClipperLib.Clipper.ioStrictlySimple
	);
	cpr.AddPaths(p1, ClipperLib.PolyType.ptSubject, ClipperLib.EndType.etClosedPolygon);
	cpr.AddPaths(p2, ClipperLib.PolyType.ptClip, ClipperLib.EndType.etClosedPolygon);
	const solutionPaths = ClipperLib.Paths();
	cpr.Execute(op || 0, solutionPaths, rule1 || 0, rule2 || 0);
	return rebuildShape(solutionPaths, segHash, termHash, resolution);
}

function removeOverlapImpl(s1: Bez3Slice[][], rule: ClipperLib.PolyFillType, resolution = 256) {
	if (!s1.length) return s1;

	const ERROR = 1 / resolution;

	const i1 = findAllSelfIntersections(s1, ERROR);
	findCrossIntersections(s1, s1, i1, i1, true, ERROR);
	findCrossIntersections(s1, s1, i1, i1, false, ERROR);
	for (let c = 0; c < i1.length; c++) {
		i1[c] = reduceIntersections(i1[c]);
	}

	const segHash = new Map<string, SegEntry>();
	const termHash = new Set<string>();

	const p1 = toPoly(s1, 1, i1, segHash, termHash, resolution);
	const solution_paths = ClipperLib.Clipper.SimplifyPolygons(p1, rule);
	return rebuildShape(solution_paths, segHash, termHash, resolution);
}

function ToBez3Slices(shape: Arcs.Bez3[][]) {
	let result: Bez3Slice[][] = [];
	for (let contour of shape) {
		const resultContour: Bez3Slice[] = [];
		for (let j = 0; j < contour.length; j++) {
			resultContour.push(
				new Bez3Slice(contour[j].a, contour[j].b, contour[j].c, contour[j].d, j, j + 1)
			);
		}
		result.push(resultContour);
	}
	return result;
}

export function combine(
	op: ClipperLib.ClipType,
	_s1: Arcs.Bez3[][],
	_s2: Arcs.Bez3[][],
	rule1: ClipperLib.PolyFillType,
	rule2: ClipperLib.PolyFillType,
	RESOLUTION = 256
) {
	return combineImpl(op, ToBez3Slices(_s1), ToBez3Slices(_s2), rule1, rule2, RESOLUTION);
}
export function removeOverlap(s1: Arcs.Bez3[][], rule: ClipperLib.PolyFillType, RESOLUTION = 256) {
	return removeOverlapImpl(ToBez3Slices(s1), rule, RESOLUTION);
}
export { ClipType, PolyFillType } from "clipper-lib";
