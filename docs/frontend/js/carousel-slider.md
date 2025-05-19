# Carousel Slider

## Overview

The Phenix Carousel Slider provides a powerful and flexible way to create responsive carousels and slideshows. Built on top of the SplideJS library, the Phenix Slider offers seamless integration with other Phenix components while providing an intuitive API for creating various types of sliders.

Key features include:

- Multiple slider types (loop, fade, slide)
- Responsive breakpoints
- Navigation controls and pagination
- Synchronized sliders
- Lazy loading integration
- Vertical sliders
- Multimedia support

## Basic Usage

The most basic implementation requires a container with the `.px-slider` class and child elements with the `.px-item` class:

```html
<!-- Slider Wrapper -->
<div class="px-slider">
    <!-- Slide Item -->
    <div class="px-item">Slide 1 Content</div>
    <!-- Slide Item -->
    <div class="px-item">Slide 2 Content</div>
    <!-- Slide Item -->
    <div class="px-item">Slide 3 Content</div>
</div>
```

```js
// Initialize the slider
Phenix('.px-slider').slider();
```

## Slider Types

The Phenix Slider supports three main types of animations:

- **loop**: Default type, perfect for continuous looping carousels
- **fade**: Fade in/out transitions, ideal for single slide presentations
- **slide**: Standard sliding animations without looping

```html
<!-- Loop Slider (default) -->
<div class="px-slider" data-type="loop">...</div>

<!-- Fade Slider -->
<div class="px-slider" data-type="fade">...</div>

<!-- Slide Slider -->
<div class="px-slider" data-type="slide">...</div>
```

```js
// Initialize with specific type
Phenix('.px-slider').slider({
    type: "fade" // Options: "loop", "fade", "slide"
});
```

## Navigation Controls

You can add navigation arrows to your slider using the `controls` option:

```html
<!-- Slider with navigation controls -->
<div class="px-slider" data-controls="1">...</div>

<!-- Slider with custom control classes -->
<div class="px-slider" data-controls="custom-controls flexbox align-between" data-arrow="btn round primary">...</div>
```

```js
// Initialize with controls
Phenix('.px-slider').slider({
    controls: true, // Enable default controls
    arrow: "btn round primary" // Custom classes for control buttons
});
```

## Pagination

Add pagination dots to your slider using the `pagination` option:

```html
<!-- Slider with pagination -->
<div class="px-slider" data-pagination="1">...</div>

<!-- Slider with custom pagination classes -->
<div class="px-slider" data-pagination="custom-pagination flexbox align-center-x" data-page="btn round small">...</div>
```

```js
// Initialize with pagination
Phenix('.px-slider').slider({
    pagination: true, // Enable default pagination
    page: "btn round small" // Custom classes for pagination buttons
});
```

## Responsive Breakpoints

Control the number of slides shown at different screen sizes:

```html
<!-- Responsive slider -->
<div class="px-slider" data-items="1" data-sm="2" data-md="3" data-lg="4">...</div>
```

```js
// Initialize with responsive breakpoints
Phenix('.px-slider').slider({
    items: 1, // Default number of items
    // Breakpoints configuration
    breakpoints: {
        576: { // Small screens (sm)
            perPage: 2
        },
        768: { // Medium screens (md)
            perPage: 3
        },
        992: { // Large screens (lg)
            perPage: 4
        }
    }
});
```

## Synchronized Sliders

Create synchronized sliders where one slider controls another:

```html
<!-- Main slider -->
<div class="px-slider" data-sync="#thumbnails-slider">...</div>

<!-- Thumbnails slider -->
<div id="thumbnails-slider" data-is-navigation="1">...</div>
```

```js
// Initialize synchronized sliders
Phenix('.px-slider').slider();
```

## Vertical Slider

Create a vertical slider that slides from top to bottom:

```html
<!-- Vertical slider -->
<div class="px-slider" data-direction="ttb" data-height="400px">...</div>
```

```js
// Initialize vertical slider
Phenix('.px-slider').slider({
    direction: 'ttb', // top-to-bottom
    height: '400px'
});
```

## Advanced Examples

### Image Gallery with Thumbnails

```html
<!-- Main Gallery Slider -->
<div class="px-slider mb-30" data-sync="#thumbnails-example" data-type="fade" data-controls="1">
    <div class="px-item">
        <img src="image1.jpg" alt="" class="fluid">
    </div>
    <div class="px-item">
        <img src="image2.jpg" alt="" class="fluid">
    </div>
    <div class="px-item">
        <img src="image3.jpg" alt="" class="fluid">
    </div>
</div>

<!-- Gallery Thumbnails -->
<div id="thumbnails-example" data-type="slide" data-items="2" data-md="3" data-lg="4" 
     class="row gpx-15 mb-30" data-is-navigation="1" data-controls="1">
    <div class="px-item col-6 col-md-4 col-lg-3">
        <img src="image1-thumb.jpg" alt="" class="fluid">
    </div>
    <div class="px-item col-6 col-md-4 col-lg-3">
        <img src="image2-thumb.jpg" alt="" class="fluid">
    </div>
    <div class="px-item col-6 col-md-4 col-lg-3">
        <img src="image3-thumb.jpg" alt="" class="fluid">
    </div>
</div>
```

