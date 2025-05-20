# Admin Pages

## Overview

The Phenix Design System provides a set of PHP methods for creating and managing custom administration pages in WordPress. These methods simplify the process of building professional, integrated admin interfaces that maintain WordPress's native look and feel while providing custom functionality. This documentation covers the core functions and techniques for creating admin pages using the Phenix Design System.

## Key Features

- **Simplified page creation** with minimal code
- **Consistent WordPress admin styling**
- **Tabbed interface support** for organizing complex settings
- **Form handling capabilities**
- **Integration with WordPress admin menu**
- **Responsive design** that works across all devices
- **Customizable content areas**

## Core Functions

### `pds_add_admin_page()`

The primary function for creating custom admin pages with a consistent layout and styling.

```php
pds_add_admin_page(
    $page_title,       // Page title
    $page_description, // Page description
    $form_page,        // Form action URL (or false for no form)
    $tabs_list,        // Tabs configuration
    $submit_button     // Submit button text (or false for no button)
);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$page_title` | String | The title displayed at the top of the admin page |
| `$page_description` | String | A brief description of the page's purpose |
| `$form_page` | String/Boolean | The form action URL, or `false` for no form |
| `$tabs_list` | Array | Configuration for page tabs (see Tabs Configuration below) |
| `$submit_button` | String/Boolean | Text for the submit button, or `false` for no button |

#### Tabs Configuration

The `$tabs_list` parameter accepts an associative array where each key is a unique tab identifier and each value is an array with the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `title` | String | The tab title displayed to users |
| `icon` | String | Dashicon class for the tab icon |
| `content` | String/Callback | HTML content or callback function that returns content |

#### Return Value

Returns a string containing the HTML markup for the admin page.

## Creating Admin Pages

### Basic Admin Page

Here's a basic example of creating a simple admin page with a single tab:

```php
function my_custom_admin_page() {
    // Generate page content
    $page_content = pds_add_admin_page(
        'My Custom Page',
        'This is a custom admin page',
        false,
        [
            'general' => [
                'title' => 'General Settings',
                'icon'  => 'dashicons-admin-generic',
                'content' => '<p>This is the content of the general settings tab.</p>'
            ]
        ],
        false
    );

    // Output the page content
    echo $page_content;
}
```

### Multi-Tab Admin Page

For more complex admin pages, you can create multiple tabs to organize content:

```php
function my_multi_tab_admin_page() {
    // Generate page content
    $page_content = pds_add_admin_page(
        'Multi-Tab Settings',
        'Configure various settings for your site',
        'options.php',
        [
            'general' => [
                'title' => 'General',
                'icon'  => 'dashicons-admin-generic',
                'content' => 'general_settings_tab'
            ],
            'advanced' => [
                'title' => 'Advanced',
                'icon'  => 'dashicons-admin-tools',
                'content' => 'advanced_settings_tab'
            ],
            'api' => [
                'title' => 'API',
                'icon'  => 'dashicons-rest-api',
                'content' => 'api_settings_tab'
            ]
        ],
        'Save Settings'
    );

    echo $page_content;
}

// Tab content callback functions
function general_settings_tab() {
    ob_start();
    ?>
    <div class="form-group">
        <label for="setting-1">Setting 1</label>
        <input type="text" id="setting-1" name="setting-1" value="<?php echo esc_attr(get_option('setting-1')); ?>">
    </div>
    <?php
    return ob_get_clean();
}

function advanced_settings_tab() {
    ob_start();
    ?>
    <div class="form-group">
        <label for="setting-2">Setting 2</label>
        <input type="checkbox" id="setting-2" name="setting-2" <?php checked(get_option('setting-2'), 'on'); ?>>
    </div>
    <?php
    return ob_get_clean();
}

function api_settings_tab() {
    ob_start();
    ?>
    <div class="form-group">
        <label for="api-key">API Key</label>
        <input type="text" id="api-key" name="api-key" value="<?php echo esc_attr(get_option('api-key')); ?>">
    </div>
    <?php
    return ob_get_clean();
}
```

## Registering Admin Pages

After creating your admin page content, you need to register it with WordPress using the `add_menu_page()` or `add_submenu_page()` functions:

### Top-Level Menu Page

```php
function register_my_custom_admin_page() {
    add_menu_page(
        'My Custom Page',         // Page title
        'Custom Page',            // Menu title
        'manage_options',         // Capability required
        'my-custom-page',         // Menu slug
        'my_custom_admin_page',   // Callback function
        'dashicons-admin-generic', // Icon
        30                        // Position
    );
}
add_action('admin_menu', 'register_my_custom_admin_page');
```

### Submenu Page

```php
function register_my_custom_submenu_page() {
    add_submenu_page(
        'options-general.php',     // Parent slug
        'My Custom Submenu',       // Page title
        'Custom Submenu',          // Menu title
        'manage_options',          // Capability required
        'my-custom-submenu',       // Menu slug
        'my_custom_submenu_page'   // Callback function
    );
}
add_action('admin_menu', 'register_my_custom_submenu_page');
```

## Form Handling

When creating admin pages with forms, you'll need to handle form submissions using the WordPress Settings API:

```php
// Register settings
function register_my_settings() {
    register_setting('my-settings-group', 'setting-1');
    register_setting('my-settings-group', 'setting-2');
    register_setting('my-settings-group', 'api-key');
}
add_action('admin_init', 'register_my_settings');

// Create the admin page
function my_settings_page() {
    // Add settings fields to the form
    settings_fields('my-settings-group');
    
    $page_content = pds_add_admin_page(
        'My Settings',
        'Configure your settings here',
        'options.php',  // WordPress settings API form handler
        [
            'general' => [
                'title' => 'General Settings',
                'icon'  => 'dashicons-admin-generic',
                'content' => 'general_settings_tab'
            ]
        ],
        'Save Settings'
    );

    // Output the page content
    echo $page_content;
}
```

## Styling Admin Pages

The Phenix Design System automatically applies WordPress admin styles to your pages, but you can add custom styles:

```php
function my_admin_styles() {
    $screen = get_current_screen();
    
    // Only load on your custom page
    if ($screen->id === 'toplevel_page_my-custom-page') {
        wp_enqueue_style('my-admin-styles', plugin_dir_url(__FILE__) . 'css/admin-styles.css');
    }
}
add_action('admin_enqueue_scripts', 'my_admin_styles');
```

## Common Use Cases

### Plugin Settings Page

```php
function plugin_settings_page() {
    $page_content = pds_add_admin_page(
        'Plugin Settings',
        'Configure how the plugin works',
        'options.php',
        [
            'general' => [
                'title' => 'General',
                'icon'  => 'dashicons-admin-generic',
                'content' => 'general_settings_tab'
            ],
            'advanced' => [
                'title' => 'Advanced',
                'icon'  => 'dashicons-admin-tools',
                'content' => 'advanced_settings_tab'
            ]
        ],
        'Save Settings'
    );

    echo $page_content;
}
```

### Documentation Page

```php
function plugin_documentation_page() {
    $page_content = pds_add_admin_page(
        'Documentation',
        'Learn how to use this plugin',
        false,  // No form needed
        [
            'getting-started' => [
                'title' => 'Getting Started',
                'icon'  => 'dashicons-welcome-learn-more',
                'content' => 'getting_started_content'
            ],
            'features' => [
                'title' => 'Features',
                'icon'  => 'dashicons-star-filled',
                'content' => 'features_content'
            ],
            'faq' => [
                'title' => 'FAQ',
                'icon'  => 'dashicons-format-chat',
                'content' => 'faq_content'
            ]
        ],
        false  // No submit button
    );

    echo $page_content;
}
```

### Import/Export Page

```php
function import_export_page() {
    $page_content = pds_add_admin_page(
        'Import/Export',
        'Import and export your settings',
        'admin-post.php?action=export_settings',
        [
            'export' => [
                'title' => 'Export',
                'icon'  => 'dashicons-upload',
                'content' => 'export_settings_tab'
            ],
            'import' => [
                'title' => 'Import',
                'icon'  => 'dashicons-download',
                'content' => 'import_settings_tab'
            ]
        ],
        'Export Settings'
    );

    echo $page_content;
}
```

## Best Practices

1. **Use clear, descriptive titles** for pages and tabs

2. **Group related settings** into logical tabs

3. **Include helpful descriptions** for settings fields

4. **Use appropriate capabilities** to control access

5. **Follow WordPress UI patterns** for consistency

6. **Validate and sanitize** all user inputs

7. **Use nonces** for form security

8. **Add confirmation messages** after form submissions

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Page not appearing in menu | Check the `add_menu_page()` or `add_submenu_page()` function call |
| Form not saving | Verify settings are registered with `register_setting()` |
| Permission errors | Check the capability parameter in the menu registration |
| Styling issues | Ensure WordPress admin styles are not being overridden |
| JavaScript errors | Check for conflicts with other admin scripts |

## Related Features

- [API Creator](../dev-tools/api-creator.md)
- [Custom Post Types](../dev-tools/custom-post-types.md)
- [Custom Taxonomies](../dev-tools/custom-taxonomies.md)
- [Custom Meta Fields](../dev-tools/custom-meta-boxes.md)
