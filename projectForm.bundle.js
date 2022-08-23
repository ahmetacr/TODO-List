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
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject)
/* harmony export */ });
// Create a project box

function addProject() {
    // Create the form
    const projectForm = document.createElement('form')
    projectForm.classList.add('projectForm');
  
  
    const addProjectDiv = document.createElement('div')

    const formHeader = document.createElement('h2')
    formHeader.classList.add('formHeader')
    formHeader.textContent = 'CREATE PROJECT'
    
    const inputsDiv = document.createElement('div')
    const projectTitle = document.createElement('input')
    const projectDescription = document.createElement('input')
    const projectDate = document.createElement('input')
  
    const addButtons = document.createElement('div')
    const projectCancelBtn = document.createElement('button')
    const projectAddBtn = document.createElement('button')
  
    addProjectDiv.classList.add('addEvent')
    inputsDiv.classList.add('inputs')
    addButtons.classList.add('addButtons')
  
    projectTitle.setAttribute('type','text')
    projectDescription.setAttribute('type','text')
    projectDate.setAttribute('type','date')
  
    projectCancelBtn.setAttribute('type','button')
    projectAddBtn.setAttribute('type','submit')
  
    projectTitle.setAttribute('required','')
    projectDescription.setAttribute('required','')
    projectDate.setAttribute('required','')
  
    projectTitle.id = 'projectTitleInput'
    projectDescription.id = 'projectDescriptionInput'
    projectDate.id = 'projectDateInput'
  
  
    projectTitle.setAttribute('placeholder','Title of the project')
    projectDescription.setAttribute('placeholder','Description')
  
    projectCancelBtn.id = 'projectCancelBtn'
    projectAddBtn.id = 'projectAddBtn'
  
    projectCancelBtn.textContent = 'Cancel'
    projectAddBtn.textContent = 'Add Project'
  
  
    inputsDiv.appendChild(projectTitle)
    inputsDiv.appendChild(projectDescription)
    inputsDiv.appendChild(projectDate)
  
    addButtons.appendChild(projectCancelBtn)
    addButtons.appendChild(projectAddBtn)
  
    addProjectDiv.appendChild(formHeader)
    addProjectDiv.appendChild(inputsDiv)
    addProjectDiv.appendChild(addButtons)
  
  
    projectForm.appendChild(addProjectDiv);
    
    return {
      projectForm: projectForm,
      projectTitle: projectTitle,
      projectDescription: projectDescription,
      projectDate: projectDate,
      projectCancelBtn: projectCancelBtn,
      projectAddBtn: projectAddBtn
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdEZvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdEZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBDcmVhdGUgYSBwcm9qZWN0IGJveFxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICAvLyBDcmVhdGUgdGhlIGZvcm1cbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJyk7XG4gIFxuICBcbiAgICBjb25zdCBhZGRQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgZm9ybUhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JtSGVhZGVyJylcbiAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0gJ0NSRUFURSBQUk9KRUNUJ1xuICAgIFxuICAgIGNvbnN0IGlucHV0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgXG4gICAgY29uc3QgYWRkQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcHJvamVjdENhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIFxuICAgIGFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnYWRkRXZlbnQnKVxuICAgIGlucHV0c0Rpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dHMnKVxuICAgIGFkZEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkQnV0dG9ucycpXG4gIFxuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgcHJvamVjdERhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpXG4gIFxuICAgIHByb2plY3RDYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJylcbiAgICBwcm9qZWN0QWRkQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpXG4gIFxuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG4gICAgcHJvamVjdERhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsJycpXG4gIFxuICAgIHByb2plY3RUaXRsZS5pZCA9ICdwcm9qZWN0VGl0bGVJbnB1dCdcbiAgICBwcm9qZWN0RGVzY3JpcHRpb24uaWQgPSAncHJvamVjdERlc2NyaXB0aW9uSW5wdXQnXG4gICAgcHJvamVjdERhdGUuaWQgPSAncHJvamVjdERhdGVJbnB1dCdcbiAgXG4gIFxuICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnVGl0bGUgb2YgdGhlIHByb2plY3QnKVxuICAgIHByb2plY3REZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnRGVzY3JpcHRpb24nKVxuICBcbiAgICBwcm9qZWN0Q2FuY2VsQnRuLmlkID0gJ3Byb2plY3RDYW5jZWxCdG4nXG4gICAgcHJvamVjdEFkZEJ0bi5pZCA9ICdwcm9qZWN0QWRkQnRuJ1xuICBcbiAgICBwcm9qZWN0Q2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgICBwcm9qZWN0QWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0J1xuICBcbiAgXG4gICAgaW5wdXRzRGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSlcbiAgICBpbnB1dHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKVxuICAgIGlucHV0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGF0ZSlcbiAgXG4gICAgYWRkQnV0dG9ucy5hcHBlbmRDaGlsZChwcm9qZWN0Q2FuY2VsQnRuKVxuICAgIGFkZEJ1dHRvbnMuYXBwZW5kQ2hpbGQocHJvamVjdEFkZEJ0bilcbiAgXG4gICAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKVxuICAgIGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoaW5wdXRzRGl2KVxuICAgIGFkZFByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9ucylcbiAgXG4gIFxuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3REaXYpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0Rm9ybTogcHJvamVjdEZvcm0sXG4gICAgICBwcm9qZWN0VGl0bGU6IHByb2plY3RUaXRsZSxcbiAgICAgIHByb2plY3REZXNjcmlwdGlvbjogcHJvamVjdERlc2NyaXB0aW9uLFxuICAgICAgcHJvamVjdERhdGU6IHByb2plY3REYXRlLFxuICAgICAgcHJvamVjdENhbmNlbEJ0bjogcHJvamVjdENhbmNlbEJ0bixcbiAgICAgIHByb2plY3RBZGRCdG46IHByb2plY3RBZGRCdG5cbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9