---
title: "JS Utilities"
date: 2025-01-07
---

## Helpers & Utilities

phenix provides a collection of functions that fixes and improve some stuff like .form-control placeholder show/hide effect or form controls group styling with .px-form and activating the Masonry Grid mechanism with .px-masonry or creating viewport animations with .view-status and much more, by default phenix activates all utilities and you can use the function below to re-activate in case you have/need to.

```
/*====> Activate |or| Re-Activate Phenix Utilites <====*/
Phenix(document).utilities(type);
```

| Types | Description |
| --- | --- |
| `**form**` | to activate the form controls utilities. |
| `**other**` | to activate other utilities like item remover and animated number counter. |
| `**text**` | to activate text effects like colored words and gradients. |
| `**icons**` | to generate icons for ul/ol |
| `**copyrights**` | to activate copyright protection methods. |
| `**seo**` | to activate SEO optimization helper. |
| `**grid**` | to activate masonry grid system |
| `**all**` | to activate everything |

## Lazy-Loader

Lazy loading is the practice of delaying the load or initialization of resources or objects until they’re actually needed to improve performance and save system resources. For example, if a web page has an image you can display a placeholder and lazy load the full image only when the user arrives at its location.

and in Phenix, there is a Prototype to Activate lazy-loading on all images, videos, audio, iframe, and any of Phenix’s media features of it with a simple function.

```
//====> Active LazyLoading for [images, video, audio, iframes] <====//
Phenix(document).lazyLoading();
```

## CSS/JS Importer

a method to load CSS and JS Libraries lazily, and to run a script after it has been loaded, and you can load the file locally by setting isIntegrated to true and in the path put the file name only, and make sure the file is in the dist/lib/ folder.

```
/*====> CSS/JS Importer <====*/
Phenix(document).import(id:string, tag:string, source:string, callback:any, isIntegrated:boolean);

/*====> Example <====*/
Phenix(document).import("custom-css", "link", "https://path-to-file", ()=>{}, false);
```

## Copy to Clipboard

the copyText(string) method can copy text into the clipboard of the user and you can use it like the example below.

```
//====> On Click Event Listner <====//
let liveEvent = Phenix('.target-name').on('click', event => {
    const text = "text to copy";
    Phenix(document).copyText(text);
});
```

## Media Query

phenix media query is a js alternative for the CSS Media Query which let you execute a js callback depending on the screen size `mediaQuery(breakpoint, callback(), mobile_first);` the method is designed with presets of breakpoints like the Responsive Breakpoints and you can also create a custom breakpoint by defining a number instead of a preset name.

[xSmall](#tab-1)

[Small](#tab-2)

[Medium](#tab-3)

[Large](#tab-4)

[xLarge](#tab-5)

```
/*====> Extra Small [480 => 0]px Screens Media Query <====*/
Phenix(document).mediaQuery('xsmall', callback => { /*-- Your Code --*/ });

/*====> Extra Small [0 => infinite] Screens Media Query <====*/
Phenix(document).mediaQuery('xsmall', callback => {/*-- Your Code --*/}, true);
```

```
/*====> Small [576 => infinite] Screens Media Query <====*/
Phenix(document).mediaQuery('small', callback => { /*-- Your Code --*/ });

/*====> Small [700 => 0]px Screens Media Query <====*/
Phenix(document).mediaQuery('small', callback => {/*-- Your Code --*/}, true);
```

```
/*====> Medium [768 => infinite] Screens Media Query <====*/
Phenix(document).mediaQuery('medium', callback => { /*-- Your Code --*/ });

/*====> Medium [1100 => 0] Screens Media Query <====*/
Phenix(document).mediaQuery('medium', callback => {/*-- Your Code --*/}, true);
```

```
/*====> Large [1200 => infinite] Screens Media Query <====*/
Phenix(document).mediaQuery('large', callback => { /*-- Your Code --*/ });

/*====> Large [1366 => 0]px Screens Media Query <====*/
Phenix(document).mediaQuery('large', callback => {/*-- Your Code --*/}, true);
```

```
/*====> xLarge [1400 => infinite] Screens Media Query <====*/
Phenix(document).mediaQuery('xlarge', callback => { /*-- Your Code --*/ });

/*====> xLarge [2560 => 0]px Screens Media Query <====*/
Phenix(document).mediaQuery('xlarge', callback => {/*-- Your Code --*/}, true);
```

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| Breakpoint | the screen width number by pixels or a string preset | none | string or number |
| callback | the function to call when the breakpoint is reached. | none | function |
| mobile-first | enable or disable min-width query instead of max-width. | false | Boolean |

## Get Height

with .height the function you can get the exact/true height of any element including padding even if the element is hidden and will return the value of the HTML Element height with pixels number.

```
//====> Get Element True Height <====//
let height = Phenix(element).height();
```

## Get Direction

with Phenix .direction() you can get information about the current Document\[page\] flow direction like if its rtl or ltr, what is the start point left or right etc, and you can learn how to use them in the example below.

```
//====> Check for Page Direction <====//
let cureent_direction = Phenix(document).direction();

if (cureent_direction == "rtl") {....};

//====> Check for Page Direction Start Point <====//
let start_point = Phenix(document).direction('start');

if (start_point == "right") {....};

//====> Check for Page Direction End Point <====//
let end_point = Phenix(document).direction('end');

if (end_point == "right") {....};
```

## View-port Checker

with Phenix viewport Checker .inView({options}) you can check if the element is currently displayed in the view point of the user screen and it return true or false, and you can check with specific and different cases with multiple options like :

- **flow:** if you want to check if the element in the view from the top or the bottom

- **into:** check the element view after it shows by adding offset number by pixels

- **offset :** check before the element shows by adding offset number by pixels

- **!important :** you can’t use `offset` and `into` with each other you can only increase or decrease the target position.

```
//====> Check if the element in View-Point <====//
let viewCheck = Phenix(element).inView();

if(viewCheck) {...};
```

```
//====> Check if the element in View-Point with Options <====//
let viewCheck = Phenix(element).inView({
     flow : 'start', //===> values : start, end
     into : 30,      //===> Increase Target Position By [number]
     offset : 10     //===> Decrease Target Position By [number]
});

if(viewCheck) {...};
```

## View-port Dimensions

with Phenix .viewport(property) you can get the current view-port/screen width and height, it will return an object with width , height keys which hold a value for each with pixels, and you can use it for creating a media query for js code etc.

```
//====> Get View-Port Width/Height <====//
let screen_size = Phenix(document).viewport();

//====> if the screen width is more then 1280px do something <====//
if (screen_size["width"] > 1280) {...}
```

```
//====> Get View-Port Width <====//
let screen_width = Phenix(document).viewport('width');

//====> Get View-Port Height <====//
let screen_height = Phenix(document).viewport('height');
```
