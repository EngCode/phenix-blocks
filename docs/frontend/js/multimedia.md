# Multimedia System

## Overview

The Phenix Multimedia System provides a powerful and flexible way to handle various media types in your web applications. It allows you to create responsive media elements with aspect-ratio support, including backgrounds, images, embedded media, gradients, mixed backgrounds, and 3D objects.

The system is designed to be flexible, easy to use, and performance-optimized with features like lazy loading.

## Key Features

- **Responsive Media Elements**: Create media with proper aspect ratios that adapt to any screen size
- **Multiple Media Types**: Support for backgrounds, images, videos, iframes, gradients, and more
- **Lazy Loading**: Performance optimization by loading media only when needed
- **Gradient Support**: Create beautiful gradient backgrounds with multiple modes
- **Mixed Backgrounds**: Combine images with gradient overlays for stunning visual effects
- **3D Object Rendering**: Display 3D models using Three.js integration
- **Component Integration**: Seamless integration with Splide sliders and Marquee elements

## Media Types Documentation

The Multimedia System is organized into specialized modules for different media types:

- [**Background & Images**](./multimedia/background-images.md): Static media elements including CSS backgrounds and image tags
- [**Embed Media**](./multimedia/embed-media.md): Videos, iframes, YouTube, Vimeo, and other embedded content
- [**Gradient & Mixed Backgrounds**](./multimedia/gradients.md): Gradient backgrounds and image-gradient combinations
- [**3D Objects**](./multimedia/3d-objects.md): Integration with Three.js for 3D model rendering

## Basic Usage

The most basic implementation requires an element with the `.px-media` class and appropriate data attributes:

```html
<!-- Basic Multimedia Element -->
<div class="px-media" 
     data-src="path/to/media" 
     data-type="background">
</div>
```

```js
// Initialize multimedia elements
Phenix('.px-media').multimedia();
```

See the specific documentation pages for detailed examples of each media type.

## Media Types

The Phenix Multimedia System supports several media types that can be specified using the `data-type` attribute or the `type` option:

| Media Type | Description | Documentation |
|------------|-------------|---------------|
| `background` | CSS background images | [Background & Images](./multimedia/background-images.md) |
| `image` | Image elements (better for SEO) | [Background & Images](./multimedia/background-images.md) |
| `embed` | Videos, iframes, YouTube, etc. | [Embed Media](./multimedia/embed-media.md) |
| `gradient` | CSS gradient backgrounds | [Gradient & Mixed Backgrounds](./multimedia/gradients.md) |
| `mixed-bg` | Image with gradient overlay | [Gradient & Mixed Backgrounds](./multimedia/gradients.md) |
| `3d-viewer` | 3D model rendering | [3D Objects](./multimedia/3d-objects.md) |

## Common Features

### Aspect Ratio

All multimedia elements support various aspect ratios that can be specified using the `data-size` attribute or CSS classes:

```html
<!-- Square (1:1) -->
<div class="px-media ratio-1x1" data-src="path/to/image.jpg"></div>

<!-- Classic (4:3) -->
<div class="px-media" data-src="path/to/image.jpg" data-size="4x3"></div>

<!-- HD (16:9) -->
<div class="px-media ratio-16x9" data-src="path/to/image.jpg"></div>

<!-- Widescreen (21:9) -->
<div class="px-media" data-src="path/to/image.jpg" data-size="21x9"></div>

<!-- Custom percentage -->
<div class="px-media" data-src="path/to/image.jpg" data-size="75%"></div>

<!-- No aspect ratio -->
<div class="px-media ratio-x" data-src="path/to/image.jpg"></div>
```

### Lazy Loading

Enable lazy loading to load media only when it comes into view:

```html
<div class="px-media" 
     data-src="path/to/image.jpg" 
     data-type="background" 
     data-lazyloading="true">
</div>
```

```js
Phenix('.px-media').multimedia({
    lazyloading: true
});
```

## JavaScript API

The Multimedia System can be initialized and configured using JavaScript:

```js
Phenix('.px-media').multimedia({
    // Media type
    type: 'background', // background, image, embed, gradient, mixed-bg, 3d-viewer
    
    // Media source
    src: 'path/to/media',
    
    // Aspect ratio
    size: '16x9', // 1x1, 4x3, 16x9, 16x10, 21x9, percentage (e.g., '75%')
    
    // Lazy loading
    lazyloading: false,
    
    // Additional settings (see specific documentation pages for details)
    // ...
});
```

See the specific documentation pages for detailed configuration options for each media type.

## Integration with Other Components

The Multimedia System automatically integrates with other Phenix components:

- **Slider Integration**: Automatically handles media in Splide sliders
- **Marquee Integration**: Properly loads media in marquee elements
- **Modal Integration**: Works with popup modals for lightbox functionality

## Common Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | String | 'background' | Media type: 'background', 'image', 'embed', 'gradient', 'mixed-bg', '3d-viewer' |
| `src` | String | null | Source URL for the media |
| `size` | String | null | Aspect ratio: '1x1', '4x3', '16x9', '16x10', '21x9', or percentage |
| `lazyloading` | Boolean | false | Enable lazy loading |

See the specific documentation pages for detailed configuration options for each media type.

## CSS Classes

| Class | Description |
|-------|-------------|
| `.px-media` | Main multimedia container |
| `.ratio-1x1` | Square aspect ratio (1:1) |
| `.ratio-4x3` | Classic aspect ratio (4:3) |
| `.ratio-16x9` | HD aspect ratio (16:9) |
| `.ratio-16x10` | Widescreen aspect ratio (16:10) |
| `.ratio-21x9` | Ultra-wide aspect ratio (21:9) |
| `.ratio-x` | No aspect ratio |
| `.px-is-loading` | Applied during lazy loading |

## Browser Compatibility

The Phenix Multimedia System is compatible with all modern browsers. For 3D object rendering, WebGL support is required.