```css
/* Style active thumbnail */
#thumbnails-example .px-item {transition: opacity 300ms linear;}
#thumbnails-example .px-item:not(.is-active) {opacity: 0.35;}
```

### News Slider with Vertical Thumbnails

```html
<!-- Grid -->
<div class="row">
    <!-- Main Content Column -->
    <div class="col-12 col-md-6 col-lg-7">
        <!-- Main Slider -->
        <div class="px-slider mb-30" data-sync="#news-thumbnails" data-controls="1" data-type="fade">
            <!-- Item -->
            <div class="px-item">
                <img src="news1.jpg" alt="" class="fluid">
                <div class="content position-absolute fluid bottom-0 pdx-25 pdy-15 bg-gradient-bottom">
                    <h3 class="fs-19 color-white">News Headline 1</h3>
                    <p class="mb-0 color-white">News excerpt goes here...</p>
                </div>
            </div>
            <!-- Additional items... -->
        </div>
    </div>
    
    <!-- Thumbnails Column -->
    <div class="col-12 col-md-6 col-lg-5 mb-30">
        <!-- Vertical Carousel -->
        <div id="news-thumbnails" data-direction="ttb" data-items="3" 
             data-is-navigation="1" data-pagination="reset-list col-12 flexbox align-center-x">
            <!-- Card Block -->
            <div class="px-item">
                <div class="post-card flexbox align-center-y bg-white radius-sm overflow-hidden mb-15">
                    <img src="news1-thumb.jpg" alt="" class="width-70 height-70 cover">
                    <div class="col pdx-15">
                        <h5 class="fs-14 mb-5">News Headline 1</h5>
                        <p class="fs-12 mb-0 tx-nowrap">News date...</p>
                    </div>
                </div>
            </div>
            <!-- Additional items... -->
        </div>
    </div>
</div>
```

## Events

The Phenix Slider dispatches several events that you can listen for:

```js
// Listen for slider events
Phenix('.px-slider').slider().on('mounted', event => {
    // Access slider elements
    const sliderElement = event.detail.slider;
    const trackElement = event.detail.track;
    
    console.log('Slider mounted!');
});

// Other available events: 'move', 'moved', 'visible', 'hidden', 'active', 'inactive'
```

## Integration with Other Components

The Phenix Slider automatically integrates with other Phenix components:

- **Multimedia**: Automatically initializes media elements with `data-src` attributes
- **Lazyloading**: Handles elements with `.px-loading` or `.px-loader` classes
- **Popup Modals**: Initializes any `.px-lightbox` or `[data-modal]` elements
- **Audio Buttons**: Sets up audio triggers with `[data-audio]` attributes
- **WooCommerce**: Handles add-to-cart functionality for WooCommerce products

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | String | 'loop' | Slider type: 'loop', 'slide', or 'fade' |
| `focus` | Number/String | 'center' | Determines which slide should be active |
| `items` | Number | 1 | Number of slides to show at once |
| `steps` | Number | 1 | Number of slides to move at once |
| `speed` | Number | 700 | Sliding animation speed in milliseconds |
| `start` | Number | 0 | Start index of the first slide |
| `duration` | Number | 6000 | Autoplay interval duration in milliseconds |
| `autoplay` | Boolean | false | Enable/disable autoplay |
| `controls` | Boolean/String | false | Enable arrows and add custom classes |
| `pagination` | Boolean/String | false | Enable pagination and add custom classes |
| `arrow` | String | null | Custom classes for control buttons |
| `page` | String | null | Custom classes for pagination buttons |
| `direction` | String | 'ltr' | Slider direction: 'ltr', 'rtl', or 'ttb' |
| `sync` | String | null | Selector for another slider to sync with |
| `isNavigation` | Boolean | false | Whether slides act as navigation |
| `pauseOnHover` | Boolean | false | Pause autoplay on hover |
| `intersection` | Boolean | false | Only initialize when in viewport |
| `rewind` | Boolean | false | Rewind to the opposite end |
| `wheel` | Boolean | false | Enable mouse wheel navigation |
| `drag` | Boolean | true | Enable mouse/touch drag |

## CSS Classes

| Class | Description |
|-------|-------------|
| `.px-slider` | Main slider container |
| `.px-item` | Slide item |
| `.px-slider-controls` | Controls wrapper |
| `.px-slider-button` | Control button |
| `.px-prev` | Previous button |
| `.px-next` | Next button |
| `.px-slider-pagination` | Pagination wrapper |
| `.px-slider-page` | Pagination button |
| `.is-active` | Active slide or pagination item |
| `.is-visible` | Visible slide |

## Browser Compatibility

The Phenix Slider is compatible with all modern browsers. It dynamically loads the SplideJS library only when needed, ensuring optimal performance.
