# Animations Set

The Animations Set is a control set that provides a comprehensive interface for configuring animations for blocks. It allows users to define entrance animations, exit animations, timing, and scroll-driven behavior.

## Overview

The Animations Set control combines multiple core controls to create a complete animation configuration interface. It supports:

- Entrance animations with various effects
- Optional exit animations
- Timing controls (duration, delay)
- Scroll-driven animations with offset and progress tracking
- Animation groups for staggered animations

## Implementation

```jsx
import AnimationsSet from "../px-controls/sets/animations";

// In your component
const set_style = (target) => PhenixBlocks.setAttributes(target, attributes, setAttributes);

<AnimationsSet
    attributes={attributes}
    mainSetter={set_style}
/>
```

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `attributes` | Object | Required | The block attributes object |
| `mainSetter` | Function | Required | Handler function for attribute changes |
| `options` | Object | `null` | Optional custom animation options |
| `children` | Node | `null` | Optional additional content to display before the controls |

## Attributes Structure

The Animations Set expects and modifies the following attribute structure:

```javascript
attributes: {
    style: {
        animation: {
            name: "fade-in",         // Entrance animation name
            exit: "fade-out",        // Exit animation name (if hasExit is true)
            duration: 1000,          // Animation duration in milliseconds
            delay: 0,                // Animation delay in milliseconds
            offset: 0,               // Scroll offset for triggering
            inset: 0,                // Inset value for scroll calculations
            reverse: false,          // Whether to reverse animation flow
            scrollDriven: false,     // Whether animation is scroll-driven
            drivenEnd: 0,            // Progress percentage for scroll-driven
            group: false,            // Whether to use as animation group
            hasExit: false,          // Whether to include exit animation
            stagger: 100             // Stagger time for grouped animations
        }
    }
}
```

## Available Controls

The Animations Set includes the following controls:

### Entrance Animation

A select dropdown for choosing the entrance animation effect:

```jsx
<PhenixSelect 
    name="animation-name" 
    label={__("Entrances Animation", "pds-blocks")} 
    value={attributes.style?.animation?.name} 
    onChange={mainSetter} 
    options={entrance_animations} 
    search={true}
/>
```

### Exit Animation (Conditional)

A select dropdown for choosing the exit animation effect, shown only when `hasExit` is true:

```jsx
<PhenixSelect 
    name="animation-exit" 
    label={__("Exit Animation", "pds-blocks")} 
    value={attributes.style?.animation?.exit} 
    onChange={mainSetter} 
    options={exit_animations} 
    search={true}
/>
```

### Timing Controls

Number inputs for configuring animation timing:

```jsx
<PhenixNumber 
    name="animation-duration" 
    label={__("Speed", "pds-blocks")} 
    value={attributes.style?.animation?.duration || 1000} 
    onChange={mainSetter} 
    min={0} 
    max={15000} 
    steps={100}
/>

<PhenixNumber 
    name="animation-delay" 
    label={__("Delay", "pds-blocks")} 
    value={attributes.style?.animation?.delay || 0} 
    onChange={mainSetter} 
    min={0} 
    max={3000} 
    steps={100}
/>
```

### Scroll Controls

Number inputs for configuring scroll-driven animations:

```jsx
<PhenixNumber 
    name="animation-offset" 
    label={__("Offset", "pds-blocks")} 
    value={attributes.style?.animation?.offset || 0} 
    onChange={mainSetter} 
    min={0} 
    max={3000} 
    steps={1}
/>

<PhenixNumber 
    name="animation-inset" 
    label={__("Inset", "pds-blocks")} 
    value={attributes.style?.animation?.inset || 0} 
    onChange={mainSetter} 
    min={0} 
    max={3000} 
    steps={1}
/>
```

### Toggle Controls

Switch controls for various animation options:

```jsx
<OptionControl 
    name="animation-reverse" 
    value="end" 
    checked={attributes.style?.animation?.reverse} 
    onChange={mainSetter} 
    type="switch-checkbox" 
    className="small"
>
    {__("Reverse Flow", "pds-blocks")}
</OptionControl>

<OptionControl 
    name="animation-scrollDriven" 
    value="boolean" 
    checked={attributes.style?.animation?.scrollDriven} 
    onChange={mainSetter} 
    type="switch-checkbox" 
    className="small"
>
    {__("Scroll Driven", "pds-blocks")}
</OptionControl>
```

