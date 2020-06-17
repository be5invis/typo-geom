[typo-geom](../README.md) › [Globals](../globals.md) › ["quadify/index"](_quadify_index_.md) › [Quadify](_quadify_index_.quadify.md)

# Namespace: Quadify

## Index

### Variables

* [exact](_quadify_index_.quadify.md#const-exact)

### Functions

* [auto](_quadify_index_.quadify.md#auto)

## Variables

### `Const` exact

• **exact**: *[quadifyCurve](_quadify_functional_.md#quadifycurve)* = quadifyCurve

*Defined in [quadify/index.ts:13](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/quadify/index.ts#L13)*

## Functions

###  auto

▸ **auto**(`c`: [Arc](_derivable_interface_.md#arc), `allowError`: number, `maxSegments`: number, `maxDistanceTestPoints`: number): *null | [XY](../interfaces/_point_interface_.xy.md)‹number›[]*

*Defined in [quadify/index.ts:5](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/quadify/index.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`c` | [Arc](_derivable_interface_.md#arc) | - |
`allowError` | number | 0.1 |
`maxSegments` | number | 32 |
`maxDistanceTestPoints` | number | 128 |

**Returns:** *null | [XY](../interfaces/_point_interface_.xy.md)‹number›[]*
