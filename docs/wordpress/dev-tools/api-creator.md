# API Creator

## Overview

The API Creator in the Phenix Design System provides a streamlined way to create custom REST API endpoints in WordPress without writing extensive code. This powerful tool allows developers to extend WordPress's REST API functionality, enabling custom data retrieval and manipulation for frontend applications, headless WordPress setups, or integration with third-party services. With simple configuration options and built-in security controls, the API Creator makes it easy to expose your WordPress data in a controlled, secure manner.

## Key Features

- **No-code creation** of custom REST API endpoints
- **Secure permission controls** for endpoint access
- **Support for multiple HTTP methods** (GET, POST, PUT)
- **Custom parameter validation**
- **Integration with WordPress data** including posts, users, and custom data
- **JSON response formatting**
- **Error handling and validation**

## Understanding WordPress REST API

The WordPress REST API provides HTTP endpoints for interacting with WordPress data. By default, WordPress includes endpoints for posts, pages, users, and other core data types. The API Creator extends this functionality by allowing you to create custom endpoints for:

- Custom post types data
- User-specific data
- Site settings and options
- Custom database queries
- Integration with third-party services
- Frontend data requirements

## Accessing API Creator

To access the API Creator interface:

1. In your WordPress admin, navigate to **Phenix Design System**
2. Select the **API Creator** tab

![API Creator Interface](../../../assets/images/wordpress/api-creator-interface.png)

## Creating a New API Endpoint

To create a new API endpoint:

1. Access the API Creator interface as described above
2. Click the **Add New Endpoint** button
3. Fill in the following information in the form:

### Basic Settings

| Setting | Description |
|---------|-------------|
| Endpoint Name | A descriptive name for your endpoint |
| Endpoint Slug | The URL path for your endpoint (e.g., "custom-data") |
| Description | Brief explanation of the endpoint's purpose |

### Endpoint Configuration

| Setting | Description |
|---------|-------------|
| Namespace | API namespace (default: pds-blocks/v2) |
| Methods | HTTP methods to support (GET, POST, PUT) |
| Read Permission | Who can read data from this endpoint |
| Write Permission | Who can write data to this endpoint |

### Parameters

Define the parameters your endpoint accepts:

| Setting | Description |
|---------|-------------|
| Parameter Name | Name of the parameter (e.g., "post_id") |
| Parameter Type | Data type (string, integer, boolean, etc.) |
| Required | Whether the parameter is required |
| Default Value | Default value if parameter is not provided |
| Validation | Rules to validate parameter values |

### Response Configuration

| Setting | Description |
|---------|-------------|
| Response Format | Structure of the response data |
| Error Handling | How errors should be reported |
| Data Source | Where the endpoint gets its data |

4. Click **Save Endpoint**

![Adding a New API Endpoint](../../../assets/images/wordpress/api-endpoint-add.png)

## API Endpoint Structure

Each API endpoint in the Phenix Design System follows this URL structure:

```
https://your-site.com/wp-json/pds-blocks/v2/your-endpoint-slug
```

Where:
- `wp-json` is the WordPress REST API base
- `pds-blocks/v2` is the Phenix API namespace
- `your-endpoint-slug` is your custom endpoint path

## Permission Controls

The API Creator provides robust permission controls for your endpoints:

| Permission | Description | Code Equivalent |
|------------|-------------|-----------------|
| Public | Anyone can access | `__return_true` |
| Logged-in Users | Only logged-in users can access | `is_user_logged_in` |
| Specific Role | Only users with specific role(s) can access | Custom callback |
| Custom | Custom permission logic | Custom callback |

## Using API Endpoints

Once created, your API endpoints can be accessed using standard HTTP requests:

### GET Requests

For retrieving data:

```javascript
// JavaScript example
fetch('https://your-site.com/wp-json/pds-blocks/v2/your-endpoint')
  .then(response => response.json())
  .then(data => console.log(data));
```

### POST Requests

For creating or updating data:

```javascript
// JavaScript example
fetch('https://your-site.com/wp-json/pds-blocks/v2/your-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    parameter1: 'value1',
    parameter2: 'value2'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Advanced Implementation

For developers who need more control, the Phenix Design System also provides a programmatic way to register custom API endpoints using the `pds_add_api()` function:

```php
pds_add_api([
    'api_slug' => 'custom-endpoint',
    'api_props' => [
        'param1' => [
            'required' => true,
            'type' => 'string'
        ],
        'param2' => [
            'required' => false,
            'type' => 'integer'
        ]
    ],
    'get_method' => 'your_get_callback_function',
    'set_method' => 'your_set_callback_function',
    'read_prem' => '__return_true',
    'write_prem' => 'is_user_logged_in'
]);
```

### Callback Functions

Your callback functions should handle the request and return a response:

```php
function your_get_callback_function($request) {
    // Process GET request
    $params = $request->get_params();
    
    // Your logic here
    
    return rest_ensure_response([
        'success' => true,
        'data' => $your_data
    ]);
}

function your_set_callback_function($request) {
    // Process POST/PUT request
    $params = $request->get_params();
    
    // Your logic here
    
    return rest_ensure_response([
        'success' => true,
        'message' => 'Data updated successfully'
    ]);
}
```

## Common API Endpoint Examples

### Custom Post Type Data Endpoint

```php
pds_add_api([
    'api_slug' => 'services',
    'api_props' => [
        'count' => [
            'required' => false,
            'type' => 'integer',
            'default' => 10
        ],
        'category' => [
            'required' => false,
            'type' => 'string'
        ]
    ],
    'get_method' => 'get_services_data',
    'set_method' => 'update_services_data',
    'read_prem' => '__return_true',
    'write_prem' => 'is_user_logged_in'
]);
```

### User Data Endpoint

```php
pds_add_api([
    'api_slug' => 'user-profile',
    'api_props' => [
        'user_id' => [
            'required' => true,
            'type' => 'integer'
        ]
    ],
    'get_method' => 'get_user_profile_data',
    'set_method' => 'update_user_profile_data',
    'read_prem' => 'is_user_logged_in',
    'write_prem' => 'can_edit_users'
]);
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

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 errors | Ensure the endpoint is registered correctly and flush permalinks |
| Authentication failures | Verify the permission callback is correct |
| Parameter validation errors | Check parameter types and requirements |
| CORS issues | Add appropriate headers for cross-origin requests |
| Rate limiting | Implement caching or pagination for large data sets |

## Related Features

- [Custom Post Types](./custom-post-types.md)
- [Custom Taxonomies](./custom-taxonomies.md)
- [Custom Meta Fields](./custom-meta-boxes.md)
