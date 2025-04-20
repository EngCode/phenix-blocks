# Borders

The Borders utilities in the Phenix Design System provide a comprehensive set of classes for controlling border styles, widths, colors, and border radius properties. These utilities make it easy to add and customize borders throughout your project.

## Overview

The border utilities in Phenix Design System are organized into the following categories:

1. **Border Styles** - Control the appearance of borders (solid, dashed, etc.)
2. **Border Widths** - Set border thickness on all sides or individual sides
3. **Border Colors** - Define border colors using theme variables or predefined options
4. **Border Radius** - Control the roundness of element corners
5. **Dividers** - Create separation between elements with simple border lines
6. **Group Layouts** - Apply coordinated border-radius to groups of elements

## Border Styles

Control the style of borders with these utility classes:

```html
<!-- Remove all borders -->
<div class="border-reset">No borders</div>

<!-- Solid borders -->
<div class="border-solid">Solid border style</div>

<!-- Dashed borders -->
<div class="border-dashed">Dashed border style</div>

<!-- Dotted borders -->
<div class="border-dotted">Dotted border style</div>
```

## Border Widths

Control border thickness on all sides or specific sides:

```html
<!-- All sides border width -->
<div class="border-1">1px border on all sides</div>
<div class="border-2">2px border on all sides</div>
<div class="border-3">3px border on all sides</div>
<div class="border-4">4px border on all sides</div>
<div class="border-5">5px border on all sides</div>

<!-- Bottom border width -->
<div class="border-bottom-1">1px bottom border</div>
<div class="border-bottom-2">2px bottom border</div>
<div class="border-bottom-3">3px bottom border</div>
<div class="border-bottom-4">4px bottom border</div>
<div class="border-bottom-5">5px bottom border</div>

<!-- Top border width -->
<div class="border-top-1">1px top border</div>
<div class="border-top-2">2px top border</div>
<div class="border-top-3">3px top border</div>
<div class="border-top-4">4px top border</div>
<div class="border-top-5">5px top border</div>

<!-- Start border width (left in LTR, right in RTL) -->
<div class="border-start-1">1px start border</div>
<div class="border-start-2">2px start border</div>
<div class="border-start-3">3px start border</div>
<div class="border-start-4">4px start border</div>
<div class="border-start-5">5px start border</div>

<!-- End border width (right in LTR, left in RTL) -->
<div class="border-end-1">1px end border</div>
<div class="border-end-2">2px end border</div>
<div class="border-end-3">3px end border</div>
<div class="border-end-4">4px end border</div>
<div class="border-end-5">5px end border</div>
```

## Custom Border Width with CSS Variables

For more flexibility, you can use the custom border width classes with CSS variables:

```html
<!-- Custom border widths -->
<div class="border-top-custom" style="--border-top: 2px">Custom top border</div>
<div class="border-bottom-custom" style="--border-bottom: 3px">Custom bottom border</div>
<div class="border-start-custom" style="--border-start: 1px">Custom start border</div>
<div class="border-end-custom" style="--border-end: 4px">Custom end border</div>
```

These custom border classes also support responsive variants through CSS variables:

```html
<div class="border-top-custom" 
     style="--border-top: 1px; --border-top-md: 2px; --border-top-lg: 3px;">
     Responsive border top
</div>
```

## Border Colors

Control the color of borders using theme-based color utilities:

```html
<!-- Theme colors -->
<div class="border-1 border-primary">Primary color border</div>
<div class="border-1 border-secondary">Secondary color border</div>
<div class="border-1 border-success">Success color border</div>
<div class="border-1 border-danger">Danger color border</div>
<div class="border-1 border-warning">Warning color border</div>
<div class="border-1 border-info">Info color border</div>
<div class="border-1 border-light">Light color border</div>
<div class="border-1 border-dark">Dark color border</div>
<div class="border-1 border-gray">Gray color border</div>
<div class="border-1 border-gray-light">Light gray border</div>
<div class="border-1 border-white">White border</div>

<!-- Transparent borders with alpha values (dark) -->
<div class="border-1 border-alpha-10">10% opacity dark border</div>
<div class="border-1 border-alpha-15">15% opacity dark border</div>
<div class="border-1 border-alpha-25">25% opacity dark border</div>
<div class="border-1 border-alpha-50">50% opacity dark border</div>
<div class="border-1 border-alpha-75">75% opacity dark border</div>

<!-- Transparent borders with alpha values (light) -->
<div class="border-1 border-revert-10">10% opacity light border</div>
<div class="border-1 border-revert-15">15% opacity light border</div>
<div class="border-1 border-revert-25">25% opacity light border</div>
<div class="border-1 border-revert-50">50% opacity light border</div>
<div class="border-1 border-revert-75">75% opacity light border</div>
```

### Brand Colors for Borders

