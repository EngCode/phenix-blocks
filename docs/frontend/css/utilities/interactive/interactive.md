# Interactive Utilities

The Phenix Design System provides a set of interactive utilities that enhance user experience with tooltips, loading indicators, and mouse interaction controls. These utilities help create more engaging and responsive interfaces without requiring JavaScript.

## Overview

This documentation covers:

1. **Tooltip Utilities** - Add simple tooltips to elements
2. **Loading Indicators** - Show loading states for elements
3. **Mouse Interaction** - Control cursor appearance and behavior
4. **Icon Utilities** - Control icon spacing and alignment
5. **Custom Scrollbar** - Enhance scrolling areas
6. **Text Effects** - Apply special text effects like clipping

## Tooltip Utilities

Add simple tooltip functionality to elements without JavaScript:

```html
<!-- Default tooltip (appears on top) -->
<span class="tooltip" data-title="This is a tooltip">Hover me</span>

<!-- Bottom tooltip -->
<span class="tooltip-bottom" data-title="I appear below the element">Hover me</span>

<!-- Use title attribute if no data-title is specified -->
<span class="tooltip" title="Fallback to title attribute">Hover me</span>
```

Tooltips appear when users hover over the element and display the content from the `data-title` attribute (falls back to the `title` attribute if not provided).

## Loading Indicators

Add loading spinners to elements to indicate processing or loading states:

```html
<!-- Add loading spinner to an element -->
<div class="px-loading">
  <!-- Content being loaded -->
  <p>Content with loading overlay</p>
</div>

<!-- Inline loading spinner -->
<span class="px-loading-inline">Loading text...</span>

<!-- Alternative loading spinner -->
<div class="px-loader">Loading content...</div>
```

The loading classes add a semi-transparent overlay with a centered spinner animation.

## Mouse Interaction

Control mouse cursor and event behavior:

```html
<!-- Change cursor to pointer (hand) -->
<div class="mouse-pointer">
  Cursor becomes a pointing hand on hover
</div>

<!-- Hide the cursor -->
<div class="mouse-normal">
  Cursor is hidden over this element
</div>

<!-- Disable pointer events -->
<div class="mouse-no-events">
  This element won't respond to mouse events
</div>

<!-- Enable pointer events (override) -->
<div class="mouse-all-events">
  This element will respond to mouse events
</div>
```

## Link Color Inheritance

Make links inherit their parent's text color:

```html
<!-- Links inside will inherit the parent text color -->
<div class="links-inherit color-primary">
  <a href="#">This link is primary color</a>
  <a href="#">This link is also primary color</a>
</div>
```

## Icon Utilities

Control icon appearance and positioning:

```html
<!-- Add spacing after icon (before text) -->
<span class="tx-icon fa-home">Home</span>

<!-- Fix icon vertical alignment issues -->
<i class="icon-fix fa-check"></i>

<!-- Add color to icon from CSS variable -->
<i class="pds-icon-color fa-check" style="--icon-color: red;"></i>

<!-- Make icon larger -->
<i class="icon-lg fa-home"></i>
```

## Custom Scrollbar

Add a styled scrollbar to elements with overflow:

```html
<!-- Add custom scrollbar styling -->
<div class="px-scrollbar" style="height: 200px; overflow: auto;">
  <!-- Content that will scroll -->
  <p>Lorem ipsum dolor sit amet...</p>
  <!-- More content -->
</div>
```

The `px-scrollbar` class adds a thinner, styled scrollbar with customizable colors via CSS variables:
- `--scrollbar-color`: Controls the track color (default: gray-color)
- `--scrollbar-thumb`: Controls the thumb color (default: dark-color)

## Text Clipping

Create text with a background showing through:

```html
<!-- Text with background showing through -->
<h1 class="bg-clip-text color-transparent bg-gradient-primary">
  Gradient Text
</h1>
```

This technique allows for creative text effects like gradient text or background images showing through text.

## Use Cases

### Interactive Button with Tooltip

```html
<button class="btn primary tooltip" data-title="Click to submit your form">
  Submit
</button>
```

### Loading State for Form Submission

```html
<form id="contact-form">
  <!-- Form fields -->
  <div class="px-loading" id="form-container">
    <button type="submit" class="btn primary">Submit</button>
  </div>
</form>

<script>
  // Show loading state when form is submitted
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    document.getElementById('form-container').classList.add('px-loading');
  });
</script>
```

### Decorative Icon with Text

```html
<div class="alert info">
  <span class="tx-icon fa-info-circle">Important information goes here</span>
</div>
```

### Interactive Card with Custom Scrollbar

```html
<div class="card">
  <div class="card-header">
    <h3>Long Content Card</h3>
  </div>
  <div class="card-body px-scrollbar" style="height: 200px;">
    <!-- Long content here -->
    <p>Lorem ipsum dolor sit amet...</p>
    <!-- More paragraphs -->
  </div>
</div>
```

### Gradient Text Heading

```html
<h1 class="display-h1 color-transparent bg-clip-text bg-gradient-primary">
  Welcome to Our Site
</h1>
```

## Best Practices

1. **Use tooltips sparingly**: Tooltips should provide helpful additional information, not essential content
2. **Keep tooltip text brief**: Tooltips should be concise and easy to read quickly
3. **Show loading indicators for any action that takes time**: Provide visual feedback during loading/processing
4. **Use appropriate cursor types**: The `mouse-pointer` class should only be used for interactive elements
5. **Test pointer event modifications carefully**: Disabling pointer events can affect accessibility

## Accessibility Considerations

1. **Tooltips are not accessible to all users**: Screen readers may not announce tooltip content; consider including critical information directly in the interface
2. **Loading indicators should have appropriate text**: Ensure loading states communicate clearly what is happening
3. **Mouse interaction utilities may affect keyboard navigation**: Test keyboard accessibility when using these utilities

## Browser Support

These interactive utilities are supported in all modern browsers. Some effects like custom scrollbars and text clipping have varying support in older browsers but include appropriate fallbacks. 