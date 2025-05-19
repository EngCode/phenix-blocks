# Media Utilities

The Phenix Design System provides a robust set of utilities for handling media elements such as images, videos, and iframes. These utilities help maintain consistent aspect ratios, control media behavior, and create responsive media elements.

## Overview

Media utilities in Phenix Design System include:

1. **Aspect Ratio Control** - Maintain consistent width-to-height ratios
2. **Media Container** - Create responsive media elements with various behaviors
3. **Object Fit Control** - Manage how media content fits within its container
4. **Lazy Loading** - Improve performance with lazy-loaded media
5. **Background Media** - Control background images and videos

## Aspect Ratio

The aspect ratio utilities ensure that elements maintain a specific width-to-height ratio, which is particularly useful for media containers, cards, and responsive layouts.

```html
<!-- Basic media element with 16:9 aspect ratio -->
<div class="px-media ratio-16x9">
  <img src="image.jpg" alt="Description" class="px-media-img">
</div>

<!-- Video with 4:3 aspect ratio -->
<div class="px-media ratio-4x3">
  <video src="video.mp4" class="px-video"></video>
</div>

<!-- YouTube iframe with 16:9 aspect ratio -->
<div class="px-media ratio-16x9">
  <iframe src="https://www.youtube.com/embed/..." class="px-iframe"></iframe>
</div>
```

### Available Aspect Ratios

The system provides the following predefined aspect ratios:

- `ratio-1x1` - Square (1:1)
- `ratio-4x3` - Classic TV/Monitor (4:3)
- `ratio-3x4` - Portrait classic (3:4)
- `ratio-16x9` - Widescreen (16:9)
- `ratio-9x16` - Portrait widescreen (9:16)
- `ratio-21x9` - Ultrawide (21:9)
- `ratio-9x21` - Portrait ultrawide (9:21)
- `ratio-16x10` - Standard monitor (16:10)
- `ratio-10x16` - Portrait standard monitor (10:16)
- `ratio-16x11` - Alternative monitor (16:11)
- `ratio-11x16` - Portrait alternative (11:16)
- `ratio-16x14` - Nearly square landscape (16:14)
- `ratio-14x16` - Nearly square portrait (14:16)
- `ratio-3x1` - Panoramic (3:1)
- `ratio-1x3` - Vertical panoramic (1:3)

### Responsive Aspect Ratios

You can apply different aspect ratios at different screen sizes:

```html
<!-- 1:1 on mobile, 16:9 on medium screens, 21:9 on large screens -->
<div class="px-media ratio-1x1 ratio-md-16x9 ratio-lg-21x9">
  <img src="image.jpg" alt="Description" class="px-media-img">
</div>
```

Available responsive prefixes:
- No prefix: All screen sizes
- `-md`: Medium screens and up (≥ 768px)
- `-lg`: Large screens and up (≥ 1024px)
- `-xl`: xLarge screens and up (≥ 1400px)

## Media Container

The `.px-media` class creates a standardized container for various media types with consistent behaviors:

```html
<!-- Basic media container -->
<div class="px-media">
  <img src="image.jpg" alt="Description" class="px-media-img">
</div>

<!-- Media container with background image -->
<div class="px-media" style="background-image: url('image.jpg');">
  <!-- Optional overlay or content -->
</div>

<!-- Video media container -->
<div class="px-media">
  <video src="video.mp4" class="px-video"></video>
</div>

<!-- Iframe container (e.g., for YouTube) -->
<div class="px-media">
  <iframe src="https://www.youtube.com/embed/..." class="px-iframe"></iframe>
</div>
```

### Media Container Features

The `.px-media` class automatically provides:

- Relative positioning for aspect ratio support
- Border radius inheritance for nested media elements
- Background size and position defaults (`cover` and `center`)
- Full-width behavior for nested media elements
- Proper object-fit behavior

### Custom Media Elements

For more flexibility, you can position elements within media containers:

```html
<!-- Media container with custom overlay element -->
<div class="px-media ratio-16x9">
  <img src="image.jpg" alt="Description" class="px-media-img">
  <div class="px-media-element bg-dark-transparent px-15 py-10 radius-sm">
    <h3 class="color-white">Overlay Title</h3>
  </div>
</div>
```

The `.px-media-element` class positions elements in the center of the media container by default.

## Object Fit Control

Control how media content fits within its container:

```html
<!-- Force image to cover container -->
<img src="image.jpg" alt="Description" class="object-fit">

<!-- This also works with the px-media container -->
<div class="px-media ratio-16x9">
  <img src="image.jpg" alt="Description" class="object-fit">
</div>
```

## Lazy Loading

Improve page performance by deferring media loading:

```html
<!-- Lazy loaded image -->
<div class="px-media ratio-16x9">
  <img src="placeholder.jpg" data-src="actual-image.jpg" class="px-loader px-media-img">
</div>
```

The `.px-loader` class provides:
- A background color placeholder
- Automatic transition to the actual image when loaded
- Appropriate object-fit behavior

## Background Media Types

Control background behavior for media elements:

```html
<!-- Background image type -->
<div class="px-media ratio-16x9" data-type="image" style="background-image: url('image.jpg');">
  <!-- Optional content -->
</div>
```

When using `data-type="image"`, the element behaves as a background image container, which can be useful for creating cards, banners, and other UI elements with background media.

## Responsive Media Examples

### Card with Responsive Media

```html
<div class="card overflow-hidden">
  <div class="px-media ratio-4x3 ratio-md-16x9">
    <img src="image.jpg" alt="Card image" class="px-media-img">
  </div>
  <div class="card-body p-20">
    <h3 class="mb-10">Card Title</h3>
    <p>Card description text...</p>
  </div>
</div>
```

### Video Banner

```html
<div class="px-media ratio-21x9 mb-30">
  <video src="banner.mp4" autoplay muted loop class="px-video"></video>
  <div class="px-media-element text-center">
    <h1 class="color-white display-h3 mb-15">Video Banner Title</h1>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
```

### Responsive Gallery

```html
<div class="row gp-15">
  <div class="col-6 col-md-4">
    <div class="px-media ratio-1x1">
      <img src="gallery-1.jpg" alt="Gallery item" class="px-media-img">
    </div>
  </div>
  <div class="col-6 col-md-4">
    <div class="px-media ratio-1x1">
      <img src="gallery-2.jpg" alt="Gallery item" class="px-media-img">
    </div>
  </div>
  <div class="col-6 col-md-4">
    <div class="px-media ratio-1x1">
      <img src="gallery-3.jpg" alt="Gallery item" class="px-media-img">
    </div>
  </div>
</div>
```

## Advanced Media Handling with JavaScript

For more complex media handling, explore the [Phenix Media Elements (JavaScript)](/frontend/js/multimedia).

## Best Practices

1. Always include proper alt text for images
2. Use the ratio class that best matches your content's original aspect ratio
3. Combine media utilities with responsive classes for optimal display across devices
4. Use lazy loading for non-critical media or pages with multiple images
5. For critical images (e.g., hero sections), avoid lazy loading to ensure immediate display 