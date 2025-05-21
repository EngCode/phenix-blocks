# Button Block

The Button Block is an essential interactive component in the Phenix Design System. It provides a customizable button element that can be styled in various ways and linked to internal or external destinations. The Button Block supports different sizes, styles, colors, and can include icons for enhanced visual communication.

<!-- Image placeholder for Button Block -->

## Key Features

- Multiple button styles (solid, outline, link, etc.)
- Various size options (small, medium, large)
- Predefined color schemes that match the theme
- Icon support (before or after text)
- Customizable border radius
- Hover effects and animations
- Full responsive control

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Button" or find it in the "Phenix Blocks" category
3. Add the Button Block to your page
4. Set the button text, link, and style options
5. Customize the button appearance in the block sidebar

## Block Settings

### Button Options

| Setting | Description |
|---------|-------------|
| Button Width | Set to automatic or full width |
| Border Radius | Customize the button corner roundness |
| Alignment | Align left, center, right or justify |
| Padding | Adjust internal spacing |
| Margin | Set external spacing |

## Style Variations

### Primary Button

The default button style with solid background:

```html
<!-- Block Output Example -->
<a href="#" class="px-btn btn-primary">Primary Button</a>
```

### Outline Button

A button with transparent background and colored border:

```html
<!-- Block Output Example -->
<a href="#" class="px-btn btn-outline">Outline Button</a>
```

### Text Button

A button that appears as a link but with button padding and hover effects:

```html
<!-- Block Output Example -->
<a href="#" class="px-btn btn-link">Text Button</a>
```

## Adding Icons

You can enhance buttons with icons from the icon library:

<!-- Image placeholder for Button with icon -->

```html
<!-- Block Output Example -->
<a href="#" class="px-btn btn-primary">
  <i class="px-icon px-icon-arrow-right"></i>
  Button with Icon
</a>
```

## Responsive Behavior

Customize how buttons appear on different screen sizes using the responsive controls.

## Examples

### Call to Action Button

```html
<a href="/contact" class="px-btn btn-large btn-primary" target="_blank">
  Contact Us Today
  <i class="px-icon px-icon-arrow-right"></i>
</a>
```

### Download Button

```html
<a href="/download/file.pdf" class="px-btn btn-outline btn-success" download>
  <i class="px-icon px-icon-download"></i>
  Download PDF
</a>
```

## Integration with Other Blocks

The Button Block works seamlessly with other Phenix blocks:

- Use within the **Group Block** for button groups
- Combine with **Container Block** for centered layout sections
- Add to **Column Block** for multi-column layouts with buttons

## Related
- [Group Block](/wordpress/blocks/group-block)
- [Container Block](/wordpress/blocks/container-block)
- [Icon Element Block](/wordpress/blocks/icon-element-block) 
