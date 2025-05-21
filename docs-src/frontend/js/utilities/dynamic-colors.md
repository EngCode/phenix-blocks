# Dynamic Colors

## Overview

The Dynamic Colors utility automatically calculates and applies lighter and darker variants of background colors to CSS custom properties. This is particularly useful for creating consistent shadow effects, text contrast, and visual depth without manually specifying multiple color variations.

## Initialization

The Dynamic Colors utility is automatically initialized when you call the main utilities function:

```js
// Initialize all utilities including dynamic colors
Phenix(document).utilities();

// Or initialize only text utilities (which includes dynamic colors)
Phenix(document).utilities({
  type: 'text'
});
```

## Basic Usage

Add the `bx-shadow-gls` class or any class that includes this string to elements where you want dynamic color variants:

```html
<div class="card bx-shadow-gls bg-primary">
  This card will have automatically calculated shadow colors
</div>

<div class="pds-sc-props bg-gradient-primary-secondary">
  This element will have dynamic shadow colors based on its gradient
</div>
```

## How It Works

1. The utility detects elements with the target classes
2. It extracts the background color or gradient colors using `getComputedStyle`
3. For solid backgrounds, it creates darker and lighter variants
4. For gradients, it analyzes the colors to determine which should be darker/lighter
5. The calculated colors are set as CSS custom properties on the element:
   - `--shadow-color-dark`: A darker variant for shadows
   - `--shadow-color-light`: A lighter variant for highlights

## Color Transformation

The utility includes two key functions:

### Color Transformer

Adjusts RGB color values by a specified amount:

```js
// Example (internal function)
transformColor('255, 100, 50', -95); // Makes the color darker
transformColor('50, 100, 150', 95);  // Makes the color lighter
```

### Color Contrast Checker

Calculates the luminance of a color to determine if it's light or dark:

```js
// Example (internal function)
isLightOrDark('255, 255, 255'); // Returns a high value (light color)
isLightOrDark('0, 0, 0');       // Returns a low value (dark color)
```

## Using the Generated Properties

You can use the generated CSS custom properties in your CSS:

```css
.bx-shadow-gls {
  box-shadow: 0 5px 15px rgba(var(--shadow-color-dark), 0.3),
              0 3px 8px rgba(var(--shadow-color-light), 0.2);
}

.pds-sc-props .overlay {
  background-color: rgba(var(--shadow-color-dark), 0.7);
}
```

## Examples

### Card with Dynamic Shadow

```html
<div class="card bx-shadow-gls bg-primary p-20">
  <h3>Card Title</h3>
  <p>This card has a dynamically calculated shadow based on its background color.</p>
</div>
```

### Gradient Background with Text Overlay

```html
<div class="hero-banner bg-gradient-blue-purple pds-sc-props position-rv">
  <div class="overlay position-ab" style="background-color: rgba(var(--shadow-color-dark), 0.5);">
    <h1 class="tx-white">Welcome to Our Site</h1>
    <p class="tx-white">The text is readable thanks to the dynamic overlay color.</p>
  </div>
</div>
```

### Button with Dynamic Hover Effect

```html
<button class="btn bx-shadow-gls bg-success">
  Hover Me
</button>

<style>
  .btn.bx-shadow-gls:hover {
    box-shadow: 0 5px 15px rgba(var(--shadow-color-dark), 0.5);
    background-color: rgba(var(--shadow-color-light), 0.9);
  }
</style>
```

## Best Practices

- Use this utility for elements where consistent color variations are needed
- Combine with other CSS utilities for more complex effects
- Test the generated colors on different backgrounds to ensure good contrast
- For critical design elements, consider manually specifying colors if automatic calculation doesn't meet your needs
- Use the generated properties for subtle effects rather than primary colors

## Browser Compatibility

The Dynamic Colors utility is compatible with all modern browsers that support CSS custom properties (CSS variables) and the `getComputedStyle` API.
