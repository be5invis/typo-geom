[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/functions"](../modules/_derivable_functions_.md) › [D](../modules/_derivable_functions_.d.md) › [Sub](_derivable_functions_.d.sub.md)

# Class: Sub

## Hierarchy

* **Sub**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_functions_.d.sub.md#constructor)

### Properties

* [a](_derivable_functions_.d.sub.md#private-readonly-a)
* [b](_derivable_functions_.d.sub.md#private-readonly-b)

### Methods

* [derivative](_derivable_functions_.d.sub.md#derivative)
* [eval](_derivable_functions_.d.sub.md#eval)

## Constructors

###  constructor

\+ **new Sub**(`a`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction), `b`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)): *[Sub](_derivable_functions_.d.sub.md)*

*Defined in [derivable/functions.ts:30](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
`b` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** *[Sub](_derivable_functions_.d.sub.md)*

## Properties

### `Private` `Readonly` a

• **a**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:31](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L31)*

___

### `Private` `Readonly` b

• **b**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:31](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L31)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:35](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*

___

###  eval

▸ **eval**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:32](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*
