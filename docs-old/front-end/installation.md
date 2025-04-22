---
title: "Installation"
date: 2024-01-29
---

## Design System

Phenix Design System is lightweight user-interface framework build for simple structure, fast execution, and performance is number One concern in mind it was built for personal use and later published as open-source project for web community benefits.

## Introduction

Start building responsive, mobile-first web applications with Phenix Design System (Phenix DS). Similar to popular frameworks like Bootstrap and Material CSS, Phenix DS offers a lightweight user-interface framework designed for simplicity, fast execution, and optimal performance. Initially developed for personal use, Phenix DS has now been published as an open-source project for the benefit of the web community.

## Where to Start

To get started with Phenix DS and understand its design patterns, it’s essential to familiarize yourself with the utility class names for [spacing](https://phenixthemes.com/pds-docs/post/spacing/), [sizing](https://phenixthemes.com/pds-docs/post/sizing/), [colors](https://phenixthemes.com/pds-docs/post/colors/), and [backgrounds](https://phenixthemes.com/pds-docs/post/backgrounds/). These utility classes allow you to customize and modify any component used in the documentation examples and builds.

## Quick Setup

If you want to quickly install and start using Phenix DS, you can include the compiled CSS and JavaScript files in your HTML document. Below are the CDN links for the compiled files:

## CDN CSS

the next piece of code will load [Phenix D.S](https://phenixthemes.com/pds-docs/) Stylesheet “LTR” version from npm CDN Links you can copy it and place it into your document `<head>` tag.

```
<!-- Phenix CSS LTR -->
<link href="https://cdn.jsdelivr.net/npm/phenix-ui/dist/css/phenix.css" rel="stylesheet" />
```

## Right-to-Left (RTL)

if your document language is right-to-left you can use [Phenix D.S](https://phenixthemes.com/pds-docs/) Stylesheet “RTL” version from npm CDN Links you can copy it and place it into your document `<head>` tag.

```
<!-- Phenix CSS RTL -->
<link href="https://cdn.jsdelivr.net/npm/phenix-ui/dist/css/phenix-rtl.css" rel="stylesheet" />
```

## Starter template

when you put the CSS, and JS together your document code should look like the one below it is the most basic structure for a Responsive & SEO Friendly WebApp.

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <!-- Essential Meta Tags -->
        <meta name="language" content="en">
        <meta http-equiv="x-ua-compatible" content="text/html" charset="utf-8">
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="The Description of This Page Goes Here" />
        <meta name="keywords" content="keywords,goes,here" />
        <meta name="copyright" content="the app copyrights goes here">
        <!-- Title and Favicon -->
        <title>Phenix Design System v1 [Tornado UI v3]</title>
        <link rel="shortcut icon" type="image/png"  href="img/fevicon.png">
        <!-- Required CSS Files -->
        <link href="https://cdn.jsdelivr.net/npm/phenix-ui/dist/css/phenix.css" rel="stylesheet" />
    </head>
    <body>
        <!-- Your Code Start from Here -->
        
        <!-- Required JS Files -->
        <script src="https://cdn.jsdelivr.net/npm/phenix-ui/dist/js/phenix.js"></script>
    </body>
</html>
```

## SASS Modules

after installing Phenix-UI from npm you can import sass modules into your project sass with **@import** `'./node_modules/phenix-sass/_'_` which will import the “name” module into your project.

## Typescript Modules

you can import and use the TypeScript modules into your project typescript by import Phenix from `'./node_modules/phenix-ts'` which will import Phenix plugins for you to use in your project, or you can use it as a JavaScript module by importing Phenix from `“./node_modules/phenix-js”` inside your script file or even with HTML script in the example below, for more information about how to use P.D.S TypeScript/JavaScript click here.

```
<script type="module">
    import Phenix from  "./node_modules/phenix-js" || "CDN URL";
</script>
```

## Download Framework

you can download Phenix directly as source code or compiled files to use it or include it with your favorite package managers like npm, RubyGems etc.

[UI/UX Framework](https://github.com/EngCode/phenix-ui)

[WordPress Plugin](https://github.com/EngCode/phenix-blocks)
