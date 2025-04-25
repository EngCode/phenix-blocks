/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Smoth-Scroll
 * ===> 03 - Sticky Elements
 * ===> 04 - Scroll-Spy
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Sticky Elements <====*/
PhenixElements.prototype.sticky = function (options?:{
    type?:string,   //===> Fixed, Sticky
    offset?:number, //===> Increase Target Position By [number]
    into?:number,   //===> Decrease Target Position By [number]
    flow?:string,   //===> Flow Direction [X, Y]
    active?:string, //===> Active Class Name
}) {
    
    //====> Loop Through Phenix Elements <====//
    this.forEach(element => {
        //====> Get Data <====//
        let into   = parseInt(element.getAttribute('data-into')) || options?.into || 0,
            active = options?.active || 'is-sticky',
            offset = parseInt(element.getAttribute('data-offset')) || options?.offset || 0,
            position = element.offsetTop,
            direction = options?.flow?.toLowerCase() || 'y';

        //====> Y Scroll Mode <====//
        if(!direction || direction === 'y') {
            //====> Offset Calc <====//
            if (into && into > 0) position = position + into;
            else if (offset && offset > 0) position = element.offsetTop - offset;

            //====> First Position [workout] <====//
            if (window.scrollY > offset) element.classList.add(active); 

            //====> While Window Scrolling <====//
            window.addEventListener('scroll', event => {
                //====> if position matches element Activate <====//
                if (window.scrollY >= position) element.classList.add(active); 

                //====> Otherwise De-Activate <====//
                if (window.scrollY <= position) element.classList.remove(active);
            });
        }

        //====> X Scroll Mode <====//
        else if (direction && direction === 'x') {
            //====> Offset Calc <====//
            position = element.offsetLeft;
            if (into && into > 0) position = element.offsetLeft + into;
            if (offset && offset > 0)  position = element.offsetLeft - offset;
    
            //====> First Position [workout] <====//
            if (window.scrollX > position) element.classList.add(active); 

            //====> While Window Scrolling <====//
            window.addEventListener('scroll', event => {
                //====> if position matches element Activate <====//
                if (window.scrollX >= position) element.classList.add(active); 

                //====> Otherwise De-Activate <====//
                else if (window.scrollX <= position) element.classList.remove(active);
            });
        }
    });

    //====> Return Phenix Elements <====//
    return this;
}