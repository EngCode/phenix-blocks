---
title: "Accordion"
date: 2025-01-04
---

## Accordion & Collapse

Learn how to build vertically collapsing accordions components in combination with Phenix Javascript collapse plugin and CSS Utilities.

## Overview

the accordion can be built with `Phenix('.toggle-button').collapse();` and the css utilities classes for styling, the collapse plugin works simply by defining a toggle button that when the user click on it, will show/hide a panel of content with options for more advanced and wide usage cases, and here is a few points to keep in mind and use it for your own advantage :

- when you click on the toggle button it adds `**.px-collapse-active**` class name to its self and its target when its activated.

- the target most have `.hidden` class name if you want it to be hidden by default.

- If `**parent**` is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior). The attribute has to be set on the `**target**` collapsible area.

- the `**collapse events**` are fired on both the toggle button and its target.

- the `**related**` option allows you to find a target that is related as sibling for the toggle button in the DOM tree

## Phenix Collapse

in the code below you can see an example for the basic collapse plugin, showing the syntax and the plugin options, all of the options can be used as `data attributes` instead of js object.

<figure>

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| **target** | panel target selector to show and hide with the toggle button. | `none` | selector |
| **related** | enable you to target the closest sibling target that matches your selector. | `false` | boolean |
| **parent** | group wrapper selector to close collapsible elements under the specified parent will be closed when this collapsible item is shown.. | `none` | selector |
| **events** | the collapse fires two events `"collapse-showed"` when the target is shown and `"collapse-hidden"` when the target has been hidden. | `none` | JS Event |

<figcaption>

Plugin Options Table.

</figcaption>

</figure>

[HTML](#tab-1)

[Javascript](#tab-2)

```
<!-- Collapse Button -->
<button class="button" data-target="#target">Click Me</button>

<!-- Collapse Target -->
<div id="target" class="hidden">..Hi, i'm a hidden panel..</div>
```

```
//====> Collapse <====//
Phenix('.button').collapse({
    target: '#target',  //===> Panel Target Selector
    parent: false,      //===> Accordion Group Selector
    related: false;     //===> Panel Target is related to the button as sibling in the DOM Tree
});
```

## Standard Accordion

in the code below you can see an example of accordion built with [PDS Utilities](http://phenix.localhost/test/utilities/) and `collapse` js method of Phenix Design System.

[HTML](#tab-3)

[Javascript](#tab-4)

[CSS](#tab-5)

```
<!-- Accordion Wrapper -->
<div class="px-accordion">
    <!-- Accordion Item -->
    <div class="accordion-item mb-15 bg-white border-1 border-r-sm border-alpha-10">
        <!-- Heading -->
        <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
            Accordion Example #1 Item 
            <i class="far fa-plus lineheight-100 color-gray"></i>
        </h4>
        <!-- Content -->
        <div class="accordion-content pd-20 hidden divider-t fs-14">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </div>
        <!-- // Content -->
    </div>
    <!-- // Accordion Item -->

    <!-- Accordion Item -->
    <div class="accordion-item mb-15 bg-white border-1 border-r-sm border-alpha-10">
        <!-- Heading -->
        <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
            Accordion Example #2 Item 
            <i class="far fa-plus lineheight-100 color-gray"></i>
        </h4>
        <!-- Content -->
        <div class="accordion-content pd-20 hidden divider-t fs-14">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </div>
        <!-- // Content -->
    </div>
    <!-- // Accordion Item -->

    <!-- Accordion Item -->
    <div class="accordion-item mb-15 bg-white border-1 border-r-sm border-alpha-10">
        <!-- Heading -->
        <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
            Accordion Example #3 Item 
            <i class="far fa-plus lineheight-100 color-gray"></i>
        </h4>
        <!-- Content -->
        <div class="accordion-content pd-20 hidden divider-t fs-14">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </div>
        <!-- // Content -->
    </div>
    <!-- // Accordion Item -->
</div>
<!-- // Accordion Wrapper -->
```

```
//====> Accordion <====//
Phenix('.accordion-btn').collapse({
    target  : '.accordion-content',
    related : true,
    parent  : '.px-accordion',
});
```

```
/*==== Change Headline Color When its Activated ====*/
.px-accordion .accordion-btn.px-collapse-active {
    color: var(--primary-color);
    background-color: var(--primary-offwhite);
}
```

## Pr-Activated Panel

in the code below we will use a javascript fallback to show a hidden panel by default on initiate by simply targeting a specific element by its order and remove `.hidden` class from it.

[HTML](#tab-6)

[Javascript](#tab-7)

[CSS](#tab-8)

```
<!-- Accordion Wrapper -->
<div class="px-accordion">
    <!-- Accordion Item -->
    <div class="accordion-item mb-15 bg-white border-1 border-r-sm border-alpha-10">
        <!-- Heading -->
        <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
            Accordion Example #1 Item 
            <i class="far fa-plus lineheight-100 color-gray"></i>
        </h4>
        <!-- Content -->
        <div class="accordion-content pd-20 hidden divider-t fs-14">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </div>
        <!-- // Content -->
    </div>
    <!-- // Accordion Item -->

    <!-- Accordion Item -->
    <div class="accordion-item mb-15 bg-white border-1 border-r-sm border-alpha-10">
        <!-- Heading -->
        <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
            Accordion Example #2 Item 
            <i class="far fa-plus lineheight-100 color-gray"></i>
        </h4>
        <!-- Content -->
        <div class="accordion-content pd-20 hidden divider-t fs-14">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </div>
        <!-- // Content -->
    </div>
    <!-- // Accordion Item -->

    <!-- Accordion Item -->
    <div class="accordion-item mb-15 bg-white border-1 border-r-sm border-alpha-10">
        <!-- Heading -->
        <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
            Accordion Example #3 Item 
            <i class="far fa-plus lineheight-100 color-gray"></i>
        </h4>
        <!-- Content -->
        <div class="accordion-content pd-20 hidden divider-t fs-14">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </div>
        <!-- // Content -->
    </div>
    <!-- // Accordion Item -->
</div>
<!-- // Accordion Wrapper -->
```

```
//====> Accordion <====//
Phenix('.accordion-btn').collapse({
    target  : '.accordion-content',
    related : true,
    parent  : '.px-accordion',
});

//====> Activate the First Item By Default <====//
Phenix('.accordion-item:first-of-type .accordion-content').removeClass('hidden').addClass('px-collapse-active');
Phenix('.accordion-item:first-of-type .accordion-btn').addClass('px-collapse-active');
```

```
/*==== Change Headline Color When its Activated ====*/
.px-accordion .accordion-btn.px-collapse-active {
    color: var(--primary-color);
    background-color: var(--primary-offwhite);
}
```

## Callback Events

the collapse has Two events to help you do stuff when the target is shown or when it hides and you can use it like any javascript event see the example below and keep in mind that the Events are fired on both the toggle `button` and its `target`.

```
//====> Build Collapse <====//
Phenix('.collapse-button').collapse();

//===> Do Something When the Target is shown <===//
Phenix('.collapse-button').on('collapse-showed', event => {
    console.log("Hello There :) the Target is Visible");
});

//===> Do Something When the Target is Hidden <===//
Phenix('.collapse-target').on('collapse-hidden', event => {
    console.log("Hello There :) the Target is hidden")
});
```
