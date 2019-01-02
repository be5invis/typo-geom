[typo-geom](../README.md) > ["derivable/curves"](../modules/_derivable_curves_.md) > [Mixed](../classes/_derivable_curves_.mixed.md)

# Class: Mixed

## Hierarchy

**Mixed**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_curves_.mixed.md#constructor)

### Properties

* [a](_derivable_curves_.mixed.md#a)
* [b](_derivable_curves_.mixed.md#b)
* [mix](_derivable_curves_.mixed.md#mix)

### Methods

* [derivative](_derivable_curves_.mixed.md#derivative)
* [eval](_derivable_curves_.mixed.md#eval)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Mixed**(a: *[Curve](../modules/_derivable_interface_.md#curve)*, b: *[Curve](../modules/_derivable_interface_.md#curve)*, mix: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*): [Mixed](_derivable_curves_.mixed.md)

*Defined in [derivable/curves.ts:109](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L109)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [Curve](../modules/_derivable_interface_.md#curve) |
| b | [Curve](../modules/_derivable_interface_.md#curve) |
| mix | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** [Mixed](_derivable_curves_.mixed.md)

___

## Properties

<a id="a"></a>

###  a

**● a**: *[Curve](../modules/_derivable_interface_.md#curve)*

*Defined in [derivable/curves.ts:107](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L107)*

___
<a id="b"></a>

###  b

**● b**: *[Curve](../modules/_derivable_interface_.md#curve)*

*Defined in [derivable/curves.ts:108](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L108)*

___
<a id="mix"></a>

###  mix

**● mix**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/curves.ts:109](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L109)*

___

## Methods

<a id="derivative"></a>

###  derivative

▸ **derivative**(t: *`number`*): [Point](_point_point_.point.md)

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[derivative](../interfaces/_derivable_interface_.derivable.md#derivative)*

*Defined in [derivable/curves.ts:121](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L121)*

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

*Defined in [derivable/curves.ts:115](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L115)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___

