[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/functions"](../modules/_derivable_functions_.md) › [D](../modules/_derivable_functions_.d.md) › [Slice](_derivable_functions_.d.slice.md)

# Class: Slice

## Hierarchy

* **Slice**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_functions_.d.slice.md#constructor)

### Properties

* [end](_derivable_functions_.d.slice.md#private-readonly-end)
* [start](_derivable_functions_.d.slice.md#private-readonly-start)

### Methods

* [derivative](_derivable_functions_.d.slice.md#derivative)
* [eval](_derivable_functions_.d.slice.md#eval)

## Constructors

###  constructor

\+ **new Slice**(`start`: number, `end`: number): *[Slice](_derivable_functions_.d.slice.md)*

*Defined in [derivable/functions.ts:123](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`start` | number |
`end` | number |

**Returns:** *[Slice](_derivable_functions_.d.slice.md)*

## Properties

### `Private` `Readonly` end

• **end**: *number*

*Defined in [derivable/functions.ts:124](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L124)*

___

### `Private` `Readonly` start

• **start**: *number*

*Defined in [derivable/functions.ts:124](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L124)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:128](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*

___

###  eval

▸ **eval**(`t`: number): *number*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/functions.ts:125](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/functions.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*
