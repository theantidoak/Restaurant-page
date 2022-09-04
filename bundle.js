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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/firestarter-webfont.woff2 */ "./src/fonts/firestarter-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/firestarter-webfont.woff */ "./src/fonts/firestarter-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/brisket.jpg */ "./src/images/brisket.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! images/bottomGrill.svg */ "./src/images/bottomGrill.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! images/topGrill.svg */ "./src/images/topGrill.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'firestarterregular';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n\n/* Header */\n\n:root {\n    background-color: black;\n    height: 100vh;\n    width: 100%;\n    overflow-y: auto;\n}\n\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    margin: 0;\n    height: 100vh;\n    width: 100%;\n    padding-bottom: 2rem;\n    overflow-y: auto;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .7);\n    width: 100%;\n    height: 8rem;\n    position: relative;\n}\n\n.title {\n    flex-basis: 40%;\n    color: red;\n    border-bottom: 2px double red;\n    padding-bottom: 4px;\n    padding-top: 1rem;\n    margin: 0 0 0 clamp(.5rem, 5% ,3.5rem);\n    width: fit-content;\n    min-width: 13rem;\n    max-width: 20rem;\n    height: 3rem;\n    font-family: 'firestarterregular';\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n.hamburgerGrill {\n    appearance: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    background-color: rgba(255, 0, 0, .6);\n    padding: 1rem 2rem 0 1.5rem;\n    margin-right: 0;\n    border-radius: 0;\n    right: 1rem;\n    position: absolute;\n    transform: scale(1);\n    min-width: 5rem;\n    min-height: 5rem;\n    z-index: 3;\n    cursor: pointer;\n    border-radius: 20px;\n}\n\n.hamburgerGrill:checked {\n    background-image: none;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    mask-size: contain;\n    -webkit-mask-size: contain;\n    mask-repeat: no-repeat;\n    -webkit-mask-repeat: no-repeat;\n    mask-position: center;\n    -webkit-mask-position: center;\n    \n    background-color: rgba(255, 0, 0, 1);\n    border-radius: 20px;\n    padding: 1rem 0 ;\n    margin-right: 1rem;\n    opacity: 1;\n}\n\n.hamburgerGrill:hover {\n    transform: scale(1.1);\n}\n\n.hamburgerGrill:checked + .open-hamburger {\n    opacity: 0;\n    pointer-events: none;\n    user-select: none;\n    transform: translateX(0);\n    transition: all ease .5s;\n}\n\n.open-hamburger {\n    height: 5rem;\n    width: fit-content;\n    opacity: 1;\n    right: 0;\n    top: 1.5rem;\n    padding: 0;\n    transform: translateX(-7.5rem);\n    transition: all ease .5s;\n    cursor: pointer;\n}\n\n.open-hamburger ul {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    width: 100%;\n    height: 100%;\n}\n\n.open-hamburger ul li {\n    background-color: rgba(255, 0, 0, .6);\n    height: 100%;\n    width: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 20px;\n}\n\n.open-hamburger ul li:hover {\n    transform: scale(1.1);\n}\n\n\n\n\n/*------ Grill -------*/\n.container {\n    opacity: .85;\n    height: fit-content;\n    width: clamp(20rem, 80%, 28rem);\n    padding: 1rem clamp(1rem, 10%, 4rem) 0;\n    background-color: rgba(0, 0, 0, .4);\n\n    margin: 1rem auto 0;\n    border-radius: 10px;\n    text-align: center;\n    color: red;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    box-shadow: 2px 2px 5px black;\n    overflow: hidden;\n}\n\n.first-text {\n    margin: 0 0 1rem 0;\n    padding: 0;\n    font-size: 1.5rem;\n    font-family: monospace;\n    z-index: 2;\n}\n\n#svg-object {\n    transition: all ease .5s;\n    z-index: 1;\n    \n}\n\n.grill-top:hover #svg-object {\n    transform: rotate(-.15turn) translate(-5%, -70%);\n}\n\n.grill-top:hover > h3 {\n    color: navy;\n    transform: scale(1.1);\n}\n\n.grill-top {\n    position: absolute;\n    top: 5rem;\n    left: 0;\n    right: 1.25rem;\n    margin: 0 auto;\n    width: fit-content;\n    z-index: 1;\n    cursor: pointer;\n}\n\n.grill-top h3 {\n    position: absolute;\n    top: 5.25rem;\n    left: 7.25rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n}\n\n.grill-bottom {\n    position: relative;\n    width: fit-content;\n    z-index: 0;\n    cursor: pointer;\n}\n\n.grill-bottom h3 {\n    position: absolute;\n    top: 12rem;\n    left: 7rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n}\n\n.grill-bottom:hover h3 {\n    color: #e25822;\n    transform: scale(1.1);\n}\n\n\n/* Menu */\n\n\n.menu-items {\n    display: grid;\n    gap: 2rem;\n}\n\n.menu-item {\n    /* background-image: url(images/brisketBasket.jpg);\n    background-repeat: no-repeat;\n    background-position: left;\n    background-size: contain; */\n    height: 25rem;\n    flex-direction: row;\n    flex-wrap: wrap-reverse;\n    justify-content: space-between;\n    font-size: 2.5rem;\n    background-color: rgba(0, 0, 0, .7);\n    padding: 1rem;\n    overflow-y: auto;\n}\n\n.menu-item img {\n    height: 15rem;\n    width: auto;\n    max-width: 13rem;\n    margin: 0 auto;\n}\n\n.menu-item p {\n    margin: 0 auto;\n    padding: 0;\n    width: clamp(9rem, 80%, 12rem);\n}\n\n/* About */\n\n.about {\n    padding-bottom: 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: 1.5rem;\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.about-section {\n    color: white;\n    line-height: 2rem;\n}\n\n.flex-container {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.container-contact {\n    padding: 1rem 1rem 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: 1.25rem;\n    width: clamp(20rem, 90%, 28rem)\n}\n\n.container-contact ul {\n    list-style: none;\n    color: white;\n    line-height: 2rem;\n    padding: 0;\n    margin: 1rem 0 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n\n@media screen and (max-width: 680px) {\n    .hamburgerGrill {\n        background-image: none;\n        mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n        -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n        mask-size: contain;\n        -webkit-mask-size: contain;\n        mask-repeat: no-repeat;\n        -webkit-mask-repeat: no-repeat;\n        mask-position: center;\n        -webkit-mask-position: center;\n        \n        background-color: rgba(255, 0, 0, 1);\n        border-radius: 20px;\n        padding: 1rem 0 ;\n        margin-right: 1rem;\n        opacity: 1;\n        position: absolute;\n        transform: scale(1);\n        min-width: 5rem;\n        min-height: 5rem;\n        z-index: 3;\n        cursor: pointer;\n    }\n\n    .hamburgerGrill:checked {\n        mask-image: none;\n        -webkit-mask-image: none;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n        position: static;\n        margin-right: 2rem;\n    }\n\n    .open-hamburger {\n        opacity: 0;\n        transform: translate(0, 0);\n        z-index: 3;\n        pointer-events: none;\n        user-select: none;\n        position: absolute;\n        right: 2rem;\n    }\n    .hamburgerGrill:checked + .open-hamburger {\n        pointer-events:all ;\n        user-select: all;\n        opacity: 1;\n        transform: translate(0, 13rem);\n        transition: all ease .5s;        \n        z-index: 4;\n    }\n    .open-hamburger ul {\n        flex-direction: column;\n    }\n    .open-hamburger ul li {\n        padding: 2rem;\n        background-color: rgb(255, 0, 0);\n        border-radius: 20px;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'firestarterregular';\n    src: url('fonts/firestarter-webfont.woff2') format('woff2'),\n         url('fonts/firestarter-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n\n/* Header */\n\n:root {\n    background-color: black;\n    height: 100vh;\n    width: 100%;\n    overflow-y: auto;\n}\n\nbody {\n    background-image: url('./images/brisket.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    margin: 0;\n    height: 100vh;\n    width: 100%;\n    padding-bottom: 2rem;\n    overflow-y: auto;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .7);\n    width: 100%;\n    height: 8rem;\n    position: relative;\n}\n\n.title {\n    flex-basis: 40%;\n    color: red;\n    border-bottom: 2px double red;\n    padding-bottom: 4px;\n    padding-top: 1rem;\n    margin: 0 0 0 clamp(.5rem, 5% ,3.5rem);\n    width: fit-content;\n    min-width: 13rem;\n    max-width: 20rem;\n    height: 3rem;\n    font-family: 'firestarterregular';\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n.hamburgerGrill {\n    appearance: none;\n    background-image: url('images/bottomGrill.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    background-color: rgba(255, 0, 0, .6);\n    padding: 1rem 2rem 0 1.5rem;\n    margin-right: 0;\n    border-radius: 0;\n    right: 1rem;\n    position: absolute;\n    transform: scale(1);\n    min-width: 5rem;\n    min-height: 5rem;\n    z-index: 3;\n    cursor: pointer;\n    border-radius: 20px;\n}\n\n.hamburgerGrill:checked {\n    background-image: none;\n    mask-image: url('images/topGrill.svg');\n    -webkit-mask-image: url('images/topGrill.svg');\n    mask-size: contain;\n    -webkit-mask-size: contain;\n    mask-repeat: no-repeat;\n    -webkit-mask-repeat: no-repeat;\n    mask-position: center;\n    -webkit-mask-position: center;\n    \n    background-color: rgba(255, 0, 0, 1);\n    border-radius: 20px;\n    padding: 1rem 0 ;\n    margin-right: 1rem;\n    opacity: 1;\n}\n\n.hamburgerGrill:hover {\n    transform: scale(1.1);\n}\n\n.hamburgerGrill:checked + .open-hamburger {\n    opacity: 0;\n    pointer-events: none;\n    user-select: none;\n    transform: translateX(0);\n    transition: all ease .5s;\n}\n\n.open-hamburger {\n    height: 5rem;\n    width: fit-content;\n    opacity: 1;\n    right: 0;\n    top: 1.5rem;\n    padding: 0;\n    transform: translateX(-7.5rem);\n    transition: all ease .5s;\n    cursor: pointer;\n}\n\n.open-hamburger ul {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    width: 100%;\n    height: 100%;\n}\n\n.open-hamburger ul li {\n    background-color: rgba(255, 0, 0, .6);\n    height: 100%;\n    width: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 20px;\n}\n\n.open-hamburger ul li:hover {\n    transform: scale(1.1);\n}\n\n\n\n\n/*------ Grill -------*/\n.container {\n    opacity: .85;\n    height: fit-content;\n    width: clamp(20rem, 80%, 28rem);\n    padding: 1rem clamp(1rem, 10%, 4rem) 0;\n    background-color: rgba(0, 0, 0, .4);\n\n    margin: 1rem auto 0;\n    border-radius: 10px;\n    text-align: center;\n    color: red;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    box-shadow: 2px 2px 5px black;\n    overflow: hidden;\n}\n\n.first-text {\n    margin: 0 0 1rem 0;\n    padding: 0;\n    font-size: 1.5rem;\n    font-family: monospace;\n    z-index: 2;\n}\n\n#svg-object {\n    transition: all ease .5s;\n    z-index: 1;\n    \n}\n\n.grill-top:hover #svg-object {\n    transform: rotate(-.15turn) translate(-5%, -70%);\n}\n\n.grill-top:hover > h3 {\n    color: navy;\n    transform: scale(1.1);\n}\n\n.grill-top {\n    position: absolute;\n    top: 5rem;\n    left: 0;\n    right: 1.25rem;\n    margin: 0 auto;\n    width: fit-content;\n    z-index: 1;\n    cursor: pointer;\n}\n\n.grill-top h3 {\n    position: absolute;\n    top: 5.25rem;\n    left: 7.25rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n}\n\n.grill-bottom {\n    position: relative;\n    width: fit-content;\n    z-index: 0;\n    cursor: pointer;\n}\n\n.grill-bottom h3 {\n    position: absolute;\n    top: 12rem;\n    left: 7rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n}\n\n.grill-bottom:hover h3 {\n    color: #e25822;\n    transform: scale(1.1);\n}\n\n\n/* Menu */\n\n\n.menu-items {\n    display: grid;\n    gap: 2rem;\n}\n\n.menu-item {\n    /* background-image: url(images/brisketBasket.jpg);\n    background-repeat: no-repeat;\n    background-position: left;\n    background-size: contain; */\n    height: 25rem;\n    flex-direction: row;\n    flex-wrap: wrap-reverse;\n    justify-content: space-between;\n    font-size: 2.5rem;\n    background-color: rgba(0, 0, 0, .7);\n    padding: 1rem;\n    overflow-y: auto;\n}\n\n.menu-item img {\n    height: 15rem;\n    width: auto;\n    max-width: 13rem;\n    margin: 0 auto;\n}\n\n.menu-item p {\n    margin: 0 auto;\n    padding: 0;\n    width: clamp(9rem, 80%, 12rem);\n}\n\n/* About */\n\n.about {\n    padding-bottom: 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: 1.5rem;\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.about-section {\n    color: white;\n    line-height: 2rem;\n}\n\n.flex-container {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.container-contact {\n    padding: 1rem 1rem 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: 1.25rem;\n    width: clamp(20rem, 90%, 28rem)\n}\n\n.container-contact ul {\n    list-style: none;\n    color: white;\n    line-height: 2rem;\n    padding: 0;\n    margin: 1rem 0 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n\n@media screen and (max-width: 680px) {\n    .hamburgerGrill {\n        background-image: none;\n        mask-image: url('images/topGrill.svg');\n        -webkit-mask-image: url('images/topGrill.svg');\n        mask-size: contain;\n        -webkit-mask-size: contain;\n        mask-repeat: no-repeat;\n        -webkit-mask-repeat: no-repeat;\n        mask-position: center;\n        -webkit-mask-position: center;\n        \n        background-color: rgba(255, 0, 0, 1);\n        border-radius: 20px;\n        padding: 1rem 0 ;\n        margin-right: 1rem;\n        opacity: 1;\n        position: absolute;\n        transform: scale(1);\n        min-width: 5rem;\n        min-height: 5rem;\n        z-index: 3;\n        cursor: pointer;\n    }\n\n    .hamburgerGrill:checked {\n        mask-image: none;\n        -webkit-mask-image: none;\n        background-image: url('images/bottomGrill.svg');\n        position: static;\n        margin-right: 2rem;\n    }\n\n    .open-hamburger {\n        opacity: 0;\n        transform: translate(0, 0);\n        z-index: 3;\n        pointer-events: none;\n        user-select: none;\n        position: absolute;\n        right: 2rem;\n    }\n    .hamburgerGrill:checked + .open-hamburger {\n        pointer-events:all ;\n        user-select: all;\n        opacity: 1;\n        transform: translate(0, 13rem);\n        transition: all ease .5s;        \n        z-index: 4;\n    }\n    .open-hamburger ul {\n        flex-direction: column;\n    }\n    .open-hamburger ul li {\n        padding: 2rem;\n        background-color: rgb(255, 0, 0);\n        border-radius: 20px;\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAbout": () => (/* binding */ createAbout)
/* harmony export */ });
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header");



