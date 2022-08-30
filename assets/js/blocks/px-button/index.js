/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/px-button/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/px-button/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _px_components_px_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../px-components/px-background */ "./src/blocks/px-components/px-background.js");
/* harmony import */ var _px_components_px_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../px-components/px-colors */ "./src/blocks/px-components/px-colors.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//====> WP Modules <====//




 //====> Edit Mode <====//

function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  //===> Set Settings <===//
  var set_label = function set_label(label) {
    return setAttributes({
      label: label
    });
  };

  var set_outline = function set_outline(outline) {
    return setAttributes({
      outline: outline
    });
  };

  var set_iconLabel = function set_iconLabel(iconLabel) {
    return setAttributes({
      iconLabel: iconLabel
    });
  };

  var set_iconEnd = function set_iconEnd(iconEnd) {
    return setAttributes({
      iconEnd: iconEnd
    });
  };

  var set_data_id = function set_data_id(data_id) {
    return setAttributes({
      data_id: data_id
    });
  };

  var set_data_modal = function set_data_modal(data_modal) {
    return setAttributes({
      data_modal: data_modal
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
  }; //===> Set Type <===//


  var set_type = function set_type(value) {
    if (attributes.className) {
      //===> Clear Old Name <===//
      var _currentNames = attributes.className.replace(attributes.type, ''); //===> Set New Name <===//


      setAttributes({
        type: value,
        className: "".concat(_currentNames, " ").concat(value)
      });
    } else setAttributes({
      type: value
    });
  }; //===> Set Size <===//


  var set_size = function set_size(value) {
    if (attributes.className) {
      //===> Clear Old Name <===//
      var _currentNames2 = attributes.className.replace(attributes.size, ''); //===> Set New Name <===//


      setAttributes({
        size: value,
        className: "".concat(_currentNames2, " ").concat(value)
      });
    } else setAttributes({
      type: value
    });
  }; //===> Set Radius <===//


  var set_radius = function set_radius(value) {
    if (attributes.className) {
      //===> Clear Old Name <===//
      var _currentNames3 = attributes.className.replace(attributes.radius, ''); //===> Set New Name <===//


      setAttributes({
        radius: value,
        className: "".concat(_currentNames3, " ").concat(value)
      });
    } else setAttributes({
      radius: value
    });
  }; //===> Set Background <===//


  var set_background = function set_background(background) {
    //===> Adjust Primary Colors <===//
    var primaryColors = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"];

    if (primaryColors.includes(background.value)) {
      background.value = background.value.replace('bg-', '');
    } //===> Original Classes <===//


    var original = attributes.className.replaceAll(/\s{2,}/g, ' '),
        current = attributes.px_bg,
        rotate = attributes.px_bg_rotate; //===> Remove Current Value <===//

    if (attributes.px_bg) original = original.replace(current, '');
    if (rotate) original = original.replace(rotate, ''); //===> Update Background <===//

    setAttributes({
      px_bg: background.value,
      px_bg_type: background.type
    }); //===> Update Rotation <===//

    if (background.rotation) {
      original = original.replace(rotate, '');
      setAttributes({
        px_bg_rotate: background.rotation
      });
    } //===> Set Background [Colors, Gradients] <===//


    setAttributes({
      className: "".concat(original, " ").concat(background.value).concat(background.rotation ? ' ' + background.rotation : '')
    });
  }; //===> Set Color <===//


  var set_color = function set_color(color) {
    //===> Get Value <===//
    var current = attributes.px_color,
        original = attributes.className.replace(/\s{2,}/g, ' '); //===> Remove Current Value <===//

    if (current) original = original.replace(current, ''); //===> Set New Value <===//

    setAttributes({
      px_color: color,
      className: "".concat(original, " ").concat(color)
    });
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)();
  var currentNames = attributes.className;
  var labelControl = /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    value: attributes.label,
    onChange: set_label,
    tagName: "span",
    placeholder: "TXT",
    className: "mg-0 pd-0"
  }); //===> Set Default Values <===//

  var setDefault = function setDefault() {
    if (currentNames) {
      //===> Clear Spaces <===//
      var current = currentNames.replace(/\s{2,}/g, ' '); //===> Name Checker <===//

      var checkName = function checkName(val) {
        //===> if its Default leave it <===//
        if (val === 'normal') return; //===> if new value set it <===//

        if (!current.includes(val)) setAttributes({
          className: "".concat(current, " ").concat(val)
        });
      }; //===> Default Color <===//


      checkName(attributes.px_bg);
      checkName(attributes.px_color); //===> Default Type <===//

      checkName(attributes.type); //===> Default Size <===//

      checkName(attributes.size); //===> Default Radius <===//

      checkName(attributes.radius); //===> Default Style <===//

      if (attributes.outline && current) {
        if (current.includes("outline")) setAttributes({
          className: "".concat(current, " outline")
        });
      }
    } else {
      setAttributes({
        className: "btn ".concat(attributes.px_bg)
      });
    }
  };

  setDefault(); //===> Set JS URL <===//

  if (attributes.isLink) blockProps['href'] = "#none";

  var suggestionsRender = function suggestionsRender(props) {
    return /*#__PURE__*/React.createElement("ul", {
      className: "fluid reset-list bg-white bx-shadow-dp-1 border-1 border-solid border-alpha-10 z-index-dropdown position-ab pos-start-0 pos-after-y"
    }, props.suggestions.map(function (suggestion, index) {
      return /*#__PURE__*/React.createElement("li", {
        className: "pdx-15 pdy-5 fs-12 divider-b",
        onClick: function onClick() {
          return props.handleSuggestionClick(suggestion);
        }
      }, /*#__PURE__*/React.createElement("strong", null, suggestion.title), /*#__PURE__*/React.createElement("span", {
        className: "display-block fs-10 color-primary tx-nowrap"
      }, suggestion.url));
    }));
  }; //===> Render <===//


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Settings"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mb-10 weight-medium"
  }, "Button Type"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadioGroup, {
    label: "Button Type",
    onChange: set_type,
    defaultChecked: attributes.type
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "normal"
  }, "Default"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "square"
  }, "icon only"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "75"
  }, "with icon")), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t"
  }), /*#__PURE__*/React.createElement("label", {
    className: "mb-10 weight-medium"
  }, "Button Size"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadioGroup, {
    label: "Button Size",
    onChange: set_size,
    defaultChecked: attributes.size
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "normal"
  }, "Default"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "tiny"
  }, "XS"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "small"
  }, "SM"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "large"
  }, "LG"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "xlarge"
  }, "XL")), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t"
  }), /*#__PURE__*/React.createElement("label", {
    className: "mb-10 weight-medium"
  }, "Border Radius"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadioGroup, {
    label: "Button Size",
    onChange: set_radius,
    defaultChecked: attributes.radius
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-none"
  }, "NO"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-sm"
  }, "XS"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-md"
  }, "SM"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-lg"
  }, "LG"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-xl"
  }, "XL"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-xxl"
  }, "XXL"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-circle"
  }, "Full Circle"), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalRadio, {
    value: "radius-height"
  }, "Full Round")), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t"
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Outline Style",
    checked: attributes.outline,
    onChange: set_outline
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Link Button",
    checked: attributes.isLink,
    onChange: set_isLink
  }), attributes.type === 'btn-icon' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Icon as Label",
    checked: attributes.iconLabel,
    onChange: set_iconLabel
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Icon in the End",
    checked: attributes.iconEnd,
    onChange: set_iconEnd
  })) : null), attributes.isLink ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Link Settings"
  }, /*#__PURE__*/React.createElement("span", {
    className: "color-primary tx-icon far fa-link display-block mb-10"
  }, attributes.url), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControlSearchInput, {
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
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Open in New Tab ?",
    checked: attributes.inNewTab,
    onChange: set_inNewTab
  }))) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Typography",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_components_px_colors__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: set_color,
    value: attributes.px_color
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Background",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_components_px_background__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: set_background,
    type: attributes.px_bg_type,
    value: attributes.px_bg
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Custom Data",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Data-ID",
    value: attributes.data_id,
    onChange: set_data_id
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Data-Modal",
    value: attributes.data_modal,
    onChange: set_data_modal
  }))), attributes.isLink ? /*#__PURE__*/React.createElement("a", _extends({
    onClick: function onClick(event) {
      return event.preventDefault();
    }
  }, blockProps), attributes.type !== 'square' ? labelControl : '') : /*#__PURE__*/React.createElement("button", blockProps, attributes.type !== 'square' ? labelControl : ''));
}

