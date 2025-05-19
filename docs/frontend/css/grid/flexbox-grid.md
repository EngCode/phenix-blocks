# Flexbox Row

The Flexbox Row is a fundamental layout component in the Phenix Design System that creates flexible grid structures. It uses CSS Flexbox to provide powerful, responsive layouts with intuitive alignment and spacing controls.

## Overview

The `.row` class creates a flex container that automatically arranges its children (columns) in a row. It provides built-in gutters and supports various alignment options, flow direction controls, and responsive behaviors.

Key features:
- Based on CSS Flexbox for modern layout capabilities
- Built-in gutter system for spacing between columns
- Comprehensive alignment controls for both horizontal and vertical axes
- Responsive modifiers for different screen sizes
- Support for directional flow and ordering

## Basic Usage

```html
<div class="row">
  <div class="col-6">Column 1</div>
  <div class="col-6">Column 2</div>
</div>
```

## Row Properties

The `.row` class inherits the `%flexbox` placeholder selector which provides:

- `display: flex` - Creates a flexbox container
- `flex-wrap: wrap` - Allows columns to wrap to the next line when they don't fit
- Default horizontal gutter of 30px (configurable)
- Children get `flex-shrink: 0` by default to prevent unwanted shrinking

## Alignment Options

The Phenix Design System provides multiple alignment classes to control how columns are positioned within a row:

### Grid Alignment (Both Axes)

```html
<!-- Align items to the start (top-left) -->
<div class="row align-start">...</div>

<!-- Center items both horizontally and vertically -->
<div class="row align-center">...</div>

<!-- Align items to the end (bottom-right) -->
<div class="row align-end">...</div>
```

### Horizontal Alignment

```html
<!-- Align items to the start (left in LTR, right in RTL) -->
<div class="row align-start-x">...</div>

<!-- Center items horizontally -->
<div class="row align-center-x">...</div>

<!-- Align items to the end (right in LTR, left in RTL) -->
<div class="row align-end-x">...</div>

<!-- Space evenly around items -->
<div class="row align-around">...</div>

<!-- Space between items (first and last align with edges) -->
<div class="row align-between">...</div>
```

### Vertical Alignment

```html
<!-- Align items to the top -->
<div class="row align-start-y">...</div>

<!-- Center items vertically -->
<div class="row align-center-y">...</div>

<!-- Align items to the bottom -->
<div class="row align-end-y">...</div>
```

## Flow Direction

You can control the flow direction of items within a row:

```html
<!-- Reverse the order of items (right-to-left) -->
<div class="row flow-reverse">...</div>

<!-- Stack items vertically (column layout) -->
<div class="row flow-columns">...</div>

<!-- Stack items vertically in reverse order -->
<div class="row flow-columns-reverse">...</div>

<!-- Prevent items from wrapping -->
<div class="row flow-nowrap">...</div>

<!-- Force wrapping (default, but can be used to reset) -->
<div class="row flow-wrap">...</div>
```

## Gutters (Spacing)

Control the spacing between columns with gutter classes:

```html
<!-- Default gutter (30px) -->
<div class="row">...</div>

<!-- No gutter -->
<div class="row gp-0">...</div>

<!-- Medium gutter (20px) -->
<div class="row gp-20">...</div>

<!-- Large gutter (40px) -->
<div class="row gp-40">...</div>

<!-- Only horizontal gutter (X-axis) -->
<div class="row gpx-30">...</div>

<!-- Only vertical gutter (Y-axis) -->
<div class="row gpy-30">...</div>
```

Available gutter sizes: 0, 10, 15, 20, 25, 30, 35, 40, 45, 50 (in pixels, converted to REM units).

### Vertical Gutter Fix

When using vertical gutters, you might need to fix overflow issues:

```html
<div class="row gpy-30 gpy-fix">...</div>
```

The `gpy-fix` class applies a negative margin to counteract the space created by vertical gutters.

## Responsive Behaviors

All alignment, flow, and gutter options can be applied conditionally at different breakpoints:

```html
<!-- Center alignment only on small screens and up -->
<div class="row align-sm-center">...</div>

<!-- Column layout on medium screens -->
<div class="row flow-md-columns">...</div>

<!-- Different gutters for different screen sizes -->
<div class="row gp-15 gp-md-30 gp-xl-50">...</div>
```

Available responsive prefixes:
- No prefix: All screen sizes
- `-sm`: Small screens (≥ 576px)
- `-md`: Medium screens (≥ 768px)
- `-lg`: Large screens (≥ 1200px)
- `-xl`: Extra large screens (≥ 1400px)

## Individual Column Control

In addition to row-level controls, you can also apply flex properties to individual columns:

```html
<div class="row">
  <div class="col-6 align-self-start">Top aligned</div>
  <div class="col-6 align-self-center">Center aligned</div>
  <div class="col-6 align-self-end">Bottom aligned</div>
  <div class="col-6 order-1">Displayed first</div>
</div>
```

## Example: Complex Layout

```html
<div class="container">
  <!-- Centered content with medium gutters -->
  <div class="row align-center gp-20">
    <!-- Left sidebar on large screens, full width on small -->
    <div class="col-12 col-lg-3 order-lg-1 order-3">
      Sidebar content
    </div>
    
    <!-- Main content area -->
    <div class="col-12 col-lg-6 order-lg-2 order-1">
      Main content
    </div>
    
    <!-- Right sidebar on large screens, full width on small -->
    <div class="col-12 col-lg-3 order-lg-3 order-2">
      Additional info
    </div>
  </div>
</div>
```

This layout will stack vertically on small screens with a specific order, then organize into a three-column layout on large screens with a different order.
