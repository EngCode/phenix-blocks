(()=>{"use strict";var e,t,l,i,a,o={3573:(e,t,l)=>{l.d(t,{Z:()=>p});var i=l(9196),a=l(5736),o=l(6989),n=l.n(o),s=l(9307),r=l(5609),c=l(2175),d=l(9691),m=l(243);function p({attributes:e,setAttributes:t}){const l=(0,c.useBlockProps)(),o=l.id;if(e.metadata?.name){let t=document.querySelector(`.block-editor-list-view-tree a[href="#block-${l["data-block"]}"] .components-truncate`);t&&(t.textContent=e.metadata.name)}return(0,s.useEffect)((()=>{n()({path:"wp/v2/settings"}).then((l=>{l.title!==e.site_title&&t({site_title:l.title}),l.url&l.url!==e.site_link&&t({site_link:l.url})}))}),[]),l.title=e.site_title,l.href=e.site_link,l.className+=" inline-block",(0,i.createElement)(i.Fragment,null,(0,i.createElement)(c.InspectorControls,{key:`${o}-inspector`},(0,i.createElement)(r.PanelBody,{key:`${o}-settings`,title:"Logo Setting",initialOpen:!0},(0,i.createElement)("div",{className:"row gpx-10 mb-10"},(0,i.createElement)("div",{className:"col-5"},(0,i.createElement)(r.TextControl,{label:(0,a.__)("Size (Height)","pds-blocks"),value:e.size,onChange:e=>t({size:e})})),(0,i.createElement)("div",{className:"col-7"},(0,i.createElement)(r.TextControl,{label:(0,a.__)("Width (Optional)","pds-blocks"),value:e.width,onChange:e=>t({width:e})}))),(0,i.createElement)(m.Z,{label:(0,a.__)("Upload Logo","pds-blocks"),value:e.logo,setValue:e=>t({logo:e.url,logo_id:e.id}),size:"small",className:"mb-15"}),(0,i.createElement)(m.Z,{label:(0,a.__)("Upload Favicon","pds-blocks"),value:e.fevicon,setValue:e=>t({fevicon:e.url,favicon_id:e.id}),size:"small",className:"mb-15"}),(0,i.createElement)(r.ToggleControl,{label:(0,a.__)("Responsive Logo","pds-blocks"),checked:e.responsive,onChange:e=>t({responsive:e})}),e.responsive?(0,i.createElement)(i.Fragment,null,(0,i.createElement)(r.ToggleControl,{label:"Use Favicon for Mobile",checked:e.use_fevicon,onChange:e=>t({use_fevicon:e})}),e.use_fevicon?null:(0,i.createElement)(m.Z,{label:"Upload Mobile Logo",value:e.mobile_logo,setValue:e=>t({mobile_logo:e.url}),size:"small"})):null,(0,i.createElement)("button",{type:"button",className:"tx-uppercase btn fluid tiny fs-12 mt-5 primary radius-sm",onClick:t=>{t.target.classList.add("px-loading"),n()({path:"/wp/v2/settings",method:"POST",data:{site_icon:e.favicon_id}}).then((e=>t.target.classList.remove("px-loading"))),n()({method:"POST",path:"/wp/v2/settings",data:{site_logo:e.logo_id}}).then((e=>t.target.classList.remove("px-loading")))}},(0,a.__)("Update Site Logo","pds-blocks")))),e.preview?(0,i.createElement)("img",{src:d,alt:"",className:"fluid"}):(0,i.createElement)("a",{...l},(0,i.createElement)("img",{src:e.logo,className:e.responsive?"hidden-md-down":"",alt:l.title,style:{maxHeight:`${Phenix(document).toREM(e.size)}`},width:parseInt(e.width)?parseInt(e.width):null,height:Phenix(document).toREM(e.size)}),e.responsive?(0,i.createElement)("img",{src:e.use_fevicon?e.fevicon:e.mobile_logo,className:"hidden-lg-up",alt:l.title,style:{height:e.size},width:Phenix(document).toREM(e.size),height:Phenix(document).toREM(e.size)}):null))}},243:(e,t,l)=>{l.d(t,{Z:()=>n});var i=l(9196),a=l(2175),o=l(9307);class n extends o.Component{render(){const{label:e,value:t,size:l,type:o,setValue:n,className:s}=this.props;return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(a.MediaUpload,{onSelect:n,value:t,render:({open:a})=>(0,i.createElement)("div",{className:"mouse-pointer",onClick:a},e?(0,i.createElement)("label",{className:"mb-5"},e):"",(0,i.createElement)("div",{className:s?`${s}`:""},"small"===l?(0,i.createElement)("div",{className:"flexbox align-center-y align-between pd-5 border-solid border-1 border-alpha-15 radius-sm"},o&&"image"!==o?null:(0,i.createElement)("img",{src:t,style:{maxHeight:"1.5rem"}}),(0,i.createElement)("button",{key:"change-media",onClick:a,className:"btn square primary tiny radius-sm fs-12 fas fa-upload"})):(0,i.createElement)("div",{className:"flexbox align-center-y align-between"},o&&"image"!==o?null:(0,i.createElement)("img",{src:t,className:"radius-sm radius-top",style:{maxWidth:"100%",display:"block"}}),(0,i.createElement)("button",{key:"change-media",onClick:a,className:"btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon"},"Select File"))))}))}}},9691:(e,t,l)=>{e.exports=l.p+"images/preview.6b89ea33.jpg"},9196:e=>{e.exports=window.React},6989:e=>{e.exports=window.wp.apiFetch},2175:e=>{e.exports=window.wp.blockEditor},4981:e=>{e.exports=window.wp.blocks},5609:e=>{e.exports=window.wp.components},9307:e=>{e.exports=window.wp.element},5736:e=>{e.exports=window.wp.i18n},9919:e=>{e.exports=JSON.parse('{"apiVersion":2,"name":"phenix/logo","version":"0.1.0","title":"Phenix Logo","category":"design","description":"Main Logo Block for Phenix Header.","supports":{"html":false,"renaming":true,"__experimentalOnEnter":true,"__experimentalMetadata":true,"interactivity":{"clientNavigation":true}},"attributes":{"metadata":{"type":"object","default":{}},"preview":{"type":"boolean","default":false},"site_title":{"type":"string","default":""},"logo":{"type":"string","default":"https://via.placeholder.com/200x90.webp?text=Logo%20Placeholder"},"size":{"type":"string","default":"42px"},"width":{"type":"string","default":""},"site_link":{"type":"string","default":"#none"},"logo_id":{"type":"number","default":0},"favicon_id":{"type":"number","default":0},"fevicon":{"type":"string","default":"https://via.placeholder.com/512x512.webp?text=Fevicon"},"responsive":{"type":"boolean","default":false},"use_fevicon":{"type":"boolean","default":false},"mobile_logo":{"type":"boolean","default":"https://via.placeholder.com/512x512.webp?text=Logo"}},"example":{"attributes":{"preview":true}},"textdomain":"pds-blocks","editorScript":"file:./index.js"}')}},n={};function s(e){var t=n[e];if(void 0!==t)return t.exports;var l=n[e]={exports:{}};return o[e](l,l.exports,s),l.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var l in t)s.o(t,l)&&!s.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var l=t.getElementsByTagName("script");if(l.length)for(var i=l.length-1;i>-1&&!e;)e=l[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e+"../../"})(),e=s(9196),t=s(3573),l=s(9919),i=s(4981),a=s(2175),(0,i.registerBlockType)(l,{icon:(0,e.createElement)("svg",{fill:"none",viewBox:"0 0 32 32"},(0,e.createElement)("path",{fill:"#1E1E1E",d:"M16 0C7.067 0 0 7.067 0 16s7.067 16 16 16 16-7.067 16-16S24.933 0 16 0zm0 2.667c7.333 0 13.333 6 13.333 13.333v.133c-2.533-1.466-5.866-3.066-6-3.2-.4-.133-.933-.133-1.466.134l-5.2 3.733-6-2c-.4-.133-.667 0-1.067.133L3.067 18.8c-.134-.933-.4-1.733-.4-2.667 0-7.466 6-13.466 13.333-13.466zm0 26.666c-5.467 0-10.133-3.333-12.267-8l6.534-3.866 6.266 2.133c.4.133.934 0 1.2-.133l5.2-3.734c1.467.667 4.4 2.134 6.267 3.334-1.6 5.866-6.933 10.266-13.2 10.266z"})),edit:t.Z,save:({attributes:t})=>{const l=t.site_link,i=a.useBlockProps.save();return i.href=l||"#none",i.title=t.site_title,i.className+=" inline-block",(0,e.createElement)("a",{...i},(0,e.createElement)("img",{src:t.logo,className:t.responsive?"hidden-md-down":"",alt:i.title,style:{maxHeight:`${Phenix(document).toREM(t.size)}`},width:Phenix(document).toREM(t.width)?Phenix(document).toREM(t.width):null,height:Phenix(document).toREM(t.size)}),t.responsive?(0,e.createElement)("img",{src:t.use_fevicon?t.fevicon:t.mobile_logo,className:"hidden-lg-up",alt:i.title,width:Phenix(document).toREM(t.size),height:Phenix(document).toREM(t.size)}):null)}})})();
//# sourceMappingURL=index.js.map