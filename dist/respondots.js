var Respondots =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/maths/utils.js
/**
 * Linear interpolation between v0 and v1 by interpolant t
 * @param {Number} v0
 * @param {Number} v1
 * @param {Number} t
 */
var utils_lerp = function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
};
/**
 * Clamp Val between min and max
 * @param {Number} val
 * @param {Number} min
 * @param {Number} max
 */

var clamp = function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
};
/**
 * Ezasing function
 * @param {Number} t
 */

var easeOutQuad = function easeOutQuad(t) {
  return t * (2 - t);
};
// CONCATENATED MODULE: ./src/maths/vector.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var vector_Vector2 =
/*#__PURE__*/
function () {
  /**
     * Create a new Vector2
     * @param {Number} x
     * @param {Number} y
     */
  function Vector2(x, y) {
    _classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  }
  /**
     * Test if vector is equal to vector given in parameter
     * @param {Vector2} v
     */


  _createClass(Vector2, [{
    key: "equals",
    value: function equals(v) {
      return this.x === v.x && this.y === v.y;
    }
    /**
       * Set vector coordinates with values from vector given in parameters
       * @param {Vector2} v
       */

  }, {
    key: "setFrom",
    value: function setFrom(v) {
      this.x = v.x;
      this.y = v.y;
    }
    /**
       * Linearly interpolates with a vector
       * @param {Vector2} v
       * @param {Number} amount
       */

  }, {
    key: "lerp",
    value: function lerp(v, amount) {
      this.x = utils_lerp(this.x, v.x, amount);
      this.y = utils_lerp(this.y, v.y, amount);
    }
    /**
       * Create a copy of vector
       */

  }, {
    key: "clone",
    value: function clone() {
      return new Vector2(this.x, this.y);
    }
    /**
       * Substract vector
       * @param {Vector2} v
       */

  }, {
    key: "diff",
    value: function diff(v) {
      this.x -= v.x;
      this.y -= v.y;
    }
    /**
       * Apply ratio to vector
       * @param {Number} r
       */

  }, {
    key: "ratio",
    value: function ratio(r) {
      this.x *= r;
      this.y *= r;
    }
    /**
       * Add vector
       * @param {Vector2} v
       */

  }, {
    key: "add",
    value: function add(v) {
      this.x += v.x;
      this.y += v.y;
    }
    /**
       * Distance with the vector
       * @param {Vector2} v
       */

  }, {
    key: "distanceTo",
    value: function distanceTo(v) {
      return Math.sqrt((v.x - this.x) * (v.x - this.x) + (v.y - this.y) * (v.y - this.y));
    }
  }]);

  return Vector2;
}();


// CONCATENATED MODULE: ./src/models/dot.js
function dot_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dot_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dot_createClass(Constructor, protoProps, staticProps) { if (protoProps) dot_defineProperties(Constructor.prototype, protoProps); if (staticProps) dot_defineProperties(Constructor, staticProps); return Constructor; }




