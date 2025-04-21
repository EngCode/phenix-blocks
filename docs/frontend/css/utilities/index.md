# CSS Utilities

The Phenix Design System provides a comprehensive set of CSS utility classes that enable rapid development and consistent styling across your projects.

## Overview

CSS utilities in the Phenix Design System are low-level, single-purpose classes that handle specific styling tasks. They follow a consistent naming convention and can be combined to create complex layouts and designs without writing custom CSS.

Key benefits:
- **Consistency**: Maintain a consistent visual language across your project
- **Productivity**: Build interfaces faster by applying utility classes directly in your HTML
- **Flexibility**: Combine utilities for custom styling without additional CSS files
- **Responsive**: Apply utilities conditionally based on screen size
- **Lightweight**: Include only the utilities you actually use

## Available Utilities

### Layout & Positioning

- [**Display & Visibility**](./display-visibility.md): Control how elements are displayed and hidden.
- [**Sizing**](./sizing.md): Control width, height, and aspect ratio of elements.
- [**Spacing**](./spacing.md): Apply margin and padding.
- [**Positioning**](./positioning.md): Control element position, coordinates, and z-index.
- [**Overflow & Float**](./overflow-float.md): Manage content overflow and legacy float layouts.

### Visual Appearance

- [**Colors**](./colors.md): Apply text colors.
- [**Backgrounds**](./backgrounds.md): Set background colors, gradients, and images.
- [**Borders**](./borders.md): Control border width, style, color, and radius.
- [**Shadows**](./shadows.md): Add box and text shadow effects.
- [**Overlays**](./overlays.md): Add semi-transparent layers over elements.
- [**Typography**](./typography.md): Manage font families, sizes, weights, line heights, and text formatting.

### Media & Content

- [**Media Elements**](./media-utilities.md): Handle responsive images, videos, and iframes.

### Interaction & Feedback

- [**Interactive Utilities**](./interactive/): A collection of utilities for interactive feedback and effects.
  - [**Effects**](./interactive/effects.md): Apply animations, transformations, and highlight effects.
  - [**Transitions**](./interactive/transitions.md): Smooth state changes.
  - [**Scroll Effects**](./interactive/scroll-snap.md): Control scrolling behavior like snapping.
- [**Tooltips**](./tooltips.md): Add simple informational popups on hover.
- [**Custom Scrollbar**](./custom-scrollbar.md): Apply styled scrollbars to elements.

## Naming Convention

Phenix Design System utilities follow these patterns:

1. **Property or function prefix**: Indicates the property being styled (e.g., `bg-` for background, `tx-` for text)
2. **Value or variant**: Specifies the value to apply (e.g., `primary`, `center`, `bold`)
3. **Optional directional modifier**: Indicates direction (e.g., `-top`, `-start`)
4. **Optional responsive prefix**: Indicates screen size (e.g., `md-`, `lg-`)

Examples:
- `bg-primary`: Primary background color
- `tx-center`: Center-aligned text
- `border-bottom-2`: 2px bottom border
- `md-hidden`: Hidden on medium screens and up

## Responsive Prefixes

All utilities can be applied conditionally at different breakpoints using these prefixes:

- No prefix: Applied at all screen sizes
- `sm-`: Applied at small screens (≥ 500px) and up
- `md-`: Applied at medium screens (≥ 768px) and up
- `lg-`: Applied at large screens (≥ 1200px) and up
- `xl-`: Applied at extra large screens (≥ 1400px) and up

Example:
```html
<div class="hidden md-block">
  <!-- Hidden on mobile, visible on medium screens and up -->
</div>
```

## Using Utilities Together

Utilities are designed to be combined to create complex styles:

```html
<div class="bg-light py-20 px-30 radius-lg border-1 border-gray tx-center mb-20">
  <h2 class="fs-24 weight-bold color-primary mb-10">Card Title</h2>
  <p class="fs-16 lh-lg mb-15">Card description goes here with larger line height.</p>
  <a href="#" class="btn primary transition-smooth">Learn More</a>
</div>
```

## Best Practices

1. **Combine thoughtfully**: Choose utilities that work well together and avoid conflicts
2. **Consider mobile first**: Start with base utilities and add responsive variants
3. **Use semantic HTML**: Utilities handle styling, but HTML still conveys meaning
4. **Group related utilities**: Keep related utilities together for readability
5. **Extract components**: For frequently reused patterns, consider creating component classes
6. **RTL compatibility**: Use logical properties (`start`/`end` instead of `left`/`right`) for bi-directional support 