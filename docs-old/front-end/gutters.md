---
title: "Gutters"
date: 2025-01-04
---

## Gaps and Gutters

Gutters are the padding between your columns, used to responsively space and align content in the grid system.

## How it Works

- **Gutters are the gaps between column content, created by horizontal `padding`.** We set `padding-right` and `padding-left` on each column, and use negative `margin` to offset that at the start and end of each row to align content.

- **Gutters are responsive and customizable.** [Gutter classes are available](https://phenixthemes.com/pds-docs/gutters/) across all breakpoints, with all the same sizes as our [margin and padding spacing](https://phenixthemes.com/pds-docs/spacing/). Change horizontal gutters with `.gpx-*` classes, vertical gutters with, or all gutters with `.gp-*` classes. `.gp-0` is also available to remove gutters.

- **Gutters start at `1.875rem` (`30px`) wide.** This allows us to match our grid to the [padding and margin spacers](https://phenixthemes.com/pds-docs/spacing/) scale.

- **Gutters can be responsively adjusted.** Use breakpoint-specific gutter classes to modify horizontal gutters, vertical gutters, and all gutters.

## Responsive Classes

the gutters [utilities](https://phenixthemes.com/pds-docs/category/utilities/) also support [responsive](https://phenixthemes.com/pds-docs/responsive-break-points/) classes which can apply the gutters at [specific breakpoints you can learn the responsive classes and breakpoint patterns](https://phenixthemes.com/pds-docs/responsive-break-points/) from the table below.

| Feature | xSmall | Small | Medium | Large | xLarge |
| --- | --- | --- | --- | --- | --- |
| **Breakpoint** | \> 0 | \> 576 | \> 768 | \> 1200 | \> 1366 |
| **Class Prefix** | `gp-*` | `gp-sm-*` | `gp-md-*` | `gp-lg-*` | `gp-xl-*` |
| **Horizontal** **prefix** | `gpx-*` | `gpx-sm-*` | `gpx-md-*` | `gpx-lg-*` | `gpx-xl-*` |
| **Vertical prefix** | `gpy-*` | `gpy-sm-*` | `gpy-md-*` | `gpy-lg-*` | `gpy-xl-*` |
| **Element** | `Grid Row` | —— | —— | —— | —— |

## Horizontal gutters

.gpx-\* classes can be used to control the horizontal gutter widths. The .container or .container-fluid a parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the following example, we’ve increased the padding with: .pdx-\*: with the same value of the .gpx-\*.

```
<!-- Container -->
<div class="container">
    <!-- Row -->
    <div class="row">
        <!-- Column -->
        <div class="col-6">
            <div class="content-box">Default Gutter</div>
        </div>
        <!-- Column -->
        <div class="col-6">
            <div class="content-box">Default Gutter</div>
        </div>
        <!-- // Column -->
    </div>
    <!-- // Row -->
</div>
<!-- // Container -->
```

## Vertical gutters

.gpy-\* classes can be used to control the vertical gutter widths. Like the horizontal gutters, the vertical gutters use margin-bottom to make space between columns vertically with the default page flow,

and it can cause some overflow below the .row at the end of a page, If this occurs, you can add a class name .gpy-fix to the .row with a wrapper around .row with the .overflow-hidden class name.

```
<!-- Container -->
<div class="container overflow-hidden">
    <!-- Row -->
    <div class="row gpy-30 gpy-fix">
        <!-- Column -->
        <div class="col-6">
            <div class="content-box">.gpy-30</div>
        </div>
        <!-- Column -->
        <div class="col-6">
            <div class="content-box">.gpy-30</div>
        </div>
        <!-- // Column -->
    </div>
    <!-- // Row -->
</div>
<!-- // Container -->
```

## Horizontal & Vertical

.gp-\* classes can be used to control the horizontal gutter widths, for the following example we use a smaller gutter width, so there won’t be a need to add the .overflow-hidden wrapper class.

```
<!-- Container -->
<div class="container">
    <!-- Row -->
    <div class="row gp-10">
        <!-- Column -->
        <div class="col-6">
            <div class="content-box">.gp-10</div>
        </div>
        <!-- Column -->
        <div class="col-6">
            <div class="content-box">.gp-10</div>
        </div>
        <!-- // Column -->
    </div>
    <!-- // Row -->
</div>
<!-- // Container -->
```

## No gutters

The gutters between columns in our predefined grid classes can be removed with .gpx-0. This removes the negative margins from .row and the horizontal padding from all immediate children columns.

**Need an edge-to-edge design?** Drop the parent `.container` or `.container-fluid`.

In practice, here’s how it looks. Note you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).

```
<!-- Row -->
<div class="row gpx-0">
    <!-- Column -->
    <div class="col-6">
        <div class="content-box">.gpx-0</div>
    </div>
    <!-- Column -->
    <div class="col-6">
        <div class="content-box">.gpx-0</div>
    </div>
    <!-- // Column -->
</div>
<!-- // Row -->
```

## Classes Cheatsheet

in the table below you will find all available class names for gutters that you can use it with our grid system, and you can use any of the classes in responsive pattern `{className}-{breakpoint}-*`.

| All | Horizontal | Vertical | Element Type |
| --- | --- | --- | --- |
| gp-0 | gpx-0 | —— | .row, .flexbox |
| gp-10 | gpx-10 | gpy-10 | .row, .flexbox |
| gp-15 | gpx-15 | gpy-15 | .row, .flexbox |
| gp-20 | gpx-20 | gpy-20 | .row, .flexbox |
| gp-30 | gpx-30 | gpy-30 | .row, .flexbox |
| gp-40 | gpx-40 | gpy-40 | .row, .flexbox |
| gp-50 | gpx-50 | gpy-50 | .row, .flexbox |
| gpy-fix | —— | gpy-fix | .row, .flexbox |
