# Responsive Design

Phenix Design System provides a powerful and flexible responsive design system that allows your websites and applications to adapt seamlessly to different screen sizes and devices.

## Overview

Phenix is built with a mobile-first approach, ensuring that your projects are responsive by default. The framework includes a comprehensive set of responsive utilities and components that make it easy to create adaptive interfaces.

## Framework Versions and Responsiveness

Phenix Design System consists of two distinct files that serve different purposes:

1. **Components & Integrations Files**:
   - `phenix.css` / `phenix-rtl.css`
   - Include components and integrations
   - Do NOT include utility classes
   - Contain responsive component behavior (like responsive navbars)

2. **Utilities-Only Files**:
   - `phenix-utils.css` / `phenix-utils-rtl.css`
   - Include only utility classes including all responsive utilities
   - Do NOT include components or integrations
   - Contain all responsive utility classes (display, sizing, spacing, etc.)

For a complete framework with both components and utilities, you'll need to include both files:

```html
<!-- Complete responsive framework (load utilities first) -->
<link href="path/to/phenix-utils.css" rel="stylesheet">
<link href="path/to/phenix.css" rel="stylesheet">
```

## Responsive Breakpoints

Phenix uses the following breakpoints defined in the framework's core:

| Breakpoint | Class Prefix | Screen Width |
|------------|--------------|--------------|
| Extra Small | (default) | < 500px |
| Small | sm | 500px - 767px |
| Medium | md | 768px - 1199px |
| Large | lg | 1200px - 1399px |
| Extra Large | xl | ≥ 1400px |

## Responsive Container

The `.container` class (found in the components file) automatically adjusts its width based on the screen size:

```html
<div class="container">
  <!-- Content that adapts to screen size -->
</div>
```

For a full-width container that still applies padding at the edges, use:

```html
<div class="container-fluid">
  <!-- Full-width content with edge padding -->
</div>
```

Phenix also provides additional container classes with different max-width settings:

```html
<div class="container-xs"><!-- Optimized for extra small screens --></div>
<div class="container-sm"><!-- Optimized for small screens --></div>
<div class="container-md"><!-- Optimized for medium screens --></div>
<div class="container-lg"><!-- Optimized for large screens --></div>
<div class="container-xl"><!-- Optimized for extra large screens --></div>
```

## Responsive Grid System

Phenix's grid system (found in the components file) uses a 12-column layout that can be customized for different screen sizes:

```html
<div class="row">
  <!-- Full width on mobile, half width on medium screens and above -->
  <div class="col-12 col-md-6">Column 1</div>
  
  <!-- Full width on mobile, half width on medium screens and above -->
  <div class="col-12 col-md-6">Column 2</div>
</div>
```

You can also create auto-width columns using the `.col` or `.col-auto` classes:

```html
<div class="row">
  <div class="col">Auto-width column</div>
  <div class="col">Auto-width column</div>
  <div class="col">Auto-width column</div>
</div>
```

## Responsive Utilities

### Display Utilities

Control when elements are displayed based on screen size (found in the utilities file):

```html
<!-- Hidden on small screens and up -->
<div class="hidden-sm-up">Only visible on extra-small screens</div>

<!-- Hidden on medium screens and down -->
<div class="hidden-md-down">Only visible on large and up</div>
```

Phenix provides these visibility classes for each breakpoint:
- `.hidden-sm-up` - Hidden on small screens and larger
- `.hidden-sm-down` - Hidden on small screens and smaller
- `.hidden-md-up` - Hidden on medium screens and larger
- `.hidden-md-down` - Hidden on medium screens and smaller
- `.hidden-lg-up` - Hidden on large screens and larger
- `.hidden-lg-down` - Hidden on large screens and smaller
- `.hidden-xl-up` - Hidden on extra-large screens
- `.hidden-xl-down` - Hidden on extra-large screens and smaller

### Display Properties

You can control display properties with breakpoint suffixes (found in the utilities file):

```html
<!-- Block display on all screens, flex on medium and up -->
<div class="display-block display-md-flex">
  <!-- Content here -->
</div>
```

Available classes:
- `.display-block` / `.display-[breakpoint]-block`
- `.display-flex` / `.display-[breakpoint]-flex`
- `.display-grid` / `.display-[breakpoint]-grid`
- `.inline-block` / `.inline-block-[breakpoint]`

### Visibility Properties

Control element visibility without removing them from the DOM (found in the utilities file):

```html
<div class="visibility-hidden visibility-md-visible">
  This element is hidden on small screens but visible on medium and up
</div>
```

Available classes:
- `.visibility-hidden` / `.visibility-[breakpoint]-hidden`
- `.visibility-visible` / `.visibility-[breakpoint]-visible`
- `.visibility-collapse` / `.visibility-[breakpoint]-collapse`

## Responsive Width and Height

Phenix provides width utilities that can be applied at different breakpoints (found in the utilities file):

```html
<!-- 100% width on mobile, fixed width of 480px on medium screens -->
<div class="w-fluid w-md-480">Responsive width</div>
```

## Responsive Images

Make images responsive with the `.fluid` or `.w-fluid` class (found in the utilities file):

```html
<img src="image.jpg" alt="Responsive image" class="fluid">
```

## Media Queries in SASS

When developing with SASS, you can use the included media query mixins:

```scss
// In your SASS file
.custom-element {
  font-size: 1rem; // Default size for mobile
  
  @include medium() {
    font-size: 1.25rem; // Medium screens and up
  }
  
  @include large() {
    font-size: 1.5rem; // Large screens and up
  }
}
```

The framework provides these mixins:
- `@include xSmall()` - For extra small screens
- `@include small()` - For small screens and up
- `@include medium()` - For medium screens and up
- `@include large()` - For large screens and up
- `@include xlarge()` - For extra large screens and up

You can also target screens from the breakpoint and down:
```scss
@include medium('down') {
  // Styles for medium screens and down
}
```

## Best Practices

- **Choose the right files**: 
  - Use only `phenix-utils.css` when you need just responsive utilities
  - Use only `phenix.css` when you need just responsive components
  - Use both together for complete responsive framework
- **Load in correct order**: When using both files, load utilities first, then components
- **Mobile-first approach**: Start with styles for mobile devices, then enhance for larger screens
- **Use the grid system**: Leverage the built-in 12-column grid for layouts
- **Breakpoint prefixes**: Apply responsive utilities with breakpoint prefixes (e.g., `col-md-6`)
- **Test across devices**: Always test your designs on multiple screen sizes
- **Keep it simple**: Don't over-complicate responsive designs with too many breakpoint-specific styles

::: info
For WordPress-specific responsive features, please refer to the [WordPress Documentation section](/wordpress/).
::: 