# Range Slider

## Overview

The Range Slider component in the Phenix Design System provides an enhanced input range experience with features like dual handles for range selection, tooltips, custom styling, and improved user interaction. It's designed to make selecting numeric values or ranges more intuitive and visually appealing compared to standard HTML range inputs.

## Basic Usage

To create a basic range slider, use the `.pds-range-slider` class with a standard range input:

```html
<div class="pds-range-slider">
  <input type="range" min="0" max="100" value="50" class="form-control">
</div>
```

## Features

### Custom Min and Max Values

Set custom minimum and maximum values for the slider:

```html
<div class="pds-range-slider">
  <input type="range" min="-50" max="50" value="0" class="form-control">
</div>
```

### Step Control

Define the step increment for the slider using the `step` attribute:

```html
<div class="pds-range-slider">
  <input type="range" min="0" max="100" step="5" value="50" class="form-control">
</div>
```

### Range Selection (Dual Handles)

Enable range selection with dual handles by using the `data-range` attribute:

```html
<div class="pds-range-slider" data-range="true">
  <input type="range" min="0" max="1000" value="200,800" class="form-control">
</div>
```

### Value Display

Show the current value(s) with tooltips using the `data-tooltip` attribute:

```html
<div class="pds-range-slider" data-tooltip="true">
  <input type="range" min="0" max="100" value="50" class="form-control">
</div>
```

## Customization

### Custom Colors

Customize the slider's colors using CSS variables or utility classes:

```html
<div class="pds-range-slider" style="--slider-color: var(--primary-color);">
  <input type="range" min="0" max="100" value="50" class="form-control">
</div>
```

### Slider with Labels

Add min, max, and current value labels to the slider:

```html
<div class="mb-20">
  <div class="pds-range-slider" data-tooltip="true">
    <input type="range" min="0" max="100" value="50" class="form-control">
  </div>
  <div class="flexbox align-between mt-10">
    <span class="fs-14 color-gray">0</span>
    <span class="fs-14 weight-medium">Current: <span class="slider-value">50</span></span>
    <span class="fs-14 color-gray">100</span>
  </div>
</div>
```

### Vertical Slider

Create a vertical slider using the `data-vertical` attribute:

```html
<div class="pds-range-slider" data-vertical="true" style="height: 200px;">
  <input type="range" min="0" max="100" value="50" class="form-control">
</div>
```

### Disabled State

Disable the slider by adding the `disabled` attribute:

```html
<div class="pds-range-slider">
  <input type="range" min="0" max="100" value="50" class="form-control" disabled>
</div>
```

## JavaScript API

The Range Slider component is not directly initialized through a Phenix method. Instead, it uses a third-party library that is loaded dynamically when needed. The component is initialized when the range slider script is loaded.

```javascript
// The range slider is loaded when needed via the utilities function
Phenix(document).import("range-slider", "script", "range-slider/range-slider.js", () => {
  // Range slider is now initialized
  console.log('Range slider initialized');
});

// The CSS is also loaded dynamically
Phenix(document).import(`range-slider`, "link", `range-slider/range-slider.css`, () => {}, { integrated: true });
```

This dynamic loading happens automatically when the utilities function encounters range slider elements with the `.pds-range-slider` class.

### Handling Value Changes

Listen for value change events:

```javascript
Phenix('.pds-range-slider input[type="range"]').on('input', (event) => {
  const value = event.target.value;
  console.log('Current value:', value);
  
  // Update a display element with the current value
  Phenix('.slider-value').text(value);
});
```

### Programmatically Setting Values

Set the slider value programmatically:

```javascript
// For single handle slider
const slider = Phenix('.pds-range-slider input[type="range"]')[0];
slider.value = 75;

// Trigger change event to update visual state
const event = new Event('input', { bubbles: true });
slider.dispatchEvent(event);

// For dual handle slider
const rangeSlider = Phenix('.pds-range-slider[data-range="true"] input[type="range"]')[0];
rangeSlider.value = '25,75';

// Trigger change event
rangeSlider.dispatchEvent(event);
```

## Configuration Options

The Range Slider component supports several data attributes for configuration:

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| data-range | Boolean | false | Enables dual handle mode for selecting a range |
| data-tooltip | Boolean | false | Shows tooltips with the current value(s) |
| data-vertical | Boolean | false | Creates a vertical slider instead of horizontal |
| data-prefix | String | '' | Adds a prefix to the tooltip value (e.g., '$') |
| data-suffix | String | '' | Adds a suffix to the tooltip value (e.g., '%') |

## Accessibility

The Range Slider component maintains accessibility features:

- Keyboard navigation (Arrow keys, Home, End)
- ARIA attributes for screen readers
- Focus states for keyboard users

## Browser Compatibility

The Range Slider component is compatible with all modern browsers that support HTML5 range inputs and JavaScript ES6 features.
