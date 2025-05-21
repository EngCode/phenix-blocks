# Scroll Effects

## Overview

The Phenix Design System provides powerful scroll-related effects and utilities that enhance user experience through smooth scrolling, position tracking, and sticky elements. These features are implemented through JavaScript/TypeScript and are designed to be lightweight, performant, and easy to implement.

## Smooth Scroll

The `smoothScroll` method creates animated scrolling to specific elements on the page, providing a more polished user experience than the default browser jump.

```typescript
smoothScroll(options?: {
  target?: string;   // Target selector to scroll to
  offset?: number;   // Decrease target position by [number]
  into?: number;     // Increase target position by [number]
  duration?: number; // Scroll animation duration in milliseconds
  delay?: number;    // Delay before scroll in milliseconds
}): this
```

### Parameters

- `target`: CSS selector for the element to scroll to (fallback if not specified in HTML)
- `offset`: Decreases the final scroll position by the specified number of pixels
- `into`: Increases the final scroll position by the specified number of pixels
- `duration`: Animation duration in milliseconds (default: 700)
- `delay`: Delay before starting the animation in milliseconds (default: 0)

> **Note**: You cannot use both `offset` and `into` together; choose one or the other.

### HTML Attributes

The method also supports HTML data attributes for inline configuration:

- `href`: Used for link elements to specify the target
- `data-target`: Alternative to href for non-anchor elements
- `data-duration`: Animation duration in milliseconds
- `data-offset`: Decrease target position by [number]
- `data-into`: Increase target position by [number]
- `data-delay`: Delay before scroll in milliseconds

### Examples

**Basic Usage:**

```js
// Apply smooth scroll to all elements with class 'scroll-trigger'
Phenix('.scroll-trigger').smoothScroll();
```

**With Options:**

```js
// Apply smooth scroll with custom options
Phenix('.scroll-trigger').smoothScroll({
  duration: 700,
  offset: 50,
  delay: 100
});
```

**HTML Implementation:**

```html
<!-- As a link -->
<a href="#section-id" class="scroll-trigger">Scroll to Section</a>

<!-- As a button -->
<button data-target="#section-id" class="scroll-trigger">Scroll to Section</button>

<!-- With inline options -->
<a href="#section-id" class="scroll-trigger" data-duration="500" data-offset="20">
  Scroll to Section
</a>
```

## Sticky Elements

The `sticky` method allows elements to become fixed or sticky when the user scrolls past a certain point. This is useful for navigation bars, sidebars, and other elements that should remain visible while scrolling.

```typescript
sticky(options?: {
  type?: string;   // Position type: 'fixed' or 'sticky'
  offset?: number; // Decrease target position by [number]
  into?: number;   // Increase target position by [number]
  flow?: string;   // Scroll direction: 'x' or 'y'
  active?: string; // Active class name
}): this
```

### Parameters

- `type`: Position type, either "sticky" (default) or "fixed"
- `active`: Class name to add when the element becomes sticky (default: "is-sticky")
- `flow`: Scroll direction, either "y" (vertical, default) or "x" (horizontal)
- `offset`: Decreases the sticky trigger position by the specified number of pixels
- `into`: Increases the sticky trigger position by the specified number of pixels

> **Note**: You cannot use both `offset` and `into` together; choose one or the other.

### HTML Attributes

The method also supports HTML data attributes for inline configuration:

- `data-offset`: Decrease sticky trigger position by [number]
- `data-into`: Increase sticky trigger position by [number]

### Examples

**Basic Usage:**

```js
// Make navbar sticky with default options
Phenix('.navbar').sticky();
```

**With Options:**

```js
// Make sidebar sticky with custom options
Phenix('.sidebar').sticky({
  type: "sticky",
  active: "is-sticky",
  flow: 'y',
  offset: 20
});
```

**HTML Implementation:**

```html
<!-- Basic sticky element -->
<nav class="navbar" data-sticky>...</nav>

<!-- With inline options -->
<div class="sidebar" data-sticky data-offset="30">...</div>
```

