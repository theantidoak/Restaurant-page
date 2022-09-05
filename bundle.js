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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'firestarterregular';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n\n/* Header */\n\n:root {\n    background-color: black;\n    height: 100vh;\n    width: 100%;\n    overflow-y: auto;\n}\n\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    margin: 0;\n    height: 100vh;\n    width: 100%;\n    padding-bottom: 2rem;\n    overflow-y: auto;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .7);\n    width: 100%;\n    height: 8rem;\n    position: relative;\n}\n\n.title {\n    flex-basis: 60%;\n    color: red;\n    border-bottom: 2px double red;\n    padding-bottom: 4px;\n    padding-top: 1rem;\n    margin: 0 0 0 clamp(.5rem, 5% ,3.5rem);\n    width: fit-content;\n    min-width: 13rem;\n    max-width: 20rem;\n    height: 3rem;\n    font-family: 'firestarterregular';\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n.hamburgerGrill {\n    appearance: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    background-color: rgba(255, 0, 0, 1);\n    opacity: .6;\n    padding: 1rem 2rem 0 1.5rem;\n    margin-right: 1rem;\n    border-radius: 0;\n    right: 1rem;\n    position: absolute;\n    transform: scale(1);\n    min-width: 5rem;\n    min-height: 5rem;\n    z-index: 3;\n    cursor: pointer;\n    border-radius: 20px;\n}\n\n.hamburgerGrill:checked {\n    background-image: none;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    mask-size: contain;\n    -webkit-mask-size: contain;\n    mask-repeat: no-repeat;\n    -webkit-mask-repeat: no-repeat;\n    mask-position: center;\n    -webkit-mask-position: center;\n    \n    background-color: rgba(255, 0, 0, 1);\n    border-radius: 20px;\n    padding: 1rem 0 ;\n    opacity: 1;\n}\n\n.hamburgerGrill:hover {\n    transform: scale(1.1);\n    opacity: 1;\n    background-color: #FFDB58;\n    \n}\n\n.hamburgerGrill:checked + .open-hamburger {\n    opacity: 0;\n    pointer-events: none;\n    user-select: none;\n    transform: translateX(0);\n    transition: all ease .5s;\n}\n\n.open-hamburger {\n    height: 5rem;\n    width: fit-content;\n    right: 0;\n    top: 1.5rem;\n    padding: 0;\n    transform: translateX(-8.5rem);\n    transition: all ease .5s;\n    cursor: pointer;\n}\n\n.open-hamburger ul {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    width: 100%;\n    height: 100%;\n}\n\n.open-hamburger ul li {\n    background-color: rgba(255, 0, 0, 1);\n    opacity: .6;\n    height: 100%;\n    width: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 20px;\n    border-bottom: red;\n}\n\n.open-hamburger ul li:hover {\n    transform: scale(1.1);\n    opacity: 1;\n    \n}\n\n\n\n\n/*------ Grill -------*/\n.container {\n    opacity: .95;\n    height: fit-content;\n    width: clamp(20rem, 80%, 28rem);\n    padding: 1rem clamp(1rem, 10%, 4rem) 0;\n    background-color: rgba(0, 0, 0, .6);\n\n    margin: 2rem auto;\n    border-radius: 10px;\n    text-align: center;\n    color: red;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    box-shadow: 2px 2px 5px black;\n}\n\n.first-text {\n    margin: 0 0 1rem 0;\n    padding: 0;\n    font-size: 1.5rem;\n    font-family: 'firestarterregular';\n    z-index: 2;\n}\n\n#svg-object {\n    transition: all ease .5s;\n    z-index: 1;\n    \n}\n\n.grill-top:hover #svg-object {\n    transform: rotate(-.15turn) translate(-5%, -70%);\n}\n\n.grill-top:hover > h3 {\n    color: #FFDB58;\n    transform: scale(1.1);\n    background-color: transparent;\n}\n\n.grill-top {\n    position: absolute;\n    top: 5rem;\n    left: 0;\n    right: 1.25rem;\n    margin: 0 auto;\n    width: fit-content;\n    z-index: 1;\n    cursor: pointer;\n}\n\n.grill-top h3 {\n    position: absolute;\n    top: 5rem;\n    left: 6.75rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n    padding: .5rem;\n    background-color: #FFDB58;\n    border-radius: 30px;\n}\n\n.grill-bottom {\n    position: relative;\n    width: fit-content;\n    z-index: 0;\n    cursor: pointer;\n}\n\n.grill-bottom h3 {\n    position: absolute;\n    top: 11.5rem;\n    left: 6.5rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n    padding: .5rem;\n    background-color: #FFDB58;\n    border-radius: 30px;\n}\n\n.grill-bottom:hover h3 {\n    color: #FFDB58;\n    transform: scale(1.1);\n    background-color: #003B1B;\n}\n\n\n/* Menu */\n\n\n.menu-items {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(clamp(20rem, 100%, 32rem), 1fr));\n    justify-items: center;\n    gap: 3rem;\n    margin: 2rem 0;\n}\n\n.menu-item {\n    margin: clamp(.25rem, 2%, 2rem) 0;\n    height: clamp(20rem, 100%, 25rem);\n    flex-direction: row;\n    flex-wrap: wrap-reverse;\n    justify-content: space-between;\n    font-size: 2.5rem;\n    background-color: rgba(0, 0, 0, .7);\n    padding: 1rem;\n    overflow-y: auto;\n}\n\n.menu-item img {\n    height: 15rem;\n    width: auto;\n    max-width: 13rem;\n    margin: 0 auto;\n}\n\n.menu-item p {\n    margin: 0 auto;\n    padding: 0;\n    width: clamp(9rem, 80%, 12rem);\n}\n\n/* About */\n\n\n.flex-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n\n.about {\n    padding-bottom: 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: clamp(1rem, 4vw, 1.25rem);\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.about-section {\n    color: white;\n    line-height: 2rem;\n}\n\n.container-contact {\n    padding: 1rem 1rem 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: clamp(1rem, 4vw, 1.25rem);\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.container-contact ul {\n    list-style: none;\n    color: white;\n    line-height: 2rem;\n    padding: 0;\n    margin: 1rem 0 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n\n@media screen and (max-width: 800px) {\n    .hamburgerGrill {\n        background-image: none;\n        mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n        -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n        mask-size: contain;\n        -webkit-mask-size: contain;\n        mask-repeat: no-repeat;\n        -webkit-mask-repeat: no-repeat;\n        mask-position: center;\n        -webkit-mask-position: center;\n        \n        background-color: rgba(255, 0, 0, 1);\n        border-radius: 20px;\n        padding: 1rem 0 ;\n        margin-right: 1rem;\n        opacity: 1;\n        position: absolute;\n        transform: scale(1);\n        min-width: 5rem;\n        min-height: 5rem;\n        z-index: 3;\n        cursor: pointer;\n    }\n\n    .hamburgerGrill:checked {\n        mask-image: none;\n        -webkit-mask-image: none;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n        position: static;\n        margin-right: 2rem;\n    }\n\n    .open-hamburger {\n        opacity: 0;\n        transform: translate(0, 0);\n        z-index: 3;\n        pointer-events: none;\n        user-select: none;\n        position: absolute;\n        right: 2rem;\n    }\n    .hamburgerGrill:checked + .open-hamburger {\n        pointer-events:all ;\n        user-select: all;\n        opacity: 1;\n        transform: translate(0, 13rem);\n        transition: all ease .5s;        \n        z-index: 4;\n    }\n    .open-hamburger ul {\n        flex-direction: column;\n    }\n    .open-hamburger ul li {\n        padding: 2rem;\n        background-color: rgb(255, 0, 0);\n        border-radius: 20px;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'firestarterregular';\n    src: url('fonts/firestarter-webfont.woff2') format('woff2'),\n         url('fonts/firestarter-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n\n/* Header */\n\n:root {\n    background-color: black;\n    height: 100vh;\n    width: 100%;\n    overflow-y: auto;\n}\n\nbody {\n    background-image: url('./images/brisket.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    margin: 0;\n    height: 100vh;\n    width: 100%;\n    padding-bottom: 2rem;\n    overflow-y: auto;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .7);\n    width: 100%;\n    height: 8rem;\n    position: relative;\n}\n\n.title {\n    flex-basis: 60%;\n    color: red;\n    border-bottom: 2px double red;\n    padding-bottom: 4px;\n    padding-top: 1rem;\n    margin: 0 0 0 clamp(.5rem, 5% ,3.5rem);\n    width: fit-content;\n    min-width: 13rem;\n    max-width: 20rem;\n    height: 3rem;\n    font-family: 'firestarterregular';\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n.hamburgerGrill {\n    appearance: none;\n    background-image: url('images/bottomGrill.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    background-color: rgba(255, 0, 0, 1);\n    opacity: .6;\n    padding: 1rem 2rem 0 1.5rem;\n    margin-right: 1rem;\n    border-radius: 0;\n    right: 1rem;\n    position: absolute;\n    transform: scale(1);\n    min-width: 5rem;\n    min-height: 5rem;\n    z-index: 3;\n    cursor: pointer;\n    border-radius: 20px;\n}\n\n.hamburgerGrill:checked {\n    background-image: none;\n    mask-image: url('images/topGrill.svg');\n    -webkit-mask-image: url('images/topGrill.svg');\n    mask-size: contain;\n    -webkit-mask-size: contain;\n    mask-repeat: no-repeat;\n    -webkit-mask-repeat: no-repeat;\n    mask-position: center;\n    -webkit-mask-position: center;\n    \n    background-color: rgba(255, 0, 0, 1);\n    border-radius: 20px;\n    padding: 1rem 0 ;\n    opacity: 1;\n}\n\n.hamburgerGrill:hover {\n    transform: scale(1.1);\n    opacity: 1;\n    background-color: #FFDB58;\n    \n}\n\n.hamburgerGrill:checked + .open-hamburger {\n    opacity: 0;\n    pointer-events: none;\n    user-select: none;\n    transform: translateX(0);\n    transition: all ease .5s;\n}\n\n.open-hamburger {\n    height: 5rem;\n    width: fit-content;\n    right: 0;\n    top: 1.5rem;\n    padding: 0;\n    transform: translateX(-8.5rem);\n    transition: all ease .5s;\n    cursor: pointer;\n}\n\n.open-hamburger ul {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    width: 100%;\n    height: 100%;\n}\n\n.open-hamburger ul li {\n    background-color: rgba(255, 0, 0, 1);\n    opacity: .6;\n    height: 100%;\n    width: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 20px;\n    border-bottom: red;\n}\n\n.open-hamburger ul li:hover {\n    transform: scale(1.1);\n    opacity: 1;\n    \n}\n\n\n\n\n/*------ Grill -------*/\n.container {\n    opacity: .95;\n    height: fit-content;\n    width: clamp(20rem, 80%, 28rem);\n    padding: 1rem clamp(1rem, 10%, 4rem) 0;\n    background-color: rgba(0, 0, 0, .6);\n\n    margin: 2rem auto;\n    border-radius: 10px;\n    text-align: center;\n    color: red;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    box-shadow: 2px 2px 5px black;\n}\n\n.first-text {\n    margin: 0 0 1rem 0;\n    padding: 0;\n    font-size: 1.5rem;\n    font-family: 'firestarterregular';\n    z-index: 2;\n}\n\n#svg-object {\n    transition: all ease .5s;\n    z-index: 1;\n    \n}\n\n.grill-top:hover #svg-object {\n    transform: rotate(-.15turn) translate(-5%, -70%);\n}\n\n.grill-top:hover > h3 {\n    color: #FFDB58;\n    transform: scale(1.1);\n    background-color: transparent;\n}\n\n.grill-top {\n    position: absolute;\n    top: 5rem;\n    left: 0;\n    right: 1.25rem;\n    margin: 0 auto;\n    width: fit-content;\n    z-index: 1;\n    cursor: pointer;\n}\n\n.grill-top h3 {\n    position: absolute;\n    top: 5rem;\n    left: 6.75rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n    padding: .5rem;\n    background-color: #FFDB58;\n    border-radius: 30px;\n}\n\n.grill-bottom {\n    position: relative;\n    width: fit-content;\n    z-index: 0;\n    cursor: pointer;\n}\n\n.grill-bottom h3 {\n    position: absolute;\n    top: 11.5rem;\n    left: 6.5rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n    padding: .5rem;\n    background-color: #FFDB58;\n    border-radius: 30px;\n}\n\n.grill-bottom:hover h3 {\n    color: #FFDB58;\n    transform: scale(1.1);\n    background-color: #003B1B;\n}\n\n\n/* Menu */\n\n\n.menu-items {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(clamp(20rem, 100%, 32rem), 1fr));\n    justify-items: center;\n    gap: 3rem;\n    margin: 2rem 0;\n}\n\n.menu-item {\n    margin: clamp(.25rem, 2%, 2rem) 0;\n    height: clamp(20rem, 100%, 25rem);\n    flex-direction: row;\n    flex-wrap: wrap-reverse;\n    justify-content: space-between;\n    font-size: 2.5rem;\n    background-color: rgba(0, 0, 0, .7);\n    padding: 1rem;\n    overflow-y: auto;\n}\n\n.menu-item img {\n    height: 15rem;\n    width: auto;\n    max-width: 13rem;\n    margin: 0 auto;\n}\n\n.menu-item p {\n    margin: 0 auto;\n    padding: 0;\n    width: clamp(9rem, 80%, 12rem);\n}\n\n/* About */\n\n\n.flex-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n\n.about {\n    padding-bottom: 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: clamp(1rem, 4vw, 1.25rem);\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.about-section {\n    color: white;\n    line-height: 2rem;\n}\n\n.container-contact {\n    padding: 1rem 1rem 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: clamp(1rem, 4vw, 1.25rem);\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.container-contact ul {\n    list-style: none;\n    color: white;\n    line-height: 2rem;\n    padding: 0;\n    margin: 1rem 0 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n\n@media screen and (max-width: 800px) {\n    .hamburgerGrill {\n        background-image: none;\n        mask-image: url('images/topGrill.svg');\n        -webkit-mask-image: url('images/topGrill.svg');\n        mask-size: contain;\n        -webkit-mask-size: contain;\n        mask-repeat: no-repeat;\n        -webkit-mask-repeat: no-repeat;\n        mask-position: center;\n        -webkit-mask-position: center;\n        \n        background-color: rgba(255, 0, 0, 1);\n        border-radius: 20px;\n        padding: 1rem 0 ;\n        margin-right: 1rem;\n        opacity: 1;\n        position: absolute;\n        transform: scale(1);\n        min-width: 5rem;\n        min-height: 5rem;\n        z-index: 3;\n        cursor: pointer;\n    }\n\n    .hamburgerGrill:checked {\n        mask-image: none;\n        -webkit-mask-image: none;\n        background-image: url('images/bottomGrill.svg');\n        position: static;\n        margin-right: 2rem;\n    }\n\n    .open-hamburger {\n        opacity: 0;\n        transform: translate(0, 0);\n        z-index: 3;\n        pointer-events: none;\n        user-select: none;\n        position: absolute;\n        right: 2rem;\n    }\n    .hamburgerGrill:checked + .open-hamburger {\n        pointer-events:all ;\n        user-select: all;\n        opacity: 1;\n        transform: translate(0, 13rem);\n        transition: all ease .5s;        \n        z-index: 4;\n    }\n    .open-hamburger ul {\n        flex-direction: column;\n    }\n    .open-hamburger ul li {\n        padding: 2rem;\n        background-color: rgb(255, 0, 0);\n        border-radius: 20px;\n    }\n}\n"],"sourceRoot":""}]);
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
    object2.setAttribute('type', "image/svg+xml");
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
        svgObject2.contentDocument.querySelector('.aboutText').setAttribute("stroke", "none");
        svgObject2.contentDocument.querySelector('.price-tag').setAttribute("fill", "#014421");
        svgObject2.contentDocument.querySelector('.aboutText').setAttribute("fill", "red");

        function changeVentColors(event) {
            if (event.type === 'mouseleave') {
                svgObject.contentDocument.querySelectorAll(".vents").forEach(vent => vent.setAttribute("fill", "#e2582270"));
            } else if (event.type === 'mouseenter') {
                svgObject.contentDocument.querySelectorAll(".vents").forEach(vent => vent.setAttribute("fill", "black"));
            }
        }
    
        function changeTagColor(event) {
            if (event.type === 'mouseleave') {
                svgObject2.contentDocument.querySelector('.price-tag').setAttribute("fill", "#014421");
                svgObject2.contentDocument.querySelector('.aboutText').setAttribute("fill", "red");
            } else if (event.type === 'mouseenter') {
                svgObject2.contentDocument.querySelector('.price-tag').setAttribute("fill", "#FFDB58");
                svgObject2.contentDocument.querySelector('.aboutText').setAttribute("fill", "black");
            }
        }
    
        grillTop.addEventListener('mouseenter', changeVentColors);
        grillTop.addEventListener('mouseleave', changeVentColors);
        grillBottom.addEventListener('mouseenter', changeTagColor);
        grillBottom.addEventListener('mouseleave', changeTagColor);
    
    }, 250);
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

