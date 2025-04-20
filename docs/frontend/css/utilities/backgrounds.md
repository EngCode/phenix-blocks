# Backgrounds

The Backgrounds utilities in the Phenix Design System provide a comprehensive set of classes for controlling background colors, gradients, opacity, and other visual aspects of element backgrounds.

## Overview

The background utilities in Phenix Design System are organized into the following categories:

1. **Background Colors** - Solid color backgrounds using theme variables
2. **Transparent Backgrounds** - Backgrounds with various opacity levels
3. **Brand Colors** - Social media and brand-specific color backgrounds
4. **Gradients** - Linear gradient backgrounds with various color combinations
5. **Background Properties** - Control background size, position, and repeat behavior
6. **Special Effects** - Parallax and other special background effects

## Background Colors

Apply solid background colors using theme variables:

```html
<!-- Theme-based background colors -->
<div class="bg-primary">Primary background color</div>
<div class="bg-secondary">Secondary background color</div>
<div class="bg-primary-dark">Dark primary background</div>
<div class="bg-secondary-dark">Dark secondary background</div>
<div class="bg-success">Success background color</div>
<div class="bg-danger">Danger background color</div>
<div class="bg-warning">Warning background color</div>
<div class="bg-info">Info background color</div>
<div class="bg-gray">Gray background color</div>
<div class="bg-gray-lighter">Lighter gray background</div>
<div class="bg-dark">Dark background color</div>
<div class="bg-white">White background color</div>
<div class="bg-transparent">Transparent background</div>
<div class="bg-inherit">Inherit background from parent</div>
```

### Component Background Levels

Control background colors for nested component levels:

```html
<div class="bg-component-lvl-1">Level 1 component background</div>
<div class="bg-component-lvl-2">Level 2 component background</div>
<div class="bg-component-lvl-3">Level 3 component background</div>
```

## Transparent Backgrounds

Create backgrounds with specific opacity levels:

### Dark Transparent Backgrounds

```html
<!-- Dark transparent backgrounds -->
<div class="bg-alpha-05">5% opacity dark background</div>
<div class="bg-alpha-10">10% opacity dark background</div>
<div class="bg-alpha-15">15% opacity dark background</div>
<div class="bg-alpha-25">25% opacity dark background</div>
<div class="bg-alpha-50">50% opacity dark background</div>
<div class="bg-alpha-75">75% opacity dark background</div>
```

### Light Transparent Backgrounds

```html
<!-- Light transparent backgrounds -->
<div class="bg-revert-05">5% opacity light background</div>
<div class="bg-revert-10">10% opacity light background</div>
<div class="bg-revert-15">15% opacity light background</div>
<div class="bg-revert-25">25% opacity light background</div>
<div class="bg-revert-50">50% opacity light background</div>
<div class="bg-revert-75">75% opacity light background</div>
```

## Offwhite Backgrounds

Subtle, light-colored backgrounds that work well for cards and sections:

```html
<!-- Theme-based offwhite backgrounds -->
<div class="bg-offwhite-primary">Primary offwhite background</div>
<div class="bg-offwhite-secondary">Secondary offwhite background</div>
<div class="bg-offwhite-info">Info offwhite background</div>
<div class="bg-offwhite-gray">Gray offwhite background</div>
<div class="bg-offwhite-dark">Dark offwhite background</div>
<div class="bg-offwhite-success">Success offwhite background</div>
<div class="bg-offwhite-danger">Danger offwhite background</div>
<div class="bg-offwhite-warning">Warning offwhite background</div>

<!-- Named offwhite backgrounds -->
<div class="bg-offwhite-smoke">Smoke offwhite (#F5F5F5)</div>
<div class="bg-offwhite-snow">Snow offwhite (#FFFAFA)</div>
<div class="bg-offwhite-honeydew">Honeydew offwhite (#F0FFF0)</div>
<div class="bg-offwhite-mintcream">Mintcream offwhite (#F5FFFA)</div>
<div class="bg-offwhite-azure">Azure offwhite (#F0FFFF)</div>
<div class="bg-offwhite-aliceblue">Alice blue offwhite (#F0F8FF)</div>
<div class="bg-offwhite-ghost">Ghost offwhite (#F8F8FF)</div>
<div class="bg-offwhite-seashell">Seashell offwhite (#FFF5EE)</div>
<div class="bg-offwhite-beige">Beige offwhite (#F5F5DC)</div>
<div class="bg-offwhite-oldlace">Old lace offwhite (#FDF5E6)</div>
<div class="bg-offwhite-floral">Floral offwhite (#FFFAF0)</div>
<div class="bg-offwhite-ivory">Ivory offwhite (#FFFFF0)</div>
<div class="bg-offwhite-antique">Antique offwhite (#FAEBD7)</div>
<div class="bg-offwhite-linen">Linen offwhite (#FAF0E6)</div>
<div class="bg-offwhite-lavenderblush">Lavender blush offwhite (#FFF0F5)</div>
```

