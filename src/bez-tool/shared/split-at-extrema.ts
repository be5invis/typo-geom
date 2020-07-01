import { CURVE_TIME_EPSILON, RootSolver } from "../../fn";
import { Bez3Slice, CornerType } from "../shared/slice-arc";

export function splitAtExtrema(arc: Bez3Slice, sink: Bez3Slice[]) {
	// Get extrema splits
	const rs = new RootSolver.ClampedRootSink(0, 1, false);
	arc.getXExtrema(rs);
	arc.getYExtrema(rs);
	rs.roots.sort(ascending);
	const ts = rs.roots;

	// Ensure enough gaps between Ts
	if (ts.length > 1) {
		let i = 1,
			j = 1;
		for (; i < ts.length; i++) {
			if (ts[i] - ts[j - 1] >= CURVE_TIME_EPSILON) ts[j++] = ts[i];
		}
		ts.length = j;
	}

	// Ensure 0 and 1 exists in ts
	if (ts.length && ts[0] < CURVE_TIME_EPSILON) {
		ts[0] = 0;
	} else {
		ts.unshift(0);
	}
	if (ts.length && ts[ts.length - 1] > 1 - CURVE_TIME_EPSILON) {
		ts[ts.length - 1] = 1;
	} else {
		ts.push(1);
	}

	// Perform split
	for (let k = 1; k < ts.length; k++) {
		let slice = arc.sliceRatio(ts[k - 1], ts[k]);
		slice.cornerTypeBefore = k === 1 ? arc.cornerTypeBefore : CornerType.Extrema;
		slice.cornerTypeAfter = k === ts.length - 1 ? arc.cornerTypeAfter : CornerType.Extrema;
		sink.push(slice);
	}
}

function ascending(a: number, b: number) {
	return a - b;
}
