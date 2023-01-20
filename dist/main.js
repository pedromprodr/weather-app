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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: black;\\r\\n}\\r\\n.material-symbols-outlined {\\r\\n  font-variation-settings: \\\"FILL\\\" 0, \\\"wght\\\" 400, \\\"GRAD\\\" 0, \\\"opsz\\\" 48;\\r\\n}\\r\\n#spinner {\\r\\n  display: none; /* hide the spinner by default */\\r\\n  border: 16px solid #f3f3f3; /* create a border */\\r\\n  border-top: 16px solid #3700b3; /* add a colored top border */\\r\\n  border-radius: 50%; /* make the spinner circular */\\r\\n  width: 120px;\\r\\n  height: 120px;\\r\\n  animation: spin 2s linear infinite; /* animation to rotate the spinner */\\r\\n  position: absolute;\\r\\n  top: 50%; /* move the spinner to the center of the parent element */\\r\\n  left: 50%; /* move the spinner to the center of the parent element */\\r\\n  transform: translate(-50%, -50%); /* move the spinner up and left by 50% of its own size */\\r\\n\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  0% {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n  100% {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n#overlay {\\r\\n    display: none; /* hide the overlay by default */\\r\\n    position: fixed; /* position the overlay on top of the page */\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0, 0.5); /* make the overlay semi-transparent black */\\r\\n    z-index: 10; /* make sure the overlay is on top of other elements */\\r\\n  }\\r\\n#content-container {\\r\\n  margin-top: 7%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n#city-container {\\r\\n  /*position: absolute;\\r\\n  width: 602px;\\r\\n  height: 101px;\\r\\n  right: 8px;\\r\\n  top: 609px;*/\\r\\n  align-self: flex-end;\\r\\n  margin-right: 5vw;\\r\\n  display: grid;\\r\\n  width: 25vw;\\r\\n  grid-template-columns: 2fr 8fr;\\r\\n  grid-template-rows: 2fr 0.1fr 1fr;\\r\\n}\\r\\n#city-text {\\r\\n  grid-column: 1/3;\\r\\n  grid-row: 1/2;\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  font-size: 5%;\\r\\n  line-height: 120px;\\r\\n  font-family: \\\"Lexend\\\";\\r\\n  display: flex;\\r\\n  align-self: flex-end;\\r\\n  justify-self: flex-end;\\r\\n  color: #ffffff;\\r\\n  font-size: 6vw;\\r\\n  white-space: nowrap; /* prevent text from breaking into new lines */\\r\\n  text-overflow: ellipsis; /* add ellipsis when text overflows */\\r\\n  overflow: hidden; /* hide the overflowing text */\\r\\n}\\r\\n#search-field {\\r\\n  grid-row: 3/4;\\r\\n  grid-column: 2/3;\\r\\n  background-color: transparent;\\r\\n  border: 0px;\\r\\n  font-family: \\\"Lexend\\\";\\r\\n  font-weight: 200;\\r\\n  border-bottom: 3px solid;\\r\\n  border-color: whitesmoke;\\r\\n  color: #ffffff;\\r\\n  font-size: 20px;\\r\\n  text-align: right;\\r\\n  appearance: none;\\r\\n}\\r\\n\\r\\n#search-field:focus {\\r\\n  outline: none;\\r\\n}\\r\\n#search-button {\\r\\n  grid-row: 3/4;\\r\\n  grid-column: 1/2;\\r\\n  background: none;\\r\\n  color: white;\\r\\n  border: none;\\r\\n  padding: 0;\\r\\n  font: inherit;\\r\\n  cursor: pointer;\\r\\n  outline: inherit;\\r\\n}\\r\\n#search-button > span {\\r\\n  font-size: 40px;\\r\\n}\\r\\n#card-container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 0.5vw;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n#today-info-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n\\r\\n#today-info-container {\\r\\n  margin: 10px;\\r\\n  font-family: \\\"Lexend\\\";\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  font-size: 44px;\\r\\n  line-height: 40px;\\r\\n\\r\\n  color: #121212;\\r\\n}\\r\\n\\r\\n#today-minmax {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: flex-start;\\r\\n  align-items: flex-end;\\r\\n  gap: 10px;\\r\\n  margin: 10px;\\r\\n  margin-bottom: 30px;\\r\\n  font-family: \\\"Lexend\\\";\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  font-size: 40px;\\r\\n  line-height: 40px;\\r\\n  color: #121212;\\r\\n}\\r\\n#today-mint {\\r\\n  font-size: 34px;\\r\\n  margin-bottom:20%;\\r\\n}\\r\\n#today-maxt {\\r\\n  margin-bottom: 20%;\\r\\n}\\r\\n\\r\\n#today-current{\\r\\n    font-size: 6vw;\\r\\n    margin-bottom: 20%;\\r\\n}\\r\\n#today-image{\\r\\n    grid-column: 3/4;\\r\\n    padding-right: 20px;\\r\\n    width: 100%;\\r\\n}\\r\\n#today-card {\\r\\n  box-sizing: border-box;\\r\\n  position: relative;\\r\\n  display: grid;\\r\\n  grid-template-columns: 3fr 0.8fr 2fr;\\r\\n  width: 24vw;\\r\\n  height: 50vh;\\r\\n  padding-left: 10px;\\r\\n  background: #03dac6;\\r\\n  border: 1px solid rgba(0, 0, 0, 0.1);\\r\\n  border-radius: 2px;\\r\\n}\\r\\n\\r\\n.day-card {\\r\\n  box-sizing: border-box;\\r\\n\\r\\n  position: relative;\\r\\n  width: 14vw;\\r\\n  height: 30vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content:space-between;\\r\\n    align-items: flex-start;\\r\\n  background: #3700b3;\\r\\n  border: 1px solid rgba(0, 0, 0, 0.1);\\r\\n  border-radius: 2px;\\r\\n}\\r\\n.day-info-container{\\r\\n    display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: flex-start;\\r\\n  align-items: flex-end;\\r\\n  gap: 10px;\\r\\n  margin: 10px;\\r\\n  margin-bottom: 30px;\\r\\n  font-family: \\\"Lexend\\\";\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  font-size: 30px;\\r\\n  line-height: 40px;\\r\\n  color: #f3f3f3;\\r\\n}\\r\\n.day-mint{\\r\\n    font-size: 24px;\\r\\n    margin-top: 0;\\r\\n    margin-bottom: 20%;\\r\\n}\\r\\n.day-maxt{\\r\\n    margin-top: 0;\\r\\n    margin-bottom: 20%;\\r\\n}\\r\\n#today-text {\\r\\n  margin: 14px;\\r\\n  font-family: \\\"Lexend\\\";\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  font-size: 42px;\\r\\n  line-height: 40px;\\r\\n\\r\\n  color: #121212;\\r\\n}\\r\\n\\r\\n.day-text {\\r\\n  margin: 10px;\\r\\n  font-family: \\\"Lexend\\\";\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  font-size: 32px;\\r\\n  line-height: 40px;\\r\\n\\r\\n  color: #ffffff;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

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

eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather.js */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ \"./src/modules/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\nconst contentContainer = document.createElement('div');\r\ncontentContainer.id = \"content-container\"\r\ndocument.body.appendChild(contentContainer);\r\n\r\n\r\n(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.weatherCards)();\r\n(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.citySearch)();\r\n(0,_modules_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherForToday)(\"Lisbon\");\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"citySearch\": () => (/* binding */ citySearch),\n/* harmony export */   \"weatherCards\": () => (/* binding */ weatherCards)\n/* harmony export */ });\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ \"./src/modules/weather.js\");\n\r\n\r\nconst spinner = document.querySelector(\"#spinner\");\r\nconst overlay = document.querySelector(\"#overlay\");\r\n\r\nasync function changeCity() {\r\n  let city = document.getElementById(\"search-field\");\r\n  overlay.style.display = \"block\";\r\n  spinner.style.display = \"block\"; // show the spinner\r\n\r\n  let citydata = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.getCity)(city.value);\r\n  try {\r\n    let cityName = await citydata.name;\r\n    let countryName = await citydata.country;\r\n    document.getElementById(\"city-text\").textContent =\r\n      cityName + \", \" + countryName;\r\n\r\n    let textLength = document.getElementById(\"city-text\").textContent.length;\r\n    let desiredWidth = 0.5;\r\n    let fontSize = (desiredWidth * 100) / textLength;\r\n    document.getElementById(\"city-text\").style.fontSize = fontSize + \"vw\";\r\n\r\n    await refreshTemperatures(cityName);\r\n\r\n    overlay.style.display = \"none\";\r\n    spinner.style.display = \"none\";\r\n  } catch (err) {\r\n    console.error(err);\r\n    overlay.style.display = \"none\";\r\n    spinner.style.display = \"none\";\r\n  }\r\n}\r\n\r\nasync function refreshTemperatures(cityName) {\r\n  let data = await (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherForToday)(cityName);\r\n  console.log(data);\r\n  console.log(data.list);\r\n  let todayData = data.list[0];\r\n\r\n  document.getElementById(\"today-current\").innerHTML =\r\n    parseInt(todayData.main.temp) + \"ºC\";\r\n  document.getElementById(\"today-maxt\").innerHTML =\r\n    parseInt(todayData.main.temp_max) + \"ºC\";\r\n  document.getElementById(\"today-mint\").innerHTML =\r\n    parseInt(todayData.main.temp_min) + \"ºC\";\r\n  let image = fetch(\r\n    \"http://openweathermap.org/img/wn/\" + todayData.weather[0].icon + \"@2x.png\"\r\n  ).then(function (response) {\r\n    document.getElementById(\"today-image\").setAttribute(\"src\", response.url);\r\n  });\r\n  let maxTemp = -100;\r\n  let minTemp = 100;\r\n  let icon = null;\r\n  for (let i = 1; i <= 40; i++) {\r\n    if (i < 40) {\r\n      console.log(data.list[i]);\r\n      let dayData = data.list[i];\r\n\r\n      if (maxTemp < parseInt(dayData.main.temp_max)) {\r\n        maxTemp = parseInt(dayData.main.temp_max);\r\n        icon = dayData.weather[0].icon;\r\n      }\r\n\r\n      if (minTemp > parseInt(dayData.main.temp_min)) {\r\n        minTemp = parseInt(dayData.main.temp_min);\r\n      }\r\n    }\r\n    if (i % 10 == 0) {\r\n      let pos = i / 10 - 1;\r\n      console.log(maxTemp);\r\n      console.log(minTemp);\r\n      console.log(pos);\r\n      document.getElementById(\"day\" + pos + \"-maxt\").innerHTML =\r\n        parseInt(maxTemp) + \"ºC\";\r\n      document.getElementById(\"day\" + pos + \"-mint\").innerHTML =\r\n        parseInt(minTemp) + \"ºC\";\r\n      let image = fetch(\r\n        \"http://openweathermap.org/img/wn/\" + icon + \"@2x.png\"\r\n      ).then(function (response) {\r\n        document\r\n          .getElementById(\"day\" + pos + \"-image\")\r\n          .setAttribute(\"src\", response.url);\r\n      });\r\n\r\n      maxTemp = -100;\r\n      minTemp = 100;\r\n      icon = null;\r\n    }\r\n  }\r\n}\r\n\r\nfunction citySearch() {\r\n  const cityContainer = document.createElement(\"div\");\r\n  const contentContainer = document.getElementById(\"content-container\");\r\n  cityContainer.id = \"city-container\";\r\n\r\n  const cityText = document.createElement(\"div\");\r\n  cityText.id = \"city-text\";\r\n  cityText.textContent = \"Lisbon, PT\";\r\n\r\n  const citySearchField = document.createElement(\"input\");\r\n  citySearchField.setAttribute(\"type\", \"text\");\r\n  citySearchField.setAttribute(\"id\", \"search-field\");\r\n  citySearchField.setAttribute(\"placeholder\", \"Search...\");\r\n\r\n  const citySearchB = document.createElement(\"button\");\r\n  citySearchB.setAttribute(\"id\", \"search-button\");\r\n  citySearchB.setAttribute(\"type\", \"search-button\");\r\n  citySearchB.innerHTML =\r\n    \"<span class='material-symbols-outlined'> search </span>\";\r\n  citySearchB.addEventListener(\"click\", () => {\r\n    changeCity();\r\n    document.getElementById(\"search-field\").value = \"\";\r\n  });\r\n\r\n  citySearchField.addEventListener(\"keypress\", function (event) {\r\n    if (event.key === \"Enter\") {\r\n      event.preventDefault();\r\n      document.getElementById(\"search-button\").click();\r\n    }\r\n  });\r\n  cityContainer.appendChild(cityText);\r\n  cityContainer.appendChild(citySearchField);\r\n  cityContainer.appendChild(citySearchB);\r\n\r\n  contentContainer.appendChild(cityContainer);\r\n}\r\n\r\nfunction weatherCards() {\r\n  const cardContainer = document.createElement(\"div\");\r\n  cardContainer.id = \"card-container\";\r\n\r\n  const todayCard = document.createElement(\"div\");\r\n  todayCard.id = \"today-card\";\r\n\r\n  const date = new Date();\r\n  let p = document.createElement(\"p\");\r\n  p.id = \"today-text\";\r\n  p.textContent = date.getDate() + \"/\" + date.getMonth() + 1;\r\n  let infoCont = document.createElement(\"div\");\r\n  infoCont.id = \"today-info-container\";\r\n\r\n  const todayImg = document.createElement(\"img\");\r\n  todayImg.id = \"today-image\";\r\n\r\n  let todayCurr = document.createElement(\"p\");\r\n  todayCurr.id = \"today-current\";\r\n  //REMOVER DEPOIS - APENAS PARA TESTE DE UI\r\n  todayCurr.textContent = \"27'C\";\r\n\r\n  let todayMinMax = document.createElement(\"div\");\r\n  todayMinMax.id = \"today-minmax\";\r\n\r\n  let todayMaxT = document.createElement(\"p\");\r\n  todayMaxT.id = \"today-maxt\";\r\n  //REMOVER DEPOIS - APENAS PARA TESTE DE UI\r\n  todayMaxT.textContent = \"36'C\";\r\n\r\n  let todayMinT = document.createElement(\"p\");\r\n  todayMinT.id = \"today-mint\";\r\n  //REMOVER DEPOIS - APENAS PARA TESTE DE UI\r\n  todayMinT.textContent = \"21'C\";\r\n\r\n  todayMinMax.appendChild(todayMaxT);\r\n  todayMinMax.appendChild(todayMinT);\r\n\r\n  infoCont.appendChild(p);\r\n  infoCont.appendChild(todayCurr);\r\n  infoCont.appendChild(todayMinMax);\r\n\r\n  todayCard.appendChild(infoCont);\r\n  todayCard.appendChild(todayImg);\r\n\r\n  cardContainer.appendChild(todayCard);\r\n\r\n  for (let i = 0; i < 4; i++) {\r\n    const element = document.createElement(\"div\");\r\n    element.id = \"day\" + i + \"-card\";\r\n    element.classList.add(\"day-card\");\r\n    p = document.createElement(\"p\");\r\n    p.id = \"day\" + i + \"-text\";\r\n    p.classList.add(\"day-text\");\r\n    p.textContent = date.getDate() + i + 1 + \"/\" + date.getMonth() + 1;\r\n\r\n    let dayinfoCont = document.createElement(\"div\");\r\n    dayinfoCont.id = \"day\" + i + \"info-container\";\r\n    dayinfoCont.classList.add(\"day-info-container\");\r\n\r\n    let dayMaxT = document.createElement(\"p\");\r\n    dayMaxT.id = \"day\" + i + \"-maxt\";\r\n    //REMOVER DEPOIS - APENAS PARA TESTE DE UI\r\n    dayMaxT.textContent = \"36'C\";\r\n    dayMaxT.classList.add(\"day-maxt\");\r\n\r\n    let dayMinT = document.createElement(\"p\");\r\n    dayMinT.id = \"day\" + i + \"-mint\";\r\n    //REMOVER DEPOIS - APENAS PARA TESTE DE UI\r\n    dayMinT.textContent = \"36'C\";\r\n    dayMinT.classList.add(\"day-mint\");\r\n\r\n    dayinfoCont.appendChild(dayMaxT);\r\n    dayinfoCont.appendChild(dayMinT);\r\n\r\n    const imgday = document.createElement(\"img\");\r\n    imgday.id = \"day\" + i + \"-image\";\r\n\r\n    element.appendChild(p);\r\n    element.appendChild(imgday);\r\n    element.appendChild(dayinfoCont);\r\n\r\n    cardContainer.appendChild(element);\r\n  }\r\n\r\n  document.getElementById(\"content-container\").appendChild(cardContainer);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCity\": () => (/* binding */ getCity),\n/* harmony export */   \"getWeatherForToday\": () => (/* binding */ getWeatherForToday)\n/* harmony export */ });\n// APIKEY - 1ffdc9ad57e02cc6f9d10ae53a341c18\r\n\r\nasync function getCity(city) {\r\n  const url =\r\n    \"http://api.openweathermap.org/geo/1.0/direct?q=\" +\r\n    city +\r\n    \"&limit=1&appid=1ffdc9ad57e02cc6f9d10ae53a341c18\";\r\n  const response = await fetch(url, { mode: \"cors\" });\r\n\r\n  const data = await response.json();\r\n\r\n  return data[0];\r\n}\r\n\r\nasync function getWeatherForToday(cityName) {\r\n\r\n  const cityData = await getCity(cityName);\r\n\r\n  const lat = await cityData.lat;\r\n  const lon = await cityData.lon;\r\n\r\n\r\n  \r\n  const url =\r\n    \"http://api.openweathermap.org/data/2.5/forecast?lat=\" +\r\n    lat +\r\n    \"&lon=\" +\r\n    lon +\r\n    \"&units=metric&appid=1ffdc9ad57e02cc6f9d10ae53a341c18\";\r\n  var data = await fetch(url, { mode: \"cors\" })\r\n    .then(function (response) {\r\n      return response.json();\r\n    })\r\n    .catch(function (err) {\r\n      console.error(err);\r\n    });\r\n  return data;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/weather.js?");

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