module.exports = __webpack_require__.p + "192ff322acdd1ab37239.svg";

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

module.exports = __webpack_require__.p + "ff4b31d83f5576cd1e13.svg";

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









(function init() {
    (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.grillParts)();
    (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.addGrillFeatures)();
    (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createTabs)();
})();








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksU0FBUyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFX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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDd0M7QUFDK0I7QUFDbEQ7QUFDZTtBQUNXO0FBQ1Q7OztBQUd0QztBQUNBLElBQUkscURBQVU7QUFDZCxJQUFJLDJEQUFnQjtBQUNwQixJQUFJLHFEQUFVO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udHMvZmlyZXN0YXJ0ZXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnRzL2ZpcmVzdGFydGVyLXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JyaXNrZXQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL2JvdHRvbUdyaWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcImltYWdlcy90b3BHcmlsbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG46cm9vdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZmxleC1iYXNpczogNjAlO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZG91YmxlIHJlZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgY2xhbXAoLjVyZW0sIDUlICwzLjVyZW0pO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogMTNyZW07XFxuICAgIG1heC13aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGwge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbiAgICBvcGFjaXR5OiAuNjtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtIDAgMS41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG1pbi13aWR0aDogNXJlbTtcXG4gICAgbWluLWhlaWdodDogNXJlbTtcXG4gICAgei1pbmRleDogMztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRCNTg7XFxuICAgIFxcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZCArIC5vcGVuLWhhbWJ1cmdlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOC41cmVtKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB1bCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm9wZW4taGFtYnVyZ2VyIHVsIGxpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbiAgICBvcGFjaXR5OiAuNjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IHJlZDtcXG59XFxuXFxuLm9wZW4taGFtYnVyZ2VyIHVsIGxpOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLyotLS0tLS0gR3JpbGwgLS0tLS0tLSovXFxuLmNvbnRhaW5lciB7XFxuICAgIG9wYWNpdHk6IC45NTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IGNsYW1wKDIwcmVtLCA4MCUsIDI4cmVtKTtcXG4gICAgcGFkZGluZzogMXJlbSBjbGFtcCgxcmVtLCAxMCUsIDRyZW0pIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xcblxcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG5cXG4uZmlyc3QtdGV4dCB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI3N2Zy1vYmplY3Qge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbn1cXG5cXG4uZ3JpbGwtdG9wOmhvdmVyICNzdmctb2JqZWN0IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLS4xNXR1cm4pIHRyYW5zbGF0ZSgtNSUsIC03MCUpO1xcbn1cXG5cXG4uZ3JpbGwtdG9wOmhvdmVyID4gaDMge1xcbiAgICBjb2xvcjogI0ZGREI1ODtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmdyaWxsLXRvcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMS4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpbGwtdG9wIGgzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVyZW07XFxuICAgIGxlZnQ6IDYuNzVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQjU4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG4uZ3JpbGwtYm90dG9tIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWxsLWJvdHRvbSBoMyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMS41cmVtO1xcbiAgICBsZWZ0OiA2LjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQjU4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG4uZ3JpbGwtYm90dG9tOmhvdmVyIGgzIHtcXG4gICAgY29sb3I6ICNGRkRCNTg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwM0IxQjtcXG59XFxuXFxuXFxuLyogTWVudSAqL1xcblxcblxcbi5tZW51LWl0ZW1zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjbGFtcCgyMHJlbSwgMTAwJSwgMzJyZW0pLCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIG1hcmdpbjogMnJlbSAwO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgbWFyZ2luOiBjbGFtcCguMjVyZW0sIDIlLCAycmVtKSAwO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDIwcmVtLCAxMDAlLCAyNXJlbSk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm1lbnUtaXRlbSBpbWcge1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxM3JlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5tZW51LWl0ZW0gcCB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogY2xhbXAoOXJlbSwgODAlLCAxMnJlbSk7XFxufVxcblxcbi8qIEFib3V0ICovXFxuXFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDR2dywgMS4yNXJlbSk7XFxuICAgIHdpZHRoOiBjbGFtcCgyMHJlbSwgOTAlLCAyOHJlbSk7XFxufVxcblxcbi5hYm91dC1zZWN0aW9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lci1jb250YWN0IHtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDR2dywgMS4yNXJlbSk7XFxuICAgIHdpZHRoOiBjbGFtcCgyMHJlbSwgOTAlLCAyOHJlbSk7XFxufVxcblxcbi5jb250YWluZXItY29udGFjdCB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMXJlbSAwIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgLmhhbWJ1cmdlckdyaWxsIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICAgICAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICAgICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBtaW4td2lkdGg6IDVyZW07XFxuICAgICAgICBtaW4taGVpZ2h0OiA1cmVtO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAuaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZCB7XFxuICAgICAgICBtYXNrLWltYWdlOiBub25lO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLm9wZW4taGFtYnVyZ2VyIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDJyZW07XFxuICAgIH1cXG4gICAgLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQgKyAub3Blbi1oYW1idXJnZXIge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6YWxsIDtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBhbGw7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTNyZW0pO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzOyAgICAgICAgXFxuICAgICAgICB6LWluZGV4OiA0O1xcbiAgICB9XFxuICAgIC5vcGVuLWhhbWJ1cmdlciB1bCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5vcGVuLWhhbWJ1cmdlciB1bCBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFw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Q25DLG9DQUFvQztJQUNwQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixtREFBc0M7UUFDdEMsMkRBQThDO1FBQzlDLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5QixxQkFBcUI7UUFDckIsNkJBQTZCOztRQUU3QixvQ0FBb0M7UUFDcEMsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIseURBQStDO1FBQy9DLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsMEJBQTBCO1FBQzFCLFVBQVU7UUFDVixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLDhCQUE4QjtRQUM5Qix3QkFBd0I7UUFDeEIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGFBQWE7UUFDYixnQ0FBZ0M7UUFDaEMsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoJ2ZvbnRzL2ZpcmVzdGFydGVyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICAgdXJsKCdmb250cy9maXJlc3RhcnRlci13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLyogSGVhZGVyICovXFxuXFxuOnJvb3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2JyaXNrZXQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZmxleC1iYXNpczogNjAlO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZG91YmxlIHJlZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgY2xhbXAoLjVyZW0sIDUlICwzLjVyZW0pO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi13aWR0aDogMTNyZW07XFxuICAgIG1heC13aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGwge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9ib3R0b21HcmlsbC5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTtcXG4gICAgb3BhY2l0eTogLjY7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAwIDEuNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBtaW4td2lkdGg6IDVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoJ2ltYWdlcy90b3BHcmlsbC5zdmcnKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJ2ltYWdlcy90b3BHcmlsbC5zdmcnKTtcXG4gICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtIDAgO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRCNTg7XFxuICAgIFxcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZCArIC5vcGVuLWhhbWJ1cmdlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOC41cmVtKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB1bCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm9wZW4taGFtYnVyZ2VyIHVsIGxpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbiAgICBvcGFjaXR5OiAuNjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IHJlZDtcXG59XFxuXFxuLm9wZW4taGFtYnVyZ2VyIHVsIGxpOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuLyotLS0tLS0gR3JpbGwgLS0tLS0tLSovXFxuLmNvbnRhaW5lciB7XFxuICAgIG9wYWNpdHk6IC45NTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IGNsYW1wKDIwcmVtLCA4MCUsIDI4cmVtKTtcXG4gICAgcGFkZGluZzogMXJlbSBjbGFtcCgxcmVtLCAxMCUsIDRyZW0pIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xcblxcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG5cXG4uZmlyc3QtdGV4dCB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI3N2Zy1vYmplY3Qge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbn1cXG5cXG4uZ3JpbGwtdG9wOmhvdmVyICNzdmctb2JqZWN0IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLS4xNXR1cm4pIHRyYW5zbGF0ZSgtNSUsIC03MCUpO1xcbn1cXG5cXG4uZ3JpbGwtdG9wOmhvdmVyID4gaDMge1xcbiAgICBjb2xvcjogI0ZGREI1ODtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmdyaWxsLXRvcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMS4yNXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpbGwtdG9wIGgzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVyZW07XFxuICAgIGxlZnQ6IDYuNzVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQjU4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG4uZ3JpbGwtYm90dG9tIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWxsLWJvdHRvbSBoMyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMS41cmVtO1xcbiAgICBsZWZ0OiA2LjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQjU4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbn1cXG5cXG4uZ3JpbGwtYm90dG9tOmhvdmVyIGgzIHtcXG4gICAgY29sb3I6ICNGRkRCNTg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwM0IxQjtcXG59XFxuXFxuXFxuLyogTWVudSAqL1xcblxcblxcbi5tZW51LWl0ZW1zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjbGFtcCgyMHJlbSwgMTAwJSwgMzJyZW0pLCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIG1hcmdpbjogMnJlbSAwO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgbWFyZ2luOiBjbGFtcCguMjVyZW0sIDIlLCAycmVtKSAwO1xcbiAgICBoZWlnaHQ6IGNsYW1wKDIwcmVtLCAxMDAlLCAyNXJlbSk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm1lbnUtaXRlbSBpbWcge1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxM3JlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5tZW51LWl0ZW0gcCB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogY2xhbXAoOXJlbSwgODAlLCAxMnJlbSk7XFxufVxcblxcbi8qIEFib3V0ICovXFxuXFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDR2dywgMS4yNXJlbSk7XFxuICAgIHdpZHRoOiBjbGFtcCgyMHJlbSwgOTAlLCAyOHJlbSk7XFxufVxcblxcbi5hYm91dC1zZWN0aW9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lci1jb250YWN0IHtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDR2dywgMS4yNXJlbSk7XFxuICAgIHdpZHRoOiBjbGFtcCgyMHJlbSwgOTAlLCAyOHJlbSk7XFxufVxcblxcbi5jb250YWluZXItY29udGFjdCB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMXJlbSAwIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgLmhhbWJ1cmdlckdyaWxsIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICAgICAgICBtYXNrLWltYWdlOiB1cmwoJ2ltYWdlcy90b3BHcmlsbC5zdmcnKTtcXG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdpbWFnZXMvdG9wR3JpbGwuc3ZnJyk7XFxuICAgICAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgICAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMCA7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG1pbi13aWR0aDogNXJlbTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDVyZW07XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXJHcmlsbDpjaGVja2VkIHtcXG4gICAgICAgIG1hc2staW1hZ2U6IG5vbmU7XFxuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9ib3R0b21HcmlsbC5zdmcnKTtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLm9wZW4taGFtYnVyZ2VyIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDJyZW07XFxuICAgIH1cXG4gICAgLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQgKyAub3Blbi1oYW1idXJnZXIge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6YWxsIDtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBhbGw7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTNyZW0pO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzOyAgICAgICAgXFxuICAgICAgICB6LWluZGV4OiA0O1xcbiAgICB9XFxuICAgIC5vcGVuLWhhbWJ1cmdlciB1bCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5vcGVuLWhhbWJ1cmdlciB1bCBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2RlbGV0ZVBhZ2UsIGNyZWF0ZVRhYnN9IGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IHtjcmVhdGVIZWFkZXJ9IGZyb20gJy4vaGVhZGVyJ1xuXG5mdW5jdGlvbiBjcmVhdGVBYm91dCgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgZGVsZXRlUGFnZShjb250ZW50KTtcbiAgICBjcmVhdGVIZWFkZXIoKTtcblxuICAgIGNvbnN0IGZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29udGFpbmVyJyk7XG5cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lckNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXJDb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lckNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWNvbnRhY3QnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdmaXJzdC10ZXh0Jyk7XG4gICAgY29uc3QgdGl0bGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0Fib3V0Jyk7XG5cbiAgICBjb25zdCB0aXRsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlMi5jbGFzc0xpc3QuYWRkKCdmaXJzdC10ZXh0Jyk7XG4gICAgY29uc3QgdGl0bGVDb250ZW50MiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdDb250YWN0IFVzJyk7XG5cbiAgICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXNlY3Rpb24nKTtcbiAgICBjb25zdCBhYm91dFNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1Ntb2tleSBNb3VudGFpbiBNZWF0cyBpcyBhIGZhbWlseS1ydW4gQkJRIHJlc3RhdXJhbnQgYXQgdGhlIGNvbmNsdXNpb24gb2YgdGhlIEFwcGFsYWNoaWFuIE1vdW50YWlucyBpbiBFYXN0ZXJuIFRlbm5lc3NlZS4gV2Ugc3BlY2lhbGl6ZSBpbiBvdXIgc21va2VkIGJyaXNrZXQsIHNhdGlzZnkgc3dlZXQgdG9vdGhzIHdpdGggb3VyIGNvcm5icmVhZCwgYW5kIHByb2R1Y2UgbGl0dGxlIFBvcGV5ZVxcJ2QgY2hpbGRyZW4gd2l0aCBvdXIgZnJlc2ggY29sbGFyZCBncmVlbnMuJyk7XG4gXG4gICAgY29uc3QgY29udGFjdFVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgIGNvbnN0IGhvdXJzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdFdmVyeWRheTogNXBtIC0gMTFwbScpO1xuICAgIGNvbnN0IHBob25lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQaG9uZTogWFhYLVhYWC1YWFhYJyk7XG4gICAgY29uc3QgYWRkcmVzc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQWRkcmVzczogMyBQYWNpZmljIEF2ZW51ZSwgVGhlIE1pbGt5IFdheScpO1xuICAgIGNvbnN0IGVtYWlsQ29udGVudCA9IGRvY3VtZW50LiBjcmVhdGVUZXh0Tm9kZSgnRW1haWw6IHByaW1lY3V0QHNtb2tlZGludGhlc21va2llcy5jb20nKTtcblxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzQ29udGVudCk7XG4gICAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVDb250ZW50KTtcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NDb250ZW50KTtcbiAgICBlbWFpbC5hcHBlbmRDaGlsZChlbWFpbENvbnRlbnQpO1xuXG4gICAgY29udGFjdFVsLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICBjb250YWN0VWwuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIGNvbnRhY3RVbC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBjb250YWN0VWwuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIFxuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlQ29udGVudCk7XG4gICAgdGl0bGUyLmFwcGVuZENoaWxkKHRpdGxlQ29udGVudDIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGFpbmVyQ29udGFjdC5hcHBlbmRDaGlsZCh0aXRsZTIpO1xuICAgIGNvbnRhaW5lckNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFVsKTtcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uQ29udGVudCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbik7XG4gICAgZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ29udGFjdCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmbGV4Q29udGFpbmVyKTtcblxuICAgIGNyZWF0ZVRhYnMoKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVBYm91dH0iLCJmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICBjb25zdCB0aXRsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU21va2V5IE1vdW50YWluIE1lYXRzJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBoYW1idXJnZXJHcmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGhhbWJ1cmdlckdyaWxsLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBoYW1idXJnZXJHcmlsbC5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXJHcmlsbCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgb3BlbkhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcGVuSGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ29wZW4taGFtYnVyZ2VyJyk7XG4gICAgICAgIGNvbnN0IG9wZW5VbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnN0IGxpSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpSG9tZS5pZCA9ICdob21lLWlkJztcbiAgICAgICAgY29uc3QgbGlIb21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdIb21lJyk7XG4gICAgICAgIGNvbnN0IGxpTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpTWVudS5pZCA9ICdtZW51LWlkJ1xuICAgICAgICBjb25zdCBsaU1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ01lbnUnKTtcbiAgICAgICAgY29uc3QgbGlBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpQWJvdXQuaWQgPSAnYWJvdXQtaWQnXG4gICAgICAgIGNvbnN0IGxpQWJvdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0Fib3V0Jyk7XG5cbiAgICAgICAgbGlIb21lLmFwcGVuZENoaWxkKGxpSG9tZUNvbnRlbnQpO1xuICAgICAgICBsaU1lbnUuYXBwZW5kQ2hpbGQobGlNZW51Q29udGVudCk7XG4gICAgICAgIGxpQWJvdXQuYXBwZW5kQ2hpbGQobGlBYm91dENvbnRlbnQpO1xuXG4gICAgICAgIG9wZW5VbC5hcHBlbmRDaGlsZChsaUhvbWUpO1xuICAgICAgICBvcGVuVWwuYXBwZW5kQ2hpbGQobGlNZW51KTtcbiAgICAgICAgb3BlblVsLmFwcGVuZENoaWxkKGxpQWJvdXQpO1xuXG4gICAgICAgIG9wZW5IYW1idXJnZXIuYXBwZW5kQ2hpbGQob3BlblVsKTtcblxuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRlbnQpO1xuXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoYW1idXJnZXJHcmlsbCk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChvcGVuSGFtYnVyZ2VyKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuXG4gICAgZXhwb3J0IHtjcmVhdGVIZWFkZXJ9IiwiaW1wb3J0IEljb25Cb3R0b20gZnJvbSAnLi9pbWFnZXMvYm90dG9tR3JpbGwuc3ZnJztcbmltcG9ydCBJY29uVG9wIGZyb20gJy4vaW1hZ2VzL3RvcEdyaWxsLnN2Zyc7XG5cbmltcG9ydCB7IGNyZWF0ZUFib3V0IH0gZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4vaGVhZGVyJztcblxuXG5mdW5jdGlvbiBncmlsbFBhcnRzKCkgeyAgICBcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgZGVsZXRlUGFnZShjb250ZW50KTtcblxuICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb25zdCBncmlsbFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWxsVG9wLmNsYXNzTGlzdC5hZGQoJ2dyaWxsLXRvcCcpO1xuICAgIGNvbnN0IGdyaWxsQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpbGxCb3R0b20uY2xhc3NMaXN0LmFkZCgnZ3JpbGwtYm90dG9tJyk7XG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgnZmlyc3QtdGV4dCcpO1xuICAgIGNvbnN0IHRleHQxQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdGYWxsaW5nIG9mZiB0aGUgYm9uZSBzaW5jZSAxOTk3Jyk7XG4gICAgY29uc3Qgb2JqZWN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xuICAgIG9iamVjdDEuaWQgPSAnc3ZnLW9iamVjdCc7XG4gICAgb2JqZWN0MS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcImltYWdlL3N2Zyt4bWxcIik7XG4gICAgb2JqZWN0MS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBJY29uVG9wKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdNZW51Jyk7XG4gICAgY29uc3Qgb2JqZWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xuICAgIG9iamVjdDIuaWQgPSAnc3ZnLW9iamVjdDInO1xuICAgIG9iamVjdDIuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJpbWFnZS9zdmcreG1sXCIpO1xuICAgIG9iamVjdDIuc2V0QXR0cmlidXRlKCdkYXRhJywgSWNvbkJvdHRvbSk7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBYm91dCcpO1xuXG4gICAgXG4gICAgZ3JpbGxUb3AuYXBwZW5kQ2hpbGQob2JqZWN0MSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51Q29udGVudCk7XG4gICAgZ3JpbGxUb3AuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBncmlsbEJvdHRvbS5hcHBlbmRDaGlsZChvYmplY3QyKTtcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQpO1xuICAgIGdyaWxsQm90dG9tLmFwcGVuZENoaWxkKGFib3V0KTtcblxuICAgIHRleHQxLmFwcGVuZENoaWxkKHRleHQxQ29udGVudCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dDEpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlsbFRvcCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWxsQm90dG9tKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGdyaWxsVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTWVudSk7XG4gICAgZ3JpbGxCb3R0b20uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBYm91dCk7XG5cbiAgICBjcmVhdGVUYWJzKCk7XG5cbn07XG5cbmZ1bmN0aW9uIGFkZEdyaWxsRmVhdHVyZXMoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3Qgc3ZnT2JqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N2Zy1vYmplY3QnKTtcbiAgICAgICAgY29uc3Qgc3ZnT2JqZWN0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdmctb2JqZWN0MicpO1xuICAgICAgICBjb25zdCBncmlsbFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlsbC10b3AnKTtcbiAgICAgICAgY29uc3QgZ3JpbGxCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpbGwtYm90dG9tJyk7XG4gICAgICAgIFxuICAgIFxuICAgICAgICBzdmdPYmplY3QuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmVudHNcIikuZm9yRWFjaCh2ZW50ID0+IHZlbnQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiNlMjU4MjI3MFwiKSk7XG4gICAgICAgIHN2Z09iamVjdDIuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dFRleHQnKS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJub25lXCIpO1xuICAgICAgICBzdmdPYmplY3QyLmNvbnRlbnREb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2UtdGFnJykuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiMwMTQ0MjFcIik7XG4gICAgICAgIHN2Z09iamVjdDIuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dFRleHQnKS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmVkXCIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZVZlbnRDb2xvcnMoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2VsZWF2ZScpIHtcbiAgICAgICAgICAgICAgICBzdmdPYmplY3QuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmVudHNcIikuZm9yRWFjaCh2ZW50ID0+IHZlbnQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiNlMjU4MjI3MFwiKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWVudGVyJykge1xuICAgICAgICAgICAgICAgIHN2Z09iamVjdC5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52ZW50c1wiKS5mb3JFYWNoKHZlbnQgPT4gdmVudC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiYmxhY2tcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZVRhZ0NvbG9yKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgICAgICAgICAgICAgc3ZnT2JqZWN0Mi5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlLXRhZycpLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjMDE0NDIxXCIpO1xuICAgICAgICAgICAgICAgIHN2Z09iamVjdDIuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dFRleHQnKS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmVkXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnbW91c2VlbnRlcicpIHtcbiAgICAgICAgICAgICAgICBzdmdPYmplY3QyLmNvbnRlbnREb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2UtdGFnJykuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiNGRkRCNThcIik7XG4gICAgICAgICAgICAgICAgc3ZnT2JqZWN0Mi5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0VGV4dCcpLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJibGFja1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBncmlsbFRvcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgY2hhbmdlVmVudENvbG9ycyk7XG4gICAgICAgIGdyaWxsVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBjaGFuZ2VWZW50Q29sb3JzKTtcbiAgICAgICAgZ3JpbGxCb3R0b20uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGNoYW5nZVRhZ0NvbG9yKTtcbiAgICAgICAgZ3JpbGxCb3R0b20uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGNoYW5nZVRhZ0NvbG9yKTtcbiAgICBcbiAgICB9LCAyNTApO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQYWdlKGNvbnRlbnQpIHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFicygpIHtcbiAgICBcbiAgICBjb25zdCBoZWFkZXJIMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBoMScpO1xuICAgIFxuICAgIGhlYWRlckgxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3JpbGxQYXJ0cyk7XG4gICAgaGVhZGVySDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRHcmlsbEZlYXR1cmVzKTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1pZCcpO1xuXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdyaWxsUGFydHMpO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRHcmlsbEZlYXR1cmVzKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1pZCcpO1xuXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU1lbnUpO1xuXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtaWQnKTtcblxuICAgIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlQWJvdXQpO1xuXG59O1xuXG5leHBvcnQge2dyaWxsUGFydHMsIGFkZEdyaWxsRmVhdHVyZXMsIGRlbGV0ZVBhZ2UsIGNyZWF0ZVRhYnN9IiwiaW1wb3J0IEljb25Ccmlza2V0IGZyb20gJy4vaW1hZ2VzL2JyaXNrZXRCYXNrZXQuanBnJztcbmltcG9ydCBJY29uUG9yayBmcm9tICcuL2ltYWdlcy9wdWxsZWRQb3JrLmpwZyc7XG5pbXBvcnQgSWNvbkdyZWVucyBmcm9tICcuL2ltYWdlcy9jb2xsYXJkR3JlZW5zLmpwZyc7XG5pbXBvcnQgSWNvbkNvcm5icmVhZCBmcm9tICcuL2ltYWdlcy9jb3JuYnJlYWQuanBnJztcblxuaW1wb3J0IHtjcmVhdGVIZWFkZXJ9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7ZGVsZXRlUGFnZSwgY3JlYXRlVGFic30gZnJvbSAnLi9ob21lcGFnZSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc29sZS5sb2coJ2hleScpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgZGVsZXRlUGFnZShjb250ZW50KTtcbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LXRleHQnKTtcbiAgICBjb25zdCB0aXRsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnT2ZmIHRoZSBHcmlsbCcpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtcy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW1zJyk7XG5cbiAgICBjb25zdCBmb29kMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2QxLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGZvb2QxLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGNvbnN0IGJyaXNrZXRQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBicmlza2V0UGljLnNyYyA9IEljb25Ccmlza2V0O1xuICAgIGNvbnN0IGZvb2QxVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBmb29kMVRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1RoZSBCcmlza2V0IEJhc2tldCcpO1xuXG4gICAgY29uc3QgZm9vZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kMi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBmb29kMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBjb25zdCBwdWxsZWRQb3JrUGljID0gbmV3IEltYWdlKCk7XG4gICAgcHVsbGVkUG9ya1BpYy5zcmMgPSBJY29uUG9yaztcbiAgICBjb25zdCBmb29kMlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgZm9vZDJUZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQdWxsZWQgUG9yayBTYW5kd2ljaCcpO1xuXG4gICAgY29uc3QgZm9vZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb29kMy5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBmb29kMy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBjb25zdCBjb2xsYXJkUGljID0gbmV3IEltYWdlKCk7XG4gICAgY29sbGFyZFBpYy5zcmMgPSBJY29uR3JlZW5zO1xuICAgIGNvbnN0IGZvb2QzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBmb29kM1RleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NvbGxhcmQgR3JlZW5zJyk7XG5cbiAgICBjb25zdCBmb29kNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2Q0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGZvb2Q0LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGNvbnN0IGNvcm5icmVhZFBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGNvcm5icmVhZFBpYy5zcmMgPSBJY29uQ29ybmJyZWFkO1xuICAgIGNvbnN0IGZvb2Q0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBmb29kNFRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0Nvcm5icmVhZCcpO1xuXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVDb250ZW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgZm9vZDEuYXBwZW5kQ2hpbGQoYnJpc2tldFBpYyk7XG4gICAgZm9vZDFUZXh0LmFwcGVuZENoaWxkKGZvb2QxVGV4dENvbnRlbnQpO1xuICAgIGZvb2QxLmFwcGVuZENoaWxkKGZvb2QxVGV4dCk7XG5cbiAgICBmb29kMi5hcHBlbmRDaGlsZChwdWxsZWRQb3JrUGljKTtcbiAgICBmb29kMlRleHQuYXBwZW5kQ2hpbGQoZm9vZDJUZXh0Q29udGVudCk7XG4gICAgZm9vZDIuYXBwZW5kQ2hpbGQoZm9vZDJUZXh0KTtcblxuICAgIGZvb2QzLmFwcGVuZENoaWxkKGNvbGxhcmRQaWMpO1xuICAgIGZvb2QzVGV4dC5hcHBlbmRDaGlsZChmb29kM1RleHRDb250ZW50KTtcbiAgICBmb29kMy5hcHBlbmRDaGlsZChmb29kM1RleHQpO1xuXG4gICAgZm9vZDQuYXBwZW5kQ2hpbGQoY29ybmJyZWFkUGljKTtcbiAgICBmb29kNFRleHQuYXBwZW5kQ2hpbGQoZm9vZDRUZXh0Q29udGVudCk7XG4gICAgZm9vZDQuYXBwZW5kQ2hpbGQoZm9vZDRUZXh0KTtcblxuICAgXG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGZvb2QxKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoZm9vZDIpO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChmb29kMyk7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGZvb2Q0KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG5cbiAgICBjcmVhdGVUYWJzKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgYWRkR3JpbGxGZWF0dXJlcywgIGdyaWxsUGFydHMsIGNyZWF0ZVRhYnMgfSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IEljb25Ccmlza2V0IGZyb20gJy4vaW1hZ2VzL2JyaXNrZXQuanBnJztcbmltcG9ydCB7IGNyZWF0ZUFib3V0IH0gZnJvbSBcIi4vYWJvdXRcIjtcblxuXG4oZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBncmlsbFBhcnRzKCk7XG4gICAgYWRkR3JpbGxGZWF0dXJlcygpO1xuICAgIGNyZWF0ZVRhYnMoKTtcbn0pKCk7XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==