# Attribute Management

Attribute Management helpers provide advanced techniques for handling complex block attributes in the Phenix Blocks system. These utilities help manage attribute dependencies, validation, transformation, and persistence.

## Overview

As blocks become more complex, managing their attributes efficiently becomes increasingly important. Attribute Management helpers provide standardized methods for:

- Handling attribute dependencies
- Validating attribute values
- Transforming attributes between formats
- Managing attribute history
- Optimizing attribute storage

## Attribute Dependency Helpers

### `updateDependentAttributes`

Updates dependent attributes when a primary attribute changes.

```javascript
/**
 * Updates dependent attributes when a primary attribute changes
 * 
 * @param {String} attributeName - The name of the changed attribute
 * @param {*} attributeValue - The new value of the attribute
 * @param {Object} attributes - The current block attributes
 * @param {Function} setAttributes - The block's setAttributes function
 * @param {Object} dependencies - Mapping of attribute dependencies
 */
function updateDependentAttributes(attributeName, attributeValue, attributes, setAttributes, dependencies) {
    // Check if the attribute has dependencies
    if (!dependencies[attributeName]) return;
    
    // Get the dependent attributes
    const dependentAttrs = dependencies[attributeName];
    
    // Create an object to hold the updated attributes
    const updatedAttributes = {};
    
    // Update each dependent attribute
    dependentAttrs.forEach(({ name, updateFn }) => {
        updatedAttributes[name] = updateFn(attributeValue, attributes);
    });
    
    // Set the updated attributes
    setAttributes(updatedAttributes);
}

// Usage in edit.js
const attributeDependencies = {
    'columns': [
        { 
            name: 'columnGap', 
            updateFn: (columns, attrs) => columns > 1 ? (attrs.columnGap || '10') : '0' 
        },
        { 
            name: 'columnWidth', 
            updateFn: (columns, attrs) => columns > 0 ? `${Math.floor(100 / columns)}%` : '100%' 
        }
    ]
};

const set_value = (target) => {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    // Update the primary attribute
    setAttributes({ [name]: value });
    
    // Update dependent attributes
    PhenixBlocks.updateDependentAttributes(name, value, attributes, setAttributes, attributeDependencies);
};
```

### `computeDerivedAttribute`

Computes a derived attribute value based on other attributes.

```javascript
/**
 * Computes a derived attribute value based on other attributes
 * 
 * @param {Object} attributes - The current block attributes
 * @param {String} derivedAttrName - The name of the derived attribute
 * @param {Function} computeFn - Function to compute the derived value
 * @returns {*} - The computed value
 */
function computeDerivedAttribute(attributes, derivedAttrName, computeFn) {
    // Compute the derived value
    const derivedValue = computeFn(attributes);
    
    // Return the derived value
    return derivedValue;
}

// Usage in edit.js or save.js
const getTotalColumns = (attributes) => {
    const { columns, columnOffset } = attributes;
    return parseInt(columns) + parseInt(columnOffset || 0);
};

// In your component
const totalColumns = PhenixBlocks.computeDerivedAttribute(
    attributes,
    'totalColumns',
    getTotalColumns
);
```

## Attribute Validation Helpers

### `validateAttributes`

Validates multiple attributes against a validation schema.

```javascript
/**
 * Validates multiple attributes against a validation schema
 * 
 * @param {Object} attributes - The attributes to validate
 * @param {Object} validationSchema - The validation schema
 * @returns {Object} - Object containing valid attributes and validation errors
 */
function validateAttributes(attributes, validationSchema) {
    const validAttributes = {};
    const errors = {};
    
    // Validate each attribute
    Object.entries(validationSchema).forEach(([attrName, validator]) => {
        try {
            // Get the attribute value
            const value = attributes[attrName];
            
            // Validate the value
            const validValue = validator(value);
            
            // Add to valid attributes
            validAttributes[attrName] = validValue;
        } catch (error) {
            // Add to errors
            errors[attrName] = error.message;
        }
    });
    
    return { validAttributes, errors };
}

// Usage in edit.js
const validationSchema = {
    columns: (value) => {
        const num = parseInt(value);
        if (isNaN(num)) throw new Error('Columns must be a number');
        if (num < 1) throw new Error('Columns must be at least 1');
        if (num > 12) throw new Error('Columns cannot exceed 12');
        return num;
    },
    padding: (value) => {
        const num = parseInt(value);
        if (isNaN(num)) throw new Error('Padding must be a number');
        if (num < 0) throw new Error('Padding cannot be negative');
        return num;
    }
};

const validateAndUpdate = (newAttributes) => {
    // Validate the attributes
    const { validAttributes, errors } = PhenixBlocks.validateAttributes(
        { ...attributes, ...newAttributes },
        validationSchema
    );
    
    // Update the attributes if valid
    if (Object.keys(errors).length === 0) {
        setAttributes(validAttributes);
    } else {
        // Handle validation errors
        console.error('Validation errors:', errors);
    }
};
```

