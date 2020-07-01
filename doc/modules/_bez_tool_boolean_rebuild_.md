[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/boolean/rebuild"](_bez_tool_boolean_rebuild_.md)

# Module: "bez-tool/boolean/rebuild"

## Index

### Functions

* [collectPrimSegments](_bez_tool_boolean_rebuild_.md#collectprimsegments)
* [descale](_bez_tool_boolean_rebuild_.md#descale)
* [inPlaceAnnexPrimSegments](_bez_tool_boolean_rebuild_.md#inplaceannexprimsegments)
* [preparePoly](_bez_tool_boolean_rebuild_.md#preparepoly)
* [rebuildContour](_bez_tool_boolean_rebuild_.md#rebuildcontour)
* [rebuildShape](_bez_tool_boolean_rebuild_.md#rebuildshape)

## Functions

###  collectPrimSegments

▸ **collectPrimSegments**(`poly`: IIntPoint[], `segHash`: Map‹string, [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)›, `resolution`: number): *[SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)‹›[]*

*Defined in [bez-tool/boolean/rebuild.ts:47](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/rebuild.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | IIntPoint[] |
`segHash` | Map‹string, [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)› |
`resolution` | number |

**Returns:** *[SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)‹›[]*

___

###  descale

▸ **descale**(`Z`: IIntPoint, `resolution`: number): *[Point](../classes/_point_point_.point.md)‹›*

*Defined in [bez-tool/boolean/rebuild.ts:67](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/rebuild.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`Z` | IIntPoint |
`resolution` | number |

**Returns:** *[Point](../classes/_point_point_.point.md)‹›*

___

###  inPlaceAnnexPrimSegments

▸ **inPlaceAnnexPrimSegments**(`primSegments`: [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)[]): *void*

*Defined in [bez-tool/boolean/rebuild.ts:71](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/rebuild.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`primSegments` | [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)[] |

**Returns:** *void*

___

###  preparePoly

▸ **preparePoly**(`poly`: IIntPoint[], `termHash`: Set‹string›): *void*

*Defined in [bez-tool/boolean/rebuild.ts:36](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/rebuild.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | IIntPoint[] |
`termHash` | Set‹string› |

**Returns:** *void*

___

###  rebuildContour

▸ **rebuildContour**(`poly`: IIntPoint[], `segHash`: Map‹string, [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)›, `termHash`: Set‹string›, `resolution`: number, `sink`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[]): *void*

*Defined in [bez-tool/boolean/rebuild.ts:22](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/rebuild.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`poly` | IIntPoint[] |
`segHash` | Map‹string, [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)› |
`termHash` | Set‹string› |
`resolution` | number |
`sink` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |

**Returns:** *void*

___

###  rebuildShape

▸ **rebuildShape**(`polys`: IIntPoint[][], `segHash`: Map‹string, [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)›, `termHash`: Set‹string›, `resolution`: number): *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

*Defined in [bez-tool/boolean/rebuild.ts:7](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/rebuild.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`polys` | IIntPoint[][] |
`segHash` | Map‹string, [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)› |
`termHash` | Set‹string› |
`resolution` | number |

**Returns:** *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*
