---
title: "Animations"
date: 2025-01-04
---

## View-Port Trigger

learn how to create animation effects for your elements when they appear on the screen or in any case you want a nice animation in it for entering and exiting effects.

## How it Works

phenix uses a simple functionality to monitor the targeted elements and when they appear in the screen view it adds to it a css animation-name, duration, delay and a class name of .view-active if you need to add your animation scenario to make it show animated, here are some tips on some options :

- **flow:** is to select between the element view starting from the top or the bottom of the screen.

- **into:** is to animate the element view after its actual position by adding offset number by pixels

- **offset:** is to animate before the element’s actual position by adding offset number by pixels

- **lazyloading**: if you enable the **`lazyloading`** option make sure to give each animated elements group a data-attribute of `data-lazy-group="1"` for the delay to work correctly;

- **!important:** you can’t use `offset` and `into` with each other, you can only increase or decrease the target position.

## Basic Usage

to create animated elements when they enter the viewpoint of the screen you can create these effects by using Phenix(‘.view-status’).animations(options) after that, you can use data attributes to define the animation name, duration, delay for each targeted element.

```
<!-- Animated Element -->
<div class="any-element"
    data-animation="fadeIn"
    data-delay="500"
    data-duration="1000"
    data-offset="0"
>...</div>
```

## Animations List

Phenix uses a third-party collection of preset animations from [Animate.css Library by Daniel Eden](https://animate.style/) that loaded when you activate the javascript animations and you can find all the animations listed in the library Documentation for further information about its features,

and you can make the directional animations dynamically change depending on the document page direction by activating the directionFix: true in the Javascript options then you can use the terms Start, End instead of Left/Right in your element animation name attribute.

| Directional Ex. | Description | Result in \[LTR\] | Result in \[RTL\] |
| --- | --- | --- | --- |
| fadeInStart | show with opacity and slide to the page direction to start | fadeInLeft | fadeInRight |
| fadeOutStart | hide with opacity and slide to the page direction to start | `fadeOutLeft` | fadeOutRight |
| fadeInEnd | show with opacity and sliding to the page direction end | `fadeInRight` | fadeInLeft |
| fadeOutEnd | hide with opacity and slide to the page direction end | `fadeOutRight` | fadeOutLeft |

## on Demand

as mentioned above the animations() uses a third-party animations library in its core with the option to animate CSS you can define a specific set of animations to load from the library if you do not need the complete library and it can be defined with the js option when you initialize the plugin and give it a value or array of set names:

```
//====> Loading Animations only without Watching Any Element <====//
Phenix(document).animations({
    animateCSS: [
        "fading",
        "sliding",
        "flippers",
        "attentions",
        "lightspeed",
        "rotating",
        "zooming",
        "back",
        "bouncing",
        "specials",
        "utilities"
    ],
});
```

| Animations Sets | Description |
| --- | --- |
| `fading` | Load Fading in and out animation set from `animate.css` |
| `sliding` | Load Slide in and out animation set from `animate.css` |
| `flippers` | Load Flapping in and out animation set from `animate.css` |
| `attentions` | Load Attention Seekers animations set from `animate.css` |
| `lightspeed` | Load Lightspeed animations set from `animate.css` |
| `rotating` | Load Rotating animations set from `animate.css` |
| `zooming` | Load Zooming animations set from `animate.css` |
| `specials` | Load Specials animations set from `animate.css` |
| `back` | Load Back In/Out animations set from `animate.css` |
| `bouncing` | Load Bouncing animations set from `animate.css` |
| `utilities` | Load animate.css set of classes for animations utilities. |
| `all or true` | Load all animations set from `animate.css` |

## Options Table

in the table and the code below, you will find the plugin options and an example of its syntax.

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| `**animation**` | CSS Animation Name | none | string |
| `**duration**` | Animation Duration by `ms` | none | number |
| `**delay**` | Animation Delay by `ms` | none | number |
| `**lazyloading**` | Animate Element after Another | false | Boolean |
| `**animateCSS**` | Loading Animate.css Library | true | Boolean |
| `**directionFix**` | Logical Directions Resolver to read Start, End instead of Left/Right. | true | Boolean |
| `**flow**` | Scroll Flow `[start, end]` | none | string |
| `**into**` | Increase Target Position By \[number\] | none | number |
| `**offset**` | Decrease Target Position By \[number\] | none | number |
| `**lazygroup**` | Define the group for each lazyloading group | true | string |
