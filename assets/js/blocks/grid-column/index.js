/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/grid-column/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/grid-column/edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _px_controls_column_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../px-controls/column-size */ "./src/blocks/px-controls/column-size.js");
//====> WP Modules <====//

 //====> Phenix Modules <====//

 //====> Edit Mode <====//

function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  //===> Set Settings <===//
  var set_tagName = function set_tagName(tagName) {
    return setAttributes({
      tagName: tagName
    });
  };

  var set_size = function set_size(size) {
    return setAttributes({
      size: size
    });
  };

  var set_spacing_pd = function set_spacing_pd(spacing_pd) {
    return setAttributes({
      spacing_pd: spacing_pd
    });
  };

  var set_spacing_mg = function set_spacing_mg(spacing_mg) {
    return setAttributes({
      spacing_mg: spacing_mg
    });
  }; //===> Options Tabs <===//


  var changeTab = function changeTab(clicked) {
    var _optionsList$querySel;

    //===> Option Data <===//
    var element = Phenix(clicked.target),
        parent = element.ancestor('.options-tabs'),
        optionsList = Phenix(parent).next('.options-list'),
        currentActive = Phenix(parent.querySelector(':scope > .primary')),
        currentType = "".concat(element[0].getAttribute('data-options')),
        targetElement = optionsList.querySelector(":scope > .".concat(currentType)); //===> Change Active <===//

    currentActive.addClass('light').removeClass('primary');
    element.addClass('primary').removeClass('light'); //===> Show Options <===//

    (_optionsList$querySel = optionsList.querySelector(':scope > .flexbox:not(.hidden)')) === null || _optionsList$querySel === void 0 ? void 0 : _optionsList$querySel.classList.add('hidden');
    Phenix(targetElement).removeClass('hidden');
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)();
  var TagName = attributes.tagName; //===> Set Properties <===//

  blockProps.className += " ".concat(blockProps.className);
  blockProps.className += " ".concat(attributes.size); //===> Render Spacing <===//

  if (attributes.spacing_pd) blockProps.className += " ".concat(attributes.spacing_pd);
  if (attributes.spacing_mg) blockProps.className += " ".concat(attributes.spacing_mg); //===> Render <===//

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Column Size",
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_px_controls_column_size__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: "flex-align",
    value: attributes.size,
    onChange: set_size
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "General Settings",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    key: "tagName",
    label: "HTML Tag",
    value: attributes.tagName,
    onChange: set_tagName,
    options: [{
      label: 'Default <div>',
      value: 'div'
    }, {
      label: 'Main <main>',
      value: 'main'
    }, {
      label: 'Aside <aside>',
      value: 'aside'
    }, {
      label: 'Section <section>',
      value: 'section'
    }, {
      label: 'Header <header>',
      value: 'header'
    }, {
      label: 'Footer <footer>',
      value: 'footer'
    }]
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Spacing",
    initialOpen: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "options-tabs lined-tabs fluid px-group borderd-group divider-b mb-10"
  }, /*#__PURE__*/React.createElement("button", {
    key: "padding",
    onClick: changeTab,
    className: "btn tiny outline primary col",
    "data-options": "padding-size"
  }, "Padding Size"), /*#__PURE__*/React.createElement("button", {
    key: "margin",
    onClick: changeTab,
    className: "btn tiny outline light col",
    "data-options": "margin-size"
  }, "Margin Size")), /*#__PURE__*/React.createElement("div", {
    className: "options-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flexbox padding-size"
  }, /*#__PURE__*/React.createElement(PhenixPadding, {
    key: "px-spacing_pd",
    onChange: set_spacing_pd,
    value: attributes.spacing_pd
  })), /*#__PURE__*/React.createElement("div", {
    className: "flexbox margin-size hidden"
  }, /*#__PURE__*/React.createElement(PhenixMargin, {
    key: "px-spacing_mg",
    onChange: set_spacing_mg,
    value: attributes.spacing_mg
  }))))), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/column.jpg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement(TagName, blockProps, /*#__PURE__*/React.createElement("p", innerBlocksProps)));
}

/***/ }),