function createAbout() {

    const content = document.querySelector('.content');

    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.deletePage)(content);
    (0,_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)();

    const flexContainer = document.createElement('div');
    flexContainer.classList.add('flex-container');


    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('about');

    const containerContact = document.createElement('div');
    containerContact.classList.add('container');
    containerContact.classList.add('container-contact');

    const title = document.createElement('h1');
    title.classList.add('first-text');
    const titleContent = document.createTextNode('About');

    const title2 = document.createElement('h1');
    title2.classList.add('first-text');
    const titleContent2 = document.createTextNode('Contact Us');

    const aboutSection = document.createElement('p');
    aboutSection.classList.add('about-section');
    const aboutSectionContent = document.createTextNode('Smokey Mountain Meats is a family-run BBQ restaurant at the conclusion of the Appalachian Mountains in Eastern Tennessee. We specialize in our smoked brisket, satisfy sweet tooths with our cornbread, and produce little Popeye\'d children with our fresh collard greens.');
 
    const contactUl = document.createElement('ul');
    const hours = document.createElement('li');
    const phone = document.createElement('li');
    const address = document.createElement('li');
    const email = document.createElement('li');

    const hoursContent = document.createTextNode('Everyday: 5pm - 11pm');
    const phoneContent = document.createTextNode('Phone: XXX-XXX-XXXX');
    const addressContent = document.createTextNode('Address: 3 Pacific Avenue, The Milky Way');
    const emailContent = document. createTextNode('Email: primecut@smokedinthesmokies.com');

    hours.appendChild(hoursContent);
    phone.appendChild(phoneContent);
    address.appendChild(addressContent);
    email.appendChild(emailContent);

    contactUl.appendChild(hours);
    contactUl.appendChild(phone);
    contactUl.appendChild(address);
    contactUl.appendChild(email);
    
    title.appendChild(titleContent);
    title2.appendChild(titleContent2);
    container.appendChild(title);
    containerContact.appendChild(title2);
    containerContact.appendChild(contactUl);
    aboutSection.appendChild(aboutSectionContent);
    container.appendChild(aboutSection);
    flexContainer.appendChild(container);
    flexContainer.appendChild(containerContact);
    content.appendChild(flexContainer);

    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createTabs)();
}



