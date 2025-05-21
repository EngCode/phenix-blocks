# Attribute Helpers

Attribute helpers are utility functions that simplify the process of updating block attributes from control inputs. These helpers standardize the data flow between controls and blocks, reducing boilerplate code and ensuring consistent behavior.

## Overview

When working with Gutenberg blocks, managing the flow of data from UI controls to block attributes is a common task. Attribute helpers provide standardized methods for:

- Updating simple attribute values
- Managing complex nested objects
- Handling arrays and multiple selections
- Processing special input types

## Core Attribute Helpers

### `set_value`

The most basic attribute helper, used for updating a single attribute based on an input control's value.

```javascript
/**
 * Updates a block attribute based on an input control's value
 * 
 * @param {Object} target - The input element that triggered the change
 * @param {Object} attributes - The current block attributes
 * @param {Function} setAttributes - The block's setAttributes function
 */
function set_value(target, attributes, setAttributes) {
    // Get the attribute name and value
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    // Update the attribute
    setAttributes({ [name]: value });
}

// Usage in edit.js
const handle_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);

// Then use it with controls
<PhenixInput
    name="title"
    value={attributes.title}
    onChange={handle_value}
/>
```

### `setAttributes`

Updates block attributes with specific property-value pairs, often used for style properties.

```javascript
/**
 * Updates block attributes with specific property-value pairs
 * 
 * @param {Object} target - The input element that triggered the change
 * @param {Object} attributes - The current block attributes
 * @param {Function} setAttributes - The block's setAttributes function
 * @param {String} screen - Optional screen size for responsive attributes
 */
function setAttributes(target, attributes, setAttributes, screen = '') {
    // Get the attribute name and current style object
    const name = target.name;
    const currentStyle = attributes.style || {};
    
    // Handle checkbox inputs
    let value;
    if (target.type === 'checkbox') {
        value = target.checked;
    } else {
        value = target.value;
    }
    
    // Update the style object
    setAttributes({
        style: {
            ...currentStyle,
            [name]: value
        }
    });
}

// Usage in edit.js
const handle_style = (target) => PhenixBlocks.setAttributes(target, attributes, setAttributes);

// Then use it with controls
<PhenixSelect
    name="alignment"
    value={attributes.alignment}
    onChange={handle_style}
/>
```

### `setObject`

Updates a nested object property within block attributes, commonly used for typography and complex style properties.

```javascript
/**
 * Updates a nested object property within block attributes
 * 
 * @param {Object|String} target - The input element that triggered the change or a string value
 * @param {String} screen - Optional screen size for responsive attributes (e.g., 'sm', 'md', 'lg', 'xl')
 * @param {String} attr - The attribute object name to update (e.g., 'typography', 'style')
 * @param {String|Boolean} hasName - Optional property name override or false
 * @param {Object} attributes - The current block attributes
 * @param {Function} setAttributes - The block's setAttributes function
 */
function setObject(target, screen, attr, hasName, attributes, setAttributes) {
    // Get the name and value
    const name = hasName || (target instanceof HTMLElement && target.getAttribute('name')) || (attr === "typography" ? "color" : attr === "style" ? "background" : `${target}`);
    const value = (target instanceof HTMLElement) ? valueHandler(target) : target;
    
    // Handle special case for animations
    const newAttributes = name.includes('animation') ? {
        ...attributes[attr],
        animation: { ...attributes[attr].animation, [name.replace('animation-', '')]: value }
    } : {
        ...attributes[attr],
        [`${name}${screen ? '-' + screen : ''}`]: value
    };
    
    // Update the attributes
    setAttributes({ ...attributes, [attr]: newAttributes });
}

// Usage in edit.js
const handle_typography = (target, newObject) => PhenixBlocks.setObject(target, newObject, attributes, setAttributes);

// Then use it with controls
<PhenixColor
    label="Text Color"
    value={attributes.typography.color}
    onChange={handle_typography}
/>
```

## Specialized Attribute Helpers

### `set_responsive_value`

Updates responsive attributes based on the current screen size.

```javascript
/**
 * Updates responsive attributes based on the current screen size
 * 
 * @param {Object} target - The input element that triggered the change
 * @param {String} screen - The current screen size (sm, md, lg, xl)
 * @param {Object} attributes - The current block attributes
 * @param {Function} setAttributes - The block's setAttributes function
 */
function set_responsive_value(target, screen, attributes, setAttributes) {
    const name = target.name;
    const value = target.value;
    
    // Create attribute name with screen suffix
    const responsiveName = `${name}${screen.toUpperCase()}`;
    
    // Update the attribute
    setAttributes({ [responsiveName]: value });
}

// Usage in edit.js
const handle_responsive = (target, screen) => PhenixBlocks.set_responsive_value(target, screen, attributes, setAttributes);

// Then use it with responsive controls
<ScreensTabs
    md={screen => (
        <PhenixNumber
            name="padding"
            value={attributes.paddingMD}
            onChange={(target) => handle_responsive(target, screen)}
        />
    )}
/>
```

### `set_multi_select`

Handles multiple selection controls where values are stored as arrays.

```javascript
/**
 * Handles multiple selection controls where values are stored as arrays
 * 
 * @param {Object} target - The input element that triggered the change
 * @param {Object} attributes - The current block attributes
 * @param {Function} setAttributes - The block's setAttributes function
 */
function set_multi_select(target, attributes, setAttributes) {
    const name = target.name;
    const value = target.value;
    
    // Get current values as array
    const currentValues = attributes[name] || [];
    
    // Toggle the value in the array
    let newValues;
    if (target.checked) {
        // Add the value if it's not already present
        newValues = [...currentValues, value];
    } else {
        // Remove the value if it's present
        newValues = currentValues.filter(val => val !== value);
    }
    
    // Update the attribute
    setAttributes({ [name]: newValues });
}

// Usage in edit.js
const handle_multi_select = (target) => PhenixBlocks.set_multi_select(target, attributes, setAttributes);

// Then use it with multi-select controls
<OptionControl
    name="textStyle"
    type="button-checkbox"
    value="bold"
    checked={attributes.textStyle?.includes("bold")}
    onChange={handle_multi_select}
>
    <i className="fas fa-bold"></i>
</OptionControl>
```

## Usage Examples

### Basic Text Input

```javascript
// In your edit.js file
const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);

// Then use it with a text input
<PhenixInput
    name="title"
    label={__("Title", "pds-blocks")}
    value={attributes.title}
    onChange={set_value}
/>
```

### Style Controls

```javascript
// In your edit.js file
const set_style = (target) => PhenixBlocks.setAttributes(target, attributes, setAttributes);
const set_typography = (target, newObject) => PhenixBlocks.setObject(target, newObject, attributes, setAttributes);

// Then use them with style controls
<StylesSet
    attributes={attributes}
    mainSetter={set_style}
    colorSetter={set_typography}
/>
```

### Responsive Controls

```javascript
// In your edit.js file
const set_responsive = (target, screen) => {
    const name = target.name;
    const value = target.value;
    const responsiveName = `${name}${screen.toUpperCase()}`;
    setAttributes({ [responsiveName]: value });
};

// Then use it with responsive controls
<ScreensTabs
    sm={screen => (
        <PhenixNumber
            name="margin"
            label={__("Margin", "pds-blocks")}
            value={attributes.marginSM}
            onChange={(target) => set_responsive(target, screen)}
        />
    )}
    md={screen => (
        <PhenixNumber
            name="margin"
            label={__("Margin", "pds-blocks")}
            value={attributes.marginMD}
            onChange={(target) => set_responsive(target, screen)}
        />
    )}
/>
```

## Integration with Block Attributes

To properly use attribute helpers, you need to define the appropriate attribute structure in your block.json file:

```json
// In your block.json file
"attributes": {
    "title": {
        "type": "string",
        "default": ""
    },
    "alignment": {
        "type": "string",
        "default": "left"
    },
    "typography": {
        "type": "object",
        "default": {
            "color": "",
            "fontSize": "",
            "fontWeight": ""
        }
    },
    "style": {
        "type": "object",
        "default": {
            "background": {
                "type": "color",
                "value": ""
            },
            "radius": "",
            "padding": ""
        }
    },
    "marginSM": {
        "type": "string",
        "default": "15"
    },
    "marginMD": {
        "type": "string",
        "default": "20"
    },
    "textStyle": {
        "type": "array",
        "default": []
    }
}
```

Then use the appropriate attribute helper for each attribute type in your edit.js file.

## Best Practices

1. **Consistent Naming**: Use consistent naming conventions for attributes and their corresponding control names.
2. **Default Values**: Always provide default values in your block.json to avoid undefined errors.
3. **Type Safety**: Ensure that the attribute type matches the expected value type from the control.
4. **Immutability**: Never directly modify the attributes object; always use setAttributes to create a new object.
5. **Reusable Handlers**: Define attribute handlers at the component level and reuse them across controls.
6. **Error Handling**: Add validation to prevent invalid values from being set as attributes.
