(()=>{"use strict";var e,t,a,l={2298:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(9196),r=a(5736),o=a(6989),n=a.n(o),s=a(9307),c=a(241);const p=e=>{const[t,a]=(0,s.useState)(0),[o,p]=(0,s.useState)([{label:(0,r.__)("Default","pds-blocks"),value:""}]),{options:i,name:u,type:m,size:d,label:b,value:h,multiple:v,valueSetter:f,className:w,search:y,termType:k}=e,_=(0,s.useCallback)((()=>{if(o.length>1)return;const e=async(e,t)=>{const l=await n()({path:e}),o=[{label:(0,r.__)("Default","pds-blocks"),value:""}];t(l,o),p((e=>"object"==typeof e&&e!==o||JSON.stringify(e)!==JSON.stringify(o)?(a((e=>e+1)),o):e))};switch(i){case"menu-locations":e("pds-blocks/v2/options",((e,t)=>{Object.entries(e.menu_locations).forEach((([e,a])=>{t.push({label:a.title,value:a.name})}))}));break;case"taxonomies":e("wp/v2/taxonomies",((e,t)=>{Object.entries(e).forEach((([e,a])=>{["nav_menu","wp_pattern"].some((t=>e.includes(t)))||t.push({value:e,label:a.name})}))}));break;case"taxonomies-terms":e(`wp/v2/${"category"===k?"categories":k}`,((e,t)=>{Object.entries(e).forEach((([e,a])=>{t.push({value:a.id,label:a.name})}))}));break;case"post-types":e("wp/v2/types",((e,t)=>{Object.entries(e).forEach((([e,a])=>{["attachment","nav_menu_item","wp_block","wp_navigation","wp_template","wp_template_part","wp_font"].some((t=>e.includes(t)))||t.push({value:e,label:a.name})}))}));break;case"users-roles":e("pds-blocks/v2/options",((e,t)=>{Object.entries(e.users_roles).forEach((([e,a])=>{t.push({value:a.name,label:a.name})}))}));break;case"template-parts":e("pds-blocks/v2/options",((e,t)=>{const a=e.theme_parts;a&&Object.entries(a).forEach((([e,a])=>{if("string"==typeof a)t.push((0,l.createElement)("option",{key:`${a}`,value:a.replace(".php","")},a.replace("-"," ").replace("_","").replace(".php","")));else{let r=[];Object.entries(a).forEach((([t,a])=>{r.push((0,l.createElement)("option",{key:`${e}-${a}`,value:`${e}/${a.replace(".php","")}`},`${a.replace("-"," ").replace("_","").replace(".php","")}`))})),t.push((0,l.createElement)("optgroup",{key:`${e}-group`,label:`${e}`},r))}}))}))}}),[i,o.length,k]);(0,s.useEffect)((()=>_()),[_]);const E=(0,s.useMemo)((()=>o),[o]);return(0,l.createElement)(c.Z,{key:t,type:m,options:E,multiple:v,name:u,placeholder:(0,r.__)("Default","pds-blocks"),label:b,value:h,onChange:f,className:w,search:y,size:d})}},241:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9196),r=a(9307);const o=e=>{(0,r.useEffect)((()=>{window.PhenixBlocks.componentsBuilder()}),[]);const{name:t,type:a,size:o,label:n,value:s,options:c,multiple:p,onChange:i,className:u,placeholder:m,search:d}=e,b=(0,r.useCallback)((e=>i(e.target)),[i]),h=(0,r.useMemo)((()=>{let e={onChange:b};return d&&(e["data-search"]=1),p&&(e.multiple=p),m&&(e["data-placeholder"]=m),e}),[b,d,p,m]),v=(0,r.useMemo)((()=>{let e=[];return Array.isArray(c)&&c.length>1&&c[1].type?(c[0].type||(c[0]=(0,l.createElement)("option",{key:0,value:c[0].value},`${c[0].label}`)),e=c):"object"!=typeof c||Array.isArray(c)?c.forEach((t=>{e.push((0,l.createElement)("option",{key:t.value,value:t.value},`${t.label}`))})):Object.entries(c).forEach((([t,a])=>{let r=[];a.forEach((e=>{r.push((0,l.createElement)("option",{key:e.value,value:e.value},`${e.label}`))}));let o=(0,l.createElement)("optgroup",{key:`${t}-group`,label:`${t}`},r);e.push(o)})),e}),[c]);return(0,l.createElement)(l.Fragment,null,n?(0,l.createElement)("label",{className:"tx-capitalize fs-13",style:{marginBottom:5}},`${n}`):null,(0,l.createElement)("div",{key:"select-wrapper",className:`px-select ${u||""}`,"data-value":s},(0,l.createElement)("select",{key:"select-element",name:t,defaultValue:s,className:`px-select pds-tm-control form-control ${o||"small"} radius-md`,...h},v)))}},6679:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(9196),r=a(5736),o=a(8423),n=a.n(o),s=a(5609),c=a(2175),p=a(3437),i=a(2298);function u({attributes:e,setAttributes:t}){const a=window.PhenixBlocks,o=(0,c.useBlockProps)(),u=o.id,m=l=>a.set_value(l,e,t);if(e.metadata?.name){let t=document.querySelector(`.block-editor-list-view-tree a[href="#block-${o["data-block"]}"] .components-truncate`);t&&(t.textContent=e.metadata.name)}return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.BlockControls,null,(0,l.createElement)(s.ToolbarGroup,{key:`${u}-toolbar`,label:(0,r.__)("Quick Settings","pds-blocks")},(0,l.createElement)("div",{className:"inline-block inline-select tooltip",style:{width:175},"data-title":(0,r.__)("Template Name","pds-blocks")},(0,l.createElement)(i.Z,{key:`${u}-part_name-toolbar`,placeholder:(0,r.__)("Template Name","pds-blocks"),name:"part_name",options:"template-parts",value:e.part_name,valueSetter:m})))),(0,l.createElement)(c.InspectorControls,{key:`${u}-inspector`},(0,l.createElement)(s.PanelBody,{title:(0,r.__)("General Setting","pds-blocks"),initialOpen:!0},(0,l.createElement)(i.Z,{key:`${u}-part_name`,label:(0,r.__)("Template Name","pds-blocks"),placeholder:(0,r.__)("Template Name","pds-blocks"),name:"part_name",options:"template-parts",value:e.part_name,valueSetter:m}))),e.preview?(0,l.createElement)("img",{src:p,alt:"",className:"fluid"}):(0,l.createElement)("div",{...o,key:`${u}`},(0,l.createElement)(n(),{block:"phenix/theme-part",attributes:e})))}},3437:(e,t,a)=>{e.exports=a.p+"images/preview.f3b9ed72.jpg"},9196:e=>{e.exports=window.React},6989:e=>{e.exports=window.wp.apiFetch},2175:e=>{e.exports=window.wp.blockEditor},4981:e=>{e.exports=window.wp.blocks},5609:e=>{e.exports=window.wp.components},9307:e=>{e.exports=window.wp.element},5736:e=>{e.exports=window.wp.i18n},8423:e=>{e.exports=window.wp.serverSideRender},3642:e=>{e.exports=JSON.parse('{"u2":"phenix/theme-part","TN":"Theme Part","W3":"phenix-blocks","Y4":{"metadata":{"type":"object","default":{}},"preview":{"type":"boolean","default":false},"part_name":{"type":"string","default":"_placeholder"},"part_options":{"type":"object","default":{}}}}')}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return l[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var l=a.length-1;l>-1&&!e;)e=a[l--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../../"})(),e=o(9196),t=o(6679),a=o(3642),(0,o(4981).registerBlockType)(a.u2,{title:a.TN,category:a.W3,attributes:a.Y4,icon:(0,e.createElement)("svg",{fill:"none",viewBox:"0 0 30 32"},(0,e.createElement)("path",{fill:"#000",d:"M22.749 10.854c.542.266.766.92.5 1.463l-2.129 4.34c-1.49 3.038-5.871 2.89-7.153-.243-.567-1.387-2.506-1.452-3.166-.107l-2.128 4.34a1.093 1.093 0 11-1.964-.964l2.13-4.34c1.49-3.038 5.87-2.89 7.152.243.567 1.387 2.507 1.452 3.166.107l2.13-4.34c.265-.541.92-.765 1.462-.5z"}),(0,e.createElement)("path",{fill:"#000",fillRule:"evenodd",d:"M14.564.01c.277-.013.554-.013.83 0 1.07.053 2.054.364 3.151.873 1.068.496 2.31 1.212 3.88 2.119l.088.051c1.57.906 2.812 1.623 3.775 2.3.99.696 1.75 1.393 2.33 2.292.151.233.29.473.417.72.488.952.711 1.96.819 3.165.105 1.173.105 2.606.105 4.418v.103c0 1.813 0 3.247-.105 4.42-.108 1.204-.33 2.212-.82 3.164a8.367 8.367 0 01-.415.72c-.58.899-1.342 1.596-2.331 2.291-.963.678-2.204 1.394-3.775 2.3l-.088.052-.004.002c-1.568.906-2.808 1.622-3.876 2.117-1.097.509-2.081.82-3.15.873a8.41 8.41 0 01-.831 0c-1.07-.053-2.053-.364-3.15-.873-1.068-.495-2.307-1.211-3.875-2.116l-.094-.054-.004-.003c-1.568-.905-2.808-1.62-3.77-2.297-.99-.696-1.75-1.393-2.331-2.292a8.375 8.375 0 01-.416-.72c-.488-.952-.712-1.96-.82-3.165C0 19.298 0 17.865 0 16.052v-.103c0-1.813 0-3.247.105-4.42.107-1.204.33-2.212.819-3.164.127-.247.265-.487.416-.72.58-.899 1.341-1.596 2.33-2.292.964-.677 2.205-1.393 3.775-2.3l.09-.051c1.569-.906 2.81-1.623 3.878-2.119 1.098-.509 2.082-.82 3.15-.873zm.723 2.184c-.205-.01-.41-.01-.615 0-.69.034-1.388.231-2.338.672-.97.45-2.127 1.117-3.751 2.055-1.625.938-2.78 1.607-3.655 2.221-.857.603-1.377 1.11-1.751 1.689-.111.172-.214.35-.308.532-.315.614-.493 1.318-.586 2.361-.096 1.065-.097 2.4-.097 4.276s.001 3.211.097 4.276c.093 1.043.272 1.747.586 2.36.094.183.197.36.308.533.374.58.894 1.086 1.751 1.689.874.614 2.03 1.283 3.655 2.22 1.624.939 2.782 1.606 3.75 2.056.951.44 1.65.638 2.34.672.204.01.409.01.614 0 .689-.034 1.388-.232 2.338-.672.969-.45 2.126-1.117 3.75-2.055 1.625-.938 2.781-1.607 3.656-2.221.857-.603 1.377-1.11 1.751-1.689.111-.172.214-.35.307-.532.315-.614.494-1.318.587-2.361.095-1.065.096-2.4.096-4.276s0-3.211-.096-4.276c-.093-1.043-.272-1.747-.587-2.36a6.194 6.194 0 00-.307-.533c-.374-.58-.895-1.086-1.751-1.689-.875-.614-2.03-1.283-3.655-2.22-1.625-.939-2.782-1.606-3.751-2.056-.95-.44-1.65-.638-2.338-.672z",clipRule:"evenodd"})),edit:t.Z,save:()=>null})})();
//# sourceMappingURL=index.js.map