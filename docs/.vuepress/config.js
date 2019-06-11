module.exports = {
    title: 'Aspire Frontend',
    description: '简单工作 简单生活',
    // dest: './docs/.vuepress/dist',  // 设置输出目录
    base: '/aspire-docs/',
    head:[
        ['link', {rel:'icon', href:'/image/favicon.ico'}]
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            // {
            //     text: '语言',
            //     items: [
            //         // { text: '中文', link: '/language/chinese/' },
            //         // { text: 'English', link: '/language/english/' }
            //     ]
            // },
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
            ['/guide/standard', '开发规范'],
            ['/guide/css', '公有css使用'],
            {
                title: '组件',
                collapsable: false,
                children: [
                    ['/guide/components/asp-tree-select', 'TreeSelect 下拉树'],
                    ['/guide/components/Card', 'Card 卡片'],
                    ['/guide/components/query-table', 'QueryTable 搜索表格'],
                    ['/guide/components/query-form', 'QueryForm 搜索框'],
                    ['/guide/components/dialog', 'Dialog 弹出窗']
                ]
            },
            {
                title: '解决方案',
                collapsable: false,
                children: [
                    ['/guide/echarts', 'Echarts 使用教程']
                ]
            }
        ]
    },
    markdown: {
        lineNumbers: true
    }
};