/***/ }),

/***/ "./src/blocks/px-components/media-uploader.js":
/*!****************************************************!*\
  !*** ./src/blocks/px-components/media-uploader.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MediaUploader)
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
          setValue = _this$props.setValue; //===> Output <===//

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
        onSelect: setValue,
        value: value,
        render: function render(_ref) {
          var open = _ref.open;
          return /*#__PURE__*/React.createElement("div", {
            className: "mb-15 cursor-pointer",
            onClick: open
          }, label ? /*#__PURE__*/React.createElement("label", {
            "for": "change-media",
            className: "mb-10"
          }, label) : '', /*#__PURE__*/React.createElement("div", {
            className: "flexbox align-center-y align-between"
          }, size === 'small' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
            src: value,
            style: {
              "max-height": "2.25rem"
            }
          }), /*#__PURE__*/React.createElement("button", {
            key: "change-media",
            onClick: open,
            className: "btn square primary small radius-sm fs-12 fas fa-upload"
          })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
            src: value,
            className: "radius-sm radius-top",
            style: {
              "maxWidth": "100%",
              "display": "block"
            }
          }), /*#__PURE__*/React.createElement("button", {
            key: "change-media",
            onClick: open,
            className: "btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon"
          }, "Select Image"))));
        }
      }));
    }
  }]);

  return MediaUploader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component);



