/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Smoth-Scroll
 * ===> 03 - Sticky Elements
 * ===> 04 - Scroll-Spy
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Scroll-Spy <====*/
PhenixElements.prototype.scrollSpy = function (options?:{
    active:string,  //===> Active Class Name Default : px-active
    flow:string,    //====> From Top to Bottom [start] Reverse [end] Or Any of [both]
    offset:number,  //====> Decrease Target Position By [number]
    into:number     //====> Increase Target Position By [number]
}) {
    //====> Define Options <=====//
    let className:string = options?.active || 'px-active',
        spotFlow:string = options?.flow || 'both',
        spotInto:number = options?.into || 0,
        spotOffset:number = options?.offset || 0;

    //====> Loop Through Phenix Elements <====//
    this.forEach(spyWrapper => {
        //====> Get All Links & Triggers <====//
        let triggers = spyWrapper.querySelectorAll('[href], [data-target]');

        //====> Loop Through Triggers <====//
        triggers.forEach(trigger => {
            //====> Smooth Scroll <====//
            Phenix(trigger).smothScroll();

            //====> Get Data <====//
            let selector = trigger.getAttribute('href') || trigger.getAttribute('data-target');

            //====> Skip if not a valid selector <====//
            if (!selector || !document.querySelector(`${selector}`)) return;

            //====> Define Activator <====//
            const activator = () => {
                //====> Define parent if needed <====//
                const parent = !trigger.matches('li') ? Phenix(trigger).ancestor('li') : null;
                const hasScrollWrapper = spyWrapper.scrollHeight > spyWrapper.clientHeight || spyWrapper.scrollWidth > spyWrapper.clientWidth;
                
                //====> Add active class to parent or trigger <====//
                if (parent) {
                    parent.classList.add(className);
                    //====> Scroll to the Trigget if has Scrollable Wrapper <====//
                    if (hasScrollWrapper) parent.scrollIntoView({behavior: 'smooth'});
                } else {
                    trigger.classList.add(className);
                    //====> Scroll to the Trigget if has Scrollable Wrapper <====//
                    if (hasScrollWrapper) trigger.scrollIntoView({behavior: 'smooth'});
                }
                
                //====> Remove active class from siblings <====//
                Phenix(parent || trigger).siblings()?.forEach(sibling => {
                    //====> Remove active class <====//
                    sibling.classList.remove(className);
                    //====> Also remove from any active children <====//
                    sibling.querySelector(`.${className}`)?.classList.remove(className);
                });
            };

            //====> Use inView to detect when target is in viewport <====//
            Phenix(selector).inView({
                flow: trigger.getAttribute('data-flow') || spotFlow,
                into: trigger.getAttribute('data-into') || spotInto,
                offset: trigger.getAttribute('data-offset') || spotOffset,
                callback: activator,
                feature: 'scrollspy',
                persistent: true
            });
        });
    });

    //====> Return Phenix Elements <====//
    return this;
}