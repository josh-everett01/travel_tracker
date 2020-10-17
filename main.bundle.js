/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nbody {\n  background-color: var(--main-bg-color);\n  color: var(--main-txt-color);\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.3rem;\n  margin: 0;\n  text-align: center;\n  width: 100%; }\n\nbutton {\n  background-color: var(--main-border-color);\n  border-radius: 20px;\n  color: var(--main-txt-color); }\n\nhtml {\n  --header-bg-color: #fff;\n  --main-bg-color: #fff;\n  --main-border-color: #fff;\n  --main-txt-color: #000; }\n\ni {\n  background-color: var(--header-bg-color);\n  color: var(--main-txt-color); }\n\nimg {\n  border: 1px solid var(--main-txt-color);\n  border-radius: 20px;\n  height: 300px;\n  margin: 3%;\n  width: 350px; }\n\nlabel {\n  font-family: \"Fira Sans\", sans-serif; }\n\np text {\n  margin: 5%; }\n\nsection:first-of-type {\n  align-content: center;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: auto;\n  grid-template-rows: 0.2fr 2fr 0.1fr 0.1fr 0.1fr 0.1fr;\n  place-items: center; }\n\n.approve-button {\n  grid-row: 7; }\n\n.container {\n  align-content: center;\n  border: 2px solid var(--main-border-color);\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 0.2fr 2fr 0.1fr 0.1fr 0.1fr 0.1fr;\n  margin: 5%;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 16px;\n  place-items: center; }\n\n.deny-button {\n  grid-row: 8; }\n\n.destination-image {\n  grid-row: 2;\n  height: 225px;\n  margin: 3%;\n  width: 275px; }\n\n.footer {\n  bottom: 0;\n  display: none;\n  font-size: x-small;\n  margin-bottom: -1%;\n  position: fixed;\n  width: 100%; }\n\n.header-section {\n  background-color: var(--header-bg-color);\n  border-bottom: 1px solid var(--main-txt-color);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-items: center;\n  justify-content: space-around;\n  margin-bottom: 10px;\n  padding-bottom: 1px;\n  padding-top: 10px;\n  position: fixed;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  z-index: 1; }\n\n.header-section h1 {\n  grid-column: 2;\n  grid-row: 1; }\n\n.home-destination-name {\n  margin: 3%; }\n\n.image-and-name-div {\n  display: flex;\n  flex-direction: column;\n  margin: 1%;\n  text-align: center; }\n\n.main-section {\n  display: grid;\n  margin-top: 3em;\n  place-items: center; }\n\n.past-trips {\n  grid-column: 2; }\n\n.welcome-header {\n  margin-top: 11%; }\n\n.submit {\n  border-radius: 10px;\n  color: var(--main-txt-color);\n  height: 50%;\n  margin-top: 4.5%;\n  padding: 1%; }\n\n.total-spent {\n  display: flex;\n  margin: auto;\n  margin-left: 40%;\n  margin-top: 2%; }\n\n.travname {\n  color: var(--main-border-color); }\n\n.trip-date {\n  grid-row: 3; }\n\n.trip-destination {\n  grid-row: 4; }\n\n.trip-duration {\n  grid-row: 5; }\n\n.trip-status {\n  grid-row: 6; }\n\n#agent-header {\n  border-radius: 20px;\n  color: var(--main-bg-color);\n  font-size: xxx-large;\n  margin-bottom: -5%;\n  margin-top: 11%;\n  opacity: 10%; }\n\n#agent-tools {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  height: 60%; }\n\n#agent-tools h3 {\n  grid-row: 1;\n  grid-column-start: 1;\n  grid-column-end: none;\n  width: 100%; }\n\n#agent-tools label {\n  grid-row: 2;\n  grid-column: 2; }\n\n#confirm-trip-request-button {\n  color: var(--main-txt-color); }\n\n#end {\n  grid-row: 4; }\n\n#h1-div {\n  background-image: url(\"https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1024-80.jpg.webp\");\n  background-size: cover;\n  background-position: bottom;\n  border: 1px solid var(--main-txt-color);\n  opacity: 88%;\n  padding: 10%; }\n\n#home-page {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 5%; }\n\n#home-page-h1 {\n  border-radius: 20px;\n  color: #fff;\n  font-size: xxx-large;\n  margin-bottom: -5%;\n  margin-top: 11%;\n  opacity: 10%; }\n\n#login-form {\n  display: flex;\n  grid-column: 3;\n  grid-row: 1;\n  justify-content: space-evenly;\n  margin: 3%;\n  width: 100%; }\n\n#login-form input {\n  padding: 3%; }\n\n#log-out-button {\n  border-radius: 10px;\n  color: var(--main-txt-color);\n  height: 50%;\n  margin-top: 4%;\n  grid-column: 3;\n  grid-row: 1; }\n\n#request-form {\n  display: flex;\n  flex-direction: column; }\n\n#requested-trips {\n  display: flex;\n  flex-direction: column; }\n\n#start {\n  grid-row: 4; }\n\n#show-traveler-button {\n  grid-column: 2;\n  grid-row: 4; }\n\n#todays-trips {\n  display: flex;\n  flex-direction: column; }\n\n#todays-trips #trip-request-button {\n  color: var(--main-txt-color); }\n\n#traveler {\n  grid-column: 2;\n  grid-row: 3; }\n\n#trav-search-bar-label {\n  grid-column: 2;\n  grid-row: 2; }\n\n#welcome-header {\n  margin-top: 11%; }\n\n@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {\n  body {\n    display: grid;\n    font-size: 1.7rem;\n    place-items: center; }\n  img {\n    height: 350px;\n    width: 400px; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .header-section h1 {\n    grid-column: 1;\n    grid-row: 1; }\n  .total-spent {\n    margin: 10px auto 0 auto;\n    margin-top: 2%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 60%; }\n  #agent-tools h3 {\n    grid-row: 1;\n    grid-column-end: none;\n    grid-column-start: 1;\n    width: 100%; }\n  #agent-tools label {\n    grid-column: 2;\n    grid-row: 2; }\n  #footer {\n    bottom: 0;\n    left: 0;\n    position: fixed; }\n  #h1-div {\n    border-radius: 0 0 20px 20px;\n    margin-top: 5%;\n    width: 100%; }\n  #header-section {\n    flex-direction: column;\n    font-size: 1.3rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    margin: 0;\n    padding: 0; }\n  #header-section h1 {\n    font-size: 2rem; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    margin-bottom: 0;\n    padding: 1%;\n    padding-top: 2%; }\n  #login-form {\n    display: flex;\n    grid-column: 2;\n    grid-row: 1;\n    justify-content: space-around;\n    width: 100%; }\n  #login-form input {\n    padding: 3%; }\n  #submit {\n    align-self: flex-end;\n    margin-bottom: 3px; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler-page {\n    display: grid; } }\n\n@media (min-width: 768px) and (max-width: 1075px) {\n  body {\n    display: grid;\n    font-size: 18px;\n    place-items: center; }\n  img {\n    height: 350px;\n    width: 400px; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .header-section h1 {\n    grid-column: 1;\n    grid-row: 1; }\n  .total-spent {\n    margin: 10px auto 0 auto;\n    margin-top: 2%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 60%; }\n  #agent-tools h3 {\n    grid-row: 1;\n    grid-column-end: none;\n    grid-column-start: 1;\n    width: 100%; }\n  #agent-tools label {\n    grid-column: 2;\n    grid-row: 2; }\n  #footer {\n    bottom: 0;\n    left: 0;\n    position: fixed; }\n  #h1-div {\n    border-radius: 0 0 20px 20px;\n    margin-top: 5%;\n    width: 100%; }\n  #header-section {\n    flex-direction: column;\n    font-size: 1.3rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    margin: 0;\n    padding: 0; }\n  #header-section h1 {\n    font-size: 2rem; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    margin-bottom: 0;\n    padding: 1%;\n    padding-top: 2%; }\n  #login-form {\n    display: flex;\n    grid-column: 2;\n    grid-row: 1;\n    justify-content: space-around;\n    width: 100%; }\n  #login-form input {\n    padding: 3%; }\n  #submit {\n    align-self: flex-end;\n    margin-bottom: 3px;\n    margin-left: 8px; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler-page {\n    display: grid; } }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  body {\n    display: grid;\n    font-size: 18px;\n    place-items: center; }\n  img {\n    height: 350px;\n    width: 400px; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .header-section h1 {\n    grid-column: 1;\n    grid-row: 1; }\n  .total-spent {\n    margin: 10px auto 0 auto;\n    margin-top: 2%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 60%; }\n  #agent-tools h3 {\n    grid-row: 1;\n    grid-column-end: none;\n    grid-column-start: 1;\n    width: 100%; }\n  #agent-tools label {\n    grid-column: 2;\n    grid-row: 2; }\n  #footer {\n    bottom: 0;\n    left: 0;\n    position: fixed; }\n  #h1-div {\n    border-radius: 0 0 20px 20px;\n    margin-top: 5%;\n    width: 100%; }\n  #header-section {\n    flex-direction: column;\n    font-size: 1.3rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    margin: 0;\n    padding: 0; }\n  #header-section h1 {\n    font-size: 2rem; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    margin-bottom: 0;\n    padding: 1%;\n    padding-top: 2%; }\n  #login-form {\n    display: flex;\n    grid-column: 2;\n    grid-row: 1;\n    justify-content: space-between;\n    width: 100%; }\n  #login-form input {\n    padding: 3%; }\n  #submit {\n    align-self: flex-end;\n    margin-bottom: 3px;\n    margin-left: 8px;\n    padding: 2%; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler-page {\n    display: grid; } }\n\n@media (max-width: 425px) {\n  * {\n    margin: 0;\n    padding: 0; }\n  body {\n    display: grid;\n    font-size: 1rem;\n    text-align: center; }\n  button {\n    padding: 2%; }\n  h1 {\n    margin-top: 10px; }\n  img {\n    height: 95%;\n    width: 95%; }\n  input {\n    width: 75%; }\n  p {\n    text-align: center; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .home-destination-name {\n    grid-column: 1;\n    margin-top: 10px; }\n  .home-page {\n    place-items: center; }\n  .total-earned {\n    display: grid;\n    grid-row: 2; }\n  .total-spent {\n    margin: 10px auto 0 auto; }\n  .welcome-header {\n    margin-top: 10%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 65%; }\n  #h1-div {\n    border-radius: 0 0 20px 20px;\n    display: grid;\n    grid-template-rows: 1fr 0.3fr; }\n  #header-section {\n    display: flex;\n    flex-direction: column;\n    font-size: x-small;\n    grid-row: 1;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin: 0;\n    padding: 0; }\n  #home-page {\n    display: grid;\n    margin: 0;\n    margin-top: 5%; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    font-size: revert;\n    margin-top: 35%; }\n  #login-form {\n    display: flex;\n    grid-column: 1;\n    grid-row: 2;\n    justify-content: space-evenly;\n    margin: 4%;\n    place-items: center;\n    width: 100%; }\n  #login-form button {\n    margin-right: 5%; }\n  #login-form input {\n    margin: 0; }\n  #log-out-button {\n    grid-row: 1;\n    grid-column: 1;\n    margin-top: -15%; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler {\n    width: auto; }\n  #traveler-page {\n    display: grid; } }\n\n@media (max-width: 375px) {\n  * {\n    margin: 0;\n    padding: 0; }\n  body {\n    display: grid;\n    font-size: 1rem;\n    text-align: center; }\n  button {\n    padding: 2%; }\n  img {\n    height: 95%;\n    width: 95%; }\n  input {\n    width: 75%; }\n  p {\n    text-align: center; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .header-section h1 {\n    grid-column: 1;\n    grid-row: 1; }\n  .home-destination-name {\n    grid-column: 1;\n    margin-top: 10px; }\n  .home-page {\n    place-items: center; }\n  .total-earned {\n    display: grid;\n    grid-row: 2; }\n  .total-spent {\n    margin: 10px auto 0 auto; }\n  .welcome-header {\n    margin-top: 10%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%;\n    grid-row: 2; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 65%; }\n  #h1-div {\n    border-radius: 0 0 20px 20px;\n    display: grid;\n    grid-template-rows: 1fr 0.3fr; }\n  #header-section {\n    display: flex;\n    flex-direction: column;\n    font-size: x-small;\n    grid-row: 1;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 0.25fr;\n    margin: 0;\n    padding: 0; }\n  #home-page {\n    display: grid;\n    margin: 0;\n    margin-top: 5%; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    font-size: revert;\n    margin-top: 35%; }\n  #log-out-button {\n    grid-row: 1;\n    grid-column: 1;\n    margin-top: -15%; }\n  #login-form {\n    display: flex;\n    grid-column: 1;\n    grid-row: 2;\n    justify-content: space-evenly;\n    margin: 3%;\n    place-items: center;\n    width: 100%; }\n  #login-form button {\n    margin-right: 5%; }\n  #login-form input {\n    margin: 0; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler {\n    width: auto; }\n  #traveler-page {\n    display: grid; } }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/agent_dashboard_helper.js":
/*!***************************************!*\
  !*** ./src/agent_dashboard_helper.js ***!
  \***************************************/
/*! exports provided: renderSuccessfulAgencyLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSuccessfulAgencyLogin", function() { return renderSuccessfulAgencyLogin; });
/* harmony import */ var _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel_tracker_service */ "./src/travel_tracker_service.js");
/* harmony import */ var _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard_helper */ "./src/dashboard_helper.js");
/* harmony import */ var _traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traveler_dashboard_helper */ "./src/traveler_dashboard_helper.js");
/* harmony import */ var _styling_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styling_helper */ "./src/styling_helper.js");





function setAgentPage() {
  document.getElementById("footer").style.display = "none";
  document.getElementById("home-page-h1").innerHTML = "Welcome, AGENT";
  document.getElementById("home-page-h1").id = "agent-header";
}

function renderAgentWelcome() {
  setAgentPage();
  _styling_helper__WEBPACK_IMPORTED_MODULE_3__["agentMediaQuery"]();
  _styling_helper__WEBPACK_IMPORTED_MODULE_3__["agentMediaQuery768"]();
}

function renderAmountAgentEarned(trips, destinations) {
  let amountAgentEarned = getLodgingCostsForAgent(destinations, trips);
  renderTotalEarned(amountAgentEarned);
}

function checkForNoTravelers(todaysTrips) {
  if (todaysTrips.todaysTrips.length === 0) {
    let noTravelersTextNode = document.createTextNode(
      "There are no travelers on Trips Today"
    );
    let noTravelersH1 = document.createElement("h1");
    noTravelersH1.appendChild(noTravelersTextNode);
    document.querySelectorAll("section")[1].appendChild(noTravelersH1);
  }
}

function renderTravelersOnTripsToday(todaysTrips, destinations) {
  if (todaysTrips.todaysTrips.length > 0) {
    renderAgentTrips(todaysTrips, destinations);
  }
}

function renderPendingAndTodaysTrips(trips, destinations) {
  let pendingTrips = _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["getPendingTrips"](trips);
  renderAgentTrips(pendingTrips, destinations);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripsHeader"]("Today's");
  document.getElementsByClassName("container")[1].id = "todays-trips";
  let todaysTrips = _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["getTodaysTrips"](trips);
  checkForNoTravelers(todaysTrips);
  renderTravelersOnTripsToday(todaysTrips, destinations);
}

function renderTopHalfOfAgentDashboard(trips, destinations) {
  renderAmountAgentEarned(trips, destinations);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripsHeader"]("Requested");
  renderPendingAndTodaysTrips(trips, destinations);
}

function renderBottomHalfOfAgentDashboard(trips, destinations) {
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripsHeader"]("Agent Tools and Traveler");
  renderTravelerSearchBar();
  renderShowTravelerButton(trips, destinations);
}

function renderSuccessfulAgencyLogin() {
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderLogOutButton"]();
  renderAgentWelcome();
  _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getAllTrips"]().then(function (trips) {
    _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getAllDestinations"]().then(function (destinations) {
      trips;
      renderTopHalfOfAgentDashboard(trips, destinations);
      renderBottomHalfOfAgentDashboard(trips, destinations);
    });
  });
}

function returnApprovedTrips(trips) {
  let approvedTrips = [];
  let i;
  for (i = 0; i < trips.length; i++) {
    if (trips[i].status === "approved") {
      approvedTrips.push(trips[i]);
    }
  }
  return approvedTrips;
}

function loopThroughApprovedTrip(
  approvedTrip,
  destinations,
  destinationIndex,
  approvedTripsFlightPlusLodgingArr
) {
  for (
    destinationIndex = 0;
    destinationIndex < destinations.length;
    destinationIndex++
  ) {
    let destinationID = approvedTrip.destinationID;
    let destinationIndexId = destinations[destinationIndex].id;
    if (destinationID === destinationIndexId) {
      approvedTripsFlightPlusLodgingArr.push(
        destinations[destinationIndex].estimatedLodgingCostPerDay +
        destinations[destinationIndex].estimatedFlightCostPerPerson
      );
      let approvedTripFlightPlusLodging = approvedTripsFlightPlusLodgingArr;
      return approvedTripFlightPlusLodging;
    }
  }
}

function returnApprovedTripsFlightsAndLodging(destinations, approvedTrips) {
  let approvedTripsFlightPlusLodgingArr = [];
  let destinationIndex;
  for (let i = 0; i < approvedTrips.length; i++) {
    loopThroughApprovedTrip(
      approvedTrips[i],
      destinations,
      destinationIndex,
      approvedTripsFlightPlusLodgingArr
    );
  }
  return approvedTripsFlightPlusLodgingArr;
}

function getLodgingCostsForAgent(destinations, trips) {
  let approvedTrips = returnApprovedTrips(trips);
  let approvedTripsFlightsPlusLodging = returnApprovedTripsFlightsAndLodging(
    destinations,
    approvedTrips
  );
  let amountTravelersHaveSpent = approvedTripsFlightsPlusLodging.reduce(
    (lodgingCost, flightCost) => lodgingCost + flightCost,
    0
  );
  let amountAgentEarned = amountTravelersHaveSpent * 0.1;
  return amountAgentEarned;
}

function renderTotalEarned(amountAgentEarned) {
  amountAgentEarned;
  let totalAmount = amountAgentEarned.toFixed(2);
  let totalEarnedParagraph = document.createElement("paragraph");
  totalEarnedParagraph.className = "total-spent";
  let totalEarnedText = document.createTextNode(
    `Total Amount Earned: $${totalAmount}`
  );
  totalEarnedParagraph.appendChild(totalEarnedText);
  document.querySelector("body").appendChild(totalEarnedParagraph);
}

function renderTrips(todaysTrips, destinations) {
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderDestinationImage"](todaysTrips, destinations);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripDate"](todaysTrips);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripDestination"](todaysTrips, destinations);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripStatus"](todaysTrips);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripDuration"](todaysTrips);
  renderApproveAndDenyButtons(todaysTrips, destinations);
}

function renderPendingTrips(pendingTrip, destinations) {
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderDestinationImage"](pendingTrip, destinations);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripDate"](pendingTrip);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripDestination"](pendingTrip, destinations);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripStatus"](pendingTrip);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripDuration"](pendingTrip);
  renderApproveAndDenyButtons(pendingTrip, destinations);
}

function renderAgentTrips(pendingTrips, destinations) {
  if (pendingTrips.length === undefined) {
    let todaysTrips = pendingTrips.todaysTrips;
    let i;
    for (i = 0; i < todaysTrips.length; i++) {
      renderTrips(todaysTrips[i], destinations);
    }
  } else {
    let i;
    for (i = 0; i < pendingTrips.length; i++) {
      renderPendingTrips(pendingTrips[i], destinations);
    }
  }
}

function appendApproveAndDenyButton(approveButton, denyButton) {
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["appendToSection"](approveButton);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["appendToSection"](denyButton);
}

function createApproveButton(pendingTripId) {
  let approveButton = document.createElement("button");
  approveButton.setAttribute("id", `approve-button-${pendingTripId}`);
  approveButton.setAttribute("class", "approve-button");
  approveButton.textContent = "APPROVE";
  return approveButton;
}

function createDenyButton(pendingTripId) {
  let denyButton = document.createElement("button");
  denyButton.setAttribute("id", `deny-button-${pendingTripId}`);
  denyButton.setAttribute("class", "deny-button");
  denyButton.textContent = "DELETE TRIP";
  return denyButton;
}

function setData(status, pendingTripId) {
  const data = {
    id: pendingTripId,
    status,
    suggestedActivities: [],
  };
  return data;
}

function fetchPostCall(data) {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      alert("Success:", data);
    })
    .catch((error) => {
      alert("Error:", error);
    });
}

function setButtonOnclick(pendingTrip, button, status) {
  button.onclick = function approveOrDenyTrip() {
    pendingTrip;
    let data = setData(status, pendingTrip.id);
    fetchPostCall(data);
  };
}

function fetchAndDeleteTrip(data) {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips",
    {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      alert("Success:", data);
    });
  alert((error) => {
    alert("Error:", error);
  });
}

function setButtonOnclickToDelete(pendingTrip, button) {
  button.onclick = function deleteTrip() {
    pendingTrip;
    let data = { id: pendingTrip.id };
    fetchAndDeleteTrip(data);
  };
}

function renderButtonsForTravelerPage(pendingTrip) {
  let approveButton = createApproveButton(pendingTrip.id);
  let denyButton = createDenyButton(pendingTrip.id);
  appendApproveAndDenyButton(approveButton, denyButton);
  setButtonOnclick(pendingTrip, approveButton, "approved");
  setButtonOnclickToDelete(pendingTrip, denyButton, "pending");
}

function renderButtonsForAgentDashboard(pendingTrip) {
  let approveButton = createApproveButton(pendingTrip.id);
  let denyButton = createDenyButton(pendingTrip.id);
  appendApproveAndDenyButton(approveButton, denyButton);
  setButtonOnclick(pendingTrip, approveButton, "approved");
  setButtonOnclick(pendingTrip, denyButton, "pending");
}

function renderApproveAndDenyButtons(pendingTrip, destinations) {
  destinations;
  if (document.getElementById("traveler-page")) {
    let i;
    for (i = 0; i < pendingTrip.length; i++) {
      renderButtonsForTravelerPage(pendingTrip[i]);
    }
  } else {
    renderButtonsForAgentDashboard(pendingTrip);
  }
}

function travelersNames(result) {
  let travelers = [];
  let travelersArray = result;
  let i;
  for (i = 0; i < travelersArray.travelers.length; i++) {
    travelers.push(travelersArray.travelers[i].name);
  }
  return travelers;
}

function createAndRenderTravSearchBarLabel() {
  let travSearchBarLabel = document.createElement("label");
  travSearchBarLabel.setAttribute("for", "traveler-list");
  let travSearchBarLabelText = document.createTextNode(
    "Search for a Traveler:"
  );
  travSearchBarLabel.appendChild(travSearchBarLabelText);
  document.querySelectorAll("section")[2].setAttribute("id", "agent-tools");
  document.querySelectorAll("section")[2].setAttribute("class", "container");
  document.getElementById("agent-tools").appendChild(travSearchBarLabel);
}

function setInputList() {
  let inputList = document.createElement("input");
  inputList.setAttribute("list", "traveler-list");
  inputList.setAttribute("id", "traveler");
  document.getElementById("agent-tools").appendChild(inputList);
}

function setDataList() {
  let dataList = document.createElement("datalist");
  dataList.setAttribute("id", "traveler-list");
  document.getElementById("agent-tools").appendChild(dataList);
}

function returnTravelersNames(result) {
  let travelers = travelersNames(result);
  createAndRenderTravSearchBarLabel();
  setInputList();
  setDataList();
  return travelers;
}

function renderTravelerSearchBar() {
  _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getAllTravelers"]().then(function (result) {
    let travelers = returnTravelersNames(result);
    for (let i = 0; i < travelers.length; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", `${travelers[i]}`);
      document.getElementById("traveler-list").appendChild(option);
    }
    document.getElementById("traveler").placeholder = "Enter traveler name";
  });
}

function getSingleTravelerByName(travelers) {
  let allTravelers = travelers.travelers;
  let travelerName = document.getElementById("traveler").value;
  let i;
  for (i = 0; i < allTravelers.length; i++) {
    if (travelerName === allTravelers[i].name) {
      let traveler = allTravelers[i];
      return traveler;
    }
  }
}

function getLodgingCosts(travelerDestinations, travelerTrips) {
  let lodgingCosts = _traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_2__["getLodgingCosts"](
    travelerDestinations,
    travelerTrips
  );
  return lodgingCosts;
}

function getFlightCosts(travelerDestinations, travelerTrips) {
  let flightCosts = _traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_2__["getFlightCosts"](
    travelerDestinations,
    travelerTrips
  );
  return flightCosts;
}

function getFlightsPlusLodging(traveler, travelerTrips, travelerDestinations) {
  let lodgingCosts = getLodgingCosts(travelerDestinations, travelerTrips);
  let flightCosts = getFlightCosts(travelerDestinations, travelerTrips);
  let flightsPlusLodging = _traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_2__["addFlightandLodgingCosts"](
    flightCosts,
    lodgingCosts
  );
  return flightsPlusLodging;
}

function addFee(traveler, travelerTrips, travelerDestinations, destinations) {
  let flightsPlusLodging = getFlightsPlusLodging(
    traveler,
    travelerTrips,
    travelerDestinations,
    destinations
  );
  let totalBeforeFee = _traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_2__["reduceFlightsPlusLodging"](
    flightsPlusLodging
  );
  var totalAfterAgentFee = totalBeforeFee * 1.1;
  return totalAfterAgentFee;
}

function getTotalAfterAgentFee(
  traveler,
  travelerTrips,
  travelerDestinations,
  destinations
) {
  let totalAfterAgentFee = addFee(
    traveler,
    travelerTrips,
    travelerDestinations,
    destinations
  );
  return totalAfterAgentFee;
}

function prepareDashboardData(result, trips, destinations) {
  let travelers = result;
  let traveler = getSingleTravelerByName(travelers);
  let travelerTrips = getTravelersTrips(trips, traveler);
  let travelerDestinations = getTravelersDestinations(
    travelerTrips,
    destinations
  );
  let totalAfterAgentFee = getTotalAfterAgentFee(
    traveler,
    travelerTrips,
    travelerDestinations,
    destinations
  );
  return {
    traveler,
    travelerTrips,
    travelerDestinations,
    totalAfterAgentFee,
    destinations,
  };
}

function hideSearchFormRenderHeaderAndTotalSpent(travelerInfo) {
  document.getElementById("agent-tools").style.display = "none";
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripsHeader"](`${travelerInfo.traveler.name}'s`);
  let travelerPage = document.querySelectorAll("section")[3];
  travelerPage.setAttribute("id", "traveler-page");
  _traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_2__["renderTotalSpent"](travelerInfo);
}

