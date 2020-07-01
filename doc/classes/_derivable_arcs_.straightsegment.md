[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/arcs"](../modules/_derivable_arcs_.md) › [StraightSegment](_derivable_arcs_.straightsegment.md)

# Class: StraightSegment

## Hierarchy

* **StraightSegment**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_arcs_.straightsegment.md#constructor)

### Properties

* [a](_derivable_arcs_.straightsegment.md#readonly-a)
* [b](_derivable_arcs_.straightsegment.md#readonly-b)

### Methods

* [derivative](_derivable_arcs_.straightsegment.md#derivative)
* [eval](_derivable_arcs_.straightsegment.md#eval)

## Constructors

###  constructor

\+ **new StraightSegment**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint)): *[StraightSegment](_derivable_arcs_.straightsegment.md)*

*Defined in [derivable/arcs.ts:141](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[StraightSegment](_derivable_arcs_.straightsegment.md)*

## Properties

### `Readonly` a

• **a**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/arcs.ts:142](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L142)*

___

### `Readonly` b

• **b**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/arcs.ts:142](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L142)*

## Methods

###  derivative

▸ **derivative**(): *[Point](_point_point_.point.md)‹›*

*Defined in [derivable/arcs.ts:146](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L146)*

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:143](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*
