# Style Controls

The Style Controls set provides a comprehensive interface for configuring visual styling aspects of blocks. It combines multiple core controls to manage colors, backgrounds, borders, and other visual properties.

## Overview

The Style Controls set is a collection of related controls that work together to provide a cohesive editing experience for block styling. It includes:

- Text color selection
- Background configuration (colors, gradients, images)
- Border radius settings
- Display properties
- Special effects like marquee

## Implementation

```jsx
import StylesSet from "../px-controls/sets/styles";

// In your component
const set_style = (target) => PhenixBlocks.setAttributes(target, attributes, setAttributes);
const set_typography = (target, newObject) => PhenixBlocks.setObject(target, newObject, attributes, setAttributes);
const set_object = (value, screen, property, key, attributes, setAttributes) => {
    // Object setter implementation
};

<StylesSet
    attributes={attributes}
    mainSetter={set_style}
    colorSetter={set_typography}
    objectSetter={set_object}
    setAttributes={setAttributes}
/>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `attributes` | Object | Required | The block attributes object |
| `mainSetter` | Function | Required | Handler function for standard attribute changes |
| `colorSetter` | Function | Required | Handler function for color attribute changes |
| `objectSetter` | Function | Optional | Handler function for complex object changes |
| `setAttributes` | Function | Optional | Direct access to setAttributes function |
| `options` | Array | `null` | Optional array of enabled options ("text-colors", "background", "support") |
| `bgOnly` | Array | `null` | Optional array of background restrictions ("colorsOnly", "onlyCG") |
| `children` | Node | `null` | Optional additional content to display before the controls |

## Attributes Structure

The Style Controls set expects and modifies the following attribute structure:

```javascript
attributes: {
    typography: {
        color: ""                // Text color
    },
    style: {
        background: {            // Background properties
            type: "color",       // "color", "gradient", "image"
            value: "",           // Color value, gradient value, or image URL
            rotate: null         // Gradient rotation angle
        },
        overly: "",              // Overlay type
        overly_opacity: "50",    // Overlay opacity percentage
        overly_bg: {             // Custom overlay background
            type: "color",
            value: "",
            rotate: null
        },
        "bg-size": "",           // Background size
        "bg-position": "",       // Background position
        "bg-repeat": "",         // Background repeat
        "bg-animation": "",      // Background animation
        parallax: false,         // Parallax effect
        support: [],             // Enabled style properties
        radius: "",              // Border radius size
        "radius-direction": "",  // Border radius direction
        display: [],             // Display properties
        marquee: "",             // Marquee direction
        "marquee-speed": 15      // Marquee speed
    }
}
```

## Available Controls

The Style Controls set includes the following control groups:

### Text Color

A color picker for selecting text color:

```jsx
<PhenixColor 
    label={__("Text Color", "pds-blocks")} 
    onChange={colorSetter} 
    value={attributes.typography.color} 
/>
```

### Background

Controls for background configuration:

```jsx
<PhenixBackground
    label={__("Background", "pds-blocks")} 
    onChange={mainSetter}
    type={attributes.style.background?.type || "color"}
    value={attributes.style.background?.value || ""}
    rotate={attributes.style.background?.rotate || null} 
/>
```

#### Background Image Options

When a background image is selected, additional controls appear:

```jsx
<PhenixSelect 
    name="bg-size" 
    placeholder={__("Size", "pds-blocks")} 
    value={attributes.style['bg-size']} 
    onChange={mainSetter} 
    options={background_options.sizes} 
/>

<PhenixSelect 
    name="bg-position" 
    placeholder={__("Position", "pds-blocks")} 
    value={attributes.style['bg-position']} 
    onChange={mainSetter} 
    options={background_options.positions} 
/>

<PhenixSelect 
    name="bg-repeat" 
    placeholder={__("Repeat", "pds-blocks")} 
    value={attributes.style['bg-repeat']} 
    onChange={mainSetter} 
    options={background_options.repeat} 
/>

<PhenixSelect 
    name="bg-animation" 
    placeholder={__("Animation", "pds-blocks")} 
    value={attributes.style['bg-animation']} 
    onChange={mainSetter} 
    options={background_options.animations} 
/>

<OptionControl 
    name="parallax" 
    value="bg-parallax" 
    checked={attributes.style.parallax || false} 
    onChange={mainSetter} 
    type="switch-checkbox" 
>
    {__("Parallax BG", "pds-blocks")}
</OptionControl>
```

#### Overlay Options

Controls for configuring background overlays:

```jsx
<PhenixSelect 
    name="overly" 
    placeholder={__("Overlay", "pds-blocks")} 
    value={attributes.style.overly} 
    onChange={mainSetter} 
    options={background_options.overlay} 
/>

<PhenixNumber 
    name="overly_opacity" 
    label={__("Overlay Opacity", "pds-blocks")} 
    value={parseInt(attributes.style.overly_opacity) || 50} 
    onChange={mainSetter} 
/>
```

### Style Properties

A multi-select control for enabling additional style properties:

```jsx
<PhenixSelect 
    name="support" 
    placeholder={__("add..", "pds-blocks")} 
    search={true} 
    label={__("Style Properties", "pds-blocks")} 
    value={attributes.style.support} 
    onChange={mainSetter} 
    options={support_options} 
    multiple={true} 
    className="stacked-options" 
/>
```

#### Border Radius (Conditional)

Controls for border radius, shown when "enable-radius" is selected in style properties:

```jsx
<PhenixSelect 
    name="radius" 
    placeholder={__("None", "pds-blocks")} 
    label={__("Radius Size", "pds-blocks")} 
    value={attributes.style.radius} 
    onChange={mainSetter} 
    options={radius_sizes} 
/>

<PhenixSelect 
    name="radius-direction" 
    placeholder={__("Default", "pds-blocks")} 
    label={__("Radius Direction", "pds-blocks")} 
    value={attributes.style['radius-direction']} 
    onChange={mainSetter} 
    options={radius_directions} 
/>
```

#### Display Properties (Conditional)

Controls for display properties, shown when "enable-display" is selected in style properties:

```jsx
<PhenixSelect 
    name="display" 
    placeholder={__("Default", "pds-blocks")} 
    search={true} 
    label={__("Responsive Display", "pds-blocks")} 
    value={attributes.style.display} 
    onChange={mainSetter} 
    options={display_options} 
    multiple={true} 
    className="stacked-options" 
/>
```

#### Marquee Effect (Conditional)

Controls for marquee effect, shown when "enable-marquee" is selected in style properties:

```jsx
<PhenixSelect 
    name="marquee" 
    placeholder={__("None", "pds-blocks")} 
    label={__("Marquee Direction", "pds-blocks")} 
    value={attributes.style.marquee} 
    onChange={mainSetter} 
    options={[
        { label: __("None", "pds-blocks"), value: '' },
        { label: __("Marquee Left", "pds-blocks"), value: 'px-marquee' },
        { label: __("Marquee Right", "pds-blocks"), value: 'px-marquee-reverse' },
    ]} 
/>

<PhenixNumber 
    name="marquee-speed" 
    label={__("Speed", "pds-blocks")} 
    onChange={mainSetter} 
    value={attributes.style['marquee-speed'] || 15} 
    min={5} 
/>
```

## Usage Examples

### Basic Style Controls

```jsx
// In your edit.js file
const set_style = (target) => PhenixBlocks.setAttributes(target, attributes, setAttributes);
const set_typography = (target, newObject) => PhenixBlocks.setObject(target, newObject, attributes, setAttributes);

// Then use it in your component
<StylesSet
    attributes={attributes}
    mainSetter={set_style}
    colorSetter={set_typography}
/>
```

### Limited Style Controls

```jsx
// In your edit.js file
const set_style = (target) => PhenixBlocks.setAttributes(target, attributes, setAttributes);
const set_typography = (target, newObject) => PhenixBlocks.setObject(target, newObject, attributes, setAttributes);

