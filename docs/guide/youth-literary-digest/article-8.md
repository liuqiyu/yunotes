<!--
 * @Description: 揭秘 JS 之 call、apply、bind
 * @Author: liuqiyu
 * @Date: 2019-11-07 17:45:44
 * @LastEditors: liuqiyu
 * @LastEditTime: 2019-11-08 11:24:03
 -->

# 揭秘 JS 之 call、apply、bind

## 定义

### `call()`、`apply()`、`bind()` 都是用来重定义`this` 这个对象的。

```js
var name = 'jay'
var obj = {
  name: 'bob',
  say: function (a, b) {
    console.log(this.name)
    console.log(a, b)
  }
}

var obj2 = {
  name : 'mary'
}

obj.say.apply(null) // jay 指向window
obj.say.apply(obj2) // mary
obj.say.call(obj2) // mary
obj.say.bind(obj2)() // mary  返回函数
```

以上`bind` 方法后面多了个`()`外，结果返回都一致。
由此得出结论，`apply`、`call`都是直接执行指定的函数，`bind` 是返回一个新的函数，你必须重新调用才会被执行。

### `call` `apply` `bind` 传参对比

```js
obj.say.call(obj2, 'a', 'b') // a, b
obj.say.apply(obj2, [1, 2]) // 1, 2
obj.say.bind(obj2, 1, 2)() // 1, 2
obj.say.bind(obj2, [1, 2]])()// [1, 2] undefined
```

## 源码

### 如何实现`call`

```js
Function.prototype.MyCall = function (context) {
  var newContext = context || window // 缺省指向window
  newContext.fn = this // this 指向调用它的函数
  var args = [...arguments].slice(1) // 截取除去第一个对象以外的参数
  var result = newContext.fn(...args) // 执行函数方法
  delete newContext.fn // 执行完毕后，删除函数
  return result  // 返回函数return的值
}
```

### 如何实现`apply`

```js
Function.prototype.MyApply = function (context, array) {
  var newContext = context || window // 缺省指向window
  newContext.fn = this
  var result 
  if (Object.prototype.toString.call(array) === '[object Array]') {
    result = context.fn(...array)
    delete context.fn
    return result
  } else {
    result = context.fn();
  }
  delete context.fn
  return result
}
```

### 如何实现`bind`

```js
Function.prototype.MyBind = function (context) {
  context.fn = this
  var args = [...arguments].slice(1)
  return function () {
    var result = context.fn(...args)
    delete context.fn
    return result
  }
}

obj.say.MyBind(obj2, 1, 2)() // 1, 2
obj.say.MyBind(obj2, [1, 2])() // [1, 2], undefined
```