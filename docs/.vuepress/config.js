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
            // {
            //     text: '语言',
            //     items: [
            //         { text: '中文', link: '/language/chinese/' },
            //         { text: 'English', link: '/language/english/' }
            //     ]
            // },
            { text: 'GitHub', link: 'https://github.com/aspire-coding/aspire-docs' }
        ],
        sidebar: [
            ['/guide/', '介绍'],
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
                    ['/guide/git/case', '实用案例']
                ]
            },
            // {
            //     title: '解决方案',
            //     collapsable: false,
            //     children: [
            //         ['/guide/echarts', 'Echarts 使用教程']
            //     ]
            // }
        ],
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
