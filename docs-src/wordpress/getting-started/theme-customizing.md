# Theme Customizing

This guide explains the structure of the Phenix Starter Theme and how to customize it effectively. The theme is designed to work seamlessly with the Phenix Blocks plugin and the WordPress block editor, providing a solid foundation for creating custom websites.

## Theme Structure

The Phenix Starter Theme follows a modular structure that makes it easy to customize and extend. Here's an overview of the key directories and files:

```
pds-starter/
├── assets/            # Compiled CSS, JS, fonts, and images
├── parts/             # Block theme template parts (HTML)
├── sass/              # SASS source files for styling
├── template-parts/    # PHP template parts for dynamic blocks
├── templates/         # Block theme templates
├── functions.php      # Theme functions and setup
├── style.css          # Main theme stylesheet
├── style.js           # Custom JavaScript for the theme
└── theme.json         # Block theme settings and styles
```

## 1. SASS Customization

The Phenix Starter Theme uses SASS for styling, which allows for modular and maintainable CSS. The SASS directory is organized as follows:

```
sass/
├── _theme-info.scss     # Theme information
├── _theme-style.scss    # Main theme styles
├── assets/              # Additional assets
├── elements/            # Element-specific styles
├── patches/             # Style overrides and fixes
├── style-rtl.scss       # RTL stylesheet entry
└── style.scss           # Main stylesheet entry
```

### How to Customize Theme Styles

