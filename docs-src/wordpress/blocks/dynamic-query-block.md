# Dynamic Query Block

## Overview

The Dynamic Query Block (registered as "Posts Query" in the block inserter) is a powerful component in the Phenix Design System that allows you to fetch and display dynamic content from your WordPress database. This server-side rendered block enables you to create custom content listings with flexible grid layouts and slider functionality. The block works by querying posts based on taxonomies and displaying them using template parts from your theme.

## Key Features

- **Taxonomy-Based Filtering**: Query posts by selecting specific taxonomies and terms
- **Template Part Integration**: Display query results using theme template parts
- **Flexible Grid Layout**: Configure responsive grid layouts with customizable columns
- **Slider Functionality**: Convert grid layouts into interactive sliders
- **Server-Side Rendering**: Content is rendered on the server for optimal performance and SEO
- **Pagination Support**: Optional pagination for query results
- **Search Integration**: Support for search queries with proper nonce verification

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Posts Query" or find it in the "Phenix Blocks" category
3. Add the Posts Query block to your page
4. Select a template part from your theme to use for displaying each post
5. In the Query by Taxonomies panel, select the taxonomies you want to filter by
6. For each selected taxonomy, choose specific terms to include in the query
7. Enable Grid Mode if you want to display results in a grid layout
8. Configure columns and responsive behavior as needed
9. Enable the Slider option if you want the grid to function as a slider

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| HTML Tag | Select the HTML element to use for the wrapper (div, nav, main, aside) |
| Template Part | Select a template part from your theme to use for displaying each post |
| Grid Mode | Toggle to enable grid layout for query results |
| Slider Mode | Toggle to enable slider functionality for grid layouts |
| Columns | Set the number of columns for different screen sizes (mobile, tablet, laptop, desktop) |

### Sidebar Controls

#### Query by Taxonomies Panel

| Control | Description |
|---------|-------------|
| Taxonomies Types | Select which taxonomies to use for filtering (categories, tags, custom taxonomies) |
| Terms Selection | For each selected taxonomy, choose specific terms to include in the query |

#### Grid Layout Panel

| Control | Description |
|---------|-------------|
| Grid Properties | Configure responsive grid layout settings |
| Alignment | Set alignment options for grid items |
| Responsive Columns | Configure different column counts for various screen sizes |
| Gap Controls | Set horizontal and vertical spacing between grid items |

#### Slider Options Panel

Only visible when Slider Mode is enabled:

| Control | Description |
|---------|-------------|
| Slides Per View | Set the number of slides visible at once |
| Slides Per Group | Set how many slides to move at once when navigating |
| Space Between | Control the gap between slider items |
| Navigation | Enable/disable navigation arrows |
| Pagination | Enable/disable pagination dots |
| Loop | Enable/disable infinite loop |
| Autoplay | Enable/disable automatic sliding |

#### Layout Panel

| Control | Description |
|---------|-------------|
| Display Type | Choose between grid, list, carousel, or masonry layout |
| Columns | Set the number of columns for grid and masonry layouts |
| Gap | Control the spacing between items |
| Aspect Ratio | Set a consistent aspect ratio for item thumbnails |
| Item Height | Control the height of items (auto, fixed, or dynamic) |
| Responsive Columns | Adjust column count for different screen sizes |

#### Template Panel

| Control | Description |
|---------|-------------|
| Template | Select from predefined item templates or create a custom one |
| Show Thumbnail | Display the featured image for each item |
| Thumbnail Size | Select the image size to use |
| Show Title | Display the item title |
| Show Excerpt | Display the item excerpt or summary |
| Excerpt Length | Control the length of excerpts |
| Show Meta | Display item metadata (author, date, categories, etc.) |
| Show Button | Add a "Read More" or custom action button |

#### Pagination Panel

| Control | Description |
|---------|-------------|
| Pagination Type | Choose between numbered pagination, load more button, or infinite scroll |
| Items Per Page | Set how many items to show before pagination |
| Show Page Numbers | Display numbered page links |
| Previous/Next | Show previous and next page navigation |
| Load More Text | Customize the text for the load more button |

#### Carousel Panel

When using carousel layout:

| Control | Description |
|---------|-------------|
| Slides Per View | Number of slides visible at once |
| Space Between | Gap between slides |
| Loop | Enable/disable infinite loop |
| Autoplay | Enable/disable automatic sliding |
| Navigation | Show/hide navigation arrows |
| Pagination | Show/hide pagination dots |

## Technical Implementation

The Dynamic Query block is implemented with server-side rendering for optimal performance and SEO. The PHP rendering function handles the query and display of posts:

### Query Construction

The block builds WordPress queries based on taxonomy selections:

1. **Taxonomy Filtering**: When taxonomies are selected, the block creates a `tax_query` parameter with the selected terms for each taxonomy.

2. **Pagination Support**: The block supports standard WordPress pagination with the `paged` parameter.

3. **Search Integration**: When search functionality is enabled, the block can accept search parameters with proper nonce verification.

### Template Part Integration

The block uses WordPress template parts for displaying query results:

```php
get_template_part("template-parts/".$block_attributes["template_part"], null, $the_query->the_post());
```

This approach allows for flexible and reusable templates that can be customized in your theme.

### Grid and Slider Functionality

The block supports both grid layouts and slider functionality:

1. **Grid Layout**: When `isFlexbox` is enabled, the block renders posts in a responsive grid with configurable columns.

2. **Slider Mode**: When both `isFlexbox` and `slider` are enabled, the grid becomes an interactive slider with navigation controls.

### Pagination Implementation

The block supports standard WordPress pagination through the `pagination()` function, which can be configured to display:

- Numbered page links
- Previous/Next navigation
- Custom styling for active and inactive pagination items

## Implementation Examples

The Dynamic Query block can be used in various ways based on the configuration options available. Below are descriptions of common implementations based on the actual block functionality.

### Basic Posts Grid

A grid layout displaying posts from a specific category:

- **Configuration**:
  - Template Part: Select a post card template from your theme
  - Grid Mode: Enabled
  - Columns: 3 columns on desktop, 2 on tablet, 1 on mobile
  - Taxonomies: Category selected with specific terms chosen

### Posts Slider

A slider showcasing featured posts:

- **Configuration**:
  - Template Part: Select a post slide template from your theme
  - Grid Mode: Enabled
  - Slider Mode: Enabled
  - Slides Per View: 1
  - Navigation: Enabled
  - Pagination: Enabled
  - Taxonomies: Tag selected with "featured" term chosen

### Blog Archive with Pagination

A standard blog layout with pagination:

- **Configuration**:
  - Template Part: Select a blog post template from your theme
  - Grid Mode: Enabled for multi-column layout
  - Columns: Configure based on desired layout
  - Query: Set pagination to true
  - Taxonomies: Configure based on desired filtering

### Custom Post Type Display

A grid of custom post types filtered by taxonomy:

- **Configuration**:
  - Template Part: Select a custom template for your post type
  - Grid Mode: Enabled
  - Columns: Configure based on desired layout
  - Query: Set post_type to your custom post type
  - Taxonomies: Select custom taxonomies associated with your post type

## Common Use Cases

### Blog Archive

Create a customized blog archive page with taxonomy-based filtering:

1. Add the Posts Query block to your page
2. Select an appropriate template part for blog posts
3. Configure taxonomy filters to show posts from specific categories
4. Enable grid mode with responsive columns (3 on desktop, 2 on tablet, 1 on mobile)
5. Enable pagination for better user experience

### Featured Content Slider

Create a slider showcasing featured content on your homepage:

1. Add the Posts Query block to your page
2. Select a template part designed for featured content
3. Configure taxonomy filters to show only posts with a specific tag (e.g., "featured")
4. Enable grid mode and slider mode
5. Configure slider options (navigation, pagination, autoplay)

### Category-Specific Content Grid

Display posts from specific categories in a responsive grid layout:

1. Add the Posts Query block to your page
2. Select an appropriate template part for the content type
3. In the Query by Taxonomies panel, select the category taxonomy
4. Choose specific category terms to include in your query
5. Enable grid mode and configure responsive columns

## Best Practices

1. **Template Part Selection**: Choose or create template parts that are specifically designed for the content you're displaying. This ensures consistent styling and proper data display.

2. **Taxonomy Organization**: Plan your taxonomy structure carefully to make filtering more effective. Well-organized taxonomies make it easier to create meaningful content queries.

3. **Responsive Configuration**: Always configure responsive column settings appropriate for your content. What looks good on desktop may not work well on mobile devices.

4. **Grid vs. Slider Usage**: Use grid layouts for standard content displays and enable slider functionality only when a carousel presentation enhances the user experience.

5. **Server-Side Performance**: Remember that this block uses server-side rendering, so complex queries with many taxonomy filters may impact page load times. Keep queries focused and specific.

6. **Template Part Reusability**: Create reusable template parts that can work across multiple query blocks for consistency and easier maintenance.

7. **Testing with Real Content**: Always test your query configurations with actual content to ensure the display works as expected across different screen sizes.

## Related Blocks

- [Container Block](./container-block.md) - For positioning query results within layouts
- [Grid Row Block](./grid-row-block.md) - For creating custom grid layouts with query results
- [Taxonomies Query Block](./taxonomies-query-block.md) - For querying taxonomy terms
- [Users Query Block](./users-query-block.md) - For querying and displaying user data

