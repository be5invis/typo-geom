[typo-geom](../README.md) › [Globals](../globals.md) › ["quadify/functional"](_quadify_functional_.md)

# Module: "quadify/functional"

## Index

### Variables

* [invMatrixCache](_quadify_functional_.md#const-invmatrixcache)

### Functions

* [X](_quadify_functional_.md#x)
* [Y](_quadify_functional_.md#y)
* [autoQuadifyCurve](_quadify_functional_.md#autoquadifycurve)
* [estimateError](_quadify_functional_.md#estimateerror)
* [findIntersection](_quadify_functional_.md#findintersection)
* [getInvMatrix](_quadify_functional_.md#getinvmatrix)
* [getMatrix](_quadify_functional_.md#getmatrix)
* [getResults](_quadify_functional_.md#getresults)
* [quadifyCurve](_quadify_functional_.md#quadifycurve)

## Variables

### `Const` invMatrixCache

• **invMatrixCache**: *Map‹number, number[][]›* = new Map()

*Defined in [quadify/functional.ts:75](https://github.com/be5invis/typo-geom/blob/5527277/src/quadify/functional.ts#L75)*

## Functions

###  X

▸ **X**(`n`: number): *number*

*Defined in [quadify/functional.ts:7](https://github.com/be5invis/typo-geom/blob/5527277/src/quadify/functional.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *number*

___

###  Y

▸ **Y**(`n`: number): *number*

*Defined in [quadify/functional.ts:10](https://github.com/be5invis/typo-geom/blob/5527277/src/quadify/functional.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *number*

___

###  autoQuadifyCurve

▸ **autoQuadifyCurve**(`c`: [Arc](_derivable_interface_.md#arc), `allowError`: number, `maxSegments`: number, `samples`: number): *[IPoint](_point_interface_.md#ipoint)[] | null*

*Defined in [quadify/functional.ts:172](https://github.com/be5invis/typo-geom/blob/5527277/src/quadify/functional.ts#L172)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Arc](_derivable_interface_.md#arc) |
`allowError` | number |
`maxSegments` | number |
`samples` | number |

**Returns:** *[IPoint](_point_interface_.md#ipoint)[] | null*

___

###  estimateError

▸ **estimateError**(`c`: [Arc](_derivable_interface_.md#arc), `offPoints`: [IPoint](_point_interface_.md#ipoint)[], `N`: number): *number*

*Defined in [quadify/functional.ts:138](https://github.com/be5invis/typo-geom/blob/5527277/src/quadify/functional.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Arc](_derivable_interface_.md#arc) |
`offPoints` | [IPoint](_point_interface_.md#ipoint)[] |
`N` | number |

**Returns:** *number*

___

###  findIntersection

▸ **findIntersection**(`p1`: [IPoint](_point_interface_.md#ipoint), `d1`: [IPoint](_point_interface_.md#ipoint), `d2`: [IPoint](_point_interface_.md#ipoint), `p2`: [IPoint](_point_interface_.md#ipoint)): *[IPoint](_point_interface_.md#ipoint) | null*

*Defined in [quadify/functional.ts:14](https://github.com/be5invis/typo-geom/blob/5527277/src/quadify/functional.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`p1` | [IPoint](_point_interface_.md#ipoint) |
`d1` | [IPoint](_point_interface_.md#ipoint) |
`d2` | [IPoint](_point_interface_.md#ipoint) |
`p2` | [IPoint](_point_interface_.md#ipoint) |

**Returns:** *[IPoint](_point_interface_.md#ipoint) | null*

___

###  getInvMatrix

▸ **getInvMatrix**(`n`: number): *number[][]*

*Defined in [quadify/functional.ts:76](https://github.com/be5invis/typo-geom/blob/5527277/src/quadify/functional.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *number[][]*

___

###  getMatrix

▸ **getMatrix**(`n`: number): *number[][]*

*Defined in [quadify/functional.ts:43](https://github.com/be5invis/typo-geom/blob/5527277/src/quadify/functional.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *number[][]*

___

###  getResults

▸ **getResults**(`c`: [Arc](_derivable_interface_.md#arc), `n`: number): *number[]*

*Defined in [quadify/functional.ts:85](https://github.com/be5invis/typo-geom/blob/5527277/src/quadify/functional.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Arc](_derivable_interface_.md#arc) |
`n` | number |

**Returns:** *number[]*

___

###  quadifyCurve

▸ **quadifyCurve**(`c`: [Arc](_derivable_interface_.md#arc), `n`: number): *[IPoint](_point_interface_.md#ipoint)[] | null*

*Defined in [quadify/functional.ts:111](https://github.com/be5invis/typo-geom/blob/5527277/src/quadify/functional.ts#L111)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`c` | [Arc](_derivable_interface_.md#arc) | - |
`n` | number | 1 |

**Returns:** *[IPoint](_point_interface_.md#ipoint)[] | null*
