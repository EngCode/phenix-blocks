# Highlight Effect

The highlight hover effect in the Phenix Design System allows you to emphasize a specific element by reducing the opacity of its siblings when hovered.

## Overview

The `.pds-hvr-highlight` utility class creates a spotlight effect, drawing attention to the hovered item by visually dimming surrounding elements.

## Usage

Apply the `.pds-hvr-highlight` class to sibling elements within a common parent container. When one of these elements is hovered, the others in the group will have their opacity reduced.

```html
<div class="row">
  <!-- Add transition-smooth for a smoother effect -->
  <div class="col-4">
    <div class="card pds-hvr-highlight transition-smooth">Card 1</div>
  </div>
  <div class="col-4">
    <div class="card pds-hvr-highlight transition-smooth">Card 2</div>
  </div>
  <div class="col-4">
    <div class="card pds-hvr-highlight transition-smooth">Card 3</div>
  </div>
</div>
```

In this example, hovering over any card will cause the other two cards in the same row to fade slightly.

## How It Works

When an element with `.pds-hvr-highlight` is hovered:

1.  The parent container gains a class (typically `.highlight-parent`).
2.  CSS rules target siblings of the hovered `.pds-hvr-highlight` element within the `.highlight-parent` container, reducing their opacity (default: 0.5).
3.  The hovered element itself retains full opacity.

## Customization

The opacity level for non-hovered siblings can potentially be customized via CSS variables if the implementation supports it (check source SCSS for details).

## Best Practices

1.  **Apply to siblings**: Ensure elements using `.pds-hvr-highlight` share the same immediate parent.
2.  **Use with transitions**: Combine with [Transition Utilities](./transitions.md) (e.g., `transition-smooth`) for a smoother fade effect.
3.  **Consider context**: This effect is best used for groups of items where highlighting one item is meaningful, such as grids of cards, feature lists, or pricing tables.
4.  **Test readability**: Ensure the dimmed elements remain sufficiently readable. 