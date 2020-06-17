[typo-geom](../README.md) › [Globals](../globals.md) › ["bez-tool/shared/slice-arc"](../modules/_bez_tool_shared_slice_arc_.md) › [Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)

# Class: Bez3Slice

## Hierarchy

* [Bez3](_derivable_arcs_.bez3.md)

  ↳ **Bez3Slice**

## Implements

* [Derivable](../interfaces/_derivable_interface_.derivable.md)

## Index

### Constructors

* [constructor](_bez_tool_shared_slice_arc_.bez3slice.md#constructor)

### Properties

* [a](_bez_tool_shared_slice_arc_.bez3slice.md#readonly-a)
* [b](_bez_tool_shared_slice_arc_.bez3slice.md#readonly-b)
* [c](_bez_tool_shared_slice_arc_.bez3slice.md#readonly-c)
* [cornerTypeAfter](_bez_tool_shared_slice_arc_.bez3slice.md#cornertypeafter)
* [cornerTypeBefore](_bez_tool_shared_slice_arc_.bez3slice.md#cornertypebefore)
* [d](_bez_tool_shared_slice_arc_.bez3slice.md#readonly-d)
* [isStraightCache](_bez_tool_shared_slice_arc_.bez3slice.md#private-optional-isstraightcache)
* [t1](_bez_tool_shared_slice_arc_.bez3slice.md#t1)
* [t2](_bez_tool_shared_slice_arc_.bez3slice.md#t2)

### Methods

* [classify](_bez_tool_shared_slice_arc_.bez3slice.md#classify)
* [derivative](_bez_tool_shared_slice_arc_.bez3slice.md#derivative)
* [eval](_bez_tool_shared_slice_arc_.bez3slice.md#eval)
* [forceStraight](_bez_tool_shared_slice_arc_.bez3slice.md#forcestraight)
* [getTOf](_bez_tool_shared_slice_arc_.bez3slice.md#gettof)
* [isStraight](_bez_tool_shared_slice_arc_.bez3slice.md#isstraight)
* [sliceRatio](_bez_tool_shared_slice_arc_.bez3slice.md#sliceratio)
* [splitRatio](_bez_tool_shared_slice_arc_.bez3slice.md#splitratio)
* [toString](_bez_tool_shared_slice_arc_.bez3slice.md#tostring)
* [fromStraightSegment](_bez_tool_shared_slice_arc_.bez3slice.md#static-fromstraightsegment)

## Constructors

###  constructor

\+ **new Bez3Slice**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `c`: [IPoint](../modules/_point_interface_.md#ipoint), `d`: [IPoint](../modules/_point_interface_.md#ipoint), `t1`: number, `t2`: number): *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)*

*Overrides [Bez3](_derivable_arcs_.bez3.md).[constructor](_derivable_arcs_.bez3.md#constructor)*

*Defined in [bez-tool/shared/slice-arc.ts:23](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L23)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) | - |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) | - |
`c` | [IPoint](../modules/_point_interface_.md#ipoint) | - |
`d` | [IPoint](../modules/_point_interface_.md#ipoint) | - |
`t1` | number | 0 |
`t2` | number | 1 |

**Returns:** *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)*

## Properties

### `Readonly` a

• **a**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[a](_derivable_arcs_.bez3.md#readonly-a)*

*Defined in [derivable/arcs.ts:38](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L38)*

___

### `Readonly` b

• **b**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[b](_derivable_arcs_.bez3.md#readonly-b)*

*Defined in [derivable/arcs.ts:39](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L39)*

___

### `Readonly` c

• **c**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[c](_derivable_arcs_.bez3.md#readonly-c)*

*Defined in [derivable/arcs.ts:40](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L40)*

___

###  cornerTypeAfter

• **cornerTypeAfter**: *[CornerType](../enums/_bez_tool_shared_slice_arc_.cornertype.md)* = CornerType.Corner

*Defined in [bez-tool/shared/slice-arc.ts:35](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L35)*

___

###  cornerTypeBefore

• **cornerTypeBefore**: *[CornerType](../enums/_bez_tool_shared_slice_arc_.cornertype.md)* = CornerType.Corner

*Defined in [bez-tool/shared/slice-arc.ts:34](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L34)*

___

### `Readonly` d

• **d**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[d](_derivable_arcs_.bez3.md#readonly-d)*

*Defined in [derivable/arcs.ts:41](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L41)*

___

### `Private` `Optional` isStraightCache

• **isStraightCache**? : *undefined | false | true*

*Defined in [bez-tool/shared/slice-arc.ts:36](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L36)*

___

###  t1

• **t1**: *number*

*Defined in [bez-tool/shared/slice-arc.ts:29](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L29)*

___

###  t2

• **t2**: *number*

*Defined in [bez-tool/shared/slice-arc.ts:30](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L30)*

## Methods

###  classify

▸ **classify**(): *object*

*Defined in [bez-tool/shared/slice-arc.ts:156](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L156)*

**Returns:** *object*

* **roots**: *null | number[]* = t1Ok || t2Ok
						? t1Ok && t2Ok
							? t1! < t2!
								? [t1!, t2!]
								: [t2!, t1!] // 2 solutions
							: [t1Ok ? t1! : t2!] // 1 solution
						: null

* **type**: *string* = type

___

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[derivative](_derivable_arcs_.bez3.md#derivative)*

*Defined in [derivable/arcs.ts:51](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  eval

▸ **eval**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[eval](_derivable_arcs_.bez3.md#eval)*

*Defined in [derivable/arcs.ts:44](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  forceStraight

▸ **forceStraight**(): *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

*Defined in [bez-tool/shared/slice-arc.ts:38](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L38)*

**Returns:** *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

___

###  getTOf

▸ **getTOf**(`point`: [IPoint](../modules/_point_interface_.md#ipoint)): *number | null*

*Defined in [bez-tool/shared/slice-arc.ts:117](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`point` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number | null*

___

###  isStraight

▸ **isStraight**(): *boolean*

*Overrides [Bez3](_derivable_arcs_.bez3.md).[isStraight](_derivable_arcs_.bez3.md#isstraight)*

*Defined in [bez-tool/shared/slice-arc.ts:52](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L52)*

**Returns:** *boolean*

___

###  sliceRatio

▸ **sliceRatio**(`t1`: number, `t2`: number): *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

*Defined in [bez-tool/shared/slice-arc.ts:105](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`t1` | number |
`t2` | number |

**Returns:** *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

___

###  splitRatio

▸ **splitRatio**(`t`: number): *[[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md), [Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)]*

*Defined in [bez-tool/shared/slice-arc.ts:65](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L65)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`t` | number | 0.5 |

**Returns:** *[[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md), [Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)]*

___

###  toString

▸ **toString**(): *string*

*Defined in [bez-tool/shared/slice-arc.ts:59](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/bez-tool/shared/slice-arc.ts#L59)*

**Returns:** *string*

___

### `Static` fromStraightSegment

▸ **fromStraightSegment**(`ss`: [StraightSegment](_derivable_arcs_.straightsegment.md)): *[Bez3](_derivable_arcs_.bez3.md)‹›*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[fromStraightSegment](_derivable_arcs_.bez3.md#static-fromstraightsegment)*

*Defined in [derivable/arcs.ts:80](https://github.com/be5invis/typo-geom/blob/9ebaae4/src/derivable/arcs.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`ss` | [StraightSegment](_derivable_arcs_.straightsegment.md) |

**Returns:** *[Bez3](_derivable_arcs_.bez3.md)‹›*
