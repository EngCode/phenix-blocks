# Notifications

## Overview

The Notifications component in the Phenix Design System provides a way to display temporary messages to users. It's useful for showing feedback about actions, errors, warnings, or success messages that automatically disappear after a specified time.

The `notifications()` method allows you to create notifications with different types, positions, and durations. You can use it to provide feedback for user actions, display system messages, or alert users about important events.

## Basic Usage

To create a notification, you need to call the `notifications()` method on the `document` object. The method accepts an options object that allows you to customize the notification.

### JavaScript

```javascript
//====> Basic Notification <====//
Phenix(document).notifications({
    type: 'normal',          //====> Message type: normal, error, success, warning
    message: 'This is a notification message',  //====> Message content
    duration: 3000,          //====> Message timeout in milliseconds
    position: 'bottom, start'  //====> Message position [Y, X]
});
```

## Notification Types

The Notifications component supports four types of notifications, each with its own styling to visually communicate different message purposes.

### JavaScript

```javascript
//====> Normal Notification (default) <====//
Phenix(document).notifications({
    type: 'normal',
    message: 'This is a normal notification'
});

//====> Success Notification <====//
Phenix(document).notifications({
    type: 'success',
    message: 'Operation completed successfully!'
});

//====> Error Notification <====//
Phenix(document).notifications({
    type: 'error',
    message: 'An error occurred. Please try again.'
});

//====> Warning Notification <====//
Phenix(document).notifications({
    type: 'warning',
    message: 'Warning: This action cannot be undone.'
});
```

## Positioning

You can control where notifications appear on the screen using the `position` option. The position format is "Y, X" where:
- Y is the vertical position: "top", "center", or "bottom"
- X is the horizontal position: "start", "center", or "end"

### JavaScript

```javascript
//====> Top-Right Notification <====//
Phenix(document).notifications({
    message: 'Top-right notification',
    position: 'top, end'
});

//====> Bottom-Center Notification <====//
Phenix(document).notifications({
    message: 'Bottom-center notification',
    position: 'bottom, center'
});

//====> Center Notification <====//
Phenix(document).notifications({
    message: 'Centered notification',
    position: 'center, center'
});
```

## Duration

The `duration` option controls how long notifications are displayed before they automatically disappear. The value is specified in milliseconds.

### JavaScript

```javascript
//====> Short Notification (1 second) <====//
Phenix(document).notifications({
    message: 'This will disappear quickly',
    duration: 1000
});

//====> Standard Notification (3 seconds) <====//
Phenix(document).notifications({
    message: 'This is the default duration',
    duration: 3000
});

//====> Long Notification (5 seconds) <====//
Phenix(document).notifications({
    message: 'This will stay longer',
    duration: 5000
});
```

## Practical Examples

### Button Click Notifications

This example shows how to trigger notifications when buttons are clicked, using data attributes to configure the notification options.

### HTML

```html
<!-- Notification Trigger Buttons -->
<button class="btn primary notification-demo" 
        data-type="success" 
        data-message="Operation completed successfully!">
    Show Success Message
</button>

<button class="btn danger notification-demo" 
        data-type="error" 
        data-message="An error occurred. Please try again.">
    Show Error Message
</button>
```

### JavaScript

```javascript
//====> Button Click Handler <====//
Phenix('.notification-demo').on('click', isClicked => {
    // Get notification data from the clicked element
    let type = isClicked.target.getAttribute('data-type'),
        message = isClicked.target.getAttribute('data-message');
    
    // Create and show the notification
    Phenix(document).notifications({
        type: type,
        message: message,
        duration: 3000,
        position: 'top, center'
    });
});
```

### Form Submission Notification

This example demonstrates how to show a notification after a form is submitted, providing feedback to the user about the submission status.

### HTML

```html
<!-- Contact Form -->
<form id="contact-form" class="pdy-15">
    <div class="form-control mb-15">
        <input type="text" name="name" placeholder="Your Name" required>
    </div>
    <div class="form-control mb-15">
        <input type="email" name="email" placeholder="Your Email" required>
    </div>
    <div class="form-control mb-15">
        <textarea name="message" placeholder="Your Message" required></textarea>
    </div>
    <button type="submit" class="btn primary">Send Message</button>
</form>
```

### JavaScript

```javascript
//====> Form Submission Handler <====//
Phenix('#contact-form').on('submit', event => {
    // Prevent default form submission
    event.preventDefault();
    
    // In a real application, you would send the form data to a server here
    // For this example, we'll just simulate a successful submission
    
    // Show a success notification
    Phenix(document).notifications({
        type: 'success',
        message: 'Your message has been sent successfully!',
        duration: 4000,
        position: 'top, center'
    });
    
    // Reset the form
    event.target.reset();
});
```

## Options Reference

<figure>

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `type` | string | `normal` | Notification type: `normal`, `success`, `error`, `warning` |
| `message` | string | `''` | Content of the notification |
| `duration` | number | `3000` | Time in milliseconds before notification disappears |
| `position` | string | `bottom, start` | Position format: "Y, X" (Y: top/center/bottom, X: start/center/end) |
| `icon` | boolean | `true` | Whether to show an icon based on notification type |
| `close` | boolean | `true` | Whether to show a close button |

<figcaption>
Notification Component Options
</figcaption>

</figure>

## Styling Customization

You can customize the appearance of notifications by overriding the default CSS classes:

- `.px-notifications` - The container for all notifications
- `.px-item` - Individual notification items

### CSS

```css
/*====> Custom Notification Styling <====*/
.px-notifications .px-item {
    /* Customize notification box */
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 15px 20px;
}

/* Success notification */
.px-notifications .px-item.success {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
}

/* Error notification */
.px-notifications .px-item.error {
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
}

/* Warning notification */
.px-notifications .px-item.warning {
    background-color: #fff3cd;
    border-color: #ffeeba;
    color: #856404;
}
```

## Accessibility Considerations

For better accessibility, consider the following practices:

1. Use clear and concise messages in notifications
2. Ensure sufficient color contrast for text
3. Provide enough time for users to read notifications
4. Consider using `role="alert"` for important notifications
5. Ensure notifications can be dismissed by keyboard users

## Best Practices

1. **Be Concise**: Keep notification messages short and to the point
2. **Be Specific**: Clearly communicate what happened or what action is needed
3. **Use Appropriate Types**: Use the right notification type for the message context
4. **Position Strategically**: Place notifications where they won't interfere with important content
5. **Reasonable Duration**: Set duration based on message length and importance
6. **Don't Overuse**: Avoid showing too many notifications at once
7. **Provide Actions**: When appropriate, include action buttons within notifications
