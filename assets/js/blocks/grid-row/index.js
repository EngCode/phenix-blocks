/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/grid-row/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/grid-row/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _px_controls_flex_alignment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../px-controls/flex-alignment */ "./src/blocks/px-controls/flex-alignment.js");
/* harmony import */ var _px_controls_equal_columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../px-controls/equal-columns */ "./src/blocks/px-controls/equal-columns.js");
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

  var set_alignment = function set_alignment(alignment) {
    return setAttributes({
      flex_align: alignment
    });
  };

  var set_isEqual = function set_isEqual(isEqual) {
    return setAttributes({
      isEqual: isEqual
    });
  };

  var set_isMasonry = function set_isMasonry(isMasonry) {
    return setAttributes({
      isMasonry: isMasonry
    });
  };

  var set_columns = function set_columns(columns) {
    return setAttributes({
      columns: columns
    });
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)();
  var TagName = attributes.tagName; //===> Set Properties <===//

  innerBlocksProps.className += ' row'; //===> Alignment <===//

  if (attributes.flex_align) innerBlocksProps.className += " ".concat(attributes.flex_align); //===> Masonry <===//

  if (attributes.isMasonry) innerBlocksProps.className += ' px-masonry'; //===> Columns <===//

  if (attributes.isEqual && attributes.columns) innerBlocksProps.className += attributes.columns; //===> Render <===//

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "General Settings"
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
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Masonry Grid",
    checked: attributes.isMasonry,
    onChange: set_isMasonry
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Responsive Columns",
    checked: attributes.isEqual,
    onChange: set_isEqual
  })), attributes.isEqual ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Columns",
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_px_controls_equal_columns__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: "row-columns",
    value: attributes.columns,
    onChange: set_columns
  })) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Alignment",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_controls_flex_alignment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: "flex-align",
    value: attributes.flex_align,
    onChange: set_alignment
  }))), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/row.jpg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement(TagName, innerBlocksProps));
}

/***/ }),

/***/ "./src/blocks/px-controls/equal-columns.js":
/*!*************************************************!*\
  !*** ./src/blocks/px-controls/equal-columns.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EqualColumns)
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

var EqualColumns = /*#__PURE__*/function (_Component) {
  _inherits(EqualColumns, _Component);

  var _super = _createSuper(EqualColumns);

  function EqualColumns() {
    _classCallCheck(this, EqualColumns);

    return _super.apply(this, arguments);
  }

  _createClass(EqualColumns, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange; //===> .Default. <===//

      var current = value,
          columns = 0,
          columns_md = 0,
          columns_lg = 0,
          columns_xl = 0; //===> Convert Value to Array <===//

      var valueArray = value.split(' '); //===> Get Default Values <===//

      if (valueArray) valueArray.forEach(function (item) {
        if (item.includes('-md')) {
          columns_md = parseInt(item.replace(/\D+/g, ''));
        } else if (item.includes('-lg')) {
          columns_lg = parseInt(item.replace(/\D+/g, ''));
        } else if (item.includes('-xl')) {
          columns_xl = parseInt(item.replace(/\D+/g, ''));
        } else if (item.length > 0) {
          columns = parseInt(item.replace(/\D+/g, ''));
        }
      }); //===> New Values Handler <===//

      var set_value = function set_value(theValue, type, current_cols) {
        //===> Update Columns <===//
        if (current.includes(type)) {
          //===> if the Value is valid update it <===//
          if (theValue > 0) current = current.replace("".concat(type, "-").concat(current_cols), "".concat(type, "-").concat(theValue)); //===> if not delete it <===//
          else current = current.replace(" ".concat(type, "-").concat(current_cols), "");
        } //===> Set new Columns <===//
        else if (theValue > 0) current += " ".concat(type, "-").concat(theValue);
      }; //===> Set Columns-{Small} <===//


      var set_cols = function set_cols(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'row-cols', columns); //===> Return Options <===//

        return onChange(current);
      }; //===> Set Columns-{Medium} <===//


      var set_cols_md = function set_cols_md(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'row-cols-md', columns_md); //===> Return Options <===//

        return onChange(current);
      }; //===> Set Columns-{Large} <===//


      var set_cols_lg = function set_cols_lg(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'row-cols-lg', columns_lg); //===> Return Options <===//

        return onChange(current);
      }; //===> Set Columns-{xLarge} <===//


      var set_cols_xl = function set_cols_xl(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'row-cols-xl', columns_xl); //===> Return Options <===//

        return onChange(current);
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "mb-10 fs-12"
      }, "select number of columns in each row for each screen size"), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y mb-20"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-16 me-10 fa-mobile",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-cols",
        min: 0,
        max: 12,
        value: columns,
        onChange: set_cols
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y mb-20"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-16 me-10 fa-tablet",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-cols",
        min: 0,
        max: 12,
        value: columns_md,
        onChange: set_cols_md
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y mb-20"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-14 me-10 fa-laptop",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-cols",
        min: 0,
        max: 12,
        value: columns_lg,
        onChange: set_cols_lg
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-14 me-10 fa-desktop",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-cols",
        min: 0,
        max: 12,
        value: columns_xl,
        onChange: set_cols_xl
      })));
    }
  }]);

  return EqualColumns;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-controls/flex-alignment.js":
