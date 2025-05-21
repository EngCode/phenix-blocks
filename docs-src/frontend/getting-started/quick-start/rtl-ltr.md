# RTL & LTR Support

Phenix Design System provides robust support for both Right-to-Left (RTL) and Left-to-Right (LTR) text directions through its SASS-based architecture.

## Overview

Bidirectional text support in Phenix is implemented through a powerful system of SASS variables and mixins. This approach provides an efficient way to handle directional properties and ensures proper RTL/LTR support throughout the framework.

## Quick Implementation Guide

To properly implement RTL or LTR in your project:

1. **Set the HTML direction attribute**:
```html
<!-- For RTL languages like Arabic,  etc. -->
<html dir="rtl" lang="ar">
  <!-- Your content here -->
</html>

<!-- For LTR languages (default) -->
<html dir="ltr" lang="en">
  <!-- Your content here -->
</html>
```

2. **Include the correct CSS file**:
```html
<!-- For RTL mode (Components & Integrations only) -->
<link href="path/to/phenix-rtl.css" rel="stylesheet">

<!-- For RTL mode (Utilities Only) -->
<link href="path/to/phenix-utils-rtl.css" rel="stylesheet">

<!-- For RTL mode (Complete framework - both files together) -->
<link href="path/to/phenix-utils-rtl.css" rel="stylesheet">
<link href="path/to/phenix-rtl.css" rel="stylesheet">

<!-- For LTR mode (Components & Integrations only) -->
<link href="path/to/phenix.css" rel="stylesheet">

<!-- For LTR mode (Utilities Only) -->
<link href="path/to/phenix-utils.css" rel="stylesheet">

<!-- For LTR mode (Complete framework - both files together) -->
<link href="path/to/phenix-utils.css" rel="stylesheet">
<link href="path/to/phenix.css" rel="stylesheet">
```

3. **Use logical direction classes in your HTML**:
```html
<!-- These classes will adapt automatically based on direction -->
<div class="ms-20 me-10">
  <!-- ms-20: margin-start (left in LTR, right in RTL) -->
  <!-- me-10: margin-end (right in LTR, left in RTL) -->
  Content with directional margins
</div>

<div class="pds-15 pde-10">
  <!-- pds-15: padding-start (left in LTR, right in RTL) -->
  <!-- pde-10: padding-end (right in LTR, left in RTL) -->
  Content with directional padding
</div>

<div class="float-start">
  <!-- Floats left in LTR, right in RTL -->
  Start-aligned content
</div>

<div class="float-end">
  <!-- Floats right in LTR, left in RTL -->
  End-aligned content
</div>
```

> **Important**: Both the HTML dir attribute AND the correct CSS file are required for proper RTL/LTR support.

## Modular Framework Options

With the modular approach in Phenix 1.3.0, you have multiple options for RTL/LTR support:

| File Name | Description | Use Case |
|-----------|-------------|----------|
| `phenix.css` | Components & Integrations only for LTR | When you need only components and integrations for LTR projects |
| `phenix-rtl.css` | Components & Integrations only for RTL | When you need only components and integrations for RTL projects |
| `phenix-utils.css` | Utilities Only for LTR | When you need only utility classes for LTR projects |
| `phenix-utils-rtl.css` | Utilities Only for RTL | When you need only utility classes for RTL projects |
| Both files together | Complete framework | When you need both components and utilities |

The utilities-only files are significantly smaller, making them ideal for projects where you have custom components but still need Phenix's directional utility classes.

## Implementation Architecture

### SASS Direction Variables

The framework defines four key direction variables at the root of its SASS files:

```scss
// For LTR mode (phenix.scss, phenix-utils.scss)
$direction: ltr;
$direction-reverse: rtl;
$direction-start: left;
$direction-end: right;

// For RTL mode (phenix-rtl.scss, phenix-utils-rtl.scss)
$direction: rtl;
$direction-reverse: ltr;
$direction-start: right;
$direction-end: left;
```

These variables control all directional aspects of the framework and are set differently in the LTR and RTL stylesheets.

## Available Logical Direction Classes

Phenix provides these logical direction utility classes (found in the utilities files):

| Class | Description | LTR Property | RTL Property |
|-------|-------------|--------------|--------------|
| `ms-{size}` | Margin-start | margin-left | margin-right |
| `me-{size}` | Margin-end | margin-right | margin-left |
| `pds-{size}` | Padding-start | padding-left | padding-right |
| `pde-{size}` | Padding-end | padding-right | padding-left |
| `pos-start-{size}` | Position from start | left | right |
| `pos-end-{size}` | Position from end | right | left |
| `float-start` | Float to start | float: left | float: right |
| `float-end` | Float to end | float: right | float: left |

