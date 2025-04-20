# Sizing

The Phenix Design System provides a comprehensive set of sizing utilities that allow you to control the width and height of elements throughout your project with precise, consistent values.

## Overview

The sizing utilities in Phenix Design System include:

- Fixed width utilities (in REM units)
- Percentage-based width utilities
- Viewport-based width utilities
- Maximum width constraints
- Minimum width constraints
- Height utilities (fixed, percentage, and viewport-based)
- Responsive variants of all sizing utilities

## Width Utilities

### Fixed Width

Control the width of elements with specific fixed width values (in REM units):

```html
<div class="w-50">50px width</div>
<div class="w-100">100px width</div>
<div class="w-150">150px width</div>
<div class="w-200">200px width</div>
<div class="w-250">250px width</div>
<div class="w-300">300px width</div>
```

Available fixed width classes include: `w-50`, `w-75`, `w-100`, `w-125`, `w-150`, `w-200`, `w-225`, `w-250`, `w-275`, `w-300`, `w-320`, `w-360`, `w-390`, `w-420`, `w-480`, `w-570`, `w-768`.

### Fluid Width

Set an element to fill its container's width:

```html
<div class="w-fluid">100% width</div>
<!-- Alternative classes with the same effect -->
<div class="fluid">100% width</div>
<div class="line-break">100% width</div>
```

### Auto Width

Allow an element to determine its own width based on content:

```html
<div class="w-auto">Width based on content</div>
```

## Max Width Utilities

Limit the maximum width of elements while allowing them to shrink on smaller viewports:

```html
<div class="w-max-360">Maximum width of 360px</div>
<div class="w-max-480">Maximum width of 480px</div>
<div class="w-max-768">Maximum width of 768px</div>
<div class="w-max-1200">Maximum width of 1200px</div>
```

Available max-width classes include: `w-max-120`, `w-max-150`, `w-max-180`, `w-max-200`, `w-max-225`, `w-max-260`, `w-max-280`, `w-max-320`, `w-max-360`, `w-max-390`, `w-max-420`, `w-max-480`, `w-max-570`, `w-max-640`, `w-max-768`, `w-max-1100`, `w-max-1200`, `w-max-1366`, `w-max-1400`, `w-max-1600`, `w-max-1920`, `w-max-2560`.

## Min Width Utilities

Ensure elements maintain a minimum width even when their container shrinks:

```html
<div class="w-min-300">Minimum width of 300px</div>
<div class="w-min-480">Minimum width of 480px</div>
```

Available min-width classes include: `w-min-120`, `w-min-150`, `w-min-180`, `w-min-200`, `w-min-225`, `w-min-260`, `w-min-280`, `w-min-320`, `w-min-360`, `w-min-390`, `w-min-420`, `w-min-480`, `w-min-570`, `w-min-640`, `w-min-768`, `w-min-1100`, `w-min-1200`, `w-min-1366`, `w-min-1400`, `w-min-1600`, `w-min-1920`, `w-min-2560`.

## Height Utilities

### Percentage Height

Set an element's height as a percentage of its container:

```html
<div class="h-25">25% height</div>
<div class="h-50">50% height</div>
<div class="h-75">75% height</div>
<div class="h-100">100% height</div>
<div class="h-125">125% height</div>
<div class="h-150">150% height</div>
<div class="h-175">175% height</div>
<div class="h-200">200% height</div>
```

### Viewport Height

Set an element's height as a percentage of the viewport height:

```html
<div class="h-25vh">25% of viewport height</div>
<div class="h-50vh">50% of viewport height</div>
<div class="h-75vh">75% of viewport height</div>
<div class="h-100vh">100% of viewport height</div>
```

### Auto Height

Allow an element to determine its own height based on content:

```html
<div class="h-auto">Height based on content</div>
```

## Min Height Utilities

Ensure elements maintain a minimum height:

```html
<div class="h-min-25">Minimum 25% height</div>
<div class="h-min-50">Minimum 50% height</div>
<div class="h-min-75">Minimum 75% height</div>
<div class="h-min-100">Minimum 100% height</div>
```

Viewport-based minimum height is also available:

```html
<div class="h-min-25vh">Minimum 25% of viewport height</div>
<div class="h-min-50vh">Minimum 50% of viewport height</div>
<div class="h-min-75vh">Minimum 75% of viewport height</div>
<div class="h-min-100vh">Minimum 100% of viewport height</div>
```

## Max Height Utilities

Limit the maximum height of elements:

```html
<div class="h-max-25">Maximum 25% height</div>
<div class="h-max-50">Maximum 50% height</div>
<div class="h-max-75">Maximum 75% height</div>
<div class="h-max-100">Maximum 100% height</div>
```

Viewport-based maximum height is also available:

```html
<div class="h-max-25vh">Maximum 25% of viewport height</div>
<div class="h-max-50vh">Maximum 50% of viewport height</div>
<div class="h-max-75vh">Maximum 75% of viewport height</div>
<div class="h-max-100vh">Maximum 100% of viewport height</div>
```

## Aspect Ratio Utilities

Control the aspect ratio of media elements:

```html
<div class="px-media ratio-16x9">
  <!-- Content with 16:9 aspect ratio -->
</div>

<img src="image.jpg" class="ratio-4x3" alt="Image with 4:3 aspect ratio">
```

Available aspect ratio classes:
- Square: `ratio-1x1`
- Landscape: `ratio-16x9`, `ratio-16x10`, `ratio-16x11`, `ratio-16x14`, `ratio-21x9`, `ratio-4x3`, `ratio-3x1`
- Portrait: `ratio-9x16`, `ratio-10x16`, `ratio-11x16`, `ratio-14x16`, `ratio-9x21`, `ratio-3x4`, `ratio-1x3`

## Responsive Sizing

All sizing utilities have responsive variants that apply at specific breakpoints:

```html
<!-- Full width on small screens, 480px on medium screens and up -->
<div class="w-fluid w-md-480">Responsive width</div>

<!-- 50% height on small screens, 100% height on large screens -->
<div class="h-50 h-lg-100">Responsive height</div>

<!-- 16:9 aspect ratio by default, 1:1 (square) on medium screens -->
<div class="px-media ratio-16x9 ratio-md-1x1">Responsive aspect ratio</div>
```

Available responsive prefixes:
- No prefix: All screen sizes
- `-sm`: Small screens and up
- `-md`: Medium screens and up
- `-lg`: Large screens and up
- `-xl`: Extra large screens and up

## Common Use Cases

### Content Width Control

```html
<article class="w-max-768 mgx-auto">
  <!-- Content limited to 768px width and centered -->
</article>
```

### Responsive Images

```html
<!-- Full width on mobile, limited on larger screens -->
<img src="hero.jpg" class="w-fluid w-max-1200" alt="Hero image">
```

### Fixed Size UI Elements

```html
<!-- Fixed width buttons -->
<button class="btn primary w-200">Fixed Width Button</button>
```

### Full-Height Sections

```html
<!-- Full viewport height section -->
<section class="h-100vh">
  <!-- Full-height content -->
</section>
```

### Cards with Uniform Size

```html
<div class="row">
  <div class="col-12 col-md-4">
    <div class="card w-100 h-100">Card content</div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card w-100 h-100">Card content</div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card w-100 h-100">Card content</div>
  </div>
</div>
```

## Best Practices

- Use percentage and viewport-based units for responsive layouts
- Use fixed widths for UI elements that should maintain consistent dimensions
- Combine sizing utilities with flexbox for more complex layouts
- Apply max-width constraints to prevent content from becoming too wide on large screens
- Use min-height to ensure elements have sufficient space for their content
