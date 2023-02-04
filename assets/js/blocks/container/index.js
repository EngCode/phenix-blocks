/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/container/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/container/edit.js ***!
  \**************************************/
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
/* harmony import */ var _px_controls_grid_flex_alignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../px-controls/grid/flex-alignment */ "./src/blocks/px-controls/grid/flex-alignment.js");
/* harmony import */ var _px_controls_typography_px_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../px-controls/typography/px-colors */ "./src/blocks/px-controls/typography/px-colors.js");
/* harmony import */ var _px_controls_elements_px_background__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../px-controls/elements/px-background */ "./src/blocks/px-controls/elements/px-background.js");
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
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  //===> Set Settings <===//
  var set_id = function set_id(id) {
    return setAttributes({
      id: id
    });
  };

  var set_size = function set_size(size) {
    return setAttributes({
      size: size
    });
  };

  var set_tagName = function set_tagName(tagName) {
    return setAttributes({
      tagName: tagName
    });
  };

  var set_isSection = function set_isSection(isSection) {
    return setAttributes({
      isSection: isSection
    });
  };

  var set_isFlexbox = function set_isFlexbox(isFlexbox) {
    return setAttributes({
      isFlexbox: isFlexbox
    });
  };

  var set_isHidden = function set_isHidden(isHidden) {
    return setAttributes({
      isHidden: isHidden
    });
  }; //===> Get Options <===//


  var flexbox_options = attributes.flexbox,
      style_options = attributes.style,
      typography_opts = attributes.typography; //===> Flexbox Options <===//

  var set_alignment = function set_alignment(alignment) {
    //==> Align <==//
    flexbox_options.align = alignment;
    setAttributes({
      flexbox: _objectSpread({}, flexbox_options)
    });
  },
      //==> Flow <==//
  set_flex_flow = function set_flex_flow(flex_flow) {
    flex_flow ? flexbox_options.flow = "flow-reverse" : flexbox_options.flow = "";
    setAttributes({
      flexbox: _objectSpread({}, flexbox_options)
    });
  },
      //==> No-Wrap <==//
  set_flex_nowrap = function set_flex_nowrap(flex_nowrap) {
    flex_nowrap ? flexbox_options.nowrap = "flow-nowrap" : flexbox_options.nowrap = "";
    setAttributes({
      flexbox: _objectSpread({}, flexbox_options)
    });
  }; //===> Typography Options <===//


  var set_typography_size = function set_typography_size(value) {
    //==> Size <==//
    typography_opts.size = value;
    setAttributes({
      typography: _objectSpread({}, typography_opts)
    });
  },
      //==> Weight <==//
  set_typography_weight = function set_typography_weight(value) {
    typography_opts.weight = value;
    setAttributes({
      typography: _objectSpread({}, typography_opts)
    });
  },
      //==> Color <==//
  set_color = function set_color(value) {
    typography_opts.color = value;
    setAttributes({
      typography: _objectSpread({}, typography_opts)
    });
  }; //===> Set Background <===//


  var set_background = function set_background(background) {
    //=== Set New Value ===//
    setAttributes({
      background: background.value
    }); //===> Update Rotation <===//

    if (attributes.bg_type === 'gradient' && background.rotation) {
      setAttributes({
        bg_rotate: background.rotation
      });
    } else {
      setAttributes({
        bg_type: background.type
      });
    }
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)();
  var TagName = attributes.tagName; //===> Set Phenix View <===//

  var setPhenixView = function setPhenixView() {
    //===> Check Site Editor <===//
    var siteEditor = window.frames['editor-canvas'],
        blockElement = '.px-media'; //===> Get the Element from Site Editor <===//

    if (siteEditor) {
      blockElement = siteEditor.document.querySelectorAll('.px-media');
      blockElement = _toConsumableArray(blockElement);
      Phenix(blockElement).multimedia();
    } //===> Set Background <===//


    if (!siteEditor) Phenix(blockElement).multimedia();
  }; //===> Component is Ready <===//


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    //===> Loading FontAwesome <===//
    if (window.frames['editor-canvas']) {
      var fontAwesome = document.querySelector("#fontawesome-css");

      if (fontAwesome) {
        //===> Check in the Editor <===//
        var canvasAwesome = window.frames['editor-canvas'].document.querySelector("#fontawesome-css"); //===> if Font Awesome not Loaded <===//

        if (!canvasAwesome && fontAwesome) {
          var newAwesome = document.importNode(fontAwesome, true);
          window.frames['editor-canvas'].document.head.appendChild(newAwesome);
        }
      }
    } //===> Render Background <===//


    if (attributes.background && attributes.bg_type === 'image') setPhenixView();
  }, []); //===> for Section Convert <===//

  var container = blockProps;
  if (attributes.isSection || attributes.isFlexbox) container = innerBlocksProps; //===> Container Options <===//

  if (attributes.size) container.className += " ".concat(attributes.size);
  if (attributes.isHidden) container.className += ' hidden'; //===> Flexbox Properties <===//

  if (attributes.isFlexbox) {
    container.className += ' flexbox';
    if (flexbox_options.align) container.className += " ".concat(flexbox_options.align);
    if (flexbox_options.flow) container.className += " ".concat(flexbox_options.flow);
    if (flexbox_options.nowrap) container.className += " ".concat(flexbox_options.nowrap);
  } //===> Typography Properties <===//


  if (attributes.typography) {
    container.className += " ".concat(typography_opts.size);
    container.className += " ".concat(typography_opts.color);
    container.className += " ".concat(typography_opts.weight);
  } //===> Render Background <===//


  if (attributes.background) {
    //===> Image Background <===//
    if (attributes.bg_type === 'image') {
      blockProps.className += " px-media";
      blockProps["data-src"] = attributes.background;
    } //===> Name Background <===//
    else blockProps.className += " ".concat(attributes.background); //===> Background Rotation <===//


    if (attributes.bg_rotate) blockProps.className += " ".concat(attributes.bg_rotate);
  } //===> Render <===//


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General Settings", "phenix")
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gpx-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    key: "container_size",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Container Size", "phenix"),
    value: attributes.size,
    onChange: set_size,
    options: [{
      label: 'None',
      value: ''
    }, {
      label: 'Small',
      value: 'container-sm'
    }, {
      label: 'Medium',
      value: 'container-md'
    }, {
      label: 'Normal',
      value: 'container'
    }, {
      label: 'Large',
      value: 'container-xl'
    }, {
      label: 'Full Width',
      value: 'container-fluid'
    }]
  })), /*#__PURE__*/React.createElement("div", {
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
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wrapper ?", "phenix"),
    checked: attributes.isSection,
    onChange: set_isSection
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-5"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    key: "isFlexbox",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flexbox", "phenix"),
    checked: attributes.isFlexbox,
    onChange: set_isFlexbox
  })), /*#__PURE__*/React.createElement("div", {
    className: "col mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    key: "isHidden",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide this Block ?", "phenix"),
    checked: attributes.isHidden,
    onChange: set_isHidden
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
    value: typography_opts.size,
    onChange: set_typography_size,
    options: [{
      label: 'Default',
      value: ''
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6 mb-10"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    key: "typography-weight",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Weight", "phenix"),
    value: typography_opts.weight,
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
  }))), /*#__PURE__*/React.createElement(_px_controls_typography_px_colors__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: "px-color",
    onChange: set_color,
    value: typography_opts.color
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style Options", "phenix"),
    initialOpen: false
  }, attributes.isFlexbox ? /*#__PURE__*/React.createElement("div", {
    className: "row gpx-15 divider-b mb-20 pdb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 mb-20"
  }, /*#__PURE__*/React.createElement(_px_controls_grid_flex_alignment__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Flexbox Alignment", "phenix"),
    value: flexbox_options.align,
    onChange: set_alignment
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reverse ", "phenix"),
    checked: flexbox_options.flow.length > 0,
    onChange: set_flex_flow
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Nowrap", "phenix"),
    checked: flexbox_options.nowrap.length > 0,
    onChange: set_flex_nowrap
  }))) : null, /*#__PURE__*/React.createElement(_px_controls_elements_px_background__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: "px-bg",
    onChange: set_background,
    type: style_options.background.type,
    value: style_options.background.value
  }))), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/section.jpg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement(TagName, blockProps, /*#__PURE__*/React.createElement("div", innerBlocksProps)));
}

