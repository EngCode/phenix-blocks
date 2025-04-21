# Text Clipping

The Text Clipping utility in the Phenix Design System allows you to create visually interesting text effects where the background of the element shows through the text itself.

## Overview

This effect uses CSS properties like `background-clip: text` and requires the text color to be set to transparent.

## Usage

Apply the `.bg-clip-text` class to the text element you want the effect on. You must also set the text color to transparent (e.g., using `.color-transparent`) and apply a background (color, gradient, or image) to the element.

```html
<!-- Gradient Text -->
<h1 class="display-h1 bg-clip-text color-transparent bg-gradient-primary">
  Gradient Text Effect
</h1>

<!-- Text with Background Image -->
<h2 class="display-h2 bg-clip-text color-transparent" 
    style="background-image: url('path/to/texture.jpg'); background-size: cover;">
  Textured Text
</h2>

<!-- Text with Solid Background Color Clip -->
<p class="fs-24 bg-clip-text color-transparent bg-secondary">
  This text has the secondary color clipped to it.
</p>
```

## How It Works

The `.bg-clip-text` class applies:
-   `background-clip: text`: This CSS property makes the background extend only where the text is.
-   `-webkit-background-clip: text`: Vendor prefix for compatibility.

For the effect to be visible, you must also:
1.  Set the `color` of the text to `transparent`.
2.  Provide a `background` (e.g., `background-color`, `background-image`, `background-gradient`) on the same element.

## Use Cases

-   Creating eye-catching headlines with gradients or image textures.
-   Designing unique branding elements.
-   Artistic text effects.

## Best Practices

1.  **Ensure Readability**: The background applied must have sufficient contrast with the surrounding content for the text to be readable.
2.  **Use on Larger Text**: The effect is generally more pronounced and visually appealing on larger font sizes (like headings).
3.  **Combine with Background Utilities**: Leverage Phenix's [Background Utilities](../backgrounds.md) for gradients and images.

## Browser Support

`background-clip: text` is widely supported in modern browsers, but may require the `-webkit-` prefix for some older versions. Ensure you test on target browsers. 