/***/ }),

/***/ "./src/header":
/*!********************!*\
  !*** ./src/header ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader() {
        const content = document.querySelector('.content');
        const header = document.createElement('header');
        const title = document.createElement('h1');
        title.classList.add('title');
        const titleContent = document.createTextNode('Smokey Mountain Meats');
        
        const hamburgerGrill = document.createElement('input');
        hamburgerGrill.setAttribute('type', 'checkbox');
        hamburgerGrill.classList.add('hamburgerGrill');
        
        const openHamburger = document.createElement('div');
        openHamburger.classList.add('open-hamburger');
        const openUl = document.createElement('ul');
        const liHome = document.createElement('li');
        liHome.id = 'home-id';
        const liHomeContent = document.createTextNode('Home');
        const liMenu = document.createElement('li');
        liMenu.id = 'menu-id'
        const liMenuContent = document.createTextNode('Menu');
        const liAbout = document.createElement('li');
        liAbout.id = 'about-id'
        const liAboutContent = document.createTextNode('About');

        liHome.appendChild(liHomeContent);
        liMenu.appendChild(liMenuContent);
        liAbout.appendChild(liAboutContent);

        openUl.appendChild(liHome);
        openUl.appendChild(liMenu);
        openUl.appendChild(liAbout);

        openHamburger.appendChild(openUl);

        title.appendChild(titleContent);

        header.appendChild(title);
        header.appendChild(hamburgerGrill);
        header.appendChild(openHamburger);

        content.appendChild(header);
    }

    

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addGrillFeatures": () => (/* binding */ addGrillFeatures),
/* harmony export */   "createTabs": () => (/* binding */ createTabs),
/* harmony export */   "deletePage": () => (/* binding */ deletePage),
/* harmony export */   "grillParts": () => (/* binding */ grillParts)
/* harmony export */ });
/* harmony import */ var _images_bottomGrill_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bottomGrill.svg */ "./src/images/bottomGrill.svg");
/* harmony import */ var _images_topGrill_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/topGrill.svg */ "./src/images/topGrill.svg");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./src/header");








function grillParts() {    

    const content = document.querySelector('.content');

    deletePage(content);

    (0,_header__WEBPACK_IMPORTED_MODULE_4__.createHeader)();
    
    const container = document.createElement('div');
    container.classList.add('container');
    const grillTop = document.createElement('div');
    grillTop.classList.add('grill-top');
    const grillBottom = document.createElement('div');
    grillBottom.classList.add('grill-bottom');
    const text1 = document.createElement('p');
    text1.classList.add('first-text');
    const text1Content = document.createTextNode('Falling off the bone since 1997');
    const object1 = document.createElement('object');
    object1.id = 'svg-object';
    object1.setAttribute('type', "image/svg+xml");
    object1.setAttribute('data', _images_topGrill_svg__WEBPACK_IMPORTED_MODULE_1__);
    const menu = document.createElement('h3');
    const menuContent = document.createTextNode('Menu');
    const object2 = document.createElement('object');
    object2.id = 'svg-object2';
    object2.setAttribute('type', 'image/svg+xml');
    object2.setAttribute('data', _images_bottomGrill_svg__WEBPACK_IMPORTED_MODULE_0__);
    const about = document.createElement('h3');
    const aboutContent = document.createTextNode('About');

    
    grillTop.appendChild(object1);
    menu.appendChild(menuContent);
    grillTop.appendChild(menu);

    grillBottom.appendChild(object2);
    about.appendChild(aboutContent);
    grillBottom.appendChild(about);

    text1.appendChild(text1Content);

    container.appendChild(text1);
    container.appendChild(grillTop);
    container.appendChild(grillBottom);

    content.appendChild(container);

    grillTop.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_3__.createMenu);
    grillBottom.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_2__.createAbout);

    createTabs();

};

