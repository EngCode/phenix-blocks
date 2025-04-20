# TypeScript Modules

This page documents the modular TypeScript architecture of the Phenix Design System, providing details on the available modules and how to use them.

## Module Organization

The Phenix Design System's TypeScript codebase is organized into a modular structure that promotes maintainability and scalability. The code is organized into four primary module categories:

1. **Core** - Base functionality in `index.ts`
2. **Components** - UI component implementations
3. **Features** - Utility features and effects
4. **Integration** - Third-party system integrations

## Core Module (index.ts)

The core module defines the main `Phenix()` function and the `PhenixElements` class, which provide the foundation for DOM manipulation, event handling, and element traversal.

### Main Structure

```typescript
// Core class definition
export class PhenixElements extends Array<HTMLElement | Record<string, any>> {
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
    child(target?:string) { /* ... */ }
    
    // Styling and attributes
    css(style:object, clearInline?) { /* ... */ }
    setAttributes(attributes:{}) { /* ... */ }
    
    // DOM manipulation
    insert(position?:string, elementsPackage?:any) { /* ... */ }
    
    // Event handling
    on(event, callback, live?, timer?) { /* ... */ }
}

// Main Phenix function
const Phenix = (selector?:any) => {
    // Implementation details
    return new PhenixElements(...elements);
};
```

### Core Methods

The core module provides fundamental DOM manipulation methods:

| Method | Purpose | Example |
|--------|---------|---------|
| `ready()` | Execute code when DOM is ready | `Phenix(document).ready(() => { /* code */ })` |
| `addClass()` | Add CSS classes | `Phenix('.element').addClass('active')` |
| `removeClass()` | Remove CSS classes | `Phenix('.element').removeClass('hidden')` |
| `toggleClass()` | Toggle CSS classes | `Phenix('.element').toggleClass('active')` |
| `ancestor()` | Get parent elements | `Phenix('.child').ancestor('.parent')` |
| `siblings()` | Get sibling elements | `Phenix('.item').siblings()` |
| `next()` | Get next sibling | `Phenix('.item').next()` |
| `prev()` | Get previous sibling | `Phenix('.item').prev()` |
| `css()` | Set CSS styles | `Phenix('.element').css({color: 'red'})` |
| `setAttributes()` | Set HTML attributes | `Phenix('.element').setAttributes({id: 'main'})` |
| `on()` | Add event listeners | `Phenix('.button').on('click', function() {})` |

## Component Modules

The components directory contains UI component implementations. Each component is defined as a method on the `Phenix.prototype` and typically follows a similar pattern of initialization and event handling.

### Available Components

| Component | File | Description |
|-----------|------|-------------|
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

### Component Usage Pattern

Most components follow this usage pattern:

```typescript
// Initialize a component
Phenix('.element-selector').componentName({
    // Optional configuration options
    option1: 'value1',
    option2: 'value2'
});
```

### Example: Dropdown Component

The dropdown component provides enhanced dropdown functionality:

```typescript
// Initialize a dropdown
Phenix('.dropdown-toggle').dropdown({
    // Optional configuration
    animation: "fade",        // Animation type: fade, scale, slide
    duration: 300,            // Animation duration in ms
    placement: "bottom-start" // Dropdown position
});

// Method defined in components/dropdown.ts
PhenixElements.prototype.dropdown = function (options?:{
    toggle?:string,   //====> Toggle Button Class Name : px-toggle
    target?:string,   //====> Target to Toggle (add/remove) Active Class
    active?:string,   //====> Active Class Name : px-active
    hover?:boolean,   //====> Support on Hover Show/Hide
    exclude?:string,  //====> Exclude from on Blank Click only [CSS :not()... Selector]
    position?:string, //====> the position of the target [top or bottom, start or end]
    //====> Hide/Show Toggle Effect [fade, slide] <====//
    effect?:{
        type?:string,
        duration?:number,
        delay?:number,
        display?:string,
    },
}) {
    // Implementation
    return this.forEach((element) => {
        // Component logic...
    });
};
```

### Example: Tabs Component

The tabs component provides tabbed content navigation:

```typescript
// Initialize tabs
Phenix('.tabs-element').tabs({
    active: 0,       // Show Tab # on Initial
    navigation: '.tabs-navigation',  // Navigation Selector
    hash_url: true    // Show Tab from URL #ID
});

// Method defined in components/tabs.ts
PhenixElements.prototype.tabs = function (options?:{
    active?:number,     //===> Show Tab # on Initial
    navigation?:string, //===> Navigation Selector
    hash_url?:boolean,  //===> Show Tab from URL #ID
}) {
    // Implementation
    return this;
}
```

## Feature Modules

Feature modules provide utilities and effects that can be used with any element. These are implemented as methods on the `Phenix.prototype`.

### Available Features

