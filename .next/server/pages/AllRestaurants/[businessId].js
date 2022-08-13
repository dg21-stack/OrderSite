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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/AllRestaurants/[businessId]/index.js");
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

/***/ "./components/Card/DetailCard.js":
/*!***************************************!*\
  !*** ./components/Card/DetailCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/Card/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Card\\DetailCard.js";


const DetailCard = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detailCard,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DetailCard);

/***/ }),

/***/ "./components/Card/ItemCard.js":
/*!*************************************!*\
  !*** ./components/Card/ItemCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/Card/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Card\\ItemCard.js";


const ItemCard = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.itemCard,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ItemCard);

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

/***/ "./components/Details/Details.js":
/*!***************************************!*\
  !*** ./components/Details/Details.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Details.module.css */ "./components/Details/Details.module.css");
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Details_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Details\\Details.js";



const Description = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.h2,
      children: "About Our Restaurant"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ }),

/***/ "./components/Details/Details.module.css":
/*!***********************************************!*\
  !*** ./components/Details/Details.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"image": "Details_image__3mYnu",
	"title": "Details_title__27BP8",
	"subtitle": "Details_subtitle__3h7r9",
	"description": "Details_description__1pmEZ",
	"h2": "Details_h2__3EoiB",
	"left": "Details_left__3zhCt",
	"productName": "Details_productName__qSOpM",
	"price": "Details_price__3XR_Z",
	"right": "Details_right__eUFwV",
	"cartBtn": "Details_cartBtn__3_YJm",
	"itemContainer": "Details_itemContainer__Pot37",
	"descrip": "Details_descrip__1Skcq",
	"amount": "Details_amount__1QzJM",
	"reviewTitle": "Details_reviewTitle__1HuQq",
	"stars": "Details_stars__312X4",
	"trueBtn": "Details_trueBtn__1nvfr",
	"falseBtn": "Details_falseBtn__2KPdc",
	"str": "Details_str__Y15ag",
	"trueStr": "Details_trueStr__3Awuw",
	"errBtn": "Details_errBtn__1HnKd",
	"normBtn": "Details_normBtn__3HZi4",
	"displayButton": "Details_displayButton__1uR-s",
	"on": "Details_on__1dhCA",
	"nextBtn": "Details_nextBtn__3MWfv",
	"visibility": "Details_visibility__2Ooil",
	"visiOn": "Details_visiOn__1_z6i",
	"input": "Details_input__3yX6e",
	"detailContainer": "Details_detailContainer__Za5dd",
	"date": "Details_date__vXvZU",
	"subject": "Details_subject__1VsUs",
	"user": "Details_user__SemfB",
	"loading": "Details_loading__1QC27",
	"bodyContainer": "Details_bodyContainer__3hiYs",
	"scroller": "Details_scroller__2DaTW",
	"selectedBtn": "Details_selectedBtn__pRlm8",
	"body": "Details_body__232Nl"
};


/***/ }),

/***/ "./components/Details/Menu.js":
/*!************************************!*\
  !*** ./components/Details/Menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ "./components/Details/MenuItem.js");
/* harmony import */ var _store_use_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/use-context */ "./components/store/use-context.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Details.module.css */ "./components/Details/Details.module.css");
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Details_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Details\\Menu.js";





const Menu = props => {
  const authCtx = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_store_use_context__WEBPACK_IMPORTED_MODULE_2__["default"]);

  if (props.menu) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
        style: {
          marginBottom: '20px'
        },
        children: "Menu"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
        style: {
          width: "95%",
          marginBottom: '20px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), props.menu.map((x, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: x.name,
        price: x.price,
        description: x.description,
        index: index,
        cart: authCtx.currCart
      }, x.id, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 38
      }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.cartBtn,
        onClick: authCtx.toggle,
        children: "Open Cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Details/MenuItem.js":
/*!****************************************!*\
  !*** ./components/Details/MenuItem.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.module.css */ "./components/Details/Details.module.css");
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Details_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_use_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/use-context */ "./components/store/use-context.js");

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Details\\MenuItem.js";





const MenuItem = props => {
  var _props$cart, _props$cart2;

  const cartCtx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_use_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  let a = 0;
  const {
    0: currIndex,
    1: setCurrIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setCurrIndex(cartCtx.findIndex(props.name));
  });

  const addHandler = () => {
    cartCtx.append(props.name, parseInt(props.price));
    setCurrIndex(cartCtx.findIndex(props.name));
  };

  const minusHandler = () => {
    cartCtx.remove(props.name);
    setCurrIndex(cartCtx.findIndex(props.name));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.itemContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.left,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.productName,
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.descrip,
        children: props.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.price,
        children: ["$", props.price, ".00"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.amount,
        children: [" Amount in Cart: ", (_props$cart = props.cart) !== null && _props$cart !== void 0 && _props$cart[currIndex] ? (_props$cart2 = props.cart) === null || _props$cart2 === void 0 ? void 0 : _props$cart2[currIndex].amount : 0]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: addHandler,
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: minusHandler,
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MenuItem);

/***/ }),

/***/ "./components/Details/ReviewItem.js":
/*!******************************************!*\
  !*** ./components/Details/ReviewItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.module.css */ "./components/Details/Details.module.css");
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Details_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Details\\ReviewItem.js";


const ReviewItem = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.user,
      children: ["reviewer: ", props.user]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detailContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.date,
        children: props.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subject,
        children: props.subject
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 1
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bodyContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body,
        children: props.body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [" ", props.stars == 5 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 23
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 39
        }, undefined) : props.stars == 4 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 19
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 32
        }, undefined) : props.stars == 3 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 23
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 27
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined) : props.stars == 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 31
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 35
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 37
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 29
        }, undefined) : props.stars == 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 37
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 39
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 41
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 43
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 45
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 37
        }, undefined) : 'error']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewItem);

/***/ }),

/***/ "./components/Details/ReviewPage.js":
/*!******************************************!*\
  !*** ./components/Details/ReviewPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.module.css */ "./components/Details/Details.module.css");
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Details_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ReviewItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewItem */ "./components/Details/ReviewItem.js");

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Details\\ReviewPage.js";




const ReviewPage = props => {
  const subjectRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const bodyRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const {
    0: star1,
    1: setStar1
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: star2,
    1: setStar2
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: star3,
    1: setStar3
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: star4,
    1: setStar4
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: star5,
    1: setStar5
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: err,
    1: setErr
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: display,
    1: setDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: circArr,
    1: setCircArr
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setCircArr(prevVal => {
      prevVal = [];

      while (prevVal.length < props.total / 2) {
        if (prevVal.length == props.pageNum - 1) {
          prevVal.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.selectedBtn,
            children: "  \u25CF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 30
          }, undefined));
        } else {
          prevVal.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              color: '#797979'
            },
            children: " \u25CF"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 26
          }, undefined));
        }
      }

      return prevVal;
    });
  }, [props.plus, props.minus]);

  const starSetter = e => {
    e.preventDefault();

    if (e.target.name == 'star 1') {
      setStar1(prevState => {
        if (star2 || star3 || star4 || star5) {
          if (star2) {
            setStar2(false);
          }

          if (star3) {
            setStar3(false);
          }

          if (star4) {
            setStar4(false);
          }

          if (star5) {
            setStar5(false);
          }

          return prevState;
        }

        return !prevState;
      });
    }

    if (e.target.name == 'star 2') {
      setStar2(prevState => {
        if (star3 || star4 || star5) {
          if (star3) {
            setStar3(false);
          }

          if (star4) {
            setStar4(false);
          }

          if (star5) {
            setStar5(false);
          }

          return prevState;
        }

        prevState = !prevState;
        setStar1(prevState === true);
        return prevState;
      });
    }

    if (e.target.name == 'star 3') {
      setStar3(prevState => {
        if (star4 || star5) {
          if (star4) {
            setStar4(false);
          }

          if (star5) {
            setStar5(false);
          }

          return prevState;
        }

        prevState = !prevState;
        setStar2(prevState === true);
        setStar1(prevState === true);
        return prevState;
      });
    }

    if (e.target.name == 'star 4') {
      setStar4(prevState => {
        if (star5) {
          setStar5(false);
          return prevState;
        }

        prevState = !prevState;
        setStar3(prevState === true);
        setStar2(prevState === true);
        setStar1(prevState === true);
        return prevState;
      });
    }

    if (e.target.name == 'star 5') {
      console.log('h');
      setStar5(prevState => {
        prevState = !prevState;
        setStar4(prevState === true);
        setStar3(prevState === true);
        setStar2(prevState === true);
        setStar1(prevState === true);
        return prevState;
      });
    }
  };

  const clicker = e => {
    let stars = 5;

    if (!star5) {
      stars = 4;
    }

    if (!star4) {
      stars = 3;
    }

    if (!star3) {
      stars = 2;
    }

    if (!star2) {
      stars = 1;
    }

    if (!star1) {
      e.preventDefault();
      setErr(true);
      return;
    }

    if (subjectRef.current.value == '') {
      e.preventDefault();
      setErr(true);
      return;
    }

    if (bodyRef.current.value == '') {
      e.preventDefault();
      setErr(true);
      return;
    }

    setStar1(false);
    setStar2(false);
    setStar3(false);
    setStar4(false);
    setStar5(false);
    const enteredReviewData = {
      subject: subjectRef.current.value,
      body: bodyRef.current.value,
      stars: stars,
      date: new Date().toISOString().split('T')[0]
    };
    subjectRef.current.value = '';
    bodyRef.current.value = '';
    props.addReviewHandler(enteredReviewData);
  };

  const displayHandler = () => {
    if (display == 0) {
      setDisplay(275);
      return;
    }

    setDisplay(0);
  };

  const plusHandler = e => {
    e.preventDefault();
    props.plus();
  };

  const minusHandler = e => {
    e.preventDefault();
    props.minus();
  };

  console.log(props.reviewList);

  if (props.reviewList) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.reviewTitle,
        children: "Reviews"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.stars,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: starSetter,
            name: "star 5",
            className: star5 ? _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueBtn : _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.falseBtn,
            children: " \u2605"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: starSetter,
            name: "star 4",
            className: star4 ? _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueBtn : _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.falseBtn,
            children: " \u2605"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: starSetter,
            name: "star 3",
            className: star3 ? _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueBtn : _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.falseBtn,
            children: " \u2605"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: starSetter,
            name: "star 2",
            className: star2 ? _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueBtn : _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.falseBtn,
            children: " \u2605"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: starSetter,
            name: "star 1",
            className: star1 ? _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueBtn : _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.falseBtn,
            children: " \u2605"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.input,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "subject",
            children: "Subject"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            ref: subjectRef,
            onInput: () => {
              setErr(false);
            },
            name: "subject",
            placeholder: "subject"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 16
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.input,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "body",
            children: "Body"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            ref: bodyRef,
            onInput: () => {
              setErr(false);
            },
            name: "body",
            placeholder: "body"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 14
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: clicker,
          className: err ? _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.errBtn : _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.normBtn,
          children: "Add Review"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: displayHandler,
        className: display == 0 ? _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.displayButton : `${_Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.displayButton} ${_Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.on}`,
        children: "Click Here to Display Reviews"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: display == 0 ? _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.visibility : `${_Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.visibility} ${_Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.visiOn}`,
        style: {
          height: display
        },
        children: [props.isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.loading,
          children: " Reviews Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 29
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            height: 213
          },
          children: !props.isLoading && props.reviewList.map(review => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReviewItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
            user: review.user,
            date: review.date,
            body: review.body,
            stars: review.stars,
            subject: review.subject
          }, review.id, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 61
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: circArr
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 9
        }, undefined), !(props.pageNum == 1) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nextBtn,
          onClick: minusHandler,
          children: "Previous"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 35
        }, undefined), props.total % 2 == 0 ? props.pageNum != parseInt(props.total / 2) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nextBtn,
          onClick: plusHandler,
          children: "Next"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 12
        }, undefined) : props.pageNum < parseInt(props.total / 2) + 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nextBtn,
          onClick: plusHandler,
          children: "Next"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 12
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 236,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewPage);

