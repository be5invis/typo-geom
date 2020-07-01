[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/fairize/combined-curve"](../modules/_bez_tool_fairize_combined_curve_.md) › [CombinedArc](_bez_tool_fairize_combined_curve_.combinedarc.md)

# Class: CombinedArc

## Hierarchy

* **CombinedArc**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_bez_tool_fairize_combined_curve_.combinedarc.md#constructor)

### Properties

* [lengths](_bez_tool_fairize_combined_curve_.combinedarc.md#private-readonly-lengths)
* [segments](_bez_tool_fairize_combined_curve_.combinedarc.md#readonly-segments)

### Methods

* [derivative](_bez_tool_fairize_combined_curve_.combinedarc.md#derivative)
* [eval](_bez_tool_fairize_combined_curve_.combinedarc.md#eval)
* [getIndex](_bez_tool_fairize_combined_curve_.combinedarc.md#private-getindex)
* [reduceIfStraight](_bez_tool_fairize_combined_curve_.combinedarc.md#reduceifstraight)

## Constructors

###  constructor

\+ **new CombinedArc**(`segments`: [Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)[]): *[CombinedArc](_bez_tool_fairize_combined_curve_.combinedarc.md)*

*Defined in [bez-tool/fairize/combined-curve.ts:7](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/combined-curve.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`segments` | [Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)[] |

**Returns:** *[CombinedArc](_bez_tool_fairize_combined_curve_.combinedarc.md)*

## Properties

### `Private` `Readonly` lengths

• **lengths**: *number[]* = []

*Defined in [bez-tool/fairize/combined-curve.ts:7](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/combined-curve.ts#L7)*

___

### `Readonly` segments

• **segments**: *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)[]*

*Defined in [bez-tool/fairize/combined-curve.ts:8](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/combined-curve.ts#L8)*

## Methods

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [bez-tool/fairize/combined-curve.ts:33](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/combined-curve.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Defined in [bez-tool/fairize/combined-curve.ts:26](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/combined-curve.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

### `Private` getIndex

▸ **getIndex**(`t`: number): *number*

*Defined in [bez-tool/fairize/combined-curve.ts:21](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/combined-curve.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *number*

___

###  reduceIfStraight

▸ **reduceIfStraight**(): *[Arc](../modules/_derivable_interface_.md#arc)*

*Defined in [bez-tool/fairize/combined-curve.ts:41](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/fairize/combined-curve.ts#L41)*

**Returns:** *[Arc](../modules/_derivable_interface_.md#arc)*
