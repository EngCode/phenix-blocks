/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/px-controls/elements/tabs.js":
/*!*************************************************!*\
  !*** ./src/blocks/px-controls/elements/tabs.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScreensTabs; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/
//===> WordPress Modules <===//

 //===> Phenix Background <===//

var ScreensTabs = /*#__PURE__*/function (_Component) {
  _inherits(ScreensTabs, _Component);

  var _super = _createSuper(ScreensTabs);

  function ScreensTabs() {
    var _this;

    _classCallCheck(this, ScreensTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      screen: "none"
    });

    return _this;
  }

  _createClass(ScreensTabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      //===> Properties <===//
      var _this$props = this.props,
          small = _this$props.small,
          large = _this$props.large,
          xlarge = _this$props.xlarge,
          medium = _this$props.medium; //===> Initial Tab <===//

      if (this.state.screen === "none") {
        if (this.props.small) this.setState({
          screen: "small"
        });else if (this.props.medium) this.setState({
          screen: "medium"
        });else if (this.props.large) this.setState({
          screen: "large"
        });else if (this.props.xlarge) this.setState({
          screen: "xlarge"
        });
      } //===> Options Changer <===//


      var changeTab = function changeTab(clicked) {
        //===> Option Data <===//
        var element = clicked.target; //===> Show Options <===//

        _this2.setState({
          screen: element.getAttribute('data-options')
        });
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("div", {
        className: "options-tabs px-group borderd-group divider-b border-alpha-15 mb-20"
      }, this.props.small ? /*#__PURE__*/React.createElement("button", {
        key: "tablet",
        onClick: changeTab,
        className: "btn square tiny ".concat(this.state.screen !== "small" ? "light" : "primary", " col far fa-tablet"),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tablet Screens", "phenix"),
        "data-options": "small"
      }) : null, this.props.medium ? /*#__PURE__*/React.createElement("button", {
        key: "tablet",
        onClick: changeTab,
        className: "btn square tiny ".concat(this.state.screen !== "medium" ? "light" : "primary", " col far fa-tablet"),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tablet Screens", "phenix"),
        "data-options": "medium"
      }) : null, this.props.large ? /*#__PURE__*/React.createElement("button", {
        key: "laptop",
        onClick: changeTab,
        className: "btn square tiny ".concat(this.state.screen !== "large" ? "light" : "primary", " col far fa-laptop"),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Desktop Screens", "phenix"),
        "data-options": "large"
      }) : null, this.props.xlarge ? /*#__PURE__*/React.createElement("button", {
        key: "desktop",
        onClick: changeTab,
        className: "btn square tiny ".concat(this.state.screen !== "xlarge" ? "light" : "primary", " col far fa-desktop"),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("xLarge Screens", "phenix"),
        "data-options": "xlarge"
      }) : null), /*#__PURE__*/React.createElement("div", {
        className: "options-list"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexbox ".concat(this.state.screen, "-options")
      }, this.props["".concat(this.state.screen)](this.state.screen))));
    }
  }]);

  return ScreensTabs;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component);



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
          onChange = _this$props.onChange; //===> Set Value <===//

      var setNumber = function setNumber(changed) {
        //===> Get Elements <===//
        var input = changed.target,
            minNum = parseInt(min) || 0,
            maxNum = parseInt(max) || 0; //===> Get Input Element <===//

        var newVal = parseInt(input.value); //===> Set Data <===//

        return onChange(newVal >= minNum || newVal <= maxNum ? newVal : newVal < minNum ? minNum : newVal > maxNum ? maxNum : 0);
      },
          //===> Increase Number <===//
      IncreaseNum = function IncreaseNum(clicked) {
        //===> Get Elements <===//
        var button = clicked.target,
            wrapper = Phenix(button).ancestor(".px-counter-input"),
            maxNum = parseInt(max) || 9999999,
            step = steps ? parseInt(steps) : 1; //===> Get Input Element <===//

        var input = wrapper.querySelector('input[type="number"]'),
            newVal = parseInt(input.value) + step; //===> Set Data <===//

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
            newVal = parseInt(input.value) - step; //===> Set Data <===//

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
/* harmony import */ var _px_controls_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../px-controls/switch */ "./src/blocks/px-controls/switch.js");
/* harmony import */ var _px_controls_elements_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../px-controls/elements/tabs */ "./src/blocks/px-controls/elements/tabs.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var _attributes$grid$cols, _attributes$grid$flow, _attributes$grid$maso;

  //===> Get Properties <===//
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([{
    "value": attributes.post_type,
    "label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', 'phenix')
  }]),
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
      set_grid_mode = function set_grid_mode(grid_mode) {
    return setAttributes({
      grid_mode: grid_mode
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
      set_template_part = function set_template_part(template_part) {
    return setAttributes({
      template_part: template_part
    });
  },
      set_slider_mode = function set_slider_mode(value) {
    //===> Define Data <===//
    var options = attributes.grid; //===> Convert Grid to Slider <===//

    if (options.state && value) options.state = false;
    if (options.cols && parseInt(options.cols) < 1) options.cols = 1; //===> Set Value <===//

    setAttributes({
      slider_mode: value,
      grid: _objectSpread({}, options)
    });
  }; //===> Grid Options <===//


  var set_grid_cols = function set_grid_cols(value) {
    //===> Define Data <===//
    var grid_ops = attributes.grid; //===> Set Value <===//

    grid_ops.cols = (!attributes.slider_mode ? "row-cols-" : "") + (grid_ops.cols > 0 ? value : "auto");
    setAttributes({
      grid: _objectSpread({}, grid_ops)
    });
  },
      set_grid_state = function set_grid_state(target) {
    //==> Get Current <==//
    var grid_ops = attributes.grid; //==> Set Value <==//

    grid_ops.state = target.checked;
    console.log(grid_ops);
    setAttributes({
      grid: _objectSpread({}, grid_ops)
    });
  }; //===> Grid Utilites <===//


  var set_grid_flow = function set_grid_flow(target) {
    //==> Get Current <==//
    var grid_ops = attributes.grid; //==> Set Value <==//

    grid_ops.flow = target.checked ? target.value : "";
    setAttributes({
      grid: _objectSpread({}, grid_ops)
    });
  },
      set_grid_masonry = function set_grid_masonry(target) {
    //==> Get Current <==//
    var grid_ops = attributes.grid; //==> Set Value <==//

    grid_ops.masonry = target.checked ? target.value : "";
    setAttributes({
      grid: _objectSpread({}, grid_ops)
    });
  }; //===> Slider Options <===//


  var set_slider_type = function set_slider_type(value) {
    //==> Get Current <==//
    var options = attributes.slider; //==> Set Value <==//

    options.type = value;
    setAttributes({
      slider: _objectSpread({}, options)
    });
  },
      set_slider_steps = function set_slider_steps(value) {
    //==> Get Current <==//
    var options = attributes.slider; //==> Set Value <==//

    options.steps = value;
    setAttributes({
      slider: _objectSpread({}, options)
    });
  },
      set_slider_duration = function set_slider_duration(value) {
    //==> Get Current <==//
    var options = attributes.slider; //==> Set Value <==//

    options.duration = value;
    setAttributes({
      slider: _objectSpread({}, options)
    });
  },
      set_slider_speed = function set_slider_speed(value) {
    //==> Get Current <==//
    var options = attributes.slider; //==> Set Value <==//

    options.speed = value;
    setAttributes({
      slider: _objectSpread({}, options)
    });
  },
      set_slider_autoplay = function set_slider_autoplay(value) {
    //==> Get Current <==//
    var options = attributes.slider; //==> Set Value <==//

    options.autoplay = value;
    setAttributes({
      slider: _objectSpread({}, options)
    });
  },
      set_slider_controls = function set_slider_controls(value) {
    //==> Get Current <==//
    var options = attributes.slider; //==> Set Value <==//

    options.controls = value;
    setAttributes({
      slider: _objectSpread({}, options)
    });
  },
      set_slider_pagination = function set_slider_pagination(value) {
    //==> Get Current <==//
    var options = attributes.slider; //==> Set Value <==//

    options.pagination = value;
    setAttributes({
      slider: _objectSpread({}, options)
    });
  }; //===> Set Phenix Components <===//


  var setPhenixView = function setPhenixView() {
    //===> Get View iFrame <===//
    if (window.frames['editor-canvas']) {
      //===> View Script <===//
      var frameDoc = window.frames['editor-canvas'].document;
      setTimeout(function () {
        frameDoc.querySelectorAll(".px-media").forEach(function (element) {
          return Phenix(element).multimedia();
        });
        frameDoc.querySelectorAll(".px-slider:not(.splide)").forEach(function (element) {
          element.classList.add('edit-mode');
          Phenix(element).slider();
        });
      }, 2000);
    } else {
      //===> Timeout for Loading <===//
      setTimeout(function () {
        //===> Get Elements <===//
        var Sliders = Phenix('.px-slider'),
            MediaEls = Phenix(".px-media"); //===> Run Phenix Components <===//

        if (MediaEls.length > 0) MediaEls.multimedia();
        if (Sliders.length > 0) Sliders.addClass('edit-mode').slider();
      }, 2000);
    }
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setPhenixView();
  }, [attributes]); //===> Fetch Data for Options <===//

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    //===> Fetch Post Types <===//
    if (postTypes.length < 2) _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: 'wp/v2/types'
    }).then(function (post_types) {
      //===> Reset Types <===//
      var new_types = [{
        "value": "default",
        "label": "Default"
      }]; //===> Get Current Active Types <===//

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


      if (new_types.length > 0) setPostTypes([].concat(new_types));
    });
  }, []); //===> Responsive Options <===//

  var responsive_options = function responsive_options(screen) {
    return "Testing Screen " + screen;
  }; //===> Render <===//


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General Setting", "phenix"),
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Data Type", "phenix"),
    value: attributes.post_type,
    onChange: set_post_type,
    options: postTypes
  }), attributes.post_type !== 'default' ? /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slider Mode", "phenix"),
    checked: attributes.slider_mode,
    onChange: set_slider_mode
  })))), attributes.grid_mode && !attributes.slider_mode ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loop Grid", "phenix"),
    initialOpen: true
  }, !attributes.grid.state ? /*#__PURE__*/React.createElement("div", {
    className: "mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Columns in Row", "phenix"),
    icon: "far fa-mobile-android",
    value: ((_attributes$grid$cols = attributes.grid.cols) === null || _attributes$grid$cols === void 0 ? void 0 : _attributes$grid$cols.replace("row-cols-", "")) || 1,
    onChange: set_grid_cols,
    min: 0,
    max: 12
  })) : "", /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "grid-state",
    checked: attributes.grid.state,
    onChange: set_grid_state,
    type: "switch-checkbox",
    className: "small"
  }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Free Columns Size ?", "phenix"))), /*#__PURE__*/React.createElement("div", {
    className: "row gpx-15 mb-15"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "grid-state",
    value: "flow-reverse",
    checked: ((_attributes$grid$flow = attributes.grid.flow) === null || _attributes$grid$flow === void 0 ? void 0 : _attributes$grid$flow.length) > 0,
    onChange: set_grid_flow,
    type: "switch-checkbox",
    className: "small"
  }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reverse", "phenix")))), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "grid-masonry",
    value: "px-masonry",
    checked: ((_attributes$grid$maso = attributes.grid.masonry) === null || _attributes$grid$maso === void 0 ? void 0 : _attributes$grid$maso.length) > 0,
    onChange: set_grid_masonry,
    type: "switch-checkbox",
    className: "small"
  }, /*#__PURE__*/React.createElement("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Masonry", "phenix")))))) : null, attributes.slider_mode ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
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
    value: attributes.grid.cols ? attributes.grid.cols.replace("row-cols-", "") : 1,
    onChange: set_grid_cols,
    min: 0,
    max: 12
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Steps", "phenix"),
    value: attributes.slider.steps || 1,
    onChange: set_slider_steps,
    min: 1,
    max: 12
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duration", "phenix"),
    value: attributes.slider.duration || 6000,
    onChange: set_slider_duration,
    min: 3000,
    max: 20000,
    steps: 100
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Speed", "phenix"),
    value: attributes.slider.speed || 700,
    onChange: set_slider_speed,
    min: 300,
    max: 3000,
    steps: 100
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pdt-15 divider-t"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Autoplay", "phenix"),
    checked: attributes.slider.autoplay || false,
    onChange: set_slider_autoplay
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Arrows Buttons", "phenix"),
    checked: attributes.slider.controls || false,
    onChange: set_slider_controls
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Bullet Pagination", "phenix"),
    checked: attributes.slider.pagination || false,
    onChange: set_slider_pagination
  }))) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Responsive Options", "phenix"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_controls_elements_tabs__WEBPACK_IMPORTED_MODULE_8__["default"], {
    medium: responsive_options,
    large: responsive_options,
    xlarge: responsive_options
  }))), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://design.phenixthemes.com/px-assets/slider-placeholder.svg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
    block: "phenix/query",
    attributes: attributes
  }), setPhenixView()));
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

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/query","version":"0.1.0","title":"Query Loop","category":"design","description":"Custom Query Posts Block.","supports":{"html":false},"attributes":{"post_type":{"type":"string","default":"default"},"template_part":{"type":"string","default":"pds/placeholder"},"per_page":{"type":"number","default":8},"order":{"type":"string","default":"DESC"},"pagination":{"type":"boolean","default":false},"preview":{"type":"boolean","default":false},"grid_mode":{"type":"boolean","default":false},"grid":{"type":"object","default":{}},"slider_mode":{"type":"boolean","default":false},"slider":{"type":"object","default":{}},"responsive":{"type":"object","default":{}}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"px-query"}');

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