### `sanitizeAttributes`

Sanitizes attributes to ensure they meet expected formats.

```javascript
/**
 * Sanitizes attributes to ensure they meet expected formats
 * 
 * @param {Object} attributes - The attributes to sanitize
 * @param {Object} sanitizers - The sanitizer functions
 * @returns {Object} - Sanitized attributes
 */
function sanitizeAttributes(attributes, sanitizers) {
    const sanitizedAttributes = { ...attributes };
    
    // Sanitize each attribute
    Object.entries(sanitizers).forEach(([attrName, sanitizer]) => {
        if (attributes[attrName] !== undefined) {
            sanitizedAttributes[attrName] = sanitizer(attributes[attrName]);
        }
    });
    
    return sanitizedAttributes;
}

// Usage in edit.js or save.js
const sanitizers = {
    html: (value) => {
        // Remove potentially harmful tags
        return value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    },
    url: (value) => {
        // Ensure URL is properly formatted
        try {
            return new URL(value).toString();
        } catch (e) {
            return '';
        }
    },
    className: (value) => {
        // Ensure class name only contains valid characters
        return value.replace(/[^a-zA-Z0-9-_]/g, '');
    }
};

// Sanitize attributes before saving
const prepareForSave = (blockAttributes) => {
    return PhenixBlocks.sanitizeAttributes(blockAttributes, sanitizers);
};
```

## Attribute Transformation Helpers

### `transformLegacyAttributes`

Transforms legacy attribute formats to the current format.

```javascript
/**
 * Transforms legacy attribute formats to the current format
 * 
 * @param {Object} attributes - The attributes to transform
 * @param {Object} transformationMap - Mapping of legacy to current attributes
 * @returns {Object} - Transformed attributes
 */
function transformLegacyAttributes(attributes, transformationMap) {
    const transformedAttributes = { ...attributes };
    
    // Transform each attribute
    Object.entries(transformationMap).forEach(([legacyAttr, { newAttr, transformFn }]) => {
        if (attributes[legacyAttr] !== undefined) {
            // Transform the value
            const transformedValue = transformFn(attributes[legacyAttr], attributes);
            
            // Set the new attribute
            transformedAttributes[newAttr] = transformedValue;
            
            // Remove the legacy attribute
            delete transformedAttributes[legacyAttr];
        }
    });
    
    return transformedAttributes;
}

// Usage in edit.js or save.js
const legacyTransformationMap = {
    'textAlign': {
        newAttr: 'alignment',
        transformFn: (value) => value === 'left' ? 'start' : value === 'right' ? 'end' : value
    },
    'textSize': {
        newAttr: 'typography.fontSize',
        transformFn: (value) => `${value}px`
    },
    'bgColor': {
        newAttr: 'style.background.value',
        transformFn: (value) => value
    }
};

// Transform legacy attributes
const migrateAttributes = (blockAttributes) => {
    return PhenixBlocks.transformLegacyAttributes(blockAttributes, legacyTransformationMap);
};
```

### `flattenAttributes`

Flattens nested attributes into a flat structure.

```javascript
/**
 * Flattens nested attributes into a flat structure
 * 
 * @param {Object} attributes - The attributes to flatten
 * @param {String} separator - Separator for nested keys (default: '.')
 * @returns {Object} - Flattened attributes
 */
function flattenAttributes(attributes, separator = '.') {
    const result = {};
    
    // Recursive function to flatten nested objects
    function flatten(obj, prefix = '') {
        Object.entries(obj).forEach(([key, value]) => {
            const newKey = prefix ? `${prefix}${separator}${key}` : key;
            
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                // Recursively flatten nested objects
                flatten(value, newKey);
            } else {
                // Add leaf value to result
                result[newKey] = value;
            }
        });
    }
    
    // Start flattening
    flatten(attributes);
    
    return result;
}

// Usage
const flatAttributes = PhenixBlocks.flattenAttributes(attributes);
// Example: { 'typography.fontSize': '16px', 'style.background.value': '#ffffff' }
```

### `unflattenAttributes`

Converts a flat attribute structure into a nested structure.

```javascript
/**
 * Converts a flat attribute structure into a nested structure
 * 
 * @param {Object} flatAttributes - The flat attributes to unflatten
 * @param {String} separator - Separator for nested keys (default: '.')
 * @returns {Object} - Nested attributes
 */
function unflattenAttributes(flatAttributes, separator = '.') {
    const result = {};
    
    // Process each flat attribute
    Object.entries(flatAttributes).forEach(([key, value]) => {
        // Split the key into parts
        const parts = key.split(separator);
        
        // Start with the result object
        let current = result;
        
        // Navigate through the parts
        parts.forEach((part, index) => {
            // If this is the last part, set the value
            if (index === parts.length - 1) {
                current[part] = value;
            } else {
                // Create nested object if it doesn't exist
                current[part] = current[part] || {};
                current = current[part];
            }
        });
    });
    
    return result;
}

// Usage
const nestedAttributes = PhenixBlocks.unflattenAttributes(flatAttributes);
// Example: { typography: { fontSize: '16px' }, style: { background: { value: '#ffffff' } } }
```

## Attribute History Management

### `createAttributesHistory`

Creates a history stack for attribute changes.

```javascript
/**
 * Creates a history stack for attribute changes
 * 
 * @param {Object} initialAttributes - The initial attributes
 * @param {Number} maxHistoryLength - Maximum history length (default: 10)
 * @returns {Object} - History management object
 */
function createAttributesHistory(initialAttributes, maxHistoryLength = 10) {
    // Create history stack
    const history = [initialAttributes];
    let currentIndex = 0;
    
    return {
        // Get current attributes
        getCurrent: () => history[currentIndex],
        
        // Add new attributes to history
        add: (newAttributes) => {
            // Remove any forward history
            if (currentIndex < history.length - 1) {
                history.splice(currentIndex + 1);
            }
            
            // Add new attributes to history
            history.push(newAttributes);
            
            // Limit history length
            if (history.length > maxHistoryLength) {
                history.shift();
            } else {
                currentIndex++;
            }
            
            return newAttributes;
        },
        
        // Undo the last change
        undo: () => {
            if (currentIndex > 0) {
                currentIndex--;
                return history[currentIndex];
            }
            
            return history[0];
        },
        
        // Redo a previously undone change
        redo: () => {
            if (currentIndex < history.length - 1) {
                currentIndex++;
                return history[currentIndex];
            }
            
            return history[currentIndex];
        },
        
        // Check if undo is available
        canUndo: () => currentIndex > 0,
        
        // Check if redo is available
        canRedo: () => currentIndex < history.length - 1
    };
}

// Usage in edit.js
const [attributesHistory, setAttributesHistory] = useState(
    PhenixBlocks.createAttributesHistory(attributes)
);

const updateAttributes = (newAttributes) => {
    // Update attributes
    setAttributes(newAttributes);
    
    // Add to history
    setAttributesHistory(prev => {
        const updated = { ...prev };
        updated.add(newAttributes);
        return updated;
    });
};

const handleUndo = () => {
    if (attributesHistory.canUndo()) {
        // Get previous attributes
        const prevAttributes = attributesHistory.undo();
        
        // Update attributes
        setAttributes(prevAttributes);
        
        // Update history
        setAttributesHistory(prev => ({ ...prev }));
    }
};

const handleRedo = () => {
    if (attributesHistory.canRedo()) {
        // Get next attributes
        const nextAttributes = attributesHistory.redo();
        
        // Update attributes
        setAttributes(nextAttributes);
        
        // Update history
        setAttributesHistory(prev => ({ ...prev }));
    }
};
```

## Attribute Storage Optimization

### `compressAttributes`

Compresses attributes to reduce storage size.

