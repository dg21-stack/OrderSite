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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/7Jp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/Card/Card.js
var Card = __webpack_require__("A2So");

// EXTERNAL MODULE: ./pages/business/business.module.css
var business_module = __webpack_require__("u3FF");
var business_module_default = /*#__PURE__*/__webpack_require__.n(business_module);

// CONCATENATED MODULE: ./components/items/addItem.js





const AddItem = props => {
  const itemRef = Object(external_react_["useRef"])();
  const descripRef = Object(external_react_["useRef"])();
  const priceRef = Object(external_react_["useRef"])();

  const clickHandler = () => {
    const itemInfo = {
      name: itemRef.current.value,
      price: priceRef.current.value,
      description: descripRef.current.value,
      id: Math.random(0, 100000)
    };
    itemRef.current.value = '';
    priceRef.current.value = '';
    descripRef.current.value = '';
    props.addItemHandler(itemInfo);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
    onSubmit: e => e.preventDefault(),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "menuItem",
        className: business_module_default.a.subtitle,
        children: "Item Name:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        ref: itemRef,
        placeholder: "item",
        className: business_module_default.a.input,
        name: "menuItem"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "price",
        className: business_module_default.a.subtitle,
        children: "Price:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        ref: priceRef,
        placeholder: "price",
        className: business_module_default.a.input,
        name: "price"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "descrip",
        className: business_module_default.a.subtitle,
        children: "Item Description:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        ref: descripRef,
        placeholder: "description",
        className: business_module_default.a.input,
        name: "descrip"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: props.clicker,
      children: "Cancel"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: clickHandler,
      children: "Add Item"
    })]
  });
};

/* harmony default export */ var addItem = (AddItem);
// CONCATENATED MODULE: ./components/items/ChangeDescription.js





const ChangeDescription = props => {
  const descripRef = Object(external_react_["useRef"])();

  const clicker = () => {
    props.changeDescriptionHandler(descripRef.current.value, true);
    descripRef.current.value = '';
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
    onSubmit: e => e.preventDefault(),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "description",
        className: business_module_default.a.subtitle,
        children: "Subtitle:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        ref: descripRef,
        placeholder: "subtitle",
        className: business_module_default.a.input,
        name: "description"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: props.clicker,
      children: "Cancel"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: clicker,
      children: "Change Subtitle"
    })]
  });
};

/* harmony default export */ var items_ChangeDescription = (ChangeDescription);
// CONCATENATED MODULE: ./components/items/ChangeImage.js





const ChangeImage = props => {
  const imageRef = Object(external_react_["useRef"])();

  const clicker = () => {
    props.changeImageHandler(imageRef.current.value, false);
    imageRef.current.value = '';
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
    onSubmit: e => e.preventDefault(),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "image",
        className: business_module_default.a.subtitle,
        children: "Image URL:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        ref: imageRef,
        placeholder: "image",
        className: business_module_default.a.input,
        name: "image"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: props.clicker,
      children: "Cancel"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: clicker,
      children: "Change Image"
    })]
  });
};

/* harmony default export */ var items_ChangeImage = (ChangeImage);
// CONCATENATED MODULE: ./components/items/ChangeName.js





const ChangeName = props => {
  const nameRef = Object(external_react_["useRef"])();

  const clicker = () => {
    props.changeDescriptionHandler(nameRef.current.value, true);
    nameRef.current.value = '';
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
    onSubmit: e => e.preventDefault(),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "name",
        className: business_module_default.a.subtitle,
        children: "Name:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        ref: nameRef,
        placeholder: "name",
        className: business_module_default.a.input,
        name: "name"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: props.clicker,
      children: "Cancel"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: clicker,
      children: "Change Name"
    })]
  });
};

/* harmony default export */ var items_ChangeName = (ChangeName);
// CONCATENATED MODULE: ./components/items/ChangeParagraph.js





const ChangeParagraph = props => {
  const descripRef = Object(external_react_["useRef"])();

  const clicker = () => {
    props.changeDescriptionHandler(descripRef.current.value, true);
    descripRef.current.value = '';
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
    onSubmit: e => e.preventDefault(),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "description",
        className: business_module_default.a.subtitle,
        children: "Description:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
        ref: descripRef,
        placeholder: "description",
        className: business_module_default.a.input,
        style: {
          height: '200px',
          width: '250px'
        },
        name: "description"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: props.clicker,
      children: "Cancel"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: clicker,
      children: "Change Description"
    })]
  });
};

