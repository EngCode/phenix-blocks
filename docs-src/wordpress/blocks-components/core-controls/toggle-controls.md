# Toggle Controls

Toggle controls provide a way for users to switch between two states (on/off, true/false) in the block editor. The Phenix Blocks system provides a versatile option control that can be configured as different types of toggles.

## Switch Control

The Switch Control (`switch.js`) provides a toggle switch for boolean settings.

### Implementation

```jsx
import OptionControl from "../px-controls/switch";

// In your component
<OptionControl
    name="toggleName"
    type="switch-checkbox"
    checked={attributes.toggleValue}
    onChange={set_value}
>
    <span>Toggle Label</span>
</OptionControl>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | String | Required | The attribute name to update |
| `type` | String | Required | Control type (`"switch-checkbox"`, `"switch-radio"`, `"checkbox"`, `"radio"`, `"button-checkbox"`, `"button-radio"`) |
| `checked` | Boolean | `false` | Whether the control is checked/active |
| `onChange` | Function | Required | Handler function for value changes |
| `children` | Node | `null` | Content to display next to the control (typically the label) |
| `value` | String | `null` | Value for the input (important for radio buttons) |
| `required` | Boolean | `false` | Whether the field is required |
| `className` | String | `""` | Additional CSS classes |

### Control Types

The `type` property determines the appearance and behavior of the toggle control:

| Type | Description |
|------|-------------|
| `"switch-checkbox"` | A toggle switch that behaves like a checkbox (can be toggled on/off) |
| `"switch-radio"` | A toggle switch that behaves like a radio button (part of a group) |
| `"checkbox"` | A standard checkbox input |
| `"radio"` | A standard radio button input |
| `"button-checkbox"` | A button-styled checkbox |
| `"button-radio"` | A button-styled radio button |

### Behavior

The Switch Control:
- Renders as a styled label containing an input element
- Updates the value when clicked
- Displays a visual indicator of the current state
- Can contain additional content (like text labels)
- Applies Phenix framework styling for consistent appearance

## Usage Examples

### Simple Toggle Switch

```jsx
<OptionControl
    name="enableFeature"
    type="switch-checkbox"
    checked={attributes.enableFeature}
    onChange={set_value}
>
    <span>{__("Enable Feature", "pds-blocks")}</span>
</OptionControl>
```

### Radio Button Group

```jsx
<div className="flexbox gap-10">
    <OptionControl
        name="alignment"
        type="radio"
        value="left"
        checked={attributes.alignment === "left"}
        onChange={set_value}
    >
        <span>{__("Left", "pds-blocks")}</span>
    </OptionControl>
    
    <OptionControl
        name="alignment"
        type="radio"
        value="center"
        checked={attributes.alignment === "center"}
        onChange={set_value}
    >
        <span>{__("Center", "pds-blocks")}</span>
    </OptionControl>
    
    <OptionControl
        name="alignment"
        type="radio"
        value="right"
        checked={attributes.alignment === "right"}
        onChange={set_value}
    >
        <span>{__("Right", "pds-blocks")}</span>
    </OptionControl>
</div>
```

### Button-Style Toggles

```jsx
<div className="flexbox gap-10">
    <OptionControl
        name="textStyle"
        type="button-checkbox"
        value="bold"
        checked={attributes.textStyle?.includes("bold")}
        onChange={set_text_style}
    >
        <i className="fas fa-bold"></i>
    </OptionControl>
    
    <OptionControl
        name="textStyle"
        type="button-checkbox"
        value="italic"
        checked={attributes.textStyle?.includes("italic")}
        onChange={set_text_style}
    >
        <i className="fas fa-italic"></i>
    </OptionControl>
    
    <OptionControl
        name="textStyle"
        type="button-checkbox"
        value="underline"
        checked={attributes.textStyle?.includes("underline")}
        onChange={set_text_style}
    >
        <i className="fas fa-underline"></i>
    </OptionControl>
</div>
```

## Integration with Block Attributes

Toggle controls require special handling for different scenarios:

### For Simple Boolean Toggles

```jsx
// In your edit.js file
const set_value = (target) => {
    // For standard toggle controls
    PhenixBlocks.set_value(target, attributes, setAttributes);
};

// Then use it with a switch control
<OptionControl
    name="enableFeature"
    type="switch-checkbox"
    checked={attributes.enableFeature}
    onChange={set_value}
>
    <span>{__("Enable Feature", "pds-blocks")}</span>
</OptionControl>
```

### For Multiple Selection Toggles

When you need to handle multiple selections (like text styling with bold, italic, underline):

```jsx
// In your edit.js file
const set_text_style = (target) => {
    // Get current styles as array
    const currentStyles = attributes.textStyle ? attributes.textStyle.split(' ') : [];
    const value = target.value;
    
    // Toggle the value in the array
    let newStyles;
    if (target.checked) {
        // Add the value if it's not already present
        newStyles = [...currentStyles, value];
    } else {
        // Remove the value if it's present
        newStyles = currentStyles.filter(style => style !== value);
    }
    
    // Update the attribute with the joined string
    setAttributes({ textStyle: newStyles.join(' ') });
};

// Then use it with checkbox controls
<OptionControl
    name="textStyle"
    type="button-checkbox"
    value="bold"
    checked={attributes.textStyle?.includes("bold")}
    onChange={set_text_style}
>
    <i className="fas fa-bold"></i>
</OptionControl>
```

This ensures that when the toggle state changes, the corresponding block attribute is updated correctly.
