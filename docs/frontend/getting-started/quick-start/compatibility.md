# Browser Compatibility

Phenix Design System is designed to work optimally on modern browsers while maintaining a balance between cutting-edge features and practical compatibility.

## Supported Browsers

Phenix officially supports the following browsers:

| Browser | Minimum Version |
|---------|----------------|
| Firefox | v63+ |
| Chrome  | v84+ |
| Safari  | v12+ |
| Opera   | v64+ |
| Edge    | v84+ |
| Internet Explorer | Not supported |

## Mobile Browsers Support

Phenix is fully compatible with modern mobile browsers:

| Browser | Support |
|---------|---------|
| iOS Safari | iOS 12.1+ |
| Android Chrome | v84+ |
| Samsung Internet | v10+ |
| Mobile Firefox | v63+ |

## Modern Web Technologies

Phenix leverages modern web technologies including:

- CSS Grid Layout
- CSS Flexbox
- CSS Variables (Custom Properties)
- ES6+ JavaScript features
- CSS Animations and Transitions
- Modern CSS selectors

## Feature Detection

Phenix uses feature detection rather than browser detection to ensure compatibility:

```javascript
// Example of how Phenix checks for feature support
if ('CSS' in window && 'supports' in window.CSS) {
    const supportsGrid = CSS.supports('display', 'grid');
    // Apply appropriate styles or fallbacks
}
```

## Graceful Degradation

For older browsers, Phenix follows these principles:

- Core content and functionality remains accessible
- Non-critical visual enhancements may be simplified
- Progressive enhancement approach is used where possible

## Performance Considerations

To ensure good performance across all supported browsers:

- JavaScript is optimized for speed and size
- CSS is organized for efficient rendering
- Assets are kept lightweight
- Animations are hardware-accelerated where possible

## Testing Your Projects

We recommend testing your Phenix-based projects on:

1. Multiple browsers (at least Chrome, Firefox, and Safari)
2. Both desktop and mobile devices
3. Different screen sizes and resolutions
4. Various connection speeds

## Development Recommendations

When building with Phenix Design System:

- Use vendor prefixes only when necessary (the framework handles most cases)
- Consider providing fallbacks for cutting-edge features
- Test on a representative sample of target browsers
- Use Phenix's built-in utilities for cross-browser compatibility

## Browser DevTools Support

Phenix is built to work well with browser developer tools:

- Clean class naming for easy inspection
- Well-structured DOM elements
- Logical CSS cascade
- Commented JavaScript for easier debugging

## Performance Stats

The framework is optimized for modern browsers:

- Core CSS: 140KB (32KB gzipped)
- JavaScript: 80KB (30KB gzipped)
- Minimal HTTP requests
- Efficient asset loading

## WordPress Compatibility

When using the WordPress plugin (pds-blocks), we follow WordPress core browser support guidelines which include:

- The latest two versions of major browsers
- Android and iOS latest versions

This aligns with WordPress's `@wordpress/browserslist-config` which ensures compatibility with:
- Browsers with >1% market share
- Latest versions of Chrome, Firefox, Safari, Edge, and Opera
- Latest versions of iOS and Android browsers 