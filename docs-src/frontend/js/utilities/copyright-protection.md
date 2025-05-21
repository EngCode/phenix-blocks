# Copyright Protection

## Overview

The Copyright Protection utility helps protect your website content by disabling right-click context menus and text selection. This provides a basic level of protection against casual copying of your content.

## Initialization

Unlike other utilities, the Copyright Protection is not enabled by default and must be explicitly initialized:

```js
// Initialize only copyright protection
Phenix(document).utilities({
  type: 'copyrights'
});
```

## How It Works

The utility adds event listeners to the document that:

1. Prevent the default behavior of right-click context menus
2. Prevent text selection

```js
// This is what happens internally
Phenix(document).on("contextmenu", rightClick => rightClick.preventDefault());
Phenix(document).on("selectstart", textSelect => textSelect.preventDefault());
```

## Usage Considerations

### When to Use

- For portfolio sites displaying creative work
- For sites with proprietary content or images
- For preview versions of paid content
- For temporary protection during content development

### When Not to Use

- For sites where content sharing is encouraged
- For accessibility-focused websites
- For educational resources
- For sites where users need to copy information (contact details, code snippets, etc.)

## Limitations

It's important to understand that this protection is basic and can be bypassed by:

- Disabling JavaScript
- Using browser developer tools
- Taking screenshots
- Using specialized tools

## Alternative Approaches

For more comprehensive content protection, consider:

1. **Watermarking** images and documents
2. **Partial content display** with login requirements for full access
3. **Digital Rights Management (DRM)** for premium content
4. **Server-side rendering** of sensitive content as images
5. **Legal notices and terms of use** clearly displayed

## Example Implementation

```html
<body class="copyright-protected">
  <script>
    // Only enable copyright protection if the body has the 'copyright-protected' class
    if (document.body.classList.contains('copyright-protected')) {
      Phenix(document).utilities({
        type: 'copyrights'
      });
    }
  </script>
  
  <div class="content">
    <p>This content is protected against casual copying.</p>
    <img src="protected-image.jpg" alt="Protected image">
  </div>
  
  <footer>
    <p>© 2025 Your Company. All rights reserved.</p>
  </footer>
</body>
```

## Best Practices

- **Inform users** about content protection with visible copyright notices
- **Balance protection with usability** - consider which content truly needs protection
- **Provide alternative means** for legitimate sharing (social media buttons, "share this" features)
- **Consider accessibility implications** for users who rely on text selection
- **Implement selectively** on specific pages rather than site-wide

## Browser Compatibility

The Copyright Protection utility is compatible with all modern browsers but may have different effects depending on browser settings and extensions.
