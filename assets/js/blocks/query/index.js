(()=>{"use strict";var e,t,a,l={1390:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9196),s=a(9307),n=a(1887);class o extends s.Component{render(){const{label:e,value:t,onChange:a,screen:s,blockKey:o}=this.props,r=s?`-${s}`:"",c="btn tiny bg-transparent fs-12 square pxi",i=`${o?o+"-":""}align-${r}-options`,p=e=>{const l=t.trim().split(/\s+/),s=[`${r}-x-start`,`${r}-x-end`,`${r}-x-between`,`${r}-x-around`,`${r}-x-center`,`${r}-y-start`,`${r}-y-end`,`${r}-y-center`],n=e.getAttribute("name").match(/-x$/)?"x":"y",o=l.some((e=>s.includes(e)));let c=l;return o&&n===m(l)?c=l.map((t=>t===m(l)?e.value:t)):c.push(e.value),a(c.join(" "))},m=e=>e.find((e=>xAlignments.includes(e)||yAlignments.includes(e)));return(0,l.createElement)("div",{className:"components-flex-item flex-alignment-btns",key:i},(0,l.createElement)("div",{className:"flexbox align-between mb-5 align-center-y"},(0,l.createElement)("label",{className:"fs-13 weight-bold"},e),(0,l.createElement)("button",{type:"button",key:`reset-btn${r}`,"data-value":"",title:"Reset",className:"btn tiny bg-transparent fs-12 square far fa-redo",onClick:e=>a("align-reset")})),(0,l.createElement)("div",{className:"flexbox align-between mb-15"},(0,l.createElement)("div",{className:"col-auto border-1 border-solid border-alpha-15 radius-sm"},(0,l.createElement)(n.Z,{key:`align${r}-start-x`,name:`flex-align${r}-x`,checked:t.includes(`align${r}-start-x`),value:`align${r}-start-x`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{title:"Start",className:`${c} pxi-align-x-start`})),(0,l.createElement)(n.Z,{key:`align${r}-center-x`,name:`flex-align${r}-x`,checked:t.includes(`align${r}-center-x`),value:`align${r}-center-x`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-x-center`,title:"Center"})),(0,l.createElement)(n.Z,{key:`align${r}-between`,name:`flex-align${r}-x`,checked:t.includes(`align${r}-between`),value:`align${r}-between`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-x-between`,title:"Between"})),(0,l.createElement)(n.Z,{key:`align${r}-around`,name:`flex-align${r}-x`,checked:t.includes(`align${r}-around`),value:`align${r}-around`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-x-around`,title:"Around"})),(0,l.createElement)(n.Z,{key:`align${r}-end-x`,name:`flex-align${r}-x`,checked:t.includes(`align${r}-end-x`),value:`align${r}-end-x`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-x-end`,title:"Around"}))),(0,l.createElement)("div",{className:"col-auto border-1 border-solid border-alpha-15 radius-sm"},(0,l.createElement)(n.Z,{key:`align${r}-start-y`,name:`flex-align${r}-y`,checked:t.includes(`align${r}-start-y`),value:`align${r}-start-y`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-y-start`,title:"Start"})),(0,l.createElement)(n.Z,{key:`align${r}-center-y`,name:`flex-align${r}-y`,checked:t.includes(`align${r}-center-y`),value:`align${r}-center-y`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-y-center`,title:"Center"})),(0,l.createElement)(n.Z,{key:`align${r}-end-y`,name:`flex-align${r}-y`,checked:t.includes(`align${r}-end-y`),value:`align${r}-end-y`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-y-end`,title:"End"})))))}}},4034:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(9196),s=a(9307);class n extends s.Component{state={opened:!1};componentDidMount(){window.PhenixBlocks.componentsBuilder()}componentDidUpdate(){window.PhenixBlocks.componentsBuilder()}render(){const{label:e,button:t,support:a,dropList:s,children:n,className:o,dataPosition:r,title:c}=this.props,i={};return a?.includes("hover")&&(i["data-hover"]="true"),r&&(i["data-position"]=r),this.props.key&&(i.key=this.props.key),(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:`px-dropdown pds-tm-control ${o||""}`,...i},(0,l.createElement)("button",{className:`px-toggle btn ${t} ${c?"tooltip-bottom":""}`,"data-title":c},e),(0,l.createElement)("ul",{className:`hidden px-dropdown-list reset-list bg-white radius-md radius-bottom bx-shadow-dp-2 border-1 border-alpha-10 border-solid ${s||"fs-14 w-min-200"}`},n)))}}},3484:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(9196),s=a(9307);class n extends s.Component{state={};shouldComponentUpdate(e,t){return e.value!==this.props.value}render(){const{name:e,type:t,size:a,label:s,value:n,onChange:o,className:r,placeholder:c}=this.props;let i={onBlur:e=>{if(this.props.value!==e.target.value)return o(e.target)},type:t||"text",defaultValue:n||"",placeholder:c||s||""};return(0,l.createElement)(l.Fragment,null,s?(0,l.createElement)("label",{className:"tx-capitalize fs-13",style:{marginBottom:5}},`${s}`):null,(0,l.createElement)("input",{name:e,className:`form-control ${a||"small"} radius-md ${r||""}`,...i}))}}},4678:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(9196),s=a(9307);class n extends s.Component{render(){const{label:e,value:t,min:a,max:s,steps:n,icon:o,onChange:r,name:c}=this.props,i=e=>{let t=e.target,l=Phenix(t).ancestor(".px-counter-input"),s=parseFloat(a)||0,o=n||1,c=l.querySelector('input[type="number"]'),i=parseFloat(c.value)-o;return c.value=i>s||i===s?i:s,r(c)};return(0,l.createElement)("div",{className:"flexbox flex-gap-fix align-between flow-column"},(0,l.createElement)("label",{className:"components-input-control__label tx-uppercase weight-bold"},e),(0,l.createElement)("div",{className:"px-counter-input position-rv fluid "+(o||"")},o?"":(0,l.createElement)("button",{onClick:i,className:"btn square small fs-13 increase-btn far fa-minus position-ab pos-start-0 pos-top-0 divider-e icon-fix"}),(0,l.createElement)("input",{name:c,type:"number",min:a,max:s,value:parseFloat(t)?parseFloat(t):0,className:"form-control small radius-sm reset-appearance tx-align-center",onChange:e=>{const t=e.target,l=parseFloat(a)||0,n=parseFloat(s)||0,o=parseFloat(t.value),c=o>=l||o<=n?o:0;return t.value=c,r(t)}}),(0,l.createElement)("div",{className:"position-ab pos-end-0 pos-bottom-0 flexbox"},o?(0,l.createElement)("button",{onClick:i,className:"btn square small fs-13 increase-btn far fa-minus divider-s icon-fix"}):"",(0,l.createElement)("button",{onClick:e=>{let t=e.target,a=Phenix(t).ancestor(".px-counter-input"),l=parseFloat(s)||9999999,o=n?parseFloat(n):1,c=a.querySelector('input[type="number"]'),i=parseFloat(c.value)+o;return c.value=i<l||i===l?i:l,r(c)},className:"btn square small fs-13 increase-btn far fa-plus divider-s icon-fix"}))))}}},2298:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(9196),s=a(5736),n=a(6989),o=a.n(n),r=a(9307),c=a(241);class i extends r.Component{state={dataFetched:0,options:[{label:(0,s.__)("Default","pds-blocks"),value:""}]};reRender=()=>{this.state.options.length<2&&("menu-locations"===this.props.options?o()({path:"pds-blocks/v2/options"}).then((e=>{const t=this.state,a=e.menu_locations,l=[{label:(0,s.__)("Default","pds-blocks"),value:""}];for(const[e,t]of Object.entries(a))l.push({label:t.title,value:t.name});l!==this.state.options&&(t.dataFetched+=1,t.options=l,this.setState({...t}))})):"taxonomies"===this.props.options&&o()({path:"wp/v2/taxonomies"}).then((e=>{const t=this.state,a=[{label:(0,s.__)("Default","pds-blocks"),value:""}];for(const[t,l]of Object.entries(e)){let e=!1;["nav_menu","wp_pattern"].forEach((a=>t.includes(a)?e=!0:null)),e||a.push({value:t,label:l.name})}a!==this.state.options&&(t.dataFetched+=1,t.options=a,this.setState({...t}))})),"taxonomies-terms"===this.props.options?o()({path:`wp/v2/${"category"===this.props.termType?"categories":this.props.termType}`}).then((e=>{const t=this.state,a=[{label:(0,s.__)("Default","pds-blocks"),value:""}];for(const[t,l]of Object.entries(e))a.push({value:l.id,label:l.name});a!==this.state.options&&(t.dataFetched+=1,t.options=a,this.setState({...t}))})):"post-types"===this.props.options?o()({path:"wp/v2/types"}).then((e=>{const t=this.state,a=[];for(const[t,l]of Object.entries(e)){let e=!1;["attachment","nav_menu_item","wp_block","wp_navigation","wp_template","wp_template_part","wp_font"].forEach((a=>t.includes(a)?e=!0:null)),e||a.push({value:t,label:l.name})}a!==this.state.options&&(t.dataFetched+=1,t.options=a,this.setState({...t}))})):"users-roles"===this.props.options?o()({path:"pds-blocks/v2/options"}).then((e=>{const t=this.state,a=[{label:(0,s.__)("Default","pds-blocks"),value:""}];for(const[t,l]of Object.entries(e.users_roles))a.push({value:l.name,label:l.name});a!==this.state.options&&(t.dataFetched+=1,t.options=a,this.setState({...t}))})):"template-parts"===this.props.options&&o()({path:"pds-blocks/v2/options"}).then((e=>{const t=this.state,a=e.theme_parts,s=[];a&&Object.entries(a).forEach((([e,t])=>{if("string"==typeof t)s.push((0,l.createElement)("option",{key:`${t}`,value:t.replace(".php","")},t.replace("-"," ").replace("_","").replace(".php","")));else{let a=[];Object.entries(t).forEach((([t,s])=>{a.push((0,l.createElement)("option",{key:`${e}-${s}`,value:`${e}/${s.replace(".php","")}`},`${s.replace("-"," ").replace("_","").replace(".php","")}`))})),s.push((0,l.createElement)("optgroup",{key:`${e}-group`,label:`${e}`},a))}})),s!==this.state.options&&(t.dataFetched+=1,t.options=s,this.setState({...t}))})))};componentDidMount(){this.reRender()}componentDidUpdate(){this.reRender()}render(){const{options:e,name:t,type:a,size:n,label:o,value:r,multiple:i,valueSetter:p,className:m,search:d,termType:u}=this.props;return Date.now().toString(36),Math.random().toString(36).substr(2,5),screen,(0,l.createElement)(c.Z,{key:this.state.dataFetched,type:a,options:this.state.options,multiple:i,name:t,placeholder:(0,s.__)("Default","pds-blocks"),label:o,value:r,onChange:p,className:m,search:d,size:n})}}},241:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(9196),s=a(9307);class n extends s.Component{state={};componentDidMount(){window.PhenixBlocks.componentsBuilder()}componentDidUpdate(){window.PhenixBlocks.componentsBuilder()}render(){const{name:e,type:t,size:a,label:s,value:n,options:o,multiple:r,onChange:c,className:i,placeholder:p,search:m}=this.props;let d={onChange:e=>c(e.target)};m&&(d["data-search"]=1),r&&(d.multiple=r),p&&(d["data-placeholder"]=p);let u=[];return Array.isArray(o)&&!o[0].type?o.forEach((e=>{u.push((0,l.createElement)("option",{key:e.value,value:e.value},`${e.label}`))})):o[0]&&o[0].type?u=o:Object.entries(o).forEach((([e,t])=>{let a=[];t.forEach((e=>{a.push((0,l.createElement)("option",{key:e.value,value:e.value},`${e.label}`))}));let s=(0,l.createElement)("optgroup",{key:`${e}-group`,label:`${e}`},a);u.push(s)})),(0,l.createElement)(l.Fragment,null,s?(0,l.createElement)("label",{className:"tx-capitalize fs-13",style:{marginBottom:5}},`${s}`):null,(0,l.createElement)("div",{key:"select-wrapper",className:`px-select ${i||""}`,"data-value":n},(0,l.createElement)("select",{key:"select-element",name:e,defaultValue:n,className:`px-select pds-tm-control form-control ${a||"small"} radius-md`,...d},u)))}}},3142:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(9196),s=a(5736),n=a(9307),o=a(1887),r=a(1390),c=a(4678),i=a(241);class p extends n.Component{render(){const{className:e,attributes:t,options:a,mainSetter:n,screen:p}=this.props,m=p?`-${p}`:"",d=Date.now().toString(36)+Math.random().toString(36).substr(2,5)+`-flexbox-${m}-option`,u=[{label:"Start",value:`align-self${p}-start`},{label:"Center",value:`align-self${p}-center`},{label:"End",value:`align-self${p}-end`}];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:`row gpx-15 ${e||""}`,key:d},!a||a.includes("align")?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"col-12 mb-15"},(0,l.createElement)(r.Z,{screen:p,label:(0,s.__)("Flexbox Alignment","pds-blocks"),value:t.flexbox[`align${m}`]||"",onChange:e=>n(e,p||"")}),!a||a.includes("align-self")?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(i.Z,{class:"mt-15",name:`align-self${p}`,size:"normal",placeholder:(0,s.__)("None","pds-blocks"),className:"stacked-options",label:(0,s.__)("Self Align","pds-blocks"),value:t.flexbox[`align-self${p}`],onChange:n,options:u})):null)):null,(0,l.createElement)("div",{className:"col-12 row gpx-10 pdt-5 mb-15"},(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(c.Z,{label:(0,s.__)("Gap-Y Space","pds-blocks"),key:`gpy${m}`,name:`gpy${m}`,onChange:n,value:t.flexbox[`gpy${m}`]||0,min:0,max:50,steps:5})),(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(c.Z,{label:(0,s.__)("Gap-X Space","pds-blocks"),key:`gpx${m}`,name:`gpx${m}`,onChange:n,value:t.flexbox[`gpx${m}`]||0,min:0,max:50,steps:5}))),(0,l.createElement)("div",{className:"col-12 flexbox gpy-5"},!a||a.includes("flex-props")?(0,l.createElement)("label",{className:"col-12 mb-5 tx-UpperCase"},(0,s.__)("Flow Options","pds-blocks")):null,!a||a.includes("flex-props")?(0,l.createElement)(o.Z,{key:`flow${m}`,name:`flow${m}`,value:t.flexbox[`stacked${m}`]&&""!==t.flexbox[`stacked${m}`]?`flow${m}-columns-reverse`:`flow${m}-reverse`,checked:t.flexbox[`flow${m}`]?.length>0,onChange:e=>n(e,p||""),type:"checkbox",className:"tiny col-6"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Reverse ","pds-blocks"))):null,!a||a.includes("flex-props")&&!t.flexbox?.slider?(0,l.createElement)(o.Z,{key:`stacked${m}`,name:`stacked${m}`,value:`flow${m}-columns`,checked:t.flexbox[`stacked${m}`]?.length>0,onChange:e=>n(e,p||""),type:"checkbox",className:"tiny col-6"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Stacked","pds-blocks"))):null,!a||a.includes("flex-props")&&!t.flexbox?.slider?(0,l.createElement)(o.Z,{key:`nowrap${m}`,name:`nowrap${m}`,value:`flow${m}-nowrap`,checked:t.flexbox[`nowrap${m}`]?.length>0,onChange:e=>n(e,p||""),type:"checkbox",className:"tiny col-6"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Nowrap","pds-blocks"))):null,!a||a.includes("grid-props")&&!t.flexbox?.slider&&!p?(0,l.createElement)(o.Z,{key:`equals${m}`,name:`equals${m}`,checked:t.flexbox.equals,onChange:e=>n(e,p||""),type:"checkbox",className:"tiny col-6"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Equal Cols.","pds-blocks"))):null,!a||a.includes("grid-props")&&!t.flexbox?.slider?(0,l.createElement)(o.Z,{key:`masonry${m}`,name:`masonry${m}`,value:`px-masonry${m}`,checked:t.flexbox[`masonry${m}`]?.length>0,onChange:e=>n(e,p||""),type:"checkbox",className:"tiny col-6"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Masonry","pds-blocks"))):null,!a||a.includes("grid-props")?(0,l.createElement)(o.Z,{key:"gpy-fix",name:"gpy-fix",value:"gpy-fix",checked:t.flexbox["gpy-fix"]?.length>0,onChange:e=>n(e,p||""),type:"checkbox",className:"tiny col-6"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Gap Y fix","pds-blocks"))):null,this.props.children?this.props.children:null)))}}},8409:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(9196),s=a(5736),n=a(9307),o=a(241);a(1887);class r extends n.Component{render(){const e=window.PhenixBlocks.dataLists.sizes_range,{attributes:t,options:a,mainSetter:n,screen:r}=this.props,c=r?`-${r}`:"",i=e.width_range.map((e=>({label:e,value:`w${c}-${e}`}))),p=e.max_width_range.map((e=>({label:e,value:`w${c}-min-${e}`}))),m=e.max_width_range.map((e=>({label:e,value:`w${c}-max-${e}`}))),d=e.height_range.map((e=>({label:e,value:`h${c}-${e.replace("%","")}`}))),u=e.max_height_range.map((e=>({label:e,value:`h${c}-min-${e.replace("%","")}`}))),b=e.max_height_range.map((e=>({label:e,value:`h${c}-max-${e.replace("%","")}`}))),h={label:(0,s.__)("Default","pds-blocks"),value:""};return i.unshift(h),p.unshift(h),m.unshift(h),d.unshift(h),u.unshift(h),b.unshift(h),(0,l.createElement)(l.Fragment,null,a?this.props.children?this.props.children:null:(0,l.createElement)("div",{className:"row gpx-20 gpy-15"},(0,l.createElement)("div",{className:"col-12"},(0,l.createElement)(o.Z,{key:`width_size${c}`,name:`width_size${c}`,placeholder:(0,s.__)("Default","pds-blocks"),label:(0,s.__)("Width Sizes","pds-blocks"),value:t.style[`width_size${c}`],onChange:n,options:i})),(0,l.createElement)("div",{className:"col col-6"},(0,l.createElement)(o.Z,{key:`min_size${c}`,name:`min_size${c}`,placeholder:(0,s.__)("Default","pds-blocks"),label:(0,s.__)("Min Width","pds-blocks"),value:t.style[`min_size${c}`],onChange:n,options:p})),(0,l.createElement)("div",{className:"col col-6"},(0,l.createElement)(o.Z,{key:`max_size${c}`,name:`max_size${c}`,placeholder:(0,s.__)("Default","pds-blocks"),label:(0,s.__)("Max Width","pds-blocks"),value:t.style[`max_size${c}`],onChange:n,options:m})),(0,l.createElement)("div",{className:"col-12"},(0,l.createElement)(o.Z,{key:`height_size${c}`,name:`height_size${c}`,placeholder:(0,s.__)("Default","pds-blocks"),label:(0,s.__)("Height Sizes","pds-blocks"),value:t.style[`height_size${c}`],onChange:n,options:d})),(0,l.createElement)("div",{className:"col col-6"},(0,l.createElement)(o.Z,{key:`min_height_size${c}`,name:`min_height_size${c}`,placeholder:(0,s.__)("Default","pds-blocks"),label:(0,s.__)("Min Height","pds-blocks"),value:t.style[`min_height_size${c}`],onChange:n,options:u})),(0,l.createElement)("div",{className:"col col-6"},(0,l.createElement)(o.Z,{key:`max_height_size${c}`,name:`max_height_size${c}`,placeholder:(0,s.__)("Default","pds-blocks"),label:(0,s.__)("Max Height","pds-blocks"),value:t.style[`max_height_size${c}`],onChange:n,options:b})),this.props.children?this.props.children:null))}}},9109:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(9196),s=a(5736),n=a(9307),o=a(3484),r=a(241),c=a(1887),i=a(4678);class p extends n.Component{render(){const{className:e,attributes:t,options:a,mainSetter:n,flexSetter:p,isGrid:m}=this.props,d=(Date.now().toString(36),Math.random().toString(36).substr(2,5),[{label:(0,s.__)("Loop","pds-blocks"),value:"loop"},{label:(0,s.__)("Fading","pds-blocks"),value:"fade"},{label:(0,s.__)("Sliding","pds-blocks"),value:"slide"}]);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"row gpx-20 gpy-15 gpy-fix"},(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(r.Z,{key:"type",name:"type",placeholder:(0,s.__)("Default","pds-blocks"),label:(0,s.__)("Effect Type","pds-blocks"),value:t.slider.type,onChange:n,options:d})),(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(i.Z,{key:"steps",name:"steps",label:(0,s.__)("Steps","pds-blocks"),value:t.slider.steps||1,onChange:n,min:1,max:12})),(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(i.Z,{key:"duration",name:"duration",label:(0,s.__)("Duration","pds-blocks"),value:t.slider.duration||6e3,onChange:n,min:3e3,max:2e4,steps:100})),(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(i.Z,{key:"speed",name:"speed",label:(0,s.__)("Speed","pds-blocks"),value:t.slider.speed||700,onChange:n,min:300,max:3e3,steps:100})),(0,l.createElement)("div",{className:"col-12 pdt-10 divider-t flexbox gpy-5 align-between"},(0,l.createElement)(c.Z,{key:"autoplay",name:"autoplay",value:"boolean",checked:t.slider.autoplay||!0,onChange:n,type:"checkbox",className:"small"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Autoplay","pds-blocks"))),(0,l.createElement)(c.Z,{key:"controls",name:"controls",value:"boolean",checked:t.slider.controls||!1,onChange:n,type:"checkbox",className:"small"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Arrows","pds-blocks"))),(0,l.createElement)(c.Z,{key:"pagination",name:"pagination",value:"boolean",checked:t.slider.pagination||!1,onChange:n,type:"checkbox",className:"small"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Pagination","pds-blocks"))),(0,l.createElement)(c.Z,{key:"isNavigation",name:"is-navigation",value:"boolean",checked:t.slider["is-navigation"]||!1,onChange:n,type:"checkbox",className:"small"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("isNavigation","pds-blocks"))),(0,l.createElement)(c.Z,{key:"center-mode",name:"center",value:"boolean",checked:t.slider.center||!1,onChange:n,type:"checkbox",className:"small"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Center Mode","pds-blocks"))),(0,l.createElement)(c.Z,{key:"autoWidth",name:"autoWidth",value:"boolean",checked:t.slider.autoWidth||!1,onChange:n,type:"checkbox",className:"small"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Free Width","pds-blocks"))),(0,l.createElement)(c.Z,{key:"autoHeight",name:"autoHeight",value:"boolean",checked:t.slider.autoHeight||!1,onChange:n,type:"checkbox",className:"small"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,s.__)("Free Height","pds-blocks")))),(0,l.createElement)("div",{className:"col-12"},(0,l.createElement)(o.Z,{key:"sync",name:"sync",label:(0,s.__)("Sync with","pds-blocks"),className:"mb-15",value:t.slider.sync,onChange:n})),t.slider.pagination?(0,l.createElement)("div",{className:"col-12"},(0,l.createElement)(o.Z,{key:"page",name:"page",label:(0,s.__)("Pagination Buttons Classes","pds-blocks"),className:"mb-15",value:t.slider.page,onChange:n}),(0,l.createElement)(o.Z,{key:"pagination",name:"pagination",label:(0,s.__)("Pagination Wrapper Classes","pds-blocks"),value:t.slider.pagination,onChange:n})):null,t.slider.controls||""===t.slider.controls?(0,l.createElement)("div",{className:"col-12"},(0,l.createElement)(o.Z,{key:"arrow",name:"arrow",label:(0,s.__)("Arrows Buttons Classes","pds-blocks"),className:"mb-15",value:t.slider.arrow,onChange:n}),(0,l.createElement)(o.Z,{key:"controls",name:"controls",label:(0,s.__)("Arrows Wrapper Classes","pds-blocks"),value:t.slider.controls,onChange:n})):null))}}},1887:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(9196),s=a(9307);class n extends s.Component{state={};render(){const{name:e,type:t,value:a,checked:s,onChange:n,children:o,required:r,className:c}=this.props;let i="fs-12 option-control flexbox align-center-y",p={onChange:e=>n(e.target)};return c&&(i+=` ${c}`),p.defaultChecked=s,r&&(p.required=!0),a&&(p.value=a),(0,l.createElement)("label",{className:i,"data-type":t?.includes("switch")?"switch":t.includes("button")?"button":t},(0,l.createElement)("input",{type:t?.replace("switch-","").replace("button-",""),name:e,...p}),t?.includes("switch")?(0,l.createElement)("span",{className:"switch"}):null,o)}}},9411:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(9196),s=a(5736);function n(e){const[t,a]=e.sm?(0,l.useState)("sm"):(0,l.useState)("md"),n={opts:["sm","md","lg","xl"],classes:"btn square tiny col far",sm:{key:"mobile",title:(0,s.__)("Mobile Screens","pds-blocks")},md:{key:"tablet",title:(0,s.__)("Tablet Screens","pds-blocks")},lg:{key:"laptop",title:(0,s.__)("Desktop Screens","pds-blocks")},xl:{key:"desktop",title:(0,s.__)("xLarge Screens","pds-blocks")}};return(0,l.createElement)("div",{className:"px-gb-tabs"},(0,l.createElement)("div",{className:"options-tabs px-group borderd-group divider-b border-alpha-15 mb-10",style:{"--radius":0}},n.opts.map((s=>{if(e[s])return(0,l.createElement)("button",{key:n[s].key,onClick:()=>a(s),className:`${n.classes} ${t!==s?"bg-alpha-05":"primary"} fa-${n[s].key}`,title:n[s].title,"data-options":s})}))),(0,l.createElement)("div",{className:`${t}-options`},e[t]&&e[t](t)))}},3706:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(9196),s=a(5736),n=a(8423),o=a.n(n),r=a(5609),c=a(2175),i=a(9870),p=a(4034),m=a(4678),d=a(241),u=a(1887),b=a(2298),h=a(8409),g=a(9411),y=a(9109),x=a(3142);function k(e){const t=window.PhenixBlocks,a=e=>t.set_value(e,v,_),n=(e,a)=>t.set_flexbox(e,a,v,_),k=(e,a)=>t.setObject(e,a,"style",!1,v,_),f=(e,a)=>t.setObject(e,a,"query",!1,v,_),{attributes:v,setAttributes:_}=e,E=(0,c.useBlockProps)(),$=E.id;if(v.metadata?.name){let e=document.querySelector(`.block-editor-list-view-tree a[href="#block-${E["data-block"]}"] .components-truncate`);e&&(e.textContent=v.metadata.name)}return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.BlockControls,null,(0,l.createElement)(r.ToolbarGroup,{label:(0,s.__)("Quick Settings","pds-blocks")},v.flexbox?.equals||v.flexbox?.slider?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(p.Z,{title:(0,s.__)("Columns Number","pds-blocks"),button:"bg-transparent fs-16 square far fa-columns divider-e border-alpha-25 h-100",dropList:"fs-14 w-min-180"},(0,l.createElement)("li",{key:"pds-styles",className:"pdt-15 pdb-5 pdx-15 lineheight-150"},(0,l.createElement)(m.Z,{name:"cols",icon:"far fa-mobile",min:0,max:13,value:v.flexbox?.cols||0,onChange:e=>n(e,"")}),(0,l.createElement)(m.Z,{name:"cols-md",icon:"far fa-tablet",min:0,max:13,value:v.flexbox["cols-md"]||0,onChange:e=>n(e,"")}),(0,l.createElement)(m.Z,{name:"cols-lg",icon:"far fa-laptop",min:0,max:13,value:v.flexbox["cols-lg"]||0,onChange:e=>n(e,"")}),(0,l.createElement)(m.Z,{name:"cols-xl",icon:"far fa-desktop",min:0,max:13,value:v.flexbox["cols-xl"]||0,onChange:e=>n(e,"")})))):null,(0,l.createElement)(p.Z,{title:(0,s.__)("Sizes Options","pds-blocks"),button:"bg-transparent fs-16 square far fa-arrows-maximize divider-e border-alpha-25 h-100",dropList:"fs-14 w-min-320"},(0,l.createElement)("li",{key:"sizes",className:"pdy-15 pdx-15 lineheight-150"},(0,l.createElement)(g.Z,{sm:e=>(0,l.createElement)(h.Z,{attributes:v,mainSetter:k}),md:e=>(0,l.createElement)(h.Z,{screen:e,attributes:v,mainSetter:k}),lg:e=>(0,l.createElement)(h.Z,{screen:e,attributes:v,mainSetter:k}),xl:e=>(0,l.createElement)(h.Z,{screen:e,attributes:v,mainSetter:k})}))))),(0,l.createElement)(c.InspectorControls,{key:`${$}-inspector`},(0,l.createElement)(r.PanelBody,{title:(0,s.__)("General Setting","pds-blocks"),initialOpen:!0},(0,l.createElement)("div",{className:"row gpx-10 mb-10"},(0,l.createElement)("div",{className:"col-12 mb-10"},(0,l.createElement)(b.Z,{key:"post_type",name:"post_type",options:"post-types",label:(0,s.__)("Post-Type","pds-blocks"),value:v.query?.post_type||"default",valueSetter:e=>f(e,!1),multiple:!0})),(0,l.createElement)("div",{className:"col-12 mb-10"},(0,l.createElement)(b.Z,{label:(0,s.__)("Card Template","pds-blocks"),key:"template_part",name:"template_part",options:"template-parts",value:v.template_part,valueSetter:a})),v.query?.post_type?.includes("default")?null:(0,l.createElement)("div",{className:"col-6 mb-10"},(0,l.createElement)(d.Z,{label:(0,s.__)("Order","pds-blocks"),key:"order",name:"order",value:v.query?.order,onChange:f,options:[{label:(0,s.__)("Oldest","pds-blocks"),value:"ASC"},{label:(0,s.__)("Newest","pds-blocks"),value:"DESC"}]})),v.query?.post_type?.includes("default")?null:(0,l.createElement)("div",{className:"col-6 mb-10"},(0,l.createElement)(d.Z,{label:(0,s.__)("OrderBy","pds-blocks"),key:"orderby",name:"orderby",value:v.query?.orderby,onChange:f,options:t.dataLists.queries.orderBy})),v.query?.post_type?.includes("default")?null:(0,l.createElement)("div",{className:"col-12 mb-10"},(0,l.createElement)(m.Z,{name:"per_page",label:(0,s.__)("Per Page","pds-blocks"),value:v.query?.per_page||5,onChange:f})),v.query?.post_type?.includes("default")?null:(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(u.Z,{name:"pagination",value:"boolean",checked:v.query?.pagination,onChange:f,type:"switch-checkbox",className:"small"},(0,s.__)("Pagination","pds-blocks"))),(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(u.Z,{name:"s",value:"boolean",checked:v.query?.s,onChange:f,type:"switch-checkbox",className:"small"},(0,s.__)("IS Search","pds-blocks"))),(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(u.Z,{name:"isFlexbox",value:"boolean",checked:v.isFlexbox,onChange:a,type:"switch-checkbox",className:"small"},(0,s.__)("Grid Mode","pds-blocks"))),(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(u.Z,{name:"slider",value:"boolean",checked:v.flexbox.slider,onChange:n,type:"switch-checkbox",className:"small"},(0,s.__)("IS Slider","pds-blocks"))))),(0,l.createElement)(r.PanelBody,{title:(0,s.__)("Query by Taxonomies","pds-blocks"),initialOpen:!0},(0,l.createElement)("div",{className:"mb-15",key:"taxonomies-types-wrapper"},(0,l.createElement)(b.Z,{key:"taxonomies-types",name:"taxonomies-types",options:"taxonomies",multiple:!0,label:(0,s.__)("Taxonomies Types","pds-blocks"),value:v.query["taxonomies-types"]||["none"],valueSetter:e=>f(e,!1)})),v.query["taxonomies-types"]?v.query["taxonomies-types"].map((e=>(0,l.createElement)("div",{key:`${e}-wrapper`,className:"mb-15"},(0,l.createElement)(b.Z,{key:`${e}-terms-${$}`,name:`${e}-terms`,options:"taxonomies-terms",termType:e,multiple:!0,label:(0,s.__)(`Terms of "${e}"`,"pds-blocks"),value:v.query[`${e}-terms`]||["none"],valueSetter:e=>f(e,!1)})))):null),(0,l.createElement)(r.PanelBody,{title:(0,s.__)("Grid Layout","pds-blocks"),initialOpen:!0},(0,l.createElement)(g.Z,{sm:e=>(0,l.createElement)(x.Z,{attributes:v,mainSetter:n}),md:e=>(0,l.createElement)(x.Z,{screen:e,attributes:v,mainSetter:n,options:"grid-props, align"}),lg:e=>(0,l.createElement)(x.Z,{screen:e,attributes:v,mainSetter:n,options:"grid-props, align"}),xl:e=>(0,l.createElement)(x.Z,{screen:e,attributes:v,mainSetter:n,options:"grid-props, align"})})),v.flexbox.slider?(0,l.createElement)(r.PanelBody,{title:(0,s.__)("Slider Options","pds-blocks"),initialOpen:!0},(0,l.createElement)(y.Z,{attributes:v,mainSetter:(e,a)=>t.setObject(e,a,"slider",!1,v,_),flexSetter:n})):null),v.preview?(0,l.createElement)("img",{src:i,alt:"",className:"fluid"}):(0,l.createElement)("div",{...E,key:`${$}`},(0,l.createElement)(o(),{block:"phenix/query",attributes:v})))}},9870:(e,t,a)=>{e.exports=a.p+"images/preview.60ed317e.png"},9196:e=>{e.exports=window.React},6989:e=>{e.exports=window.wp.apiFetch},2175:e=>{e.exports=window.wp.blockEditor},4981:e=>{e.exports=window.wp.blocks},5609:e=>{e.exports=window.wp.components},9307:e=>{e.exports=window.wp.element},5736:e=>{e.exports=window.wp.i18n},8423:e=>{e.exports=window.wp.serverSideRender},8125:e=>{e.exports=JSON.parse('{"u2":"phenix/query","TN":"Posts Query","W3":"phenix-blocks","Y4":{"id":{"type":"string","default":""},"metadata":{"type":"object","default":{}},"preview":{"type":"boolean","default":false},"query":{"type":"object","default":{}},"template_part":{"type":"string","default":"_placeholder"},"isFlexbox":{"type":"boolean","default":false},"flexbox":{"type":"object","default":{}},"typography":{"type":"object","default":{}},"style":{"type":"object","default":{}},"responsive":{"type":"object","default":{}},"slider":{"type":"object","default":{}}}}')}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return l[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var l=a.length-1;l>-1&&!e;)e=a[l--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../"})(),e=n(9196),t=n(3706),a=n(8125),(0,n(4981).registerBlockType)(a.u2,{title:a.TN,category:a.W3,attributes:a.Y4,icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},(0,e.createElement)("path",{d:"M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z"})),edit:t.Z,save:()=>null})})();
//# sourceMappingURL=index.js.map