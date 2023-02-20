/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/button/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/button/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _px_controls_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../px-controls/switch */ "./src/blocks/px-controls/switch.js");
/* harmony import */ var _px_controls_uploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../px-controls/uploader */ "./src/blocks/px-controls/uploader.js");
/* harmony import */ var _px_controls_colors_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../px-controls/colors/text */ "./src/blocks/px-controls/colors/text.js");
/* harmony import */ var _px_controls_colors_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../px-controls/colors/background */ "./src/blocks/px-controls/colors/background.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  var _attributes$style$bac2, _attributes$style$bac3, _attributes$style$bac4, _attributes$style$bac5;

  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  //===> Set Settings <===//
  var set_size = function set_size(size) {
    return setAttributes({
      size: size
    });
  };

  var set_type = function set_type(type) {
    return setAttributes({
      type: type
    });
  };

  var set_label = function set_label(label) {
    return setAttributes({
      label: label
    });
  };

  var set_radius = function set_radius(radius) {
    return setAttributes({
      radius: radius
    });
  };

  var set_outline = function set_outline(outline) {
    return setAttributes({
      outline: outline
    });
  };

  var set_data_id = function set_data_id(data_id) {
    return setAttributes({
      data_id: data_id
    });
  };

  var set_iconEnd = function set_iconEnd(iconEnd) {
    return setAttributes({
      iconEnd: iconEnd
    });
  };

  var set_iconLabel = function set_iconLabel(iconLabel) {
    return setAttributes({
      iconLabel: iconLabel
    });
  };

  var set_isLightBox = function set_isLightBox(isLightBox) {
    return setAttributes({
      isLightBox: isLightBox
    });
  };

  var set_data_modal = function set_data_modal(data_modal) {
    return setAttributes({
      data_modal: data_modal
    });
  };

  var set_lightbox_src = function set_lightbox_src(lightbox_src) {
    return setAttributes({
      lightbox_src: lightbox_src
    });
  };

  var set_lightbox_type = function set_lightbox_type(lightbox_type) {
    return setAttributes({
      lightbox_type: lightbox_type
    });
  }; //===> Link Settings <===//


  var set_isLink = function set_isLink(isLink) {
    return setAttributes({
      isLink: isLink
    });
  };

  var set_inNewTab = function set_inNewTab(inNewTab) {
    return setAttributes({
      inNewTab: inNewTab
    });
  };

  var set_url = function set_url(url) {
    return setAttributes({
      url: url
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
  }; //===> Set Background <===//


  var set_background = function set_background(background) {
    //==> Get Current <==//
    var styles = attributes.style; //==> Set Value <==//

    styles.background = background;
    setAttributes({
      style: _objectSpread({}, styles)
    });
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps)();
  blockProps.className += " btn";
  var labelControl = /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    value: attributes.label,
    onChange: set_label,
    tagName: "span",
    placeholder: "TXT",
    className: "mg-0 pd-0"
  }); //===> Set Phenix Components <===//

  var setPhenixView = function setPhenixView() {
    var _attributes$style$bac;

    //===> Check Site Editor <===//
    var siteEditor = window.frames['editor-canvas'],
        blockElement = '.px-media'; //===> Correct Editor Target for Site-Editor <===//

    if (siteEditor) {
      blockElement = siteEditor.document.querySelectorAll('.px-media');
      blockElement = _toConsumableArray(blockElement);
    } //===> Set Background <===//


    if (((_attributes$style$bac = attributes.style.background) === null || _attributes$style$bac === void 0 ? void 0 : _attributes$style$bac.type) === 'image') Phenix(blockElement).multimedia();
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return setPhenixView();
  }, [attributes]); //===> Initial Script <===//

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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
  }, []); //===> Typography Properties <===//

  if (attributes.typography) {
    if (attributes.typography.size) blockProps.className += " ".concat(attributes.typography.size);
    if (attributes.typography.color) blockProps.className += " ".concat(attributes.typography.color);
    if (attributes.typography.weight) blockProps.className += " ".concat(attributes.typography.weight);
    if (attributes.typography.align) blockProps.className += " ".concat(attributes.typography.align);
  } //===> Render Background <===//


  if ((_attributes$style$bac2 = attributes.style.background) !== null && _attributes$style$bac2 !== void 0 && _attributes$style$bac2.value) {
    //===> Image Background <===//
    if (attributes.style.background.type === 'image') {
      blockProps.className += " px-media";
      blockProps["data-src"] = attributes.style.background.value;
    } //===> Name Background <===//
    else {
      //===> Adjust Primary Colors <===//
      var isPrimary = false,
          primaryColors = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"]; //===> Correct Colors <===//

      primaryColors.forEach(function (color) {
        return attributes.style.background.value === color ? isPrimary = true : null;
      }); //===> Set the Background <===//

      if (isPrimary) {
        blockProps.className += " ".concat(attributes.style.background.value.replace('bg-', ''));
      } else {
        blockProps.className += " ".concat(attributes.style.background.value);
      }
    } //===> Background Rotation <===//


    if (attributes.style.background.rotate) blockProps.className += " ".concat(attributes.style.background.rotate);
  } //===> Default Type <===//


  if (attributes.type) blockProps.className += " ".concat(attributes.type); //===> Default Size <===//

  if (attributes.size) blockProps.className += " ".concat(attributes.size); //===> Default Radius <===//

  if (attributes.radius) blockProps.className += " ".concat(attributes.radius); //===> Default Style <===//

  if (attributes.outline) blockProps.className += " outline"; //===> Set JS URL <===//

  if (attributes.isLink) blockProps['href'] = "#none"; //===> URL Auto-Complete <===//

  var suggestionsRender = function suggestionsRender(props) {
    return /*#__PURE__*/React.createElement("ul", {
      className: "fluid reset-list bg-white bx-shadow-dp-1 border-1 border-solid border-alpha-10 z-index-dropdown position-ab pos-start-0 pos-after-y"
    }, props.suggestions.map(function (suggestion, index) {
      return /*#__PURE__*/React.createElement("li", {
        key: "link-sug-key-".concat(index),
        className: "pdx-15 pdy-5 fs-12 divider-b mouse-pointer",
        onClick: function onClick() {
          return props.handleSuggestionClick(suggestion);
        }
      }, /*#__PURE__*/React.createElement("strong", null, suggestion.title), /*#__PURE__*/React.createElement("span", {
        className: "display-block fs-10 color-primary tx-nowrap"
      }, suggestion.url));
    }));
  }; //===> Render <===//


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "inspector"
  }, attributes.isLink ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Link Settings"
  }, /*#__PURE__*/React.createElement("span", {
    className: "color-primary tx-icon far fa-link display-block mb-10"
  }, attributes.url), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalLinkControlSearchInput, {
    placeholder: "URL or Page Name",
    onChange: set_url,
    value: attributes.url,
    allowDirectEntry: false,
    withURLSuggestion: false,
    withCreateSuggestion: false,
    renderSuggestions: function renderSuggestions(props) {
      return suggestionsRender(props);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Open in New Tab ?",
    checked: attributes.inNewTab,
    onChange: set_inNewTab
  }))) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "General Settings"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mb-10 weight-medium"
  }, "Button Type"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadioGroup, {
    label: "Button Type",
    onChange: set_type,
    defaultChecked: attributes.type
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "normal"
  }, "Default"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "square"
  }, "icon only"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "btn-icon"
  }, "with icon")), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t"
  }), /*#__PURE__*/React.createElement("label", {
    className: "mb-10 weight-medium"
  }, "Button Size"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadioGroup, {
    label: "Button Size",
    onChange: set_size,
    defaultChecked: attributes.size
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "normal"
  }, "Default"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "tiny"
  }, "XS"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "small"
  }, "SM"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "large"
  }, "LG"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "xlarge"
  }, "XL")), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t"
  }), /*#__PURE__*/React.createElement("label", {
    className: "mb-10 weight-medium"
  }, "Border Radius"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadioGroup, {
    label: "Button Size",
    onChange: set_radius,
    defaultChecked: attributes.radius
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "radius-none"
  }, "NO"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "radius-sm"
  }, "XS"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "radius-md"
  }, "SM"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "radius-lg"
  }, "LG"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "radius-xl"
  }, "XL"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "radius-xxl"
  }, "XXL"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "radius-circle"
  }, "Full Circle"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalRadio, {
    value: "radius-height"
  }, "Full Round")), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t"
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Outline Style",
    checked: attributes.outline,
    onChange: set_outline
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Link Button",
    checked: attributes.isLink,
    onChange: set_isLink
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Lightbox Button",
    checked: attributes.isLightBox,
    onChange: set_isLightBox
  }), attributes.type === 'btn-icon' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Icon as Label",
    checked: attributes.iconLabel,
    onChange: set_iconLabel
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Icon in the End",
    checked: attributes.iconEnd,
    onChange: set_iconEnd
  })) : null), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography", "phenix"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gpx-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    key: "typography-size",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "phenix"),
    value: attributes.typography.size || "",
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
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    key: "typography-weight",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "phenix"),
    value: attributes.typography.weight || "",
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
  }))), /*#__PURE__*/React.createElement(_px_controls_colors_text__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "px-color",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Color", "phenix"),
    onChange: set_color,
    value: attributes.typography.color || ""
  }), /*#__PURE__*/React.createElement("label", {
    className: "col-12 mb-5 tx-UpperCase"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Alignment", "phenix")), /*#__PURE__*/React.createElement("div", {
    className: "flexbox"
  }, /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "text-align",
    checked: !attributes.typography.align || attributes.typography.align === "",
    value: "",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray far fa-align-slash radius-sm"
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "text-align",
    checked: attributes.typography.align === "tx-align-start" ? true : false,
    value: "tx-align-start",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-".concat(Phenix(document).direction() === "ltr" ? 'left' : "right", " radius-sm")
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "text-align",
    checked: attributes.typography.align === "tx-align-justify" ? true : false,
    value: "tx-align-justify",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-justify radius-sm"
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "text-align",
    checked: attributes.typography.align === "tx-align-center" ? true : false,
    value: "tx-align-center",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small me-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-center radius-sm"
  })), /*#__PURE__*/React.createElement(_px_controls_switch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "text-align",
    checked: attributes.typography.align === "tx-align-end" ? true : false,
    value: "tx-align-end",
    onChange: set_typography_align,
    type: "button-radio",
    className: "small"
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn small square outline gray fs-17 far fa-align-".concat(Phenix(document).direction() === "rtl" ? 'left' : "right", " radius-sm")
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style Options", "phenix"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_controls_colors_background__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "px-bg",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background", "phenix"),
    onChange: set_background,
    type: ((_attributes$style$bac3 = attributes.style.background) === null || _attributes$style$bac3 === void 0 ? void 0 : _attributes$style$bac3.type) || "color",
    value: ((_attributes$style$bac4 = attributes.style.background) === null || _attributes$style$bac4 === void 0 ? void 0 : _attributes$style$bac4.value) || "",
    rotate: ((_attributes$style$bac5 = attributes.style.background) === null || _attributes$style$bac5 === void 0 ? void 0 : _attributes$style$bac5.rotate) || null
  })), attributes.isLightBox ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Lightbox Settings"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    key: "lightbox-type",
    label: "Lightbox Type",
    value: attributes.lightbox_type,
    onChange: set_lightbox_type,
    options: [{
      label: 'Image',
      value: 'image'
    }, {
      label: 'Video',
      value: 'video'
    }, {
      label: 'Embed',
      value: 'embed'
    }]
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: "Custom Source",
    checked: attributes.lightbox_src,
    onChange: set_lightbox_src
  }), attributes.lightbox_src ? /*#__PURE__*/React.createElement(_px_controls_uploader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Upload Source",
    type: attributes.lightbox_type,
    value: attributes.url,
    setValue: function setValue(file) {
      setAttributes({
        url: file.url
      });
    }
  }) : /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    key: "container_id",
    label: "Lightbox Source",
    value: attributes.url,
    onChange: set_url
  })) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Custom Data",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Data-ID",
    value: attributes.data_id,
    onChange: set_data_id
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Data-Modal",
    value: attributes.data_modal,
    onChange: set_data_modal
  }))), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/buttons.jpg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, attributes.isLink ? /*#__PURE__*/React.createElement("a", _extends({
    onClick: function onClick(event) {
      return event.preventDefault();
    }
  }, blockProps), attributes.type !== 'square' ? labelControl : '') : /*#__PURE__*/React.createElement("button", blockProps, attributes.type !== 'square' ? labelControl : '')));
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

