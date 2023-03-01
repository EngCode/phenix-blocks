document.addEventListener('DOMContentLoaded', ready => {
    //====> H1 Fix <====//
    let headline = document.querySelector('h1');
    if(!headline) {
        document.querySelector('body > *:first-child').insertAdjacentHTML('beforeend', `<h1 class="hidden">${document.title}</h1>`);
    }

    //====> Images SEO/Performance <====//
    document.querySelectorAll('img').forEach((img) => {
        //===> Get Image Data <===//
        let img_width = img.getAttribute('width') || img.style.width,
            img_height = img.getAttribute('height') || img.style.height,
            parent_width = img.parentNode.clientWidth,
            parent_height = img.parentNode.clientHeight;

        //===> Set Width and Height <===//
        if (!img_width && parent_width > 0)  img.setAttribute('width', `${parent_width}`);
        if (!img_height && parent_height > 0) img.setAttribute('height', `${parent_height}`);

        //===> Alternative Text <===//
        if (!img.getAttribute('alt') || img.getAttribute('alt') === "") img.setAttribute('alt', document.title);
    });

    //====> Links SEO <====//
    document.querySelectorAll('a[href]').forEach((link) => {
        //===> Alternative Text <===//
        if (!link.getAttribute('title') || link.getAttribute('title') === "") link.setAttribute('title', link.textContent);
    });
});