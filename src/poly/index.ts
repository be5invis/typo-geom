import math from "../support/math";
import { PolyInstance, PolyMaster, PolyVal, PolyInstanceTuple } from "./interface";

type Dict<T> = {
	readonly [index: string]: T;
};
type WritableDict<T> = {
	[index: string]: T;
};

class SupportZone {
	constructor(private readonly peak: number) {}
	eval(t: number) {
		if (t === this.peak) {
			return 1;
		} else if (this.peak > 0) {
			if (t <= 0 || t >= 1) return 0;
			if (t < this.peak) return t / this.peak;
			else return (1 - t) / (1 - this.peak);
		} else if (this.peak < 0) {
			if (t <= -1 || t >= 0) return 0;
			if (t > this.peak) return t / this.peak;
			else return (1 + t) / (1 + this.peak);
		} else {
			return 1;
		}
	}
}

export class PeakMaster {
	private readonly supports: { readonly [axis: string]: SupportZone };
	constructor(public readonly peak: PolyInstanceTuple) {
		const supports: { [axis: string]: SupportZone } = {};
		if (peak) {
			for (const d in peak) {
				const p = peak[d];
				if (!p) continue;
				supports[d] = new SupportZone(p);
			}
		}
		this.supports = supports;
	}
	isNeutral() {
		for (const d in this.supports) {
			if (this.supports[d].eval(0) === 0) return false;
		}
		return true;
	}
	eval(t: PolyInstance) {
		let w = 1;
		for (const d in this.supports) {
			w *= this.supports[d].eval(t ? t[d] || 0 : 0);
		}
		return w;
	}
}

export class Polymorphizer {
	private masters: Map<string, PolyMaster> = new Map();
	private solverCache: Map<string, WritableDict<WritableDict<number>> | null> = new Map();

	getMaster(id: string) {
		return this.masters.get(id);
	}
	setMaster(id: string, m: PolyMaster) {
		this.masters.set(id, m);
		this.reify();
	}
	deleteMaster(id: string) {
		this.masters.delete(id);
		this.reify();
	}
	clearMasters() {
		this.masters = new Map();
		this.reify();
	}

	protected getMask(accept: (m: PolyMaster) => boolean) {
		let mask = "";
		for (const [id, master] of this.masters) {
			if (accept(master)) {
				mask += "*";
			} else {
				mask += " ";
			}
		}
		return mask;
	}

	protected getDeltaSolversImpl(mask: string, accept: (m: PolyMaster) => boolean) {
		const solver: WritableDict<WritableDict<number>> = {};

		let ids: string[] = [];
		for (const [id, master] of this.masters) {
			if (accept(master)) ids.push(id);
		}
		if (!ids.length) return null;

		let mat: number[][] = [];
		for (let j = 0; j < ids.length; j++) {
			mat[j] = [];
			for (let k = 0; k < ids.length; k++) {
				mat[j][k] = this.masters.get(ids[k])!.eval(this.masters.get(ids[j])!.peak);
			}
		}
		try {
			const invMat = math.inv(mat) as number[][];
			for (let j = 0; j < ids.length; j++) {
				solver[ids[j]] = {};
				for (let k = 0; k < ids.length; k++) {
					solver[ids[j]][ids[k]] = invMat[k][j];
				}
			}
			return solver;
		} catch {}
		return null;
	}
	protected getDeltaSolvers(mask: string, accept: (m: PolyMaster) => boolean) {
		const existing = this.solverCache.get(mask);
		if (existing !== undefined) {
			return existing;
		}
		const solver = this.getDeltaSolversImpl(mask, accept);
		this.solverCache.set(mask, solver);
		return solver;
	}

	private reify() {
		this.solverCache = new Map();
	}

	eval(v: PolyVal, instance: PolyInstance) {
		let x = v.neutral;
		for (const [id, master] of this.masters) x += master.eval(instance) * v.getDelta(id);
		return x;
	}

