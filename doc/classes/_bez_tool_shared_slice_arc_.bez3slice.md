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

### Methods

* [classify](_bez_tool_shared_slice_arc_.bez3slice.md#classify)
* [cleanupClassifyResults](_bez_tool_shared_slice_arc_.bez3slice.md#private-cleanupclassifyresults)
* [derivative](_bez_tool_shared_slice_arc_.bez3slice.md#derivative)
* [eval](_bez_tool_shared_slice_arc_.bez3slice.md#eval)
* [forceStraight](_bez_tool_shared_slice_arc_.bez3slice.md#forcestraight)
* [getExtremaImpl](_bez_tool_shared_slice_arc_.bez3slice.md#private-getextremaimpl)
* [getLength](_bez_tool_shared_slice_arc_.bez3slice.md#getlength)
* [getLengthIntegrand](_bez_tool_shared_slice_arc_.bez3slice.md#private-getlengthintegrand)
* [getLengthSteps](_bez_tool_shared_slice_arc_.bez3slice.md#private-getlengthsteps)
* [getTOf](_bez_tool_shared_slice_arc_.bez3slice.md#gettof)
* [getXExtrema](_bez_tool_shared_slice_arc_.bez3slice.md#getxextrema)
* [getYExtrema](_bez_tool_shared_slice_arc_.bez3slice.md#getyextrema)
* [isStraight](_bez_tool_shared_slice_arc_.bez3slice.md#isstraight)
* [sliceRatio](_bez_tool_shared_slice_arc_.bez3slice.md#sliceratio)
* [splitRatio](_bez_tool_shared_slice_arc_.bez3slice.md#splitratio)
* [toString](_bez_tool_shared_slice_arc_.bez3slice.md#tostring)
* [fromArcSlice](_bez_tool_shared_slice_arc_.bez3slice.md#static-fromarcslice)
* [fromStraightSegment](_bez_tool_shared_slice_arc_.bez3slice.md#static-fromstraightsegment)

## Constructors

###  constructor

\+ **new Bez3Slice**(`a`: [IPoint](../modules/_point_interface_.md#ipoint), `b`: [IPoint](../modules/_point_interface_.md#ipoint), `c`: [IPoint](../modules/_point_interface_.md#ipoint), `d`: [IPoint](../modules/_point_interface_.md#ipoint)): *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)*

*Overrides [Bez3](_derivable_arcs_.bez3.md).[constructor](_derivable_arcs_.bez3.md#constructor)*

*Defined in [bez-tool/shared/slice-arc.ts:23](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IPoint](../modules/_point_interface_.md#ipoint) |
`b` | [IPoint](../modules/_point_interface_.md#ipoint) |
`c` | [IPoint](../modules/_point_interface_.md#ipoint) |
`d` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)*

## Properties

### `Readonly` a

• **a**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[a](_derivable_arcs_.bez3.md#readonly-a)*

*Defined in [derivable/arcs.ts:38](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L38)*

___

### `Readonly` b

• **b**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[b](_derivable_arcs_.bez3.md#readonly-b)*

*Defined in [derivable/arcs.ts:39](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L39)*

___

### `Readonly` c

• **c**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[c](_derivable_arcs_.bez3.md#readonly-c)*

*Defined in [derivable/arcs.ts:40](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L40)*

___

###  cornerTypeAfter

• **cornerTypeAfter**: *[CornerType](../enums/_bez_tool_shared_slice_arc_.cornertype.md)* = CornerType.Corner

*Defined in [bez-tool/shared/slice-arc.ts:28](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L28)*

___

###  cornerTypeBefore

• **cornerTypeBefore**: *[CornerType](../enums/_bez_tool_shared_slice_arc_.cornertype.md)* = CornerType.Corner

*Defined in [bez-tool/shared/slice-arc.ts:27](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L27)*

___

### `Readonly` d

• **d**: *[IPoint](../modules/_point_interface_.md#ipoint)*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[d](_derivable_arcs_.bez3.md#readonly-d)*

*Defined in [derivable/arcs.ts:41](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L41)*

___

### `Private` `Optional` isStraightCache

• **isStraightCache**? : *undefined | false | true*

*Defined in [bez-tool/shared/slice-arc.ts:29](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L29)*

## Methods

###  classify

▸ **classify**(`sink?`: [IRootSink](../interfaces/_fn_solver_.irootsink.md)): *void*

*Defined in [bez-tool/shared/slice-arc.ts:133](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`sink?` | [IRootSink](../interfaces/_fn_solver_.irootsink.md) |

**Returns:** *void*

___

### `Private` cleanupClassifyResults

▸ **cleanupClassifyResults**(`type`: [CurveClass](../modules/_bez_tool_shared_slice_arc_.md#curveclass), `sink?`: [IRootSink](../interfaces/_fn_solver_.irootsink.md), `t1?`: undefined | number, `t2?`: undefined | number): *void*

*Defined in [bez-tool/shared/slice-arc.ts:190](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | [CurveClass](../modules/_bez_tool_shared_slice_arc_.md#curveclass) |
`sink?` | [IRootSink](../interfaces/_fn_solver_.irootsink.md) |
`t1?` | undefined &#124; number |
`t2?` | undefined &#124; number |

**Returns:** *void*

___

###  derivative

▸ **derivative**(`t`: number): *[Point](_point_point_.point.md)‹›*

*Implementation of [Derivable](../interfaces/_derivable_interface_.derivable.md)*

*Inherited from [Bez3](_derivable_arcs_.bez3.md).[derivative](_derivable_arcs_.bez3.md#derivative)*

*Defined in [derivable/arcs.ts:51](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L51)*

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

*Defined in [derivable/arcs.ts:44](https://github.com/be5invis/typo-geom/blob/5527277/src/derivable/arcs.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | number |

**Returns:** *[Point](_point_point_.point.md)‹›*

___

###  forceStraight

▸ **forceStraight**(): *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

*Defined in [bez-tool/shared/slice-arc.ts:31](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L31)*

**Returns:** *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

___

### `Private` getExtremaImpl

▸ **getExtremaImpl**(`v0`: number, `v1`: number, `v2`: number, `v3`: number, `sink`: [IRootSink](../interfaces/_fn_solver_.irootsink.md)): *void*

*Defined in [bez-tool/shared/slice-arc.ts:246](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`v0` | number |
`v1` | number |
`v2` | number |
`v3` | number |
`sink` | [IRootSink](../interfaces/_fn_solver_.irootsink.md) |

**Returns:** *void*

___

###  getLength

▸ **getLength**(`a`: number, `b`: number): *number*

*Defined in [bez-tool/shared/slice-arc.ts:204](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L204)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`a` | number | 0 |
`b` | number | 1 |

**Returns:** *number*

___

### `Private` getLengthIntegrand

▸ **getLengthIntegrand**(): *(Anonymous function)*

*Defined in [bez-tool/shared/slice-arc.ts:217](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L217)*

**Returns:** *(Anonymous function)*

___

### `Private` getLengthSteps

▸ **getLengthSteps**(`a`: number, `b`: number): *number*

*Defined in [bez-tool/shared/slice-arc.ts:233](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L233)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number*

___

###  getTOf

▸ **getTOf**(`point`: [IPoint](../modules/_point_interface_.md#ipoint)): *number | null*

*Defined in [bez-tool/shared/slice-arc.ts:94](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`point` | [IPoint](../modules/_point_interface_.md#ipoint) |

**Returns:** *number | null*

___

###  getXExtrema

▸ **getXExtrema**(`sink`: [IRootSink](../interfaces/_fn_solver_.irootsink.md)): *void*

*Defined in [bez-tool/shared/slice-arc.ts:240](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L240)*

**Parameters:**

Name | Type |
------ | ------ |
`sink` | [IRootSink](../interfaces/_fn_solver_.irootsink.md) |

**Returns:** *void*

___

###  getYExtrema

▸ **getYExtrema**(`sink`: [IRootSink](../interfaces/_fn_solver_.irootsink.md)): *void*

*Defined in [bez-tool/shared/slice-arc.ts:243](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L243)*

**Parameters:**

Name | Type |
------ | ------ |
`sink` | [IRootSink](../interfaces/_fn_solver_.irootsink.md) |

**Returns:** *void*

___

###  isStraight

▸ **isStraight**(): *boolean*

*Overrides [Bez3](_derivable_arcs_.bez3.md).[isStraight](_derivable_arcs_.bez3.md#isstraight)*

*Defined in [bez-tool/shared/slice-arc.ts:43](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L43)*

**Returns:** *boolean*

___

###  sliceRatio

▸ **sliceRatio**(`t1`: number, `t2`: number): *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

*Defined in [bez-tool/shared/slice-arc.ts:82](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`t1` | number |
`t2` | number |

**Returns:** *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

___

###  splitRatio

▸ **splitRatio**(`t`: number): *[[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md), [Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)]*

*Defined in [bez-tool/shared/slice-arc.ts:56](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L56)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`t` | number | 0.5 |

**Returns:** *[[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md), [Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)]*

___

###  toString

▸ **toString**(): *string*

*Defined in [bez-tool/shared/slice-arc.ts:50](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L50)*

**Returns:** *string*

___

### `Static` fromArcSlice

▸ **fromArcSlice**(`arc`: [Arc](../modules/_derivable_interface_.md#arc), `t0`: number, `t1`: number): *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

*Defined in [bez-tool/shared/slice-arc.ts:266](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L266)*

**Parameters:**

Name | Type |
------ | ------ |
`arc` | [Arc](../modules/_derivable_interface_.md#arc) |
`t0` | number |
`t1` | number |

**Returns:** *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

___

### `Static` fromStraightSegment

▸ **fromStraightSegment**(`ss`: [StraightSegment](_derivable_arcs_.straightsegment.md)): *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*

*Overrides [Bez3](_derivable_arcs_.bez3.md).[fromStraightSegment](_derivable_arcs_.bez3.md#static-fromstraightsegment)*

*Defined in [bez-tool/shared/slice-arc.ts:258](https://github.com/be5invis/typo-geom/blob/5527277/src/bez-tool/shared/slice-arc.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`ss` | [StraightSegment](_derivable_arcs_.straightsegment.md) |

**Returns:** *[Bez3Slice](_bez_tool_shared_slice_arc_.bez3slice.md)‹›*
