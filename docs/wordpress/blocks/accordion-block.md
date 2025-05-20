# Accordion Block

## Overview

The Accordion Block is a collapsible content component in the Phenix Design System that allows you to organize information into expandable and collapsible sections. This block is particularly useful for presenting large amounts of information in a compact, user-friendly format, making it ideal for FAQs, product details, and other content that benefits from progressive disclosure.

![Accordion Block](../../../assets/images/wordpress/accordion-block.png)

## Key Features

- Create multiple collapsible sections with custom titles and content
- Various accordion styles (default, boxed, bordered, minimal)
- Options to expand/collapse all sections at once
- Customizable icons for expand/collapse indicators
- Ability to set default open/closed state for each section
- Smooth animation effects for expanding and collapsing
- Responsive design that adapts to different screen sizes
- Accessibility features for keyboard navigation and screen readers

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Accordion" or find it in the "Phenix Blocks" category
3. Add the Accordion Block to your page
4. Use the "Add Item" button to create multiple accordion sections
5. Add a title for each section and populate its content with any blocks
6. Customize the accordion appearance in the block sidebar

## Block Settings

### General Options

| Option | Description |
|--------|-------------|
| Accordion Style | Choose between default, boxed, bordered, or minimal styles |
| Allow Multiple Open | Enable/disable opening multiple sections simultaneously |
| Default Open | Set which sections should be open by default |
| Toggle All | Add a button to expand/collapse all sections at once |
| Collapsible Headings | Choose which heading level to use for section titles (h2-h6) |

### Icon Options

| Option | Description |
|--------|-------------|
| Icon Position | Set icon position (left, right) |
| Expand Icon | Select the icon to indicate expandable sections |
| Collapse Icon | Select the icon to indicate collapsible sections |
| Icon Size | Adjust the size of the indicator icons |
| Icon Color | Set the color of the indicator icons |

### Style Options

| Option | Description |
|--------|-------------|
| Title Color | Set the color of section titles |
| Active Title Color | Set the color of active section titles |
| Title Background | Set the background color of section titles |
| Active Title Background | Set the background color of active section titles |
| Content Background | Set the background color of the content area |
| Border Color | Set the color of borders around sections |
| Border Width | Adjust the width of borders |
| Border Radius | Add rounded corners to accordion sections |
| Padding | Add internal spacing within sections |
| Margin | Add spacing between accordion sections |

### Animation Options

| Option | Description |
|--------|-------------|
| Animation Speed | Control the speed of expand/collapse animations |
| Animation Easing | Select the easing function for animations |
| Scroll to Active | Automatically scroll to active sections when expanded |

## Examples

### Basic Accordion

A simple accordion with default styling:

```html
<!-- wp:phenix/accordion -->
<div class="wp-block-phenix-accordion px-accordion-block">
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button" aria-expanded="true">
        <span class="button-text">Section 1 Title</span>
        <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
      </button>
    </h3>
    <div class="accordion-collapse show">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>Content for the first accordion section goes here. You can add any blocks inside accordion content.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" aria-expanded="false">
        <span class="button-text">Section 2 Title</span>
        <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
      </button>
    </h3>
    <div class="accordion-collapse">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>Content for the second accordion section goes here. Each section can have different content.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" aria-expanded="false">
        <span class="button-text">Section 3 Title</span>
        <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
      </button>
    </h3>
    <div class="accordion-collapse">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>Content for the third accordion section goes here. Accordions help organize related content.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
</div>
<!-- /wp:phenix/accordion -->
```

### Styled Boxed Accordion

A boxed accordion with custom styling:

