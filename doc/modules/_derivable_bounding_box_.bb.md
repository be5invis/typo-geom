[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/bounding-box"](_derivable_bounding_box_.md) › [BB](_derivable_bounding_box_.bb.md)

# Namespace: BB

## Index

### Variables

* [NE](_derivable_bounding_box_.bb.md#const-ne)

### Functions

* [coverBox](_derivable_bounding_box_.bb.md#coverbox)
* [coverPoint](_derivable_bounding_box_.bb.md#coverpoint)
* [coverX](_derivable_bounding_box_.bb.md#coverx)
* [coverY](_derivable_bounding_box_.bb.md#covery)
* [empty](_derivable_bounding_box_.bb.md#empty)
* [intersects](_derivable_bounding_box_.bb.md#intersects)
* [isValid](_derivable_bounding_box_.bb.md#isvalid)

## Variables

### `Const` NE

• **NE**: *1048576* = 1048576

*Defined in [derivable/bounding-box.ts:5](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/bounding-box.ts#L5)*

## Functions

###  coverBox

▸ **coverBox**(`b`: [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md), `t`: [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md)): *void*

*Defined in [derivable/bounding-box.ts:36](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/bounding-box.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md) |
`t` | [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md) |

**Returns:** *void*

___

###  coverPoint

▸ **coverPoint**(`b`: [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md), `z`: [IPoint](_point_interface_.md#ipoint)): *void*

*Defined in [derivable/bounding-box.ts:14](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/bounding-box.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md) |
`z` | [IPoint](_point_interface_.md#ipoint) |

**Returns:** *void*

___

###  coverX

▸ **coverX**(`b`: [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md), `x`: number): *void*

*Defined in [derivable/bounding-box.ts:17](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/bounding-box.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md) |
`x` | number |

**Returns:** *void*

___

###  coverY

▸ **coverY**(`b`: [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md), `y`: number): *void*

*Defined in [derivable/bounding-box.ts:26](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/bounding-box.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md) |
`y` | number |

**Returns:** *void*

___

###  empty

▸ **empty**(): *object*

*Defined in [derivable/bounding-box.ts:6](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/bounding-box.ts#L6)*

**Returns:** *object*

* **xMax**: *number* = -NE

* **xMin**: *number* = NE

* **yMax**: *number* = -NE

* **yMin**: *number* = NE

___

###  intersects

▸ **intersects**(`a`: [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md), `b`: [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md)): *boolean*

*Defined in [derivable/bounding-box.ts:45](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/bounding-box.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md) |
`b` | [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md) |

**Returns:** *boolean*

___

###  isValid

▸ **isValid**(`b`: [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md)): *boolean*

*Defined in [derivable/bounding-box.ts:10](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/bounding-box.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md) |

**Returns:** *boolean*