### Group Animation Controls

Controls for configuring animation groups:

```jsx
<OptionControl 
    name="animation-group" 
    value="boolean" 
    checked={attributes.style?.animation?.group} 
    onChange={mainSetter} 
    type="switch-checkbox" 
    className="small"
>
    {__("Use as Group", "pds-blocks")}
</OptionControl>

<PhenixNumber 
    name="animation-stagger" 
    label={__("Stagger", "pds-blocks")} 
    value={attributes.style?.animation?.stagger || 100} 
    onChange={mainSetter} 
    min={0} 
    max={15000} 
    steps={10}
/>
```

## Usage Examples

### Basic Animation

```jsx
// In your edit.js file
const set_style = (target) => PhenixBlocks.setAttributes(target, attributes, setAttributes);

// Then use it in your component
<AnimationsSet
    attributes={attributes}
    mainSetter={set_style}
/>
```

### With Custom Header

```jsx
// In your edit.js file
const set_style = (target) => PhenixBlocks.setAttributes(target, attributes, setAttributes);

// Then use it in your component
<AnimationsSet
    attributes={attributes}
    mainSetter={set_style}
>
    <h3 className="components-base-control__label mb-10">
        {__("Animation Settings", "pds-blocks")}
    </h3>
</AnimationsSet>
```

## Integration with Block Attributes

To properly integrate the Animations Set with block attributes, you need to set up the attribute structure and handler function:

```jsx
// In your block.json file
"attributes": {
    "style": {
        "type": "object",
        "default": {
            "animation": {
                "name": "",
                "duration": 1000,
                "delay": 0,
                "offset": 0,
                "inset": 0,
                "reverse": false,
                "scrollDriven": false,
                "drivenEnd": 0,
                "group": false,
                "hasExit": false,
                "stagger": 100
            }
        }
    }
}

// In your edit.js file
const set_style = (target) => {
    // Get the current style object
    const currentStyle = attributes.style || {};
    const currentAnimation = currentStyle.animation || {};
    
    // Update the animation property
    let newValue;
    if (target.type === 'checkbox') {
        newValue = target.checked;
    } else {
        newValue = target.value;
    }
    
    // Create the new animation object
    const newAnimation = {
        ...currentAnimation,
        [target.name.replace('animation-', '')]: newValue
    };
    
    // Set the updated attributes
    setAttributes({
        style: {
            ...currentStyle,
            animation: newAnimation
        }
    });
};

// Then use it with the animations set
<AnimationsSet
    attributes={attributes}
    mainSetter={set_style}
/>
```

This ensures that when animation settings are changed, the corresponding block attributes are updated correctly.

## Front-End Implementation

The animation attributes set by this control are used by the Phenix front-end framework to apply animations to elements. The animation properties are typically rendered as data attributes on the HTML element:

```jsx
// In your save.js file
export default function save({ attributes }) {
    const { style } = attributes;
    const animation = style?.animation || {};
    
    // Create animation data attributes
    const animationAttrs = {};
    if (animation.name) {
        animationAttrs['data-animation'] = animation.name;
        
        if (animation.duration) animationAttrs['data-duration'] = animation.duration;
        if (animation.delay) animationAttrs['data-delay'] = animation.delay;
        if (animation.offset) animationAttrs['data-offset'] = animation.offset;
        if (animation.inset) animationAttrs['data-inset'] = animation.inset;
        if (animation.reverse) animationAttrs['data-reverse'] = true;
        if (animation.scrollDriven) animationAttrs['data-scroll'] = true;
        if (animation.drivenEnd) animationAttrs['data-progress'] = animation.drivenEnd;
        if (animation.exit) animationAttrs['data-exit'] = animation.exit;
    }
    
    return (
        <div className="animated-element" {...animationAttrs}>
            {/* Block content */}
        </div>
    );
}
```

The Phenix front-end JavaScript will then initialize these animations based on the data attributes.
