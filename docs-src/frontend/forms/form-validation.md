# Form Validation

## Overview

The Phenix Design System provides a robust form validation system that builds upon the browser's native validation capabilities while adding custom styling and error messages. This allows you to create user-friendly forms with consistent validation feedback.

## Basic Usage

The simplest way to implement validation is to use HTML5 validation attributes and let the browser handle validation:

```html
<form class="row gp-15">
  <div class="col-12 col-md-6 mb-15">
    <input type="text" placeholder="Required field" class="form-control" required>
  </div>
  <div class="col-12 col-md-6 mb-15">
    <input type="email" placeholder="Email address" class="form-control" required>
  </div>
  <div class="col-12 mb-15">
    <button class="btn primary">Submit</button>
  </div>
</form>
```

## Phenix Validation

For more advanced validation with custom error messages and styling, use the Phenix validation method:

```html
<form class="row gp-15 px-validation">
  <div class="col-12 col-md-6 mb-15">
    <label for="input-letters" class="mb-5">Letters Only</label>
    <input type="text" id="input-letters" placeholder="Letters only (A-Z)" class="form-control" pattern="[A-Za-z]+" required>
  </div>
  <div class="col-12 col-md-6 mb-15">
    <label for="input-numbers" class="mb-5">Numbers Only</label>
    <input type="text" id="input-numbers" placeholder="Numbers only (0-9)" class="form-control" pattern="[0-9]+" required>
  </div>
  <div class="col-12 mb-15">
    <button class="btn primary">Submit</button>
  </div>
</form>
```

```javascript
// Initialize validation on a form
Phenix('.px-validation').validation();
```

## Custom Error Messages

You can customize error messages for different validation scenarios:

```javascript
Phenix('.px-validation').validation({
  defaults: {
    valueMissing: "This field is required.",
    typeMismatch: "Please enter a valid value.",
    tooLong: "Value is too long.",
    tooShort: "Value is too short."
  }
});
```

## Custom Validation Patterns

For more complex validation requirements, you can define custom patterns:

```javascript
Phenix('.px-validation').validation({
  patterns: [
    {
      name: "username",
      pattern: "^[a-z0-9_-]{3,16}$",
      message: "Username must be 3-16 characters and may only contain letters, numbers, underscores, and hyphens.",
      position: "after"
    },
    {
      name: "password",
      pattern: "(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$",
      message: "Password must have at least 8 characters with 1 uppercase letter, 1 lowercase letter, and 1 number.",
      position: "after"
    }
  ]
});
```

## Validation States

The validation system adds appropriate classes to form controls based on their validation state:

- `.error` - Applied to invalid form controls
- `.success` - Applied to valid form controls

You can also manually apply these classes for custom validation logic:

```html
<div class="col-md-4">
  <input type="text" placeholder="Error Example" class="form-control error">
  <div class="px-validation color-danger">This field has an error.</div>
</div>

<div class="col-md-4">
  <input type="text" placeholder="Success Example" class="form-control success">
</div>
```

## Validation Events

The validation system listens for the following events:

- `input` - Triggered when the user types in a text field
- `change` - Triggered when the user selects an option in a select field
- `invalid` - Triggered when a form control fails validation
- `submit` - Triggered when the form is submitted

## Common Validation Patterns

Here are some common validation patterns you can use:

| Description | RegEx Pattern |
|-------------|---------------|
| Letters only (A-Z) | `[A-Za-z]+` |
| Numbers only (0-9) | `[0-9]+` |
| Alphanumeric (no spaces) | `[a-zA-Z0-9]+` |
| Alphanumeric (with spaces) | `[a-zA-Z0-9 ]+` |
| Email address | `^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$` |
| URL (with protocol) | `https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)` |
| Username (3-16 chars) | `^[a-z0-9_-]{3,16}$` |
| Strong password | `(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$` |

## Validation API Options

| Option | Description | Default | Type |
|--------|-------------|---------|------|
| `defaults` | Default error messages for validation types | - | Object |
| `defaults.valueMissing` | Error message for empty required fields | - | String |
| `defaults.typeMismatch` | Error message for type mismatches | - | String |
| `defaults.tooLong` | Error message for values that are too long | - | String |
| `defaults.tooShort` | Error message for values that are too short | - | String |
| `patterns` | Array of custom validation patterns | - | Array |
| `patterns[].name` | Input name attribute to match | - | String |
| `patterns[].pattern` | RegEx pattern for validation | - | String |
| `patterns[].message` | Error message to display | - | String |
| `patterns[].position` | Position of error message (`before` or `after`) | `after` | String |
