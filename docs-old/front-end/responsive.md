---
title: "Responsive"
date: 2025-01-04
---

## Responsive Breakpoints

Breakpoints are customizable widths that determine how your responsive layout and components behave across device screens or viewport sizes in Phenix Design System.

## Core concepts

- **Breakpoints are the building blocks of responsive design.** Use them to control when your layout can be adapted to a particular viewport or device size.

- **Use media queries to architect your CSS by breakpoint.** Media queries are a feature of CSS that allows you to conditionally apply styles based on a set of browser and operating system parameters. We most commonly use `min-width` in our media queries.

- **Mobile-first, responsive design is the goal.** Phenix’s CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.

## Available breakpoints

Phenix includes ten default breakpoints, for building responsive layouts and components. two breakpoints for each set of screen size’s start point of the set and the end point of set and These breakpoints can be customized from Sass files

| Breakpoint | Class infix | Start point | Endpoint |
| --- | --- | --- | --- |
| xSmall | xs | 0px | 480px |
| Small | sm | 576px | 700px |
| Medium | md | 768px | 1100px |
| Large | lg | 1200px | 1366px |
| xLarge | xl | 1400px | 2560px |

## Extra Small Screens

```
/*====> Extra Small [0 => infinite] Screens Media Query <====*/
@include xSmall() {
    /*===> Set CSS for Extra Small Screens and Up //*/
};

/*====> Extra Small [480 => 0]px Screens Media Query <====*/
@include xSmall('down') {
    /*===> Set CSS for Extra Small Screens and Down //*/
};
```

## Small Screens

```
/*====> Small [576 => infinite] Screens Media Query <====*/
@include small() {
    /*===> Set CSS for small screens and Up //*/
};

/*====> Small [700 => 0]px Screens Media Query <====*/
@include small('down') {
    /*===> Set CSS for small screens and Down //*/
};
```

## Medium Screens

```
/*====> Medium [768 => infinite] Screens Media Query <====*/
@include medium() {
    /*===> Set CSS for medium screens and Up //*/
};

/*====> Medium [1100 => 0] Screens Media Query <====*/
@include medium('down') {
    /*===> Set CSS for medium screens and Down //*/
};
```

## Large Screens

```
/*====> Large [1200 => infinite] Screens Media Query <====*/
@include large() {
    /*===> Set CSS for large screens and Up //*/
};

/*====> Large [1366 => 0]px Screens Media Query <====*/
@include large('down') {
    /*===> Set CSS for large screens and Down //*/
};
```

## xLarge Screens

```
/*====> xLarge [1400 => infinite] Screens Media Query <====*/
@include xlarge() {
    /*===> Set CSS for large screens and Up //*/
};

/*====> xLarge [1400 => 0]px Screens Media Query <====*/
@include xlarge('down') {
    /*===> Set CSS for large screens and Down //*/
};
```
