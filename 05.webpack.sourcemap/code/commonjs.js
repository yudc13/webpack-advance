// 定义一个一个对象（模块的映射关系）
var __webpack_modules__ = ({
	// 模块路径
	"./05.webpack.sourcemap/src/utils/common.js":
		(function (__unused_webpack_module, exports) {
			// 模块源代码
			const add = (n1, n2) => {
				return n1 + n2
			}

			exports.add = add

		})
});
// 模块缓存
var __webpack_module_cache__ = {};

// 加载模块的函数
function __webpack_require__(moduleId) {
	// 判断缓存是否存在该模块
	var cachedModule = __webpack_module_cache__[moduleId];
	if (cachedModule !== undefined) {
		return cachedModule.exports;
	}
	// 放入缓存
	var module = __webpack_module_cache__[moduleId] = { exports: {} };

	// 执行模块 会把模块存到exports对象上
	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

	// 返回module.exports对象
	return module.exports;
}

var __webpack_exports__ = {};
!function () {
	const {add} = __webpack_require__("./05.webpack.sourcemap/src/utils/common.js")
	console.log(add(1, 2))
}();
