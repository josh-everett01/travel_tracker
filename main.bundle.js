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
exports.push([module.i, "html {\n  --header-bg-color: #094479;\n  --main-bg-color: #0b172a;\n  --main-border-color: #bc4123;\n  --main-txt-color: #fff; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  background-color: var(--main-bg-color);\n  color: var(--main-txt-color);\n  font-family: \"Oxygen\", sans-serif;\n  font-size: 1.3rem;\n  margin: 0;\n  text-align: center;\n  width: 100%; }\n\nbutton {\n  background-color: var(--main-border-color);\n  border-radius: 20px; }\n\nh3 {\n  grid-column: 0;\n  grid-row: 1; }\n\ni {\n  background-color: var(--header-bg-color);\n  color: var(--main-border-color); }\n\nlabel {\n  font-family: \"Fira Sans\", sans-serif; }\n\np text {\n  margin: 5%; }\n\nsection:first-of-type {\n  align-content: center;\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: auto;\n  grid-template-rows: 0.2fr 2fr 0.1fr 0.1fr 0.1fr 0.1fr;\n  place-items: center; }\n\n.container {\n  align-content: center;\n  border: 2px solid var(--main-border-color);\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 0.2fr 2fr 0.1fr 0.1fr 0.1fr 0.1fr;\n  margin: 5%;\n  max-width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 16px;\n  place-items: center; }\n\n.destination-image {\n  grid-row: 2;\n  height: 200px;\n  width: 250px;\n  margin: 3%; }\n\n.footer {\n  margin-top: 5em;\n  text-align: center; }\n\n.header-section {\n  background-color: var(--header-bg-color);\n  margin-bottom: 10px;\n  padding-bottom: 1px;\n  padding-top: 10px;\n  text-align: center;\n  width: 100%; }\n\n.login-form {\n  border-bottom: 3px solid var(--main-border-color);\n  border-left: 3px solid var(--main-border-color);\n  border-radius: 2%;\n  border-right: 3px solid var(--main-border-color);\n  border-top: 50px solid var(--main-border-color);\n  padding-bottom: 20px;\n  position: relative;\n  text-align: center;\n  width: 450px;\n  margin: auto;\n  margin-top: 3%; }\n\n.main-section {\n  display: grid;\n  margin-top: 3em;\n  place-items: center; }\n\n.password {\n  margin-top: 10px; }\n\n.past-trips {\n  grid-column: 2; }\n\n.signin {\n  left: 38%;\n  position: absolute;\n  top: -45px; }\n\n.submit {\n  border-radius: 20px;\n  color: var(--main-txt-color);\n  cursor: pointer;\n  margin-top: 20px;\n  outline: none;\n  text-align: center; }\n\n.trip-date {\n  grid-row: 3; }\n\n.trip-destination {\n  grid-row: 4; }\n\n.trip-duration {\n  grid-row: 5; }\n\n.trip-status {\n  grid-row: 6; }\n\n.total-spent {\n  display: flex;\n  grid-row: 0;\n  margin: auto;\n  margin-left: 40%; }\n\n.travname {\n  color: var(--main-border-color); }\n\n.username {\n  margin-top: -20px; }\n\n#confirm-trip-request-button {\n  color: var(--main-txt-color); }\n\n#end {\n  grid-row: 4; }\n\n#request-form {\n  display: flex;\n  flex-direction: column; }\n\n#requested-trips {\n  display: flex;\n  flex-direction: column; }\n\n#start {\n  grid-row: 4; }\n\n#trip-request-button {\n  color: var(--main-txt-color); }\n\n@media (min-width: 376px max-width 768px) {\n  body {\n    display: flex;\n    font-size: 18px; }\n  .footer {\n    bottom: 0;\n    left: 34%;\n    position: absolute; }\n  .login-form {\n    width: 745px; } }\n\n@media (max-width: 375px) {\n  body {\n    display: flex;\n    font-size: 18px; }\n  .footer {\n    bottom: 0;\n    left: 3.8em;\n    position: absolute; }\n  .login-form {\n    width: 359px; } }\n", ""]);



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



function renderAgentWelcome() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("footer").style.display = "none";
  var welcomeHeader = document.createElement("H1");
  var headerText = document.createTextNode("Welcome, AGENT");
  welcomeHeader.appendChild(headerText);
  document.body.appendChild(welcomeHeader);
}

function renderAmountAgentEarned(trips, destinations) {
  let amountAgentEarned = getLodgingCostsForAgent(destinations, trips);
  renderTotalEarned(amountAgentEarned);
}

function renderPendingAndTodaysTrips(trips, destinations) {
  let pendingTrips = _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["getPendingTrips"](trips);
  renderAgentTrips(pendingTrips, destinations);
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripsHeader"]("Today's");
  let todaysTrips = _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["getTodaysTrips"](trips);
  renderAgentTrips(todaysTrips, destinations);
}

