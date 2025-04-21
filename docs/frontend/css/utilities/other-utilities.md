# Other Utilities

The Phenix Design System includes additional utility classes that don't fit into other categories but provide important functionality for building modern interfaces. These utilities handle specialized use cases like progress bars, sticky elements, media components, and animations.

## Overview

This documentation covers various specialized utilities:

1. **Progress Bars** - Animated loading indicators
2. **Sticky Elements** - Position elements that stick during scroll
3. **Media Components** - Control media display and behavior
4. **Aspect Ratio** - Maintain consistent element proportions
5. **Lazy Loading** - Control image loading behavior
6. **Shadows** - Add depth effects (also see [Visual Effects](./effects.md))
7. **Transitions & Animations** - Control motion (also see [Visual Effects](./effects.md))
8. **Modal Components** - Create popup dialogs
9. **Scaling Utilities** - Resize elements with transforms

The Phenix Design System provides a wide range of additional utility classes beyond the core layout, spacing, and color utilities. These "other utilities" help you control various aspects of your elements such as overflow behavior, cursor interactions, text clipping, media handling, and more.

## Overview

This documentation covers several categories of miscellaneous utilities:

1. **Overflow Utilities** - Control how content that exceeds its container is handled
2. **Float Utilities** - Legacy float-based layout control
3. **Direction Utilities** - Control text direction (LTR/RTL)
4. **Cursor Utilities** - Modify mouse cursor appearance and behavior
5. **Text Utilities** - Specialized text behaviors and effects
6. **Loading Utilities** - Add loading spinners to elements
7. **Tooltip Utilities** - Add simple tooltips to elements
8. **z-Index Utilities** - Control stacking order of elements
9. **Custom Scrollbar** - Style scrollbars for better visual integration

For other specific utility categories, refer to these dedicated pages:
- [Effects Utilities](/frontend/css/utilities/effects.md) - Shadows, animations, and visual effects
- [Hover Utilities](/frontend/css/utilities/hovers.md) - Interactive hover animations and effects

## Overflow Utilities

Control how content that overflows its container is handled:

```html
<!-- Hide overflow in all directions -->
<div class="overflow-hidden">Content that exceeds this container will be clipped</div>

<!-- Hide overflow vertically only -->
<div class="overflow-y-hidden">Vertical overflow will be hidden, horizontal will show</div>

<!-- Hide overflow horizontally only -->
<div class="overflow-x-hidden">Horizontal overflow will be hidden, vertical will show</div>

<!-- Add scrollbars when content overflows -->
<div class="overflow-auto">Scrollbars appear when content exceeds container</div>

<!-- Add vertical scrollbar only when needed -->
<div class="overflow-y-auto">Vertical scrollbar appears when needed</div>

<!-- Add horizontal scrollbar only when needed -->
<div class="overflow-x-auto">Horizontal scrollbar appears when needed</div>
```

## Float Utilities

While modern layouts primarily use flexbox and grid, float utilities remain available for legacy patterns:

```html
<!-- Float element to the start (left in LTR, right in RTL) -->
<div class="float-start">Floated to the start</div>

<!-- Float element to the end (right in LTR, left in RTL) -->
<div class="float-end">Floated to the end</div>

<!-- Clear floats -->
<div class="clear-fix">Clears preceding floats</div>
<div class="clear-after">Clears floats with ::after pseudo-element</div>
```

## Overlay Utilities

Create overlay effects for elements:

```html
<!-- Dark overlay -->
<div class="overlay-dark">
  <div>Content appears above the dark overlay</div>
</div>

<!-- Light overlay -->
<div class="overlay-light">
  <div>Content appears above the light overlay</div>
</div>

<!-- Custom overlay with variable opacity -->
<div class="overlay-custom" style="--overlay-bg: #3498db; --opacity: 0.6;">
  <div>Content appears above a custom overlay</div>
</div>
```

The overlay classes apply a pseudo-element behind the content with the specified background color and opacity. The default opacity is 0.75, but can be customized with the `--opacity` CSS variable.

## Direction Utilities

Control the text direction of elements:

```html
<!-- Force left-to-right text direction -->
<div class="ltr">This text flows left to right regardless of page context</div>

<!-- Force right-to-left text direction -->
<div class="rtl">This text flows right to left regardless of page context</div>
```

## Cursor Utilities

Modify the mouse cursor appearance and event behavior:

