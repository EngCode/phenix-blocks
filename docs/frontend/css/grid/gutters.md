# Gutters

Gutters are the spacing between columns in the Phenix Design System grid system. They help create consistent spacing between content areas and improve layout readability.

## Overview

Gutters in the Phenix Design System are implemented using a combination of negative margins on rows and padding on columns. This approach ensures proper alignment with container edges while maintaining consistent spacing between columns.

Key features of the gutter system:
- Default horizontal gutter of 30px between columns
- Configurable gutter sizes (from 0 to 50px)
- Support for both horizontal and vertical gutters
- Responsive control with breakpoint-specific classes
- Special utilities for fixing overflow with vertical gutters

## Basic Usage

By default, rows in the Phenix Design System have a horizontal gutter of 30px between columns:

```html
<!-- Default horizontal gutter (30px) -->
<div class="row">
  <div class="col-6">Column with default gutter</div>
  <div class="col-6">Column with default gutter</div>
</div>
```

## Gutter Sizes

You can control the spacing between columns using gutter classes:

```html
<!-- No gutter (0px) -->
<div class="row gp-0">
  <div class="col-6">No space between columns</div>
  <div class="col-6">No space between columns</div>
</div>

<!-- Small gutter (15px) -->
<div class="row gp-15">
  <div class="col-6">Small gutter</div>
  <div class="col-6">Small gutter</div>
</div>

<!-- Large gutter (40px) -->
<div class="row gp-40">
  <div class="col-6">Large gutter</div>
  <div class="col-6">Large gutter</div>
</div>
```

Available gutter sizes: 0, 10, 15, 20, 25, 30, 35, 40, 45, and 50 (in pixels, converted to REM units).

## Directional Gutters

The framework allows for controlling horizontal and vertical gutters independently:

### Horizontal Gutters Only

```html
<!-- Horizontal gutter only (X-axis, 30px) -->
<div class="row gpx-30">
  <div class="col-6">Horizontal gutter only</div>
  <div class="col-6">Horizontal gutter only</div>
</div>
```

### Vertical Gutters Only

```html
<!-- Vertical gutter only (Y-axis, 30px) -->
<div class="row gpy-30">
  <div class="col-6">Column with vertical spacing</div>
  <div class="col-6">Column with vertical spacing</div>
  <div class="col-6">Column with vertical spacing</div>
  <div class="col-6">Column with vertical spacing</div>
</div>
```

### Combined Gutters (Both Directions)

```html
<!-- Both horizontal and vertical gutters (20px) -->
<div class="row gp-20">
  <div class="col-6">Column with both gutters</div>
  <div class="col-6">Column with both gutters</div>
  <div class="col-6">Column with both gutters</div>
  <div class="col-6">Column with both gutters</div>
</div>
```

## Vertical Gutter Fix

When using vertical gutters, there might be overflow issues with the bottom margin of the last row. The `gpy-fix` class applies a negative margin to fix this problem:

```html
<!-- Vertical gutter with overflow fix -->
<div class="row gpy-30 gpy-fix">
  <div class="col-6">First row column</div>
  <div class="col-6">First row column</div>
  <div class="col-6">Second row column</div>
  <div class="col-6">Second row column</div>
</div>
```

## Responsive Gutters

Gutters can be specified for different screen sizes using breakpoint-specific classes:

```html
<!-- Different gutters for different screen sizes -->
<div class="row gp-10 gp-md-20 gp-lg-30">
  <div class="col-6">Column with responsive gutters</div>
  <div class="col-6">Column with responsive gutters</div>
</div>
```

In this example:
- Small screens will have 10px gutters
- Medium screens will have 20px gutters
- Large screens will have 30px gutters

Available responsive prefixes:
- No prefix: All screen sizes (default)
- `-sm`: Small screens (≥ 576px)
- `-md`: Medium screens (≥ 768px)
- `-lg`: Large screens (≥ 1024px)
- `-xl`: Extra large screens (≥ 1200px)

## How Gutters Work

Gutters in the Phenix Design System are implemented using a combination of:

1. **Negative margins on the row**: The row gets negative left and right margins equal to half the gutter size
2. **Padding on the columns**: Each column gets left and right padding equal to half the gutter size

This approach ensures:
- Proper alignment with container edges
- Consistent spacing between columns
- Support for responsive adjustments

For vertical gutters, a similar approach is used with bottom margins on columns.

## Individual Column Control

You can also remove gutters from specific columns using no-gap classes:

```html
<div class="row">
  <div class="col-6">Regular column with gutters</div>
  <div class="col-6 col-no-gap">No horizontal gutters</div>
</div>
```

This can be useful for creating certain design patterns where some columns need to touch while others maintain spacing.

## Responsive No-Gap Columns

The no-gap classes also support responsive variants:

```html
<div class="row">
  <div class="col-6">Regular column</div>
  <div class="col-6 col-md-no-gap">No gutters on medium screens and up</div>
</div>
```

Available responsive no-gap classes:
- `col-no-gap`: No gutters on all screen sizes
- `col-sm-no-gap`: No gutters on small screens and up
- `col-md-no-gap`: No gutters on medium screens and up
- `col-lg-no-gap`: No gutters on large screens and up
- `col-xl-no-gap`: No gutters on extra large screens and up

## Examples

### News Grid with Different Gutters

```html
<div class="container">
  <!-- Featured stories (larger gutters) -->
  <div class="row gp-30">
    <div class="col-12 col-md-8">Main featured story</div>
    <div class="col-12 col-md-4">Secondary featured story</div>
  </div>
  
  <!-- Regular stories (smaller gutters) -->
  <div class="row gp-15">
    <div class="col-6 col-lg-3">Story 1</div>
    <div class="col-6 col-lg-3">Story 2</div>
    <div class="col-6 col-lg-3">Story 3</div>
    <div class="col-6 col-lg-3">Story 4</div>
  </div>
</div>
```

### Gallery Grid with No Gutters

```html
<div class="container">
  <!-- Image gallery with no gutters for seamless appearance -->
  <div class="row gp-0">
    <div class="col-6 col-md-4 col-lg-3">Image 1</div>
    <div class="col-6 col-md-4 col-lg-3">Image 2</div>
    <div class="col-6 col-md-4 col-lg-3">Image 3</div>
    <div class="col-6 col-md-4 col-lg-3">Image 4</div>
    <div class="col-6 col-md-4 col-lg-3">Image 5</div>
    <div class="col-6 col-md-4 col-lg-3">Image 6</div>
    <div class="col-6 col-md-4 col-lg-3">Image 7</div>
    <div class="col-6 col-md-4 col-lg-3">Image 8</div>
  </div>
</div>
```

### Mixed Gutter Layout

```html
<div class="container">
  <div class="row">
    <!-- Sidebar with no horizontal gap to the container -->
    <div class="col-12 col-lg-3 col-lg-no-gap">Sidebar</div>
    
    <!-- Main content with regular gutters -->
    <div class="col-12 col-lg-9">
      <div class="row gp-20">
        <div class="col-12">Main content</div>
        <div class="col-6">Sub content 1</div>
        <div class="col-6">Sub content 2</div>
      </div>
    </div>
  </div>
</div>
```
