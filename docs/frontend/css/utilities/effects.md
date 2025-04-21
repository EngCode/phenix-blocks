# Visual Effects

The Phenix Design System provides a comprehensive collection of effect utilities that add visual polish and interactive elements to your user interface, including shadows, transitions, animations, and background effects.

## Overview

Effect utilities enhance your UI with:

1. **Box Shadows** - Add depth and elevation to elements
2. **Text Shadows** - Create dimensional text effects
3. **Transitions** - Smooth state changes with different speeds
4. **Animations** - Predefined animation effects for elements
5. **Background Effects** - Dynamic animated backgrounds

## Shadows

### Box Shadows

Box shadows add depth and elevation to elements, helping establish visual hierarchy:

```html
<!-- Standard elevation shadows -->
<div class="bx-shadow-dp-1">Depth 1 shadow (small)</div>
<div class="bx-shadow-dp-2">Depth 2 shadow (medium)</div>
<div class="bx-shadow-dp-3">Depth 3 shadow (standard)</div>
<div class="bx-shadow-dp-4">Depth 4 shadow (pronounced)</div>
<div class="bx-shadow-dp-5">Depth 5 shadow (heavy)</div>

<!-- Directional shadows (Y-axis) -->
<div class="bx-shadow-dp-1y">Depth 1 Y-axis shadow</div>
<div class="bx-shadow-dp-2y">Depth 2 Y-axis shadow</div>

<!-- PDS Tiered Shadows -->
<div class="bx-shadow-tw">Default tiered shadow</div>
<div class="bx-shadow-tw-sm">Small tiered shadow</div>
<div class="bx-shadow-tw-md">Medium tiered shadow</div>
<div class="bx-shadow-tw-lg">Large tiered shadow</div>
<div class="bx-shadow-tw-xl">Extra large tiered shadow</div>
<div class="bx-shadow-tw-2xl">2X large tiered shadow</div>
```

### Glass Shadows Effects

Create glass-like effects with special shadow combinations and backdrop filters:

```html
<!-- Glass shadow effects (increasingly pronounced) -->
<div class="bx-shadow-gls-dp-1">Glass effect 1</div>
<div class="bx-shadow-gls-dp-2">Glass effect 2</div>
<div class="bx-shadow-gls-dp-3">Glass effect 3</div>
```

Glass shadows include backdrop blur and complex shadow combinations for a modern glass morphism effect.

### Text Shadows

Create depth and emphasis for text elements:

```html
<!-- Standard text shadows -->
<h2 class="tx-shadow-dp-1">Depth 1 text shadow</h2>
<h2 class="tx-shadow-dp-2">Depth 2 text shadow</h2>
<h2 class="tx-shadow-dp-3">Depth 3 text shadow</h2>
<h2 class="tx-shadow-dp-4">Depth 4 text shadow</h2>
<h2 class="tx-shadow-dp-5">Depth 5 text shadow</h2>

<!-- Directional text shadow -->
<h2 class="tx-shadow-dp-1y">Directional Y-axis text shadow</h2>

<!-- PDS Tiered Text Shadows -->
<h2 class="tx-shadow-tw">Default tiered text shadow</h2>
<h2 class="tx-shadow-tw-sm">Small tiered text shadow</h2>
<h2 class="tx-shadow-tw-md">Medium tiered text shadow</h2>
<h2 class="tx-shadow-tw-lg">Large tiered text shadow</h2>
<h2 class="tx-shadow-tw-xl">Extra large tiered text shadow</h2>
<h2 class="tx-shadow-tw-2xl">2X large tiered text shadow</h2>
```

### Shadow Color Customization

You can customize shadow colors using CSS variables:

```html
<!-- Custom shadow colors -->
<div class="bx-shadow-dp-3" style="--shadow-color-dark: 65,105,225;">
  Blue-tinted shadow
</div>

<div class="bx-shadow-dp-3" style="--shadow-color-dark: 220,53,69;">
  Red-tinted shadow
</div>
```

## Transitions

Add smooth transitions to elements when they change state:

```html
<!-- Fast transition (0.2s) -->
<div class="transition-fast">Fast transition</div>

<!-- Standard smooth transition (0.3s) -->
<div class="transition-smooth">Smooth transition</div>

<!-- Slow transition (0.5s) -->
<div class="transition-slow">Slow transition</div>
```

These transition utilities add the appropriate CSS transition properties for all state changes, making them ideal for hover effects and interactive elements.

## Animations

### Hover Animations

Add animations that trigger on hover:

```html
<!-- Scale effects on hover -->
<div class="pds-hvr-scale-05">Scale up 5% on hover</div>
<div class="pds-hvr-scale-10">Scale up 10% on hover</div>
<div class="pds-hvr-scale-15">Scale up 15% on hover</div>
<div class="pds-hvr-scale-25">Scale up 25% on hover</div>

<!-- Scale down effects on hover -->
<div class="pds-hvr-scale--05">Scale down 5% on hover</div>
<div class="pds-hvr-scale--10">Scale down 10% on hover</div>
<div class="pds-hvr-scale--15">Scale down 15% on hover</div>
<div class="pds-hvr-scale--25">Scale down 25% on hover</div>

<!-- Background gradient effects -->
<div class="pds-hvr-gradient-move">Moving gradient on hover</div>
<div class="pds-hvr-gradient-move-revert">Reversed moving gradient on hover</div>

<!-- Interactive animations on hover -->
<div class="pds-hvr-floating">Floating effect on hover</div>
<div class="pds-hvr-ringing">Ringing effect on hover</div>
<div class="pds-hvr-tada">Tada effect on hover</div>
<div class="pds-hvr-flash">Flash effect on hover</div>
<div class="pds-hvr-pulse">Pulse effect on hover</div>
<div class="pds-hvr-jello">Jello effect on hover</div>
<div class="pds-hvr-shakeY">Vertical shake on hover</div>
<div class="pds-hvr-shakeX">Horizontal shake on hover</div>
<div class="pds-hvr-bounce">Bounce effect on hover</div>
<div class="pds-hvr-rubberBand">Rubber band effect on hover</div>
```