## Brand Color Backgrounds

Apply social media and other brand colors as backgrounds:

```html
<!-- Brand-specific background colors -->
<div class="bg-facebook">Facebook blue background</div>
<div class="bg-twitter">Twitter blue background</div>
<div class="bg-google-red">Google red background</div>
<div class="bg-youtube">YouTube red background</div>
<div class="bg-instagram">Instagram gradient-like background</div>
<div class="bg-snapchat">Snapchat yellow background</div>
<div class="bg-whatsapp">WhatsApp green background</div>
<div class="bg-pinterest">Pinterest red background</div>
<div class="bg-linkedin">LinkedIn blue background</div>
<div class="bg-behance">Behance blue background</div>
<div class="bg-dribbble">Dribbble pink background</div>
<div class="bg-flicker">Flicker blue background</div>
```

## Gradient Backgrounds

Apply gradient backgrounds with predefined color combinations:

```html
<!-- Theme-based gradients -->
<div class="bg-grade-primary">Primary gradient</div>
<div class="bg-grade-secondary">Secondary gradient</div>
<div class="bg-grade-success">Success gradient</div>
<div class="bg-grade-danger">Danger gradient</div>
<div class="bg-grade-warning">Warning gradient</div>
<div class="bg-grade-purple">Purple gradient</div>

<!-- Element-inspired gradients -->
<div class="bg-grade-ice">Ice gradient (cool blues)</div>
<div class="bg-grade-fire">Fire gradient (warm oranges)</div>
<div class="bg-grade-water">Water gradient (aqua blues)</div>

<!-- Mixed theme gradients -->
<div class="bg-grade-primary-secondary">Primary to secondary gradient</div>
<div class="bg-grade-primary-secondary-2nd">Primary hover to secondary hover gradient</div>
<div class="bg-grade-primary-dark">Primary to primary dark gradient</div>
<div class="bg-grade-secondary-dark">Secondary to secondary dark gradient</div>
<div class="bg-grade-danger-purple">Danger to purple gradient</div>
<div class="bg-grade-primary-purple">Primary to purple gradient</div>

<!-- Transparent gradients -->
<div class="bg-grade-alpha-dark">Transparent to 50% dark gradient</div>
<div class="bg-grade-alpha-light">Transparent to 50% light gradient</div>
<div class="bg-grade-alpha-darker">Transparent to 75% dark gradient</div>
<div class="bg-grade-alpha-lighter">Transparent to 75% light gradient</div>
```

### Offwhite Gradients

Subtle gradient backgrounds that work well for cards and sections:

```html
<!-- Offwhite gradient backgrounds -->
<div class="bg-grade-offwhite-primary">White to primary offwhite gradient</div>
<div class="bg-grade-offwhite-secondary">White to secondary offwhite gradient</div>
<div class="bg-grade-silver">Silver gradient</div>
<div class="bg-grade-silver-2nd">Alternative silver gradient</div>
<div class="bg-grade-offwhite-red">Red offwhite gradient</div>
<div class="bg-grade-offwhite-blue">Blue offwhite gradient</div>
<div class="bg-grade-offwhite-green">Green offwhite gradient</div>
<div class="bg-grade-offwhite-yellow">Yellow offwhite gradient</div>
<div class="bg-grade-offwhite-silver">Silver offwhite gradient</div>
<div class="bg-grade-offwhite-info">Info offwhite gradient</div>
<div class="bg-grade-offwhite-purple">Purple offwhite gradient</div>
<div class="bg-grade-offwhite-danger">Danger offwhite gradient</div>
<div class="bg-grade-offwhite-yellow-2nd">Alternative yellow offwhite gradient</div>
<div class="bg-grade-offwhite-blue-2nd">Alternative blue offwhite gradient</div>
<div class="bg-grade-offwhite-blue-3rd">Third blue offwhite gradient</div>
<div class="bg-grade-offwhite-blue-4th">Fourth blue offwhite gradient (double transition)</div>
```

### Gradient Direction Control

Control the direction of gradients:

