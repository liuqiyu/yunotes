module.exports = {
    title: 'YuNotes',
    description: '记录工作、记录生活',
    base: '/yunotes/',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/image/favicon12.ico'
            }
        ]
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'Vue Admin Pro', link: '/vue-admin-pro/' },
            // {
            //     text: '语言',
            //     items: [
            //         { text: '中文', link: '/language/chinese/' },
            //         { text: 'English', link: '/language/english/' }
            //     ]
            // },
            { text: 'GitHub', link: 'https://github.com/aspire-coding/aspire-docs' }
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
                        ['/guide/youth-literary-digest/article-3', '2、Javascript 和 Sass 共享变量'],
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
                    children: [
                        ['/guide/react/introduction', '介绍']
                    ]
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
            '/vue-admin-pro/': [
                {
                    title: '基础',
                    collapsable: false,
                    children: [
                        ['/vue-admin-pro/', '介绍'],
                        ['/vue-admin-pro/base/manage-css', '样式'],
                        ['/vue-admin-pro/base/mock-data', 'Mock Data'],
                    ]
                },
                {
                    title: '进阶',
                    collapsable: false,
                    children: [
                        ['/vue-admin-pro/advanced/git-hooks', 'Git Hooks'],
                        ['/vue-admin-pro/advanced/directives', 'Directives 自定义指令'],
                        ['/vue-admin-pro/advanced/filter', 'Filter 过滤器'],
                        ['/vue-admin-pro/advanced/auth', '权限控制'],
                        ['/vue-admin-pro/advanced/object-freeze', '性能优化（一）：大型列表数据'],
                        ['/vue-admin-pro/advanced/mode-and-env', '环境变量和模式'],
                        ['/vue-admin-pro/advanced/deployment', '部署'],
                        ['/vue-admin-pro/advanced/babel-polyfill', '兼容IE']
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
        repoLabel: '查看源码',
        // editLinks: true,
        // // 默认为 "Edit this page"
        // editLinkText: '帮助我们改善此页面！'
    },
    markdown: {
        lineNumbers: true
    }
};
