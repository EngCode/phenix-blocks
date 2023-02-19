/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/grid-row/edit.js":
/*!*************************************!*\
  !*** ./src/blocks/grid-row/edit.js ***!
  \*************************************/
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
/* harmony import */ var _px_controls_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../px-controls/switch */ "./src/blocks/px-controls/switch.js");
/* harmony import */ var _px_controls_grid_alignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../px-controls/grid/alignment */ "./src/blocks/px-controls/grid/alignment.js");
/* harmony import */ var _px_controls_grid_equal_columns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../px-controls/grid/equal-columns */ "./src/blocks/px-controls/grid/equal-columns.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//====> WP Modules <====//


 //====> Phenix Modules <====//



 //====> Edit Mode <====//

function Edit(_ref) {
  var _flexbox_options$flow, _flexbox_options$nowr, _flexbox_options$maso;

  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  //===> Set Settings <===//
  var set_isEqual = function set_isEqual(isEqual) {
    return setAttributes({
      isEqual: isEqual
    });
  };

  var set_columns = function set_columns(columns) {
    return setAttributes({
      columns: columns
    });
  };

  var set_isSlider = function set_isSlider(isSlider) {
    return setAttributes({
      isSlider: isSlider
    });
  };

  var set_controls = function set_controls(controls) {
    return setAttributes({
      controls: controls
    });
  };

  var set_pagination = function set_pagination(pagination) {
    return setAttributes({
      pagination: pagination
    });
  }; //===> Get Options <===//


  var flexbox_options = attributes.flexbox,
      style_options = attributes.style,
      background = style_options === null || style_options === void 0 ? void 0 : style_options.background,
      typography = attributes.typography; //===> Flexbox Options <===//

  var set_alignment = function set_alignment(alignment) {
    //==> Align <==//
    flexbox_options.align = alignment;
    setAttributes({
      flexbox: _objectSpread({}, flexbox_options)
    });
  }; //==> Flow <==//


  var set_flex_flow = function set_flex_flow(target) {
    flexbox_options.flow = target.checked ? target.value : "";
    setAttributes({
      flexbox: _objectSpread({}, flexbox_options)
    });
  }; //==> No-Wrap <==//


  var set_flex_nowrap = function set_flex_nowrap(target) {
    flexbox_options.nowrap = target.checked ? target.value : "";
    setAttributes({
      flexbox: _objectSpread({}, flexbox_options)
    });
  }; //==> Masonry <==//


  var set_flex_masonry = function set_flex_masonry(target) {
    flexbox_options.masonry = target.checked ? target.value : "";
    setAttributes({
      flexbox: _objectSpread({}, flexbox_options)
    });
  }; //==> Equal Columns <==//


  var set_flex_equals = function set_flex_equals(target) {
    flexbox_options.equals = target.checked;
    setAttributes({
      flexbox: _objectSpread({}, flexbox_options)
    });
  }; //==> Slider Mode <==//


  var set_flex_slider = function set_flex_slider(target) {
    flexbox_options.slider = target.checked;
    setAttributes({
      flexbox: _objectSpread({}, flexbox_options)
    });
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(); //===> Set Properties <===//

  innerBlocksProps.className += " ".concat(blockProps.className);
  innerBlocksProps.className += ' row'; //===> Properties <===//

  if (flexbox_options.align) innerBlocksProps.className += " ".concat(flexbox_options.align);
  if (flexbox_options.flow) innerBlocksProps.className += " ".concat(flexbox_options.flow);
  if (flexbox_options.nowrap) innerBlocksProps.className += " ".concat(flexbox_options.nowrap);
  if (flexbox_options.masonry) innerBlocksProps.className += " ".concat(flexbox_options.masonry); //===> Columns <===//

  if (flexbox_options.equals && attributes.columns) innerBlocksProps.className += attributes.columns; //===> Slider <===//

  if (flexbox_options.slider) {
    //===> Add Slider Name <===//
    innerBlocksProps.className += ' px-slider'; //===> Set Items <===//

    var columns_names = attributes.columns.split(' ');
    columns_names.forEach(function (name) {
      //===> Medium Screen <===//
      if (name.includes('-md')) innerBlocksProps['data-md'] = name.replace('row-cols-md-', ''); //===> Large Screen <===//
      else if (name.includes('-lg')) innerBlocksProps['data-lg'] = name.replace('row-cols-lg-', ''); //===> xLarge Screen <===//
      else if (name.includes('-xl')) innerBlocksProps['data-xl'] = name.replace('row-cols-xl-', ''); //===> Small Screen <===//
      else if (name.includes('row-cols')) innerBlocksProps['data-items'] = name.replace('row-cols-', '');
    }); //===> Set Other Options <===//

    if (attributes.controls) innerBlocksProps['data-controls'] = 1;
    if (attributes.pagination) innerBlocksProps['data-pagination'] = 1; //===> for Edit only <===//
    // innerBlocksProps.className += attributes.columns;
  } //===> Render <===//


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "General Settings"
  }, !flexbox_options.slider ? /*#__PURE__*/React.createElement("div", {
    className: "row gpx-15 mb-10 divider-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_grid_alignment__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Alignment", "phenix"),
    value: flexbox_options.align || "",
    onChange: set_alignment
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12 flexbox mb-15"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-12 mb-5 tx-UpperCase"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Options", "phenix")), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "flex-flow",
    value: "flow-reverse",
    checked: ((_flexbox_options$flow = flexbox_options.flow) === null || _flexbox_options$flow === void 0 ? void 0 : _flexbox_options$flow.length) > 0,
    onChange: set_flex_flow,
    type: "checkbox",
    className: "tiny mb-5 me-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reverse ", "phenix"))), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "flex-nowrap",
    value: "flow-nowrap",
    checked: ((_flexbox_options$nowr = flexbox_options.nowrap) === null || _flexbox_options$nowr === void 0 ? void 0 : _flexbox_options$nowr.length) > 0,
    onChange: set_flex_nowrap,
    type: "checkbox",
    className: "tiny mb-5 me-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nowrap", "phenix"))), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "flex-masonry",
    value: "px-masonry",
    checked: ((_flexbox_options$maso = flexbox_options.masonry) === null || _flexbox_options$maso === void 0 ? void 0 : _flexbox_options$maso.length) > 0,
    onChange: set_flex_masonry,
    type: "checkbox",
    className: "tiny mb-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Masonry", "phenix"))), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "flex-equals",
    checked: flexbox_options.equals,
    onChange: set_flex_equals,
    type: "checkbox",
    className: "tiny"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Equal Columns.", "phenix"))))) : null, /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "flex-slider",
    checked: flexbox_options.slider,
    onChange: set_flex_slider,
    type: "switch-checkbox",
    className: "tiny"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Slider Mode", "phenix"))), flexbox_options.slider ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Slider Options",
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Enable Pagination",
    checked: attributes.pagination,
    onChange: set_pagination
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Enable Arrow Buttons",
    checked: attributes.controls,
    onChange: set_controls
  })) : null, flexbox_options.equals || flexbox_options.slider ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Columns Size",
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_px_controls_grid_equal_columns__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: "row-columns",
    value: attributes.columns,
    onChange: set_columns
  })) : null), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/row.jpg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", innerBlocksProps)));
}