// Then use it in your component
<StylesSet
    attributes={attributes}
    mainSetter={set_style}
    colorSetter={set_typography}
    options={["background", "support"]} // Only show background and support options
    bgOnly={["colorsOnly"]} // Only show color options in background
/>
```

### With Custom Header

```jsx
// In your edit.js file
const set_style = (target) => PhenixBlocks.setAttributes(target, attributes, setAttributes);
const set_typography = (target, newObject) => PhenixBlocks.setObject(target, newObject, attributes, setAttributes);

// Then use it in your component
<StylesSet
    attributes={attributes}
    mainSetter={set_style}
    colorSetter={set_typography}
>
    <h3 className="components-base-control__label mb-10">
        {__("Style Settings", "pds-blocks")}
    </h3>
</StylesSet>
```

## Integration with Block Attributes

To properly integrate the Style Controls set with block attributes, you need to set up the attribute structure and handler functions:

```jsx
// In your block.json file
"attributes": {
    "typography": {
        "type": "object",
        "default": {
            "color": ""
        }
    },
    "style": {
        "type": "object",
        "default": {
            "background": {
                "type": "color",
                "value": "",
                "rotate": null
            },
            "support": [],
            "radius": "",
            "radius-direction": "",
            "display": []
        }
    }
}

// In your edit.js file
const set_style = (target) => {
    // Standard attribute setter for style properties
    PhenixBlocks.setAttributes(target, attributes, setAttributes);
};

const set_typography = (target, newObject) => {
    // Object setter for typography properties
    PhenixBlocks.setObject(target, newObject, attributes, setAttributes);
};

const set_object = (value, screen, property, key, attributes, setAttributes) => {
    // Complex object setter for nested properties
    const currentProperty = attributes[property] || {};
    
    setAttributes({
        [property]: {
            ...currentProperty,
            [key]: value
        }
    });
};

// Then use it with the style controls set
<StylesSet
    attributes={attributes}
    mainSetter={set_style}
    colorSetter={set_typography}
    objectSetter={set_object}
    setAttributes={setAttributes}
/>
```

This ensures that when style settings are changed, the corresponding block attributes are updated correctly.

## Front-End Implementation

The style attributes set by this control are used by the Phenix front-end framework to apply styling to elements. The style properties are typically rendered as CSS classes and inline styles on the HTML element:

```jsx
// In your save.js file
export default function save({ attributes }) {
    const { style, typography } = attributes;
    
    // Create style classes
    let styleClasses = [];
    
    // Add radius classes
    if (style.radius) {
        styleClasses.push(`radius-${style.radius}`);
        if (style['radius-direction']) {
            styleClasses.push(`radius-${style['radius-direction']}`);
        }
    }
    
    // Add display classes
    if (style.display && style.display.length > 0) {
        styleClasses = [...styleClasses, ...style.display];
    }
    
    // Add marquee classes
    if (style.marquee) {
        styleClasses.push(style.marquee);
    }
    
    // Create inline styles
    const inlineStyles = {};
    
    // Add background styles
    if (style.background?.value) {
        if (style.background.type === 'color') {
            inlineStyles.backgroundColor = style.background.value;
        } else if (style.background.type === 'gradient') {
            inlineStyles.backgroundImage = style.background.value;
        } else if (style.background.type === 'image') {
            inlineStyles.backgroundImage = `url(${style.background.value})`;
            if (style['bg-size']) inlineStyles.backgroundSize = style['bg-size'];
            if (style['bg-position']) inlineStyles.backgroundPosition = style['bg-position'];
            if (style['bg-repeat']) inlineStyles.backgroundRepeat = style['bg-repeat'];
        }
    }
    
    // Add text color
    if (typography.color) {
        inlineStyles.color = typography.color;
    }
    
    return (
        <div className={styleClasses.join(' ')} style={inlineStyles}>
            {/* Block content */}
        </div>
    );
}
```

The Phenix front-end framework will also handle any additional styling based on the classes and data attributes.