/*!**************************************************!*\
  !*** ./src/blocks/px-controls/flex-alignment.js ***!
  \**************************************************/
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
      }, /*#__PURE__*/React.createElement("div", {
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
      }, createAlignment('-xl'))), /*#__PURE__*/React.createElement("span", {
        className: "display-block border-alpha-05 bg-alpha-05 col-12 mb-15 divider-t"
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        key: "align-flow",
        label: "Flow Reverse",
        checked: isReversed(),
        onChange: setFlow
      }));
    }
  }]);

  return FlexAlignment;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



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

/***/ "./src/blocks/grid-row/block.json":
/*!****************************************!*\
  !*** ./src/blocks/grid-row/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/row","version":"0.1.0","title":"Grid Row","keywords":["pds","phenix","section","group","wrapper","row","flex","layout","grid"],"category":"design","description":"Wrapper Represent the Grid System Row with Flexbox Features","supports":{"html":false},"attributes":{"tagName":{"type":"string","default":"div"},"preview":{"type":"boolean","default":false},"flex_align":{"type":"string","default":""},"isEqual":{"type":"boolean","default":false},"isMasonry":{"type":"boolean","default":false},"columns":{"type":"string","default":""}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
/*!**************************************!*\
  !*** ./src/blocks/grid-row/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/grid-row/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/grid-row/block.json");
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
    d: "M176 32C202.5 32 224 53.49 224 80V176C224 202.5 202.5 224 176 224H80C53.49 224 32 202.5 32 176V80C32 53.49 53.49 32 80 32H176zM176 288C202.5 288 224 309.5 224 336V432C224 458.5 202.5 480 176 480H80C53.49 480 32 458.5 32 432V336C32 309.5 53.49 288 80 288H176zM288 80C288 53.49 309.5 32 336 32H432C458.5 32 480 53.49 480 80V176C480 202.5 458.5 224 432 224H336C309.5 224 288 202.5 288 176V80zM384 272C397.3 272 408 282.7 408 296V360H472C485.3 360 496 370.7 496 384C496 397.3 485.3 408 472 408H408V472C408 485.3 397.3 496 384 496C370.7 496 360 485.3 360 472V408H296C282.7 408 272 397.3 272 384C272 370.7 282.7 360 296 360H360V296C360 282.7 370.7 272 384 272z"
  })),

  /**===> @see ./edit.js <===*/
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**===> Block Output <===*/
  save: function save(_ref) {
    var attributes = _ref.attributes;
    //===> Get Block Properties <===//
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    var TagName = attributes.tagName; //===> Set Properties <===//

    blockProps.className += ' row'; //===> Alignment <===//

    if (attributes.flex_align) blockProps.className += " ".concat(attributes.flex_align); //===> Masonry <===//

    if (attributes.isMasonry) blockProps.className += ' px-masonry'; //===> Columns <===//

    if (attributes.isEqual && attributes.columns) blockProps.className += attributes.columns; //===> Render <===//

    return /*#__PURE__*/React.createElement(TagName, blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map