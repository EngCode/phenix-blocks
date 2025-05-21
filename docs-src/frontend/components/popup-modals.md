# Modal

## Overview

The Modal component in the Phenix Design System provides a way to create dialog boxes, lightboxes, and other popup content that appears above the page. Modals are useful for displaying additional information, forms, or media without navigating away from the current page.

## Basic Usage

Create a basic modal using the `.px-modal` class and initialize it with the JavaScript popup method:

```html
<!-- Modal Trigger -->
<button class="btn primary" data-modal="demo-modal">Open Modal</button>

<!-- Modal Component -->
<div class="px-modal hidden align-center" id="demo-modal">
  <!-- Modal Content -->
  <div class="modal-content bg-white radius-sm pd-20">
    <h4 class="fs-16 mb-15">Modal Title</h4>
    <p>This is a basic modal in the Phenix Design System.</p>
    <!-- Close Button -->
    <button class="modal-close btn small danger mt-15">Close</button>
  </div>
</div>

<!-- Initialize with JavaScript -->
<script>
  Phenix('.px-modal').popup({
    type: 'modal'
  });
</script>
```

## Modal Styles

### Standard Dialog

Create a standard dialog modal with header, body, and footer sections:

```html
<div class="px-modal hidden align-center" id="standard-modal">
  <div class="modal-content w-max-480 bg-white radius-sm">
    <!-- Header -->
    <h4 class="fs-15 pdx-20 pdy-10 divider-b">
      Modal Title
      <!-- Close Button (X) -->
      <button class="modal-close far fa-times btn square ms-15 bg-transparent color-danger position-ab position-top-0 position-end-0"></button>
    </h4>
    
    <!-- Body -->
    <div class="pdx-20 pdt-15 pdb-20">
      <p class="fs-14">This is the modal content area where you can place text, forms, or other content.</p>
    </div>
    
    <!-- Footer -->
    <div class="pdx-20 pdy-10 divider-t flexbox align-between">
      <button class="btn primary small">Confirm</button>
      <button class="modal-close btn danger small">Cancel</button>
    </div>
  </div>
</div>
```

### Centered Modal

Center the modal content both horizontally and vertically:

```html
<div class="px-modal hidden align-center align-middle" id="centered-modal">
  <div class="modal-content w-max-480 bg-white radius-sm">
    <!-- Modal content here -->
  </div>
</div>
```

### Full-Width Modal

Create a modal that spans the full width of the viewport:

```html
<div class="px-modal hidden align-center" id="full-width-modal">
  <div class="modal-content w-100 bg-white">
    <!-- Modal content here -->
  </div>
</div>
```

## Customization

### Modal Sizes

Adjust the size of the modal content using width utility classes:

```html
<!-- Small Modal -->
<div class="px-modal hidden align-center" id="small-modal">
  <div class="modal-content w-max-320 bg-white radius-sm">
    <!-- Modal content here -->
  </div>
</div>

<!-- Medium Modal -->
<div class="px-modal hidden align-center" id="medium-modal">
  <div class="modal-content w-max-480 bg-white radius-sm">
    <!-- Modal content here -->
  </div>
</div>

<!-- Large Modal -->
<div class="px-modal hidden align-center" id="large-modal">
  <div class="modal-content w-max-768 bg-white radius-sm">
    <!-- Modal content here -->
  </div>
</div>
```

### Modal Positions

Position the modal content in different areas of the screen:

```html
<!-- Top Modal -->
<div class="px-modal hidden align-center" id="top-modal">
  <div class="modal-content w-max-480 bg-white radius-sm mt-50">
    <!-- Modal content here -->
  </div>
</div>

<!-- Bottom Modal -->
<div class="px-modal hidden align-center align-end-y" id="bottom-modal">
  <div class="modal-content w-max-480 bg-white radius-sm mb-50">
    <!-- Modal content here -->
  </div>
</div>

<!-- Side Modal -->
<div class="px-modal hidden align-end-x" id="side-modal">
  <div class="modal-content h-100vh w-max-320 bg-white">
    <!-- Modal content here -->
  </div>
</div>
```

### Custom Styling

