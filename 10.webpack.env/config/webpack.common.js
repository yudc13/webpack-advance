const path = require('path')
// 这里的env可以获取命令行参数
module.exports = (env) => {
  //设置变量可以在babel.config.js 中取到对应的值
  // process.env.isProduction = env.production
  return {
    context: path.resolve(__dirname, '../'),
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, '../dist')
    }
  }
}