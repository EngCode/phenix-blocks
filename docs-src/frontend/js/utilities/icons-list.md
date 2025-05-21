# Icons List

## Overview

The Icons List utility automatically applies icon classes to list items, making it easy to create consistent icon-based lists without manually adding icon classes to each list item.

## Initialization

The Icons List utility is automatically initialized when you call the main utilities function:

```js
// Initialize all utilities including icons list
Phenix(document).utilities();

// Or initialize only icons utilities
Phenix(document).utilities({
  type: 'icons'
});
```

## Basic Usage

Add the `.icons-list` class to your list element and specify the icon class(es) using the `data-icon` attribute:

```html
<ul class="icons-list" data-icon="fas fa-check tx-success">
  <li>First item with check icon</li>
  <li>Second item with check icon</li>
  <li>Third item with check icon</li>
</ul>
```

## How It Works

1. The utility selects all elements with the `.icons-list` class
2. It reads the icon classes from the `data-icon` attribute
3. It applies those icon classes to all `<li>` elements within the list

## Examples

### Success Checklist

```html
<ul class="icons-list" data-icon="fas fa-check tx-success">
  <li>Feature One</li>
  <li>Feature Two</li>
  <li>Feature Three</li>
</ul>
```

### Feature List with Custom Icons

```html
<ul class="icons-list reset-list" data-icon="fas fa-star tx-warning">
  <li>Premium Feature</li>
  <li>Advanced Support</li>
  <li>Unlimited Access</li>
</ul>
```

### Mixed Icons List

For lists where you need different icons for each item, don't use the Icons List utility. Instead, manually add the icons:

```html
<ul class="reset-list">
  <li><i class="fas fa-check tx-success"></i> Completed Task</li>
  <li><i class="fas fa-clock tx-warning"></i> Pending Task</li>
  <li><i class="fas fa-times tx-danger"></i> Failed Task</li>
</ul>
```

## Combining with CSS Styles

You can combine the Icons List utility with CSS to create more sophisticated list styles:

```html
<ul class="icons-list feature-list" data-icon="fas fa-check-circle tx-primary">
  <li>Feature One</li>
  <li>Feature Two</li>
  <li>Feature Three</li>
</ul>

<style>
  .feature-list li {
    padding: 10px 0;
    margin-bottom: 5px;
    border-bottom: 1px solid #eee;
  }
  
  .feature-list li i {
    margin-right: 10px;
  }
</style>
```

## Best Practices

- Use consistent icon styles within a single list
- Choose icons that clearly represent the list items' meaning
- Consider using color classes (like `tx-success`) to enhance meaning
- For lists with different icons per item, use manual icon insertion instead
- Ensure adequate spacing between the icon and text for readability
- Test icon visibility against different backgrounds

## Browser Compatibility

The Icons List utility is compatible with all modern browsers and uses standard DOM manipulation techniques.