/***/ }),

/***/ "./src/blocks/px-controls/elements/px-background.js":
/*!**********************************************************!*\
  !*** ./src/blocks/px-controls/elements/px-background.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhenixBackground; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media-uploader */ "./src/blocks/px-controls/media-uploader.js");
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
      main: ["bg-transparent", "bg-primary", "bg-primary-dark", "bg-secondary", "bg-secondary-dark", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-alpha-05", "bg-alpha-10", "bg-alpha-25", "bg-alpha-50", "bg-alpha-75"],
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
            if (type !== 'gradient') return; //===> Get Current Value <===//

            var current = options.value || value,
                currentArray = value.split(' '); //===> Clear Current Rotation <===//

            if (currentArray.length > 0) {
              _this2.state.rotation.forEach(function (rotate) {
                //=== for each name in value ===//
                currentArray.forEach(function (item) {
                  if (item === rotate) current = current.replace(" ".concat(item), '');
                });
              });
            } //===> Set Rotation <===//


            options.value = "".concat(current, " ").concat(btnValue);
            options.type = 'gradient';
          } //===> Set Background Name <===//
          else {
            options.type = btnType;
            options.value = btnValue;
            if (btnType !== 'gradient') options.rotation = null;
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

        var _loop = function _loop(index) {
          //===> Get Value <===//
          var name = list[index]; //===> Convert to Title <===//

          var title = list[index].replace('bg-', '');
          title = title.replace('-', ' ');
          title = title.replace('grade', ''); //===> UpperCase Title <===//

          title = title.replace(/^\w/, function (c) {
            return c.toUpperCase();
          }); //===> Check Active <===//

          var current = value.split(' '),
              isActive = ''; //=== for each name in value ===//

          if (current.length > 0) {
            current.forEach(function (item) {
              if (item === name) isActive = 'px-active';
            });
          } else if (item === name) isActive = 'px-active';

          output.push( /*#__PURE__*/React.createElement("button", {
            key: "".concat(name, "-").concat(index),
            onClick: setBackground,
            title: title,
            "data-value": name,
            "data-type": type,
            className: "".concat(name, " btn square tiny radius-circle border-1 border-solid border-alpha-25 mb-10 me-10 ").concat(isActive)
          }));
        };

        for (var index = 0; index < list.length; index++) {
          _loop(index);
        } //===> Return Buttons <===//


        return output;
      }; //===> Icons Buttons <===//


      var makeRotations = function makeRotations(list, type) {
        var output = []; //===> for each item <===//

        var _loop2 = function _loop2(index) {
          //===> Get Value <===//
          var name = list[index]; //===> Rotation <===//

          var rotation = name.replace('bg-grade-', '');
          if (name.endsWith('n')) rotation = "-".concat(rotation.slice(0, -1)); //===> Check Active <===//

          var current = value.split(' '),
              isActive = ''; //=== for each name in value ===//

          if (current.length > 0) {
            current.forEach(function (item) {
              if (item === name) isActive = 'px-active';
            });
          } else if (item === name) isActive = 'px-active'; //===> Get Value <===//


          output.push( /*#__PURE__*/React.createElement("button", {
            key: "".concat(name, "-").concat(index),
            "data-type": type,
            onClick: setBackground,
            "data-value": name,
            className: "btn square tiny light ".concat(isActive)
          }, /*#__PURE__*/React.createElement("i", {
            className: "inline-block fas fa-arrow-to-bottom",
            style: {
              transform: "rotate(".concat(rotation, "deg)")
            }
          })));
        };

        for (var index = 0; index < list.length; index++) {
          _loop2(index);
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
      }, /*#__PURE__*/React.createElement(_media_uploader__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: "image-background",
        value: type !== 'image' ? this.state.placeholder : value,
        setValue: setBackground
      }))));
    }
  }]);

  return PhenixBackground;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-controls/grid/flex-alignment.js":
