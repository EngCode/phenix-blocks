# Group Block

## Overview

The Group Block is a flexible container component in the Phenix Design System that allows you to group multiple blocks together. It can function as a standard container or a flexbox container, with support for custom HTML tags and extensive styling options.

<!-- Image placeholder for Group Block -->

## Key Features

- Container Options:
  - HTML tag selection (div, section, article, aside, header, footer)
  - Optional flexbox container mode
  - URL linking capability with new tab option
  - HTML ID for anchoring and navigation

- Layout Features:
  - Flexbox layout system
  - Responsive flexbox properties
  - Self-alignment options (start, center, end)
  - Breakpoint-specific alignments (sm, md, lg, xl)

- Typography Features:
  - Font family (primary, secondary, style)
  - Font weights (thin to black)
  - Line height (100% to 180%)
  - Text shadows (standard and TailWind)
  - Text alignment per breakpoint

- Style Features:
  - Colors and backgrounds:
    - Solid colors (primary, secondary, success, etc.)
    - Gradient options with rotation
    - Brand colors support
    - Component level colors
  - Border controls:
    - Border styles (solid, dashed, dotted)
    - Border width per side
    - Border radius options
  - Background options:
    - Position control
    - Animation effects
    - Overlay options

- Advanced Features:
  - Screen-specific controls
  - Support toggles for features
  - Position settings
  - Effects and animations
  - Margin and padding with responsive options

## How to Use

1. Add the Group Block to your page
2. Select the desired HTML tag from the toolbar
3. Enable flexbox mode if needed for layout control
4. Add blocks inside the group container
5. Configure styling and alignment options

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| HTML Tag | Select from div, section, article, aside, header, footer |
| Flexbox Toggle | Enable/disable flexbox with responsive controls |
| Style Options | Colors, backgrounds, gradients, and overlays |
| Typography | Font family, size, weight, line height, shadows |
| URL Options | Link settings with new tab option |
| Animations | Background and element animations |
| Padding | Per-side padding with breakpoint controls |
| Margin | Per-side margins with breakpoint controls |
| Position | Type and coordinates with z-index |
| Border | Style, width, color, and radius per side |
| Effects | Opacity, shadows, and visual effects |

### Sidebar Controls

| Control | Description |
|---------|-------------|
| HTML ID | Set a custom ID for anchoring |
| Style Options | Enable/disable styling features |
| Self Align | Control alignment in flexbox parents |
| Responsive | Device-specific style controls |

### Flexbox Features

When flexbox is enabled:

- Layout Properties:
  - Flow Options:
    - Reverse flow direction
    - Stacked (column) layout
    - Nowrap option
    - Equal columns
    - Masonry layout
  - Gap Controls:
    - X-axis spacing (0-50px)
    - Y-axis spacing (0-50px)
    - Y-axis gap fix option

- Alignment Controls:
  - Main Alignment:
    - Start/Center/End
    - Space Between/Around
    - Stretch options
  - Self Alignment:
    - Start positioning
    - Center positioning
    - End positioning

- Responsive Controls:
  - Mobile (default) settings
  - Tablet (md) specific:
    - Flow direction
    - Alignment options
    - Gap controls
  - Desktop (lg) specific:
    - Independent flow
    - Custom alignment
    - Spacing options
  - Large screen (xl):
    - Unique layout rules
    - Custom positioning
    - Gap adjustments

### Style Features

When style support is enabled:

- Typography:
  - Font Families:
    - Primary font
    - Secondary font
    - Style font
  - Font Weights:
    - Thin (100)
    - Light (300)
    - Extra Light
    - Normal (400)
    - Medium (500)
    - Semi-Bold
    - Bold (700)
    - Heavy
    - Black (900)
  - Line Heights:
    - 100% to 180%
    - Inherit option
  - Text Shadows:
    - Standard (DP-1 to DP-5)
    - TailWind (sm to 2xl)

- Colors:
  - Standard:
    - Primary/Secondary
    - Success/Danger/Warning/Info
    - Dark/Light variations
  - Special:
    - Brand colors
    - Component levels
    - Inherit/Transparent
  - Gradients:
    - Multiple color combinations
    - Rotation options (0° to 180°)

- Background:
  - Positions:
    - 9-point positioning
    - Custom coordinates
  - Animations:
    - X/Y movement
    - Zooming
    - Gradient rotation
  - Overlay:
    - Dark/Light
    - Custom overlay

- Border:
  - Styles:
    - Solid
    - Dashed
    - Dotted
  - Controls:
    - Per-side width
    - Color options
    - Radius settings

- Effects:
  - Opacity control
  - Box shadows
  - Custom effects

### Responsive Features

The following can be configured per breakpoint:

- Typography settings
- Size controls
- Self-alignment (in flexbox)
- Margin and padding
- Other style options

## Examples

### Basic Container

To create a standard group:

1. Add the Group block to your page
2. Select the HTML tag from the toolbar dropdown
3. Set an HTML ID if needed for anchoring
4. Enable desired style features in sidebar
5. Add content blocks inside

### Advanced Container

To create a fully featured group:

1. Add the Group block to your page
2. Enable needed features in Style Options:
   - Typography support
   - Border controls
   - Position settings
   - Effects options
3. Configure screen-specific styles
4. Add content and customize per breakpoint

### Flexbox Container

To create a flexbox layout:

1. Add the Group block to your page
2. Enable the flexbox mode
3. Configure flexbox properties in the toolbar
4. Add child blocks to be arranged

### Styled Container

To add custom styling:

1. Enable style support in sidebar
2. Use the Style Options dropdown
3. Configure colors and backgrounds
4. Add margins and padding as needed
5. Configure any other style options

## Best Practices

1. **Semantic HTML**: 
   - Use section for thematic grouping
   - Use article for self-contained content
   - Use aside for complementary content
   - Use header/footer for sectioning content

2. **Typography Hierarchy**:
   - Use primary font for main content
   - Use secondary font for supporting text
   - Use style font for decorative elements
   - Maintain consistent line heights

3. **Color Strategy**:
   - Use component-level colors for UI consistency
   - Apply brand colors strategically
   - Use gradients for visual hierarchy
   - Consider overlay effects for contrast

4. **Responsive Design**:
   - Start with mobile-first styles
   - Use breakpoint controls purposefully
   - Adjust typography per screen size
   - Test flexbox layouts across devices

5. **Performance**:
   - Enable only needed style features
   - Use inheritance for common styles
   - Optimize background images
   - Minimize animation usage

6. **Accessibility**:
   - Choose semantic HTML elements
   - Maintain proper color contrast
   - Use appropriate font sizes
   - Consider animation effects carefully

## Related
- [Container Block](/wordpress/blocks/container-block)
- [Section Block](/wordpress/blocks/section-block)

