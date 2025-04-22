---
title: "Form Validation"
date: 2025-01-04
---

## Form Validation

learn how to create a validation for any form controls with Phenix validation method.

## How it Works

Here’s how the Standard Default HTML form validation works :

- form validation is applied via CSS’s two pseudo-classes, `:invalid` and `:valid`, and the status class-names `.error`, `.success` whitch It applies to `<input>`, `<select>`, and `<textarea>` elements that have `.form-control` class-name.

- PDS scopes the `:invalid` and `:valid` styles to parent `.was-validated` class, usually applied to the `<form>`. Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted).

- To reset the appearance of the form (for instance, in the case of dynamic form submissions using AJAX), remove the `.was-validated` class from the `<form>` again after submission.

- Due to constraints in how CSS works, we cannot (at present) apply styles to a `<label>` that comes before a form control in the DOM without the help of custom JavaScript using the [colors utilties](http://phenix.localhost/test/colors/).

- All modern browsers support the [constraint validation API](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api), a series of JavaScript methods for validating form controls.

- Feedback messages may utilize the browser defaults (different for each browser, and unstylable via CSS) or our custom feedback styles with additional HTML and CSS.

- You may provide custom validity messages with `setCustomValidity` in JavaScript.

With that in mind, consider the following demos for our custom form validation styles, optional server-side classes, and browser defaults.

## Default Validation API

below you can find a demo for the Default html validation and see it in action try to submit the form with values in `.form-control` and without a value in others.

[HTML](#tab-1)

[Javascript](#tab-2)

```
<!-- Form -->
<form action="" class="row gp-15 default-validation">
    <!-- Column -->
    <div class="col-6 col-md-4 mb-15">
        <!-- Form Control -->
        <input type="text" placeholder="Required and A-Z only" class="form-control" pattern="[A-Za-z]+" name="demo-az"  required="">
    </div>
    <!-- Column -->
    <div class="col-6 col-md-4 mb-15">
        <!-- Form Control -->
        <input type="text" placeholder="Required and 0-9 only" class="form-control" pattern="[0-9]+" name="demo-num" required="">
    </div>
    <!-- Column -->
    <div class="col-6 col-md-4 mb-15">
        <button class="btn primary fluid">Submit Test</button>
    </div>
    <!-- // Column -->
</form>
<!-- // Form -->
```

```
//====> Validation Demo <====//
let input = Phenix('[name="demo-az"], [name="demo-num"]');

//====> Change Appearnce on invalid <====//
input.on('invalid', event => {
    //====> Get Current Element <====//
    let input = event.target,
        form  = Phenix(input).ancestor('form');
    //====> .Value Check. <====//
    if (input.validity.valueMissing) {
        input.setCustomValidity('Phenix Custom Requered Message.');
    }
    //====> .Pattern Check. <====//
    else if (input.validity.patternMismatch) {
        input.setCustomValidity('this input accept only letters from a-z.');
    }
    //====> Add Style Class to the Parent Form <====//
    Phenix(form).addClass('was-validated');
});

//====> Reset When New Value is Set <====//
input.on('input', event => {
    //====> Get Current Element <====//
    let input = event.target;
    //===> Reset Validation <===//
    input.setCustomValidity('');
    //====> Check for Validation <====//
    input.checkValidity();
});
```

<figure>

| API Function | Return Description | Type |
| --- | --- | --- |
| **`input.willValidate`** | `true` if the element will be validated when the form is submitted. | properties |
| **`~.validity.valueMissing`** | `true` if the element has no value but is a required field. | properties |
| **``**`~.validity.`**typeMismatch``** | `true` if the element's value is not in the correct syntax. | properties |
| ****``**`~.validity.patternMismatch`**``**** | `true` if the element's value doesn't match the provided pattern | properties |
| **``**`~.validity.tooLong`**``** | `true` if the element's value is longer than the maximum length | properties |
| **`` `~.validity.`tooShort ``** | `true` if the element's value, if it is not the empty string, is shorter than the minimum length | properties |
| **``**`~.validity.stepMismatch`**``** | `true` if the element's value is lower than the provided minimum | properties |
| **``**`~.validity.rangeUnderflow`**``** | `true` if the element's value is lower than the provided minimum | properties |
| **``**`~.validity.rangeOverflow`**``** | `true` if the element's value is higher than the provided maximum | properties |
| **``**`~.validity.badInput`**``** | `true` if the user has provided input is unable to convert to a value. | properties |
| **``**`~.validity.customError`**``** | Returns `true` if the element has a custom error. | properties |
| **``**`~.validity.valid`**``** | Returns `true` if the element's value has no validity problems. | properties |
| **``**`~.validationMessage`**``** | Returns the error message that would be shown to the user if the element was to be checked for validity. | properties |
| **``**`~.checkValidity()`**``** | Returns `true` if the element's value has no validity problems. | Method |
| **``**`~.reportValidity()`**``** | `true` if the element's value has no validity problems, and fires an `invalid` event at the element. | Method |
| **``**`~`**``**.**`setCustomValidity('MSG');`** | Sets a custom error, so that the element would fail to validate. | Method |

<figcaption>

(~) equals to ===> input

</figcaption>

</figure>

## Validation Classes

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

## Phenix Validation

phenix design system provide a simple yet powerful method to make the custom validation as easy as possible using the [CSS utilities](http://phenix.localhost/test/category/utilities/) and javascript flexibility to build a better User-Interface friendly validation, the `Phenix('.form-selector').validation();` gives you the ability to change the default validation messages and check for pattern `while the user is inputing` values to each control with a nice ui style with the optional array of `name,pattern,message` for each input you have.

[HTML](#tab-3)

[Javascript](#tab-4)

```
<!-- Form -->
<form action="" class="row gp-15 px-validation">
    <!-- Column -->
    <div class="col-12 col-md-4 mb-15">
        <!-- Form Control -->
        <label for="input-letters" class="mb-5">Letters Demo</label>
        <input type="text" placeholder="Required and A-Z only" class="form-control" name="input-letters" required>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 mb-15">
        <!-- Form Control -->
        <label for="input-numbers" class="mb-5">Numbers Demo</label>
        <input type="text" placeholder="Required and 0-9 only" class="form-control" name="input-numbers" required>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 mb-15">
        <!-- Form Control -->
        <label for="input-email" class="mb-5">E-Mail</label>
        <input type="email" placeholder="E-Mail Valid" class="form-control" name="input-email" required>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 mb-15">
        <!-- Form Control -->
        <label for="input-password" class="mb-5">Password</label>
        <input type="password" placeholder="Password Stringth" class="form-control" name="input-password">
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 mb-15">
        <!-- Form Control -->
        <label for="input-username" class="mb-5">Username</label>
        <input type="text" placeholder="Username" class="form-control" name="input-username" required>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 mb-15">
        <label for="visual-fix" class="color-transparent mb-5">...</label>
        <button class="btn primary fluid">Submit Test</button>
    </div>
    <!-- // Column -->
</form>
<!-- // Form -->
```

```
//====> Validation Demo <====//
Phenix('.form-selector').validation({
    defaults:{ //===> Error Messages for Default Api
        property : "message";
        valueMissing : "Please fill this field is reqiuered."
    },  
    //====> Different Pattern for Each input <====//
    patterns:[
        {
            name?:string,     //===> Input Name Attribute
            pattern?:string,  //===> RegEx Pattren
            message?:string,  //===> Error Message
            position?:string, //===> Message Position [top, bottom]
        },
        {
            name?:string,     //===> Input Name Attribute
            pattern?:string,  //===> RegEx Pattren
            message?:string,  //===> Error Message
            position?:string, //===> Message Position [top, bottom]
        },
    ],
});
```

## Options Table

in the table below you will find the validation plugin options, and all of them are optional, the default validation pattern is for missing values.

<figure>

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| **`defaults`** | Error Messages for Default Api. | \------ | object |
| **`defaults.valueMissing`** | Error Message for empty values. | \------ | string |
| **`defaults.tooLong`** | Error Message for too long values and `` `rangeOverflow` ``. | \------ | string |
| **``defaults.**`tooShort`**``** | Error Message for too short values and `rangeUnderflow`, `stepMismatch`. | \------ | string |
| **`defaults.typeMismatch`** | Error Message for wrong values and `badInput`, `patternMismatch`. | \------ | string |
| **``**`patterns`**``** | Array of objects that holds inputs names and validation pattern and message for each input. | `none` | array |
| **``**`patterns[].name`**``** | Input `Name` Attribute | `none` | string |
| **````**```**``**`patterns[].pattern`**``**```**````** | validation `RegEx` Pattern or Phenix Keywords | none | string |
| **````**```**``**`patterns[].message`**``**```**````** | Error Message | none | string |
| **````**```**``**`patterns[].position`**``**```**````** | the position of the message dialog `before` or `after` the input . | `after` | string |

<figcaption>

Animations Plugin Options Table.

</figcaption>

</figure>

## Common RegEx

in this table below you can find the most popular and common `RegEx` patterns to help you quickly validate your form controls and you can test any pattern from [here](https://www.regexpal.com/).

<figure>

| Description | RegEx Pattren |
| --- | --- |
| Letters from A to Z capital and small only | `[A-Za-z]+` |
| Numbers from 0 to 9 | `[0-9]+` |
| Numbers and Letters without space | `[a-zA-Z0-9]+` |
| Numbers and Letters with space | `[a-zA-Z0-9 ]+` |
| Common `E-Mail` Ids | `^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6})*$` |
| Uncommon `E-Mail` id | `^([a-z0-9_.+-]+)@([\da-z.-]+).([a-z.]{2,6})$` |
| Decimal Numbers | `[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*` |
| Whole + Decimal + Fractions | `[-]?[0-9]+[,.]?[0-9]([\/][0-9]+[,.]?[0-9])*` |
| Negative, Positive Whole + Decimal Numbers | `^-?\d*(\.\d+)?$` |
| Whole + Decimal Numbers | `^\d*(\.\d+)?$` |
| Username that may include `_` and `–` having a `length of 3 to 16` characters – | `^[a-z0-9_-]{3,16}$` |
| Match IPv4 address | `^(([0-9]\|[1-9][0-9]\|1[0-9]{2}\|2[0-4][0-9]\|25[0-5])\.){3}([0-9]\|[1-9][0-9]\|1[0-9]{2}\|2[0-4][0-9]\|25[0-5])$` |
| Date Format `YYYY-MM-dd` using separator `-` | `([12]\d{3}-(0[1-9]\|1[0-2])-(0[1-9]\|[12]\d\|3[01]))` |
| International Phone Numbers | `^(?:(?:\(?(?:00\|\+)([1-4]\d\d\|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#\|ext\.?\|extension\|x)[\-\.\ \\\/]?(\d+))?$` |
| URL `Protocol Optional` | `(https?:\/\/)?(www.)?[-a-zA-Z0-9@:%.+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%+.~#?&//=]*)` |
| URL `Include http(s) Protocol` | `https?:\/\/(www.)?[-a-zA-Z0-9@:%.+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%+.~#()?&//=]*)` |
| Password Should have `1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8` characters long | ``(?=(.[0-9]))(?=.[!@#$%^&()\[]{}-_+=~`\|:;"'<>,./?])(?=.[a-z])(?=(.[A-Z]))(?=(.)).{8,}`` |
| Password Should have `1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8` characters long | `(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$` |

<figcaption>

Regex Patterns List for [more patterns go there](https://digitalfortress.tech/tips/top-15-commonly-used-regex/)

</figcaption>

</figure>
