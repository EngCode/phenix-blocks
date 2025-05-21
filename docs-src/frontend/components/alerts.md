# Alerts

## Overview

Alerts in the Phenix Design System are built using utility classes to create flexible, customizable notification components. They provide contextual feedback messages for typical user actions with a handful of available and flexible alert messages.

## Basic Alerts

Create basic alerts using the `alert-box` class combined with utility classes for padding, borders, background colors, and spacing:

```html
<!-- Basic Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-gray mb-15">
    <strong>Alert:</strong> This is a standard gray alert.
</div>

<!-- Warning Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-warning mb-15">
    <strong>Warning:</strong> This is a warning alert with light background.
</div>

<!-- Success Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-success mb-15">
    <strong>Success:</strong> This is a success alert with light background.
</div>

<!-- Info Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-info mb-15">
    <strong>Info:</strong> This is an info alert with light background.
</div>

<!-- Danger Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-danger mb-15">
    <strong>Danger:</strong> This is a danger alert with light background.
</div>
```

## Colorful Alerts

For more vibrant alerts, use the full-color background utility classes with appropriate text colors:

```html
<!-- Dark Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-dark mb-15 color-white">
    <strong>Dark:</strong> This is a dark alert with white text.
</div>

<!-- Warning Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-warning mb-15 color-dark">
    <strong>Warning:</strong> This is a warning alert with dark text.
</div>

<!-- Success Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-success mb-15 color-white">
    <strong>Success:</strong> This is a success alert with white text.
</div>

<!-- Info Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-info mb-15 color-white">
    <strong>Info:</strong> This is an info alert with white text.
</div>

<!-- Danger Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-danger mb-15 color-white">
    <strong>Danger:</strong> This is a danger alert with white text.
</div>
```

## Dismissible Alerts

Add a close button to your alerts using the flexbox utilities and the `remove-item` helper class:

```html
<!-- Dismissible Warning Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-warning mb-15 flexbox align-between">
    <p class="mb-0"><strong>Warning:</strong> This alert can be dismissed.</p>
    <a href="javascript:void(0);" class="remove-item fas fa-times color-inherit"></a>
</div>

<!-- Dismissible Danger Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-danger mb-15 color-white flexbox align-between">
    <p class="mb-0"><strong>Danger:</strong> This alert can be dismissed.</p>
    <a href="javascript:void(0);" class="remove-item fas fa-times color-inherit"></a>
</div>
```

## Alerts with Icons

Enhance your alerts with icons for better visual cues:

```html
<!-- Warning Alert with Icon -->
<div class="alert-box pdy-10 pdx-15 border-r-sm bg-offwhite-warning mb-15 flexbox align-between align-center-y">
    <p class="mb-0">
        <i class="far fa-exclamation-triangle fs-20 me-10"></i>
        <strong>Warning:</strong> This is an alert with an icon.
    </p>
    <a href="javascript:void(0);" class="remove-item fas fa-times color-inherit"></a>
</div>

<!-- Danger Alert with Icon -->
<div class="alert-box pdy-10 pdx-15 border-r-sm bg-danger mb-15 color-white flexbox align-between align-center-y">
    <p class="mb-0">
        <i class="far fa-exclamation-circle fs-20 me-10"></i>
        <strong>Danger:</strong> This is an alert with an icon.
    </p>
    <a href="javascript:void(0);" class="remove-item fas fa-times color-inherit"></a>
</div>
```

## Customization

The alert component is built using utility classes, so you can customize it extensively:

### Sizing and Spacing

- Use padding utilities (`pdy-*`, `pdx-*`) to adjust internal spacing
- Use margin utilities (`mb-*`, `mt-*`, etc.) to adjust spacing between alerts
- Use width utilities (`w-*`) to control the width of alerts

### Colors and Styling

- Use background utilities (`bg-*`) to change the background color
- Use text color utilities (`color-*`) to change the text color
- Use border utilities (`border-*`) to add or modify borders
- Use border-radius utilities (`border-r-*`) to adjust corner rounding

### Layout

- Use flexbox utilities (`flexbox`, `align-*`) to control the layout of alert content
- Use grid utilities to place alerts within a grid system

## Accessibility

For better accessibility, consider the following:

- Use appropriate color contrast between text and background
- Use `role="alert"` for important alerts that need to be announced by screen readers
- Ensure dismissible alerts have accessible labels and can be operated by keyboard

```html
<!-- Accessible Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-danger mb-15 color-white flexbox align-between" role="alert">
    <p class="mb-0"><strong>Important:</strong> This is an accessible alert.</p>
    <button type="button" class="remove-item fas fa-times color-inherit" aria-label="Close alert"></button>
</div>
```

## JavaScript Integration

The dismissible alerts use the `.remove-item` helper class, which is automatically handled by the Phenix JavaScript utilities. To ensure this functionality works, make sure the utilities are initialized:

```javascript
// Initialize all utilities including item remover
Phenix(document).utilities();

// Or initialize just the item remover
Phenix(document).utilities({
  type: 'remover'
});
```

## Best Practices

1. **Use appropriate colors** for different alert types to maintain consistent meaning across your application
2. **Keep alert messages concise** and focused on a single piece of information
3. **Use icons sparingly** to enhance understanding without cluttering the alert
4. **Make alerts dismissible** when they're not critical to the user's current task
5. **Ensure sufficient contrast** between text and background colors for readability
