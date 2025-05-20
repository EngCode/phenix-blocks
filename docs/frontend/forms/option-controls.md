# Option Controls

## Overview

Option Controls in the Phenix Design System provide customizable, styled alternatives to standard HTML checkbox, radio, switch, and button controls. They maintain the functionality of native form elements while offering enhanced styling and user experience.

## Basic Usage

To create an option control, use the `.option-control` class with a `data-type` attribute to specify the control type:

```html
<!-- Checkbox Option Control -->
<label class="option-control" data-type="checkbox">
    <input type="checkbox" name="check-1">
    <span class="fas fa-check">Checkbox Example</span>
</label>

<!-- Radio Option Control -->
<label class="option-control" data-type="radio">
    <input type="radio" name="radio-1">
    <span class="fas fa-circle">Radio Example</span>
</label>
```

## Types of Option Controls

### Checkbox

The checkbox option control provides a custom styled checkbox:

```html
<label class="option-control" data-type="checkbox">
    <input type="checkbox" name="check-1">
    <span class="fas fa-check">Checkbox Example</span>
</label>
```

### Radio Button

The radio option control provides a custom styled radio button:

```html
<label class="option-control" data-type="radio">
    <input type="radio" name="radio-1">
    <span class="fas fa-circle">Radio Example</span>
</label>
```

### Switch

The switch option control provides a toggle switch:

```html
<label class="option-control" data-type="switch">
    <input type="checkbox" name="switch-1">
    <span class="switch"></span>
    <span>Switch Example</span>
</label>
```

### Button

The button option control provides a button-like appearance:

```html
<label class="option-control" data-type="button">
    <input type="checkbox" name="button-1">
    <span class="btn outline">Button Option</span>
</label>
```

## Customization

### Size Variants

Option controls support different sizes using the size modifier classes:

```html
<!-- Small Option Control -->
<label class="option-control small" data-type="checkbox">
    <input type="checkbox" name="check-small">
    <span class="fas fa-check">Small Checkbox</span>
</label>

<!-- Default Size -->
<label class="option-control" data-type="checkbox">
    <input type="checkbox" name="check-default">
    <span class="fas fa-check">Default Checkbox</span>
</label>

<!-- Large Option Control -->
<label class="option-control large" data-type="checkbox">
    <input type="checkbox" name="check-large">
    <span class="fas fa-check">Large Checkbox</span>
</label>
```

### Custom Colors

You can customize the colors of option controls using CSS variables or utility classes:

```html
<!-- Success Color -->
<label class="option-control success" data-type="checkbox">
    <input type="checkbox" name="check-success">
    <span class="fas fa-check">Success Checkbox</span>
</label>

<!-- Custom Color Using CSS Variables -->
<label class="option-control" data-type="checkbox" style="--color-active: #f5a623;">
    <input type="checkbox" name="check-custom">
    <span class="fas fa-check">Custom Color Checkbox</span>
</label>
```

### Custom Icons

You can use different icons for checkbox and radio controls:

```html
<!-- Checkbox with Custom Icon -->
<label class="option-control" data-type="checkbox">
    <input type="checkbox" name="check-icon">
    <span class="fas fa-thumbs-up">Thumbs Up Checkbox</span>
</label>

<!-- Radio with Custom Icon -->
<label class="option-control" data-type="radio">
    <input type="radio" name="radio-icon">
    <span class="fas fa-star">Star Radio</span>
</label>
```

## Groups of Option Controls

You can create groups of related option controls:

```html
<div class="mb-20">
    <h4 class="mb-10">Select your favorite fruits:</h4>
    
    <!-- Checkbox Group -->
    <div class="flexbox flex-wrap gap-10">
        <label class="option-control" data-type="checkbox">
            <input type="checkbox" name="fruits[]" value="apple">
            <span class="fas fa-check">Apple</span>
        </label>
        
        <label class="option-control" data-type="checkbox">
            <input type="checkbox" name="fruits[]" value="banana">
            <span class="fas fa-check">Banana</span>
        </label>
        
        <label class="option-control" data-type="checkbox">
            <input type="checkbox" name="fruits[]" value="orange">
            <span class="fas fa-check">Orange</span>
        </label>
    </div>
</div>

<div class="mb-20">
    <h4 class="mb-10">Select your gender:</h4>
    
    <!-- Radio Group -->
    <div class="flexbox flex-wrap gap-10">
        <label class="option-control" data-type="radio">
            <input type="radio" name="gender" value="male">
            <span class="fas fa-circle">Male</span>
        </label>
        
        <label class="option-control" data-type="radio">
            <input type="radio" name="gender" value="female">
            <span class="fas fa-circle">Female</span>
        </label>
        
        <label class="option-control" data-type="radio">
            <input type="radio" name="gender" value="other">
            <span class="fas fa-circle">Other</span>
        </label>
    </div>
</div>
```

## CSS Variables

The option controls inherit CSS variables from the form controls system, which you can customize:

```css
.option-control {
  /* Size variables */
  --padding: 15px;
  --height: 42px;
  --text-size: 14px;
  
  /* Color variables */
  --color: transparent;
  --color-active: var(--success-color);
  --background: var(--component-bg-lvl-1);
  --border-size: 2px;
  --border-color: var(--gray-color);
}
```

## Accessibility

The Option Controls component maintains accessibility features:

- Proper label association with form controls
- Keyboard navigation for selection
- Focus states for keyboard users

## Browser Compatibility

The Option Controls component is compatible with all modern browsers that support CSS variables and flexbox.
