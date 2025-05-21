# Pagination

## Overview

The Pagination component in the Phenix Design System provides a flexible way to create navigation controls for paginated content. It's built using utility classes and can be customized to fit various design requirements.

## Basic Usage

Create a basic pagination component using unordered lists with the `.pagination` class and flexbox utilities:

```html
<!-- Basic Pagination -->
<ul class="reset-list pagination flexbox">
  <li class="me-10"><a href="#" class="btn">Previous</a></li>
  <li class="me-10"><a href="#" class="btn square primary">1</a></li>
  <li class="me-10"><a href="#" class="btn square">2</a></li>
  <li class="me-10"><a href="#" class="btn square">3</a></li>
  <li class="me-10"><a href="#" class="btn">Next</a></li>
</ul>
```

## Pagination Styles

### Standard Pagination

The standard pagination uses text labels for previous and next buttons:

```html
<ul class="reset-list pagination flexbox">
  <li class="me-10"><a href="#" class="btn">Previous Page</a></li>
  <li class="me-10"><a href="#" class="btn square primary">1</a></li>
  <li class="me-10"><a href="#" class="btn square">2</a></li>
  <li class="me-10"><a href="#" class="btn square">3</a></li>
  <li class="me-10"><a href="#" class="btn square">4</a></li>
  <li class="me-10"><a href="#" class="btn square">5</a></li>
  <li class="me-10"><a href="#" class="btn">Next Page</a></li>
</ul>
```

### Icon Pagination

Use icons for previous and next buttons for a more compact design:

```html
<ul class="reset-list pagination flexbox">
  <li class="me-10"><a href="#" class="btn square far fa-angle-left"></a></li>
  <li class="me-10"><a href="#" class="btn square primary">1</a></li>
  <li class="me-10"><a href="#" class="btn square">2</a></li>
  <li class="me-10"><a href="#" class="btn square">3</a></li>
  <li class="me-10"><a href="#" class="btn square">4</a></li>
  <li class="me-10"><a href="#" class="btn square far fa-angle-right"></a></li>
</ul>
```

### Compact Pagination

For a more compact design, use square buttons for all elements:

```html
<ul class="reset-list pagination flexbox">
  <li class="me-5"><a href="#" class="btn square small far fa-angle-left"></a></li>
  <li class="me-5"><a href="#" class="btn square small primary">1</a></li>
  <li class="me-5"><a href="#" class="btn square small">2</a></li>
  <li class="me-5"><a href="#" class="btn square small">3</a></li>
  <li class="me-5"><a href="#" class="btn square small far fa-angle-right"></a></li>
</ul>
```

## Alignment Options

Align pagination components using flexbox utilities:

### Left-Aligned (Default)

```html
<ul class="reset-list pagination flexbox">
  <li class="me-10"><a href="#" class="btn square far fa-angle-left"></a></li>
  <li class="me-10"><a href="#" class="btn square primary">1</a></li>
  <li class="me-10"><a href="#" class="btn square">2</a></li>
  <li class="me-10"><a href="#" class="btn square far fa-angle-right"></a></li>
</ul>
```

### Center-Aligned

```html
<ul class="reset-list pagination flexbox align-center-x">
  <li class="me-10"><a href="#" class="btn square far fa-angle-left"></a></li>
  <li class="me-10"><a href="#" class="btn square primary">1</a></li>
  <li class="me-10"><a href="#" class="btn square">2</a></li>
  <li class="me-10"><a href="#" class="btn square far fa-angle-right"></a></li>
</ul>
```

### Right-Aligned

```html
<ul class="reset-list pagination flexbox align-end-x">
  <li class="me-10"><a href="#" class="btn square far fa-angle-left"></a></li>
  <li class="me-10"><a href="#" class="btn square primary">1</a></li>
  <li class="me-10"><a href="#" class="btn square">2</a></li>
  <li class="me-10"><a href="#" class="btn square far fa-angle-right"></a></li>
</ul>
```

## Customization

### Button Styles

Customize the appearance of pagination buttons using button utility classes:

```html
<!-- Outline Buttons -->
<ul class="reset-list pagination flexbox">
  <li class="me-10"><a href="#" class="btn outline square far fa-angle-left"></a></li>
  <li class="me-10"><a href="#" class="btn outline square primary">1</a></li>
  <li class="me-10"><a href="#" class="btn outline square">2</a></li>
  <li class="me-10"><a href="#" class="btn outline square far fa-angle-right"></a></li>
</ul>

<!-- Rounded Buttons -->
<ul class="reset-list pagination flexbox">
  <li class="me-10"><a href="#" class="btn radius-rounded square far fa-angle-left"></a></li>
  <li class="me-10"><a href="#" class="btn radius-rounded square primary">1</a></li>
  <li class="me-10"><a href="#" class="btn radius-rounded square">2</a></li>
  <li class="me-10"><a href="#" class="btn radius-rounded square far fa-angle-right"></a></li>
</ul>

<!-- Custom Colors -->
<ul class="reset-list pagination flexbox">
  <li class="me-10"><a href="#" class="btn square secondary far fa-angle-left"></a></li>
  <li class="me-10"><a href="#" class="btn square success">1</a></li>
  <li class="me-10"><a href="#" class="btn square info">2</a></li>
  <li class="me-10"><a href="#" class="btn square secondary far fa-angle-right"></a></li>
</ul>
```

