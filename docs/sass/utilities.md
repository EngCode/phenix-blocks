# Utilities

Phenix provides a comprehensive set of utility classes that allow you to rapidly build custom components and interfaces without writing custom CSS. These utility classes follow consistent naming patterns and can be combined to create complex layouts and designs.

## Spacing Utilities

### Margin

Control the margin around elements using these utility classes:

| Class | Description |
|-------|-------------|
| `.mg-{0-100}` | Add margin to all sides |
| `.mx-{0-100}` | Add horizontal margins (left and right) |
| `.my-{0-100}` | Add vertical margins (top and bottom) |
| `.mt-{0-100}` | Add top margin |
| `.mb-{0-100}` | Add bottom margin |
| `.ms-{0-100}` | Add start margin (left in LTR, right in RTL) |
| `.me-{0-100}` | Add end margin (right in LTR, left in RTL) |

The numbers (0-100) represent the size in pixels and are available in increments of 5 (0, 5, 10, 15, etc. up to 100).

Examples:

```html
<div class="mg-20">20px margin on all sides</div>
<div class="mx-15">15px horizontal margins</div>
<div class="my-30">30px vertical margins</div>
<div class="mt-10 mb-20">10px top margin, 20px bottom margin</div>
<div class="ms-15 me-25">15px start margin, 25px end margin</div>
```

#### Auto Margins

Center or push elements with auto margins:

```html
<div class="mgx-auto">Horizontally centered</div>
<div class="ms-auto">Pushed to the end</div>
<div class="me-auto">Pushed to the start</div>
```

#### Responsive Margins

Control margins at different breakpoints with responsive variants:

```html
<div class="mt-10 mt-md-20 mt-lg-30">
  10px top margin on mobile, 20px on medium screens, 30px on large screens
</div>
```

### Padding

Control the padding inside elements using these utility classes:

| Class | Description |
|-------|-------------|
| `.pd-{0-100}` | Add padding to all sides |
| `.pdx-{0-100}` | Add horizontal padding (left and right) |
| `.pdy-{0-100}` | Add vertical padding (top and bottom) |
| `.pdt-{0-100}` | Add top padding |
| `.pdb-{0-100}` | Add bottom padding |
| `.pds-{0-100}` | Add start padding (left in LTR, right in RTL) |
| `.pde-{0-100}` | Add end padding (right in LTR, left in RTL) |

Examples:

```html
<div class="pd-20">20px padding on all sides</div>
<div class="pdx-15">15px horizontal padding</div>
<div class="pdy-30">30px vertical padding</div>
<div class="pdt-10 pdb-20">10px top padding, 20px bottom padding</div>
<div class="pds-15 pde-25">15px start padding, 25px end padding</div>
```

#### Custom Variable Padding

Use CSS variables for custom padding:

```html
<div class="pdt-custom" style="--pdt: 42px">Custom top padding</div>
<div class="pdb-custom" style="--pdb: 42px">Custom bottom padding</div>
<div class="pds-custom" style="--pds: 42px">Custom start padding</div>
<div class="pde-custom" style="--pde: 42px">Custom end padding</div>
```

#### Responsive Padding

Control padding at different breakpoints with responsive variants:

```html
<div class="pd-10 pd-md-20 pd-lg-30">
  10px padding on mobile, 20px on medium screens, 30px on large screens
</div>
```

## Position Utilities

Control how elements are positioned on the page:

```html
<div class="position-relative">Relative positioning</div>
<div class="position-absolute">Absolute positioning</div>
<div class="position-fixed">Fixed positioning</div>
<div class="position-sticky">Sticky positioning</div>
<div class="position-static">Static positioning</div>
```

### Position Values

Control the position of absolutely positioned elements:

```html
<div class="position-absolute top-0">Positioned at the top</div>
<div class="position-absolute bottom-0">Positioned at the bottom</div>
<div class="position-absolute start-0">Positioned at the start</div>
<div class="position-absolute end-0">Positioned at the end</div>
<div class="position-absolute center-x">Horizontally centered</div>
<div class="position-absolute center-y">Vertically centered</div>
<div class="position-absolute center-xy">Centered in both dimensions</div>
```

