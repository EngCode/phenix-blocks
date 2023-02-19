/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/blocks/px-controls/number.js":
/*!******************************************!*\
  !*** ./src/blocks/px-controls/number.js ***!
  \******************************************/
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
            wrapper = Phenix(button).ancestor(".px-counter-input"),
            maxNum = parseInt(max) || 9999999,
            step = steps ? parseInt(steps) : 1; //===> Get Input Element <===//

        var input = wrapper.querySelector('input[type="number"]'),
            newVal = parseInt(input.value) + step;
        console.log(input, newVal); //===> Set Data <===//

        return onChange(newVal <= maxNum ? newVal : maxNum);
      },
          //===> Decrease Number <===//
      DecreaseNum = function DecreaseNum(clicked) {
        //===> Get Elements <===//
        var button = clicked.target,
            wrapper = Phenix(button).ancestor(".px-counter-input"),
            minNum = parseInt(min) || 0,
            step = steps ? steps : 1; //===> Get Input Element <===//

        var input = wrapper.querySelector('input[type="number"]'),
            newVal = parseInt(input.value) - step;
        console.log(input, newVal); //===> Set Data <===//

        return onChange(newVal >= minNum ? newVal : minNum);
      }; //===> Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "flexbox flex-gap-fix align-between flow-column"
      }, /*#__PURE__*/React.createElement("label", {
        className: "components-input-control__label tx-uppercase weight-bold"
      }, label), /*#__PURE__*/React.createElement("div", {
        className: "px-counter-input position-rv fluid " + (icon ? icon : "")
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

/***/ "./src/blocks/query/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/query/edit.js ***!
  \**********************************/
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
/* harmony import */ var _px_controls_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../px-controls/number */ "./src/blocks/px-controls/number.js");
/* harmony import */ var _px_controls_grid_alignment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../px-controls/grid/alignment */ "./src/blocks/px-controls/grid/alignment.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
      postTypes = _useState2[0],
      setPostTypes = _useState2[1]; //===> Query Options <===//


  var set_order = function set_order(order) {
    return setAttributes({
      order: order
    });
  },
      set_post_type = function set_post_type(post_type) {
    return setAttributes({
      post_type: post_type
    });
  },
      set_per_page = function set_per_page(per_page) {
    return setAttributes({
      per_page: per_page
    });
  },
      set_pagination = function set_pagination(pagination) {
    return setAttributes({
      pagination: pagination
    });
  },
      set_native_query = function set_native_query(native_query) {
    return setAttributes({
      native_query: native_query
    });
  },
      set_template_part = function set_template_part(template_part) {
    return setAttributes({
      template_part: template_part
    });
  }; //===> Grid Options <===//


  var set_grid_mode = function set_grid_mode(grid_mode) {
    return setAttributes({
      grid_mode: grid_mode
    });
  },
      set_grid_cols = function set_grid_cols(grid_cols) {
    return setAttributes({
      grid_cols: (!attributes.slider_mode ? "row-cols-" : "") + (grid_cols > 0 ? grid_cols : "auto")
    });
  },
      set_grid_cols_stat = function set_grid_cols_stat(grid_cols_stat) {
    return setAttributes({
      grid_cols_stat: grid_cols_stat
    });
  },
      set_grid_alignment = function set_grid_alignment(grid_alignment) {
    return setAttributes({
      grid_alignment: grid_alignment
    });
  }; //===> Grid Utilites <===//


  var set_grid_flow = function set_grid_flow(grid_flow) {
    return grid_flow ? setAttributes({
      grid_flow: "flow-reverse"
    }) : setAttributes({
      grid_flow: ""
    });
  },
      set_grid_nowrap = function set_grid_nowrap(grid_nowrap) {
    return grid_nowrap ? setAttributes({
      grid_nowrap: "flow-nowrap"
    }) : setAttributes({
      grid_nowrap: ""
    });
  },
      set_grid_masonry = function set_grid_masonry(grid_masonry) {
    return grid_masonry ? setAttributes({
      grid_masonry: "px-masonry"
    }) : setAttributes({
      grid_masonry: ""
    });
  }; //===> Slider Options <===//


  var set_slider_type = function set_slider_type(slider_type) {
    return setAttributes({
      slider_type: slider_type
    });
  },
      set_slider_steps = function set_slider_steps(slider_steps) {
    return setAttributes({
      slider_steps: slider_steps
    });
  },
      set_slider_duration = function set_slider_duration(slider_duration) {
    return setAttributes({
      slider_duration: slider_duration
    });
  },
      set_slider_speed = function set_slider_speed(slider_speed) {
    return setAttributes({
      slider_speed: slider_speed
    });
  },
      set_slider_autoplay = function set_slider_autoplay(slider_autoplay) {
    return setAttributes({
      slider_autoplay: slider_autoplay
    });
  },
      set_slider_controls = function set_slider_controls(slider_controls) {
    return setAttributes({
      slider_controls: slider_controls
    });
  },
      set_slider_pagination = function set_slider_pagination(slider_pagination) {
    return setAttributes({
      slider_pagination: slider_pagination
    });
  },
      set_slider_mode = function set_slider_mode(slider_mode) {
    return setAttributes({
      slider_mode: slider_mode,
      grid_cols_stat: slider_mode ? false : attributes.grid_cols_stat,
      grid_cols: slider_mode && parseInt(attributes.grid_cols) < 1 ? 1 : attributes.grid_cols
    });
  }; //===> Set Phenix Components <===//


  var setPhenixView = function setPhenixView() {
    //===> Timeout for Loading <===//
    setTimeout(function () {
      //===> Check Site Editor <===//
      var siteEditor = window.frames['editor-canvas'],
          mediaElement = '.px-media',
          sliderElement = '.px-slider:not(.splide)'; //===> Correct Editor Target for Site-Editor <===//

      if (siteEditor) {
        //===> Correct Media <===//
        mediaElement = _toConsumableArray(siteEditor.document.querySelectorAll(mediaElement)); //===> Correct Slider <===//

        sliderElement = _toConsumableArray(siteEditor.document.querySelectorAll(sliderElement));
      } //===> Run Phenix Components <===//


      Phenix(mediaElement).multimedia();
      Phenix(sliderElement).slider();
    }, 1000);
  }; //===> Active Phenix Components <===//
  // useEffect(() => setPhenixView(), [attributes]);
  //===> Fetch Data for Options <===//


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    //===> Fetch Post Types <===//
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: 'wp/v2/types'
    }).then(function (post_types) {
      //===> Define Types <===//
      var new_types = []; //===> Get Current Active Types <===//

      for (var _i2 = 0, _Object$entries = Object.entries(post_types); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        //===> Exclude the Core Types <===//
        if (!['attachment', 'nav_menu_item', 'wp_block', 'wp_navigation', 'wp_template', 'wp_template_part'].includes(key)) {
          new_types.push({
            "value": key,
            "label": value.name
          });
        }
      } //===> Set the new List if its Deferent <===//


      if (postTypes !== new_types) setPostTypes([].concat(new_types));
    }); //===> Active Phenix Components <===//

    setPhenixView();
  }, []); //===> Render <===//

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General Setting", "phenix"),
    initialOpen: true
  }, !attributes.native_query ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Data Type", "phenix"),
    value: attributes.post_type,
    onChange: set_post_type,
    options: postTypes
  }) : "", /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Native Query", "phenix"),
    checked: attributes.native_query,
    onChange: set_native_query
  }), !attributes.native_query ? /*#__PURE__*/React.createElement("div", {
    className: "row gpx-20 mb-15"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Per Page", "phenix"),
    value: attributes.per_page,
    onChange: set_per_page,
    min: 3,
    max: 36
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
  }))) : "", /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    key: "template-name",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Card Template", "phenix"),
    value: attributes.template_part,
    onChange: set_template_part
  }), /*#__PURE__*/React.createElement("div", {
    className: "row gpx-20 mb-15"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pagination", "phenix"),
    checked: attributes.pagination,
    onChange: set_pagination
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Mode", "phenix"),
    checked: attributes.grid_mode,
    onChange: set_grid_mode
  })))), attributes.grid_mode ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loop Grid", "phenix"),
    initialOpen: true
  }, !attributes.slider_mode ? /*#__PURE__*/React.createElement(React.Fragment, null, !attributes.grid_cols_stat ? /*#__PURE__*/React.createElement("div", {
    className: "mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Columns in Row", "phenix"),
    icon: "far fa-mobile-android",
    value: attributes.grid_cols.replace("row-cols-", ""),
    onChange: set_grid_cols,
    min: 1,
    max: 12
  })) : "", /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Free Columns Size ?", "phenix"),
    checked: attributes.grid_cols_stat,
    onChange: set_grid_cols_stat
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "row gpx-15 mb-15"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 mb-20"
  }, /*#__PURE__*/React.createElement(_px_controls_grid_alignment__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flexbox Alignment", "phenix"),
    value: attributes.grid_alignment,
    onChange: set_grid_alignment
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reverse ", "phenix"),
    checked: attributes.grid_flow.length > 0,
    onChange: set_grid_flow
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nowrap", "phenix"),
    checked: attributes.grid_nowrap.length > 0,
    onChange: set_grid_nowrap
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slider Mode", "phenix"),
    checked: attributes.slider_mode,
    onChange: set_slider_mode
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Masonry", "phenix"),
    checked: attributes.grid_masonry.length > 0,
    onChange: set_grid_masonry
  })))) : "", attributes.slider_mode ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slider Options", "phenix"),
    initialOpen: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gpx-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 mb-15"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Type", "phenix"),
    value: attributes.slider_type,
    onChange: set_slider_type,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Loop', "phenix"),
      value: 'loop'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fading', "phenix"),
      value: 'fade'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sliding', "phenix"),
      value: 'slide'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Columns No.", "phenix"),
    value: attributes.grid_cols.replace("row-cols-", ""),
    onChange: set_grid_cols,
    min: 1,
    max: 12
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Steps", "phenix"),
    value: attributes.slider_steps,
    onChange: set_slider_steps,
    min: 1,
    max: 12
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duration", "phenix"),
    value: attributes.slider_duration,
    onChange: set_slider_duration,
    min: 3000,
    max: 20000,
    steps: 100
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Speed", "phenix"),
    value: attributes.slider_speed,
    onChange: set_slider_speed,
    min: 300,
    max: 3000,
    steps: 100
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pdt-15 divider-t"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Autoplay", "phenix"),
    checked: attributes.slider_autoplay,
    onChange: set_slider_autoplay
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Arrows Buttons", "phenix"),
    checked: attributes.slider_controls,
    onChange: set_slider_controls
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Bullet Pagination", "phenix"),
    checked: attributes.slider_pagination,
    onChange: set_slider_pagination
  }))) : ""), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://design.phenixthemes.com/px-assets/slider-placeholder.svg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
    block: "phenix/query",
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

