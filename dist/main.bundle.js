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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#chessTiles {\r\n    display: grid;\r\n    grid-template-columns: repeat(8, 1fr);\r\n    grid-template-rows: repeat(8, 1fr); \r\n    width: 800px;\r\n    height: 800px; \r\n    background-color: #e0e0e0;\r\n    border: 2px solid #222020;\r\n    margin: auto;\r\n}\r\n\r\n.tiles {\r\n    border:#616161fc solid thin;\r\n}\r\n\r\n.tilesText {\r\n    display: flex;\r\n    justify-content: center;\r\n    justify-items: center;\r\n    color: red;\r\n    font-size: 30px;\r\n}\r\n\r\n.findPathButton {\r\n    display: flex;\r\n    margin-top: 20px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/adjacencyList.js":
/*!******************************!*\
  !*** ./src/adjacencyList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-restricted-syntax */\nclass Graph {\n  constructor() {\n    this.adjacencyList = {};\n    this.test = [];\n  }\n\n  addVertex(vertex) {\n    if (!this.adjacencyList[vertex]) {\n      this.adjacencyList[vertex] = [];\n    }\n  }\n\n  addEdge(vertex1, vertex2) {\n    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {\n      this.adjacencyList[vertex1].push(vertex2);\n    }\n  }\n\n  getShortestPath(starting, target) {\n    const queue = [[starting]];\n    const visited = new Set();\n    visited.add(starting);\n\n    while (queue.length > 0) {\n      const path = queue.shift();\n      const node = path[path.length - 1];\n\n      if (node === target) {\n        return path;\n      }\n\n      for (const neighbor of this.adjacencyList[node]) {\n        if (!visited.has(neighbor)) {\n          visited.add(neighbor);\n          const newPath = path.slice();\n          newPath.push(neighbor);\n          queue.push(newPath);\n        }\n      }\n    }\n    return [];\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);\n\n\n//# sourceURL=webpack:///./src/adjacencyList.js?");

/***/ }),

