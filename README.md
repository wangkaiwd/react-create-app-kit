## 
### 关闭`eslint`错误提示
> 这里只是通过网上的资料进行胡乱试，并不知道什么原因

这里由于没有执行`npm run eject`,将`webpack`的配置暴露出来，所以`.eslintignore`文件没有起作用。当我们安装了`react-app-rewire-eslint`并在`config-overrides.js`文件中进行配置之后，`.eslintignore`文件就会起作用了。