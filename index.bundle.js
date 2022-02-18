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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #F6EABE;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header{\n    height: 72px;\n    background-color: #F6D7A7;\n    color: #2f6363;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content{\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n    background-color: inherit;\n}\n#side-panel{\n    flex: 1;\n    background-color: #2f6363;\n    color: #F6D7A7;\n    min-height: 90.1vh;\n    padding-top: 20px;\n    border-top-right-radius: 30px;\n}\n.side-header-container{\n    display: flex;\n    flex-direction: column;\n}\n.side-header{\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label{\n    font-size: 18px;\n    margin: 4px 0px 4px 20px;\n    padding: 4px 0px 4px 10px;\n}\n.selected{\n    background-color: #265252;\n    border-radius: 30px 0 0 30px;\n}\n.dropdown-toggle{\n    margin-left: 8px;\n}\n.dropdown-toggle.anim{\n    transition: .25s;\n}\n.dropdown-toggle.closed{\n    transform: rotateZ(-90deg);\n}\n\n#main-display{\n    flex: 4;\n    background-color: inherit;\n}\n\n.add-button{\n    border-radius: 100px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n    \n}\n\n.add-button:hover{\n    filter: brightness(70%);\n}\n.add-button:active{\n\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container{\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button{\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n    \n}\n#add-project-button.anim{\n    transition: .25s;\n}\n#add-project-button:hover, #add-project-button.active{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active{\n    filter: brightness(80%);\n}\n\n#add-project-button span{\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim{\n    transition: .05s;\n}\n#add-project-button:hover span, #add-project-button span.active{\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container{\n    padding: 8px 15px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button{\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput, select{\n    background-color: #87AAAA;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 16px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\nselect{\n    height: 31px;\n    font-size:18px\n}\n.project-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n    background-color: inherit;\n}\n.project-title-wrapper{\n    max-width: 45%;\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    margin-bottom: 30px;\n}\n\n.project-title{\n    font-size: 36px;\n    font-weight: bold;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    \n}\n.title-edit{\n    background-color: inherit;\n    font-size: 36px;\n    font-weight: bold;\n    margin-top: 6px;\n    padding: 6px 0px 10px ;\n    flex-grow: 0;\n    border-bottom-width: 0px;\n    border-radius: 30px;\n    text-align: center;\n    text-decoration: none;\n    filter: brightness(80%);\n    overflow-y: auto;\n}\n\n#add-task-button{\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info{\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper{\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container{\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n    \n}\n.task-info{\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n\n.error-message{\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority='Low']{\n    background-color: #E1ADAD;\n}\n[data-priority='Medium']{\n    background-color: #EFEF38;\n}\n[data-priority='High']{\n    background-color: #9DCD8D;\n}\n\n.edit-button{\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: .25s;\n    min-width: fit-content;\n    height: 20px;\n    white-space: nowrap;\n\n}\n\n.edit-button:hover{\n    filter:brightness(70%);\n}\n\n.edit-button span{\n    font-size: 0%;\n    opacity: 0;\n    transition: .25s;\n}\n.edit-button:hover span{\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.task-container input, .task-container select{\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select{\n    height: 23px;\n    font-size:15px\n}\n\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n    \n::-webkit-scrollbar-track {\n    border: 3px solid #87AAAA;\n    border-radius: 10px;\n}\n    \n::-webkit-scrollbar-thumb {\n    background:#2f6363; \n    border-radius: 10px;\n    border: 2px solid #2f6363\n}\n    \n::-webkit-scrollbar-thumb:hover {\n    background:#265252; \n}\n@-moz-document url-prefix() {\n    body{\n        scrollbar-color: #2f6363 #265252 #87AAAA;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,WAAW;IACX,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,6BAA6B;IAC7B,yBAAyB;AAC7B;AACA;IACI,OAAO;IACP,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,eAAe;IACf,wBAAwB;IACxB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,4BAA4B;AAChC;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,0BAA0B;AAC9B;;AAEA;IACI,OAAO;IACP,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;IACpB,yBAAyB;IACzB,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,wBAAwB;;AAE5B;;AAEA;IACI,uBAAuB;AAC3B;AACA;;IAEI,mCAAmC;AACvC;;AAEA;IACI,eAAe;IACf,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,UAAU;AACd;AACA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,UAAU;;AAEd;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,UAAU;AACd;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,yBAAyB;IACzB,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,wBAAwB;IACxB,4DAA4D;AAChE;AACA;IACI,YAAY;IACZ;AACJ;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,yBAAyB;AAC7B;AACA;IACI,cAAc;IACd,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,0BAA0B;;AAE9B;AACA;IACI,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,YAAY;IACZ,wBAAwB;IACxB,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,sBAAsB;;AAE1B;AACA;IACI,eAAe;IACf,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,cAAc;IACd,oBAAoB;IACpB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,wBAAwB;IACxB,yBAAyB;IACzB,cAAc;IACd,gBAAgB;IAChB,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;;AAEvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,YAAY;IACZ;AACJ;;;AAGA;IACI,YAAY;IACZ,YAAY;IACZ,WAAW;AACf;;;AAGA,eAAe;AACf;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB;AACJ;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI;QACI,wCAAwC;IAC5C;AACJ","sourcesContent":["body{\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #F6EABE;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header{\n    height: 72px;\n    background-color: #F6D7A7;\n    color: #2f6363;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content{\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n    background-color: inherit;\n}\n#side-panel{\n    flex: 1;\n    background-color: #2f6363;\n    color: #F6D7A7;\n    min-height: 90.1vh;\n    padding-top: 20px;\n    border-top-right-radius: 30px;\n}\n.side-header-container{\n    display: flex;\n    flex-direction: column;\n}\n.side-header{\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label{\n    font-size: 18px;\n    margin: 4px 0px 4px 20px;\n    padding: 4px 0px 4px 10px;\n}\n.selected{\n    background-color: #265252;\n    border-radius: 30px 0 0 30px;\n}\n.dropdown-toggle{\n    margin-left: 8px;\n}\n.dropdown-toggle.anim{\n    transition: .25s;\n}\n.dropdown-toggle.closed{\n    transform: rotateZ(-90deg);\n}\n\n#main-display{\n    flex: 4;\n    background-color: inherit;\n}\n\n.add-button{\n    border-radius: 100px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n    \n}\n\n.add-button:hover{\n    filter: brightness(70%);\n}\n.add-button:active{\n\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container{\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button{\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n    \n}\n#add-project-button.anim{\n    transition: .25s;\n}\n#add-project-button:hover, #add-project-button.active{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active{\n    filter: brightness(80%);\n}\n\n#add-project-button span{\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim{\n    transition: .05s;\n}\n#add-project-button:hover span, #add-project-button span.active{\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container{\n    padding: 8px 15px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button{\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput, select{\n    background-color: #87AAAA;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 16px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\nselect{\n    height: 31px;\n    font-size:18px\n}\n.project-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n    background-color: inherit;\n}\n.project-title-wrapper{\n    max-width: 45%;\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n    background-color: inherit;\n    margin-bottom: 30px;\n}\n\n.project-title{\n    font-size: 36px;\n    font-weight: bold;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    \n}\n.title-edit{\n    background-color: inherit;\n    font-size: 36px;\n    font-weight: bold;\n    margin-top: 6px;\n    padding: 6px 0px 10px ;\n    flex-grow: 0;\n    border-bottom-width: 0px;\n    border-radius: 30px;\n    text-align: center;\n    text-decoration: none;\n    filter: brightness(80%);\n    overflow-y: auto;\n}\n\n#add-task-button{\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info{\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper{\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container{\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n    \n}\n.task-info{\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n\n.error-message{\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority='Low']{\n    background-color: #E1ADAD;\n}\n[data-priority='Medium']{\n    background-color: #EFEF38;\n}\n[data-priority='High']{\n    background-color: #9DCD8D;\n}\n\n.edit-button{\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: .25s;\n    min-width: fit-content;\n    height: 20px;\n    white-space: nowrap;\n\n}\n\n.edit-button:hover{\n    filter:brightness(70%);\n}\n\n.edit-button span{\n    font-size: 0%;\n    opacity: 0;\n    transition: .25s;\n}\n.edit-button:hover span{\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.task-container input, .task-container select{\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select{\n    height: 23px;\n    font-size:15px\n}\n\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n    \n::-webkit-scrollbar-track {\n    border: 3px solid #87AAAA;\n    border-radius: 10px;\n}\n    \n::-webkit-scrollbar-thumb {\n    background:#2f6363; \n    border-radius: 10px;\n    border: 2px solid #2f6363\n}\n    \n::-webkit-scrollbar-thumb:hover {\n    background:#265252; \n}\n@-moz-document url-prefix() {\n    body{\n        scrollbar-color: #2f6363 #265252 #87AAAA;\n    }\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/DOMManip.js":
/*!*************************!*\
  !*** ./src/DOMManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.js");



const DOMManip = (()=>{
    const getElement = (selector)=>document.querySelector(selector)
    const getElements = (selector)=>document.querySelectorAll(selector)

    const fixStartingAnimations = ()=>{
        const animatable = getElements(".fix-anim")
        animatable.forEach(ele => {
            ele.classList.add('anim');
            ele.classList.remove('fix-anim')})
    }
    
    const _makeNewElement = (type, id='', HTMLClass = '', text = '', ...attributes) =>{
        const newElem = document.createElement(type);
        if(id != ''){
            newElem.setAttribute("id", id);
        }
        if(HTMLClass != ''){
            newElem.setAttribute('class', HTMLClass);
        }
        newElem.textContent = text;
        if(attributes.length > 0){
            attributes.forEach(att => newElem.setAttribute(Object.keys(att)[0], att[Object.keys(att)]))
        }
    
        return newElem;
    }
    const _removeElement = (elementID) =>{
        getElement(elementID).remove();
    }
    const _displayErrors = (e, input, type)=>{
        input.forEach(ele=>{
            const error = _makeNewElement('div','','error-message', ele)
            const parent = e.currentTarget.parentElement
            parent.parentElement.insertBefore(error, parent);
            setTimeout(()=>error.style.opacity = 0, 2000);
            setTimeout(()=>error.remove(), 4000);
        })
    }
    const _toggleActive = (elementID) =>{
        const element = getElement(elementID)
        element.classList.contains('active')? element.classList.remove('active') : element.classList.add('active');
    }

    const setupNewProject = ()=>{
        _toggleActive('#add-project-button');
        _toggleActive('#add-project-button-text');
        const newProjInputContainer = _makeNewElement('div', 'new-proj-input-container', 'input-container');
        const newProjInput = _makeNewElement('input', 'new-proj-input', '','',{type:'text'}, {value:'Project Title'} );
        const newProjAddButton = _makeNewElement('button', 'new-proj-add-button', 'add-button', 'Submit');

        newProjInputContainer.appendChild(newProjInput);
        newProjInputContainer.appendChild(newProjAddButton);

        getElement('#add-project-button-container').appendChild(newProjInputContainer);

        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectSubmission();
    }
    const cancelNewProject = ()=>{
        _toggleActive('#add-project-button');
        _toggleActive('#add-project-button-text');
        _removeElement("#new-proj-input-container");
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateAddButton();

    }

    const getNewProjInfo = ()=>{
        return {title:DOMManip.getElement('#new-proj-input').value};
    }
    
    const checkNewProject = (e, project)=>{
        let errorMessages = [];
        if(project.title == ''){
            errorMessages.push('Please enter a title for the project');
        }
        if(errorMessages.length > 0){
            _displayErrors(e, errorMessages, 'project');
            return false;
        }else{
            return true;
        }

    }


    const _removeSubEntries = (element)=>{
        for(let i = element.childNodes.length; i > 2; i--){
            element.childNodes[i-1].remove();
        }
    }
    const _revealArray = (parent, array, type)=>{
        _removeSubEntries(parent);
        array.forEach((proj, index)=> parent.appendChild(
            _makeNewElement('div', `${type}-${index}`, `${type}-side-label ${(type=='project' && proj.isSelected())?'selected' : ''}`, proj.getTitle(), {'data-index': `${index}`}, )))
    }

    const displayProjects = ()=>{
        _revealArray(getElement('#projects-side').parentElement, ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects(), 'project');
    }

    const _displayTitle = ()=>{
        const projectNumber = _getProjectNumber();
        const currentProject = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber];
        const titleWrapper = getElement('.project-title-wrapper');
        
        const projectTitle = _makeNewElement('div', `project-${projectNumber}-title`, 'project-title', `${currentProject.getTitle()}`);
        const editTitleButton = _makeNewElement('button', `project-${projectNumber}-edit-button`, 'edit-button');
        const editTitleIcon = _makeNewElement('i', '', 'fa-solid fa-pencil edit-icon');
        const editTitleText =_makeNewElement('span', '', 'edit-text', 'Edit Title')
        editTitleButton.appendChild(editTitleIcon);
        editTitleButton.appendChild(editTitleText);
        if(titleWrapper.childNodes.length >0){
            titleWrapper.firstElementChild.remove();
            titleWrapper.lastElementChild.remove();
        }
        titleWrapper.appendChild(projectTitle);
        titleWrapper.appendChild(editTitleButton);
    }
    const updateProjectList = ()=>{
        if(getElement('#new-proj-input-container')){
            _removeElement("#new-proj-input-container");
            _toggleActive('#add-project-button');
            _toggleActive('#add-project-button-text');
        }
        if(getElement('.title-edit')){
            _displayTitle()
            _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateEditProject();
        }
        
        displayProjects();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateAddButton();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateProjects();
    }

    const expandToggle = (e)=>{
        let array = [];
        let type = '';
        if(e.target.parentElement.id == 'projects-side')
        {
            array = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects();
            type = 'project';
        }
        if(e.target.classList.contains('closed')){
            e.target.classList.remove('closed')
            _revealArray(e.target.parentElement.parentElement, array, type);
        }else{
            e.target.classList.add('closed');
            _removeSubEntries(e.target.parentElement.parentElement)
        }

    }

    const _markSelectedProject = (e)=>{
        getElements(".project-side-label").forEach(ele=>ele.classList.remove('selected'));
        ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects().forEach(proj => proj.markSelected(false));
        ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[e.target.dataset.index].markSelected(true);
        e.target.classList.add('selected');
    }

    const _displayTaskInput = ()=>{
        const projectContainer = getElement('.project-container');
        const addTaskContainer = _makeNewElement('div', 'add-task-container', 'input-container');
        const addTaskName = _makeNewElement('input', 'add-task-name-input', 'add-task-info','',{type:'text'}, {value:'Task Name'});
        const addTaskDescription = _makeNewElement('input', 'add-task-description-input', 'add-task-info','',{type:'text'}, {value:'Task Description'});
        const addTaskDate = _makeNewElement('input', 'add-task-date-input', 'add-task-info','Due Date',{type:'date'});
        const addTaskPriority = _makeNewElement('select', 'add-task-priority-input', 'add-task-info','');
        const addTaskPriorityDefault = _makeNewElement('option','','','Priority', {value:0} );
        const addTaskPriorityLow = _makeNewElement('option','','','Low', {value:'Low'},{style:'background-color:#E1ADAD'});
        const addTaskPriorityMedium = _makeNewElement('option','','','Medium', {value:"Medium"}, {style:'background-color:#EFEF38'});
        const addTaskPriorityHigh = _makeNewElement('option','','','High', {value:"High"}, {style:'background-color:#9DCD8D'});
        const addTaskButton = _makeNewElement('button', 'add-task-button', 'add-button', 'Add New Task');

        addTaskPriority.appendChild(addTaskPriorityDefault);
        addTaskPriority.appendChild(addTaskPriorityLow);
        addTaskPriority.appendChild(addTaskPriorityMedium);
        addTaskPriority.appendChild(addTaskPriorityHigh);

        addTaskContainer.appendChild(addTaskName);
        addTaskContainer.appendChild(addTaskDescription);
        addTaskContainer.appendChild(addTaskDate);
        addTaskContainer.appendChild(addTaskPriority);
        addTaskContainer.appendChild(addTaskButton);

        projectContainer.appendChild(addTaskContainer);
        
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateAddTaskButton();
    }
    
    const _getProjectNumber = ()=>{
        return getElement('.selected').dataset.index;

    }

    const getTaskInfo = (index)=>{
        let formInfo;
        const projectNumber = _getProjectNumber();
        if(index == undefined){
            formInfo = getElements('.add-task-info');
        }else{
            formInfo = getElements(`#project-${projectNumber}-task-${index}-container .edit-task-info`)
        }
        return {name:formInfo[0].value,
                description: formInfo[1].value,
                date: formInfo[2].value,
                priority: formInfo[3].value,
                project: projectNumber}
        
    }

    const checkNewTask = (e, task)=>{
        let errorMessages = [];
        if(task.name == ''){
            errorMessages.push('Please enter a name for the task');
        }
        if(task.description == ''){
            errorMessages.push('Please enter a description for the task');
        }
        if(task.date == ''){
            errorMessages.push('Please enter a due date for the task');
        }
        if(task.priority == 0){
            errorMessages.push('Please enter a priority level for the task');
        }

        if(errorMessages.length > 0){
            _displayErrors(e, errorMessages, 'task');
            return false;
        }else{
            return true;
        }

    }

    const _insertAfter = (newNode, existingNode)=> {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    const _fillInTask = (task, taskNumber)=>{
        const projectNumber = _getProjectNumber();
        const tasksContainer = getElement('.tasks-container');

        const newTaskContainer = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-container`, 'task-container', '', {'data-priority':task.getPriority()},{"data-task":taskNumber});
        const newTaskCheckbox = _makeNewElement('input', `project-${projectNumber}-task-${taskNumber}-checkbox`, 'task-checkbox', '', {type:'checkbox'}, {'data-project':projectNumber}, {'data-task':taskNumber});
        const newTaskName = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-name`, 'task-name task-info', task.getName());
        const newTaskDescription = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-description`, 'task-description task-info', task.getDescription());
        const newTaskDate = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-date`, 'task-date task-info', task.getDate());
        const newTaskEditButton = _makeNewElement('button', `project-${projectNumber}-task-${taskNumber}-edit-button`, 'edit-button');
        const newTaskEditIcon = _makeNewElement('i', '', 'fa-solid fa-pencil edit-icon');
        const newTaskEditText =_makeNewElement('span', '', 'edit-text', 'Edit Task')

        newTaskContainer.appendChild(newTaskCheckbox);
        newTaskContainer.appendChild(newTaskName);
        newTaskContainer.appendChild(newTaskDescription);
        newTaskContainer.appendChild(newTaskDate);
        newTaskEditButton.appendChild(newTaskEditIcon);
        newTaskEditButton.appendChild(newTaskEditText);
        newTaskContainer.appendChild(newTaskEditButton);
        _insertAfter(newTaskContainer, (taskNumber == 0)?tasksContainer.childNodes[taskNumber]:tasksContainer.childNodes[taskNumber-1]);
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateEditButton(newTaskEditButton);
    }

    const updateTaskList = (taskNumber)=>{
        const projectNumber = _getProjectNumber();
        const editTaskContainer = getElement(`#project-${projectNumber}-task-${taskNumber}-container`)
        const updatedTask = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].tasks[taskNumber];
        editTaskContainer.remove()
        _fillInTask(updatedTask, taskNumber)
    }

    const addTaskToList = ()=>{
        const projectNumber = _getProjectNumber();
        const taskNumber = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].tasks.length-1;
        const newTask = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].tasks[taskNumber];

        getElement('#add-task-container').remove();
        _fillInTask(newTask, taskNumber);
        _displayTaskInput();
    }

    const displayEditProject = (e)=>{
        const projectNumber = _getProjectNumber();
        const projecTitle = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].getTitle();
        const titleWrapper = getElement('.project-title-wrapper');
        const editButton = e.currentTarget;

        const projectTitleInput = _makeNewElement('input', `project-${projectNumber}-title-input`, 'title-edit', '', {type:'text'}, {value:projecTitle}, {'data-project':projectNumber});
        titleWrapper.insertBefore(projectTitleInput, titleWrapper.lastElementChild);
        titleWrapper.firstElementChild.remove();

        editButton.firstElementChild.classList.remove('fa-pencil');
        editButton.firstElementChild.classList.add('fa-check');
        editButton.lastElementChild.textContent = "Confirm";
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateConfirmProjectEdit(editButton);
    }

    const displayEditTask = e=>{
        const editButton = e.currentTarget;
        const projectNumber = _getProjectNumber()
        const taskNumber = editButton.parentElement.dataset.task;
        const editTask = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].tasks[taskNumber];

        const editTaskName = _makeNewElement('input', 'edit-task-name-input', 'edit-task-info','',{type:'text'}, {value:editTask.getName()});
        const editTaskDescription = _makeNewElement('input', 'edit-task-description-input', 'edit-task-info','',{type:'text'}, {value:editTask.getDescription()});
        const editTaskDate = _makeNewElement('input', 'edit-task-date-input', 'edit-task-info','Due Date',{type:'date'}, {value:editTask.getDate()});
        const editTaskPriority = _makeNewElement('select', 'edit-task-priority-input', 'edit-task-info','');
        const editTaskPriorityLow = _makeNewElement('option','','','Low', {value:'Low'},{style:'background-color:#E1ADAD'});
        const editTaskPriorityMedium = _makeNewElement('option','','','Medium', {value:"Medium"}, {style:'background-color:#EFEF38'});
        const editTaskPriorityHigh = _makeNewElement('option','','','High', {value:"High"}, {style:'background-color:#9DCD8D'});
        
        if(editTask.getPriority() == 'Low'){
            editTaskPriorityLow.setAttribute('selected', 'selected')
        }else if(editTask.getPriority() == 'Medium'){
            editTaskPriorityMedium.setAttribute('selected', 'selected')
        }else if(editTask.getPriority() == 'High'){
            editTaskPriorityHigh.setAttribute('selected', 'selected')
        }
        getElements(`#project-${projectNumber}-task-${taskNumber}-container .task-info`).forEach(ele=>ele.remove())

        editTaskPriority.appendChild(editTaskPriorityLow);
        editTaskPriority.appendChild(editTaskPriorityMedium);
        editTaskPriority.appendChild(editTaskPriorityHigh);

        const editCancelButton = _makeNewElement('button', `project-${projectNumber}-task-${taskNumber}-edit-cancel-button`, 'edit-button');
        const editCancelIcon = _makeNewElement('i', '', 'fa-solid fa-xmark edit-cancel-icon');
        const editCancelText =_makeNewElement('span', '', 'edit-cancel-text', 'Cancel')

        editCancelButton.appendChild(editCancelIcon);
        editCancelButton.appendChild(editCancelText);

        const editTaskContainer = getElement(`#project-${projectNumber}-task-${taskNumber}-container`)
        editTaskContainer.insertBefore(editTaskName, editTaskContainer.lastElementChild);
        editTaskContainer.insertBefore(editTaskDescription, editTaskContainer.lastElementChild);
        editTaskContainer.insertBefore(editTaskDate, editTaskContainer.lastElementChild);
        editTaskContainer.insertBefore(editTaskPriority, editTaskContainer.lastElementChild);
        editTaskContainer.appendChild(editCancelButton);

        editButton.firstElementChild.classList.remove('fa-pencil');
        editButton.firstElementChild.classList.add('fa-check');
        editButton.lastElementChild.textContent = "Confirm";

        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateConfirmTaskEdit(editButton);

    }

    const showProject = (e)=>{
        _markSelectedProject(e);
        const mainDisplay = getElement('#main-display');

        //this can get removed after Today's Tasks is working
        if(mainDisplay.childNodes.length >0){
            mainDisplay.firstChild.remove();
        }
        //*****

        const projectNumber = _getProjectNumber();
        const currentProject = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber];

        const projectContainer = _makeNewElement('div', `project-${projectNumber}-container`, 'project-container');
        const projectTitleWrapper = _makeNewElement('div' , `project-${projectNumber}-title-wrapper`, 'project-title-wrapper');
        const tasksContainer = _makeNewElement('div', `project-${projectNumber}-tasks-container`, 'tasks-container');
        const tasksWrapper = _makeNewElement('div', `project-${projectNumber}-tasks-wrapper`, 'tasks-wrapper')
        const spacer = _makeNewElement('div');
        projectContainer.appendChild(projectTitleWrapper);
        tasksContainer.appendChild(spacer);
        tasksWrapper.appendChild(tasksContainer)
        projectContainer.appendChild(tasksWrapper);
        mainDisplay.appendChild(projectContainer);
        _displayTitle();
        currentProject.tasks.forEach((task, index) => _fillInTask(task, index))
        _displayTaskInput();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateEditProject();
    }

    const cancelEdit = (e)=>{
        const task = e.currentTarget.parentElement.dataset.task;
        updateTaskList(task);
    }

    return {getElement, getElements, fixStartingAnimations,checkNewProject, setupNewProject, cancelNewProject,
         getNewProjInfo, updateProjectList, expandToggle, showProject, getTaskInfo, checkNewTask, 
         addTaskToList, displayEditProject, displayEditTask, updateTaskList, cancelEdit, displayProjects}
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMManip);

/***/ }),

