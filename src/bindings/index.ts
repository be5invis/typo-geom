import * as clipperLib from "js-angusj-clipper";

export type BindingsType = {
	clipperLib: null | clipperLib.ClipperLibWrapper;
};

export const Bindings: BindingsType = {
	clipperLib: null,
};

export async function Init() {
	// let it autodetect which one to use, but also available WasmOnly and AsmJsOnly
	Bindings.clipperLib = await clipperLib.loadNativeClipperLibInstanceAsync(
		clipperLib.NativeClipperLibRequestedFormat.WasmWithAsmJsFallback,
	);
}
