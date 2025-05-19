# Third-Party Libraries

## Overview

The Phenix Third-Party Libraries utility provides seamless integration with popular JavaScript libraries for enhanced functionality. These integrations are loaded on-demand, improving performance by only loading libraries when they're needed.

## Initialization

The Third-Party Libraries integration is automatically initialized when you call the main utilities function:

```js
// Initialize all utilities including third-party libraries
Phenix(document).utilities();

// Or initialize only library utilities
Phenix(document).utilities({
  type: 'libraries'
});
```

## Supported Libraries

### Masonry Grid

The Masonry library creates a dynamic grid layout that arranges elements optimally based on available vertical space.

#### Basic Usage

```html
<div class="px-masonry">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <!-- More items -->
</div>
```

When the page loads, the utility:
1. Detects elements with the `.px-masonry` class
2. Automatically imports the Masonry library if needed
3. Initializes Masonry on each grid with the first child's class as the item selector

### Typed Text Effect

The Typed Text Effect creates a typewriter animation that cycles through multiple text strings.

#### Basic Usage

```html
<ul class="typed-list">
  <li>First text to display</li>
  <li>Second text to display</li>
  <li>Third text to display</li>
</ul>
```

When the page loads, the utility:
1. Detects elements with the `.typed-list` class
2. Creates a new element with the `.typed-text` class
3. Transfers the list items' text to data attributes
4. Imports the typewriter library
5. Initializes the typing effect

#### Styling

The utility preserves the classes from the original list (except those containing "list"):

```html
<ul class="typed-list tx-primary large-text">
  <li>First text</li>
  <li>Second text</li>
</ul>

<!-- Becomes -->
<p class="typed-text tx-primary large-text">First text</p>
<!-- Original list is preserved in the DOM but not displayed -->
```

### Marquee Slider

The Marquee Slider creates a smooth scrolling animation for content, similar to the classic HTML marquee but with modern features and better performance.

#### Basic Usage

```html
<div class="px-marquee">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <!-- More items -->
</div>

<!-- For reverse direction -->
<div class="px-marquee-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

#### Configuration

You can configure the marquee using data attributes:

```html
<div class="px-marquee" data-speed="20" data-hover="false">
  <!-- Content -->
</div>
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `data-speed` | Scrolling speed | 15 |
| `data-hover` | Whether to pause on hover | true |

## Implementation Details

### Library Loading

The utility uses the Phenix import system to load libraries only when needed:

```js
// Example of how libraries are loaded internally
Phenix(document).import("masonry", "script", "masonry.min.js", callback, { integrated: true });
```

### WordPress Integration

The utility checks if the current environment is a WordPress admin or editor before initializing certain libraries to avoid conflicts:

```js
// This check happens internally
if (!document.body.classList.contains('wp-admin') && !document_classes?.includes('-editor')) {
    // Initialize libraries
}
```

## Examples

### Masonry Image Gallery

```html
<div class="px-masonry gallery">
  <div class="gallery-item"><img src="image1.jpg" alt="Image 1"></div>
  <div class="gallery-item"><img src="image2.jpg" alt="Image 2"></div>
  <div class="gallery-item"><img src="image3.jpg" alt="Image 3"></div>
  <!-- More items -->
</div>
```

### Animated Tagline with Typed Effect

```html
<div class="hero-section">
  <h1>We are </h1>
  <ul class="typed-list tx-primary">
    <li>Creative</li>
    <li>Innovative</li>
    <li>Professional</li>
    <li>Dedicated</li>
  </ul>
</div>
```

### Scrolling News Ticker

```html
<div class="news-ticker">
  <h4>Latest News:</h4>
  <div class="px-marquee" data-speed="10">
    <div class="news-item">Breaking News Item 1</div>
    <div class="news-item">Breaking News Item 2</div>
    <div class="news-item">Breaking News Item 3</div>
    <div class="news-item">Breaking News Item 4</div>
  </div>
</div>
```

## Best Practices

- Use third-party libraries sparingly to maintain good performance
- Consider the mobile experience when implementing masonry grids
- Keep typed text items concise and similar in length for best results
- Test marquee speed on different devices to ensure readability
- Add appropriate fallback content for users with JavaScript disabled

## Browser Compatibility

These third-party library integrations are compatible with all modern browsers. The specific compatibility may vary based on the individual libraries being used.
