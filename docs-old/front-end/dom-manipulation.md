---
title: "DOM Manipulation"
date: 2025-01-04
---

## DOM Manipulation

Learn how to work around Phenix Functions and helpers, add/remove classes, get element information or set multiple attributes, and create new elements in specific locations, etc.

## DOM Ready

The .ready() function in Phenix executes the code only when the DOM (Document object model) is fully loaded, It is an inbuilt function in Phenix. It can fire before loading all images, etc. but only when the DOM is ready, The code inserted betweenPhenix(document).ready() is executed only when the page is ready for JavaScript code to execute.

```
//====> Check for Document Loading <====//
Phenix(document).ready((event:any) => {
    //====> !Here Goes Your Code <====//
    ....
});
```

## DOM Selecting

Phenix can be used as an element selector and will return a collection\[object\] of HTML Elements for you to loop through and play with them, and it can accept any [DOM](https://www.w3schools.com/js/js_htmldom.asp) & [CSS Selector](https://www.w3schools.com/cssref/css_selectors.asp), once you select elements with Phenix you can use any of its Prototypes [functions](https://phenixthemes.com/pds-docs/category/typescript-js/) and [plugins](https://phenixthemes.com/pds-docs/category/components/).

```
//====> Select Elements [Object] <====//
let element = Phenix('.className');
```

## Add Class

Phenix has a built-in function to add/remove and toggle class names to a group of elements at once and you can use it like the example below.

```
//====> Select Elements, add Class to Each of them <====//
Phenix('.some-list li').addClass('className');
```

## Remove Class

Phenix has a built-in function to add/remove and toggle class names to a group of elements at once and you can use it like the example below.

```
//====> Select Elements, remove Class from Each of them <====//
Phenix('.some-list li').removeClass('className');
```

## Toggle Class

Phenix has a built-in function to add/remove and toggle class names to a group of elements at once and you can use it like the example below.

```
//====> add Class if not exist and remove Class if exists <====//
Phenix('.some-list li').toggleClass('className');
```

## Set CSS

with Phenix .css(style-object, clear:boolean) the function you can add/set multiple inline CSS properties to a group of matched selected elements, and you can learn how to use it from the example below, and it has an optional parameter to clear the elements inline-style before setting the new CSS.

```
//====> set multiple inline css <====//
Phenix('.dom-element').css({
    "display" : "block",
    "padding-top" : "30px",
});

//====> set css and remove any previous inline-style <====//
Phenix('.dom-element').css({
    "display" : "block",
}, true);
```

## Get CSS

with .getCSS(property, pseudo) you can get the css value of a specific HTML element and you can get all the Computed styles of the element or target specific property or pseudo-elements, and it will return the value of the css as an object for all and string value for the targeted property, you can learn how to use it from the example below.

```
//====> Get Element All CSS Information <====//
let AllCss = Phenix(element).getCss();

//====> Get Element Specific CSS Property Value <====//
let display = Phenix(element).getCss("display");

//====> Get Element ::before pseudo CSS Property Value <====//
let pseudo = Phenix(element).getCss("display", ":before");
```

## Set Attributes

with Phenix .setAttributes(attr...) the function you can add/set multiple attributes to a group of matched selected elements, and you can learn how to use it from the example below.

```
//====> set multiple Attributes to multiple elements <====//
Phenix('.links').setAttributes({
    "href" : "#",
    "target" : "_blank",
    "class" : "link-element class-test"
});
```

## Insert Elements

with Phenix .insert(postion, html) you can create HTML elements or move from their place and insert it in another place hooked up to another element and insert it after the element or before the element or as first children of the element or even the last children of the element.

```
//====> Create HTML String Element <====//
let html_code = `<div class="demo">....</div>`;

//====> Insert The html_code after the .hook-element <====//
Phenix('.hook-element').insert('after', html_code);
```