/***/ "./src/blocks/px-controls/column-size.js":
/*!***********************************************!*\
  !*** ./src/blocks/px-controls/column-size.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ColumnSize; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
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
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/
//===> WordPress Modules <===//

 //===> Phenix Background <===//

var ColumnSize = /*#__PURE__*/function (_Component) {
  _inherits(ColumnSize, _Component);

  var _super = _createSuper(ColumnSize);

  function ColumnSize() {
    _classCallCheck(this, ColumnSize);

    return _super.apply(this, arguments);
  }

  _createClass(ColumnSize, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange; //===> .Default. <===//

      var current = value,
          size_xs = 0,
          size_md = 0,
          size_lg = 0,
          size_xl = 0; //===> Convert Value to Array <===//

      var valueArray = value.split(' '); //===> Get Default Values <===//

      if (valueArray) valueArray.forEach(function (item) {
        if (item.includes('-md')) {
          size_md = parseInt(item.replace(/\D+/g, ''));
        } else if (item.includes('-lg')) {
          size_lg = parseInt(item.replace(/\D+/g, ''));
        } else if (item.includes('-xl')) {
          size_xl = parseInt(item.replace(/\D+/g, ''));
        } else if (item.length > 0) {
          if (item.includes('-auto')) size_xs = 13;else if (item.includes('-adaptive')) size_xs = 14;else size_xs = parseInt(item.replace(/\D+/g, ''));
        }
      }); //===> New Values Handler <===//

      var set_value = function set_value(theValue, type, current_size) {
        //===> Update Columns <===//
        if (current.includes(type)) {
          //===> if the Value is valid update it <===//
          if (theValue > 0) {
            //===> Auto Size <===//
            if (current_size == 13) {
              if (theValue == 14) current = current.replace("".concat(type, "-auto"), "".concat(type, "-adaptive"));else if (theValue < 13) current = current.replace("".concat(type, "-auto"), "".concat(type, "-").concat(theValue));
            } //===> Adaptive Size <===//
            else if (current_size == 14) {
              if (theValue == 13) current = current.replace("".concat(type, "-adaptive"), "".concat(type, "-auto"));else if (theValue < 13) current = current.replace("".concat(type, "-adaptive"), "".concat(type, "-").concat(theValue));
            } //===> Other Size <===//
            else {
              //===> Set Auto <===//
              if (theValue == 13) current = current.replace("".concat(type, "-").concat(current_size), "".concat(type, "-auto")); //===> Set Adaptive <===//
              else if (theValue == 14) current = current.replace("".concat(type, "-").concat(current_size), "".concat(type, "-adaptive")); //===> Set Normal <===//
              else if (theValue < 13) current = current.replace("".concat(type, "-").concat(current_size), "".concat(type, "-").concat(theValue));
            }
          } //===> if not delete it <===//
          else {
            if (current_size == 13) current = current.replace("".concat(type, "-auto"), "");else if (current_size == 14) current = current.replace("".concat(type, "-adaptive"), "");else if (current_size < 13) current = current.replace("".concat(type, "-").concat(current_size), "");
          }
        } //===> Set new Columns <===//
        else if (theValue > 0) {
          //===> Auto Size <===//
          if (theValue == 13) current += " ".concat(type, "-auto"); //===> Adaptive Size <===//
          else if (theValue == 14) current += " ".concat(type, "-adaptive"); //===> New Size <===//
          else current += " ".concat(type, "-").concat(theValue);
        }
      }; //===> Set Columns-{Small} <===//


      var set_size = function set_size(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'col', size_xs); //===> Return Options <===//

        return onChange(current);
      }; //===> Set Columns-{Medium} <===//


      var set_size_md = function set_size_md(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'col-md', size_md); //===> Return Options <===//

        return onChange(current);
      }; //===> Set Columns-{Large} <===//


      var set_size_lg = function set_size_lg(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'col-lg', size_lg); //===> Return Options <===//

        return onChange(current);
      }; //===> Set Columns-{xLarge} <===//


      var set_size_xl = function set_size_xl(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'col-xl', size_xl); //===> Return Options <===//

        return onChange(current);
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "mb-10 fs-12"
      }, "select the size of the \"column\" in each screen and keep in mind the \"13\" is for \"auto\" and \"14\" is for \"Adaptive\" column size."), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y mb-20"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-16 me-10 fa-mobile",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-size",
        min: 0,
        max: 14,
        value: size_xs,
        onChange: set_size
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y mb-20"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-16 me-10 fa-tablet",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-size",
        min: 0,
        max: 14,
        value: size_md,
        onChange: set_size_md
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y mb-20"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-14 me-10 fa-laptop",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-size",
        min: 0,
        max: 14,
        value: size_lg,
        onChange: set_size_lg
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-14 me-10 fa-desktop",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-size",
        min: 0,
        max: 14,
        value: size_xl,
        onChange: set_size_xl
      })));
    }
  }]);

  return ColumnSize;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



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

/***/ "./src/blocks/grid-column/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/grid-column/block.json ***!
  \*******************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/column","version":"0.1.0","title":"Grid Column","keywords":["pds","phenix","column","group","wrapper","row","flex","layout","grid"],"category":"design","description":"a Wrapper Represent the Grid System Column for its Row Block","supports":{"html":false},"attributes":{"tagName":{"type":"string","default":"div"},"preview":{"type":"boolean","default":false},"size":{"type":"string","default":"col-auto"},"spacing_pd":{"type":"string","default":""},"spacing_mg":{"type":"string","default":""}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
/*!*****************************************!*\
  !*** ./src/blocks/grid-column/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/grid-column/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/grid-column/block.json");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/
//===> Block Data <===//

 //===> WordPress Modules <===//


 //===> Register Block <===//

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  icon: /*#__PURE__*/React.createElement("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#1E1E1E",
    d: "M21.2,2.8H2.8C1.2,2.8,0,4.1,0,5.6v12.7c0,1.6,1.3,2.8,2.8,2.8h18.4c1.6,0,2.8-1.3,2.8-2.8V5.6C24,4.1,22.8,2.8,21.2,2.8z M15.4,4.9v14.2H8.5V4.9H15.4z M2.1,18.4V5.6c0-0.4,0.3-0.7,0.7-0.7h3.5v14.2H2.8C2.4,19.1,2.1,18.8,2.1,18.4z M21.9,18.4c0,0.4-0.3,0.7-0.7,0.7h-3.7V4.9h3.7c0.4,0,0.7,0.3,0.7,0.7V18.4z"
  })),

  /**===> @see ./edit.js <===*/
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**===> Block Output <===*/
  save: function save(_ref) {
    var attributes = _ref.attributes;
    //===> Get Block Properties <===//
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    var TagName = attributes.tagName; //===> Set Properties <===//

    blockProps.className += " ".concat(attributes.size); //===> Render Spacing <===//

    if (attributes.spacing_pd) blockProps.className += " ".concat(attributes.spacing_pd);
    if (attributes.spacing_mg) blockProps.className += " ".concat(attributes.spacing_mg); //===> Render <===//

    return /*#__PURE__*/React.createElement(TagName, blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map