# Notifications

## Overview

The Notifications component in the Phenix Design System provides a way to display temporary messages to users. It's useful for showing feedback about actions, errors, warnings, or success messages that automatically disappear after a specified time.

## Basic Usage

Create notifications using the JavaScript `notifications()` method:

```javascript
// Show a basic notification
Phenix(document).notifications({
  type: 'normal',     // Message type: normal, error, success, warning
  message: 'This is a notification message',  // Message content
  duration: 3000,     // Message timeout in milliseconds
  position: 'bottom, start'  // Message position [y, x]
});
```

## Notification Types

The Notifications component supports four types of notifications, each with its own styling:

```javascript
// Normal notification (default)
Phenix(document).notifications({
  type: 'normal',
  message: 'This is a normal notification'
});

// Success notification
Phenix(document).notifications({
  type: 'success',
  message: 'Operation completed successfully!'
});

// Error notification
Phenix(document).notifications({
  type: 'error',
  message: 'An error occurred. Please try again.'
});

// Warning notification
Phenix(document).notifications({
  type: 'warning',
  message: 'Warning: This action cannot be undone.'
});
```

## Positioning

Control the position of notifications using the `position` option with a format of "Y, X" where Y is "top", "center", or "bottom" and X is "start", "center", or "end":

```javascript
// Top-right notification
Phenix(document).notifications({
  message: 'Top-right notification',
  position: 'top, end'
});

// Bottom-center notification
Phenix(document).notifications({
  message: 'Bottom-center notification',
  position: 'bottom, center'
});

// Center notification
Phenix(document).notifications({
  message: 'Centered notification',
  position: 'center, center'
});
```

## Duration

Control how long notifications are displayed using the `duration` option (in milliseconds):

```javascript
// Short notification (1 second)
Phenix(document).notifications({
  message: 'Quick notification',
  duration: 1000
});

// Long notification (10 seconds)
Phenix(document).notifications({
  message: 'This notification stays longer',
  duration: 10000
});
```

## Practical Examples

### Trigger Notifications from Button Click

```html
<!-- Notification trigger buttons -->
<button class="btn primary notification-demo" 
        data-type="normal" 
        data-message="This is a normal notification" 
        data-position="bottom, start">
  Show Normal Notification
</button>

<button class="btn success notification-demo" 
        data-type="success" 
        data-message="Operation completed successfully!" 
        data-position="top, end">
  Show Success Notification
</button>

<script>
  // When a button is clicked, show the notification
  Phenix('.notification-demo').on('click', isClicked => {
    // Get data from button attributes
    let type = isClicked.target.getAttribute('data-type'),
        message = isClicked.target.getAttribute('data-message'),
        position = isClicked.target.getAttribute('data-position');
    
    // Show notification
    Phenix(document).notifications({
      type: type,
      message: message,
      position: position
    });
  });
</script>
```

### Form Submission Feedback

```javascript
// Form submission handler
Phenix('#contact-form').on('submit', event => {
  event.preventDefault();
  
  // Simulate form submission
  setTimeout(() => {
    // Show success notification
    Phenix(document).notifications({
      type: 'success',
      message: 'Your message has been sent!',
      position: 'top, center',
      duration: 5000
    });
    
    // Reset form
    event.target.reset();
  }, 1000);
});
```

## Options Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | String | 'normal' | Type of notification: 'normal', 'error', 'success', 'warning' |
| `message` | String | 'No Message Defined.' | Content of the notification |
| `duration` | Number | 3000 | Time in milliseconds before the notification disappears |
| `position` | String/Array | 'bottom, start' | Position of the notification [Y, X] |

## Styling

The Notifications component uses the following CSS classes that you can target for custom styling:

- `.px-notifications` - The container for all notifications
- `.px-item` - Individual notification items

```css
/* Custom notification styling */
.px-notifications .px-item {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-left: 4px solid currentColor;
}

/* Custom styling for specific notification types */
.px-notifications .px-item.bg-success {
  border-left-color: var(--success-color-dark);
}
```

## Accessibility Considerations

For better accessibility, consider the following best practices:

1. Ensure notification text has sufficient contrast against its background
2. Make notifications dismissible by clicking/tapping
3. Consider using ARIA live regions for important notifications
4. Avoid relying solely on notifications for critical information

## Best Practices

1. **Keep messages concise** - use short, clear text
2. **Use appropriate notification types** - match the type to the message content
3. **Position notifications consistently** - maintain the same position throughout your application
4. **Set appropriate durations** - longer for important messages, shorter for simple confirmations
5. **Don't overuse notifications** - too many can annoy users
