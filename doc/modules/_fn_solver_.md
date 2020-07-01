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
* [getNormalizationFactor](_fn_solver_.md#getnormalizationfactor)
* [solveCubic](_fn_solver_.md#solvecubic)
* [solveQuadratic](_fn_solver_.md#solvequadratic)

## Functions

###  bezierSolveCubic

▸ **bezierSolveCubic**(`v0`: number, `v1`: number, `v2`: number, `v3`: number, `val`: number, `sink`: [IRootSink](../interfaces/_fn_solver_.irootsink.md)): *void*

*Defined in [fn/solver.ts:183](https://github.com/be5invis/typo-geom/blob/5527277/src/fn/solver.ts#L183)*

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

*Defined in [fn/solver.ts:10](https://github.com/be5invis/typo-geom/blob/5527277/src/fn/solver.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |
`c` | number |

**Returns:** *number*

___

###  getNormalizationFactor

▸ **getNormalizationFactor**(...`args`: number[]): *number*

*Defined in [fn/solver.ts:36](https://github.com/be5invis/typo-geom/blob/5527277/src/fn/solver.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | number[] |

**Returns:** *number*

___

###  solveCubic

▸ **solveCubic**(`a`: number, `b`: number, `c`: number, `d`: number, `sink`: [IRootSink](../interfaces/_fn_solver_.irootsink.md)): *void*

*Defined in [fn/solver.ts:117](https://github.com/be5invis/typo-geom/blob/5527277/src/fn/solver.ts#L117)*

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

*Defined in [fn/solver.ts:55](https://github.com/be5invis/typo-geom/blob/5527277/src/fn/solver.ts#L55)*

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
