export function segTSearch(stops: number[], t: number) {
	if (t <= 0 || 1 == stops.length) return 0;
	if (t >= 1) return stops.length - 1;

	let l = 0,
		r = stops.length;
	while (l < r) {
		let m = (l + r) >>> 1;
		if (stops[m] > t) r = m;
		else l = m + 1;
	}
	return r - 1;
}