| Feature | File | Description |
|---------|------|-------------|
| Animations | `features/animations.ts` | Element animations triggered by viewport |
| Effects | `features/effects.ts` | UI effects like fade and slide |
| Scroll Effects | `features/effects-scroll.ts` | Scroll-based effects |
| Form Validation | `features/validation.ts` | Form input validation rules |
| Collapse | `features/collapse.ts` | Collapsible content sections |
| Counter | `features/counter.ts` | Animated number counters |
| Notifications | `features/notifications.ts` | Toast notification system |
| Viewport | `features/viewport.ts` | Viewport detection utilities |
| Get Info | `features/get-info.ts` | Element information utilities |
| Connect | `features/connect.ts` | AJAX and data connection utilities |

### Example: Animations Feature

The animations feature adds CSS-based animations that trigger when elements enter the viewport:

```typescript
// Add viewport-based animations
Phenix('.animate-element').animations({
    animation: 'fadeIn',     // Animation class name
    duration: 700,           // Animation duration in ms
    delay: 0,                // Delay before animation starts (ms)
    offset: 0,               // Decrease target position by [number]
    into: 0,                 // Increase target position by [number]
    exit: 'fadeOut',         // Exit animation class name
    animateCSS: 'all'        // Load animation CSS (all, specific, or array)
});
```

### Example: Effects Feature

The effects feature provides methods for common UI transitions:

```typescript
// Use fade effects
Phenix('.element').fadeIn(300, 0, 'block');  // duration, delay, display
Phenix('.element').fadeOut(300, 0);          // duration, delay
Phenix('.element').fadeToggle(300, 0, 'block'); // duration, delay, display

// Use slide effects
Phenix('.element').slideDown(300, 0, 'block');  // duration, delay, display
Phenix('.element').slideUp(300, 0);             // duration, delay
Phenix('.element').slideToggle(300, 0, 'block'); // duration, delay, display
```

## Integration Modules

Integration modules provide compatibility with third-party systems and libraries. These modules adapt Phenix features to work with specific platforms like WordPress or enhance functionality with libraries like Splide Slider.

### Available Integrations

| Integration | File | Description |
|-------------|------|-------------|
| WordPress | `integration/wordpress.ts` | WordPress-specific functionality |
| Blocks | `integration/blocks.ts` | Gutenberg blocks front-end scripts |
| WooCommerce | `integration/woocommerce.ts` | WooCommerce integration |
| Slider | `integration/slider.ts` | Splide slider integration |
| Swiper | `integration/swiper.ts` | Swiper slider integration |
| Utilities | `integration/utilities.ts` | General utility integrations |
| Loader | `integration/loader.ts` | Page loading system |

### Example: WordPress Integration

The WordPress integration module adds WordPress-specific functionality:

```typescript
// In integration/wordpress.ts
Phenix(document).ready(() => {
    // WordPress-specific initializations
    
    // Handle WordPress admin bar
    const adminBar = document.getElementById('wpadminbar');
    if (adminBar) {
        document.body.style.paddingTop = adminBar.offsetHeight + 'px';
    }
    
    // Initialize other WordPress-specific features
});
```

### Example: Slider Integration

The slider integration provides a wrapper for the Splide slider library:

```typescript
// Initialize a slider
Phenix('.slider-element').slider({
    type: 'loop',        // Slider type: loop, slide, fade
    items: 3,            // Slides per page
    autoplay: true,      // Enable autoplay
    duration: 6000,      // Autoplay interval (ms)
    speed: 700           // Transition speed (ms)
});

// Method defined in integration/slider.ts
PhenixElements.prototype.slider = function (options?:{
    type?:string;
    focus?:any;
    items?:number;
    steps?:number;
    speed?:number;
    start?:number;
    duration?:number;
    autoplay?:boolean;
    controls?:any;
    pagination?:any;
    // Additional options...
}) {
    // Implementation
    return this;
}
```

## Extending Phenix with Custom Modules

You can extend Phenix with your own modules by adding methods to the `Phenix.prototype`.

### Creating a Custom Component

```typescript
// Define a custom component
Phenix.prototype.myComponent = function(options = {}) {
    // Default options
    const defaults = {
        option1: 'default',
        option2: true
    };
    
    // Merge options
    const settings = Object.assign({}, defaults, options);
    
    // Return this for chaining
    return this.forEach((element) => {
        // Component implementation logic
        element.classList.add('my-component');
        
        // Add event listeners
        element.addEventListener('click', function() {
            // Handle events
        });
    });
};

// Use your custom component
Phenix('.my-elements').myComponent({
    option1: 'custom',
    option2: false
});
```

### Custom Module Best Practices

1. **Follow the Pattern**: Use the same method signature and return pattern as existing modules
2. **Return this**: Always return `this` for method chaining
3. **Use forEach**: Process each element individually with `this.forEach()`
4. **Default Options**: Provide sensible defaults and merge with user options
5. **Cleanup**: Include cleanup logic to prevent memory leaks 