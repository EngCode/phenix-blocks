# Responsive Display

## Overview

The Responsive Display control in the Phenix Design System allows you to control the visibility of blocks based on screen size. This powerful feature enables you to create truly responsive layouts by showing or hiding specific content on different devices without writing custom CSS media queries.

## Key Features

- **Device-specific visibility** for blocks and elements
- **Screen size breakpoints** for precise control
- **Simple toggle interface** for easy configuration
- **Preserves content in the editor** while hiding it on the front end
- **Reduces the need for duplicate content** across different device views

## How Responsive Display Works

The Responsive Display control uses CSS display properties to show or hide elements based on the viewport width. When you hide an element for a specific screen size:

- The element remains in the HTML document
- It's hidden using CSS `display: none` for the specified screen sizes
- It doesn't affect the layout of other elements when hidden
- It's still visible and editable in the WordPress editor

## Available Controls

### Visibility Toggles

The Responsive Display panel provides simple toggle controls for each device breakpoint:

| Breakpoint | Toggle | Screen Width |
|------------|--------|-------------|
| Mobile | Show/Hide | < 768px |
| Tablet | Show/Hide | 768px - 991px |
| Desktop | Show/Hide | 992px - 1199px |
| Large Desktop | Show/Hide | ≥ 1200px |

When a toggle is set to "Hide" for a breakpoint, the element will not be visible on devices with screen widths in that range.

## Usage Examples

### Creating Device-Specific Content

**Scenario**: You want to show different hero images for mobile and desktop views.

**Solution**:
1. Add two Media Element blocks with different images
2. For the desktop-optimized image:
   - Open the Responsive Display panel
   - Set Mobile toggle to "Hide"
3. For the mobile-optimized image:
   - Open the Responsive Display panel
   - Set Desktop and Large Desktop toggles to "Hide"

### Simplifying Navigation for Mobile

**Scenario**: You have secondary navigation elements that should only appear on larger screens.

**Solution**:
1. Select the secondary navigation block
2. Open the Responsive Display panel
3. Set Mobile toggle to "Hide"

### Creating Different Layouts for Different Devices

**Scenario**: You want a 3-column layout on desktop but a single column on mobile.

**Solution**:
1. Create a Grid Row block with 3 Grid Column blocks for desktop
2. Set this row to hide on mobile using Responsive Display
3. Create another Grid Row block with a single column layout
4. Set this row to hide on tablet, desktop, and large desktop

## Best Practices

1. **Use sparingly**: Only hide elements when necessary for the user experience

2. **Consider content priority**: Don't hide essential content on any device

3. **Test thoroughly**: Always preview your content on different devices or using the browser's responsive design mode

4. **Maintain hierarchy**: Ensure the visual hierarchy and content flow makes sense on all devices

5. **Consider performance**: Hidden elements still load in the HTML, so be mindful of performance impacts

6. **Combine with other responsive controls**: Use together with Responsive Margin, Padding, and Layout Options for comprehensive responsive design

7. **Accessibility**: Ensure that hiding elements doesn't negatively impact accessibility

## Alternatives to Hiding Content

Before deciding to hide content on certain devices, consider these alternatives:

1. **Responsive reorganization**: Use responsive layout controls to reorganize content instead of hiding it

2. **Content prioritization**: Display the most important content first on mobile devices

3. **Progressive disclosure**: Use accordions or tabs to make content available but not immediately visible

4. **Content adaptation**: Modify content to be more concise on smaller screens

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Element still visible on specified device | Check if there are conflicting CSS styles or classes applied to the element |
| Hidden content still affecting layout | Ensure the element is using `display: none` and not other visibility properties |
| Content disappearing on unexpected screen sizes | Verify the breakpoint settings and test at various screen widths |
| Important content hidden accidentally | Review all Responsive Display settings before publishing |

## Related Controls

- [Layout Options](./layout-options.md)
- [Responsive Margin](./responsive-margin.md)
- [Responsive Padding](./responsive-padding.md)
- [Responsive Position](./responsive-position.md)
