# Styles Options

## Overview

The Styles Options control in the Phenix Design System provides a comprehensive set of visual styling tools for blocks and elements. This powerful feature allows you to customize backgrounds, borders, shadows, and other visual properties without writing custom CSS. With responsive options for different screen sizes, you can create visually appealing designs that adapt seamlessly across devices.

## Key Features

- **Background controls** for colors, gradients, and images
- **Border styling** with width, style, and color options
- **Shadow effects** for depth and dimension
- **Opacity settings** for transparency control
- **Transform properties** for rotation, scaling, and more
- **Transition effects** for smooth animations
- **Responsive settings** for different screen sizes

## Available Controls

### Background Controls

Customize the background appearance of elements:

#### Background Color

- Select from theme color palette
- Choose custom colors with opacity/transparency
- Apply solid colors or gradients

#### Background Gradient

- Linear or radial gradient types
- Multiple color stops with position control
- Adjustable gradient angle or position

#### Background Image

- Upload or select images from media library
- Control image positioning (center, top, bottom, etc.)
- Set image size (cover, contain, custom)
- Control image repetition (repeat, no-repeat, etc.)
- Add parallax effects for depth

### Border Controls

Add and customize borders around elements:

#### Border Width

| Option | Description |
|--------|-------------|
| None | No border |
| Thin | 1px border width |
| Medium | 2px border width |
| Thick | 4px border width |
| Custom | Custom width in px, rem, or other units |

#### Border Style

| Style | Description |
|-------|-------------|
| Solid | Continuous solid line |
| Dashed | Series of dashes |
| Dotted | Series of dots |
| Double | Two parallel solid lines |
| Groove | 3D groove effect |
| Ridge | 3D ridge effect |

#### Border Color

- Select from theme color palette
- Choose custom colors with opacity/transparency

#### Border Direction

| Direction | Description |
|-----------|-------------|
| All Sides | Apply border to all sides |
| Top | Apply border only to the top |
| Right | Apply border only to the right |
| Bottom | Apply border only to the bottom |
| Left | Apply border only to the left |
| Horizontal | Apply border to top and bottom |
| Vertical | Apply border to left and right |

### Shadow Effects

Add depth and dimension with shadow effects:

#### Box Shadow

- Horizontal Offset: Control shadow position left/right
- Vertical Offset: Control shadow position up/down
- Blur Radius: Control shadow softness
- Spread Radius: Control shadow size
- Shadow Color: Select color with opacity
- Inset Option: Create inner shadow effect

#### Shadow Presets

| Preset | Description |
|--------|-------------|
| None | No shadow |
| Small | Subtle shadow effect |
| Medium | Moderate shadow effect |
| Large | Pronounced shadow effect |
| Extra Large | Maximum shadow effect |

### Opacity Control

Adjust the transparency of elements:

- Range from 0 (completely transparent) to 1 (fully opaque)
- Precise control with decimal values (e.g., 0.75)

### Transform Properties

Apply visual transformations to elements:

#### Rotate

- Rotate elements from 0 to 360 degrees
- Positive values for clockwise rotation
- Negative values for counter-clockwise rotation

#### Scale

- Scale elements larger or smaller
- Values greater than 1 increase size
- Values less than 1 decrease size
- Control X and Y scaling independently

#### Translate

- Move elements horizontally (X) and vertically (Y)
- Use pixel, percentage, or other CSS units
- Positive/negative values for different directions

#### Skew

- Apply angular distortion to elements
- Control X and Y skew independently
- Values in degrees (e.g., 15deg, -10deg)

### Transition Effects

Create smooth animations between states:

- Transition Property: What properties to animate
- Duration: How long the transition takes
- Timing Function: How the transition progresses over time
- Delay: Time before the transition starts

## Responsive Controls

All style options can be set differently for various screen sizes:

| Breakpoint | Description |
|------------|-------------|
| Default | Applied to all screen sizes unless overridden |
| Mobile | Applied to screens smaller than 768px |
| Tablet | Applied to screens 768px-991px |
| Desktop | Applied to screens 992px-1199px |
| Large Desktop | Applied to screens 1200px and larger |

To set responsive styles:

1. Select the block you want to modify
2. Open the Styles Options panel in the sidebar
3. Click the responsive toggle button to switch between breakpoints
4. Set the desired style options for each breakpoint

## Usage Examples

### Creating a Card with Shadow and Border

1. Select a Group or Container block
2. Open the Styles Options panel
3. Set Background Color to white or a light color
4. Add a Medium Box Shadow
5. Set Border to Thin, Solid, with a light gray color
6. Set Border Radius to MD (0.5rem/8px) using the Border Radius control

### Creating a Gradient Background Section

1. Select a Container block
2. Open the Styles Options panel
3. Set Background Type to Gradient
4. Choose two complementary colors
5. Set Gradient Type to Linear
6. Set Gradient Angle to 135 degrees

### Creating a Hero Section with Background Image

1. Select a Container block
2. Open the Styles Options panel
3. Set Background Type to Image
4. Upload or select an image
5. Set Background Size to Cover
6. Set Background Position to Center Center
7. Add a semi-transparent overlay color if needed

## Best Practices

1. **Maintain consistency**: Use the same style patterns throughout your site

2. **Consider performance**: Large background images can affect page load times

3. **Use shadows sparingly**: Too many shadow effects can create visual noise

4. **Test on different devices**: Ensure your styles look good across all screen sizes

5. **Combine with other controls**: Use together with Layout Options, Responsive Margin, and Padding for comprehensive design

6. **Consider accessibility**: Ensure sufficient contrast between text and backgrounds

7. **Use theme colors**: Stick to your theme's color palette for a cohesive look

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Background image not showing | Check image URL and ensure it's properly uploaded |
| Shadow not visible | Increase shadow opacity or size, or check if it's hidden by another element |
| Gradient not appearing | Ensure you've selected different colors for the gradient stops |
| Styles not applying on mobile | Check if you have conflicting styles set for the mobile breakpoint |
| Border only showing on some sides | Verify your border direction settings |

## Related Controls

- [Border Radius](./border-radius.md)
- [Layout Options](./layout-options.md)
- [Responsive Margin](./responsive-margin.md)
- [Responsive Padding](./responsive-padding.md)
- [Typography Options](./typography-options.md)
