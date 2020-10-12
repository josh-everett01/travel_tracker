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
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nbody {\n  background-color: var(--main-bg-color);\n  color: var(--main-txt-color);\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.3rem;\n  margin: 0;\n  text-align: center;\n  width: 100%; }\n\nbutton {\n  background-color: var(--main-border-color);\n  border-radius: 20px;\n  color: var(--main-txt-color); }\n\nhtml {\n  --header-bg-color: #fff;\n  --main-bg-color: #fff;\n  --main-border-color: #fff;\n  --main-txt-color: #000; }\n\ni {\n  background-color: var(--header-bg-color);\n  color: var(--main-txt-color); }\n\nimg {\n  border: 1px solid var(--main-txt-color);\n  border-radius: 20px;\n  height: 300px;\n  margin: 3%;\n  width: 350px; }\n\nlabel {\n  font-family: \"Fira Sans\", sans-serif; }\n\np text {\n  margin: 5%; }\n\nsection:first-of-type {\n  align-content: center;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: auto;\n  grid-template-rows: 0.2fr 2fr 0.1fr 0.1fr 0.1fr 0.1fr;\n  place-items: center; }\n\n.approve-button {\n  grid-row: 7; }\n\n.container {\n  align-content: center;\n  border: 2px solid var(--main-border-color);\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 0.2fr 2fr 0.1fr 0.1fr 0.1fr 0.1fr;\n  margin: 5%;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 16px;\n  place-items: center; }\n\n.deny-button {\n  grid-row: 8; }\n\n.destination-image {\n  grid-row: 2;\n  height: 225px;\n  margin: 3%;\n  width: 275px; }\n\n.footer {\n  bottom: 0;\n  display: none;\n  font-size: x-small;\n  margin-bottom: -1%;\n  position: fixed;\n  width: 100%; }\n\n.header-section {\n  background-color: var(--header-bg-color);\n  border-bottom: 1px solid var(--main-txt-color);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  justify-items: center;\n  justify-content: space-around;\n  margin-bottom: 10px;\n  padding-bottom: 1px;\n  padding-top: 10px;\n  position: fixed;\n  text-align: center;\n  top: 0;\n  width: 100%;\n  z-index: 1; }\n\n.header-section h1 {\n  grid-column: 2;\n  grid-row: 1; }\n\n.home-destination-name {\n  margin: 3%; }\n\n.image-and-name-div {\n  display: flex;\n  flex-direction: column;\n  margin: 1%;\n  text-align: center; }\n\n.main-section {\n  display: grid;\n  margin-top: 3em;\n  place-items: center; }\n\n.past-trips {\n  grid-column: 2; }\n\n.welcome-header {\n  margin-top: 11%; }\n\n.submit {\n  border-radius: 10px;\n  color: var(--main-txt-color);\n  height: 50%;\n  margin-top: 4.5%;\n  padding: 1%; }\n\n.total-spent {\n  display: flex;\n  margin: auto;\n  margin-left: 40%;\n  margin-top: 2%; }\n\n.travname {\n  color: var(--main-border-color); }\n\n.trip-date {\n  grid-row: 3; }\n\n.trip-destination {\n  grid-row: 4; }\n\n.trip-duration {\n  grid-row: 5; }\n\n.trip-status {\n  grid-row: 6; }\n\n#agent-header {\n  border-radius: 20px;\n  color: var(--main-bg-color);\n  font-size: xxx-large;\n  margin-bottom: -5%;\n  margin-top: 11%;\n  opacity: 10%; }\n\n#agent-tools {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  height: 60%; }\n\n#agent-tools h3 {\n  grid-row: 1;\n  grid-column-start: 1;\n  grid-column-end: none;\n  width: 100%; }\n\n#agent-tools label {\n  grid-row: 2;\n  grid-column: 2; }\n\n#confirm-trip-request-button {\n  color: var(--main-txt-color); }\n\n#end {\n  grid-row: 4; }\n\n#h1-div {\n  background-image: url(\"https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1024-80.jpg.webp\");\n  background-size: cover;\n  background-position: bottom;\n  border: 1px solid var(--main-txt-color);\n  opacity: 88%;\n  padding: 10%; }\n\n#home-page {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 5%; }\n\n#home-page-h1 {\n  border-radius: 20px;\n  color: #fff;\n  font-size: xxx-large;\n  margin-bottom: -5%;\n  margin-top: 11%;\n  opacity: 10%; }\n\n#login-form {\n  display: flex;\n  grid-column: 3;\n  grid-row: 1;\n  justify-content: space-evenly;\n  margin: 3%;\n  width: 100%; }\n\n#login-form input {\n  padding: 3%; }\n\n#log-out-button {\n  border-radius: 10px;\n  color: var(--main-txt-color);\n  height: 50%;\n  margin-top: 8.5%;\n  padding: 1%; }\n\n#request-form {\n  display: flex;\n  flex-direction: column; }\n\n#requested-trips {\n  display: flex;\n  flex-direction: column; }\n\n#start {\n  grid-row: 4; }\n\n#show-traveler-button {\n  grid-column: 2;\n  grid-row: 4; }\n\n#todays-trips {\n  display: flex;\n  flex-direction: column; }\n\n#todays-trips #trip-request-button {\n  color: var(--main-txt-color); }\n\n#traveler {\n  grid-column: 2;\n  grid-row: 3; }\n\n#trav-search-bar-label {\n  grid-column: 2;\n  grid-row: 2; }\n\n#welcome-header {\n  margin-top: 11%; }\n\n@media (min-width: 376px) and (max-width: 768px) {\n  body {\n    display: grid;\n    font-size: 18px;\n    place-items: center; }\n  img {\n    height: 350px;\n    width: 400px; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .header-section h1 {\n    grid-column: 1;\n    grid-row: 1; }\n  .total-spent {\n    margin: 10px auto 0 auto;\n    margin-top: 2%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 60%; }\n  #agent-tools h3 {\n    grid-row: 1;\n    grid-column-end: none;\n    grid-column-start: 1;\n    width: 100%; }\n  #agent-tools label {\n    grid-column: 2;\n    grid-row: 2; }\n  #footer {\n    bottom: 0;\n    left: 0;\n    position: fixed; }\n  #h1-div {\n    border-radius: 0 0 20px 20px;\n    margin-top: 5%;\n    width: 100%; }\n  #header-section {\n    flex-direction: column;\n    font-size: 1.3rem;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    margin: 0;\n    padding: 0; }\n  #header-section h1 {\n    font-size: 2rem; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    margin-bottom: 0;\n    padding: 1%;\n    padding-top: 2%; }\n  #login-form {\n    display: flex;\n    grid-column: 2;\n    grid-row: 1;\n    justify-content: space-between;\n    width: 100%; }\n  #login-form input {\n    padding: 3%; }\n  #submit {\n    align-self: flex-end;\n    margin-bottom: 3px;\n    margin-left: 8px; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler-page {\n    display: grid; } }\n\n@media (max-width: 375px) {\n  * {\n    margin: 0;\n    padding: 0; }\n  body {\n    display: grid;\n    font-size: 1rem;\n    text-align: center; }\n  button {\n    padding: 2%; }\n  img {\n    height: 95%;\n    width: 95%; }\n  input {\n    width: 75%; }\n  p {\n    text-align: center; }\n  .footer {\n    bottom: 0;\n    display: none;\n    left: 34%;\n    position: absolute; }\n  .header-section h1 {\n    grid-column: 1;\n    grid-row: 1; }\n  .home-destination-name {\n    grid-column: 1;\n    margin-top: 10px; }\n  .home-page {\n    place-items: center; }\n  .total-earned {\n    display: grid;\n    grid-row: 2; }\n  .total-spent {\n    margin: 10px auto 0 auto; }\n  .welcome-header {\n    margin-top: 10%; }\n  #agent-header {\n    color: var(--main-bg-color);\n    margin-top: 10%; }\n  #agent-tools {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    height: 65%; }\n  #h1-div {\n    border-radius: 0 0 20px 20px; }\n  #header-section {\n    display: flex;\n    flex-direction: column;\n    font-size: x-small;\n    grid-row: 1;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    margin: 0;\n    padding: 0; }\n  #home-page {\n    display: grid;\n    margin: 0;\n    margin-top: 5%; }\n  #home-page-h1 {\n    border-radius: 0 0 20px 20px;\n    font-size: revert;\n    margin-top: 25%; }\n  #login-form {\n    display: flex;\n    grid-column: 1;\n    grid-row: 2;\n    justify-content: space-evenly;\n    margin: 3%;\n    place-items: center;\n    width: 100%; }\n  #login-form button {\n    margin-right: 5%; }\n  #login-form input {\n    margin: 0; }\n  #todays-trips {\n    display: flex;\n    flex-direction: column; }\n  #traveler {\n    width: auto; }\n  #traveler-page {\n    display: grid; } }\n", ""]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWdlbnRfZGFzaGJvYXJkX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9kYXNoYm9hcmRfaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naW5faGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsaW5nX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhdmVsX3RyYWNrZXJfc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhdmVsZXJfZGFzaGJvYXJkX2hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLE1BQU0sMkJBQTJCLEVBQUUsVUFBVSwyQ0FBMkMsaUNBQWlDLDJDQUEyQyxzQkFBc0IsY0FBYyx1QkFBdUIsZ0JBQWdCLEVBQUUsWUFBWSwrQ0FBK0Msd0JBQXdCLGlDQUFpQyxFQUFFLFVBQVUsNEJBQTRCLDBCQUEwQiw4QkFBOEIsMkJBQTJCLEVBQUUsT0FBTyw2Q0FBNkMsaUNBQWlDLEVBQUUsU0FBUyw0Q0FBNEMsd0JBQXdCLGtCQUFrQixlQUFlLGlCQUFpQixFQUFFLFdBQVcsMkNBQTJDLEVBQUUsWUFBWSxlQUFlLEVBQUUsMkJBQTJCLDBCQUEwQixrQkFBa0IsbUJBQW1CLGdDQUFnQywwREFBMEQsd0JBQXdCLEVBQUUscUJBQXFCLGdCQUFnQixFQUFFLGdCQUFnQiwwQkFBMEIsK0NBQStDLGtCQUFrQixtQkFBbUIsdUNBQXVDLDBEQUEwRCxlQUFlLHFCQUFxQixxQkFBcUIsdUJBQXVCLGtCQUFrQix3QkFBd0IsRUFBRSxrQkFBa0IsZ0JBQWdCLEVBQUUsd0JBQXdCLGdCQUFnQixrQkFBa0IsZUFBZSxpQkFBaUIsRUFBRSxhQUFhLGNBQWMsa0JBQWtCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLGdCQUFnQixFQUFFLHFCQUFxQiw2Q0FBNkMsbURBQW1ELGtCQUFrQix1Q0FBdUMsMEJBQTBCLGtDQUFrQyx3QkFBd0Isd0JBQXdCLHNCQUFzQixvQkFBb0IsdUJBQXVCLFdBQVcsZ0JBQWdCLGVBQWUsRUFBRSx3QkFBd0IsbUJBQW1CLGdCQUFnQixFQUFFLDRCQUE0QixlQUFlLEVBQUUseUJBQXlCLGtCQUFrQiwyQkFBMkIsZUFBZSx1QkFBdUIsRUFBRSxtQkFBbUIsa0JBQWtCLG9CQUFvQix3QkFBd0IsRUFBRSxpQkFBaUIsbUJBQW1CLEVBQUUscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsd0JBQXdCLGlDQUFpQyxnQkFBZ0IscUJBQXFCLGdCQUFnQixFQUFFLGtCQUFrQixrQkFBa0IsaUJBQWlCLHFCQUFxQixtQkFBbUIsRUFBRSxlQUFlLG9DQUFvQyxFQUFFLGdCQUFnQixnQkFBZ0IsRUFBRSx1QkFBdUIsZ0JBQWdCLEVBQUUsb0JBQW9CLGdCQUFnQixFQUFFLGtCQUFrQixnQkFBZ0IsRUFBRSxtQkFBbUIsd0JBQXdCLGdDQUFnQyx5QkFBeUIsdUJBQXVCLG9CQUFvQixpQkFBaUIsRUFBRSxrQkFBa0Isa0JBQWtCLHVDQUF1Qyx3Q0FBd0MsZ0JBQWdCLEVBQUUscUJBQXFCLGdCQUFnQix5QkFBeUIsMEJBQTBCLGdCQUFnQixFQUFFLHdCQUF3QixnQkFBZ0IsbUJBQW1CLEVBQUUsa0NBQWtDLGlDQUFpQyxFQUFFLFVBQVUsZ0JBQWdCLEVBQUUsYUFBYSx5R0FBeUcsMkJBQTJCLGdDQUFnQyw0Q0FBNEMsaUJBQWlCLGlCQUFpQixFQUFFLGdCQUFnQixrQkFBa0Isb0JBQW9CLDRCQUE0QixlQUFlLEVBQUUsbUJBQW1CLHdCQUF3QixnQkFBZ0IseUJBQXlCLHVCQUF1QixvQkFBb0IsaUJBQWlCLEVBQUUsaUJBQWlCLGtCQUFrQixtQkFBbUIsZ0JBQWdCLGtDQUFrQyxlQUFlLGdCQUFnQixFQUFFLHVCQUF1QixnQkFBZ0IsRUFBRSxxQkFBcUIsd0JBQXdCLGlDQUFpQyxnQkFBZ0IscUJBQXFCLGdCQUFnQixFQUFFLG1CQUFtQixrQkFBa0IsMkJBQTJCLEVBQUUsc0JBQXNCLGtCQUFrQiwyQkFBMkIsRUFBRSxZQUFZLGdCQUFnQixFQUFFLDJCQUEyQixtQkFBbUIsZ0JBQWdCLEVBQUUsbUJBQW1CLGtCQUFrQiwyQkFBMkIsRUFBRSx3Q0FBd0MsaUNBQWlDLEVBQUUsZUFBZSxtQkFBbUIsZ0JBQWdCLEVBQUUsNEJBQTRCLG1CQUFtQixnQkFBZ0IsRUFBRSxxQkFBcUIsb0JBQW9CLEVBQUUsc0RBQXNELFVBQVUsb0JBQW9CLHNCQUFzQiwwQkFBMEIsRUFBRSxTQUFTLG9CQUFvQixtQkFBbUIsRUFBRSxhQUFhLGdCQUFnQixvQkFBb0IsZ0JBQWdCLHlCQUF5QixFQUFFLHdCQUF3QixxQkFBcUIsa0JBQWtCLEVBQUUsa0JBQWtCLCtCQUErQixxQkFBcUIsRUFBRSxtQkFBbUIsa0NBQWtDLHNCQUFzQixFQUFFLGtCQUFrQixvQkFBb0IseUNBQXlDLDBDQUEwQyxrQkFBa0IsRUFBRSxxQkFBcUIsa0JBQWtCLDRCQUE0QiwyQkFBMkIsa0JBQWtCLEVBQUUsd0JBQXdCLHFCQUFxQixrQkFBa0IsRUFBRSxhQUFhLGdCQUFnQixjQUFjLHNCQUFzQixFQUFFLGFBQWEsbUNBQW1DLHFCQUFxQixrQkFBa0IsRUFBRSxxQkFBcUIsNkJBQTZCLHdCQUF3QixxQ0FBcUMsOEJBQThCLGdCQUFnQixpQkFBaUIsRUFBRSx3QkFBd0Isc0JBQXNCLEVBQUUsbUJBQW1CLG1DQUFtQyx1QkFBdUIsa0JBQWtCLHNCQUFzQixFQUFFLGlCQUFpQixvQkFBb0IscUJBQXFCLGtCQUFrQixxQ0FBcUMsa0JBQWtCLEVBQUUsdUJBQXVCLGtCQUFrQixFQUFFLGFBQWEsMkJBQTJCLHlCQUF5Qix1QkFBdUIsRUFBRSxtQkFBbUIsb0JBQW9CLDZCQUE2QixFQUFFLG9CQUFvQixvQkFBb0IsRUFBRSxFQUFFLCtCQUErQixPQUFPLGdCQUFnQixpQkFBaUIsRUFBRSxVQUFVLG9CQUFvQixzQkFBc0IseUJBQXlCLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxTQUFTLGtCQUFrQixpQkFBaUIsRUFBRSxXQUFXLGlCQUFpQixFQUFFLE9BQU8seUJBQXlCLEVBQUUsYUFBYSxnQkFBZ0Isb0JBQW9CLGdCQUFnQix5QkFBeUIsRUFBRSx3QkFBd0IscUJBQXFCLGtCQUFrQixFQUFFLDRCQUE0QixxQkFBcUIsdUJBQXVCLEVBQUUsZ0JBQWdCLDBCQUEwQixFQUFFLG1CQUFtQixvQkFBb0Isa0JBQWtCLEVBQUUsa0JBQWtCLCtCQUErQixFQUFFLHFCQUFxQixzQkFBc0IsRUFBRSxtQkFBbUIsa0NBQWtDLHNCQUFzQixFQUFFLGtCQUFrQixvQkFBb0IseUNBQXlDLDBDQUEwQyxrQkFBa0IsRUFBRSxhQUFhLG1DQUFtQyxFQUFFLHFCQUFxQixvQkFBb0IsNkJBQTZCLHlCQUF5QixrQkFBa0IsaUNBQWlDLGtDQUFrQyxnQkFBZ0IsaUJBQWlCLEVBQUUsZ0JBQWdCLG9CQUFvQixnQkFBZ0IscUJBQXFCLEVBQUUsbUJBQW1CLG1DQUFtQyx3QkFBd0Isc0JBQXNCLEVBQUUsaUJBQWlCLG9CQUFvQixxQkFBcUIsa0JBQWtCLG9DQUFvQyxpQkFBaUIsMEJBQTBCLGtCQUFrQixFQUFFLHdCQUF3Qix1QkFBdUIsRUFBRSx1QkFBdUIsZ0JBQWdCLEVBQUUsbUJBQW1CLG9CQUFvQiw2QkFBNkIsRUFBRSxlQUFlLGtCQUFrQixFQUFFLG9CQUFvQixvQkFBb0IsRUFBRSxFQUFFOzs7Ozs7Ozs7Ozs7OztBQ0ZoaVE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsZ0JBQWdCO0FBQ3ZELE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxvQkFBb0I7QUFDbkMsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7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QUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrQkFBK0I7QUFDbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQsd0NBQXdDLE1BQU07QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxNQUFNO0FBQzlDLHNDQUFzQyxNQUFNO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQSxvQ0FBb0MsRUFBRTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBLG9DQUFvQyw0QkFBNEI7QUFDaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QSxtQkFBbUIsZ0VBQThCO0FBQ2pEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0EsY0FBYyxtRUFBaUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDLEVBQUUsa0VBQTBCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0EsRUFBRSxpRUFBK0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQ0FBaUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpQ0FBaUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWFFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJvcmRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTsgfVxcblxcbmh0bWwge1xcbiAgLS1oZWFkZXItYmctY29sb3I6ICNmZmY7XFxuICAtLW1haW4tYmctY29sb3I6ICNmZmY7XFxuICAtLW1haW4tYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgLS1tYWluLXR4dC1jb2xvcjogIzAwMDsgfVxcblxcbmkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7IH1cXG5cXG5pbWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBtYXJnaW46IDMlO1xcbiAgd2lkdGg6IDM1MHB4OyB9XFxuXFxubGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhIFNhbnNcXFwiLCBzYW5zLXNlcmlmOyB9XFxuXFxucCB0ZXh0IHtcXG4gIG1hcmdpbjogNSU7IH1cXG5cXG5zZWN0aW9uOmZpcnN0LW9mLXR5cGUge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAyZnIgMC4xZnIgMC4xZnIgMC4xZnIgMC4xZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyOyB9XFxuXFxuLmFwcHJvdmUtYnV0dG9uIHtcXG4gIGdyaWQtcm93OiA3OyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWJvcmRlci1jb2xvcik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAyZnIgMC4xZnIgMC4xZnIgMC4xZnIgMC4xZnI7XFxuICBtYXJnaW46IDUlO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcblxcbi5kZW55LWJ1dHRvbiB7XFxuICBncmlkLXJvdzogODsgfVxcblxcbi5kZXN0aW5hdGlvbi1pbWFnZSB7XFxuICBncmlkLXJvdzogMjtcXG4gIGhlaWdodDogMjI1cHg7XFxuICBtYXJnaW46IDMlO1xcbiAgd2lkdGg6IDI3NXB4OyB9XFxuXFxuLmZvb3RlciB7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgbWFyZ2luLWJvdHRvbTogLTElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uaGVhZGVyLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTsgfVxcblxcbi5oZWFkZXItc2VjdGlvbiBoMSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAxOyB9XFxuXFxuLmhvbWUtZGVzdGluYXRpb24tbmFtZSB7XFxuICBtYXJnaW46IDMlOyB9XFxuXFxuLmltYWdlLWFuZC1uYW1lLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubWFpbi1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW4tdG9wOiAzZW07XFxuICBwbGFjZS1pdGVtczogY2VudGVyOyB9XFxuXFxuLnBhc3QtdHJpcHMge1xcbiAgZ3JpZC1jb2x1bW46IDI7IH1cXG5cXG4ud2VsY29tZS1oZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogMTElOyB9XFxuXFxuLnN1Ym1pdCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gIGhlaWdodDogNTAlO1xcbiAgbWFyZ2luLXRvcDogNC41JTtcXG4gIHBhZGRpbmc6IDElOyB9XFxuXFxuLnRvdGFsLXNwZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tbGVmdDogNDAlO1xcbiAgbWFyZ2luLXRvcDogMiU7IH1cXG5cXG4udHJhdm5hbWUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tYm9yZGVyLWNvbG9yKTsgfVxcblxcbi50cmlwLWRhdGUge1xcbiAgZ3JpZC1yb3c6IDM7IH1cXG5cXG4udHJpcC1kZXN0aW5hdGlvbiB7XFxuICBncmlkLXJvdzogNDsgfVxcblxcbi50cmlwLWR1cmF0aW9uIHtcXG4gIGdyaWQtcm93OiA1OyB9XFxuXFxuLnRyaXAtc3RhdHVzIHtcXG4gIGdyaWQtcm93OiA2OyB9XFxuXFxuI2FnZW50LWhlYWRlciB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XFxuICBtYXJnaW4tYm90dG9tOiAtNSU7XFxuICBtYXJnaW4tdG9wOiAxMSU7XFxuICBvcGFjaXR5OiAxMCU7IH1cXG5cXG4jYWdlbnQtdG9vbHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGhlaWdodDogNjAlOyB9XFxuXFxuI2FnZW50LXRvb2xzIGgzIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IG5vbmU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbiNhZ2VudC10b29scyBsYWJlbCB7XFxuICBncmlkLXJvdzogMjtcXG4gIGdyaWQtY29sdW1uOiAyOyB9XFxuXFxuI2NvbmZpcm0tdHJpcC1yZXF1ZXN0LWJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpOyB9XFxuXFxuI2VuZCB7XFxuICBncmlkLXJvdzogNDsgfVxcblxcbiNoMS1kaXYge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2Nkbi5tb3MuY21zLmZ1dHVyZWNkbi5uZXQvd3RxcW5rWURZaTJpZnNXWlZXMk1UNC0xMDI0LTgwLmpwZy53ZWJwXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbiAgb3BhY2l0eTogODglO1xcbiAgcGFkZGluZzogMTAlOyB9XFxuXFxuI2hvbWUtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDUlOyB9XFxuXFxuI2hvbWUtcGFnZS1oMSB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IHh4eC1sYXJnZTtcXG4gIG1hcmdpbi1ib3R0b206IC01JTtcXG4gIG1hcmdpbi10b3A6IDExJTtcXG4gIG9wYWNpdHk6IDEwJTsgfVxcblxcbiNsb2dpbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWNvbHVtbjogMztcXG4gIGdyaWQtcm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW46IDMlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4jbG9naW4tZm9ybSBpbnB1dCB7XFxuICBwYWRkaW5nOiAzJTsgfVxcblxcbiNsb2ctb3V0LWJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gIGhlaWdodDogNTAlO1xcbiAgbWFyZ2luLXRvcDogOC41JTtcXG4gIHBhZGRpbmc6IDElOyB9XFxuXFxuI3JlcXVlc3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbiNyZXF1ZXN0ZWQtdHJpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4jc3RhcnQge1xcbiAgZ3JpZC1yb3c6IDQ7IH1cXG5cXG4jc2hvdy10cmF2ZWxlci1idXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogNDsgfVxcblxcbiN0b2RheXMtdHJpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4jdG9kYXlzLXRyaXBzICN0cmlwLXJlcXVlc3QtYnV0dG9uIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7IH1cXG5cXG4jdHJhdmVsZXIge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMzsgfVxcblxcbiN0cmF2LXNlYXJjaC1iYXItbGFiZWwge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMjsgfVxcblxcbiN3ZWxjb21lLWhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiAxMSU7IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcbiAgaW1nIHtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgd2lkdGg6IDQwMHB4OyB9XFxuICAuZm9vdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBsZWZ0OiAzNCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcbiAgLmhlYWRlci1zZWN0aW9uIGgxIHtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxOyB9XFxuICAudG90YWwtc3BlbnQge1xcbiAgICBtYXJnaW46IDEwcHggYXV0byAwIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDIlOyB9XFxuICAjYWdlbnQtaGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7IH1cXG4gICNhZ2VudC10b29scyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDYwJTsgfVxcbiAgI2FnZW50LXRvb2xzIGgzIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogbm9uZTtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAjYWdlbnQtdG9vbHMgbGFiZWwge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7IH1cXG4gICNmb290ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgfVxcbiAgI2gxLWRpdiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgI2hlYWRlci1zZWN0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgI2hlYWRlci1zZWN0aW9uIGgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtOyB9XFxuICAjaG9tZS1wYWdlLWgxIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMSU7XFxuICAgIHBhZGRpbmctdG9wOiAyJTsgfVxcbiAgI2xvZ2luLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNsb2dpbi1mb3JtIGlucHV0IHtcXG4gICAgcGFkZGluZzogMyU7IH1cXG4gICNzdWJtaXQge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICBtYXJnaW4tbGVmdDogOHB4OyB9XFxuICAjdG9kYXlzLXRyaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3RyYXZlbGVyLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkOyB9IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gICoge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7IH1cXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMiU7IH1cXG4gIGltZyB7XFxuICAgIGhlaWdodDogOTUlO1xcbiAgICB3aWR0aDogOTUlOyB9XFxuICBpbnB1dCB7XFxuICAgIHdpZHRoOiA3NSU7IH1cXG4gIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5mb290ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGxlZnQ6IDM0JTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAuaGVhZGVyLXNlY3Rpb24gaDEge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDE7IH1cXG4gIC5ob21lLWRlc3RpbmF0aW9uLW5hbWUge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgLmhvbWUtcGFnZSB7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG4gIC50b3RhbC1lYXJuZWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogMjsgfVxcbiAgLnRvdGFsLXNwZW50IHtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvOyB9XFxuICAud2VsY29tZS1oZWFkZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7IH1cXG4gICNhZ2VudC1oZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IDEwJTsgfVxcbiAgI2FnZW50LXRvb2xzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGhlaWdodDogNjUlOyB9XFxuICAjaDEtZGl2IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDsgfVxcbiAgI2hlYWRlci1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAjaG9tZS1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tdG9wOiA1JTsgfVxcbiAgI2hvbWUtcGFnZS1oMSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogcmV2ZXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAyNSU7IH1cXG4gICNsb2dpbi1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgbWFyZ2luOiAzJTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICNsb2dpbi1mb3JtIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogNSU7IH1cXG4gICNsb2dpbi1mb3JtIGlucHV0IHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAjdG9kYXlzLXRyaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3RyYXZlbGVyIHtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG4gICN0cmF2ZWxlci1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDsgfSB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCAqIGFzIHRyYXZlbFRyYWNrZXJTZXJ2aWNlIGZyb20gXCIuL3RyYXZlbF90cmFja2VyX3NlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGRhc2hib2FyZEhlbHBlciBmcm9tIFwiLi9kYXNoYm9hcmRfaGVscGVyXCI7XG5pbXBvcnQgKiBhcyB0cmF2ZWxlckRhc2hib2FyZEhlbHBlciBmcm9tIFwiLi90cmF2ZWxlcl9kYXNoYm9hcmRfaGVscGVyXCI7XG5pbXBvcnQgKiBhcyBzdHlsaW5nIGZyb20gXCIuL3N0eWxpbmdfaGVscGVyXCI7XG5cbmZ1bmN0aW9uIHNldEFnZW50UGFnZSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZS1oMVwiKS5pbm5lckhUTUwgPSBcIldlbGNvbWUsIEFHRU5UXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlLWgxXCIpLmlkID0gXCJhZ2VudC1oZWFkZXJcIjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWdlbnRXZWxjb21lKCkge1xuICBzZXRBZ2VudFBhZ2UoKTtcbiAgc3R5bGluZy5hZ2VudE1lZGlhUXVlcnkoKTtcbiAgc3R5bGluZy5hZ2VudE1lZGlhUXVlcnk3NjgoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQW1vdW50QWdlbnRFYXJuZWQodHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgYW1vdW50QWdlbnRFYXJuZWQgPSBnZXRMb2RnaW5nQ29zdHNGb3JBZ2VudChkZXN0aW5hdGlvbnMsIHRyaXBzKTtcbiAgcmVuZGVyVG90YWxFYXJuZWQoYW1vdW50QWdlbnRFYXJuZWQpO1xufVxuXG5mdW5jdGlvbiBjaGVja0Zvck5vVHJhdmVsZXJzKHRvZGF5c1RyaXBzKSB7XG4gIGlmICh0b2RheXNUcmlwcy50b2RheXNUcmlwcy5sZW5ndGggPT09IDApIHtcbiAgICBsZXQgbm9UcmF2ZWxlcnNUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgXCJUaGVyZSBhcmUgbm8gdHJhdmVsZXJzIG9uIFRyaXBzIFRvZGF5XCJcbiAgICApO1xuICAgIGxldCBub1RyYXZlbGVyc0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG5vVHJhdmVsZXJzSDEuYXBwZW5kQ2hpbGQobm9UcmF2ZWxlcnNUZXh0Tm9kZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMV0uYXBwZW5kQ2hpbGQobm9UcmF2ZWxlcnNIMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJhdmVsZXJzT25Ucmlwc1RvZGF5KHRvZGF5c1RyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgaWYgKHRvZGF5c1RyaXBzLnRvZGF5c1RyaXBzLmxlbmd0aCA+IDApIHtcbiAgICByZW5kZXJBZ2VudFRyaXBzKHRvZGF5c1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBlbmRpbmdBbmRUb2RheXNUcmlwcyh0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGxldCBwZW5kaW5nVHJpcHMgPSBkYXNoYm9hcmRIZWxwZXIuZ2V0UGVuZGluZ1RyaXBzKHRyaXBzKTtcbiAgcmVuZGVyQWdlbnRUcmlwcyhwZW5kaW5nVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwc0hlYWRlcihcIlRvZGF5J3NcIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250YWluZXJcIilbMV0uaWQgPSBcInRvZGF5cy10cmlwc1wiO1xuICBsZXQgdG9kYXlzVHJpcHMgPSBkYXNoYm9hcmRIZWxwZXIuZ2V0VG9kYXlzVHJpcHModHJpcHMpO1xuICBjaGVja0Zvck5vVHJhdmVsZXJzKHRvZGF5c1RyaXBzKTtcbiAgcmVuZGVyVHJhdmVsZXJzT25Ucmlwc1RvZGF5KHRvZGF5c1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb3BIYWxmT2ZBZ2VudERhc2hib2FyZCh0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIHJlbmRlckFtb3VudEFnZW50RWFybmVkKHRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJSZXF1ZXN0ZWRcIik7XG4gIHJlbmRlclBlbmRpbmdBbmRUb2RheXNUcmlwcyh0cmlwcywgZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQm90dG9tSGFsZk9mQWdlbnREYXNoYm9hcmQodHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJBZ2VudCBUb29scyBhbmQgVHJhdmVsZXJcIik7XG4gIHJlbmRlclRyYXZlbGVyU2VhcmNoQmFyKCk7XG4gIHJlbmRlclNob3dUcmF2ZWxlckJ1dHRvbih0cmlwcywgZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3VjY2Vzc2Z1bEFnZW5jeUxvZ2luKCkge1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyTG9nT3V0QnV0dG9uKCk7XG4gIHJlbmRlckFnZW50V2VsY29tZSgpO1xuICB0cmF2ZWxUcmFja2VyU2VydmljZS5nZXRBbGxUcmlwcygpLnRoZW4oZnVuY3Rpb24gKHRyaXBzKSB7XG4gICAgdHJhdmVsVHJhY2tlclNlcnZpY2UuZ2V0QWxsRGVzdGluYXRpb25zKCkudGhlbihmdW5jdGlvbiAoZGVzdGluYXRpb25zKSB7XG4gICAgICB0cmlwcztcbiAgICAgIHJlbmRlclRvcEhhbGZPZkFnZW50RGFzaGJvYXJkKHRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICAgICAgcmVuZGVyQm90dG9tSGFsZk9mQWdlbnREYXNoYm9hcmQodHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXR1cm5BcHByb3ZlZFRyaXBzKHRyaXBzKSB7XG4gIGxldCBhcHByb3ZlZFRyaXBzID0gW107XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHJpcHNbaV0uc3RhdHVzID09PSBcImFwcHJvdmVkXCIpIHtcbiAgICAgIGFwcHJvdmVkVHJpcHMucHVzaCh0cmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcHByb3ZlZFRyaXBzO1xufVxuXG5mdW5jdGlvbiBsb29wVGhyb3VnaEFwcHJvdmVkVHJpcChcbiAgYXBwcm92ZWRUcmlwLFxuICBkZXN0aW5hdGlvbnMsXG4gIGRlc3RpbmF0aW9uSW5kZXgsXG4gIGFwcHJvdmVkVHJpcHNGbGlnaHRQbHVzTG9kZ2luZ0FyclxuKSB7XG4gIGZvciAoXG4gICAgZGVzdGluYXRpb25JbmRleCA9IDA7XG4gICAgZGVzdGluYXRpb25JbmRleCA8IGRlc3RpbmF0aW9ucy5sZW5ndGg7XG4gICAgZGVzdGluYXRpb25JbmRleCsrXG4gICkge1xuICAgIGxldCBkZXN0aW5hdGlvbklEID0gYXBwcm92ZWRUcmlwLmRlc3RpbmF0aW9uSUQ7XG4gICAgbGV0IGRlc3RpbmF0aW9uSW5kZXhJZCA9IGRlc3RpbmF0aW9uc1tkZXN0aW5hdGlvbkluZGV4XS5pZDtcbiAgICBpZiAoZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb25JbmRleElkKSB7XG4gICAgICBhcHByb3ZlZFRyaXBzRmxpZ2h0UGx1c0xvZGdpbmdBcnIucHVzaChcbiAgICAgICAgZGVzdGluYXRpb25zW2Rlc3RpbmF0aW9uSW5kZXhdLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICtcbiAgICAgICAgZGVzdGluYXRpb25zW2Rlc3RpbmF0aW9uSW5kZXhdLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb25cbiAgICAgICk7XG4gICAgICBsZXQgYXBwcm92ZWRUcmlwRmxpZ2h0UGx1c0xvZGdpbmcgPSBhcHByb3ZlZFRyaXBzRmxpZ2h0UGx1c0xvZGdpbmdBcnI7XG4gICAgICByZXR1cm4gYXBwcm92ZWRUcmlwRmxpZ2h0UGx1c0xvZGdpbmc7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJldHVybkFwcHJvdmVkVHJpcHNGbGlnaHRzQW5kTG9kZ2luZyhkZXN0aW5hdGlvbnMsIGFwcHJvdmVkVHJpcHMpIHtcbiAgbGV0IGFwcHJvdmVkVHJpcHNGbGlnaHRQbHVzTG9kZ2luZ0FyciA9IFtdO1xuICBsZXQgZGVzdGluYXRpb25JbmRleDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHByb3ZlZFRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbG9vcFRocm91Z2hBcHByb3ZlZFRyaXAoXG4gICAgICBhcHByb3ZlZFRyaXBzW2ldLFxuICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgZGVzdGluYXRpb25JbmRleCxcbiAgICAgIGFwcHJvdmVkVHJpcHNGbGlnaHRQbHVzTG9kZ2luZ0FyclxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGFwcHJvdmVkVHJpcHNGbGlnaHRQbHVzTG9kZ2luZ0Fycjtcbn1cblxuZnVuY3Rpb24gZ2V0TG9kZ2luZ0Nvc3RzRm9yQWdlbnQoZGVzdGluYXRpb25zLCB0cmlwcykge1xuICBsZXQgYXBwcm92ZWRUcmlwcyA9IHJldHVybkFwcHJvdmVkVHJpcHModHJpcHMpO1xuICBsZXQgYXBwcm92ZWRUcmlwc0ZsaWdodHNQbHVzTG9kZ2luZyA9IHJldHVybkFwcHJvdmVkVHJpcHNGbGlnaHRzQW5kTG9kZ2luZyhcbiAgICBkZXN0aW5hdGlvbnMsXG4gICAgYXBwcm92ZWRUcmlwc1xuICApO1xuICBsZXQgYW1vdW50VHJhdmVsZXJzSGF2ZVNwZW50ID0gYXBwcm92ZWRUcmlwc0ZsaWdodHNQbHVzTG9kZ2luZy5yZWR1Y2UoXG4gICAgKGxvZGdpbmdDb3N0LCBmbGlnaHRDb3N0KSA9PiBsb2RnaW5nQ29zdCArIGZsaWdodENvc3QsXG4gICAgMFxuICApO1xuICBsZXQgYW1vdW50QWdlbnRFYXJuZWQgPSBhbW91bnRUcmF2ZWxlcnNIYXZlU3BlbnQgKiAwLjE7XG4gIHJldHVybiBhbW91bnRBZ2VudEVhcm5lZDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG90YWxFYXJuZWQoYW1vdW50QWdlbnRFYXJuZWQpIHtcbiAgYW1vdW50QWdlbnRFYXJuZWQ7XG4gIGxldCB0b3RhbEFtb3VudCA9IGFtb3VudEFnZW50RWFybmVkLnRvRml4ZWQoMik7XG4gIGxldCB0b3RhbEVhcm5lZFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIHRvdGFsRWFybmVkUGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwidG90YWwtc3BlbnRcIjtcbiAgbGV0IHRvdGFsRWFybmVkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUb3RhbCBBbW91bnQgRWFybmVkOiAkJHt0b3RhbEFtb3VudH1gXG4gICk7XG4gIHRvdGFsRWFybmVkUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRvdGFsRWFybmVkVGV4dCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKHRvdGFsRWFybmVkUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcHModG9kYXlzVHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyRGVzdGluYXRpb25JbWFnZSh0b2RheXNUcmlwcywgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBEYXRlKHRvZGF5c1RyaXBzKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBEZXN0aW5hdGlvbih0b2RheXNUcmlwcywgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBTdGF0dXModG9kYXlzVHJpcHMpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcER1cmF0aW9uKHRvZGF5c1RyaXBzKTtcbiAgcmVuZGVyQXBwcm92ZUFuZERlbnlCdXR0b25zKHRvZGF5c1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQZW5kaW5nVHJpcHMocGVuZGluZ1RyaXAsIGRlc3RpbmF0aW9ucykge1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyRGVzdGluYXRpb25JbWFnZShwZW5kaW5nVHJpcCwgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBEYXRlKHBlbmRpbmdUcmlwKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBEZXN0aW5hdGlvbihwZW5kaW5nVHJpcCwgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBTdGF0dXMocGVuZGluZ1RyaXApO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcER1cmF0aW9uKHBlbmRpbmdUcmlwKTtcbiAgcmVuZGVyQXBwcm92ZUFuZERlbnlCdXR0b25zKHBlbmRpbmdUcmlwLCBkZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBZ2VudFRyaXBzKHBlbmRpbmdUcmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGlmIChwZW5kaW5nVHJpcHMubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgdG9kYXlzVHJpcHMgPSBwZW5kaW5nVHJpcHMudG9kYXlzVHJpcHM7XG4gICAgcmVuZGVyVHJpcHModG9kYXlzVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdUcmlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVuZGVyUGVuZGluZ1RyaXBzKHBlbmRpbmdUcmlwc1tpXSwgZGVzdGluYXRpb25zKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kQXBwcm92ZUFuZERlbnlCdXR0b24oYXBwcm92ZUJ1dHRvbiwgZGVueUJ1dHRvbikge1xuICBkYXNoYm9hcmRIZWxwZXIuYXBwZW5kVG9TZWN0aW9uKGFwcHJvdmVCdXR0b24pO1xuICBkYXNoYm9hcmRIZWxwZXIuYXBwZW5kVG9TZWN0aW9uKGRlbnlCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBcHByb3ZlQnV0dG9uKHBlbmRpbmdUcmlwSWQpIHtcbiAgbGV0IGFwcHJvdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhcHByb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBhcHByb3ZlLWJ1dHRvbi0ke3BlbmRpbmdUcmlwSWR9YCk7XG4gIGFwcHJvdmVCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcHByb3ZlLWJ1dHRvblwiKTtcbiAgYXBwcm92ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQVBQUk9WRVwiO1xuICByZXR1cm4gYXBwcm92ZUJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVueUJ1dHRvbihwZW5kaW5nVHJpcElkKSB7XG4gIGxldCBkZW55QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVueUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZGVueS1idXR0b24tJHtwZW5kaW5nVHJpcElkfWApO1xuICBkZW55QnV0dG9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVueS1idXR0b25cIik7XG4gIGRlbnlCdXR0b24udGV4dENvbnRlbnQgPSBcIkRFTEVURSBUUklQXCI7XG4gIHJldHVybiBkZW55QnV0dG9uO1xufVxuXG5mdW5jdGlvbiBzZXREYXRhKHN0YXR1cywgcGVuZGluZ1RyaXBJZCkge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGlkOiBwZW5kaW5nVHJpcElkLFxuICAgIHN0YXR1cyxcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBbXSxcbiAgfTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGZldGNoUG9zdENhbGwoZGF0YSkge1xuICBmZXRjaChcbiAgICBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhL3RyaXBzL3VwZGF0ZVRyaXBcIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9XG4gIClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgYWxlcnQoXCJTdWNjZXNzOlwiLCBkYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGFsZXJ0KFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0QnV0dG9uT25jbGljayhwZW5kaW5nVHJpcCwgYnV0dG9uLCBzdGF0dXMpIHtcbiAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiBhcHByb3ZlT3JEZW55VHJpcCgpIHtcbiAgICBwZW5kaW5nVHJpcDtcbiAgICBsZXQgZGF0YSA9IHNldERhdGEoc3RhdHVzLCBwZW5kaW5nVHJpcC5pZCk7XG4gICAgZmV0Y2hQb3N0Q2FsbChkYXRhKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmV0Y2hBbmREZWxldGVUcmlwKGRhdGEpIHtcbiAgZmV0Y2goXG4gICAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXIvZGF0YS90cmlwcy90cmlwc1wiLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIiwgLy8gb3IgJ1BVVCdcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfVxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGFsZXJ0KFwiU3VjY2VzczpcIiwgZGF0YSk7XG4gICAgfSk7XG4gIGFsZXJ0KChlcnJvcikgPT4ge1xuICAgIGFsZXJ0KFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEJ1dHRvbk9uY2xpY2tUb0RlbGV0ZShwZW5kaW5nVHJpcCwgYnV0dG9uKSB7XG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gZGVsZXRlVHJpcCgpIHtcbiAgICBwZW5kaW5nVHJpcDtcbiAgICBsZXQgZGF0YSA9IHsgaWQ6IHBlbmRpbmdUcmlwLmlkIH07XG4gICAgZmV0Y2hBbmREZWxldGVUcmlwKGRhdGEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJCdXR0b25zRm9yVHJhdmVsZXJQYWdlKHBlbmRpbmdUcmlwKSB7XG4gIGxldCBhcHByb3ZlQnV0dG9uID0gY3JlYXRlQXBwcm92ZUJ1dHRvbihwZW5kaW5nVHJpcC5pZCk7XG4gIGxldCBkZW55QnV0dG9uID0gY3JlYXRlRGVueUJ1dHRvbihwZW5kaW5nVHJpcC5pZCk7XG4gIGFwcGVuZEFwcHJvdmVBbmREZW55QnV0dG9uKGFwcHJvdmVCdXR0b24sIGRlbnlCdXR0b24pO1xuICBzZXRCdXR0b25PbmNsaWNrKHBlbmRpbmdUcmlwLCBhcHByb3ZlQnV0dG9uLCBcImFwcHJvdmVkXCIpO1xuICBzZXRCdXR0b25PbmNsaWNrVG9EZWxldGUocGVuZGluZ1RyaXAsIGRlbnlCdXR0b24sIFwicGVuZGluZ1wiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQnV0dG9uc0ZvckFnZW50RGFzaGJvYXJkKHBlbmRpbmdUcmlwKSB7XG4gIGxldCBhcHByb3ZlQnV0dG9uID0gY3JlYXRlQXBwcm92ZUJ1dHRvbihwZW5kaW5nVHJpcC5pZCk7XG4gIGxldCBkZW55QnV0dG9uID0gY3JlYXRlRGVueUJ1dHRvbihwZW5kaW5nVHJpcC5pZCk7XG4gIGFwcGVuZEFwcHJvdmVBbmREZW55QnV0dG9uKGFwcHJvdmVCdXR0b24sIGRlbnlCdXR0b24pO1xuICBzZXRCdXR0b25PbmNsaWNrKHBlbmRpbmdUcmlwLCBhcHByb3ZlQnV0dG9uLCBcImFwcHJvdmVkXCIpO1xuICBzZXRCdXR0b25PbmNsaWNrKHBlbmRpbmdUcmlwLCBkZW55QnV0dG9uLCBcInBlbmRpbmdcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFwcHJvdmVBbmREZW55QnV0dG9ucyhwZW5kaW5nVHJpcCwgZGVzdGluYXRpb25zKSB7XG4gIGRlc3RpbmF0aW9ucztcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsZXItcGFnZVwiKSkge1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBwZW5kaW5nVHJpcC5sZW5ndGg7IGkrKykge1xuICAgICAgcmVuZGVyQnV0dG9uc0ZvclRyYXZlbGVyUGFnZShwZW5kaW5nVHJpcFtpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlbmRlckJ1dHRvbnNGb3JBZ2VudERhc2hib2FyZChwZW5kaW5nVHJpcCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhdmVsZXJzTmFtZXMocmVzdWx0KSB7XG4gIGxldCB0cmF2ZWxlcnMgPSBbXTtcbiAgbGV0IHRyYXZlbGVyc0FycmF5ID0gcmVzdWx0O1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyYXZlbGVyc0FycmF5LnRyYXZlbGVycy5sZW5ndGg7IGkrKykge1xuICAgIHRyYXZlbGVycy5wdXNoKHRyYXZlbGVyc0FycmF5LnRyYXZlbGVyc1tpXS5uYW1lKTtcbiAgfVxuICByZXR1cm4gdHJhdmVsZXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJUcmF2U2VhcmNoQmFyTGFiZWwoKSB7XG4gIGxldCB0cmF2U2VhcmNoQmFyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRyYXZTZWFyY2hCYXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0cmF2ZWxlci1saXN0XCIpO1xuICBsZXQgdHJhdlNlYXJjaEJhckxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiU2VhcmNoIGZvciBhIFRyYXZlbGVyOlwiXG4gICk7XG4gIHRyYXZTZWFyY2hCYXJMYWJlbC5hcHBlbmRDaGlsZCh0cmF2U2VhcmNoQmFyTGFiZWxUZXh0KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMl0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZ2VudC10b29sc1wiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMl0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnQtdG9vbHNcIikuYXBwZW5kQ2hpbGQodHJhdlNlYXJjaEJhckxhYmVsKTtcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXRMaXN0KCkge1xuICBsZXQgaW5wdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dExpc3Quc2V0QXR0cmlidXRlKFwibGlzdFwiLCBcInRyYXZlbGVyLWxpc3RcIik7XG4gIGlucHV0TGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRyYXZlbGVyXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50LXRvb2xzXCIpLmFwcGVuZENoaWxkKGlucHV0TGlzdCk7XG59XG5cbmZ1bmN0aW9uIHNldERhdGFMaXN0KCkge1xuICBsZXQgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGF0YWxpc3RcIik7XG4gIGRhdGFMaXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHJhdmVsZXItbGlzdFwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudC10b29sc1wiKS5hcHBlbmRDaGlsZChkYXRhTGlzdCk7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRyYXZlbGVyc05hbWVzKHJlc3VsdCkge1xuICBsZXQgdHJhdmVsZXJzID0gdHJhdmVsZXJzTmFtZXMocmVzdWx0KTtcbiAgY3JlYXRlQW5kUmVuZGVyVHJhdlNlYXJjaEJhckxhYmVsKCk7XG4gIHNldElucHV0TGlzdCgpO1xuICBzZXREYXRhTGlzdCgpO1xuICByZXR1cm4gdHJhdmVsZXJzO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmF2ZWxlclNlYXJjaEJhcigpIHtcbiAgdHJhdmVsVHJhY2tlclNlcnZpY2UuZ2V0QWxsVHJhdmVsZXJzKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgbGV0IHRyYXZlbGVycyA9IHJldHVyblRyYXZlbGVyc05hbWVzKHJlc3VsdCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZWxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke3RyYXZlbGVyc1tpXX1gKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsZXItbGlzdFwiKS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFNpbmdsZVRyYXZlbGVyQnlOYW1lKHRyYXZlbGVycykge1xuICBsZXQgYWxsVHJhdmVsZXJzID0gdHJhdmVsZXJzLnRyYXZlbGVycztcbiAgbGV0IHRyYXZlbGVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsZXJcIikudmFsdWU7XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgYWxsVHJhdmVsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyYXZlbGVyTmFtZSA9PT0gYWxsVHJhdmVsZXJzW2ldLm5hbWUpIHtcbiAgICAgIGxldCB0cmF2ZWxlciA9IGFsbFRyYXZlbGVyc1tpXTtcbiAgICAgIHJldHVybiB0cmF2ZWxlcjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TG9kZ2luZ0Nvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKSB7XG4gIGxldCBsb2RnaW5nQ29zdHMgPSB0cmF2ZWxlckRhc2hib2FyZEhlbHBlci5nZXRMb2RnaW5nQ29zdHMoXG4gICAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gICAgdHJhdmVsZXJUcmlwc1xuICApO1xuICByZXR1cm4gbG9kZ2luZ0Nvc3RzO1xufVxuXG5mdW5jdGlvbiBnZXRGbGlnaHRDb3N0cyh0cmF2ZWxlckRlc3RpbmF0aW9ucywgdHJhdmVsZXJUcmlwcykge1xuICBsZXQgZmxpZ2h0Q29zdHMgPSB0cmF2ZWxlckRhc2hib2FyZEhlbHBlci5nZXRGbGlnaHRDb3N0cyhcbiAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucyxcbiAgICB0cmF2ZWxlclRyaXBzXG4gICk7XG4gIHJldHVybiBmbGlnaHRDb3N0cztcbn1cblxuZnVuY3Rpb24gZ2V0RmxpZ2h0c1BsdXNMb2RnaW5nKHRyYXZlbGVyLCB0cmF2ZWxlclRyaXBzLCB0cmF2ZWxlckRlc3RpbmF0aW9ucykge1xuICBsZXQgbG9kZ2luZ0Nvc3RzID0gZ2V0TG9kZ2luZ0Nvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKTtcbiAgbGV0IGZsaWdodENvc3RzID0gZ2V0RmxpZ2h0Q29zdHModHJhdmVsZXJEZXN0aW5hdGlvbnMsIHRyYXZlbGVyVHJpcHMpO1xuICBsZXQgZmxpZ2h0c1BsdXNMb2RnaW5nID0gdHJhdmVsZXJEYXNoYm9hcmRIZWxwZXIuYWRkRmxpZ2h0YW5kTG9kZ2luZ0Nvc3RzKFxuICAgIGZsaWdodENvc3RzLFxuICAgIGxvZGdpbmdDb3N0c1xuICApO1xuICByZXR1cm4gZmxpZ2h0c1BsdXNMb2RnaW5nO1xufVxuXG5mdW5jdGlvbiBhZGRGZWUodHJhdmVsZXIsIHRyYXZlbGVyVHJpcHMsIHRyYXZlbGVyRGVzdGluYXRpb25zLCBkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IGZsaWdodHNQbHVzTG9kZ2luZyA9IGdldEZsaWdodHNQbHVzTG9kZ2luZyhcbiAgICB0cmF2ZWxlcixcbiAgICB0cmF2ZWxlclRyaXBzLFxuICAgIHRyYXZlbGVyRGVzdGluYXRpb25zLFxuICAgIGRlc3RpbmF0aW9uc1xuICApO1xuICBsZXQgdG90YWxCZWZvcmVGZWUgPSB0cmF2ZWxlckRhc2hib2FyZEhlbHBlci5yZWR1Y2VGbGlnaHRzUGx1c0xvZGdpbmcoXG4gICAgZmxpZ2h0c1BsdXNMb2RnaW5nXG4gICk7XG4gIHZhciB0b3RhbEFmdGVyQWdlbnRGZWUgPSB0b3RhbEJlZm9yZUZlZSAqIDEuMTtcbiAgcmV0dXJuIHRvdGFsQWZ0ZXJBZ2VudEZlZTtcbn1cblxuZnVuY3Rpb24gZ2V0VG90YWxBZnRlckFnZW50RmVlKFxuICB0cmF2ZWxlcixcbiAgdHJhdmVsZXJUcmlwcyxcbiAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gIGRlc3RpbmF0aW9uc1xuKSB7XG4gIGxldCB0b3RhbEFmdGVyQWdlbnRGZWUgPSBhZGRGZWUoXG4gICAgdHJhdmVsZXIsXG4gICAgdHJhdmVsZXJUcmlwcyxcbiAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucyxcbiAgICBkZXN0aW5hdGlvbnNcbiAgKTtcbiAgcmV0dXJuIHRvdGFsQWZ0ZXJBZ2VudEZlZTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZURhc2hib2FyZERhdGEocmVzdWx0LCB0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGxldCB0cmF2ZWxlcnMgPSByZXN1bHQ7XG4gIGxldCB0cmF2ZWxlciA9IGdldFNpbmdsZVRyYXZlbGVyQnlOYW1lKHRyYXZlbGVycyk7XG4gIGxldCB0cmF2ZWxlclRyaXBzID0gZ2V0VHJhdmVsZXJzVHJpcHModHJpcHMsIHRyYXZlbGVyKTtcbiAgbGV0IHRyYXZlbGVyRGVzdGluYXRpb25zID0gZ2V0VHJhdmVsZXJzRGVzdGluYXRpb25zKFxuICAgIHRyYXZlbGVyVHJpcHMsXG4gICAgZGVzdGluYXRpb25zXG4gICk7XG4gIGxldCB0b3RhbEFmdGVyQWdlbnRGZWUgPSBnZXRUb3RhbEFmdGVyQWdlbnRGZWUoXG4gICAgdHJhdmVsZXIsXG4gICAgdHJhdmVsZXJUcmlwcyxcbiAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucyxcbiAgICBkZXN0aW5hdGlvbnNcbiAgKTtcbiAgcmV0dXJuIHtcbiAgICB0cmF2ZWxlcixcbiAgICB0cmF2ZWxlclRyaXBzLFxuICAgIHRyYXZlbGVyRGVzdGluYXRpb25zLFxuICAgIHRvdGFsQWZ0ZXJBZ2VudEZlZSxcbiAgICBkZXN0aW5hdGlvbnMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGhpZGVTZWFyY2hGb3JtUmVuZGVySGVhZGVyQW5kVG90YWxTcGVudCh0cmF2ZWxlckluZm8pIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VudC10b29sc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwc0hlYWRlcihgJHt0cmF2ZWxlckluZm8udHJhdmVsZXIubmFtZX0nc2ApO1xuICBsZXQgdHJhdmVsZXJQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbM107XG4gIHRyYXZlbGVyUGFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRyYXZlbGVyLXBhZ2VcIik7XG4gIHRyYXZlbGVyRGFzaGJvYXJkSGVscGVyLnJlbmRlclRvdGFsU3BlbnQodHJhdmVsZXJJbmZvKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGVuZGluZ0FuZEFwcHJvdmVkVHJpcHModHJhdmVsZXJJbmZvKSB7XG4gIGxldCBwZW5kaW5nVHJpcHMgPSBbXTtcbiAgbGV0IGFwcHJvdmVkVHJpcHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZWxlckluZm8udHJhdmVsZXJUcmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmF2ZWxlckluZm8udHJhdmVsZXJUcmlwc1tpXS5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XG4gICAgICBwZW5kaW5nVHJpcHMucHVzaCh0cmF2ZWxlckluZm8udHJhdmVsZXJUcmlwc1tpXSk7XG4gICAgfSBlbHNlIGlmICh0cmF2ZWxlckluZm8udHJhdmVsZXJUcmlwc1tpXS5zdGF0dXMgPT09IFwiYXBwcm92ZWRcIikge1xuICAgICAgYXBwcm92ZWRUcmlwcy5wdXNoKHRyYXZlbGVySW5mby50cmF2ZWxlclRyaXBzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgcGVuZGluZ1RyaXBzLCBhcHByb3ZlZFRyaXBzIH07XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyYXZlbGVyUGFnZUZvckFnZW50KHRyYXZlbGVySW5mbykge1xuICBoaWRlU2VhcmNoRm9ybVJlbmRlckhlYWRlckFuZFRvdGFsU3BlbnQodHJhdmVsZXJJbmZvKTtcbiAgbGV0IHRyaXBzID0gZ2V0UGVuZGluZ0FuZEFwcHJvdmVkVHJpcHModHJhdmVsZXJJbmZvKTtcbiAgbGV0IHBlbmRpbmdUcmlwcyA9IHRyaXBzLnBlbmRpbmdUcmlwcztcbiAgbGV0IGFwcHJvdmVkVHJpcHMgPSB0cmlwcy5hcHByb3ZlZFRyaXBzO1xuICBsZXQgZGVzdGluYXRpb25zID0gdHJhdmVsZXJJbmZvLmRlc3RpbmF0aW9ucztcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBzKHBlbmRpbmdUcmlwcywgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlclRyaXBzKGFwcHJvdmVkVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gIHJlbmRlckFwcHJvdmVBbmREZW55QnV0dG9ucyhwZW5kaW5nVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNob3dUcmF2ZWxlckJ1dHRvbigpIHtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lclwiKVsyXVxuICAgIC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFnZW50LXRvb2xzXCIpO1xuICBsZXQgc2hvd1RyYXZlbGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2hvd1RyYXZlbGVyQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2hvdy10cmF2ZWxlci1idXR0b25cIik7XG4gIHNob3dUcmF2ZWxlckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU0hPVyBUUkFWRUxFUlwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50LXRvb2xzXCIpLmFwcGVuZENoaWxkKHNob3dUcmF2ZWxlckJ1dHRvbik7XG4gIHJldHVybiBzaG93VHJhdmVsZXJCdXR0b247XG59XG5cbmZ1bmN0aW9uIGdldFRyYXZlbGVyc1RyaXBzKHRyaXBzLCB0cmF2ZWxlcikge1xuICBsZXQgaTtcbiAgbGV0IHRyYXZlbGVyVHJpcHMgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8IHRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyYXZlbGVyLmlkID09PSB0cmlwc1tpXS51c2VySUQpIHtcbiAgICAgIHRyYXZlbGVyVHJpcHMucHVzaCh0cmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cmF2ZWxlclRyaXBzO1xufVxuXG5mdW5jdGlvbiBsb29wVGhyb3VnaERlc3RpbmF0aW9ucyhcbiAgZGVzdGluYXRpb25zLFxuICB0cmF2ZWxlclRyaXAsXG4gIGRlc3RpbmF0aW9uLFxuICB0cmF2ZWxlckRlc3RpbmF0aW9uc0FyclxuKSB7XG4gIGxldCBkZXN0aW5hdGlvbkluZGV4O1xuICBmb3IgKFxuICAgIGRlc3RpbmF0aW9uSW5kZXggPSAwO1xuICAgIGRlc3RpbmF0aW9uSW5kZXggPCBkZXN0aW5hdGlvbnMubGVuZ3RoO1xuICAgIGRlc3RpbmF0aW9uSW5kZXgrK1xuICApIHtcbiAgICBpZiAodHJhdmVsZXJUcmlwLmRlc3RpbmF0aW9uSUQgPT09IGRlc3RpbmF0aW9uc1tkZXN0aW5hdGlvbkluZGV4XS5pZCkge1xuICAgICAgdHJhdmVsZXJEZXN0aW5hdGlvbnNBcnIucHVzaChkZXN0aW5hdGlvbik7XG4gICAgfVxuICB9XG4gIGxldCB0cmF2ZWxlckRlc3RpbmF0aW9ucyA9IHRyYXZlbGVyRGVzdGluYXRpb25zQXJyO1xuICByZXR1cm4gdHJhdmVsZXJEZXN0aW5hdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGdldFRyYXZlbGVyc0Rlc3RpbmF0aW9ucyh0cmF2ZWxlclRyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IHRyYXZlbGVyRGVzdGluYXRpb25zQXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhdmVsZXJUcmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0cmF2ZWxlckRlc3RpbmF0aW9ucyA9IGxvb3BUaHJvdWdoRGVzdGluYXRpb25zKFxuICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgdHJhdmVsZXJUcmlwc1tpXSxcbiAgICAgIGRlc3RpbmF0aW9uc1tpXSxcbiAgICAgIHRyYXZlbGVyRGVzdGluYXRpb25zQXJyXG4gICAgKTtcbiAgICByZXR1cm4gdHJhdmVsZXJEZXN0aW5hdGlvbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0U2hvd1RyYXZlbGVyQnV0dG9uT25DbGljayhzaG93VHJhdmVsZXJCdXR0b24sIHRyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgc2hvd1RyYXZlbGVyQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiBzaG93VHJhdmVsZXJJbmZvcm1hdGlvbigpIHtcbiAgICB0cmlwcztcbiAgICBkZXN0aW5hdGlvbnM7XG4gICAgdHJhdmVsVHJhY2tlclNlcnZpY2UuZ2V0QWxsVHJhdmVsZXJzKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBsZXQgZGFzaGJvYXJkRGF0YSA9IHByZXBhcmVEYXNoYm9hcmREYXRhKHJlc3VsdCwgdHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gICAgICByZW5kZXJUcmF2ZWxlclBhZ2VGb3JBZ2VudChkYXNoYm9hcmREYXRhKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2hvd1RyYXZlbGVyQnV0dG9uKHRyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IHNob3dUcmF2ZWxlckJ1dHRvbiA9IGNyZWF0ZVNob3dUcmF2ZWxlckJ1dHRvbigpO1xuICBzZXRTaG93VHJhdmVsZXJCdXR0b25PbkNsaWNrKHNob3dUcmF2ZWxlckJ1dHRvbiwgdHJpcHMsIGRlc3RpbmF0aW9ucyk7XG59XG5cbmV4cG9ydCB7IHJlbmRlclN1Y2Nlc3NmdWxBZ2VuY3lMb2dpbiB9O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgdHJhdmVsX3RyYWNrZXJfc2VydmljZSBmcm9tIFwiLi90cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBzSGVhZGVyKHRpdGxlKSB7XG4gIGxldCB1cGNvbWluZ1RyaXBzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICB1cGNvbWluZ1RyaXBzU2VjdGlvbi5jbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xuICBsZXQgdXBjb21pbmdUcmlwc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbGV0IHVwY29taW5nVHJpcHNIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7dGl0bGV9IFRyaXBzOmApO1xuICBhcHBlbmRIZWFkZXIoXG4gICAgdXBjb21pbmdUcmlwc1NlY3Rpb24sXG4gICAgdXBjb21pbmdUcmlwc0hlYWRlcixcbiAgICB1cGNvbWluZ1RyaXBzSGVhZGVyVGV4dFxuICApO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRIZWFkZXIoXG4gIHVwY29taW5nVHJpcHNTZWN0aW9uLFxuICB1cGNvbWluZ1RyaXBzSGVhZGVyLFxuICB1cGNvbWluZ1RyaXBzSGVhZGVyVGV4dFxuKSB7XG4gIHVwY29taW5nVHJpcHNIZWFkZXIuYXBwZW5kQ2hpbGQodXBjb21pbmdUcmlwc0hlYWRlclRleHQpO1xuICB1cGNvbWluZ1RyaXBzU2VjdGlvbi5hcHBlbmRDaGlsZCh1cGNvbWluZ1RyaXBzSGVhZGVyKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJCT0RZXCIpWzBdLmFwcGVuZENoaWxkKHVwY29taW5nVHJpcHNTZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGVuZGluZ1RyaXBzKHRyaXBzKSB7XG4gIGxldCBpO1xuICBsZXQgcGVuZGluZ1RyaXBzID0gW107XG4gIGZvciAoaSA9IDA7IGkgPCB0cmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwc1tpXS5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XG4gICAgICBwZW5kaW5nVHJpcHMucHVzaCh0cmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwZW5kaW5nVHJpcHM7XG59XG5cbmZ1bmN0aW9uIGdldFRvZGF5c1RyaXBzKHRyaXBzKSB7XG4gIGxldCB0b2RheSA9IHJldHVybkN1cnJlbnREYXRlKCk7XG4gIGxldCBpO1xuICBsZXQgdG9kYXlzVHJpcHMgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8IHRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXBzW2ldLmRhdGUgPT09IHRvZGF5KSB7XG4gICAgICB0b2RheXNUcmlwcy5wdXNoKHRyaXBzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdG9kYXlzVHJpcHMgfTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuQ3VycmVudERhdGUoKSB7XG4gIHZhciBteURhdGUgPSBuZXcgRGF0ZSgpO1xuICB2YXIgbXlEYXRlU3RyaW5nO1xuICBteURhdGVTdHJpbmcgPVxuICAgIG15RGF0ZS5nZXRGdWxsWWVhcigpICtcbiAgICBcIi9cIiArXG4gICAgKFwiMFwiICsgKG15RGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArXG4gICAgXCIvXCIgK1xuICAgIChcIjBcIiArIG15RGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKTtcbiAgbGV0IHRvZGF5ID0gbXlEYXRlU3RyaW5nO1xuICByZXR1cm4gdG9kYXk7XG59XG5cbmZ1bmN0aW9uIGlzVHJhdmVsZXJQYWdlKCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmF2ZWxlci1wYWdlXCIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kVG9UcmF2ZWxlclBhZ2UocGFyYWdyYXBoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJhdmVsZXItcGFnZVwiKS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiBpc1JlcXVlc3RlZE9yVXBjb21pbmdUcmlwc1NlY3Rpb24oKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlNFQ1RJT05cIikubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kVG9SZXF1ZXN0ZWRPclVwY29taW5nVHJpcHNTZWN0aW9uKHBhcmFncmFwaCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlNFQ1RJT05cIilbMF0uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gbm9TZWN0aW9uc0hhdmVMb2FkZWQoKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlNFQ1RJT05cIikubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvQm9keShwYXJhZ3JhcGgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gaXNUb2RheXNUcmlwc1NlY3Rpb24oKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKVsxXS5pbm5lclRleHQgPT09IFwiVG9kYXkncyBUcmlwczpcIikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvVG9kYXlzVHJpcFNlY3Rpb24ocGFyYWdyYXBoKSB7XG4gIGxldCB0b2RheXNUcmlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKVsxXTtcbiAgdG9kYXlzVHJpcHNTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kYXlzLXRyaXBzXCIpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5cy10cmlwc1wiKS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiBpc1Bhc3RUcmlwc1NlY3Rpb24oKSB7XG4gIGlmIChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VjdGlvblwiKVsxXS5pbm5lclRleHQuaW5jbHVkZXMoXCJQYXN0IFRyaXBzXCIpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvUGFzdFRyaXBzU2VjdGlvbihwYXJhZ3JhcGgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMV0uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG9TZWN0aW9uKHBhcmFncmFwaCkge1xuICBpZiAoaXNUcmF2ZWxlclBhZ2UoKSkge1xuICAgIGFwcGVuZFRvVHJhdmVsZXJQYWdlKHBhcmFncmFwaCk7XG4gIH0gZWxzZSBpZiAoaXNSZXF1ZXN0ZWRPclVwY29taW5nVHJpcHNTZWN0aW9uKCkpIHtcbiAgICBhcHBlbmRUb1JlcXVlc3RlZE9yVXBjb21pbmdUcmlwc1NlY3Rpb24ocGFyYWdyYXBoKTtcbiAgfSBlbHNlIGlmIChub1NlY3Rpb25zSGF2ZUxvYWRlZCgpKSB7XG4gICAgYXBwZW5kVG9Cb2R5KHBhcmFncmFwaCk7XG4gIH0gZWxzZSBpZiAoaXNUb2RheXNUcmlwc1NlY3Rpb24oKSkge1xuICAgIGFwcGVuZFRvVG9kYXlzVHJpcFNlY3Rpb24ocGFyYWdyYXBoKTtcbiAgfSBlbHNlIGlmIChpc1Bhc3RUcmlwc1NlY3Rpb24oKSkge1xuICAgIGFwcGVuZFRvUGFzdFRyaXBzU2VjdGlvbihwYXJhZ3JhcGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBEYXRlKHRyaXApIHtcbiAgbGV0IHRyaXBEYXRlID0gdHJpcC5kYXRlO1xuICBsZXQgdHJpcERhdGVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xuICB0cmlwRGF0ZVBhcmFncmFwaC5jbGFzc05hbWUgPSBcInRyaXAtZGF0ZVwiO1xuICBsZXQgdHJpcERhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFRyaXAgRGF0ZTogJHt0cmlwRGF0ZX0gYCk7XG4gIHRyaXBEYXRlUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRyaXBEYXRlVGV4dCk7XG4gIGFwcGVuZFRvU2VjdGlvbih0cmlwRGF0ZVBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZERlc3RpbmF0aW9uKHRyaXBEZXN0aW5hdGlvblBhcmFncmFwaCwgdHJpcERlc3RpbmF0aW9uVGV4dCkge1xuICB0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodHJpcERlc3RpbmF0aW9uVGV4dCk7XG4gIGFwcGVuZFRvU2VjdGlvbih0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUcmlwRGVzdGluYXRpb24odHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoLCB0cmlwRGVzdGluYXRpb25UZXh0KSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5cy10cmlwc1wiKSkge1xuICAgIHRyaXBEZXN0aW5hdGlvblBhcmFncmFwaC5hcHBlbmRDaGlsZCh0cmlwRGVzdGluYXRpb25UZXh0KTtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwidG9kYXlzLXRyaXBzXCIpXG4gICAgICAuYXBwZW5kQ2hpbGQodHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoKTtcbiAgfVxuICBhcHBlbmREZXN0aW5hdGlvbih0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGgsIHRyaXBEZXN0aW5hdGlvblRleHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRBcHBlbmRUcmlwRGVzdGluYXRpb24odHJpcERlc3RpbmF0aW9uKSB7XG4gIGxldCB0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xuICB0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJ0cmlwLWRlc3RpbmF0aW9uXCI7XG4gIGxldCB0cmlwRGVzdGluYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYFRyaXAgRGVzdGluYXRpb246ICR7dHJpcERlc3RpbmF0aW9ufWBcbiAgKTtcbiAgYXBwZW5kVHJpcERlc3RpbmF0aW9uKHRyaXBEZXN0aW5hdGlvblBhcmFncmFwaCwgdHJpcERlc3RpbmF0aW9uVGV4dCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBEZXN0aW5hdGlvbih0cmlwLCBkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCBkZXN0aW5hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbnNbaV0uaWQpIHtcbiAgICAgIGxldCB0cmlwRGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbnNbaV0uZGVzdGluYXRpb247XG4gICAgICBjcmVhdGVBbmRBcHBlbmRUcmlwRGVzdGluYXRpb24odHJpcERlc3RpbmF0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kKHRyaXBTdGF0dXNQYXJhZ3JhcGgpIHtcbiAgaWYgKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpLmxlbmd0aCA9PT0gMiAmJlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzFdLmlubmVyVGV4dC5pbmNsdWRlcyhcIlRvZGF5J3MgVHJpcHNcIilcbiAgKSB7XG4gICAgbGV0IHRvZGF5c1RyaXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzFdO1xuICAgIHRvZGF5c1RyaXBzU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZGF5cy10cmlwc1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5cy10cmlwc1wiKS5hcHBlbmRDaGlsZCh0cmlwU3RhdHVzUGFyYWdyYXBoKTtcbiAgfSBlbHNlIHtcbiAgICBhcHBlbmRUb1NlY3Rpb24odHJpcFN0YXR1c1BhcmFncmFwaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcFN0YXR1cyh0cmlwKSB7XG4gIGxldCB0cmlwU3RhdHVzID0gdHJpcC5zdGF0dXM7XG4gIGxldCB0cmlwU3RhdHVzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdHJpcFN0YXR1c1BhcmFncmFwaC5jbGFzc05hbWUgPSBcInRyaXAtc3RhdHVzXCI7XG4gIGxldCB0cmlwU3RhdHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUcmlwIFN0YXR1czogJHt0cmlwU3RhdHVzfWApO1xuICB0cmlwU3RhdHVzUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRyaXBTdGF0dXNUZXh0KTtcbiAgYXBwZW5kKHRyaXBTdGF0dXNQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwRHVyYXRpb24odHJpcCkge1xuICBsZXQgdHJpcER1cmF0aW9uID0gdHJpcC5kdXJhdGlvbjtcbiAgbGV0IHRyaXBEdXJhdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIHRyaXBEdXJhdGlvblBhcmFncmFwaC5jbGFzc05hbWUgPSBcInRyaXAtZHVyYXRpb25cIjtcbiAgbGV0IHRyaXBEdXJhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBgVHJpcCBEdXJhdGlvbjogJHt0cmlwRHVyYXRpb259IGRheXNgXG4gICk7XG4gIHRyaXBEdXJhdGlvblBhcmFncmFwaC5hcHBlbmRDaGlsZCh0cmlwRHVyYXRpb25UZXh0KTtcbiAgYXBwZW5kKHRyaXBEdXJhdGlvblBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlc3RpbmF0aW9uSW1hZ2UodHJpcCwgZGVzdGluYXRpb25zKSB7XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb25zW2ldLmlkKSB7XG4gICAgICBsZXQgZGVzdGluYXRpb25JbWFnZSA9IGRlc3RpbmF0aW9uc1tpXS5pbWFnZTtcbiAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiZGVzdGluYXRpb24taW1hZ2VcIjtcbiAgICAgIGltZy5zcmMgPSBgJHtkZXN0aW5hdGlvbkltYWdlfWA7XG4gICAgICBhcHBlbmRUb1NlY3Rpb24oaW1nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcHModHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVuZGVyRGVzdGluYXRpb25JbWFnZSh0cmlwc1tpXSwgZGVzdGluYXRpb25zKTtcbiAgICByZW5kZXJUcmlwRGF0ZSh0cmlwc1tpXSk7XG4gICAgcmVuZGVyVHJpcERlc3RpbmF0aW9uKHRyaXBzW2ldLCBkZXN0aW5hdGlvbnMpO1xuICAgIHJlbmRlclRyaXBTdGF0dXModHJpcHNbaV0pO1xuICAgIHJlbmRlclRyaXBEdXJhdGlvbih0cmlwc1tpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0dXJuVHJhdkRhdGUoc21hbGxEYXRlKSB7XG4gIGxldCB0cmF2RGF0ZSA9XG4gICAgc21hbGxEYXRlLmdldEZ1bGxZZWFyKCkgK1xuICAgIFwiL1wiICtcbiAgICAoXCIwXCIgKyAoc21hbGxEYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICtcbiAgICBcIi9cIiArXG4gICAgKFwiMFwiICsgc21hbGxEYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICByZXR1cm4gdHJhdkRhdGU7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclBhc3RBbmRVcGNvbWluZ1RyaXBzKHRyYXZlbGVyVHJpcHMpIHtcbiAgbGV0IHVwY29taW5nVHJpcHNBcnIgPSBbXTtcbiAgbGV0IHBhc3RUcmlwc0FyciA9IFtdO1xuICBsZXQgdG9kYXkgPSByZXR1cm5DdXJyZW50RGF0ZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXZlbGVyVHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgc21hbGxEYXRlID0gbmV3IERhdGUodHJhdmVsZXJUcmlwc1tpXS5kYXRlKTtcbiAgICBsZXQgdHJhdkRhdGUgPSByZXR1cm5UcmF2RGF0ZShzbWFsbERhdGUpO1xuICAgIGlmICh0b2RheSA8IHRyYXZEYXRlKSB7XG4gICAgICB1cGNvbWluZ1RyaXBzQXJyLnB1c2godHJhdmVsZXJUcmlwc1tpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3RUcmlwc0Fyci5wdXNoKHRyYXZlbGVyVHJpcHNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBwYXN0VHJpcHNBcnIsIHVwY29taW5nVHJpcHNBcnIgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnQoZm9ybWF0dGVkRW5kRGF0ZSkge1xuICBsZXQgc3RhcnQgPSBEYXRlLlVUQyhcbiAgICBmb3JtYXR0ZWRFbmREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgZm9ybWF0dGVkRW5kRGF0ZS5nZXRNb250aCgpLFxuICAgIGZvcm1hdHRlZEVuZERhdGUuZ2V0RGF0ZSgpXG4gICk7XG4gIHJldHVybiBzdGFydDtcbn1cblxuZnVuY3Rpb24gZ2V0RW5kKGZvcm1hdHRlZFN0YXJ0RGF0ZSkge1xuICBsZXQgZW5kID0gRGF0ZS5VVEMoXG4gICAgZm9ybWF0dGVkU3RhcnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgZm9ybWF0dGVkU3RhcnREYXRlLmdldE1vbnRoKCksXG4gICAgZm9ybWF0dGVkU3RhcnREYXRlLmdldERhdGUoKVxuICApO1xuICByZXR1cm4gZW5kO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRTdGFydERhdGUodHJpcFJlcXVlc3RTdGFydERhdGUpIHtcbiAgbGV0IGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXBSZXF1ZXN0U3RhcnREYXRlKTtcbiAgZm9ybWF0dGVkU3RhcnREYXRlID0gbmV3IERhdGUoXG4gICAgZm9ybWF0dGVkU3RhcnREYXRlLmdldFRpbWUoKSArXG4gICAgZm9ybWF0dGVkU3RhcnREYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMFxuICApO1xuICByZXR1cm4gZm9ybWF0dGVkU3RhcnREYXRlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRFbmREYXRlKHRyaXBSZXF1ZXN0RW5kRGF0ZSkge1xuICBsZXQgZm9ybWF0dGVkRW5kRGF0ZSA9IG5ldyBEYXRlKHRyaXBSZXF1ZXN0RW5kRGF0ZSk7XG4gIGZvcm1hdHRlZEVuZERhdGUgPSBuZXcgRGF0ZShcbiAgICBmb3JtYXR0ZWRFbmREYXRlLmdldFRpbWUoKSArIGZvcm1hdHRlZEVuZERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwXG4gICk7XG4gIHJldHVybiBmb3JtYXR0ZWRFbmREYXRlO1xufVxuXG5mdW5jdGlvbiBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcbiAgbGV0IGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IGZvcm1hdFN0YXJ0RGF0ZShzdGFydERhdGUpO1xuICBsZXQgZm9ybWF0dGVkRW5kRGF0ZSA9IGZvcm1hdEVuZERhdGUoZW5kRGF0ZSk7XG4gIGNvbnN0IG9uZURheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XG4gIGxldCBzdGFydCA9IGdldFN0YXJ0KGZvcm1hdHRlZEVuZERhdGUpO1xuICBsZXQgZW5kID0gZ2V0RW5kKGZvcm1hdHRlZFN0YXJ0RGF0ZSk7XG4gIGxldCBkYXlzQmV0d2VlbiA9IChzdGFydCAtIGVuZCkgLyBvbmVEYXk7XG4gIHJldHVybiBkYXlzQmV0d2Vlbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcENvc3QoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpIHtcbiAgbGV0IGNvc3RzID0gY2FsY3VsYXRlVHJpcFJlcXVlc3RDb3N0cyhkZXN0aW5hdGlvbiwgdHJpcFJlcXVlc3REYXRhLCBhbGxUcmlwcyk7XG4gIGxldCB0b3RhbENvc3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYFRvdGFsIEVzdGltYXRlZCBUcmlwIENvc3Q6ICQke2Nvc3RzLnRvdGFsVHJpcENvc3QudG9GaXhlZCgyKX1gXG4gICk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdGVkLXRyaXBzXCIpLmFwcGVuZENoaWxkKHRvdGFsQ29zdE5vZGUpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNGcm9tSW5wdXRzKCkge1xuICBsZXQgdHJpcFJlcXVlc3REZXN0aW5hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdGluYXRpb25cIikudmFsdWU7XG4gIGxldCB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIikudmFsdWU7XG4gIGxldCB0cmlwUmVxdWVzdEVuZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZFwiKS52YWx1ZTtcbiAgbGV0IG51bWJlck9mVHJhdmVsZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXItb2YtdHJhdnNcIikudmFsdWU7XG4gIGxldCB2YWx1ZXMgPSB7XG4gICAgdHJpcFJlcXVlc3REZXN0aW5hdGlvbixcbiAgICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gICAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gIH07XG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFuZFJldHVybkNvc3RzKFxuICBudW1iZXJPZlRyYXZlbGVycyxcbiAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gIHRyaXBSZXF1ZXN0RW5kRGF0ZSxcbiAgZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbixcbiAgZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXlcbikge1xuICBsZXQgZmxpZ2h0Q29zdHMgPSBudW1iZXJPZlRyYXZlbGVycyAqIGVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gIGxldCBsb2RnaW5nQ29zdHNQZXJEYXkgPSBudW1iZXJPZlRyYXZlbGVycyAqIGVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5O1xuICBsZXQgdG90YWxMb2RnaW5nQ29zdHMgPVxuICAgIGxvZGdpbmdDb3N0c1BlckRheSAqIGRheXNCZXR3ZWVuKHRyaXBSZXF1ZXN0U3RhcnREYXRlLCB0cmlwUmVxdWVzdEVuZERhdGUpO1xuICBsZXQgY29zdEJlZm9yZUFnZW50RmVlID0gZmxpZ2h0Q29zdHMgKyB0b3RhbExvZGdpbmdDb3N0cztcbiAgbGV0IGFnZW50RmVlID0gY29zdEJlZm9yZUFnZW50RmVlICogMC4xO1xuICBsZXQgdG90YWxUcmlwQ29zdCA9IGNvc3RCZWZvcmVBZ2VudEZlZSArIGFnZW50RmVlO1xuICBsZXQgY29zdHMgPSB7XG4gICAgZmxpZ2h0Q29zdHMsXG4gICAgbG9kZ2luZ0Nvc3RzUGVyRGF5LFxuICAgIHRvdGFsTG9kZ2luZ0Nvc3RzLFxuICAgIGNvc3RCZWZvcmVBZ2VudEZlZSxcbiAgICBhZ2VudEZlZSxcbiAgICB0b3RhbFRyaXBDb3N0LFxuICB9O1xuICByZXR1cm4gY29zdHM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVRyaXBSZXF1ZXN0Q29zdHMoZGVzdGluYXRpb24pIHtcbiAgbGV0IHZhbHVlcyA9IGdldFZhbHVlc0Zyb21JbnB1dHMoKTtcbiAgbGV0IG51bWJlck9mVHJhdmVsZXJzID0gdmFsdWVzLm51bWJlck9mVHJhdmVsZXJzO1xuICBsZXQgdHJpcFJlcXVlc3RTdGFydERhdGUgPSB2YWx1ZXMudHJpcFJlcXVlc3RTdGFydERhdGU7XG4gIGxldCB0cmlwUmVxdWVzdEVuZERhdGUgPSB2YWx1ZXMudHJpcFJlcXVlc3RFbmREYXRlO1xuICBsZXQgZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gIGxldCBlc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5O1xuICBsZXQgY29zdHMgPSBjYWxjdWxhdGVBbmRSZXR1cm5Db3N0cyhcbiAgICBudW1iZXJPZlRyYXZlbGVycyxcbiAgICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gICAgZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbixcbiAgICBlc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheVxuICApO1xuICByZXR1cm4gY29zdHM7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvUmVxdWVzdEZvcm0oZWxlbWVudCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3QtZm9ybVwiKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVyTGFiZWwoYXR0cmlidXRlLCB0ZXh0KSB7XG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGF0dHJpYnV0ZSk7XG4gIGxldCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgc2V0SWRBbmRDbGFzc29mUmVxdWVzdEZvcm0oKTtcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybShsYWJlbCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlclN0YXJ0RGF0ZUlucHV0KHRvZGF5KSB7XG4gIGxldCBzdGFydERhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3RhcnREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIHN0YXJ0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnRcIik7XG4gIHN0YXJ0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0cmlwLXN0YXJ0XCIpO1xuICBzdGFydERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHt0b2RheX1gKTtcbiAgc3RhcnREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIGAke3RvZGF5fWApO1xuICBzdGFydERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIyMDIxLTEyLTMxXCIpO1xuICBhcHBlbmRUb1JlcXVlc3RGb3JtKHN0YXJ0RGF0ZUlucHV0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVyVHJpcEVuZExhYmVsKCkge1xuICBsZXQgdHJpcEVuZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0cmlwRW5kTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidHJpcC1lbmRcIik7XG4gIGFwcGVuZFRvUmVxdWVzdEZvcm0odHJpcEVuZExhYmVsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVyRW5kRGF0ZUlucHV0KHRvZGF5KSB7XG4gIGxldCBlbmREYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVuZERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZW5kRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW5kXCIpO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRyaXAtZW5kXCIpO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7dG9kYXl9YCk7XG4gIGVuZERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgYCR7dG9kYXl9YCk7XG4gIGVuZERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIyMDIzLTEyLTMxXCIpO1xuICBhcHBlbmRUb1JlcXVlc3RGb3JtKGVuZERhdGVJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRhdGVTZWxlY3RJbnB1dHMoKSB7XG4gIGNyZWF0ZUFuZFJlbmRlckxhYmVsKFwidHJpcC1kdXJhdGlvblwiLCBcIlBsZWFzZSBzZWxlY3QgYSBzdGFydCBhbmQgZW5kIGRhdGU6XCIpO1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICBjcmVhdGVBbmRSZW5kZXJTdGFydERhdGVJbnB1dCh0b2RheSk7XG4gIGNyZWF0ZUFuZFJlbmRlclRyaXBFbmRMYWJlbCgpO1xuICBjcmVhdGVBbmRSZW5kZXJFbmREYXRlSW5wdXQodG9kYXkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJJbnB1dExpc3QobGlzdEF0dHJpYnV0ZSwgaWQsIHBsYWNlSG9sZGVyKSB7XG4gIGxldCBpbnB1dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0TGlzdC5zZXRBdHRyaWJ1dGUoXCJsaXN0XCIsIGxpc3RBdHRyaWJ1dGUpO1xuICBpbnB1dExpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBpbnB1dExpc3Quc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2VIb2xkZXIpO1xuICBhcHBlbmRUb1JlcXVlc3RGb3JtKGlucHV0TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlckRhdGFMaXN0KGlkKSB7XG4gIGxldCBkYXRhTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKTtcbiAgZGF0YUxpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBhcHBlbmRUb1JlcXVlc3RGb3JtKGRhdGFMaXN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uQW5kUmVuZGVyVG9OdW1iZXJPZlRyYXZlbGVyc0lucHV0KCkge1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAyMDsgaSsrKSB7XG4gICAgbGV0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbnVtYmVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke2l9YCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXItb2YtdHJhdmVsZXJzXCIpLmFwcGVuZENoaWxkKG51bWJlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTnVtYmVyT2ZUcmF2ZWxlcnNJbnB1dCgpIHtcbiAgY3JlYXRlQW5kUmVuZGVyTGFiZWwoXCJudW1iZXItb2YtdHJhdmVsZXJzXCIsIFwiTnVtYmVyIG9mIFRyYXZlbGVyczpcIik7XG4gIGNyZWF0ZUFuZFJlbmRlcklucHV0TGlzdChcbiAgICBcIm51bWJlci1vZi10cmF2ZWxlcnNcIixcbiAgICBcIm51bWJlci1vZi10cmF2c1wiLFxuICAgIFwiU2VsZWN0IG51bWJlciBvZiB0cmF2ZWxlcnNcIlxuICApO1xuICBjcmVhdGVBbmRSZW5kZXJEYXRhTGlzdChcIm51bWJlci1vZi10cmF2ZWxlcnNcIik7XG4gIGNyZWF0ZU9wdGlvbkFuZFJlbmRlclRvTnVtYmVyT2ZUcmF2ZWxlcnNJbnB1dCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25BbmRSZW5kZXJUb0RhdGFMaXN0KGxlbmd0aCwgZGVzdGluYXRpb25zLCBpZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke2Rlc3RpbmF0aW9uc1tpXS5kZXN0aW5hdGlvbn1gKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJMYWJlbEFuZElucHV0TGlzdCgpIHtcbiAgY3JlYXRlQW5kUmVuZGVyTGFiZWwoXCJkZXN0aW5hdGlvbi1jaG9pY2VcIiwgXCJTZWFyY2ggZm9yIGEgRGVzdGluYXRpb246XCIpO1xuICBjcmVhdGVBbmRSZW5kZXJJbnB1dExpc3QoXG4gICAgXCJkZXN0aW5hdGlvbi1jaG9pY2VcIixcbiAgICBcImRlc3RpbmF0aW9uXCIsXG4gICAgXCJTZWFyY2ggZm9yIGEgZGVzdGluYXRpb25cIlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJGdWxsRGVzdGluYXRpb25MaXN0KGRlc3RpbmF0aW9ucykge1xuICBjcmVhdGVBbmRSZW5kZXJEYXRhTGlzdChcImRlc3RpbmF0aW9uLWNob2ljZVwiKTtcbiAgY3JlYXRlT3B0aW9uQW5kUmVuZGVyVG9EYXRhTGlzdChcbiAgICBkZXN0aW5hdGlvbnMubGVuZ3RoLFxuICAgIGRlc3RpbmF0aW9ucyxcbiAgICBcImRlc3RpbmF0aW9uLWNob2ljZVwiXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlc3RpbmF0aW9uU2VhcmNoQmFyKGFsbFRyaXBzLCBkZXN0aW5hdGlvbnNBcnIpIHtcbiAgbGV0IGRlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uc0FycjtcbiAgY3JlYXRlQW5kUmVuZGVyTGFiZWxBbmRJbnB1dExpc3QoKTtcbiAgcmVuZGVyRnVsbERlc3RpbmF0aW9uTGlzdChkZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPbkNsaWNrRnVuY3Rpb25BbmRSZW5kZXJUcmlwKGRlc3RpbmF0aW9uc0FyciwgYWxsVHJpcHMpIHtcbiAgbGV0IHRyaXBSZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmlwLXJlcXVlc3QtYnV0dG9uXCIpO1xuICB0cmlwUmVxdWVzdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gY2FsY3VsYXRlVHJpcFJlcXVlc3QoKSB7XG4gICAgbGV0IHRyaXBSZXF1ZXN0RGF0YSA9IHByZXBhcmVUcmlwUmVxdWVzdERhdGEoZGVzdGluYXRpb25zQXJyKTtcbiAgICByZW5kZXJUcmlwUmVxdWVzdCh0cmlwUmVxdWVzdERhdGEsIGRlc3RpbmF0aW9uc0FyciwgYWxsVHJpcHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRJZEFuZENsYXNzb2ZSZXF1ZXN0Rm9ybSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMl0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXF1ZXN0LWZvcm1cIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzJdLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGFpbmVyXCIpO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVHJpcFJlcXVlc3REYXRhKGRlc3RpbmF0aW9ucykge1xuICBsZXQgdmFsdWVzID0gZ2V0VmFsdWVzRnJvbUlucHV0cygpO1xuICBsZXQgdHJpcFJlcXVlc3REZXN0aW5hdGlvbiA9IHZhbHVlcy50cmlwUmVxdWVzdERlc3RpbmF0aW9uO1xuICBsZXQgbnVtYmVyT2ZUcmF2ZWxlcnMgPSB2YWx1ZXMubnVtYmVyT2ZUcmF2ZWxlcnM7XG4gIGxldCB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSA9IHZhbHVlcy50cmlwUmVxdWVzdFN0YXJ0RGF0ZTtcbiAgbGV0IHRyaXBSZXF1ZXN0RW5kRGF0ZSA9IHZhbHVlcy50cmlwUmVxdWVzdEVuZERhdGU7XG4gIGxldCB0cmlwUmVxdWVzdERhdGEgPSByZXR1cm5UcmlwUmVxdWVzdERhdGEoXG4gICAgZGVzdGluYXRpb25zLFxuICAgIHRyaXBSZXF1ZXN0RGVzdGluYXRpb24sXG4gICAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gICAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gICAgdHJpcFJlcXVlc3RFbmREYXRlXG4gICk7XG4gIHJldHVybiB0cmlwUmVxdWVzdERhdGE7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBSZXF1ZXN0KHRyaXBSZXF1ZXN0RGF0YSwgZGVzdGluYXRpb25zQXJyLCBhbGxUcmlwcykge1xuICBsZXQgdmFsdWVzID0gc2V0VmFsdWVzRm9yVHJpcFJlcXVlc3QoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0aW5hdGlvbnNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsdWVzLnRyaXBSZXF1ZXN0RGVzdGluYXRpb24gPT09IGRlc3RpbmF0aW9uc0FycltpXS5kZXN0aW5hdGlvbikge1xuICAgICAgaGlkZVJlcXVlc3RGb3JtQW5kU2hvd1lvdXJUcmlwc0hlYWRlcigpO1xuICAgICAgcmVuZGVyVHJpcFJlcXVlc3REYXRhKFxuICAgICAgICBkZXN0aW5hdGlvbnNBcnJbaV0sXG4gICAgICAgIHRyaXBSZXF1ZXN0RGF0YSxcbiAgICAgICAgdmFsdWVzLnRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICAgICAgICB2YWx1ZXMudHJpcFJlcXVlc3RFbmREYXRlLFxuICAgICAgICBhbGxUcmlwc1xuICAgICAgKTtcbiAgICAgIGNyZWF0ZUFuZFJlbmRlckNvbmZpcm1UcmlwQnV0dG9uKFxuICAgICAgICBkZXN0aW5hdGlvbnNBcnJbaV0sXG4gICAgICAgIHRyaXBSZXF1ZXN0RGF0YSxcbiAgICAgICAgYWxsVHJpcHNcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJldHVyblRyaXBSZXF1ZXN0RGF0YShcbiAgZGVzdGluYXRpb25zLFxuICB0cmlwUmVxdWVzdERlc3RpbmF0aW9uLFxuICBudW1iZXJPZlRyYXZlbGVycyxcbiAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gIHRyaXBSZXF1ZXN0RW5kRGF0ZVxuKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXBSZXF1ZXN0RGVzdGluYXRpb24gPT09IGRlc3RpbmF0aW9uc1tpXS5kZXN0aW5hdGlvbikge1xuICAgICAgbGV0IGRlc3RpbmF0aW9uSWRlbnRpZmllciA9IGRlc3RpbmF0aW9uc1tpXS5pZDtcbiAgICAgIGxldCB0cmlwUmVxdWVzdERhdGEgPSB7XG4gICAgICAgIGRlc3RpbmF0aW9uSWRlbnRpZmllcixcbiAgICAgICAgdHJpcFJlcXVlc3REZXN0aW5hdGlvbixcbiAgICAgICAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gICAgICAgIHRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICAgICAgICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRyaXBSZXF1ZXN0RGF0YTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVzRm9yVHJpcFJlcXVlc3QoKSB7XG4gIGxldCB2YWx1ZXNCZWZvcmUgPSBnZXRWYWx1ZXNGcm9tSW5wdXRzKCk7XG4gIGxldCB0cmlwUmVxdWVzdERlc3RpbmF0aW9uID0gdmFsdWVzQmVmb3JlLnRyaXBSZXF1ZXN0RGVzdGluYXRpb247XG4gIGxldCB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSA9IHZhbHVlc0JlZm9yZS50cmlwUmVxdWVzdFN0YXJ0RGF0ZTtcbiAgbGV0IHRyaXBSZXF1ZXN0RW5kRGF0ZSA9IHZhbHVlc0JlZm9yZS50cmlwUmVxdWVzdEVuZERhdGU7XG4gIGxldCB2YWx1ZXMgPSB7XG4gICAgdHJpcFJlcXVlc3REZXN0aW5hdGlvbixcbiAgICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gIH07XG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcmNvbmZpcm1UcmlwQnV0dG9uKCkge1xuICBsZXQgY29uZmlybVRyaXBSZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybVRyaXBSZXF1ZXN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uZmlybS10cmlwLXJlcXVlc3QtYnV0dG9uXCIpO1xuICBjb25maXJtVHJpcFJlcXVlc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNPTkZJUk0gVFJJUFwiO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKVxuICAgIC5hcHBlbmRDaGlsZChjb25maXJtVHJpcFJlcXVlc3RCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJQYXJhZ3JhcGhBbmROb2RlKHN0YXJ0T3JFbmQsIGRhdGUpIHtcbiAgbGV0IGRhdGVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xuICBsZXQgZGF0ZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBgVHJpcCAke3N0YXJ0T3JFbmR9IERhdGU6ICR7ZGF0ZS50b0RhdGVTdHJpbmcoKX1gXG4gICk7XG4gIGRhdGVQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGF0ZU5vZGUpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKS5hcHBlbmRDaGlsZChkYXRlUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGF0ZUVsZW1lbnRzKGZvcm1hdHRlZFN0YXJ0RGF0ZSwgZm9ybWF0dGVkRW5kRGF0ZSkge1xuICBjcmVhdGVBbmRSZW5kZXJQYXJhZ3JhcGhBbmROb2RlKFwic3RhcnRcIiwgZm9ybWF0dGVkU3RhcnREYXRlKTtcbiAgY3JlYXRlQW5kUmVuZGVyUGFyYWdyYXBoQW5kTm9kZShcImVuZFwiLCBmb3JtYXR0ZWRFbmREYXRlKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcFJlcXVlc3REZXN0aW5hdGlvbkltYWdlKGRlc3RpbmF0aW9uKSB7XG4gIGxldCBkZXN0aW5hdGlvbkltYWdlID0gZGVzdGluYXRpb24uaW1hZ2U7XG4gIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuY2xhc3NOYW1lID0gXCJkZXN0aW5hdGlvbi1pbWFnZVwiO1xuICBpbWcuc3JjID0gYCR7ZGVzdGluYXRpb25JbWFnZX1gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKS5hcHBlbmRDaGlsZChpbWcpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwUmVxdWVzdERhdGEoXG4gIGRlc3RpbmF0aW9uLFxuICB0cmlwUmVxdWVzdERhdGEsXG4gIHRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gIGFsbFRyaXBzXG4pIHtcbiAgcmVuZGVyVHJpcFJlcXVlc3REZXN0aW5hdGlvbkltYWdlKGRlc3RpbmF0aW9uKTtcbiAgcmVuZGVyRGVzdGluYXRpb25OYW1lKGRlc3RpbmF0aW9uKTtcbiAgcmVuZGVyTnVtYmVyT2ZUcmF2ZWxlcnModHJpcFJlcXVlc3REYXRhKTtcbiAgcmVuZGVyU3RhcnRhbmRFbmREYXRlKHRyaXBSZXF1ZXN0U3RhcnREYXRlLCB0cmlwUmVxdWVzdEVuZERhdGUpO1xuICByZW5kZXJUcmlwQ29zdChkZXN0aW5hdGlvbiwgdHJpcFJlcXVlc3REYXRhLCBhbGxUcmlwcyk7XG4gIHJlbmRlcmNvbmZpcm1UcmlwQnV0dG9uKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN0YXJ0YW5kRW5kRGF0ZSh0cmlwUmVxdWVzdFN0YXJ0RGF0ZSwgdHJpcFJlcXVlc3RFbmREYXRlKSB7XG4gIGxldCBmb3JtYXR0ZWRTdGFydERhdGUgPSBmb3JtYXRTdGFydERhdGUodHJpcFJlcXVlc3RTdGFydERhdGUpO1xuICBsZXQgZm9ybWF0dGVkRW5kRGF0ZSA9IGZvcm1hdEVuZERhdGUodHJpcFJlcXVlc3RFbmREYXRlKTtcbiAgY3JlYXRlRGF0ZUVsZW1lbnRzKGZvcm1hdHRlZFN0YXJ0RGF0ZSwgZm9ybWF0dGVkRW5kRGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVSZXF1ZXN0Rm9ybUFuZFNob3dZb3VyVHJpcHNIZWFkZXIoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdC1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgcmVuZGVyVHJpcHNIZWFkZXIoXCJZb3VyIFJlcXVlc3RlZFwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbM10uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXF1ZXN0ZWQtdHJpcHNcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlckNvbmZpcm1UcmlwQnV0dG9uKFxuICBkZXN0aW5hdGlvbixcbiAgdHJpcFJlcXVlc3REYXRhLFxuICBhbGxUcmlwc1xuKSB7XG4gIGxldCBjb25maXJtVHJpcFJlcXVlc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImNvbmZpcm0tdHJpcC1yZXF1ZXN0LWJ1dHRvblwiXG4gICk7XG4gIGNvbmZpcm1UcmlwUmVxdWVzdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gY29uZmlybVRyaXBSZXF1ZXN0KCkge1xuICAgIGNvbmZpcm1BbmRQb3N0VHJpcChkZXN0aW5hdGlvbiwgdHJpcFJlcXVlc3REYXRhLCBhbGxUcmlwcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlc3RpbmF0aW9uTmFtZShkZXN0aW5hdGlvbikge1xuICBsZXQgZGVzdGluYXRpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYFRyaXAgRGVzdGluYXRpb246ICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259YFxuICApO1xuICBsZXQgZGVzdGluYXRpb25OYW1lUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgZGVzdGluYXRpb25OYW1lUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3RpbmF0aW9uTmFtZSk7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdGVkLXRyaXBzXCIpXG4gICAgLmFwcGVuZENoaWxkKGRlc3RpbmF0aW9uTmFtZVBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck51bWJlck9mVHJhdmVsZXJzKCkge1xuICBsZXQgdmFsdWVzID0gZ2V0VmFsdWVzRnJvbUlucHV0cygpO1xuICBsZXQgbnVtT2ZUcmF2ZWxlcnNOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYE51bWJlciBvZiBUcmF2ZWxlcnM6ICR7dmFsdWVzLm51bWJlck9mVHJhdmVsZXJzfWBcbiAgKTtcbiAgbGV0IG51bU9mVHJhdmVsZXJzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgbnVtT2ZUcmF2ZWxlcnNQYXJhZ3JhcGguYXBwZW5kQ2hpbGQobnVtT2ZUcmF2ZWxlcnNOb2RlKTtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0ZWQtdHJpcHNcIilcbiAgICAuYXBwZW5kQ2hpbGQobnVtT2ZUcmF2ZWxlcnNQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiBkYXRhVG9Kc29uKFxuICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICB1c2VySWQsXG4gIHRyaXBSZXF1ZXN0SWQsXG4gIHRyaXBSZXF1ZXN0RGF0YVxuKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgaWQ6IHBhcnNlRmxvYXQodHJpcFJlcXVlc3RJZCksXG4gICAgdXNlcklEOiB1c2VySWQsXG4gICAgZGVzdGluYXRpb25JRDogdHJpcFJlcXVlc3REYXRhLmRlc3RpbmF0aW9uSWRlbnRpZmllcixcbiAgICB0cmF2ZWxlcnM6IHBhcnNlRmxvYXQodHJpcFJlcXVlc3REYXRhLm51bWJlck9mVHJhdmVsZXJzKSxcbiAgICBkYXRlOiB0cmlwUmVxdWVzdFN0YXJ0RGF0ZS5yZXBsYWNlKC8tL2csIFwiL1wiKSxcbiAgICBkdXJhdGlvbjogZGF5c0JldHdlZW4odHJpcFJlcXVlc3RTdGFydERhdGUsIHRyaXBSZXF1ZXN0RW5kRGF0ZSksXG4gICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBbXSxcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiB2YWx1ZXNUb0pzb24odHJhdmVsZXIsIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpIHtcbiAgbGV0IHZhbHVlcyA9IGdldFZhbHVlc0Zyb21JbnB1dHMoKTtcbiAgbGV0IHRyaXBSZXF1ZXN0U3RhcnREYXRlID0gdmFsdWVzLnRyaXBSZXF1ZXN0U3RhcnREYXRlO1xuICBsZXQgdHJpcFJlcXVlc3RFbmREYXRlID0gdmFsdWVzLnRyaXBSZXF1ZXN0RW5kRGF0ZTtcbiAgbGV0IHVzZXJJZCA9IHRyYXZlbGVyLnRyYXZlbGVyLmlkO1xuICBsZXQgdHJpcFJlcXVlc3RJZCA9IGFsbFRyaXBzLmxlbmd0aCArIDE7XG4gIGxldCBkYXRhID0gZGF0YVRvSnNvbihcbiAgICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gICAgdXNlcklkLFxuICAgIHRyaXBSZXF1ZXN0SWQsXG4gICAgdHJpcFJlcXVlc3REYXRhXG4gICk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBmZXRjaEFuZExvZ1Jlc3BvbnNlKGRhdGEpIHtcbiAgZmV0Y2goXG4gICAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXIvZGF0YS90cmlwcy90cmlwc1wiLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vIG9yICdQVVQnXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgfVxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGFsZXJ0KFwiU3VjY2VzcyFcIiwgZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBhbGVydChcIkVycm9yIVwiLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyU2VhcmNoRm9ybUlucHV0cygpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXN0aW5hdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyLW9mLXRyYXZzXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKS52YWx1ZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRcIikudmFsdWU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbmZpcm1lZFRyaXBBbmRDbGVhclNlYXJjaEZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdGVkLXRyaXBzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0LWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIGNsZWFyU2VhcmNoRm9ybUlucHV0cygpO1xufVxuXG5mdW5jdGlvbiBjb25maXJtQW5kUG9zdFRyaXAoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpIHtcbiAgdHJhdmVsX3RyYWNrZXJfc2VydmljZVxuICAgIC5nZXRTaW5nbGVUcmF2ZWxlcihkZXN0aW5hdGlvbiwgdHJpcFJlcXVlc3REYXRhLCBhbGxUcmlwcylcbiAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBsZXQgdHJhdmVsZXIgPSByZXN1bHQ7XG4gICAgICBsZXQgZGF0YSA9IHZhbHVlc1RvSnNvbih0cmF2ZWxlciwgdHJpcFJlcXVlc3REYXRhLCBhbGxUcmlwcyk7XG4gICAgICBmZXRjaEFuZExvZ1Jlc3BvbnNlKGRhdGEpO1xuICAgIH0pO1xuICByZW1vdmVDb25maXJtZWRUcmlwQW5kQ2xlYXJTZWFyY2hGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHNldExvZ091dEJ1dHRvbkF0dHJpYnV0ZShsb2dPdXRCdXR0b24pIHtcbiAgbG9nT3V0QnV0dG9uLmlkID0gXCJsb2ctb3V0LWJ1dHRvblwiO1xuICBsb2dPdXRCdXR0b24uY2xhc3NOYW1lID0gXCJidXR0b25cIjtcbiAgbG9nT3V0QnV0dG9uLmlubmVySFRNTCA9IFwiTE9HT1VUXCI7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZExvZ091dEJ1dHRvbkFuZFNldE9uQ2xpY2sobG9nT3V0QnV0dG9uKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZChsb2dPdXRCdXR0b24pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZy1vdXQtYnV0dG9uXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBcImxvZy1vdXQtYnV0dG9uXCJcbiAgICApLm9uY2xpY2sgPSB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxvZ091dEJ1dHRvbigpIHtcbiAgbGV0IGxvZ091dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNldExvZ091dEJ1dHRvbkF0dHJpYnV0ZShsb2dPdXRCdXR0b24pO1xuICBhcHBlbmRMb2dPdXRCdXR0b25BbmRTZXRPbkNsaWNrKGxvZ091dEJ1dHRvbik7XG59XG5cbmV4cG9ydCB7XG4gIHJlbmRlclRyaXBzSGVhZGVyLFxuICBnZXRQZW5kaW5nVHJpcHMsXG4gIGdldFRvZGF5c1RyaXBzLFxuICByZXR1cm5DdXJyZW50RGF0ZSxcbiAgYXBwZW5kVG9TZWN0aW9uLFxuICByZW5kZXJUcmlwRGF0ZSxcbiAgcmVuZGVyVHJpcERlc3RpbmF0aW9uLFxuICByZW5kZXJUcmlwU3RhdHVzLFxuICByZW5kZXJUcmlwRHVyYXRpb24sXG4gIHJlbmRlckRlc3RpbmF0aW9uSW1hZ2UsXG4gIHJlbmRlclRyaXBzLFxuICBmaWx0ZXJQYXN0QW5kVXBjb21pbmdUcmlwcyxcbiAgcmV0dXJuVHJhdkRhdGUsXG4gIGRheXNCZXR3ZWVuLFxuICBmb3JtYXRFbmREYXRlLFxuICBmb3JtYXRTdGFydERhdGUsXG4gIHJlbmRlclRyaXBDb3N0LFxuICBnZXRWYWx1ZXNGcm9tSW5wdXRzLFxuICByZW5kZXJEZXN0aW5hdGlvblNlYXJjaEJhcixcbiAgcmVuZGVyRGF0ZVNlbGVjdElucHV0cyxcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybSxcbiAgcmVuZGVyTnVtYmVyT2ZUcmF2ZWxlcnNJbnB1dCxcbiAgY3JlYXRlT25DbGlja0Z1bmN0aW9uQW5kUmVuZGVyVHJpcCxcbiAgcmVuZGVyTG9nT3V0QnV0dG9uLFxufTtcbiIsImltcG9ydCBcIi4vY3NzL2Jhc2Uuc2Nzc1wiO1xuaW1wb3J0ICogYXMgdHJhdmVsX3RyYWNrZXJfc2VydmljZSBmcm9tIFwiLi90cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlLmpzXCI7XG5pbXBvcnQgKiBhcyB0cmF2ZWxlcl9kYXNoYm9hcmRfaGVscGVyIGZyb20gXCIuL3RyYXZlbGVyX2Rhc2hib2FyZF9oZWxwZXJcIjtcbmltcG9ydCAqIGFzIGFnZW50X2Rhc2hib2FyZF9oZWxwZXIgZnJvbSBcIi4vYWdlbnRfZGFzaGJvYXJkX2hlbHBlclwiO1xuaW1wb3J0ICogYXMgbG9naW5faGVscGVyIGZyb20gXCIuL2xvZ2luX2hlbHBlclwiO1xuaW1wb3J0ICogYXMgc3R5bGluZyBmcm9tIFwiLi9zdHlsaW5nX2hlbHBlclwiO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikub25sb2FkID0gc3R5bGluZy5zdHlsZUhvbWVQYWdlKCk7XG5cbmxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcblxuYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiBwcm9jZXNzTG9naW4oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbGV0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXVzZXJuYW1lXCIpLnZhbHVlO1xuICBsZXQgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcGFzc3dvcmRcIikudmFsdWU7XG4gIGlmIChsb2dpbl9oZWxwZXIuaXNWYWxpZFBhc3N3b3JkKHBhc3N3b3JkSW5wdXQpKSB7XG4gICAgdHJhdmVsX3RyYWNrZXJfc2VydmljZVxuICAgICAgLmlzVmFsaWRUcmF2ZWxlcih1c2VybmFtZUlucHV0KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgdmFyIHRyYXZlbGVySWQgPSB1c2VybmFtZUlucHV0LnNsaWNlKDgpO1xuICAgICAgICAgIHRyYXZlbF90cmFja2VyX3NlcnZpY2VcbiAgICAgICAgICAgIC5nZXRTaW5nbGVUcmF2ZWxlcih0cmF2ZWxlcklkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBsZXQgdHJhdmVsZXIgPSByZXN1bHQudHJhdmVsZXI7XG4gICAgICAgICAgICAgIHRyYXZlbF90cmFja2VyX3NlcnZpY2VcbiAgICAgICAgICAgICAgICAuZ2V0VHJhdmVsZXJUcmlwcyh0cmF2ZWxlcilcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBsZXQgdHJhdmVsZXJUcmlwcyA9IHJlc3VsdC50cmF2ZWxlclRyaXBzO1xuICAgICAgICAgICAgICAgICAgdHJhdmVsX3RyYWNrZXJfc2VydmljZVxuICAgICAgICAgICAgICAgICAgICAuZ2V0VHJhdmVsZXJEZXN0aW5hdGlvbnModHJhdmVsZXJUcmlwcywgdHJhdmVsZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVzdGluYXRpb25zID0gcmVzdWx0LnRyYXZlbGVyRGVzdGluYXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmlwcyA9IHJlc3VsdC50cmF2ZWxlclRyaXBzO1xuICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmF2ZWxlckRhc2hib2FyZERhdGEgPVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVsZXJfZGFzaGJvYXJkX2hlbHBlci5wcmVwYXJlVHJhdmVsZXJEYXNoYm9hcmREYXRhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmF2ZWxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlwc1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB0cmF2ZWxlcl9kYXNoYm9hcmRfaGVscGVyLnJlbmRlclRyYXZlbGVyRGFzaGJvYXJkKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVsZXJEYXNoYm9hcmREYXRhXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2dpbl9oZWxwZXIuaXNWYWxpZEFnZW5jeSh1c2VybmFtZUlucHV0KSkge1xuICAgICAgICAgIGFnZW50X2Rhc2hib2FyZF9oZWxwZXIucmVuZGVyU3VjY2Vzc2Z1bEFnZW5jeUxvZ2luKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9naW5faGVscGVyLmxvZ2luRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbG9naW5faGVscGVyLmxvZ2luRXJyb3IoKTtcbiAgfVxufTtcbiIsImZ1bmN0aW9uIGlzVmFsaWRQYXNzd29yZChwYXNzd29yZElucHV0KSB7XG4gIHZhciBjb3JyZWN0UHcgPSBcInRyYXZlbDIwMjBcIjtcbiAgaWYgKHBhc3N3b3JkSW5wdXQgPT09IGNvcnJlY3RQdykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRBZ2VuY3kodXNlcm5hbWVJbnB1dCkge1xuICBsZXQgYWdlbnRVbiA9IFwiYWdlbmN5XCI7XG4gIHZhciBkb3duY2FzZWRVc2VybmFtZUlucHV0ID0gdXNlcm5hbWVJbnB1dC50b0xvd2VyQ2FzZSgpO1xuICBpZiAoZG93bmNhc2VkVXNlcm5hbWVJbnB1dCA9PT0gYWdlbnRVbikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyTG9naW5Gb3JtKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXVzZXJuYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wYXNzd29yZFwiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGxvZ2luRXJyb3IoKSB7XG4gIGFsZXJ0KFwiTG9naW4gVW5zdWNjZXNzZnVsIVwiKTtcbiAgY2xlYXJMb2dpbkZvcm0oKTtcbn1cblxuZXhwb3J0IHsgaXNWYWxpZFBhc3N3b3JkLCBpc1ZhbGlkQWdlbmN5LCBjbGVhckxvZ2luRm9ybSwgbG9naW5FcnJvciB9O1xuIiwiaW1wb3J0ICogYXMgdHJhdmVsX3RyYWNrZXJfc2VydmljZSBmcm9tIFwiLi90cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlXCI7XG5cbmZ1bmN0aW9uIHNldEJhY2tncm91bmRJbWFnZUFuZEgxT3BhY2l0eShkZXN0aW5hdGlvbikge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImgxLWRpdlwiXG4gICkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2Rlc3RpbmF0aW9uLmltYWdlfSlgO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZS1oMVwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxLjBcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2UtaDFcIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cbiAgICBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZS1oMVwiKS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZmZmXCI7XG59XG5cbmZ1bmN0aW9uIHNldFJhbmRvbUJhY2tncm91bmRJbWFnZShkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IGRlc3RpbmF0aW9uID1cbiAgICBkZXN0aW5hdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVzdGluYXRpb25zLmxlbmd0aCldO1xuICBzZXRCYWNrZ3JvdW5kSW1hZ2VBbmRIMU9wYWNpdHkoZGVzdGluYXRpb24pO1xuICBsZXQgcmFuZG9tRGVzdGluYXRpb25JbWFnZSA9IGRlc3RpbmF0aW9uLmltYWdlO1xuICByZXR1cm4gcmFuZG9tRGVzdGluYXRpb25JbWFnZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2c0FuZFNldElkc0NsYXNzKHJlc3VsdCkge1xuICBsZXQgZGVzdGluYXRpb25zID0gcmVzdWx0O1xuICBsZXQgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgaDFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoMURpdi5pZCA9IFwiaDEtZGl2XCI7XG4gIGhvbWVQYWdlLmNsYXNzTmFtZSA9IFwiaG9tZS1wYWdlXCI7XG4gIGhvbWVQYWdlLmlkID0gXCJob21lLXBhZ2VcIjtcbiAgcmV0dXJuIHsgZGVzdGluYXRpb25zLCBoMURpdiwgaG9tZVBhZ2UgfTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kSG9tZVBhZ2VEYXRhKFxuICBoMVRleHQsXG4gIGhvbWVQYWdlSDEsXG4gIGRlc3RIMURpdkhvbWVQYWdlLFxuICBkZXN0aW5hdGlvbnNcbikge1xuICBob21lUGFnZUgxLmFwcGVuZENoaWxkKGgxVGV4dCk7XG4gIGRlc3RIMURpdkhvbWVQYWdlLmgxRGl2LmFwcGVuZENoaWxkKGhvbWVQYWdlSDEpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChkZXN0SDFEaXZIb21lUGFnZS5oMURpdik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGRlc3RIMURpdkhvbWVQYWdlLmhvbWVQYWdlKTtcbiAgc2V0UmFuZG9tQmFja2dyb3VuZEltYWdlKGRlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckFuZFNldEJhY2tncm91bmRJbWcocmVzdWx0KSB7XG4gIGxldCBkZXN0SDFEaXZIb21lUGFnZSA9IGNyZWF0ZURpdnNBbmRTZXRJZHNDbGFzcyhyZXN1bHQpO1xuICBsZXQgZGVzdGluYXRpb25zID0gZGVzdEgxRGl2SG9tZVBhZ2UuZGVzdGluYXRpb25zO1xuICBsZXQgaG9tZVBhZ2VIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaG9tZVBhZ2VIMS5pZCA9IFwiaG9tZS1wYWdlLWgxXCI7XG4gIGxldCBoMVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIldoZXJlIHdvdWxkIHlvdSBsaWtlIHRvIGdvP1wiKTtcbiAgYXBwZW5kSG9tZVBhZ2VEYXRhKGgxVGV4dCwgaG9tZVBhZ2VIMSwgZGVzdEgxRGl2SG9tZVBhZ2UsIGRlc3RpbmF0aW9ucyk7XG4gIHJldHVybiBkZXN0aW5hdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlc3RpbmF0aW9uSW1hZ2VzKGRlc3RpbmF0aW9ucykge1xuICBsZXQgaW1hZ2VBbmROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgKGltYWdlQW5kTmFtZURpdi5vbmNsaWNrID0gXCJocmVmXCIpLCBcImFsZXJ0KEhFWSlcIjtcbiAgaW1hZ2VBbmROYW1lRGl2LmNsYXNzTmFtZSA9IFwiaW1hZ2UtYW5kLW5hbWUtZGl2XCI7XG4gIGxldCBkZXN0aW5hdGlvbiA9XG4gICAgZGVzdGluYXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRlc3RpbmF0aW9ucy5sZW5ndGgpXTtcbiAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5jbGFzc05hbWUgPSBcImhvbWUtZGVzdGluYXRpb24taW1hZ2VcIjtcbiAgaW1nLnNyYyA9IGAke2Rlc3RpbmF0aW9uLmltYWdlfWA7XG4gIHJldHVybiB7IGRlc3RpbmF0aW9uLCBpbWFnZUFuZE5hbWVEaXYsIGltZyB9O1xufVxuXG5mdW5jdGlvbiBhcHBlbmRJbWFnZUFuZE5hbWUoZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uTmFtZSwgcGFyYWdyYXBoKSB7XG4gIGxldCBkZXN0aW5hdGlvbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtkZXN0aW5hdGlvbk5hbWV9YCk7XG4gIHBhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0aW5hdGlvbk5vZGUpO1xuICBkZXN0aW5hdGlvbi5pbWFnZUFuZE5hbWVEaXYuYXBwZW5kQ2hpbGQoZGVzdGluYXRpb24uaW1nKTtcbiAgZGVzdGluYXRpb24uaW1hZ2VBbmROYW1lRGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlXCIpLmFwcGVuZENoaWxkKGRlc3RpbmF0aW9uLmltYWdlQW5kTmFtZURpdik7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRGVzdGluYXRpb25zQW5kTmFtZXMoZGVzdGluYXRpb25zKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzdGluYXRpb25zLmxlbmd0aCAtIDQ0OyBpKyspIHtcbiAgICBsZXQgZGVzdGluYXRpb24gPSByZW5kZXJEZXN0aW5hdGlvbkltYWdlcyhkZXN0aW5hdGlvbnMpO1xuICAgIGxldCBkZXN0aW5hdGlvbk5hbWUgPSBkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbi5kZXN0aW5hdGlvbjtcbiAgICBsZXQgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgICBwYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJob21lLWRlc3RpbmF0aW9uLW5hbWVcIjtcbiAgICBhcHBlbmRJbWFnZUFuZE5hbWUoZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uTmFtZSwgcGFyYWdyYXBoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHlsZUhvbWVQYWdlKCkge1xuICB0cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlLmdldEFsbERlc3RpbmF0aW9ucygpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGxldCBkZXN0aW5hdGlvbnMgPSBjcmVhdGVIZWFkZXJBbmRTZXRCYWNrZ3JvdW5kSW1nKHJlc3VsdCk7XG4gICAgcG9wdWxhdGVEZXN0aW5hdGlvbnNBbmROYW1lcyhkZXN0aW5hdGlvbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3R5bGVUcmF2ZWxlclBhZ2UoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXNlY3Rpb25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZS1oMVwiKS5zdHlsZS5wYWRkaW5nID0gXCIyJVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZS1oMVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1wYWdlLWgxXCIpLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMCAwIDIwcHggMjBweFwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZS1oMVwiKS5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoMS1kaXZcIikuc3R5bGUucGFkZGluZyA9IFwiMjAlXCI7XG59XG5cbmZ1bmN0aW9uIHRyYXZlbGVyTWVkaWFRdWVyeSgpIHtcbiAgZnVuY3Rpb24gbXlGdW5jdGlvbih4KSB7XG4gICAgaWYgKHgubWF0Y2hlcykge1xuICAgICAgc3R5bGVUcmF2ZWxlclBhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICB2YXIgeCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMzc1cHgpXCIpO1xuICBteUZ1bmN0aW9uKHgpO1xuICB4LmFkZExpc3RlbmVyKG15RnVuY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBzdHlsZUFnZW50UGFnZSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItc2VjdGlvblwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaDEtZGl2XCIpLnN0eWxlLnBhZGRpbmcgPSBcIjE1JVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50LWhlYWRlclwiKS5zdHlsZS5wYWRkaW5nID0gXCIyJVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZW50LWhlYWRlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnQtaGVhZGVyXCIpLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMCAwIDIwcHggMjBweFwiO1xufVxuXG5mdW5jdGlvbiBhZ2VudE1lZGlhUXVlcnkoKSB7XG4gIGZ1bmN0aW9uIG15RnVuY3Rpb24oeCkge1xuICAgIGlmICh4Lm1hdGNoZXMpIHtcbiAgICAgIHN0eWxlQWdlbnRQYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgdmFyIHggPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDM3NXB4KVwiKTtcbiAgbXlGdW5jdGlvbih4KTtcbiAgeC5hZGRMaXN0ZW5lcihteUZ1bmN0aW9uKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVBZ2VudFBhZ2VGb3I3NjgoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLXNlY3Rpb25cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImgxLWRpdlwiKS5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoMS1kaXZcIikuc3R5bGUucGFkZGluZyA9IFwiMTUlXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnQtaGVhZGVyXCIpLnN0eWxlLnBhZGRpbmcgPSBcIjIlXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlbnQtaGVhZGVyXCIpLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMCAwIDIwcHggMjBweFwiO1xufVxuXG5mdW5jdGlvbiBhZ2VudE1lZGlhUXVlcnk3NjgoKSB7XG4gIGZ1bmN0aW9uIG15RnVuY3Rpb24oeSkge1xuICAgIGlmICh5Lm1hdGNoZXMpIHtcbiAgICAgIHN0eWxlQWdlbnRQYWdlRm9yNzY4KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgdmFyIHkgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2OHB4KVwiKTtcbiAgbXlGdW5jdGlvbih5KTtcbiAgeS5hZGRMaXN0ZW5lcihteUZ1bmN0aW9uKTtcbn1cblxuZXhwb3J0IHtcbiAgc3R5bGVIb21lUGFnZSxcbiAgdHJhdmVsZXJNZWRpYVF1ZXJ5LFxuICBhZ2VudE1lZGlhUXVlcnksXG4gIGFnZW50TWVkaWFRdWVyeTc2OCxcbn07XG4iLCJhc3luYyBmdW5jdGlvbiBpc1ZhbGlkVHJhdmVsZXIodXNlcm5hbWVJbnB1dCkge1xuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXJcIjtcbiAgY29uc3QgdHJhdmVsZXJzVXJsID0gYmFzZVVybCArIFwiL2RhdGEvdHJhdmVsZXJzL3RyYXZlbGVyc1wiO1xuICBjb25zdCB1c2VySWQgPSB1c2VybmFtZUlucHV0LnNsaWNlKDgpO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0cmF2ZWxlcnNVcmwpO1xuICBsZXQgYXdhaXRSZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGxldCB0cmF2ZWxlcnMgPSBhd2FpdFJlcy50cmF2ZWxlcnM7XG4gIGxldCBpZFRvTnVtID0gTnVtYmVyKHVzZXJJZCk7XG4gIGxldCBpZHNBcnJheSA9IFtdO1xuICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgdHJhdmVsZXJzLmZvckVhY2goKHRyYXZlbGVyKSA9PiB7XG4gICAgaWRzQXJyYXkucHVzaCh0cmF2ZWxlci5pZCk7XG4gIH0pO1xuICBpZHNBcnJheS5mb3JFYWNoKChpZCkgPT4ge1xuICAgIGlmIChpZFRvTnVtID09PSBpZCkge1xuICAgICAgdmFsaWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB2YWxpZDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVHJhdmVsZXJzKCkge1xuICBsZXQgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyL2RhdGEvXCI7XG4gIGxldCB0cmF2ZWxlcnNVcmwgPSBcInRyYXZlbGVycy90cmF2ZWxlcnNcIjtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYmFzZVVybCArIHRyYXZlbGVyc1VybCk7XG4gIGxldCB0cmF2ZWxlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB0cmF2ZWxlcnM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNpbmdsZVRyYXZlbGVyKCkge1xuICBsZXQgZnVsbFVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC11c2VybmFtZVwiKTtcbiAgY29uc3QgdHJhdmVsZXJJZE51bWJlciA9IGZ1bGxVc2VybmFtZS52YWx1ZS5zbGljZSg4KTtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IHNpbmdsZVRyYXZlbGVyVXJsID1cbiAgICBiYXNlVXJsICsgYC9kYXRhL3RyYXZlbGVycy90cmF2ZWxlcnMvJHt0cmF2ZWxlcklkTnVtYmVyfWA7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNpbmdsZVRyYXZlbGVyVXJsKTtcbiAgbGV0IHRyYXZlbGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4geyB0cmF2ZWxlciB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUcmF2ZWxlclRyaXBzKHRyYXZlbGVyKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlclwiO1xuICBjb25zdCB0cmF2ZWxlclRyaXBzVXJsID0gYmFzZVVybCArIFwiL2RhdGEvdHJpcHMvdHJpcHNcIjtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godHJhdmVsZXJUcmlwc1VybCk7XG4gIGxldCB0cmlwQXJyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBsZXQgdHJpcHMgPSB0cmlwQXJyLnRyaXBzO1xuICBsZXQgdHJhdmVsZXJUcmlwcyA9IFtdO1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRyaXAgPSB0cmlwc1tpXTtcbiAgICBpZiAodHJhdmVsZXIuaWQgPT09IHRyaXAudXNlcklEKSB7XG4gICAgICB0cmF2ZWxlclRyaXBzLnB1c2godHJpcCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHRyYXZlbGVyVHJpcHMsIHRyYXZlbGVyIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRyYXZlbGVyRGVzdGluYXRpb25zKHRyYXZlbGVyVHJpcHMsIHRyYXZlbGVyKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlclwiO1xuICBjb25zdCB0cmF2ZWxlckRlc3RpbmF0aW9uc1VybCA9IGJhc2VVcmwgKyBcIi9kYXRhL2Rlc3RpbmF0aW9ucy9kZXN0aW5hdGlvbnNcIjtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godHJhdmVsZXJEZXN0aW5hdGlvbnNVcmwpO1xuICBsZXQgZGVzdGluYXRpb25zUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGxldCBkZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnNSZXNwb25zZS5kZXN0aW5hdGlvbnM7XG4gIGxldCB0cmlwRGVzdGluYXRpb25JZHMgPSBbXTtcbiAgbGV0IHRyYXZlbGVyRGVzdGluYXRpb25zID0gW107XG4gIHRyYXZlbGVyVHJpcHMuZm9yRWFjaCgodHJpcCkgPT4gdHJpcERlc3RpbmF0aW9uSWRzLnB1c2godHJpcC5kZXN0aW5hdGlvbklEKSk7XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXBEZXN0aW5hdGlvbklkcy5pbmNsdWRlcyhkZXN0aW5hdGlvbnNbaV0uaWQpKSB7XG4gICAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucy5wdXNoKGRlc3RpbmF0aW9uc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHRyYXZlbGVyVHJpcHMsIHRyYXZlbGVyLCB0cmF2ZWxlckRlc3RpbmF0aW9ucyB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxUcmlwcygpIHtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IGFnZW50VHJpcHNVcmwgPSBiYXNlVXJsICsgXCIvZGF0YS90cmlwcy90cmlwc1wiO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhZ2VudFRyaXBzVXJsKTtcbiAgbGV0IGF3YWl0ZWRSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgbGV0IGFsbFRyaXBzID0gYXdhaXRlZFJlc3BvbnNlLnRyaXBzO1xuICByZXR1cm4gYWxsVHJpcHM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbERlc3RpbmF0aW9ucygpIHtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IGFnZW50RGVzdGluYXRpb25zVXJsID0gYmFzZVVybCArIFwiL2RhdGEvZGVzdGluYXRpb25zL2Rlc3RpbmF0aW9uc1wiO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhZ2VudERlc3RpbmF0aW9uc1VybCk7XG4gIGxldCBkZXN0aW5hdGlvbnNSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgbGV0IGFsbERlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uc1Jlc3BvbnNlLmRlc3RpbmF0aW9ucztcbiAgcmV0dXJuIGFsbERlc3RpbmF0aW9ucztcbn1cblxuZXhwb3J0IHtcbiAgaXNWYWxpZFRyYXZlbGVyLFxuICBnZXRTaW5nbGVUcmF2ZWxlcixcbiAgZ2V0VHJhdmVsZXJUcmlwcyxcbiAgZ2V0VHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gIGdldEFsbFRyaXBzLFxuICBnZXRBbGxEZXN0aW5hdGlvbnMsXG4gIGdldEFsbFRyYXZlbGVycyxcbn07XG4iLCJpbXBvcnQgKiBhcyB0cmF2ZWxUcmFja2VyU2VydmljZSBmcm9tIFwiLi90cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBkYXNoYm9hcmRIZWxwZXIgZnJvbSBcIi4vZGFzaGJvYXJkX2hlbHBlclwiO1xuaW1wb3J0ICogYXMgc3R5bGluZyBmcm9tIFwiLi9zdHlsaW5nX2hlbHBlclwiO1xuXG5mdW5jdGlvbiByZW5kZXJUcmlwUmVxdWVzdEJ1dHRvbigpIHtcbiAgbGV0IHRyaXBSZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdHJpcFJlcXVlc3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0cmlwLXJlcXVlc3QtYnV0dG9uXCIpO1xuICB0cmlwUmVxdWVzdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ0FMQ1VMQVRFXCI7XG4gIGRhc2hib2FyZEhlbHBlci5hcHBlbmRUb1JlcXVlc3RGb3JtKHRyaXBSZXF1ZXN0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUmVxdWVzdEZvcm1FbGVtZW50cyhkZXN0aW5hdGlvbnNBcnIsIGFsbFRyaXBzKSB7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJOdW1iZXJPZlRyYXZlbGVyc0lucHV0KCk7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJEYXRlU2VsZWN0SW5wdXRzKCk7XG4gIHJlbmRlclRyaXBSZXF1ZXN0QnV0dG9uKCk7XG4gIGRhc2hib2FyZEhlbHBlci5jcmVhdGVPbkNsaWNrRnVuY3Rpb25BbmRSZW5kZXJUcmlwKGRlc3RpbmF0aW9uc0FyciwgYWxsVHJpcHMpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmF2ZWxlclRyaXBSZXF1ZXN0Rm9ybSgpIHtcbiAgdHJhdmVsVHJhY2tlclNlcnZpY2UuZ2V0QWxsVHJpcHMoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBsZXQgYWxsVHJpcHMgPSByZXN1bHQ7XG4gICAgdHJhdmVsVHJhY2tlclNlcnZpY2UuZ2V0QWxsRGVzdGluYXRpb25zKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBsZXQgZGVzdGluYXRpb25zQXJyID0gcmVzdWx0O1xuICAgICAgZGFzaGJvYXJkSGVscGVyLnJlbmRlckRlc3RpbmF0aW9uU2VhcmNoQmFyKGFsbFRyaXBzLCBkZXN0aW5hdGlvbnNBcnIpO1xuICAgICAgcmVuZGVyUmVxdWVzdEZvcm1FbGVtZW50cyhkZXN0aW5hdGlvbnNBcnIsIGFsbFRyaXBzKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvcFNlY3Rpb25PZkRhc2hib2FyZCh0cmF2ZWxlckRhc2hib2FyZERhdGEpIHtcbiAgZGFzaGJvYXJkSGVscGVyLnJlbmRlckxvZ091dEJ1dHRvbigpO1xuICByZW5kZXJUcmF2ZWxlcldlbGNvbWUodHJhdmVsZXJEYXNoYm9hcmREYXRhLnRyYXZlbGVyKTtcbiAgcmVuZGVyVG90YWxTcGVudCh0cmF2ZWxlckRhc2hib2FyZERhdGEpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJVcGNvbWluZ1wiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcHNBbmRSZXF1ZXN0Rm9ybSh0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGRhc2hib2FyZEhlbHBlci5yZW5kZXJUcmlwcyh0cmlwcy51cGNvbWluZ1RyaXBzQXJyLCBkZXN0aW5hdGlvbnMpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJQYXN0XCIpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHModHJpcHMucGFzdFRyaXBzQXJyLCBkZXN0aW5hdGlvbnMpO1xuICBkYXNoYm9hcmRIZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJSZXF1ZXN0XCIpO1xuICByZW5kZXJUcmF2ZWxlclRyaXBSZXF1ZXN0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmF2ZWxlckRhc2hib2FyZCh0cmF2ZWxlckRhc2hib2FyZERhdGEpIHtcbiAgcmVuZGVyVG9wU2VjdGlvbk9mRGFzaGJvYXJkKHRyYXZlbGVyRGFzaGJvYXJkRGF0YSk7XG4gIGxldCB0cmlwcyA9IGZpbHRlclBhc3RBbmRVcGNvbWluZ1RyaXBzKHRyYXZlbGVyRGFzaGJvYXJkRGF0YS50cmF2ZWxlclRyaXBzKTtcbiAgbGV0IGRlc3RpbmF0aW9ucyA9IHRyYXZlbGVyRGFzaGJvYXJkRGF0YS50cmF2ZWxlckRlc3RpbmF0aW9ucztcbiAgcmVuZGVyVHJpcHNBbmRSZXF1ZXN0Rm9ybSh0cmlwcywgZGVzdGluYXRpb25zKTtcbn1cblxuZnVuY3Rpb24gbWFrZVBhc3RBbmRVcGNvbWluZ1RyaXBzQXJyYXlzKHRyYXZlbGVyVHJpcHMsIHRvZGF5KSB7XG4gIGxldCB1cGNvbWluZ1RyaXBzQXJyID0gW107XG4gIGxldCBwYXN0VHJpcHNBcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmF2ZWxlclRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHNtYWxsRGF0ZSA9IG5ldyBEYXRlKHRyYXZlbGVyVHJpcHNbaV0uZGF0ZSk7XG4gICAgbGV0IHRyYXZEYXRlID0gZGFzaGJvYXJkSGVscGVyLnJldHVyblRyYXZEYXRlKHNtYWxsRGF0ZSk7XG4gICAgaWYgKHRvZGF5IDwgdHJhdkRhdGUpIHtcbiAgICAgIHVwY29taW5nVHJpcHNBcnIucHVzaCh0cmF2ZWxlclRyaXBzW2ldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFzdFRyaXBzQXJyLnB1c2godHJhdmVsZXJUcmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHVwY29taW5nVHJpcHNBcnIsIHBhc3RUcmlwc0FyciB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJQYXN0QW5kVXBjb21pbmdUcmlwcyh0cmF2ZWxlclRyaXBzKSB7XG4gIGxldCB0b2RheSA9IGRhc2hib2FyZEhlbHBlci5yZXR1cm5DdXJyZW50RGF0ZSgpO1xuICBsZXQgdHJpcHNBcnJheSA9IG1ha2VQYXN0QW5kVXBjb21pbmdUcmlwc0FycmF5cyh0cmF2ZWxlclRyaXBzLCB0b2RheSk7XG4gIGxldCBwYXN0VHJpcHNBcnIgPSB0cmlwc0FycmF5LnBhc3RUcmlwc0FycjtcbiAgbGV0IHVwY29taW5nVHJpcHNBcnIgPSB0cmlwc0FycmF5LnVwY29taW5nVHJpcHNBcnI7XG4gIHJldHVybiB7IHBhc3RUcmlwc0FyciwgdXBjb21pbmdUcmlwc0FyciB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmF2ZWxlcldlbGNvbWUodHJhdmVsZXIpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBsZXQgd2VsY29tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgd2VsY29tZUhlYWRlci5jbGFzc05hbWUgPSBcIndlbGNvbWUtaGVhZGVyXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiaG9tZS1wYWdlLWgxXCJcbiAgKS5pbm5lckhUTUwgPSBgSGVsbG8sIDxicj4gJHt0cmF2ZWxlci5uYW1lfWA7XG4gIHN0eWxpbmcudHJhdmVsZXJNZWRpYVF1ZXJ5KCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvdGFsU3BlbnQodHJhdmVsZXJEYXNoYm9hcmREYXRhKSB7XG4gIGxldCB0b3RhbEFtb3VudCA9IHRyYXZlbGVyRGFzaGJvYXJkRGF0YS50b3RhbEFmdGVyQWdlbnRGZWUudG9GaXhlZCgyKTtcbiAgbGV0IHRvdGFsU3BlbnRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xuICB0b3RhbFNwZW50UGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwidG90YWwtc3BlbnRcIjtcbiAgbGV0IHRvdGFsU3BlbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYFRvdGFsIEFtb3VudCBTcGVudDogJCR7dG90YWxBbW91bnR9YFxuICApO1xuICB0b3RhbFNwZW50UGFyYWdyYXBoLmFwcGVuZENoaWxkKHRvdGFsU3BlbnRUZXh0KTtcbiAgZGFzaGJvYXJkSGVscGVyLmFwcGVuZFRvU2VjdGlvbih0b3RhbFNwZW50UGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9kZ2luZ0Nvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKSB7XG4gIGxldCBsb2RnaW5nQ29zdHMgPSBbXTtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0cmF2ZWxlckRlc3RpbmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGxvZGdpbmdDb3N0cy5wdXNoKFxuICAgICAgdHJhdmVsZXJEZXN0aW5hdGlvbnNbaV0uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKlxuICAgICAgdHJhdmVsZXJUcmlwc1tpXS5kdXJhdGlvblxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGxvZGdpbmdDb3N0cztcbn1cblxuZnVuY3Rpb24gZ2V0RmxpZ2h0Q29zdHModHJhdmVsZXJEZXN0aW5hdGlvbnMsIHRyYXZlbGVyVHJpcHMpIHtcbiAgbGV0IGZsaWdodENvc3RzID0gW107XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdHJhdmVsZXJEZXN0aW5hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBmbGlnaHRDb3N0cy5wdXNoKFxuICAgICAgdHJhdmVsZXJEZXN0aW5hdGlvbnNbaV0uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqXG4gICAgICB0cmF2ZWxlclRyaXBzW2ldLnRyYXZlbGVyc1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIGZsaWdodENvc3RzO1xufVxuXG5mdW5jdGlvbiBhZGRGbGlnaHRhbmRMb2RnaW5nQ29zdHMoZmxpZ2h0Q29zdHMsIGxvZGdpbmdDb3N0cykge1xuICBsZXQgZmxpZ2h0c1BsdXNMb2RnaW5nID0gW107XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZmxpZ2h0Q29zdHMubGVuZ3RoOyBpKyspIHtcbiAgICBmbGlnaHRzUGx1c0xvZGdpbmcucHVzaChsb2RnaW5nQ29zdHNbaV0gKyBmbGlnaHRDb3N0c1tpXSk7XG4gIH1cbiAgcmV0dXJuIGZsaWdodHNQbHVzTG9kZ2luZztcbn1cblxuZnVuY3Rpb24gcmVkdWNlRmxpZ2h0c1BsdXNMb2RnaW5nKGZsaWdodHNQbHVzTG9kZ2luZykge1xuICBsZXQgZmxpZ2h0c1BsdXNMb2RnaW5nUmVkdWNlZCA9IGZsaWdodHNQbHVzTG9kZ2luZy5yZWR1Y2UoZnVuY3Rpb24gKFxuICAgIGZsaWdodHMsXG4gICAgbG9kZ2luZ1xuICApIHtcbiAgICByZXR1cm4gZmxpZ2h0cyArIGxvZGdpbmc7XG4gIH0sXG4gICAgMCk7XG4gIHJldHVybiBmbGlnaHRzUGx1c0xvZGdpbmdSZWR1Y2VkO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVHJhdmVsZXJEYXNoYm9hcmREYXRhKFxuICB0cmF2ZWxlcixcbiAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gIHRyYXZlbGVyVHJpcHNcbikge1xuICBsZXQgbG9kZ2luZ0Nvc3RzID0gZ2V0TG9kZ2luZ0Nvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKTtcbiAgbGV0IGZsaWdodENvc3RzID0gZ2V0RmxpZ2h0Q29zdHModHJhdmVsZXJEZXN0aW5hdGlvbnMsIHRyYXZlbGVyVHJpcHMpO1xuICBsZXQgZmxpZ2h0c1BsdXNMb2RnaW5nID0gYWRkRmxpZ2h0YW5kTG9kZ2luZ0Nvc3RzKGZsaWdodENvc3RzLCBsb2RnaW5nQ29zdHMpO1xuICBsZXQgdG90YWxBbW91bnRDdXN0SGFzU3BlbnRCZWZvcmVBZ2VudEZlZSA9IHJlZHVjZUZsaWdodHNQbHVzTG9kZ2luZyhcbiAgICBmbGlnaHRzUGx1c0xvZGdpbmdcbiAgKTtcbiAgdmFyIHRvdGFsQWZ0ZXJBZ2VudEZlZSA9IHRvdGFsQW1vdW50Q3VzdEhhc1NwZW50QmVmb3JlQWdlbnRGZWUgKiAxLjE7XG4gIHJldHVybiB7XG4gICAgdHJhdmVsZXIsXG4gICAgdHJhdmVsZXJUcmlwcyxcbiAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucyxcbiAgICBsb2RnaW5nQ29zdHMsXG4gICAgZmxpZ2h0Q29zdHMsXG4gICAgZmxpZ2h0c1BsdXNMb2RnaW5nLFxuICAgIHRvdGFsQW1vdW50Q3VzdEhhc1NwZW50QmVmb3JlQWdlbnRGZWUsXG4gICAgdG90YWxBZnRlckFnZW50RmVlLFxuICB9O1xufVxuXG5leHBvcnQge1xuICByZW5kZXJUcmF2ZWxlcldlbGNvbWUsXG4gIHJlbmRlclRvdGFsU3BlbnQsXG4gIGdldExvZGdpbmdDb3N0cyxcbiAgZ2V0RmxpZ2h0Q29zdHMsXG4gIGFkZEZsaWdodGFuZExvZGdpbmdDb3N0cyxcbiAgcmVkdWNlRmxpZ2h0c1BsdXNMb2RnaW5nLFxuICBwcmVwYXJlVHJhdmVsZXJEYXNoYm9hcmREYXRhLFxuICBmaWx0ZXJQYXN0QW5kVXBjb21pbmdUcmlwcyxcbiAgcmVuZGVyVHJhdmVsZXJEYXNoYm9hcmQsXG4gIHJlbmRlclRyYXZlbGVyVHJpcFJlcXVlc3RGb3JtLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=