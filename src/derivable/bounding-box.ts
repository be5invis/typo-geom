import { BoundingBox } from "./interface";
import { IVec2 } from "../point/interface";

export namespace BB {
	const NE = 0x100000;
	export function empty() {
		return { xMin: NE, xMax: -NE, yMin: NE, yMax: -NE };
	}

	export function isValid(b: BoundingBox) {
		return b.xMin <= b.xMax && b.yMin <= b.yMax;
	}

	export function coverPoint(b: BoundingBox, z: IVec2) {
		coverX(b, z.x), coverY(b, z.y);
	}
	export function coverX(b: BoundingBox, x: number) {
		if (!isValid(b)) {
			b.xMin = b.xMax = x;
		} else if (x < b.xMin) {
			b.xMin = x;
		} else if (x > b.xMax) {
			b.xMax = x;
		}
	}
	export function coverY(b: BoundingBox, y: number) {
		if (!isValid(b)) {
			b.yMin = b.yMax = y;
		} else if (y < b.yMin) {
			b.yMin = y;
		} else if (y > b.yMax) {
			b.yMax = y;
		}
	}

	export function coverBox(b: BoundingBox, t: BoundingBox) {
		if (isValid(t)) {
			coverPoint(b, { x: t.xMin, y: t.yMin });
			coverPoint(b, { x: t.xMax, y: t.yMax });
			coverPoint(b, { x: t.xMin, y: t.yMax });
			coverPoint(b, { x: t.xMax, y: t.yMin });
		}
	}

	export function intersects(a: BoundingBox, b: BoundingBox) {
		if (!isValid(a) || !isValid(b)) return false;
		return !(b.xMin > a.xMax || b.xMax < a.xMin || b.yMax > a.yMin || b.yMin < a.yMax);
	}
}
