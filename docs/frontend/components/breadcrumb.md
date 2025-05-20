# Breadcrumb

## Overview

The Breadcrumb component in the Phenix Design System provides a navigation aid that indicates the current page's location within a navigational hierarchy. It automatically adds separators between items, making it easy to show users their current location and navigation path.

## Basic Usage

Create a basic breadcrumb using an unordered list with the `.px-breadcrumb` class:

```html
<!-- Breadcrumb -->
<ul class="px-breadcrumb reset-list flexbox pdx-20 pdy-10 bg-white radius-sm mb-15 bx-shadow-dp-1 color-gray">
  <li><a href="#">Home</a></li>
  <li><a href="#">Services</a></li>
  <li>Web Design</li>
</ul>
```

## Customization

### Custom Separator

Change the default separator symbol using CSS variables:

```html
<!-- Breadcrumb with Angle Separator -->
<ul class="px-breadcrumb custom-angle reset-list flexbox pdx-20 pdy-10 bg-white radius-sm mb-15 bx-shadow-dp-1 color-gray">
  <li><a href="#">Home</a></li>
  <li><a href="#">Services</a></li>
  <li>Web Design</li>
</ul>

<!-- Breadcrumb with Double Arrow Separator -->
<ul class="px-breadcrumb custom-arrows reset-list flexbox pdx-20 pdy-10 bg-white radius-sm mb-15 bx-shadow-dp-1 color-gray">
  <li><a href="#">Home</a></li>
  <li><a href="#">Services</a></li>
  <li>Web Design</li>
</ul>
```

```css
/* Custom Angle Arrow Example */
.px-breadcrumb.custom-angle {--divider-icon: '>';}

/* Custom Double Arrow Example */
.px-breadcrumb.custom-arrows {--divider-icon: '»';}
```

### Font Icon Separator

Use a font icon as the separator by adding the `data-type="font-icon"` attribute:

```html
<!-- Breadcrumb with Font Icon Separator -->
<ul class="px-breadcrumb reset-list flexbox pdx-20 pdy-10 bg-white radius-sm mb-15 bx-shadow-dp-1 color-gray custom-icon" data-type="font-icon">
  <li><a href="#">Home</a></li>
  <li><a href="#">Services</a></li>
  <li>Web Design</li>
</ul>
```

```css
/* Custom Font Icon Example */
.px-breadcrumb.custom-icon {--divider-icon: '\f101';} /* FontAwesome angle double right */
```

### Breadcrumb with Icons

Add icons to breadcrumb items for better visual cues:

```html
<!-- Breadcrumb with Icons -->
<ul class="px-breadcrumb reset-list flexbox pdx-20 pdy-10 bg-white radius-sm mb-15 bx-shadow-dp-1 color-gray custom-icon" data-type="font-icon">
  <li><a href="#" class="tx-icon far fa-home">Home</a></li>
  <li><a href="#" class="tx-icon far fa-cog">Services</a></li>
  <li class="tx-icon far fa-star">Web Design</li>
</ul>
```

## Styling Options

### Compact Breadcrumb

Create a more compact breadcrumb by adjusting padding and font size:

```html
<ul class="px-breadcrumb reset-list flexbox pdx-15 pdy-5 fs-13 bg-white radius-sm mb-15 bx-shadow-dp-1 color-gray">
  <li><a href="#">Home</a></li>
  <li><a href="#">Services</a></li>
  <li>Web Design</li>
</ul>
```

### Colored Breadcrumb

Apply background and text colors to the breadcrumb:

```html
<ul class="px-breadcrumb reset-list flexbox pdx-20 pdy-10 bg-primary color-white radius-sm mb-15">
  <li><a href="#" class="color-white">Home</a></li>
  <li><a href="#" class="color-white">Services</a></li>
  <li>Web Design</li>
</ul>
```

## Accessibility Considerations

For better accessibility, consider the following best practices:

1. Use semantic HTML structure with `<nav>` and ARIA attributes:

```html
<nav aria-label="Breadcrumb">
  <ol class="px-breadcrumb reset-list flexbox pdx-20 pdy-10 bg-white radius-sm mb-15 bx-shadow-dp-1 color-gray">
    <li><a href="#">Home</a></li>
    <li><a href="#">Services</a></li>
    <li aria-current="page">Web Design</li>
  </ol>
</nav>
```

2. Use `aria-current="page"` to indicate the current page
3. Consider using an ordered list (`<ol>`) instead of an unordered list (`<ul>`) for breadcrumbs

## Best Practices

1. **Keep breadcrumbs simple** - use short, clear labels
2. **Show the full path** - include all levels of the hierarchy
3. **Make the current page non-clickable** - the last item should not be a link
4. **Use consistent styling** across your site
5. **Consider mobile users** - ensure breadcrumbs are usable on small screens
