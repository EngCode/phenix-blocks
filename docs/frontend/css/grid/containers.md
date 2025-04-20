# Containers

Containers are fundamental layout elements in the Phenix Design System that provide consistent, responsive width constraints for your content. They help maintain proper alignment and spacing throughout your website or application.

## Overview

The Phenix Design System provides several container classes to control content width across different screen sizes:

- `.container` - Standard container with responsive maximum width
- `.container-fluid` - Full-width container that spans the entire viewport
- `.container-xs` - Extra small container for small content blocks
- `.container-sm` - Small container for limited width content
- `.container-md` - Medium container with moderate width
- `.container-xl` - Extra large container for wide content on large screens
- `.container-lg` - Large container similar to extra large

All containers include horizontal padding (defined by the `--container-padding` CSS variable) to provide spacing between the container's edge and its content.

## Basic Usage

```html
<!-- Standard container -->
<div class="container">
  <!-- Your content here -->
</div>

<!-- Full-width container -->
<div class="container-fluid">
  <!-- Your content here -->
</div>
```

## Container Properties

All containers share these common properties:

- Positioned relatively (`position: relative`)
- Centered horizontally (`margin-inline: auto`)
- Default padding of 15px on both sides (`--container-padding: 15px`)

## Container Sizes

Each container type has specific maximum width settings that respond to different viewport sizes:

| Container Class    | Default Max Width | Responsive Behavior |
|--------------------|-------------------|---------------------|
| `.container`       | 1200px            | Standard responsive container |
| `.container-fluid` | 100%              | Always spans the full width of the viewport |
| `.container-xs`    | 360px             | Expands to 480px on small screens |
| `.container-sm`    | 567px             | Expands to 640px on medium screens |
| `.container-md`    | 768px             | Expands to 1024px on large screens |
| `.container-xl`    | 1200px (default)  | 97% on screens under 1450px, 100% under 1100px, 1400px on 1450px+ screens |
| `.container-lg`    | 1200px (default)  | Same behavior as `.container-xl` |

## Example: Responsive Containers

```html
<!-- Standard container that adapts to screen size -->
<div class="container">
  <!-- Standard container with max-width 1200px -->
</div>

<!-- Container for small content blocks -->
<div class="container-xs">
  <!-- Extra small container starting at 360px width -->
</div>

<!-- Medium container for forms or content sections -->
<div class="container-md">
  <!-- Medium container that's 768px on small screens and 1024px on large screens -->
</div>
```

## Special Behaviors

### Large Screen Padding

On very large screens (1450px and above), the `.container-xl`, `.container-lg`, and `.container-fluid` classes increase their horizontal padding:

```scss
@media screen and (min-width: 1450px) {
  .container-xl, .container-lg, .container-fluid {
    --container-padding: 30px; /* Increased from 15px */
  }
}
```

### Container with Row

When using a `.container-fluid` with a `.row`, the system automatically corrects the negative margin of the row to align with the container padding:

```scss
.container-fluid > .row {
  margin-left: calc(var(--container-padding) * -1);
  margin-right: calc(var(--container-padding) * -1);
}
```

## Use Cases

- Use `.container` for most standard content sections
- Use `.container-fluid` when you want content to span the full width of the viewport
- Use `.container-xs` for small content blocks like login forms or narrow text columns
- Use `.container-xl` or `.container-lg` for wide content on large screens with responsive behavior
- Use size-specific containers (`.container-sm`, `.container-md`) when you need precise control over content width at different breakpoints
