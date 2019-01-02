[typo-geom](../README.md) > ["derivable/functions"](../modules/_derivable_functions_.md) > [D](../modules/_derivable_functions_.d.md) > [Nest](../classes/_derivable_functions_.d.nest.md)

# Class: Nest

## Hierarchy

**Nest**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_functions_.d.nest.md#constructor)

### Properties

* [a](_derivable_functions_.d.nest.md#a)
* [b](_derivable_functions_.d.nest.md#b)

### Methods

* [derivative](_derivable_functions_.d.nest.md#derivative)
* [eval](_derivable_functions_.d.nest.md#eval)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Nest**(a: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*, b: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*): [Nest](_derivable_functions_.d.nest.md)

*Defined in [derivable/functions.ts:67](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/functions.ts#L67)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
| b | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** [Nest](_derivable_functions_.d.nest.md)

___

## Properties

<a id="a"></a>

### `<Private>` a

**● a**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:68](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/functions.ts#L68)*

___
<a id="b"></a>

### `<Private>` b

**● b**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:68](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/functions.ts#L68)*

___

## Methods

<a id="derivative"></a>

###  derivative

▸ **derivative**(t: *`number`*): `number`

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[derivative](../interfaces/_derivable_interface_.derivable.md#derivative)*

*Defined in [derivable/functions.ts:72](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/functions.ts#L72)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** `number`

___
<a id="eval"></a>

###  eval

▸ **eval**(t: *`number`*): `number`

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[eval](../interfaces/_derivable_interface_.derivable.md#eval)*

*Defined in [derivable/functions.ts:69](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/functions.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** `number`

___

