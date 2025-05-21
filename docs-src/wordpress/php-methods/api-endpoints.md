# API Endpoints

## Overview

The Phenix Design System provides a set of PHP methods for creating and managing custom REST API endpoints in WordPress. These methods simplify the process of extending WordPress's REST API functionality, enabling custom data retrieval and manipulation for frontend applications, headless WordPress setups, or integration with third-party services. This documentation covers the core functions and techniques for creating API endpoints using the Phenix Design System.

## Key Features

- **Simplified endpoint creation** with minimal code
- **Support for multiple HTTP methods** (GET, POST, PUT)
- **Parameter validation**
- **Permission control** for endpoint access
- **Integration with WordPress data**
- **JSON response formatting**
- **Error handling**

## Core Functions

### `pds_add_api()`

The primary function for registering custom REST API endpoints with WordPress.

```php
pds_add_api([
    'api_slug'   => 'endpoint-name',
    'api_props'  => [
        'param1' => [
            'required' => true,
            'type'     => 'string'
        ],
        'param2' => [
            'required' => false,
            'type'     => 'integer'
        ]
    ],
    'get_method' => 'callback_function_for_get',
    'set_method' => 'callback_function_for_post',
    'read_prem'  => '__return_true',
    'write_prem' => 'is_user_logged_in'
]);
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `api_slug` | String | The URL path for your endpoint (e.g., "custom-data") |
| `api_props` | Array | Parameter definitions for the endpoint |
| `get_method` | String/Callback | Function to handle GET requests |
| `set_method` | String/Callback | Function to handle POST/PUT requests |
| `read_prem` | String/Callback | Permission callback for read access |
| `write_prem` | String/Callback | Permission callback for write access |

#### Parameter Definitions

The `api_props` array defines the parameters your endpoint accepts:

```php
'api_props' => [
    'parameter_name' => [
        'required' => true/false,  // Whether the parameter is required
        'type'     => 'string',    // Parameter data type (string, integer, boolean, etc.)
        'default'  => 'value',     // Default value if not provided (optional)
        'sanitize' => 'function'   // Sanitization function (optional)
    ]
]
```

#### Permission Callbacks

The `read_prem` and `write_prem` parameters control who can access your endpoint:

| Permission | Description | Example |
|------------|-------------|---------|
| `__return_true` | Anyone can access | `'read_prem' => '__return_true'` |
| `is_user_logged_in` | Only logged-in users can access | `'write_prem' => 'is_user_logged_in'` |
| Custom callback | Custom permission logic | `'write_prem' => 'my_custom_permission'` |

## Creating API Endpoints

### Basic API Endpoint

Here's a basic example of creating a simple API endpoint that returns site information:

```php
// Register the API endpoint
function register_site_info_endpoint() {
    pds_add_api([
        'api_slug'   => 'site-info',
        'api_props'  => [],  // No parameters required
        'get_method' => 'get_site_info',
        'set_method' => 'update_site_info',
        'read_prem'  => '__return_true',
        'write_prem' => 'is_user_logged_in'
    ]);
}
add_action('rest_api_init', 'register_site_info_endpoint');

// GET method callback
function get_site_info($request) {
    return rest_ensure_response([
        'success' => true,
        'data' => [
            'name' => get_bloginfo('name'),
            'description' => get_bloginfo('description'),
            'url' => get_bloginfo('url'),
            'version' => get_bloginfo('version')
        ]
    ]);
}

// POST method callback
function update_site_info($request) {
    $params = $request->get_params();
    
    if (isset($params['name'])) {
        update_option('blogname', sanitize_text_field($params['name']));
    }
    
    if (isset($params['description'])) {
        update_option('blogdescription', sanitize_text_field($params['description']));
    }
    
    return rest_ensure_response([
        'success' => true,
        'message' => 'Site information updated successfully'
    ]);
}
```

### API Endpoint with Parameters

For endpoints that accept parameters, define them in the `api_props` array:

```php
// Register the API endpoint
function register_posts_endpoint() {
    pds_add_api([
        'api_slug'   => 'posts',
        'api_props'  => [
            'count' => [
                'required' => false,
                'type'     => 'integer',
                'default'  => 10
            ],
            'category' => [
                'required' => false,
                'type'     => 'string'
            ],
            'status' => [
                'required' => false,
                'type'     => 'string',
                'default'  => 'publish'
            ]
        ],
        'get_method' => 'get_custom_posts',
        'set_method' => 'create_custom_post',
        'read_prem'  => '__return_true',
        'write_prem' => 'is_user_logged_in'
    ]);
}
add_action('rest_api_init', 'register_posts_endpoint');

// GET method callback
function get_custom_posts($request) {
    $params = $request->get_params();
    
    $args = [
        'posts_per_page' => isset($params['count']) ? intval($params['count']) : 10,
        'post_status'    => isset($params['status']) ? $params['status'] : 'publish'
    ];
    
    if (isset($params['category'])) {
        $args['category_name'] = $params['category'];
    }
    
    $posts = get_posts($args);
    $formatted_posts = [];
    
    foreach ($posts as $post) {
        $formatted_posts[] = [
            'id'      => $post->ID,
            'title'   => $post->post_title,
            'excerpt' => get_the_excerpt($post),
            'link'    => get_permalink($post->ID),
            'date'    => $post->post_date
        ];
    }
    
    return rest_ensure_response([
        'success' => true,
        'data'    => $formatted_posts
    ]);
}

// POST method callback
function create_custom_post($request) {
    $params = $request->get_params();
    
    if (!isset($params['title']) || empty($params['title'])) {
        return new WP_Error('missing_title', 'Title is required', ['status' => 400]);
    }
    
    $post_data = [
        'post_title'   => sanitize_text_field($params['title']),
        'post_content' => isset($params['content']) ? wp_kses_post($params['content']) : '',
        'post_status'  => isset($params['status']) ? $params['status'] : 'draft',
        'post_author'  => get_current_user_id()
    ];
    
    $post_id = wp_insert_post($post_data);
    
    if (is_wp_error($post_id)) {
        return new WP_Error('post_creation_failed', $post_id->get_error_message(), ['status' => 500]);
    }
    
    if (isset($params['category']) && !empty($params['category'])) {
        $category = get_category_by_slug($params['category']);
        if ($category) {
            wp_set_post_categories($post_id, [$category->term_id]);
        }
    }
    
    return rest_ensure_response([
        'success' => true,
        'message' => 'Post created successfully',
        'post_id' => $post_id
    ]);
}
```

## Advanced Techniques

### Custom Permission Callbacks

You can create custom permission callbacks to control access to your endpoints:

```php
function can_access_api() {
    // Check if user has a specific capability
    if (current_user_can('manage_options')) {
        return true;
    }
    
    // Check if user is an author or editor
    if (current_user_can('edit_posts')) {
        return true;
    }
    
    // Check for a specific user role
    $user = wp_get_current_user();
    if (in_array('subscriber', (array) $user->roles)) {
        return false;
    }
    
    return false;
}

// Use the custom permission callback
pds_add_api([
    'api_slug'   => 'restricted-data',
    'api_props'  => [],
    'get_method' => 'get_restricted_data',
    'set_method' => 'update_restricted_data',
    'read_prem'  => 'can_access_api',
    'write_prem' => 'can_access_api'
]);
```

### Error Handling

Proper error handling is important for API endpoints:

```php
function get_user_data($request) {
    $params = $request->get_params();
    
    if (!isset($params['user_id'])) {
        return new WP_Error(
            'missing_user_id',
            'User ID is required',
            ['status' => 400]
        );
    }
    
    $user = get_user_by('id', $params['user_id']);
    
    if (!$user) {
        return new WP_Error(
            'user_not_found',
            'User not found',
            ['status' => 404]
        );
    }
    
    // Check if the current user can access this data
    if (get_current_user_id() !== $user->ID && !current_user_can('edit_users')) {
        return new WP_Error(
            'permission_denied',
            'You do not have permission to access this data',
            ['status' => 403]
        );
    }
    
    return rest_ensure_response([
        'success' => true,
        'data' => [
            'id' => $user->ID,
            'name' => $user->display_name,
            'email' => $user->user_email,
            'registered' => $user->user_registered
        ]
    ]);
}
```

### Working with Custom Post Types

API endpoints can work with custom post types:

```php
function register_cpt_endpoint() {
    pds_add_api([
        'api_slug'   => 'services',
        'api_props'  => [
            'count' => [
                'required' => false,
                'type'     => 'integer',
                'default'  => 10
            ]
        ],
        'get_method' => 'get_services',
        'set_method' => 'create_service',
        'read_prem'  => '__return_true',
        'write_prem' => 'is_user_logged_in'
    ]);
}
add_action('rest_api_init', 'register_cpt_endpoint');

function get_services($request) {
    $params = $request->get_params();
    
    $args = [
        'post_type'      => 'service',
        'posts_per_page' => isset($params['count']) ? intval($params['count']) : 10,
        'post_status'    => 'publish'
    ];
    
    $services = get_posts($args);
    $formatted_services = [];
    
    foreach ($services as $service) {
        $formatted_services[] = [
            'id'          => $service->ID,
            'title'       => $service->post_title,
            'description' => get_the_excerpt($service),
            'link'        => get_permalink($service->ID),
            'thumbnail'   => get_the_post_thumbnail_url($service->ID, 'medium'),
            'price'       => get_post_meta($service->ID, 'price', true),
            'duration'    => get_post_meta($service->ID, 'duration', true)
        ];
    }
    
    return rest_ensure_response([
        'success' => true,
        'data'    => $formatted_services
    ]);
}
```

## Using API Endpoints

### From JavaScript

You can access your API endpoints using standard HTTP requests:

```javascript
// GET request
fetch('/wp-json/pds-blocks/v2/site-info')
  .then(response => response.json())
  .then(data => console.log(data));