```html
<!-- wp:phenix/accordion {"accordionStyle":"boxed","titleColor":"#333333","activeTitleColor":"#ffffff","titleBackground":"#f5f5f5","activeTitleBackground":"#0073aa","contentBackground":"#ffffff","borderColor":"#dddddd","borderWidth":"1px","borderRadius":"sm","padding":"md"} -->
<div class="wp-block-phenix-accordion px-accordion-block boxed-accordion pdy-15 pdx-15 radius-sm" style="--border-width:1px;--border-color:#dddddd;--title-color:#333333;--active-title-color:#ffffff;--title-bg:#f5f5f5;--active-title-bg:#0073aa;--content-bg:#ffffff">
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button" aria-expanded="true">
        <span class="button-text">What is the Phenix Design System?</span>
        <span class="icon-wrapper"><i class="fas fa-plus"></i></span>
      </button>
    </h3>
    <div class="accordion-collapse show">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>The Phenix Design System is a comprehensive UI toolkit for WordPress that provides a collection of blocks and components for building modern, responsive websites without writing code.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" aria-expanded="false">
        <span class="button-text">How do I install the Phenix Blocks plugin?</span>
        <span class="icon-wrapper"><i class="fas fa-plus"></i></span>
      </button>
    </h3>
    <div class="accordion-collapse">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>You can install the Phenix Blocks plugin directly from the WordPress plugin repository, or by uploading the plugin ZIP file through your WordPress admin dashboard.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" aria-expanded="false">
        <span class="button-text">Is the Phenix Design System compatible with my theme?</span>
        <span class="icon-wrapper"><i class="fas fa-plus"></i></span>
      </button>
    </h3>
    <div class="accordion-collapse">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>The Phenix Design System is designed to work with any WordPress theme, but works best with the Phenix Starter Theme or other block-based themes that fully support the WordPress block editor.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
</div>
<!-- /wp:phenix/accordion -->
```

### Bordered Accordion with Custom Icons

A bordered accordion with custom expand/collapse icons:

```html
<!-- wp:phenix/accordion {"accordionStyle":"bordered","iconPosition":"left","expandIcon":"fas fa-angle-right","collapseIcon":"fas fa-angle-down","iconColor":"#0073aa","titleColor":"#333333","activeTitleColor":"#0073aa","borderColor":"#dddddd","borderWidth":"1px"} -->
<div class="wp-block-phenix-accordion px-accordion-block bordered-accordion icon-left" style="--border-width:1px;--border-color:#dddddd;--title-color:#333333;--active-title-color:#0073aa;--icon-color:#0073aa">
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button" aria-expanded="true">
        <span class="icon-wrapper"><i class="fas fa-angle-down"></i></span>
        <span class="button-text">Getting Started</span>
      </button>
    </h3>
    <div class="accordion-collapse show">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>Information about getting started with the Phenix Design System.</p>
        <!-- /wp:paragraph -->
        
        <!-- wp:list -->
        <ul>
          <li>Installation guide</li>
          <li>Basic configuration</li>
          <li>First steps</li>
        </ul>
        <!-- /wp:list -->
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" aria-expanded="false">
        <span class="icon-wrapper"><i class="fas fa-angle-right"></i></span>
        <span class="button-text">Core Components</span>
      </button>
    </h3>
    <div class="accordion-collapse">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>Overview of the core components available in the Phenix Design System.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" aria-expanded="false">
        <span class="icon-wrapper"><i class="fas fa-angle-right"></i></span>
        <span class="button-text">Advanced Customization</span>
      </button>
    </h3>
    <div class="accordion-collapse">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>Advanced customization options for the Phenix Design System.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
</div>
<!-- /wp:phenix/accordion -->
```

### Minimal Accordion with Toggle All

A minimal accordion with a toggle all button:

```html
<!-- wp:phenix/accordion {"accordionStyle":"minimal","toggleAll":true,"allowMultipleOpen":true,"defaultOpen":[0,1]} -->
<div class="wp-block-phenix-accordion px-accordion-block minimal-accordion" data-allow-multiple="true">
  <div class="toggle-all-wrapper mb-10">
    <button class="btn sm outline toggle-all-button">Toggle All</button>
  </div>
  
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button" aria-expanded="true">
        <span class="button-text">First Section</span>
        <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
      </button>
    </h3>
    <div class="accordion-collapse show">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>Content for the first section.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button" aria-expanded="true">
        <span class="button-text">Second Section</span>
        <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
      </button>
    </h3>
    <div class="accordion-collapse show">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>Content for the second section.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button collapsed" aria-expanded="false">
        <span class="button-text">Third Section</span>
        <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
      </button>
    </h3>
    <div class="accordion-collapse">
      <div class="accordion-body">
        <!-- wp:paragraph -->
        <p>Content for the third section.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
</div>
<!-- /wp:phenix/accordion -->
```

## Common Use Cases

### FAQ Section

