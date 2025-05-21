# Block Accessibility

Block Accessibility helpers are utilities that ensure Phenix blocks meet accessibility standards and provide a good experience for all users, including those with disabilities. These helpers make it easier to implement accessible controls, keyboard navigation, and proper ARIA attributes.

## Overview

Accessibility is a critical aspect of web development, ensuring that content is usable by people with different abilities. Block Accessibility helpers provide standardized methods for:

- Adding proper ARIA attributes to blocks
- Implementing keyboard navigation
- Ensuring proper focus management
- Providing screen reader support
- Maintaining sufficient color contrast

## Accessibility Attributes

### `getAriaAttributes`

Generates appropriate ARIA attributes based on block properties.

```javascript
/**
 * Generates appropriate ARIA attributes based on block properties
 * 
 * @param {Object} attributes - The block attributes
 * @returns {Object} - ARIA attributes object
 */
function getAriaAttributes(attributes) {
    const ariaAttrs = {};
    
    // Add role if specified
    if (attributes.role) {
        ariaAttrs['role'] = attributes.role;
    }
    
    // Add label if specified
    if (attributes.ariaLabel) {
        ariaAttrs['aria-label'] = attributes.ariaLabel;
    } else if (attributes.title) {
        // Use title as fallback for aria-label
        ariaAttrs['aria-label'] = attributes.title;
    }
    
    // Add description if specified
    if (attributes.ariaDescription) {
        ariaAttrs['aria-describedby'] = attributes.ariaDescription;
    }
    
    // Add expanded state for expandable elements
    if (attributes.isExpandable) {
        ariaAttrs['aria-expanded'] = attributes.isExpanded ? 'true' : 'false';
    }
    
    // Add hidden state
    if (attributes.isHidden) {
        ariaAttrs['aria-hidden'] = 'true';
    }
    
    return ariaAttrs;
}

// Usage in save.js
export default function save({ attributes }) {
    const ariaAttributes = PhenixBlocks.getAriaAttributes(attributes);
    
    return (
        <div {...ariaAttributes}>
            {/* Block content */}
        </div>
    );
}
```

### `getFocusableElements`

Returns all focusable elements within a container.

```javascript
/**
 * Returns all focusable elements within a container
 * 
 * @param {HTMLElement} container - The container element
 * @returns {Array} - Array of focusable elements
 */
function getFocusableElements(container) {
    // Selector for all potentially focusable elements
    const selector = [
        'a[href]',
        'button:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
        'area[href]'
    ].join(',');
    
    // Get all elements matching the selector
    return Array.from(container.querySelectorAll(selector));
}

// Usage
const setupKeyboardNavigation = (container) => {
    const focusableElements = PhenixBlocks.getFocusableElements(container);
    
    // Set up keyboard navigation
    // ...
};
```

## Keyboard Navigation

### `blockAccessibility`

Enhances block keyboard navigation and accessibility by providing keyboard shortcuts for common actions like creating, duplicating, and removing blocks.

```javascript
/**
 * Enhances block keyboard navigation and accessibility
 * 
 * @param {Object} event - The keyboard event
 * @param {String} clientId - The block client ID
 * @param {Object} newAttributes - Attributes for a new block if created
 * @param {String} currentContent - The current block content
 * @param {Object} currentAttributes - The current block attributes
 */
function blockAccessibility(event, clientId, newAttributes, currentContent, currentAttributes) {
    // Define WordPress block editor functions
    const { createBlock } = wp.blocks;
    const { insertBlock, removeBlock } = wp.data.dispatch('core/editor');
    const { getBlockIndex, getBlockInsertionPoint, getBlockName } = wp.data.select('core/block-editor');

    // Handle empty blocks
    if (currentContent?.length === 0) {
        // Remove empty block when Backspace or Delete is pressed
        if (event.key === "Backspace" || event.key === "Delete") removeBlock(clientId);
    }
    // Handle keyboard shortcuts with Ctrl key
    else if (event.ctrlKey) {
        // Insert new blank block with Ctrl+Enter
        if (event.key === 'Enter') {
            event.preventDefault();
            const newBlock = createBlock(getBlockName(clientId), newAttributes);
            insertBlock(newBlock, getBlockIndex(clientId)+1, getBlockInsertionPoint().rootClientId);
        }
        // Duplicate current block with Ctrl+D
        if (event.key === 'D' || event.key === 'd') {
            event.preventDefault();
            const newBlock = createBlock(getBlockName(clientId), currentAttributes);
            insertBlock(newBlock, getBlockIndex(clientId)+1, getBlockInsertionPoint().rootClientId);
        }
    }
    // Insert new paragraph block when Enter is pressed
    else if (event.key === 'Enter') {
        event.preventDefault();
        const newBlock = createBlock("core/paragraph");
        insertBlock(newBlock, getBlockIndex(clientId)+1, getBlockInsertionPoint().rootClientId);
    }
}

// Usage in edit.js
const handleKeyDown = (event) => {
    PhenixBlocks.blockAccessibility(
        event,
        clientId,
        { content: '' },  // New block attributes
        attributes.content,
        attributes
    );
};

// Add the event handler to your editable content
return (
    <div
        className="editable-content"
        onKeyDown={handleKeyDown}
    >
        {/* Block content */}
    </div>
);
```

