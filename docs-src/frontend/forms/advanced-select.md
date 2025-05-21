# Advanced Select

## Overview

The Advanced Select component enhances the standard HTML select element with additional features such as searchable options, multi-select capability, custom styling, and improved user experience. It maintains accessibility while providing a more interactive and visually appealing dropdown interface.

## Basic Usage

To create an advanced select, add the `.px-select` class to a standard HTML select element and manually initialize it:

```html
<select class="px-select form-control">
  <option value="">Select an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
```

```javascript
// Initialize the select component
Phenix('select.px-select').select();
```

The component will transform the standard select into an enhanced version with custom styling and functionality.

## Features

### Searchable Options

For selects with many options, users can search to quickly find the option they need:

```html
<select class="px-select form-control" data-search="true">
  <option value="">Select a country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
  <!-- More options... -->
</select>
```

### Multi-Select

Enable multi-select functionality to allow users to select multiple options:

```html
<select class="px-select form-control" multiple>
  <option value="">Select skills</option>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
</select>
```

### Option Groups

Organize options into logical groups for better organization:

```html
<select class="px-select form-control">
  <option value="">Select a programming language</option>
  <optgroup label="Frontend">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
  </optgroup>
  <optgroup label="Backend">
    <option value="php">PHP</option>
    <option value="python">Python</option>
    <option value="ruby">Ruby</option>
  </optgroup>
</select>
```

### Disabled Options

Disable specific options that are not currently selectable:

```html
<select class="px-select form-control">
  <option value="">Select an option</option>
  <option value="option1">Option 1</option>
  <option value="option2" disabled>Option 2 (Not Available)</option>
  <option value="option3">Option 3</option>
</select>
```

## Customization

### Custom Placeholder

Set a custom placeholder text:

```html
<select class="px-select form-control" data-placeholder="Choose an option...">
  <option value=""></option> <!-- Empty option for placeholder -->
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
```

### Custom Styling

The Advanced Select component inherits styling from the form-control class and can be customized with size modifiers:

```html
<!-- Small size -->
<select class="px-select form-control small">
  <!-- Options... -->
</select>

<!-- Large size -->
<select class="px-select form-control large">
  <!-- Options... -->
</select>
```

### Images in Options

Add images to options for a more visual selection experience:

```html
<select class="px-select form-control">
  <option value="">Select a country</option>
  <option value="us" data-image="/path/to/us-flag.png">United States</option>
  <option value="ca" data-image="/path/to/ca-flag.png">Canada</option>
  <option value="uk" data-image="/path/to/uk-flag.png">United Kingdom</option>
</select>
```

## JavaScript API

The Advanced Select component must be manually initialized. It is not automatically initialized by the utilities function.

### Initialization

```javascript
// Basic initialization
Phenix('select.px-select').select();

// With options
Phenix('select.px-select').select({
  max: 5,                      // Maximum number of selectable items (for multiple select)
  search: true,                // Enable search functionality
  multiple: true,              // Enable multiple selection
  placeholder: 'Select...',    // Custom placeholder text
  searchPlaceholder: 'Search...' // Custom search input placeholder
});

// Rebuild a select after dynamically changing options
Phenix(selectElement).rebuildSelect();
```

### Available Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| max | Number | undefined | Maximum number of items that can be selected in multiple mode |
| search | Boolean | false | Enable search functionality within options |
| multiple | Boolean | false | Enable multiple selection mode |
| placeholder | String | undefined | Custom placeholder text |
| searchPlaceholder | String | 'Search...' | Custom placeholder for the search input |

## Events

The Advanced Select component maintains the standard select events:

```javascript
// Listen for change events
Phenix('select.px-select').on('change', (event) => {
  console.log('Selected value:', event.target.value);
});
```

## Accessibility

The Advanced Select component maintains accessibility features:

- Keyboard navigation (Tab, Enter, Space, Arrow keys)
- ARIA attributes for screen readers
- Focus states for keyboard users

## Browser Compatibility

The Advanced Select component is compatible with all modern browsers that support JavaScript ES6 features.
