# Control Sets

Control sets are collections of related controls that work together to provide a cohesive editing experience for specific aspects of block configuration. These sets combine multiple core controls into reusable components that can be used across different blocks.

## Overview

The control sets in the Phenix Blocks system are designed to:

- **Reduce duplication**: Package common control combinations into reusable components
- **Standardize interfaces**: Ensure consistent editing experiences across blocks
- **Simplify implementation**: Make it easier to add complex functionality to blocks
- **Maintain consistency**: Ensure blocks follow the same patterns for similar settings

## Control Sets by Location

Control sets are organized based on where they appear in the block editor interface:

### Toolbar Controls

These control sets appear in the top toolbar when a block is selected, providing quick access to frequently used settings:

- **Quick Style Controls**: Compact color pickers and style toggles
- **Alignment Controls**: Buttons for text and content alignment
- **Layout Toggles**: Quick switches for layout modes (flex, grid)
- **Spacing Controls**: Visual margin and padding adjustments
- **HTML Tag Selection**: Dropdown for semantic HTML elements
- **Border Quick Controls**: Border style and width toggles

### Sidebar Controls

These more detailed control sets appear in the right sidebar, organized into panels:

#### Style Panels

- [Colors Set](./colors-set.md): Comprehensive color management for background, text, and borders
- [Typography Set](./typography-set.md): Detailed font controls including family, size, weight, and text styling
- [Spacing Set](./spacing-set.md): Precise margin and padding controls with responsive options
- [Border Set](./border-set.md): Detailed border configuration including width, style, radius, and color

#### Layout Panels

- [Responsive Set](./responsive-set.md): Screen-specific settings for different device sizes
- [Position Set](./position-set.md): Detailed positioning controls (relative, absolute, fixed)
- [Display Set](./display-set.md): Comprehensive display property management

#### Animation Panels

- [Animations Set](./animations-set.md): Detailed controls for entry, exit, and scroll animations
- [Transitions Set](./transitions-set.md): Configuration for hover and state transitions

#### Advanced Panels

- [Query Set](./query-set.md): Complex controls for post queries and filtering
- [Advanced Set](./advanced-set.md): Specialized block settings and configurations

## Usage Pattern

All control sets follow a similar usage pattern in block `edit.js` files:

```javascript
// 1. Import the control set
import StylesSet from "../px-controls/sets/styles";

// 2. Set up attribute handlers
const set_style = (target) => PhenixBlocks.setAttributes(target, attributes, setAttributes);
const set_typography = (target, newObject) => PhenixBlocks.setObject(target, newObject, attributes, setAttributes);

// 3. Use the control set in your block
<StylesSet 
    attributes={attributes} 
    mainSetter={set_style} 
    colorSetter={set_typography} 
/>
```

## Common Properties

Most control sets share these common properties:

| Property | Type | Description |
|----------|------|-------------|
| `attributes` | Object | The block attributes object |
| `mainSetter` | Function | Primary setter function for standard attributes |
| `objectSetter` | Function | Setter function for object-type attributes |

## Next Steps

Explore detailed documentation for each control set:

- [Style Controls](./style-controls.md)
- [Layout Controls](./layout-controls.md)
- [Animation Controls](./animation-controls.md)
- [Advanced Controls](./advanced-controls.md)