/***/ "./src/findShortestPath.js":
/*!*********************************!*\
  !*** ./src/findShortestPath.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/tile.js\");\n/* harmony import */ var _adjacencyList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjacencyList */ \"./src/adjacencyList.js\");\n\n\n\n// Holds all nodes\nconst chessPiece = new Map();\nconst graph = new _adjacencyList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n// return node\nfunction retrieveNode(nodeName) {\n  const node = chessPiece.get(nodeName);\n  return node;\n}\n\n// Record all connected edges to adjacency list\nfunction RecordToAdjacencyList(queue, parentVertex) {\n  // eslint-disable-next-line no-restricted-syntax\n  for (const element of queue) {\n    if (element !== undefined) {\n      const elementName = `[${element.start[0]}, ${element.start[1]}]`;\n      graph.addEdge(parentVertex, elementName);\n    }\n  }\n}\n\nfunction checkIfPassingLimit(titleLocation) {\n  if (titleLocation[0] > 7 || titleLocation[0] < 0) {\n    return null;\n  } if (titleLocation[1] > 7 || titleLocation[1] < 0) {\n    return null;\n  }\n  return titleLocation;\n}\n\nfunction setupVertex() {\n  // Add vertexes in adjacency list for each key in hash map\n  // eslint-disable-next-line no-restricted-syntax\n  for (const key of chessPiece.keys()) {\n    graph.addVertex(key);\n  }\n}\n\n// Create node that collects all 8 possible moves\nfunction setUpTileNodes() {\n  for (let i = 0; i < 8; i += 1) {\n    for (let j = 0; j < 8; j += 1) {\n      const start = [i, j]; // If passing the limit then null\n      const rightUpOne = checkIfPassingLimit([start[0] + 2, start[1] + 1]);\n      const rightUpTwo = checkIfPassingLimit([start[0] + 1, start[1] + 2]);\n      const leftUpOne = checkIfPassingLimit([start[0] + 2, start[1] - 1]);\n      const leftUpTwo = checkIfPassingLimit([start[0] + 1, start[1] - 2]);\n      const rightDownOne = checkIfPassingLimit([start[0] - 2, start[1] + 1]);\n      const rightDownTwo = checkIfPassingLimit([start[0] - 1, start[1] + 2]);\n      const leftDownOne = checkIfPassingLimit([start[0] - 2, start[1] - 1]);\n      const leftDownTwo = checkIfPassingLimit([start[0] - 1, start[1] - 2]);\n\n      // Create Node\n      const tile = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n        start,\n        leftUpOne,\n        leftUpTwo,\n        rightUpOne,\n        rightUpTwo,\n        rightDownOne,\n        rightDownTwo,\n        leftDownOne,\n        leftDownTwo,\n      );\n\n      // Add to hash maps\n      chessPiece.set(`[${i}, ${j}]`, tile);\n    }\n  }\n  setupVertex();\n}\n\n// Get all 8 edges in the tile node and return as a list\nfunction getAllConnectedNode(startingNode) {\n  const queue = [];\n  queue.push(retrieveNode(`[${startingNode.leftUpOne ? startingNode.leftUpOne.join(', ') : 'null'}]`));\n  queue.push(retrieveNode(`[${startingNode.leftUpTwo ? startingNode.leftUpTwo.join(', ') : 'null'}]`));\n\n  queue.push(retrieveNode(`[${startingNode.rightUpOne ? startingNode.rightUpOne.join(', ') : 'null'}]`));\n  queue.push(retrieveNode(`[${startingNode.rightUpTwo ? startingNode.rightUpTwo.join(', ') : 'null'}]`));\n\n  queue.push(retrieveNode(`[${startingNode.leftDownOne ? startingNode.leftDownOne.join(', ') : 'null'}]`));\n  queue.push(retrieveNode(`[${startingNode.leftDownTwo ? startingNode.leftDownTwo.join(', ') : 'null'}]`));\n\n  queue.push(retrieveNode(`[${startingNode.rightDownOne ? startingNode.rightDownOne.join(', ') : 'null'}]`));\n  queue.push(retrieveNode(`[${startingNode.rightDownTwo ? startingNode.rightDownTwo.join(', ') : 'null'}]`));\n\n  return queue;\n}\n\nfunction RecordAllEdgesToAdjacentList() {\n  // Uses my own bfs to traverse in every tiles\n  const visited = new Set();\n  let queue = [];\n  queue.push(retrieveNode('[0, 0]'));\n\n  while (queue.length > 0) {\n    const element = queue.shift();\n\n    if (element !== undefined && element !== null) {\n      const elementName = `[${element.start[0]}, ${element.start[1]}]`;\n      if (!visited.has(elementName)) {\n        // Get all 8 edges in the tile node and return as a list\n        const connectedToCurrentElement = getAllConnectedNode(retrieveNode(elementName));\n        RecordToAdjacencyList(connectedToCurrentElement, elementName, graph);\n        queue = queue.concat(connectedToCurrentElement);\n        queue = queue.filter((value) => value !== undefined);\n        visited.add(elementName);\n      }\n    }\n  }\n}\n\nfunction KnightsTravail(start, end) {\n  setUpTileNodes(); // Setup node and create vertex key\n  RecordAllEdgesToAdjacentList(); // Record All edges in each vertex\n  const path = graph.getShortestPath(start, end); // Get shortest path via bfs\n  return path;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KnightsTravail);\n\n\n//# sourceURL=webpack:///./src/findShortestPath.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _findShortestPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findShortestPath */ \"./src/findShortestPath.js\");\n\n\n\nlet knightPlaced = false;\nlet targetPlaced = false;\nlet showedTilesCoord = false;\nlet knightLocation = '';\nlet targetLocation = '';\n\nfunction CreateTileEvents(tile) {\n  tile.addEventListener('click', (event) => {\n    const { target } = event;\n    const setStyle = (element, color, backgroundColor) => {\n      Object.assign(element.style, {\n        color,\n        backgroundColor,\n      });\n    };\n\n    if (!knightPlaced) {\n      knightLocation = target.tileCoords;\n      setStyle(target, 'white', '#3498db');\n      knightPlaced = true;\n    } else if (!targetPlaced) {\n      targetLocation = target.tileCoords;\n      setStyle(target, 'white', '#e74c3c');\n      targetPlaced = true;\n    }\n  });\n\n  tile.addEventListener('mouseover', (event) => {\n    const { target } = event;\n    target.style.boxShadow = '0px 0px 10px 4px green, 0px 0px 20px 8px lime';\n  });\n\n  tile.addEventListener('mouseout', (event) => {\n    const { target } = event;\n    target.style.boxShadow = '';\n  });\n}\n\nfunction createPixel(number) {\n  const canvas = document.getElementById('chessTiles');\n\n  let IsWhite = true;\n  const startBlack = new Set([8, 24, 40, 56]);\n  const startWhite = new Set([0, 16, 32, 48]);\n\n  for (let i = 0; i < number * number; i += 1) {\n    if (startBlack.has(i)) {\n      IsWhite = false;\n    } else if (startWhite.has(i)) {\n      IsWhite = true;\n    }\n\n    const tile = document.createElement('div');\n    // adds attributes\n    Object.assign(tile, {\n      color: IsWhite,\n      tileCoords: `[${i % number}, ${Math.floor(i / number)}]`,\n    });\n    tile.style.color = IsWhite ? 'black' : 'white'; // adjust depending on the tile color\n\n    CreateTileEvents(tile); // Add events Listeners\n\n    tile.classList.add('tiles');\n    tile.style.backgroundColor = IsWhite ? ('white') : ('black');\n    IsWhite = !IsWhite;\n\n    canvas.appendChild(tile);\n  }\n}\n\nfunction GetAllTilesConnected(tiles) {\n  const pathLocations = [];\n  const allTiles = document.getElementsByClassName('tiles');\n\n  for (let j = 0; j < tiles.length; j += 1) {\n    const targetTile = tiles[j];\n\n    for (let i = 0; i < allTiles.length; i += 1) {\n      const tileElement = allTiles[i];\n\n      if (tileElement.tileCoords === targetTile) {\n        pathLocations.push(tileElement);\n        break;\n      }\n    }\n  }\n\n  return pathLocations;\n}\n\nfunction ColorAllPath(pathLocations) {\n  let counter = 1;\n  for (let i = 0; i < pathLocations.length; i += 1) {\n    const tile = pathLocations[i];\n    tile.style.backgroundColor = 'yellow';\n    tile.innerText = counter;\n    tile.style.color = 'blue';\n    tile.style.fontSize = '24px';\n    tile.style.textAlign = 'center';\n    tile.style.display = 'flex';\n    tile.style.justifyContent = 'center';\n    tile.style.alignItems = 'center';\n    tile.style.height = '100px';\n\n    counter += 1; // Increment the counter\n  }\n}\n\nfunction FindShortestPathFunction() {\n  if (knightLocation !== '' && targetLocation !== '') {\n    const path = GetAllTilesConnected((0,_findShortestPath__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(knightLocation, targetLocation));\n    ColorAllPath(path);\n  }\n}\n\nfunction CreateControllerButtons() {\n  const controller = document.getElementById('controls');\n  // Find Path\n  const FindPathButton = document.createElement('button');\n\n  Object.assign(FindPathButton, {\n    className: 'findPathButton',\n    innerText: 'Find Path',\n  });\n\n  FindPathButton.addEventListener('click', () => {\n    FindShortestPathFunction();\n  });\n\n  // Show coords\n  const ShowLocationToggleButton = document.createElement('button');\n  Object.assign(ShowLocationToggleButton, {\n    className: 'findPathButton',\n    innerText: 'Show Coords',\n  });\n\n  ShowLocationToggleButton.addEventListener('click', () => {\n    const tiles = document.getElementsByClassName('tiles');\n    const showCoordinates = !showedTilesCoord;\n    for (let i = 0; i < tiles.length; i += 1) {\n      tiles[i].innerText = showCoordinates ? tiles[i].tileCoords : '';\n    }\n    showedTilesCoord = showCoordinates;\n  });\n\n  controller.appendChild(FindPathButton);\n  controller.appendChild(ShowLocationToggleButton);\n}\n\n// Initialization\nfunction Initialization() {\n  createPixel(8);\n  CreateControllerButtons();\n}\n\nInitialization();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tile.js":
/*!*********************!*\
  !*** ./src/tile.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Tile {\n  constructor(\n    start,\n    leftUpOne,\n    leftUpTwo,\n    rightUpOne,\n    rightUpTwo,\n    rightDownOne,\n    rightDownTwo,\n    leftDownOne,\n    leftDownTwo,\n  ) {\n    this.start = start;\n    this.leftUpOne = leftUpOne;\n    this.leftUpTwo = leftUpTwo;\n    this.rightUpOne = rightUpOne;\n    this.rightUpTwo = rightUpTwo;\n    this.rightDownOne = rightDownOne;\n    this.rightDownTwo = rightDownTwo;\n    this.leftDownOne = leftDownOne;\n    this.leftDownTwo = leftDownTwo;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tile);\n\n\n//# sourceURL=webpack:///./src/tile.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;