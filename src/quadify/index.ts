import { Arc } from "../derivable/interface";
import { autoQuadifyCurve as ac, quadifyCurve } from "./functional";
import * as Vs from "./vs-quadify";

export namespace Quadify {
	export function auto(c: Arc, allowError: number = 0.1, maxSegments: number = 32) {
		return ac(c, allowError, maxSegments);
	}
	export const exact = quadifyCurve;

	export type VectorSpace<T, X> = Vs.VectorSpace<T, X>;
	export const aboutVs = Vs.vsQuadifyCurve;
}
