# Responsive Margin

## Overview

The Responsive Margin control in the Phenix Design System allows you to add space around blocks with precise control for different screen sizes. This powerful feature helps you create perfectly spaced layouts that adapt seamlessly across devices without writing custom CSS.

## Key Features

- **Individual control** for top, right, bottom, and left margins
- **Responsive settings** for different screen sizes
- **Negative margins** for advanced layout techniques
- **Preset size options** for consistent spacing
- **Custom values** for pixel-perfect adjustments

## How Margins Work

Margins create space around an element, pushing away adjacent elements. In the Phenix Design System:

- **Margin Top**: Creates space above the element
- **Margin Right**: Creates space to the right of the element
- **Margin Bottom**: Creates space below the element
- **Margin Left**: Creates space to the left of the element

<!-- Image placeholder for Margin Diagram -->

## Available Controls

### Margin Presets

The Responsive Margin panel provides preset options for quick application:

| Preset | Value | Description |
|--------|-------|-------------|
| None | 0 | No margin |
| XS | 0.25rem (4px) | Extra small margin |
| SM | 0.5rem (8px) | Small margin |
| MD | 1rem (16px) | Medium margin |
| LG | 1.5rem (24px) | Large margin |
| XL | 2rem (32px) | Extra large margin |
| XXL | 3rem (48px) | Double extra large margin |

### Direction Controls

You can apply margins to specific sides of an element:

| Control | Description |
|---------|-------------|
| All Sides | Apply the same margin to all sides |
| Top | Apply margin only to the top |
| Right | Apply margin only to the right |
| Bottom | Apply margin only to the bottom |
| Left | Apply margin only to the left |
| Horizontal | Apply margin to left and right sides |
| Vertical | Apply margin to top and bottom sides |

### Custom Values

For precise control, you can enter custom margin values:

- Use pixel values (e.g., `10px`, `25px`)
- Use rem values (e.g., `1.5rem`, `2.25rem`)
- Use percentage values (e.g., `5%`, `10%`)
- Use viewport-relative values (e.g., `2vh`, `3vw`)
- Use negative values for overlapping effects (e.g., `-10px`, `-1rem`)

## Responsive Controls

The Responsive Margin control allows you to set different margins for various screen sizes:

| Breakpoint | Description |
|------------|-------------|
| Default | Applied to all screen sizes unless overridden |
| Mobile | Applied to screens smaller than 768px |
| Tablet | Applied to screens 768px-991px |
| Desktop | Applied to screens 992px-1199px |
| Large Desktop | Applied to screens 1200px and larger |

To set responsive margins:

1. Select the block you want to modify
2. Open the Responsive Margin panel in the sidebar
3. Click the responsive toggle button to switch between breakpoints
4. Set the desired margins for each breakpoint

## Usage Examples

### Adding Space Between Sections

1. Select a block that needs spacing below it
2. Open the Responsive Margin panel
3. Set Bottom Margin to "LG" (1.5rem/24px)
4. For mobile devices, switch to Mobile breakpoint and adjust to "MD" (1rem/16px) if needed

### Creating Negative Margin Effects

1. Select a block that needs to overlap with another element
2. Open the Responsive Margin panel
3. Enter a custom negative value (e.g., `-20px`) for the desired direction
4. Adjust for different breakpoints as needed

### Centering a Block with Auto Margins

1. Select the block you want to center
2. Open the Responsive Margin panel
3. Set Left and Right margins to "Auto"
4. Ensure the block has a defined width less than 100%

## Best Practices

1. **Use consistent spacing** throughout your design for visual harmony
2. **Start with mobile layouts** and adjust margins for larger screens
3. **Avoid excessive margins** on mobile to preserve valuable screen space
4. **Use auto margins** for horizontal centering when appropriate
5. **Combine with Responsive Padding** for complete spacing control
6. **Use negative margins cautiously** and test thoroughly across devices

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Margins not applying | Check if the block has display:inline; change to block or inline-block |
| Margins collapsing | This is normal CSS behavior; use padding on parent or add border/padding to prevent |
| Inconsistent spacing | Ensure you've set margins for all relevant breakpoints |
| Element not centering with auto margins | Verify the element has a width set and its parent has sufficient space |

## Related Controls

- [Responsive Padding](./responsive-padding.md)
- [Layout Options](./layout-options.md)
- [Responsive Display](./responsive-display.md)
- [Responsive Position](./responsive-position.md)

