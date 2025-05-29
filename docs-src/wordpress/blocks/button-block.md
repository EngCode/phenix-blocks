# Button Block

## Overview

The Button Block is a versatile interactive component in the Phenix Design System that provides multiple configuration options for creating call-to-action elements. It can be implemented as a standard button, a button with icon, or an icon-only button with tooltip. The Button Block supports various interactive functionalities including URL linking, lightbox media viewing, and modal/menu triggering, making it a fundamental element for user interaction within your WordPress site.

## Key Features

### Button Types

- **Default Button**: Standard text-based button for primary actions
- **Text with Icon**: Combined text and icon button for enhanced visual cues
- **Icon Only**: Square button with tooltip for compact UI elements

### Interactive Options

- **URL Linking**: Convert the button to a link with customizable URL and new tab option
- **Lightbox Integration**: Trigger media viewing in a lightbox overlay with support for:
  - Image galleries
  - Video playback
  - Embedded content
- **Trigger Functionality**: Activate interactive elements with:
  - Modal window triggers (via data-modal attribute)
  - Menu toggles (via data-id attribute)

### Style Capabilities

- **Size Options**: Five predefined sizes from tiny to extra-large with responsive control
- **Outline Style**: Toggle between filled and outline button styles
- **Custom Hover**: Define separate styling for hover state
- **Icon Controls**: When using icons:
  - Icon size adjustment
  - Position control (start/end)
  - Responsive icon behavior
  - Icon-only mode with tooltip

### Typography Features

- **Font Control**: Complete typography settings including font family, weight, and size
- **Responsive Text**: Adjust text properties across different screen sizes
- **Text Styling**: Apply color, alignment, and decorative elements

### Advanced Styling

- **Color System**: Access to the complete Phenix Design System color palette
- **Border Options**: Customizable border style, width, color, and radius
- **Spacing Control**: Precise padding and margin settings with responsive options
- **Position Settings**: Control button placement with position type and coordinates
- **Visual Effects**: Apply shadows, opacity changes, and other visual enhancements

## How to Use

1. Add the Button Block to your page:
   - In the WordPress editor, click the "+" button to add a new block
   - Search for "Button" or find it in the "Phenix Blocks" category

2. Configure the button type:
   - In the sidebar panel, select from Default, Text/Icon, or Icon-only
   - For icon buttons, click the icon button in the toolbar to select an icon

3. Set the button text:
   - Click on the button to edit the text directly in the editor
   - For icon-only buttons, set a label for accessibility and tooltip display

4. Style the button:
   - Use the Style Options dropdown in the toolbar to set colors and backgrounds
   - Toggle the outline style with the outline button in the toolbar
   - Configure typography settings using the Typography dropdown

5. Add interactivity (optional):
   - Click the link icon to convert the button to a link
   - Click the lightbox icon to enable lightbox functionality
   - Use the Trigger Options panel in the sidebar to set up modal or menu triggers

6. Configure responsive behavior:
   - Use the Size dropdown in the sidebar to set different sizes for each breakpoint
   - Configure responsive typography and spacing as needed

## Block Settings

### Toolbar Controls

The Button Block provides the following controls in the top toolbar:

| Control | Description |
|---------|-------------|
| Button Icon | When using Text/Icon or Icon-only buttons, provides icon selection, size options, and position control |
| Style Options | Dropdown for colors, backgrounds, and gradients with access to the Phenix Design System color palette |
| Typography Options | Dropdown for font family, weight, size, and other text styling options with responsive controls |
| Size Options | Dropdown for width/height settings with responsive options |
| URL Options | When link is enabled, provides URL input, page selection, and new tab toggle |
| Custom Hover Style | Toggle button to enable separate styling for hover state |
| Outline Style | Toggle button to switch between filled and outline button styles |
| Lightbox Options | When enabled, provides settings for media type, source URL, and upload options |
| Animation Options | When animations are enabled, provides settings for motion effects |
| Padding Options | When padding is enabled, provides controls for inner spacing with responsive options |
| Margin Options | When margin is enabled, provides controls for outer spacing with responsive options |
| Position Options | When position is enabled, provides controls for layout positioning with responsive options |
| Border Options | When border is enabled, provides controls for border style, width, color, and radius |
| Effects Options | When effects are enabled, provides controls for shadows, opacity, and other visual enhancements |

### Sidebar Panels

#### General Options Panel

| Control | Description |
|---------|-------------|
| Button Type | Dropdown to select between Default, Text/Icon, or Icon-only button types |
| Size | Dropdown for button size with responsive options (tiny, small, medium, large, xlarge) |
| HTML ID | Text input for setting a custom ID (useful for targeting with JavaScript) |
| Button Label | For icon-only buttons, text input for the tooltip and accessibility label |
| Style Support | Toggle switches to enable/disable various styling features including animations, padding, margin, border, and effects |

