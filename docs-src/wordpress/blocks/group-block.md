# Group Block

## Overview

The Group Block is a versatile layout component in the Phenix Design System that provides a flexible wrapper for grouping content elements. Unlike the Container Block, which focuses on width constraints and page structure, the Group Block is designed for content organization and styling flexibility. It can function as a standard wrapper or as a flexbox container, making it ideal for creating content sections, cards, panels, and other grouped elements.

## Key Features

### Structure Options

- **HTML Tag Selection**: Choose from semantic HTML elements including div (default), section, article, aside, header, and footer
- **Flexbox Container**: Toggle to enable flexbox layout for direct children with comprehensive layout controls
- **HTML ID**: Custom identifier for anchoring and navigation targeting
- **Semantic Structure**: Create meaningful content groupings with appropriate HTML elements

### Layout Capabilities

- **Flexbox Controls**: When flexbox is enabled, gain access to:
  - Direction settings (row, column, reverse options)
  - Alignment controls (horizontal and vertical positioning)
  - Distribution options (start, center, end, space-between, space-around)
  - Wrap behavior (wrap, nowrap, reverse)
  - Gap settings for spacing between items

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
- **Visibility Options**: Show or hide the group at specific screen sizes

## How to Use

1. Add the Group Block to your page
2. Select the appropriate HTML tag from the toolbar dropdown (div, section, article, etc.)
3. Enable flexbox mode if you need layout control for direct children
4. Configure additional styling options as needed:
   - Set background colors or gradients
   - Add padding and margin
   - Configure borders and effects
5. Add content blocks inside the group
6. Adjust responsive settings for different screen sizes if necessary

## Block Settings

### Toolbar Controls

The Group Block provides the following controls in the top toolbar:

| Control | Description |
|---------|-------------|
| HTML Tag | Dropdown to select the semantic HTML element (div, section, article, aside, header, footer) |
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
| Self Align | Dropdown selectors for vertical alignment within parent flexbox containers (start, center, end) with responsive options |

### Technical Implementation

The Group Block is implemented with the following key attributes:

```js
// Core attributes
id: { type: "string", default: "" },
tagName: { type: "string", default: "div" },
isFlexbox: { type: "boolean", default: false },

// Style-related objects
flexbox: { type: "object", default: {} },
typography: { type: "object", default: {} },
style: { type: "object", default: {} },
responsive: { type: "object", default: {} }
```

The block renders as the selected HTML tag with appropriate classes:

```jsx
<TagName {...blockProps}>
  <div {...innerBlocksProps}></div>
</TagName>
```

When flexbox mode is enabled, the inner div receives flexbox-related classes to control the layout of child elements.

## Common Use Cases

### Content Section

To create a styled content section with background and spacing:

1. Add a Group Block to your page
2. Select "section" as the HTML tag
3. Configure background color or gradient
4. Add appropriate padding
5. Add your content blocks inside the group

### Card Component

To create a card-like component with border and shadow:

1. Add a Group Block to your page
2. Enable style support and border options
3. Configure border, border radius, and shadow effects
4. Add padding for internal spacing
5. Add heading, text, and other content inside the group

### Flexbox Layout Container

To create a flexible layout for arranging content:

1. Add a Group Block to your page
2. Enable the Flexbox toggle
3. Configure direction (row or column) and alignment options
4. Add content blocks that will be arranged according to the flexbox settings

### Responsive Content Group

To create content that changes layout across different screen sizes:

1. Add a Group Block to your page
2. Configure the base layout for mobile devices
3. Use the responsive tabs to adjust layout for tablet, laptop, and desktop
4. Add content that will adapt to the responsive settings

## Style Features

The Group Block includes comprehensive styling options when style support is enabled:

### Typography Options

- **Font Family**: Choose from primary (Poppins), secondary (Roboto), or style fonts
- **Font Weight**: Select from thin (100) to black (900)
- **Line Height**: Adjust from 100% to 180%
- **Text Alignment**: Control text alignment with responsive options
- **Text Color**: Apply color from the Phenix Design System palette

### Background Options