Customize the appearance of modals using utility classes:

```html
<div class="px-modal hidden align-center" id="styled-modal">
  <div class="modal-content w-max-480 bg-primary color-white radius-lg bx-shadow-dp-3">
    <h4 class="fs-16 pdx-20 pdy-15 divider-b divider-white-10">Custom Modal</h4>
    <div class="pdx-20 pdy-15">
      <p>This modal has custom styling with colors, shadows, and rounded corners.</p>
    </div>
    <div class="pdx-20 pdy-10 divider-t divider-white-10">
      <button class="modal-close btn outline white small">Close</button>
    </div>
  </div>
</div>
```

## Advanced Usage

### Auto-Show Modal

Show a modal automatically when the page loads or after a delay:

```html
<div class="px-modal hidden align-center" id="auto-show-modal" data-onload="true" data-timeout="2000">
  <div class="modal-content w-max-480 bg-white radius-sm">
    <!-- Modal content here -->
  </div>
</div>

<script>
  Phenix('#auto-show-modal').popup({
    type: 'modal',
    onload: true,
    timeout: 2000  // 2 seconds delay
  });
</script>
```

### Show on Scroll

Display a modal when the user scrolls to a specific element:

```html
<!-- Element that triggers the modal when scrolled into view -->
<div id="scroll-target" class="pdy-50">
  <!-- Some content that triggers the modal when scrolled to -->
</div>

<!-- Modal that appears when the element is in view -->
<div class="px-modal hidden align-center" id="scroll-modal" data-showon="#scroll-target">
  <div class="modal-content w-max-480 bg-white radius-sm">
    <!-- Modal content here -->
  </div>
</div>

<script>
  Phenix('#scroll-modal').popup({
    type: 'modal',
    showon: '#scroll-target'
  });
</script>
```

### URL Hash Navigation

Show a modal when a specific URL hash is present:

```html
<div class="px-modal hidden align-center" id="hash-modal" data-hash="true">
  <div class="modal-content w-max-480 bg-white radius-sm">
    <!-- Modal content here -->
  </div>
</div>

<script>
  Phenix('#hash-modal').popup({
    type: 'modal',
    hash_url: true
  });
</script>
```

### Modal with Form

Create a modal containing a form:

```html
<div class="px-modal hidden align-center" id="form-modal">
  <div class="modal-content w-max-480 bg-white radius-sm">
    <h4 class="fs-15 pdx-20 pdy-10 divider-b">Contact Form</h4>
    <form class="pdx-20 pdy-15">
      <div class="form-control mb-15">
        <label for="name" class="mb-5 fs-14">Name</label>
        <input type="text" id="name" class="form-input" placeholder="Your name">
      </div>
      <div class="form-control mb-15">
        <label for="email" class="mb-5 fs-14">Email</label>
        <input type="email" id="email" class="form-input" placeholder="Your email">
      </div>
      <div class="form-control mb-15">
        <label for="message" class="mb-5 fs-14">Message</label>
        <textarea id="message" class="form-input" rows="4" placeholder="Your message"></textarea>
      </div>
    </form>
    <div class="pdx-20 pdy-10 divider-t flexbox align-between">
      <button type="submit" class="btn primary small">Submit</button>
      <button class="modal-close btn danger small">Cancel</button>
    </div>
  </div>
</div>
```

## Lightbox

The Modal component can also be used as a lightbox for displaying images, videos, or other media:

```html
<!-- Image Lightbox Trigger -->
<img src="thumbnail.jpg" class="px-lightbox cursor-pointer" data-src="fullsize.jpg">

<!-- Video Lightbox Trigger -->
<a href="video.mp4" class="px-lightbox" data-media="video">
  <img src="video-thumbnail.jpg" alt="Video">
</a>

<!-- Embed Lightbox Trigger (YouTube, etc.) -->
<a href="https://www.youtube.com/watch?v=VIDEO_ID" class="px-lightbox" data-media="embed">
  <img src="youtube-thumbnail.jpg" alt="YouTube Video">
</a>

<!-- Lightbox Modal -->
<div class="px-modal hidden align-center" id="px-lightbox" data-type="lightbox">
  <div class="modal-content bg-transparent">
    <!-- Lightbox content will be inserted here automatically -->
    <button class="modal-close far fa-times btn square radius-circle tiny danger position-ab position-top-10 position-end-10"></button>
  </div>
</div>

<script>
  Phenix('#px-lightbox').popup({
    type: 'lightbox'
  });
</script>
```

