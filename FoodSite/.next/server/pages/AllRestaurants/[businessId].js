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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gyT3");


/***/ }),

/***/ "1DAf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/store/use-context.js
var use_context = __webpack_require__("BtXh");

// EXTERNAL MODULE: ./components/Cart/ModalCart.module.css
var ModalCart_module = __webpack_require__("NWln");
var ModalCart_module_default = /*#__PURE__*/__webpack_require__.n(ModalCart_module);

// CONCATENATED MODULE: ./components/Cart/ModalCartItem.js






const ModalCartItem = props => {
  const cartCtx = Object(external_react_["useContext"])(use_context["b" /* default */]);

  const addHandler = () => {
    cartCtx.append(props.name, props.price);
  };

  const removeHandler = () => {
    cartCtx.remove(props.name);
  };

  if (props.total === 0) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {});
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ModalCart_module_default.a.left,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalCart_module_default.a.name,
        children: props.name
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
          children: "Price:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("i", {
          children: [" $", props.price, ".00"]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ModalCart_module_default.a.right,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("i", {
          children: ["$", props.totalPrice, ".00"]
        }), " / ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
          children: [props.total, " items "]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: addHandler,
        children: " + "
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: removeHandler,
        children: " - "
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {
      styles: {
        border: 'solid 0.4px rgba(0, 0, 0,0.5)'
      }
    })]
  });
};

/* harmony default export */ var Cart_ModalCartItem = (ModalCartItem);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Cart/ModalCart.js








const ModalCart = () => {
  const cartCtx = Object(external_react_["useContext"])(use_context["b" /* default */]);
  const router = Object(router_["useRouter"])();

  const clickHandler = () => {
    cartCtx.toggle();
  };

  if (cartCtx.currCart === undefined || cartCtx.items === 0) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: ModalCart_module_default.a.backdrop,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("container", {
        className: ModalCart_module_default.a.container,
        style: {
          height: '40%'
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
          className: ModalCart_module_default.a.title,
          children: ["Your Cart", /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {})]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: ModalCart_module_default.a.span,
          children: "Cart Empty "
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: clickHandler,
          children: " Close "
        })]
      })
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: ModalCart_module_default.a.backdrop,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("container", {
      className: ModalCart_module_default.a.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
        className: ModalCart_module_default.a.title,
        children: ["Your Cart", /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {})]
      }), cartCtx.currCart.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cart_ModalCartItem, {
        total: item.amount,
        price: item.price,
        totalPrice: item.total,
        name: item.item,
        index: item
      }, index)), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
          children: " Total: "
        }), " ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("i", {
          children: [" $", cartCtx.totalprice, ".00"]
        }), " "]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: clickHandler,
        children: "Close"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: () => {
          cartCtx.toggle();
          router.push('/checkout');
        },
        children: "Checkout"
      })]
    })
  });
};

/* harmony default export */ var Cart_ModalCart = __webpack_exports__["a"] = (ModalCart);

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

/***/ "NWln":
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

/***/ "gyT3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./components/Card/Card.module.css
var Card_module = __webpack_require__("ZJlY");
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);

// CONCATENATED MODULE: ./components/Card/DetailCard.js



const DetailCard = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: Card_module_default.a.detailCard,
    children: props.children
  });
};

/* harmony default export */ var Card_DetailCard = (DetailCard);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/store/use-context.js
var use_context = __webpack_require__("BtXh");

// EXTERNAL MODULE: ./components/Details/Details.module.css
var Details_module = __webpack_require__("oZ3I");
var Details_module_default = /*#__PURE__*/__webpack_require__.n(Details_module);

// CONCATENATED MODULE: ./components/Details/image.js




const Image = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Details_module_default.a.image,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Details_module_default.a.title,
      children: props.details
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: props.image
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Details_module_default.a.subtitle,
      children: props.subtitle
    })]
  });
};

/* harmony default export */ var Details_image = (Image);
// CONCATENATED MODULE: ./components/Details/Details.js





const Description = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Details_module_default.a.h2,
      children: "About Our Restaurant"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: Details_module_default.a.description,
      children: props.description
    })]
  });
};

/* harmony default export */ var Details = (Description);
// CONCATENATED MODULE: ./components/Details/MenuItem.js







