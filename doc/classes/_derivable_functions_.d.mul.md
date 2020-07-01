[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/functions"](../modules/_derivable_functions_.md) › [D](../modules/_derivable_functions_.d.md) › [Mul](_derivable_functions_.d.mul.md)

# Class: Mul

## Hierarchy

* **Mul**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_functions_.d.mul.md#constructor)

### Properties

* [a](_derivable_functions_.d.mul.md#private-readonly-a)
* [b](_derivable_functions_.d.mul.md#private-readonly-b)

### Methods

* [derivative](_derivable_functions_.d.mul.md#derivative)
* [eval](_derivable_functions_.d.mul.md#eval)

## Constructors

###  constructor

\+ **new Mul**(`a`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction), `b`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)): *[Mul](_derivable_functions_.d.mul.md)*

*Defined in [derivable/functions.ts:39](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
`b` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** *[Mul](_derivable_functions_.d.mul.md)*

## Properties

### `Private` `Readonly` a

• **a**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:40](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L40)*

___

### `Private` `Readonly` b

• **b**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:40](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L40)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:44](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*

___

###  eval

▸ **eval**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:41](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*