/***/ "./src/blocks/query/block.json":
/*!*************************************!*\
  !*** ./src/blocks/query/block.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/query","version":"0.1.0","title":"Query Loop","category":"design","description":"Custom Query Posts Block.","supports":{"html":false},"attributes":{"post_type":{"type":"string","default":"post"},"template_part":{"type":"string","default":"pds/placeholder"},"per_page":{"type":"number","default":8},"order":{"type":"string","default":"DESC"},"pagination":{"type":"boolean","default":false},"native_query":{"type":"boolean","default":false},"preview":{"type":"boolean","default":false},"grid_mode":{"type":"boolean","default":false},"grid_cols":{"type":"string","default":"row-cols-auto"},"grid_cols_stat":{"type":"boolean","default":true},"grid_flow":{"type":"string","default":""},"grid_nowrap":{"type":"string","default":""},"grid_masonry":{"type":"string","default":""},"grid_alignment":{"type":"string","default":""},"slider_mode":{"type":"boolean","default":false},"slider_autoplay":{"type":"boolean","default":true},"slider_controls":{"type":"boolean","default":true},"slider_pagination":{"type":"boolean","default":false},"slider_steps":{"type":"string","default":"1"},"slider_duration":{"type":"string","default":"7000"},"slider_speed":{"type":"string","default":"700"},"slider_type":{"type":"string","default":"loop"}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"px-query"}');

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
/*!***********************************!*\
  !*** ./src/blocks/query/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/query/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/query/block.json");
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
    viewBox: "0 0 640 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z"
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