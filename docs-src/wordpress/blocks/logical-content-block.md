# Logic Content Block

## Overview

The Logic Content Block is a server-side conditional content component in the Phenix Design System that allows you to display or hide content based on user login status. This block enables you to create dynamic, personalized user experiences by showing different content to different types of users. The content visibility is determined on the server when the page loads, making it more secure than client-side solutions.

## Key Features

- Server-side conditional content display based on user login status
- Three visibility options: All users, Users Only, or Visitors Only
- Ability to nest any other blocks within the logical container
- Simple interface for setting visibility conditions
- Seamless integration with WordPress user system
- Block naming support for better organization in the editor

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Logic Content" or find it in the "Phenix Blocks" category
3. Add the Logic Content Block to your page
4. Set the visibility condition in the block sidebar
5. Add any blocks you want inside the Logic Content Block
6. Preview your page to test the conditional display

## Block Settings

### Sidebar Controls

#### Logic Settings Panel

| Option | Description |
|--------|-------------|
| Show Only For | Select user visibility (All, Users Only, Visitors Only) |

### Technical Implementation

The Logic Content Block is implemented with server-side rendering in PHP. When the page loads, the block's content is conditionally rendered based on the user's login status:

```php
// Users Only Logic
if ($block_attributes['logic']['visibility'] === "users-only" && is_user_logged_in()) {
    echo $content;
}
// Visitors Only Logic
elseif ($block_attributes['logic']['visibility'] === "visitors-only" && !is_user_logged_in()) {
    echo $content;
}
// For All Users
elseif ($block_attributes['logic']['visibility'] === "" || $block_attributes['logic']['visibility'] === "all") {
    echo $content;
}
```

## Use Cases

### Member-Only Content

Display content exclusively for logged-in users:

- Member dashboards
- Account information
- Personalized recommendations
- User-specific settings

### Visitor-Only Content

Display content exclusively for non-logged-in visitors:

- Registration prompts
- Login forms
- Membership benefits
- Free trial offers

### Contextual Navigation

Show different navigation options based on user status:

- Account management links for logged-in users
- Login/register links for visitors

## Best Practices

1. **Clear User Experience**: Ensure that the user experience remains coherent regardless of which conditional content is displayed

2. **Alternative Content**: Consider creating separate Logic Content blocks for different user types rather than hiding content entirely

3. **Testing**: Test your conditional content by logging in and out to ensure it works as expected

4. **Security Awareness**: While the Logic Content Block uses server-side rendering for better security, sensitive data should still be protected through proper WordPress capabilities and roles

5. **Documentation**: Document your conditional content strategy for other content editors to understand the logic

6. **Naming**: Use the block's metadata naming feature to clearly identify the purpose of each logical block in the editor

## Related Blocks

- [Container Block](./container-block.md) - For positioning logical content within layouts
- [Group Block](./group-block.md) - For organizing content within logical blocks
- [Popup Modals Block](./popup-modals-block.md) - For content that requires user interaction to display

