[typo-geom](../README.md) > ["derivable/interface"](../modules/_derivable_interface_.md) > [Derivable](../interfaces/_derivable_interface_.derivable.md)

# Interface: Derivable

## Type parameters
#### T 
## Hierarchy

**Derivable**

## Implemented by

* [Add](../classes/_derivable_functions_.d.add.md)
* [Bez3](../classes/_derivable_curves_.bez3.md)
* [Circle](../classes/_derivable_curves_.circle.md)
* [Co](../classes/_derivable_functions_.d.co.md)
* [Const](../classes/_derivable_functions_.d.const.md)
* [Div](../classes/_derivable_functions_.d.div.md)
* [FromXY](../classes/_derivable_curves_.fromxy.md)
* [Hermite00](../classes/_derivable_functions_.d.hermite00.md)
* [Hermite01](../classes/_derivable_functions_.d.hermite01.md)
* [Hermite10](../classes/_derivable_functions_.d.hermite10.md)
* [Hermite11](../classes/_derivable_functions_.d.hermite11.md)
* [Mixed](../classes/_derivable_curves_.mixed.md)
* [Mixed3](../classes/_derivable_curves_.mixed3.md)
* [Mul](../classes/_derivable_functions_.d.mul.md)
* [Nest](../classes/_derivable_functions_.d.nest.md)
* [Pow](../classes/_derivable_functions_.d.pow.md)
* [Reparametrized](../classes/_derivable_curves_.reparametrized.md)
* [Slice](../classes/_derivable_functions_.d.slice.md)
* [StraightSegment](../classes/_derivable_curves_.straightsegment.md)
* [Sub](../classes/_derivable_functions_.d.sub.md)
* [Transformed](../classes/_derivable_curves_.transformed.md)

## Index

### Methods

* [derivative](_derivable_interface_.derivable.md#derivative)
* [eval](_derivable_interface_.derivable.md#eval)

---

## Methods

<a id="derivative"></a>

###  derivative

▸ **derivative**(t: *`number`*): `T`

*Defined in [derivable/interface.ts:5](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/interface.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** `T`

___
<a id="eval"></a>

###  eval

▸ **eval**(t: *`number`*): `T`

*Defined in [derivable/interface.ts:4](https://github.com/be5invis/typo-geom/blob/d307ff5/src/derivable/interface.ts#L4)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `number` |

**Returns:** `T`

___

