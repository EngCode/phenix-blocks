# JavaScript Customization

The Phenix Starter Theme includes JavaScript functionality that can be customized to add interactive features to your website. This guide explains how to add and modify JavaScript in your theme.

## Theme JavaScript Structure

The main JavaScript file in the Phenix Starter Theme is `style.js`, which is compiled to `assets/js/style.min.js`. This file is loaded on the front end and is the perfect place to add custom interactions, animations, or functionality.

## How to Add Custom JavaScript

1. **Edit the `style.js` file**: Add your custom JavaScript code to this file.

   ```javascript
   document.addEventListener('DOMContentLoaded', () => {
       // Your custom JavaScript here
       
       // Example: Add a scroll animation
       const animatedElements = document.querySelectorAll('.animate-on-scroll');
       
       const observer = new IntersectionObserver((entries) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   entry.target.classList.add('animated');
               }
           });
       });
       
       animatedElements.forEach(element => {
           observer.observe(element);
       });
   });
   ```

2. **Create a Separate JavaScript File**: For more complex functionality, you can create a separate JavaScript file and enqueue it in `functions.php`.

   ```javascript
   // In a new file: assets/js/custom.js
   (function() {
       // Your custom JavaScript here
   })();
   ```

   Then enqueue it in `functions.php`:

   ```php
   function theme_enqueue_scripts() {
       // Enqueue the main theme JavaScript
       wp_enqueue_script('theme-js', get_template_directory_uri() . '/assets/js/style.min.js', array(), '1.0.0', true);
       
       // Enqueue your custom JavaScript
       wp_enqueue_script('custom-script', get_template_directory_uri() . '/assets/js/custom.js', array(), '1.0.0', true);
   }
   add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');
   ```

## Using Phenix JavaScript Components

The Phenix framework includes several JavaScript components that you can use in your theme:

1. **Phenix Tabs**: For tabbed content
2. **Phenix Accordion**: For accordion/collapsible content
3. **Phenix Modal**: For popup modals
4. **Phenix Slider**: For image sliders and carousels

These components are automatically initialized for elements with the appropriate classes. You can customize their behavior by modifying the initialization options.

## JavaScript Best Practices

1. **Use Event Delegation**: Attach event listeners to parent elements instead of individual elements for better performance.

   ```javascript
   // Instead of this:
   document.querySelectorAll('.button').forEach(button => {
       button.addEventListener('click', handleClick);
   });
   
   // Do this:
   document.addEventListener('click', event => {
       if (event.target.matches('.button')) {
           handleClick(event);
       }
   });
   ```

2. **Avoid jQuery Dependency**: The Phenix Starter Theme uses vanilla JavaScript instead of jQuery for better performance.

3. **Use ES6+ Features**: The theme's build process includes Babel, so you can use modern JavaScript features.

4. **Modularize Your Code**: Split complex functionality into separate functions or modules.

5. **Add Comments**: Document your code, especially for complex functionality.

6. **Check for Element Existence**: Always check if elements exist before manipulating them.

   ```javascript
   const element = document.querySelector('.my-element');
   if (element) {
       // Manipulate the element
   }
   ```

## Example: Adding a Scroll-to-Top Button

Here's an example of adding a scroll-to-top button to your theme:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // Create the button element
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.classList.add('scroll-to-top');
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopButton);
    
    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });
    
    // Scroll to top when button is clicked
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
```

Add corresponding CSS in your SASS files:

```scss
.scroll-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    z-index: 999;
    
    &.show {
        opacity: 1;
        visibility: visible;
    }
}
```

## Debugging JavaScript

1. **Use Browser Developer Tools**: Open your browser's developer tools (F12 or Ctrl+Shift+I) to debug JavaScript.

2. **Console Logging**: Use `console.log()` to output values during development.

3. **Error Handling**: Wrap code in try-catch blocks to handle errors gracefully.

   ```javascript
   try {
       // Code that might cause an error
   } catch (error) {
       console.error('An error occurred:', error);
   }
   ```

Remember to remove or disable debug code before deploying to production.
