# Shadows

Shadow utilities in the Phenix Design System add depth and elevation to elements, helping establish visual hierarchy and create modern interface effects.

## Overview

Shadow utilities cover:

1.  **Box Shadows** - Add depth and elevation to elements
2.  **Text Shadows** - Create dimensional text effects
3.  **Glass Shadows Effects** - Special shadows with backdrop filters for glass morphism
4.  **Shadow Color Customization** - Modify shadow colors using CSS variables

## Box Shadows

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

## Glass Shadows Effects

Create glass-like effects with special shadow combinations and backdrop filters:

```html
<!-- Glass shadow effects (increasingly pronounced) -->
<div class="bx-shadow-gls-dp-1">Glass effect 1</div>
<div class="bx-shadow-gls-dp-2">Glass effect 2</div>
<div class="bx-shadow-gls-dp-3">Glass effect 3</div>
```

Glass shadows include backdrop blur and complex shadow combinations for a modern glass morphism effect.

## Text Shadows

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

## Shadow Color Customization

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

## Responsive Shadow Utilities

The standard shadow utilities (`bx-shadow-*`, `tx-shadow-*`) do **not** have built-in responsive variants like `-md` or `-lg`. 

If you need to apply different shadows at different screen sizes, you would typically achieve this by:

1.  **Using utility classes within responsive containers:** Apply different shadow classes to elements that are themselves shown or hidden at different breakpoints using display utilities (e.g., `hidden md-block`).
2.  **Custom CSS:** Define your own CSS rules using media queries to apply different `--box-shadow` or `text-shadow` values at various breakpoints.
3.  **JavaScript:** Dynamically add or remove shadow classes based on screen size or other conditions. 