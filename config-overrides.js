const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackBar = require('webpackbar');
// babel plugin
const { injectBabelPlugin } = require('react-app-rewired');
// eslint config
const rewireEslint = require('react-app-rewire-eslint');

function overrideEslintOptions (options) {
  return options;
}

module.exports = function override (config, env) {
  config.resolve = {
    alias: { // 别名
      '@': path.resolve(__dirname, 'src/'),
      'components': path.resolve(__dirname, 'src/components'),
      'styles': path.resolve(__dirname, 'src/assets/styles'),
      'images': path.resolve(__dirname, 'src/assets/images'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'http': path.resolve(__dirname, 'src/http'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'store': path.resolve(__dirname, 'src/store'),
      'api': path.resolve(__dirname, 'src/api'),
      'app': path.resolve(__dirname, 'src/app'),
    },
    extensions: ['.jsx', '.scss', '.json', '.js'] // 扩展名
  };
  // 添加ant design
  config = injectBabelPlugin(
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: 'css' },
    ],
    config
  );
  // 修饰器
  config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { legacy: true }], config);
  // 必须在这里配置eslint之后才可以使用.gitignore来进行项目内容的eslint的忽略
  config = rewireEslint(config, env, overrideEslintOptions);
  if (!config.plugins) {
    config.plugins = [];
  }
  config.plugins.push(new WebpackBar());
  // 打包后资源分析
  // if (process.env.NODE_ENV === 'production') {
  //   config.plugins.push(new BundleAnalyzerPlugin());
  // }
  return config;
};
