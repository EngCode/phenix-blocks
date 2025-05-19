# Time Counter

## Overview

The Time Counter is a specialized component in the Phenix Animation System that creates countdown timers and stopwatches. This feature is perfect for creating event countdowns, limited-time offers, session timers, and other time-based interactive elements.

## Basic Usage

The `timer` method creates a countdown timer that displays days, hours, minutes, and seconds:

```typescript
timer(options?: {
  type?: string;    // Timer type [countdown, stopwatch]
  time?: string;    // Time in format "HH:MM"
  date?: string;    // Date in format "YYYY-MM-DD"
  message?: string; // Message to display when timer ends
  lazyloading?: boolean; // Only start timer when in view
}): this
```

### Parameters

- `type`: Timer type, either "countdown" (default) or "stopwatch"
- `time`: Target time in "HH:MM" format (default: "00:00")
- `date`: Target date in "YYYY-MM-DD" format (default: current date)
- `message`: Message to display when timer ends (default: "Time is up.")
- `lazyloading`: If true, only starts the timer when it scrolls into view (default: false)

### HTML Attributes

The method also supports HTML data attributes for inline configuration:

- `data-type`: Timer type, either "countdown" or "stopwatch"
- `data-time`: Target time in "HH:MM" format
- `data-date`: Target date in "YYYY-MM-DD" format
- `data-message`: Message to display when timer ends
- `data-lazy`: If "true", only starts the timer when in view

### Timer Elements

The timer automatically creates the following elements if they don't exist in your HTML:

- `.seconds`: Element to display seconds
- `.minutes`: Element to display minutes
- `.hours`: Element to display hours
- `.days`: Element to display days

Each element will have a `data-label` attribute with the corresponding unit name.

## Examples

### Basic Usage

```js
// Initialize a countdown timer
Phenix('#event-countdown').timer();

// Initialize with custom options
Phenix('#sale-countdown').timer({
  date: '2025-12-31',
  time: '23:59',
  message: 'Sale has ended!'
});
```

### HTML Implementation

```html
<!-- Basic countdown timer -->
<div id="countdown-timer" 
     data-date="2025-12-31" 
     data-time="23:59" 
     data-message="Event has started!">
  <!-- Timer will automatically create these elements if they don't exist -->
  <span class="days"></span> days
  <span class="hours"></span> hours
  <span class="minutes"></span> minutes
  <span class="seconds"></span> seconds
</div>

<!-- Custom styled timer -->
<div id="custom-timer" class="timer-container" data-date="2025-06-15" data-time="09:00">
  <div class="timer-unit">
    <span class="days">00</span>
    <span class="label">Days</span>
  </div>
  <div class="timer-unit">
    <span class="hours">00</span>
    <span class="label">Hours</span>
  </div>
  <div class="timer-unit">
    <span class="minutes">00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="timer-unit">
    <span class="seconds">00</span>
    <span class="label">Seconds</span>
  </div>
</div>
```

## Practical Examples

### Event Countdown

```html
<section class="event-countdown">
  <h2>Our Next Event Starts In:</h2>
  <div class="countdown-container" 
       data-date="2025-09-15" 
       data-time="10:00" 
       data-message="Event has started!">
    <div class="countdown-unit">
      <span class="days">00</span>
      <span class="label">Days</span>
    </div>
    <div class="countdown-unit">
      <span class="hours">00</span>
      <span class="label">Hours</span>
    </div>
    <div class="countdown-unit">
      <span class="minutes">00</span>
      <span class="label">Minutes</span>
    </div>
    <div class="countdown-unit">
      <span class="seconds">00</span>
      <span class="label">Seconds</span>
    </div>
  </div>
  <a href="#register" class="btn primary">Register Now</a>
</section>
```

```js
// Initialize the countdown timer
Phenix('.countdown-container').timer();

// Add event listeners for timer events
document.querySelector('.countdown-container').addEventListener('timerStart', function() {
  console.log('Countdown started');
});

document.querySelector('.countdown-container').addEventListener('timerEnd', function() {
  // Change button text when timer ends
  document.querySelector('.btn').textContent = 'Join Live Now';
  document.querySelector('.btn').classList.add('urgent');
});
```

### Limited-Time Offer

