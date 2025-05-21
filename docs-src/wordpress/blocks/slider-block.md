# Slider Block

## Overview

The Slider Block is a versatile component in the Phenix Design System that allows you to create interactive, responsive slideshows and carousels. This block enables you to showcase multiple images, content sections, or products in a space-efficient, engaging format. With extensive customization options for navigation, pagination, transitions, and responsive behavior, the Slider Block provides a powerful solution for creating dynamic visual presentations on your WordPress site.

<!-- Image placeholder for Slider Block -->

## Key Features

- Create responsive slideshows with multiple slides
- Support for various content types (images, text, custom HTML)
- Multiple slider layouts and styles
- Customizable navigation controls and pagination
- Auto-play and loop options
- Touch and swipe support for mobile devices
- Keyboard navigation for accessibility
- Transition effects and animation options
- Responsive settings for different screen sizes
- Support for multiple slides per view

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Slider" or find it in the "Phenix Blocks" category
3. Add the Slider Block to your page
4. Use the "Add Slide" button to create multiple slides
5. Add content to each slide (images, text, other blocks)
6. Customize the slider settings in the block sidebar

## Block Settings

### General Options

| Option | Description |
|--------|-------------|
| Slider Type | Choose between standard slider, carousel, or fade slider |
| Slides Per View | Set how many slides to show at once (for carousel type) |
| Space Between | Control the gap between slides |
| Center Slides | Enable/disable centering the active slide |
| Loop | Enable/disable infinite looping of slides |
| Direction | Set the slider direction (horizontal or vertical) |
| Effect | Choose transition effect (slide, fade, cube, etc.) |

### Navigation Options

| Option | Description |
|--------|-------------|
| Navigation | Show/hide navigation arrows |
| Navigation Position | Set the position of navigation arrows |
| Navigation Style | Choose from different navigation arrow styles |
| Navigation Size | Adjust the size of navigation arrows |
| Navigation Color | Set the color of navigation arrows |
| Navigation Background | Add background to navigation arrows |
| Navigation Border Radius | Add rounded corners to navigation arrows |

### Pagination Options

| Option | Description |
|--------|-------------|
| Pagination | Show/hide pagination indicators |
| Pagination Type | Choose between bullets, fraction, or progress bar |
| Pagination Position | Set the position of pagination indicators |
| Pagination Color | Set the color of pagination indicators |
| Active Pagination Color | Set the color of the active pagination indicator |
| Dynamic Bullets | Enable/disable dynamic bullets pagination |
| Clickable | Make pagination indicators clickable |

### Autoplay Options

| Option | Description |
|--------|-------------|
| Autoplay | Enable/disable automatic sliding |
| Autoplay Delay | Set the delay between slides (in milliseconds) |
| Autoplay Pause on Hover | Pause autoplay when hovering over the slider |
| Autoplay Disable on Interaction | Disable autoplay after user interaction |
| Autoplay Reverse | Reverse the autoplay direction |

### Responsive Options

| Option | Description |
|--------|-------------|
| Breakpoints | Define custom behavior at different screen sizes |
| Mobile Slides Per View | Set the number of slides visible on mobile devices |
| Tablet Slides Per View | Set the number of slides visible on tablet devices |
| Desktop Slides Per View | Set the number of slides visible on desktop devices |
| Mobile Space Between | Adjust the gap between slides on mobile devices |
| Mobile Navigation | Show/hide navigation on mobile devices |
| Mobile Pagination | Show/hide pagination on mobile devices |

### Style Options

| Option | Description |
|--------|-------------|
| Height | Set the height of the slider (auto, fixed, or aspect ratio) |
| Width | Control the width of the slider |
| Background | Add a background color or gradient to the slider |
| Border | Add borders with custom color, width, and style |
| Border Radius | Add rounded corners to the slider |
| Box Shadow | Add shadow effects to the slider |
| Padding | Add internal spacing within the slider |
| Margin | Add external spacing around the slider |

## Examples

### Basic Image Slider

A simple image slider with navigation and pagination:

