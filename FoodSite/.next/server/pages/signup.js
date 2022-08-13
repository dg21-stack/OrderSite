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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0svM":
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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("s7nH");


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

/***/ }),

/***/ "s7nH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("A2So");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _signup_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0svM");
/* harmony import */ var _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_signup_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_store_use_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BtXh");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);









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
  const authCtx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_store_use_context__WEBPACK_IMPORTED_MODULE_5__[/* default */ "b"]);
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
          children: "Sign Up"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        children: "Signup Business"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonBusiness,
        children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
          onClick: businessHandler,
          children: "\u2190"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          children: "\u25CE"
        }), "\u25C9", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
          children: "\u2192"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputContainer,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
          htmlFor: "business",
          children: "Business Name"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          placeHolder: "ex: fancy business",
          onInput: setBack,
          onBlur: checkValid,
          ref: fRef,
          name: "business",
          className: `${fName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
          htmlFor: "address",
          children: "Address"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          placeHolder: "ex: 7 business rd",
          onInput: setBack,
          onBlur: checkValid,
          ref: sRef,
          type: "text",
          name: "address",
          className: `${sName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
          htmlFor: "email",
          children: "Email"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          placeHolder: "ex: email@email.com",
          onInput: setBack,
          onBlur: checkValid,
          ref: tRef,
          type: "email",
          name: "email",
          className: `${tName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
          htmlFor: "password",
          children: "Password"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          placeHolder: "xxxxxx",
          onInput: setBack,
          onBlur: checkValid,
          ref: foRef,
          type: "password",
          name: "password",
          className: `${foName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
        onClick: signup,
        className: inValidSignup ? _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.errBtn : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSignUp,
        children: "Sign Up"
      })]
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "Sign Up"
      })
    }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      children: "Signup Customer"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonBusiness,
      children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
        children: "\u2190"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
        children: "\u25C9"
      }), "\u25CE", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
        onClick: businessHandler,
        children: "\u2192"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputContainer,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        htmlFor: "first",
        children: "First Name"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        placeHolder: "First Name",
        onInput: setBack,
        onBlur: checkValid,
        type: "text",
        ref: fRef,
        name: "first",
        className: `${fName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        htmlFor: "last",
        children: "Last Name"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        placeHolder: "Last Name",
        onInput: setBack,
        onBlur: checkValid,
        ref: sRef,
        type: "text",
        name: "last",
        className: `${sName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        htmlFor: "email",
        children: "Email"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        placeHolder: "ex: email@email.com",
        onInput: setBack,
        onBlur: checkValid,
        ref: tRef,
        type: "email",
        name: "email",
        className: `${tName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
        htmlFor: "password",
        children: "Password"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
        placeHolder: "xxxxxx",
        onInput: setBack,
        onBlur: checkValid,
        ref: foRef,
        type: "password",
        name: "password",
        className: `${foName != false ? '' : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.flagged}`
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
      onClick: signup,
      className: inValidSignup ? _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.errBtn : _signup_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonSignUp,
      children: "Sign Up"
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (signup);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });