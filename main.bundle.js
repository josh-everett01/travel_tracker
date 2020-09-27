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
exports.push([module.i, "html {\n  --header-bg-color: #094479;\n  --main-bg-color: #0b172a;\n  --main-border-color: #bc4123;\n  --main-txt-color: #fff; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  background-color: var(--main-bg-color);\n  color: var(--main-txt-color);\n  font-family: \"Oxygen\", sans-serif;\n  font-size: 1.3rem;\n  margin: 0;\n  text-align: center;\n  width: 100%; }\n\nbutton {\n  background-color: var(--main-border-color); }\n\nh3 {\n  grid-column: 0;\n  grid-row: 1; }\n\ni {\n  background-color: var(--header-bg-color);\n  color: var(--main-border-color); }\n\np text {\n  margin: 5%; }\n\nsection:first-of-type {\n  align-content: center;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: auto;\n  grid-template-rows: 0.2fr 2fr 0.1fr 0.1fr 0.1fr 0.1fr;\n  place-items: center; }\n\n.container {\n  align-content: center;\n  border: 2px solid var(--main-border-color);\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 0.2fr 2fr 0.1fr 0.1fr 0.1fr 0.1fr;\n  margin: 3%;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 16px;\n  place-items: center; }\n\n.destination-image {\n  grid-row: 2;\n  height: 200px;\n  width: 250px; }\n\n.footer {\n  margin-top: 5em;\n  text-align: center; }\n\n.header-section {\n  background-color: var(--header-bg-color);\n  margin-bottom: 10px;\n  padding-bottom: 1px;\n  padding-top: 10px;\n  text-align: center;\n  width: 100%; }\n\n.login-form {\n  border-bottom: 3px solid var(--main-border-color);\n  border-left: 3px solid var(--main-border-color);\n  border-radius: 2%;\n  border-right: 3px solid var(--main-border-color);\n  border-top: 50px solid var(--main-border-color);\n  padding-bottom: 20px;\n  position: relative;\n  text-align: center;\n  width: 450px;\n  margin: auto;\n  margin-top: 3%; }\n\n.main-section {\n  display: grid;\n  margin-top: 3em;\n  place-items: center; }\n\n.password {\n  margin-top: 10px; }\n\n.past-trips {\n  grid-column: 2; }\n\n.signin {\n  left: 38%;\n  position: absolute;\n  top: -45px; }\n\n.submit {\n  border-radius: 20px;\n  color: var(--main-txt-color);\n  cursor: pointer;\n  margin-top: 20px;\n  outline: none;\n  text-align: center; }\n\n.trip-date {\n  grid-row: 3; }\n\n.trip-destination {\n  grid-row: 4; }\n\n.trip-duration {\n  grid-row: 5; }\n\n.trip-status {\n  grid-row: 6; }\n\n.total-spent {\n  display: flex;\n  grid-row: 0;\n  margin: auto;\n  margin-left: 40%; }\n\n.travname {\n  color: var(--main-border-color); }\n\n.username {\n  margin-top: -20px; }\n\n@media (min-width: 376px max-width 768px) {\n  body {\n    display: flex;\n    font-size: 18px; }\n  .footer {\n    bottom: 0;\n    left: 34%;\n    position: absolute; }\n  .login-form {\n    width: 745px; } }\n\n@media (max-width: 375px) {\n  body {\n    display: flex;\n    font-size: 18px; }\n  .footer {\n    bottom: 0;\n    left: 3.8em;\n    position: absolute; }\n  .login-form {\n    width: 359px; } }\n", ""]);



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
/* harmony import */ var _login_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login_helper.js */ "./src/login_helper.js");





let button = document.getElementById("submit");

button.onclick = function processLogin() {
  let usernameInput = document.getElementById("input-username").value;
  let passwordInput = document.getElementById("input-password").value;
  if (Object(_login_helper_js__WEBPACK_IMPORTED_MODULE_3__["isValidPassword"])(passwordInput)) {
    Object(_travel_tracker_service_js__WEBPACK_IMPORTED_MODULE_1__["isValidTraveler"])(usernameInput).then(function (result) {
      if (result === true) {
        var travelerId = usernameInput.slice(8);
        Object(_travel_tracker_service_js__WEBPACK_IMPORTED_MODULE_1__["getSingleTraveler"])(travelerId).then(function (result) {
          let traveler = result.traveler;
          Object(_travel_tracker_service_js__WEBPACK_IMPORTED_MODULE_1__["getTravelerTrips"])(traveler).then(function (result) {
            let travelerTrips = result.travelerTrips;
            Object(_travel_tracker_service_js__WEBPACK_IMPORTED_MODULE_1__["getTravelerDestinations"])(travelerTrips, traveler).then(function (
              result
            ) {
              var destinations = result.travelerDestinations;
              var trips = result.travelerTrips;
              let travelerDashboardData = Object(_traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_2__["prepareTravelerDashboardData"])(
                traveler,
                destinations,
                trips
              );
              Object(_login_helper_js__WEBPACK_IMPORTED_MODULE_3__["renderTravelerDashboard"])(travelerDashboardData);
            });
          });
        });
      } else if (Object(_login_helper_js__WEBPACK_IMPORTED_MODULE_3__["isValidAgency"])(usernameInput)) {
        Object(_login_helper_js__WEBPACK_IMPORTED_MODULE_3__["renderSuccessfulAgencyLogin"])();
      } else {
        Object(_login_helper_js__WEBPACK_IMPORTED_MODULE_3__["loginError"])();
      }
    });
  } else {
    Object(_login_helper_js__WEBPACK_IMPORTED_MODULE_3__["loginError"])();
  }
};


/***/ }),

/***/ "./src/login_helper.js":
/*!*****************************!*\
  !*** ./src/login_helper.js ***!
  \*****************************/
