# Border Radius

## Overview

The Border Radius control in the Phenix Design System allows you to create rounded corners on blocks and elements. This visual enhancement helps soften the appearance of rectangular elements, creating a more polished and modern design. The control provides precise options for applying uniform or individual corner rounding across different screen sizes.

## Key Features

- **Uniform radius control** for applying the same radius to all corners
- **Individual corner controls** for unique radius values on each corner
- **Preset size options** for consistent rounding
- **Custom values** for pixel-perfect adjustments
- **Responsive settings** for different screen sizes

## How Border Radius Works

Border radius creates rounded corners by defining the radius of a circle that forms each corner. In the Phenix Design System:

- **All Corners**: Applies the same radius to all four corners
- **Top Left**: Rounds only the top-left corner
- **Top Right**: Rounds only the top-right corner
- **Bottom Left**: Rounds only the bottom-left corner
- **Bottom Right**: Rounds only the bottom-right corner

<!-- Image placeholder for Border Radius Diagram -->

## Available Controls

### Radius Presets

The Border Radius panel provides preset options for quick application:

| Preset | Value | Description |
|--------|-------|-------------|
| None | 0 | No rounding (square corners) |
| XS | 0.125rem (2px) | Extra small rounding |
| SM | 0.25rem (4px) | Small rounding |
| MD | 0.5rem (8px) | Medium rounding |
| LG | 0.75rem (12px) | Large rounding |
| XL | 1rem (16px) | Extra large rounding |
| XXL | 1.5rem (24px) | Double extra large rounding |
| Pill | 9999px | Maximum rounding (creates pill or circle shapes) |

### Corner Selection

You can apply border radius to specific corners of an element:

| Control | Description |
|---------|-------------|
| All Corners | Apply the same radius to all corners |
| Top Left | Apply radius only to the top-left corner |
| Top Right | Apply radius only to the top-right corner |
| Bottom Left | Apply radius only to the bottom-left corner |
| Bottom Right | Apply radius only to the bottom-right corner |
| Top Corners | Apply radius to both top corners |
| Bottom Corners | Apply radius to both bottom corners |
| Left Corners | Apply radius to both left corners |
| Right Corners | Apply radius to both right corners |

### Custom Values

For precise control, you can enter custom border radius values:

- Use pixel values (e.g., `10px`, `25px`)
- Use rem values (e.g., `0.5rem`, `1.25rem`)
- Use percentage values (e.g., `5%`, `50%`)

## Responsive Controls

The Border Radius control allows you to set different radius values for various screen sizes:

| Breakpoint | Description |
|------------|-------------|
| Default | Applied to all screen sizes unless overridden |
| Mobile | Applied to screens smaller than 768px |
| Tablet | Applied to screens 768px-991px |
| Desktop | Applied to screens 992px-1199px |
| Large Desktop | Applied to screens 1200px and larger |

To set responsive border radius:

1. Select the block you want to modify
2. Open the Border Radius panel in the sidebar
3. Click the responsive toggle button to switch between breakpoints
4. Set the desired radius for each breakpoint

## Usage Examples

### Creating a Card Component

1. Select a Group or Container block
2. Open the Border Radius panel
3. Set All Corners radius to "MD" (0.5rem/8px)
4. Add a background color and padding to complete the card effect

### Creating a Pill Button

1. Select a Button block
2. Open the Border Radius panel
3. Set All Corners radius to "Pill"
4. Adjust padding as needed to control the button's shape

### Creating a Notification Banner

1. Select a Container or Group block
2. Open the Border Radius panel
3. Set Top Corners radius to "SM" (0.25rem/4px)
4. Leave Bottom Corners at "None" (0)
5. Add background color and padding to complete the banner

## Best Practices

1. **Be consistent**: Use the same radius values for similar elements throughout your design

2. **Consider element size**: Larger elements generally look better with larger radius values

3. **Match your design style**: Use smaller radii for formal/corporate designs and larger radii for friendly/casual designs

4. **Combine with other styling**: Border radius works well with backgrounds, borders, and shadows

5. **Test on different devices**: Ensure your rounded corners look appropriate on all screen sizes

6. **Consider content flow**: Very large radius values might affect how content fits within the element

## Common Border Radius Patterns

### Cards and Panels

- All Corners: MD (0.5rem/8px) to LG (0.75rem/12px)
- Often combined with shadow effects and padding

### Buttons

- All Corners: SM (0.25rem/4px) to MD (0.5rem/8px) for standard buttons
- All Corners: Pill for action buttons or modern designs

### Form Inputs

- All Corners: XS (0.125rem/2px) to SM (0.25rem/4px)
- Consistent with button radius for visual harmony

### Hero Sections

- Bottom Corners only: MD (0.5rem/8px) to XL (1rem/16px)
- Creates a smooth transition to the next section

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Border radius not visible | Check if the element has a background color or border |
| Inconsistent appearance across browsers | Use standard values (px) instead of percentage values |
| Content overflowing rounded corners | Add padding or adjust the content to fit within the rounded container |
| Radius too subtle on large elements | Increase the radius value proportionally to the element size |
| Radius not applying to child elements | Child elements need their own border radius settings |

## Related Controls

- [Styles Options](./styles-options.md)
- [Responsive Padding](./responsive-padding.md)
- [Responsive Margin](./responsive-margin.md)
- [Typography Options](./typography-options.md)

