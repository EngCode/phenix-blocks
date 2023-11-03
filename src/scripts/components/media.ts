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

        //===> De-Activate Lazy-Loading <===//
        if (options?.lazyloading) element.classList.remove('lazyloader');

        //===> Set As CSS Background <===//
        element.style.backgroundImage = `url("${source}")`;
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
            splide = Phenix(element).ancestor('.splide__slide--clone'),
            embed  = element.getAttribute('data-embed') || options?.embed || 'video',
            gradient = element.getAttribute('data-gradient') || options?.gradient?.value || false,
            gradient_mode = element.getAttribute('data-mode') || options?.gradient?.mode || 'linear',
            gradient_repeat = element.getAttribute('data-repeat') || options?.gradient?.repeat,
            //====> Embed & Lazyloading <====//
            lazyloading = element.getAttribute('data-lazyloading') || options?.lazyloading || false,
            player_controls = element.getAttribute('data-controls') || options?.controls || false,
            player_autoplay = element.getAttribute('data-autoplay') || options?.autoplay || false,
            player_loop = element.getAttribute('data-loop') || options?.loop || false,
            player_muted = element.getAttribute('data-muted') || options?.muted || false,
            //====> .... <====//
            lazy = lazyloading && lazyloading !== 'false' ? true : false,
            controls = player_controls && player_controls !== 'false' ? true : false,
            autoplay = player_autoplay && player_autoplay !== 'false' ? true : false,
            loop = player_loop && player_loop !== 'false' ? true : false,
            muted = player_muted && player_muted !== 'false' ? true : false;
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
                    element.classList.remove('px-loading');
                    if (element.style.backgroundImage) element.style.removeProperty('background-image');
                }
    
                //====> Background Type <====//
                if (type == 'background') {
                    //===> Set Background <===//
                    background(element, src);
                    //===> Matk as Done <===//
                    mediaDone = true;
                }
    
                //====> Image Type <====//
                else if (type == 'image') {
                    //===> Set Background <===//
                    background(element, src);
                    //===> Create Image <===//
                    if(!element.querySelector('img')) Phenix(element).insert('prepend',`<img src="${src}" alt="${alt}" class="px-media-img" ${lazy ? 'loading="lazy"' : ''} />`);
                    //===> Matk as Done <===//
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
                    //===> Matk as Done <===//
                    mediaDone = true;
                }

                //====> Mixed Type <====//
                else if (type == 'mixed-bg') {
                    //===> Set Background <===//
                    background(element, src);
                    //===> Grap Current Background <===//
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
                    //===> Matk as Done <===//
                    mediaDone = true;
                }

                //====> iFrame Type <====//
                else if (type == 'iframe') {
                    //===> Get the Current iFrame <===//
                    let iframe = element.querySelector('iframe');
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
                    let media_attributes = `${lazy ? 'loading="lazy"' : ''} ${autoplay ? 'autoplay="true"' : ''} ${controls ? 'controls' : ''} ${loop ? 'loop' : ''} ${muted ? 'muted' : ''}`;
                    //===> Video Source <===//
                    if (embed == 'video' && !element.querySelector('.px-video')) {
                        Phenix(element).insert('append', `<video class="px-video" src="${src}" ${media_attributes}></video>`);
                    }
                    //===> Video Source <===//
                    else if (embed != 'video' && !element.querySelector('.px-iframe')) {
                        //====> Get the Source <====//
                        let source = src;
                        //====> Cleanup URL <====//
                        if (source.includes('youtube.com')) source = src.replace('watch?v=', 'embed/');
                        else if (source.includes('vimeo.com')) source = src.replace('vimeo.com', 'player.vimeo.com/video');
                        //====> Create the View <====//
                        Phenix(element).insert('append', `<iframe class="px-iframe" src="${source}"  ${lazy ? 'loading="lazy"' : ''} frameborder="0" allowfullscreen></iframe>`);
                    } 
                    //===> Mark as Done <===//
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
                    element.classList.add('px-loading');
                    element.style.backgroundImage = `url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwJSAwJTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bzsiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGNkY2RjIiBzdHJva2Utd2lkdGg9IjMiIHI9IjE4IiBzdHJva2UtZGFzaGFycmF5PSI4NC44MjMwMDE2NDY5MjQ0MSAzMC4yNzQzMzM4ODIzMDgxMzgiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+)`;
                }

                //====> First View Handler <=====//
                if (Phenix(element).inView()) mediaHandle();

                //====> On-Scroll Handler <====//
                window.addEventListener('scroll', event => Phenix(element).inView() ? mediaHandle() : null);
            }

            //====> None-Lazy <====//
            else mediaHandle();
        }

        //====> None-Valid Source <====//
        else element.style.backgroundImage = 'https://via.placeholder.com/1280x650?text=Source+URL+Not+Supported+or+404';
    });
}