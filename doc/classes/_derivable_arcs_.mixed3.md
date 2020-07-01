[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/arcs"](../modules/_derivable_arcs_.md) › [Mixed3](_derivable_arcs_.mixed3.md)

# Class: Mixed3

## Hierarchy

* **Mixed3**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_derivable_arcs_.mixed3.md#constructor)

### Properties

* [a](_derivable_arcs_.mixed3.md#a)
* [b](_derivable_arcs_.mixed3.md#b)
* [f](_derivable_arcs_.mixed3.md#f)
* [g](_derivable_arcs_.mixed3.md#g)
* [n](_derivable_arcs_.mixed3.md#n)

### Methods

* [derivative](_derivable_arcs_.mixed3.md#derivative)
* [eval](_derivable_arcs_.mixed3.md#eval)

## Constructors

###  constructor

\+ **new Mixed3**(`n`: [Arc](../modules/_derivable_interface_.md#arc), `f`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction), `a`: [Arc](../modules/_derivable_interface_.md#arc), `g`: [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction), `b`: [Arc](../modules/_derivable_interface_.md#arc)): *[Mixed3](_derivable_arcs_.mixed3.md)*

*Defined in [derivable/arcs.ts:185](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L185)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | [Arc](../modules/_derivable_interface_.md#arc) |
`f` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
`a` | [Arc](../modules/_derivable_interface_.md#arc) |
`g` | [DerivableFunction](../modules/_derivable_interface_.md#derivablefunction) |
`b` | [Arc](../modules/_derivable_interface_.md#arc) |

**Returns:** *[Mixed3](_derivable_arcs_.mixed3.md)*

## Properties

###  a

• **a**: *[Arc](../modules/_derivable_interface_.md#arc)*

*Defined in [derivable/arcs.ts:182](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L182)*

___

###  b

• **b**: *[Arc](../modules/_derivable_interface_.md#arc)*

*Defined in [derivable/arcs.ts:183](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L183)*

___

###  f

• **f**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/arcs.ts:184](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L184)*

___

###  g

• **g**: *[DerivableFunction](../modules/_derivable_interface_.md#derivablefunction)*

*Defined in [derivable/arcs.ts:185](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L185)*

___

###  n

• **n**: *[Arc](../modules/_derivable_interface_.md#arc)*

*Defined in [derivable/arcs.ts:181](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L181)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:205](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L205)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [derivable/arcs.ts:194](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L194)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*
