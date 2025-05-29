# Taxonomies Query Block

## Overview

The Taxonomies Query Block is a server-side rendered component in the Phenix Design System that allows you to fetch and display taxonomy terms from your WordPress site. This block enables you to create dynamic listings of categories, tags, or custom taxonomies with flexible grid layouts and slider functionality. The block works by querying taxonomy terms and displaying them using template parts from your theme.

## Key Features

- **Taxonomy Selection**: Query terms from any registered taxonomy (categories, tags, or custom taxonomies)
- **Post Type Association**: Filter taxonomies based on their association with specific post types
- **Template Part Integration**: Display taxonomy terms using theme template parts
- **Flexible Grid Layout**: Configure responsive grid layouts with customizable columns
- **Slider Functionality**: Convert grid layouts into interactive sliders
- **Server-Side Rendering**: Content is rendered on the server for optimal performance and SEO
- **Hierarchical Display**: Option to show parent terms only or include child terms
- **Empty Terms Filtering**: Option to hide terms that don't have associated content

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Taxonomies" or find it in the "Phenix Blocks" category
3. Add the Taxonomies block to your page
4. In the Query Setting panel, select the taxonomy you want to display (categories, tags, or custom taxonomies)
5. Select a post type to associate with the taxonomy (optional)
6. Choose a template part from your theme to use for displaying each term
7. Configure additional query options like order, maximum items, and whether to hide empty terms
8. Enable Grid Mode if you want to display results in a grid layout
9. Configure columns and responsive behavior as needed
10. Enable the Slider option if you want the grid to function as a slider

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| Columns Number | Set the number of columns for different screen sizes (mobile, tablet, laptop, desktop) |
| Sizes Options | Configure padding, margin, and other size-related properties |

### Sidebar Controls

#### Query Setting Panel

| Option | Description |
|--------|-------------|
| Taxonomies | Select the taxonomy to query (categories, tags, or custom taxonomies) |
| Post-Type | Filter taxonomy terms by their association with a specific post type |
| Card Template | Select a template part from your theme to use for displaying each term |
| Order | Set ascending (Oldest) or descending (Newest) order |
| OrderBy | Sort results by name, count, or other criteria |
| Max Items | Set how many terms to display |
| Hide Empty | Option to hide terms with no associated posts |
| Sub Terms | Option to include child terms in the results (when disabled, only parent terms are shown) |
| Grid Mode | Enable grid layout for taxonomy terms |
| IS Slider | Convert the grid layout into an interactive slider |

#### Grid Layout Panel

| Option | Description |
|--------|-------------|
| Grid Properties | Configure responsive grid layout settings |
| Alignment | Set alignment options for grid items |
| Responsive Columns | Configure different column counts for various screen sizes |
| Gap Controls | Set horizontal and vertical spacing between grid items |

#### Slider Options Panel

Only visible when Slider Mode is enabled:

| Option | Description |
|--------|-------------|
| Slides Per View | Set the number of slides visible at once |
| Slides Per Group | Set how many slides to move at once when navigating |
| Space Between | Control the gap between slider items |
| Navigation | Enable/disable navigation arrows |
| Pagination | Enable/disable pagination dots |
| Loop | Enable/disable infinite loop |
| Autoplay | Enable/disable automatic sliding |

### Technical Implementation

The Taxonomies Query block is implemented with server-side rendering for optimal performance and SEO. The PHP rendering function handles the query and display of taxonomy terms:

#### Query Construction

The block builds WordPress queries based on the selected taxonomy and configuration options:

1. **Taxonomy Selection**: The block queries terms from the selected taxonomy.

2. **Hide Empty Option**: When enabled, only terms with associated content are displayed.

3. **Hierarchical Display**: When "Sub Terms" is disabled, only parent terms (with parent=0) are shown. When enabled, all terms including child terms are displayed.

#### Template Part Integration

The block uses WordPress template parts for displaying taxonomy terms:

```php
get_template_part("template-parts/".$block_attributes["template_part"], null, $category);
```

This approach allows for flexible and reusable templates that can be customized in your theme.

## Implementation Examples

The Taxonomies Query block can be used in various ways based on the configuration options available. Below are descriptions of common implementations based on the actual block functionality.

### Basic Categories Grid

A grid layout displaying blog categories:

- **Configuration**:
  - Taxonomy: Select "category" from the dropdown
  - Template Part: Select a category card template from your theme
  - Grid Mode: Enabled
  - Columns: 3 columns on desktop, 2 on tablet, 1 on mobile
  - Hide Empty: Enabled to show only categories with posts

### Product Categories Slider

A slider showcasing WooCommerce product categories:

- **Configuration**:
  - Taxonomy: Select "product_cat" from the dropdown
  - Post-Type: Select "product" to filter categories associated with products
  - Template Part: Select a product category slide template
  - Grid Mode: Enabled
  - Slider Mode: Enabled
  - Navigation: Enabled
  - Pagination: Enabled
  - Order: Set to "DESC" to show categories with most products first
  - OrderBy: Set to "count" to prioritize popular categories

### Parent Categories Display

A grid showing only top-level categories:

- **Configuration**:
  - Taxonomy: Select your desired taxonomy
  - Sub Terms: Disabled (to show only parent terms)
  - Template Part: Select an appropriate template for category display
  - Grid Mode: Enabled for multi-column layout
  - Max Items: Limit to a specific number of parent categories

### Complete Taxonomy Hierarchy

A comprehensive display of all terms including subcategories:

- **Configuration**:
  - Taxonomy: Select your desired taxonomy
  - Sub Terms: Enabled (to include child terms)
  - Template Part: Select a template that handles hierarchical display
  - Hide Empty: Configure based on whether you want to show empty terms

## Common Use Cases

### Blog Category Navigation

Create a navigation menu based on blog categories:

1. Add the Taxonomies block to your sidebar or navigation area
2. Select "category" as the taxonomy
3. Choose a template part designed for navigation display
4. Configure to show only parent categories by disabling Sub Terms
5. Enable Grid Mode for horizontal layout or leave disabled for vertical menu
6. Set Hide Empty to true to show only categories with posts

### WooCommerce Category Showcase

Create a visually appealing showcase of product categories:

1. Add the Taxonomies block to your shop page or homepage
2. Select "product_cat" as the taxonomy and "product" as the post type
3. Choose a template part designed to display product categories with images
4. Enable Grid Mode with appropriate column settings for responsive display
5. Configure OrderBy to "count" to prioritize popular categories
6. Consider enabling Slider Mode for a carousel effect on smaller screens

### Hierarchical Taxonomy Display

Create a complete display of a taxonomy hierarchy including parent and child terms:

1. Add the Taxonomies block to your page
2. Select your desired taxonomy
3. Enable Sub Terms to include child terms in the display
4. Choose a template part designed to handle hierarchical display
5. Configure the grid layout to accommodate the hierarchical structure

## Best Practices

1. **Template Part Design**: Create specialized template parts for different types of taxonomy displays (navigation, featured categories, hierarchical display)

2. **Performance Optimization**: Use the Max Items setting to limit the number of terms displayed, especially for taxonomies with many terms

3. **Hierarchical Control**: Use the Sub Terms option strategically - disable it when you only want to show top-level categories, enable it for complete hierarchical displays

4. **Grid Responsiveness**: Configure responsive column settings appropriate for your content and layout - more columns on desktop, fewer on mobile

5. **Slider Implementation**: Only enable the slider functionality when it enhances the user experience, such as for featured category showcases

6. **Empty Terms Handling**: Use the Hide Empty option to prevent displaying categories with no associated content

7. **Template Part Reusability**: Create reusable template parts that can work across multiple taxonomy blocks for consistency

8. **Sorting Strategy**: Choose appropriate OrderBy and Order settings based on your specific use case (alphabetical, popularity, etc.)

## Related Blocks

- [Dynamic Query Block](./dynamic-query-block.md) - For querying and displaying posts associated with taxonomy terms
- [Container Block](./container-block.md) - For positioning taxonomy queries within layouts
- [Grid Row Block](./grid-row-block.md) - For creating custom grid layouts with taxonomy terms
- [Users Query Block](./users-query-block.md) - For querying and displaying user data

