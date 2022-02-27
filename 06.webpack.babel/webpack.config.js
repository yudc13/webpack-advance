const path = require("path");
const { DefinePlugin }  = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: path.resolve(__dirname, './src/hello.ts'),
	output: {
		// path 属性必须是一个绝对路径
		path: path.resolve(__dirname, './dist'),
		filename: "main.js",
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
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
				]
			},
			{
				test: /.ts$/,
				exclude: /node_modules/,
				use: [
					{
						// 依赖typescript
						// loader: "ts-loader" // ts语法有错误 编译不通过
						loader: "babel-loader", // 也可以转换ts代码 需要配合@babel/preset-typescript
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack Babel",
			template: path.resolve(__dirname, "./index.html")
		}),
		// 全局常量
		new DefinePlugin({
			BASE_URL: JSON.stringify('./')
		})
	]
}