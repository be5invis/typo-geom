import { BoundingBox } from "./interface";
import { IPoint } from "../point/interface";

export namespace BB {
	const NE = 0x100000;
	export function empty() {
		return { xMin: NE, xMax: -NE, yMin: NE, yMax: -NE };
	}

	export function isValid(b: BoundingBox) {
		return b.xMin <= b.xMax && b.yMin <= b.yMax;
	}

	export function coverPoint(b: BoundingBox, z: IPoint) {
		if (!isValid(b)) {
			b.xMin = b.xMax = z.x;
		} else if (z.x < b.xMin) {
			b.xMin = z.x;
		} else if (z.x > b.xMax) {
			b.xMax = z.x;
		}
		if (!isValid(b)) {
			b.yMin = b.yMax = z.y;
		} else if (z.y < b.yMin) {
			b.yMin = z.y;
		} else if (z.y > b.yMax) {
			b.yMax = z.y;
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
}
