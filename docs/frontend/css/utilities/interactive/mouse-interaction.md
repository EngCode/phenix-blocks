# Mouse Interaction

Mouse interaction utilities in the Phenix Design System allow you to control the appearance of the mouse cursor and manage how elements respond to pointer events.

## Overview

These utilities modify default mouse behaviors for specific UI needs.

## Cursor Appearance

Change the standard mouse cursor when hovering over an element:

```html
<!-- Change cursor to pointer (hand) -->
<div class="mouse-pointer">
  Cursor becomes a pointing hand (like on a link)
</div>

<!-- Hide the cursor -->
<div class="mouse-normal">
  Cursor is hidden over this element (use with caution)
</div>
```

-   `.mouse-pointer`: Useful for making non-link elements appear clickable.
-   `.mouse-normal`: Can be used for custom cursor implementations or hiding the cursor in specific contexts (e.g., full-screen media players). Avoid hiding the cursor unless there's a clear usability reason.

## Pointer Events

Control whether an element can be the target of mouse events:

```html
<!-- Disable pointer events -->
<button class="btn disabled mouse-no-events">
  Disabled Button (Cannot be clicked)
</button>

<!-- Enable pointer events (useful for overriding) -->
<div class="mouse-no-events">
  Parent prevents clicks, but...
  <span class="mouse-all-events mouse-pointer">This child *can* be clicked.</span>
</div>
```

-   `.mouse-no-events`: The element (and its children, unless overridden) will not react to clicks, hover, etc. Useful for visually disabling elements.
-   `.mouse-all-events`: Re-enables pointer events, typically used on a child of an element with `.mouse-no-events`.

## Link Color Inheritance

Make links (`<a>` tags) within an element inherit the text color of their parent, overriding the default link color:

```html
<!-- Links inside will inherit the parent text color -->
<div class="links-inherit color-primary">
  This text is primary color.
  <a href="#">This link is also primary color.</a>
  It ignores the default link color.
</div>

<div class="links-inherit color-danger">
  This text is danger color.
  <a href="#">So is this link.</a>
</div>
```

-   `.links-inherit`: Useful for components like cards or buttons where you want enclosed links to match the component's text color rather than the global link color.

## Use Cases

### Custom Clickable Cards

```html
<div class="card mouse-pointer" onclick="alert('Card clicked!');">
  <!-- Card content -->
</div>
```

### Visually Disabling a Section

```html
<fieldset class="opacity-50 mouse-no-events">
  <legend>Section Disabled</legend>
  <!-- Form controls inside are visually dimmed and non-interactive -->
</fieldset>
```

### Buttons with Internal Links

```html
<button class="btn light links-inherit">
  <a href="#some-action" class="color-inherit">
    Button Text as Link
  </a>
</button>
```

## Best Practices

1.  **Use `.mouse-pointer` purposefully**: Only apply it to elements that are genuinely interactive.
2.  **Avoid hiding the cursor (`.mouse-normal`)**: This can be confusing for users unless part of a well-understood pattern (like video playback).
3.  **Use `.mouse-no-events` with visual cues**: Combine it with opacity or other styles (`.disabled` class) to clearly indicate non-interactivity.
4.  **Test accessibility**: Ensure that disabling pointer events doesn't negatively impact keyboard navigation or screen reader users. 