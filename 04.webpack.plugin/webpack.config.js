const path = require("path");
const { DefinePlugin }  = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		// path 属性必须是一个绝对路径
		path: path.resolve(__dirname, './dist'),
		filename: "main.js",
	},
	module: {
		rules: [
			{
				test: /.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							// 解决@import xxx.css 不被post-css处理的问题
							// 是的经过@import xxx.css引入的样式再次通过post-css处理
							importLoaders: 1
						}
					},
					{
						loader: "postcss-loader",
						// options: {
						// 	postcssOptions: {
						// 		plugins: [
						// 			require('autoprefixer')
						// 		]
						// 	}
						// }
					},
				]
			},
			{
				test: /.less$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 2
						}
					},
					{
						loader: "postcss-loader",
						// options: {
						// 	postcssOptions: {
						// 		plugins: [
						// 			require('autoprefixer')
						// 		]
						// 	}
						// }
					},
					{
						loader: "less-loader"
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack Plugin",
			template: path.resolve(__dirname, "./index.html")
		}),
		// 全局常量
		new DefinePlugin({
			BASE_URL: JSON.stringify('./')
		})
	]
}