declare module "clipper-lib" {
	export interface IIntPoint {
		X: number;
		Y: number;
	}
	export class IntPoint {
		constructor(X: number, Y: number);
		X: number;
		Y: number;
		// distinguish with IIntPoint
		private readonly _m: Symbol;
	}
	export enum ClipType {
		ctIntersection,
		ctUnion,
		ctDifference,
		ctXor
	}
	export enum PolyFillType {
		pftEvenOdd,
		pftNonZero,
		pftPositive,
		pftNegative
	}
	export enum PolyType {
		ptSubject,
		ptClip
	}
	export enum EndType {
		etOpenSquare,
		etOpenRound,
		etOpenButt,
		etClosedLine,
		etClosedPolygon
	}

	export var use_xyz: boolean;
	export class Clipper {
		constructor(options: number);
		static readonly ioReverseSolution: number;
		static readonly ioStrictlySimple: number;
		static readonly ioPreserveCollinear: number;
		Clear(): void;
		AddPaths(path: IntPoint[][], type: PolyType, endType: EndType): void;
		Execute(
			op: ClipType,
			solutionPaths: IntPoint[][],
			rule1: PolyFillType,
			rule2: PolyFillType
		): void;
		static SimplifyPolygons(path: IntPoint[][], type: PolyFillType): IntPoint[][];
	}

	export function Paths(): IntPoint[][];
}
