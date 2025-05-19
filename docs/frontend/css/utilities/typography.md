# Typography Utilities

Typography utilities in Phenix Design System provide a comprehensive set of classes to control text appearance, including font families, sizes, weights, alignment, text transformations, and icon styling. These utilities help maintain consistent typography across your project.

## Table of Contents

- [Font Families](#font-families)
- [Headline Sizes](#headline-sizes)
- [Display Headlines](#display-headlines)
- [Text Sizes](#text-sizes)
- [Font Weight](#font-weight)
- [Text Alignment](#text-alignment)
- [Text Utilities](#text-utilities)
- [Icon Utilities](#icon-utilities)
- [Line Height](#line-height)
- [Text Wrapping](#text-wrapping)
- [Responsive Typography](#responsive-typography)

## Font Families

Control the font family of elements with these utilities:

```html
<p class="primary-font">This text uses the primary font family</p>
<p class="secondary-font">This text uses the secondary font family</p>
<p class="style-font">This text uses the style font if available, or falls back to primary font</p>
```

The font families are defined as CSS variables:

- `--primary-font`: Primary font for headlines and important text (default: "Tajawal")
- `--secondary-font`: Secondary font for body text (default: "Tajawal")
- `--style-font`: Optional style font for special elements

## Headline Sizes

Phenix provides heading classes that match the corresponding HTML elements:

```html
<div class="h1">Heading 1 (32px)</div>
<div class="h2">Heading 2 (28px)</div>
<div class="h3">Heading 3 (25px)</div>
<div class="h4">Heading 4 (23px)</div>
<div class="h5">Heading 5 (20px)</div>
<div class="h6">Heading 6 (17px)</div>
```

## Display Headlines

For larger, more impactful headings:

```html
<div class="display-h1">Display Heading 1 (62px)</div>
<div class="display-h2">Display Heading 2 (52px)</div>
<div class="display-h3">Display Heading 3 (48px)</div>
<div class="display-h4">Display Heading 4 (44px)</div>
<div class="display-h5">Display Heading 5 (40px)</div>
<div class="display-h6">Display Heading 6 (36px)</div>
```

## Text Sizes

Control the font size with these utility classes:

```html
<p class="fs-inherit">Inherits font size from parent</p>
<p class="fs-12">12px font size (tiny-text also works)</p>
<p class="fs-14">14px font size (small-text also works)</p>
<p class="fs-16">16px font size (default)</p>
<p class="fs-18">18px font size (large-text also works)</p>
<p class="fs-20">20px font size (xlarge-text also works)</p>
```

Available size classes: `fs-12`, `fs-13`, `fs-14`, `fs-15`, `fs-16`, `fs-17`, `fs-18`, `fs-19`, `fs-20`, `fs-22`, `fs-24`, `fs-25`, `fs-26`, `fs-28`, `fs-30`

Alternate classes: `tiny-text`, `small-text`, `large-text`, `xlarge-text`

## Font Weight

Control the weight (thickness) of text:

```html
<p class="weight-thin">Thin weight (100)</p>
<p class="weight-xlight">Extra Light weight (200)</p>
<p class="weight-light">Light weight (300)</p>
<p class="weight-normal">Normal weight (400)</p>
<p class="weight-medium">Medium weight (500)</p>
<p class="weight-bold">Bold weight (600)</p>
<p class="weight-strong">Strong weight (700)</p>
<p class="weight-xbold">Extra Bold weight (800)</p>
<p class="weight-black">Black weight (900)</p>
```

Font weights are defined as CSS variables:
- `--thin-weight`: 100
- `--xlight-weight`: 200
- `--light-weight`: 300
- `--normal-weight`: 400
- `--medium-weight`: 500  
- `--bold-weight`: 600
- `--strong-weight`: 700
- `--xbold-weight`: 800
- `--black-weight`: 900

## Text Alignment

Control text alignment with these utilities:

```html
<p class="tx-align-start">Aligned to the start (follows direction)</p>
<p class="tx-align-end">Aligned to the end (follows direction)</p>
<p class="tx-align-left">Left aligned</p>
<p class="tx-align-right">Right aligned</p>
<p class="tx-align-center">Center aligned</p>
<p class="tx-align-justify">Justified text</p>
```

## Text Utilities

Additional text transformation and decoration utilities:

```html
<p class="tx-uppercase">UPPERCASE TEXT</p>
<p class="tx-capitalize">capitalized text</p>
<p class="tx-underline">Underlined text</p>
<p class="tx-line-through">Strikethrough text</p>
<p class="tx-italic">Italic text</p>
<p class="tx-nowrap">This text won't wrap and will show ellipsis if too long</p>
<p class="tx-line-clamp">This text will be limited to 3 lines by default and will show ellipsis if too long. You can change the number of lines with the --max-lines variable.</p>
```

## Icon Utilities

Control the appearance and positioning of icons, often used with icon font libraries.

### Icon Spacing

Add appropriate spacing after an icon when it precedes text:

```html
<!-- Add spacing after icon -->
<span class="tx-icon fa-home">Home Page</span>
<button class="btn primary tx-icon fa-save">Save Changes</button>
```

- `.tx-icon`: Adds margin to the end of the element (right in LTR, left in RTL).

### Icon Vertical Alignment Fix

Correct potential vertical alignment issues with certain icon fonts:

```html
<!-- Fix icon alignment -->
<i class="icon-fix fas fa-check"></i> Sometimes icons need alignment correction.
```

- `.icon-fix`: Adjusts vertical alignment to better center the icon.

### Icon Color

Apply color to an icon using a CSS variable:

```html
<!-- Apply red color to the icon -->
<i class="pds-icon-color fas fa-heart" style="--icon-color: red;"></i>

<!-- Apply theme primary color -->
<i class="pds-icon-color fas fa-star" style="--icon-color: var(--primary-color);"></i>
```

- `.pds-icon-color`: Sets the icon's `color` property to the value of the `--icon-color` CSS variable.

### Icon Size

Increase the size of an icon relative to the surrounding text:

```html
<p>Normal text with a <i class="fas fa-star"></i> standard icon.</p>
<p>Normal text with a <i class="icon-lg fas fa-star"></i> larger icon.</p>
```

- `.icon-lg`: Makes the icon slightly larger (typically `1.2em`).

## Line Height

Control the line spacing with these utilities:

```html
<p class="lineheight-100">Line height 1.0 (no spacing)</p>
<p class="lineheight-120">Line height 1.2</p>
<p class="lineheight-130">Line height 1.3</p>
<p class="lineheight-150">Line height 1.5</p>
<p class="lineheight-160">Line height 1.6</p>
<p class="lineheight-170">Line height 1.7</p>
<p class="lineheight-180">Line height 1.8</p>
<p class="lineheight-inherit">Inherits line height from parent</p>
```

Default line height is controlled by the CSS variable `--line-height` (default: 1.625).

## Text Wrapping

Control how text wraps:

```html
<p class="tx-nowrap">This text won't wrap and shows ellipsis if it overflows</p>
<p class="tx-line-clamp">Limits text to a specific number of lines</p>
```

For `tx-line-clamp`, you can customize the number of lines with the `--max-lines` CSS variable (default: 3).

## Responsive Typography

All size and alignment classes support responsive variants by adding breakpoint suffixes:

- `-md`: Medium screens and up (≥ 768px)
- `-lg`: Large screens and up (≥ 1200px)
- `-xl`: xLarge screens and up (≥ 1400px)

Examples:

```html
<!-- Font sizes that change at different breakpoints -->
<p class="fs-14 fs-md-16 fs-lg-18">
  This text is 14px by default, 16px on medium screens, and 18px on large screens
</p>

<!-- Text alignment that changes at different breakpoints -->
<p class="tx-align-center tx-align-md-left">
  This text is centered by default and left-aligned on medium screens and up
</p>
```

## Typography Variables

Phenix Design System uses CSS variables for typography to maintain consistency:

```css
:root {
  /* Font Families */
  --primary-font: "Tajawal";
  --secondary-font: "Tajawal";
  
  /* Font Weights */
  --thin-weight: 100;
  --xlight-weight: 200;
  --light-weight: 300;
  --normal-weight: 400;
  --medium-weight: 500;
  --bold-weight: 600;
  --strong-weight: 700;
  --xbold-weight: 800;
  --black-weight: 900;
  
  /* Line Height */
  --line-height: 1.625;
  
  /* Colors */
  --typography-color: #111111;
}
```

These variables can be customized to adjust typography throughout your project. 

## Related Effects

For advanced text effects involving backgrounds, see the [Background Clip Text](../colors.md#background-clip-text) utility. 