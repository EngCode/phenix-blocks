(()=>{"use strict";var e,t,n,r,o={3573:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(5736),o=n(6989),a=n.n(o),i=n(9307),l=n(5609),c=n(2175),s=n(9691),u=n(243);function p(e){var t,n=e.attributes,o=e.setAttributes,p=(0,c.useBlockProps)(),m=p.id;if(null!==(t=n.metadata)&&void 0!==t&&t.name){var d=document.querySelector('.block-editor-list-view-tree a[href="#block-'.concat(p["data-block"],'"] .components-truncate'));d&&(d.textContent=n.metadata.name)}return(0,i.useEffect)((function(){a()({path:"wp/v2/settings"}).then((function(e){e.title!==n.site_title&&o({site_title:e.title}),e.url&e.url!==n.site_link&&o({site_link:e.url})}))}),[]),p.title=n.site_title,p.href=n.site_link,p.className+=" inline-block",React.createElement(React.Fragment,null,React.createElement(c.InspectorControls,{key:"".concat(m,"-inspector")},React.createElement(l.PanelBody,{key:"".concat(m,"-settings"),title:"Logo Setting",initialOpen:!0},React.createElement("div",{className:"row gpx-10 mb-10"},React.createElement("div",{className:"col-5"},React.createElement(l.TextControl,{label:(0,r.__)("Size (Height)","pds-blocks"),value:n.size,onChange:function(e){return o({size:e})}})),React.createElement("div",{className:"col-7"},React.createElement(l.TextControl,{label:(0,r.__)("Width (Optional)","pds-blocks"),value:n.width,onChange:function(e){return o({width:e})}}))),React.createElement(u.Z,{label:(0,r.__)("Upload Logo","pds-blocks"),value:n.logo,setValue:function(e){return o({logo:e.url,logo_id:e.id})},size:"small",className:"mb-15"}),React.createElement(u.Z,{label:(0,r.__)("Upload Favicon","pds-blocks"),value:n.fevicon,setValue:function(e){return o({fevicon:e.url,favicon_id:e.id})},size:"small",className:"mb-15"}),React.createElement(l.ToggleControl,{label:(0,r.__)("Responsive Logo","pds-blocks"),checked:n.responsive,onChange:function(e){return o({responsive:e})}}),n.responsive?React.createElement(React.Fragment,null,React.createElement(l.ToggleControl,{label:"Use Favicon for Mobile",checked:n.use_fevicon,onChange:function(e){return o({use_fevicon:e})}}),n.use_fevicon?null:React.createElement(u.Z,{label:"Upload Mobile Logo",value:n.mobile_logo,setValue:function(e){return o({mobile_logo:e.url})},size:"small"})):null,React.createElement("button",{type:"button",className:"tx-uppercase btn fluid tiny fs-12 mt-5 primary radius-sm",onClick:function(e){e.target.classList.add("px-loading"),a()({path:"/wp/v2/settings",method:"POST",data:{site_icon:n.favicon_id}}).then((function(t){return e.target.classList.remove("px-loading")})),a()({method:"POST",path:"/wp/v2/settings",data:{site_logo:n.logo_id}}).then((function(t){return e.target.classList.remove("px-loading")}))}},(0,r.__)("Update Site Logo","pds-blocks")))),n.preview?React.createElement("img",{src:s,alt:"",className:"fluid"}):React.createElement("a",p,React.createElement("img",{src:n.logo,className:n.responsive?"hidden-md-down":"",alt:p.title,style:{maxHeight:"".concat(parseInt(n.size),"px")},width:parseInt(n.width)?parseInt(n.width):null,height:parseInt(n.size)}),n.responsive?React.createElement("img",{src:n.use_fevicon?n.fevicon:n.mobile_logo,className:"hidden-lg-up",alt:p.title,style:{height:n.size},width:parseInt(n.size),height:parseInt(n.size)}):null))}},243:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2175);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r)}}function i(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:String(t)}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(p,e);var t,n,i,s,u=(i=p,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(i);if(s){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),u.apply(this,arguments)}return t=p,(n=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,o=e.size,a=e.type,i=e.setValue,l=e.className;return React.createElement(React.Fragment,null,React.createElement(r.MediaUpload,{onSelect:i,value:n,render:function(e){var r=e.open;return React.createElement("div",{className:"mouse-pointer",onClick:r},t?React.createElement("label",{className:"mb-5"},t):"",React.createElement("div",{className:"".concat(l?"".concat(l):"")},"small"===o?React.createElement("div",{className:"flexbox align-center-y align-between pd-5 border-solid border-1 border-alpha-15 radius-sm"},a&&"image"!==a?null:React.createElement("img",{src:n,style:{maxHeight:"1.5rem"}}),React.createElement("button",{key:"change-media",onClick:r,className:"btn square primary tiny radius-sm fs-12 fas fa-upload"})):React.createElement("div",{className:"flexbox align-center-y align-between"},a&&"image"!==a?null:React.createElement("img",{src:n,className:"radius-sm radius-top",style:{maxWidth:"100%",display:"block"}}),React.createElement("button",{key:"change-media",onClick:r,className:"btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon"},"Select File"))))}}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(n(9307).Component)},9691:(e,t,n)=>{e.exports=n.p+"images/preview.6b89ea33.jpg"},6989:e=>{e.exports=window.wp.apiFetch},2175:e=>{e.exports=window.wp.blockEditor},4981:e=>{e.exports=window.wp.blocks},5609:e=>{e.exports=window.wp.components},9307:e=>{e.exports=window.wp.element},5736:e=>{e.exports=window.wp.i18n},9919:e=>{e.exports=JSON.parse('{"apiVersion":2,"name":"phenix/logo","version":"0.1.0","title":"Phenix Logo","category":"design","description":"Main Logo Block for Phenix Header.","supports":{"html":false,"renaming":true,"__experimentalOnEnter":true,"__experimentalMetadata":true,"interactivity":{"clientNavigation":true}},"attributes":{"metadata":{"name":{"type":"string","default":""}},"preview":{"type":"boolean","default":false},"site_title":{"type":"string","default":""},"logo":{"type":"string","default":"https://via.placeholder.com/200x90.webp?text=Logo%20Placeholder"},"size":{"type":"string","default":"42px"},"width":{"type":"string","default":""},"site_link":{"type":"string","default":"#none"},"logo_id":{"type":"number","default":0},"favicon_id":{"type":"number","default":0},"fevicon":{"type":"string","default":"https://via.placeholder.com/512x512.webp?text=Fevicon"},"responsive":{"type":"boolean","default":false},"use_fevicon":{"type":"boolean","default":false},"mobile_logo":{"type":"boolean","default":"https://via.placeholder.com/512x512.webp?text=Logo"}},"example":{"attributes":{"preview":true}},"textdomain":"pds-blocks","editorScript":"file:./index.js"}')}},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return o[e](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"})(),e=i(3573),t=i(9919),n=i(4981),r=i(2175),(0,n.registerBlockType)(t,{icon:React.createElement("svg",{fill:"none",viewBox:"0 0 32 32"},React.createElement("path",{fill:"#1E1E1E",d:"M16 0C7.067 0 0 7.067 0 16s7.067 16 16 16 16-7.067 16-16S24.933 0 16 0zm0 2.667c7.333 0 13.333 6 13.333 13.333v.133c-2.533-1.466-5.866-3.066-6-3.2-.4-.133-.933-.133-1.466.134l-5.2 3.733-6-2c-.4-.133-.667 0-1.067.133L3.067 18.8c-.134-.933-.4-1.733-.4-2.667 0-7.466 6-13.466 13.333-13.466zm0 26.666c-5.467 0-10.133-3.333-12.267-8l6.534-3.866 6.266 2.133c.4.133.934 0 1.2-.133l5.2-3.734c1.467.667 4.4 2.134 6.267 3.334-1.6 5.866-6.933 10.266-13.2 10.266z"})),edit:e.Z,save:function(e){var t=e.attributes,n=t.site_link,o=r.useBlockProps.save();return o.href=n||"#none",o.title=t.site_title,o.className+=" inline-block",React.createElement("a",o,React.createElement("img",{src:t.logo,className:t.responsive?"hidden-md-down":"",alt:o.title,style:{maxHeight:"".concat(parseInt(t.size),"px")},width:parseInt(t.width)?parseInt(t.width):null,height:parseInt(t.size)}),t.responsive?React.createElement("img",{src:t.use_fevicon?t.fevicon:t.mobile_logo,className:"hidden-lg-up",alt:o.title,width:parseInt(t.size),height:parseInt(t.size)}):null)}})})();
//# sourceMappingURL=index.js.map