### `setupTrapFocus`

Sets up focus trapping within a modal or dialog.

```javascript
/**
 * Sets up focus trapping within a modal or dialog
 * 
 * @param {HTMLElement} container - The container element
 * @returns {Function} - Cleanup function to remove event listeners
 */
function setupTrapFocus(container) {
    // Get all focusable elements
    const focusableElements = getFocusableElements(container);
    
    if (focusableElements.length === 0) return () => {};
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // Set initial focus
    firstElement.focus();
    
    // Handle keydown events
    const handleKeyDown = (event) => {
        // Check for Tab key
        if (event.key === 'Tab') {
            // If Shift+Tab on first element, move to last element
            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }
            // If Tab on last element, move to first element
            else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
        // Check for Escape key
        else if (event.key === 'Escape') {
            // Close the modal or dialog
            // ...
        }
    };
    
    // Add event listener
    container.addEventListener('keydown', handleKeyDown);
    
    // Return cleanup function
    return () => {
        container.removeEventListener('keydown', handleKeyDown);
    };
}

// Usage
const openModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('is-active');
    
    const cleanup = PhenixBlocks.setupTrapFocus(modal);
    
    // Store cleanup function for later
    modal.dataset.cleanup = cleanup;
};

const closeModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('is-active');
    
    // Run cleanup function
    if (modal.dataset.cleanup) {
        modal.dataset.cleanup();
        delete modal.dataset.cleanup;
    }
};
```

### `setupArrowNavigation`

Sets up arrow key navigation for a group of elements.

```javascript
/**
 * Sets up arrow key navigation for a group of elements
 * 
 * @param {HTMLElement} container - The container element
 * @param {String} selector - Selector for navigable elements
 * @param {Object} options - Options for navigation behavior
 * @returns {Function} - Cleanup function to remove event listeners
 */
function setupArrowNavigation(container, selector, options = {}) {
    // Default options
    const defaultOptions = {
        vertical: true,
        horizontal: false,
        wrap: true,
        initialFocus: 0
    };
    
    // Merge options
    const config = { ...defaultOptions, ...options };
    
    // Get all navigable elements
    const elements = Array.from(container.querySelectorAll(selector));
    
    if (elements.length === 0) return () => {};
    
    // Set initial focus
    if (typeof config.initialFocus === 'number' && elements[config.initialFocus]) {
        elements[config.initialFocus].focus();
    }
    
    // Handle keydown events
    const handleKeyDown = (event) => {
        // Get current focused element
        const currentIndex = elements.indexOf(document.activeElement);
        
        if (currentIndex === -1) return;
        
        let nextIndex = currentIndex;
        
        // Handle arrow keys
        if (config.vertical) {
            if (event.key === 'ArrowUp') {
                nextIndex = currentIndex - 1;
                event.preventDefault();
            } else if (event.key === 'ArrowDown') {
                nextIndex = currentIndex + 1;
                event.preventDefault();
            }
        }
        
        if (config.horizontal) {
            if (event.key === 'ArrowLeft') {
                nextIndex = currentIndex - 1;
                event.preventDefault();
            } else if (event.key === 'ArrowRight') {
                nextIndex = currentIndex + 1;
                event.preventDefault();
            }
        }
        
        // Handle wrapping
        if (config.wrap) {
            if (nextIndex < 0) {
                nextIndex = elements.length - 1;
            } else if (nextIndex >= elements.length) {
                nextIndex = 0;
            }
        } else {
            if (nextIndex < 0) {
                nextIndex = 0;
            } else if (nextIndex >= elements.length) {
                nextIndex = elements.length - 1;
            }
        }
        
        // Focus next element
        if (nextIndex !== currentIndex) {
            elements[nextIndex].focus();
        }
    };
    
    // Add event listener
    container.addEventListener('keydown', handleKeyDown);
    
    // Return cleanup function
    return () => {
        container.removeEventListener('keydown', handleKeyDown);
    };
}

// Usage
const setupTabList = () => {
    const tabList = document.querySelector('.tab-list');
    
    PhenixBlocks.setupArrowNavigation(tabList, '.tab', {
        horizontal: true,
        vertical: false,
        wrap: true
    });
};
```

