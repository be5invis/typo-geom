[typo-geom](../README.md) › [Globals](../globals.md) › ["point/on-off-glyph-point"](../modules/_point_on_off_glyph_point_.md) › [OnOffGlyphPoint](_point_on_off_glyph_point_.onoffglyphpoint.md)

# Class: OnOffGlyphPoint

## Hierarchy

* **OnOffGlyphPoint**

## Implements

* [IOnOffGlyphPoint](../interfaces/_point_interface_.ionoffglyphpoint.md)

## Index

### Constructors

* [constructor](_point_on_off_glyph_point_.onoffglyphpoint.md#constructor)

### Properties

* [on](_point_on_off_glyph_point_.onoffglyphpoint.md#on)
* [x](_point_on_off_glyph_point_.onoffglyphpoint.md#x)
* [y](_point_on_off_glyph_point_.onoffglyphpoint.md#y)

### Methods

* [clone](_point_on_off_glyph_point_.onoffglyphpoint.md#clone)
* [from](_point_on_off_glyph_point_.onoffglyphpoint.md#static-from)
* [fromPoint](_point_on_off_glyph_point_.onoffglyphpoint.md#static-frompoint)

## Constructors

###  constructor

\+ **new OnOffGlyphPoint**(`x`: number, `y`: number, `on`: boolean): *[OnOffGlyphPoint](_point_on_off_glyph_point_.onoffglyphpoint.md)*

*Defined in [point/on-off-glyph-point.ts:7](https://github.com/be5invis/typo-geom/blob/5527277/src/point/on-off-glyph-point.ts#L7)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`x` | number | 0 |
`y` | number | 0 |
`on` | boolean | true |

**Returns:** *[OnOffGlyphPoint](_point_on_off_glyph_point_.onoffglyphpoint.md)*

## Properties

###  on

• **on**: *boolean*

*Implementation of [IOnOffGlyphPoint](../interfaces/_point_interface_.ionoffglyphpoint.md).[on](../interfaces/_point_interface_.ionoffglyphpoint.md#readonly-on)*

*Defined in [point/on-off-glyph-point.ts:8](https://github.com/be5invis/typo-geom/blob/5527277/src/point/on-off-glyph-point.ts#L8)*

___

###  x

• **x**: *number*

*Implementation of [IOnOffGlyphPoint](../interfaces/_point_interface_.ionoffglyphpoint.md).[x](../interfaces/_point_interface_.ionoffglyphpoint.md#readonly-x)*

*Defined in [point/on-off-glyph-point.ts:8](https://github.com/be5invis/typo-geom/blob/5527277/src/point/on-off-glyph-point.ts#L8)*

___

###  y

• **y**: *number*

*Implementation of [IOnOffGlyphPoint](../interfaces/_point_interface_.ionoffglyphpoint.md).[y](../interfaces/_point_interface_.ionoffglyphpoint.md#readonly-y)*

*Defined in [point/on-off-glyph-point.ts:8](https://github.com/be5invis/typo-geom/blob/5527277/src/point/on-off-glyph-point.ts#L8)*

## Methods

###  clone

▸ **clone**(): *[OnOffGlyphPoint](_point_on_off_glyph_point_.onoffglyphpoint.md)‹›*

*Defined in [point/on-off-glyph-point.ts:9](https://github.com/be5invis/typo-geom/blob/5527277/src/point/on-off-glyph-point.ts#L9)*

**Returns:** *[OnOffGlyphPoint](_point_on_off_glyph_point_.onoffglyphpoint.md)‹›*

___

### `Static` from

▸ **from**(`p`: [IOnOffGlyphPoint](../interfaces/_point_interface_.ionoffglyphpoint.md)): *[OnOffGlyphPoint](_point_on_off_glyph_point_.onoffglyphpoint.md)‹›*

*Defined in [point/on-off-glyph-point.ts:13](https://github.com/be5invis/typo-geom/blob/5527277/src/point/on-off-glyph-point.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [IOnOffGlyphPoint](../interfaces/_point_interface_.ionoffglyphpoint.md) |

**Returns:** *[OnOffGlyphPoint](_point_on_off_glyph_point_.onoffglyphpoint.md)‹›*

___

### `Static` fromPoint

▸ **fromPoint**(`p`: [IPoint](../modules/_point_interface_.md#ipoint), `on`: boolean, `cubic`: boolean): *[OnOffGlyphPoint](_point_on_off_glyph_point_.onoffglyphpoint.md)‹›*

*Defined in [point/on-off-glyph-point.ts:17](https://github.com/be5invis/typo-geom/blob/5527277/src/point/on-off-glyph-point.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`p` | [IPoint](../modules/_point_interface_.md#ipoint) | - |
`on` | boolean | true |
`cubic` | boolean | false |

**Returns:** *[OnOffGlyphPoint](_point_on_off_glyph_point_.onoffglyphpoint.md)‹›*
