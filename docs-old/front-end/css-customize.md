---
title: "CSS Customize"
date: 2025-01-04
---

## CSS Variables

Learn how to customize Phenix design style by CSS variables, it uses a group of custom CSS properties such as global colors, fonts, and breakpoints, for easy control and customize the design properties.

## Document Options

you may want to start with customizing the document properties like background and REM base size through all [responsive breakpoints](https://phenixthemes.com/pds-docs/responsive-break-points/) and direction options if you need to change the document directions in any specific case,

```
:root {
    /*==== Body Background ====*/
    --body-bg : #fcfcfc;

    /*==== Responsive REM:Base ====*/
    --rem-xl : 17px; /*===> xLarge Screens and Up */
    --rem-lg : 16px; /*===> Large Screens and Up */
    --rem-md : 15px; /*===> Medium Screens and Up */
    --rem-sm : 14px; /*===> Small Screens and Up */
    --rem-xs : 13px; /*===> Extra Small Screens and Up */

    /*==== Index Order ====*/
    --header-index : 9999;
    --modal-index  : 99999;
    --dropdown-index : 99999;
}
```

## Font Options

font CSS properties let you identify a primary font for headlines and secondary font for document text and those custom CSS properties used across Phenix [layout](https://phenixthemes.com/pds-docs/category/grid-layout/) and [components](https://phenixthemes.com/pds-docs/category/components/), here is a list of the options available for [typography](https://phenixthemes.com/pds-docs/typography/) :

```
:root {
    /*==== Font Families ====*/
    --primary-font   : 'Fira Sans', sans-serif;  /*===> Headlines */
    --secondary-font : 'Fira Sans', sans-serif;  /*===> Global Text */
    --icons-font: "Font Awesome 5";

    /*==== Font Weight ====*/
    --thin-weight   : 100;
    --xlight-weight : 200;
    --light-weight  : 300;
    --normal-weight : 400;
    --medium-weight : 500;
    --bold-weight   : 600;
    --strong-weight : 700;
    --xbold-weight  : 800;
    --black-weight  : 900;

    /*==== Standard Line-Height ====*/
    --line-height: 1.625;
}
```

## Main Colors

in the next custom CSS properties you will find a primary & secondary color to make phenix fit your brand style, which is used across Phenix [layout](https://phenixthemes.com/pds-docs/category/grid-layout/), [components](https://phenixthemes.com/pds-docs/category/components/), [utilities](https://phenixthemes.com/pds-docs/category/utilities/)

```
:root {
    /*==== Primary Color ====*/
    --primary-color   : #00C4FF;
    --primary-hover   : #1A69F4;
    --primary-reverse : #FFFFFF;
    --primary-offwhite: #F5F7F4;
    --offwhite-border : #d0e4da;

    /*==== Secondary Color ====*/
    --secondary-color   : #F8C35B;
    --secondary-hover   : #FB955D;
    --secondary-reverse : #FFFFFF;
    --secondary-offwhite: #eedec0;

    /*==== Gradients ====*/
    --primary-gradient   : var(--primary-color), var(--primary-hover);
    --secondary-gradient : var(--secondary-color), var(--secondary-hover);
    --purple-gradient    : #8772F7, #5F48DD;
    --warning-gradient   : #FFD500, #F49D1A;
    --danger-gradient    : #FD875B, #F9515A, #F96AAC;
    --ice-gradient       : #54AEFC, #3289E9, #5848D2;
    --fire-gradient      : #FFD500, #FAA10B, #F4291A;
    --water-gradient     : #00C4FF, #1A69F4;
}
```

## Typography Colors

in the next custom CSS properties you will find the text and typography colors, which are used across Phenix [layout](https://phenixthemes.com/pds-docs/category/grid-layout/), [components](https://phenixthemes.com/pds-docs/category/components/), [](http://utlitlies/)[utilities](https://phenixthemes.com/pds-docs/category/utilities/), and [typography](https://phenixthemes.com/pds-docs/typography/)

```
:root {
    /*==== Typography Colors ====*/
    --headlines-color  : #1c1c1c;
    --typography-color : #555;
    --light-reverse    : #000;
    --dark-reverse     : #FFF;
}
```

## Assets Colors

in the next custom CSS properties you will find assets and status colors to customize with your design concept, which take effect on [layout](https://phenixthemes.com/pds-docs/category/grid-layout/), [components](https://phenixthemes.com/pds-docs/category/components/), [utilities](https://phenixthemes.com/pds-docs/category/utilities/), etc.

```
:root {
    /*=== Assets Colors ====*/
    --links-color   : #4166d6;
    --info-color    : #17c0db;
    --gray-color    : #868e96;
    --dark-color    : #343a40;
    --success-color : #22b544;
    --danger-color  : #de3131;
    --warning-color : #f4bb0e;
    --disable-color : #ebebeb;

    /*=== Assets Offwhite ====*/
    --info-light    : #a6eaf5;
    --gray-light    : #d9dde1;
    --dark-light    : #343a40;
    --success-light : #c1eecc;
    --danger-light  : #fbbbbb;
    --warning-light : #ffdd75;
}
```

## Brands Colors

in the next custom CSS properties you will find the top famous brands’ colors to customize with your design concept, which takes effect on [layout](https://phenixthemes.com/pds-docs/category/grid-layout/), [components](https://phenixthemes.com/pds-docs/category/components/), [utilities](https://phenixthemes.com/pds-docs/category/utilities/), etc.

```
:root {
    --facebook-color  : #505cd6;
    --twitter-color   : #1da1f2;
    --youtube-color   : #e43e3c;
    --instagram-color : #d43f8d;
    --snapchat-color  : #e2e62c;
    --whatsapp-color  : #10d058;
    --pinterest-color : #bd081c;
    --linkedin-color  : #0077b5;
    --behance-color   : #1769ff;
    --dribbble-color  : #ea4c89;
    --flicker-color   : #0063dc;
    --google-red      : #ea4335;
}
```
