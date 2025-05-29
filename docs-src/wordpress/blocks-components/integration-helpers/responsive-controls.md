# Responsive Controls

Responsive Controls helpers provide utilities for managing block attributes that change based on screen size. These helpers simplify the process of creating responsive blocks that adapt to different devices and viewport sizes.

## Overview

Creating responsive blocks often requires managing different attribute values for different screen sizes. Responsive Controls helpers provide standardized methods for:

- Managing responsive attributes
- Generating responsive classes
- Handling responsive visibility
- Creating responsive layouts

## Responsive Attribute Helpers

### `set_flexbox`

Updates flexbox attributes with responsive support, handling alignment and other flexbox properties.

```javascript
/**
 * Updates flexbox attributes with responsive support
 * 
 * @param {Object|String} target - The input element that triggered the change or a string value
 * @param {String} screen - Optional screen size for responsive attributes (e.g., 'sm', 'md', 'lg', 'xl')
 * @param {Object} attributes - The current block attributes
 * @param {Function} setAttributes - The block's setAttributes function
 */
function set_flexbox(target, screen, attributes, setAttributes) {
    // Get the attribute name and current flexbox object
    const name = target instanceof HTMLElement ? target.getAttribute('name') : target;
    const flexbox = { ...attributes.flexbox };
    
    // Add the value with screen suffix if provided
    // Special handling for alignment properties
    flexbox[`${name.includes('align-') ? `align${screen?'-'+screen:""}` : name}${screen?'-'+screen:""}`] = 
        (typeof(target) === "string" || typeof(target) === "number") ? 
        target.replace("align-reset", "") : 
        valueHandler(target);
    
    // Update the attributes
    const newAttributes = { ...attributes, flexbox: flexbox };
    setAttributes(newAttributes);
}

// Usage in edit.js
const handle_flexbox = (target, screen) => {
    PhenixBlocks.set_flexbox(target, screen, attributes, setAttributes);
};

// Then use it with flexbox controls
<FlexboxControls 
    attributes={attributes}
    onChange={(target, screen) => handle_flexbox(target, screen)}
/>
```

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
    let value;
    
    // Handle checkbox inputs
    if (target.type === 'checkbox') {
        value = target.checked;
    } else {
        value = target.value;
    }
    
    // Create attribute name with screen suffix
    const responsiveName = `${name}${screen.toUpperCase()}`;
    
    // Update the attribute
    setAttributes({ [responsiveName]: value });
}

// Usage in edit.js
const handle_responsive = (target, screen) => {
    PhenixBlocks.set_responsive_value(target, screen, attributes, setAttributes);
};

// Then use it with responsive controls
<ScreensTabs
    sm={screen => (
        <PhenixNumber
            name="padding"
            label={__("Padding", "pds-blocks")}
            value={attributes[`padding${screen.toUpperCase()}`]}
            onChange={(target) => handle_responsive(target, screen)}
        />
    )}
    md={screen => (
        <PhenixNumber
            name="padding"
            label={__("Padding", "pds-blocks")}
            value={attributes[`padding${screen.toUpperCase()}`]}
            onChange={(target) => handle_responsive(target, screen)}
        />
    )}
/>
```

### `get_responsive_value`

Retrieves the appropriate value for the current screen size, with fallbacks to larger screen sizes.

```javascript
/**
 * Retrieves the appropriate value for the current screen size
 * 
 * @param {Object} attributes - The block attributes
 * @param {String} baseName - The base attribute name
 * @param {String} currentScreen - The current screen size (sm, md, lg, xl)
 * @param {*} defaultValue - Default value if no responsive value is found
 * @returns {*} - The value for the current screen size
 */
function get_responsive_value(attributes, baseName, currentScreen, defaultValue = '') {
    // Screen size hierarchy (from smallest to largest)
    const screenSizes = ['SM', 'MD', 'LG', 'XL'];
    
    // Find the index of the current screen size
    const currentIndex = screenSizes.indexOf(currentScreen.toUpperCase());
    
    if (currentIndex === -1) return defaultValue;
    
    // Check current screen size and all larger screen sizes
    for (let i = currentIndex; i >= 0; i--) {
        const attrName = `${baseName}${screenSizes[i]}`;
        if (attributes[attrName] !== undefined) {
            return attributes[attrName];
        }
    }
    
    // Fallback to default value
    return defaultValue;
}

