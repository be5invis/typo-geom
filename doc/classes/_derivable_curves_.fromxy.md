[typo-geom](../README.md) > ["derivable/curves"](../modules/_derivable_curves_.md) > [FromXY](../classes/_derivable_curves_.fromxy.md)

# Class: FromXY

## Hierarchy

**FromXY**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_curves_.fromxy.md#constructor)

### Properties

* [x](_derivable_curves_.fromxy.md#x)
* [y](_derivable_curves_.fromxy.md#y)

### Methods

* [derivative](_derivable_curves_.fromxy.md#derivative)
* [eval](_derivable_curves_.fromxy.md#eval)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new FromXY**(x: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*, y: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*): [FromXY](_derivable_curves_.fromxy.md)

*Defined in [derivable/curves.ts:6](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
| y | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** [FromXY](_derivable_curves_.fromxy.md)

___

## Properties

<a id="x"></a>

### `<Private>` x

**● x**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/curves.ts:7](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L7)*

___
<a id="y"></a>

### `<Private>` y

**● y**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/curves.ts:7](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L7)*

___

## Methods

<a id="derivative"></a>

###  derivative

▸ **derivative**(t: *`number`*): [Point](_point_point_.point.md)

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[derivative](../interfaces/_derivable_interface_.derivable.md#derivative)*

*Defined in [derivable/curves.ts:11](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___
<a id="eval"></a>

###  eval

▸ **eval**(t: *`number`*): [Point](_point_point_.point.md)

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[eval](../interfaces/_derivable_interface_.derivable.md#eval)*

*Defined in [derivable/curves.ts:8](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___