/*!*******************************************************!*\
  !*** ./src/blocks/px-controls/grid/flex-alignment.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FlexAlignment; }
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

      var set_align = function set_align(new_value, current_value, Axis) {
        //===> Split the value <===//
        var valueArray = current_value.split(" ").filter(function (val) {
          return val;
        }),
            //===> Check Names Method <===//
        checkNames = function checkNames(name) {
          if (Axis === "align-x") {
            return name.includes('-x') || name.includes('-between') || name.includes('-around');
          } else if (Axis === "align-y") {
            return name.includes('-y');
          }
        }; //===> Replace if has Multiple <===//


        if (valueArray.length > 1) {
          valueArray.forEach(function (val) {
            return checkNames(val) ? value.replace(val, new_value) : "";
          });
        } //===> Update Current Value <===//
        else {
          return checkNames(value) ? new_value : "".concat(new_value, " ").concat(current_value);
        }
      },
          //===> Set Align X <===//
      set_align_x = function set_align_x(clicked) {
        //===> Get Elements <===//
        var button = clicked.target,
            new_val = button.getAttribute('data-value'),
            checkVal = set_align(new_val, value, "align-x"); //===> Set Data <===//

        return checkVal ? onChange(checkVal) : "";
      },
          //===> Set Align Y <===//
      set_align_y = function set_align_y(clicked) {
        //===> Get Elements <===//
        var button = clicked.target,
            new_val = button.getAttribute('data-value'),
            checkVal = set_align(new_val, value, "align-y"); //===> Set Data <===//

        return checkVal ? onChange(checkVal) : "";
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
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        "data-value": "align-start-x",
        title: "Start",
        className: "".concat(button_style, " pxi-align-x-start ").concat(value.includes("start-x") ? "px-active" : ""),
        onClick: set_align_x
      }), /*#__PURE__*/React.createElement("button", {
        type: "button",
        "data-value": "align-center-x",
        title: "Center",
        className: "".concat(button_style, " pxi-align-x-center ").concat(value.includes("center-x") ? "px-active" : ""),
        onClick: set_align_x
      }), /*#__PURE__*/React.createElement("button", {
        type: "button",
        "data-value": "align-between",
        title: "Between",
        className: "".concat(button_style, " pxi-align-x-between ").concat(value.includes("between") ? "px-active" : ""),
        onClick: set_align_x
      }), /*#__PURE__*/React.createElement("button", {
        type: "button",
        "data-value": "align-around",
        title: "Around",
        className: "".concat(button_style, " pxi-align-x-around ").concat(value.includes("around") ? "px-active" : ""),
        onClick: set_align_x
      }), /*#__PURE__*/React.createElement("button", {
        type: "button",
        "data-value": "align-end-x",
        title: "End",
        className: "".concat(button_style, " pxi-align-x-end ").concat(value.includes("end-x") ? "px-active" : ""),
        onClick: set_align_x
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        "data-value": "align-start-y",
        title: "Start",
        className: "".concat(button_style, " pxi-align-y-start ").concat(value.includes("start-y") ? "px-active" : ""),
        onClick: set_align_y
      }), /*#__PURE__*/React.createElement("button", {
        type: "button",
        "data-value": "align-center-y",
        title: "Center",
        className: "".concat(button_style, " pxi-align-y-center ").concat(value.includes("center-y") ? "px-active" : ""),
        onClick: set_align_y
      }), /*#__PURE__*/React.createElement("button", {
        type: "button",
        "data-value": "align-end-y",
        title: "End",
        className: "".concat(button_style, " pxi-align-y-end ").concat(value.includes("end-y") ? "px-active" : ""),
        onClick: set_align_y
      }))));
    }
  }]);

  return FlexAlignment;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-controls/media-uploader.js":