// Usage in save.js
export default function save({ attributes }) {
    // Get the appropriate padding value for each screen size
    const paddingSM = PhenixBlocks.get_responsive_value(attributes, 'padding', 'SM', '0');
    const paddingMD = PhenixBlocks.get_responsive_value(attributes, 'padding', 'MD', paddingSM);
    const paddingLG = PhenixBlocks.get_responsive_value(attributes, 'padding', 'LG', paddingMD);
    const paddingXL = PhenixBlocks.get_responsive_value(attributes, 'padding', 'XL', paddingLG);
    
    return (
        <div className={`
            pdt-sm-${paddingSM}
            pdt-md-${paddingMD}
            pdt-lg-${paddingLG}
            pdt-xl-${paddingXL}
        `}>
            {/* Block content */}
        </div>
    );
}
```

## Responsive Class Generators

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

### `getResponsiveVisibilityClasses`

Generates classes for responsive visibility based on attributes.

```javascript
/**
 * Generates classes for responsive visibility based on attributes
 * 
 * @param {Object} attributes - The block attributes
 * @returns {Array} - Array of visibility classes
 */
function getResponsiveVisibilityClasses(attributes) {
    const classes = [];
    
    // Check visibility attributes for each screen size
    if (attributes.hiddenSM) classes.push('hidden-sm');
    if (attributes.hiddenMD) classes.push('hidden-md');
    if (attributes.hiddenLG) classes.push('hidden-lg');
    if (attributes.hiddenXL) classes.push('hidden-xl');
    
    // Check visibility-only attributes for each screen size
    if (attributes.visibleSM) classes.push('visible-sm');
    if (attributes.visibleMD) classes.push('visible-md');
    if (attributes.visibleLG) classes.push('visible-lg');
    if (attributes.visibleXL) classes.push('visible-xl');
    
    return classes;
}

// Usage in save.js
export default function save({ attributes }) {
    const visibilityClasses = PhenixBlocks.getResponsiveVisibilityClasses(attributes);
    
    return (
        <div className={visibilityClasses.join(' ')}>
            {/* Block content */}
        </div>
    );
}
```

## Responsive Layout Helpers

### `getResponsiveFlexClasses`

Generates responsive flexbox classes based on attributes.

```javascript
/**
 * Generates responsive flexbox classes based on attributes
 * 
 * @param {Object} attributes - The block attributes
 * @returns {Array} - Array of flexbox classes
 */
function getResponsiveFlexClasses(attributes) {
    const classes = [];
    
    // Base flexbox class
    if (attributes.flexbox) {
        classes.push('flexbox');
    }
    
    // Direction classes
    const directions = {
        SM: attributes.flexDirectionSM,
        MD: attributes.flexDirectionMD,
        LG: attributes.flexDirectionLG,
        XL: attributes.flexDirectionXL
    };
    
    Object.entries(directions).forEach(([screen, value]) => {
        if (value) {
            classes.push(`flex-${value.toLowerCase()}-${screen.toLowerCase()}`);
        }
    });
    
    // Alignment classes
    const alignments = {
        SM: attributes.flexAlignSM,
        MD: attributes.flexAlignMD,
        LG: attributes.flexAlignLG,
        XL: attributes.flexAlignXL
    };
    
    Object.entries(alignments).forEach(([screen, value]) => {
        if (value) {
            classes.push(`align-${value.toLowerCase()}-${screen.toLowerCase()}`);
        }
    });
    
    // Justify classes
    const justifications = {
        SM: attributes.flexJustifySM,
        MD: attributes.flexJustifyMD,
        LG: attributes.flexJustifyLG,
        XL: attributes.flexJustifyXL
    };
    
    Object.entries(justifications).forEach(([screen, value]) => {
        if (value) {
            classes.push(`justify-${value.toLowerCase()}-${screen.toLowerCase()}`);
        }
    });
    
    return classes;
}

// Usage in save.js
export default function save({ attributes }) {
    const flexClasses = PhenixBlocks.getResponsiveFlexClasses(attributes);
    
    return (
        <div className={flexClasses.join(' ')}>
            {/* Block content */}
        </div>
    );
}
```

### `getResponsiveGridClasses`

Generates responsive grid classes based on attributes.

```javascript
/**
 * Generates responsive grid classes based on attributes
 * 
 * @param {Object} attributes - The block attributes
 * @returns {Array} - Array of grid classes
 */
function getResponsiveGridClasses(attributes) {
    const classes = [];
    
    // Base grid class
    if (attributes.grid) {
        classes.push('grid');
    }
    
    // Columns classes
    const columns = {
        SM: attributes.gridColumnsSM,
        MD: attributes.gridColumnsMD,
        LG: attributes.gridColumnsLG,
        XL: attributes.gridColumnsXL
    };
    
    Object.entries(columns).forEach(([screen, value]) => {
        if (value) {
            classes.push(`grid-${value}-${screen.toLowerCase()}`);
        }
    });
    
    // Gap classes
    const gaps = {
        SM: attributes.gridGapSM,
        MD: attributes.gridGapMD,
        LG: attributes.gridGapLG,
        XL: attributes.gridGapXL
    };
    
    Object.entries(gaps).forEach(([screen, value]) => {
        if (value) {
            classes.push(`gap-${value}-${screen.toLowerCase()}`);
        }
    });
    
    return classes;
}

