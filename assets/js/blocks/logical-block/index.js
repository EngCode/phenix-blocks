(()=>{"use strict";var e,t,r,n,o={214:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(5736),o=r(5609),a=r(2175),l=r(138),i=r(241);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){var n,o,a,l;n=e,o=t,a=r[t],l=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==c(l)?l:String(l))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t,r=e.attributes,c=e.setAttributes,s=(0,a.useBlockProps)(),f=[{label:(0,n.__)("All","pds-blocks"),value:""},{label:(0,n.__)("Users Only","pds-blocks"),value:"users-only"},{label:(0,n.__)("Visitors Only","pds-blocks"),value:"visitors-only"}];return React.createElement(React.Fragment,null,React.createElement(a.InspectorControls,{key:"".concat(uniqueKey,"-inspector")},React.createElement(o.PanelBody,{title:"Logic Settings",initialOpen:!0},React.createElement(i.Z,{key:"visibility",name:"visibility",placeholder:(0,n.__)("All","pds-blocks"),label:(0,n.__)("Show Only For","pds-blocks"),value:null===(t=r.logic)||void 0===t?void 0:t.visibility,onChange:function(e){var t=r.logic,n=e instanceof HTMLElement?e.getAttribute("name"):null;n&&(t["".concat(n)]="string"==typeof e?e:function(e){var t,r=[],n=e instanceof HTMLElement?e.getAttribute("type")||e.tagName:null;if("checkbox"===n||"radio"===n?t="boolean"===e.value?e.checked:e.checked?e.value:"":"SELECT"===n&&e.hasAttribute("multiple")?(e.parentNode.getAttribute("data-value").split(",").forEach((function(e){return""!==e?r.push(e):null})),t=r):t=null===n?e:e.value,t)return t}(e)),c({logic:p({},t)})},options:f}))),r.preview?React.createElement("img",{src:l,alt:"",className:"fluid"}):React.createElement("div",u({},s,{key:"".concat(uniqueKey)}),React.createElement(a.InnerBlocks,null)))}r(1887)},573:(e,t,r)=>{r.d(t,{Z:()=>n}),r(5736),r(6989),r(9307);const n=function(){setTimeout((function(){document.querySelectorAll(".pds-tm-control").forEach((function(e){var t=e.classList;t.contains("px-select")&&!Phenix(e).ancestor(".px-dropdown")?Phenix(e).select():t.contains("px-dropdown")&&(Phenix(e).dropdown(),e.querySelectorAll(".pds-tm-control.px-select").forEach((function(e){return Phenix(e).select()})))}))}),1e3);var e=function(e){var t=0,r=setInterval((function(){e.querySelectorAll('.px-media:not([style*="background-image"]), .px-media.is-selected').forEach((function(e){e.style.backgroundImage=null,Phenix(e).multimedia()})),e.querySelectorAll(".px-slider:not(.block-editor-block-list__block)").forEach((function(e){var t;e.classList.add("edit-mode"),e.getAttribute("data-autoplay")&&e.setAttribute("data-autoplay",!1),(t=e).classList.add("flow-nowrap"),e.getAttribute("data-md")&&t.classList.add("row-cols-md-".concat(e.getAttribute("data-md"))),e.getAttribute("data-lg")&&t.classList.add("row-cols-md-".concat(e.getAttribute("data-lg"))),e.getAttribute("data-xl")&&t.classList.add("row-cols-md-".concat(e.getAttribute("data-xl")))})),e.querySelectorAll(".px-navigation").forEach((function(e){return Phenix(e).menu()})),(t+=1)>25&&clearInterval(r)}),500)};if(window.frames["editor-canvas"]){e(window.frames["editor-canvas"].document);var t=0,r=setInterval((function(){if(window.frames["editor-canvas"]&&window.frames["editor-canvas"].document)if(window.frames["editor-canvas"].document.querySelector("#fontawesome-css"))(t+=1)>10&&clearInterval(r);else{var e=window.frames["editor-canvas"].document,n=document.querySelector("#fontawesome-css"),o=!!n&&document.importNode(n,!0);o&&e.body&&(e.body.appendChild(o),clearInterval(r))}else clearInterval(r)}),300)}else window.Phenix&&window.document&&e(window.document)}},241:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(9196),o=r.n(n),a=r(9307),l=r(573);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function y(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:String(t)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(m,e);var t,r,n,a,b=(n=m,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(a){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function m(){var e,t,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return t=f(e=b.call.apply(b,[this].concat(a))),n={},(r=y(r="state"))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,e}return t=m,(r=[{key:"componentDidMount",value:function(){(0,l.Z)()}},{key:"componentDidUpdate",value:function(){(0,l.Z)()}},{key:"shouldComponentUpdate",value:function(e,t){return e.value!==this.props.value||e.options!==this.props.options}},{key:"render",value:function(){var e=this.props,t=e.name,r=(e.type,e.size),n=e.label,a=e.value,l=e.options,i=e.multiple,s=e.onChange,p=e.className,f=e.placeholder,d={onChange:function(e){return s(e.target)}};e.search&&(d["data-search"]=1),i&&(d.multiple=i),f&&(d["data-placeholder"]=f);var y=[];return Array.isArray(l)&&!l[0].type?l.forEach((function(e){y.push(o().createElement("option",{key:e.value,value:e.value},"".concat(e.label)))})):l[0]&&l[0].type?y=l:Object.entries(l).forEach((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,i=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],l=n[1],i=[];l.forEach((function(e){i.push(o().createElement("option",{key:e.value,value:e.value},"".concat(e.label)))}));var c=o().createElement("optgroup",{key:"".concat(a,"-group"),label:"".concat(a)},i);y.push(c)})),o().createElement(o().Fragment,null,n?o().createElement("label",{className:"tx-capitalize fs-13",style:{marginBottom:5}},"".concat(n)):null,o().createElement("div",{key:"select-wrapper",className:"px-select ".concat(p||""),"data-value":a},o().createElement("select",c({key:"select-element",name:t,defaultValue:a,className:"px-select pds-tm-control form-control ".concat(r||"small"," radius-md")},d),y)))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),m}(a.Component)},1887:(e,t,r)=>{r(9307)},138:(e,t,r)=>{e.exports=r.p+"images/preview.3cd44ade.jpg"},9196:e=>{e.exports=window.React},6989:e=>{e.exports=window.wp.apiFetch},2175:e=>{e.exports=window.wp.blockEditor},4981:e=>{e.exports=window.wp.blocks},5609:e=>{e.exports=window.wp.components},9307:e=>{e.exports=window.wp.element},5736:e=>{e.exports=window.wp.i18n},2870:e=>{e.exports=JSON.parse('{"apiVersion":2,"name":"phenix/logical-block","version":"1.0.0","title":"Logic Content","category":"design","description":"Show and Hide Blocks with Logical Conditions","supports":{"html":false,"__experimentalOnEnter":true,"__experimentalMetadata":true},"attributes":{"logic":{"type":"object","default":{}},"preview":{"type":"boolean","default":false}},"example":{"attributes":{"preview":true}},"textdomain":"pds-blocks","editorScript":"file:./index.js"}')}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return o[e](r,r.exports,l),r.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e+"../../"})(),e=l(214),t=l(2870),r=l(4981),n=l(2175),(0,r.registerBlockType)(t,{icon:React.createElement("svg",{fill:"none",viewBox:"0 0 32 32"},React.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M24.184 15A2.996 2.996 0 0127 13a3.006 3.006 0 013.001 3.002c0 1.654-1.346 3-3 3a2.996 2.996 0 01-2.816-2H18.99a.516.516 0 00-.004.052c0 .018-.002.035-.004.053l.515.294a1 1 0 01.367 1.371l-2.018 3.464a.998.998 0 01-1.361.364l-.525-.3c-.593.46-1.25.837-1.942 1.116V24a1 1 0 01-1 1H12v3h9v-9a1 1 0 012 0v10a1 1 0 01-1 1H11a1 1 0 01-1-1v-4H8.982a1 1 0 01-1-1v-.584A8.146 8.146 0 016.04 22.3l-.525.3a1 1 0 01-1.361-.365l-2.018-3.464a1 1 0 01.367-1.371l.516-.294a7.576 7.576 0 01-.001-2.212l-.515-.294a1 1 0 01-.367-1.371l2.018-3.464A1.001 1.001 0 015.515 9.4l.525.301a8.116 8.116 0 011.942-1.117V8a1 1 0 011-1H10V3a1 1 0 011-1h11a1 1 0 011 1v10a1 1 0 01-2 0V4h-9v3h1.018a1 1 0 011 1v.584A8.146 8.146 0 0115.96 9.7l.525-.3a1 1 0 011.361.366l2.018 3.464a1 1 0 01-.367 1.371l-.515.294a.516.516 0 01.004.052c0 .018.002.035.004.053h5.194zm-7.84 5.215l.273.156 1.009-1.734-.259-.148a1.002 1.002 0 01-.476-1.101c.113-.473.17-.939.17-1.387 0-.448-.057-.914-.17-1.387-.103-.432.091-.88.476-1.101l.259-.148-1.011-1.735-.273.156a1 1 0 01-1.18-.138 6.094 6.094 0 00-2.428-1.395 1 1 0 01-.717-.959V9H9.981v.293a1 1 0 01-.717.959 6.094 6.094 0 00-2.428 1.395.997.997 0 01-1.18.138l-.273-.156-1.011 1.735.259.148a1 1 0 01.476 1.102c-.113.47-.17.937-.17 1.386 0 .449.057.916.17 1.386a1 1 0 01-.476 1.102l-.259.148 1.011 1.735.273-.156c.381-.218.86-.161 1.18.138a6.114 6.114 0 002.429 1.394 1 1 0 01.717.959V23h2.037v-.293a1 1 0 01.717-.959 6.094 6.094 0 002.428-1.395c.321-.299.8-.356 1.18-.138zM26 16c0 .551.449 1 1 1 .551 0 1-.449 1-1 0-.551-.449-1-1-1-.551 0-1 .449-1 1zM9.707 13.293a.999.999 0 00-1.414 0l-2 2a.999.999 0 000 1.414l2 2a.997.997 0 001.414 0 .999.999 0 000-1.414L8.414 16l1.293-1.293a.999.999 0 000-1.414zm4 0a.999.999 0 10-1.414 1.414L13.586 16l-1.293 1.293a.999.999 0 101.414 1.414l2-2a.999.999 0 000-1.414l-2-2z",clipRule:"evenodd"})),edit:e.Z,save:function(e){return e.attributes,n.useBlockProps.save(),React.createElement(n.InnerBlocks.Content,null)}})})();
//# sourceMappingURL=index.js.map