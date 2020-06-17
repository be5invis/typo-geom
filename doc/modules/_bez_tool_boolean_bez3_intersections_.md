[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/boolean/bez3-intersections"](_bez_tool_boolean_bez3_intersections_.md)

# Module: "bez-tool/boolean/bez3-intersections"

## Index

### Interfaces

* [CrossIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.crossintersectionsink.md)
* [SelfIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.selfintersectionsink.md)

### Type aliases

* [PointArrayRep](_bez_tool_boolean_bez3_intersections_.md#pointarrayrep)

### Variables

* [FAT_LINE_EPSILON](_bez_tool_boolean_bez3_intersections_.md#const-fat_line_epsilon)
* [MAX_CALLS](_bez_tool_boolean_bez3_intersections_.md#const-max_calls)
* [MAX_RECURSE](_bez_tool_boolean_bez3_intersections_.md#const-max_recurse)

### Functions

* [bez3Intersections](_bez_tool_boolean_bez3_intersections_.md#bez3intersections)
* [bez3SelfIntersections](_bez_tool_boolean_bez3_intersections_.md#bez3selfintersections)
* [clipConvexHull](_bez_tool_boolean_bez3_intersections_.md#clipconvexhull)
* [clipConvexHullPart](_bez_tool_boolean_bez3_intersections_.md#clipconvexhullpart)
* [curveIntersectionImpl](_bez_tool_boolean_bez3_intersections_.md#curveintersectionimpl)
* [getConvexHull](_bez_tool_boolean_bez3_intersections_.md#getconvexhull)
* [getCurveLineIntersections](_bez_tool_boolean_bez3_intersections_.md#getcurvelineintersections)
* [getFatline](_bez_tool_boolean_bez3_intersections_.md#getfatline)
* [lineCurveIntersectionImpl](_bez_tool_boolean_bez3_intersections_.md#linecurveintersectionimpl)
* [lineIntersectionImpl](_bez_tool_boolean_bez3_intersections_.md#lineintersectionimpl)
* [possibleIntersect](_bez_tool_boolean_bez3_intersections_.md#possibleintersect)

## Type aliases

###  PointArrayRep

Ƭ **PointArrayRep**: *[number, number]*

*Defined in [bez-tool/boolean/bez3-intersections.ts:65](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L65)*

## Variables

### `Const` FAT_LINE_EPSILON

• **FAT_LINE_EPSILON**: *1e-9* = 1e-9

*Defined in [bez-tool/boolean/bez3-intersections.ts:134](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L134)*

___

### `Const` MAX_CALLS

• **MAX_CALLS**: *65535* = 65535

*Defined in [bez-tool/boolean/bez3-intersections.ts:135](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L135)*

___

### `Const` MAX_RECURSE

• **MAX_RECURSE**: *40* = 40

*Defined in [bez-tool/boolean/bez3-intersections.ts:136](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L136)*

## Functions

###  bez3Intersections

▸ **bez3Intersections**(`v1`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `v2`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `sink`: [CrossIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.crossintersectionsink.md)): *void*

*Defined in [bez-tool/boolean/bez3-intersections.ts:34](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`v2` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`sink` | [CrossIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.crossintersectionsink.md) |

**Returns:** *void*

___

###  bez3SelfIntersections

▸ **bez3SelfIntersections**(`a`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `sink`: [SelfIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.selfintersectionsink.md)): *void*

*Defined in [bez-tool/boolean/bez3-intersections.ts:57](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`sink` | [SelfIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.selfintersectionsink.md) |

**Returns:** *void*

___

###  clipConvexHull

▸ **clipConvexHull**(`hullTop`: [PointArrayRep](_bez_tool_boolean_bez3_intersections_.md#pointarrayrep)[], `hullBottom`: [PointArrayRep](_bez_tool_boolean_bez3_intersections_.md#pointarrayrep)[], `dMin`: number, `dMax`: number): *null | number*

*Defined in [bez-tool/boolean/bez3-intersections.ts:369](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L369)*

Clips the convex-hull and returns [tMin, tMax] for the curve contained.

**Parameters:**

Name | Type |
------ | ------ |
`hullTop` | [PointArrayRep](_bez_tool_boolean_bez3_intersections_.md#pointarrayrep)[] |
`hullBottom` | [PointArrayRep](_bez_tool_boolean_bez3_intersections_.md#pointarrayrep)[] |
`dMin` | number |
`dMax` | number |

**Returns:** *null | number*

___

###  clipConvexHullPart

▸ **clipConvexHullPart**(`part`: [PointArrayRep](_bez_tool_boolean_bez3_intersections_.md#pointarrayrep)[], `top`: boolean, `threshold`: number): *null | number*

*Defined in [bez-tool/boolean/bez3-intersections.ts:389](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L389)*

**Parameters:**

Name | Type |
------ | ------ |
`part` | [PointArrayRep](_bez_tool_boolean_bez3_intersections_.md#pointarrayrep)[] |
`top` | boolean |
`threshold` | number |

**Returns:** *null | number*

___

###  curveIntersectionImpl

▸ **curveIntersectionImpl**(`v1`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `v2`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `sink`: [CrossIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.crossintersectionsink.md), `flip`: boolean, `recursion`: number, `calls`: number, `tMin`: number, `tMax`: number, `uMin`: number, `uMax`: number): *number*

*Defined in [bez-tool/boolean/bez3-intersections.ts:137](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`v2` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`sink` | [CrossIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.crossintersectionsink.md) |
`flip` | boolean |
`recursion` | number |
`calls` | number |
`tMin` | number |
`tMax` | number |
`uMin` | number |
`uMax` | number |

**Returns:** *number*

___

###  getConvexHull

▸ **getConvexHull**(`dq0`: number, `dq1`: number, `dq2`: number, `dq3`: number): *[PointArrayRep](_bez_tool_boolean_bez3_intersections_.md#pointarrayrep)[][]*

*Defined in [bez-tool/boolean/bez3-intersections.ts:322](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L322)*

Calculate the convex hull for the non-parametric bezier curve D(ti, di(t))
The ti is equally spaced across [0..1] — [0, 1/3, 2/3, 1] for
di(t), [dq0, dq1, dq2, dq3] respectively. In other words our CVs for the
curve are already sorted in the X axis in the increasing order.
Calculating convex-hull is much easier than a set of arbitrary points.

The convex-hull is returned as two parts [TOP, BOTTOM]:
(both are in a coordinate space where y increases upwards with origin at
bottom-left)
TOP: The part that lies above the 'median' (line connecting end points of
the curve)
BOTTOM: The part that lies below the median.

**Parameters:**

Name | Type |
------ | ------ |
`dq0` | number |
`dq1` | number |
`dq2` | number |
`dq3` | number |

**Returns:** *[PointArrayRep](_bez_tool_boolean_bez3_intersections_.md#pointarrayrep)[][]*

___

###  getCurveLineIntersections

▸ **getCurveLineIntersections**(`v`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `px`: number, `py`: number, `vx`: number, `vy`: number): *number[]*

*Defined in [bez-tool/boolean/bez3-intersections.ts:108](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`px` | number |
`py` | number |
`vx` | number |
`vy` | number |

**Returns:** *number[]*

___

###  getFatline

▸ **getFatline**(`v`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)): *number[]*

*Defined in [bez-tool/boolean/bez3-intersections.ts:406](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L406)*

Calculates the fat line of a curve and returns the maximum and minimum offset widths
for the fatline of a curve

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |

**Returns:** *number[]*

___

###  lineCurveIntersectionImpl

▸ **lineCurveIntersectionImpl**(`v1`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `v2`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `sink`: [CrossIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.crossintersectionsink.md), `flip`: boolean): *void*

*Defined in [bez-tool/boolean/bez3-intersections.ts:76](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`v2` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`sink` | [CrossIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.crossintersectionsink.md) |
`flip` | boolean |

**Returns:** *void*

___

###  lineIntersectionImpl

▸ **lineIntersectionImpl**(`v1`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `v2`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `sink`: [CrossIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.crossintersectionsink.md)): *void*

*Defined in [bez-tool/boolean/bez3-intersections.ts:67](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`v2` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`sink` | [CrossIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.crossintersectionsink.md) |

**Returns:** *void*

___

###  possibleIntersect

▸ **possibleIntersect**(`v1`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `v2`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)): *boolean*

*Defined in [bez-tool/boolean/bez3-intersections.ts:21](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-intersections.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`v2` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |

**Returns:** *boolean*
