# Users Query Block

## Overview

The Users Query Block is a specialized component in the Phenix Design System that allows you to fetch and display WordPress users on your site. This block enables you to create dynamic listings of authors, team members, contributors, or any registered users with extensive filtering, sorting, and display options. The Users Query Block is particularly useful for creating team directories, author showcases, member listings, and other user-based content structures.

<!-- Image placeholder for Users Query Block -->

## Key Features

- Query WordPress users with advanced filtering options
- Flexible sorting and ordering capabilities
- Multiple display layouts (grid, list, table, cards)
- Customizable user templates with dynamic data fields
- Display user metadata, roles, and custom fields
- Link generation to author archives or custom profile pages
- Avatar and social media integration
- Role-based filtering and display

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Users Query" or find it in the "Phenix Blocks" category
3. Add the Users Query Block to your page
4. Configure the query settings to fetch your desired users
5. Customize the display layout and user templates
6. Adjust styling options as needed

## Block Settings

### Query Options

| Option | Description |
|--------|-------------|
| Number of Users | Set how many users to display |
| Offset | Skip a specific number of users from the beginning of the results |
| Include/Exclude | Specify specific users to include or exclude by ID |
| Order By | Sort results by various criteria (name, registered date, post count, etc.) |
| Order | Set ascending or descending order |

### Filter Options

| Option | Description |
|--------|-------------|
| Roles | Filter users by specific roles (Administrator, Editor, Author, etc.) |
| Search | Filter users by keyword search |
| Meta Query | Filter users by custom user meta values |
| Has Published | Filter users who have published content |

### Layout Options

| Option | Description |
|--------|-------------|
| Display Type | Choose between grid, list, table, or cards layout |
| Columns | Set the number of columns for grid layouts |
| Gap | Control the spacing between users |
| Show Avatar | Display the user's avatar/profile picture |
| Avatar Size | Control the size of user avatars |
| Show Name | Display the user's display name |
| Show Bio | Display the user's biographical info |
| Show Role | Display the user's role |
| Show Post Count | Display the number of posts published by the user |

### Social Media Options

| Option | Description |
|--------|-------------|
| Show Social Links | Display the user's social media links |
| Social Networks | Select which social networks to display |
| Social Icons Style | Choose the style of social media icons |

### Style Options

| Option | Description |
|--------|-------------|
| User Card Color | Set the color of user card text |
| User Card Background | Set the background color of user cards |
| Avatar Border | Add borders around user avatars |
| Avatar Border Radius | Control the shape of user avatars (square, rounded, circle) |
| Card Padding | Add internal spacing within user cards |
| Card Margin | Add spacing between user cards |
| Card Border | Add borders with custom color, width, and style |
| Card Border Radius | Add rounded corners to user cards |

## Examples

### Basic Team Grid

A simple grid of team members:

```html
<!-- wp:phenix/users-query {"numberOfUsers":6,"roles":["author","editor","administrator"],"displayType":"grid","columns":3,"showAvatar":true,"avatarSize":"large","showName":true,"showBio":true,"showRole":true} -->
<div class="wp-block-phenix-users-query px-users-query-block">
  <div class="px-row row-md">
    <!-- Query users will be rendered here dynamically -->
    <div class="px-col col-12 col-md-6 col-lg-4 mb-30">
      <div class="user-card tx-align-center">
        <div class="user-avatar mb-15">
          <img src="https://example.com/avatar1.jpg" alt="John Doe" class="avatar avatar-150">
        </div>
        <h3 class="user-name mb-5">John Doe</h3>
        <div class="user-role mb-10">Editor</div>
        <div class="user-bio">
          <p>John is an experienced editor with over 10 years in digital publishing.</p>
        </div>
      </div>
    </div>
    <div class="px-col col-12 col-md-6 col-lg-4 mb-30">
      <div class="user-card tx-align-center">
        <div class="user-avatar mb-15">
          <img src="https://example.com/avatar2.jpg" alt="Jane Smith" class="avatar avatar-150">
        </div>
        <h3 class="user-name mb-5">Jane Smith</h3>
        <div class="user-role mb-10">Administrator</div>
        <div class="user-bio">
          <p>Jane leads our technical team and oversees all website operations.</p>
        </div>
      </div>
    </div>
    <!-- Additional users would be rendered here -->
  </div>
</div>
<!-- /wp:phenix/users-query -->
```

