# Carousel Slider

## Overview

The Carousel Slider control in the Phenix Design System provides powerful functionality for creating interactive slideshows and carousels. Built on the robust Swiper.js library, this feature allows you to showcase multiple content items in a space-efficient, engaging format. With comprehensive configuration options and responsive settings, you can create everything from simple image sliders to complex product carousels and testimonial displays.

## Key Features

- **Touch-enabled navigation** for mobile and desktop
- **Multiple slide layouts** including grid and stack options
- **Autoplay functionality** with customizable timing
- **Navigation controls** including arrows, dots, and thumbnails
- **Transition effects** for engaging slide changes
- **Responsive settings** for different screen sizes
- **Accessibility features** for inclusive user experience

## How Carousel Slider Works

The Carousel Slider transforms a collection of content blocks into an interactive slideshow. It can be applied to various blocks in the Phenix Design System, including the Slider Block, Dynamic Query Block, and others that support carousel functionality.

## Available Controls

### Slider Layout

Control how slides are arranged and displayed:

| Option | Description |
|--------|-------------|
| Single | One slide visible at a time |
| Multiple | Multiple slides visible at once |
| Grid | Slides arranged in rows and columns |
| Stack | Slides partially overlapping each other |

### Slides Per View

Set how many slides are visible simultaneously:

| Option | Description |
|--------|-------------|
| 1 | One slide at a time (default) |
| 2-6 | Multiple slides visible at once |
| Auto | Automatically calculate based on slide width |

### Space Between Slides

Control the gap between slides:

| Option | Description |
|--------|-------------|
| None | No gap between slides |
| Small | 8px gap between slides |
| Medium | 16px gap between slides |
| Large | 24px gap between slides |
| Custom | Set a custom gap value |

### Navigation Controls

Choose which navigation elements to display:

| Control | Description |
|---------|-------------|
| Arrows | Previous/Next buttons for slide navigation |
| Dots | Pagination indicators showing slide count and current position |
| Thumbnails | Small preview images for direct slide access |
| None | No visible navigation controls |

### Autoplay Settings

Configure automatic slide advancement:

| Option | Description |
|--------|-------------|
| Enable/Disable | Turn autoplay on or off |
| Delay | Time between slide changes (in milliseconds) |
| Pause on Hover | Stop autoplay when user hovers over slider |
| Reverse Direction | Play slides in reverse order |

### Transition Effects

Choose how slides transition from one to another:

| Effect | Description |
|--------|-------------|
| Slide | Standard horizontal slide transition |
| Fade | Smooth fade between slides |
| Cube | 3D cube rotation effect |
| Coverflow | 3D flip effect with depth |
| Flip | Vertical or horizontal flip transition |
| Cards | Card-style transition effect |

### Loop and Rewind

Control slide behavior at the beginning and end:

| Option | Description |
|--------|-------------|
| Loop | Continuous looping from last slide back to first |
| Rewind | Jump back to first slide after reaching the end |
| Stop | Stop at the last slide |

### Advanced Options

Fine-tune slider behavior with advanced settings:

| Option | Description |
|--------|-------------|
| Free Mode | Slides move freely like a scroller rather than snapping |
| Centered Slides | Active slide is centered in the view |
| Initial Slide | Which slide to show first (0-based index) |
| Speed | Transition speed in milliseconds |
| Direction | Horizontal or vertical slider orientation |
| Effect Speed | Duration of transition effects |
| Mousewheel Control | Enable/disable mousewheel navigation |
| Keyboard Control | Enable/disable keyboard navigation |

## Responsive Controls

The Carousel Slider control allows you to set different slider configurations for various screen sizes:

| Breakpoint | Description |
|------------|-------------|
| Default | Applied to all screen sizes unless overridden |
| Mobile | Applied to screens smaller than 768px |
| Tablet | Applied to screens 768px-991px |
| Desktop | Applied to screens 992px-1199px |
| Large Desktop | Applied to screens 1200px and larger |

To set responsive slider options:

1. Select the block with carousel functionality
2. Open the Carousel Slider panel in the sidebar
3. Click the responsive toggle button to switch between breakpoints
4. Set the desired slider options for each breakpoint

## Usage Examples

### Creating an Image Slider

1. Add a Slider Block to your page
2. Add Media Element blocks for each slide
3. Open the Carousel Slider panel
4. Configure basic settings:
   - Slides Per View: 1
   - Navigation: Arrows and Dots
   - Transition Effect: Slide
   - Enable Autoplay with 5000ms delay

### Creating a Product Carousel

1. Add a Dynamic Query Block to your page
2. Set it to query Products (or custom post type)
3. Open the Carousel Slider panel
4. Configure settings:
   - Slides Per View: 3 (Desktop), 2 (Tablet), 1 (Mobile)
   - Space Between: Medium
   - Navigation: Arrows only
   - Loop: Enabled

### Creating a Testimonial Slider

1. Add a Slider Block to your page
2. Add Group blocks for each testimonial, containing text and image
3. Open the Carousel Slider panel
4. Configure settings:
   - Transition Effect: Fade
   - Navigation: Dots only
   - Autoplay: Enabled with 7000ms delay
   - Pause on Hover: Enabled

## Best Practices

1. **Optimize for mobile**: Ensure your slider works well on small screens

2. **Limit slides per view**: Show fewer slides on mobile than on desktop

3. **Optimize images**: Use appropriately sized and compressed images

4. **Keep transitions simple**: Fancy effects can be distracting and may affect performance

5. **Include navigation**: Always provide a way for users to navigate manually

6. **Consider load time**: Too many slides can impact page performance

7. **Test thoroughly**: Check your slider on different devices and browsers

## Accessibility Considerations

1. **Keyboard navigation**: Ensure users can navigate with keyboard

2. **Pause on focus**: Autoplay should pause when a user focuses on the slider

3. **Sufficient contrast**: Navigation controls should have good contrast

4. **Text alternatives**: Include alt text for all images in slides

5. **Reduced motion**: Consider users who prefer reduced motion

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Slider not advancing | Check if autoplay is enabled and delay is set correctly |
| Navigation controls not working | Verify that navigation options are enabled |
| Slides stacking incorrectly | Check slides per view and space between settings |
| Transition effects not showing | Ensure transition effect is supported by your browser |
| Performance issues | Reduce number of slides, optimize images, simplify transitions |
| Touch not working on mobile | Check if touch is enabled in slider settings |

## Related Controls and Blocks

- [Slider Block](../blocks/slider-block.md)
- [Dynamic Query Block](../blocks/dynamic-query-block.md)
- [Responsive Display](./responsive-display.md)
- [Layout Options](./layout-options.md)
