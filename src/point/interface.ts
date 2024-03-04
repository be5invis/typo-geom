export interface XY<T> {
	readonly x: T;
	readonly y: T;
}

export type IVec2 = XY<number>;

export interface DXY<T> {
	readonly dxx: T; // ∂X/∂x
	readonly dxy: T; // ∂X/∂y
	readonly dyx: T; // ∂Y/∂x
	readonly dyy: T; // ∂Y/∂y
}

export type IJacobian2 = DXY<number>;
