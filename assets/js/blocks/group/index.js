/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/group/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/group/edit.js ***!
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
/* harmony import */ var _px_controls_colors_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../px-controls/colors/text */ "./src/blocks/px-controls/colors/text.js");
/* harmony import */ var _px_controls_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../px-controls/switch */ "./src/blocks/px-controls/switch.js");
/* harmony import */ var _px_controls_grid_alignment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../px-controls/grid/alignment */ "./src/blocks/px-controls/grid/alignment.js");
/* harmony import */ var _px_controls_colors_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../px-controls/colors/background */ "./src/blocks/px-controls/colors/background.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//====> WP Modules <====//



 //====> Phenix Modules <====//




 //====> Edit Mode <====//

function Edit(_ref) {
  var _style_options$backgr, _style_options$backgr2, _style_options$backgr3, _flexbox_options$flow, _flexbox_options$stac, _flexbox_options$nowr;

  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  //===> Set Settings <===//
  var set_id = function set_id(id) {
    return setAttributes({
      id: id
    });
  };

  var set_tagName = function set_tagName(tagName) {
    return setAttributes({
      tagName: tagName
    });
  };

  var set_isFlexbox = function set_isFlexbox(isFlexbox) {
    return setAttributes({
      isFlexbox: isFlexbox
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
  }; //==> Flow Columns <==//


  var set_flex_stacked = function set_flex_stacked(target) {
    flexbox_options.stacked = target.checked ? target.value : "";
    setAttributes({
      flexbox: _objectSpread({}, flexbox_options)
    });
  }; //===> Typography Options <===//


  var set_typography_size = function set_typography_size(value) {
    //==> Size <==//
    typography.size = value;
    setAttributes({
      typography: _objectSpread({}, typography)
    });
  }; //==> Weight <==//


  var set_typography_weight = function set_typography_weight(value) {
    typography.weight = value;
    setAttributes({
      typography: _objectSpread({}, typography)
    });
  }; //==> Align <==//


  var set_typography_align = function set_typography_align(target) {
    typography.align = target.checked ? target.value : "";
    setAttributes({
      typography: _objectSpread({}, typography)
    });
  }; //==> Color <==//


  var set_color = function set_color(value) {
    typography.color = value;
    setAttributes({
      typography: _objectSpread({}, typography)
    });
  }; //===> Set Background <===//


  var set_background = function set_background(background) {
    style_options.background = background;
    setAttributes({
      style: _objectSpread({}, style_options)
    });
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)();
  var TagName = attributes.tagName; //===> Set Phenix Components <===//

  var setPhenixView = function setPhenixView() {
    //===> Check Site Editor <===//
    var siteEditor = window.frames['editor-canvas'],
        blockElement = '.px-media'; //===> Correct Editor Target for Site-Editor <===//

    if (siteEditor) {
      blockElement = siteEditor.document.querySelectorAll('.px-media');
      blockElement = _toConsumableArray(blockElement);
    } //===> Set Background <===//


    if ((background === null || background === void 0 ? void 0 : background.type) === 'image') Phenix(blockElement).multimedia();
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    return setPhenixView();
  }, [attributes]); //===> Initial Script <===//

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    //===> Loading FontAwesome <===//
    if (window.frames['editor-canvas']) {
      if (document.querySelector("#fontawesome-css")) {
        //===> Check in the Editor <===//
        var fontAwesome = document.querySelector("#fontawesome-css"),
            canvasAwesome = window.frames['editor-canvas'].document.querySelector("#fontawesome-css"); //===> if Font Awesome not Loaded <===//

        if (!canvasAwesome && fontAwesome) {
          var newAwesome = document.importNode(fontAwesome, true);
          window.frames['editor-canvas'].document.head.appendChild(newAwesome);
        }
      }
    }
  }, []); //===> Flexbox Options <===//

  var container = blockProps;
  if (attributes.isFlexbox) container = innerBlocksProps; //===> Flexbox Properties <===//

  if (attributes.isFlexbox) {
    container.className += ' flexbox';
    if (flexbox_options.align) container.className += " ".concat(flexbox_options.align);
    if (flexbox_options.flow) container.className += " ".concat(flexbox_options.flow);
    if (flexbox_options.nowrap) container.className += " ".concat(flexbox_options.nowrap);
    if (flexbox_options.stacked) container.className += " ".concat(flexbox_options.stacked);
  } //===> Typography Properties <===//


  if (typography) {
    if (typography.size) container.className += " ".concat(typography.size);
    if (typography.color) container.className += " ".concat(typography.color);
    if (typography.weight) container.className += " ".concat(typography.weight);
    if (typography.align) container.className += " ".concat(typography.align);
  } //===> Render Background <===//


  if (background !== null && background !== void 0 && background.value) {
    //===> Image Background <===//
    if (background.type === 'image') {
      blockProps.className += " px-media";
      blockProps["data-src"] = background.value;
    } //===> Name Background <===//
    else blockProps.className += " ".concat(background.value); //===> Background Rotation <===//


    if (background.rotate) blockProps.className += " ".concat(background.rotate);
  } //===> Render <===//


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "General Settings"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gpx-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    key: "tagName",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("HTML Tag", "phenix"),
    value: attributes.tagName,
    onChange: set_tagName,
    options: [{
      label: '<div>',
      value: 'div'
    }, {
      label: '<main>',
      value: 'main'
    }, {
      label: '<aside>',
      value: 'aside'
    }, {
      label: '<section>',
      value: 'section'
    }, {
      label: '<header>',
      value: 'header'
    }, {
      label: '<footer>',
      value: 'footer'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-5"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    key: "isFlexbox",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flexbox", "phenix"),
    checked: attributes.isFlexbox,
    onChange: set_isFlexbox
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    key: "container_id",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("HTML ID [Anchor]", "phenix"),
    value: attributes.id,
    onChange: set_id
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "phenix"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gpx-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    key: "typography-size",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "phenix"),
    value: typography.size || "",
    onChange: set_typography_size,
    options: [{
      label: 'Default',
      value: ''
    }, {
      label: '12px',
      value: 'fs-12'
    }, {
      label: '13px',
      value: 'fs-13'
    }, {
      label: '14px',
      value: 'fs-14'
    }, {
      label: '15px',
      value: 'fs-15'
    }, {
      label: '16px',
      value: 'fs-16'
    }, {
      label: '17px',
      value: 'fs-17'
    }, {
      label: '18px',
      value: 'fs-18'
    }, {
      label: '19px',
      value: 'fs-19'
    }, {
      label: '20px',
      value: 'fs-20'
    }, {
      label: '22px',
      value: 'fs-22'
    }, {
      label: '24px',
      value: 'fs-24'
    }, {
      label: '25px',
      value: 'fs-25'
    }, {
      label: '26px',
      value: 'fs-26'
    }, {
      label: '28px',
      value: 'fs-28'
    }, {
      label: '30px',
      value: 'fs-30'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    key: "typography-weight",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "phenix"),
    value: typography.weight || "",
    onChange: set_typography_weight,
    options: [{
      label: 'Default',
      value: ''
    }, {
      label: 'Thin',
      value: 'weight-thin'
    }, {
      label: 'Light',
      value: 'weight-light'
    }, {
      label: 'Extra Light',
      value: 'weight-xlight'
    }, {
      label: 'Normal',
      value: 'weight-normal'
    }, {
      label: 'Medium',
      value: 'weight-medium'
    }, {
      label: 'Semi-Bold',
      value: 'weight-bold'
    }, {
      label: 'Bold',
      value: 'weight-strong'
    }, {
      label: 'Heavy',
      value: 'weight-xbold'
    }, {
      label: 'Black',
      value: 'weight-black'
    }]
  }))), /*#__PURE__*/React.createElement(_px_controls_colors_text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: "px-color",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Color", "phenix"),
    onChange: set_color,
    value: typography.color || ""
  }), /*#__PURE__*/React.createElement("label", {
    className: "col-12 mb-5 tx-UpperCase"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Alignment", "phenix")), /*#__PURE__*/React.createElement("div", {
    className: "flexbox"
  }, /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "text-align",
    checked: !typography.align || typography.align === "",
    value: "",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray far fa-align-slash radius-sm"
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "text-align",
    checked: typography.align === "tx-align-start" ? true : false,
    value: "tx-align-start",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-".concat(Phenix(document).direction() === "ltr" ? 'left' : "right", " radius-sm")
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "text-align",
    checked: typography.align === "tx-align-justify" ? true : false,
    value: "tx-align-justify",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-justify radius-sm"
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "text-align",
    checked: typography.align === "tx-align-center" ? true : false,
    value: "tx-align-center",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-center radius-sm"
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "text-align",
    checked: typography.align === "tx-align-end" ? true : false,
    value: "tx-align-end",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-".concat(Phenix(document).direction() === "rtl" ? 'left' : "right", " radius-sm")
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style Options", "phenix"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_controls_colors_background__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "px-bg",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background", "phenix"),
    onChange: set_background,
    type: ((_style_options$backgr = style_options.background) === null || _style_options$backgr === void 0 ? void 0 : _style_options$backgr.type) || "color",
    value: ((_style_options$backgr2 = style_options.background) === null || _style_options$backgr2 === void 0 ? void 0 : _style_options$backgr2.value) || "",
    rotate: ((_style_options$backgr3 = style_options.background) === null || _style_options$backgr3 === void 0 ? void 0 : _style_options$backgr3.rotate) || null
  }), attributes.isFlexbox ? /*#__PURE__*/React.createElement("div", {
    className: "row gpx-15 divider-t pdt-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_grid_alignment__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flexbox Alignment", "phenix"),
    value: flexbox_options.align || "",
    onChange: set_alignment
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12 flexbox align-between mb-15"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-12 mb-5 tx-UpperCase"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flow Options", "phenix")), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "flex-flow",
    value: !flexbox_options.stacked || flexbox_options.stacked === "" ? "flow-reverse" : "flow-columns-reverse",
    checked: ((_flexbox_options$flow = flexbox_options.flow) === null || _flexbox_options$flow === void 0 ? void 0 : _flexbox_options$flow.length) > 0,
    onChange: set_flex_flow,
    type: "checkbox",
    className: "tiny"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reverse ", "phenix"))), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "flex-columns",
    value: "flow-columns",
    checked: ((_flexbox_options$stac = flexbox_options.stacked) === null || _flexbox_options$stac === void 0 ? void 0 : _flexbox_options$stac.length) > 0,
    onChange: set_flex_stacked,
    type: "checkbox",
    className: "tiny"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stacked", "phenix"))), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "flex-nowrap",
    value: "flow-nowrap",
    checked: ((_flexbox_options$nowr = flexbox_options.nowrap) === null || _flexbox_options$nowr === void 0 ? void 0 : _flexbox_options$nowr.length) > 0,
    onChange: set_flex_nowrap,
    type: "checkbox",
    className: "tiny"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nowrap", "phenix"))))) : null)), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/section.jpg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement(TagName, blockProps, /*#__PURE__*/React.createElement("div", innerBlocksProps)));
}

