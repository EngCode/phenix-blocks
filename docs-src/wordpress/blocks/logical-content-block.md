# Logical Content Block

## Overview

The Logical Content Block is a powerful conditional content component in the Phenix Design System that allows you to display or hide content based on specific conditions. This block enables you to create dynamic, personalized user experiences by showing different content to different users based on their login status, user roles, device type, time of day, and other criteria. Currently in its experimental phase, the Logical Content Block is being continuously improved with additional logical conditions and customization options.

<!-- Image placeholder for Logical Content Block -->

## Key Features

- Conditional content display based on user login status
- Support for user role-based content visibility
- Ability to nest any other blocks within the logical container
- Simple interface for setting visibility conditions
- Seamless integration with WordPress user system
- Support for membership and subscription plugins
- Preview options to test different visibility states

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Logical Content" or find it in the "Phenix Blocks" category
3. Add the Logical Content Block to your page
4. Set the visibility conditions in the block sidebar
5. Add any blocks you want inside the Logical Content Block
6. Preview your page to test the conditional display

## Block Settings

### User Status Conditions

| Option | Description |
|--------|-------------|
| Visibility Mode | Choose between "Show to" or "Hide from" modes |
| User Status | Select user status (Logged-in Users, Visitors, or All Users) |

### User Role Conditions

| Option | Description |
|--------|-------------|
| User Roles | Select specific user roles (Administrator, Editor, Author, etc.) |
| Role Logic | Choose between "Any of selected roles" or "All of selected roles" |

### Advanced Conditions

| Option | Description |
|--------|-------------|
| Device Type | Show/hide based on device (Desktop, Tablet, Mobile) |
| Time Range | Show/hide based on specific time of day |
| Date Range | Show/hide based on date range |
| Referrer | Show/hide based on traffic source |

### Fallback Content

| Option | Description |
|--------|-------------|
| Show Fallback | Enable/disable alternative content for users who don't meet the conditions |
| Fallback Message | Custom message or content to show when conditions aren't met |

## Examples

### Basic Login-Only Content

Content that only appears for logged-in users:

```html
<!-- wp:phenix/logical-content {"visibilityMode":"show","userStatus":"logged-in"} -->
<div class="wp-block-phenix-logical-content" data-visibility-mode="show" data-user-status="logged-in">
  <!-- wp:heading -->
  <h2>Welcome Back!</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>Thank you for logging in. Here's your personalized dashboard.</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:buttons -->
  <div class="wp-block-buttons">
    <!-- wp:button -->
    <div class="wp-block-button"><a class="wp-block-button__link" href="/account">View Your Account</a></div>
    <!-- /wp:button -->
  </div>
  <!-- /wp:buttons -->
</div>
<!-- /wp:phenix/logical-content -->
```

### Visitor-Only Content

Content that only appears for non-logged-in visitors:

```html
<!-- wp:phenix/logical-content {"visibilityMode":"show","userStatus":"visitor"} -->
<div class="wp-block-phenix-logical-content" data-visibility-mode="show" data-user-status="visitor">
  <!-- wp:phenix/group {"padding":"md","backgroundColor":"#f0f8ff","borderRadius":"md"} -->
  <div class="px-group pdy-15 pdx-15 bg-color radius-md" style="--bg-color:#f0f8ff">
    <!-- wp:heading {"level":3} -->
    <h3>Join Our Community</h3>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Create an account to access exclusive content and features.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons -->
    <div class="wp-block-buttons">
      <!-- wp:button -->
      <div class="wp-block-button"><a class="wp-block-button__link" href="/register">Register Now</a></div>
      <!-- /wp:button -->
      
      <!-- wp:button {"className":"is-style-outline"} -->
      <div class="wp-block-button is-style-outline"><a class="wp-block-button__link" href="/login">Login</a></div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
  </div>
  <!-- /wp:phenix/group -->
</div>
<!-- /wp:phenix/logical-content -->
```

### Admin-Only Content

