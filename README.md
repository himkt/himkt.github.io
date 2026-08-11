# himkt.github.io

Portfolio site of [@himkt](https://github.com/himkt) — software engineering, machine learning, and natural language processing.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Development

```bash
pnpm install
pnpm dev      # start the dev server
pnpm build    # build the static site into dist/
pnpm format   # format sources with Prettier
```

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`.

## Structure

- `src/data/portfolio.ts` — all site content (profile, projects, publications, experience)
- `src/pages/index.astro` — the single portfolio page
- `src/components/` — presentational components
- `public/` — static assets (resume, favicon)
