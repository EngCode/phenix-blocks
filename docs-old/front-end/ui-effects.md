---
title: "UI Effects"
date: 2025-01-04
---

## DOM Effects

Learn how to work around with Phenix DOM Effects JS/TypeScript source code to build fancy and interactive components, and create effects for your user interface like the show, hide, smooth scroll, spy-scroll, etc.

## Slide Effects

with Phenix slide effects you can show and hide elements with animated sliding effects and there are three functions to do so.

- `slideUp(duration, delay)` to hide elements

- `slideDown(duration, delay, display)` to show elements

- `slideToggle(duration, delay, display)` to change between show/hide,

> the slide effects take two main parameters `duration` for the animation speed by milliseconds, and `delay` for delaying before the effect animation start, and only the show functionality supports the `display` the parameter which can make the element show with specific css display values like `flex` instead of `block`.

[slideUp](#tab-1)

[slideDown](#tab-2)

[slideToggle](#tab-3)

```
//====> Hide .targets with Sliding Effect <====//
Phenix('.targets').slideUp();

//====> Hide .targets with Sliding Effect <====//
Phenix('.targets').slideUp(700, 0);
```

```
//====> Show .targets with Sliding Effect <====//
Phenix('.targets').slideDown();

//====> Show .targets with Sliding Effect <====//
Phenix('.targets').slideDown(700, 0, 'inline-block');
```

```
//====> Show/Hide .targets with Sliding Effect <====//
Phenix('.targets').slideToggle();

//====> Show/Hide .targets with Sliding Effect <====//
Phenix('.targets').slideToggle(700, 0, 'inline-block');
```

## Fade Effects

with Phenix fade effects you can show and hide elements with animated fading effect and there are three functions to do so,

- `fadeOut(duration, delay)` to hide elements

- `fadeIn(duration, delay, display)` to show elements

- `fadeToggle(duration, delay, display)` to change between show/hide,

the fade effects take two main parameters `duration` for the animation speed by milliseconds, and `delay` for delaying before the effect animation start, and only the show functionality supports the `display` the parameter which can make the element show with specific css display values like `flex` instead of `block`.

[fadeOut](#tab-4)

[fadeIn](#tab-5)

[fadeToggle](#tab-6)

```
//====> Hide .targets with Fading Effect <====//
Phenix('.targets').fadeOut();

//====> Hide .targets with Fading Effect <====//
Phenix('.targets').fadeOut(700, 0);
```

```
//====> Show .targets with Fading Effect <====//
Phenix('.targets').fadeIn();

//====> Show .targets with Fading Effect <====//
Phenix('.targets').fadeIn(700, 0, 'inline-block');
```

```
//====> Show/Hide .targets with Fading Effect <====//
Phenix('.targets').fadeToggle();

//====> Show/Hide .targets with Fading Effect <====//
Phenix('.targets').fadeToggle(700, 0, 'inline-block');
```

## Effects Examples

in the examples below you will find a live demo of the fade and slide effects.

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| duration | Animation Speed by Milliseconds | 300 | Number |
| delay | Animation Delay by Milliseconds | none | Number |
| display | Display CSS property value | block | String |

[HTML](#tab-7)

[Javascript](#tab-8)

```
<div class="row gpy-30">
    <div class="col-12 col-md-6">
        <!-- Sliding -->
        <div class="sliding-example pd-20 bg-revert-05 border-1 border-solid border-revert-15">
            <!-- Buttons -->
            <a href="#" class="slide-btn btn dark radius-sm me-10 small" data-effect="hide">slideUp</a>
            <a href="#" class="slide-btn btn dark radius-sm me-10 small" data-effect="show">slideDown</a>
            <a href="#" class="slide-btn btn dark radius-sm me-10 small" data-effect="toggle">slideToggle</a>
            <!-- Box -->
            <div class="the-box bg-revert-10 border-1 border-solid border-revert-15 pdy-50 pdx-30 tx-align-center mt-15 radius-sm">Empty Box for Testing</div>
        </div>
        <!-- // Sliding -->
    </div>
    <div class="col-12 col-md-6">
        <!-- Fading -->
        <div class="fading-example pd-20 bg-revert-05 border-1 border-solid border-revert-15">
            <!-- Buttons -->
            <a href="#" class="fade-btn btn dark radius-sm me-10 small" data-effect="hide">fadeOut</a>
            <a href="#" class="fade-btn btn dark radius-sm me-10 small" data-effect="show">fadeIn</a>
            <a href="#" class="fade-btn btn dark radius-sm me-10 small" data-effect="toggle">fadeToggle</a>
            <!-- Box -->
            <div class="the-box bg-revert-10 border-1 border-solid border-revert-15 pdy-50 pdx-30 tx-align-center mt-15 radius-sm">Empty Box for Testing</div>
        </div>
        <!-- // Fading -->
    </div>
</div>
```

```
//====> Sliding Example <====//
Phenix('.sliding-example .slide-btn').on('click', click => {
    //====> Prevent Default <====//
    click.preventDefault();
    //====> Effect Data <====//
    let thisButton = click.target,
        effectType = thisButton.getAttribute('data-effect'),
        effectTarget = Phenix(thisButton).next('.the-box');
    //====> Apply Effect <====//
    if (effectType == 'hide') Phenix(effectTarget).slideUp();
    else if (effectType == 'show') Phenix(effectTarget).slideDown();
    else if (effectType == 'toggle') Phenix(effectTarget).slideToggle();
});

//====> Fading Example <====//
Phenix('.fading-example .fade-btn').on('click', click => {
    //====> Prevent Default <====//
    click.preventDefault();
    //====> Effect Data <====//
    let thisButton = click.target,
        effectType = thisButton.getAttribute('data-effect'),
        effectTarget = Phenix(thisButton).next('.the-box');
    //====> Apply Effect <====//
    if (effectType == 'hide') Phenix(effectTarget).fadeOut();
    else if (effectType == 'show') Phenix(effectTarget).fadeIn();
    else if (effectType == 'toggle') Phenix(effectTarget).fadeToggle();
});
```

## Smooth Scroll

Phenix has a simple function to make the scroll act smoothly animated to the target with clickable links usually, .smothScroll(options), and it comes with a collection of handy options to make the scroll goes after the target start position or before it, etc, you can learn how to use it from the examples below.

!important: you can’t use offset and into with each other, you can only increase or decrease the target position.

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| **target** | Target to Scroll to | none | Selector |
| **duration** | Scroll Animation Speed by Milliseconds | `**700**` | Number |
| **into** | Increase Target Position by \[Number\] | none | Number |
| **offset** | Decrease Target Position by \[Number\] | none | Number |

[HTML](#tab-9)

[Javascript](#tab-10)

```
<!-- Scroll Button [Trigger] as Link -->
<a href="#target-id" class="scroll-trigger">Scroll to .the-box</a>

<!-- Scroll Button [Trigger] as Button -->
<button data-target="#target-id" class="scroll-trigger">Scroll to .the-box</button>

<!-- Trigger inline Options -->
<button data-duration="700" data-offset="0" data-into="0">...</button>

<!-- Scroll Target -->
<div id="target-id" class="the-box">....</div>
```

```
//====> Create Smooth Scroll Effect to Triggers Elements <====//
Phenix('.scroll-trigger').smothScroll();

//====> Create Smooth Scroll Effect to Triggers Elements <====//
Phenix('.scroll-trigger').smothScroll({
    target : "#target-id",
    duration : 700,
    offset : 0,
    into : 0
});
```

## Scrollspy

with Phenix .scrollspy() you can create a scroll tracker to tell you where you are on the page while scrolling through the document you can see a live demo example of it on this documentation Sidebar \[Table of Content\], and you can learn how to build one from the example below.

!important: you can’t use offset and into with each other, you can only increase or decrease the target position.

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| **active** | activation class name for the tracker and its targets | `**phenix-active**` | string |
| **flow** | scroll flow direction it can be `start` or `end` or `both` | `**both**` | string |
| **into** | increase target Position by \[Number\] | none | Number |
| **offset** | decrease target Position by \[Number\] | none | Number |

[HTML](#tab-11)

[Javascript](#tab-12)

```
<!-- ScrollSpy Tracker -->
<ul class="scroll-tracker">
    <li><a href="#target-id">...</a></li>
    <li><a href="#target-id-2">...</a></li>
    <li><a href="#target-id-3">...</a></li>
</ul>
<!-- // ScrollSpy Tracker -->

<!-- Tracked Content -->
<div id="target-id"></div>
<!-- Tracked Content -->
<div id="target-id-2"></div>
<!-- Tracked Content -->
<div id="target-id-3"></div>
....
```

```
//====> Create SpayScroll Tracker <====//
Phenix('.scroll-tracker').scrollSpy();

//====> Create SpayScroll Tracker <====//
Phenix('.scroll-tracker').scrollSpy({
    active: "phenix-active",
    flow  : 'both',
    offset: 0,
    into  : 0
});
```

## Sticky Elements

with Phenix .sticky() you can create sticky elements by toggling the class name .is-sticky while you’re scrolling through the document like the header and both sidebars on this documentation, and it uses the css position: sticky with support for position: fixed for the browsers and elements that don’t support sticky positions like tables

!important: you can’t use offset and into with each other, you can only increase or decrease the target position.

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| **active** | activation class name for the sticky elements | `**is-sticky**` | string |
| **type** | position type for the element **\[fixed, sticky\]** | `**sticky**` | string |
| **flow** | scroll flow direction it can be `x` or `y` | `**y**` | string |
| **into** | increase target Position by \[Number\] | none | Number |
| **offset** | decrease target Position by \[Number\] | none | Number |

```
//====> Create Sticky Element <====//
Phenix('.targets').sticky();

//====> Create Sticky Element Options <====//
Phenix('.targets').sticky({
    type   : "sticky",
    active : "is-sticky",
    flow   : 'y',
    offset : 0,
    into   : 0
});
```

## Animated Counter

with Phenix .counter(options) you can animate counting of a number increases or decrease step by step to make a nice animated number counter, you can simply run the function on any element that holds a number as its content and it will work just fine, if you need more advanced options you can look at the options table below.

[Usage](#tab-13)

[Example](#tab-14)

```
//====> Create Animated Count Up <====//
Phenix('.targets').counter();

//====> Create Animated Count Down <====//
Phenix('.targets').counter({
    reverse:true
});
```

```
<div class="counter-example pd-20 bg-revert-05 border-1 border-solid border-revert-15">
    <!-- Count Up -->
    <a href="#" class="ex-btn count-up btn dark radius-sm me-10 small">Count Up</a>
    <div class="the-box h2 bg-revert-10 border-1 border-solid border-revert-15 pdy-50 pdx-30 tx-align-center mt-15 radius-sm" data-value="900000">0</div>

    <!-- Count Down -->
    <a href="#" class="ex-btn count-down btn dark radius-sm me-10 small">Count Down</a>
    <div class="the-box h2 bg-revert-10 border-1 border-solid border-revert-15 pdy-50 pdx-30 tx-align-center mt-15 radius-sm">900000</div>
</div>
```

```
//====> Counter Example <====//
Phenix('.counter-example .ex-btn').on('click', click => {
    //====> Prevent Default <====//
    click.preventDefault();
    //====> Effect Data <====//
    let thisButton = click.target,
        effectTarget = Phenix(thisButton).next('.the-box');
    //====> Apply Effect <====//
    if (thisButton.matches('.count-up')) Phenix(effectTarget).counter();
    else if (thisButton.matches('.count-down')) Phenix(effectTarget).counter({reverse: true});
});
```