### Sizes

Adjust the size of pagination buttons:

```html
<!-- Small Pagination -->
<ul class="reset-list pagination flexbox">
  <li class="me-5"><a href="#" class="btn small square far fa-angle-left"></a></li>
  <li class="me-5"><a href="#" class="btn small square primary">1</a></li>
  <li class="me-5"><a href="#" class="btn small square">2</a></li>
  <li class="me-5"><a href="#" class="btn small square far fa-angle-right"></a></li>
</ul>

<!-- Large Pagination -->
<ul class="reset-list pagination flexbox">
  <li class="me-15"><a href="#" class="btn large square far fa-angle-left"></a></li>
  <li class="me-15"><a href="#" class="btn large square primary">1</a></li>
  <li class="me-15"><a href="#" class="btn large square">2</a></li>
  <li class="me-15"><a href="#" class="btn large square far fa-angle-right"></a></li>
</ul>
```

## Advanced Usage

### Pagination with Ellipsis

For large page counts, use ellipsis to indicate skipped pages:

```html
<ul class="reset-list pagination flexbox">
  <li class="me-10"><a href="#" class="btn square far fa-angle-left"></a></li>
  <li class="me-10"><a href="#" class="btn square primary">1</a></li>
  <li class="me-10"><a href="#" class="btn square">2</a></li>
  <li class="me-10"><a href="#" class="btn square">3</a></li>
  <li class="me-10"><span class="btn square disabled">...</span></li>
  <li class="me-10"><a href="#" class="btn square">8</a></li>
  <li class="me-10"><a href="#" class="btn square">9</a></li>
  <li class="me-10"><a href="#" class="btn square">10</a></li>
  <li class="me-10"><a href="#" class="btn square far fa-angle-right"></a></li>
</ul>
```

### Disabled States

Use the `disabled` class to indicate unavailable navigation options:

```html
<ul class="reset-list pagination flexbox">
  <li class="me-10"><a href="#" class="btn square disabled far fa-angle-left"></a></li>
  <li class="me-10"><a href="#" class="btn square primary">1</a></li>
  <li class="me-10"><a href="#" class="btn square">2</a></li>
  <li class="me-10"><a href="#" class="btn square">3</a></li>
  <li class="me-10"><a href="#" class="btn square far fa-angle-right"></a></li>
</ul>
```

### Pagination with Page Information

Add page information alongside pagination controls:

```html
<div class="flexbox align-between align-center-y">
  <p class="fs-14">Showing 1-10 of 50 items</p>
  <ul class="reset-list pagination flexbox">
    <li class="me-10"><a href="#" class="btn square far fa-angle-left"></a></li>
    <li class="me-10"><a href="#" class="btn square primary">1</a></li>
    <li class="me-10"><a href="#" class="btn square">2</a></li>
    <li class="me-10"><a href="#" class="btn square">3</a></li>
    <li class="me-10"><a href="#" class="btn square far fa-angle-right"></a></li>
  </ul>
</div>
```

## Integration with DataTable

The Pagination component is automatically integrated with the DataTable component:

```html
<div class="px-datatable" data-items="10">
  <table class="table">
    <!-- Table content -->
  </table>
</div>

<script>
  Phenix('.px-datatable').datatable();
</script>
```

The DataTable component will automatically generate pagination controls based on the number of rows and the `data-items` attribute.

## Accessibility

For better accessibility, consider adding appropriate ARIA attributes and roles:

```html
<nav aria-label="Pagination">
  <ul class="reset-list pagination flexbox">
    <li class="me-10">
      <a href="#" class="btn" aria-label="Previous page">Previous</a>
    </li>
    <li class="me-10">
      <a href="#" class="btn square primary" aria-current="page">1</a>
    </li>
    <li class="me-10">
      <a href="#" class="btn square">2</a>
    </li>
    <li class="me-10">
      <a href="#" class="btn square">3</a>
    </li>
    <li class="me-10">
      <a href="#" class="btn" aria-label="Next page">Next</a>
    </li>
  </ul>
</nav>
```

## Best Practices

1. **Use clear labels** or icons for navigation controls
2. **Highlight the current page** to provide context to users
3. **Consider responsive design** for different screen sizes
4. **Keep pagination accessible** by using proper ARIA attributes
5. **Limit the number of page links** shown at once for better usability
6. **Provide context** about the total number of pages or items when possible
