# Typography

The Phenix Design System provides a comprehensive set of typography utility classes that allow you to control font families, sizes, weights, alignments, and text styles throughout your project without writing custom CSS.

## Overview

The typography utilities in Phenix Design System include:

- Font family classes
- Heading size utilities
- Display headline classes
- Text size utilities
- Text alignment controls
- Font weight classes
- Line height utilities
- Text transformation utilities
- Text overflow handling
- Responsive variants of all typography utilities

## Font Families

Control the font family with simple utility classes:

```html
<p class="primary-font">Uses the primary font family</p>
<p class="secondary-font">Uses the secondary font family</p>
<p class="style-font">Uses the style font (or primary font if not defined)</p>
```

These classes apply the font family variables defined in your theme.

## Heading Sizes

The framework provides both standard heading elements (h1-h6) and utility classes for heading sizes:

```html
<!-- Standard heading elements -->
<h1>Heading 1 (32px)</h1>
<h2>Heading 2 (28px)</h2>
<h3>Heading 3 (25px)</h3>
<h4>Heading 4 (23px)</h4>
<h5>Heading 5 (20px)</h5>
<h6>Heading 6 (17px)</h6>

<!-- Heading classes (can be applied to any element) -->
<div class="h1">Heading 1 Size (32px)</div>
<div class="h2">Heading 2 Size (28px)</div>
<div class="h3">Heading 3 Size (25px)</div>
<div class="h4">Heading 4 Size (23px)</div>
<div class="h5">Heading 5 Size (20px)</div>
<div class="h6">Heading 6 Size (17px)</div>
```

## Display Headlines

For larger, more impactful headlines, use the display headline classes:

```html
<h1 class="display-h1">Display Heading 1 (62px)</h1>
<h1 class="display-h2">Display Heading 2 (52px)</h1>
<h1 class="display-h3">Display Heading 3 (48px)</h1>
<h1 class="display-h4">Display Heading 4 (44px)</h1>
<h1 class="display-h5">Display Heading 5 (40px)</h1>
<h1 class="display-h6">Display Heading 6 (36px)</h1>
```

These are particularly useful for hero sections, banners, and other prominent page elements.

## Text Sizes

Control the size of text with specific size classes:

```html
<p class="fs-12">Tiny text (12px)</p>
<p class="tiny-text">Tiny text (12px)</p>

<p class="fs-14">Small text (14px)</p>
<p class="small-text">Small text (14px)</p>

<p class="fs-16">Normal text (16px)</p>

<p class="fs-18">Large text (18px)</p>
<p class="large-text">Large text (18px)</p>

<p class="fs-20">Extra large text (20px)</p>
<p class="xlarge-text">Extra large text (20px)</p>

<!-- Specific sizes -->
<p class="fs-13">13px text</p>
<p class="fs-15">15px text</p>
<p class="fs-17">17px text</p>
<p class="fs-19">19px text</p>
<p class="fs-22">22px text</p>
<p class="fs-24">24px text</p>
<p class="fs-25">25px text</p>
<p class="fs-26">26px text</p>
<p class="fs-28">28px text</p>
<p class="fs-30">30px text</p>

<!-- Inherit font size from parent -->
<p class="fs-inherit">Inherits font size</p>
```

## Text Alignment

Control text alignment with these utility classes:

```html
<p class="tx-align-start">Aligned to the start (left in LTR, right in RTL)</p>
<p class="tx-align-center">Centered text</p>
<p class="tx-align-end">Aligned to the end (right in LTR, left in RTL)</p>
<p class="tx-align-left">Always left-aligned (regardless of text direction)</p>
<p class="tx-align-right">Always right-aligned (regardless of text direction)</p>
<p class="tx-align-justify">Justified text (full-width)</p>
```

## Text Overflow

Manage how text overflows its container:

```html
<!-- Prevent text wrapping with ellipsis -->
<p class="tx-nowrap">This text won't wrap and will be truncated with an ellipsis if it's too long</p>

<!-- Limit text to a specific number of lines -->
<p class="tx-line-clamp" style="--max-lines: 2;">
  This text will be limited to 2 lines and will show an ellipsis if it exceeds that.
  The number of lines can be customized using the --max-lines CSS variable.
</p>
```

## Font Weight

Control the weight (boldness) of text:

```html
<p class="weight-thin">Thin text (100)</p>
<p class="weight-xlight">Extra Light text (200)</p>
<p class="weight-light">Light text (300)</p>
<p class="weight-normal">Normal text (400)</p>
<p class="weight-medium">Medium text (500)</p>
<p class="weight-bold">Bold text (600)</p>
<p class="weight-strong">Strong text (700)</p>
<p class="weight-xbold">Extra Bold text (800)</p>
<p class="weight-black">Black text (900)</p>
```

The actual weight values are defined using CSS variables, allowing for theme customization.

## Line Height

Control the line height (vertical spacing) of text:

```html
<p class="lineheight-100">Line height 1.0 (compact)</p>
<p class="lineheight-120">Line height 1.2</p>
<p class="lineheight-130">Line height 1.3</p>
<p class="lineheight-150">Line height 1.5</p>
<p class="lineheight-160">Line height 1.6</p>
<p class="lineheight-170">Line height 1.7</p>
<p class="lineheight-180">Line height 1.8 (spacious)</p>
<p class="lineheight-inherit">Inherits line height from parent</p>
```

## Text Transformations

Apply various text transformations:

```html
<p class="tx-uppercase">Uppercase text</p>
<p class="tx-capitalize">capitalized text</p>
<p class="tx-italic">Italic text</p>
<p class="tx-underline">Underlined text</p>
<p class="tx-line-through">Strikethrough text</p>
```

## Responsive Typography

All typography utilities have responsive variants that apply at specific breakpoints:

```html
<!-- Font size that changes at different screen sizes -->
<p class="fs-16 fs-md-18 fs-lg-20">
  This text is 16px on small screens, 18px on medium screens, and 20px on large screens
</p>

<!-- Responsive text alignment -->
<p class="tx-align-center tx-align-md-left">
  This text is centered on small screens and left-aligned on medium screens and up
</p>

<!-- Responsive display headlines -->
<h1 class="h2 display-md-h1">
  This is a smaller heading on mobile and a display headline on larger screens
</h1>
```

Available responsive prefixes:
- No prefix: All screen sizes
- `-md`: Medium screens and up
- `-lg`: Large screens and up
- `-xl`: Extra large screens and up

## Combining Typography Classes

Typography utility classes can be combined to achieve complex text styling:

```html
<h2 class="tx-uppercase weight-light tx-align-center lineheight-120">
  An uppercase, light-weight, centered heading with tighter line spacing
</h2>

<p class="fs-14 tx-align-justify weight-medium lineheight-170 tx-md-align-left">
  A smaller, medium-weight paragraph with wide line spacing that's justified on 
  mobile and left-aligned on larger screens
</p>
```

## Typography Variables

The typography system uses CSS variables for consistent theming:

```css
:root {
  /* Font Families */
  --primary-font: 'Your Heading Font', sans-serif;
  --secondary-font: 'Your Body Font', sans-serif;
  --style-font: 'Your Accent Font', cursive;
  
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
  
  /* Line Heights */
  --line-height: 1.6;
}
```

You can customize these variables to match your brand guidelines.
