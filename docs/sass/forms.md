# Form Elements

Phenix provides a comprehensive set of form elements and controls that can be customized to match your design requirements. These form controls include text inputs, selects, textareas, checkboxes, radio buttons, and file uploaders.

## Basic Form Controls

The basic form control is created with the `.form-control` class:

```html
<input type="text" class="form-control" placeholder="Enter text">
<input type="email" class="form-control" placeholder="Enter email">
<input type="password" class="form-control" placeholder="Enter password">
```

## Form Control Sizes

Control the size of form elements with these size classes:

```html
<input type="text" class="form-control tiny" placeholder="Tiny input">
<input type="text" class="form-control small" placeholder="Small input">
<input type="text" class="form-control medium" placeholder="Medium input (default)">
<input type="text" class="form-control large" placeholder="Large input">
<input type="text" class="form-control xlarge" placeholder="Extra large input">
```

## Select Controls

Style select dropdowns with the `.form-control` class:

```html
<select class="form-control">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

### Select Arrow Styles

Customize the select dropdown arrow appearance:

```html
<select class="form-control arrow-gray">
  <!-- Options -->
</select>

<select class="form-control arrow-white">
  <!-- Options -->
</select>
```

## Textarea

Style textarea elements with the `.form-control` class:

```html
<textarea class="form-control" rows="4" placeholder="Enter your message"></textarea>
```

## Status Variations

Add status classes to indicate form control states:

```html
<input type="text" class="form-control success" placeholder="Success state">
<input type="text" class="form-control error" placeholder="Error state">
<input type="text" class="form-control warning" placeholder="Warning state">
<input type="text" class="form-control disabled" placeholder="Disabled state">
```

You can also use the `disabled` attribute:

```html
<input type="text" class="form-control" disabled placeholder="Disabled input">
```

## Form Validation

Phenix supports form validation through the `.was-validated` class on a parent element:

```html
<div class="was-validated">
  <input type="text" class="form-control" required>
  <input type="email" class="form-control" required>
</div>
```

When the form is submitted, valid inputs will show a success state and invalid inputs will show an error state.

## File Uploader

Phenix provides a custom file uploader component:

```html
<div class="px-uploader">
  <input type="file" id="file-upload" class="form-control">
  <label for="file-upload" class="uploader-ui">
    <i class="fas fa-cloud-upload-alt"></i>
    <span>Drop files here or click to upload</span>
  </label>
</div>
```

### Image Preview

Add image preview functionality to the uploader:

```html
<div class="px-uploader has-preview">
  <input type="file" id="file-upload" class="form-control" accept="image/*">
  <label for="file-upload" class="uploader-ui">
    <i class="fas fa-cloud-upload-alt"></i>
    <span>Drop an image here or click to upload</span>
  </label>
  <div class="preview-area"></div>
</div>
```

## Input with Icon

Add icons to input fields with the `.control-icon` class:

```html
<div class="control-icon">
  <input type="text" class="form-control" placeholder="Search...">
  <i class="fas fa-search"></i>
</div>
```

Place the icon at the end:

```html
<div class="control-icon icon-end">
  <input type="text" class="form-control" placeholder="Search...">
  <i class="fas fa-search"></i>
</div>
```

## Option Controls

Style checkboxes and radio buttons with the `.option-control` class:

### Checkbox

```html
<label class="option-control">
  <input type="checkbox">
  <span class="mark"></span>
  <span class="label">Checkbox label</span>
</label>
```

### Radio Button

```html
<label class="option-control">
  <input type="radio" name="radioGroup">
  <span class="mark"></span>
  <span class="label">Radio label</span>
</label>
```

### Switch/Toggle

Create a switch toggle:

```html
<label class="option-control switch">
  <input type="checkbox">
  <span class="mark"></span>
  <span class="label">Switch label</span>
</label>
```

## Form Layout

### Basic Form Layout

```html
<form>
  <div class="mb-15">
    <label class="mb-5">Email address</label>
    <input type="email" class="form-control" placeholder="Enter email">
  </div>
  <div class="mb-15">
    <label class="mb-5">Password</label>
    <input type="password" class="form-control" placeholder="Password">
  </div>
  <div class="mb-15">
    <label class="option-control">
      <input type="checkbox">
      <span class="mark"></span>
      <span class="label">Remember me</span>
    </label>
  </div>
  <button type="submit" class="btn primary">Submit</button>
</form>
```

### Form Grid Layout

Create responsive form layouts using the grid system:

```html
<form>
  <div class="row mb-15">
    <div class="col-12 col-md-6 mb-15 mb-md-0">
      <label class="mb-5">First name</label>
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col-12 col-md-6">
      <label class="mb-5">Last name</label>
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>
  <div class="mb-15">
    <label class="mb-5">Email</label>
    <input type="email" class="form-control" placeholder="Enter email">
  </div>
  <button type="submit" class="btn primary">Submit</button>
</form>
```

### Inline Form

Create inline forms using flexbox utilities:

```html
<form class="display-flex align-center-y gpx-15">
  <div class="flex-grow-on">
    <input type="text" class="form-control" placeholder="Username">
  </div>
  <div class="flex-grow-on">
    <input type="password" class="form-control" placeholder="Password">
  </div>
  <button type="submit" class="btn primary">Submit</button>
</form>
```

## Responsive Form Controls

Form controls can be adjusted for different screen sizes:

```html
<input type="text" class="form-control small medium-md large-lg">
```

This will render a small input on mobile, medium on tablet, and large on desktop screens. 