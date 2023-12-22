import * as ClipperLib from "clipper-lib";
import { Arcs } from "../../derivable";
import { Bez3Slice } from "../shared/slice-arc";
import { findCrossIntersections, findSelfIntersections } from "./intersections";
import { rebuildShape } from "./rebuild";
import { SegHashStore, toPoly } from "./to-poly";

export type combineOps =
	| { type: "operand"; fillType: ClipperLib.PolyFillType; shape: Arcs.Bez3[][] }
	| { type: "operator"; operator: ClipperLib.ClipType };

export type combineOpsInternal =
	| combineOps
	| {
			type: "operand_rectified";
			fillType: ClipperLib.PolyFillType;
			shape_rectified: Bez3Slice[][];
			intersectionTs: number[][];
	  }
	| {
			type: "operand_poly";
			fillType: ClipperLib.PolyFillType;
			shape_poly: ClipperLib.IntPoint[][];
	  };

export type StackItem = { operand: ClipperLib.IntPoint[][]; fillType: ClipperLib.PolyFillType };

export function combineStack(ops: combineOps[], resolution = 256) {
	return combineStackImpl([...ops], resolution);
}
export function combine(
	op: ClipperLib.ClipType,
	s1: Arcs.Bez3[][],
	s2: Arcs.Bez3[][],
	rule1: ClipperLib.PolyFillType,
	rule2: ClipperLib.PolyFillType,
	RESOLUTION = 256
) {
	return combineStackImpl(
		[
			{ type: "operand", shape: s1, fillType: rule1 },
			{ type: "operand", shape: s2, fillType: rule2 },
			{ type: "operator", operator: op }
		],
		RESOLUTION
	);
}

function combineStackImpl(ops: combineOpsInternal[], resolution = 256) {
	for (let i = 0; i < ops.length; i++) {
		const op = ops[i];
		if (op.type !== "operand") continue;

		const rectifiedArcs = ToBez3Slices(op.shape);
		ops[i] = {
			type: "operand_rectified",
			fillType: op.fillType,
			shape_rectified: rectifiedArcs,
			intersectionTs: findSelfIntersections(rectifiedArcs)
		};
	}
	for (let i = 0; i < ops.length; i++) {
		const opI = ops[i];
		if (opI.type !== "operand_rectified") continue;
		for (let j = i; j < ops.length; j++) {
			const opJ = ops[j];
			if (opJ.type !== "operand_rectified") continue;
			findCrossIntersections(
				opI.shape_rectified,
				opJ.shape_rectified,
				opI.intersectionTs,
				opJ.intersectionTs,
				i === j
			);
		}
	}

	const segHash = new SegHashStore();
	for (let i = 0; i < ops.length; i++) {
		const op = ops[i];
		if (op.type !== "operand_rectified") continue;
		ops[i] = {
			type: "operand_poly",
			shape_poly: toPoly(op.shape_rectified, i + 1, op.intersectionTs, segHash, resolution),
			fillType: op.fillType
		};
	}

	let stack: StackItem[] = [];
	const cpr = new ClipperLib.Clipper(
		ClipperLib.Clipper.ioReverseSolution | ClipperLib.Clipper.ioStrictlySimple
	);

	for (const op of ops) {
		if (op.type === "operand_poly") {
			stack.push({ operand: op.shape_poly, fillType: op.fillType });
		} else if (op.type === "operator") {
			const x2 = stack.pop()!;
			const x1 = stack.pop()!;

			cpr.Clear();
			cpr.AddPaths(
				x1.operand,
				ClipperLib.PolyType.ptSubject,
				ClipperLib.EndType.etClosedPolygon
			);
			cpr.AddPaths(
				x2.operand,
				ClipperLib.PolyType.ptClip,
				ClipperLib.EndType.etClosedPolygon
			);
			const solutionPaths = ClipperLib.Paths();
			cpr.Execute(op.operator || 0, solutionPaths, x1.fillType, x2.fillType);
			stack.push({ operand: solutionPaths, fillType: ClipperLib.PolyFillType.pftNonZero });
		}
	}

	const result = stack.pop()!;
	return rebuildShape(result.operand, segHash, resolution);
}

function removeOverlapImpl(s1: Bez3Slice[][], rule: ClipperLib.PolyFillType, resolution = 256) {
	if (!s1.length) return s1;

	const i1 = findSelfIntersections(s1);
	findCrossIntersections(s1, s1, i1, i1, true);

	const segHash = new SegHashStore();

	const p1 = toPoly(s1, 1, i1, segHash, resolution);
	const solution_paths = ClipperLib.Clipper.SimplifyPolygons(p1, rule);

	// Invert order of output, like combineImpl
	for (const path of solution_paths) path.reverse();

	return rebuildShape(solution_paths, segHash, resolution);
}

function ToBez3Slices(shape: Arcs.Bez3[][]) {
	let result: Bez3Slice[][] = [];
	for (let contour of shape) {
		const resultContour: Bez3Slice[] = [];
		for (let j = 0; j < contour.length; j++) {
			resultContour.push(
				new Bez3Slice(contour[j].a, contour[j].b, contour[j].c, contour[j].d)
			);
		}
		result.push(resultContour);
	}
	return result;
}

export function removeOverlap(s1: Arcs.Bez3[][], rule: ClipperLib.PolyFillType, RESOLUTION = 256) {
	return removeOverlapImpl(ToBez3Slices(s1), rule, RESOLUTION);
}
export { ClipType, PolyFillType } from "clipper-lib";