### Z-Index

Control the stacking order of elements:

```html
<div class="z-1">Z-index 1</div>
<div class="z-10">Z-index 10</div>
<div class="z-100">Z-index 100</div>
<div class="z-1000">Z-index 1000</div>
```

## Border Utilities

Add borders to elements with these utility classes:

```html
<div class="border-1">1px border on all sides</div>
<div class="border-top-1">1px border on top</div>
<div class="border-bottom-1">1px border on bottom</div>
<div class="border-start-1">1px border on start side</div>
<div class="border-end-1">1px border on end side</div>
```

### Border Radius

Round the corners of elements:

```html
<div class="radius-sm">Small border radius</div>
<div class="radius-md">Medium border radius</div>
<div class="radius-lg">Large border radius</div>
<div class="radius-xl">Extra large border radius</div>
<div class="radius-xxl">Extra extra large border radius</div>
<div class="radius-rounded">Fully rounded (pill shape)</div>
<div class="radius-circle">Circle shape (requires equal width and height)</div>
```

### Border Colors

Control the color of borders:

```html
<div class="border-1 border-primary">Primary color border</div>
<div class="border-1 border-secondary">Secondary color border</div>
<div class="border-1 border-success">Success color border</div>
<div class="border-1 border-danger">Danger color border</div>
<div class="border-1 border-warning">Warning color border</div>
<div class="border-1 border-info">Info color border</div>
<div class="border-1 border-gray">Gray color border</div>
<div class="border-1 border-dark">Dark color border</div>
<div class="border-1 border-white">White color border</div>
```

## Effects Utilities

### Shadows

Add shadows to elements:

```html
<div class="shadow-sm">Small shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
<div class="shadow-inner">Inner shadow</div>
```

### Opacity

Control the opacity of elements:

```html
<div class="opacity-0">Fully transparent (opacity 0)</div>
<div class="opacity-25">25% opacity</div>
<div class="opacity-50">50% opacity</div>
<div class="opacity-75">75% opacity</div>
<div class="opacity-100">Fully opaque (opacity 100)</div>
```

## Display Utilities

Control how elements are displayed:

```html
<div class="display-block">Block display</div>
<div class="display-inline">Inline display</div>
<div class="display-inline-block">Inline-block display</div>
<div class="display-flex">Flex display</div>
<div class="display-inline-flex">Inline-flex display</div>
<div class="display-none">Hidden (display none)</div>
```

### Responsive Display

Control display at different breakpoints:

```html
<div class="display-none display-md-block">
  Hidden on mobile, block on medium screens and up
</div>
```

## Visibility Utilities

Control element visibility without affecting layout:

```html
<div class="visible">Visible element</div>
<div class="invisible">Invisible element (still takes up space)</div>
<div class="hidden">Hidden element (doesn't take up space)</div>
```

## Hover Effects

Apply effects on hover:

```html
<div class="hover-shadow">Shadow on hover</div>
<div class="hover-opacity">Opacity change on hover</div>
<div class="hover-scale">Scale up on hover</div>
<div class="hover-up">Move up on hover</div>
```

## Sizing Utilities

Control the width and height of elements:

```html
<div class="width-25">25% width</div>
<div class="width-50">50% width</div>
<div class="width-75">75% width</div>
<div class="width-100">100% width</div>
<div class="height-100">100% height</div>
<div class="min-height-100">100px minimum height</div>
<div class="max-width-1200">1200px maximum width</div>
```

## Responsive Utilities

Most utility classes in Phenix have responsive variants by adding breakpoint prefixes:

- No prefix: Applied at all screen sizes
- `-sm`: Applied at small screens (≥576px) and up
- `-md`: Applied at medium screens (≥768px) and up
- `-lg`: Applied at large screens (≥1024px) and up
- `-xl`: Applied at extra large screens (≥1200px) and up

Example:

```html
<div class="display-block display-md-flex align-md-center justify-md-between">
  <!-- Block on mobile, flex with centered alignment on medium screens and up -->
</div>
```

This powerful responsive system allows you to create layouts that adapt to different screen sizes without writing custom CSS. 