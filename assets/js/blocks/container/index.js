/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/container/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/container/edit.js ***!
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _px_controls_px_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../px-controls/px-background */ "./src/blocks/px-controls/px-background.js");
/* harmony import */ var _px_controls_px_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../px-controls/px-colors */ "./src/blocks/px-controls/px-colors.js");
/* harmony import */ var _px_controls_flex_alignment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../px-controls/flex-alignment */ "./src/blocks/px-controls/flex-alignment.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var set_color = function set_color(color) {
    return setAttributes({
      color: color
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

  var set_alignment = function set_alignment(alignment) {
    return setAttributes({
      flex_align: alignment
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


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)();
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


  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
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
    }
  }); //===> for Section Convert <===//

  var container_element = blockProps;
  if (attributes.isSection) container_element = innerBlocksProps; //===> Render Size <===//

  if (attributes.size) container_element.className += " ".concat(attributes.size); //===> Render Alignment <===//

  if (attributes.isFlexbox) {
    container_element.className += ' flexbox';
    if (attributes.flex_align) container_element.className += " ".concat(attributes.flex_align);
  } //===> Render Color <===//


  if (attributes.color) blockProps.className += " ".concat(attributes.color); //===> Render Background <===//

  if (attributes.background) {
    //===> Image Background <===//
    if (attributes.bg_type === 'image') {
      blockProps.className += " px-media";
      blockProps["data-src"] = attributes.background;
      setPhenixView();
    } //===> Name Background <===//
    else blockProps.className += " ".concat(attributes.background); //===> Background Rotation <===//


    if (attributes.bg_rotate) blockProps.className += " ".concat(attributes.bg_rotate);
  } //===> Render <===//


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Section Settings"
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
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    key: "container_size",
    label: "Container Size",
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
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    key: "container_id",
    label: "Container ID",
    value: attributes.id,
    onChange: set_id
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Section Wrapper",
    checked: attributes.isSection,
    onChange: set_isSection
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    key: "isFlexbox",
    label: "Flex Container",
    checked: attributes.isFlexbox,
    onChange: set_isFlexbox
  })), attributes.isFlexbox ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Flexbox",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_controls_flex_alignment__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: "flex-align",
    value: attributes.flex_align,
    onChange: set_alignment
  })) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Typography",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_controls_px_colors__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: "px-color",
    onChange: set_color,
    value: attributes.color
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Background",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_controls_px_background__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: "px-bg",
    onChange: set_background,
    type: attributes.bg_type,
    value: attributes.background
  }))), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/section.jpg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement(TagName, blockProps, /*#__PURE__*/React.createElement("div", innerBlocksProps)));
}

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

/***/ "./src/blocks/px-controls/media-uploader.js":
/*!**************************************************!*\
  !*** ./src/blocks/px-controls/media-uploader.js ***!
  \**************************************************/
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

/***/ "./src/blocks/px-controls/px-background.js":
/*!*************************************************!*\
  !*** ./src/blocks/px-controls/px-background.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhenixBackground)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-uploader */ "./src/blocks/px-controls/media-uploader.js");
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

/***/ "./src/blocks/px-controls/px-colors.js":
/*!*********************************************!*\
  !*** ./src/blocks/px-controls/px-colors.js ***!
  \*********************************************/
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
      }, /*#__PURE__*/React.createElement("label", {
        className: "mb-10"
      }, "Select Text Color"), /*#__PURE__*/React.createElement("div", {
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

/***/ "./src/blocks/container/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/container/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/container","version":"0.1.0","title":"Container","keywords":["pds","phenix","section","group","wrapper","container"],"category":"design","description":"Section and Container to Group the Elements Tegother from Phenix Blocks.","supports":{"html":false},"attributes":{"id":{"type":"string","default":""},"tagName":{"type":"string","default":"div"},"preview":{"type":"boolean","default":false},"isSection":{"type":"boolean","default":false},"isFlexbox":{"type":"boolean","default":false},"flex_align":{"type":"string","default":""},"size":{"type":"string","default":""},"bg_type":{"type":"string","default":"color"},"bg_rotate":{"type":"string","default":""},"background":{"type":"string","default":""},"color":{"type":"string","default":""}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
    var container_names = ''; //===> Render Size <===//

    if (attributes.size) container_names += attributes.size; //===> Render Alignment <===//

    if (attributes.isFlexbox) {
      container_names += ' flexbox';
      if (attributes.flex_align) container_names += " ".concat(attributes.flex_align);
    } //===> Render Color <===//


    if (attributes.color) container_names += " ".concat(attributes.color); //===> Render Background <===//

    if (attributes.background) {
      //===> Image Background <===//
      if (attributes.bg_type === 'image') {
        blockProps.className += " px-media";
        blockProps["data-src"] = attributes.background;
      } //===> Name Background <===//
      else blockProps.className += " ".concat(attributes.background); //===> Background Rotation <===//


      if (attributes.bg_rotate) blockProps.className += " ".concat(attributes.bg_rotate);
    } //===> for Section Convert <===//


    if (!attributes.isSection) blockProps.className += " ".concat(container_names); //===> Render ID <===//

    if (attributes.id) blockProps['id'] = attributes.id; //===> Render <===//

    return /*#__PURE__*/React.createElement(TagName, blockProps, attributes.isSection ? /*#__PURE__*/React.createElement("div", {
      className: container_names
    }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)) : /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map