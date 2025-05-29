# Media Controls

Media controls allow users to select and manage media files (images, videos, documents) in the block editor. The Phenix Blocks system provides a versatile media uploader component for this purpose.

## Media Uploader

The Media Uploader control (`uploader.js`) provides an interface for selecting media files from the WordPress Media Library.

### Implementation

```jsx
import MediaUploader from "../px-controls/uploader";

// In your component
const set_media = (media) => {
    setAttributes({ mediaUrl: media.url });
};

<MediaUploader
    label="Select Image"
    value={attributes.mediaUrl}
    setValue={set_media}
    size="large"
    type="image"
    className="custom-class"
/>
```

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | String | `null` | The current media URL |
| `setValue` | Function | Required | Handler function for media selection |
| `label` | String | `null` | Optional label for the control |
| `size` | String | `"large"` | Size variant (`"small"`, `"large"`) |
| `type` | String | `"image"` | Media type |
| `className` | String | `""` | Additional CSS classes |

### Behavior

The Media Uploader control:
- Opens the WordPress Media Library when clicked
- Displays a preview of the selected media (for images)
- Shows a placeholder when no media is selected
- Has two size variants: small (compact) and large (full-width)
- Applies Phenix framework styling for consistent appearance

## Usage Examples

### Basic Image Uploader

```jsx
// In your edit.js file
const set_media = (media) => {
    setAttributes({ 
        imageUrl: media.url,
        imageId: media.id,
        imageAlt: media.alt || ''
    });
};

// Then use it in your component
<MediaUploader
    label={__("Background Image", "pds-blocks")}
    value={attributes.imageUrl}
    setValue={set_media}
    size="large"
/>
```

### Compact Media Selector

```jsx
// In your edit.js file
const set_icon = (media) => {
    setAttributes({ iconUrl: media.url });
};

// Then use it in your component
<MediaUploader
    label={__("Icon", "pds-blocks")}
    value={attributes.iconUrl}
    setValue={set_icon}
    size="small"
    className="mb-10"
/>
```

### Video Selector

```jsx
// In your edit.js file
const set_video = (media) => {
    setAttributes({ 
        videoUrl: media.url,
        videoId: media.id
    });
};

// Then use it in your component
<MediaUploader
    label={__("Video File", "pds-blocks")}
    value={attributes.videoUrl}
    setValue={set_video}
    type="video"
/>
```

## Integration with Block Attributes

To properly integrate media controls with block attributes, you need to set up a media handler function:

```jsx
// In your edit.js file
const set_media = (media) => {
    // Store multiple properties from the media object
    setAttributes({
        mediaUrl: media.url,
        mediaId: media.id,
        mediaAlt: media.alt || '',
        mediaDimensions: {
            width: media.width,
            height: media.height
        }
    });
};

// Then use it with the media uploader
<MediaUploader
    label={__("Featured Image", "pds-blocks")}
    value={attributes.mediaUrl}
    setValue={set_media}
/>
```

This ensures that when media is selected, the relevant attributes are updated with the media properties.

## Advanced Usage

### Combining with Other Controls

Media uploaders are often combined with other controls to provide a complete media management interface:

```jsx
<div className="components-base-control mb-15">
    <MediaUploader
        label={__("Image", "pds-blocks")}
        value={attributes.imageUrl}
        setValue={set_media}
    />
    
    {attributes.imageUrl && (
        <>
            <PhenixInput
                name="imageAlt"
                label={__("Alt Text", "pds-blocks")}
                value={attributes.imageAlt}
                onChange={set_value}
                className="mt-10"
            />
            
            <OptionControl
                name="imageFull"
                type="switch-checkbox"
                checked={attributes.imageFull}
                onChange={set_value}
                className="mt-10"
            >
                <span>{__("Full Width", "pds-blocks")}</span>
            </OptionControl>
        </>
    )}
</div>
```

### Handling Different Media Types

You can create specialized handler functions for different media types:

```jsx
// Image handler
const set_image = (media) => {
    setAttributes({
        imageUrl: media.url,
        imageId: media.id,
        imageAlt: media.alt || ''
    });
};

// Video handler
const set_video = (media) => {
    setAttributes({
        videoUrl: media.url,
        videoId: media.id,
        videoPoster: media.image?.src || ''
    });
};

// Document handler
const set_document = (media) => {
    setAttributes({
        documentUrl: media.url,
        documentId: media.id,
        documentTitle: media.title || '',
        documentFilesize: media.filesizeInBytes
    });
};
```

This allows you to store different properties based on the media type being selected.
