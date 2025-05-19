# ScrollSpy

## Overview

The Phenix ScrollSpy feature automatically highlights navigation items based on the scroll position. This creates an interactive navigation that updates as users scroll through a page, making it easier to navigate through long content.

## Basic Usage

Create a navigation menu with links pointing to sections on the page, and add the `scrollspy-menu` class to the container:

```html
<ul class="scrollspy-menu">
  <li><a href="#section1">Section 1</a></li>
  <li><a href="#section2">Section 2</a></li>
  <li><a href="#section3">Section 3</a></li>
</ul>

<div id="section1">Section 1 Content</div>
<div id="section2">Section 2 Content</div>
<div id="section3">Section 3 Content</div>
```

The ScrollSpy is automatically initialized for elements with the `scrollspy-menu` class:

```js
// This happens automatically in Phenix.init()
Phenix(".scrollspy-menu").scrollSpy();

// Or manually initialize with custom options
Phenix(".my-custom-menu").scrollSpy({
  active: 'custom-active-class',
  flow: 'both',
  offset: 50,
  into: 0
});
```

## How It Works

The ScrollSpy functionality:

1. Monitors scroll position on the page
2. Detects when target sections enter the viewport
3. Adds an active class to the corresponding navigation item
4. Removes the active class from other navigation items
5. Optionally scrolls the active item into view if the navigation is in a scrollable container

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `active` | String | 'px-active' | CSS class name to apply to active items |
| `flow` | String | 'both' | Direction of activation: 'start' (top to bottom), 'end' (bottom to top), or 'both' |
| `offset` | Number | 0 | Decrease target position by this number of pixels |
| `into` | Number | 0 | Increase target position by this number of pixels |

## Data Attributes

You can customize individual navigation items using data attributes:

```html
<ul class="scrollspy-menu">
  <li><a href="#section1" data-flow="start" data-offset="100">Section 1</a></li>
  <li><a href="#section2" data-into="50">Section 2</a></li>
  <li><a href="#section3">Section 3</a></li>
</ul>
```

| Attribute | Description |
|-----------|-------------|
| `data-flow` | Override the flow direction for this specific link |
| `data-offset` | Override the offset value for this specific link |
| `data-into` | Override the into value for this specific link |
| `data-target` | Alternative to href for specifying the target element |

## Advanced Examples

### Nested Navigation

The ScrollSpy supports nested navigation structures:

```html
<ul class="scrollspy-menu">
  <li><a href="#section1">Section 1</a></li>
  <li>
    <a href="#section2">Section 2</a>
    <ul>
      <li><a href="#section2-1">Section 2.1</a></li>
      <li><a href="#section2-2">Section 2.2</a></li>
    </ul>
  </li>
  <li><a href="#section3">Section 3</a></li>
</ul>
```

### Vertical Side Navigation

```html
<div class="flexbox">
  <div class="col-3">
    <nav class="scrollspy-menu position-sticky" style="top: 20px;">
      <ul class="reset-list">
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </nav>
  </div>
  <div class="col-9">
    <section id="introduction">...</section>
    <section id="features">...</section>
    <section id="installation">...</section>
    <section id="usage">...</section>
  </div>
</div>
```

### Horizontal Navigation

```html
<header class="position-sticky" style="top: 0;">
  <nav class="scrollspy-menu">
    <ul class="flexbox reset-list">
      <li><a href="#section1">Section 1</a></li>
      <li><a href="#section2">Section 2</a></li>
      <li><a href="#section3">Section 3</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="section1" class="min-height-100vh">...</section>
  <section id="section2" class="min-height-100vh">...</section>
  <section id="section3" class="min-height-100vh">...</section>
</main>
```

## Styling Active Items

By default, the ScrollSpy adds the `px-active` class to active items. You can style this class in your CSS:

```css
.scrollspy-menu .px-active {
  color: var(--primary-color);
  font-weight: bold;
}

/* Or with a custom active class */
.scrollspy-menu .custom-active {
  background-color: #f0f0f0;
  border-left: 3px solid var(--primary-color);
}
```

## Integration with Smooth Scroll

The ScrollSpy automatically integrates with Phenix's Smooth Scroll functionality, creating a seamless navigation experience:

```js
// This happens automatically for links in a scrollspy-menu
Phenix('a[href*="#"]').smothScroll();
```

## Best Practices

- Use descriptive IDs for your sections that match the content they contain
- Consider adding offset for fixed headers to prevent them from overlapping content
- For long pages, use a sticky position for the navigation menu
- Test the scrolling behavior on different screen sizes
- Add visual feedback for active items to improve user experience

## Browser Compatibility

The ScrollSpy functionality is compatible with all modern browsers and uses the Intersection Observer API for performance optimization.
