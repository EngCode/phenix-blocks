# Position Utilities

The Phenix Design System provides a comprehensive set of position utilities that give you precise control over how elements are positioned within the layout.

## Overview

Position utilities control:

1. **Position Properties** - Control how elements are positioned (`absolute`, `relative`, `fixed`, `sticky`)
2. **Element Placement** - Control where elements are positioned using top, bottom, left/right coordinates
3. **Z-Index Management** - Control stacking order of elements
4. **Centering Helpers** - Easily center elements or position them relative to their containers
5. **Responsive Positioning** - Apply positioning conditionally based on screen size

## Position Properties

Set the basic positioning method for elements:

```html
<!-- Absolute positioning -->
<div class="position-ab">Absolutely positioned</div>

<!-- Relative positioning -->
<div class="position-rv">Relatively positioned</div>

<!-- Fixed positioning -->
<div class="position-fx">Fixed to the viewport</div>

<!-- Sticky positioning -->
<div class="position-st">Sticky positioning</div>

<!-- Reset to static positioning (default) -->
<div class="position-none">Static positioning (no special positioning)</div>
```

### Sticky Element Details

The `.position-st` class makes an element sticky. Phenix also provides helpers for common sticky scenarios:

- **`.is-sticky`**: This is often used in conjunction with JavaScript or specific components. It might apply `position: sticky` or toggle classes based on scroll position.
- **`data-sticky="absolute"`**: Used with `.is-sticky`, this attribute suggests a fallback to absolute positioning if sticky isn't supported or desired.
- **`data-sticky="inner"`**: Used with `.is-sticky`, this suggests the sticky behavior applies to an inner element within a container.

Check the specific component or JavaScript module documentation for how `.is-sticky` and its data attributes are implemented.

```html
<!-- Basic sticky element (using position-st) -->
<div class="position-st" style="top: 20px;">Basic Sticky Element</div>

<!-- Component-based sticky element -->
<div class="is-sticky" style="top: 0;">Component Sticky Element</div>

<!-- Sticky with absolute fallback hint -->
<div class="is-sticky" data-sticky="absolute" style="top: 0;">Sticky with Fallback Hint</div>

<!-- Inner sticky element hint -->
<div class="some-container">
    <div class="is-sticky" data-sticky="inner" style="top: 10px;">Inner Sticky Part</div>
</div>
```

## Element Placement

Control the exact placement of positioned elements:

### Full Coverage

```html
<!-- Position element to cover its entire container -->
<div class="position-rv">
  <div class="position-ab position-full">Covers the entire container</div>
</div>

<!-- Same as above using short alias -->
<div class="position-rv">
  <div class="position-ab pos-full">Covers the entire container</div>
</div>
```

### Center Positioning

```html
<!-- Center element horizontally and vertically within container -->
<div class="position-rv">
  <div class="position-ab pos-center">Centered both ways</div>
</div>

<!-- Center element vertically only -->
<div class="position-rv">
  <div class="position-ab pos-center-y">Vertically centered</div>
</div>

<!-- Center element horizontally only -->
<div class="position-rv">
  <div class="position-ab pos-center-x">Horizontally centered</div>
</div>
```

### Edge Positioning

```html
<!-- Position after an element vertically (below) -->
<div class="position-rv">
  <div class="position-ab pos-after-y">Positioned below</div>
</div>

<!-- Position before an element vertically (above) -->
<div class="position-rv">
  <div class="position-ab pos-before-y">Positioned above</div>
</div>

<!-- Position after an element horizontally (to the right in LTR) -->
<div class="position-rv">
  <div class="position-ab pos-after-x">Positioned after</div>
</div>

<!-- Position before an element horizontally (to the left in LTR) -->
<div class="position-rv">
  <div class="position-ab pos-before-x">Positioned before</div>
</div>
```

### Specific Distance Positioning

Position elements at specific distances from container edges:

```html
<!-- Position 10px from the top -->
<div class="position-rv">
  <div class="position-ab pos-top-10">10px from top</div>
</div>

<!-- Position 20px from the bottom -->
<div class="position-rv">
  <div class="position-ab pos-bottom-20">20px from bottom</div>
</div>

<!-- Position 15px from the start (left in LTR, right in RTL) -->
<div class="position-rv">
  <div class="position-ab pos-start-15">15px from start</div>
</div>

<!-- Position 30px from the end (right in LTR, left in RTL) -->
<div class="position-rv">
  <div class="position-ab pos-end-30">30px from end</div>
</div>
```

Available distance values: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 (in pixels, converted to REM units)

### Custom Position Values

Use CSS variables for custom position values:

```html
<!-- Position with custom distances using CSS variables -->
<div class="position-rv">
  <div class="position-ab pos-top-custom pos-start-custom" 
       style="--pos-top: 15%; --pos-start: 25%;">
    Custom positioned
  </div>
</div>
```

## Z-Index Management

Control the stacking order of elements:

```html
<!-- Predefined contextual z-index values -->
<div class="z-index-header">Header level stacking (highest)</div>
<div class="z-index-modal">Modal level stacking (high)</div>
<div class="z-index-dropdown">Dropdown level stacking (medium-high)</div>

<!-- Numeric z-index values (1-10) -->
<div class="z-index-1">z-index: 1</div>
<div class="z-index-2">z-index: 2</div>
<div class="z-index-3">z-index: 3</div>
<!-- ... up to z-index-10 -->
```

## Responsive Positioning

All position utilities can be applied conditionally at different breakpoints using responsive prefixes:

```html
<!-- Element is relatively positioned on all screens, absolutely positioned on medium screens and up -->
<div class="position-rv position-md-ab">Responsive positioning</div>

<!-- Center element on medium screens and up -->
<div class="position-rv">
  <div class="position-ab pos-md-center">Centered on medium screens and up</div>
</div>

<!-- Different positioning at different screen sizes -->
<div class="position-rv">
  <div class="position-ab pos-top-10 pos-md-top-20 pos-lg-top-30">
    10px from top on small screens,
    20px from top on medium screens,
    30px from top on large screens
  </div>
</div>
```

Available responsive prefixes:
- No prefix: All screen sizes
- `-md`: Medium screens and up (≥ 768px)
- `-lg`: Large screens and up (≥ 1024px)
- `-xl`: Extra large screens and up (≥ 1200px)

## Common Use Cases

### Overlays

```html
<!-- Create an overlay with centered content -->
<div class="position-rv">
  <!-- Dark overlay -->
  <div class="position-ab position-full bg-dark opacity-50"></div>
  
  <!-- Centered content above the overlay -->
  <div class="position-rv z-index-1">
    <h2 class="color-white">Content above overlay</h2>
  </div>
</div>
```

### Positioned Badges

```html
<!-- Badge positioned in the top-right corner -->
<div class="position-rv">
  <img src="product.jpg" alt="Product">
  <span class="position-ab pos-top-10 pos-end-10 badge bg-primary">New</span>
</div>
```

### Fixed Header

```html
<!-- Header fixed to the top of the viewport -->
<header class="position-fx pos-top-0 pos-start-0 pos-end-0 z-index-header">
  Fixed header content
</header>
```

### Sticky Sidebar

```html
<!-- Sidebar that sticks when scrolled -->
<div class="position-st pos-top-20">
  Sticky sidebar content
</div>
```

## RTL Support

Position utilities automatically adapt to the text direction (LTR or RTL) of your document:

- `pos-start-*` refers to the left edge in LTR and right edge in RTL
- `pos-end-*` refers to the right edge in LTR and left edge in RTL
- `pos-after-x` and `pos-before-x` also automatically adjust based on text direction

This makes it easier to build bi-directional layouts without additional code. 