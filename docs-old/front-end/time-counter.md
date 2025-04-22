---
title: "Time Counter"
date: 2025-01-04
---

## Timer Countdown

Learn how to build a time/date countdown with the Phenix timer Javascript plugin, to build amazing offers timers, event date timers, a sport stopwatch, etc.

## Overview

Phenix date counter is a js plugin that lets you create an event date, countdown, and create a stopwatch for anything that needs to, the use of the plugin is simple you define a container for the date/time elements then you set a date and time with a valid time/date string format to count, and when you build a timer component you need to keep in mind :

- **the timer**: have a specific HTML markup, and it’s built dynamically through the javascript inside your timer container.

- **the timer**: doesn’t have any specific CSS style is up to you, to style the component as you see fit in your design.

- **markup**: can be built manually if you need to, just remember to use the plugin classes to define each unit of the timer.

- **the date**: is only required when using the timer in `countdown` mode, and the `stopwatch` can work fine with the time format.

- **the time**: is only required when using the timer in `stopwatch` mode, and it only accepts a string time format `hh:mm:ss`.

- **the date**: can be in any valid string date format, and also it converts the `MM/DD/YY` to `MM-DD-YY` and `MM-DD-YYYY` to `YYYY-MM-DD` to convert the date to an EcmaScript valid date.

[HTML](#tab-1)

[Javascript](#tab-2)

```
<!-- Basic Init [date: MM-DD-YYYY or YYYY-MM-DD] [time: hh:mm] -->
<div class="timer-demo" data-date="10-15-2022" data-time="00:00" data-message="event has ended."></div>

<!-- Basic Init as Stopwatch [time: hh:mm:ss] -->
<div class="timer-demo" data-type="stopwatch" data-time="00:00:50" data-message="time is up."></div>
```

```
//====> Build Timer's <====//
Phenix('.timer-demo').timer({
    type : "countdown",  //===> Timer Type [countdown, stopwatch]
    time : "10:15:00",   //===> Time = Hour:Minutes:Seconds
    date : "YYY-MM-DD",  //===> Date = Year-Month-Day
    message : string,    //===> Time End Message
    lazy : false,        //===> Lazyloading Timer
    callback : function(){}, //===> Callback Function When timer is finished
});
```

## Countdown Timer

with Phenix .timer(options) you can build a Date and Time countdown Component, you can see an example below for the timer, and you can use the code to build one and style it as you like.

[HTML](#tab-3)

[Javascript](#tab-4)

```
<!-- Date Counter Example -->
<div class="timer-demo" data-date="2022-10-15" data-message="event has ended.">
    <span data-label="seconds" class="seconds">41</span>
    <span data-label="minutes" class="minutes">15</span>
    <span data-label="hours" class="hours">17</span>
    <span data-label="days" class="days">201</span>
</div>
<!-- // Date Counter Example -->
```

```
//====> Build Timer's <====//
Phenix('.timer-demo').timer();
```

## Stopwatch Timer

with Phenix .timer(options) you can build a Timer stopwatch Component, you can see an example below for the timer, and you can use the code to build one and style it as you like.

[HTML](#tab-5)

[Javascript](#tab-6)

```
<!-- Timer Wrapper -->
<div class="timer-demo" data-type="stopwatch" data-time="00:01:50" data-message="event has ended.">
    <span data-label="seconds" class="seconds">00</span>
    <span data-label="minutes" class="minutes">00</span>
    <span data-label="hours" class="hours">00</span>
</div>
<!-- // Timer Wrapper -->
```

```
//====> Build Timer's <====//
Phenix('.timer-demo').timer({
    type : "stopwatch"
});
```

## Callback Events

the timer has Two events to help you do stuff when the timer start counting or when it ends and you can use it like any JavaScript event see the example below.

```
//====> Build Timer's <====//
Phenix('.timer-demo').timer();

//===> Do Something When the Timer Start <===//
Phenix('.timer-demo').on('timerStart', event => {
    console.log("Hello There :) Starting Time");
});

//===> Do Something When the Timer Ends <===//
Phenix('.timer-demo').on('timerEnd', event => {
    console.log("Hello There :) Ending Time")
});
```

## Timer Options

in the table and the code below, you will find the plugin options and an example of its syntax.

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| **type** | the type of timer \[`countdown`, `stopwatch`\] | countdown | string |
| **date** | the date value in string date format `mm-dd-yy` | `none` | date string |
| **time** | the time value in string time format `hh:mm:ss` | none | time string |
| **message** | the message to display when the timer is finished | "Time is up." | string |
| **events** | the timer fires two events `"timerStart"` when it starts counting and `"timerEnd"` when it ends. | `none` | event |
| **lazyloading** | start the timer only when the user arrives at its location. | false | boolean |