/***/ }),

/***/ "./src/blocks/px-components/px-background.js":
/*!***************************************************!*\
  !*** ./src/blocks/px-components/px-background.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhenixBackground)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _px_components_media_uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../px-components/media-uploader */ "./src/blocks/px-components/media-uploader.js");
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
      main: ["bg-transparent", "bg-primary", "bg-secondary", "bg-secondary-dark", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-alpha-05", "bg-alpha-10", "bg-alpha-25", "bg-alpha-50", "bg-alpha-75"],
      offwhite: ["bg-offwhite-primary", "bg-offwhite-secondary", "bg-offwhite-info", "bg-offwhite-success", "bg-ffwhite-danger", "bg-offwhite-warning", "bg-offwhite-smoke", "bg-offwhite-smoke", "bg-offwhite-gray", "bg-offwhite-snow", "bg-offwhite-snow", "bg-offwhite-honeydew", "bg-offwhite-mintcream", "bg-offwhite-aliceblue", "bg-offwhite-ghost", "bg-offwhite-seashell", "bg-offwhite-beige", "bg-offwhite-oldlace", "bg-offwhite-floral", "bg-offwhite-ivory", "bg-offwhite-antique", "bg-offwhite-linen", "bg-offwhite-lavenderblush"],
      brands: ["bg-facebook", "bg-twitter", "bg-youtube", "bg-instagram", "bg-snapchat", "bg-whatsapp", "bg-pinterest", "bg-linkedin", "bg-behance", "bg-dribbble", "bg-flicker"],
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
          onChange = _this$props.onChange; //===> Returned Value <===//

      var options = {}; //===> Type Activator <===//

      var activeBtn = function activeBtn(current) {
        return type === current ? 'primary' : 'light';
      };

      var activeTab = function activeTab(current) {
        return type === current ? '' : 'hidden';
      }; //===> Set Background <===//


      var setBackground = function setBackground(clicked) {
        //===> Colors & Gradients <===//
        if (clicked.target) {
          //===> Get Value <===//
          var button = clicked.target,
              btnType = button.getAttribute('data-type'),
              btnValue = button.getAttribute('data-value'); //===> Rotate Gradient <===//

          if (btnType === 'rotate') {
            //===> Clear Exisitng Directions <===//
            var current = options.value,
                saved = value.replaceAll('   ', ''); //===> Clear Exisitng Directions <===//

            _this2.state.rotation.forEach(function (name) {
              if (name !== btnValue) {
                saved = saved.replaceAll(name, '').replaceAll(' n', '');
                if (current) options.value = current.replaceAll(name, '').replaceAll(' n', '');
              }

              ;
            }); //===> Set New Direction <===//


            options.type = 'gradient';
            options.value = saved;
            options.rotation = btnValue;
          } else {
            //===> Set Background <===//
            options.type = btnType;
            options.value = btnValue;
            options.rotation = null;
          }
        } //===> Image Type <===//
        else {
          //===> Set New Direction <===//
          options.type = 'image';
          options.value = clicked.url;
        } //===> Return Options <===//


        return onChange(options);
      }; //===> Buttons Creator <===//


      var makeButtons = function makeButtons(list, type) {
        var output = []; //===> for each item <===//

        for (var index = 0; index < list.length; index++) {
          //===> Get Value <===//
          var name = list[index]; //===> Convert to Title <===//

          var title = list[index].replace('bg-', '');
          title = title.replace('-', ' ');
          title = title.replace('grade', ''); //===> UpperCase Title <===//

          title = title.replace(/^\w/, function (c) {
            return c.toUpperCase();
          });
          output.push( /*#__PURE__*/React.createElement("button", {
            key: "".concat(name, "-").concat(index),
            onClick: setBackground,
            title: title,
            "data-value": name,
            "data-type": type,
            className: "".concat(name, " btn square tiny radius-circle border-1 border-solid border-alpha-25 mb-10 me-10 ").concat(value.includes(name) ? 'px-active' : '')
          }));
        } //===> Return Buttons <===//


        return output;
      }; //===> Icons Buttons <===//


      var makeRotations = function makeRotations(list, type) {
        var output = []; //===> for each item <===//

        for (var index = 0; index < list.length; index++) {
          //===> Get Value <===//
          var name = list[index]; //===> Rotation <===//

          var rotation = name.replace('bg-grade-', '');
          if (name.endsWith('n')) rotation = "-".concat(rotation.slice(0, -1)); //===> Get Value <===//

          output.push( /*#__PURE__*/React.createElement("button", {
            key: "".concat(name, "-").concat(index),
            "data-type": type,
            onClick: setBackground,
            "data-value": name,
            className: "btn square tiny light ".concat(value.includes(name) ? 'px-active' : '')
          }, /*#__PURE__*/React.createElement("i", {
            className: "inline-block fas fa-arrow-to-bottom",
            style: {
              transform: "rotate(".concat(rotation, "deg)")
            }
          })));
        } //===> Return Buttons <===//


        return output;
      }; //===> Options Changer <===//


      var changeTab = function changeTab(clicked) {
        var _optionsList$querySel;

        //===> Option Data <===//
        var element = Phenix(clicked.target),
            parent = element.ancestor('.options-tabs'),
            optionsList = Phenix(parent).next('.options-list'),
            currentActive = Phenix(parent.querySelector('.primary')),
            currentType = "".concat(element[0].getAttribute('data-value'), "-options"),
            targetElement = optionsList.querySelector(".".concat(currentType)); //===> Change Active <===//

        currentActive.addClass('light').removeClass('primary');
        element.addClass('primary').removeClass('light'); //===> Show Options <===//

        (_optionsList$querySel = optionsList.querySelector('.flexbox:not(.hidden)')) === null || _optionsList$querySel === void 0 ? void 0 : _optionsList$querySel.classList.add('hidden');
        Phenix(targetElement).removeClass('hidden');
      }; //===> Component Design <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("div", {
        className: "options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20"
      }, /*#__PURE__*/React.createElement("button", {
        key: "color",
        className: "btn tiny col ".concat(activeBtn('color')),
        onClick: changeTab,
        "data-value": "color"
      }, "Colors"), /*#__PURE__*/React.createElement("button", {
        key: "gradient",
        className: "btn tiny col ".concat(activeBtn('gradient')),
        onClick: changeTab,
        "data-value": "gradient"
      }, "Gradients"), /*#__PURE__*/React.createElement("button", {
        key: "image",
        className: "btn tiny col ".concat(activeBtn('image')),
        onClick: changeTab,
        "data-value": "image"
      }, "Image"), /*#__PURE__*/React.createElement("button", {
        key: "more",
        className: "btn tiny bg-offwhite-smoke col far fa-ellipsis-v",
        style: {
          padding: '0 8px'
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "options-list"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexbox color-options ".concat(activeTab('color'))
      }, makeButtons(this.state.main, 'color'), /*#__PURE__*/React.createElement("span", {
        className: "display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
      }), makeButtons(this.state.offwhite, 'color'), /*#__PURE__*/React.createElement("span", {
        className: "display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
      }), makeButtons(this.state.brands, 'color')), /*#__PURE__*/React.createElement("div", {
        className: "flexbox gradient-options ".concat(activeTab('gradient'))
      }, makeButtons(this.state.gradients, 'gradient'), /*#__PURE__*/React.createElement("span", {
        className: "display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
      }), /*#__PURE__*/React.createElement("label", {
        className: "mb-10 col-12"
      }, "Gradient Direction"), /*#__PURE__*/React.createElement("div", {
        className: "px-group icon-btns radius-sm border-1 border-solid border-alpha-10 borderd-group mb-10"
      }, makeRotations(this.state.rotation, 'rotate'))), /*#__PURE__*/React.createElement("div", {
        className: "flexbox image-options ".concat(activeTab('image'))
      }, /*#__PURE__*/React.createElement(_px_components_media_uploader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: "image-background",
        value: type !== 'image' ? this.state.placeholder : value,
        setValue: setBackground
      }))));
    }
  }]);

  return PhenixBackground;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-components/px-colors.js":
