import { Init as Bindings_Init } from "./bindings";

export * as Boolean from "./bez-tool/boolean";
export * as Fairize from "./bez-tool/fairize";
export * as BoundingBox from "./bounding-box";
export * from "./derivable";
export { DXY, IJacobian2, IVec2, XY } from "./point/interface";
export { Jacobian2 } from "./point/jacobian";
export { Offset2, Point2 } from "./point/point";
export * as Quadify from "./quadify/index";
export * as ShapeConv from "./shape-conv";

export async function Init() {
	await Bindings_Init();
}