function addGrillFeatures() {
    setTimeout(function() {
        const svgObject = document.getElementById('svg-object');
        const svgObject2 = document.getElementById('svg-object2');
        const grillTop = document.querySelector('.grill-top');
        const grillBottom = document.querySelector('.grill-bottom');
        
    
        svgObject.contentDocument.querySelectorAll(".vents").forEach(vent => vent.setAttribute("fill", "#e2582270"));
        svgObject2.contentDocument.querySelector('.price-tag').setAttribute("fill", "red");
    
        function changeVentColors(event) {
            if (event.type === 'mouseleave') {
                svgObject.contentDocument.querySelectorAll(".vents").forEach(vent => vent.setAttribute("fill", "#e2582270"));
            } else if (event.type === 'mouseenter') {
                svgObject.contentDocument.querySelectorAll(".vents").forEach(vent => vent.setAttribute("fill", "black"));
            }
        }
    
        function changeTagColor(event) {
            if (event.type === 'mouseleave') {
                svgObject2.contentDocument.querySelector('.price-tag').setAttribute("fill", "red");
                svgObject2.contentDocument.querySelector('.aboutText').setAttribute("stroke", "black");
            } else if (event.type === 'mouseenter') {
                svgObject2.contentDocument.querySelector('.price-tag').setAttribute("fill", "#e25822");
                svgObject2.contentDocument.querySelector('.aboutText').setAttribute("stroke", "black");
            }
        }
    
        grillTop.addEventListener('mouseenter', changeVentColors);
        grillTop.addEventListener('mouseleave', changeVentColors);
        grillBottom.addEventListener('mouseenter', changeTagColor);
        grillBottom.addEventListener('mouseleave', changeTagColor);
    
    }, 100);
}

function deletePage(content) {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

function createTabs() {
    
    const headerH1 = document.querySelector('header h1');
    
    headerH1.addEventListener('click', grillParts);
    headerH1.addEventListener('click', addGrillFeatures);

    const home = document.querySelector('#home-id');

    home.addEventListener('click', grillParts);
    home.addEventListener('click', addGrillFeatures);

    const menu = document.querySelector('#menu-id');

    menu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_3__.createMenu);

    const about = document.querySelector('#about-id');

    about.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_2__.createAbout);

};



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _images_brisketBasket_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/brisketBasket.jpg */ "./src/images/brisketBasket.jpg");
/* harmony import */ var _images_pulledPork_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pulledPork.jpg */ "./src/images/pulledPork.jpg");
/* harmony import */ var _images_collardGreens_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/collardGreens.jpg */ "./src/images/collardGreens.jpg");
/* harmony import */ var _images_cornbread_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/cornbread.jpg */ "./src/images/cornbread.jpg");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./src/header");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");








function createMenu() {
    console.log('hey');
    const content = document.querySelector('.content');

    (0,_homepage__WEBPACK_IMPORTED_MODULE_5__.deletePage)(content);
    (0,_header__WEBPACK_IMPORTED_MODULE_4__.createHeader)();
    const container = document.createElement('div');
    container.classList.add('container');
    const title = document.createElement('h1');
    title.classList.add('first-text');
    const titleContent = document.createTextNode('Off the Grill');
    
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    const food1 = document.createElement('div');
    food1.classList.add('container');
    food1.classList.add('menu-item');
    const brisketPic = new Image();
    brisketPic.src = _images_brisketBasket_jpg__WEBPACK_IMPORTED_MODULE_0__;
    const food1Text = document.createElement('p');
    const food1TextContent = document.createTextNode('The Brisket Basket');

    const food2 = document.createElement('div');
    food2.classList.add('container');
    food2.classList.add('menu-item');
    const pulledPorkPic = new Image();
    pulledPorkPic.src = _images_pulledPork_jpg__WEBPACK_IMPORTED_MODULE_1__;
    const food2Text = document.createElement('p');
    const food2TextContent = document.createTextNode('Pulled Pork Sandwich');

    const food3 = document.createElement('div');
    food3.classList.add('container');
    food3.classList.add('menu-item');
    const collardPic = new Image();
    collardPic.src = _images_collardGreens_jpg__WEBPACK_IMPORTED_MODULE_2__;
    const food3Text = document.createElement('p');
    const food3TextContent = document.createTextNode('Collard Greens');

    const food4 = document.createElement('div');
    food4.classList.add('container');
    food4.classList.add('menu-item');
    const cornbreadPic = new Image();
    cornbreadPic.src = _images_cornbread_jpg__WEBPACK_IMPORTED_MODULE_3__;
    const food4Text = document.createElement('p');
    const food4TextContent = document.createTextNode('Cornbread');

    title.appendChild(titleContent);
    container.appendChild(title);

    food1.appendChild(brisketPic);
    food1Text.appendChild(food1TextContent);
    food1.appendChild(food1Text);

    food2.appendChild(pulledPorkPic);
    food2Text.appendChild(food2TextContent);
    food2.appendChild(food2Text);

    food3.appendChild(collardPic);
    food3Text.appendChild(food3TextContent);
    food3.appendChild(food3Text);

    food4.appendChild(cornbreadPic);
    food4Text.appendChild(food4TextContent);
    food4.appendChild(food4Text);

   
    menuItems.appendChild(food1);
    menuItems.appendChild(food2);
    menuItems.appendChild(food3);
    menuItems.appendChild(food4);

    content.appendChild(container);
    content.appendChild(menuItems);

    (0,_homepage__WEBPACK_IMPORTED_MODULE_5__.createTabs)();
}



/***/ }),

/***/ "./src/fonts/firestarter-webfont.woff":
/*!********************************************!*\
  !*** ./src/fonts/firestarter-webfont.woff ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "827835c51a028c6e20e1.woff";

/***/ }),

/***/ "./src/fonts/firestarter-webfont.woff2":
/*!*********************************************!*\
  !*** ./src/fonts/firestarter-webfont.woff2 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97e67f37429ebcd36a6c.woff2";

/***/ }),

/***/ "./src/images/bottomGrill.svg":
/*!************************************!*\
  !*** ./src/images/bottomGrill.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3208bae0c2cae7908c9.svg";

/***/ }),

/***/ "./src/images/brisket.jpg":
/*!********************************!*\
  !*** ./src/images/brisket.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acc7966d5eccdb603279.jpg";

/***/ }),

/***/ "./src/images/brisketBasket.jpg":
/*!**************************************!*\
  !*** ./src/images/brisketBasket.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f053b6f40fa1cfc29810.jpg";

/***/ }),

/***/ "./src/images/collardGreens.jpg":
/*!**************************************!*\
  !*** ./src/images/collardGreens.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2db8ec27c1937d841cc1.jpg";

/***/ }),

/***/ "./src/images/cornbread.jpg":
/*!**********************************!*\
  !*** ./src/images/cornbread.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ba8fd9b0c2cc205aa36.jpg";

/***/ }),

