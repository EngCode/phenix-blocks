# Animations

Animation utilities in the Phenix Design System provide a collection of predefined animations that can be applied to elements for visual effects, feedback, or attracting attention.

## Overview

Animations cover:

1.  **Hover Animations** - Triggered when the user hovers over an element
2.  **Continuous Animations** - Run constantly
3.  **Background Animations** - Animate background properties
4.  **Animation Keyframes** - List of available predefined keyframes
5.  **Animation Customization** - Modify animation behavior using CSS variables

## Hover Animations

Add animations that trigger on hover. Note that some of these are also covered in [Hover Effects](./hover-effects.md), which focuses specifically on interaction feedback.

```html
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

<!-- Background gradient effects on hover -->
<div class="pds-hvr-gradient-move">Moving gradient on hover</div>
<div class="pds-hvr-gradient-move-revert">Reversed moving gradient on hover</div>
```

## Continuous Animations

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

## Animation Keyframes

The system includes several predefined keyframe animations that are used by the utility classes:

-   `floating` - Smooth up and down movement
-   `shaking` - Shake effect with scaling
-   `shakingInf` - Infinite subtle shaking
-   `background_x` - Horizontal background movement
-   `background_y` - Vertical background movement
-   `gradient-rotation` - Rotating gradient
-   `animate-rotation` - Generic rotation
-   `scaleX` - Horizontal scaling
-   `scaleY` - Vertical scaling
-   `fullWidth` - Width expansion from 0% to 100%
-   `fullHeight` - Height expansion from 0% to 100%
-   `fullHeightVH` - Height expansion in viewport height
-   `rotateFull` - 360-degree rotation

While you typically won't use these keyframes directly, understanding them helps in knowing what the utility classes do.

## Animation Customization

Customize animation behavior with CSS variables:

```html
<!-- Custom animation speed -->
<div class="bg-animated-x" style="--duration: 30s;">
  Slower horizontal background animation (30s duration)
</div>

<!-- Custom gradient rotation angle -->
<div class="bg-animated-gradient-rotation" style="--gradient-rotation: 45deg;">
  Custom gradient rotation start angle
</div>
```

## Responsive Animations

Animation utilities can be applied conditionally at different breakpoints:

```html
<!-- Animation active only on large screens -->
<div class="lg-pds-animate-floating">Floating animation on large screens and up</div>

<!-- Hover animation only active on medium screens -->
<div class="md-pds-hvr-bounce">Bounce on hover on medium screens and up</div>
```

Available responsive prefixes:
- `md-`: Medium screens and up (≥ 768px)
- `lg-`: Large screens and up (≥ 1024px)
- `xl-`: Extra large screens and up (≥ 1200px)

## Best Practices

1.  **Use animations purposefully**: Animations should enhance UX, not distract.
2.  **Respect user preferences**: Consider implementing support for `prefers-reduced-motion`.
3.  **Combine with transitions**: Use [Transitions](./transitions.md) for smooth entrances/exits of hover animations.
4.  **Test performance**: Complex or numerous animations can impact performance.

## Animated Hover Effects

These animations are specifically designed to trigger on hover, providing interactive feedback:

```html
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

<!-- Background gradient effects on hover -->
<div class="pds-hvr-gradient-move">Moving gradient on hover</div>
<div class="pds-hvr-gradient-move-revert">Reversed moving gradient on hover</div>
```

Combine these with [Transition Utilities](./transitions.md) for the best user experience. 