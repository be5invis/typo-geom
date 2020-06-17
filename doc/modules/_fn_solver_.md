[typo-geom](../README.md) › [Globals](../globals.md) › ["fn/solver"](_fn_solver_.md)

# Module: "fn/solver"

## Index

### Classes

* [ClampedRootSink](../classes/_fn_solver_.clampedrootsink.md)

### Interfaces

* [IRootSink](../interfaces/_fn_solver_.irootsink.md)

### Functions

* [bezierSolveCubic](_fn_solver_.md#beziersolvecubic)
* [getDiscriminant](_fn_solver_.md#getdiscriminant)
* [getDistance](_fn_solver_.md#getdistance)
* [getNormalizationFactor](_fn_solver_.md#getnormalizationfactor)
* [signedDistance](_fn_solver_.md#signeddistance)
* [solveCubic](_fn_solver_.md#solvecubic)
* [solveQuadratic](_fn_solver_.md#solvequadratic)

## Functions

###  bezierSolveCubic

▸ **bezierSolveCubic**(`v0`: number, `v1`: number, `v2`: number, `v3`: number, `val`: number, `sink`: [IRootSink](../interfaces/_fn_solver_.irootsink.md)): *void*

*Defined in [fn/solver.ts:185](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L185)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | number |
`v1` | number |
`v2` | number |
`v3` | number |
`val` | number |
`sink` | [IRootSink](../interfaces/_fn_solver_.irootsink.md) |

**Returns:** *void*

___

###  getDiscriminant

▸ **getDiscriminant**(`a`: number, `b`: number, `c`: number): *number*

*Defined in [fn/solver.ts:12](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |
`c` | number |

**Returns:** *number*

___

###  getDistance

▸ **getDistance**(`px`: number, `py`: number, `vx`: number, `vy`: number, `x`: number, `y`: number): *number*

*Defined in [fn/solver.ts:224](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L224)*

**Parameters:**

Name | Type |
------ | ------ |
`px` | number |
`py` | number |
`vx` | number |
`vy` | number |
`x` | number |
`y` | number |

**Returns:** *number*

___

###  getNormalizationFactor

▸ **getNormalizationFactor**(...`args`: number[]): *number*

*Defined in [fn/solver.ts:38](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | number[] |

**Returns:** *number*

___

###  signedDistance

▸ **signedDistance**(`px`: number, `py`: number, `vx`: number, `vy`: number, `x`: number, `y`: number): *number*

*Defined in [fn/solver.ts:206](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L206)*

**Parameters:**

Name | Type |
------ | ------ |
`px` | number |
`py` | number |
`vx` | number |
`vy` | number |
`x` | number |
`y` | number |

**Returns:** *number*

___

###  solveCubic

▸ **solveCubic**(`a`: number, `b`: number, `c`: number, `d`: number, `sink`: [IRootSink](../interfaces/_fn_solver_.irootsink.md)): *void*

*Defined in [fn/solver.ts:119](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L119)*

Solve a cubic equation, using numerically stable methods,
given an equation of the form ax³ + bx² + cx + d = 0.

This algorithm avoids the trigonometric/inverse trigonometric
calculations required by the "Italins"' formula. Cardano's method
works well enough for exact computations, this method takes a
numerical approach where the double precision error bound is kept
very low.

References:
 Kahan W. - "To Solve a Real Cubic Equation"
  http://www.cs.berkeley.edu/~wkahan/Math128/Cubic.pdf
 Harikrishnan G.
 https://gist.github.com/hkrish/9e0de1f121971ee0fbab281f5c986de9

W. Kahan's paper contains inferences on accuracy of cubic
zero-finding methods. Also testing methods for robustness.

**`author`** Harikrishnan Gopalakrishnan <hari.exeption@gmail.com>

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |
`c` | number |
`d` | number |
`sink` | [IRootSink](../interfaces/_fn_solver_.irootsink.md) |

**Returns:** *void*

___

###  solveQuadratic

▸ **solveQuadratic**(`a`: number, `b`: number, `c`: number, `sink`: [IRootSink](../interfaces/_fn_solver_.irootsink.md)): *void*

*Defined in [fn/solver.ts:57](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L57)*

Solve a quadratic equation in a numerically robust manner;
given a quadratic equation ax² + bx + c = 0, find the values of x.

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |
`c` | number |
`sink` | [IRootSink](../interfaces/_fn_solver_.irootsink.md) |

**Returns:** *void*
