(()=>{"use strict";var e,a,l,t={1390:(e,a,l)=>{l.d(a,{Z:()=>c});var t=l(9196),n=l(9307),s=l(1887);const c=e=>{const{label:a,value:l,onChange:c,screen:r,blockKey:o}=e,i=r?`-${r}`:"",m="btn tiny bg-transparent fs-12 square pxi",p=`${o?o+"-":""}align-${i}-options`,d=(0,n.useCallback)((e=>{const a=l.trim().split(/\s+/),t=[`${i}-x-start`,`${i}-x-end`,`${i}-x-between`,`${i}-x-around`,`${i}-x-center`,`${i}-y-start`,`${i}-y-end`,`${i}-y-center`],n=e.getAttribute("name").match(/-x$/)?"x":"y",s=a.some((e=>t.includes(e)));let r=a;const o=(e=>{const a=[`${i}-x-start`,`${i}-x-end`,`${i}-x-between`,`${i}-x-around`,`${i}-x-center`],l=[`${i}-y-start`,`${i}-y-end`,`${i}-y-center`];for(let t of e){if(a.includes(t))return"x";if(l.includes(t))return"y"}return null})(a);return s&&n===o?r=a.map((a=>t.includes(a)&&a.includes(n)?e.value:a)):r.push(e.value),c(r.join(" "))}),[l,c,i]);return(0,t.createElement)("div",{className:"components-flex-item flex-alignment-btns",key:p},(0,t.createElement)("div",{className:"flexbox align-between mb-5 align-center-y"},(0,t.createElement)("label",{className:"fs-13 weight-bold"},a),(0,t.createElement)("button",{type:"button",key:`reset-btn${i}`,"data-value":"",title:"Reset",className:"btn tiny bg-transparent fs-12 square far fa-redo",onClick:e=>c("align-reset")})),(0,t.createElement)("div",{className:"flexbox align-between mb-15"},(0,t.createElement)("div",{className:"col-auto border-1 border-solid border-alpha-15 radius-sm"},(0,t.createElement)(s.Z,{key:`align${i}-start-x`,name:`flex-align${i}-x`,checked:l.includes(`align${i}-start-x`),value:`align${i}-start-x`,onChange:d,type:"button-radio",className:"tiny inline-block"},(0,t.createElement)("span",{title:"Start",className:`${m} pxi-align-x-start`})),(0,t.createElement)(s.Z,{key:`align${i}-center-x`,name:`flex-align${i}-x`,checked:l.includes(`align${i}-center-x`),value:`align${i}-center-x`,onChange:d,type:"button-radio",className:"tiny inline-block"},(0,t.createElement)("span",{className:`${m} pxi-align-x-center`,title:"Center"})),(0,t.createElement)(s.Z,{key:`align${i}-between`,name:`flex-align${i}-x`,checked:l.includes(`align${i}-between`),value:`align${i}-between`,onChange:d,type:"button-radio",className:"tiny inline-block"},(0,t.createElement)("span",{className:`${m} pxi-align-x-between`,title:"Between"})),(0,t.createElement)(s.Z,{key:`align${i}-around`,name:`flex-align${i}-x`,checked:l.includes(`align${i}-around`),value:`align${i}-around`,onChange:d,type:"button-radio",className:"tiny inline-block"},(0,t.createElement)("span",{className:`${m} pxi-align-x-around`,title:"Around"})),(0,t.createElement)(s.Z,{key:`align${i}-end-x`,name:`flex-align${i}-x`,checked:l.includes(`align${i}-end-x`),value:`align${i}-end-x`,onChange:d,type:"button-radio",className:"tiny inline-block"},(0,t.createElement)("span",{className:`${m} pxi-align-x-end`,title:"Around"}))),(0,t.createElement)("div",{className:"col-auto border-1 border-solid border-alpha-15 radius-sm"},(0,t.createElement)(s.Z,{key:`align${i}-start-y`,name:`flex-align${i}-y`,checked:l.includes(`align${i}-start-y`),value:`align${i}-start-y`,onChange:d,type:"button-radio",className:"tiny inline-block"},(0,t.createElement)("span",{className:`${m} pxi-align-y-start`,title:"Start"})),(0,t.createElement)(s.Z,{key:`align${i}-center-y`,name:`flex-align${i}-y`,checked:l.includes(`align${i}-center-y`),value:`align${i}-center-y`,onChange:d,type:"button-radio",className:"tiny inline-block"},(0,t.createElement)("span",{className:`${m} pxi-align-y-center`,title:"Center"})),(0,t.createElement)(s.Z,{key:`align${i}-end-y`,name:`flex-align${i}-y`,checked:l.includes(`align${i}-end-y`),value:`align${i}-end-y`,onChange:d,type:"button-radio",className:"tiny inline-block"},(0,t.createElement)("span",{className:`${m} pxi-align-y-end`,title:"End"})))))}},4034:(e,a,l)=>{l.d(a,{Z:()=>s});var t=l(9196),n=l(9307);const s=({label:e,button:a,support:l,dropList:s,children:c,className:r,dataPosition:o,title:i,key:m})=>{(0,n.useEffect)((()=>{window.PhenixBlocks.componentsBuilder()}),[]);const p={};return l?.includes("hover")&&(p["data-hover"]="true"),o&&(p["data-position"]=o),m&&(p.key=m),(0,t.createElement)(n.Fragment,null,(0,t.createElement)("div",{className:`px-dropdown pds-tm-control ${r||""}`,...p},(0,t.createElement)("button",{className:`px-toggle btn ${a} ${i?"tooltip-bottom":""}`,"data-title":i},e),(0,t.createElement)("ul",{className:`hidden px-dropdown-list reset-list bg-white radius-md radius-bottom bx-shadow-dp-2 border-1 border-alpha-10 border-solid ${s||"fs-14 w-min-200"}`},c)))}},3484:(e,a,l)=>{l.d(a,{Z:()=>s});var t=l(9196),n=l(9307);const s=e=>{const{name:a,type:l,size:s,label:c,value:r,onChange:o,className:i,placeholder:m}=e,p={onBlur:(0,n.useCallback)((e=>{if(r!==e.target.value)return o(e.target)}),[r,o]),type:l||"text",defaultValue:r||"",placeholder:m||c||""};return(0,t.createElement)(t.Fragment,null,c&&(0,t.createElement)("label",{className:"tx-capitalize fs-13",style:{marginBottom:5}},c),(0,t.createElement)("input",{name:a,className:`form-control ${s||"small"} radius-md ${i||""}`,...p}))}},4678:(e,a,l)=>{l.d(a,{Z:()=>s});var t=l(9196),n=l(9307);const s=e=>{const{label:a,value:l,min:s,max:c,steps:r,icon:o,onChange:i,name:m}=e,p=(0,n.useCallback)((e=>{const a=e.target,l=parseFloat(s)||Number.MIN_SAFE_INTEGER,t=parseFloat(c)||Number.MAX_SAFE_INTEGER,n=parseFloat(a.value),r=n>=l&&n<=t?n:l;return a.value=r,i(a)}),[s,c,i]),d=(0,n.useCallback)((e=>{let a=e.target.closest(".px-counter-input"),l=parseFloat(c)||Number.MAX_SAFE_INTEGER,t=r?parseFloat(r):1,n=a.querySelector('input[type="number"]'),s=parseFloat(n.value)+t;return n.value=s<=l?s:l,i(n)}),[c,r,i]),u=(0,n.useCallback)((e=>{let a=e.target.closest(".px-counter-input"),l=parseFloat(s)||Number.MIN_SAFE_INTEGER,t=r?parseFloat(r):1,n=a.querySelector('input[type="number"]'),c=parseFloat(n.value)-t;return n.value=c>=l?c:l,i(n)}),[s,r,i]);return(0,t.createElement)("div",{className:"flexbox flex-gap-fix align-between flow-column"},(0,t.createElement)("label",{className:"components-input-control__label tx-uppercase weight-bold"},a),(0,t.createElement)("div",{className:"px-counter-input position-rv fluid "+(o||"")},o?"":(0,t.createElement)("button",{onClick:u,className:"btn square small fs-13 increase-btn far fa-minus position-ab pos-start-0 pos-top-0 divider-e icon-fix"}),(0,t.createElement)("input",{name:m,type:"number",min:s,max:c,value:parseFloat(l)?parseFloat(l):0,className:"form-control small radius-sm reset-appearance tx-align-center",onChange:p}),(0,t.createElement)("div",{className:"position-ab pos-end-0 pos-bottom-0 flexbox"},o?(0,t.createElement)("button",{onClick:u,className:"btn square small fs-13 increase-btn far fa-minus divider-s icon-fix"}):"",(0,t.createElement)("button",{onClick:d,className:"btn square small fs-13 increase-btn far fa-plus divider-s icon-fix"}))))}},2298:(e,a,l)=>{l.d(a,{Z:()=>i});var t=l(9196),n=l(5736),s=l(6989),c=l.n(s),r=l(9307),o=l(241);const i=e=>{const[a,l]=(0,r.useState)(0),[s,i]=(0,r.useState)([{label:(0,n.__)("Default","pds-blocks"),value:""}]),{options:m,name:p,type:d,size:u,label:b,value:h,multiple:g,valueSetter:y,className:x,search:k,termType:v}=e,f=(0,r.useCallback)((()=>{if(s.length>1)return;const e=async(e,a)=>{const t=await c()({path:e}),s=[{label:(0,n.__)("Default","pds-blocks"),value:""}];a(t,s),i((e=>"object"==typeof e&&e!==s||JSON.stringify(e)!==JSON.stringify(s)?(l((e=>e+1)),s):e))};switch(m){case"menu-locations":e("pds-blocks/v2/options",((e,a)=>{Object.entries(e.menu_locations).forEach((([e,l])=>{a.push({label:l.title,value:l.name})}))}));break;case"taxonomies":e("wp/v2/taxonomies",((e,a)=>{Object.entries(e).forEach((([e,l])=>{["nav_menu","wp_pattern"].some((a=>e.includes(a)))||a.push({value:e,label:l.name})}))}));break;case"taxonomies-terms":e(`wp/v2/${"category"===v?"categories":v}`,((e,a)=>{Object.entries(e).forEach((([e,l])=>{a.push({value:l.id,label:l.name})}))}));break;case"post-types":e("wp/v2/types",((e,a)=>{Object.entries(e).forEach((([e,l])=>{["attachment","nav_menu_item","wp_block","wp_navigation","wp_template","wp_template_part","wp_font"].some((a=>e.includes(a)))||a.push({value:e,label:l.name})}))}));break;case"users-roles":e("pds-blocks/v2/options",((e,a)=>{Object.entries(e.users_roles).forEach((([e,l])=>{a.push({value:l.name,label:l.name})}))}));break;case"template-parts":e("pds-blocks/v2/options",((e,a)=>{const l=e.theme_parts;l&&Object.entries(l).forEach((([e,l])=>{if("string"==typeof l)a.push((0,t.createElement)("option",{key:`${l}`,value:l.replace(".php","")},l.replace("-"," ").replace("_","").replace(".php","")));else{let n=[];Object.entries(l).forEach((([a,l])=>{n.push((0,t.createElement)("option",{key:`${e}-${l}`,value:`${e}/${l.replace(".php","")}`},`${l.replace("-"," ").replace("_","").replace(".php","")}`))})),a.push((0,t.createElement)("optgroup",{key:`${e}-group`,label:`${e}`},n))}}))}))}}),[m,s.length,v]);(0,r.useEffect)((()=>f()),[f]);const _=(0,r.useMemo)((()=>s),[s]);return(0,t.createElement)(o.Z,{key:a,type:d,options:_,multiple:g,name:p,placeholder:(0,n.__)("Default","pds-blocks"),label:b,value:h,onChange:y,className:x,search:k,size:u})}},241:(e,a,l)=>{l.d(a,{Z:()=>s});var t=l(9196),n=l(9307);const s=e=>{(0,n.useEffect)((()=>{window.PhenixBlocks.componentsBuilder()}),[]);const{name:a,type:l,size:s,label:c,value:r,options:o,multiple:i,onChange:m,className:p,placeholder:d,search:u}=e,b=(0,n.useCallback)((e=>m(e.target)),[m]),h=(0,n.useMemo)((()=>{let e={onChange:b};return u&&(e["data-search"]=1),i&&(e.multiple=i),d&&(e["data-placeholder"]=d),e}),[b,u,i,d]),g=(0,n.useMemo)((()=>{let e=[];return Array.isArray(o)&&o.length>1&&o[1].type?(o[0].type||(o[0]=(0,t.createElement)("option",{key:0,value:o[0].value},`${o[0].label}`)),e=o):"object"!=typeof o||Array.isArray(o)?o.forEach((a=>{e.push((0,t.createElement)("option",{key:a.value,value:a.value},`${a.label}`))})):Object.entries(o).forEach((([a,l])=>{let n=[];l.forEach((e=>{n.push((0,t.createElement)("option",{key:e.value,value:e.value},`${e.label}`))}));let s=(0,t.createElement)("optgroup",{key:`${a}-group`,label:`${a}`},n);e.push(s)})),e}),[o]);return(0,t.createElement)(t.Fragment,null,c?(0,t.createElement)("label",{className:"tx-capitalize fs-13",style:{marginBottom:5}},`${c}`):null,(0,t.createElement)("div",{key:"select-wrapper",className:`px-select ${p||""}`,"data-value":r},(0,t.createElement)("select",{key:"select-element",name:a,defaultValue:r,className:`px-select pds-tm-control form-control ${s||"small"} radius-md`,...h},g)))}},3142:(e,a,l)=>{l.d(a,{Z:()=>m});var t=l(9196),n=l(5736),s=l(9307),c=l(1887),r=l(1390),o=l(4678),i=l(241);class m extends s.Component{render(){const{className:e,attributes:a,options:l,mainSetter:s,screen:m}=this.props,p=m?`-${m}`:"",d=Date.now().toString(36)+Math.random().toString(36).substr(2,5)+`-flexbox-${p}-option`,u=[{label:"Start",value:`align-self${m}-start`},{label:"Center",value:`align-self${m}-center`},{label:"End",value:`align-self${m}-end`}];return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:`row gpx-15 ${e||""}`,key:d},!l||l.includes("align")?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"col-12 mb-15"},(0,t.createElement)(r.Z,{screen:m,label:(0,n.__)("Flexbox Alignment","pds-blocks"),value:a.flexbox[`align${p}`]||"",onChange:e=>s(e,m||"")}),!l||l.includes("align-self")?(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.Z,{class:"mt-15",name:`align-self${m}`,size:"normal",placeholder:(0,n.__)("None","pds-blocks"),className:"stacked-options",label:(0,n.__)("Self Align","pds-blocks"),value:a.flexbox[`align-self${m}`],onChange:s,options:u})):null)):null,(0,t.createElement)("div",{className:"col-12 row gpx-10 pdt-5 mb-15"},(0,t.createElement)("div",{className:"col-6"},(0,t.createElement)(o.Z,{label:(0,n.__)("Gap-Y Space","pds-blocks"),key:`gpy${p}`,name:`gpy${p}`,onChange:s,value:a.flexbox[`gpy${p}`]||0,min:0,max:50,steps:5})),(0,t.createElement)("div",{className:"col-6"},(0,t.createElement)(o.Z,{label:(0,n.__)("Gap-X Space","pds-blocks"),key:`gpx${p}`,name:`gpx${p}`,onChange:s,value:a.flexbox[`gpx${p}`]||0,min:0,max:50,steps:5}))),(0,t.createElement)("div",{className:"col-12 flexbox gpy-5"},!l||l.includes("flex-props")?(0,t.createElement)("label",{className:"col-12 mb-5 tx-UpperCase"},(0,n.__)("Flow Options","pds-blocks")):null,!l||l.includes("flex-props")?(0,t.createElement)(c.Z,{key:`flow${p}`,name:`flow${p}`,value:a.flexbox[`stacked${p}`]&&""!==a.flexbox[`stacked${p}`]?`flow${p}-columns-reverse`:`flow${p}-reverse`,checked:a.flexbox[`flow${p}`]?.length>0,onChange:e=>s(e,m||""),type:"checkbox",className:"tiny col-6"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Reverse ","pds-blocks"))):null,!l||l.includes("flex-props")&&!a.flexbox?.slider?(0,t.createElement)(c.Z,{key:`stacked${p}`,name:`stacked${p}`,value:`flow${p}-columns`,checked:a.flexbox[`stacked${p}`]?.length>0,onChange:e=>s(e,m||""),type:"checkbox",className:"tiny col-6"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Stacked","pds-blocks"))):null,!l||l.includes("flex-props")&&!a.flexbox?.slider?(0,t.createElement)(c.Z,{key:`nowrap${p}`,name:`nowrap${p}`,value:`flow${p}-nowrap`,checked:a.flexbox[`nowrap${p}`]?.length>0,onChange:e=>s(e,m||""),type:"checkbox",className:"tiny col-6"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Nowrap","pds-blocks"))):null,!l||l.includes("grid-props")&&!a.flexbox?.slider&&!m?(0,t.createElement)(c.Z,{key:`equals${p}`,name:`equals${p}`,checked:a.flexbox.equals,onChange:e=>s(e,m||""),type:"checkbox",className:"tiny col-6"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Equal Cols.","pds-blocks"))):null,!l||l.includes("grid-props")&&!a.flexbox?.slider?(0,t.createElement)(c.Z,{key:`masonry${p}`,name:`masonry${p}`,value:`px-masonry${p}`,checked:a.flexbox[`masonry${p}`]?.length>0,onChange:e=>s(e,m||""),type:"checkbox",className:"tiny col-6"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Masonry","pds-blocks"))):null,!l||l.includes("grid-props")?(0,t.createElement)(c.Z,{key:"gpy-fix",name:"gpy-fix",value:"gpy-fix",checked:a.flexbox["gpy-fix"]?.length>0,onChange:e=>s(e,m||""),type:"checkbox",className:"tiny col-6"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Gap Y fix","pds-blocks"))):null,this.props.children?this.props.children:null)))}}},8409:(e,a,l)=>{l.d(a,{Z:()=>r});var t=l(9196),n=l(5736),s=l(9307),c=l(241);l(1887);class r extends s.Component{render(){const e=window.PhenixBlocks.dataLists.sizes_range,{attributes:a,options:l,mainSetter:s,screen:r}=this.props,o=r?`-${r}`:"",i=e.width_range.map((e=>({label:e,value:`w${o}-${e}`}))),m=e.max_width_range.map((e=>({label:e,value:`w${o}-min-${e}`}))),p=e.max_width_range.map((e=>({label:e,value:`w${o}-max-${e}`}))),d=e.height_range.map((e=>({label:e,value:`h${o}-${e.replace("%","")}`}))),u=e.max_height_range.map((e=>({label:e,value:`h${o}-min-${e.replace("%","")}`}))),b=e.max_height_range.map((e=>({label:e,value:`h${o}-max-${e.replace("%","")}`}))),h={label:(0,n.__)("Default","pds-blocks"),value:""};return i.unshift(h),m.unshift(h),p.unshift(h),d.unshift(h),u.unshift(h),b.unshift(h),(0,t.createElement)(t.Fragment,null,l?this.props.children?this.props.children:null:(0,t.createElement)("div",{className:"row gpx-20 gpy-15"},(0,t.createElement)("div",{className:"col-12"},(0,t.createElement)(c.Z,{key:`width_size${o}`,name:`width_size${o}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Width Sizes","pds-blocks"),value:a.style[`width_size${o}`],onChange:s,options:i})),(0,t.createElement)("div",{className:"col col-6"},(0,t.createElement)(c.Z,{key:`min_size${o}`,name:`min_size${o}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Min Width","pds-blocks"),value:a.style[`min_size${o}`],onChange:s,options:m})),(0,t.createElement)("div",{className:"col col-6"},(0,t.createElement)(c.Z,{key:`max_size${o}`,name:`max_size${o}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Max Width","pds-blocks"),value:a.style[`max_size${o}`],onChange:s,options:p})),(0,t.createElement)("div",{className:"col-12"},(0,t.createElement)(c.Z,{key:`height_size${o}`,name:`height_size${o}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Height Sizes","pds-blocks"),value:a.style[`height_size${o}`],onChange:s,options:d})),(0,t.createElement)("div",{className:"col col-6"},(0,t.createElement)(c.Z,{key:`min_height_size${o}`,name:`min_height_size${o}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Min Height","pds-blocks"),value:a.style[`min_height_size${o}`],onChange:s,options:u})),(0,t.createElement)("div",{className:"col col-6"},(0,t.createElement)(c.Z,{key:`max_height_size${o}`,name:`max_height_size${o}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Max Height","pds-blocks"),value:a.style[`max_height_size${o}`],onChange:s,options:b})),this.props.children?this.props.children:null))}}},9109:(e,a,l)=>{l.d(a,{Z:()=>m});var t=l(9196),n=l(5736),s=l(9307),c=l(3484),r=l(241),o=l(1887),i=l(4678);class m extends s.Component{render(){const{className:e,attributes:a,options:l,mainSetter:s}=this.props,m=[{label:(0,n.__)("Loop","pds-blocks"),value:"loop"},{label:(0,n.__)("Fading","pds-blocks"),value:"fade"},{label:(0,n.__)("Sliding","pds-blocks"),value:"slide"}],p=[{label:(0,n.__)("Default","pds-blocks"),value:""},{label:(0,n.__)("LTR","pds-blocks"),value:"ltr"},{label:(0,n.__)("RTL","pds-blocks"),value:"rtl"},{label:(0,n.__)("Vertical","pds-blocks"),value:"ttb"}];return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:`row gpx-20 gpy-15 gpy-fix ${e}`},(0,t.createElement)("div",{className:"col-6"},(0,t.createElement)(r.Z,{key:"type",name:"type",placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Effect Type","pds-blocks"),value:a.slider.type,onChange:s,options:m})),(0,t.createElement)("div",{className:"col-6"},(0,t.createElement)(r.Z,{key:"type",name:"direction",placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Direction","pds-blocks"),value:a.slider.direction,onChange:s,options:p})),(0,t.createElement)("div",{className:"col-6"},(0,t.createElement)(i.Z,{key:"steps",name:"steps",label:(0,n.__)("Steps","pds-blocks"),value:a.slider.steps||1,onChange:s,min:1,max:12})),(0,t.createElement)("div",{className:"col-6"},(0,t.createElement)(i.Z,{key:"duration",name:"duration",label:(0,n.__)("Duration","pds-blocks"),value:a.slider.duration||6e3,onChange:s,min:3e3,max:2e4,steps:100})),(0,t.createElement)("div",{className:"col-6"},(0,t.createElement)(i.Z,{key:"speed",name:"speed",label:(0,n.__)("Speed","pds-blocks"),value:a.slider.speed||700,onChange:s,min:300,max:3e3,steps:100})),(0,t.createElement)("div",{className:"col-12 pdt-10 divider-t flexbox gpy-5 align-between"},(0,t.createElement)(o.Z,{key:"autoplay",name:"autoplay",value:"boolean",checked:a.slider.autoplay||!0,onChange:s,type:"checkbox",className:"small"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Autoplay","pds-blocks"))),(0,t.createElement)(o.Z,{key:"controls",name:"controls",value:"boolean",checked:a.slider.controls||!1,onChange:s,type:"checkbox",className:"small"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Arrows","pds-blocks"))),(0,t.createElement)(o.Z,{key:"pagination",name:"pagination",value:"boolean",checked:a.slider.pagination||!1,onChange:s,type:"checkbox",className:"small"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Pagination","pds-blocks"))),(0,t.createElement)(o.Z,{key:"isNavigation",name:"is-navigation",value:"boolean",checked:a.slider["is-navigation"]||!1,onChange:s,type:"checkbox",className:"small"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("isNavigation","pds-blocks"))),(0,t.createElement)(o.Z,{key:"center-mode",name:"center",value:"boolean",checked:a.slider.center||!1,onChange:s,type:"checkbox",className:"small"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Center Mode","pds-blocks"))),(0,t.createElement)(o.Z,{key:"autoWidth",name:"autoWidth",value:"boolean",checked:a.slider.autoWidth||!1,onChange:s,type:"checkbox",className:"small"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Free Width","pds-blocks"))),(0,t.createElement)(o.Z,{key:"autoHeight",name:"autoHeight",value:"boolean",checked:a.slider.autoHeight||!1,onChange:s,type:"checkbox",className:"small"},(0,t.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Free Height","pds-blocks")))),(0,t.createElement)("div",{className:"col-12"},(0,t.createElement)(c.Z,{key:"sync",name:"sync",label:(0,n.__)("Sync with","pds-blocks"),className:"mb-15",value:a.slider.sync,onChange:s})),a.slider.pagination?(0,t.createElement)("div",{className:"col-12"},(0,t.createElement)(c.Z,{key:"page",name:"page",label:(0,n.__)("Pagination Buttons Classes","pds-blocks"),className:"mb-15",value:a.slider.page,onChange:s}),(0,t.createElement)(c.Z,{key:"pagination",name:"pagination",label:(0,n.__)("Pagination Wrapper Classes","pds-blocks"),value:a.slider.pagination,onChange:s})):null,a.slider.controls||""===a.slider.controls?(0,t.createElement)("div",{className:"col-12"},(0,t.createElement)(c.Z,{key:"arrow",name:"arrow",label:(0,n.__)("Arrows Buttons Classes","pds-blocks"),className:"mb-15",value:a.slider.arrow,onChange:s}),(0,t.createElement)(c.Z,{key:"controls",name:"controls",label:(0,n.__)("Arrows Wrapper Classes","pds-blocks"),value:a.slider.controls,onChange:s})):null))}}},1887:(e,a,l)=>{l.d(a,{Z:()=>s});var t=l(9196),n=l(9307);const s=e=>{const{name:a,type:l,value:s,checked:c,onChange:r,children:o,required:i,className:m}=e;let p="fs-12 option-control flexbox align-center-y",d={onChange:(0,n.useCallback)((e=>r(e.target)),[r])};return m&&(p+=` ${m}`),d.defaultChecked=c,i&&(d.required=!0),s&&(d.value=s),(0,t.createElement)("label",{className:p,"data-type":l?.includes("switch")?"switch":l.includes("button")?"button":l},(0,t.createElement)("input",{type:l?.replace("switch-","").replace("button-",""),name:a,...d}),l?.includes("switch")?(0,t.createElement)("span",{className:"switch"}):null,o)}},9411:(e,a,l)=>{l.d(a,{Z:()=>c});var t=l(9196),n=l(5736),s=l(9307);const c=e=>{const[a,l]=e.sm?(0,s.useState)("sm"):(0,s.useState)("md"),c={opts:["sm","md","lg","xl"],classes:"btn square tiny col far",sm:{key:"mobile",title:(0,n.__)("Mobile Screens","pds-blocks")},md:{key:"tablet",title:(0,n.__)("Tablet Screens","pds-blocks")},lg:{key:"laptop",title:(0,n.__)("Desktop Screens","pds-blocks")},xl:{key:"desktop",title:(0,n.__)("xLarge Screens","pds-blocks")}};return(0,t.createElement)("div",{className:"px-gb-tabs"},(0,t.createElement)("div",{className:"options-tabs px-group borderd-group divider-b border-alpha-15 mb-10",style:{"--radius":0}},c.opts.map((n=>{if(e[n])return(0,t.createElement)("button",{key:c[n].key,onClick:()=>l(n),className:`${c.classes} ${a!==n?"bg-alpha-05":"primary"} fa-${c[n].key}`,title:c[n].title,"data-options":n})}))),(0,t.createElement)("div",{className:`${a}-options`},e[a]&&e[a](a)))}},3472:(e,a,l)=>{l.d(a,{Z:()=>k});var t=l(9196),n=l(5736),s=l(8423),c=l.n(s),r=l(5609),o=l(2175),i=l(8907),m=l(8409),p=l(4034),d=l(4678),u=l(241),b=l(1887),h=l(2298),g=l(9411),y=l(9109),x=l(3142);function k(e){const a=window.PhenixBlocks,l=e=>a.set_value(e,f,_),s=(e,l)=>a.set_flexbox(e,l,f,_),k=(e,l)=>a.setObject(e,l,"style",!1,f,_),v=(e,l)=>a.setObject(e,l,"query",!1,f,_),{attributes:f,setAttributes:_}=e,E=(0,o.useBlockProps)(),$=E.id;if(f.metadata?.name){let e=document.querySelector(`.block-editor-list-view-tree a[href="#block-${E["data-block"]}"] .components-truncate`);e&&(e.textContent=f.metadata.name)}return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(r.ToolbarGroup,{key:`${$}-toolbar`,label:(0,n.__)("Quick Settings","pds-blocks")},f.flexbox?.equals||f.flexbox?.slider?(0,t.createElement)(p.Z,{title:(0,n.__)("Columns Number","pds-blocks"),button:"bg-transparent fs-16 square far fa-columns divider-e border-alpha-25 h-100",dropList:"fs-14 w-min-180"},(0,t.createElement)("li",{key:"pds-styles",className:"pdt-15 pdb-5 pdx-15 lineheight-150"},(0,t.createElement)(d.Z,{name:"cols",icon:"far fa-mobile",min:0,max:13,value:f.flexbox?.cols||0,onChange:e=>s(e,"")}),(0,t.createElement)(d.Z,{name:"cols-md",icon:"far fa-tablet",min:0,max:13,value:f.flexbox["cols-md"]||0,onChange:e=>s(e,"")}),(0,t.createElement)(d.Z,{name:"cols-lg",icon:"far fa-laptop",min:0,max:13,value:f.flexbox["cols-lg"]||0,onChange:e=>s(e,"")}),(0,t.createElement)(d.Z,{name:"cols-xl",icon:"far fa-desktop",min:0,max:13,value:f.flexbox["cols-xl"]||0,onChange:e=>s(e,"")}))):null,(0,t.createElement)(p.Z,{title:(0,n.__)("Sizes Options","pds-blocks"),button:"bg-transparent fs-16 square far fa-arrows-maximize divider-e border-alpha-25 h-100",dropList:"fs-14 w-min-320"},(0,t.createElement)("li",{key:"sizes",className:"pdy-15 pdx-15 lineheight-150"},(0,t.createElement)(g.Z,{sm:e=>(0,t.createElement)(m.Z,{attributes:f,mainSetter:k}),md:e=>(0,t.createElement)(m.Z,{screen:e,attributes:f,mainSetter:k}),lg:e=>(0,t.createElement)(m.Z,{screen:e,attributes:f,mainSetter:k}),xl:e=>(0,t.createElement)(m.Z,{screen:e,attributes:f,mainSetter:k})}))))),(0,t.createElement)(o.InspectorControls,{key:`${$}-inspector`},(0,t.createElement)(r.PanelBody,{title:(0,n.__)("Query Setting","pds-blocks"),initialOpen:!0},(0,t.createElement)("div",{className:"row gpx-10"},(0,t.createElement)("div",{className:"col-12 mb-15"},(0,t.createElement)(h.Z,{name:"taxonomy",options:"taxonomies",label:(0,n.__)("Taxonomies","pds-blocks"),value:f.query?.taxonomy||null,valueSetter:e=>v(e,!1)})),(0,t.createElement)("div",{className:"col-12 mb-15"},(0,t.createElement)(h.Z,{name:"post_type",options:"post-types",label:(0,n.__)("Post-Type","pds-blocks"),value:f.query?.post_type||null,valueSetter:e=>v(e,!1)})),(0,t.createElement)("div",{className:"col-12 mb-15"},(0,t.createElement)(h.Z,{label:(0,n.__)("Card Template","pds-blocks"),name:"template_part",options:"template-parts",value:f.template_part,valueSetter:l})),(0,t.createElement)("div",{className:"col-6 mb-10"},(0,t.createElement)(u.Z,{label:(0,n.__)("Order","pds-blocks"),name:"order",value:f.query?.order,onChange:v,options:[{label:(0,n.__)("Oldest","pds-blocks"),value:"ASC"},{label:(0,n.__)("Newest","pds-blocks"),value:"DESC"}]})),(0,t.createElement)("div",{className:"col-6 mb-10"},(0,t.createElement)(u.Z,{label:(0,n.__)("OrderBy","pds-blocks"),name:"orderby",value:f.query?.orderby,onChange:v,options:a.dataLists.queries.taxOrderBy})),(0,t.createElement)("div",{className:"col-12 mb-10"},(0,t.createElement)(d.Z,{name:"number",label:(0,n.__)("Max Items","pds-blocks"),value:f.query?.number,onChange:v})),(0,t.createElement)("div",{className:"col-6"},(0,t.createElement)(b.Z,{key:`hide_empty-${$}`,name:"hide_empty",value:"boolean",checked:f.query.hide_empty||!1,onChange:v,type:"switch-checkbox",className:"small"},(0,n.__)("Hide Empty","pds-blocks"))),(0,t.createElement)("div",{className:"col-6"},(0,t.createElement)(b.Z,{key:`withTerms-${$}`,name:"withTerms",value:"boolean",checked:f.query.withTerms||!1,onChange:v,type:"switch-checkbox",className:"small"},(0,n.__)("Sub Terms","pds-blocks"))),(0,t.createElement)("div",{className:"col-6"},(0,t.createElement)(b.Z,{key:`isFlexbox-${$}`,name:"isFlexbox",value:"boolean",checked:f.isFlexbox,onChange:l,type:"switch-checkbox",className:"small"},(0,n.__)("Grid Mode","pds-blocks"))),(0,t.createElement)("div",{className:"col-6"},(0,t.createElement)(b.Z,{key:`slider-${$}`,name:"slider",value:"boolean",checked:f.flexbox.slider,onChange:s,type:"switch-checkbox",className:"small"},(0,n.__)("IS Slider","pds-blocks"))))),(0,t.createElement)(r.PanelBody,{title:(0,n.__)("Grid Layout","pds-blocks"),initialOpen:!0},(0,t.createElement)(g.Z,{sm:e=>(0,t.createElement)(x.Z,{attributes:f,mainSetter:s}),md:e=>(0,t.createElement)(x.Z,{screen:e,attributes:f,mainSetter:s,options:"grid-props, align"}),lg:e=>(0,t.createElement)(x.Z,{screen:e,attributes:f,mainSetter:s,options:"grid-props, align"}),xl:e=>(0,t.createElement)(x.Z,{screen:e,attributes:f,mainSetter:s,options:"grid-props, align"})})),f.flexbox.slider?(0,t.createElement)(r.PanelBody,{title:(0,n.__)("Slider Options","pds-blocks"),initialOpen:!0},(0,t.createElement)(y.Z,{attributes:f,mainSetter:(e,l)=>a.setObject(e,l,"slider",!1,f,_),flexSetter:s})):null),f.preview?(0,t.createElement)("img",{src:i,alt:"",className:"fluid"}):(0,t.createElement)("div",{...E,key:`${$}`},(0,t.createElement)(c(),{block:"phenix/taxonomies",attributes:f})))}},8907:(e,a,l)=>{e.exports=l.p+"images/preview.8e71ce92.png"},9196:e=>{e.exports=window.React},6989:e=>{e.exports=window.wp.apiFetch},2175:e=>{e.exports=window.wp.blockEditor},4981:e=>{e.exports=window.wp.blocks},5609:e=>{e.exports=window.wp.components},9307:e=>{e.exports=window.wp.element},5736:e=>{e.exports=window.wp.i18n},8423:e=>{e.exports=window.wp.serverSideRender},1299:e=>{e.exports=JSON.parse('{"u2":"phenix/taxonomies","TN":"Taxonomies","W3":"phenix-blocks","Y4":{"metadata":{"type":"object","default":{}},"id":{"type":"string","default":""},"query":{"type":"object","default":{}},"template_part":{"type":"string","default":"_placeholder"},"isFlexbox":{"type":"boolean","default":false},"flexbox":{"type":"object","default":{}},"typography":{"type":"object","default":{}},"style":{"type":"object","default":{}},"responsive":{"type":"object","default":{}},"slider":{"type":"object","default":{}},"preview":{"type":"boolean","default":false}}}')}},n={};function s(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,s),l.exports}s.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return s.d(a,{a}),a},s.d=(e,a)=>{for(var l in a)s.o(a,l)&&!s.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var a=s.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var l=a.getElementsByTagName("script");if(l.length)for(var t=l.length-1;t>-1&&!e;)e=l[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e+"../../"})(),e=s(9196),a=s(3472),l=s(1299),(0,s(4981).registerBlockType)(l.u2,{title:l.TN,category:l.W3,attributes:l.Y4,icon:(0,e.createElement)("svg",{fill:"none",viewBox:"0 0 30 30"},(0,e.createElement)("path",{fill:"#000",fillRule:"evenodd",d:"M7.04 20.093c.44.254.92.374 1.4.374.52 0 1.04-.147 1.52-.44l1.227-.8c.733-.44 1.293-1.467 1.293-2.387v-3.867c0-.453.253-1.066.56-1.32L16.947 8.2c.586-.587 1.186-1.733 1.186-2.773V3.453a2.8 2.8 0 00-2.8-2.8H3.467c-1.574 0-2.8 1.28-2.8 2.894v2.066c0 .814.453 1.88 1.08 2.494l3.36 3.533c.28.333.506.92.506 1.267v4.76c0 1.013.534 1.92 1.427 2.426zM2.667 3.56c0-.507.346-.893.8-.893v-.014h11.866c.44 0 .8.36.8.8v1.974c0 .426-.32 1.08-.56 1.32l-3.84 3.4c-.733.626-1.253 1.786-1.253 2.84v3.866c0 .227-.187.6-.347.694l-1.24.8c-.293.186-.64.12-.853 0a.735.735 0 01-.413-.68v-4.76c0-.92-.494-1.947-1-2.574L3.187 6.72c-.294-.293-.52-.867-.52-1.093V3.56z",clipRule:"evenodd"}),(0,e.createElement)("path",{fill:"#000",d:"M11 29.333h8c7.24 0 10.333-3.093 10.333-10.333v-8c0-4.613-1.266-7.48-3.96-9.013-.68-.387-1.866-.707-3.613-.987a1.003 1.003 0 00-1.147.827.99.99 0 00.827 1.146c2.027.32 2.733.64 2.947.76 2.04 1.16 2.946 3.4 2.946 7.267v8c0 6.147-2.186 8.333-8.333 8.333h-8c-6.147 0-8.333-2.186-8.333-8.333v-4c0-.547-.454-1-1-1-.547 0-1 .453-1 1v4C.667 26.24 3.76 29.333 11 29.333z"}),(0,e.createElement)("path",{fill:"#000",d:"M23 17.333h-6.667c-.546 0-1-.453-1-1 0-.546.454-1 1-1H23c.547 0 1 .454 1 1 0 .547-.453 1-1 1zM13.667 22.667H23c.547 0 1-.454 1-1 0-.547-.453-1-1-1h-9.333c-.547 0-1 .453-1 1 0 .546.453 1 1 1z"})),edit:a.Z,save:()=>null})})();
//# sourceMappingURL=index.js.map