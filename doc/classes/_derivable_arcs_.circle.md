[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/arcs"](../modules/_derivable_arcs_.md) › [Circle](_derivable_arcs_.circle.md)

# Class: Circle

## Hierarchy

* **Circle**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_arcs_.circle.md#constructor)

### Properties

* [centerX](_derivable_arcs_.circle.md#centerx)
* [centerY](_derivable_arcs_.circle.md#centery)
* [radius](_derivable_arcs_.circle.md#radius)

### Methods

* [derivative](_derivable_arcs_.circle.md#derivative)
* [eval](_derivable_arcs_.circle.md#eval)

## Constructors

###  constructor

\+ **new Circle**(`cx`: number, `cy`: number, `radius`: number): *[Circle](_derivable_arcs_.circle.md)*

*Defined in [derivable/arcs.ts:124](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L124)*

**Parameters:**

Name | Type |
------ | ------ |
`cx` | number |
`cy` | number |
`radius` | number |

**Returns:** *[Circle](_derivable_arcs_.circle.md)*

## Properties

###  centerX

• **centerX**: *number*

*Defined in [derivable/arcs.ts:122](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L122)*

___

###  centerY

• **centerY**: *number*

*Defined in [derivable/arcs.ts:123](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L123)*

___

###  radius

• **radius**: *number*

*Defined in [derivable/arcs.ts:124](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L124)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:136](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:130](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*
