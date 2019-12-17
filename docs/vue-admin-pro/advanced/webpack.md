<!--
 * @Description: vue-cli3 webpack配置
 * @Author: liuqiyu
 * @Date: 2019-12-17 11:03:23
 * @LastEditors: liuqiyu
 * @LastEditTime: 2019-12-17 11:10:45
 -->

# vue-cli3 webpack配置

## 配置一：report

```js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

module.exports = {
  chainWebpack: config => {
    // 打包分析
    if (IS_PROD) {
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static"
        }
      ]);
    }
  }
};
```

## 配置二：externals

```js
module.exports = {
  configureWebpack: {
    externals: {
      'mxgraph': 'mxgraph'
    }
  }
}
```

## 配置三：alias

```js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        static: resolve('public/static')
      }
    },
  }
}
```
