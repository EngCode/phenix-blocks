/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Effects : SlideUp
 * ===> 03 - Effects : SlideDown
 * ===> 04 - Effects : SlideToggle
 * ===> 05 - Effects : FadeOut
 * ===> 06 - Effects : FadeIn
 * ===> 07 - Effects : FadeToggle
 * ===> 08 - Effects : (Smoth-Scroll, Sticky Elements, Scroll-Spy)
 * ===> 00 - ....
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Effects : SlideUp <====*/
PhenixElements.prototype.slideUp = function (duration?, delay?) {
    //====> Loop Through Phenix Elements <====//
    this.forEach((element:HTMLElement) => {
        //====> if the target is Visible <====//
        if (getComputedStyle(element).display !== 'none') {
            //====> Set Initial Animation Properties <====//
            Phenix(element).css({ "overflow": 'hidden' });

            //====> Animation Data <====//
            const fullHeight = element.scrollHeight;
            const initialStyles = Phenix(element).getCSS();
            const timespeed = duration || 300;
            const startTime = performance.now();
            const endHeight = 0;

            //====> requestAnimationFrame Animation <====//
            function animateSlideUp(currentTime: number) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / timespeed, 1);

                // Set the element's style based on the animation progress
                Phenix(element).css({
                    height: `${fullHeight * (1 - progress)}px`,
                    paddingTop: `${parseFloat(initialStyles.paddingTop) * (1 - progress)}px`,
                    paddingBottom: `${parseFloat(initialStyles.paddingBottom) * (1 - progress)}px`
                });

                if (progress < 1) {
                    requestAnimationFrame(animateSlideUp); // Continue the animation
                } else {
                    // After Animation : Hide the Element
                    Phenix(element).css({ "display": 'none', "height": "", "paddingTop": "", "paddingBottom": "", "overflow": "" });
                }
            }

            //====> Trigger the Animation with Delay <====//
            setTimeout(() => requestAnimationFrame(animateSlideUp), delay || 0);
        }
    });

    //====> Return Phenix Elements <====//
    return this;
};

/*====> Effects : SlideDown <====*/
PhenixElements.prototype.slideDown = function (duration?, delay?, display?) {
    //====> Loop Through Phenix Elements <====//
    this.forEach((element: HTMLElement) => {
        //====> if the target is Hidden <====//
        if (getComputedStyle(element).display === 'none') {
            //====> Show the Element and Set Initial Styles <====//
            Phenix(element).css({
                "overflow": 'hidden',
                "display": display || 'block',
                "height": "0px", // Start height for sliding effect
                "paddingTop": "0px",
                "paddingBottom": "0px"
            });

            //====> Animation Data <====//
            const fullHeight = element.scrollHeight;
            const initialStyles = Phenix(element).getCSS();
            const timespeed = duration || 300;
            const startTime = performance.now();

            //====> requestAnimationFrame Animation <====//
            function animateSlideDown(currentTime: number) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / timespeed, 1);

                // Set the element's style based on the animation progress
                Phenix(element).css({
                    height: `${progress * fullHeight}px`,
                    paddingTop: `${parseFloat(initialStyles.paddingTop) * progress}px`,
                    paddingBottom: `${parseFloat(initialStyles.paddingBottom) * progress}px`
                });

                if (progress < 1) {
                    requestAnimationFrame(animateSlideDown); // Continue the animation
                } else {
                    // Clear overflow and reset properties after animation completes
                    Phenix(element).css({ "height": "", "paddingTop": "", "paddingBottom": "", "overflow": "" });
                }
            }

            //====> Trigger the Animation with Delay <====//
            setTimeout(() => requestAnimationFrame(animateSlideDown), delay || 0);
        }
    });

    //====> Return Phenix Elements <====//
    return this;
};

/*====> Effects : SlideToggle <====*/
PhenixElements.prototype.slideToggle = function (duration?, delay?, display?) {
    //====> Loop Through Phenix Elements <====//
    this.forEach((element: HTMLElement) => {
        //====> if the target is Hidden <====//
        if (getComputedStyle(element).display === 'none') {
            Phenix(element).slideDown(duration, delay, display);
        }
        //====> if the target is Visible <====//
        else {
            Phenix(element).slideUp(duration, delay);
        }
    });

    //====> Return Phenix Elements <====//
    return this;
};

/*====> Effects : FadeOut <====*/
PhenixElements.prototype.fadeOut = function (duration?, delay?) {
    //====> Loop Through Phenix Elements <====//
    this.forEach((element: HTMLElement) => {
        //====> if the target is Visible <====//
        if (getComputedStyle(element)?.display !== 'none') {
            //====> Set Initial Style for Animation <====//
            Phenix(element).css({ "opacity": "1" });

            //====> Animation Data <====//
            const timespeed = duration || 300;
            const startTime = performance.now();

            //====> requestAnimationFrame Animation <====//
            function animateFadeOut(currentTime: number) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / timespeed, 1);

                // Apply the opacity based on the animation progress
                Phenix(element).css({ opacity: `${1 - progress}` });

                if (progress < 1) {
                    requestAnimationFrame(animateFadeOut); // Continue the animation
                } else {
                    // After Animation : Hide the Element and Reset Inline Styles
                    Phenix(element).css({ "display": 'none', "opacity": "" });
                }
            }

            //====> Trigger the Animation with Delay <====//
            setTimeout(() => requestAnimationFrame(animateFadeOut), delay || 0);
        }
    });

    //====> Return Phenix Elements <====//
    return this;
};

/*====> Effects : FadeIn <====*/
PhenixElements.prototype.fadeIn = function (duration?, delay?, display?) {
    //====> Loop Through Phenix Elements <====//
    this.forEach((element: HTMLElement) => {
        //====> if the target is Hidden <====//
        if (getComputedStyle(element).display === 'none') {
            //====> Show the Element with Initial Opacity <====//
            Phenix(element).css({
                "display": display || 'block',
                "opacity": "0"
            });

            //====> Animation Data <====//
            const timespeed = duration || 300;
            const startTime = performance.now();

            //====> requestAnimationFrame Animation <====//
            function animateFadeIn(currentTime: number) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / timespeed, 1);

                // Set opacity based on the animation progress
                Phenix(element).css({ opacity: `${progress}` });

                if (progress < 1) {
                    requestAnimationFrame(animateFadeIn); // Continue animation
                } else {
                    // Clear inline opacity style after animation completes
                    Phenix(element).css({ "opacity": "" });
                }
            }

            //====> Trigger the Animation with Delay <====//
            setTimeout(() => requestAnimationFrame(animateFadeIn), delay || 0);
        }
    });

    //====> Return Phenix Elements <====//
    return this;
};

/*====> Effects : FadeToggle <====*/
PhenixElements.prototype.fadeToggle = function (duration?, delay?, display?) {
    //====> Loop Through Phenix Elements <====//
    this.forEach((element: HTMLElement) => {
        //====> if the target is Hidden <====//
        if (getComputedStyle(element).display === 'none') {
            Phenix(element).fadeIn(duration, delay, display);
        }
        //====> if the target is Visible <====//
        else {
            Phenix(element).fadeOut(duration, delay);
        }
    });

    //====> Return Phenix Elements <====//
    return this;
};