/***/ "./src/EventHandler.js":
/*!*****************************!*\
  !*** ./src/EventHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



const EventHandler = (()=>{
    const activateAddButton = ()=>{
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#add-project-button").removeEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].cancelNewProject);
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#add-project-button").addEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].setupNewProject);
    }

    const initStartingListeners = ()=>{
        activateAddButton();
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElements('.dropdown-toggle').forEach(ele =>ele.addEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].expandToggle));
    }

    const addProjectSubmission = ()=>{
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#add-project-button").removeEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].setupNewProject);
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement("#add-project-button").addEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].cancelNewProject);
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement('#new-proj-add-button').addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.addProject);
    }

    const activateProjects = ()=>{
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElements('.project-side-label').forEach(ele=>ele.addEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].showProject));

    }
    const activateEditProject = ()=>{
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement('.project-title-wrapper button').addEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayEditProject);
    }
    const activateAddTaskButton = ()=>{
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement('#add-task-button').addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.addTask);
    }

    const activateEditButton = button=>{
        button.removeEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmEdit);
        button.addEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayEditTask);
    }
    const activateConfirmProjectEdit = button=>{
        button.removeEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayEditProject)
        button.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmProjectEdit);
    }

    const activateConfirmTaskEdit = button=>{
        button.removeEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayEditTask);
        button.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmTaskEdit);
        button.parentElement.lastElementChild.addEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].cancelEdit);

    }

    return{activateAddButton, initStartingListeners, addProjectSubmission, activateProjects, 
        activateEditProject, activateAddTaskButton, activateEditButton, activateConfirmProjectEdit,
        activateConfirmTaskEdit};
})();



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventHandler);

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project{
        constructor(initTitle, tasks = [], completed = false){
        this.title = initTitle;
        this.tasks = tasks;
        this.completed = completed;
        this.selected = false;
    }
    getTitle(){return this.title;}
    getTasks(){return this.tasks;}
    isCompleted(){return this.completed;}
    isSelected(){return this.selected;}
    setTitle(newTitle){this.title = newTitle;}
    addTask(newTask){this.tasks.push(newTask);}
    markComplete(value){this.completed = value;}
    markSelected(value){this.selected = value;}
}

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task{

    constructor(name, description, dueDate, priority, notes, project){
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.project = project;
        this.completed = false;
    }
    
    getName = ()=>this.name
    getDescription = ()=>this.description
    getDate = ()=>this.dueDate
    getPriority = ()=>this.priority
    getNotes = ()=>this.notes
    getProject = ()=>this.project
    isComplete = ()=>this.completed

    setName = (newName)=>this.name = newName
    setDescription = (newDescription)=>this.description = newDescription
    setDueDate = (newDueDate)=>this.dueDate = newDueDate
    setPriority = (newPriority)=>this.priority = newPriority
    setNotes = (newNotes)=>this.notes = newNotes
    markComplete = ()=>this.completed = true
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/dataStorage.js":
/*!****************************!*\
  !*** ./src/dataStorage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");





const dataStorage = (()=>{
    const saveData = ()=>{
        const allProj = _index_js__WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()
        localStorage.setItem('Projects', JSON.stringify(allProj))
        console.log(localStorage.getItem('Projects'))
    }

    const loadData = ()=>{
        const loadedData = JSON.parse(localStorage.getItem('Projects'))
        const returnData = [];
        loadedData.forEach(ele => {
            const loadProjectTitle = ele.title;
            const loadProjectsTasks = [];
            ele.tasks.forEach(task=>{
                loadProjectsTasks.push(new _Task_js__WEBPACK_IMPORTED_MODULE_2__["default"](task.name, task.description, task.dueDate, task.priority, task.notes, task.project))
            })
            const loadProjectCompleted = ele.completed;
            returnData.push(new _Project_js__WEBPACK_IMPORTED_MODULE_1__.Project(loadProjectTitle, loadProjectsTasks, loadProjectCompleted))
        })
        return returnData;
    }

    const clearData = ()=>{
        localStorage.setItem('Projects', '');
    }

    return{saveData, loadData, clearData}
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataStorage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFunctions": () => (/* binding */ projectFunctions)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _dataStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataStorage */ "./src/dataStorage.js");







