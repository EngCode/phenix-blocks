# Counter Utilities

## Overview

The Phenix Counter Utilities provide interactive number manipulation features that enhance user interfaces with animated counters and number input controls. These utilities are perfect for statistics displays, quantity selectors, and any interface that requires numerical interaction.

## Animated Counter

The Animated Counter creates a counting animation effect that increments from zero to a target number. This is commonly used for statistics, achievements, or any numerical data that benefits from visual emphasis.

### Basic Usage

```html
<span class="px-counter">1500</span>
<span class="px-counter">75%</span>
<span class="px-counter">$2000</span>
```

The counter automatically detects numbers and symbols, separating them appropriately. The animation starts when the element enters the viewport.

### How It Works

1. When initialized, the counter extracts the numerical value and any symbols
2. The element is prepared with the appropriate data attributes
3. When the element enters the viewport, the counting animation begins
4. The animation increments from zero to the target number

### Configuration

You can configure the counter using data attributes:

```html
<span class="px-counter" data-value="1500" data-symbol="+" data-duration="2000">1500+</span>
```

| Attribute | Description |
|-----------|-------------|
| `data-value` | The target number to count to (automatically extracted if not specified) |
| `data-symbol` | Any symbol to display with the number (automatically extracted if not specified) |
| `data-duration` | Duration of the animation in milliseconds (default varies based on value) |

## Number Input Controller

The Number Input Controller enhances standard number inputs with increment and decrement buttons, making it easier for users to adjust values.

### Basic Usage

```html
<div class="px-counter-input">
  <button class="decrease-btn">-</button>
  <input type="number" min="0" max="100" value="1" data-step="1">
  <button class="increase-btn">+</button>
</div>
```

### Configuration

The Number Input Controller can be configured using standard HTML input attributes:

| Attribute | Description |
|-----------|-------------|
| `min` | Minimum allowed value (defaults to 0) |
| `max` | Maximum allowed value (defaults to 99999) |
| `data-step` | Step value for increments/decrements (defaults to 1) |
| `value` | Initial value |

### Styling

You can customize the appearance of the counter input to match your design:

```css
.px-counter-input {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.px-counter-input input {
  width: 50px;
  text-align: center;
  border: none;
  padding: 8px 0;
}

.px-counter-input button {
  background: #f5f5f5;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
}

.px-counter-input button:hover {
  background: #e0e0e0;
}
```

## Examples

### Statistics Display

```html
<div class="stats-container">
  <div class="stat-item">
    <span class="px-counter">1500</span>
    <p>Happy Customers</p>
  </div>
  <div class="stat-item">
    <span class="px-counter">95%</span>
    <p>Satisfaction Rate</p>
  </div>
  <div class="stat-item">
    <span class="px-counter">24/7</span>
    <p>Customer Support</p>
  </div>
</div>
```

### Product Quantity Selector

```html
<div class="product-controls">
  <label for="quantity">Quantity:</label>
  <div class="px-counter-input">
    <button class="decrease-btn">-</button>
    <input id="quantity" type="number" min="1" max="100" value="1" data-step="1">
    <button class="increase-btn">+</button>
  </div>
</div>
```

### Donation Amount Selector

```html
<div class="donation-form">
  <h3>Choose Donation Amount</h3>
  <div class="px-counter-input">
    <button class="decrease-btn">-</button>
    <input type="number" min="5" max="1000" value="25" data-step="5">
    <button class="increase-btn">+</button>
  </div>
  <span class="currency-symbol">$</span>
</div>
```

## Best Practices

- Use animated counters sparingly to avoid overwhelming the user
- Ensure counter values are meaningful and provide context
- For number inputs, choose appropriate min, max, and step values
- Consider adding labels to clarify what the numbers represent
- Test counter animations on different devices to ensure smooth performance

## Browser Compatibility

The Counter Utilities are compatible with all modern browsers and use standard DOM manipulation techniques.
