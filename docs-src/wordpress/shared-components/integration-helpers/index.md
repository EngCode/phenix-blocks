# Integration Helpers

Integration helpers are utility functions and methods that connect shared components with block functionality. These helpers simplify the process of integrating controls with block attributes and rendering.

## Overview

The integration helpers in the Phenix Blocks system are designed to:

- **Standardize data flow**: Provide consistent methods for updating block attributes
- **Simplify integration**: Reduce boilerplate code when connecting controls to blocks
- **Handle complex data**: Manage nested objects and arrays in block attributes
- **Provide utilities**: Offer common functionality needed across multiple blocks

## Available Helpers

### Attribute Helpers

Utilities for managing block attributes:

- [Attribute Setters](./attribute-setters.md): Functions for updating block attributes from control inputs
- [Object Handlers](./object-handlers.md): Functions for managing complex object attributes

### Rendering Helpers

Utilities for rendering block content:

- [Class Generators](./class-generators.md): Functions for generating CSS classes based on attributes
- [Style Generators](./style-generators.md): Functions for generating inline styles based on attributes

### Data Helpers

Utilities for managing and transforming data:

- [Data Transformers](./data-transformers.md): Functions for transforming data between formats
- [Data Validators](./data-validators.md): Functions for validating user input

## Common Helpers

The most frequently used integration helpers in the Phenix Blocks system:

### `set_value`

Updates a block attribute based on an input control's value:

```javascript
// Usage in edit.js
const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);

// Then use it with controls
<PhenixInput
    name="title"
    value={attributes.title}
    onChange={set_value}
/>
```

### `setAttributes`

Updates block attributes with specific property-value pairs:

```javascript
// Usage in edit.js
const set_style = (target) => PhenixBlocks.setAttributes(target, attributes, setAttributes);

// Then use it with controls
<PhenixSelect
    name="alignment"
    value={attributes.alignment}
    onChange={set_style}
/>
```

### `setObject`

Updates a nested object property within block attributes:

```javascript
// Usage in edit.js
const set_typography = (target, newObject) => PhenixBlocks.setObject(target, newObject, attributes, setAttributes);

// Then use it with controls
<PhenixColor
    label="Text Color"
    value={attributes.typography.color}
    onChange={set_typography}
/>
```

## Usage Pattern

Integration helpers are typically imported and used in block `edit.js` files:

```javascript
// In your edit.js file
import { set_value, setAttributes, setObject } from '../px-controls/helpers';

// Set up attribute handlers
const handle_value = (target) => set_value(target, attributes, setAttributes);
const handle_style = (target) => setAttributes(target, attributes, setAttributes);
const handle_typography = (target, newObject) => setObject(target, newObject, attributes, setAttributes);

// Use them with controls
<PhenixInput
    name="title"
    value={attributes.title}
    onChange={handle_value}
/>

<StylesSet
    attributes={attributes}
    mainSetter={handle_style}
    colorSetter={handle_typography}
/>
```

## Global PhenixBlocks Object

Many integration helpers are available through the global `PhenixBlocks` object, which is attached to the `window` object:

```javascript
// Access helpers through the global object
const set_value = (target) => window.PhenixBlocks.set_value(target, attributes, setAttributes);
```

The `PhenixBlocks` object also contains data lists and configuration options used by various controls:

```javascript
// Access data lists
const PhenixBlocks = window.PhenixBlocks.dataLists;
const entrance_animations = PhenixBlocks.animations.entrance;
```

## Next Steps

Explore detailed documentation for each integration helper:

- [Attribute Helpers](./attribute-helpers.md)
- [Rendering Helpers](./rendering-helpers.md)
- [Data Helpers](./data-helpers.md)
