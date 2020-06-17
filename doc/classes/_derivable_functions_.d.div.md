[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/functions"](../modules/_derivable_functions_.md) › [D](../modules/_derivable_functions_.d.md) › [Div](_derivable_functions_.d.div.md)

# Class: Div

## Hierarchy

* **Div**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_functions_.d.div.md#constructor)

### Properties

* [a](_derivable_functions_.d.div.md#private-readonly-a)
* [b](_derivable_functions_.d.div.md#private-readonly-b)

### Methods

* [derivative](_derivable_functions_.d.div.md#derivative)
* [eval](_derivable_functions_.d.div.md#eval)

## Constructors

###  constructor

\+ **new Div**(`a`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction), `b`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)): *[Div](_derivable_functions_.d.div.md)*

*Defined in [derivable/functions.ts:48](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
`b` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** *[Div](_derivable_functions_.d.div.md)*

## Properties

### `Private` `Readonly` a

• **a**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:49](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L49)*

___

### `Private` `Readonly` b

• **b**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:49](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L49)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:53](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*

___

###  eval

▸ **eval**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:50](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/functions.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*
