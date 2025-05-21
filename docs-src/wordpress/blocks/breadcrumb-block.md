# Breadcrumb Block

## Overview

The Breadcrumb Block is a navigation component in the Phenix Design System that displays a path of links showing the user's location within the website's hierarchy. It helps users understand their current position and provides easy navigation to parent and ancestor pages. The breadcrumb trail automatically updates based on the current page context and site structure.

<!-- Image placeholder for Breadcrumb Block -->

## Key Features

- Automatic generation of breadcrumb trails based on page hierarchy
- Support for custom breadcrumb paths and labels
- Various separator options (slash, arrow, custom icon)
- Customizable styling for breadcrumb items and separators
- Responsive design that adapts to different screen sizes
- Schema markup for improved SEO
- Integration with WordPress taxonomies and post types

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Breadcrumb" or find it in the "Phenix Blocks" category
3. Add the Breadcrumb Block to your page
4. Customize the breadcrumb settings in the block sidebar

## Block Settings

### Breadcrumb Options

| Option | Description |
|--------|-------------|
| Source | Choose between automatic or custom breadcrumb generation |
| Show Home | Include the home page in the breadcrumb trail |
| Home Label | Customize the label for the home page link |
| Show Current | Include the current page in the breadcrumb trail |
| Current as Link | Make the current page item a clickable link |

### Separator Options

| Option | Description |
|--------|-------------|
| Separator Type | Choose between text, icon, or custom separator |
| Separator Text | Set a text character for the separator (e.g., "/", ">") |
| Separator Icon | Select an icon for the separator |
| Separator Spacing | Control the space around separators |

### Style Options

| Option | Description |
|--------|-------------|
| Text Color | Set the color of breadcrumb item text |
| Link Color | Set the color of breadcrumb links |
| Active Color | Set the color of the current/active breadcrumb item |
| Separator Color | Set the color of the separator |
| Background | Add a background color or gradient |
| Padding | Add internal spacing around the breadcrumb container |
| Border | Add borders with custom color, width, and style |
| Border Radius | Add rounded corners to the breadcrumb container |

### Schema Options

| Option | Description |
|--------|-------------|
| Enable Schema | Add schema.org markup for improved SEO |
| Schema Type | Select the type of schema markup to use |

### Responsive Options

| Option | Description |
|--------|-------------|
| Mobile Display | Control how breadcrumbs appear on mobile devices |
| Hide on Mobile | Option to hide breadcrumbs on mobile devices |
| Truncate on Mobile | Show only the last few items on mobile devices |

## Examples

### Basic Breadcrumb

A standard breadcrumb trail with default settings:

```html
<!-- wp:phenix/breadcrumb -->
<nav class="wp-block-phenix-breadcrumb px-breadcrumb" aria-label="Breadcrumb">
  <ol class="reset-list">
    <li><a href="/">Home</a></li>
    <li><span class="separator">/</span><a href="/category/blog">Blog</a></li>
    <li><span class="separator">/</span><span class="current">Current Page Title</span></li>
  </ol>
</nav>
<!-- /wp:phenix/breadcrumb -->
```

### Styled Breadcrumb with Icon Separator

A breadcrumb with custom styling and icon separators:

```html
<!-- wp:phenix/breadcrumb {"separatorType":"icon","separatorIcon":"fas fa-angle-right","textColor":"#333333","linkColor":"#0073aa","activeColor":"#666666","separatorColor":"#999999","padding":"sm","backgroundColor":"#f5f5f5","borderRadius":"sm"} -->
<nav class="wp-block-phenix-breadcrumb px-breadcrumb pdy-10 pdx-15 bg-color radius-sm" aria-label="Breadcrumb" style="--bg-color:#f5f5f5;--text-color:#333333;--link-color:#0073aa;--active-color:#666666;--separator-color:#999999">
  <ol class="reset-list">
    <li><a href="/">Home</a></li>
    <li><span class="separator"><i class="fas fa-angle-right"></i></span><a href="/category/blog">Blog</a></li>
    <li><span class="separator"><i class="fas fa-angle-right"></i></span><span class="current">Current Page Title</span></li>
  </ol>
</nav>
<!-- /wp:phenix/breadcrumb -->
```

### Custom Breadcrumb Path

A breadcrumb with a custom path structure:

