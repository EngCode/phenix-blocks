# Direction & Overlay Utilities

The Phenix Design System provides utilities for controlling text direction and creating overlay effects. These utilities enhance your layouts with proper language direction support and semi-transparent overlays for various design patterns.

## Overview

This documentation covers:

1. **Direction Utilities** - Control text direction (LTR/RTL)
2. **Overlay Utilities** - Create semi-transparent overlays on elements

## Direction Utilities

Direction utilities allow you to control the text direction of elements, which is essential for multi-language websites that support both left-to-right (LTR) and right-to-left (RTL) languages.

```html
<!-- Force left-to-right text direction -->
<div class="ltr">
  This text will display left-to-right regardless of page context
</div>

<!-- Force right-to-left text direction -->
<div class="rtl">
  This text will display right-to-left regardless of page context
</div>
```

These utilities are particularly useful when:
- You need to mix LTR and RTL content on the same page
- You want to override the direction for specific elements
- You're working with user-generated content in multiple languages

## Overlay Utilities

Overlay utilities allow you to add semi-transparent colored overlays to elements, which is useful for creating contrast with text placed over images or backgrounds.

```html
<!-- Dark overlay (default opacity: 0.75) -->
<div class="overlay-dark">
  <div>Content appears above the dark overlay</div>
</div>

<!-- Light overlay (default opacity: 0.75) -->
<div class="overlay-light">
  <div>Content appears above the light overlay</div>
</div>

<!-- Custom overlay with variable properties -->
<div class="overlay-custom" style="--overlay-bg: #3498db; --opacity: 0.6;">
  <div>Content appears above a custom blue overlay</div>
</div>
```

### How Overlays Work

The overlay classes apply a pseudo-element (`::before`) behind the content with the specified background color and opacity. The content within the overlay container needs to be wrapped in a child element to appear above the overlay.

Each overlay type sets these CSS variables:
- `--overlay-bg`: The background color (#000 for dark, #FFF for light, customizable for custom)
- `--opacity`: The opacity level (default: 0.75, customizable)

The child elements automatically receive `position: relative` and `z-index: 3` to ensure they appear above the overlay.

## Use Cases

### Multilingual Content 

```html
<!-- Mixing text directions in a list -->
<ul>
  <li class="ltr">English text (left-to-right)</li>
  <li class="rtl">العربية (Arabic text, right-to-left)</li>
  <li class="rtl">עברית (Hebrew text, right-to-left)</li>
  <li class="ltr">Español (Spanish text, left-to-right)</li>
</ul>
```

### Hero Section with Image Overlay

```html
<div class="overlay-dark position-rv" style="--opacity: 0.7;">
  <img src="hero-image.jpg" alt="Hero background" class="position-ab position-full">
  <div class="container py-60 text-center">
    <h1 class="color-white display-h1 mb-20">Welcome to Our Site</h1>
    <p class="color-white mb-30 fs-20">Discover our amazing products and services</p>
    <a href="#learn-more" class="btn primary">Learn More</a>
  </div>
</div>
```

### Card with Custom Overlay on Hover

```html
<div class="card overflow-hidden">
  <div class="position-rv">
    <img src="card-image.jpg" alt="Card image">
    <div class="overlay-custom position-ab position-full opacity-0 transition-smooth pds-hvr-opacity-100" 
         style="--overlay-bg: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1)); --opacity: 1;">
      <div class="position-ab pos-bottom-20 pos-start-20">
        <h3 class="color-white">Card Title</h3>
        <p class="color-white">Hidden description that appears on hover</p>
      </div>
    </div>
  </div>
  <div class="card-body p-20">
    <h3>Card Title</h3>
  </div>
</div>
```

### Video Background with Overlay

```html
<div class="overlay-dark position-rv" style="--opacity: 0.85;">
  <video autoplay muted loop class="position-ab position-full object-fit">
    <source src="background-video.mp4" type="video/mp4">
  </video>
  <div class="container py-100 text-center">
    <h1 class="color-white display-h1">Video Background</h1>
    <p class="color-white fs-20 mb-30">Content appears clearly above the video</p>
    <button class="btn primary">Get Started</button>
  </div>
</div>
```

## Best Practices

### Direction Utilities

1. **Use HTML lang attribute**: Always set the `lang` attribute on the HTML element for the primary language of your page
2. **Use dir attribute**: Set the `dir` attribute on the HTML element to establish the main direction (`ltr` or `rtl`)
3. **Apply utilities selectively**: Only use `.ltr` and `.rtl` classes when you need to override the default direction
4. **Consider text alignment**: When changing direction, also consider adjusting text alignment accordingly

### Overlay Utilities

1. **Maintain contrast**: Ensure sufficient contrast between overlay and text for readability
2. **Optimize overlay opacity**: Adjust opacity to balance visibility of the background and readability of the content
3. **Structure HTML properly**: Place content in a child element of the overlay container
4. **Combine with positioning**: Use positioning utilities for more complex overlay layouts

## Browser Support

These utilities are supported in all modern browsers. Older browsers may have varying support for RTL text direction and opacity effects, but graceful fallbacks are in place. 