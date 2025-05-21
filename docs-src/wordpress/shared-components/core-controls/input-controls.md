# Input Controls

Input controls are fundamental UI components that allow users to enter and edit text and numerical values in the block editor. The Phenix Blocks system provides three main types of input controls: Basic Input, Number Input, and Text Area.

## Basic Input

The Basic Input control (`input.js`) provides a simple text input field for entering single-line text.

### Implementation

```jsx
import PhenixInput from "../px-controls/input";

// In your component
<PhenixInput
    name="inputName"
    label="Input Label"
    value={attributes.inputValue}
    onChange={set_value}
    placeholder="Enter text here"
    className="custom-class"
    size="small"
/>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | String | Required | The attribute name to update |
| `value` | String | `""` | The current value of the input |
| `onChange` | Function | Required | Handler function for value changes |
| `label` | String | `null` | Optional label for the input |
| `type` | String | `"text"` | HTML input type attribute |
| `placeholder` | String | Label value or `""` | Placeholder text |
| `className` | String | `""` | Additional CSS classes |
| `size` | String | `"small"` | Size variant (`"tiny"`, `"small"`, `"normal"`, `"large"`) |

### Behavior

The Basic Input control:
- Updates the value on blur (when focus leaves the input)
- Displays an optional label above the input
- Applies Phenix framework styling for consistent appearance
- Supports all standard HTML input types

## Number Input

The Number Input control (`number.js`) provides a specialized input for numerical values with increment/decrement buttons.

### Implementation

```jsx
import PhenixNumber from "../px-controls/number";

// In your component
<PhenixNumber
    name="numberName"
    label="Number Label"
    value={attributes.numberValue}
    onChange={set_value}
    min={0}
    max={100}
    steps={5}
/>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | String | Required | The attribute name to update |
| `value` | Number | `0` | The current value of the input |
| `onChange` | Function | Required | Handler function for value changes |
| `label` | String | `null` | Label for the input |
| `min` | Number | `Number.MIN_SAFE_INTEGER` | Minimum allowed value |
| `max` | Number | `Number.MAX_SAFE_INTEGER` | Maximum allowed value |
| `steps` | Number | `1` | Increment/decrement step size |
| `icon` | String | `null` | Optional icon class for custom styling |

### Behavior

The Number Input control:
- Provides increment and decrement buttons
- Enforces minimum and maximum value constraints
- Updates the value on direct input or button clicks
- Supports custom step sizes for increments/decrements
- Displays a label above the input

## Text Area

The Text Area control (`textarea.js`) provides a multi-line text input field for entering longer text content.

### Implementation

```jsx
import PhenixTextarea from "../px-controls/textarea";

// In your component
<PhenixTextarea
    name="textareaName"
    label="Text Area Label"
    value={attributes.textareaValue}
    onChange={set_value}
    placeholder="Enter text here"
    className="custom-class"
    style={{ height: '150px' }}
/>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | String | Required | The attribute name to update |
| `value` | String | `""` | The current value of the textarea |
| `onChange` | Function | Required | Handler function for value changes |
| `label` | String | `null` | Optional label for the textarea |
| `placeholder` | String | Label value or `""` | Placeholder text |
| `className` | String | `""` | Additional CSS classes |
| `size` | String | `"small"` | Size variant (`"tiny"`, `"small"`, `"normal"`, `"large"`) |
| `style` | Object | `{}` | Inline styles for the textarea |

### Behavior

The Text Area control:
- Updates the value on change (as the user types)
- Displays an optional label above the textarea
- Applies Phenix framework styling for consistent appearance
- Supports custom styling through the style property

## Usage Examples

### Basic Form Field

```jsx
<PhenixInput
    name="title"
    label={__("Title", "pds-blocks")}
    value={attributes.title}
    onChange={set_value}
/>
```

### Number with Constraints

```jsx
<PhenixNumber
    name="columns"
    label={__("Columns", "pds-blocks")}
    value={attributes.columns}
    onChange={set_value}
    min={1}
    max={12}
    steps={1}
/>
```

### Custom CSS Field

```jsx
<PhenixTextarea
    name="customCSS"
    label={__("Custom CSS", "pds-blocks")}
    value={attributes.customCSS}
    onChange={set_value}
    style={{ fontFamily: 'monospace', height: '200px' }}
/>
```

## Integration with Block Attributes

To properly integrate input controls with block attributes, you need to set up an attribute handler function:

```jsx
// In your edit.js file
const set_value = (target) => {
    // For standard input controls
    PhenixBlocks.set_value(target, attributes, setAttributes);
};

// Then use it with input controls
<PhenixInput
    name="title"
    value={attributes.title}
    onChange={set_value}
/>
```

This ensures that when the input value changes, the corresponding block attribute is updated correctly.
