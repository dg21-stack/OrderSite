module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/AllRestaurants/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/Card/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Card\\Card.js";


const Card = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Card/Card.module.css":
/*!*****************************************!*\
  !*** ./components/Card/Card.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__K0CRX",
	"detailCard": "Card_detailCard__1Soue",
	"itemCard": "Card_itemCard__1wKsw"
};


/***/ }),

/***/ "./components/Cart/ModalCart.js":
/*!**************************************!*\
  !*** ./components/Cart/ModalCart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_use_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/use-context */ "./components/store/use-context.js");
/* harmony import */ var _ModalCartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalCartItem */ "./components/Cart/ModalCartItem.js");
/* harmony import */ var _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModalCart.module.css */ "./components/Cart/ModalCart.module.css");
/* harmony import */ var _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ModalCart_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Cart\\ModalCart.js";






const ModalCart = () => {
  const cartCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_use_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  const clickHandler = () => {
    cartCtx.toggle();
  };

  if (cartCtx.currCart === undefined || cartCtx.items === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.backdrop,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("container", {
        className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
        style: {
          height: '40%'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
          children: ["Your Cart", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 9
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.span,
          children: "Cart Empty "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: clickHandler,
          children: " Close "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 4
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 16
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.backdrop,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("container", {
      className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
        children: ["Your Cart", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), cartCtx.currCart.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ModalCartItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        total: item.amount,
        price: item.price,
        totalPrice: item.total,
        name: item.item,
        index: item
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 48
      }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: " Total: "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 10
        }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          children: [" $", cartCtx.totalprice, ".00"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 26
        }, undefined), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: clickHandler,
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => {
          cartCtx.toggle();
          router.push('/checkout');
        },
        children: "Checkout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ModalCart);

/***/ }),

/***/ "./components/Cart/ModalCart.module.css":
/*!**********************************************!*\
  !*** ./components/Cart/ModalCart.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "ModalCart_container__1CN0Y",
	"slidein": "ModalCart_slidein__Zi-F5",
	"emptyContainer": "ModalCart_emptyContainer__2o2fJ",
	"name": "ModalCart_name__30o5-",
	"title": "ModalCart_title__1ptw6",
	"button": "ModalCart_button__9nrFJ",
	"right": "ModalCart_right__DFnh4",
	"span": "ModalCart_span__3rxZ1",
	"backdrop": "ModalCart_backdrop__U9fWY",
	"visibility": "ModalCart_visibility__2Qw8J",
	"orderButton": "ModalCart_orderButton__3IEQi"
};


/***/ }),

/***/ "./components/Cart/ModalCartItem.js":
/*!******************************************!*\
  !*** ./components/Cart/ModalCartItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_use_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/use-context */ "./components/store/use-context.js");
/* harmony import */ var _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalCart.module.css */ "./components/Cart/ModalCart.module.css");
/* harmony import */ var _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Cart\\ModalCartItem.js";




const ModalCartItem = props => {
  const cartCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_use_context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const addHandler = () => {
    cartCtx.append(props.name, props.price);
  };

  const removeHandler = () => {
    cartCtx.remove(props.name);
  };

  if (props.total === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 16
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.left,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.name,
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Price:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 14
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          children: [" $", props.price, ".00"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 27
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          children: ["$", props.totalPrice, ".00"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 14
        }, undefined), " / ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [props.total, " items "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 46
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: addHandler,
        children: " + "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: removeHandler,
        children: " - "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
      styles: {
        border: 'solid 0.4px rgba(0, 0, 0,0.5)'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ModalCartItem);

/***/ }),

/***/ "./components/Cart/ModalDisplay.js":
/*!*****************************************!*\
  !*** ./components/Cart/ModalDisplay.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_use_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/use-context */ "./components/store/use-context.js");
/* harmony import */ var _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalCart.module.css */ "./components/Cart/ModalCart.module.css");
/* harmony import */ var _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ModalItemDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModalItemDisplay */ "./components/Cart/ModalItemDisplay.js");

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Cart\\ModalDisplay.js";





const ModalDisplay = props => {
  const cartCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_use_context__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.itemContainer,
    children: [props.list.map(items => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ModalItemDisplay__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: items.name,
      price: items.price
    }, items.id, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 36
    }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        fontWeight: '600'
      },
      children: ["Total items in Cart: ", cartCtx.items]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.orderButton,
      onClick: props.displayHandler,
      children: "Close Store"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ModalDisplay);

/***/ }),

/***/ "./components/Cart/ModalItemDisplay.js":
/*!*********************************************!*\
  !*** ./components/Cart/ModalItemDisplay.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_use_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/use-context */ "./components/store/use-context.js");
/* harmony import */ var _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalCart.module.css */ "./components/Cart/ModalCart.module.css");
/* harmony import */ var _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Cart\\ModalItemDisplay.js";




const ModalItemDisplay = props => {
  const cartCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_use_context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const addHandler = () => {
    cartCtx.append(props.name, parseInt(props.price));
  };

  const minusHandler = () => {
    cartCtx.remove(props.name);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      marginBottom: '20px'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.left,
      style: {
        display: 'inline'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.name,
        style: {
          fontSize: '18px'
        },
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: "Price:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 14
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            fontWeight: 'none',
            fontStyle: 'italic'
          },
          children: [" $", props.price, ".00"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 27
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: addHandler,
        className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.orderButton,
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: minusHandler,
        className: _ModalCart_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.orderButton,
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
      style: {
        marginTop: '15px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ModalItemDisplay);

/***/ }),

/***/ "./components/RestaurantList/Restaurant.js":
/*!*************************************************!*\
  !*** ./components/RestaurantList/Restaurant.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card/Card */ "./components/Card/Card.js");
/* harmony import */ var _RestaurantItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RestaurantItem */ "./components/RestaurantList/RestaurantItem.js");
/* harmony import */ var _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RestaurantItem.module.css */ "./components/RestaurantList/RestaurantItem.module.css");
/* harmony import */ var _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\RestaurantList\\Restaurant.js";






