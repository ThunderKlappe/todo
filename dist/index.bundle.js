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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #F6EABE;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header{\n    height: 72px;\n    background-color: #F6D7A7;\n    color: #2f6363;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content{\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n}\n#side-panel{\n    flex: 1;\n    background-color: #2f6363;\n    color: #F6D7A7;\n    min-height: 90.1vh;\n    padding-top: 20px;\n    border-top-right-radius: 30px;\n}\n.side-header-container{\n    display: flex;\n    flex-direction: column;\n}\n.side-header{\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label{\n    font-size: 18px;\n    padding: 0px 30px 8px 30px;\n}\n.dropdown-toggle{\n    margin-left: 8px;\n}\n.dropdown-toggle.anim{\n    transition: .25s;\n}\n.dropdown-toggle.closed{\n    transform: rotateZ(-90deg);\n}\n\n#main-display{\n    flex: 4;\n}\n\n.add-button{\n    border-radius: 100px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n    \n}\n\n.add-button:hover{\n    filter: brightness(70%);\n}\n.add-button:active{\n\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container{\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button{\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n    \n}\n#add-project-button.anim{\n    transition: .25s;\n}\n#add-project-button:hover, #add-project-button.active{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active{\n    filter: brightness(80%);\n}\n\n#add-project-button span{\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim{\n    transition: .05s;\n}\n#add-project-button:hover span, #add-project-button span.active{\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container{\n    padding: 8px 15px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button{\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput, select{\n    background-color: #87AAAA;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n}\nselect{\n    height: 31px;\n    font-size:18px\n}\n.project-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n}\n.project-title{\n    font-size: 36px;\n    font-weight: bold;\n    max-width: 40%;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    margin-bottom: 30px;\n}\n\n#add-task-button{\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info{\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper{\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container{\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n    \n}\n.task-info{\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n\n\n\n.error-message{\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority='Low']{\n    background-color: #E1ADAD;\n}\n[data-priority='Medium']{\n    background-color: #EFEF38;\n}\n[data-priority='High']{\n    background-color: #9DCD8D;\n}\n\n.task-button{\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: .25s;\n}\n\n.task-button:hover{\n    filter:brightness(70%);\n}\n\n.task-button span{\n    font-size: 0%;\n    opacity: 0;\n    transition: .25s;\n}\n.task-button:hover span{\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.task-container input, .task-container select{\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select{\n    height: 23px;\n    font-size:15px\n}\n\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n    \n::-webkit-scrollbar-track {\n    border: 3px solid #87AAAA;\n    border-radius: 10px;\n}\n    \n::-webkit-scrollbar-thumb {\n    background:#2f6363; \n    border-radius: 10px;\n    border: 2px solid #2f6363\n}\n    \n::-webkit-scrollbar-thumb:hover {\n    background:#265252; \n}\n@-moz-document url-prefix() {\n    body{\n        scrollbar-color: #2f6363 #265252 #87AAAA;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #F6EABE;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    color: #2f6363;\n}\n\n#header{\n    height: 72px;\n    background-color: #F6D7A7;\n    color: #2f6363;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 2;\n}\n\n#content{\n    margin-top: 72px;\n    display: flex;\n    width: -webkit-fill-available;\n}\n#side-panel{\n    flex: 1;\n    background-color: #2f6363;\n    color: #F6D7A7;\n    min-height: 90.1vh;\n    padding-top: 20px;\n    border-top-right-radius: 30px;\n}\n.side-header-container{\n    display: flex;\n    flex-direction: column;\n}\n.side-header{\n    font-size: 24px;\n    padding-left: 20px;\n    padding-bottom: 8px;\n    display: flex;\n}\n.project-side-label{\n    font-size: 18px;\n    padding: 0px 30px 8px 30px;\n}\n.dropdown-toggle{\n    margin-left: 8px;\n}\n.dropdown-toggle.anim{\n    transition: .25s;\n}\n.dropdown-toggle.closed{\n    transform: rotateZ(-90deg);\n}\n\n#main-display{\n    flex: 4;\n}\n\n.add-button{\n    border-radius: 100px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    color: #2f6363;\n    text-align: center;\n    padding: 0px 10px;\n    margin: 0px 8px 1px;\n    filter: brightness(100%);\n    \n}\n\n.add-button:hover{\n    filter: brightness(70%);\n}\n.add-button:active{\n\n    box-shadow: inset 0px 0px 5px black;\n}\n\n#add-project-button-container{\n    position: fixed;\n    top: 100px;\n    right: 60px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    z-index: 1;\n}\n#add-project-button{\n    height: 50px;\n    width: 50px;\n    font-size: 40px;\n    font-weight: bold;\n    z-index: 1;\n    \n}\n#add-project-button.anim{\n    transition: .25s;\n}\n#add-project-button:hover, #add-project-button.active{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 120px;\n}\n#add-project-button.active{\n    filter: brightness(80%);\n}\n\n#add-project-button span{\n    font-size: 0%;\n    opacity: 0;\n}\n#add-project-button span.anim{\n    transition: .05s;\n}\n#add-project-button:hover span, #add-project-button span.active{\n    font-size: 20px;\n    opacity: 1;\n}\n.input-container{\n    padding: 8px 15px;\n    background-color: #C8E3D4;\n    border: 3px solid #2f6363;\n    border-radius: 100px;\n    box-shadow: 2px 2px black;\n}\n#new-proj-add-button{\n    font-size: 18px;\n    font-weight: bold;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\ninput, select{\n    background-color: #87AAAA;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 22px;\n    padding: 4px 6px 4px 8px;\n}\nselect{\n    height: 31px;\n    font-size:18px\n}\n.project-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 30px;\n}\n.project-title{\n    font-size: 36px;\n    font-weight: bold;\n    max-width: 40%;\n    overflow-y: auto;\n    white-space: nowrap;\n    text-decoration: underline;\n    margin-bottom: 30px;\n}\n\n#add-task-button{\n    font-size: 18px;\n    padding: 5px 12px;\n}\n\n.add-task-info{\n    border-radius: 20px;\n    margin: 5px;\n}\n.tasks-wrapper{\n    display: flex;\n    flex-direction: column;\n    margin-left: 60px;\n    margin-bottom: 40px;\n    width: -webkit-fill-available;\n}\n.task-container{\n    border-radius: 10px;\n    padding: 4px 12px;\n    display: flex;\n    gap: 20px;\n    max-width: fit-content;\n    \n}\n.task-info{\n    max-width: 30vw;\n    white-space: nowrap;\n    overflow-y: auto;\n}\n\n\n\n.error-message{\n    font-size: 18px;\n    color: #993c3c;\n    transition: 2s;\n    transition-delay: 1s;\n    opacity: 1;\n    margin: 6px;\n}\n\n[data-priority='Low']{\n    background-color: #E1ADAD;\n}\n[data-priority='Medium']{\n    background-color: #EFEF38;\n}\n[data-priority='High']{\n    background-color: #9DCD8D;\n}\n\n.task-button{\n    border-radius: 10px;\n    background-color: inherit;\n    filter: brightness(100%);\n    border: 1px solid #2f6363;\n    color: #2f6363;\n    transition: .25s;\n}\n\n.task-button:hover{\n    filter:brightness(70%);\n}\n\n.task-button span{\n    font-size: 0%;\n    opacity: 0;\n    transition: .25s;\n}\n.task-button:hover span{\n    font-size: 14px;\n    opacity: 1;\n    padding: 0px 5px;\n}\n\n.task-container input, .task-container select{\n    background-color: inherit;\n    color: #2f6363;\n    border-style: none;\n    border-bottom: 1px solid #2f6363;\n    flex-grow: 1;\n    font-size: 14px;\n    height: 18px;\n    padding: 2px 4px 2px 4px;\n}\n.task-container select{\n    height: 23px;\n    font-size:15px\n}\n\n\ninput[type=\"checkbox\" i] {\n    flex-grow: 0;\n    height: 15px;\n    width: 15px;\n}\n\n\n/* Scroll Bar */\n::-webkit-scrollbar {\n    width: 20px;\n    height: 10px;\n    padding-top: 2px;\n}\n    \n::-webkit-scrollbar-track {\n    border: 3px solid #87AAAA;\n    border-radius: 10px;\n}\n    \n::-webkit-scrollbar-thumb {\n    background:#2f6363; \n    border-radius: 10px;\n    border: 2px solid #2f6363\n}\n    \n::-webkit-scrollbar-thumb:hover {\n    background:#265252; \n}\n@-moz-document url-prefix() {\n    body{\n        scrollbar-color: #2f6363 #265252 #87AAAA;\n    }\n}\n\n"],"sourceRoot":""}]);
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
            _makeNewElement('div', `${type}-${index}`, `${type}-side-label`, proj.getTitle(), {'data-index': `${index}`})))
    }

    const addProjectToList = ()=>{
        _removeElement("#new-proj-input-container");
        _toggleActive('#add-project-button');
        _toggleActive('#add-project-button-text');
        _revealArray(getElement('#projects-side').parentElement, ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects(), 'project');
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
    const showProject = (e)=>{
        _markSelectedProject(e);
        const mainDisplay = getElement('#main-display');

        //this can get removed after Today's Tasks is working
        if(mainDisplay.childNodes.length >0){
            mainDisplay.firstChild.remove();
        }
        //*****

        const projectContainer = _makeNewElement('div', `project-${e.target.id.charAt(e.target.id.length-1)}-container`, 'project-container');
        const projectTitle = _makeNewElement('div', `project-${e.target.dataset.index}-title`, 'project-title', `${___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[e.target.dataset.index].getTitle()}`)
        const tasksContainer = _makeNewElement('div', `project-${e.target.dataset.index}-tasks-container`, 'tasks-container');
        const tasksWrapper = _makeNewElement('div', `project-${e.target.dataset.index}-tasks-wrapper`, 'tasks-wrapper')
        projectContainer.appendChild(projectTitle);
        tasksWrapper.appendChild(tasksContainer)
        projectContainer.appendChild(tasksWrapper);
        mainDisplay.appendChild(projectContainer);
        _displayTaskInput();
    }

    const getTaskInfo = (index)=>{
        let formInfo;
        const projectNumber = getElement('.selected').dataset.index;
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

    const addTaskToList = ()=>{
        const tasksContainer = getElement('.tasks-container');
        const projectNumber = getElement('.selected').dataset.index;
        const taskNumber = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].tasks.length-1;
        const newTask = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].tasks[taskNumber];

        getElement('#add-task-container').remove();
        const newTaskContainer = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-container`, 'task-container', '', {'data-priority':newTask.getPriority()},{"data-task":taskNumber});
        const newTaskCheckbox = _makeNewElement('input', `project-${projectNumber}-task-${taskNumber}-checkbox`, 'task-checkbox', '', {type:'checkbox'}, {'data-project':projectNumber}, {'data-task':taskNumber});
        const newTaskName = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-name`, 'task-name task-info', newTask.getName());
        const newTaskDescription = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-description`, 'task-description task-info', newTask.getDescription());
        const newTaskDate = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-date`, 'task-date task-info', newTask.getDate());
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
        tasksContainer.appendChild(newTaskContainer);
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateEditButton(newTaskEditButton);

        _displayTaskInput();
    }

    const displayEditTask = e=>{
        const editButton = e.currentTarget;
        const projectNumber = getElement('.selected').dataset.index;
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

    const updateTaskList = (taskNumber)=>{
        const projectNumber = getElement('.selected').dataset.index;
        const editTaskContainer = getElement(`#project-${projectNumber}-task-${taskNumber}-container`)
        const editFields = getElements(`#project-${projectNumber}-task-${taskNumber}-container .edit-task-info`)
        const updatedTask = ___WEBPACK_IMPORTED_MODULE_0__.projectFunctions.getAllProjects()[projectNumber].tasks[taskNumber];
        const editButton = getElement(`#project-${projectNumber}-task-${taskNumber}-edit-button`);
        editFields.forEach(ele=>ele.remove());

        const updatedTaskName = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-name`, 'task-name task-info', updatedTask.getName());
        const updatedTaskDescription = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-description`, 'task-description task-info', updatedTask.getDescription());
        const updatedTaskDate = _makeNewElement('div', `project-${projectNumber}-task-${taskNumber}-date`, 'task-date task-info', updatedTask.getDate());

        editTaskContainer.lastElementChild.remove();
        editTaskContainer.insertBefore(updatedTaskName, editTaskContainer.lastElementChild);
        editTaskContainer.insertBefore(updatedTaskDescription, editTaskContainer.lastElementChild);
        editTaskContainer.insertBefore(updatedTaskDate, editTaskContainer.lastElementChild);
        
        editTaskContainer.setAttribute('data-priority', updatedTask.getPriority())

        editButton.firstElementChild.classList.remove('fa-check');
        editButton.firstElementChild.classList.add('fa-pencil');
        editButton.lastElementChild.textContent = "Edit Task";

        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["default"].activateEditButton(editButton);
    }

    const cancelEdit = (e)=>{

    }

    return {getElement, getElements, fixStartingAnimations,checkNewProject, setupNewProject, cancelNewProject,
         getNewProjInfo, addProjectToList, expandToggle, showProject, getTaskInfo, checkNewTask, 
         addTaskToList, displayEditTask, updateTaskList, cancelEdit}
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
        constructor(initTitle){
        this.title = initTitle;
        this.tasks = [];
        this.completed = false;
    }
    getTitle(){return this.title;}
    getTasks(){return this.tasks;}
    isCompleted(){return this.completed;}
    setTitle(newTitle){this.title = newTitle;}
    addTask(newTask){this.tasks.push(newTask);}
    markComplete(){this.completed = true;}
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
        this._name = name;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
        this._project = project;
        this._completed = false;
    }
    
    getName = ()=>this._name
    getDescription = ()=>this._description
    getDate = ()=>this._dueDate
    getPriority = ()=>this._priority
    getNotes = ()=>this._notes
    getProject = ()=>this._project
    isComplete = ()=>this._completed

    setName = (newName)=>this._name = newName
    setDescription = (newDescription)=>this._description = newDescription
    setDueDate = (newDueDate)=>this._dueDate = newDueDate
    setPriority = (newPriority)=>this._priority = newPriority
    setNotes = (newNotes)=>this._notes = newNotes
    markComplete = ()=>this._completed = true
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

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






