---
title: "Dropdown"
date: 2025-01-04
---

## Phenix Dropdown

learn how to build drop-downs buttons with phenix `dropdown()` function, to create amazing dropdown buttons components.

## Dropdown Overview

the `.dropdown(options);` function of Phenix query is the best way to build any dropdown buttons it holds the basic simple functionality to show/hide menu or box when click or hover on button toggle

to apply and build a dropdown button you need to assign a main wrapper for the button toggle and its dropdown target like the markup below that is a markup for basic install with no style at all,

and after you build your markup you will need to activate the js plugin on it with `Phenix('.px-dropdown').dropdown(options);` in the code below you will find an example for the plugin and its options

**!important** you need only one type of options data-attributes or js options no need to write both

[HTML](#tab-1)

[Javascript](#tab-2)

```
<!-- Dropdown Wrapper -->
<div class="px-dropdown" data-toggle=".px-toggle" data-target=".px-dropdown-list" data-effect="fade">
    <!-- Toggle Button -->
    <button class="px-toggle"></button>
    <!-- Dropdown Target -->
    <ul class="px-dropdown-list">
        <li>...</li>
    </ul>
    <!-- // Dropdown Target -->
</div>
<!-- // Dropdown Wrapper -->
```

```
//====> Dropdown Buttons <====//
Phenix('.px-dropdown').dropdown({
    toggle : ".px-toggle",        //====> Toggle Button Class Name : px-toggle
    target : ".px-dropdown-list", //====> Target to Toggle (add/remove) Active Class
    active : "px-active",         //====> Active Class Name : px-active
    hover  : false,               //====> Support on Hover Show/Hide
    position :  "bottom, start",  //====> Dropdown position [Y => top|bottom, X => start|center|end]
    //====> Show/Hide Toggle Effect [fade, slide]  <====//
    effect:{
        type: "fade",      //====> Effect Type [fade, slide]
        duration : 300,    //====> Animation Speed in Millisecond
        delay : 0,         //====> Animation Delay
        display : "block", //====> CSS Display Property
    },
});
```

## Dropdown Button

in the example below we will build together a dropdown button with phenix [Utilities](http://phenix.localhost/test/category/utilities/), [Buttons](http://phenix.localhost/test/buttons/) and the default initiate of `dropdown();` function, although the class name `.px-dropdown-list` has basic style for simple menu.

[HTML](#tab-3)

[Javascript](#tab-4)

```
<!-- Dropdown Wrapper -->
<div class="px-dropdown mb-15">
    <!-- Toggle Button -->
    <button class="px-toggle btn small primary">
        Dropdown Example <i class="ms-5 fas fa-angle-down"></i>
    </button>
    <!-- Dropdown Target -->
    <ul class="px-dropdown-list reset-list bg-white fs-14 w-min-200">
        <li><a href="#">Dropdown Item No. 01</a></li>
        <li><a href="#">Dropdown Item No. 02</a></li>
        <li><a href="#">Dropdown Item No. 03</a></li>
        <li><a href="#">Dropdown Item No. 04</a></li>
        <li><a href="#">Dropdown Item No. 05</a></li>
    </ul>
    <!-- // Dropdown Target -->
</div>
<!-- // Dropdown Wrapper -->
```

```
//====> Dropdown Buttons <====//
Phenix('.px-dropdown').dropdown();
```

## Hover Dropdown

the hover behavior to show/hide the dropdown only works with phenix css included its better and more effective to use the css instead of js in the mouse hover trigger and you can simply activated by adding `[data-hover]` to the `.px-dropdown` component.

```
<!-- Dropdown Wrapper -->
<div class="px-dropdown mb-15" data-hover>
    <!-- Toggle Button -->
    <button class="px-toggle btn small primary">
        Dropdown Example <i class="ms-5 fas fa-angle-down"></i>
    </button>
    <!-- Dropdown Target -->
    <ul class="px-dropdown-list reset-list bg-white fs-14 w-min-200">
        <li><a href="#">Dropdown Item No. 01</a></li>
        <li><a href="#">Dropdown Item No. 02</a></li>
        <li><a href="#">Dropdown Item No. 03</a></li>
        <li><a href="#">Dropdown Item No. 04</a></li>
        <li><a href="#">Dropdown Item No. 05</a></li>
    </ul>
    <!-- // Dropdown Target -->
</div>
<!-- // Dropdown Wrapper -->
```

## Dropdown Effects

the dropdown with have two show/hide effects `(fade, slide)` and you can assign `"custom"` to the effect attribute or type option and make your own animations using `.px-active` class name for both the dropdown toggle and list, and sense we are using phenix builtin [effects](http://phenix.localhost/test/ui-effects/) functionality we can also assign the same options to the dropdown buttons.

[HTML](#tab-5)

[Javascript](#tab-6)

```
<!-- Dropdown Wrapper -->
<div class="px-dropdown" data-effect="fade" data-duration="500" data-display="flex" data-delay="delay">
    <!-- Toggle Button -->
    <button class="px-toggle"></button>
    <!-- Dropdown Target -->
    <ul class="px-dropdown-list">
        <li>...</li>
    </ul>
    <!-- // Dropdown Target -->
</div>
<!-- // Dropdown Wrapper -->
```

```
//====> Dropdown Example <====//
Phenix('.px-dropdown').dropdown({
    //====> Show/Hide Toggle Effect [fade, slide]  <====//
    effect:{
        type: "slide",      //====> Effect Type [fade, slide]
        duration : 300,    //====> Animation Speed in Millisecond
        delay : 0,         //====> Animation Delay
        display : "flex", //====> CSS Display Property
    },
});
```

## Dropdown Position

phenix dropdown component has a very useful option to change the dropdown target position and it take a string array `"Y, X"` to identify the position in Y vertically and X horizontally the Y takes one of tow values `"top"` or `"bottom"` and the X takes one of three position `"start"` or `"center"` or `"end"` you can see the examples below for live demo.

[HTML](#tab-5)

[Javascript](#tab-6)

```
<!-- Dropdown Wrapper -->
<div class="px-dropdown" data-position="bottom, end">
    <!-- Toggle Button -->
    <button class="px-toggle btn small secondary">
        Bottom, End <i class="ms-5 fas fa-plus fs-12"></i>
    </button>
    <!-- Dropdown Target -->
    <ul class="px-dropdown-list reset-list bg-white fs-14 w-min-200">
        <li><a href="#">Dropdown Item No. 01</a></li>
        <li><a href="#">Dropdown Item No. 02</a></li>
        <li><a href="#">Dropdown Item No. 03</a></li>
        <li><a href="#">Dropdown Item No. 04</a></li>
        <li><a href="#">Dropdown Item No. 05</a></li>
    </ul>
    <!-- // Dropdown Target -->
</div>
<!-- // Dropdown Wrapper -->
```

```
//====> Dropdown Example <====//
Phenix('.px-dropdown').dropdown({
    //====> Dropdown position [Y => top || bottom, X => start || center || end]
    position :  "bottom, end",
});
```

## Options Table

in the table below you will find the javascript options for the `dropdown()` function of phenix.

<figure>

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| `target` | Target to Toggle Show/Hide (add/remove) Class | `.px-dropdown-list` | selector |
| `toggle` | Toggle Button Class Name : px-toggle | `.px-toggle` | selector |
| `active` | Active Class Name : px-active | `px-active` | string |
| `exclude` | _Exclude from on Blank Click only `[CSS :not()... Selector]`_ | `any-links` | selectors |
| `position` | the position of the target \[top or bottom, start or end\] | `bottom, start` | string |
| `` `effect` `` | Effect Options | `none` | object |
| `type` | Effect Type \[fade, slide\] | `` `none` `` | string |
| `duration` | Animation Speed in Millisecond | `300` | number |
| `delay` | Animation Delay in Millisecond | `0` | number |
| `display` | CSS Display Property | `block` | string |

<figcaption>

Drop-down Plugin Options Table.

</figcaption>

</figure>
