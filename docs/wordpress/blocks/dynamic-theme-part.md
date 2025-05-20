# Dynamic Theme Part

## Overview

The Dynamic Theme Part block is a powerful component in the Phenix Design System that allows you to create and insert reusable template parts throughout your WordPress site. This block enables you to build modular, consistent layouts by defining template parts once and using them across multiple pages. With the Dynamic Theme Part, you can create headers, footers, sidebars, and other recurring elements that automatically update everywhere when edited in one place, significantly improving your workflow efficiency and site maintenance.

![Dynamic Theme Part](../../../assets/images/wordpress/dynamic-theme-part.png)

## Key Features

- Create reusable template parts that can be inserted anywhere on your site
- Edit once, update everywhere functionality for consistent site elements
- Support for dynamic content with shortcodes and template tags
- Conditional display options based on page context
- Ability to pass custom parameters to template parts
- Full block editor support for creating complex template parts
- Integration with WordPress theme templates system
- Performance optimization with caching options

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Dynamic Theme Part" or find it in the "Phenix Blocks" category
3. Add the Dynamic Theme Part block to your page
4. Either select an existing template part or create a new one
5. Customize the template part settings in the block sidebar
6. Save your page to display the template part

## Block Settings

### General Options

| Option | Description |
|--------|-------------|
| Template Part | Select an existing template part or create a new one |
| Theme Area | Assign the template part to a specific theme area (header, footer, sidebar, etc.) |
| Template Part Title | Set a descriptive title for the template part |
| Template Part Slug | Define a unique slug for the template part |

### Display Options

| Option | Description |
|--------|-------------|
| Visibility | Control when and where the template part is displayed |
| Container | Wrap the template part in a container element |
| Background | Add a background color or image to the template part |
| Padding | Add internal spacing within the template part |
| Margin | Add external spacing around the template part |
| Border | Add borders with custom color, width, and style |
| Border Radius | Add rounded corners to the template part |

### Advanced Options

| Option | Description |
|--------|-------------|
| Custom CSS Class | Add custom CSS classes to the template part |
| Custom ID | Assign a unique ID to the template part |
| Cache Duration | Set how long the template part should be cached |
| Parameters | Pass custom parameters to the template part |
| Fallback Content | Define content to display if the template part is not found |

## Examples

### Basic Template Part

A simple template part for a site header:

```html
<!-- wp:phenix/dynamic-theme-part {"templatePart":"header","themeArea":"header"} -->
<div class="wp-block-phenix-dynamic-theme-part" data-template-part="header" data-theme-area="header">
  <!-- Template part content will be loaded here -->
</div>
<!-- /wp:phenix/dynamic-theme-part -->
```

### Styled Template Part

A template part with custom styling:

```html
<!-- wp:phenix/dynamic-theme-part {"templatePart":"featured-content","backgroundColor":"#f9f9f9","padding":"md","borderRadius":"md","customClass":"featured-section"} -->
<div class="wp-block-phenix-dynamic-theme-part featured-section pdy-15 pdx-15 bg-color radius-md" data-template-part="featured-content" style="--bg-color:#f9f9f9">
  <!-- Template part content will be loaded here -->
</div>
<!-- /wp:phenix/dynamic-theme-part -->
```

### Template Part with Parameters

A template part that accepts custom parameters:

```html
<!-- wp:phenix/dynamic-theme-part {"templatePart":"product-showcase","parameters":{"category":"electronics","count":3,"featured":true}} -->
<div class="wp-block-phenix-dynamic-theme-part" data-template-part="product-showcase" data-parameters='{"category":"electronics","count":3,"featured":true}'>
  <!-- Template part content will be loaded here with the specified parameters -->
</div>
<!-- /wp:phenix/dynamic-theme-part -->
```

### Conditional Template Part

A template part that displays conditionally based on page context:

```html
<!-- wp:phenix/dynamic-theme-part {"templatePart":"related-posts","visibility":{"showOn":["single"],"hideOn":["page","archive"]}} -->
<div class="wp-block-phenix-dynamic-theme-part" data-template-part="related-posts" data-visibility='{"showOn":["single"],"hideOn":["page","archive"]}'>
  <!-- Template part content will be loaded here only on single post pages -->
</div>
<!-- /wp:phenix/dynamic-theme-part -->
```

## Creating Template Parts

Template parts can be created in two ways:

### 1. Using the Template Parts Editor

