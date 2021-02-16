import { Arc } from "../derivable/interface";
import { ipsAutoQuadify, vsNumberVec2, vsQuadifyCurve } from "./vs-quadify";

export function quadifyCurve(c: Arc, n: number = 1) {
	return vsQuadifyCurve(vsNumberVec2, c, n);
}

export function autoQuadifyCurve(c: Arc, allowError: number = 0.1, maxSegments: number = 32) {
	return ipsAutoQuadify(vsNumberVec2, c, allowError, maxSegments);
}
