export type Instance = { readonly [axis: string]: number } | null;
export type Master = { readonly [axis: string]: number };

export interface PolyVal {
	neutral: number;
	getDelta(s: string): number;
	setDelta(s: string, x: number): void;
	addDelta(s: string, x: number): void;
	transformMaster(m: Master): Master;
	acceptMasterInfluence(m: Master): boolean;
	fresh(): this;
	copyFrom(vv: this): void;
}
