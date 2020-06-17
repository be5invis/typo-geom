[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/boolean/intersections"](../modules/_bez_tool_boolean_intersections_.md) › [CCrossIntersectionSink](_bez_tool_boolean_intersections_.ccrossintersectionsink.md)

# Class: CCrossIntersectionSink

## Hierarchy

* **CCrossIntersectionSink**

## Implements

* [CrossIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.crossintersectionsink.md)

## Index

### Constructors

* [constructor](_bez_tool_boolean_intersections_.ccrossintersectionsink.md#constructor)

### Properties

* [iArc1](_bez_tool_boolean_intersections_.ccrossintersectionsink.md#private-readonly-iarc1)
* [iArc2](_bez_tool_boolean_intersections_.ccrossintersectionsink.md#private-readonly-iarc2)
* [results1](_bez_tool_boolean_intersections_.ccrossintersectionsink.md#private-readonly-results1)
* [results2](_bez_tool_boolean_intersections_.ccrossintersectionsink.md#private-readonly-results2)

### Methods

* [add](_bez_tool_boolean_intersections_.ccrossintersectionsink.md#add)

## Constructors

###  constructor

\+ **new CCrossIntersectionSink**(`iArc1`: number, `iArc2`: number, `results1`: [FIntersection](../modules/_bez_tool_boolean_intersections_.md#fintersection)[], `results2`: [FIntersection](../modules/_bez_tool_boolean_intersections_.md#fintersection)[]): *[CCrossIntersectionSink](_bez_tool_boolean_intersections_.ccrossintersectionsink.md)*

*Defined in [bez-tool/boolean/intersections.ts:30](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/intersections.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`iArc1` | number |
`iArc2` | number |
`results1` | [FIntersection](../modules/_bez_tool_boolean_intersections_.md#fintersection)[] |
`results2` | [FIntersection](../modules/_bez_tool_boolean_intersections_.md#fintersection)[] |

**Returns:** *[CCrossIntersectionSink](_bez_tool_boolean_intersections_.ccrossintersectionsink.md)*

## Properties

### `Private` `Readonly` iArc1

• **iArc1**: *number*

*Defined in [bez-tool/boolean/intersections.ts:32](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/intersections.ts#L32)*

___

### `Private` `Readonly` iArc2

• **iArc2**: *number*

*Defined in [bez-tool/boolean/intersections.ts:33](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/intersections.ts#L33)*

___

### `Private` `Readonly` results1

• **results1**: *[FIntersection](../modules/_bez_tool_boolean_intersections_.md#fintersection)[]*

*Defined in [bez-tool/boolean/intersections.ts:34](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/intersections.ts#L34)*

___

### `Private` `Readonly` results2

• **results2**: *[FIntersection](../modules/_bez_tool_boolean_intersections_.md#fintersection)[]*

*Defined in [bez-tool/boolean/intersections.ts:35](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/intersections.ts#L35)*

## Methods

###  add

▸ **add**(`t1`: number, `t2`: number): *void*

*Implementation of [CrossIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.crossintersectionsink.md)*

*Defined in [bez-tool/boolean/intersections.ts:37](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/boolean/intersections.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`t1` | number |
`t2` | number |

**Returns:** *void*
