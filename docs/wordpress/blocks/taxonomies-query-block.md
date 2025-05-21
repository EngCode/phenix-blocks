# Taxonomies Query Block

## Overview

The Taxonomies Query Block is a specialized component in the Phenix Design System that allows you to fetch and display taxonomy terms from your WordPress site. This block enables you to create dynamic listings of categories, tags, or custom taxonomies with extensive filtering, sorting, and display options. The Taxonomies Query Block is particularly useful for creating category directories, tag clouds, filterable navigation, and other taxonomy-based content structures.

<!-- Image placeholder for Taxonomies Query Block -->

## Key Features

- Query any WordPress taxonomy (categories, tags, or custom taxonomies)
- Advanced filtering options for taxonomy terms
- Flexible sorting and ordering capabilities
- Multiple display layouts (grid, list, cloud, dropdown)
- Customizable term templates with dynamic data fields
- Term count display options
- Hierarchical term display support
- Link generation to term archive pages

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Taxonomies Query" or find it in the "Phenix Blocks" category
3. Add the Taxonomies Query Block to your page
4. Configure the query settings to fetch your desired taxonomy terms
5. Customize the display layout and term templates
6. Adjust styling options as needed

## Block Settings

### Query Options

| Option | Description |
|--------|-------------|
| Taxonomy | Select the taxonomy to query (categories, tags, or custom taxonomies) |
| Number of Terms | Set how many terms to display |
| Offset | Skip a specific number of terms from the beginning of the results |
| Include/Exclude | Specify specific terms to include or exclude by ID |
| Order By | Sort results by various criteria (name, count, ID, etc.) |
| Order | Set ascending or descending order |
| Hide Empty | Option to hide terms with no associated posts |

### Filter Options

| Option | Description |
|--------|-------------|
| Parent | Filter terms by parent term |
| Search | Filter terms by keyword search |
| Slug | Filter terms by slug |
| Term Meta | Filter terms by custom term meta values |

### Layout Options

| Option | Description |
|--------|-------------|
| Display Type | Choose between grid, list, cloud, or dropdown layout |
| Columns | Set the number of columns for grid layouts |
| Gap | Control the spacing between terms |
| Hierarchical | Display terms in a hierarchical structure |
| Show Count | Display the number of posts associated with each term |
| Show Description | Display the term description |

### Style Options

| Option | Description |
|--------|-------------|
| Term Color | Set the color of term text |
| Term Background | Set the background color of terms |
| Active Term Color | Set the color of active/current term |
| Active Term Background | Set the background color of active/current term |
| Term Padding | Add internal spacing within terms |
| Term Margin | Add spacing between terms |
| Term Border | Add borders with custom color, width, and style |
| Term Border Radius | Add rounded corners to terms |

## Examples

### Basic Category Grid

A simple grid of blog categories:

```html
<!-- wp:phenix/taxonomies-query {"taxonomy":"category","numberOfTerms":6,"displayType":"grid","columns":3,"showCount":true,"orderBy":"count","order":"desc"} -->
<div class="wp-block-phenix-taxonomies-query px-tax-query-block">
  <div class="px-row row-md">
    <!-- Query terms will be rendered here dynamically -->
    <div class="px-col col-12 col-md-6 col-lg-4 mb-20">
      <a href="/category/technology" class="tax-term-item">
        <span class="term-name">Technology</span>
        <span class="term-count">(42)</span>
      </a>
    </div>
    <div class="px-col col-12 col-md-6 col-lg-4 mb-20">
      <a href="/category/business" class="tax-term-item">
        <span class="term-name">Business</span>
        <span class="term-count">(38)</span>
      </a>
    </div>
    <div class="px-col col-12 col-md-6 col-lg-4 mb-20">
      <a href="/category/lifestyle" class="tax-term-item">
        <span class="term-name">Lifestyle</span>
        <span class="term-count">(27)</span>
      </a>
    </div>
    <!-- Additional terms would be rendered here -->
  </div>
</div>
<!-- /wp:phenix/taxonomies-query -->
```

### Tag Cloud

A tag cloud with variable font sizes based on post count:

```html
<!-- wp:phenix/taxonomies-query {"taxonomy":"post_tag","numberOfTerms":20,"displayType":"cloud","hideEmpty":true,"orderBy":"count","order":"desc"} -->
<div class="wp-block-phenix-taxonomies-query px-tax-query-block">
  <div class="tax-term-cloud">
    <!-- Query terms will be rendered here dynamically -->
    <a href="/tag/wordpress" class="tax-term-item" style="font-size:1.8em">
      <span class="term-name">WordPress</span>
    </a>
    <a href="/tag/design" class="tax-term-item" style="font-size:1.5em">
      <span class="term-name">Design</span>
    </a>
    <a href="/tag/development" class="tax-term-item" style="font-size:1.4em">
      <span class="term-name">Development</span>
    </a>
    <a href="/tag/marketing" class="tax-term-item" style="font-size:1.2em">
      <span class="term-name">Marketing</span>
    </a>
    <a href="/tag/seo" class="tax-term-item" style="font-size:1.1em">
      <span class="term-name">SEO</span>
    </a>
    <!-- Additional terms would be rendered here -->
  </div>
</div>
<!-- /wp:phenix/taxonomies-query -->
```

### Hierarchical Category List

A hierarchical list of categories with descriptions:

