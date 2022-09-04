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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! images/topGrill.svg */ "./src/images/topGrill.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! images/bottomGrill.svg */ "./src/images/bottomGrill.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'firestarterregular';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n\n/* Header */\n\n:root {\n    background-color: black;\n    height: 100vh;\n    width: 100%;\n    overflow-y: auto;\n}\n\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    margin: 0;\n    height: 100vh;\n    width: 100%;\n    padding-bottom: 2rem;\n    overflow-y: auto;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .7);\n    width: 100%;\n    height: 8rem;\n}\n\n.title {\n    color: red;\n    border-bottom: 2px double red;\n    padding-bottom: 4px;\n    padding-top: 1rem;\n    margin: 0 0 0 3.5rem;\n    width: fit-content;\n    height: 3rem;\n    font-family: 'firestarterregular';\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n.hamburgerGrill:focus {\n    background-image: none;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    mask-size: contain;\n    -webkit-mask-size: contain;\n    mask-repeat: no-repeat;\n    -webkit-mask-repeat: no-repeat;\n    mask-position: center;\n    -webkit-mask-position: center;\n    \n    background-color: rgba(255, 0, 0, 1);\n    border-radius: 20px;\n    padding: 1rem 0 ;\n    margin-right: 1rem;\n    opacity: 1;\n}\n\n.hamburgerGrill:hover {\n    transform: scale(1.1);\n}\n\n.hamburgerGrill {\n    \n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    background-color: rgba(255, 0, 0, .6);\n    padding: 1rem 2rem 0 1.5rem;\n    margin-right: 0;\n    border-radius: 0;\n    right: 1rem;\n    position: fixed;\n    transform: scale(1);\n    min-width: 5rem;\n    min-height: 5rem;\n    z-index: 3;\n    cursor: pointer;\n    \n}\n\n.hamburgerGrill:focus + .open-hamburger {\n    opacity: 0;\n    transform: translateX(0);\n    transition: all ease .5s;\n}\n\n.open-hamburger {\n    height: 5rem;\n    width: fit-content;\n    opacity: 1;\n    position: fixed;\n    right: 0;\n    top: 1.5rem;\n    padding: 0;\n    transform: translateX(-7rem);\n    transition: all ease .5s;\n    cursor: pointer;\n}\n\n.open-hamburger ul {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    width: 100%;\n    height: 100%;\n}\n\n.open-hamburger ul li {\n    background-color: rgba(255, 0, 0, .6);\n    height: 100%;\n    width: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.open-hamburger ul li:hover {\n    transform: scale(1.1);\n}\n\n\n\n\n/*------ Grill -------*/\n.container {\n    opacity: .85;\n    height: fit-content;\n    width: clamp(20rem, 80%, 28rem);\n    padding: 1rem 4rem 0;\n    background-color: rgba(0, 0, 0, .4);\n\n    margin: 1rem auto 0;\n    border-radius: 10px;\n    text-align: center;\n    color: red;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    box-shadow: 2px 2px 5px black;\n    overflow: hidden;\n}\n\n.first-text {\n    margin: 0 0 1rem 0;\n    padding: 0;\n    font-size: 1.5rem;\n    font-family: monospace;\n    z-index: 2;\n}\n\n#svg-object {\n    transition: all ease .5s;\n    z-index: 1;\n    \n}\n\n.grill-top:hover #svg-object {\n    transform: rotate(-.15turn) translate(-5%, -70%);\n}\n\n.grill-top:hover > h3 {\n    color: navy;\n    transform: scale(1.1);\n}\n\n.grill-top {\n    position: absolute;\n    top: 5rem;\n    left: 0;\n    right: 1.25rem;\n    margin: 0 auto;\n    width: fit-content;\n    z-index: 1;\n    cursor: pointer;\n}\n\n.grill-top h3 {\n    position: absolute;\n    top: 5.25rem;\n    left: 7.25rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n}\n\n.grill-bottom {\n    position: relative;\n    width: fit-content;\n    z-index: 0;\n    cursor: pointer;\n}\n\n.grill-bottom h3 {\n    position: absolute;\n    top: 12rem;\n    left: 7rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n}\n\n.grill-bottom:hover h3 {\n    color: #e25822;\n    transform: scale(1.1);\n}\n\n\n/* Menu */\n\n\n.menu-items {\n    display: grid;\n    gap: 2rem;\n}\n\n.menu-item {\n    /* background-image: url(images/brisketBasket.jpg);\n    background-repeat: no-repeat;\n    background-position: left;\n    background-size: contain; */\n    height: 25rem;\n    flex-direction: row;\n    flex-wrap: wrap-reverse;\n    justify-content: space-between;\n    font-size: 2.5rem;\n    background-color: rgba(0, 0, 0, .7);\n    padding: 1rem;\n    overflow-y: auto;\n}\n\n.menu-item img {\n    height: 15rem;\n    width: auto;\n    max-width: 13rem;\n    margin: 0 auto;\n}\n\n.menu-item p {\n    margin: 0 auto;\n    padding: 0;\n    width: clamp(9rem, 80%, 12rem);\n}\n\n/* About */\n\n.about {\n    padding-bottom: 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: 1.5rem;\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.about-section {\n    color: white;\n    line-height: 2rem;\n}\n\n.flex-container {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.container-contact {\n    padding: 1rem 1rem 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: 1.25rem;\n    width: clamp(20rem, 90%, 28rem)\n}\n\n.container-contact ul {\n    list-style: none;\n    color: white;\n    line-height: 2rem;\n    padding: 0;\n    margin: 1rem 0 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n\n@media screen and (max-width: 1023px) {\n    .hamburgerGrill {\n        background-image: none;\n        mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n        -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n        mask-size: contain;\n        -webkit-mask-size: contain;\n        mask-repeat: no-repeat;\n        -webkit-mask-repeat: no-repeat;\n        mask-position: center;\n        -webkit-mask-position: center;\n        \n        background-color: rgba(255, 0, 0, 1);\n        border-radius: 20px;\n        padding: 1rem 0 ;\n        margin-right: 1rem;\n        opacity: 1;\n        position: static;\n        transform: scale(1);\n        min-width: 5rem;\n        min-height: 5rem;\n        z-index: 3;\n        cursor: pointer;\n    }\n\n    .hamburgerGrill:focus {\n        mask-image: none;\n        -webkit-mask-image: none;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n        position: static;\n        margin-right: 1rem;\n    }\n\n    .open-hamburger {\n        right: 1rem;\n        opacity: 0;\n        transform: translate(0);\n    }\n    .hamburgerGrill:focus + .open-hamburger {\n        opacity: 1;\n        transform: translateY(13rem);\n        transition: all ease .5s;\n        position: absolute;\n        z-index: 3;\n    }\n    .open-hamburger ul {\n        flex-direction: column;\n    }\n    .open-hamburger ul li {\n        padding: 2rem;\n        background-color: rgb(255, 0, 0);\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC;+DACyD;IACzD,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA,WAAW;;AAEX;IACI,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,yDAA6C;IAC7C,4BAA4B;IAC5B,2BAA2B;IAC3B,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,WAAW;IACX,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,mCAAmC;IACnC,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,iCAAiC;IACjC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,mDAAsC;IACtC,2DAA8C;IAC9C,kBAAkB;IAClB,0BAA0B;IAC1B,sBAAsB;IACtB,8BAA8B;IAC9B,qBAAqB;IACrB,6BAA6B;;IAE7B,oCAAoC;IACpC,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;IAEI,yDAA+C;IAC/C,4BAA4B;IAC5B,2BAA2B;IAC3B,wBAAwB;IACxB,qCAAqC;IACrC,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,UAAU;IACV,eAAe;;AAEnB;;AAEA;IACI,UAAU;IACV,wBAAwB;IACxB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,QAAQ;IACR,WAAW;IACX,UAAU;IACV,4BAA4B;IAC5B,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,UAAU;IACV,SAAS;IACT,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,qCAAqC;IACrC,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;;;;AAKA,uBAAuB;AACvB;IACI,YAAY;IACZ,mBAAmB;IACnB,+BAA+B;IAC/B,oBAAoB;IACpB,mCAAmC;;IAEnC,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,6BAA6B;IAC7B,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,iBAAiB;IACjB,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,wBAAwB;IACxB,UAAU;;AAEd;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,WAAW;IACX,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,iCAAiC;IACjC,UAAU;IACV,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,iCAAiC;IACjC,UAAU;IACV,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;;AAGA,SAAS;;;AAGT;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI;;;+BAG2B;IAC3B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,8BAA8B;IAC9B,iBAAiB;IACjB,mCAAmC;IACnC,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,UAAU;IACV,8BAA8B;AAClC;;AAEA,UAAU;;AAEV;IACI,oBAAoB;IACpB,mCAAmC;IACnC,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,mCAAmC;IACnC,kBAAkB;IAClB;AACJ;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;;AAGA;IACI;QACI,sBAAsB;QACtB,mDAAsC;QACtC,2DAA8C;QAC9C,kBAAkB;QAClB,0BAA0B;QAC1B,sBAAsB;QACtB,8BAA8B;QAC9B,qBAAqB;QACrB,6BAA6B;;QAE7B,oCAAoC;QACpC,mBAAmB;QACnB,gBAAgB;QAChB,kBAAkB;QAClB,UAAU;QACV,gBAAgB;QAChB,mBAAmB;QACnB,eAAe;QACf,gBAAgB;QAChB,UAAU;QACV,eAAe;IACnB;;IAEA;QACI,gBAAgB;QAChB,wBAAwB;QACxB,yDAA+C;QAC/C,gBAAgB;QAChB,kBAAkB;IACtB;;IAEA;QACI,WAAW;QACX,UAAU;QACV,uBAAuB;IAC3B;IACA;QACI,UAAU;QACV,4BAA4B;QAC5B,wBAAwB;QACxB,kBAAkB;QAClB,UAAU;IACd;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,aAAa;QACb,gCAAgC;IACpC;AACJ","sourcesContent":["@font-face {\n    font-family: 'firestarterregular';\n    src: url('fonts/firestarter-webfont.woff2') format('woff2'),\n         url('fonts/firestarter-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n\n/* Header */\n\n:root {\n    background-color: black;\n    height: 100vh;\n    width: 100%;\n    overflow-y: auto;\n}\n\nbody {\n    background-image: url('./images/brisket.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    margin: 0;\n    height: 100vh;\n    width: 100%;\n    padding-bottom: 2rem;\n    overflow-y: auto;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .7);\n    width: 100%;\n    height: 8rem;\n}\n\n.title {\n    color: red;\n    border-bottom: 2px double red;\n    padding-bottom: 4px;\n    padding-top: 1rem;\n    margin: 0 0 0 3.5rem;\n    width: fit-content;\n    height: 3rem;\n    font-family: 'firestarterregular';\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n.hamburgerGrill:focus {\n    background-image: none;\n    mask-image: url('images/topGrill.svg');\n    -webkit-mask-image: url('images/topGrill.svg');\n    mask-size: contain;\n    -webkit-mask-size: contain;\n    mask-repeat: no-repeat;\n    -webkit-mask-repeat: no-repeat;\n    mask-position: center;\n    -webkit-mask-position: center;\n    \n    background-color: rgba(255, 0, 0, 1);\n    border-radius: 20px;\n    padding: 1rem 0 ;\n    margin-right: 1rem;\n    opacity: 1;\n}\n\n.hamburgerGrill:hover {\n    transform: scale(1.1);\n}\n\n.hamburgerGrill {\n    \n    background-image: url('images/bottomGrill.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    background-color: rgba(255, 0, 0, .6);\n    padding: 1rem 2rem 0 1.5rem;\n    margin-right: 0;\n    border-radius: 0;\n    right: 1rem;\n    position: fixed;\n    transform: scale(1);\n    min-width: 5rem;\n    min-height: 5rem;\n    z-index: 3;\n    cursor: pointer;\n    \n}\n\n.hamburgerGrill:focus + .open-hamburger {\n    opacity: 0;\n    transform: translateX(0);\n    transition: all ease .5s;\n}\n\n.open-hamburger {\n    height: 5rem;\n    width: fit-content;\n    opacity: 1;\n    position: fixed;\n    right: 0;\n    top: 1.5rem;\n    padding: 0;\n    transform: translateX(-7rem);\n    transition: all ease .5s;\n    cursor: pointer;\n}\n\n.open-hamburger ul {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    width: 100%;\n    height: 100%;\n}\n\n.open-hamburger ul li {\n    background-color: rgba(255, 0, 0, .6);\n    height: 100%;\n    width: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.open-hamburger ul li:hover {\n    transform: scale(1.1);\n}\n\n\n\n\n/*------ Grill -------*/\n.container {\n    opacity: .85;\n    height: fit-content;\n    width: clamp(20rem, 80%, 28rem);\n    padding: 1rem 4rem 0;\n    background-color: rgba(0, 0, 0, .4);\n\n    margin: 1rem auto 0;\n    border-radius: 10px;\n    text-align: center;\n    color: red;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    box-shadow: 2px 2px 5px black;\n    overflow: hidden;\n}\n\n.first-text {\n    margin: 0 0 1rem 0;\n    padding: 0;\n    font-size: 1.5rem;\n    font-family: monospace;\n    z-index: 2;\n}\n\n#svg-object {\n    transition: all ease .5s;\n    z-index: 1;\n    \n}\n\n.grill-top:hover #svg-object {\n    transform: rotate(-.15turn) translate(-5%, -70%);\n}\n\n.grill-top:hover > h3 {\n    color: navy;\n    transform: scale(1.1);\n}\n\n.grill-top {\n    position: absolute;\n    top: 5rem;\n    left: 0;\n    right: 1.25rem;\n    margin: 0 auto;\n    width: fit-content;\n    z-index: 1;\n    cursor: pointer;\n}\n\n.grill-top h3 {\n    position: absolute;\n    top: 5.25rem;\n    left: 7.25rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n}\n\n.grill-bottom {\n    position: relative;\n    width: fit-content;\n    z-index: 0;\n    cursor: pointer;\n}\n\n.grill-bottom h3 {\n    position: absolute;\n    top: 12rem;\n    left: 7rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n}\n\n.grill-bottom:hover h3 {\n    color: #e25822;\n    transform: scale(1.1);\n}\n\n\n/* Menu */\n\n\n.menu-items {\n    display: grid;\n    gap: 2rem;\n}\n\n.menu-item {\n    /* background-image: url(images/brisketBasket.jpg);\n    background-repeat: no-repeat;\n    background-position: left;\n    background-size: contain; */\n    height: 25rem;\n    flex-direction: row;\n    flex-wrap: wrap-reverse;\n    justify-content: space-between;\n    font-size: 2.5rem;\n    background-color: rgba(0, 0, 0, .7);\n    padding: 1rem;\n    overflow-y: auto;\n}\n\n.menu-item img {\n    height: 15rem;\n    width: auto;\n    max-width: 13rem;\n    margin: 0 auto;\n}\n\n.menu-item p {\n    margin: 0 auto;\n    padding: 0;\n    width: clamp(9rem, 80%, 12rem);\n}\n\n/* About */\n\n.about {\n    padding-bottom: 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: 1.5rem;\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.about-section {\n    color: white;\n    line-height: 2rem;\n}\n\n.flex-container {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.container-contact {\n    padding: 1rem 1rem 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: 1.25rem;\n    width: clamp(20rem, 90%, 28rem)\n}\n\n.container-contact ul {\n    list-style: none;\n    color: white;\n    line-height: 2rem;\n    padding: 0;\n    margin: 1rem 0 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n\n@media screen and (max-width: 1023px) {\n    .hamburgerGrill {\n        background-image: none;\n        mask-image: url('images/topGrill.svg');\n        -webkit-mask-image: url('images/topGrill.svg');\n        mask-size: contain;\n        -webkit-mask-size: contain;\n        mask-repeat: no-repeat;\n        -webkit-mask-repeat: no-repeat;\n        mask-position: center;\n        -webkit-mask-position: center;\n        \n        background-color: rgba(255, 0, 0, 1);\n        border-radius: 20px;\n        padding: 1rem 0 ;\n        margin-right: 1rem;\n        opacity: 1;\n        position: static;\n        transform: scale(1);\n        min-width: 5rem;\n        min-height: 5rem;\n        z-index: 3;\n        cursor: pointer;\n    }\n\n    .hamburgerGrill:focus {\n        mask-image: none;\n        -webkit-mask-image: none;\n        background-image: url('images/bottomGrill.svg');\n        position: static;\n        margin-right: 1rem;\n    }\n\n    .open-hamburger {\n        right: 1rem;\n        opacity: 0;\n        transform: translate(0);\n    }\n    .hamburgerGrill:focus + .open-hamburger {\n        opacity: 1;\n        transform: translateY(13rem);\n        transition: all ease .5s;\n        position: absolute;\n        z-index: 3;\n    }\n    .open-hamburger ul {\n        flex-direction: column;\n    }\n    .open-hamburger ul li {\n        padding: 2rem;\n        background-color: rgb(255, 0, 0);\n    }\n}\n"],"sourceRoot":""}]);
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
        const hamburgerGrill = document.createElement('div');
        hamburgerGrill.classList.add('hamburgerGrill');
        hamburgerGrill.setAttribute('tabindex', '0');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNklBQWtEO0FBQzlGLDRDQUE0QywySUFBaUQ7QUFDN0YsNENBQTRDLHFIQUF1QztBQUNuRiw0Q0FBNEMscUhBQXNDO0FBQ2xGLDRDQUE0QywySEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0Qsd0NBQXdDLHFKQUFxSiwwQkFBMEIseUJBQXlCLEdBQUcsT0FBTyw2QkFBNkIsR0FBRyw2QkFBNkIsOEJBQThCLG9CQUFvQixrQkFBa0IsdUJBQXVCLEdBQUcsVUFBVSx3RUFBd0UsbUNBQW1DLGtDQUFrQyw2QkFBNkIsZ0JBQWdCLG9CQUFvQixrQkFBa0IsMkJBQTJCLHVCQUF1QixHQUFHLFlBQVksb0JBQW9CLHFDQUFxQywwQkFBMEIsMENBQTBDLGtCQUFrQixtQkFBbUIsR0FBRyxZQUFZLGlCQUFpQixvQ0FBb0MsMEJBQTBCLHdCQUF3QiwyQkFBMkIseUJBQXlCLG1CQUFtQix3Q0FBd0Msd0JBQXdCLHNCQUFzQixHQUFHLDJCQUEyQiw2QkFBNkIsa0VBQWtFLDBFQUEwRSx5QkFBeUIsaUNBQWlDLDZCQUE2QixxQ0FBcUMsNEJBQTRCLG9DQUFvQyxpREFBaUQsMEJBQTBCLHVCQUF1Qix5QkFBeUIsaUJBQWlCLEdBQUcsMkJBQTJCLDRCQUE0QixHQUFHLHFCQUFxQiw4RUFBOEUsbUNBQW1DLGtDQUFrQywrQkFBK0IsNENBQTRDLGtDQUFrQyxzQkFBc0IsdUJBQXVCLGtCQUFrQixzQkFBc0IsMEJBQTBCLHNCQUFzQix1QkFBdUIsaUJBQWlCLHNCQUFzQixTQUFTLDZDQUE2QyxpQkFBaUIsK0JBQStCLCtCQUErQixHQUFHLHFCQUFxQixtQkFBbUIseUJBQXlCLGlCQUFpQixzQkFBc0IsZUFBZSxrQkFBa0IsaUJBQWlCLG1DQUFtQywrQkFBK0Isc0JBQXNCLEdBQUcsd0JBQXdCLDRCQUE0Qix1QkFBdUIsaUJBQWlCLGdCQUFnQixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsa0JBQWtCLGtCQUFrQixtQkFBbUIsR0FBRywyQkFBMkIsNENBQTRDLG1CQUFtQixrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxpQ0FBaUMsNEJBQTRCLEdBQUcsZ0RBQWdELG1CQUFtQiwwQkFBMEIsc0NBQXNDLDJCQUEyQiwwQ0FBMEMsNEJBQTRCLDBCQUEwQix5QkFBeUIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHlCQUF5QixvQ0FBb0MsdUJBQXVCLEdBQUcsaUJBQWlCLHlCQUF5QixpQkFBaUIsd0JBQXdCLDZCQUE2QixpQkFBaUIsR0FBRyxpQkFBaUIsK0JBQStCLGlCQUFpQixTQUFTLGtDQUFrQyx1REFBdUQsR0FBRywyQkFBMkIsa0JBQWtCLDRCQUE0QixHQUFHLGdCQUFnQix5QkFBeUIsZ0JBQWdCLGNBQWMscUJBQXFCLHFCQUFxQix5QkFBeUIsaUJBQWlCLHNCQUFzQixHQUFHLG1CQUFtQix5QkFBeUIsbUJBQW1CLG9CQUFvQix3Q0FBd0MsaUJBQWlCLGlCQUFpQix3QkFBd0IsR0FBRyxtQkFBbUIseUJBQXlCLHlCQUF5QixpQkFBaUIsc0JBQXNCLEdBQUcsc0JBQXNCLHlCQUF5QixpQkFBaUIsaUJBQWlCLHdDQUF3QyxpQkFBaUIsaUJBQWlCLHdCQUF3QixHQUFHLDRCQUE0QixxQkFBcUIsNEJBQTRCLEdBQUcsbUNBQW1DLG9CQUFvQixnQkFBZ0IsR0FBRyxnQkFBZ0IseURBQXlELG1DQUFtQyxnQ0FBZ0MsZ0NBQWdDLHNCQUFzQiwwQkFBMEIsOEJBQThCLHFDQUFxQyx3QkFBd0IsMENBQTBDLG9CQUFvQix1QkFBdUIsR0FBRyxvQkFBb0Isb0JBQW9CLGtCQUFrQix1QkFBdUIscUJBQXFCLEdBQUcsa0JBQWtCLHFCQUFxQixpQkFBaUIscUNBQXFDLEdBQUcsMkJBQTJCLDJCQUEyQiwwQ0FBMEMsd0JBQXdCLHNDQUFzQyxHQUFHLG9CQUFvQixtQkFBbUIsd0JBQXdCLEdBQUcscUJBQXFCLG9CQUFvQixzQkFBc0IsR0FBRyx3QkFBd0IsOEJBQThCLDBDQUEwQyx5QkFBeUIsd0NBQXdDLDJCQUEyQix1QkFBdUIsbUJBQW1CLHdCQUF3QixpQkFBaUIsdUJBQXVCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsNkNBQTZDLHVCQUF1QixpQ0FBaUMsc0VBQXNFLDhFQUE4RSw2QkFBNkIscUNBQXFDLGlDQUFpQyx5Q0FBeUMsZ0NBQWdDLHdDQUF3Qyx5REFBeUQsOEJBQThCLDJCQUEyQiw2QkFBNkIscUJBQXFCLDJCQUEyQiw4QkFBOEIsMEJBQTBCLDJCQUEyQixxQkFBcUIsMEJBQTBCLE9BQU8sK0JBQStCLDJCQUEyQixtQ0FBbUMsNEVBQTRFLDJCQUEyQiw2QkFBNkIsT0FBTyx5QkFBeUIsc0JBQXNCLHFCQUFxQixrQ0FBa0MsT0FBTywrQ0FBK0MscUJBQXFCLHVDQUF1QyxtQ0FBbUMsNkJBQTZCLHFCQUFxQixPQUFPLDBCQUEwQixpQ0FBaUMsT0FBTyw2QkFBNkIsd0JBQXdCLDJDQUEyQyxPQUFPLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksVUFBVSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsWUFBWSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssT0FBTyxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0scUNBQXFDLHdDQUF3QyxrSUFBa0ksMEJBQTBCLHlCQUF5QixHQUFHLE9BQU8sNkJBQTZCLEdBQUcsNkJBQTZCLDhCQUE4QixvQkFBb0Isa0JBQWtCLHVCQUF1QixHQUFHLFVBQVUsb0RBQW9ELG1DQUFtQyxrQ0FBa0MsNkJBQTZCLGdCQUFnQixvQkFBb0Isa0JBQWtCLDJCQUEyQix1QkFBdUIsR0FBRyxZQUFZLG9CQUFvQixxQ0FBcUMsMEJBQTBCLDBDQUEwQyxrQkFBa0IsbUJBQW1CLEdBQUcsWUFBWSxpQkFBaUIsb0NBQW9DLDBCQUEwQix3QkFBd0IsMkJBQTJCLHlCQUF5QixtQkFBbUIsd0NBQXdDLHdCQUF3QixzQkFBc0IsR0FBRywyQkFBMkIsNkJBQTZCLDZDQUE2QyxxREFBcUQseUJBQXlCLGlDQUFpQyw2QkFBNkIscUNBQXFDLDRCQUE0QixvQ0FBb0MsaURBQWlELDBCQUEwQix1QkFBdUIseUJBQXlCLGlCQUFpQixHQUFHLDJCQUEyQiw0QkFBNEIsR0FBRyxxQkFBcUIsNERBQTRELG1DQUFtQyxrQ0FBa0MsK0JBQStCLDRDQUE0QyxrQ0FBa0Msc0JBQXNCLHVCQUF1QixrQkFBa0Isc0JBQXNCLDBCQUEwQixzQkFBc0IsdUJBQXVCLGlCQUFpQixzQkFBc0IsU0FBUyw2Q0FBNkMsaUJBQWlCLCtCQUErQiwrQkFBK0IsR0FBRyxxQkFBcUIsbUJBQW1CLHlCQUF5QixpQkFBaUIsc0JBQXNCLGVBQWUsa0JBQWtCLGlCQUFpQixtQ0FBbUMsK0JBQStCLHNCQUFzQixHQUFHLHdCQUF3Qiw0QkFBNEIsdUJBQXVCLGlCQUFpQixnQkFBZ0IsbUJBQW1CLG9CQUFvQiwwQkFBMEIsOEJBQThCLGtCQUFrQixrQkFBa0IsbUJBQW1CLEdBQUcsMkJBQTJCLDRDQUE0QyxtQkFBbUIsa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsaUNBQWlDLDRCQUE0QixHQUFHLGdEQUFnRCxtQkFBbUIsMEJBQTBCLHNDQUFzQywyQkFBMkIsMENBQTBDLDRCQUE0QiwwQkFBMEIseUJBQXlCLGlCQUFpQixvQkFBb0IsNkJBQTZCLDBCQUEwQix5QkFBeUIsb0NBQW9DLHVCQUF1QixHQUFHLGlCQUFpQix5QkFBeUIsaUJBQWlCLHdCQUF3Qiw2QkFBNkIsaUJBQWlCLEdBQUcsaUJBQWlCLCtCQUErQixpQkFBaUIsU0FBUyxrQ0FBa0MsdURBQXVELEdBQUcsMkJBQTJCLGtCQUFrQiw0QkFBNEIsR0FBRyxnQkFBZ0IseUJBQXlCLGdCQUFnQixjQUFjLHFCQUFxQixxQkFBcUIseUJBQXlCLGlCQUFpQixzQkFBc0IsR0FBRyxtQkFBbUIseUJBQXlCLG1CQUFtQixvQkFBb0Isd0NBQXdDLGlCQUFpQixpQkFBaUIsd0JBQXdCLEdBQUcsbUJBQW1CLHlCQUF5Qix5QkFBeUIsaUJBQWlCLHNCQUFzQixHQUFHLHNCQUFzQix5QkFBeUIsaUJBQWlCLGlCQUFpQix3Q0FBd0MsaUJBQWlCLGlCQUFpQix3QkFBd0IsR0FBRyw0QkFBNEIscUJBQXFCLDRCQUE0QixHQUFHLG1DQUFtQyxvQkFBb0IsZ0JBQWdCLEdBQUcsZ0JBQWdCLHlEQUF5RCxtQ0FBbUMsZ0NBQWdDLGdDQUFnQyxzQkFBc0IsMEJBQTBCLDhCQUE4QixxQ0FBcUMsd0JBQXdCLDBDQUEwQyxvQkFBb0IsdUJBQXVCLEdBQUcsb0JBQW9CLG9CQUFvQixrQkFBa0IsdUJBQXVCLHFCQUFxQixHQUFHLGtCQUFrQixxQkFBcUIsaUJBQWlCLHFDQUFxQyxHQUFHLDJCQUEyQiwyQkFBMkIsMENBQTBDLHdCQUF3QixzQ0FBc0MsR0FBRyxvQkFBb0IsbUJBQW1CLHdCQUF3QixHQUFHLHFCQUFxQixvQkFBb0Isc0JBQXNCLEdBQUcsd0JBQXdCLDhCQUE4QiwwQ0FBMEMseUJBQXlCLHdDQUF3QywyQkFBMkIsdUJBQXVCLG1CQUFtQix3QkFBd0IsaUJBQWlCLHVCQUF1QixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLDZDQUE2Qyx1QkFBdUIsaUNBQWlDLGlEQUFpRCx5REFBeUQsNkJBQTZCLHFDQUFxQyxpQ0FBaUMseUNBQXlDLGdDQUFnQyx3Q0FBd0MseURBQXlELDhCQUE4QiwyQkFBMkIsNkJBQTZCLHFCQUFxQiwyQkFBMkIsOEJBQThCLDBCQUEwQiwyQkFBMkIscUJBQXFCLDBCQUEwQixPQUFPLCtCQUErQiwyQkFBMkIsbUNBQW1DLDBEQUEwRCwyQkFBMkIsNkJBQTZCLE9BQU8seUJBQXlCLHNCQUFzQixxQkFBcUIsa0NBQWtDLE9BQU8sK0NBQStDLHFCQUFxQix1Q0FBdUMsbUNBQW1DLDZCQUE2QixxQkFBcUIsT0FBTywwQkFBMEIsaUNBQWlDLE9BQU8sNkJBQTZCLHdCQUF3QiwyQ0FBMkMsT0FBTyxHQUFHLHFCQUFxQjtBQUNudWpCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZrRDtBQUNiOztBQUVyQzs7QUFFQTs7QUFFQSxJQUFJLHFEQUFVO0FBQ2QsSUFBSSxxREFBWTs7QUFFaEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxxREFBVTtBQUNkOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNrRDtBQUNOOztBQUVOO0FBQ0Y7QUFDSTs7O0FBR3hDOztBQUVBOztBQUVBOztBQUVBLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaURBQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvREFBVTtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUNBQXVDLDZDQUFVO0FBQ2pELDBDQUEwQywrQ0FBVzs7OztBQUlyRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUMsNkNBQVU7O0FBRTdDOztBQUVBLG9DQUFvQywrQ0FBVzs7QUFFL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSHFEO0FBQ047QUFDSztBQUNEOztBQUViO0FBQ1k7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHFEQUFVO0FBQ2QsSUFBSSxxREFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFXO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbURBQVE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBVTtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFhO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUkscURBQVU7QUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRXdDO0FBQytCO0FBQ2xEO0FBQ2U7QUFDVztBQUNUOzs7QUFHdEM7QUFDQSxJQUFJLHFEQUFVO0FBQ2QsSUFBSSwyREFBZ0I7QUFDcEIsSUFBSSxxREFBVTtBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlciIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnRzL2ZpcmVzdGFydGVyLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJmb250cy9maXJlc3RhcnRlci13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9icmlza2V0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImltYWdlcy90b3BHcmlsbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvYm90dG9tR3JpbGwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2ZpcmVzdGFydGVycmVndWxhcic7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLyogSGVhZGVyICovXFxuXFxuOnJvb3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZG91YmxlIHJlZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIG1hcmdpbjogMCAwIDAgMy41cmVtO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMXJlbSAwIDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5oYW1idXJnZXJHcmlsbCB7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIC42KTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtIDAgMS41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG1pbi13aWR0aDogNXJlbTtcXG4gICAgbWluLWhlaWdodDogNXJlbTtcXG4gICAgei1pbmRleDogMztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG59XFxuXFxuLmhhbWJ1cmdlckdyaWxsOmZvY3VzICsgLm9wZW4taGFtYnVyZ2VyIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03cmVtKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB1bCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm9wZW4taGFtYnVyZ2VyIHVsIGxpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIC42KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB1bCBsaTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuXFxuXFxuXFxuLyotLS0tLS0gR3JpbGwgLS0tLS0tLSovXFxuLmNvbnRhaW5lciB7XFxuICAgIG9wYWNpdHk6IC44NTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IGNsYW1wKDIwcmVtLCA4MCUsIDI4cmVtKTtcXG4gICAgcGFkZGluZzogMXJlbSA0cmVtIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xcblxcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5maXJzdC10ZXh0IHtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI3N2Zy1vYmplY3Qge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbn1cXG5cXG4uZ3JpbGwtdG9wOmhvdmVyICNzdmctb2JqZWN0IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLS4xNXR1cm4pIHRyYW5zbGF0ZSgtNSUsIC03MCUpO1xcbn1cXG5cXG4uZ3JpbGwtdG9wOmhvdmVyID4gaDMge1xcbiAgICBjb2xvcjogbmF2eTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uZ3JpbGwtdG9wIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVyZW07XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAxLjI1cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ncmlsbC10b3AgaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNS4yNXJlbTtcXG4gICAgbGVmdDogNy4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmdyaWxsLWJvdHRvbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ncmlsbC1ib3R0b20gaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTJyZW07XFxuICAgIGxlZnQ6IDdyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5ncmlsbC1ib3R0b206aG92ZXIgaDMge1xcbiAgICBjb2xvcjogI2UyNTgyMjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5cXG4vKiBNZW51ICovXFxuXFxuXFxuLm1lbnUtaXRlbXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2JyaXNrZXRCYXNrZXQuanBnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAqL1xcbiAgICBoZWlnaHQ6IDI1cmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5tZW51LWl0ZW0gaW1nIHtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMTNyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWVudS1pdGVtIHAge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IGNsYW1wKDlyZW0sIDgwJSwgMTJyZW0pO1xcbn1cXG5cXG4vKiBBYm91dCAqL1xcblxcbi5hYm91dCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC45KTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHdpZHRoOiBjbGFtcCgyMHJlbSwgOTAlLCAyOHJlbSk7XFxufVxcblxcbi5hYm91dC1zZWN0aW9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG59XFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY29udGFpbmVyLWNvbnRhY3Qge1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgd2lkdGg6IGNsYW1wKDIwcmVtLCA5MCUsIDI4cmVtKVxcbn1cXG5cXG4uY29udGFpbmVyLWNvbnRhY3QgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDFyZW0gMCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xcbiAgICAuaGFtYnVyZ2VyR3JpbGwge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgICAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgICAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMCA7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBtaW4td2lkdGg6IDVyZW07XFxuICAgICAgICBtaW4taGVpZ2h0OiA1cmVtO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAuaGFtYnVyZ2VyR3JpbGw6Zm9jdXMge1xcbiAgICAgICAgbWFzay1pbWFnZTogbm9uZTtcXG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5vcGVuLWhhbWJ1cmdlciB7XFxuICAgICAgICByaWdodDogMXJlbTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXG4gICAgfVxcbiAgICAuaGFtYnVyZ2VyR3JpbGw6Zm9jdXMgKyAub3Blbi1oYW1idXJnZXIge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxM3JlbSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICB9XFxuICAgIC5vcGVuLWhhbWJ1cmdlciB1bCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5vcGVuLWhhbWJ1cmdlciB1bCBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICAgIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlDQUFpQztJQUNqQzsrREFDeUQ7SUFDekQsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBR0EsV0FBVzs7QUFFWDtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlEQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qixt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OztBQUVBLFVBQVU7O0FBRVY7SUFDSSxvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixtREFBc0M7UUFDdEMsMkRBQThDO1FBQzlDLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLDhCQUE4QjtRQUM5QixxQkFBcUI7UUFDckIsNkJBQTZCOztRQUU3QixvQ0FBb0M7UUFDcEMsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIseURBQStDO1FBQy9DLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLDRCQUE0QjtRQUM1Qix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsZ0NBQWdDO0lBQ3BDO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoJ2ZvbnRzL2ZpcmVzdGFydGVyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICAgdXJsKCdmb250cy9maXJlc3RhcnRlci13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLyogSGVhZGVyICovXFxuXFxuOnJvb3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2JyaXNrZXQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3VibGUgcmVkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMCAzLjVyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogJ2ZpcmVzdGFydGVycmVndWxhcic7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oYW1idXJnZXJHcmlsbDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICAgIG1hc2staW1hZ2U6IHVybCgnaW1hZ2VzL3RvcEdyaWxsLnN2ZycpO1xcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnaW1hZ2VzL3RvcEdyaWxsLnN2ZycpO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCA7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmhhbWJ1cmdlckdyaWxsOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGwge1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvYm90dG9tR3JpbGwuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgLjYpO1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW0gMCAxLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgbWluLXdpZHRoOiA1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6Zm9jdXMgKyAub3Blbi1oYW1idXJnZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcXG59XFxuXFxuLm9wZW4taGFtYnVyZ2VyIHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTdyZW0pO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9wZW4taGFtYnVyZ2VyIHVsIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ub3Blbi1oYW1idXJnZXIgdWwgbGkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgLjYpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm9wZW4taGFtYnVyZ2VyIHVsIGxpOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKi0tLS0tLSBHcmlsbCAtLS0tLS0tKi9cXG4uY29udGFpbmVyIHtcXG4gICAgb3BhY2l0eTogLjg1O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogY2xhbXAoMjByZW0sIDgwJSwgMjhyZW0pO1xcbiAgICBwYWRkaW5nOiAxcmVtIDRyZW0gMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XFxuXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvIDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZpcnN0LXRleHQge1xcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jc3ZnLW9iamVjdCB7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcXG4gICAgei1pbmRleDogMTtcXG4gICAgXFxufVxcblxcbi5ncmlsbC10b3A6aG92ZXIgI3N2Zy1vYmplY3Qge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtLjE1dHVybikgdHJhbnNsYXRlKC01JSwgLTcwJSk7XFxufVxcblxcbi5ncmlsbC10b3A6aG92ZXIgPiBoMyB7XFxuICAgIGNvbG9yOiBuYXZ5O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5ncmlsbC10b3Age1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXJlbTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDEuMjVyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWxsLXRvcCBoMyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1LjI1cmVtO1xcbiAgICBsZWZ0OiA3LjI1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ2ZpcmVzdGFydGVycmVndWxhcic7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uZ3JpbGwtYm90dG9tIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWxsLWJvdHRvbSBoMyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMnJlbTtcXG4gICAgbGVmdDogN3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmdyaWxsLWJvdHRvbTpob3ZlciBoMyB7XFxuICAgIGNvbG9yOiAjZTI1ODIyO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcblxcbi8qIE1lbnUgKi9cXG5cXG5cXG4ubWVudS1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvYnJpc2tldEJhc2tldC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47ICovXFxuICAgIGhlaWdodDogMjVyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm1lbnUtaXRlbSBpbWcge1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxM3JlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5tZW51LWl0ZW0gcCB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogY2xhbXAoOXJlbSwgODAlLCAxMnJlbSk7XFxufVxcblxcbi8qIEFib3V0ICovXFxuXFxuLmFib3V0IHtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgd2lkdGg6IGNsYW1wKDIwcmVtLCA5MCUsIDI4cmVtKTtcXG59XFxuXFxuLmFib3V0LXNlY3Rpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uZmxleC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jb250YWluZXItY29udGFjdCB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC45KTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB3aWR0aDogY2xhbXAoMjByZW0sIDkwJSwgMjhyZW0pXFxufVxcblxcbi5jb250YWluZXItY29udGFjdCB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMXJlbSAwIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XFxuICAgIC5oYW1idXJnZXJHcmlsbCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICAgICAgbWFzay1pbWFnZTogdXJsKCdpbWFnZXMvdG9wR3JpbGwuc3ZnJyk7XFxuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnaW1hZ2VzL3RvcEdyaWxsLnN2ZycpO1xcbiAgICAgICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xcbiAgICAgICAgbWluLWhlaWdodDogNXJlbTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlckdyaWxsOmZvY3VzIHtcXG4gICAgICAgIG1hc2staW1hZ2U6IG5vbmU7XFxuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2ltYWdlcy9ib3R0b21HcmlsbC5zdmcnKTtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLm9wZW4taGFtYnVyZ2VyIHtcXG4gICAgICAgIHJpZ2h0OiAxcmVtO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcbiAgICB9XFxuICAgIC5oYW1idXJnZXJHcmlsbDpmb2N1cyArIC5vcGVuLWhhbWJ1cmdlciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEzcmVtKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgIH1cXG4gICAgLm9wZW4taGFtYnVyZ2VyIHVsIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgLm9wZW4taGFtYnVyZ2VyIHVsIGxpIHtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtkZWxldGVQYWdlLCBjcmVhdGVUYWJzfSBmcm9tICcuL2hvbWVwYWdlJztcbmltcG9ydCB7Y3JlYXRlSGVhZGVyfSBmcm9tICcuL2hlYWRlcidcblxuZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGRlbGV0ZVBhZ2UoY29udGVudCk7XG4gICAgY3JlYXRlSGVhZGVyKCk7XG5cbiAgICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmxleENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbnRhaW5lcicpO1xuXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG5cbiAgICBjb25zdCBjb250YWluZXJDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyQ29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXJDb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1jb250YWN0Jyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZmlyc3QtdGV4dCcpO1xuICAgIGNvbnN0IHRpdGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBYm91dCcpO1xuXG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZTIuY2xhc3NMaXN0LmFkZCgnZmlyc3QtdGV4dCcpO1xuICAgIGNvbnN0IHRpdGxlQ29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29udGFjdCBVcycpO1xuXG4gICAgY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhYm91dC1zZWN0aW9uJyk7XG4gICAgY29uc3QgYWJvdXRTZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTbW9rZXkgTW91bnRhaW4gTWVhdHMgaXMgYSBmYW1pbHktcnVuIEJCUSByZXN0YXVyYW50IGF0IHRoZSBjb25jbHVzaW9uIG9mIHRoZSBBcHBhbGFjaGlhbiBNb3VudGFpbnMgaW4gRWFzdGVybiBUZW5uZXNzZWUuIFdlIHNwZWNpYWxpemUgaW4gb3VyIHNtb2tlZCBicmlza2V0LCBzYXRpc2Z5IHN3ZWV0IHRvb3RocyB3aXRoIG91ciBjb3JuYnJlYWQsIGFuZCBwcm9kdWNlIGxpdHRsZSBQb3BleWVcXCdkIGNoaWxkcmVuIHdpdGggb3VyIGZyZXNoIGNvbGxhcmQgZ3JlZW5zLicpO1xuIFxuICAgIGNvbnN0IGNvbnRhY3RVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBjb25zdCBob3Vyc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRXZlcnlkYXk6IDVwbSAtIDExcG0nKTtcbiAgICBjb25zdCBwaG9uZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnUGhvbmU6IFhYWC1YWFgtWFhYWCcpO1xuICAgIGNvbnN0IGFkZHJlc3NDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0FkZHJlc3M6IDMgUGFjaWZpYyBBdmVudWUsIFRoZSBNaWxreSBXYXknKTtcbiAgICBjb25zdCBlbWFpbENvbnRlbnQgPSBkb2N1bWVudC4gY3JlYXRlVGV4dE5vZGUoJ0VtYWlsOiBwcmltZWN1dEBzbW9rZWRpbnRoZXNtb2tpZXMuY29tJyk7XG5cbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0NvbnRlbnQpO1xuICAgIHBob25lLmFwcGVuZENoaWxkKHBob25lQ29udGVudCk7XG4gICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzQ29udGVudCk7XG4gICAgZW1haWwuYXBwZW5kQ2hpbGQoZW1haWxDb250ZW50KTtcblxuICAgIGNvbnRhY3RVbC5hcHBlbmRDaGlsZChob3Vycyk7XG4gICAgY29udGFjdFVsLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICBjb250YWN0VWwuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgY29udGFjdFVsLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICBcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRlbnQpO1xuICAgIHRpdGxlMi5hcHBlbmRDaGlsZCh0aXRsZUNvbnRlbnQyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnRhaW5lckNvbnRhY3QuYXBwZW5kQ2hpbGQodGl0bGUyKTtcbiAgICBjb250YWluZXJDb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RVbCk7XG4gICAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbkNvbnRlbnQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xuICAgIGZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBmbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckNvbnRhY3QpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZmxleENvbnRhaW5lcik7XG5cbiAgICBjcmVhdGVUYWJzKCk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlQWJvdXR9IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgY29uc3QgdGl0bGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1Ntb2tleSBNb3VudGFpbiBNZWF0cycpO1xuICAgICAgICBjb25zdCBoYW1idXJnZXJHcmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoYW1idXJnZXJHcmlsbC5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXJHcmlsbCcpO1xuICAgICAgICBoYW1idXJnZXJHcmlsbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgY29uc3Qgb3BlbkhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcGVuSGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ29wZW4taGFtYnVyZ2VyJyk7XG4gICAgICAgIGNvbnN0IG9wZW5VbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnN0IGxpSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpSG9tZS5pZCA9ICdob21lLWlkJztcbiAgICAgICAgY29uc3QgbGlIb21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdIb21lJyk7XG4gICAgICAgIGNvbnN0IGxpTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpTWVudS5pZCA9ICdtZW51LWlkJ1xuICAgICAgICBjb25zdCBsaU1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ01lbnUnKTtcbiAgICAgICAgY29uc3QgbGlBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpQWJvdXQuaWQgPSAnYWJvdXQtaWQnXG4gICAgICAgIGNvbnN0IGxpQWJvdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0Fib3V0Jyk7XG5cbiAgICAgICAgbGlIb21lLmFwcGVuZENoaWxkKGxpSG9tZUNvbnRlbnQpO1xuICAgICAgICBsaU1lbnUuYXBwZW5kQ2hpbGQobGlNZW51Q29udGVudCk7XG4gICAgICAgIGxpQWJvdXQuYXBwZW5kQ2hpbGQobGlBYm91dENvbnRlbnQpO1xuXG4gICAgICAgIG9wZW5VbC5hcHBlbmRDaGlsZChsaUhvbWUpO1xuICAgICAgICBvcGVuVWwuYXBwZW5kQ2hpbGQobGlNZW51KTtcbiAgICAgICAgb3BlblVsLmFwcGVuZENoaWxkKGxpQWJvdXQpO1xuXG4gICAgICAgIG9wZW5IYW1idXJnZXIuYXBwZW5kQ2hpbGQob3BlblVsKTtcblxuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRlbnQpO1xuXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoYW1idXJnZXJHcmlsbCk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChvcGVuSGFtYnVyZ2VyKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgfVxuXG4gICAgZXhwb3J0IHtjcmVhdGVIZWFkZXJ9IiwiaW1wb3J0IEljb25Cb3R0b20gZnJvbSAnLi9pbWFnZXMvYm90dG9tR3JpbGwuc3ZnJztcbmltcG9ydCBJY29uVG9wIGZyb20gJy4vaW1hZ2VzL3RvcEdyaWxsLnN2Zyc7XG5cbmltcG9ydCB7IGNyZWF0ZUFib3V0IH0gZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4vaGVhZGVyJztcblxuXG5mdW5jdGlvbiBncmlsbFBhcnRzKCkgeyAgICBcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gICAgZGVsZXRlUGFnZShjb250ZW50KTtcblxuICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb25zdCBncmlsbFRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWxsVG9wLmNsYXNzTGlzdC5hZGQoJ2dyaWxsLXRvcCcpO1xuICAgIGNvbnN0IGdyaWxsQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpbGxCb3R0b20uY2xhc3NMaXN0LmFkZCgnZ3JpbGwtYm90dG9tJyk7XG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dDEuY2xhc3NMaXN0LmFkZCgnZmlyc3QtdGV4dCcpO1xuICAgIGNvbnN0IHRleHQxQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdGYWxsaW5nIG9mZiB0aGUgYm9uZSBzaW5jZSAxOTk3Jyk7XG4gICAgY29uc3Qgb2JqZWN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xuICAgIG9iamVjdDEuaWQgPSAnc3ZnLW9iamVjdCc7XG4gICAgb2JqZWN0MS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcImltYWdlL3N2Zyt4bWxcIik7XG4gICAgb2JqZWN0MS5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBJY29uVG9wKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdNZW51Jyk7XG4gICAgY29uc3Qgb2JqZWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29iamVjdCcpO1xuICAgIG9iamVjdDIuaWQgPSAnc3ZnLW9iamVjdDInO1xuICAgIG9iamVjdDIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ltYWdlL3N2Zyt4bWwnKTtcbiAgICBvYmplY3QyLnNldEF0dHJpYnV0ZSgnZGF0YScsIEljb25Cb3R0b20pO1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQWJvdXQnKTtcblxuICAgIFxuICAgIGdyaWxsVG9wLmFwcGVuZENoaWxkKG9iamVjdDEpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuICAgIGdyaWxsVG9wLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgZ3JpbGxCb3R0b20uYXBwZW5kQ2hpbGQob2JqZWN0Mik7XG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KTtcbiAgICBncmlsbEJvdHRvbS5hcHBlbmRDaGlsZChhYm91dCk7XG5cbiAgICB0ZXh0MS5hcHBlbmRDaGlsZCh0ZXh0MUNvbnRlbnQpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQxKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpbGxUb3ApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlsbEJvdHRvbSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBncmlsbFRvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU1lbnUpO1xuICAgIGdyaWxsQm90dG9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlQWJvdXQpO1xuXG5cblxuICAgIGNyZWF0ZVRhYnMoKTtcblxufTtcblxuZnVuY3Rpb24gYWRkR3JpbGxGZWF0dXJlcygpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzdmdPYmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ZnLW9iamVjdCcpO1xuICAgICAgICBjb25zdCBzdmdPYmplY3QyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N2Zy1vYmplY3QyJyk7XG4gICAgICAgIGNvbnN0IGdyaWxsVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWxsLXRvcCcpO1xuICAgICAgICBjb25zdCBncmlsbEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlsbC1ib3R0b20nKTtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIHN2Z09iamVjdC5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52ZW50c1wiKS5mb3JFYWNoKHZlbnQgPT4gdmVudC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiI2UyNTgyMjcwXCIpKTtcbiAgICAgICAgc3ZnT2JqZWN0Mi5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlLXRhZycpLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZWRcIik7XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZVZlbnRDb2xvcnMoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2VsZWF2ZScpIHtcbiAgICAgICAgICAgICAgICBzdmdPYmplY3QuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmVudHNcIikuZm9yRWFjaCh2ZW50ID0+IHZlbnQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiNlMjU4MjI3MFwiKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWVudGVyJykge1xuICAgICAgICAgICAgICAgIHN2Z09iamVjdC5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi52ZW50c1wiKS5mb3JFYWNoKHZlbnQgPT4gdmVudC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiYmxhY2tcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGNoYW5nZVRhZ0NvbG9yKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgICAgICAgICAgICAgc3ZnT2JqZWN0Mi5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlLXRhZycpLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZWRcIik7XG4gICAgICAgICAgICAgICAgc3ZnT2JqZWN0Mi5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0VGV4dCcpLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcImJsYWNrXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnbW91c2VlbnRlcicpIHtcbiAgICAgICAgICAgICAgICBzdmdPYmplY3QyLmNvbnRlbnREb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2UtdGFnJykuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiNlMjU4MjJcIik7XG4gICAgICAgICAgICAgICAgc3ZnT2JqZWN0Mi5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0VGV4dCcpLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcImJsYWNrXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGdyaWxsVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBjaGFuZ2VWZW50Q29sb3JzKTtcbiAgICAgICAgZ3JpbGxUb3AuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGNoYW5nZVZlbnRDb2xvcnMpO1xuICAgICAgICBncmlsbEJvdHRvbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgY2hhbmdlVGFnQ29sb3IpO1xuICAgICAgICBncmlsbEJvdHRvbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgY2hhbmdlVGFnQ29sb3IpO1xuICAgIFxuICAgIH0sIDEwMCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVBhZ2UoY29udGVudCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xuICAgIFxuICAgIGNvbnN0IGhlYWRlckgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJyk7XG4gICAgXG4gICAgaGVhZGVySDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBncmlsbFBhcnRzKTtcbiAgICBoZWFkZXJIMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEdyaWxsRmVhdHVyZXMpO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWlkJyk7XG5cbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3JpbGxQYXJ0cyk7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEdyaWxsRmVhdHVyZXMpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWlkJyk7XG5cbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTWVudSk7XG5cbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC1pZCcpO1xuXG4gICAgYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBYm91dCk7XG5cbn07XG5cbmV4cG9ydCB7Z3JpbGxQYXJ0cywgYWRkR3JpbGxGZWF0dXJlcywgZGVsZXRlUGFnZSwgY3JlYXRlVGFic30iLCJpbXBvcnQgSWNvbkJyaXNrZXQgZnJvbSAnLi9pbWFnZXMvYnJpc2tldEJhc2tldC5qcGcnO1xuaW1wb3J0IEljb25Qb3JrIGZyb20gJy4vaW1hZ2VzL3B1bGxlZFBvcmsuanBnJztcbmltcG9ydCBJY29uR3JlZW5zIGZyb20gJy4vaW1hZ2VzL2NvbGxhcmRHcmVlbnMuanBnJztcbmltcG9ydCBJY29uQ29ybmJyZWFkIGZyb20gJy4vaW1hZ2VzL2Nvcm5icmVhZC5qcGcnO1xuXG5pbXBvcnQge2NyZWF0ZUhlYWRlcn0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHtkZWxldGVQYWdlLCBjcmVhdGVUYWJzfSBmcm9tICcuL2hvbWVwYWdlJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zb2xlLmxvZygnaGV5Jyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBkZWxldGVQYWdlKGNvbnRlbnQpO1xuICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZmlyc3QtdGV4dCcpO1xuICAgIGNvbnN0IHRpdGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdPZmYgdGhlIEdyaWxsJyk7XG4gICAgXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbXMnKTtcblxuICAgIGNvbnN0IGZvb2QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZDEuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgZm9vZDEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgY29uc3QgYnJpc2tldFBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGJyaXNrZXRQaWMuc3JjID0gSWNvbkJyaXNrZXQ7XG4gICAgY29uc3QgZm9vZDFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZvb2QxVGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVGhlIEJyaXNrZXQgQmFza2V0Jyk7XG5cbiAgICBjb25zdCBmb29kMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2QyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGZvb2QyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGNvbnN0IHB1bGxlZFBvcmtQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBwdWxsZWRQb3JrUGljLnNyYyA9IEljb25Qb3JrO1xuICAgIGNvbnN0IGZvb2QyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBmb29kMlRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1B1bGxlZCBQb3JrIFNhbmR3aWNoJyk7XG5cbiAgICBjb25zdCBmb29kMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2QzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGZvb2QzLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGNvbnN0IGNvbGxhcmRQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb2xsYXJkUGljLnNyYyA9IEljb25HcmVlbnM7XG4gICAgY29uc3QgZm9vZDNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZvb2QzVGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29sbGFyZCBHcmVlbnMnKTtcblxuICAgIGNvbnN0IGZvb2Q0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZDQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgZm9vZDQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgY29uc3QgY29ybmJyZWFkUGljID0gbmV3IEltYWdlKCk7XG4gICAgY29ybmJyZWFkUGljLnNyYyA9IEljb25Db3JuYnJlYWQ7XG4gICAgY29uc3QgZm9vZDRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZvb2Q0VGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29ybmJyZWFkJyk7XG5cbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRlbnQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBmb29kMS5hcHBlbmRDaGlsZChicmlza2V0UGljKTtcbiAgICBmb29kMVRleHQuYXBwZW5kQ2hpbGQoZm9vZDFUZXh0Q29udGVudCk7XG4gICAgZm9vZDEuYXBwZW5kQ2hpbGQoZm9vZDFUZXh0KTtcblxuICAgIGZvb2QyLmFwcGVuZENoaWxkKHB1bGxlZFBvcmtQaWMpO1xuICAgIGZvb2QyVGV4dC5hcHBlbmRDaGlsZChmb29kMlRleHRDb250ZW50KTtcbiAgICBmb29kMi5hcHBlbmRDaGlsZChmb29kMlRleHQpO1xuXG4gICAgZm9vZDMuYXBwZW5kQ2hpbGQoY29sbGFyZFBpYyk7XG4gICAgZm9vZDNUZXh0LmFwcGVuZENoaWxkKGZvb2QzVGV4dENvbnRlbnQpO1xuICAgIGZvb2QzLmFwcGVuZENoaWxkKGZvb2QzVGV4dCk7XG5cbiAgICBmb29kNC5hcHBlbmRDaGlsZChjb3JuYnJlYWRQaWMpO1xuICAgIGZvb2Q0VGV4dC5hcHBlbmRDaGlsZChmb29kNFRleHRDb250ZW50KTtcbiAgICBmb29kNC5hcHBlbmRDaGlsZChmb29kNFRleHQpO1xuXG4gICBcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoZm9vZDEpO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChmb29kMik7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGZvb2QzKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoZm9vZDQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcblxuICAgIGNyZWF0ZVRhYnMoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImxldCBjb3VudCA9IDA7XG5jb25zb2xlLmxvZyhjb3VudCsrKTtcblxuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBhZGRHcmlsbEZlYXR1cmVzLCAgZ3JpbGxQYXJ0cywgY3JlYXRlVGFicyB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgSWNvbkJyaXNrZXQgZnJvbSAnLi9pbWFnZXMvYnJpc2tldC5qcGcnO1xuaW1wb3J0IHsgY3JlYXRlQWJvdXQgfSBmcm9tIFwiLi9hYm91dFwiO1xuXG5cbihmdW5jdGlvbiBpbml0KCkge1xuICAgIGdyaWxsUGFydHMoKTtcbiAgICBhZGRHcmlsbEZlYXR1cmVzKCk7XG4gICAgY3JlYXRlVGFicygpO1xufSkoKTtcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9