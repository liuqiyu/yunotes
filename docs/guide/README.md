# 介绍

`Aspire Frontend`是一个后台前端解决方案，它基于 `vue` 和 `element-ui` 实现。

## 功能

```
- 登录 / 注销

- 共有组件
  - 卡片 asp-card
  - 下拉树 asp-tree-select
  - 表格 query-table
  - 表单 query-form
  - 可拖拽弹窗 asp-dialog
```

## 目录结构

```
├── build                      # 构建相关
├── config                     # 构建相关
├── node-modules               # 项目依赖
├── server                     # 接口配置
├── static                     # 静态资源
│   │── img                   # 图片
│   │── js                    # 脚本
│   └── map                   # 地图相关
├── src                        # 源代码
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directives             # 全局指令
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── utils                  # 全局公用方法
│   ├── pages                  # pages 所有页面
│   ├── App.vue                # 入口页面
│   └── main.js                # 入口文件 加载组件 初始化等
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
└── package.json               # package.json
```
