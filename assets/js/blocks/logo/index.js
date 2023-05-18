!function(){"use strict";var e,t,n,o,r={3573:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(5736),r=n(6989),i=n.n(r),a=n(9307),l=n(5609),c=n(2175),s=n(9691),u=n(243);function p(e){var t=e.attributes,n=e.setAttributes,r=(0,c.useBlockProps)();return(0,a.useEffect)((function(){i()({path:"wp/v2/settings"}).then((function(e){e.title!==t.site_title&&n({site_title:e.title}),e.url&e.url!==t.site_link&&n({site_link:e.url})}))}),[]),r.title=t.site_title,r.href=t.site_link,r.className+=" inline-block",React.createElement(React.Fragment,null,React.createElement(c.InspectorControls,{key:"inspector"},React.createElement(l.PanelBody,{title:"Logo Setting",initialOpen:!0},React.createElement("div",{className:"row gpx-10 mb-10"},React.createElement("div",{className:"col-5"},React.createElement(l.TextControl,{label:(0,o.__)("Size (Height)","pds-blocks"),value:t.size,onChange:function(e){return n({size:e})}})),React.createElement("div",{className:"col-7"},React.createElement(l.TextControl,{label:(0,o.__)("Width (Optional)","pds-blocks"),value:t.width,onChange:function(e){return n({width:e})}}))),React.createElement(u.Z,{label:(0,o.__)("Upload Logo","pds-blocks"),value:t.logo,setValue:function(e){return n({logo:e.url,logo_id:e.id})},size:"small",className:"mb-15"}),React.createElement(u.Z,{label:(0,o.__)("Upload Favicon","pds-blocks"),value:t.fevicon,setValue:function(e){return n({fevicon:e.url,favicon_id:e.id})},size:"small",className:"mb-15"}),React.createElement(l.ToggleControl,{label:(0,o.__)("Responsive Logo","pds-blocks"),checked:t.responsive,onChange:function(e){return n({responsive:e})}}),t.responsive?React.createElement(React.Fragment,null,React.createElement(l.ToggleControl,{label:"Use Favicon for Mobile",checked:t.use_fevicon,onChange:function(e){return n({use_fevicon:e})}}),t.use_fevicon?null:React.createElement(u.Z,{label:"Upload Mobile Logo",value:t.mobile_logo,setValue:function(e){return n({mobile_logo:e.url})},size:"small"})):null,React.createElement("button",{type:"button",className:"tx-uppercase btn fluid tiny fs-12 mt-5 primary radius-sm",onClick:function(e){e.target.classList.add("px-loading"),i()({path:"/wp/v2/settings",method:"POST",data:{site_icon:t.favicon_id}}).then((function(t){return e.target.classList.remove("px-loading")})),i()({method:"POST",path:"/wp/v2/settings",data:{site_logo:t.logo_id}}).then((function(t){return e.target.classList.remove("px-loading")}))}},(0,o.__)("Update Site Logo","pds-blocks")))),t.preview?React.createElement("img",{src:s,alt:"",className:"fluid"}):React.createElement("a",r,React.createElement("img",{src:t.logo,className:t.responsive?"hidden-md-down":"",alt:r.title,style:{maxHeight:"".concat(parseInt(t.size),"px")},width:parseInt(t.width)?parseInt(t.width):null,height:parseInt(t.size)}),t.responsive?React.createElement("img",{src:t.use_fevicon?t.fevicon:t.mobile_logo,className:"hidden-lg-up",alt:r.title,style:{height:t.size},width:parseInt(t.size),height:parseInt(t.size)}):null))}},243:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(2175);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t);if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key,"string"),"symbol"===r(i)?i:String(i)),o)}var i}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function c(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(f,e);var t,n,r,u,p=(r=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(u){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function f(){return i(this,f),p.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,r=e.size,i=e.type,a=e.setValue,l=e.className;return React.createElement(React.Fragment,null,React.createElement(o.MediaUpload,{onSelect:a,value:n,render:function(e){var o=e.open;return React.createElement("div",{className:"mouse-pointer",onClick:o},t?React.createElement("label",{className:"mb-5"},t):"",React.createElement("div",{className:"".concat(l?"".concat(l):"")},"small"===r?React.createElement("div",{className:"flexbox align-center-y align-between pd-5 border-solid border-1 border-alpha-15 radius-sm"},i&&"image"!==i?null:React.createElement("img",{src:n,style:{maxHeight:"1.5rem"}}),React.createElement("button",{key:"change-media",onClick:o,className:"btn square primary tiny radius-sm fs-12 fas fa-upload"})):React.createElement("div",{className:"flexbox align-center-y align-between"},i&&"image"!==i?null:React.createElement("img",{src:n,className:"radius-sm radius-top",style:{maxWidth:"100%",display:"block"}}),React.createElement("button",{key:"change-media",onClick:o,className:"btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon"},"Select File"))))}}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(n(9307).Component)},9691:function(e,t,n){e.exports=n.p+"images/preview.14c1f069.jpg"},6989:function(e){e.exports=window.wp.apiFetch},2175:function(e){e.exports=window.wp.blockEditor},4981:function(e){e.exports=window.wp.blocks},5609:function(e){e.exports=window.wp.components},9307:function(e){e.exports=window.wp.element},5736:function(e){e.exports=window.wp.i18n},9919:function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"phenix/logo","version":"0.1.0","title":"Phenix Logo","category":"design","description":"Main Logo Block for Phenix Header.","supports":{"html":false},"attributes":{"preview":{"type":"boolean","default":false},"site_title":{"type":"string","default":""},"logo":{"type":"string","default":"https://via.placeholder.com/200x90.webp?text=Logo%20Placeholder"},"size":{"type":"string","default":"42px"},"width":{"type":"string","default":""},"site_link":{"type":"string","default":"#none"},"logo_id":{"type":"number","default":0},"favicon_id":{"type":"number","default":0},"fevicon":{"type":"string","default":"https://via.placeholder.com/512x512.webp?text=Fevicon"},"responsive":{"type":"boolean","default":false},"use_fevicon":{"type":"boolean","default":false},"mobile_logo":{"type":"boolean","default":"https://via.placeholder.com/512x512.webp?text=Logo"}},"example":{"attributes":{"preview":true}},"textdomain":"pds-blocks","editorScript":"file:./index.js"}')}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../"}(),e=a(3573),t=a(9919),n=a(4981),o=a(2175),(0,n.registerBlockType)(t,{icon:React.createElement("svg",{fill:"none",viewBox:"0 0 32 32"},React.createElement("path",{fill:"#1E1E1E",d:"M16 0C7.067 0 0 7.067 0 16s7.067 16 16 16 16-7.067 16-16S24.933 0 16 0zm0 2.667c7.333 0 13.333 6 13.333 13.333v.133c-2.533-1.466-5.866-3.066-6-3.2-.4-.133-.933-.133-1.466.134l-5.2 3.733-6-2c-.4-.133-.667 0-1.067.133L3.067 18.8c-.134-.933-.4-1.733-.4-2.667 0-7.466 6-13.466 13.333-13.466zm0 26.666c-5.467 0-10.133-3.333-12.267-8l6.534-3.866 6.266 2.133c.4.133.934 0 1.2-.133l5.2-3.734c1.467.667 4.4 2.134 6.267 3.334-1.6 5.866-6.933 10.266-13.2 10.266z"})),edit:e.Z,save:function(e){var t=e.attributes,n=t.site_link,r=o.useBlockProps.save();return r.href=n||"#none",r.title=t.site_title,r.className+=" inline-block",React.createElement("a",r,React.createElement("img",{src:t.logo,className:t.responsive?"hidden-md-down":"",alt:r.title,style:{maxHeight:"".concat(parseInt(t.size),"px")},width:parseInt(t.width)?parseInt(t.width):null,height:parseInt(t.size)}),t.responsive?React.createElement("img",{src:t.use_fevicon?t.fevicon:t.mobile_logo,className:"hidden-lg-up",alt:r.title,width:parseInt(t.size),height:parseInt(t.size)}):null)}})}();
//# sourceMappingURL=index.js.map