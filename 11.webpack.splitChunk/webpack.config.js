const path = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  // entry: {
  //   main: {
  //     import: path.resolve(__dirname, './src/index.js'),
  //     dependOn: 'utils'
  //   },
  //   user: {
  //     import: path.resolve(__dirname, './src/user.js'),
  //     dependOn: 'utils'
  //   },
  //   utils: path.resolve(__dirname, './src/utils.js')
  // },
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    user: path.resolve(__dirname, './src/user.js')
  },
  output: {
    // path 属性必须是一个绝对路径
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js',
    chunkFilename: '[name].chunk.js',
    clean: true,
    // 资源的路径：output,publicPath + output.filename
    publicPath: './'
  },
  externals: {
    dayjs: JSON.stringify('dayjs')
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // plugins: [require.resolve('react-refresh/babel')]
            }
            // options: {
            // 	// preset 其实就是插件(plugins)的集合
            // 	presets: [
            // 		['@babel/preset-env', {
            // 			// 不建议在这里配置targets 建议使用.browserslistrc
            // 			// targets: ["chrome 88"]
            // 		}]
            // 	]
            // }
          }
          // {
          //   loader: 'eslint-loader'
          // }
        ]
      },
      {
        test: /.ts$/,
        exclude: /node_modules/,
        use: [
          {
            // 依赖typescript
            // loader: "ts-loader" // ts语法有错误 编译不通过
            loader: 'babel-loader' // 也可以转换ts代码 需要配合@babel/preset-typescript
          }
        ]
      },
      {
        test: /.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Babel',
      template: path.resolve(__dirname, './index.html')
    }),
    // 全局常量
    new DefinePlugin({
      BASE_URL: JSON.stringify('./')
    })
    // new ReactRefreshWebpackPlugin()
  ],
  devServer: {
    hot: true
    // static: {
    //   directory: path.join(__dirname, 'assets'),
    //   publicPath: '/serve-public-path-url'
    // }
  }
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 1,
  //     // maxSize: 0,
  //     minChunks: 1,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: 10
  //       },
  //       default: {
  //         minChunks: 2,
  //         filename: 'js/common_[id].js'
  //       }
  //       // utils: {
  //       //   test: /utils/,
  //       //   filename: 'js/[id]_utils.js'
  //       // }
  //     }
  //   }
  // }
}