# Marquee Slider

## Overview

The Marquee Slider creates a smooth scrolling animation for content, similar to the classic HTML marquee but with modern features and better performance. This is ideal for news tickers, announcements, or showcasing content in a continuous horizontal flow.

## Initialization

The Marquee Slider is automatically initialized when you call the main utilities function and the page contains elements with the `.px-marquee` or `.px-marquee-reverse` class:

```js
// Initialize all utilities including Marquee Slider
Phenix(document).utilities();

// Marquee is part of the libraries type
Phenix(document).utilities({
  type: 'libraries'
});
```

## Basic Usage

Add the `.px-marquee` class to a container element and include child elements that will scroll:

```html
<div class="px-marquee">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <!-- More items -->
</div>
```

For reverse direction (right to left in LTR layouts), use the `.px-marquee-reverse` class:

```html
<div class="px-marquee-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Configuration

You can configure the marquee using data attributes:

```html
<div class="px-marquee" data-speed="20" data-hover="false">
  <!-- Content -->
</div>
```

| Attribute | Description | Default |
|-----------|-------------|---------|
| `data-speed` | Scrolling speed (lower is faster) | 15 |
| `data-hover` | Whether to pause on hover | true |

## How It Works

1. The utility detects elements with the `.px-marquee` or `.px-marquee-reverse` class
2. It creates the necessary wrapper elements for the marquee structure
3. It imports the marquee library
4. It initializes the marquee with the specified options
5. The content scrolls continuously in the specified direction

## Generated HTML Structure

The utility transforms your markup into the following structure:

```html
<div class="px-marquee" id="px-marquee-0" data-speed="15" style="direction: ltr;">
  <div class="marquee-slider-wrapper display-flex position-rv">
    <div class="marquee-slider-slides-wrapper display-flex position-rv">
      <div class="marquee-slider-slide" style="direction: ltr;">Item 1</div>
      <div class="marquee-slider-slide" style="direction: ltr;">Item 2</div>
      <div class="marquee-slider-slide" style="direction: ltr;">Item 3</div>
    </div>
  </div>
</div>
```

## Examples

### News Ticker

```html
<div class="news-ticker flexbox align-center-y">
  <span class="badge bg-primary mr-10">News:</span>
  <div class="px-marquee" data-speed="10">
    <div class="px-10">Breaking news item 1</div>
    <div class="px-10">Important announcement 2</div>
    <div class="px-10">Latest update 3</div>
    <div class="px-10">Special event coming soon</div>
  </div>
</div>
```

### Partner Logos

```html
<div class="partners-section">
  <h3 class="tx-center mb-20">Our Partners</h3>
  <div class="px-marquee">
    <div class="partner-logo px-15">
      <img src="logo1.png" alt="Partner 1">
    </div>
    <div class="partner-logo px-15">
      <img src="logo2.png" alt="Partner 2">
    </div>
    <div class="partner-logo px-15">
      <img src="logo3.png" alt="Partner 3">
    </div>
    <div class="partner-logo px-15">
      <img src="logo4.png" alt="Partner 4">
    </div>
    <div class="partner-logo px-15">
      <img src="logo5.png" alt="Partner 5">
    </div>
  </div>
</div>
```

### Testimonials Slider

```html
<div class="testimonials-section">
  <h3 class="tx-center mb-20">What Our Customers Say</h3>
  <div class="px-marquee" data-speed="25">
    <div class="testimonial-card mx-15 pd-20 bx-shadow-dp1">
      <p>"Great service, highly recommended!"</p>
      <div class="author">- John Doe</div>
    </div>
    <div class="testimonial-card mx-15 pd-20 bx-shadow-dp1">
      <p>"The best product I've ever used."</p>
      <div class="author">- Jane Smith</div>
    </div>
    <div class="testimonial-card mx-15 pd-20 bx-shadow-dp1">
      <p>"Exceeded all my expectations."</p>
      <div class="author">- Mike Johnson</div>
    </div>
  </div>
</div>
```

## Styling Tips

### Basic Marquee Styling

```css
.px-marquee {
  overflow: hidden;
  width: 100%;
}

.px-marquee .marquee-slider-slide {
  padding: 0 15px;
  white-space: nowrap;
}
```

### Responsive Adjustments

```css
@media (max-width: 768px) {
  .px-marquee {
    height: 50px; /* Adjust height for mobile */
  }
  
  .px-marquee .marquee-slider-slide {
    padding: 0 10px; /* Reduce padding on smaller screens */
  }
}
```

## Best Practices

- Add sufficient padding or margins between items for better readability
- Keep content concise, especially for news tickers
- Use a slower speed for longer content items
- Consider disabling the pause-on-hover feature for smoother user experience
- Test the marquee on different screen sizes to ensure proper display
- For important information, provide an alternative way to view all content
- Use appropriate contrast between the marquee content and background

## Browser Compatibility

The Marquee Slider is compatible with all modern browsers and uses a lightweight marquee library for smooth animations.
