import { IVec2 } from "../point/interface";

export interface Derivable<T> {
	eval(t: number): T;
	derivative(t: number): T;
}

export type Arc = Derivable<IVec2>;
export type DerivableFunction = Derivable<number>;

export interface ShapeTransform {
	x(x: number, y: number): number; // X(x,y)
	y(x: number, y: number): number; // Y(x,y)
	dxx(x: number, y: number): number; // ∂X/∂x
	dxy(x: number, y: number): number; // ∂X/∂y
	dyx(x: number, y: number): number; // ∂Y/∂x
	dyy(x: number, y: number): number; // ∂Y/∂y
}

export type Contour = Arc[];
export type Shape = Arc[][];
