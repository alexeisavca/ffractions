module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports.sumOf = sumOf;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var polymorph = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"polymorph.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var identity = function identity(_) {
	    return _;
	};

	var Fraction = function Fraction(numerator, denominator) {
	    _classCallCheck(this, Fraction);

	    this.numerator = numerator;
	    this.denominator = denominator;
	};

	var fraction = function fraction(numerator, denominator) {
	    return new Fraction(numerator, denominator);
	};

	exports.fraction = fraction;
	var inverse = function inverse(fract) {
	    return fraction(fract.denominator, fract.numerator);
	};

	exports.inverse = inverse;
	var ensureFraction = function ensureFraction(fraction) {
	    return fraction instanceof Fraction ? fraction : console.log(ensureFraction(1));
	};

	exports.ensureFraction = ensureFraction;

	function sumOf() {
	    Object.keys(arguments).map(ensureFraction);
	}

/***/ }
/******/ ]);