[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/arcs"](../modules/_derivable_arcs_.md) › [Transformed](_derivable_arcs_.transformed.md)

# Class: Transformed

## Hierarchy

* **Transformed**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_arcs_.transformed.md#constructor)

### Properties

* [c](_derivable_arcs_.transformed.md#c)
* [tfm](_derivable_arcs_.transformed.md#tfm)

### Methods

* [derivative](_derivable_arcs_.transformed.md#derivative)
* [eval](_derivable_arcs_.transformed.md#eval)

## Constructors

###  constructor

\+ **new Transformed**(`c`: [Arc](../modules/_derivable_interface_.md#arc), `t`: [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)): *[Transformed](_derivable_arcs_.transformed.md)*

*Defined in [derivable/arcs.ts:225](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L225)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Arc](../modules/_derivable_interface_.md#arc) |
`t` | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |

**Returns:** *[Transformed](_derivable_arcs_.transformed.md)*

## Properties

###  c

• **c**: *[Arc](../modules/_derivable_interface_.md#arc)*

*Defined in [derivable/arcs.ts:224](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L224)*

___

###  tfm

• **tfm**: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/arcs.ts:225](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L225)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:234](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L234)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:230](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L230)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*
