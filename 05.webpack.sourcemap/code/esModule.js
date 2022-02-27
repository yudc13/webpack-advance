"use strict";
var __webpack_modules__ = ({

	"./05.webpack.sourcemap/src/utils/format.js":
		(function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

			__webpack_require__.r(__webpack_exports__);
			// 把formatDate函数存到exports对象上
			__webpack_require__.d(__webpack_exports__, {
				"formatDate": function () {
					return formatDate;
				}
			});
			const formatDate = () => {
				return '2022-02-26'
			}

		})

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {
	// Check if module is in cache
	var cachedModule = __webpack_module_cache__[moduleId];
	if (cachedModule !== undefined) {
		return cachedModule.exports;
	}
	// Create a new module (and put it into the cache)
	var module = __webpack_module_cache__[moduleId] = {
		// no module.id needed
		// no module.loaded needed
		exports: {}
	};

	// Execute the module function
	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

	// Return the exports of the module
	return module.exports;
}

!function () {
	// 给__webpack_require__添加一个属性d -> function
	__webpack_require__.d = function (exports, definition) {
		for (var key in definition) {
			if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
				Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
			}
		}
	};
}();

!function () {
	// 给__webpack_require__添加一个属性o -> function
	// 判断某个属性是否是对象自身的属性
	__webpack_require__.o = function (obj, prop) {
		return Object.prototype.hasOwnProperty.call(obj, prop);
	}
}();

/* webpack/runtime/make namespace object */
!function () {
	// 如果模块是一个ES Module，那么就是调用该函数进行标识
	// 给__webpack_require__添加一个属性r -> function
	// 给exports添加属性{ __esModule: true }
	__webpack_require__.r = function (exports) {
		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
		}
		Object.defineProperty(exports, '__esModule', {value: true});
	};
}();

var __webpack_exports__ = {};
!function () {
	__webpack_require__.r(__webpack_exports__);
	var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./05.webpack.sourcemap/src/utils/format.js");


	console.log((0, _utils_format__WEBPACK_IMPORTED_MODULE_0__.formatDate)())
}();
