# Mock Data

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。
通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发更加独立自主，不会被服务端的开发所阻塞。

## mockjs

### 安装

```bash
npm run mockjs
```

### 使用

`oauth.js`

```js
import Mock from 'mockjs'
import {
  host
} from './../config'

Mock.mock(host + '/login', 'post', () => {
  const data = {
    sessionID: 1234567890,
    data: {
      username: '刘依冉',
      password: 123456
    }
  }
  return {
    data: {
      data: data
    },
    message: '登陆成功！',
    code: 200
  }
})

Mock.mock(host + '/logout', 'post', () => {
  return {
    data: {
      data: {}
    },
    message: '注销成功',
    code: 200
  }
})
```


