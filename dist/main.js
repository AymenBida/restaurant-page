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
  contact.dataset.toggle = 'contact-nav';
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
  homeNav.dataset.type = 'nav';
  homeNav.classList.add('active');
  navigation.appendChild(homeNav);

  const menuNav = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'menu-nav');
  menuNav.textContent = 'Menu';
  menuNav.dataset.type = 'nav';
  navigation.appendChild(menuNav);

  const contactNav = _dom_tools_js__WEBPACK_IMPORTED_MODULE_0__.createElement('div', 'contact-nav');
  contactNav.textContent = 'Contact';
  contactNav.dataset.type = 'nav';
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
/* harmony export */   "removeElement": () => (/* binding */ removeElement),
/* harmony export */   "addEvent": () => (/* binding */ addEvent),
/* harmony export */   "showSection": () => (/* binding */ showSection)
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

function findElement(classname) {
  const element = document.querySelector(`.${classname}`);
  return element;
}

function removeElement(classname) {
  const element = findElement(classname);
  element.remove();
} 

function activateNavElement(navElement) {
  const element = document.querySelector(`.${navElement}`);
  element.classList.toggle('active');
}

function addEvent(navElement, func) {
  const element = document.querySelector(`.${navElement}`);
  element.addEventListener('click', function() {
    func(navElement);
  }, true);
}

function removeEvent(navElement, func) {
  navElement.removeEventListener('click', function() {
    func(navElement);
  }, true);
}

function findSection(toggler) {
  console.log(toggler);
  const element = document.querySelector(`[data-toggle="${toggler}"]`);
  return element;
}

function toggleShowSection(toggler) {
  const element = findSection(toggler);
  element.classList.toggle('show');
}

function showSection(toggler) {
  toggleShowSection(toggler);
  eventHandler();
  activateNavElement(toggler);
}

function eventHandler() {
  let tabs = findTabs();
  tabs.forEach(tab => {
    if (tab.classList.contains('active')) {
      tab.classList.toggle('active');
      removeEvent(tab, showSection);
      toggleShowSection(tab.classList[0]);
    }
  });
}

function findTabs() {
  return document.querySelectorAll('[data-type="nav"]');
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
  home.dataset.toggle = 'home-nav';
  home.classList.add('show');
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
  menuSection.dataset.toggle = 'menu-nav';
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
/* harmony import */ var _dom_tools_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom_tools.js */ "./src/js/dom_tools.js");






