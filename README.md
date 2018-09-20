## react后台管理系统
项目技术栈： [`react:16.5`](https://react.docschina.org/)+ 
[`react-router v4`](https://reacttraining.com/react-router/web/guides/philosophy) + 
[`ant design`](https://ant.design/index-cn)

项目以`react-create-app`为基础进行搭建，将其中项目不需要的`npm`依赖进行了删除，并根据
实际开发添加了相应的依赖文件和对应`webpack`配置

项目中相应依赖安装：
* `antd`: 蚂蚁金服开源的`react ui`框架
* `axios`: `http`请求模块，可用与前端任何场景
* `nprogress`: 页面顶部加载条
* `animate.css`: 简单的`css`动画库
* `react-photoswipe`: 图片弹层查看插件
* `babel-plugin-transform-decorators-legacy`: 支持装饰器语法
* `babel-plugin-transform-class-properties`: 支持以箭头函数的形式书写`class`中的方法
* `webpackbar`: `webpack`打包进度条

点击查看[项目原型图](https://vze48j.axshare.com)

项目目录结构
```
admin
├─ .gitignore                       // git忽略文件
├─ README.md                        // 项目说明文档
├─ config                           // 配置目录
│    ├─ env.js
│    ├─ paths.js
│    ├─ polyfills.js
│    ├─ webpack.config.dev.js
│    ├─ webpack.config.prod.js
│    └─ webpackDevServer.config.js
├─ package-lock.json
├─ package.json
├─ public                           // index.html模板文件
│    ├─ favicon.ico
│    ├─ index.html
│    └─ manifest.json
├─ scripts                          // 构建脚本目录
│    ├─ build.js
│    └─ start.js
└─ src                              // 项目源码
       ├─ App.js                    // 根组件
       ├─ App.less
       ├─ api                       // 后端接口文件
       │    └─ index.js
       ├─ assets                    // 静态资源存放
       │    ├─ images               // 图片
       │    └─ styles               // 公共样式
       │         ├─ container.less  // 页面布局容器
       │         ├─ mixins.less     // css混合器
       │         ├─ reset.less      // 重置css样式
       │         └─ var.less        // 全局变量表
       ├─ components                // 通用组件
       │    ├─ SideMenu
       │    ├─ TableList
       │    └─ TopHeader
       ├─ http                      // http请求封装
       │    ├─ axiosConfig.js       // axios配置文件
       │    ├─ serverConfig.js      // 请求服务配置文件
       │    └─ tool.js              // 请求相关工具函数
       ├─ index.js                  // 入口文件
       ├─ pages                     // 页面文件
       │    ├─ about
       │    ├─ inbox
       │    └─ login
       ├─ registerServiceWorker.js
       └─ utils                     // 通过方法封装
              └─ regConfig.js       // 常用正则配置文件
```