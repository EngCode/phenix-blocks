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
/* harmony import */ var _px_controls_alignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../px-controls/alignment */ "./src/blocks/px-controls/alignment.js");
/* harmony import */ var _px_controls_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../px-controls/number */ "./src/blocks/px-controls/number.js");
/* harmony import */ var _px_controls_elements_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../px-controls/elements/tabs */ "./src/blocks/px-controls/elements/tabs.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//====> WP Modules <====//


 //====> Phenix Modules <====//




 //====> Edit Mode <====//

function Edit(_ref) {
  var _attributes$flexbox$f, _attributes$flexbox$n, _attributes$flexbox$m;

  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  //===> Flexbox Options <===//
  var set_alignment = function set_alignment(alignment) {
    //==> Get Current <==//
    var flex_ops = attributes.flexbox; //==> Set Value <==//

    flex_ops.align = alignment;
    setAttributes({
      flexbox: _objectSpread({}, flex_ops)
    });
  }; //==> Flow <==//


  var set_flex_flow = function set_flex_flow(target) {
    //==> Get Current <==//
    var flex_ops = attributes.flexbox; //==> Set Value <==//

    flex_ops.flow = target.checked ? target.value : "";
    setAttributes({
      flexbox: _objectSpread({}, flex_ops)
    });
  }; //==> No-Wrap <==//


  var set_flex_nowrap = function set_flex_nowrap(target) {
    //==> Get Current <==//
    var flex_ops = attributes.flexbox; //==> Set Value <==//

    flex_ops.nowrap = target.checked ? target.value : "";
    setAttributes({
      flexbox: _objectSpread({}, flex_ops)
    });
  }; //==> Masonry <==//


  var set_flex_masonry = function set_flex_masonry(target) {
    //==> Get Current <==//
    var flex_ops = attributes.flexbox; //==> Set Value <==//

    flex_ops.masonry = target.checked ? target.value : "";
    setAttributes({
      flexbox: _objectSpread({}, flex_ops)
    });
  }; //==> Equal Columns <==//


  var set_flex_equals = function set_flex_equals(target) {
    //==> Get Current <==//
    var flex_ops = attributes.flexbox; //==> Set Value <==//

    flex_ops.equals = target.checked;
    setAttributes({
      flexbox: _objectSpread({}, flex_ops)
    });
  }; //===> Columns Options <===//


  var set_flexbox_cols = function set_flexbox_cols(value) {
    //===> Define Data <===//
    var flexbox_ops = attributes.flexbox; //===> Set Value <===//

    flexbox_ops.cols = value;
    setAttributes({
      flexbox: _objectSpread({}, flexbox_ops)
    });
  },
      set_flexbox_cols_resp = function set_flexbox_cols_resp(value, screen) {
    //===> Define Data <===//
    var flexbox_ops = attributes.flexbox; //===> Set Value <===//

    flexbox_ops["cols-".concat(screen)] = value;
    setAttributes({
      flexbox: _objectSpread({}, flexbox_ops)
    });
  },
      set_alignment_resp = function set_alignment_resp(value, screen) {
    //===> Define Data <===//
    var flexbox_ops = attributes.flexbox; //===> Set Value <===//

    flexbox_ops["align-".concat(screen)] = value;
    setAttributes({
      flexbox: _objectSpread({}, flexbox_ops)
    });
  },
      set_flex_flow_resp = function set_flex_flow_resp(value, screen) {
    //===> Define Data <===//
    var flexbox_ops = attributes.flexbox; //===> Set Value <===//

    flexbox_ops["flow-".concat(screen)] = value;
    setAttributes({
      flexbox: _objectSpread({}, flexbox_ops)
    });
  },
      set_flex_nowrap_resp = function set_flex_nowrap_resp(value, screen) {
    //===> Define Data <===//
    var flexbox_ops = attributes.flexbox; //===> Set Value <===//

    flexbox_ops["nowrap-".concat(screen)] = value;
    setAttributes({
      flexbox: _objectSpread({}, flexbox_ops)
    });
  },
      set_flex_masonry_resp = function set_flex_masonry_resp(value, screen) {
    //===> Define Data <===//
    var flexbox_ops = attributes.flexbox; //===> Set Value <===//

    flexbox_ops["masonry-".concat(screen)] = value;
    setAttributes({
      flexbox: _objectSpread({}, flexbox_ops)
    });
  }; //==> Slider Mode <==//


  var set_flex_slider = function set_flex_slider(target) {
    //==> Get Current <==//
    var flex_ops = attributes.flexbox; //==> Set Value <==//

    flex_ops.slider = target.checked;
    setAttributes({
      flexbox: _objectSpread({}, flex_ops)
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
  }; //===> Responsive Options <===//


  var responsive_options = function responsive_options(screen) {
    var _attributes$flexbox, _attributes$flexbox2, _attributes$flexbox3;

    return /*#__PURE__*/React.createElement(React.Fragment, null, attributes.flexbox.equals || attributes.flexbox.slider ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "col col-6 mb-15"
    }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Columns No.", "phenix"),
      value: attributes.flexbox["cols-".concat(screen)] ? attributes.flexbox["cols-".concat(screen)] : 1,
      onChange: function onChange(value) {
        return set_flexbox_cols_resp(value, screen);
      },
      min: 1,
      max: 12
    }))) : null, !attributes.flexbox.slider ? /*#__PURE__*/React.createElement("div", {
      className: "row gpx-15 mb-10 divider-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-12 mb-15"
    }, /*#__PURE__*/React.createElement(_px_controls_alignment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Alignment", "phenix"),
      value: attributes.flexbox["align-".concat(screen)] || "",
      onChange: function onChange(value) {
        return set_alignment_resp(value.replace('align-', "align-".concat(screen, "-")), screen);
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-12 flexbox mb-15"
    }, /*#__PURE__*/React.createElement("label", {
      className: "col-12 mb-5 tx-UpperCase"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Options", "phenix")), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "flex-".concat(screen, "-flow"),
      value: "flow-".concat(screen, "-reverse"),
      checked: ((_attributes$flexbox = attributes.flexbox["flow-".concat(screen)]) === null || _attributes$flexbox === void 0 ? void 0 : _attributes$flexbox.length) > 0,
      onChange: function onChange(value) {
        return set_flex_flow_resp(value, screen);
      },
      type: "checkbox",
      className: "tiny mb-5 me-10"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fas fa-check radius-circle"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reverse ", "phenix"))), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "flex-".concat(screen, "-nowrap"),
      value: "flow-".concat(screen, "-nowrap"),
      checked: ((_attributes$flexbox2 = attributes.flexbox["nowrap-".concat(screen)]) === null || _attributes$flexbox2 === void 0 ? void 0 : _attributes$flexbox2.length) > 0,
      onChange: function onChange(value) {
        return set_flex_nowrap_resp(value, screen);
      },
      type: "checkbox",
      className: "tiny mb-5 me-10"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fas fa-check radius-circle"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nowrap", "phenix"))), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "flex-".concat(screen, "-masonry"),
      value: "px-masonry-".concat(screen),
      checked: ((_attributes$flexbox3 = attributes.flexbox["masonry-".concat(screen)]) === null || _attributes$flexbox3 === void 0 ? void 0 : _attributes$flexbox3.length) > 0,
      onChange: function onChange(value) {
        return set_flex_masonry_resp(value, screen);
      },
      type: "checkbox",
      className: "tiny mb-5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fas fa-check radius-circle"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Masonry", "phenix"))))) : null);
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(); //===> Set Properties <===//

  innerBlocksProps.className += " ".concat(blockProps.className);
  innerBlocksProps.className += ' row'; //===> Properties <===//

  if (!attributes.flexbox.slider) {
    if (attributes.flexbox.align) innerBlocksProps.className += " ".concat(attributes.flexbox.align);
    if (attributes.flexbox.flow) innerBlocksProps.className += " ".concat(attributes.flexbox.flow);
    if (attributes.flexbox.nowrap) innerBlocksProps.className += " ".concat(attributes.flexbox.nowrap);
    if (attributes.flexbox.masonry) innerBlocksProps.className += " ".concat(attributes.flexbox.masonry);
    if (attributes.flexbox.equals && attributes.flexbox.cols) innerBlocksProps.className += " row-cols-".concat(attributes.flexbox.cols > 0 ? attributes.flexbox.cols : "auto"); //===> Responsive <===//

    var screens = ["md", "lg", "xl"];
    screens.forEach(function (screen) {
      if (attributes.flexbox["align-".concat(screen)]) innerBlocksProps.className += " ".concat(attributes.flexbox["align-".concat(screen)]);
      if (attributes.flexbox["flow-".concat(screen)]) innerBlocksProps.className += " ".concat(attributes.flexbox["flow-".concat(screen)]);
      if (attributes.flexbox["nowrap-".concat(screen)]) innerBlocksProps.className += " ".concat(attributes.flexbox["nowrap-".concat(screen)]);
      if (attributes.flexbox["masonry-".concat(screen)]) innerBlocksProps.className += " ".concat(attributes.flexbox["masonry-".concat(screen)]);
      if (attributes.flexbox.equals && attributes.flexbox["cols-".concat(screen)]) innerBlocksProps.className += " row-cols-".concat(screen, "-").concat(attributes.flexbox["cols-".concat(screen)] > 0 ? attributes.flexbox["cols-".concat(screen)] : "auto");
    });
  } //===> Slider <===//


  if (attributes.flexbox.slider && attributes.slider.preview) {
    //===> Add Slider Name <===//
    innerBlocksProps.className += ' px-slider'; //===> Set Other Options <===//

    if (attributes.slider.type) innerBlocksProps['data-type'] = attributes.slider.type;
    if (attributes.slider.steps) innerBlocksProps['data-steps'] = attributes.slider.steps;
    if (attributes.slider.speed) innerBlocksProps['data-speed'] = attributes.slider.speed;
    if (attributes.slider.duration) innerBlocksProps['data-duration'] = attributes.slider.duration;
    if (attributes.slider.controls) innerBlocksProps['data-controls'] = 1;
    if (attributes.slider.pagination) innerBlocksProps['data-pagination'] = 1;

    if (attributes.slider.hasOwnProperty('autoplay')) {
      if (attributes.slider.autoplay === true) {
        innerBlocksProps['data-autoplay'] = 1;
      } else {
        innerBlocksProps['data-autoplay'] = 0;
      }
    } //===> Responsive <===//


    var _screens = ["md", "lg", "xl"];
    if (attributes.flexbox.cols) innerBlocksProps["data-items"] = attributes.flexbox.cols > 0 ? attributes.flexbox.cols : 1;

    _screens.forEach(function (screen) {
      if (attributes.flexbox["cols-".concat(screen)] && attributes.flexbox["cols-".concat(screen)] > 0) innerBlocksProps["data-".concat(screen)] = attributes.flexbox["cols-".concat(screen)];
    });
  } //===> Render <===//


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General Settings", "phenix"),
    initialOpen: attributes.flexbox.equals || attributes.flexbox.slider ? false : true
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gpx-15 mb-10 divider-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_alignment__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Alignment", "phenix"),
    value: attributes.flexbox.align || "",
    onChange: set_alignment
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12 flexbox mb-15"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-12 mb-5 tx-UpperCase"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Options", "phenix")), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "flex-flow",
    value: "flow-reverse",
    checked: ((_attributes$flexbox$f = attributes.flexbox.flow) === null || _attributes$flexbox$f === void 0 ? void 0 : _attributes$flexbox$f.length) > 0,
    onChange: set_flex_flow,
    type: "checkbox",
    className: "tiny mb-5 me-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reverse ", "phenix"))), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "flex-nowrap",
    value: "flow-nowrap",
    checked: ((_attributes$flexbox$n = attributes.flexbox.nowrap) === null || _attributes$flexbox$n === void 0 ? void 0 : _attributes$flexbox$n.length) > 0,
    onChange: set_flex_nowrap,
    type: "checkbox",
    className: "tiny mb-5 me-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nowrap", "phenix"))), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "flex-masonry",
    value: "px-masonry",
    checked: ((_attributes$flexbox$m = attributes.flexbox.masonry) === null || _attributes$flexbox$m === void 0 ? void 0 : _attributes$flexbox$m.length) > 0,
    onChange: set_flex_masonry,
    type: "checkbox",
    className: "tiny mb-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Masonry", "phenix"))), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "flex-equals",
    checked: attributes.flexbox.equals,
    onChange: set_flex_equals,
    type: "checkbox",
    className: "tiny me-10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Equal Columns.", "phenix"))), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "flex-slider",
    checked: attributes.flexbox.slider,
    onChange: set_flex_slider,
    type: "checkbox",
    className: "tiny"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fas fa-check radius-circle"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slider Mode.", "phenix")))))), attributes.flexbox.slider ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
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
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Columns No.", "phenix"),
    value: attributes.flexbox.cols ? attributes.flexbox.cols : 1,
    onChange: set_flexbox_cols,
    min: 1,
    max: 12
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Steps", "phenix"),
    value: attributes.slider.steps || 1,
    onChange: set_slider_steps,
    min: 1,
    max: 12
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duration", "phenix"),
    value: attributes.slider.duration || 6000,
    onChange: set_slider_duration,
    min: 3000,
    max: 20000,
    steps: 100
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-15"
  }, /*#__PURE__*/React.createElement(_px_controls_number__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, /*#__PURE__*/React.createElement(_px_controls_elements_tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    md: responsive_options,
    lg: responsive_options,
    xl: responsive_options
  }))), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/row.jpg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("div", innerBlocksProps)));
}

