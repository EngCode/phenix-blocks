/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/theme-part/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/theme-part/edit.js ***!
  \***************************************/
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
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__);
//====> WP Modules <====//




 //====> Edit Mode <====//

function Edit(props) {
  //===> Get Properties <===//
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(); //===> Set Attributes <===//

  var set_part_name = function set_part_name(part_name) {
    return setAttributes({
      part_name: part_name
    });
  }; //===> Render <===//


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Setting",
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    key: "template-name",
    label: "Template Name",
    value: attributes.part_name,
    onChange: set_part_name
  }))), /*#__PURE__*/React.createElement((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default()), {
    block: "phenix/theme-part",
    attributes: attributes
  }));
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

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/blocks/theme-part/block.json":
/*!******************************************!*\
  !*** ./src/blocks/theme-part/block.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/theme-part","version":"0.1.0","title":"Theme Part","category":"design","description":"Pull a Dynamic Template Part From Current Theme.","supports":{"html":false},"attributes":{"part_name":{"type":"string","default":"pds/placeholder"}},"textdomain":"phenix","editorScript":"theme-part"}');

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
/*!****************************************!*\
  !*** ./src/blocks/theme-part/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/blocks/theme-part/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/theme-part/block.json");
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
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M473.6 512H38.4C17.2 512 0 494.8 0 473.6V38.4C0 17.2 17.2 0 38.4 0h435.2C494.8 0 512 17.2 512 38.4v435.2c0 21.2-17.2 38.4-38.4 38.4zM38.4 17.1c-11.8 0-21.3 9.6-21.3 21.3v435.2c0 11.8 9.6 21.3 21.3 21.3h435.2c11.8 0 21.3-9.6 21.3-21.3V38.4c0-11.8-9.6-21.3-21.3-21.3H38.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M187.7 51.2h17.1v17.1h-17.1zm-136.5 0h17.1v17.1H51.2zm68.3 0h17.1v17.1h-17.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M473.6 0H38.4C17.2 0 0 17.2 0 38.4v72.5c0 4.7 3.8 8.5 8.5 8.5h494.9c4.7 0 8.5-3.8 8.5-8.5V38.4C512 17.2 494.8 0 473.6 0zM221.9 42.7v34.1c0 4.7-3.8 8.5-8.5 8.5h-34.1c-4.7 0-8.5-3.8-8.5-8.5V42.7c0-4.7 3.8-8.5 8.5-8.5h34.1c4.6-.1 8.5 3.7 8.5 8.5zm-68.3 0v34.1c0 4.7-3.8 8.5-8.5 8.5H111c-4.7 0-8.5-3.8-8.5-8.5V42.7c0-4.7 3.8-8.5 8.5-8.5h34.1c4.7-.1 8.5 3.7 8.5 8.5zm-76.8-8.6c4.7 0 8.5 3.8 8.5 8.5v34.1c0 4.7-3.8 8.5-8.5 8.5H42.7c-4.7 0-8.5-3.8-8.5-8.5v-34c0-4.7 3.8-8.5 8.5-8.5h34.1zM64 281.6h-4.3v-4.3c0-4.7-3.8-8.5-8.5-8.5s-8.5 3.8-8.5 8.5v12.8c0 4.7 3.8 8.5 8.5 8.5H64c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-12.8-36.1c4.7 0 8.5-3.8 8.5-8.5v-30.3c0-4.7-3.8-8.5-8.5-8.5s-8.5 3.8-8.5 8.5V237c0 4.7 3.8 8.5 8.5 8.5zM64 145.1H51.2c-4.7 0-8.5 3.8-8.5 8.5v12.8c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-4.3H64c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm233.7 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5.1-4.7-3.8-8.5-8.5-8.5zm-83.4 17h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5h-25c-4.7 0-8.5 3.8-8.5 8.5-.1 4.7 3.7 8.5 8.5 8.5zm200.3-17h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-233.7 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-58.5 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5.1-4.7-3.8-8.5-8.5-8.5zm233.8 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm104.6 0H448c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h4.3v4.3c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-12.8c0-4.7-3.8-8.5-8.5-8.5zm0 53.1c-4.7 0-8.5 3.8-8.5 8.5V237c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-30.3c0-4.7-3.8-8.5-8.5-8.5zm0 70.6c-4.7 0-8.5 3.8-8.5 8.5v4.3H448c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h12.8c4.7 0 8.5-3.8 8.5-8.5v-12.8c0-4.7-3.8-8.5-8.5-8.5zm-338.4 12.8h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm233.8 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-175.3 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm233.7 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-116.9 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-58.4 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm25.2-51.2h17.1c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5h-17.1v-17.1c0-4.7-3.8-8.5-8.5-8.5s-8.5 3.8-8.5 8.5v17.1h-17.1c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h17.1v17.1c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-17.1zm196.3 93.9H51.2c-4.7 0-8.5 3.8-8.5 8.5v128c0 4.7 3.8 8.5 8.5 8.5h409.6c4.7 0 8.5-3.8 8.5-8.5v-128c0-4.7-3.8-8.5-8.5-8.5z"
  })),

  /**===> @see ./edit.js <===*/
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    return null;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map