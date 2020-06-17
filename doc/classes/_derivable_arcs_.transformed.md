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

*Defined in [derivable/arcs.ts:211](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L211)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Arc](../modules/_derivable_interface_.md#arc) |
`t` | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |

**Returns:** *[Transformed](_derivable_arcs_.transformed.md)*

## Properties

###  c

• **c**: *[Arc](../modules/_derivable_interface_.md#arc)*

*Defined in [derivable/arcs.ts:210](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L210)*

___

###  tfm

• **tfm**: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/arcs.ts:211](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L211)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:220](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L220)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:216](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L216)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*
