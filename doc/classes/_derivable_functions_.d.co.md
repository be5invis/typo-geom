[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/functions"](../modules/_derivable_functions_.md) › [D](../modules/_derivable_functions_.d.md) › [Co](_derivable_functions_.d.co.md)

# Class: Co

## Hierarchy

* **Co**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_functions_.d.co.md#constructor)

### Properties

* [a](_derivable_functions_.d.co.md#private-readonly-a)

### Methods

* [derivative](_derivable_functions_.d.co.md#derivative)
* [eval](_derivable_functions_.d.co.md#eval)

## Constructors

###  constructor

\+ **new Co**(`a`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)): *[Co](_derivable_functions_.d.co.md)*

*Defined in [derivable/functions.ts:58](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** *[Co](_derivable_functions_.d.co.md)*

## Properties

### `Private` `Readonly` a

• **a**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:59](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L59)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:63](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*

___

###  eval

▸ **eval**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:60](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*
