# Building Cards

## Overview

The Phenix Design System provides a flexible approach to building card components using CSS utilities. Rather than providing predefined card classes, Phenix allows you to construct cards by combining utility classes for spacing, colors, borders, and more.

In this documentation, we will use Phenix CSS utilities to build various card components that can be quickly implemented and extended as needed. No preset or opt-in classes are required to style these cards - just combine the utilities to create the design you want.

## Standard Card

In this example, we'll build a simple card that holds an `image`, `title`, `description`, and `link` for more details.

### Example

```html
<!-- Card Example -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-1">
    <!-- Image -->
    <img src="https://placehold.co/375x275" alt="" class="radius-md radius-top w-fluid">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 weight-medium">Card Title Goes Here</h4>
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="display-block tx-align-end">Learn More</a>
    </div>
    <!-- // Content -->
</div>
<!-- // Card Example -->
```

### Card with Button

This example shows a card with a button that serves as a clear call to action.

### Example

```html
<!-- Card Example -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-1">
    <!-- Image -->
    <img src="https://placehold.co/375x275" alt="" class="radius-md radius-top w-fluid">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 weight-medium">Card Title Goes Here</h4>
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn primary small fluid radius-sm">Go Somewhere</a>
    </div>
    <!-- // Content -->
</div>
<!-- // Card Example -->
```

### Card with Image on Bottom

This example demonstrates a card with the image placed at the bottom, creating a different visual layout.

### Example

```html
<!-- Card Example -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-1">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 weight-medium">Card Title Goes Here</h4>
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn primary small radius-sm">Go Somewhere</a>
    </div>
    <!-- // Content -->
    <!-- Image -->
    <img src="https://placehold.co/375x275" alt="" class="radius-md radius-bottom w-fluid">
</div>
<!-- // Card Example -->
```

## Card With Header

In this example, we'll build a simple card that holds a `title`, `description`, and `link` for more details, with a distinct header section.

### Example

```html
<!-- Card Example -->
<div class="radius-md bg-white fs-15 mb-30 border-1 border-solid border-alpha-10 bx-shadow-dp-1">
    <!-- Head -->
    <h4 class="fs-16 weight-medium pdy-10 pdx-25 bg-alpha-05 divider-b mb-0 radius-md radius-top">Card Title Goes Here</h4>
    <!-- Content -->
    <div class="pdx-25 pdy-15">
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="inline-block pdy-5">Learn More</a>
    </div>
    <!-- // Content -->
</div>
<!-- // Card Example -->
```

### Card with Header and Button Group

This example shows a card with a header and multiple action buttons grouped together.

### Example

```html
<!-- Card Example -->
<div class="radius-md bg-white fs-15 mb-30 border-1 border-solid border-alpha-10 bx-shadow-dp-1">
    <!-- Head -->
    <h4 class="fs-16 weight-medium pdy-10 pdx-25 bg-alpha-05 divider-b mb-0 radius-md radius-top">Card Title Goes Here</h4>
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

### Colored Card

This example demonstrates a card with a colored background, creating a themed appearance.

### Example

```html
<!-- Card Example -->
<div class="radius-md bg-primary color-white fs-15 mb-30 bx-shadow-dp-1">
    <!-- Head -->
    <h4 class="fs-16 weight-medium pdy-10 pdx-25 bg-alpha-05 divider-b mb-0 color-white radius-md radius-top">Card Title Goes Here</h4>
    <!-- Content -->
    <div class="pdx-25 pdy-15">
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <!-- Group -->
        <div class="flexbox align-end-x">
            <a href="#" class="inline-block pd-5 me-10 fs-14 color-white">Learn More</a>
            <a href="#" class="btn dark tiny radius-sm">Go Somewhere</a>
        </div>
        <!-- // Group -->
    </div>
    <!-- // Content -->
</div>
<!-- // Card Example -->
```

## Horizontal Card

In this example, we'll build a simple card that holds a `title`, `description`, and `image` stacked horizontally with flexbox utilities.

### Example

```html
<!-- Card Example -->
<div class="radius-md overflow-hidden bg-white mb-30 w-max-480 bx-shadow-dp-1">
    <!-- Grid -->
    <div class="flexbox">
        <!-- Image -->
        <img src="https://placehold.co/375x275" alt="" class="col-12 col-md-4 radius-md radius-start">
        <!-- Content -->
        <div class="pdx-25 pdy-15 fs-15 col-12 col-md-8">
            <h4 class="fs-17 weight-medium">Card Title Goes Here</h4>
            <p class="mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <!-- // Content -->
    </div>
    <!-- // Grid -->
</div>
<!-- // Card Example -->
```

## Advanced Card Layouts

### Card with Icon

This example shows a card with an icon in the header for better visual cues.

### Example

```html
<!-- Card Example -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-1">
    <!-- Icon Header -->
    <div class="pdx-25 pdt-25 pdb-15 flexbox align-center-y">
        <div class="icon-wrapper bg-primary-alpha-10 color-primary radius-circle pd-10 me-10">
            <i class="far fa-star fs-20"></i>
        </div>
        <h4 class="fs-17 weight-medium mb-0">Card with Icon</h4>
    </div>
    <!-- Content -->
    <div class="pdx-25 pdb-15 fs-15">
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn primary small radius-sm">Go Somewhere</a>
    </div>
    <!-- // Content -->
