(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("enblock", [], factory);
	else if(typeof exports === 'object')
		exports["enblock"] = factory();
	else
		root["enblock"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (elem) {

  var elems = Array.prototype.slice.call(elem.children); // Делаем из коллекции детей массив
  var data = [];

  elems.forEach(function (item, i) {
    data.push({
      name: 'block-' + (i + 1),
      height: item.offsetHeight,
      top: item.offsetTop
    });
  });
  window.data = data;

  // console.log(data);
  wrap(elem);
  detectScrollDirection();
  detectBlockInSight(data);
};

function detectScrollDirection() {
  var oldValue = 0;
  var direction = false;
  window.onscroll = function () {
    var newValue = window.pageYOffset || document.documentElement.scrollTop;
    if (newValue > oldValue) {
      direction = 1; // Скролим вниз
    } else {
      direction = -1; // Скролим вверх
    }
    oldValue = newValue;

    return direction;
  };
};

function detectBlockInSight(data) {
  window.onscroll = function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
    var halfScreen = windowHeight / 2;
    var scrollBottom = scrollTop + windowHeight;

    // console.log('top => ', scrollTop);
    // console.log('bottom => ', scrollBottom);

    if (scrollTop < data[3].top && scrollBottom >= data[3].top + data[3].height) {
      console.log(data[3].name + ' \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0432 \u0437\u043E\u043D\u0435 \u0432\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u0438');
    }
  };
};

function wrap(elem) {
  var wrap = document.createElement('div');
  var content = elem.innerHTML;
  wrap.className = 'enblock-wrap';
  elem.innerHTML = '';
  elem.appendChild(wrap);
  wrap.innerHTML = content;
};
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=enblock.js.map