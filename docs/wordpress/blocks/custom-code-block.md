# Custom Code Block

## Overview

The Custom Code Block is a versatile component in the Phenix Design System that allows you to insert custom HTML, CSS, or JavaScript directly into any location on your WordPress pages. Unlike the core WordPress Code block which treats code as static content, the Custom Code Block actually executes your code, making it an essential tool for developers and advanced users who need to implement custom functionality or styling beyond what's available through standard blocks.

![Custom Code Block](../../../assets/images/wordpress/custom-code-block.png)

## Key Features

- Insert and execute custom HTML, CSS, and JavaScript
- Live preview of code execution in the editor
- Automatic JavaScript execution after document load
- Syntax highlighting for different code types
- Code validation to catch errors
- Support for external libraries and dependencies
- Responsive execution across different devices

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Custom Code" or find it in the "Phenix Blocks" category
3. Add the Custom Code Block to your page
4. Select the code type (HTML, CSS, or JavaScript)
5. Enter your custom code in the editor
6. Preview your changes in the editor or on the frontend

## Block Settings

### General Options

| Option | Description |
|--------|-------------|
| Code Type | Select the type of code (HTML, CSS, or JavaScript) |
| Code Editor | Text area for entering your custom code |
| Auto Format | Enable/disable automatic code formatting |
| Line Numbers | Show/hide line numbers in the code editor |
| Syntax Highlighting | Enable/disable syntax highlighting |

### Execution Options

| Option | Description |
|--------|-------------|
| Load Timing | Control when JavaScript code executes (immediate, on DOM ready, on window load) |
| Execute in Editor | Enable/disable code execution within the editor |
| Execute on Frontend | Enable/disable code execution on the frontend |
| Dependencies | Specify external libraries or scripts required by your code |

### Advanced Options

| Option | Description |
|--------|-------------|
| Code ID | Assign a unique ID to the code block for targeting |
| Code Priority | Set the execution priority for JavaScript code |
| Conditional Loading | Control when the code should load based on conditions |
| Device Visibility | Show/hide code execution on specific devices |

## Examples

### Basic HTML Example

Adding custom HTML content:

```html
<!-- wp:phenix/custom-code {"codeType":"html"} -->
<div class="wp-block-phenix-custom-code" data-code-type="html">
  <div class="custom-html-wrapper">
    <div class="custom-banner">
      <h3>Special Announcement</h3>
      <p>We're excited to announce our upcoming event on <strong>June 15th</strong>!</p>
      <a href="/events" class="custom-button">Learn More</a>
    </div>
  </div>
</div>
<!-- /wp:phenix/custom-code -->
```

### Custom CSS Styling

Adding custom CSS styles:

```html
<!-- wp:phenix/custom-code {"codeType":"css"} -->
<div class="wp-block-phenix-custom-code" data-code-type="css">
  <style>
    .custom-banner {
      background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
      color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      margin: 20px 0;
    }
    
    .custom-button {
      display: inline-block;
      background-color: white;
      color: #6a11cb;
      padding: 10px 20px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: bold;
      margin-top: 10px;
      transition: all 0.3s ease;
    }
    
    .custom-button:hover {
      background-color: rgba(255, 255, 255, 0.8);
      transform: translateY(-2px);
    }
  </style>
</div>
<!-- /wp:phenix/custom-code -->
```

### Interactive JavaScript

Adding custom JavaScript functionality:

```html
<!-- wp:phenix/custom-code {"codeType":"javascript","loadTiming":"domready"} -->
<div class="wp-block-phenix-custom-code" data-code-type="javascript" data-load-timing="domready">
  <script>
    // Count-up animation for numbers
    const counters = document.querySelectorAll('.counter-value');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      
      let current = 0;
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    });
    
    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  </script>
</div>
<!-- /wp:phenix/custom-code -->
```

### Combined HTML, CSS, and JavaScript

Using multiple Custom Code blocks together:

