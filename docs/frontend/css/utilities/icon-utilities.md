# Icon Utilities

Icon utilities in the Phenix Design System help control the appearance and positioning of icons, often used alongside icon font libraries like Font Awesome.

## Overview

These utilities address common styling needs for icons within text or components.

## Usage

### Icon Spacing

Add appropriate spacing after an icon when it precedes text, ensuring consistent alignment and readability:

```html
<!-- Add spacing after icon -->
<span class="tx-icon fa-home">Home Page</span>
<button class="btn primary tx-icon fa-save">Save Changes</button>
```

-   `.tx-icon`: Adds margin to the end of the element (right in LTR, left in RTL), creating space between the icon and the following text.

### Icon Vertical Alignment Fix

Correct potential vertical alignment issues with certain icon fonts or within specific line heights:

```html
<!-- Fix icon alignment -->
<i class="icon-fix fas fa-check"></i> Sometimes icons need alignment correction.
```

-   `.icon-fix`: Adjusts vertical alignment to better center the icon with surrounding text.

### Icon Color

Apply color to an icon using a CSS variable, allowing dynamic color changes:

```html
<!-- Apply red color to the icon -->
<i class="pds-icon-color fas fa-heart" style="--icon-color: red;"></i>

<!-- Apply theme primary color -->
<i class="pds-icon-color fas fa-star" style="--icon-color: var(--primary-color);"></i>
```

-   `.pds-icon-color`: Sets the icon's `color` property to the value of the `--icon-color` CSS variable.

### Icon Size

Increase the size of an icon relative to the surrounding text:

```html
<p>This is normal text with a <i class="fas fa-star"></i> standard icon.</p>
<p>This is normal text with a <i class="icon-lg fas fa-star"></i> larger icon.</p>
```

-   `.icon-lg`: Makes the icon slightly larger (typically `1.2em` or similar), useful for making icons more prominent.

## Use Cases

### Buttons with Icons

```html
<button class="btn primary tx-icon fa-download">Download</button>
<button class="btn secondary tx-icon fa-upload">Upload</button>
<button class="btn danger tx-icon fa-trash">Delete</button>
```

### Alert Messages

```html
<div class="alert success tx-icon fa-check-circle">Success message!</div>
<div class="alert warning tx-icon fa-exclamation-triangle">Warning message!</div>
<div class="alert danger tx-icon fa-times-circle">Error message!</div>
```

### Feature Lists

```html
<ul class="reset-list">
  <li class="tx-icon fa-check mb-10">Feature one</li>
  <li class="tx-icon fa-check mb-10">Feature two</li>
  <li class="tx-icon fa-check">Feature three</li>
</ul>
```

## Best Practices

1.  **Use with Icon Fonts/SVG**: These utilities are designed to work with icon libraries (like Font Awesome) or SVG icons used inline or as pseudo-elements.
2.  **Ensure Accessibility**: If icons convey meaning, provide alternative text for screen readers (e.g., using `aria-label` or visually hidden text).
3.  **Apply `.tx-icon` Correctly**: Use `.tx-icon` on the icon element itself or a wrapping `<span>` when the icon immediately precedes text. 