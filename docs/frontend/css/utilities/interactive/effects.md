# Effects

Animation and transformation utilities in the Phenix Design System provide a collection of predefined effects that can be applied to elements for visual feedback, attracting attention, or modifying appearance.

## Overview

Effects cover:

1.  **Hover Animations** - Triggered when the user hovers over an element
2.  **Continuous Animations** - Run constantly
3.  **Background Animations** - Animate background properties
4.  **Scale Transformations** - Modify the visual size of elements
5.  **Highlight Effect** - Emphasize a hovered element by dimming its siblings
6.  **Animation Keyframes** - List of available predefined keyframes
7.  **Effect Customization** - Modify behavior using CSS variables

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

### Usage with Transitions

Scaling utilities are often combined with transitions and hover effects for smooth visual feedback:

```html
<!-- Image scales up smoothly on hover -->
<img src="image.jpg" alt="Scalable Image" class="transition-smooth pds-hvr-scale-10">
```

### Hover Scale Effects

Phenix provides specific utilities for applying scale transformations *only* on hover:

```html
<!-- Scale up effects on hover -->
<div class="pds-hvr-scale-05">Scale up 5% on hover</div>
<div class="pds-hvr-scale-10">Scale up 10% on hover</div>
<div class="pds-hvr-scale-15">Scale up 15% on hover</div>
<div class="pds-hvr-scale-25">Scale up 25% on hover</div>

<!-- Scale down effects on hover -->
<div class="pds-hvr-scale--05">Scale down 5% on hover</div>
<div class="pds-hvr-scale--10">Scale down 10% on hover</div>
<div class="pds-hvr-scale--15">Scale down 15% on hover</div>
<div class="pds-hvr-scale--25">Scale down 25% on hover</div>
```
Remember to pair these `pds-hvr-scale-*` classes with [Transition Utilities](./transitions.md) for a smooth effect.

## Highlight Effect

The `.pds-hvr-highlight` utility class creates a spotlight effect, drawing attention to the hovered item by visually dimming surrounding sibling elements.

### Usage

Apply the `.pds-hvr-highlight` class to sibling elements within a common parent container. When one of these elements is hovered, the others in the group will have their opacity reduced.

```html
<div class="row">
  <!-- Add transition-smooth for a smoother effect -->
  <div class="col-4">
    <div class="card pds-hvr-highlight transition-smooth">Card 1</div>
  </div>
  <div class="col-4">
    <div class="card pds-hvr-highlight transition-smooth">Card 2</div>
  </div>
  <div class="col-4">
    <div class="card pds-hvr-highlight transition-smooth">Card 3</div>
  </div>
</div>
```

### How It Works

When an element with `.pds-hvr-highlight` is hovered:

1.  The parent container gains a class (typically `.highlight-parent`).
2.  CSS rules target siblings of the hovered `.pds-hvr-highlight` element within the `.highlight-parent` container, reducing their opacity (default: 0.5).
3.  The hovered element itself retains full opacity.

### Responsive Highlight Effect

The `.pds-hvr-highlight` utility does not have built-in responsive variants. The highlight effect will apply on hover across all screen sizes where hover interactions are possible (typically non-touch devices).

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

## Effect Customization

Customize animation and transformation behavior with CSS variables:

```html
<!-- Custom animation speed -->
<div class="bg-animated-x" style="--duration: 30s;">
  Slower horizontal background animation (30s duration)
</div>

<!-- Custom gradient rotation angle -->
<div class="bg-animated-gradient-rotation" style="--gradient-rotation: 45deg;">
  Custom gradient rotation start angle
</div>

<!-- Custom transform origin (requires custom CSS or direct style) -->
<div class="scale-125" style="transform-origin: top left;">
  Scaled from top-left corner
</div>

<!-- Custom highlight opacity (Potential - Check SCSS implementation) -->
<div class="row" style="--highlight-opacity: 0.7;"> 
  <div class="col-4">
    <div class="card pds-hvr-highlight transition-smooth">Card 1 (Dim to 0.7)</div>
  </div>
</div>
```

## Advanced Animations with JavaScript

For more complex animation sequences, timed effects, or animations triggered by scroll events or other interactions, explore the [Phenix Animation System (JavaScript)](/frontend/js/animations).

## Best Practices

1.  **Use effects purposefully**: Animations, transformations, and highlight effects should enhance UX, not distract.
2.  **Respect user preferences**: Consider implementing support for `prefers-reduced-motion`.
3.  **Combine with transitions**: Use [Transitions](./transitions.md) for smooth entrances/exits of hover effects.
4.  **Test performance**: Complex or numerous effects can impact performance.
5.  **Be mindful of layout with scaling**: Scaling doesn't change the space an element occupies; surrounding elements won't reflow.
6.  **Consider transform origin**: Understand the default origin (center) for transformations and customize if needed.
7.  **Highlight effect context**: Apply `.pds-hvr-highlight` to siblings within a common parent for the effect to work correctly.
8.  **Test highlight readability**: Ensure dimmed elements in the highlight effect remain sufficiently readable. 