```html
<!-- Change cursor to pointer (hand) -->
<div class="mouse-pointer">Cursor becomes a pointer on hover</div>

<!-- Hide the cursor -->
<div class="mouse-normal">Cursor is hidden over this element</div>

<!-- Disable pointer events -->
<div class="mouse-no-events">This element won't respond to mouse events</div>

<!-- Enable pointer events (useful for overriding mouse-no-events) -->
<div class="mouse-all-events">This element will respond to mouse events</div>

<!-- Make links inherit parent text color -->
<div class="links-inherit">
  <a href="#">This link inherits the parent text color</a>
</div>
```

## Icon Utilities

Control icon appearance and positioning:

```html
<!-- Add spacing after an icon (before text) -->
<span class="tx-icon fa-home">Home</span>

<!-- Fix icon alignment for certain fonts -->
<i class="icon-fix fa-check"></i>

<!-- Add color to icon from CSS variable -->
<i class="pds-icon-color fa-check" style="--icon-color: red;"></i>

<!-- Make icon larger -->
<i class="icon-lg fa-home"></i>
```

## Text Utilities

Special text effects:

```html
<!-- Create text with background showing through -->
<h1 class="bg-clip-text bg-grade-primary color-transparent">
  Gradient Text
</h1>
```

## Custom Scrollbar

Style scrollbars for container elements:

```html
<!-- Add custom scrollbar styling -->
<div class="px-scrollbar" style="height: 200px; overflow: auto;">
  <!-- Content that might overflow -->
  <p>Lorem ipsum dolor sit amet...</p>
  <!-- More content -->
</div>
```

This class adds a thinner, styled scrollbar with customizable colors via CSS variables:
- `--scrollbar-color`: Controls the track color (default: gray-color)
- `--scrollbar-thumb`: Controls the thumb color (default: dark-color)

## Loading Utilities

Add loading spinners to elements:

```html
<!-- Add loading spinner to an element -->
<div class="px-loading">
  <!-- Content to show spinner over -->
</div>

<!-- Inline loading spinner -->
<span class="px-loading-inline">Loading...</span>

<!-- Alternative loading spinner -->
<div class="px-loader">Loading content...</div>
```

## Tooltip Utilities

Add simple tooltip functionality to elements:

```html
<!-- Default tooltip (appears on top) -->
<span class="tooltip" data-title="This is a tooltip">Hover me</span>

<!-- Bottom tooltip -->
<span class="tooltip-bottom" data-title="I appear below the element">Hover me</span>

<!-- Use title attribute if no data-title is specified -->
<span class="tooltip" title="Fallback to title attribute">Hover me</span>
```

## z-Index Utilities

Control the stacking order of elements with predefined z-index values:

```html
<!-- Use predefined z-index values -->
<div class="z-index-header">Header level stacking</div>
<div class="z-index-modal">Modal level stacking</div>
<div class="z-index-dropdown">Dropdown level stacking</div>

<!-- Numeric z-index values -->
<div class="z-index-1">z-index: 1</div>
<div class="z-index-2">z-index: 2</div>
<div class="z-index-3">z-index: 3</div>
<!-- ... up to z-index-10 -->
```

The z-index values are organized in tiers:
- Component-specific: header, modal, dropdown (defined by CSS variables)
- Numeric: 1 through 10 for fine-grained control

## Sticky Elements

Create elements that stick to the viewport when scrolling:

```html
<!-- Basic sticky element -->
<div class="is-sticky">This element sticks when scrolled</div>

<!-- Sticky with absolute positioning fallback -->
<div class="is-sticky" data-sticky="absolute">Sticks with absolute positioning</div>

<!-- Inner sticky element -->
<div data-sticky="inner" class="is-sticky">Inner sticky element</div>
```

## Other Miscellaneous Utilities

```html
<!-- List with icons -->
<ul class="icons-list">
  <li class="fa-check">Item with check icon</li>
  <li class="fa-times">Item with times icon</li>
</ul>

<!-- Notifications container -->
<div class="px-notifications">
  <!-- Notification items -->
</div>
```

## Responsive Font Scaling

The Phenix Design System includes utilities that automatically adjust font sizes on very large screens:

```css
/* For large screens (1600px+) */
@media screen and (min-width: 1600px) {
  body,html{font-size: 0.93vw;}
}

/* For very large screens (2500px+) */
@media screen and (min-width: 2500px) {
  body,html{font-size: 1vw;}
}
```

This scaling ensures that text remains proportional on large displays without becoming too small relative to the viewport.

## Related Utilities

For more specialized utilities, see these dedicated documentation pages:

- [Effects Utilities](/frontend/css/utilities/effects.md) - Shadows, animations, and visual effects
- [Hover Utilities](/frontend/css/utilities/hovers.md) - Interactive hover animations and effects
