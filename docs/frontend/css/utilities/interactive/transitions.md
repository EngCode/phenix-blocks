# Transitions

Transition utilities in the Phenix Design System allow you to add smooth animations to elements when their properties change, such as during hover states or other interactions.

## Overview

Transition utilities control the speed of CSS transitions, making state changes appear smoother and more natural.

## Transition Speeds

Phenix provides three predefined transition speeds:

```html
<!-- Fast transition (0.2s) -->
<div class="transition-fast">Applies a fast transition</div>

<!-- Standard smooth transition (0.3s) -->
<div class="transition-smooth">Applies a standard transition</div>

<!-- Slow transition (0.5s) -->
<div class="transition-slow">Applies a slow transition</div>
```

These utilities apply the `transition` property to all animatable CSS properties, ensuring that changes to size, color, position, or other effects are animated smoothly.

## Usage

Transition utilities are typically used in conjunction with hover effects or other interactive states where an element's style changes:

```html
<style>
  .my-box {
    background-color: var(--primary-color);
    color: var(--primary-reverse);
    padding: 20px;
    opacity: 0.8;
  }

  .my-box:hover {
    background-color: var(--primary-dark);
    opacity: 1;
    transform: scale(1.05);
  }
</style>

<!-- Add transition-smooth for a smooth hover effect -->
<div class="my-box transition-smooth">
  Hover over me to see the smooth transition
</div>
```

In this example, changes to `background-color`, `opacity`, and `transform` on hover will be animated over 0.3 seconds.

## Combining with Hover Effects

Transition utilities work seamlessly with Phenix's built-in hover effects:

```html
<!-- Button with scale hover effect and smooth transition -->
<button class="btn primary transition-smooth pds-hvr-scale-10">
  Scale on Hover
</button>

<!-- Card that floats on hover with a fast transition -->
<div class="card pds-hvr-floating transition-fast">
  Card content
</div>
```

## Best Practices

1.  **Apply transitions to the base state**: Add the transition utility class to the element itself, not just the hover state.
2.  **Choose appropriate speed**: Use `transition-fast` for quick feedback, `transition-smooth` for most standard interactions, and `transition-slow` for more deliberate effects.
3.  **Consider performance**: While simple transitions are generally performant, complex animations on many elements can impact performance. Test on various devices.
4.  **Be consistent**: Use consistent transition speeds for similar interactions across your application.

## Responsive Transitions

The transition speed utilities (`transition-fast`, `transition-smooth`, `transition-slow`) do not have responsive variants. The transition speed applied will be consistent across all screen sizes unless overridden with custom CSS using media queries. 