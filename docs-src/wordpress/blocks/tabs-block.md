# Tabs Block

## Overview

The Tabs Block is a versatile component in the Phenix Design System that allows you to organize content into tabbed sections, making it easier for users to navigate between related information without scrolling. This block is particularly useful for presenting multiple categories of content in a compact, user-friendly interface, saving space while improving content organization and user experience.

<!-- Image placeholder for Tabs Block -->

## Key Features

- Create multiple tabs with custom titles and content
- Various tab styles (horizontal, vertical, pills, buttons)
- Customizable colors and styling for active and inactive tabs
- Responsive design that adapts to different screen sizes
- Animation options for tab transitions
- Deep linking support for direct access to specific tabs
- Accessibility features for keyboard navigation and screen readers

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Tabs" or find it in the "Phenix Blocks" category
3. Add the Tabs Block to your page
4. Use the "Add Tab" button to create multiple tabs
5. Add a title for each tab and populate its content with any blocks
6. Customize the tabs appearance in the block sidebar

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| Add Tab | Add a new tab section |
| Move Up/Down | Reorder tab sections |
| Tab Style | Quick toggle between horizontal, vertical, pills, or button styles |
| Tab Alignment | Quickly set the alignment of tab titles (left, center, right) |
| Duplicate | Duplicate a tab section |
| Remove | Remove a tab section |

### Sidebar Controls

#### General Options Panel

| Control | Description |
|---------|-------------|
| Tab Style | Choose between horizontal, vertical, pills, or button tabs |
| Default Active | Set which tab should be active by default |
| Allow All Closed | Enable/disable the option to close all tabs |
| Tab Alignment | Set the alignment of tab titles (left, center, right) |
| Enable Animation | Add transition animations when switching tabs |
| Animation Type | Select the type of animation (fade, slide, etc.) |

#### Style Options Panel

| Control | Description |
|---------|-------------|
| Tab Color | Set the color of inactive tab titles |
| Active Tab Color | Set the color of the active tab title |
| Tab Background | Set the background color of inactive tabs |
| Active Tab Background | Set the background color of the active tab |
| Content Background | Set the background color of the tab content area |
| Border Color | Set the color of borders around tabs and content |
| Border Width | Adjust the width of borders |
| Border Radius | Add rounded corners to tabs and content |
| Padding | Add internal spacing within tabs and content |
| Margin | Add external spacing around the tabs block |

#### Responsive Options Panel

| Control | Description |
|---------|-------------|
| Mobile Layout | Control how tabs display on mobile devices |
| Stack on Mobile | Convert horizontal tabs to vertical on small screens |
| Accordion on Mobile | Convert tabs to accordion style on small screens |
| Scrollable on Mobile | Make horizontal tabs scrollable on small screens |

## Examples

### Basic Horizontal Tabs

A simple horizontal tabs layout with default styling:

```html
<!-- wp:phenix/tabs {"tabStyle":"horizontal"} -->
<div class="wp-block-phenix-tabs px-tabs-block horizontal-tabs">
  <div class="tabs-nav">
    <ul class="reset-list flexbox">
      <li class="tab-title active" data-tab="tab-1">Tab 1</li>
      <li class="tab-title" data-tab="tab-2">Tab 2</li>
      <li class="tab-title" data-tab="tab-3">Tab 3</li>
    </ul>
  </div>
  <div class="tabs-content">
    <div id="tab-1" class="tab-panel active">
      <!-- wp:paragraph -->
      <p>Content for the first tab goes here. You can add any blocks inside tab content.</p>
      <!-- /wp:paragraph -->
    </div>
    <div id="tab-2" class="tab-panel">
      <!-- wp:paragraph -->
      <p>Content for the second tab goes here. Each tab can have different content.</p>
      <!-- /wp:paragraph -->
    </div>
    <div id="tab-3" class="tab-panel">
      <!-- wp:paragraph -->
      <p>Content for the third tab goes here. Tabs help organize related content.</p>
      <!-- /wp:paragraph -->
    </div>
  </div>
</div>
<!-- /wp:phenix/tabs -->
```

### Styled Vertical Tabs

Vertical tabs with custom styling:

```html
<!-- wp:phenix/tabs {"tabStyle":"vertical","activeTabColor":"#0073aa","activeTabBackground":"#f0f8ff","tabColor":"#666666","tabBackground":"#f5f5f5","contentBackground":"#ffffff","borderColor":"#dddddd","borderWidth":"1px","borderRadius":"sm","padding":"md"} -->
<div class="wp-block-phenix-tabs px-tabs-block vertical-tabs pdy-15 pdx-15 radius-sm" style="--border-width:1px;--border-color:#dddddd;--tab-color:#666666;--active-tab-color:#0073aa;--tab-bg:#f5f5f5;--active-tab-bg:#f0f8ff;--content-bg:#ffffff">
  <div class="tabs-container flexbox">
    <div class="tabs-nav">
      <ul class="reset-list">
        <li class="tab-title active" data-tab="tab-1">Product Features</li>
        <li class="tab-title" data-tab="tab-2">Specifications</li>
        <li class="tab-title" data-tab="tab-3">Reviews</li>
        <li class="tab-title" data-tab="tab-4">FAQs</li>
      </ul>
    </div>
    <div class="tabs-content">
      <div id="tab-1" class="tab-panel active">
        <!-- wp:heading {"level":3} -->
        <h3>Product Features</h3>
        <!-- /wp:heading -->
        
        <!-- wp:list -->
        <ul>
          <li>Feature one with detailed description</li>
          <li>Feature two with detailed description</li>
          <li>Feature three with detailed description</li>
        </ul>
        <!-- /wp:list -->
      </div>
      <div id="tab-2" class="tab-panel">
        <!-- wp:heading {"level":3} -->
        <h3>Specifications</h3>
        <!-- /wp:heading -->
        
        <!-- wp:table -->
        <figure class="wp-block-table"><table><tbody><tr><td>Dimension</td><td>10" x 5" x 2"</td></tr><tr><td>Weight</td><td>1.5 lbs</td></tr><tr><td>Material</td><td>Aluminum</td></tr></tbody></table></figure>
        <!-- /wp:table -->
      </div>
      <div id="tab-3" class="tab-panel">
        <!-- wp:heading {"level":3} -->
        <h3>Customer Reviews</h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p>Reviews content goes here.</p>
        <!-- /wp:paragraph -->
      </div>
      <div id="tab-4" class="tab-panel">
        <!-- wp:heading {"level":3} -->
        <h3>Frequently Asked Questions</h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p>FAQs content goes here.</p>
        <!-- /wp:paragraph -->
      </div>
    </div>
  </div>
</div>
<!-- /wp:phenix/tabs -->
```

### Pills Style Tabs

Tabs with a pills design for a modern look:

```html
<!-- wp:phenix/tabs {"tabStyle":"pills","tabAlignment":"center","activeTabColor":"#ffffff","activeTabBackground":"#0073aa","tabColor":"#333333","tabBackground":"#f0f0f0","borderRadius":"pill","padding":"sm"} -->
<div class="wp-block-phenix-tabs px-tabs-block pills-tabs pdy-10 pdx-10 radius-pill" style="--tab-color:#333333;--active-tab-color:#ffffff;--tab-bg:#f0f0f0;--active-tab-bg:#0073aa">
  <div class="tabs-nav">
    <ul class="reset-list flexbox justify-center">
      <li class="tab-title active" data-tab="tab-1">Overview</li>
      <li class="tab-title" data-tab="tab-2">Features</li>
      <li class="tab-title" data-tab="tab-3">Pricing</li>
      <li class="tab-title" data-tab="tab-4">Support</li>
    </ul>
  </div>
  <div class="tabs-content mt-20">
    <div id="tab-1" class="tab-panel active">
      <!-- wp:paragraph -->
      <p>Overview content goes here.</p>
      <!-- /wp:paragraph -->
    </div>
    <div id="tab-2" class="tab-panel">
      <!-- wp:paragraph -->
      <p>Features content goes here.</p>
      <!-- /wp:paragraph -->
    </div>
    <div id="tab-3" class="tab-panel">
      <!-- wp:paragraph -->
      <p>Pricing content goes here.</p>
      <!-- /wp:paragraph -->
    </div>
    <div id="tab-4" class="tab-panel">
      <!-- wp:paragraph -->
      <p>Support content goes here.</p>
      <!-- /wp:paragraph -->
    </div>
  </div>
</div>
<!-- /wp:phenix/tabs -->
```

### Button Style Tabs with Icons

Tabs styled as buttons with icons:

```html
<!-- wp:phenix/tabs {"tabStyle":"buttons","enableAnimation":true,"animationType":"fade","activeTabColor":"#ffffff","activeTabBackground":"#333333","tabColor":"#333333","tabBackground":"transparent","borderColor":"#333333","borderWidth":"1px","borderRadius":"sm","padding":"sm"} -->
<div class="wp-block-phenix-tabs px-tabs-block buttons-tabs pdy-10 pdx-10 radius-sm animation-fade" style="--border-width:1px;--border-color:#333333;--tab-color:#333333;--active-tab-color:#ffffff;--tab-bg:transparent;--active-tab-bg:#333333">
  <div class="tabs-nav">
    <ul class="reset-list flexbox gap-10">
      <li class="tab-title active" data-tab="tab-1"><i class="fas fa-home mr-5"></i> Home</li>
      <li class="tab-title" data-tab="tab-2"><i class="fas fa-user mr-5"></i> Profile</li>
      <li class="tab-title" data-tab="tab-3"><i class="fas fa-cog mr-5"></i> Settings</li>
      <li class="tab-title" data-tab="tab-4"><i class="fas fa-question-circle mr-5"></i> Help</li>
    </ul>
  </div>
  <div class="tabs-content mt-20">
    <div id="tab-1" class="tab-panel active">
      <!-- wp:paragraph -->
      <p>Home tab content goes here.</p>
      <!-- /wp:paragraph -->
    </div>
    <div id="tab-2" class="tab-panel">
      <!-- wp:paragraph -->
      <p>Profile tab content goes here.</p>
      <!-- /wp:paragraph -->
    </div>
    <div id="tab-3" class="tab-panel">
      <!-- wp:paragraph -->
      <p>Settings tab content goes here.</p>
      <!-- /wp:paragraph -->
    </div>
    <div id="tab-4" class="tab-panel">
      <!-- wp:paragraph -->
      <p>Help tab content goes here.</p>
      <!-- /wp:paragraph -->
    </div>
  </div>
</div>
<!-- /wp:phenix/tabs -->
```

## Common Use Cases

### Product Information Tabs

Organize product details into tabbed sections:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:heading {"level":1} -->
  <h1>Product Name</h1>
  <!-- /wp:heading -->
  
  <!-- wp:phenix/tabs {"tabStyle":"horizontal"} -->
  <div class="wp-block-phenix-tabs px-tabs-block horizontal-tabs">
    <div class="tabs-nav">
      <ul class="reset-list flexbox">
        <li class="tab-title active" data-tab="tab-1">Description</li>
        <li class="tab-title" data-tab="tab-2">Specifications</li>
        <li class="tab-title" data-tab="tab-3">Reviews</li>
        <li class="tab-title" data-tab="tab-4">Shipping</li>
      </ul>
    </div>
    <div class="tabs-content">
      <div id="tab-1" class="tab-panel active">
        <!-- Product description content -->
      </div>
      <div id="tab-2" class="tab-panel">
        <!-- Product specifications content -->
      </div>
      <div id="tab-3" class="tab-panel">
        <!-- Product reviews content -->
      </div>
      <div id="tab-4" class="tab-panel">
        <!-- Shipping information content -->
      </div>
    </div>
  </div>
  <!-- /wp:phenix/tabs -->
</div>
<!-- /wp:phenix/container -->
```

### FAQ Accordion Tabs

Create an FAQ section with tabs that convert to accordion on mobile:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:heading {"level":2} -->
  <h2>Frequently Asked Questions</h2>
  <!-- /wp:heading -->
  
  <!-- wp:phenix/tabs {"tabStyle":"vertical","mobileLayout":"accordion"} -->
  <div class="wp-block-phenix-tabs px-tabs-block vertical-tabs mobile-accordion">
    <div class="tabs-container flexbox">
      <div class="tabs-nav">
        <ul class="reset-list">
          <li class="tab-title active" data-tab="tab-1">General Questions</li>
          <li class="tab-title" data-tab="tab-2">Account Questions</li>
          <li class="tab-title" data-tab="tab-3">Billing Questions</li>
          <li class="tab-title" data-tab="tab-4">Technical Support</li>
        </ul>
      </div>
      <div class="tabs-content">
        <div id="tab-1" class="tab-panel active">
          <!-- General FAQ content -->
        </div>
        <div id="tab-2" class="tab-panel">
          <!-- Account FAQ content -->
        </div>
        <div id="tab-3" class="tab-panel">
          <!-- Billing FAQ content -->
        </div>
        <div id="tab-4" class="tab-panel">
          <!-- Technical FAQ content -->
        </div>
      </div>
    </div>
  </div>
  <!-- /wp:phenix/tabs -->
</div>
<!-- /wp:phenix/container -->
```

## Best Practices

1. **Clear Tab Labels**: Use concise, descriptive labels for tabs that clearly indicate the content

2. **Consistent Structure**: Maintain a consistent structure across all tabs to avoid disorienting users

3. **Logical Grouping**: Group related content together in tabs that make logical sense

4. **Prioritize Important Content**: Place the most important or frequently accessed content in the first tab

5. **Mobile Consideration**: Ensure tabs are usable on mobile devices, possibly switching to a more mobile-friendly layout

6. **Visual Hierarchy**: Use styling to clearly indicate which tab is active

7. **Accessibility**: Ensure tabs are keyboard navigable and work with screen readers

8. **Load Performance**: Be mindful of the total content weight across all tabs to maintain good performance

## Related Blocks

- [Container Block](./container-block.md) - For positioning tabs within layouts
- [Group Block](./group-block.md) - For organizing content within individual tabs
- [Accordion Block](./accordion-block.md) - An alternative to tabs for vertical content organization
- [Popup Modals Block](./popup-modals-block.md) - For content that requires more screen space than tabs

