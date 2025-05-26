# Container Block

## Overview

The Container Block provides a flexible wrapper component with extensive layout and styling controls. Through its toolbar and sidebar panels, users can configure semantic structure, responsive behavior, and advanced styling options.

## Editor Interface

### Quick Settings Toolbar

1. **HTML Tag Selector**:
   - Semantic elements dropdown:
     - div (default)
     - main
     - aside
     - header
     - footer
     - article
     - section

2. **Container Size**:
   - Size presets selection
   - Default/custom size options

3. **Section Mode Toggle**:
   - Enables inner wrapper container
   - Visual indicator when active
   - Affects class placement

4. **Flexbox Layout**:
   - Toggle flexbox mode
   - When enabled, expands to show:
     - Direction controls
     - Alignment settings
     - Responsive options per breakpoint
     - Disable flexbox option

5. **Size Controls**:
   - Width/height settings
   - Min/max dimensions
   - Responsive size adjustments

6. **Style Options**:
   - Text colors
   - Background settings
   - Visual style controls

7. **Typography Settings**:
   - Font properties
   - Text alignment
   - Responsive typography

8. **Additional Controls**:
   - Animations (when enabled)
   - Padding controls
   - Margin settings
   - Border customization
   - Position adjustments
   - Effects configuration
- Automatically adjusts width based on screen size
- Can be set to fluid (full-width) or fixed width
- Supports custom width settings
- Can be centered or aligned to edges
- Supports all standard Phenix block styling options

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Container" or find it in the "Phenix Blocks" category
3. Add the Container Block to your page
4. Add content inside the container (typically Grid Row blocks)
5. Customize the container settings in the block sidebar

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| HTML Tag | Select semantic element (div, main, aside, etc.) |
| Container Size | - Standard (1200px max)<br>- Fluid (100% width)<br>- XS (360px - 480px)<br>- SM (567px - 640px)<br>- MD (768px - 1024px)<br>- LG/XL (1200px responsive) |
| Section Mode | Toggle inner wrapper mode |
| Typography | Text styling options |
| Border | Edge and radius controls |
| Effects | Visual enhancements |
| Position | Layout positioning |

### Sidebar Controls

| Panel | Options |
|---------|-------------|
| General Settings | - HTML ID for anchoring<br>- Container type<br>- Size selection<br>- Feature toggles |
| Typography | - Font family selection<br>- Text size and weight<br>- Line height controls<br>- Text alignment |
| Style Options | - Background settings<br>- Border controls<br>- Position options<br>- Effects configuration |
| Responsive | - Device visibility<br>- Screen-specific styles<br>- Breakpoint adjustments |

### Toolbar Controls

| Control | Description |
|---------|-------------|
| HTML Tag | Select the HTML element (div, section, article, etc.) |
| Container Type | Choose between fixed-width or fluid (full-width) container |
| Section Toggle | Toggle between regular container and section mode |
| Layout Controls | Access dropdown menus for flexbox, margin, padding, and position settings |
| Flexbox Alignment | Control horizontal and vertical alignment of content |
| Border Options | Configure border styles, widths, and colors |
| Effects Options | Add shadows, opacity, and other visual effects |

### Sidebar Controls

| Control | Description |
|---------|-------------|
| HTML ID | Set a custom ID for the container (useful for anchors) |
| Style Options | Enable/disable various styling features |
| Custom Width | Set a custom maximum width for the container |
| Typography | Configure text styling options |
| Animation | Add entrance, hover, or scroll animations |

### Responsive Options

The Container Block includes responsive controls for:
6. Set horizontal alignment to "Space Between"
7. Add your content blocks inside the container

## Best Practices

1. **Structure Selection**:
   - Use semantic HTML tags appropriately
   - Enable section mode for major layout segments
   - Maintain ARIA labels for accessibility
   - Consider content hierarchy

2. **Layout Controls**:
   - Start with container size selection
   - Enable flexbox only when needed for layout
   - Configure responsive behavior early
   - Use built-in spacing controls

3. **Responsive Strategy**:
   - Set base styles in SM breakpoint
   - Adjust for tablets in MD settings
   - Fine-tune desktop view in LG/XL
   - Test all screen transitions

4. **Style Management**:
   - Use the style panel for visual settings
   - Apply typography consistently
   - Configure animations thoughtfully
   - Maintain spacing hierarchy

5. **Performance Tips**:
   - Minimize nested containers
   - Use section mode efficiently
   - Enable only needed features
   - Keep styles consolidated

1. **Start with a Container**: Begin most page layouts with a Container Block to ensure proper content width and spacing

2. **Nesting**: You can nest containers for complex layouts, but avoid excessive nesting which can complicate the structure

3. **Combine with Grid**: Use Container Blocks with Grid Row and Grid Column blocks for responsive grid layouts

4. **Responsive Testing**: Always test your container layouts across different screen sizes

5. **Custom Widths**: Use custom widths sparingly and prefer the built-in responsive widths when possible

## Related Blocks

- [Grid Row Block](./grid-row-block.md) - Used inside containers to create row layouts
- [Grid Column Block](./grid-column-block.md) - Used inside grid rows to create column layouts
- [Group Block](./group-block.md) - Similar to container but without the width constraints