/***/ }),

/***/ "./components/Details/image.js":
/*!*************************************!*\
  !*** ./components/Details/image.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.module.css */ "./components/Details/Details.module.css");
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Details_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\components\\Details\\image.js";


const Image = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
      children: props.details
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: props.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle,
      children: props.subtitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

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

/***/ "./pages/AllRestaurants/[businessId]/index.js":
/*!****************************************************!*\
  !*** ./pages/AllRestaurants/[businessId]/index.js ***!
  \****************************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card_DetailCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Card/DetailCard */ "./components/Card/DetailCard.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_store_use_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/store/use-context */ "./components/store/use-context.js");
/* harmony import */ var _components_Details_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Details/image */ "./components/Details/image.js");
/* harmony import */ var _components_Details_Details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Details/Details */ "./components/Details/Details.js");
/* harmony import */ var _components_Details_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Details/Menu */ "./components/Details/Menu.js");
/* harmony import */ var _components_Card_ItemCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Card/ItemCard */ "./components/Card/ItemCard.js");
/* harmony import */ var _components_Cart_ModalCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Cart/ModalCart */ "./components/Cart/ModalCart.js");
/* harmony import */ var _components_Details_ReviewPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Details/ReviewPage */ "./components/Details/ReviewPage.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\pages\\AllRestaurants\\[businessId]\\index.js";












