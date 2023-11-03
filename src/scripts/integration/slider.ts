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
    sync?:string
    pauseOnHover?:boolean;
    intersection?:boolean;
    rewind?:boolean;
}) {
    //====> Sliders Activator <====//
    let slider_handler = () => this.forEach((slider:HTMLElement) => {
        //====> Slider Creator <=====//
        let slider_creator = (slider:any) => {
            /*====> Get Inline Options <====*/
            let inline = attr => slider.getAttribute(attr),
            currentClasses = slider.classList;

            //====> Already Exist <====//
            if (currentClasses.contains('splide') || currentClasses.contains('splide__list')) return;

            //====> Default Options <====//
            let type = inline('data-type') || options?.type || "loop",
                focus = inline('data-focus') || options?.focus || 0,
                items = parseInt(inline('data-items')) || options?.items || 1,
                steps = parseInt(inline('data-steps')) || options?.steps || 1,
                speed = parseInt(inline('data-speed')) || options?.speed || 700,
                duration = parseInt(inline('data-duration')) || options?.duration || 6000,
                autoplay = inline('data-autoplay') || options?.autoplay,
                pauseOnHover = inline('data-pause-hover') || options?.pauseOnHover,
                intersection = inline('data-intersection') || options?.intersection,
                controls = inline('data-controls') || options?.controls,
                pagination = inline('data-pagination') || options?.pagination,
                start = parseInt(inline('data-start')) || options?.start,
                isNavigation = parseInt(inline('data-is-navigation')) || options?.isNavigation,
                sync = inline('data-sync') || options?.sync,
                rewind = inline('data-rewind') || options?.rewind,
                breakpoints = options?.breakpoints || {},
                direction = inline('data-direction') || options?.direction || Phenix(document).direction();

            //====> Vertical Mode Fix <====//
            let verticalFix = (slides) => {
                if (direction == 'ttb') {
                    let first_item = slider.children[0],
                        margin = parseInt(getComputedStyle(first_item).getPropertyValue('margin-bottom')),
                        first_height = first_item.clientHeight;
                    //====> Height Margin Fallback <====//
                    if(margin === 0) margin = parseInt(getComputedStyle(first_item).getPropertyValue('margin-top'));
                    if (margin > 0) first_height = (first_height + margin - 1);

                    return first_height*slides;
                }
            },

            heightCalc = verticalFix(items);

            //====> Create Markup <====//
            let slider_track   = document.createElement("div"),
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

            Array.from(currentClasses).forEach((cl:any) => {
                if (cl.includes('gp') || cl.includes('row')) {
                    slider_list.classList.add(cl);
                    slider.classList.remove(cl);
                }
            });

            //====> Append Elements <====//
            slider.appendChild(slider_track);
            slider_track.appendChild(slider_list);

            //====> Inline Responsive <====//
            inline('data-sm') ? breakpoints[570] = { 
                //===> Small Screens <===//
                perPage: inline('data-sm') || items,
                height: verticalFix(inline('data-sm') || items),
            } : '';
            //===> Medium Screens <===//
            inline('data-md') ? breakpoints[760] = {
                perPage: inline('data-md') || items,
                height: verticalFix(inline('data-md') || items),
            } : ''; 
            //===> Large Screens <===//
            inline('data-lg') ? breakpoints[1170] = {
                perPage: inline('data-lg') || items,
                height: verticalFix(inline('data-md') || items),
            } : '';
            //===> xLarge Screens <===//
            inline('data-xl') ? breakpoints[1400] = {
                perPage: inline('data-xl') || items,
                height: verticalFix(inline('data-md') || items),
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
                autoplay: parseInt(autoplay),
                pauseOnHover: false,
                mediaQuery: 'min',
                direction: direction,
                breakpoints: breakpoints,
                rewind: rewind,
                paginationDirection: Phenix(document).direction(),
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
            if (isNavigation) slider_options.isNavigation = true;
            if (sync) slider_options.sync = true;
            if (direction == 'ttb') slider_options.height = heightCalc;
            if (direction == 'ttb') slider_options.autoHeight = true;
            if (pauseOnHover) slider_options.pauseOnHover = pauseOnHover;
            if(!autoplay) slider_options.autoplay = true;
            if (intersection) intersection !== 'false' || '0' ? intersection = true : null;
            if (rewind) rewind !== 'false' || '0' ? slider_options.rewind = true : slider_options.rewind = false;

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
        let current_slider = slider_creator(slider),
            the_slider = new Splide(slider, current_slider.options);

        //====> Integration <====//
        let slider_integration = () => {
            //====> Multimedia Integration <====//
            let media_elements = slider.querySelectorAll('[data-src]');
            Phenix(media_elements).multimedia();
    
            //====> Lazyloading Integration <====//
            slider.querySelectorAll('.px-loading, .px-loader').forEach(media => {
                if (Phenix(media).inView()) {
                    //====> Multimedia Loader <====//
                    if (media.getAttribute('data-src')) {
                        Phenix(media).multimedia();
                    } else {
                        media.setAttribute('src', media.getAttribute('data-lazyload'));
                    }
                }
            });

            //====> Popup Modals <====//
            let modalTriggers = slider.querySelectorAll(".px-lightbox, [data-modal]");
            if (modalTriggers.length > 0) Phenix('.px-modal').popup();
        };

        //====> Events Data <====//
        let events_data = {
            slider : slider,
            track  : slider.querySelector('splide__track'),
            list   : slider.querySelector('splide__list'),
        };

        //====> Create Custom Events [https://splidejs.com/guides/events/] <====//
        const move = new CustomEvent('move', {detail: events_data}),       //===> Fired right before the carousel moves.
            moved = new CustomEvent('moved', {detail: events_data}),       //===> Fired right after the carousel moves.
            active = new CustomEvent('active', {detail: events_data}),     //===> Fired when the active slide is changed.
            resize = new CustomEvent('resize', {detail: events_data}),     //===> Fired whenever the window is resized.
            hidden = new CustomEvent('hidden', {detail: events_data}),     //===> Fired when any slide gets visible in the view port.
            resized = new CustomEvent('resized', {detail: events_data}),   //===> Fired whenever Splide completes resizing the carousel.
            refresh = new CustomEvent('refresh', {detail: events_data}),   //===> Fired when Splide refreshes the carousel.
            destroy = new CustomEvent('destroy', {detail: events_data}),   //===> Fired when Splide destroys the carousel.
            visible = new CustomEvent('visible', {detail: events_data}),   //===> Fired when any slide gets visible in the view port.
            mounted = new CustomEvent('mounted', {detail: events_data}),   //===> Fired right after all components are mounted.
            inactive = new CustomEvent('inactive', {detail: events_data}), //===> Fired when the active slide becomes inactive.
            arrows_mounted = new CustomEvent('arrows:mounted', {detail: events_data}), //===> Fired right after arrows are mounted.
            arrows_updated = new CustomEvent('arrows:updated', {detail: events_data}), //===> Fired whenever status of arrows are updated.
            pagination_mounted = new CustomEvent('pagination:mounted', {detail: events_data}),  //===> Fired right after pagination is mounted.
            pagination_updated = new CustomEvent('pagination:updated', {detail: events_data});  //===> Fired whenever status of pagination is updated.

        //====> Integration Phenix <====//
        the_slider.on(['mounted'], function(data) {
            //====> Mounted Run Integration <====//
            slider_integration();
        });

        //====> Stop Played Media <====//
        the_slider.on(['inactive'], function(data) {
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

        //====> Dispatch Events <====//
        the_slider.on('move', () => slider.dispatchEvent(move));
        the_slider.on('moved', () => slider.dispatchEvent(moved));
        the_slider.on('resize', () => slider.dispatchEvent(resize));
        the_slider.on('active', () => slider.dispatchEvent(active));
        the_slider.on('refresh', () => slider.dispatchEvent(refresh));
        the_slider.on('resized', () => slider.dispatchEvent(resized));
        the_slider.on('destroy', () => slider.dispatchEvent(destroy));
        the_slider.on('mounted', () => slider.dispatchEvent(mounted));
        the_slider.on('inactive', () => slider.dispatchEvent(inactive));
        the_slider.on('arrows:mounted', () => slider.dispatchEvent(arrows_mounted));
        the_slider.on('arrows:updated', () => slider.dispatchEvent(arrows_updated));
        the_slider.on('pagination:mounted', () => slider.dispatchEvent(pagination_mounted));
        the_slider.on('pagination:updated', () => slider.dispatchEvent(pagination_updated));

        //====> Run Sync Sliders <====//
        let mount_slider = () => {
            if (!current_slider.track?.classList.contains('mounted')) {
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
                } else {
                    //====> Run the Slider <====//
                    the_slider.mount();
                }
    
                current_slider.track?.classList.add('mounted');
            }
        };

        //====> Intersection Sliders <====//
        if (current_slider.intersection) {
            //===> First View <===//
            if (Phenix(slider).inView()) mount_slider();
            //===> Hidden View <===//
            window.addEventListener('scroll', scrolling => {
                Phenix(slider).inView() ? mount_slider() : null
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
        splide_loader.addEventListener("load", slider_handler);
    
        //====> When Error Re-Load <====//
        splide_loader.addEventListener("error", (ev) => {
            splide_loader.setAttribute("src", splide_url);
        });
    //====> if Al-ready loaded run the sliders <====//
    } else slider_handler;

    //====> Return Phenix Elements <====//
    return this;
}