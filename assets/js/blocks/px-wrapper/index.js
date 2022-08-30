/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/px-components/flex-alignment.js":
/*!****************************************************!*\
  !*** ./src/blocks/px-components/flex-alignment.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlexAlignment)
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

var FlexAlignment = /*#__PURE__*/function (_Component) {
  _inherits(FlexAlignment, _Component);

  var _super = _createSuper(FlexAlignment);

  function FlexAlignment() {
    _classCallCheck(this, FlexAlignment);

    return _super.apply(this, arguments);
  }

  _createClass(FlexAlignment, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          flow = _this$props.flow,
          value = _this$props.value,
          onChange = _this$props.onChange; //===> Alignment Buttons <===//

      var createAlignment = function createAlignment(screen) {
        if (!screen) screen = "";
        {
          /*===> Responsive Devices <===*/
        }
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
          className: "mb-10 fluid weight-medium"
        }, "Horizontal Align"), /*#__PURE__*/React.createElement("div", {
          className: "px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20"
        }, /*#__PURE__*/React.createElement("button", {
          key: "start-x-".concat(screen),
          onClick: setAlignment,
          title: "Start",
          className: "btn small ".concat(value.includes("align".concat(screen, "-start-x")) ? 'bg-offwhite-smoke' : 'light', " col pxi pxi-align-x-start"),
          "data-screen": screen,
          "data-value": "align".concat(screen, "-start-x")
        }), /*#__PURE__*/React.createElement("button", {
          key: "center-x-".concat(screen),
          onClick: setAlignment,
          title: "Center",
          className: "btn small ".concat(value.includes("align".concat(screen, "-center-x")) ? 'bg-offwhite-smoke' : 'light', " col pxi pxi-align-x-center"),
          "data-screen": screen,
          "data-value": "align".concat(screen, "-center-x")
        }), /*#__PURE__*/React.createElement("button", {
          key: "end-x-".concat(screen),
          onClick: setAlignment,
          title: "End",
          className: "btn small ".concat(value.includes("align".concat(screen, "-end-x")) ? 'bg-offwhite-smoke' : 'light', " col pxi pxi-align-x-end"),
          "data-screen": screen,
          "data-value": "align".concat(screen, "-end-x")
        }), /*#__PURE__*/React.createElement("button", {
          key: "between-x-".concat(screen),
          onClick: setAlignment,
          title: "Between",
          className: "btn small ".concat(value.includes("align".concat(screen, "-between")) ? 'bg-offwhite-smoke' : 'light', " col pxi pxi-align-x-between"),
          "data-screen": screen,
          "data-value": "align".concat(screen, "-between")
        }), /*#__PURE__*/React.createElement("button", {
          key: "around-x-".concat(screen),
          onClick: setAlignment,
          title: "Around",
          className: "btn small ".concat(value.includes("align".concat(screen, "-around")) ? 'bg-offwhite-smoke' : 'light', " col pxi pxi-align-x-around"),
          "data-screen": screen,
          "data-value": "align".concat(screen, "-around")
        })), /*#__PURE__*/React.createElement("label", {
          className: "mb-10 fluid weight-medium"
        }, "Vertical Align"), /*#__PURE__*/React.createElement("div", {
          className: "px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20"
        }, /*#__PURE__*/React.createElement("button", {
          key: "start-y-".concat(screen),
          onClick: setAlignment,
          title: "Start",
          className: "btn small ".concat(value.includes("align".concat(screen, "-start-y")) ? 'bg-offwhite-smoke' : 'light', " col pxi pxi-align-y-start"),
          "data-screen": screen,
          "data-value": "align".concat(screen, "-start-y")
        }), /*#__PURE__*/React.createElement("button", {
          key: "center-y-".concat(screen),
          onClick: setAlignment,
          title: "Center",
          className: "btn small ".concat(value.includes("align".concat(screen, "-center-y")) ? 'bg-offwhite-smoke' : 'light', " col pxi pxi-align-y-center"),
          "data-screen": screen,
          "data-value": "align".concat(screen, "-center-y")
        }), /*#__PURE__*/React.createElement("button", {
          key: "end-y-".concat(screen),
          onClick: setAlignment,
          title: "End",
          className: "btn small ".concat(value.includes("align".concat(screen, "-end-y")) ? 'bg-offwhite-smoke' : 'light', " col pxi pxi-align-y-end"),
          "data-screen": screen,
          "data-value": "align".concat(screen, "-end-y")
        })));
      }; //===> Set Alignment <===//


      var setAlignment = function setAlignment(clicked) {
        //===> Element Data <===//
        var button = clicked.target,
            newVal = button.getAttribute('data-value'),
            other = [],
            screen = button.getAttribute('data-screen') || ''; //===> Get Sibling Values <===//

        button.parentNode.querySelectorAll('.btn').forEach(function (element) {
          other.push(element.getAttribute('data-value'));
        });
        /*===> if Current Value has Current Screen Point <===*/

        if (value.includes(screen)) value.split(' ').forEach(function (item) {
          //===> if the siblings has the item in it remove it <===//
          if (other.includes(item)) value.replace(item, ''); //===> if the item is not in siblings add it <===//
          else if (item.length > 1) newVal = "".concat(item, " ").concat(newVal);
        });
        /*===> else if its New Screen Point <===*/
        else newVal = "".concat(value, " ").concat(newVal); //===> Return Options <===//

        return onChange("".concat(newVal));
      }; //===> Default Flow <===//


      var isReversed = function isReversed() {
        if (value.includes('flow-reverse')) return true;else return false;
      }; //===> Set Flow <===//


      var setFlow = function setFlow(toggle) {
        //===> Get Current Value <===//
        var current = value; //===> .if already reversed. <===//

        if (isReversed()) {
          current = current.replaceAll('flow-reverse');
        } //===> .if not make it. <===//
        else {
          current = "".concat(value, " flow-reverse");
        } //===> Return Options <===//


        return onChange(current);
      }; //===> Options Changer <===//


      var changeTab = function changeTab(clicked) {
        var _optionsList$querySel;

        //===> Option Data <===//
        var element = Phenix(clicked.target),
            parent = element.ancestor('.options-tabs'),
            optionsList = Phenix(parent).next('.options-list'),
            currentActive = Phenix(parent.querySelector('.primary')),
            currentType = "".concat(element[0].getAttribute('data-options'), "-options"),
            targetElement = optionsList.querySelector(".".concat(currentType)); //===> Change Active <===//

        currentActive.addClass('light').removeClass('primary');
        element.addClass('primary').removeClass('light'); //===> Show Options <===//

        (_optionsList$querySel = optionsList.querySelector('.flexbox:not(.hidden)')) === null || _optionsList$querySel === void 0 ? void 0 : _optionsList$querySel.classList.add('hidden');
        Phenix(targetElement).removeClass('hidden');
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        key: "align-flow",
        label: "Flow Reverse ?",
        checked: isReversed(),
        onChange: setFlow
      }), /*#__PURE__*/React.createElement("span", {
        className: "display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
      }), /*#__PURE__*/React.createElement("div", {
        className: "options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20"
      }, /*#__PURE__*/React.createElement("button", {
        key: "mobile",
        onClick: changeTab,
        className: "btn square tiny primary col far fa-mobile",
        title: "Mobile Screens",
        "data-options": "small"
      }), /*#__PURE__*/React.createElement("button", {
        key: "tablet",
        onClick: changeTab,
        className: "btn square tiny light col far fa-tablet",
        title: "Tablet Screens",
        "data-options": "medium"
      }), /*#__PURE__*/React.createElement("button", {
        key: "laptop",
        onClick: changeTab,
        className: "btn square tiny light col far fa-laptop",
        title: "Desktop Screens",
        "data-options": "large"
      }), /*#__PURE__*/React.createElement("button", {
        key: "desktop",
        onClick: changeTab,
        className: "btn square tiny light col far fa-desktop",
        title: "xLarge Screens",
        "data-options": "xlarge"
      })), /*#__PURE__*/React.createElement("div", {
        className: "options-list"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexbox small-options"
      }, createAlignment()), /*#__PURE__*/React.createElement("div", {
        className: "flexbox medium-options hidden"
      }, createAlignment('-md')), /*#__PURE__*/React.createElement("div", {
        className: "flexbox large-options hidden"
      }, createAlignment('-lg')), /*#__PURE__*/React.createElement("div", {
        className: "flexbox xlarge-options hidden"
      }, createAlignment('-xl'))));
    }
  }]);

  return FlexAlignment;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-wrapper/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/px-wrapper/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _px_components_flex_alignment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../px-components/flex-alignment */ "./src/blocks/px-components/flex-alignment.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)();
  var TagName = attributes.tagName; //===> Set Flexbox <===//

  var set_flexbox = function set_flexbox(value) {
    var _attributes$className;

    //===> Get Classname <===//
    var currentNames = (_attributes$className = attributes.className) === null || _attributes$className === void 0 ? void 0 : _attributes$className.replace(/\s{2,}/g, ' '); //===> Set Auto Options <===//

    setAttributes({
      flexbox: value,
      className: "".concat(currentNames ? currentNames : '').concat(value === true ? ' flexbox' : '')
    }); //===> Clear Options <===//

    if (!attributes.flexbox && currentNames) {
      currentNames = currentNames.replace('flexbox', '');
      currentNames = currentNames.replace(attributes.flex_align, '');
    }
  }; //===> Set Alignment <===//


  var set_alignment = function set_alignment(alignment) {
    //===> Check for Flexbox <===//
    if (attributes.flexbox) {
      var _attributes$className2;

      //===> Get Class Names <===//
      var currentNames = (_attributes$className2 = attributes.className) === null || _attributes$className2 === void 0 ? void 0 : _attributes$className2.replace(/\s{2,}/g, ' '); //===> Clear Current Align <===//

      currentNames = currentNames.replace(attributes.flex_align, ''); //===> Set New Align <===//

      setAttributes({
        flex_align: alignment,
        className: "".concat(currentNames, " ").concat(alignment)
      });
    }
  }; //===> Flexbox for Inner-Blocks <===//


  if (attributes.flexbox) innerBlocksProps.className += " flexbox ".concat(attributes.alignment || ''); //===> Copy to Inner Blocks <===//

  if (attributes.className) innerBlocksProps.className += " ".concat(attributes.className); //===> Render <===//

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Wrapper Settings"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    key: "tagName",
    label: "Wrapper Tag",
    value: attributes.tagName,
    onChange: set_tagName,
    options: [{
      label: 'Default <div>',
      value: 'div'
    }, {
      label: 'List <ul>',
      value: 'ul'
    }]
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Flexbox Layouts",
    checked: attributes.flexbox,
    onChange: set_flexbox
  })), attributes.flexbox ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Flexbox Alignment",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_components_flex_alignment__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: "flex-align",
    value: attributes.flex_align,
    onChange: set_alignment
  })) : null), /*#__PURE__*/React.createElement(TagName, _extends({}, innerBlocksProps, {
    orientation: "horizontal"
  })));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/blocks/px-wrapper/block.json":