const Restaurant = props => {
  const {
    0: circArr,
    1: setCircArr
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setCircArr(prevVal => {
      prevVal = [];

      while (prevVal.length < props.total / 2) {
        if (prevVal.length == props.pageNum - 1) {
          prevVal.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectedBtn,
            children: " \u25CF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 30
          }, undefined));
        } else {
          prevVal.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: 'rgba(147, 25, 7,0.9)'
            },
            children: " \u25CF "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 26
          }, undefined));
        }
      }

      return prevVal;
    });
  }, [props.plus, props.minus]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [props.isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.userContainer,
        style: {
          marginBottom: '250px',
          marginTop: '250px'
        },
        children: "Loading Restaurants..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }, undefined), !props.isLoading && props.res.map(r => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RestaurantItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: r.id,
        image: r.image,
        name: r.name,
        description: r.description,
        address: r.address,
        menu: r.menu
      }, r.id, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: circArr
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined), !(props.pageNum == 1) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nextBtn,
        onClick: props.minus,
        children: "Previous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 31
      }, undefined), props.total % 2 == 0 ? props.pageNum != parseInt(props.total / 2) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nextBtn,
        onClick: props.plus,
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 12
      }, undefined) : props.pageNum < parseInt(props.total / 2) + 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.nextBtn,
        onClick: props.plus,
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 12
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Restaurant);

/***/ }),

/***/ "./components/RestaurantList/RestaurantItem.js":
/*!*****************************************************!*\
  !*** ./components/RestaurantList/RestaurantItem.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card/Card */ "./components/Card/Card.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RestaurantItem.module.css */ "./components/RestaurantList/RestaurantItem.module.css");
/* harmony import */ var _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_use_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/use-context */ "./components/store/use-context.js");
/* harmony import */ var _Cart_ModalDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Cart/ModalDisplay */ "./components/Cart/ModalDisplay.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\RestaurantList\\RestaurantItem.js";







const RestaurantItem = props => {
  const cartCtx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_use_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const {
    0: display,
    1: setDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  const businessDetails = () => {
    router.push(`/AllRestaurants/${props.id.toString()}`);
  };

  const displayHandler = () => {
    if (display == 0) {
      setDisplay((props.menu.length + 1) * 150);
    } else {
      setDisplay(0);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.restaurantContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      className: _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imageContainer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.subtitles,
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.description,
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.btn,
      onClick: businessDetails,
      children: "Business Details"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: displayHandler,
      className: display == 0 ? _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.orderButton : `${_RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.orderButton} ${_RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.on}`,
      children: " Click Here to Display Menu "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.visibility,
      style: {
        maxHeight: display
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Cart_ModalDisplay__WEBPACK_IMPORTED_MODULE_5__["default"], {
        list: props.menu,
        displayHandler: displayHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (RestaurantItem);

/***/ }),

/***/ "./components/RestaurantList/RestaurantItem.module.css":
/*!*************************************************************!*\
  !*** ./components/RestaurantList/RestaurantItem.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"restaurantContainer": "RestaurantItem_restaurantContainer__6S20Q",
	"btn": "RestaurantItem_btn__17enW",
	"description": "RestaurantItem_description__3MOBJ",
	"imageContainer": "RestaurantItem_imageContainer__3kx2t",
	"orderButton": "RestaurantItem_orderButton__2aorh",
	"on": "RestaurantItem_on__PbNBp",
	"nextBtn": "RestaurantItem_nextBtn__314l-",
	"selectedBtn": "RestaurantItem_selectedBtn__2LEb9",
	"userContainer": "RestaurantItem_userContainer__2UydV",
	"subtitle": "RestaurantItem_subtitle__3AkTW",
	"subtitles": "RestaurantItem_subtitles__1J_bw",
	"visibility": "RestaurantItem_visibility__1uN3Q"
};


/***/ }),

/***/ "./components/store/use-context.js":
/*!*****************************************!*\
  !*** ./components/store/use-context.js ***!
  \*****************************************/
/*! exports provided: AuthContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContextProvider", function() { return AuthContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card/Card */ "./components/Card/Card.js");

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\store\\use-context.js";


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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: AuthContext,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 254,
    columnNumber: 12
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);

/***/ }),

/***/ "./pages/AllRestaurants/index.js":
/*!***************************************!*\
  !*** ./pages/AllRestaurants/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_store_use_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/store/use-context */ "./components/store/use-context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_RestaurantList_Restaurant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/RestaurantList/Restaurant */ "./components/RestaurantList/Restaurant.js");
/* harmony import */ var _components_Cart_ModalCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Cart/ModalCart */ "./components/Cart/ModalCart.js");
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Card/Card */ "./components/Card/Card.js");
/* harmony import */ var _components_RestaurantList_RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/RestaurantList/RestaurantItem.module.css */ "./components/RestaurantList/RestaurantItem.module.css");
/* harmony import */ var _components_RestaurantList_RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_RestaurantList_RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\pages\\AllRestaurants\\index.js";









