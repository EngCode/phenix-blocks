# Data Helpers

Data helpers are utility functions that assist with transforming, validating, and managing data in the Phenix Blocks system. These helpers provide standardized methods for common data operations used across multiple blocks.

## Overview

When working with block data, you often need to transform data between different formats, validate user input, or perform other data operations. Data helpers provide reusable functions for:

- Transforming data between formats
- Validating user input
- Filtering and searching data
- Converting between data types
- Handling special data formats

## Data Transformers

### `objectToAttributes`

Converts a nested object into a flat attributes object.

```javascript
/**
 * Converts a nested object into a flat attributes object
 * 
 * @param {Object} obj - The nested object to convert
 * @param {String} prefix - Optional prefix for attribute names
 * @returns {Object} - Flat attributes object
 */
function objectToAttributes(obj, prefix = '') {
    const attributes = {};
    
    Object.entries(obj).forEach(([key, value]) => {
        const attributeName = prefix ? `${prefix}-${key}` : key;
        
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Recursively flatten nested objects
            const nestedAttributes = objectToAttributes(value, attributeName);
            Object.assign(attributes, nestedAttributes);
        } else {
            // Add simple attribute
            attributes[attributeName] = value;
        }
    });
    
    return attributes;
}

// Usage
const styleObject = {
    background: {
        type: 'color',
        value: '#ffffff'
    },
    radius: '10px'
};

const flatAttributes = PhenixBlocks.objectToAttributes(styleObject, 'style');
// Result: { 'style-background-type': 'color', 'style-background-value': '#ffffff', 'style-radius': '10px' }
```

### `attributesToObject`

Converts a flat attributes object into a nested object.

```javascript
/**
 * Converts a flat attributes object into a nested object
 * 
 * @param {Object} attributes - The flat attributes object
 * @param {String} prefix - The prefix to look for
 * @returns {Object} - Nested object
 */
function attributesToObject(attributes, prefix) {
    const obj = {};
    
    Object.entries(attributes).forEach(([key, value]) => {
        if (key.startsWith(prefix + '-')) {
            // Remove prefix
            const path = key.substring(prefix.length + 1).split('-');
            
            // Build nested object
            let current = obj;
            path.forEach((segment, index) => {
                if (index === path.length - 1) {
                    // Set value at leaf node
                    current[segment] = value;
                } else {
                    // Create nested object if it doesn't exist
                    current[segment] = current[segment] || {};
                    current = current[segment];
                }
            });
        }
    });
    
    return obj;
}

// Usage
const flatAttributes = {
    'style-background-type': 'color',
    'style-background-value': '#ffffff',
    'style-radius': '10px'
};

const styleObject = PhenixBlocks.attributesToObject(flatAttributes, 'style');
// Result: { background: { type: 'color', value: '#ffffff' }, radius: '10px' }
```

### `cssToObject`

Converts a CSS string into a style object.

```javascript
/**
 * Converts a CSS string into a style object
 * 
 * @param {String} css - CSS string
 * @returns {Object} - Style object
 */
function cssToObject(css) {
    const styleObject = {};
    
    if (!css) return styleObject;
    
    // Remove comments and whitespace
    const cleanCss = css.replace(/\/\*[\s\S]*?\*\//g, '').trim();
    
    // Split into declarations
    const declarations = cleanCss.split(';');
    
    declarations.forEach(declaration => {
        const [property, value] = declaration.split(':').map(item => item.trim());
        
        if (property && value) {
            // Convert kebab-case to camelCase
            const camelProperty = property.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
            styleObject[camelProperty] = value;
        }
    });
    
    return styleObject;
}

// Usage
const cssString = 'background-color: #ffffff; border-radius: 10px; font-size: 16px;';
const styleObject = PhenixBlocks.cssToObject(cssString);
// Result: { backgroundColor: '#ffffff', borderRadius: '10px', fontSize: '16px' }
```

### `objectToCss`

Converts a style object into a CSS string.

