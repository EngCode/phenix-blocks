# Tabs

## Overview

The Tabs component in the Phenix Design System provides a way to organize content into multiple panels that can be displayed one at a time. It's a space-efficient way to present related information in a compact area.

## Basic Usage

Create a basic tabs component using the `.px-tabs` class, a navigation list, and tab panels:

```html
<!-- Tabs Wrapper -->
<div class="px-tabs" data-active="0">
  <!-- Tabs Navigation -->
  <ul class="tabs-navigation reset-list flexbox">
    <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14">Tab 1</li>
    <li data-tab="tab-2" class="pdy-10 pdx-15 fs-14">Tab 2</li>
    <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14">Tab 3</li>
  </ul>
  
  <!-- Panels Group -->
  <div class="tabs-panels">
    <!-- Panel 1 -->
    <div class="tab-panel bg-white pd-20" id="tab-1">
      Content for Tab 1
    </div>
    
    <!-- Panel 2 -->
    <div class="tab-panel bg-white pd-20 hidden" id="tab-2">
      Content for Tab 2
    </div>
    
    <!-- Panel 3 -->
    <div class="tab-panel bg-white pd-20 hidden" id="tab-3">
      Content for Tab 3
    </div>
  </div>
</div>

<!-- Initialize with JavaScript -->
<script>
  Phenix('.px-tabs').tabs();
</script>
```

## Tab Navigation Styles

### Horizontal Tabs (Default)

The default tab navigation is displayed horizontally:

```html
<div class="px-tabs">
  <ul class="tabs-navigation reset-list flexbox">
    <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14">Tab 1</li>
    <li data-tab="tab-2" class="pdy-10 pdx-15 fs-14">Tab 2</li>
    <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14">Tab 3</li>
  </ul>
  
  <div class="tabs-panels">
    <!-- Tab panels here -->
  </div>
</div>
```

### Tabs with Anchor Links

You can also use anchor links for tab navigation:

```html
<div class="px-tabs">
  <ul class="tabs-navigation reset-list flexbox">
    <li class="pdy-10 pdx-15 fs-14"><a href="#tab-1">Tab 1</a></li>
    <li class="pdy-10 pdx-15 fs-14"><a href="#tab-2">Tab 2</a></li>
    <li class="pdy-10 pdx-15 fs-14"><a href="#tab-3">Tab 3</a></li>
  </ul>
  
  <div class="tabs-panels">
    <!-- Tab panels here -->
  </div>
</div>
```

### Vertical Tabs

Create vertical tabs by adjusting the flexbox direction:

```html
<div class="px-tabs flexbox">
  <ul class="tabs-navigation reset-list flexbox flex-column me-20" style="min-width: 150px;">
    <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14 mb-5">Tab 1</li>
    <li data-tab="tab-2" class="pdy-10 pdx-15 fs-14 mb-5">Tab 2</li>
    <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14 mb-5">Tab 3</li>
  </ul>
  
  <div class="tabs-panels fluid">
    <!-- Tab panels here -->
  </div>
</div>
```

### Pills Style Tabs

Style tabs as pills using border-radius and other utility classes:

```html
<div class="px-tabs">
  <ul class="tabs-navigation reset-list flexbox">
    <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14 radius-sm me-5">Tab 1</li>
    <li data-tab="tab-2" class="pdy-10 pdx-15 fs-14 radius-sm me-5">Tab 2</li>
    <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14 radius-sm me-5">Tab 3</li>
  </ul>
  
  <div class="tabs-panels">
    <!-- Tab panels here -->
  </div>
</div>
```

## Customization

### Styling Tab Navigation

Add custom styling to tab navigation using utility classes:

```html
<div class="px-tabs">
  <ul class="tabs-navigation reset-list flexbox divider-b mb-20">
    <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14 weight-medium me-15">Tab 1</li>
    <li data-tab="tab-2" class="pdy-10 pdx-15 fs-14 weight-medium me-15">Tab 2</li>
    <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14 weight-medium me-15">Tab 3</li>
  </ul>
  
  <div class="tabs-panels">
    <!-- Tab panels here -->
  </div>
</div>

<style>
  /* Active tab styling */
  .tabs-navigation .active {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }
</style>
```

### Tab Navigation with Icons

Add icons to tab navigation for better visual cues:

```html
<div class="px-tabs">
  <ul class="tabs-navigation reset-list flexbox">
    <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14">
      <i class="far fa-home me-5"></i> Home
    </li>
    <li data-tab="tab-2" class="pdy-10 pdx-15 fs-14">
      <i class="far fa-user me-5"></i> Profile
    </li>
    <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14">
      <i class="far fa-cog me-5"></i> Settings
    </li>
  </ul>
  
  <div class="tabs-panels">
    <!-- Tab panels here -->
  </div>
</div>
```

### Centered Tabs

Center the tab navigation using flexbox utilities:

```html
<div class="px-tabs">
  <ul class="tabs-navigation reset-list flexbox align-center-x mb-20">
    <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14 me-5">Tab 1</li>
    <li data-tab="tab-2" class="pdy-10 pdx-15 fs-14 me-5">Tab 2</li>
    <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14 me-5">Tab 3</li>
  </ul>
  
  <div class="tabs-panels">
    <!-- Tab panels here -->
  </div>
</div>
```

## Advanced Usage

### URL Hash Navigation

Enable URL hash navigation to allow direct linking to specific tabs:

