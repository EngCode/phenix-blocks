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

### Container Options

| Option | Description |
|--------|-------------|
| Container Type | Choose between fixed-width or fluid (full-width) container |
| Custom Width | Set a custom maximum width for the container |
| Alignment | Center the container or align it to the left/right |

### Layout Options

| Option | Description |
|--------|-------------|
| Flexbox | Enable flexbox layout for direct children |
| Direction | Set the flex direction (row, column) |
| Alignment | Control horizontal and vertical alignment |
| Gap | Set spacing between flex items |

### Responsive Options

The Container Block includes responsive controls for:

- Display (show/hide on different devices)
- Margin (spacing outside the container)
- Padding (spacing inside the container)
- Position (relative, absolute, fixed)

## Examples

### Basic Container

A standard centered container with default maximum width:

```html
<!-- wp:phenix/container -->
<div class="px-container">Content goes here</div>
<!-- /wp:phenix/container -->
```

### Fluid Container

A full-width container that spans the entire width of the viewport:

```html
<!-- wp:phenix/container {"isFluid":true} -->
<div class="px-container fluid">Full-width content</div>
<!-- /wp:phenix/container -->
```

### Custom Width Container

A container with a custom maximum width:

```html
<!-- wp:phenix/container {"customWidth":"800px"} -->
<div class="px-container" style="max-width:800px">Custom width content</div>
<!-- /wp:phenix/container -->
```

### Container with Flexbox Layout

A container using flexbox to arrange its children:

```html
<!-- wp:phenix/container {"flexbox":true,"flexDirection":"row","alignItems":"center","justifyContent":"space-between"} -->
<div class="px-container flexbox row align-items-center justify-between">Flex content</div>
<!-- /wp:phenix/container -->
```

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