```javascript
/**
 * Converts a style object into a CSS string
 * 
 * @param {Object} styleObject - Style object
 * @returns {String} - CSS string
 */
function objectToCss(styleObject) {
    if (!styleObject || Object.keys(styleObject).length === 0) return '';
    
    return Object.entries(styleObject)
        .map(([property, value]) => {
            // Convert camelCase to kebab-case
            const kebabProperty = property.replace(/([A-Z])/g, '-$1').toLowerCase();
            return `${kebabProperty}: ${value};`;
        })
        .join(' ');
}

// Usage
const styleObject = {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    fontSize: '16px'
};

const cssString = PhenixBlocks.objectToCss(styleObject);
// Result: 'background-color: #ffffff; border-radius: 10px; font-size: 16px;'
```

## Data Validators

### `validateColor`

Validates and normalizes color values.

```javascript
/**
 * Validates and normalizes color values
 * 
 * @param {String} color - Color value to validate
 * @returns {String|null} - Normalized color or null if invalid
 */
function validateColor(color) {
    if (!color) return null;
    
    // Check if it's a hex color
    if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
        return color;
    }
    
    // Check if it's an RGB color
    if (/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i.test(color)) {
        return color;
    }
    
    // Check if it's an RGBA color
    if (/^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)$/i.test(color)) {
        return color;
    }
    
    // Check if it's a named color
    const namedColors = ['black', 'white', 'red', 'green', 'blue', 'yellow', 'purple', 'gray', 'orange'];
    if (namedColors.includes(color.toLowerCase())) {
        return color;
    }
    
    return null;
}

// Usage
const validColor = PhenixBlocks.validateColor('#ff0000');
// Result: '#ff0000'

const invalidColor = PhenixBlocks.validateColor('not-a-color');
// Result: null
```

### `validateUrl`

Validates URL strings.

```javascript
/**
 * Validates URL strings
 * 
 * @param {String} url - URL to validate
 * @returns {Boolean} - Whether the URL is valid
 */
function validateUrl(url) {
    if (!url) return false;
    
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

// Usage
const validUrl = PhenixBlocks.validateUrl('https://example.com');
// Result: true

const invalidUrl = PhenixBlocks.validateUrl('not-a-url');
// Result: false
```

### `validateNumber`

Validates and normalizes number values.

```javascript
/**
 * Validates and normalizes number values
 * 
 * @param {String|Number} value - Value to validate
 * @param {Number} min - Minimum allowed value
 * @param {Number} max - Maximum allowed value
 * @param {Number} defaultValue - Default value if invalid
 * @returns {Number} - Normalized number
 */
function validateNumber(value, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, defaultValue = 0) {
    // Convert to number
    const num = parseFloat(value);
    
    // Check if it's a valid number
    if (isNaN(num)) {
        return defaultValue;
    }
    
    // Clamp to min/max
    return Math.min(Math.max(num, min), max);
}

// Usage
const validNumber = PhenixBlocks.validateNumber('10', 0, 100, 50);
// Result: 10

const tooLarge = PhenixBlocks.validateNumber('200', 0, 100, 50);
// Result: 100

const invalid = PhenixBlocks.validateNumber('not-a-number', 0, 100, 50);
// Result: 50
```

## Data Filters

### `filterObjectByKeys`

Filters an object to only include specific keys.

```javascript
/**
 * Filters an object to only include specific keys
 * 
 * @param {Object} obj - Object to filter
 * @param {Array} keys - Keys to include
 * @returns {Object} - Filtered object
 */
function filterObjectByKeys(obj, keys) {
    if (!obj || typeof obj !== 'object') return {};
    
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => keys.includes(key))
    );
}

// Usage
const fullObject = {
    title: 'Hello World',
    content: 'Lorem ipsum',
    author: 'John Doe',
    date: '2023-01-01'
};

const filteredObject = PhenixBlocks.filterObjectByKeys(fullObject, ['title', 'content']);
// Result: { title: 'Hello World', content: 'Lorem ipsum' }
```

### `deepMerge`

Deeply merges two objects.

