import { DerivableFunction } from "./interface";

export namespace D {
	export class Const implements DerivableFunction {
		constructor(private readonly t: number) {}
		eval() {
			return this.t;
		}
		derivative() {
			return 0;
		}
	}
	export const Param: DerivableFunction = {
		eval(t: number) {
			return t;
		},
		derivative() {
			return 1;
		}
	};
	export class Add implements DerivableFunction {
		constructor(private readonly a: DerivableFunction, private readonly b: DerivableFunction) {}
		eval(t: number) {
			return this.a.eval(t) + this.b.eval(t);
		}
		derivative(t: number) {
			return this.a.derivative(t) + this.b.derivative(t);
		}
	}
	export class Sub implements DerivableFunction {
		constructor(private readonly a: DerivableFunction, private readonly b: DerivableFunction) {}
		eval(t: number) {
			return this.a.eval(t) - this.b.eval(t);
		}
		derivative(t: number) {
			return this.a.derivative(t) - this.b.derivative(t);
		}
	}
	export class Mul implements DerivableFunction {
		constructor(private readonly a: DerivableFunction, private readonly b: DerivableFunction) {}
		eval(t: number) {
			return this.a.eval(t) * this.b.eval(t);
		}
		derivative(t: number) {
			return this.a.derivative(t) * this.b.eval(t) + this.b.derivative(t) * this.a.eval(t);
		}
	}
	export class Div implements DerivableFunction {
		constructor(private readonly a: DerivableFunction, private readonly b: DerivableFunction) {}
		eval(t: number) {
			return this.a.eval(t) / this.b.eval(t);
		}
		derivative(t: number) {
			const zb = this.b.eval(t);
			return (this.a.derivative(t) * zb - this.b.derivative(t) * this.a.eval(t)) / (zb * zb);
		}
	}
	export class Co implements DerivableFunction {
		constructor(private readonly a: DerivableFunction) {}
		eval(t: number) {
			return 1 - this.a.eval(t);
		}
		derivative(t: number) {
			return -this.a.derivative(t);
		}
	}
	export class Nest implements DerivableFunction {
		constructor(private readonly a: DerivableFunction, private readonly b: DerivableFunction) {}
		eval(t: number) {
			return this.a.eval(this.b.eval(t));
		}
		derivative(t: number) {
			return this.b.derivative(t) * this.a.derivative(this.b.eval(t));
		}
	}

	export class Pow implements DerivableFunction {
		p: number;
		constructor(p: number) {
			this.p = p;
		}
		eval(t: number) {
			return Math.pow(t, this.p);
		}
		derivative(t: number) {
			return this.p * Math.pow(t, this.p - 1);
		}
	}

	export class Hermite00 implements DerivableFunction {
		eval(t: number) {
			return 1 - t * t * (3 - 2 * t);
		}
		derivative(t: number) {
			return 6 * (t - 1) * t;
		}
	}
	export class Hermite01 implements DerivableFunction {
		eval(t: number) {
			return t * t * (3 - 2 * t);
		}
		derivative(t: number) {
			return -6 * (t - 1) * t;
		}
	}
	export class Hermite10 implements DerivableFunction {
		eval(t: number) {
			return t * (t * (t - 2) + 1);
		}
		derivative(t: number) {
			return t * (3 * t - 4) + 1;
		}
	}
	export class Hermite11 implements DerivableFunction {
		eval(t: number) {
			return t * t * (t - 1);
		}
		derivative(t: number) {
			return t * (3 * t - 2);
		}
	}

	export class Slice implements DerivableFunction {
		constructor(private readonly start: number, private readonly end: number) {}
		eval(t: number) {
			return this.start + (this.end - this.start) * t;
		}
		derivative(t: number) {
			return this.end - this.start;
		}
	}
}
