[typo-geom](../README.md) > ["quadify/index"](../modules/_quadify_index_.md) > [Quadify](../modules/_quadify_index_.quadify.md)

# Module: Quadify

## Index

### Variables

* [exact](_quadify_index_.quadify.md#exact)

### Functions

* [auto](_quadify_index_.quadify.md#auto)

---

## Variables

<a id="exact"></a>

### `<Const>` exact

**● exact**: *[quadifyCurve](_quadify_functional_.md#quadifycurve)* =  quadifyCurve

*Defined in [quadify/index.ts:13](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/index.ts#L13)*

___

## Functions

<a id="auto"></a>

###  auto

▸ **auto**(c: *[Curve](_derivable_interface_.md#curve)*, allowError?: *`number`*, maxSegments?: *`number`*, maxDistanceTestPoints?: *`number`*): `null` | [XY](../interfaces/_point_interface_.xy.md)<`number`>[]

*Defined in [quadify/index.ts:5](https://github.com/be5invis/typo-geom/blob/d307ff5/src/quadify/index.ts#L5)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| c | [Curve](_derivable_interface_.md#curve) | - |
| `Default value` allowError | `number` | 0.1 |
| `Default value` maxSegments | `number` | 32 |
| `Default value` maxDistanceTestPoints | `number` | 128 |

**Returns:** `null` | [XY](../interfaces/_point_interface_.xy.md)<`number`>[]

___

