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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _px_controls_grid_flex_alignment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../px-controls/grid/flex-alignment */ "./src/blocks/px-controls/grid/flex-alignment.js");
/* harmony import */ var _px_controls_grid_equal_columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../px-controls/grid/equal-columns */ "./src/blocks/px-controls/grid/equal-columns.js");
/* harmony import */ var _px_controls_elements_padding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../px-controls/elements/padding */ "./src/blocks/px-controls/elements/padding.js");
/* harmony import */ var _px_controls_elements_margin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../px-controls/elements/margin */ "./src/blocks/px-controls/elements/margin.js");
//====> WP Modules <====//

 //====> Phenix Modules <====//




 //====> Edit Mode <====//

function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  //===> Set Settings <===//
  var set_tagName = function set_tagName(tagName) {
    return setAttributes({
      tagName: tagName
    });
  };

  var set_isEqual = function set_isEqual(isEqual) {
    return setAttributes({
      isEqual: isEqual
    });
  };

  var set_columns = function set_columns(columns) {
    return setAttributes({
      columns: columns
    });
  };

  var set_isSlider = function set_isSlider(isSlider) {
    return setAttributes({
      isSlider: isSlider
    });
  };

  var set_controls = function set_controls(controls) {
    return setAttributes({
      controls: controls
    });
  };

  var set_isMasonry = function set_isMasonry(isMasonry) {
    return setAttributes({
      isMasonry: isMasonry
    });
  };

  var set_pagination = function set_pagination(pagination) {
    return setAttributes({
      pagination: pagination
    });
  };

  var set_alignment = function set_alignment(alignment) {
    return setAttributes({
      flex_align: alignment
    });
  };

  var set_spacing_pd = function set_spacing_pd(spacing_pd) {
    return setAttributes({
      spacing_pd: spacing_pd
    });
  };

  var set_spacing_mg = function set_spacing_mg(spacing_mg) {
    return setAttributes({
      spacing_mg: spacing_mg
    });
  }; //===> Options Tabs <===//


  var changeTab = function changeTab(clicked) {
    var _optionsList$querySel;

    //===> Option Data <===//
    var element = Phenix(clicked.target),
        parent = element.ancestor('.options-tabs'),
        optionsList = Phenix(parent).next('.options-list'),
        currentActive = Phenix(parent.querySelector(':scope > .primary')),
        currentType = "".concat(element[0].getAttribute('data-options')),
        targetElement = optionsList.querySelector(":scope > .".concat(currentType)); //===> Change Active <===//

    currentActive.addClass('light').removeClass('primary');
    element.addClass('primary').removeClass('light'); //===> Show Options <===//

    (_optionsList$querySel = optionsList.querySelector(':scope > .flexbox:not(.hidden)')) === null || _optionsList$querySel === void 0 ? void 0 : _optionsList$querySel.classList.add('hidden');
    Phenix(targetElement).removeClass('hidden');
  }; //===> Get Block Properties <===//


  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  var innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)();
  var TagName = attributes.tagName; //===> Set Properties <===//

  innerBlocksProps.className += " ".concat(blockProps.className);
  innerBlocksProps.className += ' row'; //===> Alignment <===//

  if (attributes.flex_align) innerBlocksProps.className += " ".concat(attributes.flex_align); //===> Masonry <===//

  if (attributes.isMasonry) innerBlocksProps.className += ' px-masonry'; //===> Columns <===//

  if (attributes.isEqual && attributes.columns) innerBlocksProps.className += attributes.columns; //===> Slider <===//

  if (attributes.isSlider) {
    //===> Add Slider Name <===//
    innerBlocksProps.className += ' px-slider'; //===> Set Items <===//

    var columns_names = attributes.columns.split(' ');
    columns_names.forEach(function (name) {
      //===> Medium Screen <===//
      if (name.includes('-md')) innerBlocksProps['data-md'] = name.replace('row-cols-md-', ''); //===> Large Screen <===//
      else if (name.includes('-lg')) innerBlocksProps['data-lg'] = name.replace('row-cols-lg-', ''); //===> xLarge Screen <===//
      else if (name.includes('-xl')) innerBlocksProps['data-xl'] = name.replace('row-cols-xl-', ''); //===> Small Screen <===//
      else if (name.includes('row-cols')) innerBlocksProps['data-items'] = name.replace('row-cols-', '');
    }); //===> Set Other Options <===//

    if (attributes.controls) innerBlocksProps['data-controls'] = 1;
    if (attributes.pagination) innerBlocksProps['data-pagination'] = 1; //===> for Edit only <===//
    // innerBlocksProps.className += attributes.columns;
  } //===> Render Spacing <===//


  if (attributes.spacing_pd) innerBlocksProps.className += " ".concat(attributes.spacing_pd);
  if (attributes.spacing_mg) innerBlocksProps.className += " ".concat(attributes.spacing_mg); //===> Render <===//

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    key: "inspector"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "General Settings"
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
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Masonry Grid",
    checked: attributes.isMasonry,
    onChange: set_isMasonry
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Responsive Columns",
    checked: attributes.isEqual,
    onChange: set_isEqual
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Enable Slider",
    checked: attributes.isSlider,
    onChange: set_isSlider
  })), attributes.isSlider ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Slider Options",
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Enable Pagination",
    checked: attributes.pagination,
    onChange: set_pagination
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
    label: "Enable Arrow Buttons",
    checked: attributes.controls,
    onChange: set_controls
  })) : null, attributes.isEqual || attributes.isSlider ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Columns Size",
    initialOpen: true
  }, /*#__PURE__*/React.createElement(_px_controls_grid_equal_columns__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: "row-columns",
    value: attributes.columns,
    onChange: set_columns
  })) : null, !attributes.isSlider ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Alignment",
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_px_controls_grid_flex_alignment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: "flex-align",
    value: attributes.flex_align,
    onChange: set_alignment
  })) : null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: "Spacing",
    initialOpen: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "options-tabs lined-tabs fluid px-group borderd-group divider-b mb-10"
  }, /*#__PURE__*/React.createElement("button", {
    key: "padding",
    onClick: changeTab,
    className: "btn tiny outline primary col",
    "data-options": "padding-size"
  }, "Padding Size"), /*#__PURE__*/React.createElement("button", {
    key: "margin",
    onClick: changeTab,
    className: "btn tiny outline light col",
    "data-options": "margin-size"
  }, "Margin Size")), /*#__PURE__*/React.createElement("div", {
    className: "options-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flexbox padding-size"
  }, /*#__PURE__*/React.createElement(_px_controls_elements_padding__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: "px-spacing_pd",
    onChange: set_spacing_pd,
    value: attributes.spacing_pd
  })), /*#__PURE__*/React.createElement("div", {
    className: "flexbox margin-size hidden"
  }, /*#__PURE__*/React.createElement(_px_controls_elements_margin__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: "px-spacing_mg",
    onChange: set_spacing_mg,
    value: attributes.spacing_mg
  }))))), attributes.preview ? /*#__PURE__*/React.createElement("img", {
    src: "https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/row.jpg",
    alt: "",
    className: "fluid"
  }) : /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement(TagName, innerBlocksProps)));
}