1. **Edit `_theme-style.scss`**: This file contains the main theme styles and is the primary place for customizations.

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
   
   // Then import in style.scss
   @import "elements/custom-element";
   ```

3. **Compile SASS to CSS**: After making changes, you need to compile the SASS files to CSS. You can use a build tool like Gulp, Webpack, or the built-in SASS compiler in many code editors.

   ```bash
   # Example using node-sass
   node-sass sass/style.scss style.css
   ```

### Key SASS Variables

The theme uses CSS variables for consistent styling. Here are some key variables you can customize:

```scss
:root {
  // Colors
  --primary-color: #0473bc;
  --secondary-color: #00a69c;
  --dark-color: #1d1e20;
  
  // Typography
  --body-font: 'Poppins', sans-serif;
  --heading-font: 'Poppins', sans-serif;
  
  // Spacing
  --space-unit: 1rem;
}
```

## 2. Custom JavaScript (style.js)

The `style.js` file allows you to add custom JavaScript functionality to your theme. This file is loaded on the front end and is the perfect place to add custom interactions, animations, or functionality.

### How to Add Custom JavaScript

1. **Edit the `style.js` file**: Add your custom JavaScript code to this file.

   ```javascript
   document.addEventListener('DOMContentLoaded', ready => {
       // Your custom JavaScript here
       
       // Example: Add a scroll animation
       Phenix('.animate-on-scroll').forEach(element => {
           Phenix(element).scrollSpy({
               animation: 'fade-in',
               duration: 800
           });
       });
   });
   ```

2. **Using Phenix JavaScript Utilities**: The theme includes the Phenix JavaScript library, which provides many useful utilities for DOM manipulation, animations, and more.

   ```javascript
   // Example: Toggle a modal
   Phenix('#modal-trigger').on('click', function() {
       Phenix('#my-modal').toggleClass('is-active');
   });
   ```

3. **Enqueuing Additional Scripts**: If you need to add more JavaScript files, you can enqueue them in `functions.php`.

   ```php
   function theme_enqueue_scripts() {
       wp_enqueue_script('custom-script', get_template_directory_uri() . '/assets/js/custom.js', array(), '1.0.0', true);
   }
   add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');
   ```

## 3. Template Parts for Dynamic Blocks

The Phenix Starter Theme includes template parts that can be used with dynamic blocks like Query Block, Users Query Block, Taxonomies Block, and Theme Part Block. These template parts allow you to customize how content is displayed in these blocks.

### Template Parts Structure

```
template-parts/
├── buttons/           # Button styles and variations
├── cards/             # Post card templates for Query Block
├── cards-taxonomies/  # Templates for Taxonomies Block
├── dynamic/           # Custom templates for dynamic content
├── post/              # Post content templates
└── theme/             # Theme-specific templates
```

### How to Use Template Parts with Dynamic Blocks

#### Query Block Templates

The Query Block can use custom templates from the `template-parts/cards/` directory to display posts. The theme includes several pre-built templates like `blog.php`, `blog-v2.php`, and `standard.php` that you can use as starting points.

1. Create a custom template in `template-parts/cards/` (example based on the theme's existing templates):

   ```php
   <?php
       // Get Post Information
       $post_link  = get_permalink();
       $post_title = get_the_title();
       $post_date  = get_the_date();
       $post_thumbnail   = get_the_post_thumbnail_url($post->ID, 'full');
       $post_description = strip_tags(get_the_excerpt());
       
       // Meta information
       $meta_info = get_post_meta($post->ID);
       
       // Thumbnail Placeholder
       if ($post_thumbnail === false) {
           $post_thumbnail = 'https://placehold.co/768x500';
       }
   ?>
   <!-- Custom Card Template -->
   <div class="custom-blog-card mb-30 col-auto">
       <div class="content-box bg-white radius-md shadow-sm h-min-100">
           <!-- Featured Image -->
           <a href="<?php echo $post_link; ?>" data-src="<?php echo $post_thumbnail; ?>" 
              class="px-media ratio-16x9 mb-15 radius-top-md"></a>
           
           <!-- Content -->
           <div class="pd-20">
               <!-- Date & Category -->
               <div class="mb-10 flex-row align-between">
                   <span class="fs-12 tx-icon far fa-clock"><?php echo $post_date; ?></span>
                   <?php
                       $categories = get_the_category();
                       if (!empty($categories)) {
                           echo '<a href="' . esc_url(get_category_link($categories[0]->term_id)) . '" class="fs-12 color-primary">';
                           echo esc_html($categories[0]->name);
                           echo '</a>';
                       }
                   ?>
               </div>
               
               <!-- Title -->
               <a href="<?php echo $post_link; ?>" class="reset-link">
                   <h3 class="fs-16 weight-medium mb-10"><?php echo $post_title; ?></h3>
               </a>
               
               <!-- Excerpt -->
               <p class="fs-14 mb-15 color-gray tx-line-clamp" style="--max-lines: 3;">
                   <?php echo $post_description; ?>
               </p>
               
               <!-- Read More -->
               <a href="<?php echo $post_link; ?>" class="btn btn-sm btn-primary">
                   <?php echo __('Read More', 'phenix'); ?>
               </a>
           </div>
       </div>
   </div>
   ```

2. Select this template in the Query Block settings in the editor by choosing it from the "Template" dropdown in the block settings sidebar.

#### Taxonomies Block Templates

Create custom templates for displaying taxonomies in the `template-parts/cards-taxonomies/` directory:

```php
<!-- template-parts/cards-taxonomies/custom-taxonomy.php -->
<div class="taxonomy-item">
  <h4 class="tax-name"><?php echo $tax_name; ?></h4>
  <span class="tax-count"><?php echo $tax_count; ?> items</span>
  <a href="<?php echo $tax_link; ?>" class="tax-link">View All</a>
</div>
```

#### Users Query Block Templates

Create custom templates for displaying users in the `template-parts/cards/` directory:

```php
<!-- template-parts/cards/user-card.php -->
<div class="user-card">
  <div class="user-avatar"><?php echo get_avatar($user_id, 96); ?></div>
  <h4 class="user-name"><?php echo $display_name; ?></h4>
  <div class="user-bio"><?php echo $user_description; ?></div>
