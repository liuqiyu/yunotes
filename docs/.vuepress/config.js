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
            {
                text: '语言',
                items: [
                    { text: '中文', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/aspire-coding/aspire-docs' }
        ],
        // sidebar: {
        //     '/guide/' :[
        //         ['/guide/', '介绍'],
        //         ['/guide/standard', '开发规范'],
        //         ['/guide/css', '公有css使用'],
        //         ['/guide/asp-tree-select', 'AspTreeSelect 下拉树'],
        //         '/guide/query-table'
        //     ]
        // }
        sidebar: [
            ['/guide/', '介绍'],
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
        ]
    },
    markdown: {
        lineNumbers: true
    }
};
