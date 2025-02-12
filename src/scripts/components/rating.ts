/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - 
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Uploader [un-tested] <====*/
PhenixElements.prototype.rating = function (options?:{
    type?:string,   //===> standard, advanced
    src?:string,    //===> Media Source [URL]
}) {
    //====> Loop Through Phenix Elements <====//
    this.forEach(element => {
        //====> if its Done <====//
        if(element.classList.contains('js-done')) return;

        //====> Get Data <====//
        let rating_name = ".rate-icon",
            input = element.querySelector('input'),
            maxRate:any = parseInt(input.getAttribute('max')) || 5,
            iconName = element.getAttribute('data-icon') || 'fas fa-star';

        //====> Create Elements <====//
        for (let i = 1; maxRate >= i; i++) {
            Phenix(input).insert('after', `<a href="javascript:void(0)" class="${iconName} rate-icon" tabindex="0" role="button" aria-pressed="false"></a>`);
        }

        //====> get the New Elements <====//
        const ratingElements = element.querySelectorAll(rating_name);

        //====> Loop Through Rating Elements <====//
        ratingElements.forEach((rateElement, index) => {
            //===> Activate From Current Value <===//
            if (parseInt(input.value) >= index) rateElement.classList.add('active');

            //===> Activated Stars as Elements <===//
            const activated = rateElement.parentNode.querySelectorAll(`${rating_name}.active`);

            //===> Hover Effect <===//
            rateElement.addEventListener('mouseenter', event => {
                //===> Activate Elements <===//
                event.target.classList.add('active');
                Phenix(event.target).next(rating_name, true)?.forEach(item => item.classList.remove('active'));
                Phenix(event.target).prev(rating_name, true)?.forEach(item => item.classList.add('active'));
                //===> Return the Prev Status <===//
                activated.forEach(item => item.classList.add('active'));
            });

            //===> When Mouse Leaves Element <===//
            rateElement.addEventListener('mouseleave', event => {
                //===> Deactivate Elements <===//
                element.querySelectorAll(`${rating_name}.active`).forEach(item => item.classList.remove('active'));
                //===> Return the Prev Status <===//
                activated.forEach(item => item.classList.add('active'));
            });

            //===> Toggle Rate <===//
            rateElement.addEventListener('click', event => {
                //===> Set Value <===//
                input.value = index+1;

                //===> Activate Elements <===//
                event.target.classList.add('active');
                Phenix(rateElement).prev(".rate-icon", true)?.forEach(ele => ele.classList.add('active'));
                Phenix(rateElement).next(".rate-icon", true)?.forEach(ele => ele.classList.remove('active'));

                //===> Activate Rated Elements <===//
                rateElement.addEventListener('mouseleave', event => event.target.classList.add('active'));

                //===> Dispatch Change Event <===//
                input.dispatchEvent(new Event('change'));
            });            
        });

        //===> Done <===//
        element.classList.add('js-done');
    });
}