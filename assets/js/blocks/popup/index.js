!function(){"use strict";var e,t,n,r,i={7745:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(5736),i=n(5609),o=n(2175);function a(e){var t=e.attributes,n=e.setAttributes,a=(0,o.useBlockProps)(),l=(0,o.useInnerBlocksProps)();return a.className+=" px-modal hidden align-center",l.className+=" modal-content",t.id&&(a.id=t.id),t.align||n({align:"full"}),React.createElement(React.Fragment,null,React.createElement(o.InspectorControls,{key:"inspector"},React.createElement(i.PanelBody,{title:"General Settings",initialOpen:!0},React.createElement(i.TextControl,{key:"id",label:(0,r.__)("Modal ID","phenix"),value:t.id,onChange:function(e){return n({id:e})}}))),React.createElement("div",a,React.createElement("div",l)))}},2175:function(e){e.exports=window.wp.blockEditor},4981:function(e){e.exports=window.wp.blocks},5609:function(e){e.exports=window.wp.components},5736:function(e){e.exports=window.wp.i18n},306:function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"phenix/popup","version":"0.1.0","title":"Popup/Modal","category":"design","description":"","supports":{"html":false,"align":["full"],"alignWide":true},"attributes":{"align":{"type":"string","default":"full"},"id":{"type":"string","default":""}},"example":{"attributes":{"preview":true}},"textdomain":"phenix","editorScript":"file:./index.js"}')}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e](n,n.exports,a),n.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e=a(7745),t=a(306),n=a(4981),r=a(2175),(0,n.registerBlockType)(t,{icon:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24",style:{enableBackground:"new 0 0 24 24"}},React.createElement("path",{fill:"#1E1E1E",d:"M21,0H3C1.4,0,0,1.4,0,3v19.3C0,23.2,0.8,24,1.6,24c0.5,0,0.8-0.2,1.2-0.4l3.9-4.1H21c1.7,0,3-1.3,3-3V3C24,1.4,22.7,0,21,0z M21.8,16.5c0,0.5-0.3,0.8-0.8,0.8H5.9l-3.6,3.6V3c0-0.5,0.3-0.8,0.8-0.8h18c0.4,0,0.8,0.3,0.8,0.8V16.5z"})),edit:e.Z,save:function(e){var t=e.attributes,n=r.useBlockProps.save(),i=r.useInnerBlocksProps.save();return n.className+=" px-modal hidden align-center",i.className+=" modal-content",t.id&&(n.id=t.id),React.createElement("div",n,React.createElement(r.InnerBlocks.Content,null))}})}();
//# sourceMappingURL=index.js.map