const MenuItem = props => {
  var _props$cart, _props$cart2;

  const cartCtx = Object(external_react_["useContext"])(use_context["b" /* default */]);
  let a = 0;
  const {
    0: currIndex,
    1: setCurrIndex
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
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

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Details_module_default.a.itemContainer,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Details_module_default.a.left,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Details_module_default.a.productName,
        children: props.name
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Details_module_default.a.descrip,
        children: props.description
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Details_module_default.a.price,
        children: ["$", props.price, ".00"]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Details_module_default.a.right,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Details_module_default.a.amount,
        children: [" Amount in Cart: ", (_props$cart = props.cart) !== null && _props$cart !== void 0 && _props$cart[currIndex] ? (_props$cart2 = props.cart) === null || _props$cart2 === void 0 ? void 0 : _props$cart2[currIndex].amount : 0]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: addHandler,
        children: "+"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: minusHandler,
        children: "-"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {})]
  });
};

/* harmony default export */ var Details_MenuItem = (MenuItem);
// CONCATENATED MODULE: ./components/Details/Menu.js







const Menu = props => {
  const authCtx = Object(external_react_["useContext"])(use_context["b" /* default */]);

  if (props.menu) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Details_module_default.a.title,
        style: {
          marginBottom: '20px'
        },
        children: "Menu"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {
        style: {
          width: "95%",
          marginBottom: '20px'
        }
      }), props.menu.map((x, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Details_MenuItem, {
        name: x.name,
        price: x.price,
        description: x.description,
        index: index,
        cart: authCtx.currCart
      }, x.id)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: Details_module_default.a.cartBtn,
        onClick: authCtx.toggle,
        children: "Open Cart"
      })]
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {});
};

/* harmony default export */ var Details_Menu = (Menu);
// CONCATENATED MODULE: ./components/Card/ItemCard.js



const ItemCard = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: Card_module_default.a.itemCard,
    children: props.children
  });
};

/* harmony default export */ var Card_ItemCard = (ItemCard);
// EXTERNAL MODULE: ./components/Cart/ModalCart.js + 1 modules
var ModalCart = __webpack_require__("1DAf");

// EXTERNAL MODULE: ./components/Details/ReviewItem.js
var ReviewItem = __webpack_require__("uvRW");

// CONCATENATED MODULE: ./components/Details/ReviewPage.js






const ReviewPage = props => {
  const subjectRef = Object(external_react_["useRef"])();
  const bodyRef = Object(external_react_["useRef"])();
  const {
    0: star1,
    1: setStar1
  } = Object(external_react_["useState"])(false);
  const {
    0: star2,
    1: setStar2
  } = Object(external_react_["useState"])(false);
  const {
    0: star3,
    1: setStar3
  } = Object(external_react_["useState"])(false);
  const {
    0: star4,
    1: setStar4
  } = Object(external_react_["useState"])(false);
  const {
    0: star5,
    1: setStar5
  } = Object(external_react_["useState"])(false);
  const {
    0: err,
    1: setErr
  } = Object(external_react_["useState"])(false);
  const {
    0: display,
    1: setDisplay
  } = Object(external_react_["useState"])(0);
  const {
    0: circArr,
    1: setCircArr
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    setCircArr(prevVal => {
      prevVal = [];

      while (prevVal.length < props.total / 2) {
        if (prevVal.length == props.pageNum - 1) {
          prevVal.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: Details_module_default.a.selectedBtn,
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
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Details_module_default.a.reviewTitle,
        children: "Reviews"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Details_module_default.a.stars,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            onClick: starSetter,
            name: "star 5",
            className: star5 ? Details_module_default.a.trueBtn : Details_module_default.a.falseBtn,
            children: " \u2605"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            onClick: starSetter,
            name: "star 4",
            className: star4 ? Details_module_default.a.trueBtn : Details_module_default.a.falseBtn,
            children: " \u2605"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            onClick: starSetter,
            name: "star 3",
            className: star3 ? Details_module_default.a.trueBtn : Details_module_default.a.falseBtn,
            children: " \u2605"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            onClick: starSetter,
            name: "star 2",
            className: star2 ? Details_module_default.a.trueBtn : Details_module_default.a.falseBtn,
            children: " \u2605"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            onClick: starSetter,
            name: "star 1",
            className: star1 ? Details_module_default.a.trueBtn : Details_module_default.a.falseBtn,
            children: " \u2605"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Details_module_default.a.input,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            htmlFor: "subject",
            children: "Subject"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            ref: subjectRef,
            onInput: () => {
              setErr(false);
            },
            name: "subject",
            placeholder: "subject"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Details_module_default.a.input,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            htmlFor: "body",
            children: "Body"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
            ref: bodyRef,
            onInput: () => {
              setErr(false);
            },
            name: "body",
            placeholder: "body"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: clicker,
          className: err ? Details_module_default.a.errBtn : Details_module_default.a.normBtn,
          children: "Add Review"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: displayHandler,
        className: display == 0 ? Details_module_default.a.displayButton : `${Details_module_default.a.displayButton} ${Details_module_default.a.on}`,
        children: "Click Here to Display Reviews"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: display == 0 ? Details_module_default.a.visibility : `${Details_module_default.a.visibility} ${Details_module_default.a.visiOn}`,
        style: {
          height: display
        },
        children: [props.isLoading && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Details_module_default.a.loading,
          children: " Reviews Loading..."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          style: {
            height: 213
          },
          children: !props.isLoading && props.reviewList.map(review => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ReviewItem["a" /* default */], {
            user: review.user,
            date: review.date,
            body: review.body,
            stars: review.stars,
            subject: review.subject
          }, review.id))
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: circArr
        }), !(props.pageNum == 1) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: Details_module_default.a.nextBtn,
          onClick: minusHandler,
          children: "Previous"
        }), props.total % 2 == 0 ? props.pageNum != parseInt(props.total / 2) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: Details_module_default.a.nextBtn,
          onClick: plusHandler,
          children: "Next"
        }) : props.pageNum < parseInt(props.total / 2) + 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: Details_module_default.a.nextBtn,
          onClick: plusHandler,
          children: "Next"
        })]
      })]
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {});
};

