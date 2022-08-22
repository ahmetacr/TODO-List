/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
// Create a header and export it as a node:
function createHeader() {
  const header = document.createElement('div');
  

  // Header left
  const headerLeft = document.createElement('div');
  const menuIcon = document.createElement('i');
  const homeIcon = document.createElement('i');
  const searchDiv = document.createElement('div');
  const searchIcon = document.createElement('i')
  const searchLabel = document.createElement('label')
  const searchInput = document.createElement('input');

  header.classList.add('header')
  headerLeft.classList.add('headerLeft')
  menuIcon.classList.add('material-icons')
  homeIcon.classList.add('material-icons')
  searchDiv.classList.add('search')
  searchIcon.classList.add('material-icons')

  menuIcon.id = 'menu'
  homeIcon.id = 'home'
  
  menuIcon.textContent = 'menu'
  homeIcon.textContent = 'home'
  searchLabel.textContent = 'search'
  
  searchLabel.setAttribute('for','searchInput')

  searchInput.setAttribute('type','text')
  searchInput.setAttribute('id','searchInput')
  searchInput.setAttribute('placeholder','search')



  searchIcon.appendChild(searchLabel);
  searchDiv.appendChild(searchIcon)
  searchDiv.appendChild(searchInput)

  headerLeft.appendChild(menuIcon)
  headerLeft.appendChild(homeIcon)
  headerLeft.appendChild(searchDiv);

  // Header Right

  const headerRight = document.createElement('div')
  const addIcon = document.createElement('i')
  const personIcon = document.createElement('i')
  const toggleLabel = document.createElement('label')
  const toggleBtn = document.createElement('input')

  headerRight.classList.add('headerRight')
  addIcon.classList.add("material-icons")
  personIcon.classList.add('material-icons')
  toggleBtn.classList.add('toggleTheme')

  addIcon.id = 'add'
  personIcon.id = 'person'

  toggleLabel.setAttribute('for','toggle')
  toggleBtn.setAttribute('type','checkbox')
  toggleBtn.setAttribute('id','toggle')


  addIcon.textContent = 'add'
  personIcon.textContent = 'person'
  toggleLabel.textContent = 'Dark'

  headerRight.appendChild(addIcon)
  headerRight.appendChild(personIcon)
  headerRight.appendChild(toggleLabel)
  headerRight.appendChild(toggleBtn)

  // Add the right and left to the header
  header.appendChild(headerLeft)
  header.appendChild(headerRight)

  return {
    header,
    menuIcon,
    homeIcon,
    addIcon
  }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gQ3JlYXRlIGEgaGVhZGVyIGFuZCBleHBvcnQgaXQgYXMgYSBub2RlOlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIFxuXG4gIC8vIEhlYWRlciBsZWZ0XG4gIGNvbnN0IGhlYWRlckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICBjb25zdCBzZWFyY2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICBoZWFkZXJMZWZ0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlckxlZnQnKVxuICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpXG4gIGhvbWVJY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJylcbiAgc2VhcmNoRGl2LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaCcpXG4gIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuXG4gIG1lbnVJY29uLmlkID0gJ21lbnUnXG4gIGhvbWVJY29uLmlkID0gJ2hvbWUnXG4gIFxuICBtZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51J1xuICBob21lSWNvbi50ZXh0Q29udGVudCA9ICdob21lJ1xuICBzZWFyY2hMYWJlbC50ZXh0Q29udGVudCA9ICdzZWFyY2gnXG4gIFxuICBzZWFyY2hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3NlYXJjaElucHV0JylcblxuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3NlYXJjaElucHV0JylcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ3NlYXJjaCcpXG5cblxuXG4gIHNlYXJjaEljb24uYXBwZW5kQ2hpbGQoc2VhcmNoTGFiZWwpO1xuICBzZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbilcbiAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KVxuXG4gIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQobWVudUljb24pXG4gIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQoaG9tZUljb24pXG4gIGhlYWRlckxlZnQuYXBwZW5kQ2hpbGQoc2VhcmNoRGl2KTtcblxuICAvLyBIZWFkZXIgUmlnaHRcblxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgY29uc3QgcGVyc29uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICBjb25zdCB0b2dnbGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4gIGhlYWRlclJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlclJpZ2h0JylcbiAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIilcbiAgcGVyc29uSWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpXG4gIHRvZ2dsZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2dnbGVUaGVtZScpXG5cbiAgYWRkSWNvbi5pZCA9ICdhZGQnXG4gIHBlcnNvbkljb24uaWQgPSAncGVyc29uJ1xuXG4gIHRvZ2dsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9nZ2xlJylcbiAgdG9nZ2xlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94JylcbiAgdG9nZ2xlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCd0b2dnbGUnKVxuXG5cbiAgYWRkSWNvbi50ZXh0Q29udGVudCA9ICdhZGQnXG4gIHBlcnNvbkljb24udGV4dENvbnRlbnQgPSAncGVyc29uJ1xuICB0b2dnbGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXJrJ1xuXG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKGFkZEljb24pXG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKHBlcnNvbkljb24pXG4gIGhlYWRlclJpZ2h0LmFwcGVuZENoaWxkKHRvZ2dsZUxhYmVsKVxuICBoZWFkZXJSaWdodC5hcHBlbmRDaGlsZCh0b2dnbGVCdG4pXG5cbiAgLy8gQWRkIHRoZSByaWdodCBhbmQgbGVmdCB0byB0aGUgaGVhZGVyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJMZWZ0KVxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUmlnaHQpXG5cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXIsXG4gICAgbWVudUljb24sXG4gICAgaG9tZUljb24sXG4gICAgYWRkSWNvblxuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9