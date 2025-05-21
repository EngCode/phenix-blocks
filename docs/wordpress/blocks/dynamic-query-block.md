# Dynamic Query Block

## Overview

The Dynamic Query Block is a powerful component in the Phenix Design System that allows you to fetch and display dynamic content from your WordPress database. This block enables you to create custom content listings, grids, sliders, and more by querying posts, pages, custom post types, or any other content stored in your WordPress site. With extensive filtering, sorting, and display options, the Dynamic Query Block provides a flexible solution for creating dynamic content sections without writing custom code.

<!-- Image placeholder for Dynamic Query Block -->

## Key Features

- Query any WordPress content type (posts, pages, custom post types)
- Advanced filtering options (categories, tags, taxonomies, custom fields)
- Flexible sorting and ordering capabilities
- Multiple display layouts (grid, list, carousel, masonry)
- Customizable item templates with dynamic data fields
- Pagination and load more functionality
- Responsive design controls for different screen sizes
- AJAX loading for improved performance

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Dynamic Query" or find it in the "Phenix Blocks" category
3. Add the Dynamic Query Block to your page
4. Configure the query settings to fetch your desired content
5. Customize the display layout and item templates
6. Adjust styling options as needed

## Block Settings

### Query Options

| Option | Description |
|--------|-------------|
| Content Type | Select the type of content to query (posts, pages, custom post types) |
| Number of Items | Set how many items to display per page |
| Offset | Skip a specific number of items from the beginning of the results |
| Include/Exclude | Specify specific items to include or exclude by ID |
| Order By | Sort results by various criteria (date, title, menu order, etc.) |
| Order | Set ascending or descending order |

### Filter Options

| Option | Description |
|--------|-------------|
| Categories | Filter by specific categories |
| Tags | Filter by specific tags |
| Taxonomies | Filter by custom taxonomies |
| Author | Filter by content author |
| Date | Filter by publication date range |
| Search Term | Filter by keyword search |
| Meta Query | Filter by custom field values |

### Layout Options

| Option | Description |
|--------|-------------|
| Display Type | Choose between grid, list, carousel, or masonry layout |
| Columns | Set the number of columns for grid and masonry layouts |
| Gap | Control the spacing between items |
| Aspect Ratio | Set a consistent aspect ratio for item thumbnails |
| Item Height | Control the height of items (auto, fixed, or dynamic) |
| Responsive Columns | Adjust column count for different screen sizes |

### Item Template Options

| Option | Description |
|--------|-------------|
| Template | Select from predefined item templates or create a custom one |
| Show Thumbnail | Display the featured image for each item |
| Thumbnail Size | Select the image size to use |
| Show Title | Display the item title |
| Show Excerpt | Display the item excerpt or summary |
| Excerpt Length | Control the length of excerpts |
| Show Meta | Display item metadata (author, date, categories, etc.) |
| Show Button | Add a "Read More" or custom action button |

### Pagination Options

| Option | Description |
|--------|-------------|
| Pagination Type | Choose between numbered pagination, load more button, or infinite scroll |
| Items Per Page | Set how many items to show before pagination |
| Show Page Numbers | Display numbered page links |
| Previous/Next | Show previous and next page navigation |
| Load More Text | Customize the text for the load more button |

### Carousel Options

When using carousel layout:

| Option | Description |
|--------|-------------|
| Slides Per View | Number of slides visible at once |
| Space Between | Gap between slides |
| Loop | Enable/disable infinite loop |
| Autoplay | Enable/disable automatic sliding |
| Navigation | Show/hide navigation arrows |
| Pagination | Show/hide pagination dots |

## Examples

### Basic Post Grid

A simple grid of recent blog posts:

