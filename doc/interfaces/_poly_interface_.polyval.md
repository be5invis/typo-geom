[typo-geom](../README.md) > ["poly/interface"](../modules/_poly_interface_.md) > [PolyVal](../interfaces/_poly_interface_.polyval.md)

# Interface: PolyVal

## Hierarchy

**PolyVal**

## Index

### Properties

* [neutral](_poly_interface_.polyval.md#neutral)

### Methods

* [acceptMasterInfluence](_poly_interface_.polyval.md#acceptmasterinfluence)
* [addDelta](_poly_interface_.polyval.md#adddelta)
* [copyFrom](_poly_interface_.polyval.md#copyfrom)
* [fresh](_poly_interface_.polyval.md#fresh)
* [getDelta](_poly_interface_.polyval.md#getdelta)
* [setDelta](_poly_interface_.polyval.md#setdelta)
* [transformInstance](_poly_interface_.polyval.md#transforminstance)

---

## Properties

<a id="neutral"></a>

###  neutral

**● neutral**: *`number`*

*Defined in [poly/interface.ts:10](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/interface.ts#L10)*

___

## Methods

<a id="acceptmasterinfluence"></a>

###  acceptMasterInfluence

▸ **acceptMasterInfluence**(m: *[PolyMaster](_poly_interface_.polymaster.md)*): `boolean`

*Defined in [poly/interface.ts:15](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/interface.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [PolyMaster](_poly_interface_.polymaster.md) |

**Returns:** `boolean`

___
<a id="adddelta"></a>

###  addDelta

▸ **addDelta**(s: *`string`*, x: *`number`*): `void`

*Defined in [poly/interface.ts:13](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/interface.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |
| x | `number` |

**Returns:** `void`

___
<a id="copyfrom"></a>

###  copyFrom

▸ **copyFrom**(vv: *`this`*): `void`

*Defined in [poly/interface.ts:17](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/interface.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| vv | `this` |

**Returns:** `void`

___
<a id="fresh"></a>

###  fresh

▸ **fresh**(): `this`

*Defined in [poly/interface.ts:16](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/interface.ts#L16)*

**Returns:** `this`

___
<a id="getdelta"></a>

###  getDelta

▸ **getDelta**(s: *`string`*): `number`

*Defined in [poly/interface.ts:11](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/interface.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `number`

___
<a id="setdelta"></a>

###  setDelta

▸ **setDelta**(s: *`string`*, x: *`number`*): `void`

*Defined in [poly/interface.ts:12](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/interface.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |
| x | `number` |

**Returns:** `void`

___
<a id="transforminstance"></a>

###  transformInstance

▸ **transformInstance**(m: *[PolyInstance](../modules/_poly_interface_.md#polyinstance)*): [PolyInstance](../modules/_poly_interface_.md#polyinstance)

*Defined in [poly/interface.ts:14](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/interface.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| m | [PolyInstance](../modules/_poly_interface_.md#polyinstance) |

**Returns:** [PolyInstance](../modules/_poly_interface_.md#polyinstance)

___

