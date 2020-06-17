[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/arcs"](../modules/_derivable_arcs_.md) › [Mixed](_derivable_arcs_.mixed.md)

# Class: Mixed

## Hierarchy

* **Mixed**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_arcs_.mixed.md#constructor)

### Properties

* [a](_derivable_arcs_.mixed.md#a)
* [b](_derivable_arcs_.mixed.md#b)
* [mix](_derivable_arcs_.mixed.md#mix)

### Methods

* [derivative](_derivable_arcs_.mixed.md#derivative)
* [eval](_derivable_arcs_.mixed.md#eval)

## Constructors

###  constructor

\+ **new Mixed**(`a`: [Arc](../modules/_derivable_interface_.md#arc), `b`: [Arc](../modules/_derivable_interface_.md#arc), `mix`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)): *[Mixed](_derivable_arcs_.mixed.md)*

*Defined in [derivable/arcs.ts:140](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Arc](../modules/_derivable_interface_.md#arc) |
`b` | [Arc](../modules/_derivable_interface_.md#arc) |
`mix` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** *[Mixed](_derivable_arcs_.mixed.md)*

## Properties

###  a

• **a**: *[Arc](../modules/_derivable_interface_.md#arc)*

*Defined in [derivable/arcs.ts:138](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L138)*

___

###  b

• **b**: *[Arc](../modules/_derivable_interface_.md#arc)*

*Defined in [derivable/arcs.ts:139](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L139)*

___

###  mix

• **mix**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/arcs.ts:140](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L140)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:152](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:146](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*
