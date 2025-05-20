# Group Block

## Overview

The Group Block is a versatile layout component in the Phenix Design System that allows you to group multiple blocks together and apply shared styling, animations, and behaviors. Unlike the Container Block, which has predefined width constraints, the Group Block is more flexible and can be used for various layout needs without imposing specific width limitations.

![Group Block](../../../assets/images/wordpress/group-block.png)

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

### Layout Options

| Option | Description |
|--------|-------------|
| Flexbox | Enable flexbox layout for direct children |
| Direction | Set the flex direction (row, column) |
| Wrap | Control how items wrap when they exceed the group width |
| Horizontal Alignment | Align items horizontally (start, center, end, between, around, evenly) |
| Vertical Alignment | Align items vertically (start, center, end, stretch) |
| Gap | Set spacing between flex items |

### Style Options

| Option | Description |
|--------|-------------|
| Background | Set background color or image |
| Text Color | Set text color for all content in the group |
| Border | Add borders with custom color, width, and style |
| Border Radius | Add rounded corners to the group |
| Shadow | Add box shadow with custom settings |
| Padding | Add internal spacing |
| Margin | Add external spacing |

### Animation Options

| Option | Description |
|--------|-------------|
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

A simple group containing multiple blocks:

```html
<!-- wp:phenix/group -->
<div class="px-group">
  <!-- wp:heading -->
  <h2>Group Heading</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>This is a paragraph inside a group.</p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:phenix/group -->
```

### Styled Group

A group with custom styling:

```html
<!-- wp:phenix/group {"backgroundColor":"#f5f5f5","borderRadius":"md","padding":"md"} -->
<div class="px-group bg-color radius-md pdy-15 pdx-25" style="--bg-color:#f5f5f5">
  <!-- Block content goes here -->
</div>
<!-- /wp:phenix/group -->
```

### Flexbox Group

A group using flexbox to arrange its children:

```html
<!-- wp:phenix/group {"flexbox":true,"flexDirection":"row","alignItems":"center","justifyContent":"space-between"} -->
<div class="px-group flexbox row align-items-center justify-between">
  <!-- Block content goes here -->
</div>
<!-- /wp:phenix/group -->
```

### Animated Group

A group with animation effects:

```html
<!-- wp:phenix/group {"animation":"fade-in","animationDuration":"1s","animationDelay":"0.2s"} -->
<div class="px-group" data-animation="fade-in" data-duration="1s" data-delay="0.2s">
  <!-- Block content goes here -->
</div>
<!-- /wp:phenix/group -->
```

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