// POST request
fetch('/wp-json/pds-blocks/v2/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-WP-Nonce': wpApiSettings.nonce // For authenticated requests
  },
  body: JSON.stringify({
    title: 'New Post Title',
    content: 'Post content goes here',
    status: 'publish',
    category: 'news'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

### From PHP

You can also make internal requests to your API endpoints from PHP:

```php
function make_internal_api_request() {
    $request = new WP_REST_Request('GET', '/pds-blocks/v2/site-info');
    $response = rest_do_request($request);
    $data = $response->get_data();
    
    return $data;
}
```

## Best Practices

1. **Use descriptive endpoint names** that clearly indicate the endpoint's purpose

2. **Implement proper validation** for all parameters

3. **Set appropriate permissions** to protect sensitive data

4. **Return standardized responses** with consistent structure

5. **Include error handling** with meaningful error messages

6. **Document your endpoints** for other developers

7. **Consider rate limiting** for high-traffic endpoints

8. **Use HTTPS** for all API communications

9. **Sanitize inputs and escape outputs** to prevent security vulnerabilities

10. **Version your API** to maintain backward compatibility

## Common Use Cases

### User Authentication Endpoint

```php
function register_auth_endpoint() {
    pds_add_api([
        'api_slug'   => 'auth',
        'api_props'  => [
            'username' => [
                'required' => true,
                'type'     => 'string'
            ],
            'password' => [
                'required' => true,
                'type'     => 'string'
            ]
        ],
        'get_method' => 'get_current_user',
        'set_method' => 'authenticate_user',
        'read_prem'  => 'is_user_logged_in',
        'write_prem' => '__return_true'
    ]);
}

function authenticate_user($request) {
    $params = $request->get_params();
    
    $user = wp_authenticate($params['username'], $params['password']);
    
    if (is_wp_error($user)) {
        return new WP_Error(
            'authentication_failed',
            'Invalid username or password',
            ['status' => 401]
        );
    }
    
    $token = wp_generate_auth_cookie($user->ID, time() + (14 * DAY_IN_SECONDS), 'auth');
    
    return rest_ensure_response([
        'success' => true,
        'user_id' => $user->ID,
        'token'   => $token
    ]);
}

function get_current_user($request) {
    $user_id = get_current_user_id();
    $user = get_userdata($user_id);
    
    return rest_ensure_response([
        'success' => true,
        'data'    => [
            'id'    => $user->ID,
            'name'  => $user->display_name,
            'email' => $user->user_email,
            'roles' => $user->roles
        ]
    ]);
}
```

### Settings Endpoint

```php
function register_settings_endpoint() {
    pds_add_api([
        'api_slug'   => 'settings',
        'api_props'  => [
            'setting_name' => [
                'required' => false,
                'type'     => 'string'
            ],
            'setting_value' => [
                'required' => false,
                'type'     => 'string'
            ]
        ],
        'get_method' => 'get_settings',
        'set_method' => 'update_settings',
        'read_prem'  => 'is_user_logged_in',
        'write_prem' => 'current_user_can_manage_options'
    ]);
}

function current_user_can_manage_options() {
    return current_user_can('manage_options');
}

function get_settings($request) {
    $params = $request->get_params();
    
    if (isset($params['setting_name'])) {
        $value = get_option($params['setting_name']);
        
        return rest_ensure_response([
            'success' => true,
            'data'    => [
                $params['setting_name'] => $value
            ]
        ]);
    }
    
    // Return a predefined list of settings
    $settings = [
        'site_title'       => get_option('blogname'),
        'site_description' => get_option('blogdescription'),
        'site_url'         => get_option('siteurl'),
        'admin_email'      => get_option('admin_email'),
        'date_format'      => get_option('date_format'),
        'time_format'      => get_option('time_format'),
        'posts_per_page'   => get_option('posts_per_page')
    ];
    
    return rest_ensure_response([
        'success' => true,
        'data'    => $settings
    ]);
}

function update_settings($request) {
    $params = $request->get_params();
    
    if (!isset($params['setting_name']) || !isset($params['setting_value'])) {
        return new WP_Error(
            'missing_parameters',
            'Setting name and value are required',
            ['status' => 400]
        );
    }
    
    $result = update_option($params['setting_name'], $params['setting_value']);
    
    return rest_ensure_response([
        'success' => $result,
        'message' => $result ? 'Setting updated successfully' : 'Failed to update setting'
    ]);
}
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 errors | Ensure the endpoint is registered correctly and flush permalinks |
| Authentication failures | Verify the permission callback is correct |
| Parameter validation errors | Check parameter types and requirements |
| CORS issues | Add appropriate headers for cross-origin requests |
| Rate limiting | Implement caching or pagination for large data sets |

## Related Features

- [Admin Pages](./admin-pages.md)
- [Custom Post Types](../dev-tools/custom-post-types.md)
- [Custom Taxonomies](../dev-tools/custom-taxonomies.md)
- [Custom Meta Fields](../dev-tools/custom-meta-boxes.md)
