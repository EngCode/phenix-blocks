---
title: "Breadcrumb"
date: 2025-01-04
---

## Breadcrumb

Learn how to build breadcrumb navigator component that Indicate the current page’s location within a navigational hierarchy that automatically adds separators with Phenix CSS Utilities.

## Overview

Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb. Use our utilities to add additional styles as desired, for the basic breadcrumb component the breadcrumb wrapper should have `.px-breadcrumb` class name for the separator style to work.

- the breadcrumb separator style only applied under the `.px-breadcrumb` list.

- you can change the symbol with CSS variable `--divider-icon ">"` to the `.px-breadcrumb`.

- if you need yo use a font icon data attribute `data-type="font-icon"` to the `.px-breadcrumb`.

## Standard Separator

in the example below you can see the default separator with a simple breadcrumb setup with CSS utilities.

```
<!-- Breadcrumb -->
<ul class="px-breadcrumb reset-list flexbox pdx-20 pdy-10 bg-white border-r-sm mb-15 bx-shadow-dp-1 color-gray">
    <li><a href="#">Home</a></li>
    <li><a href="#">Services</a></li>
    <li>Web Design</li>
</ul>
<!-- // Breadcrumb -->
```

## Custom Separator

in the example below you can see an example for a custom separator symbol with css.

[HTML](#tab-1)

[CSS](#tab-2)

```
<!-- Breadcrumb -->
<ul class="px-breadcrumb custom-angle reset-list flexbox pdx-20 pdy-10 bg-white border-r-sm mb-15 bx-shadow-dp-1 color-gray">
    <li><a href="#">Home</a></li>
    <li><a href="#">Services</a></li>
    <li>Web Design</li>
</ul>
<!-- // Breadcrumb -->

<!-- Breadcrumb -->
<ul class="px-breadcrumb custom-arrows reset-list flexbox pdx-20 pdy-10 bg-white border-r-sm mb-15 bx-shadow-dp-1 color-gray">
    <li><a href="#">Home</a></li>
    <li><a href="#">Services</a></li>
    <li>Web Design</li>
</ul>
<!-- // Breadcrumb -->
```

```
/*===> Custom Angle Arrow Example <===*/
.px-breadcrumb.custom-angle {--divider-icon : '>';}

/*===> Custom Double Arrow Example <===*/
.px-breadcrumb.custom-arrows {--divider-icon : '»';}
```

## Font-icon Separator

[HTML](#tab-3)

[CSS](#tab-4)

```
<!-- Breadcrumb -->
<ul class="px-breadcrumb reset-list flexbox pdx-20 pdy-10 bg-white border-r-sm mb-15 bx-shadow-dp-1 color-gray custom-icon" data-type="font-icon">
    <li><a href="#">Home</a></li>
    <li><a href="#">Services</a></li>
    <li>Web Design</li>
</ul>
<!-- // Breadcrumb -->
```

```
/*===> Custom Font-Icon Example <===*/
.px-breadcrumb.custom-icon {--divider-icon : '\f101';}
```

## Breadcrumb with icons

[HTML](#tab-5)

[CSS](#tab-6)

```
<!-- Breadcrumb -->
<ul class="px-breadcrumb reset-list flexbox pdx-20 pdy-10 bg-white border-r-sm mb-15 bx-shadow-dp-1 color-gray custom-icon" data-type="font-icon">
    <li><a href="#" class="tx-icon far fa-home">Home</a></li>
    <li><a href="#" class="tx-icon far fa-cog">Services</a></li>
    <li class="tx-icon far fa-star">Web Design</li>
</ul>
<!-- // Breadcrumb -->
```

```
/*===> Custom Font-Icon Example <===*/
.px-breadcrumb.custom-icon {--divider-icon : '\f101';}
```
