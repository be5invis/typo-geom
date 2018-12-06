export type PolyInstanceTuple = { readonly [axis: string]: number };
export type PolyInstance = PolyInstanceTuple | null;
export interface PolyMaster {
	readonly peak: PolyInstance;
	isNeutral(): boolean;
	eval(t: PolyInstance): number;
}

export interface PolyVal {
	neutral: number;
	getDelta(s: string): number;
	setDelta(s: string, x: number): void;
	addDelta(s: string, x: number): void;
	transformInstance(m: PolyInstance): PolyInstance;
	acceptMasterInfluence(m: PolyMaster): boolean;
	fresh(): this;
	copyFrom(vv: this): void;
}
