# Scroll-Driven Animations

## Overview

Scroll-driven animations in the Phenix Animation System are animations that progress based on the user's scroll position. Unlike standard viewport animations that play once when an element enters the viewport, scroll-driven animations continuously update as the user scrolls, creating a more interactive and immersive experience.

## Basic Usage

To create scroll-driven animations, use the `animations` method with the `scrollDriven` option:

```typescript
animations(options?: {
  animation?: string;       // Animation name
  duration?: number;        // Animation duration in milliseconds
  delay?: number;           // Animation delay in milliseconds
  scrollDriven?: boolean;   // Enable scroll-driven animations
  drivenEnd?: number | string; // End point for scroll-driven animations
  flow?: string;            // Scroll direction ('start', 'end', 'both')
}): this
```

### Key Parameters for Scroll-Driven Animations

- `scrollDriven`: Set to `true` to enable scroll-driven animations
- `drivenEnd`: Defines when the animation should complete:
  - `"top"`: Animation completes when element reaches viewport top
  - `"center"`: Animation completes when element reaches viewport center
  - `"bottom"`: Animation completes when element reaches viewport bottom
  - A percentage (e.g., `"50"` for 50% of viewport height)

### HTML Attributes

The method also supports HTML data attributes for inline configuration:

- `data-animation`: Name of the animation to apply
- `data-scrollDriven`: If "true", enables scroll-driven animations
- `data-drivenEnd`: End point for scroll-driven animations

## Examples

### Basic Usage

```js
// Initialize scroll-driven animations
Phenix('.parallax-element').animations({
  animation: 'fadeIn',
  scrollDriven: true,
  drivenEnd: 'center'
});
```

### HTML Implementation

```html
<!-- Basic scroll-driven animation -->
<div data-animation="fadeIn" 
     data-scrollDriven="true" 
     data-drivenEnd="center">
  This animation progresses as the user scrolls
</div>

<!-- Scroll-driven animation with custom end point -->
<div data-animation="fadeInUp" 
     data-scrollDriven="true" 
     data-drivenEnd="top">
  This animation completes when the element reaches the top of the viewport
</div>
```

## How Scroll-Driven Animations Work

Scroll-driven animations calculate the element's position relative to the viewport and adjust the animation's progress accordingly:

1. When the element first enters the viewport, the animation is at 0% progress
2. As the user scrolls, the animation progresses based on the element's position
3. When the element reaches the defined end point (`drivenEnd`), the animation is at 100% progress

This creates a smooth, continuous animation that feels connected to the user's scrolling action.

## Practical Examples

### Parallax Hero Section

```html
<section class="hero-section">
  <div class="background-layer" 
       data-animation="fadeIn" 
       data-scrollDriven="true" 
       data-drivenEnd="bottom">
  </div>
  
  <div class="content-container">
    <h1 data-animation="fadeInUp" data-delay="300">Welcome to Our Site</h1>
    <p data-animation="fadeInUp" data-delay="600">Discover our amazing products and services</p>
    <a href="#learn-more" class="btn" data-animation="fadeInUp" data-delay="900">
      Learn More
    </a>
  </div>
</section>
```

```js
// Initialize all animations
Phenix('[data-animation]').animations();
```

### Scroll-Driven Progress Bar

```html
<div class="progress-container">
  <div class="progress-bar" 
       data-animation="slideInEnd" 
       data-scrollDriven="true" 
       data-drivenEnd="bottom">
  </div>
  
  <div class="content-section">
    <h2>Our Services</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <!-- More content here -->
  </div>
</div>
```

```js
// Initialize the progress bar
Phenix('.progress-bar').animations({
  scrollDriven: true,
  drivenEnd: 'bottom'
});
```

### Scroll-Driven Image Reveal

```html
<div class="image-reveal-container">
  <div class="image-wrapper">
    <img src="image.jpg" alt="Description" 
         data-animation="fadeIn" 
         data-scrollDriven="true" 
         data-drivenEnd="center">
  </div>
  <div class="overlay" 
       data-animation="slideOutEnd" 
       data-scrollDriven="true" 
       data-drivenEnd="center">
  </div>
</div>
```

```js
// Initialize the image reveal animations
Phenix('.image-reveal-container [data-animation]').animations();
```

### Scroll-Driven Text Transformation

```html
<div class="text-transform-section">
  <h2 class="transform-text" 
      data-animation="fadeIn" 
      data-scrollDriven="true" 
      data-drivenEnd="center">
    Transform as you scroll
  </h2>
</div>
```

```js
// Initialize the text transformation
Phenix('.transform-text').animations({
  scrollDriven: true,
  drivenEnd: 'center'
});

// Add custom scroll event to modify additional properties
document.addEventListener('scroll', function() {
  const element = document.querySelector('.transform-text');
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  
  // Calculate progress (0 to 1)
  const progress = Math.max(0, Math.min(1, 
    1 - (rect.top / (windowHeight - rect.height))));
  
  // Apply additional transformations based on scroll progress
  element.style.transform = `scale(${1 + (progress * 0.2)})`;
  element.style.letterSpacing = `${progress * 5}px`;
});
```

## Combining with Standard Animations

You can combine scroll-driven animations with standard viewport animations for complex effects:

```html
<section class="combined-section">
  <!-- Standard viewport animation -->
  <h2 data-animation="fadeInDown">Our Products</h2>
  
  <!-- Scroll-driven background effect -->
  <div class="background-effect" 
       data-animation="fadeIn" 
       data-scrollDriven="true" 
       data-drivenEnd="bottom">
  </div>
  
  <!-- Product items with standard animations -->
  <div class="products-container" data-lazy-group="true" data-stagger="150">
    <div class="product-card" data-animation="fadeInUp">Product 1</div>
    <div class="product-card" data-animation="fadeInUp">Product 2</div>
    <div class="product-card" data-animation="fadeInUp">Product 3</div>
  </div>
</section>
```

## Performance Optimization

1. **Limit the Number of Scroll-Driven Animations**: These animations can be more resource-intensive than standard animations, so use them sparingly.

2. **Use `requestAnimationFrame`**: For custom scroll effects, always use `requestAnimationFrame` to ensure smooth performance:

```js
let ticking = false;

document.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      // Your scroll-driven animation code here
      ticking = false;
    });
    ticking = true;
  }
});
```

3. **Optimize Animation Properties**: Stick to properties that are cheap to animate:
   - `opacity` and `transform` are most efficient
   - Avoid animating `width`, `height`, or `top`/`left` properties

4. **Consider Mobile Performance**: Mobile devices may struggle with complex scroll-driven animations. Test thoroughly and consider providing simplified versions for mobile users.

## Debugging Scroll-Driven Animations

If your scroll-driven animations aren't working as expected, check these common issues:

1. **Element Visibility**: Ensure the element is tall enough or the viewport is small enough for the scroll-driven effect to be noticeable.

2. **Drivent End Point**: Make sure the `drivenEnd` value is appropriate for your layout and the size of your element.

3. **Scroll Container**: By default, animations track scrolling relative to the viewport. If you're using a custom scroll container, you'll need additional JavaScript to track that container's scroll position.

## Browser Compatibility

Scroll-driven animations use the Intersection Observer API and standard scroll events, which are supported in all modern browsers. For older browsers, consider using a polyfill for Intersection Observer.
