[typo-geom](../README.md) › [Globals](../globals.md) › ["fn/solver"](../modules/_fn_solver_.md) › [ClampedRootSink](_fn_solver_.clampedrootsink.md)

# Class: ClampedRootSink

## Hierarchy

* **ClampedRootSink**

## Implements

* [IRootSink](../interfaces/_fn_solver_.irootsink.md)

## Index

### Constructors

* [constructor](_fn_solver_.clampedrootsink.md#constructor)

### Properties

* [fInclusive](_fn_solver_.clampedrootsink.md#private-readonly-finclusive)
* [max](_fn_solver_.clampedrootsink.md#private-readonly-max)
* [min](_fn_solver_.clampedrootsink.md#private-readonly-min)
* [rootCount](_fn_solver_.clampedrootsink.md#rootcount)
* [roots](_fn_solver_.clampedrootsink.md#readonly-roots)

### Methods

* [addRoot](_fn_solver_.clampedrootsink.md#addroot)
* [degenerated](_fn_solver_.clampedrootsink.md#degenerated)

## Constructors

###  constructor

\+ **new ClampedRootSink**(`min`: number, `max`: number, `fInclusive`: boolean): *[ClampedRootSink](_fn_solver_.clampedrootsink.md)*

*Defined in [fn/solver.ts:228](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |
`fInclusive` | boolean |

**Returns:** *[ClampedRootSink](_fn_solver_.clampedrootsink.md)*

## Properties

### `Private` `Readonly` fInclusive

• **fInclusive**: *boolean*

*Defined in [fn/solver.ts:232](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L232)*

___

### `Private` `Readonly` max

• **max**: *number*

*Defined in [fn/solver.ts:231](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L231)*

___

### `Private` `Readonly` min

• **min**: *number*

*Defined in [fn/solver.ts:230](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L230)*

___

###  rootCount

• **rootCount**: *number* = 0

*Defined in [fn/solver.ts:235](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L235)*

___

### `Readonly` roots

• **roots**: *number[]* = []

*Defined in [fn/solver.ts:234](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L234)*

## Methods

###  addRoot

▸ **addRoot**(`x`: number): *boolean*

*Implementation of [IRootSink](../interfaces/_fn_solver_.irootsink.md)*

*Defined in [fn/solver.ts:236](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L236)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *boolean*

___

###  degenerated

▸ **degenerated**(): *void*

*Implementation of [IRootSink](../interfaces/_fn_solver_.irootsink.md)*

*Defined in [fn/solver.ts:250](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/fn/solver.ts#L250)*

**Returns:** *void*
