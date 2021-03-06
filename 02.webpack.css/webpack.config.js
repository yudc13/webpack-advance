const path = require("path");

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
						loader: "css-loader"
					}
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
							importLoaders: 1
						}
					},
					{
						loader: "less-loader"
					}
				]
			}
		]
	}
}