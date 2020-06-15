import { autoQuadifyCurve as ac, quadifyCurve } from "./functional";
import { Arc } from "../derivable/interface";

export namespace Quadify {
	export function auto(
		c: Arc,
		allowError: number = 0.1,
		maxSegments: number = 32,
		maxDistanceTestPoints = 128
	) {
		return ac(c, allowError, maxSegments, maxDistanceTestPoints);
	}
	export const exact = quadifyCurve;
}
