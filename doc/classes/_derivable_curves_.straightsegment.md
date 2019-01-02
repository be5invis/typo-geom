[typo-geom](../README.md) > ["derivable/curves"](../modules/_derivable_curves_.md) > [StraightSegment](../classes/_derivable_curves_.straightsegment.md)

# Class: StraightSegment

## Hierarchy

**StraightSegment**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_curves_.straightsegment.md#constructor)

### Properties

* [a](_derivable_curves_.straightsegment.md#a)
* [b](_derivable_curves_.straightsegment.md#b)

### Methods

* [derivative](_derivable_curves_.straightsegment.md#derivative)
* [eval](_derivable_curves_.straightsegment.md#eval)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StraightSegment**(a: *[IPoint](../modules/_point_interface_.md#ipoint)*, b: *[IPoint](../modules/_point_interface_.md#ipoint)*): [StraightSegment](_derivable_curves_.straightsegment.md)

*Defined in [derivable/curves.ts:96](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L96)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [IPoint](../modules/_point_interface_.md#ipoint) |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** [StraightSegment](_derivable_curves_.straightsegment.md)

___

## Properties

<a id="a"></a>

### `<Private>` a

**● a**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/curves.ts:97](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L97)*

___
<a id="b"></a>

### `<Private>` b

**● b**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/curves.ts:97](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L97)*

___

## Methods

<a id="derivative"></a>

###  derivative

▸ **derivative**(): [Point](_point_point_.point.md)

*Defined in [derivable/curves.ts:101](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L101)*

**Returns:** [Point](_point_point_.point.md)

___
<a id="eval"></a>

###  eval

▸ **eval**(t: *`number`*): [Point](_point_point_.point.md)

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[eval](../interfaces/_derivable_interface_.derivable.md#eval)*

*Defined in [derivable/curves.ts:98](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L98)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___

