import { segTSearch } from "./seg-index-search";

test("Segment T search", () => {
	expect(segTSearch([0, 0.5], 0)).toBe(0);
	expect(segTSearch([0, 0.5], 0.25)).toBe(0);
	expect(segTSearch([0, 0.5], 0.5)).toBe(1);
	expect(segTSearch([0, 0.5], 1)).toBe(1);
});

test("Segment T search 2", () => {
	expect(segTSearch([0, 1, 2, 3], -0.1)).toBe(0);
	expect(segTSearch([0, 1, 2, 3], 0)).toBe(0);
	expect(segTSearch([0, 1, 2, 3], 1)).toBe(1);
	expect(segTSearch([0, 1, 2, 3], 2)).toBe(2);
	expect(segTSearch([0, 1, 2, 3], 3)).toBe(3);
	expect(segTSearch([0, 1, 2, 3], 0.5)).toBe(0);
	expect(segTSearch([0, 1, 2, 3], 1.99)).toBe(1);
});
