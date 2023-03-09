/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/navigation/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/navigation/edit.js ***!
  \***************************************/
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
/* harmony import */ var _px_controls_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../px-controls/icons */ "./src/blocks/px-controls/icons.js");
/* harmony import */ var _px_controls_colors_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../px-controls/colors/text */ "./src/blocks/px-controls/colors/text.js");
/* harmony import */ var _px_controls_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../px-controls/switch */ "./src/blocks/px-controls/switch.js");
/* harmony import */ var _px_controls_colors_background__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../px-controls/colors/background */ "./src/blocks/px-controls/colors/background.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
  var _attributes$style$bac, _attributes$style$bac2, _attributes$style$bac3, _attributes$style$bac4, _attributes$style$bac5, _attributes$style$bac6;

  //===> Get Properties <===//
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      menus_list = _useState2[0],
      set_menu_list = _useState2[1];

  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      icons_list = _useState4[0],
      set_icons_list = _useState4[1];

  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("5-free"),
      _useState6 = _slicedToArray(_useState5, 2),
      icons_version = _useState6[0],
      set_icons_version = _useState6[1]; //===> Set Attributes <===//


  var set_menu_id = function set_menu_id(menu_id) {
    return setAttributes({
      menu_id: menu_id
    });
  };

  var set_tagName = function set_tagName(tagName) {
    return setAttributes({
      tagName: tagName
    });
  };

  var set_hover = function set_hover(hover) {
    return setAttributes({
      hover: hover
    });
  };

  var set_effect = function set_effect(effect) {
    return setAttributes({
      effect: effect
    });
  };

  var set_arrow_icon = function set_arrow_icon(icon) {
    return setAttributes({
      arrow_icon: "".concat(icon.type, " ").concat(icon.value)
    });
  };

  var set_direction = function set_direction(direction) {
    return setAttributes({
      direction: direction
    });
  };

  var set_mobile_mode = function set_mobile_mode(mobile_mode) {
    return setAttributes({
      mobile_mode: mobile_mode
    });
  };

  var set_responsive = function set_responsive(responsive) {
    return setAttributes({
      responsive: responsive
    });
  };

  var set_trigger = function set_trigger(trigger) {
    return setAttributes({
      trigger: trigger
    });
  }; //===> Typography Options <===//


  var set_typography_size = function set_typography_size(value) {
    //==> Get Current <==//
    var typography = attributes.typography; //==> Set Value <==//

    typography.size = value;
    setAttributes({
      typography: _objectSpread({}, typography)
    });
  }; //==> Weight <==//


  var set_typography_weight = function set_typography_weight(value) {
    //==> Get Current <==//
    var typography = attributes.typography; //==> Set Value <==//

    typography.weight = value;
    setAttributes({
      typography: _objectSpread({}, typography)
    });
  }; //==> Align <==//


  var set_typography_align = function set_typography_align(target) {
    //==> Get Current <==//
    var typography = attributes.typography; //==> Set Value <==//

    typography.align = target.checked ? target.value : "";
    setAttributes({
      typography: _objectSpread({}, typography)
    });
  }; //==> Color <==//


  var set_color = function set_color(value) {
    //==> Get Current <==//
    var typography = attributes.typography; //==> Set Value <==//

    typography.color = value;
    setAttributes({
      typography: _objectSpread({}, typography)
    });
  };

  var set_color_hvr = function set_color_hvr(value) {
    //==> Get Current <==//
    var typography = attributes.typography; //==> Set Value <==//

    typography.color_hvr = value;
    setAttributes({
      typography: _objectSpread({}, typography)
    });
  }; //===> Set Background <===//


  var set_background = function set_background(background) {
    //==> Get Current <==//
    var styles = attributes.style; //==> Set Value <==//

    styles.background = background;
    setAttributes({
      style: _objectSpread({}, styles)
    });
  };

  var set_background_hvr = function set_background_hvr(background) {
    //==> Get Current <==//
    var styles = attributes.style; //==> Set Value <==//

    styles.background_hvr = background;
    setAttributes({
      style: _objectSpread({}, styles)
    });
  }; //===> Sharp Icons Fallback <===//


  var arrow_ops = attributes.arrow_icon.split(" "),
      arrowIcon = arrow_ops[1],
      arrowType = arrow_ops[0];

  if (attributes.arrow_icon.includes('fa-sharp')) {
    arrowType = "".concat(arrow_ops[0], " ").concat(arrow_ops[1]), arrowIcon = arrow_ops[2];
  } //===> Fetching Data <===//


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: 'pds-blocks/v2/options'
    }).then(function (options) {
      //===> Create New Array <===//
      var locations = options.menu_locations,
          menus_new_list = [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", 'phenix'),
        value: ""
      }]; //===> Prepare Each Location for Select Array <===//

      for (var _i2 = 0, _Object$entries = Object.entries(locations); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        menus_new_list.push({
          label: value,
          value: key
        });
      } //===> Set New Locations List <===//


      if (menus_list !== menus_new_list) set_menu_list([].concat(menus_new_list)); //===> Fetch Icons List <===//

      var filename = "".concat(options.pds_icon_font.replace("fontawesome-", "fa")); //===> Correct Icons <===//

      if (attributes.arrow_icon.split(" ")[0] === "fab") filename = filename.replace(filename.includes("free") ? "free" : "pro", "brands");
      if (filename.includes('pro')) set_icons_version(icons_version.replace("free", "pro"));
      if (filename.includes('6')) set_icons_version(icons_version.replace("5", "6")); //===> Start Fetching <===//

      fetch("".concat(PDS_WP_KEY.json, "/").concat(filename, ".json")).then(function (res) {
        return res.json();
      }).then(function (json) {
        var iconsList = json.icons;
        if (iconsList !== icons_list) set_icons_list(_toConsumableArray(iconsList));
      });
    });
  }, []); //===> Render <===//

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Setting",
    initialOpen: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gpx-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Location (ID)", "phenix"),
    value: attributes.menu_id,
    onChange: set_menu_id,
    options: menus_list
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    key: "direction",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Direction", "phenix"),
    value: attributes.direction,
    onChange: set_direction,
    options: [{
      label: 'Vertical',
      value: 'px-vertical'
    }, {
      label: 'Horizontal',
      value: 'flexbox'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    key: "tagName",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("HTML Tag", "phenix"),
    value: attributes.tagName,
    onChange: set_tagName,
    options: [{
      label: '<nav>',
      value: 'nav'
    }, {
      label: '<main>',
      value: 'main'
    }, {
      label: '<aside>',
      value: 'aside'
    }, {
      label: '<div>',
      value: 'div'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Responsive",
    checked: attributes.responsive,
    onChange: set_responsive
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
    value: attributes.typography.size || "",
    onChange: set_typography_size,
    options: [{
      label: 'Default',
      value: ''
    }, {
      label: '12px',
      value: '12px'
    }, {
      label: '13px',
      value: '13px'
    }, {
      label: '14px',
      value: '14px'
    }, {
      label: '15px',
      value: '15px'
    }, {
      label: '16px',
      value: '16px'
    }, {
      label: '17px',
      value: '17px'
    }, {
      label: '18px',
      value: '18px'
    }, {
      label: '19px',
      value: '19px'
    }, {
      label: '20px',
      value: '20px'
    }, {
      label: '22px',
      value: '22px'
    }, {
      label: '24px',
      value: '24px'
    }, {
      label: '25px',
      value: '25px'
    }, {
      label: '26px',
      value: '26px'
    }, {
      label: '28px',
      value: '28px'
    }, {
      label: '30px',
      value: '30px'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    key: "typography-weight",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "phenix"),
    value: attributes.typography.weight || "",
    onChange: set_typography_weight,
    options: [{
      label: 'Default',
      value: ''
    }, {
      label: 'Thin',
      value: '100'
    }, {
      label: 'Light',
      value: '300'
    }, {
      label: 'Extra Light',
      value: '200'
    }, {
      label: 'Normal',
      value: '400'
    }, {
      label: 'Medium',
      value: '500'
    }, {
      label: 'Semi-Bold',
      value: '600'
    }, {
      label: 'Bold',
      value: '700'
    }, {
      label: 'Heavy',
      value: '800'
    }, {
      label: 'Black',
      value: '900'
    }]
  }))), /*#__PURE__*/React.createElement("label", {
    className: "col-12 mb-5 tx-UpperCase"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Alignment", "phenix")), /*#__PURE__*/React.createElement("div", {
    className: "flexbox"
  }, /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "text-align",
    checked: !attributes.typography.align || attributes.typography.align === "",
    value: "",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray far fa-align-slash radius-sm"
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "text-align",
    checked: attributes.typography.align === "tx-align-start" ? true : false,
    value: "tx-align-start",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-".concat(Phenix(document).direction() === "ltr" ? 'left' : "right", " radius-sm")
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "text-align",
    checked: attributes.typography.align === "tx-align-justify" ? true : false,
    value: "tx-align-justify",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-justify radius-sm"
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "text-align",
    checked: attributes.typography.align === "tx-align-center" ? true : false,
    value: "tx-align-center",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-center radius-sm"
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "text-align",
    checked: attributes.typography.align === "tx-align-end" ? true : false,
    value: "tx-align-end",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-".concat(Phenix(document).direction() === "rtl" ? 'left' : "right", " radius-sm")
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Style Options",
    initialOpen: false
  }, /*#__PURE__*/React.createElement("label", {
    className: "mb-5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Color", "phenix")), /*#__PURE__*/React.createElement("div", {
    className: "row gpx-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_px_controls_colors_text__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "px-color",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "phenix"),
    isSmall: true,
    onChange: set_color,
    value: attributes.typography.color || ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_px_controls_colors_text__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "px-color-hvr",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover", "phenix"),
    isSmall: true,
    onChange: set_color_hvr,
    value: attributes.typography.color_hvr || ""
  }))), /*#__PURE__*/React.createElement("label", {
    className: "mb-5"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "phenix")), /*#__PURE__*/React.createElement("div", {
    className: "row gpx-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_px_controls_colors_background__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: "px-bg",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Normal", "phenix"),
    isSmall: true,
    colorsOnly: true,
    onChange: set_background,
    type: ((_attributes$style$bac = attributes.style.background) === null || _attributes$style$bac === void 0 ? void 0 : _attributes$style$bac.type) || "color",
    value: ((_attributes$style$bac2 = attributes.style.background) === null || _attributes$style$bac2 === void 0 ? void 0 : _attributes$style$bac2.value) || "",
    rotate: ((_attributes$style$bac3 = attributes.style.background) === null || _attributes$style$bac3 === void 0 ? void 0 : _attributes$style$bac3.rotate) || null
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_px_controls_colors_background__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: "px-bg-hvr",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover", "phenix"),
    isSmall: true,
    colorsOnly: true,
    onChange: set_background_hvr,
    type: ((_attributes$style$bac4 = attributes.style.background_hvr) === null || _attributes$style$bac4 === void 0 ? void 0 : _attributes$style$bac4.type) || "color",
    value: ((_attributes$style$bac5 = attributes.style.background_hvr) === null || _attributes$style$bac5 === void 0 ? void 0 : _attributes$style$bac5.value) || "",
    rotate: ((_attributes$style$bac6 = attributes.style.background_hvr) === null || _attributes$style$bac6 === void 0 ? void 0 : _attributes$style$bac6.rotate) || null
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Dropdown Options",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_controls_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "arrow_icon",
    label: "Dropdown Icon",
    icons: icons_list,
    version: icons_version,
    type: arrowType,
    value: arrowIcon,
    onChange: set_arrow_icon
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Support Hover",
    checked: attributes.hover,
    onChange: set_hover
  })), attributes.responsive ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Responsive Options",
    initialOpen: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gpx-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-5"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    key: "mobile_mode",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mode", "phenix"),
    value: attributes.mobile_mode,
    onChange: set_mobile_mode,
    options: [{
      label: 'Default',
      value: ''
    }, {
      label: 'Dropdown',
      value: 'dropdown'
    }, {
      label: 'Offcanvas',
      value: 'custom'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-5"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    key: "effect",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Effect", "phenix"),
    value: attributes.effect,
    onChange: set_effect,
    options: [{
      label: 'Default',
      value: ''
    }, {
      label: 'Sliding',
      value: 'slide'
    }, {
      label: 'Fading',
      value: 'fade'
    }, {
      label: 'Custom',
      value: 'custom'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Attach Trigger Button", "phenix"),
    checked: attributes.trigger,
    onChange: set_trigger
  }))))) : "")), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
    block: "phenix/navigation",
    attributes: attributes
  })));
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
          colorsOnly = _this$props.colorsOnly,
          isSmall = _this$props.isSmall,
          placeholder = _this$props.placeholder,
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
        className: "px-gb-component position-rv ".concat(label ? "mb-15" : "")
      }, label ? /*#__PURE__*/React.createElement("label", {
        className: "mb-10 tx-UpperCase"
      }, label) : null, /*#__PURE__*/React.createElement("div", {
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
      }, value.length > 0 ? value.replaceAll("-", " ").replace("bg", "") : placeholder ? placeholder : "Default")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
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
      }, placeholder ? placeholder : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Replace", "phenix"))), !isSmall ? /*#__PURE__*/React.createElement("i", {
        className: "fas fa-pencil fs-12 color-gray"
      }) : null), !colorsOnly ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
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
      }) : null), /*#__PURE__*/React.createElement("div", {
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
          isSmall = _this$props.isSmall,
          placeholder = _this$props.placeholder,
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
        className: "px-gb-component position-rv ".concat(label ? "mb-15" : "")
      }, label ? /*#__PURE__*/React.createElement("label", {
        className: "mb-10 tx-UpperCase"
      }, label) : null, /*#__PURE__*/React.createElement("button", {
        onClick: showPanel,
        className: "options-toggle form-control small flexbox align-between align-center-y radius-md tx-align-start border-alpha-25 mb-5",
        type: "button"
      }, /*#__PURE__*/React.createElement("span", {
        className: "me-5 radius-circle inline-block ".concat(value.length > 0 ? value.replace("color-", "bg-") : "bg-inherit"),
        style: {
          "width": "20px",
          "height": "20px"
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "col"
      }, value.length > 0 && !placeholder ? value.replaceAll("-", " ").replace("color", "") : placeholder ? placeholder : "Default"), !isSmall ? /*#__PURE__*/React.createElement("i", {
        className: "fas fa-pencil"
      }) : null), /*#__PURE__*/React.createElement("div", {
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

/***/ "./src/blocks/px-controls/icons.js":
/*!*****************************************!*\
  !*** ./src/blocks/px-controls/icons.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhenixIcons; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
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




 //===> Phenix Icons <===//

var PhenixIcons = /*#__PURE__*/function (_Component) {
  _inherits(PhenixIcons, _Component);

  var _super = _createSuper(PhenixIcons);

  function PhenixIcons() {
    _classCallCheck(this, PhenixIcons);

    return _super.apply(this, arguments);
  }

  _createClass(PhenixIcons, [{
    key: "render",
    value: //===> Render <===//
    function render() {
      //===> Properties <===//
      var _this$props = this.props,
          type = _this$props.type,
          label = _this$props.label,
          value = _this$props.value,
          icons = _this$props.icons,
          version = _this$props.version,
          onChange = _this$props.onChange; //===> Returned Value <===//

      var options = {
        type: type,
        value: value
      }; //===> Set Type <===//

      var set_value = function set_value(clicked) {
        //===> Get Value <===//
        var button = clicked.target,
            theValue = button === null || button === void 0 ? void 0 : button.getAttribute('data-value'); //===> Set Value <===//

        options.value = theValue; //===> Return Options <===//

        return onChange(options);
      };

      var set_type = function set_type(value) {
        //===> Set Value <===//
        options.type = value; //===> Return Options <===//

        return onChange(options);
      }; //===> Buttons Creator <===//


      var makeButtons = function makeButtons(list, type) {
        //===> Define Data <===//
        var buttonsList = []; //===> for each item <===//

        if (list) list.forEach(function (item) {
          return buttonsList.push( /*#__PURE__*/React.createElement("button", {
            key: "".concat(item),
            onClick: set_value,
            title: item,
            "data-value": item,
            className: "icon-btn-item ".concat(type, " ").concat(item, " reset-button ").concat(value === item ? 'px-active bg-offwhite-primary' : ""),
            style: {
              "fontSize": "17px",
              "lineHeight": "24px",
              "width": "24px",
              "height": "24px",
              "borderRadius": "3px",
              "padding": 0
            }
          }));
        }); //===> Return Buttons <===//

        return buttonsList;
      }; //===> Colors Panel <===//


      var showPanel = function showPanel(clicked) {
        var button = clicked.target,
            wrapper = Phenix(button).ancestor('.px-gb-component'),
            panel = wrapper.querySelector(".options-list"); //=== Show/Hide Panel ===//

        if (panel) {
          Phenix(button).toggleClass("px-active");
          Phenix(panel).toggleClass("px-active").slideToggle(300, 0, "flex");
        }
      }; //===> Search in icons <===//


      var iconsFilter = function iconsFilter(changed) {
        //===> Define Data <===//
        var input = changed.target,
            value = input.value,
            options = Phenix(input).ancestor(".options-list"),
            buttons = options.querySelectorAll(".icon-btn-item"); //===> Find the searched icon and hide the rest <===//

        buttons.forEach(function (button) {
          return button.getAttribute('data-value').includes(value) ? button.classList.remove("hidden") : button.classList.add("hidden");
        });
      };

      var icons_types = [{
        value: 'far',
        label: 'Regular'
      }, {
        value: 'fas',
        label: 'Solid'
      }, {
        value: 'fab',
        label: 'Brands'
      }];

      if (version.includes("pro")) {
        icons_types.push({
          value: 'fal',
          label: 'Light'
        });
        icons_types.push({
          value: 'fad',
          label: 'Duotone'
        });
      }

      if (version.includes("6")) {
        icons_types.push({
          value: 'fa-sharp fa-regular',
          label: 'Regular Sharp'
        });
        icons_types.push({
          value: 'fa-sharp fa-solid',
          label: 'Solid Sharp'
        });
      } //===> Component Design <===//


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
      }, /*#__PURE__*/React.createElement("span", {
        className: "col tx-nowrap pde-5",
        style: {
          "lineHeight": "20px"
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "pds-icon-preview inline-block me-5 radius-circle bg-alpha-05 ".concat(type, " ").concat(value, " position-rv")
      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Replace", "phenix")), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-pencil fs-12 color-gray"
      })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        key: "icons-type",
        value: type,
        onChange: set_type,
        options: icons_types
      })), /*#__PURE__*/React.createElement("div", {
        className: "overflow-y-auto flexbox options-list align-center tx-align-center px-scrollbar pdx-15 pdb-15 pdt-5 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom hidden fluid",
        style: {
          gap: "10px",
          maxHeight: "220px"
        }
      }, /*#__PURE__*/React.createElement("input", {
        name: "pds-icons-search",
        className: "reset-input pdy-5 fs-12 divider-b fluid tx-align-center",
        onChange: iconsFilter,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Search in icons", "phenix")
      }), makeButtons(icons, type)));
    }
  }]);

  return PhenixIcons;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component);



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
            className: "mouse-pointer",
            onClick: open
          }, label ? /*#__PURE__*/React.createElement("label", {
            className: "mb-5"
          }, label) : '', /*#__PURE__*/React.createElement("div", {
            className: "".concat(className ? "".concat(className) : "")
          }, size === 'small' ? /*#__PURE__*/React.createElement("div", {
            className: "flexbox align-center-y align-between pd-5 border-solid border-1 border-alpha-15 radius-sm"
          }, !type || type === 'image' ? /*#__PURE__*/React.createElement("img", {
            src: value,
            style: {
              "maxHeight": "1.5rem"
            }
          }) : null, /*#__PURE__*/React.createElement("button", {
            key: "change-media",
            onClick: open,
            className: "btn square primary tiny radius-sm fs-12 fas fa-upload"
          })) : /*#__PURE__*/React.createElement("div", {
            className: "flexbox align-center-y align-between"
          }, !type || type === 'image' ? /*#__PURE__*/React.createElement("img", {
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

/***/ "./src/blocks/navigation/block.json":
/*!******************************************!*\
  !*** ./src/blocks/navigation/block.json ***!
  \******************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/navigation","version":"0.1.0","title":"Phenix Menu","category":"design","description":"","supports":{"html":false},"attributes":{"preview":{"type":"boolean","default":false},"tagName":{"type":"string","default":"nav"},"menu_id":{"type":"string","default":""},"className":{"type":"string","default":""},"arrow_icon":{"type":"string","default":"far fa-angle-down"},"responsive":{"type":"boolean","default":false},"mobile_mode":{"type":"string","default":"dropdown"},"effect":{"type":"string","default":"slide"},"direction":{"type":"string","default":"vertical"},"hover":{"type":"boolean","default":false},"typography":{"type":"object","default":{}},"style":{"type":"object","default":{}},"responsive_ops":{"type":"object","default":{}}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"px-navigation"}');

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
/*!****************************************!*\
  !*** ./src/blocks/navigation/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/navigation/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/navigation/block.json");
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
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M232 256C232 242.7 242.7 232 256 232C269.3 232 280 242.7 280 256C280 269.3 269.3 280 256 280C242.7 280 232 269.3 232 256zM348.6 122.9C373.6 114.6 397.4 138.4 389.1 163.4L340.2 309.9C335.5 324.2 324.2 335.5 309.9 340.2L163.4 389.1C138.4 397.4 114.6 373.6 122.9 348.6L171.8 202.1C176.5 187.8 187.8 176.5 202.1 171.8L348.6 122.9zM358.7 153.3L212.2 202.1C207.5 203.7 203.7 207.5 202.1 212.2L153.3 358.7L299.8 309.9C304.5 308.3 308.3 304.5 309.9 299.8L358.7 153.3zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480z"
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