/*! exports provided: isValidPassword, isValidAgency, renderSuccessfulAgencyLogin, renderTravelerDashboard, clearLoginForm, loginError, returnCurrentDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidPassword", function() { return isValidPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidAgency", function() { return isValidAgency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTravelerDashboard", function() { return renderTravelerDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLoginForm", function() { return clearLoginForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginError", function() { return loginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnCurrentDate", function() { return returnCurrentDate; });
/* harmony import */ var _traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traveler_dashboard_helper */ "./src/traveler_dashboard_helper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderSuccessfulAgencyLogin", function() { return _traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_0__["renderSuccessfulAgencyLogin"]; });



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
  let i;
  let upcomingTripsArr = [];
  let pastTripsArr = [];
  let today = returnCurrentDate();
  for (i = 0; i < travelerTrips.length; i++) {
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

function renderTravelerDashboard(travelerDashboardData) {
  Object(_traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_0__["renderTravelerWelcome"])(travelerDashboardData.traveler);
  Object(_traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_0__["renderTotalSpent"])(travelerDashboardData);
  Object(_traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_0__["renderTripsHeader"])("Upcoming");
  let trips = filterPastAndUpcomingTrips(travelerDashboardData.travelerTrips);
  let destinations = travelerDashboardData.travelerDestinations;
  Object(_traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_0__["renderTrips"])(trips.upcomingTripsArr, destinations);
  Object(_traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_0__["renderTripsHeader"])("Past");
  Object(_traveler_dashboard_helper__WEBPACK_IMPORTED_MODULE_0__["renderTrips"])(trips.pastTripsArr, destinations);
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

/***/ "./src/travel_tracker_service.js":
/*!***************************************!*\
  !*** ./src/travel_tracker_service.js ***!
  \***************************************/
/*! exports provided: isValidTraveler, getSingleTraveler, getTravelerTrips, getTravelerDestinations, getAllTripsForAgent, getAllDestinationsForAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidTraveler", function() { return isValidTraveler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleTraveler", function() { return getSingleTraveler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTravelerTrips", function() { return getTravelerTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTravelerDestinations", function() { return getTravelerDestinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTripsForAgent", function() { return getAllTripsForAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDestinationsForAgent", function() { return getAllDestinationsForAgent; });
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

async function getAllTripsForAgent() {
  const baseUrl = "https://fe-apps.herokuapp.com/api/v1/travel-tracker";
  const agentTripsUrl = baseUrl + "/data/trips/trips";
  let response = await fetch(agentTripsUrl);
  let awaitedResponse = await response.json();
  let allTrips = awaitedResponse.trips;
  return allTrips;
}

async function getAllDestinationsForAgent() {
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
/*! exports provided: renderTravelerWelcome, renderTripsHeader, renderSuccessfulAgencyLogin, appendToSection, renderTripDate, renderTripDestination, renderTripStatus, renderTripDuration, renderDestinationImage, renderTrips, renderTotalSpent, getLodgingCosts, getFlightCosts, addFlightandLodgingCosts, reduceFlightsPlusLodging, prepareTravelerDashboardData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTravelerWelcome", function() { return renderTravelerWelcome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTripsHeader", function() { return renderTripsHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSuccessfulAgencyLogin", function() { return renderSuccessfulAgencyLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendToSection", function() { return appendToSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTripDate", function() { return renderTripDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTripDestination", function() { return renderTripDestination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTripStatus", function() { return renderTripStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTripDuration", function() { return renderTripDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDestinationImage", function() { return renderDestinationImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTrips", function() { return renderTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTotalSpent", function() { return renderTotalSpent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLodgingCosts", function() { return getLodgingCosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlightCosts", function() { return getFlightCosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFlightandLodgingCosts", function() { return addFlightandLodgingCosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceFlightsPlusLodging", function() { return reduceFlightsPlusLodging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareTravelerDashboardData", function() { return prepareTravelerDashboardData; });
/* harmony import */ var _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel_tracker_service */ "./src/travel_tracker_service.js");
/* harmony import */ var _login_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_helper */ "./src/login_helper.js");



function renderTravelerWelcome(traveler) {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("footer").style.display = "none";
  let welcomeHeader = document.createElement("h1");
  let headerText = document.createTextNode(`Hello, ${traveler.name}`);
  welcomeHeader.appendChild(headerText);
  document.getElementsByTagName("BODY")[0].appendChild(welcomeHeader);
}

function renderTripsHeader(title) {
  let upcomingTripsSection = document.createElement("section");
  upcomingTripsSection.className = "container";
  let upcomingTripsHeader = document.createElement("h3");
  let upcomingTripsHeaderText = document.createTextNode(`${title} Trips:`);
  upcomingTripsHeader.appendChild(upcomingTripsHeaderText);
  upcomingTripsSection.appendChild(upcomingTripsHeader);
  document.getElementsByTagName("BODY")[0].appendChild(upcomingTripsSection);
}

function renderAgentWelcome() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("footer").style.display = "none";
  var welcomeHeader = document.createElement("H1");
  var headerText = document.createTextNode("Welcome, AGENT");
  welcomeHeader.appendChild(headerText);
  document.body.appendChild(welcomeHeader);
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

function getLodgingCostsForAgent(destinations, trips) {
  let approvedTrips = [];
  let approvedTripsFlightPlusLodging = [];
  let i;
  for (i = 0; i < trips.length; i++) {
    if (trips[i].status === "approved") {
      approvedTrips.push(trips[i]);
    }
  }
  let destinationIndex;
  for (i = 0; i < approvedTrips.length; i++) {
    for (
      destinationIndex = 0;
      destinationIndex < destinations.length;
      destinationIndex++
    ) {
      if (
        approvedTrips[i].destinationID === destinations[destinationIndex].id
      ) {
        approvedTripsFlightPlusLodging.push(
          destinations[destinationIndex].estimatedLodgingCostPerDay +
          destinations[destinationIndex].estimatedFlightCostPerPerson
        );
      }
    }
  }
  let amountTravelersHaveSpent = approvedTripsFlightPlusLodging.reduce(
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
  totalEarnedParagraph.className = "total-earned";
  let totalEarnedText = document.createTextNode(
    `Total Amount Earned: $${totalAmount}`
  );
  totalEarnedParagraph.appendChild(totalEarnedText);
  document.querySelector("body").appendChild(totalEarnedParagraph);
}

function renderAgentTrips(pendingTrips, destinations) {
  let i;
  for (i = 0; i < pendingTrips.length; i++) {
    renderDestinationImage(pendingTrips[i], destinations);
    renderTripDate(pendingTrips[i]);
    renderTripDestination(pendingTrips[i], destinations);
    renderTripStatus(pendingTrips[i]);
    renderTripDuration(pendingTrips[i]);
  }
}

function getTodaysTrips(trips) {
  let today = Object(_login_helper__WEBPACK_IMPORTED_MODULE_1__["returnCurrentDate"])();
  let i;
  let todaysTripsArr = [];
  for (i = 0; i < trips.length; i++) {
    if (trips[i].date === today) {
      todaysTripsArr.push(trips[i]);
    }
  }
  let todaysTrips = todaysTripsArr;
  return todaysTrips;
}

function renderSuccessfulAgencyLogin() {
  renderAgentWelcome();
  Object(_travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getAllTripsForAgent"])().then(function (trips) {
    Object(_travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getAllDestinationsForAgent"])().then(function (destinations) {
      trips;
      let amountAgentEarned = getLodgingCostsForAgent(destinations, trips);
      renderTotalEarned(amountAgentEarned);
      renderTripsHeader("Requested");
      let pendingTrips = getPendingTrips(trips);
      renderAgentTrips(pendingTrips, destinations);
      renderTripsHeader("Today's");
      let todaysTrips = getTodaysTrips(trips);
      renderAgentTrips(todaysTrips, destinations);
    });
  });
}

