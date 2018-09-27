## react后台管理系统
### 1. 快速开始
克隆项目文件：
```
git clone git@github.com:wangkaiwd/react-create-app-kit.git
```

进入目录安装依赖：
> 安装前最好使用淘宝镜像，可以使用[`nrm`](https://cnodejs.org/topic/5326e78c434e04172c006826)进行`npm`源管理
```
npm i
```
开发：
```
npm start
// 打开 http://localhost:3000/
```
### 2. 项目介绍
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
* `webpackbar`: `webpack`打包进度条
* `webpack-bundle-analyzer`: `webpack`打包性能分析，方便看到资源占用
* `clean-webpack-plugin`: 每次打包之前将`build`目录下的文件都清空，然后再把打包好的文件放进去


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
       ├─ admin.js                  // 根组件
       ├─ admin.less
       ├─ api                       // 后端接口文件
       │    └─ index.js
       │─ styles                    // 公共样式
       │    ├─ container.less       // 页面布局容器
       │    ├─ mixins.less          // css混合器
       │    ├─ reset.less           // 重置css样式
       │    └─ var.less             // 全局变量表
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

### 3. 项目样式管理
公共样式：  
* `reset`: 样式重置及设置默认值，项目中使用了`github`的[`minnireset.css`](https://jgthms.com/minireset.css/)
* `var`: 存放`less`变量，主要包括颜色、字体、边距等，在项目中的`css`相关内容要使用`var`中定
义的变量，这样可以保证样式统一，并且方便后期的主题和相关样式修改
* `mixins`: 可复用的样式片段，包括清除浮动、圆角边框、文本溢出省略、文本强制换行等
* `container`: 将所有容器的样式提取到一个文件中，这样可以避免样式污染，提高代码复用性，在项目
开始之前，前端开发人员集中对页面进行统一分析，分解为模块并命名
    ```less
    // 带有scroll类名的是为了兼容滚动条
    // 页面整体布局结构
    .page {
      .page-wrapper {
        .page-header {
      
        }
        .page-content-scroll {
        
        }
        .page-footer {
      
        }
      }
      // 表格使用样式
      .table-list {
    
      }
    }
    ```
    之后随着项目的开发会在这个基础上进行一个扩展

**在修改公共样式的时候一定要与其它开发人员确认，防止重名，造成样式冲突，也可以让其他开发人员知道
你添加了新的公用模块，方便调用** 

局部组件样式：
> 通过[`css-modules`](https://github.com/css-modules/css-modules)来进行组件样式书写，防止样式冲突

使用`css-modules`后，相当于给每个`class`名外加了一个`:local`,以此来实现样式的局部化，如果要设置全局样式，
使用对应的`:global`
```css
.normal { color: green; }

/*与下面等价*/
:local(.normal) { color: green; }

/* 定义全局样式 */
:global(.btn) {
  color: red;
}

/* 定义多个全局样式 */
:global {
  .link {
    color: green;
  }
  .box {
    color: yellow;
  }
}
```