/*!***********************************************!*\
  !*** ./src/blocks/px-components/px-colors.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhenixColors)
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
          onChange = _this$props.onChange; //===> Colors List <===//

      var pxPallete = {
        main: ["color-inherit", "color-primary", "color-secondary", "color-gray", "color-dark", "color-white", "color-success", "color-danger", "color-warning", "color-info", "color-transparent"],
        brands: ["color-facebook", "color-twitter", "color-youtube", "color-instagram", "color-snapchat", "color-whatsapp", "color-pinterest", "color-linkedin", "color-behance", "color-dribbble", "color-flicker"]
      }; //===> Set Background <===//

      var setColor = function setColor(clicked) {
        //===> Get Value <===//
        var button = clicked.target,
            value = button.getAttribute('data-value'); //===> Return Options <===//

        return onChange(value);
      }; //===> Buttons Creator <===//


      var makeButtons = function makeButtons(list, prefix) {
        var output = []; //===> for each item <===//

        for (var index = 0; index < list.length; index++) {
          //===> Get Value <===//
          var name = list[index]; //===> Convert to Title <===//

          var title = list[index].replace('color-', '');
          title = title.replace('-', ' '); //===> UpperCase Title <===//

          title = title.replace(/^\w/, function (c) {
            return c.toUpperCase();
          });
          output.push( /*#__PURE__*/React.createElement("button", {
            key: "".concat(name, "-").concat(prefix),
            onClick: setColor,
            title: title,
            "data-value": name,
            className: "".concat(name.replace('color-', 'bg-'), " btn square tiny radius-circle border-1 border-solid border-alpha-25 mb-10 me-10 ").concat(value === name ? 'px-active' : null)
          }));
        } //===> Return Buttons <===//


        return output;
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("label", {
        className: "mb-10"
      }, "Select Color"), /*#__PURE__*/React.createElement("div", {
        className: "flexbox options-list"
      }, makeButtons(pxPallete.main, 'main'), /*#__PURE__*/React.createElement("span", {
        className: "border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
      }), makeButtons(pxPallete.brands, 'brands')));
    }
  }]);

  return PhenixColors;
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

