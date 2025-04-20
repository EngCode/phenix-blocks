# Colors

The Colors utilities in the Phenix Design System provide a comprehensive set of classes for controlling text colors. For background and border color utilities, please refer to the [Backgrounds](/frontend/css/utilities/backgrounds.md) and [Borders](/frontend/css/utilities/borders.md) documentation.

## Overview

The color utilities in Phenix Design System are organized into the following categories:

1. **Text Colors** - Control the color of text and inline elements
2. **Color Variables** - CSS variables that define the theme's color palette
3. **Brand Colors** - Consistent colors for brand elements
4. **Responsive Text Colors** - Apply different colors at different screen sizes

## Color Palette

Phenix includes several color categories:

### Primary Theme Colors
- Primary (`--primary-color`): Main brand color 
- Secondary (`--secondary-color`): Secondary brand color
- Primary Dark (`--primary-dark`): Darker version of primary color
- Secondary Dark (`--secondary-dark`): Darker version of secondary color
- Primary Hover (`--primary-hover`): Hover state for primary color
- Secondary Hover (`--secondary-hover`): Hover state for secondary color
- Primary Reverse (`--primary-reverse`): Contrast color to use with primary
- Secondary Reverse (`--secondary-reverse`): Contrast color to use with secondary
- Primary Offwhite (`--primary-offwhite`): Light variant of primary color
- Secondary Offwhite (`--secondary-offwhite`): Light variant of secondary color

### Status Colors
- Success (`--success-color`): For success messages and actions
- Danger (`--danger-color`): For error states and warnings
- Warning (`--warning-color`): For attention notifications
- Info (`--info-color`): For information notifications

### Base Colors
- Gray (`--gray-color`): Neutral gray color
- Dark (`--dark-color`): Dark color for text and elements
- Light: Light background color
- White: Pure white color
- Transparent: Transparent color

### Social Media Brand Colors
The complete list of social media brand colors available in Phenix:

- Facebook (`--facebook-color`)
- Twitter (`--twitter-color`)
- LinkedIn (`--linkedin-color`)
- YouTube (`--youtube-color`)
- Instagram (`--instagram-color`)
- Pinterest (`--pinterest-color`)
- Snapchat (`--snapchat-color`)
- WhatsApp (`--whatsapp-color`)
- Behance (`--behance-color`)
- Dribbble (`--dribbble-color`)
- Flicker (`--flicker-color`)
- Google (`--google-color`)
- Github (`--github-color`)
- Wordpress (`--wordpress-color`)
- Vimeo (`--vimeo-color`)
- Reddit (`--reddit-color`)
- Tumblr (`--tumblr-color`)
- Twitch (`--twitch-color`)
- Quora (`--quora-color`)
- Tiktok (`--tiktok-color`)
- Medium (`--medium-color`)
- Telegram (`--telegram-color`)
- Skype (`--skype-color`)
- Slack (`--slack-color`)
- Discord (`--discord-color`)

## Text Colors

Apply color to text by using the `.color-*` classes:

```html
<!-- Theme Colors -->
<p class="color-primary">Primary colored text</p>
<p class="color-secondary">Secondary colored text</p>
<p class="color-primary-dark">Primary dark colored text</p>
<p class="color-secondary-dark">Secondary dark colored text</p>

<!-- Status Colors -->
<p class="color-success">Success colored text</p>
<p class="color-danger">Danger colored text</p>
<p class="color-warning">Warning colored text</p>
<p class="color-info">Info colored text</p>

<!-- Basic Colors -->
<p class="color-gray">Gray colored text</p>
<p class="color-dark">Dark colored text</p>
<p class="color-white">White colored text</p>
<p class="color-inherit">Inherit parent text color</p>
<p class="color-transparent">Transparent text color</p>

<!-- Component Level Colors -->
<p class="color-component-lvl-1">Level 1 text (dark)</p>
<p class="color-component-lvl-2">Level 2 text (medium)</p>
<p class="color-component-lvl-3">Level 3 text (light)</p>
```

## Social Media Brand Text Colors

Every social media platform has its own text color class:

```html
<p class="color-facebook">Facebook blue text</p>
<p class="color-twitter">Twitter blue text</p>
<p class="color-linkedin">LinkedIn blue text</p>
<p class="color-youtube">YouTube red text</p>
<p class="color-instagram">Instagram pink text</p>
<p class="color-pinterest">Pinterest red text</p>
<p class="color-snapchat">Snapchat yellow text</p>
<p class="color-whatsapp">WhatsApp green text</p>
<p class="color-behance">Behance blue text</p>
<p class="color-dribbble">Dribbble pink text</p>
<p class="color-flicker">Flicker blue text</p>
```

## Background Clip Text

Create text with a background showing through (requires both color and background utilities):

```html
<h1 class="color-transparent bg-grade-primary bg-clip-text">Gradient Text</h1>
```

## Customizing Colors

Colors in Phenix are controlled by CSS variables defined in the theme. You can customize these variables in your CSS to create your own color scheme:

```css
:root {
  /* Primary Colors */
  --primary-color: #YOUR-COLOR;
  --primary-hover: #YOUR-HOVER-COLOR;
  --primary-dark: #YOUR-DARK-COLOR;
  --primary-reverse: #YOUR-REVERSE-COLOR;
  --primary-offwhite: #YOUR-OFFWHITE-COLOR;
  
  /* Secondary Colors */
  --secondary-color: #YOUR-COLOR;
  --secondary-hover: #YOUR-HOVER-COLOR;
  --secondary-dark: #YOUR-DARK-COLOR;
  --secondary-reverse: #YOUR-REVERSE-COLOR;
  --secondary-offwhite: #YOUR-OFFWHITE-COLOR;
  
  /* Status Colors */
  --success-color: #YOUR-SUCCESS-COLOR;
  --danger-color: #YOUR-DANGER-COLOR;
  --warning-color: #YOUR-WARNING-COLOR;
  --info-color: #YOUR-INFO-COLOR;
  --gray-color: #YOUR-GRAY-COLOR;
  --dark-color: #YOUR-DARK-COLOR;
}
```

## Responsive Text Colors

All text color utilities can be applied conditionally at different breakpoints:

```html
<!-- Red text on small screens, blue text on large screens -->
<div class="color-danger color-lg-info">Responsive text color</div>

<!-- Primary text color on all screens, secondary on medium screens and up -->
<p class="color-primary color-md-secondary">Responsive text color</p>
```

Available responsive prefixes:
- No prefix: All screen sizes
- `-sm`: Small screens (≥ 576px)
- `-md`: Medium screens (≥ 768px)
- `-lg`: Large screens (≥ 1024px)
- `-xl`: Extra large screens (≥ 1200px)

## Related Utilities

For more color-related utilities, check these documentation pages:

- [Backgrounds](/frontend/css/utilities/backgrounds.md) - For background colors, gradients, and effects
- [Borders](/frontend/css/utilities/borders.md) - For border colors and styles