const projectFunctions = (()=>{

    let _allProjects = [];

    const addProject = (e)=>{
        const newProjectInfo = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getNewProjInfo();
        const goodProject = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].checkNewProject(e,newProjectInfo);
        if(goodProject){
            _allProjects.push(new _Project__WEBPACK_IMPORTED_MODULE_4__.Project(newProjectInfo.title));
            _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectList();
            _dataStorage__WEBPACK_IMPORTED_MODULE_5__["default"].saveData();

        }
    }
    const addTask = (e)=>{
        const newTaskInfo = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskInfo();
        const goodTask = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].checkNewTask(e, newTaskInfo);
        if(goodTask){
            _allProjects[newTaskInfo.project].tasks.push(new _Task_js__WEBPACK_IMPORTED_MODULE_3__["default"](newTaskInfo.name, newTaskInfo.description, 
                newTaskInfo.date, newTaskInfo.priority, '', newTaskInfo.project));
            _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].addTaskToList();
            _dataStorage__WEBPACK_IMPORTED_MODULE_5__["default"].saveData();
        }
    }
    const confirmProjectEdit = (e)=>{
        const editTitle = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getElement('.title-edit').value;
        const projectNumber = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getElement('.title-edit').dataset.project;
        const goodProject = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].checkNewProject(e,{title:editTitle});
        if(goodProject){
            _allProjects[projectNumber].setTitle(editTitle);
            _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].updateProjectList();
            _dataStorage__WEBPACK_IMPORTED_MODULE_5__["default"].saveData();

        }
    }
    const confirmTaskEdit = (e)=>{
        const editTask = e.currentTarget.parentElement.dataset.task;
        const editTaskInfo = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskInfo(editTask);
        const goodTask = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].checkNewTask(e, editTaskInfo);
        if(goodTask){
            _allProjects[editTaskInfo.project].tasks[editTask]=new _Task_js__WEBPACK_IMPORTED_MODULE_3__["default"](editTaskInfo.name, editTaskInfo.description, 
                editTaskInfo.date, editTaskInfo.priority, '', editTaskInfo.project);
            _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].updateTaskList(editTask);
            _dataStorage__WEBPACK_IMPORTED_MODULE_5__["default"].saveData();
        }
    }

    const getAllProjects = ()=>{
        return _allProjects.map(ele=>ele);
    }
    const loadProjects = ()=>{
        _allProjects = _dataStorage__WEBPACK_IMPORTED_MODULE_5__["default"].loadData();
    }

    return{addProject, addTask, confirmProjectEdit, confirmTaskEdit, getAllProjects, loadProjects}

})();

