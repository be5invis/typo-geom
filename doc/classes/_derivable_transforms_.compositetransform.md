[typo-geom](../README.md) > ["derivable/transforms"](../modules/_derivable_transforms_.md) > [CompositeTransform](../classes/_derivable_transforms_.compositetransform.md)

# Class: CompositeTransform

## Hierarchy

**CompositeTransform**

## Implements

* [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)

## Index

### Constructors

* [constructor](_derivable_transforms_.compositetransform.md#constructor)

### Properties

* [a](_derivable_transforms_.compositetransform.md#a)
* [b](_derivable_transforms_.compositetransform.md#b)

### Methods

* [dxx](_derivable_transforms_.compositetransform.md#dxx)
* [dxy](_derivable_transforms_.compositetransform.md#dxy)
* [dyx](_derivable_transforms_.compositetransform.md#dyx)
* [dyy](_derivable_transforms_.compositetransform.md#dyy)
* [x](_derivable_transforms_.compositetransform.md#x)
* [y](_derivable_transforms_.compositetransform.md#y)
* [from](_derivable_transforms_.compositetransform.md#from)

---

## Constructors

<a id="constructor"></a>

### `<Private>` constructor

⊕ **new CompositeTransform**(a: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*, b: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*): [CompositeTransform](_derivable_transforms_.compositetransform.md)

*Defined in [derivable/transforms.ts:57](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L57)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |
| b | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |

**Returns:** [CompositeTransform](_derivable_transforms_.compositetransform.md)

___

## Properties

<a id="a"></a>

### `<Private>` a

**● a**: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/transforms.ts:58](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L58)*

___
<a id="b"></a>

### `<Private>` b

**● b**: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/transforms.ts:58](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L58)*

___

## Methods

<a id="dxx"></a>

###  dxx

▸ **dxx**(x: *`number`*, y: *`number`*): `number`

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md).[dxx](../interfaces/_derivable_interface_.shapetransform.md#dxx)*

*Defined in [derivable/transforms.ts:69](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L69)*

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

*Defined in [derivable/transforms.ts:74](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L74)*

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

*Defined in [derivable/transforms.ts:79](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L79)*

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

*Defined in [derivable/transforms.ts:84](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L84)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `number`

___
<a id="x"></a>

###  x

▸ **x**(x: *`number`*, y: *`number`*): `number`

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md).[x](../interfaces/_derivable_interface_.shapetransform.md#x)*

*Defined in [derivable/transforms.ts:59](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L59)*

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

*Defined in [derivable/transforms.ts:64](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L64)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `number`

___
<a id="from"></a>

### `<Static>` from

▸ **from**(a: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*, b: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*): [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)

*Defined in [derivable/transforms.ts:90](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/transforms.ts#L90)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |
| b | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |

**Returns:** [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)

___