function getPendingAndApprovedTrips(travelerInfo) {
  let pendingTrips = [];
  let approvedTrips = [];
  for (let i = 0; i < travelerInfo.travelerTrips.length; i++) {
    if (travelerInfo.travelerTrips[i].status === "pending") {
      pendingTrips.push(travelerInfo.travelerTrips[i]);
    } else if (travelerInfo.travelerTrips[i].status === "approved") {
      approvedTrips.push(travelerInfo.travelerTrips[i]);
    }
  }
  return { pendingTrips, approvedTrips };
}

function renderTravelerPageForAgent(travelerInfo) {
  hideSearchFormRenderHeaderAndTotalSpent(travelerInfo);
  let trips = getPendingAndApprovedTrips(travelerInfo);
  let pendingTrips = trips.pendingTrips;
  let approvedTrips = trips.approvedTrips;
  let destinations = travelerInfo.destinations;
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTrips"](pendingTrips, destinations);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTrips"](approvedTrips, destinations);
  renderApproveAndDenyButtons(pendingTrips, destinations);
}

function createShowTravelerButton() {
  document
    .getElementsByClassName("container")[2]
    .setAttribute("id", "agent-tools");
  let showTravelerButton = document.createElement("button");
  showTravelerButton.setAttribute("id", "show-traveler-button");
  showTravelerButton.textContent = "SHOW TRAVELER";
  document.getElementById("agent-tools").appendChild(showTravelerButton);
  return showTravelerButton;
}

function getTravelersTrips(trips, traveler) {
  let i;
  let travelerTrips = [];
  for (i = 0; i < trips.length; i++) {
    if (traveler.id === trips[i].userID) {
      travelerTrips.push(trips[i]);
    }
  }
  return travelerTrips;
}

function loopThroughDestinations(
  destinations,
  travelerTrip,
  destination,
  travelerDestinationsArr
) {
  let destinationIndex;
  for (
    destinationIndex = 0;
    destinationIndex < destinations.length;
    destinationIndex++
  ) {
    if (travelerTrip.destinationID === destinations[destinationIndex].id) {
      travelerDestinationsArr.push(destination);
    }
  }
  let travelerDestinations = travelerDestinationsArr;
  return travelerDestinations;
}

function getTravelersDestinations(travelerTrips, destinations) {
  let travelerDestinationsArr = [];
  for (let i = 0; i < travelerTrips.length; i++) {
    let travelerDestinations = loopThroughDestinations(
      destinations,
      travelerTrips[i],
      destinations[i],
      travelerDestinationsArr
    );
    return travelerDestinations;
  }
}

function setShowTravelerButtonOnClick(showTravelerButton, trips, destinations) {
  showTravelerButton.onclick = function showTravelerInformation() {
    trips;
    destinations;
    _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getAllTravelers"]().then(function (result) {
      let dashboardData = prepareDashboardData(result, trips, destinations);
      renderTravelerPageForAgent(dashboardData);
    });
  };
}

function renderShowTravelerButton(trips, destinations) {
  let showTravelerButton = createShowTravelerButton();
  setShowTravelerButtonOnClick(showTravelerButton, trips, destinations);
}




/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/dashboard_helper.js":
/*!*********************************!*\
  !*** ./src/dashboard_helper.js ***!
  \*********************************/
/*! exports provided: renderTripsHeader, getPendingTrips, getTodaysTrips, returnCurrentDate, appendToSection, renderTripDate, renderTripDestination, renderTripStatus, renderTripDuration, renderDestinationImage, renderTrips, filterPastAndUpcomingTrips, returnTravDate, daysBetween, formatEndDate, formatStartDate, renderTripCost, getValuesFromInputs, renderDestinationSearchBar, renderDateSelectInputs, appendToRequestForm, renderNumberOfTravelersInput, createOnClickFunctionAndRenderTrip, renderLogOutButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTripsHeader", function() { return renderTripsHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingTrips", function() { return getPendingTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodaysTrips", function() { return getTodaysTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnCurrentDate", function() { return returnCurrentDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendToSection", function() { return appendToSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTripDate", function() { return renderTripDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTripDestination", function() { return renderTripDestination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTripStatus", function() { return renderTripStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTripDuration", function() { return renderTripDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDestinationImage", function() { return renderDestinationImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTrips", function() { return renderTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterPastAndUpcomingTrips", function() { return filterPastAndUpcomingTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnTravDate", function() { return returnTravDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysBetween", function() { return daysBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatEndDate", function() { return formatEndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatStartDate", function() { return formatStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTripCost", function() { return renderTripCost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValuesFromInputs", function() { return getValuesFromInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDestinationSearchBar", function() { return renderDestinationSearchBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDateSelectInputs", function() { return renderDateSelectInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendToRequestForm", function() { return appendToRequestForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNumberOfTravelersInput", function() { return renderNumberOfTravelersInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOnClickFunctionAndRenderTrip", function() { return createOnClickFunctionAndRenderTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderLogOutButton", function() { return renderLogOutButton; });
/* harmony import */ var _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel_tracker_service */ "./src/travel_tracker_service.js");


function renderTripsHeader(title) {
  let upcomingTripsSection = document.createElement("section");
  upcomingTripsSection.className = "container";
  let upcomingTripsHeader = document.createElement("h3");
  let upcomingTripsHeaderText = document.createTextNode(`${title} Trips:`);
  appendHeader(
    upcomingTripsSection,
    upcomingTripsHeader,
    upcomingTripsHeaderText
  );
}

function appendHeader(
  upcomingTripsSection,
  upcomingTripsHeader,
  upcomingTripsHeaderText
) {
  upcomingTripsHeader.appendChild(upcomingTripsHeaderText);
  upcomingTripsSection.appendChild(upcomingTripsHeader);
  document.getElementsByTagName("BODY")[0].appendChild(upcomingTripsSection);
}

function getPendingTrips(trips) {
  let i;
  let pendingTrips = [];
  for (i = 0; i < trips.length; i++) {
    if (trips[i].status === "pending") {
      pendingTrips.push(trips[i]);
    }
  }
  return pendingTrips;
}

function getTodaysTrips(trips) {
  let today = returnCurrentDate();
  let i;
  let todaysTrips = [];
  for (i = 0; i < trips.length; i++) {
    if (trips[i].date === today) {
      todaysTrips.push(trips[i]);
    }
  }
  return { todaysTrips };
}

function returnCurrentDate() {
  var myDate = new Date();
  var myDateString;
  myDateString =
    myDate.getFullYear() +
    "/" +
    ("0" + (myDate.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + myDate.getDate()).slice(-2);
  let today = myDateString;
  return today;
}

function isTravelerPage() {
  if (document.getElementById("traveler-page")) {
    return true;
  }
}

function appendToTravelerPage(paragraph) {
  document.getElementById("traveler-page").appendChild(paragraph);
}

function isRequestedOrUpcomingTripsSection() {
  if (document.getElementsByTagName("SECTION").length === 1) {
    return true;
  }
}

function appendToRequestedOrUpcomingTripsSection(paragraph) {
  document.getElementsByTagName("SECTION")[0].appendChild(paragraph);
}

function noSectionsHaveLoaded() {
  if (document.getElementsByTagName("SECTION").length < 1) {
    return true;
  }
}

function appendToBody(paragraph) {
  document.querySelector("body").appendChild(paragraph);
}

function isTodaysTripsSection() {
  if (document.querySelectorAll("section")[1].innerText === "Today's Trips:") {
    return true;
  }
}

function appendToTodaysTripSection(paragraph) {
  let todaysTripsSection = document.querySelectorAll("section")[1];
  todaysTripsSection.setAttribute("id", "todays-trips");
  document.getElementById("todays-trips").appendChild(paragraph);
}

function isPastTripsSection() {
  if (
    document.querySelectorAll("section")[1].innerText.includes("Past Trips")
  ) {
    return true;
  }
}

function appendToPastTripsSection(paragraph) {
  document.querySelectorAll("section")[1].appendChild(paragraph);
}

function appendToSection(paragraph) {
  if (isTravelerPage()) {
    appendToTravelerPage(paragraph);
  } else if (isRequestedOrUpcomingTripsSection()) {
    appendToRequestedOrUpcomingTripsSection(paragraph);
  } else if (noSectionsHaveLoaded()) {
    appendToBody(paragraph);
  } else if (isTodaysTripsSection()) {
    appendToTodaysTripSection(paragraph);
  } else if (isPastTripsSection()) {
    appendToPastTripsSection(paragraph);
  }
}

function renderTripDate(trip) {
  let tripDate = trip.date;
  let tripDateParagraph = document.createElement("paragraph");
  tripDateParagraph.className = "trip-date";
  let tripDateText = document.createTextNode(`Trip Date: ${tripDate} `);
  tripDateParagraph.appendChild(tripDateText);
  appendToSection(tripDateParagraph);
}

function appendDestination(tripDestinationParagraph, tripDestinationText) {
  tripDestinationParagraph.appendChild(tripDestinationText);
  appendToSection(tripDestinationParagraph);
}

function appendTripDestination(tripDestinationParagraph, tripDestinationText) {
  if (document.getElementById("todays-trips")) {
    tripDestinationParagraph.appendChild(tripDestinationText);
    document
      .getElementById("todays-trips")
      .appendChild(tripDestinationParagraph);
  }
  appendDestination(tripDestinationParagraph, tripDestinationText);
}

function createAndAppendTripDestination(tripDestination) {
  let tripDestinationParagraph = document.createElement("paragraph");
  tripDestinationParagraph.className = "trip-destination";
  let tripDestinationText = document.createTextNode(
    `Trip Destination: ${tripDestination}`
  );
  appendTripDestination(tripDestinationParagraph, tripDestinationText);
}

function renderTripDestination(trip, destinations) {
  let i;
  for (i = 0; i < destinations.length; i++) {
    if (trip.destinationID === destinations[i].id) {
      let tripDestination = destinations[i].destination;
      createAndAppendTripDestination(tripDestination);
    }
  }
}

function append(tripStatusParagraph) {
  if (
    document.querySelectorAll("section").length === 2 &&
    document.querySelectorAll("section")[1].innerText.includes("Today's Trips")
  ) {
    let todaysTripsSection = document.querySelectorAll("section")[1];
    todaysTripsSection.setAttribute("id", "todays-trips");
    document.getElementById("todays-trips").appendChild(tripStatusParagraph);
  } else {
    appendToSection(tripStatusParagraph);
  }
}

function renderTripStatus(trip) {
  let tripStatus = trip.status;
  let tripStatusParagraph = document.createElement("paragraph");
  tripStatusParagraph.className = "trip-status";
  let tripStatusText = document.createTextNode(`Trip Status: ${tripStatus}`);
  tripStatusParagraph.appendChild(tripStatusText);
  append(tripStatusParagraph);
}

function renderTripDuration(trip) {
  let tripDuration = trip.duration;
  let tripDurationParagraph = document.createElement("paragraph");
  tripDurationParagraph.className = "trip-duration";
  let tripDurationText = document.createTextNode(
    `Trip Duration: ${tripDuration} days`
  );
  tripDurationParagraph.appendChild(tripDurationText);
  append(tripDurationParagraph);
}

function renderDestinationImage(trip, destinations) {
  let i;
  for (i = 0; i < destinations.length; i++) {
    if (trip.destinationID === destinations[i].id) {
      let destinationImage = destinations[i].image;
      var img = document.createElement("img");
      img.className = "destination-image";
      img.src = `${destinationImage}`;
      appendToSection(img);
    }
  }
}

function renderTrips(trips, destinations) {
  let i;
  for (i = 0; i < trips.length; i++) {
    renderDestinationImage(trips[i], destinations);
    renderTripDate(trips[i]);
    renderTripDestination(trips[i], destinations);
    renderTripStatus(trips[i]);
    renderTripDuration(trips[i]);
  }
}

function returnTravDate(smallDate) {
  let travDate =
    smallDate.getFullYear() +
    "/" +
    ("0" + (smallDate.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + smallDate.getDate()).slice(-2);
  return travDate;
}

function filterPastAndUpcomingTrips(travelerTrips) {
  let upcomingTripsArr = [];
  let pastTripsArr = [];
  let today = returnCurrentDate();
  for (let i = 0; i < travelerTrips.length; i++) {
    let smallDate = new Date(travelerTrips[i].date);
    let travDate = returnTravDate(smallDate);
    if (today < travDate) {
      upcomingTripsArr.push(travelerTrips[i]);
    } else {
      pastTripsArr.push(travelerTrips[i]);
    }
  }
  return { pastTripsArr, upcomingTripsArr };
}

function getStart(formattedEndDate) {
  let start = Date.UTC(
    formattedEndDate.getFullYear(),
    formattedEndDate.getMonth(),
    formattedEndDate.getDate()
  );
  return start;
}

function getEnd(formattedStartDate) {
  let end = Date.UTC(
    formattedStartDate.getFullYear(),
    formattedStartDate.getMonth(),
    formattedStartDate.getDate()
  );
  return end;
}

function formatStartDate(tripRequestStartDate) {
  let formattedStartDate = new Date(tripRequestStartDate);
  formattedStartDate = new Date(
    formattedStartDate.getTime() +
    formattedStartDate.getTimezoneOffset() * 60000
  );
  return formattedStartDate;
}

function formatEndDate(tripRequestEndDate) {
  let formattedEndDate = new Date(tripRequestEndDate);
  formattedEndDate = new Date(
    formattedEndDate.getTime() + formattedEndDate.getTimezoneOffset() * 60000
  );
  return formattedEndDate;
}

function daysBetween(startDate, endDate) {
  let formattedStartDate = formatStartDate(startDate);
  let formattedEndDate = formatEndDate(endDate);
  const oneDay = 1000 * 60 * 60 * 24;
  let start = getStart(formattedEndDate);
  let end = getEnd(formattedStartDate);
  let daysBetween = (start - end) / oneDay;
  return daysBetween;
}

function renderTripCost(destination, tripRequestData, allTrips) {
  let costs = calculateTripRequestCosts(destination, tripRequestData, allTrips);
  let totalCostNode = document.createTextNode(
    `Total Estimated Trip Cost: $${costs.totalTripCost.toFixed(2)}`
  );
  document.getElementById("requested-trips").appendChild(totalCostNode);
}

function getValuesFromInputs() {
  let tripRequestDestination = document.getElementById("destination").value;
  let tripRequestStartDate = document.getElementById("start").value;
  let tripRequestEndDate = document.getElementById("end").value;
  let numberOfTravelers = document.getElementById("number-of-travs").value;
  let values = {
    tripRequestDestination,
    tripRequestStartDate,
    tripRequestEndDate,
    numberOfTravelers,
  };
  return values;
}

function calculateAndReturnCosts(
  numberOfTravelers,
  tripRequestStartDate,
  tripRequestEndDate,
  estimatedFlightCostPerPerson,
  estimatedLodgingCostPerDay
) {
  let flightCosts = numberOfTravelers * estimatedFlightCostPerPerson;
  let lodgingCostsPerDay = numberOfTravelers * estimatedLodgingCostPerDay;
  let totalLodgingCosts =
    lodgingCostsPerDay * daysBetween(tripRequestStartDate, tripRequestEndDate);
  let costBeforeAgentFee = flightCosts + totalLodgingCosts;
  let agentFee = costBeforeAgentFee * 0.1;
  let totalTripCost = costBeforeAgentFee + agentFee;
  let costs = {
    flightCosts,
    lodgingCostsPerDay,
    totalLodgingCosts,
    costBeforeAgentFee,
    agentFee,
    totalTripCost,
  };
  return costs;
}

function calculateTripRequestCosts(destination) {
  let values = getValuesFromInputs();
  let numberOfTravelers = values.numberOfTravelers;
  let tripRequestStartDate = values.tripRequestStartDate;
  let tripRequestEndDate = values.tripRequestEndDate;
  let estimatedFlightCostPerPerson = destination.estimatedFlightCostPerPerson;
  let estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay;
  let costs = calculateAndReturnCosts(
    numberOfTravelers,
    tripRequestStartDate,
    tripRequestEndDate,
    estimatedFlightCostPerPerson,
    estimatedLodgingCostPerDay
  );
  return costs;
}

function appendToRequestForm(element) {
  document.getElementById("request-form").appendChild(element);
}

function createAndRenderLabel(attribute, text) {
  let label = document.createElement("label");
  label.setAttribute("for", attribute);
  let labelText = document.createTextNode(text);
  label.appendChild(labelText);
  setIdAndClassofRequestForm();
  appendToRequestForm(label);
}

function createAndRenderStartDateInput(today) {
  let startDateInput = document.createElement("input");
  startDateInput.setAttribute("type", "date");
  startDateInput.setAttribute("id", "start");
  startDateInput.setAttribute("name", "trip-start");
  startDateInput.setAttribute("value", `${today}`);
  startDateInput.setAttribute("min", `${today}`);
  startDateInput.setAttribute("max", "2021-12-31");
  appendToRequestForm(startDateInput);
}

function createAndRenderTripEndLabel() {
  let tripEndLabel = document.createElement("label");
  tripEndLabel.setAttribute("for", "trip-end");
  appendToRequestForm(tripEndLabel);
}

function createAndRenderEndDateInput(today) {
  let endDateInput = document.createElement("input");
  endDateInput.setAttribute("type", "date");
  endDateInput.setAttribute("id", "end");
  endDateInput.setAttribute("name", "trip-end");
  endDateInput.setAttribute("value", `${today}`);
  endDateInput.setAttribute("min", `${today}`);
  endDateInput.setAttribute("max", "2023-12-31");
  appendToRequestForm(endDateInput);
}

function renderDateSelectInputs() {
  createAndRenderLabel("trip-duration", "Please select a start and end date:");
  let today = new Date().toLocaleDateString();
  createAndRenderStartDateInput(today);
  createAndRenderTripEndLabel();
  createAndRenderEndDateInput(today);
}

function createAndRenderInputList(listAttribute, id, placeHolder) {
  let inputList = document.createElement("input");
  inputList.setAttribute("list", listAttribute);
  inputList.setAttribute("id", id);
  inputList.setAttribute("placeholder", placeHolder);
  appendToRequestForm(inputList);
}

function createAndRenderDataList(id) {
  let dataList = document.createElement("datalist");
  dataList.setAttribute("id", id);
  appendToRequestForm(dataList);
}

function createOptionAndRenderToNumberOfTravelersInput() {
  for (let i = 1; i <= 20; i++) {
    let number = document.createElement("option");
    number.setAttribute("value", `${i}`);
    document.getElementById("number-of-travelers").appendChild(number);
  }
}

function renderNumberOfTravelersInput() {
  createAndRenderLabel("number-of-travelers", "Number of Travelers:");
  createAndRenderInputList(
    "number-of-travelers",
    "number-of-travs",
    "Select number of travelers"
  );
  createAndRenderDataList("number-of-travelers");
  createOptionAndRenderToNumberOfTravelersInput();
}

function createOptionAndRenderToDataList(length, destinations, id) {
  for (let i = 0; i < length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", `${destinations[i].destination}`);
    document.getElementById(id).appendChild(option);
  }
}

function createAndRenderLabelAndInputList() {
  createAndRenderLabel("destination-choice", "Search for a Destination:");
  createAndRenderInputList(
    "destination-choice",
    "destination",
    "Search for a destination"
  );
}

function renderFullDestinationList(destinations) {
  createAndRenderDataList("destination-choice");
  createOptionAndRenderToDataList(
    destinations.length,
    destinations,
    "destination-choice"
  );
}

function renderDestinationSearchBar(allTrips, destinationsArr) {
  let destinations = destinationsArr;
  createAndRenderLabelAndInputList();
  renderFullDestinationList(destinations);
}

function createOnClickFunctionAndRenderTrip(destinationsArr, allTrips) {
  let tripRequestButton = document.getElementById("trip-request-button");
  tripRequestButton.onclick = function calculateTripRequest() {
    let tripRequestData = prepareTripRequestData(destinationsArr);
    renderTripRequest(tripRequestData, destinationsArr, allTrips);
  };
}

function setIdAndClassofRequestForm() {
  document.querySelectorAll("section")[2].setAttribute("id", "request-form");
  document.querySelectorAll("section")[2].setAttribute("class", "container");
}

function prepareTripRequestData(destinations) {
  let values = getValuesFromInputs();
  let tripRequestDestination = values.tripRequestDestination;
  let numberOfTravelers = values.numberOfTravelers;
  let tripRequestStartDate = values.tripRequestStartDate;
  let tripRequestEndDate = values.tripRequestEndDate;
  let tripRequestData = returnTripRequestData(
    destinations,
    tripRequestDestination,
    numberOfTravelers,
    tripRequestStartDate,
    tripRequestEndDate
  );
  return tripRequestData;
}

function renderTripRequest(tripRequestData, destinationsArr, allTrips) {
  let values = setValuesForTripRequest();
  for (let i = 0; i < destinationsArr.length; i++) {
    if (values.tripRequestDestination === destinationsArr[i].destination) {
      hideRequestFormAndShowYourTripsHeader();
      renderTripRequestData(
        destinationsArr[i],
        tripRequestData,
        values.tripRequestStartDate,
        values.tripRequestEndDate,
        allTrips
      );
      createAndRenderConfirmTripButton(
        destinationsArr[i],
        tripRequestData,
        allTrips
      );
    }
  }
}

function returnTripRequestData(
  destinations,
  tripRequestDestination,
  numberOfTravelers,
  tripRequestStartDate,
  tripRequestEndDate
) {
  for (let i = 0; i < destinations.length; i++) {
    if (tripRequestDestination === destinations[i].destination) {
      let destinationIdentifier = destinations[i].id;
      let tripRequestData = {
        destinationIdentifier,
        tripRequestDestination,
        numberOfTravelers,
        tripRequestStartDate,
        tripRequestEndDate,
      };
      return tripRequestData;
    }
  }
}

function setValuesForTripRequest() {
  let valuesBefore = getValuesFromInputs();
  let tripRequestDestination = valuesBefore.tripRequestDestination;
  let tripRequestStartDate = valuesBefore.tripRequestStartDate;
  let tripRequestEndDate = valuesBefore.tripRequestEndDate;
  let values = {
    tripRequestDestination,
    tripRequestStartDate,
    tripRequestEndDate,
  };
  return values;
}

function renderconfirmTripButton() {
  let confirmTripRequestButton = document.createElement("button");
  confirmTripRequestButton.setAttribute("id", "confirm-trip-request-button");
  confirmTripRequestButton.textContent = "CONFIRM TRIP";
  document
    .getElementById("requested-trips")
    .appendChild(confirmTripRequestButton);
}

function createAndRenderParagraphAndNode(startOrEnd, date) {
  let dateParagraph = document.createElement("paragraph");
  let dateNode = document.createTextNode(
    `Trip ${startOrEnd} Date: ${date.toDateString()}`
  );
  dateParagraph.appendChild(dateNode);
  document.getElementById("requested-trips").appendChild(dateParagraph);
}

function createDateElements(formattedStartDate, formattedEndDate) {
  createAndRenderParagraphAndNode("start", formattedStartDate);
  createAndRenderParagraphAndNode("end", formattedEndDate);
}

function renderTripRequestDestinationImage(destination) {
  let destinationImage = destination.image;
  var img = document.createElement("img");
  img.className = "destination-image";
  img.src = `${destinationImage}`;
  document.getElementById("requested-trips").appendChild(img);
}

function renderTripRequestData(
  destination,
  tripRequestData,
  tripRequestStartDate,
  tripRequestEndDate,
  allTrips
) {
  renderTripRequestDestinationImage(destination);
  renderDestinationName(destination);
  renderNumberOfTravelers(tripRequestData);
  renderStartandEndDate(tripRequestStartDate, tripRequestEndDate);
  renderTripCost(destination, tripRequestData, allTrips);
  renderconfirmTripButton();
}

function renderStartandEndDate(tripRequestStartDate, tripRequestEndDate) {
  let formattedStartDate = formatStartDate(tripRequestStartDate);
  let formattedEndDate = formatEndDate(tripRequestEndDate);
  createDateElements(formattedStartDate, formattedEndDate);
}

function hideRequestFormAndShowYourTripsHeader() {
  document.getElementById("request-form").style.display = "none";
  renderTripsHeader("Your Requested");
  document.querySelectorAll("section")[3].setAttribute("id", "requested-trips");
}

function createAndRenderConfirmTripButton(
  destination,
  tripRequestData,
  allTrips
) {
  let confirmTripRequestButton = document.getElementById(
    "confirm-trip-request-button"
  );
  confirmTripRequestButton.onclick = function confirmTripRequest() {
    confirmAndPostTrip(destination, tripRequestData, allTrips);
  };
}

function renderDestinationName(destination) {
  let destinationName = document.createTextNode(
    `Trip Destination: ${destination.destination}`
  );
  let destinationNameParagraph = document.createElement("paragraph");
  destinationNameParagraph.appendChild(destinationName);
  document
    .getElementById("requested-trips")
    .appendChild(destinationNameParagraph);
}

function renderNumberOfTravelers() {
  let values = getValuesFromInputs();
  let numOfTravelersNode = document.createTextNode(
    `Number of Travelers: ${values.numberOfTravelers}`
  );
  let numOfTravelersParagraph = document.createElement("paragraph");
  numOfTravelersParagraph.appendChild(numOfTravelersNode);
  document
    .getElementById("requested-trips")
    .appendChild(numOfTravelersParagraph);
}

function dataToJson(
  tripRequestStartDate,
  tripRequestEndDate,
  userId,
  tripRequestId,
  tripRequestData
) {
  const data = JSON.stringify({
    id: parseFloat(tripRequestId),
    userID: userId,
    destinationID: tripRequestData.destinationIdentifier,
    travelers: parseFloat(tripRequestData.numberOfTravelers),
    date: tripRequestStartDate.replace(/-/g, "/"),
    duration: daysBetween(tripRequestStartDate, tripRequestEndDate),
    status: "pending",
    suggestedActivities: [],
  });
  return data;
}

function valuesToJson(traveler, tripRequestData, allTrips) {
  let values = getValuesFromInputs();
  let tripRequestStartDate = values.tripRequestStartDate;
  let tripRequestEndDate = values.tripRequestEndDate;
  let userId = traveler.traveler.id;
  let tripRequestId = allTrips.length + 1;
  let data = dataToJson(
    tripRequestStartDate,
    tripRequestEndDate,
    userId,
    tripRequestId,
    tripRequestData
  );
  return data;
}

function fetchAndLogResponse(data) {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips",
    {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      alert("Success!", data);
    })
    .catch((error) => {
      alert("Error!", error);
    });
}

function clearSearchFormInputs() {
  document.getElementById("destination").value = "";
  document.getElementById("number-of-travs").value = "";
  document.getElementById("start").value;
  document.getElementById("end").value;
}

function removeConfirmedTripAndClearSearchForm() {
  document.getElementById("requested-trips").style.display = "none";
  document.getElementById("request-form").style.display = "";
  clearSearchFormInputs();
}

function confirmAndPostTrip(destination, tripRequestData, allTrips) {
  _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getSingleTraveler"](destination, tripRequestData, allTrips)
    .then(function (result) {
      let traveler = result;
      let data = valuesToJson(traveler, tripRequestData, allTrips);
      fetchAndLogResponse(data);
    });
  removeConfirmedTripAndClearSearchForm();
}

function setLogOutButtonAttribute(logOutButton) {
  logOutButton.id = "log-out-button";
  logOutButton.className = "button";
  logOutButton.innerHTML = "LOGOUT";
}

function appendLogOutButtonAndSetOnClick(logOutButton) {
  document.getElementById("login-form").append(logOutButton);
  document.getElementById("log-out-button").onclick = function () {
    document.getElementById(
      "log-out-button"
    ).onclick = window.location.reload();
  };
}

function renderLogOutButton() {
  let logOutButton = document.createElement("button");
  setLogOutButtonAttribute(logOutButton);
  appendLogOutButtonAndSetOnClick(logOutButton);
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _travel_tracker_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel_tracker_service.js */ "./src/travel_tracker_service.js");
/* harmony import */ var _traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traveler_dashboard_helper */ "./src/traveler_dashboard_helper.js");
/* harmony import */ var _agent_dashboard_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agent_dashboard_helper */ "./src/agent_dashboard_helper.js");
/* harmony import */ var _login_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login_helper */ "./src/login_helper.js");
/* harmony import */ var _styling_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styling_helper */ "./src/styling_helper.js");






