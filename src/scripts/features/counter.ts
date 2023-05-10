/**======> Referance By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Animated Counter
 * ===> 03 - Get Options Data
 * ===> 04 - Counter Data
 * ===> 05 - Count Runer
 * ===> 06 - Start Counting
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Animated Counter <====*/
PhenixElements.prototype.counter = function (options?:{
        value?:number,    //===> Number to Count
        duration?:number, //===> Animation Duration
        delay?:number,    //===> Animation Delay
        decimal?:number,  //===> Decimal Numbers Support
        symbol?:string,   //===> Symbol After the Number
        steps?:number,    //===> Count per Step
        reverse?:boolean, //===> Count Down instead of Up
        lazyloading?:boolean, //===> Lazyload Animation
    }) {
    //====> Loop Through Phenix Elements <====//
    this.forEach((element:any) => {
        //====> Get Options Data <====//
        let duration = parseInt(element.getAttribute('data-duration')) || options?.duration || 2000,
            decimal  = parseInt(element.getAttribute('data-decimal')) || options?.decimal || 0,
            value    = parseInt(element.getAttribute('data-value')) || options?.value || parseInt(element.textContent.replaceAll(',','')),
            symbol   = element.getAttribute('data-symbol') || options?.symbol || '',
            delay    = parseInt(element.getAttribute('data-delay')) || options?.delay  || 0,
            steps    = parseInt(element.getAttribute('data-steps')) || options?.steps  || 10,
            reverse  = element.getAttribute('data-reverse') || options?.reverse || false,
            lazyloading = element.getAttribute('data-lazy') || options?.lazyloading,
            counting = element.classList.contains('counting');

        //====> Counter Data <===//
        let input = (element.nodeName.toLowerCase() === 'input') ? true : false,
            count = 0,
            increment = Math.ceil(value / (duration / steps)),
            interval = null,
            decimal_regex = /\B(?=(\d{3})+(?!\d))/g;

        //====> Switch Count for Counting Down <====//
        if (reverse) count = value;

        
        //====> Count Runer <===//
        const runCounter = () => {
            //===> Round Up Values <===//
            count = Math.round(count);
            value = Math.round(value);
            
            //===> Set is Counting <===//
            if (!counting) element.classList.add('counting');
            
            //===> if [Count Down] is Activated => Decrease the Count <===//
            if (reverse && count > 0) count -= increment;
            
            //===> Otherwise Increase the Count <===//
            else if (count < value) count += increment;
            
            //===> Current Value <===//
            let current = `${(count).toFixed(decimal).toString().replace(decimal_regex, ',')+symbol}`;
            
            //===> if the Element is Input Control <===//
            if (input) element.value = current;
            
            //===> Otherwise <===//
            else element.innerHTML = current;

            //===> Clear When Count Up Reaches The Target <===//
            if (!reverse && count === value) clearInterval(interval);

            //===> Clear When Count Down Reaches Zero <===//
            else if (reverse && count === 0) clearInterval(interval);
        };

        //====> Counter Handler <====//
        let counter_handler = () => {
            setTimeout(function() {
                interval = setInterval(runCounter.bind(this), steps);
            }.bind(this), delay);
        }

        //====> Run Counter <====//
        if (lazyloading) {
            //===> First View <===//
            if (Phenix(element).inView()) {
                counter_handler();
            }
            //===> Hidden View <===//
            if(!counting) window.addEventListener('scroll', scrolling => {
                counting = element.classList.contains('counting');
                if(!counting && Phenix(element).inView()) counter_handler();
            });
        } else {
            counter_handler();
        };
    });

    //====> Return Phenix Elements <====//
    return this;
}