```html
<div class="px-tabs" data-hash="true">
  <ul class="tabs-navigation reset-list flexbox">
    <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14">Tab 1</li>
    <li data-tab="tab-2" class="pdy-10 pdx-15 fs-14">Tab 2</li>
    <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14">Tab 3</li>
  </ul>
  
  <div class="tabs-panels">
    <!-- Tab panels here -->
  </div>
</div>

<script>
  Phenix('.px-tabs').tabs({
    hash_url: true
  });
</script>
```

### Tabs with Custom Display Property

Specify a custom display property for tab panels:

```html
<div class="px-tabs">
  <ul class="tabs-navigation reset-list flexbox">
    <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14">Tab 1</li>
    <li data-tab="tab-2" class="pdy-10 pdx-15 fs-14">Tab 2</li>
    <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14">Tab 3</li>
  </ul>
  
  <div class="tabs-panels">
    <div class="tab-panel bg-white pd-20" id="tab-1">
      Content for Tab 1
    </div>
    
    <div class="tab-panel bg-white pd-20 hidden" id="tab-2" data-display="flex">
      <div class="me-15">Flex Item 1</div>
      <div>Flex Item 2</div>
    </div>
    
    <div class="tab-panel bg-white pd-20 hidden" id="tab-3">
      Content for Tab 3
    </div>
  </div>
</div>
```

### Tabs with Dynamic Content

Load content dynamically when a tab is activated:

```html
<div class="px-tabs" id="dynamic-tabs">
  <ul class="tabs-navigation reset-list flexbox">
    <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14">Tab 1</li>
    <li data-tab="tab-2" class="pdy-10 pdx-15 fs-14">Tab 2</li>
    <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14">Tab 3</li>
  </ul>
  
  <div class="tabs-panels">
    <div class="tab-panel bg-white pd-20" id="tab-1">
      Content for Tab 1
    </div>
    
    <div class="tab-panel bg-white pd-20 hidden" id="tab-2">
      <div class="loading-indicator">Loading...</div>
    </div>
    
    <div class="tab-panel bg-white pd-20 hidden" id="tab-3">
      Content for Tab 3
    </div>
  </div>
</div>

<script>
  // Initialize tabs
  Phenix('#dynamic-tabs').tabs();
  
  // Load content when tab is shown
  Phenix('#tab-2').on('tab-showed', event => {
    // Simulate loading content
    setTimeout(() => {
      Phenix('#tab-2').html('<div>Dynamically loaded content</div>');
    }, 1000);
  });
</script>
```

## JavaScript API

The Tabs component can be initialized and customized through JavaScript:

```javascript
Phenix('.px-tabs').tabs({
  active: 0,                    // Show tab # on initial load (0-based index)
  navigation: '.tabs-navigation', // Navigation selector
  hash_url: false               // Enable URL hash navigation
});
```

## Options Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `active` | Number | 0 | Index of the tab to show on initial load (0-based) |
| `navigation` | String | '.tabs-navigation' | Selector for the navigation element |
| `hash_url` | Boolean | false | Enable URL hash navigation |

## Data Attributes

All options can also be set using data attributes:

| Attribute | Description |
|-----------|-------------|
| `data-active` | Index of the tab to show on initial load (0-based) |
| `data-navigation` | Selector for the navigation element |
| `data-hash` | Enable URL hash navigation |

## Events

The Tabs component fires events that you can listen for:

```javascript
// Do something when a tab panel is shown
Phenix('#tab-1').on('tab-showed', event => {
  console.log('Tab panel is now visible');
});

// Do something when a tab panel is hidden
Phenix('#tab-1').on('tab-hidden', event => {
  console.log('Tab panel is now hidden');
});
```

## Accessibility

For better accessibility, consider adding appropriate ARIA attributes:

```html
<div class="px-tabs" role="tablist">
  <ul class="tabs-navigation reset-list flexbox">
    <li data-tab="tab-1" class="pdy-10 pdx-15 fs-14" role="tab" aria-controls="tab-1" aria-selected="true">Tab 1</li>
    <li data-tab="tab-2" class="pdy-10 pdx-15 fs-14" role="tab" aria-controls="tab-2" aria-selected="false">Tab 2</li>
    <li data-tab="tab-3" class="pdy-10 pdx-15 fs-14" role="tab" aria-controls="tab-3" aria-selected="false">Tab 3</li>
  </ul>
  
  <div class="tabs-panels">
    <div class="tab-panel bg-white pd-20" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
      Content for Tab 1
    </div>
    
    <div class="tab-panel bg-white pd-20 hidden" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
      Content for Tab 2
    </div>
    
    <div class="tab-panel bg-white pd-20 hidden" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
      Content for Tab 3
    </div>
  </div>
</div>

<script>
  // Initialize tabs
  Phenix('.px-tabs').tabs();
  
  // Update ARIA attributes when tabs change
  Phenix('.tab-panel').on('tab-showed', function(event) {
    // Update aria-selected for tab buttons
    const tabId = event.target.id;
    Phenix(`[data-tab="${tabId}"], [href="#${tabId}"]`).attr('aria-selected', 'true')
      .siblings().attr('aria-selected', 'false');
  });
</script>
```

## Best Practices

1. **Use clear labels** for tab navigation that indicate the content
2. **Keep tab content focused** on a single topic
3. **Maintain consistent styling** across all tabs
4. **Consider mobile users** when designing tab navigation
5. **Use URL hash navigation** for shareable links to specific tabs
6. **Add proper accessibility attributes** for screen readers