</div>
<!-- // Card Example -->
```

### Card with Footer

This example demonstrates a card with a footer section containing additional information and actions.

### Example

```html
<!-- Card Example -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-1">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 weight-medium">Card Title Goes Here</h4>
        <p class="mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <!-- Footer -->
    <div class="pdx-25 pdy-10 divider-t bg-alpha-05 flexbox align-between">
        <span class="fs-13 color-gray">Last updated 3 mins ago</span>
        <a href="#" class="btn primary tiny radius-sm">Details</a>
    </div>
    <!-- // Footer -->
</div>
<!-- // Card Example -->
```

### Card with Overlay Text

This example shows a card with text overlaying an image, creating a captivating visual effect.

### Example

```html
<!-- Card Example -->
<div class="position-rv radius-md mb-30 w-max-320 overflow-hidden bx-shadow-dp-1">
    <!-- Background Image -->
    <img src="https://placehold.co/375x275" alt="" class="w-fluid">
    <!-- Overlay -->
    <div class="position-ab pos-bottom-0 pos-start-0 w-fluid bg-gradient-dark-bottom pd-20 color-white">
        <h4 class="fs-17 weight-medium">Card Title Goes Here</h4>
        <p class="mb-0 fs-14">Some quick example text to build on the card title.</p>
    </div>
    <!-- // Overlay -->
</div>
<!-- // Card Example -->
```

## Styling Options

### Border Styles

Add borders to your cards for different visual effects:

### Example

```html
<!-- Card with Border -->
<div class="bg-white radius-md mb-30 w-max-320 border-1 border-solid border-alpha-10">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 weight-medium">Card with Border</h4>
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <!-- // Content -->
</div>
<!-- // Card with Border -->

<!-- Card with Accent Border -->
<div class="bg-white radius-md mb-30 w-max-320 border-1 border-solid border-alpha-10 border-start-5 border-start-primary">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 weight-medium">Card with Accent</h4>
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <!-- // Content -->
</div>
<!-- // Card with Accent Border -->
```

### Shadow Variations

Apply different shadow depths to your cards for varying levels of elevation:

### Example

```html
<!-- Card with Light Shadow -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-1">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 weight-medium">Light Shadow</h4>
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <!-- // Content -->
</div>
<!-- // Card with Light Shadow -->

<!-- Card with Medium Shadow -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-2">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 weight-medium">Medium Shadow</h4>
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <!-- // Content -->
</div>
<!-- // Card with Medium Shadow -->

<!-- Card with Heavy Shadow -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-3">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15">
        <h4 class="fs-17 weight-medium">Heavy Shadow</h4>
        <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <!-- // Content -->
</div>
<!-- // Card with Heavy Shadow -->
```

## Utility Classes Reference

<figure>

| Utility Class | Description |
|--------------|-------------|
| `.bg-white` | Sets a white background color |
| `.radius-md` | Applies medium border radius |
| `.radius-top` | Applies border radius to top corners only |
| `.radius-bottom` | Applies border radius to bottom corners only |
| `.mb-30` | Sets bottom margin to 30px |
| `.w-max-320` | Sets maximum width to 320px |
| `.w-fluid` | Makes an element fluid width (100%) |
| `.pdx-25` | Sets horizontal padding to 25px |
| `.pdy-15` | Sets vertical padding to 15px |
| `.fs-15` | Sets font size to 15px |
| `.fs-17` | Sets font size to 17px |
| `.weight-medium` | Sets font weight to medium |
| `.mb-10` | Sets bottom margin to 10px |
| `.display-block` | Sets display to block |
| `.tx-align-end` | Aligns text to the end |
| `.bx-shadow-dp-1` | Applies light shadow (depth 1) |
| `.bx-shadow-dp-2` | Applies medium shadow (depth 2) |
| `.bx-shadow-dp-3` | Applies heavy shadow (depth 3) |
| `.border-1` | Sets border width to 1px |
| `.border-solid` | Sets border style to solid |
| `.border-alpha-10` | Sets border color to 10% alpha |
| `.border-start-5` | Sets left border width to 5px |
| `.border-start-primary` | Sets left border color to primary color |
| `.flexbox` | Creates a flexbox container |
| `.align-center-y` | Vertically centers flex items |
| `.align-between` | Distributes flex items with space between |
| `.position-rv` | Sets position to relative |
| `.position-ab` | Sets position to absolute |
| `.pos-bottom-0` | Sets bottom position to 0 |
| `.pos-start-0` | Sets left position to 0 |
| `.overflow-hidden` | Hides overflow content |

<figcaption>
Common utility classes used for building cards
</figcaption>

</figure>

## Best Practices

1. **Consistent Spacing**: Maintain consistent padding and margins across your cards for a cohesive look.
2. **Responsive Design**: Use responsive utility classes like `col-md-4` to ensure cards display properly on all devices.
3. **Accessibility**: Ensure proper contrast between text and background colors.
4. **Semantic Structure**: Use appropriate heading levels for card titles.
5. **Image Optimization**: Optimize images to reduce load time and improve performance.
6. **Interactive States**: Add hover and focus states for interactive elements within cards.
7. **Visual Hierarchy**: Use size, color, and spacing to establish a clear visual hierarchy.
8. **Content Balance**: Maintain a good balance between text and visual elements.