### Lightbox Groups

Display multiple images as a gallery in a lightbox:

```html
<!-- Image Group -->
<img src="thumbnail1.jpg" class="px-lightbox cursor-pointer" data-src="fullsize1.jpg" data-group="gallery">
<img src="thumbnail2.jpg" class="px-lightbox cursor-pointer" data-src="fullsize2.jpg" data-group="gallery">
<img src="thumbnail3.jpg" class="px-lightbox cursor-pointer" data-src="fullsize3.jpg" data-group="gallery">

<!-- Lightbox Modal -->
<div class="px-modal hidden align-center" id="px-lightbox" data-type="lightbox">
  <div class="modal-content bg-transparent">
    <!-- Lightbox content will be inserted here automatically -->
  </div>
</div>
```

## JavaScript API

The Modal component is powered by the Popup JavaScript functionality:

```javascript
Phenix('.px-modal').popup({
  type: 'modal',        // 'modal' or 'lightbox'
  hash_url: false,      // Show modal if called from URL hash
  backdrop: true,       // Enable/disable close by backdrop click
  onload: false,        // Show on page load
  showon: false,        // Show when element is in viewport
  timeout: 0            // Delay in milliseconds
});
```

## Options Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | String | 'modal' | Type of popup: 'modal' or 'lightbox' |
| `hash_url` | Boolean | false | Show modal if called from URL hash |
| `backdrop` | Boolean | true | Enable/disable close by backdrop click |
| `onload` | Boolean | false | Show on page load |
| `showon` | String | null | Selector for element that triggers modal when in viewport |
| `timeout` | Number | 0 | Delay in milliseconds before showing |

## Data Attributes

All options can also be set using data attributes:

| Attribute | Description |
|-----------|-------------|
| `data-type` | Type of popup: 'modal' or 'lightbox' |
| `data-hash` | Show modal if called from URL hash |
| `data-backdrop` | Enable/disable close by backdrop click |
| `data-onload` | Show on page load |
| `data-showon` | Selector for element that triggers modal when in viewport |
| `data-timeout` | Delay in milliseconds before showing |
| `data-modal` | Used on trigger elements to specify which modal to open |
| `data-media` | Used in lightbox to specify media type: 'image', 'video', or 'embed' |
| `data-group` | Used in lightbox to group media items together |

## Events

The Modal component fires events that you can listen for:

```javascript
// Do something when a modal is shown
Phenix('#demo-modal').on('modal-showed', event => {
  console.log('Modal is now visible');
});

// Do something when a modal is hidden
Phenix('#demo-modal').on('modal-hidden', event => {
  console.log('Modal is now hidden');
});
```

## Accessibility

For better accessibility, consider adding appropriate ARIA attributes:

```html
<button class="btn primary" data-modal="a11y-modal" aria-haspopup="dialog">Open Modal</button>

<div class="px-modal hidden align-center" id="a11y-modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <div class="modal-content bg-white radius-sm pd-20">
    <h4 id="modal-title" class="fs-15 pdx-20 pdy-10 divider-b">Accessible Modal</h4>
    <div class="pdx-20 pdy-15">
      <p>This is an accessible modal dialog.</p>
    </div>
    <div class="pdx-20 pdy-10 divider-t">
      <button class="modal-close btn danger small" aria-label="Close dialog">Close</button>
    </div>
  </div>
</div>
```

## Best Practices

1. **Keep modals focused** on a single task or piece of information
2. **Provide clear close options** including a visible close button
3. **Ensure keyboard accessibility** for opening and closing modals
4. **Consider mobile users** when designing modal content and sizing
5. **Use appropriate z-index values** to ensure modals appear above other content
6. **Avoid nested modals** which can create confusing user experiences