/***/ }),

/***/ "./src/blocks/px-controls/elements/margin.js":
/*!***************************************************!*\
  !*** ./src/blocks/px-controls/elements/margin.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhenixMargin; }
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

 //===> Phenix Margin <===//

var PhenixMargin = /*#__PURE__*/function (_Component) {
  _inherits(PhenixMargin, _Component);

  var _super = _createSuper(PhenixMargin);

  function PhenixMargin() {
    _classCallCheck(this, PhenixMargin);

    return _super.apply(this, arguments);
  }

  _createClass(PhenixMargin, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange; //===> Options Tabs <===//

      var changeTab = function changeTab(clicked) {
        var _optionsList$querySel;

        //===> Option Data <===//
        var element = Phenix(clicked.target),
            parent = element.ancestor('.options-tabs'),
            optionsList = Phenix(parent).next('.options-list'),
            currentActive = Phenix(parent.querySelector(':scope > .primary')),
            currentType = "".concat(element[0].getAttribute('data-options')),
            targetElement = optionsList.querySelector(":scope > .".concat(currentType)); //===> Change Active <===//

        currentActive.addClass('light').removeClass('primary');
        element.addClass('primary').removeClass('light'); //===> Show Options <===//

        (_optionsList$querySel = optionsList.querySelector(':scope > .flexbox:not(.hidden)')) === null || _optionsList$querySel === void 0 ? void 0 : _optionsList$querySel.classList.add('hidden');
        Phenix(targetElement).removeClass('hidden');
      }; //===> .Get Default Value. <===//


      var values = value.split(' '),
          options = {
        small: ["", false],
        medium: ["", false],
        large: ["", false],
        xlarge: ["", false]
      }; //===> Default Combined Options <===//

      if (value.includes("comb")) values.forEach(function (item) {
        if (item.includes("comb")) {
          //==> Define item <==//
          var option_item = false,
              option_screen; //==> Small Screen <==//

          if (item.includes("comb-sm")) option_screen = "small"; //==> Medium Screen <==//
          else if (item.includes("comb-md")) option_screen = "medium"; //==> Large Screen <==//
          else if (item.includes("comb-lg")) option_screen = "large"; //==> xLarge Screen <==//
          else if (item.includes("comb-xl")) option_screen = "xlarge"; //===> Set the Option <===//

          options[option_screen][0] = option_item;
          options[option_screen][1] = true;
        }
      }); //===> Set Combined Size <===//

      var set_combined = function set_combined(combined) {
        //===> Element Data <===//
        var checkbox = combined.target,
            current_sizes = value.replace(/\s\s+/g, ' '),
            comb_type = checkbox.name,
            comb_point = "-".concat(comb_type.slice(comb_type.indexOf('-') + 1, comb_type.lastIndexOf('-'))); //===> Cleanup Combined/Sepereated <===//

        current_sizes.split(" ").forEach(function (name) {
          //===> Fallback <===//
          if (name.length > 0 && !name.includes('comb')) {
            //===> Define Properties <===//
            if (comb_point.includes("sm")) comb_point = "";
            var nameValue = "".concat(name.slice(name.lastIndexOf('-') + 1)),
                margin_ys = name.includes("mt".concat(comb_point, "-").concat(nameValue)) || name.includes("mb".concat(comb_point, "-").concat(nameValue)),
                margin_xs = name.includes("ms".concat(comb_point, "-").concat(nameValue)) || name.includes("me".concat(comb_point, "-").concat(nameValue)),
                margin_x = name.includes("mx".concat(comb_point, "-").concat(nameValue)),
                margin_y = name.includes("my".concat(comb_point, "-").concat(nameValue)); //===> Cleanup Current Sizes <===//

            if (margin_ys || margin_xs || margin_y || margin_x) current_sizes = current_sizes.replace(name, ""); //===> Seperate X <===//

            if (margin_x) {
              if (!current_sizes.includes("ms".concat(comb_point, "-"))) current_sizes += " ms".concat(comb_point, "-").concat(nameValue);
              if (!current_sizes.includes("me".concat(comb_point, "-"))) current_sizes += " me".concat(comb_point, "-").concat(nameValue);
            } //===> Seperate Y <===//
            else if (margin_y) {
              if (!current_sizes.includes("mt".concat(comb_point, "-"))) current_sizes += " mt".concat(comb_point, "-").concat(nameValue);
              if (!current_sizes.includes("mb".concat(comb_point, "-"))) current_sizes += " mb".concat(comb_point, "-").concat(nameValue);
            } //===> Combine X <===//
            else if (margin_xs && !current_sizes.includes("mx".concat(comb_point, "-"))) {
              current_sizes += " mx".concat(comb_point, "-").concat(nameValue);
            } //===> Combine Y <===//
            else if (margin_ys && !current_sizes.includes("my".concat(comb_point, "-"))) {
              current_sizes += " my".concat(comb_point, "-").concat(nameValue);
            }
          }
        }); //===> Activate Combined Size <===//

        if (checkbox.checked && !values.includes(comb_type)) {
          return onChange(" ".concat(comb_type, " ").concat(current_sizes));
        } //===> De-Activate the Combined Size <===//
        else if (!checkbox.checked && values.includes(comb_type)) {
          return onChange(current_sizes.replace(" ".concat(comb_type, " "), ''));
        }
      }; //===> Set Value <===//


      var set_value = function set_value(prefix, the_value, breakpoint) {
        //===> Fallback <===//
        if (!prefix || !the_value) return; //===> Define Returned Value <===//

        var output_sizes = value.replace(/\s\s+/g, ' '); //===> Screen Points <===//

        switch (breakpoint) {
          case "-sm":
            breakpoint = ['', "small"];
            break;

          case "-md":
            breakpoint = [breakpoint, "medium"];
            break;

          case "-lg":
            breakpoint = [breakpoint, "large"];
            break;

          case "-xl":
            breakpoint = [breakpoint, "xlarge"];
            break;

          default:
            breakpoint = breakpoint;
            break;
        } //===> Update Size <===//


        if (output_sizes.includes("".concat(prefix).concat(breakpoint[0]))) {
          //===> For Each Size <===//
          output_sizes.split(' ').forEach(function (name) {
            //===> When the Size is Found Replace it <===//
            if (name.startsWith("".concat(prefix).concat(breakpoint[0]))) {
              output_sizes = output_sizes.replace(name, " ".concat(prefix).concat(breakpoint[0], "-").concat(the_value));
              return onChange(output_sizes);
            }
          });
        } //===> for New Size <===//
        else {
          //===> Set the New Size <===//
          return onChange(" ".concat(output_sizes, " ").concat(prefix).concat(breakpoint[0], "-").concat(the_value));
        }
      }; //===> Layout Creator <===//


      var make_options = function make_options(data, value_infix) {
        //===> Default Values <===//
        var current_values = {
          my: 0,
          mx: 0,
          mt: 0,
          ms: 0,
          mb: 0,
          me: 0
        }; //===> Get Options Status <===//

        var comb_status = data[1]; //===> for Each Name in Value <===//

        values.forEach(function (name) {
          //===> Fallback <===//
          if (!name.includes('comb')) {
            //===> Get the Name Prefix <===//
            var end = name.indexOf("-"),
                namePrefix = name.slice(0, end),
                hasProp = current_values.hasOwnProperty(namePrefix); //===> if the Prefix matches any value Grap it <===//

            if (hasProp) {
              //===> if the Name has any value related to the current infix <===//
              if (name.includes(value_infix)) {
                current_values[namePrefix] = parseInt(name.replace(/\D/g, ''));
              } //===> for Zero Screen <===//
              else if (value_infix === "-sm" && !name.includes(value_infix)) {
                current_values[namePrefix] = parseInt(name.replace(/\D/g, ''));
              }
            }
          }
        }); //===> Create the Layout <===//

        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
          className: "option-control mb-5",
          "data-type": "checkbox"
        }, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          name: "comb".concat(value_infix, "-mg"),
          checked: comb_status,
          onChange: set_combined
        }), /*#__PURE__*/React.createElement("span", {
          className: "fas fa-link"
        }, "Combined Size")), comb_status ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrows-y",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "my".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.my,
          onChange: function onChange(number) {
            return set_value('my', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrows-x",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "mx".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.mx,
          onChange: function onChange(number) {
            return set_value('mx', number, value_infix);
          }
        }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-top",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "mt".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.mt,
          onChange: function onChange(number) {
            return set_value('mt', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-start",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "ms".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.ms,
          onChange: function onChange(number) {
            return set_value('ms', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-bottom",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "mb".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.mb,
          onChange: function onChange(number) {
            return set_value('mb', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-end",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "me".concat(value_infix),
          step: 5,
          min: 0,
          max: 100,
          value: current_values.me,
          onChange: function onChange(number) {
            return set_value('me', number, value_infix);
          }
        }))));
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("div", {
        className: "options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-10"
      }, /*#__PURE__*/React.createElement("button", {
        key: "mobile",
        onClick: changeTab,
        className: "btn square tiny primary col far fa-mobile",
        title: "Mobile Screens",
        "data-options": "small-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "tablet",
        onClick: changeTab,
        className: "btn square tiny light col far fa-tablet",
        title: "Tablet Screens",
        "data-options": "medium-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "laptop",
        onClick: changeTab,
        className: "btn square tiny light col far fa-laptop",
        title: "Desktop Screens",
        "data-options": "large-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "desktop",
        onClick: changeTab,
        className: "btn square tiny light col far fa-desktop",
        title: "xLarge Screens",
        "data-options": "xlarge-options"
      })), /*#__PURE__*/React.createElement("div", {
        className: "options-list"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexbox small-options"
      }, make_options(options.small, "-sm")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox medium-options hidden"
      }, make_options(options.medium, "-md")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox large-options hidden"
      }, make_options(options.large, "-lg")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox xlarge-options hidden"
      }, make_options(options.xlarge, "-xl"))));
    }
  }]);

  return PhenixMargin;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-controls/elements/padding.js":
