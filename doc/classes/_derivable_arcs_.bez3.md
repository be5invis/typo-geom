[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/arcs"](../modules/_derivable_arcs_.md) › [Bez3](_derivable_arcs_.bez3.md)

# Class: Bez3

## Hierarchy

* **Bez3**

  ↳ [Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_arcs_.bez3.md#constructor)

### Properties

* [a](_derivable_arcs_.bez3.md#readonly-a)
* [b](_derivable_arcs_.bez3.md#readonly-b)
* [c](_derivable_arcs_.bez3.md#readonly-c)
* [d](_derivable_arcs_.bez3.md#readonly-d)

### Methods

* [derivative](_derivable_arcs_.bez3.md#derivative)
* [eval](_derivable_arcs_.bez3.md#eval)
* [isStraight](_derivable_arcs_.bez3.md#isstraight)
* [fromStraightSegment](_derivable_arcs_.bez3.md#static-fromstraightsegment)

## Constructors

###  constructor

\+ **new Bez3**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `c`: [IPoint](../modules/_point_interface_.md#ipoint), `d`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Bez3](_derivable_arcs_.bez3.md)*

*Defined in [derivable/arcs.ts:36](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`c` | [IPoint](../modules/_point_interface_.md#ipoint) |
`d` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Bez3](_derivable_arcs_.bez3.md)*

## Properties

### `Readonly` a

• **a**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/arcs.ts:38](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L38)*

___

### `Readonly` b

• **b**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/arcs.ts:39](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L39)*

___

### `Readonly` c

• **c**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/arcs.ts:40](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L40)*

___

### `Readonly` d

• **d**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Defined in [derivable/arcs.ts:41](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L41)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:51](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:44](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  isStraight

▸ **isStraight**(): *boolean*

*Defined in [derivable/arcs.ts:58](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L58)*

**Returns:** *boolean*

___

### `Static` fromStraightSegment

▸ **fromStraightSegment**(`ss`: [StraightSegment](_derivable_arcs_.straightsegment.md)): *[Bez3](_derivable_arcs_.bez3.md)‹›*

*Defined in [derivable/arcs.ts:80](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`ss` | [StraightSegment](_derivable_arcs_.straightsegment.md) |

**Returns:** *[Bez3](_derivable_arcs_.bez3.md)‹›*
