const path = require("path");

module.exports = {
	mode: "development",
	// 字符串
	// entry: path.resolve(__dirname, './src/index.js'),
	// 数组
	// entry: [path.resolve(__dirname, './src/index.js')],
	// 对象
	entry: {
		// chunk的名称就是bundle
		bundle: {
			import: path.resolve(__dirname, './src/index.js')
		}
	},
	output: {
		// path 属性必须是一个绝对路径
		path: path.resolve(__dirname, './dist'),
		filename: "base.js",
	}
}