/***/ "./src/images/pulledPork.jpg":
/*!***********************************!*\
  !*** ./src/images/pulledPork.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e276cd5cb98578914e7.jpg";

/***/ }),

/***/ "./src/images/topGrill.svg":
/*!*********************************!*\
  !*** ./src/images/topGrill.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6df1b6ea3c56ad1557f4.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _images_brisket_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/brisket.jpg */ "./src/images/brisket.jpg");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/about.js");
let count = 0;
console.log(count++);









(function init() {
    (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.grillParts)();
    (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.addGrillFeatures)();
    (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createTabs)();
})();








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksVUFBVSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssT0FBTyxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFB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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUV3QztBQUMrQjtBQUNsRDtBQUNlO0FBQ1c7QUFDVDs7O0FBR3RDO0FBQ0EsSUFBSSxxREFBVTtBQUNkLElBQUksMkRBQWdCO0FBQ3BCLElBQUkscURBQVU7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9maXJlc3RhcnRlci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvZmlyZXN0YXJ0ZXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYnJpc2tldC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvYm90dG9tR3JpbGwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3RvcEdyaWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi8qIEhlYWRlciAqL1xcblxcbjpyb290IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmbGV4LWJhc2lzOiA0MCU7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3VibGUgcmVkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMCBjbGFtcCguNXJlbSwgNSUgLDMuNXJlbSk7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWluLXdpZHRoOiAxM3JlbTtcXG4gICAgbWF4LXdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogJ2ZpcmVzdGFydGVycmVndWxhcic7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oYW1idXJnZXJHcmlsbCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgLjYpO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW0gMCAxLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgbWluLXdpZHRoOiA1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5oYW1idXJnZXJHcmlsbDpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCA7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmhhbWJ1cmdlckdyaWxsOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZCArIC5vcGVuLWhhbWJ1cmdlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNy41cmVtKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB1bCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm9wZW4taGFtYnVyZ2VyIHVsIGxpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIC42KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB1bCBsaTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuXFxuXFxuXFxuLyotLS0tLS0gR3JpbGwgLS0tLS0tLSovXFxuLmNvbnRhaW5lciB7XFxuICAgIG9wYWNpdHk6IC44NTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IGNsYW1wKDIwcmVtLCA4MCUsIDI4cmVtKTtcXG4gICAgcGFkZGluZzogMXJlbSBjbGFtcCgxcmVtLCAxMCUsIDRyZW0pIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xcblxcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5maXJzdC10ZXh0IHtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI3N2Zy1vYmplY3Qge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbn1cXG5cXG4uZ3JpbGwtdG9wOmhvdmVyICNzdmctb2JqZWN0IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLS4xNXR1cm4pIHRyYW5zbGF0ZSgtNSUsIC03MCUpO1xcbn1cXG5cXG4uZ3JpbGwtdG9wOmhvdmVyID4gaDMge1xcbiAgICBjb2xvcjogbmF2eTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uZ3JpbGwtdG9wIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVyZW07XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAxLjI1cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ncmlsbC10b3AgaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNS4yNXJlbTtcXG4gICAgbGVmdDogNy4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmdyaWxsLWJvdHRvbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ncmlsbC1ib3R0b20gaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTJyZW07XFxuICAgIGxlZnQ6IDdyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5ncmlsbC1ib3R0b206aG92ZXIgaDMge1xcbiAgICBjb2xvcjogI2UyNTgyMjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5cXG4vKiBNZW51ICovXFxuXFxuXFxuLm1lbnUtaXRlbXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2JyaXNrZXRCYXNrZXQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAqL1xcbiAgICBoZWlnaHQ6IDI1cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5tZW51LWl0ZW0gaW1nIHtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMTNyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWVudS1pdGVtIHAge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IGNsYW1wKDlyZW0sIDgwJSwgMTJyZW0pO1xcbn1cXG5cXG4vKiBBYm91dCAqL1xcblxcbi5hYm91dCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC45KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiBjbGFtcCgyMHJlbSwgOTAlLCAyOHJlbSk7XFxufVxcblxcbi5hYm91dC1zZWN0aW9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY29udGFpbmVyLWNvbnRhY3Qge1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgd2lkdGg6IGNsYW1wKDIwcmVtLCA5MCUsIDI4cmVtKVxcbn1cXG5cXG4uY29udGFpbmVyLWNvbnRhY3QgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDFyZW0gMCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XFxuICAgIC5oYW1idXJnZXJHcmlsbCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICAgICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICAgICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIG1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwIDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xcbiAgICAgICAgbWluLWhlaWdodDogNXJlbTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQge1xcbiAgICAgICAgbWFzay1pbWFnZTogbm9uZTtcXG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC5vcGVuLWhhbWJ1cmdlciB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAycmVtO1xcbiAgICB9XFxuICAgIC5oYW1idXJnZXJHcmlsbDpjaGVja2VkICsgLm9wZW4taGFtYnVyZ2VyIHtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOmFsbCA7XFxuICAgICAgICB1c2VyLXNlbGVjdDogYWxsO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEzcmVtKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41czsgICAgICAgIFxcbiAgICAgICAgei1pbmRleDogNDtcXG4gICAgfVxcbiAgICAub3Blbi1oYW1idXJnZXIgdWwge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICAub3Blbi1oYW1idXJnZXIgdWwgbGkge1xcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDOytEQUN5RDtJQUN6RCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7QUFHQSxXQUFXOztBQUVYO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseURBQTZDO0lBQzdDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlEQUErQztJQUMvQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixxQ0FBcUM7SUFDckMsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFn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aUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixtREFBc0M7UUFDdEMsMkRBQThDO1FBQzlDLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5QixxQkFBcUI7UUFDckIsNkJBQTZCOztRQUU3QixvQ0FBb0M7UUFDcEMsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIseURBQStDO1FBQy9DLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsMEJBQTBCO1FBQzFCLFVBQVU7UUFDVixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLDhCQUE4QjtRQUM5Qix3QkFBd0I7UUFDeEIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGFBQWE7UUFDYixnQ0FBZ0M7UUFDaEMsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoJ2ZvbnRzL2ZpcmVzdGFydGVyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICAgdXJsKCdmb250cy9maXJlc3RhcnRlci13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLyogSGVhZGVyICovXFxuXFxuOnJvb3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2JyaXNrZXQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZmxleC1iYXNpczogNDAlO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZG91YmxlIHJlZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgY2xhbXAoLjVyZW0sIDUlICwzLjVyZW0pO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogMTNyZW07XFxuICAgIG1heC13aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGwge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9ib3R0b21HcmlsbC5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAuNik7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAwIDEuNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBtaW4td2lkdGg6IDVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2ltYWdlcy90b3BHcmlsbC5zdmcnKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2ltYWdlcy90b3BHcmlsbC5zdmcnKTtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5oYW1idXJnZXJHcmlsbDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQgKyAub3Blbi1oYW1idXJnZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xcbn1cXG5cXG4ub3Blbi1oYW1idXJnZXIge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTcuNXJlbSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3Blbi1oYW1idXJnZXIgdWwge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB1bCBsaSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAuNik7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4ub3Blbi1oYW1idXJnZXIgdWwgbGk6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcblxcblxcblxcbi8qLS0tLS0tIEdyaWxsIC0tLS0tLS0qL1xcbi5jb250YWluZXIge1xcbiAgICBvcGFjaXR5OiAuODU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiBjbGFtcCgyMHJlbSwgODAlLCAyOHJlbSk7XFxuICAgIHBhZGRpbmc6IDFyZW0gY2xhbXAoMXJlbSwgMTAlLCA0cmVtKSAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcXG5cXG4gICAgbWFyZ2luOiAxcmVtIGF1dG8gMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZmlyc3QtdGV4dCB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbiNzdmctb2JqZWN0IHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBcXG59XFxuXFxuLmdyaWxsLXRvcDpob3ZlciAjc3ZnLW9iamVjdCB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0uMTV0dXJuKSB0cmFuc2xhdGUoLTUlLCAtNzAlKTtcXG59XFxuXFxuLmdyaWxsLXRvcDpob3ZlciA+IGgzIHtcXG4gICAgY29sb3I6IG5hdnk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmdyaWxsLXRvcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMS4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpbGwtdG9wIGgzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUuMjVyZW07XFxuICAgIGxlZnQ6IDcuMjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5ncmlsbC1ib3R0b20ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpbGwtYm90dG9tIGgzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEycmVtO1xcbiAgICBsZWZ0OiA3cmVtO1xcbiAgICBmb250LWZhbWlseTogJ2ZpcmVzdGFydGVycmVndWxhcic7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZ3JpbGwtYm90dG9tOmhvdmVyIGgzIHtcXG4gICAgY29sb3I6ICNlMjU4MjI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuXFxuLyogTWVudSAqL1xcblxcblxcbi5tZW51LWl0ZW1zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9icmlza2V0QmFza2V0LmpwZyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgKi9cXG4gICAgaGVpZ2h0OiAyNXJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZyB7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEzcmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1lbnUtaXRlbSBwIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiBjbGFtcCg5cmVtLCA4MCUsIDEycmVtKTtcXG59XFxuXFxuLyogQWJvdXQgKi9cXG5cXG4uYWJvdXQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB3aWR0aDogY2xhbXAoMjByZW0sIDkwJSwgMjhyZW0pO1xcbn1cXG5cXG4uYWJvdXQtc2VjdGlvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNvbnRhaW5lci1jb250YWN0IHtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHdpZHRoOiBjbGFtcCgyMHJlbSwgOTAlLCAyOHJlbSlcXG59XFxuXFxuLmNvbnRhaW5lci1jb250YWN0IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xcbiAgICAuaGFtYnVyZ2VyR3JpbGwge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgICAgIG1hc2staW1hZ2U6IHVybCgnaW1hZ2VzL3RvcEdyaWxsLnN2ZycpO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2ltYWdlcy90b3BHcmlsbC5zdmcnKTtcXG4gICAgICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICAgICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIG1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwIDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xcbiAgICAgICAgbWluLWhlaWdodDogNXJlbTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQge1xcbiAgICAgICAgbWFzay1pbWFnZTogbm9uZTtcXG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1hZ2VzL2JvdHRvbUdyaWxsLnN2ZycpO1xcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gICAgfVxcblxcbiAgICAub3Blbi1oYW1idXJnZXIge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICByaWdodDogMnJlbTtcXG4gICAgfVxcbiAgICAuaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZCArIC5vcGVuLWhhbWJ1cmdlciB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czphbGwgO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IGFsbDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxM3JlbSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7ICAgICAgICBcXG4gICAgICAgIHotaW5kZXg6IDQ7XFxuICAgIH1cXG4gICAgLm9wZW4taGFtYnVyZ2VyIHVsIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLm9wZW4taGFtYnVyZ2VyIHVsIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7ZGVsZXRlUGFnZSwgY3JlYXRlVGFic30gZnJvbSAnLi9ob21lcGFnZSc7XG5pbXBvcnQge2NyZWF0ZUhlYWRlcn0gZnJvbSAnLi9oZWFkZXInXG5cbmZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBkZWxldGVQYWdlKGNvbnRlbnQpO1xuICAgIGNyZWF0ZUhlYWRlcigpO1xuXG4gICAgY29uc3QgZmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleC1jb250YWluZXInKTtcblxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuXG4gICAgY29uc3QgY29udGFpbmVyQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lckNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyQ29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItY29udGFjdCcpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LXRleHQnKTtcbiAgICBjb25zdCB0aXRsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQWJvdXQnKTtcblxuICAgIGNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUyLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LXRleHQnKTtcbiAgICBjb25zdCB0aXRsZUNvbnRlbnQyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NvbnRhY3QgVXMnKTtcblxuICAgIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQtc2VjdGlvbicpO1xuICAgIGNvbnN0IGFib3V0U2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU21va2V5IE1vdW50YWluIE1lYXRzIGlzIGEgZmFtaWx5LXJ1biBCQlEgcmVzdGF1cmFudCBhdCB0aGUgY29uY2x1c2lvbiBvZiB0aGUgQXBwYWxhY2hpYW4gTW91bnRhaW5zIGluIEVhc3Rlcm4gVGVubmVzc2VlLiBXZSBzcGVjaWFsaXplIGluIG91ciBzbW9rZWQgYnJpc2tldCwgc2F0aXNmeSBzd2VldCB0b290aHMgd2l0aCBvdXIgY29ybmJyZWFkLCBhbmQgcHJvZHVjZSBsaXR0bGUgUG9wZXllXFwnZCBjaGlsZHJlbiB3aXRoIG91ciBmcmVzaCBjb2xsYXJkIGdyZWVucy4nKTtcbiBcbiAgICBjb25zdCBjb250YWN0VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgY29uc3QgaG91cnNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0V2ZXJ5ZGF5OiA1cG0gLSAxMXBtJyk7XG4gICAgY29uc3QgcGhvbmVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1Bob25lOiBYWFgtWFhYLVhYWFgnKTtcbiAgICBjb25zdCBhZGRyZXNzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBZGRyZXNzOiAzIFBhY2lmaWMgQXZlbnVlLCBUaGUgTWlsa3kgV2F5Jyk7XG4gICAgY29uc3QgZW1haWxDb250ZW50ID0gZG9jdW1lbnQuIGNyZWF0ZVRleHROb2RlKCdFbWFpbDogcHJpbWVjdXRAc21va2VkaW50aGVzbW9raWVzLmNvbScpO1xuXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNDb250ZW50KTtcbiAgICBwaG9uZS5hcHBlbmRDaGlsZChwaG9uZUNvbnRlbnQpO1xuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRlbnQpO1xuICAgIGVtYWlsLmFwcGVuZENoaWxkKGVtYWlsQ29udGVudCk7XG5cbiAgICBjb250YWN0VWwuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIGNvbnRhY3RVbC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgY29udGFjdFVsLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGNvbnRhY3RVbC5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVDb250ZW50KTtcbiAgICB0aXRsZTIuYXBwZW5kQ2hpbGQodGl0bGVDb250ZW50Mik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250YWluZXJDb250YWN0LmFwcGVuZENoaWxkKHRpdGxlMik7XG4gICAgY29udGFpbmVyQ29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VWwpO1xuICAgIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb25Db250ZW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcbiAgICBmbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJDb250YWN0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZsZXhDb250YWluZXIpO1xuXG4gICAgY3JlYXRlVGFicygpO1xufVxuXG5leHBvcnQge2NyZWF0ZUFib3V0fSIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTbW9rZXkgTW91bnRhaW4gTWVhdHMnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhhbWJ1cmdlckdyaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaGFtYnVyZ2VyR3JpbGwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGhhbWJ1cmdlckdyaWxsLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlckdyaWxsJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBvcGVuSGFtYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9wZW5IYW1idXJnZXIuY2xhc3NMaXN0LmFkZCgnb3Blbi1oYW1idXJnZXInKTtcbiAgICAgICAgY29uc3Qgb3BlblVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgbGlIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlIb21lLmlkID0gJ2hvbWUtaWQnO1xuICAgICAgICBjb25zdCBsaUhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0hvbWUnKTtcbiAgICAgICAgY29uc3QgbGlNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlNZW51LmlkID0gJ21lbnUtaWQnXG4gICAgICAgIGNvbnN0IGxpTWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTWVudScpO1xuICAgICAgICBjb25zdCBsaUFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlBYm91dC5pZCA9ICdhYm91dC1pZCdcbiAgICAgICAgY29uc3QgbGlBYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQWJvdXQnKTtcblxuICAgICAgICBsaUhvbWUuYXBwZW5kQ2hpbGQobGlIb21lQ29udGVudCk7XG4gICAgICAgIGxpTWVudS5hcHBlbmRDaGlsZChsaU1lbnVDb250ZW50KTtcbiAgICAgICAgbGlBYm91dC5hcHBlbmRDaGlsZChsaUFib3V0Q29udGVudCk7XG5cbiAgICAgICAgb3BlblVsLmFwcGVuZENoaWxkKGxpSG9tZSk7XG4gICAgICAgIG9wZW5VbC5hcHBlbmRDaGlsZChsaU1lbnUpO1xuICAgICAgICBvcGVuVWwuYXBwZW5kQ2hpbGQobGlBYm91dCk7XG5cbiAgICAgICAgb3BlbkhhbWJ1cmdlci5hcHBlbmRDaGlsZChvcGVuVWwpO1xuXG4gICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlQ29udGVudCk7XG5cbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhhbWJ1cmdlckdyaWxsKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG9wZW5IYW1idXJnZXIpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB9XG5cbiAgICBleHBvcnQge2NyZWF0ZUhlYWRlcn0iLCJpbXBvcnQgSWNvbkJvdHRvbSBmcm9tICcuL2ltYWdlcy9ib3R0b21HcmlsbC5zdmcnO1xuaW1wb3J0IEljb25Ub3AgZnJvbSAnLi9pbWFnZXMvdG9wR3JpbGwuc3ZnJztcblxuaW1wb3J0IHsgY3JlYXRlQWJvdXQgfSBmcm9tICcuL2Fib3V0JztcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuXG5cbmZ1bmN0aW9uIGdyaWxsUGFydHMoKSB7ICAgIFxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBkZWxldGVQYWdlKGNvbnRlbnQpO1xuXG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGdyaWxsVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpbGxUb3AuY2xhc3NMaXN0LmFkZCgnZ3JpbGwtdG9wJyk7XG4gICAgY29uc3QgZ3JpbGxCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlsbEJvdHRvbS5jbGFzc0xpc3QuYWRkKCdncmlsbC1ib3R0b20nKTtcbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCdmaXJzdC10ZXh0Jyk7XG4gICAgY29uc3QgdGV4dDFDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0ZhbGxpbmcgb2ZmIHRoZSBib25lIHNpbmNlIDE5OTcnKTtcbiAgICBjb25zdCBvYmplY3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XG4gICAgb2JqZWN0MS5pZCA9ICdzdmctb2JqZWN0JztcbiAgICBvYmplY3QxLnNldEF0dHJpYnV0ZSgndHlwZScsIFwiaW1hZ2Uvc3ZnK3htbFwiKTtcbiAgICBvYmplY3QxLnNldEF0dHJpYnV0ZSgnZGF0YScsIEljb25Ub3ApO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ01lbnUnKTtcbiAgICBjb25zdCBvYmplY3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XG4gICAgb2JqZWN0Mi5pZCA9ICdzdmctb2JqZWN0Mic7XG4gICAgb2JqZWN0Mi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaW1hZ2Uvc3ZnK3htbCcpO1xuICAgIG9iamVjdDIuc2V0QXR0cmlidXRlKCdkYXRhJywgSWNvbkJvdHRvbSk7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBYm91dCcpO1xuXG4gICAgXG4gICAgZ3JpbGxUb3AuYXBwZW5kQ2hpbGQob2JqZWN0MSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XG4gICAgZ3JpbGxUb3AuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBncmlsbEJvdHRvbS5hcHBlbmRDaGlsZChvYmplY3QyKTtcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQpO1xuICAgIGdyaWxsQm90dG9tLmFwcGVuZENoaWxkKGFib3V0KTtcblxuICAgIHRleHQxLmFwcGVuZENoaWxkKHRleHQxQ29udGVudCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dDEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlsbFRvcCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWxsQm90dG9tKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGdyaWxsVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTWVudSk7XG4gICAgZ3JpbGxCb3R0b20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBYm91dCk7XG5cbiAgICBjcmVhdGVUYWJzKCk7XG5cbn07XG5cbmZ1bmN0aW9uIGFkZEdyaWxsRmVhdHVyZXMoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc3ZnT2JqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N2Zy1vYmplY3QnKTtcbiAgICAgICAgY29uc3Qgc3ZnT2JqZWN0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdmctb2JqZWN0MicpO1xuICAgICAgICBjb25zdCBncmlsbFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlsbC10b3AnKTtcbiAgICAgICAgY29uc3QgZ3JpbGxCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpbGwtYm90dG9tJyk7XG4gICAgICAgIFxuICAgIFxuICAgICAgICBzdmdPYmplY3QuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmVudHNcIikuZm9yRWFjaCh2ZW50ID0+IHZlbnQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiNlMjU4MjI3MFwiKSk7XG4gICAgICAgIHN2Z09iamVjdDIuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS10YWcnKS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmVkXCIpO1xuICAgIFxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VWZW50Q29sb3JzKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgICAgICAgICAgICAgc3ZnT2JqZWN0LmNvbnRlbnREb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZlbnRzXCIpLmZvckVhY2godmVudCA9PiB2ZW50LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjZTI1ODIyNzBcIikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnbW91c2VlbnRlcicpIHtcbiAgICAgICAgICAgICAgICBzdmdPYmplY3QuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmVudHNcIikuZm9yRWFjaCh2ZW50ID0+IHZlbnQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImJsYWNrXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VUYWdDb2xvcihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWxlYXZlJykge1xuICAgICAgICAgICAgICAgIHN2Z09iamVjdDIuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS10YWcnKS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmVkXCIpO1xuICAgICAgICAgICAgICAgIHN2Z09iamVjdDIuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dFRleHQnKS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJibGFja1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgc3ZnT2JqZWN0Mi5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlLXRhZycpLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjZTI1ODIyXCIpO1xuICAgICAgICAgICAgICAgIHN2Z09iamVjdDIuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dFRleHQnKS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJibGFja1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBncmlsbFRvcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgY2hhbmdlVmVudENvbG9ycyk7XG4gICAgICAgIGdyaWxsVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBjaGFuZ2VWZW50Q29sb3JzKTtcbiAgICAgICAgZ3JpbGxCb3R0b20uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGNoYW5nZVRhZ0NvbG9yKTtcbiAgICAgICAgZ3JpbGxCb3R0b20uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGNoYW5nZVRhZ0NvbG9yKTtcbiAgICBcbiAgICB9LCAxMDApO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQYWdlKGNvbnRlbnQpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFicygpIHtcbiAgICBcbiAgICBjb25zdCBoZWFkZXJIMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBoMScpO1xuICAgIFxuICAgIGhlYWRlckgxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3JpbGxQYXJ0cyk7XG4gICAgaGVhZGVySDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRHcmlsbEZlYXR1cmVzKTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1pZCcpO1xuXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdyaWxsUGFydHMpO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRHcmlsbEZlYXR1cmVzKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1pZCcpO1xuXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU1lbnUpO1xuXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtaWQnKTtcblxuICAgIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlQWJvdXQpO1xuXG59O1xuXG5leHBvcnQge2dyaWxsUGFydHMsIGFkZEdyaWxsRmVhdHVyZXMsIGRlbGV0ZVBhZ2UsIGNyZWF0ZVRhYnN9IiwiaW1wb3J0IEljb25Ccmlza2V0IGZyb20gJy4vaW1hZ2VzL2JyaXNrZXRCYXNrZXQuanBnJztcbmltcG9ydCBJY29uUG9yayBmcm9tICcuL2ltYWdlcy9wdWxsZWRQb3JrLmpwZyc7XG5pbXBvcnQgSWNvbkdyZWVucyBmcm9tICcuL2ltYWdlcy9jb2xsYXJkR3JlZW5zLmpwZyc7XG5pbXBvcnQgSWNvbkNvcm5icmVhZCBmcm9tICcuL2ltYWdlcy9jb3JuYnJlYWQuanBnJztcblxuaW1wb3J0IHtjcmVhdGVIZWFkZXJ9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7ZGVsZXRlUGFnZSwgY3JlYXRlVGFic30gZnJvbSAnLi9ob21lcGFnZSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hleScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgZGVsZXRlUGFnZShjb250ZW50KTtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LXRleHQnKTtcbiAgICBjb25zdCB0aXRsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnT2ZmIHRoZSBHcmlsbCcpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtcy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zJyk7XG5cbiAgICBjb25zdCBmb29kMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2QxLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGZvb2QxLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGNvbnN0IGJyaXNrZXRQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBicmlza2V0UGljLnNyYyA9IEljb25Ccmlza2V0O1xuICAgIGNvbnN0IGZvb2QxVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBmb29kMVRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1RoZSBCcmlza2V0IEJhc2tldCcpO1xuXG4gICAgY29uc3QgZm9vZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kMi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBmb29kMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBjb25zdCBwdWxsZWRQb3JrUGljID0gbmV3IEltYWdlKCk7XG4gICAgcHVsbGVkUG9ya1BpYy5zcmMgPSBJY29uUG9yaztcbiAgICBjb25zdCBmb29kMlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZm9vZDJUZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQdWxsZWQgUG9yayBTYW5kd2ljaCcpO1xuXG4gICAgY29uc3QgZm9vZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kMy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBmb29kMy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBjb25zdCBjb2xsYXJkUGljID0gbmV3IEltYWdlKCk7XG4gICAgY29sbGFyZFBpYy5zcmMgPSBJY29uR3JlZW5zO1xuICAgIGNvbnN0IGZvb2QzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBmb29kM1RleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NvbGxhcmQgR3JlZW5zJyk7XG5cbiAgICBjb25zdCBmb29kNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2Q0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGZvb2Q0LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGNvbnN0IGNvcm5icmVhZFBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvcm5icmVhZFBpYy5zcmMgPSBJY29uQ29ybmJyZWFkO1xuICAgIGNvbnN0IGZvb2Q0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBmb29kNFRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0Nvcm5icmVhZCcpO1xuXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVDb250ZW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgZm9vZDEuYXBwZW5kQ2hpbGQoYnJpc2tldFBpYyk7XG4gICAgZm9vZDFUZXh0LmFwcGVuZENoaWxkKGZvb2QxVGV4dENvbnRlbnQpO1xuICAgIGZvb2QxLmFwcGVuZENoaWxkKGZvb2QxVGV4dCk7XG5cbiAgICBmb29kMi5hcHBlbmRDaGlsZChwdWxsZWRQb3JrUGljKTtcbiAgICBmb29kMlRleHQuYXBwZW5kQ2hpbGQoZm9vZDJUZXh0Q29udGVudCk7XG4gICAgZm9vZDIuYXBwZW5kQ2hpbGQoZm9vZDJUZXh0KTtcblxuICAgIGZvb2QzLmFwcGVuZENoaWxkKGNvbGxhcmRQaWMpO1xuICAgIGZvb2QzVGV4dC5hcHBlbmRDaGlsZChmb29kM1RleHRDb250ZW50KTtcbiAgICBmb29kMy5hcHBlbmRDaGlsZChmb29kM1RleHQpO1xuXG4gICAgZm9vZDQuYXBwZW5kQ2hpbGQoY29ybmJyZWFkUGljKTtcbiAgICBmb29kNFRleHQuYXBwZW5kQ2hpbGQoZm9vZDRUZXh0Q29udGVudCk7XG4gICAgZm9vZDQuYXBwZW5kQ2hpbGQoZm9vZDRUZXh0KTtcblxuICAgXG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGZvb2QxKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoZm9vZDIpO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChmb29kMyk7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGZvb2Q0KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG5cbiAgICBjcmVhdGVUYWJzKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJsZXQgY291bnQgPSAwO1xuY29uc29sZS5sb2coY291bnQrKyk7XG5cbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgYWRkR3JpbGxGZWF0dXJlcywgIGdyaWxsUGFydHMsIGNyZWF0ZVRhYnMgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IEljb25Ccmlza2V0IGZyb20gJy4vaW1hZ2VzL2JyaXNrZXQuanBnJztcbmltcG9ydCB7IGNyZWF0ZUFib3V0IH0gZnJvbSBcIi4vYWJvdXRcIjtcblxuXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBncmlsbFBhcnRzKCk7XG4gICAgYWRkR3JpbGxGZWF0dXJlcygpO1xuICAgIGNyZWF0ZVRhYnMoKTtcbn0pKCk7XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==