/***/ }),

/***/ "./src/blocks/px-controls/colors/background.js":
/*!*****************************************************!*\
  !*** ./src/blocks/px-controls/colors/background.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhenixBackground; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uploader */ "./src/blocks/px-controls/uploader.js");
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


 //====> Phenix Modules <====//

 //===> Phenix Background <===//

var PhenixBackground = /*#__PURE__*/function (_Component) {
  _inherits(PhenixBackground, _Component);

  var _super = _createSuper(PhenixBackground);

  function PhenixBackground() {
    var _this;

    _classCallCheck(this, PhenixBackground);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      colors: ["fas fa-redo tx-align-center", "bg-inherit", "bg-transparent", "bg-primary", "bg-primary-dark", "bg-secondary", "bg-secondary-dark", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-offwhite-primary", "bg-offwhite-secondary", "bg-offwhite-info", "bg-offwhite-success", "bg-offwhite-danger", "bg-offwhite-warning", "bg-offwhite-smoke", "bg-offwhite-gray", "bg-offwhite-snow", "bg-offwhite-honeydew", "bg-offwhite-aliceblue", "bg-offwhite-ghost", "bg-offwhite-seashell", "bg-offwhite-beige", "bg-offwhite-oldlace", "bg-offwhite-floral", "bg-offwhite-antique", "bg-offwhite-linen", "bg-offwhite-lavenderblush", "bg-alpha-05", "bg-alpha-10", "bg-alpha-15", "bg-alpha-25", "bg-alpha-50", "bg-alpha-75", "bg-facebook", "bg-twitter", "bg-youtube", "bg-instagram", "bg-snapchat", "bg-whatsapp", "bg-pinterest", "bg-linkedin", "bg-behance", "bg-dribbble", "bg-flicker"],
      gradients: ["bg-grade-primary", "bg-grade-secondary", "bg-grade-warning", "bg-grade-danger", "bg-grade-success", "bg-grade-water", "bg-grade-ice", "bg-grade-fire", "bg-grade-purple"],
      rotation: ['bg-grade-0', 'bg-grade-45', 'bg-grade-90', 'bg-grade-120', 'bg-grade-120n', 'bg-grade-90n', 'bg-grade-45n', 'bg-grade-180'],
      placeholder: "https://via.placeholder.com/480x200.webp?text=Example"
    });

    return _this;
  }

  _createClass(PhenixBackground, [{
    key: "render",
    value: //===> Render <===//
    function render() {
      var _this2 = this;

      //===> Properties <===//
      var _this$props = this.props,
          type = _this$props.type,
          value = _this$props.value,
          label = _this$props.label,
          rotate = _this$props.rotate,
          onChange = _this$props.onChange; //===> Returned Value <===//

      var options = {
        type: type,
        rotate: rotate,
        value: value
      }; //===> Set Type <===//

      var set_type = function set_type(type) {
        //===> Set Value <===//
        options.type = type; //===> change value <===//

        if (options.type === 'image') {
          options.value = _this2.state.placeholder;
        } else {
          options.value = "";
        } //===> Return Options <===//


        return onChange(options);
      }; //===> Set Type <===//


      var set_rotate = function set_rotate(rotate) {
        //===> Set Value <===//
        options.rotate = rotate; //===> change value <===//

        if (options.type !== 'gradient') options.value = ""; //===> Return Options <===//

        return onChange(options);
      }; //===> Set Background <===//


      var setBackground = function setBackground(clicked) {
        //===> Get Value <===//
        var button = clicked.target,
            value = button === null || button === void 0 ? void 0 : button.getAttribute('data-value'); //===> Colors & Gradients <===//

        if (type !== 'image') {
          options.value = value;
        } //===> Image Type <===//
        else {
          options.value = clicked.url;
        } //===> Return Options <===//


        return onChange(options);
      }; //===> Buttons Creator <===//


      var makeButtons = function makeButtons(list, type) {
        var output = []; //===> for each item <===//

        for (var index = 0; index < list.length; index++) {
          //===> Get Value <===//
          var name = list[index];
          var title = "",
              isColor = !name.includes("fa-"); //===> Convert to Title <===//

          if (isColor) {
            title = list[index].replace('bg-', '').replace('-', ' '); //===> UpperCase Title <===//

            title = title.replace(/^\w/, function (c) {
              return c.toUpperCase();
            });
          } else title = "Reset";

          output.push( /*#__PURE__*/React.createElement("button", {
            key: "".concat(name.replaceAll(" ", "-")),
            onClick: setBackground,
            title: title,
            "data-value": isColor ? name : "",
            className: "".concat(isColor ? name : "".concat(name, " color-gray fs-12"), " col reset-button ").concat(value === name ? 'px-active' : ""),
            style: {
              "width": "30px",
              "height": "16px",
              "borderRadius": "16px"
            }
          }));
        } //===> Return Buttons <===//


        return output;
      }; //===> Colors Panel <===//


      var showPanel = function showPanel(clicked) {
        var button = clicked.target,
            wrapper = Phenix(button).ancestor('.px-gb-component'),
            panel = wrapper.querySelector(".options-list"); //=== Show/Hide Panel ===//

        if (panel) {
          Phenix(button).toggleClass("px-active");
          Phenix(panel).toggleClass("px-active").slideToggle(300, 0, "flex");
        }
      }; //===> Component Design <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component position-rv mb-15"
      }, /*#__PURE__*/React.createElement("label", {
        className: "mb-10 tx-UpperCase"
      }, label), /*#__PURE__*/React.createElement("div", {
        className: "overflow-hidden form-control small flexbox border-alpha-25 mb-5 tx-align-start radius-md align-center-y pdx-0 flow-nowrap"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: showPanel,
        className: "w-max-150 fs-13 col h-min-100 reset-button options-toggle flexbox flow-nowrap align-between align-center-y pdx-10 divider-e",
        type: "button"
      }, type !== "image" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "me-5 radius-circle inline-block ".concat(value.length > 0 ? value : "bg-inherit"),
        style: {
          "width": "17px",
          "height": "17px"
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "col tx-nowrap pde-5 tx-capitalize"
      }, value.length > 0 ? value.replaceAll("-", " ").replace("bg", "") : "Default")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "me-5 radius-circle inline-block",
        style: {
          "width": "22px",
          "height": "22px",
          "backgroundImage": "url(".concat(value, ")"),
          "backgroundSize": "cover",
          "backgroundPosition": "center"
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "col tx-nowrap pde-5"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Replace", "phenix"))), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-pencil fs-12 color-gray"
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        key: "bg-type",
        value: type || "",
        onChange: set_type,
        options: [{
          label: 'color',
          value: 'color'
        }, {
          label: 'image',
          value: 'image'
        }, {
          label: 'gradient',
          value: 'gradient'
        }]
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox options-list align-between ".concat(type !== "image" ? 'pd-15 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom' : 'pdt-5', " hidden fluid"),
        style: {
          gap: "10px"
        }
      }, type === "color" ? makeButtons(this.state.colors) : type === "gradient" ? makeButtons(this.state.gradients) : null, type === "image" ? /*#__PURE__*/React.createElement(_uploader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: "upload-file",
        value: !value ? this.state.placeholder : value,
        setValue: setBackground
      }) : null, type === "gradient" ? /*#__PURE__*/React.createElement("div", {
        className: "divider-t pdt-15 col-12"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: "".concat(_("Rotation", "phenix")),
        key: "gradient-direction",
        value: rotate || "",
        onChange: set_rotate,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default', "phenix"),
          value: ''
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('45 Degree', "phenix"),
          value: 'bg-grade-45'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('-45 Degree', "phenix"),
          value: 'bg-grade-45n'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('90 Degree', "phenix"),
          value: 'bg-grade-90'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('-90 Degree', "phenix"),
          value: 'bg-grade-90n'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('120 Degree', "phenix"),
          value: 'bg-grade-120'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('-120 Degree', "phenix"),
          value: 'bg-grade-120n'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('180 Degree', "phenix"),
          value: 'bg-grade-180'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('-180 Degree', "phenix"),
          value: 'bg-grade-180n'
        }]
      })) : null));
    }
  }]);

  return PhenixBackground;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component);



