/**======> Reference By Comment <======
 * ===> 01 - Phenix and Splide
 * ===> 02 - Phenix Slider
 * ===> 03 - Create Markup
 * ===> 02 - 
 * ===> 02 - 
*/


/*====> Phenix Query <====*/
import Phenix, { PhenixElements } from "..";
/*====> Splide JS for The Slider Core <====*/
declare var Splide: any;

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
}) {
    //====> Sliders Activator <====//
    let slider_handler = () => this.forEach((slider:HTMLElement) => {
        //===> Vertical Height Calculator <===//
        const verticalFix = (slides, direction, slider) => {
            if (direction == 'ttb') {
                //====> Get First Item Height <====//
                let first_height = Phenix(slider.children[0]).height();
                //====> Return Height <====//
                return first_height*parseInt(slides);
            }
        };

        //====> Integration <====//
        const slider_integration = () => {
            //====> Multimedia Integration <====//
            const media_elements = slider.querySelectorAll('[data-src]');
            if (media_elements.length > 0) Phenix(media_elements).multimedia();

            //====> Lazyloading Integration <====//
            slider.querySelectorAll('.px-media.px-loading, .px-media.px-loader, .px-is-loading').forEach(media => {
                //====> Multimedia Loader <====//
                if (media.getAttribute('data-src')) {
                    Phenix(media).multimedia();
                } else {
                    media.setAttribute('src', media.getAttribute('data-lazyload'));
                }
                //====> Disable Loading Spinner <====//
                media.classList.remove('px-loader');
                media.classList.remove('px-loading');
                media.classList.remove('px-is-loading');
            });

            //====> Popup Modals <====//
            const modalTriggers = slider.querySelectorAll(".px-lightbox, [data-modal]");
            if (modalTriggers.length > 0) Phenix('.px-modal').popup();
            
            //====> Audio Buttons <====//
            const audioTriggers = slider.querySelectorAll("button[data-audio]");
            if (audioTriggers.length > 0) Phenix(document).audioTrigger(audioTriggers);

            //===> WooCommerce Add to Cart <===//
            const add_to_cart_btns = slider.querySelectorAll(".pds-add-to-cart");
            if (add_to_cart_btns.length > 0) Phenix(".pds-add-to-cart").on("click", isClicked => {
                    //===> Prevent link navigation <===//
                    isClicked.preventDefault();

                    //===> Define Item Data <===//
                    const button = isClicked.target;
                    const productId = button.getAttribute('data-variation') || button.getAttribute('data-product');
                    //===> Get Quantity <===//
                    const quantity = Phenix(button).ancestor('.single-product-content')?.querySelector('.quantity-input')?.value || parseInt(button.getAttribute('data-quantity')) || 1;

                    //===> Activate Loading Mode <===//
                    button.classList.add('px-loading-inline');
            
                    //===> Add the Item to the Cart <===//
                    // Phenix(document).pds_add_to_cart(button, quantity, productId);
            }, true);

            //===> Wishlist Toggle <===//
            const wishlist_btns = slider.querySelectorAll(".pds-wishlist-btn");
            if (wishlist_btns.length > 0) Phenix(".pds-wishlist-btn").on("click", (isClicked) => {
                //===> Prevent Default <===//
                isClicked.preventDefault();
                //===> Define Data <===//
                let action_url = isClicked.target.getAttribute('href'),
                    add_url = isClicked.target.setAttribute("href", isClicked.target.getAttribute("data-rm-url")),
                    remove_url = isClicked.target.setAttribute("href", isClicked.target.getAttribute("data-add-url"));

                //====> Add Loading Mode <====//
                isClicked.target.classList.add("px-loading-inline");

                Phenix(document).pds_toggle_wishlist(isClicked, action_url, add_url, remove_url);
            }, true);
        };

        //====> Slider Creator <=====//
        const slider_creator = (slider:any) => {
            /*====> Get Inline Options <====*/
            let inline = attr => slider.getAttribute(attr),
                currentClasses = slider.classList;

            //====> Already Exist <====//
            if (currentClasses.contains('splide') || currentClasses.contains('splide__list')) return;

            //====> Create Markup <====//
            const slider_track   = document.createElement("div"),
                  slider_list    = document.createElement("div"),
                  current_slides = slider.children;

            //====> Move Slides <====//
            Array.from(current_slides).forEach((slide:any) => {
                slide.classList.add('splide__slide');
                slider_list.appendChild(slide);
            });

            //====> Set Class Names <====//
            currentClasses.add('splide');
            slider_track.setAttribute("class", "splide__track");
            slider_list.setAttribute("class", "splide__list");

            //====> Fix Grid System Classes <====//
            Array.from(currentClasses).forEach((cl:any) => {
                if (cl.includes('gp') || cl.includes('row')) {
                    slider_list.classList.add(cl);
                    slider.classList.remove(cl);
                }
            });

            //====> Append Elements <====//
            slider.appendChild(slider_track);
            slider_track.appendChild(slider_list);


            //====> Run Phenix Utils <====//
            slider_integration();

            //====> Default Options <====//
            let type = inline('data-type') || options?.type || "loop",
                focus = inline('data-focus') || options?.focus,
                items = parseInt(inline('data-items')) || options?.items || 1,
                steps = parseInt(inline('data-steps')) || options?.steps || 1,
                speed = parseInt(inline('data-speed')) || options?.speed || 700,
                duration = parseInt(inline('data-duration')) || options?.duration || 6000,
                autoplay:any = inline('data-autoplay') || options?.autoplay || currentClasses.contains("data-autoplay-off") ? false : true,
                start  = parseInt(inline('data-start')) || options?.start,
                rewind = inline('data-rewind') || options?.rewind,
                direction = inline('data-direction') || options?.direction || Phenix(document).direction(),
                breakpoints = options?.breakpoints || {},

                //===> User Actions <====//
                pauseOnHover = inline('data-pause-hover') || options?.pauseOnHover,
                intersection = inline('data-intersection') || options?.intersection,

                //===> Controls <===//
                wheel = inline('data-wheel') || options?.wheel || false,
                controls = inline('data-controls') || options?.controls,
                pagination = inline('data-pagination') || options?.pagination,
                drag = inline('data-drag') || options?.drag || (!controls || !pagination ? false : true),

                //===> Features & Modes <===//
                sync = inline('data-sync') || options?.sync,
                padding = inline('data-padding') || options?.padding,
                isNavigation = parseInt(inline('data-is-navigation')) || options?.isNavigation,

                //===> Animations <===//
                updateAfter = inline('data-update-after') || options?.updateAfter,
                waitForTransition = inline('data-waitForTransition') || options?.waitForTransition,
                wheelSleep = parseInt(inline('data-wheelSleep')) || options?.wheelSleep,
                releaseWheel = inline('data-releaseWheel') || options?.releaseWheel,

                //===> Style <===//
                width = inline('data-width') || options?.width,
                height = inline('data-height') || options?.height,
                autoWidth = inline('data-autoWidth') || options?.autoWidth,
                autoHeight = inline('data-autoHeight') || options?.autoHeight,
                fixedWidth = inline('data-fixedWidth') || options?.fixedWidth,
                fixedHeight = inline('data-fixedHeight') || options?.fixedHeight,
                heightRatio = inline('data-heightRatio') || options?.heightRatio;

            //====> Rewind Sliding and Fading <=====//
            if (!rewind && type === "fade" || type === "slide") rewind = true;
            //====> Center Mode <====//
            if (!focus) focus = inline('data-center') || options?.autoplay || currentClasses.contains("data-center-on") ? "center" : 0;

            //====> Inline Responsive <====//
            inline('data-sm') ? breakpoints[570] = {
                //===> Small Screens <===//
                perPage: inline('data-sm') || items,
                height: height || verticalFix(inline('data-sm') || items, direction, slider_list),
            } : '';
            //===> Medium Screens <===//
            inline('data-md') ? breakpoints[768] = {
                perPage: inline('data-md') || items,
                height: height || verticalFix(inline('data-md') || items, direction, slider_list),
            } : ''; 
            //===> Large Screens <===//
            inline('data-lg') ? breakpoints[1170] = {
                // drag: drag && drag === 'true' || drag && drag === '1' ? true : false,
                perPage: inline('data-lg') || items,
                height: height || verticalFix(inline('data-lg') || items, direction, slider_list),
            } : '';
            //===> xLarge Screens <===//
            inline('data-xl') ? breakpoints[1400] = {
                perPage: inline('data-xl') || items,
                height: height || verticalFix(inline('data-xl') || items, direction, slider_list),
            } : '';

            //====> Custom Classes <====//
            let controls_class = 'flexbox position-ab pos-center-y align-between align-center-y pos-start-0 col-12',
                pagination_class = 'position-ab pos-center-x pos-bottom-15',
                arrow_class = inline('data-arrow') || options?.arrow || 'btn primary small square',
                page_class  = inline('data-page') || options?.page || 'pd-5 bg-primary no-border tiny square radius-circle mx-5';

            if (typeof(controls) === "string") {
                controls !== "1" ? controls_class = controls : null;
            }

            if (typeof(pagination) === "string") {
                pagination !== "1" ? pagination_class = pagination : null;
            }

            //====> Slider to Splide <====//
            let slider_options:any = {
                type : type,
                focus: focus,
                speed: speed,
                interval: duration,
                perPage: items,
                perMove: steps,
                autoplay: typeof autoplay === "string" ? parseInt(autoplay) : autoplay,
                pauseOnHover: false,
                mediaQuery: 'min',
                direction: direction,
                breakpoints: breakpoints,
                rewind: rewind,
                padding: padding,
                paginationDirection: Phenix(document).direction(),

                //====> Animation Fix <====//
                updateOnMove: updateAfter && updateAfter === 'false' || updateAfter && updateAfter === '0' ? false : true,
                waitForTransition: waitForTransition && waitForTransition === 'false' || waitForTransition && waitForTransition === '0' ? false : true,
                
                //====> Static Options <====//
                snap: true,
                rewindSpeed: 1000,
                rewindByDrag: true,
                
                //====> .Sniping Sliding. <====//
                wheel: wheel, //===> Enable Wheel Sliding
                wheelSleep: wheelSleep, //===> Time to Disable the Scroll before next slide
                releaseWheel: releaseWheel, //===> Allow Scrolling at the End or the Start.

                //====> ... <====//
                width: width,
                autoWidth: autoWidth,
                autoHeight: autoHeight,
                fixedWidth: fixedWidth,
                fixedHeight: fixedHeight,
                heightRatio: heightRatio,

                //====> Accessibility <====//
                role: 'slider',
                label: 'Slider',
                labelledby: 'slider-label',

                //====> Classes <====//
                classes: {
                    // Add classes for arrows.
                    arrows: `splide__arrows px-slider-controls ${controls_class}`,
                    arrow : `splide__arrow px-slider-button ${arrow_class}`,
                    prev  : `splide__arrow--prev px-prev`,
                    next  : `splide__arrow--next px-next`,
                    // Add classes for pagination.
                    pagination: `splide__pagination px-slider-pagination ${pagination_class}`, // container
                    page      : `splide__pagination__page px-slider-page ${page_class}`, // each button
                },
            };
            
            //====> Add Options <====//
            if (start) slider_options.start = start;
            if (!controls) slider_options.arrows = false;
            if (!pagination) slider_options.pagination = false;
            if (sync) slider_options.sync = true;
            if (direction == 'ttb') slider_options.height = verticalFix(items, direction, slider_list);
            if (direction == 'ttb') slider_options.autoHeight = true;
            if (pauseOnHover) slider_options.pauseOnHover = pauseOnHover;
            if (intersection) intersection !== 'false' || '0' ? intersection = true : null;
            if (rewind) rewind !== 'false' || '0' ? slider_options.rewind = true : slider_options.rewind = false;
            if (isNavigation) slider_options.isNavigation = true;

            //====> Return Options <====//
            return {
                track  : slider_track,
                list   : slider_list,
                slides : slider_list.children,
                sync : sync,
                intersection : intersection,
                options: slider_options
            }
        }

        //====> Splide Prepare <====//
        let current_slider = slider_creator(slider);
        if (!current_slider) return;
        let the_slider = new Splide(slider, current_slider.options);

        //====> Integration Phenix <====//
        the_slider.on(['mounted'], () => {
            //====> Mounted Run Integration <====//
            slider_integration();
        });

        the_slider.on(['visible'], () => {
            //====> Visible Run Integration <====//
            slider_integration();
        });

        //====> Stop Played Media <====//
        the_slider.on(['inactive'], (data) => {
            //====> Get Video and iFrame <====//
            let video = data.slide.querySelector('video'),
                iframe = data.slide.querySelector('iframe');

            //====> Played Video <====//
            if (video) video.playing ? video.pause() : null;

            //====> Played iFrame <====//
            if (iframe) {
                let source = iframe.getAttribute('src');
                iframe.setAttribute('src', source);
            };
        });

        //====> Run Sync Sliders <====//
        let mount_slider = () => {
            if (!current_slider.track?.classList.contains('mounted')) {
                //===> If is Synced Slider <===//
                if (current_slider.sync) {
                    //====> Synced Create <====//
                    let sync_selector = document.querySelector(`${current_slider.sync}`),
                        synced_slider = slider_creator(sync_selector);
                        sync_selector.classList.add('px-slider');

                    //====> Synced Splide <====//
                    let synced_splide = new Splide(sync_selector, synced_slider.options);

                    //====> Run Both <====//
                    the_slider.sync(synced_splide);
                    the_slider.mount();
                    synced_splide.mount();

                    //====> Clickable Thumbnail <====//
                    Array.from(synced_slider.slides).forEach((slide_item, index) => {
                        slide_item.addEventListener( 'click', () => the_slider.go(index));
                    });
                } else {
                    //====> Run the Slider <====//
                    the_slider.mount();
                }
    
                //===> Add Mounted Class <===//
                current_slider.track?.classList.add('mounted');
            }
        };

        //====> Intersection Sliders <====//
        if (current_slider.intersection) {
            Phenix(slider).inView({
                callback: mount_slider
            });
        } else {
            mount_slider();
        }
    });

    //====> Load Splide JS <====//
    if (!document.querySelector('#splidejs-phenix') && this.length > 0) {
        //===> Create Script Element <===//
        let splide_loader = document.createElement("script"),
            libPath = Phenix(document).getURL().phenixJS.replace('js/', 'lib/'),
            splide_url = libPath+'splide.min.js';

        //===> Set ID <===//
        splide_loader.setAttribute('id', 'splidejs-phenix');
        //===> Set Source <===//
        splide_loader.setAttribute("src", splide_url);
        splide_loader.setAttribute("async", "");

        //===> Append Script <===//
        document.body.appendChild(splide_loader);
    
        //====> When Loaded Run Sliders <====//
        splide_loader.addEventListener("load", () => {
            //===> Run Slider <====//
            slider_handler();
        });
    
        //====> When Error Re-Load <====//
        splide_loader.addEventListener("error", (ev) => {
            splide_loader.setAttribute("src", splide_url);
        });

    //====> if Al-ready loaded run the sliders <====//
    } else slider_handler();

    //====> Return Phenix Elements <====//
    return this;
}