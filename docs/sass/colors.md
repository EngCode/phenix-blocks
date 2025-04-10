# Colors

The Phenix Design System includes a comprehensive color system with predefined colors, gradients, backgrounds, and utility classes. The color system is designed to be customizable and provides consistent colors across your project.

## Color Variables

Phenix uses CSS variables to define colors, making it easy to customize the color scheme. The main color variables are defined in the `_customize.scss` file:

```scss
:root {
    /*==== Primary Color ====*/
    --primary-color   : #0C97F9;
    --primary-hover   : #1A69F4;
    --primary-dark    : #040f27;
    --primary-reverse : #FFFFFF;
    --primary-offwhite: #e1eef7;
    --offwhite-border : #a8c2e0;

    /*==== Secondary Color ====*/
    --secondary-color   : #F8C25B;
    --secondary-hover   : #FB955D;
    --secondary-dark    : #b03513;
    --secondary-reverse : #000000;
    --secondary-offwhite: #fddfa8;

    /*=== Assets Colors ====*/
    --links-color   : var(--primary-color);
    --info-color    : #816CF3;
    --gray-color    : #868e96;
    --dark-color    : #14171a;
    --success-color : #22B567;
    --danger-color  : #DE3131;
    --warning-color : #FAD934;
    --disable-color : #ebebeb;

    /*=== Assets Lighter ====*/
    --info-light    : #CECCF9;
    --gray-light    : #d9dde1;
    --dark-light    : #343a40;
    --success-light : #C1EED9;
    --danger-light  : #fbbbbb;
    --warning-light : #FFE875;
}
```

## Text Colors

Apply colors to text with these utility classes:

```html
<p class="color-primary">Primary color text</p>
<p class="color-secondary">Secondary color text</p>
<p class="color-success">Success color text</p>
<p class="color-danger">Danger color text</p>
<p class="color-warning">Warning color text</p>
<p class="color-info">Info color text</p>
<p class="color-gray">Gray color text</p>
<p class="color-dark">Dark color text</p>
<p class="color-white">White color text</p>
<p class="color-inherit">Inherits color from parent</p>
<p class="color-transparent">Transparent text</p>
```

## Background Colors

Apply solid background colors with these utility classes:

```html
<div class="bg-primary">Primary background</div>
<div class="bg-secondary">Secondary background</div>
<div class="bg-success">Success background</div>
<div class="bg-danger">Danger background</div>
<div class="bg-warning">Warning background</div>
<div class="bg-info">Info background</div>
<div class="bg-gray">Gray background</div>
<div class="bg-dark">Dark background</div>
<div class="bg-white">White background</div>
<div class="bg-transparent">Transparent background</div>
```

### Component Background Levels

Phenix provides different background levels for components:

```html
<div class="bg-component-lvl-1">Component level 1 background</div>
<div class="bg-component-lvl-2">Component level 2 background</div>
<div class="bg-component-lvl-3">Component level 3 background</div>
```

And corresponding text colors:

```html
<p class="color-component-lvl-1">Component level 1 text</p>
<p class="color-component-lvl-2">Component level 2 text</p>
<p class="color-component-lvl-3">Component level 3 text</p>
```

## Alpha Backgrounds

Phenix provides background colors with alpha transparency:

### Dark Alpha

```html
<div class="bg-alpha-05">5% black</div>
<div class="bg-alpha-10">10% black</div>
<div class="bg-alpha-15">15% black</div>
<div class="bg-alpha-25">25% black</div>
<div class="bg-alpha-50">50% black</div>
<div class="bg-alpha-75">75% black</div>
```

### Light Alpha

```html
<div class="bg-revert-05">5% white</div>
<div class="bg-revert-10">10% white</div>
<div class="bg-revert-15">15% white</div>
<div class="bg-revert-25">25% white</div>
<div class="bg-revert-50">50% white</div>
<div class="bg-revert-75">75% white</div>
```

## Offwhite Backgrounds

Phenix provides light background variations for different contexts:

```html
<div class="bg-offwhite-primary">Primary offwhite</div>
<div class="bg-offwhite-secondary">Secondary offwhite</div>
<div class="bg-offwhite-info">Info offwhite</div>
<div class="bg-offwhite-gray">Gray offwhite</div>
<div class="bg-offwhite-dark">Dark offwhite</div>
<div class="bg-offwhite-success">Success offwhite</div>
<div class="bg-offwhite-danger">Danger offwhite</div>
<div class="bg-offwhite-warning">Warning offwhite</div>
```

Additional offwhite variations:

```html
<div class="bg-offwhite-smoke">Smoke offwhite</div>
<div class="bg-offwhite-snow">Snow offwhite</div>
<div class="bg-offwhite-honeydew">Honeydew offwhite</div>
<div class="bg-offwhite-mintcream">Mintcream offwhite</div>
<div class="bg-offwhite-azure">Azure offwhite</div>
<div class="bg-offwhite-aliceblue">Alice blue offwhite</div>
<div class="bg-offwhite-ghost">Ghost offwhite</div>
<div class="bg-offwhite-seashell">Seashell offwhite</div>
<div class="bg-offwhite-beige">Beige offwhite</div>
<div class="bg-offwhite-oldlace">Old lace offwhite</div>
<div class="bg-offwhite-floral">Floral offwhite</div>
<div class="bg-offwhite-ivory">Ivory offwhite</div>
<div class="bg-offwhite-antique">Antique offwhite</div>
<div class="bg-offwhite-linen">Linen offwhite</div>
<div class="bg-offwhite-lavenderblush">Lavender blush offwhite</div>
```