1. Navigate to **Appearance > Template Parts** in your WordPress admin
2. Click **Add New** to create a new template part
3. Give your template part a name and select its theme area
4. Build your template part using the block editor
5. Save the template part

### 2. Creating On-the-Fly

1. Add a Dynamic Theme Part block to a page
2. Click **Create New Template Part**
3. Enter a name for your template part
4. Select the theme area it belongs to
5. Build your template part in the editor that appears
6. Save your changes

## Common Use Cases

### Site Header

Create a consistent header across your entire site:

```html
<!-- wp:phenix/dynamic-theme-part {"templatePart":"site-header","themeArea":"header"} -->
<div class="wp-block-phenix-dynamic-theme-part" data-template-part="site-header" data-theme-area="header">
  <!-- The site header template part will be loaded here -->
</div>
<!-- /wp:phenix/dynamic-theme-part -->
```

The actual template part might contain:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:phenix/grid-row {"alignItems":"center"} -->
  <div class="px-row align-items-center">
    <!-- wp:phenix/grid-column {"size":3} -->
    <div class="px-col col-3">
      <!-- wp:phenix/logo -->
      <div class="wp-block-phenix-logo px-logo">
        <a href="/" class="logo-link">
          <img src="/wp-content/uploads/logo.png" alt="Site Logo" class="logo-image">
        </a>
      </div>
      <!-- /wp:phenix/logo -->
    </div>
    <!-- /wp:phenix/grid-column -->
    
    <!-- wp:phenix/grid-column {"size":9} -->
    <div class="px-col col-9">
      <!-- wp:phenix/responsive-menu -->
      <div class="wp-block-phenix-responsive-menu px-responsive-menu">
        <!-- Navigation menu content -->
      </div>
      <!-- /wp:phenix/responsive-menu -->
    </div>
    <!-- /wp:phenix/grid-column -->
  </div>
  <!-- /wp:phenix/grid-row -->
</div>
<!-- /wp:phenix/container -->
```

### Call-to-Action Section

Create a reusable call-to-action section that can be placed on multiple pages:

```html
<!-- wp:phenix/dynamic-theme-part {"templatePart":"cta-section","parameters":{"title":"Get Started Today","buttonText":"Sign Up Now"}} -->
<div class="wp-block-phenix-dynamic-theme-part" data-template-part="cta-section" data-parameters='{"title":"Get Started Today","buttonText":"Sign Up Now"}'>
  <!-- The CTA section template part will be loaded here with custom parameters -->
</div>
<!-- /wp:phenix/dynamic-theme-part -->
```

### Sidebar Widgets

Create a reusable sidebar that can be placed in different layouts:

```html
<!-- wp:phenix/grid-row -->
<div class="px-row">
  <!-- wp:phenix/grid-column {"size":8} -->
  <div class="px-col col-8">
    <!-- Main content blocks -->
  </div>
  <!-- /wp:phenix/grid-column -->
  
  <!-- wp:phenix/grid-column {"size":4} -->
  <div class="px-col col-4">
    <!-- wp:phenix/dynamic-theme-part {"templatePart":"sidebar-widgets","themeArea":"sidebar"} -->
    <div class="wp-block-phenix-dynamic-theme-part" data-template-part="sidebar-widgets" data-theme-area="sidebar">
      <!-- The sidebar widgets template part will be loaded here -->
    </div>
    <!-- /wp:phenix/dynamic-theme-part -->
  </div>
  <!-- /wp:phenix/grid-column -->
</div>
<!-- /wp:phenix/grid-row -->
```

## Best Practices

1. **Modular Design**: Break your site into logical, reusable components that make sense as template parts

2. **Naming Convention**: Use clear, descriptive names for template parts to make them easy to identify and manage

3. **Theme Areas**: Assign template parts to appropriate theme areas for better organization and compatibility with themes

4. **Performance**: Use caching for template parts that don't change frequently to improve site performance

5. **Responsive Design**: Ensure template parts are responsive and work well across different screen sizes

6. **Parameters**: Use parameters to make template parts flexible and reusable in different contexts

7. **Documentation**: Document the purpose and parameters of each template part for other content editors

8. **Fallback Content**: Provide meaningful fallback content in case a template part fails to load

## Related Blocks

- [Container Block](./container-block.md) - For creating layout containers within template parts
- [Grid Row Block](./grid-row-block.md) - For creating grid layouts within template parts
- [Logical Content Block](./logical-content-block.md) - For adding conditional content within template parts
- [Custom Code Block](./custom-code-block.md) - For adding custom code to template parts