```javascript
/**
 * Deeply merges two objects
 * 
 * @param {Object} target - Target object
 * @param {Object} source - Source object
 * @returns {Object} - Merged object
 */
function deepMerge(target, source) {
    if (!source || typeof source !== 'object') return target;
    if (!target || typeof target !== 'object') return source;
    
    const result = { ...target };
    
    Object.entries(source).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Recursively merge nested objects
            result[key] = deepMerge(result[key] || {}, value);
        } else {
            // Replace or add simple values
            result[key] = value;
        }
    });
    
    return result;
}

// Usage
const defaultStyles = {
    typography: {
        fontSize: '16px',
        color: '#000000'
    },
    spacing: {
        margin: '10px',
        padding: '5px'
    }
};

const customStyles = {
    typography: {
        color: '#ff0000'
    },
    spacing: {
        padding: '10px'
    }
};

const mergedStyles = PhenixBlocks.deepMerge(defaultStyles, customStyles);
// Result: {
//   typography: {
//     fontSize: '16px',
//     color: '#ff0000'
//   },
//   spacing: {
//     margin: '10px',
//     padding: '10px'
//   }
// }
```

## Usage Examples

### Transforming Data for API Requests

```javascript
// In your edit.js file
const saveBlockData = () => {
    // Get block data
    const blockData = {
        title: attributes.title,
        content: attributes.content,
        style: attributes.style
    };
    
    // Transform to flat structure for API
    const apiData = PhenixBlocks.objectToAttributes(blockData);
    
    // Send to API
    apiFetch({
        path: '/pds-blocks/v2/save-block',
        method: 'POST',
        data: apiData
    }).then(response => {
        console.log('Block saved:', response);
    });
};
```

### Validating User Input

```javascript
// In your edit.js file
const validateInput = (target) => {
    const { name, value } = target;
    
    if (name === 'fontSize') {
        // Validate number
        const validValue = PhenixBlocks.validateNumber(value, 8, 72, 16);
        setAttributes({ fontSize: validValue });
    } else if (name === 'color') {
        // Validate color
        const validColor = PhenixBlocks.validateColor(value);
        if (validColor) {
            setAttributes({ color: validColor });
        }
    } else if (name === 'url') {
        // Validate URL
        if (PhenixBlocks.validateUrl(value)) {
            setAttributes({ url: value });
        }
    } else {
        // Default setter
        setAttributes({ [name]: value });
    }
};
```

### Converting CSS to Style Object

```javascript
// In your edit.js file
const importStyles = (cssString) => {
    // Convert CSS to style object
    const styleObject = PhenixBlocks.cssToObject(cssString);
    
    // Update attributes
    setAttributes({
        style: {
            ...attributes.style,
            custom: styleObject
        }
    });
};

// Then use it with a textarea
<PhenixTextarea
    name="customCSS"
    label={__("Custom CSS", "pds-blocks")}
    value={attributes.customCSSString}
    onChange={(target) => {
        setAttributes({ customCSSString: target.value });
        importStyles(target.value);
    }}
/>
```

## Integration with Block Attributes

Data helpers are typically used to process attributes before they are set or after they are retrieved:

```javascript
// In your edit.js file
const set_value = (target) => {
    const { name, value } = target;
    
    // Validate and transform value
    let processedValue = value;
    
    if (name === 'fontSize') {
        processedValue = PhenixBlocks.validateNumber(value, 8, 72, 16);
    } else if (name === 'color') {
        processedValue = PhenixBlocks.validateColor(value) || '';
    }
    
    // Set attribute
    setAttributes({ [name]: processedValue });
};

// Then use it with controls
<PhenixInput
    name="fontSize"
    label={__("Font Size", "pds-blocks")}
    value={attributes.fontSize}
    onChange={set_value}
/>
```

## Best Practices

1. **Input Validation**: Always validate user input before setting attributes.
2. **Data Transformation**: Transform data to the appropriate format before using it.
3. **Default Values**: Provide sensible default values for invalid input.
4. **Error Handling**: Handle errors gracefully and provide feedback to users.
5. **Reusable Functions**: Create reusable helper functions for common data operations.
6. **Type Safety**: Ensure that data types are consistent and appropriate for their use.
7. **Performance**: Optimize data transformations for performance, especially for large datasets.