- **Colors**: Select from the design system color palette including primary, secondary, success, danger, warning, info, and neutral colors
- **Gradients**: Apply preset gradients with rotation options (0° to 180°)
- **Position**: Control background position with 9-point positioning
- **Animations**: Add movement effects including X/Y movement, zooming, and gradient rotation
- **Overlay**: Apply dark, light, or custom overlay effects

### Border Options

- **Border Style**: Choose from solid, dashed, or dotted
- **Border Width**: Set width per side (top, right, bottom, left)
- **Border Color**: Select from the design system color palette
- **Border Radius**: Apply rounded corners with per-corner control

### Effects Options

- **Opacity**: Control element transparency
- **Box Shadows**: Apply shadow effects with various presets
- **Custom Effects**: Apply additional visual enhancements

## Best Practices

### Semantic Structure

- Choose the appropriate HTML tag based on content purpose (div for general grouping, section for thematic content, article for self-contained content)
- Use the HTML ID field to create anchor points for navigation
- Maintain a logical hierarchy in your document structure

### Layout Strategy

- Use the Group Block for content organization rather than page structure (use Container Block for page structure)
- Enable flexbox only when you need to control the arrangement of direct children
- Use the built-in responsive controls to adjust layout across different screen sizes

### Styling Approach

- Enable only the style features you need to keep the editor interface focused
- Apply consistent spacing using the padding and margin controls
- Use the typography controls to maintain text styling consistency
- Configure responsive settings starting from mobile and working up to larger screens

## Related Blocks

- [Container Block](./container-block.md) - For page structure and width constraints
- [Grid Row Block](./grid-row-block.md) - For creating grid-based layouts
- [Grid Column Block](./grid-column-block.md) - For column-based content within grid rows
- [Dynamic Query Block](./dynamic-query-block.md) - Can be wrapped in groups for styled dynamic content
- Other style options

## Examples

### Basic Container

To create a standard group:

1. Add the Group block to your page
2. Select the HTML tag from the toolbar dropdown
3. Set an HTML ID if needed for anchoring
4. Enable desired style features in sidebar
5. Add content blocks inside

### Advanced Container

To create a fully featured group:

1. Add the Group block to your page
2. Enable needed features in Style Options:
   - Typography support
   - Border controls
   - Position settings
   - Effects options
3. Configure screen-specific styles
4. Add content and customize per breakpoint

### Flexbox Container

To create a flexbox layout:

1. Add the Group block to your page
2. Enable the flexbox mode
3. Configure flexbox properties in the toolbar
4. Add child blocks to be arranged

### Styled Container

To add custom styling:

1. Enable style support in the sidebar panel
2. Configure background colors or gradients
3. Add padding and margin as needed
4. Set border styles and effects if required
5. Adjust typography settings for consistent text appearance

## Best Practices

1. **Semantic HTML**: 
   - Use section for thematic grouping
   - Use article for self-contained content
   - Use aside for complementary content
   - Use header/footer for sectioning content

2. **Typography Hierarchy**:
   - Use primary font for main content
   - Use secondary font for supporting text
   - Use style font for decorative elements
   - Maintain consistent line heights

3. **Color Strategy**:
   - Use component-level colors for UI consistency
   - Apply brand colors strategically
   - Use gradients for visual hierarchy
   - Consider overlay effects for contrast

4. **Responsive Design**:
   - Start with mobile-first styles
   - Use breakpoint controls purposefully
   - Adjust typography per screen size
   - Test flexbox layouts across devices

5. **Performance**:
   - Enable only needed style features
   - Use inheritance for common styles
   - Optimize background images
   - Minimize animation usage

6. **Accessibility**:
   - Choose semantic HTML elements
   - Maintain proper color contrast
   - Use appropriate font sizes
   - Consider animation effects carefully

## Related Blocks

- [Container Block](./container-block.md) - For page structure and width constraints
- [Grid Row Block](./grid-row-block.md) - For creating grid-based layouts
- [Grid Column Block](./grid-column-block.md) - For column-based content within grid rows
- [Dynamic Query Block](./dynamic-query-block.md) - Can be wrapped in groups for styled dynamic content
