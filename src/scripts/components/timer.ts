/**======> Referance By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Timer Counter
 * ===> 03 - Loop Through Phenix Elements
 * ===> 04 - Get Options Data
 * ===> 05 - Timer Markup Elements
 * ===> 06 - Create Date Object
 * ===> 07 - Time Loop
 * ===> 08 - Get Elapsed Time
 * ===> 09 - Timer Calculation
 * ===> 10 - Update Timer
 * ===> 11 - Clear Time Loop
 * ===> 12 - Return Phenix Elements
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Timer Counter <====*/
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
            date = element.getAttribute('data-date')?.replace(/:/g, "/") || options?.date.replace(/:/g, "/") || '',
            message = element.getAttribute('data-message') || options?.message || 'Time is up.',
            lazyloading = element.getAttribute('data-lazy') || options?.lazyloading,
            elementPds = Phenix(element);

        //====> Create Custom Event <====//
        const start_event = new Event('timerStart'),
              end_event = new Event('timerEnd');

        //====> Countdown Mode<====//
        if (type == 'countdown') {
            //====> Timer Handler <====//
            let timer_handler = () => {
                //====> Timer Markup Elements <====//
                let childs  = {
                    seconds : element.querySelector('.seconds') || elementPds.insert('append', `<span data-label="seconds" class="seconds">00</span>`),
                    minutes : element.querySelector('.minutes') || elementPds.insert('append', `<span data-label="minutes" class="minutes">00</span>`),
                    hours   : element.querySelector('.hours')   || elementPds.insert('append', `<span data-label="hours" class="hours">00</span>`),
                    days    : element.querySelector('.days')    || elementPds.insert('append', `<span data-label="days" class="days">00</span>`)
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
            if (lazyloading) {
                //===> First View <===//
                if (Phenix(element).inView()) timer_handler();
                //===> Hidden View <===//
                window.addEventListener('scroll', scrolling => {
                    Phenix(element).inView() ? timer_handler() : null
                });
            } else {
                timer_handler();
            };
        }

        //====> Countdown Mode<====//
        else if (type == 'stopwatch') {
            //====> Timer Handler <====//
            let timer_handler = () => {
                //====> Timer Markup Elements <====//
                let time_unites = time.split(':'),
                    total_seconds = 0,
                    childs  = {
                        hours   : time_unites.length >= 3 ? element.querySelector('.hours')   || elementPds.insert('append', `<span data-label="hours" class="hours">00</span>`) : '',
                        minutes : time_unites.length >= 2 ? element.querySelector('.minutes') || elementPds.insert('append', `<span data-label="minutes" class="minutes">00</span>`) : '',
                        seconds : element.querySelector('.seconds') || elementPds.insert('append', `<span data-label="seconds" class="seconds">00</span>`),
                    };
                //====> Fire Starting Event <====//
                setTimeout(() => element.dispatchEvent(start_event), 200);
                //====> Time Loop <====//
                let update = setInterval(function () {
                    //====> Increase Seconds <====//
                    ++total_seconds;
                    //====> Increase Seconds <====//
                    let hours:any = Math.floor(total_seconds / 3600),
                        minutes:any = Math.floor((total_seconds - hours * 3600) / 60),
                        seconds:any = total_seconds - (hours * 3600 + minutes * 60);

                    //====> Convert to Dubble Digits <====//
                    hours = hours.toString().padStart(2, '0');
                    minutes = minutes.toString().padStart(2, '0');
                    seconds = seconds.toString().padStart(2, '0');

                    //====> Update Timer <====//
                    time_unites.length >= 3 ? childs.hours.innerHTML = hours : '';
                    time_unites.length >= 2 ? childs.minutes.innerHTML = minutes : '';
                    childs.seconds.innerHTML = seconds;

                    //====> Timer Checker <====//
                    let timer_checker = () => {
                        if (time_unites.length >= 3) return `${hours}:${minutes}:${seconds}`;
                        else if (time_unites.length >= 2) return `${minutes}:${seconds}`;
                        else return `${seconds}`;
                    };

                    //====> Clear Time Loop <====//
                    if (time == timer_checker()) {
                        clearInterval(update);
                        element.innerHTML = `<p class="timer-message reset-block">${message}</p>`;
                        element.classList.add('px-timer-ended');
                        //====> Fire Ending Event <====//
                        element.dispatchEvent(end_event);
                    }
                }, 1000);
            }

            //====> Set Timer <====//
            if (lazyloading) {
                //===> First View <===//
                if (elementPds.inView()) timer_handler();
                //===> Hidden View <===//
                window.addEventListener('scroll', scrolling => {
                    elementPds.inView() ? timer_handler() : null
                });
            } else {
                timer_handler();
            };
        }
    });

    //====> Return Phenix Elements <====//
    return this;
}