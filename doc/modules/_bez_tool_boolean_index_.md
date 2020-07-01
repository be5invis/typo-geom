[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/boolean/index"](_bez_tool_boolean_index_.md)

# Module: "bez-tool/boolean/index"

## Index

### References

* [ClipType](_bez_tool_boolean_index_.md#cliptype)
* [PolyFillType](_bez_tool_boolean_index_.md#polyfilltype)

### Functions

* [ToBez3Slices](_bez_tool_boolean_index_.md#tobez3slices)
* [combine](_bez_tool_boolean_index_.md#combine)
* [combineImpl](_bez_tool_boolean_index_.md#combineimpl)
* [removeOverlap](_bez_tool_boolean_index_.md#removeoverlap)
* [removeOverlapImpl](_bez_tool_boolean_index_.md#removeoverlapimpl)

## References

###  ClipType

• **ClipType**:

___

###  PolyFillType

• **PolyFillType**:

## Functions

###  ToBez3Slices

▸ **ToBez3Slices**(`shape`: [Bez3](../classes/_derivable_arcs_.bez3.md)[][]): *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

*Defined in [bez-tool/boolean/index.ts:55](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/index.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`shape` | [Bez3](../classes/_derivable_arcs_.bez3.md)[][] |

**Returns:** *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

___

###  combine

▸ **combine**(`op`: ClipType, `_s1`: [Bez3](../classes/_derivable_arcs_.bez3.md)[][], `_s2`: [Bez3](../classes/_derivable_arcs_.bez3.md)[][], `rule1`: PolyFillType, `rule2`: PolyFillType, `RESOLUTION`: number): *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

*Defined in [bez-tool/boolean/index.ts:69](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/index.ts#L69)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`op` | ClipType | - |
`_s1` | [Bez3](../classes/_derivable_arcs_.bez3.md)[][] | - |
`_s2` | [Bez3](../classes/_derivable_arcs_.bez3.md)[][] | - |
`rule1` | PolyFillType | - |
`rule2` | PolyFillType | - |
`RESOLUTION` | number | 256 |

**Returns:** *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

___

###  combineImpl

▸ **combineImpl**(`op`: ClipType, `s1`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][], `s2`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][], `rule1`: PolyFillType, `rule2`: PolyFillType, `resolution`: number): *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

*Defined in [bez-tool/boolean/index.ts:8](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/index.ts#L8)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`op` | ClipType | - |
`s1` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][] | - |
`s2` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][] | - |
`rule1` | PolyFillType | - |
`rule2` | PolyFillType | - |
`resolution` | number | 256 |

**Returns:** *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

___

###  removeOverlap

▸ **removeOverlap**(`s1`: [Bez3](../classes/_derivable_arcs_.bez3.md)[][], `rule`: PolyFillType, `RESOLUTION`: number): *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

*Defined in [bez-tool/boolean/index.ts:79](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/index.ts#L79)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s1` | [Bez3](../classes/_derivable_arcs_.bez3.md)[][] | - |
`rule` | PolyFillType | - |
`RESOLUTION` | number | 256 |

**Returns:** *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

___

###  removeOverlapImpl

▸ **removeOverlapImpl**(`s1`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][], `rule`: PolyFillType, `resolution`: number): *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*

*Defined in [bez-tool/boolean/index.ts:41](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/index.ts#L41)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s1` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][] | - |
`rule` | PolyFillType | - |
`resolution` | number | 256 |

**Returns:** *[Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)‹›[][]*
