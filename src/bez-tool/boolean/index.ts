import * as clipperLib from "js-angusj-clipper";

import { Bindings } from "../../bindings";
import type { Arcs } from "../../derivable";
import { Bez3Slice } from "../shared/slice-arc";

import { findCrossIntersections, findSelfIntersections } from "./intersections";
import { rebuildShape } from "./rebuild";
import { PolySetIsEmpty, SegHashStore, toPoly } from "./to-poly";

export type combineOps =
	| { type: "operand"; fillType: clipperLib.PolyFillType; shape: Arcs.Bez3[][] }
	| { type: "operator"; operator: clipperLib.ClipType };

export type combineOpsInternal =
	| combineOps
	| {
			type: "operand_rectified";
			fillType: clipperLib.PolyFillType;
			shape_rectified: Bez3Slice[][];
			intersectionTs: number[][];
	  }
	| {
			type: "operand_poly";
			fillType: clipperLib.PolyFillType;
			shape_poly: clipperLib.IntPoint[][];
	  };

export type StackItem = { operand: clipperLib.IntPoint[][]; fillType: clipperLib.PolyFillType };

export function combineStack(ops: combineOps[], resolution = 256) {
	// console.log(util.inspect(ops, { depth: null, colors: true }), resolution);
	return combineStackImpl([...ops], resolution);
}
export function combine(
	op: clipperLib.ClipType,
	s1: Arcs.Bez3[][],
	s2: Arcs.Bez3[][],
	rule1: clipperLib.PolyFillType,
	rule2: clipperLib.PolyFillType,
	resolution = 256,
) {
	return combineStackImpl(
		[
			{ type: "operand", shape: s1, fillType: rule1 },
			{ type: "operand", shape: s2, fillType: rule2 },
			{ type: "operator", operator: op },
		],
		resolution,
	);
}

function combineStackImpl(ops: combineOpsInternal[], resolution: number) {
	const clipperLibInstance = Bindings.clipperLib;
	if (!clipperLibInstance)
		throw new Error("ClipperLib instance not loaded. Call `await typoGeom.Init()` first.");

	for (let i = 0; i < ops.length; i++) {
		const op = ops[i];
		if (op.type !== "operand") continue;

		const rectifiedArcs = ToBez3Slices(op.shape);
		ops[i] = {
			type: "operand_rectified",
			fillType: op.fillType,
			shape_rectified: rectifiedArcs,
			intersectionTs: findSelfIntersections(rectifiedArcs),
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
				i === j,
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
			fillType: op.fillType,
		};
	}

	const stack: StackItem[] = [];

	for (const op of ops) {
		if (op.type === "operand_poly") {
			stack.push({ operand: op.shape_poly, fillType: op.fillType });
		} else if (op.type === "operator") {
			const x2 = stack.pop();
			const x1 = stack.pop();

			if (!x1 || !x2) throw new Error("Unreachable: Not enough operands for operator");
			try {
				const solutionPaths = clipperLibInstance.clipToPaths({
					clipType: op.operator,
					subjectFillType: x1.fillType,
					subjectInputs: [
						{
							data: x1.operand,
							closed: true,
						},
					],
					clipFillType: x2.fillType,
					clipInputs: [
						{
							data: x2.operand,
						},
					],
				});
				stack.push({ operand: solutionPaths, fillType: clipperLib.PolyFillType.NonZero });
			} catch (_) {
				// Input may have degenerate segments, which causes Clipper to throw.
				// We will need to cleanup the operands first

				const cleanedX1 = clipperLibInstance.cleanPolygons(x1.operand, 1);
				const cleanedX2 = clipperLibInstance.cleanPolygons(x2.operand, 1);
				const isX1Empty = PolySetIsEmpty(cleanedX1);
				const isX2Empty = PolySetIsEmpty(cleanedX2);

				if (isX1Empty && isX2Empty) {
					// Both operands are empty, so the result is also empty regardless of the operator
					stack.push({ operand: [], fillType: clipperLib.PolyFillType.NonZero });
					continue;
				} else if (isX1Empty) {
					if (
						op.operator === clipperLib.ClipType.Union ||
						op.operator === clipperLib.ClipType.Xor
					) {
						stack.push(x2);
						continue;
					} else {
						stack.push({ operand: [], fillType: clipperLib.PolyFillType.NonZero });
						continue;
					}
				} else if (isX2Empty) {
					if (
						op.operator === clipperLib.ClipType.Union ||
						op.operator === clipperLib.ClipType.Xor ||
						op.operator === clipperLib.ClipType.Difference
					) {
						stack.push(x1);
						continue;
					} else {
						stack.push({ operand: [], fillType: clipperLib.PolyFillType.NonZero });
						continue;
					}
				} else {
					const solutionPaths = clipperLibInstance.clipToPaths({
						clipType: op.operator,
						subjectFillType: x1.fillType,
						subjectInputs: [
							{
								data: cleanedX1,
								closed: true,
							},
						],
						clipFillType: x2.fillType,
						clipInputs: [
							{
								data: cleanedX2,
							},
						],
					});
					stack.push({
						operand: solutionPaths,
						fillType: clipperLib.PolyFillType.NonZero,
					});
				}

				console.log(cleanedX1, cleanedX2);
				// throw new Error("test");
			}
		}
	}

	const result = stack.pop();
	if (!result) throw new Error("Unreachable: No result on stack");
	// We use CCW for outer contours, while clipperLib uses CW, so reverse the output paths
	for (const path of result.operand) path.reverse();
	// console.log(clipperLibInstance.orientation(result.operand));
	return rebuildShape(result.operand, segHash, resolution);
}

function removeOverlapImpl(s1: Bez3Slice[][], rule: clipperLib.PolyFillType, resolution = 256) {
	const clipperLibInstance = Bindings.clipperLib;
	if (!clipperLibInstance)
		throw new Error("ClipperLib instance not loaded. Call `await typoGeom.Init()` first.");

	if (!s1.length) return s1;

	const i1 = findSelfIntersections(s1);
	findCrossIntersections(s1, s1, i1, i1, true);

	const segHash = new SegHashStore();

	const p1 = toPoly(s1, 1, i1, segHash, resolution);
	const solution_paths = clipperLibInstance.simplifyPolygons(p1, rule);

	// Invert order of output, like combineImpl
	for (const path of solution_paths) path.reverse();

	return rebuildShape(solution_paths, segHash, resolution);
}

function ToBez3Slices(shape: Arcs.Bez3[][]) {
	const result: Bez3Slice[][] = [];
	for (const contour of shape) {
		const resultContour: Bez3Slice[] = [];
		for (let j = 0; j < contour.length; j++) {
			resultContour.push(
				new Bez3Slice(contour[j].a, contour[j].b, contour[j].c, contour[j].d),
			);
		}
		result.push(resultContour);
	}
	return result;
}

export function removeOverlap(s1: Arcs.Bez3[][], rule: clipperLib.PolyFillType, RESOLUTION = 256) {
	return removeOverlapImpl(ToBez3Slices(s1), rule, RESOLUTION);
}

export { ClipType, PolyFillType } from "js-angusj-clipper";
