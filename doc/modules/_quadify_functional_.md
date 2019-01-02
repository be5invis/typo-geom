[typo-geom](../README.md) > ["quadify/functional"](../modules/_quadify_functional_.md)

# External module: "quadify/functional"

## Index

### Variables

* [invMatrixCache](_quadify_functional_.md#invmatrixcache)

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

---

## Variables

<a id="invmatrixcache"></a>

### `<Const>` invMatrixCache

**● invMatrixCache**: *`Map`<`number`, `number`[][]>* =  new Map()

*Defined in [quadify/functional.ts:75](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/functional.ts#L75)*

___

## Functions

<a id="x"></a>

###  X

▸ **X**(n: *`number`*): `number`

*Defined in [quadify/functional.ts:7](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/functional.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `number`

___
<a id="y"></a>

###  Y

▸ **Y**(n: *`number`*): `number`

*Defined in [quadify/functional.ts:10](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/functional.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `number`

___
<a id="autoquadifycurve"></a>

###  autoQuadifyCurve

▸ **autoQuadifyCurve**(c: *[Curve](_derivable_interface_.md#curve)*, allowError: *`number`*, maxSegments: *`number`*, samples: *`number`*): [IPoint](_point_interface_.md#ipoint)[] | `null`

*Defined in [quadify/functional.ts:172](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/functional.ts#L172)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | [Curve](_derivable_interface_.md#curve) |
| allowError | `number` |
| maxSegments | `number` |
| samples | `number` |

**Returns:** [IPoint](_point_interface_.md#ipoint)[] | `null`

___
<a id="estimateerror"></a>

###  estimateError

▸ **estimateError**(c: *[Curve](_derivable_interface_.md#curve)*, offPoints: *[IPoint](_point_interface_.md#ipoint)[]*, N: *`number`*): `number`

*Defined in [quadify/functional.ts:138](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/functional.ts#L138)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | [Curve](_derivable_interface_.md#curve) |
| offPoints | [IPoint](_point_interface_.md#ipoint)[] |
| N | `number` |

**Returns:** `number`

___
<a id="findintersection"></a>

###  findIntersection

▸ **findIntersection**(p1: *[IPoint](_point_interface_.md#ipoint)*, d1: *[IPoint](_point_interface_.md#ipoint)*, d2: *[IPoint](_point_interface_.md#ipoint)*, p2: *[IPoint](_point_interface_.md#ipoint)*): [IPoint](_point_interface_.md#ipoint) | `null`

*Defined in [quadify/functional.ts:14](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/functional.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| p1 | [IPoint](_point_interface_.md#ipoint) |
| d1 | [IPoint](_point_interface_.md#ipoint) |
| d2 | [IPoint](_point_interface_.md#ipoint) |
| p2 | [IPoint](_point_interface_.md#ipoint) |

**Returns:** [IPoint](_point_interface_.md#ipoint) | `null`

___
<a id="getinvmatrix"></a>

###  getInvMatrix

▸ **getInvMatrix**(n: *`number`*): `number`[][]

*Defined in [quadify/functional.ts:76](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/functional.ts#L76)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `number`[][]

___
<a id="getmatrix"></a>

###  getMatrix

▸ **getMatrix**(n: *`number`*): `number`[][]

*Defined in [quadify/functional.ts:43](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/functional.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `number`[][]

___
<a id="getresults"></a>

###  getResults

▸ **getResults**(c: *[Curve](_derivable_interface_.md#curve)*, n: *`number`*): `number`[]

*Defined in [quadify/functional.ts:85](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/functional.ts#L85)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | [Curve](_derivable_interface_.md#curve) |
| n | `number` |

**Returns:** `number`[]

___
<a id="quadifycurve"></a>

###  quadifyCurve

▸ **quadifyCurve**(c: *[Curve](_derivable_interface_.md#curve)*, n?: *`number`*): [IPoint](_point_interface_.md#ipoint)[] | `null`

*Defined in [quadify/functional.ts:111](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/functional.ts#L111)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| c | [Curve](_derivable_interface_.md#curve) | - |
| `Default value` n | `number` | 1 |

**Returns:** [IPoint](_point_interface_.md#ipoint)[] | `null`

___