### Authors List with Stats

A list of authors with post counts and social links:

```html
<!-- wp:phenix/users-query {"numberOfUsers":5,"roles":["author"],"orderBy":"post_count","order":"desc","displayType":"list","showAvatar":true,"avatarSize":"medium","showName":true,"showBio":true,"showPostCount":true,"showSocialLinks":true} -->
<div class="wp-block-phenix-users-query px-users-query-block">
  <div class="users-list">
    <!-- Query users will be rendered here dynamically -->
    <div class="user-item flexbox gap-20 mb-30">
      <div class="user-avatar" style="flex:0 0 100px">
        <img src="https://example.com/avatar1.jpg" alt="Michael Johnson" class="avatar avatar-100">
      </div>
      <div class="user-content">
        <h3 class="user-name mb-5">Michael Johnson</h3>
        <div class="user-meta mb-10">
          <span class="user-role">Author</span>
          <span class="post-count">42 Articles</span>
        </div>
        <div class="user-bio mb-15">
          <p>Michael writes about technology and digital marketing trends.</p>
        </div>
        <div class="social-links">
          <a href="https://twitter.com/michaeljohnson" class="social-link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="https://linkedin.com/in/michaeljohnson" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    <!-- Additional users would be rendered here -->
  </div>
</div>
<!-- /wp:phenix/users-query -->
```

### Styled Team Cards

Team member cards with custom styling:

```html
<!-- wp:phenix/users-query {"numberOfUsers":4,"roles":["team_member"],"displayType":"grid","columns":2,"showAvatar":true,"avatarSize":"large","showName":true,"showRole":true,"showBio":true,"showSocialLinks":true,"userCardBackground":"#f9f9f9","userCardColor":"#333333","cardBorderRadius":"md","cardPadding":"md","avatarBorderRadius":"circle"} -->
<div class="wp-block-phenix-users-query px-users-query-block">
  <div class="px-row row-md">
    <!-- Query users will be rendered here dynamically -->
    <div class="px-col col-12 col-md-6 mb-30">
      <div class="user-card pdy-15 pdx-15 bg-color radius-md" style="--bg-color:#f9f9f9;--text-color:#333333">
        <div class="user-header flexbox align-items-center mb-15">
          <div class="user-avatar mr-15">
            <img src="https://example.com/avatar1.jpg" alt="Sarah Williams" class="avatar avatar-100 radius-circle">
          </div>
          <div class="user-title">
            <h3 class="user-name mb-5">Sarah Williams</h3>
            <div class="user-role">Marketing Director</div>
          </div>
        </div>
        <div class="user-bio mb-15">
          <p>Sarah leads our marketing team with over 15 years of experience in digital marketing and brand strategy.</p>
        </div>
        <div class="social-links">
          <a href="https://twitter.com/sarahwilliams" class="social-link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="https://linkedin.com/in/sarahwilliams" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="mailto:sarah@example.com" class="social-link" aria-label="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>
    <!-- Additional users would be rendered here -->
  </div>
</div>
<!-- /wp:phenix/users-query -->
```

### User Table

A table of users with sortable columns:

```html
<!-- wp:phenix/users-query {"numberOfUsers":10,"displayType":"table","showAvatar":true,"avatarSize":"small","showName":true,"showRole":true,"showPostCount":true,"showRegistered":true} -->
<div class="wp-block-phenix-users-query px-users-query-block">
  <table class="users-table">
    <thead>
      <tr>
        <th class="avatar-column">Avatar</th>
        <th class="name-column sortable" data-sort="name">Name</th>
        <th class="role-column sortable" data-sort="role">Role</th>
        <th class="posts-column sortable" data-sort="posts">Posts</th>
        <th class="registered-column sortable" data-sort="registered">Registered</th>
      </tr>
    </thead>
    <tbody>
      <!-- Query users will be rendered here dynamically -->
      <tr class="user-row">
        <td class="avatar-column">
          <img src="https://example.com/avatar1.jpg" alt="User Name" class="avatar avatar-40">
        </td>
        <td class="name-column">John Doe</td>
        <td class="role-column">Editor</td>
        <td class="posts-column">24</td>
        <td class="registered-column">Jan 15, 2023</td>
      </tr>
      <!-- Additional users would be rendered here -->
    </tbody>
  </table>
</div>
<!-- /wp:phenix/users-query -->
```