/***/ }),

/***/ "./src/blocks/px-controls/alignment.js":
/*!*********************************************!*\
  !*** ./src/blocks/px-controls/alignment.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FlexAlignment; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch */ "./src/blocks/px-controls/switch.js");
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
          sm = _this$props.sm,
          lg = _this$props.lg,
          xl = _this$props.xl,
          md = _this$props.md;

      var screenContent = function screenContent() {}; //===> Initial Tab <===//


      if (this.state.screen === "none") {
        if (this.props.sm) this.setState({
          screen: "sm"
        });else if (this.props.md) this.setState({
          screen: "md"
        });else if (this.props.lg) this.setState({
          screen: "lg"
        });else if (this.props.xl) this.setState({
          screen: "xl"
        });
      } else {
        screenContent = this.props["".concat(this.state.screen)];
      } //===> Options Changer <===//


      var changeTab = function changeTab(clicked) {
        //===> Option Data <===//
        var element = clicked.target; //===> Show Options <===//

        _this2.setState({
          screen: element.getAttribute('data-options')
        });
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-tabs"
      }, /*#__PURE__*/React.createElement("div", {
        className: "options-tabs px-group borderd-group divider-b border-alpha-15 mb-20"
      }, this.props.sm ? /*#__PURE__*/React.createElement("button", {
        key: "mobile",
        onClick: changeTab,
        className: "btn square tiny ".concat(this.state.screen !== "sm" ? "bg-alpha-05" : "primary", " col far fa-mobile"),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mobile Screens", "phenix"),
        "data-options": "sm"
      }) : null, this.props.md ? /*#__PURE__*/React.createElement("button", {
        key: "tablet",
        onClick: changeTab,
        className: "btn square tiny ".concat(this.state.screen !== "md" ? "bg-alpha-05" : "primary", " col far fa-tablet"),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tablet Screens", "phenix"),
        "data-options": "md"
      }) : null, this.props.lg ? /*#__PURE__*/React.createElement("button", {
        key: "laptop",
        onClick: changeTab,
        className: "btn square tiny ".concat(this.state.screen !== "lg" ? "bg-alpha-05" : "primary", " col far fa-laptop"),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Desktop Screens", "phenix"),
        "data-options": "lg"
      }) : null, this.props.xl ? /*#__PURE__*/React.createElement("button", {
        key: "desktop",
        onClick: changeTab,
        className: "btn square tiny ".concat(this.state.screen !== "xl" ? "bg-alpha-05" : "primary", " col far fa-desktop"),
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("xLarge Screens", "phenix"),
        "data-options": "xl"
      }) : null), /*#__PURE__*/React.createElement("div", {
        className: "flexbox ".concat(this.state.screen, "-options")
      }, screenContent(this.state.screen)));
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
        className: "btn square small fs-13 increase-btn far fa-minus position-ab pos-start-0 pos-top-0 divider-e icon-fix"
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
        className: "btn square small fs-13 increase-btn far fa-plus divider-s icon-fix"
      }), icon ? /*#__PURE__*/React.createElement("button", {
        onClick: DecreaseNum,
        className: "btn square small fs-13 increase-btn far fa-minus divider-s icon-fix"
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

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/row","version":"0.1.0","title":"Grid Row","keywords":["pds","phenix","section","group","wrapper","row","flex","layout","grid"],"category":"design","description":"","supports":{"html":false},"attributes":{"preview":{"type":"boolean","default":false},"flexbox":{"type":"object","default":{}},"typography":{"type":"object","default":{}},"style":{"type":"object","default":{}},"responsive":{"type":"object","default":{}},"slider":{"type":"object","default":{}}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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

    if (!attributes.flexbox.slider) {
      if (attributes.flexbox.align) blockProps.className += " ".concat(attributes.flexbox.align);
      if (attributes.flexbox.flow) blockProps.className += " ".concat(attributes.flexbox.flow);
      if (attributes.flexbox.nowrap) blockProps.className += " ".concat(attributes.flexbox.nowrap);
      if (attributes.flexbox.masonry) blockProps.className += " ".concat(attributes.flexbox.masonry);
      if (attributes.flexbox.equals && attributes.flexbox.cols) blockProps.className += " row-cols-".concat(attributes.flexbox.cols > 0 ? attributes.flexbox.cols : "auto"); //===> Responsive <===//

      var screens = ["md", "lg", "xl"];
      screens.forEach(function (screen) {
        if (attributes.flexbox["align-".concat(screen)]) blockProps.className += " ".concat(attributes.flexbox["align-".concat(screen)]);
        if (attributes.flexbox["flow-".concat(screen)]) blockProps.className += " ".concat(attributes.flexbox["flow-".concat(screen)]);
        if (attributes.flexbox["nowrap-".concat(screen)]) blockProps.className += " ".concat(attributes.flexbox["nowrap-".concat(screen)]);
        if (attributes.flexbox["masonry-".concat(screen)]) blockProps.className += " ".concat(attributes.flexbox["masonry-".concat(screen)]);
        if (attributes.flexbox.equals && attributes.flexbox["cols-".concat(screen)]) blockProps.className += " row-cols-".concat(screen, "-").concat(attributes.flexbox["cols-".concat(screen)] > 0 ? attributes.flexbox["cols-".concat(screen)] : "auto");
      });
    } //===> Slider <===//


    if (attributes.flexbox.slider) {
      //===> Add Slider Name <===//
      blockProps.className += ' px-slider'; //===> Set Other Options <===//

      if (attributes.slider.type) blockProps['data-type'] = attributes.slider.type;
      if (attributes.slider.steps) blockProps['data-steps'] = attributes.slider.steps;
      if (attributes.slider.speed) blockProps['data-speed'] = attributes.slider.speed;
      if (attributes.slider.duration) blockProps['data-duration'] = attributes.slider.duration;
      if (attributes.slider.controls) blockProps['data-controls'] = 1;
      if (attributes.slider.pagination) blockProps['data-pagination'] = 1;

      if (attributes.slider.hasOwnProperty('autoplay')) {
        if (attributes.slider.autoplay === true) {
          blockProps['data-autoplay'] = 1;
        } else {
          blockProps['data-autoplay'] = 0;
        }
      } //===> Responsive <===//


      var _screens = ["md", "lg", "xl"];
      if (attributes.flexbox.cols) blockProps["data-items"] = attributes.flexbox.cols > 0 ? attributes.flexbox.cols : 1;

      _screens.forEach(function (screen) {
        if (attributes.flexbox["cols-".concat(screen)] && attributes.flexbox["cols-".concat(screen)] > 0) blockProps["data-".concat(screen)] = attributes.flexbox["cols-".concat(screen)];
      });
    } //===> Render <===//


    return /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map