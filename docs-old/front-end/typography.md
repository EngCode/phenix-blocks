---
title: "Typography"
date: 2025-01-04
---

## Typography

Learn how to work with the default style of the Typography elements and its utility classes to build your content as you see fit

## Overview

typography is the essence of the web application and with phenix, you have a standard typography styling by default with great [helper utilities](https://phenixthemes.com/pds-docs/category/utilities/) class names to transform and change your content you need first you need to keep in mind the default [Reset](https://phenixthemes.com/pds-docs/default-reset/) style from the document before,

and you can start working with the typography elements you can start by customizing the [font properties](https://phenixthemes.com/pds-docs/css-customize/) and [responsive](https://phenixthemes.com/pds-docs/responsive-break-points/) base line sizes for everything related like the example below,

in this document, we will cover an example of the default style of the typography elements alongside the [utility](https://phenixthemes.com/pds-docs/category/utilities/) class names to control these elements and keep in mind: the `font-family` is applied to the `<body>` and automatically inherited globally throughout Phenix DS.

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

```
/*==== Responsive REM Base ====*/
:root {
    --rem-xl : 16px; /*===> xLarge Screens and Up */
    --rem-lg : 16px; /*===> Large Screens and Up */
    --rem-md : 15px; /*===> Medium Screens and Up */
    --rem-sm : 15px; /*===> Small Screens and Up */
    --rem-xs : 15px; /*===> Extra Small Screens and Up */
}
```

## Headings

All heading elements <h1>—<h6> and <p> are reset to have them margin-top removed. Headings have margin-bottom: .5rem added and paragraphs margin-bottom: 1rem for easy spacing.

| Element | Font Size |
| --- | --- |
| <h1>, .h1 | 2rem |
| <h2>, .h2 | 1.75rem |
| <h3>, .h3 | 1.5625rem |
| <h4>, .h4 | 1.4375rem |
| <h5>, .h5 | 1.25rem |
| <h6>, .h6 | 1.0625rem |

## Display headings

the display headlines are extra large Heading `font-size` that applies only for Desktop screens and beyond.

Class Name Example Font Size`.display-h1`**Display Title Level – 1**3.875rem (62px)`.display-h2`**Display Title Level – 2**3.25rem (52px)`.display-h3`**Display Title Level – 3**3rem (48px)`.display-h4`Display Title Level – 42.75rem (44px)`.display-h5`Display Title Level – 52.5rem (40px)`.display-h6`Display Title Level – 62.25rem (36px)

## Default Lists

All lists—<ul>, <ol>, and <dl>—have their margin-top removed and a margin-bottom: 1rem. Nested lists have no margin-bottom. We’ve also reset the padding-left on <ul> and <ol> elements.

- All lists have their top margin removed

- And their bottom margin normalized

- Nested lists have no bottom margin
    - This way they have a more even appearance
    
    - Particularly when followed by more list items

- The left padding has also been reset

1. All lists have their top margin removed

3. And their bottom margin normalized

5. Nested lists have no bottom margin ◦ This way they have a more even appearance ◦ Particularly when followed by more list items

7. The left padding has also been reset

## Description Lists

For simpler styling, clear hierarchy, and better spacing, description lists have been updated margins. <dd>s reset margin-left to 0 and add margin-bottom: .5rem. <dt>s are bolded.

## Utilities & Alignment

in the table below you will find all Typography utility class names to help you control your content and style it in the best way you see fit.

| Classname | Description |
| --- | --- |
| .tx-align-start | align the text to the page direction start |
| .tx-align-center | align the text to the center |
| .tx-align-end | align the text to the page direction end |
| .tx-align-justify | align the paragraph lines equal length as width. |
| .tx-align-left | always align the text to the left |
| .tx-align-right | always align the text to the right |
| .tx-uppercase | transforms the text to UPPERCASE |
| .tx-underline | adding a line under the text |
| .tx-capitalize | transforms the first character for each word Capital. |
| .tx-line-through | decorating the text by adding a line through it. |
| .weight-thin | adding font-weight (100) |
| .weight-xlight | adding font-weight (200) |
| .weight-light | adding font-weight (300) |
| .weight-normal | adding font-weight (400) |
| .weight-medium | adding font-weight (500) |
| .weight-bold | adding font-weight (600) |
| .weight-strong | adding font-weight (700) |
| .weight-xbold | adding font-weight (800) |
| .weight-black | adding font-weight (900) |
| .tx-nowrap | making all the text in one line and hiding any overflowed text. |
| .lineheight-100 | adding line-height by 100%. |
| .lineheight-120 | adding line-height by 120%. |
| .lineheight-130 | adding line-height by 130%. |
| .lineheight-150 | adding line-height by 150%. |
| .lineheight-160 | adding line-height by 160%. |
| .lineheight-170 | adding line-height by 170%. |
| .lineheight-180 | adding line-height by 180%. |
| .lineheight-inherit | adding line-height:inhrite. |

## Font sizes

in the table below you will find all font-size utility class names to help you control your content and style it in the best way you see fit, and it can be used from a specific breakpoint and up using .fs-{breakpoint}-\* classes pattern

| Classname | Description |
| --- | --- |
| .fs-12 | adding font-size of 12px |
| .fs-13 | adding font-size of 13px |
| .fs-14 | adding font-size of .875rem (14px) |
| .fs-15 | adding font-size of .9375rem (15px) |
| .fs-16 | adding font-size of 1rem (16px) |
| .fs-17 | adding font-size of 1.0625rem (17px) |
| .fs-18 | adding font-size of 1.125rem (18px) |
| .fs-19 | adding font-size of 1.1875rem (19px) |
| .fs-20 | adding font-size of 1.25rem (20px) |
| .h6 | adding font-size of 1.25rem (17px) |
| .h5 | adding font-size of 1.25rem (20px) |
| .h4 | adding font-size of 1.25rem (23px) |
| .h3 | adding font-size of 1.25rem (25px) |
| .h2 | adding font-size of 1.25rem (28px) |
| .h1 | adding font-size of 1.25rem (32px) |
| .display-h6 | adding display font-size 2.25rem (36px) |
| .display-h5 | adding display font-size 2.5rem (40px) |
| .display-h4 | adding display font-size 2.75rem (44px) |
| .display-h3 | adding display font-size 3rem (48px) |
| .display-h2 | adding display font-size 3.25rem (52px) |
| .display-h1 | adding display font-size 3.875rem (62px) |
| .display-{breakpoint}-h\* | adding display font-size from a specific screen breakpoint and up |
| .small-text | adding font-size of 0.875rem |
| .large-text | adding font-size of 1.125rem and 1.25rem for xLarge screens |
| .fs-{breakpoint}-\* | adding font-size from a specific screen breakpoint and up |
