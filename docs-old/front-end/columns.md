---
title: "Columns"
date: 2025-01-04
---

## Grid Columns

Learn how to modify columns with a handful of options for alignment, ordering, and offsetting thanks to our [flexbox grid system](https://phenixthemes.com/pds-docs/flexbox-grid/). Plus, see how to use column classes to manage the widths of non-grid elements.

## How it Works

Heads up! Be sure to [read the Grid page](https://phenixthemes.com/pds-docs/flexbox-grid/) first before diving into how to modify and customize your grid columns.

- **Columns build on the grid’s flexbox architecture.** Flexbox means we have options for changing individual columns and modifying groups of columns at the row level. You choose how columns grow, shrink, or otherwise change.

- **When building grid layouts, all content goes in columns.** The hierarchy of Bootstrap’s grid goes from a [container](https://phenixthemes.com/pds-docs/containers/) to a row to a column to your content. On rare occasions, you may combine content and column, but be aware there can be unintended consequences.

- **Phenix includes predefined classes for creating fast, responsive layouts.** With [five breakpoints](https://phenixthemes.com/pds-docs/responsive-break-points/) and a dozen columns at each grid breakpoint, we have dozens of classes already built for you to create your desired layouts. [This can be disabled via Sass](https://phenixthemes.com/pds-docs/sass-overview/) if you wish.

## Sorting & Order

Use flexbox flow sorting to reverse and define how the flow of the grid will go there is three classes to sort the flow \[ .flow-reverse, .flow-columns, .flow-columns-reverse\], which can be used to reverse columns order, you can also use .order-\* to re-order each column individually by a number from 0 to 24.

| Option | xSmall | Small | Medium | Large | xLarge |
| --- | --- | --- | --- | --- | --- |
| **Breakpoint** | \> 0 | \> 576 | \> 768 | \> 1200 | \> 1366 |
| **Flow prefix** | `flow-*` | `flow-sm-*` | `flow-md-*` | `flow-lg-*` | `flow-xl-*` |
| **Order prefix** | `order-*` | `order-sm-*` | `order-md-*` | `order-lg-*` | `order-xl-*` |
| **Order Limit** | 24 columns | —— | —— | —— | —— |

```
<!-- Flow Reverse -->
<div class="row flow-reverse">
    <!-- Column -->
    <div class="col-4">col n1</div>
    <!-- Column -->
    <div class="col-4">col n2</div>
    <!-- Column -->
    <div class="col-4">col n3</div>
    <!-- // Column -->
</div>
<!-- // Flow Reverse -->

<!-- Stacked Flow -->
<div class="row flow-columns">
    <!-- Column -->
    <div class="col-4">col n1</div>
    <!-- Column -->
    <div class="col-4">col n2</div>
    <!-- // Column -->
</div>
<!-- // Stacked Flow -->

<!-- Stacked Flow Reverse -->
<div class="row flow-columns-reverse">
    <!-- Column -->
    <div class="col-4">col n1</div>
    <!-- Column -->
    <div class="col-4">col n2</div>
    <!-- // Column -->
</div>
<!-- // Stacked Flow Reverse -->
```

## Alignment

Use flexbox alignment utilities to vertically and horizontally align columns, Phenix comes with predefined alignment classes for flexbox grids that can be applied at any specific breakpoint, or through all breakpoints at once,

## Responsive Classes

flexbox has 5 different values for alignment the classes are named with each of these values : \[start, center, end, space-around, space-between\], which set how columns are aligned inside the row container and here is a table for the class names pattern.

| Feature | xSmall | Small | Medium | Large | xLarge |
| --- | --- | --- | --- | --- | --- |
| **Breakpoint** | \> 0 | \> 576 | \> 768 | \> 1200 | \> 1366 |
| **Class Prefix** | `align-*` | `align-sm-*` | `align-md-*` | `align-lg-*` | `align-xl-*` |
| **Vertical prefix** | `align-*-y` | `align-sm-*-y` | `align-md-*-y` | `align-lg-*-y` | `align-xl-*-y` |
| **Horizontal prefix** | `align-*-x` | `align-sm-*-x` | `align-md-*-x` | `align-lg-*-x` | `align-xl-*-x` |
| **Self Alignment** | `align-self-*` | `align-self-sm-*` | `align-self-md-*` | `align-self-lg-*` | `align-self-xl-*` |

## Alignment All \[x/y\]

Use flexbox alignment utilities to vertically and horizontally align columns.

```
<!-- Flex-Start -->
<div class="row align-start">
    <!-- Column -->
    <div class="col-4">align-start</div>
    <!-- // Column -->
</div>
<!-- // Flex-Start -->

<!-- Flex-Center -->
<div class="row align-center">
    <!-- Column -->
    <div class="col-4">align-center</div>
    <!-- // Column -->
</div>
<!-- // Flex-Center -->

<!-- Flex-End -->
<div class="row align-end">
    <!-- Column -->
    <div class="col-4">align-end</div>
    <!-- // Column -->
</div>
<!-- // Flex-End  -->
```

## Horizontal alignment

Use flexbox alignment utilities to horizontally align columns.

```
<!-- Horizontal Start -->
<div class="row align-start-x">
    <!-- Column -->
    <div class="col-6">align-start-x</div>
    <!-- // Column -->
</div>
<!-- // Horizontal Start  -->

<!-- Horizontal Center -->
<div class="row align-center-x">
    <!-- Column -->
    <div class="col-6">align-center-x</div>
    <!-- // Column -->
</div>
<!-- // Horizontal Center  -->

<!-- Horizontal End -->
<div class="row align-end-x">
    <!-- Column -->
    <div class="col-6">align-end-x</div>
    <!-- // Column -->
</div>
<!-- // Horizontal End  -->

<!-- Space Around -->
<div class="row align-around">
    <!-- Column -->
    <div class="col-4">align-around</div>
    <!-- Column -->
    <div class="col-6">align-around</div>
    <!-- // Column -->
</div>
<!-- // Space Around  -->

<!-- Space Between -->
<div class="row align-between">
    <!-- Column -->
    <div class="col-4">align-between</div>
    <!-- Column -->
    <div class="col-6">align-between</div>
    <!-- // Column -->
</div>
<!-- // Space Between  -->
```

## Vertical alignment

Use flexbox alignment utilities to vertically align columns.

```
<!-- Vertical Start -->
<div class="row align-start-y">
    <!-- Column -->
    <div class="col-6">align-start-y</div>
    <!-- // Column -->
</div>
<!-- // Vertical Start  -->

<!-- Vertical Center -->
<div class="row align-center-y">
    <!-- Column -->
    <div class="col-6">align-center-y</div>
    <!-- // Column -->
</div>
<!-- // Vertical Center  -->

<!-- Vertical End -->
<div class="row align-end-y">
    <!-- Column -->
    <div class="col-6">align-end-y</div>
    <!-- // Column -->
</div>
<!-- // Vertical End  -->
```

## Self Alignments

Use flexbox self-alignment utilities to vertically align each column individually.

```
<!-- Self-Alignment -->
<div class="row">
    <!-- Col Vertical Start -->
    <div class="col-6 align-self-start">align-self-start</div>
    <!-- Col Vertical Center -->
    <div class="col-6 align-self-center">align-self-center</div>
    <!-- Col Vertical End -->
    <div class="col-6 align-self-end">align-self-end</div>
    <!-- // Column -->
</div>
<!-- // Self-Alignment  -->
```

## Classes Cheat-sheet

in the table below you will find all available class names for flex-box alignment you can use it with our grid system.

| All Directions | Class Name | Responsive Class | Element Type |
| --- | --- | --- | --- |
| Flex-Start | .align-start | align-{breakpoint}-start | .row, .flexbox |
| Flex-Center | .align-center | align-{breakpoint}-center | .row, .flexbox |
| Flex-End | .align-end | align-{breakpoint}-end | .row, .flexbox |
| Self-Alignment | .align-self-\* | align-self-{breakpoint}-\* | .col, .col-\* |

| Horizontally | Class Name | Responsive Class | Element Type |
| --- | --- | --- | --- |
| Flex-Start | .align-start-x | align-{breakpoint}-start-x | .row, .flexbox |
| Flex-Center | .align-center-x | align-{breakpoint}-center-x | .row, .flexbox |
| Flex-End | .align-end-x | align-{breakpoint}-end-x | .row, .flexbox |
| Space-Around | .align-around | align-{breakpoint}-around | .row, .flexbox |
| Space-Between | .align-between | align-{breakpoint}-between | .row, .flexbox |

| Vertically | Class Name | Responsive Class | Element Type |
| --- | --- | --- | --- |
| Flex-Start | .align-start-y | align-{breakpoint}-start-y | .row, .flexbox |
| Flex-Center | .align-center-y | align-{breakpoint}-center-y | .row, .flexbox |
| Flex-End | .align-end-y | align-{breakpoint}-end-y | .row, .flexbox |
