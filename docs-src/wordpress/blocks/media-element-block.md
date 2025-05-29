# Media Element Block

## Overview

The Media Element Block (registered as "Multimedia" in the block inserter) provides a versatile way to add and customize various media types in your content. Based on the Phenix Design System, this block supports images, videos, embeds, and iframes with extensive styling options and responsive behavior.

## Key Features

- **Multiple Media Types**: Support for images (default), video embeds (YouTube, Vimeo), iframes, and 3D viewers
- **Responsive Design**: Comprehensive aspect ratio options (1:1, 16:9, 4:3, etc.) that adapt to different screen sizes
- **Lightbox Integration**: Optional lightbox functionality for images and videos when clicked
- **Link Capabilities**: Media elements can function as links to other pages or resources
- **Styling Options**: Extensive border, shadow, and effect controls through the Phenix Design System
- **Inner Block Support**: Ability to nest other blocks within the media container for complex layouts
- **Fallback Display**: Automatic placeholder if no media source is provided

## How to Use

1. **Add the Block**: Insert the Media Element block (labeled as "Multimedia") from the Phenix Blocks category in the block inserter

2. **Select Media Type**: From the toolbar dropdown, choose the media type:
   - Image (default)
   - Video/Embed
   - iFrame
   - 3D Viewer

3. **Set Media Source**: 
   - For images: Upload or select from the media library
   - For videos: Enter the video URL or embed code
   - For iFrames: Provide the source URL

4. **Configure Aspect Ratio**: Select from the predefined aspect ratios in the toolbar to control how the media is displayed

5. **Enable Lightbox/Link**: If desired, enable the lightbox feature or set the media as a link to another page

6. **Apply Styling**: Use the sidebar panels to customize:
   - Border properties (style, width, color, radius)
   - Shadow effects
   - Position and size
   - Responsive behavior

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

## Implementation Details

The Media Element block is implemented with a combination of JavaScript for the editor interface and client-side rendering for the frontend display.

### Media Types

The block supports the following media types, each with specific rendering behavior:

1. **Image** (default)
   - Renders as an `<img>` element with responsive classes
   - Supports alt text, border styling, and lightbox functionality
   - Default fallback to placeholder if no source is provided

2. **Video/Embed**
   - Supports multiple embed types: direct video, YouTube, Vimeo, and others
   - Rendered with appropriate aspect ratio container
   - Can include player controls, autoplay, and mute options

3. **iFrame**
   - Allows embedding external content in a responsive container
   - Supports custom sizing and aspect ratios

4. **3D Viewer**
   - Specialized container for 3D model viewing

### Aspect Ratios

The block provides numerous predefined aspect ratios that can be applied to media elements:

- None (natural dimensions)
- 1:1 (square)
- 16:9 (widescreen video)
- 4:3 (standard video)
- 3:4 (portrait)
- 16:10 (widescreen monitor)
- 21:9 (ultrawide)
- And many other options

### Interactive Features

- **Lightbox Support**: When enabled, clicking on the media opens it in a lightbox overlay
- **Link Functionality**: Media can be wrapped in links to navigate to other pages or resources
- **Inner Blocks**: Supports nesting other blocks within the media container for complex layouts

## Technical Implementation

The Media Element block is built using the following components:

1. **Block Registration**: Registered with the WordPress block API with specific attributes for media type, source, and styling options

2. **Editor Interface**: Implemented with React components for the block editor, providing toolbar controls and sidebar panels

3. **Rendering Logic**: 
   - Client-side rendering using the `save` method for static content
   - Dynamic class generation based on selected attributes
   - Conditional rendering based on media type

4. **Style System**:
   - Utilizes the Phenix Design System's utility classes for styling
   - Supports responsive design through breakpoint-specific classes

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

