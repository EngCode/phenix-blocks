# Viewport Animations

## Overview

Viewport animations in the Phenix Animation System are designed to trigger when elements enter or exit the browser's viewport. These animations create engaging scroll experiences that bring your content to life as users navigate through your website.

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
  exit?: string;            // Exit animation name
}): this
```

### Parameters

- `animation`: Name of the animation to apply (default: none)
- `duration`: Animation duration in milliseconds (default: 700)
- `delay`: Delay before animation starts in milliseconds (default: 0)
- `animateCSS`: Animation library options (default: true)
- `flow`: Scroll direction for directional animations (default: 'both')
- `into`: Increase target position by pixels (default: 0)
- `offset`: Decrease target position by pixels (default: 0)
- `lazyloading`: Whether to animate elements sequentially (default: false)
- `lazygroup`: Group for lazyloading animations (default: false)
- `stagger`: Delay between sequential animations in milliseconds (default: 100)
- `exit`: Exit animation name (default: none)

### HTML Attributes

The method also supports HTML data attributes for inline configuration:

- `data-animation`: Name of the animation to apply
- `data-duration`: Animation duration in milliseconds
- `data-delay`: Delay before animation starts in milliseconds
- `data-flow`: Scroll direction for directional animations
- `data-into`: Increase target position by pixels
- `data-offset`: Decrease target position by pixels
- `data-lazy`: If "true", animate elements sequentially
- `data-lazy-group`: If "true", group for lazyloading animations
- `data-stagger`: Delay between sequential animations in milliseconds
- `data-exit`: Exit animation name

## Examples

### Basic Usage

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

### HTML Implementation

```html
<!-- Basic animation that fades in when scrolled into view -->
<div data-animation="fadeIn" data-duration="700" data-delay="0">
  This content will fade in when scrolled into view
</div>

<!-- Animation with custom duration and delay -->
<div data-animation="fadeInUp" data-duration="1000" data-delay="200">
  This content will fade up with custom timing
</div>

<!-- Animation with exit effect -->
<div data-animation="fadeIn" data-exit="fadeOut">
  This will fade in when entering viewport and fade out when leaving
</div>
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

### Animated Timeline

```html
<div class="timeline">
  <div class="timeline-item" data-animation="fadeInStart" data-delay="0">
    <div class="timeline-date">2020</div>
    <div class="timeline-content">
      <h3>Company Founded</h3>
      <p>Our journey began with a simple idea and a passionate team.</p>
    </div>
  </div>
  
  <div class="timeline-item" data-animation="fadeInStart" data-delay="200">
    <div class="timeline-date">2021</div>
    <div class="timeline-content">
      <h3>First Major Product</h3>
      <p>We launched our flagship product to great acclaim.</p>
    </div>
  </div>
  
  <div class="timeline-item" data-animation="fadeInStart" data-delay="400">
    <div class="timeline-date">2022</div>
    <div class="timeline-content">
      <h3>International Expansion</h3>
      <p>We expanded our operations to three new countries.</p>
    </div>
  </div>
  
  <div class="timeline-item" data-animation="fadeInStart" data-delay="600">
    <div class="timeline-date">2023</div>
    <div class="timeline-content">
      <h3>Award-Winning Innovation</h3>
      <p>Our team received recognition for groundbreaking innovations.</p>
    </div>
  </div>
</div>
```

## Performance Optimization

1. **Load Only Required Animation Sets**: Use the `animateCSS` option to load only the animation sets you need.

```js
// Load only specific animation sets for better performance
Phenix(document).animations({
  animateCSS: ['fading', 'sliding']
});
```

2. **Use Lazy Loading**: Enable the `lazyloading` option to stagger animations and reduce simultaneous animations.

```js
Phenix('.animated-elements').animations({
  lazyloading: true
});
```

3. **Optimize Animation Duration**: Keep animations short (300-800ms) for better perceived performance.

```js
Phenix('.quick-animations').animations({
  duration: 400 // Short, snappy animations
});
```

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

## Debugging Animations

If your animations aren't working as expected, check these common issues:

1. **Element Visibility**: Make sure the element is initially outside the viewport. Elements that are already visible when the page loads won't animate.

2. **Animation Name**: Verify that the animation name is correct and supported by the loaded animation sets.

3. **CSS Conflicts**: Check for CSS properties that might interfere with animations, such as `opacity: 0` or `display: none`.

4. **JavaScript Errors**: Check the browser console for any JavaScript errors that might prevent animations from initializing.

## Browser Compatibility

The Phenix Animation System uses the Intersection Observer API for viewport detection, which is supported in all modern browsers. For older browsers, consider using a polyfill for Intersection Observer.
