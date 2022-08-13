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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/getResHandler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/getResHandler.js":
/*!************************************!*\
  !*** ./pages/api/getResHandler.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);


async function getResHandler(req, res) {
  if (req.method === 'GET') {
    const data = req.body;
    console.log(req.query.pageIndex);
    const page = req.query.pageIndex ? parseInt(req.query.pageIndex) : 1;
    const limit = req.query.pageSize ? parseInt(req.query.pageSize) : 2;
    const skip = (page - 1) * limit;
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect('mongodb+srv://dg21:2x9QUtNjUM3tuL6p@cluster0.nxpoghz.mongodb.net/FoodOrderingSite?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('ResList');
    const result = await meetupsCollection.aggregate([{
      $sort: {
        stars: -1
      }
    }, {
      $facet: {
        totalRecords: [{
          $count: 'description'
        }],
        data: [{
          $skip: skip
        }, {
          $limit: limit
        }]
      }
    }]).toArray();
    console.log(result);
    const ressy = [{
      totalRecords: result[0].totalRecords,
      data: result[0].data.map(meetup => ({
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
        menu: meetup.menu,
        name: meetup.name
      }))
    }];
    client.close();
    res.send(ressy);
  }
}

;
/* harmony default export */ __webpack_exports__["default"] = (getResHandler);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dldFJlc0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29kYlwiIl0sIm5hbWVzIjpbImdldFJlc0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInBhZ2VJbmRleCIsInBhZ2UiLCJwYXJzZUludCIsImxpbWl0IiwicGFnZVNpemUiLCJza2lwIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJhZ2dyZWdhdGUiLCIkc29ydCIsInN0YXJzIiwiJGZhY2V0IiwidG90YWxSZWNvcmRzIiwiJGNvdW50IiwiJHNraXAiLCIkbGltaXQiLCJ0b0FycmF5IiwicmVzc3kiLCJtYXAiLCJtZWV0dXAiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImlkIiwiX2lkIiwidG9TdHJpbmciLCJtZW51IiwibmFtZSIsImNsb3NlIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxlQUFlQSxhQUFmLENBQTZCQyxHQUE3QixFQUFrQ0MsR0FBbEMsRUFBdUM7QUFFbkMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBeUI7QUFDckIsVUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQWpCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixHQUFHLENBQUNPLEtBQUosQ0FBVUMsU0FBdEI7QUFDSixVQUFNQyxJQUFJLEdBQUdULEdBQUcsQ0FBQ08sS0FBSixDQUFVQyxTQUFWLEdBQXNCRSxRQUFRLENBQUNWLEdBQUcsQ0FBQ08sS0FBSixDQUFVQyxTQUFYLENBQTlCLEdBQXNELENBQW5FO0FBQ0EsVUFBTUcsS0FBSyxHQUFHWCxHQUFHLENBQUNPLEtBQUosQ0FBVUssUUFBVixHQUFxQkYsUUFBUSxDQUFDVixHQUFHLENBQUNPLEtBQUosQ0FBVUssUUFBWCxDQUE3QixHQUFvRCxDQUFsRTtBQUNBLFVBQU1DLElBQUksR0FBRyxDQUFDSixJQUFJLEdBQUcsQ0FBUixJQUFhRSxLQUExQjtBQUNBLFVBQU1HLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQ2pCLCtHQURpQixDQUFyQjtBQUVFLFVBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVg7QUFDRixVQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUExQjtBQUNBLFVBQU1DLE1BQU0sR0FBRyxNQUFNRixpQkFBaUIsQ0FBQ0csU0FBbEIsQ0FBNEIsQ0FDN0M7QUFDSUMsV0FBSyxFQUFFO0FBQ0hDLGFBQUssRUFBRSxDQUFDO0FBREw7QUFEWCxLQUQ2QyxFQU03QztBQUNBQyxZQUFNLEVBQUU7QUFDSkMsb0JBQVksRUFBRSxDQUFDO0FBQUNDLGdCQUFNLEVBQUU7QUFBVCxTQUFELENBRFY7QUFFSnZCLFlBQUksRUFBRyxDQUFDO0FBQUN3QixlQUFLLEVBQUVkO0FBQVIsU0FBRCxFQUFlO0FBQUNlLGdCQUFNLEVBQUVqQjtBQUFULFNBQWY7QUFGSDtBQURSLEtBTjZDLENBQTVCLEVBYWxCa0IsT0Fia0IsRUFBckI7QUFjQXhCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYyxNQUFaO0FBQ0EsVUFBTVUsS0FBSyxHQUFHLENBQUM7QUFDWEwsa0JBQVksRUFBRUwsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSyxZQURiO0FBRVh0QixVQUFJLEVBQUVpQixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVqQixJQUFWLENBQWU0QixHQUFmLENBQW1CQyxNQUFNLEtBQUs7QUFDaENDLGVBQU8sRUFBRUQsTUFBTSxDQUFDQyxPQURnQjtBQUVoQ0MsbUJBQVcsRUFBRUYsTUFBTSxDQUFDRSxXQUZZO0FBR2hDQyxhQUFLLEVBQUVILE1BQU0sQ0FBQ0csS0FIa0I7QUFJaENDLFVBQUUsRUFBRUosTUFBTSxDQUFDSyxHQUFQLENBQVdDLFFBQVgsRUFKNEI7QUFLaENDLFlBQUksRUFBRVAsTUFBTSxDQUFDTyxJQUxtQjtBQU1oQ0MsWUFBSSxFQUFFUixNQUFNLENBQUNRO0FBTm1CLE9BQUwsQ0FBekI7QUFGSyxLQUFELENBQWQ7QUFXQTFCLFVBQU0sQ0FBQzJCLEtBQVA7QUFDQXhDLE9BQUcsQ0FBQ3lDLElBQUosQ0FBU1osS0FBVDtBQUVDO0FBRUo7O0FBQUE7QUFFYy9CLDRFQUFmLEU7Ozs7Ozs7Ozs7O0FDL0NBLG9DIiwiZmlsZSI6InBhZ2VzL2FwaS9nZXRSZXNIYW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvZ2V0UmVzSGFuZGxlci5qc1wiKTtcbiIsImltcG9ydCB7TW9uZ29DbGllbnR9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVzSGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJyl7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcS5xdWVyeS5wYWdlSW5kZXgpO1xyXG4gICAgY29uc3QgcGFnZSA9IHJlcS5xdWVyeS5wYWdlSW5kZXggPyBwYXJzZUludChyZXEucXVlcnkucGFnZUluZGV4KSA6IDE7XHJcbiAgICBjb25zdCBsaW1pdCA9IHJlcS5xdWVyeS5wYWdlU2l6ZSA/IHBhcnNlSW50KHJlcS5xdWVyeS5wYWdlU2l6ZSkgOiAyO1xyXG4gICAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBsaW1pdDtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgICAgJ21vbmdvZGIrc3J2Oi8vZGcyMToyeDlRVXROalVNM3R1TDZwQGNsdXN0ZXIwLm54cG9naHoubW9uZ29kYi5uZXQvRm9vZE9yZGVyaW5nU2l0ZT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknICApO1xyXG4gICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdSZXNMaXN0Jyk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5hZ2dyZWdhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJHNvcnQ6IHtcclxuICAgICAgICAgICAgICAgIHN0YXJzOiAtMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgJGZhY2V0OiB7XHJcbiAgICAgICAgICAgIHRvdGFsUmVjb3JkczogW3skY291bnQ6ICdkZXNjcmlwdGlvbid9XSxcclxuICAgICAgICAgICAgZGF0YSA6IFt7JHNraXA6IHNraXB9LHskbGltaXQ6IGxpbWl0fV1cclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXSkudG9BcnJheSgpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIGNvbnN0IHJlc3N5ID0gW3tcclxuICAgICAgICB0b3RhbFJlY29yZHM6IHJlc3VsdFswXS50b3RhbFJlY29yZHMsXHJcbiAgICAgICAgZGF0YTogcmVzdWx0WzBdLmRhdGEubWFwKG1lZXR1cCA9PiAoe1xyXG4gICAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgbWVudTogbWVldHVwLm1lbnUsXHJcbiAgICAgICAgICAgIG5hbWU6IG1lZXR1cC5uYW1lXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XVxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICByZXMuc2VuZChyZXNzeSk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRSZXNIYW5kbGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==