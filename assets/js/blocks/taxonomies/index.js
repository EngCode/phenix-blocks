!function(){"use strict";var e,t,n={1390:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(9307),o=n(1887);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function u(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(f,e);var t,n,r,a,p=(r=f,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(a){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function f(){return c(this,f),p.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,r=e.onChange,a="btn tiny bg-transparent fs-12 square pxi",c=function(e){var t=n,o=e.getAttribute("name");return n.split(" ").forEach((function(n){var r=!1,a=n.includes("-y"),c=o.includes("-y"),l=n.includes("-x")||n.includes("between")||n.includes("around");(!0===(o.includes("-x")||o.includes("between")||o.includes("around"))&&!0===l||!0===c&&!0===a)&&(r=!0),r?t=t.replace(n,e.value):t+=" ".concat(e.value)})),r(t)};return React.createElement("div",{className:"components-flex-item flex-alignment-btns"},React.createElement("div",{className:"flexbox align-between mb-5 align-center-y"},React.createElement("label",{className:"fs-13 weight-bold"},t),React.createElement("button",{type:"button","data-value":"",title:"Reset",className:"btn tiny bg-transparent fs-12 square far fa-redo",onClick:function(e){return r("")}})),React.createElement("div",{className:"flexbox align-between"},React.createElement("div",{className:"col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm"},React.createElement(o.Z,{name:"flex-align-x",checked:n.includes("align-start-x"),value:"align-start-x",onChange:c,type:"button-radio",className:"tiny inline-block"},React.createElement("span",{title:"Start",className:"".concat(a," pxi-align-x-start")})),React.createElement(o.Z,{name:"flex-align-x",checked:n.includes("align-center-x"),value:"align-center-x",onChange:c,type:"button-radio",className:"tiny inline-block"},React.createElement("span",{className:"".concat(a," pxi-align-x-center"),title:"Center"})),React.createElement(o.Z,{name:"flex-align-x",checked:n.includes("align-between"),value:"align-between",onChange:c,type:"button-radio",className:"tiny inline-block"},React.createElement("span",{className:"".concat(a," pxi-align-x-between"),title:"Between"})),React.createElement(o.Z,{name:"flex-align-x",checked:n.includes("align-around"),value:"align-around",onChange:c,type:"button-radio",className:"tiny inline-block"},React.createElement("span",{className:"".concat(a," pxi-align-x-around"),title:"Around"})),React.createElement(o.Z,{name:"flex-align-x",checked:n.includes("align-end-x"),value:"align-end-x",onChange:c,type:"button-radio",className:"tiny inline-block"},React.createElement("span",{className:"".concat(a," pxi-align-x-end"),title:"Around"}))),React.createElement("div",{className:"col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm"},React.createElement(o.Z,{name:"flex-align-y",checked:n.includes("align-start-y"),value:"align-start-y",onChange:c,type:"button-radio",className:"tiny inline-block"},React.createElement("span",{className:"".concat(a," pxi-align-y-start"),title:"Start"})),React.createElement(o.Z,{name:"flex-align-y",checked:n.includes("align-center-y"),value:"align-center-y",onChange:c,type:"button-radio",className:"tiny inline-block"},React.createElement("span",{className:"".concat(a," pxi-align-y-center"),title:"Center"})),React.createElement(o.Z,{name:"flex-align-y",checked:n.includes("align-end-y"),value:"align-end-y",onChange:c,type:"button-radio",className:"tiny inline-block"},React.createElement("span",{className:"".concat(a," pxi-align-y-end"),title:"End"})))))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(r.Component)},4678:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}n.d(t,{Z:function(){return u}});var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(p,e);var t,n,r,u,s=(r=p,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=i(r);if(u){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function p(){return o(this,p),s.apply(this,arguments)}return t=p,(n=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,r=e.min,o=e.max,a=e.steps,c=e.icon,l=e.onChange,i=function(e){var t=e.target,n=Phenix(t).ancestor(".px-counter-input"),o=parseInt(r)||0,c=a||1,i=n.querySelector('input[type="number"]'),u=parseInt(i.value)-c;return l(u>o||u===o?u:o)};return React.createElement("div",{className:"flexbox flex-gap-fix align-between flow-column"},React.createElement("label",{className:"components-input-control__label tx-uppercase weight-bold"},t),React.createElement("div",{className:"px-counter-input position-rv fluid "+(c||"")},c?"":React.createElement("button",{onClick:i,className:"btn square small fs-13 increase-btn far fa-minus position-ab pos-start-0 pos-top-0 divider-e icon-fix"}),React.createElement("input",{type:"number",min:r,max:o,value:parseInt(n)?parseInt(n):0,className:"form-control small radius-sm reset-appearance"+(c?"":" tx-align-center"),onChange:function(e){var t=e.target,n=parseInt(r)||0,a=parseInt(o)||0,c=parseInt(t.value);return l(c>=n||c<=a?c:0)}}),React.createElement("div",{className:"position-ab pos-end-0 pos-bottom-0 flexbox"},React.createElement("button",{onClick:function(e){var t=e.target,n=Phenix(t).ancestor(".px-counter-input"),r=parseInt(o)||9999999,c=a?parseInt(a):1,i=n.querySelector('input[type="number"]'),u=parseInt(i.value)+c;return l(u<r||u===r?u:r)},className:"btn square small fs-13 increase-btn far fa-plus divider-s icon-fix"}),c?React.createElement("button",{onClick:i,className:"btn square small fs-13 increase-btn far fa-minus divider-s icon-fix"}):"")))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(n(9307).Component)},1887:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function i(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return f}});var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(m,e);var t,n,r,f,d=(r=m,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(f){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function m(){var e;a(this,m);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return p(u(e=d.call.apply(d,[this].concat(n))),"state",{}),e}return t=m,(n=[{key:"render",value:function(){var e=this.props,t=e.name,n=e.type,r=e.value,a=e.checked,c=e.onChange,l=e.children,i=e.required,u=e.className,s="fs-12 option-control flexbox align-center-y",p={onChange:function(e){return c(e.target)}};return u&&(s+=" ".concat(u)),p.defaultChecked=a,i&&(p.required=!0),r&&(p.value=r),React.createElement("label",{className:s,"data-type":null!=n&&n.includes("switch")?"switch":n.includes("button")?"button":n},React.createElement("input",o({type:null==n?void 0:n.replace("switch-","").replace("button-",""),name:t},p)),null!=n&&n.includes("switch")?React.createElement("span",{className:"switch"}):null,l)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),m}(n(9307).Component)},3472:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(5736),o=n(5609),a=n(2175),c=n(6989),l=n.n(c),i=n(9307),u=n(8423),s=n.n(u),p=n(4678),f=n(1390);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],_n=!0,c=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);_n=!0);}catch(e){c=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e){var t=e.attributes,n=e.setAttributes,c=(0,a.useBlockProps)(),u=d((0,i.useState)([{value:t.post_type,label:(0,r.__)("Default","phenix")}]),2),b=u[0],g=u[1],h=d((0,i.useState)([{value:t.taxonomy,label:(0,r.__)("Default","phenix")}]),2),v=h[0],x=h[1];return(0,i.useEffect)((function(){!function(){var e,t=window.frames["editor-canvas"];if(t){var n=t.document.querySelectorAll(".px-media");n=function(e){if(Array.isArray(e))return y(e)}(e=n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),Phenix(n).multimedia()}t||Phenix(".px-media").multimedia()}(),v.length<2&&l()({path:"wp/v2/taxonomies"}).then((function(e){for(var t=[],n=0,r=Object.entries(e);n<r.length;n++){var o=d(r[n],2),a=o[0],c=o[1];["nav_menu","post_tag"].includes(a)||t.push({value:a,label:c.name})}v!==t&&x([].concat(t))})),postTypes.length<2&&l()({path:"wp/v2/types"}).then((function(e){for(var t=[],n=0,r=Object.entries(e);n<r.length;n++){var o=d(r[n],2),a=o[0],c=o[1];["attachment","nav_menu_item","wp_block","wp_navigation","wp_template","wp_template_part"].includes(a)||t.push({value:a,label:c.name})}b!==t&&g([].concat(t))}))}),[]),React.createElement(React.Fragment,null,React.createElement(a.InspectorControls,{key:"inspector"},React.createElement(o.PanelBody,{title:(0,r.__)("General Setting","phenix"),initialOpen:!0},React.createElement(o.SelectControl,{label:(0,r.__)("Taxonomy Type","phenix"),value:t.taxonomy,onChange:function(e){return n({taxonomy:e})},options:v}),React.createElement(o.SelectControl,{label:(0,r.__)("Data Type","phenix"),value:t.post_type,onChange:function(e){return n({post_type:e})},options:b}),React.createElement(o.TextControl,{key:"template-name",label:(0,r.__)("Card Template","phenix"),value:t.template_part,onChange:function(e){return n({template_part:e})}}),React.createElement("div",{className:"row gpx-20 mb-15"},React.createElement("div",{className:"col-6"},React.createElement(p.Z,{label:(0,r.__)("Max Items","phenix"),value:t.query_count,onChange:function(e){return n({query_count:e})}})),React.createElement("div",{className:"col-6"},React.createElement(o.SelectControl,{label:(0,r.__)("Order By","phenix"),value:t.order,onChange:function(e){return n({order:e})},options:[{label:(0,r.__)("Oldest","phenix"),value:"ASC"},{label:(0,r.__)("Newest","phenix"),value:"DESC"}]}))),React.createElement(o.ToggleControl,{label:(0,r.__)("Hide Empty Taxonomies","phenix"),checked:t.hide_empty,onChange:function(e){return n({hide_empty:e})}}),React.createElement(o.ToggleControl,{label:(0,r.__)("Enable Grid Mode","phenix"),checked:t.grid_mode,onChange:function(e){return n({grid_mode:e})}})),t.grid_mode?React.createElement(o.PanelBody,{title:(0,r.__)("Loop Grid","phenix"),initialOpen:!0},t.grid_cols_stat?"":React.createElement("div",{className:"mb-15"},React.createElement(p.Z,{label:(0,r.__)("Columns in Row","phenix"),icon:"far fa-mobile-android",value:t.grid_cols.replace("row-cols-",""),onChange:function(e){return n({grid_cols:"row-cols-"+(e>0?e:"auto")})},min:0,max:12})),React.createElement(o.ToggleControl,{label:(0,r.__)("Free Columns Size ?","phenix"),checked:t.grid_cols_stat,onChange:function(e){return n({grid_cols_stat:e})}}),React.createElement("div",{className:"row gpx-15 mb-15"},React.createElement("div",{className:"col-12 mb-20"},React.createElement(f.Z,{label:(0,r.__)("Flexbox Alignment","phenix"),value:t.grid_alignment,onChange:function(e){return n({grid_alignment:e})}})),React.createElement("div",{className:"col-6"},React.createElement(o.ToggleControl,{label:(0,r.__)("Reverse ","phenix"),checked:t.grid_flow.length>0,onChange:function(e){return n(e?{grid_flow:"flow-reverse"}:{grid_flow:""})}})),React.createElement("div",{className:"col-6"},React.createElement(o.ToggleControl,{label:(0,r.__)("Nowrap","phenix"),checked:t.grid_nowrap.length>0,onChange:function(e){return n(e?{grid_nowrap:"flow-nowrap"}:{grid_nowrap:""})}})),React.createElement("div",{className:"col-6"},React.createElement(o.ToggleControl,{label:(0,r.__)("Slider Mode","phenix"),checked:t.slider_mode,onChange:function(e){return n({slider_mode:e})}})),React.createElement("div",{className:"col-6"},React.createElement(o.ToggleControl,{label:(0,r.__)("Masonry","phenix"),checked:t.grid_masonry.length>0,onChange:function(e){return n(e?{grid_masonry:"px-masonry"}:{grid_masonry:""})}})))):""),t.preview?React.createElement("img",{src:"https://design.phenixthemes.com/px-assets/slider-placeholder.svg",alt:"",className:"fluid"}):React.createElement("div",c,React.createElement(s(),{block:"phenix/taxonomies",attributes:t})))}},6989:function(e){e.exports=window.wp.apiFetch},2175:function(e){e.exports=window.wp.blockEditor},4981:function(e){e.exports=window.wp.blocks},5609:function(e){e.exports=window.wp.components},9307:function(e){e.exports=window.wp.element},5736:function(e){e.exports=window.wp.i18n},8423:function(e){e.exports=window.wp.serverSideRender},1299:function(e){e.exports=JSON.parse('{"u2":"phenix/taxonomies","TN":"Taxonomies Loop","W3":"design","Y4":{"taxonomy":{"type":"string","default":"category"},"post_type":{"type":"string","default":"post"},"template_part":{"type":"string","default":"pds/placeholder"},"query_count":{"type":"number","default":0},"order":{"type":"string","default":"ASC"},"hide_empty":{"type":"boolean","default":true},"grid_mode":{"type":"boolean","default":false},"grid_cols":{"type":"string","default":"row-cols-auto"},"grid_cols_stat":{"type":"boolean","default":true},"grid_flow":{"type":"string","default":""},"grid_nowrap":{"type":"string","default":""},"grid_masonry":{"type":"string","default":""},"grid_alignment":{"type":"string","default":""},"slider_mode":{"type":"boolean","default":false},"preview":{"type":"boolean","default":false}}}')}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return n[e](a,a.exports,o),a.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e=o(3472),t=o(1299),(0,o(4981).registerBlockType)(t.u2,{title:t.TN,category:t.W3,attributes:t.Y4,icon:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},React.createElement("path",{d:"M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z"})),edit:e.Z,save:function(){return null}})}();
//# sourceMappingURL=index.js.map