Where `{size}` can be any value from the spacing scale: 0, 5, 10, 15, 20, 25, ... up to 100.

## Directional Mixins

Phenix uses SASS mixins to handle directional properties such as margins and paddings:

### Margin Inline Mixin

```scss
@mixin margin_inline($size, $flow:'both') {
    //====> Both <====//
    @if ($flow == 'both') {
        margin-#{$direction-start}: $size;
        margin-#{$direction-end}: $size;
    }

    //====> Start <====//
    @else if ($flow == 'start') {margin-#{$direction-start}: $size;}

    //====> End <====//
    @else if ($flow == 'end') {margin-#{$direction-end}: $size;}
}
```

### Padding Inline Mixin

```scss
@mixin padding_inline($size, $flow:'both') {
    //====> Both <====//
    @if ($flow == 'both') {
        padding-#{$direction-start}: $size;
        padding-#{$direction-end}: $size;
    }

    //====> Start <====//
    @else if ($flow == 'start') {padding-#{$direction-start}: $size;}

    //====> End <====//
    @else if ($flow == 'end') {padding-#{$direction-end}: $size;}
}
```

## Working with JavaScript

For JavaScript components that need directional awareness (like sliders), Phenix checks the document's direction:

```scss
/*==== Arrows ====*/
.px-slider-controls {
    /*==== Directions Fix ====*/
    @if ($direction == 'rtl') {
        .px-next svg {transform: rotate(180deg);}
    } @else {
        .px-prev svg {transform: rotate(180deg);}
    }
}
```

This approach ensures that component behaviors are automatically adjusted based on the text direction.

## Using the Framework with RTL

When using Phenix, you have several options for RTL support:

### 1. Use the Pre-built RTL Stylesheets

The simplest approach is to include the pre-built RTL stylesheets:

```html
<!-- Components & Integrations only for RTL -->
<link href="https://cdn.jsdelivr.net/npm/phenix-ui@1.3.0/dist/css/phenix-rtl.css" rel="stylesheet" />

<!-- Utilities Only for RTL -->
<link href="https://cdn.jsdelivr.net/npm/phenix-ui@1.3.0/dist/css/phenix-utils-rtl.css" rel="stylesheet" />

<!-- Complete Framework for RTL (both files together) -->
<link href="https://cdn.jsdelivr.net/npm/phenix-ui@1.3.0/dist/css/phenix-utils-rtl.css" rel="stylesheet" />
<link href="https://cdn.jsdelivr.net/npm/phenix-ui@1.3.0/dist/css/phenix-rtl.css" rel="stylesheet" />
```

### 2. Compile from Source with RTL Settings

If you're compiling the SASS yourself, you can use the RTL source files:
- `phenix-rtl.scss` - Components & Integrations only for RTL
- `phenix-utils-rtl.scss` - Utilities Only for RTL

::: info
For WordPress-specific RTL support and integration, please refer to the [WordPress Documentation section](/wordpress/).
:::

## Debugging RTL Issues

If your RTL layout isn't working as expected:

1. **Verify HTML Direction**: Ensure your HTML has `dir="rtl"` on the `<html>` or `<body>` element
2. **Check CSS File**: Confirm you're using the RTL CSS file(s) (`phenix-rtl.css`, `phenix-utils-rtl.css`, or both)
3. **Inspect Computed Styles**: Use browser DevTools to verify directional properties are being applied correctly
4. **Test Direction Detection**: In the browser console, run `Phenix(document).direction()` to see if the direction is detected as 'rtl'

## Best Practices

1. **Choose the right file combination**: 
   - Use only `phenix-rtl.css` when you need only components
   - Use only `phenix-utils-rtl.css` when you need only utilities
   - Use both together for the complete framework
2. **Load in correct order**: When using both files, load utilities first, then components
3. **Use the directional mixins**: Instead of writing `margin-left` or `margin-right` directly, use the mixins provided
4. **Test thoroughly**: Always test your interface in both RTL and LTR modes
5. **Be aware of special cases**: Some components might need additional adjustments for proper RTL display
6. **Consider cultural differences**: RTL interfaces are not just mirrored LTR interfaces; they may need cultural adaptations

## Example: Building a Component

When creating a custom component that needs RTL support:

```scss
.custom-component {
    // Using the directional mixins
    @include margin_inline(1rem, 'end');
    @include padding_inline(1.5rem);
    
    // For icons or elements that need different positioning
    .icon {
        float: $direction-end;
        margin-#{$direction-start}: 0.5rem;
    }
} 