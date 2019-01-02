[typo-geom](../README.md) > ["poly/index"](../modules/_poly_index_.md) > [Polymorphizer](../classes/_poly_index_.polymorphizer.md)

# Class: Polymorphizer

## Hierarchy

**Polymorphizer**

## Index

### Properties

* [masters](_poly_index_.polymorphizer.md#masters)
* [solverCache](_poly_index_.polymorphizer.md#solvercache)

### Methods

* [clearMasters](_poly_index_.polymorphizer.md#clearmasters)
* [clone](_poly_index_.polymorphizer.md#clone)
* [computeAffinityDict](_poly_index_.polymorphizer.md#computeaffinitydict)
* [computeInfluenceDict2](_poly_index_.polymorphizer.md#computeinfluencedict2)
* [computeInfluenceDictImpl](_poly_index_.polymorphizer.md#computeinfluencedictimpl)
* [computeInfluences](_poly_index_.polymorphizer.md#computeinfluences)
* [deleteMaster](_poly_index_.polymorphizer.md#deletemaster)
* [eval](_poly_index_.polymorphizer.md#eval)
* [fitToNewMasterSet](_poly_index_.polymorphizer.md#fittonewmasterset)
* [getDeltaSolvers](_poly_index_.polymorphizer.md#getdeltasolvers)
* [getDeltaSolversImpl](_poly_index_.polymorphizer.md#getdeltasolversimpl)
* [getMask](_poly_index_.polymorphizer.md#getmask)
* [getMaster](_poly_index_.polymorphizer.md#getmaster)
* [reify](_poly_index_.polymorphizer.md#reify)
* [setAt](_poly_index_.polymorphizer.md#setat)
* [setMaster](_poly_index_.polymorphizer.md#setmaster)

---

## Properties

<a id="masters"></a>

### `<Private>` masters

**● masters**: *`Map`<`string`, [PolyMaster](../interfaces/_poly_interface_.polymaster.md)>* =  new Map()

*Defined in [poly/index.ts:59](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L59)*

___
<a id="solvercache"></a>

### `<Private>` solverCache

**● solverCache**: *`Map`<`string`, [WritableDict](../modules/_poly_index_.md#writabledict)<[WritableDict](../modules/_poly_index_.md#writabledict)<`number`>> | `null`>* =  new Map()

*Defined in [poly/index.ts:60](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L60)*

___

## Methods

<a id="clearmasters"></a>

###  clearMasters

▸ **clearMasters**(): `void`

*Defined in [poly/index.ts:73](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L73)*

**Returns:** `void`

___
<a id="clone"></a>

###  clone

▸ **clone**(): [Polymorphizer](_poly_index_.polymorphizer.md)

*Defined in [poly/index.ts:249](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L249)*

**Returns:** [Polymorphizer](_poly_index_.polymorphizer.md)

___
<a id="computeaffinitydict"></a>

### `<Private>` computeAffinityDict

▸ **computeAffinityDict**(instance: *[PolyInstance](../modules/_poly_interface_.md#polyinstance)*): `object`

*Defined in [poly/index.ts:138](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L138)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| instance | [PolyInstance](../modules/_poly_interface_.md#polyinstance) |

**Returns:** `object`

___
<a id="computeinfluencedict2"></a>

### `<Private>` computeInfluenceDict2

▸ **computeInfluenceDict2**(accept: *`function`*, instance: *[PolyInstance](../modules/_poly_interface_.md#polyinstance)*): `object`

*Defined in [poly/index.ts:225](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L225)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| accept | `function` |
| instance | [PolyInstance](../modules/_poly_interface_.md#polyinstance) |

**Returns:** `object`

___
<a id="computeinfluencedictimpl"></a>

### `<Private>` computeInfluenceDictImpl

▸ **computeInfluenceDictImpl**(accept: *`function`*, instance: *[PolyInstance](../modules/_poly_interface_.md#polyinstance)*): [Dict](../modules/_poly_index_.md#dict)<`number`>

*Defined in [poly/index.ts:193](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L193)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| accept | `function` |
| instance | [PolyInstance](../modules/_poly_interface_.md#polyinstance) |

**Returns:** [Dict](../modules/_poly_index_.md#dict)<`number`>

___
<a id="computeinfluences"></a>

###  computeInfluences

▸ **computeInfluences**(accept: *`function`*, instance: *[PolyInstance](../modules/_poly_interface_.md#polyinstance)*): [Dict](../modules/_poly_index_.md#dict)<`number`>

*Defined in [poly/index.ts:180](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L180)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| accept | `function` |
| instance | [PolyInstance](../modules/_poly_interface_.md#polyinstance) |

**Returns:** [Dict](../modules/_poly_index_.md#dict)<`number`>

___
<a id="deletemaster"></a>

###  deleteMaster

▸ **deleteMaster**(id: *`string`*): `void`

*Defined in [poly/index.ts:69](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L69)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `void`

___
<a id="eval"></a>

###  eval

▸ **eval**(v: *[PolyVal](../interfaces/_poly_interface_.polyval.md)*, instance: *[PolyInstance](../modules/_poly_interface_.md#polyinstance)*): `number`

*Defined in [poly/index.ts:132](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L132)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [PolyVal](../interfaces/_poly_interface_.polyval.md) |
| instance | [PolyInstance](../modules/_poly_interface_.md#polyinstance) |

**Returns:** `number`

___
<a id="fittonewmasterset"></a>

###  fitToNewMasterSet

▸ **fitToNewMasterSet**<`T`>(v: *`T`*, polyBefore: *[Polymorphizer](_poly_index_.polymorphizer.md)*): `T`

*Defined in [poly/index.ts:256](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L256)*

**Type parameters:**

#### T :  [PolyVal](../interfaces/_poly_interface_.polyval.md)
**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `T` |
| polyBefore | [Polymorphizer](_poly_index_.polymorphizer.md) |

**Returns:** `T`

___
<a id="getdeltasolvers"></a>

### `<Protected>` getDeltaSolvers

▸ **getDeltaSolvers**(mask: *`string`*, accept: *`function`*): `null` | `object`

*Defined in [poly/index.ts:118](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L118)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| mask | `string` |
| accept | `function` |

**Returns:** `null` | `object`

___
<a id="getdeltasolversimpl"></a>

### `<Protected>` getDeltaSolversImpl

▸ **getDeltaSolversImpl**(mask: *`string`*, accept: *`function`*): `null` | `object`

*Defined in [poly/index.ts:90](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L90)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| mask | `string` |
| accept | `function` |

**Returns:** `null` | `object`

___
<a id="getmask"></a>

### `<Protected>` getMask

▸ **getMask**(accept: *`function`*): `string`

*Defined in [poly/index.ts:78](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L78)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| accept | `function` |

**Returns:** `string`

___
<a id="getmaster"></a>

###  getMaster

▸ **getMaster**(id: *`string`*): `undefined` | [PolyMaster](../interfaces/_poly_interface_.polymaster.md)

*Defined in [poly/index.ts:62](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L62)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `undefined` | [PolyMaster](../interfaces/_poly_interface_.polymaster.md)

___
<a id="reify"></a>

### `<Private>` reify

▸ **reify**(): `void`

*Defined in [poly/index.ts:128](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L128)*

**Returns:** `void`

___
<a id="setat"></a>

###  setAt

▸ **setAt**(v: *[PolyVal](../interfaces/_poly_interface_.polyval.md)*, _instance: *[PolyInstance](../modules/_poly_interface_.md#polyinstance)*, x: *`number`*): `void`

*Defined in [poly/index.ts:230](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L230)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [PolyVal](../interfaces/_poly_interface_.polyval.md) |
| _instance | [PolyInstance](../modules/_poly_interface_.md#polyinstance) |
| x | `number` |

**Returns:** `void`

___
<a id="setmaster"></a>

###  setMaster

▸ **setMaster**(id: *`string`*, m: *[PolyMaster](../interfaces/_poly_interface_.polymaster.md)*): `void`

*Defined in [poly/index.ts:65](https://github.com/be5invis/typo-geom/blob/d307ff5/src/poly/index.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| m | [PolyMaster](../interfaces/_poly_interface_.polymaster.md) |

**Returns:** `void`

___