document.querySelector("body").onload = _styling_helper__WEBPACK_IMPORTED_MODULE_5__["styleHomePage"]();

let button = document.getElementById("submit");

button.onclick = function processLogin() {
  document.getElementById("home-page").style.display = "none";
  let usernameInput = document.getElementById("input-username").value;
  let passwordInput = document.getElementById("input-password").value;
  if (_login_helper__WEBPACK_IMPORTED_MODULE_4__["isValidPassword"](passwordInput)) {
    _travel_tracker_service_js__WEBPACK_IMPORTED_MODULE_1__["isValidTraveler"](usernameInput)
      .then(function (result) {
        if (result === true) {
          var travelerId = usernameInput.slice(8);
          _travel_tracker_service_js__WEBPACK_IMPORTED_MODULE_1__["getSingleTraveler"](travelerId)
            .then(function (result) {
              let traveler = result.traveler;
              _travel_tracker_service_js__WEBPACK_IMPORTED_MODULE_1__["getTravelerTrips"](traveler)
                .then(function (result) {
                  let travelerTrips = result.travelerTrips;
                  _travel_tracker_service_js__WEBPACK_IMPORTED_MODULE_1__["getTravelerDestinations"](travelerTrips, traveler)
                    .then(function (result) {
                      var destinations = result.travelerDestinations;
                      var trips = result.travelerTrips;
                      let travelerDashboardData =
                        _traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_2__["prepareTravelerDashboardData"](
                          traveler,
                          destinations,
                          trips
                        );
                      _traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_2__["renderTravelerDashboard"](
                        travelerDashboardData
                      );
                    });
                });
            });
        } else if (_login_helper__WEBPACK_IMPORTED_MODULE_4__["isValidAgency"](usernameInput)) {
          _agent_dashboard_helper__WEBPACK_IMPORTED_MODULE_3__["renderSuccessfulAgencyLogin"]();
        } else {
          _login_helper__WEBPACK_IMPORTED_MODULE_4__["loginError"]();
        }
      });
  } else {
    _login_helper__WEBPACK_IMPORTED_MODULE_4__["loginError"]();
  }
};


/***/ }),

/***/ "./src/login_helper.js":
/*!*****************************!*\
  !*** ./src/login_helper.js ***!
  \*****************************/
/*! exports provided: isValidPassword, isValidAgency, clearLoginForm, loginError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPassword", function() { return isValidPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidAgency", function() { return isValidAgency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLoginForm", function() { return clearLoginForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginError", function() { return loginError; });
function isValidPassword(passwordInput) {
  var correctPw = "travel2020";
  if (passwordInput === correctPw) {
    return true;
  }
}

function isValidAgency(usernameInput) {
  let agentUn = "agency";
  var downcasedUsernameInput = usernameInput.toLowerCase();
  if (downcasedUsernameInput === agentUn) {
    return true;
  }
}

function clearLoginForm() {
  document.getElementById("input-username").value = "";
  document.getElementById("input-password").value = "";
}

function loginError() {
  alert("Login Unsuccessful!");
  clearLoginForm();
}




/***/ }),

/***/ "./src/styling_helper.js":
/*!*******************************!*\
  !*** ./src/styling_helper.js ***!
  \*******************************/
/*! exports provided: styleHomePage, travelerMediaQuery, travelerMediaQuery768, agentMediaQuery, agentMediaQuery768 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleHomePage", function() { return styleHomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelerMediaQuery", function() { return travelerMediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelerMediaQuery768", function() { return travelerMediaQuery768; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agentMediaQuery", function() { return agentMediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agentMediaQuery768", function() { return agentMediaQuery768; });
/* harmony import */ var _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel_tracker_service */ "./src/travel_tracker_service.js");


function setBackgroundImageAndH1Opacity(destination) {
  document.getElementById(
    "h1-div"
  ).style.backgroundImage = `url(${destination.image})`;
  document.getElementById("home-page-h1").style.opacity = "1.0";
  document.getElementById("home-page-h1").style.backgroundColor =
    "rgba(0, 0, 0, 0.2)";
  document.getElementById("home-page-h1").style.border = "1px solid #fff";
}

function setRandomBackgroundImage(destinations) {
  let destination =
    destinations[Math.floor(Math.random() * destinations.length)];
  setBackgroundImageAndH1Opacity(destination);
  let randomDestinationImage = destination.image;
  return randomDestinationImage;
}

function createDivsAndSetIdsClass(result) {
  let destinations = result;
  let homePage = document.createElement("div");
  let h1Div = document.createElement("div");
  h1Div.id = "h1-div";
  homePage.className = "home-page";
  homePage.id = "home-page";
  return { destinations, h1Div, homePage };
}

function appendHomePageData(
  h1Text,
  homePageH1,
  destH1DivHomePage,
  destinations
) {
  homePageH1.appendChild(h1Text);
  destH1DivHomePage.h1Div.appendChild(homePageH1);
  document.querySelector("body").appendChild(destH1DivHomePage.h1Div);
  document.querySelector("body").appendChild(destH1DivHomePage.homePage);
  setRandomBackgroundImage(destinations);
}

function createHeaderAndSetBackgroundImg(result) {
  let destH1DivHomePage = createDivsAndSetIdsClass(result);
  let destinations = destH1DivHomePage.destinations;
  let homePageH1 = document.createElement("h1");
  homePageH1.id = "home-page-h1";
  let h1Text = document.createTextNode("Where would you like to go?");
  appendHomePageData(h1Text, homePageH1, destH1DivHomePage, destinations);
  return destinations;
}

function renderDestinationImages(destinations) {
  let imageAndNameDiv = document.createElement("div");
  (imageAndNameDiv.onclick = "href"), "alert(HEY)";
  imageAndNameDiv.className = "image-and-name-div";
  let destination =
    destinations[Math.floor(Math.random() * destinations.length)];
  var img = document.createElement("img");
  img.className = "home-destination-image";
  img.src = `${destination.image}`;
  return { destination, imageAndNameDiv, img };
}

function appendImageAndName(destination, destinationName, paragraph) {
  let destinationNode = document.createTextNode(`${destinationName}`);
  paragraph.appendChild(destinationNode);
  destination.imageAndNameDiv.appendChild(destination.img);
  destination.imageAndNameDiv.appendChild(paragraph);
  document.getElementById("home-page").appendChild(destination.imageAndNameDiv);
}

function populateDestinationsAndNames(destinations) {
  for (let i = 0; i < destinations.length - 44; i++) {
    let destination = renderDestinationImages(destinations);
    let destinationName = destination.destination.destination;
    let paragraph = document.createElement("paragraph");
    paragraph.className = "home-destination-name";
    appendImageAndName(destination, destinationName, paragraph);
  }
}

function styleHomePage() {
  _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getAllDestinations"]().then(function (result) {
    let destinations = createHeaderAndSetBackgroundImg(result);
    populateDestinationsAndNames(destinations);
  });
}

function styleTravelerPage() {
  document.getElementById("header-section").style.display = "none";
  document.getElementById("home-page-h1").style.padding = "2%";
  document.getElementById("home-page-h1").style.display = "flex";
  document.getElementById("home-page-h1").style.borderRadius = "0 0 20px 20px";
  document.getElementById("home-page-h1").style.marginTop = "0";
  document.getElementById("h1-div").style.padding = "20%";
  document.getElementById("h1-div").style.marginTop = "-5%";
  placeLogOutButton();
  styleLogOutButton();
  document.getElementById("h1-div").style.gridTemplateRows = "1fr 1fr";
  document.getElementById("home-page-h1").style.gridRow = "2";
}

function travelerMediaQuery() {
  function myFunction(x) {
    if (x.matches) {
      styleTravelerPage();
    } else {
      return;
    }
  }
  var x = window.matchMedia("(max-width: 4255px)");
  myFunction(x);
  x.addListener(myFunction);
}

function placeLogOutButton() {
  let logOutButton = document.getElementById("log-out-button");
  document.getElementById("h1-div").appendChild(logOutButton);
}

function setH1Style() {
  document.getElementById("h1-div").style.marginTop = "0";
  document.getElementById("h1-div").style.padding = "15%";
  document.getElementById("home-page-h1").style.padding = "2%";
  document.getElementById("home-page-h1").style.borderRadius = "0 0 20px 20px";
}

function setLogInFormStyle() {
  document.getElementById("log-out-button").style.padding = "1%";
  document.getElementById("log-out-button").style.marginTop = "25px";
  document.getElementById("log-out-button").style.marginLeft = "5px";
  document.getElementById("login-form").style.marginRight = "5%";
}

function styleTravelerPageFor768() {
  setH1Style();
  setLogInFormStyle();
}

function travelerMediaQuery768() {
  function myFunction(y) {
    if (y.matches) {
      styleTravelerPageFor768();
    } else {
      return;
    }
  }
  var y = window.matchMedia("(max-width: 768px)");
  myFunction(y);
  y.addListener(myFunction);
}

function styleLogOutButton() {
  let logOutButton = document.getElementById("log-out-button");
  logOutButton.style.height = "fit-content";
  document.getElementById("h1-div").style.gridTemplateRows = "1fr";
}

function styleAgentHeader() {
  document.getElementById("header-section").style.display = "none";
  styleLogOutButton();
  document.getElementById("h1-div").style.padding = "15%";
  document.getElementById("agent-header").style.padding = "2%";
  document.getElementById("agent-header").style.display = "flex";
  document.getElementById("agent-header").style.borderRadius = "0 0 20px 20px";
}

function styleAgentPage() {
  placeLogOutButton();
  styleAgentHeader();
}

function agentMediaQuery() {
  function myFunction(x) {
    if (x.matches) {
      styleAgentPage();
    } else {
      return;
    }
  }
  var x = window.matchMedia("(max-width: 425px)");
  myFunction(x);
  x.addListener(myFunction);
}

function styleAgentH1andHeader() {
  document.getElementById("h1-div").style.marginTop = "0";
  document.getElementById("h1-div").style.padding = "15%";
  document.getElementById("agent-header").style.padding = "2%";
  document.getElementById("agent-header").style.borderRadius = "0 0 20px 20px";
}

function styleAgentLogOutButton() {
  document.getElementById("log-out-button").style.padding = "1%";
  document.getElementById("log-out-button").style.marginTop = "25px";
  document.getElementById("log-out-button").style.marginLeft = "5px";
  document.getElementById("login-form").style.marginRight = "5%";
}

function styleAgentPageFor768() {
  styleAgentH1andHeader();
  styleAgentLogOutButton();
}

function agentMediaQuery768() {
  function myFunction(y) {
    if (y.matches) {
      styleAgentPageFor768();
    } else {
      return;
    }
  }
  var y = window.matchMedia("(max-width: 768px)");
  myFunction(y);
  y.addListener(myFunction);
}




/***/ }),

/***/ "./src/travel_tracker_service.js":
/*!***************************************!*\
  !*** ./src/travel_tracker_service.js ***!
  \***************************************/
/*! exports provided: isValidTraveler, getSingleTraveler, getTravelerTrips, getTravelerDestinations, getAllTrips, getAllDestinations, getAllTravelers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidTraveler", function() { return isValidTraveler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleTraveler", function() { return getSingleTraveler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTravelerTrips", function() { return getTravelerTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTravelerDestinations", function() { return getTravelerDestinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTrips", function() { return getAllTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDestinations", function() { return getAllDestinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTravelers", function() { return getAllTravelers; });
async function isValidTraveler(usernameInput) {
  const baseUrl = "https://fe-apps.herokuapp.com/api/v1/travel-tracker";
  const travelersUrl = baseUrl + "/data/travelers/travelers";
  const userId = usernameInput.slice(8);
  let response = await fetch(travelersUrl);
  let awaitRes = await response.json();
  let travelers = awaitRes.travelers;
  let idToNum = Number(userId);
  let idsArray = [];
  let valid = false;
  travelers.forEach((traveler) => {
    idsArray.push(traveler.id);
  });
  idsArray.forEach((id) => {
    if (idToNum === id) {
      valid = true;
    }
  });
  return valid;
}

async function getAllTravelers() {
  let baseUrl = "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/";
  let travelersUrl = "travelers/travelers";
  let response = await fetch(baseUrl + travelersUrl);
  let travelers = await response.json();
  return travelers;
}

async function getSingleTraveler() {
  let fullUsername = document.getElementById("input-username");
  const travelerIdNumber = fullUsername.value.slice(8);
  const baseUrl = "https://fe-apps.herokuapp.com/api/v1/travel-tracker";
  const singleTravelerUrl =
    baseUrl + `/data/travelers/travelers/${travelerIdNumber}`;
  let response = await fetch(singleTravelerUrl);
  let traveler = await response.json();
  return { traveler };
}

async function getTravelerTrips(traveler) {
  const baseUrl = "https://fe-apps.herokuapp.com/api/v1/travel-tracker";
  const travelerTripsUrl = baseUrl + "/data/trips/trips";
  let response = await fetch(travelerTripsUrl);
  let tripArr = await response.json();
  let trips = tripArr.trips;
  let travelerTrips = [];
  var i;
  for (i = 0; i < trips.length; i++) {
    let trip = trips[i];
    if (traveler.id === trip.userID) {
      travelerTrips.push(trip);
    }
  }
  return { travelerTrips, traveler };
}

async function getTravelerDestinations(travelerTrips, traveler) {
  const baseUrl = "https://fe-apps.herokuapp.com/api/v1/travel-tracker";
  const travelerDestinationsUrl = baseUrl + "/data/destinations/destinations";
  let response = await fetch(travelerDestinationsUrl);
  let destinationsResponse = await response.json();
  let destinations = destinationsResponse.destinations;
  let tripDestinationIds = [];
  let travelerDestinations = [];
  travelerTrips.forEach((trip) => tripDestinationIds.push(trip.destinationID));
  let i;
  for (i = 0; i < destinations.length; i++) {
    if (tripDestinationIds.includes(destinations[i].id)) {
      travelerDestinations.push(destinations[i]);
    }
  }
  return { travelerTrips, traveler, travelerDestinations };
}

async function getAllTrips() {
  const baseUrl = "https://fe-apps.herokuapp.com/api/v1/travel-tracker";
  const agentTripsUrl = baseUrl + "/data/trips/trips";
  let response = await fetch(agentTripsUrl);
  let awaitedResponse = await response.json();
  let allTrips = awaitedResponse.trips;
  return allTrips;
}

async function getAllDestinations() {
  const baseUrl = "https://fe-apps.herokuapp.com/api/v1/travel-tracker";
  const agentDestinationsUrl = baseUrl + "/data/destinations/destinations";
  let response = await fetch(agentDestinationsUrl);
  let destinationsResponse = await response.json();
  let allDestinations = destinationsResponse.destinations;
  return allDestinations;
}




/***/ }),

/***/ "./src/traveler_dashboard_helper.js":
/*!******************************************!*\
  !*** ./src/traveler_dashboard_helper.js ***!
  \******************************************/
/*! exports provided: renderTravelerWelcome, renderTotalSpent, getLodgingCosts, getFlightCosts, addFlightandLodgingCosts, reduceFlightsPlusLodging, prepareTravelerDashboardData, filterPastAndUpcomingTrips, renderTravelerDashboard, renderTravelerTripRequestForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTravelerWelcome", function() { return renderTravelerWelcome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTotalSpent", function() { return renderTotalSpent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLodgingCosts", function() { return getLodgingCosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlightCosts", function() { return getFlightCosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFlightandLodgingCosts", function() { return addFlightandLodgingCosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceFlightsPlusLodging", function() { return reduceFlightsPlusLodging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareTravelerDashboardData", function() { return prepareTravelerDashboardData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterPastAndUpcomingTrips", function() { return filterPastAndUpcomingTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTravelerDashboard", function() { return renderTravelerDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTravelerTripRequestForm", function() { return renderTravelerTripRequestForm; });
/* harmony import */ var _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel_tracker_service */ "./src/travel_tracker_service.js");
/* harmony import */ var _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard_helper */ "./src/dashboard_helper.js");
/* harmony import */ var _styling_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styling_helper */ "./src/styling_helper.js");




function renderTripRequestButton() {
  let tripRequestButton = document.createElement("button");
  tripRequestButton.setAttribute("id", "trip-request-button");
  tripRequestButton.textContent = "CALCULATE";
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["appendToRequestForm"](tripRequestButton);
}

function renderRequestFormElements(destinationsArr, allTrips) {
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderNumberOfTravelersInput"]();
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderDateSelectInputs"]();
  renderTripRequestButton();
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["createOnClickFunctionAndRenderTrip"](destinationsArr, allTrips);
}

function renderTravelerTripRequestForm() {
  _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getAllTrips"]().then(function (result) {
    let allTrips = result;
    _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getAllDestinations"]().then(function (result) {
      let destinationsArr = result;
      _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderDestinationSearchBar"](allTrips, destinationsArr);
      renderRequestFormElements(destinationsArr, allTrips);
    });
  });
}

function renderTopSectionOfDashboard(travelerDashboardData) {
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderLogOutButton"]();
  renderTravelerWelcome(travelerDashboardData.traveler);
  renderTotalSpent(travelerDashboardData);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripsHeader"]("Upcoming");
}

function renderTripsAndRequestForm(trips, destinations) {
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTrips"](trips.upcomingTripsArr, destinations);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripsHeader"]("Past");
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTrips"](trips.pastTripsArr, destinations);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripsHeader"]("Request");
  renderTravelerTripRequestForm();
}

function renderTravelerDashboard(travelerDashboardData) {
  renderTopSectionOfDashboard(travelerDashboardData);
  let trips = filterPastAndUpcomingTrips(travelerDashboardData.travelerTrips);
  let destinations = travelerDashboardData.travelerDestinations;
  renderTripsAndRequestForm(trips, destinations);
}

function makePastAndUpcomingTripsArrays(travelerTrips, today) {
  let upcomingTripsArr = [];
  let pastTripsArr = [];
  for (let i = 0; i < travelerTrips.length; i++) {
    let smallDate = new Date(travelerTrips[i].date);
    let travDate = _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["returnTravDate"](smallDate);
    if (today < travDate) {
      upcomingTripsArr.push(travelerTrips[i]);
    } else {
      pastTripsArr.push(travelerTrips[i]);
    }
  }
  return { upcomingTripsArr, pastTripsArr };
}

function filterPastAndUpcomingTrips(travelerTrips) {
  let today = _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["returnCurrentDate"]();
  let tripsArray = makePastAndUpcomingTripsArrays(travelerTrips, today);
  let pastTripsArr = tripsArray.pastTripsArr;
  let upcomingTripsArr = tripsArray.upcomingTripsArr;
  return { pastTripsArr, upcomingTripsArr };
}

function renderTravelerWelcome(traveler) {
  document.getElementById("footer").style.display = "none";
  let welcomeHeader = document.createElement("h1");
  welcomeHeader.className = "welcome-header";
  document.getElementById(
    "home-page-h1"
  ).innerHTML = `Hello, ${traveler.name}`;
  _styling_helper__WEBPACK_IMPORTED_MODULE_2__["travelerMediaQuery"]();
}

function renderTotalSpent(travelerDashboardData) {
  let totalAmount = travelerDashboardData.totalAfterAgentFee.toFixed(2);
  let totalSpentParagraph = document.createElement("paragraph");
  totalSpentParagraph.className = "total-spent";
  let totalSpentText = document.createTextNode(
    `Total Amount Spent: $${totalAmount}`
  );
  totalSpentParagraph.appendChild(totalSpentText);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["appendToSection"](totalSpentParagraph);
}

function getLodgingCosts(travelerDestinations, travelerTrips) {
  let lodgingCosts = [];
  let i;
  for (i = 0; i < travelerDestinations.length; i++) {
    lodgingCosts.push(
      travelerDestinations[i].estimatedLodgingCostPerDay *
      travelerTrips[i].duration
    );
  }
  return lodgingCosts;
}

function getFlightCosts(travelerDestinations, travelerTrips) {
  let flightCosts = [];
  let i;
  for (i = 0; i < travelerDestinations.length; i++) {
    flightCosts.push(
      travelerDestinations[i].estimatedFlightCostPerPerson *
      travelerTrips[i].travelers
    );
  }
  return flightCosts;
}

function addFlightandLodgingCosts(flightCosts, lodgingCosts) {
  let flightsPlusLodging = [];
  let i;
  for (i = 0; i < flightCosts.length; i++) {
    flightsPlusLodging.push(lodgingCosts[i] + flightCosts[i]);
  }
  return flightsPlusLodging;
}

function reduceFlightsPlusLodging(flightsPlusLodging) {
  let flightsPlusLodgingReduced = flightsPlusLodging.reduce(function (
    flights,
    lodging
  ) {
    return flights + lodging;
  },
    0);
  return flightsPlusLodgingReduced;
}

