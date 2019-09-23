# 大型列表数据性能优化

`vue`的响应式能让数据发生改变时重新渲染视图，但是有的数据并不会发生改变。我们使用 `Object.defineProperty`进行数据劫持大大消耗了性能。

以下截图部分 `query-table`的源码进行分析：

```
...

const res = await this.$http.post(this.tables.url.method, this.queryModel)

...

this.tableData = Object.freeze(res.data)

...
```
