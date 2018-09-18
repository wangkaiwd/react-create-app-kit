## react后台管理系统
项目技术栈： [`react:16.5`](https://react.docschina.org/)+ 
[`react-router v4`](https://reacttraining.com/react-router/web/guides/philosophy) + 
[`ant design`](https://ant.design/index-cn)

项目中相应依赖安装：
* `antd`: 蚂蚁金服开源的`react ui`框架
* `axios`: `http`请求模块，可用与前端任何场景
* `nprogress`: 页面顶部加载条
* `photoswipe`: 图片弹层查看插件
* `babel-plugin-transform-decorators-legacy`: 支持装饰器语法
* `babel-plugin-transform-class-properties`: 支持以箭头函数的形式书写`class`中的方法
* `webpackbar`: `webpack`打包进度条

项目目录结构
```
tree
├─ .gitignore                   // git忽略文件
├─ README.md                    // 项目说明文档
├─ config                       
│    ├─ env.js
│    ├─ paths.js
│    ├─ polyfills.js
│    ├─ webpack.config.dev.js
│    ├─ webpack.config.prod.js
│    └─ webpackDevServer.config.js
├─ package-lock.json
├─ package.json
├─ public
│    ├─ favicon.ico
│    ├─ index.html
│    └─ manifest.json
├─ scripts
│    ├─ build.js
│    └─ start.js
└─ src
       ├─ App.js                // 根组件
       ├─ App.less
       ├─ api                   // 后端接口文件
       │    └─ index.js
       ├─ assets                // 静态资源存放
       │    ├─ images           // 图片
       │    └─ styles           // 公共样式
       ├─ components            // 通用组件
       │    ├─ SideMenu
       │    ├─ TableList
       │    └─ TopHeader
       ├─ http                  // http请求封装
       │    ├─ axiosConfig.js
       │    ├─ serverConfig.js
       │    └─ tool.js
       ├─ index.js              // 入口文件
       ├─ pages                 // 页面文件
       │    ├─ about
       │    ├─ inbox
       │    └─ login
       ├─ registerServiceWorker.js
       └─ utils                 // 通过方法封装
              └─ regConfig.js   
```