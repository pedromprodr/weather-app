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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: black;\\n}\\n.material-symbols-outlined {\\n  font-variation-settings: \\\"FILL\\\" 0, \\\"wght\\\" 400, \\\"GRAD\\\" 0, \\\"opsz\\\" 48;\\n}\\n#spinner {\\n  display: none; /* hide the spinner by default */\\n  border: 16px solid #f3f3f3; /* create a border */\\n  border-top: 16px solid #3700b3; /* add a colored top border */\\n  border-radius: 50%; /* make the spinner circular */\\n  width: 120px;\\n  height: 120px;\\n  animation: spin 2s linear infinite; /* animation to rotate the spinner */\\n  position: absolute;\\n  top: 50%; /* move the spinner to the center of the parent element */\\n  left: 50%; /* move the spinner to the center of the parent element */\\n  transform: translate(-50%, -50%); /* move the spinner up and left by 50% of its own size */\\n\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n#overlay {\\n    display: none; /* hide the overlay by default */\\n    position: fixed; /* position the overlay on top of the page */\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    background-color: rgba(0, 0, 0, 0.5); /* make the overlay semi-transparent black */\\n    z-index: 10; /* make sure the overlay is on top of other elements */\\n  }\\n#content-container {\\n  margin-top: 7%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n#city-container {\\n  /*position: absolute;\\n  width: 602px;\\n  height: 101px;\\n  right: 8px;\\n  top: 609px;*/\\n  align-self: flex-end;\\n  margin-right: 5vw;\\n  display: grid;\\n  width: 25vw;\\n  grid-template-columns: 2fr 8fr;\\n  grid-template-rows: 2fr 0.1fr 1fr;\\n}\\n#city-text {\\n  grid-column: 1/3;\\n  grid-row: 1/2;\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 5%;\\n  line-height: 120px;\\n  font-family: \\\"Lexend\\\";\\n  display: flex;\\n  align-self: flex-end;\\n  justify-self: flex-end;\\n  color: #ffffff;\\n  font-size: 6vw;\\n  white-space: nowrap; /* prevent text from breaking into new lines */\\n  text-overflow: ellipsis; /* add ellipsis when text overflows */\\n  overflow: hidden; /* hide the overflowing text */\\n}\\n#search-field {\\n  grid-row: 3/4;\\n  grid-column: 2/3;\\n  background-color: transparent;\\n  border: 0px;\\n  font-family: \\\"Lexend\\\";\\n  font-weight: 200;\\n  border-bottom: 3px solid;\\n  border-color: whitesmoke;\\n  color: #ffffff;\\n  font-size: 20px;\\n  text-align: right;\\n  appearance: none;\\n}\\n\\n#search-field:focus {\\n  outline: none;\\n}\\n#search-button {\\n  grid-row: 3/4;\\n  grid-column: 1/2;\\n  background: none;\\n  color: white;\\n  border: none;\\n  padding: 0;\\n  font: inherit;\\n  cursor: pointer;\\n  outline: inherit;\\n}\\n#search-button > span {\\n  font-size: 40px;\\n}\\n#card-container {\\n  display: flex;\\n  flex-direction: row;\\n  gap: 0.5vw;\\n  justify-content: space-between;\\n}\\n#today-info-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n}\\n\\n\\n#today-info-container {\\n  margin: 10px;\\n  font-family: \\\"Lexend\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 44px;\\n  line-height: 40px;\\n\\n  color: #121212;\\n}\\n\\n#today-minmax {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: flex-end;\\n  gap: 10px;\\n  margin: 10px;\\n  margin-bottom: 30px;\\n  font-family: \\\"Lexend\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 40px;\\n  line-height: 40px;\\n  color: #121212;\\n}\\n#today-mint {\\n  font-size: 34px;\\n  margin-bottom: 0;\\n}\\n#today-maxt {\\n  margin-bottom: 0;\\n}\\n\\n#today-current{\\n    font-size: 6vw;\\n}\\n#today-image{\\n    grid-column: 3/4;\\n    padding-right: 20px;\\n    width: 100%;\\n}\\n#today-card {\\n  box-sizing: border-box;\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 3fr 0.8fr 2fr;\\n  width: 24vw;\\n  height: 50vh;\\n  padding-left: 10px;\\n  background: #03dac6;\\n  border: 1px solid rgba(0, 0, 0, 0.1);\\n  border-radius: 2px;\\n}\\n\\n.day-card {\\n  box-sizing: border-box;\\n\\n  position: relative;\\n  width: 14vw;\\n  height: 30vh;\\n\\n  background: #3700b3;\\n  border: 1px solid rgba(0, 0, 0, 0.1);\\n  border-radius: 2px;\\n}\\n\\n#today-text {\\n  margin: 14px;\\n  font-family: \\\"Lexend\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 42px;\\n  line-height: 40px;\\n\\n  color: #121212;\\n}\\n\\n.day-text {\\n  margin: 10px;\\n  font-family: \\\"Lexend\\\";\\n  font-style: normal;\\n  font-weight: 400;\\n  font-size: 32px;\\n  line-height: 40px;\\n\\n  color: #ffffff;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather.js */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ \"./src/modules/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nconst contentContainer = document.createElement('div');\ncontentContainer.id = \"content-container\"\ndocument.body.appendChild(contentContainer);\n\n\n(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.weatherCards)();\n(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.citySearch)();\n(0,_modules_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherForToday)(\"Lisbon\");\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"citySearch\": () => (/* binding */ citySearch),\n/* harmony export */   \"weatherCards\": () => (/* binding */ weatherCards)\n/* harmony export */ });\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ \"./src/modules/weather.js\");\n\n\nconst spinner = document.querySelector(\"#spinner\");\nconst overlay = document.querySelector(\"#overlay\");\n\n\nasync function changeCity() {\n    let city = document.getElementById(\"search-field\");\n    overlay.style.display = \"block\";\n    spinner.style.display = \"block\"; // show the spinner\n\n    let citydata = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.getCity)(city.value);\n    try {\n        let cityName = await citydata.name;\n        let countryName = await citydata.country;\n        document.getElementById(\"city-text\").textContent =\n            cityName + \", \" + countryName;\n\n        let textLength = document.getElementById(\"city-text\").textContent.length;\n        let desiredWidth = 0.5;\n        let fontSize = (desiredWidth * 100) / textLength;\n        document.getElementById(\"city-text\").style.fontSize = fontSize + \"vw\";\n\n        await refreshTemperatures(cityName);\n\n        overlay.style.display = \"none\";\n        spinner.style.display = \"none\";\n    }\n    catch {\n        console.log(\"ERRO\");\n        overlay.style.display = \"none\";\n        spinner.style.display = \"none\";\n    }\n\n}\n\nasync function refreshTemperatures(cityName) {\n    let data = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherForToday)(cityName);\n    console.log(data);\n    console.log(data.list);\n    let todayData = data.list[0];\n\n    document.getElementById(\"today-current\").innerHTML = parseInt(todayData.main.temp) + \"ºC\";\n    document.getElementById(\"today-maxt\").innerHTML = parseInt(todayData.main.temp_max) + \"ºC\";\n    document.getElementById(\"today-mint\").innerHTML = parseInt(todayData.main.temp_min) + \"ºC\";\n    let image = fetch(\"http://openweathermap.org/img/wn/\"+todayData.weather[0].icon+\"@2x.png\").then(\n        function (response) {\n            document.getElementById(\"today-image\").setAttribute(\"src\",response.url);\n        }\n    )\n\n\n    for (let i = 1; i < 40; i++) {\n\n    }\n\n\n}\n\nfunction citySearch() {\n    const cityContainer = document.createElement(\"div\");\n    const contentContainer = document.getElementById(\"content-container\");\n    cityContainer.id = \"city-container\";\n\n    const cityText = document.createElement(\"div\");\n    cityText.id = \"city-text\";\n    cityText.textContent = \"Lisbon, PT\";\n\n    const citySearchField = document.createElement(\"input\");\n    citySearchField.setAttribute(\"type\", \"text\");\n    citySearchField.setAttribute(\"id\", \"search-field\");\n    citySearchField.setAttribute(\"placeholder\", \"Search...\");\n\n    const citySearchB = document.createElement(\"button\");\n    citySearchB.setAttribute(\"id\", \"search-button\");\n    citySearchB.setAttribute(\"type\", \"search-button\");\n    citySearchB.innerHTML =\n        \"<span class='material-symbols-outlined'> search </span>\";\n    citySearchB.addEventListener(\"click\", () => {\n        changeCity();\n        document.getElementById(\"search-field\").value = \"\";\n    });\n\n    citySearchField.addEventListener(\"keypress\", function (event) {\n\n        if (event.key === \"Enter\") {\n            event.preventDefault();\n            document.getElementById(\"search-button\").click();\n\n        }\n    });\n    cityContainer.appendChild(cityText);\n    cityContainer.appendChild(citySearchField);\n    cityContainer.appendChild(citySearchB);\n\n    contentContainer.appendChild(cityContainer);\n}\n\nfunction weatherCards() {\n    const cardContainer = document.createElement(\"div\");\n    cardContainer.id = \"card-container\";\n\n    const todayCard = document.createElement(\"div\");\n    todayCard.id = \"today-card\";\n\n    const date = new Date();\n    let p = document.createElement(\"p\");\n    p.id = \"today-text\";\n    p.textContent = date.getDate() + \"/\" + date.getMonth() + 1;\n    let infoCont = document.createElement(\"div\");\n    infoCont.id = \"today-info-container\";\n\n    const todayImg = document.createElement('img');\n    todayImg.id = \"today-image\";\n\n    let todayCurr = document.createElement(\"p\");\n    todayCurr.id = \"today-current\";\n    //REMOVER DEPOIS - APENAS PARA TESTE DE UI\n    todayCurr.textContent = \"27'C\";\n\n    let todayMinMax = document.createElement(\"div\");\n    todayMinMax.id = \"today-minmax\";\n\n\n    let todayMaxT = document.createElement(\"p\");\n    todayMaxT.id = \"today-maxt\";\n    //REMOVER DEPOIS - APENAS PARA TESTE DE UI\n    todayMaxT.textContent = \"36'C\";\n\n    let todayMinT = document.createElement(\"p\");\n    todayMinT.id = \"today-mint\";\n    //REMOVER DEPOIS - APENAS PARA TESTE DE UI\n    todayMinT.textContent = \"21'C\";\n\n    todayMinMax.appendChild(todayMaxT);\n    todayMinMax.appendChild(todayMinT);\n\n    infoCont.appendChild(p);\n    infoCont.appendChild(todayCurr);\n    infoCont.appendChild(todayMinMax);\n\n    todayCard.appendChild(infoCont);\n    todayCard.appendChild(todayImg);\n\n    cardContainer.appendChild(todayCard);\n\n    for (let i = 0; i < 4; i++) {\n        const element = document.createElement(\"div\");\n        element.id = \"day\" + i + \"-card\";\n        element.classList.add(\"day-card\");\n        p = document.createElement(\"p\");\n        p.id = \"day\" + i + \"-text\";\n        p.classList.add(\"day-text\");\n        p.textContent = date.getDate() + i + 1 + \"/\" + date.getMonth() + 1;\n\n\n        const imgday = document.createElement('img');\n        imgday.id = \"day\" + i + \"-image\";\n\n        element.appendChild(p);\n        element.appendChild(imgday);\n\n        cardContainer.appendChild(element);\n    }\n\n    document.getElementById(\"content-container\").appendChild(cardContainer);\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCity\": () => (/* binding */ getCity),\n/* harmony export */   \"getWeatherForToday\": () => (/* binding */ getWeatherForToday)\n/* harmony export */ });\n// APIKEY - 1ffdc9ad57e02cc6f9d10ae53a341c18\n\nasync function getCity(city) {\n  const url =\n    \"http://api.openweathermap.org/geo/1.0/direct?q=\" +\n    city +\n    \"&limit=1&appid=1ffdc9ad57e02cc6f9d10ae53a341c18\";\n  const response = await fetch(url, { mode: \"cors\" });\n\n  const data = await response.json();\n\n  return data[0];\n}\n\nasync function getWeatherForToday(cityName) {\n\n  const cityData = await getCity(cityName);\n\n  const lat = await cityData.lat;\n  const lon = await cityData.lon;\n\n\n  \n  const url =\n    \"http://api.openweathermap.org/data/2.5/forecast?lat=\" +\n    lat +\n    \"&lon=\" +\n    lon +\n    \"&units=metric&appid=1ffdc9ad57e02cc6f9d10ae53a341c18\";\n  var data = await fetch(url, { mode: \"cors\" })\n    .then(function (response) {\n      return response.json();\n    })\n    .catch(function (err) {\n      console.error(err);\n    });\n  return data;\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

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