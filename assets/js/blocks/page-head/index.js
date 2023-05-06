!function(){"use strict";var e,t,n={8846:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(5736),o=(n(6989),n(9307),n(8423)),c=n.n(o),a=n(5609),i=n(2175),l=n(8831);function u(e){var t=e.attributes,n=(e.setAttributes,(0,i.useBlockProps)());return React.createElement(React.Fragment,null,React.createElement(i.InspectorControls,{key:"inspector"},React.createElement(a.PanelBody,{title:(0,r.__)("General Options","pds-blocks"),initialOpen:!0}),React.createElement(a.PanelBody,{title:(0,r.__)("Title Options","pds-blocks"),initialOpen:!0}),React.createElement(a.PanelBody,{title:(0,r.__)("Breadcrumb Options","pds-blocks"),initialOpen:!0}),React.createElement(a.PanelBody,{title:(0,r.__)("Description Options","pds-blocks"),initialOpen:!0})),t.preview?React.createElement("img",{src:l,alt:"",className:"fluid"}):React.createElement("div",n,React.createElement(c(),{block:"phenix/page-head",attributes:t})))}n(9703),n(4034),n(4678),n(241),n(1887),n(4261)},4034:function(e,t,n){var r=n(9307);n(573);r.Component},9703:function(e,t,n){n(5736),n(6989);var r=n(9307);n(241);r.Component},4678:function(e,t,n){n(9307).Component},573:function(e,t,n){n(5736),n(6989),n(9307),t.Z=function(){var e=0,t=setInterval((function(){document.querySelectorAll(".pds-tm-control").forEach((function(e){var t=e.classList;t.contains("px-select")&&!Phenix(e).ancestor(".px-dropdown")?Phenix(e).select():t.contains("px-dropdown")&&(Phenix(e).dropdown(),e.querySelectorAll(".pds-tm-control.px-select").forEach((function(e){return Phenix(e).select()})))})),++e>30&&clearInterval(t)}),500),n=function(e){var t=0,n=setInterval((function(){e.querySelectorAll('.px-media:not([style*="background-image"])').forEach((function(e){e.style.backgroundImage=null,Phenix(e).multimedia()})),e.querySelectorAll(".px-slider:not(.block-editor-block-list__block)").forEach((function(e){var t;e.classList.add("edit-mode"),e.getAttribute("data-autoplay")&&e.setAttribute("data-autoplay",!1),(t=e).classList.add("flow-nowrap"),e.getAttribute("data-md")&&t.classList.add("row-cols-md-".concat(e.getAttribute("data-md"))),e.getAttribute("data-lg")&&t.classList.add("row-cols-md-".concat(e.getAttribute("data-lg"))),e.getAttribute("data-xl")&&t.classList.add("row-cols-md-".concat(e.getAttribute("data-xl")))})),e.querySelectorAll(".px-navigation").forEach((function(e){return Phenix(e).menu()})),(t+=1)>100&&clearInterval(n)}),500)};if(window.frames["editor-canvas"]){n(window.frames["editor-canvas"].document);var r=0,o=setInterval((function(){if(window.frames["editor-canvas"]&&window.frames["editor-canvas"].document)if(window.frames["editor-canvas"].document.querySelector("#fontawesome-css"))(r+=1)>10&&clearInterval(o);else{var e,t=window.frames["editor-canvas"].document,n=document.querySelector("#fontawesome-css"),c=!!n&&document.importNode(n,!0);c&&t.body&&(t.body.appendChild(c),clearInterval(o)),t&&t.querySelector("html")&&(null===(e=t.querySelector("html"))||void 0===e||e.classList.add("px-scrollbar"))}else clearInterval(o)}),300)}else window.Phenix&&window.document&&n(window.document)}},241:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(9196),o=n.n(r),c=n(9307),a=n(573);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function d(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(v,e);var t,n,r,c,i=(r=v,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(c){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function v(){var e;s(this,v);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(y(e=i.call.apply(i,[this].concat(n))),"state",{}),e}return t=v,(n=[{key:"componentDidMount",value:function(){(0,a.Z)()}},{key:"componentDidUpdate",value:function(){(0,a.Z)()}},{key:"shouldComponentUpdate",value:function(e,t){return e.value!==this.props.value||e.options!==this.props.options}},{key:"render",value:function(){var e=this.props,t=e.name,n=(e.type,e.size),r=e.label,c=e.value,a=e.options,i=e.multiple,s=e.onChange,f=e.className,p=e.placeholder,d=e.search,y=(Date.now().toString(36),Math.random().toString(36).substr(2,5),"-flexbox-".concat(screen,"-option"),{onChange:function(e){return s(e.target)}});d&&(y["data-search"]=1),c&&(y.defaultValue=c),i&&(y.multiple=i),p&&(y["data-placeholder"]=p);var b=[];return Array.isArray(a)&&!a[0].type?a.forEach((function(e){b.push(o().createElement("option",{key:e.value,value:e.value},"".concat(e.label)))})):a[0]&&a[0].type?b=a:Object.entries(a).forEach((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],_n=!0,a=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);_n=!0);}catch(e){a=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(a)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=r[0],a=r[1],i=[];a.forEach((function(e){i.push(o().createElement("option",{key:e.value,value:e.value},"".concat(e.label)))}));var l=o().createElement("optgroup",{key:"".concat(c,"-group"),label:"".concat(c)},i);b.push(l)})),o().createElement(o().Fragment,null,r?o().createElement("label",{className:"tx-capitalize fs-13",style:{marginBottom:5}},"".concat(r)):null,o().createElement("div",{key:"select-wrapper",className:"px-select ".concat(f||"")},o().createElement("select",l({key:"select-element",name:t,className:"px-select pds-tm-control form-control ".concat(n||"small"," radius-md")},y),b)))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),v}(c.Component)},4261:function(e,t,n){n(5736);var r=n(9307);n(241),n(1887);r.Component},1887:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function l(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return p}});var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(y,e);var t,n,r,p,d=(r=y,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(p){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function y(){var e;c(this,y);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return f(u(e=d.call.apply(d,[this].concat(n))),"state",{}),e}return t=y,(n=[{key:"render",value:function(){var e=this.props,t=e.name,n=e.type,r=e.value,c=e.checked,a=e.onChange,i=e.children,l=e.required,u=e.className,s="fs-12 option-control flexbox align-center-y",f={onChange:function(e){return a(e.target)}};return u&&(s+=" ".concat(u)),f.defaultChecked=c,l&&(f.required=!0),r&&(f.value=r),React.createElement("label",{className:s,"data-type":null!=n&&n.includes("switch")?"switch":n.includes("button")?"button":n},React.createElement("input",o({type:null==n?void 0:n.replace("switch-","").replace("button-",""),name:t},f)),null!=n&&n.includes("switch")?React.createElement("span",{className:"switch"}):null,i)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),y}(n(9307).Component)},8831:function(e,t,n){e.exports=n.p+"images/preview.664f1e5c.jpg"},9196:function(e){e.exports=window.React},6989:function(e){e.exports=window.wp.apiFetch},2175:function(e){e.exports=window.wp.blockEditor},4981:function(e){e.exports=window.wp.blocks},5609:function(e){e.exports=window.wp.components},9307:function(e){e.exports=window.wp.element},5736:function(e){e.exports=window.wp.i18n},8423:function(e){e.exports=window.wp.serverSideRender},9205:function(e){e.exports=JSON.parse('{"u2":"phenix/page-head","TN":"Page Head","W3":"design","Y4":{"preview":{"type":"boolean","default":false},"mode":{"type":"string","default":"title"},"title":{"type":"object","default":{}},"breadcrumb":{"type":"object","default":{}}}}')}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var c=r[e]={exports:{}};return n[e](c,c.exports,o),c.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../"}(),e=o(8846),t=o(9205),(0,o(4981).registerBlockType)(t.u2,{title:t.TN,category:t.W3,attributes:t.Y4,icon:React.createElement("svg",{fill:"none",viewBox:"0 0 30 28"},React.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M16.187 27.68c.293.107.6.16.906.16.707 0 1.4-.293 1.894-.853L29.08 15.52c.667-.76.827-1.8.413-2.72a2.498 2.498 0 00-2.306-1.493h-3.12v-8.6c0-1.067-.64-2-1.64-2.374a2.498 2.498 0 00-2.8.694L9.533 12.493c-.666.76-.826 1.8-.413 2.72a2.497 2.497 0 002.307 1.494h3.12v8.6c0 1.067.64 2 1.64 2.373zM21.12 2.347a.485.485 0 01.387-.187c.08 0 .16.013.2.04.106.04.346.173.346.507v9.6c0 .546.454 1 1 1h4.12a.52.52 0 01.494.32c.04.093.12.333-.094.573L17.48 25.68a.502.502 0 01-.587.147.523.523 0 01-.346-.507v-9.6c0-.546-.454-1-1-1h-4.12a.52.52 0 01-.494-.32.515.515 0 01.094-.573L21.12 2.347zM1 4.333h9.333c.547 0 1-.453 1-1 0-.546-.453-1-1-1H1c-.547 0-1 .454-1 1 0 .547.453 1 1 1zm9 20.334c0 .546-.453 1-1 1H1c-.547 0-1-.454-1-1 0-.547.453-1 1-1h8c.547 0 1 .453 1 1zM1 15h4c.547 0 1-.453 1-1 0-.547-.453-1-1-1H1c-.547 0-1 .453-1 1 0 .547.453 1 1 1z",clipRule:"evenodd"})),edit:e.Z,save:function(){return null}})}();
//# sourceMappingURL=index.js.map