/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/contact_load.js":
/*!********************************!*\
  !*** ./src/js/contact_load.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactLoad)
/* harmony export */ });
/* harmony import */ var _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_tools.js */ "./src/js/dom_tools.js");


function contactLoad() {
  const content = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.locateContainer();

  const contact = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('section', 'contact');
  content.appendChild(contact);

  const contactTitle = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('h2', 'contact__title');
  contactTitle.textContent = 'Contact us:';
  contact.appendChild(contactTitle);

  const contactBody = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('p', 'contact__body');
  contactBody.textContent = 'To contact us fill this form and press send';
  contact.appendChild(contactBody);

  const contactForm = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'contact__form');
  contact.appendChild(contactForm);

  const emailLabel = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('label', 'contact__label form-label');
  emailLabel.textContent = 'E-mail';
  contactForm.appendChild(emailLabel);

  const emailInput = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('input', 'contact__input form-control');
  emailInput.setAttribute('type', 'email');
  contactForm.appendChild(emailInput);

  const messageLabel = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('label', 'contact__label form-label');
  messageLabel.textContent = 'Message';
  contactForm.appendChild(messageLabel);

  const messageInput = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('textarea', 'contact__input form-control');
  messageInput.setAttribute('cols', '30');
  messageInput.setAttribute('rows', '5');
  contactForm.appendChild(messageInput);

  const contactSubmit = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('button', 'contact__submit btn btn-success');
  contactSubmit.textContent = 'Send';
  contactForm.appendChild(contactSubmit);
}



/***/ }),

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
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "removeSection": () => (/* binding */ removeSection)
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

function findSection(section) {
  const element = document.querySelector(`.${section}`);
  return element;
}

function removeSection(section) {
  const element = findSection(section);
  element.remove();
}



/***/ }),

/***/ "./src/js/home_load.js":
/*!*****************************!*\
  !*** ./src/js/home_load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeLoad)
/* harmony export */ });
/* harmony import */ var _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_tools.js */ "./src/js/dom_tools.js");


function homeLoad() {
  const content = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.locateContainer();

  const home = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('section', 'home');
  content.appendChild(home);

  const homeTitle = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('h2', 'home__title');
  homeTitle.textContent = 'About us';
  home.appendChild(homeTitle);

  const homeBody = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('p', 'home__body');
  homeBody.textContent = `Our restaurant is the best restaurant you can find in California for vegan people.
  We have all types of vegan food and you will be very pleased and healthier when eating here.`;
  home.appendChild(homeBody);

  const homeImage = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'home__image');
  home.appendChild(homeImage);
}



/***/ }),

/***/ "./src/js/menu_load.js":
/*!*****************************!*\
  !*** ./src/js/menu_load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuLoad)
/* harmony export */ });
/* harmony import */ var _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_tools.js */ "./src/js/dom_tools.js");


const menuItems = [
  {
    title: 'Butternut Mole Enchiladas',
    body: 'A delicious meal based on the popular Mexican Enchiladas',
    image: '/src/images/butternut-mole-enchiladas-1594659122.jpg'
  },
  {
    title: 'Greek Chiken Wings',
    body: 'Fried chicken wings with delicious Greek salad',
    image: '/src/images/ghk080116ykfeature02-1567609381.png'
  },
  {
    title: 'Swedish Salmon Salad',
    body: 'The best Swedish quality salmon with cooked green beans',
    image: '/src/images/low-calorie-meals-1556302866.png'
  },
  {
    title: 'Spring Salad',
    body: 'Vegan fresh green salad with cucumber and corn',
    image: '/src/images/spring-salad-recipe-with-apricot-vinaigrette-1611256040.jpg'
  },
  {
    title: 'Heirloom Tomato Salad',
    body: 'A variety of tomatoes and peppers in one spicy salad',
    image: '/src/images/heirloom-tomato-salad-lead-1589406257.jpg'
  },
  {
    title: 'Vegan Strawberry Cookies',
    body: 'Your classic strawberry cookies but 100% vegan',
    image: '/src/images/strawberry-oatmeal-cookies-1609276240.jpg'
  }
]

function menuCard(container, menuItem) {
  const div = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'col-12 col-md-6 col-xl-4');
  container.appendChild(div);

  const menuCard = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'menu__card');
  div.appendChild(menuCard);

  const menuImage = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('img', 'menu__image');
  menuImage.setAttribute('src', menuItem.image);
  menuCard.appendChild(menuImage);

  const menuContent = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'menu__content');
  menuCard.appendChild(menuContent);

  const menuTitle = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('h3', 'menu__title');
  menuTitle.textContent = menuItem.title;
  menuContent.appendChild(menuTitle);

  const menuBody = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('p', 'menu__body');
  menuBody.textContent = menuItem.body;
  menuContent.appendChild(menuBody);
}

