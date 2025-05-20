# Custom Taxonomies

## Overview

The Custom Taxonomies feature in the Phenix Design System provides a user-friendly interface for creating and managing content classification systems in WordPress without writing code. Taxonomies allow you to organize and categorize your content in meaningful ways, such as by topic, location, status, or any other classification that makes sense for your site. With comprehensive options for customization and integration with custom post types, taxonomies become a powerful tool for content organization and navigation.

## Key Features

- **No-code creation** of custom taxonomies through an intuitive interface
- **Comprehensive configuration options** for labels, capabilities, and display settings
- **Association with multiple post types** for flexible content organization
- **Hierarchical or non-hierarchical** taxonomy structures
- **Full integration** with WordPress block editor and site editor
- **REST API integration** for headless WordPress implementations
- **Template support** for custom taxonomy archives

## Understanding Taxonomies

Taxonomies are systems of classification that help organize content. WordPress comes with two default taxonomies:

- **Categories**: Hierarchical groupings for posts (like folders)
- **Tags**: Non-hierarchical keywords for posts

Custom taxonomies extend this concept to any type of classification you need, such as:

- Service Types
- Locations/Regions
- Industries/Sectors
- Product Features
- Project Status
- Team Departments
- Event Types
- Skill Levels
- Content Formats

Each taxonomy can be applied to one or more post types, allowing for flexible content organization.

## Accessing Custom Taxonomies

To access the Custom Taxonomies management interface:

1. In your WordPress admin, navigate to **Phenix Design System**
2. Select the **Data Collection** tab
3. Click on the **Taxonomies** sub-tab

![Custom Taxonomies Interface](../../../assets/images/wordpress/taxonomies-interface.png)

## Creating a New Custom Taxonomy

To create a new custom taxonomy:

1. Access the Taxonomies interface as described above
2. Click the **Add New Taxonomy** button
3. Fill in the following information in the form:

### Basic Settings

| Setting | Description |
|---------|-------------|
| Taxonomy Name | A unique identifier (lowercase, no spaces) |
| Singular Label | How a single term is referred to (e.g., "Service Type") |
| Plural Label | How multiple terms are referred to (e.g., "Service Types") |
| Description | Brief explanation of the taxonomy's purpose |

### Advanced Settings

| Setting | Description |
|---------|-------------|
| Public | Whether the taxonomy is publicly queryable |
| Show in Menu | Whether to show in admin menu |
| Hierarchical | Whether terms can have parent-child relationships (like categories) |
| Show Admin Column | Whether to show a column in the post list table |
| Show in REST | Whether to include in the WordPress REST API |
| Show Tag Cloud | Whether terms can be displayed in a tag cloud widget |
| Show in Quick Edit | Whether to show in the quick/bulk edit panel |

### Associated Post Types

Select which post types this taxonomy should be associated with. This can include:

- WordPress default post types (posts, pages)
- Custom post types you've created

### Labels

Customize all labels used throughout the WordPress admin:

- Add New
- Edit
- View
- Search
- Not Found
- And more...

4. Click **Save Taxonomy**

![Adding a Custom Taxonomy](../../../assets/images/wordpress/taxonomies-add.png)

## Managing Custom Taxonomies

The Taxonomies interface displays all your custom taxonomies with the following options:

| Option | Description |
|--------|-------------|
| Edit | Modify the taxonomy settings |
| Delete | Remove the taxonomy (warning: this will delete all terms in this taxonomy) |

## Using Custom Taxonomies

Once created, your custom taxonomies will be available in the WordPress admin. To work with them:

### Adding Terms

1. In the WordPress admin menu, find your taxonomy name
2. Click on it to view the terms management screen
3. Add new terms just like you would add categories or tags
4. For hierarchical taxonomies, you can set parent-child relationships

### Assigning Terms to Content

1. When editing a post of an associated post type, you'll see your taxonomy in the sidebar
2. Select existing terms or add new ones
3. For hierarchical taxonomies, you'll see checkboxes
4. For non-hierarchical taxonomies, you'll see a tag-like interface

## Important: Post Type Association

When creating a new taxonomy, it's crucial to associate it with the appropriate post types. If you create a new taxonomy and later want to associate it with additional post types:

1. Edit the custom post type
2. In the post type settings, find the "Taxonomies" section
3. Add your custom taxonomy to the list
4. Save the post type

This two-way association ensures that your taxonomy appears when editing posts of that type.

## Creating Templates for Taxonomy Archives

With the WordPress Site Editor, you can create custom templates for your taxonomy archives:

1. Go to **Appearance > Editor** (Site Editor)
2. Click on the **Templates** tab
3. Click **Add New** and select **Taxonomy**
4. Choose your custom taxonomy from the list
5. Design your taxonomy archive template using blocks

## Using Taxonomies in Queries

Taxonomies are powerful for filtering content. You can use them with the Dynamic Query Block:

1. Add a Dynamic Query Block to your page
2. In the block settings, find the "Taxonomy Filter" section
3. Select your taxonomy and the terms to filter by
4. Configure other query settings as needed

## Best Practices

1. **Use descriptive names** that clearly indicate the taxonomy's purpose

2. **Choose hierarchical for category-like** taxonomies with parent-child relationships

3. **Choose non-hierarchical for tag-like** taxonomies with flat structures

4. **Limit the number of taxonomies** to avoid overwhelming content editors

5. **Associate taxonomies with relevant post types** only

6. **Consider URL structure** when setting slugs

7. **Create default terms** for required taxonomies to ensure proper classification

## Common Taxonomy Examples

### Service Types Taxonomy

- **Name**: service_types
- **Singular**: Service Type
- **Plural**: Service Types
- **Hierarchical**: Yes
- **Associated Post Types**: Services

### Locations Taxonomy

- **Name**: locations
- **Singular**: Location
- **Plural**: Locations
- **Hierarchical**: Yes (for region/city hierarchy)
- **Associated Post Types**: Services, Team, Events

### Skills Taxonomy

- **Name**: skills
- **Singular**: Skill
- **Plural**: Skills
- **Hierarchical**: No
- **Associated Post Types**: Team, Projects

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Taxonomy not appearing for post type | Verify the post type has the taxonomy associated in its settings |
| 404 errors on taxonomy archives | Flush permalinks by going to Settings > Permalinks and clicking Save |
| Terms not saving | Check user capabilities and ensure the taxonomy is properly registered |
| Hierarchical taxonomy showing as tags | Verify the "Hierarchical" setting is enabled |
| Taxonomy terms not appearing in REST API | Ensure "Show in REST" is enabled for the taxonomy |

## Related Features

- [Custom Post Types](./custom-post-types.md)
- [Custom Meta Fields](./custom-meta-boxes.md)
- [Dynamic Query Block](../blocks/dynamic-query-block.md)
- [Taxonomies Query Block](../blocks/taxonomies-query-block.md)
