# Navigation Controls

Navigation controls help organize complex settings into manageable sections in the block editor. The Phenix Blocks system provides a tabs interface component for this purpose.

## Tabs Interface

The Tabs Interface control (`tabs.js`) creates a tabbed interface for organizing responsive settings across different screen sizes.

### Implementation

```jsx
import ScreensTabs from "../px-controls/tabs";

// In your component
<ScreensTabs
    sm={screen => (
        <div className="responsive-options">
            {/* Mobile screen options */}
            <PhenixNumber
                name="paddingSM"
                label={__("Padding", "pds-blocks")}
                value={attributes.paddingSM}
                onChange={set_value}
            />
        </div>
    )}
    md={screen => (
        <div className="responsive-options">
            {/* Tablet screen options */}
            <PhenixNumber
                name="paddingMD"
                label={__("Padding", "pds-blocks")}
                value={attributes.paddingMD}
                onChange={set_value}
            />
        </div>
    )}
    lg={screen => (
        <div className="responsive-options">
            {/* Desktop screen options */}
            <PhenixNumber
                name="paddingLG"
                label={__("Padding", "pds-blocks")}
                value={attributes.paddingLG}
                onChange={set_value}
            />
        </div>
    )}
    xl={screen => (
        <div className="responsive-options">
            {/* Extra large screen options */}
            <PhenixNumber
                name="paddingXL"
                label={__("Padding", "pds-blocks")}
                value={attributes.paddingXL}
                onChange={set_value}
            />
        </div>
    )}
/>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `sm` | Function | `null` | Render function for mobile screen options |
| `md` | Function | `null` | Render function for tablet screen options |
| `lg` | Function | `null` | Render function for desktop screen options |
| `xl` | Function | `null` | Render function for extra large screen options |

### Behavior

The Tabs Interface control:
- Creates a row of tab buttons for each screen size
- Shows only one screen's options at a time
- Automatically switches between tabs when clicked
- Passes the current screen size to the render function
- Applies Phenix framework styling for consistent appearance
- Defaults to tablet view (`md`) unless `sm` is specified as the only option

## Usage Examples

### Responsive Spacing Controls

```jsx
<ScreensTabs
    sm={screen => (
        <div className="responsive-options">
            <PhenixNumber
                name="marginTopSM"
                label={__("Margin Top", "pds-blocks")}
                value={attributes.marginTopSM}
                onChange={set_value}
                min={0}
                max={100}
            />
            <PhenixNumber
                name="marginBottomSM"
                label={__("Margin Bottom", "pds-blocks")}
                value={attributes.marginBottomSM}
                onChange={set_value}
                min={0}
                max={100}
            />
        </div>
    )}
    md={screen => (
        <div className="responsive-options">
            <PhenixNumber
                name="marginTopMD"
                label={__("Margin Top", "pds-blocks")}
                value={attributes.marginTopMD}
                onChange={set_value}
                min={0}
                max={100}
            />
            <PhenixNumber
                name="marginBottomMD"
                label={__("Margin Bottom", "pds-blocks")}
                value={attributes.marginBottomMD}
                onChange={set_value}
                min={0}
                max={100}
            />
        </div>
    )}
    lg={screen => (
        <div className="responsive-options">
            <PhenixNumber
                name="marginTopLG"
                label={__("Margin Top", "pds-blocks")}
                value={attributes.marginTopLG}
                onChange={set_value}
                min={0}
                max={100}
            />
            <PhenixNumber
                name="marginBottomLG"
                label={__("Margin Bottom", "pds-blocks")}
                value={attributes.marginBottomLG}
                onChange={set_value}
                min={0}
                max={100}
            />
        </div>
    )}
/>
```

### Responsive Layout Controls

```jsx
<ScreensTabs
    sm={screen => (
        <div className="responsive-options">
            <PhenixSelect
                name="alignmentSM"
                label={__("Content Alignment", "pds-blocks")}
                value={attributes.alignmentSM}
                onChange={set_value}
                options={[
                    { label: __("Default", "pds-blocks"), value: "" },
                    { label: __("Start", "pds-blocks"), value: "start" },
                    { label: __("Center", "pds-blocks"), value: "center" },
                    { label: __("End", "pds-blocks"), value: "end" }
                ]}
            />
        </div>
    )}
    md={screen => (
        <div className="responsive-options">
            <PhenixSelect
                name="alignmentMD"
                label={__("Content Alignment", "pds-blocks")}
                value={attributes.alignmentMD}
                onChange={set_value}
                options={[
                    { label: __("Default", "pds-blocks"), value: "" },
                    { label: __("Start", "pds-blocks"), value: "start" },
                    { label: __("Center", "pds-blocks"), value: "center" },
                    { label: __("End", "pds-blocks"), value: "end" }
                ]}
            />
        </div>
    )}
    lg={screen => (
        <div className="responsive-options">
            <PhenixSelect
                name="alignmentLG"
                label={__("Content Alignment", "pds-blocks")}
                value={attributes.alignmentLG}
                onChange={set_value}
                options={[
                    { label: __("Default", "pds-blocks"), value: "" },
                    { label: __("Start", "pds-blocks"), value: "start" },
                    { label: __("Center", "pds-blocks"), value: "center" },
                    { label: __("End", "pds-blocks"), value: "end" }
                ]}
            />
        </div>
    )}
/>
```

## Integration with Block Attributes

To properly integrate tabs with block attributes, you need to set up responsive attribute names:

```jsx
// In your block.json file
"attributes": {
    "paddingSM": { "type": "string", "default": "15" },
    "paddingMD": { "type": "string", "default": "20" },
    "paddingLG": { "type": "string", "default": "30" },
    "paddingXL": { "type": "string", "default": "40" }
}

// In your edit.js file
const set_value = (target) => {
    // Standard attribute setter
    PhenixBlocks.set_value(target, attributes, setAttributes);
};

// Then use it with the tabs control
<ScreensTabs
    sm={screen => (
        <PhenixNumber
            name="paddingSM"
            label={__("Padding", "pds-blocks")}
            value={attributes.paddingSM}
            onChange={set_value}
        />
    )}
    md={screen => (
        <PhenixNumber
            name="paddingMD"
            label={__("Padding", "pds-blocks")}
            value={attributes.paddingMD}
            onChange={set_value}
        />
    )}
    // ...other screen sizes
/>
```

## Advanced Usage

### Dynamic Tab Content Based on Screen Size

You can use the screen parameter passed to each render function to create dynamic content:

```jsx
<ScreensTabs
    sm={screen => (
        <div className="responsive-options">
            <h4>{__(`${screen.toUpperCase()} Screen Settings`, "pds-blocks")}</h4>
            <PhenixNumber
                name={`padding${screen.toUpperCase()}`}
                label={__("Padding", "pds-blocks")}
                value={attributes[`padding${screen.toUpperCase()}`]}
                onChange={set_value}
            />
        </div>
    )}
    md={screen => (
        <div className="responsive-options">
            <h4>{__(`${screen.toUpperCase()} Screen Settings`, "pds-blocks")}</h4>
            <PhenixNumber
                name={`padding${screen.toUpperCase()}`}
                label={__("Padding", "pds-blocks")}
                value={attributes[`padding${screen.toUpperCase()}`]}
                onChange={set_value}
            />
        </div>
    )}
    // ...other screen sizes with the same pattern
/>
```

This approach reduces code duplication by using the screen parameter to dynamically generate attribute names.
