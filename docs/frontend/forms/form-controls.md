# Form Controls

## Overview

Form Controls in the Phenix Design System provide a comprehensive set of styled form elements that are consistent, accessible, and easy to implement. The system includes standard controls like inputs, selects, and textareas, as well as custom controls like checkboxes, radio buttons, and switches.

## Basic Usage

To style form controls, add the `.form-control` class to any form element:

```html
<input type="text" placeholder="Text input" class="form-control">
<select class="form-control">
  <option value="">Select option</option>
</select>
<textarea class="form-control" placeholder="Textarea"></textarea>
```

For form elements that can't directly use the `.form-control` class, you can add the `.px-form` class to a parent container:

```html
<div class="px-form" data-size="small">
  <input type="text" placeholder="Text input">
  <select>
    <option value="">Select option</option>
  </select>
</div>
```

## Sizing Options

Form controls come in multiple predefined sizes:

```html
<!-- Tiny size -->
<input type="text" class="form-control tiny" placeholder="Tiny input">

<!-- Small size -->
<input type="text" class="form-control small" placeholder="Small input">

<!-- Default size -->
<input type="text" class="form-control" placeholder="Default input">

<!-- Large size -->
<input type="text" class="form-control large" placeholder="Large input">

<!-- Extra large size -->
<input type="text" class="form-control xlarge" placeholder="Extra large input">
```

You can also specify sizes for specific breakpoints using the format `.size-{breakpoint}`:

```html
<!-- Large on medium screens and up -->
<input type="text" class="form-control large-md" placeholder="Large on medium screens">
```

## Validation States

Form controls support different validation states:

```html
<!-- Error state -->
<input type="text" class="form-control error" placeholder="Error state">

<!-- Warning state -->
<input type="text" class="form-control warning" placeholder="Warning state">

<!-- Success state -->
<input type="text" class="form-control success" placeholder="Success state">

<!-- Disabled state -->
<input type="text" class="form-control disable" placeholder="Disabled state">
```

## Controls with Icons

You can add icons to form controls using the `.control-icon` wrapper:

```html
<div class="control-icon fas fa-user">
  <input type="text" class="form-control" placeholder="Username">
</div>

<!-- Icon at the end -->
<div class="control-icon fas fa-envelope icon-end">
  <input type="text" class="form-control" placeholder="Email">
</div>
```

## Fieldsets and Groups

Group related form controls using fieldsets:

```html
<fieldset class="w-max-360 pdx-20 pdb-20 mb-30 bg-white border-alpha-10 radius-gl">
  <legend class="pdx-15 pdy-5 mb-5 bg-white strong-weight radius-gl">Personal Information</legend>
  
  <label class="mb-5">First name:</label>
  <input type="text" class="form-control small mb-20">
  
  <label class="mb-5">Last name:</label>
  <input type="text" class="form-control small mb-20">
  
  <input type="submit" value="Submit" class="btn primary small miw-120">
</fieldset>
```

## Option Controls

Custom styled checkboxes and radio buttons can be created using the `.option-control` class with a `data-type` attribute:

```html
<!-- Checkbox -->
<label class="option-control" data-type="checkbox">
  <input type="checkbox" name="check-1">
  <span class="fas fa-check">Checkbox Example</span>
</label>

<!-- Radio button -->
<label class="option-control" data-type="radio">
  <input type="radio" name="radio-1">
  <span class="fas fa-circle">Radio Example</span>
</label>
```

## Inline Controls

Form controls can be displayed inline using the `.inline` class:

```html
<p>
  This text has an inline form control
  <input type="text" placeholder="Inline Control" class="form-control tiny inline ms-5 me-5">
  that can be part of any other block or inline-block element.
</p>
```

## Customization

Form controls can be customized using CSS variables:

```css
.form-control {
  /* Size options */
  --height: 42px;
  --padding: 15px;
  --txt-size: 15px;
  --txt-weight: var(--medium-weight);
  
  /* Appearance options */
  --radius: 4px;
  --color: var(--dark-color);
  --box-shadow: unset;
  --background: #FFFFFF;
  --border-size: 1px;
  --border-color: rgba(0,0,0, 0.1);
}
```

## Available Classes

| Class | Description | Element |
|-------|-------------|----------|
| `.form-control` | Main controller style class | `<input>`, `<select>`, `<textarea>` |
| `.px-form` | Controls wrapper to style elements that can't have `.form-control` | Container element |
| `.tiny` | Tiny size | `.form-control` elements |
| `.small` | Small size | `.form-control` elements |
| `.large` | Large size | `.form-control` elements |
| `.xlarge` | Extra large size | `.form-control` elements |
| `.size-{breakpoint}` | Size from specific breakpoint and up | `.form-control` elements |
| `.control-icon` | Wrapper to add icon to form control | Container element |
| `.icon-end` | Places icon at the end | `.control-icon` element |
| `.inline` | Makes form control behave like inline element | `.form-control` elements |
| `.error` | Error state styling | `.form-control` elements |
| `.warning` | Warning state styling | `.form-control` elements |
| `.success` | Success state styling | `.form-control` elements |
| `.disable` | Disabled state styling | `.form-control` elements |
| `[data-size]` | Resizes all controls in a `.px-form` wrapper | `.px-form` element |
| `.option-control` | Custom styled checkbox/radio controllers | Container element |
