[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/arcs"](../modules/_derivable_arcs_.md) › [FromXY](_derivable_arcs_.fromxy.md)

# Class: FromXY

## Hierarchy

* **FromXY**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_arcs_.fromxy.md#constructor)

### Properties

* [x](_derivable_arcs_.fromxy.md#private-readonly-x)
* [y](_derivable_arcs_.fromxy.md#private-readonly-y)

### Methods

* [derivative](_derivable_arcs_.fromxy.md#derivative)
* [eval](_derivable_arcs_.fromxy.md#eval)

## Constructors

###  constructor

\+ **new FromXY**(`x`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction), `y`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)): *[FromXY](_derivable_arcs_.fromxy.md)*

*Defined in [derivable/arcs.ts:6](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
`y` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** *[FromXY](_derivable_arcs_.fromxy.md)*

## Properties

### `Private` `Readonly` x

• **x**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/arcs.ts:7](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L7)*

___

### `Private` `Readonly` y

• **y**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/arcs.ts:7](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L7)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:11](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:8](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*
