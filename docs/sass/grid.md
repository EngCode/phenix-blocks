# Grid System

The Phenix grid system is a powerful and flexible layout system built on CSS Flexbox that allows you to create responsive layouts with ease. It features a 12-column grid with multiple container sizes, responsive breakpoints, and comprehensive alignment utilities.

## Container Types

Phenix provides several container types to suit different layout needs:

| Container         | Description                                    | Max Width                          |
|-------------------|------------------------------------------------|-----------------------------------|
| `.container`      | Standard container with responsive width       | 1200px (75rem)                    |
| `.container-fluid`| Full-width container                          | 100%                              |
| `.container-xs`   | Extra small container                         | 360px (xs), 480px (sm and above)  |
| `.container-sm`   | Small container                               | 567px, 640px (md and above)       |
| `.container-md`   | Medium container                              | 768px, 1024px (lg and above)      |
| `.container-lg`   | Large container                               | 97% (<1450px), 1400px (≥1450px)   |
| `.container-xl`   | Extra large container                         | 97% (<1450px), 1400px (≥1450px)   |

### Container Usage

```html
<div class="container">
  <!-- Content here -->
</div>

<div class="container-fluid">
  <!-- Full-width content -->
</div>
```

## Row and Columns

The grid uses `.row` for horizontal groups of columns and `.col-*` classes for defining column widths:

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">Column 1</div>
    <div class="col-12 col-md-6 col-lg-4">Column 2</div>
    <div class="col-12 col-md-6 col-lg-4">Column 3</div>
  </div>
</div>
```

### Column Classes

The grid supports 12 columns with responsive variants:

- `.col-{1-12}` - Extra small devices (< 576px)
- `.col-sm-{1-12}` - Small devices (≥ 576px)
- `.col-md-{1-12}` - Medium devices (≥ 768px)
- `.col-lg-{1-12}` - Large devices (≥ 1024px)
- `.col-xl-{1-12}` - Extra large devices (≥ 1200px)

### Auto Width Columns

For flexible width columns that take up available space:

- `.col` and `.col-auto` - Extra small devices
- `.col-sm` and `.col-sm-auto` - Small devices
- `.col-md` and `.col-md-auto` - Medium devices
- `.col-lg` and `.col-lg-auto` - Large devices
- `.col-xl` and `.col-xl-auto` - Extra large devices

## Row Columns

You can also set equal-width columns with the `.row-cols-*` classes:

```html
<div class="row row-cols-2 row-cols-md-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>
```

This creates 2 columns on extra small devices and 4 columns on medium and larger devices.

## Alignment

The grid system includes extensive alignment utilities:

### Grid Alignment

- `.align-start`, `.align-center`, `.align-end` - Align both horizontally and vertically
- `.align-sm-start`, `.align-md-center`, etc. - Responsive variants

### Horizontal Alignment

- `.align-start-x` - Align columns to the start (left in LTR)
- `.align-center-x` - Center columns horizontally 
- `.align-end-x` - Align columns to the end (right in LTR)
- `.align-around` - Space columns evenly with space around
- `.align-between` - Space columns evenly with space between

### Vertical Alignment

- `.align-start-y` - Align columns to the top
- `.align-center-y` - Center columns vertically
- `.align-end-y` - Align columns to the bottom

### Self Alignment

For individual columns:

- `.align-self-start` - Align column to the top
- `.align-self-center` - Center column vertically
- `.align-self-end` - Align column to the bottom

## Flow Direction

Control the flow of items within a row:

- `.flow-reverse` - Reverse the order of columns (right to left in LTR)
- `.flow-columns` - Stack columns vertically
- `.flow-columns-reverse` - Stack columns vertically in reverse order
- `.flow-nowrap` - Prevent columns from wrapping
- `.flow-wrap` - Allow columns to wrap

All flow classes have responsive variants (e.g., `.flow-md-reverse`).

## Column Order

Change the visual order of columns:

- `.order-{0-24}` - Set the order of columns
- `.order-sm-{0-24}`, `.order-md-{0-24}`, etc. - Responsive variants

## Gutters

Control the spacing between columns:

- `.gp-{0,10,15,20,25,30,35,40,45,50}` - Set both horizontal and vertical gutters
- `.gpx-{0,10,15,20,25,30,35,40,45,50}` - Set only horizontal gutters
- `.gpy-{0,10,15,20,25,30,35,40,45,50}` - Set only vertical gutters

All gutter classes have responsive variants (e.g., `.gp-md-30`).

### No Gap Columns

Remove padding from individual columns:

- `.col-no-gap` - Remove padding from column
- `.col-sm-no-gap`, `.col-md-no-gap`, etc. - Responsive variants

## Growth and Shrink Behavior

Control how columns grow or shrink:

- `.flex-grow-on` - Allow column to grow
- `.flex-grow-off` - Prevent column from growing
- `.flex-shrink-on` - Allow column to shrink
- `.flex-shrink-off` - Prevent column from shrinking

All flex grow/shrink classes have responsive variants.

## Examples

### Basic Grid Layout

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4">
      <!-- 12 columns on mobile, 4 columns on medium and up -->
    </div>
    <div class="col-12 col-md-8">
      <!-- 12 columns on mobile, 8 columns on medium and up -->
    </div>
  </div>
</div>
```

### Complex Layout with Alignment

```html
<div class="container">
  <div class="row align-center">
    <div class="col-12 col-md-6 align-self-start">
      <!-- Aligned to top -->
    </div>
    <div class="col-12 col-md-6 align-self-end">
      <!-- Aligned to bottom -->
    </div>
  </div>
</div>
```

### Responsive Order

```html
<div class="container">
  <div class="row">
    <div class="col-md-4 order-md-2">
      <!-- Second on medium and up -->
    </div>
    <div class="col-md-4 order-md-1">
      <!-- First on medium and up -->
    </div>
    <div class="col-md-4 order-md-3">
      <!-- Third on medium and up -->
    </div>
  </div>
</div>
```

### Customized Gutters

```html
<div class="container">
  <div class="row gpx-15 gpy-30">
    <div class="col-md-6">
      <!-- 15px horizontal and 30px vertical gutters -->
    </div>
    <div class="col-md-6">
      <!-- 15px horizontal and 30px vertical gutters -->
    </div>
  </div>
</div>
``` 