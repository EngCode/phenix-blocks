# Popup Modals Block

## Overview

The Popup Modals Block is a versatile component in the Phenix Design System that allows you to create customizable modal dialogs. These modals can be triggered by various elements and can contain any type of content, making them ideal for displaying additional information, forms, images, or other interactive elements without navigating away from the current page.

The block creates a full-screen overlay with a customizable content area that can be styled to match your design requirements. Each modal requires a unique ID for proper triggering and functionality.

## Key Features

- Create responsive modal dialogs with customizable content
- Flexible positioning and alignment options
- Customizable backdrop for the modal overlay
- Support for any content type within the modal (text, images, forms, etc.)
- Automatic close button integration
- Accessibility features for keyboard navigation
- Responsive design that works across all device sizes

## Block Structure

The Popup Modals Block consists of two main components:

1. **Modal Container**: A full-screen overlay that serves as the backdrop and container for the modal
2. **Modal Content**: A customizable content area that contains your information and a close button

When added to a page, the block automatically includes a close button in the top-right corner of the content area for easy dismissal.

## Block Settings

### General Settings

| Option | Description |
|--------|-------------|
| Modal ID | Sets a unique identifier for the modal, which is used for triggering the modal from buttons or links |

### Style Options

The Popup Modals Block includes comprehensive styling options through the Phenix Design System:

| Category | Available Options |
|----------|-------------------|
| Layout | Flexbox properties, alignment, positioning |
| Spacing | Padding, margins |
| Typography | Text size, weight, alignment, color |
| Background | Colors, gradients |
| Border | Width, style, color, radius |
| Effects | Shadows, opacity |

### Responsive Controls

All style options can be customized for different screen sizes:

- Default (all screens)
- Medium devices (tablets)
- Large devices (desktops)
- Extra large devices (large screens)

## How to Use

### Adding a Popup Modal

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Popup/Modal" or find it in the "Phenix Blocks" category
3. Add the block to your page
4. Set a unique Modal ID in the block settings panel
5. Customize the content and appearance using the block tools

### Creating a Trigger

To open the modal, you need to create a trigger element (typically a button) with the following attributes:

- `data-modal="your-modal-id"` - Points to the Modal ID you set
- `href="#your-modal-id"` - Alternative method using anchor links

Example using a Button Block:

```html
<!-- wp:phenix/button {
  "label":"Open Modal",
  "attributes":{"data-modal":"my-popup-1"}
} /-->
```

## Implementation Details

### HTML Structure

When implemented, the Popup Modals Block generates the following HTML structure:

```html
<div id="my-popup-1" class="px-modal hidden w-fluid h-100vh flexbox px-popup pos-top-0 position-fx pos-start-0 px-scrollbar z-index-modal overflow-y-auto">
  <div class="model-content mgx-auto col position-rv z-index-10 bg-white">
    <button class="modal-close btn square tooltip-bottom far fa-times fs-18 bg-danger radius-circle position-ab z-index-modal" style="top:15px;right:15px;"></button>
    <!-- Your content here -->
  </div>
</div>
```

### JavaScript Integration

The Popup Modals Block integrates with the Phenix JavaScript framework through the `.popup()` method, which provides the following functionality:

- Modal triggering through buttons, links, or programmatic calls
- Opening/closing animations
- Backdrop click handling
- Keyboard accessibility (ESC key support)
- Scroll locking when modal is open
- Support for lightbox functionality for images and media

## Trigger Options

The Popup Modals Block supports several triggering methods through the Phenix JavaScript framework:

| Trigger Attribute | Description |
|------------------|-------------|
| `data-modal="modal-id"` | Standard trigger that opens the modal with the specified ID |
| `href="#modal-id"` | Link-based trigger (except for links with `target="_blank"`) |
| `data-type="lightbox"` | Configures the modal for lightbox functionality |
| `data-onload="true"` | Opens the modal automatically when the page loads |
| `data-timeout="2000"` | Sets a delay (in milliseconds) before showing the modal |
| `data-showon="#element-id"` | Shows the modal when a specific element comes into view |
| `data-hash="true"` | Opens the modal if the URL hash matches the modal ID |

## Styling Options

### Modal Container

The modal container supports all standard Phenix Design System styling options, including:

- **Flexbox Properties**: Control the alignment and distribution of content
- **Background**: Set background colors or gradients for the modal overlay
- **Spacing**: Add padding and margins to create proper spacing
- **Typography**: Control text appearance within the modal

### Modal Content

The content area is implemented as a Group Block with default styling that can be customized:

- Default maximum width of 640px
- White background
- 30px padding on all sides
- Relative positioning with z-index for proper stacking

## Best Practices

1. **Unique IDs**: Always use unique IDs for each modal to prevent conflicts

2. **Appropriate Content**: Use modals for supplementary content that doesn't disrupt the main user flow

3. **Accessible Design**: Ensure modals are keyboard accessible and screen reader friendly

4. **Mobile Optimization**: Test modal appearance and usability on mobile devices

5. **Clear Close Options**: Always include a visible close button and maintain backdrop click functionality

6. **Performance**: Be mindful of loading large content in modals to maintain performance

7. **Consistent Design**: Maintain design consistency with your site's overall aesthetic

## Related Blocks

- [Button Block](./button-block.md) - For creating custom modal triggers
- [Group Block](./group-block.md) - For organizing content within modals
- [Icon Element Block](./icon-element-block.md) - For adding icons to modal content or triggers