const initWebsite = (()=>{
    setTimeout(_DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].fixStartingAnimations, 1);
    _EventHandler__WEBPACK_IMPORTED_MODULE_2__["default"].initStartingListeners();
    projectFunctions.loadProjects();
    _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].displayProjects();
    _EventHandler__WEBPACK_IMPORTED_MODULE_2__["default"].activateProjects();
})();







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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSw4QkFBOEIsNkJBQTZCLGdCQUFnQix3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LHVCQUF1Qiw2REFBb0I7QUFDM0M7O0FBRUEsV0FBVzs7QUFFWCxDQUFDOztBQUVEO0FBQ0EsZUFBZSx1RUFBOEI7QUFDN0MsSUFBSSwyRUFBa0M7QUFDdEM7QUFDQSxJQUFJLGlFQUF3QjtBQUM1QixJQUFJLHNFQUE2QjtBQUNqQyxDQUFDOzs7O0FBSXlCOzs7Ozs7OztVQzNFMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NTWFuaXAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RhdGFTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RUFCRTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZEN0E3O1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIG1hcmdpbi10b3A6IDcycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4jc2lkZS1wYW5lbHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNjM2MztcXG4gICAgY29sb3I6ICNGNkQ3QTc7XFxuICAgIG1pbi1oZWlnaHQ6IDkwLjF2aDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcbn1cXG4uc2lkZS1oZWFkZXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2lkZS1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvamVjdC1zaWRlLWxhYmVse1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogNHB4IDBweCA0cHggMjBweDtcXG4gICAgcGFkZGluZzogNHB4IDBweCA0cHggMTBweDtcXG59XFxuLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1MjUyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMCAzMHB4O1xcbn1cXG4uZHJvcGRvd24tdG9nZ2xle1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG4uZHJvcGRvd24tdG9nZ2xlLmFuaW17XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcbi5kcm9wZG93bi10b2dnbGUuY2xvc2Vke1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTkwZGVnKTtcXG59XFxuXFxuI21haW4tZGlzcGxheXtcXG4gICAgZmxleDogNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmFkZC1idXR0b257XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhFM0Q0O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgbWFyZ2luOiAwcHggOHB4IDFweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcbiAgICBcXG59XFxuXFxuLmFkZC1idXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG4uYWRkLWJ1dHRvbjphY3RpdmV7XFxuXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IGJsYWNrO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICByaWdodDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi5hbmlte1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyLCAjYWRkLXByb2plY3QtYnV0dG9uLmFjdGl2ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi5hY3RpdmV7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24gc3Bhbi5hbmlte1xcbiAgICB0cmFuc2l0aW9uOiAuMDVzO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHNwYW4sICNhZGQtcHJvamVjdC1idXR0b24gc3Bhbi5hY3RpdmV7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLmlucHV0LWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEUzRDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZjYzNjM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IGJsYWNrO1xcbn1cXG4jbmV3LXByb2otYWRkLWJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuaW5wdXQsIHNlbGVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3QUFBQTtcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHBhZGRpbmc6IDRweCA2cHggNHB4IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5zZWxlY3R7XFxuICAgIGhlaWdodDogMzFweDtcXG4gICAgZm9udC1zaXplOjE4cHhcXG59XFxuLnByb2plY3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4ucHJvamVjdC10aXRsZS13cmFwcGVye1xcbiAgICBtYXgtd2lkdGg6IDQ1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBcXG59XFxuLnRpdGxlLWVkaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgcGFkZGluZzogNnB4IDBweCAxMHB4IDtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcXG59XFxuXFxuLmFkZC10YXNrLWluZm97XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4udGFza3Mtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIFxcbn1cXG4udGFzay1pbmZve1xcbiAgICBtYXgtd2lkdGg6IDMwdnc7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5lcnJvci1tZXNzYWdle1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjOTkzYzNjO1xcbiAgICB0cmFuc2l0aW9uOiAycztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG5bZGF0YS1wcmlvcml0eT0nTG93J117XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUFEQUQ7XFxufVxcbltkYXRhLXByaW9yaXR5PSdNZWRpdW0nXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUYzODtcXG59XFxuW2RhdGEtcHJpb3JpdHk9J0hpZ2gnXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQ0Q4RDtcXG59XFxuXFxuLmVkaXQtYnV0dG9ue1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFxufVxcblxcbi5lZGl0LWJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOmJyaWdodG5lc3MoNzAlKTtcXG59XFxuXFxuLmVkaXQtYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcbi5lZGl0LWJ1dHRvbjpob3ZlciBzcGFue1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dCwgLnRhc2stY29udGFpbmVyIHNlbGVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcXG59XFxuLnRhc2stY29udGFpbmVyIHNlbGVjdHtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbiAgICBmb250LXNpemU6MTVweFxcbn1cXG5cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCIgaV0ge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcblxcbi8qIFNjcm9sbCBCYXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODdBQUFBO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4gICAgXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IzJmNjM2MzsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZjYzNjNcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiMyNjUyNTI7IFxcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICBib2R5e1xcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjMmY2MzYzICMyNjUyNTIgIzg3QUFBQTtcXG4gICAgfVxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5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Q0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO1FBQ0ksd0NBQXdDO0lBQzVDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RUFCRTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZEN0E3O1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIG1hcmdpbi10b3A6IDcycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4jc2lkZS1wYW5lbHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNjM2MztcXG4gICAgY29sb3I6ICNGNkQ3QTc7XFxuICAgIG1pbi1oZWlnaHQ6IDkwLjF2aDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcbn1cXG4uc2lkZS1oZWFkZXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2lkZS1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvamVjdC1zaWRlLWxhYmVse1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogNHB4IDBweCA0cHggMjBweDtcXG4gICAgcGFkZGluZzogNHB4IDBweCA0cHggMTBweDtcXG59XFxuLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1MjUyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMCAzMHB4O1xcbn1cXG4uZHJvcGRvd24tdG9nZ2xle1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG4uZHJvcGRvd24tdG9nZ2xlLmFuaW17XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcbi5kcm9wZG93bi10b2dnbGUuY2xvc2Vke1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTkwZGVnKTtcXG59XFxuXFxuI21haW4tZGlzcGxheXtcXG4gICAgZmxleDogNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmFkZC1idXR0b257XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhFM0Q0O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgbWFyZ2luOiAwcHggOHB4IDFweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcbiAgICBcXG59XFxuXFxuLmFkZC1idXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG4uYWRkLWJ1dHRvbjphY3RpdmV7XFxuXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IGJsYWNrO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICByaWdodDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi5hbmlte1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyLCAjYWRkLXByb2plY3QtYnV0dG9uLmFjdGl2ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi5hY3RpdmV7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24gc3Bhbi5hbmlte1xcbiAgICB0cmFuc2l0aW9uOiAuMDVzO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHNwYW4sICNhZGQtcHJvamVjdC1idXR0b24gc3Bhbi5hY3RpdmV7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLmlucHV0LWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEUzRDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZjYzNjM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IGJsYWNrO1xcbn1cXG4jbmV3LXByb2otYWRkLWJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuaW5wdXQsIHNlbGVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3QUFBQTtcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHBhZGRpbmc6IDRweCA2cHggNHB4IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5zZWxlY3R7XFxuICAgIGhlaWdodDogMzFweDtcXG4gICAgZm9udC1zaXplOjE4cHhcXG59XFxuLnByb2plY3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4ucHJvamVjdC10aXRsZS13cmFwcGVye1xcbiAgICBtYXgtd2lkdGg6IDQ1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnByb2plY3QtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBcXG59XFxuLnRpdGxlLWVkaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDZweDtcXG4gICAgcGFkZGluZzogNnB4IDBweCAxMHB4IDtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcXG59XFxuXFxuLmFkZC10YXNrLWluZm97XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4udGFza3Mtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIFxcbn1cXG4udGFzay1pbmZve1xcbiAgICBtYXgtd2lkdGg6IDMwdnc7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5lcnJvci1tZXNzYWdle1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjOTkzYzNjO1xcbiAgICB0cmFuc2l0aW9uOiAycztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG5bZGF0YS1wcmlvcml0eT0nTG93J117XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUFEQUQ7XFxufVxcbltkYXRhLXByaW9yaXR5PSdNZWRpdW0nXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUYzODtcXG59XFxuW2RhdGEtcHJpb3JpdHk9J0hpZ2gnXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQ0Q4RDtcXG59XFxuXFxuLmVkaXQtYnV0dG9ue1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFxufVxcblxcbi5lZGl0LWJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOmJyaWdodG5lc3MoNzAlKTtcXG59XFxuXFxuLmVkaXQtYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcbi5lZGl0LWJ1dHRvbjpob3ZlciBzcGFue1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dCwgLnRhc2stY29udGFpbmVyIHNlbGVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcXG59XFxuLnRhc2stY29udGFpbmVyIHNlbGVjdHtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbiAgICBmb250LXNpemU6MTVweFxcbn1cXG5cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCIgaV0ge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcblxcbi8qIFNjcm9sbCBCYXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODdBQUFBO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4gICAgXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IzJmNjM2MzsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZjYzNjNcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiMyNjUyNTI7IFxcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICBib2R5e1xcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjMmY2MzYzICMyNjUyNTIgIzg3QUFBQTtcXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RGdW5jdGlvbnMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tIFwiLi9FdmVudEhhbmRsZXJcIjtcblxuY29uc3QgRE9NTWFuaXAgPSAoKCk9PntcbiAgICBjb25zdCBnZXRFbGVtZW50ID0gKHNlbGVjdG9yKT0+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICBjb25zdCBnZXRFbGVtZW50cyA9IChzZWxlY3Rvcik9PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBjb25zdCBmaXhTdGFydGluZ0FuaW1hdGlvbnMgPSAoKT0+e1xuICAgICAgICBjb25zdCBhbmltYXRhYmxlID0gZ2V0RWxlbWVudHMoXCIuZml4LWFuaW1cIilcbiAgICAgICAgYW5pbWF0YWJsZS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZCgnYW5pbScpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeC1hbmltJyl9KVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBfbWFrZU5ld0VsZW1lbnQgPSAodHlwZSwgaWQ9JycsIEhUTUxDbGFzcyA9ICcnLCB0ZXh0ID0gJycsIC4uLmF0dHJpYnV0ZXMpID0+e1xuICAgICAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgaWYoaWQgIT0gJycpe1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoSFRNTENsYXNzICE9ICcnKXtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIEhUTUxDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmKGF0dHJpYnV0ZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ID0+IG5ld0VsZW0uc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKGF0dClbMF0sIGF0dFtPYmplY3Qua2V5cyhhdHQpXSkpXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIG5ld0VsZW07XG4gICAgfVxuICAgIGNvbnN0IF9yZW1vdmVFbGVtZW50ID0gKGVsZW1lbnRJRCkgPT57XG4gICAgICAgIGdldEVsZW1lbnQoZWxlbWVudElEKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgY29uc3QgX2Rpc3BsYXlFcnJvcnMgPSAoZSwgaW5wdXQsIHR5cGUpPT57XG4gICAgICAgIGlucHV0LmZvckVhY2goZWxlPT57XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywnJywnZXJyb3ItbWVzc2FnZScsIGVsZSlcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICBwYXJlbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZXJyb3IsIHBhcmVudCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT5lcnJvci5zdHlsZS5vcGFjaXR5ID0gMCwgMjAwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT5lcnJvci5yZW1vdmUoKSwgNDAwMCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IF90b2dnbGVBY3RpdmUgPSAoZWxlbWVudElEKSA9PntcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudElEKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk/IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykgOiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldHVwTmV3UHJvamVjdCA9ICgpPT57XG4gICAgICAgIF90b2dnbGVBY3RpdmUoJyNhZGQtcHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgX3RvZ2dsZUFjdGl2ZSgnI2FkZC1wcm9qZWN0LWJ1dHRvbi10ZXh0Jyk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2pJbnB1dENvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgJ25ldy1wcm9qLWlucHV0LWNvbnRhaW5lcicsICdpbnB1dC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbmV3UHJvaklucHV0ID0gX21ha2VOZXdFbGVtZW50KCdpbnB1dCcsICduZXctcHJvai1pbnB1dCcsICcnLCcnLHt0eXBlOid0ZXh0J30sIHt2YWx1ZTonUHJvamVjdCBUaXRsZSd9ICk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2pBZGRCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoJ2J1dHRvbicsICduZXctcHJvai1hZGQtYnV0dG9uJywgJ2FkZC1idXR0b24nLCAnU3VibWl0Jyk7XG5cbiAgICAgICAgbmV3UHJvaklucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2pJbnB1dCk7XG4gICAgICAgIG5ld1Byb2pJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qQWRkQnV0dG9uKTtcblxuICAgICAgICBnZXRFbGVtZW50KCcjYWRkLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKG5ld1Byb2pJbnB1dENvbnRhaW5lcik7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFkZFByb2plY3RTdWJtaXNzaW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IGNhbmNlbE5ld1Byb2plY3QgPSAoKT0+e1xuICAgICAgICBfdG9nZ2xlQWN0aXZlKCcjYWRkLXByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIF90b2dnbGVBY3RpdmUoJyNhZGQtcHJvamVjdC1idXR0b24tdGV4dCcpO1xuICAgICAgICBfcmVtb3ZlRWxlbWVudChcIiNuZXctcHJvai1pbnB1dC1jb250YWluZXJcIik7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUFkZEJ1dHRvbigpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmV3UHJvakluZm8gPSAoKT0+e1xuICAgICAgICByZXR1cm4ge3RpdGxlOkRPTU1hbmlwLmdldEVsZW1lbnQoJyNuZXctcHJvai1pbnB1dCcpLnZhbHVlfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY2hlY2tOZXdQcm9qZWN0ID0gKGUsIHByb2plY3QpPT57XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2VzID0gW107XG4gICAgICAgIGlmKHByb2plY3QudGl0bGUgPT0gJycpe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgdGhlIHByb2plY3QnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihlcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgX2Rpc3BsYXlFcnJvcnMoZSwgZXJyb3JNZXNzYWdlcywgJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBjb25zdCBfcmVtb3ZlU3ViRW50cmllcyA9IChlbGVtZW50KT0+e1xuICAgICAgICBmb3IobGV0IGkgPSBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpID4gMjsgaS0tKXtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1tpLTFdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IF9yZXZlYWxBcnJheSA9IChwYXJlbnQsIGFycmF5LCB0eXBlKT0+e1xuICAgICAgICBfcmVtb3ZlU3ViRW50cmllcyhwYXJlbnQpO1xuICAgICAgICBhcnJheS5mb3JFYWNoKChwcm9qLCBpbmRleCk9PiBwYXJlbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBfbWFrZU5ld0VsZW1lbnQoJ2RpdicsIGAke3R5cGV9LSR7aW5kZXh9YCwgYCR7dHlwZX0tc2lkZS1sYWJlbCAkeyh0eXBlPT0ncHJvamVjdCcgJiYgcHJvai5pc1NlbGVjdGVkKCkpPydzZWxlY3RlZCcgOiAnJ31gLCBwcm9qLmdldFRpdGxlKCksIHsnZGF0YS1pbmRleCc6IGAke2luZGV4fWB9LCApKSlcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKT0+e1xuICAgICAgICBfcmV2ZWFsQXJyYXkoZ2V0RWxlbWVudCgnI3Byb2plY3RzLXNpZGUnKS5wYXJlbnRFbGVtZW50LCBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCksICdwcm9qZWN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgX2Rpc3BsYXlUaXRsZSA9ICgpPT57XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBfZ2V0UHJvamVjdE51bWJlcigpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXTtcbiAgICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gZ2V0RWxlbWVudCgnLnByb2plY3QtdGl0bGUtd3JhcHBlcicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gX21ha2VOZXdFbGVtZW50KCdkaXYnLCBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRpdGxlYCwgJ3Byb2plY3QtdGl0bGUnLCBgJHtjdXJyZW50UHJvamVjdC5nZXRUaXRsZSgpfWApO1xuICAgICAgICBjb25zdCBlZGl0VGl0bGVCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoJ2J1dHRvbicsIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tZWRpdC1idXR0b25gLCAnZWRpdC1idXR0b24nKTtcbiAgICAgICAgY29uc3QgZWRpdFRpdGxlSWNvbiA9IF9tYWtlTmV3RWxlbWVudCgnaScsICcnLCAnZmEtc29saWQgZmEtcGVuY2lsIGVkaXQtaWNvbicpO1xuICAgICAgICBjb25zdCBlZGl0VGl0bGVUZXh0ID1fbWFrZU5ld0VsZW1lbnQoJ3NwYW4nLCAnJywgJ2VkaXQtdGV4dCcsICdFZGl0IFRpdGxlJylcbiAgICAgICAgZWRpdFRpdGxlQnV0dG9uLmFwcGVuZENoaWxkKGVkaXRUaXRsZUljb24pO1xuICAgICAgICBlZGl0VGl0bGVCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdFRpdGxlVGV4dCk7XG4gICAgICAgIGlmKHRpdGxlV3JhcHBlci5jaGlsZE5vZGVzLmxlbmd0aCA+MCl7XG4gICAgICAgICAgICB0aXRsZVdyYXBwZXIuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aXRsZVdyYXBwZXIubGFzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgdGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKGVkaXRUaXRsZUJ1dHRvbik7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZVByb2plY3RMaXN0ID0gKCk9PntcbiAgICAgICAgaWYoZ2V0RWxlbWVudCgnI25ldy1wcm9qLWlucHV0LWNvbnRhaW5lcicpKXtcbiAgICAgICAgICAgIF9yZW1vdmVFbGVtZW50KFwiI25ldy1wcm9qLWlucHV0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIF90b2dnbGVBY3RpdmUoJyNhZGQtcHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgICAgIF90b2dnbGVBY3RpdmUoJyNhZGQtcHJvamVjdC1idXR0b24tdGV4dCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGdldEVsZW1lbnQoJy50aXRsZS1lZGl0Jykpe1xuICAgICAgICAgICAgX2Rpc3BsYXlUaXRsZSgpXG4gICAgICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVFZGl0UHJvamVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQWRkQnV0dG9uKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVByb2plY3RzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwYW5kVG9nZ2xlID0gKGUpPT57XG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBsZXQgdHlwZSA9ICcnO1xuICAgICAgICBpZihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkID09ICdwcm9qZWN0cy1zaWRlJylcbiAgICAgICAge1xuICAgICAgICAgICAgYXJyYXkgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCk7XG4gICAgICAgICAgICB0eXBlID0gJ3Byb2plY3QnO1xuICAgICAgICB9XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2VkJykpe1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2VkJylcbiAgICAgICAgICAgIF9yZXZlYWxBcnJheShlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsIGFycmF5LCB0eXBlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgICAgIF9yZW1vdmVTdWJFbnRyaWVzKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudClcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgX21hcmtTZWxlY3RlZFByb2plY3QgPSAoZSk9PntcbiAgICAgICAgZ2V0RWxlbWVudHMoXCIucHJvamVjdC1zaWRlLWxhYmVsXCIpLmZvckVhY2goZWxlPT5lbGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKHByb2ogPT4gcHJvai5tYXJrU2VsZWN0ZWQoZmFsc2UpKTtcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpW2UudGFyZ2V0LmRhdGFzZXQuaW5kZXhdLm1hcmtTZWxlY3RlZCh0cnVlKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBfZGlzcGxheVRhc2tJbnB1dCA9ICgpPT57XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBnZXRFbGVtZW50KCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgJ2FkZC10YXNrLWNvbnRhaW5lcicsICdpbnB1dC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWRkVGFza05hbWUgPSBfbWFrZU5ld0VsZW1lbnQoJ2lucHV0JywgJ2FkZC10YXNrLW5hbWUtaW5wdXQnLCAnYWRkLXRhc2staW5mbycsJycse3R5cGU6J3RleHQnfSwge3ZhbHVlOidUYXNrIE5hbWUnfSk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tEZXNjcmlwdGlvbiA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCAnYWRkLXRhc2stZGVzY3JpcHRpb24taW5wdXQnLCAnYWRkLXRhc2staW5mbycsJycse3R5cGU6J3RleHQnfSwge3ZhbHVlOidUYXNrIERlc2NyaXB0aW9uJ30pO1xuICAgICAgICBjb25zdCBhZGRUYXNrRGF0ZSA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCAnYWRkLXRhc2stZGF0ZS1pbnB1dCcsICdhZGQtdGFzay1pbmZvJywnRHVlIERhdGUnLHt0eXBlOidkYXRlJ30pO1xuICAgICAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHkgPSBfbWFrZU5ld0VsZW1lbnQoJ3NlbGVjdCcsICdhZGQtdGFzay1wcmlvcml0eS1pbnB1dCcsICdhZGQtdGFzay1pbmZvJywnJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eURlZmF1bHQgPSBfbWFrZU5ld0VsZW1lbnQoJ29wdGlvbicsJycsJycsJ1ByaW9yaXR5Jywge3ZhbHVlOjB9ICk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eUxvdyA9IF9tYWtlTmV3RWxlbWVudCgnb3B0aW9uJywnJywnJywnTG93Jywge3ZhbHVlOidMb3cnfSx7c3R5bGU6J2JhY2tncm91bmQtY29sb3I6I0UxQURBRCd9KTtcbiAgICAgICAgY29uc3QgYWRkVGFza1ByaW9yaXR5TWVkaXVtID0gX21ha2VOZXdFbGVtZW50KCdvcHRpb24nLCcnLCcnLCdNZWRpdW0nLCB7dmFsdWU6XCJNZWRpdW1cIn0sIHtzdHlsZTonYmFja2dyb3VuZC1jb2xvcjojRUZFRjM4J30pO1xuICAgICAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHlIaWdoID0gX21ha2VOZXdFbGVtZW50KCdvcHRpb24nLCcnLCcnLCdIaWdoJywge3ZhbHVlOlwiSGlnaFwifSwge3N0eWxlOidiYWNrZ3JvdW5kLWNvbG9yOiM5RENEOEQnfSk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoJ2J1dHRvbicsICdhZGQtdGFzay1idXR0b24nLCAnYWRkLWJ1dHRvbicsICdBZGQgTmV3IFRhc2snKTtcblxuICAgICAgICBhZGRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5RGVmYXVsdCk7XG4gICAgICAgIGFkZFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHlMb3cpO1xuICAgICAgICBhZGRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5TWVkaXVtKTtcbiAgICAgICAgYWRkVGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eUhpZ2gpO1xuXG4gICAgICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza05hbWUpO1xuICAgICAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0RhdGUpO1xuICAgICAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eSk7XG4gICAgICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUFkZFRhc2tCdXR0b24oKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgX2dldFByb2plY3ROdW1iZXIgPSAoKT0+e1xuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudCgnLnNlbGVjdGVkJykuZGF0YXNldC5pbmRleDtcblxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2tJbmZvID0gKGluZGV4KT0+e1xuICAgICAgICBsZXQgZm9ybUluZm87XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBfZ2V0UHJvamVjdE51bWJlcigpO1xuICAgICAgICBpZihpbmRleCA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZm9ybUluZm8gPSBnZXRFbGVtZW50cygnLmFkZC10YXNrLWluZm8nKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBmb3JtSW5mbyA9IGdldEVsZW1lbnRzKGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHtpbmRleH0tY29udGFpbmVyIC5lZGl0LXRhc2staW5mb2ApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtuYW1lOmZvcm1JbmZvWzBdLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtSW5mb1sxXS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXRlOiBmb3JtSW5mb1syXS52YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogZm9ybUluZm9bM10udmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvamVjdDogcHJvamVjdE51bWJlcn1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tOZXdUYXNrID0gKGUsIHRhc2spPT57XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2VzID0gW107XG4gICAgICAgIGlmKHRhc2submFtZSA9PSAnJyl7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goJ1BsZWFzZSBlbnRlciBhIG5hbWUgZm9yIHRoZSB0YXNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGFzay5kZXNjcmlwdGlvbiA9PSAnJyl7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goJ1BsZWFzZSBlbnRlciBhIGRlc2NyaXB0aW9uIGZvciB0aGUgdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRhc2suZGF0ZSA9PSAnJyl7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goJ1BsZWFzZSBlbnRlciBhIGR1ZSBkYXRlIGZvciB0aGUgdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRhc2sucHJpb3JpdHkgPT0gMCl7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goJ1BsZWFzZSBlbnRlciBhIHByaW9yaXR5IGxldmVsIGZvciB0aGUgdGFzaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIF9kaXNwbGF5RXJyb3JzKGUsIGVycm9yTWVzc2FnZXMsICd0YXNrJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IF9pbnNlcnRBZnRlciA9IChuZXdOb2RlLCBleGlzdGluZ05vZGUpPT4ge1xuICAgICAgICBleGlzdGluZ05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgZXhpc3RpbmdOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBfZmlsbEluVGFzayA9ICh0YXNrLCB0YXNrTnVtYmVyKT0+e1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gX2dldFByb2plY3ROdW1iZXIoKTtcbiAgICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBnZXRFbGVtZW50KCcudGFza3MtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tY29udGFpbmVyYCwgJ3Rhc2stY29udGFpbmVyJywgJycsIHsnZGF0YS1wcmlvcml0eSc6dGFzay5nZXRQcmlvcml0eSgpfSx7XCJkYXRhLXRhc2tcIjp0YXNrTnVtYmVyfSk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tDaGVja2JveCA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jaGVja2JveGAsICd0YXNrLWNoZWNrYm94JywgJycsIHt0eXBlOidjaGVja2JveCd9LCB7J2RhdGEtcHJvamVjdCc6cHJvamVjdE51bWJlcn0sIHsnZGF0YS10YXNrJzp0YXNrTnVtYmVyfSk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gX21ha2VOZXdFbGVtZW50KCdkaXYnLCBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1uYW1lYCwgJ3Rhc2stbmFtZSB0YXNrLWluZm8nLCB0YXNrLmdldE5hbWUoKSk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZGVzY3JpcHRpb25gLCAndGFzay1kZXNjcmlwdGlvbiB0YXNrLWluZm8nLCB0YXNrLmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZGF0ZWAsICd0YXNrLWRhdGUgdGFzay1pbmZvJywgdGFzay5nZXREYXRlKCkpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRWRpdEJ1dHRvbiA9IF9tYWtlTmV3RWxlbWVudCgnYnV0dG9uJywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZWRpdC1idXR0b25gLCAnZWRpdC1idXR0b24nKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0VkaXRJY29uID0gX21ha2VOZXdFbGVtZW50KCdpJywgJycsICdmYS1zb2xpZCBmYS1wZW5jaWwgZWRpdC1pY29uJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tFZGl0VGV4dCA9X21ha2VOZXdFbGVtZW50KCdzcGFuJywgJycsICdlZGl0LXRleHQnLCAnRWRpdCBUYXNrJylcblxuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tDaGVja2JveCk7XG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza05hbWUpO1xuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0RhdGUpO1xuICAgICAgICBuZXdUYXNrRWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChuZXdUYXNrRWRpdEljb24pO1xuICAgICAgICBuZXdUYXNrRWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChuZXdUYXNrRWRpdFRleHQpO1xuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tFZGl0QnV0dG9uKTtcbiAgICAgICAgX2luc2VydEFmdGVyKG5ld1Rhc2tDb250YWluZXIsICh0YXNrTnVtYmVyID09IDApP3Rhc2tzQ29udGFpbmVyLmNoaWxkTm9kZXNbdGFza051bWJlcl06dGFza3NDb250YWluZXIuY2hpbGROb2Rlc1t0YXNrTnVtYmVyLTFdKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlRWRpdEJ1dHRvbihuZXdUYXNrRWRpdEJ1dHRvbik7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVGFza0xpc3QgPSAodGFza051bWJlcik9PntcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IF9nZXRQcm9qZWN0TnVtYmVyKCk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQ29udGFpbmVyID0gZ2V0RWxlbWVudChgI3Byb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tY29udGFpbmVyYClcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2sgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl0udGFza3NbdGFza051bWJlcl07XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLnJlbW92ZSgpXG4gICAgICAgIF9maWxsSW5UYXNrKHVwZGF0ZWRUYXNrLCB0YXNrTnVtYmVyKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tUb0xpc3QgPSAoKT0+e1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gX2dldFByb2plY3ROdW1iZXIoKTtcbiAgICAgICAgY29uc3QgdGFza051bWJlciA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXS50YXNrcy5sZW5ndGgtMTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXS50YXNrc1t0YXNrTnVtYmVyXTtcblxuICAgICAgICBnZXRFbGVtZW50KCcjYWRkLXRhc2stY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgIF9maWxsSW5UYXNrKG5ld1Rhc2ssIHRhc2tOdW1iZXIpO1xuICAgICAgICBfZGlzcGxheVRhc2tJbnB1dCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlFZGl0UHJvamVjdCA9IChlKT0+e1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gX2dldFByb2plY3ROdW1iZXIoKTtcbiAgICAgICAgY29uc3QgcHJvamVjVGl0bGUgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl0uZ2V0VGl0bGUoKTtcbiAgICAgICAgY29uc3QgdGl0bGVXcmFwcGVyID0gZ2V0RWxlbWVudCgnLnByb2plY3QtdGl0bGUtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gX21ha2VOZXdFbGVtZW50KCdpbnB1dCcsIGBwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGl0bGUtaW5wdXRgLCAndGl0bGUtZWRpdCcsICcnLCB7dHlwZTondGV4dCd9LCB7dmFsdWU6cHJvamVjVGl0bGV9LCB7J2RhdGEtcHJvamVjdCc6cHJvamVjdE51bWJlcn0pO1xuICAgICAgICB0aXRsZVdyYXBwZXIuaW5zZXJ0QmVmb3JlKHByb2plY3RUaXRsZUlucHV0LCB0aXRsZVdyYXBwZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIHRpdGxlV3JhcHBlci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcblxuICAgICAgICBlZGl0QnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXBlbmNpbCcpO1xuICAgICAgICBlZGl0QnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZWNrJyk7XG4gICAgICAgIGVkaXRCdXR0b24ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVDb25maXJtUHJvamVjdEVkaXQoZWRpdEJ1dHRvbik7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUVkaXRUYXNrID0gZT0+e1xuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gX2dldFByb2plY3ROdW1iZXIoKVxuICAgICAgICBjb25zdCB0YXNrTnVtYmVyID0gZWRpdEJ1dHRvbi5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGFzaztcbiAgICAgICAgY29uc3QgZWRpdFRhc2sgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl0udGFza3NbdGFza051bWJlcl07XG5cbiAgICAgICAgY29uc3QgZWRpdFRhc2tOYW1lID0gX21ha2VOZXdFbGVtZW50KCdpbnB1dCcsICdlZGl0LXRhc2stbmFtZS1pbnB1dCcsICdlZGl0LXRhc2staW5mbycsJycse3R5cGU6J3RleHQnfSwge3ZhbHVlOmVkaXRUYXNrLmdldE5hbWUoKX0pO1xuICAgICAgICBjb25zdCBlZGl0VGFza0Rlc2NyaXB0aW9uID0gX21ha2VOZXdFbGVtZW50KCdpbnB1dCcsICdlZGl0LXRhc2stZGVzY3JpcHRpb24taW5wdXQnLCAnZWRpdC10YXNrLWluZm8nLCcnLHt0eXBlOid0ZXh0J30sIHt2YWx1ZTplZGl0VGFzay5nZXREZXNjcmlwdGlvbigpfSk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrRGF0ZSA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCAnZWRpdC10YXNrLWRhdGUtaW5wdXQnLCAnZWRpdC10YXNrLWluZm8nLCdEdWUgRGF0ZScse3R5cGU6J2RhdGUnfSwge3ZhbHVlOmVkaXRUYXNrLmdldERhdGUoKX0pO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5ID0gX21ha2VOZXdFbGVtZW50KCdzZWxlY3QnLCAnZWRpdC10YXNrLXByaW9yaXR5LWlucHV0JywgJ2VkaXQtdGFzay1pbmZvJywnJyk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlMb3cgPSBfbWFrZU5ld0VsZW1lbnQoJ29wdGlvbicsJycsJycsJ0xvdycsIHt2YWx1ZTonTG93J30se3N0eWxlOidiYWNrZ3JvdW5kLWNvbG9yOiNFMUFEQUQnfSk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlNZWRpdW0gPSBfbWFrZU5ld0VsZW1lbnQoJ29wdGlvbicsJycsJycsJ01lZGl1bScsIHt2YWx1ZTpcIk1lZGl1bVwifSwge3N0eWxlOidiYWNrZ3JvdW5kLWNvbG9yOiNFRkVGMzgnfSk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlIaWdoID0gX21ha2VOZXdFbGVtZW50KCdvcHRpb24nLCcnLCcnLCdIaWdoJywge3ZhbHVlOlwiSGlnaFwifSwge3N0eWxlOidiYWNrZ3JvdW5kLWNvbG9yOiM5RENEOEQnfSk7XG4gICAgICAgIFxuICAgICAgICBpZihlZGl0VGFzay5nZXRQcmlvcml0eSgpID09ICdMb3cnKXtcbiAgICAgICAgICAgIGVkaXRUYXNrUHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpXG4gICAgICAgIH1lbHNlIGlmKGVkaXRUYXNrLmdldFByaW9yaXR5KCkgPT0gJ01lZGl1bScpe1xuICAgICAgICAgICAgZWRpdFRhc2tQcmlvcml0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJylcbiAgICAgICAgfWVsc2UgaWYoZWRpdFRhc2suZ2V0UHJpb3JpdHkoKSA9PSAnSGlnaCcpe1xuICAgICAgICAgICAgZWRpdFRhc2tQcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZ2V0RWxlbWVudHMoYCNwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGFzay0ke3Rhc2tOdW1iZXJ9LWNvbnRhaW5lciAudGFzay1pbmZvYCkuZm9yRWFjaChlbGU9PmVsZS5yZW1vdmUoKSlcblxuICAgICAgICBlZGl0VGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGVkaXRUYXNrUHJpb3JpdHlMb3cpO1xuICAgICAgICBlZGl0VGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGVkaXRUYXNrUHJpb3JpdHlNZWRpdW0pO1xuICAgICAgICBlZGl0VGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGVkaXRUYXNrUHJpb3JpdHlIaWdoKTtcblxuICAgICAgICBjb25zdCBlZGl0Q2FuY2VsQnV0dG9uID0gX21ha2VOZXdFbGVtZW50KCdidXR0b24nLCBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1lZGl0LWNhbmNlbC1idXR0b25gLCAnZWRpdC1idXR0b24nKTtcbiAgICAgICAgY29uc3QgZWRpdENhbmNlbEljb24gPSBfbWFrZU5ld0VsZW1lbnQoJ2knLCAnJywgJ2ZhLXNvbGlkIGZhLXhtYXJrIGVkaXQtY2FuY2VsLWljb24nKTtcbiAgICAgICAgY29uc3QgZWRpdENhbmNlbFRleHQgPV9tYWtlTmV3RWxlbWVudCgnc3BhbicsICcnLCAnZWRpdC1jYW5jZWwtdGV4dCcsICdDYW5jZWwnKVxuXG4gICAgICAgIGVkaXRDYW5jZWxCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdENhbmNlbEljb24pO1xuICAgICAgICBlZGl0Q2FuY2VsQnV0dG9uLmFwcGVuZENoaWxkKGVkaXRDYW5jZWxUZXh0KTtcblxuICAgICAgICBjb25zdCBlZGl0VGFza0NvbnRhaW5lciA9IGdldEVsZW1lbnQoYCNwcm9qZWN0LSR7cHJvamVjdE51bWJlcn0tdGFzay0ke3Rhc2tOdW1iZXJ9LWNvbnRhaW5lcmApXG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza05hbWUsIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tEZXNjcmlwdGlvbiwgZWRpdFRhc2tDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZShlZGl0VGFza0RhdGUsIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tQcmlvcml0eSwgZWRpdFRhc2tDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRDYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIGVkaXRCdXR0b24uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnZmEtcGVuY2lsJyk7XG4gICAgICAgIGVkaXRCdXR0b24uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnZmEtY2hlY2snKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQ29uZmlybVRhc2tFZGl0KGVkaXRCdXR0b24pO1xuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1Byb2plY3QgPSAoZSk9PntcbiAgICAgICAgX21hcmtTZWxlY3RlZFByb2plY3QoZSk7XG4gICAgICAgIGNvbnN0IG1haW5EaXNwbGF5ID0gZ2V0RWxlbWVudCgnI21haW4tZGlzcGxheScpO1xuXG4gICAgICAgIC8vdGhpcyBjYW4gZ2V0IHJlbW92ZWQgYWZ0ZXIgVG9kYXkncyBUYXNrcyBpcyB3b3JraW5nXG4gICAgICAgIGlmKG1haW5EaXNwbGF5LmNoaWxkTm9kZXMubGVuZ3RoID4wKXtcbiAgICAgICAgICAgIG1haW5EaXNwbGF5LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8qKioqKlxuXG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBfZ2V0UHJvamVjdE51bWJlcigpO1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KCdkaXYnLCBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LWNvbnRhaW5lcmAsICdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVXcmFwcGVyID0gX21ha2VOZXdFbGVtZW50KCdkaXYnICwgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10aXRsZS13cmFwcGVyYCwgJ3Byb2plY3QtdGl0bGUtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrcy1jb250YWluZXJgLCAndGFza3MtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tzV3JhcHBlciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrcy13cmFwcGVyYCwgJ3Rhc2tzLXdyYXBwZXInKVxuICAgICAgICBjb25zdCBzcGFjZXIgPSBfbWFrZU5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZVdyYXBwZXIpO1xuICAgICAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgICAgICB0YXNrc1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NXcmFwcGVyKTtcbiAgICAgICAgbWFpbkRpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIF9kaXNwbGF5VGl0bGUoKTtcbiAgICAgICAgY3VycmVudFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IF9maWxsSW5UYXNrKHRhc2ssIGluZGV4KSlcbiAgICAgICAgX2Rpc3BsYXlUYXNrSW5wdXQoKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlRWRpdFByb2plY3QoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW5jZWxFZGl0ID0gKGUpPT57XG4gICAgICAgIGNvbnN0IHRhc2sgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2s7XG4gICAgICAgIHVwZGF0ZVRhc2tMaXN0KHRhc2spO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0RWxlbWVudCwgZ2V0RWxlbWVudHMsIGZpeFN0YXJ0aW5nQW5pbWF0aW9ucyxjaGVja05ld1Byb2plY3QsIHNldHVwTmV3UHJvamVjdCwgY2FuY2VsTmV3UHJvamVjdCxcbiAgICAgICAgIGdldE5ld1Byb2pJbmZvLCB1cGRhdGVQcm9qZWN0TGlzdCwgZXhwYW5kVG9nZ2xlLCBzaG93UHJvamVjdCwgZ2V0VGFza0luZm8sIGNoZWNrTmV3VGFzaywgXG4gICAgICAgICBhZGRUYXNrVG9MaXN0LCBkaXNwbGF5RWRpdFByb2plY3QsIGRpc3BsYXlFZGl0VGFzaywgdXBkYXRlVGFza0xpc3QsIGNhbmNlbEVkaXQsIGRpc3BsYXlQcm9qZWN0c31cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1hbmlwOyIsImltcG9ydCBET01NYW5pcCBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IHsgcHJvamVjdEZ1bmN0aW9ucyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9ICgoKT0+e1xuICAgIGNvbnN0IGFjdGl2YXRlQWRkQnV0dG9uID0gKCk9PntcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01NYW5pcC5jYW5jZWxOZXdQcm9qZWN0KTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01NYW5pcC5zZXR1cE5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRTdGFydGluZ0xpc3RlbmVycyA9ICgpPT57XG4gICAgICAgIGFjdGl2YXRlQWRkQnV0dG9uKCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKCcuZHJvcGRvd24tdG9nZ2xlJykuZm9yRWFjaChlbGUgPT5lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01NYW5pcC5leHBhbmRUb2dnbGUpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0U3VibWlzc2lvbiA9ICgpPT57XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NTWFuaXAuc2V0dXBOZXdQcm9qZWN0KTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01NYW5pcC5jYW5jZWxOZXdQcm9qZWN0KTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudCgnI25ldy1wcm9qLWFkZC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RGdW5jdGlvbnMuYWRkUHJvamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVQcm9qZWN0cyA9ICgpPT57XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKCcucHJvamVjdC1zaWRlLWxhYmVsJykuZm9yRWFjaChlbGU9PmVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTU1hbmlwLnNob3dQcm9qZWN0KSk7XG5cbiAgICB9XG4gICAgY29uc3QgYWN0aXZhdGVFZGl0UHJvamVjdCA9ICgpPT57XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoJy5wcm9qZWN0LXRpdGxlLXdyYXBwZXIgYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01NYW5pcC5kaXNwbGF5RWRpdFByb2plY3QpO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmF0ZUFkZFRhc2tCdXR0b24gPSAoKT0+e1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KCcjYWRkLXRhc2stYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RnVuY3Rpb25zLmFkZFRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlRWRpdEJ1dHRvbiA9IGJ1dHRvbj0+e1xuICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RnVuY3Rpb25zLmNvbmZpcm1FZGl0KTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NTWFuaXAuZGlzcGxheUVkaXRUYXNrKTtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZhdGVDb25maXJtUHJvamVjdEVkaXQgPSBidXR0b249PntcbiAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NTWFuaXAuZGlzcGxheUVkaXRQcm9qZWN0KVxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RnVuY3Rpb25zLmNvbmZpcm1Qcm9qZWN0RWRpdCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVDb25maXJtVGFza0VkaXQgPSBidXR0b249PntcbiAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NTWFuaXAuZGlzcGxheUVkaXRUYXNrKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdEZ1bmN0aW9ucy5jb25maXJtVGFza0VkaXQpO1xuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NTWFuaXAuY2FuY2VsRWRpdCk7XG5cbiAgICB9XG5cbiAgICByZXR1cm57YWN0aXZhdGVBZGRCdXR0b24sIGluaXRTdGFydGluZ0xpc3RlbmVycywgYWRkUHJvamVjdFN1Ym1pc3Npb24sIGFjdGl2YXRlUHJvamVjdHMsIFxuICAgICAgICBhY3RpdmF0ZUVkaXRQcm9qZWN0LCBhY3RpdmF0ZUFkZFRhc2tCdXR0b24sIGFjdGl2YXRlRWRpdEJ1dHRvbiwgYWN0aXZhdGVDb25maXJtUHJvamVjdEVkaXQsXG4gICAgICAgIGFjdGl2YXRlQ29uZmlybVRhc2tFZGl0fTtcbn0pKCk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEhhbmRsZXI7IiwiZXhwb3J0IGNsYXNzIFByb2plY3R7XG4gICAgICAgIGNvbnN0cnVjdG9yKGluaXRUaXRsZSwgdGFza3MgPSBbXSwgY29tcGxldGVkID0gZmFsc2Upe1xuICAgICAgICB0aGlzLnRpdGxlID0gaW5pdFRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGdldFRpdGxlKCl7cmV0dXJuIHRoaXMudGl0bGU7fVxuICAgIGdldFRhc2tzKCl7cmV0dXJuIHRoaXMudGFza3M7fVxuICAgIGlzQ29tcGxldGVkKCl7cmV0dXJuIHRoaXMuY29tcGxldGVkO31cbiAgICBpc1NlbGVjdGVkKCl7cmV0dXJuIHRoaXMuc2VsZWN0ZWQ7fVxuICAgIHNldFRpdGxlKG5ld1RpdGxlKXt0aGlzLnRpdGxlID0gbmV3VGl0bGU7fVxuICAgIGFkZFRhc2sobmV3VGFzayl7dGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO31cbiAgICBtYXJrQ29tcGxldGUodmFsdWUpe3RoaXMuY29tcGxldGVkID0gdmFsdWU7fVxuICAgIG1hcmtTZWxlY3RlZCh2YWx1ZSl7dGhpcy5zZWxlY3RlZCA9IHZhbHVlO31cbn0iLCJjbGFzcyBUYXNre1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvamVjdCl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGdldE5hbWUgPSAoKT0+dGhpcy5uYW1lXG4gICAgZ2V0RGVzY3JpcHRpb24gPSAoKT0+dGhpcy5kZXNjcmlwdGlvblxuICAgIGdldERhdGUgPSAoKT0+dGhpcy5kdWVEYXRlXG4gICAgZ2V0UHJpb3JpdHkgPSAoKT0+dGhpcy5wcmlvcml0eVxuICAgIGdldE5vdGVzID0gKCk9PnRoaXMubm90ZXNcbiAgICBnZXRQcm9qZWN0ID0gKCk9PnRoaXMucHJvamVjdFxuICAgIGlzQ29tcGxldGUgPSAoKT0+dGhpcy5jb21wbGV0ZWRcblxuICAgIHNldE5hbWUgPSAobmV3TmFtZSk9PnRoaXMubmFtZSA9IG5ld05hbWVcbiAgICBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbik9PnRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuICAgIHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSk9PnRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGVcbiAgICBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSk9PnRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eVxuICAgIHNldE5vdGVzID0gKG5ld05vdGVzKT0+dGhpcy5ub3RlcyA9IG5ld05vdGVzXG4gICAgbWFya0NvbXBsZXRlID0gKCk9PnRoaXMuY29tcGxldGVkID0gdHJ1ZVxufVxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJpbXBvcnQgeyBwcm9qZWN0RnVuY3Rpb25zIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0LmpzXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrLmpzXCI7XG5cblxuY29uc3QgZGF0YVN0b3JhZ2UgPSAoKCk9PntcbiAgICBjb25zdCBzYXZlRGF0YSA9ICgpPT57XG4gICAgICAgIGNvbnN0IGFsbFByb2ogPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvaikpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0cycpKVxuICAgIH1cblxuICAgIGNvbnN0IGxvYWREYXRhID0gKCk9PntcbiAgICAgICAgY29uc3QgbG9hZGVkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzJykpXG4gICAgICAgIGNvbnN0IHJldHVybkRhdGEgPSBbXTtcbiAgICAgICAgbG9hZGVkRGF0YS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb2FkUHJvamVjdFRpdGxlID0gZWxlLnRpdGxlO1xuICAgICAgICAgICAgY29uc3QgbG9hZFByb2plY3RzVGFza3MgPSBbXTtcbiAgICAgICAgICAgIGVsZS50YXNrcy5mb3JFYWNoKHRhc2s9PntcbiAgICAgICAgICAgICAgICBsb2FkUHJvamVjdHNUYXNrcy5wdXNoKG5ldyBUYXNrKHRhc2submFtZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5LCB0YXNrLm5vdGVzLCB0YXNrLnByb2plY3QpKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGxvYWRQcm9qZWN0Q29tcGxldGVkID0gZWxlLmNvbXBsZXRlZDtcbiAgICAgICAgICAgIHJldHVybkRhdGEucHVzaChuZXcgUHJvamVjdChsb2FkUHJvamVjdFRpdGxlLCBsb2FkUHJvamVjdHNUYXNrcywgbG9hZFByb2plY3RDb21wbGV0ZWQpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhckRhdGEgPSAoKT0+e1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUHJvamVjdHMnLCAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJue3NhdmVEYXRhLCBsb2FkRGF0YSwgY2xlYXJEYXRhfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YVN0b3JhZ2U7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBET01NYW5pcCBmcm9tICcuL0RPTU1hbmlwJztcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9FdmVudEhhbmRsZXInO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrLmpzJ1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgZGF0YVN0b3JhZ2UgZnJvbSAnLi9kYXRhU3RvcmFnZSc7XG5cbmNvbnN0IHByb2plY3RGdW5jdGlvbnMgPSAoKCk9PntcblxuICAgIGxldCBfYWxsUHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoZSk9PntcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEluZm8gPSBET01NYW5pcC5nZXROZXdQcm9qSW5mbygpO1xuICAgICAgICBjb25zdCBnb29kUHJvamVjdCA9IERPTU1hbmlwLmNoZWNrTmV3UHJvamVjdChlLG5ld1Byb2plY3RJbmZvKTtcbiAgICAgICAgaWYoZ29vZFByb2plY3Qpe1xuICAgICAgICAgICAgX2FsbFByb2plY3RzLnB1c2gobmV3IFByb2plY3QobmV3UHJvamVjdEluZm8udGl0bGUpKTtcbiAgICAgICAgICAgIERPTU1hbmlwLnVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICBkYXRhU3RvcmFnZS5zYXZlRGF0YSgpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYWRkVGFzayA9IChlKT0+e1xuICAgICAgICBjb25zdCBuZXdUYXNrSW5mbyA9IERPTU1hbmlwLmdldFRhc2tJbmZvKCk7XG4gICAgICAgIGNvbnN0IGdvb2RUYXNrID0gRE9NTWFuaXAuY2hlY2tOZXdUYXNrKGUsIG5ld1Rhc2tJbmZvKTtcbiAgICAgICAgaWYoZ29vZFRhc2spe1xuICAgICAgICAgICAgX2FsbFByb2plY3RzW25ld1Rhc2tJbmZvLnByb2plY3RdLnRhc2tzLnB1c2gobmV3IFRhc2sobmV3VGFza0luZm8ubmFtZSwgbmV3VGFza0luZm8uZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgICAgIG5ld1Rhc2tJbmZvLmRhdGUsIG5ld1Rhc2tJbmZvLnByaW9yaXR5LCAnJywgbmV3VGFza0luZm8ucHJvamVjdCkpO1xuICAgICAgICAgICAgRE9NTWFuaXAuYWRkVGFza1RvTGlzdCgpO1xuICAgICAgICAgICAgZGF0YVN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjb25maXJtUHJvamVjdEVkaXQgPSAoZSk9PntcbiAgICAgICAgY29uc3QgZWRpdFRpdGxlID0gRE9NTWFuaXAuZ2V0RWxlbWVudCgnLnRpdGxlLWVkaXQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IERPTU1hbmlwLmdldEVsZW1lbnQoJy50aXRsZS1lZGl0JykuZGF0YXNldC5wcm9qZWN0O1xuICAgICAgICBjb25zdCBnb29kUHJvamVjdCA9IERPTU1hbmlwLmNoZWNrTmV3UHJvamVjdChlLHt0aXRsZTplZGl0VGl0bGV9KTtcbiAgICAgICAgaWYoZ29vZFByb2plY3Qpe1xuICAgICAgICAgICAgX2FsbFByb2plY3RzW3Byb2plY3ROdW1iZXJdLnNldFRpdGxlKGVkaXRUaXRsZSk7XG4gICAgICAgICAgICBET01NYW5pcC51cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgZGF0YVN0b3JhZ2Uuc2F2ZURhdGEoKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNvbmZpcm1UYXNrRWRpdCA9IChlKT0+e1xuICAgICAgICBjb25zdCBlZGl0VGFzayA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGFzaztcbiAgICAgICAgY29uc3QgZWRpdFRhc2tJbmZvID0gRE9NTWFuaXAuZ2V0VGFza0luZm8oZWRpdFRhc2spO1xuICAgICAgICBjb25zdCBnb29kVGFzayA9IERPTU1hbmlwLmNoZWNrTmV3VGFzayhlLCBlZGl0VGFza0luZm8pO1xuICAgICAgICBpZihnb29kVGFzayl7XG4gICAgICAgICAgICBfYWxsUHJvamVjdHNbZWRpdFRhc2tJbmZvLnByb2plY3RdLnRhc2tzW2VkaXRUYXNrXT1uZXcgVGFzayhlZGl0VGFza0luZm8ubmFtZSwgZWRpdFRhc2tJbmZvLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICBlZGl0VGFza0luZm8uZGF0ZSwgZWRpdFRhc2tJbmZvLnByaW9yaXR5LCAnJywgZWRpdFRhc2tJbmZvLnByb2plY3QpO1xuICAgICAgICAgICAgRE9NTWFuaXAudXBkYXRlVGFza0xpc3QoZWRpdFRhc2spO1xuICAgICAgICAgICAgZGF0YVN0b3JhZ2Uuc2F2ZURhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEFsbFByb2plY3RzID0gKCk9PntcbiAgICAgICAgcmV0dXJuIF9hbGxQcm9qZWN0cy5tYXAoZWxlPT5lbGUpO1xuICAgIH1cbiAgICBjb25zdCBsb2FkUHJvamVjdHMgPSAoKT0+e1xuICAgICAgICBfYWxsUHJvamVjdHMgPSBkYXRhU3RvcmFnZS5sb2FkRGF0YSgpO1xuICAgIH1cblxuICAgIHJldHVybnthZGRQcm9qZWN0LCBhZGRUYXNrLCBjb25maXJtUHJvamVjdEVkaXQsIGNvbmZpcm1UYXNrRWRpdCwgZ2V0QWxsUHJvamVjdHMsIGxvYWRQcm9qZWN0c31cblxufSkoKTtcblxuY29uc3QgaW5pdFdlYnNpdGUgPSAoKCk9PntcbiAgICBzZXRUaW1lb3V0KERPTU1hbmlwLmZpeFN0YXJ0aW5nQW5pbWF0aW9ucywgMSk7XG4gICAgRXZlbnRIYW5kbGVyLmluaXRTdGFydGluZ0xpc3RlbmVycygpO1xuICAgIHByb2plY3RGdW5jdGlvbnMubG9hZFByb2plY3RzKCk7XG4gICAgRE9NTWFuaXAuZGlzcGxheVByb2plY3RzKCk7XG4gICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlUHJvamVjdHMoKTtcbn0pKCk7XG5cblxuXG5leHBvcnQge3Byb2plY3RGdW5jdGlvbnN9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=