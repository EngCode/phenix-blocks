/*====> D.O.M is Ready ? <====*/
Phenix(document).on("DOMContentLoaded", (loaded) => {
    //===> Run Multimedia <===//
    document.querySelectorAll(`.px-media:not([style*="background-image"]):not([data-type="embed"]), .px-media.is-selected:not([data-type="embed"])`).forEach(element => {
        //===> Reset Background <===//
        element.style.backgroundImage = null;
        //===> for Image Type <===//
        let image = element.querySelector('.px-media-img');
        if (image) image.setAttribute('src', element.getAttribute('data-src'));
        //===> Render the Media <===//
        Phenix(element).multimedia();
    });

    //===> Contain Queries Sliders <===//
    document.querySelectorAll(".px-slider:not(.block-editor-block-list__block)").forEach(element => {
        //===> Mark as Editing Mode <===//
        element.classList.add('edit-mode');

        //===> Disable Autoplay <===//
        if(element.getAttribute('data-autoplay')) element.setAttribute('data-autoplay', false);

        //===> Replace Data Attributes with Row/Columns Classes <===//
        const slider_cols_fixer = (row) => {
            //===> Contain the Slides in One Line <====//
            row.classList.add('flow-nowrap');
            if (element.getAttribute('data-md')) row.classList.add(`row-cols-md-${element.getAttribute('data-md')}`);
            if (element.getAttribute('data-lg')) row.classList.add(`row-cols-md-${element.getAttribute('data-lg')}`);
            if (element.getAttribute('data-xl')) row.classList.add(`row-cols-md-${element.getAttribute('data-xl')}`);
        }

        slider_cols_fixer(element);
    });

    //===> Run Menus <===//
    document.querySelectorAll(".px-navigation").forEach(element => Phenix(element).menu());

    //===> Icons List <===//
    document.querySelectorAll('li[data-icon]').forEach((list) => {
        if (list.getAttribute('data-icon')) {
            let classes = list.getAttribute('data-icon').split(" ") || [];
            list.classList.add(...classes);
        }
    });

    //===> Unlocated Menu fallback style. <===//
    document.querySelectorAll('.px-navigation > div.reset-list').forEach((element) => {
        //===> Define Elements <===//
        let parent = Phenix(element).ancestor(".px-navigation"),
            classNames = element.classList,
            children  = element.childNodes;

        //===> Move Children <===//
        children.forEach((child) => {
            //===> Move Element <===//
            parent.appendChild(child);
            //===> Move Classnames <===//
            classNames.forEach((className) => child.classList.add(className));
        });

        //===> Remove Element <===//
        element.remove();
    });
});