/*!******************************************!*\
  !*** ./src/blocks/px-wrapper/block.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/px-wrapper","version":"0.1.0","title":"PDS Wrapper","category":"design","description":"Layout Wrapper Block for Phenix Elements.","supports":{"html":false},"attributes":{"tagName":{"type":"string","default":"div"},"childTag":{"type":"string","default":"div"},"flexbox":{"type":"boolean","default":false},"flex_align":{"type":"string","default":""}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./src/blocks/px-wrapper/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/px-wrapper/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/px-wrapper/block.json");
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
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M232.5 5.171C247.4-1.718 264.6-1.718 279.5 5.171L498.1 106.2C506.6 110.1 512 118.6 512 127.1C512 137.3 506.6 145.8 498.1 149.8L279.5 250.8C264.6 257.7 247.4 257.7 232.5 250.8L13.93 149.8C5.438 145.8 0 137.3 0 127.1C0 118.6 5.437 110.1 13.93 106.2L232.5 5.171zM498.1 234.2C506.6 238.1 512 246.6 512 255.1C512 265.3 506.6 273.8 498.1 277.8L279.5 378.8C264.6 385.7 247.4 385.7 232.5 378.8L13.93 277.8C5.438 273.8 0 265.3 0 255.1C0 246.6 5.437 238.1 13.93 234.2L67.13 209.6L219.1 279.8C242.5 290.7 269.5 290.7 292.9 279.8L444.9 209.6L498.1 234.2zM292.9 407.8L444.9 337.6L498.1 362.2C506.6 366.1 512 374.6 512 383.1C512 393.3 506.6 401.8 498.1 405.8L279.5 506.8C264.6 513.7 247.4 513.7 232.5 506.8L13.93 405.8C5.438 401.8 0 393.3 0 383.1C0 374.6 5.437 366.1 13.93 362.2L67.13 337.6L219.1 407.8C242.5 418.7 269.5 418.7 292.9 407.8V407.8z"
  })),

  /**===> @see ./edit.js <===*/
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**===> Block Output <===*/
  save: function save(_ref) {
    var attributes = _ref.attributes;
    //===> Get Block Properties <===//
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    var TagName = attributes.tagName; //===> Render <===//

    return /*#__PURE__*/React.createElement(TagName, blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map