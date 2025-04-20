# Spacing Utilities

## Overview

The Phenix Design System provides a comprehensive set of spacing utility classes that allow you to control margins and padding throughout your project. These utilities follow a consistent naming convention and offer precise control over spacing in your layouts.

## Spacing Categories

The spacing utilities in Phenix are organized into the following categories:

1. **Margin Utilities** - Control the outer spacing around elements
2. **Padding Utilities** - Control the inner spacing within elements
3. **Directional Spacing** - Apply spacing to specific sides only (top, right, bottom, left)
4. **Auto Margins** - Special utilities for alignment with auto margins
5. **Responsive Spacing** - Adjust spacing based on viewport size

## Spacing Scale

Phenix uses a consistent spacing scale based on REM units to ensure spacing is proportional and responds to the base font size. Available spacing values in pixels (converted to REM in the CSS):

- `0` - 0px
- `5` - 5px 
- `10` - 10px
- `15` - 15px
- `20` - 20px
- `25` - 25px
- `30` - 30px
- `35` - 35px
- `40` - 40px
- `45` - 45px
- `50` - 50px
- `55` - 55px
- `60` - 60px
- `65` - 65px
- `70` - 70px
- `75` - 75px
- `80` - 80px
- `85` - 85px
- `90` - 90px
- `95` - 95px
- `100` - 100px

## Margin Utilities

### All Sides Margin

Apply margin to all sides of an element:

```html
<div class="mg-0">No margin</div>
<div class="mg-5">5px margin on all sides</div>
<div class="mg-10">10px margin on all sides</div>
<div class="mg-15">15px margin on all sides</div>
<div class="mg-20">20px margin on all sides</div>
<div class="mg-25">25px margin on all sides</div>
<div class="mg-30">30px margin on all sides</div>
<!-- Additional values: 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100 -->
```

### Horizontal Margin (X-axis)

Apply margin to the left and right sides:

```html
<div class="mx-0">No horizontal margin</div>
<div class="mx-5">5px horizontal margin</div>
<div class="mx-10">10px horizontal margin</div>
<div class="mx-15">15px horizontal margin</div>
<div class="mx-20">20px horizontal margin</div>
<div class="mx-25">25px horizontal margin</div>
<div class="mx-30">30px horizontal margin</div>
<!-- Additional values: 35, 40, 45, 50, etc. -->
```

### Vertical Margin (Y-axis)

Apply margin to the top and bottom sides:

```html
<div class="my-0">No vertical margin</div>
<div class="my-5">5px vertical margin</div>
<div class="my-10">10px vertical margin</div>
<div class="my-15">15px vertical margin</div>
<div class="my-20">20px vertical margin</div>
<div class="my-25">25px vertical margin</div>
<div class="my-30">30px vertical margin</div>
<!-- Additional values: 35, 40, 45, 50, etc. -->
```

### Directional Margins

Apply margin to specific sides:

```html
<!-- Top Margin -->
<div class="mt-0">No top margin</div>
<div class="mt-5">5px top margin</div>
<div class="mt-10">10px top margin</div>
<div class="mt-15">15px top margin</div>
<div class="mt-20">20px top margin</div>
<div class="mt-30">30px top margin</div>

<!-- Bottom Margin -->
<div class="mb-0">No bottom margin</div>
<div class="mb-5">5px bottom margin</div>
<div class="mb-10">10px bottom margin</div>
<div class="mb-15">15px bottom margin</div>
<div class="mb-20">20px bottom margin</div>
<div class="mb-30">30px bottom margin</div>

<!-- Start Margin (left in LTR, right in RTL) -->
<div class="ms-0">No start margin</div>
<div class="ms-5">5px start margin</div>
<div class="ms-10">10px start margin</div>
<div class="ms-15">15px start margin</div>
<div class="ms-20">20px start margin</div>
<div class="ms-30">30px start margin</div>

<!-- End Margin (right in LTR, left in RTL) -->
<div class="me-0">No end margin</div>
<div class="me-5">5px end margin</div>
<div class="me-10">10px end margin</div>
<div class="me-15">15px end margin</div>
<div class="me-20">20px end margin</div>
<div class="me-30">30px end margin</div>
```

### Auto Margins

Use auto margins for alignment and spacing:

```html
<!-- Horizontal Auto Margin (centers block elements) -->
<div class="mgx-auto">Horizontally centered</div>

<!-- Directional Auto Margins -->
<div class="ms-auto">Auto start margin (pushes element to the end)</div>
<div class="me-auto">Auto end margin (pushes element to the start)</div>
```

## Padding Utilities

### All Sides Padding

Apply padding to all sides of an element:

```html
<div class="pd-0">No padding</div>
<div class="pd-5">5px padding on all sides</div>
<div class="pd-10">10px padding on all sides</div>
<div class="pd-15">15px padding on all sides</div>
<div class="pd-20">20px padding on all sides</div>
<div class="pd-25">25px padding on all sides</div>
<div class="pd-30">30px padding on all sides</div>
<!-- Additional values: 35, 40, 45, 50, etc. -->
```

### Horizontal Padding (X-axis)

Apply padding to the left and right sides:

```html
<div class="pdx-0">No horizontal padding</div>
<div class="pdx-5">5px horizontal padding</div>
<div class="pdx-10">10px horizontal padding</div>
<div class="pdx-15">15px horizontal padding</div>
<div class="pdx-20">20px horizontal padding</div>
<div class="pdx-25">25px horizontal padding</div>
<div class="pdx-30">30px horizontal padding</div>
<!-- Additional values: 35, 40, 45, 50, etc. -->
```

