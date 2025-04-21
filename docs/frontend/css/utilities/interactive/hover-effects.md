# Hover Effects

The Phenix Design System provides a collection of hover effect utilities that add interactive feedback when users hover over elements. These effects enhance user experience by creating engaging and responsive interfaces.

## Overview

Hover effects in the Phenix Design System:

1. **Scale Effects** - Change element size on hover
2. **Animation Effects** - Apply predefined animations on hover
3. **Highlight Effects** - Highlight specific elements while dimming siblings
4. **Transition Controls** - Control the speed of hover transitions

All hover utilities use a consistent naming convention with the `pds-hvr-` prefix.

## Transition Controls

Control the speed of transitions when hover effects are applied:

```html
<!-- Fast transition (0.2s) -->
<div class="transition-fast">Fast hover transition</div>

<!-- Standard smooth transition (0.3s) -->
<div class="transition-smooth">Smooth hover transition</div>

<!-- Slow transition (0.5s) -->
<div class="transition-slow">Slow hover transition</div>
```

These transition utilities provide appropriate timing for hover effects, making interactions feel natural and responsive.

## Scale Effects

Scale elements up or down on hover:

```html
<!-- Scale up by 10% on hover -->
<div class="pds-hvr-scale-10">Scale up 10% on hover</div>

<!-- Scale up by 15% on hover -->
<div class="pds-hvr-scale-15">Scale up 15% on hover</div>

<!-- Scale up by 25% on hover -->
<div class="pds-hvr-scale-25">Scale up 25% on hover</div>
```

Scale effects are particularly useful for buttons, cards, and images to provide visual feedback when users interact with them.

## Animated Hover Effects

Apply animation effects that trigger on hover:

```html
<!-- Floating effect on hover -->
<div class="pds-hvr-floating">Floating on hover</div>

<!-- Ringing/shaking effect on hover -->
<div class="pds-hvr-ringing">Ringing on hover</div>

<!-- Tada effect on hover -->
<div class="pds-hvr-tada">Tada effect on hover</div>

<!-- Flash effect on hover -->
<div class="pds-hvr-flash">Flash effect on hover</div>

<!-- Pulse effect on hover -->
<div class="pds-hvr-pulse">Pulse effect on hover</div>

<!-- Jello effect on hover -->
<div class="pds-hvr-jello">Jello wobble on hover</div>

<!-- Vertical shake on hover -->
<div class="pds-hvr-shakeY">Shake vertically on hover</div>

<!-- Horizontal shake on hover -->
<div class="pds-hvr-shakeX">Shake horizontally on hover</div>

<!-- Bounce effect on hover -->
<div class="pds-hvr-bounce">Bounce on hover</div>

<!-- Rubber band effect on hover -->
<div class="pds-hvr-rubberBand">Rubber band effect on hover</div>
```

## Highlight Effect

The highlight effect allows you to emphasize a specific element by reducing the opacity of its siblings when hovered:

```html
<div class="row">
  <!-- When any card with pds-hvr-highlight is hovered, siblings will dim -->
  <div class="col-4"><div class="card pds-hvr-highlight">Card 1</div></div>
  <div class="col-4"><div class="card pds-hvr-highlight">Card 2</div></div>
  <div class="col-4"><div class="card pds-hvr-highlight">Card 3</div></div>
</div>
```

This creates a spotlight effect, drawing attention to the hovered item by reducing the visual prominence of surrounding elements.

## Continuous Animation Effects

Some effects can be applied continuously, regardless of hover state:

```html
<!-- Continuous floating animation -->
<div class="pds-animate-floating">Always floating</div>

<!-- Continuous ringing animation -->
<div class="pds-animate-ringing">Always ringing</div>
```

## Combining Effects

Hover effects can be combined with other utilities for more complex interactions:

```html
<!-- Card with multiple hover effects -->
<div class="card transition-smooth pds-hvr-scale-10">
  <div class="card-body">
    <h3>Interactive Card</h3>
    <p>This card scales up smoothly on hover</p>
    <a href="#" class="btn primary pds-hvr-floating">Hover me</a>
  </div>
</div>
```

## Real-World Examples

### Interactive Buttons

```html
<!-- Primary button with subtle scale effect -->
<button class="btn primary transition-smooth pds-hvr-scale-10">
  Learn More
</button>

<!-- Success button with floating effect -->
<button class="btn success transition-smooth pds-hvr-floating">
  Download
</button>

<!-- Danger button with shake effect -->
<button class="btn danger transition-smooth pds-hvr-shakeX">
  Delete
</button>
```

### Feature Cards

```html
<!-- Feature cards with highlight effect -->
<div class="row gp-20">
  <div class="col-4">
    <div class="card p-20 pds-hvr-highlight transition-smooth">
      <div class="icon mb-15 color-primary">
        <i class="fa-star"></i>
      </div>
      <h4 class="mb-10">Feature 1</h4>
      <p>Feature description text</p>
    </div>
  </div>
  <div class="col-4">
    <div class="card p-20 pds-hvr-highlight transition-smooth">
      <div class="icon mb-15 color-primary">
        <i class="fa-heart"></i>
      </div>
      <h4 class="mb-10">Feature 2</h4>
      <p>Feature description text</p>
    </div>
  </div>
  <div class="col-4">
    <div class="card p-20 pds-hvr-highlight transition-smooth">
      <div class="icon mb-15 color-primary">
        <i class="fa-bolt"></i>
      </div>
      <h4 class="mb-10">Feature 3</h4>
      <p>Feature description text</p>
    </div>
  </div>
</div>
```

### Team Member Grid

```html
<div class="row gp-30">
  <div class="col-12 col-md-4">
    <div class="card text-center p-20 transition-smooth pds-hvr-scale-10">
      <div class="px-media ratio-1x1 mb-15">
        <img src="team-member-1.jpg" alt="Team Member" class="px-media-img radius-circle">
      </div>
      <h4 class="mb-5">Jane Doe</h4>
      <p class="fs-14 color-gray mb-10">Product Designer</p>
    </div>
  </div>
  <!-- Additional team members -->
</div>
```

### Call-to-Action Section

```html
<div class="card bg-primary text-center p-40 transition-smooth">
  <h2 class="color-white mb-20">Ready to get started?</h2>
  <p class="color-white mb-30">Join thousands of satisfied customers today.</p>
  <button class="btn light transition-smooth pds-hvr-scale-15">Sign Up Now</button>
</div>
```

## Browser Support Note

The hover effects are designed to work in modern browsers and include appropriate fallbacks. For older browsers or touch devices where hover isn't available, the effects degrade gracefully.

## Implementation Details

The hover utilities use a combination of CSS transitions and keyframe animations to achieve their effects. These are automatically applied only on non-touch devices and in contexts outside the WordPress block editor to prevent interference with editing. 