## Screen Reader Support

### `announceToScreenReader`

Announces a message to screen readers.

```javascript
/**
 * Announces a message to screen readers
 * 
 * @param {String} message - The message to announce
 * @param {String} politeness - The politeness level ('polite' or 'assertive')
 */
function announceToScreenReader(message, politeness = 'polite') {
    // Create or get the announcement element
    let announcer = document.getElementById('px-a11y-announcer');
    
    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'px-a11y-announcer';
        announcer.setAttribute('aria-live', politeness);
        announcer.setAttribute('aria-atomic', 'true');
        announcer.setAttribute('class', 'sr-only');
        document.body.appendChild(announcer);
    } else {
        announcer.setAttribute('aria-live', politeness);
    }
    
    // Clear previous announcements
    announcer.textContent = '';
    
    // Set the new announcement after a small delay
    setTimeout(() => {
        announcer.textContent = message;
    }, 50);
}

// Usage
const handleFormSubmit = () => {
    // Process form submission
    // ...
    
    // Announce success to screen readers
    PhenixBlocks.announceToScreenReader('Form submitted successfully', 'assertive');
};
```

### `createScreenReaderText`

Creates visually hidden text for screen readers.

```javascript
/**
 * Creates visually hidden text for screen readers
 * 
 * @param {String} text - The text content
 * @returns {JSX.Element} - JSX element with screen reader text
 */
function createScreenReaderText(text) {
    return (
        <span className="sr-only">{text}</span>
    );
}

// Usage in save.js
export default function save({ attributes }) {
    return (
        <button className="icon-button">
            <i className="fas fa-star"></i>
            {PhenixBlocks.createScreenReaderText('Add to favorites')}
        </button>
    );
}
```

## Color Contrast

### `checkColorContrast`

Checks if two colors have sufficient contrast.

```javascript
/**
 * Checks if two colors have sufficient contrast
 * 
 * @param {String} foreground - Foreground color (hex, rgb, or rgba)
 * @param {String} background - Background color (hex, rgb, or rgba)
 * @param {String} level - WCAG level ('AA' or 'AAA')
 * @returns {Boolean} - Whether the contrast is sufficient
 */
function checkColorContrast(foreground, background, level = 'AA') {
    // Convert colors to RGB
    const getRGB = (color) => {
        // Handle hex colors
        if (color.startsWith('#')) {
            const hex = color.slice(1);
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            return [r, g, b];
        }
        
        // Handle rgb/rgba colors
        if (color.startsWith('rgb')) {
            const values = color.match(/\d+/g);
            return [parseInt(values[0]), parseInt(values[1]), parseInt(values[2])];
        }
        
        return [0, 0, 0];
    };
    
    // Calculate relative luminance
    const getLuminance = (rgb) => {
        const [r, g, b] = rgb.map(c => {
            const value = c / 255;
            return value <= 0.03928
                ? value / 12.92
                : Math.pow((value + 0.055) / 1.055, 2.4);
        });
        
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    
    // Calculate contrast ratio
    const foregroundRGB = getRGB(foreground);
    const backgroundRGB = getRGB(background);
    
    const foregroundLuminance = getLuminance(foregroundRGB);
    const backgroundLuminance = getLuminance(backgroundRGB);
    
    const ratio = (Math.max(foregroundLuminance, backgroundLuminance) + 0.05)
        / (Math.min(foregroundLuminance, backgroundLuminance) + 0.05);
    
    // Check against WCAG standards
    if (level === 'AAA') {
        return ratio >= 7;
    }
    
    return ratio >= 4.5;
}

// Usage
const validateColors = (textColor, bgColor) => {
    const hasGoodContrast = PhenixBlocks.checkColorContrast(textColor, bgColor);
    
    if (!hasGoodContrast) {
        console.warn('Warning: Text color and background color do not have sufficient contrast');
    }
    
    return hasGoodContrast;
};
```

