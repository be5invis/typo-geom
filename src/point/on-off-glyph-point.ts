import { IOnOffGlyphPoint, IPoint } from "./interface";

// Please note that this point is solely used for storing glyph data.
// It has a "on" properly corresponds to the "on" property of OTFCC paths.
// It does NOT have the operation methods that Point has, since maintaining "on"
// property is not well defined.
export class OnOffGlyphPoint implements IOnOffGlyphPoint {
	constructor(public x: number = 0, public y: number = 0, public on: boolean = true) {}
	clone() {
		return new OnOffGlyphPoint(this.x, this.y, this.on);
	}

	static from(p: IOnOffGlyphPoint) {
		return new OnOffGlyphPoint(p.x, p.y, p.on);
	}

	static fromPoint(p: IPoint, on: boolean = true, cubic: boolean = false) {
		return new OnOffGlyphPoint(p.x, p.y, on);
	}
}
