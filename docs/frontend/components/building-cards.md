# Building Cards

## Overview

The Phenix Design System provides a flexible approach to building card components using CSS utilities. Rather than providing predefined card classes, Phenix allows you to construct cards by combining utility classes for spacing, colors, borders, and more.

## Standard Card

Create a basic card with an image, title, description, and link:

```html
<!-- Card with Image on Top -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-1">
  <!-- Image -->
  <img src="image.jpg" alt="Card image" class="radius-md radius-top w-fluid">
  <!-- Content -->
  <div class="pdx-25 pdy-15 fs-15">
    <h4 class="fs-17 weight-medium">Card Title</h4>
    <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="display-block tx-align-end">Learn More</a>
  </div>
</div>
```

### Card with Button

Add a button to your card for a clear call to action:

```html
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-1">
  <!-- Image -->
  <img src="image.jpg" alt="Card image" class="radius-md radius-top w-fluid">
  <!-- Content -->
  <div class="pdx-25 pdy-15 fs-15">
    <h4 class="fs-17 weight-medium">Card Title</h4>
    <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn primary small fluid radius-sm">Go Somewhere</a>
  </div>
</div>
```

### Card with Image on Bottom

Place the image at the bottom of the card for a different layout:

```html
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-1">
  <!-- Content -->
  <div class="pdx-25 pdy-15 fs-15">
    <h4 class="fs-17 weight-medium">Card Title</h4>
    <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn primary small radius-sm">Go Somewhere</a>
  </div>
  <!-- Image -->
  <img src="image.jpg" alt="Card image" class="radius-md radius-bottom w-fluid">
</div>
```

## Card with Header

Create a card with a distinct header section:

```html
<div class="radius-md bg-white fs-15 mb-30 border-1 border-solid border-alpha-10 bx-shadow-dp-1">
  <!-- Header -->
  <h4 class="fs-16 weight-medium pdy-10 pdx-25 bg-alpha-05 divider-b mb-0 radius-md radius-top">Card Title</h4>
  <!-- Content -->
  <div class="pdx-25 pdy-15">
    <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="inline-block pdy-5">Learn More</a>
  </div>
</div>
```

### Card with Header and Button Group

Add multiple actions to your card with a button group:

```html
<div class="radius-md bg-white fs-15 mb-30 border-1 border-solid border-alpha-10 bx-shadow-dp-1">
  <!-- Header -->
  <h4 class="fs-16 weight-medium pdy-10 pdx-25 bg-alpha-05 divider-b mb-0 radius-md radius-top">Card Title</h4>
  <!-- Content -->
  <div class="pdx-25 pdy-15">
    <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <!-- Button Group -->
    <div class="flexbox align-end-x">
      <a href="#" class="inline-block pd-5 me-10 fs-14">Learn More</a>
      <a href="#" class="btn primary tiny radius-sm">Go Somewhere</a>
    </div>
  </div>
</div>
```

### Colored Card

Apply background colors to create themed cards:

```html
<div class="radius-md bg-primary color-white fs-15 mb-30 bx-shadow-dp-1">
  <!-- Header -->
  <h4 class="fs-16 weight-medium pdy-10 pdx-25 bg-alpha-05 divider-b mb-0 color-white radius-md radius-top">Card Title</h4>
  <!-- Content -->
  <div class="pdx-25 pdy-15">
    <p class="mb-10">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <!-- Button Group -->
    <div class="flexbox align-end-x">
      <a href="#" class="inline-block pd-5 me-10 fs-14 color-white">Learn More</a>
      <a href="#" class="btn dark tiny radius-sm">Go Somewhere</a>
    </div>
  </div>
</div>
```

## Horizontal Card

Create a horizontal card layout using flexbox utilities:

```html
<div class="radius-md overflow-hidden bg-white mb-30 w-max-480 bx-shadow-dp-1">
  <!-- Flexbox Container -->
  <div class="flexbox">
    <!-- Image -->
    <img src="image.jpg" alt="Card image" class="col-12 col-md-4 radius-md radius-start">
    <!-- Content -->
    <div class="pdx-25 pdy-15 fs-15 col-12 col-md-8">
      <h4 class="fs-17 weight-medium">Card Title</h4>
      <p class="mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>
```

## Advanced Card Layouts

### Card with Icon

Add an icon to your card for better visual cues:

```html
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
</div>
```

### Card with Footer

Add a footer section to your card:

```html
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-1">
  <!-- Content -->
  <div class="pdx-25 pdy-15 fs-15">
    <h4 class="fs-17 weight-medium">Card Title</h4>
    <p class="mb-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <!-- Footer -->
  <div class="pdx-25 pdy-10 divider-t bg-alpha-05 flexbox align-between">
    <span class="fs-13 color-gray">Last updated 3 mins ago</span>
    <a href="#" class="btn primary tiny radius-sm">Details</a>
  </div>
</div>
```

### Card with Overlay Text

Create a card with text overlaying an image:

```html
<div class="position-rv radius-md mb-30 w-max-320 overflow-hidden bx-shadow-dp-1">
  <!-- Background Image -->
  <img src="image.jpg" alt="Card image" class="w-fluid">
  <!-- Overlay -->
  <div class="position-ab pos-bottom-0 pos-start-0 w-fluid bg-gradient-dark-bottom pd-20 color-white">
    <h4 class="fs-17 weight-medium">Card Title</h4>
    <p class="mb-0 fs-14">Some quick example text to build on the card title.</p>
  </div>
</div>
```

## Styling Options

### Border Styles

Add borders to your cards for different visual effects:

```html
<!-- Card with Border -->
<div class="bg-white radius-md mb-30 w-max-320 border-1 border-solid border-alpha-10">
  <!-- Content here -->
</div>

<!-- Card with Accent Border -->
<div class="bg-white radius-md mb-30 w-max-320 border-1 border-solid border-alpha-10 border-start-5 border-start-primary">
  <!-- Content here -->
</div>
```

### Shadow Variations

Apply different shadow depths to your cards:

```html
<!-- Card with Light Shadow -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-1">
  <!-- Content here -->
</div>

<!-- Card with Medium Shadow -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-2">
  <!-- Content here -->
</div>

<!-- Card with Heavy Shadow -->
<div class="bg-white radius-md mb-30 w-max-320 bx-shadow-dp-3">
  <!-- Content here -->
</div>
```

## Best Practices

1. **Maintain consistent spacing** within and between cards
2. **Use appropriate width constraints** (e.g., `w-max-320`) to ensure cards don't stretch too wide
3. **Apply proper border radius** for a polished look
4. **Consider responsive behavior** for different screen sizes
5. **Use shadows judiciously** to create visual hierarchy
6. **Ensure sufficient contrast** between text and background colors
