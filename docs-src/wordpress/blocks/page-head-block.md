# Page Head Block

## Overview

The Page Head Block in the Phenix Design System is a versatile component designed to display page titles and breadcrumb navigation at the top of content areas. It provides a consistent way to show page context and navigation hierarchy across your WordPress site. The block can be configured to display both title and breadcrumb, title only, or breadcrumb only, depending on your needs.

## Key Features

- Flexible display modes: Title and Breadcrumb, Title Only, or Breadcrumb Only
- Automatic page title detection based on context (single posts, pages, archives)
- Comprehensive styling options through the block editor
- Responsive design with customizable alignment for different screen sizes
- Support for animations and visual effects
- Seamless integration with WordPress page hierarchy

## Breadcrumb Feature

One of the primary features of the Page Head block is its breadcrumb navigation system, which offers:

- Automatic generation of breadcrumb trails based on WordPress page hierarchy
- Home page link with icon and customizable label
- Current page display in the breadcrumb path
- Integration with post types and taxonomies
- Support for Yoast SEO breadcrumb structure when available
- Font icon separators with customizable appearance
- Schema markup for improved SEO (itemprop="breadcrumb")
- Responsive alignment that adapts to different screen sizes

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Page Head" or find it in the "Phenix Blocks" category
3. Add the Page Head Block to your page
4. Use the toolbar dropdown to select the display mode (Title/Breadcrumb, Title Only, or Breadcrumb)
5. Customize the appearance using the block toolbar and sidebar options

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| Display Mode | Select between "Title/Breadcrumb", "Title Only", or "Breadcrumb" |
| Style Options | Configure colors, backgrounds, and other visual styles |
| Typography Options | Set text size, alignment, and other typography settings |
| Animation Options | Add entrance and hover animations (if enabled) |
| Effects Options | Add shadows, opacity, and other visual effects (if enabled) |

### Sidebar Controls

The Page Head block includes a General Settings panel where you can enable additional features:

| Setting | Description |
|---------|-------------|
| Enable Animations | Adds animation options to the toolbar |
| Enable Effects | Adds effects options to the toolbar |

## Breadcrumb Implementation

The breadcrumb is rendered as an unordered list with the following structure:

```html
<ul class="px-breadcrumb reset-list flexbox custom-icon links-inherit" data-type="font-icon" itemprop="breadcrumb">
  <li class="far fa-home tx-icon"><a href="[home-url]">Home</a></li>
  <!-- Additional items based on page hierarchy -->
  <li>Current Page Title</li>
</ul>
```

When Yoast SEO is active, its breadcrumb structure is used instead:

```html
<div class="px-breadcrumb flexbox custom-icon links-inherit" data-type="font-icon" itemprop="breadcrumb">
  <!-- Yoast SEO breadcrumb structure -->
</div>
```

## Page Head Behavior

The Page Head block automatically adapts to different page types:

1. **Home Page**: 
   - Title: Site title or custom title
   - Breadcrumb: Not displayed on the home page

2. **Single Posts**: 
   - Title: Post title
   - Breadcrumb: Home → Post Type → Post Title

3. **Pages**: 
   - Title: Page title
   - Breadcrumb: Home → Page Title

4. **Archives/Categories**: 
   - Title: Archive/Category title
   - Breadcrumb: Home → Archive/Category Title

## Styling Options

The Page Head block provides several styling options that affect the breadcrumb:

### Typography

- Text size and weight
- Text alignment (left, center, right)
- Text color

### Layout

- Background color or gradient
- Padding and margin
- Border styles and radius
- Box shadow effects

## Breadcrumb Styling

The breadcrumb uses a separator between items, which is implemented through CSS:

```scss
.px-breadcrumb {
  /*==== Default Divider ====*/
  @if ($direction == 'ltr') {--divider-icon: '/';}
  @else {--divider-icon: '\\';}

  /*==== Items ====*/
  > li {
    /*==== Links ====*/
    a {@extend %inline-block;}
    /*====> Main-Style <====*/
    &:not(:last-child) {
      margin-#{$direction-end}: 10px;
      &::after {
        content: var(--divider-icon);
        @extend %inline-block;
        margin-#{$direction-start}: 10px;
      }
    }
  }

  /*==== Font icon Separator ====*/
  &[data-type="font-icon"] > li::after {font-family: var(--icons-font);}
}
```

The separator can be customized by changing the `--divider-icon` CSS variable.

## Accessibility Features

The breadcrumb includes the following accessibility features:

- Semantic HTML structure
- Schema markup with `itemprop="breadcrumb"`
- Home icon with text label for screen readers
- Clear visual hierarchy

## Best Practices

1. **Consistent Placement**: Place the Page Head block in a consistent location across all pages, typically at the top of the content area

2. **Choose Appropriate Mode**: Select the right display mode (Title/Breadcrumb, Title Only, or Breadcrumb) based on the page context and user needs

3. **Clear Hierarchy**: Ensure your site structure is logical and well-organized for accurate breadcrumb paths

4. **Visual Integration**: Style the Page Head block to match your site's design using the available styling options

5. **Typography Consistency**: Maintain consistent typography settings across all instances of the Page Head block

6. **Mobile Optimization**: Use responsive alignment options to ensure proper display on all screen sizes

7. **SEO Enhancement**: The breadcrumb includes schema markup for SEO, which works best when your site structure is well-defined

8. **Yoast SEO Integration**: If using Yoast SEO, its breadcrumb structure will be automatically used, providing additional SEO benefits

## Related Blocks

- [Container Block](./container-block.md) - For positioning the Page Head block within layouts
- [Group Block](./group-block.md) - For combining the Page Head block with other elements
- [Text Elements Block](./text-elements-block.md) - For adding additional descriptive text