```html
<!-- wp:phenix/dynamic-query {"contentType":"post","numberOfItems":6,"displayType":"grid","columns":3,"showThumbnail":true,"showTitle":true,"showExcerpt":true,"showButton":true} -->
<div class="wp-block-phenix-dynamic-query px-query-block">
  <div class="px-row row-md">
    <!-- Query items will be rendered here dynamically -->
    <div class="px-col col-12 col-md-6 col-lg-4 mb-30">
      <article class="query-item">
        <figure class="item-thumbnail mb-10">
          <img src="https://example.com/image1.jpg" alt="Post Title" class="img-fluid">
        </figure>
        <h3 class="item-title mb-10">Post Title 1</h3>
        <div class="item-excerpt mb-15">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <a href="/post-url" class="btn primary">Read More</a>
      </article>
    </div>
    <!-- Additional items would be rendered here -->
  </div>
  
  <!-- Pagination -->
  <div class="pagination-wrapper tx-align-center mt-30">
    <div class="pagination">
      <span class="page-numbers current">1</span>
      <a class="page-numbers" href="#">2</a>
      <a class="page-numbers" href="#">3</a>
      <a class="next page-numbers" href="#">Next</a>
    </div>
  </div>
</div>
<!-- /wp:phenix/dynamic-query -->
```

### Featured Products Carousel

A carousel of WooCommerce products:

```html
<!-- wp:phenix/dynamic-query {"contentType":"product","numberOfItems":8,"displayType":"carousel","slidesPerView":4,"spaceBetween":20,"loop":true,"autoplay":true,"navigation":true,"taxonomies":{"product_cat":["featured"]}} -->
<div class="wp-block-phenix-dynamic-query px-query-block">
  <div class="px-slider" data-slides-view="4" data-space-between="20" data-loop="true" data-autoplay="true" data-navigation="true">
    <!-- Query items will be rendered here dynamically -->
    <div class="swiper-slide">
      <article class="query-item product">
        <figure class="item-thumbnail mb-10">
          <img src="https://example.com/product1.jpg" alt="Product Name" class="img-fluid">
        </figure>
        <h3 class="item-title mb-5">Product Name 1</h3>
        <div class="item-price mb-10">$29.99</div>
        <a href="/product-url" class="btn primary sm">View Product</a>
      </article>
    </div>
    <!-- Additional items would be rendered here -->
  </div>
</div>
<!-- /wp:phenix/dynamic-query -->
```

### Filtered Category Posts

A list of posts from a specific category with custom filtering:

```html
<!-- wp:phenix/dynamic-query {"contentType":"post","numberOfItems":5,"displayType":"list","categories":[7],"orderBy":"date","order":"desc","showThumbnail":true,"thumbnailSize":"medium","showTitle":true,"showExcerpt":true,"excerptLength":120,"showMeta":true,"metaItems":["author","date","comments"]} -->
<div class="wp-block-phenix-dynamic-query px-query-block">
  <div class="query-list">
    <!-- Query items will be rendered here dynamically -->
    <article class="query-item flexbox gap-20 mb-30">
      <figure class="item-thumbnail" style="flex:0 0 200px">
        <img src="https://example.com/image1.jpg" alt="Post Title" class="img-fluid">
      </figure>
      <div class="item-content">
        <h3 class="item-title mb-10">Post Title 1</h3>
        <div class="item-meta mb-10">
          <span class="meta-author">By John Doe</span>
          <span class="meta-date">January 15, 2025</span>
          <span class="meta-comments">5 Comments</span>
        </div>
        <div class="item-excerpt mb-15">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <a href="/post-url" class="btn link">Continue Reading →</a>
      </div>
    </article>
    <!-- Additional items would be rendered here -->
  </div>
  
  <!-- Load More Button -->
  <div class="load-more-wrapper tx-align-center mt-30">
    <button class="btn primary load-more-button">Load More Posts</button>
  </div>
</div>
<!-- /wp:phenix/dynamic-query -->
```

### Custom Post Type Masonry Grid

A masonry layout for a custom post type with advanced filtering:

