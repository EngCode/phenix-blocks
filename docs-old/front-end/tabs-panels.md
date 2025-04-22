---
title: "Tabs &amp; Panels"
date: 2025-01-04
---

## Tabs & Panels

Learn how to build a tabs with hidden panels with phenix javascript tabs plugin and css utilities

## Overview

Before getting started with Phenix `tabs` component, be sure to keep in mind a few rules :

- the `tabs` have a specific dynamic HTML structure that most be build in that matter for the best behavior,

- the `navigation` and the panels most share an ancestor that you target when you run JS tabs

- the `panels` most be wrapped as group to show only one tab at the time

- the `.tabs-navigation` have an active status with the `primary-color` from css no other properties was applied

- the `call-back` events are fired on the targeted `panel` only.

- you can active any tab by `URL` hash with the `ID` of the panel and the `data-hash` attribute.

## Basic Usage

in the example below you can learn how to build the tabs structure and run its js

[HTML](#tab-1)

[CSS](#tab-2)

[Javascript](#tab-2)

```
<!-- Tabs Wrapper -->
<div class="px-tabs" data-active="0" data-navigation=".tabs-navigation">
    <!-- Tabs Navigation -->
    <ul class="tabs-navigation reset-list flexbox">
        <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14 bg-offwhite-gray color-gray">Tab #1</li>
        <li class="pdy-10 pdx-15 fs-14 bg-offwhite-gray color-gray"><a href="#tab-2">Tab #2</a></li>
        <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14 bg-offwhite-gray color-gray">Tab #3</li>
    </ul>
    <!-- Panels Group -->
    <div class="tabs-panels">
        <!-- Panel -->
        <div class="tab-panel bg-white pd-20 mb-30" id="tab-1">This Tab Number 1 with ID of #tab-1</div>
        <!-- Panel -->
        <div class="tab-panel bg-white pd-20 mb-30" id="tab-2">This Tab Number 2 with ID of #tab-2</div>
        <!-- Panel -->
        <div class="tab-panel bg-white pd-20 mb-30" id="tab-3">This Tab Number 3 with ID of #tab-3</div>
        <!-- // Panel -->
    </div>
    <!-- // Panels Group -->
</div>
<!-- // Tabs Wrapper -->
```

```
/*==== Active Mode ====*/
.tabs-navigation .active {
    background: #FFFFFF;
    color: var(--primary-color);
}
```

```
//====> Tabs <====//
Phenix('.px-tabs').tabs({
    active: 0,        //===> Show Tab # on Initial
    hash_url: false,  //===> Show Tab from URL #ID
    navigation: '.tabs-navigation', //===> Navigation Selector
});
```

## Callback Events

the tabs has Two events to help you do stuff when the target is shown or when it hides and you can use it like any javascript event see the example below and keep in mind that the Events are fired only on th Panel.

```
//====> Build Tabs <====//
Phenix('.px-tabs').tabs();

//===> Do Something When the Target is shown <===//
Phenix('#panel_ID').on('tab-showed', event => {
    console.log("Hello There :) the Target is Visible");
});

//===> Do Something When the Target is Hidden <===//
Phenix('#panel_ID').on('tab-hidden', event => {
    console.log("Hello There :) the Target is hidden")
});
```

## Options Table

in the table below you can find all options for tabs plugin and all of it are work as HTML attributes.

<figure>

| Cheat | Description | Default |
| --- | --- | --- |
| `` `active` `` | Show Tab number # on Initial | `0` |
| ``` `` `hash_url` `` ``` | Show Tab from URL #ID | `false` |
| ``` `` `navigation` `` ``` | Navigation List Selector | ````` ```` ``` `` `.tabs-navigation` `` ``` ```` ````` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>
