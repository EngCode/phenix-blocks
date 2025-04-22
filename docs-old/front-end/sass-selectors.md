---
title: "Sass Selectors"
date: 2025-01-04
---

## SASS Variables

Learn how to work around Phenix Sass variables to build and customize dynamic layout and style which mainly take effect on the [document flow](https://phenixthemes.com/pds-docs/rtl-ltr/).

## Overview

phenix has only a little collection of variables that help write custom css/sass code that acts dynamically with page flow direction RTL, and LTR these variables exist to support old browsers, and fact that phenix has a version for each you can learn more about that in [Compatibility](https://phenixthemes.com/pds-docs/compatibility/), [RTL/LTR](https://phenixthemes.com/pds-docs/rtl-ltr/), [SASS Overview](https://phenixthemes.com/pds-docs/sass-overview/) documents

## Page Direction

first, we have the $direction variable which represents the current page direction in phenix.scss the value should be ltr and in phenix-rtl.scss the value should be rtl, in the next code you can learn multiple cases of using that variable

```
/*====> Set Current Page Direction [ltr] to any Element <====*/
.class_name {
    direction: $direction;
}

/*====> Check for Current Page Direction <====*/
@if ($direction == 'ltr') {...}
```

## Reverse Direction

and another variable $direction-reverse which represents the current page direction reverse value in phenix.scss the value should be rtl and in phenix-rtl.scss the value should be ltr, in the next code you can learn multiple cases of using that variable

```
/*====> Set Reversed Page Direction [rtl] to any Element <====*/
.class_name {
    direction: $direction-reverse;
}

/*====> Check for Reversed Page Direction <====*/
@if ($direction-reverse == 'rtl') {...}
```

## Direction Start

and we have $direction-start which represents the current page direction start point value in phenix.scss the value should be left and in phenix-rtl.scss the value should be right, in the next code you can learn multiple cases of using that variable

```
/*====> Set float as Current Page Direction [ltr] Start Point [left] <====*/
.class_name {
    float: $direction-start;
}

/*====> Set Current Start Point [left] as Property <====*/
.class_name {
    #{$direction-start}: 0px;
}
```

## Direction End

finally, we have $direction-end which represents the current page direction endpoint value in phenix.scss the value should be right and in phenix-rtl.scss the value should be left, in the next code you can learn multiple cases of using that variable

```
/*====> Set float as Current Page Direction [ltr] End Point [right] <====*/
.class_name {
    float: $direction-end;
}

/*====> Set Current End Point [right] as Property <====*/
.class_name {
    #{$direction-end}: 0px;
}
```

## Breakpoints

breakpoints variables help to define the start and the end point of screens size and it used only for creating media query [mixin](https://phenixthemes.com/pds-docs/sass-mixins/) which you can learn more about it in [Mixin and Functions](https://phenixthemes.com/pds-docs/sass-mixins/) document, and these variables exist in ./sass/assets/mixin/\_breakpoints.scss, where you can modify it.

```
/*==== Small Screens Points ====*/
$xs-end   : 480px; /*===> Max xSmall Screen Width */
$sm-start : 576px; /*===> Min Small Screen Width */
$sm-end   : 640px; /*===> Max Small Screen Width */

/*==== Medium Screens Points ====*/
$md-start : 768px;  /*===> Min Medium Screen Width */
$md-end   : 1100px; /*===> Max Medium Screen Width */

/*==== Large Screens Points ====*/
$lg-start : 1200px; /*===> Min Large Screen Width */
$lg-end   : 1366px; /*===> Max Large Screen Width */

/*==== xLarge Screens Points ====*/
$xl-start : 1400px; /*===> Min xLarge Screen Width */
$xl-end   : 2500px; /*===> Max xLarge Screen Width */
```

## Cheat Sheet

a sheet table of all Sass selectors available in phenix.

| Selector | Description |
| --- | --- |
| `$direction` | current page direction \[`ltr`, `rtl`\] |
| `$direction-reverse` | current page direction reverse \[`ltr`, `rtl`\] |
| `$direction-start` | current page direction start point \[`right`, `left`\] |
| `$direction-end` | current page direction endpoint \[`right`, `left`\] |
| `$xs-end` | max extra small screen width |
| `$sm-start` | min small screen width |
| `$sm-end` | max small screen width |
| `$md-start` | min medium screen width |
| `$md-end` | max medium screen width |
| `$lg-start` | min large screen width |
| `$lg-end` | max large screen width |
| `$xl-start` | min extra large screen width |
| `$xl-end` | max extra large screen width |
