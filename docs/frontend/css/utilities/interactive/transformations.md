# Transformations

Transformation utilities in the Phenix Design System allow you to modify the appearance and position of elements using CSS transforms, primarily focusing on scaling.

## Overview

The main transformation utilities currently available control the scale of elements.

## Scale Utilities

Apply scaling transformations to resize elements visually without affecting the layout flow around them.

```html
<!-- Scale down -->
<div class="scale-050">Scaled to 50% of original size</div>
<div class="scale-075">Scaled to 75% of original size</div>

<!-- Scale up -->
<div class="scale-110">Scaled to 110% of original size</div>
<div class="scale-125">Scaled to 125% of original size</div>
<div class="scale-150">Scaled to 150% of original size</div>
<div class="scale-175">Scaled to 175% of original size</div>
<div class="scale-200">Scaled to 200% of original size</div>
```

Scaling is applied using the `transform: scale()` CSS property.

## Usage

Scaling utilities are often combined with transitions and hover effects:

```html
<!-- Image scales up smoothly on hover -->
<img src="image.jpg" alt="Scalable Image" 
     class="transition-smooth pds-hvr-scale-10">

<!-- Icon scales down when inactive -->
<i class="fa-star scale-075"></i>
```

## Responsive Transformations

Apply scaling utilities conditionally at different breakpoints:

```html
<!-- No scaling on mobile, scales up to 125% on medium screens and up -->
<div class="md-scale-125">Scales up on medium screens</div>

<!-- Scales down on mobile, normal size on large screens -->
<div class="scale-075 lg-scale-100">Responsive Scaling</div>
```

Available responsive prefixes:
- `md-`: Medium screens and up (≥ 768px)
- `lg-`: Large screens and up (≥ 1024px)
- `xl-`: Extra large screens and up (≥ 1200px)

## Best Practices

1.  **Combine with transitions**: Use [Transitions](./transitions.md) for smooth scaling effects.
2.  **Be mindful of layout**: Scaling doesn't change the space an element occupies in the layout; surrounding elements won't reflow.
3.  **Consider transform origin**: By default, scaling originates from the center. You might need custom CSS to change the `transform-origin` if needed.
4.  **Use for visual feedback**: Scaling is effective for interactive feedback, like enlarging buttons or images on hover.

## Hover Scale Effects

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

These `pds-hvr-scale-*` classes are convenient shortcuts for applying scaling specifically as a hover interaction. Remember to pair them with [Transition Utilities](./transitions.md) for a smooth effect. 