---
title: "DOM Events"
date: 2025-01-04
---

## DOM Events

Learn how to work around Phenix DOM Events JS/TypeScript source code to build fancy and interactive components.

## Event Listener

with Phenix .on(event, callback) you can add an event listener to a group of elements that supports DOM events like click, mouseover, focus, mouseenter, submit etc, and you can learn more about the events and the supported elements from the [MDN Event Listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) docs, and you can learn how to use it in Phenix from the example below.

```
//====> On Click Event Listner <====//
Phenix('.target-name').on('click', event => {....});
```

## Live Event Listener

the .on(event, callback, live?, timer?) has extra optional settings for creating a Real-Time event handler which will create a time-loop to add an event listener to the targeted elements now and in the feature in case you create new elements and want to have the same event handler as the pre-existed elements in the DOM tree,

and you can activate the live option by adding true after the callback parameter of the .on() function and you can adjust the time loop to search for new elements each \*ms time after the live parameter of the .on(), look at the example below to learn the syntax.

```
//====> On Click Live Event Listner <====//
Phenix('.target-name').on('click', event => {
    //=== Call Back ===//
}, true, 500);
```

## Stop Live Event Loop

the .on() live mode returns an object that holds the query elements and the time loop to control it and make it stop/break at any point, you can learn how to do that in the example below.

```
//====> On Click Live Event Listner <====//
let liveEvent = Phenix('.target-name').on('click', event => {}, true);

//====> Stop Loop Method <====//
clearInterval(liveEvent.timeLoop);
```
