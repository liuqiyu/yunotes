# 跨域

解决跨域的方案有很多种，本项目用的是`proxy`：

## 本地环境

```js
// ...
module.exports = {
    devServer: {
      proxy: {
          '/api': {
            target: 'http://localhost:5858', // 目标代理接口地址
            secure: false,
            changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
            // ws: true, // 是否启用websockets
            pathRewrite: {
              '^/api': '/'
            }
          }
        }
    }
}
// ...
```

## 生产环境

* `cors`
* `nginx 反向代理`
