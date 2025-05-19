# Components Utilities

## Overview

The Phenix Design System includes a collection of JavaScript utilities that enhance the functionality and user experience of various components. These utilities are designed to be easy to implement, highly customizable, and performance-optimized.

## Available Utilities

The Phenix JavaScript utilities include:

| Utility | Description | Documentation |
|---------|-------------|---------------|
| **Table of Content** | Automatically generates a navigation menu from headings in content | [Table of Content](./table-of-content.md) |
| **Smooth Scroll** | Enables smooth scrolling to page sections | Integrated with [Table of Content](./table-of-content.md) |
| **Sticky Elements** | Makes elements stick to a position during scroll | Coming soon |
| **Popup Modals** | Creates modal dialogs and popups | Coming soon |

## Automatic Initialization

Many of these utilities are automatically initialized for elements with specific classes:

```js
// This happens in Phenix.init()
Phenix(document).utilities(); // Initializes Table of Content and other utilities
Phenix("[data-sticky], .main-header.position-st").sticky({into: 0});
Phenix('.px-modal').popup();
```

## Manual Initialization

You can also manually initialize these utilities with custom options:

```js
// Initialize Table of Content with custom options
Phenix(document).utilities({
  type: 'toc',
  // Custom options if available
});

// Initialize Sticky Elements
Phenix(".my-sticky-element").sticky({
  into: 100
});

// Initialize Popup Modal
Phenix(".my-modal").popup({
  // Custom options
});
```

## Common Features

Many of the Phenix JavaScript utilities share common features and patterns:

### Data Attributes

Utilities often support configuration via data attributes, allowing for HTML-only implementation:

```html
<!-- Table of Content container -->
<ul id="table-of-content-list"></ul>

<!-- Sticky element with data attributes -->
<div data-sticky data-into="50">Sticky content</div>
```

### Responsive Behavior

Utilities are designed to work across different screen sizes and adapt to responsive layouts.

### Performance Optimization

Utilities use modern browser APIs (like Intersection Observer) when available for better performance.

### Event Integration

Utilities can respond to and trigger events, allowing for integration with other components and custom code.

## Best Practices

- Use the automatic initialization when possible for simpler implementation
- Customize utilities with options or data attributes for specific needs
- Combine utilities for more complex interactions (e.g., Table of Content with Smooth Scroll)
- Test utility behavior across different devices and screen sizes
- Consider performance implications for pages with many interactive elements

## Browser Compatibility

The Phenix JavaScript utilities are compatible with all modern browsers. Some features may have fallbacks for older browsers, but the best experience is provided in up-to-date browsers.