```html
<!-- wp:phenix/slider {"navigation":true,"pagination":true,"loop":true,"effect":"slide"} -->
<div class="wp-block-phenix-slider px-slider-block" data-navigation="true" data-pagination="true" data-loop="true" data-effect="slide">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- Slide 1 -->
      <div class="swiper-slide">
        <!-- wp:image {"sizeSlug":"large"} -->
        <figure class="wp-block-image size-large"><img src="https://example.com/image1.jpg" alt="Slide 1"/></figure>
        <!-- /wp:image -->
      </div>
      
      <!-- Slide 2 -->
      <div class="swiper-slide">
        <!-- wp:image {"sizeSlug":"large"} -->
        <figure class="wp-block-image size-large"><img src="https://example.com/image2.jpg" alt="Slide 2"/></figure>
        <!-- /wp:image -->
      </div>
      
      <!-- Slide 3 -->
      <div class="swiper-slide">
        <!-- wp:image {"sizeSlug":"large"} -->
        <figure class="wp-block-image size-large"><img src="https://example.com/image3.jpg" alt="Slide 3"/></figure>
        <!-- /wp:image -->
      </div>
    </div>
    
    <!-- Navigation -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    
    <!-- Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</div>
<!-- /wp:phenix/slider -->
```

### Product Carousel

A carousel displaying multiple products per view:

```html
<!-- wp:phenix/slider {"sliderType":"carousel","slidesPerView":3,"spaceBetween":20,"loop":true,"navigation":true,"pagination":true,"autoplay":true,"autoplayDelay":3000,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":2},"992":{"slidesPerView":3}}} -->
<div class="wp-block-phenix-slider px-slider-block" data-slider-type="carousel" data-slides-per-view="3" data-space-between="20" data-loop="true" data-navigation="true" data-pagination="true" data-autoplay="true" data-autoplay-delay="3000" data-breakpoints='{"0":{"slidesPerView":1},"576":{"slidesPerView":2},"992":{"slidesPerView":3}}'>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- Product 1 -->
      <div class="swiper-slide">
        <div class="product-card">
          <!-- wp:image {"sizeSlug":"medium"} -->
          <figure class="wp-block-image size-medium"><img src="https://example.com/product1.jpg" alt="Product 1"/></figure>
          <!-- /wp:image -->
          
          <!-- wp:heading {"level":3} -->
          <h3>Product Name 1</h3>
          <!-- /wp:heading -->
          
          <!-- wp:paragraph -->
          <p>$29.99</p>
          <!-- /wp:paragraph -->
          
          <!-- wp:buttons -->
          <div class="wp-block-buttons">
            <!-- wp:button -->
            <div class="wp-block-button"><a class="wp-block-button__link">Add to Cart</a></div>
            <!-- /wp:button -->
          </div>
          <!-- /wp:buttons -->
        </div>
      </div>
      
      <!-- Additional product slides would be here -->
    </div>
    
    <!-- Navigation -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    
    <!-- Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</div>
<!-- /wp:phenix/slider -->
```

### Hero Slider with Content

A full-width hero slider with text content overlay:

```html
<!-- wp:phenix/slider {"effect":"fade","navigation":true,"pagination":true,"loop":true,"autoplay":true,"autoplayDelay":5000,"height":"500px"} -->
<div class="wp-block-phenix-slider px-slider-block" data-effect="fade" data-navigation="true" data-pagination="true" data-loop="true" data-autoplay="true" data-autoplay-delay="5000" style="height:500px">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- Hero Slide 1 -->
      <div class="swiper-slide">
        <div class="slide-background" style="background-image:url(https://example.com/hero1.jpg);background-size:cover;background-position:center;position:absolute;top:0;left:0;width:100%;height:100%;"></div>
        <div class="slide-content" style="position:relative;z-index:1;color:#ffffff;text-align:center;padding:50px;max-width:800px;margin:0 auto;">
          <!-- wp:heading {"level":1,"textColor":"white"} -->
          <h1 class="has-white-color">Welcome to Our Website</h1>
          <!-- /wp:heading -->
          
          <!-- wp:paragraph {"textColor":"white"} -->
          <p class="has-white-color">Discover our amazing products and services designed to meet your needs.</p>
          <!-- /wp:paragraph -->
          
          <!-- wp:buttons {"contentJustification":"center"} -->
          <div class="wp-block-buttons is-content-justification-center">
            <!-- wp:button -->
            <div class="wp-block-button"><a class="wp-block-button__link">Learn More</a></div>
            <!-- /wp:button -->
          </div>
          <!-- /wp:buttons -->
        </div>
      </div>
      
      <!-- Additional hero slides would be here -->
    </div>
    
    <!-- Navigation -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    
    <!-- Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</div>
<!-- /wp:phenix/slider -->
```

### Testimonial Slider

A slider for displaying customer testimonials:

```html
<!-- wp:phenix/slider {"effect":"slide","navigation":true,"pagination":true,"loop":true,"autoplay":true,"autoplayDelay":4000,"paginationType":"bullets"} -->
<div class="wp-block-phenix-slider px-slider-block" data-effect="slide" data-navigation="true" data-pagination="true" data-pagination-type="bullets" data-loop="true" data-autoplay="true" data-autoplay-delay="4000">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- Testimonial 1 -->
      <div class="swiper-slide">
        <!-- wp:phenix/group {"padding":"lg","backgroundColor":"#f9f9f9","borderRadius":"md","textAlign":"center"} -->
        <div class="px-group pdy-30 pdx-30 bg-color radius-md tx-align-center" style="--bg-color:#f9f9f9">
          <!-- wp:image {"width":80,"height":80,"sizeSlug":"thumbnail","className":"is-style-rounded mx-auto"} -->
          <figure class="wp-block-image size-thumbnail is-resized is-style-rounded mx-auto"><img src="https://example.com/person1.jpg" alt="Customer 1" width="80" height="80"/></figure>
          <!-- /wp:image -->
          
          <!-- wp:paragraph {"fontSize":"large"} -->
          <p class="has-large-font-size">"This product has completely transformed how we work. The efficiency gains have been remarkable."</p>
          <!-- /wp:paragraph -->
          
          <!-- wp:heading {"level":3} -->
          <h3>John Smith</h3>
          <!-- /wp:heading -->
          
          <!-- wp:paragraph -->
          <p>CEO, Example Company</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:phenix/group -->
      </div>
      
      <!-- Additional testimonial slides would be here -->
    </div>
    
    <!-- Navigation -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    
    <!-- Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</div>
<!-- /wp:phenix/slider -->
```

## Common Use Cases

### Image Gallery Slider

Create an interactive image gallery with thumbnails:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:heading {"level":2} -->
  <h2>Project Gallery</h2>
  <!-- /wp:heading -->
  
  <!-- wp:phenix/slider {"navigation":true,"pagination":false,"loop":true,"effect":"slide","height":"500px"} -->
  <div class="wp-block-phenix-slider px-slider-block main-slider" data-navigation="true" data-pagination="false" data-loop="true" data-effect="slide" style="height:500px">
    <!-- Main slider content -->
  </div>
  <!-- /wp:phenix/slider -->
  
  <!-- wp:phenix/slider {"sliderType":"carousel","slidesPerView":5,"spaceBetween":10,"loop":true,"navigation":false,"pagination":false,"height":"100px","marginTop":"md"} -->
  <div class="wp-block-phenix-slider px-slider-block thumbnail-slider mt-15" data-slider-type="carousel" data-slides-per-view="5" data-space-between="10" data-loop="true" data-navigation="false" data-pagination="false" style="height:100px">
    <!-- Thumbnail slider content -->
  </div>
  <!-- /wp:phenix/slider -->
</div>
<!-- /wp:phenix/container -->
```

### Featured Products Carousel

Display featured products in a responsive carousel:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:heading {"level":2} -->
  <h2>Featured Products</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Check out our most popular items this season.</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:phenix/slider {"sliderType":"carousel","slidesPerView":4,"spaceBetween":20,"loop":true,"navigation":true,"pagination":true,"autoplay":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":2},"992":{"slidesPerView":3},"1200":{"slidesPerView":4}}} -->
  <div class="wp-block-phenix-slider px-slider-block" data-slider-type="carousel" data-slides-per-view="4" data-space-between="20" data-loop="true" data-navigation="true" data-pagination="true" data-autoplay="true" data-breakpoints='{"0":{"slidesPerView":1},"576":{"slidesPerView":2},"992":{"slidesPerView":3},"1200":{"slidesPerView":4}}'>
    <!-- Product carousel content -->
  </div>
  <!-- /wp:phenix/slider -->
</div>
<!-- /wp:phenix/container -->
```

## Best Practices

1. **Optimize Images**: Compress and properly size images for sliders to ensure fast loading times

2. **Limit Slides**: Keep the number of slides reasonable to avoid overwhelming users and maintain performance

3. **Mobile Consideration**: Ensure sliders are responsive and function well on mobile devices

4. **Autoplay Timing**: If using autoplay, set a reasonable delay that gives users enough time to read content

5. **Accessibility**: Include proper alt text for images and ensure keyboard navigation works

6. **Visual Indicators**: Always provide clear navigation and pagination to help users understand how to interact with the slider

7. **Content Priority**: Place the most important content in the first slide, as many users may not view all slides

8. **Performance**: Be mindful of the total content weight in sliders to maintain good performance

## Related Blocks

- [Container Block](./container-block.md) - For positioning sliders within layouts
- [Group Block](./group-block.md) - For organizing content within individual slides
- [Image Block](./media-element-block.md) - For adding images to slider slides
- [Dynamic Query Block](./dynamic-query-block.md) - For creating dynamic content sliders

