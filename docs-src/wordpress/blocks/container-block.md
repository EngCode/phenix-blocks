# Container Block

## Overview

The Container Block is a fundamental layout component in the Phenix Design System that provides a structured wrapper for content. It offers flexible width options, semantic HTML tag selection, and comprehensive styling capabilities. The block can function in standard mode or section mode, with the latter creating an inner wrapper for content.

## Key Features

### Structure Options

- **HTML Tag Selection**: Choose from semantic HTML elements including div (default), main, aside, header, footer, article, and section
- **Container Size**: Multiple preset width options including standard (1200px), fluid (100%), SM (576px), MD (768px), LG (1200px), and XL (1400px)
- **Section Mode**: Optional inner wrapper container that maintains content width while allowing full-width backgrounds
- **HTML ID**: Custom identifier for anchoring and navigation targeting

### Layout Capabilities

- **Flexbox Mode**: Toggle to enable flexbox layout for direct children with comprehensive controls:
  - Direction (row, column, reverse options)
  - Alignment (horizontal and vertical positioning)
  - Distribution (space-between, space-around, etc.)
  - Wrap behavior (wrap, nowrap, reverse)
  - Gap controls for spacing between items

### Style Features

- **Typography**: Complete text styling with font family, weight, size, line height, and alignment options
- **Background Options**: Colors, gradients, images with positioning and overlay capabilities
- **Spacing Controls**: Comprehensive padding and margin settings with per-side control
- **Border Settings**: Style, width, color, and radius with per-side customization
- **Effects**: Shadows, opacity, and other visual enhancements
- **Position Controls**: Relative, absolute, and fixed positioning with coordinates

### Responsive Design

- **Breakpoint-Specific Settings**: Configure different layouts for mobile, tablet, laptop, and desktop
- **Responsive Typography**: Adjust text properties per screen size
- **Adaptive Spacing**: Control margins and padding across breakpoints
- **Visibility Options**: Show or hide the container at specific screen sizes

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Container" or find it in the "Phenix Blocks" category
3. Add the Container Block to your page
4. Use the toolbar to select the HTML tag and container size
5. Toggle section mode if you need an inner wrapper
6. Enable flexbox mode if you need layout control for direct children
7. Add content blocks inside the container
8. Configure additional styling options in the sidebar as needed

## Block Settings

### Toolbar Controls

The Container Block provides the following controls in the top toolbar:

| Control | Description |
|---------|-------------|
| HTML Tag | Dropdown to select the semantic HTML element (div, main, aside, header, footer, article, section) |
| Container Size | Dropdown with preset width options: None (default), SM (container-sm), MD (container-md), LG (container), XL (container-xl), Full (container-fluid) |
| Section Mode | Toggle button that enables an inner wrapper container while allowing the outer container to extend full-width |
| Flexbox Toggle | Button to enable/disable flexbox layout for direct children |
| Flexbox Controls | When flexbox is enabled, provides dropdown access to direction, alignment, and distribution settings |
| Size Controls | Dropdown for width/height settings with responsive options |
| Margin Controls | Dropdown for setting outer spacing with responsive options |
| Padding Controls | Dropdown for setting inner spacing with responsive options |
| Position Controls | Dropdown for setting position type and coordinates |
| Border Controls | Dropdown for configuring border styles, widths, and colors |
| Effects Controls | Dropdown for adding shadows, opacity, and other visual effects |

### Sidebar Panels

#### General Options Panel

| Control | Description |
|---------|-------------|
| HTML ID | Text input for setting a custom ID (useful for anchors and JavaScript targeting) |
| Style Support | Toggle switches to enable/disable various styling features including animations, padding, margin, border, and effects |

#### Style Options

When style support is enabled, the following options become available:

| Feature | Available Controls |
|---------|-------------------|
| Typography | Font family, weight, size, line height, alignment, and text color with responsive options |
| Background | Colors, gradients, images with position, size, and overlay controls |
| Spacing | Margin and padding with per-side control and responsive options |
| Border | Style, width, color, and radius with per-side customization |
| Position | Type (relative, absolute, fixed) with coordinates and z-index |
| Effects | Opacity, shadows, and other visual enhancements |

### Technical Implementation

The Container Block is implemented with the following key attributes:

```js
// Core attributes
id: { type: "string", default: "" },
tagName: { type: "string", default: "div" },
size: { type: "string", default: "" },
isSection: { type: "boolean", default: false },
isFlexbox: { type: "boolean", default: false },

// Style-related objects
flexbox: { type: "object", default: {} },
typography: { type: "object", default: {} },
style: { type: "object", default: {} },
responsive: { type: "object", default: {} }
```

The block renders differently based on the `isSection` attribute:

```jsx
// When isSection is false
<TagName {...blockProps}>
  <InnerBlocks.Content />
</TagName>

// When isSection is true
<TagName {...blockProps}>
  <div className={renderProps.container.className}>
    <InnerBlocks.Content />
  </div>
</TagName>
```
## Common Use Cases

### Standard Content Container

The most common use of the Container Block is to create a centered content area with controlled width:

1. Add a Container Block to your page
2. Select the appropriate container size (typically LG for standard 1200px width)
3. Add your content blocks inside the container

### Full-Width Section with Contained Content

To create a full-width section with background while keeping content at a controlled width:

1. Add a Container Block to your page
2. Enable the Section Mode toggle in the toolbar
3. Apply background styling to the outer container
4. Add your content blocks inside the inner container

### Flexbox Layout Container

To create a flexible layout with controlled alignment and distribution:

1. Add a Container Block to your page
2. Enable the Flexbox toggle in the toolbar
3. Configure direction, alignment, and distribution options
4. Add child blocks that will be arranged according to the flexbox settings

## Best Practices

### Structure and Semantics

- Use appropriate HTML tags based on content purpose (e.g., `section` for thematic grouping, `article` for self-contained content)
- Enable Section Mode when you need full-width backgrounds with contained content
- Use the HTML ID field to create anchor points for navigation and deep linking
- Maintain a logical hierarchy of containers in your layout

### Layout Strategy

- Start with the appropriate container size based on your design requirements
- Enable flexbox only when you need to control the arrangement of direct children
- Use the built-in responsive controls to adjust layout across different screen sizes
- Combine Container Blocks with Grid Row and Grid Column blocks for complex layouts

### Styling Approach

- Enable only the style features you need to keep the editor interface focused
- Apply consistent spacing using the padding and margin controls
- Use the typography controls to maintain text styling consistency
- Configure responsive settings starting from mobile and working up to larger screens

### Performance Considerations

- Avoid excessive nesting of Container Blocks
- Use Section Mode efficiently to minimize DOM complexity
- Enable only the styling features you need
- Test your layouts across different screen sizes to ensure proper rendering

## Related Blocks

- [Grid Row Block](./grid-row-block.md) - Used inside containers to create responsive row layouts
- [Grid Column Block](./grid-column-block.md) - Used inside grid rows to create column-based layouts
- [Group Block](./group-block.md) - Similar to container but focused on grouping elements without width constraints
- [Dynamic Query Block](./dynamic-query-block.md) - Can be used inside containers to display dynamic content

