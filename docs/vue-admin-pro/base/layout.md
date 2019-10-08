# Layout 布局

## Layout

[@/views/layout](https://github.com/liuqiyu/vue-admin-pro/blob/master/src/views/layout/index.vue)

![layout](./images/layout/layout.jpg)

本项目布局分为`tapbar`,`sidebar`,`tags-view`,`content`4个模块。
统一都放在 [@/views/layout](https://github.com/liuqiyu/vue-admin-pro/tree/master/src/views/layout) 文件夹中。

[index.vue](https://github.com/liuqiyu/vue-admin-pro/blob/master/src/views/layout/index.vue) 式布局的入口文件：

```vue
<template>
  <div class="yus-layout">
    <el-container class="yus-container">
      <topbar class="yus-header"></topbar>
      <el-container class="yus-body">
        <div class="yus-menu">
          <sidebar></sidebar>
        </div>
        <el-main class="yus-main">
          <tagsView></tagsView>
          <div class="yus-content">
            <keep-alive :include="cachedViews">
              <router-view></router-view>
            </keep-alive>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
// ...
<style scoped lang="scss">
.yus-content {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    background: #f1f5fa;
    height: 100%;
    > * {
      padding: 12px 12px 2px 12px;
      height: 100%;
    }
  }
</style>

```
::: tip 提示

为了规范页面整体的样式，默认为`router-view` 每一个`page 根标签` 统一了样式。大部分页面无需修改，如部分页面有独立的样式，则在`page 跟标签` 中重写样式，进行覆盖。

```css
   > * {
      padding: 12px 12px 2px 12px;
      height: 100%;
    }
```

[@/views/table/page/index.vue](https://github.com/liuqiyu/vue-admin-pro/blob/master/src/views/table/page/index.vue)

```vue
<template>
  <div class="content-container">
    <yus-query-table ref="queryTable"
                     :form-fields="formFields"
                     :tools="tools"
                     :tables="tables"></yus-query-table>
  </div>
</template>
```

:::