const businessDetails = props => {
  var _props$restaurant, _props$restaurant2, _props$restaurant3, _props$restaurant4, _props$restaurant5, _props$restaurant6;

  const {
    0: pageNum,
    1: setPageNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);
  const {
    0: totalNum,
    1: setTotalNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: reviewList,
    1: setReviewList
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  async function getter(enteredItemData = 1) {
    setIsLoading(true);
    const response = await fetch(`../api/getHandler?pageIndex=${enteredItemData}&pageSize=2&restaurantURL=${window.location.pathname}`, {
      method: 'GET'
    });
    const data = await response.json();
    setIsLoading(false);

    if (!totalNum) {
      var _data$0$totalRecords$;

      setTotalNum(data[0].totalRecords[0] ? parseInt((_data$0$totalRecords$ = data[0].totalRecords[0]) === null || _data$0$totalRecords$ === void 0 ? void 0 : _data$0$totalRecords$.body) : 1);
    }

    setReviewList(data[0].data);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getter();
  }, []);

  const plus = () => {
    setPageNum(prevVal => {
      if (totalNum / 2 > prevVal) {
        prevVal++;
        getter(prevVal);
      }

      return prevVal;
    });
  };

  const minus = () => {
    setPageNum(prevVal => {
      if (prevVal > 1) {
        prevVal--;
        getter(prevVal);
      }

      return prevVal;
    });
  };

  async function addReviewHandler(enteredItemData) {
    const response = await fetch('../api/ReviewHandler', {
      method: 'POST',
      body: JSON.stringify({
        subject: enteredItemData.subject,
        body: enteredItemData.body,
        date: enteredItemData.date,
        stars: enteredItemData.stars,
        restaurant: props.restaurant.id,
        user: authCtx.user
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
  }

  const authCtx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_store_use_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      marginLeft: '8vw',
      marginRight: '8vw',
      marginBottom: '10vw'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: (_props$restaurant = props.restaurant) === null || _props$restaurant === void 0 ? void 0 : _props$restaurant.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_DetailCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Details_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        image: (_props$restaurant2 = props.restaurant) === null || _props$restaurant2 === void 0 ? void 0 : _props$restaurant2.image,
        details: (_props$restaurant3 = props.restaurant) === null || _props$restaurant3 === void 0 ? void 0 : _props$restaurant3.name,
        subtitle: (_props$restaurant4 = props.restaurant) === null || _props$restaurant4 === void 0 ? void 0 : _props$restaurant4.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_DetailCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Details_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
        description: (_props$restaurant5 = props.restaurant) === null || _props$restaurant5 === void 0 ? void 0 : _props$restaurant5.paragraph
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_ItemCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Details_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
        menu: (_props$restaurant6 = props.restaurant) === null || _props$restaurant6 === void 0 ? void 0 : _props$restaurant6.menu
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 19
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_ItemCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Details_ReviewPage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        addReviewHandler: addReviewHandler,
        total: totalNum,
        isLoading: isLoading,
        getter: getter,
        pageNum: pageNum,
        reviewList: reviewList,
        plus: plus,
        minus: minus
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, undefined), authCtx.isOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Cart_ModalCart__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 28
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 12
  }, undefined);
};

async function getStaticPaths() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_10__["MongoClient"].connect('mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('reviewList');
  const meetups = await meetupsCollection.find({}, {
    restaurant: 1
  }).toArray();
  client.close();
  return {
    fallback: "blocking",
    paths: meetups.map(meetup => ({
      params: {
        businessId: meetup._id.toString()
      }
    }))
  };
}
async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.businessId;
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_10__["MongoClient"].connect('mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority');
  const db = client.db();
  const resCollection = db.collection('ResList');
  const res = await resCollection.findOne({
    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_10__["ObjectId"])(meetupId)
  });
  client.close();
  return {
    props: {
      restaurant: {
        name: res.name,
        address: res.address,
        image: res.image,
        id: res._id.toString(),
        description: res.description,
        menu: res.menu,
        paragraph: res.paragraph
      }
    },
    revalidate: 10
  };
}
/* harmony default export */ __webpack_exports__["default"] = (businessDetails);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvRGV0YWlsQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvSXRlbUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0L01vZGFsQ2FydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvTW9kYWxDYXJ0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0L01vZGFsQ2FydEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWxzL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWxzL0RldGFpbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RldGFpbHMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RldGFpbHMvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWxzL1Jldmlld0l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWxzL1Jldmlld1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWxzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3RvcmUvdXNlLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQWxsUmVzdGF1cmFudHMvW2J1c2luZXNzSWRdL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvZGJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwiY2xhc3NlcyIsImNhcmQiLCJjaGlsZHJlbiIsIkRldGFpbENhcmQiLCJkZXRhaWxDYXJkIiwiSXRlbUNhcmQiLCJpdGVtQ2FyZCIsIk1vZGFsQ2FydCIsImNhcnRDdHgiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjbGlja0hhbmRsZXIiLCJ0b2dnbGUiLCJjdXJyQ2FydCIsInVuZGVmaW5lZCIsIml0ZW1zIiwic3R5bGVzIiwiYmFja2Ryb3AiLCJjb250YWluZXIiLCJoZWlnaHQiLCJ0aXRsZSIsInNwYW4iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJhbW91bnQiLCJwcmljZSIsInRvdGFsIiwidG90YWxwcmljZSIsInB1c2giLCJNb2RhbENhcnRJdGVtIiwiYWRkSGFuZGxlciIsImFwcGVuZCIsIm5hbWUiLCJyZW1vdmVIYW5kbGVyIiwicmVtb3ZlIiwibGVmdCIsInJpZ2h0IiwidG90YWxQcmljZSIsImJvcmRlciIsIkRlc2NyaXB0aW9uIiwiaDIiLCJkZXNjcmlwdGlvbiIsIk1lbnUiLCJhdXRoQ3R4IiwibWVudSIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwieCIsImlkIiwiY2FydEJ0biIsIk1lbnVJdGVtIiwiYSIsImN1cnJJbmRleCIsInNldEN1cnJJbmRleCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmluZEluZGV4IiwicGFyc2VJbnQiLCJtaW51c0hhbmRsZXIiLCJpdGVtQ29udGFpbmVyIiwicHJvZHVjdE5hbWUiLCJkZXNjcmlwIiwiY2FydCIsIlJldmlld0l0ZW0iLCJ1c2VyIiwiZGV0YWlsQ29udGFpbmVyIiwiZGF0ZSIsInN1YmplY3QiLCJib2R5Q29udGFpbmVyIiwiYm9keSIsInN0YXJzIiwidHJ1ZVN0ciIsInN0ciIsIlJldmlld1BhZ2UiLCJzdWJqZWN0UmVmIiwidXNlUmVmIiwiYm9keVJlZiIsInN0YXIxIiwic2V0U3RhcjEiLCJzdGFyMiIsInNldFN0YXIyIiwic3RhcjMiLCJzZXRTdGFyMyIsInN0YXI0Iiwic2V0U3RhcjQiLCJzdGFyNSIsInNldFN0YXI1IiwiZXJyIiwic2V0RXJyIiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJjaXJjQXJyIiwic2V0Q2lyY0FyciIsInByZXZWYWwiLCJsZW5ndGgiLCJwYWdlTnVtIiwic2VsZWN0ZWRCdG4iLCJjb2xvciIsInBsdXMiLCJtaW51cyIsInN0YXJTZXR0ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY2xpY2tlciIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRSZXZpZXdEYXRhIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJhZGRSZXZpZXdIYW5kbGVyIiwiZGlzcGxheUhhbmRsZXIiLCJwbHVzSGFuZGxlciIsInJldmlld0xpc3QiLCJyZXZpZXdUaXRsZSIsInRydWVCdG4iLCJmYWxzZUJ0biIsImlucHV0IiwiZXJyQnRuIiwibm9ybUJ0biIsImRpc3BsYXlCdXR0b24iLCJvbiIsInZpc2liaWxpdHkiLCJ2aXNpT24iLCJpc0xvYWRpbmciLCJsb2FkaW5nIiwicmV2aWV3IiwibmV4dEJ0biIsIkltYWdlIiwiaW1hZ2UiLCJkZXRhaWxzIiwic3VidGl0bGUiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ0b2tlbiIsImlzTG9nZ2VkSW4iLCJsb2dpbiIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYnVzaW5lc3MiLCJsb2dvdXQiLCJpc0J1c2luZXNzIiwiaXNPcGVuIiwic2VhcmNoU3RyIiwiY2hlY2tvdXQiLCJwdXNoU3RyIiwiQXV0aENvbnRleHRQcm92aWRlciIsInRva2VuMCIsInRva2VuMSIsInRva2VuMiIsInRva2VuMyIsInRva2VuNCIsInRva2VuNSIsInRva2VuNiIsImJ1c2luZXNzRGV0YWlscyIsInNldFBhZ2VOdW0iLCJ0b3RhbE51bSIsInNldFRvdGFsTnVtIiwic2V0UmV2aWV3TGlzdCIsInNldElzTG9hZGluZyIsImdldHRlciIsImVudGVyZWRJdGVtRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibWV0aG9kIiwiZGF0YSIsImpzb24iLCJ0b3RhbFJlY29yZHMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdGF1cmFudCIsImhlYWRlcnMiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYXJhZ3JhcGgiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwibWVldHVwcyIsImZpbmQiLCJ0b0FycmF5IiwiY2xvc2UiLCJmYWxsYmFjayIsInBhdGhzIiwibWVldHVwIiwicGFyYW1zIiwiYnVzaW5lc3NJZCIsIl9pZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwibWVldHVwSWQiLCJyZXNDb2xsZWN0aW9uIiwicmVzIiwiZmluZE9uZSIsIk9iamVjdElkIiwiYWRkcmVzcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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SWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9BbGxSZXN0YXVyYW50cy9bYnVzaW5lc3NJZF0vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fSzBDUlhcIixcblx0XCJkZXRhaWxDYXJkXCI6IFwiQ2FyZF9kZXRhaWxDYXJkX18xU291ZVwiLFxuXHRcIml0ZW1DYXJkXCI6IFwiQ2FyZF9pdGVtQ2FyZF9fMXdLc3dcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IERldGFpbENhcmQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmRldGFpbENhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsQ2FyZDsiLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBJdGVtQ2FyZCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lID0ge2NsYXNzZXMuaXRlbUNhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUNhcmQ7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL3N0b3JlL3VzZS1jb250ZXh0XCI7XHJcbmltcG9ydCBNb2RhbENhcnRJdGVtIGZyb20gJy4vTW9kYWxDYXJ0SXRlbSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTW9kYWxDYXJ0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTW9kYWxDYXJ0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2FydEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY2FydEN0eC50b2dnbGUoKTtcclxuICAgIH1cclxuICAgIGlmIChjYXJ0Q3R4LmN1cnJDYXJ0ID09PSB1bmRlZmluZWQgfHwgY2FydEN0eC5pdGVtcyA9PT0gMCl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2Ryb3B9PlxyXG4gICAgICAgIDxjb250YWluZXIgY2xhc3NOYW1lID0ge3N0eWxlcy5jb250YWluZXJ9IHN0eWxlID0ge3toZWlnaHQ6ICc0MCUnfX0gPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+WW91ciBDYXJ0XHJcbiAgICAgICAgPGhyLz48L2gyPlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+Q2FydCBFbXB0eSA8L2Rpdj4gIFxyXG4gICA8YnV0dG9uIG9uQ2xpY2sgPSB7Y2xpY2tIYW5kbGVyfT4gQ2xvc2UgPC9idXR0b24+XHJcbiAgIDwvY29udGFpbmVyPlxyXG4gICA8L2Rpdj5cclxuICAgIH1cclxuICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZHJvcH0+XHJcbiAgICAgICAgPGNvbnRhaW5lciBjbGFzc05hbWUgPSB7c3R5bGVzLmNvbnRhaW5lcn0gPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+WW91ciBDYXJ0XHJcbiAgICAgICAgPGhyLz48L2gyPlxyXG4gICAgXHJcbiAgICAgICAge2NhcnRDdHguY3VyckNhcnQubWFwKChpdGVtLCBpbmRleCkgPT4gPE1vZGFsQ2FydEl0ZW0gdG90YWwgPSB7aXRlbS5hbW91bnR9IHByaWNlID0ge2l0ZW0ucHJpY2V9IHRvdGFsUHJpY2UgPSB7aXRlbS50b3RhbH0gbmFtZSA9IHtpdGVtLml0ZW19IGluZGV4ID0ge2l0ZW19IGtleSA9IHtpbmRleH0vPiApfVxyXG4gICAgPGRpdj48Yj4gVG90YWw6IDwvYj4gPGk+ICR7Y2FydEN0eC50b3RhbHByaWNlfS4wMDwvaT4gPC9kaXY+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7Y2xpY2tIYW5kbGVyfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrID17KCkgPT4ge2NhcnRDdHgudG9nZ2xlKCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9jaGVja291dCcpfX0+Q2hlY2tvdXQ8L2J1dHRvbj5cclxuICAgIDwvY29udGFpbmVyPlxyXG5cclxuICAgIDwvZGl2PiBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDYXJ0OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk1vZGFsQ2FydF9jb250YWluZXJfXzFDTjBZXCIsXG5cdFwic2xpZGVpblwiOiBcIk1vZGFsQ2FydF9zbGlkZWluX19aaS1GNVwiLFxuXHRcImVtcHR5Q29udGFpbmVyXCI6IFwiTW9kYWxDYXJ0X2VtcHR5Q29udGFpbmVyX18ybzJmSlwiLFxuXHRcIm5hbWVcIjogXCJNb2RhbENhcnRfbmFtZV9fMzBvNS1cIixcblx0XCJ0aXRsZVwiOiBcIk1vZGFsQ2FydF90aXRsZV9fMXB0dzZcIixcblx0XCJidXR0b25cIjogXCJNb2RhbENhcnRfYnV0dG9uX185bnJGSlwiLFxuXHRcInJpZ2h0XCI6IFwiTW9kYWxDYXJ0X3JpZ2h0X19ERm5oNFwiLFxuXHRcInNwYW5cIjogXCJNb2RhbENhcnRfc3Bhbl9fM3J4WjFcIixcblx0XCJiYWNrZHJvcFwiOiBcIk1vZGFsQ2FydF9iYWNrZHJvcF9fVTlmV1lcIixcblx0XCJ2aXNpYmlsaXR5XCI6IFwiTW9kYWxDYXJ0X3Zpc2liaWxpdHlfXzJRdzhKXCIsXG5cdFwib3JkZXJCdXR0b25cIjogXCJNb2RhbENhcnRfb3JkZXJCdXR0b25fXzNJRVFpXCJcbn07XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi9zdG9yZS91c2UtY29udGV4dFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbENhcnQubW9kdWxlLmNzcyc7XHJcbmNvbnN0IE1vZGFsQ2FydEl0ZW0gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNhcnRDdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IGFkZEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY2FydEN0eC5hcHBlbmQocHJvcHMubmFtZSwgcHJvcHMucHJpY2UpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjYXJ0Q3R4LnJlbW92ZShwcm9wcy5uYW1lKTtcclxuICAgIH1cclxuICAgIGlmIChwcm9wcy50b3RhbCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmxlZnR9PlxyXG4gICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5uYW1lfT57cHJvcHMubmFtZX08L2Rpdj5cclxuICAgICAgICA8ZGl2PjxiPlByaWNlOjwvYj48aT4gJHtwcm9wcy5wcmljZX0uMDA8L2k+PC9kaXY+XHJcbiAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSB7c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICA8ZGl2PjxpPiR7cHJvcHMudG90YWxQcmljZX0uMDA8L2k+IC8gPHNwYW4+e3Byb3BzLnRvdGFsfSBpdGVtcyA8L3NwYW4+PC9kaXY+XHJcbiAgICAgICBcclxuIFxyXG5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgID0ge2FkZEhhbmRsZXJ9PiArIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlSGFuZGxlcn0+IC0gPC9idXR0b24+XHJcbiAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgc3R5bGVzID17eyBib3JkZXI6J3NvbGlkIDAuNHB4IHJnYmEoMCwgMCwgMCwwLjUpJ319Lz5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbENhcnRJdGVtOyIsImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EZXRhaWxzLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgRGVzY3JpcHRpb24gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaDJ9PkFib3V0IE91ciBSZXN0YXVyYW50PC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lID0ge3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb247IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW1hZ2VcIjogXCJEZXRhaWxzX2ltYWdlX18zbVludVwiLFxuXHRcInRpdGxlXCI6IFwiRGV0YWlsc190aXRsZV9fMjdCUDhcIixcblx0XCJzdWJ0aXRsZVwiOiBcIkRldGFpbHNfc3VidGl0bGVfXzNoN3I5XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJEZXRhaWxzX2Rlc2NyaXB0aW9uX18xcG1FWlwiLFxuXHRcImgyXCI6IFwiRGV0YWlsc19oMl9fM0VvaUJcIixcblx0XCJsZWZ0XCI6IFwiRGV0YWlsc19sZWZ0X18zemhDdFwiLFxuXHRcInByb2R1Y3ROYW1lXCI6IFwiRGV0YWlsc19wcm9kdWN0TmFtZV9fcVNPcE1cIixcblx0XCJwcmljZVwiOiBcIkRldGFpbHNfcHJpY2VfXzNYUl9aXCIsXG5cdFwicmlnaHRcIjogXCJEZXRhaWxzX3JpZ2h0X19lVUZ3VlwiLFxuXHRcImNhcnRCdG5cIjogXCJEZXRhaWxzX2NhcnRCdG5fXzNfWUptXCIsXG5cdFwiaXRlbUNvbnRhaW5lclwiOiBcIkRldGFpbHNfaXRlbUNvbnRhaW5lcl9fUG90MzdcIixcblx0XCJkZXNjcmlwXCI6IFwiRGV0YWlsc19kZXNjcmlwX18xU2tjcVwiLFxuXHRcImFtb3VudFwiOiBcIkRldGFpbHNfYW1vdW50X18xUXpKTVwiLFxuXHRcInJldmlld1RpdGxlXCI6IFwiRGV0YWlsc19yZXZpZXdUaXRsZV9fMUh1UXFcIixcblx0XCJzdGFyc1wiOiBcIkRldGFpbHNfc3RhcnNfXzMxMlg0XCIsXG5cdFwidHJ1ZUJ0blwiOiBcIkRldGFpbHNfdHJ1ZUJ0bl9fMW52ZnJcIixcblx0XCJmYWxzZUJ0blwiOiBcIkRldGFpbHNfZmFsc2VCdG5fXzJLUGRjXCIsXG5cdFwic3RyXCI6IFwiRGV0YWlsc19zdHJfX1kxNWFnXCIsXG5cdFwidHJ1ZVN0clwiOiBcIkRldGFpbHNfdHJ1ZVN0cl9fM0F3dXdcIixcblx0XCJlcnJCdG5cIjogXCJEZXRhaWxzX2VyckJ0bl9fMUhuS2RcIixcblx0XCJub3JtQnRuXCI6IFwiRGV0YWlsc19ub3JtQnRuX18zSFppNFwiLFxuXHRcImRpc3BsYXlCdXR0b25cIjogXCJEZXRhaWxzX2Rpc3BsYXlCdXR0b25fXzF1Ui1zXCIsXG5cdFwib25cIjogXCJEZXRhaWxzX29uX18xZGhDQVwiLFxuXHRcIm5leHRCdG5cIjogXCJEZXRhaWxzX25leHRCdG5fXzNNV2Z2XCIsXG5cdFwidmlzaWJpbGl0eVwiOiBcIkRldGFpbHNfdmlzaWJpbGl0eV9fMk9vaWxcIixcblx0XCJ2aXNpT25cIjogXCJEZXRhaWxzX3Zpc2lPbl9fMV96NmlcIixcblx0XCJpbnB1dFwiOiBcIkRldGFpbHNfaW5wdXRfXzN5WDZlXCIsXG5cdFwiZGV0YWlsQ29udGFpbmVyXCI6IFwiRGV0YWlsc19kZXRhaWxDb250YWluZXJfX1phNWRkXCIsXG5cdFwiZGF0ZVwiOiBcIkRldGFpbHNfZGF0ZV9fdlh2WlVcIixcblx0XCJzdWJqZWN0XCI6IFwiRGV0YWlsc19zdWJqZWN0X18xVnNVc1wiLFxuXHRcInVzZXJcIjogXCJEZXRhaWxzX3VzZXJfX1NlbWZCXCIsXG5cdFwibG9hZGluZ1wiOiBcIkRldGFpbHNfbG9hZGluZ19fMVFDMjdcIixcblx0XCJib2R5Q29udGFpbmVyXCI6IFwiRGV0YWlsc19ib2R5Q29udGFpbmVyX18zaGlZc1wiLFxuXHRcInNjcm9sbGVyXCI6IFwiRGV0YWlsc19zY3JvbGxlcl9fMkRhVFdcIixcblx0XCJzZWxlY3RlZEJ0blwiOiBcIkRldGFpbHNfc2VsZWN0ZWRCdG5fX3BSbG04XCIsXG5cdFwiYm9keVwiOiBcIkRldGFpbHNfYm9keV9fMjMyTmxcIlxufTtcbiIsImltcG9ydCBNZW51SXRlbSBmcm9tIFwiLi9NZW51SXRlbVwiO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnLi4vc3RvcmUvdXNlLWNvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGV0YWlscy5tb2R1bGUuY3NzJztcclxuY29uc3QgTWVudSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgaWYgKHByb3BzLm1lbnUpe1xyXG4gICAgXHJcbiAgICByZXR1cm4gPGRpdj4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0gc3R5bGUgPSB7e21hcmdpbkJvdHRvbTogJzIwcHgnfX0+TWVudTwvZGl2PlxyXG4gICAgICAgIDxociBzdHlsZSA9IHt7d2lkdGg6IFwiOTUlXCIsIG1hcmdpbkJvdHRvbTogJzIwcHgnfX0vPlxyXG4gICAgICAgIHtwcm9wcy5tZW51Lm1hcCgoeCxpbmRleCkgPT4gPE1lbnVJdGVtIG5hbWUgPSB7eC5uYW1lfSBwcmljZSA9IHt4LnByaWNlfSBkZXNjcmlwdGlvbiA9IHt4LmRlc2NyaXB0aW9ufSBrZXkgPSB7eC5pZH0gaW5kZXggPSB7aW5kZXh9IGNhcnQgPSB7YXV0aEN0eC5jdXJyQ2FydH0vPil9XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNhcnRCdG59IG9uQ2xpY2sgPSB7YXV0aEN0eC50b2dnbGV9Pk9wZW4gQ2FydDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXYvPlxyXG59ICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7ICIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9EZXRhaWxzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICcuLi9zdG9yZS91c2UtY29udGV4dCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBNZW51SXRlbSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgY2FydEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgbGV0IGEgPSAwO1xyXG4gICAgY29uc3QgW2N1cnJJbmRleCwgc2V0Q3VyckluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIHNldEN1cnJJbmRleChjYXJ0Q3R4LmZpbmRJbmRleChwcm9wcy5uYW1lKSk7XHJcbiAgICB9KVxyXG4gICBcclxuICAgIGNvbnN0IGFkZEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY2FydEN0eC5hcHBlbmQocHJvcHMubmFtZSwgcGFyc2VJbnQocHJvcHMucHJpY2UpKTtcclxuICAgICAgICBzZXRDdXJySW5kZXgoY2FydEN0eC5maW5kSW5kZXgocHJvcHMubmFtZSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWludXNIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNhcnRDdHgucmVtb3ZlKHByb3BzLm5hbWUpO1xyXG4gICAgICAgIHNldEN1cnJJbmRleChjYXJ0Q3R4LmZpbmRJbmRleChwcm9wcy5uYW1lKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1Db250YWluZXJ9PlxyXG4gICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3ROYW1lfT57cHJvcHMubmFtZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuZGVzY3JpcH0+e3Byb3BzLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJpY2V9PiR7cHJvcHMucHJpY2V9LjAwPC9kaXY+XHJcbiAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFtb3VudH0+IEFtb3VudCBpbiBDYXJ0OiB7cHJvcHMuY2FydD8uW2N1cnJJbmRleF0gPyBwcm9wcy5jYXJ0Py5bY3VyckluZGV4XS5hbW91bnQgOiAwfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7YWRkSGFuZGxlcn0+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7bWludXNIYW5kbGVyfT4tPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGhyLz5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVJdGVtOyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9EZXRhaWxzLm1vZHVsZS5jc3MnO1xyXG5jb25zdCBSZXZpZXdJdGVtID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmNvbnRhaW5lcn0+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy51c2VyfT5yZXZpZXdlcjoge3Byb3BzLnVzZXJ9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxDb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX0+e3Byb3BzLmRhdGV9PC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5zdWJqZWN0fT57cHJvcHMuc3ViamVjdH08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5ib2R5Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmJvZHl9Pntwcm9wcy5ib2R5fTwvZGl2PiBcclxuICAgICAgICAgICAgPGRpdj4ge3Byb3BzLnN0YXJzID09IDUgPyA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IHtzdHlsZXMudHJ1ZVN0cn0+ICYjOTczMzsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLnRydWVTdHJ9PiAmIzk3MzM7IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLnRydWVTdHJ9PiAmIzk3MzM7IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IHtzdHlsZXMudHJ1ZVN0cn0+ICYjOTczMzsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLnRydWVTdHJ9PiAmIzk3MzM7IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjogXHJcbiAgICAgICAgICAgIHByb3BzLnN0YXJzID09IDQgPyA8c3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge3N0eWxlcy50cnVlU3RyfT4gJiM5NzMzOyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge3N0eWxlcy50cnVlU3RyfT4gJiM5NzMzOyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLnRydWVTdHJ9PiAmIzk3MzM7IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge3N0eWxlcy50cnVlU3RyfT4gJiM5NzMzOyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge3N0eWxlcy5zdHJ9PiAmIzk3MzM7IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDogcHJvcHMuc3RhcnMgPT0gMyA/IFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IHtzdHlsZXMudHJ1ZVN0cn0+ICYjOTczMzsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge3N0eWxlcy50cnVlU3RyfT4gJiM5NzMzOyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IHtzdHlsZXMudHJ1ZVN0cn0+ICYjOTczMzsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IHtzdHlsZXMuc3RyfT4gJiM5NzMzOyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLnN0cn0+ICYjOTczMzsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiA6IHByb3BzLnN0YXJzID09IDIgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge3N0eWxlcy50cnVlU3RyfT4gJiM5NzMzOyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IHtzdHlsZXMudHJ1ZVN0cn0+ICYjOTczMzsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZSA9IHtzdHlsZXMuc3RyfT4gJiM5NzMzOyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLnN0cn0+ICYjOTczMzsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLnN0cn0+ICYjOTczMzsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IDogcHJvcHMuc3RhcnMgPT0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLnRydWVTdHJ9PiAmIzk3MzM7IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLnN0cn0+ICYjOTczMzsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge3N0eWxlcy5zdHJ9PiAmIzk3MzM7IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lID0ge3N0eWxlcy5zdHJ9PiAmIzk3MzM7IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWUgPSB7c3R5bGVzLnN0cn0+ICYjOTczMzsgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gOiAnZXJyb3InfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyLz48L2Rpdj5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3SXRlbTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vRGV0YWlscy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmV2aWV3SXRlbSBmcm9tICcuL1Jldmlld0l0ZW0nO1xyXG5jb25zdCBSZXZpZXdQYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBzdWJqZWN0UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBib2R5UmVmID0gdXNlUmVmKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtzdGFyMSwgc2V0U3RhcjFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N0YXIyLHNldFN0YXIyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdGFyMywgc2V0U3RhcjNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N0YXI0LCBzZXRTdGFyNF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3RhcjUsIHNldFN0YXI1XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnIsIHNldEVycl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaXJjQXJyLCBzZXRDaXJjQXJyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICBzZXRDaXJjQXJyKHByZXZWYWwgPT4ge1xyXG4gICAgICAgIHByZXZWYWwgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICB3aGlsZSAocHJldlZhbC5sZW5ndGggPCBwcm9wcy50b3RhbC8yKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmV2VmFsLmxlbmd0aCA9PSBwcm9wcy5wYWdlTnVtIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgcHJldlZhbC5wdXNoKDxzcGFuIGNsYXNzTmFtZSA9IHtzdHlsZXMuc2VsZWN0ZWRCdG59PiAgJiM5Njc5Ozwvc3Bhbj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByZXZWYWwucHVzaCg8c3BhbiBzdHlsZSA9IHt7Y29sb3I6ICcjNzk3OTc5J319PiAmIzk2Nzk7PC9zcGFuPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJldlZhbDtcclxuICAgICAgIH0pXHJcbiAgICB9LCBbcHJvcHMucGx1cywgcHJvcHMubWludXNdKVxyXG4gICAgXHJcbiAgICBjb25zdCBzdGFyU2V0dGVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT0gJ3N0YXIgMScpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZXRTdGFyMShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXIyIHx8IHN0YXIzIHx8IHN0YXI0IHx8IHN0YXI1KXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcjIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGFyMihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFyMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhcjMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcjQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhcjQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcjUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhcjUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICFwcmV2U3RhdGV9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09ICdzdGFyIDInKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0U3RhcjIocHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0YXIzIHx8IHN0YXI0IHx8IHN0YXI1KXtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFyMyl7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGFyMyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcjQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdGFyNChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcjUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdGFyNShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZTdGF0ZSA9ICFwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgIHNldFN0YXIxKHByZXZTdGF0ZSA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PSAnc3RhciAzJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFN0YXIzKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHN0YXI0IHx8IHN0YXI1KXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcjQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhcjQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcjUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3RhcjUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJldlN0YXRlID0gIXByZXZTdGF0ZTtcclxuICAgICAgICAgICAgICAgIHNldFN0YXIyKHByZXZTdGF0ZSA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGFyMShwcmV2U3RhdGUgPT09IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09ICdzdGFyIDQnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2V0U3RhcjQocHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggc3RhcjUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXI1KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJldlN0YXRlID0gIXByZXZTdGF0ZTtcclxuICAgICAgICAgICAgICAgIHNldFN0YXIzKHByZXZTdGF0ZSA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGFyMihwcmV2U3RhdGUgPT09IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhcjEocHJldlN0YXRlID09PSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PSAnc3RhciA1JylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoJyk7XHJcbiAgICAgICAgICAgIHNldFN0YXI1KHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGUgPSAhcHJldlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhcjQocHJldlN0YXRlID09PSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldFN0YXIzKHByZXZTdGF0ZSA9PT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGFyMihwcmV2U3RhdGUgPT09IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhcjEocHJldlN0YXRlID09PSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tlciA9IChlKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgc3RhcnMgPSA1O1xyXG4gICAgICAgIGlmICghc3RhcjUpIHtcclxuICAgICAgICAgICAgc3RhcnMgPSA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN0YXI0KSB7XHJcbiAgICAgICAgICAgIHN0YXJzID0gMztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdGFyMykge1xyXG4gICAgICAgICAgICBzdGFycyA9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RhcjIpe1xyXG4gICAgICAgICAgICBzdGFycyA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3RhcjEpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRFcnIodHJ1ZSk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1YmplY3RSZWYuY3VycmVudC52YWx1ZSA9PSAnJyl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0RXJyKHRydWUpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib2R5UmVmLmN1cnJlbnQudmFsdWUgPT0gJycpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEVycih0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTdGFyMShmYWxzZSk7XHJcbiAgICAgICAgc2V0U3RhcjIoZmFsc2UpO1xyXG4gICAgICAgIHNldFN0YXIzKGZhbHNlKTtcclxuICAgICAgICBzZXRTdGFyNChmYWxzZSk7XHJcbiAgICAgICAgc2V0U3RhcjUoZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IGVudGVyZWRSZXZpZXdEYXRhID0ge1xyXG4gICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIGJvZHk6IGJvZHlSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgc3RhcnM6IHN0YXJzLFxyXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdWJqZWN0UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgICAgICBib2R5UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgICAgICBwcm9wcy5hZGRSZXZpZXdIYW5kbGVyKGVudGVyZWRSZXZpZXdEYXRhKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc3BsYXlIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChkaXNwbGF5ID09IDApe1xyXG4gICAgICAgICAgICBzZXREaXNwbGF5KDI3NSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0RGlzcGxheSgwKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBsdXNIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIHByb3BzLnBsdXMoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1pbnVzSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBwcm9wcy5taW51cygpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocHJvcHMucmV2aWV3TGlzdCk7XHJcbiAgICBpZiAocHJvcHMucmV2aWV3TGlzdCkge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLnJldmlld1RpdGxlfT5cclxuICAgICAgICAgICAgUmV2aWV3c1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuc3RhcnN9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPXtzdGFyU2V0dGVyfSBuYW1lID0gXCJzdGFyIDVcIiBjbGFzc05hbWUgPSB7c3RhcjUgPyBzdHlsZXMudHJ1ZUJ0biA6IHN0eWxlcy5mYWxzZUJ0bn0+ICYjOTczMzs8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID17c3RhclNldHRlcn0gbmFtZSA9IFwic3RhciA0XCIgY2xhc3NOYW1lID0ge3N0YXI0ID8gc3R5bGVzLnRydWVCdG4gOiBzdHlsZXMuZmFsc2VCdG59PiAmIzk3MzM7PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9e3N0YXJTZXR0ZXJ9IG5hbWUgPSBcInN0YXIgM1wiIGNsYXNzTmFtZSA9IHtzdGFyMyA/IHN0eWxlcy50cnVlQnRuIDogc3R5bGVzLmZhbHNlQnRufT4gJiM5NzMzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPXtzdGFyU2V0dGVyfSBuYW1lID0gXCJzdGFyIDJcIiBjbGFzc05hbWUgPSB7c3RhcjIgPyBzdHlsZXMudHJ1ZUJ0biA6IHN0eWxlcy5mYWxzZUJ0bn0+ICYjOTczMzs8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID17c3RhclNldHRlcn0gbmFtZSA9IFwic3RhciAxXCIgY2xhc3NOYW1lID17c3RhcjEgPyBzdHlsZXMudHJ1ZUJ0biA6IHN0eWxlcy5mYWxzZUJ0bn0+ICYjOTczMzs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdzdWJqZWN0Jz5TdWJqZWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPGlucHV0IHJlZiA9IHtzdWJqZWN0UmVmfSBvbklucHV0ID0geygpID0+e3NldEVycihmYWxzZSl9fSBuYW1lID0gXCJzdWJqZWN0XCIgcGxhY2Vob2xkZXI9J3N1YmplY3QnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmlucHV0fT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3IgPSAnYm9keSc+Qm9keTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSByZWYgPSB7Ym9keVJlZn0gb25JbnB1dCA9IHsoKSA9PiB7c2V0RXJyKGZhbHNlKX19bmFtZSA9IFwiYm9keVwiIHBsYWNlaG9sZGVyID0gJ2JvZHknLz5cclxuICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljayA9IHtjbGlja2VyfSBjbGFzc05hbWUgPSB7ZXJyID8gc3R5bGVzLmVyckJ0biA6IHN0eWxlcy5ub3JtQnRuIH0gPkFkZCBSZXZpZXc8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7ZGlzcGxheUhhbmRsZXJ9IGNsYXNzTmFtZSA9IHtkaXNwbGF5ID09IDAgPyBzdHlsZXMuZGlzcGxheUJ1dHRvbiA6IGAke3N0eWxlcy5kaXNwbGF5QnV0dG9ufSAke3N0eWxlcy5vbn1gfT5DbGljayBIZXJlIHRvIERpc3BsYXkgUmV2aWV3czwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2Rpc3BsYXkgPT0gMCA/IHN0eWxlcy52aXNpYmlsaXR5IDogYCR7c3R5bGVzLnZpc2liaWxpdHl9ICR7c3R5bGVzLnZpc2lPbn1gfSBzdHlsZSA9IHt7aGVpZ2h0OiBkaXNwbGF5fX0+XHJcbiAgICAgICAge3Byb3BzLmlzTG9hZGluZyAmJiA8ZGl2ICBjbGFzc05hbWUgPSB7c3R5bGVzLmxvYWRpbmd9PiBSZXZpZXdzIExvYWRpbmcuLi48L2Rpdj59XHJcbiAgICAgICAgPGRpdiBzdHlsZSA9IHt7aGVpZ2h0OiAyMTN9fT5cclxuICAgICAgICB7IXByb3BzLmlzTG9hZGluZyAmJiBwcm9wcy5yZXZpZXdMaXN0Lm1hcChyZXZpZXcgPT4gPFJldmlld0l0ZW0gXHJcbiAgICAgICAga2V5ID0ge3Jldmlldy5pZH0gXHJcbiAgICAgICAgdXNlciA9IHtyZXZpZXcudXNlcn0gXHJcbiAgICAgICAgZGF0ZSA9IHtyZXZpZXcuZGF0ZX1cclxuICAgICAgICBib2R5ID0ge3Jldmlldy5ib2R5fVxyXG4gICAgICAgIHN0YXJzID0ge3Jldmlldy5zdGFyc31cclxuICAgICAgICBzdWJqZWN0ID0ge3Jldmlldy5zdWJqZWN0fS8+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIHtjaXJjQXJyfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICB7IShwcm9wcy5wYWdlTnVtID09IDEpICYmIDxidXR0b24gY2xhc3NOYW1lID0ge3N0eWxlcy5uZXh0QnRufSBvbkNsaWNrID0ge21pbnVzSGFuZGxlcn0+UHJldmlvdXM8L2J1dHRvbj59XHJcbiAgICAgICAge3Byb3BzLnRvdGFsICUgMiA9PSAwID8gcHJvcHMucGFnZU51bSAhPSBwYXJzZUludChwcm9wcy50b3RhbCAvIDIpICBcclxuICAgICAgICAmJiA8YnV0dG9uIGNsYXNzTmFtZSA9IHtzdHlsZXMubmV4dEJ0bn0gIG9uQ2xpY2sgPSB7cGx1c0hhbmRsZXJ9Pk5leHQ8L2J1dHRvbj4gXHJcbiAgICAgICAgOiAgcHJvcHMucGFnZU51bSA8IHBhcnNlSW50KHByb3BzLnRvdGFsIC8gMikgKyAxIFxyXG4gICAgICAgICYmIDxidXR0b24gY2xhc3NOYW1lID0ge3N0eWxlcy5uZXh0QnRufSBvbkNsaWNrID0ge3BsdXNIYW5kbGVyfT5OZXh0PC9idXR0b24+fSBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld1BhZ2U7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RldGFpbHMubW9kdWxlLmNzcyc7XHJcbmNvbnN0IEltYWdlID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5pbWFnZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICB7cHJvcHMuZGV0YWlsc31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjID0ge3Byb3BzLmltYWdlfS8+PC9kaXY+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VidGl0bGV9PlxyXG4gICAgICAgIHtwcm9wcy5zdWJ0aXRsZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59ICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vQ2FyZC9DYXJkXCI7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gICAgdG9rZW46ICcnLFxyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICBsb2dpbjogKHRva2VuLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBidXNpbmVzcykgPT4ge30sXHJcbiAgICBsb2dvdXQ6ICgpID0+IHt9LFxyXG4gICAgdXNlcjogJycsXHJcbiAgICBpc0J1c2luZXNzOiBmYWxzZSxcclxuICAgIGl0ZW1zOiAwLFxyXG4gICAgdG90YWxQcmljZTogMCxcclxuICAgIGlzT3BlbjogZmFsc2UsXHJcbiAgICBjdXJyQ2FydDogW10sXHJcbiAgICBzZWFyY2hTdHI6ICcnLFxyXG4gICAgdG9nZ2xlOiAoKSA9PiB7fSxcclxuICAgIGFwcGVuZDogKGl0ZW0pID0+IHt9LFxyXG4gICAgcmVtb3ZlOiAoaXRlbSkgPT4ge30sXHJcbiAgICBjaGVja291dDogKCkgPT4ge30sXHJcbiAgICBmaW5kSW5kZXg6IChuYW1lKSA9PiB7fSxcclxuICAgIHB1c2hTdHI6ICgpID0+IHt9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgbGV0IHRva2VuMCA9IFtdO1xyXG4gICAgbGV0IHRva2VuMSA9IDA7XHJcbiAgICBsZXQgdG9rZW4yID0gMDtcclxuICAgIGxldCB0b2tlbjMgPSAnJztcclxuICAgIGxldCB0b2tlbjQgPSBmYWxzZTtcclxuICAgIGxldCB0b2tlbjUgPSAnJztcclxuICAgIGxldCB0b2tlbjYgPSBbXTtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICBjb25zdCBjYXJ0RGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0Jyk7XHJcbiAgICBjb25zdCBpdGVtRGF0YSA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpdGVtJykpO1xyXG4gICAgY29uc3QgcHJpY2VEYXRhID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvdGFsJykpO1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgYnVzaW5lc3NEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2J1c2luZXNzJyk7XHJcbiAgICBjb25zdCBzZWFyY2hEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlYXJjaCcpO1xyXG5cclxuICAgIGlmIChjYXJ0RGF0YSkge1xyXG4gICAgICAgIHRva2VuMCA9SlNPTi5wYXJzZShjYXJ0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXRlbURhdGEpIHtcclxuICAgICAgICB0b2tlbjEgPSBpdGVtRGF0YTsgXHJcbiAgICB9XHJcbiAgICBpZiAocHJpY2VEYXRhKSB7XHJcbiAgICAgICAgdG9rZW4yID0gcHJpY2VEYXRhOyBcclxuICAgIH1cclxuICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICAgIHRva2VuMyA9IHVzZXJEYXRhO1xyXG4gICAgfVxyXG4gICBcclxuICAgIHRva2VuNCA9IChidXNpbmVzc0RhdGEgPT09ICd0cnVlJylcclxuIFxyXG4gICAgaWYgKHNlYXJjaERhdGEpIHtcclxuICAgICAgIHRva2VuNSA9IHNlYXJjaERhdGE7XHJcbiAgICB9XHJcbiAgICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZSh0b2tlbjApO1xyXG4gICAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUodG9rZW4xKTtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdG90YWxBbXQsIHNldFRvdGFsQW10XSA9IHVzZVN0YXRlKHRva2VuMik7XHJcbiAgICBjb25zdCAgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUodG9rZW4zKTtcclxuICAgIGNvbnN0IFtpc0J1c2luZXNzLCBzZXRJc0J1c2luZXNzXSA9IHVzZVN0YXRlKHRva2VuNCk7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUodG9rZW41KVxyXG5cclxuXHJcbiAgICBjb25zdCBzZWFyY2hIYW5kbGVyID0gKG0pID0+IHtcclxuICAgICAgICBzZXRTZWFyY2gobSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaCcsbSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmaW5kSW5kZXggPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IHZhbHVlcyBpbiBjYXJ0KXtcclxuICAgICAgICAgICAgaWYgKGNhcnRbdmFsdWVzXS5pdGVtID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFwcGVuZEhhbmRsZXIgPSAodmFsLCBwcmljZSkgPT4ge1xyXG4gICAgICAgIGxldCBhID0gW11cclxuICAgICAgICBmb3IgKGNvbnN0IG9iamVjdCBpbiBjYXJ0KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FydFtvYmplY3RdLml0ZW0gPT09IHZhbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FydCgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlN0YXRlW29iamVjdF0uYW1vdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlN0YXRlW29iamVjdF0udG90YWwgKz0gcHJldlN0YXRlW29iamVjdF0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLEpTT04uc3RyaW5naWZ5KHByZXZTdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldEl0ZW0oKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChwcmV2U3RhdGUpICsgMTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldFRvdGFsQW10KHByZXZTdGF0ZSA9PiB7cmV0dXJuIHByZXZTdGF0ZSArIGNhcnRbb2JqZWN0XS5wcmljZX0pO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW0nLCBwYXJzZUludChpdGVtKSArIDEpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvdGFsJyxwYXJzZUludCh0b3RhbEFtdCkgKyBjYXJ0W29iamVjdF0ucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBwcmljZSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgICAgICAgIGl0ZW06IHZhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgXHJcbiAgICAgICAgc2V0Q2FydCgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICAocHJldlN0YXRlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcHJldlN0YXRlID0gWy4uLnByZXZTdGF0ZSAsIHtcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtOiB2YWxcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsSlNPTi5zdHJpbmdpZnkocHJldlN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLEpTT04uc3RyaW5naWZ5KFt7XHJcbiAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgdG90YWw6IHByaWNlLFxyXG4gICAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICAgIGl0ZW06IHZhbFxyXG4gICAgICAgIH1dKSk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IDEsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBpdGVtOiB2YWxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRJdGVtKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHByZXZTdGF0ZSkgKyAxOyBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtJywgcGFyc2VJbnQoaXRlbSkgKyAxKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWwnLHBhcnNlSW50KHRvdGFsQW10KSArIHByaWNlKTtcclxuICAgICAgICBzZXRUb3RhbEFtdChwcmV2U3RhdGUgPT4ge3JldHVybiBwcmV2U3RhdGUgKyBwcmljZX0pO1xyXG5cclxuIFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlSGFuZGxlciA9ICh2YWwpID0+IHtcclxuICAgICAgICBsZXQgYSA9IDBcclxuICAgICAgICBmb3IgKGNvbnN0IG9iamVjdCBpbiBjYXJ0KXtcclxuICAgICAgICAgICAgaWYgKGNhcnRbb2JqZWN0XS5pdGVtID09PSB2YWwpIHtcclxuICAgICAgICAgICAgICAgIHNldENhcnQoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGEgPSBwcmV2U3RhdGVbb2JqZWN0XS5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZTdGF0ZVtvYmplY3RdLmFtb3VudCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZTdGF0ZVtvYmplY3RdLmFtb3VudCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZTdGF0ZVtvYmplY3RdLnRvdGFsIC09IHByZXZTdGF0ZVtvYmplY3RdLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JyxKU09OLnN0cmluZ2lmeShwcmV2U3RhdGUpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldEl0ZW0oKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJ0W29iamVjdF0uaXRlbSAhPSAxKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQocHJldlN0YXRlKSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhcnRbb2JqZWN0XS5pdGVtICE9IDEpe1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvdGFsJyxwYXJzZUludCh0b3RhbEFtdCkgLSBjYXJ0W29iamVjdF0ucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0VG90YWxBbXQocHJldlN0YXRlID0+ICBwcmV2U3RhdGUgLSBjYXJ0W29iamVjdF0ucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW0nLCBwYXJzZUludChpdGVtKSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdG9nZ2xlSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc09wZW4ocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbml0aWFsVG9rZW47XHJcbiAgICBcclxuICBcclxuICAgIGNvbnN0IHRva2VuRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgIGlmICh0b2tlbkRhdGEpe1xyXG4gICAgICAgIGluaXRpYWxUb2tlbiA9IHRva2VuRGF0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IFt0b2tlbiAsc2V0VG9rZW5dID0gdXNlU3RhdGUoaW5pdGlhbFRva2VuKTtcclxuXHJcbiAgICBjb25zdCB1c2VySXNMb2dnZWRJbiA9ICEhdG9rZW47XHJcblxyXG4gICAgY29uc3QgbG9naW5IYW5kbGVyID0gKHRva2VuLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBidXNpbmVzcykgPT4ge1xyXG4gICAgICAgIHNldFRva2VuKHRva2VuKTtcclxuICAgICAgICBzZXROYW1lKGZpcnN0TmFtZSArICcgJyArIGxhc3ROYW1lKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLHRva2VuKTtcclxuICAgICAgICBzZXRJc0J1c2luZXNzKGJ1c2luZXNzKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYnVzaW5lc3MnLGJ1c2luZXNzLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJyxmaXJzdE5hbWUgKyAnICcgKyBsYXN0TmFtZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9nb3V0SGFuZGxlciA9ICh0b2tlbikgPT4ge1xyXG4gICAgICAgIHNldFRva2VuKG51bGwpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgIHNldENhcnQoW10pO1xyXG4gICAgICAgIHNldFRvdGFsQW10KDApO1xyXG4gICAgICAgIHNldElzQnVzaW5lc3MobnVsbCk7XHJcbiAgICAgICAgc2V0SXRlbSgwKTtcclxuICAgICAgICBzZXRUb2tlbignJyk7XHJcbiAgICAgICAgc2V0TmFtZSgnJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGVja291dEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICBzZXRUb3RhbEFtdCgwKTtcclxuICAgICAgICBzZXRJdGVtKDApO1xyXG4gICAgICAgIHNldENhcnQocHJldlZhbHVlID0+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWx1ZSBpbiBwcmV2VmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZVt2YWx1ZV0uYW1vdW50IC09IHByZXZWYWx1ZVt2YWx1ZV0uYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZWYWx1ZVt2YWx1ZV0udG90YWwgLT0gcHJldlZhbHVlW3ZhbHVlXS50b3RhbDsgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHByZXZWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZWYWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWwnLDApO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbScsIDApO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4gICAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgICBpc0xvZ2dlZEluOiB1c2VySXNMb2dnZWRJbixcclxuICAgICAgICBsb2dpbjogbG9naW5IYW5kbGVyLFxyXG4gICAgICAgIGxvZ291dDogbG9nb3V0SGFuZGxlcixcclxuICAgICAgICB1c2VyOiBuYW1lLFxyXG4gICAgICAgIGl0ZW1zOiBpdGVtLFxyXG4gICAgICAgIGlzT3BlbjogaXNPcGVuLFxyXG4gICAgICAgIGlzQnVzaW5lc3M6IGlzQnVzaW5lc3MsXHJcbiAgICAgICAgY3VyckNhcnQ6IGNhcnQsXHJcbiAgICAgICAgdG90YWxwcmljZTogdG90YWxBbXQsXHJcbiAgICAgICAgc2VhcmNoU3RyOiBzZWFyY2gsXHJcbiAgICAgICAgcHVzaFN0cjogc2VhcmNoSGFuZGxlcixcclxuICAgICAgICB0b2dnbGU6IHRvZ2dsZUhhbmRsZXIsXHJcbiAgICAgICAgYXBwZW5kOiBhcHBlbmRIYW5kbGVyLFxyXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlSGFuZGxlcixcclxuICAgICAgICBjaGVja291dDogY2hlY2tvdXRIYW5kbGVyLFxyXG4gICAgICAgIGZpbmRJbmRleDogZmluZEluZGV4XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZSA9IHtjb250ZXh0VmFsdWV9PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlID0ge0F1dGhDb250ZXh0fT5cclxuICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDsiLCJcclxuaW1wb3J0IERldGFpbENhcmQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQ2FyZC9EZXRhaWxDYXJkXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvc3RvcmUvdXNlLWNvbnRleHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0RldGFpbHMvaW1hZ2VcIjtcclxuaW1wb3J0IERldGFpbHMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EZXRhaWxzL0RldGFpbHMnO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9EZXRhaWxzL01lbnVcIjtcclxuaW1wb3J0IEl0ZW1DYXJkIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NhcmQvSXRlbUNhcmRcIjtcclxuaW1wb3J0IE1vZGFsQ2FydCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9DYXJ0L01vZGFsQ2FydFwiO1xyXG5pbXBvcnQgUmV2aWV3UGFnZSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9EZXRhaWxzL1Jldmlld1BhZ2VcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkLCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IGJ1c2luZXNzRGV0YWlscyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3BhZ2VOdW0sIHNldFBhZ2VOdW1dID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbdG90YWxOdW0sIHNldFRvdGFsTnVtXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Jldmlld0xpc3QsIHNldFJldmlld0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldHRlcihlbnRlcmVkSXRlbURhdGEgPSAxKSB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS9nZXRIYW5kbGVyP3BhZ2VJbmRleD0ke2VudGVyZWRJdGVtRGF0YX0mcGFnZVNpemU9MiZyZXN0YXVyYW50VVJMPSR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIH0gKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgaWYgKCF0b3RhbE51bSl7XHJcbiAgICAgICAgICAgIHNldFRvdGFsTnVtKGRhdGFbMF0udG90YWxSZWNvcmRzWzBdID8gcGFyc2VJbnQoZGF0YVswXS50b3RhbFJlY29yZHNbMF0/LmJvZHkpIDogMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFJldmlld0xpc3QoZGF0YVswXS5kYXRhKTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0dGVyKClcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBwbHVzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFBhZ2VOdW0ocHJldlZhbCA9PiB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0b3RhbE51bS8yID4gcHJldlZhbCl7XHJcbiAgICAgICAgICAgIHByZXZWYWwrKztcclxuICAgICAgICAgICAgZ2V0dGVyKHByZXZWYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcHJldlZhbDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgbWludXMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0UGFnZU51bShwcmV2VmFsID0+IHtcclxuICAgICAgICAgICAgaWYgKHByZXZWYWwgPiAxKXtcclxuICAgICAgICAgICAgcHJldlZhbC0tO1xyXG4gICAgICAgICAgICBnZXR0ZXIocHJldlZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZWYWw7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZFJldmlld0hhbmRsZXIoZW50ZXJlZEl0ZW1EYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnLi4vYXBpL1Jldmlld0hhbmRsZXInLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgc3ViamVjdDogZW50ZXJlZEl0ZW1EYXRhLnN1YmplY3QsXHJcbiAgICAgICAgICAgIGJvZHk6IGVudGVyZWRJdGVtRGF0YS5ib2R5LFxyXG4gICAgICAgICAgICBkYXRlOiBlbnRlcmVkSXRlbURhdGEuZGF0ZSxcclxuICAgICAgICAgICAgc3RhcnM6IGVudGVyZWRJdGVtRGF0YS5zdGFycyxcclxuICAgICAgICAgICAgcmVzdGF1cmFudDogcHJvcHMucmVzdGF1cmFudC5pZCxcclxuICAgICAgICAgICAgdXNlcjogYXV0aEN0eC51c2VyXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IGF1dGhDdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgXHJcbiAgICBcclxuICAgIHJldHVybiA8ZGl2IHN0eWxlID0ge3ttYXJnaW5MZWZ0OiAnOHZ3JywgbWFyZ2luUmlnaHQ6ICc4dncnLCBtYXJnaW5Cb3R0b206ICcxMHZ3J319PlxyXG4gICAgICA8SGVhZD48dGl0bGU+e3Byb3BzLnJlc3RhdXJhbnQ/Lm5hbWV9PC90aXRsZT48L0hlYWQ+XHJcbiAgICAgICAgPERldGFpbENhcmQ+PEltYWdlIGltYWdlID0ge3Byb3BzLnJlc3RhdXJhbnQ/LmltYWdlfSBkZXRhaWxzID0ge3Byb3BzLnJlc3RhdXJhbnQ/Lm5hbWV9IHN1YnRpdGxlID0ge3Byb3BzLnJlc3RhdXJhbnQ/LmRlc2NyaXB0aW9ufS8+PC9EZXRhaWxDYXJkPlxyXG4gICAgICAgIDxEZXRhaWxDYXJkPjxEZXRhaWxzIGRlc2NyaXB0aW9uID0ge3Byb3BzLnJlc3RhdXJhbnQ/LnBhcmFncmFwaH0vPjwvRGV0YWlsQ2FyZD5cclxuICAgICAgICA8SXRlbUNhcmQ+PE1lbnUgbWVudSA9IHtwcm9wcy5yZXN0YXVyYW50Py5tZW51fS8+PC9JdGVtQ2FyZD5cclxuICAgICAgICA8SXRlbUNhcmQ+PFJldmlld1BhZ2UgYWRkUmV2aWV3SGFuZGxlciA9IHthZGRSZXZpZXdIYW5kbGVyfSB0b3RhbCA9IHt0b3RhbE51bX0gaXNMb2FkaW5nID0ge2lzTG9hZGluZ30gZ2V0dGVyID0ge2dldHRlcn0gcGFnZU51bSA9IHtwYWdlTnVtfSByZXZpZXdMaXN0ID0ge3Jldmlld0xpc3R9IHBsdXMgPSB7cGx1c30gbWludXMgPSB7bWludXN9Lz48L0l0ZW1DYXJkPlxyXG4gICAgICAgIHthdXRoQ3R4LmlzT3BlbiAmJiA8TW9kYWxDYXJ0Lz59XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgICdtb25nb2RiK3NydjovL2RnMjE6Mng5UVV0TmpVTTN0dUw2cEBjbHVzdGVyMC5ueHBvZ2h6Lm1vbmdvZGIubmV0L0Zvb2RPcmRlcmluZ1NpdGU/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JyAgKTtcclxuICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbigncmV2aWV3TGlzdCcpO1xyXG4gICAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyByZXN0YXVyYW50OiAxIH0pLnRvQXJyYXkoKTtcclxuICAgXHJcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZmFsbGJhY2s6IFwiYmxvY2tpbmdcIixcclxuICAgICAgICBwYXRoczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4gKHtcclxuICAgICAgICAgIHBhcmFtczogeyBidXNpbmVzc0lkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgICAvLyBmZXRjaCBkYXRhIGZvciBhIHNpbmdsZSBtZWV0dXBcclxuICBcclxuICAgIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMuYnVzaW5lc3NJZDtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgICdtb25nb2RiK3NydjovL2RnMjE6Mng5UVV0TmpVTTN0dUw2cEBjbHVzdGVyMC5ueHBvZ2h6Lm1vbmdvZGIubmV0L0Zvb2RPcmRlcmluZ1NpdGU/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JyAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgXHJcbiAgICBjb25zdCByZXNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignUmVzTGlzdCcpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVzQ29sbGVjdGlvbi5maW5kT25lKHtcclxuICAgICAgICBfaWQ6IE9iamVjdElkKG1lZXR1cElkKVxyXG4gICAgfSlcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgcmVzdGF1cmFudDoge1xyXG4gICAgICAgICAgICBuYW1lOiByZXMubmFtZSxcclxuICAgICAgICAgICAgYWRkcmVzczogcmVzLmFkZHJlc3MsXHJcbiAgICAgICAgICAgIGltYWdlOiByZXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIGlkOiByZXMuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIG1lbnU6IHJlcy5tZW51LFxyXG4gICAgICAgICAgICBwYXJhZ3JhcGg6IHJlcy5wYXJhZ3JhcGhcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDEwXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXNpbmVzc0RldGFpbHM7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=