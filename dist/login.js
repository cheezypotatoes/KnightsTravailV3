/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create_nav.js":
/*!***************************!*\
  !*** ./src/create_nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navigation: () => (/* binding */ navigation)\n/* harmony export */ });\n\r\n\r\nfunction navigation() {\r\n    const list = [\"Home.html\", \"Login.html\", \"About.html\"];\r\n\r\n    const nav = document.createElement(\"nav\");\r\n\r\n    list.forEach(name => {\r\n        const btn = document.createElement(\"button\");\r\n        btn.innerHTML = name.split(\".\")[0];\r\n        btn.addEventListener(\"click\", () => {\r\n            console.log(`${name.split(\".\")[0]} was pressed`);\r\n            window.location.href = name;\r\n        });\r\n\r\n        nav.appendChild(btn);\r\n    });\r\n\r\n    document.body.appendChild(nav);\r\n}\r\n\r\n    \r\n\n\n//# sourceURL=webpack:///./src/create_nav.js?");

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_nav */ \"./src/create_nav.js\");\n\r\n\r\n(0,_create_nav__WEBPACK_IMPORTED_MODULE_0__.navigation)();\r\n\r\nfunction create_input_labels(){\r\n    const labels = [\"Username\", \"Password\"];\r\n\r\n    const container = document.createElement(\"div\");\r\n\r\n    labels.forEach(label =>{\r\n        container.appendChild(document.createElement(\"label\")).innerHTML = label;\r\n        container.appendChild(document.createElement(\"input\"));\r\n    })\r\n\r\n    container.appendChild(document.createElement(\"button\")).innerHTML = \"Submit\";\r\n    document.body.appendChild(container);\r\n}\r\n\r\ncreate_input_labels();\n\n//# sourceURL=webpack:///./src/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/login.js");
/******/ 	
/******/ })()
;