```html
<div class="offer-card">
  <div class="offer-header">
    <h3>Special Discount</h3>
    <p>Limited time offer - expires in:</p>
  </div>
  
  <div class="offer-timer" 
       data-date="2025-05-30" 
       data-time="23:59" 
       data-message="Offer expired!">
    <div class="timer-row">
      <div class="timer-unit">
        <span class="hours">00</span>
        <span class="label">Hours</span>
      </div>
      <div class="timer-unit">
        <span class="minutes">00</span>
        <span class="label">Minutes</span>
      </div>
      <div class="timer-unit">
        <span class="seconds">00</span>
        <span class="label">Seconds</span>
      </div>
    </div>
  </div>
  
  <div class="offer-content">
    <p class="discount">30% OFF</p>
    <p class="description">Use code <strong>SPECIAL30</strong> at checkout</p>
    <a href="#shop" class="btn primary">Shop Now</a>
  </div>
</div>
```

```js
// Initialize the offer timer
Phenix('.offer-timer').timer();

// Add a flashing effect to the timer when less than an hour remains
document.querySelector('.offer-timer').addEventListener('timerStart', function() {
  const checkTimeRemaining = setInterval(function() {
    const hours = parseInt(document.querySelector('.hours').textContent);
    if (hours === 0) {
      document.querySelector('.offer-timer').classList.add('urgent-countdown');
      clearInterval(checkTimeRemaining);
    }
  }, 1000);
});
```

### Lazy-Loaded Timer

```html
<div class="section later-in-page">
  <h2>Flash Sale Ends Soon!</h2>
  <div class="flash-sale-timer" 
       data-date="2025-06-01" 
       data-time="23:59" 
       data-message="Sale has ended!" 
       data-lazy="true">
    <div class="timer-unit">
      <span class="days">00</span>
      <span class="label">Days</span>
    </div>
    <div class="timer-unit">
      <span class="hours">00</span>
      <span class="label">Hours</span>
    </div>
    <div class="timer-unit">
      <span class="minutes">00</span>
      <span class="label">Minutes</span>
    </div>
    <div class="timer-unit">
      <span class="seconds">00</span>
      <span class="label">Seconds</span>
    </div>
  </div>
</div>
```

```js
// Initialize the lazy-loaded timer
Phenix('.flash-sale-timer').timer({
  lazyloading: true
});
```

## Timer Events

The timer component dispatches two custom events that you can listen for:

1. `timerStart`: Fired when the timer begins counting
2. `timerEnd`: Fired when the timer reaches zero

```js
// Listen for timer start
document.querySelector('#countdown').addEventListener('timerStart', function(event) {
  console.log('Timer started!');
});

// Listen for timer end
document.querySelector('#countdown').addEventListener('timerEnd', function(event) {
  console.log('Timer ended!');
  // Perform actions when timer ends
  showModal('#offer-expired-modal');
});
```

## Styling

The timer component adds the following classes that you can use for styling:

- `.px-is-loading`: Added when the timer is in a loading state (when using lazy loading)
- `.px-timer-ended`: Added when the timer has ended

```css
/* Example styling for timer */
.countdown-unit {
  display: inline-block;
  margin: 0 10px;
  text-align: center;
  min-width: 60px;
}

.countdown-unit span {
  display: block;
}

.countdown-unit .days,
.countdown-unit .hours,
.countdown-unit .minutes,
.countdown-unit .seconds {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.countdown-unit .label {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #666;
}

/* Styling for timer states */
.px-is-loading {
  opacity: 0.5;
}

.px-timer-ended {
  color: #ff0000;
}

.px-timer-ended .timer-message {
  font-weight: bold;
  font-size: 1.2rem;
}
```

## Performance Optimization

1. **Use Lazy Loading**: For timers below the fold, use the `lazyloading` option to only start them when they come into view.

2. **Minimize DOM Updates**: The timer updates every second, which can impact performance if you have multiple timers on a page. Consider using fewer timers or implementing a single shared timer.

3. **Consider Reduced Motion Preferences**: For accessibility, consider simpler visual effects for users who prefer reduced motion.

## Browser Compatibility

The Phenix Timer component is built using modern JavaScript techniques and is compatible with all modern browsers. It uses `setInterval` for time tracking and standard DOM manipulation for updates.
