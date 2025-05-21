# Display & Visibility

The Display & Visibility utilities in the Phenix Design System provide you with precise control over how elements display and behave in your layouts. These utilities let you control element visibility, display properties, and screen reader accessibility.

## Overview

Display and visibility utilities are essential for creating responsive layouts and managing content visibility across different screen sizes. The Phenix Design System organizes these utilities into the following categories:

1. **Display Properties** - Control how elements render in the document flow
2. **Visibility Properties** - Control visibility while preserving space in the layout
3. **Opacity Control** - Adjust transparency without changing layout
4. **Hidden Elements** - Control element display across responsive breakpoints
5. **Screen Reader Utilities** - Improve accessibility

## Display Properties

Control how elements are rendered in the document flow:

```html
<!-- Block display -->
<div class="display-block">Displays as a block element</div>

<!-- Flex display -->
<div class="display-flex">Displays as a flex container</div>

<!-- Grid display -->
<div class="display-grid">Displays as a grid container</div>

<!-- Inline-block display -->
<div class="inline-block">Displays as an inline-block element</div>

<!-- Inline-flex display -->
<div class="inline-flex">Displays as an inline-flex container</div>

<!-- Flexbox shorthand -->
<div class="flexbox">Displays as a flex container (using a placeholder selector)</div>
```

## Opacity Control

Adjust element transparency without removing it from the document flow:

```html
<div class="opacity-0">Completely transparent (opacity: 0)</div>
<div class="opacity-10">10% opacity</div>
<div class="opacity-15">15% opacity</div>
<div class="opacity-20">20% opacity</div>
<div class="opacity-25">25% opacity</div>
<div class="opacity-50">50% opacity</div>
<div class="opacity-75">75% opacity</div>
<div class="opacity-90">90% opacity</div>
```

## Hidden Elements

The `.hidden` class and its responsive variants completely remove elements from display:

```html
<!-- Hidden on all screen sizes -->
<div class="hidden">Not displayed (display: none)</div>

<!-- Hidden on small screens and up -->
<div class="hidden-sm-up">Hidden on small screens and larger</div>

<!-- Hidden on small screens and down -->
<div class="hidden-sm-down">Hidden on small screens and smaller</div>

<!-- Hidden on medium screens and up -->
<div class="hidden-md-up">Hidden on medium screens and larger</div>

<!-- Hidden on medium screens and down -->
<div class="hidden-md-down">Hidden on medium screens and smaller</div>

<!-- Hidden on large screens and up -->
<div class="hidden-lg-up">Hidden on large screens and larger</div>

<!-- Hidden on large screens and down -->
<div class="hidden-lg-down">Hidden on large screens and smaller</div>

<!-- Hidden on extra large screens and up -->
<div class="hidden-xl-up">Hidden on extra large screens and larger</div>

<!-- Hidden on extra large screens and down -->
<div class="hidden-xl-down">Hidden on extra large screens and smaller</div>
```

## Screen Reader Utilities

Improve accessibility with screen reader utilities:

```html
<!-- Visually hidden but available to screen readers -->
<div class="visually-hidden">Only visible to screen readers</div>

<!-- Visually hidden until focused -->
<a class="visually-hidden-focusable" href="#content">
  Skip to content (becomes visible when focused)
</a>
```

## Responsive Display

All display utility classes can be applied conditionally at different breakpoints:

```html
<!-- Block display on medium screens and up -->
<div class="display-md-block">Block display on medium screens and up</div>

<!-- Flex display on large screens and up -->
<div class="display-lg-flex">Flex container on large screens and up</div>

<!-- Grid display on extra large screens and up -->
<div class="display-xl-grid">Grid container on extra large screens and up</div>

<!-- Inline-block on small screens and up -->
<div class="inline-block-sm">Inline-block on small screens and up</div>
```

## Common Use Cases

### Responsive Content

Show and hide content based on screen size:

```html
<!-- Mobile-only content -->
<div class="hidden-md-up">Only visible on small screens</div>

<!-- Desktop-only content -->
<div class="hidden-md-down">Only visible on large screens</div>
```

### Progressive Disclosure

Reveal content based on user interaction (using JavaScript to toggle classes):

```html
<!-- Initially hidden -->
<div class="hidden" id="more-content">
  Additional content revealed on demand
</div>

<button onclick="document.getElementById('more-content').classList.toggle('hidden')">
  Show More
</button>
```

### Accessibility Improvements

Make content accessible to screen readers:

```html
<!-- Skip navigation link -->
<a class="visually-hidden-focusable" href="#main-content">
  Skip to main content
</a>

<!-- Icon with screen reader text -->
<button>
  <i class="icon-delete"></i>
  <span class="visually-hidden">Delete item</span>
</button>
```

### Overlay Effects

Create overlay effects with opacity:

```html
<div class="position-rv">
  <img src="image.jpg" alt="Background image">
  <div class="position-ab position-full bg-dark opacity-50">
    <!-- Overlay content -->
  </div>
</div>
```

## Combining with Other Utilities

These utilities are designed to work seamlessly with other Phenix Design System utilities:

```html
<!-- Combine position, display, and visibility utilities -->
<div class="position-rv">
  <div class="position-ab position-full bg-dark opacity-75"></div>
  <div class="position-rv z-index-1">
    <h2 class="tx-light">Content above overlay</h2>
  </div>
</div>
```

These display and visibility utilities provide precise control over how elements display and behave in different contexts and screen sizes, supporting flexible, responsive designs.
