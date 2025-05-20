# Custom Menu Locations

## Overview

The Custom Menu Locations feature in the Phenix Design System allows you to create and manage navigation menu locations throughout your WordPress site. These menu locations can be used with both classic WordPress menus and the PDS Responsive Menu Block, giving you complete flexibility in how you structure and display your site's navigation.

## Key Features

- **Create unlimited menu locations** for different parts of your site
- **Assign menus** to specific locations through the WordPress Menu interface
- **Use with Responsive Menu Block** for advanced menu styling and behavior
- **Simple management interface** in the Phenix admin area
- **Fully compatible** with WordPress core menu functionality

## Accessing Menu Locations

To access the Menu Locations management interface:

1. In your WordPress admin, navigate to **Phenix Design System**
2. Select the **Data Collection** tab
3. Click on the **Menu Locations** sub-tab

![Menu Locations Interface](../../../assets/images/wordpress/menu-locations-interface.png)

## Creating a New Menu Location

To create a new menu location:

1. Access the Menu Locations interface as described above
2. Enter a descriptive name for your menu location in the input field (e.g., "Main Navigation", "Footer Menu", "Mobile Menu")
3. Click the **Add New** button
4. Your new menu location will appear in the list below

## Managing Menu Locations

The Menu Locations interface displays all your custom menu locations with the following options:

| Option | Description |
|--------|-------------|
| Edit | Modify the name of the menu location |
| Delete | Remove the menu location (this will not delete any menus assigned to this location) |

## Assigning Menus to Locations

Once you've created custom menu locations, you can assign WordPress menus to them:

1. Go to **Appearance > Menus** in your WordPress admin
2. Create a new menu or select an existing one
3. In the **Menu Settings** section at the bottom, you'll see checkboxes for all your custom menu locations
4. Check the locations where you want this menu to appear
5. Click **Save Menu**

![Assigning Menus to Locations](../../../assets/images/wordpress/assigning-menus.png)

## Using Menu Locations with Responsive Menu Block

The Phenix Responsive Menu Block can display menus from your custom locations:

1. Add a Responsive Menu Block to your page or template
2. In the block settings sidebar, find the **Menu Source** option
3. Select **Menu Location** as the source
4. Choose your custom menu location from the dropdown
5. Configure other menu settings as needed

## Using Menu Locations in Theme Templates

For theme developers, you can use WordPress core functions to display menus from your custom locations in theme templates:

```php
<?php
// Display a menu from a custom location
wp_nav_menu([
    'theme_location' => 'your-custom-location-slug',
    'container'      => 'nav',
    'container_class'=> 'site-navigation',
    'menu_class'     => 'menu',
    'fallback_cb'    => false
]);
?>
```

## Best Practices

1. **Use descriptive names** for menu locations that clearly indicate their purpose and position

2. **Create separate locations** for different device types if your navigation structure varies significantly between desktop and mobile

3. **Limit the number of locations** to what you actually need to avoid confusion

4. **Document your menu structure** for clients or team members who will be managing the site

5. **Consider user experience** when planning your menu locations and structure

## Common Menu Location Patterns

| Location Name | Purpose |
|---------------|--------|
| Primary Navigation | Main site navigation, typically in the header |
| Secondary Navigation | Additional navigation, often smaller and above the main menu |
| Footer Navigation | Links in the footer, typically simpler than the main navigation |
| Mobile Navigation | Specific navigation for mobile devices, may be simplified |
| Social Links | Menu of social media links, often displayed as icons |
| User Account | Navigation for logged-in users with account-related links |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Menu location not appearing in Menus screen | Refresh the page or clear your browser cache |
| Menu not displaying on the front end | Verify a menu is assigned to the location and the theme supports custom menu locations |
| Changes to menu not reflecting on site | Clear any caching plugins or server-side caching |
| Menu location name too long | Keep names concise but descriptive for better usability |

## Related Features

- [Responsive Menu Block](../blocks/responsive-menu-block.md)
- [Block Patterns & Templates](./block-patterns-templates.md)
