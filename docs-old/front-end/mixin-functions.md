---
title: "Mixin &amp; Functions"
date: 2025-01-04
---

## SASS Mixin

Learn how to work around [Phenix Sass](https://phenixthemes.com/pds-docs/sass-overview/) Mixin, which is a collection of sass functionality to create different stuff compatible with [phenix and old browsers](https://phenixthemes.com/pds-docs/compatibility/) like [responsive breakpoints](https://phenixthemes.com/pds-docs/responsive-break-points/), [logical properties](https://phenixthemes.com/pds-docs/rtl-ltr/), PX to REM Converter, etc.

## Overview

sass mixin is divided into each function as a separate module and it all goes into src/sass/assets/\_mixin.scss file you can include each function/mixin individually or all together as in phenix.scss and phenix-rtl.scss sass main files and as mentioned above the mixin is core modules to build different stuff that has [compatibility with old browsers](https://phenixthemes.com/pds-docs/compatibility/) such as [logical properties](https://phenixthemes.com/pds-docs/rtl-ltr/) etc.

```
💼-your-project[phenix]
    📂-src/sass
        📁-assets
           📁-mixin
           📄_mixin.scss
           📄...
```

## Breakpoints

the breakpoints mixin are a collection of mixin to create media query breakpoints for [multiple screen sizes](https://phenixthemes.com/pds-docs/responsive-break-points/) that match phenix [responsive layout](https://phenixthemes.com/pds-docs/category/grid-layout/) and [utilities](https://phenixthemes.com/pds-docs/category/utilities/), [components](https://phenixthemes.com/pds-docs/category/components/), etc.

and each screen size has a start point as minimum width and an end point as the maximum width and toggle the by adding the parameter "down" to the mixin function [you can learn more about Breakpoints in Responsive Section](https://phenixthemes.com/pds-docs/responsive-break-points/).

```
/*====> Extra Small [0 => 480]px Screens Media Query <====*/
@include xSmall() {
    /*===> Set CSS for Extra Small Screens and Up //*/
};

@include xSmall('down') {
    /*===> Set CSS for Extra Small Screens and Down //*/
};

/*====> Small [576 => 700]px Screens Media Query <====*/
@include small() {
    /*===> Set CSS for small screens and Up //*/
};

@include small('down') {
    /*===> Set CSS for small screens and Down //*/
};

/*====> Medium [768 => 1100]px Screens Media Query <====*/
@include medium() {
    /*===> Set CSS for medium screens and Up //*/
};

@include medium('down') {
    /*===> Set CSS for medium screens and Down //*/
};

/*====> Large [1200 => 1366]px Screens Media Query <====*/
@include large() {
    /*===> Set CSS for large screens and Up //*/
};

@include large('down') {
    /*===> Set CSS for large screens and Down //*/
};

/*====> xLarge [1400 => 2500]px Screens Media Query <====*/
@include xlarge() {
    /*===> Set CSS for xlarge screens and Up //*/
};

@include xlarge('down') {
    /*===> Set CSS for xlarge screens and Down //*/
};
```

## Utilities Repeater

utility repeater is a simple mixin to create multiple classes with increasing values from point to point for example to create a series of classes that set the padding from 0 to 100px like padding-5 or padding-30, padding-100 utility classes,

```
/*==== Basic Usage ====*/
@include Repeater ($min, $max, $class-name ,$property, $unit, $increase-step);

/*==== Padding Example ====*/
@include Repeater (0, 100, 'pd', 'padding', 'px', 5);

/*****
** the example above will create series of class names
** from pd-0 with padding: 0; value
** and increase each class by 5 which means pd-0, pd-5, pd-10 etc..
** to pd-100 with padding: 100px; as value.
*****/
```

## REM Calculator

REM Calculator function converts pixels to the CSS unit REM value based on the default font size of the document which in phenix is based on [rem CSS variables](https://phenixthemes.com/pds-docs/css-customize/), you can use it to set values with pixels and it will always return a rem value, you can use it like the example below.

```
/*==== Basic Usage ====*/
REM($px_size, $rem_base);

/*==== Example ====*/
.class-name {
    margin: REM(30, 16);
    padding: REM(30);
}

/*****
** the example above will calculate 30px from 16px REM base size
** which will print 1.875rem as value calculated
*****/
```

## Logical Margin

logical margin is a mixin that let you set a CSS Logical margin block and inline, you have margin\_block($value, $position); to set margin vertically to any element, we have margin\_inline($value, $position); to set margin horizontally to any element, and you can learn more from the example below

```
/*==== Set Margin Top and Bottom Logically ====*/
.class-name {
   @include margin_block(30px, 'both');
}

/*==== Set Margin Top Logically ====*/
.class-name {
   @include margin_block(30px, 'start');
}

/*==== Set Margin Bottom Logically ====*/
.class-name {
   @include margin_block(30px, 'end');
}
```

```
/*==== Set Margin Left and Right Logically ====*/
.class-name {
   @include margin_inline(30px, 'both');
}

/*==== Set Margin Left [ltr] Logically ====*/
.class-name {
   @include margin_inline(30px, 'start');
}

/*==== Set Margin Right [ltr] Logically ====*/
.class-name {
   @include margin_inline(30px, 'end');
}
```

## Logical Padding

logical padding is a mixin that let you set a CSS Logical padding block and inline, you have padding\_block($value, $position); to set padding vertically to any element, we have padding\_inline($value, $position); to set padding horizontally to any element, and you can learn more from the example below

```
/*==== Set Padding Top and Bottom Logically ====*/
.class-name {
   @include padding_block(30px, 'both');
}

/*==== Set Padding Top Logically ====*/
.class-name {
   @include padding_block(30px, 'start');
}

/*==== Set Padding Bottom Logically ====*/
.class-name {
   @include padding_block(30px, 'end');
}
```

```
/*==== Set Padding Left and Right Logically ====*/
.class-name {
   @include padding_inline(30px, 'both');
}

/*==== Set Padding Left [ltr] Logically ====*/
.class-name {
   @include padding_inline(30px, 'start');
}

/*==== Set Padding Right [ltr] Logically ====*/
.class-name {
   @include padding_inline(30px, 'end');
}
```
