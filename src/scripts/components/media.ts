/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Media Setter
 * ===> 03 - Methods
 * ========> - Background Method
 * ===> 04 - Phenix Elements
 * ===> 05 - Get Options Data
 * ===> 06 - Set Media Size
 * ===> 07 - Clean Source [URL]
 * ===> 08 - Media Handler
 * ========> - Background Type
 * ===> 09 - Lazy-Loading Mode
 * ===> 10 - None-Valid Source
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

// ===> Add Type Declaration for Globals <===
declare global {
    interface Window {
        // For three-utils.js script
        threeUtils?: {
            initializeViewer: (container: HTMLElement, options: object, assetsBasePath: string) => Promise<void>;
        };
        // For data localized from PHP using your existing key
        PDS_WP_KEY?: {       // <-- Use your existing key name
            assetsBasePath: string; // <-- Add the property we need
            // Add other existing properties declared for PDS_WP_KEY if known
            [key: string]: any; // Allows other existing properties
        };
    }
}
// ===> End Type Declaration <===

/*====> Media Setter [un-tested] <====*/
PhenixElements.prototype.multimedia = function (options?:{
    type?:string,   //===> background, image, video, embed, iframe, gradient, mixed-bg, audio
    src?:string,    //===> Media Source [URL]
    size?:string,   //===> Aspect Ratio Size [1x1, 4x3, 16x9, 16x10, 21x9, *%]
    player?:string, //===> Players [phenix, html or standard]
    lazyloading?:boolean, //===> Lazyloading [true, false]
    //===> Gradient Settings <===//
    gradient?:{
        value?:[],       //===> CSS Gradient Value [rotation, color1, color2, etc...]
        mode?:string,    //===> Gradient Mode [linear, radial, conic]
        repeat?:boolean, //===> Gradient Repeat [true, false]
    },
    //===> Players and Embed <===//
    embed?:string,      //====> Embed Source [video, audio, youtube, vemio]
    controls?:boolean,  //====> Embed Controls Enable
    autoplay?:boolean,  //====> Embed Autoplay Enable
    loop?:boolean,  //====> Embed infinite loop Enable
    muted?:boolean,  //====> Embed Audio Mute Enable
    //===> Extra <===//
    alt?:string,   //===> Alternative Text for SEO
    cover?:string, //===> Cover Image for [videos]
}) {
    //====> Background Method <====//
    let background = (element, source) => {
        //===> Clean Source [URL] <===//
        source = encodeURI(source);
        //===> Clean # for CSS Benefits <===//
        source = source.replaceAll('#','%23');

        //===> Set As CSS Background <===//
        element.style.backgroundImage = `url("${source}")`;
        
        //===> Remove Loading State <===//
        element.classList.remove('px-is-loading');
    };

    //====> Loop Through Phenix Elements <====//
    this.forEach(element => {
        //====> Media Checker <====//
        let mediaDone = false;
        if (mediaDone) return;
        if (element.length != undefined) return;

        //====> Get Options Data <====//
        let type = element.getAttribute('data-type') || options?.type || 'background',
            src  = element.getAttribute('data-src') || options?.src,
            alt  = element.getAttribute('data-alt') || options?.alt || '',
            ratio  = element.getAttribute('data-size') || options?.size,
            splide = Phenix(element).ancestor('.splide.is-initialized'),
            embed  = element.getAttribute('data-embed') || options?.embed || 'video',
            cover  = element.getAttribute('data-cover') || options?.cover,
            gradient = element.getAttribute('data-gradient') || options?.gradient?.value || false,
            gradient_mode = element.getAttribute('data-mode') || options?.gradient?.mode || 'linear',
            gradient_repeat = element.getAttribute('data-repeat') || options?.gradient?.repeat,
            //====> Embed & Lazyloading <====//
            lazy = Phenix(document).toBoolean(element.getAttribute('data-lazyloading') || options?.lazyloading),
            controls = Phenix(document).toBoolean(element.getAttribute('data-controls') || options?.controls),
            autoplay = Phenix(document).toBoolean(element.getAttribute('data-autoplay') || options?.autoplay) && (element.getAttribute('data-autoplay') || options?.autoplay) !== 'hover',
            loop = Phenix(document).toBoolean(element.getAttribute('data-loop') || options?.loop),
            muted = Phenix(document).toBoolean(element.getAttribute('data-muted') || options?.muted),
            player_autoplay = element.getAttribute('data-autoplay') || options?.autoplay || 'hover';

        //====> Set Media Size <====//
        if (ratio && ratio != null || undefined) {
            //====> Predefined Ratio's <====//
            if (!element.classList.toString().includes('ratio')) element.classList.add(`ratio-${ratio}`);

            //====> Otherwise <====//
            else {
                //====> Convert To Number <====//
                let ratio_convert = parseInt(ratio);
                //====> Set Height w/ Padding Bottom <====//
                ratio_convert > 0 ? element.style.setProperty('--ratio-size', `${ratio_convert}%`) : null;
            }
        }

        //====> if has Valid Source <====//
        if (src || gradient)  {
            //====> Media Handler <====//
            let mediaHandle = () => {
                //====> Gradient Validation <====//
                let multiple = false;
                if (gradient) {
                    //=== Replace white Space ===//
                    gradient = gradient.replace(' ','');
                    //=== for Hex Colors ===//
                    if (gradient.includes('#')) multiple = gradient.includes(',') ? true : false;
                    //=== for RGB Colors ===//
                    else if (gradient.includes('rgb')) multiple = gradient.includes('),') ? true : false;
                    //=== for CSS Variables ===//
                    else if (gradient.includes('var')) multiple = gradient.includes('),') ? true : false;
                }

                //====> De-Activate Loader <====//
                if (lazy) {
                    element.classList.remove('px-is-loading');
                    if (element.style.backgroundImage) element.style.removeProperty('background-image');
                }
    
                //====> Background Type <====//
                if (type == 'background') {
                    //===> Set Background <===//
                    background(element, src);
                    //===> Mark as Done <===//
                    mediaDone = true;
                }
    
                //====> Image Type <====//
                else if (type == 'image') {
                    //===> Set Background <===//
                    // background(element, src);
                    //===> Create Image <===//
                    if(!element.querySelector(':scope > img')) Phenix(element).insert('prepend',`<img src="${src}" alt="${alt}" class="px-media-img" loading="lazy" />`);
                    else element.querySelector(':scope > img').setAttribute('loading', 'lazy');
                    //===> Mark as Done <===//
                    mediaDone = true;
                }
                
                //====> Gradient Type <====//
                else if (type == 'gradient') {
                    //===> Check for Repeat <====//
                    gradient_repeat ? gradient_repeat = 'repeating-' : gradient_repeat = '';
                    //===> Set the Gradient <===//
                    if(multiple) {
                        element.style.backgroundImage = `${gradient_repeat}${gradient_mode}-gradient(${gradient})`;
                    //===> Set As Color if it Single Value <===//
                    } else element.style.backgroundColor = `${gradient}`;
                    //===> Mark as Done <===//
                    mediaDone = true;
                }

                //====> Mixed Type <====//
                else if (type == 'mixed-bg') {
                    //===> Set Background <===//
                    background(element, src);
                    //===> Get Current Background <===//
                    let currentBg = element.style.backgroundImage,
                        orderBG   = element.getAttribute('data-bg-order');

                    //===> Check for Repeat <====//
                    gradient_repeat ? gradient_repeat = 'repeating-' : gradient_repeat = '';
                    //===> Set the Gradient <===//
                    if(multiple) {
                        if (orderBG === 'reverse') {
                            element.style.backgroundImage = `${currentBg}, ${gradient_repeat}${gradient_mode}-gradient(${gradient})`;
                        } else {
                            element.style.backgroundImage = `${gradient_repeat}${gradient_mode}-gradient(${gradient}), ${currentBg}`;
                        }
                    //===> Set As Color if it Single Value <===//
                    } else {
                        if (orderBG === 'reverse') {
                            element.style.backgroundImage = `${currentBg}, linear-gradient(${gradient},${gradient})`;
                        } else {
                            element.style.backgroundImage = `linear-gradient(${gradient},${gradient}), ${currentBg}`;
                        }
                    }
                    //===> Mark as Done <===//
                    mediaDone = true;
                }

                //====> iFrame Type <====//
                else if (type == 'iframe') {
                    //===> Get the Current iFrame <===//
                    let iframe = element.querySelector(':scope > iframe');
                    //===> Create View <===//
                    if (!iframe) {
                        Phenix(element).insert('append', `<iframe src="${src}" frameborder="0" ${lazy ? 'loading="lazy"' : ''} allowfullscreen sandbox="allow-scripts allow-same-origin"></iframe>`);
                    }
                    //===> Mark as Done <===//
                    mediaDone = true;
                }

                //====> Embed Type <====//
                else if (type == 'embed') {
                    //===> Embed Options <===//
                    let media_attributes = `${lazy ? 'loading="lazy"' : ''} ${autoplay ? 'autoplay="true" playsinline="true"' : ''} ${controls ? 'controls' : ''} ${loop ? 'loop' : ''} ${muted ? 'muted' : ''} ${cover ? `poster="${cover}"` : ''}`;
                    //===> Video Source <===//
                    if (embed == 'video' && !element.querySelector(':scope > .px-video')) {
                        //====> Create the Video <====//
                        Phenix(element).insert('append', `<video class="px-video" src="${src}" ${media_attributes}></video>`);
                        //====> Video Autoplay <====//
                        if (player_autoplay === 'hover') {
                            const video = element.querySelector('.px-video');
                            Phenix(element).on('mouseenter', event => video.play());
                            Phenix(element).on('mouseleave', event => video.pause());
                        }
                    }
                    //===> Video Source <===//
                    else if (embed != 'video' && !element.querySelector(':scope > .px-iframe')) {
                        //====> Get the Source <====//
                        let source = src;
                        //====> Cleanup URL <====//
                        if (source.includes('youtube.com')) source = src.replace('watch?v=', 'embed/');
                        else if (source.includes('youtu.be')) source = src.replace('https://youtu.be/', 'https://www.youtube.com/embed/');
                        else if (source.includes('vimeo.com')) source = src.replace('vimeo.com', 'player.vimeo.com/video');
                        //====> Create the View <====//
                        Phenix(element).insert('append', `<iframe class="px-iframe" src="${source}"  ${lazy ? 'loading="lazy"' : ''} frameborder="0" allowfullscreen></iframe>`);
                    } 
                    //===> Mark as Done <===//
                    mediaDone = true;
                }

                //====> 3D Object Type <====//
                else if (type == '3d-viewer') {
                    //====> Define the Canvas <====//
                    let canvas = element.querySelector(':scope > canvas.px-3d') as HTMLElement;

                    //====> Create the Canvas if it doesn't exist <====//
                    if (!canvas) {
                         //====> Default Model Type <====//
                         let modelTypeForCanvas = 'gltf';
                         //====> Get the Model Type from the the Extension <====//
                         const extension = src.split('.').pop()?.toLowerCase();
                         //====> If the Extension is Valid <====//
                         if (extension && ['gltf', 'glb', 'obj', 'fbx'].includes(extension)) modelTypeForCanvas = extension;
                         //====> If the Extension is Null/Undefined <====//
                         else if (extension) modelTypeForCanvas = extension || 'gltf';
                         //====> Create the Canvas <====//
                         const canvasHTML = `<canvas class="px-3d fluid" data-object="${src}" data-model-type="${modelTypeForCanvas}" data-background="${element.getAttribute('data-background') || 'null'}" data-auto-rotate="${element.getAttribute('data-auto-rotate') || 'false'}" data-controls="${element.getAttribute('data-controls') || 'orbit'}"></canvas>`;
                         //====> Append the Canvas <====//
                         Phenix(element).insert('append', canvasHTML);
                         //====> Redefine the Canvas <====//
                         canvas = element.querySelector(':scope > canvas.px-3d') as HTMLElement;
                    }

                    //====> Check if already initialized ====//
                    if (canvas && canvas.dataset.threeInitialized !== 'true') {
                        //====> Get Asset Base Path from Localized Data (using PDS_WP_KEY) ====//
                        const assetsBasePath = window.PDS_WP_KEY?.assetsBasePath;

                        //====> Gather Options from Canvas ====//
                        const viewerOptions = {
                            modelPath: canvas.dataset.object,
                            modelType: canvas.dataset.modelType || 'gltf',
                            background: canvas.dataset.background === 'null' ? "transparent" : canvas.dataset.background,
                            autoRotate: canvas.dataset.autoRotate === 'true',
                            controls: canvas.dataset.controls || 'orbit'
                        };

                        //====> Load three-utils.js & Initialize ====//
                        if (window.threeUtils?.initializeViewer) {
                            //====> Initialize the Viewer ====//
                            window.threeUtils.initializeViewer(canvas, viewerOptions, assetsBasePath).catch(err => console.error("Error during Three.js initialization:", err, canvas));
                            //====> Set the Initialized Attribute ====//
                            canvas.dataset.threeInitialized = 'true';
                        } else {
                            //====> Import the Script ====//
                            Phenix(document).import("three-utils", "script", "three/three-utils.js", () => {
                                //====> Initialize the Viewer ====//
                                if (window.threeUtils?.initializeViewer) {
                                    //====> Initialize the Viewer ====//    
                                    window.threeUtils.initializeViewer(canvas, viewerOptions, assetsBasePath).catch(err => console.error("Error during Three.js initialization:", err, canvas));
                                    //====> Set the Initialized Attribute ====//
                                    canvas.dataset.threeInitialized = 'true';
                                }
                                //====> Remove Loading Class from Canvas Wrapper ====//
                                element.classList.remove('px-loading');
                            }, { integrated: true, module: false });
                        }
                    }
                    
                    //===> Mark as Done for media handler loop ===//
                    mediaDone = true;
                }

                //====> Something Else <====//
                else {
                    //===> Set Background <===//
                    background(element, src);
                    //===> Mark as Done <===//
                    mediaDone = true;
                }
            };

            //====> Lazy-Loading Mode <====//
            if (lazy) {
                //====> Activate Lazy-Loading <====//
                if (!splide) {
                    element.classList.add('px-is-loading');
                    // Set temporary loading background
                    element.style.backgroundImage = 'none';
                }

                //====> First View Handler <=====//
                Phenix(element).inView({
                    offset: 100,
                    callback: (element) => mediaHandle()
                });
            }

            //====> None-Lazy <====//
            else mediaHandle();
        }

        //====> None-Valid Source <====//
        else element.style.backgroundImage = 'https://placehold.co/1280x650?text=Source+URL+Not+Supported+or+404';
    });
}