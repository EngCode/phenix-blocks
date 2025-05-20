# Responsive Position

## Overview

The Responsive Position control in the Phenix Design System gives you precise control over how elements are positioned on the page across different screen sizes. This powerful feature allows you to create advanced layouts with overlapping elements, fixed headers, sticky sidebars, and more, all without writing custom CSS.

## Key Features

- **Position type selection** (static, relative, absolute, fixed, sticky)
- **Coordinate controls** (top, right, bottom, left)
- **Z-index management** for controlling stacking order
- **Responsive settings** for different screen sizes
- **Visual feedback** in the editor for positioned elements

## How Positioning Works

The Responsive Position control uses CSS positioning properties to determine how an element is positioned in the document flow. Each position type behaves differently:

### Position Types

| Position Type | Description |
|--------------|-------------|
| Static | Default positioning according to normal document flow |
| Relative | Positioned relative to its normal position; other elements aren't affected |
| Absolute | Positioned relative to its nearest positioned ancestor (or the document body) |
| Fixed | Positioned relative to the viewport; stays in place during scrolling |
| Sticky | Behaves like relative until it reaches a specified scroll position, then acts like fixed |

### Coordinate Controls

When using non-static positioning, you can specify where to place the element using coordinate controls:

| Control | Description |
|---------|-------------|
| Top | Distance from the top reference point |
| Right | Distance from the right reference point |
| Bottom | Distance from the bottom reference point |
| Left | Distance from the left reference point |

Coordinate values can be specified in pixels, percentages, or other CSS units.

### Z-Index Control

The z-index property controls the stacking order of positioned elements that overlap. Elements with higher z-index values appear on top of elements with lower values.

## Available Controls

### Position Type Selector

A dropdown menu to select the positioning method:

- Static (default)
- Relative
- Absolute
- Fixed
- Sticky

### Coordinate Inputs

When a non-static position is selected, coordinate inputs become available:

- Top: Distance from the top reference point
- Right: Distance from the right reference point
- Bottom: Distance from the bottom reference point
- Left: Distance from the left reference point

Each input accepts values in various CSS units (px, %, rem, em, vh, vw).

### Z-Index Input

A numeric input field to set the stacking order of positioned elements.

## Responsive Controls

The Responsive Position control allows you to set different position settings for various screen sizes:

| Breakpoint | Description |
|------------|-------------|
| Default | Applied to all screen sizes unless overridden |
| Mobile | Applied to screens smaller than 768px |
| Tablet | Applied to screens 768px-991px |
| Desktop | Applied to screens 992px-1199px |
| Large Desktop | Applied to screens 1200px and larger |

To set responsive positioning:

1. Select the block you want to modify
2. Open the Responsive Position panel in the sidebar
3. Click the responsive toggle button to switch between breakpoints
4. Set the desired position settings for each breakpoint

## Usage Examples

### Creating a Sticky Header

1. Select your header container block
2. Open the Responsive Position panel
3. Set Position Type to "Sticky"
4. Set Top to "0"
5. Set Z-Index to a high value (e.g., 100) to ensure it stays above other content

### Creating an Overlapping Feature

1. Create a container with a background image or color
2. Add another block that you want to overlap the container
3. For the overlapping block:
   - Set Position Type to "Relative"
   - Set Top to a negative value (e.g., "-50px")
4. Adjust Z-Index as needed to control which element appears on top

### Creating a Fixed Call-to-Action Button

1. Add a Button block
2. Open the Responsive Position panel
3. Set Position Type to "Fixed"
4. Set Bottom to "20px" and Right to "20px"
5. Set Z-Index to a high value (e.g., 99)
6. For mobile devices, switch to Mobile breakpoint and adjust the position if needed

## Best Practices

1. **Use positioning sparingly**: Overuse can lead to complex layouts that are hard to maintain

2. **Consider the reference point**: Remember that absolute positioning is relative to the nearest positioned ancestor

3. **Test thoroughly**: Always test positioned elements across different screen sizes

4. **Be mindful of z-index**: Use a consistent z-index strategy to avoid stacking issues

5. **Combine with other responsive controls**: Use together with Responsive Margin, Padding, and Display for comprehensive responsive design

6. **Consider content flow**: Positioned elements (especially absolute and fixed) are removed from the normal document flow, which may affect surrounding content

7. **Accessibility**: Ensure that positioned elements don't obscure important content or controls

## Common Positioning Patterns

### Sticky Navigation

- Position Type: Sticky
- Top: 0
- Z-Index: High value (e.g., 100)

### Floating Action Button

- Position Type: Fixed
- Bottom: 20px
- Right: 20px (or Left for RTL layouts)
- Z-Index: High value (e.g., 99)

### Card with Overlapping Image

- Card: Position Type: Relative
- Image: Position Type: Absolute, Top: -50px, Left: 50%, Transform: translateX(-50%)

### Modal Dialog

- Overlay: Position Type: Fixed, Top: 0, Right: 0, Bottom: 0, Left: 0, Z-Index: 1000
- Dialog: Position Type: Fixed, Top: 50%, Left: 50%, Transform: translate(-50%, -50%), Z-Index: 1001

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Element not positioning as expected | Check if the parent element has position:relative set |
| Sticky element not sticking | Ensure there's enough scrollable content and that the parent doesn't have overflow:hidden |
| Z-index not working | Check if the element has a position other than static |
| Fixed element moving during scrolling | Verify there are no transform properties on parent elements |
| Element positioned incorrectly on mobile | Set specific position values for mobile breakpoints |

## Related Controls

- [Layout Options](./layout-options.md)
- [Responsive Margin](./responsive-margin.md)
- [Responsive Padding](./responsive-padding.md)
- [Responsive Display](./responsive-display.md)