/***/ }),

/***/ "./src/blocks/px-controls/grid/alignment.js":
/*!**************************************************!*\
  !*** ./src/blocks/px-controls/grid/alignment.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FlexAlignment; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../switch */ "./src/blocks/px-controls/switch.js");
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
          label = _this$props.label,
          value = _this$props.value,
          onChange = _this$props.onChange;
      var button_style = "btn tiny bg-transparent fs-12 square pxi"; //===> Align Handler <===//

      var set_alignment = function set_alignment(target) {
        //===> Define Data <===//
        var align_val = value,
            align_type = target.getAttribute('name'),
            val_split = value.split(" "); //===> Loop on Values <===//

        val_split.forEach(function (value) {
          //===> Type X Checker <===//
          if (align_type.includes('-x') && value.includes('-x' || 0 || 0)) {
            align_val.replace(value, target.value);
          } //===> Type Y Checker <===//
          else if (align_type.includes('-y') && value.includes('-y')) {
            align_val.replace(value, target.value);
          } //===> New Type <===//
          else {
            align_val += " ".concat(target.value);
          }
        }); //===> Return new Value <===//

        return onChange(align_val);
      },
          //===> Set Align Y <===//
      reset_align = function reset_align(clicked) {
        return onChange("");
      }; //===> Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "components-flex-item flex-alignment-btns"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-between mb-5 align-center-y"
      }, /*#__PURE__*/React.createElement("label", {
        className: "components-input-control__label components-flex-item weight-bold"
      }, label), /*#__PURE__*/React.createElement("button", {
        type: "button",
        "data-value": "",
        title: "Reset",
        className: "btn tiny bg-transparent fs-12 square far fa-redo",
        onClick: reset_align
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-between"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm"
      }, /*#__PURE__*/React.createElement(_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "flex-align-x",
        checked: value.includes("align-start-x"),
        value: "align-start-x",
        onChange: set_alignment,
        type: "button-radio",
        className: "tiny inline-block"
      }, /*#__PURE__*/React.createElement("span", {
        title: "Start",
        className: "".concat(button_style, " pxi-align-x-start")
      })), /*#__PURE__*/React.createElement(_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "flex-align-x",
        checked: value.includes("align-center-x"),
        value: "align-center-x",
        onChange: set_alignment,
        type: "button-radio",
        className: "tiny inline-block"
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(button_style, " pxi-align-x-center"),
        title: "Center"
      })), /*#__PURE__*/React.createElement(_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "flex-align-x",
        checked: value.includes("align-between"),
        value: "align-between",
        onChange: set_alignment,
        type: "button-radio",
        className: "tiny inline-block"
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(button_style, " pxi-align-x-between"),
        title: "Between"
      })), /*#__PURE__*/React.createElement(_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "flex-align-x",
        checked: value.includes("align-around"),
        value: "align-around",
        onChange: set_alignment,
        type: "button-radio",
        className: "tiny inline-block"
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(button_style, " pxi-align-x-around"),
        title: "Around"
      })), /*#__PURE__*/React.createElement(_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "flex-align-x",
        checked: value.includes("align-end-x"),
        value: "align-end-x",
        onChange: set_alignment,
        type: "button-radio",
        className: "tiny inline-block"
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(button_style, " pxi-align-x-end"),
        title: "Around"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm"
      }, /*#__PURE__*/React.createElement(_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "flex-align-y",
        checked: value.includes("align-start-y"),
        value: "align-start-y",
        onChange: set_alignment,
        type: "button-radio",
        className: "tiny inline-block"
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(button_style, " pxi-align-y-start"),
        title: "Start"
      })), /*#__PURE__*/React.createElement(_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "flex-align-y",
        checked: value.includes("align-center-y"),
        value: "align-center-y",
        onChange: set_alignment,
        type: "button-radio",
        className: "tiny inline-block"
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(button_style, " pxi-align-y-center"),
        title: "Center"
      })), /*#__PURE__*/React.createElement(_switch__WEBPACK_IMPORTED_MODULE_1__["default"], {
        name: "flex-align-y",
        checked: value.includes("align-end-y"),
        value: "align-end-y",
        onChange: set_alignment,
        type: "button-radio",
        className: "tiny inline-block"
      }, /*#__PURE__*/React.createElement("span", {
        className: "".concat(button_style, " pxi-align-y-end"),
        title: "End"
      })))));
    }
  }]);

  return FlexAlignment;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-controls/grid/equal-columns.js":