/***/ "./src/blocks/px-button/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/px-button/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/px-button","version":"0.1.0","title":"PDS Button","category":"design","description":"Phenix Design System Button Component","supports":{"html":false},"attributes":{"isLink":{"type":"boolean","default":false},"inNewTab":{"type":"boolean","default":false},"iconLabel":{"type":"boolean","default":false},"iconEnd":{"type":"boolean","default":false},"label":{"type":"string","default":"Button"},"url":{"type":"string","default":"#none"},"type":{"type":"string","default":"normal"},"size":{"type":"string","default":"normal"},"radius":{"type":"string","default":"radius-none"},"outline":{"type":"boolean","default":false},"px_bg_type":{"type":"string","default":"color"},"px_bg_rotate":{"type":"string","default":""},"px_bg":{"type":"string","default":"primary"},"px_color":{"type":"string","default":""},"data_id":{"type":"string","default":""},"data_modal":{"type":"string","default":""},"className":{"type":"string","default":"btn primary"}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
/*!***************************************!*\
  !*** ./src/blocks/px-button/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/px-button/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/px-button/block.json");
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
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(); //===> Set JS URL <===//

    if (attributes.isLink) {
      blockProps['href'] = attributes.url;
      blockProps['rel'] = "noopener";
    }

    if (attributes.inNewTab) blockProps['target'] = "_blank"; //===> Set Custom Data <===//

    if (attributes.data_id.length > 1) blockProps['data-id'] = attributes.data_id;
    if (attributes.data_modal.length > 1) blockProps['data-modal'] = attributes.data_modal; //===> Render <===//

    return /*#__PURE__*/React.createElement(React.Fragment, null, attributes.isLink ? /*#__PURE__*/React.createElement("a", blockProps, attributes.type !== "square" ? attributes.label : '') : /*#__PURE__*/React.createElement("button", blockProps, attributes.type !== "square" ? attributes.label : ''));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map