/*!****************************************************!*\
  !*** ./src/blocks/px-controls/elements/padding.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PhenixPadding; }
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

 //===> Phenix Padding <===//

var PhenixPadding = /*#__PURE__*/function (_Component) {
  _inherits(PhenixPadding, _Component);

  var _super = _createSuper(PhenixPadding);

  function PhenixPadding() {
    _classCallCheck(this, PhenixPadding);

    return _super.apply(this, arguments);
  }

  _createClass(PhenixPadding, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange; //===> Options Tabs <===//

      var changeTab = function changeTab(clicked) {
        var _optionsList$querySel;

        //===> Option Data <===//
        var element = Phenix(clicked.target),
            parent = element.ancestor('.options-tabs'),
            optionsList = Phenix(parent).next('.options-list'),
            currentActive = Phenix(parent.querySelector(':scope > .primary')),
            currentType = "".concat(element[0].getAttribute('data-options')),
            targetElement = optionsList.querySelector(":scope > .".concat(currentType)); //===> Change Active <===//

        currentActive.addClass('light').removeClass('primary');
        element.addClass('primary').removeClass('light'); //===> Show Options <===//

        (_optionsList$querySel = optionsList.querySelector(':scope > .flexbox:not(.hidden)')) === null || _optionsList$querySel === void 0 ? void 0 : _optionsList$querySel.classList.add('hidden');
        Phenix(targetElement).removeClass('hidden');
      }; //===> .Get Default Value. <===//


      var values = value.split(' '),
          options = {
        small: ["", false],
        medium: ["", false],
        large: ["", false],
        xlarge: ["", false]
      }; //===> Default Combined Options <===//

      if (value.includes("comb")) values.forEach(function (item) {
        if (item.includes("comb")) {
          //==> Define item <==//
          var option_item = false,
              option_screen; //==> Small Screen <==//

          if (item.includes("comb-sm")) option_screen = "small"; //==> Medium Screen <==//
          else if (item.includes("comb-md")) option_screen = "medium"; //==> Large Screen <==//
          else if (item.includes("comb-lg")) option_screen = "large"; //==> xLarge Screen <==//
          else if (item.includes("comb-xl")) option_screen = "xlarge"; //===> Set the Option <===//

          options[option_screen][0] = option_item;
          options[option_screen][1] = true;
        }
      }); //===> Set Combined Size <===//

      var set_combined = function set_combined(combined) {
        //===> Element Data <===//
        var checkbox = combined.target,
            current_sizes = value.replace(/\s\s+/g, ' '),
            comb_type = checkbox.name,
            comb_point = "-".concat(comb_type.slice(comb_type.indexOf('-') + 1, comb_type.lastIndexOf('-'))); //===> Cleanup Combined/Sepereated <===//

        current_sizes.split(" ").forEach(function (name) {
          //===> Fallback <===//
          if (name.length > 0 && !name.includes('comb')) {
            //===> Define Properties <===//
            if (comb_point.includes("sm")) comb_point = "";
            var nameValue = "".concat(name.slice(name.lastIndexOf('-') + 1)),
                padding_ys = name.includes("pdt".concat(comb_point, "-").concat(nameValue)) || name.includes("pdb".concat(comb_point, "-").concat(nameValue)),
                padding_xs = name.includes("pds".concat(comb_point, "-").concat(nameValue)) || name.includes("pde".concat(comb_point, "-").concat(nameValue)),
                padding_x = name.includes("pdx".concat(comb_point, "-").concat(nameValue)),
                padding_y = name.includes("pdy".concat(comb_point, "-").concat(nameValue)); //===> Cleanup Current Sizes <===//

            if (padding_ys || padding_xs || padding_y || padding_x) current_sizes = current_sizes.replace(name, ""); //===> Seperate X <===//

            if (padding_x) {
              if (!current_sizes.includes("pds".concat(comb_point, "-"))) current_sizes += " pds".concat(comb_point, "-").concat(nameValue);
              if (!current_sizes.includes("pde".concat(comb_point, "-"))) current_sizes += " pde".concat(comb_point, "-").concat(nameValue);
            } //===> Seperate Y <===//
            else if (padding_y) {
              if (!current_sizes.includes("pdt".concat(comb_point, "-"))) current_sizes += " pdt".concat(comb_point, "-").concat(nameValue);
              if (!current_sizes.includes("pdb".concat(comb_point, "-"))) current_sizes += " pdb".concat(comb_point, "-").concat(nameValue);
            } //===> Combine X <===//
            else if (padding_xs && !current_sizes.includes("pdx".concat(comb_point, "-"))) {
              current_sizes += " pdx".concat(comb_point, "-").concat(nameValue);
            } //===> Combine Y <===//
            else if (padding_ys && !current_sizes.includes("pdy".concat(comb_point, "-"))) {
              current_sizes += " pdy".concat(comb_point, "-").concat(nameValue);
            }
          }
        }); //===> Activate Combined Size <===//

        if (checkbox.checked && !values.includes(comb_type)) {
          return onChange(" ".concat(comb_type, " ").concat(current_sizes));
        } //===> De-Activate the Combined Size <===//
        else if (!checkbox.checked && values.includes(comb_type)) {
          return onChange(current_sizes.replace(" ".concat(comb_type, " "), ''));
        }
      }; //===> Set Value <===//


      var set_value = function set_value(prefix, the_value, breakpoint) {
        //===> Fallback <===//
        if (!prefix || !the_value) return; //===> Define Returned Value <===//

        var output_sizes = value.replace(/\s\s+/g, ' '); //===> Screen Points <===//

        switch (breakpoint) {
          case "-sm":
            breakpoint = ['', "small"];
            break;

          case "-md":
            breakpoint = [breakpoint, "medium"];
            break;

          case "-lg":
            breakpoint = [breakpoint, "large"];
            break;

          case "-xl":
            breakpoint = [breakpoint, "xlarge"];
            break;

          default:
            breakpoint = breakpoint;
            break;
        } //===> Update Size <===//


        if (output_sizes.includes("".concat(prefix).concat(breakpoint[0]))) {
          //===> For Each Size <===//
          output_sizes.split(' ').forEach(function (name) {
            //===> When the Size is Found Replace it <===//
            if (name.startsWith("".concat(prefix).concat(breakpoint[0]))) {
              output_sizes = output_sizes.replace(name, " ".concat(prefix).concat(breakpoint[0], "-").concat(the_value));
              return onChange(output_sizes);
            }
          });
        } //===> for New Size <===//
        else {
          //===> Set the New Size <===//
          return onChange(" ".concat(output_sizes, " ").concat(prefix).concat(breakpoint[0], "-").concat(the_value));
        }
      }; //===> Layout Creator <===//


      var make_options = function make_options(data, value_infix) {
        //===> Default Values <===//
        var current_values = {
          pdy: 0,
          pdx: 0,
          pdt: 0,
          pds: 0,
          pdb: 0,
          pde: 0
        }; //===> Get Options Status <===//

        var comb_status = data[1]; //===> for Each Name in Value <===//

        values.forEach(function (name) {
          //===> Fallback <===//
          if (!name.includes('comb')) {
            //===> Get the Name Prefix <===//
            var end = name.indexOf("-"),
                namePrefix = name.slice(0, end),
                hasProp = current_values.hasOwnProperty(namePrefix); //===> if the Prefix matches any value Grap it <===//

            if (hasProp) {
              //===> if the Name has any value related to the current infix <===//
              if (name.includes(value_infix)) {
                current_values[namePrefix] = parseInt(name.replace(/\D/g, ''));
              } //===> for Zero Screen <===//
              else if (value_infix === "-sm") {
                current_values[namePrefix] = parseInt(name.replace(/\D/g, ''));
                console.log(value_infix, current_values[namePrefix]);
              }
            }
          }
        }); //===> Create the Layout <===//

        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
          className: "option-control mb-5",
          "data-type": "checkbox"
        }, /*#__PURE__*/React.createElement("input", {
          type: "checkbox",
          name: "comb".concat(value_infix, "-pd"),
          checked: comb_status,
          onChange: set_combined
        }), /*#__PURE__*/React.createElement("span", {
          className: "fas fa-link"
        }, "Combined Size")), comb_status ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrows-y",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pdy".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pdy,
          onChange: function onChange(number) {
            return set_value('pdy', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrows-x",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pdx".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pdx,
          onChange: function onChange(number) {
            return set_value('pdx', number, value_infix);
          }
        }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-top",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pdt".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pdt,
          onChange: function onChange(number) {
            return set_value('pdt', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-start",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pds".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pds,
          onChange: function onChange(number) {
            return set_value('pds', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-bottom",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pdb".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pdb,
          onChange: function onChange(number) {
            return set_value('pdb', number, value_infix);
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "flexbox align-center-y mb-10 fluid"
        }, /*#__PURE__*/React.createElement("i", {
          className: "fs-16 me-10 pxi pxi-arrow-end",
          style: {
            marginTop: "3px",
            width: "25px",
            height: "25px"
          }
        }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          key: "pde".concat(value_infix),
          step: 5,
          min: -1,
          max: 100,
          value: current_values.pde,
          onChange: function onChange(number) {
            return set_value('pde', number, value_infix);
          }
        }))));
      }; //===> Reset Value <===//


      var reset_value = function reset_value() {
        return onChange('');
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("div", {
        className: "options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-10"
      }, /*#__PURE__*/React.createElement("button", {
        key: "mobile",
        onClick: changeTab,
        className: "btn square tiny primary col far fa-mobile",
        title: "Mobile Screens",
        "data-options": "small-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "tablet",
        onClick: changeTab,
        className: "btn square tiny light col far fa-tablet",
        title: "Tablet Screens",
        "data-options": "medium-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "laptop",
        onClick: changeTab,
        className: "btn square tiny light col far fa-laptop",
        title: "Desktop Screens",
        "data-options": "large-options"
      }), /*#__PURE__*/React.createElement("button", {
        key: "desktop",
        onClick: changeTab,
        className: "btn square tiny light col far fa-desktop",
        title: "xLarge Screens",
        "data-options": "xlarge-options"
      })), /*#__PURE__*/React.createElement("div", {
        className: "options-list"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flexbox small-options"
      }, make_options(options.small, "-sm")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox medium-options hidden"
      }, make_options(options.medium, "-md")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox large-options hidden"
      }, make_options(options.large, "-lg")), /*#__PURE__*/React.createElement("div", {
        className: "flexbox xlarge-options hidden"
      }, make_options(options.xlarge, "-xl"))), /*#__PURE__*/React.createElement("button", {
        onClick: reset_value,
        className: "btn tiny radius-sm"
      }, "Reset Size"));
    }
  }]);

  return PhenixPadding;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/blocks/px-controls/grid/equal-columns.js":
