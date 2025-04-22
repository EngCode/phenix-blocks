---
title: "Flexbox Grid"
date: 2025-01-04
---

## Flex-box Grid

Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve-column system, five default responsive tiers, Sass variables and mixin, and dozens of predefined classes.

## How it Works

Breaking it down, here’s how the grid system comes together:

- **The grid system supports [five responsive breakpoints](https://phenixthemes.com/pds-docs/responsive-break-points/).** Breakpoints are based on `min-width` media queries, meaning they affect that breakpoint and all those above it (e.g., `.col-sm-4` applies to `sm`, `md`, `lg`, and `xl`). This means you can control container and column sizing and behavior by each breakpoint.

- **Containers center and horizontally pad your content.** Use `.container` a responsive pixel width, `.container-fluid` for `width: 100%` across all viewports and devices, or a responsive container (e.g., `.container-md`) for a combination of fluid and pixel widths.

- **Rows are wrappers for columns.** support modifier classes to uniformly apply column sizing and [gutter classes](https://phenixthemes.com/pds-docs/gutters/) to change the spacing of your content.

- **Columns are incredibly flexible.** There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column classes indicate the number of template columns to span (e.g., `col-4` spans four). `width`s are set in percentages so you always have the same relative sizing.

- **Gutters are also responsive and customizable.** [Gutter classes are available](https://phenixthemes.com/pds-docs/gutters/) across all breakpoints, with all the same sizes as our [margin and padding spacing](https://phenixthemes.com/pds-docs/spacing/). Change horizontal gutters with `.gpx-*` classes, vertical gutters with, `.gpy-*` or all gutters with `.gp-*` classes. `.gp-0` is also available to remove gutters.

Be aware of the limitations and [bugs around flexbox](https://github.com/philipwalton/flexbugs), like the [inability to use some HTML elements as flex containers](https://github.com/philipwalton/flexbugs#flexbug-9).

##### Example :

here is an example of a grid layout for auto equal columns using container as wrapper and row to contain, pad, layouts auto adaptive three columns across all breakpoints,

```
<!-- Container -->
<div class="container">
    <!-- Row -->
    <div class="row">
        <!-- Column -->
        <div class="col">Column</div>
        <!-- Column -->
        <div class="col">Column</div>
        <!-- Column -->
        <div class="col">Column</div>
        <!-- // Column -->
    </div>
    <!-- // Row -->
</div>
<!-- // Container -->
```

## Grid options

the grid system can adapt across all five default breakpoints, and any breakpoints you customize. The five default grid tiers are as mentioned and explained in the [Responsive section](https://phenixthemes.com/pds-docs/responsive-break-points/),

As noted above, each of these breakpoints has its container, unique class prefix, and modifiers. Here’s how the grid changes across these breakpoints :

<figure>

| Feature | xSmall | Small | Medium | Large | xLarge |
| --- | --- | --- | --- | --- | --- |
| **Breakpoint** | \> 0 | \> 576 | \> 768 | \> 1200 | \> 1366 |
| **Class Prefix** | `col-*` | col-sm-\* | col-md-\* | col-lg-\* | col-xl-\* |
| **\# of columns** | 12 Columns | —– | —– | —– | —– |
| **Gutter width** | 1.875rem | —– | —– | —– | —– |
| **Custom gutters** | Supported | —– | —– | —– | —– |
| **Nestable** | Supported | —– | —– | —– | —– |
| **Column ordering** | Supported | —– | —– | —– | —– |

<figcaption>

Note : ( —— ) refer to the same value as the column before.

</figcaption>

</figure>

## Auto-layout columns

Utilize breakpoints-specific column classes for easy column sizing without an explicit numbered class like .col-sm-6 For example, here are two grid layouts that apply to every device and viewport, from xs to xl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.

```
<!-- Container -->
<div class="container">
    <!-- Row -->
    <div class="row mb-5">
        <!-- Column -->
        <div class="col">1 of 2</div>
        <!-- Column -->
        <div class="col">2 of 2</div>
        <!-- // Column -->
    </div>
    <!-- // Row -->

    <!-- Row -->
    <div class="row">
        <!-- Column -->
        <div class="col">1 of 3</div>
        <!-- Column -->
        <div class="col">2 of 3</div>
        <!-- Column -->
        <div class="col">3 of 3</div>
        <!-- // Column -->
    </div>
    <!-- // Row -->
</div>
<!-- // Container -->
```

## One column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.

```
<!-- Container -->
<div class="container">
    <!-- Row -->
    <div class="row">
        <!-- Column -->
        <div class="col">1 of 3</div>
        <!-- Column -->
        <div class="col-6">Wider Column</div>
        <!-- Column -->
        <div class="col">3 of 3</div>
        <!-- // Column -->
    </div>
    <!-- // Row -->
</div>
<!-- // Container -->
```

## Adaptive Columns

Use col-{breakpoint}-auto classes to size columns based on the natural width of their content.

```
<!-- Container -->
<div class="container">
    <!-- Row -->
    <div class="row">
        <!-- Column -->
        <div class="col-3">1 of 3</div>
        <!-- Column -->
        <div class="col-md-auto">Adaptive Column</div>
        <!-- Column -->
        <div class="col-4 tx-align-center">3 of 3</div>
        <!-- // Column -->
    </div>
    <!-- // Row -->
</div>
<!-- // Container -->
```

## Responsive classes

grid includes five breakpoints of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

## All breakpoints

For grids that are the same from the smallest of devices to the largest, use the .col and .col-\* classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to .col.

```
<!-- Container -->
<div class="container">
    <!-- Row -->
    <div class="row">
        <!-- Column -->
        <div class="col">Col</div>
        <!-- Column -->
        <div class="col">Col</div>
        <!-- Column -->
        <div class="col">Col</div>
        <!-- Column -->
        <div class="col">Col</div>
        <!-- Column -->
        <div class="col">Col</div>
        <!-- // Column -->
    </div>
    <!-- // Row -->

    <!-- Row -->
    <div class="row">
        <!-- Column -->
        <div class="col-8">Col-8</div>
        <!-- Column -->
        <div class="col-4">Col-4</div>
        <!-- // Column -->
    </div>
    <!-- // Row -->
</div>
<!-- // Container -->
```

## Stacked to horizontal

Using a single set of .col-sm-\* classes, you can create a basic grid system that starts stacked and becomes horizontal at the small breakpoint (sm).

```
<!-- Container -->
<div class="container">
    <!-- Row -->
    <div class="row">
        <!-- Column -->
        <div class="col-sm-8">col-sm-8</div>
        <!-- Column -->
        <div class="col-sm-4">col-sm-4</div>
        <!-- // Column -->
    </div>
    <!-- // Row -->

    <!-- Row -->
    <div class="row">
        <!-- Column -->
        <div class="col-sm">col-sm</div>
        <!-- Column -->
        <div class="col-sm">col-sm</div>
        <!-- Column -->
        <div class="col-sm">col-sm</div>
        <!-- Column -->
        <div class="col-sm">col-sm</div>
        <!-- // Column -->
    </div>
    <!-- // Row -->
</div>
<!-- // Container -->
```

## Mix and match

Don’t want your columns to simply stack in some grid breakpoints? Use a combination of different classes for each breakpoint as needed. See the example below for a better idea of how it all works.

```
<!-- Container -->
<div class="container">
    <!-- Row -->
    <div class="row">
        <!-- Column -->
        <div class="col-md-8">.col-md-8</div>
        <!-- Column -->
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        <!-- // Column -->
    </div>
    <!-- // Row -->

    <!-- Row -->
    <div class="row">
        <!-- Column -->
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        <!-- Column -->
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        <!-- Column -->
        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        <!-- // Column -->
    </div>
    <!-- // Row -->
</div>
<!-- // Container -->
```

## Row columns

Use the responsive .row-cols-\* classes to quickly set the number of columns that best render your content and layout. Whereas normal .col-\* classes apply to the individual columns (e.g., .col-md-4), the row columns classes are set on the parent .row as a default for contained columns. You can give the columns their natural width.

Use these row columns classes to quickly create basic grid layouts or to control your card layouts and override when needed at the column level.

| Feature | xSmall | Small | Medium | Large | xLarge |
| --- | --- | --- | --- | --- | --- |
| **Breakpoint** | \> 0 | \> 576 | \> 768 | \> 1200 | \> 1366 |
| **Class Prefix** | `.row-cols-*` | .row-cols-sm-\* | .row-cols-md-\* | .row-cols-lg-\* | .row-cols-xl-\* |
| **\# of columns** | 12 Columns | —– | —– | —– | —– |
| **gutters** | Supported | —– | —– | —– | —– |
| **Nested grid** | Supported | —– | —– | —– | —– |

```
<!-- Row -->
<div class="row row-cols-5">
    <!-- Column -->
    <div class="col">.row-cols-5</div>
    <!-- Column -->
    <div class="col">.row-cols-5</div>
    <!-- Column -->
    <div class="col">.row-cols-5</div>
    <!-- Column -->
    <div class="col">.row-cols-5</div>
    <!-- Column -->
    <div class="col">.row-cols-5</div>
    <!-- // Column -->
</div>
<!-- // Row -->

<!-- Row -->
<div class="row row-cols-7">
    <!-- Column -->
    <div class="col">.row-cols-7</div>
    <!-- Column -->
    <div class="col">.row-cols-7</div>
    <!-- Column -->
    <div class="col">.row-cols-7</div>
    <!-- Column -->
    <div class="col">.row-cols-7</div>
    <!-- Column -->
    <div class="col">.row-cols-7</div>
    <!-- Column -->
    <div class="col">.row-cols-7</div>
    <!-- // Column -->
</div>
<!-- // Row -->
```

## Nested Grid

Don’t want your columns to simply stack in some grid breakpoints? Use a combination of different classes for each breakpoint as needed. See the example below for a better idea of how it all works.

```
<!-- Container -->
<div class="container">
    <!-- Row -->
    <div class="row">
        <!-- Lvl 1 Column -->
        <div class="col-sm-3">Level 1: .col-sm-3</div>

        <!-- Lvl 1 Column -->
        <div class="col-sm-9">
            Level 1: .col-sm-9
            <!-- Lvl 2 Row -->
            <div class="row">
                <!-- Lvl 2 Column -->
                <div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
                <!-- Lvl 2 Column -->
                <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
                <!-- // Lvl 2 Column -->
            </div>
            <!-- // Lvl 2 Row -->
        </div>
        <!-- // Lvl 1 Column -->
    </div>
    <!-- // Row -->
</div>
<!-- // Container -->
```

## Masonry Grid

Phenix JavaScript has a utility to activate the masonry mode on the flexbox grid system but it only works if the columns are equally sized and you can activate it by adding a class name .px-masonry to the .row element and in case you need to reload the js you can do it by Phenix(document).utilities('libraries');

[HTML](#tab-1)

[Javascript](#tab-2)

```
<!-- Row -->
<div class="row px-masonry">...</div>
<!-- // Row -->
```

```
Phenix(document).utilities('libraries');
```

## Grid SASS Modules

if your working from the [sass source code](https://phenixthemes.com/pds-docs/installation/) grid directory in src/sass contains the [grid system](https://phenixthemes.com/pds-docs/category/grid-layout/) modules such as flexbox, the main properties for [creating layout and columns](https://phenixthemes.com/pds-docs/category/grid-layout/), and the [utilities](https://phenixthemes.com/pds-docs/grid-utilities/) that are related to and affect layout you can customize the grid system and extend it from these [sass files modules](https://phenixthemes.com/pds-docs/sass-overview/) the code inside the files is well organized and self-documented.

```
💼-your-project[phenix]
    📂-src/sass
        📄...
        📁-grid
           📄_main.scss
           📄_columns.scss
           📄_utilities.scss
        📁-...
```
