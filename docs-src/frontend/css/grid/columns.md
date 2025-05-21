# Columns

Columns are the individual content containers within a row in the Phenix Design System grid. They provide flexible width control and are used to create responsive layouts that adapt to different screen sizes.

## Overview

The column system in Phenix Design System is built on a 12-column grid, allowing for precise control over layout proportions across different screen sizes. Columns must be placed inside a `.row` element to work correctly.

The framework offers several types of columns:
- Fixed-width columns (`col-*`) - Take up a specific number of grid units
- Auto-width columns (`col-auto`) - Take up only as much width as needed
- Adaptive columns (`col` or `col-adaptive`) - Grow to fill available space
- Equal-width columns (`row-cols-*`) - Create equal-width columns for all children

## Basic Usage

```html
<!-- Basic 12-column grid example -->
<div class="row">
  <div class="col-6">50% width (6/12)</div>
  <div class="col-6">50% width (6/12)</div>
</div>

<!-- Three columns of different widths -->
<div class="row">
  <div class="col-3">25% width (3/12)</div>
  <div class="col-6">50% width (6/12)</div>
  <div class="col-3">25% width (3/12)</div>
</div>
```

## Column Types

### Fixed-Width Columns

Fixed-width columns take up a specific fraction of the row width, based on a 12-column grid:

```html
<div class="row">
  <div class="col-1">8.33% width</div>
  <div class="col-2">16.67% width</div>
  <div class="col-3">25% width</div>
  <div class="col-4">33.33% width</div>
  <div class="col-5">41.67% width</div>
  <div class="col-6">50% width</div>
  <div class="col-7">58.33% width</div>
  <div class="col-8">66.67% width</div>
  <div class="col-9">75% width</div>
  <div class="col-10">83.33% width</div>
  <div class="col-11">91.67% width</div>
  <div class="col-12">100% width</div>
</div>
```

### Auto-Width Columns

Auto-width columns adjust to the natural width of their content:

```html
<div class="row">
  <div class="col-auto">Width depends on content</div>
  <div class="col">Takes up remaining space</div>
</div>
```

### Adaptive Columns

Adaptive columns automatically share the available space:

```html
<!-- Three equal-width columns -->
<div class="row">
  <div class="col">Equal 1/3 (grows to fill space)</div>
  <div class="col">Equal 1/3 (grows to fill space)</div>
  <div class="col">Equal 1/3 (grows to fill space)</div>
</div>

<!-- Alternatively, use col-adaptive -->
<div class="row">
  <div class="col-adaptive">Equal width</div>
  <div class="col-adaptive">Equal width</div>
</div>
```

### Equal-Width Column Groups

The `row-cols-*` classes specify how many equal-width columns to fit in a row:

```html
<!-- Two equal-width columns -->
<div class="row row-cols-2">
  <div>Equal 1/2 width</div>
  <div>Equal 1/2 width</div>
</div>

<!-- Three equal-width columns -->
<div class="row row-cols-3">
  <div>Equal 1/3 width</div>
  <div>Equal 1/3 width</div>
  <div>Equal 1/3 width</div>
</div>

<!-- Four equal-width columns -->
<div class="row row-cols-4">
  <div>Equal 1/4 width</div>
  <div>Equal 1/4 width</div>
  <div>Equal 1/4 width</div>
  <div>Equal 1/4 width</div>
</div>
```

## Responsive Columns

One of the most powerful features of the Phenix grid system is its responsive behavior. You can specify different column widths for different screen sizes using breakpoint-specific classes:

```html
<div class="row">
  <!-- Full width on small screens, half width on medium and larger screens -->
  <div class="col-12 col-md-6">Responsive column</div>
  
  <!-- Full width on small screens, half width on medium and larger screens -->
  <div class="col-12 col-md-6">Responsive column</div>
</div>
```

Available breakpoint prefixes:
- No prefix: All screen sizes (default/mobile-first)
- `-sm`: Small screens (≥ 576px)
- `-md`: Medium screens (≥ 768px)
- `-lg`: Large screens (≥ 1200px)
- `-xl`: Extra large screens (≥ 1400px)

### Responsive Example - Content Layout

This example creates a responsive layout with a main content area and a sidebar:

```html
<div class="row">
  <!-- Main content: full width on small screens, 8/12 on medium+ -->
  <div class="col-12 col-md-8">
    Main content
  </div>
  
  <!-- Sidebar: full width on small screens, 4/12 on medium+ -->
  <div class="col-12 col-md-4">
    Sidebar
  </div>
</div>
```

### Responsive Example - Dashboard Layout

This example creates a complex dashboard layout that reflows based on screen size:

```html
<div class="row">
  <!-- Stats Panel: 6/12 on small, 3/12 on medium, 2/12 on large -->
  <div class="col-6 col-md-3 col-lg-2">Stats 1</div>
  <div class="col-6 col-md-3 col-lg-2">Stats 2</div>
  <div class="col-6 col-md-3 col-lg-2">Stats 3</div>
  <div class="col-6 col-md-3 col-lg-2">Stats 4</div>
  
  <!-- Dashboard Main: 12/12 on small/medium, 4/12 on large -->
  <div class="col-12 col-lg-4">
    Main dashboard
  </div>
</div>
```

## Column Properties

Columns also support other flexbox properties:

### No Gutters for Specific Columns

```html
<div class="row">
  <div class="col-6">Regular column with gutters</div>
  <div class="col-6 col-no-gap">No horizontal gutters</div>
</div>
```

### Responsive No Gutters

```html
<div class="row">
  <div class="col-6">Regular column</div>
  <div class="col-6 col-md-no-gap">No gutters on medium screens and up</div>
</div>
```

## Column Behavior

By default, columns in the Phenix Design System have the following properties:

- `flex-shrink: 0` - Prevents columns from shrinking below their specified width
- Horizontal padding that creates gutters between columns (determined by the parent row's gutter setting)
- Vertical margins when vertical gutters are applied to the row
- The ability to wrap when the total width of columns exceeds the row width

## Advanced Usage - Combining Column Types

You can mix column types for more complex layouts:

```html
<div class="row">
  <!-- Fixed width column -->
  <div class="col-4">33.33% width</div>
  
  <!-- Adaptive columns share the remaining space equally -->
  <div class="col">Equal share of remaining space</div>
  <div class="col">Equal share of remaining space</div>
</div>
```

In this example, the first column takes up 33.33% of the width, and the two remaining columns evenly divide the remaining 66.67% of space.
