# Files Upload

## Overview

The Files Upload component in the Phenix Design System provides an enhanced file input experience with features like drag-and-drop, preview capabilities, and customizable styling. It's designed to make file uploads more intuitive and user-friendly compared to standard HTML file inputs.

## Basic Usage

The Files Upload component offers two main types: standard and advanced. The type is defined by the `data-uploader` attribute or through the JavaScript initialization options.

### Standard Uploader

To create a standard file upload component:

```html
<!-- Standard Uploader (default) -->
<div class="px-uploader" data-uploader="standard" data-placeholder="File Upload" data-btn="Browse">
    <input type="file">
</div>
```

The standard uploader inherits styles from the `.form-control` class and displays:
- A text area showing the file name or placeholder text
- A "Browse" button (or custom text specified by `data-btn`)

### Advanced Uploader (Drag and Drop)

For a more interactive drag-and-drop experience:

```html
<!-- Advanced Uploader -->
<div class="px-uploader" data-uploader="advanced" data-placeholder="Drag and Drop your file to upload">
    <input type="file">
</div>
```

Initialize the components with JavaScript:

```javascript
// Initialize with default options (type will be determined by data-uploader attribute)
Phenix('.px-uploader').uploader();

// Or specify the type explicitly
Phenix('.px-uploader').uploader({ type: 'standard' });
// For advanced mode
Phenix('.px-uploader').uploader({ type: 'advanced' });
```

## Features

### Multiple File Upload

Enable multiple file selection by adding the `multiple` attribute to the input or using the `data-multiple` attribute on the container:

```html
<!-- Advanced Uploader with Multiple Files -->
<div class="px-uploader" data-uploader="advanced" data-placeholder="Drag and Drop your files to upload">
    <input type="file" multiple>
</div>

<!-- Alternative with data-multiple -->
<div class="px-uploader" data-uploader="advanced" data-placeholder="Drag and Drop your files to upload" data-multiple="true">
    <input type="file">
</div>
```

The component will handle multiple file selections based on these attributes.

### File Type Restrictions

Restrict the types of files that can be uploaded using the standard HTML `accept` attribute:

```html
<!-- Standard Uploader for Images Only -->
<div class="px-uploader" data-uploader="standard" data-placeholder="Select an Image" data-btn="Browse">
    <input type="file" accept="image/*">
</div>
```

### Custom Placeholder Text

Set custom placeholder text using the `data-placeholder` attribute:

```html
<!-- Advanced Uploader with Custom Placeholder -->
<div class="px-uploader" data-uploader="advanced" data-placeholder="Drop your files here or click to browse">
    <input type="file">
</div>
```

### Preview Modes

The advanced uploader automatically adds preview capabilities for images and videos:

```html
<!-- Advanced Uploader with Preview -->
<div class="px-uploader" data-uploader="advanced" data-placeholder="Upload an image or video">
    <input type="file" accept="image/*,video/*">
</div>
```

When an image is selected, the component adds the `image-mode` class and sets a background image. For videos, it adds the `video-mode` class and creates a video player.

## Customization

### CSS Variables

The uploader component inherits CSS variables from the form controls system, which you can customize:

```css
.px-uploader {
  /* Size variables */
  --padding: 15px;
  --height: 42px;
  --text-size: 14px;
  
  /* Color variables */
  --color: var(--component-tx-lvl-1);
  --background: var(--component-bg-lvl-1);
  --border-size: 1px;
  --border-color: rgba(0, 0, 0, 0.1);
}
```

### Size Variants

You can use size modifier classes that come from the form control system:

```html
<!-- Small uploader -->
<div class="px-uploader small" data-uploader="standard" data-placeholder="Small uploader" data-btn="Browse">
  <input type="file">
</div>

<!-- Large uploader -->
<div class="px-uploader large" data-uploader="standard" data-placeholder="Large uploader" data-btn="Browse">
  <input type="file">
</div>
```

### Status Colors

You can use status color classes to indicate different states:

```html
<!-- Success state -->
<div class="px-uploader success" data-uploader="standard" data-placeholder="File uploaded successfully" data-btn="Browse">
  <input type="file">
</div>

<!-- Error state -->
<div class="px-uploader error" data-uploader="standard" data-placeholder="Upload failed" data-btn="Browse">
  <input type="file">
</div>
```

## JavaScript API

The Files Upload component must be manually initialized. The component will handle the file upload interface based on the specified type and options.

### Initialization

```javascript
// Basic initialization (uses data-uploader attribute to determine type)
Phenix('.px-uploader').uploader();

// With explicit type option
Phenix('.px-uploader').uploader({
  type: 'standard' // or 'advanced'
});

// With source URL (for pre-populated media)
Phenix('.px-uploader').uploader({
  type: 'advanced',
  src: '/path/to/media.jpg'
});
```

### Available Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| type | String | 'standard' | Uploader type: 'standard' or 'advanced' |
| src | String | undefined | Optional default media source URL |

### Available Data Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| data-uploader | String | 'standard' | Uploader type: 'standard' or 'advanced' |
| data-placeholder | String | 'Drag and Drop your file to upload' | Custom placeholder text |
| data-btn | String | 'Browse' | Text for the browse button (standard uploader only) |
| data-multiple | Boolean | false | Enable multiple file selection (alternative to the 'multiple' attribute) |

### CSS Classes

The component uses these CSS classes for styling and functionality:

| Class | Description |
|-------|-------------|
| `px-uploader` | Main container class for the uploader component |
| `form-control` | Applied to standard uploader for form styling |
| `highlight` | Added when dragging files over the uploader |
| `image-mode` | Added when an image file is selected (shows image preview) |
| `video-mode` | Added when a video file is selected (shows video player) |
| `px-done` | Added after initialization to prevent re-initialization |

### Handling File Selection

The component automatically handles basic file selection events. For standard uploaders, it updates the placeholder with the selected file name. For advanced uploaders, it creates a file list and handles image/video previews.

You can also listen for file selection events:

```javascript
// Listen for file selection
Phenix('.px-uploader input[type="file"]').on('change', (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    console.log(`Selected ${files.length} file(s)`);
    
    // Access file information
    Array.from(files).forEach(file => {
      console.log(`File: ${file.name}, Size: ${file.size}, Type: ${file.type}`);
    });
  }
});
```

### Custom File Upload with AJAX

Implement custom file upload with AJAX:

```javascript
// Custom AJAX upload
Phenix('.px-uploader input[type="file"]').on('change', async (event) => {
  const files = event.target.files;
  if (files.length > 0) {
    const formData = new FormData();
    
    // Add files to form data
    Array.from(files).forEach(file => {
      formData.append('files[]', file);
    });
    
    // Get the uploader container
    const uploader = Phenix(event.target).ancestor('.px-uploader');
    
    try {
      // Send files to server
      const response = await fetch('/upload-endpoint', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      console.log('Upload successful:', result);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  }
});
```

## Accessibility

The Files Upload component maintains accessibility features:

- Keyboard navigation for file selection
- Proper labeling for screen readers
- Focus states for keyboard users

## Browser Compatibility

The Files Upload component is compatible with all modern browsers that support the File API and JavaScript ES6 features.