/***/ }),

/***/ "./src/blocks/px-controls/colors/text.js":
/*!***********************************************!*\
  !*** ./src/blocks/px-controls/colors/text.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhenixColors; }
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
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/
//===> WordPress Modules <===//
 //===> Phenix Background <===//

var PhenixColors = /*#__PURE__*/function (_Component) {
  _inherits(PhenixColors, _Component);

  var _super = _createSuper(PhenixColors);

  function PhenixColors() {
    _classCallCheck(this, PhenixColors);

    return _super.apply(this, arguments);
  }

  _createClass(PhenixColors, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          value = _this$props.value,
          label = _this$props.label,
          onChange = _this$props.onChange; //===> Colors List <===//

      var pxPallete = ["color-inherit", "color-transparent", "color-primary", "color-primary-dark", "color-secondary", "color-secondary-dark", "color-gray", "color-dark", "color-white", "color-success", "color-danger", "color-warning", "color-info", "color-facebook", "color-twitter", "color-youtube", "color-instagram", "color-snapchat", "color-whatsapp", "color-pinterest", "color-linkedin", "color-behance", "color-dribbble", "color-flicker", "fas fa-redo tx-align-center"]; //===> Set Color <===//

      var setColor = function setColor(clicked) {
        //===> Get Value <===//
        var button = clicked.target,
            value = button.getAttribute('data-value'); //===> Return Options <===//

        return onChange(value);
      }; //===> Buttons Creator <===//


      var makeButtons = function makeButtons(list) {
        var output = []; //===> for each item <===//

        for (var index = 0; index < list.length; index++) {
          //===> Get Value <===//
          var name = list[index];
          var title = "",
              isColor = !name.includes("fa-"); //===> Convert to Title <===//

          if (isColor) {
            title = list[index].replace('color-', '').replace('-', ' '); //===> UpperCase Title <===//

            title = title.replace(/^\w/, function (c) {
              return c.toUpperCase();
            });
          } else title = "Reset";

          output.push( /*#__PURE__*/React.createElement("button", {
            key: "".concat(name.replaceAll(" ", "-")),
            onClick: setColor,
            title: title,
            "data-value": isColor ? name : "",
            className: "".concat(isColor ? name.replace('color-', 'bg-') : "".concat(name, " color-gray fs-12"), " reset-button ").concat(value === name ? 'px-active' : null),
            style: {
              "width": "30px",
              "height": "16px",
              "borderRadius": "16px"
            }
          }));
        } //===> Return Buttons <===//


        return output;
      }; //===> Colors Panel <===//


      var showPanel = function showPanel(clicked) {
        var button = clicked.target,
            panel = Phenix(button).next(".options-list"); //=== Show/Hide Panel ===//

        if (panel) {
          Phenix(button).toggleClass("px-active");
          Phenix(panel).toggleClass("px-active").slideToggle(300, 0, "flex");
        }
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component position-rv mb-15"
      }, /*#__PURE__*/React.createElement("label", {
        className: "mb-10 tx-UpperCase"
      }, label), /*#__PURE__*/React.createElement("button", {
        onClick: showPanel,
        className: "options-toggle form-control small flexbox align-between align-center-y radius-md tx-align-start border-alpha-25 mb-5",
        type: "button"
      }, /*#__PURE__*/React.createElement("span", {
        className: "me-10 radius-circle inline-block ".concat(value.length > 0 ? value.replace("color-", "bg-") : "bg-inherit"),
        style: {
          "width": "20px",
          "height": "20px"
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "col"
      }, value.length > 0 ? value.replaceAll("-", " ").replace("color", "") : "Default"), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-pencil"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox options-list align-between pd-20 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom hidden fluid",
        style: {
          gap: "10px"
        }
      }, makeButtons(pxPallete)));
    }
  }]);

  return PhenixColors;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



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

