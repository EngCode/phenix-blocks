---
title: "Compatibility"
date: 2025-01-04
---

## Compatibility

Learn about the browsers and devices, from modern to old, that are supported by Phenix CSS properties and JavaScript Behavior

## Overview

Phenix supports the latest, stable releases of all major browsers and platforms. Alternative browsers that use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform’s web view API, are not explicitly supported. However, Phenix should (in most cases) display and function correctly in these browsers. More specific support information is provided below.

## Desktop Browsers

in the next table you can know the supported desktop Windows, Mac, and Linux browsers versions up to the newer versions of those browsers, also you can know the current usage statistics of all web browsers from here

| ![Explorer](images/Explorer.svg) **Edge v84+** | ![Firefox](images/Firefox.svg) **Firefox v63+** | ![Google Chrome](images/Google-Chrome.svg) **Chrome v84+** | ![Safari](images/Safari.svg) **Safari v12+** | ![Opera](images/Opera.svg) **Opera v73+** |
| --- | --- | --- | --- | --- |

## Mobile Browsers

in the next table you can know the supported Smart Devices Android, and IOS browsers versions up to the newer versions of those browsers, you can know the current usage statistics of all web browsers from here

| ![Android Webview](images/android-webview-png.avif) **Android v6+** | ![Firefox](images/Firefox.svg) **Firefox v63+** | ![Google Chrome](images/Google-Chrome.svg) **Chrome v84+** | ![Safari](images/Safari.svg) **Safari v12+** | ![Opera](images/Opera.svg) **Opera v64+** |
| --- | --- | --- | --- | --- |

## Typescript/JavaScript

the source code of phenix JavaScript plugins and modules writing with Typescript and compiled as ES2015+ Common JavaScript which means it may contain some features that don’t work on any browser that doesn’t support ES2015. You can change that in the source code phenix/src/scripts/tsconfig.json then you can compile phenix modules for older versions.

```
[
    "last 5 major versions",
    "not dead",
    "Safari >= 12",
    "iOS >= 12",
    "Chrome >= 60",
    "Firefox >= 60",
    ">= 0.5%"
]
```
