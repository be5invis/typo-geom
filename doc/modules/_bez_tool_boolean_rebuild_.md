[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/boolean/rebuild"](_bez_tool_boolean_rebuild_.md)

# Module: "bez-tool/boolean/rebuild"

## Index

### Type aliases

* [PrimSegment](_bez_tool_boolean_rebuild_.md#primsegment)

### Functions

* [descale](_bez_tool_boolean_rebuild_.md#descale)
* [rebuildContour](_bez_tool_boolean_rebuild_.md#rebuildcontour)
* [rebuildShape](_bez_tool_boolean_rebuild_.md#rebuildshape)
* [split](_bez_tool_boolean_rebuild_.md#split)
* [splitImpl](_bez_tool_boolean_rebuild_.md#splitimpl)

## Type aliases

###  PrimSegment

Ƭ **PrimSegment**: *[[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), number, number]*

*Defined in [bez-tool/boolean/rebuild.ts:6](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/rebuild.ts#L6)*

## Functions

###  descale

▸ **descale**(`Z`: IIntPoint, `resolution`: number): *[Point](../classes/_point_point_.point.md)‹›*

*Defined in [bez-tool/boolean/rebuild.ts:63](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/rebuild.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`Z` | IIntPoint |
`resolution` | number |

**Returns:** *[Point](../classes/_point_point_.point.md)‹›*

___

###  rebuildContour

▸ **rebuildContour**(`_poly`: IIntPoint[], `segHash`: Map‹string, [SegEntry](_bez_tool_boolean_to_poly_.md#segentry)›, `termHash`: Set‹string›, `resolution`: number): *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[]*

*Defined in [bez-tool/boolean/rebuild.ts:22](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/rebuild.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`_poly` | IIntPoint[] |
`segHash` | Map‹string, [SegEntry](_bez_tool_boolean_to_poly_.md#segentry)› |
`termHash` | Set‹string› |
`resolution` | number |

**Returns:** *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[]*

___

###  rebuildShape

▸ **rebuildShape**(`polys`: IIntPoint[][], `segHash`: Map‹string, [SegEntry](_bez_tool_boolean_to_poly_.md#segentry)›, `termHash`: Set‹string›, `resolution`: number): *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

*Defined in [bez-tool/boolean/rebuild.ts:8](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/rebuild.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`polys` | IIntPoint[][] |
`segHash` | Map‹string, [SegEntry](_bez_tool_boolean_to_poly_.md#segentry)› |
`termHash` | Set‹string› |
`resolution` | number |

**Returns:** *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

___

###  split

▸ **split**(`s`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `t1`: number, `t2`: number): *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

*Defined in [bez-tool/boolean/rebuild.ts:66](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/rebuild.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`t1` | number |
`t2` | number |

**Returns:** *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

___

###  splitImpl

▸ **splitImpl**(`s`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `t1`: number, `t2`: number): *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

*Defined in [bez-tool/boolean/rebuild.ts:74](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/rebuild.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`t1` | number |
`t2` | number |

**Returns:** *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›*