/*!******************************************************!*\
  !*** ./src/blocks/px-controls/grid/equal-columns.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EqualColumns; }
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

/***/ "./src/blocks/px-controls/switch.js":
/*!******************************************!*\
  !*** ./src/blocks/px-controls/switch.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OptionControl; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//====> .Dependencies. <====//

 //===> Phenix Form Control <===//

var OptionControl = /*#__PURE__*/function (_Component) {
  _inherits(OptionControl, _Component);

  var _super = _createSuper(OptionControl);

  function OptionControl() {
    var _this;

    _classCallCheck(this, OptionControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(OptionControl, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          name = _this$props.name,
          type = _this$props.type,
          value = _this$props.value,
          checked = _this$props.checked,
          onChange = _this$props.onChange,
          children = _this$props.children,
          required = _this$props.required,
          className = _this$props.className; //===> Change Value <===//

      var setValue = function setValue(event) {
        return onChange(event.target);
      }; //===> Define Data <===//


      var options = "option-control flexbox align-center-y",
          attributes = {
        onChange: setValue
      }; //===> Custom Classes <===//

      if (className) options += " ".concat(className); //===> Check if is On <===//

      attributes.defaultChecked = checked; //===> add Options <===//

      if (required) attributes.required = true; //===> Render Component <===//

      return /*#__PURE__*/React.createElement("label", {
        className: options,
        "data-type": type !== null && type !== void 0 && type.includes("switch") ? "switch" : type.includes("button") ? "button" : type
      }, /*#__PURE__*/React.createElement("input", _extends({
        type: type === null || type === void 0 ? void 0 : type.replace("switch-", "").replace("button-", ""),
        name: name,
        value: value || ""
      }, attributes)), type !== null && type !== void 0 && type.includes("switch") ? /*#__PURE__*/React.createElement("span", {
        className: "switch"
      }) : null, children);
    }
  }]);

  return OptionControl;
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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/grid-row/block.json":
/*!****************************************!*\
  !*** ./src/blocks/grid-row/block.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/row","version":"0.1.0","title":"Grid Row","keywords":["pds","phenix","section","group","wrapper","row","flex","layout","grid"],"category":"design","description":"","supports":{"html":false},"attributes":{"preview":{"type":"boolean","default":false},"flexbox":{"type":"object","default":{}},"typography":{"type":"object","default":{}},"style":{"type":"object","default":{}},"responsive":{"type":"object","default":{}},"isEqual":{"type":"boolean","default":false},"columns":{"type":"string","default":""},"isSlider":{"type":"boolean","default":false},"pagination":{"type":"boolean","default":false},"controls":{"type":"boolean","default":false}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
    blockProps.className += ' row'; //===> Properties <===//

    if (attributes.flexbox.align) blockProps.className += " ".concat(attributes.flexbox.align);
    if (attributes.flexbox.flow) blockProps.className += " ".concat(attributes.flexbox.flow);
    if (attributes.flexbox.nowrap) blockProps.className += " ".concat(attributes.flexbox.nowrap);
    if (attributes.flexbox.masonry) blockProps.className += " ".concat(attributes.flexbox.masonry); //===> Columns <===//

    if (attributes.flexbox.equals && attributes.columns) blockProps.className += attributes.columns; //===> Slider <===//

    if (attributes.flexbox.slider) {
      //===> Add Slider Name <===//
      blockProps.className += ' px-slider'; //===> Items Info <===//

      var columns_names = attributes.columns.split(' ');
      columns_names.forEach(function (name) {
        //===> Medium Screen <===//
        if (name.includes('-md')) blockProps['data-md'] = name.replace('row-cols-md-', ''); //===> Large Screen <===//
        else if (name.includes('-lg')) blockProps['data-lg'] = name.replace('row-cols-lg-', ''); //===> xLarge Screen <===//
        else if (name.includes('-xl')) blockProps['data-xl'] = name.replace('row-cols-xl-', ''); //===> Small Screen <===//
        else if (name.includes('row-cols')) blockProps['data-items'] = name.replace('row-cols-', '');
      }); //===> Set Other Options <===//

      if (attributes.controls) blockProps['data-controls'] = 1;
      if (attributes.pagination) blockProps['data-pagination'] = 1;
    } //===> Render <===//


    return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map