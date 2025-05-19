# 3D Objects

The Phenix Multimedia System includes support for rendering 3D models using Three.js integration. This allows you to easily display interactive 3D content in your web applications.

## 3D Viewer Type

The `3d-viewer` type creates a canvas element that renders 3D models using Three.js.

### Basic Usage

```html
<div class="px-media ratio-16x9" 
     data-type="3d-viewer" 
     data-src="path/to/model.gltf" 
     data-background="#f0f0f0" 
     data-auto-rotate="true" 
     data-controls="orbit">
</div>
```

### JavaScript Initialization

```js
Phenix('.px-media').multimedia({
    type: '3d-viewer',
    src: 'path/to/model.gltf',
    // Additional options can be set via data attributes
});
```

## Supported Model Formats

The system automatically detects the model type based on the file extension:

- `.gltf` / `.glb` - GL Transmission Format (recommended)
- `.obj` - Wavefront OBJ format
- `.fbx` - Filmbox format

If no extension is detected or it's not recognized, the system defaults to GLTF.

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | String | 'background' | Must be set to '3d-viewer' |
| `src` | String | null | Source URL for the 3D model |
| `background` | String | 'transparent' | Background color for the 3D scene |
| `auto-rotate` | Boolean | false | Enable automatic rotation of the model |
| `controls` | String | 'orbit' | Controls type for interacting with the model |
| `size` | String | null | Aspect ratio: '1x1', '4x3', '16x9', '16x10', '21x9', or percentage |

## Implementation Details

The 3D viewer implementation works as follows:

1. Creates a canvas element with the class `px-3d`
2. Detects the model type from the file extension
3. Sets up the canvas with the appropriate attributes
4. Loads the Three.js utilities script if not already loaded
5. Initializes the 3D viewer with the specified options

The system uses a utility script called `three-utils.js` that handles the Three.js initialization and provides a consistent API for rendering different model types.

## Asset Base Path

The system uses the `window.PDS_WP_KEY.assetsBasePath` value to determine the base path for loading Three.js resources. This is typically set by WordPress when the Phenix Design System is initialized.

## Example with Custom Background

```html
<div class="px-media ratio-1x1" 
     data-type="3d-viewer" 
     data-src="path/to/model.gltf" 
     data-background="#000000" 
     data-auto-rotate="true" 
     data-controls="orbit">
</div>
```

## Example with Transparent Background

```html
<div class="px-media ratio-16x9" 
     data-type="3d-viewer" 
     data-src="path/to/model.glb" 
     data-background="null" 
     data-auto-rotate="false" 
     data-controls="orbit">
</div>
```

Setting `data-background="null"` will create a transparent background, allowing the 3D model to blend with the page background.

## Control Types

The system supports different control types for interacting with the 3D model:

- `orbit` - Orbit controls that allow rotating around the model
- Other control types may be available depending on the Three.js implementation

## Best Practices

- Use GLTF/GLB formats for the best compatibility and performance
- Optimize 3D models for web use (reduce polygon count, texture sizes)
- Provide appropriate aspect ratios to contain the 3D viewer
- Consider using auto-rotate for decorative models
- Test 3D functionality across different devices and browsers
- Be mindful of file sizes for 3D models to ensure good performance

## Browser Compatibility

The 3D viewer functionality requires WebGL support, which is available in all modern browsers. However, performance may vary depending on the device's graphics capabilities. The system will gracefully handle cases where WebGL is not supported.
