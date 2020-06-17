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
* [project](_point_point_.point.md#static-project)
* [rayIntersection](_point_point_.point.md#static-rayintersection)
* [scalarProject](_point_point_.point.md#static-scalarproject)
* [signedDist](_point_point_.point.md#static-signeddist)

## Constructors

###  constructor

\+ **new Point**(`x`: number, `y`: number): *[Point](_point_point_.point.md)*

*Defined in [point/point.ts:6](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L6)*

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

*Defined in [point/point.ts:5](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L5)*

___

###  y

• **y**: *number*

*Implementation of [XY](../interfaces/_point_interface_.xy.md).[y](../interfaces/_point_interface_.xy.md#readonly-y)*

*Defined in [point/point.ts:6](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L6)*

## Methods

###  add

▸ **add**(`b`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:21](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  addScale

▸ **addScale**(`s`: number, `b`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:24](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | number |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  angle

▸ **angle**(): *number*

*Defined in [point/point.ts:30](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L30)*

**Returns:** *number*

___

###  clone

▸ **clone**(): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:12](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L12)*

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  dot

▸ **dot**(`z`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:15](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`z` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

###  isClose

▸ **isClose**(`b`: [IPoint](../modules/_point_interface_.md#ipoint), `tolerance`: number): *boolean*

*Defined in [point/point.ts:55](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`tolerance` | number |

**Returns:** *boolean*

___

###  mag

▸ **mag**(): *number*

*Defined in [point/point.ts:33](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L33)*

**Returns:** *number*

___

###  minus

▸ **minus**(`b`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:27](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  mix

▸ **mix**(`b`: [IPoint](../modules/_point_interface_.md#ipoint), `t`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:18](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  rotate90

▸ **rotate90**(): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:52](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L52)*

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  scale

▸ **scale**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:36](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  scaleAround

▸ **scaleAround**(`z`: [Point](_point_point_.point.md), `t`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:42](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`z` | [Point](_point_point_.point.md) |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  scaleAroundXY

▸ **scaleAroundXY**(`z`: [Point](_point_point_.point.md), `tx`: number, `ty`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:45](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L45)*

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

*Defined in [point/point.ts:39](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`tx` | number |
`ty` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  toLength

▸ **toLength**(`d`: number): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:48](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`d` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

### `Static` cosAngle

▸ **cosAngle**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `p`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:122](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L122)*

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

*Defined in [point/point.ts:136](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

### `Static` dist

▸ **dist**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `p`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:130](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L130)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`p` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

### `Static` dot

▸ **dot**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:133](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

### `Static` from

▸ **from**(`p`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:142](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L142)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

### `Static` intersect

▸ **intersect**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `c`: [IPoint](../modules/_point_interface_.md#ipoint), `d`: [IPoint](../modules/_point_interface_.md#ipoint), `fInfinite`: boolean): *null | [Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:58](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L58)*

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

*Defined in [point/point.ts:139](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L139)*

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

### `Static` project

▸ **project**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `p`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Point](_point_point_.point.md)‹›*

*Defined in [point/point.ts:111](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L111)*

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

*Defined in [point/point.ts:86](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L86)*

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

*Defined in [point/point.ts:115](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`p` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*

___

### `Static` signedDist

▸ **signedDist**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `p`: [IPoint](../modules/_point_interface_.md#ipoint)): *number*

*Defined in [point/point.ts:127](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/point/point.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`p` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number*
