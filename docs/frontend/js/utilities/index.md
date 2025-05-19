# Utilities Overview

## Introduction

The Phenix Utilities provide a collection of JavaScript enhancements that improve the functionality, user experience, and performance of your web applications. These utilities are designed to be easy to implement, highly customizable, and optimized for modern web development.

## Initialization

Phenix Utilities can be initialized all at once or selectively by type:

```js
// Initialize all utilities
Phenix(document).utilities();

// Initialize specific utility types
Phenix(document).utilities({
  type: 'form'  // Only initialize form utilities
});

// Initialize multiple utility types
Phenix(document).utilities({
  type: 'form,text,seo'  // Initialize form, text, and SEO utilities
});
```

## Available Utility Types

| Type | Description | Documentation |
|------|-------------|---------------|
| `form` | Form-related utilities | [Form Utilities](./form-utilities.md) |
| `other` | General utilities like item removal and counters | [Item Remover](./item-remover.md), [Counter](./counter.md) |
| `text` | Text and color manipulation | [Dynamic Colors](./dynamic-colors.md) |
| `icons` | Icon-related utilities | [Icons List](./icons-list.md) |
| `copyrights` | Content protection | [Copyright Protection](./copyright-protection.md) |
| `seo` | SEO enhancements | [SEO Utilities](./seo-utilities.md), [Table of Content](./table-of-content.md) |
| `all` | All utilities (default) | All of the above |

## Core Features

### Form Enhancements

Improve form interactions with placeholder effects, form repeaters, rating controllers, and counter inputs. These utilities make forms more interactive and user-friendly.

[Learn more about Form Utilities](./form-utilities.md)

### Content Management

Easily remove elements, create animated counters, and enhance lists with icons. These utilities simplify common DOM manipulation tasks.

[Learn more about Item Remover](./item-remover.md)  
[Learn more about Counter](./counter.md)  
[Learn more about Icons List](./icons-list.md)

### Visual Enhancements

Automatically calculate color variations, create dynamic shadows, and enhance visual elements. These utilities improve the visual appeal of your website.

[Learn more about Dynamic Colors](./dynamic-colors.md)

### SEO and Accessibility

Automatically enhance images, links, and headings for better SEO and accessibility. Generate table of contents from headings for easier navigation.

[Learn more about SEO Utilities](./seo-utilities.md)  
[Learn more about Table of Content](./table-of-content.md)

### Content Protection

Protect your content from casual copying with simple JavaScript techniques.

[Learn more about Copyright Protection](./copyright-protection.md)

## Best Practices

- Initialize only the utilities you need to optimize performance
- Combine utilities with CSS for the best visual results
- Test utilities across different browsers and devices
- Use data attributes for configuration when available
- Follow accessibility guidelines even when using automatic enhancements

## Browser Compatibility

The Phenix Utilities are compatible with all modern browsers and use standard DOM manipulation techniques. Some features may have fallbacks for older browsers, but the best experience is provided in up-to-date browsers.
