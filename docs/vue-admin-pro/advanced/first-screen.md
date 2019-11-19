<!--
 * @Description: First-screen 首屏优化
 * @Author: liuqiyu
 * @Date: 2019-11-19 13:50:46
 * @LastEditors: liuqiyu
 * @LastEditTime: 2019-11-19 14:07:15
 -->
# 优化-首屏

关于vue首屏优化网上有很多文章，这里针对项目我简单罗列了几点：

## 路由懒加载

```js
 component: () =>
        import(/* webpackChunkName: "components" */ './../views/components/tool-bar')
```

最后会打包成多个异步的`chunk`块。

但是实际上我们访问项目时，其他的`chunk`异步块也会在首屏被加载。

我们可以通过`vue.config.js`里配置`Prefetch`：

```js
 chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')

    // 或者
    // 修改它的选项：
    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
      return options
    })
  }
```

## 组件懒加载

通过使用路由懒加载可以拆分包的体积，但是也存在某个路由本身体积就很大的情况。

可以通过组件懒加载的方式解决：

```js
import Session from './session'
import User from './user'
// import aa from './a'
// import bb from './b'
// import c from './c'
// import d from './d'
const aa = () => import(/* webpackChunkName: "a" */ './a')
const bb = () => import(/* webpackChunkName: "b" */ './b')
const c = () => import(/* webpackChunkName: "c" */ './c')
const d = () => import(/* webpackChunkName: "d" */ './d')
```

通过让不可视区域组件懒加载，并隐藏不可使区域组件。通过监听滚动的形式加载异步的组件包达到目的。