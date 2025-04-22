---
title: "Popup Modals"
date: 2025-01-04
---

## Popup Modals

Learn how to build a popup modal with phenix javascript modals plugin and css utilities

## How it Works

Before getting started with Phenix popup component, be sure to keep in mind a few rules :

- Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead.

- Clicking on the modal `“backdrop”` will automatically close the modal.

- Popups only supports one modal window at a time any modal opens it closes any other existing modal.

- Modals use `position: fixed`, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You’ll likely run into issues when nesting a `modal` within another fixed element.

- every thing begins with `.px-modal` the modal behavior and its triggers of every kind and it most have an id attribute.

- `.px-modal` is `flexbox` which let you use the [grid system utilities](http://phenix.localhost/test/flexbox-grid/) to align or resize your `.modal-content`

## Live Demo

in the demo below you will find the very basic structure styled with [PDS CSS Utilities](http://phenix.localhost/test/utilities/) for a popup modal component and the js plugin initial code for basic usage.

[Basic](#tab-1)

[Example](#tab-2)

[Javascript](#tab-3)

```
<!-- Popup Trigger -->
<button class="btn primary radius-sm popup-demo" data-modal="modal-demo">Popup Demo</button>

<!-- Modal Component -->
<div class="px-modal hidden align-center" id="modal-demo">
    <!-- Container -->
    <div class="modal-content bg-white radius-sm pd-20">
        Complete Empty Modal Box
        <!-- Close Button -->
        <button class="modal-close far fa-times btn square ms-15 danger tiny"></button>
    </div>
    <!-- Container -->
</div>
<!-- // Modal Component -->
```

```
<!-- Popup Trigger -->
<button class="btn secondary radius-sm popup-demo mb-20 me-15" data-modal="modal-demo-2">Basic Dialog</button>

<!-- Modal Component -->
<div class="px-modal hidden align-center" id="modal-demo-2">
    <!-- Container -->
    <div class="modal-content w-max-480 bg-white radius-sm">
        <!-- Headline -->
        <h4 class="fs-15 pdx-20 pdy-10 divider-b">Modal Headline Title</h4>
        <!-- Close Button -->
        <button class="modal-close far fa-times btn square ms-15 bg-transparent color-danger position-ab position-top-0 position-end-0"></button>
        <!-- Modal Body -->
        <div class="pdx-20 pdt-10">
            <p class="fs-14">It’s grown to become something of an artform, and there are countless filler text generators sprinkled around the web that provide a modern take on this classic staple of the design industry.</p>
        </div>
        <!-- Modal Footer -->
        <div class="pdx-20 pdy-10 divider-t flexbox align-between">
            <button class="modal-close btn primary tiny radius-sm">Agree!</button>
            <button class="modal-close btn danger tiny radius-sm">Close!</button>
        </div>
        <!-- // Modal Footer -->
    </div>
    <!-- Container -->
</div>
<!-- // Modal Component -->
```

```
//====> Popups <====//
Phenix('.px-modal').popup({
    type : 'modal',    //===> the type of the popup as modal or lightbox
    hash_url : false,  //===> Show the Modal if called from url
    backdrop : true,   //===> Enable/Disable Close by Backdrop
    onload   : false,  //===> Show on Page Load Required for 'timeout';
    showon   : false,  //===> Show the Modal when the '#target' is in View-Point
    timeout  : 0,      //===> Delay the Modal from showing work for [showon, onload]
});
```

## Auto Show-up

in the next demo you can see an example for making the modal show-up automatically by `url` or when the document is `loaded` with the option of delaying by using `timeout` option,

when you need the modal to show when the page is loaded use the `onload` option and set the `timeout` before it shows up you can try the example from the code below.

[Example 01](#tab-4)

[Example 02](#tab-5)

[Example 03](#tab-6)

```
<!-- Popup Trigger -->
<a href="#hash-demo" class="btn primary radius-sm popup-demo mb-20 me-15" target="_blank">Hash Demo</a>

<!-- Modal Component -->
<div class="px-modal hidden align-center" data-hash="1" id="hash-demo">
    <!-- Container -->
    <div class="modal-content bg-white radius-sm pd-20">
        Open By Hash Directly After Page Loading is Complete
        <!-- Close Button -->
        <button class="modal-close far fa-times btn square ms-15 danger tiny"></button>
    </div>
    <!-- Container -->
</div>
<!-- // Modal Component -->
```

```
<!-- Popup Trigger -->
<a href="#hash-demo-timeout" class="btn primary radius-sm popup-demo mb-20 me-15" target="_blank">Hash with Timer</a>

<!-- Modal Component -->
<div class="px-modal hidden align-center" data-hash="1" data-timeout="3000" id="hash-demo-timeout">
    <!-- Container -->
    <div class="modal-content bg-white radius-sm pd-20">
        Hash Demo Timeout i will wait for 3 seconds after the document is loaded before i show-up
        <!-- Close Button -->
        <button class="modal-close far fa-times btn square ms-15 danger tiny"></button>
    </div>
    <!-- Container -->
</div>
<!-- // Modal Component -->
```

```
<!-- Modal Component -->
<div class="px-modal hidden align-center" data-onload="1" data-timeout="3000" id="on-load-demo">
    <!-- Container -->
    <div class="modal-content bg-white radius-sm pd-20">
        i will wait for 3 seconds after the document is loaded before i show-up
        <!-- Close Button -->
        <button class="modal-close far fa-times btn square ms-15 danger tiny"></button>
    </div>
    <!-- Container -->
</div>
<!-- // Modal Component -->
```

## Popup When Scroll

Phenix popup plugin can show the modals when the user reaches specific part of the page with some id or class-name using `showon` option, and it shows only once in scrolling mode.

```
<!-- Modal Component -->
<div class="px-modal hidden align-center" data-showon="#section-4" id="inview-demo">
    <!-- Container -->
    <div class="modal-content bg-white radius-sm pd-20">
        i will show-up when you reach the section of <strong>Popup When Scroll</strong> with <code>showon</code> option.
        <!-- Close Button -->
        <button class="modal-close far fa-times btn square ms-15 danger tiny"></button>
    </div>
    <!-- Container -->
</div>
<!-- // Modal Component -->
```

## Media Lightbox

in the example below we will use the popup modals to create a lightbox for showing media images/videos in full size with the support of showing them as a group in slider lightbox using the `href` or the `data-src` attribute of the `thumbnail` for the full size image url

and by using the attribute `data-group` you can mark a collection of media to show-up in slider inside the lightbox modal along side the `data-media` attribute to define if its `video` or `embed` or `image`.

[Thumbnails](#tab-7)

[Lightbox](#tab-8)

[Javascript](#tab-9)

```
<!-- LightBox Image -->
<a class="px-lightbox" href="media_url">
    <img src="media_url" alt="" width="150" class="me-15">
</a>

<!-- LightBox Group -->
<img src="media_url" alt="" width="150" class="px-lightbox me-15" data-src="media_url" data-group="lightbox-group">
<!-- .... -->
<a href="media_url" class="px-lightbox" data-group="lightbox-group">
    <img src="media_url" alt="" width="150" class="me-15">
</a>
<!-- // LightBox Group -->

<!-- LightBox Video -->
<a class="px-lightbox" href="video_url" data-media="video">
    <img src="media_url" alt="" width="150" class="me-15">
</a>

<!-- LightBox Embed -->
<a class="px-lightbox" href="youtube_url" data-media="embed">
    <img src="media_url" alt="" width="150" class="me-15">
</a>
```

```
<!-- Lightbox Popup -->
<div class="px-modal hidden align-center" id="px-lightbox" data-type="lightbox">
    <!-- Container -->
    <div class="modal-content bg-white radius-sm">
        <!-- Close Button -->
        <button class="modal-close far fa-times btn square ms-15 radius-circle tiny danger position-ab position-top-10 position-end-10"></button>
        
        <!-- Lightbox Media will be here -->
    </div>
    <!-- Container -->
</div>
<!-- // Lightbox Popup -->
```

```
//====> Popup Lightbox <====//
Phenix('#px-lightbox').popup({
    type: 'lightbox'
});
```

## Callback Events

the popup has Two events to help you do stuff when the target is shown or when it hides and you can use it like any javascript event see the example below and keep in mind that the Events are fired on both the toggle button and its target.

```
//===> Do Something When the Target is shown <===//
Phenix('.px-modal').on('modal-showed', event => {
    console.log("Hello There :) the Target is Visible");
});
//===> Do Something When the Target is Hidden <===//
Phenix('.px-modal').on('modal-hidden', event => {
    console.log("Hello There :) the Target is hidden")
});
```

## Options Table

in the table below you can find all the popup plugin options.

```
//===> Do Something When the Target is shown <===//
Phenix('.px-modal').on('modal-showed', event => {
    console.log("Hello There :) the Target is Visible");
});
//===> Do Something When the Target is Hidden <===//
Phenix('.px-modal').on('modal-hidden', event => {
    console.log("Hello There :) the Target is hidden")
});
```

<figure>

| Cheat | Description | Default | Data Type |
| --- | --- | --- | --- |
| `` `type` `` | to define the type of the popup as `modal` or `lightbox` | `modal` | `string` |
| `` `hash_url` `` | Show the Modal if called from url | `` `false` `` | `boolean` |
| ``` `` `backdrop` `` ``` | Enable/Disable Close by Backdrop | `` `true` `` | `` `boolean` `` |
| ``` `` `onload` `` ``` | Show on Page Load Required for 'timeout'; | `` `true` `` | ````` ```` ``` `` `boolean` `` ``` ```` ````` |
| ``` `` `showon` `` ``` | Show the Modal when the '#target' is in View-Point | `` `false` `` | ````` ```` ``` `` `selector` `` ``` ```` ````` |
| `` `timeout` `` | Delay the Modal from showing work for \[`hash_url`, `onload`\] only | `` `0` `` | ````` ```` ``` `` `number` `` ``` ```` ````` |
| `data-group` | added to thumbnail trigger for showing a group of media inside lightbox modal. | `none` | `attribute` |
| `data-media` | added to thumbnail trigger to define the type of media to play if its `video` or `embed` or `image`. | `image` | `attribute` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>
