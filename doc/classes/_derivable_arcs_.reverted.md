[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/arcs"](../modules/_derivable_arcs_.md) › [Reverted](_derivable_arcs_.reverted.md)

# Class: Reverted

## Hierarchy

* **Reverted**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_arcs_.reverted.md#constructor)

### Properties

* [curve](_derivable_arcs_.reverted.md#curve)

### Methods

* [derivative](_derivable_arcs_.reverted.md#derivative)
* [eval](_derivable_arcs_.reverted.md#eval)

## Constructors

###  constructor

\+ **new Reverted**(`c`: [Arc](../modules/_derivable_interface_.md#arc)): *[Reverted](_derivable_arcs_.reverted.md)*

*Defined in [derivable/arcs.ts:108](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Arc](../modules/_derivable_interface_.md#arc) |

**Returns:** *[Reverted](_derivable_arcs_.reverted.md)*

## Properties

###  curve

• **curve**: *[Arc](../modules/_derivable_interface_.md#arc)*

*Defined in [derivable/arcs.ts:108](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L108)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:115](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[XY](../interfaces/_point_interface_.xy.md)‹number›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:112](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[XY](../interfaces/_point_interface_.xy.md)‹number›*
