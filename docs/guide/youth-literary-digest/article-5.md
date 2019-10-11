# 揭秘 ES6 之 Class 用法

## 类的由来

`Javascript` 语言中，生成实例传统的方法是通过构造函数：

```js
function Person(name) {
    this.name = name;
}

Person.say = function () {
    alert('Hi')
}

var bob = new Person('Bob');
```

`ES6` 提供了耿接近传统语言的写法，引入了`class`的概念。

`ES6` 并不是一门新的语言，`Class` 也只是一个语法糖。它的绝大部分功能，`ES5`都可以做得到，新的`class`写法只是让对象原型的写法更加清晰、更像面对对象变成的语法而已。

```js
class Person {
    constructor(name) {
        this.name = name;
    }
    
    say () {
        alert('Hi')
    }
}

var b = new Person('Bob')
```

上面代码中，由于`b`是`Person`的实例，它的`constructor`方法就是`Person`类原型的`constructor`方法，同时指向`类`本身。

```js
b.constructor === Person.prototype.constructor === Person  // true
```

上面写法可以达到相同的效果。


## 不可枚举

类的内部所有的方法，都是不可枚举的。这是`ES5`的构造函数是有差异的。

```js
class Person {
    constructor(name) {
        this.name = name;
    }
    
    say () {
        alert('Hi')
    }
}

console.log(Object.keys(Person.prototype)) // []
```

`ES5`构造函数：

```js
function Person(name) {
    this.name = name;
}

Person.say = function () {
    alert('Hi')
}

console.log(Object.keys(Person.prototype)) // ['say']
```

## constructor 方法

`constructor`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法。一个类必须有`constructor`方法，如果没有显式定义，一个空的`constructor`方法会被默认添加。

```js
class Person{}
// 等同于
class Person{
    constructor(){}
}
```

`constructor` 方法默认返回实例对象（即`this`）。

```js
class Person{
    constructor(){
        return this
    }
}

new Person() instanceof Person // true
```

如果把它指向另外一个对象，则导致`cxonstructor`函数放回一个全新的对象，结果导致实例对象不是`Person`类的实例。

类必须使用`new`调用，否则会报错。这是他跟普通构造函数的一个主要区别，后者不用`new`也可以实行。

```js
class Person{}

Person()

// Uncaught TypeError: Class constructor Person cannot be invoked without 'new'
```

 ## 类的实例
 
 实例的属性除非显性定义在其本身`constructor`，否则都定义在原型上。（即定义在`class`上）。
 
 ::: tip hasOwnProperty()
 hasOwnProperty(): 判断自身属性是否存在
 :::
 
 ```js
class Person {
    constructor(name) {
        this.name = name;
    }
    
    say () {
        alert('Hi')
    }
}

var b = new Person('Bob');

b.hasOwnProperty('name'); // true
b.hasOwnProperty('say'); // false
b.__proto__.hasOwnProperty('say'); // false
```

## 属性表达式

类的属性名，可以采用表达式

```js
let methodName = 'getArea';

class Square {
  constructor(length) {
    // ...
  }

  [methodName]() {
    // ...
  }
}

var a = new Square();

a.getArea();
```

### 注意点

#### 不存提升

类不存在变量提升（hoist），这一点与 ES5 完全不同。

```js
new Foo(); // ReferenceError
class Foo {}
```

#### name 属性

由于本质上，`ES6` 的类只是 `ES5` 的构造函数的一层包装，所以函数的许多特性都被`Class`继承，包括`name`属性。

```js
class Point {}
Point.name // "Point"
```

`name`属性总是返回紧跟在`class`关键字后面的类名。

#### this 的指向

类的方法内部如果含有`this`，它默认指向类的实例

## 静态方法和静态属性 static

上面讲到`class`无法直接访问类中的方法和属性。但是当我们指定他们的类型为`static`关键字时，就可以直接调用。

```js
    class B {
      static c = 123
      static a() {
        alert(1)
      }
    }
    B.c // 123
    B.a() // alert(1)

    var c = new B();

    c.a() // index.html:28 Uncaught TypeError: c.a is not a function
```

上面代码发现。类可以直接调用静态方法，但是实例不能。

## 实例属性的新写法

实例属性除了可以定义在`constructor()`方法里面的`this`上面，也可以定义在类的最顶层。

```js
    class B {
    _a = 0;
    }
```
上面的代码，一眼就能看出，`B`类有两个实例属性，一目了然。另外，写起来也比较简洁。

## 私有属性和私有方法

在私有方法和私有属性前加`_ 下划线`，表示这是一个只限于内部使用的私有方法。

### 私有方法和属性的提案 #

```js
class IncreasingCounter {
  #count = 0;
  get value() {
    console.log('Getting the current value!');
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}

const counter = new IncreasingCounter();
counter.#count // 报错
counter.#count = 42 // 报错
```

上面代码中，`#count`就是私有属性，只能在类的内部使用（`this.#count`）。如果在类的外部使用，就会报错。
