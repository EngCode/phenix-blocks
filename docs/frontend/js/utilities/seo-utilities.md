# SEO Utilities

## Overview

The SEO Utilities in Phenix automatically enhance your web pages for better search engine optimization and accessibility. These utilities handle common SEO requirements like proper heading structure, image attributes, and link accessibility.

## Initialization

The SEO Utilities are automatically initialized when you call the main utilities function:

```js
// Initialize all utilities including SEO utilities
Phenix(document).utilities();

// Or initialize only SEO utilities
Phenix(document).utilities({
  type: 'seo'
});
```

## Features

### Headline Fix

Ensures every page has an `<h1>` element, which is important for SEO. If no `<h1>` is found, the utility automatically adds a hidden one using the document title:

```js
// Automatically added if no h1 exists
<h1 class="hidden">Your Page Title</h1>
```

### Images SEO/Performance

Automatically enhances image elements for better SEO and performance:

1. Adds missing `width` and `height` attributes based on parent container dimensions
2. Adds missing `alt` text based on the image filename if none is provided

Before:
```html
<img src="product-image.jpg">
```

After automatic enhancement:
```html
<img src="product-image.jpg" width="300" height="200" alt="product-image">
```

### Links SEO

Improves accessibility and SEO for links and buttons by adding missing `title` and `aria-label` attributes:

1. For links/buttons with text content, uses that text for the attributes
2. For links/buttons with headings inside, uses the heading text
3. For empty links/buttons, uses the `data-title` attribute if available

Before:
```html
<a href="/products">Our Products</a>
<button>Submit</button>
<a href="/contact"><h3>Contact Us</h3></a>
```

After automatic enhancement:
```html
<a href="/products" title="Our Products" aria-label="Our Products">Our Products</a>
<button title="Submit" aria-label="Submit">Submit</button>
<a href="/contact" title="Contact Us" aria-label="Contact Us"><h3>Contact Us</h3></a>
```

## Examples

### Image Gallery with SEO Enhancements

```html
<div class="gallery">
  <img src="image1.jpg" alt="Custom alt text">
  <img src="image2.jpg"> <!-- Will get automatic alt="image2" -->
  <img src="image3.jpg"> <!-- Will get automatic alt="image3" -->
</div>
```

### Navigation with Accessibility Enhancements

```html
<nav>
  <a href="/">Home</a> <!-- Will get title and aria-label="Home" -->
  <a href="/about">About Us</a> <!-- Will get title and aria-label="About Us" -->
  <a href="/contact" data-title="Contact Our Team"> <!-- Will use data-title value -->
    Contact
  </a>
</nav>
```

## Best Practices

While the SEO Utilities provide automatic enhancements, it's still best practice to:

1. **Manually add proper attributes** whenever possible rather than relying on automatic fixes
2. **Provide meaningful alt text** for images that describes their content and purpose
3. **Use descriptive link text** that clearly indicates where the link leads
4. **Include a proper heading structure** with a single `<h1>` and logical hierarchy
5. **Test with screen readers** to ensure good accessibility despite automatic enhancements

## Implementation Notes

- The image enhancements run after a short delay (500ms) to ensure images have loaded
- Link enhancements prioritize existing attributes and only add missing ones
- The headline fix only adds an `<h1>` if one doesn't already exist
- All enhancements are non-destructive and won't override manually set attributes

## Browser Compatibility

The SEO Utilities are compatible with all modern browsers and use standard DOM manipulation techniques.
