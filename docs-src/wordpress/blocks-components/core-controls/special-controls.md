# Special Controls

Special controls provide unique functionality for specific use cases in the block editor. The Phenix Blocks system includes specialized controls for icon selection and URL input with suggestions.

## Icon Selection

The Icon Selection control (`icons.js`) provides an interface for selecting icons from FontAwesome icon libraries.

### Implementation

```jsx
import PhenixIcons from "../px-controls/icons";

// In your component
const set_icon = (options) => {
    setAttributes({ icon: `${options.type} ${options.value}` });
};

<PhenixIcons
    label="Select Icon"
    value={attributes.icon || "far fa-star"}
    onChange={set_icon}
/>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | String | Required | The current icon value (format: "prefix icon-name") |
| `onChange` | Function | Required | Handler function for icon selection |
| `label` | String | `null` | Optional label for the control |
| `version` | String | Auto-detected | FontAwesome version to use |

### Behavior

The Icon Selection control:
- Fetches icon data from FontAwesome JSON files
- Provides a searchable interface for browsing icons
- Groups icons into pages for better performance
- Allows switching between icon styles (Regular, Solid, Light, etc.)
- Displays a preview of the selected icon
- Returns both the icon prefix (e.g., "far") and name (e.g., "fa-star")

### Icon Format

Icons are stored in the format `"prefix icon-name"`, for example:
- `"far fa-star"` (Regular Star)
- `"fas fa-user"` (Solid User)
- `"fab fa-wordpress"` (WordPress Brand)

## URL Controls

The URL Controls component (`dynamic-url.js`) provides a dropdown with URL suggestions for internal links.

### Implementation

```jsx
import SuggestionsUrl from "../px-controls/dynamic-url";

// In your component
const [suggestions, setSuggestions] = useState([]);
const [showSuggestions, setShowSuggestions] = useState(false);

// Function to fetch suggestions
const fetchSuggestions = (searchTerm) => {
    apiFetch({ path: `wp/v2/search?search=${searchTerm}` }).then((results) => {
        setSuggestions(results);
        setShowSuggestions(true);
    });
};

// Handle suggestion click
const handleSuggestionClick = (suggestion) => {
    setAttributes({ url: suggestion.url });
    setShowSuggestions(false);
};

<div className="position-rv">
    <PhenixInput
        name="url"
        label={__("URL", "pds-blocks")}
        value={attributes.url}
        onChange={(target) => {
            set_value(target);
            fetchSuggestions(target.value);
        }}
    />
    
    {showSuggestions && suggestions.length > 0 && (
        <SuggestionsUrl
            suggestions={suggestions}
            handleSuggestionClick={handleSuggestionClick}
        />
    )}
</div>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `suggestions` | Array | Required | Array of suggestion objects with title and URL |
| `handleSuggestionClick` | Function | Required | Handler function for suggestion selection |

### Behavior

The URL Controls component:
- Displays a dropdown list of URL suggestions
- Shows both the title and URL for each suggestion
- Allows clicking on suggestions to select them
- Is typically used with a text input for URL entry
- Integrates with WordPress search API for dynamic suggestions

## Usage Examples

### Icon Button

```jsx
// In your edit.js file
const set_icon = (options) => {
    setAttributes({ buttonIcon: `${options.type} ${options.value}` });
};

// Then use it in your component
<PhenixIcons
    label={__("Button Icon", "pds-blocks")}
    value={attributes.buttonIcon || "far fa-arrow-right"}
    onChange={set_icon}
/>

<OptionControl
    name="iconPosition"
    type="switch-checkbox"
    checked={attributes.iconPosition === "before"}
    onChange={(target) => {
        setAttributes({ 
            iconPosition: target.checked ? "before" : "after" 
        });
    }}
>
    <span>{__("Icon Before Text", "pds-blocks")}</span>
</OptionControl>
```

### Internal Link Selector

```jsx
// In your edit.js file
const [pageSuggestions, setPageSuggestions] = useState([]);
const [showSuggestions, setShowSuggestions] = useState(false);

const fetchPageSuggestions = (searchTerm) => {
    apiFetch({ path: `wp/v2/search?search=${searchTerm}&type=post` }).then((results) => {
        setPageSuggestions(results);
        setShowSuggestions(true);
    });
};

const handleSuggestionClick = (suggestion) => {
    setAttributes({ linkUrl: suggestion.url });
    setShowSuggestions(false);
};

// Then use it in your component
<div className="position-rv">
    <PhenixInput
        name="linkUrl"
        label={__("Link URL", "pds-blocks")}
        value={attributes.linkUrl}
        onChange={(target) => {
            set_value(target);
            fetchPageSuggestions(target.value);
        }}
    />
    
    {showSuggestions && pageSuggestions.length > 0 && (
        <SuggestionsUrl
            suggestions={pageSuggestions}
            handleSuggestionClick={handleSuggestionClick}
        />
    )}
</div>
```

## Integration with Block Attributes

### For Icon Selection

```jsx
// In your block.json file
"attributes": {
    "icon": {
        "type": "string",
        "default": "far fa-star"
    }
}

// In your edit.js file
const set_icon = (options) => {
    setAttributes({ icon: `${options.type} ${options.value}` });
};

// Then use it with the icon selector
<PhenixIcons
    label={__("Icon", "pds-blocks")}
    value={attributes.icon}
    onChange={set_icon}
/>
```

### For URL Controls

```jsx
// In your block.json file
"attributes": {
    "url": {
        "type": "string",
        "default": ""
    }
}

// In your edit.js file
const set_value = (target) => {
    PhenixBlocks.set_value(target, attributes, setAttributes);
};

// Then use it with URL controls
<div className="position-rv">
    <PhenixInput
        name="url"
        label={__("URL", "pds-blocks")}
        value={attributes.url}
        onChange={set_value}
    />
    
    {/* URL suggestions implementation */}
</div>
```

## Advanced Usage

### Custom Icon Rendering

You can use the selected icon in your block's save function:

```jsx
// In your save.js file
export default function save({ attributes }) {
    const { icon, text } = attributes;
    
    return (
        <div className="icon-box">
            {icon && <i className={icon}></i>}
            {text && <p>{text}</p>}
        </div>
    );
}
```

### URL Validation

You can add validation to ensure URLs are properly formatted:

```jsx
const validateUrl = (url) => {
    // Basic URL validation
    const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return pattern.test(url);
};

const handleUrlChange = (target) => {
    const url = target.value;
    
    if (validateUrl(url) || url === '') {
        set_value(target);
    } else {
        // Show error message
        setUrlError(__("Please enter a valid URL", "pds-blocks"));
    }
};
```

This ensures that only valid URLs are accepted by the control.