#### Trigger Options Panel

| Control | Description |
|---------|-------------|
| Menu ID | Dropdown to select a menu to toggle when the button is clicked |
| Modal ID | Text input to specify a modal element ID to trigger when the button is clicked |

## Common Use Cases

### Standard Button

To create a basic button for primary actions:

1. Add the Button Block to your page
2. Enter your button text
3. Use the Style Options dropdown to set colors
4. Select an appropriate size from the Size dropdown
5. Configure URL if needed by clicking the link icon

### Icon Button

To create a button with both text and icon:

1. Add the Button Block to your page
2. In the sidebar, set the Button Type to "Text/Icon"
3. Click the Button Icon dropdown in the toolbar
4. Select your icon from the icon library
5. Configure icon options (size, position)
6. Enter your button text

### Icon-Only Button

To create a compact icon button with tooltip:

1. Add the Button Block to your page
2. In the sidebar, set the Button Type to "Icon Only"
3. Click the Button Icon dropdown in the toolbar
4. Select your icon from the icon library
5. Enter a label text (will appear as tooltip)
6. Configure size and styling as needed

### Lightbox Trigger Button

To create a button that opens media in a lightbox:

1. Add the Button Block to your page
2. Click the lightbox icon in the toolbar
3. Select the source type (image, video, embed)
4. Either upload media or enter a URL
5. Configure button styling as needed

### Modal Trigger Button

To create a button that triggers a modal dialog:

1. Add the Button Block to your page
2. Open the Trigger Options panel in the sidebar
3. Enter the target Modal ID in the Modal ID field
4. Style your button as needed

### Responsive Button

To create a button that adapts to different screen sizes:

1. Add the Button Block to your page
2. Configure the base size for mobile devices
3. Use the responsive tabs in the Size dropdown
4. Set different sizes for tablet (MD), laptop (LG), and desktop (XL)
5. Optionally adjust typography and spacing for each breakpoint

## Technical Implementation

The Button Block is implemented with the following key attributes:

```js
// Core attributes
id: { type: "string", default: "" },
label: { type: "html", default: "Button" },
type: { type: "string", default: "btn" },
size: { type: "string", default: "normal" },

// Interactive attributes
isLink: { type: "boolean", default: false },
inNewTab: { type: "boolean", default: false },
url: { type: "string", default: "#none" },

// Icon attributes
iconLabel: { type: "boolean", default: false },
iconEnd: { type: "boolean", default: false },
icon: { type: "string", default: "far fa-icons" },

// Lightbox attributes
isLightBox: { type: "boolean", default: false },
lightbox_type: { type: "string", default: "image" },

// Trigger attributes
data_id: { type: "string", default: "" },
data_modal: { type: "string", default: "" },

// Style-related objects
typography: { type: "object", default: {} },
style: { type: "object", default: {} },
responsive: { type: "object", default: {} }
```

The block renders as either a button or anchor element based on the `isLink` attribute:

```jsx
// In save function
const TagName = attributes.isLink ? "a" : "button";
return (
  <TagName {...blockProps}>
    {!attributes.type.includes("square") ? attributes.label : ""}
  </TagName>
);
```

## Best Practices

### Button Types

- Use default buttons for primary actions that require emphasis
- Use text/icon buttons when a visual cue helps clarify the action
- Reserve icon-only buttons for common actions with universally recognized icons
- Ensure icon-only buttons always have descriptive tooltip labels

### Size Selection

- Use tiny or small sizes for secondary or utility actions
- Use medium (default) size for standard actions
- Use large or extra-large sizes for primary calls-to-action
- Maintain consistent sizing hierarchy across your site

### Color Strategy

- Use the primary color for main actions
- Use secondary colors for alternative actions
- Use success/danger/warning colors for their semantic meanings
- Ensure sufficient contrast between text and background
- Apply the outline style for less prominent actions

### Responsive Design

- Start with the mobile layout first (default size)
- Configure tablet (MD), laptop (LG), and desktop (XL) sizes as needed
- Consider touch target sizes on mobile devices (minimum 44×44px)
- Test your buttons across different screen sizes

### Accessibility

- Provide meaningful text for screen readers
- Ensure icon-only buttons have descriptive labels
- Maintain sufficient color contrast (minimum 4.5:1 for text)
- Test keyboard navigation and focus states

## Related Blocks

- [Group Block](./group-block.md) - Can be used to create button groups
- [Container Block](./container-block.md) - Useful for creating button containers
- [Icon Element Block](./icon-element-block.md) - Alternative for standalone icons
