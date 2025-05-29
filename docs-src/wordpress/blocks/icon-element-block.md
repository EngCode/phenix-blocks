# Icon Element Block

## Overview

The Icon Element Block is a versatile component in the Phenix Design System that allows you to add and customize icons on your WordPress site. The block supports both FontAwesome icons and custom image icons, with extensive styling options for size, color, positioning, and effects. It's designed to be fully responsive and integrates seamlessly with the Phenix Design System's styling framework.

## Key Features

- Two icon types: FontAwesome icons and custom image icons
- Flexible sizing with fixed or free-width options
- Comprehensive styling options including colors, backgrounds, and borders
- Support for animations and visual effects
- Link functionality to make icons clickable
- Responsive control for different screen sizes
- Integration with the Phenix Design System's styling framework

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Icon Element" or find it in the "Phenix Blocks" category
3. Add the Icon Element Block to your page
4. Choose between FontAwesome or custom image icon type
5. For FontAwesome, select an icon using the icon picker
6. For custom images, upload or select an image from the media library
7. Customize the icon's appearance using the toolbar and sidebar options

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| Icon Type | Choose between FontAwesome or custom image icon |
| Style Options | Configure colors, backgrounds, and other visual styles |
| Typography Options | Set text size, alignment, and other typography settings |
| Margin Controls | Adjust spacing around the icon (when enabled) |
| Padding Controls | Adjust internal spacing (when enabled) |
| Position Controls | Set positioning options (when enabled) |
| Border Options | Configure border styles, widths, and colors (when enabled) |
| Effects Options | Add shadows, opacity, and other visual effects (when enabled) |

### Sidebar Controls

The Icon Element block includes a General Settings panel where you can enable additional features:

| Setting | Description |
|---------|-------------|
| Enable Animations | Adds animation options to the toolbar |
| Enable Effects | Adds effects options to the toolbar |
| Enable Border | Adds border options to the toolbar |
| Enable Margin | Adds margin controls to the toolbar |
| Enable Padding | Adds padding controls to the toolbar |
| Enable Position | Adds position controls to the toolbar |

### Icon Type Options

The Icon Element block supports two types of icons:

#### FontAwesome Icons

When "FontAwesome" is selected as the icon type:

1. Use the icon picker in the toolbar to select a FontAwesome icon
2. The selected icon is applied as a class to the icon element
3. Default icon is `far fa-icons` if no icon is selected

#### Custom Image Icons

When "Icon Image" is selected as the icon type:

1. Use the media uploader to select or upload an image
2. The image is displayed within the icon container
3. Default placeholder is used if no image is selected

### Icon Styling Options

#### Dimensions

The icon dimensions can be controlled using the following settings:

- **Icon Size**: Set the height and width of the icon (in pixels, converted to REM)
- **Free Width**: When enabled, only the height is fixed while the width adjusts automatically

#### Link Options

Icons can be made clickable by enabling the link option:

- **Make Link**: Convert the icon to a clickable link
- **URL**: Set the destination URL for the icon link

## Technical Implementation

### Block Structure

The Icon Element block is rendered as an `<i>` element for FontAwesome icons or as an `<a>` element when configured as a link. For custom image icons, an `<img>` element is nested inside the container.

#### FontAwesome Icon Structure

```html
<i class="wp-block-phenix-icon-element tx-align-center inline-block [additional-classes] [icon-classes]" style="height: 2.625rem; line-height: 2.625rem; width: 2.625rem;"></i>
```

#### Custom Image Icon Structure

```html
<i class="wp-block-phenix-icon-element tx-align-center inline-block [additional-classes]" style="height: 2.625rem; line-height: 2.625rem; width: 2.625rem;">
  <img alt="icon" class="fluid" src="[icon-url]">
</i>
```

#### Link Icon Structure

```html
<a href="[url]" class="wp-block-phenix-icon-element tx-align-center inline-block [additional-classes] [icon-classes]" style="height: 2.625rem; line-height: 2.625rem; width: 2.625rem;">
  <!-- For custom image icons -->
  <img alt="icon" class="fluid" src="[icon-url]">
</a>
```

### Default Styling

The Icon Element block includes these default styles:

- Center text alignment (`tx-align-center`)
- Inline block display (`inline-block`)
- Default dimensions of 42px (converted to REM)
- For custom image icons, the image has `border-radius: inherit` to match the container's border radius

### Responsive Behavior

The Icon Element block inherits responsive behavior from the Phenix Design System's responsive utilities. This includes:

- Responsive alignment classes (e.g., `tx-align-md-center`)
- Responsive margin and padding
- Responsive positioning
- Responsive display properties

## Common Use Cases

### Decorative Icons

Use the Icon Element block to add decorative icons to your content:

- Section dividers or separators
- Visual indicators for lists or bullet points
- Decorative elements in headers or footers
- Background design elements

### Interactive Icons

Create interactive icons by enabling the link functionality:

- Social media profile links
- Navigation menu icons
- Call-to-action buttons
- Download links

### Feature Highlights

Use icons to highlight features or services:

- Service category indicators
- Feature benefit icons
- Process step indicators
- Status indicators

### Custom Icon Systems

Combine multiple Icon Element blocks to create custom icon systems:

- Rating systems (stars, hearts, etc.)
- Progress indicators
- Custom navigation menus
- Social proof indicators

## Best Practices

1. **Consistent Sizing**: Maintain consistent icon sizes throughout your site for a polished look

2. **Appropriate Spacing**: Use margin controls to ensure proper spacing between icons and surrounding elements

3. **Color Harmony**: Choose icon colors that complement your site's color scheme

4. **Accessibility**: Ensure sufficient contrast between icon colors and backgrounds

5. **Performance**: Use FontAwesome icons when possible instead of custom images for better performance

6. **Responsive Design**: Test how icons appear on different screen sizes and adjust responsive settings as needed

7. **Purposeful Animation**: Use animations sparingly and only when they enhance the user experience

8. **Semantic Usage**: Choose icons that clearly represent their intended meaning or function

## Best Practices

1. **Consistent Style**: Maintain consistent icon styles throughout your website for a cohesive look

2. **Appropriate Sizing**: Choose icon sizes that balance visibility with surrounding content

3. **Color Harmony**: Use icon colors that complement your website's color scheme

4. **Meaningful Icons**: Select icons that clearly communicate their purpose or meaning

5. **Accessibility**: Ensure that icons used for functionality include appropriate text labels or ARIA attributes

6. **Performance**: Be mindful of loading too many different icon libraries on a single page

## Related Blocks

- [Button Block](./button-block.md) - For combining icons with button elements
- [Text Elements Block](./text-elements-block.md) - For combining icons with text
- [Group Block](./group-block.md) - For grouping multiple icons together

