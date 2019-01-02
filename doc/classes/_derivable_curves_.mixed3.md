[typo-geom](../README.md) > ["derivable/curves"](../modules/_derivable_curves_.md) > [Mixed3](../classes/_derivable_curves_.mixed3.md)

# Class: Mixed3

## Hierarchy

**Mixed3**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_curves_.mixed3.md#constructor)

### Properties

* [a](_derivable_curves_.mixed3.md#a)
* [b](_derivable_curves_.mixed3.md#b)
* [f](_derivable_curves_.mixed3.md#f)
* [g](_derivable_curves_.mixed3.md#g)
* [n](_derivable_curves_.mixed3.md#n)

### Methods

* [derivative](_derivable_curves_.mixed3.md#derivative)
* [eval](_derivable_curves_.mixed3.md#eval)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Mixed3**(n: *[Curve](../modules/_derivable_interface_.md#curve)*, f: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*, a: *[Curve](../modules/_derivable_interface_.md#curve)*, g: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*, b: *[Curve](../modules/_derivable_interface_.md#curve)*): [Mixed3](_derivable_curves_.mixed3.md)

*Defined in [derivable/curves.ts:140](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L140)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | [Curve](../modules/_derivable_interface_.md#curve) |
| f | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
| a | [Curve](../modules/_derivable_interface_.md#curve) |
| g | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
| b | [Curve](../modules/_derivable_interface_.md#curve) |

**Returns:** [Mixed3](_derivable_curves_.mixed3.md)

___

## Properties

<a id="a"></a>

###  a

**● a**: *[Curve](../modules/_derivable_interface_.md#curve)*

*Defined in [derivable/curves.ts:137](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L137)*

___
<a id="b"></a>

###  b

**● b**: *[Curve](../modules/_derivable_interface_.md#curve)*

*Defined in [derivable/curves.ts:138](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L138)*

___
<a id="f"></a>

###  f

**● f**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/curves.ts:139](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L139)*

___
<a id="g"></a>

###  g

**● g**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/curves.ts:140](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L140)*

___
<a id="n"></a>

###  n

**● n**: *[Curve](../modules/_derivable_interface_.md#curve)*

*Defined in [derivable/curves.ts:136](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L136)*

___

## Methods

<a id="derivative"></a>

###  derivative

▸ **derivative**(t: *`number`*): [Point](_point_point_.point.md)

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[derivative](../interfaces/_derivable_interface_.derivable.md#derivative)*

*Defined in [derivable/curves.ts:160](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L160)*

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

*Defined in [derivable/curves.ts:149](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L149)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___

