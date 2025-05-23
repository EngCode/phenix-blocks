# Icon Element Block

## Overview

The Icon Element Block is a versatile component in the Phenix Design System that allows you to add and customize icons from various icon libraries. This block provides extensive styling options and can be used for visual enhancements, navigation elements, feature highlights, and more.

<!-- Image placeholder for Icon Element Block -->

## Key Features

- Access to multiple icon libraries (Font Awesome, Material Icons, etc.)
- Extensive styling options for size, color, and appearance
- Support for icon animations and effects
- Ability to add links to icons
- Background and border customization
- Responsive control for different screen sizes

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Icon Element" or find it in the "Phenix Blocks" category
3. Add the Icon Element Block to your page
4. Select an icon from the available libraries
5. Customize the icon settings in the block sidebar

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| Icon Library | Quick selection of icon libraries (Font Awesome, Material Icons, etc.) |
| Icon Selection | Browse and select icons from the chosen library |
| Icon Size | Quickly adjust the size of the icon (xs, sm, md, lg, xl) |
| Icon Color | Set the color of the icon via color picker |
| Alignment | Set the icon alignment (left, center, right) |
| Link Controls | Add or edit links for the icon |
| Spacing Controls | Quick access to margin and padding settings |
| Border Options | Configure border styles, widths, and colors |

### Sidebar Controls

#### Icon Selection Panel

| Control | Description |
|---------|-------------|
| Icon Library | Choose from available icon libraries (Font Awesome, Material Icons, etc.) |
| Icon | Select a specific icon from the chosen library |
| Icon Style | Choose between solid, regular, light, or duotone styles (when available) |

#### Size and Appearance Panel

| Control | Description |
|---------|-------------|
| Icon Size | Set the size of the icon (xs, sm, md, lg, xl, or custom) |
| Icon Color | Set the color of the icon |
| Opacity | Control the transparency of the icon |
| Rotation | Rotate the icon by specific degrees |
| Flip | Flip the icon horizontally or vertically |

#### Layout Panel

| Control | Description |
|---------|-------------|
| Alignment | Set the icon alignment (left, center, right) |
| Padding | Add internal spacing around the icon |
| Margin | Add external spacing around the icon |
| Display | Control how the icon is displayed (inline, block, etc.) |

#### Style Panel

| Control | Description |
|---------|-------------|
| Background | Add a background color or gradient |
| Border | Add borders with custom color, width, and style |
| Border Radius | Add rounded corners to the icon container |
| Shadow | Add shadow effects to the icon |

#### Animation Panel

| Control | Description |
|---------|-------------|
| Animation Type | Select from various animation effects (spin, pulse, beat, etc.) |
| Animation Duration | Set how long the animation lasts |
| Animation Timing | Control the timing function of the animation |
| Hover Effects | Apply effects that activate on hover |

#### Link Panel

| Control | Description |
|---------|-------------|
| URL | Set a destination URL for the icon |
| Open in New Tab | Whether the link opens in a new browser tab |
| Rel Attributes | Add rel attributes for SEO and security |

## Examples

### Basic Icon

A simple Font Awesome icon:

```html
<!-- wp:phenix/icon-element {"iconSet":"fas","iconName":"fa-star"} -->
<div class="wp-block-phenix-icon-element">
  <i class="fas fa-star"></i>
</div>
<!-- /wp:phenix/icon-element -->
```

### Styled Icon

An icon with custom styling:

```html
<!-- wp:phenix/icon-element {"iconSet":"fas","iconName":"fa-heart","iconSize":"xl","iconColor":"#e74c3c","backgroundColor":"#f9f9f9","padding":"md","borderRadius":"circle"} -->
<div class="wp-block-phenix-icon-element bg-color pdy-15 pdx-15 radius-circle" style="--bg-color:#f9f9f9">
  <i class="fas fa-heart tx-xl" style="color:#e74c3c"></i>
</div>
<!-- /wp:phenix/icon-element -->
```

### Animated Icon