### Continuous Animations

Add animations that run continuously:

```html
<!-- Continuous animations -->
<div class="pds-animate-floating">Continuous floating animation</div>
<div class="pds-animate-ringing">Continuous ringing animation</div>

<!-- Background animations -->
<div class="bg-animated-x">Horizontal background animation</div>
<div class="bg-animated-y">Vertical background animation</div>
<div class="bg-animated-zoom">Zoom in/out background animation</div>
<div class="bg-animated-gradient-rotation">Rotating gradient animation</div>
```

### Animation Customization

Customize animation behavior with CSS variables:

```html
<!-- Custom animation speed -->
<div class="bg-animated-x" style="--duration: 30s;">
  Faster horizontal background animation
</div>

<!-- Custom gradient rotation -->
<div class="bg-animated-gradient-rotation" style="--gradient-rotation: 45deg;">
  Custom gradient rotation
</div>
```

## Scroll Effects

Control how content behaves during scrolling:

```html
<!-- Scrolling snap sections -->
<div class="px-section-snap">
  <!-- Content with scroll snap behavior -->
</div>
```

## Scale Utilities

Apply scaling transformations to elements:

```html
<!-- Scale down -->
<div class="scale-050">Scaled to 50%</div>
<div class="scale-075">Scaled to 75%</div>

<!-- Scale up -->
<div class="scale-110">Scaled to 110%</div>
<div class="scale-125">Scaled to 125%</div>
<div class="scale-150">Scaled to 150%</div>
<div class="scale-175">Scaled to 175%</div>
<div class="scale-200">Scaled to 200%</div>
```

## Animation Keyframes

The system includes several predefined keyframe animations that can be used with the animation utilities:

- `floating` - Smooth up and down movement
- `shaking` - Shake effect with scaling
- `shakingInf` - Infinite subtle shaking
- `background_x` - Horizontal background movement
- `background_y` - Vertical background movement
- `gradient-rotation` - Rotating gradient
- `animate-rotation` - Generic rotation
- `scaleX` - Horizontal scaling
- `scaleY` - Vertical scaling
- `fullWidth` - Width expansion from 0% to 100%
- `fullHeight` - Height expansion from 0% to 100%
- `fullHeightVH` - Height expansion in viewport height
- `rotateFull` - 360-degree rotation

## Combining Effects

Effects and animations can be combined for more complex interactions:

```html
<!-- Combining different effects -->
<div class="bx-shadow-dp-2 transition-smooth pds-hvr-scale-10 pds-hvr-shadow-dp-4">
  This element has a default shadow, smooth transition, 
  and scales up with a larger shadow on hover
</div>

<!-- Card with multiple effects -->
<div class="card bx-shadow-dp-1 transition-smooth pds-hvr-floating">
  <div class="card-body">
    <h3>Interactive Card</h3>
    <p>This card floats on hover with a smooth transition</p>
  </div>
</div>
```

## Usage Examples

### Interactive Button

```html
<button class="btn primary transition-smooth pds-hvr-scale-05">
  Hover Me
</button>
```

### Animated Card

```html
<div class="card bx-shadow-dp-2 transition-smooth pds-hvr-scale-05 pds-hvr-shadow-dp-3">
  <div class="px-media ratio-16x9">
    <img src="image.jpg" alt="Card image" class="px-media-img">
  </div>
  <div class="card-body p-20">
    <h3 class="mb-10">Card Title</h3>
    <p>Card description goes here.</p>
  </div>
</div>
```

### Animated Feature Box

```html
<div class="p-30 bg-light bx-shadow-dp-1 radius-lg transition-smooth pds-hvr-translateY--10">
  <div class="icon mb-15 color-primary">
    <i class="fa-star icon-lg"></i>
  </div>
  <h4 class="mb-10">Feature Title</h4>
  <p>Feature description text.</p>
</div>
```

### Glass Card Effect

```html
<div class="card p-30 bg-gradient-primary bg-opacity-10 bx-shadow-gls-dp-2 radius-lg">
  <h3 class="color-primary mb-15">Glass Card</h3>
  <p>This card uses the glass shadow effect for a modern look.</p>
</div>
```

## Responsive Variants

Most effect utilities can be applied conditionally at different breakpoints:

```html
<!-- Shadow visible only on medium screens and up -->
<div class="bx-shadow-md-dp-3">Shadow on medium screens and up</div>

<!-- Animation active only on large screens -->
<div class="lg-pds-animate-floating">Floating animation on large screens</div>
```

Available breakpoint prefixes include:
- `xs:` - Extra small screens (≥0px)
- `sm:` - Small screens (≥576px)
- `md:` - Medium screens (≥768px)
- `lg:` - Large screens (≥992px)
- `xl:` - Extra large screens (≥1200px)
- `xxl:` - Extra extra large screens (≥1400px)

## Related Utilities

For other effect-related utilities, see:
- [Hover Utilities](/frontend/css/utilities/hovers.md) - Interactive hover effects and animations
- [Colors](/frontend/css/utilities/colors.md) - Text and element color utilities
- [Backgrounds](/frontend/css/utilities/backgrounds.md) - Background color and image utilities 