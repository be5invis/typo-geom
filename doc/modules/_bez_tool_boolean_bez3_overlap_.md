[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/boolean/bez3-overlap"](_bez_tool_boolean_bez3_overlap_.md)

# Module: "bez-tool/boolean/bez3-overlap"

## Index

### Type aliases

* [OverlapSpot](_bez_tool_boolean_bez3_overlap_.md#overlapspot)

### Functions

* [getOverlaps](_bez_tool_boolean_bez3_overlap_.md#getoverlaps)
* [getSquaredLineLength](_bez_tool_boolean_bez3_overlap_.md#getsquaredlinelength)

## Type aliases

###  OverlapSpot

Ƭ **OverlapSpot**: *[number, number]*

*Defined in [bez-tool/boolean/bez3-overlap.ts:19](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-overlap.ts#L19)*

## Functions

###  getOverlaps

▸ **getOverlaps**(`v1`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `v2`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)): *null | [number, number][]*

*Defined in [bez-tool/boolean/bez3-overlap.ts:20](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-overlap.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`v1` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`v2` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |

**Returns:** *null | [number, number][]*

___

###  getSquaredLineLength

▸ **getSquaredLineLength**(`v`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)): *number*

*Defined in [bez-tool/boolean/bez3-overlap.ts:13](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/bez3-overlap.ts#L13)*

Bezier curve intersection algorithm and utilities

Directly extracted from PaperJS' implementation bezier curve fat-line clipping
The original source code is available under the MIT licence at
https://github.com/paperjs/paper.js/

**Parameters:**

Name | Type |
------ | ------ |
`v` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |

**Returns:** *number*
