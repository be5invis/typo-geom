[typo-geom](../README.md) > ["derivable/functions"](../modules/_derivable_functions_.md) > [D](../modules/_derivable_functions_.d.md) > [Mul](../classes/_derivable_functions_.d.mul.md)

# Class: Mul

## Hierarchy

**Mul**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_functions_.d.mul.md#constructor)

### Properties

* [a](_derivable_functions_.d.mul.md#a)
* [b](_derivable_functions_.d.mul.md#b)

### Methods

* [derivative](_derivable_functions_.d.mul.md#derivative)
* [eval](_derivable_functions_.d.mul.md#eval)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Mul**(a: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*, b: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*): [Mul](_derivable_functions_.d.mul.md)

*Defined in [derivable/functions.ts:39](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/functions.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
| b | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** [Mul](_derivable_functions_.d.mul.md)

___

## Properties

<a id="a"></a>

### `<Private>` a

**● a**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:40](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/functions.ts#L40)*

___
<a id="b"></a>

### `<Private>` b

**● b**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/functions.ts:40](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/functions.ts#L40)*

___

## Methods

<a id="derivative"></a>

###  derivative

▸ **derivative**(t: *`number`*): `number`

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[derivative](../interfaces/_derivable_interface_.derivable.md#derivative)*

*Defined in [derivable/functions.ts:44](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/functions.ts#L44)*

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

*Defined in [derivable/functions.ts:41](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/functions.ts#L41)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** `number`

___