var dot_Dot =
/*#__PURE__*/
function () {
  /**
     * Create a new Dot
     * @param {Number} x
     * @param {Number} y
     * @param {Number} r
     */
  function Dot(x, y, r) {
    dot_classCallCheck(this, Dot);

    this.origin = new vector_Vector2(x, y);
    this.ratio = 0;
    this.currentRatio = 0;
    this.target = this.origin.clone();
    this.current = this.origin.clone();
    this.radius = r;
  }
  /**
     * Update dot's targeted display position according to range around mouse position
     * @param {Vector2} mousePosition
     * @param {Number} maxRange
     */


  dot_createClass(Dot, [{
    key: "updateTarget",
    value: function updateTarget(mousePosition, maxRange) {
      var distance = this.origin.distanceTo(mousePosition);
      this.ratio = 1 - clamp((distance - maxRange) / maxRange, 0, 1);
      this.target.setFrom(this.origin);

      if (this.ratio > 0) {
        this.ratio = easeOutQuad(this.ratio);
        var dir = this.origin.clone();
        dir.diff(mousePosition);
        dir.ratio(this.ratio);
        this.target.add(dir);
      }
    }
    /**
       * Reset dot targeted display position to origin and ratio to 0
       */

  }, {
    key: "resetTarget",
    value: function resetTarget() {
      this.target.setFrom(this.origin);
      this.ratio = 0;
    }
    /**
       * Draw the dot on canvas context given in parameter
       * @param {CanvasRenderingContext2D} ctx
       */

  }, {
    key: "draw",
    value: function draw(ctx) {
      this.current.lerp(this.target, 0.05);
      this.currentRatio = utils_lerp(this.currentRatio, this.ratio, 0.05);
      ctx.beginPath();
      ctx.arc(this.current.x, this.current.y, this.radius + this.currentRatio * 2.5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }]);

  return Dot;
}();


// CONCATENATED MODULE: ./src/respondots.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return respondots_Respondots; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function respondots_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function respondots_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function respondots_createClass(Constructor, protoProps, staticProps) { if (protoProps) respondots_defineProperties(Constructor.prototype, protoProps); if (staticProps) respondots_defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Default configuration
 */

var defaults = {
  gridSize: 50,
  dotSize: 5,
  backgroundColor: '#333',
  dotColor: '#e0e0e0',
  range: 100,
  zIndex: 0
};

var respondots_Respondots =
/*#__PURE__*/
function () {
  function Respondots(root) {
    var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    respondots_classCallCheck(this, Respondots);

    this.root = root;
    this.conf = _objectSpread({}, defaults, {}, conf); // Create canvas

    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = 0;
    this.canvas.style.left = 0;
    this.canvas.style.bottom = 0;
    this.canvas.style.right = 0;
    this.canvas.style.zIndex = this.conf.zIndex;

    var _this$root$getBoundin = this.root.getBoundingClientRect(),
        width = _this$root$getBoundin.width,
        height = _this$root$getBoundin.height;

    this.canvas.height = height;
    this.canvas.width = width;
    this.root.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.update = this.update.bind(this);
    this.handleMousemove = this.handleMousemove.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);
    this.handleResize = this.handleResize.bind(this); // Initialize dots

    this.dots = [];

    for (var i = 10; i < width; i += this.conf.gridSize) {
      for (var j = 10; j < height; j += this.conf.gridSize) {
        this.dots.push(new dot_Dot(i, j, this.conf.dotSize));
      }
    }

    this.bindEvents();
    window.requestAnimationFrame(this.update);
  }
  /**
     * Bind events
     */


  respondots_createClass(Respondots, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.root.addEventListener('mouseenter', this.handleMousemove);
      this.root.addEventListener('mousemove', this.handleMousemove);
      this.root.addEventListener('wheel', this.handleMousemove);
      this.root.addEventListener('mouseleave', this.handleMouseout);
      window.addEventListener('resize', this.handleResize);
    }
    /**
       * Handle window resize
       */

  }, {
    key: "handleResize",
    value: function handleResize() {
      this.canvas.height = 0;
      this.canvas.width = 0;

      var _this$root$getBoundin2 = this.root.getBoundingClientRect(),
          width = _this$root$getBoundin2.width,
          height = _this$root$getBoundin2.height;

      this.canvas.height = height;
      this.canvas.width = width;
      this.dots.splice(0, this.dots.length);

      for (var i = 10; i < width; i += this.conf.gridSize) {
        for (var j = 10; j < height; j += this.conf.gridSize) {
          this.dots.push(new dot_Dot(i, j, this.conf.dotSize));
        }
      }
    }
    /**
       * Mouse move handler
       * @param {Event} e
       */

  }, {
    key: "handleMousemove",
    value: function handleMousemove(e) {
      var _this = this;

      var _this$root$getBoundin3 = this.root.getBoundingClientRect(),
          top = _this$root$getBoundin3.top,
          left = _this$root$getBoundin3.left;

      var mousePos = new vector_Vector2(e.pageX - left - window.pageXOffset, e.pageY - top - window.pageYOffset);
      this.dots.forEach(function (d) {
        return d.updateTarget(mousePos, _this.conf.range);
      });
    }
    /**
       * Mouse out heandler (trigger dots' target positions reset)
       * @param {Event} e
       */

  }, {
    key: "handleMouseout",
    value: function handleMouseout() {
      this.dots.forEach(function (d) {
        return d.resetTarget();
      });
    }
    /**
       * Animation loop
       */

  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      // Get and clear context
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Draw background

      this.ctx.fillStyle = this.conf.backgroundColor;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = this.conf.dotColor; // Draw each dots

      this.dots.forEach(function (d) {
        return d.draw(_this2.ctx);
      });
      window.requestAnimationFrame(this.update);
    }
  }]);

  return Respondots;
}();



/***/ })
/******/ ])["default"];