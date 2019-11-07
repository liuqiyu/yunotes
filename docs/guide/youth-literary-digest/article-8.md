<!--
 * @Description: 揭秘 JS 之 call、apply、bind
 * @Author: liuqiyu
 * @Date: 2019-11-07 17:45:44
 * @LastEditors: liuqiyu
 * @LastEditTime: 2019-11-07 18:19:37
 -->

# 揭秘 JS 之 call、apply、bind

## call

> obj.func.call(this, arg1, arg2, ...)

## apply

> obj.func.apply(this, [arg)

## bind

> var newObj = obj.func.bind(this)

## 异同

* 相同点：
  * 三者都是用来改变函数的`this`对象的指向的（指向传入的`obj`）
  * 第一个参数都是`this`要指向的对象，也就是想指定的上下文
* 不同点：
  * 三者传参方式不同
  * `bind`是返回对应函数；`apply`,`call`是立即调用；