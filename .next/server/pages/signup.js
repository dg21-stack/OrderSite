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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signup/index.js");
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

/***/ "./pages/signup/index.js":
/*!*******************************!*\
  !*** ./pages/signup/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Card/Card */ "./components/Card/Card.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _signup_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.module.css */ "./pages/signup/signup.module.css");
/* harmony import */ var _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signup_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_store_use_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/store/use-context */ "./components/store/use-context.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\gaida\\Documents\\React\\FoodOrderingSite\\pages\\signup\\index.js";







const checkUpper = string => {
  for (let i of string) {
    if (isNaN(i)) {
      if (i == i.toUpperCase()) {
        return true;
      }
    }
  }

  return false;
};

const signup = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const fRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const sRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const tRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const foRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const authCtx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_store_use_context__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: isBusiness,
    1: setIsBusiness
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: fName,
    1: setFName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: sName,
    1: setSName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: tName,
    1: setTName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: foName,
    1: setFoName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: inValidSignup,
    1: setInvalidSignUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (authCtx.isBusiness && authCtx.isLoggedIn) {
      router.push('/business');
    }

    if (!authCtx.isBusiness & authCtx.isLoggedIn) {
      router.push('/AllRestaurants');
    }
  }, [authCtx.isLoggedIn]);

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('../api/handler', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
  }

  const businessHandler = () => {
    setIsBusiness(prevState => !prevState);
    fRef.current.value = '';
    sRef.current.value = '';
    tRef.current.value = '';
    foRef.current.value = '';
    setFName(null);
    setSName(null);
    setTName(null);
    setFoName(null);
  };

  const signup = () => {
    if (fName && sName & tName && foName) {
      const accArr = {
        firstName: fRef.current.value,
        lastName: sRef.current.value,
        email: tRef.current.value,
        password: foRef.current.value
      };
      const enteredMeetupData = {
        name: accArr.firstName,
        address: accArr.lastName,
        image: '',
        description: '',
        paragraph: '',
        menu: [],
        email: accArr.email
      };
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRIvxAwx8KqrhXOQpIzkSave61memF2Uw', {
        method: 'POST',
        body: JSON.stringify({
          email: accArr.email,
          password: accArr.password,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        setIsLoading(false);

        if (res.ok) {
          if (!isBusiness) {
            fetch(`https://reactfirst-48147-default-rtdb.firebaseio.com/user/0.json`, {
              method: 'POST',
              body: JSON.stringify({
                email: accArr.email,
                firstName: accArr.firstName,
                lastName: accArr.lastName
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then().then(r => {
              router.push('/AllRestaurants');
              authCtx.login(tRef.current.value, accArr.firstName, accArr.lastName, false);
            });
          } else {
            addMeetupHandler(enteredMeetupData);
            fetch(`https://reactfirst-48147-default-rtdb.firebaseio.com/user/1.json`, {
              method: 'POST',
              body: JSON.stringify({
                email: accArr.email,
                businessName: accArr.firstName,
                address: accArr.lastName
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then().then(r => {
              router.push('/business');
              authCtx.login(tRef.current.value, accArr.firstName, accArr.lastName, true);
            });
          }
        } else {
          return res.json().then(data => {
            let errorMessage = 'Auth failed';

            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            alert(errorMessage);
          });
        }
      });
    } else {
      let errStr = "ERROR:";
      setInvalidSignUp(true);

      if (!fName) {
        errStr += " Invalid Name,";
      }

      if (!sName) {
        if (isBusiness) {
          errStr += " Invalid Address,";
        } else {
          errStr += " Invalid Last Name,";
        }
      }

      if (!tName) {
        errStr += " Invalid Email,";
      }

      if (!foName) {
        errStr += " Invalid Password,";
      }

      errStr = errStr.slice(0, -1);
      alert(errStr);
    }
  };

  const checkValid = e => {
    setInvalidSignUp(true);

    if (e.target.name === 'business' || e.target.name === 'first') {
      if (e.target.value.length > 1) {
        setFName(true);
        return;
      }

      setFName(false);
    }

    if (e.target.name === 'address' || e.target.name === 'last') {
      if (e.target.value.length > 1) {
        setSName(true);
        console.log('a');
        return;
      }

      setSName(false);
    }

    if (e.target.name === 'email') {
      if (e.target.value.length > 0 && (e.target.value.includes('.com') || e.target.value.includes('.net') || e.target.value.includes('.edu')) && e.target.value.includes('@')) {
        setTName(true);
        return;
      }

      setTName(false);
    }

    if (e.target.name === 'password') {
      if (e.target.value.length > 6 && /\d/.test(e.target.value) && checkUpper(e.target.value)) {
        setFoName(true);
        return;
      }

      setFoName(false);
    }
  };

  const setBack = e => {
    if (e.target.name === 'business' || e.target.name === 'first') {
      setFName(null);
    } else if (e.target.name === 'address' || e.target.name === 'last') {
      setSName(null);
    } else if (e.target.name === 'email') {
      setTName(null);
    } else {
      setFoName(null);
    }
  };

  if (isBusiness) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 30
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 24
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Signup Business"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 59
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonBusiness,
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: businessHandler,
          children: "\u2190"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 48
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "\u25CE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 101
        }, undefined), "\u25C9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 128
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "\u2192"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 141
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 8
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "business",
          children: "Business Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeHolder: "ex: fancy business",
          onInput: setBack,
          onBlur: checkValid,
          ref: fRef,
          name: "business",
          className: `${fName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "address",
          children: "Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeHolder: "ex: 7 business rd",
          onInput: setBack,
          onBlur: checkValid,
          ref: sRef,
          type: "text",
          name: "address",
          className: `${sName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeHolder: "ex: email@email.com",
          onInput: setBack,
          onBlur: checkValid,
          ref: tRef,
          type: "email",
          name: "email",
          className: `${tName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeHolder: "xxxxxx",
          onInput: setBack,
          onBlur: checkValid,
          ref: foRef,
          type: "password",
          name: "password",
          className: `${foName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: signup,
        className: inValidSignup ? _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.errBtn : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSignUp,
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 24
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 18
    }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Signup Customer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 54
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonBusiness,
      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        children: "\u2190"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 52
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "\u25C9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 77
      }, undefined), "\u25CE", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 104
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: businessHandler,
        children: "\u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 117
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 12
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "first",
        children: "First Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeHolder: "First Name",
        onInput: setBack,
        onBlur: checkValid,
        type: "text",
        ref: fRef,
        name: "first",
        className: `${fName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "last",
        children: "Last Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeHolder: "Last Name",
        onInput: setBack,
        onBlur: checkValid,
        ref: sRef,
        type: "text",
        name: "last",
        className: `${sName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "email",
        children: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeHolder: "ex: email@email.com",
        onInput: setBack,
        onBlur: checkValid,
        ref: tRef,
        type: "email",
        name: "email",
        className: `${tName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "password",
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeHolder: "xxxxxx",
        onInput: setBack,
        onBlur: checkValid,
        ref: foRef,
        type: "password",
        name: "password",
        className: `${foName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: signup,
      className: inValidSignup ? _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.errBtn : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSignUp,
      children: "Sign Up"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 233,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (signup);

/***/ }),

/***/ "./pages/signup/signup.module.css":
/*!****************************************!*\
  !*** ./pages/signup/signup.module.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"inputContainer": "signup_inputContainer__C_9fa",
	"slidein": "signup_slidein__2jXUr",
	"flagged": "signup_flagged__1_O5R",
	"buttonBusiness": "signup_buttonBusiness__3sU1G",
	"buttonSignUp": "signup_buttonSignUp__3Xod-",
	"errBtn": "signup_errBtn__3ROpc"
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0b3JlL3VzZS1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NpZ251cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAvc2lnbnVwLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImNsYXNzZXMiLCJjYXJkIiwiY2hpbGRyZW4iLCJBdXRoQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInRva2VuIiwiaXNMb2dnZWRJbiIsImxvZ2luIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJidXNpbmVzcyIsImxvZ291dCIsInVzZXIiLCJpc0J1c2luZXNzIiwiaXRlbXMiLCJ0b3RhbFByaWNlIiwiaXNPcGVuIiwiY3VyckNhcnQiLCJzZWFyY2hTdHIiLCJ0b2dnbGUiLCJhcHBlbmQiLCJpdGVtIiwicmVtb3ZlIiwiY2hlY2tvdXQiLCJmaW5kSW5kZXgiLCJuYW1lIiwicHVzaFN0ciIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJ0b2tlbjAiLCJ0b2tlbjEiLCJ0b2tlbjIiLCJ0b2tlbjMiLCJ0b2tlbjQiLCJ0b2tlbjUiLCJ0b2tlbjYiLCJjaGVja1VwcGVyIiwic3RyaW5nIiwiaSIsImlzTmFOIiwidG9VcHBlckNhc2UiLCJzaWdudXAiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJmUmVmIiwidXNlUmVmIiwic1JlZiIsInRSZWYiLCJmb1JlZiIsImF1dGhDdHgiLCJ1c2VDb250ZXh0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXNlU3RhdGUiLCJzZXRJc0J1c2luZXNzIiwiZk5hbWUiLCJzZXRGTmFtZSIsInNOYW1lIiwic2V0U05hbWUiLCJ0TmFtZSIsInNldFROYW1lIiwiZm9OYW1lIiwic2V0Rm9OYW1lIiwiaW5WYWxpZFNpZ251cCIsInNldEludmFsaWRTaWduVXAiLCJ1c2VFZmZlY3QiLCJwdXNoIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiYnVzaW5lc3NIYW5kbGVyIiwicHJldlN0YXRlIiwiY3VycmVudCIsInZhbHVlIiwiYWNjQXJyIiwiZW1haWwiLCJwYXNzd29yZCIsImFkZHJlc3MiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwicGFyYWdyYXBoIiwibWVudSIsInJldHVyblNlY3VyZVRva2VuIiwidGhlbiIsInJlcyIsIm9rIiwiciIsImJ1c2luZXNzTmFtZSIsImVycm9yTWVzc2FnZSIsImVycm9yIiwibWVzc2FnZSIsImFsZXJ0IiwiZXJyU3RyIiwic2xpY2UiLCJjaGVja1ZhbGlkIiwiZSIsInRhcmdldCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsInRlc3QiLCJzZXRCYWNrIiwic3R5bGVzIiwiYnV0dG9uQnVzaW5lc3MiLCJpbnB1dENvbnRhaW5lciIsImZsYWdnZWQiLCJlcnJCdG4iLCJidXR0b25TaWduVXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtR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OUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRk8sZUFZUDtBQUFRLGFBQU8sRUFBSXpFLE1BQW5CO0FBQTJCLGVBQVMsRUFBSXNCLGFBQWEsR0FBR2dELHlEQUFNLENBQUNJLE1BQVYsR0FBbUJKLHlEQUFNLENBQUNLLFlBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBY0gsQ0FwT0Q7O0FBc09lM0UscUVBQWYsRTs7Ozs7Ozs7Ozs7QUN4UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NpZ251cC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZSA9IHtjbGFzc2VzLmNhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ2FyZF9jYXJkX19LMENSWFwiLFxuXHRcImRldGFpbENhcmRcIjogXCJDYXJkX2RldGFpbENhcmRfXzFTb3VlXCIsXG5cdFwiaXRlbUNhcmRcIjogXCJDYXJkX2l0ZW1DYXJkX18xd0tzd1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9DYXJkL0NhcmRcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgICB0b2tlbjogJycsXHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIGxvZ2luOiAodG9rZW4sIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJ1c2luZXNzKSA9PiB7fSxcclxuICAgIGxvZ291dDogKCkgPT4ge30sXHJcbiAgICB1c2VyOiAnJyxcclxuICAgIGlzQnVzaW5lc3M6IGZhbHNlLFxyXG4gICAgaXRlbXM6IDAsXHJcbiAgICB0b3RhbFByaWNlOiAwLFxyXG4gICAgaXNPcGVuOiBmYWxzZSxcclxuICAgIGN1cnJDYXJ0OiBbXSxcclxuICAgIHNlYXJjaFN0cjogJycsXHJcbiAgICB0b2dnbGU6ICgpID0+IHt9LFxyXG4gICAgYXBwZW5kOiAoaXRlbSkgPT4ge30sXHJcbiAgICByZW1vdmU6IChpdGVtKSA9PiB7fSxcclxuICAgIGNoZWNrb3V0OiAoKSA9PiB7fSxcclxuICAgIGZpbmRJbmRleDogKG5hbWUpID0+IHt9LFxyXG4gICAgcHVzaFN0cjogKCkgPT4ge31cclxufSk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4wID0gW107XHJcbiAgICBsZXQgdG9rZW4xID0gMDtcclxuICAgIGxldCB0b2tlbjIgPSAwO1xyXG4gICAgbGV0IHRva2VuMyA9ICcnO1xyXG4gICAgbGV0IHRva2VuNCA9IGZhbHNlO1xyXG4gICAgbGV0IHRva2VuNSA9ICcnO1xyXG4gICAgbGV0IHRva2VuNiA9IFtdO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKXtcclxuICAgIGNvbnN0IGNhcnREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKTtcclxuICAgIGNvbnN0IGl0ZW1EYXRhID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW0nKSk7XHJcbiAgICBjb25zdCBwcmljZURhdGEgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG90YWwnKSk7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBidXNpbmVzc0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYnVzaW5lc3MnKTtcclxuICAgIGNvbnN0IHNlYXJjaERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VhcmNoJyk7XHJcblxyXG4gICAgaWYgKGNhcnREYXRhKSB7XHJcbiAgICAgICAgdG9rZW4wID1KU09OLnBhcnNlKGNhcnREYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChpdGVtRGF0YSkge1xyXG4gICAgICAgIHRva2VuMSA9IGl0ZW1EYXRhOyBcclxuICAgIH1cclxuICAgIGlmIChwcmljZURhdGEpIHtcclxuICAgICAgICB0b2tlbjIgPSBwcmljZURhdGE7IFxyXG4gICAgfVxyXG4gICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgICAgdG9rZW4zID0gdXNlckRhdGE7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgdG9rZW40ID0gKGJ1c2luZXNzRGF0YSA9PT0gJ3RydWUnKVxyXG4gXHJcbiAgICBpZiAoc2VhcmNoRGF0YSkge1xyXG4gICAgICAgdG9rZW41ID0gc2VhcmNoRGF0YTtcclxuICAgIH1cclxuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKHRva2VuMCk7XHJcbiAgICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZSh0b2tlbjEpO1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt0b3RhbEFtdCwgc2V0VG90YWxBbXRdID0gdXNlU3RhdGUodG9rZW4yKTtcclxuICAgIGNvbnN0ICBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSh0b2tlbjMpO1xyXG4gICAgY29uc3QgW2lzQnVzaW5lc3MsIHNldElzQnVzaW5lc3NdID0gdXNlU3RhdGUodG9rZW40KTtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSh0b2tlbjUpXHJcblxyXG5cclxuICAgIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAobSkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaChtKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VhcmNoJyxtKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZpbmRJbmRleCA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgdmFsdWVzIGluIGNhcnQpe1xyXG4gICAgICAgICAgICBpZiAoY2FydFt2YWx1ZXNdLml0ZW0gPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXBwZW5kSGFuZGxlciA9ICh2YWwsIHByaWNlKSA9PiB7XHJcbiAgICAgICAgbGV0IGEgPSBbXVxyXG4gICAgICAgIGZvciAoY29uc3Qgb2JqZWN0IGluIGNhcnQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYXJ0W29iamVjdF0uaXRlbSA9PT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXJ0KChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2U3RhdGVbb2JqZWN0XS5hbW91bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2U3RhdGVbb2JqZWN0XS50b3RhbCArPSBwcmV2U3RhdGVbb2JqZWN0XS5wcmljZTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsSlNPTi5zdHJpbmdpZnkocHJldlN0YXRlKSk7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0SXRlbSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHByZXZTdGF0ZSkgKyAxO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0VG90YWxBbXQocHJldlN0YXRlID0+IHtyZXR1cm4gcHJldlN0YXRlICsgY2FydFtvYmplY3RdLnByaWNlfSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbScsIHBhcnNlSW50KGl0ZW0pICsgMSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWwnLHBhcnNlSW50KHRvdGFsQW10KSArIGNhcnRbb2JqZWN0XS5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgaXRlbTogdmFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICBcclxuICAgICAgICBzZXRDYXJ0KChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgaWYgIChwcmV2U3RhdGUgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGUgPSBbLi4ucHJldlN0YXRlICwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogcHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IHZhbFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JyxKU09OLnN0cmluZ2lmeShwcmV2U3RhdGUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsSlNPTi5zdHJpbmdpZnkoW3tcclxuICAgICAgICAgICAgYW1vdW50OiAxLFxyXG4gICAgICAgICAgICB0b3RhbDogcHJpY2UsXHJcbiAgICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgICAgaXRlbTogdmFsXHJcbiAgICAgICAgfV0pKTtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBwcmljZSxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBwcmljZSxcclxuICAgICAgICAgICAgICAgIGl0ZW06IHZhbFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldEl0ZW0oKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQocHJldlN0YXRlKSArIDE7IFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW0nLCBwYXJzZUludChpdGVtKSArIDEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbCcscGFyc2VJbnQodG90YWxBbXQpICsgcHJpY2UpO1xyXG4gICAgICAgIHNldFRvdGFsQW10KHByZXZTdGF0ZSA9PiB7cmV0dXJuIHByZXZTdGF0ZSArIHByaWNlfSk7XHJcblxyXG4gXHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVIYW5kbGVyID0gKHZhbCkgPT4ge1xyXG4gICAgICAgIGxldCBhID0gMFxyXG4gICAgICAgIGZvciAoY29uc3Qgb2JqZWN0IGluIGNhcnQpe1xyXG4gICAgICAgICAgICBpZiAoY2FydFtvYmplY3RdLml0ZW0gPT09IHZhbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FydCgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYSA9IHByZXZTdGF0ZVtvYmplY3RdLmFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldlN0YXRlW29iamVjdF0uYW1vdW50ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlN0YXRlW29iamVjdF0uYW1vdW50IC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlN0YXRlW29iamVjdF0udG90YWwgLT0gcHJldlN0YXRlW29iamVjdF0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLEpTT04uc3RyaW5naWZ5KHByZXZTdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0SXRlbSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnRbb2JqZWN0XS5pdGVtICE9IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChwcmV2U3RhdGUpIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FydFtvYmplY3RdLml0ZW0gIT0gMSl7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG90YWwnLHBhcnNlSW50KHRvdGFsQW10KSAtIGNhcnRbb2JqZWN0XS5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUb3RhbEFtdChwcmV2U3RhdGUgPT4gIHByZXZTdGF0ZSAtIGNhcnRbb2JqZWN0XS5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXRlbScsIHBhcnNlSW50KGl0ZW0pIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2dnbGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzT3BlbihwcmV2U3RhdGUgPT4gIXByZXZTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluaXRpYWxUb2tlbjtcclxuICAgIFxyXG4gIFxyXG4gICAgY29uc3QgdG9rZW5EYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcblxyXG4gICAgaWYgKHRva2VuRGF0YSl7XHJcbiAgICAgICAgaW5pdGlhbFRva2VuID0gdG9rZW5EYXRhO1xyXG4gICAgfVxyXG4gICAgY29uc3QgW3Rva2VuICxzZXRUb2tlbl0gPSB1c2VTdGF0ZShpbml0aWFsVG9rZW4pO1xyXG5cclxuICAgIGNvbnN0IHVzZXJJc0xvZ2dlZEluID0gISF0b2tlbjtcclxuXHJcbiAgICBjb25zdCBsb2dpbkhhbmRsZXIgPSAodG9rZW4sIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJ1c2luZXNzKSA9PiB7XHJcbiAgICAgICAgc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgICAgIHNldE5hbWUoZmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWUpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsdG9rZW4pO1xyXG4gICAgICAgIHNldElzQnVzaW5lc3MoYnVzaW5lc3MpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdidXNpbmVzcycsYnVzaW5lc3MudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLGZpcnN0TmFtZSArICcgJyArIGxhc3ROYW1lKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKHRva2VuKSA9PiB7XHJcbiAgICAgICAgc2V0VG9rZW4obnVsbCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgc2V0Q2FydChbXSk7XHJcbiAgICAgICAgc2V0VG90YWxBbXQoMCk7XHJcbiAgICAgICAgc2V0SXNCdXNpbmVzcyhudWxsKTtcclxuICAgICAgICBzZXRJdGVtKDApO1xyXG4gICAgICAgIHNldFRva2VuKCcnKTtcclxuICAgICAgICBzZXROYW1lKCcnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoZWNrb3V0SGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgIHNldFRvdGFsQW10KDApO1xyXG4gICAgICAgIHNldEl0ZW0oMCk7XHJcbiAgICAgICAgc2V0Q2FydChwcmV2VmFsdWUgPT4gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHZhbHVlIGluIHByZXZWYWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlW3ZhbHVlXS5hbW91bnQgLT0gcHJldlZhbHVlW3ZhbHVlXS5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldlZhbHVlW3ZhbHVlXS50b3RhbCAtPSBwcmV2VmFsdWVbdmFsdWVdLnRvdGFsOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkocHJldlZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldlZhbHVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbCcsMCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtJywgMCk7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgIGlzTG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxyXG4gICAgICAgIGxvZ2luOiBsb2dpbkhhbmRsZXIsXHJcbiAgICAgICAgbG9nb3V0OiBsb2dvdXRIYW5kbGVyLFxyXG4gICAgICAgIHVzZXI6IG5hbWUsXHJcbiAgICAgICAgaXRlbXM6IGl0ZW0sXHJcbiAgICAgICAgaXNPcGVuOiBpc09wZW4sXHJcbiAgICAgICAgaXNCdXNpbmVzczogaXNCdXNpbmVzcyxcclxuICAgICAgICBjdXJyQ2FydDogY2FydCxcclxuICAgICAgICB0b3RhbHByaWNlOiB0b3RhbEFtdCxcclxuICAgICAgICBzZWFyY2hTdHI6IHNlYXJjaCxcclxuICAgICAgICBwdXNoU3RyOiBzZWFyY2hIYW5kbGVyLFxyXG4gICAgICAgIHRvZ2dsZTogdG9nZ2xlSGFuZGxlcixcclxuICAgICAgICBhcHBlbmQ6IGFwcGVuZEhhbmRsZXIsXHJcbiAgICAgICAgcmVtb3ZlOiByZW1vdmVIYW5kbGVyLFxyXG4gICAgICAgIGNoZWNrb3V0OiBjaGVja291dEhhbmRsZXIsXHJcbiAgICAgICAgZmluZEluZGV4OiBmaW5kSW5kZXhcclxuICAgIH07XHJcbiAgICByZXR1cm4gPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlID0ge2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIH1cclxuICAgIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWUgPSB7QXV0aENvbnRleHR9PlxyXG4gICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG48L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0OyIsImltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmQvQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NpZ251cC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHt1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdG9yZS91c2UtY29udGV4dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBjaGVja1VwcGVyID0gKHN0cmluZykgPT4ge1xyXG4gICAgZm9yIChsZXQgaSBvZiBzdHJpbmcpe1xyXG4gICAgICAgIGlmIChpc05hTihpKSl7XHJcbiAgICAgICAgaWYgKGkgPT0gaS50b1VwcGVyQ2FzZSgpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5jb25zdCBzaWdudXAgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIFxyXG4gICBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZlJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3Qgc1JlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgdFJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgZm9SZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGF1dGhDdHggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNCdXNpbmVzcywgc2V0SXNCdXNpbmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZk5hbWUsIHNldEZOYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3NOYW1lLCBzZXRTTmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0TmFtZSwgc2V0VE5hbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZm9OYW1lLCBzZXRGb05hbWVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaW5WYWxpZFNpZ251cCwgc2V0SW52YWxpZFNpZ25VcF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1dGhDdHguaXNCdXNpbmVzcyAmJiBhdXRoQ3R4LmlzTG9nZ2VkSW4pe1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2J1c2luZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXV0aEN0eC5pc0J1c2luZXNzICYgYXV0aEN0eC5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvQWxsUmVzdGF1cmFudHMnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFthdXRoQ3R4LmlzTG9nZ2VkSW5dKVxyXG4gICBcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZE1lZXR1cEhhbmRsZXIoZW50ZXJlZE1lZXR1cERhdGEpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcuLi9hcGkvaGFuZGxlcicsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50ZXJlZE1lZXR1cERhdGEpLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgXHJcbiAgICB9XHJcbiBcclxuICAgIGNvbnN0IGJ1c2luZXNzSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0J1c2luZXNzKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKTtcclxuICAgICAgICBmUmVmLmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgICAgICBzUmVmLmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgICAgICB0UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgICAgICBmb1JlZi5jdXJyZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgc2V0Rk5hbWUobnVsbCk7XHJcbiAgICAgICAgc2V0U05hbWUobnVsbCk7XHJcbiAgICAgICAgc2V0VE5hbWUobnVsbCk7XHJcbiAgICAgICAgc2V0Rm9OYW1lKG51bGwpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2lnbnVwID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChmTmFtZSAmJiBzTmFtZSAmIHROYW1lICYmIGZvTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGFjY0FyciA9IHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBmUmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBzUmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiB0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBmb1JlZi5jdXJyZW50LnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVudGVyZWRNZWV0dXBEYXRhID17XHJcbiAgICAgICAgICAgIG5hbWU6IGFjY0Fyci5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGFjY0Fyci5sYXN0TmFtZSxcclxuICAgICAgICAgICAgaW1hZ2U6JycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgcGFyYWdyYXBoOiAnJyxcclxuICAgICAgICAgICAgbWVudTogW10sXHJcbiAgICAgICAgICAgIGVtYWlsOiBhY2NBcnIuZW1haWxcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vaWRlbnRpdHl0b29sa2l0Lmdvb2dsZWFwaXMuY29tL3YxL2FjY291bnRzOnNpZ25VcD9rZXk9QUl6YVN5RFJJdnhBd3g4S3FyaFhPUXBJemtTYXZlNjFtZW1GMlV3Jywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgIGVtYWlsOiBhY2NBcnIuZW1haWwsXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IGFjY0Fyci5wYXNzd29yZCxcclxuICAgICAgICAgICAgICByZXR1cm5TZWN1cmVUb2tlbjogdHJ1ZVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAocmVzLm9rKXtcclxuXHJcbiAgICBpZiAoIWlzQnVzaW5lc3MpeyAgICAgXHJcbiAgICBmZXRjaChgaHR0cHM6Ly9yZWFjdGZpcnN0LTQ4MTQ3LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS91c2VyLzAuanNvbmAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGVtYWlsOiBhY2NBcnIuZW1haWwsXHJcbiAgICAgICAgZmlyc3ROYW1lOiBhY2NBcnIuZmlyc3ROYW1lLFxyXG4gICAgICAgIGxhc3ROYW1lOiBhY2NBcnIubGFzdE5hbWVcclxuICAgIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH19KS50aGVuKCkudGhlbihyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL0FsbFJlc3RhdXJhbnRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aEN0eC5sb2dpbih0UmVmLmN1cnJlbnQudmFsdWUsYWNjQXJyLmZpcnN0TmFtZSwgYWNjQXJyLmxhc3ROYW1lLCBmYWxzZSk7fSl9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhZGRNZWV0dXBIYW5kbGVyKGVudGVyZWRNZWV0dXBEYXRhKTtcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9yZWFjdGZpcnN0LTQ4MTQ3LWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS91c2VyLzEuanNvbmAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBhY2NBcnIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc05hbWU6IGFjY0Fyci5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBhY2NBcnIubGFzdE5hbWVcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH19KS50aGVuKCkudGhlbihyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvYnVzaW5lc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhDdHgubG9naW4odFJlZi5jdXJyZW50LnZhbHVlLGFjY0Fyci5maXJzdE5hbWUsIGFjY0Fyci5sYXN0TmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdBdXRoIGZhaWxlZCc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yICYmIGRhdGEuZXJyb3IubWVzc2FnZSl7IFxyXG4gICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBkYXRhLmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIH0pfX0pXHJcbiAgICAgfSBcclxuICAgICBlbHNlIHtcclxuICAgICAgICBsZXQgZXJyU3RyID0gXCJFUlJPUjpcIjtcclxuICAgICAgICBzZXRJbnZhbGlkU2lnblVwKHRydWUpO1xyXG4gICAgICAgIGlmICghZk5hbWUpe1xyXG4gICAgICAgICAgICBlcnJTdHIgKz0gIFwiIEludmFsaWQgTmFtZSxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzTmFtZSl7XHJcbiAgICAgICAgICAgIGlmIChpc0J1c2luZXNzKXtcclxuICAgICAgICAgICAgICAgIGVyclN0ciArPSBcIiBJbnZhbGlkIEFkZHJlc3MsXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGVyclN0ciArPSBcIiBJbnZhbGlkIExhc3QgTmFtZSxcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXROYW1lKXtcclxuICAgICAgICAgICAgZXJyU3RyICs9IFwiIEludmFsaWQgRW1haWwsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZm9OYW1lKSB7XHJcbiAgICAgICAgICAgIGVyclN0ciArPSBcIiBJbnZhbGlkIFBhc3N3b3JkLFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlcnJTdHIgPSBlcnJTdHIuc2xpY2UoMCwtMSk7XHJcbiAgICAgICAgYWxlcnQoZXJyU3RyKTtcclxuICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2hlY2tWYWxpZCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SW52YWxpZFNpZ25VcCh0cnVlKTtcclxuICAgICAgICBpZiAoZS50YXJnZXQubmFtZSA9PT0gJ2J1c2luZXNzJyB8fCBlLnRhcmdldC5uYW1lICA9PT0gJ2ZpcnN0Jykge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEZOYW1lKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Rk5hbWUoZmFsc2UpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICdhZGRyZXNzJyB8fCBlLnRhcmdldC5uYW1lID09PSAnbGFzdCcpe1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U05hbWUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFNOYW1lKGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09PSAnZW1haWwnKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAwICYmIChlLnRhcmdldC52YWx1ZS5pbmNsdWRlcygnLmNvbScpIHx8IGUudGFyZ2V0LnZhbHVlLmluY2x1ZGVzKCcubmV0JykgfHwgZS50YXJnZXQudmFsdWUuaW5jbHVkZXMoJy5lZHUnKSkgJiYgZS50YXJnZXQudmFsdWUuaW5jbHVkZXMoJ0AnKSl7XHJcbiAgICAgICAgICAgICAgICBzZXRUTmFtZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUTmFtZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnRhcmdldC5uYW1lID09PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZS5sZW5ndGggPiA2ICYmIC9cXGQvLnRlc3QoZS50YXJnZXQudmFsdWUpICYmIGNoZWNrVXBwZXIoZS50YXJnZXQudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgIHNldEZvTmFtZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRGb05hbWUoZmFsc2UpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9IFxyXG4gICAgY29uc3Qgc2V0QmFjayA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICdidXNpbmVzcycgfHwgZS50YXJnZXQubmFtZSAgPT09ICdmaXJzdCcpIHtcclxuICAgICAgICAgICBzZXRGTmFtZShudWxsKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBlLnRhcmdldC5uYW1lID09PSAnYWRkcmVzcycgfHwgZS50YXJnZXQubmFtZSA9PT0gJ2xhc3QnKXtcclxuICAgICAgICAgICBzZXRTTmFtZShudWxsKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICdlbWFpbCcpIHtcclxuICAgICAgICAgICAgc2V0VE5hbWUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgIHNldEZvTmFtZShudWxsKTtcclxuICAgICAgICBcclxuICAgIH0gXHJcbiAgICB9ICAgICAgXHJcbiAgICBpZiAoaXNCdXNpbmVzcyl7XHJcblxyXG4gICAgICAgIHJldHVybiAgPENhcmQ+IDxIZWFkPjx0aXRsZT5TaWduIFVwPC90aXRsZT48L0hlYWQ+PGgxPlNpZ251cCBCdXNpbmVzczwvaDE+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkJ1c2luZXNzfT4gPGJ1dHRvbiBvbkNsaWNrID0ge2J1c2luZXNzSGFuZGxlcn0+JiN4MjE5MDs8L2J1dHRvbj48c3Bhbj4mIzk2Nzg7PC9zcGFuPiYjOTY3Mzs8c3Bhbj48L3NwYW4+PGJ1dHRvbj4mI3gyMTkyOzwvYnV0dG9uPjwvZGl2PiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5pbnB1dENvbnRhaW5lcn0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJidXNpbmVzc1wiPkJ1c2luZXNzIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBwbGFjZUhvbGRlciA9IFwiZXg6IGZhbmN5IGJ1c2luZXNzXCIgb25JbnB1dCA9IHtzZXRCYWNrfSBvbkJsdXIgPSB7Y2hlY2tWYWxpZH0gcmVmID0ge2ZSZWZ9IG5hbWUgPSAnYnVzaW5lc3MnIGNsYXNzTmFtZT17YCR7Zk5hbWUgIT0gZmFsc2UgPyAgJyc6IHN0eWxlcy5mbGFnZ2VkfWB9Lz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIj5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgcGxhY2VIb2xkZXIgPSBcImV4OiA3IGJ1c2luZXNzIHJkXCIgb25JbnB1dCA9IHtzZXRCYWNrfSBvbkJsdXIgPSB7Y2hlY2tWYWxpZH0gcmVmID0ge3NSZWZ9IHR5cGUgPSBcInRleHRcIiBuYW1lID0gJ2FkZHJlc3MnIGNsYXNzTmFtZT17YCR7c05hbWUgIT0gZmFsc2UgPyAgJyc6IHN0eWxlcy5mbGFnZ2VkfWB9Lz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBwbGFjZUhvbGRlciA9IFwiZXg6IGVtYWlsQGVtYWlsLmNvbVwiIG9uSW5wdXQgPSB7c2V0QmFja30gb25CbHVyID0ge2NoZWNrVmFsaWR9ICByZWYgPSB7dFJlZn0gdHlwZSA9IFwiZW1haWxcIiBuYW1lID0gJ2VtYWlsJyBjbGFzc05hbWU9e2Ake3ROYW1lICE9IGZhbHNlID8gICcnOiBzdHlsZXMuZmxhZ2dlZH1gfS8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgcGxhY2VIb2xkZXIgPSBcInh4eHh4eFwiIG9uSW5wdXQgPSB7c2V0QmFja30gb25CbHVyID0ge2NoZWNrVmFsaWR9IHJlZiA9IHtmb1JlZn0gdHlwZSA9IFwicGFzc3dvcmRcIiBuYW1lID0gXCJwYXNzd29yZFwiIGNsYXNzTmFtZT17YCR7Zm9OYW1lICE9IGZhbHNlID8gICcnOiBzdHlsZXMuZmxhZ2dlZH1gfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0ge3NpZ251cH0gY2xhc3NOYW1lID0ge2luVmFsaWRTaWdudXAgPyBzdHlsZXMuZXJyQnRuIDogc3R5bGVzLmJ1dHRvblNpZ25VcH0+U2lnbiBVcDwvYnV0dG9uPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgIH1cclxuICAgIHJldHVybiA8Q2FyZD48SGVhZD48dGl0bGU+U2lnbiBVcDwvdGl0bGU+PC9IZWFkPiA8aDE+U2lnbnVwIEN1c3RvbWVyPC9oMT5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkJ1c2luZXNzfT4gPGJ1dHRvbj4mI3gyMTkwOzwvYnV0dG9uPjxzcGFuPiYjOTY3Mzs8L3NwYW4+JiM5Njc4OzxzcGFuPjwvc3Bhbj48YnV0dG9uIG9uQ2xpY2s9e2J1c2luZXNzSGFuZGxlcn0+JiN4MjE5Mjs8L2J1dHRvbj48L2Rpdj4gXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5pbnB1dENvbnRhaW5lcn0+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgcGxhY2VIb2xkZXIgPSBcIkZpcnN0IE5hbWVcIiBvbklucHV0ID0ge3NldEJhY2t9IG9uQmx1ciA9IHtjaGVja1ZhbGlkfSB0eXBlID0gXCJ0ZXh0XCIgcmVmID0ge2ZSZWZ9IG5hbWUgPSAnZmlyc3QnIGNsYXNzTmFtZT17YCR7Zk5hbWUgIT0gZmFsc2UgPyAgJyc6IHN0eWxlcy5mbGFnZ2VkfWB9Lz5cclxuICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdFwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICA8aW5wdXQgcGxhY2VIb2xkZXIgPSBcIkxhc3QgTmFtZVwiIG9uSW5wdXQgPSB7c2V0QmFja30gb25CbHVyID0ge2NoZWNrVmFsaWR9IHJlZiA9IHtzUmVmfSB0eXBlID0gXCJ0ZXh0XCIgbmFtZSA9ICdsYXN0JyBjbGFzc05hbWU9e2Ake3NOYW1lICE9IGZhbHNlID8gICcnOiBzdHlsZXMuZmxhZ2dlZH1gfS8+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgPGlucHV0IHBsYWNlSG9sZGVyID0gXCJleDogZW1haWxAZW1haWwuY29tXCIgb25JbnB1dCA9IHtzZXRCYWNrfSBvbkJsdXIgPSB7Y2hlY2tWYWxpZH0gcmVmID0ge3RSZWZ9IHR5cGUgPSBcImVtYWlsXCIgbmFtZSA9ICdlbWFpbCdjbGFzc05hbWU9e2Ake3ROYW1lICE9IGZhbHNlID8gICcnOiBzdHlsZXMuZmxhZ2dlZH1gfS8+XHJcbiAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgPGlucHV0IHBsYWNlSG9sZGVyID0gXCJ4eHh4eHhcIiBvbklucHV0ID0ge3NldEJhY2t9IG9uQmx1ciA9IHtjaGVja1ZhbGlkfSByZWYgPSB7Zm9SZWZ9IHR5cGUgPSBcInBhc3N3b3JkXCIgbmFtZSA9IFwicGFzc3dvcmRcIiBjbGFzc05hbWU9e2Ake2ZvTmFtZSAhPSBmYWxzZSA/ICAnJzogc3R5bGVzLmZsYWdnZWR9YH0vPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7c2lnbnVwfSBjbGFzc05hbWUgPSB7aW5WYWxpZFNpZ251cCA/IHN0eWxlcy5lcnJCdG4gOiBzdHlsZXMuYnV0dG9uU2lnblVwfT5TaWduIFVwPC9idXR0b24+XHJcbiAgICA8L0NhcmQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ251cDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbnB1dENvbnRhaW5lclwiOiBcInNpZ251cF9pbnB1dENvbnRhaW5lcl9fQ185ZmFcIixcblx0XCJzbGlkZWluXCI6IFwic2lnbnVwX3NsaWRlaW5fXzJqWFVyXCIsXG5cdFwiZmxhZ2dlZFwiOiBcInNpZ251cF9mbGFnZ2VkX18xX081UlwiLFxuXHRcImJ1dHRvbkJ1c2luZXNzXCI6IFwic2lnbnVwX2J1dHRvbkJ1c2luZXNzX18zc1UxR1wiLFxuXHRcImJ1dHRvblNpZ25VcFwiOiBcInNpZ251cF9idXR0b25TaWduVXBfXzNYb2QtXCIsXG5cdFwiZXJyQnRuXCI6IFwic2lnbnVwX2VyckJ0bl9fM1JPcGNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==