function menuLoad() {
  const content = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.locateContainer();

  const menuSection = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('section', 'menu-section');
  content.appendChild(menuSection);

  const menuMainTitle = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('h2', 'menu__main-title');
  menuMainTitle.textContent = 'Our Menu';
  menuSection.appendChild(menuMainTitle);

  const menu = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'menu row g-5');
  menuSection.appendChild(menu);
  
  menuItems.forEach(element => {
    menuCard(menu, element);
  });
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
/* harmony import */ var _cover_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cover_load.js */ "./src/js/cover_load.js");
/* harmony import */ var _home_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home_load.js */ "./src/js/home_load.js");
/* harmony import */ var _menu_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu_load.js */ "./src/js/menu_load.js");
/* harmony import */ var _contact_load_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact_load.js */ "./src/js/contact_load.js");





(0,_cover_load_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_home_load_js__WEBPACK_IMPORTED_MODULE_1__.default)();
// menuLoad();
// contactLoad();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29udGFjdF9sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9jb3Zlcl9sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9kb21fdG9vbHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2hvbWVfbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvbWVudV9sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRTVCO0FBQ2Ysa0JBQWtCLDBEQUF3Qjs7QUFFMUMsa0JBQWtCLHdEQUFzQjtBQUN4Qzs7QUFFQSx1QkFBdUIsd0RBQXNCO0FBQzdDO0FBQ0E7O0FBRUEsc0JBQXNCLHdEQUFzQjtBQUM1QztBQUNBOztBQUVBLHNCQUFzQix3REFBc0I7QUFDNUM7O0FBRUEscUJBQXFCLHdEQUFzQjtBQUMzQztBQUNBOztBQUVBLHFCQUFxQix3REFBc0I7QUFDM0M7QUFDQTs7QUFFQSx1QkFBdUIsd0RBQXNCO0FBQzdDO0FBQ0E7O0FBRUEsdUJBQXVCLHdEQUFzQjtBQUM3QztBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHdEQUFzQjtBQUM5QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkMyQzs7QUFFNUI7QUFDZixrQkFBa0IsMERBQXdCOztBQUUxQyxnQkFBZ0Isd0RBQXNCO0FBQ3RDOztBQUVBLHVCQUF1Qix3REFBc0I7QUFDN0M7O0FBRUEsb0JBQW9CLHdEQUFzQjtBQUMxQzs7QUFFQSxxQkFBcUIsd0RBQXNCO0FBQzNDO0FBQ0E7O0FBRUEsb0JBQW9CLHdEQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsd0RBQXNCO0FBQzNDOztBQUVBLGtCQUFrQix3REFBc0I7QUFDeEM7QUFDQTs7QUFFQSxrQkFBa0Isd0RBQXNCO0FBQ3hDO0FBQ0E7O0FBRUEscUJBQXFCLHdEQUFzQjtBQUMzQztBQUNBOztBQUVBLHFCQUFxQix3REFBc0I7QUFDM0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsUUFBUTtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMkM7O0FBRTVCO0FBQ2Ysa0JBQWtCLDBEQUF3Qjs7QUFFMUMsZUFBZSx3REFBc0I7QUFDckM7O0FBRUEsb0JBQW9CLHdEQUFzQjtBQUMxQztBQUNBOztBQUVBLG1CQUFtQix3REFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVBLG9CQUFvQix3REFBc0I7QUFDMUM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsd0RBQXNCO0FBQ3BDOztBQUVBLG1CQUFtQix3REFBc0I7QUFDekM7O0FBRUEsb0JBQW9CLHdEQUFzQjtBQUMxQztBQUNBOztBQUVBLHNCQUFzQix3REFBc0I7QUFDNUM7O0FBRUEsb0JBQW9CLHdEQUFzQjtBQUMxQztBQUNBOztBQUVBLG1CQUFtQix3REFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVlO0FBQ2Ysa0JBQWtCLDBEQUF3Qjs7QUFFMUMsc0JBQXNCLHdEQUFzQjtBQUM1Qzs7QUFFQSx3QkFBd0Isd0RBQXNCO0FBQzlDO0FBQ0E7O0FBRUEsZUFBZSx3REFBc0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7VUMxRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDRjtBQUNBO0FBQ007O0FBRTVDLHVEQUFTO0FBQ1Qsc0RBQVE7QUFDUjtBQUNBLGlCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkb21Ub29scyBmcm9tICcuL2RvbV90b29scy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9tVG9vbHMubG9jYXRlQ29udGFpbmVyKCk7XG5cbiAgY29uc3QgY29udGFjdCA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAnY29udGFjdCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2gyJywgJ2NvbnRhY3RfX3RpdGxlJyk7XG4gIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzOic7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcblxuICBjb25zdCBjb250YWN0Qm9keSA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ3AnLCAnY29udGFjdF9fYm9keScpO1xuICBjb250YWN0Qm9keS50ZXh0Q29udGVudCA9ICdUbyBjb250YWN0IHVzIGZpbGwgdGhpcyBmb3JtIGFuZCBwcmVzcyBzZW5kJztcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0Qm9keSk7XG5cbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY29udGFjdF9fZm9ybScpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcblxuICBjb25zdCBlbWFpbExhYmVsID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCAnY29udGFjdF9fbGFiZWwgZm9ybS1sYWJlbCcpO1xuICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0UtbWFpbCc7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICdjb250YWN0X19pbnB1dCBmb3JtLWNvbnRyb2wnKTtcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG5cbiAgY29uc3QgbWVzc2FnZUxhYmVsID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnbGFiZWwnLCAnY29udGFjdF9fbGFiZWwgZm9ybS1sYWJlbCcpO1xuICBtZXNzYWdlTGFiZWwudGV4dENvbnRlbnQgPSAnTWVzc2FnZSc7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VMYWJlbCk7XG5cbiAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCAnY29udGFjdF9faW5wdXQgZm9ybS1jb250cm9sJyk7XG4gIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAnMzAnKTtcbiAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgncm93cycsICc1Jyk7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG5cbiAgY29uc3QgY29udGFjdFN1Ym1pdCA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdjb250YWN0X19zdWJtaXQgYnRuIGJ0bi1zdWNjZXNzJyk7XG4gIGNvbnRhY3RTdWJtaXQudGV4dENvbnRlbnQgPSAnU2VuZCc7XG4gIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNvbnRhY3RTdWJtaXQpO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBkb21Ub29scyBmcm9tICcuL2RvbV90b29scy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvdmVyTG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvbVRvb2xzLmxvY2F0ZUNvbnRhaW5lcigpO1xuXG4gIGNvbnN0IGNvdmVyID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICdjb3ZlcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvdmVyKTtcblxuICBjb25zdCBjb3ZlckNvbnRlbnQgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY292ZXJfX2NvbnRlbnQnKTtcbiAgY292ZXIuYXBwZW5kQ2hpbGQoY292ZXJDb250ZW50KTtcblxuICBjb25zdCBjb3ZlckNhcmQgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY292ZXJfX2NhcmQnKTtcbiAgY292ZXJDb250ZW50LmFwcGVuZENoaWxkKGNvdmVyQ2FyZCk7XG5cbiAgY29uc3QgY292ZXJUaXRsZSA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2gxJywgJ2NvdmVyX190aXRsZScpO1xuICBjb3ZlclRpdGxlLnRleHRDb250ZW50ID0gJ1ZlZ2FuIGZvcmV2ZXInO1xuICBjb3ZlckNhcmQuYXBwZW5kQ2hpbGQoY292ZXJUaXRsZSk7XG5cbiAgY29uc3QgY292ZXJCb2R5ID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgncCcsICdjb3Zlcl9fYm9keScpO1xuICBjb3ZlckJvZHkudGV4dENvbnRlbnQgPSBgU2VydmVzIG1lYXQsIHZlZ2FuIG9wdGlvbnMgYXZhaWxhYmxlLiBUaGFpIGZvb2QgcmVzdGF1cmFudCB3aXRoIDUwJSBvZiBkaXNoZXMgYmVpbmdcbiAgICB2ZWdhbi4gTWFya2VkIHZlZ2FuIGRpc2hlcyBhbmQgb3B0aW9ucyBvbiB0aGUgbWVudSBpbmNsdWRlIHNuYWNrcywgc291cCwgd29rLCBjdXJyeSwgZnJpZWQgbm9vZGxlcyBhbmQgcmljZS5cbiAgICBBbHNvIHNlcnZlcyBwbGFudCBiYXNlZCBkZXNzZXJ0cyBhbmQgZHJpbmtzLiBIYXMgZnJlZSBXaS1GaS5gO1xuICBjb3ZlckNhcmQuYXBwZW5kQ2hpbGQoY292ZXJCb2R5KTtcblxuICBjb25zdCBuYXZpZ2F0aW9uID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnbmF2JywgJ25hdmlnYXRpb24nKTtcbiAgY292ZXJDb250ZW50LmFwcGVuZENoaWxkKG5hdmlnYXRpb24pO1xuXG4gIGNvbnN0IGhvbWVOYXYgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnaG9tZS1uYXYnKTtcbiAgaG9tZU5hdi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChob21lTmF2KTtcblxuICBjb25zdCBtZW51TmF2ID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ21lbnUtbmF2Jyk7XG4gIG1lbnVOYXYudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQobWVudU5hdik7XG5cbiAgY29uc3QgY29udGFjdE5hdiA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb250YWN0LW5hdicpO1xuICBjb250YWN0TmF2LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3ROYXYpO1xuXG4gIGNvbnN0IGNvdmVySW1hZ2UgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY292ZXJfX2ltYWdlJyk7XG4gIGNvdmVyLmFwcGVuZENoaWxkKGNvdmVySW1hZ2UpO1xufVxuXG4iLCJmdW5jdGlvbiBsb2NhdGVDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHN0eWxlKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBzdHlsZSk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuZnVuY3Rpb24gZmluZFNlY3Rpb24oc2VjdGlvbikge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VjdGlvbn1gKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNlY3Rpb24oc2VjdGlvbikge1xuICBjb25zdCBlbGVtZW50ID0gZmluZFNlY3Rpb24oc2VjdGlvbik7XG4gIGVsZW1lbnQucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCB7IGxvY2F0ZUNvbnRhaW5lciwgY3JlYXRlRWxlbWVudCwgcmVtb3ZlU2VjdGlvbiB9OyIsImltcG9ydCAqIGFzIGRvbVRvb2xzIGZyb20gJy4vZG9tX3Rvb2xzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb21Ub29scy5sb2NhdGVDb250YWluZXIoKTtcblxuICBjb25zdCBob21lID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICdob21lJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbiAgY29uc3QgaG9tZVRpdGxlID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnaDInLCAnaG9tZV9fdGl0bGUnKTtcbiAgaG9tZVRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0IHVzJztcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lVGl0bGUpO1xuXG4gIGNvbnN0IGhvbWVCb2R5ID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgncCcsICdob21lX19ib2R5Jyk7XG4gIGhvbWVCb2R5LnRleHRDb250ZW50ID0gYE91ciByZXN0YXVyYW50IGlzIHRoZSBiZXN0IHJlc3RhdXJhbnQgeW91IGNhbiBmaW5kIGluIENhbGlmb3JuaWEgZm9yIHZlZ2FuIHBlb3BsZS5cbiAgV2UgaGF2ZSBhbGwgdHlwZXMgb2YgdmVnYW4gZm9vZCBhbmQgeW91IHdpbGwgYmUgdmVyeSBwbGVhc2VkIGFuZCBoZWFsdGhpZXIgd2hlbiBlYXRpbmcgaGVyZS5gO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVCb2R5KTtcblxuICBjb25zdCBob21lSW1hZ2UgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnaG9tZV9faW1hZ2UnKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lSW1hZ2UpO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBkb21Ub29scyBmcm9tICcuL2RvbV90b29scy5qcyc7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnQnV0dGVybnV0IE1vbGUgRW5jaGlsYWRhcycsXG4gICAgYm9keTogJ0EgZGVsaWNpb3VzIG1lYWwgYmFzZWQgb24gdGhlIHBvcHVsYXIgTWV4aWNhbiBFbmNoaWxhZGFzJyxcbiAgICBpbWFnZTogJy9zcmMvaW1hZ2VzL2J1dHRlcm51dC1tb2xlLWVuY2hpbGFkYXMtMTU5NDY1OTEyMi5qcGcnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0dyZWVrIENoaWtlbiBXaW5ncycsXG4gICAgYm9keTogJ0ZyaWVkIGNoaWNrZW4gd2luZ3Mgd2l0aCBkZWxpY2lvdXMgR3JlZWsgc2FsYWQnLFxuICAgIGltYWdlOiAnL3NyYy9pbWFnZXMvZ2hrMDgwMTE2eWtmZWF0dXJlMDItMTU2NzYwOTM4MS5wbmcnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1N3ZWRpc2ggU2FsbW9uIFNhbGFkJyxcbiAgICBib2R5OiAnVGhlIGJlc3QgU3dlZGlzaCBxdWFsaXR5IHNhbG1vbiB3aXRoIGNvb2tlZCBncmVlbiBiZWFucycsXG4gICAgaW1hZ2U6ICcvc3JjL2ltYWdlcy9sb3ctY2Fsb3JpZS1tZWFscy0xNTU2MzAyODY2LnBuZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU3ByaW5nIFNhbGFkJyxcbiAgICBib2R5OiAnVmVnYW4gZnJlc2ggZ3JlZW4gc2FsYWQgd2l0aCBjdWN1bWJlciBhbmQgY29ybicsXG4gICAgaW1hZ2U6ICcvc3JjL2ltYWdlcy9zcHJpbmctc2FsYWQtcmVjaXBlLXdpdGgtYXByaWNvdC12aW5haWdyZXR0ZS0xNjExMjU2MDQwLmpwZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSGVpcmxvb20gVG9tYXRvIFNhbGFkJyxcbiAgICBib2R5OiAnQSB2YXJpZXR5IG9mIHRvbWF0b2VzIGFuZCBwZXBwZXJzIGluIG9uZSBzcGljeSBzYWxhZCcsXG4gICAgaW1hZ2U6ICcvc3JjL2ltYWdlcy9oZWlybG9vbS10b21hdG8tc2FsYWQtbGVhZC0xNTg5NDA2MjU3LmpwZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVmVnYW4gU3RyYXdiZXJyeSBDb29raWVzJyxcbiAgICBib2R5OiAnWW91ciBjbGFzc2ljIHN0cmF3YmVycnkgY29va2llcyBidXQgMTAwJSB2ZWdhbicsXG4gICAgaW1hZ2U6ICcvc3JjL2ltYWdlcy9zdHJhd2JlcnJ5LW9hdG1lYWwtY29va2llcy0xNjA5Mjc2MjQwLmpwZydcbiAgfVxuXVxuXG5mdW5jdGlvbiBtZW51Q2FyZChjb250YWluZXIsIG1lbnVJdGVtKSB7XG4gIGNvbnN0IGRpdiA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb2wtMTIgY29sLW1kLTYgY29sLXhsLTQnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgY29uc3QgbWVudUNhcmQgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnbWVudV9fY2FyZCcpO1xuICBkaXYuYXBwZW5kQ2hpbGQobWVudUNhcmQpO1xuXG4gIGNvbnN0IG1lbnVJbWFnZSA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2ltZycsICdtZW51X19pbWFnZScpO1xuICBtZW51SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBtZW51SXRlbS5pbWFnZSk7XG4gIG1lbnVDYXJkLmFwcGVuZENoaWxkKG1lbnVJbWFnZSk7XG5cbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnbWVudV9fY29udGVudCcpO1xuICBtZW51Q2FyZC5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XG5cbiAgY29uc3QgbWVudVRpdGxlID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnaDMnLCAnbWVudV9fdGl0bGUnKTtcbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gbWVudUl0ZW0udGl0bGU7XG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG5cbiAgY29uc3QgbWVudUJvZHkgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdwJywgJ21lbnVfX2JvZHknKTtcbiAgbWVudUJvZHkudGV4dENvbnRlbnQgPSBtZW51SXRlbS5ib2R5O1xuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51Qm9keSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9tVG9vbHMubG9jYXRlQ29udGFpbmVyKCk7XG5cbiAgY29uc3QgbWVudVNlY3Rpb24gPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ21lbnUtc2VjdGlvbicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKTtcblxuICBjb25zdCBtZW51TWFpblRpdGxlID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnaDInLCAnbWVudV9fbWFpbi10aXRsZScpO1xuICBtZW51TWFpblRpdGxlLnRleHRDb250ZW50ID0gJ091ciBNZW51JztcbiAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudU1haW5UaXRsZSk7XG5cbiAgY29uc3QgbWVudSA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51IHJvdyBnLTUnKTtcbiAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudSk7XG4gIFxuICBtZW51SXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBtZW51Q2FyZChtZW51LCBlbGVtZW50KTtcbiAgfSk7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNvdmVyTG9hZCBmcm9tICcuL2NvdmVyX2xvYWQuanMnO1xuaW1wb3J0IGhvbWVMb2FkIGZyb20gJy4vaG9tZV9sb2FkLmpzJztcbmltcG9ydCBtZW51TG9hZCBmcm9tICcuL21lbnVfbG9hZC5qcyc7XG5pbXBvcnQgY29udGFjdExvYWQgZnJvbSAnLi9jb250YWN0X2xvYWQuanMnO1xuXG5jb3ZlckxvYWQoKTtcbmhvbWVMb2FkKCk7XG4vLyBtZW51TG9hZCgpO1xuLy8gY29udGFjdExvYWQoKTsiXSwic291cmNlUm9vdCI6IiJ9