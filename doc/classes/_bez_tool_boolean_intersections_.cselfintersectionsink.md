[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/boolean/intersections"](../modules/_bez_tool_boolean_intersections_.md) › [CSelfIntersectionSink](_bez_tool_boolean_intersections_.cselfintersectionsink.md)

# Class: CSelfIntersectionSink

## Hierarchy

* **CSelfIntersectionSink**

## Implements

* [SelfIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.selfintersectionsink.md)

## Index

### Constructors

* [constructor](_bez_tool_boolean_intersections_.cselfintersectionsink.md#constructor)

### Properties

* [iArc](_bez_tool_boolean_intersections_.cselfintersectionsink.md#private-readonly-iarc)
* [results](_bez_tool_boolean_intersections_.cselfintersectionsink.md#private-readonly-results)

### Methods

* [add](_bez_tool_boolean_intersections_.cselfintersectionsink.md#add)

## Constructors

###  constructor

\+ **new CSelfIntersectionSink**(`iArc`: number, `results`: [FIntersection](../modules/_bez_tool_boolean_intersections_.md#fintersection)[]): *[CSelfIntersectionSink](_bez_tool_boolean_intersections_.cselfintersectionsink.md)*

*Defined in [bez-tool/boolean/intersections.ts:11](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/intersections.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`iArc` | number |
`results` | [FIntersection](../modules/_bez_tool_boolean_intersections_.md#fintersection)[] |

**Returns:** *[CSelfIntersectionSink](_bez_tool_boolean_intersections_.cselfintersectionsink.md)*

## Properties

### `Private` `Readonly` iArc

• **iArc**: *number*

*Defined in [bez-tool/boolean/intersections.ts:12](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/intersections.ts#L12)*

___

### `Private` `Readonly` results

• **results**: *[FIntersection](../modules/_bez_tool_boolean_intersections_.md#fintersection)[]*

*Defined in [bez-tool/boolean/intersections.ts:12](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/intersections.ts#L12)*

## Methods

###  add

▸ **add**(`t`: number): *void*

*Implementation of [SelfIntersectionSink](../interfaces/_bez_tool_boolean_bez3_intersections_.selfintersectionsink.md)*

*Defined in [bez-tool/boolean/intersections.ts:13](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/intersections.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *void*
