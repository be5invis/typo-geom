import { EPSILON } from "./constants";

export function numberClose(x: number, y: number, epsilon = EPSILON) {
	return Math.abs(x - y) < epsilon;
}

export function mix(a: number, b: number, t: number) {
	return a + (b - a) * t;
}
export function clamp(value: number, min: number, max: number) {
	return value < min ? min : value > max ? max : value;
}