An icon with animation effects:

```html
<!-- wp:phenix/icon-element {"iconSet":"fas","iconName":"fa-cog","animation":"spin","animationDuration":"2s"} -->
<div class="wp-block-phenix-icon-element">
  <i class="fas fa-cog animation-spin" style="--animation-duration:2s"></i>
</div>
<!-- /wp:phenix/icon-element -->
```

### Linked Icon

An icon that links to a URL:

```html
<!-- wp:phenix/icon-element {"iconSet":"fab","iconName":"fa-twitter","iconSize":"lg","iconColor":"#1da1f2","url":"https://twitter.com","openNewTab":true} -->
<div class="wp-block-phenix-icon-element">
  <a href="https://twitter.com" target="_blank" rel="noopener">
    <i class="fab fa-twitter tx-lg" style="color:#1da1f2"></i>
  </a>
</div>
<!-- /wp:phenix/icon-element -->
```

## Common Use Cases

### Social Media Icons

Create a set of social media icons for your website:

```html
<!-- wp:group {"className":"flexbox gap-15"} -->
<div class="wp-block-group flexbox gap-15">
  <!-- wp:phenix/icon-element {"iconSet":"fab","iconName":"fa-facebook","iconColor":"#3b5998","url":"https://facebook.com"} -->
  <div class="wp-block-phenix-icon-element">
    <a href="https://facebook.com">
      <i class="fab fa-facebook" style="color:#3b5998"></i>
    </a>
  </div>
  <!-- /wp:phenix/icon-element -->
  
  <!-- wp:phenix/icon-element {"iconSet":"fab","iconName":"fa-twitter","iconColor":"#1da1f2","url":"https://twitter.com"} -->
  <div class="wp-block-phenix-icon-element">
    <a href="https://twitter.com">
      <i class="fab fa-twitter" style="color:#1da1f2"></i>
    </a>
  </div>
  <!-- /wp:phenix/icon-element -->
  
  <!-- wp:phenix/icon-element {"iconSet":"fab","iconName":"fa-instagram","iconColor":"#e1306c","url":"https://instagram.com"} -->
  <div class="wp-block-phenix-icon-element">
    <a href="https://instagram.com">
      <i class="fab fa-instagram" style="color:#e1306c"></i>
    </a>
  </div>
  <!-- /wp:phenix/icon-element -->
</div>
<!-- /wp:group -->
```

### Feature Icons

Use icons to highlight features or services:

```html
<!-- wp:phenix/icon-element {"iconSet":"fas","iconName":"fa-shield-alt","iconSize":"xl","iconColor":"#3498db","backgroundColor":"#eaf2fa","padding":"lg","borderRadius":"md","textAlign":"center"} -->
<div class="wp-block-phenix-icon-element tx-align-center bg-color pdy-25 pdx-25 radius-md" style="--bg-color:#eaf2fa">
  <i class="fas fa-shield-alt tx-xl" style="color:#3498db"></i>
</div>
<!-- /wp:phenix/icon-element -->

<!-- wp:heading {"textAlign":"center","level":3} -->
<h3 class="has-text-align-center">Security First</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">Our platform prioritizes your data security with advanced encryption.</p>
<!-- /wp:paragraph -->
```

## Best Practices

1. **Consistent Style**: Maintain consistent icon styles throughout your website for a cohesive look

2. **Appropriate Sizing**: Choose icon sizes that balance visibility with surrounding content

3. **Color Harmony**: Use icon colors that complement your website's color scheme

4. **Meaningful Icons**: Select icons that clearly communicate their purpose or meaning

5. **Accessibility**: Ensure that icons used for functionality include appropriate text labels or ARIA attributes

6. **Performance**: Be mindful of loading too many different icon libraries on a single page

## Related Blocks

- [Button Block](./button-block.md) - For combining icons with button elements
- [Text Elements Block](./text-elements-block.md) - For combining icons with text
- [Group Block](./group-block.md) - For grouping multiple icons together

