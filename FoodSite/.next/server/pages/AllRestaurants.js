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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZV+L");


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

/***/ "ZV+L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./components/store/use-context.js
var use_context = __webpack_require__("BtXh");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/Card/Card.js
var Card = __webpack_require__("A2So");

// EXTERNAL MODULE: ./components/RestaurantList/RestaurantItem.module.css
var RestaurantItem_module = __webpack_require__("p+UX");
var RestaurantItem_module_default = /*#__PURE__*/__webpack_require__.n(RestaurantItem_module);

// EXTERNAL MODULE: ./components/Cart/ModalCart.module.css
var ModalCart_module = __webpack_require__("NWln");
var ModalCart_module_default = /*#__PURE__*/__webpack_require__.n(ModalCart_module);

// CONCATENATED MODULE: ./components/Cart/ModalItemDisplay.js






const ModalItemDisplay = props => {
  const cartCtx = Object(external_react_["useContext"])(use_context["b" /* default */]);

  const addHandler = () => {
    cartCtx.append(props.name, parseInt(props.price));
  };

  const minusHandler = () => {
    cartCtx.remove(props.name);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      marginBottom: '20px'
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ModalCart_module_default.a.left,
      style: {
        display: 'inline'
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: ModalCart_module_default.a.name,
        style: {
          fontSize: '18px'
        },
        children: props.name
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
          children: "Price:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          style: {
            fontWeight: 'none',
            fontStyle: 'italic'
          },
          children: [" $", props.price, ".00"]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: ModalCart_module_default.a.right,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: addHandler,
        className: ModalCart_module_default.a.orderButton,
        children: "+"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: minusHandler,
        className: ModalCart_module_default.a.orderButton,
        children: "-"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {
      style: {
        marginTop: '15px'
      }
    })]
  });
};

/* harmony default export */ var Cart_ModalItemDisplay = (ModalItemDisplay);
// CONCATENATED MODULE: ./components/Cart/ModalDisplay.js







const ModalDisplay = props => {
  const cartCtx = Object(external_react_["useContext"])(use_context["b" /* default */]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: ModalCart_module_default.a.itemContainer,
    children: [props.list.map(items => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cart_ModalItemDisplay, {
      name: items.name,
      price: items.price
    }, items.id)), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        fontWeight: '600'
      },
      children: ["Total items in Cart: ", cartCtx.items]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: ModalCart_module_default.a.orderButton,
      onClick: props.displayHandler,
      children: "Close Store"
    })]
  });
};

/* harmony default export */ var Cart_ModalDisplay = (ModalDisplay);
// CONCATENATED MODULE: ./components/RestaurantList/RestaurantItem.js









const RestaurantItem = props => {
  const cartCtx = Object(external_react_["useContext"])(use_context["b" /* default */]);
  const {
    0: display,
    1: setDisplay
  } = Object(external_react_["useState"])(0);
  const router = Object(router_["useRouter"])();

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

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: RestaurantItem_module_default.a.restaurantContainer,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      children: props.name
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: props.image,
      className: RestaurantItem_module_default.a.imageContainer
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: RestaurantItem_module_default.a.subtitles,
      children: props.description
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: RestaurantItem_module_default.a.description,
      children: props.address
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: RestaurantItem_module_default.a.btn,
      onClick: businessDetails,
      children: "Business Details"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      onClick: displayHandler,
      className: display == 0 ? RestaurantItem_module_default.a.orderButton : `${RestaurantItem_module_default.a.orderButton} ${RestaurantItem_module_default.a.on}`,
      children: " Click Here to Display Menu "
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: RestaurantItem_module_default.a.visibility,
      style: {
        maxHeight: display
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Cart_ModalDisplay, {
        list: props.menu,
        displayHandler: displayHandler
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {})]
  });
};

/* harmony default export */ var RestaurantList_RestaurantItem = (RestaurantItem);
// CONCATENATED MODULE: ./components/RestaurantList/Restaurant.js








const Restaurant = props => {
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
            className: RestaurantItem_module_default.a.selectedBtn,
            children: " \u25CF"
          }));
        } else {
          prevVal.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            style: {
              color: 'rgba(147, 25, 7,0.9)'
            },
            children: " \u25CF "
          }));
        }
      }

      return prevVal;
    });
  }, [props.plus, props.minus]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* default */], {
      children: [props.isLoading && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: RestaurantItem_module_default.a.userContainer,
        style: {
          marginBottom: '250px',
          marginTop: '250px'
        },
        children: "Loading Restaurants..."
      }), !props.isLoading && props.res.map(r => /*#__PURE__*/Object(jsx_runtime_["jsx"])(RestaurantList_RestaurantItem, {
        id: r.id,
        image: r.image,
        name: r.name,
        description: r.description,
        address: r.address,
        menu: r.menu
      }, r.id)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: circArr
      }), !(props.pageNum == 1) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: RestaurantItem_module_default.a.nextBtn,
        onClick: props.minus,
        children: "Previous"
      }), props.total % 2 == 0 ? props.pageNum != parseInt(props.total / 2) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: RestaurantItem_module_default.a.nextBtn,
        onClick: props.plus,
        children: "Next"
      }) : props.pageNum < parseInt(props.total / 2) + 1 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: RestaurantItem_module_default.a.nextBtn,
        onClick: props.plus,
        children: "Next"
      })]
    })
  });
};

/* harmony default export */ var RestaurantList_Restaurant = (Restaurant);
// EXTERNAL MODULE: ./components/Cart/ModalCart.js + 1 modules
var ModalCart = __webpack_require__("1DAf");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/AllRestaurants/index.js











const AllRestaurants = () => {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: resList,
    1: setResList
  } = Object(external_react_["useState"])([]);
  const {
    0: currList,
    1: setCurrList
  } = Object(external_react_["useState"])(1);
  const {
    0: totalNum,
    1: setTotalNum
  } = Object(external_react_["useState"])(null);

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

  const authCtx = Object(external_react_["useContext"])(use_context["b" /* default */]);
  const router = Object(router_["useRouter"])();

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

  Object(external_react_["useEffect"])(() => {
    getter();

    if (!authCtx.isLoggedIn) {
      router.push('/');
    }

    if (authCtx.isBusiness) {
      router.push('/business');
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Restaurants"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* default */], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: RestaurantItem_module_default.a.userContainer,
        children: ["Welcome, ", authCtx.user, "!"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: RestaurantItem_module_default.a.subtitle,
        children: "Be sure to Grab Something Tasty Here at ReactEats!"
      })]
    }), authCtx.isOpen && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalCart["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RestaurantList_Restaurant, {
      res: resList,
      plus: plus,
      minus: minus,
      isLoading: isLoading,
      total: totalNum,
      pageNum: currList
    }, 1)]
  });
};

/* harmony default export */ var pages_AllRestaurants = __webpack_exports__["default"] = (AllRestaurants);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "p+UX":
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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });