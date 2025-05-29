# Grid Column Block

## Overview

The Grid Column Block is an essential layout component in the Phenix Design System that creates flexible columns within Grid Row Blocks. It implements a responsive 12-column grid system that allows precise control over column width, ordering, and alignment across different screen sizes. The Grid Column Block can contain any other blocks, enabling complex nested layouts while maintaining responsive behavior.

## Key Features

### Responsive Layout

- **12-Column Grid System**: Size columns from 1 to 12 units or auto-width
- **Breakpoint Control**: Set different column widths for mobile, tablet, laptop, and desktop
- **Self-Alignment**: Position columns vertically within their parent row (start, center, end)
- **Flexbox Container**: Optionally function as a flexbox container for direct children
- **HTML Tag Selection**: Choose appropriate semantic HTML element (div, section, article, etc.)

### Advanced Positioning

- **Column Ordering**: Control the visual order of columns independent of their DOM position
- **Offset Options**: Add space before columns to create precise layouts
- **Responsive Visibility**: Show or hide columns at specific screen sizes
- **Nested Layouts**: Create complex layouts by nesting rows within columns

## How to Use

1. Add a Container Block to your page
2. Inside the Container, add a Grid Row Block
3. Within the Grid Row, add Grid Column Blocks
4. Configure each column's size using the toolbar:
   - Set the base size for mobile devices
   - Configure sizes for tablet (MD), laptop (LG), and desktop (XL) if needed
5. Adjust additional settings like self-alignment if necessary
6. Add your content blocks inside each column

## Block Settings

### Toolbar Controls

The Grid Column Block provides the following controls in the top toolbar:

| Control | Description |
|---------|-------------|
| Column Size | Dropdown with number inputs to set column width for different screen sizes (0-13, where 0 is auto-width) |
| Flexbox Toggle | Button to enable/disable flexbox layout for direct children |
| Flexbox Controls | When enabled, provides dropdown access to direction, alignment, and distribution settings |
| Margin Controls | Dropdown for setting outer spacing with responsive options |
| Padding Controls | Dropdown for setting inner spacing with responsive options |
| Position Controls | Dropdown for setting position type and coordinates |
| Border Controls | Dropdown for configuring border styles, widths, and colors |
| Effects Controls | Dropdown for adding shadows, opacity, and other visual effects |

### Sidebar Panels

#### General Options Panel

| Control | Description |
|---------|-------------|
| HTML ID | Text input for setting a custom ID (useful for anchors and JavaScript targeting) |
| Style Options | Toggle switches to enable/disable various styling features |
| Self Align | Dropdown selectors for vertical alignment within parent row (start, center, end) with responsive options |

### Technical Implementation

The Grid Column Block is implemented with the following key attributes:

```js
// Core attributes
id: { type: "string", default: "" },
tagName: { type: "string", default: "div" },
size: { type: "string", default: "0" },
isFlexbox: { type: "boolean", default: false },

// Style-related objects
flexbox: { type: "object", default: {} },
typography: { type: "object", default: {} },
style: { type: "object", default: {} },
responsive: { type: "object", default: {} }
```

The column size is controlled through:
- Base size: `attributes.size` (mobile devices)
- Responsive sizes: 
  - Tablet: `attributes.responsive['size-md']`
  - Laptop: `attributes.responsive['size-lg']`
  - Desktop: `attributes.responsive['size-xl']`

The block renders as a div with the appropriate column classes:

```jsx
<TagName {...blockProps}>
  <div {...innerBlocksProps}></div>
</TagName>
```

When flexbox mode is enabled, the inner div receives flexbox-related classes.

## Common Use Cases

### Basic Column Layout

To create a simple column layout with equal widths:

1. Add a Grid Row Block to your page
2. Add multiple Grid Column Blocks inside the row
3. Leave the column size at 0 (auto) for equal width distribution

### Responsive Column Widths

To create columns that change width based on screen size:

1. Add a Grid Row Block to your page
2. Add Grid Column Blocks inside the row
3. Configure each column's size for different breakpoints:
   - Set full width (12) for mobile devices
   - Set half width (6) for tablets (MD)
   - Set one-third width (4) for desktops (LG/XL)

### Asymmetric Layout

To create a layout with columns of different widths:

1. Add a Grid Row Block to your page
2. Add Grid Column Blocks inside the row
3. Set different sizes for each column (e.g., 8 and 4 for a two-thirds/one-third split)

### Column with Flexbox Content

To create a column that arranges its content using flexbox:

1. Add a Grid Column Block to your layout
2. Enable the Flexbox toggle in the toolbar
3. Configure flexbox properties (direction, alignment, etc.)
4. Add content blocks that will be arranged according to the flexbox settings

## Style Features

The Grid Column Block includes comprehensive styling options when style support is enabled:

### Typography Options

When typography styling is enabled:

- **Font Family**: Choose from primary, secondary, or style fonts
- **Font Weight**: Select from thin (100) to black (900)
- **Line Height**: Adjust from 100% to 180%
- **Text Alignment**: Control text alignment with responsive options
- **Text Color**: Apply color from the Phenix Design System palette

### Background Options

When background styling is enabled:

- **Colors**: Select from the design system color palette
- **Gradients**: Apply preset gradients with rotation options
- **Custom Colors**: Set custom background colors with opacity

### Spacing Controls

When spacing controls are enabled:

- **Padding**: Set inner spacing with per-side control and responsive options
- **Margin**: Set outer spacing with per-side control and responsive options

### Border Options

When border styling is enabled:

- **Border Style**: Choose from solid, dashed, or dotted
- **Border Width**: Set width per side (top, right, bottom, left)
- **Border Color**: Select from the design system color palette
- **Border Radius**: Apply rounded corners with per-corner control

## Best Practices

### Column Structure

- Use the appropriate column size based on your content needs
- Remember that the grid is based on a 12-column system
- For equal-width columns, use size 0 (auto)
- For specific width ratios, use sizes that add up to 12 (e.g., 8+4, 6+6, 4+4+4)

### Responsive Design

- Start with the mobile layout first (default size)
- Configure tablet (MD), laptop (LG), and desktop (XL) sizes as needed
- Consider how content will reflow at different screen sizes
- Test your layouts on actual devices or using browser device emulation

### Layout Efficiency

- Keep your column structure as simple as possible
- Use flexbox mode only when you need to control the arrangement of direct children
- Enable only the styling features you actually need
- Avoid excessive nesting of rows and columns

### Style Consistency

- Apply consistent spacing using the padding and margin controls
- Maintain a consistent visual hierarchy across columns
- Use the self-alignment options to create precise layouts
- Apply the same styling approach across similar columns

## Related Blocks

- [Container Block](./container-block.md) - Recommended parent container for the grid system
- [Grid Row Block](./grid-row-block.md) - Required parent container for columns
- [Group Block](./group-block.md) - Alternative for flexible content grouping without grid structure
- [Dynamic Query Block](./dynamic-query-block.md) - Can be placed inside columns for dynamic content

