/**
 * 什么是类数组对象
 * 拥有length属性和若干属性值得对象
 * 无法直接调用数组的方法 可以使用Function.call来实现
 * 四种实现方式
 */

 arrayLike = [];
 Array.prototype.slice(arrayLike)//不会改变原数组
 Array.prototype.splice(arrayLike, 0)//会改变原数组,必须指定参数位置
 Array.from(arrayLike)
 Array.prototype.concat([],arrayLike) //不会改变
