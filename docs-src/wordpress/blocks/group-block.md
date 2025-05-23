# Group Block

## Overview

The Group Block is a versatile layout component in the Phenix Design System that allows you to group multiple blocks together and apply shared styling, animations, and behaviors. Unlike the Container Block, which has predefined width constraints, the Group Block is more flexible and can be used for various layout needs without imposing specific width limitations.

<!-- Image placeholder for Group Block -->

## Key Features

- Groups multiple blocks together under a single parent element
- Provides shared styling and behavior for all contained blocks
- Supports flexbox layout options for arranging child elements
- Includes options for background, borders, shadows, and other styling
- Can be animated with viewport-based animations
- Supports responsive controls for different screen sizes

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Group" or find it in the "Phenix Blocks" category
3. Add the Group Block to your page
4. Add other blocks inside the group
5. Customize the group settings in the block sidebar

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| HTML Tag | Select the HTML element (div, section, article, etc.) |
| Flexbox Toggle | Enable/disable flexbox layout for direct children |
| Layout Controls | Access dropdown menus for flexbox settings |
| Alignment Controls | Set horizontal and vertical alignment of content |
| Margin & Padding | Quick access to spacing controls with responsive options |
| Position Settings | Configure position type and coordinates |
| Border Options | Configure border styles, widths, and colors |
| Effects Options | Add shadows, opacity, and other visual effects |

### Sidebar Controls

| Control | Description |
|---------|-------------|
| HTML ID | Set a custom ID for the group (useful for anchors) |
| Style Options | Enable/disable various styling features |
| Background | Set background color or image |
| Text Color | Set text color for all content in the group |
| Typography | Configure text styling options |
| Border Radius | Add rounded corners to the group |

### Animation Controls (Sidebar)

| Control | Description |
|---------|-------------|
| Animation Type | Select from various animation effects |
| Animation Trigger | Choose when the animation plays (on load, on scroll, etc.) |
| Animation Duration | Set how long the animation lasts |
| Animation Delay | Set a delay before the animation starts |

### Responsive Options

The Group Block includes responsive controls for:

- Display (show/hide on different devices)
- Margin (spacing outside the group)
- Padding (spacing inside the group)
- Position (relative, absolute, fixed)

## Examples

### Basic Group

To create a simple group containing multiple blocks:

1. Add the Group block to your page
2. Click the "Add block" button inside the group
3. Add a Heading block and enter your heading text
4. Add a Paragraph block and enter your paragraph text
5. All blocks will be contained within the group and can be moved together

### Styled Group

To create a group with custom styling:

1. Add the Group block to your page
2. In the sidebar settings, locate the "Background Color" option
3. Set a background color (e.g., #f5f5f5)
4. Set the "Border Radius" to "Medium"
5. Add padding using the spacing controls in the toolbar
6. Add your content blocks inside the group

### Flexbox Group

To create a group using flexbox to arrange its children:

1. Add the Group block to your page
2. In the toolbar, enable the Flexbox toggle
3. Open the Layout Controls dropdown
4. Set the flex direction to "Row"
5. Set vertical alignment to "Center"
6. Set horizontal alignment to "Space Between"
7. Add your content blocks inside the group

### Animated Group

To create a group with animation effects:

1. Add the Group block to your page
2. In the sidebar settings, locate the "Animation" section
3. Select "Fade In" as the animation type
4. Set the animation duration to "1s"
5. Set the animation delay to "0.2s"
6. Add your content blocks inside the group
7. Preview the page to see the animation effect

## Best Practices

1. **Logical Grouping**: Use Group Blocks to organize related content that should be treated as a single unit

2. **Styling Efficiency**: Apply shared styles to the Group Block instead of individually styling each child block

3. **Responsive Design**: Configure the group's responsive behavior to ensure proper display on all devices

4. **Animation Restraint**: Use animations sparingly and purposefully to enhance user experience without causing distraction

5. **Nesting**: You can nest Group Blocks for complex layouts, but avoid excessive nesting which can complicate the structure

## Related Blocks

- [Container Block](./container-block.md) - Similar to Group but with predefined width constraints
- [Grid Row Block](./grid-row-block.md) - For creating grid-based layouts
- [Grid Column Block](./grid-column-block.md) - For creating column-based layouts within rows

