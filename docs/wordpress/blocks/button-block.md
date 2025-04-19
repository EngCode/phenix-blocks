# Button Block

The Button Block allows you to create customizable buttons with various styles, sizes, and behaviors in your WordPress content.

## Basic Usage

Simply add the Button Block from the block inserter and configure its options:

![Button Block in the Gutenberg editor](../path/to/button-block-preview.png)

## Block Options

### General Settings

| Setting | Description |
|---------|-------------|
| Button Text | The text that appears on the button |
| Button Type | Choose between default, outline, link styles |
| Button Size | Set the size (small, medium, large) |
| Button Color | Select from theme color options |
| Icon | Add an optional icon before or after the text |
| Link Settings | URL, open in new tab, nofollow options |

### Advanced Options

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

![Button with icon](../path/to/button-with-icon.png)

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