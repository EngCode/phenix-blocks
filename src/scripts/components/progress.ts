/**======> Referance By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Progress Plugin
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Progress <====*/
PhenixElements.prototype.progress = function (options?:{
    type?:string,    //===> Timer Type [bar, circle, radial]
    color?:any,      //===> the Progress Color
    value?:number,   //===> the prorgress value
    label?:string,   //===> the progress label
    size?:number,    //===> the size of the progress with px
    lazyloading?:boolean,  //====> Animate when its visible
}) {
    //====> Loop Through Phenix Elements <====//
    this.forEach((progress:any) => {
        //====> Get Progress Data <====//
        let type = progress.getAttribute('data-type') || options?.type || 'bar',
            color = progress.getAttribute('data-color') || options?.color || 'var(--primary-color)',
            value = parseInt(progress.getAttribute('data-value')) || options?.value || 0,
            label = progress.getAttribute('data-label') || options?.label || "",
            lazy  = progress.getAttribute('data-lazy')  || options?.lazyloading,
            circleSize = 700;

        //====> Set Progress <====//
        let setProgress = (bar) => {
            //====> Progress Handler <====//
            let progress_handler = () => {
                //====> Get Current Value <====//
                let value = parseFloat(progress.getAttribute('data-value')) || options?.value || 0,
                    color = progress.getAttribute('data-color') || options?.color || 'var(--primary-color)';

                //====> Set Bar Data <====//
                if (type === 'bar') {
                    bar.style.width = `${value}%`;
                    bar.style.backgroundColor = color;
                    bar.setAttribute('data-value', value);
                    bar.setAttribute('data-label', label);
                }
                //====> Set Circle Data <====//
                if (type === 'circle') {
                    //====> Define Elements <====//
                    let circle_path = bar.querySelector('.circle-progress');
                    let circle_text = bar.querySelector('.circle-text');

                    //====> Check if is Counting <====//
                    if (circle_text.classList.contains('is-counting')) return;
                    
                    //====> Create Temp Value <====//
                    let current_value = 0;
                    circle_path.setAttribute('stroke-dashoffset', `${circleSize*((value/100)-1)}px`);

                    //====> Animate the Counting <====//
                    let CountUpTimer = setInterval(() => {
                        //====> Set Progress <====//
                        if (current_value < value) {
                            current_value += 1;
                            circle_text.classList.add('is-counting');
                            circle_text.textContent = `${current_value}%`;
                        }
                        //===> if Already Done <===//
                        if (current_value === value || circle_text.classList.contains('done-counting')) {
                            //====> Clear When Done <====//
                            circle_text.classList.add('done-counting');
                            clearInterval(CountUpTimer);
                        }
                    }, 50);
                }
                //====> Set Circle Data <====//
                if (type === 'radial') {
                    //===> get Progress Data <===//
                    let radial_meter = bar.querySelector('.progress'),
                        meter_calc = radial_meter.getTotalLength() * ((100 - value) / 100),
                        radial_path = bar.querySelector('.progress');
                    //===> Set Progress <===//
                    radial_path.setAttribute('stroke-dashoffset', Math.max(0, meter_calc));
                    radial_path.setAttribute('stroke', color);
                }
            }

            //====> Set Progress <====//
            if (lazy) {
                //===> First View <===//
                if (Phenix(progress).inView()) progress_handler();
                //===> Hidden View <===//
                window.addEventListener('scroll', scrolling => {
                    Phenix(progress).inView() ? progress_handler() : null
                });
            } else {
                progress_handler();
            };
        };

        //====> Wrapper Properties <====//
        progress.classList.add('position-rv', 'tx-align-center', 'lineheight-1');
        progress.setAttribute('data-type', type);

        //====> Bar Mode <====//
        if (type === 'bar') {
            //====> get the bar <====//
            let progressBar = progress.querySelector('.px-progress-bar'),
                size = progress.getAttribute('data-size')  || options?.size || 16;

            //====> Create the bar if not existed <====// 
            if (!progressBar) {
                //====> Add Progress Bar <====//
                Phenix(progress).insert('append', `<span class="px-progress-bar display-block transition-fast overflow-hidden position-rv" data-value="${value}" ${label ? `data-label="${label}"`: null} style="width:0;height:100%"></span>`);
                progressBar = progress.querySelector('.px-progress-bar'); 
            }

            //====> Setup the Progress <====//
            if (!progress.classList.contains('px-progress-bar-js')) {
                //====> Base Background <====//
                progress.classList.add('bg-alpha-10', 'overflow-hidden', 'px-progress-bar-js');
                progress.style.height = `${size}px`;
                progress.style.lineHeight = `calc(${size}px)`;
                progress.style.setProperty('--width', `${progress.clientWidth}px`);
                //====> Set Progress <====//
                setProgress(progressBar);

            } else {
                setProgress(progressBar);
            }
        }

        //====> Circle Mode <====//
        if (type === 'circle') {
            //====> Circle Shape <====//
            let size = progress.getAttribute('data-size') || options?.size || 15,
                svg  = progress.querySelector('.px-progress-circle');
            
            //====> Create SVG if not Existed <====//
            if (!svg) {
                let circle_shape = `<svg class="px-progress-circle" viewBox="-15 -15 225 225" version="1.1" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg)">
                    <circle r="100" class="circle-base" cx="100" cy="100" fill="transparent" stroke-width="${size}" stroke="var(--gray-light)" stroke-dasharray="${circleSize}px" stroke-dashoffset="0"></circle>
                    <circle r="100" class="circle-progress" cx="100" cy="100" style="transition: stroke-dashoffset ${value*50}ms linear 0.2s" stroke-width="${size}" stroke="${color}" stroke-linecap="round" stroke-dashoffset="${circleSize}px" fill="transparent" stroke-dasharray="${circleSize}px"></circle>
                    <text x="72%" class="circle-text" y="52%" fill="${color}" font-size="52px" font-weight="bold" style="transform:rotate(90deg) translate(0px, -196px)">0%</text>
                </svg>`;

                Phenix(progress).insert('append', circle_shape);
                svg = progress.querySelector('.px-progress-circle');
                setProgress(svg);
            }
            //====> if Exist Update it <====//
            else {
                setProgress(svg);
            }
        }

        //====> Circle Mode <====//
        if (type === 'radial') {
            //====> Circle Shape <====//
            let size = progress.getAttribute('data-size') || options?.size || 10,
            svg  = progress.querySelector('.px-progress-radial');
            
            //====> Create SVG if not Existed <====//
            if (!svg) {
                let circle_shape = `<svg width="100%" viewBox="0 0 200 180" class="px-progress-radial">
                    <path class="progress-bg" stroke="rgba(0,0,0, 0.05)" stroke-width="${size}" d="M41 149.5a77 77 0 1 1 117.93 0"  fill="none" stroke-miterlimit="round"/>
                    <path class="progress" stroke="${color}" stroke-width="${size}" d="M41 149.5a77 77 0 1 1 117.93 0" fill="none" stroke-miterlimit="round" stroke-dasharray="350" stroke-dashoffset="350"/>
                </svg>`;
                
                Phenix(progress).insert('append', circle_shape);
                svg = progress.querySelector('.px-progress-radial');

                setProgress(svg);
            }
            //====> if Exist Update it <====//
            else {
                setProgress(svg);
            }
        }
    });

    //====> Return Phenix Elements <====//
    return this;
}
