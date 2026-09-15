# Portfolio

Portfolio site structure.

## Structure

- `content/` contains editable portfolio content and resume source files.
- `public/` contains browser-served assets.
- `src/` contains application components, sections, pages, and styles.

## Deploy

This is a static site. Deploy the project root directly on Vercel with no build
command and no output directory. Vercel will serve `index.html` and the
relative assets from `public/`, `src/`, and `alex/`.

To run it locally, serve the project root with any static file server, for
example:

```bash
npx serve .
```
