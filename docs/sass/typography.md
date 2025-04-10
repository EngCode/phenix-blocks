# Typography

The Phenix Design System includes a comprehensive typography system that provides consistent text styling across your project. From headings to paragraph text, font weights to text alignment, the typography utilities make it easy to create readable and visually appealing content.

## Font Families

Phenix allows you to define and use different font families throughout your project:

```css
.primary-font {font-family: var(--primary-font);}
.secondary-font {font-family: var(--secondary-font);}
.style-font {font-family: var(--style-font, var(--primary-font));}
```

The default font families are defined in CSS variables and can be customized in the `_customize.scss` file:

```scss
:root {
    --primary-font: "Tajawal";
    --secondary-font: "Tajawal";
}
```

## Headings

Phenix provides consistent styling for HTML headings (`h1` through `h6`):

| Element | Font Size   |
|---------|-------------|
| `h1`    | 32px (2rem) |
| `h2`    | 28px (1.75rem) |
| `h3`    | 25px (1.56rem) |
| `h4`    | 23px (1.44rem) |
| `h5`    | 20px (1.25rem) |
| `h6`    | 17px (1.06rem) |

### Heading Classes

You can apply heading styles to any element using the following classes:

```html
<div class="h1">This looks like an h1</div>
<div class="h2">This looks like an h2</div>
<div class="h3">This looks like an h3</div>
<div class="h4">This looks like an h4</div>
<div class="h5">This looks like an h5</div>
<div class="h6">This looks like an h6</div>
```

### Display Headings

For larger, more impactful headings, Phenix offers display heading classes:

| Class | Font Size |
|-------|-----------|
| `.display-h1` | 62px (3.88rem) |
| `.display-h2` | 52px (3.25rem) |
| `.display-h3` | 48px (3rem) |
| `.display-h4` | 44px (2.75rem) |
| `.display-h5` | 40px (2.5rem) |
| `.display-h6` | 36px (2.25rem) |

```html
<h1 class="display-h1">Large Headline</h1>
```

## Text Sizes

Control the font size of text with these utility classes:

| Class | Description | Size |
|-------|-------------|------|
| `.fs-12`, `.tiny-text` | Tiny text | 12px (0.75rem) |
| `.fs-13` | Very small text | 13px (0.81rem) |
| `.fs-14`, `.small-text` | Small text | 14px (0.88rem) |
| `.fs-15` | Smaller than default | 15px (0.94rem) |
| `.fs-16` | Default size | 16px (1rem) |
| `.fs-17` | Slightly larger | 17px (1.06rem) |
| `.fs-18`, `.large-text` | Large text | 18px (1.13rem) |
| `.fs-19` | Larger text | 19px (1.19rem) |
| `.fs-20`, `.xlarge-text` | Extra large text | 20px (1.25rem) |
| `.fs-22` | Very large text | 22px (1.38rem) |
| `.fs-24` | Heading size | 24px (1.5rem) |
| `.fs-25` | Larger heading | 25px (1.56rem) |
| `.fs-26` | Subheading | 26px (1.63rem) |
| `.fs-28` | Medium heading | 28px (1.75rem) |
| `.fs-30` | Large heading | 30px (1.88rem) |

```html
<p class="fs-14">This is small text</p>
<p class="fs-18">This is large text</p>
```

You can also inherit the font size from a parent element:

```html
<div class="fs-20">
  This is 20px text
  <span class="fs-inherit">This will also be 20px</span>
</div>
```

## Text Utilities

Phenix provides various text utilities for common styling needs:

### Text Transformation

```html
<p class="tx-uppercase">This will be uppercase</p>
<p class="tx-capitalize">this will capitalize each word</p>
<p class="tx-italic">This will be italic</p>
```

### Text Decoration

```html
<p class="tx-underline">This will have an underline</p>
<p class="tx-line-through">This will have a strikethrough</p>
```

### Text Truncation

For single-line truncation with ellipsis:

```html
<p class="tx-nowrap">This text will be truncated with ellipsis if it's too long for one line</p>
```

For multi-line truncation:

```html
<p class="tx-line-clamp" style="--max-lines: 2;">
  This text will be limited to 2 lines and will show ellipsis if it's longer.
  The default is 3 lines if --max-lines is not specified.
</p>
```

## Font Weight

Control the weight of text with these utility classes:

| Class | Description |
|-------|-------------|
| `.weight-thin` | Very thin text (100) |
| `.weight-xlight` | Extra light text (200) |
| `.weight-light` | Light text (300) |
| `.weight-normal` | Normal text (400) |
| `.weight-medium` | Medium text (500) |
| `.weight-bold` | Bold text (600) |
| `.weight-strong` | Strong text (700) |
| `.weight-xbold` | Extra bold text (800) |
| `.weight-black` | Black text (900) |

```html
<p class="weight-light">This is light text</p>
<p class="weight-normal">This is normal text</p>
<p class="weight-bold">This is bold text</p>
```

The actual weight values are defined in CSS variables and can be customized:

```scss
:root {
    --thin-weight   : 100;
    --xlight-weight : 200;
    --light-weight  : 300;
    --normal-weight : 400;
    --medium-weight : 500;
    --bold-weight   : 600;
    --strong-weight : 700;
    --xbold-weight  : 800;
    --black-weight  : 900;
}
```

## Line Height

Control the line height of text with these utility classes:

| Class | Line Height |
|-------|-------------|
| `.lineheight-100` | 1.0 |
| `.lineheight-120` | 1.2 |
| `.lineheight-130` | 1.3 |
| `.lineheight-150` | 1.5 |
| `.lineheight-160` | 1.6 |
| `.lineheight-170` | 1.7 |
| `.lineheight-180` | 1.8 |
| `.lineheight-inherit` | Inherit from parent |

```html
<p class="lineheight-150">This text has 1.5 line height spacing</p>
```

## Text Alignment

Control the alignment of text with these utility classes:

| Class | Description |
|-------|-------------|
| `.tx-align-start` | Align text to the start (left in LTR, right in RTL) |
| `.tx-align-end` | Align text to the end (right in LTR, left in RTL) |
| `.tx-align-left` | Always align text to the left |
| `.tx-align-right` | Always align text to the right |
| `.tx-align-center` | Center text |
| `.tx-align-justify` | Justify text |

```html
<p class="tx-align-center">This text is centered</p>
<p class="tx-align-justify">This text is justified and will stretch to fill the width of its container when there are multiple lines.</p>
```

## Responsive Typography

All typography classes have responsive variants using breakpoint prefixes:

- `-md` for medium screens (≥768px)
- `-lg` for large screens (≥1024px)
- `-xl` for extra-large screens (≥1200px)

For example:

```html
<!-- Text will be 16px by default, 20px on medium screens, 24px on large screens -->
<p class="fs-16 fs-md-20 fs-lg-24">Responsive text</p>

<!-- Left-aligned by default, centered on medium screens -->
<h2 class="tx-align-left tx-align-md-center">Responsive headline</h2>
```

This allows you to create responsive typography that adapts to different screen sizes. 