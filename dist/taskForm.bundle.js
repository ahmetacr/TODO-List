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
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvent": () => (/* binding */ addEvent)
/* harmony export */ });
// Export the add event function
function addEvent() {

  // Create the form
  const taskForm = document.createElement('form')
  taskForm.classList.add('taskForm');


  const addEventDiv = document.createElement('div')

  const formHeader = document.createElement('h2')
  
  const inputsDiv = document.createElement('div')
  const taskTitle = document.createElement('input')
  const taskDescription = document.createElement('input')
  const taskDate = document.createElement('input')

  const selectDiv = document.createElement('div')
  const selectLabel = document.createElement('label')
  const selectProject = document.createElement('select')
  const inboxOption = document.createElement('option')

  selectDiv.classList.add('selectDiv')

  selectLabel.setAttribute('for','select-project')
  inboxOption.setAttribute('selected','')
  
  selectProject.id = 'select-project'
  inboxOption.value = 'Inbox'
  inboxOption.textContent = 'Inbox'


  selectProject.appendChild(inboxOption)

  selectDiv.appendChild(selectLabel)
  selectDiv.appendChild(selectProject)

  const addButtons = document.createElement('div')
  const taskCancelBtn = document.createElement('button')
  const taskAddBtn = document.createElement('button')

  formHeader.classList.add('formHeader')
  addEventDiv.classList.add('addEvent')
  inputsDiv.classList.add('inputs')
  addButtons.classList.add('addButtons')

  taskTitle.setAttribute('type','text')
  taskDescription.setAttribute('type','text')
  taskDate.setAttribute('type','date')

  taskCancelBtn.setAttribute('type','button')
  taskAddBtn.setAttribute('type','submit')

  taskTitle.setAttribute('required','')
  taskDescription.setAttribute('required','')
  taskDate.setAttribute('required','')

  taskTitle.id = 'taskTitleInput'
  taskDescription.id = 'taskDescriptionInput'
  taskDate.id = 'taskDateInput'


  taskTitle.setAttribute('placeholder','Title of the task')
  taskDescription.setAttribute('placeholder','Description')

  taskCancelBtn.id = 'taskCancelBtn'
  taskAddBtn.id = 'taskAddBtn'

  formHeader.textContent = 'CREATE TASK'
  taskCancelBtn.textContent = 'Cancel'
  taskAddBtn.textContent = 'Add Task'


  inputsDiv.appendChild(taskTitle)
  inputsDiv.appendChild(taskDescription)
  inputsDiv.appendChild(taskDate)

  inputsDiv.appendChild(selectDiv)

  addButtons.appendChild(taskCancelBtn)
  addButtons.appendChild(taskAddBtn)

  addEventDiv.appendChild(formHeader)
  addEventDiv.appendChild(inputsDiv)
  addEventDiv.appendChild(addButtons)


  taskForm.appendChild(addEventDiv);
  
  return {
    taskForm,
    taskTitle,
    taskDescription,
    taskDate,
    taskCancelBtn,
    taskAddBtn,
    inputsDiv,
    selectDiv,
    formHeader
  }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza0Zvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gRXhwb3J0IHRoZSBhZGQgZXZlbnQgZnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudCgpIHtcblxuICAvLyBDcmVhdGUgdGhlIGZvcm1cbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFza0Zvcm0nKTtcblxuXG4gIGNvbnN0IGFkZEV2ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICBcbiAgY29uc3QgaW5wdXRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4gIGNvbnN0IHNlbGVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgY29uc3QgaW5ib3hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuXG4gIHNlbGVjdERpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3REaXYnKVxuXG4gIHNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnc2VsZWN0LXByb2plY3QnKVxuICBpbmJveE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywnJylcbiAgXG4gIHNlbGVjdFByb2plY3QuaWQgPSAnc2VsZWN0LXByb2plY3QnXG4gIGluYm94T3B0aW9uLnZhbHVlID0gJ0luYm94J1xuICBpbmJveE9wdGlvbi50ZXh0Q29udGVudCA9ICdJbmJveCdcblxuXG4gIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQoaW5ib3hPcHRpb24pXG5cbiAgc2VsZWN0RGl2LmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKVxuICBzZWxlY3REaXYuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdClcblxuICBjb25zdCBhZGRCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgdGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gIGZvcm1IZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUhlYWRlcicpXG4gIGFkZEV2ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2FkZEV2ZW50JylcbiAgaW5wdXRzRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0cycpXG4gIGFkZEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkQnV0dG9ucycpXG5cbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gIHRhc2tEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuXG4gIHRhc2tDYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJylcbiAgdGFza0FkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKVxuXG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcblxuICB0YXNrVGl0bGUuaWQgPSAndGFza1RpdGxlSW5wdXQnXG4gIHRhc2tEZXNjcmlwdGlvbi5pZCA9ICd0YXNrRGVzY3JpcHRpb25JbnB1dCdcbiAgdGFza0RhdGUuaWQgPSAndGFza0RhdGVJbnB1dCdcblxuXG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnVGl0bGUgb2YgdGhlIHRhc2snKVxuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0Rlc2NyaXB0aW9uJylcblxuICB0YXNrQ2FuY2VsQnRuLmlkID0gJ3Rhc2tDYW5jZWxCdG4nXG4gIHRhc2tBZGRCdG4uaWQgPSAndGFza0FkZEJ0bidcblxuICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0gJ0NSRUFURSBUQVNLJ1xuICB0YXNrQ2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgdGFza0FkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcblxuXG4gIGlucHV0c0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG4gIGlucHV0c0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pXG4gIGlucHV0c0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZSlcblxuICBpbnB1dHNEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0RGl2KVxuXG4gIGFkZEJ1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0NhbmNlbEJ0bilcbiAgYWRkQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQWRkQnRuKVxuXG4gIGFkZEV2ZW50RGl2LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpXG4gIGFkZEV2ZW50RGl2LmFwcGVuZENoaWxkKGlucHV0c0RpdilcbiAgYWRkRXZlbnREaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9ucylcblxuXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZEV2ZW50RGl2KTtcbiAgXG4gIHJldHVybiB7XG4gICAgdGFza0Zvcm0sXG4gICAgdGFza1RpdGxlLFxuICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICB0YXNrRGF0ZSxcbiAgICB0YXNrQ2FuY2VsQnRuLFxuICAgIHRhc2tBZGRCdG4sXG4gICAgaW5wdXRzRGl2LFxuICAgIHNlbGVjdERpdixcbiAgICBmb3JtSGVhZGVyXG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=