---
title: "Form Controls"
date: 2025-01-04
---

## Form Controls

learn how to build and style all kind of forms controls elements like `input`, `select`, `textarea`, `checkbox, radio` buttons, etc and in this page we will take a tour in the standard controls.

## Overview

hello there, to get start and style your form controls you can do it by adding class-name `form-control` to the controller element and if you can't reach the control element in some case, you can use the group style by adding class-name `px-form` to any wrapper of the controls at any structure level.

you can see a simple example below of different default form controls `inputs, select, text-area` styled with class-name `form-control` and the layout view structured with [Flex-box grid](http://phenix.localhost/test/flexbox-grid/)

[HTML](#tab-1)

[CSS](#tab-2)

```
<!-- Grid -->
<div class="row gpx-15">
    <!-- Column -->
    <div class="col-12 col-md-6 col-lg-4 mb-15">
        <!-- Form Control -->
        <input type="text" placeholder="Text Control Example" class="form-control">
    </div>
    <!-- Column -->
    <div class="col-12 col-md-6 col-lg-4 mb-15">
        <!-- Form Control -->
        <input type="number" placeholder="Number Control Example" class="form-control">
    </div>
    <!-- Column -->
    <div class="col-12 col-md-6 col-lg-4 mb-15">
        <!-- Form Control -->
        <select class="form-control">
            <option value="">Select Example</option>
        </select>
    </div>
    <!-- Column -->
    <div class="col-12 mb-15">
        <!-- Form Control -->
        <textarea class="form-control" placeholder="Textarea Example"></textarea>
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->
```

```
.form-control {
    /*==== CSS Options ====*/
    --radius  : 4px;
    --padding : 15px;
    --txt-weight : var(--medium-weight);
    /*==== Size Options ====*/
    --height   : 42px;
    --txt-size : 15px;
    /*==== Colors Options ====*/
    --color : var(--dark-color);
    --box-shadow   : unset;
    --background   : #FFFFFF;
    --border-size  : 1px;
    --border-color : rgba(0,0,0, 0.1);
}
```

## Controls Sizes

the `.form-control` selector have preset multiple sizes for `height` which can be applied by adding any of `.tiny`, `.small`, `.large,` .`xlarge` class names and you can simply set a custom size through the css variables you can see in example of all sizes below, and you can resize the controls with infix of the breakpoint after the size : `.large-md` to make it large from medium screens and up so the pattern would be `.size-{breakpoint}`.

[HTML](#tab-3)

[CSS](#tab-4)

```
<!-- Form Control -->
<input type="text" placeholder="Tiny Control" class="form-control tiny">

<!-- Form Control -->
<input type="text" placeholder="Small Control" class="form-control small">

<!-- Form Control -->
<input type="text" placeholder="Normal Size Example" class="form-control">

<!-- Form Control -->
<input type="text" placeholder="Large Control" class="form-control large">

<!-- Form Control -->
<input type="text" placeholder="xLarge Control" class="form-control xlarge">
```

```
/*==== Custom Form Control Size ====*/
.form-control {
    --padding :  15px;
    --txt-weight : var(--medium-weight);
    --height   : 42px;
    --txt-size : 15px;
}
```

## Options Controls

with `.option-control` class name you can prepare a wrapper to be custom styled option control like `"checkbox"` and `"radio"` input types and by defining `data-type` it will take the style of the type you need you can know the types available from the table below , and you can see the examples.

#### Checkbox & Radio

#### Switchs & Buttons

<figure>

| Type | Description | Element |
| --- | --- | --- |
| `` `checkbox` `` | `data-type` attribute value for defining a `checkbox` style for the option control. | `` `.option-control` `` |
| `radio` | `data-type` attribute value for defining a `` `radio` `` style for the option control. | ``` `` `.option-control` `` ``` |
| `switch` | `data-type` attribute value for defining a `` `switch` `` style for the option control. | ``` `` `.option-control` `` ``` |
| `button` | `data-type` attribute value for defining a `` `button` `` style for the option control. | ``` `` `.option-control` `` ``` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>

[Checkbox](#tab-5)

[Switch](#tab-6)

[CSS](#tab-7)

```
<!-- Option Control [checkbox] -->
<label class="option-control" data-type="checkbox">
    <input type="checkbox" name="check-1">
    <span class="fas fa-check">Checkbox Example <sub>(unchecked)</sub></span>
</label>
<!-- Option Control [checkbox] -->

<!-- Option Control [radio-button] -->
<label class="option-control" data-type="radio">
    <input type="radio" name="radio-1">
    <span class="fas fa-circle">Radio Example <sub>(unchecked)</sub></span>
</label>
<!-- Option Control [radio-button] -->
```

```
<!-- Option Control [switch] -->
<label class="option-control" data-type="switch">
    Switch
    <input type="checkbox" name="check-1">
    <span class="switch"></span>
    Example
</label>
<!-- Option Control [switch] -->

<!-- Option Control [button] -->
<label class="option-control me-10" data-type="button">
    <input type="checkbox" name="radio-2">
    <span class="btn outline">Example</span>
</label>
<!-- Option Control [button] -->
```

```
/*==== CSS Options ====*/
.option-control {
    --radius  : 4px;
    --height  : 1.875rem;
    --text-size : 0.9375rem;
    --color : var(--gray-color);
    --color-active : var(--success-color);
}
```

## Inline Controls

in this section you can see an example for the form control as inline element with class name `.inline` added to the `.form-control` element.

```
<p>an Example of inline Form Control 
    <!-- Form Control -->
    <input type="text" placeholder="Tiny Control" class="form-control tiny inline ms-5 me-5">
    that can be part of any other block or inline-block element.
</p>
```

## Controls with icons

in this section you can learn how to add an icon for the form controller, and that can be done by creating a `wrapper` for the `.form-control` element and add to the wrapper class name `.control-icon` along side your icon classes from any font icon library in this example below we are using Font Awesome,

and you can reverse the icon position to the other side with `.icon-end` class name added to the `.control-icon` element

[HTML](#tab-8)

[CSS](#tab-9)

```
<!-- Control Wrapper -->
<div class="control-icon fas fa-user">
    <!-- Form Control -->
    <input type="text" placeholder="Normal Control" class="form-control">
</div>
<!-- // Control Wrapper -->

<!-- Reversed icon Position -->
<div class="control-icon far fa-calendar-alt icon-end">
    <!-- Form Control -->
    <input type="text" class="form-control">
</div>
<!-- // Reversed icon Position -->

<!-- Control icon with Status -->
<div class="control-icon far fa-calendar-alt icon-end success">
    <!-- Form Control -->
    <input type="text" placeholder="Status Example" class="form-control success">
</div>
<!-- Control icon with Status -->
```

```
/*==== CSS Options ====*/
.control-icon {
    --padding : 0.9375rem;
    --height  : 2.625rem;
    --text-size : 0.9375rem;
    --color : var(--dark-color);
    /*===> White-Space Fix for .form-control <===*/
    --white-space : calc(var(--padding)*2.4);
}
```

## Validation Status

in this section we will use the status classes for coloring form controls to send a message of `warning`, `error`, `success`, `disable` added to the `.form-control` element which can be used for validation purposes, you can learn and watch it in action from the example below.

```
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-6 col-md-4">
        <!-- Form Control -->
        <input type="text" placeholder="Error Example" class="form-control error">
        <!-- Messages -->
        <p class="fs-12 color-danger mt-5">Form Control with Error.</p>
    </div>
    <!-- Column -->
    <div class="col-6 col-md-4">
        <!-- Form Control -->
        <input type="text" placeholder="Warning Example" class="form-control warning">
        <!-- Messages -->
        <p class="fs-12 color-warning mt-5">Form Control with Warning.</p>
    </div>
    <!-- Column -->
    <div class="col-6 col-md-4">
        <!-- Form Control -->
        <input type="text" placeholder="Success Example" class="form-control success">
        <!-- Messages -->
        <p class="fs-12 color-success mt-5">Form Control with Success.</p>
    </div>
    <!-- Column -->
    <div class="col-6 col-md-4 mb-15">
        <!-- Form Control -->
        <input type="text" placeholder="Disabled Example" class="form-control disable" disabled>
    </div>
    <!-- Column -->
    <div class="col-6 col-md-4 mb-15">
        <!-- Control Wrapper -->
        <div class="control-icon fas fa-user error">
            <!-- Form Control -->
            <input type="text" placeholder="Control icon Example" class="form-control error">
        </div>
        <!-- // Control Wrapper -->
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->
```

## Fieldset and Groups

in this example below you can see in example for the `.form-control` elements inside a `fieldset` element build and styled with Phenix [Utilities](http://phenix.localhost/test/category/utilities/) classes, and another example for the `.px-form` group style controls.

[Example 01](#tab-10)

[Example 02](#tab-11)

```
<!-- Field Set -->
<fieldset class="w-max-360 pdx-20 pdb-20 mb-30 bg-white border-alpha-10 radius-gl">
    <!-- Fieldset Label -->
    <legend class="pdx-15 pdy-5 mb-5 bg-white strong-weight radius-gl">Fieldset Example :</legend>
    <!-- Form Control -->
    <label class="mb-5">First name : </label>
    <input type="text" value="" class="form-control small mb-20">
    <!-- Form Control -->
    <label class="mb-5">Last name:</label>
    <input type="text"value="" class="form-control small mb-20">
    <!-- Button -->
    <input type="submit" value="Submit" class="btn primary small miw-120">
</fieldset>
<!-- // Field Set -->
```

```
<!-- Field Set -->
<fieldset class="w-max-360 pdx-20 pdb-20 mb-30 bg-primary-offwhite border-none radius-gl px-form" data-size="small">
    <!-- Fieldset Label -->
    <legend class="pdx-15 pdy-5 mb-5 bg-inherit strong-weight radius-gl">Fieldset Example with .px-form :</legend>
    <!-- Form Control -->
    <label class="mb-5">First name :</label>
    <input type="text" value="" class="mb-15">
    <!-- Form Control -->
    <label class="mb-5">Last name :</label>
    <input type="text"value="" class="mb-20">
    <!-- Button -->
    <input type="submit" value="Submit" class="btn success small miw-120">
</fieldset>
<!-- // Field Set -->
```

## Options Table

a sheet table of all class names available in phenix for form controls.

<figure>

| Options | Description | Element |
| --- | --- | --- |
| `` `.form-control` `` | the Main Controller Style Class name | `` `<controls`> `` |
| `.px-form` | controls wrapper to style the controls that can't have `.from-control` on it. | `<Wrapper>` |
| `` `.tiny` `` | resize `.form-control` element to a tiny size. | ``` `` `<controls`> `` ``` |
| ``` `` `.small` `` ``` | resize `.form-control` element to a small size. | ``` `` `<controls`> `` ``` |
| ``` `` `.large` `` ``` | resize `.form-control` element to a large size. | ``` `` `<controls`> `` ``` |
| ```` ``` `` `.xlarge` `` ``` ```` | resize `.form-control` element to a xLarge size. | ``` `` `<controls`> `` ``` |
| ```` ``` `` `.size-{breakpoint}` `` ``` ```` | resize the .form-control element to the {size} from a specific breakpoint and up. | ``` `` `<controls`> `` ``` |
| `.control-icon` | a wrapper to add icon above the `.form-control` element. | `<Wrapper>` |
| `.inline` | making `.form-control` behave like `inline` element | ```` ``` `` `<controls`> `` ``` ```` |
| `.error` | coloring the value and the border with `Error` status color | ```` ``` `` `<controls`> `` ``` ```` |
| `.warning` | coloring the value and the border with `Warning` status color | ```` ``` `` `<controls`> `` ``` ```` |
| `.success` | coloring the value and the border with `Success` status color | ```` ``` `` `<controls`> `` ``` ```` |
| `.disable` | coloring the form control with gray `Disabled` style. | ```` ``` `` `<controls`> `` ``` ```` |
| `[data-size]` | resize a group of controls in `.px-form` wrapper and take the same sizes value. | `<px-form>` |
| `.icon-end` | reverse the icon position from direction start to the direction end | `<control-icon>` |
| `` `.option-control` `` | creating custom styled option \[checkbox/radio buttons\] controllers. | `<Wrapper>` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>
