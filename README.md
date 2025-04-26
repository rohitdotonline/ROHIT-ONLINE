# Rohit's Personal Website

A clean, minimal personal website built with [Eleventy](https://www.11ty.dev/).

## Features

- Minimalist design inspired by Bear Blog
- Responsive layout
- Blog functionality
- Fast and lightweight

## Development

### Prerequisites

- Node.js (v14 or newer)
- npm

### Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open your browser and visit: `http://localhost:8080`

### Build

To build the site for production:

```
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

- `src/` - Source files
  - `_includes/` - Layout templates
  - `css/` - Stylesheets
  - `posts/` - Blog posts in Markdown
  - `index.njk` - Home page
  - `about.njk` - About page
  - `blog.njk` - Blog index page
- `.eleventy.js` - Eleventy configuration

## License

MIT 