```html
<!-- wp:phenix/taxonomies-query {"taxonomy":"category","displayType":"list","hierarchical":true,"showDescription":true,"showCount":true} -->
<div class="wp-block-phenix-taxonomies-query px-tax-query-block">
  <ul class="tax-term-list hierarchical-list">
    <!-- Query terms will be rendered here dynamically -->
    <li class="tax-term-item parent-term">
      <a href="/category/technology" class="term-link">
        <span class="term-name">Technology</span>
        <span class="term-count">(42)</span>
      </a>
      <div class="term-description">Latest technology news and updates.</div>
      <ul class="child-terms">
        <li class="tax-term-item child-term">
          <a href="/category/technology/gadgets" class="term-link">
            <span class="term-name">Gadgets</span>
            <span class="term-count">(18)</span>
          </a>
          <div class="term-description">Reviews and news about the latest gadgets.</div>
        </li>
        <li class="tax-term-item child-term">
          <a href="/category/technology/software" class="term-link">
            <span class="term-name">Software</span>
            <span class="term-count">(15)</span>
          </a>
          <div class="term-description">Software reviews and tutorials.</div>
        </li>
      </ul>
    </li>
    <!-- Additional terms would be rendered here -->
  </ul>
</div>
<!-- /wp:phenix/taxonomies-query -->
```

### Styled Product Categories

A grid of product categories with custom styling:

```html
<!-- wp:phenix/taxonomies-query {"taxonomy":"product_cat","numberOfTerms":4,"displayType":"grid","columns":2,"termBackground":"#f8f9fa","termColor":"#333333","termBorderRadius":"md","termPadding":"md"} -->
<div class="wp-block-phenix-taxonomies-query px-tax-query-block">
  <div class="px-row row-md">
    <!-- Query terms will be rendered here dynamically -->
    <div class="px-col col-12 col-md-6 mb-20">
      <a href="/product-category/clothing" class="tax-term-item pdy-15 pdx-15 bg-color radius-md" style="--bg-color:#f8f9fa;--text-color:#333333">
        <div class="term-thumbnail mb-10">
          <img src="https://example.com/clothing-category.jpg" alt="Clothing" class="img-fluid">
        </div>
        <h3 class="term-name mb-5">Clothing</h3>
        <div class="term-description">Shop our latest clothing collection.</div>
      </a>
    </div>
    <div class="px-col col-12 col-md-6 mb-20">
      <a href="/product-category/accessories" class="tax-term-item pdy-15 pdx-15 bg-color radius-md" style="--bg-color:#f8f9fa;--text-color:#333333">
        <div class="term-thumbnail mb-10">
          <img src="https://example.com/accessories-category.jpg" alt="Accessories" class="img-fluid">
        </div>
        <h3 class="term-name mb-5">Accessories</h3>
        <div class="term-description">Complete your look with our accessories.</div>
      </a>
    </div>
    <!-- Additional terms would be rendered here -->
  </div>
</div>
<!-- /wp:phenix/taxonomies-query -->
```

## Common Use Cases

### Category Directory

Create a comprehensive directory of blog categories:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:heading {"level":2} -->
  <h2>Blog Categories</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Browse our content by category to find the information you're looking for.</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:phenix/taxonomies-query {"taxonomy":"category","displayType":"grid","columns":3,"showCount":true,"showDescription":true,"orderBy":"name","order":"asc"} -->
  <div class="wp-block-phenix-taxonomies-query px-tax-query-block">
    <!-- Taxonomy query content would be rendered here -->
  </div>
  <!-- /wp:phenix/taxonomies-query -->
</div>
<!-- /wp:phenix/container -->
```

### Product Filter Navigation

Create a filterable navigation for product categories:

```html
<!-- wp:phenix/group {"padding":"sm","backgroundColor":"#f5f5f5","marginBottom":"md"} -->
<div class="px-group pdy-10 pdx-10 bg-color mb-15" style="--bg-color:#f5f5f5">
  <!-- wp:heading {"level":3} -->
  <h3>Shop by Category</h3>
  <!-- /wp:heading -->
  
  <!-- wp:phenix/taxonomies-query {"taxonomy":"product_cat","displayType":"list","hierarchical":true,"showCount":true} -->
  <div class="wp-block-phenix-taxonomies-query px-tax-query-block">
    <!-- Taxonomy query content would be rendered here -->
  </div>
  <!-- /wp:phenix/taxonomies-query -->
</div>
<!-- /wp:phenix/group -->

<!-- wp:phenix/dynamic-query {"contentType":"product"} -->
<div class="wp-block-phenix-dynamic-query px-query-block">
  <!-- Product query content would be rendered here -->
</div>
<!-- /wp:phenix/dynamic-query -->
```

## Best Practices

1. **Meaningful Organization**: Use taxonomy queries to create meaningful content organization that helps users navigate your site

2. **Performance Consideration**: Limit the number of terms queried, especially on sites with many taxonomy terms

3. **Visual Hierarchy**: Use styling to create a clear visual hierarchy that reflects the importance of different terms

4. **Descriptive Labels**: Include descriptive information like term counts or descriptions to provide context

5. **Responsive Design**: Ensure your taxonomy displays adapt well to different screen sizes

6. **Consistent Styling**: Maintain consistent styling for taxonomy terms across your site

7. **Hierarchical Structure**: Use hierarchical display when appropriate to show parent-child relationships

8. **Filtering Options**: Consider combining taxonomy queries with other filtering mechanisms for better user experience

## Related Blocks

- [Dynamic Query Block](./dynamic-query-block.md) - For querying and displaying posts associated with taxonomy terms
- [Container Block](./container-block.md) - For positioning taxonomy queries within layouts
- [Grid Row Block](./grid-row-block.md) - For creating custom grid layouts with taxonomy terms
- [Users Query Block](./users-query-block.md) - For querying and displaying user data

