# Rendering Helpers

Rendering helpers are utility functions that simplify the process of transforming block attributes into HTML classes and inline styles. These helpers ensure consistent rendering of blocks and reduce code duplication in save functions.

## Overview

When rendering blocks in the front-end, you often need to convert attribute values into CSS classes and inline styles. Rendering helpers provide standardized methods for:

- Generating CSS classes based on attributes
- Creating inline style objects
- Handling responsive attributes
- Processing special styling properties
- Automating attribute-to-HTML conversion

## Core Rendering Helper

### `OptionsRenderer`

The primary rendering helper that automatically converts block attributes into appropriate HTML classes, styles, and data attributes. This is the core function that powers the rendering of all Phenix blocks.

```javascript
/**
 * Renders block attributes as HTML classes, styles, and data attributes
 * 
 * @param {Object} options - Configuration options
 * @param {Object} options.attributes - The block attributes
 * @param {Object} options.blockProps - The block properties object to modify
 * @param {Boolean} options.isSave - Whether this is being called in the save function
 * @param {Boolean} options.hasColors - Whether the block supports theme colors
 * @param {Boolean} options.isColumn - Whether the block is a column
 * @param {Boolean} options.isGrid - Whether the block is a grid
 */
function OptionsRenderer(options) {
    // Extract options
    const {attributes, blockProps, isSave, hasColors, isColumn, isGrid} = options;
    
    // Initialize containers
    const container = {className: ""};
    const CustomCSS = {};
    
    // Process each attribute
    Object.entries(attributes).forEach(([option_name, option_value]) => {
        // Skip excluded attributes
        const excluded = ["tagName", "className", "align", "metadata", "content", "lightbox_type", "url", "label"];
        if (excluded.some(opt => opt === option_name) || option_name.startsWith('name-')) return;
        
        // Process string/number attributes
        if (typeof option_value === 'string' || typeof option_value === 'number') {
            // Handle special attributes (id, size, data attributes, etc.)
            // Add appropriate classes or attributes to blockProps
        }
        
        // Process boolean attributes
        else if (typeof option_value === 'boolean' && option_value === true) {
            // Handle boolean attributes (isFlexbox, isLink, etc.)
            // Add appropriate classes or attributes to blockProps
        }
        
        // Process object attributes (style, typography, flexbox, etc.)
        else if (typeof option_value === 'object' && option_value !== null) {
            // Process nested attributes for complex properties
            // Handle special cases for backgrounds, animations, etc.
        }
    });
    
    // Apply custom CSS
    if (Object.keys(CustomCSS).length > 0) {
        blockProps.style = {...blockProps.style, ...CustomCSS};
    }
    
    // Merge container classes with blockProps
    if (container.className) {
        blockProps.className += container.className;
    }
    
    // Apply other container attributes
    Object.entries(container).forEach(([key, value]) => {
        if (key !== 'className') {
            blockProps[key] = value;
        }
    });
}

// Usage in save.js
export default function save({ attributes }) {
    // Initialize blockProps
    const blockProps = {
        className: attributes.className || ''
    };
    
    // Apply options rendering
    PhenixBlocks.OptionsRenderer({
        attributes,
        blockProps,
        isSave: true,
        hasColors: true,
        isColumn: false,
        isGrid: false
    });
    
    return (
        <div {...blockProps}>
            {/* Block content */}
        </div>
    );
}
```

## Class Generators

### `getClasses`

Generates a string of CSS classes based on block attributes.

```javascript
/**
 * Generates a string of CSS classes based on block attributes
 * 
 * @param {Object} attributes - The block attributes
 * @param {Array} additionalClasses - Optional additional classes to include
 * @returns {String} - Space-separated string of CSS classes
 */
function getClasses(attributes, additionalClasses = []) {
    const classes = [];
    
    // Add base classes
    if (attributes.className) {
        classes.push(attributes.className);
    }
    
    // Add alignment classes
    if (attributes.alignment) {
        classes.push(`align-${attributes.alignment}`);
    }
    
    // Add text style classes
    if (attributes.textStyle && Array.isArray(attributes.textStyle)) {
        classes.push(...attributes.textStyle);
    }
    
    // Add additional classes
    if (additionalClasses.length > 0) {
        classes.push(...additionalClasses);
    }
    
    return classes.join(' ');
}

// Usage in save.js
export default function save({ attributes }) {
    const classes = PhenixBlocks.getClasses(attributes, ['custom-block']);
    
    return (
        <div className={classes}>
            {/* Block content */}
        </div>
    );
}
```

### `getResponsiveClasses`

Generates responsive CSS classes based on attributes with screen size suffixes.

