# Logo Block

## Overview

The Logo Block is a specialized component in the Phenix Design System that allows you to easily add and customize your website's logo. It provides options for different logo variants (light/dark), responsive sizing, and linking to the homepage. The Logo Block is typically used in headers, footers, and other branding areas of your website.

<!-- Image placeholder for Logo Block -->

## Key Features

- Display your site logo with customizable options
- Support for light and dark logo variants
- Responsive sizing for different screen sizes
- Automatic linking to the homepage
- Custom alt text for accessibility
- Advanced styling options including size, padding, and margins

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Logo" or find it in the "Phenix Blocks" category
3. Add the Logo Block to your page
4. Select your logo image(s) from the media library
5. Customize the logo settings in the block sidebar

## Block Settings

### Logo Options

| Option | Description |
|--------|-------------|
| Logo Image | Select the main logo image from the media library |
| Dark Logo | Optional alternative logo for dark backgrounds or dark mode |
| Logo Width | Set the width of the logo (auto, custom, or responsive) |
| Logo Height | Set the height of the logo (auto or custom) |
| Alt Text | Alternative text for the logo image for accessibility |

### Link Options

| Option | Description |
|--------|-------------|
| Link to Homepage | Enable/disable linking the logo to the site homepage |
| Custom URL | Set a custom URL for the logo to link to (if not linking to homepage) |
| Open in New Tab | Whether the link opens in a new browser tab |

### Style Options

| Option | Description |
|--------|-------------|
| Padding | Add internal spacing around the logo |
| Margin | Add external spacing around the logo |
| Border | Add borders with custom color, width, and style |
| Border Radius | Add rounded corners to the logo container |

### Responsive Options

| Option | Description |
|--------|-------------|
| Mobile Width | Set a specific width for the logo on mobile devices |
| Tablet Width | Set a specific width for the logo on tablet devices |
| Desktop Width | Set a specific width for the logo on desktop devices |
| Hide on Mobile | Option to hide the logo on mobile devices |

## Examples

### Basic Logo

To add a basic logo with default settings:

1. Add the Logo block to your page or template
2. Select your logo image from the Media Library
3. The logo will automatically link to your homepage

### Logo with Custom Width

To set a specific width for your logo:

1. Add the Logo block and select your image
2. In the block settings sidebar, find the "Logo Width" option
3. Enter a specific width (e.g., "200px")

### Centered Logo with Padding

To create a centered logo with padding:

1. Add the Logo block and select your image
2. Under the "Spacing" section, add padding as needed

### Logo with Dark Variant

To add a logo with both light and dark variants:

1. Add the Logo block and select your light mode logo
2. In the block settings sidebar, find the "Dark Mode Logo" option
3. Enable it and select your dark mode logo from the Media Library
4. The appropriate logo will display based on the user's theme preference

### Responsive Logo

To create a logo with different sizes for different screen sizes:

1. Add the Logo block and select your image
2. In the block settings sidebar, find the "Responsive Settings" section
3. Set different widths for Mobile, Tablet, and Desktop viewports

## Common Use Cases

### Header Logo

To place a logo in your site header:

1. Edit your header template part in the Site Editor
2. Add a Container block
3. Add a Grid Column block (e.g., with size "3")
4. Inside this column, add your Logo block
5. Add another Grid Column block (e.g., with size "9") for navigation

### Footer Logo

To place a smaller logo in your site footer:

1. Edit your footer template part in the Site Editor
2. Add the Logo block
3. Set a smaller width (e.g., "120px")
4. Add bottom margin for spacing
5. Add a Paragraph block below for copyright information

## Best Practices

1. **Optimize Logo Files**: Use properly sized and compressed logo images for faster loading

2. **SVG Format**: When possible, use SVG format for logos to ensure crisp display at any size

3. **Alt Text**: Always include descriptive alt text for your logo for accessibility

4. **Responsive Sizing**: Set appropriate logo sizes for different screen sizes

5. **Dark Mode Support**: Provide a dark variant of your logo if your site supports dark mode

6. **Consistent Placement**: Maintain consistent logo placement across your site for brand recognition

## Related Blocks

- [Container Block](./container-block.md) - For positioning the logo within layouts
- [Grid Row Block](./grid-row-block.md) - For creating header layouts with logos
- [Media Element Block](./media-element-block.md) - For more advanced image handling

