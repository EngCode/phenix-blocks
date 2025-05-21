# Custom Scrollbar

The Custom Scrollbar utility in the Phenix Design System allows you to apply styled scrollbars to elements with overflow, replacing the browser's default scrollbar appearance for better visual integration.

## Overview

Browsers' default scrollbars can vary in appearance and often don't match a website's design aesthetic. The custom scrollbar utility provides a consistent, minimal, and themeable scrollbar style.

## Usage

Apply the `.px-scrollbar` class to any element that has `overflow: auto` or `overflow: scroll` (or `overflow-y: auto/scroll`, `overflow-x: auto/scroll`).

```html
<!-- Container with vertical overflow and custom scrollbar -->
<div class="px-scrollbar" style="height: 200px; overflow-y: auto;">
  <p>This content is long enough to cause vertical scrolling.</p>
  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
  <!-- More content... -->
</div>

<!-- Container with horizontal overflow and custom scrollbar -->
<div class="px-scrollbar" style="width: 300px; overflow-x: auto; white-space: nowrap;">
  This text is very long and will cause horizontal scrolling. Lorem ipsum dolor sit amet...
</div>
```

## How It Works

The `.px-scrollbar` class uses vendor-prefixed CSS properties (`::-webkit-scrollbar`, `::-webkit-scrollbar-track`, `::-webkit-scrollbar-thumb`) to style the scrollbar components in WebKit-based browsers (like Chrome, Safari, Edge). It typically creates a thinner track and thumb compared to default scrollbars.

Note: Styling scrollbars using these properties is not universally supported across all browsers (e.g., Firefox uses different properties like `scrollbar-width` and `scrollbar-color`, which might also be targeted by the utility for broader compatibility).

## Customization

The appearance of the custom scrollbar can be controlled using CSS variables:

-   `--scrollbar-color`: Controls the color of the scrollbar track (the background area). Default is typically a light gray or transparent.
-   `--scrollbar-thumb`: Controls the color of the scrollbar thumb (the draggable part). Default is typically a darker gray.

```html
<!-- Custom scrollbar colors -->
<div class="px-scrollbar" 
     style="height: 150px; overflow-y: auto; --scrollbar-color: var(--primary-offwhite); --scrollbar-thumb: var(--primary-color);">
  <!-- Content -->
</div>
```

## Use Cases

-   Styling scrollable `<div>` containers.
-   Customizing the scrollbar for `<textarea>` elements.
-   Improving the look of scrollable sidebars, modals, or dropdowns.

## Best Practices

1.  **Ensure Visibility**: Make sure the scrollbar thumb has sufficient contrast against the track for usability.
2.  **Don't Make it Too Thin**: While aiming for a minimal look, ensure the scrollbar remains easily grabbable with a mouse.
3.  **Test Cross-Browser**: Check the appearance in different browsers, as support and rendering can vary.
4.  **Consider Touch Devices**: Custom scrollbars are primarily for desktop browsers; touch devices typically have overlay scrollbars that are less intrusive. 