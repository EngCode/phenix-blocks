# Tables Style

The Phenix Design System provides clean, modern styling for tables with support for different visual variants, responsive behavior, and customizable options.

## Overview

Tables in the Phenix Design System include:

- Default, clean table styling
- Striped rows for better readability
- Bordered tables with full grid lines
- Borderless tables for minimal styling
- Responsive table support for mobile devices

## Basic Usage

To create a standard table, simply add the `.table` class to your table element:

```html
<table class="table">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
    <tr>
      <td>Data 4</td>
      <td>Data 5</td>
      <td>Data 6</td>
    </tr>
  </tbody>
</table>
```

The `.table` class provides:
- 100% width by default
- Collapse border model
- Bottom borders for rows
- Balanced padding for cells
- No styling for backgrounds (can be added via options)

## Table Variants

### Striped Table

Add the `.striped` class to create alternating background colors for rows, which improves readability for tables with many rows:

```html
<table class="table striped">
  <!-- table content -->
</table>
```

Striped tables use the `--table-striped` color variable (default: #f4f4f4) for the alternating row backgrounds.

### Bordered Table

Add the `.bordered` class to create a fully bordered table with grid lines between all cells:

```html
<table class="table bordered">
  <!-- table content -->
</table>
```

Bordered tables use the `--table-border` variable (default: 1px solid rgba(0,0,0, 0.1)) for all borders.

### Borderless Table

Add the `.borderless` class to remove all borders from the table:

```html
<table class="table borderless">
  <!-- table content -->
</table>
```

This creates a minimal table with no visible borders, useful for simple data presentation or when borders would clutter the design.

## Responsive Tables

For tables with many columns that might not fit on mobile screens, wrap your table in a `.table-responsive` container:

```html
<div class="table-responsive">
  <table class="table">
    <!-- table with many columns -->
  </table>
</div>
```

This creates a horizontally scrollable container when the table is too wide for the viewport.

### Breakpoint-Specific Responsive Containers

You can apply responsive behavior at specific breakpoints:

```html
<!-- Only becomes scrollable on small screens and below -->
<div class="table-responsive-sm">
  <table class="table"><!-- table content --></table>
</div>

<!-- Only becomes scrollable on medium screens and below -->
<div class="table-responsive-md">
  <table class="table"><!-- table content --></table>
</div>

<!-- Only becomes scrollable on large screens and below -->
<div class="table-responsive-lg">
  <table class="table"><!-- table content --></table>
</div>

<!-- Only becomes scrollable on extra-large screens and below -->
<div class="table-responsive-xl">
  <table class="table"><!-- table content --></table>
</div>
```

Each responsive table variant has a pre-defined table width appropriate for that breakpoint.

## Customization Options

Tables in Phenix Design System can be customized using CSS variables:

```css
.table {
  --table-background: inherit;  /* Table background color */
  --table-head-bg: inherit;     /* Header background color */
  --table-striped: #f4f4f4;     /* Striped row background */
  --table-border: 1px solid rgba(0,0,0, 0.1); /* Border style */
  --table-padding: 15px;        /* Cell padding */
  --table-radius: 5px;          /* Border radius (when applicable) */
}
```

You can override these variables for individual tables or globally in your stylesheet.

## WordPress Integration

For WordPress users, the styling automatically applies to WordPress-generated tables:

```html
<!-- WordPress block editor table -->
<figure class="wp-block-table">
  <table>
    <!-- table content -->
  </table>
</figure>
```

The styling will be applied to all `wp-block-table table` elements.

## Table Cell Spacing

The Phenix Design System uses different padding for header and data cells:

- Header cells (`<th>`) get slightly more vertical padding (--table-padding / 1.5)
- Data cells (`<td>`) get slightly less vertical padding (--table-padding / 2.25)
- All cells get the full horizontal padding (--table-padding)

This creates a visual hierarchy that distinguishes headers from data.

## Combining Table Styles

You can combine table variants for different effects:

```html
<!-- Striped and bordered table -->
<table class="table striped bordered">
  <!-- table content -->
</table>
```

## Examples

### Basic Data Table

```html
<table class="table">
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Stock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Product A</td>
      <td>$19.99</td>
      <td>In Stock</td>
    </tr>
    <tr>
      <td>Product B</td>
      <td>$29.99</td>
      <td>Limited</td>
    </tr>
    <tr>
      <td>Product C</td>
      <td>$39.99</td>
      <td>Out of Stock</td>
    </tr>
  </tbody>
</table>
```

### Striped Pricing Table

```html
<table class="table striped">
  <thead>
    <tr>
      <th>Plan</th>
      <th>Features</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Basic</td>
      <td>5 Users, 10GB Storage</td>
      <td>$29/month</td>
      <td><button class="btn primary">Select</button></td>
    </tr>
    <tr>
      <td>Pro</td>
      <td>25 Users, 100GB Storage</td>
      <td>$99/month</td>
      <td><button class="btn primary">Select</button></td>
    </tr>
    <tr>
      <td>Enterprise</td>
      <td>Unlimited Users, 1TB Storage</td>
      <td>$199/month</td>
      <td><button class="btn primary">Select</button></td>
    </tr>
  </tbody>
</table>
```

### Responsive Table with Many Columns

```html
<div class="table-responsive">
  <table class="table bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip</th>
        <th>Country</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>(123) 456-7890</td>
        <td>123 Main St</td>
        <td>Anytown</td>
        <td>CA</td>
        <td>12345</td>
        <td>USA</td>
        <td><button class="btn">Edit</button></td>
      </tr>
      <!-- More rows -->
    </tbody>
  </table>
</div>
```