/* harmony default export */ var items_ChangeParagraph = (ChangeParagraph);
// CONCATENATED MODULE: ./components/items/removeItem.js





const RemoveItem = props => {
  const itemRef = Object(external_react_["useRef"])();

  const clicker = () => {
    props.removeItemHandler(itemRef.current.value);
    itemRef.current.value = '';
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
    onSubmit: e => e.preventDefault(),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
        htmlFor: "menuItem",
        className: business_module_default.a.subtitle,
        children: "Item Name:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        ref: itemRef,
        placeholder: "item",
        className: business_module_default.a.input,
        name: "menuItem"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: props.clicker,
      children: "Cancel"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: business_module_default.a.button,
      onClick: clicker,
      children: "Remove Item"
    })]
  });
};

/* harmony default export */ var removeItem = (RemoveItem);
// EXTERNAL MODULE: ./components/store/use-context.js
var use_context = __webpack_require__("BtXh");

// EXTERNAL MODULE: ./components/Details/Details.module.css
var Details_module = __webpack_require__("oZ3I");
var Details_module_default = /*#__PURE__*/__webpack_require__.n(Details_module);

// EXTERNAL MODULE: ./components/Details/ReviewItem.js
var ReviewItem = __webpack_require__("uvRW");

// CONCATENATED MODULE: ./components/Details/BusinessReviews.js






