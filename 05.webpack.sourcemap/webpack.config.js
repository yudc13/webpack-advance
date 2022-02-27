const path = require("path");
const { DefinePlugin }  = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development",
	devtool: "source-map",
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		// path 属性必须是一个绝对路径
		path: path.resolve(__dirname, './dist'),
		filename: "main.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack Sourcemap",
			template: path.resolve(__dirname, "./index.html")
		}),
		// 全局常量
		new DefinePlugin({
			BASE_URL: JSON.stringify('./')
		})
	]
}