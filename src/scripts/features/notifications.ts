/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Notifications
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

//=====> Notifications <=====//
PhenixElements.prototype.notifications = function (options?:{
    type?:string,     //=== Message Type [normal, error, success, warning]
    message?:string,  //=== Message Content
    duration?:number, //=== Message Timeout
    position?:any,     //=== Message Position {y, x} [top,center,bottom] [start,center,end]
}) {
    //====> Element & Data <====//
    let current,
        type = options?.type || 'normal',
        message = options?.message || 'No Message Defined.',
        duration = options?.duration || 3000,
        notifications = document.querySelector('.px-notifications'),
        background = 'bg-primary color-white',
        item_position = 'pos-bottom-0 pos-start-0',
        css_classes = 'px-item pdy-10 pdx-15 fs-14 mb-10 radius-sm';
    
    //====> Figure Position <=====//
    if(options?.position) {
        //=== get position ===//
        let position = options?.position;
        if (typeof(options?.position) == "string") position = options?.position.split(',');
        let y_pos = position[0].replace(/\s/g, ''),
            x_pos = position[1].replace(/\s/g, '');

        //=== set X position ===//
        x_pos == 'start' ? x_pos = 'me-auto' :
        x_pos == 'center' ? x_pos = 'mgx-auto' :
        x_pos == 'end' ? x_pos = 'ms-auto' : '';

        //=== set Y position ===//
        y_pos == 'top' ? y_pos = 'start' :
        y_pos == 'center' ? y_pos = 'center' :
        y_pos == 'bottom' ? y_pos = 'end' : '';

        //=== set position ===//
        item_position = `align-self-${y_pos} ${x_pos}`;

    //====> Set Default <===//
    } else item_position = `align-self-end`;

    //====> Create Notifications Area <====//
    if(!document.querySelector('.px-notifications')) {
        notifications = Phenix('body').insert('append', `<div class="px-notifications position-fx pos-bottom-0 pos-start-0 hidden z-index-modal pd-15 ${options?.position ? 'flexbox h-100vh col-12' : ''}" style="pointer-events: none"></div>`);
    }

    //====> Change Background <====//
    if (type === 'error') background = 'bg-danger color-white';
    else if (type === 'success') background = 'bg-success color-white';
    else if (type === 'warning') background = 'bg-warning color-dark';

    //=== Set Notifications ===//
    current = Phenix(notifications).insert('append', `<div class="w-max-320 z-index-modal position-rv ${css_classes} ${background} ${item_position} hidden" style="pointer-events: all">${message}</div>`);

    //====> Show Notifications <====//
    Phenix(notifications).removeClass('hidden').fadeIn(500, 0, 'flex');
    Phenix(current).removeClass('hidden').fadeIn();

    //====> Hide Notifications <====//
    setTimeout(()=> {
        Phenix(current).fadeOut();
        setTimeout(() => current ? current.remove() : '', 500);
    }, duration);

    Phenix(current).on('click', isClicked => {
        Phenix(current).fadeOut();
        setTimeout(() => current ? current.remove() : '', 500);
    });

    //====> Return Phenix <====//
    return this;
};