# Overlay Utilities

Overlay utilities allow you to add semi-transparent colored overlays to elements, which is useful for creating contrast with text placed over images or backgrounds.

## Overview

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

1. **Maintain contrast**: Ensure sufficient contrast between overlay and text for readability
2. **Optimize overlay opacity**: Adjust opacity to balance visibility of the background and readability of the content
3. **Structure HTML properly**: Place content in a child element of the overlay container
4. **Combine with positioning**: Use positioning utilities for more complex overlay layouts

## Browser Support

These utilities are supported in all modern browsers. Older browsers may have varying support for opacity effects, but graceful fallbacks are in place. 