# Accordion

## Overview

The Accordion component in the Phenix Design System provides a way to create collapsible content sections that can be expanded or collapsed to show or hide information. It's built using the Collapse JavaScript functionality and can be customized with utility classes.

## Basic Usage

Create a basic accordion using the `.px-accordion` class and the `.accordion-btn` and `.accordion-content` classes for the toggle buttons and content panels:

```html
<!-- Basic Accordion -->
<div class="px-accordion">
  <!-- Accordion Item -->
  <div class="accordion-item mb-15 bg-white border-1 border-solid border-alpha-10 radius-sm">
    <!-- Heading -->
    <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
      Accordion Item 1
      <i class="far fa-plus lineheight-100 color-gray"></i>
    </h4>
    <!-- Content -->
    <div class="accordion-content pd-20 hidden divider-t fs-14">
      This is the content for accordion item 1. It's hidden by default and will be shown when the heading is clicked.
    </div>
  </div>
  
  <!-- Accordion Item -->
  <div class="accordion-item mb-15 bg-white border-1 border-solid border-alpha-10 radius-sm">
    <!-- Heading -->
    <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
      Accordion Item 2
      <i class="far fa-plus lineheight-100 color-gray"></i>
    </h4>
    <!-- Content -->
    <div class="accordion-content pd-20 hidden divider-t fs-14">
      This is the content for accordion item 2. It's hidden by default and will be shown when the heading is clicked.
    </div>
  </div>
</div>

<!-- Initialize with JavaScript -->
<script>
  Phenix('.accordion-btn').collapse({
    target: '.accordion-content',
    related: true,
    parent: '.px-accordion'
  });
</script>
```

## Accordion Styles

### Standard Accordion

The standard accordion has a clean design with a plus/minus icon toggle:

```html
<div class="px-accordion">
  <div class="accordion-item mb-15 bg-white border-1 border-solid border-alpha-10 radius-sm">
    <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
      Accordion Item
      <i class="far fa-plus lineheight-100 color-gray"></i>
    </h4>
    <div class="accordion-content pd-20 hidden divider-t fs-14">
      Accordion content goes here.
    </div>
  </div>
</div>
```

### Accordion with Arrow Icons

Use arrow icons instead of plus/minus for a different visual style:

```html
<div class="px-accordion">
  <div class="accordion-item mb-15 bg-white border-1 border-solid border-alpha-10 radius-sm">
    <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
      Accordion Item
      <i class="far fa-angle-down lineheight-100 color-gray"></i>
    </h4>
    <div class="accordion-content pd-20 hidden divider-t fs-14">
      Accordion content goes here.
    </div>
  </div>
</div>
```

### Borderless Accordion

Create a cleaner look by removing borders and using only bottom dividers:

```html
<div class="px-accordion">
  <div class="accordion-item mb-15">
    <h4 class="fs-15 pdx-10 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer divider-b">
      Accordion Item
      <i class="far fa-plus lineheight-100 color-gray"></i>
    </h4>
    <div class="accordion-content pd-10 hidden fs-14">
      Accordion content goes here.
    </div>
  </div>
</div>
```

## Customization

### Custom Styling

Customize the appearance of accordion items using utility classes:

```html
<!-- Custom Styled Accordion -->
<div class="px-accordion">
  <div class="accordion-item mb-15 bx-shadow-dp-1 radius-md overflow-hidden">
    <h4 class="fs-15 pdx-20 pdy-15 mb-0 accordion-btn flexbox align-between align-center-y bg-primary color-white transtion-fast mouse-pointer">
      Custom Styled Accordion
      <i class="far fa-plus lineheight-100"></i>
    </h4>
    <div class="accordion-content pd-20 hidden fs-14 bg-white">
      This accordion has custom styling with shadows, colors, and rounded corners.
    </div>
  </div>
</div>
```

### Custom CSS

Add custom CSS to style the active state of accordion buttons:

```css
/* Change headline color when activated */
.px-accordion .accordion-btn.px-collapse-active {
  color: var(--primary-color);
  background-color: var(--primary-offwhite);
}

/* Style the icon when activated */
.px-accordion .accordion-btn.px-collapse-active i {
  transform: rotate(45deg);
}
```

## Advanced Usage

### Pre-Activated Panel

Show an accordion panel by default when the page loads:

```html
<div class="px-accordion" id="default-open-accordion">
  <!-- Accordion items here -->
</div>

<script>
  // Initialize accordion
  Phenix('.accordion-btn').collapse({
    target: '.accordion-content',
    related: true,
    parent: '.px-accordion'
  });
  
  // Activate the first item by default
  Phenix('#default-open-accordion .accordion-item:first-of-type .accordion-content')
    .removeClass('hidden')
    .addClass('px-collapse-active');
  Phenix('#default-open-accordion .accordion-item:first-of-type .accordion-btn')
    .addClass('px-collapse-active');
</script>
```

### Nested Accordions

Create nested accordions for hierarchical content:

```html
<div class="px-accordion">
  <div class="accordion-item mb-15 bg-white border-1 border-solid border-alpha-10 radius-sm">
    <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
      Parent Accordion
      <i class="far fa-plus lineheight-100 color-gray"></i>
    </h4>
    <div class="accordion-content pd-20 hidden divider-t fs-14">
      <p class="mb-15">Parent accordion content.</p>
      
      <!-- Nested Accordion -->
      <div class="px-accordion nested-accordion">
        <div class="accordion-item mb-10 bg-alpha-05 border-1 border-solid border-alpha-10 radius-sm">
          <h5 class="fs-14 pdx-15 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer">
            Nested Item
            <i class="far fa-plus lineheight-100 color-gray"></i>
          </h5>
          <div class="accordion-content pd-15 hidden divider-t fs-13">
            Nested accordion content.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  // Initialize both accordions
  Phenix('.accordion-btn').collapse({
    target: '.accordion-content',
    related: true,
    parent: function(btn) {
      return Phenix(btn).ancestor('.px-accordion');
    }
  });
</script>
```

## JavaScript API

The Accordion component is powered by the Collapse JavaScript functionality:

```javascript
Phenix('.accordion-btn').collapse({
  target: '.accordion-content',  // Selector for the content panel
  related: true,                // Target is a sibling of the button
  parent: '.px-accordion'       // Parent accordion container
});
```

## Options Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `target` | String | null | Selector for the content panel to toggle |
| `related` | Boolean | false | Whether the target is a sibling of the button in the DOM |
| `parent` | String | null | Selector for the accordion container (for closing other panels) |

## Data Attributes

All options can also be set using data attributes:

| Attribute | Description |
|-----------|-------------|
| `data-target` | Selector for the content panel to toggle |
| `data-related` | Whether the target is a sibling of the button in the DOM |
| `data-parent` | Selector for the accordion container |

## Events

The Collapse functionality fires events that you can listen for:

```javascript
// Do something when a panel is shown
Phenix('.accordion-btn').on('collapse-showed', event => {
  console.log('Panel is now visible');
});

// Do something when a panel is hidden
Phenix('.accordion-content').on('collapse-hidden', event => {
  console.log('Panel is now hidden');
});
```

## Accessibility

For better accessibility, consider adding appropriate ARIA attributes:

```html
<div class="px-accordion" id="accordion-example">
  <div class="accordion-item mb-15 bg-white border-1 border-solid border-alpha-10 radius-sm">
    <h4 class="fs-15 pdx-20 pdy-10 mb-0 accordion-btn flexbox align-between align-center-y transtion-fast mouse-pointer"
        id="heading-1"
        aria-expanded="false"
        aria-controls="content-1">
      Accessible Accordion Item
      <i class="far fa-plus lineheight-100 color-gray" aria-hidden="true"></i>
    </h4>
    <div class="accordion-content pd-20 hidden divider-t fs-14"
         id="content-1"
         aria-labelledby="heading-1"
         role="region">
      This is an accessible accordion panel.
    </div>
  </div>
</div>

<script>
  // Initialize accordion
  Phenix('.accordion-btn').collapse({
    target: '.accordion-content',
    related: true,
    parent: '.px-accordion'
  });
  
  // Update ARIA attributes when state changes
  Phenix('.accordion-btn').on('collapse-showed', function(event) {
    event.target.setAttribute('aria-expanded', 'true');
  });
  
  Phenix('.accordion-btn').on('collapse-hidden', function(event) {
    event.target.setAttribute('aria-expanded', 'false');
  });
</script>
```

## Best Practices

1. **Use clear headings** that indicate what content will be revealed
2. **Keep content concise** within each accordion panel
3. **Consider opening the first panel** by default to provide immediate content
4. **Use consistent styling** across all accordion items
5. **Add proper accessibility attributes** for screen readers
6. **Consider mobile users** when designing accordion interactions
