---
title: "Alerts"
date: 2025-01-04
---

## Alerts

Learn how to build an alert components with Phenix Design System css utilities with live examples ready for quick usage.

## Alert Component

in the example below we will use the [PDS Utilities](http://phenix.localhost/test/utilities/) to build a standard alert component with multiple status to send a message to the user alerting him for something.

```
<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-gray mb-15">
    <strong>Alert : </strong> with gray background and the global color of the document.
</div>
<!-- // Alert -->

<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-warning mb-15">
    <strong>Alert : </strong> with warning background and the global color of the document.
</div>
<!-- // Alert -->

<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-success mb-15">
    <strong>Alert : </strong> with success background and the global color of the document.
</div>
<!-- // Alert -->

<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-info mb-15">
    <strong>Alert : </strong> with info background and the global color of the document.
</div>
<!-- // Alert -->

<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-danger mb-15">
    <strong>Alert : </strong> with danger background and the global color of the document.
</div>
<!-- // Alert -->
```

## Colorful Alerts

in the example below we will use the [PDS Utilities](http://phenix.localhost/test/utilities/) to build an alert component with multiple colorful status to send a message to the user alerting him for something.

```
<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-dark mb-15 color-white">
    <strong>Alert : </strong> with dark background and the white color for its text.
</div>
<!-- // Alert -->

<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-warning mb-15 color-dark">
    <strong>Alert : </strong> with warning background and the white color for its text.
</div>
<!-- // Alert -->

<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-success mb-15 color-white">
    <strong>Alert : </strong> with success background and the white color for its text.
</div>
<!-- // Alert -->

<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-info mb-15 color-white">
    <strong>Alert : </strong> with info background and the white color for its text.
</div>
<!-- // Alert -->

<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-danger mb-15 color-white">
    <strong>Alert : </strong> with danger background and the white color for its text.
</div>
<!-- // Alert -->
```

## Alert w/ Dismissal

in the example below we will use the [PDS Utilities](http://phenix.localhost/test/utilities/) to build an alert component that can be removed from a closing button using the `.remove-item` helper.

```
<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-offwhite-warning mb-15 flexbox align-between">
    <p class="mb-0"><strong>Alert : </strong> with warning background and the white color for its text.</p>
    <a href="javascript:void(0);" class="remove-item fas fa-times color-inherit"></a>
</div>
<!-- // Alert -->

<!-- Alert -->
<div class="alert-box pdy-15 pdx-20 border-r-sm bg-danger mb-15 color-white flexbox align-between">
    <p class="mb-0"><strong>Alert : </strong> with warning background and the white color for its text.</p>
    <a href="javascript:void(0);" class="remove-item fas fa-times color-inherit"></a>
</div>
<!-- // Alert -->
```

## Alert w/ icons

in the example below we will use the [PDS Utilities](http://phenix.localhost/test/utilities/) to build an alert component with icons and colorful status to send a message to the user alerting him for something.

```
<!-- Alert -->
<div class="alert-box pdy-10 pdx-15 border-r-sm bg-offwhite-warning mb-15 flexbox align-between align-center-y">
    <p class="mb-0">
        <i class="far fa-exclamation-triangle fs-20 me-10"></i>
        Alert :  with warning background and the white color for its text.
    </p>
    <a href="javascript:void(0);" class="remove-item fas fa-times color-inherit"></a>
</div>
<!-- // Alert -->

<!-- Alert -->
<div class="alert-box pdy-10 pdx-15 border-r-sm bg-danger mb-15 color-white flexbox align-between align-center-y">
    <p class="mb-0">
        <i class="far fa-exclamation-circle fs-20 me-10"></i>
        Alert :  with danger background and the white color for its text.
    </p>
    <a href="javascript:void(0);" class="remove-item fas fa-times color-inherit"></a>
</div>
<!-- // Alert -->
```