function prepareTravelerDashboardData(
  traveler,
  travelerDestinations,
  travelerTrips
) {
  let lodgingCosts = getLodgingCosts(travelerDestinations, travelerTrips);
  let flightCosts = getFlightCosts(travelerDestinations, travelerTrips);
  let flightsPlusLodging = addFlightandLodgingCosts(flightCosts, lodgingCosts);
  let totalAmountCustHasSpentBeforeAgentFee = reduceFlightsPlusLodging(
    flightsPlusLodging
  );
  var totalAfterAgentFee = totalAmountCustHasSpentBeforeAgentFee * 1.1;
  return {
    traveler,
    travelerTrips,
    travelerDestinations,
    lodgingCosts,
    flightCosts,
    flightsPlusLodging,
    totalAmountCustHasSpentBeforeAgentFee,
    totalAfterAgentFee,
  };
}




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWdlbnRfZGFzaGJvYXJkX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9kYXNoYm9hcmRfaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naW5faGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsaW5nX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhdmVsX3RyYWNrZXJfc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhdmVsZXJfZGFzaGJvYXJkX2hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBLDJEQUEyRCxNQUFNO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELFdBQVc7QUFDMUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLCtCQUErQjtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTTtBQUNoRCx3Q0FBd0MsTUFBTTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUMsc0NBQXNDLE1BQU07QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBLG9DQUFvQyxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0Esb0NBQW9DLDRCQUE0QjtBQUNoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVyxTQUFTLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHlFQUNvQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTJCRTs7Ozs7Ozs7Ozs7OztBQzl3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QjtBQUM2QztBQUNHO0FBQ047QUFDcEI7QUFDSDtBQUM1Qyx3Q0FBd0MsNkRBQXFCOztBQUU3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQTRCO0FBQ2xDLElBQUksMEVBQ2tCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNEVBQ29CO0FBQzlCO0FBQ0E7QUFDQSxjQUFjLDJFQUNtQjtBQUNqQztBQUNBO0FBQ0Esa0JBQWtCLGtGQUMwQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1RkFBc0Q7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0ZBQWlEO0FBQ3ZFO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTLFVBQVUsMkRBQTBCO0FBQzdDLFVBQVUsbUZBQWtEO0FBQzVELFNBQVM7QUFDVCxVQUFVLHdEQUF1QjtBQUNqQztBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0gsSUFBSSx3REFBdUI7QUFDM0I7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRTs7Ozs7Ozs7Ozs7OztBQ3pCdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUU7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQyxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsOEJBQThCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwwRUFBeUM7QUFDM0M7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFFOzs7Ozs7Ozs7Ozs7O0FDak9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlCQUFpQjtBQUM1RDtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5QkFBeUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVVFOzs7Ozs7Ozs7Ozs7O0FDckdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUU7QUFDWDtBQUNWOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUVBQW1DO0FBQ3JDOztBQUVBO0FBQ0EsRUFBRSw4RUFBNEM7QUFDOUMsRUFBRSx3RUFBc0M7QUFDeEM7QUFDQSxFQUFFLG9GQUFrRDtBQUNwRDs7QUFFQTtBQUNBLEVBQUUsbUVBQWdDO0FBQ2xDO0FBQ0EsSUFBSSwwRUFBdUM7QUFDM0M7QUFDQSxNQUFNLDRFQUEwQztBQUNoRDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxFQUFFLG9FQUFrQztBQUNwQztBQUNBO0FBQ0EsRUFBRSxtRUFBaUM7QUFDbkM7O0FBRUE7QUFDQSxFQUFFLDZEQUEyQjtBQUM3QixFQUFFLG1FQUFpQztBQUNuQyxFQUFFLDZEQUEyQjtBQUM3QixFQUFFLG1FQUFpQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0EsbUJBQW1CLGdFQUE4QjtBQUNqRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLGNBQWMsbUVBQWlDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QyxFQUFFLGtFQUEwQjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBLEVBQUUsaUVBQStCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFhRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7IH1cXG5cXG5odG1sIHtcXG4gIC0taGVhZGVyLWJnLWNvbG9yOiAjZmZmO1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjZmZmO1xcbiAgLS1tYWluLWJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIC0tbWFpbi10eHQtY29sb3I6ICMwMDA7IH1cXG5cXG5pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpOyB9XFxuXFxuaW1nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luOiAzJTtcXG4gIHdpZHRoOiAzNTBweDsgfVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbnAgdGV4dCB7XFxuICBtYXJnaW46IDUlOyB9XFxuXFxuc2VjdGlvbjpmaXJzdC1vZi10eXBlIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMmZyIDAuMWZyIDAuMWZyIDAuMWZyIDAuMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcblxcbi5hcHByb3ZlLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogNzsgfVxcblxcbi5jb250YWluZXIge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1ib3JkZXItY29sb3IpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMmZyIDAuMWZyIDAuMWZyIDAuMWZyIDAuMWZyO1xcbiAgbWFyZ2luOiA1JTtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uZGVueS1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDg7IH1cXG5cXG4uZGVzdGluYXRpb24taW1hZ2Uge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBoZWlnaHQ6IDIyNXB4O1xcbiAgbWFyZ2luOiAzJTtcXG4gIHdpZHRoOiAyNzVweDsgfVxcblxcbi5mb290ZXIge1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gIG1hcmdpbi1ib3R0b206IC0xJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmhlYWRlci1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7IH1cXG5cXG4uaGVhZGVyLXNlY3Rpb24gaDEge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMTsgfVxcblxcbi5ob21lLWRlc3RpbmF0aW9uLW5hbWUge1xcbiAgbWFyZ2luOiAzJTsgfVxcblxcbi5pbWFnZS1hbmQtbmFtZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDElO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luLXRvcDogM2VtO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcblxcbi5wYXN0LXRyaXBzIHtcXG4gIGdyaWQtY29sdW1uOiAyOyB9XFxuXFxuLndlbGNvbWUtaGVhZGVyIHtcXG4gIG1hcmdpbi10b3A6IDExJTsgfVxcblxcbi5zdWJtaXQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIG1hcmdpbi10b3A6IDQuNSU7XFxuICBwYWRkaW5nOiAxJTsgfVxcblxcbi50b3RhbC1zcGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcXG4gIG1hcmdpbi10b3A6IDIlOyB9XFxuXFxuLnRyYXZuYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJvcmRlci1jb2xvcik7IH1cXG5cXG4udHJpcC1kYXRlIHtcXG4gIGdyaWQtcm93OiAzOyB9XFxuXFxuLnRyaXAtZGVzdGluYXRpb24ge1xcbiAgZ3JpZC1yb3c6IDQ7IH1cXG5cXG4udHJpcC1kdXJhdGlvbiB7XFxuICBncmlkLXJvdzogNTsgfVxcblxcbi50cmlwLXN0YXR1cyB7XFxuICBncmlkLXJvdzogNjsgfVxcblxcbiNhZ2VudC1oZWFkZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbiAgbWFyZ2luLWJvdHRvbTogLTUlO1xcbiAgbWFyZ2luLXRvcDogMTElO1xcbiAgb3BhY2l0eTogMTAlOyB9XFxuXFxuI2FnZW50LXRvb2xzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuICBoZWlnaHQ6IDYwJTsgfVxcblxcbiNhZ2VudC10b29scyBoMyB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4jYWdlbnQtdG9vbHMgbGFiZWwge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMjsgfVxcblxcbiNjb25maXJtLXRyaXAtcmVxdWVzdC1idXR0b24ge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTsgfVxcblxcbiNlbmQge1xcbiAgZ3JpZC1yb3c6IDQ7IH1cXG5cXG4jaDEtZGl2IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9jZG4ubW9zLmNtcy5mdXR1cmVjZG4ubmV0L3d0cXFua1lEWWkyaWZzV1pWVzJNVDQtMTAyNC04MC5qcGcud2VicFxcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gIG9wYWNpdHk6IDg4JTtcXG4gIHBhZGRpbmc6IDEwJTsgfVxcblxcbiNob21lLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiA1JTsgfVxcblxcbiNob21lLXBhZ2UtaDEge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XFxuICBtYXJnaW4tYm90dG9tOiAtNSU7XFxuICBtYXJnaW4tdG9wOiAxMSU7XFxuICBvcGFjaXR5OiAxMCU7IH1cXG5cXG4jbG9naW4tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBncmlkLXJvdzogMTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luOiAzJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuI2xvZ2luLWZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogMyU7IH1cXG5cXG4jbG9nLW91dC1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIG1hcmdpbi10b3A6IDQlO1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBncmlkLXJvdzogMTsgfVxcblxcbiNyZXF1ZXN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4jcmVxdWVzdGVkLXRyaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuI3N0YXJ0IHtcXG4gIGdyaWQtcm93OiA0OyB9XFxuXFxuI3Nob3ctdHJhdmVsZXItYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDQ7IH1cXG5cXG4jdG9kYXlzLXRyaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuI3RvZGF5cy10cmlwcyAjdHJpcC1yZXF1ZXN0LWJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpOyB9XFxuXFxuI3RyYXZlbGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDM7IH1cXG5cXG4jdHJhdi1zZWFyY2gtYmFyLWxhYmVsIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDI7IH1cXG5cXG4jd2VsY29tZS1oZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogMTElOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEzNjZweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIGltZyB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHdpZHRoOiA0MDBweDsgfVxcbiAgLmZvb3RlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbGVmdDogMzQlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG4gIC5oZWFkZXItc2VjdGlvbiBoMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMTsgfVxcbiAgLnRvdGFsLXNwZW50IHtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyJTsgfVxcbiAgI2FnZW50LWhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMTAlOyB9XFxuICAjYWdlbnQtdG9vbHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiA2MCU7IH1cXG4gICNhZ2VudC10b29scyBoMyB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IG5vbmU7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgI2FnZW50LXRvb2xzIGxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyOyB9XFxuICAjZm9vdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IH1cXG4gICNoMS1kaXYge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNoZWFkZXItc2VjdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gICNoZWFkZXItc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxcbiAgI2hvbWUtcGFnZS1oMSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLXRvcDogMiU7IH1cXG4gICNsb2dpbi1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNsb2dpbi1mb3JtIGlucHV0IHtcXG4gICAgcGFkZGluZzogMyU7IH1cXG4gICNzdWJtaXQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4OyB9XFxuICAjdG9kYXlzLXRyaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3RyYXZlbGVyLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkOyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDc1cHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIGltZyB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHdpZHRoOiA0MDBweDsgfVxcbiAgLmZvb3RlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbGVmdDogMzQlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG4gIC5oZWFkZXItc2VjdGlvbiBoMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMTsgfVxcbiAgLnRvdGFsLXNwZW50IHtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyJTsgfVxcbiAgI2FnZW50LWhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMTAlOyB9XFxuICAjYWdlbnQtdG9vbHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiA2MCU7IH1cXG4gICNhZ2VudC10b29scyBoMyB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IG5vbmU7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgI2FnZW50LXRvb2xzIGxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyOyB9XFxuICAjZm9vdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IH1cXG4gICNoMS1kaXYge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNoZWFkZXItc2VjdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gICNoZWFkZXItc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxcbiAgI2hvbWUtcGFnZS1oMSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLXRvcDogMiU7IH1cXG4gICNsb2dpbi1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNsb2dpbi1mb3JtIGlucHV0IHtcXG4gICAgcGFkZGluZzogMyU7IH1cXG4gICNzdWJtaXQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogOHB4OyB9XFxuICAjdG9kYXlzLXRyaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3RyYXZlbGVyLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkOyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcbiAgaW1nIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgd2lkdGg6IDQwMHB4OyB9XFxuICAuZm9vdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBsZWZ0OiAzNCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcbiAgLmhlYWRlci1zZWN0aW9uIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxOyB9XFxuICAudG90YWwtc3BlbnQge1xcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDIlOyB9XFxuICAjYWdlbnQtaGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7IH1cXG4gICNhZ2VudC10b29scyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDYwJTsgfVxcbiAgI2FnZW50LXRvb2xzIGgzIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogbm9uZTtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAjYWdlbnQtdG9vbHMgbGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7IH1cXG4gICNmb290ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgfVxcbiAgI2gxLWRpdiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgI2hlYWRlci1zZWN0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgI2hlYWRlci1zZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtOyB9XFxuICAjaG9tZS1wYWdlLWgxIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHBhZGRpbmctdG9wOiAyJTsgfVxcbiAgI2xvZ2luLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNsb2dpbi1mb3JtIGlucHV0IHtcXG4gICAgcGFkZGluZzogMyU7IH1cXG4gICNzdWJtaXQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICBwYWRkaW5nOiAyJTsgfVxcbiAgI3RvZGF5cy10cmlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICN0cmF2ZWxlci1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDIlOyB9XFxuICBoMSB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gIGltZyB7XFxuICAgIGhlaWdodDogOTUlO1xcbiAgICB3aWR0aDogOTUlOyB9XFxuICBpbnB1dCB7XFxuICAgIHdpZHRoOiA3NSU7IH1cXG4gIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5mb290ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGxlZnQ6IDM0JTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAuaG9tZS1kZXN0aW5hdGlvbi1uYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gIC5ob21lLXBhZ2Uge1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyOyB9XFxuICAudG90YWwtZWFybmVkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDI7IH1cXG4gIC50b3RhbC1zcGVudCB7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bzsgfVxcbiAgLndlbGNvbWUtaGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTAlOyB9XFxuICAjYWdlbnQtaGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7IH1cXG4gICNhZ2VudC10b29scyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDY1JTsgfVxcbiAgI2gxLWRpdiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuM2ZyOyB9XFxuICAjaGVhZGVyLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gICNob21lLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IDUlOyB9XFxuICAjaG9tZS1wYWdlLWgxIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXG4gICAgZm9udC1zaXplOiByZXZlcnQ7XFxuICAgIG1hcmdpbi10b3A6IDM1JTsgfVxcbiAgI2xvZ2luLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBtYXJnaW46IDQlO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgI2xvZ2luLWZvcm0gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTsgfVxcbiAgI2xvZ2luLWZvcm0gaW5wdXQge1xcbiAgICBtYXJnaW46IDA7IH1cXG4gICNsb2ctb3V0LWJ1dHRvbiB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgbWFyZ2luLXRvcDogLTE1JTsgfVxcbiAgI3RvZGF5cy10cmlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICN0cmF2ZWxlciB7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuICAjdHJhdmVsZXItcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xcbiAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAyJTsgfVxcbiAgaW1nIHtcXG4gICAgaGVpZ2h0OiA5NSU7XFxuICAgIHdpZHRoOiA5NSU7IH1cXG4gIGlucHV0IHtcXG4gICAgd2lkdGg6IDc1JTsgfVxcbiAgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmZvb3RlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbGVmdDogMzQlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG4gIC5oZWFkZXItc2VjdGlvbiBoMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMTsgfVxcbiAgLmhvbWUtZGVzdGluYXRpb24tbmFtZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAuaG9tZS1wYWdlIHtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcbiAgLnRvdGFsLWVhcm5lZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAyOyB9XFxuICAudG90YWwtc3BlbnQge1xcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87IH1cXG4gIC53ZWxjb21lLWhlYWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDEwJTsgfVxcbiAgI2FnZW50LWhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBncmlkLXJvdzogMjsgfVxcbiAgI2FnZW50LXRvb2xzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGhlaWdodDogNjUlOyB9XFxuICAjaDEtZGl2IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC4zZnI7IH1cXG4gICNoZWFkZXItc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjI1ZnI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgI2hvbWUtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogNSU7IH1cXG4gICNob21lLXBhZ2UtaDEge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IHJldmVydDtcXG4gICAgbWFyZ2luLXRvcDogMzUlOyB9XFxuICAjbG9nLW91dC1idXR0b24ge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIG1hcmdpbi10b3A6IC0xNSU7IH1cXG4gICNsb2dpbi1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luOiAzJTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNsb2dpbi1mb3JtIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7IH1cXG4gICNsb2dpbi1mb3JtIGlucHV0IHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAjdG9kYXlzLXRyaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3RyYXZlbGVyIHtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG4gICN0cmF2ZWxlci1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDsgfSB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCAqIGFzIHRyYXZlbFRyYWNrZXJTZXJ2aWNlIGZyb20gXCIuL3RyYXZlbF90cmFja2VyX3NlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGRhc2hib2FyZEhlbHBlciBmcm9tIFwiLi9kYXNoYm9hcmRfaGVscGVyXCI7XG5pbXBvcnQgKiBhcyB0cmF2ZWxlckRhc2hib2FyZEhlbHBlciBmcm9tIFwiLi90cmF2ZWxlcl9kYXNoYm9hcmRfaGVscGVyXCI7XG5pbXBvcnQgKiBhcyBzdHlsaW5nIGZyb20gXCIuL3N0eWxpbmdfaGVscGVyXCI7XG5cbmZ1bmN0aW9uIHNldEFnZW50UGFnZSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZS1oMVwiKS5pbm5lckhUTUwgPSBcIldlbGNvbWUsIEFHRU5UXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlLWgxXCIpLmlkID0gXCJhZ2VudC1oZWFkZXJcIjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWdlbnRXZWxjb21lKCkge1xuICBzZXRBZ2VudFBhZ2UoKTtcbiAgc3R5bGluZy5hZ2VudE1lZGlhUXVlcnkoKTtcbiAgc3R5bGluZy5hZ2VudE1lZGlhUXVlcnk3NjgoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQW1vdW50QWdlbnRFYXJuZWQodHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgYW1vdW50QWdlbnRFYXJuZWQgPSBnZXRMb2RnaW5nQ29zdHNGb3JBZ2VudChkZXN0aW5hdGlvbnMsIHRyaXBzKTtcbiAgcmVuZGVyVG90YWxFYXJuZWQoYW1vdW50QWdlbnRFYXJuZWQpO1xufVxuXG5mdW5jdGlvbiBjaGVja0Zvck5vVHJhdmVsZXJzKHRvZGF5c1RyaXBzKSB7XG4gIGlmICh0b2RheXNUcmlwcy50b2RheXNUcmlwcy5sZW5ndGggPT09IDApIHtcbiAgICBsZXQgbm9UcmF2ZWxlcnNUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgXCJUaGVyZSBhcmUgbm8gdHJhdmVsZXJzIG9uIFRyaXBzIFRvZGF5XCJcbiAgICApO1xuICAgIGxldCBub1RyYXZlbGVyc0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG5vVHJhdmVsZXJzSDEuYXBwZW5kQ2hpbGQobm9UcmF2ZWxlcnNUZXh0Tm9kZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMV0uYXBwZW5kQ2hpbGQobm9UcmF2ZWxlcnNIMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJhdmVsZXJzT25Ucmlwc1RvZGF5KHRvZGF5c1RyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgaWYgKHRvZGF5c1RyaXBzLnRvZGF5c1RyaXBzLmxlbmd0aCA+IDApIHtcbiAgICByZW5kZXJBZ2VudFRyaXBzKHRvZGF5c1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBlbmRpbmdBbmRUb2RheXNUcmlwcyh0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGxldCBwZW5kaW5nVHJpcHMgPSBkYXNoYm9hcmRIZWxwZXIuZ2V0UGVuZGluZ1RyaXBzKHRyaXBzKTtcbiAgcmVuZGVyQWdlbnRUcmlwcyhwZW5kaW5nVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwc0hlYWRlcihcIlRvZGF5J3NcIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250YWluZXJcIilbMV0uaWQgPSBcInRvZGF5cy10cmlwc1wiO1xuICBsZXQgdG9kYXlzVHJpcHMgPSBkYXNoYm9hcmRIZWxwZXIuZ2V0VG9kYXlzVHJpcHModHJpcHMpO1xuICBjaGVja0Zvck5vVHJhdmVsZXJzKHRvZGF5c1RyaXBzKTtcbiAgcmVuZGVyVHJhdmVsZXJzT25Ucmlwc1RvZGF5KHRvZGF5c1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb3BIYWxmT2ZBZ2VudERhc2hib2FyZCh0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIHJlbmRlckFtb3VudEFnZW50RWFybmVkKHRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJSZXF1ZXN0ZWRcIik7XG4gIHJlbmRlclBlbmRpbmdBbmRUb2RheXNUcmlwcyh0cmlwcywgZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQm90dG9tSGFsZk9mQWdlbnREYXNoYm9hcmQodHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJBZ2VudCBUb29scyBhbmQgVHJhdmVsZXJcIik7XG4gIHJlbmRlclRyYXZlbGVyU2VhcmNoQmFyKCk7XG4gIHJlbmRlclNob3dUcmF2ZWxlckJ1dHRvbih0cmlwcywgZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3VjY2Vzc2Z1bEFnZW5jeUxvZ2luKCkge1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyTG9nT3V0QnV0dG9uKCk7XG4gIHJlbmRlckFnZW50V2VsY29tZSgpO1xuICB0cmF2ZWxUcmFja2VyU2VydmljZS5nZXRBbGxUcmlwcygpLnRoZW4oZnVuY3Rpb24gKHRyaXBzKSB7XG4gICAgdHJhdmVsVHJhY2tlclNlcnZpY2UuZ2V0QWxsRGVzdGluYXRpb25zKCkudGhlbihmdW5jdGlvbiAoZGVzdGluYXRpb25zKSB7XG4gICAgICB0cmlwcztcbiAgICAgIHJlbmRlclRvcEhhbGZPZkFnZW50RGFzaGJvYXJkKHRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICAgICAgcmVuZGVyQm90dG9tSGFsZk9mQWdlbnREYXNoYm9hcmQodHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXR1cm5BcHByb3ZlZFRyaXBzKHRyaXBzKSB7XG4gIGxldCBhcHByb3ZlZFRyaXBzID0gW107XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHJpcHNbaV0uc3RhdHVzID09PSBcImFwcHJvdmVkXCIpIHtcbiAgICAgIGFwcHJvdmVkVHJpcHMucHVzaCh0cmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcHByb3ZlZFRyaXBzO1xufVxuXG5mdW5jdGlvbiBsb29wVGhyb3VnaEFwcHJvdmVkVHJpcChcbiAgYXBwcm92ZWRUcmlwLFxuICBkZXN0aW5hdGlvbnMsXG4gIGRlc3RpbmF0aW9uSW5kZXgsXG4gIGFwcHJvdmVkVHJpcHNGbGlnaHRQbHVzTG9kZ2luZ0FyclxuKSB7XG4gIGZvciAoXG4gICAgZGVzdGluYXRpb25JbmRleCA9IDA7XG4gICAgZGVzdGluYXRpb25JbmRleCA8IGRlc3RpbmF0aW9ucy5sZW5ndGg7XG4gICAgZGVzdGluYXRpb25JbmRleCsrXG4gICkge1xuICAgIGxldCBkZXN0aW5hdGlvbklEID0gYXBwcm92ZWRUcmlwLmRlc3RpbmF0aW9uSUQ7XG4gICAgbGV0IGRlc3RpbmF0aW9uSW5kZXhJZCA9IGRlc3RpbmF0aW9uc1tkZXN0aW5hdGlvbkluZGV4XS5pZDtcbiAgICBpZiAoZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb25JbmRleElkKSB7XG4gICAgICBhcHByb3ZlZFRyaXBzRmxpZ2h0UGx1c0xvZGdpbmdBcnIucHVzaChcbiAgICAgICAgZGVzdGluYXRpb25zW2Rlc3RpbmF0aW9uSW5kZXhdLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICtcbiAgICAgICAgZGVzdGluYXRpb25zW2Rlc3RpbmF0aW9uSW5kZXhdLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb25cbiAgICAgICk7XG4gICAgICBsZXQgYXBwcm92ZWRUcmlwRmxpZ2h0UGx1c0xvZGdpbmcgPSBhcHByb3ZlZFRyaXBzRmxpZ2h0UGx1c0xvZGdpbmdBcnI7XG4gICAgICByZXR1cm4gYXBwcm92ZWRUcmlwRmxpZ2h0UGx1c0xvZGdpbmc7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJldHVybkFwcHJvdmVkVHJpcHNGbGlnaHRzQW5kTG9kZ2luZyhkZXN0aW5hdGlvbnMsIGFwcHJvdmVkVHJpcHMpIHtcbiAgbGV0IGFwcHJvdmVkVHJpcHNGbGlnaHRQbHVzTG9kZ2luZ0FyciA9IFtdO1xuICBsZXQgZGVzdGluYXRpb25JbmRleDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHByb3ZlZFRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbG9vcFRocm91Z2hBcHByb3ZlZFRyaXAoXG4gICAgICBhcHByb3ZlZFRyaXBzW2ldLFxuICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgZGVzdGluYXRpb25JbmRleCxcbiAgICAgIGFwcHJvdmVkVHJpcHNGbGlnaHRQbHVzTG9kZ2luZ0FyclxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGFwcHJvdmVkVHJpcHNGbGlnaHRQbHVzTG9kZ2luZ0Fycjtcbn1cblxuZnVuY3Rpb24gZ2V0TG9kZ2luZ0Nvc3RzRm9yQWdlbnQoZGVzdGluYXRpb25zLCB0cmlwcykge1xuICBsZXQgYXBwcm92ZWRUcmlwcyA9IHJldHVybkFwcHJvdmVkVHJpcHModHJpcHMpO1xuICBsZXQgYXBwcm92ZWRUcmlwc0ZsaWdodHNQbHVzTG9kZ2luZyA9IHJldHVybkFwcHJvdmVkVHJpcHNGbGlnaHRzQW5kTG9kZ2luZyhcbiAgICBkZXN0aW5hdGlvbnMsXG4gICAgYXBwcm92ZWRUcmlwc1xuICApO1xuICBsZXQgYW1vdW50VHJhdmVsZXJzSGF2ZVNwZW50ID0gYXBwcm92ZWRUcmlwc0ZsaWdodHNQbHVzTG9kZ2luZy5yZWR1Y2UoXG4gICAgKGxvZGdpbmdDb3N0LCBmbGlnaHRDb3N0KSA9PiBsb2RnaW5nQ29zdCArIGZsaWdodENvc3QsXG4gICAgMFxuICApO1xuICBsZXQgYW1vdW50QWdlbnRFYXJuZWQgPSBhbW91bnRUcmF2ZWxlcnNIYXZlU3BlbnQgKiAwLjE7XG4gIHJldHVybiBhbW91bnRBZ2VudEVhcm5lZDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG90YWxFYXJuZWQoYW1vdW50QWdlbnRFYXJuZWQpIHtcbiAgYW1vdW50QWdlbnRFYXJuZWQ7XG4gIGxldCB0b3RhbEFtb3VudCA9IGFtb3VudEFnZW50RWFybmVkLnRvRml4ZWQoMik7XG4gIGxldCB0b3RhbEVhcm5lZFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIHRvdGFsRWFybmVkUGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwidG90YWwtc3BlbnRcIjtcbiAgbGV0IHRvdGFsRWFybmVkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUb3RhbCBBbW91bnQgRWFybmVkOiAkJHt0b3RhbEFtb3VudH1gXG4gICk7XG4gIHRvdGFsRWFybmVkUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRvdGFsRWFybmVkVGV4dCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKHRvdGFsRWFybmVkUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcHModG9kYXlzVHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyRGVzdGluYXRpb25JbWFnZSh0b2RheXNUcmlwcywgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBEYXRlKHRvZGF5c1RyaXBzKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBEZXN0aW5hdGlvbih0b2RheXNUcmlwcywgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBTdGF0dXModG9kYXlzVHJpcHMpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcER1cmF0aW9uKHRvZGF5c1RyaXBzKTtcbiAgcmVuZGVyQXBwcm92ZUFuZERlbnlCdXR0b25zKHRvZGF5c1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQZW5kaW5nVHJpcHMocGVuZGluZ1RyaXAsIGRlc3RpbmF0aW9ucykge1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyRGVzdGluYXRpb25JbWFnZShwZW5kaW5nVHJpcCwgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBEYXRlKHBlbmRpbmdUcmlwKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBEZXN0aW5hdGlvbihwZW5kaW5nVHJpcCwgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBTdGF0dXMocGVuZGluZ1RyaXApO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcER1cmF0aW9uKHBlbmRpbmdUcmlwKTtcbiAgcmVuZGVyQXBwcm92ZUFuZERlbnlCdXR0b25zKHBlbmRpbmdUcmlwLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZ2VudFRyaXBzKHBlbmRpbmdUcmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGlmIChwZW5kaW5nVHJpcHMubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgdG9kYXlzVHJpcHMgPSBwZW5kaW5nVHJpcHMudG9kYXlzVHJpcHM7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IHRvZGF5c1RyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZW5kZXJUcmlwcyh0b2RheXNUcmlwc1tpXSwgZGVzdGluYXRpb25zKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdUcmlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVuZGVyUGVuZGluZ1RyaXBzKHBlbmRpbmdUcmlwc1tpXSwgZGVzdGluYXRpb25zKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kQXBwcm92ZUFuZERlbnlCdXR0b24oYXBwcm92ZUJ1dHRvbiwgZGVueUJ1dHRvbikge1xuICBkYXNoYm9hcmRIZWxwZXIuYXBwZW5kVG9TZWN0aW9uKGFwcHJvdmVCdXR0b24pO1xuICBkYXNoYm9hcmRIZWxwZXIuYXBwZW5kVG9TZWN0aW9uKGRlbnlCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcHByb3ZlQnV0dG9uKHBlbmRpbmdUcmlwSWQpIHtcbiAgbGV0IGFwcHJvdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhcHByb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBhcHByb3ZlLWJ1dHRvbi0ke3BlbmRpbmdUcmlwSWR9YCk7XG4gIGFwcHJvdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcHByb3ZlLWJ1dHRvblwiKTtcbiAgYXBwcm92ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQVBQUk9WRVwiO1xuICByZXR1cm4gYXBwcm92ZUJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVueUJ1dHRvbihwZW5kaW5nVHJpcElkKSB7XG4gIGxldCBkZW55QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVueUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZGVueS1idXR0b24tJHtwZW5kaW5nVHJpcElkfWApO1xuICBkZW55QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVueS1idXR0b25cIik7XG4gIGRlbnlCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURSBUUklQXCI7XG4gIHJldHVybiBkZW55QnV0dG9uO1xufVxuXG5mdW5jdGlvbiBzZXREYXRhKHN0YXR1cywgcGVuZGluZ1RyaXBJZCkge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGlkOiBwZW5kaW5nVHJpcElkLFxuICAgIHN0YXR1cyxcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBbXSxcbiAgfTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGZldGNoUG9zdENhbGwoZGF0YSkge1xuICBmZXRjaChcbiAgICBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL3RyaXBzL3VwZGF0ZVRyaXBcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9XG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgYWxlcnQoXCJTdWNjZXNzOlwiLCBkYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGFsZXJ0KFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0QnV0dG9uT25jbGljayhwZW5kaW5nVHJpcCwgYnV0dG9uLCBzdGF0dXMpIHtcbiAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiBhcHByb3ZlT3JEZW55VHJpcCgpIHtcbiAgICBwZW5kaW5nVHJpcDtcbiAgICBsZXQgZGF0YSA9IHNldERhdGEoc3RhdHVzLCBwZW5kaW5nVHJpcC5pZCk7XG4gICAgZmV0Y2hQb3N0Q2FsbChkYXRhKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hBbmREZWxldGVUcmlwKGRhdGEpIHtcbiAgZmV0Y2goXG4gICAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXIvZGF0YS90cmlwcy90cmlwc1wiLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIiwgLy8gb3IgJ1BVVCdcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfVxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGFsZXJ0KFwiU3VjY2VzczpcIiwgZGF0YSk7XG4gICAgfSk7XG4gIGFsZXJ0KChlcnJvcikgPT4ge1xuICAgIGFsZXJ0KFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEJ1dHRvbk9uY2xpY2tUb0RlbGV0ZShwZW5kaW5nVHJpcCwgYnV0dG9uKSB7XG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gZGVsZXRlVHJpcCgpIHtcbiAgICBwZW5kaW5nVHJpcDtcbiAgICBsZXQgZGF0YSA9IHsgaWQ6IHBlbmRpbmdUcmlwLmlkIH07XG4gICAgZmV0Y2hBbmREZWxldGVUcmlwKGRhdGEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJCdXR0b25zRm9yVHJhdmVsZXJQYWdlKHBlbmRpbmdUcmlwKSB7XG4gIGxldCBhcHByb3ZlQnV0dG9uID0gY3JlYXRlQXBwcm92ZUJ1dHRvbihwZW5kaW5nVHJpcC5pZCk7XG4gIGxldCBkZW55QnV0dG9uID0gY3JlYXRlRGVueUJ1dHRvbihwZW5kaW5nVHJpcC5pZCk7XG4gIGFwcGVuZEFwcHJvdmVBbmREZW55QnV0dG9uKGFwcHJvdmVCdXR0b24sIGRlbnlCdXR0b24pO1xuICBzZXRCdXR0b25PbmNsaWNrKHBlbmRpbmdUcmlwLCBhcHByb3ZlQnV0dG9uLCBcImFwcHJvdmVkXCIpO1xuICBzZXRCdXR0b25PbmNsaWNrVG9EZWxldGUocGVuZGluZ1RyaXAsIGRlbnlCdXR0b24sIFwicGVuZGluZ1wiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQnV0dG9uc0ZvckFnZW50RGFzaGJvYXJkKHBlbmRpbmdUcmlwKSB7XG4gIGxldCBhcHByb3ZlQnV0dG9uID0gY3JlYXRlQXBwcm92ZUJ1dHRvbihwZW5kaW5nVHJpcC5pZCk7XG4gIGxldCBkZW55QnV0dG9uID0gY3JlYXRlRGVueUJ1dHRvbihwZW5kaW5nVHJpcC5pZCk7XG4gIGFwcGVuZEFwcHJvdmVBbmREZW55QnV0dG9uKGFwcHJvdmVCdXR0b24sIGRlbnlCdXR0b24pO1xuICBzZXRCdXR0b25PbmNsaWNrKHBlbmRpbmdUcmlwLCBhcHByb3ZlQnV0dG9uLCBcImFwcHJvdmVkXCIpO1xuICBzZXRCdXR0b25PbmNsaWNrKHBlbmRpbmdUcmlwLCBkZW55QnV0dG9uLCBcInBlbmRpbmdcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFwcHJvdmVBbmREZW55QnV0dG9ucyhwZW5kaW5nVHJpcCwgZGVzdGluYXRpb25zKSB7XG4gIGRlc3RpbmF0aW9ucztcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsZXItcGFnZVwiKSkge1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBwZW5kaW5nVHJpcC5sZW5ndGg7IGkrKykge1xuICAgICAgcmVuZGVyQnV0dG9uc0ZvclRyYXZlbGVyUGFnZShwZW5kaW5nVHJpcFtpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlbmRlckJ1dHRvbnNGb3JBZ2VudERhc2hib2FyZChwZW5kaW5nVHJpcCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhdmVsZXJzTmFtZXMocmVzdWx0KSB7XG4gIGxldCB0cmF2ZWxlcnMgPSBbXTtcbiAgbGV0IHRyYXZlbGVyc0FycmF5ID0gcmVzdWx0O1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyYXZlbGVyc0FycmF5LnRyYXZlbGVycy5sZW5ndGg7IGkrKykge1xuICAgIHRyYXZlbGVycy5wdXNoKHRyYXZlbGVyc0FycmF5LnRyYXZlbGVyc1tpXS5uYW1lKTtcbiAgfVxuICByZXR1cm4gdHJhdmVsZXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJUcmF2U2VhcmNoQmFyTGFiZWwoKSB7XG4gIGxldCB0cmF2U2VhcmNoQmFyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRyYXZTZWFyY2hCYXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0cmF2ZWxlci1saXN0XCIpO1xuICBsZXQgdHJhdlNlYXJjaEJhckxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiU2VhcmNoIGZvciBhIFRyYXZlbGVyOlwiXG4gICk7XG4gIHRyYXZTZWFyY2hCYXJMYWJlbC5hcHBlbmRDaGlsZCh0cmF2U2VhcmNoQmFyTGFiZWxUZXh0KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMl0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZ2VudC10b29sc1wiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMl0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnQtdG9vbHNcIikuYXBwZW5kQ2hpbGQodHJhdlNlYXJjaEJhckxhYmVsKTtcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXRMaXN0KCkge1xuICBsZXQgaW5wdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dExpc3Quc2V0QXR0cmlidXRlKFwibGlzdFwiLCBcInRyYXZlbGVyLWxpc3RcIik7XG4gIGlucHV0TGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRyYXZlbGVyXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50LXRvb2xzXCIpLmFwcGVuZENoaWxkKGlucHV0TGlzdCk7XG59XG5cbmZ1bmN0aW9uIHNldERhdGFMaXN0KCkge1xuICBsZXQgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGF0YWxpc3RcIik7XG4gIGRhdGFMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHJhdmVsZXItbGlzdFwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudC10b29sc1wiKS5hcHBlbmRDaGlsZChkYXRhTGlzdCk7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRyYXZlbGVyc05hbWVzKHJlc3VsdCkge1xuICBsZXQgdHJhdmVsZXJzID0gdHJhdmVsZXJzTmFtZXMocmVzdWx0KTtcbiAgY3JlYXRlQW5kUmVuZGVyVHJhdlNlYXJjaEJhckxhYmVsKCk7XG4gIHNldElucHV0TGlzdCgpO1xuICBzZXREYXRhTGlzdCgpO1xuICByZXR1cm4gdHJhdmVsZXJzO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmF2ZWxlclNlYXJjaEJhcigpIHtcbiAgdHJhdmVsVHJhY2tlclNlcnZpY2UuZ2V0QWxsVHJhdmVsZXJzKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgbGV0IHRyYXZlbGVycyA9IHJldHVyblRyYXZlbGVyc05hbWVzKHJlc3VsdCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZWxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3RyYXZlbGVyc1tpXX1gKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsZXItbGlzdFwiKS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYXZlbGVyXCIpLnBsYWNlaG9sZGVyID0gXCJFbnRlciB0cmF2ZWxlciBuYW1lXCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTaW5nbGVUcmF2ZWxlckJ5TmFtZSh0cmF2ZWxlcnMpIHtcbiAgbGV0IGFsbFRyYXZlbGVycyA9IHRyYXZlbGVycy50cmF2ZWxlcnM7XG4gIGxldCB0cmF2ZWxlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYXZlbGVyXCIpLnZhbHVlO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGFsbFRyYXZlbGVycy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmF2ZWxlck5hbWUgPT09IGFsbFRyYXZlbGVyc1tpXS5uYW1lKSB7XG4gICAgICBsZXQgdHJhdmVsZXIgPSBhbGxUcmF2ZWxlcnNbaV07XG4gICAgICByZXR1cm4gdHJhdmVsZXI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldExvZGdpbmdDb3N0cyh0cmF2ZWxlckRlc3RpbmF0aW9ucywgdHJhdmVsZXJUcmlwcykge1xuICBsZXQgbG9kZ2luZ0Nvc3RzID0gdHJhdmVsZXJEYXNoYm9hcmRIZWxwZXIuZ2V0TG9kZ2luZ0Nvc3RzKFxuICAgIHRyYXZlbGVyRGVzdGluYXRpb25zLFxuICAgIHRyYXZlbGVyVHJpcHNcbiAgKTtcbiAgcmV0dXJuIGxvZGdpbmdDb3N0cztcbn1cblxuZnVuY3Rpb24gZ2V0RmxpZ2h0Q29zdHModHJhdmVsZXJEZXN0aW5hdGlvbnMsIHRyYXZlbGVyVHJpcHMpIHtcbiAgbGV0IGZsaWdodENvc3RzID0gdHJhdmVsZXJEYXNoYm9hcmRIZWxwZXIuZ2V0RmxpZ2h0Q29zdHMoXG4gICAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gICAgdHJhdmVsZXJUcmlwc1xuICApO1xuICByZXR1cm4gZmxpZ2h0Q29zdHM7XG59XG5cbmZ1bmN0aW9uIGdldEZsaWdodHNQbHVzTG9kZ2luZyh0cmF2ZWxlciwgdHJhdmVsZXJUcmlwcywgdHJhdmVsZXJEZXN0aW5hdGlvbnMpIHtcbiAgbGV0IGxvZGdpbmdDb3N0cyA9IGdldExvZGdpbmdDb3N0cyh0cmF2ZWxlckRlc3RpbmF0aW9ucywgdHJhdmVsZXJUcmlwcyk7XG4gIGxldCBmbGlnaHRDb3N0cyA9IGdldEZsaWdodENvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKTtcbiAgbGV0IGZsaWdodHNQbHVzTG9kZ2luZyA9IHRyYXZlbGVyRGFzaGJvYXJkSGVscGVyLmFkZEZsaWdodGFuZExvZGdpbmdDb3N0cyhcbiAgICBmbGlnaHRDb3N0cyxcbiAgICBsb2RnaW5nQ29zdHNcbiAgKTtcbiAgcmV0dXJuIGZsaWdodHNQbHVzTG9kZ2luZztcbn1cblxuZnVuY3Rpb24gYWRkRmVlKHRyYXZlbGVyLCB0cmF2ZWxlclRyaXBzLCB0cmF2ZWxlckRlc3RpbmF0aW9ucywgZGVzdGluYXRpb25zKSB7XG4gIGxldCBmbGlnaHRzUGx1c0xvZGdpbmcgPSBnZXRGbGlnaHRzUGx1c0xvZGdpbmcoXG4gICAgdHJhdmVsZXIsXG4gICAgdHJhdmVsZXJUcmlwcyxcbiAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucyxcbiAgICBkZXN0aW5hdGlvbnNcbiAgKTtcbiAgbGV0IHRvdGFsQmVmb3JlRmVlID0gdHJhdmVsZXJEYXNoYm9hcmRIZWxwZXIucmVkdWNlRmxpZ2h0c1BsdXNMb2RnaW5nKFxuICAgIGZsaWdodHNQbHVzTG9kZ2luZ1xuICApO1xuICB2YXIgdG90YWxBZnRlckFnZW50RmVlID0gdG90YWxCZWZvcmVGZWUgKiAxLjE7XG4gIHJldHVybiB0b3RhbEFmdGVyQWdlbnRGZWU7XG59XG5cbmZ1bmN0aW9uIGdldFRvdGFsQWZ0ZXJBZ2VudEZlZShcbiAgdHJhdmVsZXIsXG4gIHRyYXZlbGVyVHJpcHMsXG4gIHRyYXZlbGVyRGVzdGluYXRpb25zLFxuICBkZXN0aW5hdGlvbnNcbikge1xuICBsZXQgdG90YWxBZnRlckFnZW50RmVlID0gYWRkRmVlKFxuICAgIHRyYXZlbGVyLFxuICAgIHRyYXZlbGVyVHJpcHMsXG4gICAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gICAgZGVzdGluYXRpb25zXG4gICk7XG4gIHJldHVybiB0b3RhbEFmdGVyQWdlbnRGZWU7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVEYXNoYm9hcmREYXRhKHJlc3VsdCwgdHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgdHJhdmVsZXJzID0gcmVzdWx0O1xuICBsZXQgdHJhdmVsZXIgPSBnZXRTaW5nbGVUcmF2ZWxlckJ5TmFtZSh0cmF2ZWxlcnMpO1xuICBsZXQgdHJhdmVsZXJUcmlwcyA9IGdldFRyYXZlbGVyc1RyaXBzKHRyaXBzLCB0cmF2ZWxlcik7XG4gIGxldCB0cmF2ZWxlckRlc3RpbmF0aW9ucyA9IGdldFRyYXZlbGVyc0Rlc3RpbmF0aW9ucyhcbiAgICB0cmF2ZWxlclRyaXBzLFxuICAgIGRlc3RpbmF0aW9uc1xuICApO1xuICBsZXQgdG90YWxBZnRlckFnZW50RmVlID0gZ2V0VG90YWxBZnRlckFnZW50RmVlKFxuICAgIHRyYXZlbGVyLFxuICAgIHRyYXZlbGVyVHJpcHMsXG4gICAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gICAgZGVzdGluYXRpb25zXG4gICk7XG4gIHJldHVybiB7XG4gICAgdHJhdmVsZXIsXG4gICAgdHJhdmVsZXJUcmlwcyxcbiAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucyxcbiAgICB0b3RhbEFmdGVyQWdlbnRGZWUsXG4gICAgZGVzdGluYXRpb25zLFxuICB9O1xufVxuXG5mdW5jdGlvbiBoaWRlU2VhcmNoRm9ybVJlbmRlckhlYWRlckFuZFRvdGFsU3BlbnQodHJhdmVsZXJJbmZvKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnQtdG9vbHNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoYCR7dHJhdmVsZXJJbmZvLnRyYXZlbGVyLm5hbWV9J3NgKTtcbiAgbGV0IHRyYXZlbGVyUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzNdO1xuICB0cmF2ZWxlclBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0cmF2ZWxlci1wYWdlXCIpO1xuICB0cmF2ZWxlckRhc2hib2FyZEhlbHBlci5yZW5kZXJUb3RhbFNwZW50KHRyYXZlbGVySW5mbyk7XG59XG5cbmZ1bmN0aW9uIGdldFBlbmRpbmdBbmRBcHByb3ZlZFRyaXBzKHRyYXZlbGVySW5mbykge1xuICBsZXQgcGVuZGluZ1RyaXBzID0gW107XG4gIGxldCBhcHByb3ZlZFRyaXBzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhdmVsZXJJbmZvLnRyYXZlbGVyVHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHJhdmVsZXJJbmZvLnRyYXZlbGVyVHJpcHNbaV0uc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xuICAgICAgcGVuZGluZ1RyaXBzLnB1c2godHJhdmVsZXJJbmZvLnRyYXZlbGVyVHJpcHNbaV0pO1xuICAgIH0gZWxzZSBpZiAodHJhdmVsZXJJbmZvLnRyYXZlbGVyVHJpcHNbaV0uc3RhdHVzID09PSBcImFwcHJvdmVkXCIpIHtcbiAgICAgIGFwcHJvdmVkVHJpcHMucHVzaCh0cmF2ZWxlckluZm8udHJhdmVsZXJUcmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHBlbmRpbmdUcmlwcywgYXBwcm92ZWRUcmlwcyB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmF2ZWxlclBhZ2VGb3JBZ2VudCh0cmF2ZWxlckluZm8pIHtcbiAgaGlkZVNlYXJjaEZvcm1SZW5kZXJIZWFkZXJBbmRUb3RhbFNwZW50KHRyYXZlbGVySW5mbyk7XG4gIGxldCB0cmlwcyA9IGdldFBlbmRpbmdBbmRBcHByb3ZlZFRyaXBzKHRyYXZlbGVySW5mbyk7XG4gIGxldCBwZW5kaW5nVHJpcHMgPSB0cmlwcy5wZW5kaW5nVHJpcHM7XG4gIGxldCBhcHByb3ZlZFRyaXBzID0gdHJpcHMuYXBwcm92ZWRUcmlwcztcbiAgbGV0IGRlc3RpbmF0aW9ucyA9IHRyYXZlbGVySW5mby5kZXN0aW5hdGlvbnM7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwcyhwZW5kaW5nVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwcyhhcHByb3ZlZFRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICByZW5kZXJBcHByb3ZlQW5kRGVueUJ1dHRvbnMocGVuZGluZ1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaG93VHJhdmVsZXJCdXR0b24oKSB7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250YWluZXJcIilbMl1cbiAgICAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZ2VudC10b29sc1wiKTtcbiAgbGV0IHNob3dUcmF2ZWxlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNob3dUcmF2ZWxlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNob3ctdHJhdmVsZXItYnV0dG9uXCIpO1xuICBzaG93VHJhdmVsZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIlNIT1cgVFJBVkVMRVJcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudC10b29sc1wiKS5hcHBlbmRDaGlsZChzaG93VHJhdmVsZXJCdXR0b24pO1xuICByZXR1cm4gc2hvd1RyYXZlbGVyQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBnZXRUcmF2ZWxlcnNUcmlwcyh0cmlwcywgdHJhdmVsZXIpIHtcbiAgbGV0IGk7XG4gIGxldCB0cmF2ZWxlclRyaXBzID0gW107XG4gIGZvciAoaSA9IDA7IGkgPCB0cmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmF2ZWxlci5pZCA9PT0gdHJpcHNbaV0udXNlcklEKSB7XG4gICAgICB0cmF2ZWxlclRyaXBzLnB1c2godHJpcHNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhdmVsZXJUcmlwcztcbn1cblxuZnVuY3Rpb24gbG9vcFRocm91Z2hEZXN0aW5hdGlvbnMoXG4gIGRlc3RpbmF0aW9ucyxcbiAgdHJhdmVsZXJUcmlwLFxuICBkZXN0aW5hdGlvbixcbiAgdHJhdmVsZXJEZXN0aW5hdGlvbnNBcnJcbikge1xuICBsZXQgZGVzdGluYXRpb25JbmRleDtcbiAgZm9yIChcbiAgICBkZXN0aW5hdGlvbkluZGV4ID0gMDtcbiAgICBkZXN0aW5hdGlvbkluZGV4IDwgZGVzdGluYXRpb25zLmxlbmd0aDtcbiAgICBkZXN0aW5hdGlvbkluZGV4KytcbiAgKSB7XG4gICAgaWYgKHRyYXZlbGVyVHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbnNbZGVzdGluYXRpb25JbmRleF0uaWQpIHtcbiAgICAgIHRyYXZlbGVyRGVzdGluYXRpb25zQXJyLnB1c2goZGVzdGluYXRpb24pO1xuICAgIH1cbiAgfVxuICBsZXQgdHJhdmVsZXJEZXN0aW5hdGlvbnMgPSB0cmF2ZWxlckRlc3RpbmF0aW9uc0FycjtcbiAgcmV0dXJuIHRyYXZlbGVyRGVzdGluYXRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRUcmF2ZWxlcnNEZXN0aW5hdGlvbnModHJhdmVsZXJUcmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGxldCB0cmF2ZWxlckRlc3RpbmF0aW9uc0FyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXZlbGVyVHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdHJhdmVsZXJEZXN0aW5hdGlvbnMgPSBsb29wVGhyb3VnaERlc3RpbmF0aW9ucyhcbiAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgIHRyYXZlbGVyVHJpcHNbaV0sXG4gICAgICBkZXN0aW5hdGlvbnNbaV0sXG4gICAgICB0cmF2ZWxlckRlc3RpbmF0aW9uc0FyclxuICAgICk7XG4gICAgcmV0dXJuIHRyYXZlbGVyRGVzdGluYXRpb25zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFNob3dUcmF2ZWxlckJ1dHRvbk9uQ2xpY2soc2hvd1RyYXZlbGVyQnV0dG9uLCB0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIHNob3dUcmF2ZWxlckJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gc2hvd1RyYXZlbGVySW5mb3JtYXRpb24oKSB7XG4gICAgdHJpcHM7XG4gICAgZGVzdGluYXRpb25zO1xuICAgIHRyYXZlbFRyYWNrZXJTZXJ2aWNlLmdldEFsbFRyYXZlbGVycygpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgbGV0IGRhc2hib2FyZERhdGEgPSBwcmVwYXJlRGFzaGJvYXJkRGF0YShyZXN1bHQsIHRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICAgICAgcmVuZGVyVHJhdmVsZXJQYWdlRm9yQWdlbnQoZGFzaGJvYXJkRGF0YSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNob3dUcmF2ZWxlckJ1dHRvbih0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGxldCBzaG93VHJhdmVsZXJCdXR0b24gPSBjcmVhdGVTaG93VHJhdmVsZXJCdXR0b24oKTtcbiAgc2V0U2hvd1RyYXZlbGVyQnV0dG9uT25DbGljayhzaG93VHJhdmVsZXJCdXR0b24sIHRyaXBzLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5leHBvcnQgeyByZW5kZXJTdWNjZXNzZnVsQWdlbmN5TG9naW4gfTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIHRyYXZlbF90cmFja2VyX3NlcnZpY2UgZnJvbSBcIi4vdHJhdmVsX3RyYWNrZXJfc2VydmljZVwiO1xuXG5mdW5jdGlvbiByZW5kZXJUcmlwc0hlYWRlcih0aXRsZSkge1xuICBsZXQgdXBjb21pbmdUcmlwc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdXBjb21pbmdUcmlwc1NlY3Rpb24uY2xhc3NOYW1lID0gXCJjb250YWluZXJcIjtcbiAgbGV0IHVwY29taW5nVHJpcHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGxldCB1cGNvbWluZ1RyaXBzSGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3RpdGxlfSBUcmlwczpgKTtcbiAgYXBwZW5kSGVhZGVyKFxuICAgIHVwY29taW5nVHJpcHNTZWN0aW9uLFxuICAgIHVwY29taW5nVHJpcHNIZWFkZXIsXG4gICAgdXBjb21pbmdUcmlwc0hlYWRlclRleHRcbiAgKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kSGVhZGVyKFxuICB1cGNvbWluZ1RyaXBzU2VjdGlvbixcbiAgdXBjb21pbmdUcmlwc0hlYWRlcixcbiAgdXBjb21pbmdUcmlwc0hlYWRlclRleHRcbikge1xuICB1cGNvbWluZ1RyaXBzSGVhZGVyLmFwcGVuZENoaWxkKHVwY29taW5nVHJpcHNIZWFkZXJUZXh0KTtcbiAgdXBjb21pbmdUcmlwc1NlY3Rpb24uYXBwZW5kQ2hpbGQodXBjb21pbmdUcmlwc0hlYWRlcik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXS5hcHBlbmRDaGlsZCh1cGNvbWluZ1RyaXBzU2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIGdldFBlbmRpbmdUcmlwcyh0cmlwcykge1xuICBsZXQgaTtcbiAgbGV0IHBlbmRpbmdUcmlwcyA9IFtdO1xuICBmb3IgKGkgPSAwOyBpIDwgdHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHJpcHNbaV0uc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xuICAgICAgcGVuZGluZ1RyaXBzLnB1c2godHJpcHNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGVuZGluZ1RyaXBzO1xufVxuXG5mdW5jdGlvbiBnZXRUb2RheXNUcmlwcyh0cmlwcykge1xuICBsZXQgdG9kYXkgPSByZXR1cm5DdXJyZW50RGF0ZSgpO1xuICBsZXQgaTtcbiAgbGV0IHRvZGF5c1RyaXBzID0gW107XG4gIGZvciAoaSA9IDA7IGkgPCB0cmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwc1tpXS5kYXRlID09PSB0b2RheSkge1xuICAgICAgdG9kYXlzVHJpcHMucHVzaCh0cmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHRvZGF5c1RyaXBzIH07XG59XG5cbmZ1bmN0aW9uIHJldHVybkN1cnJlbnREYXRlKCkge1xuICB2YXIgbXlEYXRlID0gbmV3IERhdGUoKTtcbiAgdmFyIG15RGF0ZVN0cmluZztcbiAgbXlEYXRlU3RyaW5nID1cbiAgICBteURhdGUuZ2V0RnVsbFllYXIoKSArXG4gICAgXCIvXCIgK1xuICAgIChcIjBcIiArIChteURhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgK1xuICAgIFwiL1wiICtcbiAgICAoXCIwXCIgKyBteURhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XG4gIGxldCB0b2RheSA9IG15RGF0ZVN0cmluZztcbiAgcmV0dXJuIHRvZGF5O1xufVxuXG5mdW5jdGlvbiBpc1RyYXZlbGVyUGFnZSgpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsZXItcGFnZVwiKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvVHJhdmVsZXJQYWdlKHBhcmFncmFwaCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYXZlbGVyLXBhZ2VcIikuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gaXNSZXF1ZXN0ZWRPclVwY29taW5nVHJpcHNTZWN0aW9uKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJTRUNUSU9OXCIpLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvUmVxdWVzdGVkT3JVcGNvbWluZ1RyaXBzU2VjdGlvbihwYXJhZ3JhcGgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJTRUNUSU9OXCIpWzBdLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIG5vU2VjdGlvbnNIYXZlTG9hZGVkKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJTRUNUSU9OXCIpLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRUb0JvZHkocGFyYWdyYXBoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIGlzVG9kYXlzVHJpcHNTZWN0aW9uKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMV0uaW5uZXJUZXh0ID09PSBcIlRvZGF5J3MgVHJpcHM6XCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRUb1RvZGF5c1RyaXBTZWN0aW9uKHBhcmFncmFwaCkge1xuICBsZXQgdG9kYXlzVHJpcHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMV07XG4gIHRvZGF5c1RyaXBzU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZGF5cy10cmlwc1wiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheXMtdHJpcHNcIikuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gaXNQYXN0VHJpcHNTZWN0aW9uKCkge1xuICBpZiAoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMV0uaW5uZXJUZXh0LmluY2x1ZGVzKFwiUGFzdCBUcmlwc1wiKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRUb1Bhc3RUcmlwc1NlY3Rpb24ocGFyYWdyYXBoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzFdLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvU2VjdGlvbihwYXJhZ3JhcGgpIHtcbiAgaWYgKGlzVHJhdmVsZXJQYWdlKCkpIHtcbiAgICBhcHBlbmRUb1RyYXZlbGVyUGFnZShwYXJhZ3JhcGgpO1xuICB9IGVsc2UgaWYgKGlzUmVxdWVzdGVkT3JVcGNvbWluZ1RyaXBzU2VjdGlvbigpKSB7XG4gICAgYXBwZW5kVG9SZXF1ZXN0ZWRPclVwY29taW5nVHJpcHNTZWN0aW9uKHBhcmFncmFwaCk7XG4gIH0gZWxzZSBpZiAobm9TZWN0aW9uc0hhdmVMb2FkZWQoKSkge1xuICAgIGFwcGVuZFRvQm9keShwYXJhZ3JhcGgpO1xuICB9IGVsc2UgaWYgKGlzVG9kYXlzVHJpcHNTZWN0aW9uKCkpIHtcbiAgICBhcHBlbmRUb1RvZGF5c1RyaXBTZWN0aW9uKHBhcmFncmFwaCk7XG4gIH0gZWxzZSBpZiAoaXNQYXN0VHJpcHNTZWN0aW9uKCkpIHtcbiAgICBhcHBlbmRUb1Bhc3RUcmlwc1NlY3Rpb24ocGFyYWdyYXBoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwRGF0ZSh0cmlwKSB7XG4gIGxldCB0cmlwRGF0ZSA9IHRyaXAuZGF0ZTtcbiAgbGV0IHRyaXBEYXRlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdHJpcERhdGVQYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJ0cmlwLWRhdGVcIjtcbiAgbGV0IHRyaXBEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUcmlwIERhdGU6ICR7dHJpcERhdGV9IGApO1xuICB0cmlwRGF0ZVBhcmFncmFwaC5hcHBlbmRDaGlsZCh0cmlwRGF0ZVRleHQpO1xuICBhcHBlbmRUb1NlY3Rpb24odHJpcERhdGVQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmREZXN0aW5hdGlvbih0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGgsIHRyaXBEZXN0aW5hdGlvblRleHQpIHtcbiAgdHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRyaXBEZXN0aW5hdGlvblRleHQpO1xuICBhcHBlbmRUb1NlY3Rpb24odHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kVHJpcERlc3RpbmF0aW9uKHRyaXBEZXN0aW5hdGlvblBhcmFncmFwaCwgdHJpcERlc3RpbmF0aW9uVGV4dCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheXMtdHJpcHNcIikpIHtcbiAgICB0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodHJpcERlc3RpbmF0aW9uVGV4dCk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcInRvZGF5cy10cmlwc1wiKVxuICAgICAgLmFwcGVuZENoaWxkKHRyaXBEZXN0aW5hdGlvblBhcmFncmFwaCk7XG4gIH1cbiAgYXBwZW5kRGVzdGluYXRpb24odHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoLCB0cmlwRGVzdGluYXRpb25UZXh0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kVHJpcERlc3RpbmF0aW9uKHRyaXBEZXN0aW5hdGlvbikge1xuICBsZXQgdHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwidHJpcC1kZXN0aW5hdGlvblwiO1xuICBsZXQgdHJpcERlc3RpbmF0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUcmlwIERlc3RpbmF0aW9uOiAke3RyaXBEZXN0aW5hdGlvbn1gXG4gICk7XG4gIGFwcGVuZFRyaXBEZXN0aW5hdGlvbih0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGgsIHRyaXBEZXN0aW5hdGlvblRleHQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwRGVzdGluYXRpb24odHJpcCwgZGVzdGluYXRpb25zKSB7XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb25zW2ldLmlkKSB7XG4gICAgICBsZXQgdHJpcERlc3RpbmF0aW9uID0gZGVzdGluYXRpb25zW2ldLmRlc3RpbmF0aW9uO1xuICAgICAgY3JlYXRlQW5kQXBwZW5kVHJpcERlc3RpbmF0aW9uKHRyaXBEZXN0aW5hdGlvbik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCh0cmlwU3RhdHVzUGFyYWdyYXBoKSB7XG4gIGlmIChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKS5sZW5ndGggPT09IDIgJiZcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKVsxXS5pbm5lclRleHQuaW5jbHVkZXMoXCJUb2RheSdzIFRyaXBzXCIpXG4gICkge1xuICAgIGxldCB0b2RheXNUcmlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKVsxXTtcbiAgICB0b2RheXNUcmlwc1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RheXMtdHJpcHNcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheXMtdHJpcHNcIikuYXBwZW5kQ2hpbGQodHJpcFN0YXR1c1BhcmFncmFwaCk7XG4gIH0gZWxzZSB7XG4gICAgYXBwZW5kVG9TZWN0aW9uKHRyaXBTdGF0dXNQYXJhZ3JhcGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBTdGF0dXModHJpcCkge1xuICBsZXQgdHJpcFN0YXR1cyA9IHRyaXAuc3RhdHVzO1xuICBsZXQgdHJpcFN0YXR1c1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIHRyaXBTdGF0dXNQYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJ0cmlwLXN0YXR1c1wiO1xuICBsZXQgdHJpcFN0YXR1c1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgVHJpcCBTdGF0dXM6ICR7dHJpcFN0YXR1c31gKTtcbiAgdHJpcFN0YXR1c1BhcmFncmFwaC5hcHBlbmRDaGlsZCh0cmlwU3RhdHVzVGV4dCk7XG4gIGFwcGVuZCh0cmlwU3RhdHVzUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcER1cmF0aW9uKHRyaXApIHtcbiAgbGV0IHRyaXBEdXJhdGlvbiA9IHRyaXAuZHVyYXRpb247XG4gIGxldCB0cmlwRHVyYXRpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xuICB0cmlwRHVyYXRpb25QYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJ0cmlwLWR1cmF0aW9uXCI7XG4gIGxldCB0cmlwRHVyYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYFRyaXAgRHVyYXRpb246ICR7dHJpcER1cmF0aW9ufSBkYXlzYFxuICApO1xuICB0cmlwRHVyYXRpb25QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodHJpcER1cmF0aW9uVGV4dCk7XG4gIGFwcGVuZCh0cmlwRHVyYXRpb25QYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEZXN0aW5hdGlvbkltYWdlKHRyaXAsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGRlc3RpbmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwLmRlc3RpbmF0aW9uSUQgPT09IGRlc3RpbmF0aW9uc1tpXS5pZCkge1xuICAgICAgbGV0IGRlc3RpbmF0aW9uSW1hZ2UgPSBkZXN0aW5hdGlvbnNbaV0uaW1hZ2U7XG4gICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGltZy5jbGFzc05hbWUgPSBcImRlc3RpbmF0aW9uLWltYWdlXCI7XG4gICAgICBpbWcuc3JjID0gYCR7ZGVzdGluYXRpb25JbWFnZX1gO1xuICAgICAgYXBwZW5kVG9TZWN0aW9uKGltZyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBzKHRyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0cmlwcy5sZW5ndGg7IGkrKykge1xuICAgIHJlbmRlckRlc3RpbmF0aW9uSW1hZ2UodHJpcHNbaV0sIGRlc3RpbmF0aW9ucyk7XG4gICAgcmVuZGVyVHJpcERhdGUodHJpcHNbaV0pO1xuICAgIHJlbmRlclRyaXBEZXN0aW5hdGlvbih0cmlwc1tpXSwgZGVzdGluYXRpb25zKTtcbiAgICByZW5kZXJUcmlwU3RhdHVzKHRyaXBzW2ldKTtcbiAgICByZW5kZXJUcmlwRHVyYXRpb24odHJpcHNbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldHVyblRyYXZEYXRlKHNtYWxsRGF0ZSkge1xuICBsZXQgdHJhdkRhdGUgPVxuICAgIHNtYWxsRGF0ZS5nZXRGdWxsWWVhcigpICtcbiAgICBcIi9cIiArXG4gICAgKFwiMFwiICsgKHNtYWxsRGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArXG4gICAgXCIvXCIgK1xuICAgIChcIjBcIiArIHNtYWxsRGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKTtcbiAgcmV0dXJuIHRyYXZEYXRlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJQYXN0QW5kVXBjb21pbmdUcmlwcyh0cmF2ZWxlclRyaXBzKSB7XG4gIGxldCB1cGNvbWluZ1RyaXBzQXJyID0gW107XG4gIGxldCBwYXN0VHJpcHNBcnIgPSBbXTtcbiAgbGV0IHRvZGF5ID0gcmV0dXJuQ3VycmVudERhdGUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZWxlclRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNtYWxsRGF0ZSA9IG5ldyBEYXRlKHRyYXZlbGVyVHJpcHNbaV0uZGF0ZSk7XG4gICAgbGV0IHRyYXZEYXRlID0gcmV0dXJuVHJhdkRhdGUoc21hbGxEYXRlKTtcbiAgICBpZiAodG9kYXkgPCB0cmF2RGF0ZSkge1xuICAgICAgdXBjb21pbmdUcmlwc0Fyci5wdXNoKHRyYXZlbGVyVHJpcHNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXN0VHJpcHNBcnIucHVzaCh0cmF2ZWxlclRyaXBzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgcGFzdFRyaXBzQXJyLCB1cGNvbWluZ1RyaXBzQXJyIH07XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0KGZvcm1hdHRlZEVuZERhdGUpIHtcbiAgbGV0IHN0YXJ0ID0gRGF0ZS5VVEMoXG4gICAgZm9ybWF0dGVkRW5kRGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGZvcm1hdHRlZEVuZERhdGUuZ2V0TW9udGgoKSxcbiAgICBmb3JtYXR0ZWRFbmREYXRlLmdldERhdGUoKVxuICApO1xuICByZXR1cm4gc3RhcnQ7XG59XG5cbmZ1bmN0aW9uIGdldEVuZChmb3JtYXR0ZWRTdGFydERhdGUpIHtcbiAgbGV0IGVuZCA9IERhdGUuVVRDKFxuICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZS5nZXRNb250aCgpLFxuICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZS5nZXREYXRlKClcbiAgKTtcbiAgcmV0dXJuIGVuZDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0U3RhcnREYXRlKHRyaXBSZXF1ZXN0U3RhcnREYXRlKSB7XG4gIGxldCBmb3JtYXR0ZWRTdGFydERhdGUgPSBuZXcgRGF0ZSh0cmlwUmVxdWVzdFN0YXJ0RGF0ZSk7XG4gIGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFxuICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZS5nZXRUaW1lKCkgK1xuICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDBcbiAgKTtcbiAgcmV0dXJuIGZvcm1hdHRlZFN0YXJ0RGF0ZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RW5kRGF0ZSh0cmlwUmVxdWVzdEVuZERhdGUpIHtcbiAgbGV0IGZvcm1hdHRlZEVuZERhdGUgPSBuZXcgRGF0ZSh0cmlwUmVxdWVzdEVuZERhdGUpO1xuICBmb3JtYXR0ZWRFbmREYXRlID0gbmV3IERhdGUoXG4gICAgZm9ybWF0dGVkRW5kRGF0ZS5nZXRUaW1lKCkgKyBmb3JtYXR0ZWRFbmREYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMFxuICApO1xuICByZXR1cm4gZm9ybWF0dGVkRW5kRGF0ZTtcbn1cblxuZnVuY3Rpb24gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gIGxldCBmb3JtYXR0ZWRTdGFydERhdGUgPSBmb3JtYXRTdGFydERhdGUoc3RhcnREYXRlKTtcbiAgbGV0IGZvcm1hdHRlZEVuZERhdGUgPSBmb3JtYXRFbmREYXRlKGVuZERhdGUpO1xuICBjb25zdCBvbmVEYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xuICBsZXQgc3RhcnQgPSBnZXRTdGFydChmb3JtYXR0ZWRFbmREYXRlKTtcbiAgbGV0IGVuZCA9IGdldEVuZChmb3JtYXR0ZWRTdGFydERhdGUpO1xuICBsZXQgZGF5c0JldHdlZW4gPSAoc3RhcnQgLSBlbmQpIC8gb25lRGF5O1xuICByZXR1cm4gZGF5c0JldHdlZW47XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBDb3N0KGRlc3RpbmF0aW9uLCB0cmlwUmVxdWVzdERhdGEsIGFsbFRyaXBzKSB7XG4gIGxldCBjb3N0cyA9IGNhbGN1bGF0ZVRyaXBSZXF1ZXN0Q29zdHMoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpO1xuICBsZXQgdG90YWxDb3N0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUb3RhbCBFc3RpbWF0ZWQgVHJpcCBDb3N0OiAkJHtjb3N0cy50b3RhbFRyaXBDb3N0LnRvRml4ZWQoMil9YFxuICApO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKS5hcHBlbmRDaGlsZCh0b3RhbENvc3ROb2RlKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbUlucHV0cygpIHtcbiAgbGV0IHRyaXBSZXF1ZXN0RGVzdGluYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3RpbmF0aW9uXCIpLnZhbHVlO1xuICBsZXQgdHJpcFJlcXVlc3RTdGFydERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpLnZhbHVlO1xuICBsZXQgdHJpcFJlcXVlc3RFbmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRcIikudmFsdWU7XG4gIGxldCBudW1iZXJPZlRyYXZlbGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyLW9mLXRyYXZzXCIpLnZhbHVlO1xuICBsZXQgdmFsdWVzID0ge1xuICAgIHRyaXBSZXF1ZXN0RGVzdGluYXRpb24sXG4gICAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gICAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICAgIG51bWJlck9mVHJhdmVsZXJzLFxuICB9O1xuICByZXR1cm4gdmFsdWVzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVBbmRSZXR1cm5Db3N0cyhcbiAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gIHRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gIGVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24sXG4gIGVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5XG4pIHtcbiAgbGV0IGZsaWdodENvc3RzID0gbnVtYmVyT2ZUcmF2ZWxlcnMgKiBlc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uO1xuICBsZXQgbG9kZ2luZ0Nvc3RzUGVyRGF5ID0gbnVtYmVyT2ZUcmF2ZWxlcnMgKiBlc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgbGV0IHRvdGFsTG9kZ2luZ0Nvc3RzID1cbiAgICBsb2RnaW5nQ29zdHNQZXJEYXkgKiBkYXlzQmV0d2Vlbih0cmlwUmVxdWVzdFN0YXJ0RGF0ZSwgdHJpcFJlcXVlc3RFbmREYXRlKTtcbiAgbGV0IGNvc3RCZWZvcmVBZ2VudEZlZSA9IGZsaWdodENvc3RzICsgdG90YWxMb2RnaW5nQ29zdHM7XG4gIGxldCBhZ2VudEZlZSA9IGNvc3RCZWZvcmVBZ2VudEZlZSAqIDAuMTtcbiAgbGV0IHRvdGFsVHJpcENvc3QgPSBjb3N0QmVmb3JlQWdlbnRGZWUgKyBhZ2VudEZlZTtcbiAgbGV0IGNvc3RzID0ge1xuICAgIGZsaWdodENvc3RzLFxuICAgIGxvZGdpbmdDb3N0c1BlckRheSxcbiAgICB0b3RhbExvZGdpbmdDb3N0cyxcbiAgICBjb3N0QmVmb3JlQWdlbnRGZWUsXG4gICAgYWdlbnRGZWUsXG4gICAgdG90YWxUcmlwQ29zdCxcbiAgfTtcbiAgcmV0dXJuIGNvc3RzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUcmlwUmVxdWVzdENvc3RzKGRlc3RpbmF0aW9uKSB7XG4gIGxldCB2YWx1ZXMgPSBnZXRWYWx1ZXNGcm9tSW5wdXRzKCk7XG4gIGxldCBudW1iZXJPZlRyYXZlbGVycyA9IHZhbHVlcy5udW1iZXJPZlRyYXZlbGVycztcbiAgbGV0IHRyaXBSZXF1ZXN0U3RhcnREYXRlID0gdmFsdWVzLnRyaXBSZXF1ZXN0U3RhcnREYXRlO1xuICBsZXQgdHJpcFJlcXVlc3RFbmREYXRlID0gdmFsdWVzLnRyaXBSZXF1ZXN0RW5kRGF0ZTtcbiAgbGV0IGVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uO1xuICBsZXQgZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgbGV0IGNvc3RzID0gY2FsY3VsYXRlQW5kUmV0dXJuQ29zdHMoXG4gICAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gICAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gICAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICAgIGVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24sXG4gICAgZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXlcbiAgKTtcbiAgcmV0dXJuIGNvc3RzO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUb1JlcXVlc3RGb3JtKGVsZW1lbnQpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0LWZvcm1cIikuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlckxhYmVsKGF0dHJpYnV0ZSwgdGV4dCkge1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBhdHRyaWJ1dGUpO1xuICBsZXQgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG4gIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIHNldElkQW5kQ2xhc3NvZlJlcXVlc3RGb3JtKCk7XG4gIGFwcGVuZFRvUmVxdWVzdEZvcm0obGFiZWwpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJTdGFydERhdGVJbnB1dCh0b2RheSkge1xuICBsZXQgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN0YXJ0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBzdGFydERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0YXJ0XCIpO1xuICBzdGFydERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidHJpcC1zdGFydFwiKTtcbiAgc3RhcnREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7dG9kYXl9YCk7XG4gIHN0YXJ0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCBgJHt0b2RheX1gKTtcbiAgc3RhcnREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMjAyMS0xMi0zMVwiKTtcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybShzdGFydERhdGVJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlclRyaXBFbmRMYWJlbCgpIHtcbiAgbGV0IHRyaXBFbmRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdHJpcEVuZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRyaXAtZW5kXCIpO1xuICBhcHBlbmRUb1JlcXVlc3RGb3JtKHRyaXBFbmRMYWJlbCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlckVuZERhdGVJbnB1dCh0b2RheSkge1xuICBsZXQgZW5kRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGVuZERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVuZFwiKTtcbiAgZW5kRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0cmlwLWVuZFwiKTtcbiAgZW5kRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3RvZGF5fWApO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIGAke3RvZGF5fWApO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMjAyMy0xMi0zMVwiKTtcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybShlbmREYXRlSW5wdXQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEYXRlU2VsZWN0SW5wdXRzKCkge1xuICBjcmVhdGVBbmRSZW5kZXJMYWJlbChcInRyaXAtZHVyYXRpb25cIiwgXCJQbGVhc2Ugc2VsZWN0IGEgc3RhcnQgYW5kIGVuZCBkYXRlOlwiKTtcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgY3JlYXRlQW5kUmVuZGVyU3RhcnREYXRlSW5wdXQodG9kYXkpO1xuICBjcmVhdGVBbmRSZW5kZXJUcmlwRW5kTGFiZWwoKTtcbiAgY3JlYXRlQW5kUmVuZGVyRW5kRGF0ZUlucHV0KHRvZGF5KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVySW5wdXRMaXN0KGxpc3RBdHRyaWJ1dGUsIGlkLCBwbGFjZUhvbGRlcikge1xuICBsZXQgaW5wdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dExpc3Quc2V0QXR0cmlidXRlKFwibGlzdFwiLCBsaXN0QXR0cmlidXRlKTtcbiAgaW5wdXRMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgaW5wdXRMaXN0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlSG9sZGVyKTtcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybShpbnB1dExpc3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJEYXRhTGlzdChpZCkge1xuICBsZXQgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGF0YWxpc3RcIik7XG4gIGRhdGFMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybShkYXRhTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbkFuZFJlbmRlclRvTnVtYmVyT2ZUcmF2ZWxlcnNJbnB1dCgpIHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjA7IGkrKykge1xuICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG51bWJlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHtpfWApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyLW9mLXRyYXZlbGVyc1wiKS5hcHBlbmRDaGlsZChudW1iZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlck51bWJlck9mVHJhdmVsZXJzSW5wdXQoKSB7XG4gIGNyZWF0ZUFuZFJlbmRlckxhYmVsKFwibnVtYmVyLW9mLXRyYXZlbGVyc1wiLCBcIk51bWJlciBvZiBUcmF2ZWxlcnM6XCIpO1xuICBjcmVhdGVBbmRSZW5kZXJJbnB1dExpc3QoXG4gICAgXCJudW1iZXItb2YtdHJhdmVsZXJzXCIsXG4gICAgXCJudW1iZXItb2YtdHJhdnNcIixcbiAgICBcIlNlbGVjdCBudW1iZXIgb2YgdHJhdmVsZXJzXCJcbiAgKTtcbiAgY3JlYXRlQW5kUmVuZGVyRGF0YUxpc3QoXCJudW1iZXItb2YtdHJhdmVsZXJzXCIpO1xuICBjcmVhdGVPcHRpb25BbmRSZW5kZXJUb051bWJlck9mVHJhdmVsZXJzSW5wdXQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uQW5kUmVuZGVyVG9EYXRhTGlzdChsZW5ndGgsIGRlc3RpbmF0aW9ucywgaWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHtkZXN0aW5hdGlvbnNbaV0uZGVzdGluYXRpb259YCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVyTGFiZWxBbmRJbnB1dExpc3QoKSB7XG4gIGNyZWF0ZUFuZFJlbmRlckxhYmVsKFwiZGVzdGluYXRpb24tY2hvaWNlXCIsIFwiU2VhcmNoIGZvciBhIERlc3RpbmF0aW9uOlwiKTtcbiAgY3JlYXRlQW5kUmVuZGVySW5wdXRMaXN0KFxuICAgIFwiZGVzdGluYXRpb24tY2hvaWNlXCIsXG4gICAgXCJkZXN0aW5hdGlvblwiLFxuICAgIFwiU2VhcmNoIGZvciBhIGRlc3RpbmF0aW9uXCJcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRnVsbERlc3RpbmF0aW9uTGlzdChkZXN0aW5hdGlvbnMpIHtcbiAgY3JlYXRlQW5kUmVuZGVyRGF0YUxpc3QoXCJkZXN0aW5hdGlvbi1jaG9pY2VcIik7XG4gIGNyZWF0ZU9wdGlvbkFuZFJlbmRlclRvRGF0YUxpc3QoXG4gICAgZGVzdGluYXRpb25zLmxlbmd0aCxcbiAgICBkZXN0aW5hdGlvbnMsXG4gICAgXCJkZXN0aW5hdGlvbi1jaG9pY2VcIlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEZXN0aW5hdGlvblNlYXJjaEJhcihhbGxUcmlwcywgZGVzdGluYXRpb25zQXJyKSB7XG4gIGxldCBkZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnNBcnI7XG4gIGNyZWF0ZUFuZFJlbmRlckxhYmVsQW5kSW5wdXRMaXN0KCk7XG4gIHJlbmRlckZ1bGxEZXN0aW5hdGlvbkxpc3QoZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT25DbGlja0Z1bmN0aW9uQW5kUmVuZGVyVHJpcChkZXN0aW5hdGlvbnNBcnIsIGFsbFRyaXBzKSB7XG4gIGxldCB0cmlwUmVxdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJpcC1yZXF1ZXN0LWJ1dHRvblwiKTtcbiAgdHJpcFJlcXVlc3RCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVRyaXBSZXF1ZXN0KCkge1xuICAgIGxldCB0cmlwUmVxdWVzdERhdGEgPSBwcmVwYXJlVHJpcFJlcXVlc3REYXRhKGRlc3RpbmF0aW9uc0Fycik7XG4gICAgcmVuZGVyVHJpcFJlcXVlc3QodHJpcFJlcXVlc3REYXRhLCBkZXN0aW5hdGlvbnNBcnIsIGFsbFRyaXBzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2V0SWRBbmRDbGFzc29mUmVxdWVzdEZvcm0oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzJdLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVxdWVzdC1mb3JtXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKVsyXS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhaW5lclwiKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVRyaXBSZXF1ZXN0RGF0YShkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IHZhbHVlcyA9IGdldFZhbHVlc0Zyb21JbnB1dHMoKTtcbiAgbGV0IHRyaXBSZXF1ZXN0RGVzdGluYXRpb24gPSB2YWx1ZXMudHJpcFJlcXVlc3REZXN0aW5hdGlvbjtcbiAgbGV0IG51bWJlck9mVHJhdmVsZXJzID0gdmFsdWVzLm51bWJlck9mVHJhdmVsZXJzO1xuICBsZXQgdHJpcFJlcXVlc3RTdGFydERhdGUgPSB2YWx1ZXMudHJpcFJlcXVlc3RTdGFydERhdGU7XG4gIGxldCB0cmlwUmVxdWVzdEVuZERhdGUgPSB2YWx1ZXMudHJpcFJlcXVlc3RFbmREYXRlO1xuICBsZXQgdHJpcFJlcXVlc3REYXRhID0gcmV0dXJuVHJpcFJlcXVlc3REYXRhKFxuICAgIGRlc3RpbmF0aW9ucyxcbiAgICB0cmlwUmVxdWVzdERlc3RpbmF0aW9uLFxuICAgIG51bWJlck9mVHJhdmVsZXJzLFxuICAgIHRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICAgIHRyaXBSZXF1ZXN0RW5kRGF0ZVxuICApO1xuICByZXR1cm4gdHJpcFJlcXVlc3REYXRhO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwUmVxdWVzdCh0cmlwUmVxdWVzdERhdGEsIGRlc3RpbmF0aW9uc0FyciwgYWxsVHJpcHMpIHtcbiAgbGV0IHZhbHVlcyA9IHNldFZhbHVlc0ZvclRyaXBSZXF1ZXN0KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzdGluYXRpb25zQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHZhbHVlcy50cmlwUmVxdWVzdERlc3RpbmF0aW9uID09PSBkZXN0aW5hdGlvbnNBcnJbaV0uZGVzdGluYXRpb24pIHtcbiAgICAgIGhpZGVSZXF1ZXN0Rm9ybUFuZFNob3dZb3VyVHJpcHNIZWFkZXIoKTtcbiAgICAgIHJlbmRlclRyaXBSZXF1ZXN0RGF0YShcbiAgICAgICAgZGVzdGluYXRpb25zQXJyW2ldLFxuICAgICAgICB0cmlwUmVxdWVzdERhdGEsXG4gICAgICAgIHZhbHVlcy50cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICAgICAgdmFsdWVzLnRyaXBSZXF1ZXN0RW5kRGF0ZSxcbiAgICAgICAgYWxsVHJpcHNcbiAgICAgICk7XG4gICAgICBjcmVhdGVBbmRSZW5kZXJDb25maXJtVHJpcEJ1dHRvbihcbiAgICAgICAgZGVzdGluYXRpb25zQXJyW2ldLFxuICAgICAgICB0cmlwUmVxdWVzdERhdGEsXG4gICAgICAgIGFsbFRyaXBzXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5UcmlwUmVxdWVzdERhdGEoXG4gIGRlc3RpbmF0aW9ucyxcbiAgdHJpcFJlcXVlc3REZXN0aW5hdGlvbixcbiAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gIHRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICB0cmlwUmVxdWVzdEVuZERhdGVcbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RpbmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwUmVxdWVzdERlc3RpbmF0aW9uID09PSBkZXN0aW5hdGlvbnNbaV0uZGVzdGluYXRpb24pIHtcbiAgICAgIGxldCBkZXN0aW5hdGlvbklkZW50aWZpZXIgPSBkZXN0aW5hdGlvbnNbaV0uaWQ7XG4gICAgICBsZXQgdHJpcFJlcXVlc3REYXRhID0ge1xuICAgICAgICBkZXN0aW5hdGlvbklkZW50aWZpZXIsXG4gICAgICAgIHRyaXBSZXF1ZXN0RGVzdGluYXRpb24sXG4gICAgICAgIG51bWJlck9mVHJhdmVsZXJzLFxuICAgICAgICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICAgICAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB0cmlwUmVxdWVzdERhdGE7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlc0ZvclRyaXBSZXF1ZXN0KCkge1xuICBsZXQgdmFsdWVzQmVmb3JlID0gZ2V0VmFsdWVzRnJvbUlucHV0cygpO1xuICBsZXQgdHJpcFJlcXVlc3REZXN0aW5hdGlvbiA9IHZhbHVlc0JlZm9yZS50cmlwUmVxdWVzdERlc3RpbmF0aW9uO1xuICBsZXQgdHJpcFJlcXVlc3RTdGFydERhdGUgPSB2YWx1ZXNCZWZvcmUudHJpcFJlcXVlc3RTdGFydERhdGU7XG4gIGxldCB0cmlwUmVxdWVzdEVuZERhdGUgPSB2YWx1ZXNCZWZvcmUudHJpcFJlcXVlc3RFbmREYXRlO1xuICBsZXQgdmFsdWVzID0ge1xuICAgIHRyaXBSZXF1ZXN0RGVzdGluYXRpb24sXG4gICAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gICAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICB9O1xuICByZXR1cm4gdmFsdWVzO1xufVxuXG5mdW5jdGlvbiByZW5kZXJjb25maXJtVHJpcEJ1dHRvbigpIHtcbiAgbGV0IGNvbmZpcm1UcmlwUmVxdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1UcmlwUmVxdWVzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbmZpcm0tdHJpcC1yZXF1ZXN0LWJ1dHRvblwiKTtcbiAgY29uZmlybVRyaXBSZXF1ZXN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDT05GSVJNIFRSSVBcIjtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0ZWQtdHJpcHNcIilcbiAgICAuYXBwZW5kQ2hpbGQoY29uZmlybVRyaXBSZXF1ZXN0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVyUGFyYWdyYXBoQW5kTm9kZShzdGFydE9yRW5kLCBkYXRlKSB7XG4gIGxldCBkYXRlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgbGV0IGRhdGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYFRyaXAgJHtzdGFydE9yRW5kfSBEYXRlOiAke2RhdGUudG9EYXRlU3RyaW5nKCl9YFxuICApO1xuICBkYXRlUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRhdGVOb2RlKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0ZWQtdHJpcHNcIikuYXBwZW5kQ2hpbGQoZGF0ZVBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVFbGVtZW50cyhmb3JtYXR0ZWRTdGFydERhdGUsIGZvcm1hdHRlZEVuZERhdGUpIHtcbiAgY3JlYXRlQW5kUmVuZGVyUGFyYWdyYXBoQW5kTm9kZShcInN0YXJ0XCIsIGZvcm1hdHRlZFN0YXJ0RGF0ZSk7XG4gIGNyZWF0ZUFuZFJlbmRlclBhcmFncmFwaEFuZE5vZGUoXCJlbmRcIiwgZm9ybWF0dGVkRW5kRGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBSZXF1ZXN0RGVzdGluYXRpb25JbWFnZShkZXN0aW5hdGlvbikge1xuICBsZXQgZGVzdGluYXRpb25JbWFnZSA9IGRlc3RpbmF0aW9uLmltYWdlO1xuICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLmNsYXNzTmFtZSA9IFwiZGVzdGluYXRpb24taW1hZ2VcIjtcbiAgaW1nLnNyYyA9IGAke2Rlc3RpbmF0aW9uSW1hZ2V9YDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0ZWQtdHJpcHNcIikuYXBwZW5kQ2hpbGQoaW1nKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcFJlcXVlc3REYXRhKFxuICBkZXN0aW5hdGlvbixcbiAgdHJpcFJlcXVlc3REYXRhLFxuICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICBhbGxUcmlwc1xuKSB7XG4gIHJlbmRlclRyaXBSZXF1ZXN0RGVzdGluYXRpb25JbWFnZShkZXN0aW5hdGlvbik7XG4gIHJlbmRlckRlc3RpbmF0aW9uTmFtZShkZXN0aW5hdGlvbik7XG4gIHJlbmRlck51bWJlck9mVHJhdmVsZXJzKHRyaXBSZXF1ZXN0RGF0YSk7XG4gIHJlbmRlclN0YXJ0YW5kRW5kRGF0ZSh0cmlwUmVxdWVzdFN0YXJ0RGF0ZSwgdHJpcFJlcXVlc3RFbmREYXRlKTtcbiAgcmVuZGVyVHJpcENvc3QoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpO1xuICByZW5kZXJjb25maXJtVHJpcEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTdGFydGFuZEVuZERhdGUodHJpcFJlcXVlc3RTdGFydERhdGUsIHRyaXBSZXF1ZXN0RW5kRGF0ZSkge1xuICBsZXQgZm9ybWF0dGVkU3RhcnREYXRlID0gZm9ybWF0U3RhcnREYXRlKHRyaXBSZXF1ZXN0U3RhcnREYXRlKTtcbiAgbGV0IGZvcm1hdHRlZEVuZERhdGUgPSBmb3JtYXRFbmREYXRlKHRyaXBSZXF1ZXN0RW5kRGF0ZSk7XG4gIGNyZWF0ZURhdGVFbGVtZW50cyhmb3JtYXR0ZWRTdGFydERhdGUsIGZvcm1hdHRlZEVuZERhdGUpO1xufVxuXG5mdW5jdGlvbiBoaWRlUmVxdWVzdEZvcm1BbmRTaG93WW91clRyaXBzSGVhZGVyKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3QtZm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHJlbmRlclRyaXBzSGVhZGVyKFwiWW91ciBSZXF1ZXN0ZWRcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzNdLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVxdWVzdGVkLXRyaXBzXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJDb25maXJtVHJpcEJ1dHRvbihcbiAgZGVzdGluYXRpb24sXG4gIHRyaXBSZXF1ZXN0RGF0YSxcbiAgYWxsVHJpcHNcbikge1xuICBsZXQgY29uZmlybVRyaXBSZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJjb25maXJtLXRyaXAtcmVxdWVzdC1idXR0b25cIlxuICApO1xuICBjb25maXJtVHJpcFJlcXVlc3RCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIGNvbmZpcm1UcmlwUmVxdWVzdCgpIHtcbiAgICBjb25maXJtQW5kUG9zdFRyaXAoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJEZXN0aW5hdGlvbk5hbWUoZGVzdGluYXRpb24pIHtcbiAgbGV0IGRlc3RpbmF0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUcmlwIERlc3RpbmF0aW9uOiAke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufWBcbiAgKTtcbiAgbGV0IGRlc3RpbmF0aW9uTmFtZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIGRlc3RpbmF0aW9uTmFtZVBhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0aW5hdGlvbk5hbWUpO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKVxuICAgIC5hcHBlbmRDaGlsZChkZXN0aW5hdGlvbk5hbWVQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJOdW1iZXJPZlRyYXZlbGVycygpIHtcbiAgbGV0IHZhbHVlcyA9IGdldFZhbHVlc0Zyb21JbnB1dHMoKTtcbiAgbGV0IG51bU9mVHJhdmVsZXJzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBOdW1iZXIgb2YgVHJhdmVsZXJzOiAke3ZhbHVlcy5udW1iZXJPZlRyYXZlbGVyc31gXG4gICk7XG4gIGxldCBudW1PZlRyYXZlbGVyc1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIG51bU9mVHJhdmVsZXJzUGFyYWdyYXBoLmFwcGVuZENoaWxkKG51bU9mVHJhdmVsZXJzTm9kZSk7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdGVkLXRyaXBzXCIpXG4gICAgLmFwcGVuZENoaWxkKG51bU9mVHJhdmVsZXJzUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gZGF0YVRvSnNvbihcbiAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gIHRyaXBSZXF1ZXN0RW5kRGF0ZSxcbiAgdXNlcklkLFxuICB0cmlwUmVxdWVzdElkLFxuICB0cmlwUmVxdWVzdERhdGFcbikge1xuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIGlkOiBwYXJzZUZsb2F0KHRyaXBSZXF1ZXN0SWQpLFxuICAgIHVzZXJJRDogdXNlcklkLFxuICAgIGRlc3RpbmF0aW9uSUQ6IHRyaXBSZXF1ZXN0RGF0YS5kZXN0aW5hdGlvbklkZW50aWZpZXIsXG4gICAgdHJhdmVsZXJzOiBwYXJzZUZsb2F0KHRyaXBSZXF1ZXN0RGF0YS5udW1iZXJPZlRyYXZlbGVycyksXG4gICAgZGF0ZTogdHJpcFJlcXVlc3RTdGFydERhdGUucmVwbGFjZSgvLS9nLCBcIi9cIiksXG4gICAgZHVyYXRpb246IGRheXNCZXR3ZWVuKHRyaXBSZXF1ZXN0U3RhcnREYXRlLCB0cmlwUmVxdWVzdEVuZERhdGUpLFxuICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW10sXG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gdmFsdWVzVG9Kc29uKHRyYXZlbGVyLCB0cmlwUmVxdWVzdERhdGEsIGFsbFRyaXBzKSB7XG4gIGxldCB2YWx1ZXMgPSBnZXRWYWx1ZXNGcm9tSW5wdXRzKCk7XG4gIGxldCB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSA9IHZhbHVlcy50cmlwUmVxdWVzdFN0YXJ0RGF0ZTtcbiAgbGV0IHRyaXBSZXF1ZXN0RW5kRGF0ZSA9IHZhbHVlcy50cmlwUmVxdWVzdEVuZERhdGU7XG4gIGxldCB1c2VySWQgPSB0cmF2ZWxlci50cmF2ZWxlci5pZDtcbiAgbGV0IHRyaXBSZXF1ZXN0SWQgPSBhbGxUcmlwcy5sZW5ndGggKyAxO1xuICBsZXQgZGF0YSA9IGRhdGFUb0pzb24oXG4gICAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gICAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICAgIHVzZXJJZCxcbiAgICB0cmlwUmVxdWVzdElkLFxuICAgIHRyaXBSZXF1ZXN0RGF0YVxuICApO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hBbmRMb2dSZXNwb25zZShkYXRhKSB7XG4gIGZldGNoKFxuICAgIFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvdHJpcHMvdHJpcHNcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBvciAnUFVUJ1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBkYXRhLFxuICAgIH1cbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBhbGVydChcIlN1Y2Nlc3MhXCIsIGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgYWxlcnQoXCJFcnJvciFcIiwgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclNlYXJjaEZvcm1JbnB1dHMoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdGluYXRpb25cIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlci1vZi10cmF2c1wiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIikudmFsdWU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kXCIpLnZhbHVlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDb25maXJtZWRUcmlwQW5kQ2xlYXJTZWFyY2hGb3JtKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdC1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICBjbGVhclNlYXJjaEZvcm1JbnB1dHMoKTtcbn1cblxuZnVuY3Rpb24gY29uZmlybUFuZFBvc3RUcmlwKGRlc3RpbmF0aW9uLCB0cmlwUmVxdWVzdERhdGEsIGFsbFRyaXBzKSB7XG4gIHRyYXZlbF90cmFja2VyX3NlcnZpY2VcbiAgICAuZ2V0U2luZ2xlVHJhdmVsZXIoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgbGV0IHRyYXZlbGVyID0gcmVzdWx0O1xuICAgICAgbGV0IGRhdGEgPSB2YWx1ZXNUb0pzb24odHJhdmVsZXIsIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpO1xuICAgICAgZmV0Y2hBbmRMb2dSZXNwb25zZShkYXRhKTtcbiAgICB9KTtcbiAgcmVtb3ZlQ29uZmlybWVkVHJpcEFuZENsZWFyU2VhcmNoRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBzZXRMb2dPdXRCdXR0b25BdHRyaWJ1dGUobG9nT3V0QnV0dG9uKSB7XG4gIGxvZ091dEJ1dHRvbi5pZCA9IFwibG9nLW91dC1idXR0b25cIjtcbiAgbG9nT3V0QnV0dG9uLmNsYXNzTmFtZSA9IFwiYnV0dG9uXCI7XG4gIGxvZ091dEJ1dHRvbi5pbm5lckhUTUwgPSBcIkxPR09VVFwiO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRMb2dPdXRCdXR0b25BbmRTZXRPbkNsaWNrKGxvZ091dEJ1dHRvbikge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWZvcm1cIikuYXBwZW5kKGxvZ091dEJ1dHRvbik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nLW91dC1idXR0b25cIikub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwibG9nLW91dC1idXR0b25cIlxuICAgICkub25jbGljayA9IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTG9nT3V0QnV0dG9uKCkge1xuICBsZXQgbG9nT3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2V0TG9nT3V0QnV0dG9uQXR0cmlidXRlKGxvZ091dEJ1dHRvbik7XG4gIGFwcGVuZExvZ091dEJ1dHRvbkFuZFNldE9uQ2xpY2sobG9nT3V0QnV0dG9uKTtcbn1cblxuZXhwb3J0IHtcbiAgcmVuZGVyVHJpcHNIZWFkZXIsXG4gIGdldFBlbmRpbmdUcmlwcyxcbiAgZ2V0VG9kYXlzVHJpcHMsXG4gIHJldHVybkN1cnJlbnREYXRlLFxuICBhcHBlbmRUb1NlY3Rpb24sXG4gIHJlbmRlclRyaXBEYXRlLFxuICByZW5kZXJUcmlwRGVzdGluYXRpb24sXG4gIHJlbmRlclRyaXBTdGF0dXMsXG4gIHJlbmRlclRyaXBEdXJhdGlvbixcbiAgcmVuZGVyRGVzdGluYXRpb25JbWFnZSxcbiAgcmVuZGVyVHJpcHMsXG4gIGZpbHRlclBhc3RBbmRVcGNvbWluZ1RyaXBzLFxuICByZXR1cm5UcmF2RGF0ZSxcbiAgZGF5c0JldHdlZW4sXG4gIGZvcm1hdEVuZERhdGUsXG4gIGZvcm1hdFN0YXJ0RGF0ZSxcbiAgcmVuZGVyVHJpcENvc3QsXG4gIGdldFZhbHVlc0Zyb21JbnB1dHMsXG4gIHJlbmRlckRlc3RpbmF0aW9uU2VhcmNoQmFyLFxuICByZW5kZXJEYXRlU2VsZWN0SW5wdXRzLFxuICBhcHBlbmRUb1JlcXVlc3RGb3JtLFxuICByZW5kZXJOdW1iZXJPZlRyYXZlbGVyc0lucHV0LFxuICBjcmVhdGVPbkNsaWNrRnVuY3Rpb25BbmRSZW5kZXJUcmlwLFxuICByZW5kZXJMb2dPdXRCdXR0b24sXG59O1xuIiwiaW1wb3J0IFwiLi9jc3MvYmFzZS5zY3NzXCI7XG5pbXBvcnQgKiBhcyB0cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlIGZyb20gXCIuL3RyYXZlbF90cmFja2VyX3NlcnZpY2UuanNcIjtcbmltcG9ydCAqIGFzIHRyYXZlbGVyX2Rhc2hib2FyZF9oZWxwZXIgZnJvbSBcIi4vdHJhdmVsZXJfZGFzaGJvYXJkX2hlbHBlclwiO1xuaW1wb3J0ICogYXMgYWdlbnRfZGFzaGJvYXJkX2hlbHBlciBmcm9tIFwiLi9hZ2VudF9kYXNoYm9hcmRfaGVscGVyXCI7XG5pbXBvcnQgKiBhcyBsb2dpbl9oZWxwZXIgZnJvbSBcIi4vbG9naW5faGVscGVyXCI7XG5pbXBvcnQgKiBhcyBzdHlsaW5nIGZyb20gXCIuL3N0eWxpbmdfaGVscGVyXCI7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5vbmxvYWQgPSBzdHlsaW5nLnN0eWxlSG9tZVBhZ2UoKTtcblxubGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuXG5idXR0b24ub25jbGljayA9IGZ1bmN0aW9uIHByb2Nlc3NMb2dpbigpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2VcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBsZXQgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdXNlcm5hbWVcIikudmFsdWU7XG4gIGxldCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wYXNzd29yZFwiKS52YWx1ZTtcbiAgaWYgKGxvZ2luX2hlbHBlci5pc1ZhbGlkUGFzc3dvcmQocGFzc3dvcmRJbnB1dCkpIHtcbiAgICB0cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlXG4gICAgICAuaXNWYWxpZFRyYXZlbGVyKHVzZXJuYW1lSW5wdXQpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICB2YXIgdHJhdmVsZXJJZCA9IHVzZXJuYW1lSW5wdXQuc2xpY2UoOCk7XG4gICAgICAgICAgdHJhdmVsX3RyYWNrZXJfc2VydmljZVxuICAgICAgICAgICAgLmdldFNpbmdsZVRyYXZlbGVyKHRyYXZlbGVySWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGxldCB0cmF2ZWxlciA9IHJlc3VsdC50cmF2ZWxlcjtcbiAgICAgICAgICAgICAgdHJhdmVsX3RyYWNrZXJfc2VydmljZVxuICAgICAgICAgICAgICAgIC5nZXRUcmF2ZWxlclRyaXBzKHRyYXZlbGVyKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIGxldCB0cmF2ZWxlclRyaXBzID0gcmVzdWx0LnRyYXZlbGVyVHJpcHM7XG4gICAgICAgICAgICAgICAgICB0cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5nZXRUcmF2ZWxlckRlc3RpbmF0aW9ucyh0cmF2ZWxlclRyaXBzLCB0cmF2ZWxlcilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBkZXN0aW5hdGlvbnMgPSByZXN1bHQudHJhdmVsZXJEZXN0aW5hdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHRyaXBzID0gcmVzdWx0LnRyYXZlbGVyVHJpcHM7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHRyYXZlbGVyRGFzaGJvYXJkRGF0YSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmF2ZWxlcl9kYXNoYm9hcmRfaGVscGVyLnByZXBhcmVUcmF2ZWxlckRhc2hib2FyZERhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYXZlbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyaXBzXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIHRyYXZlbGVyX2Rhc2hib2FyZF9oZWxwZXIucmVuZGVyVHJhdmVsZXJEYXNoYm9hcmQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmF2ZWxlckRhc2hib2FyZERhdGFcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGxvZ2luX2hlbHBlci5pc1ZhbGlkQWdlbmN5KHVzZXJuYW1lSW5wdXQpKSB7XG4gICAgICAgICAgYWdlbnRfZGFzaGJvYXJkX2hlbHBlci5yZW5kZXJTdWNjZXNzZnVsQWdlbmN5TG9naW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2dpbl9oZWxwZXIubG9naW5FcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBsb2dpbl9oZWxwZXIubG9naW5FcnJvcigpO1xuICB9XG59O1xuIiwiZnVuY3Rpb24gaXNWYWxpZFBhc3N3b3JkKHBhc3N3b3JkSW5wdXQpIHtcbiAgdmFyIGNvcnJlY3RQdyA9IFwidHJhdmVsMjAyMFwiO1xuICBpZiAocGFzc3dvcmRJbnB1dCA9PT0gY29ycmVjdFB3KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZEFnZW5jeSh1c2VybmFtZUlucHV0KSB7XG4gIGxldCBhZ2VudFVuID0gXCJhZ2VuY3lcIjtcbiAgdmFyIGRvd25jYXNlZFVzZXJuYW1lSW5wdXQgPSB1c2VybmFtZUlucHV0LnRvTG93ZXJDYXNlKCk7XG4gIGlmIChkb3duY2FzZWRVc2VybmFtZUlucHV0ID09PSBhZ2VudFVuKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJMb2dpbkZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdXNlcm5hbWVcIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXBhc3N3b3JkXCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gbG9naW5FcnJvcigpIHtcbiAgYWxlcnQoXCJMb2dpbiBVbnN1Y2Nlc3NmdWwhXCIpO1xuICBjbGVhckxvZ2luRm9ybSgpO1xufVxuXG5leHBvcnQgeyBpc1ZhbGlkUGFzc3dvcmQsIGlzVmFsaWRBZ2VuY3ksIGNsZWFyTG9naW5Gb3JtLCBsb2dpbkVycm9yIH07XG4iLCJpbXBvcnQgKiBhcyB0cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlIGZyb20gXCIuL3RyYXZlbF90cmFja2VyX3NlcnZpY2VcIjtcblxuZnVuY3Rpb24gc2V0QmFja2dyb3VuZEltYWdlQW5kSDFPcGFjaXR5KGRlc3RpbmF0aW9uKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiaDEtZGl2XCJcbiAgKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGVzdGluYXRpb24uaW1hZ2V9KWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlLWgxXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjEuMFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZS1oMVwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgIFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlLWgxXCIpLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNmZmZcIjtcbn1cblxuZnVuY3Rpb24gc2V0UmFuZG9tQmFja2dyb3VuZEltYWdlKGRlc3RpbmF0aW9ucykge1xuICBsZXQgZGVzdGluYXRpb24gPVxuICAgIGRlc3RpbmF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZXN0aW5hdGlvbnMubGVuZ3RoKV07XG4gIHNldEJhY2tncm91bmRJbWFnZUFuZEgxT3BhY2l0eShkZXN0aW5hdGlvbik7XG4gIGxldCByYW5kb21EZXN0aW5hdGlvbkltYWdlID0gZGVzdGluYXRpb24uaW1hZ2U7XG4gIHJldHVybiByYW5kb21EZXN0aW5hdGlvbkltYWdlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXZzQW5kU2V0SWRzQ2xhc3MocmVzdWx0KSB7XG4gIGxldCBkZXN0aW5hdGlvbnMgPSByZXN1bHQ7XG4gIGxldCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBoMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGgxRGl2LmlkID0gXCJoMS1kaXZcIjtcbiAgaG9tZVBhZ2UuY2xhc3NOYW1lID0gXCJob21lLXBhZ2VcIjtcbiAgaG9tZVBhZ2UuaWQgPSBcImhvbWUtcGFnZVwiO1xuICByZXR1cm4geyBkZXN0aW5hdGlvbnMsIGgxRGl2LCBob21lUGFnZSB9O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRIb21lUGFnZURhdGEoXG4gIGgxVGV4dCxcbiAgaG9tZVBhZ2VIMSxcbiAgZGVzdEgxRGl2SG9tZVBhZ2UsXG4gIGRlc3RpbmF0aW9uc1xuKSB7XG4gIGhvbWVQYWdlSDEuYXBwZW5kQ2hpbGQoaDFUZXh0KTtcbiAgZGVzdEgxRGl2SG9tZVBhZ2UuaDFEaXYuYXBwZW5kQ2hpbGQoaG9tZVBhZ2VIMSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGRlc3RIMURpdkhvbWVQYWdlLmgxRGl2KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQoZGVzdEgxRGl2SG9tZVBhZ2UuaG9tZVBhZ2UpO1xuICBzZXRSYW5kb21CYWNrZ3JvdW5kSW1hZ2UoZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyQW5kU2V0QmFja2dyb3VuZEltZyhyZXN1bHQpIHtcbiAgbGV0IGRlc3RIMURpdkhvbWVQYWdlID0gY3JlYXRlRGl2c0FuZFNldElkc0NsYXNzKHJlc3VsdCk7XG4gIGxldCBkZXN0aW5hdGlvbnMgPSBkZXN0SDFEaXZIb21lUGFnZS5kZXN0aW5hdGlvbnM7XG4gIGxldCBob21lUGFnZUgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBob21lUGFnZUgxLmlkID0gXCJob21lLXBhZ2UtaDFcIjtcbiAgbGV0IGgxVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiV2hlcmUgd291bGQgeW91IGxpa2UgdG8gZ28/XCIpO1xuICBhcHBlbmRIb21lUGFnZURhdGEoaDFUZXh0LCBob21lUGFnZUgxLCBkZXN0SDFEaXZIb21lUGFnZSwgZGVzdGluYXRpb25zKTtcbiAgcmV0dXJuIGRlc3RpbmF0aW9ucztcbn1cblxuZnVuY3Rpb24gcmVuZGVyRGVzdGluYXRpb25JbWFnZXMoZGVzdGluYXRpb25zKSB7XG4gIGxldCBpbWFnZUFuZE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAoaW1hZ2VBbmROYW1lRGl2Lm9uY2xpY2sgPSBcImhyZWZcIiksIFwiYWxlcnQoSEVZKVwiO1xuICBpbWFnZUFuZE5hbWVEaXYuY2xhc3NOYW1lID0gXCJpbWFnZS1hbmQtbmFtZS1kaXZcIjtcbiAgbGV0IGRlc3RpbmF0aW9uID1cbiAgICBkZXN0aW5hdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVzdGluYXRpb25zLmxlbmd0aCldO1xuICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLmNsYXNzTmFtZSA9IFwiaG9tZS1kZXN0aW5hdGlvbi1pbWFnZVwiO1xuICBpbWcuc3JjID0gYCR7ZGVzdGluYXRpb24uaW1hZ2V9YDtcbiAgcmV0dXJuIHsgZGVzdGluYXRpb24sIGltYWdlQW5kTmFtZURpdiwgaW1nIH07XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEltYWdlQW5kTmFtZShkZXN0aW5hdGlvbiwgZGVzdGluYXRpb25OYW1lLCBwYXJhZ3JhcGgpIHtcbiAgbGV0IGRlc3RpbmF0aW9uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2Rlc3RpbmF0aW9uTmFtZX1gKTtcbiAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3RpbmF0aW9uTm9kZSk7XG4gIGRlc3RpbmF0aW9uLmltYWdlQW5kTmFtZURpdi5hcHBlbmRDaGlsZChkZXN0aW5hdGlvbi5pbWcpO1xuICBkZXN0aW5hdGlvbi5pbWFnZUFuZE5hbWVEaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2VcIikuYXBwZW5kQ2hpbGQoZGVzdGluYXRpb24uaW1hZ2VBbmROYW1lRGl2KTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVEZXN0aW5hdGlvbnNBbmROYW1lcyhkZXN0aW5hdGlvbnMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0aW5hdGlvbnMubGVuZ3RoIC0gNDQ7IGkrKykge1xuICAgIGxldCBkZXN0aW5hdGlvbiA9IHJlbmRlckRlc3RpbmF0aW9uSW1hZ2VzKGRlc3RpbmF0aW9ucyk7XG4gICAgbGV0IGRlc3RpbmF0aW9uTmFtZSA9IGRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uO1xuICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xuICAgIHBhcmFncmFwaC5jbGFzc05hbWUgPSBcImhvbWUtZGVzdGluYXRpb24tbmFtZVwiO1xuICAgIGFwcGVuZEltYWdlQW5kTmFtZShkZXN0aW5hdGlvbiwgZGVzdGluYXRpb25OYW1lLCBwYXJhZ3JhcGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0eWxlSG9tZVBhZ2UoKSB7XG4gIHRyYXZlbF90cmFja2VyX3NlcnZpY2UuZ2V0QWxsRGVzdGluYXRpb25zKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgbGV0IGRlc3RpbmF0aW9ucyA9IGNyZWF0ZUhlYWRlckFuZFNldEJhY2tncm91bmRJbWcocmVzdWx0KTtcbiAgICBwb3B1bGF0ZURlc3RpbmF0aW9uc0FuZE5hbWVzKGRlc3RpbmF0aW9ucyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdHlsZVRyYXZlbGVyUGFnZSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItc2VjdGlvblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlLWgxXCIpLnN0eWxlLnBhZGRpbmcgPSBcIjIlXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlLWgxXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2UtaDFcIikuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIwIDAgMjBweCAyMHB4XCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlLWgxXCIpLnN0eWxlLm1hcmdpblRvcCA9IFwiMFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImgxLWRpdlwiKS5zdHlsZS5wYWRkaW5nID0gXCIyMCVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoMS1kaXZcIikuc3R5bGUubWFyZ2luVG9wID0gXCItNSVcIjtcbiAgcGxhY2VMb2dPdXRCdXR0b24oKTtcbiAgc3R5bGVMb2dPdXRCdXR0b24oKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoMS1kaXZcIikuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IFwiMWZyIDFmclwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZS1oMVwiKS5zdHlsZS5ncmlkUm93ID0gXCIyXCI7XG59XG5cbmZ1bmN0aW9uIHRyYXZlbGVyTWVkaWFRdWVyeSgpIHtcbiAgZnVuY3Rpb24gbXlGdW5jdGlvbih4KSB7XG4gICAgaWYgKHgubWF0Y2hlcykge1xuICAgICAgc3R5bGVUcmF2ZWxlclBhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICB2YXIgeCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDI1NXB4KVwiKTtcbiAgbXlGdW5jdGlvbih4KTtcbiAgeC5hZGRMaXN0ZW5lcihteUZ1bmN0aW9uKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VMb2dPdXRCdXR0b24oKSB7XG4gIGxldCBsb2dPdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZy1vdXQtYnV0dG9uXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImgxLWRpdlwiKS5hcHBlbmRDaGlsZChsb2dPdXRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBzZXRIMVN0eWxlKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImgxLWRpdlwiKS5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoMS1kaXZcIikuc3R5bGUucGFkZGluZyA9IFwiMTUlXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlLWgxXCIpLnN0eWxlLnBhZGRpbmcgPSBcIjIlXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlLWgxXCIpLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMCAwIDIwcHggMjBweFwiO1xufVxuXG5mdW5jdGlvbiBzZXRMb2dJbkZvcm1TdHlsZSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2ctb3V0LWJ1dHRvblwiKS5zdHlsZS5wYWRkaW5nID0gXCIxJVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZy1vdXQtYnV0dG9uXCIpLnN0eWxlLm1hcmdpblRvcCA9IFwiMjVweFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZy1vdXQtYnV0dG9uXCIpLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjVweFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWZvcm1cIikuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjUlXCI7XG59XG5cbmZ1bmN0aW9uIHN0eWxlVHJhdmVsZXJQYWdlRm9yNzY4KCkge1xuICBzZXRIMVN0eWxlKCk7XG4gIHNldExvZ0luRm9ybVN0eWxlKCk7XG59XG5cbmZ1bmN0aW9uIHRyYXZlbGVyTWVkaWFRdWVyeTc2OCgpIHtcbiAgZnVuY3Rpb24gbXlGdW5jdGlvbih5KSB7XG4gICAgaWYgKHkubWF0Y2hlcykge1xuICAgICAgc3R5bGVUcmF2ZWxlclBhZ2VGb3I3NjgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICB2YXIgeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY4cHgpXCIpO1xuICBteUZ1bmN0aW9uKHkpO1xuICB5LmFkZExpc3RlbmVyKG15RnVuY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBzdHlsZUxvZ091dEJ1dHRvbigpIHtcbiAgbGV0IGxvZ091dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nLW91dC1idXR0b25cIik7XG4gIGxvZ091dEJ1dHRvbi5zdHlsZS5oZWlnaHQgPSBcImZpdC1jb250ZW50XCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaDEtZGl2XCIpLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBcIjFmclwiO1xufVxuXG5mdW5jdGlvbiBzdHlsZUFnZW50SGVhZGVyKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1zZWN0aW9uXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgc3R5bGVMb2dPdXRCdXR0b24oKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoMS1kaXZcIikuc3R5bGUucGFkZGluZyA9IFwiMTUlXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnQtaGVhZGVyXCIpLnN0eWxlLnBhZGRpbmcgPSBcIjIlXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnQtaGVhZGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudC1oZWFkZXJcIikuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIwIDAgMjBweCAyMHB4XCI7XG59XG5cbmZ1bmN0aW9uIHN0eWxlQWdlbnRQYWdlKCkge1xuICBwbGFjZUxvZ091dEJ1dHRvbigpO1xuICBzdHlsZUFnZW50SGVhZGVyKCk7XG59XG5cbmZ1bmN0aW9uIGFnZW50TWVkaWFRdWVyeSgpIHtcbiAgZnVuY3Rpb24gbXlGdW5jdGlvbih4KSB7XG4gICAgaWYgKHgubWF0Y2hlcykge1xuICAgICAgc3R5bGVBZ2VudFBhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICB2YXIgeCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNDI1cHgpXCIpO1xuICBteUZ1bmN0aW9uKHgpO1xuICB4LmFkZExpc3RlbmVyKG15RnVuY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBzdHlsZUFnZW50SDFhbmRIZWFkZXIoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaDEtZGl2XCIpLnN0eWxlLm1hcmdpblRvcCA9IFwiMFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImgxLWRpdlwiKS5zdHlsZS5wYWRkaW5nID0gXCIxNSVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudC1oZWFkZXJcIikuc3R5bGUucGFkZGluZyA9IFwiMiVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudC1oZWFkZXJcIikuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIwIDAgMjBweCAyMHB4XCI7XG59XG5cbmZ1bmN0aW9uIHN0eWxlQWdlbnRMb2dPdXRCdXR0b24oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nLW91dC1idXR0b25cIikuc3R5bGUucGFkZGluZyA9IFwiMSVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2ctb3V0LWJ1dHRvblwiKS5zdHlsZS5tYXJnaW5Ub3AgPSBcIjI1cHhcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2ctb3V0LWJ1dHRvblwiKS5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI1cHhcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1mb3JtXCIpLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI1JVwiO1xufVxuXG5mdW5jdGlvbiBzdHlsZUFnZW50UGFnZUZvcjc2OCgpIHtcbiAgc3R5bGVBZ2VudEgxYW5kSGVhZGVyKCk7XG4gIHN0eWxlQWdlbnRMb2dPdXRCdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gYWdlbnRNZWRpYVF1ZXJ5NzY4KCkge1xuICBmdW5jdGlvbiBteUZ1bmN0aW9uKHkpIHtcbiAgICBpZiAoeS5tYXRjaGVzKSB7XG4gICAgICBzdHlsZUFnZW50UGFnZUZvcjc2OCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHZhciB5ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjhweClcIik7XG4gIG15RnVuY3Rpb24oeSk7XG4gIHkuYWRkTGlzdGVuZXIobXlGdW5jdGlvbik7XG59XG5cbmV4cG9ydCB7XG4gIHN0eWxlSG9tZVBhZ2UsXG4gIHRyYXZlbGVyTWVkaWFRdWVyeSxcbiAgdHJhdmVsZXJNZWRpYVF1ZXJ5NzY4LFxuICBhZ2VudE1lZGlhUXVlcnksXG4gIGFnZW50TWVkaWFRdWVyeTc2OCxcbn07XG4iLCJhc3luYyBmdW5jdGlvbiBpc1ZhbGlkVHJhdmVsZXIodXNlcm5hbWVJbnB1dCkge1xuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXJcIjtcbiAgY29uc3QgdHJhdmVsZXJzVXJsID0gYmFzZVVybCArIFwiL2RhdGEvdHJhdmVsZXJzL3RyYXZlbGVyc1wiO1xuICBjb25zdCB1c2VySWQgPSB1c2VybmFtZUlucHV0LnNsaWNlKDgpO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0cmF2ZWxlcnNVcmwpO1xuICBsZXQgYXdhaXRSZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGxldCB0cmF2ZWxlcnMgPSBhd2FpdFJlcy50cmF2ZWxlcnM7XG4gIGxldCBpZFRvTnVtID0gTnVtYmVyKHVzZXJJZCk7XG4gIGxldCBpZHNBcnJheSA9IFtdO1xuICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgdHJhdmVsZXJzLmZvckVhY2goKHRyYXZlbGVyKSA9PiB7XG4gICAgaWRzQXJyYXkucHVzaCh0cmF2ZWxlci5pZCk7XG4gIH0pO1xuICBpZHNBcnJheS5mb3JFYWNoKChpZCkgPT4ge1xuICAgIGlmIChpZFRvTnVtID09PSBpZCkge1xuICAgICAgdmFsaWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB2YWxpZDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVHJhdmVsZXJzKCkge1xuICBsZXQgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvXCI7XG4gIGxldCB0cmF2ZWxlcnNVcmwgPSBcInRyYXZlbGVycy90cmF2ZWxlcnNcIjtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmFzZVVybCArIHRyYXZlbGVyc1VybCk7XG4gIGxldCB0cmF2ZWxlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB0cmF2ZWxlcnM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNpbmdsZVRyYXZlbGVyKCkge1xuICBsZXQgZnVsbFVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC11c2VybmFtZVwiKTtcbiAgY29uc3QgdHJhdmVsZXJJZE51bWJlciA9IGZ1bGxVc2VybmFtZS52YWx1ZS5zbGljZSg4KTtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IHNpbmdsZVRyYXZlbGVyVXJsID1cbiAgICBiYXNlVXJsICsgYC9kYXRhL3RyYXZlbGVycy90cmF2ZWxlcnMvJHt0cmF2ZWxlcklkTnVtYmVyfWA7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNpbmdsZVRyYXZlbGVyVXJsKTtcbiAgbGV0IHRyYXZlbGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4geyB0cmF2ZWxlciB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUcmF2ZWxlclRyaXBzKHRyYXZlbGVyKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlclwiO1xuICBjb25zdCB0cmF2ZWxlclRyaXBzVXJsID0gYmFzZVVybCArIFwiL2RhdGEvdHJpcHMvdHJpcHNcIjtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godHJhdmVsZXJUcmlwc1VybCk7XG4gIGxldCB0cmlwQXJyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBsZXQgdHJpcHMgPSB0cmlwQXJyLnRyaXBzO1xuICBsZXQgdHJhdmVsZXJUcmlwcyA9IFtdO1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRyaXAgPSB0cmlwc1tpXTtcbiAgICBpZiAodHJhdmVsZXIuaWQgPT09IHRyaXAudXNlcklEKSB7XG4gICAgICB0cmF2ZWxlclRyaXBzLnB1c2godHJpcCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHRyYXZlbGVyVHJpcHMsIHRyYXZlbGVyIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRyYXZlbGVyRGVzdGluYXRpb25zKHRyYXZlbGVyVHJpcHMsIHRyYXZlbGVyKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlclwiO1xuICBjb25zdCB0cmF2ZWxlckRlc3RpbmF0aW9uc1VybCA9IGJhc2VVcmwgKyBcIi9kYXRhL2Rlc3RpbmF0aW9ucy9kZXN0aW5hdGlvbnNcIjtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godHJhdmVsZXJEZXN0aW5hdGlvbnNVcmwpO1xuICBsZXQgZGVzdGluYXRpb25zUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGxldCBkZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnNSZXNwb25zZS5kZXN0aW5hdGlvbnM7XG4gIGxldCB0cmlwRGVzdGluYXRpb25JZHMgPSBbXTtcbiAgbGV0IHRyYXZlbGVyRGVzdGluYXRpb25zID0gW107XG4gIHRyYXZlbGVyVHJpcHMuZm9yRWFjaCgodHJpcCkgPT4gdHJpcERlc3RpbmF0aW9uSWRzLnB1c2godHJpcC5kZXN0aW5hdGlvbklEKSk7XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXBEZXN0aW5hdGlvbklkcy5pbmNsdWRlcyhkZXN0aW5hdGlvbnNbaV0uaWQpKSB7XG4gICAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucy5wdXNoKGRlc3RpbmF0aW9uc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHRyYXZlbGVyVHJpcHMsIHRyYXZlbGVyLCB0cmF2ZWxlckRlc3RpbmF0aW9ucyB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxUcmlwcygpIHtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IGFnZW50VHJpcHNVcmwgPSBiYXNlVXJsICsgXCIvZGF0YS90cmlwcy90cmlwc1wiO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhZ2VudFRyaXBzVXJsKTtcbiAgbGV0IGF3YWl0ZWRSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgbGV0IGFsbFRyaXBzID0gYXdhaXRlZFJlc3BvbnNlLnRyaXBzO1xuICByZXR1cm4gYWxsVHJpcHM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbERlc3RpbmF0aW9ucygpIHtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IGFnZW50RGVzdGluYXRpb25zVXJsID0gYmFzZVVybCArIFwiL2RhdGEvZGVzdGluYXRpb25zL2Rlc3RpbmF0aW9uc1wiO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhZ2VudERlc3RpbmF0aW9uc1VybCk7XG4gIGxldCBkZXN0aW5hdGlvbnNSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgbGV0IGFsbERlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uc1Jlc3BvbnNlLmRlc3RpbmF0aW9ucztcbiAgcmV0dXJuIGFsbERlc3RpbmF0aW9ucztcbn1cblxuZXhwb3J0IHtcbiAgaXNWYWxpZFRyYXZlbGVyLFxuICBnZXRTaW5nbGVUcmF2ZWxlcixcbiAgZ2V0VHJhdmVsZXJUcmlwcyxcbiAgZ2V0VHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gIGdldEFsbFRyaXBzLFxuICBnZXRBbGxEZXN0aW5hdGlvbnMsXG4gIGdldEFsbFRyYXZlbGVycyxcbn07XG4iLCJpbXBvcnQgKiBhcyB0cmF2ZWxUcmFja2VyU2VydmljZSBmcm9tIFwiLi90cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBkYXNoYm9hcmRIZWxwZXIgZnJvbSBcIi4vZGFzaGJvYXJkX2hlbHBlclwiO1xuaW1wb3J0ICogYXMgc3R5bGluZyBmcm9tIFwiLi9zdHlsaW5nX2hlbHBlclwiO1xuXG5mdW5jdGlvbiByZW5kZXJUcmlwUmVxdWVzdEJ1dHRvbigpIHtcbiAgbGV0IHRyaXBSZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdHJpcFJlcXVlc3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0cmlwLXJlcXVlc3QtYnV0dG9uXCIpO1xuICB0cmlwUmVxdWVzdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ0FMQ1VMQVRFXCI7XG4gIGRhc2hib2FyZEhlbHBlci5hcHBlbmRUb1JlcXVlc3RGb3JtKHRyaXBSZXF1ZXN0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUmVxdWVzdEZvcm1FbGVtZW50cyhkZXN0aW5hdGlvbnNBcnIsIGFsbFRyaXBzKSB7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJOdW1iZXJPZlRyYXZlbGVyc0lucHV0KCk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJEYXRlU2VsZWN0SW5wdXRzKCk7XG4gIHJlbmRlclRyaXBSZXF1ZXN0QnV0dG9uKCk7XG4gIGRhc2hib2FyZEhlbHBlci5jcmVhdGVPbkNsaWNrRnVuY3Rpb25BbmRSZW5kZXJUcmlwKGRlc3RpbmF0aW9uc0FyciwgYWxsVHJpcHMpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmF2ZWxlclRyaXBSZXF1ZXN0Rm9ybSgpIHtcbiAgdHJhdmVsVHJhY2tlclNlcnZpY2UuZ2V0QWxsVHJpcHMoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBsZXQgYWxsVHJpcHMgPSByZXN1bHQ7XG4gICAgdHJhdmVsVHJhY2tlclNlcnZpY2UuZ2V0QWxsRGVzdGluYXRpb25zKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBsZXQgZGVzdGluYXRpb25zQXJyID0gcmVzdWx0O1xuICAgICAgZGFzaGJvYXJkSGVscGVyLnJlbmRlckRlc3RpbmF0aW9uU2VhcmNoQmFyKGFsbFRyaXBzLCBkZXN0aW5hdGlvbnNBcnIpO1xuICAgICAgcmVuZGVyUmVxdWVzdEZvcm1FbGVtZW50cyhkZXN0aW5hdGlvbnNBcnIsIGFsbFRyaXBzKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvcFNlY3Rpb25PZkRhc2hib2FyZCh0cmF2ZWxlckRhc2hib2FyZERhdGEpIHtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlckxvZ091dEJ1dHRvbigpO1xuICByZW5kZXJUcmF2ZWxlcldlbGNvbWUodHJhdmVsZXJEYXNoYm9hcmREYXRhLnRyYXZlbGVyKTtcbiAgcmVuZGVyVG90YWxTcGVudCh0cmF2ZWxlckRhc2hib2FyZERhdGEpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJVcGNvbWluZ1wiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcHNBbmRSZXF1ZXN0Rm9ybSh0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwcyh0cmlwcy51cGNvbWluZ1RyaXBzQXJyLCBkZXN0aW5hdGlvbnMpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJQYXN0XCIpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHModHJpcHMucGFzdFRyaXBzQXJyLCBkZXN0aW5hdGlvbnMpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJSZXF1ZXN0XCIpO1xuICByZW5kZXJUcmF2ZWxlclRyaXBSZXF1ZXN0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmF2ZWxlckRhc2hib2FyZCh0cmF2ZWxlckRhc2hib2FyZERhdGEpIHtcbiAgcmVuZGVyVG9wU2VjdGlvbk9mRGFzaGJvYXJkKHRyYXZlbGVyRGFzaGJvYXJkRGF0YSk7XG4gIGxldCB0cmlwcyA9IGZpbHRlclBhc3RBbmRVcGNvbWluZ1RyaXBzKHRyYXZlbGVyRGFzaGJvYXJkRGF0YS50cmF2ZWxlclRyaXBzKTtcbiAgbGV0IGRlc3RpbmF0aW9ucyA9IHRyYXZlbGVyRGFzaGJvYXJkRGF0YS50cmF2ZWxlckRlc3RpbmF0aW9ucztcbiAgcmVuZGVyVHJpcHNBbmRSZXF1ZXN0Rm9ybSh0cmlwcywgZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gbWFrZVBhc3RBbmRVcGNvbWluZ1RyaXBzQXJyYXlzKHRyYXZlbGVyVHJpcHMsIHRvZGF5KSB7XG4gIGxldCB1cGNvbWluZ1RyaXBzQXJyID0gW107XG4gIGxldCBwYXN0VHJpcHNBcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZWxlclRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNtYWxsRGF0ZSA9IG5ldyBEYXRlKHRyYXZlbGVyVHJpcHNbaV0uZGF0ZSk7XG4gICAgbGV0IHRyYXZEYXRlID0gZGFzaGJvYXJkSGVscGVyLnJldHVyblRyYXZEYXRlKHNtYWxsRGF0ZSk7XG4gICAgaWYgKHRvZGF5IDwgdHJhdkRhdGUpIHtcbiAgICAgIHVwY29taW5nVHJpcHNBcnIucHVzaCh0cmF2ZWxlclRyaXBzW2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFzdFRyaXBzQXJyLnB1c2godHJhdmVsZXJUcmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHVwY29taW5nVHJpcHNBcnIsIHBhc3RUcmlwc0FyciB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJQYXN0QW5kVXBjb21pbmdUcmlwcyh0cmF2ZWxlclRyaXBzKSB7XG4gIGxldCB0b2RheSA9IGRhc2hib2FyZEhlbHBlci5yZXR1cm5DdXJyZW50RGF0ZSgpO1xuICBsZXQgdHJpcHNBcnJheSA9IG1ha2VQYXN0QW5kVXBjb21pbmdUcmlwc0FycmF5cyh0cmF2ZWxlclRyaXBzLCB0b2RheSk7XG4gIGxldCBwYXN0VHJpcHNBcnIgPSB0cmlwc0FycmF5LnBhc3RUcmlwc0FycjtcbiAgbGV0IHVwY29taW5nVHJpcHNBcnIgPSB0cmlwc0FycmF5LnVwY29taW5nVHJpcHNBcnI7XG4gIHJldHVybiB7IHBhc3RUcmlwc0FyciwgdXBjb21pbmdUcmlwc0FyciB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmF2ZWxlcldlbGNvbWUodHJhdmVsZXIpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBsZXQgd2VsY29tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgd2VsY29tZUhlYWRlci5jbGFzc05hbWUgPSBcIndlbGNvbWUtaGVhZGVyXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiaG9tZS1wYWdlLWgxXCJcbiAgKS5pbm5lckhUTUwgPSBgSGVsbG8sICR7dHJhdmVsZXIubmFtZX1gO1xuICBzdHlsaW5nLnRyYXZlbGVyTWVkaWFRdWVyeSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb3RhbFNwZW50KHRyYXZlbGVyRGFzaGJvYXJkRGF0YSkge1xuICBsZXQgdG90YWxBbW91bnQgPSB0cmF2ZWxlckRhc2hib2FyZERhdGEudG90YWxBZnRlckFnZW50RmVlLnRvRml4ZWQoMik7XG4gIGxldCB0b3RhbFNwZW50UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdG90YWxTcGVudFBhcmFncmFwaC5jbGFzc05hbWUgPSBcInRvdGFsLXNwZW50XCI7XG4gIGxldCB0b3RhbFNwZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUb3RhbCBBbW91bnQgU3BlbnQ6ICQke3RvdGFsQW1vdW50fWBcbiAgKTtcbiAgdG90YWxTcGVudFBhcmFncmFwaC5hcHBlbmRDaGlsZCh0b3RhbFNwZW50VGV4dCk7XG4gIGRhc2hib2FyZEhlbHBlci5hcHBlbmRUb1NlY3Rpb24odG90YWxTcGVudFBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIGdldExvZGdpbmdDb3N0cyh0cmF2ZWxlckRlc3RpbmF0aW9ucywgdHJhdmVsZXJUcmlwcykge1xuICBsZXQgbG9kZ2luZ0Nvc3RzID0gW107XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdHJhdmVsZXJEZXN0aW5hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBsb2RnaW5nQ29zdHMucHVzaChcbiAgICAgIHRyYXZlbGVyRGVzdGluYXRpb25zW2ldLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICpcbiAgICAgIHRyYXZlbGVyVHJpcHNbaV0uZHVyYXRpb25cbiAgICApO1xuICB9XG4gIHJldHVybiBsb2RnaW5nQ29zdHM7XG59XG5cbmZ1bmN0aW9uIGdldEZsaWdodENvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKSB7XG4gIGxldCBmbGlnaHRDb3N0cyA9IFtdO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyYXZlbGVyRGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgZmxpZ2h0Q29zdHMucHVzaChcbiAgICAgIHRyYXZlbGVyRGVzdGluYXRpb25zW2ldLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKlxuICAgICAgdHJhdmVsZXJUcmlwc1tpXS50cmF2ZWxlcnNcbiAgICApO1xuICB9XG4gIHJldHVybiBmbGlnaHRDb3N0cztcbn1cblxuZnVuY3Rpb24gYWRkRmxpZ2h0YW5kTG9kZ2luZ0Nvc3RzKGZsaWdodENvc3RzLCBsb2RnaW5nQ29zdHMpIHtcbiAgbGV0IGZsaWdodHNQbHVzTG9kZ2luZyA9IFtdO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGZsaWdodENvc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgZmxpZ2h0c1BsdXNMb2RnaW5nLnB1c2gobG9kZ2luZ0Nvc3RzW2ldICsgZmxpZ2h0Q29zdHNbaV0pO1xuICB9XG4gIHJldHVybiBmbGlnaHRzUGx1c0xvZGdpbmc7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUZsaWdodHNQbHVzTG9kZ2luZyhmbGlnaHRzUGx1c0xvZGdpbmcpIHtcbiAgbGV0IGZsaWdodHNQbHVzTG9kZ2luZ1JlZHVjZWQgPSBmbGlnaHRzUGx1c0xvZGdpbmcucmVkdWNlKGZ1bmN0aW9uIChcbiAgICBmbGlnaHRzLFxuICAgIGxvZGdpbmdcbiAgKSB7XG4gICAgcmV0dXJuIGZsaWdodHMgKyBsb2RnaW5nO1xuICB9LFxuICAgIDApO1xuICByZXR1cm4gZmxpZ2h0c1BsdXNMb2RnaW5nUmVkdWNlZDtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVRyYXZlbGVyRGFzaGJvYXJkRGF0YShcbiAgdHJhdmVsZXIsXG4gIHRyYXZlbGVyRGVzdGluYXRpb25zLFxuICB0cmF2ZWxlclRyaXBzXG4pIHtcbiAgbGV0IGxvZGdpbmdDb3N0cyA9IGdldExvZGdpbmdDb3N0cyh0cmF2ZWxlckRlc3RpbmF0aW9ucywgdHJhdmVsZXJUcmlwcyk7XG4gIGxldCBmbGlnaHRDb3N0cyA9IGdldEZsaWdodENvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKTtcbiAgbGV0IGZsaWdodHNQbHVzTG9kZ2luZyA9IGFkZEZsaWdodGFuZExvZGdpbmdDb3N0cyhmbGlnaHRDb3N0cywgbG9kZ2luZ0Nvc3RzKTtcbiAgbGV0IHRvdGFsQW1vdW50Q3VzdEhhc1NwZW50QmVmb3JlQWdlbnRGZWUgPSByZWR1Y2VGbGlnaHRzUGx1c0xvZGdpbmcoXG4gICAgZmxpZ2h0c1BsdXNMb2RnaW5nXG4gICk7XG4gIHZhciB0b3RhbEFmdGVyQWdlbnRGZWUgPSB0b3RhbEFtb3VudEN1c3RIYXNTcGVudEJlZm9yZUFnZW50RmVlICogMS4xO1xuICByZXR1cm4ge1xuICAgIHRyYXZlbGVyLFxuICAgIHRyYXZlbGVyVHJpcHMsXG4gICAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gICAgbG9kZ2luZ0Nvc3RzLFxuICAgIGZsaWdodENvc3RzLFxuICAgIGZsaWdodHNQbHVzTG9kZ2luZyxcbiAgICB0b3RhbEFtb3VudEN1c3RIYXNTcGVudEJlZm9yZUFnZW50RmVlLFxuICAgIHRvdGFsQWZ0ZXJBZ2VudEZlZSxcbiAgfTtcbn1cblxuZXhwb3J0IHtcbiAgcmVuZGVyVHJhdmVsZXJXZWxjb21lLFxuICByZW5kZXJUb3RhbFNwZW50LFxuICBnZXRMb2RnaW5nQ29zdHMsXG4gIGdldEZsaWdodENvc3RzLFxuICBhZGRGbGlnaHRhbmRMb2RnaW5nQ29zdHMsXG4gIHJlZHVjZUZsaWdodHNQbHVzTG9kZ2luZyxcbiAgcHJlcGFyZVRyYXZlbGVyRGFzaGJvYXJkRGF0YSxcbiAgZmlsdGVyUGFzdEFuZFVwY29taW5nVHJpcHMsXG4gIHJlbmRlclRyYXZlbGVyRGFzaGJvYXJkLFxuICByZW5kZXJUcmF2ZWxlclRyaXBSZXF1ZXN0Rm9ybSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9