# 使用 `@babel/polyfill` 兼容IE

`vueJs`只兼容`ie9`及以上的浏览器

`element-ui`兼容`ie10`及以上的浏览器

部分`es6`语法是不被`ie`所兼容的，为了解决这个，我们可以使用`@babel/polyfill`

## 安装

```bash
npm install babel-polyfill -s
```

## 使用

首先在`main.js`中引用如下代码：

```js
import '@babel/polyfill'
```

然后修改`babel.config.js`为：

```js
module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: 'entry'
    }]
  ]
}
```

这就完了？ 嗯，是的