/* harmony default export */ var Details_ReviewPage = (ReviewPage);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__("ykE2");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/AllRestaurants/[businessId]/index.js














const businessDetails = props => {
  var _props$restaurant, _props$restaurant2, _props$restaurant3, _props$restaurant4, _props$restaurant5, _props$restaurant6;

  const {
    0: pageNum,
    1: setPageNum
  } = Object(external_react_["useState"])(1);
  const {
    0: totalNum,
    1: setTotalNum
  } = Object(external_react_["useState"])(null);
  const {
    0: reviewList,
    1: setReviewList
  } = Object(external_react_["useState"])([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);

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

  Object(external_react_["useEffect"])(() => {
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

  const authCtx = Object(external_react_["useContext"])(use_context["b" /* default */]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      marginLeft: '8vw',
      marginRight: '8vw',
      marginBottom: '10vw'
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: (_props$restaurant = props.restaurant) === null || _props$restaurant === void 0 ? void 0 : _props$restaurant.name
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card_DetailCard, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Details_image, {
        image: (_props$restaurant2 = props.restaurant) === null || _props$restaurant2 === void 0 ? void 0 : _props$restaurant2.image,
        details: (_props$restaurant3 = props.restaurant) === null || _props$restaurant3 === void 0 ? void 0 : _props$restaurant3.name,
        subtitle: (_props$restaurant4 = props.restaurant) === null || _props$restaurant4 === void 0 ? void 0 : _props$restaurant4.description
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card_DetailCard, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Details, {
        description: (_props$restaurant5 = props.restaurant) === null || _props$restaurant5 === void 0 ? void 0 : _props$restaurant5.paragraph
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card_ItemCard, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Details_Menu, {
        menu: (_props$restaurant6 = props.restaurant) === null || _props$restaurant6 === void 0 ? void 0 : _props$restaurant6.menu
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card_ItemCard, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Details_ReviewPage, {
        addReviewHandler: addReviewHandler,
        total: totalNum,
        isLoading: isLoading,
        getter: getter,
        pageNum: pageNum,
        reviewList: reviewList,
        plus: plus,
        minus: minus
      })
    }), authCtx.isOpen && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalCart["a" /* default */], {})]
  });
};

async function getStaticPaths() {
  const client = await external_mongodb_["MongoClient"].connect('mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority');
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
  const client = await external_mongodb_["MongoClient"].connect('mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority');
  const db = client.db();
  const resCollection = db.collection('ResList');
  const res = await resCollection.findOne({
    _id: Object(external_mongodb_["ObjectId"])(meetupId)
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
/* harmony default export */ var _businessId_ = __webpack_exports__["default"] = (businessDetails);

/***/ }),

/***/ "oZ3I":
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

/***/ "uvRW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oZ3I");
/* harmony import */ var _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Details_module_css__WEBPACK_IMPORTED_MODULE_1__);




const ReviewItem = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.user,
      children: ["reviewer: ", props.user]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detailContainer,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.date,
        children: props.date
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subject,
        children: props.subject
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.bodyContainer,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body,
        children: props.body
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        children: [" ", props.stars == 5 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          })]
        }) : props.stars == 4 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          })]
        }) : props.stars == 3 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          })]
        }) : props.stars == 2 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          })]
        }) : props.stars == 1 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trueStr,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: _Details_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.str,
            children: " \u2605 "
          })]
        }) : 'error']
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {})]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ReviewItem);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });