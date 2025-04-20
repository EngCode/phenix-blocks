# List Components

The Phenix Design System provides basic list styling and reset utilities to help you create clean, consistent lists as part of your typography system.

## Overview

Typography-related list components in Phenix Design System include:

- Basic list styling for unordered, ordered, and definition lists
- List reset utilities to remove default browser styling
- Icon list utilities for simple icon integration
- Classes for customizing list appearance

## Basic List Styling

All standard lists (`ul`, `ol`) receive consistent default styling:

```css
ul, ol {
  margin-top: 0;
  padding-inline: REM(25);
}
```

Definition lists (`dl`) also receive standardized styling:

```css
dl {
  margin-bottom: REM(25);
}

dt {
  font-weight: 700;
}

dt + dd {
  margin-top: .25rem;
}

dt:not(:first-child) {
  margin-top: .5rem;
}

dd {
  margin-inline: 0;
  padding-inline: REM(15);
}
```

## List Reset Utilities

Phenix provides utilities to completely remove all default list styling. This is useful when you want to create custom list styles from scratch or when you need lists without visual markers or indentation.

### Reset List Placeholder

The `%reset-list` placeholder/utility class removes all default list styling:

```css
%reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
```

To use this reset in your HTML:

```html
<ul class="reset-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

This removes all padding, margin, and list-style properties, creating a clean base for custom list styling.

## Icon Lists

The `.icons-list` class creates lists with properly positioned icons. This utility is specifically designed for simple icon-text combinations:

```html
<ul class="icons-list">
  <li class="fa-check">Item with check icon</li>
  <li class="fa-times">Item with times icon</li>
  <li class="fa-arrow-right">Item with arrow icon</li>
</ul>
```

The `.icons-list` class:
- Resets standard list styling
- Positions list items relatively
- Adds consistent left/right padding (depending on text direction)
- Positions the icon absolutely at the start of each item

```css
.icons-list {
  @extend %reset-list;
  li {
    position: relative;
    padding-start: calc(1em + 10px) !important;
    &::before {
      top: 0;
      position: absolute;
      start: 0;
    }
  }
}
```

## Combining with Typography Utilities

List components can be combined with typography utilities for more customized appearance:

```html
<!-- Bold list items with custom spacing -->
<ul>
  <li class="weight-bold mb-10">Important item</li>
  <li class="mb-10">Regular item</li>
  <li>Final item</li>
</ul>

<!-- List with different text sizes -->
<ol>
  <li class="fs-18">Larger first step</li>
  <li class="fs-16">Regular second step</li>
  <li class="fs-16">Regular third step</li>
</ol>
```

## Reset Spacing

Use the `%reset-space` placeholder (or a class that extends it) to reset the margins and padding of list elements:

```html
<ul class="reset-space">
  <li>No margins or padding</li>
  <li>No margins or padding</li>
</ul>
```

## Examples

### Simple Unstyled List

```html
<ul class="reset-list">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

### Icon List for Features

```html
<ul class="icons-list">
  <li class="fa-check">Responsive design</li>
  <li class="fa-check">Cross-browser compatibility</li>
  <li class="fa-check">SEO optimized</li>
  <li class="fa-check">24/7 support</li>
</ul>
```

### Custom Definition List

```html
<dl>
  <dt>Term 1</dt>
  <dd>Definition of the first term</dd>
  
  <dt>Term 2</dt>
  <dd>Definition of the second term</dd>
  <dd>Additional information about the second term</dd>
  
  <dt>Term 3</dt>
  <dd>Definition of the third term</dd>
</dl>
```

### Nested Lists

```html
<ul>
  <li>Main item 1</li>
  <li>
    Main item 2
    <ul>
      <li>Sub-item 1</li>
      <li>Sub-item 2</li>
    </ul>
  </li>
  <li>Main item 3</li>
</ul>
```

## Best Practices

- Use the reset utilities when you need to build custom list styles from scratch
- Combine list components with typography utilities for consistent styling
- For complex components like dropdown menus or navigation, refer to the dedicated Components documentation
- Keep list markup semantic - use `ul` for unordered collections, `ol` for sequential items, and `dl` for name-value pairs
