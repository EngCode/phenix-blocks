---
title: "Table of Content"
date: 2025-01-04
---

## Table of Content

Learn how to build a Table of Content component to navigate through the page content and jump to any piece of content quickly with Phenix Javascript and CSS Utilities

## Overview

the Table of Content functionality of spying and navigate through your content by the headlines can be done easily by using phenix [SpyScroll](http://phenix.localhost/test/ui-effects/ui-effects#section-5) and a little bit of JavaScript, you can see a live example of it on this documentation of Phenix Design System,

## Markup

you start by building an empty list in your html and give what ever class names you desire and style it as your design require using our [CSS utilities](http://phenix.localhost/test/utilities/),

```
<ul class="reset scrollspy-menu"></ul>
```

## Javascript

latter on we will use a function to gather all the headlines inside your content with javascript and attach them as items of the list that we created before,

```
/*===> Table of contents Menu <===*/
let last_title,
    headlines = '.content-wrapper h1,.content-wrapper h2,.content-wrapper h3';

/*===> Loop Through Titles <===*/
Phenix(headlines).forEach((element, index) => {
    //====> Element Data <====//
    let title  = element.textContent,
        itemHtml = `<li><a href="#section-${index}" class="smoth-scroller">${title}</a></li>`;
    //====> Set ID <====//
    element.setAttribute('id', `section-${index}`);

    //====> Sub-Titles <====//
    if (element.matches('h3' || 'h4')) {
        //===> ... <===//
        let last_item = document.querySelector('.on-page-menu .scrollspy-menu > li:last-child'),
            last_list = last_item.querySelector('ul');

        //====> Create new Menu <====//
        if (!last_list) last_list = Phenix(last_item).insert('append', '<ul></ul>');
        
        //====> Create as Menu Item <====//
        Phenix(last_list).insert('append', itemHtml);
    }
    //====> Create as Main Title <====//
    else Phenix(content_menu).insert('append', itemHtml);

    //====> Asign Last Title <====//
    last_title = element;
});
```

## ScrollSpy

now we have our Table of Content list in our DOM we need to use [Phenix SpyScroll](http://phenix.localhost/test/ui-effects/ui-effects#section-5) on the list to activate the spying on what the current headline is and scrolling to the clicked headline if need to.

```
/*====> Scroll Spy Active <====*/
Phenix('.scrollspy-menu').scrollSpy();
```
