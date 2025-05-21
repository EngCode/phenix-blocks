# Tooltip

## Overview

The Tooltip component in the Phenix Design System provides a simple way to display additional information when users hover over an element. Tooltips are implemented using CSS and don't require JavaScript, making them lightweight and easy to use.

## Basic Usage

Create a basic tooltip by adding the `.tooltip` class and a `data-title` attribute to any element:

```html
<button class="btn primary tooltip" data-title="This is a tooltip">Hover me</button>
```

## Tooltip Positions

### Top Tooltip (Default)

The default tooltip appears above the element:

```html
<button class="btn primary tooltip" data-title="Top tooltip">Hover me</button>
```

### Bottom Tooltip

Position the tooltip below the element using the `.tooltip-bottom` class:

```html
<button class="btn primary tooltip-bottom" data-title="Bottom tooltip">Hover me</button>
```

## Customization

### Using the Title Attribute

You can use the standard HTML `title` attribute instead of `data-title`:

```html
<button class="btn primary tooltip" title="Tooltip using title attribute">Hover me</button>
```

### Custom Styling

While the default tooltip styling is defined by the Phenix Design System, you can customize it using CSS variables or by overriding the styles:

```html
<style>
  /* Custom tooltip styling */
  .custom-tooltip::after {
    background-color: var(--primary-color);
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 3px;
  }
</style>

<button class="btn secondary tooltip custom-tooltip" data-title="Custom styled tooltip">Hover me</button>
```

## Examples

### Tooltip on Text

Add tooltips to text elements:

```html
<p>
  This is a paragraph with a 
  <span class="tooltip" data-title="This is a tooltip on text">tooltip</span> 
  on a specific word.
</p>
```

### Tooltip on Icons

Add tooltips to icons for better usability:

```html
<button class="btn icon-only tooltip" data-title="Settings">
  <i class="far fa-cog"></i>
</button>

<button class="btn icon-only tooltip" data-title="Delete">
  <i class="far fa-trash"></i>
</button>
```

### Tooltip with HTML Content

While the standard tooltip doesn't support HTML content, you can create a tooltip-like effect with richer content using a custom implementation:

```html
<div class="position-rv">
  <button class="btn primary">Hover for rich content</button>
  <div class="position-ab pos-bottom-100 pos-start-0 w-200 bg-white pd-10 radius-sm bx-shadow-dp-1 border-1 border-solid border-alpha-10 hidden hover-target">
    <h5 class="fs-14 mb-5">Rich Content Tooltip</h5>
    <p class="fs-12 mb-0">This tooltip-like popup can contain formatted text, images, and other HTML elements.</p>
  </div>
</div>

<style>
  .hover-target {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
  
  .position-rv:hover .hover-target {
    opacity: 1;
    pointer-events: auto;
  }
</style>
```

## Tooltip in Forms

Use tooltips to provide additional information for form elements:

```html
<div class="form-control">
  <label for="username">
    Username 
    <i class="far fa-info-circle tooltip" data-title="Enter your username or email address"></i>
  </label>
  <input type="text" id="username" class="form-input">
</div>

<div class="form-control">
  <label for="password">
    Password 
    <i class="far fa-info-circle tooltip" data-title="Password must be at least 8 characters long"></i>
  </label>
  <input type="password" id="password" class="form-input">
</div>
```

## Tooltip on Disabled Elements

Since disabled elements don't trigger hover events, wrap them in a container to create tooltips for disabled elements:

```html
<div class="position-rv tooltip" data-title="This button is disabled">
  <button class="btn primary" disabled>Disabled Button</button>
</div>
```

## Accessibility Considerations

When using tooltips, consider the following accessibility best practices:

1. **Don't rely solely on tooltips** for essential information
2. **Use appropriate ARIA attributes** when tooltips contain important information:

```html
<button class="btn primary tooltip" 
        data-title="Important information" 
        aria-describedby="tooltip-desc">
  Accessible Tooltip
</button>
<span id="tooltip-desc" class="hidden">Important information</span>
```

3. **Ensure tooltips are keyboard accessible** by providing alternative ways to access the information for keyboard-only users

## Best Practices

1. **Keep tooltips concise** - use short, clear text
2. **Use tooltips sparingly** - only for supplementary information
3. **Ensure sufficient contrast** between tooltip text and background
4. **Position tooltips appropriately** to avoid obscuring important content
5. **Test on mobile devices** to ensure good user experience on touch interfaces
6. **Consider using a more robust solution** for complex tooltip requirements
