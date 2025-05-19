# Animation System

## Overview

The Phenix Animation System provides a powerful set of JavaScript/TypeScript utilities for creating dynamic, viewport-triggered animations in your web applications. These animations enhance user experience by adding visual interest and guiding attention as users scroll through your content.

This documentation focuses on the core animation system. For related functionality, see:

- [Animated Counter](/frontend/js/animations/counter) - For numerical counting animations
- [Time Counter](/frontend/js/animations/timer) - For countdown and timer functionality
- [DOM UI Effects](/frontend/js/ui-effects) - For slide and fade animations
- [Scroll Effects](/frontend/js/scroll-effects) - For scroll-based interactions

## Key Features

- **Viewport-triggered animations**: Elements animate when they enter the viewport
- **Direction-aware animations**: Automatically adjust animations based on page direction (LTR/RTL)
- **Scroll-driven animations**: Animations that progress based on scroll position
- **Staggered animations**: Sequence animations with controlled timing
- **Exit animations**: Define different animations when elements leave the viewport
- **Lazy loading**: Optimize performance by only animating visible elements

## Basic Usage

The `animations` method applies animations to elements when they enter the viewport:

```typescript
animations(options?: {
  animation?: string;       // Animation name
  duration?: number;        // Animation duration in milliseconds
  delay?: number;           // Animation delay in milliseconds
  animateCSS?: boolean | string[] | string; // Animation library options
  flow?: string;            // Scroll direction ('start', 'end', 'both')
  into?: number;            // Increase target position by pixels
  offset?: number;          // Decrease target position by pixels
  lazyloading?: boolean;    // Animate elements sequentially
  lazygroup?: any;          // Group for lazyloading animations
  stagger?: number;         // Delay between sequential animations
  scrollDriven?: boolean;   // Enable scroll-driven animations
  drivenEnd?: number | string; // End point for scroll-driven animations
  exit?: string;            // Exit animation name
}): this
```

### HTML Implementation

The most common way to use animations is through HTML data attributes:

```html
<!-- Basic animation that fades in when scrolled into view -->
<div data-animation="fadeIn" data-duration="700" data-delay="0">
  This content will fade in when scrolled into view
</div>

<!-- Animation with direction awareness -->
<div data-animation="fadeInStart" data-duration="1000">
  This will fade in from the start direction (left in LTR, right in RTL)
</div>

<!-- Animation with exit effect -->
<div data-animation="fadeIn" data-exit="fadeOut">
  This will fade in when entering viewport and fade out when leaving
</div>
```

### JavaScript Implementation

```js
// Initialize animations on all elements with data-animation attribute
Phenix('[data-animation]').animations();

// Initialize with custom options
Phenix('.animate-section').animations({
  animation: 'fadeInUp',
  duration: 800,
  delay: 200,
  offset: 50
});
```

## Animation Libraries

The Phenix Animation System uses [Animate.css](https://animate.style/) for its preset animations. You can control which animation sets are loaded:

```js
// Load only specific animation sets for better performance
Phenix(document).animations({
  animateCSS: ['fading', 'sliding', 'utilities']
});

// Load all animations
Phenix(document).animations({
  animateCSS: 'all'
});
```

### Available Animation Sets

| Set | Description |
|-----|-------------|
| `fading` | Fade in/out animations |
| `sliding` | Slide in/out animations |
| `flippers` | Flip animations |
| `attentions` | Attention-seeking animations |
| `lightspeed` | Lightspeed animations |
| `rotating` | Rotation animations |
| `zooming` | Zoom in/out animations |
| `back` | Back in/out animations |
| `bouncing` | Bounce animations |
| `specials` | Special effect animations |
| `utilities` | Animation utility classes |
| `all` | All animation sets |

## Direction-Aware Animations

Phenix can automatically adjust animations based on the document's text direction (LTR or RTL):

| Directional Animation | LTR Result | RTL Result |
|-----------------------|------------|------------|
| `fadeInStart` | `fadeInLeft` | `fadeInRight` |
| `fadeOutStart` | `fadeOutLeft` | `fadeOutRight` |
| `fadeInEnd` | `fadeInRight` | `fadeInLeft` |
| `fadeOutEnd` | `fadeOutRight` | `fadeOutLeft` |

This makes it easy to create direction-agnostic animations that work correctly in both LTR and RTL layouts.

## Advanced Features

### Scroll-Driven Animations

Scroll-driven animations progress based on the user's scroll position, creating a more interactive experience:

```html
<div data-animation="fadeIn" 
     data-scrollDriven="true" 
     data-drivenEnd="center">
  This animation progresses as the user scrolls
</div>
```

```js
Phenix('.parallax-section').animations({
  animation: 'fadeIn',
  scrollDriven: true,
  drivenEnd: 'center' // Animation completes when element reaches viewport center
});
```

The `drivenEnd` parameter can be:
- `"top"`: Animation completes when element reaches viewport top
- `"center"`: Animation completes when element reaches viewport center
- `"bottom"`: Animation completes when element reaches viewport bottom
- A percentage (e.g., `"50"` for 50% of viewport height)

### Staggered Animations

Create sequential animations with controlled timing between elements:

```html
<div class="staggered-container" data-lazy-group="true" data-stagger="100">
  <div data-animation="fadeInUp">Item 1</div>
  <div data-animation="fadeInUp">Item 2</div>
  <div data-animation="fadeInUp">Item 3</div>
</div>
```

```js
Phenix('.staggered-container').animations({
  lazygroup: true,
  stagger: 100 // 100ms delay between each animation
});
```

### Exit Animations

Define different animations when elements leave the viewport:

```html
<div data-animation="fadeIn" data-exit="fadeOut">
  Content with entrance and exit animations
</div>
```

```js
Phenix('.animated-section').animations({
  animation: 'fadeIn',
  exit: 'fadeOut'
});
```

## Practical Examples

### Animated Features Section

```html
<section class="features-section">
  <h2 class="section-title" data-animation="fadeInDown" data-duration="800">
    Our Features
  </h2>
  
  <div class="features-container" data-lazy-group="true" data-stagger="150">
    <div class="feature-card" data-animation="fadeInUp">
      <div class="icon">🚀</div>
      <h3>Fast Performance</h3>
      <p>Lightning-quick load times and smooth interactions.</p>
    </div>
    
    <div class="feature-card" data-animation="fadeInUp">
      <div class="icon">🛠️</div>
      <h3>Easy to Use</h3>
      <p>Simple API and intuitive controls for developers.</p>
    </div>
    
    <div class="feature-card" data-animation="fadeInUp">
      <div class="icon">📱</div>
      <h3>Responsive Design</h3>
      <p>Looks great on any device, any screen size.</p>
    </div>
  </div>
</section>
```

```js
// Initialize all animations
Phenix('[data-animation]').animations();
```

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

## Performance Optimization

1. **Load Only Required Animation Sets**: Use the `animateCSS` option to load only the animation sets you need.

2. **Use Lazy Loading**: Enable the `lazyloading` option to stagger animations and reduce simultaneous animations.

3. **Optimize Animation Duration**: Keep animations short (300-800ms) for better perceived performance.

4. **Respect User Preferences**: Check for reduced motion preferences:

```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Use simpler animations or disable them
  Phenix('[data-animation]').animations({
    animation: 'fadeIn',
    duration: 300
  });
} else {
  // Use full animations
  Phenix('[data-animation]').animations();
}
```

## Browser Compatibility

The Phenix Animation System is built using modern JavaScript techniques including Intersection Observer and is compatible with all modern browsers. For older browsers, consider using a polyfill for Intersection Observer.
