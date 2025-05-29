# Users Query Block

## Overview

The Users Query Block is a server-side rendered component in the Phenix Design System that allows you to fetch and display WordPress users on your site. This block enables you to create dynamic listings of authors, team members, contributors, or any registered users with flexible grid layouts and slider functionality. The block works by querying WordPress users based on roles and other criteria, then displaying them using template parts from your theme.

## Key Features

- **Role-Based Filtering**: Query users by specific WordPress user roles
- **Template Part Integration**: Display users using theme template parts
- **Flexible Grid Layout**: Configure responsive grid layouts with customizable columns
- **Slider Functionality**: Convert grid layouts into interactive sliders
- **Server-Side Rendering**: Content is rendered on the server for optimal performance and SEO
- **Published Content Filter**: Option to show only users who have published content
- **Sorting Options**: Order users by registration date, name, or other criteria

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Users Query" or find it in the "Phenix Blocks" category
3. Add the Users Query block to your page
4. In the General Setting panel, select the user roles you want to display
5. Choose a template part from your theme to use for displaying each user
6. Configure additional query options like order, maximum items, and whether to show only users with published content
7. Enable Grid Mode if you want to display results in a grid layout
8. Configure columns and responsive behavior as needed
9. Enable the Slider Mode if you want the grid to function as a slider

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| Columns Number | Set the number of columns for different screen sizes (mobile, tablet, laptop, desktop) |
| Grid Options | Configure grid layout settings including alignment and spacing |
| Sizes Options | Configure padding, margin, and other size-related properties |

### Sidebar Controls

#### General Setting Panel

| Option | Description |
|--------|-------------|
| User Roles | Select which user roles to include in the query (multiple selection supported) |
| Card Template | Select a template part from your theme to use for displaying each user |
| Order | Set ascending (Oldest) or descending (Newest) order |
| OrderBy | Sort results by display name, registration date, or other criteria |
| Max Items | Set how many users to display |
| Has Posts | Option to show only users who have published content |
| Grid Mode | Enable grid layout for user display |
| Slider Mode | Convert the grid layout into an interactive slider |

#### Slider Options Panel

Only visible when Slider Mode is enabled:

| Option | Description |
|--------|-------------|
| Slides Per View | Set the number of slides visible at once |
| Slides Per Group | Set how many slides to move at once when navigating |
| Space Between | Control the gap between slider items |
| Navigation | Enable/disable navigation arrows |
| Pagination | Enable/disable pagination dots |
| Loop | Enable/disable infinite loop |
| Autoplay | Enable/disable automatic sliding |

### Technical Implementation

The Users Query block is implemented with server-side rendering for optimal performance and SEO. The PHP rendering function handles the query and display of WordPress users:

#### Query Construction

The block builds WordPress user queries based on the selected roles and configuration options:

1. **Role Selection**: The block queries users based on the selected user roles.

2. **Published Content Filter**: When the "Has Posts" option is enabled, only users who have published content are displayed.

3. **Sorting Options**: Users can be sorted by display name, registration date, or other criteria in ascending or descending order.

#### Template Part Integration

The block uses WordPress template parts for displaying users:

```php
get_template_part("template-parts/".$block_attributes["template_part"], null, $user);
```

This approach allows for flexible and reusable templates that can be customized in your theme.

## Implementation Examples

The Users Query block can be used in various ways based on the configuration options available. Below are descriptions of common implementations based on the actual block functionality.

### Team Members Grid

A grid layout displaying team members:

- **Configuration**:
  - User Roles: Select "Author" and "Editor" roles
  - Template Part: Select a team member card template from your theme
  - Grid Mode: Enabled
  - Columns: 3 columns on desktop, 2 on tablet, 1 on mobile
  - OrderBy: Set to "display_name" for alphabetical listing

### Authors Slider

A slider showcasing blog authors:

- **Configuration**:
  - User Roles: Select "Author" role
  - Template Part: Select an author profile template
  - Grid Mode: Enabled
  - Slider Mode: Enabled
  - Navigation: Enabled
  - Pagination: Enabled
  - Has Posts: Enabled to show only authors with published content
  - OrderBy: Set to "post_count" to prioritize most active authors

### Contributors Listing

A simple listing of site contributors:

- **Configuration**:
  - User Roles: Select "Contributor" role
  - Template Part: Select a simple user template
  - Grid Mode: Enabled for multi-column layout
  - Max Items: Limit to a specific number of contributors
  - Has Posts: Disabled to show all contributors regardless of publishing status

## Best Practices

1. **Template Part Design**: Create specialized template parts for different types of user displays (team members, authors, contributors)

2. **Role Selection**: Choose appropriate user roles based on the purpose of your display (authors for blog contributors, editors for team members)

3. **Privacy Consideration**: Be mindful of user privacy when designing template parts - only include information users have explicitly made public

4. **Performance Optimization**: Use the Max Items setting to limit the number of users displayed, especially for sites with many users

5. **Grid Responsiveness**: Configure responsive column settings appropriate for your content and layout - more columns on desktop, fewer on mobile

6. **Slider Implementation**: Only enable the slider functionality when it enhances the user experience, such as for featured team member showcases

7. **Template Part Reusability**: Create reusable template parts that can work across multiple user query blocks for consistency

8. **Published Content Filter**: Use the Has Posts option strategically - enable it when you want to show only active content creators, disable it for comprehensive team listings

## Related Blocks

- [Dynamic Query Block](./dynamic-query-block.md) - For querying and displaying posts by specific authors
- [Container Block](./container-block.md) - For positioning user queries within layouts
- [Grid Row Block](./grid-row-block.md) - For creating custom grid layouts with user cards
- [Taxonomies Query Block](./taxonomies-query-block.md) - For querying and displaying taxonomy terms

