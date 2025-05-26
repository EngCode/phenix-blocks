# Logo Block

## Overview

The Logo Block is a specialized component in the Phenix Design System that allows you to easily add and customize your website's logo. It provides options for responsive sizing, favicon management, and automatic homepage linking. The Logo Block is typically used in headers, footers, and other branding areas of your website.

<!-- Image placeholder for Logo Block -->

## Key Features

- Display your site logo with customizable size options
- Responsive logo with mobile variant options
- Integrated favicon management
- Automatic linking to the homepage
- Automatic alt text using site title
- Option to use favicon as mobile logo
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
| Logo Size (Height) | Set the height of the logo |
| Logo Width | Optional custom width for the logo |
| Favicon | Upload and set the site favicon |
| Responsive Logo | Enable responsive logo options |
| Mobile Logo | Upload a separate logo for mobile devices (when responsive is enabled) |
| Use Favicon for Mobile | Option to use the favicon as mobile logo (when responsive is enabled) |

### Link Options

| Option | Description |
|--------|-------------|
| Link to Homepage | Enable/disable linking the logo to the site homepage |
| Custom URL | Set a custom URL for the logo to link to (if not linking to homepage) |
| Open in New Tab | Whether the link opens in a new browser tab |

## Examples

### Basic Logo Setup

1. Add the Logo block to your page or template
2. Click 'Upload Logo' to select your logo from the Media Library
3. Set the desired logo height in the 'Size (Height)' field
4. Optionally set a custom width
5. Click 'Update Site Logo' to save it as your site's official logo

### Setting up Favicon

1. In the Logo block settings
2. Click 'Upload Favicon' to select an image
3. The image should be square and at least 512x512 pixels
4. Click 'Update Site Logo' to save changes
5. The favicon will be used in browser tabs and bookmarks

### Centered Logo with Padding

To create a centered logo with padding:

1. Add the Logo block and select your image
2. Under the "Spacing" section, add padding as needed

### Responsive Logo Setup

1. Enable 'Responsive Logo' in the block settings
2. Choose one of two options:
   - Upload a separate mobile logo
   - Enable 'Use Favicon for Mobile' to use the favicon as mobile logo
3. The mobile variant will automatically show on smaller screens
4. The main logo will display on desktop and tablet views

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

1. **Image Quality**: Use high-quality logo images that remain crisp at different sizes

2. **File Format**: Use SVG or PNG formats for logos to maintain quality

3. **Favicon Size**: Use a square image (512x512px recommended) for the favicon

4. **Mobile Optimization**: Consider using a simpler version of your logo for mobile devices

5. **Responsive Testing**: Test the logo display across different device sizes

6. **Height Control**: Use the Size (Height) setting to maintain consistent logo height across the site

## Related Blocks

- [Container Block](./container-block.md) - For positioning the logo within layouts
- [Grid Row Block](./grid-row-block.md) - For creating header layouts with logos
- [Media Element Block](./media-element-block.md) - For more advanced image handling

