# Dropdown

## Overview

The Dropdown component in the Phenix Design System provides a flexible way to create dropdown menus, select controls, and other expandable content. Dropdowns can be triggered by click or hover events and support various positioning and animation effects.

## Basic Usage

Create a basic dropdown using the `.px-dropdown` class and initialize it with the JavaScript dropdown method:

```html
<!-- Basic Dropdown -->
<div class="px-dropdown">
  <!-- Toggle Button -->
  <button class="px-toggle btn primary">Dropdown <i class="fas fa-angle-down ms-5"></i></button>
  <!-- Dropdown Content -->
  <ul class="px-dropdown-list reset-list bg-white fs-14 w-min-200">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</div>

<!-- Initialize with JavaScript -->
<script>
  Phenix('.px-dropdown').dropdown();
</script>
```

## Dropdown Types

### Click Dropdown (Default)

By default, dropdowns are triggered by clicking the toggle element:

```html
<div class="px-dropdown">
  <button class="px-toggle btn primary">Click Dropdown</button>
  <ul class="px-dropdown-list reset-list bg-white">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</div>
```

### Hover Dropdown

Enable hover behavior by adding the `data-hover` attribute:

```html
<div class="px-dropdown" data-hover>
  <button class="px-toggle btn primary">Hover Dropdown</button>
  <ul class="px-dropdown-list reset-list bg-white">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</div>
```

## Positioning

Control the dropdown position using the `data-position` attribute with a format of "Y, X" where Y is either "top" or "bottom" and X is "start", "center", or "end":

```html
<!-- Bottom End Dropdown -->
<div class="px-dropdown" data-position="bottom, end">
  <button class="px-toggle btn primary">Bottom End</button>
  <ul class="px-dropdown-list reset-list bg-white">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>

<!-- Top Start Dropdown -->
<div class="px-dropdown" data-position="top, start">
  <button class="px-toggle btn primary">Top Start</button>
  <ul class="px-dropdown-list reset-list bg-white">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>
```

The dropdown component includes dynamic positioning that automatically adjusts when the page is scrolled to ensure the dropdown remains properly positioned.

<!-- Top Center Dropdown -->
<div class="px-dropdown" data-position="top, center">
  <button class="px-toggle btn primary">Top Center</button>
  <ul class="px-dropdown-list reset-list bg-white">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>
```

## Animation Effects

Add animation effects to your dropdowns using the `data-effect` attribute:

```html
<!-- Fade Effect -->
<div class="px-dropdown" data-effect="fade">
  <button class="px-toggle btn primary">Fade Effect</button>
  <ul class="px-dropdown-list reset-list bg-white">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>

<!-- Slide Effect -->
<div class="px-dropdown" data-effect="slide">
  <button class="px-toggle btn primary">Slide Effect</button>
  <ul class="px-dropdown-list reset-list bg-white">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>
```

You can also customize the animation duration and delay:

```html
<!-- Custom Animation Settings -->
<div class="px-dropdown" data-effect="fade" data-duration="500" data-delay="100">
  <button class="px-toggle btn primary">Custom Animation</button>
  <ul class="px-dropdown-list reset-list bg-white">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
  </ul>
</div>
```

## Customization

### Custom Toggle and Target

You can customize the toggle and target elements using data attributes:

```html
<div class="px-dropdown" data-toggle=".custom-toggle" data-target=".custom-menu">
  <button class="custom-toggle btn primary">Custom Toggle</button>
  <div class="custom-menu bg-white pd-20 border-1 border-solid border-alpha-10">
    <p>This is a custom dropdown content.</p>
  </div>
</div>
```

### Styling Dropdown Lists

The default `.px-dropdown-list` class provides basic styling, but you can enhance it with utility classes:

```html
<div class="px-dropdown">
  <button class="px-toggle btn primary">Styled Dropdown</button>
  <ul class="px-dropdown-list reset-list bg-white radius-sm bx-shadow-dp-1 border-1 border-solid border-alpha-10">
    <li class="pd-10"><a href="#">Item with padding</a></li>
    <li class="pd-10"><a href="#">Another item</a></li>
    <li class="pd-10 border-top-1 border-solid border-alpha-10">
      <a href="#" class="color-primary">Special item</a>
    </li>
  </ul>
</div>
```

## Advanced Usage

### Dropdown with Icons

```html
<div class="px-dropdown">
  <button class="px-toggle btn primary">Dropdown with Icons</button>
  <ul class="px-dropdown-list reset-list bg-white">
    <li class="pd-10"><a href="#"><i class="fas fa-home me-10"></i> Home</a></li>
    <li class="pd-10"><a href="#"><i class="fas fa-user me-10"></i> Profile</a></li>
    <li class="pd-10"><a href="#"><i class="fas fa-cog me-10"></i> Settings</a></li>
    <li class="pdy-10 pdx-10 border-top-1 border-solid border-alpha-10">
      <a href="#" class="color-danger"><i class="fas fa-sign-out-alt me-10"></i> Logout</a>
    </li>
  </ul>
