export interface XY<T> {
	readonly x: T;
	readonly y: T;
}

export type IPoint = XY<number>;
export interface IOnOffGlyphPoint extends IPoint {
	readonly on: boolean;
}