// Usage in save.js
export default function save({ attributes }) {
    const gridClasses = PhenixBlocks.getResponsiveGridClasses(attributes);
    
    return (
        <div className={gridClasses.join(' ')}>
            {/* Block content */}
        </div>
    );
}
```

## Responsive Control Components

### `ResponsiveControl`

A higher-order component that wraps a control with responsive tabs.

```javascript
/**
 * A higher-order component that wraps a control with responsive tabs
 * 
 * @param {Function} WrappedControl - The control component to wrap
 * @returns {Function} - Responsive control component
 */
function ResponsiveControl(WrappedControl) {
    return function(props) {
        const [activeScreen, setActiveScreen] = useState('md');
        
        // Get the appropriate value for the current screen
        const getValue = () => {
            const { name, value } = props;
            
            if (typeof value === 'object' && value !== null) {
                return value[activeScreen] || '';
            }
            
            return props[`${name}${activeScreen.toUpperCase()}`] || '';
        };
        
        // Handle value change
        const handleChange = (target) => {
            const { name, onChange } = props;
            
            if (typeof props.value === 'object' && props.value !== null) {
                // Update object value
                const newValue = {
                    ...props.value,
                    [activeScreen]: target.value
                };
                
                onChange({
                    target: {
                        name,
                        value: newValue
                    }
                });
            } else {
                // Update responsive attribute
                onChange({
                    target: {
                        name: `${name}${activeScreen.toUpperCase()}`,
                        value: target.value
                    }
                });
            }
        };
        
        return (
            <div className="responsive-control">
                <div className="responsive-tabs">
                    <button
                        className={`responsive-tab ${activeScreen === 'sm' ? 'active' : ''}`}
                        onClick={() => setActiveScreen('sm')}
                        title={__("Mobile", "pds-blocks")}
                    >
                        <i className="fas fa-mobile-alt"></i>
                    </button>
                    <button
                        className={`responsive-tab ${activeScreen === 'md' ? 'active' : ''}`}
                        onClick={() => setActiveScreen('md')}
                        title={__("Tablet", "pds-blocks")}
                    >
                        <i className="fas fa-tablet-alt"></i>
                    </button>
                    <button
                        className={`responsive-tab ${activeScreen === 'lg' ? 'active' : ''}`}
                        onClick={() => setActiveScreen('lg')}
                        title={__("Desktop", "pds-blocks")}
                    >
                        <i className="fas fa-desktop"></i>
                    </button>
                    <button
                        className={`responsive-tab ${activeScreen === 'xl' ? 'active' : ''}`}
                        onClick={() => setActiveScreen('xl')}
                        title={__("Large Desktop", "pds-blocks")}
                    >
                        <i className="fas fa-tv"></i>
                    </button>
                </div>
                <WrappedControl
                    {...props}
                    value={getValue()}
                    onChange={handleChange}
                    screen={activeScreen}
                />
            </div>
        );
    };
}

// Usage
const ResponsiveNumberControl = PhenixBlocks.ResponsiveControl(PhenixNumber);

// Then use it in your component
<ResponsiveNumberControl
    name="padding"
    label={__("Padding", "pds-blocks")}
    value={{
        sm: attributes.paddingSM,
        md: attributes.paddingMD,
        lg: attributes.paddingLG,
        xl: attributes.paddingXL
    }}
    onChange={set_value}
    min={0}
    max={100}
/>
```

## Usage Examples

### Responsive Spacing

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
        <div className="responsive-options">
            <PhenixNumber
                name="margin"
                label={__("Margin Top", "pds-blocks")}
                value={attributes.marginTopSM}
                onChange={(target) => set_responsive(target, screen)}
                min={0}
                max={100}
            />
            <PhenixNumber
                name="padding"
                label={__("Padding", "pds-blocks")}
                value={attributes.paddingSM}
                onChange={(target) => set_responsive(target, screen)}
                min={0}
                max={100}
            />
        </div>
    )}
    md={screen => (
        <div className="responsive-options">
            <PhenixNumber
                name="margin"
                label={__("Margin Top", "pds-blocks")}
                value={attributes.marginTopMD}
                onChange={(target) => set_responsive(target, screen)}
                min={0}
                max={100}
            />
            <PhenixNumber
                name="padding"
                label={__("Padding", "pds-blocks")}
                value={attributes.paddingMD}
                onChange={(target) => set_responsive(target, screen)}
                min={0}
                max={100}
            />
        </div>
    )}
    lg={screen => (
        <div className="responsive-options">
            <PhenixNumber
                name="margin"
                label={__("Margin Top", "pds-blocks")}
                value={attributes.marginTopLG}
                onChange={(target) => set_responsive(target, screen)}
                min={0}
                max={100}
            />
            <PhenixNumber
                name="padding"
                label={__("Padding", "pds-blocks")}
                value={attributes.paddingLG}
                onChange={(target) => set_responsive(target, screen)}
                min={0}
                max={100}
            />
        </div>
    )}
/>
```

### Responsive Layout

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
        <div className="responsive-options">
            <PhenixSelect
                name="flexDirection"
                label={__("Flex Direction", "pds-blocks")}
                value={attributes.flexDirectionSM}
                onChange={(target) => set_responsive(target, screen)}
                options={[
                    { label: __("Row", "pds-blocks"), value: "row" },
                    { label: __("Column", "pds-blocks"), value: "column" }
                ]}
            />
        </div>
    )}
    md={screen => (
        <div className="responsive-options">
            <PhenixSelect
                name="flexDirection"
                label={__("Flex Direction", "pds-blocks")}
                value={attributes.flexDirectionMD}
                onChange={(target) => set_responsive(target, screen)}
                options={[
                    { label: __("Row", "pds-blocks"), value: "row" },
                    { label: __("Column", "pds-blocks"), value: "column" }
                ]}
            />
        </div>
    )}
/>
```

### Responsive Visibility

```javascript
// In your edit.js file
const toggle_visibility = (screen, value) => {
    setAttributes({ [`hidden${screen.toUpperCase()}`]: value });
};

// Then use it with responsive controls
<ScreensTabs
    sm={screen => (
        <div className="responsive-options">
            <OptionControl
                name={`hidden${screen.toUpperCase()}`}
                type="switch-checkbox"
                checked={attributes[`hidden${screen.toUpperCase()}`]}
                onChange={(target) => toggle_visibility(screen, target.checked)}
            >
                <span>{__("Hide on Mobile", "pds-blocks")}</span>
            </OptionControl>
        </div>
    )}
    md={screen => (
        <div className="responsive-options">
            <OptionControl
                name={`hidden${screen.toUpperCase()}`}
                type="switch-checkbox"
                checked={attributes[`hidden${screen.toUpperCase()}`]}
                onChange={(target) => toggle_visibility(screen, target.checked)}
            >
                <span>{__("Hide on Tablet", "pds-blocks")}</span>
            </OptionControl>
        </div>
    )}
    lg={screen => (
        <div className="responsive-options">
            <OptionControl
                name={`hidden${screen.toUpperCase()}`}
                type="switch-checkbox"
                checked={attributes[`hidden${screen.toUpperCase()}`]}
                onChange={(target) => toggle_visibility(screen, target.checked)}
            >
                <span>{__("Hide on Desktop", "pds-blocks")}</span>
            </OptionControl>
        </div>
    )}
/>
```

## Integration with Block Attributes

To properly use responsive controls, you need to define the appropriate attribute structure in your block.json file:

```json
// In your block.json file
"attributes": {
    "paddingSM": {
        "type": "string",
        "default": "15"
    },
    "paddingMD": {
        "type": "string",
        "default": "20"
    },
    "paddingLG": {
        "type": "string",
        "default": "30"
    },
    "paddingXL": {
        "type": "string",
        "default": "40"
    },
    "marginTopSM": {
        "type": "string",
        "default": "10"
    },
    "marginTopMD": {
        "type": "string",
        "default": "15"
    },
    "marginTopLG": {
        "type": "string",
        "default": "20"
    },
    "marginTopXL": {
        "type": "string",
        "default": "25"
    },
    "flexDirectionSM": {
        "type": "string",
        "default": "column"
    },
    "flexDirectionMD": {
        "type": "string",
        "default": "row"
    },
    "flexDirectionLG": {
        "type": "string",
        "default": "row"
    },
    "flexDirectionXL": {
        "type": "string",
        "default": "row"
    },
    "hiddenSM": {
        "type": "boolean",
        "default": false
    },
    "hiddenMD": {
        "type": "boolean",
        "default": false
    },
    "hiddenLG": {
        "type": "boolean",
        "default": false
    },
    "hiddenXL": {
        "type": "boolean",
        "default": false
    }
}
```

Then use the appropriate responsive helpers in your edit.js and save.js files.

## Best Practices

1. **Consistent Naming**: Use consistent naming conventions for responsive attributes (e.g., `attributeNameSM`, `attributeNameMD`, etc.).
2. **Default Values**: Provide sensible default values for each screen size.
3. **Progressive Enhancement**: Start with mobile-first design and add enhancements for larger screens.
4. **Avoid Duplication**: Use helper functions to avoid duplicating code for each screen size.
5. **Fallback Values**: Implement fallback mechanisms for screen sizes that don't have specific values.
6. **Performance**: Be mindful of the number of responsive attributes to avoid bloating the block data.
7. **Testing**: Test blocks at different viewport sizes to ensure proper responsive behavior.
