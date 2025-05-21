# Range Slider

## Overview

The Range Slider utility provides an interactive dual-handle slider for selecting a range of values. This is commonly used for price filters, date ranges, or any other numeric range selection.

## Initialization

The Range Slider is automatically initialized when you call the main utilities function and the page contains elements with the `.pds-range-slider` class:

```js
// Initialize all utilities including range slider
Phenix(document).utilities();

// Range slider is part of the libraries type
Phenix(document).utilities({
  type: 'libraries'
});
```

## Basic Usage

Add the `.pds-range-slider` class to a div element and optionally specify min and max values:

```html
<div class="pds-range-slider" data-min="100" data-max="800"></div>
```

## How It Works

1. The utility detects elements with the `.pds-range-slider` class
2. It imports the noUiSlider library and its CSS (with RTL support if needed)
3. It initializes each slider with the specified options
4. If input fields with `.range-min` and `.range-max` classes are found in the parent container, they are automatically connected to the slider

## Full Example with Input Fields

```html
<div class="price-filter">
  <div class="pds-range-slider" data-min="50" data-max="500"></div>
  <div class="range-inputs flexbox align-center-y gap-10 mt-10">
    <input type="number" class="range-min form-control" value="50">
    <span class="tx-nowrap">to</span>
    <input type="number" class="range-max form-control" value="500">
  </div>
</div>
```

## Configuration Options

| Attribute | Description | Default |
|-----------|-------------|---------|
| `data-min` | Minimum value of the range | 10 |
| `data-max` | Maximum value of the range | 900 |

## Advanced Customization

The Range Slider uses the noUiSlider library with the following default configuration:

```js
noUiSlider.create(slider, {
  step: 5,                           // Step size between values
  connect: true,                     // Connect the handles with a bar
  tooltips: true,                    // Show tooltips when dragging
  start: [minRange || 150, maxRange || 700],  // Starting handle positions
  direction: page_direction,         // RTL or LTR based on page direction
  range: {
    'min': minRange || 10,           // Minimum range value
    'max': maxRange || 900           // Maximum range value
  },
});
```

## Styling

The Range Slider comes with default styling from the noUiSlider library. The utility automatically loads the appropriate CSS file based on the page direction (RTL or LTR).

You can customize the appearance with CSS:

```css
/* Slider track */
.pds-range-slider {
  height: 10px;
  margin: 20px 0;
}

/* Slider handle */
.pds-range-slider .noUi-handle {
  border-radius: 50%;
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

/* Connection bar */
.pds-range-slider .noUi-connect {
  background-color: var(--primary-color);
}

/* Tooltip */
.pds-range-slider .noUi-tooltip {
  background-color: var(--primary-color);
  color: white;
  border: none;
}
```

## Examples

### Price Filter

```html
<div class="filter-widget">
  <h4>Price Range</h4>
  <div class="pds-range-slider" data-min="10" data-max="1000"></div>
  <div class="flexbox align-center-y gap-15 mt-15">
    <div class="input-group">
      <span class="input-group-text">$</span>
      <input type="number" class="form-control range-min" value="10">
    </div>
    <span>to</span>
    <div class="input-group">
      <span class="input-group-text">$</span>
      <input type="number" class="form-control range-max" value="1000">
    </div>
  </div>
</div>
```

### Age Range Selector

```html
<div class="age-filter">
  <label>Age Range:</label>
  <div class="pds-range-slider" data-min="18" data-max="65"></div>
  <div class="flexbox align-center-y gap-10 mt-10">
    <input type="number" class="range-min form-control tiny" value="18">
    <span>-</span>
    <input type="number" class="range-max form-control tiny" value="65">
    <span>years</span>
  </div>
</div>
```

### Date Range Selector

```html
<div class="date-range">
  <label>Select Years:</label>
  <div class="pds-range-slider" data-min="2000" data-max="2025"></div>
  <div class="flexbox align-center-y gap-10 mt-10">
    <input type="number" class="range-min form-control" value="2000">
    <span>to</span>
    <input type="number" class="range-max form-control" value="2025">
  </div>
</div>
```

## Best Practices

- Always provide visual feedback about the selected range
- Consider adding labels or units to clarify what the range represents
- Use appropriate step sizes for the type of data (smaller steps for precise values)
- Test the slider on touch devices to ensure good usability
- Provide input fields for direct value entry when precision is important
- Use appropriate min/max values that make sense for your data

## Browser Compatibility

The Range Slider utility is compatible with all modern browsers and uses the noUiSlider library for cross-browser consistency.
