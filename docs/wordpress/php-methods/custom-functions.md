# Custom Functions

## Overview

The Phenix Design System provides a rich set of PHP utility functions that extend WordPress's core functionality. These functions simplify common development tasks, enhance content management, and improve the overall user experience. This documentation covers the key utility functions available in the Phenix Design System and how to use them effectively in your WordPress projects.

## Archive Title Functions

### `refactor_archive_title()`

Removes the default "Archive:" prefix from WordPress archive titles for a cleaner presentation.

```php
/**
 * Removes the "Archive:" prefix from archive titles
 * @param string $title The original archive title
 * @return string The modified archive title
 */
function refactor_archive_title($title) {
    if (is_category()) {
        $title = single_cat_title('', false);
    } elseif (is_tag()) {
        $title = single_tag_title('', false);
    } elseif (is_post_type_archive()) {
        $title = post_type_archive_title('', false);
    } elseif (is_tax()) {
        $title = single_term_title('', false);
    }
    return $title;
}
```

**Usage:**
This function is automatically hooked to the `get_the_archive_title` filter, so you don't need to call it directly.

## Pagination Functions

### `pagination()`

Creates a customizable pagination interface for WordPress queries.

```php
/**
 * Creates a pagination interface for WordPress queries
 * @param WP_Query $query The WordPress query object
 * @param array $options Pagination display options
 * @return void Outputs the pagination HTML
 */
pagination($query, $options = array(
    "container"  => "flexbox align-center mb-30",
    "buttons"    => "btn small square border-1 border-solid border-alpha-10 me-10",
    "normal_btn" => "light",
    "active_btn" => "primary active",
    "next_icon"  => "fas fa-angle-right",
    "prev_icon"  => "fas fa-angle-left",
));
```

**Parameters:**
- `$query` (WP_Query): The WordPress query object
- `$options` (array): Pagination display options
  - `container`: CSS classes for the pagination container
  - `buttons`: CSS classes for pagination buttons
  - `normal_btn`: CSS classes for inactive pagination buttons
  - `active_btn`: CSS classes for the active pagination button
  - `next_icon`: Icon class for the next button
  - `prev_icon`: Icon class for the previous button

**Usage:**
```php
// Example with default options
$query = new WP_Query([
    'post_type' => 'post',
    'posts_per_page' => 10,
    'paged' => get_query_var('paged') ? get_query_var('paged') : 1
]);

if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        // Display post content
    }
    
    // Display pagination
    pagination($query);
}
wp_reset_postdata();

// Example with custom options
pagination($query, [
    "container"  => "pagination-wrapper text-center",
    "buttons"    => "pagination-btn",
    "normal_btn" => "btn-default",
    "active_btn" => "btn-primary",
    "next_icon"  => "fas fa-chevron-right",
    "prev_icon"  => "fas fa-chevron-left",
]);
```

## Excerpt Functions

### `px_excerpt_length()`

Controls the length of post excerpts.

```php
/**
 * Sets the length of post excerpts
 * @param int $length The default excerpt length
 * @return int The modified excerpt length
 */
function px_excerpt_length($length) {
    return $length;
}
```

**Usage:**
This function is automatically hooked to the `excerpt_length` filter with a default value from the WordPress options or 175 if not set.

### `wpdocs_excerpt_more()`

Customizes the "more" text at the end of excerpts.

```php
/**
 * Customizes the "more" text at the end of excerpts
 * @param string $more The default "more" text
 * @return string The modified "more" text
 */
function wpdocs_excerpt_more($more) {
    return '...';
}
```

**Usage:**
This function is automatically hooked to the `excerpt_more` filter.

## Block Pattern Functions

### `pds_get_patterns()`

Retrieves all registered block patterns.

```php
/**
 * Retrieves all registered block patterns
 * @return array Array of block patterns
 */
function pds_get_patterns() {
    $patterns = WP_Block_Patterns_Registry::get_instance()->get_all_registered();
    return $patterns;
}
```

**Usage:**
```php
$patterns = pds_get_patterns();
foreach ($patterns as $pattern) {
    echo '<h3>' . $pattern['title'] . '</h3>';
    echo '<div class="pattern-description">' . $pattern['description'] . '</div>';
}
```

## Template Functions

### `pds_get_theme_parts()`

Gets a list of template parts from a theme.

```php
/**
 * Gets a list of files and directories from a given path
 * @param string|DirectoryIterator $path Path to scan or DirectoryIterator instance
 * @return array List of files and directories
 */
function pds_get_theme_parts($path) {
    // Function implementation
    return $files_list;
}
```

**Usage:**
```php
$template_parts = pds_get_theme_parts(get_template_directory() . '/template-parts');
foreach ($template_parts as $part) {
    echo $part['name'] . '<br>';
}
```

### `pds_get_theme_parts_select()`

Generates an HTML select element with theme template parts.

```php
/**
 * Generates an HTML select element with theme template parts
 * @return string HTML select element
 */
function pds_get_theme_parts_select() {
    // Function implementation
    return $select_html;
}
```

**Usage:**
```php
echo pds_get_theme_parts_select();
```

## Debug Functions

### `pds_var_dump()`

Provides a formatted var_dump for debugging variables.

```php
/**
 * Provides a formatted var_dump for debugging variables
 * @param mixed $variable The variable to dump
 * @return void Outputs the formatted var_dump
 */
function pds_var_dump($variable) {
    echo '<pre>';
    var_dump($variable);
    echo '</pre>';
}
```

**Usage:**
```php
$data = [
    'title' => 'Hello World',
    'content' => 'Lorem ipsum dolor sit amet',
    'author' => 'John Doe'
];
pds_var_dump($data);
```

## Post View Functions

### `get_post_views()`

Retrieves the number of views for a post.

```php
/**
 * Retrieves the number of views for a post
 * @param int $post_id The post ID
 * @return int The number of views
 */
function get_post_views($post_id) {
    $count_key = 'post_views_count';
    $count = get_post_meta($post_id, $count_key, true);
    
    if ($count == '') {
        delete_post_meta($post_id, $count_key);
        add_post_meta($post_id, $count_key, '0');
        return 0;
    }
    
    return $count;
}
```

**Usage:**
```php
echo 'This post has been viewed ' . get_post_views(get_the_ID()) . ' times';
```

## Post Management Functions

### `pds_import_posts()`

Imports posts from a JSON file.

```php
/**
 * Imports posts from a JSON file
 * @return void Outputs JSON response
 */
function pds_import_posts() {
    // Function implementation
}
```

**Usage:**
This function is hooked to the `wp_ajax_pds_import_posts` action and is triggered via AJAX.

### `generate_post_content()`

Generates post content with tabs from structured data.

```php
/**
 * Generates post content with tabs from structured data
 * @param array $post_data Post data array
 * @return string Generated post content
 */
function generate_post_content($post_data) {
    // Function implementation
    return $content;
}
```

**Usage:**
```php
$post_data = [
    'tabs' => [
        [
            'title' => 'Tab 1',
            'content' => 'Tab 1 content'
        ],
        [
            'title' => 'Tab 2',
            'content' => 'Tab 2 content'
        ]
    ]
];
$content = generate_post_content($post_data);
```

### `pds_posts_remover()`

Removes posts of a specific post type.

```php
/**
 * Removes posts of a specific post type
 * @param string $post_type The post type to remove
 * @return void Outputs JSON response
 */
function pds_posts_remover($post_type) {
    // Function implementation
}
```

**Usage:**
This function is hooked to the `wp_ajax_pds_posts_remover` action and is triggered via AJAX.

### `pds_posts_exporter()`

Exports posts to a JSON file.

```php
/**
 * Exports posts to a JSON file
 * @param string $post_type The post type to export
 * @param array $metaboxes Meta fields to include
 * @param bool $content Whether to include post content
 * @return void Outputs JSON response
 */
function pds_posts_exporter($post_type = "post", $metaboxes = array(), $content = false) {
    // Function implementation
}
```

**Usage:**
This function is hooked to the `wp_ajax_pds_posts_exporter` action and is triggered via AJAX.

## Contact Form 7 Functions

### `pds_cf7_dd_options()`

Adds dynamic options to Contact Form 7 dropdown fields.

```php
/**
 * Adds dynamic options to Contact Form 7 dropdown fields
 * @param array $form_control The form control array
 * @param mixed $unused Unused parameter
 * @return array Modified form control array
 */
function pds_cf7_dd_options($form_control, $unused) {
    // Function implementation
    return $form_control;
}
```

**Usage:**
This function is automatically hooked to the `wpcf7_form_tag` filter.

## Post Duplication Functions

### `pds_add_duplicate_button()`

Adds a duplicate link to the post actions in the admin list.

```php
/**
 * Adds a duplicate link to the post actions in the admin list
 * @param array $actions The post actions array
 * @param WP_Post $post The post object
 * @return array Modified actions array
 */
function pds_add_duplicate_button($actions, $post) {
    if (current_user_can('edit_posts')) {
        $actions['duplicate'] = '<a href="' . wp_nonce_url(admin_url('admin.php?action=duplicate_post&post_id=' . $post->ID), 'duplicate_post_' . $post->ID) . '">Duplicate</a>';
    }
    return $actions;
}
```

**Usage:**
This function is automatically hooked to the `post_row_actions` filter.

### `pds_duplicate_post()`

Handles the post duplication logic.

```php
/**
 * Handles the post duplication logic
 * @return void Redirects after duplication
 */
function pds_duplicate_post() {
    // Function implementation
}
```

**Usage:**
This function is automatically hooked to the `admin_action_duplicate_post` action.

## Best Practices

1. **Use the functions as intended**: Each function is designed for a specific purpose, so use them accordingly.

2. **Check for function existence**: Always check if a function exists before using it to avoid conflicts with other plugins.

3. **Customize with filters**: Many functions have filters that allow you to customize their behavior without modifying the core code.

4. **Cache results**: For functions that retrieve data, consider caching the results to improve performance.

5. **Handle errors gracefully**: Always check for errors and handle them appropriately to prevent your site from breaking.

## Examples

### Creating a Custom Archive Page

```php
<?php get_header(); ?>

<div class="container">
    <header class="page-header">
        <h1><?php echo get_the_archive_title(); ?></h1>
    </header>

    <div class="row">
        <?php
        $paged = get_query_var('paged') ? get_query_var('paged') : 1;
        $query = new WP_Query([
            'post_type' => 'post',
            'posts_per_page' => 10,
            'paged' => $paged
        ]);

        if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post();
                ?>
                <div class="col-md-6">
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                        <div class="entry-meta">
                            <span class="posted-on"><?php echo get_the_date(); ?></span>
                            <span class="views"><?php echo get_post_views(get_the_ID()); ?> views</span>
                        </div>
                        <div class="entry-content">
                            <?php the_excerpt(); ?>
                        </div>
                    </article>
                </div>
                <?php
            endwhile;

            // Display pagination
            pagination($query, [
                "container"  => "pagination-wrapper text-center",
                "buttons"    => "pagination-btn",
                "normal_btn" => "btn-default",
                "active_btn" => "btn-primary"
            ]);

        else :
            echo '<p>No posts found</p>';
        endif;

        wp_reset_postdata();
        ?>
    </div>
</div>

<?php get_footer(); ?>
```

### Creating a Block Pattern Selector

```php
function display_block_patterns() {
    $patterns = pds_get_patterns();
    
    echo '<div class="patterns-container">';
    foreach ($patterns as $pattern) {
        echo '<div class="pattern-item">';
        echo '<h3>' . $pattern['title'] . '</h3>';
        echo '<div class="pattern-description">' . $pattern['description'] . '</div>';
        echo '<button class="insert-pattern" data-pattern="' . esc_attr($pattern['name']) . '">Insert Pattern</button>';
        echo '</div>';
    }
    echo '</div>';
}
```

### Exporting and Importing Posts

```php
// Export posts
function export_custom_posts() {
    if (isset($_POST['export_posts']) && current_user_can('manage_options')) {
        pds_posts_exporter('custom_post_type', ['price', 'rating'], true);
    }
}
add_action('admin_init', 'export_custom_posts');

// Import posts
function import_custom_posts() {
    if (isset($_POST['import_posts']) && current_user_can('manage_options')) {
        // The actual import is handled by the AJAX action
        ?>
        <script>
        jQuery(document).ready(function($) {
            $.ajax({
                url: ajaxurl,
                type: 'POST',
                data: {
                    action: 'pds_import_posts',
                    file: '<?php echo esc_js($_POST['import_file']); ?>'
                },
                success: function(response) {
                    console.log(response);
                    alert('Posts imported successfully!');
                }
            });
        });
        </script>
        <?php
    }
}
add_action('admin_init', 'import_custom_posts');
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Function not working | Check if the function exists and is being called correctly |
| Pagination not showing | Ensure you're passing a valid WP_Query object to the pagination function |
| Post views not updating | Check if the post meta is being saved correctly |
| Block patterns not appearing | Verify that the block patterns are registered correctly |
| Post duplication failing | Check user permissions and nonce verification |

## Related Features

- [Admin Pages](./admin-pages.md)
- [API Endpoints](./api-endpoints.md)
- [Custom Post Types](../dev-tools/custom-post-types.md)
- [Custom Taxonomies](../dev-tools/custom-taxonomies.md)
- [Custom Meta Fields](../dev-tools/custom-meta-boxes.md)
