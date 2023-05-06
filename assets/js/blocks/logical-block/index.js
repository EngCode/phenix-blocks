!function(){"use strict";var e,t,n,r,o={214:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(5736),o=n(5609),a=n(2175),c=n(138),l=n(241);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){var t,n=e.attributes,i=e.setAttributes,s=(0,a.useBlockProps)(),p=[{label:(0,r.__)("All","pds-blocks"),value:""},{label:(0,r.__)("Users Only","pds-blocks"),value:"users-only"},{label:(0,r.__)("Visitors Only","pds-blocks"),value:"visitors-only"}];return React.createElement(React.Fragment,null,React.createElement(a.InspectorControls,{key:"inspector"},React.createElement(o.PanelBody,{title:"Logic Settings",initialOpen:!0},React.createElement(l.Z,{key:"visibility",name:"visibility",placeholder:(0,r.__)("All","pds-blocks"),label:(0,r.__)("Show Only For","pds-blocks"),value:null===(t=n.logic)||void 0===t?void 0:t.visibility,onChange:function(e){var t=n.logic,r=e instanceof HTMLElement?e.getAttribute("name"):null;r&&(t["".concat(r)]="string"==typeof e?e:function(e){var t,n=[],r=e instanceof HTMLElement?e.getAttribute("type")||e.tagName:null;if("checkbox"===r||"radio"===r?t="boolean"===e.value?e.checked:e.checked?e.value:"":"SELECT"===r&&e.hasAttribute("multiple")?(e.parentNode.getAttribute("data-value").split(",").forEach((function(e){return""!==e?n.push(e):null})),t=n):t=null===r?e:e.value,t)return t}(e)),i({logic:u({},t)})},options:p}))),n.preview?React.createElement("img",{src:c,alt:"",className:"fluid"}):React.createElement("div",s,React.createElement(a.InnerBlocks,null)))}n(1887)},573:function(e,t,n){n(5736),n(6989),n(9307),t.Z=function(){var e=0,t=setInterval((function(){document.querySelectorAll(".pds-tm-control").forEach((function(e){var t=e.classList;t.contains("px-select")&&!Phenix(e).ancestor(".px-dropdown")?Phenix(e).select():t.contains("px-dropdown")&&(Phenix(e).dropdown(),e.querySelectorAll(".pds-tm-control.px-select").forEach((function(e){return Phenix(e).select()})))})),++e>30&&clearInterval(t)}),500),n=function(e){var t=0,n=setInterval((function(){e.querySelectorAll('.px-media:not([style*="background-image"])').forEach((function(e){e.style.backgroundImage=null,Phenix(e).multimedia()})),e.querySelectorAll(".px-slider:not(.block-editor-block-list__block)").forEach((function(e){var t;e.classList.add("edit-mode"),e.getAttribute("data-autoplay")&&e.setAttribute("data-autoplay",!1),(t=e).classList.add("flow-nowrap"),e.getAttribute("data-md")&&t.classList.add("row-cols-md-".concat(e.getAttribute("data-md"))),e.getAttribute("data-lg")&&t.classList.add("row-cols-md-".concat(e.getAttribute("data-lg"))),e.getAttribute("data-xl")&&t.classList.add("row-cols-md-".concat(e.getAttribute("data-xl")))})),e.querySelectorAll(".px-navigation").forEach((function(e){return Phenix(e).menu()})),(t+=1)>100&&clearInterval(n)}),500)};if(window.frames["editor-canvas"]){n(window.frames["editor-canvas"].document);var r=0,o=setInterval((function(){if(window.frames["editor-canvas"]&&window.frames["editor-canvas"].document)if(window.frames["editor-canvas"].document.querySelector("#fontawesome-css"))(r+=1)>10&&clearInterval(o);else{var e,t=window.frames["editor-canvas"].document,n=document.querySelector("#fontawesome-css"),a=!!n&&document.importNode(n,!0);a&&t.body&&(t.body.appendChild(a),clearInterval(o)),t&&t.querySelector("html")&&(null===(e=t.querySelector("html"))||void 0===e||e.classList.add("px-scrollbar"))}else clearInterval(o)}),300)}else window.document&&n(window.document)}},241:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(9196),o=n.n(r),a=n(9307),c=n(573);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(v,e);var t,n,r,a,l=(r=v,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(a){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function v(){var e;s(this,v);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return m(y(e=l.call.apply(l,[this].concat(n))),"state",{}),e}return t=v,(n=[{key:"componentDidMount",value:function(){(0,c.Z)()}},{key:"componentDidUpdate",value:function(){(0,c.Z)()}},{key:"shouldComponentUpdate",value:function(e,t){return e.value!==this.props.value||e.options!==this.props.options}},{key:"render",value:function(){var e=this.props,t=e.name,n=(e.type,e.size),r=e.label,a=e.value,c=e.options,l=e.multiple,s=e.onChange,p=e.className,f=e.placeholder,d=e.search,y=(Date.now().toString(36),Math.random().toString(36).substr(2,5),"-flexbox-".concat(screen,"-option"),{onChange:function(e){return s(e.target)}});d&&(y["data-search"]=1),a&&(y.defaultValue=a),l&&(y.multiple=l),f&&(y["data-placeholder"]=f);var b=[];return Array.isArray(c)&&!c[0].type?c.forEach((function(e){b.push(o().createElement("option",{key:e.value,value:e.value},"".concat(e.label)))})):c[0]&&c[0].type?b=c:Object.entries(c).forEach((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],_n=!0,c=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);_n=!0);}catch(e){c=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],c=r[1],l=[];c.forEach((function(e){l.push(o().createElement("option",{key:e.value,value:e.value},"".concat(e.label)))}));var i=o().createElement("optgroup",{key:"".concat(a,"-group"),label:"".concat(a)},l);b.push(i)})),o().createElement(o().Fragment,null,r?o().createElement("label",{className:"tx-capitalize fs-13",style:{marginBottom:5}},"".concat(r)):null,o().createElement("div",{key:"select-wrapper",className:"px-select ".concat(p||"")},o().createElement("select",i({key:"select-element",name:t,className:"px-select pds-tm-control form-control ".concat(n||"small"," radius-md")},y),b)))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),v}(a.Component)},1887:function(e,t,n){n(9307).Component},138:function(e,t,n){e.exports=n.p+"images/preview.3cd44ade.jpg"},9196:function(e){e.exports=window.React},6989:function(e){e.exports=window.wp.apiFetch},2175:function(e){e.exports=window.wp.blockEditor},4981:function(e){e.exports=window.wp.blocks},5609:function(e){e.exports=window.wp.components},9307:function(e){e.exports=window.wp.element},5736:function(e){e.exports=window.wp.i18n},2870:function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"phenix/logical-block","version":"1.0.0","title":"Logic Content","category":"design","description":"Show and Hide Blocks with Logical Conditions","supports":{"html":false},"attributes":{"logic":{"type":"object","default":{}},"preview":{"type":"boolean","default":false}},"example":{"attributes":{"preview":true}},"textdomain":"pds-blocks","editorScript":"file:./index.js"}')}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return o[e](n,n.exports,c),n.exports}c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../../"}(),e=c(214),t=c(2870),n=c(4981),r=c(2175),(0,n.registerBlockType)(t,{icon:React.createElement("svg",{fill:"none",viewBox:"0 0 32 32"},React.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M24.184 15A2.996 2.996 0 0127 13a3.006 3.006 0 013.001 3.002c0 1.654-1.346 3-3 3a2.996 2.996 0 01-2.816-2H18.99a.516.516 0 00-.004.052c0 .018-.002.035-.004.053l.515.294a1 1 0 01.367 1.371l-2.018 3.464a.998.998 0 01-1.361.364l-.525-.3c-.593.46-1.25.837-1.942 1.116V24a1 1 0 01-1 1H12v3h9v-9a1 1 0 012 0v10a1 1 0 01-1 1H11a1 1 0 01-1-1v-4H8.982a1 1 0 01-1-1v-.584A8.146 8.146 0 016.04 22.3l-.525.3a1 1 0 01-1.361-.365l-2.018-3.464a1 1 0 01.367-1.371l.516-.294a7.576 7.576 0 01-.001-2.212l-.515-.294a1 1 0 01-.367-1.371l2.018-3.464A1.001 1.001 0 015.515 9.4l.525.301a8.116 8.116 0 011.942-1.117V8a1 1 0 011-1H10V3a1 1 0 011-1h11a1 1 0 011 1v10a1 1 0 01-2 0V4h-9v3h1.018a1 1 0 011 1v.584A8.146 8.146 0 0115.96 9.7l.525-.3a1 1 0 011.361.366l2.018 3.464a1 1 0 01-.367 1.371l-.515.294a.516.516 0 01.004.052c0 .018.002.035.004.053h5.194zm-7.84 5.215l.273.156 1.009-1.734-.259-.148a1.002 1.002 0 01-.476-1.101c.113-.473.17-.939.17-1.387 0-.448-.057-.914-.17-1.387-.103-.432.091-.88.476-1.101l.259-.148-1.011-1.735-.273.156a1 1 0 01-1.18-.138 6.094 6.094 0 00-2.428-1.395 1 1 0 01-.717-.959V9H9.981v.293a1 1 0 01-.717.959 6.094 6.094 0 00-2.428 1.395.997.997 0 01-1.18.138l-.273-.156-1.011 1.735.259.148a1 1 0 01.476 1.102c-.113.47-.17.937-.17 1.386 0 .449.057.916.17 1.386a1 1 0 01-.476 1.102l-.259.148 1.011 1.735.273-.156c.381-.218.86-.161 1.18.138a6.114 6.114 0 002.429 1.394 1 1 0 01.717.959V23h2.037v-.293a1 1 0 01.717-.959 6.094 6.094 0 002.428-1.395c.321-.299.8-.356 1.18-.138zM26 16c0 .551.449 1 1 1 .551 0 1-.449 1-1 0-.551-.449-1-1-1-.551 0-1 .449-1 1zM9.707 13.293a.999.999 0 00-1.414 0l-2 2a.999.999 0 000 1.414l2 2a.997.997 0 001.414 0 .999.999 0 000-1.414L8.414 16l1.293-1.293a.999.999 0 000-1.414zm4 0a.999.999 0 10-1.414 1.414L13.586 16l-1.293 1.293a.999.999 0 101.414 1.414l2-2a.999.999 0 000-1.414l-2-2z",clipRule:"evenodd"})),edit:e.Z,save:function(e){return e.attributes,r.useBlockProps.save(),React.createElement(r.InnerBlocks.Content,null)}})}();
//# sourceMappingURL=index.js.map