---
title: "Containers"
date: 2025-01-04
---

## Responsive Containers

Containers are a fundamental building block of Phenix Design System that contain, pad, and align your content within a given device or viewport max-width size.

## How they work

Containers are the most basic layout element in Phenix and are required when using our default grid system. Containers are used to contain, pad, and (sometimes) center the content within them. While containers _can_ be nested, most layouts do not require a nested container,

**Phenix comes in three different containers:**

- `.container`, which sets a `max-width` as a standard responsive grid

- `.container-fluid`, which is `width: 100%` at all breakpoints

- `.container-{breakpoint}`, which is `width: 100%` until the specified breakpoint

The table below illustrates how each container’s max-width compares to the original .container and .container-fluid across each breakpoint.

| Containers | xSmall | Small | Medium | Large | xLarge |
| --- | --- | --- | --- | --- | --- |
| `.container` | 100% | 100% | 100% | 1200px | 1200px |
| `.container-xs` | 360px | 480px | 480px | 480px | 480px |
| `.container-sm` | 100% | 576px | 640px | 640px | 640px |
| `.container-md` | 100% | 100% | 768px | 1024px | 1024px |
| `.container-xl` | 100% | 100% | 100% | 100% | 1400px |
| `.container-fluid` | 100% | 100% | 100% | 100% | 100% |

## Default Container

phenix default .container class is a responsive, fixed-width standard grid container, meaning its max-width has 100% until the viewport changes to the standard design grid size of 1200px with auto margin-inline and a relative position and white space padding-inline by default,

```
<div class="container">
    <!-- Content here -->
</div>
```

## Responsive containers

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply max widths for each of the higher breakpoints. For example, .container-xs is 100% wide to start until the xs breakpoint is reached, where it will scale up with sm, md, and xl.

```
<!-- Extra Small Container -->
<div class="container-xs">maxed width from zero</div>

<!-- Small Container -->
<div class="container-sm">100% wide until small breakpoint</div>

<!-- Medium Container -->
<div class="container-md">100% wide until medium breakpoint</div>

<!-- Extra Large Container -->
<div class="container-xl">100% wide until extra large breakpoint</div>
```

## Fluid Container

Use .container-fluid for a full-width container, spanning the entire width of the viewport.

```
<div class="container-fluid">
    <!-- Content here -->
</div>
```
