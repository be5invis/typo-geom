[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/interface"](../modules/_derivable_interface_.md) › [Derivable](_derivable_interface_.derivable.md)

# Interface: Derivable ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **Derivable**

## Implemented by

* [Add](../classes/_derivable_functions_.d.add.md)
* [Bez3](../classes/_derivable_arcs_.bez3.md)
* [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)
* [Circle](../classes/_derivable_arcs_.circle.md)
* [Co](../classes/_derivable_functions_.d.co.md)
* [CombinedArc](../classes/_bez_tool_fairize_combined_curve_.combinedarc.md)
* [Const](../classes/_derivable_functions_.d.const.md)
* [Div](../classes/_derivable_functions_.d.div.md)
* [FromXY](../classes/_derivable_arcs_.fromxy.md)
* [Hermite00](../classes/_derivable_functions_.d.hermite00.md)
* [Hermite01](../classes/_derivable_functions_.d.hermite01.md)
* [Hermite10](../classes/_derivable_functions_.d.hermite10.md)
* [Hermite11](../classes/_derivable_functions_.d.hermite11.md)
* [Mixed](../classes/_derivable_arcs_.mixed.md)
* [Mixed3](../classes/_derivable_arcs_.mixed3.md)
* [Mul](../classes/_derivable_functions_.d.mul.md)
* [Nest](../classes/_derivable_functions_.d.nest.md)
* [Pow](../classes/_derivable_functions_.d.pow.md)
* [Reparametrized](../classes/_derivable_arcs_.reparametrized.md)
* [Slice](../classes/_derivable_functions_.d.slice.md)
* [StraightSegment](../classes/_derivable_arcs_.straightsegment.md)
* [Sub](../classes/_derivable_functions_.d.sub.md)
* [Transformed](../classes/_derivable_arcs_.transformed.md)

## Index

### Methods

* [derivative](_derivable_interface_.derivable.md#derivative)
* [eval](_derivable_interface_.derivable.md#eval)

## Methods

###  derivative

▸ **derivative**(`t`: number): *T*

*Defined in [derivable/interface.ts:5](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/interface.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *T*

___

###  eval

▸ **eval**(`t`: number): *T*

*Defined in [derivable/interface.ts:4](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/interface.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *T*
