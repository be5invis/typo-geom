[typo-geom](../README.md) > ["derivable/curves"](../modules/_derivable_curves_.md) > [Reparametrized](../classes/_derivable_curves_.reparametrized.md)

# Class: Reparametrized

## Hierarchy

**Reparametrized**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_curves_.reparametrized.md#constructor)

### Properties

* [curve](_derivable_curves_.reparametrized.md#curve)
* [fn](_derivable_curves_.reparametrized.md#fn)

### Methods

* [derivative](_derivable_curves_.reparametrized.md#derivative)
* [eval](_derivable_curves_.reparametrized.md#eval)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Reparametrized**(c: *[Curve](../modules/_derivable_interface_.md#curve)*, fn: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*): [Reparametrized](_derivable_curves_.reparametrized.md)

*Defined in [derivable/curves.ts:61](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L61)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | [Curve](../modules/_derivable_interface_.md#curve) |
| fn | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** [Reparametrized](_derivable_curves_.reparametrized.md)

___

## Properties

<a id="curve"></a>

###  curve

**● curve**: *[Curve](../modules/_derivable_interface_.md#curve)*

*Defined in [derivable/curves.ts:60](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L60)*

___
<a id="fn"></a>

###  fn

**● fn**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/curves.ts:61](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L61)*

___

## Methods

<a id="derivative"></a>

###  derivative

▸ **derivative**(t: *`number`*): [Point](_point_point_.point.md)

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[derivative](../interfaces/_derivable_interface_.derivable.md#derivative)*

*Defined in [derivable/curves.ts:69](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___
<a id="eval"></a>

###  eval

▸ **eval**(t: *`number`*): [XY](../interfaces/_point_interface_.xy.md)<`number`>

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[eval](../interfaces/_derivable_interface_.derivable.md#eval)*

*Defined in [derivable/curves.ts:66](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L66)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** [XY](../interfaces/_point_interface_.xy.md)<`number`>

___