const BusinessReviews = props => {
  const subjectRef = Object(external_react_["useRef"])();
  const bodyRef = Object(external_react_["useRef"])();
  console.log(props);
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

/* harmony default export */ var Details_BusinessReviews = (BusinessReviews);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./pages/business/index.js
















const BusinessPage = () => {
  const {
    0: currHeight,
    1: setCurrHeight
  } = Object(external_react_["useState"])(0);
  const {
    0: currHeight1,
    1: setCurrHeight1
  } = Object(external_react_["useState"])(0);
  const {
    0: currHeight2,
    1: setCurrHeight2
  } = Object(external_react_["useState"])(0);
  const {
    0: currHeight3,
    1: setCurrHeight3
  } = Object(external_react_["useState"])(0);
  const {
    0: currHeight4,
    1: setCurrHeight4
  } = Object(external_react_["useState"])(0);
  const {
    0: currHeight5,
    1: setCurrHeight5
  } = Object(external_react_["useState"])(0);
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
  const {
    0: pageNum,
    1: setPageNum
  } = Object(external_react_["useState"])(1);

  async function getter(enteredItemData = 1) {
    setIsLoading(true);
    let a = await getID();
    console.log(a);
    const response = await fetch(`../api/getHandler1?pageIndex=${enteredItemData}&pageSize=2&restaurantURL=${a}`, {
      method: 'GET'
    });
    const data = await response.json();
    setIsLoading(false);

    if (!totalNum) {
      setTotalNum(data[0].totalRecords[0] ? data[0].totalRecords[0].body : 1);
    }

    console.log(data, totalNum);
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

  const router = Object(router_["useRouter"])();
  const authCtx = Object(external_react_["useContext"])(use_context["b" /* default */]);
  Object(external_react_["useEffect"])(() => {
    if (!authCtx.isLoggedIn) {
      router.push('/');
    }

    if (!authCtx.isBusiness) {
      router.push('/AllRestaurants');
    }
  }, [authCtx.isLoggedIn]);

  async function getID() {
    const response = await fetch(`../api/getIDhandler?email=${authCtx.token}`, {
      method: 'GET'
    });
    const data = await response.json();
    console.log(data);
    return data.id;
  }

  async function addItemHandler(enteredItemData) {
    const response = await fetch('../api/handler1', {
      method: 'POST',
      body: JSON.stringify({
        item: enteredItemData,
        email: authCtx.token
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
  }

  async function addParagraphHandler(enteredItemData) {
    const response = await fetch('../api/paragraphHandler', {
      method: 'POST',
      body: JSON.stringify({
        item: enteredItemData,
        email: authCtx.token
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
  }

  async function nameChangeHandler(enteredItemData) {
    const response = await fetch('../api/handler5', {
      method: 'POST',
      body: JSON.stringify({
        item: enteredItemData,
        email: authCtx.token
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    await response.json();
  }

  async function removeItemHandler(enteredItemData) {
    const response = await fetch('../api/handler2', {
      method: 'POST',
      body: JSON.stringify({
        item: enteredItemData,
        email: authCtx.token
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
  }

  async function changeHandler(enteredItemData, isDescrip) {
    const response = await fetch(`../api/handler${isDescrip ? 4 : 3}`, {
      method: 'POST',
      body: JSON.stringify({
        item: enteredItemData,
        email: authCtx.token
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
  }

  const heightHandler = () => {
    if (currHeight == 0) {
      setCurrHeight(600);
      return;
    }

    setCurrHeight(0);
  };

  const heightHandler1 = () => {
    if (currHeight1 == 0) {
      setCurrHeight1(300);
      return;
    }

    setCurrHeight1(0);
  };

  const heightHandler2 = () => {
    if (currHeight2 == 0) {
      setCurrHeight2(300);
      return;
    }

    setCurrHeight2(0);
  };

  const heightHandler3 = () => {
    if (currHeight3 == 0) {
      setCurrHeight3(300);
      return;
    }

    setCurrHeight3(0);
  };

  const heightHandler4 = () => {
    if (currHeight4 == 0) {
      setCurrHeight4(500);
      return;
    }

    setCurrHeight4(0);
  };

  const heightHandler5 = () => {
    if (currHeight5 == 0) {
      setCurrHeight5(300);
      return;
    }

    setCurrHeight5(0);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Business"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Card["a" /* default */], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: business_module_default.a.title,
        children: "Welcome to Your Business Page!"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: business_module_default.a.subtitles,
        children: "Customize Your Entries Here:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: business_module_default.a.addItem,
        onClick: heightHandler,
        style: {
          borderRadius: '20px 20px 0px 0px'
        },
        children: "Add Item Here"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: business_module_default.a.visibility,
        style: {
          maxHeight: currHeight
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(addItem, {
          clicker: heightHandler,
          addItemHandler: addItemHandler
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: business_module_default.a.addItem,
        onClick: heightHandler1,
        children: " Remove Item Here "
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: business_module_default.a.visibility,
        style: {
          maxHeight: currHeight1
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(removeItem, {
          clicker: heightHandler1,
          removeItemHandler: removeItemHandler
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: business_module_default.a.addItem,
        onClick: heightHandler2,
        children: " Change Subtitle Here "
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: business_module_default.a.visibility,
        style: {
          maxHeight: currHeight2
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(items_ChangeDescription, {
          clicker: heightHandler2,
          changeDescriptionHandler: changeHandler
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: business_module_default.a.addItem,
        onClick: heightHandler3,
        children: " Change Name Here "
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: business_module_default.a.visibility,
        style: {
          maxHeight: currHeight3
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(items_ChangeName, {
          clicker: heightHandler3,
          changeDescriptionHandler: nameChangeHandler
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: business_module_default.a.addItem,
        onClick: heightHandler4,
        children: " Change Description Here "
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: business_module_default.a.visibility,
        style: {
          maxHeight: currHeight4
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(items_ChangeParagraph, {
          clicker: heightHandler4,
          changeDescriptionHandler: addParagraphHandler
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: business_module_default.a.addItem,
        style: {
          borderRadius: currHeight5 == 0 ? '0px 0px 20px 20px' : '0px 0px 0px 0px'
        },
        onClick: heightHandler5,
        children: " Change Image Here "
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: business_module_default.a.visibility,
        style: {
          maxHeight: currHeight5,
          borderRadius: '0px 0px 20px 20px',
          border: currHeight5 == 0 ? 'none' : '1px solid grey'
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(items_ChangeImage, {
          clicker: heightHandler5,
          changeImageHandler: changeHandler
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Details_BusinessReviews, {
        total: totalNum,
        isLoading: isLoading,
        getter: getter,
        pageNum: pageNum,
        reviewList: reviewList,
        plus: plus,
        minus: minus
      })
    })]
  });
};

/* harmony default export */ var business = __webpack_exports__["default"] = (BusinessPage);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/7Jp");


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

/***/ "u3FF":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"subtitle": "business_subtitle__1nRXp",
	"subtitles": "business_subtitles__tB772",
	"title": "business_title__2sW42",
	"input": "business_input__3lxQB",
	"button": "business_button__2OgwB",
	"visibility": "business_visibility__3wqG2",
	"visiOn": "business_visiOn__g96K_",
	"addItem": "business_addItem__2734R"
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

/***/ })

/******/ });