Content that only appears for administrators:

```html
<!-- wp:phenix/logical-content {"visibilityMode":"show","userStatus":"logged-in","userRoles":["administrator"]} -->
<div class="wp-block-phenix-logical-content" data-visibility-mode="show" data-user-status="logged-in" data-user-roles="administrator">
  <!-- wp:phenix/group {"padding":"sm","backgroundColor":"#fff8e1","borderRadius":"sm","borderColor":"#ffd54f","borderWidth":"1px"} -->
  <div class="px-group pdy-10 pdx-10 bg-color radius-sm border-solid" style="--border-width:1px;--border-color:#ffd54f;--bg-color:#fff8e1">
    <!-- wp:heading {"level":4} -->
    <h4>Admin Notice</h4>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>This message is only visible to administrators. The site needs maintenance scheduled for tonight at 2 AM.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons -->
    <div class="wp-block-buttons">
      <!-- wp:button {"backgroundColor":"#ff9800"} -->
      <div class="wp-block-button"><a class="wp-block-button__link has-background" style="background-color:#ff9800" href="/wp-admin/site-health.php">View Site Health</a></div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
  </div>
  <!-- /wp:phenix/group -->
</div>
<!-- /wp:phenix/logical-content -->
```

### Content with Fallback

Content with alternative display for users who don't meet the conditions:

```html
<!-- wp:phenix/logical-content {"visibilityMode":"show","userStatus":"logged-in","userRoles":["subscriber","customer"],"showFallback":true} -->
<div class="wp-block-phenix-logical-content" data-visibility-mode="show" data-user-status="logged-in" data-user-roles="subscriber,customer" data-show-fallback="true">
  <!-- Primary content for subscribers and customers -->
  <div class="logical-primary-content">
    <!-- wp:heading -->
    <h2>Premium Content</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Thank you for being a premium member. Here's your exclusive content.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:embed {"url":"https://example.com/premium-video"} /-->
  </div>
  
  <!-- Fallback content for other users -->
  <div class="logical-fallback-content">
    <!-- wp:heading -->
    <h2>Premium Content Preview</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>This content is available to premium members only. Upgrade your account to access.</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons -->
    <div class="wp-block-buttons">
      <!-- wp:button -->
      <div class="wp-block-button"><a class="wp-block-button__link" href="/upgrade">Upgrade Now</a></div>
      <!-- /wp:button -->
    </div>
    <!-- /wp:buttons -->
  </div>
</div>
<!-- /wp:phenix/logical-content -->
```

### Device-Specific Content

Content that displays differently based on device type:

```html
<!-- wp:phenix/logical-content {"visibilityMode":"show","deviceType":"desktop"} -->
<div class="wp-block-phenix-logical-content" data-visibility-mode="show" data-device-type="desktop">
  <!-- wp:paragraph -->
  <p>This content is optimized for desktop viewing.</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:columns -->
  <div class="wp-block-columns">
    <!-- Desktop-optimized multi-column layout -->
  </div>
  <!-- /wp:columns -->
</div>
<!-- /wp:phenix/logical-content -->

<!-- wp:phenix/logical-content {"visibilityMode":"show","deviceType":"mobile"} -->
<div class="wp-block-phenix-logical-content" data-visibility-mode="show" data-device-type="mobile">
  <!-- wp:paragraph -->
  <p>This content is optimized for mobile viewing.</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:group -->
  <div class="wp-block-group">
    <!-- Mobile-optimized single-column layout -->
  </div>
  <!-- /wp:group -->
</div>
<!-- /wp:phenix/logical-content -->
```

## Common Use Cases

### Membership Content Protection

