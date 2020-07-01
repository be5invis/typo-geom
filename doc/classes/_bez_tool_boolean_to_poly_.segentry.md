[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/boolean/to-poly"](../modules/_bez_tool_boolean_to_poly_.md) › [SegEntry](_bez_tool_boolean_to_poly_.segentry.md)

# Class: SegEntry

## Hierarchy

* **SegEntry**

## Index

### Constructors

* [constructor](_bez_tool_boolean_to_poly_.segentry.md#constructor)

### Properties

* [arc](_bez_tool_boolean_to_poly_.segentry.md#readonly-arc)
* [end](_bez_tool_boolean_to_poly_.segentry.md#end)
* [jid](_bez_tool_boolean_to_poly_.segentry.md#readonly-jid)
* [kid](_bez_tool_boolean_to_poly_.segentry.md#readonly-kid)
* [sid](_bez_tool_boolean_to_poly_.segentry.md#readonly-sid)
* [start](_bez_tool_boolean_to_poly_.segentry.md#start)

### Methods

* [compare](_bez_tool_boolean_to_poly_.segentry.md#compare)
* [toArc](_bez_tool_boolean_to_poly_.segentry.md#toarc)
* [tryAnnex](_bez_tool_boolean_to_poly_.segentry.md#tryannex)

## Constructors

###  constructor

\+ **new SegEntry**(`arc`: [Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md), `start`: number, `end`: number, `sid`: number, `jid`: number, `kid`: number): *[SegEntry](_bez_tool_boolean_to_poly_.segentry.md)*

*Defined in [bez-tool/boolean/to-poly.ts:12](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L12)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`arc` | [Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md) | - |
`start` | number | - |
`end` | number | - |
`sid` | number | 0 |
`jid` | number | 0 |
`kid` | number | 0 |

**Returns:** *[SegEntry](_bez_tool_boolean_to_poly_.segentry.md)*

## Properties

### `Readonly` arc

• **arc**: *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)*

*Defined in [bez-tool/boolean/to-poly.ts:14](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L14)*

___

###  end

• **end**: *number*

*Defined in [bez-tool/boolean/to-poly.ts:16](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L16)*

___

### `Readonly` jid

• **jid**: *number*

*Defined in [bez-tool/boolean/to-poly.ts:18](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L18)*

___

### `Readonly` kid

• **kid**: *number*

*Defined in [bez-tool/boolean/to-poly.ts:19](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L19)*

___

### `Readonly` sid

• **sid**: *number*

*Defined in [bez-tool/boolean/to-poly.ts:17](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L17)*

___

###  start

• **start**: *number*

*Defined in [bez-tool/boolean/to-poly.ts:15](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L15)*

## Methods

###  compare

▸ **compare**(`b`: [SegEntry](_bez_tool_boolean_to_poly_.segentry.md)): *number*

*Defined in [bez-tool/boolean/to-poly.ts:21](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [SegEntry](_bez_tool_boolean_to_poly_.segentry.md) |

**Returns:** *number*

___

###  toArc

▸ **toArc**(): *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

*Defined in [bez-tool/boolean/to-poly.ts:38](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L38)*

**Returns:** *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

___

###  tryAnnex

▸ **tryAnnex**(`b`: [SegEntry](_bez_tool_boolean_to_poly_.segentry.md)): *boolean*

*Defined in [bez-tool/boolean/to-poly.ts:24](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/boolean/to-poly.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [SegEntry](_bez_tool_boolean_to_poly_.segentry.md) |

**Returns:** *boolean*
