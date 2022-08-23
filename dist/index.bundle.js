/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: rgb(219, 243, 235);\n  margin: 0;\n}\n\n/* HEADER MODULE */\n\n.header {\n  position: sticky;\n  display: flex;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding: 0.35rem;\n  height: 5wh;\n  justify-content: space-between;\n  background-color: green;\n}\n\n\n.headerLeft {\n  margin-left:1rem ;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.headerLeft * {\n  margin: auto 0.3rem;\n}\n\n.search * {\n  margin: 1px;\n}\n\n.search  {\n  border-radius: 5px;\n}\n\n\n.headerLeft .search, .search input{\n  border: none;\n  display: flex;\n  align-items: center;\n  background-color: antiquewhite;\n}\n\n.search input:focus {\n  border: none;\n  outline: none;\n}\n\n\n.headerRight {\n  display: flex;\n  gap: 1rem;\n  margin-right: 1rem;\n  position: relative;\n  align-items: center;\n}\n\n.headerRight * {\n  height: fit-content;\n}\n\n.headerRight #add:hover::after {\n  content: 'ADD TASK';\n  font-size: small;\n  color: rgb(255, 255, 255);\n  background-color: rgb(72, 118, 110);\n  position: absolute;\n  z-index: 99;\n  padding: 0.5rem;\n  bottom: -2.3rem;\n  right: 8rem;\n  border-radius: 8px;\n  animation: fade 1s;\n  box-shadow: 3px -3px 3px black; \n}\n\n/* Event Add Section */\n\n\n\n.addEvent {\n  padding: 0.6rem;\n  width: 50vh;\n  height: 30vh;\n  border-radius: 7px;\n  position: absolute;\n  left: 50%;\n  top: 15%;\n  transform: translate(-50%, 0);\n  border: 2px solid grey;\n  background-color: rgb(233, 255, 249);\n  opacity: 1;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  z-index: 99;\n}\n\n.addEvent h2 {\n  text-align: center;\n  font-size: 1.6rem;\n  font-weight: 800;\n}\n\n.addEvent input {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 1.3rem;\n  background-color: rgba(233, 255, 249, 0.798);\n  border: none;\n  color: black;\n  font-weight: 700;\n}\n\n.addEvent input::placeholder {\n  color: rgba(19, 20, 20, 0.724);\n  font-style: italic;\n\n}\n\n.addEvent .inputs {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n\n.addEvent .addButtons {\n  display: flex;\n  justify-content: center;\n  margin-top: auto;\n}\n\n.addEvent .addButtons button {\n  height: 2.5rem;\n  width: 8rem;\n  border-radius: 3px;\n}\n\n.addButtons #taskCancelBtn {\n  background-color: rgb(176, 155, 155);\n}\n\n.addButtons #taskAddBtn {\n  background-color: green;\n} \n\n.addButtons #taskCancelBtn:hover {\n  background-color:rgb(237, 0, 0) ;\n}\n\ni:hover,button:hover{\n  cursor:pointer;\n}\n\n.addButtons #taskAddBtn:hover {\n  background-color: rgb(1, 216, 1);\n} \n\n/* TOGGLE THEME */\n\n.toggleTheme {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 62px;\n  height: 32px;\n  display: inline-block;\n  position: relative;\n  border-radius: 50px;\n  overflow: hidden;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  background-color: #707070;\n  transition: background-color ease 0.3s;\n}\n\n.toggleTheme:before {\n  content: \"on off\";\n  display: block;\n  position: absolute;\n  z-index: 2;\n  width: 28px;\n  height: 28px;\n  background: #fff;\n  left: 2px;\n  top: 2px;\n  border-radius: 50%;\n  font: 10px/28px Helvetica;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-indent: -22px;\n  word-spacing: 37px;\n  color: #fff;\n  text-shadow: -1px -1px rgba(0,0,0,0.15);\n  white-space: nowrap;\n  box-shadow: 0 1px 2px rgba(0,0,0,0.2);\n  transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;\n}\n\n.toggleTheme:checked {\n  background-color: #4CD964;\n}\n\n.toggleTheme:checked:before {\n  left: 32px;\n}\n\nlabel[for='toggle'] {\n  font-size: 0.9rem;\n  margin-right: -10px;\n}\n\n/* ------------------------------------------------------ */\n/* CONTAINER */\n.container {\n  display: grid;\n  grid-template-columns: 1.1fr 4fr;\n  /* height: 100%; */\n}\n\n\n\n/* Sidebar */\n\nhtml {\n  width: 100%;\n}\n\nbody {\n  height: 100%;   \n  margin: 0px;  /* removes default style */\n  /* display: flex;  */\n  box-sizing: border-box;\n  /* flex-direction: column; */\n  overflow: hidden;  \n} \n/* for the main page, you should add overflow-y: auto, and maybe flex-grow: 1 */\n\n\n.container .sidebar {\n  height: 125vh;\n  padding: 1rem;\n  grid-row: 1 / -1;\n  background-color: rgb(187, 219, 208);\n}\n\n.container .sidebar .dateSection > div {\n  height: fit-content;\n  display: flex;\n  align-items: center;\n}\n\n.container .sidebar .projectSection div {\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.container .sidebar .projectSection .projectHeader p {\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n\n.projectSection .project:hover, \n.dateSection > div:hover,\n.projectSection .projectHeader i:hover,\n.header i:hover,\n.projectSection .project:active, \n.dateSection > div:active,\n.projectSection .projectHeader i:active,\n.header i:active,\n.active{\n  border: 1px solid grey;\n  background-color:rgba(164, 193, 183, 0.703);\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n\n.projectSection .projectHeader > i:hover::after {\n  content: 'ADD PROJECT';\n}\n\n.projectSection .project > i:hover::after {\n  content: 'DELETE';\n}\n\n.projectSection .project > i:hover::after,\n.projectSection .projectHeader > i:hover::after {\n  font-size: small;\n  color: rgb(255, 255, 255);\n  background-color: rgb(72, 118, 110);\n  font-weight: 600;\n  position: absolute;\n  margin-left: 1.1rem;\n  padding: 0.6rem;\n  border-radius: 5px;\n  animation: fade 1s;\n  box-shadow: 3px -3px 3px black; \n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Main Page */\n.taskForm {\n  display: none;\n}\n\n\n.mainPage {\n  position: relative;\n  max-height:100vh;\n  max-width:100vw;\n  overflow:auto;\n}\n\n.task {\n  position: relative;\n  z-index: 1;\n  border: 2px solid rgb(0, 110, 0);\n  background-color: #268236b3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  padding: 0.3rem 1rem;\n  margin: 0.5rem 0;\n  height: 50px;\n  font-family: 'Roboto', sans-serif;\n}\n\n.task > div {\n  display: flex;\n  gap: 0.4rem;\n}\n\n.task > div > p:first-child {\n  font-weight: 600;\n}\n\n.task > div > p:nth-child(2) {\n  width: 10rem;\n}\n\n/* CREATE PROJECT */\n\n.projectForm {\n  display: none;\n}\n\n.addButtons #projectCancelBtn {\n  background-color: rgb(147, 0, 0);\n}\n\n.addButtons #projectAddBtn {\n  background-color: green;\n} \n\n.addButtons #projectCancelBtn:hover {\n  background-color:rgb(237, 0, 0) ;\n}\n\ni:hover,button:hover{\n  cursor:pointer;\n}\n\n.addButtons #projectAddBtn:hover {\n  background-color: rgb(1, 216, 1);\n} \n\n/* Style the Displayed Project on the page */\n\n.projectDisplayBox {\n  display: flex; \n  flex-direction: column;\n  border-bottom: 2px solid rgb(82, 81, 81);\n}\n\n.nameAndDate {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 1rem;\n  height: fit-content;\n}\n\n.projectDisplayBox #projectName {\n  font-weight: 700;\n  font-size: 2rem;\n}\n\n.projectDisplayBox #projectDescription {\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin: auto;\n  text-transform: uppercase;\n}\n\n/* ADD TASK TO THE PROJECT BTN */\n.addTaskBtn {\n  /* flex: 1; */\n  height: 3.3rem;\n  width: 14rem;\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  background-color: #bbe449;\n  border-radius: 10px;\n  font-weight: 600;\n  font-family: 'Times New Roman', Times, serif;\n}\n\n.addTaskBtn:hover {\n  /* background-color: #39a04a; */\n  background-color: #647a28;\n  border: 3px solid black;\n  color: rgb(255, 255, 255);\n}\n\n\n/* Hidden Background */\n.hiddenBG {\n  height: 100vh;\n  width: 100%;\n  background-color: black;\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n/* Transition */\n.taskForm.fade-in,\n.projectForm.fade-in{\n  animation: fade_in_show 0.4s;\n}\n\n@keyframes fade_in_show {\n  0% {\n    opacity: 0;\n    height: 0;\n  }\n\n  25% {\n    opacity: 0.25;\n    height: 25%;\n  }\n\n  50% {\n    opacity: 0.50;\n    height: 50%;\n  }\n\n  100% {\n    opacity: 1;\n    height: 100%;\n  }\n}\n\n\n/* Task form select dropdown  */\n.addEvent select {\n  /* background-color: #277334; */\n  height: 1.6rem;\n  width: 8.5rem;\n  border-radius: 4px;\n  font-weight: 600;\n  box-shadow: 2px 2px 3px black;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\nbody {\n  background-color: rgb(219, 243, 235);\n  margin: 0;\n}\n\n/* HEADER MODULE */\n\n.header {\n  position: sticky;\n  display: flex;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding: 0.35rem;\n  height: 5wh;\n  justify-content: space-between;\n  background-color: green;\n}\n\n\n.headerLeft {\n  margin-left:1rem ;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.headerLeft * {\n  margin: auto 0.3rem;\n}\n\n.search * {\n  margin: 1px;\n}\n\n.search  {\n  border-radius: 5px;\n}\n\n\n.headerLeft .search, .search input{\n  border: none;\n  display: flex;\n  align-items: center;\n  background-color: antiquewhite;\n}\n\n.search input:focus {\n  border: none;\n  outline: none;\n}\n\n\n.headerRight {\n  display: flex;\n  gap: 1rem;\n  margin-right: 1rem;\n  position: relative;\n  align-items: center;\n}\n\n.headerRight * {\n  height: fit-content;\n}\n\n.headerRight #add:hover::after {\n  content: 'ADD TASK';\n  font-size: small;\n  color: rgb(255, 255, 255);\n  background-color: rgb(72, 118, 110);\n  position: absolute;\n  z-index: 99;\n  padding: 0.5rem;\n  bottom: -2.3rem;\n  right: 8rem;\n  border-radius: 8px;\n  animation: fade 1s;\n  box-shadow: 3px -3px 3px black; \n}\n\n/* Event Add Section */\n\n\n\n.addEvent {\n  padding: 0.6rem;\n  width: 50vh;\n  height: 30vh;\n  border-radius: 7px;\n  position: absolute;\n  left: 50%;\n  top: 15%;\n  transform: translate(-50%, 0);\n  border: 2px solid grey;\n  background-color: rgb(233, 255, 249);\n  opacity: 1;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  z-index: 99;\n}\n\n.addEvent h2 {\n  text-align: center;\n  font-size: 1.6rem;\n  font-weight: 800;\n}\n\n.addEvent input {\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 1.3rem;\n  background-color: rgba(233, 255, 249, 0.798);\n  border: none;\n  color: black;\n  font-weight: 700;\n}\n\n.addEvent input::placeholder {\n  color: rgba(19, 20, 20, 0.724);\n  font-style: italic;\n\n}\n\n.addEvent .inputs {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n\n.addEvent .addButtons {\n  display: flex;\n  justify-content: center;\n  margin-top: auto;\n}\n\n.addEvent .addButtons button {\n  height: 2.5rem;\n  width: 8rem;\n  border-radius: 3px;\n}\n\n.addButtons #taskCancelBtn {\n  background-color: rgb(176, 155, 155);\n}\n\n.addButtons #taskAddBtn {\n  background-color: green;\n} \n\n.addButtons #taskCancelBtn:hover {\n  background-color:rgb(237, 0, 0) ;\n}\n\ni:hover,button:hover{\n  cursor:pointer;\n}\n\n.addButtons #taskAddBtn:hover {\n  background-color: rgb(1, 216, 1);\n} \n\n/* TOGGLE THEME */\n\n.toggleTheme {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 62px;\n  height: 32px;\n  display: inline-block;\n  position: relative;\n  border-radius: 50px;\n  overflow: hidden;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  background-color: #707070;\n  transition: background-color ease 0.3s;\n}\n\n.toggleTheme:before {\n  content: \"on off\";\n  display: block;\n  position: absolute;\n  z-index: 2;\n  width: 28px;\n  height: 28px;\n  background: #fff;\n  left: 2px;\n  top: 2px;\n  border-radius: 50%;\n  font: 10px/28px Helvetica;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-indent: -22px;\n  word-spacing: 37px;\n  color: #fff;\n  text-shadow: -1px -1px rgba(0,0,0,0.15);\n  white-space: nowrap;\n  box-shadow: 0 1px 2px rgba(0,0,0,0.2);\n  transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;\n}\n\n.toggleTheme:checked {\n  background-color: #4CD964;\n}\n\n.toggleTheme:checked:before {\n  left: 32px;\n}\n\nlabel[for='toggle'] {\n  font-size: 0.9rem;\n  margin-right: -10px;\n}\n\n/* ------------------------------------------------------ */\n/* CONTAINER */\n.container {\n  display: grid;\n  grid-template-columns: 1.1fr 4fr;\n  /* height: 100%; */\n}\n\n\n\n/* Sidebar */\n\nhtml {\n  width: 100%;\n}\n\nbody {\n  height: 100%;   \n  margin: 0px;  /* removes default style */\n  /* display: flex;  */\n  box-sizing: border-box;\n  /* flex-direction: column; */\n  overflow: hidden;  \n} \n/* for the main page, you should add overflow-y: auto, and maybe flex-grow: 1 */\n\n\n.container .sidebar {\n  height: 125vh;\n  padding: 1rem;\n  grid-row: 1 / -1;\n  background-color: rgb(187, 219, 208);\n}\n\n.container .sidebar .dateSection > div {\n  height: fit-content;\n  display: flex;\n  align-items: center;\n}\n\n.container .sidebar .projectSection div {\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.container .sidebar .projectSection .projectHeader p {\n  font-weight: 600;\n  font-size: 1.5rem;\n}\n\n.projectSection .project:hover, \n.dateSection > div:hover,\n.projectSection .projectHeader i:hover,\n.header i:hover,\n.projectSection .project:active, \n.dateSection > div:active,\n.projectSection .projectHeader i:active,\n.header i:active,\n.active{\n  border: 1px solid grey;\n  background-color:rgba(164, 193, 183, 0.703);\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n\n.projectSection .projectHeader > i:hover::after {\n  content: 'ADD PROJECT';\n}\n\n.projectSection .project > i:hover::after {\n  content: 'DELETE';\n}\n\n.projectSection .project > i:hover::after,\n.projectSection .projectHeader > i:hover::after {\n  font-size: small;\n  color: rgb(255, 255, 255);\n  background-color: rgb(72, 118, 110);\n  font-weight: 600;\n  position: absolute;\n  margin-left: 1.1rem;\n  padding: 0.6rem;\n  border-radius: 5px;\n  animation: fade 1s;\n  box-shadow: 3px -3px 3px black; \n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Main Page */\n.taskForm {\n  display: none;\n}\n\n\n.mainPage {\n  position: relative;\n  max-height:100vh;\n  max-width:100vw;\n  overflow:auto;\n}\n\n.task {\n  position: relative;\n  z-index: 1;\n  border: 2px solid rgb(0, 110, 0);\n  background-color: #268236b3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 5px;\n  padding: 0.3rem 1rem;\n  margin: 0.5rem 0;\n  height: 50px;\n  font-family: 'Roboto', sans-serif;\n}\n\n.task > div {\n  display: flex;\n  gap: 0.4rem;\n}\n\n.task > div > p:first-child {\n  font-weight: 600;\n}\n\n.task > div > p:nth-child(2) {\n  width: 10rem;\n}\n\n/* CREATE PROJECT */\n\n.projectForm {\n  display: none;\n}\n\n.addButtons #projectCancelBtn {\n  background-color: rgb(147, 0, 0);\n}\n\n.addButtons #projectAddBtn {\n  background-color: green;\n} \n\n.addButtons #projectCancelBtn:hover {\n  background-color:rgb(237, 0, 0) ;\n}\n\ni:hover,button:hover{\n  cursor:pointer;\n}\n\n.addButtons #projectAddBtn:hover {\n  background-color: rgb(1, 216, 1);\n} \n\n/* Style the Displayed Project on the page */\n\n.projectDisplayBox {\n  display: flex; \n  flex-direction: column;\n  border-bottom: 2px solid rgb(82, 81, 81);\n}\n\n.nameAndDate {\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 1rem;\n  height: fit-content;\n}\n\n.projectDisplayBox #projectName {\n  font-weight: 700;\n  font-size: 2rem;\n}\n\n.projectDisplayBox #projectDescription {\n  font-size: 0.8rem;\n  font-weight: 600;\n  margin: auto;\n  text-transform: uppercase;\n}\n\n/* ADD TASK TO THE PROJECT BTN */\n.addTaskBtn {\n  /* flex: 1; */\n  height: 3.3rem;\n  width: 14rem;\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  background-color: #bbe449;\n  border-radius: 10px;\n  font-weight: 600;\n  font-family: 'Times New Roman', Times, serif;\n}\n\n.addTaskBtn:hover {\n  /* background-color: #39a04a; */\n  background-color: #647a28;\n  border: 3px solid black;\n  color: rgb(255, 255, 255);\n}\n\n\n/* Hidden Background */\n.hiddenBG {\n  height: 100vh;\n  width: 100%;\n  background-color: black;\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n/* Transition */\n.taskForm.fade-in,\n.projectForm.fade-in{\n  animation: fade_in_show 0.4s;\n}\n\n@keyframes fade_in_show {\n  0% {\n    opacity: 0;\n    height: 0;\n  }\n\n  25% {\n    opacity: 0.25;\n    height: 25%;\n  }\n\n  50% {\n    opacity: 0.50;\n    height: 50%;\n  }\n\n  100% {\n    opacity: 1;\n    height: 100%;\n  }\n}\n\n\n/* Task form select dropdown  */\n.addEvent select {\n  /* background-color: #277334; */\n  height: 1.6rem;\n  width: 8.5rem;\n  border-radius: 4px;\n  font-weight: 600;\n  box-shadow: 2px 2px 3px black;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/delete_todo.js":
/*!****************************!*\
  !*** ./src/delete_todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTODO": () => (/* binding */ deleteTODO)
