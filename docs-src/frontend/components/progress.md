# Progress

## Overview

The Progress component in the Phenix Design System provides flexible, customizable progress indicators that can be displayed as bars, circles, or radial meters. These components are ideal for showing loading states, completion percentages, or any other progress-based information.

## Basic Usage

Create a basic progress bar using the `.px-progress` class and initialize it with the JavaScript progress method:

```html
<!-- Default Progress Bar -->
<div class="px-progress" data-value="20"></div>

<!-- Initialize with JavaScript -->
<script>
  Phenix('.px-progress').progress();
</script>
```

## Progress Bar Types

The Progress component supports three main types: bar, circle, and radial.

### Bar Progress (Default)

```html
<!-- Default Progress Bar -->
<div class="px-progress" data-value="20"></div>

<!-- Progress Bar with Value Label -->
<div class="px-progress" data-value="50" data-label="value"></div>

<!-- Progress Bar with Custom Label -->
<div class="px-progress" data-value="75" data-label="Loading"></div>
```

### Circle Progress

```html
<!-- Circle Progress -->
<div class="px-progress w-125" data-type="circle" data-value="65"></div>

<!-- Circle Progress with Value Label -->
<div class="px-progress w-125 fs-20" data-type="circle" data-value="65" data-label="value"></div>

<!-- Circle Progress with Custom Label -->
<div class="px-progress w-125 fs-14" data-type="circle" data-value="85" data-label="Loading"></div>
```

### Radial Progress

```html
<!-- Radial Progress -->
<div class="px-progress w-125" data-type="radial" data-value="35"></div>

<!-- Radial Progress with Value Label -->
<div class="px-progress w-125 fs-20" data-type="radial" data-value="65" data-label="value"></div>

<!-- Radial Progress with Custom Label -->
<div class="px-progress w-125 fs-14" data-type="radial" data-value="85" data-label="Loading"></div>
```

## Customization

### Colors

Customize the progress color using the `data-color` attribute:

```html
<!-- Red Progress Bar -->
<div class="px-progress" data-value="20" data-color="var(--danger-color)"></div>

<!-- Blue Progress Bar -->
<div class="px-progress" data-value="40" data-color="var(--info-color)"></div>

<!-- Green Progress Bar -->
<div class="px-progress" data-value="60" data-color="var(--success-color)"></div>
```

### Size

Adjust the size of the progress indicator using the `data-size` attribute:

```html
<!-- Thin Progress Bar -->
<div class="px-progress" data-value="20" data-size="10"></div>

<!-- Default Progress Bar -->
<div class="px-progress" data-value="40" data-size="16"></div>

<!-- Thick Progress Bar -->
<div class="px-progress" data-value="60" data-size="25"></div>

<!-- Thin Circle Progress -->
<div class="px-progress w-125" data-type="circle" data-value="65" data-size="2"></div>

<!-- Thick Radial Progress -->
<div class="px-progress w-125" data-type="radial" data-value="35" data-size="6"></div>
```

### Labels

Add labels to your progress indicators:

```html
<!-- Progress with Value Label -->
<div class="px-progress" data-value="50" data-label="value"></div>

<!-- Progress with Custom Label -->
<div class="px-progress" data-value="75" data-label="Loading"></div>

<!-- Circle Progress with Value Label -->
<div class="px-progress w-125" data-type="circle" data-value="65" data-label="value"></div>
```

## Dynamic Progress

Update progress values dynamically using JavaScript:

```html
<!-- Progress Bar to Update -->
<div id="dynamic-progress" class="px-progress" data-value="0" data-label="value"></div>

<!-- Control Buttons -->
<button id="decrease-progress" class="btn primary small">Decrease</button>
<button id="increase-progress" class="btn primary small">Increase</button>

<script>
  // Initialize progress
  Phenix('.px-progress').progress();
  
  // Increase button click handler
  document.getElementById('increase-progress').addEventListener('click', () => {
    const progress = document.getElementById('dynamic-progress');
    const currentValue = parseInt(progress.getAttribute('data-value'));
    const newValue = Math.min(currentValue + 10, 100); // Increase by 10, max 100
    
    // Update data attribute
    progress.setAttribute('data-value', newValue);
    
    // Re-initialize to update the visual
    Phenix(progress).progress();
  });
  
  // Decrease button click handler
  document.getElementById('decrease-progress').addEventListener('click', () => {
    const progress = document.getElementById('dynamic-progress');
    const currentValue = parseInt(progress.getAttribute('data-value'));
    const newValue = Math.max(currentValue - 10, 0); // Decrease by 10, min 0
    
    // Update data attribute
    progress.setAttribute('data-value', newValue);
    
    // Re-initialize to update the visual
    Phenix(progress).progress();
  });
</script>
```

## Lazy Loading

Enable lazy loading to animate the progress only when it becomes visible in the viewport:

```html
<!-- Lazy Loaded Progress Bar -->
<div class="px-progress" data-value="60" data-lazy="0"></div>

<script>
  // Initialize with lazy loading
  Phenix('.px-progress').progress({
    lazyloading: true
  });
</script>
```

## Styling

Customize the appearance of progress indicators using utility classes:

```html
<!-- Rounded Progress Bar -->
<div class="px-progress radius-sm" data-value="40"></div>

<!-- Fully Rounded Progress Bar -->
<div class="px-progress radius-rounded" data-value="60"></div>

<!-- Custom Font Size for Labels -->
<div class="px-progress fs-12" data-value="50" data-label="value"></div>

<!-- Bold Label -->
<div class="px-progress weight-bold" data-value="75" data-label="Loading"></div>
```

## JavaScript API

The Progress component can be initialized and customized through JavaScript:

```javascript
Phenix('.px-progress').progress({
  type: 'bar',         // Progress type: 'bar', 'circle', or 'radial'
  color: '#0066cc',    // Progress color (CSS color value)
  value: 50,           // Progress value (0-100)
  label: 'Loading',    // Progress label
  size: 16,            // Size in pixels
  lazyloading: false   // Whether to animate only when visible
});
```

## Options Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | String | 'bar' | Progress type: 'bar', 'circle', or 'radial' |
| `color` | String | Primary color | CSS color value or variable |
| `value` | Number | 0 | Progress value (0-100) |
| `label` | String | null | Label text (use 'value' to show percentage) |
| `size` | Number | 16 | Size in pixels (height for bar, stroke width for others) |
| `lazyloading` | Boolean | false | Whether to animate only when visible |

## Data Attributes

All options can also be set using data attributes:

| Attribute | Description |
|-----------|-------------|
| `data-type` | Progress type: 'bar', 'circle', or 'radial' |
| `data-color` | CSS color value or variable |
| `data-value` | Progress value (0-100) |
| `data-label` | Label text (use 'value' to show percentage) |
| `data-size` | Size in pixels |
| `data-lazy` | Set to '0' to enable lazy loading |

## Accessibility

For better accessibility, consider adding appropriate ARIA attributes:

```html
<!-- Accessible Progress Bar -->
<div class="px-progress" data-value="60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
```

## Best Practices

1. **Use appropriate colors** to maintain consistent meaning across your interface
2. **Include labels** when the progress value alone might not be clear
3. **Consider lazy loading** for pages with multiple progress indicators
4. **Provide appropriate feedback** when progress is complete
5. **Ensure sufficient contrast** between the progress indicator and its background
