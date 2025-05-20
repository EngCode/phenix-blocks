# Rating Controller

## Overview

The Rating Controller component in the Phenix Design System provides an interactive way for users to provide ratings. It supports various icons, customizable styles, and can be used for both displaying existing ratings and collecting user feedback.

## Basic Usage

To create a basic rating controller, use the `.rating-control` class with a number input:

```html
<!-- Form Rating Default (5 Stars) -->
<div class="rating-control">
    <input type="number" />
</div>
```

The component will automatically generate the star icons based on the input's `max` attribute (default is 5).

## Features

### Custom Number of Stars

You can set a custom number of stars by using the `max` attribute on the input element:

```html
<!-- Form Rating with 10 Stars -->
<div class="rating-control">
    <input type="number" max="10" />
</div>
```

### Custom Icons

Change the default star icons to any other icon by using the `data-icon` attribute:

```html
<!-- Rating with Heart Icons -->
<div class="rating-control" data-icon="fas fa-heart">
    <input type="number" />
</div>

<!-- Rating with Thumbs Up -->
<div class="rating-control" data-icon="fas fa-thumbs-up">
    <input type="number" />
</div>
```

### Default Rating Value

Set a default rating by adding a value to the input element:

```html
<!-- Rating with Default Value of 3 -->
<div class="rating-control">
    <input type="number" value="3" />
</div>
```

## Customization

### Size Variants

The rating controller supports different sizes using the size modifier classes:

```html
<!-- Small Rating -->
<div class="rating-control small">
    <input type="number" />
</div>

<!-- Default Size -->
<div class="rating-control">
    <input type="number" />
</div>

<!-- Large Rating -->
<div class="rating-control large">
    <input type="number" />
</div>
```

### Custom Colors

By default, the active stars use the warning color. You can customize this using CSS variables or utility classes:

```html
<!-- Custom Colors Using CSS Variables -->
<div class="rating-control" style="--warning-color: #f5a623;">
    <input type="number" />
</div>
```

### Rating with Text Label

Add a text label next to your rating controller:

```html
<div class="flexbox align-center-y">
    <div class="rating-control me-10">
        <input type="number" />
    </div>
    <span>Rate this product</span>
</div>
```

### Rating with Value Display

Show the current rating value alongside the stars:

```html
<div class="flexbox align-center-y">
    <div class="rating-control me-10">
        <input type="number" id="product-rating" />
    </div>
    <span id="rating-value">0/5</span>
</div>

<script>
    // Update the rating value display when the rating changes
    document.getElementById('product-rating').addEventListener('change', (event) => {
        const maxValue = event.target.getAttribute('max') || 5;
        document.getElementById('rating-value').textContent = `${event.target.value}/${maxValue}`;
    });
</script>
```

## JavaScript API

The Rating Controller component must be manually initialized. The component will handle the rating interface based on the input's max attribute and other options.

### Initialization

```javascript
// Initialize all rating controllers
Phenix('.rating-control').rating();
```

### Available Options

The Rating Controller can be customized through HTML attributes or JavaScript options:

| Option/Attribute | Type | Default | Description |
|-----------------|------|---------|-------------|
| max (HTML attribute) | Number | 5 | Sets the maximum number of stars |
| data-icon (HTML attribute) | String | 'fas fa-star' | Sets the icon class for the rating stars |

### Event Handling

The component dispatches a change event on the input element when the rating changes:

```javascript
// Listen for rating change events
Phenix('.rating-control input').on('change', (event) => {
  console.log(`New rating: ${event.target.value}`);
});
```

### Implementation Details

The Rating Controller works by:

1. Creating star icons based on the input's max attribute (default is 5)
2. Using the specified icon class (default is 'fas fa-star')
3. Adding the 'active' class to stars when hovered or clicked
4. Setting the input's value when a star is clicked
5. Dispatching a change event on the input element

Here's how the component creates the star icons:

```javascript
// From the source code
let maxRate = parseInt(input.getAttribute('max')) || 5,
    iconName = element.getAttribute('data-icon') || 'fas fa-star';

// Create Elements
for (let i = 1; maxRate >= i; i++) {
    Phenix(input).insert('after', `<a href="javascript:void(0)" class="${iconName} rate-icon" tabindex="0" role="button" aria-pressed="false"></a>`);
}
```

## Accessibility

The Rating Controller component maintains accessibility features:

- Keyboard navigation for selecting ratings
- ARIA attributes for screen readers
- Focus states for keyboard users

## Browser Compatibility

The Rating Controller component is compatible with all modern browsers that support JavaScript ES6 features.
