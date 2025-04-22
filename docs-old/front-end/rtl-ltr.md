---
title: "RTL &amp; LTR"
date: 2025-01-04
---

## Phenix RTL/LTR

Learn how to enable support for right-to-left language direction in Phenix Design System across the layout, components, and utilities.

## CSS RTL Version

phenix has a CSS version for RTL languages ready for quick usage and you can find [CDN](https://phenixthemes.com/pds-docs/installation/) links in the [Installation](https://phenixthemes.com/pds-docs/installation/) document and all pre-designed [layouts](https://phenixthemes.com/pds-docs/grid-utilities/), [components](https://phenixthemes.com/pds-docs/category/components/), and [utilities](https://phenixthemes.com/pds-docs/category/utilities/), the best to get familiar with phenix logical classes.

```
<!-- Phenix CSS RTL -->
<link href="https://cdn.jsdelivr.net/npm/phenix-ui/dist/css/phenix-rtl.css" rel="stylesheet" />
```

## RTL via SASS

[phenix sass](https://phenixthemes.com/pds-docs/sass-overview/) has two main files phenix-rtl.scss and phenix.scss and those files is what gets compiled and watch by the npm sass script each of that file possess only the Fonts & Text direction for more information about building sass go back to [Build Tools](https://phenixthemes.com/pds-docs/build-tools/) document.

```
💼-your-project[phenix]
    📂-src/sass
        📄phenix.scss || LTR Options
        📄phenix-rtl.scss⠀|| RTL Options
        📄...
```

## Logical Classes

Phenix CSS [utilities](https://phenixthemes.com/pds-docs/category/utilities/) and class names for anything that is related to flow direction from top to bottom and left to right, or right to left depending on what language the document is, phenix uses the new CSS concept [Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties) for naming classes for example:

let’s assume your document language is English which means your main Block flow is from the document Top to Bottom and the Inline Flow is Left to Right, but we do not use those terms anymore, in phenix, the classes are named logically in this case of ours Left means Start and Right means End which leads us to classes like,

for example, tx-align-start to align text to the left in case of LTR and to the right in case of RTL, another example is tx-align-end to align text to the right in case of LTR and to the left in case of RTL.

and for properties that go both ways you will find class names like gpx-\* to create even space between [columns](https://phenixthemes.com/pds-docs/columns/) horizontally inside [grid](https://phenixthemes.com/pds-docs/category/grid-layout/) or [flexbox](https://phenixthemes.com/pds-docs/flexbox-grid/) layouts and also class names like gpy-\* to create even space between [columns](https://phenixthemes.com/pds-docs/columns/) vertically,

## Conclusion

top and bottom are referred to as class-t-\* or class-tp-\* and class-b-\* or class-bt-\* and Y for both, also left & right is referred to as start and end or X for both
