# Buttons

## Overview

Buttons in the Phenix Design System provide a consistent, flexible way to trigger actions across your interface. They support various sizes, colors, states, and icon placements to meet your design needs.

## Basic Usage

Create buttons by applying the `.btn` class to elements like `<button>`, `<a>`, or `<input>` elements:

```html
<!-- Standard Button -->
<button class="btn">Button</button>

<!-- Link as Button -->
<a href="#" class="btn">Link Button</a>

<!-- Input as Button -->
<input type="submit" class="btn" value="Submit Button">
```

## Button Colors

The Phenix Design System provides a range of color options for buttons:

```html
<!-- Default Button -->
<button class="btn border-alpha-10">Default</button>

<!-- Primary Button -->
<button class="btn primary">Primary</button>

<!-- Secondary Button -->
<button class="btn secondary">Secondary</button>

<!-- Info Button -->
<button class="btn info">Info</button>

<!-- Success Button -->
<button class="btn success">Success</button>

<!-- Dark Button -->
<button class="btn dark">Dark</button>

<!-- Danger Button -->
<button class="btn danger">Danger</button>

<!-- Warning Button -->
<button class="btn warning">Warning</button>

<!-- Light Button -->
<button class="btn light">Light</button>

<!-- Disabled Button -->
<button class="btn disabled">Disabled</button>
```

## Button Sizes

Buttons come in multiple sizes to fit different design needs:

```html
<!-- Extra Tiny Button -->
<button class="btn primary xtiny">Extra Tiny</button>

<!-- Tiny Button -->
<button class="btn primary tiny">Tiny</button>

<!-- Small Button -->
<button class="btn primary small">Small</button>

<!-- Default Size Button -->
<button class="btn primary">Default</button>

<!-- Large Button -->
<button class="btn primary large">Large</button>

<!-- Extra Large Button -->
<button class="btn primary xlarge">Extra Large</button>
```

## Outline Buttons

For a lighter visual weight, use outline buttons:

```html
<!-- Default Outline Button -->
<button class="btn outline">Default</button>

<!-- Primary Outline Button -->
<button class="btn outline primary">Primary</button>

<!-- Secondary Outline Button -->
<button class="btn outline secondary">Secondary</button>

<!-- Info Outline Button -->
<button class="btn outline info">Info</button>

<!-- Success Outline Button -->
<button class="btn outline success">Success</button>

<!-- Dark Outline Button -->
<button class="btn outline dark">Dark</button>

<!-- Danger Outline Button -->
<button class="btn outline danger">Danger</button>

<!-- Warning Outline Button -->
<button class="btn outline warning">Warning</button>

<!-- Light Outline Button -->
<button class="btn outline light">Light</button>
```

## Buttons with Icons

Add icons to buttons for enhanced visual cues:

```html
<!-- Button with Icon Before Text -->
<button class="btn primary btn-icon fas fa-user">User Profile</button>

<!-- Button with Icon After Text -->
<button class="btn primary btn-icon-end fas fa-arrow-right">Next Step</button>

<!-- Outline Button with Icon -->
<button class="btn outline primary btn-icon fas fa-save">Save</button>
```

## Labeled Icon Buttons

Create buttons with labeled icons for a more distinct visual separation:

```html
<!-- Button with Labeled Icon Before Text -->
<button class="btn primary btn-icon labeled fas fa-user">User Profile</button>

<!-- Button with Labeled Icon After Text -->
<button class="btn primary btn-icon-end labeled fas fa-arrow-right">Next Step</button>
```

## Square Buttons

Create square buttons that are perfect for icon-only actions:

```html
<!-- Square Button -->
<button class="btn primary square fas fa-cog"></button>

<!-- Square Outline Button -->
<button class="btn outline primary square fas fa-star"></button>
```

## Responsive Buttons

Buttons that adapt to smaller screens by collapsing to icon-only:

```html
<!-- Responsive Button -->
<button class="btn primary btn-icon responsive-btn fas fa-user">User Profile</button>
```

## Active State

Buttons can be set to an active state:

```html
<!-- Active Button -->
<button class="btn primary active">Active Button</button>

<!-- Active Outline Button -->
<button class="btn outline primary active">Active Outline</button>
```

## Customization

Buttons can be customized using CSS variables:

```css
.btn {
  /* Sizing */
  --padding: 20px;      /* Horizontal padding */
  --height: 42px;       /* Button height */
  --text-size: 16px;    /* Font size */
  --text-weight: 400;   /* Font weight */
  --border-size: 0;     /* Border size */
  
  /* Colors */
  --color: #333;                /* Text color */
  --background: #f5f5f5;        /* Background color */
  --border-color: transparent;  /* Border color */
  
  /* Hover state */
  --color-hvr: #0066cc;         /* Text color on hover */
  --background-hvr: #e5e5e5;     /* Background color on hover */
  --border-hvr: transparent;     /* Border color on hover */
}
```

## Accessibility

For better accessibility, consider the following:

- Use appropriate color contrast between button text and background
- Ensure buttons have descriptive text or proper aria-labels for icon-only buttons
- Use the `disabled` attribute rather than just the `.disabled` class when a button is not interactive

```html
<!-- Accessible Icon-Only Button -->
<button class="btn primary square fas fa-search" aria-label="Search"></button>

<!-- Properly Disabled Button -->
<button class="btn primary" disabled>Disabled Button</button>
```

## Class Reference

| Class | Description |
|-------|-------------|
| `.btn` | Base button class |
| `.outline` | Creates an outline style button |
| `.xtiny` | Extra tiny size (22px height) |
| `.tiny` | Tiny size (30px height) |
| `.small` | Small size (36px height) |
| `.medium` | Default size (42px height) |
| `.large` | Large size (52px height) |
| `.xlarge` | Extra large size (62px height) |
| `.square` | Makes the button square (width equals height) |
| `.primary` | Primary color styling |
| `.secondary` | Secondary color styling |
| `.info` | Info color styling |
| `.success` | Success color styling |
| `.danger` | Danger color styling |
| `.warning` | Warning color styling |
| `.dark` | Dark color styling |
| `.light` | Light color styling |
| `.disabled` | Disabled styling (use with the disabled attribute) |
| `.btn-icon` | Positions an icon before the text |
| `.btn-icon-end` | Positions an icon after the text |
| `.labeled` | Creates a labeled icon section |
| `.responsive-btn` | Collapses to icon-only on small screens |
| `.active` | Applies active state styling |

## Best Practices

1. **Use color consistently** to maintain meaning across your interface (e.g., green for success, red for danger)
2. **Choose appropriate sizes** for different contexts (e.g., smaller buttons for dense UIs)
3. **Maintain adequate spacing** between adjacent buttons to prevent accidental clicks
4. **Use icons judiciously** to enhance understanding without cluttering the interface
5. **Ensure sufficient contrast** between button text and background for readability