</div>
```

### Dropdown with Form Elements

```html
<div class="px-dropdown" data-position="bottom, end">
  <button class="px-toggle btn primary">Settings</button>
  <div class="px-dropdown-list bg-white pd-15 radius-sm bx-shadow-dp-1 border-1 border-solid border-alpha-10 w-250">
    <h4 class="fs-14 weight-medium mb-10">Display Settings</h4>
    <div class="form-control mb-10">
      <label class="option-control">
        <input type="checkbox" checked>
        <span class="control-indicator"></span>
        <span>Show notifications</span>
      </label>
    </div>
    <div class="form-control mb-10">
      <label class="option-control">
        <input type="checkbox">
        <span class="control-indicator"></span>
        <span>Dark mode</span>
      </label>
    </div>
    <button class="btn small primary fluid mt-10">Apply Settings</button>
  </div>
</div>
```

## JavaScript API

The Dropdown component can be initialized and customized through JavaScript:

```javascript
Phenix('.px-dropdown').dropdown({
  toggle: '.px-toggle',       // Toggle button selector
  target: '.px-dropdown-list', // Target element selector
  active: 'px-active',        // Active class name
  hover: false,               // Support hover behavior (alternative to data-hover)
  exclude: '.px-toggle',      // Exclude from blank click closing (CSS :not() selector)
  position: 'bottom, start',  // Dropdown position
  effect: {
    type: 'fade',            // Effect type: 'fade', 'slide'
    duration: 300,           // Animation duration in milliseconds
    delay: 0,                // Animation delay in milliseconds
    display: 'block'         // CSS display property
  }
});
```

## Options Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `toggle` | String | '.px-toggle' | Selector for the toggle element |
| `target` | String | '.px-dropdown-list' | Selector for the dropdown content |
| `active` | String | 'px-active' | Class name to apply when dropdown is active |
| `hover` | Boolean | false | Enable hover behavior (alternative to data-hover) |
| `exclude` | String | '.px-toggle' | Elements to exclude from blank click closing (CSS :not() selector) |
| `position` | String | 'bottom, start' | Position of dropdown (Y, X) |
| `effect.type` | String | 'fade' | Animation effect ('fade', 'slide', or null) |
| `effect.duration` | Number | 300 | Animation duration in milliseconds |
| `effect.delay` | Number | 0 | Animation delay in milliseconds |
| `effect.display` | String | 'block' | CSS display property when shown |

## Data Attributes

All options can also be set using data attributes:

| Attribute | Description |
|-----------|-------------|
| `data-toggle` | Selector for the toggle element |
| `data-target` | Selector for the dropdown content |
| `data-active` | Class name to apply when dropdown is active |
| `data-exclude` | Elements to exclude from blank click closing (CSS :not() selector) |
| `data-position` | Position of dropdown (Y, X) |
| `data-effect` | Animation effect ('fade', 'slide') |
| `data-duration` | Animation duration in milliseconds |
| `data-delay` | Animation delay in milliseconds |
| `data-display` | CSS display property when shown |
| `data-hover` | Enable hover behavior (no value needed) |

## Accessibility

The Phenix dropdown component automatically adds basic accessibility attributes to the toggle button. It sets `role="button"` and `tabIndex="0"` on the toggle element.

For better accessibility, consider adding additional ARIA attributes:

```html
<div class="px-dropdown">
  <button class="px-toggle btn primary" aria-haspopup="true" aria-expanded="false" id="dropdown-menu">
    Accessible Dropdown
  </button>
  <ul class="px-dropdown-list reset-list bg-white" aria-labelledby="dropdown-menu" role="menu">
    <li role="menuitem"><a href="#">Item 1</a></li>
    <li role="menuitem"><a href="#">Item 2</a></li>
    <li role="menuitem"><a href="#">Item 3</a></li>
  </ul>
</div>

<script>
  // Update aria-expanded attribute when dropdown state changes
  document.querySelector('.px-toggle').addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
  });
</script>
```

## Best Practices

1. **Use meaningful labels** for dropdown toggles to clearly indicate what will be shown
2. **Keep dropdown menus concise** to avoid overwhelming users
3. **Group related items** within dropdown menus
4. **Consider mobile users** when designing dropdown interactions
5. **Use appropriate positioning** to ensure dropdowns are fully visible
6. **Add visual feedback** such as hover states for dropdown items