</div>
```

#### Theme Part Block

The Theme Part Block allows you to insert any PHP template part into your content:

1. Create a custom dynamic template in `template-parts/dynamic/`:

   ```php
   <!-- template-parts/dynamic/latest-products.php -->
   <div class="latest-products">
     <h3>Latest Products</h3>
     <div class="products-grid">
       <?php
       $products = wc_get_products(array('limit' => 4));
       foreach ($products as $product) {
         echo '<div class="product-card">';
         echo '<h4>' . $product->get_name() . '</h4>';
         echo '<span class="price">' . $product->get_price_html() . '</span>';
         echo '</div>';
       }
       ?>
     </div>
   </div>
   ```

2. Select this template in the Theme Part Block settings in the editor.

### Creating Custom Dynamic Templates

To create effective dynamic templates:

1. **Understand the Available Variables**: Each template type has specific variables available.
   - Query Block: Standard WordPress loop variables
   - Taxonomies Block: `$tax_name`, `$tax_count`, `$tax_link`, etc.
   - Users Query Block: `$user_id`, `$display_name`, `$user_description`, etc.

2. **Use Phenix CSS Classes**: Leverage the Phenix CSS framework classes for consistent styling.

3. **Add Conditional Logic**: Use PHP conditionals to display different content based on data.

   ```php
   <?php if (has_post_thumbnail()) : ?>
     <div class="card-media"><?php the_post_thumbnail('medium'); ?></div>
   <?php else : ?>
     <div class="card-media placeholder">No Image</div>
   <?php endif; ?>
   ```

4. **Test Across Different Content Types**: Ensure your templates work well with various content types and edge cases.

## Theme.json Configuration

The `theme.json` file is a crucial part of the Phenix Starter Theme as it defines how the theme integrates with the block editor. This file controls global styles, color palettes, typography settings, and more.

### Structure of theme.json

The `theme.json` file follows the WordPress block theme schema and includes the following key sections:

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

### Customizing theme.json

You can modify the `theme.json` file to change how your theme integrates with the block editor:

1. **Color Palette**: Define custom colors that will be available in the block editor color picker.

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
       }
     ]
   }
   ```

2. **Typography Settings**: Define font families, sizes, and other typography settings.

   ```json
   "typography": {
     "fontFamilies": [
       {
         "fontFamily": "'Poppins', sans-serif",
         "name": "Poppins",
         "slug": "primary"
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
       }
     ]
   }
   ```

3. **Custom Templates**: Define custom page templates that will be available in the block editor.

   ```json
   "customTemplates": [
     {
       "name": "blank",
       "postTypes": ["page", "post"],
       "title": "Blank"
     }
   ]
   ```

4. **Template Parts**: Define reusable template parts for your theme.

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
     }
   ]
   ```

## Using the Block Editor with Your Customized Theme

After customizing your theme's SASS, JavaScript, template parts, and theme.json, you can use the WordPress block editor to build pages and posts with your custom styles and templates.

1. Go to **Pages** or **Posts** and edit or create a new item
2. Use the block editor to add content blocks
3. Find Phenix Blocks in the **Design** category of the block inserter
4. For dynamic content, use the Query, Taxonomies, Users Query, or Theme Part blocks
5. Select your custom templates in the block settings

The block editor will automatically apply your theme's styles and use your custom template parts for dynamic blocks, creating a seamless and consistent design across your website.

### Block Editor Integration

The Phenix Starter Theme is designed to work seamlessly with the block editor. Here's how different parts of the theme integrate with the editor:

1. **SASS Variables → Block Editor Controls**: The CSS variables defined in your SASS files are available as styling options in the block editor.

2. **Template Parts → Dynamic Blocks**: Your custom template parts can be selected in the settings of dynamic blocks like Query Block and Taxonomies Block.

3. **Theme.json → Global Styles**: The settings in theme.json control the global styles panel in the block editor, allowing users to customize colors, typography, and more.

4. **Block Patterns**: The theme includes pre-defined block patterns that users can insert into their content. These patterns use the styles defined in your SASS files.

