# Logo Block

## Overview

The Logo Block is a specialized component in the Phenix Design System that allows you to easily add and customize your website's logo. It provides options for different logo variants (light/dark), responsive sizing, and linking to the homepage. The Logo Block is typically used in headers, footers, and other branding areas of your website.

<!-- Image placeholder for Logo Block -->

## Key Features

- Display your site logo with customizable options
- Support for light and dark logo variants
- Responsive sizing for different screen sizes
- Automatic linking to the homepage
- Custom alt text for accessibility
- Advanced styling options including size, padding, and margins

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Logo" or find it in the "Phenix Blocks" category
3. Add the Logo Block to your page
4. Select your logo image(s) from the media library
5. Customize the logo settings in the block sidebar

## Block Settings

### Logo Options

| Option | Description |
|--------|-------------|
| Logo Image | Select the main logo image from the media library |
| Dark Logo | Optional alternative logo for dark backgrounds or dark mode |
| Logo Width | Set the width of the logo (auto, custom, or responsive) |
| Logo Height | Set the height of the logo (auto or custom) |
| Alt Text | Alternative text for the logo image for accessibility |

### Link Options

| Option | Description |
|--------|-------------|
| Link to Homepage | Enable/disable linking the logo to the site homepage |
| Custom URL | Set a custom URL for the logo to link to (if not linking to homepage) |
| Open in New Tab | Whether the link opens in a new browser tab |

### Style Options

| Option | Description |
|--------|-------------|
| Alignment | Set the logo alignment (left, center, right) |
| Padding | Add internal spacing around the logo |
| Margin | Add external spacing around the logo |
| Border | Add borders with custom color, width, and style |
| Border Radius | Add rounded corners to the logo container |

### Responsive Options

| Option | Description |
|--------|-------------|
| Mobile Width | Set a specific width for the logo on mobile devices |
| Tablet Width | Set a specific width for the logo on tablet devices |
| Desktop Width | Set a specific width for the logo on desktop devices |
| Hide on Mobile | Option to hide the logo on mobile devices |

## Examples

### Basic Logo

A simple logo with default settings:

```html
<!-- wp:phenix/logo {"logoID":123,"logoURL":"https://example.com/logo.png","logoAlt":"Company Name"} -->
<div class="wp-block-phenix-logo">
  <a href="/" class="site-logo">
    <img src="https://example.com/logo.png" alt="Company Name" class="img-fluid">
  </a>
</div>
<!-- /wp:phenix/logo -->
```

### Logo with Custom Width

A logo with a specific width setting:

```html
<!-- wp:phenix/logo {"logoID":123,"logoURL":"https://example.com/logo.png","logoWidth":"200px"} -->
<div class="wp-block-phenix-logo">
  <a href="/" class="site-logo">
    <img src="https://example.com/logo.png" alt="" class="img-fluid" style="width:200px">
  </a>
</div>
<!-- /wp:phenix/logo -->
```

### Centered Logo with Padding

A centered logo with custom padding:

```html
<!-- wp:phenix/logo {"logoID":123,"logoURL":"https://example.com/logo.png","alignment":"center","padding":"md"} -->
<div class="wp-block-phenix-logo tx-align-center pdy-15 pdx-15">
  <a href="/" class="site-logo">
    <img src="https://example.com/logo.png" alt="" class="img-fluid">
  </a>
</div>
<!-- /wp:phenix/logo -->
```

### Logo with Dark Variant

A logo with both light and dark variants:

```html
<!-- wp:phenix/logo {"logoID":123,"logoURL":"https://example.com/logo-light.png","darkLogoID":124,"darkLogoURL":"https://example.com/logo-dark.png"} -->
<div class="wp-block-phenix-logo">
  <a href="/" class="site-logo">
    <img src="https://example.com/logo-light.png" alt="" class="img-fluid light-logo">
    <img src="https://example.com/logo-dark.png" alt="" class="img-fluid dark-logo">
  </a>
</div>
<!-- /wp:phenix/logo -->
```

### Responsive Logo

A logo with different sizes for different screen sizes:

```html
<!-- wp:phenix/logo {"logoID":123,"logoURL":"https://example.com/logo.png","mobileWidth":"120px","tabletWidth":"160px","desktopWidth":"200px"} -->
<div class="wp-block-phenix-logo">
  <a href="/" class="site-logo">
    <img src="https://example.com/logo.png" alt="" class="img-fluid" style="width:120px;--tablet-width:160px;--desktop-width:200px">
  </a>
</div>
<!-- /wp:phenix/logo -->
```

## Common Use Cases

### Header Logo

Placing a logo in the site header:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:phenix/grid-row {"alignV":"center"} -->
  <div class="px-row align-items-center">
    <!-- wp:phenix/grid-column {"size":3} -->
    <div class="px-col col-3">
      <!-- wp:phenix/logo {"logoID":123,"logoURL":"https://example.com/logo.png"} -->
      <div class="wp-block-phenix-logo">
        <a href="/" class="site-logo">
          <img src="https://example.com/logo.png" alt="" class="img-fluid">
        </a>
      </div>
      <!-- /wp:phenix/logo -->
    </div>
    <!-- /wp:phenix/grid-column -->
    
    <!-- wp:phenix/grid-column {"size":9} -->
    <div class="px-col col-9">
      <!-- Navigation menu goes here -->
    </div>
    <!-- /wp:phenix/grid-column -->
  </div>
  <!-- /wp:phenix/grid-row -->
</div>
<!-- /wp:phenix/container -->
```

### Footer Logo

Placing a smaller logo in the site footer:

```html
<!-- wp:phenix/logo {"logoID":123,"logoURL":"https://example.com/logo.png","logoWidth":"120px","alignment":"center","margin":"bottom-md"} -->
<div class="wp-block-phenix-logo tx-align-center mb-15">
  <a href="/" class="site-logo">
    <img src="https://example.com/logo.png" alt="" class="img-fluid" style="width:120px">
  </a>
</div>
<!-- /wp:phenix/logo -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">© 2025 Company Name. All rights reserved.</p>
<!-- /wp:paragraph -->
```

## Best Practices

1. **Optimize Logo Files**: Use properly sized and compressed logo images for faster loading

2. **SVG Format**: When possible, use SVG format for logos to ensure crisp display at any size

3. **Alt Text**: Always include descriptive alt text for your logo for accessibility

4. **Responsive Sizing**: Set appropriate logo sizes for different screen sizes

5. **Dark Mode Support**: Provide a dark variant of your logo if your site supports dark mode

6. **Consistent Placement**: Maintain consistent logo placement across your site for brand recognition

## Related Blocks

- [Container Block](./container-block.md) - For positioning the logo within layouts
- [Grid Row Block](./grid-row-block.md) - For creating header layouts with logos
- [Media Element Block](./media-element-block.md) - For more advanced image handling

