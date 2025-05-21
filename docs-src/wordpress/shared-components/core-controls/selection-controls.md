# Selection Controls

Selection controls allow users to choose from predefined options in the block editor. The Phenix Blocks system provides three main types of selection controls: Select Dropdown, Data-Driven Select, and Custom Dropdown.

## Select Dropdown

The Select Dropdown control (`select.js`) provides a standard dropdown menu for selecting from a list of options.

### Implementation

```jsx
import PhenixSelect from "../px-controls/select";

// In your component
<PhenixSelect
    name="selectName"
    label="Select Label"
    value={attributes.selectValue}
    onChange={set_value}
    options={[
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" }
    ]}
    placeholder="Select an option"
    className="custom-class"
    size="small"
    search={true}
/>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | String | Required | The attribute name to update |
| `value` | String | `""` | The current selected value |
| `onChange` | Function | Required | Handler function for value changes |
| `options` | Array/Object | Required | Options for the select menu |
| `label` | String | `null` | Optional label for the select |
| `placeholder` | String | `null` | Placeholder text |
| `className` | String | `""` | Additional CSS classes |
| `size` | String | `"small"` | Size variant (`"tiny"`, `"small"`, `"normal"`, `"large"`) |
| `multiple` | Boolean | `false` | Enable multiple selection |
| `search` | Boolean | `false` | Enable search functionality |

### Options Format

The `options` property can be provided in several formats:

#### Simple Array of Objects

```javascript
[
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
]
```

#### Grouped Options (Object of Arrays)

```javascript
{
    "Group 1": [
        { label: "Option 1.1", value: "option1.1" },
        { label: "Option 1.2", value: "option1.2" }
    ],
    "Group 2": [
        { label: "Option 2.1", value: "option2.1" },
        { label: "Option 2.2", value: "option2.2" }
    ]
}
```

### Behavior

The Select Dropdown control:
- Renders a standard HTML select element with enhanced styling
- Supports option groups for organizing related options
- Can be configured for multiple selection
- Includes optional search functionality for filtering options
- Applies Phenix framework styling for consistent appearance

## Data-Driven Select

The Data-Driven Select control (`select-data.js`) extends the standard select dropdown with the ability to fetch options from WordPress data sources.

### Implementation

```jsx
import SelectFromData from "../px-controls/select-data";

// In your component
<SelectFromData
    name="postType"
    label="Post Type"
    value={attributes.postType}
    valueSetter={set_value}
    options="post-types"
    className="custom-class"
    search={true}
/>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | String | Required | The attribute name to update |
| `value` | String | `""` | The current selected value |
| `valueSetter` | Function | Required | Handler function for value changes |
| `options` | String | Required | Data source identifier |
| `label` | String | `null` | Optional label for the select |
| `className` | String | `""` | Additional CSS classes |
| `size` | String | `"small"` | Size variant (`"tiny"`, `"small"`, `"normal"`, `"large"`) |
| `multiple` | Boolean | `false` | Enable multiple selection |
| `search` | Boolean | `false` | Enable search functionality |
| `termType` | String | `null` | Specific term type for taxonomy terms |

### Available Data Sources

The `options` property can be set to one of these predefined data sources:

| Value | Description |
|-------|-------------|
| `"menu-locations"` | WordPress menu locations |
| `"taxonomies"` | Available taxonomies |
| `"taxonomies-terms"` | Terms from a specific taxonomy (requires `termType`) |
| `"post-types"` | Available post types |
| `"users-roles"` | User roles |
| `"template-parts"` | Theme template parts |

### Behavior

The Data-Driven Select control:
- Fetches options from WordPress REST API endpoints
- Automatically formats the data into appropriate options
- Provides a default option
- Supports all features of the standard Select Dropdown
- Refreshes when the data source changes

## Custom Dropdown

The Custom Dropdown control (`dropdown.js`) provides a flexible dropdown container that can contain any content, not just a select menu.

### Implementation

```jsx
import PxDropDown from "../px-controls/dropdown";

// In your component
<PxDropDown
    title="Dropdown Title"
    button="bg-transparent fs-16 square far fa-cog divider-e border-alpha-25 h-100"
    dropList="fs-14 w-min-280"
    dataPosition="bottom, end"
>
    <li className="pdy-15 pdx-15">
        {/* Custom dropdown content */}
        <h4>Custom Content</h4>
        <p>Any content can go here</p>
        <button className="btn primary">Action Button</button>
    </li>
</PxDropDown>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `button` | String | Required | CSS classes for the toggle button |
| `children` | Node | Required | Content to display in the dropdown |
| `dropList` | String | `"fs-14 w-min-200"` | CSS classes for the dropdown list |
| `label` | String | `null` | Text to display on the button |
| `title` | String | `null` | Tooltip text for the button |
| `className` | String | `""` | Additional CSS classes for the wrapper |
| `dataPosition` | String | `null` | Dropdown position (e.g., "bottom, end") |
| `support` | String | `null` | Additional features (e.g., "hover") |
| `key` | String | `null` | React key for the component |

### Behavior

The Custom Dropdown control:
- Creates a toggleable dropdown with custom content
- Supports hover activation with the "hover" support option
- Can be positioned relative to the toggle button
- Automatically closes when clicking outside
- Applies Phenix framework styling for consistent appearance

## Usage Examples

### Standard Select

```jsx
<PhenixSelect
    name="alignment"
    label={__("Alignment", "pds-blocks")}
    value={attributes.alignment}
    onChange={set_value}
    options={[
        { label: "Left", value: "start" },
        { label: "Center", value: "center" },
        { label: "Right", value: "end" }
    ]}
/>
```

### Post Type Selector

```jsx
<SelectFromData
    name="queryPostType"
    label={__("Post Type", "pds-blocks")}
    value={attributes.queryPostType}
    valueSetter={set_value}
    options="post-types"
    search={true}
/>
```

### Settings Dropdown

```jsx
<PxDropDown
    title={__("Style Options", "pds-blocks")}
    button="bg-transparent fs-16 square far fa-adjust divider-e border-alpha-25 h-100"
    dropList="fs-14 w-min-280"
>
    <li className="pdt-15 pdb-5 pdx-15 lineheight-150">
        <StylesSet 
            attributes={attributes} 
            mainSetter={set_style} 
            colorSetter={set_typography} 
        />
    </li>
</PxDropDown>
```

## Integration with Block Attributes

To properly integrate selection controls with block attributes, you need to set up attribute handler functions:

```jsx
// In your edit.js file
const set_value = (target) => {
    // For standard input controls
    PhenixBlocks.set_value(target, attributes, setAttributes);
};

// Then use it with selection controls
<PhenixSelect
    name="alignment"
    value={attributes.alignment}
    onChange={set_value}
    options={alignmentOptions}
/>

// Or with data-driven select
<SelectFromData
    name="postType"
    value={attributes.postType}
    valueSetter={set_value}
    options="post-types"
/>
```

This ensures that when the selection changes, the corresponding block attribute is updated correctly.