## Scroll Spy

The `scrollSpy` method creates a scroll tracker that highlights navigation items based on the current scroll position. This is particularly useful for table of contents, navigation menus, and step indicators.

```typescript
scrollSpy(options?: {
  active?: string; // Active class name
  flow?: string;   // Scroll direction: 'start', 'end', or 'both'
  offset?: number; // Decrease target position by [number]
  into?: number;   // Increase target position by [number]
}): this
```

### Parameters

- `active`: Class name to add to active elements (default: "px-active")
- `flow`: Direction to track scrolling, either "start", "end", or "both" (default: "both")
- `offset`: Decreases the tracking position by the specified number of pixels
- `into`: Increases the tracking position by the specified number of pixels

> **Note**: You cannot use both `offset` and `into` together; choose one or the other.

### HTML Attributes

The method also supports HTML data attributes for inline configuration:

- `data-flow`: Scroll direction to track
- `data-offset`: Decrease tracking position by [number]
- `data-into`: Increase tracking position by [number]

### Examples

**Basic Usage:**

```js
// Create scroll spy on a navigation menu
Phenix('.scroll-tracker').scrollSpy();
```

**With Options:**

```js
// Create scroll spy with custom options
Phenix('.scroll-tracker').scrollSpy({
  active: "active-section",
  flow: 'start',
  offset: 50
});
```

**HTML Implementation:**

```html
<!-- Scroll spy navigation -->
<ul class="scroll-tracker">
  <li><a href="#section-1">Section 1</a></li>
  <li><a href="#section-2">Section 2</a></li>
  <li><a href="#section-3">Section 3</a></li>
</ul>

<!-- Target sections -->
<div id="section-1">Section 1 content...</div>
<div id="section-2">Section 2 content...</div>
<div id="section-3">Section 3 content...</div>
```

## Practical Examples

### Table of Contents with Scroll Spy

```html
<div class="page-layout">
  <!-- Table of Contents -->
  <nav class="toc sticky">
    <ul class="scroll-tracker">
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#examples">Examples</a></li>
    </ul>
  </nav>
  
  <!-- Content Sections -->
  <div class="content">
    <section id="introduction">
      <h2>Introduction</h2>
      <p>Content here...</p>
    </section>
    <section id="features">
      <h2>Features</h2>
      <p>Content here...</p>
    </section>
    <!-- More sections... -->
  </div>
</div>
```

```js
// Make the TOC sticky
Phenix('.toc').sticky({
  offset: 20
});

// Initialize scroll spy
Phenix('.scroll-tracker').scrollSpy({
  active: "current-section",
  offset: 100
});

// Add smooth scrolling to TOC links
Phenix('.scroll-tracker a').smoothScroll({
  offset: 50,
  duration: 600
});
```

### Fixed Header with Scroll-Up Reveal

```html
<header class="site-header">
  <div class="logo">Logo</div>
  <nav class="main-nav">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

```js
// Variables to track scroll position
let lastScrollTop = 0;
const header = document.querySelector('.site-header');

// Make header sticky
Phenix(header).sticky({
  active: "is-sticky"
});

// Add scroll direction detection
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scrolling down - hide header
    header.classList.add('header-hidden');
  } else {
    // Scrolling up - show header
    header.classList.remove('header-hidden');
  }
  
  lastScrollTop = scrollTop;
});
```

## Browser Compatibility

The Phenix Scroll Effects are built using modern JavaScript techniques and are compatible with all modern browsers. The animations use `requestAnimationFrame` for smooth performance and optimal rendering.

## Integration with Other Features

The Scroll Effects in Phenix are designed to work seamlessly with other components of the framework:

- **DOM UI Effects**: Combine with fade/slide effects for enhanced interactions
- **DOM Events**: Use with event handling for custom scroll behaviors
- **Animation System**: For more complex scroll-triggered animations
