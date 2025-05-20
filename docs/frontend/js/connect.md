# Connect

## Overview

The Connect component in the Phenix Design System provides a simple way to make AJAX and Fetch API requests to external endpoints. It offers a unified interface for handling HTTP requests with different methods and connection types.

The `connect()` method allows you to make requests to APIs and handle the responses in a consistent way.

## Basic Usage

To make a basic AJAX request, you can call the `connect()` method on any Phenix element:

### JavaScript

```javascript
//====> Basic AJAX Request <====//
Phenix(document).connect({
    url: 'https://api.example.com/data',
    method: 'GET'
});
```

## Options

The `connect()` method accepts an options object with the following properties:

### JavaScript

```javascript
//====> Connect with Options <====//
Phenix(document).connect({
    type: 'ajax',               // Connection type: 'ajax' or 'fetch'
    url: 'https://api.example.com/data',  // API endpoint URL
    method: 'POST',             // HTTP method: GET, POST, PUT, DELETE
    headers: {                  // Request headers
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    }
});
```

## AJAX Requests

AJAX (Asynchronous JavaScript and XML) is the default connection type. It uses the XMLHttpRequest object to make HTTP requests:

### JavaScript

```javascript
//====> AJAX GET Request <====//
Phenix(document).connect({
    type: 'ajax',
    url: 'https://api.example.com/users',
    method: 'GET'
});

//====> AJAX POST Request <====//
Phenix(document).connect({
    type: 'ajax',
    url: 'https://api.example.com/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
});
```

## Handling Responses

The Connect component returns the response from the server, which you can process as needed:

### JavaScript

```javascript
//====> Handling AJAX Response <====//
const response = Phenix(document).connect({
    url: 'https://api.example.com/data'
});

// Process the response
console.log('Response:', response);
```

## Practical Example: Loading Data

Here's an example of using the Connect component to load data from an API and display it on a webpage:

### HTML

```html
<!-- Data Container -->
<div id="data-container" class="pdy-15">
    <div class="loading-indicator">Loading data...</div>
</div>

<!-- Load Data Button -->
<button id="load-data-btn" class="btn primary">Load Data</button>
```

### JavaScript

```javascript
//====> Load Data from API <====//
Phenix('#load-data-btn').on('click', () => {
    // Show loading indicator
    Phenix('#data-container').html('<div class="loading-indicator">Loading data...</div>');
    
    // Make API request
    const response = Phenix(document).connect({
        url: 'https://api.example.com/users',
        method: 'GET'
    });
    
    // Parse JSON response
    const data = JSON.parse(response);
    
    // Generate HTML from data
    let html = '<ul class="reset-list">';
    data.forEach(user => {
        html += `<li class="pdy-10 divider-b">${user.name} (${user.email})</li>`;
    });
    html += '</ul>';
    
    // Update container with data
    Phenix('#data-container').html(html);
});
```

## Options Reference

<figure>

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | string | `'ajax'` | Connection type: 'ajax' or 'fetch' |
| `url` | string | `null` | API endpoint URL |
| `method` | string | `'GET'` | HTTP method: GET, POST, PUT, DELETE |
| `headers` | object | `{}` | Request headers for authentication and content type |

<figcaption>
Connect Component Options
</figcaption>

</figure>

## Best Practices

1. **Error Handling**: Always implement proper error handling for API requests
2. **Loading States**: Show loading indicators while requests are in progress
3. **Response Validation**: Validate API responses before processing them
4. **Timeout Handling**: Set appropriate timeouts for requests to prevent hanging
5. **CORS Considerations**: Be aware of Cross-Origin Resource Sharing restrictions
6. **Authentication**: Securely handle authentication tokens and credentials
7. **Cache Management**: Consider implementing caching for frequently accessed data

## Security Considerations

When using the Connect component, keep these security considerations in mind:

1. **Never expose sensitive credentials** in client-side code
2. **Use HTTPS** for all API requests to ensure data is encrypted
3. **Validate and sanitize** all data received from APIs before using it
4. **Implement proper authentication** and authorization for protected resources
5. **Be cautious with CORS** settings to prevent unauthorized access

## Browser Compatibility

The Connect component uses standard XMLHttpRequest and Fetch APIs, which are supported by all modern browsers. For older browsers, consider using polyfills for the Fetch API if needed.