/* harmony export */ });
function deleteTODO() {
  console.log('TODO WILL BE DELETED NOWwwwwwwwwwwwww')
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _delete_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete_todo.js */ "./src/delete_todo.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _taskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskForm */ "./src/taskForm.js");
/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectForm */ "./src/projectForm.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");








/**
 * Add these functions
 * Edit and see the details of a task coming from local storage
 * 
 * 
 */   


(function() {
  // Define Icons
  const iconLink = document.createElement('link')
  iconLink.setAttribute('rel','stylesheet')
  iconLink.setAttribute('href','https://fonts.googleapis.com/icon?family=Material+Icons')
  document.head.appendChild(iconLink)

  // Add a hidden background
  const hiddenBG = document.createElement('div');
  hiddenBG.classList.add('hiddenBG')
  document.body.appendChild(hiddenBG)

  // Add header 
  const header = (0,_header_js__WEBPACK_IMPORTED_MODULE_2__.createHeader)();
  document.body.appendChild(header.header);

  // Create the sidebar
  const sidebar = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_5__.createSidebar)();
  const container = document.createElement('div')
  container.classList.add('container')
  document.body.appendChild(container)
  container.appendChild(sidebar);

  // Create the main page
  const mainPage = document.createElement('div')
  mainPage.classList.add('mainPage')
  container.appendChild(mainPage)

  // Event Box
  const taskBox = (0,_taskForm__WEBPACK_IMPORTED_MODULE_3__.addEvent)();
  document.body.appendChild(taskBox.taskForm);

  // Project Box
  const projectBox = (0,_projectForm__WEBPACK_IMPORTED_MODULE_4__.addProject)();
  document.body.appendChild(projectBox.projectForm)

  // Init the page with saved tasks


  // Project Class to create a new project
  class Project {
    constructor(title,description,due,priority) {
      this.title = title
      this.description = description
      this.due = due
      this.priority = priority
    }
  }

  // Task Class to create a new project
  class Task extends Project {
    constructor(title,description,due,priority) {
      super(title,description,due,priority)
      this.toProject = this.toProject
    }
  }

  const Create = (function() {

    const createProject = () => {
      const newProject = new Project()
      return newProject
    }

    const _createProjectBox = () => {
      DisplayInfo.displayProjectForm();
    }

    const setProjectInfo = (newProject) => {
      newProject.title = document.getElementById('projectTitleInput').value.replaceAll(' ','-')
      newProject.description = document.getElementById('projectDescriptionInput').value
      newProject.due = document.getElementById('projectDateInput').value
    }

    const createProjectDiv = (title) => {
      const project = document.createElement('div')
      const projectName = document.createElement('div')
      const projectIcon = document.createElement('i')
      const projectNameP = document.createElement('p')
      const projectDeleteIcon = document.createElement('i')

      project.classList.add('project')
      projectName.classList.add('projectName')
      projectIcon.classList.add('material-icons')
      projectDeleteIcon.classList.add('material-icons')

      project.id = title

      projectIcon.textContent = 'arrow_right'
      projectNameP.textContent = title.replaceAll('-',' ')
      projectDeleteIcon.textContent = 'delete'

      projectName.appendChild(projectIcon)
      projectName.appendChild(projectNameP)

      project.appendChild(projectName)
      project.appendChild(projectDeleteIcon)

      return project
    }

    const createProjectDetails = (project) => {
      const projectDisplayBox = document.createElement('div')
      const nameAndDate = document.createElement('div')
      const projectName = document.createElement('p')
      const projectDescription = document.createElement('p')
      const projectDate = document.createElement('p')
      
      projectDisplayBox.classList.add('projectDisplayBox')
      nameAndDate.classList.add('nameAndDate')
      projectDisplayBox.id = project.title

      projectName.id = 'projectName'
      projectDescription.id = 'projectDescription'
      projectDate.id = 'projectDate'

      projectName.textContent = project.title.replaceAll('-',' ')
      projectDescription.textContent = project.description
      projectDate.textContent = `${project.due}` 

      nameAndDate.appendChild(projectName)
      nameAndDate.appendChild(projectDate)

      projectDisplayBox.appendChild(nameAndDate)
      projectDisplayBox.appendChild(projectDescription)

      return projectDisplayBox
    }

    const _manageProject = (event) => {
      // Prevent from reloading page!
      event.preventDefault()

      // Create the project
      const newProject = createProject()

      // Set project object
      setProjectInfo(newProject)

      // Set Project to local store
      setProjectToLocalStorage(newProject)

      // Display the project object on the sidebar!
      DisplayInfo.displayProject(newProject.title)

      // Disappear the project box from the sidebar
      DisplayInfo.disappearProjectForm()

      // Add the project on the main page
      const projectDiv = Create.createProjectDetails(newProject)
      projectDiv.style.display = 'none'
      document.querySelector('.mainPage').prepend(projectDiv) 

      // Display the CLICKED project object on the main page!
      document.querySelector(`.projectSection #${newProject.title}`).addEventListener('click',(event) => {

        // If the clicked one is active do nothing!
        if (event.currentTarget.classList.contains('active')) {
          console.log('This project is already active!')
          console.log(event.currentTarget.classList)
        } else {
          DisplayInfo.displayProjectInfo(projectDiv)
          console.log(projectDiv)
          projectDiv.classList.add('activeProject')
          document.querySelectorAll('.task').forEach(task => task.style.display = 'none')
          document.querySelectorAll(`.mainPage div[data-project="${newProject.title}"]`).forEach(task => task.style.display = 'flex')

          let activeProject = document.querySelector('.active')
          if (activeProject) { 
            activeProject.classList.remove('active')
            document.querySelector(`.mainPage > #${activeProject.id}`).style.display = 'none'
            document.querySelector(`.mainPage > #${activeProject.id}`).classList.remove('activeProject')
          }
          event.currentTarget.classList.add('active')        
        }
      })
      // Add the project name to the Select options of task creation
      DisplayInfo.addProjecttoTaskForm(newProject.title)

      // Delete Project
      document.querySelector(`#${newProject.title} > i`).addEventListener('click',(event) => _deleteProject(newProject.title,event))

      // Reset the form!
      event.target.reset()
    } 

    const _deleteProject = (title,event) => {
      const removedProject = event.path[1]
      document.getElementById('select-project').removeChild(document.querySelector(`option[value="${removedProject.id}"`))

      const projectSection = document.querySelector('.projectSection')
      const projectOnTheScreen = document.querySelector(`.mainPage > #${removedProject.id}`)
      if (projectOnTheScreen !== null) {
        if (projectOnTheScreen.id == event.path[1].id) {
          // Remove the project on the screen
          document.querySelector('.mainPage').removeChild(projectOnTheScreen)
          // delete the realted tasks
          document.querySelectorAll(`.mainPage div[data-project="${projectOnTheScreen.id}"]`).forEach(task => {
            localStorage.removeItem(`Task ${task.id}`)
            document.querySelector('.mainPage').removeChild(task)
          })
        }
      }
      localStorage.removeItem(`Project ${title}`)
      projectSection.removeChild(removedProject)
      console.log('PROJECT REMOVED',removedProject)
      event.stopPropagation()
    }

    const _cancelProject = () => {
      projectBox.projectForm.reset()
      DisplayInfo.disappearProjectForm()
    }

    const _listenProject = () => {
      document.querySelector('.projectHeader > i').addEventListener('click', _createProjectBox)
      projectBox.projectForm.addEventListener('submit', _manageProject)
      projectBox.projectCancelBtn.addEventListener('click',_cancelProject)
    }

    const createTask = () => {
      const newTask = new Task();
      return newTask
    }

    const _createTaskBox = () => {
      DisplayInfo.displayTaskForm();
    }

    const setTaskInfo = (newTask) => {
      newTask.title = taskBox.taskTitle.value
      // newTask.title = document.getElementById('taskTitleInput').value
      newTask.description = document.getElementById('taskDescriptionInput').value
      newTask.due = document.getElementById('taskDateInput').value
      newTask.toProject = document.getElementById('select-project').value
    }

    const createTaskDiv = (title,due,toProject) => {
      const task = document.createElement('div')
      
      const taskName = document.createElement('div')
      const titleHolder = document.createElement('p')
      const taskTitleP = document.createElement('p')
      
      const taskDueDate = document.createElement('div')
      const dueDateHolder = document.createElement('p')
      const taskDueP = document.createElement('p')

      const editIcon = document.createElement('i')
      const taskCheckbox = document.createElement('input')

      editIcon.classList.add('material-icons')
      task.classList.add('task')
      taskName.classList.add('taskName')
      taskDueDate.classList.add('taskDueDate')

      task.setAttribute('data-project',toProject)

      editIcon.id = 'editIcon'
      task.id = `${title}`
      taskTitleP.id = 'taskTitle'
      taskDueP.id = 'taskDue'

      editIcon.textContent = 'edit'
      titleHolder.textContent = 'Task Title:'
      dueDateHolder.textContent = 'Due Date:'

      taskTitleP.textContent = title
      taskDueP.textContent = due

      taskCheckbox.type = 'checkbox'
      taskCheckbox.id = 'taskCheckBox'

      taskName.appendChild(titleHolder)
      taskName.appendChild(taskTitleP)

      taskDueDate.appendChild(dueDateHolder)
      taskDueDate.appendChild(taskDueP)

      task.appendChild(taskName)
      task.appendChild(taskDueDate)
      task.appendChild(editIcon)
      task.appendChild(taskCheckbox)

      return task
    }

    const _manageTask = (event) => {
      event.preventDefault()
      
      // Create the task
      const newTask = createTask()

      // Set task object
      setTaskInfo(newTask)

      // Display the task object on the page!
      const task = Create.createTaskDiv(newTask.title,newTask.due,newTask.toProject) 
      mainPage.appendChild(task)
      DisplayInfo.displayTask(newTask.toProject)

      // Add it to the local storage
      setTaskToLocalStorage(newTask)

      // Disappear the task box
      DisplayInfo.disappearTaskForm()

      // Edit task
      document.getElementById('editIcon').addEventListener('click',(event) => _editTask(event,newTask))

      // delete task
      document.getElementById(`${newTask.title}`).addEventListener('change',(event) => _deleteTask(newTask.title,event))

      // Prevent from reloading page!
      event.target.reset()
    }

    const _editTask = (event,newTask) => {
      const editTaskForm = (0,_taskForm__WEBPACK_IMPORTED_MODULE_3__.addEvent)();
      console.log('worked')

      editTaskForm.taskForm.style.display = 'flex'
      editTaskForm.taskForm.classList.add('fade-in')

      editTaskForm.formHeader.textContent = 'EDIT TASK'

      editTaskForm.inputsDiv.removeChild(editTaskForm.selectDiv)
      mainPage.appendChild(editTaskForm.taskForm)

      editTaskForm.taskTitle.removeAttribute('required')
      editTaskForm.taskDescription.removeAttribute('required')
      editTaskForm.taskDate.removeAttribute('required')

      editTaskForm.taskForm.addEventListener('submit',(event) => _updateTask(event,newTask,editTaskForm))
      editTaskForm.taskCancelBtn.addEventListener('click',() => {
        editTaskForm.taskForm.reset()
        editTaskForm.taskForm.style.display = 'none'
      })
    }

    const _updateTask = (event,newTask,editTaskForm) => {
      event.preventDefault()

      if (editTaskForm.taskTitle.value !== '') {
        newTask.title = editTaskForm.taskTitle.value
      }

      if (editTaskForm.taskDescription.value !== '') {
        newTask.description = editTaskForm.taskDescription.value
      }

      if (editTaskForm.taskDate.value !== '') {
        newTask.due = editTaskForm.taskDate.value
      }

      document.getElementById('taskTitle').textContent = newTask.title
      document.getElementById('taskDue').textContent = newTask.due

      console.log('New Title: ',newTask.title)
      console.log('New Description: ',newTask.description)
      console.log('New Date: ',newTask.due)

      editTaskForm.taskForm.classList.remove('fade-in')
      mainPage.removeChild(editTaskForm.taskForm)
      event.target.reset()
    }

    const setTaskToLocalStorage = (newTask) => {
      localStorage.setItem(`Task ${newTask.title}`,JSON.stringify(newTask))
    }

    const setProjectToLocalStorage = (newProject) => {
      localStorage.setItem(`Project ${newProject.title}`,JSON.stringify(newProject))
    }

    const getItemFromLocalStore = () => {
      for(let i=0;i<localStorage.length; i++) {
        if (localStorage.key(i).includes('Task')) {

          let taskTitle = localStorage.key( i );
          let taskDetail = JSON.parse( localStorage.getItem( taskTitle ) );
          let storedTask = Create.createTaskDiv(taskDetail.title,taskDetail.due,taskDetail.toProject)
  
          mainPage.appendChild(storedTask)
  
          DisplayInfo.displayTask(taskDetail.toProject)

          document.getElementById(`${taskDetail.title}`).addEventListener('change',(event) => _deleteTask(taskDetail.title,event))
        }
        // document.getElementById('editIcon').addEventListener('click',(event) => _editTask(event,taskDetail))
      }
    }

    const getProjectFromLocalStore = () => {
      for(let i=0;i<localStorage.length; i++) {
        if (localStorage.key(i).includes('Project')) {
          let projectTitle = localStorage.key( i );
          let projectDetail = JSON.parse( localStorage.getItem( projectTitle ) );
  
          DisplayInfo.displayProject(projectDetail.title)

          const projectDiv = Create.createProjectDetails(projectDetail)
          projectDiv.style.display = 'none'
          document.querySelector('.mainPage').prepend(projectDiv) 

          // Display the CLICKED project object on the main page!
          document.querySelector(`.projectSection #${projectDetail.title}`).addEventListener('click',(event) => {
            // If the clicked one is active do nothing!
            if (event.currentTarget.classList.contains('active')) {
              console.log('This project is already active!')
              console.log(event.currentTarget.classList)
            } else {
              DisplayInfo.displayProjectInfo(projectDiv)
              console.log(projectDiv)
              projectDiv.classList.add('activeProject')
              document.querySelectorAll('.task').forEach(task => task.style.display = 'none')
              document.querySelectorAll(`.mainPage div[data-project="${projectDetail.title}"]`).forEach(task => task.style.display = 'flex')
    
              let activeProject = document.querySelector('.active')
              if (activeProject) { 
                activeProject.classList.remove('active')
                document.querySelector(`.mainPage > #${activeProject.id}`).style.display = 'none'
                document.querySelector(`.mainPage > #${activeProject.id}`).classList.remove('activeProject')
              }
              event.currentTarget.classList.add('active')        
            }
          })

          // Add the project name to the Select options of task creation
          DisplayInfo.addProjecttoTaskForm(projectDetail.title)

          // Delete Project
          document.querySelector(`#${projectDetail.title} > i`).addEventListener('click',(event) => _deleteProject(projectDetail.title,event))
        }
      }
    }

    const _deleteTask = (title,event) => {
      console.log('TASK REMOVED: ',event.path[1])
      localStorage.removeItem(`Task ${title}`)
      document.querySelector('.mainPage').removeChild(event.path[1])
      event.stopPropagation()
    }

    const _cancelTask = () => {
      taskBox.taskForm.reset();
      DisplayInfo.disappearTaskForm()
    }

    const createMainPage = () => {
      DisplayInfo.displayMainPage()
    }

    const createTodayDiv = () => {
      const todayDiv = document.createElement('div')
      const todayHeader = document.createElement('h1')

      todayDiv.classList.add('todayDiv')
      todayHeader.id = 'todayHeader'

      todayHeader.textContent = 'Today'

      todayDiv.appendChild(todayHeader)

      return todayDiv
    }

    const _listenMainPage = () => {
      document.getElementById('home').addEventListener('click', createMainPage)
    }

    const _listenTask = () => {
      header.addIcon.addEventListener('click',_createTaskBox)
      taskBox.taskForm.addEventListener('submit', _manageTask)
      taskBox.taskCancelBtn.addEventListener('click',_cancelTask)
    }

    const _listen =  (function() {
      _listenProject()
      _listenTask()
      _listenMainPage()
    })()

    return {
      createTask,
      setTaskInfo,
      createTaskDiv,
      createProject,
      createProjectDiv,
      setProjectInfo,
      createProjectDetails,
      createTodayDiv,
      getItemFromLocalStore,
      getProjectFromLocalStore
    }

  })();

  const DisplayInfo = (function() {

    const displayProjectForm = () => {
      projectBox.projectForm.style.cssText = 'display:block;'
      projectBox.projectForm.classList.add('fade-in')
      hiddenBG.style.cssText = 'z-index:1; opacity:0.5'
    }

    const disappearProjectForm = () => {
      projectBox.projectForm.style.cssText = 'display:none;'
      projectBox.projectForm.classList.remove('fade-in')
      hiddenBG.style.cssText = 'z-index:-1; opacity:0'
    }

    const displayProject = (title) => {
      const project = Create.createProjectDiv(title)
      document.querySelector('.projectSection').appendChild(project)
    }

    const displayProjectInfo = (projectDiv) => {
      projectDiv.style.display = 'flex'
    }

    const displayTaskForm = () => {
      taskBox.taskForm.style.display = 'block'
      taskBox.taskForm.classList.add('fade-in')
      hiddenBG.style.cssText = 'z-index:1; opacity:0.5'
    }

    const disappearTaskForm = () => {
      taskBox.taskForm.style.display = 'none'
      taskBox.taskForm.classList.remove('fade-in')
      hiddenBG.style.cssText = 'z-index:-1; opacity:0'
    }

    const displayTask = (toProject) => {
      //  eger ekranda bir proje varsa ve bu projeye task ekleniyorsa o halde display flex olarak eklenmeli

      const tasksOfProject = (document.querySelectorAll(`.mainPage div[data-project="${toProject}"]`))
      tasksOfProject.forEach(task => task.style.display = 'none')
      // Bu alttaki if statemetlarda sadece ilk taski eklerken ekranda proje var mi ona bakiyorum
      // su anda ekranda bir proje var mi ve varsa eger bu projenin id'siyle benim taskimin data-project'i uyuyor mu 
      if (document.querySelector('.mainPage > div')) {
        document.querySelectorAll('.projectDisplayBox').forEach(project => {
          if (project.classList.contains('activeProject')) {
            tasksOfProject.forEach(task => {
              if (task.getAttribute('data-project') == project.id) {
                console.log('Task Added')
                task.style.display = 'flex'
              }
              else {
                task.style.display = 'none'
              }
            })
          }
        })
      }
    }

    const manageTasksDisplay = (display) => {
      document.querySelectorAll('.task').forEach(task => task.style.display = display)
    }

    const manageProjectDisplay = (display) => {
      if (document.querySelector('.projectDisplayBox')) document.querySelector('.projectDisplayBox').style.display = display
    }

    const displayMainPage = () => {
      manageTasksDisplay('flex')
      manageProjectDisplay('none')
    }

    const displayTodayDiv = () => {
      const todayDiv = Create.createTodayDiv()
      todayDiv.style.display = 'block'
    }

    const addProjecttoTaskForm = (projectName) => {
      const projectOption = document.createElement('option')
      projectOption.textContent = projectName
      projectOption.value = projectName
      document.querySelector('#select-project').appendChild(projectOption)
    }

    return {
      displayTaskForm,
      disappearTaskForm,
      displayTask,
      displayProjectForm,
      disappearProjectForm,
      displayProject,
      displayProjectInfo,
      displayMainPage,
      addProjecttoTaskForm,
    }
  })()


  Create.getItemFromLocalStore()
  Create.getProjectFromLocalStore()
})()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxlQUFlLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsc0JBQXNCLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxjQUFjLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sVUFBVSxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssT0FBTyxZQUFZLE1BQU0sWUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDcEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBOztBQUVBLHVGQUF1RixVQUFVO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlbGV0ZV90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyNDMsIDIzNSk7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhFQURFUiBNT0RVTEUgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMC4zNXJlbTtcXG4gIGhlaWdodDogNXdoO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi5oZWFkZXJMZWZ0IHtcXG4gIG1hcmdpbi1sZWZ0OjFyZW0gO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlckxlZnQgKiB7XFxuICBtYXJnaW46IGF1dG8gMC4zcmVtO1xcbn1cXG5cXG4uc2VhcmNoICoge1xcbiAgbWFyZ2luOiAxcHg7XFxufVxcblxcbi5zZWFyY2ggIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuLmhlYWRlckxlZnQgLnNlYXJjaCwgLnNlYXJjaCBpbnB1dHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi5oZWFkZXJSaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlclJpZ2h0ICoge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmhlYWRlclJpZ2h0ICNhZGQ6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdBREQgVEFTSyc7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MiwgMTE4LCAxMTApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3R0b206IC0yLjNyZW07XFxuICByaWdodDogOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGFuaW1hdGlvbjogZmFkZSAxcztcXG4gIGJveC1zaGFkb3c6IDNweCAtM3B4IDNweCBibGFjazsgXFxufVxcblxcbi8qIEV2ZW50IEFkZCBTZWN0aW9uICovXFxuXFxuXFxuXFxuLmFkZEV2ZW50IHtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIHdpZHRoOiA1MHZoO1xcbiAgaGVpZ2h0OiAzMHZoO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAxNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyNTUsIDI0OSk7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLmFkZEV2ZW50IGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmFkZEV2ZW50IGlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMjU1LCAyNDksIDAuNzk4KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5hZGRFdmVudCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMTksIDIwLCAyMCwgMC43MjQpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcblxcbn1cXG5cXG4uYWRkRXZlbnQgLmlucHV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4uYWRkRXZlbnQgLmFkZEJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmFkZEV2ZW50IC5hZGRCdXR0b25zIGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uYWRkQnV0dG9ucyAjdGFza0NhbmNlbEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAxNTUsIDE1NSk7XFxufVxcblxcbi5hZGRCdXR0b25zICN0YXNrQWRkQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn0gXFxuXFxuLmFkZEJ1dHRvbnMgI3Rhc2tDYW5jZWxCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjM3LCAwLCAwKSA7XFxufVxcblxcbmk6aG92ZXIsYnV0dG9uOmhvdmVye1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5hZGRCdXR0b25zICN0YXNrQWRkQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxLCAyMTYsIDEpO1xcbn0gXFxuXFxuLyogVE9HR0xFIFRIRU1FICovXFxuXFxuLnRvZ2dsZVRoZW1lIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogNjJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UgMC4zcztcXG59XFxuXFxuLnRvZ2dsZVRoZW1lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwib24gb2ZmXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGxlZnQ6IDJweDtcXG4gIHRvcDogMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZm9udDogMTBweC8yOHB4IEhlbHZldGljYTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtaW5kZW50OiAtMjJweDtcXG4gIHdvcmQtc3BhY2luZzogMzdweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCByZ2JhKDAsMCwwLDAuMTUpO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgY3ViaWMtYmV6aWVyKDAuMywgMS41LCAwLjcsIDEpIDAuM3M7XFxufVxcblxcbi50b2dnbGVUaGVtZTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0Q5NjQ7XFxufVxcblxcbi50b2dnbGVUaGVtZTpjaGVja2VkOmJlZm9yZSB7XFxuICBsZWZ0OiAzMnB4O1xcbn1cXG5cXG5sYWJlbFtmb3I9J3RvZ2dsZSddIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogQ09OVEFJTkVSICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjFmciA0ZnI7XFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxufVxcblxcblxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG5odG1sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTsgICBcXG4gIG1hcmdpbjogMHB4OyAgLyogcmVtb3ZlcyBkZWZhdWx0IHN0eWxlICovXFxuICAvKiBkaXNwbGF5OiBmbGV4OyAgKi9cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgIFxcbn0gXFxuLyogZm9yIHRoZSBtYWluIHBhZ2UsIHlvdSBzaG91bGQgYWRkIG92ZXJmbG93LXk6IGF1dG8sIGFuZCBtYXliZSBmbGV4LWdyb3c6IDEgKi9cXG5cXG5cXG4uY29udGFpbmVyIC5zaWRlYmFyIHtcXG4gIGhlaWdodDogMTI1dmg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDIxOSwgMjA4KTtcXG59XFxuXFxuLmNvbnRhaW5lciAuc2lkZWJhciAuZGF0ZVNlY3Rpb24gPiBkaXYge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zaWRlYmFyIC5wcm9qZWN0U2VjdGlvbiBkaXYge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zaWRlYmFyIC5wcm9qZWN0U2VjdGlvbiAucHJvamVjdEhlYWRlciBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnByb2plY3RTZWN0aW9uIC5wcm9qZWN0OmhvdmVyLCBcXG4uZGF0ZVNlY3Rpb24gPiBkaXY6aG92ZXIsXFxuLnByb2plY3RTZWN0aW9uIC5wcm9qZWN0SGVhZGVyIGk6aG92ZXIsXFxuLmhlYWRlciBpOmhvdmVyLFxcbi5wcm9qZWN0U2VjdGlvbiAucHJvamVjdDphY3RpdmUsIFxcbi5kYXRlU2VjdGlvbiA+IGRpdjphY3RpdmUsXFxuLnByb2plY3RTZWN0aW9uIC5wcm9qZWN0SGVhZGVyIGk6YWN0aXZlLFxcbi5oZWFkZXIgaTphY3RpdmUsXFxuLmFjdGl2ZXtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTY0LCAxOTMsIDE4MywgMC43MDMpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ucHJvamVjdFNlY3Rpb24gLnByb2plY3RIZWFkZXIgPiBpOmhvdmVyOjphZnRlciB7XFxuICBjb250ZW50OiAnQUREIFBST0pFQ1QnO1xcbn1cXG5cXG4ucHJvamVjdFNlY3Rpb24gLnByb2plY3QgPiBpOmhvdmVyOjphZnRlciB7XFxuICBjb250ZW50OiAnREVMRVRFJztcXG59XFxuXFxuLnByb2plY3RTZWN0aW9uIC5wcm9qZWN0ID4gaTpob3Zlcjo6YWZ0ZXIsXFxuLnByb2plY3RTZWN0aW9uIC5wcm9qZWN0SGVhZGVyID4gaTpob3Zlcjo6YWZ0ZXIge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzIsIDExOCwgMTEwKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tbGVmdDogMS4xcmVtO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlIDFzO1xcbiAgYm94LXNoYWRvdzogM3B4IC0zcHggM3B4IGJsYWNrOyBcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiBNYWluIFBhZ2UgKi9cXG4udGFza0Zvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLm1haW5QYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC1oZWlnaHQ6MTAwdmg7XFxuICBtYXgtd2lkdGg6MTAwdnc7XFxuICBvdmVyZmxvdzphdXRvO1xcbn1cXG5cXG4udGFzayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDExMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY4MjM2YjM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRhc2sgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC40cmVtO1xcbn1cXG5cXG4udGFzayA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhc2sgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogMTByZW07XFxufVxcblxcbi8qIENSRUFURSBQUk9KRUNUICovXFxuXFxuLnByb2plY3RGb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGRCdXR0b25zICNwcm9qZWN0Q2FuY2VsQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDcsIDAsIDApO1xcbn1cXG5cXG4uYWRkQnV0dG9ucyAjcHJvamVjdEFkZEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59IFxcblxcbi5hZGRCdXR0b25zICNwcm9qZWN0Q2FuY2VsQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIzNywgMCwgMCkgO1xcbn1cXG5cXG5pOmhvdmVyLGJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uYWRkQnV0dG9ucyAjcHJvamVjdEFkZEJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMjE2LCAxKTtcXG59IFxcblxcbi8qIFN0eWxlIHRoZSBEaXNwbGF5ZWQgUHJvamVjdCBvbiB0aGUgcGFnZSAqL1xcblxcbi5wcm9qZWN0RGlzcGxheUJveCB7XFxuICBkaXNwbGF5OiBmbGV4OyBcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDgyLCA4MSwgODEpO1xcbn1cXG5cXG4ubmFtZUFuZERhdGUge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucHJvamVjdERpc3BsYXlCb3ggI3Byb2plY3ROYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0RGlzcGxheUJveCAjcHJvamVjdERlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi8qIEFERCBUQVNLIFRPIFRIRSBQUk9KRUNUIEJUTiAqL1xcbi5hZGRUYXNrQnRuIHtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICBoZWlnaHQ6IDMuM3JlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJlNDQ5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG59XFxuXFxuLmFkZFRhc2tCdG46aG92ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzM5YTA0YTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDdhMjg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcblxcbi8qIEhpZGRlbiBCYWNrZ3JvdW5kICovXFxuLmhpZGRlbkJHIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4vKiBUcmFuc2l0aW9uICovXFxuLnRhc2tGb3JtLmZhZGUtaW4sXFxuLnByb2plY3RGb3JtLmZhZGUtaW57XFxuICBhbmltYXRpb246IGZhZGVfaW5fc2hvdyAwLjRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVfaW5fc2hvdyB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC41MDtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5cXG4vKiBUYXNrIGZvcm0gc2VsZWN0IGRyb3Bkb3duICAqL1xcbi5hZGRFdmVudCBzZWxlY3Qge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzI3NzMzNDsgKi9cXG4gIGhlaWdodDogMS42cmVtO1xcbiAgd2lkdGg6IDguNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLG9DQUFvQztFQUNwQyxTQUFTO0FBQ1g7O0FBRUEsa0JBQWtCOztBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsOEJBQThC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bEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyNDMsIDIzNSk7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhFQURFUiBNT0RVTEUgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMC4zNXJlbTtcXG4gIGhlaWdodDogNXdoO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbi5oZWFkZXJMZWZ0IHtcXG4gIG1hcmdpbi1sZWZ0OjFyZW0gO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlckxlZnQgKiB7XFxuICBtYXJnaW46IGF1dG8gMC4zcmVtO1xcbn1cXG5cXG4uc2VhcmNoICoge1xcbiAgbWFyZ2luOiAxcHg7XFxufVxcblxcbi5zZWFyY2ggIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuLmhlYWRlckxlZnQgLnNlYXJjaCwgLnNlYXJjaCBpbnB1dHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi5oZWFkZXJSaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlclJpZ2h0ICoge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuLmhlYWRlclJpZ2h0ICNhZGQ6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdBREQgVEFTSyc7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MiwgMTE4LCAxMTApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3R0b206IC0yLjNyZW07XFxuICByaWdodDogOHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGFuaW1hdGlvbjogZmFkZSAxcztcXG4gIGJveC1zaGFkb3c6IDNweCAtM3B4IDNweCBibGFjazsgXFxufVxcblxcbi8qIEV2ZW50IEFkZCBTZWN0aW9uICovXFxuXFxuXFxuXFxuLmFkZEV2ZW50IHtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIHdpZHRoOiA1MHZoO1xcbiAgaGVpZ2h0OiAzMHZoO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiAxNSU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyNTUsIDI0OSk7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLmFkZEV2ZW50IGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmFkZEV2ZW50IGlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgMjU1LCAyNDksIDAuNzk4KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5hZGRFdmVudCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMTksIDIwLCAyMCwgMC43MjQpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcblxcbn1cXG5cXG4uYWRkRXZlbnQgLmlucHV0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4uYWRkRXZlbnQgLmFkZEJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmFkZEV2ZW50IC5hZGRCdXR0b25zIGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uYWRkQnV0dG9ucyAjdGFza0NhbmNlbEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAxNTUsIDE1NSk7XFxufVxcblxcbi5hZGRCdXR0b25zICN0YXNrQWRkQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn0gXFxuXFxuLmFkZEJ1dHRvbnMgI3Rhc2tDYW5jZWxCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjM3LCAwLCAwKSA7XFxufVxcblxcbmk6aG92ZXIsYnV0dG9uOmhvdmVye1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5hZGRCdXR0b25zICN0YXNrQWRkQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxLCAyMTYsIDEpO1xcbn0gXFxuXFxuLyogVE9HR0xFIFRIRU1FICovXFxuXFxuLnRvZ2dsZVRoZW1lIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogNjJweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UgMC4zcztcXG59XFxuXFxuLnRvZ2dsZVRoZW1lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwib24gb2ZmXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGxlZnQ6IDJweDtcXG4gIHRvcDogMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZm9udDogMTBweC8yOHB4IEhlbHZldGljYTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtaW5kZW50OiAtMjJweDtcXG4gIHdvcmQtc3BhY2luZzogMzdweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCByZ2JhKDAsMCwwLDAuMTUpO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgY3ViaWMtYmV6aWVyKDAuMywgMS41LCAwLjcsIDEpIDAuM3M7XFxufVxcblxcbi50b2dnbGVUaGVtZTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0Q5NjQ7XFxufVxcblxcbi50b2dnbGVUaGVtZTpjaGVja2VkOmJlZm9yZSB7XFxuICBsZWZ0OiAzMnB4O1xcbn1cXG5cXG5sYWJlbFtmb3I9J3RvZ2dsZSddIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogQ09OVEFJTkVSICovXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjFmciA0ZnI7XFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxufVxcblxcblxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG5odG1sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTsgICBcXG4gIG1hcmdpbjogMHB4OyAgLyogcmVtb3ZlcyBkZWZhdWx0IHN0eWxlICovXFxuICAvKiBkaXNwbGF5OiBmbGV4OyAgKi9cXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgIFxcbn0gXFxuLyogZm9yIHRoZSBtYWluIHBhZ2UsIHlvdSBzaG91bGQgYWRkIG92ZXJmbG93LXk6IGF1dG8sIGFuZCBtYXliZSBmbGV4LWdyb3c6IDEgKi9cXG5cXG5cXG4uY29udGFpbmVyIC5zaWRlYmFyIHtcXG4gIGhlaWdodDogMTI1dmg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDIxOSwgMjA4KTtcXG59XFxuXFxuLmNvbnRhaW5lciAuc2lkZWJhciAuZGF0ZVNlY3Rpb24gPiBkaXYge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zaWRlYmFyIC5wcm9qZWN0U2VjdGlvbiBkaXYge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY29udGFpbmVyIC5zaWRlYmFyIC5wcm9qZWN0U2VjdGlvbiAucHJvamVjdEhlYWRlciBwIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnByb2plY3RTZWN0aW9uIC5wcm9qZWN0OmhvdmVyLCBcXG4uZGF0ZVNlY3Rpb24gPiBkaXY6aG92ZXIsXFxuLnByb2plY3RTZWN0aW9uIC5wcm9qZWN0SGVhZGVyIGk6aG92ZXIsXFxuLmhlYWRlciBpOmhvdmVyLFxcbi5wcm9qZWN0U2VjdGlvbiAucHJvamVjdDphY3RpdmUsIFxcbi5kYXRlU2VjdGlvbiA+IGRpdjphY3RpdmUsXFxuLnByb2plY3RTZWN0aW9uIC5wcm9qZWN0SGVhZGVyIGk6YWN0aXZlLFxcbi5oZWFkZXIgaTphY3RpdmUsXFxuLmFjdGl2ZXtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTY0LCAxOTMsIDE4MywgMC43MDMpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ucHJvamVjdFNlY3Rpb24gLnByb2plY3RIZWFkZXIgPiBpOmhvdmVyOjphZnRlciB7XFxuICBjb250ZW50OiAnQUREIFBST0pFQ1QnO1xcbn1cXG5cXG4ucHJvamVjdFNlY3Rpb24gLnByb2plY3QgPiBpOmhvdmVyOjphZnRlciB7XFxuICBjb250ZW50OiAnREVMRVRFJztcXG59XFxuXFxuLnByb2plY3RTZWN0aW9uIC5wcm9qZWN0ID4gaTpob3Zlcjo6YWZ0ZXIsXFxuLnByb2plY3RTZWN0aW9uIC5wcm9qZWN0SGVhZGVyID4gaTpob3Zlcjo6YWZ0ZXIge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzIsIDExOCwgMTEwKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tbGVmdDogMS4xcmVtO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYW5pbWF0aW9uOiBmYWRlIDFzO1xcbiAgYm94LXNoYWRvdzogM3B4IC0zcHggM3B4IGJsYWNrOyBcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiBNYWluIFBhZ2UgKi9cXG4udGFza0Zvcm0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLm1haW5QYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC1oZWlnaHQ6MTAwdmg7XFxuICBtYXgtd2lkdGg6MTAwdnc7XFxuICBvdmVyZmxvdzphdXRvO1xcbn1cXG5cXG4udGFzayB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDExMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY4MjM2YjM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRhc2sgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC40cmVtO1xcbn1cXG5cXG4udGFzayA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhc2sgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogMTByZW07XFxufVxcblxcbi8qIENSRUFURSBQUk9KRUNUICovXFxuXFxuLnByb2plY3RGb3JtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGRCdXR0b25zICNwcm9qZWN0Q2FuY2VsQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDcsIDAsIDApO1xcbn1cXG5cXG4uYWRkQnV0dG9ucyAjcHJvamVjdEFkZEJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59IFxcblxcbi5hZGRCdXR0b25zICNwcm9qZWN0Q2FuY2VsQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDIzNywgMCwgMCkgO1xcbn1cXG5cXG5pOmhvdmVyLGJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uYWRkQnV0dG9ucyAjcHJvamVjdEFkZEJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMjE2LCAxKTtcXG59IFxcblxcbi8qIFN0eWxlIHRoZSBEaXNwbGF5ZWQgUHJvamVjdCBvbiB0aGUgcGFnZSAqL1xcblxcbi5wcm9qZWN0RGlzcGxheUJveCB7XFxuICBkaXNwbGF5OiBmbGV4OyBcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDgyLCA4MSwgODEpO1xcbn1cXG5cXG4ubmFtZUFuZERhdGUge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDFyZW07XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4ucHJvamVjdERpc3BsYXlCb3ggI3Byb2plY3ROYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0RGlzcGxheUJveCAjcHJvamVjdERlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi8qIEFERCBUQVNLIFRPIFRIRSBQUk9KRUNUIEJUTiAqL1xcbi5hZGRUYXNrQnRuIHtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICBoZWlnaHQ6IDMuM3JlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJlNDQ5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG59XFxuXFxuLmFkZFRhc2tCdG46aG92ZXIge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzM5YTA0YTsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDdhMjg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcblxcbi8qIEhpZGRlbiBCYWNrZ3JvdW5kICovXFxuLmhpZGRlbkJHIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4vKiBUcmFuc2l0aW9uICovXFxuLnRhc2tGb3JtLmZhZGUtaW4sXFxuLnByb2plY3RGb3JtLmZhZGUtaW57XFxuICBhbmltYXRpb246IGZhZGVfaW5fc2hvdyAwLjRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVfaW5fc2hvdyB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IDAuMjU7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC41MDtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5cXG4vKiBUYXNrIGZvcm0gc2VsZWN0IGRyb3Bkb3duICAqL1xcbi5hZGRFdmVudCBzZWxlY3Qge1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzI3NzMzNDsgKi9cXG4gIGhlaWdodDogMS42cmVtO1xcbiAgd2lkdGg6IDguNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDNweCBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gZGVsZXRlVE9ETygpIHtcbiAgY29uc29sZS5sb2coJ1RPRE8gV0lMTCBCRSBERUxFVEVEIE5PV3d3d3d3d3d3d3d3d3cnKVxufSIsIi8vIENyZWF0ZSBhIGhlYWRlciBhbmQgZXhwb3J0IGl0IGFzIGEgbm9kZTpcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBcblxuICAvLyBIZWFkZXIgbGVmdFxuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgY29uc3Qgc2VhcmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgY29uc3Qgc2VhcmNoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgaGVhZGVyTGVmdC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJMZWZ0JylcbiAgbWVudUljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICBob21lSWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpXG4gIHNlYXJjaERpdi5jbGFzc0xpc3QuYWRkKCdzZWFyY2gnKVxuICBzZWFyY2hJY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJylcblxuICBtZW51SWNvbi5pZCA9ICdtZW51J1xuICBob21lSWNvbi5pZCA9ICdob21lJ1xuICBcbiAgbWVudUljb24udGV4dENvbnRlbnQgPSAnbWVudSdcbiAgaG9tZUljb24udGV4dENvbnRlbnQgPSAnaG9tZSdcbiAgc2VhcmNoTGFiZWwudGV4dENvbnRlbnQgPSAnc2VhcmNoJ1xuICBcbiAgc2VhcmNoTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdzZWFyY2hJbnB1dCcpXG5cbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdzZWFyY2hJbnB1dCcpXG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdzZWFyY2gnKVxuXG5cblxuICBzZWFyY2hJY29uLmFwcGVuZENoaWxkKHNlYXJjaExhYmVsKTtcbiAgc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaEljb24pXG4gIHNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dClcblxuICBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKG1lbnVJY29uKVxuICBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKGhvbWVJY29uKVxuICBoZWFkZXJMZWZ0LmFwcGVuZENoaWxkKHNlYXJjaERpdik7XG5cbiAgLy8gSGVhZGVyIFJpZ2h0XG5cbiAgY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gIGNvbnN0IHBlcnNvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgY29uc3QgdG9nZ2xlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gIGNvbnN0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcblxuICBoZWFkZXJSaWdodC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJSaWdodCcpXG4gIGFkZEljb24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpXG4gIHBlcnNvbkljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICB0b2dnbGVCdG4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlVGhlbWUnKVxuXG4gIGFkZEljb24uaWQgPSAnYWRkJ1xuICBwZXJzb25JY29uLmlkID0gJ3BlcnNvbidcblxuICB0b2dnbGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvZ2dsZScpXG4gIHRvZ2dsZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpXG4gIHRvZ2dsZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywndG9nZ2xlJylcblxuXG4gIGFkZEljb24udGV4dENvbnRlbnQgPSAnYWRkJ1xuICBwZXJzb25JY29uLnRleHRDb250ZW50ID0gJ3BlcnNvbidcbiAgdG9nZ2xlTGFiZWwudGV4dENvbnRlbnQgPSAnRGFyaydcblxuICBoZWFkZXJSaWdodC5hcHBlbmRDaGlsZChhZGRJY29uKVxuICBoZWFkZXJSaWdodC5hcHBlbmRDaGlsZChwZXJzb25JY29uKVxuICBoZWFkZXJSaWdodC5hcHBlbmRDaGlsZCh0b2dnbGVMYWJlbClcbiAgaGVhZGVyUmlnaHQuYXBwZW5kQ2hpbGQodG9nZ2xlQnRuKVxuXG4gIC8vIEFkZCB0aGUgcmlnaHQgYW5kIGxlZnQgdG8gdGhlIGhlYWRlclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTGVmdClcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclJpZ2h0KVxuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyLFxuICAgIG1lbnVJY29uLFxuICAgIGhvbWVJY29uLFxuICAgIGFkZEljb25cbiAgfVxufSIsIi8vIENyZWF0ZSBhIHByb2plY3QgYm94XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIC8vIENyZWF0ZSB0aGUgZm9ybVxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKTtcbiAgXG4gIFxuICAgIGNvbnN0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBmb3JtSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1IZWFkZXInKVxuICAgIGZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSAnQ1JFQVRFIFBST0pFQ1QnXG4gICAgXG4gICAgY29uc3QgaW5wdXRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNvbnN0IHByb2plY3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBcbiAgICBjb25zdCBhZGRCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBwcm9qZWN0Q2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb25zdCBwcm9qZWN0QWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgXG4gICAgYWRkUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdhZGRFdmVudCcpXG4gICAgaW5wdXRzRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0cycpXG4gICAgYWRkQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b25zJylcbiAgXG4gICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgIHByb2plY3REZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICBwcm9qZWN0RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJylcbiAgXG4gICAgcHJvamVjdENhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKVxuICAgIHByb2plY3RBZGRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0JylcbiAgXG4gICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuICAgIHByb2plY3REZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcbiAgICBwcm9qZWN0RGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcbiAgXG4gICAgcHJvamVjdFRpdGxlLmlkID0gJ3Byb2plY3RUaXRsZUlucHV0J1xuICAgIHByb2plY3REZXNjcmlwdGlvbi5pZCA9ICdwcm9qZWN0RGVzY3JpcHRpb25JbnB1dCdcbiAgICBwcm9qZWN0RGF0ZS5pZCA9ICdwcm9qZWN0RGF0ZUlucHV0J1xuICBcbiAgXG4gICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUaXRsZSBvZiB0aGUgcHJvamVjdCcpXG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdEZXNjcmlwdGlvbicpXG4gIFxuICAgIHByb2plY3RDYW5jZWxCdG4uaWQgPSAncHJvamVjdENhbmNlbEJ0bidcbiAgICBwcm9qZWN0QWRkQnRuLmlkID0gJ3Byb2plY3RBZGRCdG4nXG4gIFxuICAgIHByb2plY3RDYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xuICAgIHByb2plY3RBZGRCdG4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnXG4gIFxuICBcbiAgICBpbnB1dHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuICAgIGlucHV0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pXG4gICAgaW5wdXRzRGl2LmFwcGVuZENoaWxkKHByb2plY3REYXRlKVxuICBcbiAgICBhZGRCdXR0b25zLmFwcGVuZENoaWxkKHByb2plY3RDYW5jZWxCdG4pXG4gICAgYWRkQnV0dG9ucy5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnRuKVxuICBcbiAgICBhZGRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpXG4gICAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChpbnB1dHNEaXYpXG4gICAgYWRkUHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRCdXR0b25zKVxuICBcbiAgXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdERpdik7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2plY3RGb3JtOiBwcm9qZWN0Rm9ybSxcbiAgICAgIHByb2plY3RUaXRsZTogcHJvamVjdFRpdGxlLFxuICAgICAgcHJvamVjdERlc2NyaXB0aW9uOiBwcm9qZWN0RGVzY3JpcHRpb24sXG4gICAgICBwcm9qZWN0RGF0ZTogcHJvamVjdERhdGUsXG4gICAgICBwcm9qZWN0Q2FuY2VsQnRuOiBwcm9qZWN0Q2FuY2VsQnRuLFxuICAgICAgcHJvamVjdEFkZEJ0bjogcHJvamVjdEFkZEJ0blxuICAgIH1cbn0iLCIvLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgc2lkZWJhclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIGNvbnN0IGRhdGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgXG4gIGNvbnN0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gIGNvbnN0IHRvZGF5UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBcbiAgY29uc3QgdXBjb21pbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBjYWxlbmRhckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgY29uc3QgdXBjb21pbmdQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIFxuICBjb25zdCBwcm9qZWN0U2VjdGlvbiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHByb2plY3RQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgXG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXG4gIGRhdGVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2RhdGVTZWN0aW9uJylcbiAgdG9kYXkuY2xhc3NMaXN0LmFkZCgndG9kYXknKVxuICB0b2RheUljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuXG4gIHVwY29taW5nRGl2LmNsYXNzTGlzdC5hZGQoJ2luYm94JylcbiAgY2FsZW5kYXJJY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJylcblxuICBwcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0U2VjdGlvbicpXG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhlYWRlcicpXG4gIGFkZEljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuXG4gIHRvZGF5SWNvbi50ZXh0Q29udGVudCA9ICd0b2RheSdcbiAgdG9kYXlQLnRleHRDb250ZW50ID0gJ1RvZGF5J1xuXG4gIGNhbGVuZGFySWNvbi50ZXh0Q29udGVudCA9ICdpbmJveCdcbiAgdXBjb21pbmdQLnRleHRDb250ZW50ICA9ICdJbmJveCdcblxuICBwcm9qZWN0UC50ZXh0Q29udGVudCA9ICdQcm9qZWN0cydcbiAgYWRkSWNvbi50ZXh0Q29udGVudCA9ICdhZGQnXG5cbiAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0UClcbiAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChhZGRJY29uKVxuXG4gIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpXG5cbiAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlJY29uKVxuICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheVApXG5cbiAgdXBjb21pbmdEaXYuYXBwZW5kQ2hpbGQoY2FsZW5kYXJJY29uKVxuICB1cGNvbWluZ0Rpdi5hcHBlbmRDaGlsZCh1cGNvbWluZ1ApXG5cbiAgZGF0ZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXBjb21pbmdEaXYpXG4gIGRhdGVTZWN0aW9uLmFwcGVuZENoaWxkKHRvZGF5KVxuXG5cbiAgc2lkZWJhci5hcHBlbmRDaGlsZChkYXRlU2VjdGlvbilcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0U2VjdGlvbilcblxuICByZXR1cm4gc2lkZWJhclxufVxuIiwiLy8gRXhwb3J0IHRoZSBhZGQgZXZlbnQgZnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudCgpIHtcblxuICAvLyBDcmVhdGUgdGhlIGZvcm1cbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFza0Zvcm0nKTtcblxuXG4gIGNvbnN0IGFkZEV2ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICBcbiAgY29uc3QgaW5wdXRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXG4gIGNvbnN0IHNlbGVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgY29uc3QgaW5ib3hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuXG4gIHNlbGVjdERpdi5jbGFzc0xpc3QuYWRkKCdzZWxlY3REaXYnKVxuXG4gIHNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnc2VsZWN0LXByb2plY3QnKVxuICBpbmJveE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywnJylcbiAgXG4gIHNlbGVjdFByb2plY3QuaWQgPSAnc2VsZWN0LXByb2plY3QnXG4gIGluYm94T3B0aW9uLnZhbHVlID0gJ0luYm94J1xuICBpbmJveE9wdGlvbi50ZXh0Q29udGVudCA9ICdJbmJveCdcblxuXG4gIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQoaW5ib3hPcHRpb24pXG5cbiAgc2VsZWN0RGl2LmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKVxuICBzZWxlY3REaXYuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdClcblxuICBjb25zdCBhZGRCdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgdGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXG4gIGZvcm1IZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9ybUhlYWRlcicpXG4gIGFkZEV2ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2FkZEV2ZW50JylcbiAgaW5wdXRzRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0cycpXG4gIGFkZEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYWRkQnV0dG9ucycpXG5cbiAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gIHRhc2tEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuXG4gIHRhc2tDYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJylcbiAgdGFza0FkZEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKVxuXG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCcnKVxuICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywnJylcblxuICB0YXNrVGl0bGUuaWQgPSAndGFza1RpdGxlSW5wdXQnXG4gIHRhc2tEZXNjcmlwdGlvbi5pZCA9ICd0YXNrRGVzY3JpcHRpb25JbnB1dCdcbiAgdGFza0RhdGUuaWQgPSAndGFza0RhdGVJbnB1dCdcblxuXG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnVGl0bGUgb2YgdGhlIHRhc2snKVxuICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0Rlc2NyaXB0aW9uJylcblxuICB0YXNrQ2FuY2VsQnRuLmlkID0gJ3Rhc2tDYW5jZWxCdG4nXG4gIHRhc2tBZGRCdG4uaWQgPSAndGFza0FkZEJ0bidcblxuICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0gJ0NSRUFURSBUQVNLJ1xuICB0YXNrQ2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgdGFza0FkZEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcblxuXG4gIGlucHV0c0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG4gIGlucHV0c0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pXG4gIGlucHV0c0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZSlcblxuICBpbnB1dHNEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0RGl2KVxuXG4gIGFkZEJ1dHRvbnMuYXBwZW5kQ2hpbGQodGFza0NhbmNlbEJ0bilcbiAgYWRkQnV0dG9ucy5hcHBlbmRDaGlsZCh0YXNrQWRkQnRuKVxuXG4gIGFkZEV2ZW50RGl2LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpXG4gIGFkZEV2ZW50RGl2LmFwcGVuZENoaWxkKGlucHV0c0RpdilcbiAgYWRkRXZlbnREaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9ucylcblxuXG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZEV2ZW50RGl2KTtcbiAgXG4gIHJldHVybiB7XG4gICAgdGFza0Zvcm0sXG4gICAgdGFza1RpdGxlLFxuICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICB0YXNrRGF0ZSxcbiAgICB0YXNrQ2FuY2VsQnRuLFxuICAgIHRhc2tBZGRCdG4sXG4gICAgaW5wdXRzRGl2LFxuICAgIHNlbGVjdERpdixcbiAgICBmb3JtSGVhZGVyXG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgZGVsZXRlVE9ETyB9IGZyb20gJy4vZGVsZXRlX3RvZG8uanMnO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXIuanMnXG5pbXBvcnQgeyBhZGRFdmVudCBhcyB0YXNrRm9ybSB9IGZyb20gJy4vdGFza0Zvcm0nO1xuaW1wb3J0IHsgYWRkUHJvamVjdCBhcyBwcm9qZWN0Rm9ybSB9IGZyb20gJy4vcHJvamVjdEZvcm0nO1xuaW1wb3J0IHsgY3JlYXRlU2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci5qcyc7XG5cbi8qKlxuICogQWRkIHRoZXNlIGZ1bmN0aW9uc1xuICogRWRpdCBhbmQgc2VlIHRoZSBkZXRhaWxzIG9mIGEgdGFzayBjb21pbmcgZnJvbSBsb2NhbCBzdG9yYWdlXG4gKiBcbiAqIFxuICovICAgXG5cblxuKGZ1bmN0aW9uKCkge1xuICAvLyBEZWZpbmUgSWNvbnNcbiAgY29uc3QgaWNvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgaWNvbkxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCdzdHlsZXNoZWV0JylcbiAgaWNvbkxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29ucycpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaWNvbkxpbmspXG5cbiAgLy8gQWRkIGEgaGlkZGVuIGJhY2tncm91bmRcbiAgY29uc3QgaGlkZGVuQkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGlkZGVuQkcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuQkcnKVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlbkJHKVxuXG4gIC8vIEFkZCBoZWFkZXIgXG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlci5oZWFkZXIpO1xuXG4gIC8vIENyZWF0ZSB0aGUgc2lkZWJhclxuICBjb25zdCBzaWRlYmFyID0gY3JlYXRlU2lkZWJhcigpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAvLyBDcmVhdGUgdGhlIG1haW4gcGFnZVxuICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ21haW5QYWdlJylcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYWdlKVxuXG4gIC8vIEV2ZW50IEJveFxuICBjb25zdCB0YXNrQm94ID0gdGFza0Zvcm0oKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YXNrQm94LnRhc2tGb3JtKTtcblxuICAvLyBQcm9qZWN0IEJveFxuICBjb25zdCBwcm9qZWN0Qm94ID0gcHJvamVjdEZvcm0oKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0Qm94LnByb2plY3RGb3JtKVxuXG4gIC8vIEluaXQgdGhlIHBhZ2Ugd2l0aCBzYXZlZCB0YXNrc1xuXG5cbiAgLy8gUHJvamVjdCBDbGFzcyB0byBjcmVhdGUgYSBuZXcgcHJvamVjdFxuICBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWUscHJpb3JpdHkpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICB0aGlzLmR1ZSA9IGR1ZVxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgfVxuICB9XG5cbiAgLy8gVGFzayBDbGFzcyB0byBjcmVhdGUgYSBuZXcgcHJvamVjdFxuICBjbGFzcyBUYXNrIGV4dGVuZHMgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsZGVzY3JpcHRpb24sZHVlLHByaW9yaXR5KSB7XG4gICAgICBzdXBlcih0aXRsZSxkZXNjcmlwdGlvbixkdWUscHJpb3JpdHkpXG4gICAgICB0aGlzLnRvUHJvamVjdCA9IHRoaXMudG9Qcm9qZWN0XG4gICAgfVxuICB9XG5cbiAgY29uc3QgQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgpXG4gICAgICByZXR1cm4gbmV3UHJvamVjdFxuICAgIH1cblxuICAgIGNvbnN0IF9jcmVhdGVQcm9qZWN0Qm94ID0gKCkgPT4ge1xuICAgICAgRGlzcGxheUluZm8uZGlzcGxheVByb2plY3RGb3JtKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJvamVjdEluZm8gPSAobmV3UHJvamVjdCkgPT4ge1xuICAgICAgbmV3UHJvamVjdC50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGVJbnB1dCcpLnZhbHVlLnJlcGxhY2VBbGwoJyAnLCctJylcbiAgICAgIG5ld1Byb2plY3QuZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdERlc2NyaXB0aW9uSW5wdXQnKS52YWx1ZVxuICAgICAgbmV3UHJvamVjdC5kdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdERhdGVJbnB1dCcpLnZhbHVlXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdERpdiA9ICh0aXRsZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgICAgY29uc3QgcHJvamVjdE5hbWVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBjb25zdCBwcm9qZWN0RGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuXG4gICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKVxuICAgICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICAgICAgcHJvamVjdERlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuXG4gICAgICBwcm9qZWN0LmlkID0gdGl0bGVcblxuICAgICAgcHJvamVjdEljb24udGV4dENvbnRlbnQgPSAnYXJyb3dfcmlnaHQnXG4gICAgICBwcm9qZWN0TmFtZVAudGV4dENvbnRlbnQgPSB0aXRsZS5yZXBsYWNlQWxsKCctJywnICcpXG4gICAgICBwcm9qZWN0RGVsZXRlSWNvbi50ZXh0Q29udGVudCA9ICdkZWxldGUnXG5cbiAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHByb2plY3RJY29uKVxuICAgICAgcHJvamVjdE5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVQKVxuXG4gICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxuICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlSWNvbilcblxuICAgICAgcmV0dXJuIHByb2plY3RcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0RGV0YWlscyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RGlzcGxheUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjb25zdCBuYW1lQW5kRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgXG4gICAgICBwcm9qZWN0RGlzcGxheUJveC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGlzcGxheUJveCcpXG4gICAgICBuYW1lQW5kRGF0ZS5jbGFzc0xpc3QuYWRkKCduYW1lQW5kRGF0ZScpXG4gICAgICBwcm9qZWN0RGlzcGxheUJveC5pZCA9IHByb2plY3QudGl0bGVcblxuICAgICAgcHJvamVjdE5hbWUuaWQgPSAncHJvamVjdE5hbWUnXG4gICAgICBwcm9qZWN0RGVzY3JpcHRpb24uaWQgPSAncHJvamVjdERlc2NyaXB0aW9uJ1xuICAgICAgcHJvamVjdERhdGUuaWQgPSAncHJvamVjdERhdGUnXG5cbiAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZS5yZXBsYWNlQWxsKCctJywnICcpXG4gICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uXG4gICAgICBwcm9qZWN0RGF0ZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QuZHVlfWAgXG5cbiAgICAgIG5hbWVBbmREYXRlLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKVxuICAgICAgbmFtZUFuZERhdGUuYXBwZW5kQ2hpbGQocHJvamVjdERhdGUpXG5cbiAgICAgIHByb2plY3REaXNwbGF5Qm94LmFwcGVuZENoaWxkKG5hbWVBbmREYXRlKVxuICAgICAgcHJvamVjdERpc3BsYXlCb3guYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKVxuXG4gICAgICByZXR1cm4gcHJvamVjdERpc3BsYXlCb3hcbiAgICB9XG5cbiAgICBjb25zdCBfbWFuYWdlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgICAgLy8gUHJldmVudCBmcm9tIHJlbG9hZGluZyBwYWdlIVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIHByb2plY3RcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KClcblxuICAgICAgLy8gU2V0IHByb2plY3Qgb2JqZWN0XG4gICAgICBzZXRQcm9qZWN0SW5mbyhuZXdQcm9qZWN0KVxuXG4gICAgICAvLyBTZXQgUHJvamVjdCB0byBsb2NhbCBzdG9yZVxuICAgICAgc2V0UHJvamVjdFRvTG9jYWxTdG9yYWdlKG5ld1Byb2plY3QpXG5cbiAgICAgIC8vIERpc3BsYXkgdGhlIHByb2plY3Qgb2JqZWN0IG9uIHRoZSBzaWRlYmFyIVxuICAgICAgRGlzcGxheUluZm8uZGlzcGxheVByb2plY3QobmV3UHJvamVjdC50aXRsZSlcblxuICAgICAgLy8gRGlzYXBwZWFyIHRoZSBwcm9qZWN0IGJveCBmcm9tIHRoZSBzaWRlYmFyXG4gICAgICBEaXNwbGF5SW5mby5kaXNhcHBlYXJQcm9qZWN0Rm9ybSgpXG5cbiAgICAgIC8vIEFkZCB0aGUgcHJvamVjdCBvbiB0aGUgbWFpbiBwYWdlXG4gICAgICBjb25zdCBwcm9qZWN0RGl2ID0gQ3JlYXRlLmNyZWF0ZVByb2plY3REZXRhaWxzKG5ld1Byb2plY3QpXG4gICAgICBwcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluUGFnZScpLnByZXBlbmQocHJvamVjdERpdikgXG5cbiAgICAgIC8vIERpc3BsYXkgdGhlIENMSUNLRUQgcHJvamVjdCBvYmplY3Qgb24gdGhlIG1haW4gcGFnZSFcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0U2VjdGlvbiAjJHtuZXdQcm9qZWN0LnRpdGxlfWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpID0+IHtcblxuICAgICAgICAvLyBJZiB0aGUgY2xpY2tlZCBvbmUgaXMgYWN0aXZlIGRvIG5vdGhpbmchXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBwcm9qZWN0IGlzIGFscmVhZHkgYWN0aXZlIScpXG4gICAgICAgICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgRGlzcGxheUluZm8uZGlzcGxheVByb2plY3RJbmZvKHByb2plY3REaXYpXG4gICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdERpdilcbiAgICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZVByb2plY3QnKVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykuZm9yRWFjaCh0YXNrID0+IHRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJylcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAubWFpblBhZ2UgZGl2W2RhdGEtcHJvamVjdD1cIiR7bmV3UHJvamVjdC50aXRsZX1cIl1gKS5mb3JFYWNoKHRhc2sgPT4gdGFzay5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnKVxuXG4gICAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcbiAgICAgICAgICBpZiAoYWN0aXZlUHJvamVjdCkgeyBcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYWluUGFnZSA+ICMke2FjdGl2ZVByb2plY3QuaWR9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1haW5QYWdlID4gIyR7YWN0aXZlUHJvamVjdC5pZH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVQcm9qZWN0JylcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyBBZGQgdGhlIHByb2plY3QgbmFtZSB0byB0aGUgU2VsZWN0IG9wdGlvbnMgb2YgdGFzayBjcmVhdGlvblxuICAgICAgRGlzcGxheUluZm8uYWRkUHJvamVjdHRvVGFza0Zvcm0obmV3UHJvamVjdC50aXRsZSlcblxuICAgICAgLy8gRGVsZXRlIFByb2plY3RcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke25ld1Byb2plY3QudGl0bGV9ID4gaWApLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpID0+IF9kZWxldGVQcm9qZWN0KG5ld1Byb2plY3QudGl0bGUsZXZlbnQpKVxuXG4gICAgICAvLyBSZXNldCB0aGUgZm9ybSFcbiAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpXG4gICAgfSBcblxuICAgIGNvbnN0IF9kZWxldGVQcm9qZWN0ID0gKHRpdGxlLGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCByZW1vdmVkUHJvamVjdCA9IGV2ZW50LnBhdGhbMV1cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtcHJvamVjdCcpLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7cmVtb3ZlZFByb2plY3QuaWR9XCJgKSlcblxuICAgICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFNlY3Rpb24nKVxuICAgICAgY29uc3QgcHJvamVjdE9uVGhlU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1haW5QYWdlID4gIyR7cmVtb3ZlZFByb2plY3QuaWR9YClcbiAgICAgIGlmIChwcm9qZWN0T25UaGVTY3JlZW4gIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHByb2plY3RPblRoZVNjcmVlbi5pZCA9PSBldmVudC5wYXRoWzFdLmlkKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBwcm9qZWN0IG9uIHRoZSBzY3JlZW5cbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblBhZ2UnKS5yZW1vdmVDaGlsZChwcm9qZWN0T25UaGVTY3JlZW4pXG4gICAgICAgICAgLy8gZGVsZXRlIHRoZSByZWFsdGVkIHRhc2tzXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLm1haW5QYWdlIGRpdltkYXRhLXByb2plY3Q9XCIke3Byb2plY3RPblRoZVNjcmVlbi5pZH1cIl1gKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYFRhc2sgJHt0YXNrLmlkfWApXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblBhZ2UnKS5yZW1vdmVDaGlsZCh0YXNrKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBQcm9qZWN0ICR7dGl0bGV9YClcbiAgICAgIHByb2plY3RTZWN0aW9uLnJlbW92ZUNoaWxkKHJlbW92ZWRQcm9qZWN0KVxuICAgICAgY29uc29sZS5sb2coJ1BST0pFQ1QgUkVNT1ZFRCcscmVtb3ZlZFByb2plY3QpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH1cblxuICAgIGNvbnN0IF9jYW5jZWxQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgcHJvamVjdEJveC5wcm9qZWN0Rm9ybS5yZXNldCgpXG4gICAgICBEaXNwbGF5SW5mby5kaXNhcHBlYXJQcm9qZWN0Rm9ybSgpXG4gICAgfVxuXG4gICAgY29uc3QgX2xpc3RlblByb2plY3QgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEhlYWRlciA+IGknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jcmVhdGVQcm9qZWN0Qm94KVxuICAgICAgcHJvamVjdEJveC5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBfbWFuYWdlUHJvamVjdClcbiAgICAgIHByb2plY3RCb3gucHJvamVjdENhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsX2NhbmNlbFByb2plY3QpXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzaygpO1xuICAgICAgcmV0dXJuIG5ld1Rhc2tcbiAgICB9XG5cbiAgICBjb25zdCBfY3JlYXRlVGFza0JveCA9ICgpID0+IHtcbiAgICAgIERpc3BsYXlJbmZvLmRpc3BsYXlUYXNrRm9ybSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRhc2tJbmZvID0gKG5ld1Rhc2spID0+IHtcbiAgICAgIG5ld1Rhc2sudGl0bGUgPSB0YXNrQm94LnRhc2tUaXRsZS52YWx1ZVxuICAgICAgLy8gbmV3VGFzay50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGVJbnB1dCcpLnZhbHVlXG4gICAgICBuZXdUYXNrLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjcmlwdGlvbklucHV0JykudmFsdWVcbiAgICAgIG5ld1Rhc2suZHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEYXRlSW5wdXQnKS52YWx1ZVxuICAgICAgbmV3VGFzay50b1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LXByb2plY3QnKS52YWx1ZVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRhc2tEaXYgPSAodGl0bGUsZHVlLHRvUHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBcbiAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGNvbnN0IHRpdGxlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBjb25zdCB0YXNrVGl0bGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBcbiAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGNvbnN0IGR1ZURhdGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIGNvbnN0IHRhc2tEdWVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cbiAgICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJylcbiAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpXG4gICAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrTmFtZScpXG4gICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrRHVlRGF0ZScpXG5cbiAgICAgIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLHRvUHJvamVjdClcblxuICAgICAgZWRpdEljb24uaWQgPSAnZWRpdEljb24nXG4gICAgICB0YXNrLmlkID0gYCR7dGl0bGV9YFxuICAgICAgdGFza1RpdGxlUC5pZCA9ICd0YXNrVGl0bGUnXG4gICAgICB0YXNrRHVlUC5pZCA9ICd0YXNrRHVlJ1xuXG4gICAgICBlZGl0SWNvbi50ZXh0Q29udGVudCA9ICdlZGl0J1xuICAgICAgdGl0bGVIb2xkZXIudGV4dENvbnRlbnQgPSAnVGFzayBUaXRsZTonXG4gICAgICBkdWVEYXRlSG9sZGVyLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOidcblxuICAgICAgdGFza1RpdGxlUC50ZXh0Q29udGVudCA9IHRpdGxlXG4gICAgICB0YXNrRHVlUC50ZXh0Q29udGVudCA9IGR1ZVxuXG4gICAgICB0YXNrQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcbiAgICAgIHRhc2tDaGVja2JveC5pZCA9ICd0YXNrQ2hlY2tCb3gnXG5cbiAgICAgIHRhc2tOYW1lLmFwcGVuZENoaWxkKHRpdGxlSG9sZGVyKVxuICAgICAgdGFza05hbWUuYXBwZW5kQ2hpbGQodGFza1RpdGxlUClcblxuICAgICAgdGFza0R1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZUhvbGRlcilcbiAgICAgIHRhc2tEdWVEYXRlLmFwcGVuZENoaWxkKHRhc2tEdWVQKVxuXG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tOYW1lKVxuICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSlcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZWRpdEljb24pXG4gICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tDaGVja2JveClcblxuICAgICAgcmV0dXJuIHRhc2tcbiAgICB9XG5cbiAgICBjb25zdCBfbWFuYWdlVGFzayA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgXG4gICAgICAvLyBDcmVhdGUgdGhlIHRhc2tcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKClcblxuICAgICAgLy8gU2V0IHRhc2sgb2JqZWN0XG4gICAgICBzZXRUYXNrSW5mbyhuZXdUYXNrKVxuXG4gICAgICAvLyBEaXNwbGF5IHRoZSB0YXNrIG9iamVjdCBvbiB0aGUgcGFnZSFcbiAgICAgIGNvbnN0IHRhc2sgPSBDcmVhdGUuY3JlYXRlVGFza0RpdihuZXdUYXNrLnRpdGxlLG5ld1Rhc2suZHVlLG5ld1Rhc2sudG9Qcm9qZWN0KSBcbiAgICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKHRhc2spXG4gICAgICBEaXNwbGF5SW5mby5kaXNwbGF5VGFzayhuZXdUYXNrLnRvUHJvamVjdClcblxuICAgICAgLy8gQWRkIGl0IHRvIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgICBzZXRUYXNrVG9Mb2NhbFN0b3JhZ2UobmV3VGFzaylcblxuICAgICAgLy8gRGlzYXBwZWFyIHRoZSB0YXNrIGJveFxuICAgICAgRGlzcGxheUluZm8uZGlzYXBwZWFyVGFza0Zvcm0oKVxuXG4gICAgICAvLyBFZGl0IHRhc2tcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0SWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpID0+IF9lZGl0VGFzayhldmVudCxuZXdUYXNrKSlcblxuICAgICAgLy8gZGVsZXRlIHRhc2tcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke25ld1Rhc2sudGl0bGV9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywoZXZlbnQpID0+IF9kZWxldGVUYXNrKG5ld1Rhc2sudGl0bGUsZXZlbnQpKVxuXG4gICAgICAvLyBQcmV2ZW50IGZyb20gcmVsb2FkaW5nIHBhZ2UhXG4gICAgICBldmVudC50YXJnZXQucmVzZXQoKVxuICAgIH1cblxuICAgIGNvbnN0IF9lZGl0VGFzayA9IChldmVudCxuZXdUYXNrKSA9PiB7XG4gICAgICBjb25zdCBlZGl0VGFza0Zvcm0gPSB0YXNrRm9ybSgpO1xuICAgICAgY29uc29sZS5sb2coJ3dvcmtlZCcpXG5cbiAgICAgIGVkaXRUYXNrRm9ybS50YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICBlZGl0VGFza0Zvcm0udGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpXG5cbiAgICAgIGVkaXRUYXNrRm9ybS5mb3JtSGVhZGVyLnRleHRDb250ZW50ID0gJ0VESVQgVEFTSydcblxuICAgICAgZWRpdFRhc2tGb3JtLmlucHV0c0Rpdi5yZW1vdmVDaGlsZChlZGl0VGFza0Zvcm0uc2VsZWN0RGl2KVxuICAgICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoZWRpdFRhc2tGb3JtLnRhc2tGb3JtKVxuXG4gICAgICBlZGl0VGFza0Zvcm0udGFza1RpdGxlLnJlbW92ZUF0dHJpYnV0ZSgncmVxdWlyZWQnKVxuICAgICAgZWRpdFRhc2tGb3JtLnRhc2tEZXNjcmlwdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJylcbiAgICAgIGVkaXRUYXNrRm9ybS50YXNrRGF0ZS5yZW1vdmVBdHRyaWJ1dGUoJ3JlcXVpcmVkJylcblxuICAgICAgZWRpdFRhc2tGb3JtLnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGV2ZW50KSA9PiBfdXBkYXRlVGFzayhldmVudCxuZXdUYXNrLGVkaXRUYXNrRm9ybSkpXG4gICAgICBlZGl0VGFza0Zvcm0udGFza0NhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICBlZGl0VGFza0Zvcm0udGFza0Zvcm0ucmVzZXQoKVxuICAgICAgICBlZGl0VGFza0Zvcm0udGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBfdXBkYXRlVGFzayA9IChldmVudCxuZXdUYXNrLGVkaXRUYXNrRm9ybSkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICBpZiAoZWRpdFRhc2tGb3JtLnRhc2tUaXRsZS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgbmV3VGFzay50aXRsZSA9IGVkaXRUYXNrRm9ybS50YXNrVGl0bGUudmFsdWVcbiAgICAgIH1cblxuICAgICAgaWYgKGVkaXRUYXNrRm9ybS50YXNrRGVzY3JpcHRpb24udmFsdWUgIT09ICcnKSB7XG4gICAgICAgIG5ld1Rhc2suZGVzY3JpcHRpb24gPSBlZGl0VGFza0Zvcm0udGFza0Rlc2NyaXB0aW9uLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIGlmIChlZGl0VGFza0Zvcm0udGFza0RhdGUudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIG5ld1Rhc2suZHVlID0gZWRpdFRhc2tGb3JtLnRhc2tEYXRlLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKS50ZXh0Q29udGVudCA9IG5ld1Rhc2sudGl0bGVcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRHVlJykudGV4dENvbnRlbnQgPSBuZXdUYXNrLmR1ZVxuXG4gICAgICBjb25zb2xlLmxvZygnTmV3IFRpdGxlOiAnLG5ld1Rhc2sudGl0bGUpXG4gICAgICBjb25zb2xlLmxvZygnTmV3IERlc2NyaXB0aW9uOiAnLG5ld1Rhc2suZGVzY3JpcHRpb24pXG4gICAgICBjb25zb2xlLmxvZygnTmV3IERhdGU6ICcsbmV3VGFzay5kdWUpXG5cbiAgICAgIGVkaXRUYXNrRm9ybS50YXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlLWluJylcbiAgICAgIG1haW5QYWdlLnJlbW92ZUNoaWxkKGVkaXRUYXNrRm9ybS50YXNrRm9ybSlcbiAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpXG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGFza1RvTG9jYWxTdG9yYWdlID0gKG5ld1Rhc2spID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBUYXNrICR7bmV3VGFzay50aXRsZX1gLEpTT04uc3RyaW5naWZ5KG5ld1Rhc2spKVxuICAgIH1cblxuICAgIGNvbnN0IHNldFByb2plY3RUb0xvY2FsU3RvcmFnZSA9IChuZXdQcm9qZWN0KSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgUHJvamVjdCAke25ld1Byb2plY3QudGl0bGV9YCxKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0KSlcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJdGVtRnJvbUxvY2FsU3RvcmUgPSAoKSA9PiB7XG4gICAgICBmb3IobGV0IGk9MDtpPGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmtleShpKS5pbmNsdWRlcygnVGFzaycpKSB7XG5cbiAgICAgICAgICBsZXQgdGFza1RpdGxlID0gbG9jYWxTdG9yYWdlLmtleSggaSApO1xuICAgICAgICAgIGxldCB0YXNrRGV0YWlsID0gSlNPTi5wYXJzZSggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIHRhc2tUaXRsZSApICk7XG4gICAgICAgICAgbGV0IHN0b3JlZFRhc2sgPSBDcmVhdGUuY3JlYXRlVGFza0Rpdih0YXNrRGV0YWlsLnRpdGxlLHRhc2tEZXRhaWwuZHVlLHRhc2tEZXRhaWwudG9Qcm9qZWN0KVxuICBcbiAgICAgICAgICBtYWluUGFnZS5hcHBlbmRDaGlsZChzdG9yZWRUYXNrKVxuICBcbiAgICAgICAgICBEaXNwbGF5SW5mby5kaXNwbGF5VGFzayh0YXNrRGV0YWlsLnRvUHJvamVjdClcblxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Rhc2tEZXRhaWwudGl0bGV9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywoZXZlbnQpID0+IF9kZWxldGVUYXNrKHRhc2tEZXRhaWwudGl0bGUsZXZlbnQpKVxuICAgICAgICB9XG4gICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0SWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpID0+IF9lZGl0VGFzayhldmVudCx0YXNrRGV0YWlsKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0RnJvbUxvY2FsU3RvcmUgPSAoKSA9PiB7XG4gICAgICBmb3IobGV0IGk9MDtpPGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmtleShpKS5pbmNsdWRlcygnUHJvamVjdCcpKSB7XG4gICAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGxvY2FsU3RvcmFnZS5rZXkoIGkgKTtcbiAgICAgICAgICBsZXQgcHJvamVjdERldGFpbCA9IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBwcm9qZWN0VGl0bGUgKSApO1xuICBcbiAgICAgICAgICBEaXNwbGF5SW5mby5kaXNwbGF5UHJvamVjdChwcm9qZWN0RGV0YWlsLnRpdGxlKVxuXG4gICAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IENyZWF0ZS5jcmVhdGVQcm9qZWN0RGV0YWlscyhwcm9qZWN0RGV0YWlsKVxuICAgICAgICAgIHByb2plY3REaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluUGFnZScpLnByZXBlbmQocHJvamVjdERpdikgXG5cbiAgICAgICAgICAvLyBEaXNwbGF5IHRoZSBDTElDS0VEIHByb2plY3Qgb2JqZWN0IG9uIHRoZSBtYWluIHBhZ2UhXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RTZWN0aW9uICMke3Byb2plY3REZXRhaWwudGl0bGV9YCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGNsaWNrZWQgb25lIGlzIGFjdGl2ZSBkbyBub3RoaW5nIVxuICAgICAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBwcm9qZWN0IGlzIGFscmVhZHkgYWN0aXZlIScpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgRGlzcGxheUluZm8uZGlzcGxheVByb2plY3RJbmZvKHByb2plY3REaXYpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3REaXYpXG4gICAgICAgICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlUHJvamVjdCcpXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykuZm9yRWFjaCh0YXNrID0+IHRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJylcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLm1haW5QYWdlIGRpdltkYXRhLXByb2plY3Q9XCIke3Byb2plY3REZXRhaWwudGl0bGV9XCJdYCkuZm9yRWFjaCh0YXNrID0+IHRhc2suc3R5bGUuZGlzcGxheSA9ICdmbGV4JylcbiAgICBcbiAgICAgICAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcbiAgICAgICAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QpIHsgXG4gICAgICAgICAgICAgICAgYWN0aXZlUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYWluUGFnZSA+ICMke2FjdGl2ZVByb2plY3QuaWR9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYWluUGFnZSA+ICMke2FjdGl2ZVByb2plY3QuaWR9YCkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlUHJvamVjdCcpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICAgIC8vIEFkZCB0aGUgcHJvamVjdCBuYW1lIHRvIHRoZSBTZWxlY3Qgb3B0aW9ucyBvZiB0YXNrIGNyZWF0aW9uXG4gICAgICAgICAgRGlzcGxheUluZm8uYWRkUHJvamVjdHRvVGFza0Zvcm0ocHJvamVjdERldGFpbC50aXRsZSlcblxuICAgICAgICAgIC8vIERlbGV0ZSBQcm9qZWN0XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdERldGFpbC50aXRsZX0gPiBpYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCkgPT4gX2RlbGV0ZVByb2plY3QocHJvamVjdERldGFpbC50aXRsZSxldmVudCkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBfZGVsZXRlVGFzayA9ICh0aXRsZSxldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RBU0sgUkVNT1ZFRDogJyxldmVudC5wYXRoWzFdKVxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYFRhc2sgJHt0aXRsZX1gKVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5QYWdlJykucmVtb3ZlQ2hpbGQoZXZlbnQucGF0aFsxXSlcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfVxuXG4gICAgY29uc3QgX2NhbmNlbFRhc2sgPSAoKSA9PiB7XG4gICAgICB0YXNrQm94LnRhc2tGb3JtLnJlc2V0KCk7XG4gICAgICBEaXNwbGF5SW5mby5kaXNhcHBlYXJUYXNrRm9ybSgpXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTWFpblBhZ2UgPSAoKSA9PiB7XG4gICAgICBEaXNwbGF5SW5mby5kaXNwbGF5TWFpblBhZ2UoKVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVRvZGF5RGl2ID0gKCkgPT4ge1xuICAgICAgY29uc3QgdG9kYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgY29uc3QgdG9kYXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG5cbiAgICAgIHRvZGF5RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZGF5RGl2JylcbiAgICAgIHRvZGF5SGVhZGVyLmlkID0gJ3RvZGF5SGVhZGVyJ1xuXG4gICAgICB0b2RheUhlYWRlci50ZXh0Q29udGVudCA9ICdUb2RheSdcblxuICAgICAgdG9kYXlEaXYuYXBwZW5kQ2hpbGQodG9kYXlIZWFkZXIpXG5cbiAgICAgIHJldHVybiB0b2RheURpdlxuICAgIH1cblxuICAgIGNvbnN0IF9saXN0ZW5NYWluUGFnZSA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVNYWluUGFnZSlcbiAgICB9XG5cbiAgICBjb25zdCBfbGlzdGVuVGFzayA9ICgpID0+IHtcbiAgICAgIGhlYWRlci5hZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxfY3JlYXRlVGFza0JveClcbiAgICAgIHRhc2tCb3gudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgX21hbmFnZVRhc2spXG4gICAgICB0YXNrQm94LnRhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLF9jYW5jZWxUYXNrKVxuICAgIH1cblxuICAgIGNvbnN0IF9saXN0ZW4gPSAgKGZ1bmN0aW9uKCkge1xuICAgICAgX2xpc3RlblByb2plY3QoKVxuICAgICAgX2xpc3RlblRhc2soKVxuICAgICAgX2xpc3Rlbk1haW5QYWdlKClcbiAgICB9KSgpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlVGFzayxcbiAgICAgIHNldFRhc2tJbmZvLFxuICAgICAgY3JlYXRlVGFza0RpdixcbiAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICBjcmVhdGVQcm9qZWN0RGl2LFxuICAgICAgc2V0UHJvamVjdEluZm8sXG4gICAgICBjcmVhdGVQcm9qZWN0RGV0YWlscyxcbiAgICAgIGNyZWF0ZVRvZGF5RGl2LFxuICAgICAgZ2V0SXRlbUZyb21Mb2NhbFN0b3JlLFxuICAgICAgZ2V0UHJvamVjdEZyb21Mb2NhbFN0b3JlXG4gICAgfVxuXG4gIH0pKCk7XG5cbiAgY29uc3QgRGlzcGxheUluZm8gPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICBwcm9qZWN0Qm94LnByb2plY3RGb3JtLnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTpibG9jazsnXG4gICAgICBwcm9qZWN0Qm94LnByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKVxuICAgICAgaGlkZGVuQkcuc3R5bGUuY3NzVGV4dCA9ICd6LWluZGV4OjE7IG9wYWNpdHk6MC41J1xuICAgIH1cblxuICAgIGNvbnN0IGRpc2FwcGVhclByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgICAgcHJvamVjdEJveC5wcm9qZWN0Rm9ybS5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6bm9uZTsnXG4gICAgICBwcm9qZWN0Qm94LnByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUtaW4nKVxuICAgICAgaGlkZGVuQkcuc3R5bGUuY3NzVGV4dCA9ICd6LWluZGV4Oi0xOyBvcGFjaXR5OjAnXG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBDcmVhdGUuY3JlYXRlUHJvamVjdERpdih0aXRsZSlcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0U2VjdGlvbicpLmFwcGVuZENoaWxkKHByb2plY3QpXG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVByb2plY3RJbmZvID0gKHByb2plY3REaXYpID0+IHtcbiAgICAgIHByb2plY3REaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUYXNrRm9ybSA9ICgpID0+IHtcbiAgICAgIHRhc2tCb3gudGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgIHRhc2tCb3gudGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpXG4gICAgICBoaWRkZW5CRy5zdHlsZS5jc3NUZXh0ID0gJ3otaW5kZXg6MTsgb3BhY2l0eTowLjUnXG4gICAgfVxuXG4gICAgY29uc3QgZGlzYXBwZWFyVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgICB0YXNrQm94LnRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIHRhc2tCb3gudGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZmFkZS1pbicpXG4gICAgICBoaWRkZW5CRy5zdHlsZS5jc3NUZXh0ID0gJ3otaW5kZXg6LTE7IG9wYWNpdHk6MCdcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5VGFzayA9ICh0b1Byb2plY3QpID0+IHtcbiAgICAgIC8vICBlZ2VyIGVrcmFuZGEgYmlyIHByb2plIHZhcnNhIHZlIGJ1IHByb2pleWUgdGFzayBla2xlbml5b3JzYSBvIGhhbGRlIGRpc3BsYXkgZmxleCBvbGFyYWsgZWtsZW5tZWxpXG5cbiAgICAgIGNvbnN0IHRhc2tzT2ZQcm9qZWN0ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5tYWluUGFnZSBkaXZbZGF0YS1wcm9qZWN0PVwiJHt0b1Byb2plY3R9XCJdYCkpXG4gICAgICB0YXNrc09mUHJvamVjdC5mb3JFYWNoKHRhc2sgPT4gdGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKVxuICAgICAgLy8gQnUgYWx0dGFraSBpZiBzdGF0ZW1ldGxhcmRhIHNhZGVjZSBpbGsgdGFza2kgZWtsZXJrZW4gZWtyYW5kYSBwcm9qZSB2YXIgbWkgb25hIGJha2l5b3J1bVxuICAgICAgLy8gc3UgYW5kYSBla3JhbmRhIGJpciBwcm9qZSB2YXIgbWkgdmUgdmFyc2EgZWdlciBidSBwcm9qZW5pbiBpZCdzaXlsZSBiZW5pbSB0YXNraW1pbiBkYXRhLXByb2plY3QnaSB1eXV5b3IgbXUgXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5QYWdlID4gZGl2JykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3REaXNwbGF5Qm94JykuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICBpZiAocHJvamVjdC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZVByb2plY3QnKSkge1xuICAgICAgICAgICAgdGFza3NPZlByb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKSA9PSBwcm9qZWN0LmlkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rhc2sgQWRkZWQnKVxuICAgICAgICAgICAgICAgIHRhc2suc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtYW5hZ2VUYXNrc0Rpc3BsYXkgPSAoZGlzcGxheSkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKS5mb3JFYWNoKHRhc2sgPT4gdGFzay5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheSlcbiAgICB9XG5cbiAgICBjb25zdCBtYW5hZ2VQcm9qZWN0RGlzcGxheSA9IChkaXNwbGF5KSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3REaXNwbGF5Qm94JykpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0RGlzcGxheUJveCcpLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheU1haW5QYWdlID0gKCkgPT4ge1xuICAgICAgbWFuYWdlVGFza3NEaXNwbGF5KCdmbGV4JylcbiAgICAgIG1hbmFnZVByb2plY3REaXNwbGF5KCdub25lJylcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5VG9kYXlEaXYgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0b2RheURpdiA9IENyZWF0ZS5jcmVhdGVUb2RheURpdigpXG4gICAgICB0b2RheURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3R0b1Rhc2tGb3JtID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZVxuICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3ROYW1lXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LXByb2plY3QnKS5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkaXNwbGF5VGFza0Zvcm0sXG4gICAgICBkaXNhcHBlYXJUYXNrRm9ybSxcbiAgICAgIGRpc3BsYXlUYXNrLFxuICAgICAgZGlzcGxheVByb2plY3RGb3JtLFxuICAgICAgZGlzYXBwZWFyUHJvamVjdEZvcm0sXG4gICAgICBkaXNwbGF5UHJvamVjdCxcbiAgICAgIGRpc3BsYXlQcm9qZWN0SW5mbyxcbiAgICAgIGRpc3BsYXlNYWluUGFnZSxcbiAgICAgIGFkZFByb2plY3R0b1Rhc2tGb3JtLFxuICAgIH1cbiAgfSkoKVxuXG5cbiAgQ3JlYXRlLmdldEl0ZW1Gcm9tTG9jYWxTdG9yZSgpXG4gIENyZWF0ZS5nZXRQcm9qZWN0RnJvbUxvY2FsU3RvcmUoKVxufSkoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9