	private computeAffinityDict(
		instance: PolyInstance
	): { endAffinities: Dict<number>; zoneWeights: Dict<number> } {
		if (!instance) return { endAffinities: {}, zoneWeights: {} };

		// Use a peak master to compute cross weight
		const sz = new PeakMaster(instance);

		let affinities: WritableDict<number> = {},
			zoneWeights: WritableDict<number> = {},
			coincident: WritableDict<number> = {},
			everCoincident = false;
		for (const [id, zone] of this.masters) {
			const zoneWeight = zone.eval(instance);
			const crossWeight = sz.eval(this.masters.get(id)!.peak);
			zoneWeights[id] = zoneWeight;

			// We use the affinity to measure how close the instance is to the master
			// The formula is the product of weights measured mutually, and escalate with
			// 1 / (1 - x) - 1. Since ∞ may occur, an extra dict is used to handle this
			// special case.
			const aff = zoneWeight * crossWeight;
			if (aff > 1 - 1e-6) {
				coincident[id] = 1;
				everCoincident = true;
				affinities[id] = 1;
			} else {
				coincident[id] = 0;
				affinities[id] = 1 / (1 - aff) - 1;
			}
		}

		let endAffinities: WritableDict<number> = {};
		for (const id in zoneWeights) {
			if (!zoneWeights[id]) continue;
			const affinity = everCoincident ? coincident[id] : affinities[id];
			endAffinities[id] = affinity;
		}

		return { endAffinities, zoneWeights };
	}

	computeInfluences(accept: (m: PolyMaster) => boolean, instance: PolyInstance): Dict<number> {
		const aff: WritableDict<number> = this.computeAffinityDict(instance).endAffinities;
		let totalAffinities = 0;
		for (const id in aff) {
			totalAffinities += aff[id];
		}
		if (Math.abs(totalAffinities) < 1e-6) return {};
		for (const id in aff) {
			aff[id] /= totalAffinities;
		}
		return aff;
	}

	private computeInfluenceDictImpl(
		accept: (m: PolyMaster) => boolean,
		instance: PolyInstance
	): Dict<number> {
		const mask = this.getMask(accept);
		const solver = this.getDeltaSolvers(mask, accept);
		if (!solver) return {};

		const { endAffinities: aff, zoneWeights } = this.computeAffinityDict(instance);
		let totalFinalEffect = 0;
		let finalEffects: WritableDict<number> = {};
		let relativeFinalEffects: WritableDict<number> = {};

		for (const id in aff) {
			if (!aff[id]) continue;
			for (const key in solver[id]) {
				const eff = (solver[id][key] || 0) * aff[id];
				finalEffects[key] = (finalEffects[key] || 0) + eff;
				relativeFinalEffects[key] =
					(relativeFinalEffects[key] || 0) + zoneWeights[key] * eff;
			}
		}
		for (const id in zoneWeights) totalFinalEffect += relativeFinalEffects[id] || 0;
		if (totalFinalEffect < 1e-6) {
			return {};
		}

		for (const id in finalEffects) finalEffects[id] /= totalFinalEffect;

		return finalEffects;
	}

	private computeInfluenceDict2(accept: (m: PolyMaster) => boolean, instance: PolyInstance) {
		if (!instance) return {};
		return this.computeInfluenceDictImpl(accept, instance);
	}

	setAt(v: PolyVal, _instance: PolyInstance, x: number) {
		if (!_instance) {
			let neut = this.eval(v, {});
			v.neutral += x - neut;
		} else {
			const instance = v.transformInstance(_instance);
			const current = this.eval(v, instance);
			const delta = x - current;
			const influence = this.computeInfluenceDict2(v.acceptMasterInfluence.bind(v), instance);
			for (const id in influence) {
				if (this.masters.get(id)!.isNeutral()) {
					v.neutral += delta * influence[id];
				} else {
					v.addDelta(id, delta * influence[id]);
				}
			}
		}
	}

	clone() {
		const p = new Polymorphizer();
		p.masters = new Map(this.masters);
		p.reify();
		return p;
	}

	fitToNewMasterSet<T extends PolyVal>(v: T, polyBefore: Polymorphizer) {
		const v1: T = v.fresh();
		this.setAt(v1, null, polyBefore.eval(v, null));
		for (const m of this.masters.values()) {
			this.setAt(v1, m.peak, polyBefore.eval(v, m.peak));
		}
		return v1;
	}
}
