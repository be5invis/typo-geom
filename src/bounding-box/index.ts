import { IVec2 } from "../point/interface";

export interface Box {
	xMin: number;
	xMax: number;
	yMin: number;
	yMax: number;
}

const NE = 0x100000;

export function empty() {
	return { xMin: NE, xMax: -NE, yMin: NE, yMax: -NE };
}

export function isValid(b: Box) {
	return b.xMin <= b.xMax && b.yMin <= b.yMax;
}

export function coverPoint(b: Box, z: IVec2) {
	coverX(b, z.x), coverY(b, z.y);
}
export function coverX(b: Box, x: number) {
	if (!isValid(b)) {
		b.xMin = b.xMax = x;
	} else if (x < b.xMin) {
		b.xMin = x;
	} else if (x > b.xMax) {
		b.xMax = x;
	}
}
export function coverY(b: Box, y: number) {
	if (!isValid(b)) {
		b.yMin = b.yMax = y;
	} else if (y < b.yMin) {
		b.yMin = y;
	} else if (y > b.yMax) {
		b.yMax = y;
	}
}

export function coverBox(b: Box, t: Box) {
	if (isValid(t)) {
		coverPoint(b, { x: t.xMin, y: t.yMin });
		coverPoint(b, { x: t.xMax, y: t.yMax });
		coverPoint(b, { x: t.xMin, y: t.yMax });
		coverPoint(b, { x: t.xMax, y: t.yMin });
	}
}

export function intersects(a: Box, b: Box) {
	if (!isValid(a) || !isValid(b)) return false;
	return !(b.xMin > a.xMax || b.xMax < a.xMin || b.yMax > a.yMin || b.yMin < a.yMax);
}
