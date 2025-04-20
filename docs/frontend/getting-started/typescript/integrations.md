# TypeScript Integrations

The Phenix Design System provides seamless integration between its TypeScript framework and various third-party systems. This page documents how Phenix integrates with WordPress, sliders, and other essential tools.

## Integration Structure

The integration modules are located in the `src/scripts/integration/` directory and include:

| File | Purpose |
|------|---------|
| `wordpress.ts` | WordPress-specific integrations |
| `blocks.ts` | Gutenberg blocks front-end scripts |
| `woocommerce.ts` | WooCommerce functionality |
| `slider.ts` | Splide slider integration |
| `swiper.ts` | Swiper slider integration |
| `utilities.ts` | Utility integrations |
| `loader.ts` | Page and content loading system |

## WordPress Integration

The WordPress integration (`wordpress.ts`) enables seamless interaction between Phenix components and WordPress core functionality:

```typescript
// Main integration initializer
Phenix(document).ready(() => {
    // Initialize WordPress-specific features
});
```

### Key WordPress Features

- **Admin Bar Handling**: Adjusts layout when the WordPress admin bar is present
- **Comment System Enhancements**: Improves the native WordPress comment forms
- **Customizer Preview Support**: Real-time preview of theme customizations
- **Blocks Integration**: Front-end functionality for Phenix blocks
- **Page Transitions**: Smooth page transitions for WordPress sites

### Blocks Integration

The Blocks integration (`blocks.ts`) provides front-end functionality for Gutenberg blocks:

```typescript
// Table of contents generator
let postContent = document.querySelector(".entry-content"),
    content_menu = document.querySelector('#table-of-content-list');

if (postContent && content_menu) {
    // Get Headlines
    let headlines = postContent.querySelectorAll('h2, h3, h4');
    
    // Process headlines into a table of contents
}
```

Key features include:
- Table of contents generation
- Modal popup handling
- Accordion and tabs functionality
- Responsive menu controls
- Scroll effects for blocks

## WooCommerce Integration

The WooCommerce integration (`woocommerce.ts`) enhances the eCommerce experience:

```typescript
// Add to cart functionality
Phenix.prototype.pds_add_to_cart = function(options = {}) {
    // Implementation for AJAX add to cart
};

// Remove from cart functionality
Phenix.prototype.pds_remove_from_cart = function(options = {}) {
    // Implementation for AJAX remove from cart
};

// Toggle wishlist functionality
Phenix.prototype.pds_toggle_wishlist = function(options = {}) {
    // Implementation for wishlist management
};
```

Key features include:
- AJAX cart management (add/remove)
- Wishlist functionality
- Quick view product details
- Cart count updates
- Product filtering and sorting
- Mini cart functionality

## Slider Integrations

Phenix offers integration with popular slider libraries:

### Splide Slider

The Splide integration (`slider.ts`) provides advanced slider functionality:

```typescript
// Initialize Splide slider
Phenix.prototype.slider = function(options = {}) {
    // Implementation for slider functionality
    return this.forEach((element) => {
        // Initialize Splide with options
    });
};
```

Key features include:
- Responsive sliders
- Custom navigation and pagination
- Auto-play options
- Fade and slide effects
- Touch and swipe support
- Grid layouts for sliders

### Swiper Slider

The Swiper integration (`swiper.ts`) provides alternative slider functionality with different capabilities:

```typescript
// Initialize Swiper slider with custom options
Phenix('.swiper-slider').each((slider) => {
    // Configure and initialize Swiper
});
```

## Utilities Integration

The Utilities integration (`utilities.ts`) provides general utility functions:

```typescript
// Initialize utilities
Phenix.prototype.utilities = function() {
    // Make external links open in new tab
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    
    // Create animated counters
    Phenix('.px-counter').forEach((element) => {
        // Counter implementation
    });
    
    // Other utility initializations
};
```

Key features include:
- External link handling
- Counter animations
- Equal height elements
- "To Top" button functionality
- Responsive table handling
- Lazy loading

## Loader Integration

The Loader integration (`loader.ts`) manages page and content loading:

```typescript
// Initialize page loader
Phenix.prototype.loader = function(options = {}) {
    // Implementation for loading screens and transitions
};
```

Key features include:
- Page loading animations
- AJAX content loading
- Loading progress indicators
- Transition effects
- Background loading for assets

## Dynamic JS/CSS Loading

The framework includes a dynamic import system for loading JavaScript and CSS files:

```typescript
// Import external library
Phenix(document).import(
    "library-name",       // ID for the import
    "js",                // Type (js/css)
    "path/to/library.js", // Source URL
    () => {
        // Callback when loaded
    },
    {
        integrated: true, // Whether to use the built-in library path
        module: false     // Whether to load as ES6 module
    }
);
```

This allows for:
- On-demand loading of external libraries
- Conditional loading based on feature detection
- Reduced initial page load time
- Management of dependencies

## WordPress-Specific Data Access

When working within WordPress, you can access specific data:

```typescript
// Access WordPress data through global variable
declare var PDS_WP_KEY: any;

// Example usage
const siteURL = PDS_WP_KEY.site_url;
const restURL = PDS_WP_KEY.rest_url;
const nonce = PDS_WP_KEY.nonce;
```

This allows access to:
- WordPress REST API URL
- Site URL
- Security nonces
- Theme directory paths
- User information

## Integration Best Practices

1. **Conditional Loading**: Only load integrations when the related elements exist on the page
2. **Performance First**: Minimize JavaScript execution during initial page load
3. **Graceful Degradation**: Ensure basic functionality works even if JavaScript fails
4. **WordPress Hooks**: Use WordPress hooks when available instead of reinventing functionality
5. **CSS Class Conventions**: Follow the Phenix class naming conventions for integration components

## Implementation Examples

### Initialize WordPress-Enhanced Features

```typescript
// In custom-scripts.ts
import Phenix from '.';

Phenix(document).ready(() => {
    // Initialize sliders
    Phenix('.px-slider').slider();
    
    // Initialize WordPress-specific features
    const wpBlocks = document.querySelector('.wp-block');
    if (wpBlocks) {
        // WordPress-specific initializations
    }
    
    // WooCommerce integration
    const wooPage = document.querySelector('.woocommerce');
    if (wooPage) {
        // WooCommerce-specific initializations
    }
});
```

### Create Custom Integration

You can create your own integration with third-party libraries:

```typescript
// Custom integration example
import Phenix from 'path/to/phenix';

// Extend Phenix with custom integration
Phenix.prototype.customIntegration = function(options = {}) {
    return this.forEach((element) => {
        // Implementation details
    });
};

// Usage
Phenix('.custom-elements').customIntegration({
    // Custom options
});
``` 