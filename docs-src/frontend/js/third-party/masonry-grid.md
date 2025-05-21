# Masonry Grid

## Overview

The Masonry Grid utility creates a dynamic grid layout that arranges elements optimally based on available vertical space, similar to how a mason would arrange stones in a wall. This creates visually appealing layouts that efficiently use the available space.

## Initialization

The Masonry Grid is automatically initialized when you call the main utilities function and the page contains elements with the `.px-masonry` class:

```js
// Initialize all utilities including Masonry Grid
Phenix(document).utilities();

// Masonry is part of the libraries type
Phenix(document).utilities({
  type: 'libraries'
});
```

## Basic Usage

Add the `.px-masonry` class to a container element and include child elements that will be arranged in the masonry layout:

```html
<div class="px-masonry">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <!-- More items -->
</div>
```

## How It Works

1. The utility detects elements with the `.px-masonry` class
2. It automatically imports the Masonry library if needed
3. It initializes Masonry on each grid with the first child's class as the item selector
4. The Masonry layout algorithm positions items based on available vertical space

## Examples

### Image Gallery

```html
<div class="px-masonry gallery">
  <div class="gallery-item">
    <img src="image1.jpg" alt="Image 1">
  </div>
  <div class="gallery-item">
    <img src="image2.jpg" alt="Image 2">
  </div>
  <div class="gallery-item">
    <img src="image3.jpg" alt="Image 3">
    <div class="caption">Beautiful landscape</div>
  </div>
  <!-- More items -->
</div>
```

### Blog Posts Grid

```html
<div class="px-masonry blog-grid">
  <article class="post-item">
    <h3>First Post Title</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </article>
  <article class="post-item">
    <h3>Second Post with a Longer Title That Wraps to Multiple Lines</h3>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </article>
  <article class="post-item">
    <h3>Third Post Title</h3>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <img src="featured-image.jpg" alt="Featured image">
  </article>
  <!-- More posts -->
</div>
```

### Product Grid

```html
<div class="px-masonry products-grid">
  <div class="product-card">
    <img src="product1.jpg" alt="Product 1">
    <h4>Product Name</h4>
    <p class="price">$19.99</p>
  </div>
  <div class="product-card">
    <img src="product2.jpg" alt="Product 2">
    <h4>Another Product with a Longer Name</h4>
    <p class="price">$24.99</p>
    <span class="badge">Sale</span>
  </div>
  <!-- More products -->
</div>
```

## Styling Tips

### Basic Grid Styling

```css
.px-masonry {
  margin: 0 -10px; /* Compensate for item padding */
}

.px-masonry .grid-item {
  width: calc(33.333% - 20px); /* For a 3-column layout */
  margin: 0 10px 20px; /* Horizontal and vertical spacing */
  box-sizing: border-box;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .px-masonry .grid-item {
    width: calc(50% - 20px); /* 2-column layout on tablets */
  }
}

@media (max-width: 480px) {
  .px-masonry .grid-item {
    width: calc(100% - 20px); /* Single column on mobile */
  }
}
```

### Adding Animation

```css
.px-masonry .grid-item {
  transition: opacity 0.3s ease;
  opacity: 0;
}

.px-masonry .grid-item.masonry-brick--loaded {
  opacity: 1;
}
```

## Best Practices

- Ensure all images have width and height attributes to prevent layout shifts
- Use consistent width for grid items while allowing height to vary
- Consider adding a minimum height to very short items to maintain visual rhythm
- Test the layout across different screen sizes
- Use appropriate margins between items for visual separation
- Consider adding fade-in animations as items are positioned
- For image-heavy grids, consider lazy loading images

## Browser Compatibility

The Masonry Grid utility is compatible with all modern browsers and uses the Masonry library for cross-browser consistency.
