/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/dom_tools.js":
/*!*****************************!*\
  !*** ./src/js/dom_tools.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locateContainer": () => (/* binding */ locateContainer),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function locateContainer() {
  const container = document.getElementById('content');
  return container;
};

function createElement(type, style) {
  const element = document.createElement(type);
  element.setAttribute('class', style);
  return element;
};



/***/ }),

/***/ "./src/js/page_load.js":
/*!*****************************!*\
  !*** ./src/js/page_load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_tools.js */ "./src/js/dom_tools.js");


function pageLoad() {
  const content = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.locateContainer();

  const cover = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('section', 'cover');
  content.appendChild(cover);

  const coverCard = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'cover__card');
  cover.appendChild(coverCard);

  const coverTitle = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('h1', 'cover__title');
  coverTitle.textContent = 'Vegan forever';
  coverCard.appendChild(coverTitle);

  const coverBody = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('p', 'cover__body');
  coverBody.textContent = `Serves meat, vegan options available. Thai food restaurant with 50% of dishes being
    vegan. Marked vegan dishes and options on the menu include snacks, soup, wok, curry, fried noodles and rice.
    Also serves plant based desserts and drinks. Has free Wi-Fi.`;
  coverCard.appendChild(coverBody);

  const coverImage = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'cover__image');
  cover.appendChild(coverImage);
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_load.js */ "./src/js/page_load.js");


// pageLoad();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvZG9tX3Rvb2xzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9wYWdlX2xvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDJDOztBQUU1QjtBQUNmLGtCQUFrQiwwREFBd0I7O0FBRTFDLGdCQUFnQix3REFBc0I7QUFDdEM7O0FBRUEsb0JBQW9CLHdEQUFzQjtBQUMxQzs7QUFFQSxxQkFBcUIsd0RBQXNCO0FBQzNDO0FBQ0E7O0FBRUEsb0JBQW9CLHdEQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsd0RBQXNCO0FBQzNDO0FBQ0E7Ozs7Ozs7O1VDdkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTnNDOztBQUV0QyxjIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2NhdGVDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHN0eWxlKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBzdHlsZSk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IHsgbG9jYXRlQ29udGFpbmVyLCBjcmVhdGVFbGVtZW50IH07IiwiaW1wb3J0ICogYXMgZG9tVG9vbHMgZnJvbSAnLi9kb21fdG9vbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvbVRvb2xzLmxvY2F0ZUNvbnRhaW5lcigpO1xuXG4gIGNvbnN0IGNvdmVyID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICdjb3ZlcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvdmVyKTtcblxuICBjb25zdCBjb3ZlckNhcmQgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY292ZXJfX2NhcmQnKTtcbiAgY292ZXIuYXBwZW5kQ2hpbGQoY292ZXJDYXJkKTtcblxuICBjb25zdCBjb3ZlclRpdGxlID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnaDEnLCAnY292ZXJfX3RpdGxlJyk7XG4gIGNvdmVyVGl0bGUudGV4dENvbnRlbnQgPSAnVmVnYW4gZm9yZXZlcic7XG4gIGNvdmVyQ2FyZC5hcHBlbmRDaGlsZChjb3ZlclRpdGxlKTtcblxuICBjb25zdCBjb3ZlckJvZHkgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdwJywgJ2NvdmVyX19ib2R5Jyk7XG4gIGNvdmVyQm9keS50ZXh0Q29udGVudCA9IGBTZXJ2ZXMgbWVhdCwgdmVnYW4gb3B0aW9ucyBhdmFpbGFibGUuIFRoYWkgZm9vZCByZXN0YXVyYW50IHdpdGggNTAlIG9mIGRpc2hlcyBiZWluZ1xuICAgIHZlZ2FuLiBNYXJrZWQgdmVnYW4gZGlzaGVzIGFuZCBvcHRpb25zIG9uIHRoZSBtZW51IGluY2x1ZGUgc25hY2tzLCBzb3VwLCB3b2ssIGN1cnJ5LCBmcmllZCBub29kbGVzIGFuZCByaWNlLlxuICAgIEFsc28gc2VydmVzIHBsYW50IGJhc2VkIGRlc3NlcnRzIGFuZCBkcmlua3MuIEhhcyBmcmVlIFdpLUZpLmA7XG4gIGNvdmVyQ2FyZC5hcHBlbmRDaGlsZChjb3ZlckJvZHkpO1xuXG4gIGNvbnN0IGNvdmVySW1hZ2UgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY292ZXJfX2ltYWdlJyk7XG4gIGNvdmVyLmFwcGVuZENoaWxkKGNvdmVySW1hZ2UpO1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZCBmcm9tICcuL3BhZ2VfbG9hZC5qcyc7XG5cbi8vIHBhZ2VMb2FkKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==