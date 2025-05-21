# Core Controls

Core controls are the fundamental UI components that form the building blocks of the Phenix block editor interface. These controls handle basic user interactions and provide consistent input methods across all blocks.

## Overview

The core controls in the Phenix Blocks system are designed to be:

- **Reusable**: Each control can be used across multiple blocks
- **Consistent**: Controls maintain the same behavior and appearance throughout the editor
- **Extensible**: Controls can be combined and configured for different use cases
- **Framework-aligned**: Controls reflect the capabilities of the front-end framework

## Available Controls

### Input Controls

Basic controls for text and numerical input:

- [Basic Input](./input-controls.md#basic-input): Single-line text input (`input.js`)
- [Number Input](./input-controls.md#number-input): Numerical input with optional constraints (`number.js`)
- [Text Area](./input-controls.md#text-area): Multi-line text input (`textarea.js`)

### Selection Controls

Controls for selecting from predefined options:

- [Select Dropdown](./selection-controls.md#select-dropdown): Standard dropdown select menu (`select.js`)
- [Data-Driven Select](./selection-controls.md#data-driven-select): Select menu populated from data sources (`select-data.js`)
- [Custom Dropdown](./selection-controls.md#custom-dropdown): Flexible dropdown with custom content (`dropdown.js`)

### Toggle Controls

Controls for boolean or toggle options:

- [Switch/Checkbox](./toggle-controls.md): Toggle switches and checkboxes for boolean settings (`switch.js`)

### Media Controls

Controls for media selection and management:

- [Media Uploader](./media-controls.md): Interface for selecting and uploading media files (`uploader.js`)

### Navigation Controls

Controls for organizing and navigating content:

- [Tabs Interface](./navigation-controls.md): Tabbed interface for organizing settings (`tabs.js`)

### Special Controls

Specialized controls for specific purposes:

- [Icon Selection](./special-controls.md#icon-selection): Interface for selecting icons from icon libraries (`icons.js`)
- [URL Controls](./special-controls.md#url-controls): Controls for URL input with suggestions (`dynamic-url.js`)

## Usage Pattern

All core controls follow a similar usage pattern in block `edit.js` files:

```javascript
// 1. Import the control
import PhenixInput from "../px-controls/input";

// 2. Set up attribute handler
const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);

// 3. Use the control in your block
<PhenixInput 
    name="inputName"
    label={__("Input Label", "pds-blocks")}
    value={attributes.inputValue}
    onChange={set_value}
/>
```

## Common Properties

Most core controls share these common properties:

| Property | Type | Description |
|----------|------|-------------|
| `name` | String | The attribute name to update |
| `value` | Any | The current value of the control |
| `onChange` | Function | Handler function for value changes |
| `label` | String | Optional label for the control |
| `className` | String | Optional CSS classes to apply |
| `placeholder` | String | Optional placeholder text |

## Next Steps

Explore detailed documentation for each type of control:

- [Input Controls](./input-controls.md)
- [Selection Controls](./selection-controls.md)
- [Toggle Controls](./toggle-controls.md)
- [Media Controls](./media-controls.md)
- [Navigation Controls](./navigation-controls.md)
- [Special Controls](./special-controls.md)
