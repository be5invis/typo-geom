[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/shape-to-bez3/index"](_bez_tool_shape_to_bez3_index_.md)

# Module: "bez-tool/shape-to-bez3/index"

## Index

### Variables

* [PROBE_STOPS](_bez_tool_shape_to_bez3_index_.md#const-probe_stops)

### Functions

* [convertArcToBez3](_bez_tool_shape_to_bez3_index_.md#convertarctobez3)
* [convertContourToBez3](_bez_tool_shape_to_bez3_index_.md#convertcontourtobez3)
* [convertShapeToBez3](_bez_tool_shape_to_bez3_index_.md#convertshapetobez3)

## Variables

### `Const` PROBE_STOPS

• **PROBE_STOPS**: *4* = 4

*Defined in [bez-tool/shape-to-bez3/index.ts:32](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shape-to-bez3/index.ts#L32)*

## Functions

###  convertArcToBez3

▸ **convertArcToBez3**(`arc`: [Arc](_derivable_interface_.md#arc), `err`: number, `sink`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[], `t0`: number, `t1`: number, `depth`: number, `maxDepth`: number): *void*

*Defined in [bez-tool/shape-to-bez3/index.ts:33](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shape-to-bez3/index.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`arc` | [Arc](_derivable_interface_.md#arc) |
`err` | number |
`sink` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[] |
`t0` | number |
`t1` | number |
`depth` | number |
`maxDepth` | number |

**Returns:** *void*

___

###  convertContourToBez3

▸ **convertContourToBez3**(`contour`: [Arc](_derivable_interface_.md#arc)[], `err`: number): *[Bez3](../classes/_derivable_arcs_.bez3.md)[]*

*Defined in [bez-tool/shape-to-bez3/index.ts:12](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shape-to-bez3/index.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`contour` | [Arc](_derivable_interface_.md#arc)[] |
`err` | number |

**Returns:** *[Bez3](../classes/_derivable_arcs_.bez3.md)[]*

___

###  convertShapeToBez3

▸ **convertShapeToBez3**(`shape`: [Arc](_derivable_interface_.md#arc)[][], `err`: number): *[Bez3](../classes/_derivable_arcs_.bez3.md)[][]*

*Defined in [bez-tool/shape-to-bez3/index.ts:7](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shape-to-bez3/index.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`shape` | [Arc](_derivable_interface_.md#arc)[][] |
`err` | number |

**Returns:** *[Bez3](../classes/_derivable_arcs_.bez3.md)[][]*