/***/ "./src/blocks/button/block.json":
/*!**************************************!*\
  !*** ./src/blocks/button/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/button","version":"0.1.0","title":"PDS Button","category":"design","description":"","supports":{"html":false},"attributes":{"preview":{"type":"boolean","default":false},"isLink":{"type":"boolean","default":false},"inNewTab":{"type":"boolean","default":false},"iconLabel":{"type":"boolean","default":false},"iconEnd":{"type":"boolean","default":false},"label":{"type":"string","default":"Button"},"url":{"type":"string","default":"#none"},"type":{"type":"string","default":"normal"},"size":{"type":"string","default":"normal"},"radius":{"type":"string","default":"radius-none"},"outline":{"type":"boolean","default":false},"bg_type":{"type":"string","default":"color"},"bg_rotate":{"type":"string","default":""},"background":{"type":"string","default":"primary"},"color":{"type":"string","default":""},"data_id":{"type":"string","default":""},"data_modal":{"type":"string","default":""},"isLightBox":{"type":"boolean","default":false},"lightbox_src":{"type":"boolean","default":false},"lightbox_type":{"type":"string","default":"image"},"typography":{"type":"object","default":{}},"style":{"type":"object","default":{}},"responsive":{"type":"object","default":{}}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
/*!************************************!*\
  !*** ./src/blocks/button/index.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/button/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/button/block.json");
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
    width: "254",
    height: "254",
    viewBox: "0 0 254 254"
  }, /*#__PURE__*/React.createElement("g", {
    id: "button",
    transform: "translate(4296 3460)"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "base",
    width: "254",
    height: "254",
    transform: "translate(-4296 -3460)",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    id: "server",
    d: "M169.554,32H24.222A24.222,24.222,0,0,0,0,56.222V80.444a24.222,24.222,0,0,0,24.222,24.222H169.554a24.222,24.222,0,0,0,24.222-24.222V56.222A24.232,24.232,0,0,0,169.554,32Zm12.111,48.444a12.127,12.127,0,0,1-12.111,12.111H24.222A12.137,12.137,0,0,1,12.111,80.444V56.222A12.127,12.127,0,0,1,24.222,44.111H169.554a12.127,12.127,0,0,1,12.111,12.111ZM117.326,59.25a9.083,9.083,0,1,0,9.083,9.083A9.083,9.083,0,0,0,117.326,59.25Zm-36.333,0a9.083,9.083,0,1,0,9.083,9.083A9.083,9.083,0,0,0,80.992,59.25Z",
    transform: "translate(-4265.888 -3453.554)"
  }), /*#__PURE__*/React.createElement("path", {
    id: "server-2",
    "data-name": "server",
    d: "M181.665,91.045H12.111A12.137,12.137,0,0,0,0,103.156V151.6a12.137,12.137,0,0,0,12.111,12.111H181.665A12.137,12.137,0,0,0,193.776,151.6V103.156A12.147,12.147,0,0,0,181.665,91.045Zm-118.6,42.9V120.614h69.395v13.328Z",
    transform: "translate(-4265.889 -3415.711)"
  }))),

  /**===> @see ./edit.js <===*/
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**===> Block Output <===*/
  save: function save(_ref) {
    var attributes = _ref.attributes;
    //===> Get Block Properties <===//
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    blockProps.className += " btn";
    var background = attributes.style.background,
        typography = attributes.typography; //===> Typography Properties <===//

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
      else {
        //===> Adjust Primary Colors <===//
        var isPrimary = false,
            primaryColors = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"]; //===> Correct Colors <===//

        primaryColors.forEach(function (color) {
          return background.value === color ? isPrimary = true : null;
        }); //===> Set the Background <===//

        if (isPrimary) {
          blockProps.className += " ".concat(background.value.replace('bg-', ''));
        } else {
          blockProps.className += " ".concat(background.value);
        }
      } //===> Background Rotation <===//


      if (background.rotate) blockProps.className += " ".concat(background.rotate);
    } //===> Set JS URL <===//


    if (attributes.isLink) {
      blockProps['href'] = attributes.url;
      blockProps['rel'] = "noopener";
    }

    if (attributes.inNewTab) blockProps['target'] = "_blank"; //===> Set Custom Data <===//

    if (attributes.data_id.length > 1) {
      blockProps['data-id'] = attributes.data_id;
      blockProps.className += ' menu-toggle';
    }

    if (attributes.data_modal.length > 1) blockProps['data-modal'] = attributes.data_modal;

    if (attributes.isLightBox) {
      blockProps['href'] = attributes.url;
      blockProps.className += ' px-lightbox';
      if (attributes.lightbox_type) blockProps['data-media'] = attributes.lightbox_type;
    } //===> Type <===//


    if (attributes.type) blockProps.className += " ".concat(attributes.type); //===> Size <===//

    if (attributes.size) blockProps.className += " ".concat(attributes.size); //===> Radius <===//

    if (attributes.radius) blockProps.className += " ".concat(attributes.radius); //===> Style <===//

    if (attributes.outline) blockProps.className += " outline"; //===> Render <===//

    return /*#__PURE__*/React.createElement(React.Fragment, null, attributes.isLink ? /*#__PURE__*/React.createElement("a", blockProps, attributes.type !== "square" ? attributes.label : '') : /*#__PURE__*/React.createElement("button", blockProps, attributes.type !== "square" ? attributes.label : ''));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map