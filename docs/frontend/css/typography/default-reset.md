# Typography Default Resets

The Phenix Design System includes a comprehensive set of typography resets to ensure consistent text rendering across different browsers and platforms. These resets provide a clean foundation upon which to build your website or application.

## Overview

The typography reset in Phenix Design System addresses several key areas:

- Base font settings for HTML and body
- Headings (h1-h6) reset
- Paragraph settings
- Inline text elements (strong, small, links, etc.)
- Lists
- Responsive font sizing

These resets are applied automatically when you include the Phenix framework, creating a consistent typographic baseline for your project.

## Base Font Settings

The framework sets default font properties for the `html` and `body` elements:

```css
html, body {
  direction: $direction;
  font-size: var(--current-rem);
  line-height: var(--line-height);
  hanging-punctuation: first last;
  font-family: var(--secondary-font), "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-variant-numeric: tabular-nums;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
  padding: 0;
  position: relative;
  background: var(--body-bg);
  color: var(--typography-color);
}
```

Key features:
- Font smoothing for cleaner text rendering
- Support for emoji fonts
- Numeric characters set to tabular form for better alignment
- Direction support for RTL/LTR layouts
- Font size based on responsive REM units

## Headings Reset

All heading elements (h1-h6) receive consistent default styling:

```css
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  text-wrap: pretty;
  margin-bottom: .5rem;
  font-family: var(--primary-font);
  font-weight: var(--strong-weight);
}
```

Key features:
- Zero top margin with a small bottom margin
- Uses primary font family by default
- Consistent bold weight
- Modern text wrapping for better readability
- Inherits color for nested links

## Paragraph Reset

Paragraphs receive simple, clean styling:

```css
p {
  text-wrap: pretty;
  margin-bottom: 1rem;
}

p:last-child {
  margin-bottom: 0;
}
```

The last paragraph in a container has its bottom margin removed to prevent unwanted spacing.

## Inline Text Elements

Various inline text elements receive specific resets:

```css
/* Strong and Bold */
b, strong {
  font-weight: var(--strong-weight);
}

/* Small Text */
small {
  font-size: 0.8rem;
}

/* Italic Text */
dfn {
  font-style: italic;
}

/* Code, Keyboard, etc. */
pre, code, kbd, samp {
  font-size: 1em;
  font-family: inherit;
}

/* Subscript and Superscript */
sub, sup {
  line-height: 0;
  font-size: 0.75rem;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25rem;
}

sup {
  top: -0.5rem;
}
```

## Links Reset

Links receive special treatment to ensure consistent styling:

```css
a {
  color: var(--links-color, inherit);
}

a:where(:not(.wp-element-button):not([class*="color-"])) {
  color: var(--links-color, inherit);
}

a, .reset-link, .px-navigation a, .btn {
  text-decoration: none !important;
  -webkit-text-decoration-skip: objects;
  text-decoration-skip: objects;
}
```

The framework removes underlines from links by default but preserves accessible color changes.

## Lists Reset

Lists (ul, ol, dl) receive standardized spacing and styling:

```css
ul, ol {
  margin-top: 0;
  padding-inline: REM(25);
}

dl {
  margin-bottom: REM(25);
}

dt {
  font-weight: 700;
}

dt + dd {
  margin-top: .25rem;
}

dt:not(:first-child) {
  margin-top: .5rem;
}

dd {
  margin-inline: 0;
  padding-inline: REM(15);
}
```

## Responsive Font Sizing

Phenix Design System implements a responsive REM base that adjusts the root font size based on screen size:

```css
:root {
  --current-rem: var(--rem-xs);
  
  /* Small Screens */
  @include small() {
    --current-rem: var(--rem-sm);
  }
  
  /* Medium Screens */
  @include medium() {
    --current-rem: var(--rem-md);
  }
  
  /* Large Screens */
  @include large() {
    --current-rem: var(--rem-lg);
  }
  
  /* xLarge Screens */
  @include xlarge() {
    --current-rem: var(--rem-xl);
  }
}
```

This allows all REM-based measurements to scale proportionally across different screen sizes.

## High-Resolution Displays

For high-resolution displays, the framework adds specific font size adjustments:

```css
/* FHD, UHD, 2K (4:3, 16:9, 21:9, 5:3) */
@media screen and (min-width: 1600px) {
  body, html {
    font-size: 0.93vw;
  }
}

/* 4K, 8K (4:3, 16:9, 21:9, 5:3) */
@media screen and (min-width: 2500px) {
  body, html {
    font-size: 1vw;
  }
}
```

This ensures text remains readable on very large or high-density displays.

## Media Element Resets

Images and SVG elements also receive typography-related resets:

```css
img {
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}
```

## Focus State

The framework includes accessibility-friendly focus states for text-related elements:

```css
a:focus, a:active, button:active, button:focus {
  outline: 1px dashed var(--primary-color);
}
```

## Other Resets

Additional typography-related resets include:

```css
mark {
  background-color: var(--warning-light);
  color: var(--light-reverse);
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
}
```

## Using the Resets

No additional classes are needed to use these resets - they are automatically applied when you include the Phenix Design System in your project. However, you can customize the CSS variables used by these resets to tailor the typography to your brand.
