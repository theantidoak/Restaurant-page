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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'firestarterregular';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n\n/* Header */\n\n:root {\n    background-color: black;\n    height: 100vh;\n    width: 100%;\n    overflow-y: auto;\n}\n\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    margin: 0;\n    height: 100vh;\n    width: 100%;\n    padding-bottom: 2rem;\n    overflow-y: auto;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .7);\n    width: 100%;\n    height: 8rem;\n    position: relative;\n}\n\n.title {\n    flex-basis: 60%;\n    color: red;\n    border-bottom: 2px double red;\n    padding-bottom: 4px;\n    padding-top: 1rem;\n    margin: 0 0 0 clamp(.5rem, 5% ,3.5rem);\n    width: fit-content;\n    min-width: 13rem;\n    max-width: 20rem;\n    height: 3rem;\n    font-family: 'firestarterregular';\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n.hamburgerGrill {\n    appearance: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    background-color: rgba(255, 0, 0, 1);\n    opacity: .6;\n    padding: 1rem 2rem 0 1.5rem;\n    margin-right: 1rem;\n    border-radius: 0;\n    right: 1rem;\n    position: absolute;\n    transform: scale(1);\n    min-width: 5rem;\n    min-height: 5rem;\n    z-index: 3;\n    cursor: pointer;\n    border-radius: 20px;\n}\n\n.hamburgerGrill:checked {\n    background-image: none;\n    mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    mask-size: contain;\n    -webkit-mask-size: contain;\n    mask-repeat: no-repeat;\n    -webkit-mask-repeat: no-repeat;\n    mask-position: center;\n    -webkit-mask-position: center;\n    \n    background-color: rgba(255, 0, 0, 1);\n    border-radius: 20px;\n    padding: 1rem 0 ;\n    opacity: 1;\n}\n\n.hamburgerGrill:hover {\n    transform: scale(1.1);\n    opacity: 1;\n    background-color: #FFDB58;\n}\n\n.hamburgerGrill:checked:hover {\n    transform: none;\n    background-color: red;\n}\n\n.hamburgerGrill:checked ~ .open-hamburger {\n    opacity: 0;\n    pointer-events: none;\n    user-select: none;\n    transform: translateX(0);\n    transition: all ease .5s;\n}\n\n.open-hamburger {\n    height: 5rem;\n    width: fit-content;\n    right: 0;\n    top: 1.5rem;\n    padding: 0;\n    transform: translateX(-8.5rem);\n    transition: all ease .5s;\n    cursor: pointer;\n}\n\n.open-hamburger ul {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    width: 100%;\n    height: 100%;\n}\n\n.open-hamburger ul li {\n    background-color: rgba(255, 0, 0, 1);\n    opacity: .6;\n    height: 100%;\n    width: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 20px;\n    border-bottom: red;\n}\n\n.open-hamburger ul li:hover {\n    transform: scale(1.1);\n    opacity: 1;\n    \n}\n\n.ham-menu {\n    display: none;\n    z-index: 4;\n    position: absolute;\n    top: 3.5rem;\n    right: 3.25rem;\n    height: 2rem;\n    width: 2rem;\n    cursor: pointer;\n}\n\n\n.ham-menu rect {\n    fill:#003B1B;    \n}\n\n.hamburgerGrill:checked ~ .ham-menu {\n    display: block;\n}\n\n\n\n/*------ Grill -------*/\n.container {\n    opacity: .95;\n    height: fit-content;\n    width: clamp(20rem, 80%, 28rem);\n    padding: 1rem clamp(1rem, 10%, 4rem) 0;\n    background-color: rgba(0, 0, 0, .6);\n\n    margin: 2rem auto;\n    border-radius: 10px;\n    text-align: center;\n    color: red;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    box-shadow: 2px 2px 5px black;\n}\n\n.first-text {\n    margin: 0 0 1rem 0;\n    padding: 0;\n    font-size: 1.5rem;\n    font-family: 'firestarterregular';\n    z-index: 2;\n}\n\n#svg-object {\n    transition: all ease .5s;\n    z-index: 1;\n    \n}\n\n.grill-top:hover #svg-object {\n    transform: rotate(-.15turn) translate(-5%, -70%);\n}\n\n.grill-top {\n    position: absolute;\n    top: 5rem;\n    left: 0;\n    right: 1.25rem;\n    margin: 0 auto;\n    width: fit-content;\n    z-index: 1;\n    cursor: pointer;\n}\n\n.grill-top h3 {\n    position: absolute;\n    top: 5rem;\n    left: 6.75rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n    padding: .5rem;\n    background-color: #FFDB58;\n    border-style:solid;\n    border-color: #003B1B;\n    border-width: 2px;\n    border-radius: 30px;\n    box-shadow: .5px .5px 2px black;\n}\n\n.grill-top > h3:hover {\n    top: 5rem;\n    left: 7rem;\n    color:#FFDB58;\n    transform: scale(1.2);\n    background-color: transparent;\n    box-shadow: none;\n    border-radius: 0;\n    padding: 0;\n    border: 8px solid transparent;\n    border-bottom-color:#FFDB58;\n    /* border: none; */\n    /* border-bottom:#FFDB58 2px solid; */\n}\n\n.grill-bottom {\n    position: relative;\n    width: fit-content;\n    z-index: 0;\n    cursor: pointer;\n}\n\n.grill-bottom h3 {\n    position: absolute;\n    top: 11.5rem;\n    left: 6.5rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n    padding: .5rem;\n    background-color: #FFDB58;\n    border-style:solid;\n    border-color: #003B1B;\n    border-width: 2px;\n    border-radius: 30px;\n    box-shadow: .5px .5px 2px black;\n}\n\n.grill-bottom h3:hover {\n    top: 11.5rem;\n    left: 6.5rem;\n    color: #FFDB58;\n    transform: scale(1.2);\n    border-radius: 0;\n    background-color:transparent;\n    box-shadow: none;\n    border: 8px solid transparent;\n    border-bottom-color:#FFDB58;\n    padding: 0;\n}\n\n\n/* Menu */\n\n\n.menu-items {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(clamp(20rem, 100%, 32rem), 1fr));\n    justify-items: center;\n    gap: 3rem;\n    margin: 2rem 0;\n}\n\n.menu-item {\n    margin: clamp(.25rem, 2%, 2rem) 0;\n    height: clamp(20rem, 100%, 25rem);\n    flex-direction: row;\n    flex-wrap: wrap-reverse;\n    justify-content: space-between;\n    font-size: 2.5rem;\n    background-color: rgba(0, 0, 0, .7);\n    padding: 1rem;\n    overflow-y: auto;\n}\n\n.menu-item img {\n    height: 15rem;\n    width: auto;\n    max-width: 13rem;\n    margin: 0 auto;\n}\n\n.menu-item p {\n    margin: 0 auto;\n    padding: 0;\n    width: clamp(9rem, 80%, 12rem);\n}\n\n/* About */\n\n\n.flex-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n\n.about {\n    padding-bottom: 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: clamp(1rem, 4vw, 1.25rem);\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.about-section {\n    color: white;\n    line-height: 2rem;\n}\n\n.container-contact {\n    padding: 1rem 1rem 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: clamp(1rem, 4vw, 1.25rem);\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.container-contact ul {\n    list-style: none;\n    color: white;\n    line-height: 2rem;\n    padding: 0;\n    margin: 1rem 0 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n\n@media screen and (max-width: 800px) {\n    .hamburgerGrill {\n        background-image: none;\n        mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n        -webkit-mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n        mask-size: contain;\n        -webkit-mask-size: contain;\n        mask-repeat: no-repeat;\n        -webkit-mask-repeat: no-repeat;\n        mask-position: center;\n        -webkit-mask-position: center;\n        \n        background-color: rgba(255, 0, 0, 1);\n        border-radius: 20px;\n        padding: 1rem 0 ;\n        margin-right: 1rem;\n        opacity: 1;\n        position: absolute;\n        transform: scale(1);\n        min-width: 5rem;\n        min-height: 5rem;\n        z-index: 3;\n        cursor: pointer;\n    }\n\n    .hamburgerGrill:checked {\n        mask-image: none;\n        -webkit-mask-image: none;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n        position: static;\n        margin-right: 1.75rem;\n        background-color: #FFDB58;\n        min-width: 5.5rem;\n        min-height: 5.5rem;\n    }\n\n    .hamburgerGrill:checked:hover {\n        background-color: #FFDB58;\n    }\n\n\n    .hamburgerGrill:hover {\n        background-color: red;\n    }\n\n    .open-hamburger {\n        opacity: 0;\n        transform: translate(0, 0);\n        z-index: 3;\n        pointer-events: none;\n        user-select: none;\n        position: absolute;\n        right: 1.75rem;\n        background-color: #FFDB58;\n        height: fit-content;\n        padding: 2rem 0 .5rem;\n        width: 5.5rem;\n        border-bottom-left-radius: 20px;\n        border-bottom-right-radius: 20px;\n    }\n    .hamburgerGrill:checked ~ .open-hamburger {\n        pointer-events:all ;\n        user-select: all;\n        opacity: 1;\n        transform: translate(0, 4rem);\n        transition: all ease .5s;        \n        z-index: 2;\n        \n    }\n    .open-hamburger ul {\n        flex-direction: column;\n    }\n    .open-hamburger ul li {\n        padding: 2rem;\n        background-color: rgb(255, 0, 0);\n        border-radius: 20px;\n        opacity: 1;\n    }\n\n    .ham-menu {\n        display: block;\n    }\n\n    .hamburgerGrill:checked + .ham-menu {\n        display: none;\n    }\n    \n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'firestarterregular';\n    src: url('fonts/firestarter-webfont.woff2') format('woff2'),\n         url('fonts/firestarter-webfont.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n\n/* Header */\n\n:root {\n    background-color: black;\n    height: 100vh;\n    width: 100%;\n    overflow-y: auto;\n}\n\nbody {\n    background-image: url('./images/brisket.jpg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    margin: 0;\n    height: 100vh;\n    width: 100%;\n    padding-bottom: 2rem;\n    overflow-y: auto;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgba(0, 0, 0, .7);\n    width: 100%;\n    height: 8rem;\n    position: relative;\n}\n\n.title {\n    flex-basis: 60%;\n    color: red;\n    border-bottom: 2px double red;\n    padding-bottom: 4px;\n    padding-top: 1rem;\n    margin: 0 0 0 clamp(.5rem, 5% ,3.5rem);\n    width: fit-content;\n    min-width: 13rem;\n    max-width: 20rem;\n    height: 3rem;\n    font-family: 'firestarterregular';\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n.hamburgerGrill {\n    appearance: none;\n    background-image: url('images/bottomGrill.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    background-color: rgba(255, 0, 0, 1);\n    opacity: .6;\n    padding: 1rem 2rem 0 1.5rem;\n    margin-right: 1rem;\n    border-radius: 0;\n    right: 1rem;\n    position: absolute;\n    transform: scale(1);\n    min-width: 5rem;\n    min-height: 5rem;\n    z-index: 3;\n    cursor: pointer;\n    border-radius: 20px;\n}\n\n.hamburgerGrill:checked {\n    background-image: none;\n    mask-image: url('images/topGrill.svg');\n    -webkit-mask-image: url('images/topGrill.svg');\n    mask-size: contain;\n    -webkit-mask-size: contain;\n    mask-repeat: no-repeat;\n    -webkit-mask-repeat: no-repeat;\n    mask-position: center;\n    -webkit-mask-position: center;\n    \n    background-color: rgba(255, 0, 0, 1);\n    border-radius: 20px;\n    padding: 1rem 0 ;\n    opacity: 1;\n}\n\n.hamburgerGrill:hover {\n    transform: scale(1.1);\n    opacity: 1;\n    background-color: #FFDB58;\n}\n\n.hamburgerGrill:checked:hover {\n    transform: none;\n    background-color: red;\n}\n\n.hamburgerGrill:checked ~ .open-hamburger {\n    opacity: 0;\n    pointer-events: none;\n    user-select: none;\n    transform: translateX(0);\n    transition: all ease .5s;\n}\n\n.open-hamburger {\n    height: 5rem;\n    width: fit-content;\n    right: 0;\n    top: 1.5rem;\n    padding: 0;\n    transform: translateX(-8.5rem);\n    transition: all ease .5s;\n    cursor: pointer;\n}\n\n.open-hamburger ul {\n    text-decoration: none;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    width: 100%;\n    height: 100%;\n}\n\n.open-hamburger ul li {\n    background-color: rgba(255, 0, 0, 1);\n    opacity: .6;\n    height: 100%;\n    width: 5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 20px;\n    border-bottom: red;\n}\n\n.open-hamburger ul li:hover {\n    transform: scale(1.1);\n    opacity: 1;\n    \n}\n\n.ham-menu {\n    display: none;\n    z-index: 4;\n    position: absolute;\n    top: 3.5rem;\n    right: 3.25rem;\n    height: 2rem;\n    width: 2rem;\n    cursor: pointer;\n}\n\n\n.ham-menu rect {\n    fill:#003B1B;    \n}\n\n.hamburgerGrill:checked ~ .ham-menu {\n    display: block;\n}\n\n\n\n/*------ Grill -------*/\n.container {\n    opacity: .95;\n    height: fit-content;\n    width: clamp(20rem, 80%, 28rem);\n    padding: 1rem clamp(1rem, 10%, 4rem) 0;\n    background-color: rgba(0, 0, 0, .6);\n\n    margin: 2rem auto;\n    border-radius: 10px;\n    text-align: center;\n    color: red;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n    box-shadow: 2px 2px 5px black;\n}\n\n.first-text {\n    margin: 0 0 1rem 0;\n    padding: 0;\n    font-size: 1.5rem;\n    font-family: 'firestarterregular';\n    z-index: 2;\n}\n\n#svg-object {\n    transition: all ease .5s;\n    z-index: 1;\n    \n}\n\n.grill-top:hover #svg-object {\n    transform: rotate(-.15turn) translate(-5%, -70%);\n}\n\n.grill-top {\n    position: absolute;\n    top: 5rem;\n    left: 0;\n    right: 1.25rem;\n    margin: 0 auto;\n    width: fit-content;\n    z-index: 1;\n    cursor: pointer;\n}\n\n.grill-top h3 {\n    position: absolute;\n    top: 5rem;\n    left: 6.75rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n    padding: .5rem;\n    background-color: #FFDB58;\n    border-style:solid;\n    border-color: #003B1B;\n    border-width: 2px;\n    border-radius: 30px;\n    box-shadow: .5px .5px 2px black;\n}\n\n.grill-top > h3:hover {\n    top: 5rem;\n    left: 7rem;\n    color:#FFDB58;\n    transform: scale(1.2);\n    background-color: transparent;\n    box-shadow: none;\n    border-radius: 0;\n    padding: 0;\n    border: 8px solid transparent;\n    border-bottom-color:#FFDB58;\n    /* border: none; */\n    /* border-bottom:#FFDB58 2px solid; */\n}\n\n.grill-bottom {\n    position: relative;\n    width: fit-content;\n    z-index: 0;\n    cursor: pointer;\n}\n\n.grill-bottom h3 {\n    position: absolute;\n    top: 11.5rem;\n    left: 6.5rem;\n    font-family: 'firestarterregular';\n    color: red;\n    z-index: 0;\n    font-size: 1.5rem;\n    padding: .5rem;\n    background-color: #FFDB58;\n    border-style:solid;\n    border-color: #003B1B;\n    border-width: 2px;\n    border-radius: 30px;\n    box-shadow: .5px .5px 2px black;\n}\n\n.grill-bottom h3:hover {\n    top: 11.5rem;\n    left: 6.5rem;\n    color: #FFDB58;\n    transform: scale(1.2);\n    border-radius: 0;\n    background-color:transparent;\n    box-shadow: none;\n    border: 8px solid transparent;\n    border-bottom-color:#FFDB58;\n    padding: 0;\n}\n\n\n/* Menu */\n\n\n.menu-items {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(clamp(20rem, 100%, 32rem), 1fr));\n    justify-items: center;\n    gap: 3rem;\n    margin: 2rem 0;\n}\n\n.menu-item {\n    margin: clamp(.25rem, 2%, 2rem) 0;\n    height: clamp(20rem, 100%, 25rem);\n    flex-direction: row;\n    flex-wrap: wrap-reverse;\n    justify-content: space-between;\n    font-size: 2.5rem;\n    background-color: rgba(0, 0, 0, .7);\n    padding: 1rem;\n    overflow-y: auto;\n}\n\n.menu-item img {\n    height: 15rem;\n    width: auto;\n    max-width: 13rem;\n    margin: 0 auto;\n}\n\n.menu-item p {\n    margin: 0 auto;\n    padding: 0;\n    width: clamp(9rem, 80%, 12rem);\n}\n\n/* About */\n\n\n.flex-container {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n\n.about {\n    padding-bottom: 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: clamp(1rem, 4vw, 1.25rem);\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.about-section {\n    color: white;\n    line-height: 2rem;\n}\n\n.container-contact {\n    padding: 1rem 1rem 2rem;\n    background-color: rgba(0, 0, 0, .9);\n    font-size: clamp(1rem, 4vw, 1.25rem);\n    width: clamp(20rem, 90%, 28rem);\n}\n\n.container-contact ul {\n    list-style: none;\n    color: white;\n    line-height: 2rem;\n    padding: 0;\n    margin: 1rem 0 0;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n\n@media screen and (max-width: 800px) {\n    .hamburgerGrill {\n        background-image: none;\n        mask-image: url('images/topGrill.svg');\n        -webkit-mask-image: url('images/topGrill.svg');\n        mask-size: contain;\n        -webkit-mask-size: contain;\n        mask-repeat: no-repeat;\n        -webkit-mask-repeat: no-repeat;\n        mask-position: center;\n        -webkit-mask-position: center;\n        \n        background-color: rgba(255, 0, 0, 1);\n        border-radius: 20px;\n        padding: 1rem 0 ;\n        margin-right: 1rem;\n        opacity: 1;\n        position: absolute;\n        transform: scale(1);\n        min-width: 5rem;\n        min-height: 5rem;\n        z-index: 3;\n        cursor: pointer;\n    }\n\n    .hamburgerGrill:checked {\n        mask-image: none;\n        -webkit-mask-image: none;\n        background-image: url('images/bottomGrill.svg');\n        position: static;\n        margin-right: 1.75rem;\n        background-color: #FFDB58;\n        min-width: 5.5rem;\n        min-height: 5.5rem;\n    }\n\n    .hamburgerGrill:checked:hover {\n        background-color: #FFDB58;\n    }\n\n\n    .hamburgerGrill:hover {\n        background-color: red;\n    }\n\n    .open-hamburger {\n        opacity: 0;\n        transform: translate(0, 0);\n        z-index: 3;\n        pointer-events: none;\n        user-select: none;\n        position: absolute;\n        right: 1.75rem;\n        background-color: #FFDB58;\n        height: fit-content;\n        padding: 2rem 0 .5rem;\n        width: 5.5rem;\n        border-bottom-left-radius: 20px;\n        border-bottom-right-radius: 20px;\n    }\n    .hamburgerGrill:checked ~ .open-hamburger {\n        pointer-events:all ;\n        user-select: all;\n        opacity: 1;\n        transform: translate(0, 4rem);\n        transition: all ease .5s;        \n        z-index: 2;\n        \n    }\n    .open-hamburger ul {\n        flex-direction: column;\n    }\n    .open-hamburger ul li {\n        padding: 2rem;\n        background-color: rgb(255, 0, 0);\n        border-radius: 20px;\n        opacity: 1;\n    }\n\n    .ham-menu {\n        display: block;\n    }\n\n    .hamburgerGrill:checked + .ham-menu {\n        display: none;\n    }\n    \n}\n"],"sourceRoot":""}]);
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

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.classList.add('ham-menu');
        const rect1 = document.createElementNS("http://www.w3.org/2000/svg",'rect');
        const rect2 = document.createElementNS("http://www.w3.org/2000/svg",'rect');
        const rect3 = document.createElementNS("http://www.w3.org/2000/svg",'rect');
        rect1.setAttribute('width', 25);
        rect1.setAttribute('height', 2);
        rect1.setAttribute('x', 0);
        rect1.setAttribute('y', 24);
        rect1.setAttribute('fill', 'blue');

        rect2.setAttribute('width', 25);
        rect2.setAttribute('height', 2);
        rect2.setAttribute('x', 0);
        rect2.setAttribute('y', 17);
        rect2.setAttribute('fill', 'blue');

        rect3.setAttribute('width', 25);
        rect3.setAttribute('height', 2);
        rect3.setAttribute('x', 0);
        rect3.setAttribute('y', 10);
        rect3.setAttribute('fill', 'blue');
        
        svg.appendChild(rect1);
        svg.appendChild(rect2);
        svg.appendChild(rect3);

        svg.setAttribute('viewbox', '0 0 50 50');
        svg.setAttribute('xmlns', "http://www.w3.org/2000/svg");
        svg.setAttribute('stroke', 'transparent');

        
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
        header.appendChild(svg);
        header.appendChild(openHamburger);

        content.appendChild(header);

        svg.addEventListener('click', () => {
            if ((hamburgerGrill.checked == false && window.innerWidth < 800) || (hamburgerGrill.checked == false && window.innerWidth > 800)) {
                hamburgerGrill.checked = true;
            } else if ((hamburgerGrill.checked == true && window.innerWidth > 800) || (hamburgerGrill.checked == true && window.innerWidth < 800)) {
                hamburgerGrill.checked = false;
            } 
        })
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
                svgObject2.contentDocument.querySelector('.fire-path').setAttribute("stroke", "#014421");
            }
        }

        svgObject2.contentDocument.querySelector('.price-tag').addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_2__.createAbout);
        svgObject2.contentDocument.querySelector('.aboutText').addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_2__.createAbout);
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

    const hamMenu = document.querySelector('.ham-menu');
    hamMenu.addEventListener
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

