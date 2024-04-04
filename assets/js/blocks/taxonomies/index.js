(()=>{"use strict";var e,t,a,l={1390:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(9196),n=a(9307),s=a(1887);class o extends n.Component{render(){const{label:e,value:t,onChange:a,screen:n,blockKey:o}=this.props,r=n?`-${n}`:"",c="btn tiny bg-transparent fs-12 square pxi",i=`${o?o+"-":""}align-${r}-options`,p=e=>{const l=t.trim().split(/\s+/),n=[`${r}-x-start`,`${r}-x-end`,`${r}-x-between`,`${r}-x-around`,`${r}-x-center`,`${r}-y-start`,`${r}-y-end`,`${r}-y-center`],s=e.getAttribute("name").match(/-x$/)?"x":"y",o=l.some((e=>n.includes(e)));let c=l;return o&&s===m(l)?c=l.map((t=>t===m(l)?e.value:t)):c.push(e.value),a(c.join(" "))},m=e=>e.find((e=>xAlignments.includes(e)||yAlignments.includes(e)));return(0,l.createElement)("div",{className:"components-flex-item flex-alignment-btns",key:i},(0,l.createElement)("div",{className:"flexbox align-between mb-5 align-center-y"},(0,l.createElement)("label",{className:"fs-13 weight-bold"},e),(0,l.createElement)("button",{type:"button",key:`reset-btn${r}`,"data-value":"",title:"Reset",className:"btn tiny bg-transparent fs-12 square far fa-redo",onClick:e=>a("align-reset")})),(0,l.createElement)("div",{className:"flexbox align-between"},(0,l.createElement)("div",{className:"col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm"},(0,l.createElement)(s.Z,{key:`align${r}-start-x`,name:`flex-align${r}-x`,checked:t.includes(`align${r}-start-x`),value:`align${r}-start-x`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{title:"Start",className:`${c} pxi-align-x-start`})),(0,l.createElement)(s.Z,{key:`align${r}-center-x`,name:`flex-align${r}-x`,checked:t.includes(`align${r}-center-x`),value:`align${r}-center-x`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-x-center`,title:"Center"})),(0,l.createElement)(s.Z,{key:`align${r}-between`,name:`flex-align${r}-x`,checked:t.includes(`align${r}-between`),value:`align${r}-between`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-x-between`,title:"Between"})),(0,l.createElement)(s.Z,{key:`align${r}-around`,name:`flex-align${r}-x`,checked:t.includes(`align${r}-around`),value:`align${r}-around`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-x-around`,title:"Around"})),(0,l.createElement)(s.Z,{key:`align${r}-end-x`,name:`flex-align${r}-x`,checked:t.includes(`align${r}-end-x`),value:`align${r}-end-x`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-x-end`,title:"Around"}))),(0,l.createElement)("div",{className:"col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm"},(0,l.createElement)(s.Z,{key:`align${r}-start-y`,name:`flex-align${r}-y`,checked:t.includes(`align${r}-start-y`),value:`align${r}-start-y`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-y-start`,title:"Start"})),(0,l.createElement)(s.Z,{key:`align${r}-center-y`,name:`flex-align${r}-y`,checked:t.includes(`align${r}-center-y`),value:`align${r}-center-y`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-y-center`,title:"Center"})),(0,l.createElement)(s.Z,{key:`align${r}-end-y`,name:`flex-align${r}-y`,checked:t.includes(`align${r}-end-y`),value:`align${r}-end-y`,onChange:p,type:"button-radio",className:"tiny inline-block"},(0,l.createElement)("span",{className:`${c} pxi-align-y-end`,title:"End"})))))}}},4034:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(9196),n=a(9307);class s extends n.Component{state={opened:!1};componentDidMount(){window.PhenixBlocks.componentsBuilder()}componentDidUpdate(){window.PhenixBlocks.componentsBuilder()}render(){const{label:e,button:t,support:a,dropList:n,children:s,className:o,dataPosition:r,title:c}=this.props,i={};return a?.includes("hover")&&(i["data-hover"]="true"),r&&(i["data-position"]=r),this.props.key&&(i.key=this.props.key),(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:`px-dropdown pds-tm-control ${o||""}`,...i},(0,l.createElement)("button",{className:`px-toggle btn ${t} ${c?"tooltip-bottom":""}`,"data-title":c},e),(0,l.createElement)("ul",{className:`hidden px-dropdown-list reset-list bg-white radius-md radius-bottom bx-shadow-dp-2 border-1 border-alpha-10 border-solid ${n||"fs-14 w-min-200"}`},s)))}}},4678:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(9196),n=a(9307);class s extends n.Component{render(){const{label:e,value:t,min:a,max:n,steps:s,icon:o,onChange:r,name:c}=this.props,i=e=>{let t=e.target,l=Phenix(t).ancestor(".px-counter-input"),n=parseFloat(a)||0,o=s||1,c=l.querySelector('input[type="number"]'),i=parseFloat(c.value)-o;return c.value=i>n||i===n?i:n,r(c)};return(0,l.createElement)("div",{className:"flexbox flex-gap-fix align-between flow-column"},(0,l.createElement)("label",{className:"components-input-control__label tx-uppercase weight-bold"},e),(0,l.createElement)("div",{className:"px-counter-input position-rv fluid "+(o||"")},o?"":(0,l.createElement)("button",{onClick:i,className:"btn square small fs-13 increase-btn far fa-minus position-ab pos-start-0 pos-top-0 divider-e icon-fix"}),(0,l.createElement)("input",{name:c,type:"number",min:a,max:n,value:parseFloat(t)?parseFloat(t):0,className:"form-control small radius-sm reset-appearance tx-align-center",onChange:e=>{const t=e.target,l=parseFloat(a)||0,s=parseFloat(n)||0,o=parseFloat(t.value),c=o>=l||o<=s?o:0;return t.value=c,r(t)}}),(0,l.createElement)("div",{className:"position-ab pos-end-0 pos-bottom-0 flexbox"},o?(0,l.createElement)("button",{onClick:i,className:"btn square small fs-13 increase-btn far fa-minus divider-s icon-fix"}):"",(0,l.createElement)("button",{onClick:e=>{let t=e.target,a=Phenix(t).ancestor(".px-counter-input"),l=parseFloat(n)||9999999,o=s?parseFloat(s):1,c=a.querySelector('input[type="number"]'),i=parseFloat(c.value)+o;return c.value=i<l||i===l?i:l,r(c)},className:"btn square small fs-13 increase-btn far fa-plus divider-s icon-fix"}))))}}},2298:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(9196),n=a(5736),s=a(6989),o=a.n(s),r=a(9307),c=a(241);class i extends r.Component{state={dataFetched:0,options:[{label:(0,n.__)("Default","pds-blocks"),value:""}]};reRender=()=>{this.state.options.length<2&&("menu-locations"===this.props.options?o()({path:"pds-blocks/v2/options"}).then((e=>{const t=this.state,a=e.menu_locations,l=[{label:(0,n.__)("Default","pds-blocks"),value:""}];for(const[e,t]of Object.entries(a))l.push({label:t.title,value:t.name});l!==this.state.options&&(t.dataFetched+=1,t.options=l,this.setState({...t}))})):"taxonomies"===this.props.options?o()({path:"wp/v2/taxonomies"}).then((e=>{const t=this.state,a=[];for(const[t,l]of Object.entries(e))"nav_menu"!==t&&a.push({value:t,label:l.name});a!==this.state.options&&(t.dataFetched+=1,t.options=a,this.setState({...t}))})):"taxonomies-terms"===this.props.options?o()({path:`wp/v2/${this.props.termType}`}).then((e=>{console.log(e)})):"post-types"===this.props.options?o()({path:"wp/v2/types"}).then((e=>{const t=this.state,a=[];for(const[t,l]of Object.entries(e))["attachment","nav_menu_item","wp_block","wp_navigation","wp_template","wp_template_part"].includes(t)||a.push({value:t,label:l.name});a!==this.state.options&&(t.dataFetched+=1,t.options=a,this.setState({...t}))})):"users-roles"===this.props.options?o()({path:"pds-blocks/v2/options"}).then((e=>{const t=this.state,a=[];for(const[t,l]of Object.entries(e.users_roles))a.push({value:l.name,label:l.name});a!==this.state.options&&(t.dataFetched+=1,t.options=a,this.setState({...t}))})):"template-parts"===this.props.options&&o()({path:"pds-blocks/v2/options"}).then((e=>{const t=this.state,a=e.theme_parts,n=[];a&&Object.entries(a).forEach((([e,t])=>{if("string"==typeof t)n.push((0,l.createElement)("option",{key:`${e}-${t}`,value:t.replace(".php","")},t.replace("-"," ").replace("_","").replace(".php","")));else{let a=[];Object.entries(t).forEach((([t,n])=>{a.push((0,l.createElement)("option",{key:`${t}-${n}`,value:`${e}/${n.replace(".php","")}`},`${n.replace("-"," ").replace("_","").replace(".php","")}`))})),n.push((0,l.createElement)("optgroup",{key:`${e}-group`,label:`${e}`},a))}})),n!==this.state.options&&(t.dataFetched+=1,t.options=n,this.setState({...t}))})))};componentDidMount(){this.reRender()}componentDidUpdate(){this.reRender()}render(){const{options:e,name:t,type:a,size:s,label:o,value:r,multiple:i,valueSetter:p,className:m,search:d,termType:u}=this.props;return Date.now().toString(36),Math.random().toString(36).substr(2,5),screen,(0,l.createElement)(c.Z,{key:this.state.dataFetched,type:a,options:this.state.options,multiple:i,name:t,placeholder:(0,n.__)("Default","pds-blocks"),label:o,value:r,onChange:p,className:m,search:d,size:s})}}},241:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(9196),n=a(9307);class s extends n.Component{state={};componentDidMount(){window.PhenixBlocks.componentsBuilder()}componentDidUpdate(){window.PhenixBlocks.componentsBuilder()}shouldComponentUpdate(e,t){return e.value!==this.props.value||e.options!==this.props.options}render(){const{name:e,type:t,size:a,label:n,value:s,options:o,multiple:r,onChange:c,className:i,placeholder:p,search:m}=this.props;let d={onChange:e=>c(e.target)};m&&(d["data-search"]=1),r&&(d.multiple=r),p&&(d["data-placeholder"]=p);let u=[];return Array.isArray(o)&&!o[0].type?o.forEach((e=>{u.push((0,l.createElement)("option",{key:e.value,value:e.value},`${e.label}`))})):o[0]&&o[0].type?u=o:Object.entries(o).forEach((([e,t])=>{let a=[];t.forEach((e=>{a.push((0,l.createElement)("option",{key:e.value,value:e.value},`${e.label}`))}));let n=(0,l.createElement)("optgroup",{key:`${e}-group`,label:`${e}`},a);u.push(n)})),(0,l.createElement)(l.Fragment,null,n?(0,l.createElement)("label",{className:"tx-capitalize fs-13",style:{marginBottom:5}},`${n}`):null,(0,l.createElement)("div",{key:"select-wrapper",className:`px-select ${i||""}`,"data-value":s},(0,l.createElement)("select",{key:"select-element",name:e,defaultValue:s,className:`px-select pds-tm-control form-control ${a||"small"} radius-md`,...d},u)))}}},3142:(e,t,a)=>{a.d(t,{Z:()=>p});var l=a(9196),n=a(5736),s=a(9307),o=a(1887),r=a(1390),c=a(4678),i=a(241);class p extends s.Component{render(){const{className:e,attributes:t,options:a,mainSetter:s,screen:p}=this.props,m=p?`-${p}`:"",d=Date.now().toString(36)+Math.random().toString(36).substr(2,5)+`-flexbox-${m}-option`,u=[{label:"Start",value:`align-self${p}-start`},{label:"Center",value:`align-self${p}-center`},{label:"End",value:`align-self${p}-end`}];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:`row gpx-15 ${e||""}`,key:d},!a||a.includes("align")?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"col-12 mb-15"},(0,l.createElement)(r.Z,{screen:p,label:(0,n.__)("Flexbox Alignment","pds-blocks"),value:t.flexbox[`align${m}`]||"",onChange:e=>s(e,p||"")}),!a||a.includes("align-self")?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(i.Z,{class:"mt-15",name:`align-self${p}`,size:"normal",placeholder:(0,n.__)("None","pds-blocks"),className:"stacked-options",label:(0,n.__)("Self Align","pds-blocks"),value:t.flexbox[`align-self${p}`],onChange:s,options:u})):null)):null,(0,l.createElement)("div",{className:"col-12 row gpx-10 pdt-5 mb-15"},(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(c.Z,{label:(0,n.__)("Gap-Y Space","pds-blocks"),key:`gpy${m}`,name:`gpy${m}`,onChange:s,value:t.flexbox[`gpy${m}`]||0,min:0,max:50,steps:5})),(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(c.Z,{label:(0,n.__)("Gap-X Space","pds-blocks"),key:`gpx${m}`,name:`gpx${m}`,onChange:s,value:t.flexbox[`gpx${m}`]||0,min:0,max:50,steps:5}))),(0,l.createElement)("div",{className:"col-12 flexbox gpy-5"},!a||a.includes("flex-props")?(0,l.createElement)("label",{className:"col-12 mb-5 tx-UpperCase"},(0,n.__)("Flow Options","pds-blocks")):null,!a||a.includes("flex-props")?(0,l.createElement)(o.Z,{key:`flow${m}`,name:`flow${m}`,value:t.flexbox[`stacked${m}`]&&""!==t.flexbox[`stacked${m}`]?`flow${m}-columns-reverse`:`flow${m}-reverse`,checked:t.flexbox[`flow${m}`]?.length>0,onChange:e=>s(e,p||""),type:"checkbox",className:"tiny me-15"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Reverse ","pds-blocks"))):null,!a||a.includes("flex-props")&&!t.flexbox?.slider?(0,l.createElement)(o.Z,{key:`stacked${m}`,name:`stacked${m}`,value:`flow${m}-columns`,checked:t.flexbox[`stacked${m}`]?.length>0,onChange:e=>s(e,p||""),type:"checkbox",className:"tiny me-15"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Stacked","pds-blocks"))):null,!a||a.includes("flex-props")&&!t.flexbox?.slider?(0,l.createElement)(o.Z,{key:`nowrap${m}`,name:`nowrap${m}`,value:`flow${m}-nowrap`,checked:t.flexbox[`nowrap${m}`]?.length>0,onChange:e=>s(e,p||""),type:"checkbox",className:"tiny"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Nowrap","pds-blocks"))):null,!a||a.includes("grid-props")&&!t.flexbox?.slider&&!p?(0,l.createElement)(o.Z,{key:`equals${m}`,name:`equals${m}`,checked:t.flexbox.equals,onChange:e=>s(e,p||""),type:"checkbox",className:"tiny me-15"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Equal Cols.","pds-blocks"))):null,!a||a.includes("grid-props")&&!t.flexbox?.slider?(0,l.createElement)(o.Z,{key:`masonry${m}`,name:`masonry${m}`,value:`px-masonry${m}`,checked:t.flexbox[`masonry${m}`]?.length>0,onChange:e=>s(e,p||""),type:"checkbox",className:"tiny me-15"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Masonry","pds-blocks"))):null,!a||a.includes("grid-props")?(0,l.createElement)(o.Z,{key:"gpy-fix",name:"gpy-fix",value:"gpy-fix",checked:t.flexbox["gpy-fix"]?.length>0,onChange:e=>s(e,p||""),type:"checkbox",className:"tiny me-15"},(0,l.createElement)("span",{className:"fas fa-check radius-circle"},(0,n.__)("Gap Y fix","pds-blocks"))):null,this.props.children?this.props.children:null)))}}},8409:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(9196),n=a(5736),s=a(9307),o=a(241);a(1887);class r extends s.Component{render(){const e=window.PhenixBlocks.dataLists.sizes_range,{attributes:t,options:a,mainSetter:s,screen:r}=this.props,c=r?`-${r}`:"",i=e.width_range.map((e=>({label:e,value:`w${c}-${e}`}))),p=e.max_width_range.map((e=>({label:e,value:`w${c}-min-${e}`}))),m=e.max_width_range.map((e=>({label:e,value:`w${c}-max-${e}`}))),d=e.height_range.map((e=>({label:e,value:`h${c}-${e.replace("%","")}`}))),u=e.max_height_range.map((e=>({label:e,value:`h${c}-min-${e.replace("%","")}`}))),b=e.max_height_range.map((e=>({label:e,value:`h${c}-max-${e.replace("%","")}`}))),h={label:(0,n.__)("Default","pds-blocks"),value:""};return i.unshift(h),p.unshift(h),m.unshift(h),d.unshift(h),u.unshift(h),b.unshift(h),(0,l.createElement)(l.Fragment,null,a?this.props.children?this.props.children:null:(0,l.createElement)("div",{className:"row gpx-20 gpy-15"},(0,l.createElement)("div",{className:"col-12"},(0,l.createElement)(o.Z,{key:`width_size${r}`,name:`width_size${r}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Width Sizes","pds-blocks"),value:t.style[`width_size${r}`],onChange:s,options:i})),(0,l.createElement)("div",{className:"col col-6"},(0,l.createElement)(o.Z,{key:`min_size${r}`,name:`min_size${r}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Min Width","pds-blocks"),value:t.style[`min_size${r}`],onChange:s,options:p})),(0,l.createElement)("div",{className:"col col-6"},(0,l.createElement)(o.Z,{key:`max_size${r}`,name:`max_size${r}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Max Width","pds-blocks"),value:t.style[`max_size${r}`],onChange:s,options:m})),(0,l.createElement)("div",{className:"col-12"},(0,l.createElement)(o.Z,{key:`height_size${r}`,name:`height_size${r}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Height Sizes","pds-blocks"),value:t.style[`height_size${r}`],onChange:s,options:d})),(0,l.createElement)("div",{className:"col col-6"},(0,l.createElement)(o.Z,{key:`min_height_size${r}`,name:`min_height_size${r}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Min Height","pds-blocks"),value:t.style[`min_height_size${r}`],onChange:s,options:u})),(0,l.createElement)("div",{className:"col col-6"},(0,l.createElement)(o.Z,{key:`max_height_size${r}`,name:`max_height_size${r}`,placeholder:(0,n.__)("Default","pds-blocks"),label:(0,n.__)("Max Height","pds-blocks"),value:t.style[`max_height_size${r}`],onChange:s,options:b})),this.props.children?this.props.children:null))}}},1887:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(9196),n=a(9307);class s extends n.Component{state={};render(){const{name:e,type:t,value:a,checked:n,onChange:s,children:o,required:r,className:c}=this.props;let i="fs-12 option-control flexbox align-center-y",p={onChange:e=>s(e.target)};return c&&(i+=` ${c}`),p.defaultChecked=n,r&&(p.required=!0),a&&(p.value=a),(0,l.createElement)("label",{className:i,"data-type":t?.includes("switch")?"switch":t.includes("button")?"button":t},(0,l.createElement)("input",{type:t?.replace("switch-","").replace("button-",""),name:e,...p}),t?.includes("switch")?(0,l.createElement)("span",{className:"switch"}):null,o)}}},9411:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(9196),n=a(5736);function s(e){const[t,a]=e.sm?(0,l.useState)("sm"):(0,l.useState)("md"),s={opts:["sm","md","lg","xl"],classes:"btn square tiny col far",sm:{key:"mobile",title:(0,n.__)("Mobile Screens","pds-blocks")},md:{key:"tablet",title:(0,n.__)("Tablet Screens","pds-blocks")},lg:{key:"laptop",title:(0,n.__)("Desktop Screens","pds-blocks")},xl:{key:"desktop",title:(0,n.__)("xLarge Screens","pds-blocks")}};return(0,l.createElement)("div",{className:"px-gb-tabs"},(0,l.createElement)("div",{className:"options-tabs px-group borderd-group divider-b border-alpha-15 mb-10",style:{"--radius":0}},s.opts.map((n=>{if(e[n])return(0,l.createElement)("button",{key:s[n].key,onClick:()=>a(n),className:`${s.classes} ${t!==n?"bg-alpha-05":"primary"} fa-${s[n].key}`,title:s[n].title,"data-options":n})}))),(0,l.createElement)("div",{className:`${t}-options`},e[t]&&e[t](t)))}},3472:(e,t,a)=>{a.d(t,{Z:()=>y});var l=a(9196),n=a(5736),s=a(8423),o=a.n(s),r=a(5609),c=a(2175),i=a(8907),p=a(8409),m=a(4034),d=a(4678),u=a(241),b=a(1887),h=a(2298),x=a(9411),g=a(3142);function y(e){const t=window.PhenixBlocks,a=e=>t.set_value(e,v,k),s=(e,a)=>t.set_flexbox(e,a,v,k),y=(e,a)=>t.setObject(e,a,"style",!1,v,k),f=(e,a)=>t.setObject(e,a,"query",!1,v,k),{attributes:v,setAttributes:k}=e,_=(0,c.useBlockProps)(),E=_.id;if(v.metadata?.name){let e=document.querySelector(`.block-editor-list-view-tree a[href="#block-${_["data-block"]}"] .components-truncate`);e&&(e.textContent=v.metadata.name)}return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.BlockControls,null,(0,l.createElement)(r.Toolbar,{key:`${E}-toolbar`,label:(0,n.__)("Quick Settings","pds-blocks")},v.flexbox?.equals||v.flexbox?.slider?(0,l.createElement)(m.Z,{title:(0,n.__)("Columns Number","pds-blocks"),button:"bg-transparent fs-16 square far fa-columns divider-e border-alpha-25 h-100",dropList:"fs-14 w-min-180"},(0,l.createElement)("li",{key:"pds-styles",className:"pdt-15 pdb-5 pdx-15 lineheight-150"},(0,l.createElement)(d.Z,{name:"cols",icon:"far fa-mobile",min:0,max:13,value:v.flexbox?.cols||0,onChange:e=>s(e,"")}),(0,l.createElement)(d.Z,{name:"cols-md",icon:"far fa-tablet",min:0,max:13,value:v.flexbox["cols-md"]||0,onChange:e=>s(e,"")}),(0,l.createElement)(d.Z,{name:"cols-lg",icon:"far fa-laptop",min:0,max:13,value:v.flexbox["cols-lg"]||0,onChange:e=>s(e,"")}),(0,l.createElement)(d.Z,{name:"cols-xl",icon:"far fa-desktop",min:0,max:13,value:v.flexbox["cols-xl"]||0,onChange:e=>s(e,"")}))):null,(0,l.createElement)(m.Z,{title:(0,n.__)("Sizes Options","pds-blocks"),button:"bg-transparent fs-16 square far fa-arrows-maximize divider-e border-alpha-25 h-100",dropList:"fs-14 w-min-320"},(0,l.createElement)("li",{key:"sizes",className:"pdy-15 pdx-15 lineheight-150"},(0,l.createElement)(x.Z,{sm:e=>(0,l.createElement)(p.Z,{attributes:v,mainSetter:y}),md:e=>(0,l.createElement)(p.Z,{screen:e,attributes:v,mainSetter:y}),lg:e=>(0,l.createElement)(p.Z,{screen:e,attributes:v,mainSetter:y}),xl:e=>(0,l.createElement)(p.Z,{screen:e,attributes:v,mainSetter:y})}))))),(0,l.createElement)(c.InspectorControls,{key:`${E}-inspector`},(0,l.createElement)(r.PanelBody,{title:(0,n.__)("Query Setting","pds-blocks"),initialOpen:!0},(0,l.createElement)("div",{className:"row gpx-10"},(0,l.createElement)("div",{className:"col-12 mb-15"},(0,l.createElement)(h.Z,{name:"taxonomy",options:"taxonomies",label:(0,n.__)("Taxonomies","pds-blocks"),value:v.query?.taxonomy||null,valueSetter:e=>f(e,!1)})),(0,l.createElement)("div",{className:"col-12 mb-15"},(0,l.createElement)(h.Z,{name:"post_type",options:"post-types",label:(0,n.__)("Post-Type","pds-blocks"),value:v.query?.post_type||null,valueSetter:e=>f(e,!1)})),(0,l.createElement)("div",{className:"col-12 mb-15"},(0,l.createElement)(h.Z,{label:(0,n.__)("Card Template","pds-blocks"),name:"template_part",options:"template-parts",value:v.template_part,valueSetter:a})),(0,l.createElement)("div",{className:"col-6 mb-10"},(0,l.createElement)(u.Z,{label:(0,n.__)("Order","pds-blocks"),name:"order",value:v.query?.order,onChange:f,options:[{label:(0,n.__)("Oldest","pds-blocks"),value:"ASC"},{label:(0,n.__)("Newest","pds-blocks"),value:"DESC"}]})),(0,l.createElement)("div",{className:"col-6 mb-10"},(0,l.createElement)(u.Z,{label:(0,n.__)("OrderBy","pds-blocks"),name:"orderby",value:v.query?.orderby,onChange:f,options:t.dataLists.queries.taxOrderBy})),(0,l.createElement)("div",{className:"col-12 mb-10"},(0,l.createElement)(d.Z,{name:"number",label:(0,n.__)("Max Items","pds-blocks"),value:v.query?.number,onChange:f})),(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(b.Z,{key:`hide_empty-${E}`,name:"hide_empty",value:"boolean",checked:v.query.hide_empty||!1,onChange:f,type:"switch-checkbox",className:"small"},(0,n.__)("Hide Empty","pds-blocks"))),(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(b.Z,{key:`isFlexbox-${E}`,name:"isFlexbox",value:"boolean",checked:v.isFlexbox,onChange:a,type:"switch-checkbox",className:"small"},(0,n.__)("Grid Mode","pds-blocks"))),(0,l.createElement)("div",{className:"col-6"},(0,l.createElement)(b.Z,{key:`slider-${E}`,name:"slider",value:"boolean",checked:v.flexbox.slider,onChange:s,type:"switch-checkbox",className:"small"},(0,n.__)("IS Slider","pds-blocks"))))),(0,l.createElement)(r.PanelBody,{title:(0,n.__)("Grid Layout","pds-blocks"),initialOpen:!0},(0,l.createElement)(x.Z,{sm:e=>(0,l.createElement)(g.Z,{attributes:v,mainSetter:s}),md:e=>(0,l.createElement)(g.Z,{screen:e,attributes:v,mainSetter:s,options:"grid-props, align"}),lg:e=>(0,l.createElement)(g.Z,{screen:e,attributes:v,mainSetter:s,options:"grid-props, align"}),xl:e=>(0,l.createElement)(g.Z,{screen:e,attributes:v,mainSetter:s,options:"grid-props, align"})})),v.flexbox.slider?(0,l.createElement)(r.PanelBody,{title:(0,n.__)("Slider Options","pds-blocks"),initialOpen:!0},(0,l.createElement)(SliderSet,{attributes:v,mainSetter:(e,a)=>t.setObject(e,a,"slider",!1,v,k),flexSetter:s})):null),v.preview?(0,l.createElement)("img",{src:i,alt:"",className:"fluid"}):(0,l.createElement)("div",{..._,key:`${E}`},(0,l.createElement)(o(),{block:"phenix/taxonomies",attributes:v})))}},8907:(e,t,a)=>{e.exports=a.p+"images/preview.8e71ce92.png"},9196:e=>{e.exports=window.React},6989:e=>{e.exports=window.wp.apiFetch},2175:e=>{e.exports=window.wp.blockEditor},4981:e=>{e.exports=window.wp.blocks},5609:e=>{e.exports=window.wp.components},9307:e=>{e.exports=window.wp.element},5736:e=>{e.exports=window.wp.i18n},8423:e=>{e.exports=window.wp.serverSideRender},1299:e=>{e.exports=JSON.parse('{"u2":"phenix/taxonomies","TN":"Taxonomies","W3":"design","Y4":{"metadata":{"type":"object","default":{}},"query":{"type":"object","default":{}},"template_part":{"type":"string","default":"_placeholder"},"isFlexbox":{"type":"boolean","default":false},"flexbox":{"type":"object","default":{}},"typography":{"type":"object","default":{}},"style":{"type":"object","default":{}},"responsive":{"type":"object","default":{}},"slider":{"type":"object","default":{}},"preview":{"type":"boolean","default":false}}}')}},n={};function s(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return l[e](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var l=a.length-1;l>-1&&!e;)e=a[l--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e+"../../"})(),e=s(9196),t=s(3472),a=s(1299),(0,s(4981).registerBlockType)(a.u2,{title:a.TN,category:a.W3,attributes:a.Y4,icon:(0,e.createElement)("svg",{fill:"none",viewBox:"0 0 30 30"},(0,e.createElement)("path",{fill:"#000",fillRule:"evenodd",d:"M7.04 20.093c.44.254.92.374 1.4.374.52 0 1.04-.147 1.52-.44l1.227-.8c.733-.44 1.293-1.467 1.293-2.387v-3.867c0-.453.253-1.066.56-1.32L16.947 8.2c.586-.587 1.186-1.733 1.186-2.773V3.453a2.8 2.8 0 00-2.8-2.8H3.467c-1.574 0-2.8 1.28-2.8 2.894v2.066c0 .814.453 1.88 1.08 2.494l3.36 3.533c.28.333.506.92.506 1.267v4.76c0 1.013.534 1.92 1.427 2.426zM2.667 3.56c0-.507.346-.893.8-.893v-.014h11.866c.44 0 .8.36.8.8v1.974c0 .426-.32 1.08-.56 1.32l-3.84 3.4c-.733.626-1.253 1.786-1.253 2.84v3.866c0 .227-.187.6-.347.694l-1.24.8c-.293.186-.64.12-.853 0a.735.735 0 01-.413-.68v-4.76c0-.92-.494-1.947-1-2.574L3.187 6.72c-.294-.293-.52-.867-.52-1.093V3.56z",clipRule:"evenodd"}),(0,e.createElement)("path",{fill:"#000",d:"M11 29.333h8c7.24 0 10.333-3.093 10.333-10.333v-8c0-4.613-1.266-7.48-3.96-9.013-.68-.387-1.866-.707-3.613-.987a1.003 1.003 0 00-1.147.827.99.99 0 00.827 1.146c2.027.32 2.733.64 2.947.76 2.04 1.16 2.946 3.4 2.946 7.267v8c0 6.147-2.186 8.333-8.333 8.333h-8c-6.147 0-8.333-2.186-8.333-8.333v-4c0-.547-.454-1-1-1-.547 0-1 .453-1 1v4C.667 26.24 3.76 29.333 11 29.333z"}),(0,e.createElement)("path",{fill:"#000",d:"M23 17.333h-6.667c-.546 0-1-.453-1-1 0-.546.454-1 1-1H23c.547 0 1 .454 1 1 0 .547-.453 1-1 1zM13.667 22.667H23c.547 0 1-.454 1-1 0-.547-.453-1-1-1h-9.333c-.547 0-1 .453-1 1 0 .546.453 1 1 1z"})),edit:t.Z,save:()=>null})})();
//# sourceMappingURL=index.js.map