```html
<!-- wp:phenix/breadcrumb {"source":"custom"} -->
<nav class="wp-block-phenix-breadcrumb px-breadcrumb" aria-label="Breadcrumb" data-source="custom">
  <ol class="reset-list">
    <li><a href="/">Home</a></li>
    <li><span class="separator">/</span><a href="/products">Products</a></li>
    <li><span class="separator">/</span><a href="/products/electronics">Electronics</a></li>
    <li><span class="separator">/</span><a href="/products/electronics/smartphones">Smartphones</a></li>
    <li><span class="separator">/</span><span class="current">Product Name</span></li>
  </ol>
</nav>
<!-- /wp:phenix/breadcrumb -->
```

### Breadcrumb with Schema Markup

A breadcrumb with schema.org markup for SEO:

```html
<!-- wp:phenix/breadcrumb {"enableSchema":true,"schemaType":"BreadcrumbList"} -->
<nav class="wp-block-phenix-breadcrumb px-breadcrumb" aria-label="Breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
  <ol class="reset-list">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span class="separator">/</span>
      <a href="/category/blog" itemprop="item"><span itemprop="name">Blog</span></a>
      <meta itemprop="position" content="2" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span class="separator">/</span>
      <span class="current" itemprop="name">Current Page Title</span>
      <meta itemprop="position" content="3" />
    </li>
  </ol>
</nav>
<!-- /wp:phenix/breadcrumb -->
```

## Common Use Cases

### Page Header with Breadcrumb

A page header that includes a breadcrumb trail:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:phenix/group {"padding":"md","backgroundColor":"#f9f9f9","marginBottom":"md"} -->
  <div class="px-group pdy-15 pdx-25 bg-color mb-15" style="--bg-color:#f9f9f9">
    <!-- wp:heading {"level":1} -->
    <h1>Page Title</h1>
    <!-- /wp:heading -->
    
    <!-- wp:phenix/breadcrumb -->
    <nav class="wp-block-phenix-breadcrumb px-breadcrumb" aria-label="Breadcrumb">
      <ol class="reset-list">
        <li><a href="/">Home</a></li>
        <li><span class="separator">/</span><a href="/category/blog">Blog</a></li>
        <li><span class="separator">/</span><span class="current">Current Page Title</span></li>
      </ol>
    </nav>
    <!-- /wp:phenix/breadcrumb -->
  </div>
  <!-- /wp:phenix/group -->
  
  <!-- Page content goes here -->
</div>
<!-- /wp:phenix/container -->
```

### WooCommerce Product Breadcrumb

A breadcrumb for WooCommerce product pages:

```html
<!-- wp:phenix/breadcrumb {"source":"woocommerce"} -->
<nav class="wp-block-phenix-breadcrumb px-breadcrumb" aria-label="Breadcrumb" data-source="woocommerce">
  <ol class="reset-list">
    <li><a href="/">Home</a></li>
    <li><span class="separator">/</span><a href="/shop">Shop</a></li>
    <li><span class="separator">/</span><a href="/product-category/clothing">Clothing</a></li>
    <li><span class="separator">/</span><a href="/product-category/clothing/t-shirts">T-shirts</a></li>
    <li><span class="separator">/</span><span class="current">Product Name</span></li>
  </ol>
</nav>
<!-- /wp:phenix/breadcrumb -->
```

## Best Practices

1. **Consistent Placement**: Place breadcrumbs in a consistent location across all pages, typically at the top of the content area

2. **Clear Hierarchy**: Ensure the breadcrumb trail accurately reflects the site's hierarchy and the user's path

3. **Concise Labels**: Use short, descriptive labels for breadcrumb items to avoid excessive length

4. **Mobile Consideration**: Consider how breadcrumbs will display on mobile devices, possibly truncating or simplifying for smaller screens

5. **SEO Optimization**: Enable schema markup to improve search engine understanding of your site structure

6. **Visual Clarity**: Use sufficient contrast and spacing to make breadcrumbs easily readable

7. **Accessibility**: Ensure breadcrumbs are accessible with proper ARIA labels and keyboard navigation

## Related Blocks

- [Container Block](./container-block.md) - For positioning breadcrumbs within layouts
- [Group Block](./group-block.md) - For combining breadcrumbs with other header elements
- [Text Elements Block](./text-elements-block.md) - For adding descriptive text alongside breadcrumbs

