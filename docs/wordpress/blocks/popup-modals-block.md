# Popup Modals Block

## Overview

The Popup Modals Block is a powerful interactive component in the Phenix Design System that allows you to create customizable modal dialogs, popups, and lightboxes. These modals can be triggered by various actions and can contain any type of content, making them versatile for displaying additional information, forms, images, or other interactive elements without navigating away from the current page.

![Popup Modals Block](../../../assets/images/wordpress/popup-modals-block.png)

## Key Features

- Create responsive modal dialogs with customizable sizes
- Multiple trigger options (button, link, image, or automatic)
- Various animation effects for modal appearance
- Backdrop customization (color, opacity, blur)
- Header, body, and footer sections with styling options
- Close button and ESC key functionality
- Accessibility features for keyboard navigation and screen readers

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Popup Modals" or find it in the "Phenix Blocks" category
3. Add the Popup Modals Block to your page
4. Configure the trigger element and modal content
5. Customize the modal settings in the block sidebar

## Block Settings

### Trigger Options

| Option | Description |
|--------|-------------|
| Trigger Type | Choose the type of element that will open the modal (button, link, image, auto) |
| Trigger Text | Text to display on the trigger button or link |
| Trigger Icon | Optional icon to display with the trigger text |
| Trigger Style | Style options for the trigger button (primary, secondary, outline, etc.) |
| Auto Trigger | Settings for automatic triggering (on page load, after delay, on exit intent) |

### Modal Size and Position

| Option | Description |
|--------|-------------|
| Modal Size | Set the size of the modal (small, medium, large, extra large, or custom) |
| Modal Position | Position the modal on the screen (center, top, bottom, fullscreen) |
| Max Width | Set a maximum width for the modal |
| Max Height | Set a maximum height for the modal |
| Fullscreen on Mobile | Option to make the modal fullscreen on mobile devices |

### Modal Style Options

| Option | Description |
|--------|-------------|
| Background Color | Set the background color of the modal |
| Text Color | Set the text color within the modal |
| Border | Add borders with custom color, width, and style |
| Border Radius | Add rounded corners to the modal |
| Shadow | Add shadow effects to the modal |
| Padding | Add internal spacing within the modal |

### Animation Options

| Option | Description |
|--------|-------------|
| Animation Type | Select the animation effect for the modal (fade, slide, zoom, etc.) |
| Animation Duration | Set how long the animation lasts |
| Animation Timing | Control the timing function of the animation |

### Backdrop Options

| Option | Description |
|--------|-------------|
| Backdrop Color | Set the color of the backdrop behind the modal |
| Backdrop Opacity | Control the transparency of the backdrop |
| Backdrop Blur | Add a blur effect to the content behind the modal |
| Close on Backdrop Click | Enable/disable closing the modal when clicking outside it |

### Advanced Options

| Option | Description |
|--------|-------------|
| Modal ID | Set a unique identifier for the modal (for custom triggering) |
| Close Button | Show/hide the close button |
| Close on ESC | Enable/disable closing the modal with the ESC key |
| Prevent Scrolling | Lock the background page scrolling when modal is open |
| Z-Index | Set the stacking order for the modal |

## Examples

### Basic Modal with Button Trigger

A simple modal triggered by a button:

```html
<!-- wp:phenix/popup-modals {"triggerType":"button","triggerText":"Open Modal","modalSize":"medium"} -->
<div class="wp-block-phenix-popup-modals">
  <button class="btn primary modal-trigger" data-modal-id="modal-1">Open Modal</button>
  <div id="modal-1" class="px-modal size-md">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Modal Title</h3>
        <button class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <p>This is the modal content. You can add any blocks here.</p>
      </div>
      <div class="modal-footer">
        <button class="btn outline modal-close">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- /wp:phenix/popup-modals -->
```

### Image Lightbox Modal

A modal that displays an image in a lightbox style:

```html
<!-- wp:phenix/popup-modals {"triggerType":"image","triggerImage":"https://example.com/thumbnail.jpg","modalSize":"large","animation":"zoom"} -->
<div class="wp-block-phenix-popup-modals">
  <img src="https://example.com/thumbnail.jpg" alt="Click to enlarge" class="modal-trigger" data-modal-id="lightbox-1">
  <div id="lightbox-1" class="px-modal size-lg" data-animation="zoom">
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <div class="modal-body pd-0">
        <img src="https://example.com/large-image.jpg" alt="Large image" class="img-fluid">
      </div>
    </div>
  </div>
</div>
<!-- /wp:phenix/popup-modals -->
```

### Auto-Triggered Modal

A modal that automatically opens after a delay:

```html
<!-- wp:phenix/popup-modals {"triggerType":"auto","autoDelay":"3000","modalSize":"medium","backdropColor":"#000000","backdropOpacity":"0.8"} -->
<div class="wp-block-phenix-popup-modals">
  <div id="auto-modal-1" class="px-modal size-md" data-auto-open="true" data-auto-delay="3000" data-backdrop-color="#000000" data-backdrop-opacity="0.8">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Special Offer!</h3>
        <button class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <p>Subscribe to our newsletter and get 10% off your first purchase!</p>
        <!-- Form content goes here -->
      </div>
      <div class="modal-footer">
        <button class="btn primary">Subscribe</button>
        <button class="btn outline modal-close">No Thanks</button>
      </div>
    </div>
  </div>
</div>
<!-- /wp:phenix/popup-modals -->
```

### Fullscreen Modal

A fullscreen modal with a custom background:

```html
<!-- wp:phenix/popup-modals {"triggerType":"button","triggerText":"Open Fullscreen","modalPosition":"fullscreen","backgroundColor":"#f5f5f5"} -->
<div class="wp-block-phenix-popup-modals">
  <button class="btn primary modal-trigger" data-modal-id="fullscreen-1">Open Fullscreen</button>
  <div id="fullscreen-1" class="px-modal fullscreen" style="--bg-color:#f5f5f5">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Fullscreen Modal</h2>
        <button class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <!-- Fullscreen content goes here -->
      </div>
    </div>
  </div>
</div>
<!-- /wp:phenix/popup-modals -->
```

## Common Use Cases

### Contact Form Modal

A modal containing a contact form:

```html
<!-- wp:phenix/popup-modals {"triggerType":"button","triggerText":"Contact Us","triggerIcon":"fas fa-envelope","modalSize":"medium"} -->
<div class="wp-block-phenix-popup-modals">
  <button class="btn primary modal-trigger" data-modal-id="contact-modal">
    <i class="fas fa-envelope me-10"></i>Contact Us
  </button>
  <div id="contact-modal" class="px-modal size-md">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Get in Touch</h3>
        <button class="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <!-- Contact form shortcode or blocks go here -->
        [contact-form-7 id="123" title="Contact Form"]
      </div>
    </div>
  </div>
</div>
<!-- /wp:phenix/popup-modals -->
```

### Video Modal

A modal for displaying a video:

```html
<!-- wp:phenix/popup-modals {"triggerType":"button","triggerText":"Watch Video","triggerIcon":"fas fa-play","modalSize":"large"} -->
<div class="wp-block-phenix-popup-modals">
  <button class="btn primary modal-trigger" data-modal-id="video-modal">
    <i class="fas fa-play me-10"></i>Watch Video
  </button>
  <div id="video-modal" class="px-modal size-lg">
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <div class="modal-body pd-0">
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- /wp:phenix/popup-modals -->
```

## Best Practices

1. **Clear Purpose**: Ensure each modal has a clear purpose and communicates it effectively

2. **Appropriate Sizing**: Choose modal sizes appropriate for the content they contain

3. **Accessible Design**: Include proper headings, focus management, and keyboard navigation

4. **Mobile Consideration**: Test modals on mobile devices and consider using fullscreen mode

5. **Performance**: Be mindful of loading large content in modals, especially for auto-triggered ones

6. **User Control**: Always provide clear ways to close the modal (close button, ESC key, backdrop click)

7. **Judicious Use**: Don't overuse modals as they can interrupt the user experience

## Related Blocks

- [Button Block](./button-block.md) - For creating custom modal triggers
- [Media Element Block](./media-element-block.md) - For including media in modals
- [Group Block](./group-block.md) - For organizing content within modals
