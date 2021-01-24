export function segTSearch(stops: number[], t: number) {
	let l = 0,
		r = stops.length;
	while (l < r) {
		let m = (l + r) >>> 1;
		if (stops[m] > t) r = m;
		else l = m + 1;
	}
	return r - 1;
}