function appendToSection(paragraph) {
  if (document.getElementsByTagName("SECTION").length === 1) {
    document.getElementsByTagName("SECTION")[0].appendChild(paragraph);
  } else {
    document.getElementsByTagName("SECTION")[1].appendChild(paragraph);
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

function renderTripDestination(trip, destinations) {
  let i;
  for (i = 0; i < destinations.length; i++) {
    if (trip.destinationID === destinations[i].id) {
      let tripDestination = destinations[i].destination;
      let tripDestinationParagraph = document.createElement("paragraph");
      tripDestinationParagraph.className = "trip-destination";
      let tripDestinationText = document.createTextNode(
        `Trip Destination: ${tripDestination}`
      );
      tripDestinationParagraph.appendChild(tripDestinationText);
      appendToSection(tripDestinationParagraph);
    }
  }
}

function renderTripStatus(trip) {
  let tripStatus = trip.status;
  let tripStatusParagraph = document.createElement("paragraph");
  tripStatusParagraph.className = "trip-status";
  let tripStatusText = document.createTextNode(`Trip Status: ${tripStatus}`);
  tripStatusParagraph.appendChild(tripStatusText);
  appendToSection(tripStatusParagraph);
}

function renderTripDuration(trip) {
  let tripDuration = trip.duration;
  let tripDurationParagraph = document.createElement("paragraph");
  tripDurationParagraph.className = "trip-duration";
  let tripDurationText = document.createTextNode(
    `Trip Duration: ${tripDuration} days`
  );
  tripDurationParagraph.appendChild(tripDurationText);
  appendToSection(tripDurationParagraph);
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

function renderTotalSpent(travelerDashboardData) {
  let totalAmount = travelerDashboardData.totalAfterAgentFee.toFixed(2);
  let totalSpentParagraph = document.createElement("paragraph");
  totalSpentParagraph.className = "total-spent";
  let totalSpentText = document.createTextNode(
    `Total Amount Spent: $${totalAmount}`
  );
  totalSpentParagraph.appendChild(totalSpentText);
  document.querySelector("body").appendChild(totalSpentParagraph);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naW5faGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxlcl9kYXNoYm9hcmRfaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFtQkUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAtLWhlYWRlci1iZy1jb2xvcjogIzA5NDQ3OTtcXG4gIC0tbWFpbi1iZy1jb2xvcjogIzBiMTcyYTtcXG4gIC0tbWFpbi1ib3JkZXItY29sb3I6ICNiYzQxMjM7XFxuICAtLW1haW4tdHh0LWNvbG9yOiAjZmZmOyB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuICBmb250LWZhbWlseTogXFxcIk94eWdlblxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYm9yZGVyLWNvbG9yKTsgfVxcblxcbmgzIHtcXG4gIGdyaWQtY29sdW1uOiAwO1xcbiAgZ3JpZC1yb3c6IDE7IH1cXG5cXG5pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1ib3JkZXItY29sb3IpOyB9XFxuXFxucCB0ZXh0IHtcXG4gIG1hcmdpbjogNSU7IH1cXG5cXG5zZWN0aW9uOmZpcnN0LW9mLXR5cGUge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAyZnIgMC4xZnIgMC4xZnIgMC4xZnIgMC4xZnI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyOyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWJvcmRlci1jb2xvcik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjJmciAyZnIgMC4xZnIgMC4xZnIgMC4xZnIgMC4xZnI7XFxuICBtYXJnaW46IDMlO1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcblxcbi5kZXN0aW5hdGlvbi1pbWFnZSB7XFxuICBncmlkLXJvdzogMjtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjUwcHg7IH1cXG5cXG4uZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IDVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5oZWFkZXItc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLW1haW4tYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tbWFpbi1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMiU7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB2YXIoLS1tYWluLWJvcmRlci1jb2xvcik7XFxuICBib3JkZXItdG9wOiA1MHB4IHNvbGlkIHZhcigtLW1haW4tYm9yZGVyLWNvbG9yKTtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMyU7IH1cXG5cXG4ubWFpbi1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW4tdG9wOiAzZW07XFxuICBwbGFjZS1pdGVtczogY2VudGVyOyB9XFxuXFxuLnBhc3N3b3JkIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4ucGFzdC10cmlwcyB7XFxuICBncmlkLWNvbHVtbjogMjsgfVxcblxcbi5zaWduaW4ge1xcbiAgbGVmdDogMzglO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNDVweDsgfVxcblxcbi5zdWJtaXQge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50cmlwLWRhdGUge1xcbiAgZ3JpZC1yb3c6IDM7IH1cXG5cXG4udHJpcC1kZXN0aW5hdGlvbiB7XFxuICBncmlkLXJvdzogNDsgfVxcblxcbi50cmlwLWR1cmF0aW9uIHtcXG4gIGdyaWQtcm93OiA1OyB9XFxuXFxuLnRyaXAtc3RhdHVzIHtcXG4gIGdyaWQtcm93OiA2OyB9XFxuXFxuLnRvdGFsLXNwZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLXJvdzogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiA0MCU7IH1cXG5cXG4udHJhdm5hbWUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tYm9yZGVyLWNvbG9yKTsgfVxcblxcbi51c2VybmFtZSB7XFxuICBtYXJnaW4tdG9wOiAtMjBweDsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzNzZweCBtYXgtd2lkdGggNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDE4cHg7IH1cXG4gIC5mb290ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDM0JTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAubG9naW4tZm9ybSB7XFxuICAgIHdpZHRoOiA3NDVweDsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICAuZm9vdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAzLjhlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAubG9naW4tZm9ybSB7XFxuICAgIHdpZHRoOiAzNTlweDsgfSB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBcIi4vY3NzL2Jhc2Uuc2Nzc1wiO1xuaW1wb3J0IHtcbiAgaXNWYWxpZFRyYXZlbGVyLFxuICBnZXRTaW5nbGVUcmF2ZWxlcixcbiAgZ2V0VHJhdmVsZXJUcmlwcyxcbiAgZ2V0VHJhdmVsZXJEZXN0aW5hdGlvbnMsXG59IGZyb20gXCIuL3RyYXZlbF90cmFja2VyX3NlcnZpY2UuanNcIjtcbmltcG9ydCB7IHByZXBhcmVUcmF2ZWxlckRhc2hib2FyZERhdGEgfSBmcm9tIFwiLi90cmF2ZWxlcl9kYXNoYm9hcmRfaGVscGVyXCI7XG5pbXBvcnQge1xuICBpc1ZhbGlkQWdlbmN5LFxuICByZW5kZXJTdWNjZXNzZnVsQWdlbmN5TG9naW4sXG4gIHJlbmRlclRyYXZlbGVyRGFzaGJvYXJkLFxuICBsb2dpbkVycm9yLFxuICBpc1ZhbGlkUGFzc3dvcmQsXG59IGZyb20gXCIuL2xvZ2luX2hlbHBlci5qc1wiO1xuXG5sZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG5cbmJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gcHJvY2Vzc0xvZ2luKCkge1xuICBsZXQgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdXNlcm5hbWVcIikudmFsdWU7XG4gIGxldCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wYXNzd29yZFwiKS52YWx1ZTtcbiAgaWYgKGlzVmFsaWRQYXNzd29yZChwYXNzd29yZElucHV0KSkge1xuICAgIGlzVmFsaWRUcmF2ZWxlcih1c2VybmFtZUlucHV0KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgdmFyIHRyYXZlbGVySWQgPSB1c2VybmFtZUlucHV0LnNsaWNlKDgpO1xuICAgICAgICBnZXRTaW5nbGVUcmF2ZWxlcih0cmF2ZWxlcklkKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBsZXQgdHJhdmVsZXIgPSByZXN1bHQudHJhdmVsZXI7XG4gICAgICAgICAgZ2V0VHJhdmVsZXJUcmlwcyh0cmF2ZWxlcikudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBsZXQgdHJhdmVsZXJUcmlwcyA9IHJlc3VsdC50cmF2ZWxlclRyaXBzO1xuICAgICAgICAgICAgZ2V0VHJhdmVsZXJEZXN0aW5hdGlvbnModHJhdmVsZXJUcmlwcywgdHJhdmVsZXIpLnRoZW4oZnVuY3Rpb24gKFxuICAgICAgICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB2YXIgZGVzdGluYXRpb25zID0gcmVzdWx0LnRyYXZlbGVyRGVzdGluYXRpb25zO1xuICAgICAgICAgICAgICB2YXIgdHJpcHMgPSByZXN1bHQudHJhdmVsZXJUcmlwcztcbiAgICAgICAgICAgICAgbGV0IHRyYXZlbGVyRGFzaGJvYXJkRGF0YSA9IHByZXBhcmVUcmF2ZWxlckRhc2hib2FyZERhdGEoXG4gICAgICAgICAgICAgICAgdHJhdmVsZXIsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICAgICAgICAgIHRyaXBzXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJlbmRlclRyYXZlbGVyRGFzaGJvYXJkKHRyYXZlbGVyRGFzaGJvYXJkRGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGlzVmFsaWRBZ2VuY3kodXNlcm5hbWVJbnB1dCkpIHtcbiAgICAgICAgcmVuZGVyU3VjY2Vzc2Z1bEFnZW5jeUxvZ2luKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2dpbkVycm9yKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbG9naW5FcnJvcigpO1xuICB9XG59O1xuIiwiaW1wb3J0IHtcbiAgcmVuZGVyVHJhdmVsZXJXZWxjb21lLFxuICByZW5kZXJUcmlwc0hlYWRlcixcbiAgcmVuZGVyU3VjY2Vzc2Z1bEFnZW5jeUxvZ2luLFxuICByZW5kZXJUcmlwcyxcbiAgcmVuZGVyVG90YWxTcGVudCxcbn0gZnJvbSBcIi4vdHJhdmVsZXJfZGFzaGJvYXJkX2hlbHBlclwiO1xuXG5mdW5jdGlvbiBpc1ZhbGlkUGFzc3dvcmQocGFzc3dvcmRJbnB1dCkge1xuICB2YXIgY29ycmVjdFB3ID0gXCJ0cmF2ZWwyMDIwXCI7XG4gIGlmIChwYXNzd29yZElucHV0ID09PSBjb3JyZWN0UHcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkQWdlbmN5KHVzZXJuYW1lSW5wdXQpIHtcbiAgbGV0IGFnZW50VW4gPSBcImFnZW5jeVwiO1xuICB2YXIgZG93bmNhc2VkVXNlcm5hbWVJbnB1dCA9IHVzZXJuYW1lSW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgaWYgKGRvd25jYXNlZFVzZXJuYW1lSW5wdXQgPT09IGFnZW50VW4pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5DdXJyZW50RGF0ZSgpIHtcbiAgdmFyIG15RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHZhciBteURhdGVTdHJpbmc7XG4gIG15RGF0ZVN0cmluZyA9XG4gICAgbXlEYXRlLmdldEZ1bGxZZWFyKCkgK1xuICAgIFwiL1wiICtcbiAgICAoXCIwXCIgKyAobXlEYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICtcbiAgICBcIi9cIiArXG4gICAgKFwiMFwiICsgbXlEYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICBsZXQgdG9kYXkgPSBteURhdGVTdHJpbmc7XG4gIHJldHVybiB0b2RheTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuVHJhdkRhdGUoc21hbGxEYXRlKSB7XG4gIGxldCB0cmF2RGF0ZSA9XG4gICAgc21hbGxEYXRlLmdldEZ1bGxZZWFyKCkgK1xuICAgIFwiL1wiICtcbiAgICAoXCIwXCIgKyAoc21hbGxEYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICtcbiAgICBcIi9cIiArXG4gICAgKFwiMFwiICsgc21hbGxEYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICByZXR1cm4gdHJhdkRhdGU7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclBhc3RBbmRVcGNvbWluZ1RyaXBzKHRyYXZlbGVyVHJpcHMpIHtcbiAgbGV0IGk7XG4gIGxldCB1cGNvbWluZ1RyaXBzQXJyID0gW107XG4gIGxldCBwYXN0VHJpcHNBcnIgPSBbXTtcbiAgbGV0IHRvZGF5ID0gcmV0dXJuQ3VycmVudERhdGUoKTtcbiAgZm9yIChpID0gMDsgaSA8IHRyYXZlbGVyVHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgc21hbGxEYXRlID0gbmV3IERhdGUodHJhdmVsZXJUcmlwc1tpXS5kYXRlKTtcbiAgICBsZXQgdHJhdkRhdGUgPSByZXR1cm5UcmF2RGF0ZShzbWFsbERhdGUpO1xuICAgIGlmICh0b2RheSA8IHRyYXZEYXRlKSB7XG4gICAgICB1cGNvbWluZ1RyaXBzQXJyLnB1c2godHJhdmVsZXJUcmlwc1tpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3RUcmlwc0Fyci5wdXNoKHRyYXZlbGVyVHJpcHNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBwYXN0VHJpcHNBcnIsIHVwY29taW5nVHJpcHNBcnIgfTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJhdmVsZXJEYXNoYm9hcmQodHJhdmVsZXJEYXNoYm9hcmREYXRhKSB7XG4gIHJlbmRlclRyYXZlbGVyV2VsY29tZSh0cmF2ZWxlckRhc2hib2FyZERhdGEudHJhdmVsZXIpO1xuICByZW5kZXJUb3RhbFNwZW50KHRyYXZlbGVyRGFzaGJvYXJkRGF0YSk7XG4gIHJlbmRlclRyaXBzSGVhZGVyKFwiVXBjb21pbmdcIik7XG4gIGxldCB0cmlwcyA9IGZpbHRlclBhc3RBbmRVcGNvbWluZ1RyaXBzKHRyYXZlbGVyRGFzaGJvYXJkRGF0YS50cmF2ZWxlclRyaXBzKTtcbiAgbGV0IGRlc3RpbmF0aW9ucyA9IHRyYXZlbGVyRGFzaGJvYXJkRGF0YS50cmF2ZWxlckRlc3RpbmF0aW9ucztcbiAgcmVuZGVyVHJpcHModHJpcHMudXBjb21pbmdUcmlwc0FyciwgZGVzdGluYXRpb25zKTtcbiAgcmVuZGVyVHJpcHNIZWFkZXIoXCJQYXN0XCIpO1xuICByZW5kZXJUcmlwcyh0cmlwcy5wYXN0VHJpcHNBcnIsIGRlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTG9naW5Gb3JtKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXVzZXJuYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wYXNzd29yZFwiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGxvZ2luRXJyb3IoKSB7XG4gIGFsZXJ0KFwiTG9naW4gVW5zdWNjZXNzZnVsIVwiKTtcbiAgY2xlYXJMb2dpbkZvcm0oKTtcbn1cblxuZXhwb3J0IHtcbiAgaXNWYWxpZFBhc3N3b3JkLFxuICBpc1ZhbGlkQWdlbmN5LFxuICByZW5kZXJTdWNjZXNzZnVsQWdlbmN5TG9naW4sXG4gIHJlbmRlclRyYXZlbGVyRGFzaGJvYXJkLFxuICBjbGVhckxvZ2luRm9ybSxcbiAgbG9naW5FcnJvcixcbiAgcmV0dXJuQ3VycmVudERhdGUsXG59OyIsImFzeW5jIGZ1bmN0aW9uIGlzVmFsaWRUcmF2ZWxlcih1c2VybmFtZUlucHV0KSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlclwiO1xuICBjb25zdCB0cmF2ZWxlcnNVcmwgPSBiYXNlVXJsICsgXCIvZGF0YS90cmF2ZWxlcnMvdHJhdmVsZXJzXCI7XG4gIGNvbnN0IHVzZXJJZCA9IHVzZXJuYW1lSW5wdXQuc2xpY2UoOCk7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRyYXZlbGVyc1VybCk7XG4gIGxldCBhd2FpdFJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgbGV0IHRyYXZlbGVycyA9IGF3YWl0UmVzLnRyYXZlbGVycztcbiAgbGV0IGlkVG9OdW0gPSBOdW1iZXIodXNlcklkKTtcbiAgbGV0IGlkc0FycmF5ID0gW107XG4gIGxldCB2YWxpZCA9IGZhbHNlO1xuICB0cmF2ZWxlcnMuZm9yRWFjaCgodHJhdmVsZXIpID0+IHtcbiAgICBpZHNBcnJheS5wdXNoKHRyYXZlbGVyLmlkKTtcbiAgfSk7XG4gIGlkc0FycmF5LmZvckVhY2goKGlkKSA9PiB7XG4gICAgaWYgKGlkVG9OdW0gPT09IGlkKSB7XG4gICAgICB2YWxpZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHZhbGlkO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTaW5nbGVUcmF2ZWxlcigpIHtcbiAgbGV0IGZ1bGxVc2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdXNlcm5hbWVcIik7XG4gIGNvbnN0IHRyYXZlbGVySWROdW1iZXIgPSBmdWxsVXNlcm5hbWUudmFsdWUuc2xpY2UoOCk7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlclwiO1xuICBjb25zdCBzaW5nbGVUcmF2ZWxlclVybCA9XG4gICAgYmFzZVVybCArIGAvZGF0YS90cmF2ZWxlcnMvdHJhdmVsZXJzLyR7dHJhdmVsZXJJZE51bWJlcn1gO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzaW5nbGVUcmF2ZWxlclVybCk7XG4gIGxldCB0cmF2ZWxlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHsgdHJhdmVsZXIgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VHJhdmVsZXJUcmlwcyh0cmF2ZWxlcikge1xuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXJcIjtcbiAgY29uc3QgdHJhdmVsZXJUcmlwc1VybCA9IGJhc2VVcmwgKyBcIi9kYXRhL3RyaXBzL3RyaXBzXCI7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRyYXZlbGVyVHJpcHNVcmwpO1xuICBsZXQgdHJpcEFyciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgbGV0IHRyaXBzID0gdHJpcEFyci50cmlwcztcbiAgbGV0IHRyYXZlbGVyVHJpcHMgPSBbXTtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0cmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0cmlwID0gdHJpcHNbaV07XG4gICAgaWYgKHRyYXZlbGVyLmlkID09PSB0cmlwLnVzZXJJRCkge1xuICAgICAgdHJhdmVsZXJUcmlwcy5wdXNoKHRyaXApO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB0cmF2ZWxlclRyaXBzLCB0cmF2ZWxlciB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUcmF2ZWxlckRlc3RpbmF0aW9ucyh0cmF2ZWxlclRyaXBzLCB0cmF2ZWxlcikge1xuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXJcIjtcbiAgY29uc3QgdHJhdmVsZXJEZXN0aW5hdGlvbnNVcmwgPSBiYXNlVXJsICsgXCIvZGF0YS9kZXN0aW5hdGlvbnMvZGVzdGluYXRpb25zXCI7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRyYXZlbGVyRGVzdGluYXRpb25zVXJsKTtcbiAgbGV0IGRlc3RpbmF0aW9uc1Jlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBsZXQgZGVzdGluYXRpb25zID0gZGVzdGluYXRpb25zUmVzcG9uc2UuZGVzdGluYXRpb25zO1xuICBsZXQgdHJpcERlc3RpbmF0aW9uSWRzID0gW107XG4gIGxldCB0cmF2ZWxlckRlc3RpbmF0aW9ucyA9IFtdO1xuICB0cmF2ZWxlclRyaXBzLmZvckVhY2goKHRyaXApID0+IHRyaXBEZXN0aW5hdGlvbklkcy5wdXNoKHRyaXAuZGVzdGluYXRpb25JRCkpO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGRlc3RpbmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwRGVzdGluYXRpb25JZHMuaW5jbHVkZXMoZGVzdGluYXRpb25zW2ldLmlkKSkge1xuICAgICAgdHJhdmVsZXJEZXN0aW5hdGlvbnMucHVzaChkZXN0aW5hdGlvbnNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyB0cmF2ZWxlclRyaXBzLCB0cmF2ZWxlciwgdHJhdmVsZXJEZXN0aW5hdGlvbnMgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVHJpcHNGb3JBZ2VudCgpIHtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IGFnZW50VHJpcHNVcmwgPSBiYXNlVXJsICsgXCIvZGF0YS90cmlwcy90cmlwc1wiO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhZ2VudFRyaXBzVXJsKTtcbiAgbGV0IGF3YWl0ZWRSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgbGV0IGFsbFRyaXBzID0gYXdhaXRlZFJlc3BvbnNlLnRyaXBzO1xuICByZXR1cm4gYWxsVHJpcHM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbERlc3RpbmF0aW9uc0ZvckFnZW50KCkge1xuICBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXJcIjtcbiAgY29uc3QgYWdlbnREZXN0aW5hdGlvbnNVcmwgPSBiYXNlVXJsICsgXCIvZGF0YS9kZXN0aW5hdGlvbnMvZGVzdGluYXRpb25zXCI7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFnZW50RGVzdGluYXRpb25zVXJsKTtcbiAgbGV0IGRlc3RpbmF0aW9uc1Jlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBsZXQgYWxsRGVzdGluYXRpb25zID0gZGVzdGluYXRpb25zUmVzcG9uc2UuZGVzdGluYXRpb25zO1xuICByZXR1cm4gYWxsRGVzdGluYXRpb25zO1xufVxuXG5leHBvcnQge1xuICBpc1ZhbGlkVHJhdmVsZXIsXG4gIGdldFNpbmdsZVRyYXZlbGVyLFxuICBnZXRUcmF2ZWxlclRyaXBzLFxuICBnZXRUcmF2ZWxlckRlc3RpbmF0aW9ucyxcbiAgZ2V0QWxsVHJpcHNGb3JBZ2VudCxcbiAgZ2V0QWxsRGVzdGluYXRpb25zRm9yQWdlbnQsXG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0QWxsVHJpcHNGb3JBZ2VudCxcbiAgZ2V0QWxsRGVzdGluYXRpb25zRm9yQWdlbnQsXG59IGZyb20gXCIuL3RyYXZlbF90cmFja2VyX3NlcnZpY2VcIjtcbmltcG9ydCB7IHJldHVybkN1cnJlbnREYXRlIH0gZnJvbSBcIi4vbG9naW5faGVscGVyXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclRyYXZlbGVyV2VsY29tZSh0cmF2ZWxlcikge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luLWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvb3RlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGxldCB3ZWxjb21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBsZXQgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBIZWxsbywgJHt0cmF2ZWxlci5uYW1lfWApO1xuICB3ZWxjb21lSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF0uYXBwZW5kQ2hpbGQod2VsY29tZUhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBzSGVhZGVyKHRpdGxlKSB7XG4gIGxldCB1cGNvbWluZ1RyaXBzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICB1cGNvbWluZ1RyaXBzU2VjdGlvbi5jbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xuICBsZXQgdXBjb21pbmdUcmlwc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbGV0IHVwY29taW5nVHJpcHNIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7dGl0bGV9IFRyaXBzOmApO1xuICB1cGNvbWluZ1RyaXBzSGVhZGVyLmFwcGVuZENoaWxkKHVwY29taW5nVHJpcHNIZWFkZXJUZXh0KTtcbiAgdXBjb21pbmdUcmlwc1NlY3Rpb24uYXBwZW5kQ2hpbGQodXBjb21pbmdUcmlwc0hlYWRlcik7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiQk9EWVwiKVswXS5hcHBlbmRDaGlsZCh1cGNvbWluZ1RyaXBzU2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFnZW50V2VsY29tZSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB2YXIgd2VsY29tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIMVwiKTtcbiAgdmFyIGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIldlbGNvbWUsIEFHRU5UXCIpO1xuICB3ZWxjb21lSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdlbGNvbWVIZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRQZW5kaW5nVHJpcHModHJpcHMpIHtcbiAgbGV0IGk7XG4gIGxldCBwZW5kaW5nVHJpcHMgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8IHRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXBzW2ldLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgIHBlbmRpbmdUcmlwcy5wdXNoKHRyaXBzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBlbmRpbmdUcmlwcztcbn1cblxuZnVuY3Rpb24gZ2V0TG9kZ2luZ0Nvc3RzRm9yQWdlbnQoZGVzdGluYXRpb25zLCB0cmlwcykge1xuICBsZXQgYXBwcm92ZWRUcmlwcyA9IFtdO1xuICBsZXQgYXBwcm92ZWRUcmlwc0ZsaWdodFBsdXNMb2RnaW5nID0gW107XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHJpcHNbaV0uc3RhdHVzID09PSBcImFwcHJvdmVkXCIpIHtcbiAgICAgIGFwcHJvdmVkVHJpcHMucHVzaCh0cmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIGxldCBkZXN0aW5hdGlvbkluZGV4O1xuICBmb3IgKGkgPSAwOyBpIDwgYXBwcm92ZWRUcmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAoXG4gICAgICBkZXN0aW5hdGlvbkluZGV4ID0gMDtcbiAgICAgIGRlc3RpbmF0aW9uSW5kZXggPCBkZXN0aW5hdGlvbnMubGVuZ3RoO1xuICAgICAgZGVzdGluYXRpb25JbmRleCsrXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGFwcHJvdmVkVHJpcHNbaV0uZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb25zW2Rlc3RpbmF0aW9uSW5kZXhdLmlkXG4gICAgICApIHtcbiAgICAgICAgYXBwcm92ZWRUcmlwc0ZsaWdodFBsdXNMb2RnaW5nLnB1c2goXG4gICAgICAgICAgZGVzdGluYXRpb25zW2Rlc3RpbmF0aW9uSW5kZXhdLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICtcbiAgICAgICAgICBkZXN0aW5hdGlvbnNbZGVzdGluYXRpb25JbmRleF0uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgYW1vdW50VHJhdmVsZXJzSGF2ZVNwZW50ID0gYXBwcm92ZWRUcmlwc0ZsaWdodFBsdXNMb2RnaW5nLnJlZHVjZShcbiAgICAobG9kZ2luZ0Nvc3QsIGZsaWdodENvc3QpID0+IGxvZGdpbmdDb3N0ICsgZmxpZ2h0Q29zdCxcbiAgICAwXG4gICk7XG4gIGxldCBhbW91bnRBZ2VudEVhcm5lZCA9IGFtb3VudFRyYXZlbGVyc0hhdmVTcGVudCAqIDAuMTtcbiAgcmV0dXJuIGFtb3VudEFnZW50RWFybmVkO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb3RhbEVhcm5lZChhbW91bnRBZ2VudEVhcm5lZCkge1xuICBhbW91bnRBZ2VudEVhcm5lZDtcbiAgbGV0IHRvdGFsQW1vdW50ID0gYW1vdW50QWdlbnRFYXJuZWQudG9GaXhlZCgyKTtcbiAgbGV0IHRvdGFsRWFybmVkUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdG90YWxFYXJuZWRQYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJ0b3RhbC1lYXJuZWRcIjtcbiAgbGV0IHRvdGFsRWFybmVkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUb3RhbCBBbW91bnQgRWFybmVkOiAkJHt0b3RhbEFtb3VudH1gXG4gICk7XG4gIHRvdGFsRWFybmVkUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRvdGFsRWFybmVkVGV4dCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKHRvdGFsRWFybmVkUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWdlbnRUcmlwcyhwZW5kaW5nVHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdUcmlwcy5sZW5ndGg7IGkrKykge1xuICAgIHJlbmRlckRlc3RpbmF0aW9uSW1hZ2UocGVuZGluZ1RyaXBzW2ldLCBkZXN0aW5hdGlvbnMpO1xuICAgIHJlbmRlclRyaXBEYXRlKHBlbmRpbmdUcmlwc1tpXSk7XG4gICAgcmVuZGVyVHJpcERlc3RpbmF0aW9uKHBlbmRpbmdUcmlwc1tpXSwgZGVzdGluYXRpb25zKTtcbiAgICByZW5kZXJUcmlwU3RhdHVzKHBlbmRpbmdUcmlwc1tpXSk7XG4gICAgcmVuZGVyVHJpcER1cmF0aW9uKHBlbmRpbmdUcmlwc1tpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VG9kYXlzVHJpcHModHJpcHMpIHtcbiAgbGV0IHRvZGF5ID0gcmV0dXJuQ3VycmVudERhdGUoKTtcbiAgbGV0IGk7XG4gIGxldCB0b2RheXNUcmlwc0FyciA9IFtdO1xuICBmb3IgKGkgPSAwOyBpIDwgdHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHJpcHNbaV0uZGF0ZSA9PT0gdG9kYXkpIHtcbiAgICAgIHRvZGF5c1RyaXBzQXJyLnB1c2godHJpcHNbaV0pO1xuICAgIH1cbiAgfVxuICBsZXQgdG9kYXlzVHJpcHMgPSB0b2RheXNUcmlwc0FycjtcbiAgcmV0dXJuIHRvZGF5c1RyaXBzO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTdWNjZXNzZnVsQWdlbmN5TG9naW4oKSB7XG4gIHJlbmRlckFnZW50V2VsY29tZSgpO1xuICBnZXRBbGxUcmlwc0ZvckFnZW50KCkudGhlbihmdW5jdGlvbiAodHJpcHMpIHtcbiAgICBnZXRBbGxEZXN0aW5hdGlvbnNGb3JBZ2VudCgpLnRoZW4oZnVuY3Rpb24gKGRlc3RpbmF0aW9ucykge1xuICAgICAgdHJpcHM7XG4gICAgICBsZXQgYW1vdW50QWdlbnRFYXJuZWQgPSBnZXRMb2RnaW5nQ29zdHNGb3JBZ2VudChkZXN0aW5hdGlvbnMsIHRyaXBzKTtcbiAgICAgIHJlbmRlclRvdGFsRWFybmVkKGFtb3VudEFnZW50RWFybmVkKTtcbiAgICAgIHJlbmRlclRyaXBzSGVhZGVyKFwiUmVxdWVzdGVkXCIpO1xuICAgICAgbGV0IHBlbmRpbmdUcmlwcyA9IGdldFBlbmRpbmdUcmlwcyh0cmlwcyk7XG4gICAgICByZW5kZXJBZ2VudFRyaXBzKHBlbmRpbmdUcmlwcywgZGVzdGluYXRpb25zKTtcbiAgICAgIHJlbmRlclRyaXBzSGVhZGVyKFwiVG9kYXknc1wiKTtcbiAgICAgIGxldCB0b2RheXNUcmlwcyA9IGdldFRvZGF5c1RyaXBzKHRyaXBzKTtcbiAgICAgIHJlbmRlckFnZW50VHJpcHModG9kYXlzVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRUb1NlY3Rpb24ocGFyYWdyYXBoKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlNFQ1RJT05cIikubGVuZ3RoID09PSAxKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJTRUNUSU9OXCIpWzBdLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJTRUNUSU9OXCIpWzFdLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcERhdGUodHJpcCkge1xuICBsZXQgdHJpcERhdGUgPSB0cmlwLmRhdGU7XG4gIGxldCB0cmlwRGF0ZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIHRyaXBEYXRlUGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwidHJpcC1kYXRlXCI7XG4gIGxldCB0cmlwRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgVHJpcCBEYXRlOiAke3RyaXBEYXRlfSBgKTtcbiAgdHJpcERhdGVQYXJhZ3JhcGguYXBwZW5kQ2hpbGQodHJpcERhdGVUZXh0KTtcbiAgYXBwZW5kVG9TZWN0aW9uKHRyaXBEYXRlUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcERlc3RpbmF0aW9uKHRyaXAsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IGRlc3RpbmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwLmRlc3RpbmF0aW9uSUQgPT09IGRlc3RpbmF0aW9uc1tpXS5pZCkge1xuICAgICAgbGV0IHRyaXBEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uc1tpXS5kZXN0aW5hdGlvbjtcbiAgICAgIGxldCB0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xuICAgICAgdHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwidHJpcC1kZXN0aW5hdGlvblwiO1xuICAgICAgbGV0IHRyaXBEZXN0aW5hdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgYFRyaXAgRGVzdGluYXRpb246ICR7dHJpcERlc3RpbmF0aW9ufWBcbiAgICAgICk7XG4gICAgICB0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodHJpcERlc3RpbmF0aW9uVGV4dCk7XG4gICAgICBhcHBlbmRUb1NlY3Rpb24odHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcFN0YXR1cyh0cmlwKSB7XG4gIGxldCB0cmlwU3RhdHVzID0gdHJpcC5zdGF0dXM7XG4gIGxldCB0cmlwU3RhdHVzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdHJpcFN0YXR1c1BhcmFncmFwaC5jbGFzc05hbWUgPSBcInRyaXAtc3RhdHVzXCI7XG4gIGxldCB0cmlwU3RhdHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUcmlwIFN0YXR1czogJHt0cmlwU3RhdHVzfWApO1xuICB0cmlwU3RhdHVzUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRyaXBTdGF0dXNUZXh0KTtcbiAgYXBwZW5kVG9TZWN0aW9uKHRyaXBTdGF0dXNQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwRHVyYXRpb24odHJpcCkge1xuICBsZXQgdHJpcER1cmF0aW9uID0gdHJpcC5kdXJhdGlvbjtcbiAgbGV0IHRyaXBEdXJhdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIHRyaXBEdXJhdGlvblBhcmFncmFwaC5jbGFzc05hbWUgPSBcInRyaXAtZHVyYXRpb25cIjtcbiAgbGV0IHRyaXBEdXJhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBgVHJpcCBEdXJhdGlvbjogJHt0cmlwRHVyYXRpb259IGRheXNgXG4gICk7XG4gIHRyaXBEdXJhdGlvblBhcmFncmFwaC5hcHBlbmRDaGlsZCh0cmlwRHVyYXRpb25UZXh0KTtcbiAgYXBwZW5kVG9TZWN0aW9uKHRyaXBEdXJhdGlvblBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlc3RpbmF0aW9uSW1hZ2UodHJpcCwgZGVzdGluYXRpb25zKSB7XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb25zW2ldLmlkKSB7XG4gICAgICBsZXQgZGVzdGluYXRpb25JbWFnZSA9IGRlc3RpbmF0aW9uc1tpXS5pbWFnZTtcbiAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiZGVzdGluYXRpb24taW1hZ2VcIjtcbiAgICAgIGltZy5zcmMgPSBgJHtkZXN0aW5hdGlvbkltYWdlfWA7XG4gICAgICBhcHBlbmRUb1NlY3Rpb24oaW1nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcHModHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVuZGVyRGVzdGluYXRpb25JbWFnZSh0cmlwc1tpXSwgZGVzdGluYXRpb25zKTtcbiAgICByZW5kZXJUcmlwRGF0ZSh0cmlwc1tpXSk7XG4gICAgcmVuZGVyVHJpcERlc3RpbmF0aW9uKHRyaXBzW2ldLCBkZXN0aW5hdGlvbnMpO1xuICAgIHJlbmRlclRyaXBTdGF0dXModHJpcHNbaV0pO1xuICAgIHJlbmRlclRyaXBEdXJhdGlvbih0cmlwc1tpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVG90YWxTcGVudCh0cmF2ZWxlckRhc2hib2FyZERhdGEpIHtcbiAgbGV0IHRvdGFsQW1vdW50ID0gdHJhdmVsZXJEYXNoYm9hcmREYXRhLnRvdGFsQWZ0ZXJBZ2VudEZlZS50b0ZpeGVkKDIpO1xuICBsZXQgdG90YWxTcGVudFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIHRvdGFsU3BlbnRQYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJ0b3RhbC1zcGVudFwiO1xuICBsZXQgdG90YWxTcGVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBgVG90YWwgQW1vdW50IFNwZW50OiAkJHt0b3RhbEFtb3VudH1gXG4gICk7XG4gIHRvdGFsU3BlbnRQYXJhZ3JhcGguYXBwZW5kQ2hpbGQodG90YWxTcGVudFRleHQpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZCh0b3RhbFNwZW50UGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9kZ2luZ0Nvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKSB7XG4gIGxldCBsb2RnaW5nQ29zdHMgPSBbXTtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0cmF2ZWxlckRlc3RpbmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGxvZGdpbmdDb3N0cy5wdXNoKFxuICAgICAgdHJhdmVsZXJEZXN0aW5hdGlvbnNbaV0uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKlxuICAgICAgdHJhdmVsZXJUcmlwc1tpXS5kdXJhdGlvblxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGxvZGdpbmdDb3N0cztcbn1cblxuZnVuY3Rpb24gZ2V0RmxpZ2h0Q29zdHModHJhdmVsZXJEZXN0aW5hdGlvbnMsIHRyYXZlbGVyVHJpcHMpIHtcbiAgbGV0IGZsaWdodENvc3RzID0gW107XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdHJhdmVsZXJEZXN0aW5hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBmbGlnaHRDb3N0cy5wdXNoKFxuICAgICAgdHJhdmVsZXJEZXN0aW5hdGlvbnNbaV0uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqXG4gICAgICB0cmF2ZWxlclRyaXBzW2ldLnRyYXZlbGVyc1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIGZsaWdodENvc3RzO1xufVxuXG5mdW5jdGlvbiBhZGRGbGlnaHRhbmRMb2RnaW5nQ29zdHMoZmxpZ2h0Q29zdHMsIGxvZGdpbmdDb3N0cykge1xuICBsZXQgZmxpZ2h0c1BsdXNMb2RnaW5nID0gW107XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZmxpZ2h0Q29zdHMubGVuZ3RoOyBpKyspIHtcbiAgICBmbGlnaHRzUGx1c0xvZGdpbmcucHVzaChsb2RnaW5nQ29zdHNbaV0gKyBmbGlnaHRDb3N0c1tpXSk7XG4gIH1cbiAgcmV0dXJuIGZsaWdodHNQbHVzTG9kZ2luZztcbn1cblxuZnVuY3Rpb24gcmVkdWNlRmxpZ2h0c1BsdXNMb2RnaW5nKGZsaWdodHNQbHVzTG9kZ2luZykge1xuICBsZXQgZmxpZ2h0c1BsdXNMb2RnaW5nUmVkdWNlZCA9IGZsaWdodHNQbHVzTG9kZ2luZy5yZWR1Y2UoZnVuY3Rpb24gKFxuICAgIGZsaWdodHMsXG4gICAgbG9kZ2luZ1xuICApIHtcbiAgICByZXR1cm4gZmxpZ2h0cyArIGxvZGdpbmc7XG4gIH0sXG4gICAgMCk7XG4gIHJldHVybiBmbGlnaHRzUGx1c0xvZGdpbmdSZWR1Y2VkO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVHJhdmVsZXJEYXNoYm9hcmREYXRhKFxuICB0cmF2ZWxlcixcbiAgdHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gIHRyYXZlbGVyVHJpcHNcbikge1xuICBsZXQgbG9kZ2luZ0Nvc3RzID0gZ2V0TG9kZ2luZ0Nvc3RzKHRyYXZlbGVyRGVzdGluYXRpb25zLCB0cmF2ZWxlclRyaXBzKTtcbiAgbGV0IGZsaWdodENvc3RzID0gZ2V0RmxpZ2h0Q29zdHModHJhdmVsZXJEZXN0aW5hdGlvbnMsIHRyYXZlbGVyVHJpcHMpO1xuICBsZXQgZmxpZ2h0c1BsdXNMb2RnaW5nID0gYWRkRmxpZ2h0YW5kTG9kZ2luZ0Nvc3RzKGZsaWdodENvc3RzLCBsb2RnaW5nQ29zdHMpO1xuICBsZXQgdG90YWxBbW91bnRDdXN0SGFzU3BlbnRCZWZvcmVBZ2VudEZlZSA9IHJlZHVjZUZsaWdodHNQbHVzTG9kZ2luZyhcbiAgICBmbGlnaHRzUGx1c0xvZGdpbmdcbiAgKTtcbiAgdmFyIHRvdGFsQWZ0ZXJBZ2VudEZlZSA9IHRvdGFsQW1vdW50Q3VzdEhhc1NwZW50QmVmb3JlQWdlbnRGZWUgKiAxLjE7XG4gIHJldHVybiB7XG4gICAgdHJhdmVsZXIsXG4gICAgdHJhdmVsZXJUcmlwcyxcbiAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucyxcbiAgICBsb2RnaW5nQ29zdHMsXG4gICAgZmxpZ2h0Q29zdHMsXG4gICAgZmxpZ2h0c1BsdXNMb2RnaW5nLFxuICAgIHRvdGFsQW1vdW50Q3VzdEhhc1NwZW50QmVmb3JlQWdlbnRGZWUsXG4gICAgdG90YWxBZnRlckFnZW50RmVlLFxuICB9O1xufVxuXG5leHBvcnQge1xuICByZW5kZXJUcmF2ZWxlcldlbGNvbWUsXG4gIHJlbmRlclRyaXBzSGVhZGVyLFxuICByZW5kZXJTdWNjZXNzZnVsQWdlbmN5TG9naW4sXG4gIGFwcGVuZFRvU2VjdGlvbixcbiAgcmVuZGVyVHJpcERhdGUsXG4gIHJlbmRlclRyaXBEZXN0aW5hdGlvbixcbiAgcmVuZGVyVHJpcFN0YXR1cyxcbiAgcmVuZGVyVHJpcER1cmF0aW9uLFxuICByZW5kZXJEZXN0aW5hdGlvbkltYWdlLFxuICByZW5kZXJUcmlwcyxcbiAgcmVuZGVyVG90YWxTcGVudCxcbiAgZ2V0TG9kZ2luZ0Nvc3RzLFxuICBnZXRGbGlnaHRDb3N0cyxcbiAgYWRkRmxpZ2h0YW5kTG9kZ2luZ0Nvc3RzLFxuICByZWR1Y2VGbGlnaHRzUGx1c0xvZGdpbmcsXG4gIHByZXBhcmVUcmF2ZWxlckRhc2hib2FyZERhdGEsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==