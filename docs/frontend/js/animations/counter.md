# Animated Counter

## Overview

The Animated Counter is a powerful feature of the Phenix Animation System that creates smooth, animated counting effects for numerical values. This is perfect for statistics, dashboards, progress indicators, and other numerical displays that benefit from visual emphasis.

## Basic Usage

The `counter` method animates the counting of numbers, either up or down:

```typescript
counter(options?: {
  value?: number;     // Number to count to
  duration?: number;  // Animation duration in milliseconds
  delay?: number;     // Animation delay in milliseconds
  decimal?: number;   // Number of decimal places
  symbol?: string;    // Symbol to append to the number
  steps?: number;     // Count increment per step
  reverse?: boolean;  // Count down instead of up
  lazyloading?: boolean; // Only start counting when element is in view
}): this
```

### Parameters

- `value`: Target number to count to (default: parsed from element's content or data-value attribute)
- `duration`: Animation duration in milliseconds (default: 2000)
- `delay`: Delay before animation starts in milliseconds (default: 0)
- `decimal`: Number of decimal places to show (default: 0)
- `symbol`: Symbol or text to append after the number (default: none)
- `steps`: Count increment per animation step (default: 10)
- `reverse`: If true, counts down from value to 0 instead of up (default: false)
- `lazyloading`: If true, only starts counting when the element scrolls into view (default: false)

### HTML Attributes

The method also supports HTML data attributes for inline configuration:

- `data-value`: Target number to count to
- `data-duration`: Animation duration in milliseconds
- `data-delay`: Delay before animation starts in milliseconds
- `data-decimal`: Number of decimal places to show
- `data-symbol`: Symbol or text to append after the number
- `data-steps`: Count increment per animation step
- `data-reverse`: If "true", counts down instead of up
- `data-lazy`: If "true", only starts counting when in view

## Examples

### Basic Usage

```js
// Count up to the number in the element
Phenix('.stat-number').counter();

// Count down from the number in the element
Phenix('.countdown').counter({ reverse: true });
```

### With Options

```js
// Count up to 1000 over 3 seconds with $ symbol
Phenix('.price-counter').counter({
  value: 1000,
  duration: 3000,
  symbol: '$',
  decimal: 2
});
```

### HTML Implementation

```html
<!-- Basic counter that counts up to 5000 -->
<div class="counter" data-value="5000">0</div>

<!-- Counter with options -->
<div class="counter" 
     data-value="75.5" 
     data-duration="1500" 
     data-decimal="1" 
     data-symbol="%">0</div>

<!-- Countdown counter -->
<div class="countdown" data-value="60" data-reverse="true">60</div>

<!-- Lazy-loaded counter that only activates when scrolled into view -->
<div class="counter" data-value="1000" data-lazy="true">0</div>
```

## Practical Examples

### Statistics Section

```html
<div class="stats-section row">
  <div class="col-md-3">
    <div class="stat-card tx-align-center">
      <div class="stat-number h1" data-value="15000">0</div>
      <div class="stat-label">Happy Customers</div>
    </div>
  </div>
  
  <div class="col-md-3">
    <div class="stat-card tx-align-center">
      <div class="stat-number h1" data-value="250" data-symbol="+">0</div>
      <div class="stat-label">Projects Completed</div>
    </div>
  </div>
  
  <div class="col-md-3">
    <div class="stat-card tx-align-center">
      <div class="stat-number h1" data-value="98.5" data-decimal="1" data-symbol="%">0</div>
      <div class="stat-label">Customer Satisfaction</div>
    </div>
  </div>
  
  <div class="col-md-3">
    <div class="stat-card tx-align-center">
      <div class="stat-number h1" data-value="42" data-symbol=" countries">0</div>
      <div class="stat-label">Global Presence</div>
    </div>
  </div>
</div>
```

```js
// Initialize all counters with lazy loading
Phenix('.stat-number').counter({
  lazyloading: true,
  duration: 2500
});
```

### Progress Bars with Counters

```html
<div class="progress-container">
  <div class="progress-item">
    <div class="progress-label">
      <span>Web Development</span>
      <span class="progress-value" data-value="95">0</span><span>%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 0%" data-width="95%"></div>
    </div>
  </div>
  
  <div class="progress-item">
    <div class="progress-label">
      <span>UI/UX Design</span>
      <span class="progress-value" data-value="85">0</span><span>%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 0%" data-width="85%"></div>
    </div>
  </div>
  
  <div class="progress-item">
    <div class="progress-label">
      <span>Mobile Development</span>
      <span class="progress-value" data-value="75">0</span><span>%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 0%" data-width="75%"></div>
    </div>
  </div>
</div>
```

```js
// Initialize the counters
Phenix('.progress-value').counter({
  duration: 1500,
  lazyloading: true
});

// Animate the progress bars in sync with the counters
Phenix('.progress-value').on('timerStart', function(event) {
  const progressFill = Phenix(event.target)
    .ancestor('.progress-item')
    .querySelector('.progress-fill');
    
  const targetWidth = progressFill.getAttribute('data-width');
  progressFill.style.width = targetWidth;
  progressFill.style.transition = 'width 1.5s ease-in-out';
});
```

### Price Toggle with Counter Animation

```html
<div class="pricing-toggle">
  <span>Monthly</span>
  <label class="switch">
    <input type="checkbox" id="pricingToggle">
    <span class="slider round"></span>
  </label>
  <span>Annually</span>
</div>

<div class="pricing-card">
  <h3>Premium Plan</h3>
  <div class="price-container">
    <span>$</span>
    <span class="price-value">29</span>
    <span>/month</span>
  </div>
  <ul class="features-list">
    <li>Feature 1</li>
    <li>Feature 2</li>
    <li>Feature 3</li>
  </ul>
  <button class="btn primary">Get Started</button>
</div>
```

```js
// Initialize price toggle
const priceToggle = document.getElementById('pricingToggle');
const priceValue = document.querySelector('.price-value');
const monthlyPrice = 29;
const annualPrice = 19; // Discounted monthly price when paid annually

priceToggle.addEventListener('change', function() {
  const targetPrice = this.checked ? annualPrice : monthlyPrice;
  
  // Animate the price change
  Phenix(priceValue).counter({
    value: targetPrice,
    duration: 800,
    decimal: 0
  });
});
```

## Advanced Usage

### Counting with Custom Formatting

For more complex formatting needs, you can use a custom approach with the counter:

```js
// Counter with custom formatting (e.g., adding commas to thousands)
Phenix('.large-number').counter({
  value: 1000000,
  duration: 3000,
  decimal: 0,
  steps: 30,
  // The counter will automatically format with commas
});
```

### Combining with Other Animations

Counters work well when combined with other animation effects:

```js
// First fade in the element
Phenix('.stat-card').animations({
  animation: 'fadeIn',
  duration: 800
});

// Then start the counter with a delay
setTimeout(() => {
  Phenix('.stat-number').counter({
    duration: 2000
  });
}, 800);
```

## Performance Optimization

1. **Use Lazy Loading**: For counters below the fold, use the `lazyloading` option to only start animations when they come into view.

2. **Optimize Animation Duration**: Choose appropriate durations - too short feels rushed, too long feels sluggish.

3. **Limit Concurrent Animations**: Too many simultaneous animations can impact performance, especially on mobile devices.

4. **Consider Reduced Motion Preferences**: For accessibility, consider detecting the user's reduced motion preference:

```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

Phenix('.counter').counter({
  duration: prefersReducedMotion ? 100 : 2000, // Much shorter duration if reduced motion is preferred
  steps: prefersReducedMotion ? 1 : 10 // Fewer steps for reduced motion
});
```

## Browser Compatibility

The Phenix Counter System is built using modern JavaScript techniques and is compatible with all modern browsers. The animations use optimized calculations and efficient rendering techniques for smooth performance across devices.
