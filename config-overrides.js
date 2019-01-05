const path = require('path')
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
  config.module.rules = config.module.rules.slice(1)
  config.resolve = {
    alias: { // 别名
      '@': path.resolve(__dirname, 'src/'),
      'styles': path.resolve(__dirname, 'src/assets/styles'),
      'iamges': path.resolve(__dirname, 'src/assets/images'),
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
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  )
  return config
}
