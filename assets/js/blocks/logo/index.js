/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/logo/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/logo/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _px_controls_uploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../px-controls/uploader */ "./src/blocks/px-controls/uploader.js");
//====> WP Modules <====//




 //====> Phenix Modules <====//

 //====> Edit Mode <====//

function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  //===> Set Attributes <===//
  var set_size = function set_size(size) {
    return setAttributes({
      size: size
    });
  };

  var set_width = function set_width(width) {
    return setAttributes({
      width: width
    });
  };

  var set_responsive = function set_responsive(responsive) {
    return setAttributes({
      responsive: responsive
    });
  };

  var set_use_fevicon = function set_use_fevicon(use_fevicon) {
    return setAttributes({
      use_fevicon: use_fevicon
    });
  };

  var set_mobile_logo = function set_mobile_logo(mobile_logo) {
    return setAttributes({
      mobile_logo: mobile_logo.url
    });
  }; //===> Set Logo <===//


  var set_logo = function set_logo(value) {
    return setAttributes({
      logo: value.url,
      logo_id: value.id
    });
  }; //===> Set Fevicon <===//


  var set_fevicon = function set_fevicon(value) {
    return setAttributes({
      fevicon: value.url,
      favicon_id: value.id
    });
  }; //===> Set Site Logo <===//


  var set_site_logo = function set_site_logo(clicked) {
    //===> Add Loading Mode <===//
    clicked.target.classList.add('px-loading'); //===> Set Fevicon in Settings <===//

    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/wp/v2/settings',
      method: 'POST',
      data: {
        site_icon: attributes.favicon_id
      }
    }).then(function (respond) {
      return clicked.target.classList.remove('px-loading');
    }); //===> Set Logo in Settings <===//

    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      method: 'POST',
      path: '/wp/v2/settings',
      data: {
        site_logo: attributes.logo_id
      }
    }).then(function (respond) {
      return clicked.target.classList.remove('px-loading');
    });
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)(); //===> Accessibility Fallback <===//

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    //===> Fetch Site Title and Link <===//
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: 'wp/v2/settings'
    }).then(function (Response) {
      //===> Set Options <===//
      if (Response.title !== attributes.site_title) setAttributes({
        site_title: Response.title
      });
      if (Response.url & Response.url !== attributes.site_link) setAttributes({
        site_link: Response.url
      });
    });
  }, []); //===> Add Properties <===//

  blockProps["title"] = attributes.site_title;
  blockProps["href"] = attributes.site_link;
  blockProps.className += ' inline-block'; //===> Render <===//

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Logo Setting",
    initialOpen: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gpx-10 mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-5"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Size (Height)", "phenix"),
    value: attributes.size,
    onChange: set_size
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-7"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width (Optional)", "phenix"),
    value: attributes.width,
    onChange: set_width
  }))), /*#__PURE__*/React.createElement(_px_controls_uploader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Logo", "phenix"),
    value: attributes.logo,
    setValue: set_logo,
    size: "small",
    className: "mb-15"
  }), /*#__PURE__*/React.createElement(_px_controls_uploader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Favicon", "phenix"),
    value: attributes.fevicon,
    setValue: set_fevicon,
    size: "small",
    className: "mb-15"
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Responsive Logo", "phenix"),
    checked: attributes.responsive,
    onChange: set_responsive
  }), attributes.responsive ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Use Favicon for Mobile",
    checked: attributes.use_fevicon,
    onChange: set_use_fevicon
  }), !attributes.use_fevicon ? /*#__PURE__*/React.createElement(_px_controls_uploader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Upload Mobile Logo",
    value: attributes.mobile_logo,
    setValue: set_mobile_logo,
    size: "small"
  }) : null) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "tx-uppercase btn fluid tiny fs-12 mt-5 primary radius-sm",
    onClick: set_site_logo
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Update Site Logo", "phenix")))), /*#__PURE__*/React.createElement("a", blockProps, /*#__PURE__*/React.createElement("img", {
    src: attributes.logo,
    className: attributes.responsive ? 'hidden-md-down' : '',
    alt: blockProps.title,
    style: {
      "height": attributes.size
    },
    width: parseInt(attributes.width) ? parseInt(attributes.width) : null,
    height: parseInt(attributes.size)
  }), attributes.responsive ? /*#__PURE__*/React.createElement("img", {
    src: attributes.use_fevicon ? attributes.fevicon : attributes.mobile_logo,
    className: "hidden-lg-up",
    alt: blockProps.title,
    style: {
      "height": attributes.size
    },
    width: parseInt(attributes.size),
    height: parseInt(attributes.size)
  }) : null));
}

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

/***/ "./src/blocks/logo/block.json":
/*!************************************!*\
  !*** ./src/blocks/logo/block.json ***!
  \************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/logo","version":"0.1.0","title":"Phenix Logo","category":"design","description":"Main Logo Block for Phenix Header.","supports":{"html":false},"attributes":{"preview":{"type":"boolean","default":false},"site_title":{"type":"string","default":""},"logo":{"type":"string","default":"https://via.placeholder.com/200x90.webp?text=Logo%20Placeholder"},"size":{"type":"string","default":"42px"},"site_link":{"type":"string","default":"#none"},"logo_id":{"type":"number","default":0},"favicon_id":{"type":"number","default":0},"fevicon":{"type":"string","default":"https://via.placeholder.com/512x512.webp?text=Fevicon"},"responsive":{"type":"boolean","default":false},"use_fevicon":{"type":"boolean","default":false},"mobile_logo":{"type":"boolean","default":"https://via.placeholder.com/512x512.webp?text=Logo"}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
/*!**********************************!*\
  !*** ./src/blocks/logo/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/logo/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/logo/block.json");
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
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 1.5c4.1 0 7.5 3.4 7.5 7.5v.1c-1.4-.8-3.3-1.7-3.4-1.8-.2-.1-.5-.1-.8.1l-2.9 2.1L9 11.3c-.2-.1-.4 0-.6.1l-3.7 2.2c-.1-.5-.2-1-.2-1.5 0-4.2 3.4-7.6 7.5-7.6zm0 15c-3.1 0-5.7-1.9-6.9-4.5l3.7-2.2 3.5 1.2c.2.1.5 0 .7-.1l2.9-2.1c.8.4 2.5 1.2 3.5 1.9-.9 3.3-3.9 5.8-7.4 5.8z"
  })),

  /**===> @see ./edit.js <===*/
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**===> Block Output <===*/
  save: function save(_ref) {
    var attributes = _ref.attributes;
    //===> Get Block Properties <===//
    var siteUrl = attributes.site_link,
        blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(); //===> Add Properties <===//

    blockProps["href"] = siteUrl || "#none";
    blockProps["title"] = attributes.site_title;
    blockProps.className += ' inline-block'; //===> Render <===//

    return /*#__PURE__*/React.createElement("a", blockProps, /*#__PURE__*/React.createElement("img", {
      src: attributes.logo,
      className: attributes.responsive ? 'hidden-md-down' : '',
      alt: blockProps.title,
      style: {
        "maxHeight": attributes.size
      },
      width: parseInt(attributes.width) ? parseInt(attributes.width) : null,
      height: parseInt(attributes.size)
    }), attributes.responsive ? /*#__PURE__*/React.createElement("img", {
      src: attributes.use_fevicon ? attributes.fevicon : attributes.mobile_logo,
      className: "hidden-lg-up",
      alt: blockProps.title,
      width: parseInt(attributes.size),
      height: parseInt(attributes.size)
    }) : null);
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map