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

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/index.scss?");

/***/ }),

/***/ "./components/ThemeObserver.js":
/*!*************************************!*\
  !*** ./components/ThemeObserver.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PrefersSchemePub\": () => (/* binding */ PrefersSchemePub)\n/* harmony export */ });\nconst colorThemeHandler = (nextTheme) => {\n  const rootNode = document.querySelector(':root');\n  const preparedClasses = rootNode.classList.value.split(' ').filter(c => Boolean(c))\n  if (preparedClasses.includes(nextTheme)) {\n    return;\n  }\n  const r1 = preparedClasses\n    .filter(c => c !== 'dark')\n    .filter(c => c !== 'light')\n    .filter(c => Boolean(c));\n  preparedClasses.forEach(c => rootNode.classList.remove(c));\n  [nextTheme, ...r1].forEach(c => rootNode.classList.add(c));\n\n} \n\n\nconst colorAccentHandler = (nextAccent) => {\n  const rootNode = document.querySelector(':root');\n  rootNode.classList.toggle(nextAccent);\n  console.log(rootNode);\n  // const currentAccent = document.body.classList.value;\n  // console.log(currentAccent);\n  \n  // if (nextAccent === currentAccent) {\n  //   return;\n  // }\n  \n  // if (currentAccent) {\n  //   document.body.classList.toggle(currentAccent)\n  // }\n  \n  // document.body.classList.toggle(nextAccent);\n}\n\n/* ===== */\nclass PrefersSchemePub {\n  #events; /* Array of sub */\n  \n  constructor() {\n    this.#events = [];\n  }\n\n  add(eventName, f) {\n    this.#events.push({eventName, f})\n  }\n  \n  remove(eventName) {\n    this.#events = this.#events.filter(sub.eventName !== eventName);\n  }\n  \n  emit(eventName, payload) {\n    this.#events.forEach(sub => {\n        if(sub.eventName === eventName) {\n            sub.f(payload);\n        }\n    })\n  }\n}\n\nconst colorSheme = new PrefersSchemePub();\n\n// colorSheme.add('change_color_accent', colorAccentHandler);\ncolorSheme.add('change_color_theme', colorThemeHandler);\n\nwindow.f1 = colorSheme.emit.bind(colorSheme);\n\n//# sourceURL=webpack:///./components/ThemeObserver.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _components_ThemeObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ThemeObserver */ \"./components/ThemeObserver.js\");\n\n\n\n\n// new Theme('blue');\n\nconsole.error('Failed to load resource: the server responded with a status of 402 (Payment Required) ');\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;