import { Arc } from "../derivable/interface";
import { autoQuadifyCurve as ac, quadifyCurve } from "./functional";

export namespace Quadify {
	export function auto(c: Arc, allowError: number = 0.1, maxSegments: number = 32) {
		return ac(c, allowError, maxSegments);
	}
	export const exact = quadifyCurve;
}