Create a comprehensive FAQ section with categorized questions:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:heading {"level":2} -->
  <h2>Frequently Asked Questions</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Find answers to the most common questions about our products and services.</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:phenix/accordion {"accordionStyle":"boxed","borderRadius":"sm"} -->
  <div class="wp-block-phenix-accordion px-accordion-block boxed-accordion radius-sm">
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button" aria-expanded="true">
          <span class="button-text">General Questions</span>
          <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
        </button>
      </h3>
      <div class="accordion-collapse show">
        <div class="accordion-body">
          <!-- Nested accordion for general questions -->
          <!-- wp:phenix/accordion {"accordionStyle":"minimal"} -->
          <div class="wp-block-phenix-accordion px-accordion-block minimal-accordion">
            <!-- Individual FAQ items -->
          </div>
          <!-- /wp:phenix/accordion -->
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" aria-expanded="false">
          <span class="button-text">Account & Billing</span>
          <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
        </button>
      </h3>
      <div class="accordion-collapse">
        <div class="accordion-body">
          <!-- Nested accordion for account questions -->
          <!-- wp:phenix/accordion {"accordionStyle":"minimal"} -->
          <div class="wp-block-phenix-accordion px-accordion-block minimal-accordion">
            <!-- Individual FAQ items -->
          </div>
          <!-- /wp:phenix/accordion -->
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" aria-expanded="false">
          <span class="button-text">Technical Support</span>
          <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
        </button>
      </h3>
      <div class="accordion-collapse">
        <div class="accordion-body">
          <!-- Nested accordion for technical questions -->
          <!-- wp:phenix/accordion {"accordionStyle":"minimal"} -->
          <div class="wp-block-phenix-accordion px-accordion-block minimal-accordion">
            <!-- Individual FAQ items -->
          </div>
          <!-- /wp:phenix/accordion -->
        </div>
      </div>
    </div>
  </div>
  <!-- /wp:phenix/accordion -->
</div>
<!-- /wp:phenix/container -->
```

### Product Specifications

Display product specifications in an organized, collapsible format:

```html
<!-- wp:phenix/group {"padding":"md","backgroundColor":"#f9f9f9","borderRadius":"md"} -->
<div class="px-group pdy-15 pdx-15 bg-color radius-md" style="--bg-color:#f9f9f9">
  <!-- wp:heading {"level":3} -->
  <h3>Product Specifications</h3>
  <!-- /wp:heading -->
  
  <!-- wp:phenix/accordion {"accordionStyle":"bordered"} -->
  <div class="wp-block-phenix-accordion px-accordion-block bordered-accordion">
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button" aria-expanded="true">
          <span class="button-text">Dimensions & Weight</span>
          <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
        </button>
      </h3>
      <div class="accordion-collapse show">
        <div class="accordion-body">
          <!-- wp:table -->
          <figure class="wp-block-table"><table><tbody><tr><td>Height</td><td>10 inches</td></tr><tr><td>Width</td><td>15 inches</td></tr><tr><td>Depth</td><td>5 inches</td></tr><tr><td>Weight</td><td>2.5 lbs</td></tr></tbody></table></figure>
          <!-- /wp:table -->
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" aria-expanded="false">
          <span class="button-text">Materials & Construction</span>
          <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
        </button>
      </h3>
      <div class="accordion-collapse">
        <div class="accordion-body">
          <!-- Materials content -->
        </div>
      </div>
    </div>
    
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button collapsed" aria-expanded="false">
          <span class="button-text">Technical Specifications</span>
          <span class="icon-wrapper"><i class="fas fa-chevron-down"></i></span>
        </button>
      </h3>
      <div class="accordion-collapse">
        <div class="accordion-body">
          <!-- Technical specs content -->
        </div>
      </div>
    </div>
  </div>
  <!-- /wp:phenix/accordion -->
</div>
<!-- /wp:phenix/group -->
```

## Best Practices

1. **Clear Headers**: Use concise, descriptive headers that clearly indicate the content of each section

2. **Progressive Disclosure**: Use accordions to progressively disclose information, showing the most important content first

3. **Logical Grouping**: Group related content together in sections that make logical sense

4. **Reasonable Length**: Keep the content within each accordion section reasonably sized; if a section becomes too long, consider breaking it into multiple sections

5. **Default States**: Consider which sections should be open by default based on user needs and content priority

6. **Visual Hierarchy**: Use styling to clearly indicate which sections are expandable and which are currently open

7. **Accessibility**: Ensure accordions are keyboard navigable and work with screen readers

8. **Consistent Behavior**: Maintain consistent behavior across all accordion instances on your site

## Related Blocks

- [Tabs Block](./tabs-block.md) - An alternative to accordions for organizing content into separate views
- [Group Block](./group-block.md) - For organizing content within individual accordion sections
- [Container Block](./container-block.md) - For positioning accordions within layouts
- [Popup Modals Block](./popup-modals-block.md) - For content that requires more screen space than accordions
