[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/functions"](../modules/_derivable_functions_.md) › [D](../modules/_derivable_functions_.d.md) › [Add](_derivable_functions_.d.add.md)

# Class: Add

## Hierarchy

* **Add**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_functions_.d.add.md#constructor)

### Properties

* [a](_derivable_functions_.d.add.md#private-readonly-a)
* [b](_derivable_functions_.d.add.md#private-readonly-b)

### Methods

* [derivative](_derivable_functions_.d.add.md#derivative)
* [eval](_derivable_functions_.d.add.md#eval)

## Constructors

###  constructor

\+ **new Add**(`a`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction), `b`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)): *[Add](_derivable_functions_.d.add.md)*

*Defined in [derivable/functions.ts:21](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
`b` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** *[Add](_derivable_functions_.d.add.md)*

## Properties

### `Private` `Readonly` a

• **a**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:22](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L22)*

___

### `Private` `Readonly` b

• **b**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:22](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L22)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:26](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*

___

###  eval

▸ **eval**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:23](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*
