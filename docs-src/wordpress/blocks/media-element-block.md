# Media Element Block

## Overview

The Media Element Block is a versatile component in the Phenix Design System that allows you to add and customize various media elements to your WordPress content. This block supports images, videos, audio, and other media types with extensive styling and layout options.

<!-- Image placeholder for Media Element Block -->

## Key Features

- Support for multiple media types (images, videos, audio)
- Responsive image handling with various size options
- Advanced styling controls including masks, filters, and effects
- Lightbox integration for image galleries
- Video embedding from various sources (YouTube, Vimeo, etc.)
- Lazy loading for performance optimization
- Custom link options for media elements

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Media Element" or find it in the "Phenix Blocks" category
3. Add the Media Element Block to your page
4. Select the media type you want to add
5. Upload or select media from the library
6. Customize the media settings in the block sidebar

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| Media Selection | Upload or select media from the library |
| Media Type | Quick toggle between image, video, audio, or other media types |
| Alignment | Set the media alignment (left, center, right, wide, full) |
| Link Controls | Add or edit links for the media element |
| Edit Media | Access the media editing tools (crop, rotate, etc.) |
| Replace | Replace the current media with another file |
| Spacing Controls | Quick access to margin and padding settings |
| Border Options | Configure border styles, widths, and colors |

### Sidebar Controls

#### Media Options Panel

| Control | Description |
|---------|-------------|
| Media Type | Choose between image, video, audio, or other media types |
| Media Source | Select from media library, external URL, or embed code |
| Media Size | Select the image size for responsive display |
| Alt Text | Add alternative text for accessibility (images) |

#### Layout Panel

| Control | Description |
|---------|-------------|
| Alignment | Set the media alignment (left, center, right) |
| Width | Control the width of the media element |
| Height | Set a specific height or maintain aspect ratio |
| Object Fit | Control how the media fits its container (cover, contain, fill) |
| Object Position | Set the focus point for cropped media |

#### Style Panel

| Control | Description |
|---------|-------------|
| Border | Add borders with custom color, width, and style |
| Border Radius | Add rounded corners or create circular images |
| Shadow | Add shadow effects to the media element |
| Opacity | Control the transparency of the media |
| Filters | Apply CSS filters (grayscale, blur, contrast, etc.) |
| Mask | Apply shape masks to images |

#### Link Panel

| Control | Description |
|---------|-------------|
| Link To | Set where the media links to (none, media file, custom URL) |
| Open in New Tab | Whether the link opens in a new browser tab |
| Lightbox | Enable lightbox view for images |
| Download | Allow users to download the media |

#### Video/Audio Panel

| Control | Description |
|---------|-------------|
| Autoplay | Automatically start playback when page loads |
| Loop | Continuously repeat the media |
| Controls | Show or hide player controls |
| Muted | Start with sound muted |
| Poster | Set a thumbnail image for video (before play) |

## Examples

### Basic Image

A standard responsive image:

```html
<!-- wp:phenix/media-elements {"mediaType":"image","mediaId":123,"mediaUrl":"https://example.com/image.jpg","altText":"Example image"} -->
<figure class="wp-block-phenix-media-elements">
  <img src="https://example.com/image.jpg" alt="Example image" class="img-fluid">
</figure>
<!-- /wp:phenix/media-elements -->
```

### Styled Image with Border and Radius

An image with custom styling:

```html
<!-- wp:phenix/media-elements {"mediaType":"image","mediaUrl":"https://example.com/image.jpg","border":true,"borderWidth":"2px","borderColor":"#3498db","borderRadius":"lg"} -->
<figure class="wp-block-phenix-media-elements">
  <img src="https://example.com/image.jpg" alt="" class="img-fluid border-solid radius-lg" style="--border-width:2px;--border-color:#3498db">
</figure>
<!-- /wp:phenix/media-elements -->
```

### Video Embed

A responsive video embed from YouTube:

```html
<!-- wp:phenix/media-elements {"mediaType":"video","embedUrl":"https://www.youtube.com/embed/VIDEO_ID","aspectRatio":"16/9","showControls":true} -->
<figure class="wp-block-phenix-media-elements ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID?controls=1" allowfullscreen></iframe>
</figure>
<!-- /wp:phenix/media-elements -->
```

### Image with Lightbox

An image that opens in a lightbox when clicked:

```html
<!-- wp:phenix/media-elements {"mediaType":"image","mediaUrl":"https://example.com/image.jpg","enableLightbox":true} -->
<figure class="wp-block-phenix-media-elements">
  <a href="https://example.com/image.jpg" data-lightbox="true">
    <img src="https://example.com/image.jpg" alt="" class="img-fluid">
  </a>
</figure>
<!-- /wp:phenix/media-elements -->
```

## Best Practices

1. **Optimize Media Files**: Compress images and videos before uploading to improve page load times

2. **Use Alt Text**: Always add descriptive alternative text for images to improve accessibility

3. **Responsive Sizing**: Use responsive size options rather than fixed dimensions when possible

4. **Aspect Ratio**: Maintain consistent aspect ratios for media elements, especially in grids or galleries

5. **Lazy Loading**: Enable lazy loading for media-heavy pages to improve performance

6. **Video Considerations**: Set video elements to not autoplay and start muted to improve user experience

## Related Blocks

- [Container Block](./container-block.md) - For positioning media within layouts
- [Grid Row Block](./grid-row-block.md) - For creating media galleries with grid layouts
- [Group Block](./group-block.md) - For combining media with other content elements

