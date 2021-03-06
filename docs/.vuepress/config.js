module.exports = {
  title: 'YuNotes',
  description: '记录工作、记录生活',
  base: '/yunotes/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/image/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    logo: '/image/favicon.ico', //网页顶端导航栏左上角的图标
    nav: [{
      text: '主页',
      link: '/'
    },
    {
      text: '指南',
      link: '/guide/'
    },
    {
      text: 'Vue Admin Pro',
      link: '/vue-admin-pro/'
    },
      // {
      //     text: '语言',
      //     items: [
      //         { text: '中文', link: '/language/chinese/' },
      //         { text: 'English', link: '/language/english/' }
      //     ]
      // },
    ],
    sidebar: {
      '/guide/': [
        ['/guide/', '介绍'],
        {
          title: '青年文摘',
          collapsable: false,
          children: [
            ['/guide/youth-literary-digest/article-1', '1、你不知道的Web Api'],
            ['/guide/youth-literary-digest/article-2', '2、Vue 脱坑 A计划'],
            [
              '/guide/youth-literary-digest/article-3',
              '3、Javascript 和 Sass 共享变量'
            ],
            [
              '/guide/youth-literary-digest/article-4',
              '4、Vue 生命周期钩子自定义事件'
            ],
            [
              '/guide/youth-literary-digest/article-5',
              '5、揭秘 ES6 之 Class 用法'
            ],
            [
              '/guide/youth-literary-digest/article-6',
              '6、揭秘 JS 之 继承 百万财产'
            ],
            [
              '/guide/youth-literary-digest/article-7',
              '7、揭秘 JS 之 你的Promise'
            ],
            [
              '/guide/youth-literary-digest/article-8',
              '8、揭秘 JS 之 call、apply、bind'
            ],
            [
              '/guide/youth-literary-digest/article-9',
              '9、快看，前端开发者都收藏了这几张图表'
            ]
          ]
        },
        {
          title: 'Vue',
          collapsable: false,
          children: [
            ['/guide/vue/introduction', '介绍'],
            ['/guide/vue/vue-count-to', 'VueCountTo'],
            ['/guide/vue/DLLPlugin', 'DLLPlugin']
          ]
        },
        {
          title: 'React',
          collapsable: false,
          children: [['/guide/react/introduction', '介绍']]
        },
        {
          title: 'Git 从入门到放弃',
          collapsable: false,
          children: [
            ['/guide/git/case', '实用案例'],
            ['/guide/git/check-commit', '使用 husky 和 lint-staged检测']
          ]
        }
      ],
      '/vue-admin-pro/': [{
        title: '基础',
        collapsable: false,
        children: [
          ['/vue-admin-pro/', '介绍'],
          ['/vue-admin-pro/base/layout', 'Layout 布局'],
          ['/vue-admin-pro/base/manage-css', '样式'],
          ['/vue-admin-pro/base/mock-data', 'Mock Data'],
          ['/vue-admin-pro/base/router-and-menu', '路由和菜单栏'],
          ['/vue-admin-pro/base/tags-view', 'TagsView 标签导航栏']
        ]
      },
      {
        title: '进阶',
        collapsable: false,
        children: [
          ['/vue-admin-pro/advanced/git-hooks', 'Git Hooks'],
          ['/vue-admin-pro/advanced/git-commitlint', 'Git Commitlint'],
          ['/vue-admin-pro/advanced/directives', 'Directives 自定义指令'],
          ['/vue-admin-pro/advanced/filter', 'Filter 过滤器'],
          ['/vue-admin-pro/advanced/auth', '权限控制'],
          ['/vue-admin-pro/advanced/object-freeze', '性能优化（一）：大型列表数据'],
          ['/vue-admin-pro/advanced/mode-and-env', '环境变量和模式'],
          ['/vue-admin-pro/advanced/deployment', '部署'],
          ['/vue-admin-pro/advanced/cross-domain', '跨域'],
          ['/vue-admin-pro/advanced/babel-polyfill', '兼容IE'],
          ['/vue-admin-pro/advanced/first-screen', '优化-首屏'],
          ['/vue-admin-pro/advanced/webpack', 'vue-cli3 webpack配置']
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          ['/vue-admin-pro/components/query-form', 'QueryForm 表单查询'],
          ['/vue-admin-pro/components/dialog', 'Dialog 可拖动弹窗'],
          ['/vue-admin-pro/components/v-tool-bar', 'ToolBar 工具按钮']
        ]
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          ['/vue-admin-pro/', '介绍']
        ]
      }
      ]
    },
    lastUpdated: '最后更新时间', // string | boolean
    repo: 'https://github.com/liuqiyu/yunotes',
    repoLabel: '查看源码'
    // editLinks: true,
    // // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！'
  },
  markdown: {
    lineNumbers: true
  }
}