```html
<!-- wp:phenix/dynamic-query {"contentType":"portfolio","numberOfItems":12,"displayType":"masonry","columns":3,"taxonomies":{"portfolio_category":["web-design","branding"]},"metaQuery":{"relation":"AND","queries":[{"key":"featured","value":"yes","compare":"="}]}} -->
<div class="wp-block-phenix-dynamic-query px-query-block">
  <div class="masonry-grid" data-columns="3">
    <!-- Query items will be rendered here dynamically -->
    <div class="masonry-item">
      <article class="query-item portfolio-item">
        <figure class="item-thumbnail">
          <img src="https://example.com/portfolio1.jpg" alt="Project Title" class="img-fluid">
          <div class="overlay flexbox align-items-center justify-center">
            <h3 class="item-title color-white">Project Title 1</h3>
          </div>
        </figure>
      </article>
    </div>
    <!-- Additional items would be rendered here -->
  </div>
  
  <!-- Infinite Scroll Indicator -->
  <div class="infinite-scroll-loader tx-align-center mt-30">
    <div class="loading-spinner"></div>
  </div>
</div>
<!-- /wp:phenix/dynamic-query -->
```

## Common Use Cases

### Blog Archive

Create a customized blog archive page with filtering options:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:phenix/group {"padding":"md","backgroundColor":"#f9f9f9","marginBottom":"md"} -->
  <div class="px-group pdy-15 pdx-25 bg-color mb-15" style="--bg-color:#f9f9f9">
    <!-- wp:heading -->
    <h2>Latest Articles</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Explore our latest insights and updates.</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:phenix/group -->
  
  <!-- wp:phenix/grid-row -->
  <div class="px-row">
    <!-- wp:phenix/grid-column {"size":8} -->
    <div class="px-col col-8">
      <!-- wp:phenix/dynamic-query {"contentType":"post","numberOfItems":6,"displayType":"list","showThumbnail":true,"showTitle":true,"showExcerpt":true,"showMeta":true,"paginationType":"numbered"} -->
      <!-- Dynamic query content would be rendered here -->
      <!-- /wp:phenix/dynamic-query -->
    </div>
    <!-- /wp:phenix/grid-column -->
    
    <!-- wp:phenix/grid-column {"size":4} -->
    <div class="px-col col-4">
      <!-- Sidebar content (categories, recent posts, etc.) -->
    </div>
    <!-- /wp:phenix/grid-column -->
  </div>
  <!-- /wp:phenix/grid-row -->
</div>
<!-- /wp:phenix/container -->
```

### Related Posts Section

Display related posts at the end of a single post:

```html
<!-- wp:phenix/group {"padding":"md","marginTop":"lg","borderTop":true,"borderColor":"#eeeeee"} -->
<div class="px-group pdy-15 pdx-15 mt-30 border-t-solid" style="--border-color:#eeeeee">
  <!-- wp:heading {"level":3} -->
  <h3>Related Articles</h3>
  <!-- /wp:heading -->
  
  <!-- wp:phenix/dynamic-query {"contentType":"post","numberOfItems":3,"displayType":"grid","columns":3,"relatedTo":"current","relationType":"category","showThumbnail":true,"showTitle":true,"showExcerpt":false} -->
  <!-- Dynamic query content would be rendered here -->
  <!-- /wp:phenix/dynamic-query -->
</div>
<!-- /wp:phenix/group -->
```

## Best Practices

1. **Performance Optimization**: Limit the number of items queried to improve page load times

2. **Mobile Responsiveness**: Configure appropriate column counts for different screen sizes

3. **Meaningful Filtering**: Use specific filtering criteria to display the most relevant content

4. **Template Consistency**: Maintain consistent item templates across similar query blocks

5. **Pagination Consideration**: Choose appropriate pagination for the content type and user experience

6. **Caching**: Enable caching for query results when possible to improve performance

7. **Fallback Content**: Provide meaningful fallback content when no items match the query

## Related Blocks

- [Container Block](./container-block.md) - For positioning query results within layouts
- [Grid Row Block](./grid-row-block.md) - For creating custom grid layouts with query results
- [Taxonomies Query Block](./taxonomies-query-block.md) - For querying taxonomy terms
- [Users Query Block](./users-query-block.md) - For querying and displaying user data

