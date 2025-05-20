# Responsive Padding

## Overview

The Responsive Padding control in the Phenix Design System allows you to add space inside blocks with precise control for different screen sizes. Unlike margins that create space outside elements, padding creates space inside elements between their content and border. This feature helps you create well-spaced layouts that adapt seamlessly across devices without writing custom CSS.

## Key Features

- **Individual control** for top, right, bottom, and left padding
- **Responsive settings** for different screen sizes
- **Preset size options** for consistent spacing
- **Custom values** for pixel-perfect adjustments
- **Affects clickable area** of interactive elements

## How Padding Works

Padding creates space inside an element, between its content and its border. In the Phenix Design System:

- **Padding Top**: Creates space above the content, inside the element
- **Padding Right**: Creates space to the right of the content, inside the element
- **Padding Bottom**: Creates space below the content, inside the element
- **Padding Left**: Creates space to the left of the content, inside the element

![Padding Diagram](../../../assets/images/wordpress/padding-diagram.png)

## Available Controls

### Padding Presets

The Responsive Padding panel provides preset options for quick application:

| Preset | Value | Description |
|--------|-------|-------------|
| None | 0 | No padding |
| XS | 0.25rem (4px) | Extra small padding |
| SM | 0.5rem (8px) | Small padding |
| MD | 1rem (16px) | Medium padding |
| LG | 1.5rem (24px) | Large padding |
| XL | 2rem (32px) | Extra large padding |
| XXL | 3rem (48px) | Double extra large padding |

### Direction Controls

You can apply padding to specific sides of an element:

| Control | Description |
|---------|-------------|
| All Sides | Apply the same padding to all sides |
| Top | Apply padding only to the top |
| Right | Apply padding only to the right |
| Bottom | Apply padding only to the bottom |
| Left | Apply padding only to the left |
| Horizontal | Apply padding to left and right sides |
| Vertical | Apply padding to top and bottom sides |

### Custom Values

For precise control, you can enter custom padding values:

- Use pixel values (e.g., `10px`, `25px`)
- Use rem values (e.g., `1.5rem`, `2.25rem`)
- Use percentage values (e.g., `5%`, `10%`)
- Use viewport-relative values (e.g., `2vh`, `3vw`)

## Responsive Controls

The Responsive Padding control allows you to set different padding for various screen sizes:

| Breakpoint | Description |
|------------|-------------|
| Default | Applied to all screen sizes unless overridden |
| Mobile | Applied to screens smaller than 768px |
| Tablet | Applied to screens 768px-991px |
| Desktop | Applied to screens 992px-1199px |
| Large Desktop | Applied to screens 1200px and larger |

To set responsive padding:

1. Select the block you want to modify
2. Open the Responsive Padding panel in the sidebar
3. Click the responsive toggle button to switch between breakpoints
4. Set the desired padding for each breakpoint

## Usage Examples

### Creating a Card Component

1. Select a Group or Container block
2. Open the Responsive Padding panel
3. Set All Sides padding to "MD" (1rem/16px)
4. For mobile devices, switch to Mobile breakpoint and adjust to "SM" (0.5rem/8px) if needed

### Adjusting Button Padding

1. Select a Button block
2. Open the Responsive Padding panel
3. Set Horizontal padding to "MD" (1rem/16px)
4. Set Vertical padding to "SM" (0.5rem/8px)
5. Adjust for different breakpoints as needed

### Creating Section Spacing

1. Select a Container or Section block
2. Open the Responsive Padding panel
3. Set Vertical padding to "XL" (2rem/32px)
4. For mobile devices, switch to Mobile breakpoint and adjust to "LG" (1.5rem/24px)

## Best Practices

1. **Use consistent spacing** throughout your design for visual harmony
2. **Start with mobile layouts** and adjust padding for larger screens
3. **Consider content density** - use less padding on mobile to maximize content space
4. **Balance padding with margins** for complete spacing control
5. **Use padding for clickable elements** to increase the touch target area
6. **Consider text readability** when setting horizontal padding for text containers

## Differences Between Padding and Margin

| Padding | Margin |
|---------|--------|
| Creates space inside an element | Creates space outside an element |
| Affects the element's clickable area | Does not affect the element's clickable area |
| Includes background color/image | Does not include background color/image |
| Cannot use negative values | Can use negative values for overlapping effects |
| Does not collapse | Can collapse between adjacent elements |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Padding not visible | Check if the element has a background color or border to make padding visible |
| Content appears cut off | Ensure padding is sufficient for the content size |
| Inconsistent spacing | Verify you've set padding for all relevant breakpoints |
| Element too large on mobile | Reduce padding values for smaller screen sizes |

## Related Controls

- [Responsive Margin](./responsive-margin.md)
- [Layout Options](./layout-options.md)
- [Border Radius](./border-radius.md)
- [Styles Options](./styles-options.md)
