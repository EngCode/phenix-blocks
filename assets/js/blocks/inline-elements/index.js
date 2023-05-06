!function(){"use strict";var e,t,n,a,r={6431:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(5609),r=n(2175),o=n(9539);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e){var t=e.attributes,n=e.setAttributes,l=(0,r.useBlockProps)();return"div"===t.tagName&&(l.className+=" inline-block"),React.createElement(React.Fragment,null,React.createElement(r.InspectorControls,{key:"inspector"},React.createElement(a.PanelBody,{title:"General Settings",initialOpen:!1},React.createElement(a.SelectControl,{key:"tagName",label:"HTML Tag",value:t.tagName,onChange:function(e){return n({tagName:e})},options:[{label:"<span>",value:"span"},{label:"<italic>",value:"i"},{label:"<strong>",value:"strong"},{label:"<sub>",value:"sub"},{label:"<sup>",value:"sup"},{label:"<break>",value:"br"},{label:"<abbr>",value:"abbr"},{label:"<code>",value:"code"},{label:"<kbd>",value:"kbd"},{label:"<div>",value:"div"},{label:"<object>",value:"object"}]}))),t.preview?React.createElement("img",{src:o,alt:"",className:"fluid"}):React.createElement(r.RichText,i({},l,{tagName:t.tagName,value:t.content,onChange:function(e){return n({content:e})},placeholder:"type any thing..."})))}},9539:function(e,t,n){e.exports=n.p+"images/preview.21e54441.jpg"},2175:function(e){e.exports=window.wp.blockEditor},4981:function(e){e.exports=window.wp.blocks},5609:function(e){e.exports=window.wp.components},5328:function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"phenix/inline","version":"0.1.0","title":"Inline Block","keywords":["pds","pds-blocks","inline","span","strong"],"category":"design","description":"inline element for wrapping-up texts","supports":{"html":false},"attributes":{"tagName":{"type":"string","default":"span"},"content":{"type":"string","default":"span"},"preview":{"type":"boolean","default":false}},"example":{"attributes":{"preview":true}},"textdomain":"pds-blocks","editorScript":"file:./index.js"}')}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"}(),e=i(6431),t=i(5328),n=i(4981),a=i(2175),(0,n.registerBlockType)(t,{icon:React.createElement("svg",{fill:"none",viewBox:"0 0 32 20"},React.createElement("path",{fill:"#1E252B",d:"M32 1.18V.132h-4.507V1.18h1.73v17.64h-1.73v1.048H32V18.82h-1.73V1.18H32zM.194 15.601L5.47 3.69c.368-.822 1.038-1.32 1.946-1.32h.194c.908 0 1.557.498 1.924 1.32L14.81 15.6c.108.238.173.454.173.67 0 .887-.692 1.6-1.578 1.6-.779 0-1.298-.453-1.6-1.145l-1.016-2.378h-6.66L3.07 16.834c-.281.648-.843 1.038-1.535 1.038C.67 17.872 0 17.18 0 16.315c0-.238.086-.476.194-.714zm9.362-4.194L7.46 6.413l-2.097 4.994h4.194zm7.004 2.962v.043c0 2.292 1.795 3.546 3.979 3.546 1.6 0 2.702-.584 3.502-1.47v.021c0 .692.627 1.363 1.578 1.363.887 0 1.6-.692 1.6-1.579v-5.275c0-1.557-.389-2.833-1.254-3.697-.821-.822-2.119-1.297-3.913-1.297-1.535 0-2.66.216-3.697.605a1.362 1.362 0 00-.886 1.276c0 .756.605 1.34 1.361 1.34.152 0 .282-.022.476-.086a7.534 7.534 0 012.27-.325c1.644 0 2.487.757 2.487 2.12v.194a8.235 8.235 0 00-2.833-.476c-2.745 0-4.67 1.167-4.67 3.697zm7.546-1.297v.584c0 1.189-1.038 2.032-2.573 2.032-1.06 0-1.794-.519-1.794-1.405v-.044c0-1.038.864-1.6 2.27-1.6.8 0 1.535.173 2.097.433z"})),edit:e.Z,save:function(e){var t=e.attributes,n=a.useBlockProps.save(),r=t.tagName;return"div"===r&&(n.className+=" inline-block"),React.createElement(r,n,t.content)}})}();
//# sourceMappingURL=index.js.map