/***/ "./src/blocks/px-controls/uploader.js":
/*!********************************************!*\
  !*** ./src/blocks/px-controls/uploader.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MediaUploader; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
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

/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/
//===> WordPress Modules <===//

 //===> Media Uploader <===//

var MediaUploader = /*#__PURE__*/function (_Component) {
  _inherits(MediaUploader, _Component);

  var _super = _createSuper(MediaUploader);

  function MediaUploader() {
    _classCallCheck(this, MediaUploader);

    return _super.apply(this, arguments);
  }

  _createClass(MediaUploader, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          size = _this$props.size,
          type = _this$props.type,
          setValue = _this$props.setValue,
          className = _this$props.className; //===> Output <===//

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
        onSelect: setValue,
        value: value,
        render: function render(_ref) {
          var open = _ref.open;
          return /*#__PURE__*/React.createElement("div", {
            className: "cursor-pointer",
            onClick: open
          }, label ? /*#__PURE__*/React.createElement("label", {
            className: "mb-10 cursor-pointer"
          }, label) : '', /*#__PURE__*/React.createElement("div", {
            className: "flexbox align-center-y align-between cursor-pointer".concat(className ? "".concat(className) : "")
          }, size === 'small' ? /*#__PURE__*/React.createElement(React.Fragment, null, !type || type === 'image' ? /*#__PURE__*/React.createElement("img", {
            src: value,
            style: {
              "maxHeight": "2.25rem"
            }
          }) : null, /*#__PURE__*/React.createElement("button", {
            key: "change-media",
            onClick: open,
            className: "btn square primary small radius-sm fs-12 fas fa-upload"
          })) : /*#__PURE__*/React.createElement(React.Fragment, null, !type || type === 'image' ? /*#__PURE__*/React.createElement("img", {
            src: value,
            className: "radius-sm radius-top",
            style: {
              "maxWidth": "100%",
              "display": "block"
            }
          }) : null, /*#__PURE__*/React.createElement("button", {
            key: "change-media",
            onClick: open,
            className: "btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon"
          }, "Select File"))));
        }
      }));
    }
  }]);

  return MediaUploader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component);



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

