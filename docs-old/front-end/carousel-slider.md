---
title: "Carousel Slider"
date: 2025-01-04
---

## Carousel Slider

Documentation and examples to learn how to build a carousel and sliders, with the amazing third-party plugin `SplideJS` in combination with phenix

## Overview

phenix `.slider()` is a method to make the creating of a carousel or slider with `splide.js` third-party plugin easier and works great with the design system to create integration between the plugin and phenix javascript plugins, the `splide.js` loads only if your run a `slider()` component otherwise it doesn't exist on your document,

for further informations about `SplideJS` features and what it can do in its original [Documentation](https://splidejs.com/) you might take a look, and you can use it once you run the `.slider()` method you also have `new Splide()` available for you if you need a slider without phenix pattern on it,

the `slider();` always return a `collection` of splide.js `objects` that you can loop through it and use the methods and the events or even change the options in some specified case, available from splide.js originally.

## Basic Usage

in the next example we will use the `slider()` method to activate and load splide slider and using it with the default settings, and the very basic structure of a carousel with wrapper and a list of slides.

[HTML](#tab-1)

[Javascript](#tab-2)

```
<!-- Slider Wrapper -->
<div class="px-slider" ...data-options>
    <!-- Slide Item -->
    <div class="px-item">...</div>
    <!-- Slide Item -->
    <div class="px-item">...</div>
    <!-- // Slide Item -->
</div>
<!-- // Slider Wrapper -->
```

```
//===> Run Sliders <===//
Phenix('.px-slider').slider({...options});
```

## Sliders Types

the splide.js offers by default a three types of sliders for transition and animations purposes first we have the `loop` type which is the default type and its perfect for multiple slides carousel looping and sliding without a pause,

and we have the `fade` type which is good choice for single slide carousel or gallery slider with fading in/out animations and the `slide` type which also good for single/gallery slider with sliding animations

[HTML](#tab-3)

[Javascript](#tab-4)

```
<!-- Slider Wrapper -->
<div class="px-slider" data-type="loop">
    <!-- Slide Item -->
    <div class="px-item">...</div>
    <!-- Slide Item -->
    <div class="px-item">...</div>
    <!-- // Slide Item -->
</div>
<!-- // Slider Wrapper -->
```

```
//===> Run Sliders <===//
Phenix('.px-slider').slider({
    type : "loop", //===> types : slide, loop, fade
});
```

## Slider Controls

in the next example we will use data attributes to activate the slider `next`, `previous` buttons with `data-controls` attribute and for customizing the `controls` elements and change the default theme classes you can use the option `data-controls` and your classes as value for the controls wrapper, and `data-arrow` for the buttons classes,

[HTML](#tab-5)

[Javascript](#tab-6)

```
<!-- Slider With Arrows -->
<div class="px-slider mb-30" data-controls="classes or 1" data-arrow="classes">
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #01 Testing</div>
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #02 Testing</div>
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #03 Testing</div>
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #04 Testing</div>
</div>
<!-- // Slider With Arrows -->
```

```
//===> Run Sliders <===//
Phenix('.px-slider').slider({
    controls: true || "classes";
    arrow: "classes";
});
```

## Slider Pagination

in the next example we will use data attributes to activate the dots pagination with `data-pagination` attribute, as for customizing the `pagination` elements and change the default theme classes you can use the option `data-pagination` and your classes as value for the controls wrapper, and `data-page` for the buttons classes,

[HTML](#tab-7)

[Javascript](#tab-8)

```
<!-- Slider With Pagination -->
<div class="px-slider mb-30" data-pagination="classes or 1" data-page="classes">
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #01 Testing</div>
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #02 Testing</div>
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #03 Testing</div>
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #04 Testing</div>
</div>
<!-- // Slider With Pagination -->
```

```
//===> Run Sliders <===//
Phenix('.px-slider').slider({
    pagination: true || "classes";
    page: "classes";
});
```

## Slider Events

the slider comes with a set of events to help you do stuff to the slider and its elements when ever an event of them Fired on your slider element and you can use them as any javascript events or with the `.on()` of [Phenix Javascript](http://phenix.localhost/test/dom-events/), and you can find a List of all available [Events](https://splidejs.com/guides/events/) from the Original [Documentation](https://splidejs.com/guides/events/) of `Splide.js`, and all events return to you the `slider` and its `track`, `slides-list` elements with `event.detail` method.

```
//====> Event With Phenix <====//
Phenix('.px-slider').slider().on('mounted', mounted => {
    //... do stuff when the slider is mounted...//
    mounted.detail.slider //===> Get the Slider Element
    mounted.detail.track  //===> Get the Slider Track Element
    mounted.detail.list   //===> Get the Slider List Element
});

//====> Event With JS <====//
document.querySelector("#slider-id").addEventListener('mounted', mounted => {
    //... do stuff when the slider is mounted...//
});
```

## Carousel Example

in the next example we will use data-attributes to create a responsive multi-slides carousel that changes the displayed slides number on each screen, with `data-items` you define how many slides to be visible from the smallest screen and up, with the help of the [Grid System](http://phenix.localhost/test/flexbox-grid/) utilities,

and for changing the visible number of the slides you can use `data-sm` from small screen and up, `data-md` for medium screens and up, `data-lg` for large screens and up, `data-xl` for the xLarge screens and forward.

[HTML](#tab-9)

[Javascript](#tab-10)

```
<!-- Slider with Grid -->
<div class="px-slider row mb-30" data-controls="1" data-items="1" data-sm="2" data-md="3" data-lg="4">
    <!-- Column -->
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 px-item">
        <div class="pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #01 Testing</div>
    </div>
    <!-- Column -->
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 px-item">
        <div class="pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #02 Testing</div>
    </div>
    <!-- Column -->
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 px-item">
        <div class="pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #03 Testing</div>
    </div>
    <!-- Column -->
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 px-item">
        <div class="pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #04 Testing</div>
    </div>
    <!-- // Column -->
</div>
<!-- // Slider with Grid -->
```

```
//===> Run Sliders <===//
Phenix('.px-slider').slider();
```

## Gallery Example

in the next example we will learn how create a gallery slider with custom thumbnails slider that sync and interactive with the large slider, A carousel can sync with another carousel by `sync` option, and `isNavigation` option makes the carousel clickable for navigation. By using these 2 features, we can make a carousel with a thumbnail control like this:

as you can see we did give the `#thumbnail-slider` the data options for a slider but without running the js on it because it will build its own slider structure and run it from the main slider option `data-sync`, and you can use the `data-focus="center"` to make the activated thumbnail in the center.

[HTML](#tab-11)

[Javascript](#tab-12)

[CSS](#tab-13)

```
<!-- Gallery Slider -->
<div class="px-slider mb-30" data-sync="#thumbnails-example" data-pagination="1" data-controls="1">
    <div class="px-item">
        <img src="https://placehold.co/900x500.webp?text=01" alt="" class="fluid">
    </div>
    <div class="px-item">
        <img src="https://placehold.co/900x500.webp?text=02" alt="" class="fluid">
    </div>
    <div class="px-item">
        <img src="https://placehold.co/900x500.webp?text=03" alt="" class="fluid">
    </div>
    <div class="px-item">
        <img src="https://placehold.co/900x500.webp?text=04" alt="" class="fluid">
    </div>
    <div class="px-item">
        <img src="https://placehold.co/900x500.webp?text=05" alt="" class="fluid">
    </div>
    <div class="px-item">
        <img src="https://placehold.co/900x500.webp?text=06" alt="" class="fluid">
    </div>
    <div class="px-item">
        <img src="https://placehold.co/900x500.webp?text=07" alt="" class="fluid">
    </div>
</div>
<!-- Gallery Thumbnails -->
<div id="thumbnails-example" data-type="slide" data-items="2" data-md="3" data-lg="4" class="row gpx-15 mb-30" data-is-navigation="1" data-controls="1">
    <div class="px-item col-6 col-md-4 col-lg-3">
        <img src="https://placehold.co/900x500.webp?text=01" alt="" class="fluid">
    </div>
    <div class="px-item col-6 col-md-4 col-lg-3">
        <img src="https://placehold.co/900x500.webp?text=02" alt="" class="fluid">
    </div>
    <div class="px-item col-6 col-md-4 col-lg-3">
        <img src="https://placehold.co/900x500.webp?text=03" alt="" class="fluid">
    </div>
    <div class="px-item col-6 col-md-4 col-lg-3">
        <img src="https://placehold.co/900x500.webp?text=04" alt="" class="fluid">
    </div>
    <div class="px-item col-6 col-md-4 col-lg-3">
        <img src="https://placehold.co/900x500.webp?text=05" alt="" class="fluid">
    </div>
    <div class="px-item col-6 col-md-4 col-lg-3">
        <img src="https://placehold.co/900x500.webp?text=06" alt="" class="fluid">
    </div>
    <div class="px-item col-6 col-md-4 col-lg-3">
        <img src="https://placehold.co/900x500.webp?text=07" alt="" class="fluid">
    </div>
</div>
<!-- // Gallery Slider -->
```

```
//====> Activate Sliders <====//
Phenix('.px-slider').slider({sync: '#Thumbnails_Slider'});
```

```
/*==== Make the Current Active Slide More Visible then other Thumbnails ====*/
#thumbnails-example .px-item {transition: opacity 300ms linear;}
#thumbnails-example .px-item:not(.is-active) {opacity: 0.35;}
```

## Vertical Slider

in the next example we will create a vertical example of the carousel and the slider with the `data-direction="ttb"` attribute or the javascript option `direction` you can turn the slider flow `top to bottom` vertically instead of `ltr` or `rtl`,

[HTML](#tab-14)

[Javascript](#tab-15)

```
<!-- Vertical Carousel -->
<div class="px-slider" data-direction="ttb" data-items="3">
    <!-- Card Block -->
    <div class="mb-20 post-card">
        <div class="pd-20 bg-white border-1 radius-sm border-alpha-10">
            <!-- Content -->
            <h4 class="fs-16">....</h4>
            <p class="fs-12 mb-0 overflow-hidden">.....</p>
        </div>
    </div>
    <!-- // Card Block -->
    ... more blocks ....
</div>
<!-- // Vertical Carousel -->

<!-- Vertical Slider -->
<div class="px-slider mb-30" data-controls="1" data-direction="ttb">
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #01 Testing</div>
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #02 Testing</div>
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #03 Testing</div>
    <div class="px-item pdy-75 pdx-30 tx-align-center bg-alpha-05">Slide #04 Testing</div>
</div>
<!-- // Vertical Slider -->
```

```
//====> Activate Sliders <====//
Phenix('.px-slider').slider({direction: 'ttb'});
```

## News Slider Example

in the next example we will use the same options that we used on the gallery slider, and the vertical slider above to create another synced slider, with vertical small cards slider.

[HTML](#tab-16)

[Javascript](#tab-17)

[CSS](#tab-18)

```
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-6 col-lg-7">
        <!-- Main Slider -->
        <div class="px-slider mb-30" data-sync="#news-thumbnails" data-controls="1" data-type="fade">
            <!-- Item -->
            <div class="px-item tx-align-center bg-alpha-05 position-rv">
                <!-- image -->
                <img src="https://placehold.co/900x500.webp?text=01" alt="" class="radius-md">
                <!-- content-->                
                <div class="radius-md radius-bottom pdy-15 pdx-30 position-ab pos-bottom-0 pos-start-0 pos-end-0 bg-alpha-50">
                    <h4 class="fs-16 color-white">....</h4>
                    <p class="mb-0 fs-14 color-white">.....</p>
                </div>
                <!-- //content-->
            </div>
            <!-- // Item -->
            ... more items ...
        </div>
        <!-- // Main Slider -->
    </div>
    <!-- Column -->
    <div class="col-12 col-md-6 col-lg-5 mb-30">
        <!-- Vertical Carousel -->
        <div id="news-thumbnails" data-direction="ttb" data-items="3" data-is-navigation="1" data-pagination="reset-list col-12 flexbox align-center-x">
            <!-- Card Block -->
            <div class="mb-15 post-card">
                <div class="pdy-15 pdx-20 bg-white border-1 radius-sm border-alpha-10">
                    <!-- Content -->
                    <h4 class="fs-16">....</h4>
                    <p class="fs-12 mb-0 tx-nowrap">....</p>
                </div>
            </div>
            <!-- // Card Block -->
            ... more items ...
        </div>
        <!-- // Vertical Carousel -->
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->
```

```
//====> Activate Sliders <====//
Phenix('.px-slider').slider();
```

```
/*==== Coloring the Current Active Card ====*/
#news-thumbnails .post-card:not() .bg-white {transition: all 300ms linear;}

#news-thumbnails .post-card.is-active .bg-white {
    color: #FFF;
    background-color: var(--primary-color);
}
```

## Multimedia Example

in the next example we will use videos and iframes inside our slider and see how it pauses the video if its slide is not visible any more and all that happens dynamically,

what happens is the `.slider()` checks for any `<video>` in the slide after it has been `inactivated`, and watch over its status to pause it when the slide becomes `inactive`, and for the iframe you know that it stop the video not paused it.

[HTML](#tab-19)

[Javascript](#tab-20)

```
<!-- Multimedia Slider -->
<div class="px-slider" data-controls="1" data-pause-hover="1">
    <!-- item -->
    <div class="px-item">
        <!-- Normal Image -->
        <img src="http://placehold.co/610x345?text=Regular Image" alt="" class="fluid">
    </div>
    <!-- item -->
    <div class="px-item" data-media="1">
        <!-- Aspect Ratio Video -->
        <div class="px-media ratio-16x9" data-type="video">
            <video src="https://phenixthemes.com/sample.mp4" controls></video>
        </div>
        <!-- // Aspect Ratio Video -->
    </div>
    <!-- item -->
    <div class="px-item" data-media="1">
        <!-- Aspect Ratio Embed -->
        <div class="px-media ratio-16x9" data-type="iframe">
            <iframe src="https://www.youtube.com/embed/rId62CdFGg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <!-- // Aspect Ratio Embed -->
    </div>
    <!-- item -->
    <div class="px-item">
        <!-- Aspect Ratio Element -->
        <div class="px-media ratio-16x9" data-src="http://placehold.co/720x480?text=Mixed Media" data-type="mixed-bg" data-gradient="rgba(0,196,255, 0.5), rgba(26,105,244, 0.5)"></div>
    </div>
    <!-- item -->
    <div class="px-item">
        <!-- Aspect Ratio Element -->
        <div class="px-media ratio-16x9" data-src="http://placehold.co/720x480?text=Media Background" data-gradient="rgba(0,196,255, 0.5), rgba(26,105,244, 0.5)"></div>
    </div>
    <!-- // item -->
</div>
<!-- // Multimedia Slider -->
```

```
//====> Activate Sliders <====//
Phenix('.px-slider').slider();

//====> Activate Multimedia <====//
Phenix('[data-src]').multimedia();
```

## JS Options

in the table below you can find all options available with splide.js and `phenix.slider()`.

<figure>

| Options | Description | Default | Data Type |
| --- | --- | --- | --- |
| `` `type` `` | slide, loop, fade | `loop` | `string` |
| `focus` | \# of the slide should be active if there are multiple slides in a page | `0` | `` `number` `` |
| ``` `` `items` `` ``` | the number of slides to show at once. | `1` | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| ``` `` `steps` `` ``` | the number of slides to move at once. | `1` | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| `` `speed` `` | sliding animation transition speed in milliseconds | `700` | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| `` `duration` `` | the autoplay interval duration in milliseconds. | `6000` | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| `` `autoplay` `` | enable/disable autoplay. | `true` | `````` ````` ```` ``` `` `boolean` `` ``` ```` ````` `````` |
| `` `controls` `` | enable arrows buttons and add classes to it. | `false` | `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` |
| `` `arrow` `` | replace phenix controls buttons classes with new one. | `none` | `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` |
| `` `pagination` `` | enable pagination and add classes to it. | `false` | `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` |
| `` `page` `` | replace phenix pagination buttons classes with new one. | `none` | `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` |
| `` `direction` `` | determines the page direction rtl or ltr | `dynamic` | `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` |
| `` `breakpoints` `` | array of objects for screen width breakpoints to apply different options in each screen. | `none` | `````` ````` ```` ``` `` `Array` `` ``` ```` ````` `````` |
| `` `start` `` | Defines the start index of the first slide. | `0` | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| `` `sync` `` | define a selector for another slider to sync | `false` | `````` ````` ```` ``` `` `boolean` `` ``` ```` ````` `````` |
| `` `isNavigation` `` | define if the synced thumbnails are navigation button between slides. | `false` | ```````````` ``````````` `````````` ````````` ```````` ``````` `````` ````` ```` ``` `` `selector` `` ``` ```` ````` `````` ``````` ```````` ````````` `````````` ``````````` ```````````` |
| `` `pauseOnHover` `` | enable/disable pause on hover | `false` | `````` ````` ```` ``` `` `boolean` `` ``` ```` ````` `````` |
| `` `intersection` `` | enable/disable mounting the slider only when its visible in the viewport. | `false` | `````` ````` ```` ``` `` `boolean` `` ``` ```` ````` `````` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>

## Data Options

in the table below you can find all `data-attributes` options on the slider component wrapper, available with splide.js and `phenix.slider()`.

<figure>

| Options | Description | Default | Data Type |
| --- | --- | --- | --- |
| `` `data-type` `` | slide, loop, fade | `loop` | `string` |
| ``` data-`` `items` `` ``` | the number of slides to show at once from extra small screens and up. | `1` | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| ``` data`` `-sm` `` ``` | the number of slides to show at once from small screens and up. | \------ | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| ``` data-`` `md` `` ``` | the number of slides to show at once from medium screens and up. | \------ | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| ``` data-`` `lg` `` ``` | the number of slides to show at once from large screens and up. | \------ | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| ``` data-`` `xl` `` ``` | the number of slides to show at once from extra large screens and up. | \------ | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| ``` `` `data-focus` `` ``` | determines which slide should be active if the carousel has multiple slides in a page. | 0 | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| ``` `` `data-steps` `` ``` | the number of slides to move at once. | `1` | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| `` `data-speed` `` | sliding animation transition speed in milliseconds | `700` | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| `` `data-duration` `` | the autoplay interval duration in milliseconds. | `6000` | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| `` `data-autoplay` `` | enable/disable autoplay. | `true` | `````` ````` ```` ``` `` `boolean` `` ``` ```` ````` `````` |
| `` data-`controls` `` | enable arrows buttons and add classes to it. | `false` | `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` |
| `` `data-arrow` `` | replace phenix controls buttons classes with new one. | `none` | `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` |
| `` data-`pagination` `` | enable pagination and add classes to it. | `false` | `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` |
| `` `date-page` `` | replace phenix pagination buttons classes with new one. | `none` | `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` |
| `` `data-direction` `` | determines the page direction rtl or ltr | `dynamic` | `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` |
| `` `data-start` `` | Defines the start index of the first slide. | `0` | `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` |
| `` `data-sync` `` | define a selector for another slider to sync | `false` | `````` ````` ```` ``` `` `boolean` `` ``` ```` ````` `````` |
| `` `data-is-navigation` `` | define if the synced thumbnails are navigation button between slides. | `false` | `````` ````` ```` ``` `` `selector` `` ``` ```` ````` `````` |
| `data-pause-hover` | enable/disable pause on hover | `false` | `````` ````` ```` ``` `` `boolean` `` ``` ```` ````` `````` |
| `` `data-intersection` `` | enable/disable mounting the slider only when its visible in the viewport. | `false` | `````` ````` ```` ``` `` `boolean` `` ``` ```` ````` `````` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>

## CSS Classes

in the table below you can find all the plugin classes added with phenix to customize the slider components.

<figure>

| class-name | Description |
| --- | --- |
| `` `.px-slider` `` | phenix main slider component class-name. |
| `` `.px-slider-controls` `` | phenix slider controls wrapper class-name |
| `.px-slider-button` | phenix slider controls buttons class-name |
| ``` `` `.px-prev` `` ``` | phenix slider controls previous button class-name |
| ``` `` `.px-next` `` ``` | phenix slider controls next button class-name |
| `` `.px-slider-pagination` `` | phenix slider pagination wrapper class-name |
| `` `.px-slider-page` `` | phenix slider pagination buttons class-name |
| `` `.is-active` `` | slides and pagination active class-name |
| `` `.is-visible` `` | visible slides class-name |
| `[aria-hidden="true"]` | hidden slides attribute |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>
