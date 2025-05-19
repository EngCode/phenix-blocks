# Background & Images

The Phenix Multimedia System provides two primary methods for displaying static visual content: CSS backgrounds and image elements.

## Background Type

The `background` type creates a CSS background image, which is ideal for decorative elements where the image doesn't need to be part of the document's content flow.

### Basic Usage

```html
<div class="px-media" 
     data-src="path/to/image.jpg" 
     data-type="background">
</div>
```

### JavaScript Initialization

```js
Phenix('.px-media').multimedia({
    type: 'background',
    src: 'path/to/image.jpg'
});
```

### Features

- Automatically sets the image as a CSS background
- Supports all aspect ratio options
- Works with lazy loading for performance optimization
- Integrates with Splide sliders and Marquee elements

### Example with Aspect Ratio

```html
<div class="px-media ratio-16x9" 
     data-src="path/to/image.jpg" 
     data-type="background">
</div>
```

## Image Type

The `image` type creates an actual `<img>` element, which is better for SEO and accessibility compared to CSS backgrounds.

### Basic Usage

```html
<div class="px-media" 
     data-src="path/to/image.jpg" 
     data-type="image" 
     data-alt="Image description">
</div>
```

### JavaScript Initialization

```js
Phenix('.px-media').multimedia({
    type: 'image',
    src: 'path/to/image.jpg',
    alt: 'Image description'
});
```

### Features

- Creates an actual `<img>` element for better SEO
- Automatically adds `loading="lazy"` attribute for native lazy loading
- Supports alternative text for accessibility
- Maintains aspect ratio constraints

### Example with Custom Aspect Ratio

```html
<div class="px-media" 
     data-src="path/to/image.jpg" 
     data-type="image" 
     data-alt="Image description"
     data-size="75%">
</div>
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | String | 'background' | Set to 'background' or 'image' |
| `src` | String | null | Source URL for the image |
| `size` | String | null | Aspect ratio: '1x1', '4x3', '16x9', '16x10', '21x9', or percentage |
| `lazyloading` | Boolean | false | Enable lazy loading |
| `alt` | String | '' | Alternative text for images (only used with image type) |

## Implementation Details

When using the `background` type, the system:

1. Cleans the source URL (encoding and handling special characters)
2. Sets the image as a CSS background using `element.style.backgroundImage`
3. Removes any loading state classes

When using the `image` type, the system:

1. Creates an `<img>` element if one doesn't already exist
2. Sets the `src` and `alt` attributes
3. Adds the `loading="lazy"` attribute for native lazy loading

## Best Practices

- Use `background` type for decorative elements
- Use `image` type for content images that should be indexed by search engines
- Always provide meaningful `alt` text for image elements
- Consider using lazy loading for images below the fold
- Choose the appropriate aspect ratio for your design

## Browser Compatibility

The background and image functionality is compatible with all modern browsers. Native lazy loading support varies by browser, but the system provides fallback mechanisms for older browsers.
