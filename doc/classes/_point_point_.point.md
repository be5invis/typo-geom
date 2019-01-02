[typo-geom](../README.md) > ["point/point"](../modules/_point_point_.md) > [Point](../classes/_point_point_.point.md)

# Class: Point

## Hierarchy

**Point**

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
* [angle](_point_point_.point.md#angle)
* [clone](_point_point_.point.md#clone)
* [dot](_point_point_.point.md#dot)
* [mag](_point_point_.point.md#mag)
* [minus](_point_point_.point.md#minus)
* [mix](_point_point_.point.md#mix)
* [rotate90](_point_point_.point.md#rotate90)
* [scale](_point_point_.point.md#scale)
* [scaleAround](_point_point_.point.md#scalearound)
* [scaleAroundXY](_point_point_.point.md#scalearoundxy)
* [scaleXY](_point_point_.point.md#scalexy)
* [toLength](_point_point_.point.md#tolength)
* [cosAngle](_point_point_.point.md#cosangle)
* [cross](_point_point_.point.md#cross)
* [dist](_point_point_.point.md#dist)
* [dot](_point_point_.point.md#dot-1)
* [from](_point_point_.point.md#from)
* [intersection](_point_point_.point.md#intersection)
* [mixRange](_point_point_.point.md#mixrange)
* [project](_point_point_.point.md#project)
* [projectSignedDist](_point_point_.point.md#projectsigneddist)
* [projectSignedProp](_point_point_.point.md#projectsignedprop)
* [rayIntersection](_point_point_.point.md#rayintersection)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Point**(x?: *`number`*, y?: *`number`*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:5](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L5)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` x | `number` | 0 |
| `Default value` y | `number` | 0 |

**Returns:** [Point](_point_point_.point.md)

___

## Properties

<a id="x"></a>

###  x

**● x**: *`number`*

*Implementation of [XY](../interfaces/_point_interface_.xy.md).[x](../interfaces/_point_interface_.xy.md#x)*

*Defined in [point/point.ts:4](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L4)*

___
<a id="y"></a>

###  y

**● y**: *`number`*

*Implementation of [XY](../interfaces/_point_interface_.xy.md).[y](../interfaces/_point_interface_.xy.md#y)*

*Defined in [point/point.ts:5](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L5)*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(b: *[IPoint](../modules/_point_interface_.md#ipoint)*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:20](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** [Point](_point_point_.point.md)

___
<a id="angle"></a>

###  angle

▸ **angle**(): `number`

*Defined in [point/point.ts:26](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L26)*

**Returns:** `number`

___
<a id="clone"></a>

###  clone

▸ **clone**(): [Point](_point_point_.point.md)

*Defined in [point/point.ts:11](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L11)*

**Returns:** [Point](_point_point_.point.md)

___
<a id="dot"></a>

###  dot

▸ **dot**(z: *[IPoint](../modules/_point_interface_.md#ipoint)*): `number`

*Defined in [point/point.ts:14](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L14)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| z | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** `number`

___
<a id="mag"></a>

###  mag

▸ **mag**(): `number`

*Defined in [point/point.ts:29](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L29)*

**Returns:** `number`

___
<a id="minus"></a>

###  minus

▸ **minus**(b: *[IPoint](../modules/_point_interface_.md#ipoint)*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:23](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L23)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** [Point](_point_point_.point.md)

___
<a id="mix"></a>

###  mix

▸ **mix**(b: *[IPoint](../modules/_point_interface_.md#ipoint)*, t: *`number`*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:17](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___
<a id="rotate90"></a>

###  rotate90

▸ **rotate90**(): [Point](_point_point_.point.md)

*Defined in [point/point.ts:52](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L52)*

**Returns:** [Point](_point_point_.point.md)

___
<a id="scale"></a>

###  scale

▸ **scale**(t: *`number`*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:32](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___
<a id="scalearound"></a>

###  scaleAround

▸ **scaleAround**(z: *[Point](_point_point_.point.md)*, t: *`number`*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:38](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| z | [Point](_point_point_.point.md) |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___
<a id="scalearoundxy"></a>

###  scaleAroundXY

▸ **scaleAroundXY**(z: *[Point](_point_point_.point.md)*, tx: *`number`*, ty: *`number`*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:43](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L43)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| z | [Point](_point_point_.point.md) |
| tx | `number` |
| ty | `number` |

**Returns:** [Point](_point_point_.point.md)

___
<a id="scalexy"></a>

###  scaleXY

▸ **scaleXY**(tx: *`number`*, ty: *`number`*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:35](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| tx | `number` |
| ty | `number` |

**Returns:** [Point](_point_point_.point.md)

___
<a id="tolength"></a>

###  toLength

▸ **toLength**(d: *`number`*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:48](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L48)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| d | `number` |

**Returns:** [Point](_point_point_.point.md)

___
<a id="cosangle"></a>

### `<Static>` cosAngle

▸ **cosAngle**(a: *[IPoint](../modules/_point_interface_.md#ipoint)*, b: *[IPoint](../modules/_point_interface_.md#ipoint)*, p: *[IPoint](../modules/_point_interface_.md#ipoint)*): `number`

*Defined in [point/point.ts:111](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L111)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [IPoint](../modules/_point_interface_.md#ipoint) |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |
| p | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** `number`

___
<a id="cross"></a>

### `<Static>` cross

▸ **cross**(a: *[IPoint](../modules/_point_interface_.md#ipoint)*, b: *[IPoint](../modules/_point_interface_.md#ipoint)*): `number`

*Defined in [point/point.ts:126](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L126)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [IPoint](../modules/_point_interface_.md#ipoint) |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** `number`

___
<a id="dist"></a>

### `<Static>` dist

▸ **dist**(a: *[IPoint](../modules/_point_interface_.md#ipoint)*, b: *[IPoint](../modules/_point_interface_.md#ipoint)*, p: *[IPoint](../modules/_point_interface_.md#ipoint)*): `number`

*Defined in [point/point.ts:116](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L116)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [IPoint](../modules/_point_interface_.md#ipoint) |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |
| p | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** `number`

___
<a id="dot-1"></a>

### `<Static>` dot

▸ **dot**(a: *[IPoint](../modules/_point_interface_.md#ipoint)*, b: *[IPoint](../modules/_point_interface_.md#ipoint)*): `number`

*Defined in [point/point.ts:123](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L123)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [IPoint](../modules/_point_interface_.md#ipoint) |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** `number`

___
<a id="from"></a>

### `<Static>` from

▸ **from**(p: *[IPoint](../modules/_point_interface_.md#ipoint)*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:132](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L132)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| p | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** [Point](_point_point_.point.md)

___
<a id="intersection"></a>

### `<Static>` intersection

▸ **intersection**(a: *[IPoint](../modules/_point_interface_.md#ipoint)*, b: *[IPoint](../modules/_point_interface_.md#ipoint)*, c: *[IPoint](../modules/_point_interface_.md#ipoint)*, d: *[IPoint](../modules/_point_interface_.md#ipoint)*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:55](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L55)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [IPoint](../modules/_point_interface_.md#ipoint) |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |
| c | [IPoint](../modules/_point_interface_.md#ipoint) |
| d | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** [Point](_point_point_.point.md)

___
<a id="mixrange"></a>

### `<Static>` mixRange

▸ **mixRange**(a: *[IPoint](../modules/_point_interface_.md#ipoint)*, b: *[IPoint](../modules/_point_interface_.md#ipoint)*, c: *[IPoint](../modules/_point_interface_.md#ipoint)*, d: *[IPoint](../modules/_point_interface_.md#ipoint)*, t: *`number`*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:129](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L129)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [IPoint](../modules/_point_interface_.md#ipoint) |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |
| c | [IPoint](../modules/_point_interface_.md#ipoint) |
| d | [IPoint](../modules/_point_interface_.md#ipoint) |
| t | `number` |

**Returns:** [Point](_point_point_.point.md)

___
<a id="project"></a>

### `<Static>` project

▸ **project**(a: *[IPoint](../modules/_point_interface_.md#ipoint)*, b: *[IPoint](../modules/_point_interface_.md#ipoint)*, p: *[IPoint](../modules/_point_interface_.md#ipoint)*): [Point](_point_point_.point.md)

*Defined in [point/point.ts:89](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [IPoint](../modules/_point_interface_.md#ipoint) |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |
| p | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** [Point](_point_point_.point.md)

___
<a id="projectsigneddist"></a>

### `<Static>` projectSignedDist

▸ **projectSignedDist**(a: *[IPoint](../modules/_point_interface_.md#ipoint)*, b: *[IPoint](../modules/_point_interface_.md#ipoint)*, p: *[IPoint](../modules/_point_interface_.md#ipoint)*): `number`

*Defined in [point/point.ts:97](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L97)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [IPoint](../modules/_point_interface_.md#ipoint) |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |
| p | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** `number`

___
<a id="projectsignedprop"></a>

### `<Static>` projectSignedProp

▸ **projectSignedProp**(a: *[IPoint](../modules/_point_interface_.md#ipoint)*, b: *[IPoint](../modules/_point_interface_.md#ipoint)*, p: *[IPoint](../modules/_point_interface_.md#ipoint)*): `number`

*Defined in [point/point.ts:106](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L106)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [IPoint](../modules/_point_interface_.md#ipoint) |
| b | [IPoint](../modules/_point_interface_.md#ipoint) |
| p | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** `number`

___
<a id="rayintersection"></a>

### `<Static>` rayIntersection

▸ **rayIntersection**(p1: *[IPoint](../modules/_point_interface_.md#ipoint)*, _d1: *[IPoint](../modules/_point_interface_.md#ipoint)*, _d2: *[IPoint](../modules/_point_interface_.md#ipoint)*, p2: *[IPoint](../modules/_point_interface_.md#ipoint)*): [Point](_point_point_.point.md) | `null`

*Defined in [point/point.ts:65](https://github.com/be5invis/typo-geom/blob/d307ff5/src/point/point.ts#L65)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| p1 | [IPoint](../modules/_point_interface_.md#ipoint) |
| _d1 | [IPoint](../modules/_point_interface_.md#ipoint) |
| _d2 | [IPoint](../modules/_point_interface_.md#ipoint) |
| p2 | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** [Point](_point_point_.point.md) | `null`

___

