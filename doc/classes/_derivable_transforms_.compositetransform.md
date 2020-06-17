[typo-geom](../README.md) › [Globals](../globals.md) › ["derivable/transforms"](../modules/_derivable_transforms_.md) › [CompositeTransform](_derivable_transforms_.compositetransform.md)

# Class: CompositeTransform

## Hierarchy

* **CompositeTransform**

## Implements

* [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)

## Index

### Constructors

* [constructor](_derivable_transforms_.compositetransform.md#private-constructor)

### Properties

* [a](_derivable_transforms_.compositetransform.md#private-a)
* [b](_derivable_transforms_.compositetransform.md#private-b)

### Methods

* [dxx](_derivable_transforms_.compositetransform.md#dxx)
* [dxy](_derivable_transforms_.compositetransform.md#dxy)
* [dyx](_derivable_transforms_.compositetransform.md#dyx)
* [dyy](_derivable_transforms_.compositetransform.md#dyy)
* [x](_derivable_transforms_.compositetransform.md#x)
* [y](_derivable_transforms_.compositetransform.md#y)
* [from](_derivable_transforms_.compositetransform.md#static-from)

## Constructors

### `Private` constructor

\+ **new CompositeTransform**(`a`: [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md), `b`: [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)): *[CompositeTransform](_derivable_transforms_.compositetransform.md)*

*Defined in [derivable/transforms.ts:57](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/transforms.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |
`b` | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |

**Returns:** *[CompositeTransform](_derivable_transforms_.compositetransform.md)*

## Properties

### `Private` a

• **a**: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/transforms.ts:58](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/transforms.ts#L58)*

___

### `Private` b

• **b**: *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/transforms.ts:58](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/transforms.ts#L58)*

## Methods

###  dxx

▸ **dxx**(`x`: number, `y`: number): *number*

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/transforms.ts:69](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/transforms.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *number*

___

###  dxy

▸ **dxy**(`x`: number, `y`: number): *number*

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/transforms.ts:74](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/transforms.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *number*

___

###  dyx

▸ **dyx**(`x`: number, `y`: number): *number*

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/transforms.ts:79](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/transforms.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *number*

___

###  dyy

▸ **dyy**(`x`: number, `y`: number): *number*

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/transforms.ts:84](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/transforms.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *number*

___

###  x

▸ **x**(`x`: number, `y`: number): *number*

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/transforms.ts:59](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/transforms.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *number*

___

###  y

▸ **y**(`x`: number, `y`: number): *number*

*Implementation of [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/transforms.ts:64](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/transforms.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *number*

___

### `Static` from

▸ **from**(`a`: [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md), `b`: [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)): *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*

*Defined in [derivable/transforms.ts:90](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/transforms.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |
`b` | [ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md) |

**Returns:** *[ShapeTransform](../interfaces/_derivable_interface_.shapetransform.md)*
