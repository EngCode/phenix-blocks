/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/px-controls/number-counter.js":
/*!**************************************************!*\
  !*** ./src/blocks/px-controls/number-counter.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhenixNumber; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/
//===> WordPress Modules <===//
 //===> Media Uploader <===//

var PhenixNumber = /*#__PURE__*/function (_Component) {
  _inherits(PhenixNumber, _Component);

  var _super = _createSuper(PhenixNumber);

  function PhenixNumber() {
    _classCallCheck(this, PhenixNumber);

    return _super.apply(this, arguments);
  }

  _createClass(PhenixNumber, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          min = _this$props.min,
          max = _this$props.max,
          steps = _this$props.steps,
          icon = _this$props.icon,
          onChange = _this$props.onChange; //===> Set new Value <===//

      var setNumber = function setNumber(changed) {
        return onChange(changed.value);
      },
          //===> Increase Number <===//
      IncreaseNum = function IncreaseNum(clicked) {
        //===> Get Elements <===//
        var button = clicked.target,
            wrapper = button.parentNode,
            maxNum = parseInt(max) || 9999999,
            step = steps ? parseInt(steps) : 1; //===> Wrapper Fallback <===//

        if (!wrapper.matches(".px-counter-input")) wrapper = wrapper.parentNode; //===> Get Input Element <===//

        var input = wrapper.querySelector('input[type="number"]'),
            newVal = parseInt(input.value) + step; //===> Set Data <===//

        return onChange(newVal <= maxNum ? newVal : maxNum);
      },
          //===> Decrease Number <===//
      DecreaseNum = function DecreaseNum(clicked) {
        //===> Get Elements <===//
        var button = clicked.target,
            wrapper = button.parentNode,
            minNum = parseInt(min) || 0,
            step = steps ? steps : 1; //===> Wrapper Fallback <===//

        if (!wrapper.matches(".px-counter-input")) wrapper = wrapper.parentNode; //===> Get Input Element <===//

        var input = wrapper.querySelector('input[type="number"]'),
            newVal = parseInt(input.value) - step; //===> Set Data <===//

        return onChange(newVal >= minNum ? newVal : minNum);
      }; //===> Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "components-flex-item"
      }, /*#__PURE__*/React.createElement("label", {
        className: "components-input-control__label components-flex-item mb-5 weight-bold"
      }, label), /*#__PURE__*/React.createElement("div", {
        className: "px-counter-input position-rv " + (icon ? icon : "")
      }, !icon ? /*#__PURE__*/React.createElement("button", {
        onClick: DecreaseNum,
        className: "btn square small bg-transparent fs-13 increase-btn far fa-minus position-ab pos-start-0 pos-bottom-0 divider-e icon-fix"
      }) : "", /*#__PURE__*/React.createElement("input", {
        type: "number",
        min: min,
        max: max,
        value: parseInt(value) ? parseInt(value) : 0,
        className: "form-control small radius-sm reset-appearance" + (!icon ? " tx-align-center" : ""),
        onChange: setNumber
      }), /*#__PURE__*/React.createElement("div", {
        className: "position-ab pos-end-0 pos-bottom-0 flexbox"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: IncreaseNum,
        className: "btn square small bg-transparent fs-13 increase-btn far fa-plus divider-s icon-fix"
      }), icon ? /*#__PURE__*/React.createElement("button", {
        onClick: DecreaseNum,
        className: "btn square small bg-transparent fs-13 increase-btn far fa-minus divider-s icon-fix"
      }) : "")));
    }
  }]);

  return PhenixNumber;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/taxonomies-list/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/taxonomies-list/edit.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _px_controls_number_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../px-controls/number-counter */ "./src/blocks/px-controls/number-counter.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//====> WP Modules <====//





 //====> Phenix Modules <====//

 //====> Edit Mode <====//

