import { IJacobian2, IVec2 } from "../point/interface";

export interface Derivable<T, X, D> {
	eval(t: T): X;
	derivative(t: T): D;
}

export type Arc = Derivable<number, IVec2, IVec2>;
export type DerivableFunction = Derivable<number, number, number>;

export type Contour = Arc[];
export type Shape = Arc[][];

export type ShapeTransform = Derivable<IVec2, IVec2, IJacobian2>;
