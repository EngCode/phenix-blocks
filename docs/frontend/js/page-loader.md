# Page Loader

## Overview

The Page Loader provides a smooth transition effect when navigating between pages or when the page is loading. It displays a loading animation that covers the entire viewport until the page content is fully loaded, then gracefully transitions away using a circular animation effect.

## Implementation

The Page Loader can be implemented in any frontend project without requiring WordPress. Here's how to add it to your HTML page:

### 1. HTML Structure

Add the following HTML structure to your page, preferably right after the opening `<body>` tag:

```html
<div class="px-page-loader" style="position: fixed; top:0; left:0; z-index: 999999999; width: 100vw; height: 100vh; background-color: var(--body-bg, #FFF); text-align: center;">
  <!-- Content Box -->
  <div class="content-box" style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%)">
    <!-- Spinner (Choose one of the options below) -->
    
    <!-- Option 1: Image Spinner -->
    <img class="spinner" src="path/to/your/spinner.svg" alt="Loading" style="width: 3.5rem; height: auto!important" />
    
    <!-- Option 2: Custom HTML/SVG Spinner -->
    <!-- <div class="custom-spinner">Your custom spinner HTML here</div> -->
    
    <!-- Loading Text (Optional) -->
    <p style="margin-bottom: 0; font-size: 1rem; padding: 0.625rem 0.313rem;">Loading</p>
  </div>
</div>
```

### 2. CSS Styles

Add these CSS styles to your stylesheet or in a `<style>` tag in the `<head>` section:

```css
.px-page-loader {
  clip-path: circle(150% at 50% 50%);
  transition: clip-path 0.8s cubic-bezier(.77,0,.18,1), opacity 0.3s;
}

.px-page-loader.hide {
  clip-path: circle(0% at 50% 50%);
}
```

### 3. JavaScript

Add this JavaScript code before the closing `</body>` tag:

```javascript
<script>
  // Unblock any scripts that might be loading asynchronously
  const phenixJsScript = document.querySelector('#phenix-js') || document.querySelector("script[src*='phenix.js']");
  if(phenixJsScript) phenixJsScript.removeAttribute('async');

  // Defer image loading for better performance
  document.querySelectorAll('img:not([loading])').forEach(image => image.setAttribute('loading', 'lazy'));

  // Hide loader when page is fully loaded
  window.addEventListener('load', () => {
    // Get the loader element
    const pxLoader = document.querySelector('.px-page-loader');
    if (!pxLoader) return;
    
    // Add hide effect
    pxLoader.classList.add('hide');
    
    // Remove loader after transition completes
    pxLoader.addEventListener('transitionend', function pxHideHandler(e) {
      if (e.propertyName === 'clip-path') {
        // Hide loader
        pxLoader.style.display = 'none';
        // Remove transition event listener
        pxLoader.removeEventListener('transitionend', pxHideHandler);
      }
    });
  });
  
  // Show loader before leaving the page
  window.addEventListener('beforeunload', () => {
    // Get the loader element
    const pxLoader = document.querySelector('.px-page-loader');
    if (!pxLoader) return;
    
    // Show loader
    pxLoader.style.display = '';
    
    // Remove hide effect after a brief timeout to ensure proper rendering
    setTimeout(() => {
      pxLoader.classList.remove('hide');
    }, 10);
  });
</script>
```

## Customization Options

### Background Color

You can customize the background color by changing the `background-color` property in the inline style of the `.px-page-loader` element. The default uses CSS variables with a fallback to white:

```html
background-color: var(--body-bg, #FFF);
```

### Spinner Types

The Page Loader supports two types of spinners:

1. **Image Spinner**: Use an image file (SVG recommended for best quality)
   ```html
   <img class="spinner" src="path/to/your/spinner.svg" alt="Loading" style="width: 3.5rem; height: auto!important" />
   ```

2. **Custom HTML/SVG**: Insert custom HTML or inline SVG
   ```html
   <div class="custom-spinner">
     <!-- Your custom spinner HTML/SVG here -->
   </div>
   ```

### Loading Text

You can customize the loading text or remove it entirely:

```html
<p style="margin-bottom: 0; font-size: 1rem; padding: 0.625rem 0.313rem;">Your custom loading text</p>
```

### Transition Effect

The circular transition effect can be customized by modifying the CSS properties:

