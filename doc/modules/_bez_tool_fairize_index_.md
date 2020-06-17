[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/fairize/index"](_bez_tool_fairize_index_.md)

# Module: "bez-tool/fairize/index"

## Index

### Functions

* [ascending](_bez_tool_fairize_index_.md#ascending)
* [canonicalStart](_bez_tool_fairize_index_.md#canonicalstart)
* [fairizeBezierContour](_bez_tool_fairize_index_.md#fairizebeziercontour)
* [fairizeBezierShape](_bez_tool_fairize_index_.md#fairizebeziershape)
* [findAllExtrema](_bez_tool_fairize_index_.md#findallextrema)
* [findExtrema](_bez_tool_fairize_index_.md#findextrema)
* [inPlaceFilterDegenerates](_bez_tool_fairize_index_.md#inplacefilterdegenerates)
* [isStopCt](_bez_tool_fairize_index_.md#isstopct)
* [markCornersAndSplit](_bez_tool_fairize_index_.md#markcornersandsplit)
* [splitAtExtrema](_bez_tool_fairize_index_.md#splitatextrema)

## Functions

###  ascending

▸ **ascending**(`a`: number, `b`: number): *number*

*Defined in [bez-tool/fairize/index.ts:151](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/fairize/index.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number*

___

###  canonicalStart

▸ **canonicalStart**(`contour`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[]): *void*

*Defined in [bez-tool/fairize/index.ts:164](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/fairize/index.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`contour` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |

**Returns:** *void*

___

###  fairizeBezierContour

▸ **fairizeBezierContour**(`contour`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[]): *[Derivable](../interfaces/_derivable_interface_.derivable.md)‹[XY](../interfaces/_point_interface_.xy.md)‹number››[]*

*Defined in [bez-tool/fairize/index.ts:26](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/fairize/index.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`contour` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |

**Returns:** *[Derivable](../interfaces/_derivable_interface_.derivable.md)‹[XY](../interfaces/_point_interface_.xy.md)‹number››[]*

___

###  fairizeBezierShape

▸ **fairizeBezierShape**(`shape`: [Bez3](../classes/_derivable_arcs_.bez3.md)[][]): *[Arc](_derivable_interface_.md#arc)[][]*

*Defined in [bez-tool/fairize/index.ts:15](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/fairize/index.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`shape` | [Bez3](../classes/_derivable_arcs_.bez3.md)[][] |

**Returns:** *[Arc](_derivable_interface_.md#arc)[][]*

___

###  findAllExtrema

▸ **findAllExtrema**(`arc`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)): *number[]*

*Defined in [bez-tool/fairize/index.ts:154](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/fairize/index.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`arc` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |

**Returns:** *number[]*

___

###  findExtrema

▸ **findExtrema**(`v0`: number, `v1`: number, `v2`: number, `v3`: number, `sink`: [IRootSink](../interfaces/_fn_solver_.irootsink.md)): *void*

*Defined in [bez-tool/fairize/index.ts:145](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/fairize/index.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | number |
`v1` | number |
`v2` | number |
`v3` | number |
`sink` | [IRootSink](../interfaces/_fn_solver_.irootsink.md) |

**Returns:** *void*

___

###  inPlaceFilterDegenerates

▸ **inPlaceFilterDegenerates**(`contour`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[]): *void*

*Defined in [bez-tool/fairize/index.ts:91](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/fairize/index.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`contour` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |

**Returns:** *void*

___

###  isStopCt

▸ **isStopCt**(`ct`: [CornerType](../enums/_bez_tool_shared_slice_arc_.cornertype.md)): *boolean*

*Defined in [bez-tool/fairize/index.ts:161](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/fairize/index.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`ct` | [CornerType](../enums/_bez_tool_shared_slice_arc_.cornertype.md) |

**Returns:** *boolean*

___

###  markCornersAndSplit

▸ **markCornersAndSplit**(`contour`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[], `sink`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[]): *void*

*Defined in [bez-tool/fairize/index.ts:54](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/fairize/index.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`contour` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |
`sink` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |

**Returns:** *void*

___

###  splitAtExtrema

▸ **splitAtExtrema**(`arc`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `sink`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[]): *void*

*Defined in [bez-tool/fairize/index.ts:111](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/fairize/index.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`arc` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`sink` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |

**Returns:** *void*
