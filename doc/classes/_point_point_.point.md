[typo-geom](../README.md) › [Globals](../globals.md) › ["point/point"](../modules/_point_point_.md) › [Point](_point_point_.point.md)

# Class: Point

## Hierarchy

* **Point**

## Implements

* [XY](../interfaces/_point_interface_.xy.md)

## Index

### Constructors

* [constructor](_point_point_.point.md#constructor)

### Properties

* [x](_point_point_.point.md#x)
* [y](_point_point_.point.md#y)

### Methods

* [add](_point_point_.point.md#add)
* [addScale](_point_point_.point.md#addscale)
* [angle](_point_point_.point.md#angle)
* [clone](_point_point_.point.md#clone)
* [dot](_point_point_.point.md#dot)
* [isClose](_point_point_.point.md#isclose)
* [mag](_point_point_.point.md#mag)
* [minus](_point_point_.point.md#minus)
* [mix](_point_point_.point.md#mix)
* [rotate90](_point_point_.point.md#rotate90)
* [scale](_point_point_.point.md#scale)
* [scaleAround](_point_point_.point.md#scalearound)
* [scaleAroundXY](_point_point_.point.md#scalearoundxy)
* [scaleXY](_point_point_.point.md#scalexy)
* [toLength](_point_point_.point.md#tolength)
* [cosAngle](_point_point_.point.md#static-cosangle)
* [cross](_point_point_.point.md#static-cross)
* [dist](_point_point_.point.md#static-dist)
* [dot](_point_point_.point.md#static-dot)
* [from](_point_point_.point.md#static-from)
* [intersect](_point_point_.point.md#static-intersect)
* [mixRange](_point_point_.point.md#static-mixrange)
* [pointLineDist](_point_point_.point.md#static-pointlinedist)
* [project](_point_point_.point.md#static-project)
* [rayIntersection](_point_point_.point.md#static-rayintersection)
* [scalarProject](_point_point_.point.md#static-scalarproject)
* [signedPointLineDist](_point_point_.point.md#static-signedpointlinedist)
* [squareDist](_point_point_.point.md#static-squaredist)

## Constructors

###  constructor

\+ **new Point**(`x`: number, `y`: number): *[Point](_point_point_.point.md)*

*Defined in [point/point.ts:10](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L10)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`x` | number | 0 |
`y` | number | 0 |

**Returns:** *[Point](_point_point_.point.md)*

## Properties

###  x

• **x**: *number*

*Implementation of [XY](../interfaces/_point_interface_.xy.md).[x](../interfaces/_point_interface_.xy.md#readonly-x)*

*Defined in [point/point.ts:9](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L9)*

___

###  y

• **y**: *number*

*Implementation of [XY](../interfaces/_point_interface_.xy.md).[y](../interfaces/_point_interface_.xy.md#readonly-y)*

*Defined in [point/point.ts:10](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L10)*

## Methods

###  add

▸ **add**(`b`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:25](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  addScale

▸ **addScale**(`s`: number, `b`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:28](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | number |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  angle

▸ **angle**(): *number*

*Defined in [point/point.ts:34](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L34)*

**Returns:** *number*

___

###  clone

▸ **clone**(): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:16](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L16)*

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  dot

▸ **dot**(`z`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:19](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`z` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

###  isClose

▸ **isClose**(`b`: [IPoint](../modules/_point_interface_.md#ipoint), `tolerance`: number): *boolean*

*Defined in [point/point.ts:59](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`tolerance` | number |

**Returns:** *boolean*

___

###  mag

▸ **mag**(): *number*

*Defined in [point/point.ts:37](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L37)*

**Returns:** *number*

___

###  minus

▸ **minus**(`b`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:31](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  mix

▸ **mix**(`b`: [IPoint](../modules/_point_interface_.md#ipoint), `t`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:22](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  rotate90

▸ **rotate90**(): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:56](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L56)*

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  scale

▸ **scale**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:40](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  scaleAround

▸ **scaleAround**(`z`: [Point](_point_point_.point.md), `t`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:46](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`z` | [Point](_point_point_.point.md) |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  scaleAroundXY

▸ **scaleAroundXY**(`z`: [Point](_point_point_.point.md), `tx`: number, `ty`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:49](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`z` | [Point](_point_point_.point.md) |
`tx` | number |
`ty` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  scaleXY

▸ **scaleXY**(`tx`: number, `ty`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:43](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`tx` | number |
`ty` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  toLength

▸ **toLength**(`d`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:52](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

### `Static` cosAngle

▸ **cosAngle**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `p`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:126](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`p` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

### `Static` cross

▸ **cross**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:146](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

### `Static` dist

▸ **dist**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:134](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

### `Static` dot

▸ **dot**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:143](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L143)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

### `Static` from

▸ **from**(`p`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:152](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

### `Static` intersect

▸ **intersect**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `c`: [IPoint](../modules/_point_interface_.md#ipoint), `d`: [IPoint](../modules/_point_interface_.md#ipoint), `fInfinite`: boolean): *null | [Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:62](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L62)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) | - |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) | - |
`c` | [IPoint](../modules/_point_interface_.md#ipoint) | - |
`d` | [IPoint](../modules/_point_interface_.md#ipoint) | - |
`fInfinite` | boolean | false |

**Returns:** *null | [Point](_point_point_.point.md)‹›*

___

### `Static` mixRange

▸ **mixRange**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `c`: [IPoint](../modules/_point_interface_.md#ipoint), `d`: [IPoint](../modules/_point_interface_.md#ipoint), `t`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:149](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`c` | [IPoint](../modules/_point_interface_.md#ipoint) |
`d` | [IPoint](../modules/_point_interface_.md#ipoint) |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

### `Static` pointLineDist

▸ **pointLineDist**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `p`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:140](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`p` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

### `Static` project

▸ **project**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `p`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:115](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`p` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

### `Static` rayIntersection

▸ **rayIntersection**(`p1`: [IPoint](../modules/_point_interface_.md#ipoint), `_d1`: [IPoint](../modules/_point_interface_.md#ipoint), `_d2`: [IPoint](../modules/_point_interface_.md#ipoint), `p2`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Point](_point_point_.point.md) | null*

*Defined in [point/point.ts:90](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`p1` | [IPoint](../modules/_point_interface_.md#ipoint) |
`_d1` | [IPoint](../modules/_point_interface_.md#ipoint) |
`_d2` | [IPoint](../modules/_point_interface_.md#ipoint) |
`p2` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Point](_point_point_.point.md) | null*

___

### `Static` scalarProject

▸ **scalarProject**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `p`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:119](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`p` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

### `Static` signedPointLineDist

▸ **signedPointLineDist**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `p`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:137](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L137)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`p` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

### `Static` squareDist

▸ **squareDist**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:131](https://github.com/be5invis/typo-geom/blob/5527277/src/point/point.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*
