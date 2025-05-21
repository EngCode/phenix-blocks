# Animation System

## Overview

The Phenix Animation System provides a comprehensive set of tools for creating engaging and interactive animations on your website. This powerful system enhances user experience by adding visual interest and guiding attention as users interact with your content.

## Animation Types

The Animation System is built into the Phenix JavaScript library and includes several specialized components:

### [Viewport Animations](/frontend/js/animations/viewport-animations)

Animations that trigger when elements enter the viewport, perfect for creating engaging scroll experiences. These include fade effects, slide animations, and scale transformations.

### [Scroll-Driven Animations](/frontend/js/animations/scroll-animations)

Animations that are synchronized with the user's scroll position, creating parallax effects, progress indicators, and other scroll-reactive elements.

### [Animated Counter](/frontend/js/animations/counter)

A specialized animation that creates smooth counting effects for numerical values, perfect for statistics, dashboards, and progress indicators.

## Core Features

- **Preset Animations**: Ready-to-use animation presets based on industry standards
- **Custom Animations**: Create your own animation sequences and effects
- **Lazy Loading**: Optimize performance by only triggering animations when elements are visible
- **Event Hooks**: Listen for animation events to trigger additional actions
- **Accessibility**: Support for reduced motion preferences for users with vestibular disorders

## Getting Started

To use the Phenix Animation System, you need to include the Phenix JavaScript library in your project:

```html
<!-- Include Phenix JS -->
<script src="path/to/phenix.min.js"></script>
```

Then you can use any of the animation components:

```js
// Example: Apply a fade-in animation to an element
Phenix('.element').animations({
  animation: 'fadeIn',
  duration: 1000,
  delay: 200
});
```

## Browser Compatibility

The Phenix Animation System is built using modern JavaScript techniques and is compatible with all modern browsers. The animations use optimized calculations and efficient rendering techniques for smooth performance across devices.
