---
title: "Multimedia"
date: 2025-01-04
---

## Responsive Multimedia

create absolute responsive multimedia elements with [aspect-ratio](https://phenixthemes.com/pds-docs/responsive-multimedia/) resizing support, with the Phenix multimedia plugin you can create images, backgrounds, videos, mixed backgrounds, iframe, and also [Video](https://phenixthemes.com/pds-docs/video-player/) & [Audio](https://phenixthemes.com/pds-docs/audio-player/) players.

## Multimedia Overview

phenix .multimedia(options) is all about creating responsive media elements for images, videos, or iframe, it was created in Tornado to solve a problem with image _stretch_ in layout responsive, and to fix it we make the images as css background for a block-level element then make the background-size: cover to prevent any visual issues,

but in Phenix, it has evolved to include videos embed, gradients, mixed backgrounds, and also creating customizable advanced video/audio players, which you can learn more about in [Video Player](https://phenixthemes.com/pds-docs/video-player/) and [Audio Player](https://phenixthemes.com/pds-docs/audio-player/) documents, and it uses the aspect-ratio elements as the root element to build any of these fancy multimedia aspect-ratio responsive elements.

## Aspect-Ratio Element

The aspect ratio of an element is the ratio of its width to its height, and is expressed with a relative height percentage that resizes with the element width, it’s a built-in Phenix with a padding-bottom by percentage trick, the element has usually a relative position, to help create Media elements inside of it that act the same as the aspect-ratio element.

## Core Concept

the .aspect-ratio element is built with CSS tricks and not a natively supported feature of JS or CSS the element has no specific width and its height is calculated by padding-bottom: \*% to make the element height resizable relative to its width, here are a few points to keep in mind when you work with aspect-ratio elements.

- **aspect-ratio element:** most have a `display:block` like, which can be any of `[block, flex, grid, inline-block, etc]` and any `display:inline` will cause problems.

- **the element:** that any child must have a position `relative, absolute, fixed, sticky` to work correctly.

- **the element:** can’t be a direct column of the grid system and if you use it so, make sure to remove the `padding-bottom`.

- **the media:** children of the element usually have a position: absolute and width, and height of 100% to fill the parent.

- **the children’s:** elements act differently from the media child’s the regular elements are centered in the aspect-ratio parent and take their own width/height.

[HTML](#tab-1)

[Javascript](#tab-2)

```
<!-- Basic Init for Multimedia -->
<div class="px-media"
     data-src="source-file-url"
     data-type="background || image || embed || iframe || mixed-bg || gradient || html">
</div>
<!-- // Basic Init for Multimedia -->
```

```
//====> Enable Multimedia <====//
Phenix('.px-media').multimedia();
```

## Set Background

Multimedia backgrounds can set dynamic css backgrounds to the element, by defining the type of media as the background will make it so, the default size of the multimedia element is a 1×1 ratio, and it accepts custom % size.

and you can also turn off the aspect ratio sizing by making data-size="none" to turn it off or by adding a class name ratio-x to the element.

[HTML](#tab-3)

[Javascript](#tab-4)

```
<!-- Aspect Ratio Media as Background -->
<div class="px-media" data-src="background-url" data-type="background"></div>
```

```
//====> Multimedia Backgrounds <====//
Phenix('.px-media').multimedia({
    type : "background", //===> Media Type
});
```

## Set Image

the image media type is exactly like the background the only difference is it creates a hidden image HTML tag for SEO-friendly media, and do not forget the default size of the multimedia element is a 1×1 ratio, and it accepts custom % size and you can always turn it off with none.

[HTML](#tab-5)

[Javascript](#tab-6)

```
<!-- Aspect Ratio Media as Images -->
<div class="px-media" data-src="image-url" data-type="image"></div>
```

```
//====> Multimedia Images <====//
Phenix('.px-media').multimedia({
    type : "image", //===> Media Type
});
```

## Set Gradient

the Gradient media type is just an extra option since we play with css backgrounds we can provide the content writers and the user a dynamic inline gradient as the background of any element, and you can set off the aspect ratio sizing and just act with it as nothing more than a css gradient background.

[HTML](#tab-7)

[Javascript](#tab-8)

```
<!-- Aspect Ratio Media as Gradient -->
<div class="px-media ratio-16x9" data-type="gradient" data-mode="linear" data-gradient="0, #000, #1c1c1c" data-repeat=""></div>
```

```
//====> Multimedia Gradient <====//
Phenix('.px-media').multimedia({
    type : "gradient", //===> Media Type
    //===> Gradient Options <===//
    gradient : {
        value  : [array],  //===> CSS Gradient Value [rtoation, color1, color2, etc...]
        mode   : string,   //===> [linear, radial, conic]
        repeat : boolean,  //===> Gradient Repeat [true, false]
    },
});
```

## Mixed Backgrounds

the Mixed Backgrounds type lets you create multiple backgrounds for the element like an image background and an overlay gradient above it, it’s a little bit complex but if you managed to understand how the CSS multiple backgrounds works, you will use it perfectly.

[HTML](#tab-9)

[Javascript](#tab-10)

```
<!-- Aspect Ratio Media as Mixed Backgrounds -->
<div class="px-media" data-src="http://via.placeholder.com/720x480" data-type="mixed-bg" data-gradient="rgba(0,196,255, 0.5), rgba(26,105,244, 0.5)"></div>
```

```
//====> Multimedia Mixed Backgrounds <====//
Phenix('.px-media').multimedia({
    type : "mixed-bg", //===> Media Type
    //===> Gradient Options <===//
    gradient : {
        value  : [array],  //===> CSS Gradient Value [rtoation, color1, color2, etc...]
        mode   : string,   //===> [linear, radial, conic]
        repeat : boolean,  //===> Gradient Repeat [true, false]
    },
});
```

## iFrame Viewer

the iframe type of Phenix multimedia lets you embed anything that can be embedded with HTML iframe tags like google maps or any website or webpage.

[HTML](#tab-11)

[Javascript](#tab-12)

```
<!-- Aspect Ratio Media as iFrame -->
<div class="px-media" data-src="url" data-type="iframe"></div>
```

```
//====> Multimedia iFrame <====//
Phenix('.px-media').multimedia({
    type : "iframe", //===> Media Type
});
```

## Embed Media

the embed media type which is usually video media streamed from platforms like YouTube, Vimeo, etc, has a specific way for its URL to be viewed, Phenix works out that for you all you have to do is give it the URL for the embedded media from any platform and it will handle it for you into an iFrame inside aspect ratio element.

[Video](#tab-13)

[YouTube](#tab-14)

[Vimeo](#tab-15)

[Other](#tab-16)

[Javascript](#tab-17)

```
<!-- Embed Media from Video File -->
<div class="px-media" data-src="video-url" data-type="embed" data-embed="video" data-controls="true"></div>
```

```
<!-- Embed Media from YouTube -->
<div class="px-media" data-src="url" data-type="embed" data-embed="youtube"></div>
```

```
<!-- Embed Media from Vimeo-->
<div class="px-media" data-src="URL" data-type="embed" data-embed="vimeo"></div>
```

```
<!-- Embed Media from Any Other Service Like Dailymotion -->
<div class="px-media" data-src="URL" data-type="embed" data-embed="other"></div>
```

```
//====> Multimedia Embed <====//
Phenix('.px-media').multimedia({
    type  : "embed",  //===> Media Type
    embed : "video",  //===> Embed Source
    controls : true,  //====>  nable/Disable Embed Controls 
    autoplay : false, //====> Enable/Disable Embed Autoplay
    loop  : false,  //====> Enable/Disable Embed infinite loop
    muted : false,  //====> Enable/Disable Embed Audio
)};
```

## Element Size

phenix multimedia plugin uses predefined aspect ratio sizes from Phenix Aspect Ratio elements, which you can set with the data-size attribute or the size option from the js function, or by adding a class name ratio-#{size} to the media element,

and the multimedia plugin adds an extra option to the aspect ratio sizing so that you can define the size by custom percentage number instead of the ratio prefix.

**Note:** to overwrite the ratio size manually use CSS variable (–ratio-size) with any .ratio-\* classes.

[Classes](#tab-18)

[Atttribute](#tab-19)

```
<!-- Aspect Ratio Square Size -->
<div class="px-media ratio-1x1" data-src="url" data-type="background"></div>

<!-- Aspect Ratio Classic Size -->
<div class="px-media ratio-4x3" data-src="url" data-type="background"></div>

<!-- Aspect Ratio HD Size -->
<div class="px-media ratio-16x9" data-src="url" data-type="background"></div>

<!-- Aspect Ratio Landscape Size -->
<div class="px-media ratio-21x9" data-src="url" data-type="background"></div>

<!-- Aspect Ratio No Predefined Size -->
<div class="px-media ratio-x" data-src="url" data-type="background"></div>
```

```
<!-- Aspect Ratio Square Size -->
<div class="px-media" data-src="url" data-type="background" data-size="1x1"></div>

<!-- Aspect Ratio Classic Size -->
<div class="px-media" data-src="url" data-type="background" data-size="4x3"></div>

<!-- Aspect Ratio HD Size -->
<div class="px-media" data-src="url" data-type="background" data-size="16x9"></div>

<!-- Aspect Ratio Landscape Size -->
<div class="px-media" data-src="url" data-type="background" data-size="21x9"></div>

<!-- Aspect Ratio Custom Size -->
<div class="px-media" data-src="url" data-type="background" data-size="75%"></div>

<!-- Aspect Ratio No Predefined Size -->
<div class="px-media" data-src="url" data-type="background" data-size="none"></div>
```

## Lazy-loading

the multimedia plugin has a lazy-loading option to make the media load when the user arrives at its location on the document while he is scrolling, and as any other option, it can be activated from the HTML attribute or js option.

[HTML](#tab-20)

[Javascript](#tab-21)

```
<!-- Aspect Ratio Square Size -->
<div class="px-media" data-src="url" data-type="background" data-size="1x1" data-lazyloading="ture"></div>
```

```
//====> Multimedia Lazyloading <====//
Phenix('.px-media').multimedia({
    lazyloading : true, //===> Enable Lazy-Loading
});
```

## Custom Audio & Video

the [Advanced Audio](https://phenixthemes.com/pds-docs/audio-player/) and [Video Player](https://phenixthemes.com/pds-docs/video-player/) is the most complex thing in the multimedia plugin of Phenix, which has a custom player built in so you can do much more useful stuff for building streaming apps and designing your player for your app and you can know more in their document.

## Options Table

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| **type** | the type of media \[`background`, `image`, `embed`, `iframe`, `mixed-bg`, `gradient`, `html`\] | background | String |
| **size** | the ratio size of the media element \[`1x1`, `4x3`, `16x9`, `16x10`, `21x9`, `*%`, `false`\] | 60% | String |
| **src** | the source URL for the media file. | none | String |
| **lazyloading** | enable or disable lazy-loading for all media. | false | Boolean |
| **alt** | alternative text for the image media type. | none | String |
| **cover** | the cover image for the video media type. | none | String |
| **player** | the player type for video and audio media \[`phenix`, `html`\]. | html | String |
| **gradient** | the gradient media type options. | none | Object |
| **value** | the gradient value or \[`data-gradient`\] attribute | none | Array |
| **mode** | the gradient mode \[`linear`, `radial`, `conic`\] | linear | String |
| **repeat** | the gradient repeater mode. | false | Boolean |
| **embed** | the embedded source \[`video`, `youtube`, `vemio`, `other`\] | video | String |
| **controls** | the embedded media controls enable/disable | true | Boolean |
| **Autoplay** | the embedded media Auto-Play enable/disable | false | Boolean |
| **loop** | the embedded media infinite loop enable/disable | false | Boolean |
| **muted** | the embedded media audio enable/disable | false | Boolean |
