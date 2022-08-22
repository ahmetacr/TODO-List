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
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSidebar": () => (/* binding */ createSidebar)
/* harmony export */ });
// Create and export the sidebar
function createSidebar() {
  const sidebar = document.createElement('div')

  const dateSection = document.createElement('div')
  
  const today = document.createElement('div')
  const todayIcon = document.createElement('i')
  const todayP = document.createElement('p')
  
  const upcomingDiv = document.createElement('div')
  const calendarIcon = document.createElement('i')
  const upcomingP = document.createElement('p')
  
  const projectSection  = document.createElement('div')
  
  const projectHeader = document.createElement('div')
  const projectP = document.createElement('p')
  const addIcon = document.createElement('i')
  
  sidebar.classList.add('sidebar')
  dateSection.classList.add('dateSection')
  today.classList.add('today')
  todayIcon.classList.add('material-icons')

  upcomingDiv.classList.add('inbox')
  calendarIcon.classList.add('material-icons')

  projectSection.classList.add('projectSection')
  projectHeader.classList.add('projectHeader')
  addIcon.classList.add('material-icons')

  todayIcon.textContent = 'today'
  todayP.textContent = 'Today'

  calendarIcon.textContent = 'inbox'
  upcomingP.textContent  = 'Inbox'

  projectP.textContent = 'Projects'
  addIcon.textContent = 'add'

  projectHeader.appendChild(projectP)
  projectHeader.appendChild(addIcon)

  projectSection.appendChild(projectHeader)

  today.appendChild(todayIcon)
  today.appendChild(todayP)

  upcomingDiv.appendChild(calendarIcon)
  upcomingDiv.appendChild(upcomingP)

  dateSection.appendChild(upcomingDiv)
  dateSection.appendChild(today)


  sidebar.appendChild(dateSection)
  sidebar.appendChild(projectSection)

  return sidebar
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSBzaWRlYmFyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgY29uc3QgZGF0ZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgY29uc3QgdG9kYXlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIFxuICBjb25zdCB1cGNvbWluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGNhbGVuZGFySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICBjb25zdCB1cGNvbWluZ1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgXG4gIGNvbnN0IHByb2plY3RTZWN0aW9uICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIFxuICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgcHJvamVjdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICBcbiAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJylcbiAgZGF0ZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZGF0ZVNlY3Rpb24nKVxuICB0b2RheS5jbGFzc0xpc3QuYWRkKCd0b2RheScpXG4gIHRvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpXG5cbiAgdXBjb21pbmdEaXYuY2xhc3NMaXN0LmFkZCgnaW5ib3gnKVxuICBjYWxlbmRhckljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuXG4gIHByb2plY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RTZWN0aW9uJylcbiAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SGVhZGVyJylcbiAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpXG5cbiAgdG9kYXlJY29uLnRleHRDb250ZW50ID0gJ3RvZGF5J1xuICB0b2RheVAudGV4dENvbnRlbnQgPSAnVG9kYXknXG5cbiAgY2FsZW5kYXJJY29uLnRleHRDb250ZW50ID0gJ2luYm94J1xuICB1cGNvbWluZ1AudGV4dENvbnRlbnQgID0gJ0luYm94J1xuXG4gIHByb2plY3RQLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xuICBhZGRJY29uLnRleHRDb250ZW50ID0gJ2FkZCdcblxuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RQKVxuICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGFkZEljb24pXG5cbiAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcilcblxuICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheUljb24pXG4gIHRvZGF5LmFwcGVuZENoaWxkKHRvZGF5UClcblxuICB1cGNvbWluZ0Rpdi5hcHBlbmRDaGlsZChjYWxlbmRhckljb24pXG4gIHVwY29taW5nRGl2LmFwcGVuZENoaWxkKHVwY29taW5nUClcblxuICBkYXRlU2VjdGlvbi5hcHBlbmRDaGlsZCh1cGNvbWluZ0RpdilcbiAgZGF0ZVNlY3Rpb24uYXBwZW5kQ2hpbGQodG9kYXkpXG5cblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKGRhdGVTZWN0aW9uKVxuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RTZWN0aW9uKVxuXG4gIHJldHVybiBzaWRlYmFyXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=