```javascript
/**
 * Generates responsive CSS classes based on attributes with screen size suffixes
 * 
 * @param {Object} attributes - The block attributes
 * @param {String} prefix - The class prefix to use
 * @param {Array} screens - The screen sizes to check (default: ['SM', 'MD', 'LG', 'XL'])
 * @returns {Array} - Array of responsive CSS classes
 */
function getResponsiveClasses(attributes, prefix, screens = ['SM', 'MD', 'LG', 'XL']) {
    const classes = [];
    
    // Check each screen size
    screens.forEach(screen => {
        const attrName = `${prefix}${screen}`;
        if (attributes[attrName]) {
            classes.push(`${prefix.toLowerCase()}-${screen.toLowerCase()}-${attributes[attrName]}`);
        }
    });
    
    return classes;
}

// Usage in save.js
export default function save({ attributes }) {
    const paddingClasses = PhenixBlocks.getResponsiveClasses(attributes, 'padding');
    const marginClasses = PhenixBlocks.getResponsiveClasses(attributes, 'margin');
    
    const classes = [
        ...paddingClasses,
        ...marginClasses
    ].join(' ');
    
    return (
        <div className={classes}>
            {/* Block content */}
        </div>
    );
}
```

### `getStyleClasses`

Generates CSS classes based on style attributes.

```javascript
/**
 * Generates CSS classes based on style attributes
 * 
 * @param {Object} style - The style object from attributes
 * @returns {Array} - Array of CSS classes
 */
function getStyleClasses(style) {
    const classes = [];
    
    // Add radius classes
    if (style.radius) {
        classes.push(`radius-${style.radius}`);
        if (style['radius-direction']) {
            classes.push(`radius-${style['radius-direction']}`);
        }
    }
    
    // Add display classes
    if (style.display && Array.isArray(style.display)) {
        classes.push(...style.display);
    }
    
    // Add marquee classes
    if (style.marquee) {
        classes.push(style.marquee);
        if (style['marquee-speed']) {
            classes.push(`speed-${style['marquee-speed']}`);
        }
    }
    
    return classes;
}

// Usage in save.js
export default function save({ attributes }) {
    const styleClasses = PhenixBlocks.getStyleClasses(attributes.style || {});
    
    return (
        <div className={styleClasses.join(' ')}>
            {/* Block content */}
        </div>
    );
}
```

## Style Generators

### `getStyles`

Generates an inline style object based on block attributes.

```javascript
/**
 * Generates an inline style object based on block attributes
 * 
 * @param {Object} attributes - The block attributes
 * @returns {Object} - Inline style object
 */
function getStyles(attributes) {
    const styles = {};
    
    // Add typography styles
    if (attributes.typography) {
        if (attributes.typography.color) {
            styles.color = attributes.typography.color;
        }
        
        if (attributes.typography.fontSize) {
            styles.fontSize = attributes.typography.fontSize;
        }
        
        if (attributes.typography.fontWeight) {
            styles.fontWeight = attributes.typography.fontWeight;
        }
    }
    
    return styles;
}

// Usage in save.js
export default function save({ attributes }) {
    const styles = PhenixBlocks.getStyles(attributes);
    
    return (
        <div style={styles}>
            {/* Block content */}
        </div>
    );
}
```

### `getBackgroundStyles`

Generates background styles based on the background attribute.

```javascript
/**
 * Generates background styles based on the background attribute
 * 
 * @param {Object} background - The background object from style attribute
 * @returns {Object} - Background style object
 */
function getBackgroundStyles(background) {
    const styles = {};
    
    if (background?.value) {
        if (background.type === 'color') {
            styles.backgroundColor = background.value;
        } else if (background.type === 'gradient') {
            styles.backgroundImage = background.value;
        } else if (background.type === 'image') {
            styles.backgroundImage = `url(${background.value})`;
            
            // Add background properties
            if (background.size) styles.backgroundSize = background.size;
            if (background.position) styles.backgroundPosition = background.position;
            if (background.repeat) styles.backgroundRepeat = background.repeat;
        }
    }
    
    return styles;
}

// Usage in save.js
export default function save({ attributes }) {
    const backgroundStyles = PhenixBlocks.getBackgroundStyles(attributes.style?.background || {});
    
    return (
        <div style={backgroundStyles}>
            {/* Block content */}
        </div>
    );
}
```

### `getAnimationAttributes`

Generates data attributes for animations based on the animation attribute.

```javascript
/**
 * Generates data attributes for animations based on the animation attribute
 * 
 * @param {Object} animation - The animation object from style attribute
 * @returns {Object} - Animation data attributes
 */
function getAnimationAttributes(animation) {
    const attributes = {};
    
    if (animation?.name) {
        attributes['data-animation'] = animation.name;
        
        if (animation.duration) attributes['data-duration'] = animation.duration;
        if (animation.delay) attributes['data-delay'] = animation.delay;
        if (animation.offset) attributes['data-offset'] = animation.offset;
        if (animation.inset) attributes['data-inset'] = animation.inset;
        if (animation.reverse) attributes['data-reverse'] = true;
        if (animation.scrollDriven) attributes['data-scroll'] = true;
        if (animation.drivenEnd) attributes['data-progress'] = animation.drivenEnd;
        if (animation.exit) attributes['data-exit'] = animation.exit;
    }
    
    return attributes;
}

// Usage in save.js
export default function save({ attributes }) {
    const animationAttributes = PhenixBlocks.getAnimationAttributes(attributes.style?.animation || {});
    
    return (
        <div {...animationAttributes}>
            {/* Block content */}
        </div>
    );
}
```

## Usage Examples

### Complete Block Rendering

```javascript
// In your save.js file
export default function save({ attributes }) {
    // Generate classes
    const baseClasses = PhenixBlocks.getClasses(attributes, ['custom-block']);
    const styleClasses = PhenixBlocks.getStyleClasses(attributes.style || {});
    const responsiveClasses = [
        ...PhenixBlocks.getResponsiveClasses(attributes, 'padding'),
        ...PhenixBlocks.getResponsiveClasses(attributes, 'margin')
    ];
    
    // Combine all classes
    const classes = [
        baseClasses,
        ...styleClasses,
        ...responsiveClasses
    ].join(' ');
    
    // Generate styles
    const baseStyles = PhenixBlocks.getStyles(attributes);
    const backgroundStyles = PhenixBlocks.getBackgroundStyles(attributes.style?.background || {});
    
    // Combine all styles
    const styles = {
        ...baseStyles,
        ...backgroundStyles
    };
    
    // Generate animation attributes
    const animationAttributes = PhenixBlocks.getAnimationAttributes(attributes.style?.animation || {});
    
    return (
        <div className={classes} style={styles} {...animationAttributes}>
            {/* Block content */}
            {attributes.title && <h2>{attributes.title}</h2>}
            {attributes.content && <p>{attributes.content}</p>}
        </div>
    );
}
```

### Simplified Block Rendering

For simpler blocks, you can use the `getBlockProps` helper that combines multiple rendering helpers:

```javascript
/**
 * Generates all block props (classes, styles, and attributes) in one call
 * 
 * @param {Object} attributes - The block attributes
 * @param {Array} additionalClasses - Optional additional classes
 * @returns {Object} - Combined props object with className, style, and other attributes
 */
function getBlockProps(attributes, additionalClasses = []) {
    // Generate classes
    const baseClasses = getClasses(attributes, additionalClasses);
    const styleClasses = getStyleClasses(attributes.style || {});
    const responsiveClasses = [
        ...getResponsiveClasses(attributes, 'padding'),
        ...getResponsiveClasses(attributes, 'margin')
    ];
    
    // Combine all classes
    const className = [
        baseClasses,
        ...styleClasses,
        ...responsiveClasses
    ].filter(Boolean).join(' ');
    
    // Generate styles
    const baseStyles = getStyles(attributes);
    const backgroundStyles = getBackgroundStyles(attributes.style?.background || {});
    
    // Combine all styles
    const style = {
        ...baseStyles,
        ...backgroundStyles
    };
    
    // Generate animation attributes
    const animationAttributes = getAnimationAttributes(attributes.style?.animation || {});
    
    // Return combined props
    return {
        className,
        style,
        ...animationAttributes
    };
}

// Usage in save.js
export default function save({ attributes }) {
    const blockProps = PhenixBlocks.getBlockProps(attributes, ['custom-block']);
    
    return (
        <div {...blockProps}>
            {/* Block content */}
            {attributes.title && <h2>{attributes.title}</h2>}
            {attributes.content && <p>{attributes.content}</p>}
        </div>
    );
}
```

## Integration with Block Attributes

To properly use rendering helpers, you need to define the appropriate attribute structure in your block.json file:

```json
// In your block.json file
"attributes": {
    "className": {
        "type": "string"
    },
    "alignment": {
        "type": "string",
        "default": "left"
    },
    "textStyle": {
        "type": "array",
        "default": []
    },
    "paddingSM": {
        "type": "string",
        "default": "15"
    },
    "paddingMD": {
        "type": "string",
        "default": "20"
    },
    "marginSM": {
        "type": "string",
        "default": "10"
    },
    "marginMD": {
        "type": "string",
        "default": "15"
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
            "radius-direction": "",
            "display": [],
            "marquee": "",
            "marquee-speed": 15,
            "animation": {
                "name": "",
                "duration": 1000,
                "delay": 0
            }
        }
    }
}
```

Then use the appropriate rendering helpers in your save.js file to generate the correct classes, styles, and attributes.

## Best Practices

1. **Separation of Concerns**: Keep class generation separate from style generation for better organization.
2. **Null Checks**: Always check for the existence of nested objects before accessing their properties.
3. **Default Values**: Provide default empty objects or arrays to prevent errors.
4. **Filtering**: Filter out empty or undefined values before joining classes or creating style objects.
5. **Consistency**: Use consistent naming conventions for attributes and their corresponding CSS classes.
6. **Performance**: Avoid unnecessary calculations or transformations in rendering functions.
