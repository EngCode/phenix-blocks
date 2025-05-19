# Item Remover

## Overview

The Item Remover utility provides a simple way to remove elements from the DOM with a single click. This is useful for creating dismissible elements, dynamic content management, and interactive interfaces.

## Initialization

The Item Remover is automatically initialized when you call the main utilities function:

```js
// Initialize all utilities including item remover
Phenix(document).utilities();

// Or initialize only other utilities (which includes item remover)
Phenix(document).utilities({
  type: 'other'
});
```

## Basic Usage

Add the `.remove-item` class to any clickable element and specify the target to remove using the `data-target` attribute or `href` attribute:

```html
<!-- Using data-target attribute -->
<button class="remove-item" data-target=".notification">Close</button>

<!-- Using href attribute -->
<a href=".card" class="remove-item">Remove Card</a>
```

## Targeting Options

The Item Remover supports different targeting relationships through the `data-relation` attribute:

### Ancestor Targeting (Default)

Removes the closest ancestor that matches the target selector:

```html
<div class="card">
  <div class="card-body">
    <button class="remove-item" data-target=".card">Remove Card</button>
  </div>
</div>
```

### Sibling Targeting

Removes sibling elements that match the target selector:

```html
<div class="container">
  <div class="notification">Alert 1</div>
  <button class="remove-item" data-target=".notification" data-relation="sibling">
    Remove All Notifications
  </button>
</div>
```

### Global Targeting

Removes any element in the document that matches the target selector:

```html
<button class="remove-item" data-target="#global-message" data-relation="global">
  Remove Global Message
</button>

<div id="global-message" class="floating-alert">Important announcement</div>
```

### Closest Targeting

Removes the closest element that matches the target selector (similar to ancestor but uses the closest() method):

```html
<div class="nested-component">
  <div class="item">
    <button class="remove-item" data-target=".item" data-relation="closest">
      Remove This Item
    </button>
  </div>
</div>
```

## Configuration Options

| Attribute | Values | Description |
|-----------|--------|-------------|
| `data-target` | CSS selector | The element(s) to remove |
| `data-relation` | `ancestor` (default), `sibling`, `global`, `closest` | How to find the target element relative to the trigger |

## Examples

### Dismissible Alerts

```html
<div class="alert alert-info">
  <p>This is an informational message.</p>
  <button class="remove-item" data-target=".alert">×</button>
</div>
```

### Dynamic List Management

```html
<ul class="task-list">
  <li class="task-item">
    Task 1
    <button class="remove-item" data-target=".task-item" data-relation="closest">Delete</button>
  </li>
  <li class="task-item">
    Task 2
    <button class="remove-item" data-target=".task-item" data-relation="closest">Delete</button>
  </li>
</ul>
```

### Removing Multiple Elements

```html
<div class="gallery">
  <div class="thumbnail">Image 1</div>
  <div class="thumbnail">Image 2</div>
  <div class="thumbnail">Image 3</div>
  <button class="remove-item" data-target=".thumbnail" data-relation="sibling">
    Clear Gallery
  </button>
</div>
```

## Best Practices

- Use clear visual cues (like X icons or "Remove" text) to indicate removable items
- Consider adding confirmation for destructive actions
- Combine with animations for smoother transitions when removing elements
- Use appropriate targeting relationships to avoid unintended removals
- For critical content, consider adding a way to restore removed items

## Browser Compatibility

The Item Remover utility is compatible with all modern browsers and uses standard DOM manipulation techniques.
