/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/cover_load.js":
/*!******************************!*\
  !*** ./src/js/cover_load.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ coverLoad)
/* harmony export */ });
/* harmony import */ var _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_tools.js */ "./src/js/dom_tools.js");


function coverLoad() {
  const content = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.locateContainer();

  const cover = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('section', 'cover');
  content.appendChild(cover);

  const coverContent = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'cover__content');
  cover.appendChild(coverContent);

  const coverCard = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'cover__card');
  coverContent.appendChild(coverCard);

  const coverTitle = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('h1', 'cover__title');
  coverTitle.textContent = 'Vegan forever';
  coverCard.appendChild(coverTitle);

  const coverBody = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('p', 'cover__body');
  coverBody.textContent = `Serves meat, vegan options available. Thai food restaurant with 50% of dishes being
    vegan. Marked vegan dishes and options on the menu include snacks, soup, wok, curry, fried noodles and rice.
    Also serves plant based desserts and drinks. Has free Wi-Fi.`;
  coverCard.appendChild(coverBody);

  const navigation = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('nav', 'navigation');
  coverContent.appendChild(navigation);

  const homeNav = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'home-nav');
  homeNav.textContent = 'Home';
  navigation.appendChild(homeNav);

  const menuNav = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'menu-nav');
  menuNav.textContent = 'Menu';
  navigation.appendChild(menuNav);

  const contactNav = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'contact-nav');
  contactNav.textContent = 'Contact';
  navigation.appendChild(contactNav);

  const coverImage = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'cover__image');
  cover.appendChild(coverImage);
}



/***/ }),

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
/* harmony import */ var _cover_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover_load.js */ "./src/js/cover_load.js");


(0,_cover_load_js__WEBPACK_IMPORTED_MODULE_0__.default)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY292ZXJfbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvZG9tX3Rvb2xzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRTVCO0FBQ2Ysa0JBQWtCLDBEQUF3Qjs7QUFFMUMsZ0JBQWdCLHdEQUFzQjtBQUN0Qzs7QUFFQSx1QkFBdUIsd0RBQXNCO0FBQzdDOztBQUVBLG9CQUFvQix3REFBc0I7QUFDMUM7O0FBRUEscUJBQXFCLHdEQUFzQjtBQUMzQztBQUNBOztBQUVBLG9CQUFvQix3REFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHdEQUFzQjtBQUMzQzs7QUFFQSxrQkFBa0Isd0RBQXNCO0FBQ3hDO0FBQ0E7O0FBRUEsa0JBQWtCLHdEQUFzQjtBQUN4QztBQUNBOztBQUVBLHFCQUFxQix3REFBc0I7QUFDM0M7QUFDQTs7QUFFQSxxQkFBcUIsd0RBQXNCO0FBQzNDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOd0M7O0FBRXhDLHVEQUFTLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRvbVRvb2xzIGZyb20gJy4vZG9tX3Rvb2xzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY292ZXJMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9tVG9vbHMubG9jYXRlQ29udGFpbmVyKCk7XG5cbiAgY29uc3QgY292ZXIgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ2NvdmVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY292ZXIpO1xuXG4gIGNvbnN0IGNvdmVyQ29udGVudCA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb3Zlcl9fY29udGVudCcpO1xuICBjb3Zlci5hcHBlbmRDaGlsZChjb3ZlckNvbnRlbnQpO1xuXG4gIGNvbnN0IGNvdmVyQ2FyZCA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb3Zlcl9fY2FyZCcpO1xuICBjb3ZlckNvbnRlbnQuYXBwZW5kQ2hpbGQoY292ZXJDYXJkKTtcblxuICBjb25zdCBjb3ZlclRpdGxlID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnaDEnLCAnY292ZXJfX3RpdGxlJyk7XG4gIGNvdmVyVGl0bGUudGV4dENvbnRlbnQgPSAnVmVnYW4gZm9yZXZlcic7XG4gIGNvdmVyQ2FyZC5hcHBlbmRDaGlsZChjb3ZlclRpdGxlKTtcblxuICBjb25zdCBjb3ZlckJvZHkgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdwJywgJ2NvdmVyX19ib2R5Jyk7XG4gIGNvdmVyQm9keS50ZXh0Q29udGVudCA9IGBTZXJ2ZXMgbWVhdCwgdmVnYW4gb3B0aW9ucyBhdmFpbGFibGUuIFRoYWkgZm9vZCByZXN0YXVyYW50IHdpdGggNTAlIG9mIGRpc2hlcyBiZWluZ1xuICAgIHZlZ2FuLiBNYXJrZWQgdmVnYW4gZGlzaGVzIGFuZCBvcHRpb25zIG9uIHRoZSBtZW51IGluY2x1ZGUgc25hY2tzLCBzb3VwLCB3b2ssIGN1cnJ5LCBmcmllZCBub29kbGVzIGFuZCByaWNlLlxuICAgIEFsc28gc2VydmVzIHBsYW50IGJhc2VkIGRlc3NlcnRzIGFuZCBkcmlua3MuIEhhcyBmcmVlIFdpLUZpLmA7XG4gIGNvdmVyQ2FyZC5hcHBlbmRDaGlsZChjb3ZlckJvZHkpO1xuXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCduYXYnLCAnbmF2aWdhdGlvbicpO1xuICBjb3ZlckNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XG5cbiAgY29uc3QgaG9tZU5hdiA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdob21lLW5hdicpO1xuICBob21lTmF2LnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGhvbWVOYXYpO1xuXG4gIGNvbnN0IG1lbnVOYXYgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnbWVudS1uYXYnKTtcbiAgbWVudU5hdi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChtZW51TmF2KTtcblxuICBjb25zdCBjb250YWN0TmF2ID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbnRhY3QtbmF2Jyk7XG4gIGNvbnRhY3ROYXYudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoY29udGFjdE5hdik7XG5cbiAgY29uc3QgY292ZXJJbWFnZSA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb3Zlcl9faW1hZ2UnKTtcbiAgY292ZXIuYXBwZW5kQ2hpbGQoY292ZXJJbWFnZSk7XG59XG5cbiIsImZ1bmN0aW9uIGxvY2F0ZUNvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgc3R5bGUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHN0eWxlKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgeyBsb2NhdGVDb250YWluZXIsIGNyZWF0ZUVsZW1lbnQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjb3ZlckxvYWQgZnJvbSAnLi9jb3Zlcl9sb2FkLmpzJztcblxuY292ZXJMb2FkKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==