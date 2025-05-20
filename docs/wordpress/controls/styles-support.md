# CSS Properties

## Overview

The CSS Properties control in the Phenix Design System provides advanced customization capabilities by allowing direct access to CSS properties. This powerful feature enables you to apply custom CSS styles to blocks without writing code in external stylesheets. With support for a wide range of CSS properties and responsive settings, you can create highly customized designs while maintaining the convenience of the visual editor.

## Key Features

- **Direct CSS property access** without writing code
- **Property autocomplete** for easy discovery
- **Value suggestions** for common properties
- **Responsive settings** for different screen sizes
- **Custom variable support** for theme integration
- **Immediate visual feedback** in the editor

## How CSS Properties Work

The CSS Properties control allows you to add custom CSS properties to any block using a simple key-value interface. Each property-value pair is applied directly to the block's style attribute, giving you precise control over its appearance and behavior.

## Available Controls

### Property Input

A text field where you can enter any valid CSS property name. The control provides autocomplete suggestions as you type, making it easy to discover and use properties.

### Value Input

A text field where you can enter the value for the selected property. For many properties, the control provides value suggestions or specialized inputs:

- **Color properties**: Color picker with theme color palette
- **Size properties**: Unit selector (px, rem, em, %, etc.)
- **Position properties**: Coordinate inputs
- **Animation properties**: Preset animations and timing functions

### Property List

A list of all CSS properties currently applied to the block, allowing you to:

- View all custom properties at a glance
- Edit existing property values
- Remove properties you no longer need
- Reorder properties when order matters (e.g., for transforms)

## Commonly Used CSS Properties

### Layout Properties

| Property | Example Values | Description |
|----------|----------------|-------------|
| `display` | `block`, `flex`, `grid`, `none` | Controls how an element is displayed |
| `flex-direction` | `row`, `column`, `row-reverse` | Sets direction of flex items |
| `justify-content` | `center`, `space-between`, `flex-start` | Aligns items along main axis |
| `align-items` | `center`, `flex-start`, `stretch` | Aligns items along cross axis |
| `gap` | `10px`, `1rem`, `2em` | Sets spacing between grid/flex items |

### Sizing Properties

| Property | Example Values | Description |
|----------|----------------|-------------|
| `width` | `100px`, `50%`, `auto` | Sets element width |
| `height` | `200px`, `100vh`, `auto` | Sets element height |
| `max-width` | `800px`, `100%`, `none` | Sets maximum width |
| `min-height` | `300px`, `50vh`, `auto` | Sets minimum height |
| `aspect-ratio` | `16/9`, `1/1`, `auto` | Sets width-to-height ratio |

### Spacing Properties

| Property | Example Values | Description |
|----------|----------------|-------------|
| `margin` | `10px`, `1rem 2rem`, `auto` | Sets outer spacing |
| `padding` | `20px`, `1em 2em 3em`, `0` | Sets inner spacing |
| `gap` | `10px`, `1rem`, `2%` | Sets spacing between items |

### Typography Properties

| Property | Example Values | Description |
|----------|----------------|-------------|
| `font-family` | `'Arial'`, `sans-serif` | Sets text font |
| `font-size` | `16px`, `1.2rem`, `larger` | Sets text size |
| `font-weight` | `400`, `bold`, `lighter` | Sets text thickness |
| `line-height` | `1.5`, `24px`, `normal` | Sets line spacing |
| `text-transform` | `uppercase`, `lowercase`, `none` | Controls text capitalization |

### Visual Properties

| Property | Example Values | Description |
|----------|----------------|-------------|
| `background` | `#f5f5f5`, `url(image.jpg)`, `linear-gradient(...)` | Sets background |
| `color` | `#333`, `rgb(0,0,0)`, `var(--primary)` | Sets text color |
| `border` | `1px solid black`, `none` | Sets border style |
| `border-radius` | `5px`, `50%`, `0` | Sets corner rounding |
| `box-shadow` | `0 2px 4px rgba(0,0,0,0.1)` | Adds shadow effect |

### Animation Properties

| Property | Example Values | Description |
|----------|----------------|-------------|
| `transition` | `all 0.3s ease`, `opacity 0.5s` | Sets transition effect |
| `animation` | `fade-in 1s ease`, `bounce 2s infinite` | Sets keyframe animation |
| `transform` | `rotate(45deg)`, `scale(1.2)`, `translateY(-10px)` | Applies visual transformation |

### Position Properties

| Property | Example Values | Description |
|----------|----------------|-------------|
| `position` | `relative`, `absolute`, `sticky` | Sets positioning method |
| `top`, `right`, `bottom`, `left` | `0`, `10px`, `50%` | Sets position coordinates |
| `z-index` | `1`, `100`, `-1` | Controls stacking order |

## CSS Variables Support

The CSS Properties control supports CSS custom properties (variables), allowing you to use theme variables in your custom styles:

```css
color: var(--primary-color);
font-family: var(--heading-font);
margin: var(--spacing-unit);
```

This ensures your custom styles remain consistent with your theme's design system.

## Responsive Controls

All CSS properties can be set differently for various screen sizes:

| Breakpoint | Description |
|------------|-------------|
| Default | Applied to all screen sizes unless overridden |
| Mobile | Applied to screens smaller than 768px |
| Tablet | Applied to screens 768px-991px |
| Desktop | Applied to screens 992px-1199px |
| Large Desktop | Applied to screens 1200px and larger |

To set responsive CSS properties:

1. Select the block you want to modify
2. Open the CSS Properties panel in the sidebar
3. Click the responsive toggle button to switch between breakpoints
4. Add or edit properties for each breakpoint

## Usage Examples

### Creating a Sticky Header with Custom Transition

1. Select your header container block
2. Open the CSS Properties panel
3. Add the following properties:
   - `position: sticky`
   - `top: 0`
   - `z-index: 100`
   - `transition: background-color 0.3s ease`

### Creating a Custom Card Hover Effect

1. Select a Group or Container block
2. Open the CSS Properties panel
3. Add the following properties:
   - `transition: transform 0.3s ease, box-shadow 0.3s ease`
   - `transform: translateY(0)`
4. Then add a CSS class to the block (e.g., "hover-card")
5. Add custom CSS to your theme:
   ```css
   .hover-card:hover {
     transform: translateY(-5px);
     box-shadow: 0 10px 20px rgba(0,0,0,0.1);
   }
   ```

### Creating a Custom Grid Layout

1. Select a Container block
2. Open the CSS Properties panel
3. Add the following properties:
   - `display: grid`
   - `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`
   - `gap: 20px`

## Best Practices

1. **Use built-in controls first**: Only use CSS Properties for styles not available in other controls

2. **Keep it simple**: Apply only the properties you need to avoid complexity

3. **Be consistent**: Use the same property patterns throughout your site

4. **Use CSS variables**: Leverage theme variables for consistency

5. **Test thoroughly**: Always test your custom styles across different devices and browsers

6. **Document custom styles**: Keep track of custom CSS properties you've applied for easier maintenance

7. **Consider specificity**: Be aware that custom CSS properties have high specificity and may override theme styles

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Property not applying | Check for typos in property name or value |
| Property overridden by theme | Try using `!important` (sparingly) or adjust theme styles |
| Responsive styles not working | Verify you've set properties for the correct breakpoint |
| Animation not working | Check browser compatibility for the animation properties used |
| Layout breaking unexpectedly | Test with different content lengths and screen sizes |

## Related Controls

- [Styles Options](./styles-options.md)
- [Layout Options](./layout-options.md)
- [Border Radius](./border-radius.md)
- [Typography Options](./typography-options.md)
