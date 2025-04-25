/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Timer Component
 * ===> 03 - Get Options Data
 * ===> 04 - Timer Handler
 * ===> 05 - Timer Loop
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Timer Component <====*/
PhenixElements.prototype.timer = function (options?:{
    type?:string,    //===> Timer Type [countdown, stopwatch]
    time?:string,    //===> Time = Hour:Minutes
    date?:string,    //===> Date = Year-Month-Day
    message?:string, //===> Time End Message
    lazyloading?:boolean,   //===> Lazyloading Timer
}) {
    //====> Loop Through Phenix Elements <====//
    this.forEach((element:any) => {
        //====> Get Options Data <====//
        let type = element.getAttribute('data-type') || options?.type || 'countdown',
            time = element.getAttribute('data-time') || options?.time || '00:00',
            date = element.getAttribute('data-date')?.replace(/:/g, "/") || options?.date?.replace(/:/g, "/") || '',
            message = element.getAttribute('data-message') || options?.message || 'Time is up.',
            lazyloading = element.getAttribute('data-lazy') || options?.lazyloading;

        //====> Create Custom Event <====//
        const start_event = new Event('timerStart'),
              end_event = new Event('timerEnd');

        //====> Timer Handler <====//
        let timer_handler = () => {
            //====> Timer Markup Elements <====//
            let childs  = {
                seconds : element.querySelector('.seconds') || Phenix(element).insert('append', `<span data-label="seconds" class="seconds">00</span>`),
                minutes : element.querySelector('.minutes') || Phenix(element).insert('append', `<span data-label="minutes" class="minutes">00</span>`),
                hours   : element.querySelector('.hours')   || Phenix(element).insert('append', `<span data-label="hours" class="hours">00</span>`),
                days    : element.querySelector('.days')    || Phenix(element).insert('append', `<span data-label="days" class="days">00</span>`)
            };

            //====> Convert Date <====//
            if(date.split("-")[0].length < 4) date = date.split(/\D/).reverse().join('-');

            //====> Fire Starting Event <====//
            setTimeout(() => element.dispatchEvent(start_event), 200);

            //====> Time Loop <====//
            let stringDate = new Date(`${date}T${time}`).getTime(),
                update = setInterval(function () {
                    //====> Get Elapsed Time <====//
                    let current = new Date().getTime(),
                        elapsed = stringDate - current,
                        //====> Timer Calculation <====//
                        days = Math.floor(elapsed / (1000 * 60 * 60 * 24)),
                        hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60)),
                        seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
        
                    //====> Update Timer <====//
                    childs.seconds.innerHTML = seconds.toString().padStart(2, '0');
                    childs.minutes.innerHTML = minutes.toString().padStart(2, '0');
                    childs.hours.innerHTML = hours.toString().padStart(2, '0');
                    childs.days.innerHTML = days.toString().padStart(2, '0');
        
                    //====> Clear Time Loop <====//
                    if (elapsed < 0) {
                        clearInterval(update);
                        element.innerHTML = `<p class="timer-message reset-block">${message}</p>`;
                        element.classList.add('px-timer-ended');
                        //====> Fire Ending Event <====//
                        element.dispatchEvent(end_event);
                    }
                }, 1000);
        }

        //====> Set Timer <====//
        if (lazyloading && lazyloading !== 'false') {
            //====> Add Loading State <====//
            element.classList.add('px-is-loading');

            //====> First View Handler <====//
            Phenix(element).inView({
                offset: 100,
                callback: () => {
                    //====> Remove Loading State <====//
                    element.classList.remove('px-is-loading');
                    //====> Start Timer <====//
                    timer_handler();
                },
                feature: 'timer'
            });
        } else {
            timer_handler();
        }
    });

    //====> Return Phenix Elements <====//
    return this;
}