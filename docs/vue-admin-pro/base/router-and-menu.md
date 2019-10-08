# 路由和菜单栏

菜单在后台管理系统是至关重要的。

本项目中，侧边菜单栏的渲染展示跟路由关联。只要在`src/router`文件夹下正确的建立路由，侧边菜单栏便能正确的显示。

## 配置项

首先我们了解一些本项目配置路由时提供了哪些配置项。[@/router](https://github.com/liuqiyu/vue-admin-pro/tree/master/src/router)

### 模块根路由

```js
// 路由路径
path: '/table'

// 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
name: String

// 当你的路由下子路由大于1个时，会自动使用根路由作为一级菜单显示
// 当你的路由下子路由等于1个时，可以通过设置去判断到底用根路由当一级菜单，还是用二级路由当一级菜单
// 当showRoot: true 时，会使用根路由当一级菜单，子路由时二级菜单。
showRoot: Boolean

// 不显示在侧边菜单栏上
hidden: Boolean

component: components

meta: {
    icon: String // 侧边导航栏的图标
    title: String // 设置改路由在侧边栏菜单和tags中展示的名称
}

// 子路由
children: []

```

### 示例：

```js
export default {
  path: '/table',
  name: 'Table',
  showRoot: true,
  hidden: true,
  meta: {
    icon: 'icon-biaoge',
    title: '表格'
  },
  component: Layout,
  children: []
}
```

### 子路由

子路由配置跟根路由配置大部分相同，只是多了或者少了几个配置

```js
// 路由路径
path: 'default'

// 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
name: String

// 不显示在侧边菜单栏上
hidden: Boolean

component: components

meta: {
    // 当此路由是某个菜单的详情页面，不需要展示在侧边菜单栏时，需要配置改页面的`活动菜单`
    activeMenu: '/table/page' 
    noCache: true  // 不需要用`keep-alive`进行缓存
    icon: String // 侧边导航栏的图标
    title: String // 设置改路由在侧边栏菜单和tags中展示的名称
}

// 子路由
children: []

```

#### 示例：

```
{
    path: 'page/add',
    name: 'page-table-add',
    hidden: true,
    component: () =>
        import(/* webpackChunkName: "table" */ './../views/table/page/add'),
    meta: {
      activeMenu: '/table/page',
      noCache： true,
      title: '页面-新增'
    }
}
```

## 路由

### 路由懒加载 

[@lazy-loading](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

本项目中，我们把组件按组分块：

有时候我们想把某个路由下的所有组件都打包在同个异步块`(chunk)`中。只需要使用 命名 `chunk`，
一个特殊的注释语法来提供 `chunk name` (需要 Webpack > 2.4)。

```js
component: () =>
        import(/* webpackChunkName: "components" */ './../views/components/tool-bar')
```

`Webpack` 会将任何一个异步模块与相同的块名称组合到相同的异步块中。

## 权限
路由暂时没有做权限配置，后续更新~~~

## 预览

![Alt text](./images/router-and-menu/sidebar-menu.jpg)


