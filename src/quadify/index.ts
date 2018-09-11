/*
Copyright 2018 Renzhi Li (aka. Belleve Invis)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { autoQuadifyCurve as ac, quadifyCurve } from "./functional";
import { Curve } from "../derivable/interface";

export namespace Quadify {
	export function auto(
		c: Curve,
		allowError: number = 0.1,
		maxSegments: number = 32,
		maxDistanceTestPoints = 128
	) {
		return ac(c, allowError, maxSegments, maxDistanceTestPoints);
	}
	export const exact = quadifyCurve;
}
