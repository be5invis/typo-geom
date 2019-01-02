[typo-geom](../README.md) > ["derivable/transforms"](../modules/_derivable_transforms_.md) > [LinearTransform](../classes/_derivable_transforms_.lineartransform.md)

# Class: LinearTransform

## Hierarchy

**LinearTransform**

## Implements

* [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)

## Index

### Constructors

* [constructor](_derivable_transforms_.lineartransform.md#constructor)

### Properties

* [tx](_derivable_transforms_.lineartransform.md#tx)
* [ty](_derivable_transforms_.lineartransform.md#ty)
* [xx](_derivable_transforms_.lineartransform.md#xx)
* [xy](_derivable_transforms_.lineartransform.md#xy)
* [yx](_derivable_transforms_.lineartransform.md#yx)
* [yy](_derivable_transforms_.lineartransform.md#yy)
* [neutral](_derivable_transforms_.lineartransform.md#neutral)

### Methods

* [dxx](_derivable_transforms_.lineartransform.md#dxx)
* [dxy](_derivable_transforms_.lineartransform.md#dxy)
* [dyx](_derivable_transforms_.lineartransform.md#dyx)
* [dyy](_derivable_transforms_.lineartransform.md#dyy)
* [inverse](_derivable_transforms_.lineartransform.md#inverse)
* [x](_derivable_transforms_.lineartransform.md#x)
* [y](_derivable_transforms_.lineartransform.md#y)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new LinearTransform**(xx: *`number`*, xy: *`number`*, yx: *`number`*, yy: *`number`*, x: *`number`*, y: *`number`*): [LinearTransform](_derivable_transforms_.lineartransform.md)

*Defined in [derivable/transforms.ts:13](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| xx | `number` |
| xy | `number` |
| yx | `number` |
| yy | `number` |
| x | `number` |
| y | `number` |

**Returns:** [LinearTransform](_derivable_transforms_.lineartransform.md)

___

## Properties

<a id="tx"></a>

###  tx

**● tx**: *`number`*

*Defined in [derivable/transforms.ts:12](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L12)*

___
<a id="ty"></a>

###  ty

**● ty**: *`number`*

*Defined in [derivable/transforms.ts:13](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L13)*

___
<a id="xx"></a>

###  xx

**● xx**: *`number`*

*Defined in [derivable/transforms.ts:8](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L8)*

___
<a id="xy"></a>

###  xy

**● xy**: *`number`*

*Defined in [derivable/transforms.ts:10](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L10)*

___
<a id="yx"></a>

###  yx

**● yx**: *`number`*

*Defined in [derivable/transforms.ts:9](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L9)*

___
<a id="yy"></a>

###  yy

**● yy**: *`number`*

*Defined in [derivable/transforms.ts:11](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L11)*

___
<a id="neutral"></a>

### `<Static>` neutral

**● neutral**: *[LinearTransform](_derivable_transforms_.lineartransform.md)* =  new LinearTransform(1, 0, 0, 1, 0, 0)

*Defined in [derivable/transforms.ts:54](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L54)*

___

## Methods

<a id="dxx"></a>

###  dxx

▸ **dxx**(x: *`number`*, y: *`number`*): `number`

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md).[dxx](../interfaces/_derivable_interface_.shapetransform.md#dxx)*

*Defined in [derivable/transforms.ts:29](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `number`

___
<a id="dxy"></a>

###  dxy

▸ **dxy**(x: *`number`*, y: *`number`*): `number`

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md).[dxy](../interfaces/_derivable_interface_.shapetransform.md#dxy)*

*Defined in [derivable/transforms.ts:32](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `number`

___
<a id="dyx"></a>

###  dyx

▸ **dyx**(x: *`number`*, y: *`number`*): `number`

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md).[dyx](../interfaces/_derivable_interface_.shapetransform.md#dyx)*

*Defined in [derivable/transforms.ts:35](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `number`

___
<a id="dyy"></a>

###  dyy

▸ **dyy**(x: *`number`*, y: *`number`*): `number`

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md).[dyy](../interfaces/_derivable_interface_.shapetransform.md#dyy)*

*Defined in [derivable/transforms.ts:38](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `number`

___
<a id="inverse"></a>

###  inverse

▸ **inverse**(): [LinearTransform](_derivable_transforms_.lineartransform.md)

*Defined in [derivable/transforms.ts:42](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L42)*

**Returns:** [LinearTransform](_derivable_transforms_.lineartransform.md)

___
<a id="x"></a>

###  x

▸ **x**(x: *`number`*, y: *`number`*): `number`

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md).[x](../interfaces/_derivable_interface_.shapetransform.md#x)*

*Defined in [derivable/transforms.ts:23](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `number`

___
<a id="y"></a>

###  y

▸ **y**(x: *`number`*, y: *`number`*): `number`

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md).[y](../interfaces/_derivable_interface_.shapetransform.md#y)*

*Defined in [derivable/transforms.ts:26](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `number`

___