module.exports = __webpack_require__.p + "ee47f5850a18b4d1afa9.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsU0FBUyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxZQUFZLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLEtBQUssVUFBVSxVQUFVLFlBQVksYUFB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0N3QztBQUMrQjtBQUNsRDtBQUNlO0FBQ1c7QUFDVDs7O0FBR3RDO0FBQ0EsSUFBSSxxREFBVTtBQUNkLElBQUksMkRBQWdCO0FBQ3BCLElBQUkscURBQVU7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9maXJlc3RhcnRlci13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udHMvZmlyZXN0YXJ0ZXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYnJpc2tldC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJpbWFnZXMvYm90dG9tR3JpbGwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3RvcEdyaWxsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi8qIEhlYWRlciAqL1xcblxcbjpyb290IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmbGV4LWJhc2lzOiA2MCU7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3VibGUgcmVkO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgbWFyZ2luOiAwIDAgMCBjbGFtcCguNXJlbSwgNSUgLDMuNXJlbSk7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWluLXdpZHRoOiAxM3JlbTtcXG4gICAgbWF4LXdpZHRoOiAyMHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogJ2ZpcmVzdGFydGVycmVndWxhcic7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oYW1idXJnZXJHcmlsbCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxuICAgIG9wYWNpdHk6IC42O1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW0gMCAxLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgbWluLXdpZHRoOiA1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5oYW1idXJnZXJHcmlsbDpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgbWFzay1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIC13ZWJraXQtbWFzay1zaXplOiBjb250YWluO1xcbiAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIG1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW0gMCA7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5oYW1idXJnZXJHcmlsbDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREI1ODtcXG59XFxuXFxuLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQ6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQgfiAub3Blbi1oYW1idXJnZXIge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xcbn1cXG5cXG4ub3Blbi1oYW1idXJnZXIge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTguNXJlbSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3Blbi1oYW1idXJnZXIgdWwge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB1bCBsaSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTtcXG4gICAgb3BhY2l0eTogLjY7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiByZWQ7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB1bCBsaTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgXFxufVxcblxcbi5oYW0tbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHotaW5kZXg6IDQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzLjVyZW07XFxuICAgIHJpZ2h0OiAzLjI1cmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5oYW0tbWVudSByZWN0IHtcXG4gICAgZmlsbDojMDAzQjFCOyAgICBcXG59XFxuXFxuLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQgfiAuaGFtLW1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuXFxuXFxuLyotLS0tLS0gR3JpbGwgLS0tLS0tLSovXFxuLmNvbnRhaW5lciB7XFxuICAgIG9wYWNpdHk6IC45NTtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IGNsYW1wKDIwcmVtLCA4MCUsIDI4cmVtKTtcXG4gICAgcGFkZGluZzogMXJlbSBjbGFtcCgxcmVtLCAxMCUsIDRyZW0pIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xcblxcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG5cXG4uZmlyc3QtdGV4dCB7XFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuI3N2Zy1vYmplY3Qge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIFxcbn1cXG5cXG4uZ3JpbGwtdG9wOmhvdmVyICNzdmctb2JqZWN0IHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLS4xNXR1cm4pIHRyYW5zbGF0ZSgtNSUsIC03MCUpO1xcbn1cXG5cXG4uZ3JpbGwtdG9wIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVyZW07XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAxLjI1cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ncmlsbC10b3AgaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXJlbTtcXG4gICAgbGVmdDogNi43NXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRCNTg7XFxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAzQjFCO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm94LXNoYWRvdzogLjVweCAuNXB4IDJweCBibGFjaztcXG59XFxuXFxuLmdyaWxsLXRvcCA+IGgzOmhvdmVyIHtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBsZWZ0OiA3cmVtO1xcbiAgICBjb2xvcjojRkZEQjU4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjojRkZEQjU4O1xcbiAgICAvKiBib3JkZXI6IG5vbmU7ICovXFxuICAgIC8qIGJvcmRlci1ib3R0b206I0ZGREI1OCAycHggc29saWQ7ICovXFxufVxcblxcbi5ncmlsbC1ib3R0b20ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgei1pbmRleDogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ3JpbGwtYm90dG9tIGgzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDExLjVyZW07XFxuICAgIGxlZnQ6IDYuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRCNTg7XFxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAzQjFCO1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgYm94LXNoYWRvdzogLjVweCAuNXB4IDJweCBibGFjaztcXG59XFxuXFxuLmdyaWxsLWJvdHRvbSBoMzpob3ZlciB7XFxuICAgIHRvcDogMTEuNXJlbTtcXG4gICAgbGVmdDogNi41cmVtO1xcbiAgICBjb2xvcjogI0ZGREI1ODtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjojRkZEQjU4O1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5cXG4vKiBNZW51ICovXFxuXFxuXFxuLm1lbnUtaXRlbXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNsYW1wKDIwcmVtLCAxMDAlLCAzMnJlbSksIDFmcikpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBtYXJnaW46IGNsYW1wKC4yNXJlbSwgMiUsIDJyZW0pIDA7XFxuICAgIGhlaWdodDogY2xhbXAoMjByZW0sIDEwMCUsIDI1cmVtKTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubWVudS1pdGVtIGltZyB7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDEzcmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1lbnUtaXRlbSBwIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiBjbGFtcCg5cmVtLCA4MCUsIDEycmVtKTtcXG59XFxuXFxuLyogQWJvdXQgKi9cXG5cXG5cXG4uZmxleC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNHZ3LCAxLjI1cmVtKTtcXG4gICAgd2lkdGg6IGNsYW1wKDIwcmVtLCA5MCUsIDI4cmVtKTtcXG59XFxuXFxuLmFib3V0LXNlY3Rpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLWNvbnRhY3Qge1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgNHZ3LCAxLjI1cmVtKTtcXG4gICAgd2lkdGg6IGNsYW1wKDIwcmVtLCA5MCUsIDI4cmVtKTtcXG59XFxuXFxuLmNvbnRhaW5lci1jb250YWN0IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAxcmVtIDAgMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAuaGFtYnVyZ2VyR3JpbGwge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgICAgIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgICAgICBtYXNrLXNpemU6IGNvbnRhaW47XFxuICAgICAgICAtd2Via2l0LW1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAtd2Via2l0LW1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMCA7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIG1pbi13aWR0aDogNXJlbTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDVyZW07XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXJHcmlsbDpjaGVja2VkIHtcXG4gICAgICAgIG1hc2staW1hZ2U6IG5vbmU7XFxuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS43NXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRCNTg7XFxuICAgICAgICBtaW4td2lkdGg6IDUuNXJlbTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZDpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQjU4O1xcbiAgICB9XFxuXFxuXFxuICAgIC5oYW1idXJnZXJHcmlsbDpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIH1cXG5cXG4gICAgLm9wZW4taGFtYnVyZ2VyIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IDEuNzVyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQjU4O1xcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMCAuNXJlbTtcXG4gICAgICAgIHdpZHRoOiA1LjVyZW07XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XFxuICAgIH1cXG4gICAgLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQgfiAub3Blbi1oYW1idXJnZXIge1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6YWxsIDtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBhbGw7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNHJlbSk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7ICAgICAgICBcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAub3Blbi1oYW1idXJnZXIgdWwge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICAub3Blbi1oYW1idXJnZXIgdWwgbGkge1xcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG5cXG4gICAgLmhhbS1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXJHcmlsbDpjaGVja2VkICsgLmhhbS1tZW51IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQ0FBaUM7SUFDakM7K0RBQ3lEO0lBQ3pELG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUdBLFdBQVc7O0FBRVg7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5REFBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFB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Q1YsNkJBQTZCO1FBQzdCLHdCQUF3QjtRQUN4QixVQUFVOztJQUVkO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGFBQWE7UUFDYixnQ0FBZ0M7UUFDaEMsbUJBQW1CO1FBQ25CLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2ZpcmVzdGFydGVycmVndWxhcic7XFxuICAgIHNyYzogdXJsKCdmb250cy9maXJlc3RhcnRlci13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgIHVybCgnZm9udHMvZmlyZXN0YXJ0ZXItd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi8qIEhlYWRlciAqL1xcblxcbjpyb290IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9icmlza2V0LmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZsZXgtYmFzaXM6IDYwJTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdWJsZSByZWQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBtYXJnaW46IDAgMCAwIGNsYW1wKC41cmVtLCA1JSAsMy41cmVtKTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtaW4td2lkdGg6IDEzcmVtO1xcbiAgICBtYXgtd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnZmlyZXN0YXJ0ZXJyZWd1bGFyJztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhhbWJ1cmdlckdyaWxsIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvYm90dG9tR3JpbGwuc3ZnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XFxuICAgIG9wYWNpdHk6IC42O1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW0gMCAxLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgcmlnaHQ6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgbWluLXdpZHRoOiA1cmVtO1xcbiAgICBtaW4taGVpZ2h0OiA1cmVtO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbi5oYW1idXJnZXJHcmlsbDpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgbWFzay1pbWFnZTogdXJsKCdpbWFnZXMvdG9wR3JpbGwuc3ZnJyk7XFxuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKCdpbWFnZXMvdG9wR3JpbGwuc3ZnJyk7XFxuICAgIG1hc2stc2l6ZTogY29udGFpbjtcXG4gICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIC13ZWJraXQtbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAtd2Via2l0LW1hc2stcG9zaXRpb246IGNlbnRlcjtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMXJlbSAwIDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmhhbWJ1cmdlckdyaWxsOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEQjU4O1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZCB+IC5vcGVuLWhhbWJ1cmdlciB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuNXM7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOC41cmVtKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcGVuLWhhbWJ1cmdlciB1bCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm9wZW4taGFtYnVyZ2VyIHVsIGxpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpO1xcbiAgICBvcGFjaXR5OiAuNjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IHJlZDtcXG59XFxuXFxuLm9wZW4taGFtYnVyZ2VyIHVsIGxpOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG59XFxuXFxuLmhhbS1tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDogNDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMuNXJlbTtcXG4gICAgcmlnaHQ6IDMuMjVyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmhhbS1tZW51IHJlY3Qge1xcbiAgICBmaWxsOiMwMDNCMUI7ICAgIFxcbn1cXG5cXG4uaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZCB+IC5oYW0tbWVudSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5cXG5cXG4vKi0tLS0tLSBHcmlsbCAtLS0tLS0tKi9cXG4uY29udGFpbmVyIHtcXG4gICAgb3BhY2l0eTogLjk1O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogY2xhbXAoMjByZW0sIDgwJSwgMjhyZW0pO1xcbiAgICBwYWRkaW5nOiAxcmVtIGNsYW1wKDFyZW0sIDEwJSwgNHJlbSkgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XFxuXFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxufVxcblxcbi5maXJzdC10ZXh0IHtcXG4gICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdmaXJlc3RhcnRlcnJlZ3VsYXInO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jc3ZnLW9iamVjdCB7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41cztcXG4gICAgei1pbmRleDogMTtcXG4gICAgXFxufVxcblxcbi5ncmlsbC10b3A6aG92ZXIgI3N2Zy1vYmplY3Qge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtLjE1dHVybikgdHJhbnNsYXRlKC01JSwgLTcwJSk7XFxufVxcblxcbi5ncmlsbC10b3Age1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXJlbTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDEuMjVyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdyaWxsLXRvcCBoMyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBsZWZ0OiA2Ljc1cmVtO1xcbiAgICBmb250LWZhbWlseTogJ2ZpcmVzdGFydGVycmVndWxhcic7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREI1ODtcXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDNCMUI7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiAuNXB4IC41cHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uZ3JpbGwtdG9wID4gaDM6aG92ZXIge1xcbiAgICB0b3A6IDVyZW07XFxuICAgIGxlZnQ6IDdyZW07XFxuICAgIGNvbG9yOiNGRkRCNTg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiNGRkRCNTg7XFxuICAgIC8qIGJvcmRlcjogbm9uZTsgKi9cXG4gICAgLyogYm9yZGVyLWJvdHRvbTojRkZEQjU4IDJweCBzb2xpZDsgKi9cXG59XFxuXFxuLmdyaWxsLWJvdHRvbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ncmlsbC1ib3R0b20gaDMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTEuNXJlbTtcXG4gICAgbGVmdDogNi41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ2ZpcmVzdGFydGVycmVndWxhcic7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREI1ODtcXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICMwMDNCMUI7XFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3gtc2hhZG93OiAuNXB4IC41cHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uZ3JpbGwtYm90dG9tIGgzOmhvdmVyIHtcXG4gICAgdG9wOiAxMS41cmVtO1xcbiAgICBsZWZ0OiA2LjVyZW07XFxuICAgIGNvbG9yOiAjRkZEQjU4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiNGRkRCNTg7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcblxcbi8qIE1lbnUgKi9cXG5cXG5cXG4ubWVudS1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2xhbXAoMjByZW0sIDEwMCUsIDMycmVtKSwgMWZyKSk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMDtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIG1hcmdpbjogY2xhbXAoLjI1cmVtLCAyJSwgMnJlbSkgMDtcXG4gICAgaGVpZ2h0OiBjbGFtcCgyMHJlbSwgMTAwJSwgMjVyZW0pO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNyk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5tZW51LWl0ZW0gaW1nIHtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMTNyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubWVudS1pdGVtIHAge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IGNsYW1wKDlyZW0sIDgwJSwgMTJyZW0pO1xcbn1cXG5cXG4vKiBBYm91dCAqL1xcblxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC45KTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCA0dncsIDEuMjVyZW0pO1xcbiAgICB3aWR0aDogY2xhbXAoMjByZW0sIDkwJSwgMjhyZW0pO1xcbn1cXG5cXG4uYWJvdXQtc2VjdGlvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcblxcbi5jb250YWluZXItY29udGFjdCB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC45KTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCA0dncsIDEuMjVyZW0pO1xcbiAgICB3aWR0aDogY2xhbXAoMjByZW0sIDkwJSwgMjhyZW0pO1xcbn1cXG5cXG4uY29udGFpbmVyLWNvbnRhY3QgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDFyZW0gMCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIC5oYW1idXJnZXJHcmlsbCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICAgICAgbWFzay1pbWFnZTogdXJsKCdpbWFnZXMvdG9wR3JpbGwuc3ZnJyk7XFxuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IHVybCgnaW1hZ2VzL3RvcEdyaWxsLnN2ZycpO1xcbiAgICAgICAgbWFzay1zaXplOiBjb250YWluO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgbWFzay1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBtaW4td2lkdGg6IDVyZW07XFxuICAgICAgICBtaW4taGVpZ2h0OiA1cmVtO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICAuaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZCB7XFxuICAgICAgICBtYXNrLWltYWdlOiBub25lO1xcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdpbWFnZXMvYm90dG9tR3JpbGwuc3ZnJyk7XFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjc1cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGREI1ODtcXG4gICAgICAgIG1pbi13aWR0aDogNS41cmVtO1xcbiAgICAgICAgbWluLWhlaWdodDogNS41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXJHcmlsbDpjaGVja2VkOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRCNTg7XFxuICAgIH1cXG5cXG5cXG4gICAgLmhhbWJ1cmdlckdyaWxsOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgfVxcblxcbiAgICAub3Blbi1oYW1idXJnZXIge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICByaWdodDogMS43NXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkRCNTg7XFxuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgcGFkZGluZzogMnJlbSAwIC41cmVtO1xcbiAgICAgICAgd2lkdGg6IDUuNXJlbTtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gICAgfVxcbiAgICAuaGFtYnVyZ2VyR3JpbGw6Y2hlY2tlZCB+IC5vcGVuLWhhbWJ1cmdlciB7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czphbGwgO1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IGFsbDtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA0cmVtKTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIC41czsgICAgICAgIFxcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5vcGVuLWhhbWJ1cmdlciB1bCB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5vcGVuLWhhbWJ1cmdlciB1bCBsaSB7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcblxcbiAgICAuaGFtLW1lbnUge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlckdyaWxsOmNoZWNrZWQgKyAuaGFtLW1lbnUge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICBcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7ZGVsZXRlUGFnZSwgY3JlYXRlVGFic30gZnJvbSAnLi9ob21lcGFnZSc7XG5pbXBvcnQge2NyZWF0ZUhlYWRlcn0gZnJvbSAnLi9oZWFkZXInXG5cbmZ1bmN0aW9uIGNyZWF0ZUFib3V0KCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBkZWxldGVQYWdlKGNvbnRlbnQpO1xuICAgIGNyZWF0ZUhlYWRlcigpO1xuXG4gICAgY29uc3QgZmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleC1jb250YWluZXInKTtcblxuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuXG4gICAgY29uc3QgY29udGFpbmVyQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lckNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyQ29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItY29udGFjdCcpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LXRleHQnKTtcbiAgICBjb25zdCB0aXRsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQWJvdXQnKTtcblxuICAgIGNvbnN0IHRpdGxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUyLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LXRleHQnKTtcbiAgICBjb25zdCB0aXRsZUNvbnRlbnQyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NvbnRhY3QgVXMnKTtcblxuICAgIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQtc2VjdGlvbicpO1xuICAgIGNvbnN0IGFib3V0U2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnU21va2V5IE1vdW50YWluIE1lYXRzIGlzIGEgZmFtaWx5LXJ1biBCQlEgcmVzdGF1cmFudCBhdCB0aGUgY29uY2x1c2lvbiBvZiB0aGUgQXBwYWxhY2hpYW4gTW91bnRhaW5zIGluIEVhc3Rlcm4gVGVubmVzc2VlLiBXZSBzcGVjaWFsaXplIGluIG91ciBzbW9rZWQgYnJpc2tldCwgc2F0aXNmeSBzd2VldCB0b290aHMgd2l0aCBvdXIgY29ybmJyZWFkLCBhbmQgcHJvZHVjZSBsaXR0bGUgUG9wZXllXFwnZCBjaGlsZHJlbiB3aXRoIG91ciBmcmVzaCBjb2xsYXJkIGdyZWVucy4nKTtcbiBcbiAgICBjb25zdCBjb250YWN0VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgY29uc3QgaG91cnNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0V2ZXJ5ZGF5OiA1cG0gLSAxMXBtJyk7XG4gICAgY29uc3QgcGhvbmVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1Bob25lOiBYWFgtWFhYLVhYWFgnKTtcbiAgICBjb25zdCBhZGRyZXNzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdBZGRyZXNzOiAzIFBhY2lmaWMgQXZlbnVlLCBUaGUgTWlsa3kgV2F5Jyk7XG4gICAgY29uc3QgZW1haWxDb250ZW50ID0gZG9jdW1lbnQuIGNyZWF0ZVRleHROb2RlKCdFbWFpbDogcHJpbWVjdXRAc21va2VkaW50aGVzbW9raWVzLmNvbScpO1xuXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNDb250ZW50KTtcbiAgICBwaG9uZS5hcHBlbmRDaGlsZChwaG9uZUNvbnRlbnQpO1xuICAgIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRlbnQpO1xuICAgIGVtYWlsLmFwcGVuZENoaWxkKGVtYWlsQ29udGVudCk7XG5cbiAgICBjb250YWN0VWwuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICAgIGNvbnRhY3RVbC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gICAgY29udGFjdFVsLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGNvbnRhY3RVbC5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVDb250ZW50KTtcbiAgICB0aXRsZTIuYXBwZW5kQ2hpbGQodGl0bGVDb250ZW50Mik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250YWluZXJDb250YWN0LmFwcGVuZENoaWxkKHRpdGxlMik7XG4gICAgY29udGFpbmVyQ29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VWwpO1xuICAgIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb25Db250ZW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcbiAgICBmbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJDb250YWN0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZsZXhDb250YWluZXIpO1xuXG4gICAgY3JlYXRlVGFicygpO1xufVxuXG5leHBvcnQge2NyZWF0ZUFib3V0fSIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdTbW9rZXkgTW91bnRhaW4gTWVhdHMnKTtcblxuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICAgICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ2hhbS1tZW51Jyk7XG4gICAgICAgIGNvbnN0IHJlY3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwncmVjdCcpO1xuICAgICAgICBjb25zdCByZWN0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsJ3JlY3QnKTtcbiAgICAgICAgY29uc3QgcmVjdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCdyZWN0Jyk7XG4gICAgICAgIHJlY3QxLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAyNSk7XG4gICAgICAgIHJlY3QxLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgMik7XG4gICAgICAgIHJlY3QxLnNldEF0dHJpYnV0ZSgneCcsIDApO1xuICAgICAgICByZWN0MS5zZXRBdHRyaWJ1dGUoJ3knLCAyNCk7XG4gICAgICAgIHJlY3QxLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdibHVlJyk7XG5cbiAgICAgICAgcmVjdDIuc2V0QXR0cmlidXRlKCd3aWR0aCcsIDI1KTtcbiAgICAgICAgcmVjdDIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAyKTtcbiAgICAgICAgcmVjdDIuc2V0QXR0cmlidXRlKCd4JywgMCk7XG4gICAgICAgIHJlY3QyLnNldEF0dHJpYnV0ZSgneScsIDE3KTtcbiAgICAgICAgcmVjdDIuc2V0QXR0cmlidXRlKCdmaWxsJywgJ2JsdWUnKTtcblxuICAgICAgICByZWN0My5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgMjUpO1xuICAgICAgICByZWN0My5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIDIpO1xuICAgICAgICByZWN0My5zZXRBdHRyaWJ1dGUoJ3gnLCAwKTtcbiAgICAgICAgcmVjdDMuc2V0QXR0cmlidXRlKCd5JywgMTApO1xuICAgICAgICByZWN0My5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnYmx1ZScpO1xuICAgICAgICBcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHJlY3QxKTtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHJlY3QyKTtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHJlY3QzKTtcblxuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Ym94JywgJzAgMCA1MCA1MCcpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxucycsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICd0cmFuc3BhcmVudCcpO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBoYW1idXJnZXJHcmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGhhbWJ1cmdlckdyaWxsLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICBoYW1idXJnZXJHcmlsbC5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXJHcmlsbCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgb3BlbkhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcGVuSGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ29wZW4taGFtYnVyZ2VyJyk7XG4gICAgICAgIGNvbnN0IG9wZW5VbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnN0IGxpSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpSG9tZS5pZCA9ICdob21lLWlkJztcbiAgICAgICAgY29uc3QgbGlIb21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdIb21lJyk7XG4gICAgICAgIGNvbnN0IGxpTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpTWVudS5pZCA9ICdtZW51LWlkJ1xuICAgICAgICBjb25zdCBsaU1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ01lbnUnKTtcbiAgICAgICAgY29uc3QgbGlBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpQWJvdXQuaWQgPSAnYWJvdXQtaWQnXG4gICAgICAgIGNvbnN0IGxpQWJvdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0Fib3V0Jyk7XG5cbiAgICAgICAgbGlIb21lLmFwcGVuZENoaWxkKGxpSG9tZUNvbnRlbnQpO1xuICAgICAgICBsaU1lbnUuYXBwZW5kQ2hpbGQobGlNZW51Q29udGVudCk7XG4gICAgICAgIGxpQWJvdXQuYXBwZW5kQ2hpbGQobGlBYm91dENvbnRlbnQpO1xuXG4gICAgICAgIG9wZW5VbC5hcHBlbmRDaGlsZChsaUhvbWUpO1xuICAgICAgICBvcGVuVWwuYXBwZW5kQ2hpbGQobGlNZW51KTtcbiAgICAgICAgb3BlblVsLmFwcGVuZENoaWxkKGxpQWJvdXQpO1xuXG4gICAgICAgIG9wZW5IYW1idXJnZXIuYXBwZW5kQ2hpbGQob3BlblVsKTtcblxuICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRlbnQpO1xuXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoYW1idXJnZXJHcmlsbCk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdmcpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQob3BlbkhhbWJ1cmdlcik7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIHN2Zy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICgoaGFtYnVyZ2VyR3JpbGwuY2hlY2tlZCA9PSBmYWxzZSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IDgwMCkgfHwgKGhhbWJ1cmdlckdyaWxsLmNoZWNrZWQgPT0gZmFsc2UgJiYgd2luZG93LmlubmVyV2lkdGggPiA4MDApKSB7XG4gICAgICAgICAgICAgICAgaGFtYnVyZ2VyR3JpbGwuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChoYW1idXJnZXJHcmlsbC5jaGVja2VkID09IHRydWUgJiYgd2luZG93LmlubmVyV2lkdGggPiA4MDApIHx8IChoYW1idXJnZXJHcmlsbC5jaGVja2VkID09IHRydWUgJiYgd2luZG93LmlubmVyV2lkdGggPCA4MDApKSB7XG4gICAgICAgICAgICAgICAgaGFtYnVyZ2VyR3JpbGwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBleHBvcnQge2NyZWF0ZUhlYWRlcn0iLCJpbXBvcnQgSWNvbkJvdHRvbSBmcm9tICcuL2ltYWdlcy9ib3R0b21HcmlsbC5zdmcnO1xuaW1wb3J0IEljb25Ub3AgZnJvbSAnLi9pbWFnZXMvdG9wR3JpbGwuc3ZnJztcblxuaW1wb3J0IHsgY3JlYXRlQWJvdXQgfSBmcm9tICcuL2Fib3V0JztcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuXG5cbmZ1bmN0aW9uIGdyaWxsUGFydHMoKSB7ICAgIFxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBkZWxldGVQYWdlKGNvbnRlbnQpO1xuXG4gICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGdyaWxsVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpbGxUb3AuY2xhc3NMaXN0LmFkZCgnZ3JpbGwtdG9wJyk7XG4gICAgY29uc3QgZ3JpbGxCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlsbEJvdHRvbS5jbGFzc0xpc3QuYWRkKCdncmlsbC1ib3R0b20nKTtcbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZXh0MS5jbGFzc0xpc3QuYWRkKCdmaXJzdC10ZXh0Jyk7XG4gICAgY29uc3QgdGV4dDFDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0ZhbGxpbmcgb2ZmIHRoZSBib25lIHNpbmNlIDE5OTcnKTtcbiAgICBjb25zdCBvYmplY3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XG4gICAgb2JqZWN0MS5pZCA9ICdzdmctb2JqZWN0JztcbiAgICBvYmplY3QxLnNldEF0dHJpYnV0ZSgndHlwZScsIFwiaW1hZ2Uvc3ZnK3htbFwiKTtcbiAgICBvYmplY3QxLnNldEF0dHJpYnV0ZSgnZGF0YScsIEljb25Ub3ApO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ01lbnUnKTtcbiAgICBjb25zdCBvYmplY3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0Jyk7XG4gICAgb2JqZWN0Mi5pZCA9ICdzdmctb2JqZWN0Mic7XG4gICAgb2JqZWN0Mi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcImltYWdlL3N2Zyt4bWxcIik7XG4gICAgb2JqZWN0Mi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBJY29uQm90dG9tKTtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgYWJvdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0Fib3V0Jyk7XG5cbiAgICBcbiAgICBncmlsbFRvcC5hcHBlbmRDaGlsZChvYmplY3QxKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVDb250ZW50KTtcbiAgICBncmlsbFRvcC5hcHBlbmRDaGlsZChtZW51KTtcblxuICAgIGdyaWxsQm90dG9tLmFwcGVuZENoaWxkKG9iamVjdDIpO1xuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0Q29udGVudCk7XG4gICAgZ3JpbGxCb3R0b20uYXBwZW5kQ2hpbGQoYWJvdXQpO1xuXG4gICAgdGV4dDEuYXBwZW5kQ2hpbGQodGV4dDFDb250ZW50KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0MSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWxsVG9wKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpbGxCb3R0b20pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgZ3JpbGxUb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVNZW51KTtcbiAgICBncmlsbEJvdHRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUFib3V0KTtcbiAgICBcblxuICAgIGNyZWF0ZVRhYnMoKTtcblxufTtcblxuZnVuY3Rpb24gYWRkR3JpbGxGZWF0dXJlcygpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBzdmdPYmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ZnLW9iamVjdCcpO1xuICAgICAgICBjb25zdCBzdmdPYmplY3QyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N2Zy1vYmplY3QyJyk7XG4gICAgICAgIGNvbnN0IGdyaWxsVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWxsLXRvcCcpO1xuICAgICAgICBjb25zdCBncmlsbEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlsbC1ib3R0b20nKTtcbiAgICBcbiAgICAgICAgc3ZnT2JqZWN0LmNvbnRlbnREb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZlbnRzXCIpLmZvckVhY2godmVudCA9PiB2ZW50LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjZTI1ODIyNzBcIikpO1xuICAgICAgICBzdmdPYmplY3QyLmNvbnRlbnREb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRUZXh0Jykuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwibm9uZVwiKTtcbiAgICAgICAgc3ZnT2JqZWN0Mi5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlLXRhZycpLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjMDE0NDIxXCIpO1xuICAgICAgICBzdmdPYmplY3QyLmNvbnRlbnREb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRUZXh0Jykuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJlZFwiKTtcblxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VWZW50Q29sb3JzKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgICAgICAgICAgICAgc3ZnT2JqZWN0LmNvbnRlbnREb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZlbnRzXCIpLmZvckVhY2godmVudCA9PiB2ZW50LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjZTI1ODIyNzBcIikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSAnbW91c2VlbnRlcicpIHtcbiAgICAgICAgICAgICAgICBzdmdPYmplY3QuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmVudHNcIikuZm9yRWFjaCh2ZW50ID0+IHZlbnQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImJsYWNrXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBjaGFuZ2VUYWdDb2xvcihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWxlYXZlJykge1xuICAgICAgICAgICAgICAgIHN2Z09iamVjdDIuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS10YWcnKS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiIzAxNDQyMVwiKTtcbiAgICAgICAgICAgICAgICBzdmdPYmplY3QyLmNvbnRlbnREb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRUZXh0Jykuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJlZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZW50ZXInKSB7XG4gICAgICAgICAgICAgICAgc3ZnT2JqZWN0Mi5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlLXRhZycpLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjRkZEQjU4XCIpO1xuICAgICAgICAgICAgICAgIHN2Z09iamVjdDIuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dFRleHQnKS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiYmxhY2tcIik7XG4gICAgICAgICAgICAgICAgc3ZnT2JqZWN0Mi5jb250ZW50RG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcmUtcGF0aCcpLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcIiMwMTQ0MjFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdmdPYmplY3QyLmNvbnRlbnREb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2UtdGFnJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBYm91dCk7XG4gICAgICAgIHN2Z09iamVjdDIuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dFRleHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUFib3V0KTtcbiAgICAgICAgZ3JpbGxUb3AuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGNoYW5nZVZlbnRDb2xvcnMpO1xuICAgICAgICBncmlsbFRvcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgY2hhbmdlVmVudENvbG9ycyk7XG4gICAgICAgIGdyaWxsQm90dG9tLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBjaGFuZ2VUYWdDb2xvcik7XG4gICAgICAgIGdyaWxsQm90dG9tLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBjaGFuZ2VUYWdDb2xvcik7XG5cbiAgICB9LCAyNTApO1xuXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVBhZ2UoY29udGVudCkge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xuICAgIFxuICAgIGNvbnN0IGhlYWRlckgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJyk7XG4gICAgXG4gICAgaGVhZGVySDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBncmlsbFBhcnRzKTtcbiAgICBoZWFkZXJIMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEdyaWxsRmVhdHVyZXMpO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWlkJyk7XG5cbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3JpbGxQYXJ0cyk7XG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEdyaWxsRmVhdHVyZXMpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWlkJyk7XG5cbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTWVudSk7XG5cbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC1pZCcpO1xuXG4gICAgYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVBYm91dCk7XG5cbiAgICBjb25zdCBoYW1NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbS1tZW51Jyk7XG4gICAgaGFtTWVudS5hZGRFdmVudExpc3RlbmVyXG59O1xuXG5leHBvcnQge2dyaWxsUGFydHMsIGFkZEdyaWxsRmVhdHVyZXMsIGRlbGV0ZVBhZ2UsIGNyZWF0ZVRhYnN9IiwiaW1wb3J0IEljb25Ccmlza2V0IGZyb20gJy4vaW1hZ2VzL2JyaXNrZXRCYXNrZXQuanBnJztcbmltcG9ydCBJY29uUG9yayBmcm9tICcuL2ltYWdlcy9wdWxsZWRQb3JrLmpwZyc7XG5pbXBvcnQgSWNvbkdyZWVucyBmcm9tICcuL2ltYWdlcy9jb2xsYXJkR3JlZW5zLmpwZyc7XG5pbXBvcnQgSWNvbkNvcm5icmVhZCBmcm9tICcuL2ltYWdlcy9jb3JuYnJlYWQuanBnJztcblxuaW1wb3J0IHtjcmVhdGVIZWFkZXJ9IGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCB7ZGVsZXRlUGFnZSwgY3JlYXRlVGFic30gZnJvbSAnLi9ob21lcGFnZSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBkZWxldGVQYWdlKGNvbnRlbnQpO1xuICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZmlyc3QtdGV4dCcpO1xuICAgIGNvbnN0IHRpdGxlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdPZmYgdGhlIEdyaWxsJyk7XG4gICAgXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbXMnKTtcblxuICAgIGNvbnN0IGZvb2QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZDEuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgZm9vZDEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgY29uc3QgYnJpc2tldFBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGJyaXNrZXRQaWMuc3JjID0gSWNvbkJyaXNrZXQ7XG4gICAgY29uc3QgZm9vZDFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZvb2QxVGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnVGhlIEJyaXNrZXQgQmFza2V0Jyk7XG5cbiAgICBjb25zdCBmb29kMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2QyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGZvb2QyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGNvbnN0IHB1bGxlZFBvcmtQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBwdWxsZWRQb3JrUGljLnNyYyA9IEljb25Qb3JrO1xuICAgIGNvbnN0IGZvb2QyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBmb29kMlRleHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1B1bGxlZCBQb3JrIFNhbmR3aWNoJyk7XG5cbiAgICBjb25zdCBmb29kMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb2QzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGZvb2QzLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGNvbnN0IGNvbGxhcmRQaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb2xsYXJkUGljLnNyYyA9IEljb25HcmVlbnM7XG4gICAgY29uc3QgZm9vZDNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZvb2QzVGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29sbGFyZCBHcmVlbnMnKTtcblxuICAgIGNvbnN0IGZvb2Q0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vZDQuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgZm9vZDQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgY29uc3QgY29ybmJyZWFkUGljID0gbmV3IEltYWdlKCk7XG4gICAgY29ybmJyZWFkUGljLnNyYyA9IEljb25Db3JuYnJlYWQ7XG4gICAgY29uc3QgZm9vZDRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZvb2Q0VGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29ybmJyZWFkJyk7XG5cbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRlbnQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBmb29kMS5hcHBlbmRDaGlsZChicmlza2V0UGljKTtcbiAgICBmb29kMVRleHQuYXBwZW5kQ2hpbGQoZm9vZDFUZXh0Q29udGVudCk7XG4gICAgZm9vZDEuYXBwZW5kQ2hpbGQoZm9vZDFUZXh0KTtcblxuICAgIGZvb2QyLmFwcGVuZENoaWxkKHB1bGxlZFBvcmtQaWMpO1xuICAgIGZvb2QyVGV4dC5hcHBlbmRDaGlsZChmb29kMlRleHRDb250ZW50KTtcbiAgICBmb29kMi5hcHBlbmRDaGlsZChmb29kMlRleHQpO1xuXG4gICAgZm9vZDMuYXBwZW5kQ2hpbGQoY29sbGFyZFBpYyk7XG4gICAgZm9vZDNUZXh0LmFwcGVuZENoaWxkKGZvb2QzVGV4dENvbnRlbnQpO1xuICAgIGZvb2QzLmFwcGVuZENoaWxkKGZvb2QzVGV4dCk7XG5cbiAgICBmb29kNC5hcHBlbmRDaGlsZChjb3JuYnJlYWRQaWMpO1xuICAgIGZvb2Q0VGV4dC5hcHBlbmRDaGlsZChmb29kNFRleHRDb250ZW50KTtcbiAgICBmb29kNC5hcHBlbmRDaGlsZChmb29kNFRleHQpO1xuXG4gICBcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoZm9vZDEpO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChmb29kMik7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGZvb2QzKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoZm9vZDQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcblxuICAgIGNyZWF0ZVRhYnMoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBhZGRHcmlsbEZlYXR1cmVzLCAgZ3JpbGxQYXJ0cywgY3JlYXRlVGFicyB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgSWNvbkJyaXNrZXQgZnJvbSAnLi9pbWFnZXMvYnJpc2tldC5qcGcnO1xuaW1wb3J0IHsgY3JlYXRlQWJvdXQgfSBmcm9tIFwiLi9hYm91dFwiO1xuXG5cbihmdW5jdGlvbiBpbml0KCkge1xuICAgIGdyaWxsUGFydHMoKTtcbiAgICBhZGRHcmlsbEZlYXR1cmVzKCk7XG4gICAgY3JlYXRlVGFicygpO1xufSkoKTtcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9