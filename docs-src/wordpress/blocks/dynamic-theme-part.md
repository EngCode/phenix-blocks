# Theme Part Block

## Overview

The Theme Part block is a server-side rendered component in the Phenix Design System that allows you to include template parts from your WordPress theme directly in your content. This block enables you to build modular, consistent layouts by inserting pre-defined template parts from your theme into any page or post. The Theme Part block is particularly useful for including reusable components like feature sections, testimonials, or custom content layouts that are defined in your theme's template-parts directory.

## Key Features

- **Template Part Integration**: Insert any template part from your theme directly into your content
- **Server-Side Rendering**: Content is rendered on the server for optimal performance and SEO
- **Simple Selection Interface**: Easy dropdown selection of available template parts
- **Seamless Theme Integration**: Works with your theme's existing template parts structure
- **Block Editor Support**: Full integration with the WordPress block editor
- **Consistent Design**: Maintain design consistency across your site by reusing template parts

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Theme Part" or find it in the "Phenix Blocks" category
3. Add the Theme Part block to your page
4. Select a template part from the dropdown in the toolbar or sidebar
5. Save your page to display the selected template part

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| Template Name | Dropdown to select the template part to display |

### Sidebar Controls

#### General Setting Panel

| Option | Description |
|--------|-------------|
| Template Name | Dropdown to select the template part to display |

### Technical Implementation

The Theme Part block is implemented with server-side rendering for optimal performance and SEO. The PHP rendering function handles the inclusion of template parts from your theme:

```php
get_template_part('template-parts/'.$block_attributes['part_name'], null, $block_attributes);
```

This approach allows you to include any template part from your theme's template-parts directory directly in your content. The block passes its attributes to the template part, making them available within the template part file.

## Implementation Examples

The Theme Part block can be used in various ways based on the template parts available in your theme. Below are descriptions of common implementations based on the actual block functionality.

### Header Template Part

Including a header template part from your theme:

- **Configuration**:
  - Template Name: Select "header" from the dropdown

This will include the header.php file from your theme's template-parts directory, providing a consistent header across your site.

### Feature Section Template Part

Including a feature section template part in your content:

- **Configuration**:
  - Template Name: Select "feature-section" from the dropdown

This will include the feature-section.php file from your theme's template-parts directory, allowing you to reuse complex feature layouts across multiple pages.

### Testimonials Template Part

Including a testimonials section in your content:

- **Configuration**:
  - Template Name: Select "testimonials" from the dropdown

This will include the testimonials.php file from your theme's template-parts directory, providing a consistent testimonials display across your site.

## Creating Template Parts

To create template parts that can be used with the Theme Part block:

1. Create a new PHP file in your theme's `template-parts` directory
2. Name the file according to the component it represents (e.g., `feature-box.php`, `team-member.php`)
3. Add your HTML and PHP code to the file
4. Access block attributes using the `$args` parameter that's passed to the template part

Example template part file (`template-parts/feature-box.php`):

```php
<?php
/**
 * Feature Box Template Part
 */
?>
<div class="feature-box">
    <div class="feature-icon">
        <i class="fas fa-star"></i>
    </div>
    <h3 class="feature-title">Feature Title</h3>
    <div class="feature-description">
        <p>This is a feature description that can be included anywhere using the Theme Part block.</p>
    </div>
</div>
```

Once created, this template part will automatically appear in the Template Name dropdown in the Theme Part block.

## Common Use Cases

### Reusable Page Components

Include standardized page components across multiple pages:

1. Create a template part file in your theme's template-parts directory (e.g., `feature-grid.php`)
2. Add the Theme Part block to any page where you want to include this component
3. Select the template part from the dropdown

This approach ensures consistency across your site and makes updates easier - change the template part file once, and it updates everywhere it's used.

### Layout Building Blocks

Use template parts as building blocks for creating complex layouts:

1. Create multiple template part files for different sections (e.g., `hero.php`, `features.php`, `testimonials.php`)
2. Add multiple Theme Part blocks to your page, selecting the appropriate template part for each section
3. Arrange the blocks in the desired order to create your complete page layout

This modular approach makes it easy to create consistent layouts across your site.

### Content Templates

Create standardized content templates for specific types of content:

1. Create a template part file for a specific content type (e.g., `team-member.php`, `product-feature.php`)
2. Add the Theme Part block to include this standardized content template wherever needed

This ensures consistent presentation of similar content throughout your site.

## Best Practices

1. **Organized Template Parts**: Keep your template parts organized in your theme's template-parts directory, potentially using subdirectories for different types of components

2. **Descriptive Naming**: Use clear, descriptive names for your template part files to make them easy to identify in the dropdown

3. **Modular Design**: Create small, focused template parts that serve a single purpose rather than large, complex ones

4. **Responsive Design**: Ensure your template parts are responsive and work well across different screen sizes

5. **Documentation**: Add comments at the top of each template part file explaining its purpose and any expected parameters

6. **Block Attributes**: Access block attributes in your template part using the `$args` parameter to make your template parts more flexible

7. **Consistent Styling**: Maintain consistent styling between your template parts and the rest of your site

8. **Avoid Duplication**: Use template parts to eliminate code duplication across your site

## Related Blocks

- [Dynamic Query Block](./dynamic-query-block.md) - For displaying dynamic content from posts
- [Taxonomies Query Block](./taxonomies-query-block.md) - For displaying taxonomy terms
- [Users Query Block](./users-query-block.md) - For displaying user data
- [Container Block](./container-block.md) - For creating layout containers