```css
.px-page-loader {
  clip-path: circle(150% at 50% 50%); /* Initial state (fully visible) */
  transition: clip-path 0.8s cubic-bezier(.77,0,.18,1), opacity 0.3s; /* Duration and easing */
}

.px-page-loader.hide {
  clip-path: circle(0% at 50% 50%); /* Final state (fully hidden) */
}
```

## Advanced Usage

### Programmatically Controlling the Loader

You can show or hide the loader programmatically for AJAX requests or other dynamic content loading:

```javascript
// Show the loader
function showLoader() {
  const pxLoader = document.querySelector('.px-page-loader');
  if (!pxLoader) return;
  
  pxLoader.style.display = '';
  // Use setTimeout to ensure proper rendering before removing the hide class
  setTimeout(() => {
    pxLoader.classList.remove('hide');
  }, 10);
}

// Hide the loader
function hideLoader() {
  const pxLoader = document.querySelector('.px-page-loader');
  if (!pxLoader) return;
  
  pxLoader.classList.add('hide');
  
  pxLoader.addEventListener('transitionend', function pxHideHandler(e) {
    if (e.propertyName === 'clip-path') {
      pxLoader.style.display = 'none';
      pxLoader.removeEventListener('transitionend', pxHideHandler);
    }
  });
}

// Example: Using with fetch API
async function fetchData(url) {
  showLoader();
  try {
    const response = await fetch(url);
    const data = await response.json();
    // Process data
    return data;
  } catch (error) {
    console.error('Error:', error);
  } finally {
    hideLoader();
  }
}
```

### Dynamic Loader Creation

If you need to create the loader dynamically via JavaScript:

```javascript
function createLoader() {
  // Check if loader already exists
  if (document.querySelector('.px-page-loader')) return;
  
  // Create loader element
  const loaderWrapper = document.createElement('div');
  loaderWrapper.innerHTML = `
    <div class="px-page-loader" style="position: fixed; top:0; left:0; z-index: 999999999; width: 100vw; height: 100vh; background-color: var(--body-bg, #FFF); text-align: center;">
      <div class="content-box" style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%)">
        <img class="spinner" src="data:image/svg+xml,%3Csvg width='42' height='42' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_9y7u%7Banimation:spinner_fUkk 2.4s linear infinite;animation-delay:-2.4s%7D.spinner_DF2s%7Banimation-delay:-1.6s%7D.spinner_q27e%7Banimation-delay:-.8s%7D@keyframes spinner_fUkk%7B8.33%25%7Bx:13px;y:1px%7D25%25%7Bx:13px;y:1px%7D33.3%25%7Bx:13px;y:13px%7D50%25%7Bx:13px;y:13px%7D58.33%25%7Bx:1px;y:13px%7D75%25%7Bx:1px;y:13px%7D83.33%25%7Bx:1px;y:1px%7D%7D%3C/style%3E%3Crect class='spinner_9y7u' x='1' y='1' rx='1' width='10' height='10'/%3E%3Crect class='spinner_9y7u spinner_DF2s' x='1' y='1' rx='1' width='10' height='10'/%3E%3Crect class='spinner_9y7u spinner_q27e' x='1' y='1' rx='1' width='10' height='10'/%3E%3C/svg%3E%0A" alt="Loading" style="width: 3.5rem; height: auto!important" />
        <p style="margin-bottom: 0; font-size: 1rem; padding: 0.625rem 0.313rem;">Loading</p>
      </div>
    </div>
  `;
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .px-page-loader {clip-path: circle(150% at 50% 50%); transition: clip-path 0.8s cubic-bezier(.77,0,.18,1), opacity 0.3s;}
    .px-page-loader.hide {clip-path: circle(0% at 50% 50%);}
  `;
  document.head.appendChild(style);
  
  // Add loader to document
  document.body.appendChild(loaderWrapper.firstElementChild);
}
```

## Browser Compatibility

The Page Loader is compatible with all modern browsers that support CSS `clip-path` (Chrome, Firefox, Safari, Edge). For older browsers that don't support `clip-path`, the loader will still work but without the circular transition effect.

## Best Practices

1. **Placement**: Add the loader as early as possible in the HTML to ensure it appears before other content.
2. **Performance**: Use SVG for spinners instead of GIFs for better performance.
3. **Accessibility**: Include appropriate ARIA attributes for screen readers.
4. **Fallbacks**: Provide fallbacks for browsers that don't support modern CSS features.
5. **Timing**: Adjust transition timing based on your site's typical loading speed.
