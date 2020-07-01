[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/boolean/to-poly"](_bez_tool_boolean_to_poly_.md)

# Module: "bez-tool/boolean/to-poly"

## Index

### Classes

* [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)

### Type aliases

* [IntKnot](_bez_tool_boolean_to_poly_.md#intknot)

### Variables

* [DICING_STOPS](_bez_tool_boolean_to_poly_.md#const-dicing_stops)

### Functions

* [MakeKnot](_bez_tool_boolean_to_poly_.md#makeknot)
* [by_t](_bez_tool_boolean_to_poly_.md#by_t)
* [diceKnots](_bez_tool_boolean_to_poly_.md#diceknots)
* [intKnotNotSame](_bez_tool_boolean_to_poly_.md#intknotnotsame)
* [keyOfZ](_bez_tool_boolean_to_poly_.md#keyofz)
* [setSegHash](_bez_tool_boolean_to_poly_.md#setseghash)
* [toPoly](_bez_tool_boolean_to_poly_.md#topoly)

## Type aliases

###  IntKnot

Ƭ **IntKnot**: *IIntPoint & object*

*Defined in [bez-tool/boolean/to-poly.ts:7](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L7)*

## Variables

### `Const` DICING_STOPS

• **DICING_STOPS**: *4* = 4

*Defined in [bez-tool/boolean/to-poly.ts:132](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L132)*

## Functions

###  MakeKnot

▸ **MakeKnot**(`t`: number, `s`: [IPoint](_point_interface_.md#ipoint), `resolution`: number): *object*

*Defined in [bez-tool/boolean/to-poly.ts:121](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |
`s` | [IPoint](_point_interface_.md#ipoint) |
`resolution` | number |

**Returns:** *object*

* **X**: *number* = Math.round(s.x * resolution)

* **Y**: *number* = Math.round(s.y * resolution)

* **t**: *number* = t

___

###  by_t

▸ **by_t**(`a`: [IntKnot](_bez_tool_boolean_to_poly_.md#intknot), `b`: [IntKnot](_bez_tool_boolean_to_poly_.md#intknot)): *number*

*Defined in [bez-tool/boolean/to-poly.ts:118](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IntKnot](_bez_tool_boolean_to_poly_.md#intknot) |
`b` | [IntKnot](_bez_tool_boolean_to_poly_.md#intknot) |

**Returns:** *number*

___

###  diceKnots

▸ **diceKnots**(`arc`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md), `resolution`: number, `knots`: [IntKnot](_bez_tool_boolean_to_poly_.md#intknot)[]): *IIntPoint & object[]*

*Defined in [bez-tool/boolean/to-poly.ts:133](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`arc` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md) |
`resolution` | number |
`knots` | [IntKnot](_bez_tool_boolean_to_poly_.md#intknot)[] |

**Returns:** *IIntPoint & object[]*

___

###  intKnotNotSame

▸ **intKnotNotSame**(`knot`: [IntKnot](_bez_tool_boolean_to_poly_.md#intknot), `last`: [IntKnot](_bez_tool_boolean_to_poly_.md#intknot)): *boolean*

*Defined in [bez-tool/boolean/to-poly.ts:128](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`knot` | [IntKnot](_bez_tool_boolean_to_poly_.md#intknot) |
`last` | [IntKnot](_bez_tool_boolean_to_poly_.md#intknot) |

**Returns:** *boolean*

___

###  keyOfZ

▸ **keyOfZ**(`z`: IIntPoint): *string*

*Defined in [bez-tool/boolean/to-poly.ts:8](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`z` | IIntPoint |

**Returns:** *string*

___

###  setSegHash

▸ **setSegHash**(`segHash`: Map‹string, [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)›, `key`: string, `entry`: [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)): *void*

*Defined in [bez-tool/boolean/to-poly.ts:48](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`segHash` | Map‹string, [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)› |
`key` | string |
`entry` | [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md) |

**Returns:** *void*

___

###  toPoly

▸ **toPoly**(`shape`: [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][], `sid`: number, `splats`: [FIntersection](_bez_tool_boolean_intersections_.md#fintersection)[][], `segHash`: Map‹string, [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)›, `termHash`: Set‹string›, `resolution`: number): *IntPoint‹›[][]*

*Defined in [bez-tool/boolean/to-poly.ts:55](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`shape` | [Bez3Slice](../classes/_bez_tool_shared_slice_arc_.bez3slice.md)[][] |
`sid` | number |
`splats` | [FIntersection](_bez_tool_boolean_intersections_.md#fintersection)[][] |
`segHash` | Map‹string, [SegEntry](../classes/_bez_tool_boolean_to_poly_.segentry.md)› |
`termHash` | Set‹string› |
`resolution` | number |

**Returns:** *IntPoint‹›[][]*
