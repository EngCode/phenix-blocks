# Embed Media

The `embed` type is the main method for embedding all types of media content in the Phenix Multimedia System. This includes videos, YouTube, Vimeo, iframes, and audio content.

## Important Concept

With the Phenix Multimedia System, the `embed` type is specified using the `data-type="embed"` attribute, while the specific media format to embed is defined by the `data-embed` attribute.

## Supported Embed Types

The system supports the following embed types:

- `video`: Local or remote video files
- `youtube`: YouTube videos
- `vimeo`: Vimeo videos
- `iframe`: Generic iframe content
- `audio`: Audio files

## Video Embed

Embed local or remote video files with full control over playback options.

### Basic Usage

```html
<div class="px-media ratio-16x9" 
     data-src="path/to/video.mp4" 
     data-type="embed" 
     data-embed="video" 
     data-controls="true">
</div>
```

### JavaScript Initialization

```js
Phenix('.px-media').multimedia({
    type: 'embed',
    embed: 'video',
    src: 'path/to/video.mp4',
    controls: true,
    autoplay: false,
    loop: false,
    muted: false
});
```

### Video with Poster Image

```html
<div class="px-media ratio-16x9" 
     data-src="path/to/video.mp4" 
     data-type="embed" 
     data-embed="video" 
     data-cover="path/to/poster.jpg" 
     data-controls="true">
</div>
```

### Hover Autoplay

The system supports a special `hover` mode for autoplay, which plays the video when the user hovers over it and pauses when they move away:

```html
<div class="px-media ratio-16x9" 
     data-src="path/to/video.mp4" 
     data-type="embed" 
     data-embed="video" 
     data-autoplay="hover">
</div>
```

## YouTube Embed

Easily embed YouTube videos with automatic URL conversion.

### Basic Usage

```html
<div class="px-media ratio-16x9" 
     data-src="https://www.youtube.com/watch?v=VIDEO_ID" 
     data-type="embed" 
     data-embed="youtube" 
     data-controls="true">
</div>
```

The system automatically converts YouTube URLs to the proper embed format, supporting both standard YouTube URLs and shortened youtu.be links.

### YouTube with Options

```html
<div class="px-media ratio-16x9" 
     data-src="https://www.youtube.com/watch?v=VIDEO_ID" 
     data-type="embed" 
     data-embed="youtube" 
     data-controls="true" 
     data-autoplay="true" 
     data-muted="true">
</div>
```

## Vimeo Embed

Embed Vimeo videos with automatic URL conversion.

### Basic Usage

```html
<div class="px-media ratio-16x9" 
     data-src="https://vimeo.com/VIDEO_ID" 
     data-type="embed" 
     data-embed="vimeo" 
     data-controls="true">
</div>
```

## Generic Iframe Embed

Embed any content that supports iframe embedding.

### Basic Usage

```html
<div class="px-media ratio-16x9" 
     data-src="https://example.com/embed" 
     data-type="embed" 
     data-embed="iframe">
</div>
```

## Audio Embed

Embed audio files with playback controls.

### Basic Usage

```html
<div class="px-media" 
     data-src="path/to/audio.mp3" 
     data-type="embed" 
     data-embed="audio" 
     data-controls="true">
</div>
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | String | 'background' | Must be set to 'embed' for embedded media |
| `embed` | String | 'video' | Embed type: 'video', 'youtube', 'vimeo', 'iframe', 'audio' |
| `src` | String | null | Source URL for the media |
| `size` | String | null | Aspect ratio: '1x1', '4x3', '16x9', '16x10', '21x9', or percentage |
| `controls` | Boolean | true | Show media controls |
| `autoplay` | String/Boolean | false | Autoplay media (can be true, false, or 'hover') |
| `loop` | Boolean | false | Loop media |
| `muted` | Boolean | false | Mute audio |
| `cover` | String | null | Cover/poster image for videos |
| `player` | String | null | Player type: 'phenix', 'html', 'standard' |
| `lazyloading` | Boolean | false | Enable lazy loading |

## Implementation Details

The system handles different embed types as follows:

1. **Video**: Creates a `<video>` element with the specified attributes
2. **YouTube/Vimeo**: Automatically converts standard URLs to embed URLs and creates an iframe
3. **Iframe**: Creates a standard iframe with appropriate sandbox attributes
4. **Audio**: Creates an audio element with the specified controls

For YouTube URLs, the system automatically converts:
- `youtube.com/watch?v=VIDEO_ID` to `youtube.com/embed/VIDEO_ID`
- `youtu.be/VIDEO_ID` to `youtube.com/embed/VIDEO_ID`

For Vimeo URLs, the system converts:
- `vimeo.com/VIDEO_ID` to `player.vimeo.com/video/VIDEO_ID`

## Best Practices

- Always specify an aspect ratio for video content (typically 16:9)
- Use poster images for videos to improve initial loading appearance
- Consider using the 'hover' autoplay feature for decorative videos
- Enable controls for user-interactive videos
- Use muted autoplay for background videos
- Consider accessibility when embedding media

## Browser Compatibility

The embed functionality is compatible with all modern browsers. Autoplay behavior may vary depending on browser policies, particularly for videos with sound.
