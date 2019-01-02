[typo-geom](../README.md) > ["derivable/curves"](../modules/_derivable_curves_.md) > [Bez3](../classes/_derivable_curves_.bez3.md)

# Class: Bez3

## Hierarchy

**Bez3**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_curves_.bez3.md#constructor)

### Properties

* [a](_derivable_curves_.bez3.md#a)
* [b](_derivable_curves_.bez3.md#b)
* [c](_derivable_curves_.bez3.md#c)
* [d](_derivable_curves_.bez3.md#d)

### Methods

* [derivative](_derivable_curves_.bez3.md#derivative)
* [eval](_derivable_curves_.bez3.md#eval)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Bez3**(a: *[IPoint](../modules/_point_interface_.md#ipoint)*, b: *[IPoint](../modules/_point_interface_.md#ipoint)*, c: *[IPoint](../modules/_point_interface_.md#ipoint)*, d: *[IPoint](../modules/_point_interface_.md#ipoint)*): [Bez3](_derivable_curves_.bez3.md)

*Defined in [derivable/curves.ts:36](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [IPoint](../modules/_point_interface_.md#ipoint) |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |
| c | [IPoint](../modules/_point_interface_.md#ipoint) |
| d | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** [Bez3](_derivable_curves_.bez3.md)

___

## Properties

<a id="a"></a>

###  a

**● a**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/curves.ts:38](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L38)*

___
<a id="b"></a>

###  b

**● b**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/curves.ts:39](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L39)*

___
<a id="c"></a>

###  c

**● c**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/curves.ts:40](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L40)*

___
<a id="d"></a>

###  d

**● d**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/curves.ts:41](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L41)*

___

## Methods

<a id="derivative"></a>

###  derivative

▸ **derivative**(t: *`number`*): [Point](_point_point_.point.md)

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md).[derivative](../interfaces/_derivable_interface_.derivable.md#derivative)*

*Defined in [derivable/curves.ts:51](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L51)*

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

*Defined in [derivable/curves.ts:44](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/curves.ts#L44)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___