## Usage Examples

### Accessible Button Block

```javascript
// In your save.js file
export default function save({ attributes }) {
    const { title, url, icon, openInNewTab } = attributes;
    
    // Generate ARIA attributes
    const ariaAttributes = {
        role: 'button',
        'aria-label': attributes.ariaLabel || title
    };
    
    // Add target and rel attributes for external links
    const linkAttributes = {};
    if (openInNewTab) {
        linkAttributes.target = '_blank';
        linkAttributes.rel = 'noopener noreferrer';
        ariaAttributes['aria-describedby'] = `desc-${attributes.id}`;
    }
    
    return (
        <div className="accessible-button-wrapper">
            <a
                href={url}
                className="btn primary"
                {...ariaAttributes}
                {...linkAttributes}
            >
                {icon && <i className={icon} aria-hidden="true"></i>}
                <span>{title}</span>
            </a>
            
            {openInNewTab && (
                <span id={`desc-${attributes.id}`} className="sr-only">
                    (Opens in a new tab)
                </span>
            )}
        </div>
    );
}
```

### Accessible Tabs Component

```javascript
// In your edit.js file
const setupTabsAccessibility = (tabsRef) => {
    if (!tabsRef.current) return;
    
    // Set up arrow key navigation
    PhenixBlocks.setupArrowNavigation(tabsRef.current, '.tab-button', {
        horizontal: true,
        vertical: false,
        wrap: true
    });
    
    // Add ARIA attributes
    const tabButtons = tabsRef.current.querySelectorAll('.tab-button');
    const tabPanels = tabsRef.current.querySelectorAll('.tab-panel');
    
    tabButtons.forEach((button, index) => {
        const id = `tab-${index}`;
        const panelId = `panel-${index}`;
        
        button.setAttribute('id', id);
        button.setAttribute('aria-controls', panelId);
        button.setAttribute('aria-selected', button.classList.contains('active') ? 'true' : 'false');
        button.setAttribute('role', 'tab');
        
        tabPanels[index].setAttribute('id', panelId);
        tabPanels[index].setAttribute('aria-labelledby', id);
        tabPanels[index].setAttribute('role', 'tabpanel');
        tabPanels[index].setAttribute('tabindex', '0');
    });
};

// In your component
const tabsRef = useRef(null);

useEffect(() => {
    setupTabsAccessibility(tabsRef);
}, []);

return (
    <div className="tabs-component" ref={tabsRef}>
        <div className="tabs-list" role="tablist">
            <button className="tab-button active">Tab 1</button>
            <button className="tab-button">Tab 2</button>
            <button className="tab-button">Tab 3</button>
        </div>
        <div className="tab-panels">
            <div className="tab-panel active">Content 1</div>
            <div className="tab-panel">Content 2</div>
            <div className="tab-panel">Content 3</div>
        </div>
    </div>
);
```

## Integration with Block Attributes

To properly use accessibility helpers, you need to define the appropriate attribute structure in your block.json file:

```json
// In your block.json file
"attributes": {
    "title": {
        "type": "string",
        "default": ""
    },
    "ariaLabel": {
        "type": "string",
        "default": ""
    },
    "ariaDescription": {
        "type": "string",
        "default": ""
    },
    "role": {
        "type": "string",
        "default": ""
    },
    "isExpandable": {
        "type": "boolean",
        "default": false
    },
    "isExpanded": {
        "type": "boolean",
        "default": false
    },
    "isHidden": {
        "type": "boolean",
        "default": false
    }
}
```

Then use the appropriate accessibility helpers in your edit.js and save.js files.

## Best Practices

1. **Semantic HTML**: Use the most appropriate HTML elements for their intended purpose.
2. **Keyboard Navigation**: Ensure all interactive elements are accessible via keyboard.
3. **Focus Management**: Properly manage focus, especially in modal dialogs and custom widgets.
4. **ARIA Attributes**: Use ARIA attributes to enhance accessibility when necessary, but prefer native HTML semantics when possible.
5. **Color Contrast**: Ensure sufficient color contrast between text and background.
6. **Screen Reader Support**: Provide appropriate text alternatives for non-text content.
7. **Testing**: Test with screen readers and keyboard navigation to ensure accessibility.
8. **Progressive Enhancement**: Build functionality that works with basic HTML first, then enhance with JavaScript.