const AllRestaurants = () => {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: resList,
    1: setResList
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: currList,
    1: setCurrList
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);
  const {
    0: totalNum,
    1: setTotalNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);

  async function getter(enteredItemData = 1) {
    setIsLoading(true);
    const response = await fetch(`../api/getResHandler?pageIndex=${enteredItemData}&pageSize=2`, {
      method: 'GET'
    });
    const data = await response.json();
    setIsLoading(false);

    if (!totalNum) {
      setTotalNum(data[0].totalRecords[0].description);
    }

    setResList(data[0].data);
  }

  const authCtx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_store_use_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const setter = () => {
    setCurrList(prevVal => {
      if (totalNum / 2 > prevVal) {
        prevVal++;
      }

      getter(prevVal);
      return prevVal;
    });
  };

  const plus = () => {
    console.log('hrllo');
    setCurrList(prevVal => {
      if (totalNum / 2 > prevVal) {
        prevVal++;
        getter(prevVal);
      }

      return prevVal;
    });
  };

  const minus = () => {
    setCurrList(prevVal => {
      if (prevVal > 1) {
        prevVal--;
        getter(prevVal);
      }

      return prevVal;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getter();

    if (!authCtx.isLoggedIn) {
      router.push('/');
    }

    if (authCtx.isBusiness) {
      router.push('/business');
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Restaurants"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _components_RestaurantList_RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.userContainer,
        children: ["Welcome, ", authCtx.user, "!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _components_RestaurantList_RestaurantItem_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.subtitle,
        children: "Be sure to Grab Something Tasty Here at ReactEats!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }, undefined), authCtx.isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Cart_ModalCart__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 28
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RestaurantList_Restaurant__WEBPACK_IMPORTED_MODULE_4__["default"], {
      res: resList,
      plus: plus,
      minus: minus,
      isLoading: isLoading,
      total: totalNum,
      pageNum: currList
    }, 1, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AllRestaurants);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvTW9kYWxDYXJ0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FydC9Nb2RhbENhcnQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvTW9kYWxDYXJ0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvTW9kYWxEaXNwbGF5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FydC9Nb2RhbEl0ZW1EaXNwbGF5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVzdGF1cmFudExpc3QvUmVzdGF1cmFudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3RhdXJhbnRMaXN0L1Jlc3RhdXJhbnRJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVzdGF1cmFudExpc3QvUmVzdGF1cmFudEl0ZW0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JlL3VzZS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0FsbFJlc3RhdXJhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJjbGFzc2VzIiwiY2FyZCIsImNoaWxkcmVuIiwiTW9kYWxDYXJ0IiwiY2FydEN0eCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsImNsaWNrSGFuZGxlciIsInRvZ2dsZSIsImN1cnJDYXJ0IiwidW5kZWZpbmVkIiwiaXRlbXMiLCJzdHlsZXMiLCJiYWNrZHJvcCIsImNvbnRhaW5lciIsImhlaWdodCIsInRpdGxlIiwic3BhbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImFtb3VudCIsInByaWNlIiwidG90YWwiLCJ0b3RhbHByaWNlIiwicHVzaCIsIk1vZGFsQ2FydEl0ZW0iLCJhZGRIYW5kbGVyIiwiYXBwZW5kIiwibmFtZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJsZWZ0IiwicmlnaHQiLCJ0b3RhbFByaWNlIiwiYm9yZGVyIiwiTW9kYWxEaXNwbGF5IiwiQ2FydENvbnRleHQiLCJpdGVtQ29udGFpbmVyIiwibGlzdCIsImlkIiwiZm9udFdlaWdodCIsIm9yZGVyQnV0dG9uIiwiZGlzcGxheUhhbmRsZXIiLCJNb2RhbEl0ZW1EaXNwbGF5IiwicGFyc2VJbnQiLCJtaW51c0hhbmRsZXIiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJtYXJnaW5Ub3AiLCJSZXN0YXVyYW50IiwiY2lyY0FyciIsInNldENpcmNBcnIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByZXZWYWwiLCJsZW5ndGgiLCJwYWdlTnVtIiwic2VsZWN0ZWRCdG4iLCJjb2xvciIsInBsdXMiLCJtaW51cyIsImlzTG9hZGluZyIsInVzZXJDb250YWluZXIiLCJyZXMiLCJyIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJtZW51IiwibmV4dEJ0biIsIlJlc3RhdXJhbnRJdGVtIiwic2V0RGlzcGxheSIsImJ1c2luZXNzRGV0YWlscyIsInRvU3RyaW5nIiwicmVzdGF1cmFudENvbnRhaW5lciIsImltYWdlQ29udGFpbmVyIiwic3VidGl0bGVzIiwiYnRuIiwib24iLCJ2aXNpYmlsaXR5IiwibWF4SGVpZ2h0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidG9rZW4iLCJpc0xvZ2dlZEluIiwibG9naW4iLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImJ1c2luZXNzIiwibG9nb3V0IiwidXNlciIsImlzQnVzaW5lc3MiLCJpc09wZW4iLCJzZWFyY2hTdHIiLCJjaGVja291dCIsImZpbmRJbmRleCIsInB1c2hTdHIiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwidG9rZW4wIiwidG9rZW4xIiwidG9rZW4yIiwidG9rZW4zIiwidG9rZW40IiwidG9rZW41IiwidG9rZW42IiwiQWxsUmVzdGF1cmFudHMiLCJzZXRJc0xvYWRpbmciLCJyZXNMaXN0Iiwic2V0UmVzTGlzdCIsImN1cnJMaXN0Iiwic2V0Q3Vyckxpc3QiLCJ0b3RhbE51bSIsInNldFRvdGFsTnVtIiwiZ2V0dGVyIiwiZW50ZXJlZEl0ZW1EYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwidG90YWxSZWNvcmRzIiwiYXV0aEN0eCIsInNldHRlciIsImNvbnNvbGUiLCJsb2ciLCJzdWJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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Q0FBRDtBQUFBLDRCQUNILHFFQUFDLGdEQUFEO0FBQUEsNkJBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHLGVBRUgscUVBQUMsNkRBQUQ7QUFBQSw4QkFBTTtBQUFLLGlCQUFTLEVBQUliLDJGQUFNLENBQUNxRCxhQUF6QjtBQUFBLGdDQUFrRDJELE9BQU8sQ0FBQy9CLElBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTixlQUNBO0FBQUssaUJBQVMsRUFBSWpGLDJGQUFNLENBQUNvSCxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkcsRUFJRkosT0FBTyxDQUFDN0IsTUFBUixpQkFBa0IscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKaEIsZUFLSCxxRUFBQyw2RUFBRDtBQUNBLFNBQUcsRUFBSWUsT0FEUDtBQUVBLFVBQUksRUFBSWhELElBRlI7QUFHQSxXQUFLLEVBQUlDLEtBSFQ7QUFJQSxlQUFTLEVBQUlDLFNBSmI7QUFLQSxXQUFLLEVBQUlrRCxRQUxUO0FBTUEsYUFBTyxFQUFJRjtBQU5YLE9BT08sQ0FQUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBZUgsQ0ExRUQ7O0FBOEVlSiw2RUFBZixFOzs7Ozs7Ozs7OztBQ3ZGQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9BbGxSZXN0YXVyYW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvQWxsUmVzdGF1cmFudHMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fSzBDUlhcIixcblx0XCJkZXRhaWxDYXJkXCI6IFwiQ2FyZF9kZXRhaWxDYXJkX18xU291ZVwiLFxuXHRcIml0ZW1DYXJkXCI6IFwiQ2FyZF9pdGVtQ2FyZF9fMXdLc3dcIlxufTtcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi9zdG9yZS91c2UtY29udGV4dFwiO1xyXG5pbXBvcnQgTW9kYWxDYXJ0SXRlbSBmcm9tICcuL01vZGFsQ2FydEl0ZW0nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01vZGFsQ2FydC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE1vZGFsQ2FydCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNhcnRDdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNhcnRDdHgudG9nZ2xlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2FydEN0eC5jdXJyQ2FydCA9PT0gdW5kZWZpbmVkIHx8IGNhcnRDdHguaXRlbXMgPT09IDApe1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tkcm9wfT5cclxuICAgICAgICA8Y29udGFpbmVyIGNsYXNzTmFtZSA9IHtzdHlsZXMuY29udGFpbmVyfSBzdHlsZSA9IHt7aGVpZ2h0OiAnNDAlJ319ID5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PllvdXIgQ2FydFxyXG4gICAgICAgIDxoci8+PC9oMj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwYW59PkNhcnQgRW1wdHkgPC9kaXY+ICBcclxuICAgPGJ1dHRvbiBvbkNsaWNrID0ge2NsaWNrSGFuZGxlcn0+IENsb3NlIDwvYnV0dG9uPlxyXG4gICA8L2NvbnRhaW5lcj5cclxuICAgPC9kaXY+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2Ryb3B9PlxyXG4gICAgICAgIDxjb250YWluZXIgY2xhc3NOYW1lID0ge3N0eWxlcy5jb250YWluZXJ9ID5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PllvdXIgQ2FydFxyXG4gICAgICAgIDxoci8+PC9oMj5cclxuICAgIFxyXG4gICAgICAgIHtjYXJ0Q3R4LmN1cnJDYXJ0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IDxNb2RhbENhcnRJdGVtIHRvdGFsID0ge2l0ZW0uYW1vdW50fSBwcmljZSA9IHtpdGVtLnByaWNlfSB0b3RhbFByaWNlID0ge2l0ZW0udG90YWx9IG5hbWUgPSB7aXRlbS5pdGVtfSBpbmRleCA9IHtpdGVtfSBrZXkgPSB7aW5kZXh9Lz4gKX1cclxuICAgIDxkaXY+PGI+IFRvdGFsOiA8L2I+IDxpPiAke2NhcnRDdHgudG90YWxwcmljZX0uMDA8L2k+IDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrID0ge2NsaWNrSGFuZGxlcn0+Q2xvc2U8L2J1dHRvbj5cclxuICAgIDxidXR0b24gb25DbGljayA9eygpID0+IHtjYXJ0Q3R4LnRvZ2dsZSgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvY2hlY2tvdXQnKX19PkNoZWNrb3V0PC9idXR0b24+XHJcbiAgICA8L2NvbnRhaW5lcj5cclxuXHJcbiAgICA8L2Rpdj4gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsQ2FydDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJNb2RhbENhcnRfY29udGFpbmVyX18xQ04wWVwiLFxuXHRcInNsaWRlaW5cIjogXCJNb2RhbENhcnRfc2xpZGVpbl9fWmktRjVcIixcblx0XCJlbXB0eUNvbnRhaW5lclwiOiBcIk1vZGFsQ2FydF9lbXB0eUNvbnRhaW5lcl9fMm8yZkpcIixcblx0XCJuYW1lXCI6IFwiTW9kYWxDYXJ0X25hbWVfXzMwbzUtXCIsXG5cdFwidGl0bGVcIjogXCJNb2RhbENhcnRfdGl0bGVfXzFwdHc2XCIsXG5cdFwiYnV0dG9uXCI6IFwiTW9kYWxDYXJ0X2J1dHRvbl9fOW5yRkpcIixcblx0XCJyaWdodFwiOiBcIk1vZGFsQ2FydF9yaWdodF9fREZuaDRcIixcblx0XCJzcGFuXCI6IFwiTW9kYWxDYXJ0X3NwYW5fXzNyeFoxXCIsXG5cdFwiYmFja2Ryb3BcIjogXCJNb2RhbENhcnRfYmFja2Ryb3BfX1U5ZldZXCIsXG5cdFwidmlzaWJpbGl0eVwiOiBcIk1vZGFsQ2FydF92aXNpYmlsaXR5X18yUXc4SlwiLFxuXHRcIm9yZGVyQnV0dG9uXCI6IFwiTW9kYWxDYXJ0X29yZGVyQnV0dG9uX18zSUVRaVwiXG59O1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vc3RvcmUvdXNlLWNvbnRleHRcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTW9kYWxDYXJ0Lm1vZHVsZS5jc3MnO1xyXG5jb25zdCBNb2RhbENhcnRJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjYXJ0Q3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgICBjb25zdCBhZGRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNhcnRDdHguYXBwZW5kKHByb3BzLm5hbWUsIHByb3BzLnByaWNlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY2FydEN0eC5yZW1vdmUocHJvcHMubmFtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocHJvcHMudG90YWwgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cclxuICAgIH1cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5sZWZ0fT5cclxuICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMubmFtZX0+e3Byb3BzLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgPGRpdj48Yj5QcmljZTo8L2I+PGk+ICR7cHJvcHMucHJpY2V9LjAwPC9pPjwvZGl2PlxyXG4gICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5yaWdodH0+XHJcbiAgICAgICAgPGRpdj48aT4ke3Byb3BzLnRvdGFsUHJpY2V9LjAwPC9pPiAvIDxzcGFuPntwcm9wcy50b3RhbH0gaXRlbXMgPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgXHJcbiBcclxuXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrICA9IHthZGRIYW5kbGVyfT4gKyA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbW92ZUhhbmRsZXJ9PiAtIDwvYnV0dG9uPlxyXG4gICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGhyIHN0eWxlcyA9e3sgYm9yZGVyOidzb2xpZCAwLjRweCByZ2JhKDAsIDAsIDAsMC41KSd9fS8+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDYXJ0SXRlbTsiLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tIFwiLi4vc3RvcmUvdXNlLWNvbnRleHRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsQ2FydC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IE1vZGFsSXRlbURpc3BsYXkgZnJvbSBcIi4vTW9kYWxJdGVtRGlzcGxheVwiO1xyXG5cclxuY29uc3QgTW9kYWxEaXNwbGF5ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjYXJ0Q3R4ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtQ29udGFpbmVyfT5cclxuICAgICAgICB7cHJvcHMubGlzdC5tYXAoKGl0ZW1zKT0+ICg8TW9kYWxJdGVtRGlzcGxheSBuYW1lID0ge2l0ZW1zLm5hbWV9IHByaWNlID0ge2l0ZW1zLnByaWNlfSBrZXkgPSB7aXRlbXMuaWR9Lz4pKX1cclxuICAgICAgICA8ZGl2IHN0eWxlID17e2ZvbnRXZWlnaHQ6JzYwMCd9fT5Ub3RhbCBpdGVtcyBpbiBDYXJ0OiB7Y2FydEN0eC5pdGVtc308L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IHtzdHlsZXMub3JkZXJCdXR0b259IG9uQ2xpY2sgPSB7cHJvcHMuZGlzcGxheUhhbmRsZXJ9PkNsb3NlIFN0b3JlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbERpc3BsYXk7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL3N0b3JlL3VzZS1jb250ZXh0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbENhcnQubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBNb2RhbEl0ZW1EaXNwbGF5ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBjYXJ0Q3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgICBjb25zdCBhZGRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNhcnRDdHguYXBwZW5kKHByb3BzLm5hbWUsIHBhcnNlSW50KHByb3BzLnByaWNlKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtaW51c0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY2FydEN0eC5yZW1vdmUocHJvcHMubmFtZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKDxkaXYgc3R5bGUgPXt7bWFyZ2luQm90dG9tOiAnMjBweCd9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9IHN0eWxlID0ge3tkaXNwbGF5OiAnaW5saW5lJ319PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5uYW1lfSBzdHlsZSA9IHt7Zm9udFNpemU6ICcxOHB4J319Pntwcm9wcy5uYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+PGI+UHJpY2U6PC9iPjxkaXYgc3R5bGUgPSB7e2ZvbnRXZWlnaHQ6ICdub25lJywgZm9udFN0eWxlOiAnaXRhbGljJ319PiAke3Byb3BzLnByaWNlfS4wMDwvZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljayA9IHthZGRIYW5kbGVyfSBjbGFzc05hbWUgPSB7c3R5bGVzLm9yZGVyQnV0dG9ufT4rPC9idXR0b24+XHJcbiAgICBcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7bWludXNIYW5kbGVyfSBjbGFzc05hbWUgPSB7c3R5bGVzLm9yZGVyQnV0dG9ufT4tPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGhyIHN0eWxlPXt7bWFyZ2luVG9wOicxNXB4J319Lz5cclxuICAgIDwvZGl2PilcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsSXRlbURpc3BsYXk7IFxyXG4iLCJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9DYXJkL0NhcmRcIjtcclxuaW1wb3J0IFJlc3RhdXJhbnRJdGVtIGZyb20gXCIuL1Jlc3RhdXJhbnRJdGVtXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9SZXN0YXVyYW50SXRlbS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjsgIFxyXG5jb25zdCBSZXN0YXVyYW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY2lyY0Fyciwgc2V0Q2lyY0Fycl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRDaXJjQXJyKHByZXZWYWwgPT4ge1xyXG4gICAgICAgICAgICBwcmV2VmFsID0gW107XHJcbiAgICAgICAgd2hpbGUgKHByZXZWYWwubGVuZ3RoIDwgcHJvcHMudG90YWwgLyAyICkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocHJldlZhbC5sZW5ndGggPT0gcHJvcHMucGFnZU51bSAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHByZXZWYWwucHVzaCg8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLnNlbGVjdGVkQnRufT4gJiM5Njc5Ozwvc3Bhbj4pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByZXZWYWwucHVzaCg8c3BhbiBzdHlsZSA9IHt7Y29sb3I6ICdyZ2JhKDE0NywgMjUsIDcsMC45KSd9fT4gJiM5Njc5OyA8L3NwYW4+KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJldlZhbDtcclxuICAgIH0pXHJcbiAgICB9LCBbcHJvcHMucGx1cywgcHJvcHMubWludXNdKVxyXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cclxuICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAge3Byb3BzLmlzTG9hZGluZyAmJiA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSB7c3R5bGVzLnVzZXJDb250YWluZXJ9XHJcbiAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzI1MHB4JywgbWFyZ2luVG9wOicyNTBweCdcclxuICAgICAgICAgICAgfX0+TG9hZGluZyBSZXN0YXVyYW50cy4uLjwvZGl2Pn1cclxuICAgICAgICAgICAgeyFwcm9wcy5pc0xvYWRpbmcgJiYgcHJvcHMucmVzLm1hcCgocikgPT4gKFxyXG4gICAgICAgICAgICA8UmVzdGF1cmFudEl0ZW1cclxuICAgICAgICAgICAgaWQgPSB7ci5pZH1cclxuICAgICAgICAgICAgaW1hZ2UgPSB7ci5pbWFnZX1cclxuICAgICAgICAgICAgbmFtZSA9IHtyLm5hbWV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0ge3IuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIGFkZHJlc3MgPSB7ci5hZGRyZXNzfVxyXG4gICAgICAgICAgICBtZW51ID0ge3IubWVudX1cclxuICAgICAgICAgICAga2V5ID0ge3IuaWR9XHJcbiAgICAgICAgICAgICAvPlxyXG4gICAgKSlcclxuICAgIH1cclxuICAgIDxkaXY+e2NpcmNBcnJ9PC9kaXY+XHJcbiAgXHJcbiAgICB7IShwcm9wcy5wYWdlTnVtID09IDEpICYmIDxidXR0b24gY2xhc3NOYW1lID0ge3N0eWxlcy5uZXh0QnRufSBvbkNsaWNrID0ge3Byb3BzLm1pbnVzfT5QcmV2aW91czwvYnV0dG9uPn0gICAgXHJcbiAgICB7cHJvcHMudG90YWwgJSAyID09IDAgPyBwcm9wcy5wYWdlTnVtICE9IHBhcnNlSW50KHByb3BzLnRvdGFsIC8gMikgIFxyXG4gICAgICAgICYmIDxidXR0b24gY2xhc3NOYW1lID0ge3N0eWxlcy5uZXh0QnRufSAgb25DbGljayA9IHtwcm9wcy5wbHVzfT5OZXh0PC9idXR0b24+IFxyXG4gICAgICAgIDogIHByb3BzLnBhZ2VOdW0gPCBwYXJzZUludChwcm9wcy50b3RhbCAvIDIpICsgMSBcclxuICAgICAgICAmJiA8YnV0dG9uIGNsYXNzTmFtZSA9IHtzdHlsZXMubmV4dEJ0bn0gb25DbGljayA9IHtwcm9wcy5wbHVzfT5OZXh0PC9idXR0b24+fSBcclxuICAgIDwvQ2FyZD5cclxuICAgIFxyXG4gICAgPC9GcmFnbWVudD5cclxufSAgIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudDsiLCJpbXBvcnQgQ2FyZCBmcm9tIFwiLi4vQ2FyZC9DYXJkXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUmVzdGF1cmFudEl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL3N0b3JlL3VzZS1jb250ZXh0XCI7XHJcbmltcG9ydCBNb2RhbERpc3BsYXkgZnJvbSBcIi4uL0NhcnQvTW9kYWxEaXNwbGF5XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5jb25zdCBSZXN0YXVyYW50SXRlbSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2FydEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBidXNpbmVzc0RldGFpbHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9BbGxSZXN0YXVyYW50cy8ke3Byb3BzLmlkLnRvU3RyaW5nKCl9YClcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc3BsYXlIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChkaXNwbGF5ID09IDApe1xyXG4gICAgICAgICAgICBzZXREaXNwbGF5KChwcm9wcy5tZW51Lmxlbmd0aCArIDEpICogMTUwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldERpc3BsYXkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5yZXN0YXVyYW50Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxoMz57cHJvcHMubmFtZX08L2gzPlxyXG4gICAgICAgICAgPGltZyBzcmMgPSB7cHJvcHMuaW1hZ2V9IGNsYXNzTmFtZSA9IHtzdHlsZXMuaW1hZ2VDb250YWluZXJ9Lz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlc30+e3Byb3BzLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pntwcm9wcy5hZGRyZXNzfTwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0ge3N0eWxlcy5idG59IG9uQ2xpY2sgPSB7YnVzaW5lc3NEZXRhaWxzfT5CdXNpbmVzcyBEZXRhaWxzPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge2Rpc3BsYXlIYW5kbGVyfSBcclxuICAgICAgICBjbGFzc05hbWUgPSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXkgPT0gMCA/IHN0eWxlcy5vcmRlckJ1dHRvbiA6IGAke3N0eWxlcy5vcmRlckJ1dHRvbn0gJHtzdHlsZXMub259YH0+IENsaWNrIEhlcmUgdG8gRGlzcGxheSBNZW51IDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy52aXNpYmlsaXR5fSBzdHlsZSA9IHt7bWF4SGVpZ2h0OiBkaXNwbGF5fX0+IFxyXG4gICAgICAgIDxNb2RhbERpc3BsYXkgbGlzdCA9IHtwcm9wcy5tZW51fSBkaXNwbGF5SGFuZGxlciA9IHtkaXNwbGF5SGFuZGxlcn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIvPlxyXG4gICAgPC9kaXY+XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50SXRlbTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZXN0YXVyYW50Q29udGFpbmVyXCI6IFwiUmVzdGF1cmFudEl0ZW1fcmVzdGF1cmFudENvbnRhaW5lcl9fNlMyMFFcIixcblx0XCJidG5cIjogXCJSZXN0YXVyYW50SXRlbV9idG5fXzE3ZW5XXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJSZXN0YXVyYW50SXRlbV9kZXNjcmlwdGlvbl9fM01PQkpcIixcblx0XCJpbWFnZUNvbnRhaW5lclwiOiBcIlJlc3RhdXJhbnRJdGVtX2ltYWdlQ29udGFpbmVyX18za3gydFwiLFxuXHRcIm9yZGVyQnV0dG9uXCI6IFwiUmVzdGF1cmFudEl0ZW1fb3JkZXJCdXR0b25fXzJhb3JoXCIsXG5cdFwib25cIjogXCJSZXN0YXVyYW50SXRlbV9vbl9fUGJOQnBcIixcblx0XCJuZXh0QnRuXCI6IFwiUmVzdGF1cmFudEl0ZW1fbmV4dEJ0bl9fMzE0bC1cIixcblx0XCJzZWxlY3RlZEJ0blwiOiBcIlJlc3RhdXJhbnRJdGVtX3NlbGVjdGVkQnRuX18yTEViOVwiLFxuXHRcInVzZXJDb250YWluZXJcIjogXCJSZXN0YXVyYW50SXRlbV91c2VyQ29udGFpbmVyX18yVXlkVlwiLFxuXHRcInN1YnRpdGxlXCI6IFwiUmVzdGF1cmFudEl0ZW1fc3VidGl0bGVfXzNBa1RXXCIsXG5cdFwic3VidGl0bGVzXCI6IFwiUmVzdGF1cmFudEl0ZW1fc3VidGl0bGVzX18xSl9id1wiLFxuXHRcInZpc2liaWxpdHlcIjogXCJSZXN0YXVyYW50SXRlbV92aXNpYmlsaXR5X18xdU4zUVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9DYXJkL0NhcmRcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgICB0b2tlbjogJycsXHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIGxvZ2luOiAodG9rZW4sIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJ1c2luZXNzKSA9PiB7fSxcclxuICAgIGxvZ291dDogKCkgPT4ge30sXHJcbiAgICB1c2VyOiAnJyxcclxuICAgIGlzQnVzaW5lc3M6IGZhbHNlLFxyXG4gICAgaXRlbXM6IDAsXHJcbiAgICB0b3RhbFByaWNlOiAwLFxyXG4gICAgaXNPcGVuOiBmYWxzZSxcclxuICAgIGN1cnJDYXJ0OiBbXSxcclxuICAgIHNlYXJjaFN0cjogJycsXHJcbiAgICB0b2dnbGU6ICgpID0+IHt9LFxyXG4gICAgYXBwZW5kOiAoaXRlbSkgPT4ge30sXHJcbiAgICByZW1vdmU6IChpdGVtKSA9PiB7fSxcclxuICAgIGNoZWNrb3V0OiAoKSA9PiB7fSxcclxuICAgIGZpbmRJbmRleDogKG5hbWUpID0+IHt9LFxyXG4gICAgcHVzaFN0cjogKCkgPT4ge31cclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4wID0gW107XHJcbiAgICBsZXQgdG9rZW4xID0gMDtcclxuICAgIGxldCB0b2tlbjIgPSAwO1xyXG4gICAgbGV0IHRva2VuMyA9ICcnO1xyXG4gICAgbGV0IHRva2VuNCA9IGZhbHNlO1xyXG4gICAgbGV0IHRva2VuNSA9ICcnO1xyXG4gICAgbGV0IHRva2VuNiA9IFtdO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcclxuICAgIGNvbnN0IGNhcnREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKTtcclxuICAgIGNvbnN0IGl0ZW1EYXRhID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW0nKSk7XHJcbiAgICBjb25zdCBwcmljZURhdGEgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG90YWwnKSk7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBidXNpbmVzc0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnVzaW5lc3MnKTtcclxuICAgIGNvbnN0IHNlYXJjaERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VhcmNoJyk7XHJcblxyXG4gICAgaWYgKGNhcnREYXRhKSB7XHJcbiAgICAgICAgdG9rZW4wID1KU09OLnBhcnNlKGNhcnREYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChpdGVtRGF0YSkge1xyXG4gICAgICAgIHRva2VuMSA9IGl0ZW1EYXRhOyBcclxuICAgIH1cclxuICAgIGlmIChwcmljZURhdGEpIHtcclxuICAgICAgICB0b2tlbjIgPSBwcmljZURhdGE7IFxyXG4gICAgfVxyXG4gICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgICAgdG9rZW4zID0gdXNlckRhdGE7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgdG9rZW40ID0gKGJ1c2luZXNzRGF0YSA9PT0gJ3RydWUnKVxyXG4gXHJcbiAgICBpZiAoc2VhcmNoRGF0YSkge1xyXG4gICAgICAgdG9rZW41ID0gc2VhcmNoRGF0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKHRva2VuMCk7XHJcbiAgICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZSh0b2tlbjEpO1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0b3RhbEFtdCwgc2V0VG90YWxBbXRdID0gdXNlU3RhdGUodG9rZW4yKTtcclxuICAgIGNvbnN0ICBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSh0b2tlbjMpO1xyXG4gICAgY29uc3QgW2lzQnVzaW5lc3MsIHNldElzQnVzaW5lc3NdID0gdXNlU3RhdGUodG9rZW40KTtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSh0b2tlbjUpXHJcblxyXG5cclxuICAgIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAobSkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaChtKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoJyxtKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZpbmRJbmRleCA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgdmFsdWVzIGluIGNhcnQpe1xyXG4gICAgICAgICAgICBpZiAoY2FydFt2YWx1ZXNdLml0ZW0gPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXBwZW5kSGFuZGxlciA9ICh2YWwsIHByaWNlKSA9PiB7XHJcbiAgICAgICAgbGV0IGEgPSBbXVxyXG4gICAgICAgIGZvciAoY29uc3Qgb2JqZWN0IGluIGNhcnQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYXJ0W29iamVjdF0uaXRlbSA9PT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXJ0KChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2U3RhdGVbb2JqZWN0XS5hbW91bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2U3RhdGVbb2JqZWN0XS50b3RhbCArPSBwcmV2U3RhdGVbb2JqZWN0XS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsSlNPTi5zdHJpbmdpZnkocHJldlN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0SXRlbSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHByZXZTdGF0ZSkgKyAxO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0VG90YWxBbXQocHJldlN0YXRlID0+IHtyZXR1cm4gcHJldlN0YXRlICsgY2FydFtvYmplY3RdLnByaWNlfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbScsIHBhcnNlSW50KGl0ZW0pICsgMSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWwnLHBhcnNlSW50KHRvdGFsQW10KSArIGNhcnRbb2JqZWN0XS5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgaXRlbTogdmFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICBcclxuICAgICAgICBzZXRDYXJ0KChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgaWYgIChwcmV2U3RhdGUgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGUgPSBbLi4ucHJldlN0YXRlICwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IHZhbFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JyxKU09OLnN0cmluZ2lmeShwcmV2U3RhdGUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsSlNPTi5zdHJpbmdpZnkoW3tcclxuICAgICAgICAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgICAgICB0b3RhbDogcHJpY2UsXHJcbiAgICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgICAgaXRlbTogdmFsXHJcbiAgICAgICAgfV0pKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBwcmljZSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgICAgICAgIGl0ZW06IHZhbFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldEl0ZW0oKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQocHJldlN0YXRlKSArIDE7IFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW0nLCBwYXJzZUludChpdGVtKSArIDEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbCcscGFyc2VJbnQodG90YWxBbXQpICsgcHJpY2UpO1xyXG4gICAgICAgIHNldFRvdGFsQW10KHByZXZTdGF0ZSA9PiB7cmV0dXJuIHByZXZTdGF0ZSArIHByaWNlfSk7XHJcblxyXG4gXHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVIYW5kbGVyID0gKHZhbCkgPT4ge1xyXG4gICAgICAgIGxldCBhID0gMFxyXG4gICAgICAgIGZvciAoY29uc3Qgb2JqZWN0IGluIGNhcnQpe1xyXG4gICAgICAgICAgICBpZiAoY2FydFtvYmplY3RdLml0ZW0gPT09IHZhbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FydCgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYSA9IHByZXZTdGF0ZVtvYmplY3RdLmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldlN0YXRlW29iamVjdF0uYW1vdW50ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlN0YXRlW29iamVjdF0uYW1vdW50IC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlN0YXRlW29iamVjdF0udG90YWwgLT0gcHJldlN0YXRlW29iamVjdF0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLEpTT04uc3RyaW5naWZ5KHByZXZTdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0SXRlbSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnRbb2JqZWN0XS5pdGVtICE9IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChwcmV2U3RhdGUpIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FydFtvYmplY3RdLml0ZW0gIT0gMSl7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWwnLHBhcnNlSW50KHRvdGFsQW10KSAtIGNhcnRbb2JqZWN0XS5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUb3RhbEFtdChwcmV2U3RhdGUgPT4gIHByZXZTdGF0ZSAtIGNhcnRbb2JqZWN0XS5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbScsIHBhcnNlSW50KGl0ZW0pIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2dnbGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzT3BlbihwcmV2U3RhdGUgPT4gIXByZXZTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluaXRpYWxUb2tlbjtcclxuICAgIFxyXG4gIFxyXG4gICAgY29uc3QgdG9rZW5EYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgaWYgKHRva2VuRGF0YSl7XHJcbiAgICAgICAgaW5pdGlhbFRva2VuID0gdG9rZW5EYXRhO1xyXG4gICAgfVxyXG4gICAgY29uc3QgW3Rva2VuICxzZXRUb2tlbl0gPSB1c2VTdGF0ZShpbml0aWFsVG9rZW4pO1xyXG5cclxuICAgIGNvbnN0IHVzZXJJc0xvZ2dlZEluID0gISF0b2tlbjtcclxuXHJcbiAgICBjb25zdCBsb2dpbkhhbmRsZXIgPSAodG9rZW4sIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJ1c2luZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgICAgIHNldE5hbWUoZmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsdG9rZW4pO1xyXG4gICAgICAgIHNldElzQnVzaW5lc3MoYnVzaW5lc3MpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdidXNpbmVzcycsYnVzaW5lc3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLGZpcnN0TmFtZSArICcgJyArIGxhc3ROYW1lKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKHRva2VuKSA9PiB7XHJcbiAgICAgICAgc2V0VG9rZW4obnVsbCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgc2V0Q2FydChbXSk7XHJcbiAgICAgICAgc2V0VG90YWxBbXQoMCk7XHJcbiAgICAgICAgc2V0SXNCdXNpbmVzcyhudWxsKTtcclxuICAgICAgICBzZXRJdGVtKDApO1xyXG4gICAgICAgIHNldFRva2VuKCcnKTtcclxuICAgICAgICBzZXROYW1lKCcnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoZWNrb3V0SGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgIHNldFRvdGFsQW10KDApO1xyXG4gICAgICAgIHNldEl0ZW0oMCk7XHJcbiAgICAgICAgc2V0Q2FydChwcmV2VmFsdWUgPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHZhbHVlIGluIHByZXZWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlW3ZhbHVlXS5hbW91bnQgLT0gcHJldlZhbHVlW3ZhbHVlXS5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlW3ZhbHVlXS50b3RhbCAtPSBwcmV2VmFsdWVbdmFsdWVdLnRvdGFsOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkocHJldlZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbCcsMCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtJywgMCk7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxyXG4gICAgICAgIGxvZ2luOiBsb2dpbkhhbmRsZXIsXHJcbiAgICAgICAgbG9nb3V0OiBsb2dvdXRIYW5kbGVyLFxyXG4gICAgICAgIHVzZXI6IG5hbWUsXHJcbiAgICAgICAgaXRlbXM6IGl0ZW0sXHJcbiAgICAgICAgaXNPcGVuOiBpc09wZW4sXHJcbiAgICAgICAgaXNCdXNpbmVzczogaXNCdXNpbmVzcyxcclxuICAgICAgICBjdXJyQ2FydDogY2FydCxcclxuICAgICAgICB0b3RhbHByaWNlOiB0b3RhbEFtdCxcclxuICAgICAgICBzZWFyY2hTdHI6IHNlYXJjaCxcclxuICAgICAgICBwdXNoU3RyOiBzZWFyY2hIYW5kbGVyLFxyXG4gICAgICAgIHRvZ2dsZTogdG9nZ2xlSGFuZGxlcixcclxuICAgICAgICBhcHBlbmQ6IGFwcGVuZEhhbmRsZXIsXHJcbiAgICAgICAgcmVtb3ZlOiByZW1vdmVIYW5kbGVyLFxyXG4gICAgICAgIGNoZWNrb3V0OiBjaGVja291dEhhbmRsZXIsXHJcbiAgICAgICAgZmluZEluZGV4OiBmaW5kSW5kZXhcclxuICAgIH07XHJcbiAgICByZXR1cm4gPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlID0ge2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIH1cclxuICAgIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7QXV0aENvbnRleHR9PlxyXG4gICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG48L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0OyIsImltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdG9yZS91c2UtY29udGV4dFwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUmVzdGF1cmFudExpc3QvUmVzdGF1cmFudFwiO1xyXG5pbXBvcnQgTW9kYWxDYXJ0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcnQvTW9kYWxDYXJ0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmQvQ2FyZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVzdGF1cmFudExpc3QvUmVzdGF1cmFudEl0ZW0ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IEFsbFJlc3RhdXJhbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtyZXNMaXN0LCBzZXRSZXNMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjdXJyTGlzdCwgc2V0Q3Vyckxpc3RdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdG90YWxOdW0sIHNldFRvdGFsTnVtXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0dGVyKGVudGVyZWRJdGVtRGF0YSA9IDEpIHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL2dldFJlc0hhbmRsZXI/cGFnZUluZGV4PSR7ZW50ZXJlZEl0ZW1EYXRhfSZwYWdlU2l6ZT0yYCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBpZiAoIXRvdGFsTnVtKXtcclxuICAgICAgICAgICAgc2V0VG90YWxOdW0oZGF0YVswXS50b3RhbFJlY29yZHNbMF0uZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRSZXNMaXN0KGRhdGFbMF0uZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhdXRoQ3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHNldHRlciA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBzZXRDdXJyTGlzdChwcmV2VmFsID0+IHtcclxuICAgICAgICAgICAgaWYgKHRvdGFsTnVtIC8gMiA+IHByZXZWYWwpIHtcclxuICAgICAgICAgICAgcHJldlZhbCsrOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnZXR0ZXIocHJldlZhbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2VmFsO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBwbHVzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdocmxsbycpO1xyXG4gICAgICAgIHNldEN1cnJMaXN0KHByZXZWYWwgPT4ge1xyXG4gICAgICAgICAgICBpZiAodG90YWxOdW0gLyAyID4gcHJldlZhbCkge1xyXG4gICAgICAgICAgICBwcmV2VmFsKys7IFxyXG4gICAgICAgICAgICBnZXR0ZXIocHJldlZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHByZXZWYWw7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IG1pbnVzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJMaXN0KHByZXZWYWwgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJldlZhbCA+IDEpIHtcclxuICAgICAgICAgICAgcHJldlZhbC0tOyBcclxuICAgICAgICAgICAgZ2V0dGVyKHByZXZWYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2VmFsO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldHRlcigpO1xyXG4gICAgICAgIGlmICghYXV0aEN0eC5pc0xvZ2dlZEluKXtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXV0aEN0eC5pc0J1c2luZXNzKXtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9idXNpbmVzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cclxuICAgICAgICA8SGVhZD48dGl0bGU+UmVzdGF1cmFudHM8L3RpdGxlPjwvSGVhZD5cclxuICAgICAgICA8Q2FyZD48ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMudXNlckNvbnRhaW5lcn0+V2VsY29tZSwge2F1dGhDdHgudXNlcn0hPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLnN1YnRpdGxlfT5CZSBzdXJlIHRvIEdyYWIgU29tZXRoaW5nIFRhc3R5IEhlcmUgYXQgUmVhY3RFYXRzITwvZGl2PjwvQ2FyZD5cclxuICAgICAgICB7YXV0aEN0eC5pc09wZW4gJiYgPE1vZGFsQ2FydC8+fVxyXG4gICAgICAgIDxSZXN0YXVyYW50IFxyXG4gICAgICAgIHJlcyA9IHtyZXNMaXN0fVxyXG4gICAgICAgIHBsdXMgPSB7cGx1c31cclxuICAgICAgICBtaW51cyA9IHttaW51c31cclxuICAgICAgICBpc0xvYWRpbmcgPSB7aXNMb2FkaW5nfVxyXG4gICAgICAgIHRvdGFsID0ge3RvdGFsTnVtfVxyXG4gICAgICAgIHBhZ2VOdW0gPSB7Y3Vyckxpc3R9XHJcbiAgICAgICAga2V5ID0gezF9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbFJlc3RhdXJhbnRzO1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9