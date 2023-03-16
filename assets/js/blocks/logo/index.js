!function(){"use strict";var e,t,n,o,i={3573:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(5736),i=n(6989),r=n.n(i),a=n(9307),l=n(5609),c=n(2175),s=n(243);function u(e){var t=e.attributes,n=e.setAttributes,i=(0,c.useBlockProps)();return(0,a.useEffect)((function(){r()({path:"wp/v2/settings"}).then((function(e){e.title!==t.site_title&&n({site_title:e.title}),e.url&e.url!==t.site_link&&n({site_link:e.url})}))}),[]),i.title=t.site_title,i.href=t.site_link,i.className+=" inline-block",React.createElement(React.Fragment,null,React.createElement(c.InspectorControls,{key:"inspector"},React.createElement(l.PanelBody,{title:"Logo Setting",initialOpen:!0},React.createElement("div",{className:"row gpx-10 mb-10"},React.createElement("div",{className:"col-5"},React.createElement(l.TextControl,{label:(0,o.__)("Size (Height)","phenix"),value:t.size,onChange:function(e){return n({size:e})}})),React.createElement("div",{className:"col-7"},React.createElement(l.TextControl,{label:(0,o.__)("Width (Optional)","phenix"),value:t.width,onChange:function(e){return n({width:e})}}))),React.createElement(s.Z,{label:(0,o.__)("Upload Logo","phenix"),value:t.logo,setValue:function(e){return n({logo:e.url,logo_id:e.id})},size:"small",className:"mb-15"}),React.createElement(s.Z,{label:(0,o.__)("Upload Favicon","phenix"),value:t.fevicon,setValue:function(e){return n({fevicon:e.url,favicon_id:e.id})},size:"small",className:"mb-15"}),React.createElement(l.ToggleControl,{label:(0,o.__)("Responsive Logo","phenix"),checked:t.responsive,onChange:function(e){return n({responsive:e})}}),t.responsive?React.createElement(React.Fragment,null,React.createElement(l.ToggleControl,{label:"Use Favicon for Mobile",checked:t.use_fevicon,onChange:function(e){return n({use_fevicon:e})}}),t.use_fevicon?null:React.createElement(s.Z,{label:"Upload Mobile Logo",value:t.mobile_logo,setValue:function(e){return n({mobile_logo:e.url})},size:"small"})):null,React.createElement("button",{type:"button",className:"tx-uppercase btn fluid tiny fs-12 mt-5 primary radius-sm",onClick:function(e){e.target.classList.add("px-loading"),r()({path:"/wp/v2/settings",method:"POST",data:{site_icon:t.favicon_id}}).then((function(t){return e.target.classList.remove("px-loading")})),r()({method:"POST",path:"/wp/v2/settings",data:{site_logo:t.logo_id}}).then((function(t){return e.target.classList.remove("px-loading")}))}},(0,o.__)("Update Site Logo","phenix")))),React.createElement("a",i,React.createElement("img",{src:t.logo,className:t.responsive?"hidden-md-down":"",alt:i.title,style:{maxHeight:"".concat(parseInt(t.size),"px")},width:parseInt(t.width)?parseInt(t.width):null,height:parseInt(t.size)}),t.responsive?React.createElement("img",{src:t.use_fevicon?t.fevicon:t.mobile_logo,className:"hidden-lg-up",alt:i.title,style:{height:t.size},width:parseInt(t.size),height:parseInt(t.size)}):null))}},243:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(2175);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function c(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(f,e);var t,n,i,u,p=(i=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(i);if(u){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function f(){return r(this,f),p.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,i=e.size,r=e.type,a=e.setValue,l=e.className;return React.createElement(React.Fragment,null,React.createElement(o.MediaUpload,{onSelect:a,value:n,render:function(e){var o=e.open;return React.createElement("div",{className:"mouse-pointer",onClick:o},t?React.createElement("label",{className:"mb-5"},t):"",React.createElement("div",{className:"".concat(l?"".concat(l):"")},"small"===i?React.createElement("div",{className:"flexbox align-center-y align-between pd-5 border-solid border-1 border-alpha-15 radius-sm"},r&&"image"!==r?null:React.createElement("img",{src:n,style:{maxHeight:"1.5rem"}}),React.createElement("button",{key:"change-media",onClick:o,className:"btn square primary tiny radius-sm fs-12 fas fa-upload"})):React.createElement("div",{className:"flexbox align-center-y align-between"},r&&"image"!==r?null:React.createElement("img",{src:n,className:"radius-sm radius-top",style:{maxWidth:"100%",display:"block"}}),React.createElement("button",{key:"change-media",onClick:o,className:"btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon"},"Select File"))))}}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(n(9307).Component)},6989:function(e){e.exports=window.wp.apiFetch},2175:function(e){e.exports=window.wp.blockEditor},4981:function(e){e.exports=window.wp.blocks},5609:function(e){e.exports=window.wp.components},9307:function(e){e.exports=window.wp.element},5736:function(e){e.exports=window.wp.i18n},9919:function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"phenix/logo","version":"0.1.0","title":"Phenix Logo","category":"design","description":"Main Logo Block for Phenix Header.","supports":{"html":false},"attributes":{"preview":{"type":"boolean","default":false},"site_title":{"type":"string","default":""},"logo":{"type":"string","default":"https://via.placeholder.com/200x90.webp?text=Logo%20Placeholder"},"size":{"type":"string","default":"42px"},"width":{"type":"string","default":""},"site_link":{"type":"string","default":"#none"},"logo_id":{"type":"number","default":0},"favicon_id":{"type":"number","default":0},"fevicon":{"type":"string","default":"https://via.placeholder.com/512x512.webp?text=Fevicon"},"responsive":{"type":"boolean","default":false},"use_fevicon":{"type":"boolean","default":false},"mobile_logo":{"type":"boolean","default":"https://via.placeholder.com/512x512.webp?text=Logo"}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}')}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return i[e](n,n.exports,a),n.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e=a(3573),t=a(9919),n=a(4981),o=a(2175),(0,n.registerBlockType)(t,{icon:React.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},React.createElement("path",{d:"M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 1.5c4.1 0 7.5 3.4 7.5 7.5v.1c-1.4-.8-3.3-1.7-3.4-1.8-.2-.1-.5-.1-.8.1l-2.9 2.1L9 11.3c-.2-.1-.4 0-.6.1l-3.7 2.2c-.1-.5-.2-1-.2-1.5 0-4.2 3.4-7.6 7.5-7.6zm0 15c-3.1 0-5.7-1.9-6.9-4.5l3.7-2.2 3.5 1.2c.2.1.5 0 .7-.1l2.9-2.1c.8.4 2.5 1.2 3.5 1.9-.9 3.3-3.9 5.8-7.4 5.8z"})),edit:e.Z,save:function(e){var t=e.attributes,n=t.site_link,i=o.useBlockProps.save();return i.href=n||"#none",i.title=t.site_title,i.className+=" inline-block",React.createElement("a",i,React.createElement("img",{src:t.logo,className:t.responsive?"hidden-md-down":"",alt:i.title,style:{maxHeight:"".concat(parseInt(t.size),"px")},width:parseInt(t.width)?parseInt(t.width):null,height:parseInt(t.size)}),t.responsive?React.createElement("img",{src:t.use_fevicon?t.fevicon:t.mobile_logo,className:"hidden-lg-up",alt:i.title,width:parseInt(t.size),height:parseInt(t.size)}):null)}})}();
//# sourceMappingURL=index.js.map