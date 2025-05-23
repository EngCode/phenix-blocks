# Container Block

## Overview

The Container Block is one of the most important blocks in the Phenix Design System. It's used to create layout sections with content wrapped within pre-defined maximum boundaries that adapt to different screen sizes. The Container Block is essential for creating proper responsive layouts and is typically used in conjunction with Grid Row blocks.

<!-- Image placeholder for Container Block -->

## Key Features

- Creates a responsive container with appropriate padding and margins
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

- Display (show/hide on different devices)
- Margin (spacing outside the container)
- Padding (spacing inside the container)
- Position (relative, absolute, fixed)

## Examples

### Basic Container

To create a standard centered container with default maximum width:

1. Add the Container block to your page
2. Add your content blocks inside the container
3. The container will automatically center your content with appropriate maximum width

### Fluid Container

To create a full-width container that spans the entire width of the viewport:

1. Add the Container block to your page
2. In the toolbar, click the container type toggle to switch to "Fluid"
3. Add your content blocks inside the container
4. The container will span the full width of the screen

### Custom Width Container

To create a container with a custom maximum width:

1. Add the Container block to your page
2. In the sidebar settings, locate the "Custom Width" option
3. Enter your desired width (e.g., "800px")
4. Add your content blocks inside the container

### Container with Flexbox Layout

To create a container using flexbox to arrange its children:

1. Add the Container block to your page
2. In the toolbar, open the Layout Controls dropdown
3. Enable the Flexbox option
4. Set the flex direction to "Row"
5. Set vertical alignment to "Center"
6. Set horizontal alignment to "Space Between"
7. Add your content blocks inside the container

## Best Practices

1. **Start with a Container**: Begin most page layouts with a Container Block to ensure proper content width and spacing

2. **Nesting**: You can nest containers for complex layouts, but avoid excessive nesting which can complicate the structure

3. **Combine with Grid**: Use Container Blocks with Grid Row and Grid Column blocks for responsive grid layouts

4. **Responsive Testing**: Always test your container layouts across different screen sizes

5. **Custom Widths**: Use custom widths sparingly and prefer the built-in responsive widths when possible

## Related Blocks

- [Grid Row Block](./grid-row-block.md) - Used inside containers to create row layouts
- [Grid Column Block](./grid-column-block.md) - Used inside grid rows to create column layouts
- [Group Block](./group-block.md) - Similar to container but without the width constraints

