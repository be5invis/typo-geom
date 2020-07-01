[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/boolean/intersections"](_bez_tool_boolean_intersections_.md)

# Module: "bez-tool/boolean/intersections"

## Index

### Classes

* [CCrossIntersectionSink](../classes/_bez_tool_boolean_intersections_.ccrossintersectionsink.md)
* [CSelfIntersectionSink](../classes/_bez_tool_boolean_intersections_.cselfintersectionsink.md)

### Type aliases

* [FIntersection](_bez_tool_boolean_intersections_.md#fintersection)

### Functions

* [findCrossIntersections](_bez_tool_boolean_intersections_.md#findcrossintersections)
* [findSelfIntersections](_bez_tool_boolean_intersections_.md#findselfintersections)

## Type aliases

###  FIntersection

Ƭ **FIntersection**: *number*

*Defined in [bez-tool/boolean/intersections.ts:9](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/intersections.ts#L9)*

## Functions

###  findCrossIntersections

▸ **findCrossIntersections**(`shape1`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][], `shape2`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][], `i1`: [FIntersection](_bez_tool_boolean_intersections_.md#fintersection)[][], `i2`: [FIntersection](_bez_tool_boolean_intersections_.md#fintersection)[][], `sameShape`: boolean): *void*

*Defined in [bez-tool/boolean/intersections.ts:43](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/intersections.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`shape1` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][] |
`shape2` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][] |
`i1` | [FIntersection](_bez_tool_boolean_intersections_.md#fintersection)[][] |
`i2` | [FIntersection](_bez_tool_boolean_intersections_.md#fintersection)[][] |
`sameShape` | boolean |

**Returns:** *void*

___

###  findSelfIntersections

▸ **findSelfIntersections**(`shape`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][]): *number[][]*

*Defined in [bez-tool/boolean/intersections.ts:17](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/intersections.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`shape` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][] |

**Returns:** *number[][]*