/***/ "./src/blocks/group/block.json":
/*!*************************************!*\
  !*** ./src/blocks/group/block.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/group","version":"0.1.0","title":"PDS Group","keywords":["pds","phenix","group","wrapper","container"],"category":"design","description":"Flexbox Container to Group the Elements Together from Phenix Blocks.","supports":{"html":false},"attributes":{"id":{"type":"string","default":""},"tagName":{"type":"string","default":"div"},"preview":{"type":"boolean","default":false},"isFlexbox":{"type":"boolean","default":true},"flex_align":{"type":"string","default":""},"flexbox":{"type":"object","default":{}},"typography":{"type":"object","default":{}},"style":{"type":"object","default":{}},"responsive":{"type":"object","default":{}}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
  !*** ./src/blocks/group/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/group/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/group/block.json");
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
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.1 0H10.5c-1.7 0-3 1.4-3 3v4.5H2.9c-1.7 0-3 1.4-3 3v10.6c0 1.7 1.4 3 3 3h10.6c1.7 0 3-1.4 3-3v-4.5H21c1.7 0 3-1.4 3-3V3c.1-1.6-1.3-3-2.9-3zm-6.8 21.1c0 .5-.3.8-.8.8H2.9c-.5 0-.8-.3-.8-.8V10.6c0-.5.3-.8.8-.8h4.5v3.8c0 1.7 1.4 3 3 3h3.8v4.5zm0-6.8h-3.8c-.5 0-.8-.3-.8-.8V9.8h3.8c.5 0 .8.3.8.8v3.7zm7.5-.7c0 .5-.3.8-.8.8h-4.5v-3.8c0-1.7-1.4-3-3-3H9.7V3c0-.5.3-.8.8-.8h10.6c.5 0 .8.3.8.8v10.6z"
  })),

  /**===> @see ./edit.js <===*/
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**===> Block Output <===*/
  save: function save(_ref) {
    var attributes = _ref.attributes;
    //===> Get Block Properties <===//
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    var TagName = attributes.tagName;
    var background = attributes.style.background,
        typography = attributes.typography; //===> Flexbox Properties <===//

    if (attributes.isFlexbox) {
      blockProps.className += " flexbox";
      if (attributes.flexbox.align) blockProps.className += " ".concat(attributes.flexbox.align);
      if (attributes.flexbox.flow) blockProps.className += " ".concat(attributes.flexbox.flow);
      if (attributes.flexbox.nowrap) blockProps.className += " ".concat(attributes.flexbox.nowrap);
      if (attributes.flexbox.stacked) blockProps.className += " ".concat(attributes.flexbox.stacked);
    } //===> Typography Properties <===//


    if (typography) {
      if (typography.size) blockProps.className += " ".concat(typography.size);
      if (typography.color) blockProps.className += " ".concat(typography.color);
      if (typography.weight) blockProps.className += " ".concat(typography.weight);
      if (typography.align) blockProps.className += " ".concat(typography.align);
    } //===> Render Background <===//


    if (background !== null && background !== void 0 && background.value) {
      //===> Image Background <===//
      if (background.type === 'image') {
        blockProps.className += " px-media";
        blockProps["data-src"] = background.value;
      } //===> Name Background <===//
      else blockProps.className += " ".concat(background.value); //===> Background Rotation <===//


      if (background.rotate) blockProps.className += " ".concat(background.rotate);
    } //===> Render <===//


    return /*#__PURE__*/React.createElement(TagName, blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map