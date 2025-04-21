# Overflow & Float Utilities

The Phenix Design System provides utilities for controlling content overflow and using float-based layouts. These utilities help manage content containment and create legacy layout patterns.

## Overview

This documentation covers:

1. **Overflow Utilities** - Control how content that exceeds its container is handled
2. **Float Utilities** - Legacy float-based layout control
3. **Clearfix Utilities** - Clear floated elements

## Overflow Utilities

Overflow utilities control how content that exceeds its container dimensions is displayed:

### Hidden Overflow

Hide content that overflows its container:

```html
<!-- Hide overflow in all directions -->
<div class="overflow-hidden">
  Content that exceeds this container will be clipped
</div>

<!-- Hide overflow vertically only -->
<div class="overflow-y-hidden">
  Vertical overflow will be hidden, horizontal will show
</div>

<!-- Hide overflow horizontally only -->
<div class="overflow-x-hidden">
  Horizontal overflow will be hidden, vertical will show
</div>
```

### Scrollable Overflow

Add scrollbars when content overflows:

```html
<!-- Add scrollbars when content overflows -->
<div class="overflow-auto">
  Scrollbars appear when content exceeds container
</div>

<!-- Add vertical scrollbar only when needed -->
<div class="overflow-y-auto">
  Vertical scrollbar appears when needed
</div>

<!-- Add horizontal scrollbar only when needed -->
<div class="overflow-x-auto">
  Horizontal scrollbar appears when needed
</div>
```

## Float Utilities

While modern layouts primarily use flexbox and grid, float utilities remain available for legacy layout patterns:

```html
<!-- Float element to the start (left in LTR, right in RTL) -->
<div class="float-start">
  This element floats to the start
</div>

<!-- Float element to the end (right in LTR, left in RTL) -->
<div class="float-end">
  This element floats to the end
</div>
```

## Clearfix Utilities

Clear the effect of floated elements:

```html
<!-- Clear floated elements -->
<div class="clear-fix">
  This clears preceding floats
</div>

<!-- Clear floats using ::after pseudo-element -->
<div class="clear-after">
  This clears floats with ::after pseudo-element
</div>
```

The `clear-after` class adds the clearfix hack by adding an `::after` pseudo-element with `clear: both`.

## Use Cases

### Managing Long Content

```html
<!-- Create a scrollable container for long content -->
<div class="overflow-y-auto" style="height: 300px;">
  <p>Long content that will scroll vertically...</p>
  <!-- More content -->
</div>
```

### Creating a Responsive Table

```html
<!-- Make table horizontally scrollable on small screens -->
<div class="overflow-x-auto">
  <table class="table">
    <!-- Table content with many columns -->
  </table>
</div>
```

### Simple Two-Column Layout with Floats

```html
<!-- Legacy float-based layout -->
<div class="clear-after">
  <div class="float-start" style="width: 30%;">
    Sidebar content
  </div>
  <div class="float-end" style="width: 65%;">
    Main content
  </div>
</div>
```

### Image Wrapping with Text

```html
<!-- Float image within text -->
<p>
  <img src="image.jpg" alt="Sample image" class="float-start" style="margin-right: 15px;">
  Text will wrap around this floated image. Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
  Donec in efficitur leo. In hac habitasse platea dictumst.
</p>
```

## Best Practices

1. **Prefer modern layout systems**: Use CSS Grid and Flexbox for most layout needs
2. **Use floats sparingly**: Floats can cause unexpected layout issues; use them only when necessary
3. **Always clear floats**: When using floats, always clear them to avoid layout issues
4. **Handle overflow carefully**: Be mindful of hiding important content when using `overflow-hidden`
5. **Include scrolling indicators**: When using `overflow-auto`, consider adding visual cues to indicate scrollable content

## RTL Support

Float utilities automatically adapt to RTL (right-to-left) languages:

- `float-start` will float left in LTR and right in RTL
- `float-end` will float right in LTR and left in RTL

This makes your layouts automatically compatible with different text direction settings. 