function renderSuccessfulAgencyLogin() {
  renderAgentWelcome();
  _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getAllTrips"]().then(function (trips) {
    _travel_tracker_service__WEBPACK_IMPORTED_MODULE_0__["getAllDestinations"]().then(function (destinations) {
      trips;
      renderAmountAgentEarned(trips, destinations);
      _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripsHeader"]("Requested");
      renderPendingAndTodaysTrips(trips, destinations);
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

function returnApprovedTripsFlightsAndLodging(destinations, approvedTrips) {
  let approvedTripsFlightPlusLodging = [];
  let destinationIndex;
  for (let i = 0; i < approvedTrips.length; i++) {
    for (
      destinationIndex = 0;
      destinationIndex < destinations.length;
      destinationIndex++
    ) {
      let destinationID = approvedTrips[i].destinationID;
      let destinationIndexId = destinations[destinationIndex].id;
      if (destinationID === destinationIndexId) {
        approvedTripsFlightPlusLodging.push(
          destinations[destinationIndex].estimatedLodgingCostPerDay +
          destinations[destinationIndex].estimatedFlightCostPerPerson
        );
      }
    }
  }
  return approvedTripsFlightPlusLodging;
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
    _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderDestinationImage"](pendingTrips[i], destinations);
    _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripDate"](pendingTrips[i]);
    _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripDestination"](pendingTrips[i], destinations);
    _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripStatus"](pendingTrips[i]);
    _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["renderTripDuration"](pendingTrips[i]);
  }
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
/*! exports provided: renderTripsHeader, getPendingTrips, getTodaysTrips, returnCurrentDate, appendToSection, renderTripDate, renderTripDestination, renderTripStatus, renderTripDuration, renderDestinationImage, renderTrips, filterPastAndUpcomingTrips, returnTravDate, daysBetween, formatEndDate, formatStartDate, renderTripCost, getValuesFromInputs, renderDestinationSearchBar, renderDateSelectInputs, appendToRequestForm, renderNumberOfTravelersInput, createOnClickFunctionAndRenderTrip */
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
  let todaysTripsArr = [];
  for (i = 0; i < trips.length; i++) {
    if (trips[i].date === today) {
      todaysTripsArr.push(trips[i]);
    }
  }
  let todaysTrips = todaysTripsArr;
  return todaysTrips;
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

function appendDestination(tripDestinationParagraph, tripDestinationText) {
  tripDestinationParagraph.appendChild(tripDestinationText);
  appendToSection(tripDestinationParagraph);
}

function createAndAppendTripDestination(tripDestination) {
  let tripDestinationParagraph = document.createElement("paragraph");
  tripDestinationParagraph.className = "trip-destination";
  let tripDestinationText = document.createTextNode(
    `Trip Destination: ${tripDestination}`
  );
  appendDestination(tripDestinationParagraph, tripDestinationText);
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






let button = document.getElementById("submit");

button.onclick = function processLogin() {
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

/***/ "./src/travel_tracker_service.js":
/*!***************************************!*\
  !*** ./src/travel_tracker_service.js ***!
  \***************************************/
/*! exports provided: isValidTraveler, getSingleTraveler, getTravelerTrips, getTravelerDestinations, getAllTrips, getAllDestinations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidTraveler", function() { return isValidTraveler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleTraveler", function() { return getSingleTraveler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTravelerTrips", function() { return getTravelerTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTravelerDestinations", function() { return getTravelerDestinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTrips", function() { return getAllTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDestinations", function() { return getAllDestinations; });
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
  _dashboard_helper__WEBPACK_IMPORTED_MODULE_1__["createOnClickFunctionAndRenderTrip"](
    destinationsArr,
    allTrips
  );
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
  document.getElementById("login-form").style.display = "none";
  document.getElementById("footer").style.display = "none";
  let welcomeHeader = document.createElement("h1");
  let headerText = document.createTextNode(`Hello, ${traveler.name}`);
  welcomeHeader.appendChild(headerText);
  document.getElementsByTagName("BODY")[0].appendChild(welcomeHeader);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWdlbnRfZGFzaGJvYXJkX2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9kYXNoYm9hcmRfaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9naW5faGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxlcl9kYXNoYm9hcmRfaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsU0FBUywrQkFBK0IsNkJBQTZCLGlDQUFpQywyQkFBMkIsRUFBRSxPQUFPLDJCQUEyQixFQUFFLFVBQVUsMkNBQTJDLGlDQUFpQyx3Q0FBd0Msc0JBQXNCLGNBQWMsdUJBQXVCLGdCQUFnQixFQUFFLFlBQVksK0NBQStDLHdCQUF3QixFQUFFLFFBQVEsbUJBQW1CLGdCQUFnQixFQUFFLE9BQU8sNkNBQTZDLG9DQUFvQyxFQUFFLFdBQVcsMkNBQTJDLEVBQUUsWUFBWSxlQUFlLEVBQUUsMkJBQTJCLDBCQUEwQixrQkFBa0IsbUJBQW1CLGdDQUFnQywwREFBMEQsd0JBQXdCLEVBQUUsZ0JBQWdCLDBCQUEwQiwrQ0FBK0Msa0JBQWtCLG1CQUFtQix1Q0FBdUMsMERBQTBELGVBQWUscUJBQXFCLHFCQUFxQix1QkFBdUIsa0JBQWtCLHdCQUF3QixFQUFFLHdCQUF3QixnQkFBZ0Isa0JBQWtCLGlCQUFpQixlQUFlLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUscUJBQXFCLDZDQUE2Qyx3QkFBd0Isd0JBQXdCLHNCQUFzQix1QkFBdUIsZ0JBQWdCLEVBQUUsaUJBQWlCLHNEQUFzRCxvREFBb0Qsc0JBQXNCLHFEQUFxRCxvREFBb0QseUJBQXlCLHVCQUF1Qix1QkFBdUIsaUJBQWlCLGlCQUFpQixtQkFBbUIsRUFBRSxtQkFBbUIsa0JBQWtCLG9CQUFvQix3QkFBd0IsRUFBRSxlQUFlLHFCQUFxQixFQUFFLGlCQUFpQixtQkFBbUIsRUFBRSxhQUFhLGNBQWMsdUJBQXVCLGVBQWUsRUFBRSxhQUFhLHdCQUF3QixpQ0FBaUMsb0JBQW9CLHFCQUFxQixrQkFBa0IsdUJBQXVCLEVBQUUsZ0JBQWdCLGdCQUFnQixFQUFFLHVCQUF1QixnQkFBZ0IsRUFBRSxvQkFBb0IsZ0JBQWdCLEVBQUUsa0JBQWtCLGdCQUFnQixFQUFFLGtCQUFrQixrQkFBa0IsZ0JBQWdCLGlCQUFpQixxQkFBcUIsRUFBRSxlQUFlLG9DQUFvQyxFQUFFLGVBQWUsc0JBQXNCLEVBQUUsa0NBQWtDLGlDQUFpQyxFQUFFLFVBQVUsZ0JBQWdCLEVBQUUsbUJBQW1CLGtCQUFrQiwyQkFBMkIsRUFBRSxzQkFBc0Isa0JBQWtCLDJCQUEyQixFQUFFLFlBQVksZ0JBQWdCLEVBQUUsMEJBQTBCLGlDQUFpQyxFQUFFLCtDQUErQyxVQUFVLG9CQUFvQixzQkFBc0IsRUFBRSxhQUFhLGdCQUFnQixnQkFBZ0IseUJBQXlCLEVBQUUsaUJBQWlCLG1CQUFtQixFQUFFLEVBQUUsK0JBQStCLFVBQVUsb0JBQW9CLHNCQUFzQixFQUFFLGFBQWEsZ0JBQWdCLGtCQUFrQix5QkFBeUIsRUFBRSxpQkFBaUIsbUJBQW1CLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7QUNGN3pHOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLGdCQUFnQjtBQUN2RCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsb0JBQW9CO0FBQ25DLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQW1FO0FBQ1o7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsaUVBQWdDO0FBQ3JEO0FBQ0EsRUFBRSxtRUFBa0M7QUFDcEMsb0JBQW9CLGdFQUErQjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG1FQUFrQztBQUNwQyxJQUFJLDBFQUF5QztBQUM3QztBQUNBO0FBQ0EsTUFBTSxtRUFBa0M7QUFDeEM7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFlBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLElBQUksd0VBQXVDO0FBQzNDLElBQUksZ0VBQStCO0FBQ25DLElBQUksdUVBQXNDO0FBQzFDLElBQUksa0VBQWlDO0FBQ3JDLElBQUksb0VBQW1DO0FBQ3ZDO0FBQ0E7O0FBRXVDOzs7Ozs7Ozs7Ozs7O0FDMUd2QyxjQUFjLG1CQUFPLENBQUMsK01BQXNHOztBQUU1SCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNuQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUU7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELE1BQU07QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsV0FBVztBQUMxRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsK0JBQStCO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hELHdDQUF3QyxNQUFNO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QyxzQ0FBc0MsTUFBTTtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixTQUFTO0FB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QSxhQUFhLGlDQUFpQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBYUUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICAtLWhlYWRlci1iZy1jb2xvcjogIzA5NDQ3OTtcXG4gIC0tbWFpbi1iZy1jb2xvcjogIzBiMTcyYTtcXG4gIC0tbWFpbi1ib3JkZXItY29sb3I6ICNiYzQxMjM7XFxuICAtLW1haW4tdHh0LWNvbG9yOiAjZmZmOyB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuICBmb250LWZhbWlseTogXFxcIk94eWdlblxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IH1cXG5cXG5oMyB7XFxuICBncmlkLWNvbHVtbjogMDtcXG4gIGdyaWQtcm93OiAxOyB9XFxuXFxuaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tYm9yZGVyLWNvbG9yKTsgfVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbnAgdGV4dCB7XFxuICBtYXJnaW46IDUlOyB9XFxuXFxuc2VjdGlvbjpmaXJzdC1vZi10eXBlIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMmZyIDAuMWZyIDAuMWZyIDAuMWZyIDAuMWZyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjsgfVxcblxcbi5jb250YWluZXIge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1ib3JkZXItY29sb3IpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC4yZnIgMmZyIDAuMWZyIDAuMWZyIDAuMWZyIDAuMWZyO1xcbiAgbWFyZ2luOiA1JTtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uZGVzdGluYXRpb24taW1hZ2Uge1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgbWFyZ2luOiAzJTsgfVxcblxcbi5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmhlYWRlci1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iZy1jb2xvcik7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDFweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tbWFpbi1ib3JkZXItY29sb3IpO1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1tYWluLWJvcmRlci1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAyJTtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLW1haW4tYm9yZGVyLWNvbG9yKTtcXG4gIGJvcmRlci10b3A6IDUwcHggc29saWQgdmFyKC0tbWFpbi1ib3JkZXItY29sb3IpO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNDUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiAzJTsgfVxcblxcbi5tYWluLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbi10b3A6IDNlbTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ucGFzc3dvcmQge1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcblxcbi5wYXN0LXRyaXBzIHtcXG4gIGdyaWQtY29sdW1uOiAyOyB9XFxuXFxuLnNpZ25pbiB7XFxuICBsZWZ0OiAzOCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC00NXB4OyB9XFxuXFxuLnN1Ym1pdCB7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRyaXAtZGF0ZSB7XFxuICBncmlkLXJvdzogMzsgfVxcblxcbi50cmlwLWRlc3RpbmF0aW9uIHtcXG4gIGdyaWQtcm93OiA0OyB9XFxuXFxuLnRyaXAtZHVyYXRpb24ge1xcbiAgZ3JpZC1yb3c6IDU7IH1cXG5cXG4udHJpcC1zdGF0dXMge1xcbiAgZ3JpZC1yb3c6IDY7IH1cXG5cXG4udG90YWwtc3BlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtcm93OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDQwJTsgfVxcblxcbi50cmF2bmFtZSB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1ib3JkZXItY29sb3IpOyB9XFxuXFxuLnVzZXJuYW1lIHtcXG4gIG1hcmdpbi10b3A6IC0yMHB4OyB9XFxuXFxuI2NvbmZpcm0tdHJpcC1yZXF1ZXN0LWJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpOyB9XFxuXFxuI2VuZCB7XFxuICBncmlkLXJvdzogNDsgfVxcblxcbiNyZXF1ZXN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4jcmVxdWVzdGVkLXRyaXBzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuI3N0YXJ0IHtcXG4gIGdyaWQtcm93OiA0OyB9XFxuXFxuI3RyaXAtcmVxdWVzdC1idXR0b24ge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTsgfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzNzZweCBtYXgtd2lkdGggNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDE4cHg7IH1cXG4gIC5mb290ZXIge1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDM0JTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAubG9naW4tZm9ybSB7XFxuICAgIHdpZHRoOiA3NDVweDsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICBib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICAuZm9vdGVyIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAzLjhlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XFxuICAubG9naW4tZm9ybSB7XFxuICAgIHdpZHRoOiAzNTlweDsgfSB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCAqIGFzIHRyYXZlbF90cmFja2VyX3NlcnZpY2UgZnJvbSBcIi4vdHJhdmVsX3RyYWNrZXJfc2VydmljZVwiO1xuaW1wb3J0ICogYXMgZGFzaGJvYXJkX2hlbHBlciBmcm9tIFwiLi9kYXNoYm9hcmRfaGVscGVyXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFnZW50V2VsY29tZSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB2YXIgd2VsY29tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJIMVwiKTtcbiAgdmFyIGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIldlbGNvbWUsIEFHRU5UXCIpO1xuICB3ZWxjb21lSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdlbGNvbWVIZWFkZXIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBbW91bnRBZ2VudEVhcm5lZCh0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGxldCBhbW91bnRBZ2VudEVhcm5lZCA9IGdldExvZGdpbmdDb3N0c0ZvckFnZW50KGRlc3RpbmF0aW9ucywgdHJpcHMpO1xuICByZW5kZXJUb3RhbEVhcm5lZChhbW91bnRBZ2VudEVhcm5lZCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBlbmRpbmdBbmRUb2RheXNUcmlwcyh0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGxldCBwZW5kaW5nVHJpcHMgPSBkYXNoYm9hcmRfaGVscGVyLmdldFBlbmRpbmdUcmlwcyh0cmlwcyk7XG4gIHJlbmRlckFnZW50VHJpcHMocGVuZGluZ1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICBkYXNoYm9hcmRfaGVscGVyLnJlbmRlclRyaXBzSGVhZGVyKFwiVG9kYXknc1wiKTtcbiAgbGV0IHRvZGF5c1RyaXBzID0gZGFzaGJvYXJkX2hlbHBlci5nZXRUb2RheXNUcmlwcyh0cmlwcyk7XG4gIHJlbmRlckFnZW50VHJpcHModG9kYXlzVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN1Y2Nlc3NmdWxBZ2VuY3lMb2dpbigpIHtcbiAgcmVuZGVyQWdlbnRXZWxjb21lKCk7XG4gIHRyYXZlbF90cmFja2VyX3NlcnZpY2UuZ2V0QWxsVHJpcHMoKS50aGVuKGZ1bmN0aW9uICh0cmlwcykge1xuICAgIHRyYXZlbF90cmFja2VyX3NlcnZpY2UuZ2V0QWxsRGVzdGluYXRpb25zKCkudGhlbihmdW5jdGlvbiAoZGVzdGluYXRpb25zKSB7XG4gICAgICB0cmlwcztcbiAgICAgIHJlbmRlckFtb3VudEFnZW50RWFybmVkKHRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuICAgICAgZGFzaGJvYXJkX2hlbHBlci5yZW5kZXJUcmlwc0hlYWRlcihcIlJlcXVlc3RlZFwiKTtcbiAgICAgIHJlbmRlclBlbmRpbmdBbmRUb2RheXNUcmlwcyh0cmlwcywgZGVzdGluYXRpb25zKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJldHVybkFwcHJvdmVkVHJpcHModHJpcHMpIHtcbiAgbGV0IGFwcHJvdmVkVHJpcHMgPSBbXTtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0cmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwc1tpXS5zdGF0dXMgPT09IFwiYXBwcm92ZWRcIikge1xuICAgICAgYXBwcm92ZWRUcmlwcy5wdXNoKHRyaXBzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFwcHJvdmVkVHJpcHM7XG59XG5cbmZ1bmN0aW9uIHJldHVybkFwcHJvdmVkVHJpcHNGbGlnaHRzQW5kTG9kZ2luZyhkZXN0aW5hdGlvbnMsIGFwcHJvdmVkVHJpcHMpIHtcbiAgbGV0IGFwcHJvdmVkVHJpcHNGbGlnaHRQbHVzTG9kZ2luZyA9IFtdO1xuICBsZXQgZGVzdGluYXRpb25JbmRleDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHByb3ZlZFRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChcbiAgICAgIGRlc3RpbmF0aW9uSW5kZXggPSAwO1xuICAgICAgZGVzdGluYXRpb25JbmRleCA8IGRlc3RpbmF0aW9ucy5sZW5ndGg7XG4gICAgICBkZXN0aW5hdGlvbkluZGV4KytcbiAgICApIHtcbiAgICAgIGxldCBkZXN0aW5hdGlvbklEID0gYXBwcm92ZWRUcmlwc1tpXS5kZXN0aW5hdGlvbklEO1xuICAgICAgbGV0IGRlc3RpbmF0aW9uSW5kZXhJZCA9IGRlc3RpbmF0aW9uc1tkZXN0aW5hdGlvbkluZGV4XS5pZDtcbiAgICAgIGlmIChkZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbkluZGV4SWQpIHtcbiAgICAgICAgYXBwcm92ZWRUcmlwc0ZsaWdodFBsdXNMb2RnaW5nLnB1c2goXG4gICAgICAgICAgZGVzdGluYXRpb25zW2Rlc3RpbmF0aW9uSW5kZXhdLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICtcbiAgICAgICAgICBkZXN0aW5hdGlvbnNbZGVzdGluYXRpb25JbmRleF0uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXBwcm92ZWRUcmlwc0ZsaWdodFBsdXNMb2RnaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRMb2RnaW5nQ29zdHNGb3JBZ2VudChkZXN0aW5hdGlvbnMsIHRyaXBzKSB7XG4gIGxldCBhcHByb3ZlZFRyaXBzID0gcmV0dXJuQXBwcm92ZWRUcmlwcyh0cmlwcyk7XG4gIGxldCBhcHByb3ZlZFRyaXBzRmxpZ2h0c1BsdXNMb2RnaW5nID0gcmV0dXJuQXBwcm92ZWRUcmlwc0ZsaWdodHNBbmRMb2RnaW5nKFxuICAgIGRlc3RpbmF0aW9ucyxcbiAgICBhcHByb3ZlZFRyaXBzXG4gICk7XG4gIGxldCBhbW91bnRUcmF2ZWxlcnNIYXZlU3BlbnQgPSBhcHByb3ZlZFRyaXBzRmxpZ2h0c1BsdXNMb2RnaW5nLnJlZHVjZShcbiAgICAobG9kZ2luZ0Nvc3QsIGZsaWdodENvc3QpID0+IGxvZGdpbmdDb3N0ICsgZmxpZ2h0Q29zdCxcbiAgICAwXG4gICk7XG4gIGxldCBhbW91bnRBZ2VudEVhcm5lZCA9IGFtb3VudFRyYXZlbGVyc0hhdmVTcGVudCAqIDAuMTtcbiAgcmV0dXJuIGFtb3VudEFnZW50RWFybmVkO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb3RhbEVhcm5lZChhbW91bnRBZ2VudEVhcm5lZCkge1xuICBhbW91bnRBZ2VudEVhcm5lZDtcbiAgbGV0IHRvdGFsQW1vdW50ID0gYW1vdW50QWdlbnRFYXJuZWQudG9GaXhlZCgyKTtcbiAgbGV0IHRvdGFsRWFybmVkUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdG90YWxFYXJuZWRQYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJ0b3RhbC1lYXJuZWRcIjtcbiAgbGV0IHRvdGFsRWFybmVkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUb3RhbCBBbW91bnQgRWFybmVkOiAkJHt0b3RhbEFtb3VudH1gXG4gICk7XG4gIHRvdGFsRWFybmVkUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRvdGFsRWFybmVkVGV4dCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKHRvdGFsRWFybmVkUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQWdlbnRUcmlwcyhwZW5kaW5nVHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdUcmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGRhc2hib2FyZF9oZWxwZXIucmVuZGVyRGVzdGluYXRpb25JbWFnZShwZW5kaW5nVHJpcHNbaV0sIGRlc3RpbmF0aW9ucyk7XG4gICAgZGFzaGJvYXJkX2hlbHBlci5yZW5kZXJUcmlwRGF0ZShwZW5kaW5nVHJpcHNbaV0pO1xuICAgIGRhc2hib2FyZF9oZWxwZXIucmVuZGVyVHJpcERlc3RpbmF0aW9uKHBlbmRpbmdUcmlwc1tpXSwgZGVzdGluYXRpb25zKTtcbiAgICBkYXNoYm9hcmRfaGVscGVyLnJlbmRlclRyaXBTdGF0dXMocGVuZGluZ1RyaXBzW2ldKTtcbiAgICBkYXNoYm9hcmRfaGVscGVyLnJlbmRlclRyaXBEdXJhdGlvbihwZW5kaW5nVHJpcHNbaV0pO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlclN1Y2Nlc3NmdWxBZ2VuY3lMb2dpbiB9O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICogYXMgdHJhdmVsX3RyYWNrZXJfc2VydmljZSBmcm9tIFwiLi90cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBzSGVhZGVyKHRpdGxlKSB7XG4gIGxldCB1cGNvbWluZ1RyaXBzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICB1cGNvbWluZ1RyaXBzU2VjdGlvbi5jbGFzc05hbWUgPSBcImNvbnRhaW5lclwiO1xuICBsZXQgdXBjb21pbmdUcmlwc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbGV0IHVwY29taW5nVHJpcHNIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7dGl0bGV9IFRyaXBzOmApO1xuICBhcHBlbmRIZWFkZXIoXG4gICAgdXBjb21pbmdUcmlwc1NlY3Rpb24sXG4gICAgdXBjb21pbmdUcmlwc0hlYWRlcixcbiAgICB1cGNvbWluZ1RyaXBzSGVhZGVyVGV4dFxuICApO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRIZWFkZXIoXG4gIHVwY29taW5nVHJpcHNTZWN0aW9uLFxuICB1cGNvbWluZ1RyaXBzSGVhZGVyLFxuICB1cGNvbWluZ1RyaXBzSGVhZGVyVGV4dFxuKSB7XG4gIHVwY29taW5nVHJpcHNIZWFkZXIuYXBwZW5kQ2hpbGQodXBjb21pbmdUcmlwc0hlYWRlclRleHQpO1xuICB1cGNvbWluZ1RyaXBzU2VjdGlvbi5hcHBlbmRDaGlsZCh1cGNvbWluZ1RyaXBzSGVhZGVyKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJCT0RZXCIpWzBdLmFwcGVuZENoaWxkKHVwY29taW5nVHJpcHNTZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGVuZGluZ1RyaXBzKHRyaXBzKSB7XG4gIGxldCBpO1xuICBsZXQgcGVuZGluZ1RyaXBzID0gW107XG4gIGZvciAoaSA9IDA7IGkgPCB0cmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0cmlwc1tpXS5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB7XG4gICAgICBwZW5kaW5nVHJpcHMucHVzaCh0cmlwc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwZW5kaW5nVHJpcHM7XG59XG5cbmZ1bmN0aW9uIGdldFRvZGF5c1RyaXBzKHRyaXBzKSB7XG4gIGxldCB0b2RheSA9IHJldHVybkN1cnJlbnREYXRlKCk7XG4gIGxldCBpO1xuICBsZXQgdG9kYXlzVHJpcHNBcnIgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8IHRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXBzW2ldLmRhdGUgPT09IHRvZGF5KSB7XG4gICAgICB0b2RheXNUcmlwc0Fyci5wdXNoKHRyaXBzW2ldKTtcbiAgICB9XG4gIH1cbiAgbGV0IHRvZGF5c1RyaXBzID0gdG9kYXlzVHJpcHNBcnI7XG4gIHJldHVybiB0b2RheXNUcmlwcztcbn1cblxuZnVuY3Rpb24gcmV0dXJuQ3VycmVudERhdGUoKSB7XG4gIHZhciBteURhdGUgPSBuZXcgRGF0ZSgpO1xuICB2YXIgbXlEYXRlU3RyaW5nO1xuICBteURhdGVTdHJpbmcgPVxuICAgIG15RGF0ZS5nZXRGdWxsWWVhcigpICtcbiAgICBcIi9cIiArXG4gICAgKFwiMFwiICsgKG15RGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArXG4gICAgXCIvXCIgK1xuICAgIChcIjBcIiArIG15RGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKTtcbiAgbGV0IHRvZGF5ID0gbXlEYXRlU3RyaW5nO1xuICByZXR1cm4gdG9kYXk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvU2VjdGlvbihwYXJhZ3JhcGgpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiU0VDVElPTlwiKS5sZW5ndGggPT09IDEpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlNFQ1RJT05cIilbMF0uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlNFQ1RJT05cIilbMV0uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwRGF0ZSh0cmlwKSB7XG4gIGxldCB0cmlwRGF0ZSA9IHRyaXAuZGF0ZTtcbiAgbGV0IHRyaXBEYXRlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdHJpcERhdGVQYXJhZ3JhcGguY2xhc3NOYW1lID0gXCJ0cmlwLWRhdGVcIjtcbiAgbGV0IHRyaXBEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUcmlwIERhdGU6ICR7dHJpcERhdGV9IGApO1xuICB0cmlwRGF0ZVBhcmFncmFwaC5hcHBlbmRDaGlsZCh0cmlwRGF0ZVRleHQpO1xuICBhcHBlbmRUb1NlY3Rpb24odHJpcERhdGVQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmREZXN0aW5hdGlvbih0cmlwRGVzdGluYXRpb25QYXJhZ3JhcGgsIHRyaXBEZXN0aW5hdGlvblRleHQpIHtcbiAgdHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRyaXBEZXN0aW5hdGlvblRleHQpO1xuICBhcHBlbmRUb1NlY3Rpb24odHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kQXBwZW5kVHJpcERlc3RpbmF0aW9uKHRyaXBEZXN0aW5hdGlvbikge1xuICBsZXQgdHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdHJpcERlc3RpbmF0aW9uUGFyYWdyYXBoLmNsYXNzTmFtZSA9IFwidHJpcC1kZXN0aW5hdGlvblwiO1xuICBsZXQgdHJpcERlc3RpbmF0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUcmlwIERlc3RpbmF0aW9uOiAke3RyaXBEZXN0aW5hdGlvbn1gXG4gICk7XG4gIGFwcGVuZERlc3RpbmF0aW9uKHRyaXBEZXN0aW5hdGlvblBhcmFncmFwaCwgdHJpcERlc3RpbmF0aW9uVGV4dCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBEZXN0aW5hdGlvbih0cmlwLCBkZXN0aW5hdGlvbnMpIHtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCBkZXN0aW5hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbnNbaV0uaWQpIHtcbiAgICAgIGxldCB0cmlwRGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbnNbaV0uZGVzdGluYXRpb247XG4gICAgICBjcmVhdGVBbmRBcHBlbmRUcmlwRGVzdGluYXRpb24odHJpcERlc3RpbmF0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcFN0YXR1cyh0cmlwKSB7XG4gIGxldCB0cmlwU3RhdHVzID0gdHJpcC5zdGF0dXM7XG4gIGxldCB0cmlwU3RhdHVzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdHJpcFN0YXR1c1BhcmFncmFwaC5jbGFzc05hbWUgPSBcInRyaXAtc3RhdHVzXCI7XG4gIGxldCB0cmlwU3RhdHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUcmlwIFN0YXR1czogJHt0cmlwU3RhdHVzfWApO1xuICB0cmlwU3RhdHVzUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRyaXBTdGF0dXNUZXh0KTtcbiAgYXBwZW5kVG9TZWN0aW9uKHRyaXBTdGF0dXNQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwRHVyYXRpb24odHJpcCkge1xuICBsZXQgdHJpcER1cmF0aW9uID0gdHJpcC5kdXJhdGlvbjtcbiAgbGV0IHRyaXBEdXJhdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwYXJhZ3JhcGhcIik7XG4gIHRyaXBEdXJhdGlvblBhcmFncmFwaC5jbGFzc05hbWUgPSBcInRyaXAtZHVyYXRpb25cIjtcbiAgbGV0IHRyaXBEdXJhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBgVHJpcCBEdXJhdGlvbjogJHt0cmlwRHVyYXRpb259IGRheXNgXG4gICk7XG4gIHRyaXBEdXJhdGlvblBhcmFncmFwaC5hcHBlbmRDaGlsZCh0cmlwRHVyYXRpb25UZXh0KTtcbiAgYXBwZW5kVG9TZWN0aW9uKHRyaXBEdXJhdGlvblBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlc3RpbmF0aW9uSW1hZ2UodHJpcCwgZGVzdGluYXRpb25zKSB7XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb25zW2ldLmlkKSB7XG4gICAgICBsZXQgZGVzdGluYXRpb25JbWFnZSA9IGRlc3RpbmF0aW9uc1tpXS5pbWFnZTtcbiAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLmNsYXNzTmFtZSA9IFwiZGVzdGluYXRpb24taW1hZ2VcIjtcbiAgICAgIGltZy5zcmMgPSBgJHtkZXN0aW5hdGlvbkltYWdlfWA7XG4gICAgICBhcHBlbmRUb1NlY3Rpb24oaW1nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcHModHJpcHMsIGRlc3RpbmF0aW9ucykge1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVuZGVyRGVzdGluYXRpb25JbWFnZSh0cmlwc1tpXSwgZGVzdGluYXRpb25zKTtcbiAgICByZW5kZXJUcmlwRGF0ZSh0cmlwc1tpXSk7XG4gICAgcmVuZGVyVHJpcERlc3RpbmF0aW9uKHRyaXBzW2ldLCBkZXN0aW5hdGlvbnMpO1xuICAgIHJlbmRlclRyaXBTdGF0dXModHJpcHNbaV0pO1xuICAgIHJlbmRlclRyaXBEdXJhdGlvbih0cmlwc1tpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0dXJuVHJhdkRhdGUoc21hbGxEYXRlKSB7XG4gIGxldCB0cmF2RGF0ZSA9XG4gICAgc21hbGxEYXRlLmdldEZ1bGxZZWFyKCkgK1xuICAgIFwiL1wiICtcbiAgICAoXCIwXCIgKyAoc21hbGxEYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICtcbiAgICBcIi9cIiArXG4gICAgKFwiMFwiICsgc21hbGxEYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpO1xuICByZXR1cm4gdHJhdkRhdGU7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclBhc3RBbmRVcGNvbWluZ1RyaXBzKHRyYXZlbGVyVHJpcHMpIHtcbiAgbGV0IHVwY29taW5nVHJpcHNBcnIgPSBbXTtcbiAgbGV0IHBhc3RUcmlwc0FyciA9IFtdO1xuICBsZXQgdG9kYXkgPSByZXR1cm5DdXJyZW50RGF0ZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYXZlbGVyVHJpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgc21hbGxEYXRlID0gbmV3IERhdGUodHJhdmVsZXJUcmlwc1tpXS5kYXRlKTtcbiAgICBsZXQgdHJhdkRhdGUgPSByZXR1cm5UcmF2RGF0ZShzbWFsbERhdGUpO1xuICAgIGlmICh0b2RheSA8IHRyYXZEYXRlKSB7XG4gICAgICB1cGNvbWluZ1RyaXBzQXJyLnB1c2godHJhdmVsZXJUcmlwc1tpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3RUcmlwc0Fyci5wdXNoKHRyYXZlbGVyVHJpcHNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBwYXN0VHJpcHNBcnIsIHVwY29taW5nVHJpcHNBcnIgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcnQoZm9ybWF0dGVkRW5kRGF0ZSkge1xuICBsZXQgc3RhcnQgPSBEYXRlLlVUQyhcbiAgICBmb3JtYXR0ZWRFbmREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgZm9ybWF0dGVkRW5kRGF0ZS5nZXRNb250aCgpLFxuICAgIGZvcm1hdHRlZEVuZERhdGUuZ2V0RGF0ZSgpXG4gICk7XG4gIHJldHVybiBzdGFydDtcbn1cblxuZnVuY3Rpb24gZ2V0RW5kKGZvcm1hdHRlZFN0YXJ0RGF0ZSkge1xuICBsZXQgZW5kID0gRGF0ZS5VVEMoXG4gICAgZm9ybWF0dGVkU3RhcnREYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgZm9ybWF0dGVkU3RhcnREYXRlLmdldE1vbnRoKCksXG4gICAgZm9ybWF0dGVkU3RhcnREYXRlLmdldERhdGUoKVxuICApO1xuICByZXR1cm4gZW5kO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRTdGFydERhdGUodHJpcFJlcXVlc3RTdGFydERhdGUpIHtcbiAgbGV0IGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXBSZXF1ZXN0U3RhcnREYXRlKTtcbiAgZm9ybWF0dGVkU3RhcnREYXRlID0gbmV3IERhdGUoXG4gICAgZm9ybWF0dGVkU3RhcnREYXRlLmdldFRpbWUoKSArXG4gICAgZm9ybWF0dGVkU3RhcnREYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMFxuICApO1xuICByZXR1cm4gZm9ybWF0dGVkU3RhcnREYXRlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRFbmREYXRlKHRyaXBSZXF1ZXN0RW5kRGF0ZSkge1xuICBsZXQgZm9ybWF0dGVkRW5kRGF0ZSA9IG5ldyBEYXRlKHRyaXBSZXF1ZXN0RW5kRGF0ZSk7XG4gIGZvcm1hdHRlZEVuZERhdGUgPSBuZXcgRGF0ZShcbiAgICBmb3JtYXR0ZWRFbmREYXRlLmdldFRpbWUoKSArIGZvcm1hdHRlZEVuZERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwXG4gICk7XG4gIHJldHVybiBmb3JtYXR0ZWRFbmREYXRlO1xufVxuXG5mdW5jdGlvbiBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcbiAgbGV0IGZvcm1hdHRlZFN0YXJ0RGF0ZSA9IGZvcm1hdFN0YXJ0RGF0ZShzdGFydERhdGUpO1xuICBsZXQgZm9ybWF0dGVkRW5kRGF0ZSA9IGZvcm1hdEVuZERhdGUoZW5kRGF0ZSk7XG4gIGNvbnN0IG9uZURheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XG4gIGxldCBzdGFydCA9IGdldFN0YXJ0KGZvcm1hdHRlZEVuZERhdGUpO1xuICBsZXQgZW5kID0gZ2V0RW5kKGZvcm1hdHRlZFN0YXJ0RGF0ZSk7XG4gIGxldCBkYXlzQmV0d2VlbiA9IChzdGFydCAtIGVuZCkgLyBvbmVEYXk7XG4gIHJldHVybiBkYXlzQmV0d2Vlbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcENvc3QoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpIHtcbiAgbGV0IGNvc3RzID0gY2FsY3VsYXRlVHJpcFJlcXVlc3RDb3N0cyhkZXN0aW5hdGlvbiwgdHJpcFJlcXVlc3REYXRhLCBhbGxUcmlwcyk7XG4gIGxldCB0b3RhbENvc3ROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYFRvdGFsIEVzdGltYXRlZCBUcmlwIENvc3Q6ICQke2Nvc3RzLnRvdGFsVHJpcENvc3QudG9GaXhlZCgyKX1gXG4gICk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdGVkLXRyaXBzXCIpLmFwcGVuZENoaWxkKHRvdGFsQ29zdE5vZGUpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNGcm9tSW5wdXRzKCkge1xuICBsZXQgdHJpcFJlcXVlc3REZXN0aW5hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdGluYXRpb25cIikudmFsdWU7XG4gIGxldCB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRcIikudmFsdWU7XG4gIGxldCB0cmlwUmVxdWVzdEVuZERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZFwiKS52YWx1ZTtcbiAgbGV0IG51bWJlck9mVHJhdmVsZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXItb2YtdHJhdnNcIikudmFsdWU7XG4gIGxldCB2YWx1ZXMgPSB7XG4gICAgdHJpcFJlcXVlc3REZXN0aW5hdGlvbixcbiAgICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gICAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gIH07XG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFuZFJldHVybkNvc3RzKFxuICBudW1iZXJPZlRyYXZlbGVycyxcbiAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gIHRyaXBSZXF1ZXN0RW5kRGF0ZSxcbiAgZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbixcbiAgZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXlcbikge1xuICBsZXQgZmxpZ2h0Q29zdHMgPSBudW1iZXJPZlRyYXZlbGVycyAqIGVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gIGxldCBsb2RnaW5nQ29zdHNQZXJEYXkgPSBudW1iZXJPZlRyYXZlbGVycyAqIGVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5O1xuICBsZXQgdG90YWxMb2RnaW5nQ29zdHMgPVxuICAgIGxvZGdpbmdDb3N0c1BlckRheSAqIGRheXNCZXR3ZWVuKHRyaXBSZXF1ZXN0U3RhcnREYXRlLCB0cmlwUmVxdWVzdEVuZERhdGUpO1xuICBsZXQgY29zdEJlZm9yZUFnZW50RmVlID0gZmxpZ2h0Q29zdHMgKyB0b3RhbExvZGdpbmdDb3N0cztcbiAgbGV0IGFnZW50RmVlID0gY29zdEJlZm9yZUFnZW50RmVlICogMC4xO1xuICBsZXQgdG90YWxUcmlwQ29zdCA9IGNvc3RCZWZvcmVBZ2VudEZlZSArIGFnZW50RmVlO1xuICBsZXQgY29zdHMgPSB7XG4gICAgZmxpZ2h0Q29zdHMsXG4gICAgbG9kZ2luZ0Nvc3RzUGVyRGF5LFxuICAgIHRvdGFsTG9kZ2luZ0Nvc3RzLFxuICAgIGNvc3RCZWZvcmVBZ2VudEZlZSxcbiAgICBhZ2VudEZlZSxcbiAgICB0b3RhbFRyaXBDb3N0LFxuICB9O1xuICByZXR1cm4gY29zdHM7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVRyaXBSZXF1ZXN0Q29zdHMoZGVzdGluYXRpb24pIHtcbiAgbGV0IHZhbHVlcyA9IGdldFZhbHVlc0Zyb21JbnB1dHMoKTtcbiAgbGV0IG51bWJlck9mVHJhdmVsZXJzID0gdmFsdWVzLm51bWJlck9mVHJhdmVsZXJzO1xuICBsZXQgdHJpcFJlcXVlc3RTdGFydERhdGUgPSB2YWx1ZXMudHJpcFJlcXVlc3RTdGFydERhdGU7XG4gIGxldCB0cmlwUmVxdWVzdEVuZERhdGUgPSB2YWx1ZXMudHJpcFJlcXVlc3RFbmREYXRlO1xuICBsZXQgZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gIGxldCBlc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5O1xuICBsZXQgY29zdHMgPSBjYWxjdWxhdGVBbmRSZXR1cm5Db3N0cyhcbiAgICBudW1iZXJPZlRyYXZlbGVycyxcbiAgICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gICAgZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbixcbiAgICBlc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheVxuICApO1xuICByZXR1cm4gY29zdHM7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRvUmVxdWVzdEZvcm0oZWxlbWVudCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3QtZm9ybVwiKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVyTGFiZWwoYXR0cmlidXRlLCB0ZXh0KSB7XG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGF0dHJpYnV0ZSk7XG4gIGxldCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgbGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgc2V0SWRBbmRDbGFzc29mUmVxdWVzdEZvcm0oKTtcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybShsYWJlbCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlclN0YXJ0RGF0ZUlucHV0KHRvZGF5KSB7XG4gIGxldCBzdGFydERhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3RhcnREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIHN0YXJ0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhcnRcIik7XG4gIHN0YXJ0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0cmlwLXN0YXJ0XCIpO1xuICBzdGFydERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBgJHt0b2RheX1gKTtcbiAgc3RhcnREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIGAke3RvZGF5fWApO1xuICBzdGFydERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIyMDIxLTEyLTMxXCIpO1xuICBhcHBlbmRUb1JlcXVlc3RGb3JtKHN0YXJ0RGF0ZUlucHV0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVyVHJpcEVuZExhYmVsKCkge1xuICBsZXQgdHJpcEVuZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0cmlwRW5kTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidHJpcC1lbmRcIik7XG4gIGFwcGVuZFRvUmVxdWVzdEZvcm0odHJpcEVuZExhYmVsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5kUmVuZGVyRW5kRGF0ZUlucHV0KHRvZGF5KSB7XG4gIGxldCBlbmREYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVuZERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZW5kRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW5kXCIpO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRyaXAtZW5kXCIpO1xuICBlbmREYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYCR7dG9kYXl9YCk7XG4gIGVuZERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgYCR7dG9kYXl9YCk7XG4gIGVuZERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIyMDIzLTEyLTMxXCIpO1xuICBhcHBlbmRUb1JlcXVlc3RGb3JtKGVuZERhdGVJbnB1dCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRhdGVTZWxlY3RJbnB1dHMoKSB7XG4gIGNyZWF0ZUFuZFJlbmRlckxhYmVsKFwidHJpcC1kdXJhdGlvblwiLCBcIlBsZWFzZSBzZWxlY3QgYSBzdGFydCBhbmQgZW5kIGRhdGU6XCIpO1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICBjcmVhdGVBbmRSZW5kZXJTdGFydERhdGVJbnB1dCh0b2RheSk7XG4gIGNyZWF0ZUFuZFJlbmRlclRyaXBFbmRMYWJlbCgpO1xuICBjcmVhdGVBbmRSZW5kZXJFbmREYXRlSW5wdXQodG9kYXkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJJbnB1dExpc3QobGlzdEF0dHJpYnV0ZSwgaWQsIHBsYWNlSG9sZGVyKSB7XG4gIGxldCBpbnB1dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0TGlzdC5zZXRBdHRyaWJ1dGUoXCJsaXN0XCIsIGxpc3RBdHRyaWJ1dGUpO1xuICBpbnB1dExpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBpbnB1dExpc3Quc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2VIb2xkZXIpO1xuICBhcHBlbmRUb1JlcXVlc3RGb3JtKGlucHV0TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlckRhdGFMaXN0KGlkKSB7XG4gIGxldCBkYXRhTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKTtcbiAgZGF0YUxpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICBhcHBlbmRUb1JlcXVlc3RGb3JtKGRhdGFMaXN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uQW5kUmVuZGVyVG9OdW1iZXJPZlRyYXZlbGVyc0lucHV0KCkge1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAyMDsgaSsrKSB7XG4gICAgbGV0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbnVtYmVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke2l9YCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXItb2YtdHJhdmVsZXJzXCIpLmFwcGVuZENoaWxkKG51bWJlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTnVtYmVyT2ZUcmF2ZWxlcnNJbnB1dCgpIHtcbiAgY3JlYXRlQW5kUmVuZGVyTGFiZWwoXCJudW1iZXItb2YtdHJhdmVsZXJzXCIsIFwiTnVtYmVyIG9mIFRyYXZlbGVyczpcIik7XG4gIGNyZWF0ZUFuZFJlbmRlcklucHV0TGlzdChcbiAgICBcIm51bWJlci1vZi10cmF2ZWxlcnNcIixcbiAgICBcIm51bWJlci1vZi10cmF2c1wiLFxuICAgIFwiU2VsZWN0IG51bWJlciBvZiB0cmF2ZWxlcnNcIlxuICApO1xuICBjcmVhdGVBbmRSZW5kZXJEYXRhTGlzdChcIm51bWJlci1vZi10cmF2ZWxlcnNcIik7XG4gIGNyZWF0ZU9wdGlvbkFuZFJlbmRlclRvTnVtYmVyT2ZUcmF2ZWxlcnNJbnB1dCgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25BbmRSZW5kZXJUb0RhdGFMaXN0KGxlbmd0aCwgZGVzdGluYXRpb25zLCBpZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGAke2Rlc3RpbmF0aW9uc1tpXS5kZXN0aW5hdGlvbn1gKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJMYWJlbEFuZElucHV0TGlzdCgpIHtcbiAgY3JlYXRlQW5kUmVuZGVyTGFiZWwoXCJkZXN0aW5hdGlvbi1jaG9pY2VcIiwgXCJTZWFyY2ggZm9yIGEgRGVzdGluYXRpb246XCIpO1xuICBjcmVhdGVBbmRSZW5kZXJJbnB1dExpc3QoXG4gICAgXCJkZXN0aW5hdGlvbi1jaG9pY2VcIixcbiAgICBcImRlc3RpbmF0aW9uXCIsXG4gICAgXCJTZWFyY2ggZm9yIGEgZGVzdGluYXRpb25cIlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJGdWxsRGVzdGluYXRpb25MaXN0KGRlc3RpbmF0aW9ucykge1xuICBjcmVhdGVBbmRSZW5kZXJEYXRhTGlzdChcImRlc3RpbmF0aW9uLWNob2ljZVwiKTtcbiAgY3JlYXRlT3B0aW9uQW5kUmVuZGVyVG9EYXRhTGlzdChcbiAgICBkZXN0aW5hdGlvbnMubGVuZ3RoLFxuICAgIGRlc3RpbmF0aW9ucyxcbiAgICBcImRlc3RpbmF0aW9uLWNob2ljZVwiXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlc3RpbmF0aW9uU2VhcmNoQmFyKGFsbFRyaXBzLCBkZXN0aW5hdGlvbnNBcnIpIHtcbiAgbGV0IGRlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uc0FycjtcbiAgY3JlYXRlQW5kUmVuZGVyTGFiZWxBbmRJbnB1dExpc3QoKTtcbiAgcmVuZGVyRnVsbERlc3RpbmF0aW9uTGlzdChkZXN0aW5hdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPbkNsaWNrRnVuY3Rpb25BbmRSZW5kZXJUcmlwKGRlc3RpbmF0aW9uc0FyciwgYWxsVHJpcHMpIHtcbiAgbGV0IHRyaXBSZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0cmlwLXJlcXVlc3QtYnV0dG9uXCIpO1xuICB0cmlwUmVxdWVzdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gY2FsY3VsYXRlVHJpcFJlcXVlc3QoKSB7XG4gICAgbGV0IHRyaXBSZXF1ZXN0RGF0YSA9IHByZXBhcmVUcmlwUmVxdWVzdERhdGEoZGVzdGluYXRpb25zQXJyKTtcbiAgICByZW5kZXJUcmlwUmVxdWVzdCh0cmlwUmVxdWVzdERhdGEsIGRlc3RpbmF0aW9uc0FyciwgYWxsVHJpcHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRJZEFuZENsYXNzb2ZSZXF1ZXN0Rm9ybSgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbMl0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXF1ZXN0LWZvcm1cIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpWzJdLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGFpbmVyXCIpO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVHJpcFJlcXVlc3REYXRhKGRlc3RpbmF0aW9ucykge1xuICBsZXQgdmFsdWVzID0gZ2V0VmFsdWVzRnJvbUlucHV0cygpO1xuICBsZXQgdHJpcFJlcXVlc3REZXN0aW5hdGlvbiA9IHZhbHVlcy50cmlwUmVxdWVzdERlc3RpbmF0aW9uO1xuICBsZXQgbnVtYmVyT2ZUcmF2ZWxlcnMgPSB2YWx1ZXMubnVtYmVyT2ZUcmF2ZWxlcnM7XG4gIGxldCB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSA9IHZhbHVlcy50cmlwUmVxdWVzdFN0YXJ0RGF0ZTtcbiAgbGV0IHRyaXBSZXF1ZXN0RW5kRGF0ZSA9IHZhbHVlcy50cmlwUmVxdWVzdEVuZERhdGU7XG4gIGxldCB0cmlwUmVxdWVzdERhdGEgPSByZXR1cm5UcmlwUmVxdWVzdERhdGEoXG4gICAgZGVzdGluYXRpb25zLFxuICAgIHRyaXBSZXF1ZXN0RGVzdGluYXRpb24sXG4gICAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gICAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gICAgdHJpcFJlcXVlc3RFbmREYXRlXG4gICk7XG4gIHJldHVybiB0cmlwUmVxdWVzdERhdGE7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyaXBSZXF1ZXN0KHRyaXBSZXF1ZXN0RGF0YSwgZGVzdGluYXRpb25zQXJyLCBhbGxUcmlwcykge1xuICBsZXQgdmFsdWVzID0gc2V0VmFsdWVzRm9yVHJpcFJlcXVlc3QoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0aW5hdGlvbnNBcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsdWVzLnRyaXBSZXF1ZXN0RGVzdGluYXRpb24gPT09IGRlc3RpbmF0aW9uc0FycltpXS5kZXN0aW5hdGlvbikge1xuICAgICAgaGlkZVJlcXVlc3RGb3JtQW5kU2hvd1lvdXJUcmlwc0hlYWRlcigpO1xuICAgICAgcmVuZGVyVHJpcFJlcXVlc3REYXRhKFxuICAgICAgICBkZXN0aW5hdGlvbnNBcnJbaV0sXG4gICAgICAgIHRyaXBSZXF1ZXN0RGF0YSxcbiAgICAgICAgdmFsdWVzLnRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICAgICAgICB2YWx1ZXMudHJpcFJlcXVlc3RFbmREYXRlLFxuICAgICAgICBhbGxUcmlwc1xuICAgICAgKTtcbiAgICAgIGNyZWF0ZUFuZFJlbmRlckNvbmZpcm1UcmlwQnV0dG9uKFxuICAgICAgICBkZXN0aW5hdGlvbnNBcnJbaV0sXG4gICAgICAgIHRyaXBSZXF1ZXN0RGF0YSxcbiAgICAgICAgYWxsVHJpcHNcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJldHVyblRyaXBSZXF1ZXN0RGF0YShcbiAgZGVzdGluYXRpb25zLFxuICB0cmlwUmVxdWVzdERlc3RpbmF0aW9uLFxuICBudW1iZXJPZlRyYXZlbGVycyxcbiAgdHJpcFJlcXVlc3RTdGFydERhdGUsXG4gIHRyaXBSZXF1ZXN0RW5kRGF0ZVxuKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXBSZXF1ZXN0RGVzdGluYXRpb24gPT09IGRlc3RpbmF0aW9uc1tpXS5kZXN0aW5hdGlvbikge1xuICAgICAgbGV0IGRlc3RpbmF0aW9uSWRlbnRpZmllciA9IGRlc3RpbmF0aW9uc1tpXS5pZDtcbiAgICAgIGxldCB0cmlwUmVxdWVzdERhdGEgPSB7XG4gICAgICAgIGRlc3RpbmF0aW9uSWRlbnRpZmllcixcbiAgICAgICAgdHJpcFJlcXVlc3REZXN0aW5hdGlvbixcbiAgICAgICAgbnVtYmVyT2ZUcmF2ZWxlcnMsXG4gICAgICAgIHRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICAgICAgICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRyaXBSZXF1ZXN0RGF0YTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VmFsdWVzRm9yVHJpcFJlcXVlc3QoKSB7XG4gIGxldCB2YWx1ZXNCZWZvcmUgPSBnZXRWYWx1ZXNGcm9tSW5wdXRzKCk7XG4gIGxldCB0cmlwUmVxdWVzdERlc3RpbmF0aW9uID0gdmFsdWVzQmVmb3JlLnRyaXBSZXF1ZXN0RGVzdGluYXRpb247XG4gIGxldCB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSA9IHZhbHVlc0JlZm9yZS50cmlwUmVxdWVzdFN0YXJ0RGF0ZTtcbiAgbGV0IHRyaXBSZXF1ZXN0RW5kRGF0ZSA9IHZhbHVlc0JlZm9yZS50cmlwUmVxdWVzdEVuZERhdGU7XG4gIGxldCB2YWx1ZXMgPSB7XG4gICAgdHJpcFJlcXVlc3REZXN0aW5hdGlvbixcbiAgICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gIH07XG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcmNvbmZpcm1UcmlwQnV0dG9uKCkge1xuICBsZXQgY29uZmlybVRyaXBSZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uZmlybVRyaXBSZXF1ZXN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29uZmlybS10cmlwLXJlcXVlc3QtYnV0dG9uXCIpO1xuICBjb25maXJtVHJpcFJlcXVlc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNPTkZJUk0gVFJJUFwiO1xuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKVxuICAgIC5hcHBlbmRDaGlsZChjb25maXJtVHJpcFJlcXVlc3RCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBbmRSZW5kZXJQYXJhZ3JhcGhBbmROb2RlKHN0YXJ0T3JFbmQsIGRhdGUpIHtcbiAgbGV0IGRhdGVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGFyYWdyYXBoXCIpO1xuICBsZXQgZGF0ZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBgVHJpcCAke3N0YXJ0T3JFbmR9IERhdGU6ICR7ZGF0ZS50b0RhdGVTdHJpbmcoKX1gXG4gICk7XG4gIGRhdGVQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGF0ZU5vZGUpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKS5hcHBlbmRDaGlsZChkYXRlUGFyYWdyYXBoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGF0ZUVsZW1lbnRzKGZvcm1hdHRlZFN0YXJ0RGF0ZSwgZm9ybWF0dGVkRW5kRGF0ZSkge1xuICBjcmVhdGVBbmRSZW5kZXJQYXJhZ3JhcGhBbmROb2RlKFwic3RhcnRcIiwgZm9ybWF0dGVkU3RhcnREYXRlKTtcbiAgY3JlYXRlQW5kUmVuZGVyUGFyYWdyYXBoQW5kTm9kZShcImVuZFwiLCBmb3JtYXR0ZWRFbmREYXRlKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcFJlcXVlc3REZXN0aW5hdGlvbkltYWdlKGRlc3RpbmF0aW9uKSB7XG4gIGxldCBkZXN0aW5hdGlvbkltYWdlID0gZGVzdGluYXRpb24uaW1hZ2U7XG4gIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuY2xhc3NOYW1lID0gXCJkZXN0aW5hdGlvbi1pbWFnZVwiO1xuICBpbWcuc3JjID0gYCR7ZGVzdGluYXRpb25JbWFnZX1gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcXVlc3RlZC10cmlwc1wiKS5hcHBlbmRDaGlsZChpbWcpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmlwUmVxdWVzdERhdGEoXG4gIGRlc3RpbmF0aW9uLFxuICB0cmlwUmVxdWVzdERhdGEsXG4gIHRyaXBSZXF1ZXN0U3RhcnREYXRlLFxuICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gIGFsbFRyaXBzXG4pIHtcbiAgcmVuZGVyVHJpcFJlcXVlc3REZXN0aW5hdGlvbkltYWdlKGRlc3RpbmF0aW9uKTtcbiAgcmVuZGVyRGVzdGluYXRpb25OYW1lKGRlc3RpbmF0aW9uKTtcbiAgcmVuZGVyTnVtYmVyT2ZUcmF2ZWxlcnModHJpcFJlcXVlc3REYXRhKTtcbiAgcmVuZGVyU3RhcnRhbmRFbmREYXRlKHRyaXBSZXF1ZXN0U3RhcnREYXRlLCB0cmlwUmVxdWVzdEVuZERhdGUpO1xuICByZW5kZXJUcmlwQ29zdChkZXN0aW5hdGlvbiwgdHJpcFJlcXVlc3REYXRhLCBhbGxUcmlwcyk7XG4gIHJlbmRlcmNvbmZpcm1UcmlwQnV0dG9uKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN0YXJ0YW5kRW5kRGF0ZSh0cmlwUmVxdWVzdFN0YXJ0RGF0ZSwgdHJpcFJlcXVlc3RFbmREYXRlKSB7XG4gIGxldCBmb3JtYXR0ZWRTdGFydERhdGUgPSBmb3JtYXRTdGFydERhdGUodHJpcFJlcXVlc3RTdGFydERhdGUpO1xuICBsZXQgZm9ybWF0dGVkRW5kRGF0ZSA9IGZvcm1hdEVuZERhdGUodHJpcFJlcXVlc3RFbmREYXRlKTtcbiAgY3JlYXRlRGF0ZUVsZW1lbnRzKGZvcm1hdHRlZFN0YXJ0RGF0ZSwgZm9ybWF0dGVkRW5kRGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVSZXF1ZXN0Rm9ybUFuZFNob3dZb3VyVHJpcHNIZWFkZXIoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdC1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgcmVuZGVyVHJpcHNIZWFkZXIoXCJZb3VyIFJlcXVlc3RlZFwiKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIilbM10uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXF1ZXN0ZWQtdHJpcHNcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuZFJlbmRlckNvbmZpcm1UcmlwQnV0dG9uKFxuICBkZXN0aW5hdGlvbixcbiAgdHJpcFJlcXVlc3REYXRhLFxuICBhbGxUcmlwc1xuKSB7XG4gIGxldCBjb25maXJtVHJpcFJlcXVlc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImNvbmZpcm0tdHJpcC1yZXF1ZXN0LWJ1dHRvblwiXG4gICk7XG4gIGNvbmZpcm1UcmlwUmVxdWVzdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gY29uZmlybVRyaXBSZXF1ZXN0KCkge1xuICAgIGNvbmZpcm1BbmRQb3N0VHJpcChkZXN0aW5hdGlvbiwgdHJpcFJlcXVlc3REYXRhLCBhbGxUcmlwcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlc3RpbmF0aW9uTmFtZShkZXN0aW5hdGlvbikge1xuICBsZXQgZGVzdGluYXRpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYFRyaXAgRGVzdGluYXRpb246ICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259YFxuICApO1xuICBsZXQgZGVzdGluYXRpb25OYW1lUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgZGVzdGluYXRpb25OYW1lUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3RpbmF0aW9uTmFtZSk7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdGVkLXRyaXBzXCIpXG4gICAgLmFwcGVuZENoaWxkKGRlc3RpbmF0aW9uTmFtZVBhcmFncmFwaCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck51bWJlck9mVHJhdmVsZXJzKCkge1xuICBsZXQgdmFsdWVzID0gZ2V0VmFsdWVzRnJvbUlucHV0cygpO1xuICBsZXQgbnVtT2ZUcmF2ZWxlcnNOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgYE51bWJlciBvZiBUcmF2ZWxlcnM6ICR7dmFsdWVzLm51bWJlck9mVHJhdmVsZXJzfWBcbiAgKTtcbiAgbGV0IG51bU9mVHJhdmVsZXJzUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgbnVtT2ZUcmF2ZWxlcnNQYXJhZ3JhcGguYXBwZW5kQ2hpbGQobnVtT2ZUcmF2ZWxlcnNOb2RlKTtcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0ZWQtdHJpcHNcIilcbiAgICAuYXBwZW5kQ2hpbGQobnVtT2ZUcmF2ZWxlcnNQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiBkYXRhVG9Kc29uKFxuICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgdHJpcFJlcXVlc3RFbmREYXRlLFxuICB1c2VySWQsXG4gIHRyaXBSZXF1ZXN0SWQsXG4gIHRyaXBSZXF1ZXN0RGF0YVxuKSB7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgaWQ6IHBhcnNlRmxvYXQodHJpcFJlcXVlc3RJZCksXG4gICAgdXNlcklEOiB1c2VySWQsXG4gICAgZGVzdGluYXRpb25JRDogdHJpcFJlcXVlc3REYXRhLmRlc3RpbmF0aW9uSWRlbnRpZmllcixcbiAgICB0cmF2ZWxlcnM6IHBhcnNlRmxvYXQodHJpcFJlcXVlc3REYXRhLm51bWJlck9mVHJhdmVsZXJzKSxcbiAgICBkYXRlOiB0cmlwUmVxdWVzdFN0YXJ0RGF0ZS5yZXBsYWNlKC8tL2csIFwiL1wiKSxcbiAgICBkdXJhdGlvbjogZGF5c0JldHdlZW4odHJpcFJlcXVlc3RTdGFydERhdGUsIHRyaXBSZXF1ZXN0RW5kRGF0ZSksXG4gICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBbXSxcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiB2YWx1ZXNUb0pzb24odHJhdmVsZXIsIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpIHtcbiAgbGV0IHZhbHVlcyA9IGdldFZhbHVlc0Zyb21JbnB1dHMoKTtcbiAgbGV0IHRyaXBSZXF1ZXN0U3RhcnREYXRlID0gdmFsdWVzLnRyaXBSZXF1ZXN0U3RhcnREYXRlO1xuICBsZXQgdHJpcFJlcXVlc3RFbmREYXRlID0gdmFsdWVzLnRyaXBSZXF1ZXN0RW5kRGF0ZTtcbiAgbGV0IHVzZXJJZCA9IHRyYXZlbGVyLnRyYXZlbGVyLmlkO1xuICBsZXQgdHJpcFJlcXVlc3RJZCA9IGFsbFRyaXBzLmxlbmd0aCArIDE7XG4gIGxldCBkYXRhID0gZGF0YVRvSnNvbihcbiAgICB0cmlwUmVxdWVzdFN0YXJ0RGF0ZSxcbiAgICB0cmlwUmVxdWVzdEVuZERhdGUsXG4gICAgdXNlcklkLFxuICAgIHRyaXBSZXF1ZXN0SWQsXG4gICAgdHJpcFJlcXVlc3REYXRhXG4gICk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBmZXRjaEFuZExvZ1Jlc3BvbnNlKGRhdGEpIHtcbiAgZmV0Y2goXG4gICAgXCJodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvdHJhdmVsLXRyYWNrZXIvZGF0YS90cmlwcy90cmlwc1wiLFxuICAgIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vIG9yICdQVVQnXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IGRhdGEsXG4gICAgfVxuICApXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGFsZXJ0KFwiU3VjY2VzcyFcIiwgZGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBhbGVydChcIkVycm9yIVwiLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyU2VhcmNoRm9ybUlucHV0cygpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXN0aW5hdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtYmVyLW9mLXRyYXZzXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFwiKS52YWx1ZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbmRcIikudmFsdWU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbmZpcm1lZFRyaXBBbmRDbGVhclNlYXJjaEZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVxdWVzdGVkLXRyaXBzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXF1ZXN0LWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIGNsZWFyU2VhcmNoRm9ybUlucHV0cygpO1xufVxuXG5mdW5jdGlvbiBjb25maXJtQW5kUG9zdFRyaXAoZGVzdGluYXRpb24sIHRyaXBSZXF1ZXN0RGF0YSwgYWxsVHJpcHMpIHtcbiAgdHJhdmVsX3RyYWNrZXJfc2VydmljZVxuICAgIC5nZXRTaW5nbGVUcmF2ZWxlcihkZXN0aW5hdGlvbiwgdHJpcFJlcXVlc3REYXRhLCBhbGxUcmlwcylcbiAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBsZXQgdHJhdmVsZXIgPSByZXN1bHQ7XG4gICAgICBsZXQgZGF0YSA9IHZhbHVlc1RvSnNvbih0cmF2ZWxlciwgdHJpcFJlcXVlc3REYXRhLCBhbGxUcmlwcyk7XG4gICAgICBmZXRjaEFuZExvZ1Jlc3BvbnNlKGRhdGEpO1xuICAgIH0pO1xuICByZW1vdmVDb25maXJtZWRUcmlwQW5kQ2xlYXJTZWFyY2hGb3JtKCk7XG59XG5cbmV4cG9ydCB7XG4gIHJlbmRlclRyaXBzSGVhZGVyLFxuICBnZXRQZW5kaW5nVHJpcHMsXG4gIGdldFRvZGF5c1RyaXBzLFxuICByZXR1cm5DdXJyZW50RGF0ZSxcbiAgYXBwZW5kVG9TZWN0aW9uLFxuICByZW5kZXJUcmlwRGF0ZSxcbiAgcmVuZGVyVHJpcERlc3RpbmF0aW9uLFxuICByZW5kZXJUcmlwU3RhdHVzLFxuICByZW5kZXJUcmlwRHVyYXRpb24sXG4gIHJlbmRlckRlc3RpbmF0aW9uSW1hZ2UsXG4gIHJlbmRlclRyaXBzLFxuICBmaWx0ZXJQYXN0QW5kVXBjb21pbmdUcmlwcyxcbiAgcmV0dXJuVHJhdkRhdGUsXG4gIGRheXNCZXR3ZWVuLFxuICBmb3JtYXRFbmREYXRlLFxuICBmb3JtYXRTdGFydERhdGUsXG4gIHJlbmRlclRyaXBDb3N0LFxuICBnZXRWYWx1ZXNGcm9tSW5wdXRzLFxuICByZW5kZXJEZXN0aW5hdGlvblNlYXJjaEJhcixcbiAgcmVuZGVyRGF0ZVNlbGVjdElucHV0cyxcbiAgYXBwZW5kVG9SZXF1ZXN0Rm9ybSxcbiAgcmVuZGVyTnVtYmVyT2ZUcmF2ZWxlcnNJbnB1dCxcbiAgY3JlYXRlT25DbGlja0Z1bmN0aW9uQW5kUmVuZGVyVHJpcCxcbn07XG4iLCJpbXBvcnQgXCIuL2Nzcy9iYXNlLnNjc3NcIjtcbmltcG9ydCAqIGFzIHRyYXZlbF90cmFja2VyX3NlcnZpY2UgZnJvbSBcIi4vdHJhdmVsX3RyYWNrZXJfc2VydmljZS5qc1wiO1xuaW1wb3J0ICogYXMgdHJhdmVsZXJfZGFzaGJvYXJkX2hlbHBlciBmcm9tIFwiLi90cmF2ZWxlcl9kYXNoYm9hcmRfaGVscGVyXCI7XG5pbXBvcnQgKiBhcyBhZ2VudF9kYXNoYm9hcmRfaGVscGVyIGZyb20gXCIuL2FnZW50X2Rhc2hib2FyZF9oZWxwZXJcIjtcbmltcG9ydCAqIGFzIGxvZ2luX2hlbHBlciBmcm9tIFwiLi9sb2dpbl9oZWxwZXJcIjtcblxubGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuXG5idXR0b24ub25jbGljayA9IGZ1bmN0aW9uIHByb2Nlc3NMb2dpbigpIHtcbiAgbGV0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXVzZXJuYW1lXCIpLnZhbHVlO1xuICBsZXQgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcGFzc3dvcmRcIikudmFsdWU7XG4gIGlmIChsb2dpbl9oZWxwZXIuaXNWYWxpZFBhc3N3b3JkKHBhc3N3b3JkSW5wdXQpKSB7XG4gICAgdHJhdmVsX3RyYWNrZXJfc2VydmljZVxuICAgICAgLmlzVmFsaWRUcmF2ZWxlcih1c2VybmFtZUlucHV0KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0ID09PSB0cnVlKSB7XG4gICAgICAgICAgdmFyIHRyYXZlbGVySWQgPSB1c2VybmFtZUlucHV0LnNsaWNlKDgpO1xuICAgICAgICAgIHRyYXZlbF90cmFja2VyX3NlcnZpY2VcbiAgICAgICAgICAgIC5nZXRTaW5nbGVUcmF2ZWxlcih0cmF2ZWxlcklkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBsZXQgdHJhdmVsZXIgPSByZXN1bHQudHJhdmVsZXI7XG4gICAgICAgICAgICAgIHRyYXZlbF90cmFja2VyX3NlcnZpY2VcbiAgICAgICAgICAgICAgICAuZ2V0VHJhdmVsZXJUcmlwcyh0cmF2ZWxlcilcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBsZXQgdHJhdmVsZXJUcmlwcyA9IHJlc3VsdC50cmF2ZWxlclRyaXBzO1xuICAgICAgICAgICAgICAgICAgdHJhdmVsX3RyYWNrZXJfc2VydmljZVxuICAgICAgICAgICAgICAgICAgICAuZ2V0VHJhdmVsZXJEZXN0aW5hdGlvbnModHJhdmVsZXJUcmlwcywgdHJhdmVsZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVzdGluYXRpb25zID0gcmVzdWx0LnRyYXZlbGVyRGVzdGluYXRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmlwcyA9IHJlc3VsdC50cmF2ZWxlclRyaXBzO1xuICAgICAgICAgICAgICAgICAgICAgIGxldCB0cmF2ZWxlckRhc2hib2FyZERhdGEgPVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVsZXJfZGFzaGJvYXJkX2hlbHBlci5wcmVwYXJlVHJhdmVsZXJEYXNoYm9hcmREYXRhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmF2ZWxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlwc1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB0cmF2ZWxlcl9kYXNoYm9hcmRfaGVscGVyLnJlbmRlclRyYXZlbGVyRGFzaGJvYXJkKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVsZXJEYXNoYm9hcmREYXRhXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2dpbl9oZWxwZXIuaXNWYWxpZEFnZW5jeSh1c2VybmFtZUlucHV0KSkge1xuICAgICAgICAgIGFnZW50X2Rhc2hib2FyZF9oZWxwZXIucmVuZGVyU3VjY2Vzc2Z1bEFnZW5jeUxvZ2luKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9naW5faGVscGVyLmxvZ2luRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgbG9naW5faGVscGVyLmxvZ2luRXJyb3IoKTtcbiAgfVxufTtcbiIsImZ1bmN0aW9uIGlzVmFsaWRQYXNzd29yZChwYXNzd29yZElucHV0KSB7XG4gIHZhciBjb3JyZWN0UHcgPSBcInRyYXZlbDIwMjBcIjtcbiAgaWYgKHBhc3N3b3JkSW5wdXQgPT09IGNvcnJlY3RQdykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRBZ2VuY3kodXNlcm5hbWVJbnB1dCkge1xuICBsZXQgYWdlbnRVbiA9IFwiYWdlbmN5XCI7XG4gIHZhciBkb3duY2FzZWRVc2VybmFtZUlucHV0ID0gdXNlcm5hbWVJbnB1dC50b0xvd2VyQ2FzZSgpO1xuICBpZiAoZG93bmNhc2VkVXNlcm5hbWVJbnB1dCA9PT0gYWdlbnRVbikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyTG9naW5Gb3JtKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXVzZXJuYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wYXNzd29yZFwiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGxvZ2luRXJyb3IoKSB7XG4gIGFsZXJ0KFwiTG9naW4gVW5zdWNjZXNzZnVsIVwiKTtcbiAgY2xlYXJMb2dpbkZvcm0oKTtcbn1cblxuZXhwb3J0IHsgaXNWYWxpZFBhc3N3b3JkLCBpc1ZhbGlkQWdlbmN5LCBjbGVhckxvZ2luRm9ybSwgbG9naW5FcnJvciB9O1xuIiwiYXN5bmMgZnVuY3Rpb24gaXNWYWxpZFRyYXZlbGVyKHVzZXJuYW1lSW5wdXQpIHtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IHRyYXZlbGVyc1VybCA9IGJhc2VVcmwgKyBcIi9kYXRhL3RyYXZlbGVycy90cmF2ZWxlcnNcIjtcbiAgY29uc3QgdXNlcklkID0gdXNlcm5hbWVJbnB1dC5zbGljZSg4KTtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godHJhdmVsZXJzVXJsKTtcbiAgbGV0IGF3YWl0UmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBsZXQgdHJhdmVsZXJzID0gYXdhaXRSZXMudHJhdmVsZXJzO1xuICBsZXQgaWRUb051bSA9IE51bWJlcih1c2VySWQpO1xuICBsZXQgaWRzQXJyYXkgPSBbXTtcbiAgbGV0IHZhbGlkID0gZmFsc2U7XG4gIHRyYXZlbGVycy5mb3JFYWNoKCh0cmF2ZWxlcikgPT4ge1xuICAgIGlkc0FycmF5LnB1c2godHJhdmVsZXIuaWQpO1xuICB9KTtcbiAgaWRzQXJyYXkuZm9yRWFjaCgoaWQpID0+IHtcbiAgICBpZiAoaWRUb051bSA9PT0gaWQpIHtcbiAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdmFsaWQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFNpbmdsZVRyYXZlbGVyKCkge1xuICBsZXQgZnVsbFVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC11c2VybmFtZVwiKTtcbiAgY29uc3QgdHJhdmVsZXJJZE51bWJlciA9IGZ1bGxVc2VybmFtZS52YWx1ZS5zbGljZSg4KTtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IHNpbmdsZVRyYXZlbGVyVXJsID1cbiAgICBiYXNlVXJsICsgYC9kYXRhL3RyYXZlbGVycy90cmF2ZWxlcnMvJHt0cmF2ZWxlcklkTnVtYmVyfWA7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNpbmdsZVRyYXZlbGVyVXJsKTtcbiAgbGV0IHRyYXZlbGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4geyB0cmF2ZWxlciB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUcmF2ZWxlclRyaXBzKHRyYXZlbGVyKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlclwiO1xuICBjb25zdCB0cmF2ZWxlclRyaXBzVXJsID0gYmFzZVVybCArIFwiL2RhdGEvdHJpcHMvdHJpcHNcIjtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godHJhdmVsZXJUcmlwc1VybCk7XG4gIGxldCB0cmlwQXJyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBsZXQgdHJpcHMgPSB0cmlwQXJyLnRyaXBzO1xuICBsZXQgdHJhdmVsZXJUcmlwcyA9IFtdO1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRyaXAgPSB0cmlwc1tpXTtcbiAgICBpZiAodHJhdmVsZXIuaWQgPT09IHRyaXAudXNlcklEKSB7XG4gICAgICB0cmF2ZWxlclRyaXBzLnB1c2godHJpcCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHRyYXZlbGVyVHJpcHMsIHRyYXZlbGVyIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRyYXZlbGVyRGVzdGluYXRpb25zKHRyYXZlbGVyVHJpcHMsIHRyYXZlbGVyKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlclwiO1xuICBjb25zdCB0cmF2ZWxlckRlc3RpbmF0aW9uc1VybCA9IGJhc2VVcmwgKyBcIi9kYXRhL2Rlc3RpbmF0aW9ucy9kZXN0aW5hdGlvbnNcIjtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godHJhdmVsZXJEZXN0aW5hdGlvbnNVcmwpO1xuICBsZXQgZGVzdGluYXRpb25zUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGxldCBkZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnNSZXNwb25zZS5kZXN0aW5hdGlvbnM7XG4gIGxldCB0cmlwRGVzdGluYXRpb25JZHMgPSBbXTtcbiAgbGV0IHRyYXZlbGVyRGVzdGluYXRpb25zID0gW107XG4gIHRyYXZlbGVyVHJpcHMuZm9yRWFjaCgodHJpcCkgPT4gdHJpcERlc3RpbmF0aW9uSWRzLnB1c2godHJpcC5kZXN0aW5hdGlvbklEKSk7XG4gIGxldCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRyaXBEZXN0aW5hdGlvbklkcy5pbmNsdWRlcyhkZXN0aW5hdGlvbnNbaV0uaWQpKSB7XG4gICAgICB0cmF2ZWxlckRlc3RpbmF0aW9ucy5wdXNoKGRlc3RpbmF0aW9uc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHRyYXZlbGVyVHJpcHMsIHRyYXZlbGVyLCB0cmF2ZWxlckRlc3RpbmF0aW9ucyB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxUcmlwcygpIHtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IGFnZW50VHJpcHNVcmwgPSBiYXNlVXJsICsgXCIvZGF0YS90cmlwcy90cmlwc1wiO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhZ2VudFRyaXBzVXJsKTtcbiAgbGV0IGF3YWl0ZWRSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgbGV0IGFsbFRyaXBzID0gYXdhaXRlZFJlc3BvbnNlLnRyaXBzO1xuICByZXR1cm4gYWxsVHJpcHM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbERlc3RpbmF0aW9ucygpIHtcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3RyYXZlbC10cmFja2VyXCI7XG4gIGNvbnN0IGFnZW50RGVzdGluYXRpb25zVXJsID0gYmFzZVVybCArIFwiL2RhdGEvZGVzdGluYXRpb25zL2Rlc3RpbmF0aW9uc1wiO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhZ2VudERlc3RpbmF0aW9uc1VybCk7XG4gIGxldCBkZXN0aW5hdGlvbnNSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgbGV0IGFsbERlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uc1Jlc3BvbnNlLmRlc3RpbmF0aW9ucztcbiAgcmV0dXJuIGFsbERlc3RpbmF0aW9ucztcbn1cblxuZXhwb3J0IHtcbiAgaXNWYWxpZFRyYXZlbGVyLFxuICBnZXRTaW5nbGVUcmF2ZWxlcixcbiAgZ2V0VHJhdmVsZXJUcmlwcyxcbiAgZ2V0VHJhdmVsZXJEZXN0aW5hdGlvbnMsXG4gIGdldEFsbFRyaXBzLFxuICBnZXRBbGxEZXN0aW5hdGlvbnMsXG59O1xuIiwiaW1wb3J0ICogYXMgdHJhdmVsX3RyYWNrZXJfc2VydmljZSBmcm9tIFwiLi90cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBkYXNoYm9hcmRfaGVscGVyIGZyb20gXCIuL2Rhc2hib2FyZF9oZWxwZXJcIjtcblxuZnVuY3Rpb24gcmVuZGVyVHJpcFJlcXVlc3RCdXR0b24oKSB7XG4gIGxldCB0cmlwUmVxdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRyaXBSZXF1ZXN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidHJpcC1yZXF1ZXN0LWJ1dHRvblwiKTtcbiAgdHJpcFJlcXVlc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNBTENVTEFURVwiO1xuICBkYXNoYm9hcmRfaGVscGVyLmFwcGVuZFRvUmVxdWVzdEZvcm0odHJpcFJlcXVlc3RCdXR0b24pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJSZXF1ZXN0Rm9ybUVsZW1lbnRzKGRlc3RpbmF0aW9uc0FyciwgYWxsVHJpcHMpIHtcbiAgZGFzaGJvYXJkX2hlbHBlci5yZW5kZXJOdW1iZXJPZlRyYXZlbGVyc0lucHV0KCk7XG4gIGRhc2hib2FyZF9oZWxwZXIucmVuZGVyRGF0ZVNlbGVjdElucHV0cygpO1xuICByZW5kZXJUcmlwUmVxdWVzdEJ1dHRvbigpO1xuICBkYXNoYm9hcmRfaGVscGVyLmNyZWF0ZU9uQ2xpY2tGdW5jdGlvbkFuZFJlbmRlclRyaXAoXG4gICAgZGVzdGluYXRpb25zQXJyLFxuICAgIGFsbFRyaXBzXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRyYXZlbGVyVHJpcFJlcXVlc3RGb3JtKCkge1xuICB0cmF2ZWxfdHJhY2tlcl9zZXJ2aWNlLmdldEFsbFRyaXBzKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgbGV0IGFsbFRyaXBzID0gcmVzdWx0O1xuICAgIHRyYXZlbF90cmFja2VyX3NlcnZpY2UuZ2V0QWxsRGVzdGluYXRpb25zKCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBsZXQgZGVzdGluYXRpb25zQXJyID0gcmVzdWx0O1xuICAgICAgZGFzaGJvYXJkX2hlbHBlci5yZW5kZXJEZXN0aW5hdGlvblNlYXJjaEJhcihhbGxUcmlwcywgZGVzdGluYXRpb25zQXJyKTtcbiAgICAgIHJlbmRlclJlcXVlc3RGb3JtRWxlbWVudHMoZGVzdGluYXRpb25zQXJyLCBhbGxUcmlwcyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb3BTZWN0aW9uT2ZEYXNoYm9hcmQodHJhdmVsZXJEYXNoYm9hcmREYXRhKSB7XG4gIHJlbmRlclRyYXZlbGVyV2VsY29tZSh0cmF2ZWxlckRhc2hib2FyZERhdGEudHJhdmVsZXIpO1xuICByZW5kZXJUb3RhbFNwZW50KHRyYXZlbGVyRGFzaGJvYXJkRGF0YSk7XG4gIGRhc2hib2FyZF9oZWxwZXIucmVuZGVyVHJpcHNIZWFkZXIoXCJVcGNvbWluZ1wiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJpcHNBbmRSZXF1ZXN0Rm9ybSh0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gIGRhc2hib2FyZF9oZWxwZXIucmVuZGVyVHJpcHModHJpcHMudXBjb21pbmdUcmlwc0FyciwgZGVzdGluYXRpb25zKTtcbiAgZGFzaGJvYXJkX2hlbHBlci5yZW5kZXJUcmlwc0hlYWRlcihcIlBhc3RcIik7XG4gIGRhc2hib2FyZF9oZWxwZXIucmVuZGVyVHJpcHModHJpcHMucGFzdFRyaXBzQXJyLCBkZXN0aW5hdGlvbnMpO1xuICBkYXNoYm9hcmRfaGVscGVyLnJlbmRlclRyaXBzSGVhZGVyKFwiUmVxdWVzdFwiKTtcbiAgcmVuZGVyVHJhdmVsZXJUcmlwUmVxdWVzdEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVHJhdmVsZXJEYXNoYm9hcmQodHJhdmVsZXJEYXNoYm9hcmREYXRhKSB7XG4gIHJlbmRlclRvcFNlY3Rpb25PZkRhc2hib2FyZCh0cmF2ZWxlckRhc2hib2FyZERhdGEpO1xuICBsZXQgdHJpcHMgPSBmaWx0ZXJQYXN0QW5kVXBjb21pbmdUcmlwcyh0cmF2ZWxlckRhc2hib2FyZERhdGEudHJhdmVsZXJUcmlwcyk7XG4gIGxldCBkZXN0aW5hdGlvbnMgPSB0cmF2ZWxlckRhc2hib2FyZERhdGEudHJhdmVsZXJEZXN0aW5hdGlvbnM7XG4gIHJlbmRlclRyaXBzQW5kUmVxdWVzdEZvcm0odHJpcHMsIGRlc3RpbmF0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VQYXN0QW5kVXBjb21pbmdUcmlwc0FycmF5cyh0cmF2ZWxlclRyaXBzLCB0b2RheSkge1xuICBsZXQgdXBjb21pbmdUcmlwc0FyciA9IFtdO1xuICBsZXQgcGFzdFRyaXBzQXJyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhdmVsZXJUcmlwcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzbWFsbERhdGUgPSBuZXcgRGF0ZSh0cmF2ZWxlclRyaXBzW2ldLmRhdGUpO1xuICAgIGxldCB0cmF2RGF0ZSA9IGRhc2hib2FyZF9oZWxwZXIucmV0dXJuVHJhdkRhdGUoc21hbGxEYXRlKTtcbiAgICBpZiAodG9kYXkgPCB0cmF2RGF0ZSkge1xuICAgICAgdXBjb21pbmdUcmlwc0Fyci5wdXNoKHRyYXZlbGVyVHJpcHNbaV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXN0VHJpcHNBcnIucHVzaCh0cmF2ZWxlclRyaXBzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdXBjb21pbmdUcmlwc0FyciwgcGFzdFRyaXBzQXJyIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlclBhc3RBbmRVcGNvbWluZ1RyaXBzKHRyYXZlbGVyVHJpcHMpIHtcbiAgbGV0IHRvZGF5ID0gZGFzaGJvYXJkX2hlbHBlci5yZXR1cm5DdXJyZW50RGF0ZSgpO1xuICBsZXQgdHJpcHNBcnJheSA9IG1ha2VQYXN0QW5kVXBjb21pbmdUcmlwc0FycmF5cyh0cmF2ZWxlclRyaXBzLCB0b2RheSk7XG4gIGxldCBwYXN0VHJpcHNBcnIgPSB0cmlwc0FycmF5LnBhc3RUcmlwc0FycjtcbiAgbGV0IHVwY29taW5nVHJpcHNBcnIgPSB0cmlwc0FycmF5LnVwY29taW5nVHJpcHNBcnI7XG4gIHJldHVybiB7IHBhc3RUcmlwc0FyciwgdXBjb21pbmdUcmlwc0FyciB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUcmF2ZWxlcldlbGNvbWUodHJhdmVsZXIpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbi1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb290ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBsZXQgd2VsY29tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbGV0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgSGVsbG8sICR7dHJhdmVsZXIubmFtZX1gKTtcbiAgd2VsY29tZUhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJCT0RZXCIpWzBdLmFwcGVuZENoaWxkKHdlbGNvbWVIZWFkZXIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb3RhbFNwZW50KHRyYXZlbGVyRGFzaGJvYXJkRGF0YSkge1xuICBsZXQgdG90YWxBbW91bnQgPSB0cmF2ZWxlckRhc2hib2FyZERhdGEudG90YWxBZnRlckFnZW50RmVlLnRvRml4ZWQoMik7XG4gIGxldCB0b3RhbFNwZW50UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhcmFncmFwaFwiKTtcbiAgdG90YWxTcGVudFBhcmFncmFwaC5jbGFzc05hbWUgPSBcInRvdGFsLXNwZW50XCI7XG4gIGxldCB0b3RhbFNwZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIGBUb3RhbCBBbW91bnQgU3BlbnQ6ICQke3RvdGFsQW1vdW50fWBcbiAgKTtcbiAgdG90YWxTcGVudFBhcmFncmFwaC5hcHBlbmRDaGlsZCh0b3RhbFNwZW50VGV4dCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKHRvdGFsU3BlbnRQYXJhZ3JhcGgpO1xufVxuXG5mdW5jdGlvbiBnZXRMb2RnaW5nQ29zdHModHJhdmVsZXJEZXN0aW5hdGlvbnMsIHRyYXZlbGVyVHJpcHMpIHtcbiAgbGV0IGxvZGdpbmdDb3N0cyA9IFtdO1xuICBsZXQgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRyYXZlbGVyRGVzdGluYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgbG9kZ2luZ0Nvc3RzLnB1c2goXG4gICAgICB0cmF2ZWxlckRlc3RpbmF0aW9uc1tpXS5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqXG4gICAgICB0cmF2ZWxlclRyaXBzW2ldLmR1cmF0aW9uXG4gICAgKTtcbiAgfVxuICByZXR1cm4gbG9kZ2luZ0Nvc3RzO1xufVxuXG5mdW5jdGlvbiBnZXRGbGlnaHRDb3N0cyh0cmF2ZWxlckRlc3RpbmF0aW9ucywgdHJhdmVsZXJUcmlwcykge1xuICBsZXQgZmxpZ2h0Q29zdHMgPSBbXTtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0cmF2ZWxlckRlc3RpbmF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGZsaWdodENvc3RzLnB1c2goXG4gICAgICB0cmF2ZWxlckRlc3RpbmF0aW9uc1tpXS5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICpcbiAgICAgIHRyYXZlbGVyVHJpcHNbaV0udHJhdmVsZXJzXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZmxpZ2h0Q29zdHM7XG59XG5cbmZ1bmN0aW9uIGFkZEZsaWdodGFuZExvZGdpbmdDb3N0cyhmbGlnaHRDb3N0cywgbG9kZ2luZ0Nvc3RzKSB7XG4gIGxldCBmbGlnaHRzUGx1c0xvZGdpbmcgPSBbXTtcbiAgbGV0IGk7XG4gIGZvciAoaSA9IDA7IGkgPCBmbGlnaHRDb3N0cy5sZW5ndGg7IGkrKykge1xuICAgIGZsaWdodHNQbHVzTG9kZ2luZy5wdXNoKGxvZGdpbmdDb3N0c1tpXSArIGZsaWdodENvc3RzW2ldKTtcbiAgfVxuICByZXR1cm4gZmxpZ2h0c1BsdXNMb2RnaW5nO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VGbGlnaHRzUGx1c0xvZGdpbmcoZmxpZ2h0c1BsdXNMb2RnaW5nKSB7XG4gIGxldCBmbGlnaHRzUGx1c0xvZGdpbmdSZWR1Y2VkID0gZmxpZ2h0c1BsdXNMb2RnaW5nLnJlZHVjZShmdW5jdGlvbiAoXG4gICAgZmxpZ2h0cyxcbiAgICBsb2RnaW5nXG4gICkge1xuICAgIHJldHVybiBmbGlnaHRzICsgbG9kZ2luZztcbiAgfSxcbiAgICAwKTtcbiAgcmV0dXJuIGZsaWdodHNQbHVzTG9kZ2luZ1JlZHVjZWQ7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVUcmF2ZWxlckRhc2hib2FyZERhdGEoXG4gIHRyYXZlbGVyLFxuICB0cmF2ZWxlckRlc3RpbmF0aW9ucyxcbiAgdHJhdmVsZXJUcmlwc1xuKSB7XG4gIGxldCBsb2RnaW5nQ29zdHMgPSBnZXRMb2RnaW5nQ29zdHModHJhdmVsZXJEZXN0aW5hdGlvbnMsIHRyYXZlbGVyVHJpcHMpO1xuICBsZXQgZmxpZ2h0Q29zdHMgPSBnZXRGbGlnaHRDb3N0cyh0cmF2ZWxlckRlc3RpbmF0aW9ucywgdHJhdmVsZXJUcmlwcyk7XG4gIGxldCBmbGlnaHRzUGx1c0xvZGdpbmcgPSBhZGRGbGlnaHRhbmRMb2RnaW5nQ29zdHMoZmxpZ2h0Q29zdHMsIGxvZGdpbmdDb3N0cyk7XG4gIGxldCB0b3RhbEFtb3VudEN1c3RIYXNTcGVudEJlZm9yZUFnZW50RmVlID0gcmVkdWNlRmxpZ2h0c1BsdXNMb2RnaW5nKFxuICAgIGZsaWdodHNQbHVzTG9kZ2luZ1xuICApO1xuICB2YXIgdG90YWxBZnRlckFnZW50RmVlID0gdG90YWxBbW91bnRDdXN0SGFzU3BlbnRCZWZvcmVBZ2VudEZlZSAqIDEuMTtcbiAgcmV0dXJuIHtcbiAgICB0cmF2ZWxlcixcbiAgICB0cmF2ZWxlclRyaXBzLFxuICAgIHRyYXZlbGVyRGVzdGluYXRpb25zLFxuICAgIGxvZGdpbmdDb3N0cyxcbiAgICBmbGlnaHRDb3N0cyxcbiAgICBmbGlnaHRzUGx1c0xvZGdpbmcsXG4gICAgdG90YWxBbW91bnRDdXN0SGFzU3BlbnRCZWZvcmVBZ2VudEZlZSxcbiAgICB0b3RhbEFmdGVyQWdlbnRGZWUsXG4gIH07XG59XG5cbmV4cG9ydCB7XG4gIHJlbmRlclRyYXZlbGVyV2VsY29tZSxcbiAgcmVuZGVyVG90YWxTcGVudCxcbiAgZ2V0TG9kZ2luZ0Nvc3RzLFxuICBnZXRGbGlnaHRDb3N0cyxcbiAgYWRkRmxpZ2h0YW5kTG9kZ2luZ0Nvc3RzLFxuICByZWR1Y2VGbGlnaHRzUGx1c0xvZGdpbmcsXG4gIHByZXBhcmVUcmF2ZWxlckRhc2hib2FyZERhdGEsXG4gIGZpbHRlclBhc3RBbmRVcGNvbWluZ1RyaXBzLFxuICByZW5kZXJUcmF2ZWxlckRhc2hib2FyZCxcbiAgcmVuZGVyVHJhdmVsZXJUcmlwUmVxdWVzdEZvcm0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==