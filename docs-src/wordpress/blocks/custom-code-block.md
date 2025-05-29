# Custom Code Block

## Overview

The Custom Code Block is a versatile component in the Phenix Design System that allows you to insert custom HTML, CSS, or JavaScript directly into any location on your WordPress pages. This block executes your code on the server side, making it an essential tool for developers and advanced users who need to implement custom functionality or styling beyond what's available through standard blocks.

## Key Features

- Insert and execute custom HTML, CSS, and JavaScript
- Server-side rendering for secure code execution
- Support for multiple code types (HTML, CSS, JavaScript)
- Live preview mode in the editor
- Developer mode for testing and debugging
- Clean, dark-themed code editor for better readability

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Custom Code" or find it in the "Phenix Blocks" category
3. Add the Custom Code Block to your page
4. Select the code type (HTML, CSS, or JavaScript) from the toolbar
5. Enter your custom code in the editor
6. Toggle preview mode to see your code in action

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| Code Type | Select the type of code (HTML, CSS, or JavaScript) |
| Preview | Toggle code preview mode in the editor |
| Developer Mode | Toggle developer mode for testing |

### Sidebar Controls

| Option | Description |
|--------|-------------|
| Code Type | Select the type of code (HTML, CSS, or JavaScript) |

## Technical Implementation

The Custom Code Block is implemented with server-side rendering in PHP. When the page loads, the block's content is processed based on the selected code type:

### HTML Rendering

HTML code is output directly to the page:

```php
if ($block_attributes['type'] === "html") {
    $markup .= $block_attributes['code'];
}
```

### CSS Rendering

CSS code is wrapped in `<style>` tags:

```php
elseif ($block_attributes['type'] === "css") {
    $markup .= '<style>'.$block_attributes['code'].'</style>';
}
```

### JavaScript Rendering

JavaScript code is wrapped in `<script>` tags and set to execute after the DOM is loaded:

```php
elseif ($block_attributes['type'] === "javascript") {
    $markup .= '<script>document.addEventListener("DOMContentLoaded", function(){'.$block_attributes['code'].'});</script>';
}
```


## Implementation Examples

### HTML Implementation

When you add HTML code to the Custom Code Block, it's directly inserted into the page. This is useful for adding custom markup that can't be created with standard blocks.

### CSS Implementation

CSS code added to the Custom Code Block is wrapped in `<style>` tags and inserted into the page. This allows you to add custom styles that affect elements on the page.

### JavaScript Implementation

JavaScript code is wrapped in a script tag with a DOMContentLoaded event listener to ensure it runs after the page has loaded. This prevents issues with trying to access elements that haven't been rendered yet.

## Best Practices

1. **Code Organization**: Keep your HTML, CSS, and JavaScript in separate Custom Code blocks for better organization and maintenance

2. **Performance Consideration**: Minimize the use of heavy scripts that might impact page load times

3. **Error Handling**: Include proper error handling in your JavaScript code to prevent breaking the page

4. **Responsive Design**: Ensure your custom code works well across different screen sizes

5. **Code Comments**: Add comments to your code to explain complex functionality for future reference

6. **Security Awareness**: Remember that while the Custom Code Block executes code server-side, you should still follow security best practices

7. **Testing**: Use the preview and developer modes to test your code before publishing

8. **Debugging**: Use browser developer tools to debug your custom code when issues arise

## Related Blocks

- [Container Block](./container-block.md) - For positioning custom code within layouts
- [Group Block](./group-block.md) - For organizing multiple Custom Code blocks together
- [Logic Content Block](./logical-content-block.md) - For conditionally displaying custom code based on user status

