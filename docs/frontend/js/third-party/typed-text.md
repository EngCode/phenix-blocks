# Typed Text Effect

## Overview

The Typed Text Effect creates a typewriter animation that cycles through multiple text strings. This creates an engaging, dynamic way to display multiple messages in the same space, drawing attention to important content.

## Initialization

The Typed Text Effect is automatically initialized when you call the main utilities function and the page contains elements with the `.typed-list` class:

```js
// Initialize all utilities including Typed Text Effect
Phenix(document).utilities();

// Typed Text is part of the libraries type
Phenix(document).utilities({
  type: 'libraries'
});
```

## Basic Usage

Create a proper unordered list with the `.typed-list` class and include list items for each text string you want to display:

```html
<ul class="typed-list">
  <li>First text to display</li>
  <li>Second text to display</li>
  <li>Third text to display</li>
</ul>
```

## How It Works

1. The utility detects elements with the `.typed-list` class
2. It creates a new paragraph element with the `.typed-text` class and inserts it before the list
3. It transfers the list items' text to data attributes on the new element
4. It imports the typewriter library
5. It initializes the typing effect with the collected text items

The original list remains in the DOM but is typically hidden with CSS, while the new `.typed-text` element shows the typing animation.

## DOM Transformation

When the utility runs, it transforms this:

```html
<ul class="typed-list tx-primary">
  <li>First text</li>
  <li>Second text</li>
</ul>
```

Into this:

```html
<!-- Added by the utility -->
<p class="typed-text tx-primary" data-text-0="First text" data-text-1="Second text">First text</p>

<!-- Original list remains in the DOM -->
<ul class="typed-list tx-primary">
  <li>First text</li>
  <li>Second text</li>
</ul>
```

## Styling

The utility preserves the classes from the original list (except those containing "list"):

```css
/* Style the typed text element */
.typed-text {
  min-height: 1.5em; /* Prevent layout shifts during animation */
}

/* Hide the original list if desired */
.typed-list {
  display: none;
}
```

## Examples

### Simple Typed Text

```html
<!-- This is the only element you need to add to your HTML -->
<ul class="typed-list">
  <li>Welcome to our website</li>
  <li>Discover amazing products</li>
  <li>Join our community today</li>
</ul>
```

### Styled Typed Text

```html
<ul class="typed-list tx-primary tx-bold tx-center">
  <li>Boost your productivity</li>
  <li>Streamline your workflow</li>
  <li>Achieve your goals faster</li>
</ul>
```

### Typed Text in Hero Section

```html
<div class="hero-section">
  <h1>We are</h1>
  <!-- The typed text will appear after this heading -->
  <ul class="typed-list tx-primary">
    <li>Creative</li>
    <li>Innovative</li>
    <li>Professional</li>
    <li>Dedicated</li>
  </ul>
  <p>Let us help you build something amazing.</p>
</div>
```

### Call to Action with Typed Text

```html
<div class="cta-box">
  <h3>Ready to</h3>
  <!-- The typed text will appear after this heading -->
  <ul class="typed-list tx-accent">
    <li>get started?</li>
    <li>boost sales?</li>
    <li>grow your business?</li>
  </ul>
  <button class="btn primary">Contact Us</button>
</div>
```

## Customization

The Typed Text Effect uses the following default configuration:

```js
tinyTypewriter(typeWriter, {
  items: items,       // Array of text strings
  cursor: false,      // No cursor is shown
  startDelay: 700     // Delay before starting the animation
});
```

## Animation Behavior

The Typed Text Effect:

1. Types out the first text string character by character
2. Pauses briefly
3. Deletes the text character by character
4. Types the next text string
5. Continues cycling through all text strings

## Best Practices

- Always use proper HTML structure with a valid `<ul>` element and `<li>` items
- Keep text strings concise for better visual impact
- Use similar length strings for more consistent timing
- Limit the number of text strings to 3-5 for better user experience
- Place typed text in prominent locations where animation adds value
- Consider using contrasting colors to highlight the typed text
- Test the animation speed on different devices
- Ensure the content makes sense when read with any of the text strings

## Browser Compatibility

The Typed Text Effect is compatible with all modern browsers and uses a lightweight typewriter library for smooth animations.