```html
<!-- wp:phenix/group -->
<div class="px-group">
  <!-- HTML Structure -->
  <!-- wp:phenix/custom-code {"codeType":"html"} -->
  <div class="wp-block-phenix-custom-code" data-code-type="html">
    <div class="stats-container">
      <div class="stat-item">
        <span class="counter-value" data-target="1500">0</span>
        <span class="stat-label">Happy Clients</span>
      </div>
      <div class="stat-item">
        <span class="counter-value" data-target="350">0</span>
        <span class="stat-label">Projects Completed</span>
      </div>
      <div class="stat-item">
        <span class="counter-value" data-target="25">0</span>
        <span class="stat-label">Years Experience</span>
      </div>
    </div>
  </div>
  <!-- /wp:phenix/custom-code -->
  
  <!-- CSS Styling -->
  <!-- wp:phenix/custom-code {"codeType":"css"} -->
  <div class="wp-block-phenix-custom-code" data-code-type="css">
    <style>
      .stats-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 40px 20px;
        background-color: #f8f9fa;
        border-radius: 8px;
      }
      
      .stat-item {
        text-align: center;
        padding: 20px;
      }
      
      .counter-value {
        display: block;
        font-size: 48px;
        font-weight: bold;
        color: #0073aa;
      }
      
      .stat-label {
        font-size: 18px;
        color: #555;
      }
    </style>
  </div>
  <!-- /wp:phenix/custom-code -->
  
  <!-- JavaScript Functionality -->
  <!-- wp:phenix/custom-code {"codeType":"javascript","loadTiming":"domready"} -->
  <div class="wp-block-phenix-custom-code" data-code-type="javascript" data-load-timing="domready">
    <script>
      // Count-up animation for numbers
      const counters = document.querySelectorAll('.counter-value');
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };
        
        updateCounter();
      });
    </script>
  </div>
  <!-- /wp:phenix/custom-code -->
</div>
<!-- /wp:phenix/group -->
```

## Common Use Cases

### Custom Animation Effects

Implement custom animations not available through standard blocks:

```html
<!-- wp:phenix/custom-code {"codeType":"css"} -->
<div class="wp-block-phenix-custom-code" data-code-type="css">
  <style>
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }
    
    .floating-image {
      animation: float 3s ease-in-out infinite;
    }
  </style>
</div>
<!-- /wp:phenix/custom-code -->

<!-- wp:image {"className":"floating-image"} -->
<figure class="wp-block-image floating-image">
  <img src="https://example.com/image.jpg" alt="Floating Image"/>
</figure>
<!-- /wp:image -->
```

### Third-Party Integration

Integrate third-party services or widgets:

```html
<!-- wp:phenix/custom-code {"codeType":"html"} -->
<div class="wp-block-phenix-custom-code" data-code-type="html">
  <div id="map-container" style="width:100%;height:400px;"></div>
</div>
<!-- /wp:phenix/custom-code -->

<!-- wp:phenix/custom-code {"codeType":"javascript","loadTiming":"windowload"} -->
<div class="wp-block-phenix-custom-code" data-code-type="javascript" data-load-timing="windowload">
  <script>
    // Initialize Google Map
    function initMap() {
      const mapOptions = {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 12
      };
      
      const map = new google.maps.Map(
        document.getElementById('map-container'),
        mapOptions
      );
      
      // Add marker
      const marker = new google.maps.Marker({
        position: { lat: 40.7128, lng: -74.0060 },
        map: map,
        title: 'Our Location'
      });
    }
  </script>
</div>
<!-- /wp:phenix/custom-code -->

<!-- wp:phenix/custom-code {"codeType":"html"} -->
<div class="wp-block-phenix-custom-code" data-code-type="html">
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
</div>
<!-- /wp:phenix/custom-code -->
```

## Best Practices

1. **Code Organization**: Keep your HTML, CSS, and JavaScript in separate Custom Code blocks for better organization and maintenance

2. **Performance Consideration**: Minimize the use of heavy scripts that might impact page load times

3. **Error Handling**: Include proper error handling in your JavaScript code to prevent breaking the page

4. **Responsive Design**: Ensure your custom code works well across different screen sizes

5. **Code Comments**: Add comments to your code to explain complex functionality for future reference

6. **Dependency Management**: If your code depends on external libraries, ensure they're properly loaded before your code executes

7. **Security**: Validate and sanitize any user input to prevent security vulnerabilities

8. **Debugging**: Use browser developer tools to debug your custom code when issues arise

## Related Blocks

- [Container Block](./container-block.md) - For positioning custom code within layouts
- [Group Block](./group-block.md) - For organizing multiple Custom Code blocks together
- [Dynamic Theme Part](./dynamic-theme-part.md) - For creating reusable template parts with custom code
