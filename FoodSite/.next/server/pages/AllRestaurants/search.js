module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("SKt0");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "A2So":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZJlY");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);



const Card = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "BtXh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthContextProvider; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("A2So");



const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({
  token: '',
  isLoggedIn: false,
  login: (token, firstName, lastName, business) => {},
  logout: () => {},
  user: '',
  isBusiness: false,
  items: 0,
  totalPrice: 0,
  isOpen: false,
  currCart: [],
  searchStr: '',
  toggle: () => {},
  append: item => {},
  remove: item => {},
  checkout: () => {},
  findIndex: name => {},
  pushStr: () => {}
});
const AuthContextProvider = props => {
  let token0 = [];
  let token1 = 0;
  let token2 = 0;
  let token3 = '';
  let token4 = false;
  let token5 = '';
  let token6 = [];

  if (false) {}

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AuthContext.Provider, {
    value: AuthContext,
    children: props.children
  });
};
/* harmony default export */ __webpack_exports__["b"] = (AuthContext);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "S/vi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "SearchInfo_container__3p7cA",
	"name": "SearchInfo_name__3JG96",
	"description": "SearchInfo_description__3TJln",
	"address": "SearchInfo_address__1cSUR",
	"image": "SearchInfo_image__G1GzR",
	"redirectBtn": "SearchInfo_redirectBtn__9ozqZ",
	"centered": "SearchInfo_centered__1WYID",
	"nextBtn": "SearchInfo_nextBtn__2JMg1",
	"input": "SearchInfo_input__2wQxO",
	"selectedBtn": "SearchInfo_selectedBtn__3jUau"
};


/***/ }),

/***/ "SKt0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/Card/Card.js
var Card = __webpack_require__("A2So");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/Details/SearchInfo.module.css
var SearchInfo_module = __webpack_require__("S/vi");
var SearchInfo_module_default = /*#__PURE__*/__webpack_require__.n(SearchInfo_module);

// CONCATENATED MODULE: ./components/Details/SearchInfo.js





const SearchInfo = props => {
  const router = Object(router_["useRouter"])();

  const redirectHandler = () => {
    router.push(`/AllRestaurants/${props.id}`);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: SearchInfo_module_default.a.container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: props.image,
      className: SearchInfo_module_default.a.image
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: SearchInfo_module_default.a.name,
      children: props.name
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: SearchInfo_module_default.a.description,
      children: props.description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: SearchInfo_module_default.a.address,
      children: props.address
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      class: SearchInfo_module_default.a.centered,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: SearchInfo_module_default.a.redirectBtn,
        onClick: redirectHandler,
        children: "Business Page"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {})]
  });
};

/* harmony default export */ var Details_SearchInfo = (SearchInfo);
// EXTERNAL MODULE: ./components/store/use-context.js
var use_context = __webpack_require__("BtXh");

// CONCATENATED MODULE: ./pages/AllRestaurants/search/index.js








const search = () => {
  const authCtx = Object(external_react_["useContext"])(use_context["b" /* default */]);
  const {
    0: currSearch,
    1: setCurrSearch
  } = Object(external_react_["useState"])(null);
  const {
    0: pageNum,
    1: setPageNum
  } = Object(external_react_["useState"])(1);
  const {
    0: totalNum,
    1: setTotalNum
  } = Object(external_react_["useState"])(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: currData,
    1: setCurrData
  } = Object(external_react_["useState"])([]);
  const {
    0: circArr,
    1: setCircArr
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    const ressy = setTimeout(() => {
      if (currSearch == null) {
        setCurrSearch(authCtx.searchStr);
        getter(authCtx.searchStr);
      } else if (currSearch != '') {
        getter(currSearch);
        console.log('hello!', currSearch);
        console.log(currData);
      } else {
        setCurrData([]);
      }
    }, 500);
    return () => {
      clearTimeout(ressy);
    };
  }, [currSearch]);

  async function getter(value, enteredIndex = 1) {
    var _data$0$totalRecords$;

    setIsLoading(true);
    const response = await fetch(`../api/getResListHandler?name=${value}&pageIndex=${enteredIndex}&pageSize=3`, {
      method: 'GET'
    });
    const data = await response.json();
    setIsLoading(false);
    setCurrData(data[0].data);
    console.log(data);
    setTotalNum(data[0].totalRecords[0] ? parseInt((_data$0$totalRecords$ = data[0].totalRecords[0]) === null || _data$0$totalRecords$ === void 0 ? void 0 : _data$0$totalRecords$.description) : 1);
  }

  const plus = () => {
    setPageNum(prevVal => {
      if (totalNum / 2 > prevVal) {
        console.log(totalNum);
        prevVal++;
        getter(currSearch, prevVal);
      }

      console.log(prevVal);
      return prevVal;
    });
  };

  const minus = () => {
    setPageNum(prevVal => {
      if (prevVal > 1) {
        prevVal--;
        getter(currSearch, prevVal);
      }

      return prevVal;
    });
  };

  Object(external_react_["useEffect"])(() => {
    if (totalNum) {
      setCircArr(prevVal => {
        prevVal = [];
        console.log(totalNum / 2);

        while (prevVal.length < parseInt(totalNum / 2)) {
          if (prevVal.length == pageNum - 1) {
            prevVal.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: SearchInfo_module_default.a.selectedBtn,
              children: "  \u25CF"
            }));
          } else {
            prevVal.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              style: {
                color: '#797979'
              },
              children: " \u25CF"
            }));
          }
        }

        return prevVal;
      });
    }
  }, [totalNum, pageNum]);

  const changeHandler = e => {
    setPageNum(1);
    setCurrSearch(e.target.value);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* default */], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Head, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Search"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: SearchInfo_module_default.a.name,
      children: "Search"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
      placeHolder: "search for business!",
      onInput: changeHandler,
      className: SearchInfo_module_default.a.input,
      value: currSearch
    }), !isLoading && currData != '' && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: SearchInfo_module_default.a.name,
      style: {
        color: 'rgba(0,0,0,0.8)'
      },
      children: " Search Results: "
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), isLoading && /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: SearchInfo_module_default.a.name,
      children: "Searching for Restaurants..."
    }), !isLoading && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: currData.map(key => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Details_SearchInfo, {
          name: key.name,
          id: key.id,
          image: key.image,
          address: key.address,
          description: key.description,
          isLoading: isLoading
        }, key.id))
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: circArr
      }), pageNum != 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: SearchInfo_module_default.a.nextBtn,
        onClick: minus,
        children: "previous"
      }), pageNum < totalNum / 2 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: SearchInfo_module_default.a.nextBtn,
        onClick: plus,
        children: "next"
      })]
    })]
  });
};

/* harmony default export */ var AllRestaurants_search = __webpack_exports__["default"] = (search);

/***/ }),

/***/ "ZJlY":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__K0CRX",
	"detailCard": "Card_detailCard__1Soue",
	"itemCard": "Card_itemCard__1wKsw"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });