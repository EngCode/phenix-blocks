# Admin Page Creator

## Overview

The Admin Page Creator in the Phenix Design System provides a streamlined way to create custom administration pages in WordPress without extensive coding. This powerful tool allows developers to extend WordPress's admin interface with custom pages for settings, documentation, or specialized functionality. With a simple, structured approach to page creation, the Admin Page Creator makes it easy to build professional, integrated admin pages that maintain WordPress's native look and feel while providing custom functionality for your theme or plugin.

## Key Features

- **Simplified page creation** with minimal code
- **Consistent WordPress admin styling**
- **Tabbed interface support** for organizing complex settings
- **Form handling capabilities**
- **Integration with WordPress admin menu**
- **Responsive design** that works across all devices
- **Customizable content areas**

## Understanding WordPress Admin Pages

WordPress admin pages are the interface elements that appear in the WordPress dashboard. By default, WordPress includes pages for posts, pages, media, comments, appearance, plugins, users, tools, and settings. The Admin Page Creator allows you to add custom pages for:

- Plugin settings
- Theme options
- Documentation
- Custom tools and utilities
- Data management interfaces
- Reports and analytics
- User profile extensions

## Creating a New Admin Page

The Admin Page Creator provides a programmatic approach to creating custom admin pages using the `pds_add_admin_page()` function. This function generates the HTML structure for your admin page, including tabs, forms, and content areas.

### Basic Usage

```php
$page_content = pds_add_admin_page(
    'Page Title',                 // Page title
    'Page description text',      // Page description
    'form-action-url',            // Form action URL (or false for no form)
    [                             // Tabs configuration
        'tab1' => [
            'title' => 'Tab 1 Title',
            'icon'  => 'dashicons-admin-generic',
            'content' => 'Tab 1 content goes here'
        ],
        'tab2' => [
            'title' => 'Tab 2 Title',
            'icon'  => 'dashicons-admin-tools',
            'content' => 'Tab 2 content goes here'
        ]
    ],
    'Save Changes'                // Submit button text (or false for no button)
);
```

### Function Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$page_title` | String | The title displayed at the top of the admin page |
| `$page_description` | String | A brief description of the page's purpose |
| `$form_page` | String/Boolean | The form action URL, or `false` for no form |
| `$tabs_list` | Array | Configuration for page tabs (see Tabs Configuration below) |
| `$submit_button` | String/Boolean | Text for the submit button, or `false` for no button |

### Tabs Configuration

The `$tabs_list` parameter accepts an associative array where each key is a unique tab identifier and each value is an array with the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `title` | String | The tab title displayed to users |
| `icon` | String | Dashicon class for the tab icon |
| `content` | String/Callback | HTML content or callback function that returns content |

## Registering the Admin Page

After creating your admin page content with `pds_add_admin_page()`, you need to register it with WordPress using the `add_menu_page()` or `add_submenu_page()` functions:

### Adding a Top-Level Menu Page

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
                'content' => 'General settings content'
            ],
            'advanced' => [
                'title' => 'Advanced Settings',
                'icon'  => 'dashicons-admin-tools',
                'content' => 'Advanced settings content'
            ]
        ],
        'Save Settings'
    );

    // Output the page content
    echo $page_content;
}

// Register the page with WordPress
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

### Adding a Submenu Page

```php
function my_custom_submenu_page() {
    // Generate page content
    $page_content = pds_add_admin_page(
        'My Custom Submenu',
        'This is a custom submenu page',
        false,
        [
            'settings' => [
                'title' => 'Settings',
                'icon'  => 'dashicons-admin-settings',
                'content' => 'Settings content'
            ]
        ],
        'Save Settings'
    );

    // Output the page content
    echo $page_content;
}

// Register the submenu page with WordPress
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

## Dynamic Content Generation

You can use callback functions to generate tab content dynamically:

```php
function generate_settings_tab() {
    ob_start();
    ?>
    <div class="form-group">
        <label for="setting-1">Setting 1</label>
        <input type="text" id="setting-1" name="setting-1" value="<?php echo esc_attr(get_option('setting-1')); ?>">
    </div>
    <div class="form-group">
        <label for="setting-2">Setting 2</label>
        <input type="text" id="setting-2" name="setting-2" value="<?php echo esc_attr(get_option('setting-2')); ?>">
    </div>
    <?php
    return ob_get_clean();
}

$page_content = pds_add_admin_page(
    'Dynamic Content Example',
    'This page demonstrates dynamic content generation',
    'options.php',
    [
        'settings' => [
            'title' => 'Settings',
            'icon'  => 'dashicons-admin-settings',
            'content' => 'generate_settings_tab'  // Function name as a string
        ]
    ],
    'Save Settings'
);
```

## Form Handling

When creating admin pages with forms, you'll need to handle form submissions:

```php
// Register settings
function register_my_settings() {
    register_setting('my-settings-group', 'setting-1');
    register_setting('my-settings-group', 'setting-2');
}
add_action('admin_init', 'register_my_settings');

// Create the admin page
function my_settings_page() {
    $page_content = pds_add_admin_page(
        'My Settings',
        'Configure your settings here',
        'options.php',  // WordPress settings API form handler
        [
            'general' => [
                'title' => 'General Settings',
                'icon'  => 'dashicons-admin-generic',
                'content' => 'generate_settings_tab'
            ]
        ],
        'Save Settings'
    );

    // Output the page content
    echo $page_content;
}
```

## Styling Admin Pages

The Admin Page Creator automatically applies WordPress admin styles to your pages, but you can add custom styles:

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

## Best Practices

1. **Use clear, descriptive titles** for pages and tabs

2. **Group related settings** into logical tabs

3. **Include helpful descriptions** for settings fields

4. **Use appropriate capabilities** to control access

5. **Follow WordPress UI patterns** for consistency

6. **Validate and sanitize** all user inputs

7. **Use nonces** for form security

8. **Add confirmation messages** after form submissions

## Common Admin Page Examples

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

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Page not appearing in menu | Check the `add_menu_page()` or `add_submenu_page()` function call |
| Form not saving | Verify settings are registered with `register_setting()` |
| Permission errors | Check the capability parameter in the menu registration |
| Styling issues | Ensure WordPress admin styles are not being overridden |
| JavaScript errors | Check for conflicts with other admin scripts |

## Related Features

- [API Creator](./api-creator.md)
- [Custom Post Types](./custom-post-types.md)
- [Custom Taxonomies](./custom-taxonomies.md)
- [Custom Meta Fields](./custom-meta-boxes.md)
