---
title: "Default"
date: 2025-01-04
---

## DOM Reset

DOM Reset, a collection of element-specific CSS changes in a single file, kickstarts Phenix to provide an elegant, consistent, and simple baseline to build upon.

## Overview

Reset builds upon [Normalize.css](https://necolas.github.io/normalize.css/), providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes. For example, we reboot some <table> styles for a simpler baseline and later provide .table, .table-bordered, and more.

Here are our guidelines and reasons for choosing what to override in Reboot:

- Update some browser default values to use `rem`s instead of `em`s for scalable component spacing.

- Avoid `margin-top`. Vertical margins can collapse, yielding unexpected results. More importantly, though, a single direction `margin` is a simpler mental model.

- For easier scaling across device sizes, block elements should use `rem`s for `margin`s.

- Keep declarations of `font`related properties to a minimum, using `inherit` whenever possible.

- All heading elements `<h1>`—`<h6>` and `<p>` are reset to have them `margin-top` removed. Headings have `margin-bottom: .5rem` added and paragraphs `margin-bottom: 1rem` for easy spacing.

- All lists—`<ul>`, `<ol>`, and `<dl>`—have their `margin-top` removed and a `margin-bottom: 1rem`. Nested lists have no `margin-bottom`. We’ve also reset the `padding-left` on `<ul>` and `<ol>` elements.

## Page defaults

The `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:

- The `box-sizing` is globally set on every element—including `::before` and `::after`, to `border-box`. This ensures that the declared width of the element is never exceeded due to padding or border.

- The `<body>` also sets a global `font-family`, `font-weight`, `line-height`, and `color`. This is inherited later by some form elements to prevent font inconsistencies.

## HTML5 \[hidden\]

HTML5 adds [a new global attribute named \[hidden\]](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden), which is styled as display: none by default. and to improve upon this default by making \[hidden\] { display: none !important; } to help prevent its display from getting accidentally overridden.

## Font Families

the font-family is applied to the <body> and automatically inherited globally throughout Phenix DS. To switch the font-family, update :root css variable for --primary-font and --secondary-font and change --icons-font variable to use your favorite font icon, with those custom font families there is a fallback for the default operation systems emoji icons font families.

```
:root {
    /*==== Font Families ====*/
    --primary-font   : 'Roboto';  /*===> Headlines */
    --secondary-font : 'Roboto';  /*===> Global Text */
    --icons-font: "Font Awesome 5";
    /*==== Font Weight ====*/
    --normal-weight: 400;
    --medium-weight: 500;
    --strong-weight: 700;
    /*==== Standard Line-Height ====*/
    --line-height: 1.625;
}
```

## Reset Classes

phenix provides a small collection of reset class names to remove default margin, padding, border, lists you can learn each class name and what it does in the table below.

| Class Name | Description | Element |
| --- | --- | --- |
| .reset, .reset-block | removes the default margin and padding for any element. | `<any>` |
| .reset-list | removes the default list-style for ul, ol elements | `<ul, ol>` |
| .no-border | removes the border from any element. | `<any>` |
| .reset-all | removes any style from any element using all property | `<any>` |
| .reset-input | removes the default input style | `` `<input>` `` |
| .reset-appearance | removes the default appearance of the browser to any element | `<select>` |
| .input-inherit | inherit font size and height from the parent for inputs. | `<input>` |

## More On Reset

for more information and examples about the default style of the elements like [Typography](https://phenixthemes.com/pds-docs/typography/), [Tables](https://phenixthemes.com/pds-docs/tables/), [Lists](https://phenixthemes.com/pds-docs/typography/), [Form Elements](https://phenixthemes.com/pds-docs/form-controls/) and more keep reading the documentation related to those elements you’re searching for and you can always use the search to find it quickly.