/*!******************************************************!*\
  !*** ./src/blocks/px-controls/grid/equal-columns.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EqualColumns; }
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

var EqualColumns = /*#__PURE__*/function (_Component) {
  _inherits(EqualColumns, _Component);

  var _super = _createSuper(EqualColumns);

  function EqualColumns() {
    _classCallCheck(this, EqualColumns);

    return _super.apply(this, arguments);
  }

  _createClass(EqualColumns, [{
    key: "render",
    value: function render() {
      //===> Properties <===//
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange; //===> .Default. <===//

      var current = value,
          columns = 0,
          columns_md = 0,
          columns_lg = 0,
          columns_xl = 0; //===> Convert Value to Array <===//

      var valueArray = value.split(' '); //===> Get Default Values <===//

      if (valueArray) valueArray.forEach(function (item) {
        if (item.includes('-md')) {
          columns_md = parseInt(item.replace(/\D+/g, ''));
        } else if (item.includes('-lg')) {
          columns_lg = parseInt(item.replace(/\D+/g, ''));
        } else if (item.includes('-xl')) {
          columns_xl = parseInt(item.replace(/\D+/g, ''));
        } else if (item.length > 0) {
          columns = parseInt(item.replace(/\D+/g, ''));
        }
      }); //===> New Values Handler <===//

      var set_value = function set_value(theValue, type, current_cols) {
        //===> Update Columns <===//
        if (current.includes(type)) {
          //===> if the Value is valid update it <===//
          if (theValue > 0) current = current.replace("".concat(type, "-").concat(current_cols), "".concat(type, "-").concat(theValue)); //===> if not delete it <===//
          else current = current.replace(" ".concat(type, "-").concat(current_cols), "");
        } //===> Set new Columns <===//
        else if (theValue > 0) current += " ".concat(type, "-").concat(theValue);
      }; //===> Set Columns-{Small} <===//


      var set_cols = function set_cols(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'row-cols', columns); //===> Return Options <===//

        return onChange(current);
      }; //===> Set Columns-{Medium} <===//


      var set_cols_md = function set_cols_md(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'row-cols-md', columns_md); //===> Return Options <===//

        return onChange(current);
      }; //===> Set Columns-{Large} <===//


      var set_cols_lg = function set_cols_lg(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'row-cols-lg', columns_lg); //===> Return Options <===//

        return onChange(current);
      }; //===> Set Columns-{xLarge} <===//


      var set_cols_xl = function set_cols_xl(cols) {
        //===> Set New Columns <===//
        set_value(cols, 'row-cols-xl', columns_xl); //===> Return Options <===//

        return onChange(current);
      }; //===> Component Output <===//


      return /*#__PURE__*/React.createElement("div", {
        className: "px-gb-component"
      }, /*#__PURE__*/React.createElement("p", {
        className: "mb-10 fs-12"
      }, "select number of columns in each row for each screen size"), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y mb-20"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-16 me-10 fa-mobile",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-cols",
        min: 0,
        max: 12,
        value: columns,
        onChange: set_cols
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y mb-20"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-16 me-10 fa-tablet",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-cols",
        min: 0,
        max: 12,
        value: columns_md,
        onChange: set_cols_md
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y mb-20"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-14 me-10 fa-laptop",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-cols",
        min: 0,
        max: 12,
        value: columns_lg,
        onChange: set_cols_lg
      })), /*#__PURE__*/React.createElement("div", {
        className: "flexbox align-center-y"
      }, /*#__PURE__*/React.createElement("i", {
        className: "far fs-14 me-10 fa-desktop",
        style: {
          marginTop: "3px",
          width: "25px"
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        key: "mobile-cols",
        min: 0,
        max: 12,
        value: columns_xl,
        onChange: set_cols_xl
      })));
    }
  }]);

  return EqualColumns;
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
      }; //===> Default Flow <===//


      var isNowrap = function isNowrap() {
        if (value.includes('flow-nowrap')) return true;else return false;
      }; //===> Set Flow <===//


      var setFlow = function setFlow(toggle) {
        //===> Get Current Value <===//
        var current = value; //===> .if already ON. <===//

        if (isReversed()) {
          current = current.replaceAll('flow-reverse');
        } //===> .if not make it. <===//
        else {
          current = "".concat(value, " flow-reverse");
        } //===> Return Options <===//


        return onChange(current);
      }; //===> Set Nowrap <===//


      var setNowrap = function setNowrap(toggle) {
        //===> Get Current Value <===//
        var current = value; //===> .if already reversed. <===//

        if (isNowrap()) {
          current = current.replaceAll('flow-nowrap');
        } //===> .if not make it. <===//
        else {
          current = "".concat(value, " flow-nowrap");
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
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        key: "flow-nowrap",
        label: "Nowrap Columns",
        checked: isNowrap(),
        onChange: setNowrap
      }));
    }
  }]);

  return FlexAlignment;
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

