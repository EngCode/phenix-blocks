# Theme.json Configuration

The `theme.json` file is a crucial part of the Phenix Starter Theme as it defines how the theme integrates with the block editor. This file controls global styles, color palettes, typography settings, and more.

## Understanding theme.json

The `theme.json` file follows the WordPress block theme schema and includes several key sections that define how your theme interacts with the block editor. It's located in the root directory of your theme.

## Structure of theme.json

The `theme.json` file includes the following key sections:

```json
{
  "$schema": "https://schemas.wp.org/wp/6.6/theme.json",
  "customTemplates": [...],
  "settings": {
    "appearanceTools": true,
    "color": {...},
    "typography": {...},
    "spacing": {...},
    "layout": {...}
  },
  "styles": {...},
  "templateParts": [...]
}
```

## Customizing theme.json

You can modify the `theme.json` file to change how your theme integrates with the block editor:

### Color Palette

Define custom colors that will be available in the block editor color picker:

```json
"color": {
  "palette": [
    {
      "color": "#0473bc",
      "name": "Primary Color",
      "slug": "primary"
    },
    {
      "color": "#00a69c",
      "name": "Secondary Color",
      "slug": "secondary"
    },
    {
      "color": "#f5f5f5",
      "name": "Light Gray",
      "slug": "light-gray"
    }
  ]
}
```

These colors will be available in the color picker in the block editor and can be referenced in your theme's CSS using the `var(--wp--preset--color--slug)` syntax.

### Typography Settings

Define font families and font sizes that will be available in the block editor:

```json
"typography": {
  "fontFamilies": [
    {
      "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
      "name": "System Font",
      "slug": "system"
    },
    {
      "fontFamily": "'Poppins', sans-serif",
      "name": "Poppins",
      "slug": "poppins"
    }
  ],
  "fontSizes": [
    {
      "name": "Small",
      "size": "14px",
      "slug": "small"
    },
    {
      "name": "Medium",
      "size": "16px",
      "slug": "medium"
    },
    {
      "name": "Large",
      "size": "20px",
      "slug": "large"
    }
  ]
}
```

### Custom Templates

Define custom page templates that will be available in the block editor:

```json
"customTemplates": [
  {
    "name": "blank",
    "postTypes": ["page", "post"],
    "title": "Blank"
  },
  {
    "name": "full-width",
    "postTypes": ["page"],
    "title": "Full Width"
  }
]
```

### Template Parts

Define reusable template parts for your theme:

```json
"templateParts": [
  {
    "area": "header",
    "name": "header",
    "title": "Header"
  },
  {
    "area": "footer",
    "name": "footer",
    "title": "Footer"
  },
  {
    "area": "sidebar",
    "name": "sidebar",
    "title": "Sidebar"
  }
]
```

### Layout Settings

Define default layout settings for your theme:

```json
"layout": {
  "contentSize": "1200px",
  "wideSize": "1400px"
}
```

### Global Styles

Define global styles that will be applied to all blocks:

```json
"styles": {
  "color": {
    "background": "#ffffff",
    "text": "#333333"
  },
  "typography": {
    "fontSize": "16px",
    "lineHeight": "1.5"
  },
  "spacing": {
    "blockGap": "2rem"
  }
}
```

## Block-Specific Settings

You can also define settings and styles for specific blocks:

```json
"settings": {
  "blocks": {
    "core/paragraph": {
      "color": {
        "custom": true,
        "customGradient": false
      },
      "typography": {
        "fontSizes": [
          {
            "name": "Small",
            "size": "14px",
            "slug": "small"
          },
          {
            "name": "Normal",
            "size": "16px",
            "slug": "normal"
          }
        ]
      }
    }
  }
}
```

## Integration with Phenix Blocks

The Phenix Starter Theme's `theme.json` file is designed to work seamlessly with the Phenix Blocks plugin. The colors, typography, and layout settings defined in `theme.json` will be available in the Phenix Controls panel for all blocks.

## Best Practices for theme.json

1. **Keep It Simple**: Only define settings that you actually need and use in your theme.

2. **Use Consistent Naming**: Use consistent naming conventions for colors, font sizes, and other settings.

3. **Test Changes**: After modifying `theme.json`, test your changes in the block editor to ensure they work as expected.

4. **Version Control**: Keep track of changes to `theme.json` in your version control system.

5. **Documentation**: Document any custom settings or styles you add to `theme.json` for future reference.

## Example: Complete theme.json

Here's an example of a complete `theme.json` file for a Phenix Starter Theme:

```json
{
  "$schema": "https://schemas.wp.org/wp/6.6/theme.json",
  "version": 2,
  "customTemplates": [
    {
      "name": "blank",
      "postTypes": ["page", "post"],
      "title": "Blank"
    },
    {
      "name": "full-width",
      "postTypes": ["page"],
      "title": "Full Width"
    }
  ],
  "settings": {
    "appearanceTools": true,
    "color": {
      "custom": true,
      "customGradient": true,
      "palette": [
        {
          "color": "#0473bc",
          "name": "Primary",
          "slug": "primary"
        },
        {
          "color": "#00a69c",
          "name": "Secondary",
          "slug": "secondary"
        },
        {
          "color": "#f5f5f5",
          "name": "Light Gray",
          "slug": "light-gray"
        },
        {
          "color": "#333333",
          "name": "Dark",
          "slug": "dark"
        },
        {
          "color": "#ffffff",
          "name": "White",
          "slug": "white"
        }
      ]
    },
    "layout": {
      "contentSize": "1200px",
      "wideSize": "1400px"
    },
    "spacing": {
      "units": ["px", "em", "rem", "%", "vw", "vh"]
    },
    "typography": {
      "customFontSize": true,
      "fontFamilies": [
        {
          "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
          "name": "System Font",
          "slug": "system"
        },
        {
          "fontFamily": "'Poppins', sans-serif",
          "name": "Poppins",
          "slug": "poppins"
        }
      ],
      "fontSizes": [
        {
          "name": "Small",
          "size": "14px",
          "slug": "small"
        },
        {
          "name": "Medium",
          "size": "16px",
          "slug": "medium"
        },
        {
          "name": "Large",
          "size": "20px",
          "slug": "large"
        },
        {
          "name": "X-Large",
          "size": "24px",
          "slug": "x-large"
        }
      ]
    }
  },
  "styles": {
    "color": {
      "background": "#ffffff",
      "text": "#333333"
    },
    "typography": {
      "fontFamily": "var(--wp--preset--font-family--system)",
      "fontSize": "16px",
      "lineHeight": "1.5"
    },
    "spacing": {
      "blockGap": "2rem"
    }
  },
  "templateParts": [
    {
      "area": "header",
      "name": "header",
      "title": "Header"
    },
    {
      "area": "footer",
      "name": "footer",
      "title": "Footer"
    },
    {
      "area": "sidebar",
      "name": "sidebar",
      "title": "Sidebar"
    }
  ]
}
```

This example includes settings for colors, typography, spacing, layout, custom templates, and template parts, providing a solid foundation for your theme's integration with the block editor.
