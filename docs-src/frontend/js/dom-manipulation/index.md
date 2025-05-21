# DOM Manipulation

## Overview

The DOM Manipulation API provides methods for selecting and interacting with DOM elements, including adding/removing classes, updating styles, setting attributes, and inserting elements.

## Usage

### Selecting Elements

Use `Phenix(selector)` to select elements in the DOM. It returns a `PhenixElements` object, which extends an array of `HTMLElement`s and supports chaining:

```js
const items = Phenix('.item');
```

### DOM Ready

Execute code when the DOM is fully loaded using:

```js
Phenix(document).ready(() => {
  // Your code here
});
```

## Class Manipulation

### addClass

`addClass(className: string): this`  
Adds one or more class names (space-separated) to each element.

```js
Phenix('.buttons').addClass('btn primary');
```

### removeClass

`removeClass(className: string): this`  
Removes one or more class names from each element.

```js
Phenix('.buttons').removeClass('disabled');
```

### toggleClass

`toggleClass(className: string): this`  
Toggles the specified class names on each element.

```js
Phenix('.buttons').toggleClass('active');
```

## CSS Manipulation

### css

`css(styles: Record<string, string | number>, clearInline?: boolean): this`  
Sets multiple inline CSS properties. Pass `true` for `clearInline` to remove existing inline styles before applying new ones.

```js
Phenix('.box').css({ display: 'flex', padding: '1rem' });
```

### getCSS

`getCSS(property?: string, pseudo?: string): string | CSSStyleDeclaration`  
Retrieves computed CSS values. Without arguments, returns a `CSSStyleDeclaration` of all computed styles. With `property`, returns the property's value. Optional `pseudo` targets pseudo-elements:

```js
const bg = Phenix('.box').getCSS('background-color');
```

## Attributes

### setAttributes

`setAttributes(attributes: Record<string, string>): this`  
Sets multiple HTML attributes on each element.

```js
Phenix('.link').setAttributes({ href: '#', target: '_blank' });
```

## Inserting Elements

### insert

`insert(position: 'after' | 'before' | 'prepend' | 'append', content: string | DocumentFragment): HTMLElement | DocumentFragment[]`  
Inserts HTML or elements relative to each target element. Use:

- `'after'`: Insert after each element.
- `'before'`: Insert before each element.
- `'prepend'`: Insert as the first child.
- `'append'`: Insert as the last child.

```js
Phenix('.list').insert('append', '<li>New item</li>');
```

## Element Removal

Use the native `remove()` method on elements to remove them from the DOM. Since `Phenix(selector)` returns a `PhenixElements` array, you can call `.forEach`:

```js
// Remove all .alert elements
Phenix('.alert').forEach(el => el.remove());
```

To clear all children of a container, combine with `child()`:

```js
// Remove all child nodes
Phenix('.list').child().forEach(item => item.remove());
```

### Utilities Module

Phenix includes a `utilities` method that provides an Item Remover feature. To enable it, call:

```js
Phenix(document).ready(() => {
  Phenix(window).utilities({ type: 'other' });
});
```

Then add removal triggers in your HTML:

```html
<button class="remove-item" data-target=".card" data-relation="ancestor">Delete Card</button>
```

Options:
- `data-target`: CSS selector of element(s) to remove
- `data-relation` (optional): `ancestor` (default), `sibling`, `global`, `closest`

## Example

```js
Phenix(document).ready(() => {
  Phenix('.item')
    .addClass('active')
    .css({ color: 'red' })
    .setAttributes({ 'data-state': 'active' })
    .insert('after', '<span class="badge">New</span>');
});
```
