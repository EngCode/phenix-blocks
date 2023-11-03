/**======> Referance By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Smoth-Scroll
 * ===> 03 - Sticky Elements
 * ===> 04 - Scroll-Spy
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Smooth-Scroll [Bugged] <====*/
PhenixElements.prototype.smothScroll = function (options?:{
    target?:string,   //===> Target to Scroll to
    offset?:number,   //===> Decrease Target Position By [number]
    into?:number,     //===> Increase Target Position By [number]
    duration?:number, //===> Scroll Animation Duration
    delay?:number,    //===> Delay Before Scroll
}) {
    //====> Loop Through Phenix Elements <====//
    this.on('click', event => {
        //====> Prevent Default Click Behavior <====//
        event.preventDefault();

        //====> Element Data <====//
        let element:HTMLElement = event.target,
            target:HTMLElement  = document.querySelector(element.getAttribute('href')?.length > 1 ? element.getAttribute('href') : element.getAttribute('data-target') ? element.getAttribute('data-target') : options.target ? options.target : 'h1'),
            start:number  = null,
            into:number   = parseInt(element.getAttribute('data-into')) || options?.into || 0,
            offset:number = parseInt(element.getAttribute('data-offset')) || options?.offset || 0,
            viewPos:number  = Math.round(window.pageYOffset || window.scrollY),
            duration:number = parseInt(element.getAttribute('data-duration')) || options?.duration || 700,
            delay:number = parseInt(element.getAttribute('data-delay')) || options?.delay || 0,
            posTest = target?.getBoundingClientRect(),
            position:number = posTest ? Math.round(posTest?.top) : 0,
            numCheck = (n) => {return 1/(n*0)===1/0},
            //====> Animations Timing Function <====//
            timeFunc:any  = (time, current, target, duration) => {
                //===> Time / Duration / 2 <===//
                time /= duration / 2;
                //===> if Time Ends <===//
                if (time < 1) return target / 2 * time * time + current;
                //===> Otherwise <===//
                else {
                    time--;
                    return -target / 2 * (time * (time - 2) - 1) + current;
                }
            };

        //====> Offset Calc <====//
        if (into && into > 0) position = position + into;
        if (offset && offset > 0) position = position - offset;
        
        //====> Scroll Animation <====//
        function activator(currentTime) {
            //====> Update Start Time <====//
            if (start === null) start = currentTime;

            //====> Update Time <====//
            let timeElapsed = currentTime - start,
                scrollAnimate = timeFunc(timeElapsed, viewPos, position, duration);

            //====> Start Scrolling <====//
            window.scrollTo(0, scrollAnimate);

            //====> not the End ? get the next frame <====//
            if (timeElapsed < duration) requestAnimationFrame(activator);

            //====> the End ? Update View Position <====//
            else {
                viewPos = Math.round(window.pageYOffset);
                //===> Hash URL Update <===//
                let loc:any = window;
                loc.location.href = element.getAttribute('href') || element.getAttribute('data-target') || options?.target;
            }
        }

        //====> Activate Scrolling <====//
        if(delay > 0) {
            //====> Delay Scroll <====//
            setTimeout(() => requestAnimationFrame(activator), delay);
        } else requestAnimationFrame(activator);
    });

    //====> Return Phenix Elements <====//
    return this;
}

/*====> Sticky Elements <====*/
PhenixElements.prototype.sticky = function (options?:{
    type?:string,   //===> Fixed, Sticky
    offset?:number, //===> Increase Target Position By [number]
    into?:number,   //===> Decrease Target Position By [number]
    flow?:string,   //===> Flow Direction [X, Y]
    active?:string, //===> Active Class Name
}) {
    //====> Define Direction Flow <====//
    let direction = options?.flow?.toLowerCase() || 'y';

    //====> Loop Through Phenix Elements <====//
    this.forEach(element => {
        //====> Get Data <====//
        let type   = element.getAttribute('data-sticky') || options?.type || 'sticky',
            into   = parseInt(element.getAttribute('data-into')) || options?.into || 0,
            active = options?.active || 'is-sticky',
            offset = parseInt(element.getAttribute('data-offset')) || options?.offset || 0;

        //====> Relative to its Parent [workout] <====//
        // if (type && type === 'sticky') element.parentNode.style.transform = "translateZ(0)";

        //====> Y Scroll Mode <====//
        if(!direction || direction === 'y') {
            //====> Offset Calc <====//
            if (into && into > 0) offset = element.offsetTop + into;
            if (offset && offset > 0) offset   = element.offsetTop - offset;

            //====> First Position [workout] <====//
            if (window.scrollY > offset) element.classList.add(active); 

            //====> While Window Scrolling <====//
            window.addEventListener('scroll', event => {
                //====> if position matches element Activate <====//
                if (window.scrollY >= offset) element.classList.add(active); 

                //====> Otherwise De-Activate <====//
                if (window.scrollY <= offset) element.classList.remove(active);
            });
        }

        //====> X Scroll Mode <====//
        else if (direction && direction === 'x') {
            //====> Offset Calc <====//
            if (into && into > 0) element.offsetLeft + into;
            if (offset && offset > 0)   element.offsetLeft - offset;
    
            //====> First Position [workout] <====//
            if (window.scrollX > offset) element.classList.add(active); 

            //====> While Window Scrolling <====//
            window.addEventListener('scroll', event => {
                //====> if position matches element Activate <====//
                if (window.scrollX >= offset) element.classList.add(active); 

                //====> Otherwise De-Activate <====//
                else if (window.scrollX <= offset) element.classList.remove(active);
            });
        }
    });

    //====> Return Phenix Elements <====//
    return this;
}

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
    this.forEach(element => {
        //====> Get All Links & Triggers <====//
        let triggers:any = element.querySelectorAll('[href], [data-target]');

        //====> Apply Smooth Scroll & Loop Through Links & Triggers <====//
        triggers.forEach(trigger => {            
            Phenix(trigger).smothScroll({
                into : element.getAttribute('data-into') || spotInto,
                offset : element.getAttribute('data-offset') || spotOffset
            })
        });
        
        triggers.forEach(element => {
            //====> Get Data <====//
            let selector = element.getAttribute('href') || element.getAttribute('data-target'),

            //====> Activator <====//
            activator = () => {
                //====> Define Siblings & Parent Elements <====//
                let siblings, parent;

                //====> if Trigger not List-Item Get Ancestor List-Item <====//
                if (!element.matches('li')) parent = Phenix(element).ancestor('li');

                //====> Active & Get Siblings <====//
                siblings = Phenix(parent || element).addClass(className).siblings();

                //====> Loop Through Siblings <====//
                if (siblings) siblings.forEach(sibling => {
                    //====> De-Activate Siblings <====//
                    sibling.classList.remove(className);

                    //====> Get Activated child's & De-Activate them <====//
                    sibling.querySelector(`.${className}`)?.classList.remove(className);
                });
            };

            //====> First View [workout] <====//
            if (document.querySelector(`${selector}`) && Phenix(selector).inView({
                flow : options?.flow || 'both',
                into : element.getAttribute('data-into') || options?.into || 0,
                offset : element.getAttribute('data-offset') || options?.offset || 0,
            })) activator();

            //====> Check While Scroll if in view-point : Activate <====//
            window.addEventListener('scroll', event => Phenix(selector).inView() ? activator() : null);
        });
    });

    //====> Return Phenix Elements <====//
    return this;
}