### Vertical Padding (Y-axis)

Apply padding to the top and bottom sides:

```html
<div class="pdy-0">No vertical padding</div>
<div class="pdy-5">5px vertical padding</div>
<div class="pdy-10">10px vertical padding</div>
<div class="pdy-15">15px vertical padding</div>
<div class="pdy-20">20px vertical padding</div>
<div class="pdy-25">25px vertical padding</div>
<div class="pdy-30">30px vertical padding</div>
<!-- Additional values: 35, 40, 45, 50, etc. -->
```

### Directional Padding

Apply padding to specific sides:

```html
<!-- Top Padding -->
<div class="pdt-0">No top padding</div>
<div class="pdt-5">5px top padding</div>
<div class="pdt-10">10px top padding</div>
<div class="pdt-15">15px top padding</div>
<div class="pdt-20">20px top padding</div>
<div class="pdt-30">30px top padding</div>

<!-- Bottom Padding -->
<div class="pdb-0">No bottom padding</div>
<div class="pdb-5">5px bottom padding</div>
<div class="pdb-10">10px bottom padding</div>
<div class="pdb-15">15px bottom padding</div>
<div class="pdb-20">20px bottom padding</div>
<div class="pdb-30">30px bottom padding</div>

<!-- Start Padding (left in LTR, right in RTL) -->
<div class="pds-0">No start padding</div>
<div class="pds-5">5px start padding</div>
<div class="pds-10">10px start padding</div>
<div class="pds-15">15px start padding</div>
<div class="pds-20">20px start padding</div>
<div class="pds-30">30px start padding</div>

<!-- End Padding (right in LTR, left in RTL) -->
<div class="pde-0">No end padding</div>
<div class="pde-5">5px end padding</div>
<div class="pde-10">10px end padding</div>
<div class="pde-15">15px end padding</div>
<div class="pde-20">20px end padding</div>
<div class="pde-30">30px end padding</div>
```

## Custom Spacing

For more specific control, you can use custom spacing variables:

```html
<!-- Custom margin with CSS variables -->
<div class="mt-custom" style="--mt: 12px">Custom top margin</div>
<div class="mb-custom" style="--mb: 12px">Custom bottom margin</div>
<div class="ms-custom" style="--ms: 12px">Custom start margin</div>
<div class="me-custom" style="--me: 12px">Custom end margin</div>

<!-- Custom padding with CSS variables -->
<div class="pdt-custom" style="--pdt: 12px">Custom top padding</div>
<div class="pdb-custom" style="--pdb: 12px">Custom bottom padding</div>
<div class="pds-custom" style="--pds: 12px">Custom start padding</div>
<div class="pde-custom" style="--pde: 12px">Custom end padding</div>
```

## Responsive Spacing

All spacing utilities have responsive variants that apply at specific breakpoints:

```html
<!-- Different margins at different screen sizes -->
<div class="mb-10 mb-md-20 mb-lg-30">
  10px bottom margin on small screens,
  20px on medium screens,
  30px on large screens
</div>

<!-- Different padding at different screen sizes -->
<div class="pd-10 pd-md-20 pd-lg-30">
  10px padding on small screens,
  20px on medium screens, 
  30px on large screens
</div>

<!-- Custom responsive spacing -->
<div class="mt-custom" 
     style="--mt: 10px; --mt-md: 20px; --mt-lg: 30px">
  Custom responsive top margin
</div>
```

Available responsive prefixes:
- No prefix: All screen sizes (default/mobile-first)
- `-md`: Medium screens (≥ 768px)
- `-lg`: Large screens (≥ 1024px)
- `-xl`: Extra large screens (≥ 1200px)

## Grid Gaps

For grid and flexbox layouts, Phenix provides gap utilities:

```html
<!-- Grid gaps (spacing between grid/flexbox children) -->
<div class="gp-10">10px gap in all directions</div>
<div class="gpx-15">15px horizontal gap</div>
<div class="gpy-20">20px vertical gap</div>
```

Available gap sizes:
- `0`, `10`, `15`, `20`, `25`, `30`, `35`, `40`, `45`, `50`

Gap utilities also have responsive variants:
```html
<div class="gp-10 gp-md-20 gp-lg-30">
  Responsive grid gap
</div>
```

## Common Use Cases

### Card Spacing

```html
<div class="pd-20 mb-30">
  <h3 class="mb-10">Card Title</h3>
  <p class="mb-15">Card content with consistent internal spacing.</p>
  <button class="mt-20">Action Button</button>
</div>
```

### Section Spacing

```html
<section class="pd-20 pd-md-30 pd-lg-50">
  <h2 class="mb-20 mb-md-30">Section Title</h2>
  <div class="mb-20">Content with responsive margins</div>
</section>
```

### Flexbox Layout with Spacing

```html
<div class="display-flex">
  <div class="me-20">Left column</div>
  <div>Right column</div>
</div>
```

### Grid with Gaps

```html
<div class="display-grid gp-15">
  <div class="pd-15">Grid item 1</div>
  <div class="pd-15">Grid item 2</div>
  <div class="pd-15">Grid item 3</div>
</div>
```

### Centering with Auto Margins

```html
<div class="mgx-auto" style="max-width: 800px">
  Centered container with maximum width
</div>
```

These utilities provide a comprehensive system for controlling space throughout your project, ensuring consistent and responsive layouts.