```javascript
/**
 * Compresses attributes to reduce storage size
 * 
 * @param {Object} attributes - The attributes to compress
 * @returns {Object} - Compressed attributes
 */
function compressAttributes(attributes) {
    const compressed = {};
    
    // Process each attribute
    Object.entries(attributes).forEach(([key, value]) => {
        // Skip undefined or null values
        if (value === undefined || value === null) return;
        
        // Skip empty strings
        if (value === '') return;
        
        // Skip default values
        if (key === 'columns' && value === '1') return;
        if (key === 'padding' && value === '0') return;
        
        // Compress arrays with single values
        if (Array.isArray(value) && value.length === 1) {
            compressed[key] = value[0];
            return;
        }
        
        // Compress objects
        if (typeof value === 'object' && !Array.isArray(value)) {
            const compressedObj = compressAttributes(value);
            
            // Only add if the compressed object has properties
            if (Object.keys(compressedObj).length > 0) {
                compressed[key] = compressedObj;
            }
            
            return;
        }
        
        // Add the value
        compressed[key] = value;
    });
    
    return compressed;
}

// Usage in save.js
export default function save({ attributes }) {
    // Compress attributes for storage
    const compressedAttributes = PhenixBlocks.compressAttributes(attributes);
    
    // Use compressed attributes for data-attributes
    const dataAttributes = {};
    Object.entries(compressedAttributes).forEach(([key, value]) => {
        dataAttributes[`data-${key}`] = typeof value === 'object' ? JSON.stringify(value) : value;
    });
    
    return (
        <div {...dataAttributes}>
            {/* Block content */}
        </div>
    );
}
```

### `decompressAttributes`

Decompresses attributes to restore full attribute structure.

```javascript
/**
 * Decompresses attributes to restore full attribute structure
 * 
 * @param {Object} compressedAttributes - The compressed attributes
 * @param {Object} defaultAttributes - The default attributes
 * @returns {Object} - Decompressed attributes
 */
function decompressAttributes(compressedAttributes, defaultAttributes) {
    const decompressed = { ...defaultAttributes };
    
    // Process each compressed attribute
    Object.entries(compressedAttributes).forEach(([key, value]) => {
        // Handle nested objects
        if (typeof value === 'object' && !Array.isArray(value) && defaultAttributes[key]) {
            decompressed[key] = decompressAttributes(value, defaultAttributes[key]);
            return;
        }
        
        // Handle arrays with single values
        if (Array.isArray(defaultAttributes[key]) && !Array.isArray(value)) {
            decompressed[key] = [value];
            return;
        }
        
        // Set the value
        decompressed[key] = value;
    });
    
    return decompressed;
}

// Usage in edit.js
const extractAttributesFromDOM = (element, defaultAttributes) => {
    const compressedAttributes = {};
    
    // Extract data attributes
    Array.from(element.attributes)
        .filter(attr => attr.name.startsWith('data-'))
        .forEach(attr => {
            const key = attr.name.substring(5); // Remove 'data-' prefix
            let value = attr.value;
            
            // Try to parse JSON values
            try {
                if (value.startsWith('{') || value.startsWith('[')) {
                    value = JSON.parse(value);
                }
            } catch (e) {
                // Keep as string if parsing fails
            }
            
            compressedAttributes[key] = value;
        });
    
    // Decompress attributes
    return PhenixBlocks.decompressAttributes(compressedAttributes, defaultAttributes);
};
```

## Usage Examples

### Managing Dependent Attributes

```javascript
// In your edit.js file
const attributeDependencies = {
    'layout': [
        { 
            name: 'columns', 
            updateFn: (layout, attrs) => layout === 'grid' ? (attrs.columns || '3') : '1' 
        },
        { 
            name: 'flexDirection', 
            updateFn: (layout, attrs) => layout === 'flex' ? (attrs.flexDirection || 'row') : null 
        }
    ],
    'hasBackground': [
        { 
            name: 'backgroundColor', 
            updateFn: (hasBackground, attrs) => hasBackground ? (attrs.backgroundColor || '#f0f0f0') : null 
        },
        { 
            name: 'textColor', 
            updateFn: (hasBackground, attrs) => hasBackground ? (attrs.textColor || '#333333') : null 
        }
    ]
};

const set_value = (target) => {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    // Update the primary attribute
    setAttributes({ [name]: value });
    
    // Update dependent attributes
    PhenixBlocks.updateDependentAttributes(name, value, attributes, setAttributes, attributeDependencies);
};
```

### Validating Form Inputs

```javascript
// In your edit.js file
const validationSchema = {
    title: (value) => {
        if (!value) throw new Error('Title is required');
        if (value.length > 100) throw new Error('Title cannot exceed 100 characters');
        return value;
    },
    email: (value) => {
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            throw new Error('Invalid email format');
        }
        return value;
    },
    url: (value) => {
        if (value) {
            try {
                return new URL(value).toString();
            } catch (e) {
                throw new Error('Invalid URL format');
            }
        }
        return value;
    }
};

const handleFormSubmit = () => {
    // Validate the attributes
    const { validAttributes, errors } = PhenixBlocks.validateAttributes(
        attributes,
        validationSchema
    );
    
    // Check for errors
    if (Object.keys(errors).length > 0) {
        // Display errors
        setValidationErrors(errors);
        return;
    }
    
    // Clear errors
    setValidationErrors({});
    
    // Process form submission with valid attributes
    // ...
};
```