Protect premium content for paid members only:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:heading {"level":2} -->
  <h2>Premium Resources</h2>
  <!-- /wp:heading -->
  
  <!-- wp:phenix/logical-content {"visibilityMode":"show","userStatus":"logged-in","userRoles":["member","premium_member"],"showFallback":true} -->
  <div class="wp-block-phenix-logical-content" data-visibility-mode="show" data-user-status="logged-in" data-user-roles="member,premium_member" data-show-fallback="true">
    <!-- Premium member content -->
    <div class="logical-primary-content">
      <!-- wp:phenix/grid-row -->
      <div class="px-row">
        <!-- Premium resource items -->
      </div>
      <!-- /wp:phenix/grid-row -->
    </div>
    
    <!-- Non-member fallback -->
    <div class="logical-fallback-content">
      <!-- wp:phenix/group {"padding":"md","backgroundColor":"#f9f9f9","borderRadius":"md","textAlign":"center"} -->
      <div class="px-group pdy-15 pdx-15 bg-color radius-md tx-align-center" style="--bg-color:#f9f9f9">
        <!-- wp:heading {"level":3} -->
        <h3>Premium Content Locked</h3>
        <!-- /wp:heading -->
        
        <!-- wp:paragraph -->
        <p>This content is available to premium members only.</p>
        <!-- /wp:paragraph -->
        
        <!-- wp:buttons {"contentJustification":"center"} -->
        <div class="wp-block-buttons is-content-justification-center">
          <!-- wp:button -->
          <div class="wp-block-button"><a class="wp-block-button__link" href="/pricing">View Membership Options</a></div>
          <!-- /wp:button -->
        </div>
        <!-- /wp:buttons -->
      </div>
      <!-- /wp:phenix/group -->
    </div>
  </div>
  <!-- /wp:phenix/logical-content -->
</div>
<!-- /wp:phenix/container -->
```

### Contextual Navigation

Show different navigation options based on user status:

```html
<!-- wp:phenix/group {"padding":"sm","backgroundColor":"#f5f5f5"} -->
<div class="px-group pdy-10 pdx-10 bg-color" style="--bg-color:#f5f5f5">
  <!-- Logged-in user navigation -->
  <!-- wp:phenix/logical-content {"visibilityMode":"show","userStatus":"logged-in"} -->
  <div class="wp-block-phenix-logical-content" data-visibility-mode="show" data-user-status="logged-in">
    <!-- wp:navigation -->
    <!-- User account navigation items -->
    <!-- /wp:navigation -->
  </div>
  <!-- /wp:phenix/logical-content -->
  
  <!-- Visitor navigation -->
  <!-- wp:phenix/logical-content {"visibilityMode":"show","userStatus":"visitor"} -->
  <div class="wp-block-phenix-logical-content" data-visibility-mode="show" data-user-status="visitor">
    <!-- wp:navigation -->
    <!-- Public navigation items with login/register -->
    <!-- /wp:navigation -->
  </div>
  <!-- /wp:phenix/logical-content -->
</div>
<!-- /wp:phenix/group -->
```

## Best Practices

1. **Clear User Experience**: Ensure that the user experience remains coherent regardless of which conditional content is displayed

2. **Fallback Content**: Always provide meaningful fallback content when restricting access to certain user groups

3. **Testing**: Test your conditional content with different user accounts and device types to ensure it works as expected

4. **Performance**: Be mindful that conditional content still loads for all users but is hidden with CSS, so keep performance in mind

5. **Nesting**: Avoid deeply nesting multiple Logical Content Blocks as it can become difficult to manage and debug

6. **Mobile Consideration**: When using device-specific conditions, ensure that all users have access to critical functionality regardless of device

7. **Security**: Remember that Logical Content Block provides visual hiding only and is not a security measure; sensitive data should be protected at the server level

8. **Documentation**: Document your conditional content strategy for other content editors to understand the logic

## Related Blocks

- [Container Block](./container-block.md) - For positioning logical content within layouts
- [Group Block](./group-block.md) - For organizing content within logical blocks
- [Dynamic Theme Part](./dynamic-theme-part.md) - For creating reusable template parts with conditional logic
- [Custom Code Block](./custom-code-block.md) - For implementing custom conditional logic

