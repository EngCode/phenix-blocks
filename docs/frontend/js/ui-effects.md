# DOM UI Effects

## Overview

Phenix provides UI effects for sliding and fading elements, smooth scrolling, sticky elements, and scroll‑spy interactions.

## Animation Effects

### slideUp

`slideUp(duration?: number = 300, delay?: number = 0): this`  
Loops through each element. If visible, sets `overflow: hidden`, captures the element's full height and initial padding values, then animates height and padding to `0` over the specified duration. Once complete, hides the element and resets inline styles.

```js
// Slide up with 400ms duration and 100ms delay
Phenix('.panel').slideUp(400, 100);
```

### slideDown

`slideDown(duration?: number = 300, delay?: number = 0, display?: string = 'block'): this`  
Applies only to hidden elements. Sets `overflow: hidden`, display to the given `display` (default `'block'`), initializes height and padding to `0`, then animates them to the element's `scrollHeight` and original padding values. Clears inline styles after completion.

```js
// Slide down into flex container over 500ms
Phenix('.panel').slideDown(500, 0, 'flex');
```

### slideToggle

`slideToggle(duration?: number = 300, delay?: number = 0, display?: string = 'block'): this`  
Checks each element's computed `display`; if `'none'`, calls `slideDown(duration, delay, display)`, otherwise calls `slideUp(duration, delay)`.

```js
// Hide panels if visible, show if hidden
Phenix('.panel').slideToggle(300, 100, 'flex');
```

### fadeOut

`fadeOut(duration?: number = 300, delay?: number = 0): this`  
For visible elements, animates `opacity` from `1` to `0` over the given duration, then sets `display: none` and clears the `opacity` style.

```js
// Fade out alerts in 200ms
Phenix('.alert').fadeOut(200);
```

### fadeIn

`fadeIn(duration?: number = 300, delay?: number = 0, display?: string = 'block'): this`  
For hidden elements, sets `display` to the given value, initializes `opacity` to `0`, then animates `opacity` to `1`. Clears the `opacity` style after completion.

```js
// Fade in alerts as inline-block with 50ms delay
Phenix('.alert').fadeIn(200, 50, 'inline-block');
```

### fadeToggle

`fadeToggle(duration?: number = 300, delay?: number = 0, display?: string = 'block'): this`  
Checks each element's `display`: if `'none'`, invokes `fadeIn(duration, delay, display)`, else invokes `fadeOut(duration, delay)`.

```js
// Fade alerts in or out
Phenix('.alert').fadeToggle(200);
```

## Scroll & Visibility Effects

### smoothScroll

`smoothScroll(options?: {`  
  `target?: string;  // CSS selector fallback`  
  `offset?: number;  // decrease final scroll position`  
  `into?: number;   // increase final scroll position`  
  `duration?: number; // animation duration in ms`  
  `delay?: number;    // delay before starting animation`  
` }): this`  
Attaches a click listener to each element: prevents default, determines the scroll target from `href`, `data-target`, or `options.target`, computes position plus `into`/`offset`, then animates `window.scrollTo` using an easing function over the given duration and delay.

```js
// Smooth-scroll anchor links with 600ms duration
Phenix('a.scroll-link').smoothScroll({ duration: 600, offset: 50 });
```

### sticky

`sticky(options?: {`  
  `type?: string;`  
  `offset?: number;`  
  `into?: number;`  
  `flow?: string;`  
  `active?: string;`  
` }): this`  
Keeps elements fixed or sticky when scrolling past a threshold, toggling an active class:

```js
Phenix('.navbar').sticky({ offset: 0, active: 'is-sticky' });
```

### scrollSpy

`scrollSpy(options?: {`  
  `active: string;`  
  `flow: string;`  
  `offset: number;`  
  `into: number;`  
` }): this`  
Highlights navigation items based on scroll position, using smooth scroll hooks and active class toggling:

```js
Phenix('.toc').scrollSpy({ active: 'is-active', flow: 'start', offset: 10 });
