---
title: "List Components"
date: 2025-01-04
---

## List Components

Documentation and examples on how to build lists and groups components from CSS Utilities.

## Default Lists

All lists—`<ul>`, `<ol>`, and `<dl>`—have their `margin-top` removed and a `margin-bottom: 1rem`. Nested lists have no `margin-bottom`. We’ve also reset the `padding-left` on `<ul>` and `<ol>` elements.

```
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col mb-20">
        <ul>
            <li>All lists have their top margin removed</li>
            <li>And their bottom margin normalized</li>
            <li>Nested lists have no bottom margin
                <ul>
                    <li>This way they have a more even appearance</li>
                    <li>Particularly when followed by more list items</li>
                </ul>
            </li>
            <li>The left padding has also been reset</li>
        </ul>
    </div>
    <!-- Column -->
    <div class="col mb-20">
        <ol>
            <li>All lists have their top margin removed</li>
            <li>And their bottom margin normalized</li>
            <li>Nested lists have no bottom margin
                <ul>
                    <li>This way they have a more even appearance</li>
                    <li>Particularly when followed by more list items</li>
                </ul>
            </li>
            <li>The left padding has also been reset</li>
        </ol>
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->
```

## Lists With Icons

you can reset any default list with .reset-list class name then you can use font-icons classes or images/svg icons in your list items to change how it looks.

```
<ul class="reset-list">
    <li class="far fa-check-circle tx-icon">All lists have their top margin removed</li>
    <li class="far fa-star tx-icon">And their bottom margin normalized</li>
    <li class="far fa-times-circle tx-icon">The left padding has also been reset</li>
    <li class="far fa-user tx-icon">Custom icon Lists are Easly Made</li>
</ul>
```

## List Card

in the example below we are using the CSS Utilities to create a card like list.

```
<!-- List w/ icons -->
<ul class="reset-list fs-14 radius-md bg-white border-1 border-solid border-gray-light">
    <li class="pdy-10 pdx-20 divider-b far fa-check-circle tx-icon">All lists have their top margin removed</li>
    <li class="pdy-10 pdx-20 divider-b fas fa-star tx-icon medium-weight">And their bottom margin normalized</li>
    <li class="pdy-10 pdx-20 divider-b far fa-times-circle tx-icon bg-primary color-white">The left padding has also been reset</li>
    <li class="pdy-10 pdx-20 far fa-user tx-icon">Custom icon Lists are Easly Made</li>
</ul>
<!-- // List w/ icons -->

<!-- Card List -->
<ul class="reset-list fs-14 radius-md bg-white border-1 border-solid border-gray-light">
    <li class="pdy-10 pdx-20 divider-b bg-primary color-white">All lists have their top margin removed</li>
    <li class="pdy-10 pdx-20 divider-b">And their bottom margin normalized</li>
    <li class="pdy-10 pdx-20 divider-b strong-weight">The left padding has also been reset</li>
    <li class="pdy-10 pdx-20">Custom icon Lists are Easly Made</li>
</ul>
<!-- // Card List -->
```

## List With Images

in the example below we are using the CSS Utilities to create a card like list.

```
<ul class="reset-list fs-14 radius-md bg-white border-1 border-solid border-gray-light w-max-260">
    <li class="pdy-10 pdx-15 divider-b">
        <img src="https://via.placeholder.com/32x32" alt="" class="radius-circle me-10">
        Abdullah Ramadan
    </li>
    <li class="pdy-10 pdx-15 divider-b">
        <img src="https://via.placeholder.com/32x32" alt="" class="radius-circle me-10">
        Alex Mostapha
    </li>
    <li class="pdy-10 pdx-15">
        <img src="https://via.placeholder.com/32x32" alt="" class="radius-circle me-10">
        Mohammed Abdullah
    </li>
</ul>
```
