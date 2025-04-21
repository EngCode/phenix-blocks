# Scroll Effects

Scroll effect utilities in the Phenix Design System modify the scrolling behavior of elements or containers.

## Overview

The primary scroll effect currently available is Scroll Snap.

## Scroll Snap

Scroll snapping allows you to create scrollable containers where the viewport locks onto specific points or elements as the user scrolls.

```html
<!-- Create a container with scroll snapping -->
<div class="px-section-snap">
  <div class="section">Section 1</div>
  <div class="section">Section 2</div>
  <div class="section">Section 3</div>
</div>
```

The `.px-section-snap` class applies the necessary CSS properties (`scroll-snap-type` and potentially `scroll-snap-align` to children) to enable scroll snapping within the container.

### Usage

Scroll snap is useful for:

-   Image carousels or galleries
-   Full-page section scrolling
-   Step-by-step wizards or tutorials

### Customization

Scroll snap behavior can be further customized with standard CSS properties like `scroll-snap-align`, `scroll-padding`, etc., applied directly to the container or its children.

## Best Practices

1.  **Ensure sufficient content**: Scroll snap works best when there is clearly enough content to scroll through.
2.  **Provide clear visual cues**: Indicate to users that the area is scrollable and uses snapping.
3.  **Test usability**: Ensure the snapping behavior feels natural and doesn't hinder navigation.
4.  **Consider alternatives**: For complex interactions, a JavaScript-based slider or carousel might offer more control. 