### Migrating Legacy Blocks

```javascript
// In your edit.js file
const legacyTransformationMap = {
    'align': {
        newAttr: 'alignment',
        transformFn: (value) => value
    },
    'text-color': {
        newAttr: 'typography.color',
        transformFn: (value) => value
    },
    'background-color': {
        newAttr: 'style.background.value',
        transformFn: (value) => value
    },
    'background-type': {
        newAttr: 'style.background.type',
        transformFn: (value) => value === 'color' ? 'color' : 'gradient'
    }
};

// Check if this is a legacy block
const isLegacyBlock = () => {
    return attributes.align !== undefined || 
           attributes['text-color'] !== undefined || 
           attributes['background-color'] !== undefined;
};

// Migrate legacy attributes if needed
useEffect(() => {
    if (isLegacyBlock()) {
        const migratedAttributes = PhenixBlocks.transformLegacyAttributes(
            attributes,
            legacyTransformationMap
        );
        
        setAttributes(migratedAttributes);
    }
}, []);
```

### Implementing Undo/Redo Functionality

```javascript
// In your edit.js file
const [attributesHistory, setAttributesHistory] = useState(
    PhenixBlocks.createAttributesHistory(attributes)
);

// Custom attribute setter with history
const setAttributesWithHistory = (newAttrs) => {
    // Update attributes
    setAttributes(newAttrs);
    
    // Add to history
    setAttributesHistory(prev => {
        const updated = { ...prev };
        updated.add({ ...attributes, ...newAttrs });
        return updated;
    });
};

// Undo button handler
const handleUndo = () => {
    if (attributesHistory.canUndo()) {
        // Get previous attributes
        const prevAttributes = attributesHistory.undo();
        
        // Update attributes
        setAttributes(prevAttributes);
        
        // Update history
        setAttributesHistory(prev => ({ ...prev }));
    }
};

// Redo button handler
const handleRedo = () => {
    if (attributesHistory.canRedo()) {
        // Get next attributes
        const nextAttributes = attributesHistory.redo();
        
        // Update attributes
        setAttributes(nextAttributes);
        
        // Update history
        setAttributesHistory(prev => ({ ...prev }));
    }
};

// Add undo/redo buttons to the block toolbar
<BlockControls>
    <ToolbarGroup>
        <ToolbarButton
            icon="undo"
            label={__("Undo", "pds-blocks")}
            onClick={handleUndo}
            disabled={!attributesHistory.canUndo()}
        />
        <ToolbarButton
            icon="redo"
            label={__("Redo", "pds-blocks")}
            onClick={handleRedo}
            disabled={!attributesHistory.canRedo()}
        />
    </ToolbarGroup>
</BlockControls>
```

## Integration with Block Attributes

To properly use attribute management helpers, you need to define the appropriate attribute structure in your block.json file:

```json
// In your block.json file
"attributes": {
    "layout": {
        "type": "string",
        "default": "flex"
    },
    "columns": {
        "type": "string",
        "default": "1"
    },
    "flexDirection": {
        "type": "string",
        "default": "row"
    },
    "hasBackground": {
        "type": "boolean",
        "default": false
    },
    "backgroundColor": {
        "type": "string",
        "default": null
    },
    "textColor": {
        "type": "string",
        "default": null
    },
    "title": {
        "type": "string",
        "default": ""
    },
    "email": {
        "type": "string",
        "default": ""
    },
    "url": {
        "type": "string",
        "default": ""
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
            }
        }
    }
}
```

Then use the appropriate attribute management helpers in your edit.js and save.js files.

## Best Practices

1. **Dependency Management**: Clearly define attribute dependencies to ensure consistent block behavior.
2. **Validation**: Validate attributes to prevent invalid values from causing issues.
3. **Migration Strategy**: Implement a clear strategy for migrating legacy attributes to new formats.
4. **History Management**: Consider implementing undo/redo functionality for complex blocks.
5. **Storage Optimization**: Optimize attribute storage to reduce data size.
6. **Default Values**: Always provide sensible default values for attributes.
7. **Error Handling**: Implement proper error handling for attribute operations.
8. **Documentation**: Document attribute structures and relationships for easier maintenance.