## Common Use Cases

### Team Page

Create a comprehensive team or staff directory:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:heading {"level":2} -->
  <h2>Our Team</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Meet the talented individuals who make our company great.</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:phenix/users-query {"roles":["team_member","administrator"],"meta_query":{"relation":"AND","queries":[{"key":"department","value":"leadership","compare":"="}]},"displayType":"grid","columns":3,"showAvatar":true,"avatarSize":"large","showName":true,"showRole":true,"showBio":true,"showSocialLinks":true} -->
  <div class="wp-block-phenix-users-query px-users-query-block">
    <!-- Leadership team members would be rendered here -->
  </div>
  <!-- /wp:phenix/users-query -->
  
  <!-- wp:heading {"level":3} -->
  <h3>Department Heads</h3>
  <!-- /wp:heading -->
  
  <!-- wp:phenix/users-query {"roles":["team_member"],"meta_query":{"relation":"AND","queries":[{"key":"department","value":"department_head","compare":"="}]},"displayType":"grid","columns":4,"showAvatar":true,"showName":true,"showRole":true} -->
  <div class="wp-block-phenix-users-query px-users-query-block">
    <!-- Department heads would be rendered here -->
  </div>
  <!-- /wp:phenix/users-query -->
</div>
<!-- /wp:phenix/container -->
```

### Author Showcase

Highlight the top contributors to your blog:

```html
<!-- wp:phenix/group {"padding":"md","backgroundColor":"#f9f9f9","marginBottom":"lg"} -->
<div class="px-group pdy-15 pdx-15 bg-color mb-30" style="--bg-color:#f9f9f9">
  <!-- wp:heading {"level":2} -->
  <h2>Meet Our Writers</h2>
  <!-- /wp:heading -->
  
  <!-- wp:phenix/users-query {"roles":["author","editor"],"orderBy":"post_count","order":"desc","numberOfUsers":3,"displayType":"list","showAvatar":true,"avatarSize":"medium","showName":true,"showBio":true,"showPostCount":true} -->
  <div class="wp-block-phenix-users-query px-users-query-block">
    <!-- Top authors would be rendered here -->
  </div>
  <!-- /wp:phenix/users-query -->
</div>
<!-- /wp:phenix/group -->

<!-- wp:phenix/dynamic-query {"contentType":"post"} -->
<div class="wp-block-phenix-dynamic-query px-query-block">
  <!-- Recent posts would be rendered here -->
</div>
<!-- /wp:phenix/dynamic-query -->
```

## Best Practices

1. **Privacy Consideration**: Be mindful of user privacy when displaying user information, especially for non-public-facing roles

2. **Performance Optimization**: Limit the number of users queried, especially on sites with many registered users

3. **Relevant Information**: Only display information that is relevant to the context and purpose of the user listing

4. **Consistent Styling**: Maintain consistent styling for user cards or listings across your site

5. **Responsive Design**: Ensure your user displays adapt well to different screen sizes

6. **Role-Based Display**: Consider showing different information based on user roles (more details for authors, less for subscribers)

7. **Fallback Images**: Provide fallback images for users without custom avatars

8. **Sorting Options**: Offer meaningful sorting options that help visitors find the right users

## Related Blocks

- [Dynamic Query Block](./dynamic-query-block.md) - For querying and displaying posts by specific authors
- [Container Block](./container-block.md) - For positioning user queries within layouts
- [Grid Row Block](./grid-row-block.md) - For creating custom grid layouts with user cards
- [Taxonomies Query Block](./taxonomies-query-block.md) - For querying and displaying taxonomy terms

