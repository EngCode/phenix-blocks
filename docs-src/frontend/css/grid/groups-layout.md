# Group Layout

Group Layout in the Phenix Design System provides a way to create cohesive UI elements by visually connecting multiple elements together, typically with shared borders and coordinated border radius. It's particularly useful for button groups, input groups, and other related UI components.

## Overview

The `.px-group` class creates a flexbox container that automatically handles border-radius for child elements, ensuring that only the outer edges have rounded corners while internal edges remain straight. This creates a unified visual appearance for related elements.

Key features:
- Built on flexbox for flexible layout capabilities
- Automatic border-radius handling for child elements
- Support for both horizontal (default) and vertical orientation
- Seamless integration with form controls and buttons
- RTL language support

## Basic Usage

```html
<!-- Basic horizontal group -->
<div class="px-group">
  <button class="btn primary">Button 1</button>
  <button class="btn primary">Button 2</button>
  <button class="btn primary">Button 3</button>
</div>
```

## Group Properties

The `.px-group` class inherits the `%flexbox` placeholder selector which provides:

- `display: flex` - Creates a flexbox container
- `flex-wrap: wrap` - Allows items to wrap to the next line when needed
- Automatic border-radius handling for child elements:
  - First child gets rounded corners on the start side
  - Last child gets rounded corners on the end side
  - Middle elements get no border radius

## Group Orientations

### Horizontal Group (Default)

By default, `.px-group` displays elements horizontally in a row:

```html
<!-- Horizontal group (default) -->
<div class="px-group">
  <button class="btn primary">Left</button>
  <button class="btn primary">Middle</button>
  <button class="btn primary">Right</button>
</div>
```

### Vertical Group

Add the `.px-group-v` class to create a vertical group:

```html
<!-- Vertical group -->
<div class="px-group px-group-v">
  <button class="btn primary">Top</button>
  <button class="btn primary">Middle</button>
  <button class="btn primary">Bottom</button>
</div>
```

In vertical groups:
- The first child gets rounded corners on the top
- The last child gets rounded corners on the bottom
- Middle elements get no border radius

## Common Use Cases

### Button Groups

Button groups allow you to group related actions together:

```html
<!-- Primary button group -->
<div class="px-group">
  <button class="btn primary">Save</button>
  <button class="btn primary">Publish</button>
  <button class="btn primary">Preview</button>
</div>

<!-- Mixed button group -->
<div class="px-group">
  <button class="btn light">Cancel</button>
  <button class="btn success">Save</button>
</div>
```

### Input Groups

Input groups combine form controls with buttons or text:

```html
<!-- Search input with button -->
<div class="px-group">
  <input type="text" class="form-control" placeholder="Search...">
  <button class="btn primary">Search</button>
</div>

<!-- Input with prefix and suffix -->
<div class="px-group">
  <span class="btn light">$</span>
  <input type="number" class="form-control" placeholder="Amount">
  <span class="btn light">.00</span>
</div>
```

### Segmented Controls

Create segmented controls for toggle options:

```html
<!-- Segmented control -->
<div class="px-group">
  <input type="radio" name="view" id="list-view" class="hidden">
  <label for="list-view" class="btn light">List</label>
  
  <input type="radio" name="view" id="grid-view" class="hidden">
  <label for="grid-view" class="btn light">Grid</label>
  
  <input type="radio" name="view" id="table-view" class="hidden">
  <label for="table-view" class="btn light">Table</label>
</div>
```

## RTL Support

The group layout automatically adjusts for right-to-left (RTL) languages, ensuring proper border-radius placement:

```html
<!-- This will have appropriate border-radius in both LTR and RTL layouts -->
<div class="px-group">
  <button class="btn primary">First Button</button>
  <button class="btn primary">Middle Button</button>
  <button class="btn primary">Last Button</button>
</div>
```

## Form Integration

The group layout works seamlessly with form elements:

```html
<!-- Form with grouped inputs -->
<form>
  <div class="form-group mb-15">
    <label>Price Range</label>
    <div class="px-group">
      <input type="number" class="form-control" placeholder="Min">
      <span class="btn light">to</span>
      <input type="number" class="form-control" placeholder="Max">
    </div>
  </div>
  
  <div class="form-group mb-15">
    <label>Date Range</label>
    <div class="px-group">
      <input type="date" class="form-control">
      <span class="btn light">to</span>
      <input type="date" class="form-control">
    </div>
  </div>
</form>
```

## Advanced Examples

### Combined Layouts

You can nest group layouts to create more complex UI components:

```html
<!-- Advanced filter group -->
<div class="px-group">
  <!-- Category dropdown -->
  <select class="form-control">
    <option>All Categories</option>
    <option>Category 1</option>
    <option>Category 2</option>
  </select>
  
  <!-- Search input -->
  <input type="text" class="form-control" placeholder="Search...">
  
  <!-- Date range nested group -->
  <div class="px-group">
    <input type="date" class="form-control">
    <span class="btn light">to</span>
    <input type="date" class="form-control">
  </div>
  
  <!-- Action button -->
  <button class="btn primary">Filter</button>
</div>
```

### Responsive Button Group

```html
<!-- Responsive button group -->
<div class="px-group flow-md-columns">
  <button class="btn primary">Home</button>
  <button class="btn primary">Products</button>
  <button class="btn primary">Services</button>
  <button class="btn primary">Contact</button>
</div>
```

This group will display horizontally on wider screens and vertically on medium screens and below when the `flow-md-columns` class takes effect.
