# DOM Traversing

## Overview

Phenix Elements provides DOM traversal methods to navigate relationships relative to selected elements. These include:

- **ancestor**: direct parent or closest matching ancestor
- **siblings**: adjacent elements at same level
- **next**: next sibling element(s)
- **prev**: previous sibling element(s)
- **child**: immediate child elements

## ancestor

`ancestor(target?: string): HTMLElement | HTMLElement[]`  
Returns the direct parent if no selector is provided, or the closest ancestor matching the selector:

```js
// Direct parent
const parent = Phenix('.item').ancestor();

// Nearest ancestor with class .container
const container = Phenix('.item').ancestor('.container');
```

## siblings

`siblings(target?: string): HTMLElement[] | null`  
Returns sibling elements of each selected element. Without selector, returns all siblings; with selector, only matching ones:

```js
// All siblings of each .nav-item
const navSibs = Phenix('.nav-item').siblings();

// Siblings matching .active
const activeSibs = Phenix('.nav-item').siblings('.active');
```

## next

`next(target?: string, all?: boolean): HTMLElement | HTMLElement[]`  
Returns the immediate next sibling, or if `all` is true, all following siblings that match the optional selector:

```js
// Immediate next sibling
const nextEl = Phenix('.item').next();

// First next matching .highlight
const highlighted = Phenix('.item').next('.highlight');

// All subsequent .highlight siblings
const highlights = Phenix('.item').next('.highlight', true);
```

## prev

`prev(target?: string, all?: boolean): HTMLElement | HTMLElement[]`  
Similar to `next`, but for preceding siblings:

```js
// Immediate previous sibling
const prevEl = Phenix('.item').prev();

// All previous .disabled siblings
const disabled = Phenix('.item').prev('.disabled', true);
```

## child

`child(target?: string): HTMLElement[]`  
Returns direct child elements. Without selector, returns all children; with selector, only matching ones:

```js
// All children of .list
const children = Phenix('.list').child();

// Only <li> children
const items = Phenix('.list').child('li');
```

## Example

```js
Phenix(document).ready(() => {
  // Highlight the first child of each section
  Phenix('.section').child().forEach(el => el.classList.add('first-child'));
});
