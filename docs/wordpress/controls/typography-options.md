# Typography Options

## Overview

The Typography Options control in the Phenix Design System provides comprehensive text styling capabilities for blocks that contain text content. Available through the Typography button in the block toolbar, these controls allow you to customize every aspect of text appearance without writing custom CSS. With responsive options for different screen sizes, you can ensure your typography looks perfect on all devices.

## Key Features

- **Font family selection** from your theme's available fonts
- **Font size control** with responsive options
- **Font weight adjustment** for text emphasis
- **Line height settings** for optimal readability
- **Text alignment options** for perfect positioning
- **Text decoration controls** for underlining, strikethrough, etc.
- **Text transformation** for case styling (uppercase, lowercase, etc.)
- **Letter spacing adjustment** for fine-tuning character spacing
- **Text shadow effects** for depth and emphasis
- **Text color selection** from theme palette or custom colors
- **Responsive controls** for all typography settings

## Accessing Typography Controls

The Typography Options are available for any block that contains text content:

1. Select a block with text content
2. Look for the Typography button ("T" icon) in the block toolbar
3. Click the Typography button to open the typography controls panel

<!-- Image placeholder for Typography Button in Toolbar -->

## Available Controls

### Font Family

Select from the available font families defined in your theme:

- System fonts (default)
- Google Fonts (if configured in theme)
- Custom fonts (if added to your theme)

### Font Size

Control the size of your text with preset options or custom values:

| Preset | Value | Description |
|--------|-------|-------------|
| XS | 0.75rem (12px) | Extra small text |
| SM | 0.875rem (14px) | Small text |
| Normal | 1rem (16px) | Default text size |
| MD | 1.125rem (18px) | Medium text |
| LG | 1.25rem (20px) | Large text |
| XL | 1.5rem (24px) | Extra large text |
| XXL | 2rem (32px) | Double extra large text |
| Custom | Any value | Custom size with units (px, rem, em, etc.) |

### Font Weight

Adjust the thickness of your text:

| Option | Description |
|--------|-------------|
| Light | 300 weight |
| Regular | 400 weight (default) |
| Medium | 500 weight |
| Semi-Bold | 600 weight |
| Bold | 700 weight |
| Extra-Bold | 800 weight |
| Black | 900 weight |

### Line Height

Control the vertical spacing between lines of text:

| Option | Description |
|--------|-------------|
| Default | Browser default (usually about 1.2) |
| Tight | 1.25 - Compact line spacing |
| Normal | 1.5 - Standard readable spacing |
| Relaxed | 1.75 - More generous spacing |
| Loose | 2 - Maximum spacing for readability |
| Custom | Any value (unitless or with units) |

### Text Alignment

Control how text aligns horizontally:

| Option | Description |
|--------|-------------|
| Left | Align text to the left |
| Center | Center text horizontally |
| Right | Align text to the right |
| Justify | Stretch text to fill the width (except last line) |

### Text Decoration

Add lines to your text:

| Option | Description |
|--------|-------------|
| None | No decoration (default) |
| Underline | Line below the text |
| Overline | Line above the text |
| Line-through | Line through the middle of the text |

### Text Transform

Control the capitalization of your text:

| Option | Description |
|--------|-------------|
| None | No transformation (default) |
| Uppercase | ALL CAPITAL LETTERS |
| Lowercase | all small letters |
| Capitalize | First Letter Of Each Word Capitalized |

### Letter Spacing

Adjust the space between characters:

| Option | Description |
|--------|-------------|
| Normal | Default spacing |
| Tight | -0.05em (characters closer together) |
| Wide | 0.05em (characters further apart) |
| Wider | 0.1em (maximum spacing) |
| Custom | Any value with units (em, px, etc.) |

### Text Shadow

Add shadow effects to your text for depth and emphasis:

- Horizontal Offset: Control shadow position left/right
- Vertical Offset: Control shadow position up/down
- Blur Radius: Control shadow softness
- Shadow Color: Select color with opacity

### Text Color

Choose text colors from:

- Theme color palette
- Custom color picker
- Color opacity/transparency control

## Responsive Typography

All typography options can be set differently for various screen sizes:

| Breakpoint | Description |
|------------|-------------|
| Default | Applied to all screen sizes unless overridden |
| Mobile | Applied to screens smaller than 768px |
| Tablet | Applied to screens 768px-991px |
| Desktop | Applied to screens 992px-1199px |
| Large Desktop | Applied to screens 1200px and larger |

To set responsive typography:

1. Open the Typography controls panel
2. Click the responsive toggle button to switch between breakpoints
3. Set the desired typography options for each breakpoint

## Usage Examples

### Creating a Responsive Heading

1. Select a Heading block
2. Open the Typography controls
3. For default view:
   - Set Font Size to "XXL" (2rem/32px)
   - Set Font Weight to "Bold"
4. For mobile view:
   - Switch to Mobile breakpoint
   - Set Font Size to "XL" (1.5rem/24px)

### Styling a Call-to-Action Paragraph

1. Select a Paragraph block
2. Open the Typography controls
3. Set Font Size to "MD" (1.125rem/18px)
4. Set Font Weight to "Medium"
5. Set Text Alignment to "Center"
6. Add a subtle Text Shadow for emphasis

### Creating Highlighted Quote Text

1. Select a Quote block
2. Open the Typography controls
3. Set Font Style to "Italic"
4. Set Font Size to "LG" (1.25rem/20px)
5. Set Line Height to "Relaxed"
6. Set Letter Spacing to "Wide"

## Best Practices

1. **Maintain hierarchy**: Use size and weight to create clear visual hierarchy

2. **Limit font families**: Use no more than 2-3 font families per page

3. **Consider readability**: Ensure text is readable at all sizes and on all devices

4. **Use responsive typography**: Adjust text sizes for different screen sizes

5. **Be consistent**: Use the same typography styles for similar elements

6. **Consider contrast**: Ensure sufficient contrast between text and background

7. **Use system fonts for performance**: System fonts load faster than web fonts

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Font not displaying correctly | Check if the font is properly loaded in your theme |
| Text appears cut off | Increase line height or container size |
| Inconsistent text size across devices | Set specific font sizes for each responsive breakpoint |
| Text shadow not visible | Ensure shadow color has sufficient contrast with background |
| Justified text creating large gaps | Add hyphens or adjust container width |

## Related Controls

- [Styles Options](./styles-options.md)
- [Layout Options](./layout-options.md)
- [Responsive Margin](./responsive-margin.md)
- [Responsive Padding](./responsive-padding.md)

