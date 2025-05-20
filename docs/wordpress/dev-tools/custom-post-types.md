# Custom Post Types

## Overview

The Custom Post Types feature in the Phenix Design System provides a user-friendly interface for creating and managing custom content types in WordPress without writing code. This powerful tool allows you to extend WordPress beyond standard posts and pages, enabling you to create specialized content structures for services, products, team members, testimonials, or any other content type your site requires. With comprehensive options for customization and integration with the block editor, custom post types become a seamless part of your WordPress content ecosystem.

## Key Features

- **No-code creation** of custom post types through an intuitive interface
- **Comprehensive configuration options** for labels, capabilities, and display settings
- **Default block pattern support** for consistent content structure
- **Full integration** with WordPress block editor and site editor
- **Archive and single template support** for custom display layouts
- **REST API integration** for headless WordPress implementations
- **Taxonomy association** for content organization

## Understanding Custom Post Types

Custom Post Types (CPTs) are specialized content types in WordPress that extend beyond the default posts and pages. They allow you to create content with specific structures and purposes, such as:

- Services
- Products
- Team Members
- Testimonials
- Projects
- Events
- Case Studies
- Properties (real estate)
- Recipes

Each custom post type can have its own set of fields, taxonomies, templates, and management interfaces.

## Accessing Custom Post Types

To access the Custom Post Types management interface:

1. In your WordPress admin, navigate to **Phenix Design System**
2. Select the **Data Collection** tab
3. Click on the **Post Types** sub-tab

![Custom Post Types Interface](../../../assets/images/wordpress/cpt-interface.png)

## Creating a New Custom Post Type

To create a new custom post type:

1. Access the Post Types interface as described above
2. Click the **Add New Post Type** button
3. Fill in the following information in the form:

### Basic Settings

| Setting | Description |
|---------|-------------|
| Post Type Name | A unique identifier (lowercase, no spaces) |
| Singular Label | How a single item is referred to (e.g., "Service") |
| Plural Label | How multiple items are referred to (e.g., "Services") |
| Description | Brief explanation of the post type's purpose |

### Advanced Settings

| Setting | Description |
|---------|-------------|
| Public | Whether the post type is publicly queryable |
| Show in Menu | Whether to show in admin menu |
| Menu Position | Order in the admin menu |
| Menu Icon | Dashicon or custom icon for the menu item |
| Supports | Features the post type supports (title, editor, thumbnail, etc.) |
| Has Archive | Whether to generate an archive page |
| Hierarchical | Whether posts can have parent-child relationships |
| Exclude from Search | Whether to exclude from search results |
| Show in REST | Whether to include in the WordPress REST API |

### Labels

Customize all labels used throughout the WordPress admin:

- Add New
- Edit
- View
- Search
- Not Found
- And more...

### Default Content Pattern

Select a block pattern to use as the default starting content when creating a new item of this post type. This is particularly useful for maintaining consistent content structure.

4. Click **Save Post Type**

![Adding a Custom Post Type](../../../assets/images/wordpress/add-cpt.png)

## Managing Custom Post Types

The Post Types interface displays all your custom post types with the following options:

| Option | Description |
|--------|-------------|
| Edit | Modify the post type settings |
| Delete | Remove the post type (warning: this will not delete content, but will make it inaccessible) |

## Using Custom Post Types

Once created, your custom post types will appear in the WordPress admin menu. To work with them:

1. Click on the custom post type name in the admin menu
2. Add, edit, and manage content just like regular posts or pages
3. If you selected a default content pattern, new items will start with that content structure

## Creating Templates for Custom Post Types

With the WordPress Site Editor, you can create custom templates for your post types:

### Archive Templates

1. Go to **Appearance > Editor** (Site Editor)
2. Click on the **Templates** tab
3. Click **Add New** and select **Archive**
4. Choose your custom post type from the list
5. Design your archive template using blocks

### Single Templates

1. Go to **Appearance > Editor** (Site Editor)
2. Click on the **Templates** tab
3. Click **Add New** and select **Single**
4. Choose your custom post type from the list
5. Design your single post template using blocks

## Using Default Content Patterns

One of the powerful features of Phenix Custom Post Types is the ability to assign a default block pattern to new content:

1. First, create a block pattern as described in [Block Patterns & Templates](./block-patterns-templates.md)
2. When creating or editing your custom post type, select this pattern in the "Default Content Pattern" dropdown
3. Now, whenever you create a new item of this post type, it will start with this pattern pre-loaded
4. You can then customize the content while maintaining the structure

This feature is particularly useful for:
- Maintaining consistent content structure
- Saving time when creating new content
- Ensuring all required sections are included
- Training content creators on expected content format

## Best Practices

1. **Use descriptive names** that clearly indicate the post type's purpose

2. **Choose appropriate icons** to make the admin menu intuitive

3. **Only enable features you need** (supports) to keep the interface clean

4. **Create matching taxonomies** for content organization (see [Custom Taxonomies](./custom-taxonomies.md))

5. **Design custom templates** for optimal display of your content

6. **Use default patterns** for consistent content structure

7. **Consider URL structure** when setting slugs and archive settings

## Common Custom Post Type Examples

### Services Post Type

- **Name**: services
- **Singular**: Service
- **Plural**: Services
- **Supports**: Title, Editor, Thumbnail, Excerpt
- **Taxonomies**: Service Categories, Service Tags
- **Default Pattern**: Service layout with icon, description, and features list

### Team Members Post Type

- **Name**: team
- **Singular**: Team Member
- **Plural**: Team
- **Supports**: Title, Editor, Thumbnail
- **Taxonomies**: Departments, Positions
- **Default Pattern**: Team member card with photo, bio, and social links

### Testimonials Post Type

- **Name**: testimonials
- **Singular**: Testimonial
- **Plural**: Testimonials
- **Supports**: Title, Editor, Thumbnail
- **Taxonomies**: Sources, Ratings
- **Default Pattern**: Quote layout with client info and rating

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 errors on single posts | Flush permalinks by going to Settings > Permalinks and clicking Save |
| Post type not appearing in menu | Check the "Show in Menu" setting is enabled |
| Can't find archive template | Ensure "Has Archive" is enabled for the post type |
| Default pattern not loading | Verify the pattern exists and is correctly selected |
| Conflicts with existing post types | Choose a different post type name that doesn't conflict |

## Related Features

- [Custom Taxonomies](./custom-taxonomies.md)
- [Custom Meta Fields](./custom-meta-boxes.md)
- [Block Patterns & Templates](./block-patterns-templates.md)
