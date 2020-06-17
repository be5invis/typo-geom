[typo-geom](../README.md) › [Globals](../globals.md) › ["shape-conv/index"](_shape_conv_index_.md)

# Module: "shape-conv/index"

## Index

### Interfaces

* [IArcGeometrySink](../interfaces/_shape_conv_index_.iarcgeometrysink.md)
* [IBezierGeometrySink](../interfaces/_shape_conv_index_.ibeziergeometrysink.md)

### Functions

* [transferBezArcShape](_shape_conv_index_.md#transferbezarcshape)
* [transferGenericShape](_shape_conv_index_.md#transfergenericshape)

## Functions

###  transferBezArcShape

▸ **transferBezArcShape**(`shape`: [Bez3](../classes/_derivable_arcs_.bez3.md)[][], `sink`: [IBezierGeometrySink](../interfaces/_shape_conv_index_.ibeziergeometrysink.md), `tolerance`: number): *void*

*Defined in [shape-conv/index.ts:21](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/shape-conv/index.ts#L21)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shape` | [Bez3](../classes/_derivable_arcs_.bez3.md)[][] | - |
`sink` | [IBezierGeometrySink](../interfaces/_shape_conv_index_.ibeziergeometrysink.md) | - |
`tolerance` | number | 1 / 16 |

**Returns:** *void*

___

###  transferGenericShape

▸ **transferGenericShape**(`shape`: [Arc](_derivable_interface_.md#arc)[][], `sink`: [IArcGeometrySink](../interfaces/_shape_conv_index_.iarcgeometrysink.md), `tolerance`: number): *void*

*Defined in [shape-conv/index.ts:56](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/shape-conv/index.ts#L56)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shape` | [Arc](_derivable_interface_.md#arc)[][] | - |
`sink` | [IArcGeometrySink](../interfaces/_shape_conv_index_.iarcgeometrysink.md) | - |
`tolerance` | number | 1 / 16 |

**Returns:** *void*
