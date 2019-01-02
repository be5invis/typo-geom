[typo-geom](../README.md) > ["derivable/curves"](../modules/_derivable_curves_.md) > [Circle](../classes/_derivable_curves_.circle.md)

# Class: Circle

## Hierarchy

**Circle**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_curves_.circle.md#constructor)

### Properties

* [centerX](_derivable_curves_.circle.md#centerx)
* [centerY](_derivable_curves_.circle.md#centery)
* [radius](_derivable_curves_.circle.md#radius)

### Methods

* [derivative](_derivable_curves_.circle.md#derivative)
* [eval](_derivable_curves_.circle.md#eval)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Circle**(cx: *`number`*, cy: *`number`*, radius: *`number`*): [Circle](_derivable_curves_.circle.md)

*Defined in [derivable/curves.ts:79](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| cx | `number` |
| cy | `number` |
| radius | `number` |

**Returns:** [Circle](_derivable_curves_.circle.md)

___

## Properties

<a id="centerx"></a>

###  centerX

**● centerX**: *`number`*

*Defined in [derivable/curves.ts:77](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L77)*

___
<a id="centery"></a>

###  centerY

**● centerY**: *`number`*

*Defined in [derivable/curves.ts:78](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L78)*

___
<a id="radius"></a>

###  radius

**● radius**: *`number`*

*Defined in [derivable/curves.ts:79](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L79)*

___

## Methods

<a id="derivative"></a>

###  derivative

▸ **derivative**(t: *`number`*): [Point](_point_point_.point.md)

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[derivative](../interfaces/_derivable_interface_.derivable.md#derivative)*

*Defined in [derivable/curves.ts:91](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L91)*

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

*Defined in [derivable/curves.ts:85](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L85)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___

