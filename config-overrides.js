const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// babel plugin
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
// eslint config
const rewireEslint = require('react-app-rewire-eslint');
function overrideEslintOptions(options) {
  return options;
}
module.exports = function override(config, env) {
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
  }
  // 添加ant design
  config = injectBabelPlugin(
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: 'true' },
    ],
    config
  )
  config = injectBabelPlugin(["@babel/plugin-proposal-decorators", { legacy: true }], config)
  config = rewireEslint(config, env, overrideEslintOptions);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      'primary-color': '#495060',
      'menu-dark-bg': '#495060',
      'menu-dark-submenu-bg': '#363e4f',
      'normal-color': '#262a30',
      'text-color': '#262a30',
      'border-radius-base': '2px',
      'border-radius-sm': '2px',
      'font-family': 'Microsoft YaHei'
    },
    javascriptEnabled: true,
  })(config, env);
  if (!config.plugins) {
    config.plugins = [];
  }
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new BundleAnalyzerPlugin());
  }
  return config
}
