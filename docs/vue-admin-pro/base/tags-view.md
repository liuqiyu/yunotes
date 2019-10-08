# 标签导航栏

在远古时代，实现单页面可以用`jquery` + `iframe`。然后会在页面中加入`tag`标签记录浏览过的页面，当页面刷新后标签清除，回到首页。

本项目也有类似的功能，当路由切换的时候，在`tags-view`中进行操作，新增、删除或者更新。

右键`tag`标签有3个操作：

* 关闭：关闭选中的`tag`
* 关闭其他：关闭选中外的`tag`（`affix` 除外）
* 关闭所有：关闭所有的`tag`（`affix` 除外）

## 图例

![标签导航](./images/tags-view/tags-view.jpg)

## 配置

标签导航栏功能也是在`src/router`路由文件里面配置的,一般都配置在一级路由以外的路由中：

截取部分代码： [@/router/index.js](https://github.com/liuqiyu/vue-admin-pro/blob/master/src/router/index.js)

```js{16}
// ...
export const layoutRoutes = [
  {
    path: '',
    redirect: 'dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard'),
        meta: {
          icon: 'icon-shouye',
          activeMenu: '/dashboard',
          title: '首页',
          affix: true
        }
      }
    ]
  },
  ...menuRouters
]
// ...
```

以上代码的`affix`属性：当配置为`true`是（如首页）。就会永远的保留在标签导航栏上，不能删除，且保留在标签栏的前列。

## visitedViews && cachedViews

`tags-view`同时在`vuex`中维护了两个数组。

* visitedViews: 用户访问过的页面 就是标签栏导航显示的一个个 tag 数组集合
* cachedViews： 实际 keep-alive 的路由。可以在配置路由的时候通过`meta.noCache`来设置是否需要缓存这个路由 默认都缓存

## 注意事项

由于目前`keep-alive`和`router-view`是强耦合的，而且查看文档和源码不难发现 `keep-alive` 的 `include` 默认是优先匹配组件的 `name` ，
所以在编写路由 `router` 和路由对应的 `view component` 的时候一定要确保 两者的 `name` 是完全一致的。
(切记 name 命名时候尽量保证唯一性 切记不要和某些组件的命名重复了，不然会递归引用最后内存溢出等问题)

```{3}
  {
    path: 'page',
    name: 'page-table',
    component: () =>
        import(/* webpackChunkName: "table" */ './../views/table/page'),
    meta: {
      activeMenu: '/table/page',
      noCache: false,
      title: '页面'
    }
  }
```

```js{2}
export default {
  name: 'page-table'
}
```

一定要保证两着的名字相同，切记写重或者写错。默认如果不写 `name` 就不会被缓存.
