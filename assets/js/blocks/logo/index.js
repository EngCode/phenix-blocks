/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/_pds/media-uploader.js":
/*!*******************************************!*\
  !*** ./src/blocks/_pds/media-uploader.js ***!
  \*******************************************/
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

/***/ "./src/blocks/logo/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/logo/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pds_media_uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_pds/media-uploader */ "./src/blocks/_pds/media-uploader.js");
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

  var set_resposnive = function set_resposnive(resposnive) {
    return setAttributes({
      resposnive: resposnive
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
    //===> Set Attribute <===//
    setAttributes({
      logo: value.url
    }); //===> Set Fevicon in Settings <===//

    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      method: 'POST',
      path: '/wp/v2/settings',
      data: {
        site_logo: value.id
      }
    });
  }; //===> Set Fevicon <===//


  var set_fevicon = function set_fevicon(value) {
    //===> Set Attribute <===//
    setAttributes({
      fevicon: value.url
    }); //===> Set Fevicon in Settings <===//

    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/wp/v2/settings',
      method: 'POST',
      data: {
        site_icon: value.id
      }
    });
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(); //===> if the Title not Set <===//

  if (attributes.title !== "Site Title" || attributes.link === "javascript:void(0);") {
    //===> Fetch Settings <===//
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/wp/v2/settings'
    }).then(function (settings) {
      //===> Set Attributes <===//
      setAttributes({
        link: settings.url,
        title: settings.title
      });
    });
  } //===> Add Properties <===//


  blockProps["href"] = "javascript:void(0);";
  blockProps["title"] = attributes.title;
  if (!blockProps.className.includes('inline-block')) blockProps.className += ' inline-block'; //===> Render <===//

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Logo Setting",
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: "Logo Size",
    value: attributes.size,
    onChange: set_size
  }), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
  }), /*#__PURE__*/React.createElement(_pds_media_uploader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Upload Logo",
    value: attributes.logo,
    setValue: set_logo,
    size: "small"
  }), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
  }), /*#__PURE__*/React.createElement(_pds_media_uploader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Upload Fevicon",
    value: attributes.fevicon,
    setValue: set_fevicon,
    size: "small"
  }), /*#__PURE__*/React.createElement("span", {
    className: "display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Responsive Logo",
    checked: attributes.resposnive,
    onChange: set_resposnive
  }), attributes.resposnive ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Use Fevicon for Mobile",
    checked: attributes.use_fevicon,
    onChange: set_use_fevicon
  }), !attributes.use_fevicon ? /*#__PURE__*/React.createElement(_pds_media_uploader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Upload Mobile Logo",
    value: attributes.mobile_logo,
    setValue: set_mobile_logo,
    size: "small"
  }) : null) : null)), /*#__PURE__*/React.createElement("a", blockProps, /*#__PURE__*/React.createElement("img", {
    src: attributes.logo,
    className: attributes.resposnive ? 'hidden-md-down' : '',
    alt: blockProps.title,
    style: {
      "height": attributes.size
    }
  }), attributes.resposnive ? /*#__PURE__*/React.createElement("img", {
    src: attributes.use_fevicon ? attributes.fevicon : attributes.mobile_logo,
    className: "hidden-lg-up",
    alt: blockProps.title,
    style: {
      "height": attributes.size
    }
  }) : null));
}

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

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

/***/ "./src/blocks/logo/block.json":
/*!************************************!*\
  !*** ./src/blocks/logo/block.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/logo","version":"0.1.0","title":"Phenix Logo","category":"design","description":"Main Logo Block for Phenix Header.","supports":{"html":false},"attributes":{"title":{"type":"string","default":"Site Title"},"logo":{"type":"string","default":"https://via.placeholder.com/200x90.webp?text=Logo%20Placeholder"},"size":{"type":"string","default":"42px"},"link":{"type":"string","default":"javascript:void(0);"},"fevicon":{"type":"string","default":"https://via.placeholder.com/512x512.webp?text=Fevicon"},"responsive":{"type":"boolean","default":false},"use_fevicon":{"type":"boolean","default":false},"mobile_logo":{"type":"boolean","default":"https://via.placeholder.com/512x512.webp?text=Logo"}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(); //===> Add Properties <===//

    blockProps["href"] = attributes.link;
    blockProps["title"] = attributes.title;
    if (!blockProps.className.includes('inline-block')) blockProps.className += ' inline-block'; //===> Render <===//

    return /*#__PURE__*/React.createElement("a", blockProps, /*#__PURE__*/React.createElement("img", {
      src: attributes.logo,
      className: attributes.resposnive ? 'hidden-md-down' : '',
      alt: blockProps.title,
      style: {
        "height": attributes.size
      }
    }), attributes.resposnive ? /*#__PURE__*/React.createElement("img", {
      src: attributes.use_fevicon ? attributes.fevicon : attributes.mobile_logo,
      className: "hidden-lg-up",
      alt: blockProps.title,
      style: {
        "height": attributes.size
      }
    }) : null);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map