# Gradient & Mixed Backgrounds

The Phenix Multimedia System provides powerful options for creating gradient backgrounds and combining images with gradient overlays.

## Gradient Type

The `gradient` type creates CSS gradient backgrounds, supporting linear, radial, and conic gradient types.

### Basic Usage

```html
<div class="px-media" 
     data-type="gradient" 
     data-gradient="45deg, #ff9a9e, #fad0c4" 
     data-mode="linear">
</div>
```

### JavaScript Initialization

```js
Phenix('.px-media').multimedia({
    type: 'gradient',
    gradient: {
        value: ['45deg', '#ff9a9e', '#fad0c4'],
        mode: 'linear',
        repeat: false
    }
});
```

### Gradient Modes

The system supports three gradient modes:

#### Linear Gradient

```html
<div class="px-media ratio-16x9" 
     data-type="gradient" 
     data-gradient="to right, #4facfe, #00f2fe" 
     data-mode="linear">
</div>
```

#### Radial Gradient

```html
<div class="px-media ratio-1x1" 
     data-type="gradient" 
     data-gradient="#ff9a9e, #fad0c4" 
     data-mode="radial">
</div>
```

#### Conic Gradient

```html
<div class="px-media ratio-1x1" 
     data-type="gradient" 
     data-gradient="from 0deg, red, orange, yellow, green, blue, purple" 
     data-mode="conic">
</div>
```

### Repeating Gradients

Enable repeating gradients with the `data-repeat` attribute:

```html
<div class="px-media ratio-16x9" 
     data-type="gradient" 
     data-gradient="45deg, #ff9a9e 0%, #fad0c4 10%" 
     data-mode="linear" 
     data-repeat="true">
</div>
```

## Mixed Background Type

The `mixed-bg` type combines an image with a gradient overlay, creating sophisticated visual effects.

### Basic Usage

```html
<div class="px-media" 
     data-src="path/to/image.jpg" 
     data-type="mixed-bg" 
     data-gradient="rgba(0,0,0,0.5), rgba(0,0,0,0.7)">
</div>
```

### JavaScript Initialization

```js
Phenix('.px-media').multimedia({
    type: 'mixed-bg',
    src: 'path/to/image.jpg',
    gradient: {
        value: ['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)'],
        mode: 'linear'
    }
});
```

### Overlay with Content

A common use case is to add content on top of the mixed background:

```html
<div class="px-media ratio-21x9" 
     data-src="path/to/image.jpg" 
     data-type="mixed-bg" 
     data-gradient="rgba(0,0,0,0.3), rgba(0,0,0,0.7)">
  <div class="content position-absolute fluid flexbox align-center tx-align-center">
    <h2 class="color-white">Overlay Content</h2>
  </div>
</div>
```

### Gradient Order

Control the stacking order of the gradient and background with the `data-bg-order` attribute:

```html
<!-- Gradient on top of image (default) -->
<div class="px-media" 
     data-src="path/to/image.jpg" 
     data-type="mixed-bg" 
     data-gradient="rgba(0,0,0,0.5), rgba(0,0,0,0.7)">
</div>

<!-- Image on top of gradient -->
<div class="px-media" 
     data-src="path/to/image.jpg" 
     data-type="mixed-bg" 
     data-gradient="rgba(0,0,0,0.5), rgba(0,0,0,0.7)"
     data-bg-order="reverse">
</div>
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | String | 'background' | Set to 'gradient' or 'mixed-bg' |
| `src` | String | null | Source URL for the image (only for mixed-bg) |
| `size` | String | null | Aspect ratio: '1x1', '4x3', '16x9', '16x10', '21x9', or percentage |
| `gradient` | Object/String | null | Gradient settings as object or string |
| `gradient.value` | Array | null | CSS gradient value as array |
| `gradient.mode` | String | 'linear' | Gradient mode: 'linear', 'radial', 'conic' |
| `gradient.repeat` | Boolean | false | Whether to repeat the gradient |
| `lazyloading` | Boolean | false | Enable lazy loading (for mixed-bg) |

## Implementation Details

The system processes gradients as follows:

1. For the `gradient` type:
   - Checks if the gradient includes multiple colors
   - Creates a CSS gradient with the specified mode and values
   - For single-color values, sets a solid background color

2. For the `mixed-bg` type:
   - Sets the background image first
   - Creates a gradient overlay
   - Combines them using multiple background images in CSS
   - Respects the background order specified by `data-bg-order`

## Gradient Value Formats

The system supports various gradient value formats:

- **Angle + Colors**: `45deg, #ff9a9e, #fad0c4`
- **Direction + Colors**: `to right, #4facfe, #00f2fe`
- **Colors Only**: `#ff9a9e, #fad0c4` (defaults to top-to-bottom for linear)
- **With Color Stops**: `45deg, #ff9a9e 0%, #fad0c4 100%`
- **Using RGBA**: `rgba(0,0,0,0.5), rgba(0,0,0,0.7)`
- **Using CSS Variables**: `var(--color-primary), var(--color-secondary)`

## Best Practices

- Use RGBA colors for overlays to maintain transparency
- Consider accessibility and ensure sufficient contrast for any text
- Test gradient overlays with different images to ensure visibility
- Use aspect ratios to maintain consistent proportions
- For text overlays, use dark gradients over light images and vice versa

## Browser Compatibility

The gradient and mixed background functionality is compatible with all modern browsers. For older browsers, the system will fall back to simpler background implementations.
