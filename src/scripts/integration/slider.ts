/**======> Reference By Comment <======
 * ===> 01 - Phenix and Splide
 * ===> 02 - Phenix Slider
 * ===> 03 - Create Markup
 * ===> 02 - 
 * ===> 02 - 
*/


/*====> Phenix Query <====*/
import Phenix, { PhenixElements } from "..";
/*====> Swiper JS for The Slider Core <====*/
declare var Swiper: any;

/*====> Phenix Slider <====*/
PhenixElements.prototype.slider = function (options?:{
    type?:string;
    focus?:any;
    items?:number;
    steps?:number;
    speed?:number;
    start?:number;
    duration?:number;
    autoplay?:boolean;
    controls?:any;
    pagination?:any;
    breakpoints?:any;
    direction?:string;
    splide_options?:any;
    arrow?:string;
    page?:string;
    isNavigation?:boolean;
    updateAfter?:boolean;
    waitForTransition?:boolean;
    sync?:string;
    padding?:string;
    pauseOnHover?:boolean;
    intersection?:boolean;
    rewind?:boolean;
    wheel?:boolean;
    wheelSleep?:number;
    releaseWheel?:boolean;
    drag?:boolean;
    width?:string;
    height?:string;
    autoWidth?:string;
    autoHeight?:string;
    fixedWidth?:string;
    fixedHeight?:string;
    heightRatio?:string;
    autoScroll?:string;
    center?:any;
    controller?:any;
}) {
    //====> Sliders Activator <====//
    let slider_handler = () => this.forEach((slider:HTMLElement) => {
        //====> Integration <====//
        const slider_integration = () => {
            //====> Multimedia Integration <====//
            const media_elements = slider.querySelectorAll('[data-src]');
            Phenix(media_elements).multimedia();
    
            //====> Lazyloading Integration <====//
            slider.querySelectorAll('.px-media.px-loading, .px-media.px-loader').forEach(media => {
                if (Phenix(media).inView()) {
                    //====> Multimedia Loader <====//
                    if (media.getAttribute('data-src')) {
                        Phenix(media).multimedia();
                    } else {
                        media.setAttribute('src', media.getAttribute('data-lazyload'));
                    }
                    //====> Disable Loading Spinner <====//
                    media.classList.remove('px-loader');
                    media.classList.remove('px-loading');
                }
            });

            //====> Popup Modals <====//
            const modalTriggers = slider.querySelectorAll(".px-lightbox, [data-modal]");
            if (modalTriggers.length > 0) Phenix('.px-modal').popup();
            
            //====> Audio Buttons <====//
            const audioTriggers = slider.querySelectorAll("button[data-audio]");
            if (audioTriggers.length > 0) Phenix(document).audioTrigger(audioTriggers);
        };

        //====> Slider Creator <=====//
        const slider_creator = (slider:any) => {
            /*====> Get Inline Options <====*/
            let currentClasses = slider.classList,
                inline = attr => slider.getAttribute(attr) === "true" ? true : slider.getAttribute(attr) === "false" ? false : slider.getAttribute(attr);

            //====> Already Exist <====//
            if (currentClasses.contains('swiper') || currentClasses.contains('swiper-wrapper')) return;

            //====> Get Options <====//
            const controls = inline('data-controls') || options?.controls;
            const pagination = inline('data-pagination') || options?.pagination;
            const thumbnails = inline('data-sync') || options?.sync;
            const controller = inline('data-controller') || options?.controller;
            const autoPlayDisabled = inline('data-autoplay') === 'false' || options?.autoplay === false || currentClasses.contains("data-autoplay-off");

            //====> Default Options <====//
            let slider_options:any = {
                //===> Main Options <===//
                a11y: true,
                createElements: true,
                loop: inline('data-loop') || true,
                breakpoints: options?.breakpoints || {},
                loopAdditionalSlides: (parseInt(inline('data-items')) || options?.items || 1) * 2,
                slidesPerView: parseInt(inline('data-items')) || options?.items || 1,
                direction: inline('data-direction') || options?.direction || "horizontal",
                centeredSlides: inline('data-center') || currentClasses.contains("data-center-on") ? true : false,

                //===> User Actions <====//
                rewind: inline('data-rewind') || options?.rewind || false,
                pauseOnMouseEnter: inline('data-pause-hover') || options?.pauseOnHover || false,

                //===> Controls <===//
                navigation: controls ? {nextEl: `.swiper-button-next`,prevEl: `.swiper-button-prev`} : false,
                pagination: pagination ? {type: 'bullets', el: '.swiper-pagination'} : false,

                //===> Animations <===//
                effect: inline('data-type') || options?.type || "slide",
                speed: parseInt(inline('data-speed')) || options?.speed || 700,

                //===> Autoplay <===//
                autoplay: autoPlayDisabled ? false : {
                    delay: parseInt(inline('data-duration')) || options?.duration || 6000,
                    waitForTransition: inline('data-waitForTransition') || options?.waitForTransition || true,
                },

                //===> Style <===//
                width: inline('data-width') || options?.width || null,
                height: inline('data-height') || options?.height || null,
                autoHeight: inline('data-autoHeight') || options?.autoHeight || false,

                //===> Syncing Controller and THumbnails <===//
                thumbs: thumbnails ? {swiper: thumbnails} : false,
                controller: controller ? {by: 'slide', control: controller} : false,

                //===> Events <===//
                on: {
                    //===> Slider Init <===//
                    init: (event) => {
                        //====> Get Slider Wrapper <====//
                        const slider_wrapper = event.wrapperEl;
                        //====> Active Slide <====//
                        slider_wrapper.querySelector(".swiper-slide-active")?.classList.add("is-active");
                        //====> Run Integration <====//
                        slider_integration();
                    },
                    //===> Slider Loop Fix <===//
                    loopFix: (event) => {
                        //====> Run Integration <====//
                        slider_integration();
                    },
                    //===> Slider Slide Change <===//
                    slideChange: (event) => {
                        //====> Get Slider Wrapper <====//
                        const slider_wrapper = event.wrapperEl;
                        //====> Remove Active Slide <====//
                        slider_wrapper.querySelector(".is-active")?.classList.remove("is-active");
                        //====> Active Slide <====//
                        slider_wrapper.querySelector(".swiper-slide-active")?.classList.add("is-active");
                    },
                },
            }

            //====> Mobile Responsive <====//
            inline('data-sm') ? slider_options.breakpoints[570] = { 
                //===> Slides Per View and Loop Fixer <===//
                slidesPerView: parseInt(inline('data-sm')) || slider_options.slidesPerView,
                loopAdditionalSlides: (parseInt(inline('data-sm')) || slider_options.slidesPerView) * 2,
            } : '';

            //===> Medium Screens <===//
            inline('data-md') ? slider_options.breakpoints[1100] = {
                slidesPerView: parseInt(inline('data-md')) || slider_options.slidesPerView,
                loopAdditionalSlides: (parseInt(inline('data-md')) || slider_options.slidesPerView) * 2,
            } : '';

            //===> Large Screens <===//
            inline('data-lg') ? slider_options.breakpoints[1170] = {
                slidesPerView: parseInt(inline('data-lg')) || slider_options.slidesPerView,
                loopAdditionalSlides: (parseInt(inline('data-lg')) || slider_options.slidesPerView) * 2,
            } : '';

            //===> xLarge Screens <===//
            inline('data-xl') ? slider_options.breakpoints[1400] = {
                slidesPerView: parseInt(inline('data-xl')) || slider_options.slidesPerView,
                loopAdditionalSlides: (parseInt(inline('data-xl')) || slider_options.slidesPerView) * 2,
            } : '';

            //====> Create Markup <====//
            let swiper_wrapper = document.createElement("div"),
                current_slides = slider.children;

            //====> Move Slides <====//
            Array.from(current_slides).forEach((slide:any) => {
                slide.classList.add('swiper-slide');
                swiper_wrapper.appendChild(slide);
            });

            //====> Set Class Names <====//
            currentClasses.add('swiper');
            swiper_wrapper.setAttribute("class", "swiper-wrapper");

            //====> Append Elements <====//
            slider.appendChild(swiper_wrapper);

            //===> Create Navigation <===//
            if (controls) {
                let navigation_wrapper = document.createElement("div"),
                    nextButton = document.createElement("button"),
                    prevButton = document.createElement("button");
    
                //===> Set Attributes <===//
                navigation_wrapper.setAttribute("class", `px-slider-controls z-index-dropdown ${typeof(controls) === "string" && controls !== "1" ? controls : 'fluid flexbox position-ab pos-center-y align-between align-center-y pos-start-0'}`);
                nextButton.setAttribute("class", `swiper-button-next px-slider-button reset-button fas fa-angle-${Phenix(document).direction("end")} ${inline('data-arrow') || options?.arrow || 'btn primary small square'}`);
                prevButton.setAttribute("class", `swiper-button-prev px-slider-button reset-button  fas fa-angle-${Phenix(document).direction("start")} ${inline('data-arrow') || options?.arrow || 'btn primary small square'}`);
    
                //===> Append Elements <===//
                navigation_wrapper.appendChild(prevButton);
                navigation_wrapper.appendChild(nextButton);
                slider.appendChild(navigation_wrapper);
            }

            //===> Create Pagination <===//
            if (pagination) {
                let pagination_wrapper = document.createElement("div");
                pagination_wrapper.setAttribute("class", `swiper-pagination px-slider-pagination z-index-dropdown ${typeof(pagination) === "string" && pagination !== "1" ? pagination : 'position-ab pos-center-x pos-bottom-15'}`);
                // let page_class  = inline('data-page') || options?.page || 'pd-5 bg-primary no-border tiny square radius-circle mx-5';
    
                //===> Append Pagination <===//
                slider.appendChild(pagination_wrapper);
            }

            //====> Return Options <====//
            console.log(slider_options);
            return slider_options
        }

        //====> Run Slider <====//
        const the_slider = new Swiper(slider, slider_creator(slider));

        //====> Stop Played Media <====//
        // the_slider.on(['inactive'], function(data) {
        //     let video = data.slide.querySelector('video'),
        //         iframe = data.slide.querySelector('iframe');

        //     //====> Played Video <====//
        //     if (video) video.playing ? video.pause() : null;

        //     //====> Played iFrame <====//
        //     if (iframe) {
        //         let source = iframe.getAttribute('src');
        //         iframe.setAttribute('src', source);
        //     };
        // });
    });

    //====> Load Splide JS <====//
    if (!document.querySelector('#slider-phenix-script') && this.length > 0) {
        //===> Load CSS <===//
        Phenix(document).import("slider", "link", "swiper.css", () => {}, true);

        //===> Create Script Element <===//
        Phenix(document).import("slider", "script", "swiper-slider.js", () => {
            slider_handler();
        }, true);
    //====> if Al-ready loaded run the sliders <====//
    } else {
        slider_handler();
    }

    //====> Return Phenix Elements <====//
    return this;
}