/***/ "./src/blocks/grid-row/block.json":
/*!****************************************!*\
  !*** ./src/blocks/grid-row/block.json ***!
  \****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"phenix/row","version":"0.1.0","title":"Grid Row","keywords":["pds","phenix","section","group","wrapper","row","flex","layout","grid"],"category":"design","description":"Wrapper Represent the Grid System Row with Flexbox Features","supports":{"html":false},"attributes":{"tagName":{"type":"string","default":"div"},"preview":{"type":"boolean","default":false},"flex_align":{"type":"string","default":""},"isEqual":{"type":"boolean","default":false},"isMasonry":{"type":"boolean","default":false},"columns":{"type":"string","default":""},"isSlider":{"type":"boolean","default":false},"pagination":{"type":"boolean","default":false},"controls":{"type":"boolean","default":false},"spacing_pd":{"type":"string","default":""},"spacing_mg":{"type":"string","default":""}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}');

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
    var TagName = attributes.tagName; //===> Set Properties <===//

    blockProps.className += ' row'; //===> Alignment <===//

    if (attributes.flex_align) blockProps.className += " ".concat(attributes.flex_align); //===> Masonry <===//

    if (attributes.isMasonry) blockProps.className += ' px-masonry'; //===> Columns <===//

    if (attributes.isEqual && attributes.columns) blockProps.className += attributes.columns; //===> Slider <===//

    if (attributes.isSlider) {
      //===> Add Slider Name <===//
      blockProps.className += ' px-slider'; //===> Items Info <===//

      var columns_names = attributes.columns.split(' ');
      columns_names.forEach(function (name) {
        //===> Medium Screen <===//
        if (name.includes('-md')) blockProps['data-md'] = name.replace('row-cols-md-', ''); //===> Large Screen <===//
        else if (name.includes('-lg')) blockProps['data-lg'] = name.replace('row-cols-lg-', ''); //===> xLarge Screen <===//
        else if (name.includes('-xl')) blockProps['data-xl'] = name.replace('row-cols-xl-', ''); //===> Small Screen <===//
        else if (name.includes('row-cols')) blockProps['data-items'] = name.replace('row-cols-', '');
      }); //===> Set Other Options <===//

      if (attributes.controls) blockProps['data-controls'] = 1;
      if (attributes.pagination) blockProps['data-pagination'] = 1;
    } //===> Render Spacing <===//


    if (attributes.spacing_pd) blockProps.className += " ".concat(attributes.spacing_pd);
    if (attributes.spacing_mg) blockProps.className += " ".concat(attributes.spacing_mg); //===> Render <===//

    return /*#__PURE__*/React.createElement(TagName, blockProps, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map