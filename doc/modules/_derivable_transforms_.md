[typo-geom](../README.md) > ["derivable/transforms"](../modules/_derivable_transforms_.md)

# External module: "derivable/transforms"

## Index

### Classes

* [CompositeTransform](../classes/_derivable_transforms_.compositetransform.md)
* [LinearTransform](../classes/_derivable_transforms_.lineartransform.md)

### Functions

* [transformBoundingBox](_derivable_transforms_.md#transformboundingbox)
* [transformPoint](_derivable_transforms_.md#transformpoint)
* [transformPointXY](_derivable_transforms_.md#transformpointxy)
* [transformShape](_derivable_transforms_.md#transformshape)

---

## Functions

<a id="transformboundingbox"></a>

###  transformBoundingBox

▸ **transformBoundingBox**(tfm: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*, b: *[BoundingBox](../interfaces/_derivable_interface_.boundingbox.md)*): `object`

*Defined in [derivable/transforms.ts:118](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L118)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tfm | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |
| b | [BoundingBox](../interfaces/_derivable_interface_.boundingbox.md) |

**Returns:** `object`

___
<a id="transformpoint"></a>

###  transformPoint

▸ **transformPoint**(t: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*, z: *[IPoint](_point_interface_.md#ipoint)*): [Point](../classes/_point_point_.point.md)

*Defined in [derivable/transforms.ts:97](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L97)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |
| z | [IPoint](_point_interface_.md#ipoint) |

**Returns:** [Point](../classes/_point_point_.point.md)

___
<a id="transformpointxy"></a>

###  transformPointXY

▸ **transformPointXY**(t: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*, x: *`number`*, y: *`number`*): [Point](../classes/_point_point_.point.md)

*Defined in [derivable/transforms.ts:101](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L101)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |
| x | `number` |
| y | `number` |

**Returns:** [Point](../classes/_point_point_.point.md)

___
<a id="transformshape"></a>

###  transformShape

▸ **transformShape**(sh: *[Shape](_derivable_interface_.md#shape)*, tfm: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*): [Derivable](../interfaces/_derivable_interface_.derivable.md)<[XY](../interfaces/_point_interface_.xy.md)<`number`>>[][]

*Defined in [derivable/transforms.ts:105](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L105)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sh | [Shape](_derivable_interface_.md#shape) |
| tfm | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |

**Returns:** [Derivable](../interfaces/_derivable_interface_.derivable.md)<[XY](../interfaces/_point_interface_.xy.md)<`number`>>[][]

___

