[typo-geom](../README.md) › [Globals](../globals.md) › ["shape-conv/index"](_shape_conv_index_.md)

# Module: "shape-conv/index"

## Index

### Interfaces

* [IArcGeometrySink](../interfaces/_shape_conv_index_.iarcgeometrysink.md)
* [IBezierGeometrySink](../interfaces/_shape_conv_index_.ibeziergeometrysink.md)

### Functions

* [transferBezArcShape](_shape_conv_index_.md#transferbezarcshape)
* [transferGenericShape](_shape_conv_index_.md#transfergenericshape)
* [transferGenericShapeAsBezier](_shape_conv_index_.md#transfergenericshapeasbezier)

## Functions

###  transferBezArcShape

▸ **transferBezArcShape**(`shape`: [Bez3](../classes/_derivable_arcs_.bez3.md)[][], `sink`: [IBezierGeometrySink](../interfaces/_shape_conv_index_.ibeziergeometrysink.md), `tolerance`: number): *void*

*Defined in [shape-conv/index.ts:22](https://github.com/be5invis/typo-geom/blob/5527277/src/shape-conv/index.ts#L22)*

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

*Defined in [shape-conv/index.ts:57](https://github.com/be5invis/typo-geom/blob/5527277/src/shape-conv/index.ts#L57)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shape` | [Arc](_derivable_interface_.md#arc)[][] | - |
`sink` | [IArcGeometrySink](../interfaces/_shape_conv_index_.iarcgeometrysink.md) | - |
`tolerance` | number | 1 / 16 |

**Returns:** *void*

___

###  transferGenericShapeAsBezier

▸ **transferGenericShapeAsBezier**(`shape`: [Arc](_derivable_interface_.md#arc)[][], `sink`: [IBezierGeometrySink](../interfaces/_shape_conv_index_.ibeziergeometrysink.md), `tolerance`: number): *void*

*Defined in [shape-conv/index.ts:84](https://github.com/be5invis/typo-geom/blob/5527277/src/shape-conv/index.ts#L84)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`shape` | [Arc](_derivable_interface_.md#arc)[][] | - |
`sink` | [IBezierGeometrySink](../interfaces/_shape_conv_index_.ibeziergeometrysink.md) | - |
`tolerance` | number | 1 / 16 |

**Returns:** *void*
