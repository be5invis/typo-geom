import { convertShapeToBez3 } from "../bez-tool/shape-to-bez3";
import { Arc, Arcs } from "../derivable";
import { Point2 } from "../point/point";

export interface IBezierGeometrySink {
	beginShape(): void;
	moveTo(x: number, y: number): void;
	lineTo(x: number, y: number): void;
	curveTo(x1: number, y1: number, x2: number, y2: number): void;
	cubicTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): void;
	endShape(): void;
}

export interface IArcGeometrySink {
	beginShape(): void;
	moveTo(x: number, y: number): void;
	lineTo(x: number, y: number): void;
	arcTo(arc: Arc, x: number, y: number): void;
	endShape(): void;
}

export function transferBezArcShape(
	shape: Arcs.Bez3[][],
	sink: IBezierGeometrySink,
	tolerance = 1 / 16
) {
	sink.beginShape();
	for (const contour of shape) {
		if (!contour.length) continue;
		let z0 = Point2.from(contour[0].eval(0));
		sink.moveTo(z0.x, z0.y);
		for (const arc of contour) {
			const a = Point2.from(arc.eval(0)),
				d = Point2.from(arc.eval(1));
			if (!Point2.areClose(a, z0, tolerance)) {
				sink.lineTo(a.x, a.y);
				z0 = a;
			}
			if (arc.isStraight()) {
				if (!Point2.areClose(d, z0, tolerance)) {
					sink.lineTo(d.x, d.y);
					z0 = d;
				}
			} else {
				const d0 = arc.derivative(0),
					d1 = arc.derivative(1);
				const b = a.addScale(1 / 3, d0),
					c = d.addScale(-1 / 3, d1);
				sink.cubicTo(b.x, b.y, c.x, c.y, d.x, d.y);
				z0 = d;
			}
		}
	}
	sink.endShape();
}

export function transferGenericShape(shape: Arc[][], sink: IArcGeometrySink, tolerance = 1 / 16) {
	sink.beginShape();
	for (const contour of shape) {
		if (!contour.length) continue;
		let z0 = Point2.from(contour[0].eval(0));
		sink.moveTo(z0.x, z0.y);
		for (const arc of contour) {
			const a = Point2.from(arc.eval(0)),
				d = Point2.from(arc.eval(1));
			if (!Point2.areClose(a, z0, tolerance)) {
				sink.lineTo(a.x, a.y);
				z0 = a;
			}
			if (arc instanceof Arcs.StraightSegment) {
				if (!Point2.areClose(d, z0, tolerance)) {
					sink.lineTo(d.x, d.y);
					z0 = d;
				}
			} else {
				sink.arcTo(arc, d.x, d.y);
				z0 = d;
			}
		}
	}
	sink.endShape();
}

export function transferGenericShapeAsBezier(
	shape: Arc[][],
	sink: IBezierGeometrySink,
	tolerance = 1 / 16
) {
	return transferBezArcShape(convertShapeToBez3(shape, tolerance), sink, tolerance);
}
