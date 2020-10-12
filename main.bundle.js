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
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nbody {\n  background-color: var(--main-bg-color);\n  color: var(--main-txt-color);\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.3rem;\n  margin: 0;\n  text-align: center;\n  width: 100%; }\n\nbutton {\n  background-color: var(--main-border-color);\n  border-radius: 20px;\n  color: var(--main-txt-color); }\n\nhtml {\n  --header-bg-color: #fff;\n  --main-bg-color: #fff;\n  --main-border-color: #fff;\n  --main-txt-color: #000; }\n\ni {\n  background-color: var(--header-bg-color);\n  color: var(--main-txt-color); }\n\nimg {\n  border: 1px solid var(--main-txt-color);\n  border-radius: 20px;\n  height: 300px;\n  margin: 3%;\n  width: 350px; }\n\nlabel {\n  font-family: \"Fira Sans\", sans-serif; }\n\np text {\n  margin: 5%; }\n\nsection:first-of-type {\n  align-content: center;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: auto;\n  grid-template-rows: 0.2fr 2fr 0.1fr 0.1fr 0.1fr 0.1fr;\n  place-items: center; }\n\n.approve-button {\n  grid-row: 7; }\n\n.container {\n  align-content: center;\n  border: 2px solid var(--main-border-color);\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 0.2fr 2fr 0.1fr 0.1fr 0.1fr 0.1fr;\n  margin: 5%;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 16px;\n  place-items: center; }\n\n.deny-button {\n  grid-row: 8; }\n\n.destination-image {\n  grid-row: 2;\n  height: 225px;\n  margin: 3%;\n  width: 275px; }\n\n.footer {\n  bottom: 0;\n  display: none;\n  font-size: x-small;\n  margin-bottom: -1%;\n  position: fixed;\n  width: 100%; }\n\n.header-section {\n  background-color: var(--header-bg-color);\n  border-bottom: 1px solid var(--main-txt-color);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-items: center;\n  justify-content: space-around;\n  margin-bottom: 10px;\n  padding-bottom: 1px;\n  padding-top: 10px;\n  position: fixed;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  z-index: 1; }\n\n.header-section h1 {\n  grid-column: 2;\n  grid-row: 1; }\n\n.home-destination-name {\n  margin: 3%; }\n\n.image-and-name-div {\n  display: flex;\n  flex-direction: column;\n  margin: 1%;\n  text-align: center; }\n\n.main-section {\n  display: grid;\n  margin-top: 3em;\n  place-items: center; }\n\n.past-trips {\n  grid-column: 2; }\n\n.welcome-header {\n  margin-top: 11%; }\n\n.submit {\n  border-radius: 10px;\n  color: var(--main-txt-color);\n  height: 50%;\n  margin-top: 4.5%;\n  padding: 1%; }\n\n.total-spent {\n  display: flex;\n  margin: auto;\n  margin-left: 40%;\n  margin-top: 2%; }\n\n.travname {\n  color: var(--main-border-color); }\n\n.trip-date {\n  grid-row: 3; }\n\n.trip-destination {\n  grid-row: 4; }\n\n.trip-duration {\n  grid-row: 5; }\n\n.trip-status {\n  grid-row: 6; }\n\n#agent-header {\n  border-radius: 20px;\n  color: var(--main-bg-color);\n  font-size: xxx-large;\n  margin-bottom: -5%;\n  margin-top: 11%;\n  opacity: 10%; }\n\n#agent-tools {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  height: 60%; }\n\n#agent-tools h3 {\n  grid-row: 1;\n  grid-column-start: 1;\n  grid-column-end: none;\n  width: 100%; }\n\n#agent-tools label {\n  grid-row: 2;\n  grid-column: 2; }\n\n#confirm-trip-request-button {\n  color: var(--main-txt-color); }\n\n#end {\n  grid-row: 4; }\n\n#h1-div {\n  background-image: url(\"https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1024-80.jpg.webp\");\n  background-size: cover;\n  background-position: bottom;\n  border: 1px solid var(--main-txt-color);\n  opacity: 88%;\n  padding: 10%; }\n\n#home-page {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 5%; }\n\n#home-page-h1 {\n  border-radius: 20px;\n  color: #fff;\n  font-size: xxx-large;\n  margin-bottom: -5%;\n  margin-top: 11%;\n  opacity: 10%; }\n\n#login-form {\n  display: flex;\n  grid-column: 3;\n  grid-row: 1;\n  justify-content: space-evenly;\n  margin: 3%;\n  width: 100%; }\n\n#login-form input {\n  padding: 3%; }\n\n#log-out-button {\n  border-radius: 10px;\n  color: var(--main-txt-color);\n  height: 50%;\n  margin-top: 8.5%;\n  padding: 1%; }\n\n#request-form {\n  display: flex;\n  flex-direction: column; }\n\n#requested-trips {\n  display: flex;\n  flex-direction: column; }\n\n#start {\n  grid-row: 4; }\n\n#show-traveler-button {\n  grid-column: 2;\n  grid-row: 4; }\n\n#todays-trips {\n  display: flex;\n  flex-direction: column; }\n\n#todays-trips #trip-request-button {\n  color: var(--main-txt-color); }\n\n#traveler {\n  grid-column: 2;\n  grid-row: 3; }\n\n#trav-search-bar-label {\n  grid-column: 2;\n  grid-row: 2; }\n\n#welcome-header {\n  margin-top: 11%; }\n\n@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {\n  body {\n    display: grid;\n    font-size: 1.7rem;\n    place-items: center; }\n  img {\n    height: 350px;\n    width: 400px; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .header-section h1 {\n    grid-column: 1;\n    grid-row: 1; }\n  .total-spent {\n    margin: 10px auto 0 auto;\n    margin-top: 2%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 60%; }\n  #agent-tools h3 {\n    grid-row: 1;\n    grid-column-end: none;\n    grid-column-start: 1;\n    width: 100%; }\n  #agent-tools label {\n    grid-column: 2;\n    grid-row: 2; }\n  #footer {\n    bottom: 0;\n    left: 0;\n    position: fixed; }\n  #h1-div {\n    border-radius: 0 0 20px 20px;\n    margin-top: 5%;\n    width: 100%; }\n  #header-section {\n    flex-direction: column;\n    font-size: 1.3rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    margin: 0;\n    padding: 0; }\n  #header-section h1 {\n    font-size: 2rem; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    margin-bottom: 0;\n    padding: 1%;\n    padding-top: 2%; }\n  #login-form {\n    display: flex;\n    grid-column: 2;\n    grid-row: 1;\n    justify-content: space-around;\n    width: 100%; }\n  #login-form input {\n    padding: 3%; }\n  #submit {\n    align-self: flex-end;\n    margin-bottom: 3px; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler-page {\n    display: grid; } }\n\n@media (min-width: 768px) and (max-width: 1075px) {\n  body {\n    display: grid;\n    font-size: 18px;\n    place-items: center; }\n  img {\n    height: 350px;\n    width: 400px; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .header-section h1 {\n    grid-column: 1;\n    grid-row: 1; }\n  .total-spent {\n    margin: 10px auto 0 auto;\n    margin-top: 2%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 60%; }\n  #agent-tools h3 {\n    grid-row: 1;\n    grid-column-end: none;\n    grid-column-start: 1;\n    width: 100%; }\n  #agent-tools label {\n    grid-column: 2;\n    grid-row: 2; }\n  #footer {\n    bottom: 0;\n    left: 0;\n    position: fixed; }\n  #h1-div {\n    border-radius: 0 0 20px 20px;\n    margin-top: 5%;\n    width: 100%; }\n  #header-section {\n    flex-direction: column;\n    font-size: 1.3rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    margin: 0;\n    padding: 0; }\n  #header-section h1 {\n    font-size: 2rem; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    margin-bottom: 0;\n    padding: 1%;\n    padding-top: 2%; }\n  #login-form {\n    display: flex;\n    grid-column: 2;\n    grid-row: 1;\n    justify-content: space-around;\n    width: 100%; }\n  #login-form input {\n    padding: 3%; }\n  #submit {\n    align-self: flex-end;\n    margin-bottom: 3px;\n    margin-left: 8px; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler-page {\n    display: grid; } }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  body {\n    display: grid;\n    font-size: 18px;\n    place-items: center; }\n  img {\n    height: 350px;\n    width: 400px; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .header-section h1 {\n    grid-column: 1;\n    grid-row: 1; }\n  .total-spent {\n    margin: 10px auto 0 auto;\n    margin-top: 2%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 60%; }\n  #agent-tools h3 {\n    grid-row: 1;\n    grid-column-end: none;\n    grid-column-start: 1;\n    width: 100%; }\n  #agent-tools label {\n    grid-column: 2;\n    grid-row: 2; }\n  #footer {\n    bottom: 0;\n    left: 0;\n    position: fixed; }\n  #h1-div {\n    border-radius: 0 0 20px 20px;\n    margin-top: 5%;\n    width: 100%; }\n  #header-section {\n    flex-direction: column;\n    font-size: 1.3rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    margin: 0;\n    padding: 0; }\n  #header-section h1 {\n    font-size: 2rem; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    margin-bottom: 0;\n    padding: 1%;\n    padding-top: 2%; }\n  #login-form {\n    display: flex;\n    grid-column: 2;\n    grid-row: 1;\n    justify-content: space-between;\n    width: 100%; }\n  #login-form input {\n    padding: 3%; }\n  #submit {\n    align-self: flex-end;\n    margin-bottom: 3px;\n    margin-left: 8px; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler-page {\n    display: grid; } }\n\n@media (max-width: 425px) {\n  * {\n    margin: 0;\n    padding: 0; }\n  body {\n    display: grid;\n    font-size: 1rem;\n    text-align: center; }\n  button {\n    padding: 2%; }\n  img {\n    height: 95%;\n    width: 95%; }\n  input {\n    width: 75%; }\n  p {\n    text-align: center; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .header-section h1 {\n    grid-column: 1;\n    grid-row: 1; }\n  .home-destination-name {\n    grid-column: 1;\n    margin-top: 10px; }\n  .home-page {\n    place-items: center; }\n  .total-earned {\n    display: grid;\n    grid-row: 2; }\n  .total-spent {\n    margin: 10px auto 0 auto; }\n  .welcome-header {\n    margin-top: 10%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 65%; }\n  #h1-div {\n    border-radius: 0 0 20px 20px; }\n  #header-section {\n    display: flex;\n    flex-direction: column;\n    font-size: x-small;\n    grid-row: 1;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin: 0;\n    padding: 0; }\n  #home-page {\n    display: grid;\n    margin: 0;\n    margin-top: 5%; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    font-size: revert;\n    margin-top: 25%; }\n  #login-form {\n    display: flex;\n    grid-column: 1;\n    grid-row: 2;\n    justify-content: space-evenly;\n    margin: 3%;\n    place-items: center;\n    width: 100%; }\n  #login-form button {\n    margin-right: 5%; }\n  #login-form input {\n    margin: 0; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler {\n    width: auto; }\n  #traveler-page {\n    display: grid; } }\n\n@media (max-width: 375px) {\n  * {\n    margin: 0;\n    padding: 0; }\n  body {\n    display: grid;\n    font-size: 1rem;\n    text-align: center; }\n  button {\n    padding: 2%; }\n  img {\n    height: 95%;\n    width: 95%; }\n  input {\n    width: 75%; }\n  p {\n    text-align: center; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .header-section h1 {\n    grid-column: 1;\n    grid-row: 1; }\n  .home-destination-name {\n    grid-column: 1;\n    margin-top: 10px; }\n  .home-page {\n    place-items: center; }\n  .total-earned {\n    display: grid;\n    grid-row: 2; }\n  .total-spent {\n    margin: 10px auto 0 auto; }\n  .welcome-header {\n    margin-top: 10%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 65%; }\n  #h1-div {\n    border-radius: 0 0 20px 20px; }\n  #header-section {\n    display: flex;\n    flex-direction: column;\n    font-size: x-small;\n    grid-row: 1;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin: 0;\n    padding: 0; }\n  #home-page {\n    display: grid;\n    margin: 0;\n    margin-top: 5%; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    font-size: revert;\n    margin-top: 25%; }\n  #login-form {\n    display: flex;\n    grid-column: 1;\n    grid-row: 2;\n    justify-content: space-evenly;\n    margin: 3%;\n    place-items: center;\n    width: 100%; }\n  #login-form button {\n    margin-right: 5%; }\n  #login-form input {\n    margin: 0; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler {\n    width: auto; }\n  #traveler-page {\n    display: grid; } }\n", ""]);



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
    renderTrips(todaysTrips, destinations);
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
  document.querySelector("body").append(logOutButton);
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
/*! exports provided: styleHomePage, travelerMediaQuery, agentMediaQuery, agentMediaQuery768 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleHomePage", function() { return styleHomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelerMediaQuery", function() { return travelerMediaQuery; });
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
}

function travelerMediaQuery() {
  function myFunction(x) {
    if (x.matches) {
      styleTravelerPage();
    } else {
      return;
    }
  }
  var x = window.matchMedia("(max-width: 375px)");
  myFunction(x);
  x.addListener(myFunction);
}

function styleAgentPage() {
  document.getElementById("header-section").style.display = "none";
  document.getElementById("h1-div").style.padding = "15%";
  document.getElementById("agent-header").style.padding = "2%";
  document.getElementById("agent-header").style.display = "flex";
  document.getElementById("agent-header").style.borderRadius = "0 0 20px 20px";
}

function agentMediaQuery() {
  function myFunction(x) {
    if (x.matches) {
      styleAgentPage();
    } else {
      return;
    }
  }
  var x = window.matchMedia("(max-width: 375px)");
  myFunction(x);
  x.addListener(myFunction);
}

function styleAgentPageFor768() {
  document.getElementById("header-section").style.display = "none";
  document.getElementById("h1-div").style.marginTop = "0";
  document.getElementById("h1-div").style.padding = "15%";
  document.getElementById("agent-header").style.padding = "2%";
  document.getElementById("agent-header").style.borderRadius = "0 0 20px 20px";
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
  ).innerHTML = `Hello, <br> ${traveler.name}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWdlbnRfZGFzaGJvYXJkX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9kYXNoYm9hcmRfaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naW5faGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsaW5nX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhdmVsX3RyYWNrZXJfc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhdmVsZXJfZGFzaGJvYXJkX2hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LG1FQUFpQztBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0EsbUJBQW1CLGdFQUE4QjtBQUNqRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLGNBQWMsbUVBQWlDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYztBQUM3QyxFQUFFLGtFQUEwQjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBLEVBQUUsaUVBQStCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFhRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7IH1cXG5cXG5odG1sIHtcXG4gIC0taGVhZGVyLWJnLWNvbG9yOiAjZmZmO1xcbiAgLS1tYWluLWJnLWNvbG9yOiAjZmZmO1xcbiAgLS1tYWluLWJvcmRlci1jb2xvcjogI2ZmZjtcXG4gIC0tbWFpbi10eHQtY29sb3I6ICMwMDA7IH1cXG5cXG5pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpOyB9XFxuXFxuaW1nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgbWFyZ2luOiAzJTtcXG4gIHdpZHRoOiAzNTBweDsgfVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbnAgdGV4dCB7XFxuICBtYXJnaW46IDUlOyB9XFxuXFxuc2VjdGlvbjpmaXJzdC1vZi10eXBlIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMmZyIDAuMWZyIDAuMWZyIDAuMWZyIDAuMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcblxcbi5hcHByb3ZlLWJ1dHRvbiB7XFxuICBncmlkLXJvdzogNzsgfVxcblxcbi5jb250YWluZXIge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1ib3JkZXItY29sb3IpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMmZyIDAuMWZyIDAuMWZyIDAuMWZyIDAuMWZyO1xcbiAgbWFyZ2luOiA1JTtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uZGVueS1idXR0b24ge1xcbiAgZ3JpZC1yb3c6IDg7IH1cXG5cXG4uZGVzdGluYXRpb24taW1hZ2Uge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBoZWlnaHQ6IDIyNXB4O1xcbiAgbWFyZ2luOiAzJTtcXG4gIHdpZHRoOiAyNzVweDsgfVxcblxcbi5mb290ZXIge1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gIG1hcmdpbi1ib3R0b206IC0xJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmhlYWRlci1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7IH1cXG5cXG4uaGVhZGVyLXNlY3Rpb24gaDEge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMTsgfVxcblxcbi5ob21lLWRlc3RpbmF0aW9uLW5hbWUge1xcbiAgbWFyZ2luOiAzJTsgfVxcblxcbi5pbWFnZS1hbmQtbmFtZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDElO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luLXRvcDogM2VtO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcblxcbi5wYXN0LXRyaXBzIHtcXG4gIGdyaWQtY29sdW1uOiAyOyB9XFxuXFxuLndlbGNvbWUtaGVhZGVyIHtcXG4gIG1hcmdpbi10b3A6IDExJTsgfVxcblxcbi5zdWJtaXQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIG1hcmdpbi10b3A6IDQuNSU7XFxuICBwYWRkaW5nOiAxJTsgfVxcblxcbi50b3RhbC1zcGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcXG4gIG1hcmdpbi10b3A6IDIlOyB9XFxuXFxuLnRyYXZuYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJvcmRlci1jb2xvcik7IH1cXG5cXG4udHJpcC1kYXRlIHtcXG4gIGdyaWQtcm93OiAzOyB9XFxuXFxuLnRyaXAtZGVzdGluYXRpb24ge1xcbiAgZ3JpZC1yb3c6IDQ7IH1cXG5cXG4udHJpcC1kdXJhdGlvbiB7XFxuICBncmlkLXJvdzogNTsgfVxcblxcbi50cmlwLXN0YXR1cyB7XFxuICBncmlkLXJvdzogNjsgfVxcblxcbiNhZ2VudC1oZWFkZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbiAgbWFyZ2luLWJvdHRvbTogLTUlO1xcbiAgbWFyZ2luLXRvcDogMTElO1xcbiAgb3BhY2l0eTogMTAlOyB9XFxuXFxuI2FnZW50LXRvb2xzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuICBoZWlnaHQ6IDYwJTsgfVxcblxcbiNhZ2VudC10b29scyBoMyB7XFxuICBncmlkLXJvdzogMTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4jYWdlbnQtdG9vbHMgbGFiZWwge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBncmlkLWNvbHVtbjogMjsgfVxcblxcbiNjb25maXJtLXRyaXAtcmVxdWVzdC1idXR0b24ge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTsgfVxcblxcbiNlbmQge1xcbiAgZ3JpZC1yb3c6IDQ7IH1cXG5cXG4jaDEtZGl2IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9jZG4ubW9zLmNtcy5mdXR1cmVjZG4ubmV0L3d0cXFua1lEWWkyaWZzV1pWVzJNVDQtMTAyNC04MC5qcGcud2VicFxcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gIG9wYWNpdHk6IDg4JTtcXG4gIHBhZGRpbmc6IDEwJTsgfVxcblxcbiNob21lLXBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiA1JTsgfVxcblxcbiNob21lLXBhZ2UtaDEge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XFxuICBtYXJnaW4tYm90dG9tOiAtNSU7XFxuICBtYXJnaW4tdG9wOiAxMSU7XFxuICBvcGFjaXR5OiAxMCU7IH1cXG5cXG4jbG9naW4tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxuICBncmlkLXJvdzogMTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luOiAzJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuI2xvZ2luLWZvcm0gaW5wdXQge1xcbiAgcGFkZGluZzogMyU7IH1cXG5cXG4jbG9nLW91dC1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIG1hcmdpbi10b3A6IDguNSU7XFxuICBwYWRkaW5nOiAxJTsgfVxcblxcbiNyZXF1ZXN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4jcmVxdWVzdGVkLXRyaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuI3N0YXJ0IHtcXG4gIGdyaWQtcm93OiA0OyB9XFxuXFxuI3Nob3ctdHJhdmVsZXItYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDQ7IH1cXG5cXG4jdG9kYXlzLXRyaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuI3RvZGF5cy10cmlwcyAjdHJpcC1yZXF1ZXN0LWJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpOyB9XFxuXFxuI3RyYXZlbGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDM7IH1cXG5cXG4jdHJhdi1zZWFyY2gtYmFyLWxhYmVsIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgZ3JpZC1yb3c6IDI7IH1cXG5cXG4jd2VsY29tZS1oZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogMTElOyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEzNjZweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIGltZyB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHdpZHRoOiA0MDBweDsgfVxcbiAgLmZvb3RlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbGVmdDogMzQlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG4gIC5oZWFkZXItc2VjdGlvbiBoMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMTsgfVxcbiAgLnRvdGFsLXNwZW50IHtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyJTsgfVxcbiAgI2FnZW50LWhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMTAlOyB9XFxuICAjYWdlbnQtdG9vbHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiA2MCU7IH1cXG4gICNhZ2VudC10b29scyBoMyB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IG5vbmU7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgI2FnZW50LXRvb2xzIGxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyOyB9XFxuICAjZm9vdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IH1cXG4gICNoMS1kaXYge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNoZWFkZXItc2VjdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gICNoZWFkZXItc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxcbiAgI2hvbWUtcGFnZS1oMSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLXRvcDogMiU7IH1cXG4gICNsb2dpbi1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNsb2dpbi1mb3JtIGlucHV0IHtcXG4gICAgcGFkZGluZzogMyU7IH1cXG4gICNzdWJtaXQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4OyB9XFxuICAjdG9kYXlzLXRyaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3RyYXZlbGVyLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkOyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDc1cHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIGltZyB7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIHdpZHRoOiA0MDBweDsgfVxcbiAgLmZvb3RlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbGVmdDogMzQlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cXG4gIC5oZWFkZXItc2VjdGlvbiBoMSB7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMTsgfVxcbiAgLnRvdGFsLXNwZW50IHtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyJTsgfVxcbiAgI2FnZW50LWhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogMTAlOyB9XFxuICAjYWdlbnQtdG9vbHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiA2MCU7IH1cXG4gICNhZ2VudC10b29scyBoMyB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IG5vbmU7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgI2FnZW50LXRvb2xzIGxhYmVsIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAyOyB9XFxuICAjZm9vdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IH1cXG4gICNoMS1kaXYge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNoZWFkZXItc2VjdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gICNoZWFkZXItc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxcbiAgI2hvbWUtcGFnZS1oMSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDElO1xcbiAgICBwYWRkaW5nLXRvcDogMiU7IH1cXG4gICNsb2dpbi1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNsb2dpbi1mb3JtIGlucHV0IHtcXG4gICAgcGFkZGluZzogMyU7IH1cXG4gICNzdWJtaXQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogOHB4OyB9XFxuICAjdG9kYXlzLXRyaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3RyYXZlbGVyLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkOyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcbiAgaW1nIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgd2lkdGg6IDQwMHB4OyB9XFxuICAuZm9vdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBsZWZ0OiAzNCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcbiAgLmhlYWRlci1zZWN0aW9uIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxOyB9XFxuICAudG90YWwtc3BlbnQge1xcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDIlOyB9XFxuICAjYWdlbnQtaGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7IH1cXG4gICNhZ2VudC10b29scyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDYwJTsgfVxcbiAgI2FnZW50LXRvb2xzIGgzIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogbm9uZTtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAjYWdlbnQtdG9vbHMgbGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7IH1cXG4gICNmb290ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgfVxcbiAgI2gxLWRpdiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgI2hlYWRlci1zZWN0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgI2hlYWRlci1zZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtOyB9XFxuICAjaG9tZS1wYWdlLWgxIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHBhZGRpbmctdG9wOiAyJTsgfVxcbiAgI2xvZ2luLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNsb2dpbi1mb3JtIGlucHV0IHtcXG4gICAgcGFkZGluZzogMyU7IH1cXG4gICNzdWJtaXQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogOHB4OyB9XFxuICAjdG9kYXlzLXRyaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3RyYXZlbGVyLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkOyB9IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gICoge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMiU7IH1cXG4gIGltZyB7XFxuICAgIGhlaWdodDogOTUlO1xcbiAgICB3aWR0aDogOTUlOyB9XFxuICBpbnB1dCB7XFxuICAgIHdpZHRoOiA3NSU7IH1cXG4gIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5mb290ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGxlZnQ6IDM0JTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAuaGVhZGVyLXNlY3Rpb24gaDEge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7IH1cXG4gIC5ob21lLWRlc3RpbmF0aW9uLW5hbWUge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgLmhvbWUtcGFnZSB7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC50b3RhbC1lYXJuZWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogMjsgfVxcbiAgLnRvdGFsLXNwZW50IHtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvOyB9XFxuICAud2VsY29tZS1oZWFkZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7IH1cXG4gICNhZ2VudC1oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IDEwJTsgfVxcbiAgI2FnZW50LXRvb2xzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGhlaWdodDogNjUlOyB9XFxuICAjaDEtZGl2IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDsgfVxcbiAgI2hlYWRlci1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAjaG9tZS1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tdG9wOiA1JTsgfVxcbiAgI2hvbWUtcGFnZS1oMSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogcmV2ZXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAyNSU7IH1cXG4gICNsb2dpbi1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luOiAzJTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNsb2dpbi1mb3JtIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7IH1cXG4gICNsb2dpbi1mb3JtIGlucHV0IHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAjdG9kYXlzLXRyaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3RyYXZlbGVyIHtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG4gICN0cmF2ZWxlci1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDIlOyB9XFxuICBpbWcge1xcbiAgICBoZWlnaHQ6IDk1JTtcXG4gICAgd2lkdGg6IDk1JTsgfVxcbiAgaW5wdXQge1xcbiAgICB3aWR0aDogNzUlOyB9XFxuICBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuZm9vdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBsZWZ0OiAzNCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcbiAgLmhlYWRlci1zZWN0aW9uIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxOyB9XFxuICAuaG9tZS1kZXN0aW5hdGlvbi1uYW1lIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gIC5ob21lLXBhZ2Uge1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyOyB9XFxuICAudG90YWwtZWFybmVkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDI7IH1cXG4gIC50b3RhbC1zcGVudCB7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bzsgfVxcbiAgLndlbGNvbWUtaGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTAlOyB9XFxuICAjYWdlbnQtaGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7IH1cXG4gICNhZ2VudC10b29scyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDY1JTsgfVxcbiAgI2gxLWRpdiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7IH1cXG4gICNoZWFkZXItc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgI2hvbWUtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogNSU7IH1cXG4gICNob21lLXBhZ2UtaDEge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xcbiAgICBmb250LXNpemU6IHJldmVydDtcXG4gICAgbWFyZ2luLXRvcDogMjUlOyB9XFxuICAjbG9naW4tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG1hcmdpbjogMyU7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAjbG9naW4tZm9ybSBidXR0b24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlOyB9XFxuICAjbG9naW4tZm9ybSBpbnB1dCB7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgI3RvZGF5cy10cmlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICN0cmF2ZWxlciB7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuICAjdHJhdmVsZXItcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IH0gfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgKiBhcyB0cmF2ZWxUcmFja2VyU2VydmljZSBmcm9tIFwiLi90cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBkYXNoYm9hcmRIZWxwZXIgZnJvbSBcIi4vZGFzaGJvYXJkX2hlbHBlclwiO1xuaW1wb3J0ICogYXMgdHJhdmVsZXJEYXNoYm9hcmRIZWxwZXIgZnJvbSBcIi4vdHJhdmVsZXJfZGFzaGJvYXJkX2hlbHBlclwiO1xuaW1wb3J0ICogYXMgc3R5bGluZyBmcm9tIFwiLi9zdHlsaW5nX2hlbHBlclwiO1xuXG5mdW5jdGlvbiBzZXRBZ2VudFBhZ2UoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2UtaDFcIikuaW5uZXJIVE1MID0gXCJXZWxjb21lLCBBR0VOVFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZS1oMVwiKS5pZCA9IFwiYWdlbnQtaGVhZGVyXCI7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFnZW50V2VsY29tZSgpIHtcbiAgc2V0QWdlbnRQYWdlKCk7XG4gIHN0eWxpbmcuYWdlbnRNZWRpYVF1ZXJ5KCk7XG4gIHN0eWxpbmcuYWdlbnRNZWRpYVF1ZXJ5NzY4KCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFtb3VudEFnZW50RWFybmVkKHRyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IGFtb3VudEFnZW50RWFybmVkID0gZ2V0TG9kZ2luZ0Nvc3RzRm9yQWdlbnQoZGVzdGluYXRpb25zLCB0cmlwcyk7XG4gIHJlbmRlclRvdGFsRWFybmVkKGFtb3VudEFnZW50RWFybmVkKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JOb1RyYXZlbGVycyh0b2RheXNUcmlwcykge1xuICBpZiAodG9kYXlzVHJpcHMudG9kYXlzVHJpcHMubGVuZ3RoID09PSAwKSB7XG4gICAgbGV0IG5vVHJhdmVsZXJzVGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgIFwiVGhlcmUgYXJlIG5vIHRyYXZlbGVycyBvbiBUcmlwcyBUb2RheVwiXG4gICAgKTtcbiAgICBsZXQgbm9UcmF2ZWxlcnNIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBub1RyYXZlbGVyc0gxLmFwcGVuZENoaWxkKG5vVHJhdmVsZXJzVGV4dE5vZGUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzFdLmFwcGVuZENoaWxkKG5vVHJhdmVsZXJzSDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyYXZlbGVyc09uVHJpcHNUb2RheSh0b2RheXNUcmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGlmICh0b2RheXNUcmlwcy50b2RheXNUcmlwcy5sZW5ndGggPiAwKSB7XG4gICAgcmVuZGVyQWdlbnRUcmlwcyh0b2RheXNUcmlwcywgZGVzdGluYXRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQZW5kaW5nQW5kVG9kYXlzVHJpcHModHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgcGVuZGluZ1RyaXBzID0gZGFzaGJvYXJkSGVscGVyLmdldFBlbmRpbmdUcmlwcyh0cmlwcyk7XG4gIHJlbmRlckFnZW50VHJpcHMocGVuZGluZ1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJUb2RheSdzXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29udGFpbmVyXCIpWzFdLmlkID0gXCJ0b2RheXMtdHJpcHNcIjtcbiAgbGV0IHRvZGF5c1RyaXBzID0gZGFzaGJvYXJkSGVscGVyLmdldFRvZGF5c1RyaXBzKHRyaXBzKTtcbiAgY2hlY2tGb3JOb1RyYXZlbGVycyh0b2RheXNUcmlwcyk7XG4gIHJlbmRlclRyYXZlbGVyc09uVHJpcHNUb2RheSh0b2RheXNUcmlwcywgZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9wSGFsZk9mQWdlbnREYXNoYm9hcmQodHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICByZW5kZXJBbW91bnRBZ2VudEVhcm5lZCh0cmlwcywgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBzSGVhZGVyKFwiUmVxdWVzdGVkXCIpO1xuICByZW5kZXJQZW5kaW5nQW5kVG9kYXlzVHJpcHModHJpcHMsIGRlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJvdHRvbUhhbGZPZkFnZW50RGFzaGJvYXJkKHRyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBzSGVhZGVyKFwiQWdlbnQgVG9vbHMgYW5kIFRyYXZlbGVyXCIpO1xuICByZW5kZXJUcmF2ZWxlclNlYXJjaEJhcigpO1xuICByZW5kZXJTaG93VHJhdmVsZXJCdXR0b24odHJpcHMsIGRlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN1Y2Nlc3NmdWxBZ2VuY3lMb2dpbigpIHtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlckxvZ091dEJ1dHRvbigpO1xuICByZW5kZXJBZ2VudFdlbGNvbWUoKTtcbiAgdHJhdmVsVHJhY2tlclNlcnZpY2UuZ2V0QWxsVHJpcHMoKS50aGVuKGZ1bmN0aW9uICh0cmlwcykge1xuICAgIHRyYXZlbFRyYWNrZXJTZXJ2aWNlLmdldEFsbERlc3RpbmF0aW9ucygpLnRoZW4oZnVuY3Rpb24gKGRlc3RpbmF0aW9ucykge1xuICAgICAgdHJpcHM7XG4gICAgICByZW5kZXJUb3BIYWxmT2ZBZ2VudERhc2hib2FyZCh0cmlwcywgZGVzdGluYXRpb25zKTtcbiAgICAgIHJlbmRlckJvdHRvbUhhbGZPZkFnZW50RGFzaGJvYXJkKHRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuQXBwcm92ZWRUcmlwcyh0cmlwcykge1xuICBsZXQgYXBwcm92ZWRUcmlwcyA9IFtdO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXBzW2ldLnN0YXR1cyA9PT0gXCJhcHByb3ZlZFwiKSB7XG4gICAgICBhcHByb3ZlZFRyaXBzLnB1c2godHJpcHNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXBwcm92ZWRUcmlwcztcbn1cblxuZnVuY3Rpb24gbG9vcFRocm91Z2hBcHByb3ZlZFRyaXAoXG4gIGFwcHJvdmVkVHJpcCxcbiAgZGVzdGluYXRpb25zLFxuICBkZXN0aW5hdGlvbkluZGV4LFxuICBhcHByb3ZlZFRyaXBzRmxpZ2h0UGx1c0xvZGdpbmdBcnJcbikge1xuICBmb3IgKFxuICAgIGRlc3RpbmF0aW9uSW5kZXggPSAwO1xuICAgIGRlc3RpbmF0aW9uSW5kZXggPCBkZXN0aW5hdGlvbnMubGVuZ3RoO1xuICAgIGRlc3RpbmF0aW9uSW5kZXgrK1xuICApIHtcbiAgICBsZXQgZGVzdGluYXRpb25JRCA9IGFwcHJvdmVkVHJpcC5kZXN0aW5hdGlvbklEO1xuICAgIGxldCBkZXN0aW5hdGlvbkluZGV4SWQgPSBkZXN0aW5hdGlvbnNbZGVzdGluYXRpb25JbmRleF0uaWQ7XG4gICAgaWYgKGRlc3RpbmF0aW9uSUQgPT09IGRlc3RpbmF0aW9uSW5kZXhJZCkge1xuICAgICAgYXBwcm92ZWRUcmlwc0ZsaWdodFBsdXNMb2RnaW5nQXJyLnB1c2goXG4gICAgICAgIGRlc3RpbmF0aW9uc1tkZXN0aW5hdGlvbkluZGV4XS5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSArXG4gICAgICAgIGRlc3RpbmF0aW9uc1tkZXN0aW5hdGlvbkluZGV4XS5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uXG4gICAgICApO1xuICAgICAgbGV0IGFwcHJvdmVkVHJpcEZsaWdodFBsdXNMb2RnaW5nID0gYXBwcm92ZWRUcmlwc0ZsaWdodFBsdXNMb2RnaW5nQXJyO1xuICAgICAgcmV0dXJuIGFwcHJvdmVkVHJpcEZsaWdodFBsdXNMb2RnaW5nO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5BcHByb3ZlZFRyaXBzRmxpZ2h0c0FuZExvZGdpbmcoZGVzdGluYXRpb25zLCBhcHByb3ZlZFRyaXBzKSB7XG4gIGxldCBhcHByb3ZlZFRyaXBzRmxpZ2h0UGx1c0xvZGdpbmdBcnIgPSBbXTtcbiAgbGV0IGRlc3RpbmF0aW9uSW5kZXg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwcm92ZWRUcmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGxvb3BUaHJvdWdoQXBwcm92ZWRUcmlwKFxuICAgICAgYXBwcm92ZWRUcmlwc1tpXSxcbiAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgIGRlc3RpbmF0aW9uSW5kZXgsXG4gICAgICBhcHByb3ZlZFRyaXBzRmxpZ2h0UGx1c0xvZGdpbmdBcnJcbiAgICApO1xuICB9XG4gIHJldHVybiBhcHByb3ZlZFRyaXBzRmxpZ2h0UGx1c0xvZGdpbmdBcnI7XG59XG5cbmZ1bmN0aW9uIGdldExvZGdpbmdDb3N0c0ZvckFnZW50KGRlc3RpbmF0aW9ucywgdHJpcHMpIHtcbiAgbGV0IGFwcHJvdmVkVHJpcHMgPSByZXR1cm5BcHByb3ZlZFRyaXBzKHRyaXBzKTtcbiAgbGV0IGFwcHJvdmVkVHJpcHNGbGlnaHRzUGx1c0xvZGdpbmcgPSByZXR1cm5BcHByb3ZlZFRyaXBzRmxpZ2h0c0FuZExvZGdpbmcoXG4gICAgZGVzdGluYXRpb25zLFxuICAgIGFwcHJvdmVkVHJpcHNcbiAgKTtcbiAgbGV0IGFtb3VudFRyYXZlbGVyc0hhdmVTcGVudCA9IGFwcHJvdmVkVHJpcHNGbGlnaHRzUGx1c0xvZGdpbmcucmVkdWNlKFxuICAgIChsb2RnaW5nQ29zdCwgZmxpZ2h0Q29zdCkgPT4gbG9kZ2luZ0Nvc3QgKyBmbGlnaHRDb3N0LFxuICAgIDBcbiAgKTtcbiAgbGV0IGFtb3VudEFnZW50RWFybmVkID0gYW1vdW50VHJhdmVsZXJzSGF2ZVNwZW50ICogMC4xO1xuICByZXR1cm4gYW1vdW50QWdlbnRFYXJuZWQ7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvdGFsRWFybmVkKGFtb3VudEFnZW50RWFybmVkKSB7XG4gIGFtb3VudEFnZW50RWFybmVkO1xuICBsZXQgdG90YWxBbW91bnQgPSBhbW91bnRBZ2VudEVhcm5lZC50b0ZpeGVkKDIpO1xuICBsZXQgdG90YWxFYXJuZWRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xuICB0b3RhbEVhcm5lZFBhcmFncmFwaC5jbGFzc05hbWUgPSBcInRvdGFsLXNwZW50XCI7XG4gIGxldCB0b3RhbEVhcm5lZFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBgVG90YWwgQW1vdW50IEVhcm5lZDogJCR7dG90YWxBbW91bnR9YFxuICApO1xuICB0b3RhbEVhcm5lZFBhcmFncmFwaC5hcHBlbmRDaGlsZCh0b3RhbEVhcm5lZFRleHQpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZCh0b3RhbEVhcm5lZFBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBzKHRvZGF5c1RyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlckRlc3RpbmF0aW9uSW1hZ2UodG9kYXlzVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwRGF0ZSh0b2RheXNUcmlwcyk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwRGVzdGluYXRpb24odG9kYXlzVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwU3RhdHVzKHRvZGF5c1RyaXBzKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBEdXJhdGlvbih0b2RheXNUcmlwcyk7XG4gIHJlbmRlckFwcHJvdmVBbmREZW55QnV0dG9ucyh0b2RheXNUcmlwcywgZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGVuZGluZ1RyaXBzKHBlbmRpbmdUcmlwLCBkZXN0aW5hdGlvbnMpIHtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlckRlc3RpbmF0aW9uSW1hZ2UocGVuZGluZ1RyaXAsIGRlc3RpbmF0aW9ucyk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwRGF0ZShwZW5kaW5nVHJpcCk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwRGVzdGluYXRpb24ocGVuZGluZ1RyaXAsIGRlc3RpbmF0aW9ucyk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwU3RhdHVzKHBlbmRpbmdUcmlwKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBEdXJhdGlvbihwZW5kaW5nVHJpcCk7XG4gIHJlbmRlckFwcHJvdmVBbmREZW55QnV0dG9ucyhwZW5kaW5nVHJpcCwgZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWdlbnRUcmlwcyhwZW5kaW5nVHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBpZiAocGVuZGluZ1RyaXBzLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGV0IHRvZGF5c1RyaXBzID0gcGVuZGluZ1RyaXBzLnRvZGF5c1RyaXBzO1xuICAgIHJlbmRlclRyaXBzKHRvZGF5c1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBwZW5kaW5nVHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlbmRlclBlbmRpbmdUcmlwcyhwZW5kaW5nVHJpcHNbaV0sIGRlc3RpbmF0aW9ucyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEFwcHJvdmVBbmREZW55QnV0dG9uKGFwcHJvdmVCdXR0b24sIGRlbnlCdXR0b24pIHtcbiAgZGFzaGJvYXJkSGVscGVyLmFwcGVuZFRvU2VjdGlvbihhcHByb3ZlQnV0dG9uKTtcbiAgZGFzaGJvYXJkSGVscGVyLmFwcGVuZFRvU2VjdGlvbihkZW55QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXBwcm92ZUJ1dHRvbihwZW5kaW5nVHJpcElkKSB7XG4gIGxldCBhcHByb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYXBwcm92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgYXBwcm92ZS1idXR0b24tJHtwZW5kaW5nVHJpcElkfWApO1xuICBhcHByb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXBwcm92ZS1idXR0b25cIik7XG4gIGFwcHJvdmVCdXR0b24udGV4dENvbnRlbnQgPSBcIkFQUFJPVkVcIjtcbiAgcmV0dXJuIGFwcHJvdmVCdXR0b247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlbnlCdXR0b24ocGVuZGluZ1RyaXBJZCkge1xuICBsZXQgZGVueUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbnlCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbnktYnV0dG9uLSR7cGVuZGluZ1RyaXBJZH1gKTtcbiAgZGVueUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbnktYnV0dG9uXCIpO1xuICBkZW55QnV0dG9uLnRleHRDb250ZW50ID0gXCJERUxFVEUgVFJJUFwiO1xuICByZXR1cm4gZGVueUJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gc2V0RGF0YShzdGF0dXMsIHBlbmRpbmdUcmlwSWQpIHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBpZDogcGVuZGluZ1RyaXBJZCxcbiAgICBzdGF0dXMsXG4gICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW10sXG4gIH07XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBmZXRjaFBvc3RDYWxsKGRhdGEpIHtcbiAgZmV0Y2goXG4gICAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXIvZGF0YS90cmlwcy91cGRhdGVUcmlwXCIsXG4gICAge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfVxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGFsZXJ0KFwiU3VjY2VzczpcIiwgZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBhbGVydChcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEJ1dHRvbk9uY2xpY2socGVuZGluZ1RyaXAsIGJ1dHRvbiwgc3RhdHVzKSB7XG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gYXBwcm92ZU9yRGVueVRyaXAoKSB7XG4gICAgcGVuZGluZ1RyaXA7XG4gICAgbGV0IGRhdGEgPSBzZXREYXRhKHN0YXR1cywgcGVuZGluZ1RyaXAuaWQpO1xuICAgIGZldGNoUG9zdENhbGwoZGF0YSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZldGNoQW5kRGVsZXRlVHJpcChkYXRhKSB7XG4gIGZldGNoKFxuICAgIFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvdHJpcHMvdHJpcHNcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsIC8vIG9yICdQVVQnXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH1cbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBhbGVydChcIlN1Y2Nlc3M6XCIsIGRhdGEpO1xuICAgIH0pO1xuICBhbGVydCgoZXJyb3IpID0+IHtcbiAgICBhbGVydChcIkVycm9yOlwiLCBlcnJvcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRCdXR0b25PbmNsaWNrVG9EZWxldGUocGVuZGluZ1RyaXAsIGJ1dHRvbikge1xuICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uIGRlbGV0ZVRyaXAoKSB7XG4gICAgcGVuZGluZ1RyaXA7XG4gICAgbGV0IGRhdGEgPSB7IGlkOiBwZW5kaW5nVHJpcC5pZCB9O1xuICAgIGZldGNoQW5kRGVsZXRlVHJpcChkYXRhKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQnV0dG9uc0ZvclRyYXZlbGVyUGFnZShwZW5kaW5nVHJpcCkge1xuICBsZXQgYXBwcm92ZUJ1dHRvbiA9IGNyZWF0ZUFwcHJvdmVCdXR0b24ocGVuZGluZ1RyaXAuaWQpO1xuICBsZXQgZGVueUJ1dHRvbiA9IGNyZWF0ZURlbnlCdXR0b24ocGVuZGluZ1RyaXAuaWQpO1xuICBhcHBlbmRBcHByb3ZlQW5kRGVueUJ1dHRvbihhcHByb3ZlQnV0dG9uLCBkZW55QnV0dG9uKTtcbiAgc2V0QnV0dG9uT25jbGljayhwZW5kaW5nVHJpcCwgYXBwcm92ZUJ1dHRvbiwgXCJhcHByb3ZlZFwiKTtcbiAgc2V0QnV0dG9uT25jbGlja1RvRGVsZXRlKHBlbmRpbmdUcmlwLCBkZW55QnV0dG9uLCBcInBlbmRpbmdcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJ1dHRvbnNGb3JBZ2VudERhc2hib2FyZChwZW5kaW5nVHJpcCkge1xuICBsZXQgYXBwcm92ZUJ1dHRvbiA9IGNyZWF0ZUFwcHJvdmVCdXR0b24ocGVuZGluZ1RyaXAuaWQpO1xuICBsZXQgZGVueUJ1dHRvbiA9IGNyZWF0ZURlbnlCdXR0b24ocGVuZGluZ1RyaXAuaWQpO1xuICBhcHBlbmRBcHByb3ZlQW5kRGVueUJ1dHRvbihhcHByb3ZlQnV0dG9uLCBkZW55QnV0dG9uKTtcbiAgc2V0QnV0dG9uT25jbGljayhwZW5kaW5nVHJpcCwgYXBwcm92ZUJ1dHRvbiwgXCJhcHByb3ZlZFwiKTtcbiAgc2V0QnV0dG9uT25jbGljayhwZW5kaW5nVHJpcCwgZGVueUJ1dHRvbiwgXCJwZW5kaW5nXCIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBcHByb3ZlQW5kRGVueUJ1dHRvbnMocGVuZGluZ1RyaXAsIGRlc3RpbmF0aW9ucykge1xuICBkZXN0aW5hdGlvbnM7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYXZlbGVyLXBhZ2VcIikpIHtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgcGVuZGluZ1RyaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlbmRlckJ1dHRvbnNGb3JUcmF2ZWxlclBhZ2UocGVuZGluZ1RyaXBbaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZW5kZXJCdXR0b25zRm9yQWdlbnREYXNoYm9hcmQocGVuZGluZ1RyaXApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYXZlbGVyc05hbWVzKHJlc3VsdCkge1xuICBsZXQgdHJhdmVsZXJzID0gW107XG4gIGxldCB0cmF2ZWxlcnNBcnJheSA9IHJlc3VsdDtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0cmF2ZWxlcnNBcnJheS50cmF2ZWxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICB0cmF2ZWxlcnMucHVzaCh0cmF2ZWxlcnNBcnJheS50cmF2ZWxlcnNbaV0ubmFtZSk7XG4gIH1cbiAgcmV0dXJuIHRyYXZlbGVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVyVHJhdlNlYXJjaEJhckxhYmVsKCkge1xuICBsZXQgdHJhdlNlYXJjaEJhckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0cmF2U2VhcmNoQmFyTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidHJhdmVsZXItbGlzdFwiKTtcbiAgbGV0IHRyYXZTZWFyY2hCYXJMYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBcIlNlYXJjaCBmb3IgYSBUcmF2ZWxlcjpcIlxuICApO1xuICB0cmF2U2VhcmNoQmFyTGFiZWwuYXBwZW5kQ2hpbGQodHJhdlNlYXJjaEJhckxhYmVsVGV4dCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzJdLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWdlbnQtdG9vbHNcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzJdLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGFpbmVyXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50LXRvb2xzXCIpLmFwcGVuZENoaWxkKHRyYXZTZWFyY2hCYXJMYWJlbCk7XG59XG5cbmZ1bmN0aW9uIHNldElucHV0TGlzdCgpIHtcbiAgbGV0IGlucHV0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXRMaXN0LnNldEF0dHJpYnV0ZShcImxpc3RcIiwgXCJ0cmF2ZWxlci1saXN0XCIpO1xuICBpbnB1dExpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0cmF2ZWxlclwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudC10b29sc1wiKS5hcHBlbmRDaGlsZChpbnB1dExpc3QpO1xufVxuXG5mdW5jdGlvbiBzZXREYXRhTGlzdCgpIHtcbiAgbGV0IGRhdGFMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRhdGFsaXN0XCIpO1xuICBkYXRhTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRyYXZlbGVyLWxpc3RcIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnQtdG9vbHNcIikuYXBwZW5kQ2hpbGQoZGF0YUxpc3QpO1xufVxuXG5mdW5jdGlvbiByZXR1cm5UcmF2ZWxlcnNOYW1lcyhyZXN1bHQpIHtcbiAgbGV0IHRyYXZlbGVycyA9IHRyYXZlbGVyc05hbWVzKHJlc3VsdCk7XG4gIGNyZWF0ZUFuZFJlbmRlclRyYXZTZWFyY2hCYXJMYWJlbCgpO1xuICBzZXRJbnB1dExpc3QoKTtcbiAgc2V0RGF0YUxpc3QoKTtcbiAgcmV0dXJuIHRyYXZlbGVycztcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJhdmVsZXJTZWFyY2hCYXIoKSB7XG4gIHRyYXZlbFRyYWNrZXJTZXJ2aWNlLmdldEFsbFRyYXZlbGVycygpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGxldCB0cmF2ZWxlcnMgPSByZXR1cm5UcmF2ZWxlcnNOYW1lcyhyZXN1bHQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhdmVsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHt0cmF2ZWxlcnNbaV19YCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYXZlbGVyLWxpc3RcIikuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTaW5nbGVUcmF2ZWxlckJ5TmFtZSh0cmF2ZWxlcnMpIHtcbiAgbGV0IGFsbFRyYXZlbGVycyA9IHRyYXZlbGVycy50cmF2ZWxlcnM7XG4gIGxldCB0cmF2ZWxlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYXZlbGVyXCIpLnZhbHVlO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGFsbFRyYXZlbGVycy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmF2ZWxlck5hbWUgPT09IGFsbFRyYXZlbGVyc1tpXS5uYW1lKSB7XG4gICAgICBsZXQgdHJhdmVsZXIgPSBhbGxUcmF2ZWxlcnNbaV07XG4gICAgICByZXR1cm4gdHJhdmVsZXI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldExvZGdpbmdDb3N0cyh0cmF2ZWxlckRlc3RpbmF0aW9ucywgdHJhdmVsZXJUcmlwcykge1xuICBsZXQgbG9kZ2luZ0Nvc3RzID0gdHJhdmVsZXJEYXNoYm9hcmRIZWxwZXIuZ2V0TG9kZ2luZ0Nvc3RzKFxuICAgIHRyYXZlbGVyRGVzdGluYXRpb25zLFxuICAgIHRyYXZlbGVyVHJpcHNcbiAgKTtcbiAgcmV0dXJuIGxvZGdpbmdDb3N0cztcbn1cblxuZnVuY3Rpb24gZ2V0RmxpZ2h0Q29zdHModHJhdmVsZXJEZXN0aW5hdGlvbnMsIHRyYXZlbGVyVHJpcHMpIHtcbiAgbGV0IGZsaWdodENvc3RzID0gdHJhdmVsZXJEYXNoYm9hcmRIZWxwZXIuZ2V0RmxpZ2h0Q29zdHMoXG4gICAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gICAgdHJhdmVsZXJUcmlwc1xuICApO1xuICByZXR1cm4gZmxpZ2h0Q29zdHM7XG59XG5cbmZ1bmN0aW9uIGdldEZsaWdodHNQbHVzTG9kZ2luZyh0cmF2ZWxlciwgdHJhdmVsZXJUcmlwcywgdHJhdmVsZXJEZXN0aW5hdGlvbnMpIHtcbiAgbGV0IGxvZGdpbmdDb3N0cyA9IGdldExvZGdpbmdDb3N0cyh0cmF2ZWxlckRlc3RpbmF0aW9ucywgdHJhdmVsZXJUcmlwcyk7XG4gIGxldCBmbGlnaHRDb3N0cyA9IGdldEZsaWdodENvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKTtcbiAgbGV0IGZsaWdodHNQbHVzTG9kZ2luZyA9IHRyYXZlbGVyRGFzaGJvYXJkSGVscGVyLmFkZEZsaWdodGFuZExvZGdpbmdDb3N0cyhcbiAgICBmbGlnaHRDb3N0cyxcbiAgICBsb2RnaW5nQ29zdHNcbiAgKTtcbiAgcmV0dXJuIGZsaWdodHNQbHVzTG9kZ2luZztcbn1cblxuZnVuY3Rpb24gYWRkRmVlKHRyYXZlbGVyLCB0cmF2ZWxlclRyaXBzLCB0cmF2ZWxlckRlc3RpbmF0aW9ucywgZGVzdGluYXRpb25zKSB7XG4gIGxldCBmbGlnaHRzUGx1c0xvZGdpbmcgPSBnZXRGbGlnaHRzUGx1c0xvZGdpbmcoXG4gICAgdHJhdmVsZXIsXG4gICAgdHJhdmVsZXJUcmlwcyxcbiAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucyxcbiAgICBkZXN0aW5hdGlvbnNcbiAgKTtcbiAgbGV0IHRvdGFsQmVmb3JlRmVlID0gdHJhdmVsZXJEYXNoYm9hcmRIZWxwZXIucmVkdWNlRmxpZ2h0c1BsdXNMb2RnaW5nKFxuICAgIGZsaWdodHNQbHVzTG9kZ2luZ1xuICApO1xuICB2YXIgdG90YWxBZnRlckFnZW50RmVlID0gdG90YWxCZWZvcmVGZWUgKiAxLjE7XG4gIHJldHVybiB0b3RhbEFmdGVyQWdlbnRGZWU7XG59XG5cbmZ1bmN0aW9uIGdldFRvdGFsQWZ0ZXJBZ2VudEZlZShcbiAgdHJhdmVsZXIsXG4gIHRyYXZlbGVyVHJpcHMsXG4gIHRyYXZlbGVyRGVzdGluYXRpb25zLFxuICBkZXN0aW5hdGlvbnNcbikge1xuICBsZXQgdG90YWxBZnRlckFnZW50RmVlID0gYWRkRmVlKFxuICAgIHRyYXZlbGVyLFxuICAgIHRyYXZlbGVyVHJpcHMsXG4gICAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gICAgZGVzdGluYXRpb25zXG4gICk7XG4gIHJldHVybiB0b3RhbEFmdGVyQWdlbnRGZWU7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVEYXNoYm9hcmREYXRhKHJlc3VsdCwgdHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgdHJhdmVsZXJzID0gcmVzdWx0O1xuICBsZXQgdHJhdmVsZXIgPSBnZXRTaW5nbGVUcmF2ZWxlckJ5TmFtZSh0cmF2ZWxlcnMpO1xuICBsZXQgdHJhdmVsZXJUcmlwcyA9IGdldFRyYXZlbGVyc1RyaXBzKHRyaXBzLCB0cmF2ZWxlcik7XG4gIGxldCB0cmF2ZWxlckRlc3RpbmF0aW9ucyA9IGdldFRyYXZlbGVyc0Rlc3RpbmF0aW9ucyhcbiAgICB0cmF2ZWxlclRyaXBzLFxuICAgIGRlc3RpbmF0aW9uc1xuICApO1xuICBsZXQgdG90YWxBZnRlckFnZW50RmVlID0gZ2V0VG90YWxBZnRlckFnZW50RmVlKFxuICAgIHRyYXZlbGVyLFxuICAgIHRyYXZlbGVyVHJpcHMsXG4gICAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gICAgZGVzdGluYXRpb25zXG4gICk7XG4gIHJldHVybiB7XG4gICAgdHJhdmVsZXIsXG4gICAgdHJhdmVsZXJUcmlwcyxcbiAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucyxcbiAgICB0b3RhbEFmdGVyQWdlbnRGZWUsXG4gICAgZGVzdGluYXRpb25zLFxuICB9O1xufVxuXG5mdW5jdGlvbiBoaWRlU2VhcmNoRm9ybVJlbmRlckhlYWRlckFuZFRvdGFsU3BlbnQodHJhdmVsZXJJbmZvKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnQtdG9vbHNcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoYCR7dHJhdmVsZXJJbmZvLnRyYXZlbGVyLm5hbWV9J3NgKTtcbiAgbGV0IHRyYXZlbGVyUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzNdO1xuICB0cmF2ZWxlclBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0cmF2ZWxlci1wYWdlXCIpO1xuICB0cmF2ZWxlckRhc2hib2FyZEhlbHBlci5yZW5kZXJUb3RhbFNwZW50KHRyYXZlbGVySW5mbyk7XG59XG5cbmZ1bmN0aW9uIGdldFBlbmRpbmdBbmRBcHByb3ZlZFRyaXBzKHRyYXZlbGVySW5mbykge1xuICBsZXQgcGVuZGluZ1RyaXBzID0gW107XG4gIGxldCBhcHByb3ZlZFRyaXBzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhdmVsZXJJbmZvLnRyYXZlbGVyVHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHJhdmVsZXJJbmZvLnRyYXZlbGVyVHJpcHNbaV0uc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xuICAgICAgcGVuZGluZ1RyaXBzLnB1c2godHJhdmVsZXJJbmZvLnRyYXZlbGVyVHJpcHNbaV0pO1xuICAgIH0gZWxzZSBpZiAodHJhdmVsZXJJbmZvLnRyYXZlbGVyVHJpcHNbaV0uc3RhdHVzID09PSBcImFwcHJvdmVkXCIpIHtcbiAgICAgIGFwcHJvdmVkVHJpcHMucHVzaCh0cmF2ZWxlckluZm8udHJhdmVsZXJUcmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHBlbmRpbmdUcmlwcywgYXBwcm92ZWRUcmlwcyB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmF2ZWxlclBhZ2VGb3JBZ2VudCh0cmF2ZWxlckluZm8pIHtcbiAgaGlkZVNlYXJjaEZvcm1SZW5kZXJIZWFkZXJBbmRUb3RhbFNwZW50KHRyYXZlbGVySW5mbyk7XG4gIGxldCB0cmlwcyA9IGdldFBlbmRpbmdBbmRBcHByb3ZlZFRyaXBzKHRyYXZlbGVySW5mbyk7XG4gIGxldCBwZW5kaW5nVHJpcHMgPSB0cmlwcy5wZW5kaW5nVHJpcHM7XG4gIGxldCBhcHByb3ZlZFRyaXBzID0gdHJpcHMuYXBwcm92ZWRUcmlwcztcbiAgbGV0IGRlc3RpbmF0aW9ucyA9IHRyYXZlbGVySW5mby5kZXN0aW5hdGlvbnM7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwcyhwZW5kaW5nVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwcyhhcHByb3ZlZFRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICByZW5kZXJBcHByb3ZlQW5kRGVueUJ1dHRvbnMocGVuZGluZ1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaG93VHJhdmVsZXJCdXR0b24oKSB7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250YWluZXJcIilbMl1cbiAgICAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZ2VudC10b29sc1wiKTtcbiAgbGV0IHNob3dUcmF2ZWxlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNob3dUcmF2ZWxlckJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNob3ctdHJhdmVsZXItYnV0dG9uXCIpO1xuICBzaG93VHJhdmVsZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIlNIT1cgVFJBVkVMRVJcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudC10b29sc1wiKS5hcHBlbmRDaGlsZChzaG93VHJhdmVsZXJCdXR0b24pO1xuICByZXR1cm4gc2hvd1RyYXZlbGVyQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBnZXRUcmF2ZWxlcnNUcmlwcyh0cmlwcywgdHJhdmVsZXIpIHtcbiAgbGV0IGk7XG4gIGxldCB0cmF2ZWxlclRyaXBzID0gW107XG4gIGZvciAoaSA9IDA7IGkgPCB0cmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmF2ZWxlci5pZCA9PT0gdHJpcHNbaV0udXNlcklEKSB7XG4gICAgICB0cmF2ZWxlclRyaXBzLnB1c2godHJpcHNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhdmVsZXJUcmlwcztcbn1cblxuZnVuY3Rpb24gbG9vcFRocm91Z2hEZXN0aW5hdGlvbnMoXG4gIGRlc3RpbmF0aW9ucyxcbiAgdHJhdmVsZXJUcmlwLFxuICBkZXN0aW5hdGlvbixcbiAgdHJhdmVsZXJEZXN0aW5hdGlvbnNBcnJcbikge1xuICBsZXQgZGVzdGluYXRpb25JbmRleDtcbiAgZm9yIChcbiAgICBkZXN0aW5hdGlvbkluZGV4ID0gMDtcbiAgICBkZXN0aW5hdGlvbkluZGV4IDwgZGVzdGluYXRpb25zLmxlbmd0aDtcbiAgICBkZXN0aW5hdGlvbkluZGV4KytcbiAgKSB7XG4gICAgaWYgKHRyYXZlbGVyVHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbnNbZGVzdGluYXRpb25JbmRleF0uaWQpIHtcbiAgICAgIHRyYXZlbGVyRGVzdGluYXRpb25zQXJyLnB1c2goZGVzdGluYXRpb24pO1xuICAgIH1cbiAgfVxuICBsZXQgdHJhdmVsZXJEZXN0aW5hdGlvbnMgPSB0cmF2ZWxlckRlc3RpbmF0aW9uc0FycjtcbiAgcmV0dXJuIHRyYXZlbGVyRGVzdGluYXRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRUcmF2ZWxlcnNEZXN0aW5hdGlvbnModHJhdmVsZXJUcmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGxldCB0cmF2ZWxlckRlc3RpbmF0aW9uc0FyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXZlbGVyVHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdHJhdmVsZXJEZXN0aW5hdGlvbnMgPSBsb29wVGhyb3VnaERlc3RpbmF0aW9ucyhcbiAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgIHRyYXZlbGVyVHJpcHNbaV0sXG4gICAgICBkZXN0aW5hdGlvbnNbaV0sXG4gICAgICB0cmF2ZWxlckRlc3RpbmF0aW9uc0FyclxuICAgICk7XG4gICAgcmV0dXJuIHRyYXZlbGVyRGVzdGluYXRpb25zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFNob3dUcmF2ZWxlckJ1dHRvbk9uQ2xpY2soc2hvd1RyYXZlbGVyQnV0dG9uLCB0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIHNob3dUcmF2ZWxlckJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gc2hvd1RyYXZlbGVySW5mb3JtYXRpb24oKSB7XG4gICAgdHJpcHM7XG4gICAgZGVzdGluYXRpb25zO1xuICAgIHRyYXZlbFRyYWNrZXJTZXJ2aWNlLmdldEFsbFRyYXZlbGVycygpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgbGV0IGRhc2hib2FyZERhdGEgPSBwcmVwYXJlRGFzaGJvYXJkRGF0YShyZXN1bHQsIHRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICAgICAgcmVuZGVyVHJhdmVsZXJQYWdlRm9yQWdlbnQoZGFzaGJvYXJkRGF0YSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNob3dUcmF2ZWxlckJ1dHRvbih0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGxldCBzaG93VHJhdmVsZXJCdXR0b24gPSBjcmVhdGVTaG93VHJhdmVsZXJCdXR0b24oKTtcbiAgc2V0U2hvd1RyYXZlbGVyQnV0dG9uT25DbGljayhzaG93VHJhdmVsZXJCdXR0b24sIHRyaXBzLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5leHBvcnQgeyByZW5kZXJTdWNjZXNzZnVsQWdlbmN5TG9naW4gfTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAqIGFzIHRyYXZlbF90cmFja2VyX3NlcnZpY2UgZnJvbSBcIi4vdHJhdmVsX3RyYWNrZXJfc2VydmljZVwiO1xuXG5mdW5jdGlvbiByZW5kZXJUcmlwc0hlYWRlcih0aXRsZSkge1xuICBsZXQgdXBjb21pbmdUcmlwc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgdXBjb21pbmdUcmlwc1NlY3Rpb24uY2xhc3NOYW1lID0gXCJjb250YWluZXJcIjtcbiAgbGV0IHVwY29taW5nVHJpcHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGxldCB1cGNvbWluZ1RyaXBzSGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3RpdGxlfSBUcmlwczpgKTtcbiAgYXBwZW5kSGVhZGVyKFxuICAgIHVwY29taW5nVHJpcHNTZWN0aW9uLFxuICAgIHVwY29taW5nVHJpcHNIZWFkZXIsXG4gICAgdXBjb21pbmdUcmlwc0hlYWRlclRleHRcbiAgKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kSGVhZGVyKFxuICB1cGNvbWluZ1RyaXBzU2VjdGlvbixcbiAgdXBjb21pbmdUcmlwc0hlYWRlcixcbiAgdXBjb21pbmdUcmlwc0hlYWRlclRleHRcbikge1xuICB1cGNvbWluZ1RyaXBzSGVhZGVyLmFwcGVuZENoaWxkKHVwY29taW5nVHJpcHNIZWFkZXJUZXh0KTtcbiAgdXBjb21pbmdUcmlwc1NlY3Rpb24uYXBwZW5kQ2hpbGQodXBjb21pbmdUcmlwc0hlYWRlcik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXS5hcHBlbmRDaGlsZCh1cGNvbWluZ1RyaXBzU2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIGdldFBlbmRpbmdUcmlwcyh0cmlwcykge1xuICBsZXQgaTtcbiAgbGV0IHBlbmRpbmdUcmlwcyA9IFtdO1xuICBmb3IgKGkgPSAwOyBpIDwgdHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHJpcHNbaV0uc3RhdHVzID09PSBcInBlbmRpbmdcIikge1xuICAgICAgcGVuZGluZ1RyaXBzLnB1c2godHJpcHNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGVuZGluZ1RyaXBzO1xufVxuXG5mdW5jdGlvbiBnZXRUb2RheXNUcmlwcyh0cmlwcykge1xuICBsZXQgdG9kYXkgPSByZXR1cm5DdXJyZW50RGF0ZSgpO1xuICBsZXQgaTtcbiAgbGV0IHRvZGF5c1RyaXBzID0gW107XG4gIGZvciAoaSA9IDA7IGkgPCB0cmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwc1tpXS5kYXRlID09PSB0b2RheSkge1xuICAgICAgdG9kYXlzVHJpcHMucHVzaCh0cmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHRvZGF5c1RyaXBzIH07XG59XG5cbmZ1bmN0aW9uIHJldHVybkN1cnJlbnREYXRlKCkge1xuICB2YXIgbXlEYXRlID0gbmV3IERhdGUoKTtcbiAgdmFyIG15RGF0ZVN0cmluZztcbiAgbXlEYXRlU3RyaW5nID1cbiAgICBteURhdGUuZ2V0RnVsbFllYXIoKSArXG4gICAgXCIvXCIgK1xuICAgIChcIjBcIiArIChteURhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMikgK1xuICAgIFwiL1wiICtcbiAgICAoXCIwXCIgKyBteURhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XG4gIGxldCB0b2RheSA9IG15RGF0ZVN0cmluZztcbiAgcmV0dXJuIHRvZGF5O1xufVxuXG5mdW5jdGlvbiBpc1RyYXZlbGVyUGFnZSgpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsZXItcGFnZVwiKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvVHJhdmVsZXJQYWdlKHBhcmFncmFwaCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYXZlbGVyLXBhZ2VcIikuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gaXNSZXF1ZXN0ZWRPclVwY29taW5nVHJpcHNTZWN0aW9uKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJTRUNUSU9OXCIpLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvUmVxdWVzdGVkT3JVcGNvbWluZ1RyaXBzU2VjdGlvbihwYXJhZ3JhcGgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJTRUNUSU9OXCIpWzBdLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIG5vU2VjdGlvbnNIYXZlTG9hZGVkKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJTRUNUSU9OXCIpLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRUb0JvZHkocGFyYWdyYXBoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIGlzVG9kYXlzVHJpcHNTZWN0aW9uKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMV0uaW5uZXJUZXh0ID09PSBcIlRvZGF5J3MgVHJpcHM6XCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRUb1RvZGF5c1RyaXBTZWN0aW9uKHBhcmFncmFwaCkge1xuICBsZXQgdG9kYXlzVHJpcHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMV07XG4gIHRvZGF5c1RyaXBzU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZGF5cy10cmlwc1wiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheXMtdHJpcHNcIikuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gaXNQYXN0VHJpcHNTZWN0aW9uKCkge1xuICBpZiAoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMV0uaW5uZXJUZXh0LmluY2x1ZGVzKFwiUGFzdCBUcmlwc1wiKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBlbmRUb1Bhc3RUcmlwc1NlY3Rpb24ocGFyYWdyYXBoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzFdLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvU2VjdGlvbihwYXJhZ3JhcGgpIHtcbiAgaWYgKGlzVHJhdmVsZXJQYWdlKCkpIHtcbiAgICBhcHBlbmRUb1RyYXZlbGVyUGFnZShwYXJhZ3JhcGgpO1xuICB9IGVsc2UgaWYgKGlzUmVxdWVzdGVkT3JVcGNvbWluZ1RyaXBzU2VjdGlvbigpKSB7XG4gICAgYXBwZW5kVG9SZXF1ZXN0ZWRPclVwY29taW5nVHJpcHNTZWN0aW9uKHBhcmFncmFwaCk7XG4gIH0gZWxzZSBpZiAobm9TZWN0aW9uc0hhdmVMb2FkZWQoKSkge1xuICAgIGFwcGVuZFRvQm9keShwYXJhZ3JhcGgpO1xuICB9IGVsc2UgaWYgKGlzVG9kYXlzVHJpcHNTZWN0aW9uKCkpIHtcbiAgICBhcHBlbmRUb1RvZGF5c1RyaXBTZWN0aW9uKHBhcmFncmFwaCk7XG4gIH0gZWxzZSBpZiAoaXNQYXN0VHJpcHNTZWN0aW9uKCkpIHtcbiAgICBhcHBlbmRUb1Bhc3RUcmlwc1NlY3Rpb24ocGFyYWdyYXBoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwRGF0ZSh0cmlwKSB7XG4gIGxldCB0cmlwRGF0ZSA9IHRyaXAuZGF0ZTtcbiAgbGV0IHRyaXBEYXRlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdHJpcERhdGVQYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJ0cmlwLWRhdGVcIjtcbiAgbGV0IHRyaXBEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUcmlwIERhdGU6ICR7dHJpcERhdGV9IGApO1xuICB0cmlwRGF0ZVBhcmFncmFwaC5hcHBlbmRDaGlsZCh0cmlwRGF0ZVRleHQpO1xuICBhcHBlbmRUb1NlY3Rpb24odHJpcERhdGVQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmREZXN0aW5hdGlvbih0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGgsIHRyaXBEZXN0aW5hdGlvblRleHQpIHtcbiAgdHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRyaXBEZXN0aW5hdGlvblRleHQpO1xuICBhcHBlbmRUb1NlY3Rpb24odHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kVHJpcERlc3RpbmF0aW9uKHRyaXBEZXN0aW5hdGlvblBhcmFncmFwaCwgdHJpcERlc3RpbmF0aW9uVGV4dCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheXMtdHJpcHNcIikpIHtcbiAgICB0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodHJpcERlc3RpbmF0aW9uVGV4dCk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcInRvZGF5cy10cmlwc1wiKVxuICAgICAgLmFwcGVuZENoaWxkKHRyaXBEZXN0aW5hdGlvblBhcmFncmFwaCk7XG4gIH1cbiAgYXBwZW5kRGVzdGluYXRpb24odHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoLCB0cmlwRGVzdGluYXRpb25UZXh0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kVHJpcERlc3RpbmF0aW9uKHRyaXBEZXN0aW5hdGlvbikge1xuICBsZXQgdHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwidHJpcC1kZXN0aW5hdGlvblwiO1xuICBsZXQgdHJpcERlc3RpbmF0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUcmlwIERlc3RpbmF0aW9uOiAke3RyaXBEZXN0aW5hdGlvbn1gXG4gICk7XG4gIGFwcGVuZFRyaXBEZXN0aW5hdGlvbih0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGgsIHRyaXBEZXN0aW5hdGlvblRleHQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwRGVzdGluYXRpb24odHJpcCwgZGVzdGluYXRpb25zKSB7XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb25zW2ldLmlkKSB7XG4gICAgICBsZXQgdHJpcERlc3RpbmF0aW9uID0gZGVzdGluYXRpb25zW2ldLmRlc3RpbmF0aW9uO1xuICAgICAgY3JlYXRlQW5kQXBwZW5kVHJpcERlc3RpbmF0aW9uKHRyaXBEZXN0aW5hdGlvbik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCh0cmlwU3RhdHVzUGFyYWdyYXBoKSB7XG4gIGlmIChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKS5sZW5ndGggPT09IDIgJiZcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKVsxXS5pbm5lclRleHQuaW5jbHVkZXMoXCJUb2RheSdzIFRyaXBzXCIpXG4gICkge1xuICAgIGxldCB0b2RheXNUcmlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKVsxXTtcbiAgICB0b2RheXNUcmlwc1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RheXMtdHJpcHNcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheXMtdHJpcHNcIikuYXBwZW5kQ2hpbGQodHJpcFN0YXR1c1BhcmFncmFwaCk7XG4gIH0gZWxzZSB7XG4gICAgYXBwZW5kVG9TZWN0aW9uKHRyaXBTdGF0dXNQYXJhZ3JhcGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBTdGF0dXModHJpcCkge1xuICBsZXQgdHJpcFN0YXR1cyA9IHRyaXAuc3RhdHVzO1xuICBsZXQgdHJpcFN0YXR1c1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIHRyaXBTdGF0dXNQYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJ0cmlwLXN0YXR1c1wiO1xuICBsZXQgdHJpcFN0YXR1c1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgVHJpcCBTdGF0dXM6ICR7dHJpcFN0YXR1c31gKTtcbiAgdHJpcFN0YXR1c1BhcmFncmFwaC5hcHBlbmRDaGlsZCh0cmlwU3RhdHVzVGV4dCk7XG4gIGFwcGVuZCh0cmlwU3RhdHVzUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcER1cmF0aW9uKHRyaXApIHtcbiAgbGV0IHRyaXBEdXJhdGlvbiA9IHRyaXAuZHVyYXRpb247XG4gIGxldCB0cmlwRHVyYXRpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xuICB0cmlwRHVyYXRpb25QYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJ0cmlwLWR1cmF0aW9uXCI7XG4gIGxldCB0cmlwRHVyYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYFRyaXAgRHVyYXRpb246ICR7dHJpcER1cmF0aW9ufSBkYXlzYFxuICApO1xuICB0cmlwRHVyYXRpb25QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodHJpcER1cmF0aW9uVGV4dCk7XG4gIGFwcGVuZCh0cmlwRHVyYXRpb25QYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEZXN0aW5hdGlvbkltYWdlKHRyaXAsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGRlc3RpbmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwLmRlc3RpbmF0aW9uSUQgPT09IGRlc3RpbmF0aW9uc1tpXS5pZCkge1xuICAgICAgbGV0IGRlc3RpbmF0aW9uSW1hZ2UgPSBkZXN0aW5hdGlvbnNbaV0uaW1hZ2U7XG4gICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGltZy5jbGFzc05hbWUgPSBcImRlc3RpbmF0aW9uLWltYWdlXCI7XG4gICAgICBpbWcuc3JjID0gYCR7ZGVzdGluYXRpb25JbWFnZX1gO1xuICAgICAgYXBwZW5kVG9TZWN0aW9uKGltZyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBzKHRyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0cmlwcy5sZW5ndGg7IGkrKykge1xuICAgIHJlbmRlckRlc3RpbmF0aW9uSW1hZ2UodHJpcHNbaV0sIGRlc3RpbmF0aW9ucyk7XG4gICAgcmVuZGVyVHJpcERhdGUodHJpcHNbaV0pO1xuICAgIHJlbmRlclRyaXBEZXN0aW5hdGlvbih0cmlwc1tpXSwgZGVzdGluYXRpb25zKTtcbiAgICByZW5kZXJUcmlwU3RhdHVzKHRyaXBzW2ldKTtcbiAgICByZW5kZXJUcmlwRHVyYXRpb24odHJpcHNbaV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldHVyblRyYXZEYXRlKHNtYWxsRGF0ZSkge1xuICBsZXQgdHJhdkRhdGUgPVxuICAgIHNtYWxsRGF0ZS5nZXRGdWxsWWVhcigpICtcbiAgICBcIi9cIiArXG4gICAgKFwiMFwiICsgKHNtYWxsRGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArXG4gICAgXCIvXCIgK1xuICAgIChcIjBcIiArIHNtYWxsRGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKTtcbiAgcmV0dXJuIHRyYXZEYXRlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJQYXN0QW5kVXBjb21pbmdUcmlwcyh0cmF2ZWxlclRyaXBzKSB7XG4gIGxldCB1cGNvbWluZ1RyaXBzQXJyID0gW107XG4gIGxldCBwYXN0VHJpcHNBcnIgPSBbXTtcbiAgbGV0IHRvZGF5ID0gcmV0dXJuQ3VycmVudERhdGUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZWxlclRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNtYWxsRGF0ZSA9IG5ldyBEYXRlKHRyYXZlbGVyVHJpcHNbaV0uZGF0ZSk7XG4gICAgbGV0IHRyYXZEYXRlID0gcmV0dXJuVHJhdkRhdGUoc21hbGxEYXRlKTtcbiAgICBpZiAodG9kYXkgPCB0cmF2RGF0ZSkge1xuICAgICAgdXBjb21pbmdUcmlwc0Fyci5wdXNoKHRyYXZlbGVyVHJpcHNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXN0VHJpcHNBcnIucHVzaCh0cmF2ZWxlclRyaXBzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgcGFzdFRyaXBzQXJyLCB1cGNvbWluZ1RyaXBzQXJyIH07XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0KGZvcm1hdHRlZEVuZERhdGUpIHtcbiAgbGV0IHN0YXJ0ID0gRGF0ZS5VVEMoXG4gICAgZm9ybWF0dGVkRW5kRGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGZvcm1hdHRlZEVuZERhdGUuZ2V0TW9udGgoKSxcbiAgICBmb3JtYXR0ZWRFbmREYXRlLmdldERhdGUoKVxuICApO1xuICByZXR1cm4gc3RhcnQ7XG59XG5cbmZ1bmN0aW9uIGdldEVuZChmb3JtYXR0ZWRTdGFydERhdGUpIHtcbiAgbGV0IGVuZCA9IERhdGUuVVRDKFxuICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZS5nZXRNb250aCgpLFxuICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZS5nZXREYXRlKClcbiAgKTtcbiAgcmV0dXJuIGVuZDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0U3RhcnREYXRlKHRyaXBSZXF1ZXN0U3RhcnREYXRlKSB7XG4gIGxldCBmb3JtYXR0ZWRTdGFydERhdGUgPSBuZXcgRGF0ZSh0cmlwUmVxdWVzdFN0YXJ0RGF0ZSk7XG4gIGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IG5ldyBEYXRlKFxuICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZS5nZXRUaW1lKCkgK1xuICAgIGZvcm1hdHRlZFN0YXJ0RGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDBcbiAgKTtcbiAgcmV0dXJuIGZvcm1hdHRlZFN0YXJ0RGF0ZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RW5kRGF0ZSh0cmlwUmVxdWVzdEVuZERhdGUpIHtcbiAgbGV0IGZvcm1hdHRlZEVuZERhdGUgPSBuZXcgRGF0ZSh0cmlwUmVxdWVzdEVuZERhdGUpO1xuICBmb3JtYXR0ZWRFbmREYXRlID0gbmV3IERhdGUoXG4gICAgZm9ybWF0dGVkRW5kRGF0ZS5nZXRUaW1lKCkgKyBmb3JtYXR0ZWRFbmREYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMFxuICApO1xuICByZXR1cm4gZm9ybWF0dGVkRW5kRGF0ZTtcbn1cblxuZnVuY3Rpb24gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gIGxldCBmb3JtYXR0ZWRTdGFydERhdGUgPSBmb3JtYXRTdGFydERhdGUoc3RhcnREYXRlKTtcbiAgbGV0IGZvcm1hdHRlZEVuZERhdGUgPSBmb3JtYXRFbmREYXRlKGVuZERhdGUpO1xuICBjb25zdCBvbmVEYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xuICBsZXQgc3RhcnQgPSBnZXRTdGFydChmb3JtYXR0ZWRFbmREYXRlKTtcbiAgbGV0IGVuZCA9IGdldEVuZChmb3JtYXR0ZWRTdGFydERhdGUpO1xuICBsZXQgZGF5c0JldHdlZW4gPSAoc3RhcnQgLSBlbmQpIC8gb25lRGF5O1xuICByZXR1cm4gZGF5c0JldHdlZW47XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBDb3N0KGRlc3RpbmF0aW9uLCB0cmlwUmVxdWVzdERhdGEsIGFsbFRyaXBzKSB7XG4gIGxldCBjb3N0cyA9IGNhbGN1bGF0ZVRyaXBSZXF1ZXN0Q29zdHMoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpO1xuICBsZXQgdG90YWxDb3N0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUb3RhbCBFc3RpbWF0ZWQgVHJpcCBDb3N0OiAkJHtjb3N0cy50b3RhbFRyaXBDb3N0LnRvRml4ZWQoMil9YFxuICApO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKS5hcHBlbmRDaGlsZCh0b3RhbENvc3ROb2RlKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbUlucHV0cygpIHtcbiAgbGV0IHRyaXBSZXF1ZXN0RGVzdGluYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3RpbmF0aW9uXCIpLnZhbHVlO1xuICBsZXQgdHJpcFJlcXVlc3RTdGFydERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0XCIpLnZhbHVlO1xuICBsZXQgdHJpcFJlcXVlc3RFbmREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRcIikudmFsdWU7XG4gIGxldCBudW1iZXJPZlRyYXZlbGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyLW9mLXRyYXZzXCIpLnZhbHVlO1xuICBsZXQgdmFsdWVzID0ge1xuICAgIHRyaXBSZXF1ZXN0RGVzdGluYXRpb24sXG4gICAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gICAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICAgIG51bWJlck9mVHJhdmVsZXJzLFxuICB9O1xuICByZXR1cm4gdmFsdWVzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVBbmRSZXR1cm5Db3N0cyhcbiAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gIHRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gIGVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24sXG4gIGVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5XG4pIHtcbiAgbGV0IGZsaWdodENvc3RzID0gbnVtYmVyT2ZUcmF2ZWxlcnMgKiBlc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uO1xuICBsZXQgbG9kZ2luZ0Nvc3RzUGVyRGF5ID0gbnVtYmVyT2ZUcmF2ZWxlcnMgKiBlc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgbGV0IHRvdGFsTG9kZ2luZ0Nvc3RzID1cbiAgICBsb2RnaW5nQ29zdHNQZXJEYXkgKiBkYXlzQmV0d2Vlbih0cmlwUmVxdWVzdFN0YXJ0RGF0ZSwgdHJpcFJlcXVlc3RFbmREYXRlKTtcbiAgbGV0IGNvc3RCZWZvcmVBZ2VudEZlZSA9IGZsaWdodENvc3RzICsgdG90YWxMb2RnaW5nQ29zdHM7XG4gIGxldCBhZ2VudEZlZSA9IGNvc3RCZWZvcmVBZ2VudEZlZSAqIDAuMTtcbiAgbGV0IHRvdGFsVHJpcENvc3QgPSBjb3N0QmVmb3JlQWdlbnRGZWUgKyBhZ2VudEZlZTtcbiAgbGV0IGNvc3RzID0ge1xuICAgIGZsaWdodENvc3RzLFxuICAgIGxvZGdpbmdDb3N0c1BlckRheSxcbiAgICB0b3RhbExvZGdpbmdDb3N0cyxcbiAgICBjb3N0QmVmb3JlQWdlbnRGZWUsXG4gICAgYWdlbnRGZWUsXG4gICAgdG90YWxUcmlwQ29zdCxcbiAgfTtcbiAgcmV0dXJuIGNvc3RzO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUcmlwUmVxdWVzdENvc3RzKGRlc3RpbmF0aW9uKSB7XG4gIGxldCB2YWx1ZXMgPSBnZXRWYWx1ZXNGcm9tSW5wdXRzKCk7XG4gIGxldCBudW1iZXJPZlRyYXZlbGVycyA9IHZhbHVlcy5udW1iZXJPZlRyYXZlbGVycztcbiAgbGV0IHRyaXBSZXF1ZXN0U3RhcnREYXRlID0gdmFsdWVzLnRyaXBSZXF1ZXN0U3RhcnREYXRlO1xuICBsZXQgdHJpcFJlcXVlc3RFbmREYXRlID0gdmFsdWVzLnRyaXBSZXF1ZXN0RW5kRGF0ZTtcbiAgbGV0IGVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uO1xuICBsZXQgZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgbGV0IGNvc3RzID0gY2FsY3VsYXRlQW5kUmV0dXJuQ29zdHMoXG4gICAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gICAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gICAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICAgIGVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24sXG4gICAgZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXlcbiAgKTtcbiAgcmV0dXJuIGNvc3RzO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUb1JlcXVlc3RGb3JtKGVsZW1lbnQpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0LWZvcm1cIikuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlckxhYmVsKGF0dHJpYnV0ZSwgdGV4dCkge1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBhdHRyaWJ1dGUpO1xuICBsZXQgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG4gIGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIHNldElkQW5kQ2xhc3NvZlJlcXVlc3RGb3JtKCk7XG4gIGFwcGVuZFRvUmVxdWVzdEZvcm0obGFiZWwpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJTdGFydERhdGVJbnB1dCh0b2RheSkge1xuICBsZXQgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN0YXJ0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBzdGFydERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN0YXJ0XCIpO1xuICBzdGFydERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidHJpcC1zdGFydFwiKTtcbiAgc3RhcnREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7dG9kYXl9YCk7XG4gIHN0YXJ0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCBgJHt0b2RheX1gKTtcbiAgc3RhcnREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMjAyMS0xMi0zMVwiKTtcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybShzdGFydERhdGVJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlclRyaXBFbmRMYWJlbCgpIHtcbiAgbGV0IHRyaXBFbmRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgdHJpcEVuZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRyaXAtZW5kXCIpO1xuICBhcHBlbmRUb1JlcXVlc3RGb3JtKHRyaXBFbmRMYWJlbCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlckVuZERhdGVJbnB1dCh0b2RheSkge1xuICBsZXQgZW5kRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGVuZERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVuZFwiKTtcbiAgZW5kRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0cmlwLWVuZFwiKTtcbiAgZW5kRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3RvZGF5fWApO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIGAke3RvZGF5fWApO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMjAyMy0xMi0zMVwiKTtcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybShlbmREYXRlSW5wdXQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEYXRlU2VsZWN0SW5wdXRzKCkge1xuICBjcmVhdGVBbmRSZW5kZXJMYWJlbChcInRyaXAtZHVyYXRpb25cIiwgXCJQbGVhc2Ugc2VsZWN0IGEgc3RhcnQgYW5kIGVuZCBkYXRlOlwiKTtcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgY3JlYXRlQW5kUmVuZGVyU3RhcnREYXRlSW5wdXQodG9kYXkpO1xuICBjcmVhdGVBbmRSZW5kZXJUcmlwRW5kTGFiZWwoKTtcbiAgY3JlYXRlQW5kUmVuZGVyRW5kRGF0ZUlucHV0KHRvZGF5KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVySW5wdXRMaXN0KGxpc3RBdHRyaWJ1dGUsIGlkLCBwbGFjZUhvbGRlcikge1xuICBsZXQgaW5wdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dExpc3Quc2V0QXR0cmlidXRlKFwibGlzdFwiLCBsaXN0QXR0cmlidXRlKTtcbiAgaW5wdXRMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgaW5wdXRMaXN0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlSG9sZGVyKTtcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybShpbnB1dExpc3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJEYXRhTGlzdChpZCkge1xuICBsZXQgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGF0YWxpc3RcIik7XG4gIGRhdGFMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybShkYXRhTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbkFuZFJlbmRlclRvTnVtYmVyT2ZUcmF2ZWxlcnNJbnB1dCgpIHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjA7IGkrKykge1xuICAgIGxldCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG51bWJlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHtpfWApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyLW9mLXRyYXZlbGVyc1wiKS5hcHBlbmRDaGlsZChudW1iZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlck51bWJlck9mVHJhdmVsZXJzSW5wdXQoKSB7XG4gIGNyZWF0ZUFuZFJlbmRlckxhYmVsKFwibnVtYmVyLW9mLXRyYXZlbGVyc1wiLCBcIk51bWJlciBvZiBUcmF2ZWxlcnM6XCIpO1xuICBjcmVhdGVBbmRSZW5kZXJJbnB1dExpc3QoXG4gICAgXCJudW1iZXItb2YtdHJhdmVsZXJzXCIsXG4gICAgXCJudW1iZXItb2YtdHJhdnNcIixcbiAgICBcIlNlbGVjdCBudW1iZXIgb2YgdHJhdmVsZXJzXCJcbiAgKTtcbiAgY3JlYXRlQW5kUmVuZGVyRGF0YUxpc3QoXCJudW1iZXItb2YtdHJhdmVsZXJzXCIpO1xuICBjcmVhdGVPcHRpb25BbmRSZW5kZXJUb051bWJlck9mVHJhdmVsZXJzSW5wdXQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uQW5kUmVuZGVyVG9EYXRhTGlzdChsZW5ndGgsIGRlc3RpbmF0aW9ucywgaWQpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHtkZXN0aW5hdGlvbnNbaV0uZGVzdGluYXRpb259YCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVyTGFiZWxBbmRJbnB1dExpc3QoKSB7XG4gIGNyZWF0ZUFuZFJlbmRlckxhYmVsKFwiZGVzdGluYXRpb24tY2hvaWNlXCIsIFwiU2VhcmNoIGZvciBhIERlc3RpbmF0aW9uOlwiKTtcbiAgY3JlYXRlQW5kUmVuZGVySW5wdXRMaXN0KFxuICAgIFwiZGVzdGluYXRpb24tY2hvaWNlXCIsXG4gICAgXCJkZXN0aW5hdGlvblwiLFxuICAgIFwiU2VhcmNoIGZvciBhIGRlc3RpbmF0aW9uXCJcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRnVsbERlc3RpbmF0aW9uTGlzdChkZXN0aW5hdGlvbnMpIHtcbiAgY3JlYXRlQW5kUmVuZGVyRGF0YUxpc3QoXCJkZXN0aW5hdGlvbi1jaG9pY2VcIik7XG4gIGNyZWF0ZU9wdGlvbkFuZFJlbmRlclRvRGF0YUxpc3QoXG4gICAgZGVzdGluYXRpb25zLmxlbmd0aCxcbiAgICBkZXN0aW5hdGlvbnMsXG4gICAgXCJkZXN0aW5hdGlvbi1jaG9pY2VcIlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEZXN0aW5hdGlvblNlYXJjaEJhcihhbGxUcmlwcywgZGVzdGluYXRpb25zQXJyKSB7XG4gIGxldCBkZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnNBcnI7XG4gIGNyZWF0ZUFuZFJlbmRlckxhYmVsQW5kSW5wdXRMaXN0KCk7XG4gIHJlbmRlckZ1bGxEZXN0aW5hdGlvbkxpc3QoZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT25DbGlja0Z1bmN0aW9uQW5kUmVuZGVyVHJpcChkZXN0aW5hdGlvbnNBcnIsIGFsbFRyaXBzKSB7XG4gIGxldCB0cmlwUmVxdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJpcC1yZXF1ZXN0LWJ1dHRvblwiKTtcbiAgdHJpcFJlcXVlc3RCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVRyaXBSZXF1ZXN0KCkge1xuICAgIGxldCB0cmlwUmVxdWVzdERhdGEgPSBwcmVwYXJlVHJpcFJlcXVlc3REYXRhKGRlc3RpbmF0aW9uc0Fycik7XG4gICAgcmVuZGVyVHJpcFJlcXVlc3QodHJpcFJlcXVlc3REYXRhLCBkZXN0aW5hdGlvbnNBcnIsIGFsbFRyaXBzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2V0SWRBbmRDbGFzc29mUmVxdWVzdEZvcm0oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzJdLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVxdWVzdC1mb3JtXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKVsyXS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhaW5lclwiKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVRyaXBSZXF1ZXN0RGF0YShkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IHZhbHVlcyA9IGdldFZhbHVlc0Zyb21JbnB1dHMoKTtcbiAgbGV0IHRyaXBSZXF1ZXN0RGVzdGluYXRpb24gPSB2YWx1ZXMudHJpcFJlcXVlc3REZXN0aW5hdGlvbjtcbiAgbGV0IG51bWJlck9mVHJhdmVsZXJzID0gdmFsdWVzLm51bWJlck9mVHJhdmVsZXJzO1xuICBsZXQgdHJpcFJlcXVlc3RTdGFydERhdGUgPSB2YWx1ZXMudHJpcFJlcXVlc3RTdGFydERhdGU7XG4gIGxldCB0cmlwUmVxdWVzdEVuZERhdGUgPSB2YWx1ZXMudHJpcFJlcXVlc3RFbmREYXRlO1xuICBsZXQgdHJpcFJlcXVlc3REYXRhID0gcmV0dXJuVHJpcFJlcXVlc3REYXRhKFxuICAgIGRlc3RpbmF0aW9ucyxcbiAgICB0cmlwUmVxdWVzdERlc3RpbmF0aW9uLFxuICAgIG51bWJlck9mVHJhdmVsZXJzLFxuICAgIHRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICAgIHRyaXBSZXF1ZXN0RW5kRGF0ZVxuICApO1xuICByZXR1cm4gdHJpcFJlcXVlc3REYXRhO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwUmVxdWVzdCh0cmlwUmVxdWVzdERhdGEsIGRlc3RpbmF0aW9uc0FyciwgYWxsVHJpcHMpIHtcbiAgbGV0IHZhbHVlcyA9IHNldFZhbHVlc0ZvclRyaXBSZXF1ZXN0KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzdGluYXRpb25zQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHZhbHVlcy50cmlwUmVxdWVzdERlc3RpbmF0aW9uID09PSBkZXN0aW5hdGlvbnNBcnJbaV0uZGVzdGluYXRpb24pIHtcbiAgICAgIGhpZGVSZXF1ZXN0Rm9ybUFuZFNob3dZb3VyVHJpcHNIZWFkZXIoKTtcbiAgICAgIHJlbmRlclRyaXBSZXF1ZXN0RGF0YShcbiAgICAgICAgZGVzdGluYXRpb25zQXJyW2ldLFxuICAgICAgICB0cmlwUmVxdWVzdERhdGEsXG4gICAgICAgIHZhbHVlcy50cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICAgICAgdmFsdWVzLnRyaXBSZXF1ZXN0RW5kRGF0ZSxcbiAgICAgICAgYWxsVHJpcHNcbiAgICAgICk7XG4gICAgICBjcmVhdGVBbmRSZW5kZXJDb25maXJtVHJpcEJ1dHRvbihcbiAgICAgICAgZGVzdGluYXRpb25zQXJyW2ldLFxuICAgICAgICB0cmlwUmVxdWVzdERhdGEsXG4gICAgICAgIGFsbFRyaXBzXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5UcmlwUmVxdWVzdERhdGEoXG4gIGRlc3RpbmF0aW9ucyxcbiAgdHJpcFJlcXVlc3REZXN0aW5hdGlvbixcbiAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gIHRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICB0cmlwUmVxdWVzdEVuZERhdGVcbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RpbmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwUmVxdWVzdERlc3RpbmF0aW9uID09PSBkZXN0aW5hdGlvbnNbaV0uZGVzdGluYXRpb24pIHtcbiAgICAgIGxldCBkZXN0aW5hdGlvbklkZW50aWZpZXIgPSBkZXN0aW5hdGlvbnNbaV0uaWQ7XG4gICAgICBsZXQgdHJpcFJlcXVlc3REYXRhID0ge1xuICAgICAgICBkZXN0aW5hdGlvbklkZW50aWZpZXIsXG4gICAgICAgIHRyaXBSZXF1ZXN0RGVzdGluYXRpb24sXG4gICAgICAgIG51bWJlck9mVHJhdmVsZXJzLFxuICAgICAgICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICAgICAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB0cmlwUmVxdWVzdERhdGE7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlc0ZvclRyaXBSZXF1ZXN0KCkge1xuICBsZXQgdmFsdWVzQmVmb3JlID0gZ2V0VmFsdWVzRnJvbUlucHV0cygpO1xuICBsZXQgdHJpcFJlcXVlc3REZXN0aW5hdGlvbiA9IHZhbHVlc0JlZm9yZS50cmlwUmVxdWVzdERlc3RpbmF0aW9uO1xuICBsZXQgdHJpcFJlcXVlc3RTdGFydERhdGUgPSB2YWx1ZXNCZWZvcmUudHJpcFJlcXVlc3RTdGFydERhdGU7XG4gIGxldCB0cmlwUmVxdWVzdEVuZERhdGUgPSB2YWx1ZXNCZWZvcmUudHJpcFJlcXVlc3RFbmREYXRlO1xuICBsZXQgdmFsdWVzID0ge1xuICAgIHRyaXBSZXF1ZXN0RGVzdGluYXRpb24sXG4gICAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gICAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICB9O1xuICByZXR1cm4gdmFsdWVzO1xufVxuXG5mdW5jdGlvbiByZW5kZXJjb25maXJtVHJpcEJ1dHRvbigpIHtcbiAgbGV0IGNvbmZpcm1UcmlwUmVxdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbmZpcm1UcmlwUmVxdWVzdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbmZpcm0tdHJpcC1yZXF1ZXN0LWJ1dHRvblwiKTtcbiAgY29uZmlybVRyaXBSZXF1ZXN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDT05GSVJNIFRSSVBcIjtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0ZWQtdHJpcHNcIilcbiAgICAuYXBwZW5kQ2hpbGQoY29uZmlybVRyaXBSZXF1ZXN0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVyUGFyYWdyYXBoQW5kTm9kZShzdGFydE9yRW5kLCBkYXRlKSB7XG4gIGxldCBkYXRlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgbGV0IGRhdGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYFRyaXAgJHtzdGFydE9yRW5kfSBEYXRlOiAke2RhdGUudG9EYXRlU3RyaW5nKCl9YFxuICApO1xuICBkYXRlUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRhdGVOb2RlKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0ZWQtdHJpcHNcIikuYXBwZW5kQ2hpbGQoZGF0ZVBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGVFbGVtZW50cyhmb3JtYXR0ZWRTdGFydERhdGUsIGZvcm1hdHRlZEVuZERhdGUpIHtcbiAgY3JlYXRlQW5kUmVuZGVyUGFyYWdyYXBoQW5kTm9kZShcInN0YXJ0XCIsIGZvcm1hdHRlZFN0YXJ0RGF0ZSk7XG4gIGNyZWF0ZUFuZFJlbmRlclBhcmFncmFwaEFuZE5vZGUoXCJlbmRcIiwgZm9ybWF0dGVkRW5kRGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBSZXF1ZXN0RGVzdGluYXRpb25JbWFnZShkZXN0aW5hdGlvbikge1xuICBsZXQgZGVzdGluYXRpb25JbWFnZSA9IGRlc3RpbmF0aW9uLmltYWdlO1xuICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLmNsYXNzTmFtZSA9IFwiZGVzdGluYXRpb24taW1hZ2VcIjtcbiAgaW1nLnNyYyA9IGAke2Rlc3RpbmF0aW9uSW1hZ2V9YDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0ZWQtdHJpcHNcIikuYXBwZW5kQ2hpbGQoaW1nKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcFJlcXVlc3REYXRhKFxuICBkZXN0aW5hdGlvbixcbiAgdHJpcFJlcXVlc3REYXRhLFxuICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICBhbGxUcmlwc1xuKSB7XG4gIHJlbmRlclRyaXBSZXF1ZXN0RGVzdGluYXRpb25JbWFnZShkZXN0aW5hdGlvbik7XG4gIHJlbmRlckRlc3RpbmF0aW9uTmFtZShkZXN0aW5hdGlvbik7XG4gIHJlbmRlck51bWJlck9mVHJhdmVsZXJzKHRyaXBSZXF1ZXN0RGF0YSk7XG4gIHJlbmRlclN0YXJ0YW5kRW5kRGF0ZSh0cmlwUmVxdWVzdFN0YXJ0RGF0ZSwgdHJpcFJlcXVlc3RFbmREYXRlKTtcbiAgcmVuZGVyVHJpcENvc3QoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpO1xuICByZW5kZXJjb25maXJtVHJpcEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTdGFydGFuZEVuZERhdGUodHJpcFJlcXVlc3RTdGFydERhdGUsIHRyaXBSZXF1ZXN0RW5kRGF0ZSkge1xuICBsZXQgZm9ybWF0dGVkU3RhcnREYXRlID0gZm9ybWF0U3RhcnREYXRlKHRyaXBSZXF1ZXN0U3RhcnREYXRlKTtcbiAgbGV0IGZvcm1hdHRlZEVuZERhdGUgPSBmb3JtYXRFbmREYXRlKHRyaXBSZXF1ZXN0RW5kRGF0ZSk7XG4gIGNyZWF0ZURhdGVFbGVtZW50cyhmb3JtYXR0ZWRTdGFydERhdGUsIGZvcm1hdHRlZEVuZERhdGUpO1xufVxuXG5mdW5jdGlvbiBoaWRlUmVxdWVzdEZvcm1BbmRTaG93WW91clRyaXBzSGVhZGVyKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3QtZm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHJlbmRlclRyaXBzSGVhZGVyKFwiWW91ciBSZXF1ZXN0ZWRcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzNdLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVxdWVzdGVkLXRyaXBzXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJDb25maXJtVHJpcEJ1dHRvbihcbiAgZGVzdGluYXRpb24sXG4gIHRyaXBSZXF1ZXN0RGF0YSxcbiAgYWxsVHJpcHNcbikge1xuICBsZXQgY29uZmlybVRyaXBSZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJjb25maXJtLXRyaXAtcmVxdWVzdC1idXR0b25cIlxuICApO1xuICBjb25maXJtVHJpcFJlcXVlc3RCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIGNvbmZpcm1UcmlwUmVxdWVzdCgpIHtcbiAgICBjb25maXJtQW5kUG9zdFRyaXAoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJEZXN0aW5hdGlvbk5hbWUoZGVzdGluYXRpb24pIHtcbiAgbGV0IGRlc3RpbmF0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUcmlwIERlc3RpbmF0aW9uOiAke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufWBcbiAgKTtcbiAgbGV0IGRlc3RpbmF0aW9uTmFtZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIGRlc3RpbmF0aW9uTmFtZVBhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0aW5hdGlvbk5hbWUpO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKVxuICAgIC5hcHBlbmRDaGlsZChkZXN0aW5hdGlvbk5hbWVQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJOdW1iZXJPZlRyYXZlbGVycygpIHtcbiAgbGV0IHZhbHVlcyA9IGdldFZhbHVlc0Zyb21JbnB1dHMoKTtcbiAgbGV0IG51bU9mVHJhdmVsZXJzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBOdW1iZXIgb2YgVHJhdmVsZXJzOiAke3ZhbHVlcy5udW1iZXJPZlRyYXZlbGVyc31gXG4gICk7XG4gIGxldCBudW1PZlRyYXZlbGVyc1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIG51bU9mVHJhdmVsZXJzUGFyYWdyYXBoLmFwcGVuZENoaWxkKG51bU9mVHJhdmVsZXJzTm9kZSk7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdGVkLXRyaXBzXCIpXG4gICAgLmFwcGVuZENoaWxkKG51bU9mVHJhdmVsZXJzUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gZGF0YVRvSnNvbihcbiAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gIHRyaXBSZXF1ZXN0RW5kRGF0ZSxcbiAgdXNlcklkLFxuICB0cmlwUmVxdWVzdElkLFxuICB0cmlwUmVxdWVzdERhdGFcbikge1xuICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIGlkOiBwYXJzZUZsb2F0KHRyaXBSZXF1ZXN0SWQpLFxuICAgIHVzZXJJRDogdXNlcklkLFxuICAgIGRlc3RpbmF0aW9uSUQ6IHRyaXBSZXF1ZXN0RGF0YS5kZXN0aW5hdGlvbklkZW50aWZpZXIsXG4gICAgdHJhdmVsZXJzOiBwYXJzZUZsb2F0KHRyaXBSZXF1ZXN0RGF0YS5udW1iZXJPZlRyYXZlbGVycyksXG4gICAgZGF0ZTogdHJpcFJlcXVlc3RTdGFydERhdGUucmVwbGFjZSgvLS9nLCBcIi9cIiksXG4gICAgZHVyYXRpb246IGRheXNCZXR3ZWVuKHRyaXBSZXF1ZXN0U3RhcnREYXRlLCB0cmlwUmVxdWVzdEVuZERhdGUpLFxuICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW10sXG4gIH0pO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gdmFsdWVzVG9Kc29uKHRyYXZlbGVyLCB0cmlwUmVxdWVzdERhdGEsIGFsbFRyaXBzKSB7XG4gIGxldCB2YWx1ZXMgPSBnZXRWYWx1ZXNGcm9tSW5wdXRzKCk7XG4gIGxldCB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSA9IHZhbHVlcy50cmlwUmVxdWVzdFN0YXJ0RGF0ZTtcbiAgbGV0IHRyaXBSZXF1ZXN0RW5kRGF0ZSA9IHZhbHVlcy50cmlwUmVxdWVzdEVuZERhdGU7XG4gIGxldCB1c2VySWQgPSB0cmF2ZWxlci50cmF2ZWxlci5pZDtcbiAgbGV0IHRyaXBSZXF1ZXN0SWQgPSBhbGxUcmlwcy5sZW5ndGggKyAxO1xuICBsZXQgZGF0YSA9IGRhdGFUb0pzb24oXG4gICAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gICAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICAgIHVzZXJJZCxcbiAgICB0cmlwUmVxdWVzdElkLFxuICAgIHRyaXBSZXF1ZXN0RGF0YVxuICApO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hBbmRMb2dSZXNwb25zZShkYXRhKSB7XG4gIGZldGNoKFxuICAgIFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvdHJpcHMvdHJpcHNcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBvciAnUFVUJ1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBkYXRhLFxuICAgIH1cbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBhbGVydChcIlN1Y2Nlc3MhXCIsIGRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgYWxlcnQoXCJFcnJvciFcIiwgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhclNlYXJjaEZvcm1JbnB1dHMoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdGluYXRpb25cIikudmFsdWUgPSBcIlwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlci1vZi10cmF2c1wiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIikudmFsdWU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kXCIpLnZhbHVlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDb25maXJtZWRUcmlwQW5kQ2xlYXJTZWFyY2hGb3JtKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdC1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICBjbGVhclNlYXJjaEZvcm1JbnB1dHMoKTtcbn1cblxuZnVuY3Rpb24gY29uZmlybUFuZFBvc3RUcmlwKGRlc3RpbmF0aW9uLCB0cmlwUmVxdWVzdERhdGEsIGFsbFRyaXBzKSB7XG4gIHRyYXZlbF90cmFja2VyX3NlcnZpY2VcbiAgICAuZ2V0U2luZ2xlVHJhdmVsZXIoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgbGV0IHRyYXZlbGVyID0gcmVzdWx0O1xuICAgICAgbGV0IGRhdGEgPSB2YWx1ZXNUb0pzb24odHJhdmVsZXIsIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpO1xuICAgICAgZmV0Y2hBbmRMb2dSZXNwb25zZShkYXRhKTtcbiAgICB9KTtcbiAgcmVtb3ZlQ29uZmlybWVkVHJpcEFuZENsZWFyU2VhcmNoRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBzZXRMb2dPdXRCdXR0b25BdHRyaWJ1dGUobG9nT3V0QnV0dG9uKSB7XG4gIGxvZ091dEJ1dHRvbi5pZCA9IFwibG9nLW91dC1idXR0b25cIjtcbiAgbG9nT3V0QnV0dG9uLmNsYXNzTmFtZSA9IFwiYnV0dG9uXCI7XG4gIGxvZ091dEJ1dHRvbi5pbm5lckhUTUwgPSBcIkxPR09VVFwiO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRMb2dPdXRCdXR0b25BbmRTZXRPbkNsaWNrKGxvZ091dEJ1dHRvbikge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmQobG9nT3V0QnV0dG9uKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2ctb3V0LWJ1dHRvblwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJsb2ctb3V0LWJ1dHRvblwiXG4gICAgKS5vbmNsaWNrID0gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJMb2dPdXRCdXR0b24oKSB7XG4gIGxldCBsb2dPdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzZXRMb2dPdXRCdXR0b25BdHRyaWJ1dGUobG9nT3V0QnV0dG9uKTtcbiAgYXBwZW5kTG9nT3V0QnV0dG9uQW5kU2V0T25DbGljayhsb2dPdXRCdXR0b24pO1xufVxuXG5leHBvcnQge1xuICByZW5kZXJUcmlwc0hlYWRlcixcbiAgZ2V0UGVuZGluZ1RyaXBzLFxuICBnZXRUb2RheXNUcmlwcyxcbiAgcmV0dXJuQ3VycmVudERhdGUsXG4gIGFwcGVuZFRvU2VjdGlvbixcbiAgcmVuZGVyVHJpcERhdGUsXG4gIHJlbmRlclRyaXBEZXN0aW5hdGlvbixcbiAgcmVuZGVyVHJpcFN0YXR1cyxcbiAgcmVuZGVyVHJpcER1cmF0aW9uLFxuICByZW5kZXJEZXN0aW5hdGlvbkltYWdlLFxuICByZW5kZXJUcmlwcyxcbiAgZmlsdGVyUGFzdEFuZFVwY29taW5nVHJpcHMsXG4gIHJldHVyblRyYXZEYXRlLFxuICBkYXlzQmV0d2VlbixcbiAgZm9ybWF0RW5kRGF0ZSxcbiAgZm9ybWF0U3RhcnREYXRlLFxuICByZW5kZXJUcmlwQ29zdCxcbiAgZ2V0VmFsdWVzRnJvbUlucHV0cyxcbiAgcmVuZGVyRGVzdGluYXRpb25TZWFyY2hCYXIsXG4gIHJlbmRlckRhdGVTZWxlY3RJbnB1dHMsXG4gIGFwcGVuZFRvUmVxdWVzdEZvcm0sXG4gIHJlbmRlck51bWJlck9mVHJhdmVsZXJzSW5wdXQsXG4gIGNyZWF0ZU9uQ2xpY2tGdW5jdGlvbkFuZFJlbmRlclRyaXAsXG4gIHJlbmRlckxvZ091dEJ1dHRvbixcbn07XG4iLCJpbXBvcnQgXCIuL2Nzcy9iYXNlLnNjc3NcIjtcbmltcG9ydCAqIGFzIHRyYXZlbF90cmFja2VyX3NlcnZpY2UgZnJvbSBcIi4vdHJhdmVsX3RyYWNrZXJfc2VydmljZS5qc1wiO1xuaW1wb3J0ICogYXMgdHJhdmVsZXJfZGFzaGJvYXJkX2hlbHBlciBmcm9tIFwiLi90cmF2ZWxlcl9kYXNoYm9hcmRfaGVscGVyXCI7XG5pbXBvcnQgKiBhcyBhZ2VudF9kYXNoYm9hcmRfaGVscGVyIGZyb20gXCIuL2FnZW50X2Rhc2hib2FyZF9oZWxwZXJcIjtcbmltcG9ydCAqIGFzIGxvZ2luX2hlbHBlciBmcm9tIFwiLi9sb2dpbl9oZWxwZXJcIjtcbmltcG9ydCAqIGFzIHN0eWxpbmcgZnJvbSBcIi4vc3R5bGluZ19oZWxwZXJcIjtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLm9ubG9hZCA9IHN0eWxpbmcuc3R5bGVIb21lUGFnZSgpO1xuXG5sZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG5cbmJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gcHJvY2Vzc0xvZ2luKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGxldCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC11c2VybmFtZVwiKS52YWx1ZTtcbiAgbGV0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXBhc3N3b3JkXCIpLnZhbHVlO1xuICBpZiAobG9naW5faGVscGVyLmlzVmFsaWRQYXNzd29yZChwYXNzd29yZElucHV0KSkge1xuICAgIHRyYXZlbF90cmFja2VyX3NlcnZpY2VcbiAgICAgIC5pc1ZhbGlkVHJhdmVsZXIodXNlcm5hbWVJbnB1dClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHZhciB0cmF2ZWxlcklkID0gdXNlcm5hbWVJbnB1dC5zbGljZSg4KTtcbiAgICAgICAgICB0cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlXG4gICAgICAgICAgICAuZ2V0U2luZ2xlVHJhdmVsZXIodHJhdmVsZXJJZClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgbGV0IHRyYXZlbGVyID0gcmVzdWx0LnRyYXZlbGVyO1xuICAgICAgICAgICAgICB0cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmdldFRyYXZlbGVyVHJpcHModHJhdmVsZXIpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgbGV0IHRyYXZlbGVyVHJpcHMgPSByZXN1bHQudHJhdmVsZXJUcmlwcztcbiAgICAgICAgICAgICAgICAgIHRyYXZlbF90cmFja2VyX3NlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgLmdldFRyYXZlbGVyRGVzdGluYXRpb25zKHRyYXZlbGVyVHJpcHMsIHRyYXZlbGVyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGRlc3RpbmF0aW9ucyA9IHJlc3VsdC50cmF2ZWxlckRlc3RpbmF0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJpcHMgPSByZXN1bHQudHJhdmVsZXJUcmlwcztcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJhdmVsZXJEYXNoYm9hcmREYXRhID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYXZlbGVyX2Rhc2hib2FyZF9oZWxwZXIucHJlcGFyZVRyYXZlbGVyRGFzaGJvYXJkRGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhdmVsZXJfZGFzaGJvYXJkX2hlbHBlci5yZW5kZXJUcmF2ZWxlckRhc2hib2FyZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYXZlbGVyRGFzaGJvYXJkRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobG9naW5faGVscGVyLmlzVmFsaWRBZ2VuY3kodXNlcm5hbWVJbnB1dCkpIHtcbiAgICAgICAgICBhZ2VudF9kYXNoYm9hcmRfaGVscGVyLnJlbmRlclN1Y2Nlc3NmdWxBZ2VuY3lMb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvZ2luX2hlbHBlci5sb2dpbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGxvZ2luX2hlbHBlci5sb2dpbkVycm9yKCk7XG4gIH1cbn07XG4iLCJmdW5jdGlvbiBpc1ZhbGlkUGFzc3dvcmQocGFzc3dvcmRJbnB1dCkge1xuICB2YXIgY29ycmVjdFB3ID0gXCJ0cmF2ZWwyMDIwXCI7XG4gIGlmIChwYXNzd29yZElucHV0ID09PSBjb3JyZWN0UHcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkQWdlbmN5KHVzZXJuYW1lSW5wdXQpIHtcbiAgbGV0IGFnZW50VW4gPSBcImFnZW5jeVwiO1xuICB2YXIgZG93bmNhc2VkVXNlcm5hbWVJbnB1dCA9IHVzZXJuYW1lSW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGRvd25jYXNlZFVzZXJuYW1lSW5wdXQgPT09IGFnZW50VW4pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckxvZ2luRm9ybSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC11c2VybmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcGFzc3dvcmRcIikudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBsb2dpbkVycm9yKCkge1xuICBhbGVydChcIkxvZ2luIFVuc3VjY2Vzc2Z1bCFcIik7XG4gIGNsZWFyTG9naW5Gb3JtKCk7XG59XG5cbmV4cG9ydCB7IGlzVmFsaWRQYXNzd29yZCwgaXNWYWxpZEFnZW5jeSwgY2xlYXJMb2dpbkZvcm0sIGxvZ2luRXJyb3IgfTtcbiIsImltcG9ydCAqIGFzIHRyYXZlbF90cmFja2VyX3NlcnZpY2UgZnJvbSBcIi4vdHJhdmVsX3RyYWNrZXJfc2VydmljZVwiO1xuXG5mdW5jdGlvbiBzZXRCYWNrZ3JvdW5kSW1hZ2VBbmRIMU9wYWNpdHkoZGVzdGluYXRpb24pIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJoMS1kaXZcIlxuICApLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkZXN0aW5hdGlvbi5pbWFnZX0pYDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2UtaDFcIikuc3R5bGUub3BhY2l0eSA9IFwiMS4wXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlLWgxXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgXCJyZ2JhKDAsIDAsIDAsIDAuMilcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2UtaDFcIikuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2ZmZlwiO1xufVxuXG5mdW5jdGlvbiBzZXRSYW5kb21CYWNrZ3JvdW5kSW1hZ2UoZGVzdGluYXRpb25zKSB7XG4gIGxldCBkZXN0aW5hdGlvbiA9XG4gICAgZGVzdGluYXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRlc3RpbmF0aW9ucy5sZW5ndGgpXTtcbiAgc2V0QmFja2dyb3VuZEltYWdlQW5kSDFPcGFjaXR5KGRlc3RpbmF0aW9uKTtcbiAgbGV0IHJhbmRvbURlc3RpbmF0aW9uSW1hZ2UgPSBkZXN0aW5hdGlvbi5pbWFnZTtcbiAgcmV0dXJuIHJhbmRvbURlc3RpbmF0aW9uSW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdnNBbmRTZXRJZHNDbGFzcyhyZXN1bHQpIHtcbiAgbGV0IGRlc3RpbmF0aW9ucyA9IHJlc3VsdDtcbiAgbGV0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGgxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaDFEaXYuaWQgPSBcImgxLWRpdlwiO1xuICBob21lUGFnZS5jbGFzc05hbWUgPSBcImhvbWUtcGFnZVwiO1xuICBob21lUGFnZS5pZCA9IFwiaG9tZS1wYWdlXCI7XG4gIHJldHVybiB7IGRlc3RpbmF0aW9ucywgaDFEaXYsIGhvbWVQYWdlIH07XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEhvbWVQYWdlRGF0YShcbiAgaDFUZXh0LFxuICBob21lUGFnZUgxLFxuICBkZXN0SDFEaXZIb21lUGFnZSxcbiAgZGVzdGluYXRpb25zXG4pIHtcbiAgaG9tZVBhZ2VIMS5hcHBlbmRDaGlsZChoMVRleHQpO1xuICBkZXN0SDFEaXZIb21lUGFnZS5oMURpdi5hcHBlbmRDaGlsZChob21lUGFnZUgxKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQoZGVzdEgxRGl2SG9tZVBhZ2UuaDFEaXYpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChkZXN0SDFEaXZIb21lUGFnZS5ob21lUGFnZSk7XG4gIHNldFJhbmRvbUJhY2tncm91bmRJbWFnZShkZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJBbmRTZXRCYWNrZ3JvdW5kSW1nKHJlc3VsdCkge1xuICBsZXQgZGVzdEgxRGl2SG9tZVBhZ2UgPSBjcmVhdGVEaXZzQW5kU2V0SWRzQ2xhc3MocmVzdWx0KTtcbiAgbGV0IGRlc3RpbmF0aW9ucyA9IGRlc3RIMURpdkhvbWVQYWdlLmRlc3RpbmF0aW9ucztcbiAgbGV0IGhvbWVQYWdlSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhvbWVQYWdlSDEuaWQgPSBcImhvbWUtcGFnZS1oMVwiO1xuICBsZXQgaDFUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJXaGVyZSB3b3VsZCB5b3UgbGlrZSB0byBnbz9cIik7XG4gIGFwcGVuZEhvbWVQYWdlRGF0YShoMVRleHQsIGhvbWVQYWdlSDEsIGRlc3RIMURpdkhvbWVQYWdlLCBkZXN0aW5hdGlvbnMpO1xuICByZXR1cm4gZGVzdGluYXRpb25zO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEZXN0aW5hdGlvbkltYWdlcyhkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IGltYWdlQW5kTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIChpbWFnZUFuZE5hbWVEaXYub25jbGljayA9IFwiaHJlZlwiKSwgXCJhbGVydChIRVkpXCI7XG4gIGltYWdlQW5kTmFtZURpdi5jbGFzc05hbWUgPSBcImltYWdlLWFuZC1uYW1lLWRpdlwiO1xuICBsZXQgZGVzdGluYXRpb24gPVxuICAgIGRlc3RpbmF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZXN0aW5hdGlvbnMubGVuZ3RoKV07XG4gIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuY2xhc3NOYW1lID0gXCJob21lLWRlc3RpbmF0aW9uLWltYWdlXCI7XG4gIGltZy5zcmMgPSBgJHtkZXN0aW5hdGlvbi5pbWFnZX1gO1xuICByZXR1cm4geyBkZXN0aW5hdGlvbiwgaW1hZ2VBbmROYW1lRGl2LCBpbWcgfTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kSW1hZ2VBbmROYW1lKGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbk5hbWUsIHBhcmFncmFwaCkge1xuICBsZXQgZGVzdGluYXRpb25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7ZGVzdGluYXRpb25OYW1lfWApO1xuICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdGluYXRpb25Ob2RlKTtcbiAgZGVzdGluYXRpb24uaW1hZ2VBbmROYW1lRGl2LmFwcGVuZENoaWxkKGRlc3RpbmF0aW9uLmltZyk7XG4gIGRlc3RpbmF0aW9uLmltYWdlQW5kTmFtZURpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZVwiKS5hcHBlbmRDaGlsZChkZXN0aW5hdGlvbi5pbWFnZUFuZE5hbWVEaXYpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZURlc3RpbmF0aW9uc0FuZE5hbWVzKGRlc3RpbmF0aW9ucykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RpbmF0aW9ucy5sZW5ndGggLSA0NDsgaSsrKSB7XG4gICAgbGV0IGRlc3RpbmF0aW9uID0gcmVuZGVyRGVzdGluYXRpb25JbWFnZXMoZGVzdGluYXRpb25zKTtcbiAgICBsZXQgZGVzdGluYXRpb25OYW1lID0gZGVzdGluYXRpb24uZGVzdGluYXRpb24uZGVzdGluYXRpb247XG4gICAgbGV0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gICAgcGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwiaG9tZS1kZXN0aW5hdGlvbi1uYW1lXCI7XG4gICAgYXBwZW5kSW1hZ2VBbmROYW1lKGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbk5hbWUsIHBhcmFncmFwaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3R5bGVIb21lUGFnZSgpIHtcbiAgdHJhdmVsX3RyYWNrZXJfc2VydmljZS5nZXRBbGxEZXN0aW5hdGlvbnMoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBsZXQgZGVzdGluYXRpb25zID0gY3JlYXRlSGVhZGVyQW5kU2V0QmFja2dyb3VuZEltZyhyZXN1bHQpO1xuICAgIHBvcHVsYXRlRGVzdGluYXRpb25zQW5kTmFtZXMoZGVzdGluYXRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0eWxlVHJhdmVsZXJQYWdlKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1zZWN0aW9uXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2UtaDFcIikuc3R5bGUucGFkZGluZyA9IFwiMiVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2UtaDFcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZS1oMVwiKS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjAgMCAyMHB4IDIwcHhcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2UtaDFcIikuc3R5bGUubWFyZ2luVG9wID0gXCIwXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaDEtZGl2XCIpLnN0eWxlLnBhZGRpbmcgPSBcIjIwJVwiO1xufVxuXG5mdW5jdGlvbiB0cmF2ZWxlck1lZGlhUXVlcnkoKSB7XG4gIGZ1bmN0aW9uIG15RnVuY3Rpb24oeCkge1xuICAgIGlmICh4Lm1hdGNoZXMpIHtcbiAgICAgIHN0eWxlVHJhdmVsZXJQYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgdmFyIHggPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDM3NXB4KVwiKTtcbiAgbXlGdW5jdGlvbih4KTtcbiAgeC5hZGRMaXN0ZW5lcihteUZ1bmN0aW9uKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVBZ2VudFBhZ2UoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXNlY3Rpb25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImgxLWRpdlwiKS5zdHlsZS5wYWRkaW5nID0gXCIxNSVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudC1oZWFkZXJcIikuc3R5bGUucGFkZGluZyA9IFwiMiVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudC1oZWFkZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50LWhlYWRlclwiKS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjAgMCAyMHB4IDIwcHhcIjtcbn1cblxuZnVuY3Rpb24gYWdlbnRNZWRpYVF1ZXJ5KCkge1xuICBmdW5jdGlvbiBteUZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeC5tYXRjaGVzKSB7XG4gICAgICBzdHlsZUFnZW50UGFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHZhciB4ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAzNzVweClcIik7XG4gIG15RnVuY3Rpb24oeCk7XG4gIHguYWRkTGlzdGVuZXIobXlGdW5jdGlvbik7XG59XG5cbmZ1bmN0aW9uIHN0eWxlQWdlbnRQYWdlRm9yNzY4KCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1zZWN0aW9uXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoMS1kaXZcIikuc3R5bGUubWFyZ2luVG9wID0gXCIwXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaDEtZGl2XCIpLnN0eWxlLnBhZGRpbmcgPSBcIjE1JVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50LWhlYWRlclwiKS5zdHlsZS5wYWRkaW5nID0gXCIyJVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50LWhlYWRlclwiKS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjAgMCAyMHB4IDIwcHhcIjtcbn1cblxuZnVuY3Rpb24gYWdlbnRNZWRpYVF1ZXJ5NzY4KCkge1xuICBmdW5jdGlvbiBteUZ1bmN0aW9uKHkpIHtcbiAgICBpZiAoeS5tYXRjaGVzKSB7XG4gICAgICBzdHlsZUFnZW50UGFnZUZvcjc2OCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHZhciB5ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjhweClcIik7XG4gIG15RnVuY3Rpb24oeSk7XG4gIHkuYWRkTGlzdGVuZXIobXlGdW5jdGlvbik7XG59XG5cbmV4cG9ydCB7XG4gIHN0eWxlSG9tZVBhZ2UsXG4gIHRyYXZlbGVyTWVkaWFRdWVyeSxcbiAgYWdlbnRNZWRpYVF1ZXJ5LFxuICBhZ2VudE1lZGlhUXVlcnk3NjgsXG59O1xuIiwiYXN5bmMgZnVuY3Rpb24gaXNWYWxpZFRyYXZlbGVyKHVzZXJuYW1lSW5wdXQpIHtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IHRyYXZlbGVyc1VybCA9IGJhc2VVcmwgKyBcIi9kYXRhL3RyYXZlbGVycy90cmF2ZWxlcnNcIjtcbiAgY29uc3QgdXNlcklkID0gdXNlcm5hbWVJbnB1dC5zbGljZSg4KTtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godHJhdmVsZXJzVXJsKTtcbiAgbGV0IGF3YWl0UmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBsZXQgdHJhdmVsZXJzID0gYXdhaXRSZXMudHJhdmVsZXJzO1xuICBsZXQgaWRUb051bSA9IE51bWJlcih1c2VySWQpO1xuICBsZXQgaWRzQXJyYXkgPSBbXTtcbiAgbGV0IHZhbGlkID0gZmFsc2U7XG4gIHRyYXZlbGVycy5mb3JFYWNoKCh0cmF2ZWxlcikgPT4ge1xuICAgIGlkc0FycmF5LnB1c2godHJhdmVsZXIuaWQpO1xuICB9KTtcbiAgaWRzQXJyYXkuZm9yRWFjaCgoaWQpID0+IHtcbiAgICBpZiAoaWRUb051bSA9PT0gaWQpIHtcbiAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdmFsaWQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFRyYXZlbGVycygpIHtcbiAgbGV0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL1wiO1xuICBsZXQgdHJhdmVsZXJzVXJsID0gXCJ0cmF2ZWxlcnMvdHJhdmVsZXJzXCI7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGJhc2VVcmwgKyB0cmF2ZWxlcnNVcmwpO1xuICBsZXQgdHJhdmVsZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gdHJhdmVsZXJzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTaW5nbGVUcmF2ZWxlcigpIHtcbiAgbGV0IGZ1bGxVc2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdXNlcm5hbWVcIik7XG4gIGNvbnN0IHRyYXZlbGVySWROdW1iZXIgPSBmdWxsVXNlcm5hbWUudmFsdWUuc2xpY2UoOCk7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlclwiO1xuICBjb25zdCBzaW5nbGVUcmF2ZWxlclVybCA9XG4gICAgYmFzZVVybCArIGAvZGF0YS90cmF2ZWxlcnMvdHJhdmVsZXJzLyR7dHJhdmVsZXJJZE51bWJlcn1gO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzaW5nbGVUcmF2ZWxlclVybCk7XG4gIGxldCB0cmF2ZWxlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHsgdHJhdmVsZXIgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VHJhdmVsZXJUcmlwcyh0cmF2ZWxlcikge1xuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXJcIjtcbiAgY29uc3QgdHJhdmVsZXJUcmlwc1VybCA9IGJhc2VVcmwgKyBcIi9kYXRhL3RyaXBzL3RyaXBzXCI7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRyYXZlbGVyVHJpcHNVcmwpO1xuICBsZXQgdHJpcEFyciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgbGV0IHRyaXBzID0gdHJpcEFyci50cmlwcztcbiAgbGV0IHRyYXZlbGVyVHJpcHMgPSBbXTtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0cmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0cmlwID0gdHJpcHNbaV07XG4gICAgaWYgKHRyYXZlbGVyLmlkID09PSB0cmlwLnVzZXJJRCkge1xuICAgICAgdHJhdmVsZXJUcmlwcy5wdXNoKHRyaXApO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB0cmF2ZWxlclRyaXBzLCB0cmF2ZWxlciB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUcmF2ZWxlckRlc3RpbmF0aW9ucyh0cmF2ZWxlclRyaXBzLCB0cmF2ZWxlcikge1xuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXJcIjtcbiAgY29uc3QgdHJhdmVsZXJEZXN0aW5hdGlvbnNVcmwgPSBiYXNlVXJsICsgXCIvZGF0YS9kZXN0aW5hdGlvbnMvZGVzdGluYXRpb25zXCI7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRyYXZlbGVyRGVzdGluYXRpb25zVXJsKTtcbiAgbGV0IGRlc3RpbmF0aW9uc1Jlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBsZXQgZGVzdGluYXRpb25zID0gZGVzdGluYXRpb25zUmVzcG9uc2UuZGVzdGluYXRpb25zO1xuICBsZXQgdHJpcERlc3RpbmF0aW9uSWRzID0gW107XG4gIGxldCB0cmF2ZWxlckRlc3RpbmF0aW9ucyA9IFtdO1xuICB0cmF2ZWxlclRyaXBzLmZvckVhY2goKHRyaXApID0+IHRyaXBEZXN0aW5hdGlvbklkcy5wdXNoKHRyaXAuZGVzdGluYXRpb25JRCkpO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGRlc3RpbmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwRGVzdGluYXRpb25JZHMuaW5jbHVkZXMoZGVzdGluYXRpb25zW2ldLmlkKSkge1xuICAgICAgdHJhdmVsZXJEZXN0aW5hdGlvbnMucHVzaChkZXN0aW5hdGlvbnNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB0cmF2ZWxlclRyaXBzLCB0cmF2ZWxlciwgdHJhdmVsZXJEZXN0aW5hdGlvbnMgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVHJpcHMoKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlclwiO1xuICBjb25zdCBhZ2VudFRyaXBzVXJsID0gYmFzZVVybCArIFwiL2RhdGEvdHJpcHMvdHJpcHNcIjtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYWdlbnRUcmlwc1VybCk7XG4gIGxldCBhd2FpdGVkUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGxldCBhbGxUcmlwcyA9IGF3YWl0ZWRSZXNwb25zZS50cmlwcztcbiAgcmV0dXJuIGFsbFRyaXBzO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxEZXN0aW5hdGlvbnMoKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlclwiO1xuICBjb25zdCBhZ2VudERlc3RpbmF0aW9uc1VybCA9IGJhc2VVcmwgKyBcIi9kYXRhL2Rlc3RpbmF0aW9ucy9kZXN0aW5hdGlvbnNcIjtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYWdlbnREZXN0aW5hdGlvbnNVcmwpO1xuICBsZXQgZGVzdGluYXRpb25zUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGxldCBhbGxEZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnNSZXNwb25zZS5kZXN0aW5hdGlvbnM7XG4gIHJldHVybiBhbGxEZXN0aW5hdGlvbnM7XG59XG5cbmV4cG9ydCB7XG4gIGlzVmFsaWRUcmF2ZWxlcixcbiAgZ2V0U2luZ2xlVHJhdmVsZXIsXG4gIGdldFRyYXZlbGVyVHJpcHMsXG4gIGdldFRyYXZlbGVyRGVzdGluYXRpb25zLFxuICBnZXRBbGxUcmlwcyxcbiAgZ2V0QWxsRGVzdGluYXRpb25zLFxuICBnZXRBbGxUcmF2ZWxlcnMsXG59O1xuIiwiaW1wb3J0ICogYXMgdHJhdmVsVHJhY2tlclNlcnZpY2UgZnJvbSBcIi4vdHJhdmVsX3RyYWNrZXJfc2VydmljZVwiO1xuaW1wb3J0ICogYXMgZGFzaGJvYXJkSGVscGVyIGZyb20gXCIuL2Rhc2hib2FyZF9oZWxwZXJcIjtcbmltcG9ydCAqIGFzIHN0eWxpbmcgZnJvbSBcIi4vc3R5bGluZ19oZWxwZXJcIjtcblxuZnVuY3Rpb24gcmVuZGVyVHJpcFJlcXVlc3RCdXR0b24oKSB7XG4gIGxldCB0cmlwUmVxdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRyaXBSZXF1ZXN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHJpcC1yZXF1ZXN0LWJ1dHRvblwiKTtcbiAgdHJpcFJlcXVlc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNBTENVTEFURVwiO1xuICBkYXNoYm9hcmRIZWxwZXIuYXBwZW5kVG9SZXF1ZXN0Rm9ybSh0cmlwUmVxdWVzdEJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclJlcXVlc3RGb3JtRWxlbWVudHMoZGVzdGluYXRpb25zQXJyLCBhbGxUcmlwcykge1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyTnVtYmVyT2ZUcmF2ZWxlcnNJbnB1dCgpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyRGF0ZVNlbGVjdElucHV0cygpO1xuICByZW5kZXJUcmlwUmVxdWVzdEJ1dHRvbigpO1xuICBkYXNoYm9hcmRIZWxwZXIuY3JlYXRlT25DbGlja0Z1bmN0aW9uQW5kUmVuZGVyVHJpcChkZXN0aW5hdGlvbnNBcnIsIGFsbFRyaXBzKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJhdmVsZXJUcmlwUmVxdWVzdEZvcm0oKSB7XG4gIHRyYXZlbFRyYWNrZXJTZXJ2aWNlLmdldEFsbFRyaXBzKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgbGV0IGFsbFRyaXBzID0gcmVzdWx0O1xuICAgIHRyYXZlbFRyYWNrZXJTZXJ2aWNlLmdldEFsbERlc3RpbmF0aW9ucygpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgbGV0IGRlc3RpbmF0aW9uc0FyciA9IHJlc3VsdDtcbiAgICAgIGRhc2hib2FyZEhlbHBlci5yZW5kZXJEZXN0aW5hdGlvblNlYXJjaEJhcihhbGxUcmlwcywgZGVzdGluYXRpb25zQXJyKTtcbiAgICAgIHJlbmRlclJlcXVlc3RGb3JtRWxlbWVudHMoZGVzdGluYXRpb25zQXJyLCBhbGxUcmlwcyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb3BTZWN0aW9uT2ZEYXNoYm9hcmQodHJhdmVsZXJEYXNoYm9hcmREYXRhKSB7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJMb2dPdXRCdXR0b24oKTtcbiAgcmVuZGVyVHJhdmVsZXJXZWxjb21lKHRyYXZlbGVyRGFzaGJvYXJkRGF0YS50cmF2ZWxlcik7XG4gIHJlbmRlclRvdGFsU3BlbnQodHJhdmVsZXJEYXNoYm9hcmREYXRhKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBzSGVhZGVyKFwiVXBjb21pbmdcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBzQW5kUmVxdWVzdEZvcm0odHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHModHJpcHMudXBjb21pbmdUcmlwc0FyciwgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBzSGVhZGVyKFwiUGFzdFwiKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBzKHRyaXBzLnBhc3RUcmlwc0FyciwgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBzSGVhZGVyKFwiUmVxdWVzdFwiKTtcbiAgcmVuZGVyVHJhdmVsZXJUcmlwUmVxdWVzdEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJhdmVsZXJEYXNoYm9hcmQodHJhdmVsZXJEYXNoYm9hcmREYXRhKSB7XG4gIHJlbmRlclRvcFNlY3Rpb25PZkRhc2hib2FyZCh0cmF2ZWxlckRhc2hib2FyZERhdGEpO1xuICBsZXQgdHJpcHMgPSBmaWx0ZXJQYXN0QW5kVXBjb21pbmdUcmlwcyh0cmF2ZWxlckRhc2hib2FyZERhdGEudHJhdmVsZXJUcmlwcyk7XG4gIGxldCBkZXN0aW5hdGlvbnMgPSB0cmF2ZWxlckRhc2hib2FyZERhdGEudHJhdmVsZXJEZXN0aW5hdGlvbnM7XG4gIHJlbmRlclRyaXBzQW5kUmVxdWVzdEZvcm0odHJpcHMsIGRlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VQYXN0QW5kVXBjb21pbmdUcmlwc0FycmF5cyh0cmF2ZWxlclRyaXBzLCB0b2RheSkge1xuICBsZXQgdXBjb21pbmdUcmlwc0FyciA9IFtdO1xuICBsZXQgcGFzdFRyaXBzQXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhdmVsZXJUcmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzbWFsbERhdGUgPSBuZXcgRGF0ZSh0cmF2ZWxlclRyaXBzW2ldLmRhdGUpO1xuICAgIGxldCB0cmF2RGF0ZSA9IGRhc2hib2FyZEhlbHBlci5yZXR1cm5UcmF2RGF0ZShzbWFsbERhdGUpO1xuICAgIGlmICh0b2RheSA8IHRyYXZEYXRlKSB7XG4gICAgICB1cGNvbWluZ1RyaXBzQXJyLnB1c2godHJhdmVsZXJUcmlwc1tpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3RUcmlwc0Fyci5wdXNoKHRyYXZlbGVyVHJpcHNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB1cGNvbWluZ1RyaXBzQXJyLCBwYXN0VHJpcHNBcnIgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUGFzdEFuZFVwY29taW5nVHJpcHModHJhdmVsZXJUcmlwcykge1xuICBsZXQgdG9kYXkgPSBkYXNoYm9hcmRIZWxwZXIucmV0dXJuQ3VycmVudERhdGUoKTtcbiAgbGV0IHRyaXBzQXJyYXkgPSBtYWtlUGFzdEFuZFVwY29taW5nVHJpcHNBcnJheXModHJhdmVsZXJUcmlwcywgdG9kYXkpO1xuICBsZXQgcGFzdFRyaXBzQXJyID0gdHJpcHNBcnJheS5wYXN0VHJpcHNBcnI7XG4gIGxldCB1cGNvbWluZ1RyaXBzQXJyID0gdHJpcHNBcnJheS51cGNvbWluZ1RyaXBzQXJyO1xuICByZXR1cm4geyBwYXN0VHJpcHNBcnIsIHVwY29taW5nVHJpcHNBcnIgfTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJhdmVsZXJXZWxjb21lKHRyYXZlbGVyKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9vdGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbGV0IHdlbGNvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHdlbGNvbWVIZWFkZXIuY2xhc3NOYW1lID0gXCJ3ZWxjb21lLWhlYWRlclwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImhvbWUtcGFnZS1oMVwiXG4gICkuaW5uZXJIVE1MID0gYEhlbGxvLCA8YnI+ICR7dHJhdmVsZXIubmFtZX1gO1xuICBzdHlsaW5nLnRyYXZlbGVyTWVkaWFRdWVyeSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb3RhbFNwZW50KHRyYXZlbGVyRGFzaGJvYXJkRGF0YSkge1xuICBsZXQgdG90YWxBbW91bnQgPSB0cmF2ZWxlckRhc2hib2FyZERhdGEudG90YWxBZnRlckFnZW50RmVlLnRvRml4ZWQoMik7XG4gIGxldCB0b3RhbFNwZW50UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdG90YWxTcGVudFBhcmFncmFwaC5jbGFzc05hbWUgPSBcInRvdGFsLXNwZW50XCI7XG4gIGxldCB0b3RhbFNwZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUb3RhbCBBbW91bnQgU3BlbnQ6ICQke3RvdGFsQW1vdW50fWBcbiAgKTtcbiAgdG90YWxTcGVudFBhcmFncmFwaC5hcHBlbmRDaGlsZCh0b3RhbFNwZW50VGV4dCk7XG4gIGRhc2hib2FyZEhlbHBlci5hcHBlbmRUb1NlY3Rpb24odG90YWxTcGVudFBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIGdldExvZGdpbmdDb3N0cyh0cmF2ZWxlckRlc3RpbmF0aW9ucywgdHJhdmVsZXJUcmlwcykge1xuICBsZXQgbG9kZ2luZ0Nvc3RzID0gW107XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdHJhdmVsZXJEZXN0aW5hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBsb2RnaW5nQ29zdHMucHVzaChcbiAgICAgIHRyYXZlbGVyRGVzdGluYXRpb25zW2ldLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICpcbiAgICAgIHRyYXZlbGVyVHJpcHNbaV0uZHVyYXRpb25cbiAgICApO1xuICB9XG4gIHJldHVybiBsb2RnaW5nQ29zdHM7XG59XG5cbmZ1bmN0aW9uIGdldEZsaWdodENvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKSB7XG4gIGxldCBmbGlnaHRDb3N0cyA9IFtdO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyYXZlbGVyRGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgZmxpZ2h0Q29zdHMucHVzaChcbiAgICAgIHRyYXZlbGVyRGVzdGluYXRpb25zW2ldLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKlxuICAgICAgdHJhdmVsZXJUcmlwc1tpXS50cmF2ZWxlcnNcbiAgICApO1xuICB9XG4gIHJldHVybiBmbGlnaHRDb3N0cztcbn1cblxuZnVuY3Rpb24gYWRkRmxpZ2h0YW5kTG9kZ2luZ0Nvc3RzKGZsaWdodENvc3RzLCBsb2RnaW5nQ29zdHMpIHtcbiAgbGV0IGZsaWdodHNQbHVzTG9kZ2luZyA9IFtdO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGZsaWdodENvc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgZmxpZ2h0c1BsdXNMb2RnaW5nLnB1c2gobG9kZ2luZ0Nvc3RzW2ldICsgZmxpZ2h0Q29zdHNbaV0pO1xuICB9XG4gIHJldHVybiBmbGlnaHRzUGx1c0xvZGdpbmc7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUZsaWdodHNQbHVzTG9kZ2luZyhmbGlnaHRzUGx1c0xvZGdpbmcpIHtcbiAgbGV0IGZsaWdodHNQbHVzTG9kZ2luZ1JlZHVjZWQgPSBmbGlnaHRzUGx1c0xvZGdpbmcucmVkdWNlKGZ1bmN0aW9uIChcbiAgICBmbGlnaHRzLFxuICAgIGxvZGdpbmdcbiAgKSB7XG4gICAgcmV0dXJuIGZsaWdodHMgKyBsb2RnaW5nO1xuICB9LFxuICAgIDApO1xuICByZXR1cm4gZmxpZ2h0c1BsdXNMb2RnaW5nUmVkdWNlZDtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVRyYXZlbGVyRGFzaGJvYXJkRGF0YShcbiAgdHJhdmVsZXIsXG4gIHRyYXZlbGVyRGVzdGluYXRpb25zLFxuICB0cmF2ZWxlclRyaXBzXG4pIHtcbiAgbGV0IGxvZGdpbmdDb3N0cyA9IGdldExvZGdpbmdDb3N0cyh0cmF2ZWxlckRlc3RpbmF0aW9ucywgdHJhdmVsZXJUcmlwcyk7XG4gIGxldCBmbGlnaHRDb3N0cyA9IGdldEZsaWdodENvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKTtcbiAgbGV0IGZsaWdodHNQbHVzTG9kZ2luZyA9IGFkZEZsaWdodGFuZExvZGdpbmdDb3N0cyhmbGlnaHRDb3N0cywgbG9kZ2luZ0Nvc3RzKTtcbiAgbGV0IHRvdGFsQW1vdW50Q3VzdEhhc1NwZW50QmVmb3JlQWdlbnRGZWUgPSByZWR1Y2VGbGlnaHRzUGx1c0xvZGdpbmcoXG4gICAgZmxpZ2h0c1BsdXNMb2RnaW5nXG4gICk7XG4gIHZhciB0b3RhbEFmdGVyQWdlbnRGZWUgPSB0b3RhbEFtb3VudEN1c3RIYXNTcGVudEJlZm9yZUFnZW50RmVlICogMS4xO1xuICByZXR1cm4ge1xuICAgIHRyYXZlbGVyLFxuICAgIHRyYXZlbGVyVHJpcHMsXG4gICAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gICAgbG9kZ2luZ0Nvc3RzLFxuICAgIGZsaWdodENvc3RzLFxuICAgIGZsaWdodHNQbHVzTG9kZ2luZyxcbiAgICB0b3RhbEFtb3VudEN1c3RIYXNTcGVudEJlZm9yZUFnZW50RmVlLFxuICAgIHRvdGFsQWZ0ZXJBZ2VudEZlZSxcbiAgfTtcbn1cblxuZXhwb3J0IHtcbiAgcmVuZGVyVHJhdmVsZXJXZWxjb21lLFxuICByZW5kZXJUb3RhbFNwZW50LFxuICBnZXRMb2RnaW5nQ29zdHMsXG4gIGdldEZsaWdodENvc3RzLFxuICBhZGRGbGlnaHRhbmRMb2RnaW5nQ29zdHMsXG4gIHJlZHVjZUZsaWdodHNQbHVzTG9kZ2luZyxcbiAgcHJlcGFyZVRyYXZlbGVyRGFzaGJvYXJkRGF0YSxcbiAgZmlsdGVyUGFzdEFuZFVwY29taW5nVHJpcHMsXG4gIHJlbmRlclRyYXZlbGVyRGFzaGJvYXJkLFxuICByZW5kZXJUcmF2ZWxlclRyaXBSZXF1ZXN0Rm9ybSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9