const projectFunctions = (()=>{

    const _allProjects = [];

    const addProject = (e)=>{
        const newProjectInfo = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getNewProjInfo();
        const goodTask = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].checkNewProject(e,newProjectInfo);
        if(goodTask){
            _allProjects.push(new _Project__WEBPACK_IMPORTED_MODULE_4__.Project(newProjectInfo.title));
            _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].addProjectToList();
        }
    }
    const addTask = (e)=>{
        const newTaskInfo = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskInfo();
        const goodTask = _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].checkNewTask(e, newTaskInfo);
        if(goodTask){
            _allProjects[newTaskInfo.project].tasks.push(new _Task_js__WEBPACK_IMPORTED_MODULE_3__["default"](newTaskInfo.name, newTaskInfo.description, 
                newTaskInfo.date, newTaskInfo.priority, '', newTaskInfo.project));
            _DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].addTaskToList();
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
        }
    }

    const getAllProjects = ()=>{
        return _allProjects.map(ele=>ele);
    }

    return{addProject, addTask, confirmEdit, getAllProjects}

})();

const initWebsite = (()=>{
    setTimeout(_DOMManip__WEBPACK_IMPORTED_MODULE_1__["default"].fixStartingAnimations, 1);
    _EventHandler__WEBPACK_IMPORTED_MODULE_2__["default"].initStartingListeners();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSwrQkFBK0IsZ0VBQXVCO0FBQ3RELHlCQUF5QixpRUFBd0I7QUFDakQ7QUFDQSxrQ0FBa0MsNkNBQU87QUFDekMsWUFBWSxrRUFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZEQUFvQjtBQUNoRCx5QkFBeUIsOERBQXFCO0FBQzlDO0FBQ0EsNkRBQTZELGdEQUFJO0FBQ2pFO0FBQ0EsWUFBWSwrREFBc0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkRBQW9CO0FBQ2pELHlCQUF5Qiw4REFBcUI7QUFDOUM7QUFDQSxtRUFBbUUsZ0RBQUk7QUFDdkU7QUFDQSxZQUFZLGdFQUF1QjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXOztBQUVYLENBQUM7O0FBRUQ7QUFDQSxlQUFlLHVFQUE4QjtBQUM3QyxJQUFJLDJFQUFrQztBQUN0QyxDQUFDOztBQUV5Qjs7Ozs7Ozs7VUNuRDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL0RPTU1hbmlwLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZFQUJFO1xcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkQ3QTc7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgbWFyZ2luLXRvcDogNzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcbiNzaWRlLXBhbmVse1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2MzYzO1xcbiAgICBjb2xvcjogI0Y2RDdBNztcXG4gICAgbWluLWhlaWdodDogOTAuMXZoO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XFxufVxcbi5zaWRlLWhlYWRlci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5zaWRlLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LXNpZGUtbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogMHB4IDMwcHggOHB4IDMwcHg7XFxufVxcbi5kcm9wZG93bi10b2dnbGV7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbi5kcm9wZG93bi10b2dnbGUuYW5pbXtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuLmRyb3Bkb3duLXRvZ2dsZS5jbG9zZWR7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigtOTBkZWcpO1xcbn1cXG5cXG4jbWFpbi1kaXNwbGF5e1xcbiAgICBmbGV4OiA0O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbntcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEUzRDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICBtYXJnaW46IDBweCA4cHggMXB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxuICAgIFxcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XFxufVxcbi5hZGQtYnV0dG9uOmFjdGl2ZXtcXG5cXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggYmxhY2s7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIHJpZ2h0OiA2MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b257XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uLmFuaW17XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIsICNhZGQtcHJvamVjdC1idXR0b24uYWN0aXZle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uLmFjdGl2ZXtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24gc3BhbntcXG4gICAgZm9udC1zaXplOiAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFuLmFuaW17XFxuICAgIHRyYW5zaXRpb246IC4wNXM7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIgc3BhbiwgI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFuLmFjdGl2ZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4uaW5wdXQtY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTNENDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJmNjM2MztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxufVxcbiNuZXctcHJvai1hZGQtYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdBQUFBO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgcGFkZGluZzogNHB4IDZweCA0cHggOHB4O1xcbn1cXG5zZWxlY3R7XFxuICAgIGhlaWdodDogMzFweDtcXG4gICAgZm9udC1zaXplOjE4cHhcXG59XFxuLnByb2plY3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ucHJvamVjdC10aXRsZXtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWF4LXdpZHRoOiA0MCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xcbn1cXG5cXG4uYWRkLXRhc2staW5mb3tcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcbi50YXNrcy13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgXFxufVxcbi50YXNrLWluZm97XFxuICAgIG1heC13aWR0aDogMzB2dztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuXFxuXFxuLmVycm9yLW1lc3NhZ2V7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICM5OTNjM2M7XFxuICAgIHRyYW5zaXRpb246IDJzO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWFyZ2luOiA2cHg7XFxufVxcblxcbltkYXRhLXByaW9yaXR5PSdMb3cnXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxQURBRDtcXG59XFxuW2RhdGEtcHJpb3JpdHk9J01lZGl1bSdde1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRjM4O1xcbn1cXG5bZGF0YS1wcmlvcml0eT0nSGlnaCdde1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOURDRDhEO1xcbn1cXG5cXG4udGFzay1idXR0b257XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOmJyaWdodG5lc3MoNzAlKTtcXG59XFxuXFxuLnRhc2stYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcbi50YXNrLWJ1dHRvbjpob3ZlciBzcGFue1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dCwgLnRhc2stY29udGFpbmVyIHNlbGVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcXG59XFxuLnRhc2stY29udGFpbmVyIHNlbGVjdHtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbiAgICBmb250LXNpemU6MTVweFxcbn1cXG5cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCIgaV0ge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcblxcbi8qIFNjcm9sbCBCYXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODdBQUFBO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4gICAgXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IzJmNjM2MzsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZjYzNjNcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiMyNjUyNTI7IFxcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICBib2R5e1xcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjMmY2MzYzICMyNjUyNTIgIzg3QUFBQTtcXG4gICAgfVxcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNERBQTREO0lBQzVELGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix3QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNC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biAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZFQUJFO1xcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkQ3QTc7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgbWFyZ2luLXRvcDogNzJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcbiNzaWRlLXBhbmVse1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2MzYzO1xcbiAgICBjb2xvcjogI0Y2RDdBNztcXG4gICAgbWluLWhlaWdodDogOTAuMXZoO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XFxufVxcbi5zaWRlLWhlYWRlci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5zaWRlLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wcm9qZWN0LXNpZGUtbGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogMHB4IDMwcHggOHB4IDMwcHg7XFxufVxcbi5kcm9wZG93bi10b2dnbGV7XFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbi5kcm9wZG93bi10b2dnbGUuYW5pbXtcXG4gICAgdHJhbnNpdGlvbjogLjI1cztcXG59XFxuLmRyb3Bkb3duLXRvZ2dsZS5jbG9zZWR7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigtOTBkZWcpO1xcbn1cXG5cXG4jbWFpbi1kaXNwbGF5e1xcbiAgICBmbGV4OiA0O1xcbn1cXG5cXG4uYWRkLWJ1dHRvbntcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEUzRDQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyZjYzNjM7XFxuICAgIGNvbG9yOiAjMmY2MzYzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICBtYXJnaW46IDBweCA4cHggMXB4O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XFxuICAgIFxcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XFxufVxcbi5hZGQtYnV0dG9uOmFjdGl2ZXtcXG5cXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggYmxhY2s7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIHJpZ2h0OiA2MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b257XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uLmFuaW17XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIsICNhZGQtcHJvamVjdC1idXR0b24uYWN0aXZle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG4jYWRkLXByb2plY3QtYnV0dG9uLmFjdGl2ZXtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idXR0b24gc3BhbntcXG4gICAgZm9udC1zaXplOiAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFuLmFuaW17XFxuICAgIHRyYW5zaXRpb246IC4wNXM7XFxufVxcbiNhZGQtcHJvamVjdC1idXR0b246aG92ZXIgc3BhbiwgI2FkZC1wcm9qZWN0LWJ1dHRvbiBzcGFuLmFjdGl2ZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4uaW5wdXQtY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4RTNENDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzJmNjM2MztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggYmxhY2s7XFxufVxcbiNuZXctcHJvai1hZGQtYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdBQUFBO1xcbiAgICBjb2xvcjogIzJmNjM2MztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgcGFkZGluZzogNHB4IDZweCA0cHggOHB4O1xcbn1cXG5zZWxlY3R7XFxuICAgIGhlaWdodDogMzFweDtcXG4gICAgZm9udC1zaXplOjE4cHhcXG59XFxuLnByb2plY3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4ucHJvamVjdC10aXRsZXtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWF4LXdpZHRoOiA0MCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMnB4O1xcbn1cXG5cXG4uYWRkLXRhc2staW5mb3tcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcbi50YXNrcy13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxufVxcbi50YXNrLWNvbnRhaW5lcntcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNHB4IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgXFxufVxcbi50YXNrLWluZm97XFxuICAgIG1heC13aWR0aDogMzB2dztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuXFxuXFxuLmVycm9yLW1lc3NhZ2V7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICM5OTNjM2M7XFxuICAgIHRyYW5zaXRpb246IDJzO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWFyZ2luOiA2cHg7XFxufVxcblxcbltkYXRhLXByaW9yaXR5PSdMb3cnXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UxQURBRDtcXG59XFxuW2RhdGEtcHJpb3JpdHk9J01lZGl1bSdde1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRjM4O1xcbn1cXG5bZGF0YS1wcmlvcml0eT0nSGlnaCdde1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOURDRDhEO1xcbn1cXG5cXG4udGFzay1idXR0b257XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJmNjM2MztcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcblxcbi50YXNrLWJ1dHRvbjpob3ZlcntcXG4gICAgZmlsdGVyOmJyaWdodG5lc3MoNzAlKTtcXG59XFxuXFxuLnRhc2stYnV0dG9uIHNwYW57XFxuICAgIGZvbnQtc2l6ZTogMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IC4yNXM7XFxufVxcbi50YXNrLWJ1dHRvbjpob3ZlciBzcGFue1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBhZGRpbmc6IDBweCA1cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dCwgLnRhc2stY29udGFpbmVyIHNlbGVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6ICMyZjYzNjM7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZjYzNjM7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcXG59XFxuLnRhc2stY29udGFpbmVyIHNlbGVjdHtcXG4gICAgaGVpZ2h0OiAyM3B4O1xcbiAgICBmb250LXNpemU6MTVweFxcbn1cXG5cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCIgaV0ge1xcbiAgICBmbGV4LWdyb3c6IDA7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcblxcbi8qIFNjcm9sbCBCYXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODdBQUFBO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4gICAgXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IzJmNjM2MzsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZjYzNjNcXG59XFxuICAgIFxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiMyNjUyNTI7IFxcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICBib2R5e1xcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjMmY2MzYzICMyNjUyNTIgIzg3QUFBQTtcXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RGdW5jdGlvbnMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tIFwiLi9FdmVudEhhbmRsZXJcIjtcblxuY29uc3QgRE9NTWFuaXAgPSAoKCk9PntcbiAgICBjb25zdCBnZXRFbGVtZW50ID0gKHNlbGVjdG9yKT0+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICBjb25zdCBnZXRFbGVtZW50cyA9IChzZWxlY3Rvcik9PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBjb25zdCBmaXhTdGFydGluZ0FuaW1hdGlvbnMgPSAoKT0+e1xuICAgICAgICBjb25zdCBhbmltYXRhYmxlID0gZ2V0RWxlbWVudHMoXCIuZml4LWFuaW1cIilcbiAgICAgICAgYW5pbWF0YWJsZS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZCgnYW5pbScpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeC1hbmltJyl9KVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBfbWFrZU5ld0VsZW1lbnQgPSAodHlwZSwgaWQ9JycsIEhUTUxDbGFzcyA9ICcnLCB0ZXh0ID0gJycsIC4uLmF0dHJpYnV0ZXMpID0+e1xuICAgICAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgaWYoaWQgIT0gJycpe1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoSFRNTENsYXNzICE9ICcnKXtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIEhUTUxDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmKGF0dHJpYnV0ZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ID0+IG5ld0VsZW0uc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKGF0dClbMF0sIGF0dFtPYmplY3Qua2V5cyhhdHQpXSkpXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIG5ld0VsZW07XG4gICAgfVxuICAgIGNvbnN0IF9yZW1vdmVFbGVtZW50ID0gKGVsZW1lbnRJRCkgPT57XG4gICAgICAgIGdldEVsZW1lbnQoZWxlbWVudElEKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgY29uc3QgX2Rpc3BsYXlFcnJvcnMgPSAoZSwgaW5wdXQsIHR5cGUpPT57XG4gICAgICAgIGlucHV0LmZvckVhY2goZWxlPT57XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywnJywnZXJyb3ItbWVzc2FnZScsIGVsZSlcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICBwYXJlbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZXJyb3IsIHBhcmVudCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT5lcnJvci5zdHlsZS5vcGFjaXR5ID0gMCwgMjAwMCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT5lcnJvci5yZW1vdmUoKSwgNDAwMCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IF90b2dnbGVBY3RpdmUgPSAoZWxlbWVudElEKSA9PntcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoZWxlbWVudElEKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk/IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykgOiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldHVwTmV3UHJvamVjdCA9ICgpPT57XG4gICAgICAgIF90b2dnbGVBY3RpdmUoJyNhZGQtcHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgX3RvZ2dsZUFjdGl2ZSgnI2FkZC1wcm9qZWN0LWJ1dHRvbi10ZXh0Jyk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2pJbnB1dENvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgJ25ldy1wcm9qLWlucHV0LWNvbnRhaW5lcicsICdpbnB1dC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgbmV3UHJvaklucHV0ID0gX21ha2VOZXdFbGVtZW50KCdpbnB1dCcsICduZXctcHJvai1pbnB1dCcsICcnLCcnLHt0eXBlOid0ZXh0J30sIHt2YWx1ZTonUHJvamVjdCBUaXRsZSd9ICk7XG4gICAgICAgIGNvbnN0IG5ld1Byb2pBZGRCdXR0b24gPSBfbWFrZU5ld0VsZW1lbnQoJ2J1dHRvbicsICduZXctcHJvai1hZGQtYnV0dG9uJywgJ2FkZC1idXR0b24nLCAnU3VibWl0Jyk7XG5cbiAgICAgICAgbmV3UHJvaklucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2pJbnB1dCk7XG4gICAgICAgIG5ld1Byb2pJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qQWRkQnV0dG9uKTtcblxuICAgICAgICBnZXRFbGVtZW50KCcjYWRkLXByb2plY3QtYnV0dG9uLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKG5ld1Byb2pJbnB1dENvbnRhaW5lcik7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFkZFByb2plY3RTdWJtaXNzaW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IGNhbmNlbE5ld1Byb2plY3QgPSAoKT0+e1xuICAgICAgICBfdG9nZ2xlQWN0aXZlKCcjYWRkLXByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIF90b2dnbGVBY3RpdmUoJyNhZGQtcHJvamVjdC1idXR0b24tdGV4dCcpO1xuICAgICAgICBfcmVtb3ZlRWxlbWVudChcIiNuZXctcHJvai1pbnB1dC1jb250YWluZXJcIik7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUFkZEJ1dHRvbigpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0TmV3UHJvakluZm8gPSAoKT0+e1xuICAgICAgICByZXR1cm4ge3RpdGxlOkRPTU1hbmlwLmdldEVsZW1lbnQoJyNuZXctcHJvai1pbnB1dCcpLnZhbHVlfTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY2hlY2tOZXdQcm9qZWN0ID0gKGUsIHByb2plY3QpPT57XG4gICAgICAgIGxldCBlcnJvck1lc3NhZ2VzID0gW107XG4gICAgICAgIGlmKHByb2plY3QudGl0bGUgPT0gJycpe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKCdQbGVhc2UgZW50ZXIgYSB0aXRsZSBmb3IgdGhlIHByb2plY3QnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihlcnJvck1lc3NhZ2VzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgX2Rpc3BsYXlFcnJvcnMoZSwgZXJyb3JNZXNzYWdlcywgJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBjb25zdCBfcmVtb3ZlU3ViRW50cmllcyA9IChlbGVtZW50KT0+e1xuICAgICAgICBmb3IobGV0IGkgPSBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpID4gMjsgaS0tKXtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1tpLTFdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IF9yZXZlYWxBcnJheSA9IChwYXJlbnQsIGFycmF5LCB0eXBlKT0+e1xuICAgICAgICBfcmVtb3ZlU3ViRW50cmllcyhwYXJlbnQpO1xuICAgICAgICBhcnJheS5mb3JFYWNoKChwcm9qLCBpbmRleCk9PiBwYXJlbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBfbWFrZU5ld0VsZW1lbnQoJ2RpdicsIGAke3R5cGV9LSR7aW5kZXh9YCwgYCR7dHlwZX0tc2lkZS1sYWJlbGAsIHByb2ouZ2V0VGl0bGUoKSwgeydkYXRhLWluZGV4JzogYCR7aW5kZXh9YH0pKSlcbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0VG9MaXN0ID0gKCk9PntcbiAgICAgICAgX3JlbW92ZUVsZW1lbnQoXCIjbmV3LXByb2otaW5wdXQtY29udGFpbmVyXCIpO1xuICAgICAgICBfdG9nZ2xlQWN0aXZlKCcjYWRkLXByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIF90b2dnbGVBY3RpdmUoJyNhZGQtcHJvamVjdC1idXR0b24tdGV4dCcpO1xuICAgICAgICBfcmV2ZWFsQXJyYXkoZ2V0RWxlbWVudCgnI3Byb2plY3RzLXNpZGUnKS5wYXJlbnRFbGVtZW50LCBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKCksICdwcm9qZWN0Jyk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUFkZEJ1dHRvbigpO1xuICAgICAgICBFdmVudEhhbmRsZXIuYWN0aXZhdGVQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cGFuZFRvZ2dsZSA9IChlKT0+e1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IHR5cGUgPSAnJztcbiAgICAgICAgaWYoZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCA9PSAncHJvamVjdHMtc2lkZScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFycmF5ID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpO1xuICAgICAgICAgICAgdHlwZSA9ICdwcm9qZWN0JztcbiAgICAgICAgfVxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlZCcpKXtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NlZCcpXG4gICAgICAgICAgICBfcmV2ZWFsQXJyYXkoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LCBhcnJheSwgdHlwZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2xvc2VkJyk7XG4gICAgICAgICAgICBfcmVtb3ZlU3ViRW50cmllcyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IF9tYXJrU2VsZWN0ZWRQcm9qZWN0ID0gKGUpPT57XG4gICAgICAgIGdldEVsZW1lbnRzKFwiLnByb2plY3Qtc2lkZS1sYWJlbFwiKS5mb3JFYWNoKGVsZT0+ZWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIH1cblxuICAgIGNvbnN0IF9kaXNwbGF5VGFza0lucHV0ID0gKCk9PntcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGdldEVsZW1lbnQoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gX21ha2VOZXdFbGVtZW50KCdkaXYnLCAnYWRkLXRhc2stY29udGFpbmVyJywgJ2lucHV0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhZGRUYXNrTmFtZSA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCAnYWRkLXRhc2stbmFtZS1pbnB1dCcsICdhZGQtdGFzay1pbmZvJywnJyx7dHlwZTondGV4dCd9LCB7dmFsdWU6J1Rhc2sgTmFtZSd9KTtcbiAgICAgICAgY29uc3QgYWRkVGFza0Rlc2NyaXB0aW9uID0gX21ha2VOZXdFbGVtZW50KCdpbnB1dCcsICdhZGQtdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcsICdhZGQtdGFzay1pbmZvJywnJyx7dHlwZTondGV4dCd9LCB7dmFsdWU6J1Rhc2sgRGVzY3JpcHRpb24nfSk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tEYXRlID0gX21ha2VOZXdFbGVtZW50KCdpbnB1dCcsICdhZGQtdGFzay1kYXRlLWlucHV0JywgJ2FkZC10YXNrLWluZm8nLCdEdWUgRGF0ZScse3R5cGU6J2RhdGUnfSk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eSA9IF9tYWtlTmV3RWxlbWVudCgnc2VsZWN0JywgJ2FkZC10YXNrLXByaW9yaXR5LWlucHV0JywgJ2FkZC10YXNrLWluZm8nLCcnKTtcbiAgICAgICAgY29uc3QgYWRkVGFza1ByaW9yaXR5RGVmYXVsdCA9IF9tYWtlTmV3RWxlbWVudCgnb3B0aW9uJywnJywnJywnUHJpb3JpdHknLCB7dmFsdWU6MH0gKTtcbiAgICAgICAgY29uc3QgYWRkVGFza1ByaW9yaXR5TG93ID0gX21ha2VOZXdFbGVtZW50KCdvcHRpb24nLCcnLCcnLCdMb3cnLCB7dmFsdWU6J0xvdyd9LHtzdHlsZTonYmFja2dyb3VuZC1jb2xvcjojRTFBREFEJ30pO1xuICAgICAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHlNZWRpdW0gPSBfbWFrZU5ld0VsZW1lbnQoJ29wdGlvbicsJycsJycsJ01lZGl1bScsIHt2YWx1ZTpcIk1lZGl1bVwifSwge3N0eWxlOidiYWNrZ3JvdW5kLWNvbG9yOiNFRkVGMzgnfSk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eUhpZ2ggPSBfbWFrZU5ld0VsZW1lbnQoJ29wdGlvbicsJycsJycsJ0hpZ2gnLCB7dmFsdWU6XCJIaWdoXCJ9LCB7c3R5bGU6J2JhY2tncm91bmQtY29sb3I6IzlEQ0Q4RCd9KTtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IF9tYWtlTmV3RWxlbWVudCgnYnV0dG9uJywgJ2FkZC10YXNrLWJ1dHRvbicsICdhZGQtYnV0dG9uJywgJ0FkZCBOZXcgVGFzaycpO1xuXG4gICAgICAgIGFkZFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHlEZWZhdWx0KTtcbiAgICAgICAgYWRkVGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eUxvdyk7XG4gICAgICAgIGFkZFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHlNZWRpdW0pO1xuICAgICAgICBhZGRUYXNrUHJpb3JpdHkuYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5SGlnaCk7XG5cbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrTmFtZSk7XG4gICAgICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrRGF0ZSk7XG4gICAgICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5KTtcbiAgICAgICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlQWRkVGFza0J1dHRvbigpO1xuICAgIH1cbiAgICBjb25zdCBzaG93UHJvamVjdCA9IChlKT0+e1xuICAgICAgICBfbWFya1NlbGVjdGVkUHJvamVjdChlKTtcbiAgICAgICAgY29uc3QgbWFpbkRpc3BsYXkgPSBnZXRFbGVtZW50KCcjbWFpbi1kaXNwbGF5Jyk7XG5cbiAgICAgICAgLy90aGlzIGNhbiBnZXQgcmVtb3ZlZCBhZnRlciBUb2RheSdzIFRhc2tzIGlzIHdvcmtpbmdcbiAgICAgICAgaWYobWFpbkRpc3BsYXkuY2hpbGROb2Rlcy5sZW5ndGggPjApe1xuICAgICAgICAgICAgbWFpbkRpc3BsYXkuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyoqKioqXG5cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtlLnRhcmdldC5pZC5jaGFyQXQoZS50YXJnZXQuaWQubGVuZ3RoLTEpfS1jb250YWluZXJgLCAncHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gX21ha2VOZXdFbGVtZW50KCdkaXYnLCBgcHJvamVjdC0ke2UudGFyZ2V0LmRhdGFzZXQuaW5kZXh9LXRpdGxlYCwgJ3Byb2plY3QtdGl0bGUnLCBgJHtwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbZS50YXJnZXQuZGF0YXNldC5pbmRleF0uZ2V0VGl0bGUoKX1gKVxuICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtlLnRhcmdldC5kYXRhc2V0LmluZGV4fS10YXNrcy1jb250YWluZXJgLCAndGFza3MtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tzV3JhcHBlciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtlLnRhcmdldC5kYXRhc2V0LmluZGV4fS10YXNrcy13cmFwcGVyYCwgJ3Rhc2tzLXdyYXBwZXInKVxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHRhc2tzV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcilcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrc1dyYXBwZXIpO1xuICAgICAgICBtYWluRGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgX2Rpc3BsYXlUYXNrSW5wdXQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUYXNrSW5mbyA9IChpbmRleCk9PntcbiAgICAgICAgbGV0IGZvcm1JbmZvO1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gZ2V0RWxlbWVudCgnLnNlbGVjdGVkJykuZGF0YXNldC5pbmRleDtcbiAgICAgICAgaWYoaW5kZXggPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGZvcm1JbmZvID0gZ2V0RWxlbWVudHMoJy5hZGQtdGFzay1pbmZvJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZm9ybUluZm8gPSBnZXRFbGVtZW50cyhgI3Byb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7aW5kZXh9LWNvbnRhaW5lciAuZWRpdC10YXNrLWluZm9gKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7bmFtZTpmb3JtSW5mb1swXS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZm9ybUluZm9bMV0udmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0ZTogZm9ybUluZm9bMl0udmFsdWUsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IGZvcm1JbmZvWzNdLnZhbHVlLFxuICAgICAgICAgICAgICAgIHByb2plY3Q6IHByb2plY3ROdW1iZXJ9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrTmV3VGFzayA9IChlLCB0YXNrKT0+e1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlcyA9IFtdO1xuICAgICAgICBpZih0YXNrLm5hbWUgPT0gJycpe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKCdQbGVhc2UgZW50ZXIgYSBuYW1lIGZvciB0aGUgdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRhc2suZGVzY3JpcHRpb24gPT0gJycpe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKCdQbGVhc2UgZW50ZXIgYSBkZXNjcmlwdGlvbiBmb3IgdGhlIHRhc2snKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0YXNrLmRhdGUgPT0gJycpe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKCdQbGVhc2UgZW50ZXIgYSBkdWUgZGF0ZSBmb3IgdGhlIHRhc2snKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0YXNrLnByaW9yaXR5ID09IDApe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5wdXNoKCdQbGVhc2UgZW50ZXIgYSBwcmlvcml0eSBsZXZlbCBmb3IgdGhlIHRhc2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBfZGlzcGxheUVycm9ycyhlLCBlcnJvck1lc3NhZ2VzLCAndGFzaycpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrVG9MaXN0ID0gKCk9PntcbiAgICAgICAgY29uc3QgdGFza3NDb250YWluZXIgPSBnZXRFbGVtZW50KCcudGFza3MtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROdW1iZXIgPSBnZXRFbGVtZW50KCcuc2VsZWN0ZWQnKS5kYXRhc2V0LmluZGV4O1xuICAgICAgICBjb25zdCB0YXNrTnVtYmVyID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpW3Byb2plY3ROdW1iZXJdLnRhc2tzLmxlbmd0aC0xO1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpW3Byb2plY3ROdW1iZXJdLnRhc2tzW3Rhc2tOdW1iZXJdO1xuXG4gICAgICAgIGdldEVsZW1lbnQoJyNhZGQtdGFzay1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0NvbnRhaW5lciA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tY29udGFpbmVyYCwgJ3Rhc2stY29udGFpbmVyJywgJycsIHsnZGF0YS1wcmlvcml0eSc6bmV3VGFzay5nZXRQcmlvcml0eSgpfSx7XCJkYXRhLXRhc2tcIjp0YXNrTnVtYmVyfSk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tDaGVja2JveCA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jaGVja2JveGAsICd0YXNrLWNoZWNrYm94JywgJycsIHt0eXBlOidjaGVja2JveCd9LCB7J2RhdGEtcHJvamVjdCc6cHJvamVjdE51bWJlcn0sIHsnZGF0YS10YXNrJzp0YXNrTnVtYmVyfSk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tOYW1lID0gX21ha2VOZXdFbGVtZW50KCdkaXYnLCBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1uYW1lYCwgJ3Rhc2stbmFtZSB0YXNrLWluZm8nLCBuZXdUYXNrLmdldE5hbWUoKSk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZGVzY3JpcHRpb25gLCAndGFzay1kZXNjcmlwdGlvbiB0YXNrLWluZm8nLCBuZXdUYXNrLmdldERlc2NyaXB0aW9uKCkpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRGF0ZSA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZGF0ZWAsICd0YXNrLWRhdGUgdGFzay1pbmZvJywgbmV3VGFzay5nZXREYXRlKCkpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRWRpdEJ1dHRvbiA9IF9tYWtlTmV3RWxlbWVudCgnYnV0dG9uJywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZWRpdC1idXR0b25gLCAndGFzay1idXR0b24nKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0VkaXRJY29uID0gX21ha2VOZXdFbGVtZW50KCdpJywgJycsICdmYS1zb2xpZCBmYS1wZW5jaWwgZWRpdC1pY29uJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tFZGl0VGV4dCA9X21ha2VOZXdFbGVtZW50KCdzcGFuJywgJycsICdlZGl0LXRleHQnLCAnRWRpdCBUYXNrJylcblxuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tDaGVja2JveCk7XG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza05hbWUpO1xuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIG5ld1Rhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0RhdGUpO1xuICAgICAgICBuZXdUYXNrRWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChuZXdUYXNrRWRpdEljb24pO1xuICAgICAgICBuZXdUYXNrRWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChuZXdUYXNrRWRpdFRleHQpO1xuICAgICAgICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2tFZGl0QnV0dG9uKTtcbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGFza0NvbnRhaW5lcik7XG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUVkaXRCdXR0b24obmV3VGFza0VkaXRCdXR0b24pO1xuXG4gICAgICAgIF9kaXNwbGF5VGFza0lucHV0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUVkaXRUYXNrID0gZT0+e1xuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBwcm9qZWN0TnVtYmVyID0gZ2V0RWxlbWVudCgnLnNlbGVjdGVkJykuZGF0YXNldC5pbmRleDtcbiAgICAgICAgY29uc3QgdGFza051bWJlciA9IGVkaXRCdXR0b24ucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2s7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrID0gcHJvamVjdEZ1bmN0aW9ucy5nZXRBbGxQcm9qZWN0cygpW3Byb2plY3ROdW1iZXJdLnRhc2tzW3Rhc2tOdW1iZXJdO1xuXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrTmFtZSA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCAnZWRpdC10YXNrLW5hbWUtaW5wdXQnLCAnZWRpdC10YXNrLWluZm8nLCcnLHt0eXBlOid0ZXh0J30sIHt2YWx1ZTplZGl0VGFzay5nZXROYW1lKCl9KTtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbiA9IF9tYWtlTmV3RWxlbWVudCgnaW5wdXQnLCAnZWRpdC10YXNrLWRlc2NyaXB0aW9uLWlucHV0JywgJ2VkaXQtdGFzay1pbmZvJywnJyx7dHlwZTondGV4dCd9LCB7dmFsdWU6ZWRpdFRhc2suZ2V0RGVzY3JpcHRpb24oKX0pO1xuICAgICAgICBjb25zdCBlZGl0VGFza0RhdGUgPSBfbWFrZU5ld0VsZW1lbnQoJ2lucHV0JywgJ2VkaXQtdGFzay1kYXRlLWlucHV0JywgJ2VkaXQtdGFzay1pbmZvJywnRHVlIERhdGUnLHt0eXBlOidkYXRlJ30sIHt2YWx1ZTplZGl0VGFzay5nZXREYXRlKCl9KTtcbiAgICAgICAgY29uc3QgZWRpdFRhc2tQcmlvcml0eSA9IF9tYWtlTmV3RWxlbWVudCgnc2VsZWN0JywgJ2VkaXQtdGFzay1wcmlvcml0eS1pbnB1dCcsICdlZGl0LXRhc2staW5mbycsJycpO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5TG93ID0gX21ha2VOZXdFbGVtZW50KCdvcHRpb24nLCcnLCcnLCdMb3cnLCB7dmFsdWU6J0xvdyd9LHtzdHlsZTonYmFja2dyb3VuZC1jb2xvcjojRTFBREFEJ30pO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5TWVkaXVtID0gX21ha2VOZXdFbGVtZW50KCdvcHRpb24nLCcnLCcnLCdNZWRpdW0nLCB7dmFsdWU6XCJNZWRpdW1cIn0sIHtzdHlsZTonYmFja2dyb3VuZC1jb2xvcjojRUZFRjM4J30pO1xuICAgICAgICBjb25zdCBlZGl0VGFza1ByaW9yaXR5SGlnaCA9IF9tYWtlTmV3RWxlbWVudCgnb3B0aW9uJywnJywnJywnSGlnaCcsIHt2YWx1ZTpcIkhpZ2hcIn0sIHtzdHlsZTonYmFja2dyb3VuZC1jb2xvcjojOURDRDhEJ30pO1xuICAgICAgICBcbiAgICAgICAgaWYoZWRpdFRhc2suZ2V0UHJpb3JpdHkoKSA9PSAnTG93Jyl7XG4gICAgICAgICAgICBlZGl0VGFza1ByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKVxuICAgICAgICB9ZWxzZSBpZihlZGl0VGFzay5nZXRQcmlvcml0eSgpID09ICdNZWRpdW0nKXtcbiAgICAgICAgICAgIGVkaXRUYXNrUHJpb3JpdHlNZWRpdW0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpXG4gICAgICAgIH1lbHNlIGlmKGVkaXRUYXNrLmdldFByaW9yaXR5KCkgPT0gJ0hpZ2gnKXtcbiAgICAgICAgICAgIGVkaXRUYXNrUHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIGdldEVsZW1lbnRzKGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jb250YWluZXIgLnRhc2staW5mb2ApLmZvckVhY2goZWxlPT5lbGUucmVtb3ZlKCkpXG5cbiAgICAgICAgZWRpdFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChlZGl0VGFza1ByaW9yaXR5TG93KTtcbiAgICAgICAgZWRpdFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChlZGl0VGFza1ByaW9yaXR5TWVkaXVtKTtcbiAgICAgICAgZWRpdFRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChlZGl0VGFza1ByaW9yaXR5SGlnaCk7XG5cbiAgICAgICAgY29uc3QgZWRpdENhbmNlbEJ1dHRvbiA9IF9tYWtlTmV3RWxlbWVudCgnYnV0dG9uJywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZWRpdC1jYW5jZWwtYnV0dG9uYCwgJ3Rhc2stYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGVkaXRDYW5jZWxJY29uID0gX21ha2VOZXdFbGVtZW50KCdpJywgJycsICdmYS1zb2xpZCBmYS14bWFyayBlZGl0LWNhbmNlbC1pY29uJyk7XG4gICAgICAgIGNvbnN0IGVkaXRDYW5jZWxUZXh0ID1fbWFrZU5ld0VsZW1lbnQoJ3NwYW4nLCAnJywgJ2VkaXQtY2FuY2VsLXRleHQnLCAnQ2FuY2VsJylcblxuICAgICAgICBlZGl0Q2FuY2VsQnV0dG9uLmFwcGVuZENoaWxkKGVkaXRDYW5jZWxJY29uKTtcbiAgICAgICAgZWRpdENhbmNlbEJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0Q2FuY2VsVGV4dCk7XG5cbiAgICAgICAgY29uc3QgZWRpdFRhc2tDb250YWluZXIgPSBnZXRFbGVtZW50KGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jb250YWluZXJgKVxuICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tOYW1lLCBlZGl0VGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgZWRpdFRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrRGVzY3JpcHRpb24sIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoZWRpdFRhc2tEYXRlLCBlZGl0VGFza0NvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgZWRpdFRhc2tDb250YWluZXIuaW5zZXJ0QmVmb3JlKGVkaXRUYXNrUHJpb3JpdHksIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0Q2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBlZGl0QnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXBlbmNpbCcpO1xuICAgICAgICBlZGl0QnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2ZhLWNoZWNrJyk7XG4gICAgICAgIGVkaXRCdXR0b24ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IFwiQ29uZmlybVwiO1xuXG4gICAgICAgIEV2ZW50SGFuZGxlci5hY3RpdmF0ZUNvbmZpcm1FZGl0KGVkaXRCdXR0b24pO1xuXG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVGFza0xpc3QgPSAodGFza051bWJlcik9PntcbiAgICAgICAgY29uc3QgcHJvamVjdE51bWJlciA9IGdldEVsZW1lbnQoJy5zZWxlY3RlZCcpLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQ29udGFpbmVyID0gZ2V0RWxlbWVudChgI3Byb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tY29udGFpbmVyYClcbiAgICAgICAgY29uc3QgZWRpdEZpZWxkcyA9IGdldEVsZW1lbnRzKGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1jb250YWluZXIgLmVkaXQtdGFzay1pbmZvYClcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2sgPSBwcm9qZWN0RnVuY3Rpb25zLmdldEFsbFByb2plY3RzKClbcHJvamVjdE51bWJlcl0udGFza3NbdGFza051bWJlcl07XG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBnZXRFbGVtZW50KGAjcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1lZGl0LWJ1dHRvbmApO1xuICAgICAgICBlZGl0RmllbGRzLmZvckVhY2goZWxlPT5lbGUucmVtb3ZlKCkpO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUYXNrTmFtZSA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tbmFtZWAsICd0YXNrLW5hbWUgdGFzay1pbmZvJywgdXBkYXRlZFRhc2suZ2V0TmFtZSgpKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2tEZXNjcmlwdGlvbiA9IF9tYWtlTmV3RWxlbWVudCgnZGl2JywgYHByb2plY3QtJHtwcm9qZWN0TnVtYmVyfS10YXNrLSR7dGFza051bWJlcn0tZGVzY3JpcHRpb25gLCAndGFzay1kZXNjcmlwdGlvbiB0YXNrLWluZm8nLCB1cGRhdGVkVGFzay5nZXREZXNjcmlwdGlvbigpKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2tEYXRlID0gX21ha2VOZXdFbGVtZW50KCdkaXYnLCBgcHJvamVjdC0ke3Byb2plY3ROdW1iZXJ9LXRhc2stJHt0YXNrTnVtYmVyfS1kYXRlYCwgJ3Rhc2stZGF0ZSB0YXNrLWluZm8nLCB1cGRhdGVkVGFzay5nZXREYXRlKCkpO1xuXG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZSh1cGRhdGVkVGFza05hbWUsIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBlZGl0VGFza0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodXBkYXRlZFRhc2tEZXNjcmlwdGlvbiwgZWRpdFRhc2tDb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIGVkaXRUYXNrQ29udGFpbmVyLmluc2VydEJlZm9yZSh1cGRhdGVkVGFza0RhdGUsIGVkaXRUYXNrQ29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICBcbiAgICAgICAgZWRpdFRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXByaW9yaXR5JywgdXBkYXRlZFRhc2suZ2V0UHJpb3JpdHkoKSlcblxuICAgICAgICBlZGl0QnV0dG9uLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNoZWNrJyk7XG4gICAgICAgIGVkaXRCdXR0b24uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmFkZCgnZmEtcGVuY2lsJyk7XG4gICAgICAgIGVkaXRCdXR0b24ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLmFjdGl2YXRlRWRpdEJ1dHRvbihlZGl0QnV0dG9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYW5jZWxFZGl0ID0gKGUpPT57XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge2dldEVsZW1lbnQsIGdldEVsZW1lbnRzLCBmaXhTdGFydGluZ0FuaW1hdGlvbnMsY2hlY2tOZXdQcm9qZWN0LCBzZXR1cE5ld1Byb2plY3QsIGNhbmNlbE5ld1Byb2plY3QsXG4gICAgICAgICBnZXROZXdQcm9qSW5mbywgYWRkUHJvamVjdFRvTGlzdCwgZXhwYW5kVG9nZ2xlLCBzaG93UHJvamVjdCwgZ2V0VGFza0luZm8sIGNoZWNrTmV3VGFzaywgXG4gICAgICAgICBhZGRUYXNrVG9MaXN0LCBkaXNwbGF5RWRpdFRhc2ssIHVwZGF0ZVRhc2tMaXN0LCBjYW5jZWxFZGl0fVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTWFuaXA7IiwiaW1wb3J0IERPTU1hbmlwIGZyb20gXCIuL0RPTU1hbmlwXCI7XG5pbXBvcnQgeyBwcm9qZWN0RnVuY3Rpb25zIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgRXZlbnRIYW5kbGVyID0gKCgpPT57XG4gICAgY29uc3QgYWN0aXZhdGVBZGRCdXR0b24gPSAoKT0+e1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIERPTU1hbmlwLmNhbmNlbE5ld1Byb2plY3QpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTU1hbmlwLnNldHVwTmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5pdFN0YXJ0aW5nTGlzdGVuZXJzID0gKCk9PntcbiAgICAgICAgYWN0aXZhdGVBZGRCdXR0b24oKTtcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoJy5kcm9wZG93bi10b2dnbGUnKS5mb3JFYWNoKGVsZSA9PmVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTU1hbmlwLmV4cGFuZFRvZ2dsZSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFByb2plY3RTdWJtaXNzaW9uID0gKCk9PntcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudChcIiNhZGQtcHJvamVjdC1idXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01NYW5pcC5zZXR1cE5ld1Byb2plY3QpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KFwiI2FkZC1wcm9qZWN0LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIERPTU1hbmlwLmNhbmNlbE5ld1Byb2plY3QpO1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KCcjbmV3LXByb2otYWRkLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdEZ1bmN0aW9ucy5hZGRQcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZVByb2plY3RzID0gKCk9PntcbiAgICAgICAgRE9NTWFuaXAuZ2V0RWxlbWVudHMoJy5wcm9qZWN0LXNpZGUtbGFiZWwnKS5mb3JFYWNoKGVsZT0+ZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NTWFuaXAuc2hvd1Byb2plY3QpKTtcblxuICAgIH1cbiAgICBjb25zdCBhY3RpdmF0ZUFkZFRhc2tCdXR0b24gPSAoKT0+e1xuICAgICAgICBET01NYW5pcC5nZXRFbGVtZW50KCcjYWRkLXRhc2stYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RnVuY3Rpb25zLmFkZFRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2YXRlRWRpdEJ1dHRvbiA9IGJ1dHRvbj0+e1xuICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0RnVuY3Rpb25zLmNvbmZpcm1FZGl0KTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NTWFuaXAuZGlzcGxheUVkaXRUYXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmF0ZUNvbmZpcm1FZGl0ID0gYnV0dG9uPT57XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIERPTU1hbmlwLmRpc3BsYXlFZGl0VGFzayk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RGdW5jdGlvbnMuY29uZmlybUVkaXQpO1xuICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NTWFuaXAuY2FuY2VsRWRpdCk7XG5cbiAgICB9XG5cbiAgICByZXR1cm57YWN0aXZhdGVBZGRCdXR0b24sIGluaXRTdGFydGluZ0xpc3RlbmVycywgYWRkUHJvamVjdFN1Ym1pc3Npb24sIGFjdGl2YXRlUHJvamVjdHMsIFxuICAgICAgICBhY3RpdmF0ZUFkZFRhc2tCdXR0b24sIGFjdGl2YXRlRWRpdEJ1dHRvbiwgYWN0aXZhdGVDb25maXJtRWRpdH07XG59KSgpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRIYW5kbGVyOyIsImV4cG9ydCBjbGFzcyBQcm9qZWN0e1xuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0VGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gaW5pdFRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGdldFRpdGxlKCl7cmV0dXJuIHRoaXMudGl0bGU7fVxuICAgIGdldFRhc2tzKCl7cmV0dXJuIHRoaXMudGFza3M7fVxuICAgIGlzQ29tcGxldGVkKCl7cmV0dXJuIHRoaXMuY29tcGxldGVkO31cbiAgICBzZXRUaXRsZShuZXdUaXRsZSl7dGhpcy50aXRsZSA9IG5ld1RpdGxlO31cbiAgICBhZGRUYXNrKG5ld1Rhc2spe3RoaXMudGFza3MucHVzaChuZXdUYXNrKTt9XG4gICAgbWFya0NvbXBsZXRlKCl7dGhpcy5jb21wbGV0ZWQgPSB0cnVlO31cbn0iLCJjbGFzcyBUYXNre1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgcHJvamVjdCl7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5fbm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuX2NvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBnZXROYW1lID0gKCk9PnRoaXMuX25hbWVcbiAgICBnZXREZXNjcmlwdGlvbiA9ICgpPT50aGlzLl9kZXNjcmlwdGlvblxuICAgIGdldERhdGUgPSAoKT0+dGhpcy5fZHVlRGF0ZVxuICAgIGdldFByaW9yaXR5ID0gKCk9PnRoaXMuX3ByaW9yaXR5XG4gICAgZ2V0Tm90ZXMgPSAoKT0+dGhpcy5fbm90ZXNcbiAgICBnZXRQcm9qZWN0ID0gKCk9PnRoaXMuX3Byb2plY3RcbiAgICBpc0NvbXBsZXRlID0gKCk9PnRoaXMuX2NvbXBsZXRlZFxuXG4gICAgc2V0TmFtZSA9IChuZXdOYW1lKT0+dGhpcy5fbmFtZSA9IG5ld05hbWVcbiAgICBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbik9PnRoaXMuX2Rlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cbiAgICBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpPT50aGlzLl9kdWVEYXRlID0gbmV3RHVlRGF0ZVxuICAgIHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KT0+dGhpcy5fcHJpb3JpdHkgPSBuZXdQcmlvcml0eVxuICAgIHNldE5vdGVzID0gKG5ld05vdGVzKT0+dGhpcy5fbm90ZXMgPSBuZXdOb3Rlc1xuICAgIG1hcmtDb21wbGV0ZSA9ICgpPT50aGlzLl9jb21wbGV0ZWQgPSB0cnVlXG59XG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgRE9NTWFuaXAgZnJvbSAnLi9ET01NYW5pcCc7XG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vRXZlbnRIYW5kbGVyJztcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzay5qcydcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL1Byb2plY3QnO1xuXG5jb25zdCBwcm9qZWN0RnVuY3Rpb25zID0gKCgpPT57XG5cbiAgICBjb25zdCBfYWxsUHJvamVjdHMgPSBbXTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoZSk9PntcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEluZm8gPSBET01NYW5pcC5nZXROZXdQcm9qSW5mbygpO1xuICAgICAgICBjb25zdCBnb29kVGFzayA9IERPTU1hbmlwLmNoZWNrTmV3UHJvamVjdChlLG5ld1Byb2plY3RJbmZvKTtcbiAgICAgICAgaWYoZ29vZFRhc2spe1xuICAgICAgICAgICAgX2FsbFByb2plY3RzLnB1c2gobmV3IFByb2plY3QobmV3UHJvamVjdEluZm8udGl0bGUpKTtcbiAgICAgICAgICAgIERPTU1hbmlwLmFkZFByb2plY3RUb0xpc3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhZGRUYXNrID0gKGUpPT57XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tJbmZvID0gRE9NTWFuaXAuZ2V0VGFza0luZm8oKTtcbiAgICAgICAgY29uc3QgZ29vZFRhc2sgPSBET01NYW5pcC5jaGVja05ld1Rhc2soZSwgbmV3VGFza0luZm8pO1xuICAgICAgICBpZihnb29kVGFzayl7XG4gICAgICAgICAgICBfYWxsUHJvamVjdHNbbmV3VGFza0luZm8ucHJvamVjdF0udGFza3MucHVzaChuZXcgVGFzayhuZXdUYXNrSW5mby5uYW1lLCBuZXdUYXNrSW5mby5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgbmV3VGFza0luZm8uZGF0ZSwgbmV3VGFza0luZm8ucHJpb3JpdHksICcnLCBuZXdUYXNrSW5mby5wcm9qZWN0KSk7XG4gICAgICAgICAgICBET01NYW5pcC5hZGRUYXNrVG9MaXN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY29uZmlybUVkaXQgPSAoZSk9PntcbiAgICAgICAgY29uc3QgZWRpdFRhc2sgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnRhc2s7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrSW5mbyA9IERPTU1hbmlwLmdldFRhc2tJbmZvKGVkaXRUYXNrKTtcbiAgICAgICAgY29uc3QgZ29vZFRhc2sgPSBET01NYW5pcC5jaGVja05ld1Rhc2soZSwgZWRpdFRhc2tJbmZvKTtcbiAgICAgICAgaWYoZ29vZFRhc2spe1xuICAgICAgICAgICAgX2FsbFByb2plY3RzW2VkaXRUYXNrSW5mby5wcm9qZWN0XS50YXNrc1tlZGl0VGFza109bmV3IFRhc2soZWRpdFRhc2tJbmZvLm5hbWUsIGVkaXRUYXNrSW5mby5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tJbmZvLmRhdGUsIGVkaXRUYXNrSW5mby5wcmlvcml0eSwgJycsIGVkaXRUYXNrSW5mby5wcm9qZWN0KTtcbiAgICAgICAgICAgIERPTU1hbmlwLnVwZGF0ZVRhc2tMaXN0KGVkaXRUYXNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEFsbFByb2plY3RzID0gKCk9PntcbiAgICAgICAgcmV0dXJuIF9hbGxQcm9qZWN0cy5tYXAoZWxlPT5lbGUpO1xuICAgIH1cblxuICAgIHJldHVybnthZGRQcm9qZWN0LCBhZGRUYXNrLCBjb25maXJtRWRpdCwgZ2V0QWxsUHJvamVjdHN9XG5cbn0pKCk7XG5cbmNvbnN0IGluaXRXZWJzaXRlID0gKCgpPT57XG4gICAgc2V0VGltZW91dChET01NYW5pcC5maXhTdGFydGluZ0FuaW1hdGlvbnMsIDEpO1xuICAgIEV2ZW50SGFuZGxlci5pbml0U3RhcnRpbmdMaXN0ZW5lcnMoKTtcbn0pKCk7XG5cbmV4cG9ydCB7cHJvamVjdEZ1bmN0aW9uc307XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==