/*!**************************************************!*\
  !*** ./src/blocks/px-controls/media-uploader.js ***!
  \**************************************************/
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
            className: "mb-10"
          }, label) : '', /*#__PURE__*/React.createElement("div", {
            className: "flexbox align-center-y align-between"
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

/***/ "./src/blocks/px-controls/typography/px-colors.js":
/*!********************************************************!*\
  !*** ./src/blocks/px-controls/typography/px-colors.js ***!
  \********************************************************/
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
          onChange = _this$props.onChange; //===> Colors List <===//

      var pxPallete = {
        main: ["color-inherit", "color-primary", "color-primary-dark", "color-secondary", "color-secondary-dark", "color-gray", "color-dark", "color-white", "color-success", "color-danger", "color-warning", "color-info", "color-transparent"],
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
      }, /*#__PURE__*/React.createElement("div", {
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

/***/ "./src/blocks/container/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/container/block.json ***!
  \*****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/container","version":"0.1.0","title":"Container","keywords":["pds","phenix","section","group","wrapper","container"],"category":"design","description":"","supports":{"html":false},"attributes":{"id":{"type":"string","default":""},"tagName":{"type":"string","default":"div"},"size":{"type":"string","default":""},"isSection":{"type":"boolean","default":false},"isFlexbox":{"type":"boolean","default":false},"isHidden":{"type":"boolean","default":false},"preview":{"type":"boolean","default":false},"flexbox":{"type":"object","default":{"flow":"","align":"","nowrap":""}},"typography":{"type":"object","default":{"color":"","size":"","align":"","weight":"","family":"","height":"","utility":""}},"style":{"type":"object","default":{"display":"","spacing":{"padding":"","margin":""},"background":{"type":"color","value":"","rotation":""}}}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
/*!***************************************!*\
  !*** ./src/blocks/container/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/container/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/container/block.json");
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
//====> WP Modules <====//
//===> Block Data <===//

 //===> WordPress Modules <===//


 //===> Register Block <===//

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 640 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M96 470h448V46H96v424zM32 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-17.7-14.3-32-32-32zm576 0c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-17.7-14.3-32-32-32z"
  })),

  /**===> @see ./edit.js <===*/
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**===> Block Output <===*/
  save: function save(_ref) {
    var attributes = _ref.attributes;
    //===> Get Block Properties <===//
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    var TagName = attributes.tagName;
    var container = attributes.isFlexbox ? "flexbox " : ''; //===> Container Options <===//

    if (attributes.id) blockProps['id'] = attributes.id;
    if (attributes.size) container += attributes.size;
    if (attributes.isHidden) container += ' hidden'; //===> Flexbox Properties <===//

    if (attributes.isFlexbox) {
      if (attributes.flexbox.align) container += " ".concat(attributes.flexbox.align);
      if (attributes.flexbox.flow) container += " ".concat(attributes.flexbox.flow);
      if (attributes.flexbox.nowrap) container += " ".concat(attributes.flexbox.nowrap);
    } //===> Typography Properties <===//


    if (attributes.typography) {
      container += " ".concat(attributes.typography.size);
      container += " ".concat(attributes.typography.weight);
      container += " ".concat(attributes.typography.color);
    } //===> Render Background <===//


    if (attributes.background) {
      //===> Image Background <===//
      if (attributes.bg_type === 'image') {
        blockProps.className += " px-media";
        blockProps["data-src"] = attributes.background;
      } //===> Name Background <===//
      else blockProps.className += " ".concat(attributes.background); //===> Background Rotation <===//


      if (attributes.bg_rotate) blockProps.className += " ".concat(attributes.bg_rotate);
    } //===> for Section Convert <===//


    if (!attributes.isSection) blockProps.className += " ".concat(container); //===> Render <===//

    return /*#__PURE__*/React.createElement(TagName, blockProps, attributes.isSection ? /*#__PURE__*/React.createElement("div", {
      className: container
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)) : /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map