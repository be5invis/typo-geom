[typo-geom](../README.md) > ["derivable/curves"](../modules/_derivable_curves_.md) > [Transformed](../classes/_derivable_curves_.transformed.md)

# Class: Transformed

## Hierarchy

**Transformed**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_curves_.transformed.md#constructor)

### Properties

* [c](_derivable_curves_.transformed.md#c)
* [tfm](_derivable_curves_.transformed.md#tfm)

### Methods

* [derivative](_derivable_curves_.transformed.md#derivative)
* [eval](_derivable_curves_.transformed.md#eval)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Transformed**(c: *[Curve](../modules/_derivable_interface_.md#curve)*, t: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*): [Transformed](_derivable_curves_.transformed.md)

*Defined in [derivable/curves.ts:180](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L180)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| c | [Curve](../modules/_derivable_interface_.md#curve) |
| t | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |

**Returns:** [Transformed](_derivable_curves_.transformed.md)

___

## Properties

<a id="c"></a>

###  c

**● c**: *[Curve](../modules/_derivable_interface_.md#curve)*

*Defined in [derivable/curves.ts:179](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L179)*

___
<a id="tfm"></a>

###  tfm

**● tfm**: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/curves.ts:180](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L180)*

___

## Methods

<a id="derivative"></a>

###  derivative

▸ **derivative**(t: *`number`*): [Point](_point_point_.point.md)

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[derivative](../interfaces/_derivable_interface_.derivable.md#derivative)*

*Defined in [derivable/curves.ts:189](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L189)*

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

*Defined in [derivable/curves.ts:185](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L185)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___

