---
title: "Progress"
date: 2025-01-04
---

## Progress

Learn how to build a progress component with any shape you need using the SVG with phenix javascript progress plugin.

## Overview

the progress bar is build with html and css and its shifting shapes with javascript and svg drawing a shape that you can fill with color and the type of the shape you need `circle`, `radial` or `custom-shape`.

## Progress Bar

in the next example you can learn how to build a progress-bar, first we created a HTML `.px-progress` element after that we did run phenix `progress()` plugin on it, and you can use the `data-attributes` options instead of js options for defining your progress `value`, `color`, `size`, `label` and here we are did the default setup of the progress through html and javascript

[HTML](#tab-1)

[Javascript](#tab-2)

```
<!-- Main Label -->
<label class="mb-5 fs-13">Default Progress Bar</label>
<!-- Progress -->
<div class="px-progress fs-12 mb-30" data-value="20"></div>

<!-- Main Label -->
<label class="mb-5 fs-13">Labeled with Value</label>
<!-- Progress -->
<div class="px-progress fs-12 radius-sm mb-30" data-value="50" data-label="value"></div>

<!-- Main Label -->
<label class="mb-5 fs-13">Resized & Custom Label</label>
<!-- Progress -->
<div class="px-progress fs-12 radius-rounded mb-30" data-value="75" data-size="25" data-label="Loading"></div>
<!-- // Progress -->
```

```
//====> Progress <====//
Phenix('.px-progress').progress({
    type: 'bar',    //===> Timer Type [bar, circle, radial]
    color: 'css color', //===> the Progress Color
    value: number,      //===> the Progress value
    label: string,      //===> the progress label
    size:number,        //===> the size of the progress with px
    lazyloading: false, //====> Animate when its visible
});
```

## Lazy-Loading

in the next example you can see the progress start only when the user arrive to it and its visible to him on the screen with the attribute `data-lazy` or `lazyloading` js option.

[HTML](#tab-3)

[Javascript](#tab-4)

```
<!-- Progress -->
<div class="px-progress fs-12 radius-sm mb-30" data-value="40" data-label="value" data-lazy="0"></div>
```

```
//====> Progress <====//
Phenix('.px-progress').progress({lazyloading: true});
```

## Progress Colors

in the example below you can see the progress with different colors set to each of them with `data-color` option and its available as js option to change the color of the progress bar with a valid css color `#hex`, `rgb`, `variables`.

[HTML](#tab-5)

[Javascript](#tab-6)

```
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-6 col-lg-4">
        <!-- Main Label -->
        <label class="mb-5 fs-13">Colored Progress Bar</label>
        <!-- Progress -->
        <div class="px-progress fs-12 mb-30" data-value="20" data-lazy="0" data-color="var(--danger-color)" ></div>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-6 col-lg-4">
        <!-- Main Label -->
        <label class="mb-5 fs-13">Labeled with Value</label>
        <!-- Progress -->
        <div class="px-progress fs-12 radius-sm mb-30" data-value="40" data-label="value" data-color="var(--info-color)" data-lazy="0"></div>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-6 col-lg-4">
        <!-- Main Label -->
        <label class="mb-5 fs-13">Custom Label</label>
        <!-- Progress -->
        <div class="px-progress fs-12 radius-rounded mb-30" data-value="50" data-label="lazy-Loading" data-color="var(--success-color)" data-lazy="0"></div>
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->
```

```
//====> Progress <====//
Phenix('.px-progress').progress({color: "var(--primary-color)"});
```

## Progress Update

in the example below you can learn how to increase and decrease the value of the progress just by running the plugin on the progress you already have without rebuilding the markup or any thing.

[Example 01](#tab-7)

[Example 02](#tab-6)

```
<!--Label -->
<label class="mb-5 fs-13">Labeled with Value</label>
<!-- Progress -->
<div id="progress-controlled" class="px-progress fs-12 radius-sm mb-15" data-value="0" data-size="30" data-label="value"></div>

<!-- Buttons -->
<button class="btn primary tiny radius-sm" id="decrease-progress">Decrease</button>
<button class="btn primary tiny radius-sm" id="increase-progress">Increase</button>

<!-- Progress JS -->
<script defer>
    //======> D.O.M is Ready <=======//
    Phenix(document).ready((event) => {
        //====> Build Progress <====//
        Phenix('.px-progress').progress();

        //====> .Increase. <====//
        Phenix('#increase-progress').on('click', clicked => {
            //===> Current Value <===//
            let progress = document.querySelector('#progress-controlled'),
                current = parseInt(progress.getAttribute('data-value'));
            //===> Increase  the Value <===//
            progress.setAttribute('data-value', current+5);
            //===> Update Progress <===//
            Phenix(progress).progress();
        });

        //====> .Decrease. <====//
        Phenix('#decrease-progress').on('click', clicked => {
            //===> Current Value <===//
            let progress = document.querySelector('#progress-controlled'),
                current = parseInt(progress.getAttribute('data-value'));

            //===> Decrease the Value <===//
            progress.setAttribute('data-value', current-5);

            //===> Update Progress <===//
            Phenix(progress).progress();
        });
    });
</script>
<!-- Progress JS -->
```

```
<!-- Label -->
<label class="mb-5 fs-13">Colorful Progress</label>

<!-- Progress -->
<div id="progress-colorful" class="px-progress fs-12 radius-sm mb-15" data-value="15" data-size="30" data-label="value" data-color="var(--warning-color)"></div>

<!-- Buttons -->
<div class="flexbox align-between align-center">
    <button class="btn primary tiny radius-sm" id="decrease-colorful">Decrease</button>
    <span class="fs-12">increase to change colors</span>
    <button class="btn primary tiny radius-sm" id="increase-colorful">Increase</button>
</div>

<!-- Progress JS -->
<script defer>
    //======> D.O.M is Ready <=======//
    Phenix(document).ready((event) => {
        //====> Build Progress <====//
        Phenix('.px-progress').progress();

        //====> Changes Updater <====//
        let progress_updater = (progress, value) => {
            //===> Convert to Number <===//
            let new_value = parseInt(value);

            //===> Change the Value <===//
            progress.setAttribute('data-value', new_value);

            //===> Change to Red <===//
            if (new_value > 0 && new_value < 20) progress.setAttribute('data-color', 'var(--danger-color)');

            //===> Change to Yellow <===//
            if (new_value > 15 && new_value < 50) progress.setAttribute('data-color', 'var(--warning-color)');

            //===> Change to Blue <===//
            if (new_value > 45 && new_value < 65) progress.setAttribute('data-color', 'var(--primary-color)');

            //===> Change to Purple <===//
            if (new_value > 60 && new_value < 90) progress.setAttribute('data-color', 'var(--info-color)');
            
            //===> Change to Green <===//
            if (new_value > 90) progress.setAttribute('data-color', 'var(--success-color)');

            //===> Change Label When is Complete <===//
            if (new_value == 100) {
                progress.setAttribute('data-label', 'Completed');
            } else {
                progress.setAttribute('data-label', 'value');
            }

            //===> Update Progress <===//
            Phenix(progress).progress();
        }

        //====> .Increase. <====//
        Phenix('#increase-colorful').on('click', clicked => {
            //===> Current Value <===//
            let progress = document.querySelector('#progress-colorful'),
                current = parseInt(progress.getAttribute('data-value')),
                inceased_value = current < 100 ? current+5 : current;

            //===> Update Progress <===//
            progress_updater(progress, inceased_value);
        });

        //====> .Decrease. <====//
        Phenix('#decrease-colorful').on('click', clicked => {
            //===> Current Value <===//
            let progress = document.querySelector('#progress-colorful'),
                current = parseInt(progress.getAttribute('data-value')),
                deceased_value = current > 5 ? current-5 : current;

            //===> Update Progress <===//
            progress_updater(progress, deceased_value);
        });
    });
</script>
<!-- Progress JS -->
```

## Progress Circle

in the next example we will shift the progress bar to a progress lined circle with svg shape using the `data-type="circle"` option and everything else from the `size` ,`colors`, `updating` works just like the bar.

[HTML](#tab-9)

[Javascript](#tab-10)

```
<!-- Elements Group -->
<div class="flexbox mb-20">
    <!-- Progress -->
    <div class="px-progress w-125 me-30" data-type="circle" data-value="35" data-color="var(--danger-color)" data-lazy="0"></div>
    <!-- Progress -->
    <div class="px-progress w-125 me-30 fs-20" data-type="circle" data-value="65" data-label="value" data-lazy="0"></div>
    <!-- Progress -->
    <div class="px-progress w-125 me-30 fs-14" data-type="circle" data-value="85" data-color="var(--info-color)" data-size="2" data-label="Loading" data-lazy="0"></div>
    <!-- Progress -->
    <div class="px-progress w-125 me-30 fs-14 weight-bold" data-type="circle" data-value="100" data-size="3" data-label="Complete" data-lazy="0" data-color="var(--success-color)"></div>
</div>
<!-- // Elements Group -->
```

```
//====> Progress <====//
Phenix('.px-progress').progress({type: 'circle'});
```

## Progress Radial

in the next example we will shift the progress bar to a progress lined circle meter with svg shape using the `data-type="radial"` option and everything else from the `size` ,`colors`, `updating` works just like the bar.

[HTML](#tab-11)

[Javascript](#tab-12)

```
<!-- Elements Group -->
<div class="flexbox">
    <!-- Progress -->
    <div class="px-progress w-125 me-30" data-type="radial" data-value="35" data-color="var(--danger-color)" data-size="4" data-lazy="0"></div>
    <!-- Progress -->
    <div class="px-progress w-125 me-30 fs-20" data-type="radial" data-value="65" data-size="6" data-label="value" data-lazy="0"></div>
    <!-- Progress -->
    <div class="px-progress w-125 me-30 fs-14 color-info" data-type="radial" data-value="85" data-label="Loading" data-lazy="0" data-color="var(--info-color)"></div>
    <!-- Progress -->
    <div class="px-progress w-125 me-30 fs-14 weight-bold color-success" data-type="radial" data-value="100" data-size="13" data-label="Complete" data-color="var(--success-color)" data-lazy="0"></div>
</div>
<!-- // Elements Group -->
```

```
//====> Progress <====//
Phenix('.px-progress').progress({type: 'radial'});
```

## Options Table

in the table below you can learn the options of the progress plugin.

<figure>

| Cheat | Description | Default | Data Type |
| --- | --- | --- | --- |
| `` `type` `` | the type of the progress shape \[`bar`, `circle`, `radial`, `custom`\]. | `bar` | `string` |
| ``` `` `color` `` ``` | array of colors for the progress `background` as `css` valid color or variable | `primary` | `string` |
| ``` `` `value` `` ``` | the value of the progress to fill by percentage. | `0` | ````` ```` ``` `` `number` `` ``` ```` ````` |
| ``` `` `label` `` ``` | the label of the progress after the value label | `none` | ````` ```` ``` `` `string` `` ``` ```` ````` |
| ```````` ``````` `````` ````` ```` ``` `` `size` `` ``` ```` ````` `````` ``````` ```````` | the size of the progress \[height for bar\], stroke for other shapes with px | `16` | ````` ```` ``` `` `string` `` ``` ```` ````` |
| `` `lazyloading` `` | run the progress only when its enter the view-point of user screen. | `false` | ````` ```` ``` `` `boolean` `` ``` ```` ````` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>