function Edit(props) {
  //===> Get Properties <===//
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      PostTypes = _useState2[0],
      setPostTypes = _useState2[1];

  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      TaxonomyList = _useState4[0],
      setTaxonomyList = _useState4[1]; //===> Set Attributes <===//


  var set_order = function set_order(order) {
    return setAttributes({
      order: order
    });
  };

  var set_taxonomy = function set_taxonomy(taxonomy) {
    return setAttributes({
      taxonomy: taxonomy
    });
  };

  var set_post_type = function set_post_type(post_type) {
    return setAttributes({
      post_type: post_type
    });
  };

  var set_hide_empty = function set_hide_empty(hide_empty) {
    return setAttributes({
      hide_empty: hide_empty
    });
  };

  var set_query_count = function set_query_count(query_count) {
    return setAttributes({
      query_count: query_count
    });
  }; //===> Update Phenix Elements <===//


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    //===> Fetch Post Types <===//
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: 'wp/v2/taxonomies'
    }).then(function (taxonomies) {
      //===> Define Types <===//
      var new_taxonomies = []; //===> Get Current Active Types <===//

      for (var _i2 = 0, _Object$entries = Object.entries(taxonomies); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        //===> Exclude the Core Types <===//
        if (!['nav_menu', 'post_tag'].includes(key)) {
          new_taxonomies.push({
            "value": key,
            "label": value.name
          });
        }
      } //===> Set the new List if its Deferent <===//


      if (TaxonomyList !== new_taxonomies) setPostTypes([].concat(new_taxonomies));
    }); //===> Fetch Post Types <===//

    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: 'wp/v2/types'
    }).then(function (post_types) {
      //===> Define Types <===//
      var new_types = []; //===> Get Current Active Types <===//

      for (var _i3 = 0, _Object$entries2 = Object.entries(post_types); _i3 < _Object$entries2.length; _i3++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
            key = _Object$entries2$_i[0],
            value = _Object$entries2$_i[1];

        //===> Exclude the Core Types <===//
        if (!['attachment', 'nav_menu_item', 'wp_block', 'wp_navigation', 'wp_template', 'wp_template_part'].includes(key)) {
          new_types.push({
            "value": key,
            "label": value.name
          });
        }
      } //===> Set the new List if its Deferent <===//


      if (PostTypes !== new_types) setTaxonomyList([].concat(new_types));
    });
  }, []); //===> Render <===//

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General Setting", "phenix"),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Taxonomy Type", "phenix"),
    value: attributes.taxonomy,
    onChange: set_taxonomy,
    options: TaxonomyList
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Data Type", "phenix"),
    value: attributes.post_type,
    onChange: set_post_type,
    options: PostTypes
  }), /*#__PURE__*/React.createElement("div", {
    className: "row gpx-20 mb-15"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_px_controls_number_counter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Max Items", "phenix"),
    value: attributes.query_count,
    onChange: set_query_count
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Order By", "phenix"),
    value: attributes.order,
    onChange: set_order,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Oldest', "phenix"),
      value: 'ASC'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Newest', "phenix"),
      value: 'DESC'
    }]
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide Empty Taxonomies", "phenix"),
    checked: attributes.hide_empty,
    onChange: set_hide_empty
  }))), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
    block: "phenix/taxonomies-list",
    attributes: attributes
  })));
}

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ (function(module) {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/blocks/taxonomies-list/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/taxonomies-list/block.json ***!
  \***********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/taxonomies-list","version":"0.1.0","title":"Taxonomies List","category":"design","description":"Custom Taxonomies & Categories Query Block.","supports":{"html":false},"attributes":{"taxonomy":{"type":"string","default":"category"},"post_type":{"type":"string","default":"post"},"query_count":{"type":"number","default":0},"order":{"type":"string","default":"ASC"},"hide_empty":{"type":"boolean","default":true},"preview":{"type":"boolean","default":false}},"textdomain":"phenix","editorScript":"taxonomies-list"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************************!*\
  !*** ./src/blocks/taxonomies-list/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/taxonomies-list/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/taxonomies-list/block.json");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/
//===> Block Data <===//

 //===> WordPress Modules <===//

 //===> Register Block <===//

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  title: _block_json__WEBPACK_IMPORTED_MODULE_1__.title,
  category: _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes,
  icon: /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, " ", /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M6 5.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM4 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm11-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5zM13 6a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2V6zm5 8.5h-3a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5zM15 13a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-3zm-9 1.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5zM4 15a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3z",
    clipRule: "evenodd"
  })),

  /**===> @see ./edit.js <===*/
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    return null;
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map