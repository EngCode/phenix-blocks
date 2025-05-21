# Form Utilities

## Overview

The Phenix Form Utilities provide a collection of JavaScript enhancements for form elements, making them more interactive and user-friendly. These utilities handle common form interactions like placeholder effects, form control styling, form repeaters, and more.

## Initialization

Form utilities are automatically initialized when you call the main utilities function:

```js
// Initialize all utilities including form utilities
Phenix(document).utilities();

// Or initialize only form utilities
Phenix(document).utilities({
  type: 'form'
});
```

## Features

### Placeholder Effect

The placeholder effect enhances the standard HTML placeholder behavior by dynamically removing and restoring placeholders on focus and blur events.

```html
<input type="text" placeholder="Enter your name">
<textarea placeholder="Enter your message"></textarea>
```

When a user focuses on the input, the placeholder disappears, providing a cleaner input experience. When the user leaves the field without entering any text, the placeholder is automatically restored.

### Form Controls Styling

Form controls within elements with the `.form-ui` or `.px-form` classes are automatically styled with the `.form-control` class and any size classes specified on the parent form.

```html
<form class="form-ui" data-size="large">
  <input type="text" placeholder="This will be styled as a large form control">
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</form>
```

### Form Repeater

The Form Repeater utility allows users to dynamically add and remove sets of form fields. This is particularly useful for collecting multiple entries of the same type of data.

#### Basic Structure

```html
<div class="px-form-repeater" data-fields-key="items">
  <!-- Add Button -->
  <button class="px-repeater-add btn primary fa-plus">Add Item</button>
  
  <!-- Items Container -->
  <div class="px-repeater-items">
    <!-- Original Row (Template) -->
    <div class="px-form-repeater-fields" data-item-key="0">
      <input type="text" name="title" placeholder="Item Title">
      <input type="text" name="description" placeholder="Item Description">
    </div>
  </div>
</div>
```

#### How It Works

1. The original row serves as a template for new rows
2. When the add button is clicked, a new row is created from the template
3. Field names are automatically updated with the correct array index (e.g., `items[0][title]`, `items[1][title]`, etc.)
4. A remove button is automatically added to each new row
5. When a remove button is clicked, the corresponding row is removed

#### Configuration

| Attribute | Description |
|-----------|-------------|
| `data-fields-key` | The base name for the form fields array |
| `data-item-key` | The index for each row (automatically incremented for new rows) |

### Rating Controller

The Rating Controller provides an interactive star rating input that can be easily integrated into forms.

```html
<div class="px-rating" data-rate="3" data-max="5"></div>
```

The rating controller is automatically initialized for elements with the `.px-rating` class.

## Counter Input

The Counter Input utility enhances number inputs with increment and decrement buttons for easier value adjustment.

```html
<div class="px-counter-input">
  <button class="decrease-btn">-</button>
  <input type="number" min="0" max="100" value="1" data-step="1">
  <button class="increase-btn">+</button>
</div>
```

### Configuration

| Attribute | Description |
|-----------|-------------|
| `min` | Minimum allowed value (defaults to 0) |
| `max` | Maximum allowed value (defaults to 99999) |
| `data-step` | Step value for increments/decrements (defaults to 1) |

## Best Practices

- Always provide clear labels for form controls
- Use appropriate input types for different data (e.g., email, number, date)
- Combine form utilities with CSS styling for a consistent user experience
- Consider adding validation to ensure data quality
- For form repeaters, keep the field sets simple to avoid overwhelming users

## Browser Compatibility

These form utilities are compatible with all modern browsers and use standard DOM manipulation techniques.
