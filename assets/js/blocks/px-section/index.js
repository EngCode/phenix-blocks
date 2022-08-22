(()=>{"use strict";var e,t,n,a,r={435:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(307),r=n(609);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function s(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(p,e);var t,n,a,o,f=(a=p,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(a);if(o){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function p(){return c(this,p),f.apply(this,arguments)}return t=p,(n=[{key:"render",value:function(){var e=this.props,t=(e.flow,e.value),n=e.onChange,a=function(e){return e||(e=""),React.createElement(React.Fragment,null,React.createElement("label",{className:"mb-10 fluid weight-medium"},"Horizontal Align"),React.createElement("div",{className:"px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20"},React.createElement("button",{onClick:o,title:"Start",className:"btn small ".concat(t.includes("align".concat(e,"-start-x"))?"bg-offwhite-smoke":"light"," col pxi pxi-align-x-start"),"data-screen":e,"data-value":"align".concat(e,"-start-x")}),React.createElement("button",{onClick:o,title:"Center",className:"btn small ".concat(t.includes("align".concat(e,"-center-x"))?"bg-offwhite-smoke":"light"," col pxi pxi-align-x-center"),"data-screen":e,"data-value":"align".concat(e,"-center-x")}),React.createElement("button",{onClick:o,title:"End",className:"btn small ".concat(t.includes("align".concat(e,"-end-x"))?"bg-offwhite-smoke":"light"," col pxi pxi-align-x-end"),"data-screen":e,"data-value":"align".concat(e,"-end-x")}),React.createElement("button",{onClick:o,title:"Between",className:"btn small ".concat(t.includes("align".concat(e,"-between"))?"bg-offwhite-smoke":"light"," col pxi pxi-align-x-between"),"data-screen":e,"data-value":"align".concat(e,"-between")}),React.createElement("button",{onClick:o,title:"Around",className:"btn small ".concat(t.includes("align".concat(e,"-around"))?"bg-offwhite-smoke":"light"," col pxi pxi-align-x-around"),"data-screen":e,"data-value":"align".concat(e,"-around")})),React.createElement("label",{className:"mb-10 fluid weight-medium"},"Vertical Align"),React.createElement("div",{className:"px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20"},React.createElement("button",{onClick:o,title:"Start",className:"btn small ".concat(t.includes("align".concat(e,"-start-y"))?"bg-offwhite-smoke":"light"," col pxi pxi-align-y-start"),"data-screen":e,"data-value":"align".concat(e,"-start-y")}),React.createElement("button",{onClick:o,title:"Center",className:"btn small ".concat(t.includes("align".concat(e,"-center-y"))?"bg-offwhite-smoke":"light"," col pxi pxi-align-y-center"),"data-screen":e,"data-value":"align".concat(e,"-center-y")}),React.createElement("button",{onClick:o,title:"End",className:"btn small ".concat(t.includes("align".concat(e,"-end-y"))?"bg-offwhite-smoke":"light"," col pxi pxi-align-y-end"),"data-screen":e,"data-value":"align".concat(e,"-end-y")})))},o=function(e){var a=e.target,r=a.getAttribute("data-value"),o=[],c=a.getAttribute("data-screen")||"";return a.parentNode.querySelectorAll(".btn").forEach((function(e){o.push(e.getAttribute("data-value"))})),t.includes(c)?t.split(" ").forEach((function(e){o.includes(e)?t.replace(e,""):e.length>1&&(r="".concat(e," ").concat(r))})):r="".concat(t," ").concat(r),n("".concat(r))},c=function(){return!!t.includes("flow-reverse")},l=function(e){var t,n=Phenix(e.target),a=n.ancestor(".options-tabs"),r=Phenix(a).next(".options-list"),o=Phenix(a.querySelector(".primary")),c="".concat(n[0].getAttribute("data-options"),"-options"),l=r.querySelector(".".concat(c));o.addClass("light").removeClass("primary"),n.addClass("primary").removeClass("light"),null===(t=r.querySelector(".flexbox:not(.hidden)"))||void 0===t||t.classList.add("hidden"),Phenix(l).removeClass("hidden")};return React.createElement("div",{className:"px-gb-component"},React.createElement(r.ToggleControl,{label:"Flow Reverse ?",checked:c(),onChange:function(e){var a=t;return a=c()?a.replaceAll("flow-reverse"):"".concat(t," flow-reverse"),n(a)}}),React.createElement("span",{className:"display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"}),React.createElement("div",{className:"options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20"},React.createElement("button",{onClick:l,className:"btn square tiny primary col far fa-mobile",title:"Mobile Screens","data-options":"small"}),React.createElement("button",{onClick:l,className:"btn square tiny light col far fa-tablet",title:"Tablet Screens","data-options":"medium"}),React.createElement("button",{onClick:l,className:"btn square tiny light col far fa-laptop",title:"Desktop Screens","data-options":"large"}),React.createElement("button",{onClick:l,className:"btn square tiny light col far fa-desktop",title:"xLarge Screens","data-options":"xlarge"})),React.createElement("div",{className:"options-list"},React.createElement("div",{className:"flexbox small-options"},a()),React.createElement("div",{className:"flexbox medium-options hidden"},a("-md")),React.createElement("div",{className:"flexbox large-options hidden"},a("-lg")),React.createElement("div",{className:"flexbox xlarge-options hidden"},a("-xl"))))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(a.Component)},910:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(175);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function i(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(p,e);var t,n,r,u,f=(r=p,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(r);if(u){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function p(){return o(this,p),f.apply(this,arguments)}return t=p,(n=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.value,r=e.size,o=e.setValue;return React.createElement(React.Fragment,null,React.createElement(a.MediaUpload,{onSelect:o,value:n,render:function(e){var a=e.open;return React.createElement("div",{class:"mb-15 cursor-pointer",onClick:a},t?React.createElement("label",{className:"mb-10"},t):"",React.createElement("div",{className:"flexbox align-center-y align-between"},"small"===r?React.createElement(React.Fragment,null,React.createElement("img",{src:n,style:{"max-height":"2.25rem"}}),React.createElement("button",{onClick:a,class:"btn square primary small radius-sm fs-12 fas fa-upload"})):React.createElement(React.Fragment,null,React.createElement("img",{src:n,className:"radius-sm radius-top",style:{"max-width":"100%",display:"block"}}),React.createElement("button",{onClick:a,class:"btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon"},"Select Image"))))}}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(n(307).Component)},789:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(307),r=n(910);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function s(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(d,e);var t,n,a,o,b=(a=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(a);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function d(){var e;c(this,d);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return p(u(e=b.call.apply(b,[this].concat(n))),"state",{main:["bg-transparent","bg-primary","bg-secondary","bg-secondary-dark","bg-gray","bg-dark","bg-white","bg-success","bg-danger","bg-warning","bg-info","bg-alpha-05","bg-alpha-10","bg-alpha-25","bg-alpha-50","bg-alpha-75"],offwhite:["bg-offwhite-primary","bg-offwhite-secondary","bg-offwhite-info","bg-offwhite-success","bg-ffwhite-danger","bg-offwhite-warning","bg-offwhite-smoke","bg-offwhite-smoke","bg-offwhite-gray","bg-offwhite-snow","bg-offwhite-snow","bg-offwhite-honeydew","bg-offwhite-mintcream","bg-offwhite-aliceblue","bg-offwhite-ghost","bg-offwhite-seashell","bg-offwhite-beige","bg-offwhite-oldlace","bg-offwhite-floral","bg-offwhite-ivory","bg-offwhite-antique","bg-offwhite-linen","bg-offwhite-lavenderblush"],brands:["bg-facebook","bg-twitter","bg-youtube","bg-instagram","bg-snapchat","bg-whatsapp","bg-pinterest","bg-linkedin","bg-behance","bg-dribbble","bg-flicker"],gradients:["bg-grade-primary","bg-grade-secondary","bg-grade-warning","bg-grade-danger","bg-grade-success","bg-grade-water","bg-grade-ice","bg-grade-fire","bg-grade-purple"],rotation:["bg-grade-0","bg-grade-45","bg-grade-90","bg-grade-120","bg-grade-120n","bg-grade-90n","bg-grade-45n","bg-grade-180"],placeholder:"https://via.placeholder.com/480x200.webp?text=Example"}),e}return t=d,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.type,a=t.value,o=t.onChange,c={},l=function(e){return n===e?"primary":"light"},i=function(e){return n===e?"":"hidden"},s=function(t){if(t.target){var n=t.target,r=n.getAttribute("data-type"),l=n.getAttribute("data-value");if("rotate"===r){var i=c.value,s=a.replaceAll("   ","");e.state.rotation.forEach((function(e){e!==l&&(s=s.replaceAll(e,"").replaceAll(" n",""),i&&(c.value=i.replaceAll(e,"").replaceAll(" n","")))})),c.type="gradient",c.value=s,c.rotation=l}else c.type=r,c.value=l,c.rotation=null}else c.type="image",c.value=t.url;return o(c)},u=function(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r],c=e[r].replace("bg-","");c=(c=(c=c.replace("-"," ")).replace("grade","")).replace(/^\w/,(function(e){return e.toUpperCase()})),n.push(React.createElement("button",{onClick:s,title:c,"data-value":o,"data-type":t,className:"".concat(o," btn square tiny radius-circle border-1 border-solid border-alpha-25 mb-10 me-10 ").concat(a.includes(o)?"px-active":"")}))}return n},f=function(e){var t,n=Phenix(e.target),a=n.ancestor(".options-tabs"),r=Phenix(a).next(".options-list"),o=Phenix(a.querySelector(".primary")),c="".concat(n[0].getAttribute("data-value"),"-options"),l=r.querySelector(".".concat(c));o.addClass("light").removeClass("primary"),n.addClass("primary").removeClass("light"),null===(t=r.querySelector(".flexbox:not(.hidden)"))||void 0===t||t.classList.add("hidden"),Phenix(l).removeClass("hidden")};return React.createElement("div",{className:"px-gb-component"},React.createElement("div",{className:"options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20"},React.createElement("button",{className:"btn tiny col ".concat(l("color")),onClick:f,"data-value":"color"},"Colors"),React.createElement("button",{className:"btn tiny col ".concat(l("gradient")),onClick:f,"data-value":"gradient"},"Gradients"),React.createElement("button",{className:"btn tiny col ".concat(l("image")),onClick:f,"data-value":"image"},"Image"),React.createElement("button",{className:"btn tiny bg-offwhite-smoke col far fa-ellipsis-v",style:{padding:"0 8px"}})),React.createElement("div",{className:"options-list"},React.createElement("div",{className:"flexbox color-options ".concat(i("color"))},u(this.state.main,"color"),React.createElement("span",{className:"display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"}),u(this.state.offwhite,"color"),React.createElement("span",{className:"display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"}),u(this.state.brands,"color")),React.createElement("div",{className:"flexbox gradient-options ".concat(i("gradient"))},u(this.state.gradients,"gradient"),React.createElement("span",{className:"display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"}),React.createElement("label",{className:"mb-10 col-12"},"Gradient Direction"),React.createElement("div",{className:"px-group icon-btns radius-sm border-1 border-solid border-alpha-10 borderd-group mb-10"},function(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r],c=o.replace("bg-grade-","");o.endsWith("n")&&(c="-".concat(c.slice(0,-1))),n.push(React.createElement("button",{"data-type":"rotate",onClick:s,"data-value":o,className:"btn square tiny light ".concat(a.includes(o)?"px-active":"")},React.createElement("i",{className:"inline-block fas fa-arrow-to-bottom",style:{transform:"rotate(".concat(c,"deg)")}})))}return n}(this.state.rotation))),React.createElement("div",{className:"flexbox image-options ".concat(i("image"))},React.createElement(r.Z,{value:"image"!==n?this.state.placeholder:a,setValue:s}))))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),d}(a.Component)},277:(e,t,n)=>{function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}n.d(t,{Z:()=>s});var s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var t,n,a,s,u=(a=f,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=i(a);if(s){var n=i(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function f(){return r(this,f),u.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange,a=function(e){var t=e.target.getAttribute("data-value");return n(t)},r=function(e){for(var n=[],r=0;r<e.length;r++){var o=e[r],c=e[r].replace("color-","");c=(c=c.replace("-"," ")).replace(/^\w/,(function(e){return e.toUpperCase()})),n.push(React.createElement("button",{onClick:a,title:c,"data-value":o,className:"".concat(o.replace("color-","bg-")," btn square tiny radius-circle border-1 border-solid border-alpha-25 mb-10 me-10 ").concat(t===o?"px-active":null)}))}return n};return React.createElement("div",{className:"px-gb-component"},React.createElement("label",{className:"mb-10"},"Select Color"),React.createElement("div",{className:"flexbox options-list"},r(["color-inherit","color-primary","color-secondary","color-gray","color-dark","color-white","color-success","color-danger","color-warning","color-info","color-transparent"]),React.createElement("span",{className:"border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t"}),r(["color-facebook","color-twitter","color-youtube","color-instagram","color-snapchat","color-whatsapp","color-pinterest","color-linkedin","color-behance","color-dribbble","color-flicker"])))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),f}(n(307).Component)},66:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(609),r=n(175),o=n(307),c=n(789),l=n(277),i=n(435);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e){var t=e.attributes,n=e.setAttributes,u=(0,r.useBlockProps)(),f=(0,r.useInnerBlocksProps)(),p=t.tagName,b=function(){var e,t=window.frames["editor-canvas"],n=".wp-block-design-px-section[data-src]";t&&(e=n=t.document.querySelectorAll(".px-media"),n=function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),Phenix(n).multimedia()),t||Phenix(n).multimedia()},d={size:t.size,flexbox:t.container_flex?" flexbox":"",alignment:t.flex_align};return"image"===t.px_bg_type&&(u["data-src"]=t.px_bg,b()),(0,o.useEffect)((function(){if(window.frames["editor-canvas"]){var e=document.querySelector("#fontawesome-css");if(e&&!window.frames["editor-canvas"].document.querySelector("#fontawesome-css")&&e){var t=document.importNode(e,!0);window.frames["editor-canvas"].document.head.appendChild(t)}}})),t.container&&(f.className+=" ".concat(d.size).concat(d.flexbox," ").concat(d.alignment)),React.createElement(React.Fragment,null,React.createElement(r.InspectorControls,{key:"inspector"},React.createElement(a.PanelBody,{title:"Section Settings"},React.createElement(a.SelectControl,{key:"tagName",label:"HTML Tag",value:t.tagName,onChange:function(e){return n({tagName:e})},options:[{label:"Default <div>",value:"div"},{label:"Main <main>",value:"main"},{label:"Aside <aside>",value:"aside"},{label:"Section <section>",value:"section"},{label:"Header <header>",value:"header"},{label:"Footer <footer>",value:"footer"}]}),React.createElement(a.ToggleControl,{label:"With Container",checked:t.container,onChange:function(e){return n({container:e})}})),t.container?React.createElement(a.PanelBody,{title:"Container",initialOpen:!1},React.createElement(a.SelectControl,{key:"container_size",label:"Container Size",value:t.size,onChange:function(e){return n({size:e})},options:[{label:"Small",value:"container-sm"},{label:"Medium",value:"container-md"},{label:"Normal",value:"container"},{label:"Large",value:"container-xl"},{label:"Full Width",value:"container-fluid"}]}),React.createElement(a.ToggleControl,{label:"Flex Container",checked:t.container_flex,onChange:function(e){return n({container_flex:e})}}),t.container_flex?React.createElement(i.Z,{value:t.flex_align,onChange:function(e){return n({flex_align:e})}}):""):null,React.createElement(a.PanelBody,{title:"Typography",initialOpen:!1},React.createElement(l.Z,{onChange:function(e){var a=t.px_color,r=t.className.replace(/\s{2,}/g," ");a&&(r=r.replace(a,"")),n({px_color:e,className:"".concat(r," ").concat(e)})},value:t.px_color})),React.createElement(a.PanelBody,{title:"Background",initialOpen:!1},React.createElement(c.Z,{onChange:function(e){var a=t.className.replaceAll(/\s{2,}/g," ").replace(" px-media",""),r=t.px_bg,o=t.px_bg_rotate;t.px_bg&&(a=a.replace(r,"")),o&&(a=a.replace(o,"")),n({px_bg:e.value,px_bg_type:e.type}),e.rotation&&(a=a.replace(o,""),n({px_bg_rotate:e.rotation})),"image"!=e.type?n({className:"".concat(a," ").concat(e.value).concat(e.rotation?" "+e.rotation:"")}):e.value&&(b(),n({className:"".concat(a," px-media")}))},type:t.px_bg_type,value:t.px_bg}))),React.createElement(p,u,React.createElement("div",f)))}},175:e=>{e.exports=window.wp.blockEditor},981:e=>{e.exports=window.wp.blocks},609:e=>{e.exports=window.wp.components},307:e=>{e.exports=window.wp.element},947:e=>{e.exports=JSON.parse('{"apiVersion":2,"name":"phenix/px-section","version":"0.1.0","title":"Phenix Section","category":"design","description":"Main Header Block for Phenix Themes.","supports":{"html":false},"attributes":{"tagName":{"type":"string","default":"div"},"container":{"type":"boolean","default":true},"container_flex":{"type":"boolean","default":false},"flex_align":{"type":"string","default":""},"size":{"type":"string","default":"container"},"px_bg_type":{"type":"string","default":"color"},"px_bg_rotate":{"type":"string","default":""},"px_bg":{"type":"string","default":""},"px_color":{"type":"string","default":""}},"textdomain":"phenix","editorScript":"file:./index.js"}')}},o={};function c(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,c),n.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=c(66),t=c(947),n=c(981),a=c(175),(0,n.registerBlockType)(t,{icon:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},React.createElement("path",{d:"M96 384h448V128H96V384zM32 96C14.34 96 0 110.3 0 128v256c0 17.66 14.34 32 32 32s32-14.34 32-32V128C64 110.3 49.66 96 32 96zM608 96c-17.66 0-32 14.34-32 32v256c0 17.66 14.34 32 32 32s32-14.34 32-32V128C640 110.3 625.7 96 608 96z"})),edit:e.Z,save:function(e){var t=e.attributes,n=a.useBlockProps.save(),r=t.tagName;return"image"===t.px_bg_type&&(n["data-src"]=t.px_bg),React.createElement(r,n,t.container?React.createElement("div",{className:"".concat(t.size).concat(t.container_flex?" flexbox":""," ").concat(t.flex_align)},React.createElement(a.InnerBlocks.Content,null)):React.createElement(a.InnerBlocks.Content,null))}})})();
//# sourceMappingURL=index.js.map