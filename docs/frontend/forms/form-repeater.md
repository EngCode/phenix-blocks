# Form Repeater

## Overview

The Form Repeater utility allows you to create dynamic, repeatable form fields. This is particularly useful for collecting multiple entries of the same type of data, such as multiple phone numbers, addresses, or any other repeatable information.

## Basic Usage

To create a form repeater, you need to set up a container with the `.px-form-repeater` class and a template row that will be duplicated:

```html
<div class="px-form-repeater" data-name="contact">
  <!-- Repeater Controls -->
  <div class="repeater-controls mb-15">
    <button type="button" class="btn primary small fas fa-plus px-repeater-add">Add Contact</button>
  </div>
  
  <!-- Repeater Template -->
  <div class="px-form-repeater-template hidden">
    <div class="px-form-repeater-fields row gpx-15 mb-15">
      <div class="col-12 col-md-6 mb-10">
        <input type="text" placeholder="Name" class="form-control small" data-original-name="name">
      </div>
      <div class="col-12 col-md-6 mb-10">
        <input type="tel" placeholder="Phone Number" class="form-control small" data-original-name="phone">
      </div>
    </div>
  </div>
  
  <!-- Repeater Container (where new rows will be added) -->
  <div class="px-form-repeater-container"></div>
</div>
```

## How It Works

The Form Repeater works as follows:

1. When the user clicks the "Add" button (with class `.px-repeater-add`), a new row is created from the template
2. The new row is appended to the container (with class `.px-form-repeater-container`)
3. A "Remove" button is automatically added to each new row
4. Form field names are automatically updated to use array notation (e.g., `contact[0][name]`, `contact[1][name]`, etc.)

## Initialization

The Form Repeater is automatically initialized when you call the utilities function with the "form" type:

```javascript
// Initialize all utilities including Form Repeater
Phenix(document).utilities();

// Or specifically initialize form utilities
Phenix(document).utilities({
  type: 'form'
});
```

## Configuration Options

### Container Attributes

- `data-name`: The base name for the form fields (required)
- `data-min`: Minimum number of rows (optional, default: 0)
- `data-max`: Maximum number of rows (optional, default: unlimited)

### Template Fields

Each form field in the template should have a `data-original-name` attribute that will be used to generate the field names in the format: `{data-name}[{index}][{data-original-name}]`

```html
<input type="text" class="form-control" data-original-name="email">
```

When a new row is added, this will become something like:

```html
<input type="text" class="form-control" name="contact[0][email]">
```

## Advanced Usage

### Pre-populated Repeater

You can pre-populate the repeater with existing data by adding rows directly to the container:

```html
<div class="px-form-repeater-container">
  <!-- Pre-populated row -->
  <div class="px-form-repeater-fields row gpx-15 mb-15">
    <div class="col-12 col-md-6 mb-10">
      <input type="text" placeholder="Name" class="form-control small" name="contact[0][name]" value="John Doe">
    </div>
    <div class="col-12 col-md-6 mb-10">
      <input type="tel" placeholder="Phone Number" class="form-control small" name="contact[0][phone]" value="555-123-4567">
    </div>
    <!-- Remove button will be added automatically by the script -->
  </div>
</div>
```

### Custom Styling

The repeater rows can be styled using any Phenix utility classes. The example below uses a card-like appearance:

```html
<div class="px-form-repeater-template hidden">
  <div class="px-form-repeater-fields pdx-20 pdy-15 mb-15 bg-white border-1 border-solid border-alpha-10 radius-md">
    <h4 class="mb-10">Contact Information</h4>
    <div class="row gpx-15">
      <div class="col-12 col-md-6 mb-10">
        <input type="text" placeholder="Name" class="form-control small" data-original-name="name">
      </div>
      <div class="col-12 col-md-6 mb-10">
        <input type="tel" placeholder="Phone Number" class="form-control small" data-original-name="phone">
      </div>
    </div>
  </div>
</div>
```

## Handling Form Submission

When the form is submitted, the repeater fields will be sent as an array. For example, with the configuration above, you might receive data like:

```
contact[0][name] = "John Doe"
contact[0][phone] = "555-123-4567"
contact[1][name] = "Jane Smith"
contact[1][phone] = "555-987-6543"
```

## Best Practices

1. **Keep it Simple**: Don't include too many fields in each repeater row to avoid overwhelming the user
2. **Provide Clear Labels**: Use clear labels and placeholders to guide users
3. **Set Reasonable Limits**: Consider using `data-max` to prevent users from adding too many rows
4. **Validation**: Apply appropriate validation to repeater fields using the Form Validation utility
5. **Responsive Design**: Ensure your repeater layout works well on all screen sizes

## Browser Compatibility

The Form Repeater utility works in all modern browsers that support JavaScript ES6 features.