```html
<!-- Brand-specific border colors -->
<div class="border-1 border-facebook">Facebook blue border</div>
<div class="border-1 border-twitter">Twitter blue border</div>
<div class="border-1 border-youtube">YouTube red border</div>
<div class="border-1 border-linkedin">LinkedIn blue border</div>
<div class="border-1 border-instagram">Instagram pink border</div>
<div class="border-1 border-pinterest">Pinterest red border</div>
<div class="border-1 border-snapchat">Snapchat yellow border</div>
<div class="border-1 border-whatsapp">WhatsApp green border</div>
<div class="border-1 border-behance">Behance blue border</div>
<div class="border-1 border-dribbble">Dribbble pink border</div>
<div class="border-1 border-flicker">Flicker blue border</div>
```

## Border Radius

Control the roundness of element corners with the following classes:

```html
<!-- Border radius sizes -->
<div class="radius-ty">Tiny radius (2px)</div>
<div class="radius-sm">Small radius (4px)</div>
<div class="radius-md">Medium radius (6px)</div>
<div class="radius-lg">Large radius (8px)</div>
<div class="radius-xl">Extra large radius (10px)</div>
<div class="radius-xxl">Extra extra large radius (15px)</div>
<div class="radius-circle">Circular radius (50%)</div>
<div class="radius-rounded">Rounded radius (62px)</div>
<div class="radius-section">Section radius (150px)</div>
<div class="radius-section-x2">Double section radius (250px)</div>
<div class="radius-section-x5">5x section radius (500px)</div>
<div class="radius-height">Radius equal to element height</div>
<div class="radius-none">No radius (0)</div>
```

### Border Radius Positions

Control which corners have rounded edges:

```html
<!-- Apply radius to specific corners -->
<div class="radius-md radius-top">Radius on top corners only</div>
<div class="radius-md radius-bottom">Radius on bottom corners only</div>
<div class="radius-md radius-start">Radius on start side corners only</div>
<div class="radius-md radius-end">Radius on end side corners only</div>

<!-- Apply radius to individual corners -->
<div class="radius-md radius-top-start">Radius on top-start corner only</div>
<div class="radius-md radius-top-end">Radius on top-end corner only</div>
<div class="radius-md radius-bottom-start">Radius on bottom-start corner only</div>
<div class="radius-md radius-bottom-end">Radius on bottom-end corner only</div>
```

## Dividers

Create simple dividing lines with the divider utilities:

```html
<!-- Divider classes -->
<div class="divider-x">Horizontal divider (both sides)</div>
<div class="divider-y">Vertical divider (top and bottom)</div>
<div class="divider-t">Top divider only</div>
<div class="divider-b">Bottom divider only</div>
<div class="divider-s">Start divider only</div>
<div class="divider-e">End divider only</div>
```

By default, dividers use a light gray color (`rgba(0,0,0,0.1)`), but you can combine them with border color classes:

```html
<div class="divider-b border-primary">Primary color bottom divider</div>
```

## Group Layout Integration

The `.px-group` class provides border-radius coordination for related elements:

```html
<!-- Button group with coordinated border radius -->
<div class="px-group">
  <button class="btn primary">First</button>
  <button class="btn primary">Middle</button>
  <button class="btn primary">Last</button>
</div>

<!-- Vertical group layout -->
<div class="px-group px-group-v">
  <button class="btn primary">Top</button>
  <button class="btn primary">Middle</button>
  <button class="btn primary">Bottom</button>
</div>
```

In a group layout:
- The first child gets rounded corners on the start side (or top for vertical groups)
- The last child gets rounded corners on the end side (or bottom for vertical groups)
- Middle elements get no border radius
- All elements maintain their natural borders

## Responsive Border Utilities

Most border utilities have responsive variants for different screen sizes:

```html
<!-- Responsive border widths -->
<div class="border-1 border-md-2 border-lg-3">
  1px border on mobile, 2px on tablets, 3px on desktops
</div>

<!-- Responsive border styles -->
<div class="border-solid border-md-dashed">
  Solid border on mobile, dashed on larger screens
</div>
```

Available responsive prefixes:
- No prefix: All screen sizes
- `-md`: Medium screens and up
- `-lg`: Large screens and up

## Common Use Cases

### Card with Custom Border

```html
<div class="border-1 border-gray-light radius-md">
  <div class="pd-20">
    <h3>Card Title</h3>
    <p>Card content with a light gray border and medium rounded corners.</p>
  </div>
</div>
```

### Underlined Section Titles

```html
<h2 class="divider-b border-primary pd-10">
  Section Title with Primary Color Underline
</h2>
```

### Responsive Form Controls

```html
<div class="form-group">
  <input type="text" class="form-control border-1 border-lg-2 border-gray radius-md">
</div>
```

### Feature List with Dividers

```html
<ul class="reset-list">
  <li class="divider-b pd-15">Feature One</li>
  <li class="divider-b pd-15">Feature Two</li>
  <li class="divider-b pd-15">Feature Three</li>
  <li class="pd-15">Feature Four</li>
</ul>
```

### Alert with Custom Borders

```html
<div class="pd-20 border-start-3 border-danger radius-sm">
  <p>Important alert message with a prominent left border.</p>
</div>
```

These border utilities provide precise control over all aspects of element borders, allowing for consistent, responsive designs throughout your project.