```html
<!-- Gradient direction control -->
<div class="bg-grade-primary bg-grade-45">45° angle gradient</div>
<div class="bg-grade-primary bg-grade-90">90° angle gradient</div>
<div class="bg-grade-primary bg-grade-120">120° angle gradient</div>
<div class="bg-grade-primary bg-grade-180">180° angle gradient</div>
<div class="bg-grade-primary bg-grade-45n">-45° angle gradient</div>
<div class="bg-grade-primary bg-grade-90n">-90° angle gradient</div>
<div class="bg-grade-primary bg-grade-120n">-120° angle gradient</div>
<div class="bg-grade-primary bg-grade-180n">-180° angle gradient</div>
```

## Background Size

Control the size of background images:

```html
<!-- Background size control -->
<div class="bgs-100">100% width and height</div>
<div class="bgs-auto">Auto size (default)</div>

<!-- Width-specific background size -->
<div class="bgw-25">25% width, auto height</div>
<div class="bgw-50">50% width, auto height</div>
<div class="bgw-75">75% width, auto height</div>
<div class="bgw-90">90% width, auto height</div>
<div class="bgw-100">100% width, auto height</div>

<!-- Height-specific background size -->
<div class="bgh-25">Auto width, 25% height</div>
<div class="bgh-50">Auto width, 50% height</div>
<div class="bgh-75">Auto width, 75% height</div>
<div class="bgh-90">Auto width, 90% height</div>
<div class="bgh-100">Auto width, 100% height</div>
```

## Background Repeat

Control how backgrounds repeat:

```html
<!-- Background repeat control -->
<div class="bgr">Repeat in both directions (default)</div>
<div class="bgr-x">Repeat horizontally only</div>
<div class="bgr-y">Repeat vertically only</div>
<div class="bgr-n">No repeat</div>
```

## Background Position

Control the position of background images:

```html
<!-- Center positioning -->
<div class="bgp-cc">Center center (both horizontally and vertically centered)</div>
<div class="bgp-cs">Center start (centered vertically, at the start horizontally)</div>
<div class="bgp-ce">Center end (centered vertically, at the end horizontally)</div>

<!-- Top positioning -->
<div class="bgp-tc">Top center</div>
<div class="bgp-ts">Top start</div>
<div class="bgp-te">Top end</div>

<!-- Bottom positioning -->
<div class="bgp-bs">Bottom start</div>
```

## Special Background Effects

Create special effects with backgrounds:

```html
<!-- Parallax effect (fixed during scroll) -->
<div class="bg-parallax" style="background-image: url('image.jpg')">
  Parallax background image
</div>

<!-- Overlay effects -->
<div class="overlay-dark">
  <div>Content appears above the dark overlay</div>
</div>

<div class="overlay-light">
  <div>Content appears above the light overlay</div>
</div>

<div class="overlay-custom" style="--overlay-bg: #3498db; --opacity: 0.6;">
  <div>Content appears above a custom overlay</div>
</div>
```

## Common Use Cases

### Cards with Different Background Styles

```html
<!-- Card with solid background -->
<div class="pd-20 radius-md bg-offwhite-primary">
  <h3>Card with Solid Background</h3>
  <p>Content with a subtle primary offwhite background.</p>
</div>

<!-- Card with gradient background -->
<div class="pd-20 radius-md bg-grade-offwhite-blue">
  <h3>Card with Gradient Background</h3>
  <p>Content with a subtle blue gradient background.</p>
</div>
```

### Section with Parallax Background

```html
<section class="pd-50 bg-parallax" style="background-image: url('mountains.jpg')">
  <div class="container">
    <h2 class="tx-white">Section with Parallax Background</h2>
    <p class="tx-white">Content on a parallax background image.</p>
  </div>
</section>
```

### Content with Overlay

```html
<div class="position-rv">
  <img src="image.jpg" alt="Background Image" class="w-fluid">
  <div class="overlay-dark position-ab position-full">
    <div class="tx-white pd-20">
      <h3>Content with Dark Overlay</h3>
      <p>Text is visible on dark background.</p>
    </div>
  </div>
</div>
```

### Brand-Specific Call to Action

```html
<div class="pd-20 radius-md bg-facebook">
  <h3 class="tx-white">Connect with us on Facebook</h3>
  <p class="tx-white">Follow our page for the latest updates.</p>
  <button class="btn light">Connect Now</button>
</div>
```

### Content with Alpha Background

```html
<div class="pd-20 radius-md bg-alpha-10">
  <h3>Subtle Background</h3>
  <p>Content with a subtle 10% opacity background.</p>
</div>
```

These background utilities provide precise control over element appearances, allowing for consistent, visually appealing designs throughout your project.