(0,_cover_load_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_home_load_js__WEBPACK_IMPORTED_MODULE_1__.default)();
_dom_tools_js__WEBPACK_IMPORTED_MODULE_4__.addEvent('home-nav', _dom_tools_js__WEBPACK_IMPORTED_MODULE_4__.showSection);
(0,_menu_load_js__WEBPACK_IMPORTED_MODULE_2__.default)();
_dom_tools_js__WEBPACK_IMPORTED_MODULE_4__.addEvent('menu-nav', _dom_tools_js__WEBPACK_IMPORTED_MODULE_4__.showSection);
(0,_contact_load_js__WEBPACK_IMPORTED_MODULE_3__.default)();
_dom_tools_js__WEBPACK_IMPORTED_MODULE_4__.addEvent('contact-nav', _dom_tools_js__WEBPACK_IMPORTED_MODULE_4__.showSection);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29udGFjdF9sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9jb3Zlcl9sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9kb21fdG9vbHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL2hvbWVfbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvbWVudV9sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRTVCO0FBQ2Ysa0JBQWtCLDBEQUF3Qjs7QUFFMUMsa0JBQWtCLHdEQUFzQjtBQUN4QztBQUNBOztBQUVBLHVCQUF1Qix3REFBc0I7QUFDN0M7QUFDQTs7QUFFQSxzQkFBc0Isd0RBQXNCO0FBQzVDO0FBQ0E7O0FBRUEsc0JBQXNCLHdEQUFzQjtBQUM1Qzs7QUFFQSxxQkFBcUIsd0RBQXNCO0FBQzNDO0FBQ0E7O0FBRUEscUJBQXFCLHdEQUFzQjtBQUMzQztBQUNBOztBQUVBLHVCQUF1Qix3REFBc0I7QUFDN0M7QUFDQTs7QUFFQSx1QkFBdUIsd0RBQXNCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQSx3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QUUzQyx1REFBUztBQUNULHNEQUFRO0FBQ1IsbURBQWlCLGFBQWEsc0RBQW9CO0FBQ2xELHNEQUFRO0FBQ1IsbURBQWlCLGFBQWEsc0RBQW9CO0FBQ2xELHlEQUFXO0FBQ1gsbURBQWlCLGdCQUFnQixzREFBb0IsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZG9tVG9vbHMgZnJvbSAnLi9kb21fdG9vbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0TG9hZCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvbVRvb2xzLmxvY2F0ZUNvbnRhaW5lcigpO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ2NvbnRhY3QnKTtcbiAgY29udGFjdC5kYXRhc2V0LnRvZ2dsZSA9ICdjb250YWN0LW5hdic7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnaDInLCAnY29udGFjdF9fdGl0bGUnKTtcbiAgY29udGFjdFRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXM6JztcbiAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VGl0bGUpO1xuXG4gIGNvbnN0IGNvbnRhY3RCb2R5ID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgncCcsICdjb250YWN0X19ib2R5Jyk7XG4gIGNvbnRhY3RCb2R5LnRleHRDb250ZW50ID0gJ1RvIGNvbnRhY3QgdXMgZmlsbCB0aGlzIGZvcm0gYW5kIHByZXNzIHNlbmQnO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RCb2R5KTtcblxuICBjb25zdCBjb250YWN0Rm9ybSA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb250YWN0X19mb3JtJyk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuXG4gIGNvbnN0IGVtYWlsTGFiZWwgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdsYWJlbCcsICdjb250YWN0X19sYWJlbCBmb3JtLWxhYmVsJyk7XG4gIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRS1tYWlsJztcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG5cbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgJ2NvbnRhY3RfX2lucHV0IGZvcm0tY29udHJvbCcpO1xuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xuICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcblxuICBjb25zdCBtZXNzYWdlTGFiZWwgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdsYWJlbCcsICdjb250YWN0X19sYWJlbCBmb3JtLWxhYmVsJyk7XG4gIG1lc3NhZ2VMYWJlbC50ZXh0Q29udGVudCA9ICdNZXNzYWdlJztcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcblxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsICdjb250YWN0X19pbnB1dCBmb3JtLWNvbnRyb2wnKTtcbiAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZSgnY29scycsICczMCcpO1xuICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzUnKTtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcblxuICBjb25zdCBjb250YWN0U3VibWl0ID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ2NvbnRhY3RfX3N1Ym1pdCBidG4gYnRuLXN1Y2Nlc3MnKTtcbiAgY29udGFjdFN1Ym1pdC50ZXh0Q29udGVudCA9ICdTZW5kJztcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29udGFjdFN1Ym1pdCk7XG59XG5cbiIsImltcG9ydCAqIGFzIGRvbVRvb2xzIGZyb20gJy4vZG9tX3Rvb2xzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY292ZXJMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9tVG9vbHMubG9jYXRlQ29udGFpbmVyKCk7XG5cbiAgY29uc3QgY292ZXIgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ2NvdmVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY292ZXIpO1xuXG4gIGNvbnN0IGNvdmVyQ29udGVudCA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb3Zlcl9fY29udGVudCcpO1xuICBjb3Zlci5hcHBlbmRDaGlsZChjb3ZlckNvbnRlbnQpO1xuXG4gIGNvbnN0IGNvdmVyQ2FyZCA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb3Zlcl9fY2FyZCcpO1xuICBjb3ZlckNvbnRlbnQuYXBwZW5kQ2hpbGQoY292ZXJDYXJkKTtcblxuICBjb25zdCBjb3ZlclRpdGxlID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnaDEnLCAnY292ZXJfX3RpdGxlJyk7XG4gIGNvdmVyVGl0bGUudGV4dENvbnRlbnQgPSAnVmVnYW4gZm9yZXZlcic7XG4gIGNvdmVyQ2FyZC5hcHBlbmRDaGlsZChjb3ZlclRpdGxlKTtcblxuICBjb25zdCBjb3ZlckJvZHkgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdwJywgJ2NvdmVyX19ib2R5Jyk7XG4gIGNvdmVyQm9keS50ZXh0Q29udGVudCA9IGBTZXJ2ZXMgbWVhdCwgdmVnYW4gb3B0aW9ucyBhdmFpbGFibGUuIFRoYWkgZm9vZCByZXN0YXVyYW50IHdpdGggNTAlIG9mIGRpc2hlcyBiZWluZ1xuICAgIHZlZ2FuLiBNYXJrZWQgdmVnYW4gZGlzaGVzIGFuZCBvcHRpb25zIG9uIHRoZSBtZW51IGluY2x1ZGUgc25hY2tzLCBzb3VwLCB3b2ssIGN1cnJ5LCBmcmllZCBub29kbGVzIGFuZCByaWNlLlxuICAgIEFsc28gc2VydmVzIHBsYW50IGJhc2VkIGRlc3NlcnRzIGFuZCBkcmlua3MuIEhhcyBmcmVlIFdpLUZpLmA7XG4gIGNvdmVyQ2FyZC5hcHBlbmRDaGlsZChjb3ZlckJvZHkpO1xuXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCduYXYnLCAnbmF2aWdhdGlvbicpO1xuICBjb3ZlckNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XG5cbiAgY29uc3QgaG9tZU5hdiA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdob21lLW5hdicpO1xuICBob21lTmF2LnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBob21lTmF2LmRhdGFzZXQudHlwZSA9ICduYXYnO1xuICBob21lTmF2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGhvbWVOYXYpO1xuXG4gIGNvbnN0IG1lbnVOYXYgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnbWVudS1uYXYnKTtcbiAgbWVudU5hdi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbWVudU5hdi5kYXRhc2V0LnR5cGUgPSAnbmF2JztcbiAgbmF2aWdhdGlvbi5hcHBlbmRDaGlsZChtZW51TmF2KTtcblxuICBjb25zdCBjb250YWN0TmF2ID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbnRhY3QtbmF2Jyk7XG4gIGNvbnRhY3ROYXYudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIGNvbnRhY3ROYXYuZGF0YXNldC50eXBlID0gJ25hdic7XG4gIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoY29udGFjdE5hdik7XG5cbiAgY29uc3QgY292ZXJJbWFnZSA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb3Zlcl9faW1hZ2UnKTtcbiAgY292ZXIuYXBwZW5kQ2hpbGQoY292ZXJJbWFnZSk7XG59XG5cbiIsImZ1bmN0aW9uIGxvY2F0ZUNvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgc3R5bGUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHN0eWxlKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5mdW5jdGlvbiBmaW5kRWxlbWVudChjbGFzc25hbWUpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NsYXNzbmFtZX1gKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoY2xhc3NuYW1lKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBmaW5kRWxlbWVudChjbGFzc25hbWUpO1xuICBlbGVtZW50LnJlbW92ZSgpO1xufSBcblxuZnVuY3Rpb24gYWN0aXZhdGVOYXZFbGVtZW50KG5hdkVsZW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hdkVsZW1lbnR9YCk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50KG5hdkVsZW1lbnQsIGZ1bmMpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hdkVsZW1lbnR9YCk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBmdW5jKG5hdkVsZW1lbnQpO1xuICB9LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnQobmF2RWxlbWVudCwgZnVuYykge1xuICBuYXZFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgZnVuYyhuYXZFbGVtZW50KTtcbiAgfSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRTZWN0aW9uKHRvZ2dsZXIpIHtcbiAgY29uc29sZS5sb2codG9nZ2xlcik7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10b2dnbGU9XCIke3RvZ2dsZXJ9XCJdYCk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTaG93U2VjdGlvbih0b2dnbGVyKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBmaW5kU2VjdGlvbih0b2dnbGVyKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG59XG5cbmZ1bmN0aW9uIHNob3dTZWN0aW9uKHRvZ2dsZXIpIHtcbiAgdG9nZ2xlU2hvd1NlY3Rpb24odG9nZ2xlcik7XG4gIGV2ZW50SGFuZGxlcigpO1xuICBhY3RpdmF0ZU5hdkVsZW1lbnQodG9nZ2xlcik7XG59XG5cbmZ1bmN0aW9uIGV2ZW50SGFuZGxlcigpIHtcbiAgbGV0IHRhYnMgPSBmaW5kVGFicygpO1xuICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIHRhYi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIHJlbW92ZUV2ZW50KHRhYiwgc2hvd1NlY3Rpb24pO1xuICAgICAgdG9nZ2xlU2hvd1NlY3Rpb24odGFiLmNsYXNzTGlzdFswXSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZmluZFRhYnMoKSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlPVwibmF2XCJdJyk7XG59XG5cbmV4cG9ydCB7XG4gIGxvY2F0ZUNvbnRhaW5lcixcbiAgY3JlYXRlRWxlbWVudCxcbiAgcmVtb3ZlRWxlbWVudCxcbiAgYWRkRXZlbnQsXG4gIHNob3dTZWN0aW9uXG59OyIsImltcG9ydCAqIGFzIGRvbVRvb2xzIGZyb20gJy4vZG9tX3Rvb2xzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb21Ub29scy5sb2NhdGVDb250YWluZXIoKTtcblxuICBjb25zdCBob21lID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICdob21lJyk7XG4gIGhvbWUuZGF0YXNldC50b2dnbGUgPSAnaG9tZS1uYXYnO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lKTtcblxuICBjb25zdCBob21lVGl0bGUgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdoMicsICdob21lX190aXRsZScpO1xuICBob21lVGl0bGUudGV4dENvbnRlbnQgPSAnQWJvdXQgdXMnO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG5cbiAgY29uc3QgaG9tZUJvZHkgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdwJywgJ2hvbWVfX2JvZHknKTtcbiAgaG9tZUJvZHkudGV4dENvbnRlbnQgPSBgT3VyIHJlc3RhdXJhbnQgaXMgdGhlIGJlc3QgcmVzdGF1cmFudCB5b3UgY2FuIGZpbmQgaW4gQ2FsaWZvcm5pYSBmb3IgdmVnYW4gcGVvcGxlLlxuICBXZSBoYXZlIGFsbCB0eXBlcyBvZiB2ZWdhbiBmb29kIGFuZCB5b3Ugd2lsbCBiZSB2ZXJ5IHBsZWFzZWQgYW5kIGhlYWx0aGllciB3aGVuIGVhdGluZyBoZXJlLmA7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUJvZHkpO1xuXG4gIGNvbnN0IGhvbWVJbWFnZSA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdob21lX19pbWFnZScpO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVJbWFnZSk7XG59XG5cbiIsImltcG9ydCAqIGFzIGRvbVRvb2xzIGZyb20gJy4vZG9tX3Rvb2xzLmpzJztcblxuY29uc3QgbWVudUl0ZW1zID0gW1xuICB7XG4gICAgdGl0bGU6ICdCdXR0ZXJudXQgTW9sZSBFbmNoaWxhZGFzJyxcbiAgICBib2R5OiAnQSBkZWxpY2lvdXMgbWVhbCBiYXNlZCBvbiB0aGUgcG9wdWxhciBNZXhpY2FuIEVuY2hpbGFkYXMnLFxuICAgIGltYWdlOiAnL3NyYy9pbWFnZXMvYnV0dGVybnV0LW1vbGUtZW5jaGlsYWRhcy0xNTk0NjU5MTIyLmpwZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnR3JlZWsgQ2hpa2VuIFdpbmdzJyxcbiAgICBib2R5OiAnRnJpZWQgY2hpY2tlbiB3aW5ncyB3aXRoIGRlbGljaW91cyBHcmVlayBzYWxhZCcsXG4gICAgaW1hZ2U6ICcvc3JjL2ltYWdlcy9naGswODAxMTZ5a2ZlYXR1cmUwMi0xNTY3NjA5MzgxLnBuZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU3dlZGlzaCBTYWxtb24gU2FsYWQnLFxuICAgIGJvZHk6ICdUaGUgYmVzdCBTd2VkaXNoIHF1YWxpdHkgc2FsbW9uIHdpdGggY29va2VkIGdyZWVuIGJlYW5zJyxcbiAgICBpbWFnZTogJy9zcmMvaW1hZ2VzL2xvdy1jYWxvcmllLW1lYWxzLTE1NTYzMDI4NjYucG5nJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTcHJpbmcgU2FsYWQnLFxuICAgIGJvZHk6ICdWZWdhbiBmcmVzaCBncmVlbiBzYWxhZCB3aXRoIGN1Y3VtYmVyIGFuZCBjb3JuJyxcbiAgICBpbWFnZTogJy9zcmMvaW1hZ2VzL3NwcmluZy1zYWxhZC1yZWNpcGUtd2l0aC1hcHJpY290LXZpbmFpZ3JldHRlLTE2MTEyNTYwNDAuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdIZWlybG9vbSBUb21hdG8gU2FsYWQnLFxuICAgIGJvZHk6ICdBIHZhcmlldHkgb2YgdG9tYXRvZXMgYW5kIHBlcHBlcnMgaW4gb25lIHNwaWN5IHNhbGFkJyxcbiAgICBpbWFnZTogJy9zcmMvaW1hZ2VzL2hlaXJsb29tLXRvbWF0by1zYWxhZC1sZWFkLTE1ODk0MDYyNTcuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdWZWdhbiBTdHJhd2JlcnJ5IENvb2tpZXMnLFxuICAgIGJvZHk6ICdZb3VyIGNsYXNzaWMgc3RyYXdiZXJyeSBjb29raWVzIGJ1dCAxMDAlIHZlZ2FuJyxcbiAgICBpbWFnZTogJy9zcmMvaW1hZ2VzL3N0cmF3YmVycnktb2F0bWVhbC1jb29raWVzLTE2MDkyNzYyNDAuanBnJ1xuICB9XG5dXG5cbmZ1bmN0aW9uIG1lbnVDYXJkKGNvbnRhaW5lciwgbWVudUl0ZW0pIHtcbiAgY29uc3QgZGl2ID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2NvbC0xMiBjb2wtbWQtNiBjb2wteGwtNCcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICBjb25zdCBtZW51Q2FyZCA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51X19jYXJkJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChtZW51Q2FyZCk7XG5cbiAgY29uc3QgbWVudUltYWdlID0gZG9tVG9vbHMuY3JlYXRlRWxlbWVudCgnaW1nJywgJ21lbnVfX2ltYWdlJyk7XG4gIG1lbnVJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG1lbnVJdGVtLmltYWdlKTtcbiAgbWVudUNhcmQuYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcblxuICBjb25zdCBtZW51Q29udGVudCA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdtZW51X19jb250ZW50Jyk7XG4gIG1lbnVDYXJkLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcblxuICBjb25zdCBtZW51VGl0bGUgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdoMycsICdtZW51X190aXRsZScpO1xuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBtZW51SXRlbS50aXRsZTtcbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcblxuICBjb25zdCBtZW51Qm9keSA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ3AnLCAnbWVudV9fYm9keScpO1xuICBtZW51Qm9keS50ZXh0Q29udGVudCA9IG1lbnVJdGVtLmJvZHk7XG4gIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVCb2R5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb21Ub29scy5sb2NhdGVDb250YWluZXIoKTtcblxuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAnbWVudS1zZWN0aW9uJyk7XG4gIG1lbnVTZWN0aW9uLmRhdGFzZXQudG9nZ2xlID0gJ21lbnUtbmF2JztcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XG5cbiAgY29uc3QgbWVudU1haW5UaXRsZSA9IGRvbVRvb2xzLmNyZWF0ZUVsZW1lbnQoJ2gyJywgJ21lbnVfX21haW4tdGl0bGUnKTtcbiAgbWVudU1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdPdXIgTWVudSc7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVNYWluVGl0bGUpO1xuXG4gIGNvbnN0IG1lbnUgPSBkb21Ub29scy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnbWVudSByb3cgZy01Jyk7XG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnUpO1xuICBcbiAgbWVudUl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgbWVudUNhcmQobWVudSwgZWxlbWVudCk7XG4gIH0pO1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjb3ZlckxvYWQgZnJvbSAnLi9jb3Zlcl9sb2FkLmpzJztcbmltcG9ydCBob21lTG9hZCBmcm9tICcuL2hvbWVfbG9hZC5qcyc7XG5pbXBvcnQgbWVudUxvYWQgZnJvbSAnLi9tZW51X2xvYWQuanMnO1xuaW1wb3J0IGNvbnRhY3RMb2FkIGZyb20gJy4vY29udGFjdF9sb2FkLmpzJztcbmltcG9ydCAqIGFzIGRvbVRvb2xzIGZyb20gJy4vZG9tX3Rvb2xzLmpzJztcblxuY292ZXJMb2FkKCk7XG5ob21lTG9hZCgpO1xuZG9tVG9vbHMuYWRkRXZlbnQoJ2hvbWUtbmF2JywgZG9tVG9vbHMuc2hvd1NlY3Rpb24pO1xubWVudUxvYWQoKTtcbmRvbVRvb2xzLmFkZEV2ZW50KCdtZW51LW5hdicsIGRvbVRvb2xzLnNob3dTZWN0aW9uKTtcbmNvbnRhY3RMb2FkKCk7XG5kb21Ub29scy5hZGRFdmVudCgnY29udGFjdC1uYXYnLCBkb21Ub29scy5zaG93U2VjdGlvbik7Il0sInNvdXJjZVJvb3QiOiIifQ==