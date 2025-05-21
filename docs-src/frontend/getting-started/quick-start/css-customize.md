# CSS Customization

Phenix Design System provides several powerful ways to customize its appearance to match your project's design requirements without modifying the core files.

## CSS Variables (Custom Properties)

The most straightforward way to customize Phenix is through CSS Variables. The framework uses a comprehensive set of CSS variables for colors, spacing, typography, and more.

### Root Variables

```css
:root {
  /* Primary Colors */
  --primary-color: #0C97F9;
  --primary-hover: #1A69F4;
  --primary-dark: #040f27;
  --primary-reverse: #FFFFFF;
  --primary-offwhite: #e1eef7;
  
  /* Secondary Colors */
  --secondary-color: #F8C25B;
  --secondary-hover: #FB955D;
  --secondary-dark: #b03513;
  --secondary-reverse: #000000;
  --secondary-offwhite: #fddfa8;
  
  /* Typography */
  --primary-font: "Somar Rounded";
  --secondary-font: "Somar Rounded";
  --typography-color: #111111;
  --line-height: 1.625;
  
  /* Font Weights */
  --thin-weight: 100;
  --xlight-weight: 200;
  --light-weight: 300;
  --normal-weight: 400;
  --medium-weight: 500;
  --bold-weight: 600;
  --strong-weight: 700;
  --xbold-weight: 800;
  --black-weight: 900;
  
  /* Responsive Font Sizes */
  --rem-xl: 16px; /* xLarge Screens and Up */
  --rem-lg: 16px; /* Large Screens and Up */
  --rem-md: 15px; /* Medium Screens and Up */
  --rem-sm: 15px; /* Small Screens and Up */
  --rem-xs: 15px; /* Extra Small Screens and Up */
  
  /* Component Appearance */
  --component-bg-lvl-1: #FFFFFF;
  --component-bg-lvl-2: #F2F2F2;
  --component-bg-lvl-3: #F5F5F5;
  --component-tx-lvl-1: var(--dark-color);
  --component-tx-lvl-2: var(--gray-color);
  --component-tx-lvl-3: var(--dark-light);
  
  /* Gradients */
  --primary-gradient: var(--primary-color), var(--primary-hover);
  --secondary-gradient: var(--secondary-color), var(--secondary-hover);
  --success-gradient: #22B567, #00A186;
  --warning-gradient: #FAD934, #F49D1A;
  --danger-gradient: #FD875B, #F9515A, #F96AAC;
  --water-gradient: #00C4FF, #1A69F4;
  --ice-gradient: #54AEFC, #3289E9, #5848D2;
  --fire-gradient: #FFD500, #FAA10B, #F4291A;
  --purple-gradient: #8772F7, #5F48DD;
  
  /* Index Order (Z-index) */
  --header-index: 9991;
  --modal-index: 9999;
  --dropdown-index: 9998;
  
  /* Utility Colors */
  --success-color: #22B567;
  --danger-color: #DE3131;
  --warning-color: #FAD934;
  --info-color: #816CF3;
  --gray-color: #868e96;
  --dark-color: #14171a;
  
  /* Utility Light Colors */
  --info-light: #CECCF9;
  --gray-light: #d9dde1;
  --dark-light: #343a40;
  --success-light: #C1EED9;
  --danger-light: #fbbbbb;
  --warning-light: #FFE875;
}
```

### Customizing Variables

You can override these variables in your own CSS:

```css
/* In your custom CSS file */
:root {
  --primary-color: #e91e63; /* Change primary color to pink */
  --primary-hover: #c2185b; /* Darker shade for hover */
  --primary-font: 'Open Sans', sans-serif; /* Change font family */
  --rem-md: 16px; /* Adjust base font size for medium screens */
  --component-bg-lvl-1: #f8f8f8; /* Lighter background for components */
}
```

## Two-Layer Framework Architecture

Phenix Design System uses a two-layer architecture with separate stylesheets:

1. **Foundation Layer (Components)**:
   - `phenix.css` / `phenix-rtl.css`
   - Contains the core foundation with grid system
   - Provides structural styles and basic component architecture
   - Sets essential resets and baseline styles
   - **Must be loaded first** to establish the structural foundation
   - Cannot be used alone for a complete design system

2. **Enhancement Layer (Utilities)**:
   - `phenix-utils.css` / `phenix-utils-rtl.css`
   - Contains utility classes for styling and customization
   - Extends and enhances the foundation layer components
   - Allows for visual customization and flexibility
   - Enables creation of new components using utility classes
   - **Must be loaded second** to provide styling options

### Correct Implementation

For proper implementation, always load the components layer first, followed by the utilities layer:

```html
<!-- CORRECT: Foundation Layer first, Enhancement Layer second -->
<link href="path/to/phenix.css" rel="stylesheet">
<link href="path/to/phenix-utils.css" rel="stylesheet">
```

This loading order is crucial because:
- It establishes the structural foundation before applying styling
- The components layer provides the architecture that utilities enhance
- It ensures proper inheritance and style application
- Components contain the essential grid system and layout structures
- Utilities provide the customization options on top of the foundation

### Components-Only Implementation (Not Recommended)

While you can technically use only the components layer, it will provide limited styling options:

```html
<!-- Components-only implementation has limited styling capabilities -->
<link href="path/to/phenix.css" rel="stylesheet">
```

### Incorrect Implementation (Avoid)

Never load the utilities layer without the components foundation:

```html
<!-- AVOID: Utilities without components foundation will not work properly -->
<link href="path/to/phenix-utils.css" rel="stylesheet">
```

Utilities are designed to enhance and extend the component foundation, not replace it.

## Architecture Benefits

This two-layer architecture provides significant advantages:

1. **Clear Separation of Concerns**: Structure (components) is separate from styling (utilities)
2. **Flexibility**: Easy to customize component appearance using utilities
3. **Maintainability**: Core structures remain stable while styling can evolve
4. **Extendability**: Build new components on top of the foundation using utilities
5. **Component Consistency**: Ensures consistent base structure across the design system

## SASS Customization

For more comprehensive customization, you can use SASS when working with the source files.

### SASS Structure

Phenix has a centralized configuration system with key SASS files:

1. `phenix.scss` - Core foundation layer with components (**loads first**)
2. `phenix-utils.scss` - Enhancement layer with utilities (**loads second**)
3. `_theme.scss` - Primary CSS variables file with default theme options
4. `components/*.scss` - Component definitions (part of foundation layer)
5. `utilities/*.scss` - Utility class definitions (part of enhancement layer)
6. `assets/_mixin.scss` - Mixins for responsive design, RTL support, etc.
7. `form/*.scss` - Form element files (part of foundation layer)

To customize SASS variables, you can either:

1. Create a custom import with overrides:

```scss
// custom.scss
// Override variables before importing
$direction: ltr; 
$direction-start: left;
$direction-end: right;

// Import Foundation Layer (required)
@import 'phenix-sass/phenix';

// Import Enhancement Layer (optional, adds utilities)
@import 'phenix-sass/phenix-utils'; 
```

2. Modify the `_theme.scss` file if working directly with the source:

```scss
// In _theme.scss
:root {
  --primary-color: #e91e63;
  --primary-hover: #c2185b;
  --typography-color: #212121;
  
  // Custom gradients
  --primary-gradient: #e91e63, #9c27b0;
  --secondary-gradient: #03a9f4, #3f51b5;
}
```

## Utility Classes for Customization

The enhancement layer (`phenix-utils.css`) provides extensive utility classes that you can apply directly in your HTML:

```html
<!-- Custom styling with utility classes from the enhancement layer -->
<button class="btn primary color-white radius-pill pd-10 pdy-15 weight-bold">
  Custom Button
</button>
```

Key utility classes include:

- **Colors**: `bg-primary`, `color-success`, `border-warning`
- **Gradients**: `bg-grade-primary`, `bg-grade-ice`, `bg-grade-fire` 
- **Spacing**: `mt-10`, `mb-20`, `pds-15` (margin-top, margin-bottom, padding-start)
- **Typography**: `fs-16`, `weight-bold`, `line-height-15`
- **Display**: `display-flex`, `align-center`, `justify-between`
- **Borders**: `radius-md`, `border-1`, `border-dashed`

## Framework Versions

Starting with version 1.3.0, Phenix offers two completely separate stylesheet versions:

1. **Components & Integrations**:
   - `phenix.css` / `phenix-rtl.css`
   - Contains components and integrations
   - Does NOT include utility classes

2. **Utilities Only**:
   - `phenix-utils.css` / `phenix-utils-rtl.css`
   - Contains only utility classes
   - Approximately 40% smaller file size than the full set
   - Does NOT include components or integrations

For a complete design system experience, you would need to include both files:

```html
<!-- Complete Phenix Design System (both utilities and components) -->
<link href="path/to/phenix-utils.css" rel="stylesheet">
<link href="path/to/phenix.css" rel="stylesheet">
```

This modular approach allows you to:
- Use only utilities when working with custom components
- Use only the component framework if you have your own utility system
- Use both together for the complete experience

## Theme Customization

### Creating a Theme

You can create a complete theme by customizing a set of CSS variables:

```css
/* dark-theme.css */
:root {
  --body-bg: #121212;
  --typography-color: #e0e0e0;
  --primary-color: #bb86fc;
  --secondary-color: #03dac6;
  --component-bg-lvl-1: #1e1e1e;
  --component-bg-lvl-2: #2d2d2d;
  --component-bg-lvl-3: #333333;
  
  /* Update gradients for dark theme */
  --primary-gradient: #bb86fc, #7c4dff;
  --ice-gradient: #3772ca, #2d5bad, #444ad2;
}
```

### Theme Switching

You can implement theme switching with JavaScript:

```javascript
// Toggle between light and dark theme
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

// Apply theme based on user preference
function applyPreferredTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-theme');
  }
}
```

## Component Customization

### Extending Components

You can extend existing components with your own custom styles:

```scss
// Extend the button component
.btn-custom {
  @extend .btn;
  background-image: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  border: none;
  color: white;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
}
```

### Component Variations

Create your own variations of components:

```css
/* Custom card variation */
.card-dashboard {
  border-left: 4px solid var(--primary-color);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  background-color: var(--component-bg-lvl-1);
}

/* Custom alert with gradient */
.alert-fancy {
  background-image: linear-gradient(var(--gradient-rotation), var(--ice-gradient));
  --gradient-rotation: 45deg;
  border-radius: 0.75rem;
  color: white;
  padding: 15px 20px;
}
```

## WordPress Integration

If you're using the WordPress version of Phenix Design System (pds-blocks), you have additional customization options through the WordPress editor and theme system.

### WordPress Theme.json Integration

Phenix automatically integrates with WordPress theme.json configuration, mapping CSS custom properties to WordPress theme settings:

```css
/* Variables automatically linked to WordPress theme settings */
body:not(.wp-admin):not([class*="login"]), body.block-editor-page {
  --primary-color: var(--wp--preset--color--primary);
  --primary-hover: var(--wp--preset--color--primary-hvr);
  --primary-dark: var(--wp--preset--color--primary-dark);
  --typography-color: var(--wp--preset--color--text);
  --body-bg: var(--wp--preset--color--background);
  /* And many more... */
}
```

This allows you to:
1. Define colors in theme.json for use in the block editor
2. Have your Phenix CSS variables automatically adopt those colors
3. Maintain consistency between blocks and custom components

### WordPress Block Editor Customization

When using Phenix with WordPress, you can customize blocks through:

1. Block Editor controls for colors, typography, spacing, and more
2. Additional CSS classes that leverage Phenix's utility system
3. Theme customization options in the WordPress Customizer
4. Block patterns and templates

For comprehensive WordPress-specific customization documentation, please refer to:

- [WordPress Block Customization](/wordpress/blocks/customization)
- [WordPress Theme Integration](/wordpress/themes/integration)
- [Block Editor Controls](/wordpress/editor/controls)

## CSS Customization Best Practices

1. **Choose the Right File Combination**: 
   - Use only `phenix-utils.css` when you need utility classes with custom components
   - Use only `phenix.css` when you need just the components with your own utility system
   - Use both files together for the complete Phenix Design System
2. **Load in Correct Order**: When using both files, load components first, then utilities
3. **Avoid modifying core files**: Use CSS variables, custom CSS files, or SASS overrides
4. **Keep a consistent design system**: Maintain visual harmony by using consistent colors, spacing, and typography
5. **Use utility classes when possible**: Leveraging existing utilities will ensure consistency and reduce CSS bloat
6. **Optimize for performance**: Minimize custom CSS by reusing existing styles when possible
7. **Document your customizations**: Keep track of the changes you make for easier maintenance
8. **Use logical properties**: Rely on logical properties (`ms-10`, `pde-20`) instead of physical ones for RTL support
9. **Leverage gradients**: Use predefined gradient variables for consistent visual treatments

## Example: Creating a Custom Component

Here's an example of creating a custom card component that builds on Phenix's existing styles (requires both phenix-utils.css and phenix.css):

```html
<div class="card custom-card">
  <div class="card-header bg-grade-primary color-white">
    <h3 class="card-title mb-0">Custom Card</h3>
  </div>
  <div class="card-body pd-20">
    <p class="mb-15">This is a custom card component built with Phenix Design System.</p>
    <button class="btn primary radius-md">Learn More</button>
  </div>
  <div class="card-footer bg-component-lvl-2 border-top">
    <small class="color-gray">Last updated 3 mins ago</small>
  </div>
</div>
```

```css
/* Custom styling */
.custom-card {
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Dark theme support */
.dark-theme .custom-card {
  background-color: var(--component-bg-lvl-1);
  border-color: rgba(255, 255, 255, 0.1);
}
```