## Gradient Backgrounds

Phenix provides a variety of gradient backgrounds that can be customized with different rotation angles:

### Basic Gradients

```html
<div class="bg-grade-primary">Primary gradient</div>
<div class="bg-grade-secondary">Secondary gradient</div>
<div class="bg-grade-success">Success gradient</div>
<div class="bg-grade-danger">Danger gradient</div>
<div class="bg-grade-warning">Warning gradient</div>
<div class="bg-grade-purple">Purple gradient</div>
<div class="bg-grade-ice">Ice gradient</div>
<div class="bg-grade-fire">Fire gradient</div>
<div class="bg-grade-water">Water gradient</div>
```

### Mixed Gradients

```html
<div class="bg-grade-primary-purple">Primary to purple</div>
<div class="bg-grade-primary-secondary">Primary to secondary</div>
<div class="bg-grade-primary-offwhite">Primary to white</div>
<div class="bg-grade-primary-dark">Primary to dark</div>
<div class="bg-grade-danger-purple">Danger to purple</div>
```

### Alpha Gradients

```html
<div class="bg-grade-alpha-dark">Dark alpha gradient</div>
<div class="bg-grade-alpha-light">Light alpha gradient</div>
<div class="bg-grade-alpha-darker">Darker alpha gradient</div>
<div class="bg-grade-alpha-lighter">Lighter alpha gradient</div>
```

### Offwhite Gradients

```html
<div class="bg-grade-silver">Silver gradient</div>
<div class="bg-grade-offwhite-blue">Blue offwhite gradient</div>
<div class="bg-grade-offwhite-green">Green offwhite gradient</div>
<div class="bg-grade-offwhite-red">Red offwhite gradient</div>
<div class="bg-grade-offwhite-yellow">Yellow offwhite gradient</div>
<div class="bg-grade-offwhite-purple">Purple offwhite gradient</div>
```

### Gradient Rotation

Control the angle of your gradients:

```html
<div class="bg-grade-primary bg-grade-45">45° angle gradient</div>
<div class="bg-grade-primary bg-grade-90">90° angle gradient</div>
<div class="bg-grade-primary bg-grade-120">120° angle gradient</div>
<div class="bg-grade-primary bg-grade-180">180° angle gradient</div>
```

Negative angles:

```html
<div class="bg-grade-primary bg-grade-45n">-45° angle gradient</div>
<div class="bg-grade-primary bg-grade-90n">-90° angle gradient</div>
<div class="bg-grade-primary bg-grade-120n">-120° angle gradient</div>
<div class="bg-grade-primary bg-grade-180n">-180° angle gradient</div>
```

## Border Colors

Control the color of borders:

```html
<div class="border-1 border-primary">Primary border</div>
<div class="border-1 border-secondary">Secondary border</div>
<div class="border-1 border-success">Success border</div>
<div class="border-1 border-danger">Danger border</div>
<div class="border-1 border-warning">Warning border</div>
<div class="border-1 border-info">Info border</div>
<div class="border-1 border-gray">Gray border</div>
<div class="border-1 border-dark">Dark border</div>
<div class="border-1 border-white">White border</div>
```

Alpha border colors:

```html
<div class="border-1 border-alpha-10">10% black border</div>
<div class="border-1 border-alpha-15">15% black border</div>
<div class="border-1 border-alpha-25">25% black border</div>
<div class="border-1 border-alpha-50">50% black border</div>
```

## Social Media Colors

Phenix includes colors for popular social media platforms:

### Text Colors

```html
<p class="color-facebook">Facebook color</p>
<p class="color-twitter">Twitter color</p>
<p class="color-youtube">YouTube color</p>
<p class="color-instagram">Instagram color</p>
<p class="color-whatsapp">WhatsApp color</p>
<p class="color-linkedin">LinkedIn color</p>
<p class="color-pinterest">Pinterest color</p>
<p class="color-behance">Behance color</p>
<p class="color-dribbble">Dribbble color</p>
<p class="color-flicker">Flicker color</p>
<p class="color-snapchat">Snapchat color</p>
```

### Background Colors

```html
<div class="bg-facebook">Facebook background</div>
<div class="bg-twitter">Twitter background</div>
<div class="bg-youtube">YouTube background</div>
<div class="bg-instagram">Instagram background</div>
<div class="bg-whatsapp">WhatsApp background</div>
<div class="bg-linkedin">LinkedIn background</div>
<div class="bg-pinterest">Pinterest background</div>
<div class="bg-behance">Behance background</div>
<div class="bg-dribbble">Dribbble background</div>
<div class="bg-flicker">Flicker background</div>
<div class="bg-snapchat">Snapchat background</div>
<div class="bg-google-red">Google red background</div>
```

## Special Background Utilities

### Parallax Background

Create a parallax effect on background images:

```html
<div class="bg-parallax" style="background-image: url('image.jpg');">
  Parallax background content
</div>
```

## Customizing Colors

You can customize the Phenix color system by modifying the color variables in the `_customize.scss` file:

```scss
:root {
    /*==== Primary Color ====*/
    --primary-color   : #YourPrimaryColor;
    --primary-hover   : #YourPrimaryHoverColor;
    
    /*==== Secondary Color ====*/
    --secondary-color : #YourSecondaryColor;
    --secondary-hover : #YourSecondaryHoverColor;
    
    /*==== Gradients ====*/
    --primary-gradient   : YourGradientColors;
    --secondary-gradient : YourGradientColors;
}
```

By customizing these variables, you can create a consistent color scheme throughout your project that matches your brand identity. 