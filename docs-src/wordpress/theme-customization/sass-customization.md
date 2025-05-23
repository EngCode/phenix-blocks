# SASS Customization

The Phenix Starter Theme uses SASS (Syntactically Awesome Style Sheets) for styling, which allows for more maintainable and organized CSS. This guide explains how to customize your theme's styles using SASS.

## Theme Structure

The SASS files are located in the `sass/` directory of the theme:

```
pds-starter/
├── assets/            # Compiled CSS, JS, fonts, and images
├── parts/             # Block theme template parts (HTML)
├── sass/              # SASS source files for styling
├── template-parts/    # PHP template parts for dynamic blocks
├── templates/         # Block theme templates
├── functions.php      # Theme functions and setup
└── style.scss         # Main SASS file that imports all others
```

## Customizing SASS Variables

The Phenix Starter Theme uses SASS variables to define colors, typography, spacing, and other design elements. These variables are located in the `sass/variables/` directory.

1. **Edit Variables**: Modify the SASS variables in the appropriate files:

   ```scss
   // Example: Customizing the primary color
   :root {
     --primary-color: #3498db; // Change to your desired color
   }
   ```

2. **Add Custom SASS Files**: Create new SCSS files in the appropriate directories and import them in `style.scss`.

   ```scss
   // In a new file: sass/elements/_custom-element.scss
   .custom-element {
     // Your styles here
   }
   
   // Then import it in style.scss
   @import "elements/custom-element";
   ```

## Compiling SASS to CSS

After making changes to SASS files, you need to compile them to CSS:

1. **Using Node.js and npm**:
   - Make sure Node.js and npm are installed on your system
   - Navigate to the theme directory in your terminal
   - Run `npm install` to install dependencies
   - Run `npm run build` to compile SASS to CSS

2. **Using Gulp** (if the theme uses Gulp):
   - Run `gulp sass` to compile SASS to CSS
   - Run `gulp watch` to automatically compile SASS when files change

## SASS Structure

The SASS files are organized into several directories:

- `sass/variables/`: Contains variables for colors, typography, spacing, etc.
- `sass/core/`: Core styles for the theme
- `sass/elements/`: Styles for basic HTML elements
- `sass/components/`: Styles for reusable components
- `sass/blocks/`: Styles for custom blocks
- `sass/utilities/`: Utility classes for spacing, typography, etc.

## Best Practices for SASS Customization

1. **Maintain the Existing Structure**: Follow the existing file structure and naming conventions.

2. **Use Variables**: Use existing SASS variables or create new ones for consistent styling.

3. **Mobile-First Approach**: Write styles for mobile devices first, then use media queries for larger screens.

4. **Avoid !important**: Use proper CSS specificity instead of !important declarations.

5. **Comment Your Code**: Add comments to explain complex or non-obvious styles.

6. **Minimize Overrides**: Try to extend existing styles rather than overriding them completely.

## Example: Customizing a Component

Here's an example of customizing the button component:

```scss
// In sass/components/_buttons.scss
.px-btn {
  // Modify existing button styles
  &.btn-primary {
    background-color: var(--custom-primary-color, #3498db);
    
    &:hover {
      background-color: darken(var(--custom-primary-color, #3498db), 10%);
    }
  }
  
  // Add a new button variant
  &.btn-custom {
    background-color: #9b59b6;
    color: white;
    
    &:hover {
      background-color: darken(#9b59b6, 10%);
    }
  }
}
```

## Integration with the Block Editor

The styles you define in SASS will be applied to both the front end and the block editor, ensuring a consistent experience for users. The theme uses the `theme.json` file to register colors, typography, and other settings with the block editor.
