# TypeScript Overview

The Phenix Design System uses TypeScript to provide a powerful, modular JavaScript library for DOM manipulation, UI components, and interactive features. This document provides an overview of how TypeScript is used within the framework.

## Introduction

The Phenix JavaScript framework is built with TypeScript, providing type safety and modern JavaScript features while maintaining a familiar jQuery-like API. The framework follows a modular architecture that allows developers to use only the features they need.

```typescript
// Basic usage example
Phenix('.element').addClass('active').on('click', function() {
    // Handle click event
});
```

## Core Architecture

The Phenix TypeScript framework is built around two main constructs:

1. **The `Phenix()` Function** - The main entry point that accepts selectors and returns PhenixElements
2. **The `PhenixElements` Class** - Extends JavaScript's native Array to provide DOM manipulation methods

```typescript
/*====> Phenix Object <====*/
export class PhenixElements extends Array<HTMLElement | Record <string, any>> {
    // DOM-ready method
    ready(callback: () => void): this { /* ... */ }
    
    // Class manipulation
    addClass(className: any) { /* ... */ }
    removeClass(className: string) { /* ... */ }
    toggleClass(className: string) { /* ... */ }
    
    // DOM traversal
    ancestor(target?) { /* ... */ }
    siblings(target?) { /* ... */ }
    next(target?, all_target?) { /* ... */ }
    prev(target?, all_target?) { /* ... */ }
    
    // Event handling
    on(event, callback, live?, timer?) { /* ... */ }
}

/*====> Main Phenix Function <====*/
const Phenix = (selector?:any) => {
    // Implementation details
    return new PhenixElements(...elements);
}
```

## Key Features

- **Chainable DOM Manipulation** - Methods can be chained for concise code
- **Event Handling** - Simplified event binding and management
- **UI Components** - Ready-to-use interactive components
- **Animations and Effects** - Fade, slide, and custom animations
- **Form Validation** - Built-in form validation utilities
- **Integration Support** - WordPress, WooCommerce, and slider integrations
- **Type Safety** - TypeScript provides type definitions for all methods and components

## Core Modules

The Phenix TypeScript codebase is organized into several categories:

### 1. Core (index.ts)

The core module provides fundamental DOM manipulation methods:

```typescript
// Class manipulation
Phenix('.element').addClass('new-class');
Phenix('.element').removeClass('old-class');
Phenix('.element').toggleClass('toggle-class');

// DOM traversal
const parent = Phenix('.child').ancestor();
const siblings = Phenix('.item').siblings();
const next = Phenix('.item').next();

// Event handling
Phenix('.button').on('click', function() {
  // Event handler code
});

// Attributes and styles
Phenix('.element').css({color: 'red', fontSize: '16px'});
Phenix('.element').setAttributes({id: 'main', 'data-value': '10'});
```

### 2. Features

Feature modules provide enhanced functionality:

| Module | File | Purpose |
|--------|------|---------|
| Animations | `features/animations.ts` | CSS-based animations triggered by viewport |
| Effects | `features/effects.ts` | UI effects like fade and slide |
| Scroll Effects | `features/effects-scroll.ts` | Scroll-based effects and behaviors |
| Form Validation | `features/validation.ts` | Form input validation |
| Collapse | `features/collapse.ts` | Collapsible content sections |
| Counter | `features/counter.ts` | Animated number counters |
| Notifications | `features/notifications.ts` | Toast notification system |
| Viewport | `features/viewport.ts` | Viewport detection utilities |
| Get Info | `features/get-info.ts` | Element information utilities |
| Connect | `features/connect.ts` | AJAX and data connection utilities |

### 3. Components

UI component modules implement interactive elements:

| Component | File | Purpose |
|-----------|------|---------|
| Tabs | `components/tabs.ts` | Tabbed content navigation |
| Popup | `components/popup.ts` | Modal popup windows |
| Media | `components/media.ts` | Media handling utilities |
| Timer | `components/timer.ts` | Countdown timers |
| Progress | `components/progress.ts` | Progress indicators |
| Menu | `components/menu.ts` | Navigation menus |
| Rating | `components/rating.ts` | Star rating interface |
| DataTable | `components/datatable.ts` | Enhanced data tables |
| Dropdown | `components/dropdown.ts` | Dropdown menus |
| Select | `components/select.ts` | Enhanced select inputs |
| Uploader | `components/uploader.ts` | File upload component |

### 4. Integrations

Integration modules provide compatibility with third-party systems:

| Integration | File | Purpose |
|-------------|------|---------|
| WordPress | `integration/wordpress.ts` | WordPress-specific functionality |
| Blocks | `integration/blocks.ts` | Gutenberg blocks front-end scripts |
| WooCommerce | `integration/woocommerce.ts` | WooCommerce integration |
| Slider | `integration/slider.ts` | Splide slider integration |
| Swiper | `integration/swiper.ts` | Swiper slider integration |
| Utilities | `integration/utilities.ts` | General utility integrations |
| Loader | `integration/loader.ts` | Page loading system |

## Using the Framework

### Basic Usage

```html
<!-- Include the JavaScript file -->
<script src="path/to/phenix.js"></script>

<script>
  // Wait for DOM to be ready
  Phenix(document).ready(function() {
    // Initialize a component
    Phenix('.dropdown-toggle').dropdown();
    
    // Add event listeners
    Phenix('.menu-button').on('click', function() {
      Phenix('.side-menu').toggleClass('active');
    });
  });
</script>
```

### Component Initialization

Most components are initialized by calling their corresponding method:

```javascript
// Initialize tabs
Phenix('.tabs-container').tabs({
  active: 0,              // Show Tab # on Initial
  navigation: '.tabs-navigation',  // Navigation Selector
  hash_url: true          // Show Tab from URL #ID
});

// Initialize dropdown
Phenix('.dropdown-toggle').dropdown({
  effect: {
    type: "fade",         // Animation type: fade, slide
    duration: 300,        // Animation duration in ms
  },
  position: "bottom, start"  // Dropdown position
});

// Initialize popup modal
Phenix('.modal-trigger').popup({
  closeBtn: true,         // Show close button
  overlay: true,          // Show overlay
  overlayClose: true      // Close on overlay click
});
```

### Custom Extensions

You can extend Phenix with your own functionality using the prototype pattern:

```typescript
// Add a custom method
Phenix.prototype.highlight = function(color = 'yellow') {
  return this.forEach((element) => {
    element.style.backgroundColor = color;
  });
};

// Use your custom method
Phenix('.important-text').highlight();
```

## Performance Considerations

The Phenix TypeScript framework is designed with performance in mind:

- Methods are optimized to minimize DOM operations
- Event delegation is used for better performance
- Components only initialize when needed
- Code is tree-shakable for modern bundlers

## Browser Compatibility

The framework supports modern browsers:

- Chrome 84+
- Firefox 63+
- Safari 12+
- Edge 84+
- iOS Safari 12.1+
- Android Chrome 84+

## Next Steps

- Explore [TypeScript Build Tools](/frontend/getting-started/typescript/build-tools) to learn about the build process
- Dive into [TypeScript Modules](/frontend/getting-started/typescript/modules) for detailed module documentation
- See [TypeScript Integrations](/frontend/getting-started/typescript/integrations) for third-party system integration
