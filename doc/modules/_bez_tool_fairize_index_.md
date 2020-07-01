[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/fairize/index"](_bez_tool_fairize_index_.md)

# Module: "bez-tool/fairize/index"

## Index

### Functions

* [canonicalStart](_bez_tool_fairize_index_.md#canonicalstart)
* [fairizeBezierContour](_bez_tool_fairize_index_.md#fairizebeziercontour)
* [fairizeBezierShape](_bez_tool_fairize_index_.md#fairizebeziershape)
* [inPlaceFilterDegenerates](_bez_tool_fairize_index_.md#inplacefilterdegenerates)
* [isStopCt](_bez_tool_fairize_index_.md#isstopct)
* [markCornersAndSplit](_bez_tool_fairize_index_.md#markcornersandsplit)

## Functions

###  canonicalStart

▸ **canonicalStart**(`contour`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[]): *void*

*Defined in [bez-tool/fairize/index.ts:109](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/index.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`contour` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |

**Returns:** *void*

___

###  fairizeBezierContour

▸ **fairizeBezierContour**(`contour`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[]): *[Derivable](../interfaces/_derivable_interface_.derivable.md)‹[XY](../interfaces/_point_interface_.xy.md)‹number››[]*

*Defined in [bez-tool/fairize/index.ts:21](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/index.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`contour` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |

**Returns:** *[Derivable](../interfaces/_derivable_interface_.derivable.md)‹[XY](../interfaces/_point_interface_.xy.md)‹number››[]*

___

###  fairizeBezierShape

▸ **fairizeBezierShape**(`shape`: [Bez3](../classes/_derivable_arcs_.bez3.md)[][]): *[Arc](_derivable_interface_.md#arc)[][]*

*Defined in [bez-tool/fairize/index.ts:10](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/index.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`shape` | [Bez3](../classes/_derivable_arcs_.bez3.md)[][] |

**Returns:** *[Arc](_derivable_interface_.md#arc)[][]*

___

###  inPlaceFilterDegenerates

▸ **inPlaceFilterDegenerates**(`contour`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[]): *void*

*Defined in [bez-tool/fairize/index.ts:86](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/index.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`contour` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |

**Returns:** *void*

___

###  isStopCt

▸ **isStopCt**(`ct`: [CornerType](../enums/_bez_tool_shared_slice_arc_.cornertype.md)): *boolean*

*Defined in [bez-tool/fairize/index.ts:106](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/index.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`ct` | [CornerType](../enums/_bez_tool_shared_slice_arc_.cornertype.md) |

**Returns:** *boolean*

___

###  markCornersAndSplit

▸ **markCornersAndSplit**(`contour`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[], `sink`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[]): *void*

*Defined in [bez-tool/fairize/index.ts:49](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/index.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`contour` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |
`sink` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |

**Returns:** *void*
