# DOM Events

## Overview

Phenix provides a unified `on()` method to attach event listeners to elements. It supports standard and live event binding for dynamically added elements.

## on

`on(event: string, callback: (e: Event) => void, live?: boolean, timer?: number): this | { elements: PhenixElements; timeLoop: number }`  

- **event**: Event type (e.g., `'click'`, `'mouseover'`).  
- **callback**: Handler function receiving the event object.  
- **live** (optional): If `true`, reattaches handlers on newly added elements at intervals.  
- **timer** (optional): Interval in ms for live binding (default `1000`).

**Returns:**
- When `live` is falsy: the `PhenixElements` instance (for chaining).  
- When `live` is truthy: an object with the bound elements and the `timeLoop` ID.

```js
// Standard binding
Phenix('.btn').on('click', e => console.log('Button clicked'));

// Live binding: rebinds every 2 seconds for new .item elements
const binder = Phenix('.item').on('click', e => console.log('Item clicked'), true, 2000);

// You can clear the interval to stop live binding
clearInterval(binder.timeLoop);
```

## Removing Listeners

Use native `removeEventListener` on each element:

```js
const handler = e => console.log('clicked');
Phenix('.btn').on('click', handler);
// Later...
Phenix('.btn').forEach(el => el.removeEventListener('click', handler));
```

## Example

```js
Phenix(document).ready(() => {
  Phenix('a.external').on('click', e => {
    e.preventDefault();
    window.open(e.currentTarget.getAttribute('href'), '_blank');
  });
});
