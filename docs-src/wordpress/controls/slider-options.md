# Sliders/Carousels Feature

## Overview

The Sliders/Carousels feature in the Phenix Design System allows you to transform various content blocks into interactive, animated slideshows. Unlike standalone blocks, this is an integrated feature that can be enabled within compatible blocks such as Grid Row, Query Loop, Taxonomies, and Users Query.

The slider functionality is powered by the Splide JavaScript library and provides a comprehensive set of options for customizing the appearance, behavior, and navigation of your slideshows.

## Compatible Blocks

The Sliders/Carousels feature can be enabled in the following blocks:

- **Grid Row Block**: Transform a row of columns into a carousel
- **Query Loop Block**: Display post queries as a slider
- **Taxonomies Block**: Show taxonomy terms in a carousel format
- **Users Query Block**: Present users in a sliding layout

## How to Enable

1. Add one of the compatible blocks to your page
2. In the block toolbar or sidebar panel, locate the "Layout Options"
3. Enable the "Slider" option by checking the checkbox
4. Configure slider options in the dedicated "Slider Options" panel that appears

## Slider Options

### Effect Types

| Option | Description |
|--------|-------------|
| Loop | Standard carousel with continuous looping |
| Fading | Slides fade in and out instead of sliding horizontally |
| Sliding | Traditional horizontal sliding animation |

### Navigation Controls

| Option | Description |
|--------|-------------|
| Arrows | Enable/disable navigation arrows |
| Pagination | Enable/disable pagination dots |
| Arrows Classes | Custom CSS classes for arrow buttons |
| Pagination Classes | Custom CSS classes for pagination elements |

### Behavior Settings

| Option | Description |
|--------|-------------|
| Steps | Number of slides to move per navigation action (1-12) |
| Duration | Time between automatic slide transitions in milliseconds (3000-20000) |
| Speed | Animation speed in milliseconds (300-3000) |
| Direction | Slide direction (Default, LTR, RTL, Vertical) |
| Autoplay | Enable/disable automatic sliding |
| Center Mode | Center the active slide in the viewport |
| Free Width | Allow slides to have their natural width |
| Free Height | Allow slides to have their natural height |
| isNavigation | Enable slides to be used as navigation for another slider |
| Sync with | ID of another slider to synchronize with |

## Implementation Details

### HTML Structure

When the slider feature is enabled, the block's HTML structure is enhanced with the necessary classes and attributes:

```html
<div class="px-slider splide" data-items="3" data-autoplay="true" data-controls="1" data-pagination="1">
  <div class="splide__track">
    <div class="splide__list">
      <!-- Slide items -->
      <div class="splide__slide">Slide 1 Content</div>
      <div class="splide__slide">Slide 2 Content</div>
      <div class="splide__slide">Slide 3 Content</div>
    </div>
  </div>
  
  <!-- Navigation Controls (if enabled) -->
  <div class="px-slider-controls">
    <button class="splide__arrow splide__arrow--prev px-slider-button"></button>
    <button class="splide__arrow splide__arrow--next px-slider-button"></button>
  </div>
  
  <!-- Pagination (if enabled) -->
  <div class="splide__pagination px-slider-pagination"></div>
</div>
```

### Data Attributes

The slider functionality can be configured using the following data attributes:

| Attribute | Description | Example |
|-----------|-------------|---------|
| data-items | Number of slides per view | `data-items="3"` |
| data-type | Effect type | `data-type="fade"` |
| data-autoplay | Enable autoplay | `data-autoplay="true"` |
| data-duration | Time between slides (ms) | `data-duration="5000"` |
| data-speed | Animation speed (ms) | `data-speed="500"` |
| data-controls | Enable navigation arrows | `data-controls="1"` |
| data-pagination | Enable pagination | `data-pagination="1"` |
| data-rewind | Enable rewind after reaching the end | `data-rewind="true"` |
| data-direction | Slide direction (ltr, rtl, ttb) | `data-direction="rtl"` |
| data-center | Enable center mode | `data-center="true"` |
| data-autoWidth | Allow natural width | `data-autoWidth="true"` |
| data-autoHeight | Allow natural height | `data-autoHeight="true"` |
| data-sync | ID of slider to sync with | `data-sync="#slider-thumbnails"` |
| data-focus | Focus specific slide position | `data-focus="center"` |
| data-drag | Enable/disable drag | `data-drag="true"` |
| data-wheel | Enable mouse wheel navigation | `data-wheel="true"` |

## JavaScript Integration

The slider functionality is initialized through the Phenix JavaScript framework using the `.slider()` method:

```javascript
// Basic initialization
Phenix('.px-slider').slider();

// With options
Phenix('.px-slider').slider({
  type: 'fade',
  items: 3,
  speed: 500,
  duration: 5000,
  autoplay: true,
  controls: true,
  pagination: true,
  direction: 'ltr',
  rewind: true,
  center: true
});
```

## Responsive Behavior

The slider automatically adapts to different screen sizes based on the responsive settings of the parent block. You can customize the number of slides shown at different breakpoints through the block's responsive controls and the `breakpoints` option.

## Animation Support

The slider supports animated elements within slides. To create animated content:

1. Add elements inside your slides
2. Apply the `data-animation` attribute with the desired animation name
3. Optionally set `data-animation-delay` for staggered animations

Example:
```html
<div class="splide-slide">
  <h2 data-animation="fadeInDown">Animated Heading</h2>
  <p data-animation="fadeInUp" data-animation-delay="0.3s">This text animates after the heading</p>
</div>
```

## Best Practices

1. **Performance**: Limit the number of slides and complex content to maintain smooth performance
2. **Image Optimization**: Optimize images before adding them to sliders to reduce load time
3. **Responsive Testing**: Test your sliders on various screen sizes to ensure proper display
4. **Accessibility**: Ensure navigation controls are accessible and provide alternative navigation methods
5. **Animation Use**: Use animations judiciously to enhance user experience without causing distraction

## Related Features

- [Grid Row Block](../blocks/grid-row-block.md) - Base block that can be converted to a slider
- [Query Loop Block](../blocks/query-block.md) - For creating post sliders
- [Responsive Controls](../features/responsive-controls.md) - For customizing slider appearance across devices
