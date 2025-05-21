# Collapse

## Overview

The Collapse component in the Phenix Design System provides a simple way to toggle the visibility of content with smooth sliding animations. It's commonly used for creating expandable/collapsible sections, accordions, and other interactive UI elements.

The `collapse()` method allows you to create collapsible elements with various options for targeting, grouping, and related elements.

## Basic Usage

To create a collapsible element, you need a trigger button and a target element. The button will toggle the visibility of the target when clicked.

### HTML

```html
<!-- Collapse Trigger Button -->
<button class="btn primary collapse-trigger" data-target="#collapseExample">
    Toggle Content <i class="fas fa-angle-down"></i>
</button>

<!-- Collapse Content -->
<div id="collapseExample" class="pdy-15 pdx-25 bg-alpha-05 radius-sm mt-10" style="display: none;">
    <p class="mb-0">This is the collapsible content that will be shown or hidden when the button is clicked.</p>
</div>
```

### JavaScript

```javascript
//====> Basic Initialization <====//
Phenix('.collapse-trigger').collapse();
```

## Options

The `collapse()` method accepts an options object with the following properties:

### JavaScript

```javascript
//====> Custom Options <====//
Phenix('.collapse-trigger').collapse({
    target: '#collapseExample',  // Target element selector
    related: false,              // Whether the target is related to the button in the DOM
    parent: '.accordion-group'   // Parent accordion group selector (for accordion behavior)
});
```

## Data Attributes

You can also configure the collapse behavior using data attributes on the trigger button:

### HTML

```html
<!-- Collapse Trigger with Data Attributes -->
<button class="btn primary collapse-trigger" 
        data-target="#collapseExample" 
        data-related="false" 
        data-parent="#accordionGroup">
    Toggle Content <i class="fas fa-angle-down"></i>
</button>
```

## Events

The Collapse component fires custom events that you can listen for:

### JavaScript

```javascript
//====> Event Listeners <====//
const collapseButton = document.querySelector('.collapse-trigger');
const collapseContent = document.querySelector('#collapseExample');

// Listen for when content is shown
collapseButton.addEventListener('collapse-showed', () => {
    console.log('Content is now visible');
});

// Listen for when content is hidden
collapseButton.addEventListener('collapse-hidden', () => {
    console.log('Content is now hidden');
});

// You can also listen for events on the content element
collapseContent.addEventListener('collapse-showed', () => {
    console.log('Content element is now visible');
});
```

## Icon Toggling

The Collapse component automatically handles toggling icons when the collapse state changes. It supports common icon patterns like plus/minus and up/down arrows:

### HTML

```html
<!-- Plus/Minus Icon Toggle -->
<button class="btn primary collapse-trigger" data-target="#collapseExample1">
    Toggle Content <i class="fas fa-plus"></i>
</button>

<!-- Up/Down Arrow Icon Toggle -->
<button class="btn primary collapse-trigger" data-target="#collapseExample2">
    Toggle Content <i class="fas fa-angle-down"></i>
</button>
```

When the button is clicked, the component will automatically:
- Change `fa-plus` to `fa-minus` when content is shown
- Change `fa-minus` to `fa-plus` when content is hidden
- Change `fa-angle-down` to `fa-angle-up` when content is shown
- Change `fa-angle-up` to `fa-angle-down` when content is hidden

## Accordion Example

You can create an accordion by grouping multiple collapse elements under a parent container:

### HTML

```html
<!-- Accordion Group -->
<div id="accordionGroup">
    <!-- Accordion Item 1 -->
    <div class="accordion-item mb-10">
        <button class="btn fluid tx-align-start collapse-trigger" 
                data-target="#accordionItem1" 
                data-parent="#accordionGroup">
            Accordion Item 1 <i class="fas fa-angle-down ms-auto"></i>
        </button>
        <div id="accordionItem1" class="pdy-15 pdx-25 bg-alpha-05 radius-sm" style="display: none;">
            <p class="mb-0">Content for accordion item 1.</p>
        </div>
    </div>
    
    <!-- Accordion Item 2 -->
    <div class="accordion-item mb-10">
        <button class="btn fluid tx-align-start collapse-trigger" 
                data-target="#accordionItem2" 
                data-parent="#accordionGroup">
            Accordion Item 2 <i class="fas fa-angle-down ms-auto"></i>
        </button>
        <div id="accordionItem2" class="pdy-15 pdx-25 bg-alpha-05 radius-sm" style="display: none;">
            <p class="mb-0">Content for accordion item 2.</p>
        </div>
    </div>
    
    <!-- Accordion Item 3 -->
    <div class="accordion-item">
        <button class="btn fluid tx-align-start collapse-trigger" 
                data-target="#accordionItem3" 
                data-parent="#accordionGroup">
            Accordion Item 3 <i class="fas fa-angle-down ms-auto"></i>
        </button>
        <div id="accordionItem3" class="pdy-15 pdx-25 bg-alpha-05 radius-sm" style="display: none;">
            <p class="mb-0">Content for accordion item 3.</p>
        </div>
    </div>
</div>
```

### JavaScript

```javascript
//====> Initialize Accordion <====//
Phenix('.collapse-trigger').collapse({
    parent: '#accordionGroup'
});
```

In an accordion, only one item can be open at a time. When you click on an item, any previously open item will automatically close.

## Related Content Example

You can use the `related` option when the target content is a sibling of the trigger button:

### HTML

```html
<!-- Parent Container -->
<div class="collapse-container">
    <!-- Trigger Button -->
    <button class="btn primary collapse-trigger" data-related="true" data-target=".collapse-content">
        Toggle Related Content <i class="fas fa-angle-down"></i>
    </button>
    
    <!-- Related Content (Sibling of the Button) -->
    <div class="collapse-content pdy-15 pdx-25 bg-alpha-05 radius-sm mt-10" style="display: none;">
        <p class="mb-0">This content is a sibling of the trigger button.</p>
    </div>
</div>
```

### JavaScript

```javascript
//====> Initialize with Related Content <====//
Phenix('.collapse-trigger').collapse({
    related: true,
    target: '.collapse-content'
});
```

## Options Reference

<figure>

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `target` | string | `null` | Selector for the target element to collapse/expand |
| `related` | boolean | `false` | Whether the target is related to the button in the DOM tree |
| `parent` | string | `null` | Selector for the accordion parent container |

<figcaption>
Collapse Component Options
</figcaption>

</figure>

## Data Attributes Reference

<figure>

| Attribute | Description |
|-----------|-------------|
| `data-target` | Selector for the target element to collapse/expand |
| `data-related` | Whether the target is related to the button in the DOM tree |
| `data-parent` | Selector for the accordion parent container |
| `data-trigger-icon-normal` | Icon class for the normal state (automatically detected) |
| `data-trigger-icon` | Icon class for the active state (automatically detected) |

<figcaption>
Collapse Component Data Attributes
</figcaption>

</figure>

## Events Reference

<figure>

| Event | Description |
|-------|-------------|
| `collapse-showed` | Fired when the collapse content is shown |
| `collapse-hidden` | Fired when the collapse content is hidden |

<figcaption>
Collapse Component Events
</figcaption>

</figure>

## CSS Classes Reference

<figure>

| Class | Description |
|-------|-------------|
| `px-collapse-active` | Applied to the trigger button and target when content is shown |
| `pxjs-done` | Applied to the trigger button after initialization |

<figcaption>
Collapse Component CSS Classes
</figcaption>

</figure>

## Accessibility

The Collapse component automatically adds accessibility attributes to the trigger button:

- `role="button"` - Indicates that the element is a button
- `tabIndex="0"` - Makes the button focusable with keyboard navigation

## Best Practices

1. **Clear Indicators**: Use icons or other visual cues to indicate that an element is expandable
2. **Smooth Animations**: The component uses smooth sliding animations for a better user experience
3. **Keyboard Accessibility**: Ensure that users can navigate and activate collapse elements using the keyboard
4. **Meaningful Content**: Use collapse for content that is secondary or supplementary to the main content
5. **Consistent Styling**: Maintain consistent styling for collapse triggers and content across your application
