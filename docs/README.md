# Phenix Design System Documentation

This directory contains the official documentation for the Phenix Design System.

## Overview

The documentation is built using [VitePress](https://vitepress.dev/), a static site generator powered by Vue and Vite. It provides a comprehensive guide to using the Phenix Design System for both WordPress and standalone frontend projects.

## Documentation Structure

The documentation is organized into the following sections:

- **Getting Started**: Installation and basic usage
- **SASS Framework**: Grid system, typography, colors, components, utilities, and forms
- **TypeScript Utilities**: DOM manipulation, animations, and UI components
- **WordPress Blocks**: Layout blocks, content blocks, media blocks, interactive blocks, dynamic blocks, and utility blocks
- **PHP Integration**: WordPress hooks, plugin API, and theme integration

## Development

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Navigate to the docs directory:

```bash
cd docs
```

2. Install the dependencies:

```bash
npm install
# or
yarn install
```

### Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start a local development server at [http://localhost:5173](http://localhost:5173).

### Building for Production

To build the documentation for production:

```bash
npm run build
# or
yarn build
```

This will generate static files in the `.vitepress/dist` directory.

### Serving the Production Build

To preview the production build:

```bash
npm run serve
# or
yarn serve
```

## Contributing to Documentation

When contributing to the documentation:

1. Ensure all documentation is accurate and matches the actual implementation
2. Use proper formatting, including code examples with appropriate syntax highlighting
3. Organize content logically and maintain a consistent style
4. Test all examples to ensure they work as described
5. Update the navigation in `.vitepress/config.js` when adding new pages

## License

The Phenix Design System documentation is licensed under the [MIT License](../LICENSE). 