---
title: "Building Cards"
date: 2025-01-04
---

## Cards

Documentation and examples on how to build card components, with our amazing css utilities.

## Overview

in this documentation we will purely use our [css utilities](http://phenix.localhost/test/category/utilities/) to build up simple card components that can be used quickly and extend it as desired so there is no a preset or opt-in classes required to style these cards.

## Standard Card

in this example we will build a simple card that holds an `image`, `title`, `description` and `link` for more details

[Example 01](#tab-1)

[Example 02](#tab-2)

[Example 03](#tab-3)

```
<!-- Card Example -->
<div class="card-example bg-white 10 mb-30 w-max-320 radius-md">
    <!-- Image -->
    <img src="https://placehold.co/375x275" alt="" class="radius-md radius-top">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 strong-weight">Card Title Goes Here</h4>
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="display-block tx-align-end">Learn More</a>
    </div>
    <!-- // Content -->
</div>
<!-- // Card Example -->
```

```
<!-- Card Example -->
<div class="card-example radius-md bg-white 10 mb-30 w-max-320">
    <!-- Image -->
    <img src="https://placehold.co/375x275" alt="" class="radius-md radius-top">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 strong-weight">Card Title Goes Here</h4>
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn primary small fluid radius-sm">Go Somewhere</a>
    </div>
    <!-- // Content -->
</div>
<!-- // Card Example -->
```

```
<!-- Card Example -->
<div class="card-example radius-md bg-white 10 mb-30 w-max-320">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 strong-weight">Card Title Goes Here</h4>
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn primary small radius-sm">Go Somewhere</a>
    </div>
    <!-- Image -->
    <img src="https://placehold.co/375x275" alt="" class="radius-md radius-bottom">
</div>
<!-- // Card Example -->
```

## Card With Head

in this example we will build a simple card that holds a `title`, `description` and `button` for more details

[Example 01](#tab-4)

[Example 02](#tab-5)

[Example 03](#tab-6)

```
<!-- Card Example -->
<div class="card-example radius-md bg-white fs-15 10 mb-30 border-1 border-solid border-gray-light">
    <!-- Head -->
    <h4 class="fs-16 strong-weight pdy-10 pdx-25 bg-alpha-05 divider-b mb-0 radius-md radius-top">Card Title Goes Here</h4>
    <!-- Content -->
    <div class="pdx-25 pdy-15">
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="inline-block pdy-5">Learn More</a>
    </div>
    <!-- // Content -->
</div>
<!-- // Card Example -->
```

```
<!-- Card Example -->
<div class="card-example radius-md bg-white fs-15 10 mb-30 border-1 border-solid border-gray-light">
    <!-- Head -->
    <h4 class="fs-16 strong-weight pdy-10 pdx-25 bg-alpha-05 divider-b mb-0 radius-md radius-top">Card Title Goes Here</h4>
    <!-- Content -->
    <div class="pdx-25 pdy-15">
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <!-- Group -->
        <div class="flexbox align-end-x">
            <a href="#" class="inline-block pd-5 me-10 fs-14">Learn More</a>
            <a href="#" class="btn primary tiny radius-sm">Go Somewhere</a>
        </div>
        <!-- // Group -->
    </div>
    <!-- // Content -->
</div>
<!-- // Card Example -->
```

```
<!-- Card Example -->
<div class="card-example radius-md bg-primary color-white fs-15 10 mb-30 border-1 border-solid border-gray-light">
    <!-- Head -->
    <h4 class="fs-16 strong-weight pdy-10 pdx-25 bg-alpha-05 divider-b mb-0 color-white radius-md radius-top">Card Title Goes Here</h4>
    <!-- Content -->
    <div class="pdx-25 pdy-15">
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <!-- Group -->
        <div class="flexbox align-end-x">
            <a href="#" class="inline-block pd-5 me-10 fs-14  color-white">Learn More</a>
            <a href="#" class="btn dark tiny radius-sm">Go Somewhere</a>
        </div>
        <!-- // Group -->
    </div>
    <!-- // Content -->
</div>
<!-- // Card Example -->
```

## Horizontal Card

in this example we will build a simple card that holds a `title`, `description` and `image` stacked horizontally with flexbox utilities.

```
<!-- Card Example -->
<div class="card-example radius-md overflow-hidden bg-white 10 mb-30 w-max-480">
    <!-- Grid -->
    <div class="flexbox">
        <!-- Image -->
        <img src="https://placehold.co/375x275" alt="" class="col-12 col-md-4 radius-md radius-start">
        <!-- Content -->
        <div class="pdx-25 pdy-15 fs-15 col-12 col-md-8">
            <h4 class="fs-17 strong-weight">Card Title Goes Here</h4>
            <p class="mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <!-- // Content -->
    </div>
    <!-- // Grid -->
</div>
<!-- // Card Example -->
```
