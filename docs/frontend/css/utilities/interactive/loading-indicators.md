# Loading Indicators

Loading indicator utilities in the Phenix Design System provide visual feedback to users when content is loading or an action is processing.

## Overview

These utilities help manage user expectations during potentially time-consuming operations.

## Usage

Phenix offers several ways to display loading indicators:

```html
<!-- Add loading spinner overlay to an element -->
<div class="px-loading">
  <!-- Content being loaded or processed -->
  <p>This content will be overlaid with a spinner.</p>
</div>

<!-- Inline loading spinner (useful next to text) -->
<span class="px-loading-inline">Loading...</span>

<!-- Alternative block-level loader -->
<div class="px-loader">
  <!-- Content is replaced by the loader -->
  Loading content...
</div>
```

-   `.px-loading`: Adds a semi-transparent overlay and a centered spinner animation *over* the existing content of the element.
-   `.px-loading-inline`: Displays a small spinner suitable for placing next to text, like on a button label.
-   `.px-loader`: Often used to *replace* the content with a loading message and spinner, typically requiring JavaScript to toggle visibility.

## How It Works

-   `.px-loading` uses a `::before` pseudo-element for the overlay and an `::after` pseudo-element for the spinner animation. The element itself needs `position: relative` (which is often added by default to components like cards or buttons, or can be added with `position-rv`).
-   `.px-loading-inline` uses an `::after` pseudo-element for the spinner.
-   `.px-loader` styles the element itself to act as a loading container.

## Customization

The appearance of the spinner (color, size) might be customizable via CSS variables, depending on the theme's implementation. Check the SCSS source for details.

## Use Cases

### Form Submission

```html
<form id="my-form">
  <!-- Form Fields -->
  <div id="submit-wrapper">
    <button type="submit" class="btn primary">Submit</button>
  </div>
</form>

<script>
  document.getElementById('my-form').addEventListener('submit', (e) => {
    // Prevent actual submission for demo
    e.preventDefault(); 
    const wrapper = document.getElementById('submit-wrapper');
    // Add loading class to the button's wrapper
    wrapper.classList.add('px-loading');
    // Simulate network request
    setTimeout(() => {
      wrapper.classList.remove('px-loading');
      // Handle form success
    }, 2000);
  });
</script>
```

### Loading Button Text

```html
<button class="btn primary">
  <span class="px-loading-inline">Processing</span>
</button>
```

### Lazy-Loading Content Section

```html
<div id="content-section" class="px-loader" style="min-height: 200px;">
  Loading articles...
</div>

<script>
  // Simulate fetching content
  setTimeout(() => {
    const section = document.getElementById('content-section');
    section.classList.remove('px-loader');
    section.innerHTML = '<p>Content loaded successfully!</p>'; // Replace with actual content
  }, 2500);
</script>
```

## Best Practices

1.  **Provide Clear Feedback**: Use loading indicators for any action that might take more than a fraction of a second.
2.  **Indicate Scope**: Use `.px-loading` for overlaying specific components (like a card or form section) and `.px-loader` when replacing content.
3.  **Accessibility**: Ensure loading states are communicated to screen reader users, potentially using ARIA attributes (`aria-busy="true"`) managed via JavaScript. 