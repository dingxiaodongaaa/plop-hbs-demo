// Plop入口文件，需要导出一个函数
// 此函数接收一个plop对象，用于创建生成器任务

module.exports = plop => {
    plop.setGenerator('webpage', {
        description: 'create a new webPage',
        prompts: [
            {
                type: 'input',
                name: 'title',
                message: 'webPage title',
                default: 'document'
            }
        ],
        actions: [
            {
                type: 'add', // 代表添加文件
                path: 'webPages/{{title}}/{{title}}.html',
                templateFile: 'plop-templates/webPage.html.hbs'
            },
            {
                type: 'add', // 代表添加文件
                path: 'webPages/{{title}}/{{title}}.css',
                templateFile: 'plop-templates/webPage.css.hbs'
            },
            {
                type: 'add', // 代表添加文件
                path: 'webPages/{{title}}/{{title}}.js',
                templateFile: 'plop-templates/webPage.hbs'
            }
        ]
    })
}