# DOM UI Effects

## Overview

The Phenix Design System provides a comprehensive set of JavaScript/TypeScript UI effects that enhance the user experience by adding smooth animations, transitions, and interactive behaviors to your web applications. These effects are designed to be lightweight, performant, and easy to implement.

This documentation covers the core DOM UI Effects functionality, while related features are documented in separate sections:

- For animations and transitions, see [Animation System](/frontend/js/animations)
- For scroll-related effects, see [Scroll Effects](/frontend/js/scroll-effects)
- For multimedia interactions, see [Multimedia System](/frontend/js/multimedia)

## Show/Hide Effects

Phenix provides elegant show and hide effects through slide and fade animations. These effects are perfect for creating accordions, dropdowns, modals, and other interactive components.

### Slide Effects

Slide effects animate the height of elements to create a smooth expanding or collapsing animation.

#### slideUp

```typescript
slideUp(duration?: number = 300, delay?: number = 0): this
```

Hides elements with a sliding animation that collapses their height to zero.

**Parameters:**
- `duration`: Animation speed in milliseconds (default: 300)
- `delay`: Delay before the animation starts in milliseconds (default: 0)

**Example:**
```js
// Basic usage with default duration and delay
Phenix('.panel').slideUp();

// Custom duration (700ms) and no delay
Phenix('.panel').slideUp(700, 0);
```

#### slideDown

```typescript
slideDown(duration?: number = 300, delay?: number = 0, display?: string = 'block'): this
```

Shows elements with a sliding animation that expands their height from zero.

**Parameters:**
- `duration`: Animation speed in milliseconds (default: 300)
- `delay`: Delay before the animation starts in milliseconds (default: 0)
- `display`: CSS display property value after animation (default: 'block')

**Example:**
```js
// Basic usage with default values
Phenix('.panel').slideDown();

// Custom duration, no delay, and display as flex
Phenix('.panel').slideDown(700, 0, 'flex');
```

#### slideToggle

```typescript
slideToggle(duration?: number = 300, delay?: number = 0, display?: string = 'block'): this
```

Toggles the visibility of elements using slide animations. If an element is visible, it slides up; if hidden, it slides down.

**Parameters:**
- `duration`: Animation speed in milliseconds (default: 300)
- `delay`: Delay before the animation starts in milliseconds (default: 0)
- `display`: CSS display property value when showing (default: 'block')

**Example:**
```js
// Toggle visibility with default values
Phenix('.panel').slideToggle();

// Toggle with custom duration, no delay, and display as inline-block
Phenix('.panel').slideToggle(700, 0, 'inline-block');
```

### Fade Effects

Fade effects animate the opacity of elements to create smooth appearing or disappearing animations.

#### fadeOut

```typescript
fadeOut(duration?: number = 300, delay?: number = 0): this
```

Hides elements with a fading animation that reduces their opacity to zero.

**Parameters:**
- `duration`: Animation speed in milliseconds (default: 300)
- `delay`: Delay before the animation starts in milliseconds (default: 0)

**Example:**
```js
// Basic usage with default duration and delay
Phenix('.alert').fadeOut();

// Custom duration (700ms) and no delay
Phenix('.alert').fadeOut(700, 0);
```

#### fadeIn

```typescript
fadeIn(duration?: number = 300, delay?: number = 0, display?: string = 'block'): this
```

Shows elements with a fading animation that increases their opacity from zero.

**Parameters:**
- `duration`: Animation speed in milliseconds (default: 300)
- `delay`: Delay before the animation starts in milliseconds (default: 0)
- `display`: CSS display property value after animation (default: 'block')

**Example:**
```js
// Basic usage with default values
Phenix('.alert').fadeIn();

// Custom duration, no delay, and display as inline-block
Phenix('.alert').fadeIn(700, 0, 'inline-block');
```

#### fadeToggle

```typescript
fadeToggle(duration?: number = 300, delay?: number = 0, display?: string = 'block'): this
```

Toggles the visibility of elements using fade animations. If an element is visible, it fades out; if hidden, it fades in.

**Parameters:**
- `duration`: Animation speed in milliseconds (default: 300)
- `delay`: Delay before the animation starts in milliseconds (default: 0)
- `display`: CSS display property value when showing (default: 'block')

**Example:**
```js
// Toggle visibility with default values
Phenix('.alert').fadeToggle();

// Toggle with custom duration, no delay, and display as inline-block
Phenix('.alert').fadeToggle(700, 0, 'inline-block');
```

## Practical Examples

### Accordion Implementation

```html
<div class="accordion">
  <div class="accordion-item">
    <div class="accordion-header">Section 1</div>
    <div class="accordion-content">Content for section 1...</div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header">Section 2</div>
    <div class="accordion-content">Content for section 2...</div>
  </div>
</div>
```

```js
// Hide all accordion content initially
Phenix('.accordion-content').slideUp(0);

// Toggle content when header is clicked
Phenix('.accordion-header').on('click', function(event) {
  const content = Phenix(event.target).next('.accordion-content');
  content.slideToggle(300);
  
  // Optional: close other open sections
  Phenix('.accordion-content').not(content).slideUp(300);
});
```

### Modal Implementation

```html
<button class="modal-trigger" data-target="#exampleModal">Open Modal</button>

<div id="exampleModal" class="modal hidden">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5>Modal Title</h5>
        <button class="close-modal">&times;</button>
      </div>
      <div class="modal-body">Modal content goes here...</div>
    </div>
  </div>
</div>
```

```js
// Show modal with fade effect
Phenix('.modal-trigger').on('click', function(event) {
  const targetId = event.target.getAttribute('data-target');
  Phenix(targetId).removeClass('hidden').fadeIn(300);
});

// Hide modal with fade effect
Phenix('.close-modal').on('click', function() {
  Phenix(this).ancestor('.modal').fadeOut(300);
});
```

## Integration with Other Features

The DOM UI Effects in Phenix are designed to work seamlessly with other components of the framework:

- **DOM Events**: Combine with event handling for interactive components
- **DOM Traversing**: Use traversing methods to find related elements for effects
- **Animation System**: For more complex animation sequences
- **Scroll Effects**: For scroll-based interactions and animations

## Browser Compatibility

The Phenix UI Effects are built using modern JavaScript techniques and are compatible with all modern browsers. The animations use `requestAnimationFrame` for smooth performance and optimal rendering.
