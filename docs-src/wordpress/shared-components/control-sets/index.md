# Control Sets

Control sets are collections of related controls that work together to provide a cohesive editing experience for specific aspects of block configuration. These sets combine multiple core controls into reusable components that can be used across different blocks.

## Overview

The control sets in the Phenix Blocks system are designed to:

- **Reduce duplication**: Package common control combinations into reusable components
- **Standardize interfaces**: Ensure consistent editing experiences across blocks
- **Simplify implementation**: Make it easier to add complex functionality to blocks
- **Maintain consistency**: Ensure blocks follow the same patterns for similar settings

## Available Control Sets

### Style Controls

Controls for managing visual styling aspects of blocks:

- [Colors Set](./colors-set.md): Controls for managing background, text, and border colors
- [Typography Set](./typography-set.md): Controls for font family, size, weight, and text styling
- [Spacing Set](./spacing-set.md): Controls for margins, padding, and other spacing properties
- [Border Set](./border-set.md): Controls for border width, style, radius, and other properties

### Layout Controls

Controls for managing the layout and positioning of blocks:

- [Responsive Set](./responsive-set.md): Controls for responsive behavior across different screen sizes
- [Position Set](./position-set.md): Controls for positioning elements (relative, absolute, etc.)
- [Display Set](./display-set.md): Controls for display properties (flex, block, grid, etc.)

### Animation Controls

Controls for managing animations and transitions:

- [Animations Set](./animations-set.md): Controls for entry, exit, and scroll-driven animations
- [Transitions Set](./transitions-set.md): Controls for hover and state transitions

### Advanced Controls

Controls for specialized functionality:

- [Query Set](./query-set.md): Controls for post queries and filtering
- [Advanced Set](./advanced-set.md): Controls for advanced block settings and configurations

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
