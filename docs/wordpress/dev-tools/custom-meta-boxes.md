# Custom Meta Fields

## Overview

The Custom Meta Fields feature in the Phenix Design System provides a user-friendly interface for creating and managing additional data fields for your WordPress content without writing code. These custom fields allow you to extend the standard WordPress content model with specialized data such as pricing information, contact details, feature lists, icons, and much more. With support for various field types and associations with posts, taxonomies, and users, custom meta fields become a powerful tool for creating rich, structured content.

## Key Features

- **No-code creation** of custom fields through an intuitive interface
- **Multiple field types** including text, number, media, select, and more
- **Association with posts, taxonomies, and users** for flexible data storage
- **Field validation** to ensure data integrity
- **Conditional display** based on post type or taxonomy
- **Integration with block editor** for seamless content creation
- **Data available for queries and filtering** in dynamic blocks

## Understanding Custom Meta Fields

Meta fields (sometimes called custom fields or meta boxes) are additional pieces of data that can be stored alongside your WordPress content. While WordPress posts and pages come with standard fields like title and content, custom meta fields allow you to add structured data specific to your needs.

Common uses for custom meta fields include:

- Price, duration, or quantity for products/services
- Contact information for team members
- Location data for events or businesses
- Feature lists for products or services
- Icons or additional images for categories
- Technical specifications for products
- Rating or priority values for content
- Custom attributes for filtering and sorting

## Accessing Custom Meta Fields

To access the Custom Meta Fields management interface:

1. In your WordPress admin, navigate to **Phenix Design System**
2. Select the **Data Collection** tab
3. Click on the **Meta Fields** sub-tab

<!-- Image placeholder for Custom Meta Fields Interface -->

## Creating a New Custom Meta Field

To create a new custom meta field:

1. Access the Meta Fields interface as described above
2. Click the **Add New Meta Field** button
3. Fill in the following information in the form:

### Basic Settings

| Setting | Description |
|---------|-------------|
| Field Label | The display name for the field (e.g., "Product Price") |
| Field Name | A unique identifier (lowercase, no spaces) |
| Field Type | The type of data this field will store |
| Description | Brief explanation of the field's purpose (shown to content editors) |

### Field Types

The Phenix Design System supports various field types to accommodate different data needs:

| Field Type | Description | Example Use Case |
|------------|-------------|------------------|
| Text | Single line of text | Short titles, names |
| Textarea | Multiple lines of text | Descriptions, excerpts |
| Number | Numeric values | Prices, quantities, ratings |
| Select | Dropdown with predefined options | Status, priority levels |
| Checkbox | Boolean true/false value | Featured status, availability |
| Radio | Single selection from multiple options | Size options, ratings |
| Media | Image or file upload | Product images, icons |
| Color | Color picker | Theme colors, category colors |
| Date | Date picker | Event dates, availability periods |
| URL | Website address | External links, social profiles |
| Email | Email address | Contact information |
| Phone | Phone number | Contact information |

### Field Location

Specify where this custom field should appear:

| Location | Description |
|----------|-------------|
| Post Types | Select which post types should have this field |
| Taxonomies | Select which taxonomies should have this field |
| Users | Add this field to user profiles |

### Advanced Settings

| Setting | Description |
|---------|-------------|
| Required | Whether the field must be filled in |
| Default Value | Pre-populated value for new content |
| Placeholder | Helper text shown in empty fields |
| Help Text | Additional instructions for content editors |
| Validation | Rules to ensure data integrity (e.g., min/max values) |

4. Click **Save Meta Field**

<!-- Image placeholder for Adding a Custom Meta Field -->

## Managing Custom Meta Fields

The Meta Fields interface displays all your custom fields with the following options:

| Option | Description |
|--------|-------------|
| Edit | Modify the field settings |
| Delete | Remove the field (warning: this will delete all data stored in this field) |

## Using Custom Meta Fields

Once created, your custom meta fields will be available when editing content:

### For Post Types

1. When editing a post of the associated type, you'll see your custom fields in a meta box
2. Fill in the fields with the appropriate data
3. Save the post to store the meta data

### For Taxonomies

1. When adding or editing a term in the associated taxonomy, you'll see your custom fields
2. Fill in the fields with the appropriate data
3. Save the term to store the meta data

### For Users

1. When editing a user profile, you'll see your custom fields
2. Fill in the fields with the appropriate data
3. Save the profile to store the meta data

## Displaying Custom Meta Field Data

There are several ways to display data from custom meta fields in your content:

### In Templates

When creating templates in the Site Editor, you can use the Post Meta or Term Meta blocks to display custom field data.

### In Dynamic Query Block

The Dynamic Query Block can display meta field data in its templates:

1. Add a Dynamic Query Block to your page
2. Edit the item template
3. Add a Post Meta or Term Meta block
4. Select your custom field from the dropdown

### In Custom Blocks

Many Phenix blocks support displaying meta field data, including:

- Text Elements Block (can display meta field values)
- Media Element Block (can display media from meta fields)
- Icon Element Block (can use meta field values for icon selection)

## Filtering and Sorting by Meta Fields

Custom meta fields can be used for filtering and sorting content:

### In Dynamic Query Block

1. Add a Dynamic Query Block to your page
2. In the block settings, find the "Meta Query" section
3. Select your meta field and set filter conditions
4. Optionally, use meta fields for sorting in the "Order By" settings

## Best Practices

1. **Use descriptive labels** that clearly indicate the field's purpose

2. **Choose appropriate field types** for the data being stored

3. **Add helpful descriptions** to guide content editors

4. **Limit the number of fields** to avoid overwhelming the editing interface

5. **Use validation** to ensure data integrity

6. **Group related fields** logically

7. **Consider performance** when using many meta fields for filtering

## Common Meta Field Examples

### Product Features

- **Field Label**: Product Features
- **Field Type**: Textarea
- **Location**: Products (Custom Post Type)
- **Description**: List the key features of this product, one per line

### Team Member Contact

- **Field Label**: Email Address
- **Field Type**: Email
- **Location**: Team (Custom Post Type)
- **Description**: Team member's contact email

### Category Icon

- **Field Label**: Category Icon
- **Field Type**: Media
- **Location**: Categories (Taxonomy)
- **Description**: Upload an icon representing this category

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Field not appearing | Verify the field is associated with the correct post type or taxonomy |
| Data not saving | Check for validation errors or permission issues |
| Field showing in wrong location | Edit the field and adjust the location settings |
| Cannot delete field | Ensure you have administrator privileges |
| Data not displaying in templates | Verify the correct meta key is being used |

## Related Features

- [Custom Post Types](./custom-post-types.md)
- [Custom Taxonomies](./custom-taxonomies.md)
- [Dynamic Query Block](../blocks/dynamic-query-block.md)

