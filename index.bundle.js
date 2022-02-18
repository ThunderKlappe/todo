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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #F6EABE;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header{\n    height: 72px;\n    background-color: #F6D7A7;\n    color: #2f6363;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content{\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n}\n#side-panel{\n    flex: 1;\n    background-color: #2f6363;\n    color: #F6D7A7;\n    min-height: 90.1vh;\n    padding-top: 20px;\n    border-top-right-radius: 30px;\n}\n.side-header-container{\n    display: flex;\n    flex-direction: column;\n}\n.side-header{\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label{\n    font-size: 18px;\n    margin: 4px 0px 4px 20px;\n    padding: 4px 0px 4px 10px;\n}\n.selected{\n    background-color: #265252;\n    border-radius: 30px 0 0 30px;\n}\n.dropdown-toggle{\n    margin-left: 8px;\n}\n.dropdown-toggle.anim{\n    transition: .25s;\n}\n.dropdown-toggle.closed{\n    transform: rotateZ(-90deg);\n}\n\n#main-display{\n    flex: 4;\n}\n\n.add-button{\n    border-radius: 100px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n    \n}\n\n.add-button:hover{\n    filter: brightness(70%);\n}\n.add-button:active{\n\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container{\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button{\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n    \n}\n#add-project-button.anim{\n    transition: .25s;\n}\n#add-project-button:hover, #add-project-button.active{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active{\n    filter: brightness(80%);\n}\n\n#add-project-button span{\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim{\n    transition: .05s;\n}\n#add-project-button:hover span, #add-project-button span.active{\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container{\n    padding: 8px 15px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button{\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput, select{\n    background-color: #87AAAA;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n}\nselect{\n    height: 31px;\n    font-size:18px\n}\n.project-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n}\n.project-title{\n    font-size: 36px;\n    font-weight: bold;\n    max-width: 40%;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    margin-bottom: 30px;\n}\n\n#add-task-button{\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info{\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper{\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container{\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n    \n}\n.task-info{\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n\n\n\n.error-message{\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority='Low']{\n    background-color: #E1ADAD;\n}\n[data-priority='Medium']{\n    background-color: #EFEF38;\n}\n[data-priority='High']{\n    background-color: #9DCD8D;\n}\n\n.task-button{\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: .25s;\n}\n\n.task-button:hover{\n    filter:brightness(70%);\n}\n\n.task-button span{\n    font-size: 0%;\n    opacity: 0;\n    transition: .25s;\n}\n.task-button:hover span{\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.task-container input, .task-container select{\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select{\n    height: 23px;\n    font-size:15px\n}\n\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n    \n::-webkit-scrollbar-track {\n    border: 3px solid #87AAAA;\n    border-radius: 10px;\n}\n    \n::-webkit-scrollbar-thumb {\n    background:#2f6363; \n    border-radius: 10px;\n    border: 2px solid #2f6363\n}\n    \n::-webkit-scrollbar-thumb:hover {\n    background:#265252; \n}\n@-moz-document url-prefix() {\n    body{\n        scrollbar-color: #2f6363 #265252 #87AAAA;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,WAAW;IACX,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,OAAO;IACP,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,eAAe;IACf,wBAAwB;IACxB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,4BAA4B;AAChC;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,0BAA0B;AAC9B;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,oBAAoB;IACpB,yBAAyB;IACzB,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,wBAAwB;;AAE5B;;AAEA;IACI,uBAAuB;AAC3B;AACA;;IAEI,mCAAmC;AACvC;;AAEA;IACI,eAAe;IACf,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,UAAU;AACd;AACA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,UAAU;;AAEd;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,UAAU;AACd;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,UAAU;AACd;AACA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,yBAAyB;IACzB,oBAAoB;IACpB,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,YAAY;IACZ;AACJ;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,gBAAgB;IAChB,mBAAmB;IACnB,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,WAAW;AACf;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,sBAAsB;;AAE1B;AACA;IACI,eAAe;IACf,mBAAmB;IACnB,gBAAgB;AACpB;;;;AAIA;IACI,eAAe;IACf,cAAc;IACd,cAAc;IACd,oBAAoB;IACpB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,wBAAwB;IACxB,yBAAyB;IACzB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,UAAU;IACV,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,YAAY;IACZ;AACJ;;;AAGA;IACI,YAAY;IACZ,YAAY;IACZ,WAAW;AACf;;;AAGA,eAAe;AACf;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB;AACJ;;AAEA;IACI,kBAAkB;AACtB;AACA;IACI;QACI,wCAAwC;IAC5C;AACJ","sourcesContent":["body{\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #F6EABE;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header{\n    height: 72px;\n    background-color: #F6D7A7;\n    color: #2f6363;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content{\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n}\n#side-panel{\n    flex: 1;\n    background-color: #2f6363;\n    color: #F6D7A7;\n    min-height: 90.1vh;\n    padding-top: 20px;\n    border-top-right-radius: 30px;\n}\n.side-header-container{\n    display: flex;\n    flex-direction: column;\n}\n.side-header{\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label{\n    font-size: 18px;\n    margin: 4px 0px 4px 20px;\n    padding: 4px 0px 4px 10px;\n}\n.selected{\n    background-color: #265252;\n    border-radius: 30px 0 0 30px;\n}\n.dropdown-toggle{\n    margin-left: 8px;\n}\n.dropdown-toggle.anim{\n    transition: .25s;\n}\n.dropdown-toggle.closed{\n    transform: rotateZ(-90deg);\n}\n\n#main-display{\n    flex: 4;\n}\n\n.add-button{\n    border-radius: 100px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n    \n}\n\n.add-button:hover{\n    filter: brightness(70%);\n}\n.add-button:active{\n\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container{\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button{\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n    \n}\n#add-project-button.anim{\n    transition: .25s;\n}\n#add-project-button:hover, #add-project-button.active{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active{\n    filter: brightness(80%);\n}\n\n#add-project-button span{\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim{\n    transition: .05s;\n}\n#add-project-button:hover span, #add-project-button span.active{\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container{\n    padding: 8px 15px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button{\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput, select{\n    background-color: #87AAAA;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n}\nselect{\n    height: 31px;\n    font-size:18px\n}\n.project-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n}\n.project-title{\n    font-size: 36px;\n    font-weight: bold;\n    max-width: 40%;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    margin-bottom: 30px;\n}\n\n#add-task-button{\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info{\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper{\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container{\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n    \n}\n.task-info{\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n\n\n\n.error-message{\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority='Low']{\n    background-color: #E1ADAD;\n}\n[data-priority='Medium']{\n    background-color: #EFEF38;\n}\n[data-priority='High']{\n    background-color: #9DCD8D;\n}\n\n.task-button{\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: .25s;\n}\n\n.task-button:hover{\n    filter:brightness(70%);\n}\n\n.task-button span{\n    font-size: 0%;\n    opacity: 0;\n    transition: .25s;\n}\n.task-button:hover span{\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.task-container input, .task-container select{\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select{\n    height: 23px;\n    font-size:15px\n}\n\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n    \n::-webkit-scrollbar-track {\n    border: 3px solid #87AAAA;\n    border-radius: 10px;\n}\n    \n::-webkit-scrollbar-thumb {\n    background:#2f6363; \n    border-radius: 10px;\n    border: 2px solid #2f6363\n}\n    \n::-webkit-scrollbar-thumb:hover {\n    background:#265252; \n}\n@-moz-document url-prefix() {\n    body{\n        scrollbar-color: #2f6363 #265252 #87AAAA;\n    }\n}\n\n"],"sourceRoot":""}]);
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

    const addProjectToList = ()=>{
        _removeElement("#new-proj-input-container");
        _toggleActive('#add-project-button');
        _toggleActive('#add-project-button-text');
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
        const newTaskEditButton = _makeNewElement('button', `project-${projectNumber}-task-${taskNumber}-edit-button`, 'task-button');
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

        const editCancelButton = _makeNewElement('button', `project-${projectNumber}-task-${taskNumber}-edit-cancel-button`, 'task-button');
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

        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateConfirmEdit(editButton);

    }

    const showProject = (e)=>{
        _markSelectedProject(e);
        const mainDisplay = getElement('#main-display');

        //this can get removed after Today's Tasks is working
        if(mainDisplay.childNodes.length >0){
            mainDisplay.firstChild.remove();
        }
        //*****

        const currentProject = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[e.target.dataset.index];

        const projectContainer = _makeNewElement('div', `project-${e.target.id.charAt(e.target.id.length-1)}-container`, 'project-container');
        const projectTitle = _makeNewElement('div', `project-${e.target.dataset.index}-title`, 'project-title', `${currentProject.getTitle()}`)
        const tasksContainer = _makeNewElement('div', `project-${e.target.dataset.index}-tasks-container`, 'tasks-container');
        const tasksWrapper = _makeNewElement('div', `project-${e.target.dataset.index}-tasks-wrapper`, 'tasks-wrapper')
        const spacer = _makeNewElement('div');
        projectContainer.appendChild(projectTitle);
        tasksContainer.appendChild(spacer);
        tasksWrapper.appendChild(tasksContainer)
        projectContainer.appendChild(tasksWrapper);
        mainDisplay.appendChild(projectContainer);
        currentProject.tasks.forEach((task, index) => _fillInTask(task, index))
        _displayTaskInput();
    }

    const cancelEdit = (e)=>{
        const task = e.currentTarget.parentElement.dataset.task;
        updateTaskList(task);
    }

    return {getElement, getElements, fixStartingAnimations,checkNewProject, setupNewProject, cancelNewProject,
         getNewProjInfo, addProjectToList, expandToggle, showProject, getTaskInfo, checkNewTask, 
         addTaskToList, displayEditTask, updateTaskList, cancelEdit, displayProjects}
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
    const activateAddTaskButton = ()=>{
        _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].getElement('#add-task-button').addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.addTask);
    }

    const activateEditButton = button=>{
        button.removeEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmEdit);
        button.addEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayEditTask);
    }

    const activateConfirmEdit = button=>{
        button.removeEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].displayEditTask);
        button.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.projectFunctions.confirmEdit);
        button.parentElement.lastElementChild.addEventListener('click', _DOMManip__WEBPACK_IMPORTED_MODULE_0__["default"].cancelEdit);

    }

    return{activateAddButton, initStartingListeners, addProjectSubmission, activateProjects, 
        activateAddTaskButton, activateEditButton, activateConfirmEdit};
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
        const goodTask = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].checkNewProject(e,newProjectInfo);
        if(goodTask){
            _allProjects.push(new _Project__WEBPACK_IMPORTED_MODULE_4__.Project(newProjectInfo.title));
            _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectToList();
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
    const confirmEdit = (e)=>{
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

    return{addProject, addTask, confirmEdit, getAllProjects, loadProjects}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NTWFuaXAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RhdGFTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RUFCRTtcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZEN0E3O1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIG1hcmdpbi10b3A6IDcycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG4jc2lkZS1wYW5lbHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNjM2MztcXG4gICAgY29sb3I6ICNGNkQ3QTc7XFxuICAgIG1pbi1oZWlnaHQ6IDkwLjF2aDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcbn1cXG4uc2lkZS1oZWFkZXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uc2lkZS1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucHJvamVjdC1zaWRlLWxhYmVse1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogNHB4IDBweCA0cHggMjBweDtcXG4gICAgcGFkZGluZzogNHB4IDBweCA0cHggMTBweDtcXG59XFxuLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1MjUyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMCAzMHB4O1xcbn1cXG4uZHJvcGRvd24tdG9nZ2xle1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG4uZHJvcGRvd24tdG9nZ2xlLmFuaW17XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcbi5kcm9wZG93bi10b2dnbGUuY2xvc2Vke1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTkwZGVnKTtcXG59XFxuXFxuI21haW4tZGlzcGxheXtcXG4gICAgZmxleDogNDtcXG59XFxuXFxuLmFkZC1idXR0b257XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhFM0Q0O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG4gICAgbWFyZ2luOiAwcHggOHB4IDFweDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcbiAgICBcXG59XFxuXFxuLmFkZC1idXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG4uYWRkLWJ1dHRvbjphY3RpdmV7XFxuXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IGJsYWNrO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICByaWdodDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi5hbmlte1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyLCAjYWRkLXByb2plY3QtYnV0dG9uLmFjdGl2ZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi5hY3RpdmV7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24gc3Bhbi5hbmlte1xcbiAgICB0cmFuc2l0aW9uOiAuMDVzO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHNwYW4sICNhZGQtcHJvamVjdC1idXR0b24gc3Bhbi5hY3RpdmV7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuLmlucHV0LWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEUzRDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZjYzNjM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IGJsYWNrO1xcbn1cXG4jbmV3LXByb2otYWRkLWJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG59XFxuXFxuaW5wdXQsIHNlbGVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3QUFBQTtcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIHBhZGRpbmc6IDRweCA2cHggNHB4IDhweDtcXG59XFxuc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDMxcHg7XFxuICAgIGZvbnQtc2l6ZToxOHB4XFxufVxcbi5wcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLnByb2plY3QtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1heC13aWR0aDogNDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcXG59XFxuXFxuLmFkZC10YXNrLWluZm97XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4udGFza3Mtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbn1cXG4udGFzay1jb250YWluZXJ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIFxcbn1cXG4udGFzay1pbmZve1xcbiAgICBtYXgtd2lkdGg6IDMwdnc7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcblxcblxcbi5lcnJvci1tZXNzYWdle1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGNvbG9yOiAjOTkzYzNjO1xcbiAgICB0cmFuc2l0aW9uOiAycztcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1hcmdpbjogNnB4O1xcbn1cXG5cXG5bZGF0YS1wcmlvcml0eT0nTG93J117XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUFEQUQ7XFxufVxcbltkYXRhLXByaW9yaXR5PSdNZWRpdW0nXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUYzODtcXG59XFxuW2RhdGEtcHJpb3JpdHk9J0hpZ2gnXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQ0Q4RDtcXG59XFxuXFxuLnRhc2stYnV0dG9ue1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG5cXG4udGFzay1idXR0b246aG92ZXJ7XFxuICAgIGZpbHRlcjpicmlnaHRuZXNzKDcwJSk7XFxufVxcblxcbi50YXNrLWJ1dHRvbiBzcGFue1xcbiAgICBmb250LXNpemU6IDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG4udGFzay1idXR0b246aG92ZXIgc3BhbntcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXQsIC50YXNrLWNvbnRhaW5lciBzZWxlY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBwYWRkaW5nOiAycHggNHB4IDJweCA0cHg7XFxufVxcbi50YXNrLWNvbnRhaW5lciBzZWxlY3R7XFxuICAgIGhlaWdodDogMjNweDtcXG4gICAgZm9udC1zaXplOjE1cHhcXG59XFxuXFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiIGldIHtcXG4gICAgZmxleC1ncm93OiAwO1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG5cXG4vKiBTY3JvbGwgQmFyICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxufVxcbiAgICBcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzg3QUFBQTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiMyZjYzNjM7IFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMmY2MzYzXFxufVxcbiAgICBcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDojMjY1MjUyOyBcXG59XFxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcXG4gICAgYm9keXtcXG4gICAgICAgIHNjcm9sbGJhci1jb2xvcjogIzJmNjM2MyAjMjY1MjUyICM4N0FBQUE7XFxuICAgIH1cXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDREQUE0RDtJQUM1RCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ks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QUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBR0EsZUFBZTtBQUNmO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtRQUNJLHdDQUF3QztJQUM1QztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkVBQkU7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RDdBNztcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBtYXJnaW4tdG9wOiA3MnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuI3NpZGUtcGFuZWx7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjRjZEN0E3O1xcbiAgICBtaW4taGVpZ2h0OiA5MC4xdmg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcXG59XFxuLnNpZGUtaGVhZGVyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnNpZGUtaGVhZGVye1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnByb2plY3Qtc2lkZS1sYWJlbHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IDRweCAwcHggNHB4IDIwcHg7XFxuICAgIHBhZGRpbmc6IDRweCAwcHggNHB4IDEwcHg7XFxufVxcbi5zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NTI1MjtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAwIDAgMzBweDtcXG59XFxuLmRyb3Bkb3duLXRvZ2dsZXtcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuLmRyb3Bkb3duLXRvZ2dsZS5hbmlte1xcbiAgICB0cmFuc2l0aW9uOiAuMjVzO1xcbn1cXG4uZHJvcGRvd24tdG9nZ2xlLmNsb3NlZHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC05MGRlZyk7XFxufVxcblxcbiNtYWluLWRpc3BsYXl7XFxuICAgIGZsZXg6IDQ7XFxufVxcblxcbi5hZGQtYnV0dG9ue1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTNENDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJmNjM2MztcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIG1hcmdpbjogMHB4IDhweCAxcHg7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcXG4gICAgXFxufVxcblxcbi5hZGQtYnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTtcXG59XFxuLmFkZC1idXR0b246YWN0aXZle1xcblxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCBibGFjaztcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgcmlnaHQ6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbntcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgXFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24uYW5pbXtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciwgI2FkZC1wcm9qZWN0LWJ1dHRvbi5hY3RpdmV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b24uYWN0aXZle1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFue1xcbiAgICBmb250LXNpemU6IDAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uIHNwYW4uYW5pbXtcXG4gICAgdHJhbnNpdGlvbjogLjA1cztcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciBzcGFuLCAjYWRkLXByb2plY3QtYnV0dG9uIHNwYW4uYWN0aXZle1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbi5pbnB1dC1jb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhFM0Q0O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCBibGFjaztcXG59XFxuI25ldy1wcm9qLWFkZC1idXR0b257XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctdG9wOiA0cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbmlucHV0LCBzZWxlY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4N0FBQUE7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbiAgICBwYWRkaW5nOiA0cHggNnB4IDRweCA4cHg7XFxufVxcbnNlbGVjdHtcXG4gICAgaGVpZ2h0OiAzMXB4O1xcbiAgICBmb250LXNpemU6MThweFxcbn1cXG4ucHJvamVjdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5wcm9qZWN0LXRpdGxle1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXgtd2lkdGg6IDQwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbiNhZGQtdGFzay1idXR0b257XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDEycHg7XFxufVxcblxcbi5hZGQtdGFzay1pbmZve1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLnRhc2tzLXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG59XFxuLnRhc2stY29udGFpbmVye1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBcXG59XFxuLnRhc2staW5mb3tcXG4gICAgbWF4LXdpZHRoOiAzMHZ3O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5cXG5cXG4uZXJyb3ItbWVzc2FnZXtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogIzk5M2MzYztcXG4gICAgdHJhbnNpdGlvbjogMnM7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtYXJnaW46IDZweDtcXG59XFxuXFxuW2RhdGEtcHJpb3JpdHk9J0xvdydde1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFBREFEO1xcbn1cXG5bZGF0YS1wcmlvcml0eT0nTWVkaXVtJ117XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkVGMzg7XFxufVxcbltkYXRhLXByaW9yaXR5PSdIaWdoJ117XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5RENEOEQ7XFxufVxcblxcbi50YXNrLWJ1dHRvbntcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmY2MzYzO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuXFxuLnRhc2stYnV0dG9uOmhvdmVye1xcbiAgICBmaWx0ZXI6YnJpZ2h0bmVzcyg3MCUpO1xcbn1cXG5cXG4udGFzay1idXR0b24gc3BhbntcXG4gICAgZm9udC1zaXplOiAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuLnRhc2stYnV0dG9uOmhvdmVyIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcGFkZGluZzogMHB4IDVweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0LCAudGFzay1jb250YWluZXIgc2VsZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xcbn1cXG4udGFzay1jb250YWluZXIgc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxuICAgIGZvbnQtc2l6ZToxNXB4XFxufVxcblxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIiBpXSB7XFxuICAgIGZsZXgtZ3JvdzogMDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG59XFxuXFxuXFxuLyogU2Nyb2xsIEJhciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xcbn1cXG4gICAgXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM4N0FBQUE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiAgICBcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDojMmY2MzYzOyBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzJmNjM2M1xcbn1cXG4gICAgXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IzI2NTI1MjsgXFxufVxcbkAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XFxuICAgIGJvZHl7XFxuICAgICAgICBzY3JvbGxiYXItY29sb3I6ICMyZjYzNjMgIzI2NTI1MiAjODdBQUFBO1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdEZ1bmN0aW9ucyB9IGZyb20gXCIuXCI7XG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gXCIuL0V2ZW50SGFuZGxlclwiO1xuXG5jb25zdCBET01NYW5pcCA9ICgoKT0+e1xuICAgIGNvbnN0IGdldEVsZW1lbnQgPSAoc2VsZWN0b3IpPT5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICAgIGNvbnN0IGdldEVsZW1lbnRzID0gKHNlbGVjdG9yKT0+ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcblxuICAgIGNvbnN0IGZpeFN0YXJ0aW5nQW5pbWF0aW9ucyA9ICgpPT57XG4gICAgICAgIGNvbnN0IGFuaW1hdGFibGUgPSBnZXRFbGVtZW50cyhcIi5maXgtYW5pbVwiKVxuICAgICAgICBhbmltYXRhYmxlLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKCdhbmltJyk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZSgnZml4LWFuaW0nKX0pXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IF9tYWtlTmV3RWxlbWVudCA9ICh0eXBlLCBpZD0nJywgSFRNTENsYXNzID0gJycsIHRleHQgPSAnJywgLi4uYXR0cmlidXRlcykgPT57XG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBpZihpZCAhPSAnJyl7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZihIVE1MQ2xhc3MgIT0gJycpe1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgSFRNTENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgaWYoYXR0cmlidXRlcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHQgPT4gbmV3RWxlbS5zZXRBdHRyaWJ1dGUoT2JqZWN0LmtleXMoYXR0KVswXSwgYXR0W09iamVjdC5rZXlzKGF0dCldKSlcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gbmV3RWxlbTtcbiAgICB9XG4gICAgY29uc3QgX3JlbW92ZUVsZW1lbnQgPSAoZWxlbWVudElEKSA9PntcbiAgICAgICAgZ2V0RWxlbWVudChlbGVtZW50SUQpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBjb25zdCBfZGlzcGxheUVycm9ycyA9IChlLCBpbnB1dCwgdHlwZSk9PntcbiAgICAgICAgaW5wdXQuZm9yRWFjaChlbGU9PntcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gX21ha2VOZXdFbGVtZW50KCdkaXYnLCcnLCdlcnJvci1tZXNzYWdlJywgZWxlKVxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShlcnJvciwgcGFyZW50KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PmVycm9yLnN0eWxlLm9wYWNpdHkgPSAwLCAyMDAwKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PmVycm9yLnJlbW92ZSgpLCA0MDAwKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgX3RvZ2dsZUFjdGl2ZSA9IChlbGVtZW50SUQpID0+e1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50SUQpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKT8gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSA6IGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dXBOZXdQcm9qZWN0ID0gKCk9PntcbiAgICAgICAgX3RvZ2dsZUFjdGl2ZSgnI2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICBfdG9nZ2xlQWN0aXZlKCcjYWRkLXByb2plY3QtYnV0dG9uLXRleHQnKTtcbiAgICAgICAgY29uc3QgbmV3UHJvaklucHV0Q29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KCdkaXYnLCAnbmV3LXByb2otaW5wdXQtY29udGFpbmVyJywgJ2lucHV0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBuZXdQcm9qSW5wdXQgPSBfbWFrZU5ld0VsZW1lbnQoJ2lucHV0JywgJ25ldy1wcm9qLWlucHV0JywgJycsJycse3R5cGU6J3RleHQnfSwge3ZhbHVlOidQcm9qZWN0IFRpdGxlJ30gKTtcbiAgICAgICAgY29uc3QgbmV3UHJvakFkZEJ1dHRvbiA9IF9tYWtlTmV3RWxlbWVudCgnYnV0dG9uJywgJ25ldy1wcm9qLWFkZC1idXR0b24nLCAnYWRkLWJ1dHRvbicsICdTdWJtaXQnKTtcblxuICAgICAgICBuZXdQcm9qSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvaklucHV0KTtcbiAgICAgICAgbmV3UHJvaklucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2pBZGRCdXR0b24pO1xuXG4gICAgICAgIGdldEVsZW1lbnQoJyNhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVyJykuYXBwZW5kQ2hpbGQobmV3UHJvaklucHV0Q29udGFpbmVyKTtcblxuICAgICAgICBFdmVudEhhbmRsZXIuYWRkUHJvamVjdFN1Ym1pc3Npb24oKTtcbiAgICB9XG4gICAgY29uc3QgY2FuY2VsTmV3UHJvamVjdCA9ICgpPT57XG4gICAgICAgIF90b2dnbGVBY3RpdmUoJyNhZGQtcHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgX3RvZ2dsZUFjdGl2ZSgnI2FkZC1wcm9qZWN0LWJ1dHRvbi10ZXh0Jyk7XG4gICAgICAgIF9yZW1vdmVFbGVtZW50KFwiI25ldy1wcm9qLWlucHV0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQWRkQnV0dG9uKCk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXROZXdQcm9qSW5mbyA9ICgpPT57XG4gICAgICAgIHJldHVybiB7dGl0bGU6RE9NTWFuaXAuZ2V0RWxlbWVudCgnI25ldy1wcm9qLWlucHV0JykudmFsdWV9O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjaGVja05ld1Byb2plY3QgPSAoZSwgcHJvamVjdCk9PntcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZXMgPSBbXTtcbiAgICAgICAgaWYocHJvamVjdC50aXRsZSA9PSAnJyl7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goJ1BsZWFzZSBlbnRlciBhIHRpdGxlIGZvciB0aGUgcHJvamVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBfZGlzcGxheUVycm9ycyhlLCBlcnJvck1lc3NhZ2VzLCAncHJvamVjdCcpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IF9yZW1vdmVTdWJFbnRyaWVzID0gKGVsZW1lbnQpPT57XG4gICAgICAgIGZvcihsZXQgaSA9IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPiAyOyBpLS0pe1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzW2ktMV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgX3JldmVhbEFycmF5ID0gKHBhcmVudCwgYXJyYXksIHR5cGUpPT57XG4gICAgICAgIF9yZW1vdmVTdWJFbnRyaWVzKHBhcmVudCk7XG4gICAgICAgIGFycmF5LmZvckVhY2goKHByb2osIGluZGV4KT0+IHBhcmVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgIF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYCR7dHlwZX0tJHtpbmRleH1gLCBgJHt0eXBlfS1zaWRlLWxhYmVsICR7KHR5cGU9PSdwcm9qZWN0JyAmJiBwcm9qLmlzU2VsZWN0ZWQoKSk/J3NlbGVjdGVkJyA6ICcnfWAsIHByb2ouZ2V0VGl0bGUoKSwgeydkYXRhLWluZGV4JzogYCR7aW5kZXh9YH0sICkpKVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpPT57XG4gICAgICAgIF9yZXZlYWxBcnJheShnZXRFbGVtZW50KCcjcHJvamVjdHMtc2lkZScpLnBhcmVudEVsZW1lbnQsIHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKSwgJ3Byb2plY3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0VG9MaXN0ID0gKCk9PntcbiAgICAgICAgX3JlbW92ZUVsZW1lbnQoXCIjbmV3LXByb2otaW5wdXQtY29udGFpbmVyXCIpO1xuICAgICAgICBfdG9nZ2xlQWN0aXZlKCcjYWRkLXByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIF90b2dnbGVBY3RpdmUoJyNhZGQtcHJvamVjdC1idXR0b24tdGV4dCcpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQWRkQnV0dG9uKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVByb2plY3RzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwYW5kVG9nZ2xlID0gKGUpPT57XG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBsZXQgdHlwZSA9ICcnO1xuICAgICAgICBpZihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkID09ICdwcm9qZWN0cy1zaWRlJylcbiAgICAgICAge1xuICAgICAgICAgICAgYXJyYXkgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCk7XG4gICAgICAgICAgICB0eXBlID0gJ3Byb2plY3QnO1xuICAgICAgICB9XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2VkJykpe1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2VkJylcbiAgICAgICAgICAgIF9yZXZlYWxBcnJheShlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsIGFycmF5LCB0eXBlKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgICAgIF9yZW1vdmVTdWJFbnRyaWVzKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudClcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgX21hcmtTZWxlY3RlZFByb2plY3QgPSAoZSk9PntcbiAgICAgICAgZ2V0RWxlbWVudHMoXCIucHJvamVjdC1zaWRlLWxhYmVsXCIpLmZvckVhY2goZWxlPT5lbGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKHByb2ogPT4gcHJvai5tYXJrU2VsZWN0ZWQoZmFsc2UpKTtcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpW2UudGFyZ2V0LmRhdGFzZXQuaW5kZXhdLm1hcmtTZWxlY3RlZCh0cnVlKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBfZGlzcGxheVRhc2tJbnB1dCA9ICgpPT57XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBnZXRFbGVtZW50KCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgJ2FkZC10YXNrLWNvbnRhaW5lcicsICdpbnB1dC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWRkVGFza05hbWUgPSBfbWFrZU5ld0VsZW1lbnQoJ2lucHV0JywgJ2FkZC10YXNrLW5hbWUtaW5wdXQnLCAnYWRkLXRhc2staW5mbycsJycse3R5cGU6J3RleHQnfSwge3ZhbHVlOidUYXNrIE5hbWUnfSk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tEZXNjcmlwdGlvbiA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCAnYWRkLXRhc2stZGVzY3JpcHRpb24taW5wdXQnLCAnYWRkLXRhc2staW5mbycsJycse3R5cGU6J3RleHQnfSwge3ZhbHVlOidUYXNrIERlc2NyaXB0aW9uJ30pO1xuICAgICAgICBjb25zdCBhZGRUYXNrRGF0ZSA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCAnYWRkLXRhc2stZGF0ZS1pbnB1dCcsICdhZGQtdGFzay1pbmZvJywnRHVlIERhdGUnLHt0eXBlOidkYXRlJ30pO1xuICAgICAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHkgPSBfbWFrZU5ld0VsZW1lbnQoJ3NlbGVjdCcsICdhZGQtdGFzay1wcmlvcml0eS1pbnB1dCcsICdhZGQtdGFzay1pbmZvJywnJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eURlZmF1bHQgPSBfbWFrZU5ld0VsZW1lbnQoJ29wdGlvbicsJycsJycsJ1ByaW9yaXR5Jywge3ZhbHVlOjB9ICk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eUxvdyA9IF9tYWtlTmV3RWxlbWVudCgnb3B0aW9uJywnJywnJywnTG93Jywge3ZhbHVlOidMb3cnfSx7c3R5bGU6J2JhY2tncm91bmQtY29sb3I6I0UxQURBRCd9KTtcbiAgICAgICAgY29uc3QgYWRkVGFza1ByaW9yaXR5TWVkaXVtID0gX21ha2VOZXdFbGVtZW50KCdvcHRpb24nLCcnLCcnLCdNZWRpdW0nLCB7dmFsdWU6XCJNZWRpdW1cIn0sIHtzdHlsZTonYmFja2dyb3VuZC1jb2xvcjojRUZFRjM4J30pO1xuICAgICAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHlIaWdoID0gX21ha2VOZXdFbGVtZW50KCdvcHRpb24nLCcnLCcnLCdIaWdoJywge3ZhbHVlOlwiSGlnaFwifSwge3N0eWxlOidiYWNrZ3JvdW5kLWNvbG9yOiM5RENEOEQnfSk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoJ2J1dHRvbicsICdhZGQtdGFzay1idXR0b24nLCAnYWRkLWJ1dHRvbicsICdBZGQgTmV3IFRhc2snKTtcblxuICAgICAgICBhZGRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5RGVmYXVsdCk7XG4gICAgICAgIGFkZFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHlMb3cpO1xuICAgICAgICBhZGRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5TWVkaXVtKTtcbiAgICAgICAgYWRkVGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eUhpZ2gpO1xuXG4gICAgICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza05hbWUpO1xuICAgICAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0RhdGUpO1xuICAgICAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eSk7XG4gICAgICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUFkZFRhc2tCdXR0b24oKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgX2dldFByb2plY3ROdW1iZXIgPSAoKT0+e1xuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudCgnLnNlbGVjdGVkJykuZGF0YXNldC5pbmRleDtcblxuICAgIH1cblxuICAgIGNvbnN0IGdldFRhc2tJbmZvID0gKGluZGV4KT0+e1xuICAgICAgICBsZXQgZm9ybUluZm87XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBfZ2V0UHJvamVjdE51bWJlcigpO1xuICAgICAgICBpZihpbmRleCA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZm9ybUluZm8gPSBnZXRFbGVtZW50cygnLmFkZC10YXNrLWluZm8nKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBmb3JtSW5mbyA9IGdldEVsZW1lbnRzKGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHtpbmRleH0tY29udGFpbmVyIC5lZGl0LXRhc2staW5mb2ApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtuYW1lOmZvcm1JbmZvWzBdLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtSW5mb1sxXS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXRlOiBmb3JtSW5mb1syXS52YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogZm9ybUluZm9bM10udmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvamVjdDogcHJvamVjdE51bWJlcn1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tOZXdUYXNrID0gKGUsIHRhc2spPT57XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2VzID0gW107XG4gICAgICAgIGlmKHRhc2submFtZSA9PSAnJyl7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goJ1BsZWFzZSBlbnRlciBhIG5hbWUgZm9yIHRoZSB0YXNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGFzay5kZXNjcmlwdGlvbiA9PSAnJyl7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goJ1BsZWFzZSBlbnRlciBhIGRlc2NyaXB0aW9uIGZvciB0aGUgdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRhc2suZGF0ZSA9PSAnJyl7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goJ1BsZWFzZSBlbnRlciBhIGR1ZSBkYXRlIGZvciB0aGUgdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRhc2sucHJpb3JpdHkgPT0gMCl7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goJ1BsZWFzZSBlbnRlciBhIHByaW9yaXR5IGxldmVsIGZvciB0aGUgdGFzaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIF9kaXNwbGF5RXJyb3JzKGUsIGVycm9yTWVzc2FnZXMsICd0YXNrJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IF9pbnNlcnRBZnRlciA9IChuZXdOb2RlLCBleGlzdGluZ05vZGUpPT4ge1xuICAgICAgICBleGlzdGluZ05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgZXhpc3RpbmdOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBfZmlsbEluVGFzayA9ICh0YXNrLCB0YXNrTnVtYmVyKT0+e1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gX2dldFByb2plY3ROdW1iZXIoKTtcbiAgICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBnZXRFbGVtZW50KCcudGFza3MtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tY29udGFpbmVyYCwgJ3Rhc2stY29udGFpbmVyJywgJycsIHsnZGF0YS1wcmlvcml0eSc6dGFzay5nZXRQcmlvcml0eSgpfSx7XCJkYXRhLXRhc2tcIjp0YXNrTnVtYmVyfSk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tDaGVja2JveCA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jaGVja2JveGAsICd0YXNrLWNoZWNrYm94JywgJycsIHt0eXBlOidjaGVja2JveCd9LCB7J2RhdGEtcHJvamVjdCc6cHJvamVjdE51bWJlcn0sIHsnZGF0YS10YXNrJzp0YXNrTnVtYmVyfSk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gX21ha2VOZXdFbGVtZW50KCdkaXYnLCBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1uYW1lYCwgJ3Rhc2stbmFtZSB0YXNrLWluZm8nLCB0YXNrLmdldE5hbWUoKSk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZGVzY3JpcHRpb25gLCAndGFzay1kZXNjcmlwdGlvbiB0YXNrLWluZm8nLCB0YXNrLmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZGF0ZWAsICd0YXNrLWRhdGUgdGFzay1pbmZvJywgdGFzay5nZXREYXRlKCkpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRWRpdEJ1dHRvbiA9IF9tYWtlTmV3RWxlbWVudCgnYnV0dG9uJywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZWRpdC1idXR0b25gLCAndGFzay1idXR0b24nKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0VkaXRJY29uID0gX21ha2VOZXdFbGVtZW50KCdpJywgJycsICdmYS1zb2xpZCBmYS1wZW5jaWwgZWRpdC1pY29uJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tFZGl0VGV4dCA9X21ha2VOZXdFbGVtZW50KCdzcGFuJywgJycsICdlZGl0LXRleHQnLCAnRWRpdCBUYXNrJylcblxuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tDaGVja2JveCk7XG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza05hbWUpO1xuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0RhdGUpO1xuICAgICAgICBuZXdUYXNrRWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChuZXdUYXNrRWRpdEljb24pO1xuICAgICAgICBuZXdUYXNrRWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChuZXdUYXNrRWRpdFRleHQpO1xuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tFZGl0QnV0dG9uKTtcbiAgICAgICAgX2luc2VydEFmdGVyKG5ld1Rhc2tDb250YWluZXIsICh0YXNrTnVtYmVyID09IDApP3Rhc2tzQ29udGFpbmVyLmNoaWxkTm9kZXNbdGFza051bWJlcl06dGFza3NDb250YWluZXIuY2hpbGROb2Rlc1t0YXNrTnVtYmVyLTFdKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlRWRpdEJ1dHRvbihuZXdUYXNrRWRpdEJ1dHRvbik7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVGFza0xpc3QgPSAodGFza051bWJlcik9PntcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IF9nZXRQcm9qZWN0TnVtYmVyKCk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQ29udGFpbmVyID0gZ2V0RWxlbWVudChgI3Byb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tY29udGFpbmVyYClcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2sgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl0udGFza3NbdGFza051bWJlcl07XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLnJlbW92ZSgpXG4gICAgICAgIF9maWxsSW5UYXNrKHVwZGF0ZWRUYXNrLCB0YXNrTnVtYmVyKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tUb0xpc3QgPSAoKT0+e1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gX2dldFByb2plY3ROdW1iZXIoKTtcbiAgICAgICAgY29uc3QgdGFza051bWJlciA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXS50YXNrcy5sZW5ndGgtMTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVtwcm9qZWN0TnVtYmVyXS50YXNrc1t0YXNrTnVtYmVyXTtcblxuICAgICAgICBnZXRFbGVtZW50KCcjYWRkLXRhc2stY29udGFpbmVyJykucmVtb3ZlKCk7XG4gICAgICAgIF9maWxsSW5UYXNrKG5ld1Rhc2ssIHRhc2tOdW1iZXIpO1xuICAgICAgICBfZGlzcGxheVRhc2tJbnB1dCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlFZGl0VGFzayA9IGU9PntcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IF9nZXRQcm9qZWN0TnVtYmVyKClcbiAgICAgICAgY29uc3QgdGFza051bWJlciA9IGVkaXRCdXR0b24ucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2s7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpW3Byb2plY3ROdW1iZXJdLnRhc2tzW3Rhc2tOdW1iZXJdO1xuXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrTmFtZSA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCAnZWRpdC10YXNrLW5hbWUtaW5wdXQnLCAnZWRpdC10YXNrLWluZm8nLCcnLHt0eXBlOid0ZXh0J30sIHt2YWx1ZTplZGl0VGFzay5nZXROYW1lKCl9KTtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbiA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCAnZWRpdC10YXNrLWRlc2NyaXB0aW9uLWlucHV0JywgJ2VkaXQtdGFzay1pbmZvJywnJyx7dHlwZTondGV4dCd9LCB7dmFsdWU6ZWRpdFRhc2suZ2V0RGVzY3JpcHRpb24oKX0pO1xuICAgICAgICBjb25zdCBlZGl0VGFza0RhdGUgPSBfbWFrZU5ld0VsZW1lbnQoJ2lucHV0JywgJ2VkaXQtdGFzay1kYXRlLWlucHV0JywgJ2VkaXQtdGFzay1pbmZvJywnRHVlIERhdGUnLHt0eXBlOidkYXRlJ30sIHt2YWx1ZTplZGl0VGFzay5nZXREYXRlKCl9KTtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tQcmlvcml0eSA9IF9tYWtlTmV3RWxlbWVudCgnc2VsZWN0JywgJ2VkaXQtdGFzay1wcmlvcml0eS1pbnB1dCcsICdlZGl0LXRhc2staW5mbycsJycpO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5TG93ID0gX21ha2VOZXdFbGVtZW50KCdvcHRpb24nLCcnLCcnLCdMb3cnLCB7dmFsdWU6J0xvdyd9LHtzdHlsZTonYmFja2dyb3VuZC1jb2xvcjojRTFBREFEJ30pO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5TWVkaXVtID0gX21ha2VOZXdFbGVtZW50KCdvcHRpb24nLCcnLCcnLCdNZWRpdW0nLCB7dmFsdWU6XCJNZWRpdW1cIn0sIHtzdHlsZTonYmFja2dyb3VuZC1jb2xvcjojRUZFRjM4J30pO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5SGlnaCA9IF9tYWtlTmV3RWxlbWVudCgnb3B0aW9uJywnJywnJywnSGlnaCcsIHt2YWx1ZTpcIkhpZ2hcIn0sIHtzdHlsZTonYmFja2dyb3VuZC1jb2xvcjojOURDRDhEJ30pO1xuICAgICAgICBcbiAgICAgICAgaWYoZWRpdFRhc2suZ2V0UHJpb3JpdHkoKSA9PSAnTG93Jyl7XG4gICAgICAgICAgICBlZGl0VGFza1ByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKVxuICAgICAgICB9ZWxzZSBpZihlZGl0VGFzay5nZXRQcmlvcml0eSgpID09ICdNZWRpdW0nKXtcbiAgICAgICAgICAgIGVkaXRUYXNrUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpXG4gICAgICAgIH1lbHNlIGlmKGVkaXRUYXNrLmdldFByaW9yaXR5KCkgPT0gJ0hpZ2gnKXtcbiAgICAgICAgICAgIGVkaXRUYXNrUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIGdldEVsZW1lbnRzKGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jb250YWluZXIgLnRhc2staW5mb2ApLmZvckVhY2goZWxlPT5lbGUucmVtb3ZlKCkpXG5cbiAgICAgICAgZWRpdFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChlZGl0VGFza1ByaW9yaXR5TG93KTtcbiAgICAgICAgZWRpdFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChlZGl0VGFza1ByaW9yaXR5TWVkaXVtKTtcbiAgICAgICAgZWRpdFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChlZGl0VGFza1ByaW9yaXR5SGlnaCk7XG5cbiAgICAgICAgY29uc3QgZWRpdENhbmNlbEJ1dHRvbiA9IF9tYWtlTmV3RWxlbWVudCgnYnV0dG9uJywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZWRpdC1jYW5jZWwtYnV0dG9uYCwgJ3Rhc2stYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGVkaXRDYW5jZWxJY29uID0gX21ha2VOZXdFbGVtZW50KCdpJywgJycsICdmYS1zb2xpZCBmYS14bWFyayBlZGl0LWNhbmNlbC1pY29uJyk7XG4gICAgICAgIGNvbnN0IGVkaXRDYW5jZWxUZXh0ID1fbWFrZU5ld0VsZW1lbnQoJ3NwYW4nLCAnJywgJ2VkaXQtY2FuY2VsLXRleHQnLCAnQ2FuY2VsJylcblxuICAgICAgICBlZGl0Q2FuY2VsQnV0dG9uLmFwcGVuZENoaWxkKGVkaXRDYW5jZWxJY29uKTtcbiAgICAgICAgZWRpdENhbmNlbEJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0Q2FuY2VsVGV4dCk7XG5cbiAgICAgICAgY29uc3QgZWRpdFRhc2tDb250YWluZXIgPSBnZXRFbGVtZW50KGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jb250YWluZXJgKVxuICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tOYW1lLCBlZGl0VGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgZWRpdFRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrRGVzY3JpcHRpb24sIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tEYXRlLCBlZGl0VGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgZWRpdFRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrUHJpb3JpdHksIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0Q2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBlZGl0QnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXBlbmNpbCcpO1xuICAgICAgICBlZGl0QnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZWNrJyk7XG4gICAgICAgIGVkaXRCdXR0b24ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuXG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUNvbmZpcm1FZGl0KGVkaXRCdXR0b24pO1xuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1Byb2plY3QgPSAoZSk9PntcbiAgICAgICAgX21hcmtTZWxlY3RlZFByb2plY3QoZSk7XG4gICAgICAgIGNvbnN0IG1haW5EaXNwbGF5ID0gZ2V0RWxlbWVudCgnI21haW4tZGlzcGxheScpO1xuXG4gICAgICAgIC8vdGhpcyBjYW4gZ2V0IHJlbW92ZWQgYWZ0ZXIgVG9kYXkncyBUYXNrcyBpcyB3b3JraW5nXG4gICAgICAgIGlmKG1haW5EaXNwbGF5LmNoaWxkTm9kZXMubGVuZ3RoID4wKXtcbiAgICAgICAgICAgIG1haW5EaXNwbGF5LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8qKioqKlxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpW2UudGFyZ2V0LmRhdGFzZXQuaW5kZXhdO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBfbWFrZU5ld0VsZW1lbnQoJ2RpdicsIGBwcm9qZWN0LSR7ZS50YXJnZXQuaWQuY2hhckF0KGUudGFyZ2V0LmlkLmxlbmd0aC0xKX0tY29udGFpbmVyYCwgJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtlLnRhcmdldC5kYXRhc2V0LmluZGV4fS10aXRsZWAsICdwcm9qZWN0LXRpdGxlJywgYCR7Y3VycmVudFByb2plY3QuZ2V0VGl0bGUoKX1gKVxuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtlLnRhcmdldC5kYXRhc2V0LmluZGV4fS10YXNrcy1jb250YWluZXJgLCAndGFza3MtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tzV3JhcHBlciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtlLnRhcmdldC5kYXRhc2V0LmluZGV4fS10YXNrcy13cmFwcGVyYCwgJ3Rhc2tzLXdyYXBwZXInKVxuICAgICAgICBjb25zdCBzcGFjZXIgPSBfbWFrZU5ld0VsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYWNlcik7XG4gICAgICAgIHRhc2tzV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcilcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc1dyYXBwZXIpO1xuICAgICAgICBtYWluRGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgY3VycmVudFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IF9maWxsSW5UYXNrKHRhc2ssIGluZGV4KSlcbiAgICAgICAgX2Rpc3BsYXlUYXNrSW5wdXQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW5jZWxFZGl0ID0gKGUpPT57XG4gICAgICAgIGNvbnN0IHRhc2sgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2s7XG4gICAgICAgIHVwZGF0ZVRhc2tMaXN0KHRhc2spO1xuICAgIH1cblxuICAgIHJldHVybiB7Z2V0RWxlbWVudCwgZ2V0RWxlbWVudHMsIGZpeFN0YXJ0aW5nQW5pbWF0aW9ucyxjaGVja05ld1Byb2plY3QsIHNldHVwTmV3UHJvamVjdCwgY2FuY2VsTmV3UHJvamVjdCxcbiAgICAgICAgIGdldE5ld1Byb2pJbmZvLCBhZGRQcm9qZWN0VG9MaXN0LCBleHBhbmRUb2dnbGUsIHNob3dQcm9qZWN0LCBnZXRUYXNrSW5mbywgY2hlY2tOZXdUYXNrLCBcbiAgICAgICAgIGFkZFRhc2tUb0xpc3QsIGRpc3BsYXlFZGl0VGFzaywgdXBkYXRlVGFza0xpc3QsIGNhbmNlbEVkaXQsIGRpc3BsYXlQcm9qZWN0c31cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1hbmlwOyIsImltcG9ydCBET01NYW5pcCBmcm9tIFwiLi9ET01NYW5pcFwiO1xuaW1wb3J0IHsgcHJvamVjdEZ1bmN0aW9ucyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9ICgoKT0+e1xuICAgIGNvbnN0IGFjdGl2YXRlQWRkQnV0dG9uID0gKCk9PntcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01NYW5pcC5jYW5jZWxOZXdQcm9qZWN0KTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01NYW5pcC5zZXR1cE5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRTdGFydGluZ0xpc3RlbmVycyA9ICgpPT57XG4gICAgICAgIGFjdGl2YXRlQWRkQnV0dG9uKCk7XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKCcuZHJvcGRvd24tdG9nZ2xlJykuZm9yRWFjaChlbGUgPT5lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01NYW5pcC5leHBhbmRUb2dnbGUpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0U3VibWlzc2lvbiA9ICgpPT57XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnQoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NTWFuaXAuc2V0dXBOZXdQcm9qZWN0KTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01NYW5pcC5jYW5jZWxOZXdQcm9qZWN0KTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudCgnI25ldy1wcm9qLWFkZC1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RGdW5jdGlvbnMuYWRkUHJvamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVQcm9qZWN0cyA9ICgpPT57XG4gICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKCcucHJvamVjdC1zaWRlLWxhYmVsJykuZm9yRWFjaChlbGU9PmVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTU1hbmlwLnNob3dQcm9qZWN0KSk7XG5cbiAgICB9XG4gICAgY29uc3QgYWN0aXZhdGVBZGRUYXNrQnV0dG9uID0gKCk9PntcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudCgnI2FkZC10YXNrLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdEZ1bmN0aW9ucy5hZGRUYXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUVkaXRCdXR0b24gPSBidXR0b249PntcbiAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdEZ1bmN0aW9ucy5jb25maXJtRWRpdCk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTU1hbmlwLmRpc3BsYXlFZGl0VGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZhdGVDb25maXJtRWRpdCA9IGJ1dHRvbj0+e1xuICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01NYW5pcC5kaXNwbGF5RWRpdFRhc2spO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RnVuY3Rpb25zLmNvbmZpcm1FZGl0KTtcbiAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTU1hbmlwLmNhbmNlbEVkaXQpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJue2FjdGl2YXRlQWRkQnV0dG9uLCBpbml0U3RhcnRpbmdMaXN0ZW5lcnMsIGFkZFByb2plY3RTdWJtaXNzaW9uLCBhY3RpdmF0ZVByb2plY3RzLCBcbiAgICAgICAgYWN0aXZhdGVBZGRUYXNrQnV0dG9uLCBhY3RpdmF0ZUVkaXRCdXR0b24sIGFjdGl2YXRlQ29uZmlybUVkaXR9O1xufSkoKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SGFuZGxlcjsiLCJleHBvcnQgY2xhc3MgUHJvamVjdHtcbiAgICAgICAgY29uc3RydWN0b3IoaW5pdFRpdGxlLCB0YXNrcyA9IFtdLCBjb21wbGV0ZWQgPSBmYWxzZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSBpbml0VGl0bGU7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0VGl0bGUoKXtyZXR1cm4gdGhpcy50aXRsZTt9XG4gICAgZ2V0VGFza3MoKXtyZXR1cm4gdGhpcy50YXNrczt9XG4gICAgaXNDb21wbGV0ZWQoKXtyZXR1cm4gdGhpcy5jb21wbGV0ZWQ7fVxuICAgIGlzU2VsZWN0ZWQoKXtyZXR1cm4gdGhpcy5zZWxlY3RlZDt9XG4gICAgc2V0VGl0bGUobmV3VGl0bGUpe3RoaXMudGl0bGUgPSBuZXdUaXRsZTt9XG4gICAgYWRkVGFzayhuZXdUYXNrKXt0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7fVxuICAgIG1hcmtDb21wbGV0ZSh2YWx1ZSl7dGhpcy5jb21wbGV0ZWQgPSB2YWx1ZTt9XG4gICAgbWFya1NlbGVjdGVkKHZhbHVlKXt0aGlzLnNlbGVjdGVkID0gdmFsdWU7fVxufSIsImNsYXNzIFRhc2t7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBwcm9qZWN0KXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0TmFtZSA9ICgpPT50aGlzLm5hbWVcbiAgICBnZXREZXNjcmlwdGlvbiA9ICgpPT50aGlzLmRlc2NyaXB0aW9uXG4gICAgZ2V0RGF0ZSA9ICgpPT50aGlzLmR1ZURhdGVcbiAgICBnZXRQcmlvcml0eSA9ICgpPT50aGlzLnByaW9yaXR5XG4gICAgZ2V0Tm90ZXMgPSAoKT0+dGhpcy5ub3Rlc1xuICAgIGdldFByb2plY3QgPSAoKT0+dGhpcy5wcm9qZWN0XG4gICAgaXNDb21wbGV0ZSA9ICgpPT50aGlzLmNvbXBsZXRlZFxuXG4gICAgc2V0TmFtZSA9IChuZXdOYW1lKT0+dGhpcy5uYW1lID0gbmV3TmFtZVxuICAgIHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKT0+dGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXG4gICAgc2V0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKT0+dGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZVxuICAgIHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KT0+dGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5XG4gICAgc2V0Tm90ZXMgPSAobmV3Tm90ZXMpPT50aGlzLm5vdGVzID0gbmV3Tm90ZXNcbiAgICBtYXJrQ29tcGxldGUgPSAoKT0+dGhpcy5jb21wbGV0ZWQgPSB0cnVlXG59XG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImltcG9ydCB7IHByb2plY3RGdW5jdGlvbnMgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3QuanNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2suanNcIjtcblxuXG5jb25zdCBkYXRhU3RvcmFnZSA9ICgoKT0+e1xuICAgIGNvbnN0IHNhdmVEYXRhID0gKCk9PntcbiAgICAgICAgY29uc3QgYWxsUHJvaiA9IHByb2plY3RGdW5jdGlvbnMuZ2V0QWxsUHJvamVjdHMoKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qKSlcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzJykpXG4gICAgfVxuXG4gICAgY29uc3QgbG9hZERhdGEgPSAoKT0+e1xuICAgICAgICBjb25zdCBsb2FkZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHMnKSlcbiAgICAgICAgY29uc3QgcmV0dXJuRGF0YSA9IFtdO1xuICAgICAgICBsb2FkZWREYXRhLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRQcm9qZWN0VGl0bGUgPSBlbGUudGl0bGU7XG4gICAgICAgICAgICBjb25zdCBsb2FkUHJvamVjdHNUYXNrcyA9IFtdO1xuICAgICAgICAgICAgZWxlLnRhc2tzLmZvckVhY2godGFzaz0+e1xuICAgICAgICAgICAgICAgIGxvYWRQcm9qZWN0c1Rhc2tzLnB1c2gobmV3IFRhc2sodGFzay5uYW1lLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHksIHRhc2subm90ZXMsIHRhc2sucHJvamVjdCkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgbG9hZFByb2plY3RDb21wbGV0ZWQgPSBlbGUuY29tcGxldGVkO1xuICAgICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKG5ldyBQcm9qZWN0KGxvYWRQcm9qZWN0VGl0bGUsIGxvYWRQcm9qZWN0c1Rhc2tzLCBsb2FkUHJvamVjdENvbXBsZXRlZCkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyRGF0YSA9ICgpPT57XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQcm9qZWN0cycsICcnKTtcbiAgICB9XG5cbiAgICByZXR1cm57c2F2ZURhdGEsIGxvYWREYXRhLCBjbGVhckRhdGF9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhU3RvcmFnZTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IERPTU1hbmlwIGZyb20gJy4vRE9NTWFuaXAnO1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tICcuL0V2ZW50SGFuZGxlcic7XG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2suanMnXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBkYXRhU3RvcmFnZSBmcm9tICcuL2RhdGFTdG9yYWdlJztcblxuY29uc3QgcHJvamVjdEZ1bmN0aW9ucyA9ICgoKT0+e1xuXG4gICAgbGV0IF9hbGxQcm9qZWN0cyA9IFtdO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChlKT0+e1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0SW5mbyA9IERPTU1hbmlwLmdldE5ld1Byb2pJbmZvKCk7XG4gICAgICAgIGNvbnN0IGdvb2RUYXNrID0gRE9NTWFuaXAuY2hlY2tOZXdQcm9qZWN0KGUsbmV3UHJvamVjdEluZm8pO1xuICAgICAgICBpZihnb29kVGFzayl7XG4gICAgICAgICAgICBfYWxsUHJvamVjdHMucHVzaChuZXcgUHJvamVjdChuZXdQcm9qZWN0SW5mby50aXRsZSkpO1xuICAgICAgICAgICAgRE9NTWFuaXAuYWRkUHJvamVjdFRvTGlzdCgpO1xuICAgICAgICAgICAgZGF0YVN0b3JhZ2Uuc2F2ZURhdGEoKTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGFkZFRhc2sgPSAoZSk9PntcbiAgICAgICAgY29uc3QgbmV3VGFza0luZm8gPSBET01NYW5pcC5nZXRUYXNrSW5mbygpO1xuICAgICAgICBjb25zdCBnb29kVGFzayA9IERPTU1hbmlwLmNoZWNrTmV3VGFzayhlLCBuZXdUYXNrSW5mbyk7XG4gICAgICAgIGlmKGdvb2RUYXNrKXtcbiAgICAgICAgICAgIF9hbGxQcm9qZWN0c1tuZXdUYXNrSW5mby5wcm9qZWN0XS50YXNrcy5wdXNoKG5ldyBUYXNrKG5ld1Rhc2tJbmZvLm5hbWUsIG5ld1Rhc2tJbmZvLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICBuZXdUYXNrSW5mby5kYXRlLCBuZXdUYXNrSW5mby5wcmlvcml0eSwgJycsIG5ld1Rhc2tJbmZvLnByb2plY3QpKTtcbiAgICAgICAgICAgIERPTU1hbmlwLmFkZFRhc2tUb0xpc3QoKTtcbiAgICAgICAgICAgIGRhdGFTdG9yYWdlLnNhdmVEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY29uZmlybUVkaXQgPSAoZSk9PntcbiAgICAgICAgY29uc3QgZWRpdFRhc2sgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2s7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrSW5mbyA9IERPTU1hbmlwLmdldFRhc2tJbmZvKGVkaXRUYXNrKTtcbiAgICAgICAgY29uc3QgZ29vZFRhc2sgPSBET01NYW5pcC5jaGVja05ld1Rhc2soZSwgZWRpdFRhc2tJbmZvKTtcbiAgICAgICAgaWYoZ29vZFRhc2spe1xuICAgICAgICAgICAgX2FsbFByb2plY3RzW2VkaXRUYXNrSW5mby5wcm9qZWN0XS50YXNrc1tlZGl0VGFza109bmV3IFRhc2soZWRpdFRhc2tJbmZvLm5hbWUsIGVkaXRUYXNrSW5mby5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tJbmZvLmRhdGUsIGVkaXRUYXNrSW5mby5wcmlvcml0eSwgJycsIGVkaXRUYXNrSW5mby5wcm9qZWN0KTtcbiAgICAgICAgICAgIERPTU1hbmlwLnVwZGF0ZVRhc2tMaXN0KGVkaXRUYXNrKTtcbiAgICAgICAgICAgIGRhdGFTdG9yYWdlLnNhdmVEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRBbGxQcm9qZWN0cyA9ICgpPT57XG4gICAgICAgIHJldHVybiBfYWxsUHJvamVjdHMubWFwKGVsZT0+ZWxlKTtcbiAgICB9XG4gICAgY29uc3QgbG9hZFByb2plY3RzID0gKCk9PntcbiAgICAgICAgX2FsbFByb2plY3RzID0gZGF0YVN0b3JhZ2UubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICByZXR1cm57YWRkUHJvamVjdCwgYWRkVGFzaywgY29uZmlybUVkaXQsIGdldEFsbFByb2plY3RzLCBsb2FkUHJvamVjdHN9XG5cbn0pKCk7XG5cbmNvbnN0IGluaXRXZWJzaXRlID0gKCgpPT57XG4gICAgc2V0VGltZW91dChET01NYW5pcC5maXhTdGFydGluZ0FuaW1hdGlvbnMsIDEpO1xuICAgIEV2ZW50SGFuZGxlci5pbml0U3RhcnRpbmdMaXN0ZW5lcnMoKTtcbiAgICBwcm9qZWN0RnVuY3Rpb25zLmxvYWRQcm9qZWN0cygpO1xuICAgIERPTU1hbmlwLmRpc3BsYXlQcm9qZWN0cygpO1xuICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZVByb2plY3RzKCk7XG59KSgpO1xuXG5cblxuZXhwb3J0IHtwcm9qZWN0RnVuY3Rpb25zfTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9