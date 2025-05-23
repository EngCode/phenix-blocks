# Template Parts for Dynamic Blocks

The Phenix Starter Theme includes template parts that can be used with dynamic blocks like Query Block, Users Query Block, Taxonomies Block, and Theme Part Block. These template parts allow you to customize how content is displayed in these blocks.

## Understanding Template Parts

Template parts are PHP files that define how content is displayed in dynamic blocks. They are located in the `template-parts/` directory of the theme and are organized into subdirectories based on their purpose:

- `template-parts/cards/`: Templates for post cards in Query Block
- `template-parts/taxonomies/`: Templates for taxonomy terms in Taxonomies Block
- `template-parts/users/`: Templates for user profiles in Users Query Block
- `template-parts/theme-parts/`: Templates for custom theme parts

## Query Block Templates

The Query Block can use custom templates from the `template-parts/cards/` directory to display posts. The theme includes several pre-built templates like `blog.php`, `blog-v2.php`, and `standard.php` that you can use as starting points.

1. Create a custom template in `template-parts/cards/` (example based on the theme's existing templates):

   ```php
   <?php
       // Get Post Information
       $post_link  = get_permalink();
       $post_title = get_the_title();
       $post_date  = get_the_date();
       $post_thumbnail   = get_the_post_thumbnail_url($post->ID, 'full');
       $post_excerpt     = get_the_excerpt();
       $post_author      = get_the_author_meta('display_name');
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
                       // Get Post Categories
                       $categories = get_the_category();
                       if (!empty($categories)) {
                           echo '<a href="' . esc_url(get_category_link($categories[0]->term_id)) . '" class="fs-12 color-primary">';
                           echo esc_html($categories[0]->name);
                           echo '</a>';
                       }
                   ?>
               </div>
               
               <!-- Title -->
               <a href="<?php echo $post_link; ?>" class="fs-17 mb-10 display-block weight-medium">
                   <?php echo $post_title; ?>
               </a>
               
               <!-- Excerpt -->
               <p class="mb-15 fs-15 tx-justify">
                   <?php echo wp_trim_words($post_excerpt, 20, '...'); ?>
               </p>
               
               <!-- Read More -->
               <a href="<?php echo $post_link; ?>" class="btn btn-sm btn-primary">
                   <?php echo __('Read More', 'phenix'); ?>
               </a>
           </div>
       </div>
   </div>
   ```

2. Use your custom template in the Query Block:
   - Add a Query Block to your page
   - In the block settings sidebar, find the "Template" option
   - Select your custom template from the dropdown menu

## Taxonomies Block Templates

The Taxonomies Block can use custom templates from the `template-parts/taxonomies/` directory to display taxonomy terms.

1. Create a custom template in `template-parts/taxonomies/` (example based on the theme's existing templates):

   ```php
   <?php
       // Get Taxonomy Information
       $tax_name = $tax->name;
       $tax_count = $tax->count;
       $tax_link = get_term_link($tax);
       
       // Get Taxonomy Image (if using a plugin that adds images to taxonomies)
       $tax_image = '';
       if (function_exists('get_term_meta')) {
           $tax_image = get_term_meta($tax->term_id, 'taxonomy_image', true);
       }
       
       // Image Placeholder
       if (empty($tax_image)) {
           $tax_image = 'https://placehold.co/300x200';
       }
   ?>
   <!-- Custom Taxonomy Template -->
   <div class="custom-tax-card mb-30 col-auto">
       <div class="content-box bg-white radius-md shadow-sm text-center">
           <!-- Taxonomy Image -->
           <a href="<?php echo $tax_link; ?>" data-src="<?php echo $tax_image; ?>" 
              class="px-media ratio-4x3 mb-15 radius-top-md"></a>
           
           <!-- Content -->
           <div class="pd-20">
               <!-- Name -->
               <a href="<?php echo $tax_link; ?>" class="fs-17 mb-5 display-block weight-medium">
                   <?php echo $tax_name; ?>
               </a>
               
               <!-- Count -->
               <span class="fs-14 color-primary">
                   <?php echo sprintf(_n('%s Post', '%s Posts', $tax_count, 'phenix'), $tax_count); ?>
               </span>
           </div>
       </div>
   </div>
   ```

2. Use your custom template in the Taxonomies Block:
   - Add a Taxonomies Block to your page
   - In the block settings sidebar, find the "Template" option
   - Select your custom template from the dropdown menu

## Users Query Block Templates

The Users Query Block can use custom templates from the `template-parts/users/` directory to display user profiles.

1. Create a custom template in `template-parts/users/` (example based on the theme's existing templates):

   ```php
   <?php
       // Get User Information
       $user_id = $user->ID;
       $display_name = $user->display_name;
       $user_description = $user->description;
       $user_url = $user->user_url;
       $user_email = $user->user_email;
       
       // Get User Avatar
       $avatar_url = get_avatar_url($user_id, array('size' => 150));
   ?>
   <!-- Custom User Template -->
   <div class="custom-user-card mb-30 col-auto">
       <div class="content-box bg-white radius-md shadow-sm text-center">
           <!-- User Avatar -->
           <div class="avatar-container mb-15 pt-20">
               <img src="<?php echo $avatar_url; ?>" alt="<?php echo $display_name; ?>" 
                    class="avatar radius-circle mx-auto" width="80" height="80">
           </div>
           
           <!-- Content -->
           <div class="pd-20">
               <!-- Name -->
               <h3 class="fs-17 mb-5 weight-medium">
                   <?php echo $display_name; ?>
               </h3>
               
               <!-- Description -->
               <?php if (!empty($user_description)) : ?>
                   <p class="mb-15 fs-14 tx-justify">
                       <?php echo wp_trim_words($user_description, 15, '...'); ?>
                   </p>
               <?php endif; ?>
               
               <!-- Contact Links -->
               <div class="user-links flex-row justify-center gap-10">
                   <?php if (!empty($user_url)) : ?>
                       <a href="<?php echo esc_url($user_url); ?>" class="btn btn-sm btn-outline" target="_blank">
                           <i class="fas fa-globe"></i>
                       </a>
                   <?php endif; ?>
                   
                   <?php if (!empty($user_email)) : ?>
                       <a href="mailto:<?php echo esc_attr($user_email); ?>" class="btn btn-sm btn-outline">
                           <i class="fas fa-envelope"></i>
                       </a>
                   <?php endif; ?>
               </div>
           </div>
       </div>
   </div>
   ```

2. Use your custom template in the Users Query Block:
   - Add a Users Query Block to your page
   - In the block settings sidebar, find the "Template" option
   - Select your custom template from the dropdown menu

## Theme Part Block Templates

The Theme Part Block can use custom templates from the `template-parts/theme-parts/` directory to display custom theme parts.

1. Create a custom template in `template-parts/theme-parts/` (example):

   ```php
   <?php
       // Get Custom Fields (if using ACF or similar)
       $title = get_field('custom_title');
       $content = get_field('custom_content');
       $image = get_field('custom_image');
   ?>
   <!-- Custom Theme Part Template -->
   <div class="custom-theme-part pd-30 bg-light radius-lg">
       <div class="row align-center">
           <?php if (!empty($image)) : ?>
               <div class="col-md-4">
                   <img src="<?php echo esc_url($image['url']); ?>" 
                        alt="<?php echo esc_attr($image['alt']); ?>" 
                        class="img-fluid radius-md">
               </div>
           <?php endif; ?>
           
           <div class="col">
               <?php if (!empty($title)) : ?>
                   <h2 class="mb-15"><?php echo esc_html($title); ?></h2>
               <?php endif; ?>
               
               <?php if (!empty($content)) : ?>
                   <div class="custom-content">
                       <?php echo wp_kses_post($content); ?>
                   </div>
               <?php endif; ?>
           </div>
       </div>
   </div>
   ```

2. Use your custom template in the Theme Part Block:
   - Add a Theme Part Block to your page
   - In the block settings sidebar, find the "Template" option
   - Select your custom template from the dropdown menu

## Template Variables

Each dynamic block provides specific variables that you can use in your templates:

1. **Query Block**:
   - `$post`: The current post object
   - Standard WordPress loop variables like `the_title()`, `the_content()`, etc.

2. **Taxonomies Block**:
   - `$tax`: The current taxonomy term object
   - `$tax->name`: The term name
   - `$tax->count`: The number of posts in the term
   - `$tax->description`: The term description

3. **Users Query Block**:
   - `$user`: The current user object
   - `$user->ID`: The user ID
   - `$user->display_name`: The user's display name
   - `$user->description`: The user's bio

## Best Practices for Template Parts

1. **Use Consistent Styling**: Follow the Phenix Design System's styling conventions for consistent appearance.

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

5. **Optimize for Performance**: Minimize database queries and use efficient code.

6. **Add Comments**: Document your template code for easier maintenance.
