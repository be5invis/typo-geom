[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/arcs"](../modules/_derivable_arcs_.md) › [Reparametrized](_derivable_arcs_.reparametrized.md)

# Class: Reparametrized

## Hierarchy

* **Reparametrized**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_arcs_.reparametrized.md#constructor)

### Properties

* [curve](_derivable_arcs_.reparametrized.md#curve)
* [fn](_derivable_arcs_.reparametrized.md#fn)

### Methods

* [derivative](_derivable_arcs_.reparametrized.md#derivative)
* [eval](_derivable_arcs_.reparametrized.md#eval)

## Constructors

###  constructor

\+ **new Reparametrized**(`c`: [Arc](../modules/_derivable_interface_.md#arc), `fn`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)): *[Reparametrized](_derivable_arcs_.reparametrized.md)*

*Defined in [derivable/arcs.ts:92](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Arc](../modules/_derivable_interface_.md#arc) |
`fn` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |

**Returns:** *[Reparametrized](_derivable_arcs_.reparametrized.md)*

## Properties

###  curve

• **curve**: *[Arc](../modules/_derivable_interface_.md#arc)*

*Defined in [derivable/arcs.ts:91](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L91)*

___

###  fn

• **fn**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/arcs.ts:92](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L92)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:100](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[XY](../interfaces/_point_interface_.xy.md)‹number›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:97](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L97)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[XY](../interfaces/_point_interface_.xy.md)‹number›*
