!function(){"use strict";var e,t,n={535:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(5736),o=n(6989),c=n.n(o),a=n(9307),i=n(5609);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],_n=!0,a=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);_n=!0);}catch(e){a=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(a)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(p,e);var t,n,o,a,l=(o=p,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(o);if(a){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function p(){var e;m(this,p);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return O(v(e=l.call.apply(l,[this].concat(n))),"state",{post_types:[]}),e}return t=p,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.options,o=t.features,a=t.meta,l=t.onChange;this.state.post_types.length<1&&c()({path:"wp/v2/types"}).then((function(t){for(var n=f({},e.state),r=0,o=Object.entries(t);r<o.length;r++){var c=u(o[r],2),a=c[0],i=c[1];["attachment","nav_menu_item","wp_block","wp_navigation","wp_template","wp_template_part"].includes(a)||n.post_types.push({value:a,label:i.name})}e.setState(f({},n))}));var p=[],s=[],m=[],h=n,y=a;y&&(Object.entries(y.options).forEach((function(t){var n,r=u(t,2),o=r[0];"post-type"===r[1].type&&e.state.post_types.length>0&&(n=React.createElement("div",{key:o},React.createElement("label",{key:"".concat(o,"-label"),className:"mb-5"},o.replace("-"," ").toUpperCase()),React.createElement("select",{key:"".concat(o,"-control"),className:"form-control small radius-md",name:"options:".concat(o),value:h["".concat(o)]?h["".concat(o)]:"post",onChange:function(e){return b(e.target)}},e.state.post_types.map((function(e){return React.createElement("option",{key:e.value,value:e.value},e.label)})),";")),s.push(n))})),s.length>0&&p.push(React.createElement(i.PanelBody,{key:"template-options",title:(0,r.__)("Template Options","phenix"),initialOpen:!0},s)),m.length>0&&p.push(React.createElement(i.PanelBody,{key:"template-features",title:(0,r.__)("Template Features","phenix"),initialOpen:!0},m)));var b=function(e){var t={options:n,features:o},r=e.name.split(":")[0],c=e.name.split(":")[1];return t[r][c]=e.value,l(t)};return React.createElement(React.Fragment,null,p)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(a.Component)},6679:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(5736),o=n(5609),c=n(2175),a=n(9307),i=n(6989),l=n.n(i),u=n(8423),p=n.n(u),s=n(535);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],_n=!0,a=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);_n=!0);}catch(e){a=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(a)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e){var t=e.attributes,n=e.setAttributes,i=(0,c.useBlockProps)(),u=h((0,a.useState)({post_types:[],taxonomies:[],templates_meta:{},template_list:[React.createElement("option",{key:(0,r.__)("Default","phenix"),value:""},(0,r.__)("Default","phenix"))]}),2),y=u[0],b=u[1];return(0,a.useEffect)((function(){l()({path:"pds-blocks/v2/options"}).then((function(e){var t=y,n=e.templates_meta,r=e.theme_parts;Object.entries(r).forEach((function(e){var n=h(e,2),r=n[0],o=n[1];if("string"==typeof o)t.template_list.push(React.createElement("option",{key:"".concat(r,"-").concat(o),value:o.replace(".php","")},o.replace("-"," ").replace("_","").replace(".php","")));else{var c=[];Object.entries(o).forEach((function(e){var t=h(e,2),n=t[0],o=t[1];c.push(React.createElement("option",{key:"".concat(n,"-").concat(o),value:"".concat(r,"/").concat(o.replace(".php",""))},"".concat(o.replace("-"," ").replace("_","").replace(".php",""))))})),t.template_list.push(React.createElement("optgroup",{key:"".concat(r,"-group"),label:"".concat(r)},c))}})),n!==y.templates_meta&&(t.templates_meta=n),t!==y&&b(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))}))}),[]),React.createElement(React.Fragment,null,React.createElement(c.InspectorControls,{key:"inspector"},React.createElement(o.PanelBody,{title:(0,r.__)("General Setting","phenix"),initialOpen:!0},React.createElement(o.SelectControl,{label:(0,r.__)("Template Name","phenix"),value:t.part_name,onChange:function(e){return n({part_name:e})}},y.template_list)),y.templates_meta[t.part_name]?React.createElement(s.Z,{options:t.part_options.options,features:t.part_options.features,meta:y.templates_meta[t.part_name],onChange:function(e){return n({part_options:e})}}):null),React.createElement("div",i,React.createElement(p(),{block:"phenix/theme-part",attributes:t})))}},6989:function(e){e.exports=window.wp.apiFetch},2175:function(e){e.exports=window.wp.blockEditor},4981:function(e){e.exports=window.wp.blocks},5609:function(e){e.exports=window.wp.components},9307:function(e){e.exports=window.wp.element},5736:function(e){e.exports=window.wp.i18n},8423:function(e){e.exports=window.wp.serverSideRender},3642:function(e){e.exports=JSON.parse('{"u2":"phenix/theme-part","TN":"Theme Part","W3":"design","Y4":{"part_name":{"type":"string","default":"_placeholder"},"part_options":{"type":"object","default":{}}}}')}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var c=r[e]={exports:{}};return n[e](c,c.exports,o),c.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e=o(6679),t=o(3642),(0,o(4981).registerBlockType)(t.u2,{title:t.TN,category:t.W3,attributes:t.Y4,icon:React.createElement("svg",{viewBox:"0 0 512 512"},React.createElement("path",{d:"M473.6 512H38.4C17.2 512 0 494.8 0 473.6V38.4C0 17.2 17.2 0 38.4 0h435.2C494.8 0 512 17.2 512 38.4v435.2c0 21.2-17.2 38.4-38.4 38.4zM38.4 17.1c-11.8 0-21.3 9.6-21.3 21.3v435.2c0 11.8 9.6 21.3 21.3 21.3h435.2c11.8 0 21.3-9.6 21.3-21.3V38.4c0-11.8-9.6-21.3-21.3-21.3H38.4z"}),React.createElement("path",{d:"M187.7 51.2h17.1v17.1h-17.1zm-136.5 0h17.1v17.1H51.2zm68.3 0h17.1v17.1h-17.1z"}),React.createElement("path",{d:"M473.6 0H38.4C17.2 0 0 17.2 0 38.4v72.5c0 4.7 3.8 8.5 8.5 8.5h494.9c4.7 0 8.5-3.8 8.5-8.5V38.4C512 17.2 494.8 0 473.6 0zM221.9 42.7v34.1c0 4.7-3.8 8.5-8.5 8.5h-34.1c-4.7 0-8.5-3.8-8.5-8.5V42.7c0-4.7 3.8-8.5 8.5-8.5h34.1c4.6-.1 8.5 3.7 8.5 8.5zm-68.3 0v34.1c0 4.7-3.8 8.5-8.5 8.5H111c-4.7 0-8.5-3.8-8.5-8.5V42.7c0-4.7 3.8-8.5 8.5-8.5h34.1c4.7-.1 8.5 3.7 8.5 8.5zm-76.8-8.6c4.7 0 8.5 3.8 8.5 8.5v34.1c0 4.7-3.8 8.5-8.5 8.5H42.7c-4.7 0-8.5-3.8-8.5-8.5v-34c0-4.7 3.8-8.5 8.5-8.5h34.1zM64 281.6h-4.3v-4.3c0-4.7-3.8-8.5-8.5-8.5s-8.5 3.8-8.5 8.5v12.8c0 4.7 3.8 8.5 8.5 8.5H64c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-12.8-36.1c4.7 0 8.5-3.8 8.5-8.5v-30.3c0-4.7-3.8-8.5-8.5-8.5s-8.5 3.8-8.5 8.5V237c0 4.7 3.8 8.5 8.5 8.5zM64 145.1H51.2c-4.7 0-8.5 3.8-8.5 8.5v12.8c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-4.3H64c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm233.7 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5.1-4.7-3.8-8.5-8.5-8.5zm-83.4 17h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5h-25c-4.7 0-8.5 3.8-8.5 8.5-.1 4.7 3.7 8.5 8.5 8.5zm200.3-17h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-233.7 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-58.5 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5.1-4.7-3.8-8.5-8.5-8.5zm233.8 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm104.6 0H448c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h4.3v4.3c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-12.8c0-4.7-3.8-8.5-8.5-8.5zm0 53.1c-4.7 0-8.5 3.8-8.5 8.5V237c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-30.3c0-4.7-3.8-8.5-8.5-8.5zm0 70.6c-4.7 0-8.5 3.8-8.5 8.5v4.3H448c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h12.8c4.7 0 8.5-3.8 8.5-8.5v-12.8c0-4.7-3.8-8.5-8.5-8.5zm-338.4 12.8h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm233.8 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-175.3 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm233.7 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-116.9 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm-58.4 0h-25c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h25c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5zm25.2-51.2h17.1c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5h-17.1v-17.1c0-4.7-3.8-8.5-8.5-8.5s-8.5 3.8-8.5 8.5v17.1h-17.1c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5h17.1v17.1c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5v-17.1zm196.3 93.9H51.2c-4.7 0-8.5 3.8-8.5 8.5v128c0 4.7 3.8 8.5 8.5 8.5h409.6c4.7 0 8.5-3.8 8.5-8.5v-128c0-4.7-3.8-8.5-8.5-8.5z"})),edit:e.Z,save:function(){return null}})}();
//# sourceMappingURL=index.js.map