# Text Elements Block

## Overview

The Text Elements Block is a versatile content block in the Phenix Design System that allows you to create and style various text elements including headings, paragraphs, lists, and more. It provides extensive typography controls and styling options to help you create visually appealing and well-structured content.

<!-- Image placeholder for Text Elements Block -->

## Key Features

- Create multiple text element types (headings, paragraphs, lists, etc.)
- Apply comprehensive typography controls
- Add custom colors, backgrounds, and borders
- Include icons within text elements
- Apply animations and effects
- Full responsive control for different screen sizes

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Text Elements" or find it in the "Phenix Blocks" category
3. Add the Text Elements Block to your page
4. Select the type of text element you want to create
5. Enter your content and customize the styling in the block sidebar

## Block Settings

### Element Type Options

| Option | Description |
|--------|-------------|
| Element Type | Choose from heading (h1-h6), paragraph, span, div, etc. |
| HTML Tag | Select the HTML tag for semantic structure |
| Text Content | The actual text content to display |

### Typography Options

| Option | Description |
|--------|-------------|
| Font Family | Select from available theme fonts |
| Font Size | Set the text size with responsive options |
| Font Weight | Control text boldness (light, regular, medium, bold) |
| Line Height | Adjust the spacing between lines |
| Letter Spacing | Control the space between characters |
| Text Alignment | Set text alignment (left, center, right, justify) |
| Text Transform | Apply capitalization styles (uppercase, lowercase, capitalize) |

### Style Options

| Option | Description |
|--------|-------------|
| Text Color | Set the color of the text |
| Background | Add a background color or gradient |
| Border | Add borders with custom color, width, and style |
| Border Radius | Add rounded corners to the text element |
| Shadow | Add text or box shadow effects |
| Padding | Add internal spacing |
| Margin | Add external spacing |

### Icon Options

| Option | Description |
|--------|-------------|
| Icon | Select an icon from the icon library |
| Icon Position | Place the icon before or after the text |
| Icon Size | Set the size of the icon relative to the text |
| Icon Color | Customize the icon color |

### Animation Options

| Option | Description |
|--------|-------------|
| Animation Type | Select from various animation effects |
| Animation Trigger | Choose when the animation plays (on load, on scroll) |
| Animation Duration | Set how long the animation lasts |
| Animation Delay | Set a delay before the animation starts |

## Examples

### Heading Element

A styled heading with custom typography:

```html
<!-- wp:phenix/text-elements {"tagName":"h2","fontSize":"xl","fontWeight":"bold","textColor":"primary"} -->
<h2 class="wp-block-phenix-text-elements tx-xl weight-bold color-primary">Welcome to Our Website</h2>
<!-- /wp:phenix/text-elements -->
```

### Paragraph with Icon

A paragraph that includes an icon:

```html
<!-- wp:phenix/text-elements {"tagName":"p","icon":"fas fa-info-circle","iconPosition":"before"} -->
<p class="wp-block-phenix-text-elements"><i class="fas fa-info-circle me-10"></i>Important information goes here.</p>
<!-- /wp:phenix/text-elements -->
```

### Styled List Item

A list item with custom styling:

```html
<!-- wp:phenix/text-elements {"tagName":"li","backgroundColor":"#f5f5f5","padding":"sm","borderRadius":"sm"} -->
<li class="wp-block-phenix-text-elements bg-color radius-sm pdy-10 pdx-15" style="--bg-color:#f5f5f5">List item with custom background</li>
<!-- /wp:phenix/text-elements -->
```

### Animated Text

Text with animation effects:

```html
<!-- wp:phenix/text-elements {"tagName":"h3","animation":"fade-in","animationDuration":"1s","animationDelay":"0.2s"} -->
<h3 class="wp-block-phenix-text-elements" data-animation="fade-in" data-duration="1s" data-delay="0.2s">This heading will fade in</h3>
<!-- /wp:phenix/text-elements -->
```

## Best Practices

1. **Semantic Structure**: Use appropriate HTML tags for proper document structure and SEO

2. **Consistent Typography**: Maintain consistent font sizes, weights, and styles throughout your content

3. **Responsive Testing**: Test your text elements across different screen sizes to ensure readability

4. **Color Contrast**: Ensure sufficient contrast between text and background colors for accessibility

5. **Animation Restraint**: Use animations sparingly and purposefully to enhance user experience

## Related Blocks

- [Group Block](./group-block.md) - For grouping multiple text elements
- [Icon Element Block](./icon-element-block.md) - For more advanced icon usage
- [Container Block](./container-block.md) - For positioning text within layouts

