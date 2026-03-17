# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Commands

```bash
npm run dev        # start dev server (localhost:4321)
npm run build      # production build → dist/
npm run preview    # preview built site locally
npx astro check    # type-check .astro files
```

There are no tests in this project.

## Architecture

This is an **Astro 5 static site** deployed to GitHub Pages at `https://ksmpartners.github.io/ksm-website/`. The `base` is set to `/ksm-website/` in `astro.config.mjs`, so all internal links must use Astro's `BASE_URL` or relative paths — **never hardcode absolute paths starting with `/`**.

### Layout hierarchy

```
BaseLayout.astro       ← <html> shell, <head>, global CSS import
  └─ PageLayout.astro  ← wraps BaseLayout with <Header>, <main>, <Footer>
       └─ BlogPostLayout.astro  ← extends PageLayout for blog posts
```

All pages use `PageLayout` (which includes the nav/footer). `BaseLayout` is only used directly when building `PageLayout`.

### Content collections (`src/content/`)

Defined in `src/content/config.ts` with Zod schemas:

| Collection | Key fields |
|---|---|
| `services` | `title`, `description`, `order` (for home sort), `image` |
| `case-studies` | `title`, `client`, `vertical` (enum: Utilities/Life Sciences/Other), `summary`, `image` |
| `blog` | `title`, `date`, `author`, `tags[]`, `excerpt`, `image` |

Content files are `.md` (not `.mdx`) by default. Slug derivation strips `.md`/`.mdx` extensions from `cs.id` — e.g., `cs.id.replace(/\.mdx?$/, '')`.

### Routing

- Static pages: `src/pages/*.astro`
- Dynamic collection pages: `src/pages/[collection]/[slug].astro` using `getStaticPaths()` + `getCollection()`
- Index pages for each collection: `src/pages/case-studies/index.astro`, `src/pages/blog/index.astro`

### Styling

Single global stylesheet at `src/styles/global.css`, imported only in `BaseLayout.astro`. CSS custom properties define the brand palette:

- `--color-primary: #004D71` (navy — headings, header bg)
- `--color-accent: #3CB4E5` (sky blue — links, buttons)
- Utility classes like `.section`, `.section-pale`, `.grid-3`, `.card`, `.btn`, `.tag`, `.prose` are defined globally — use these rather than adding inline styles or scoped styles where possible.

Font is **General Sans** (loaded via `@font-face` from an external CDN URL in `global.css`).

### Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yaml`) which builds with `withastro/action@v5` and deploys to GitHub Pages.

## Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server

- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` (serves at `http://localhost:4321`)
- Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow

- Puppeteer is installed in this project's `node_modules/` (`npm install --save-dev puppeteer` already run).
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:4321`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:4321 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Brand Assets

- Always check `public/` and `brand-guidelines/` for existing logos, color guides, and images before designing.
- Brand colors are defined in `src/styles/global.css` as CSS custom properties — use them, do not invent new brand colors.
- Logo: `public/KSM_Logo_2c_Blue.svg` — use this, do not use placeholders where the real logo is available.

## Astro-Specific Frontend Rules

- Use the global utility classes (`.section`, `.section-pale`, `.grid-3`, `.card`, `.btn`, `.tag`, `.prose`) rather than adding inline or scoped styles where possible.
- Never hardcode absolute paths starting with `/` — always use Astro's `BASE_URL` or relative paths.
- Prefer editing `.astro` components over adding new files.
- Content lives in `src/content/` as `.md` files — do not put copy directly in `.astro` page templates if it belongs in a content collection.

## Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Use the KSM brand palette (`#004D71`, `#3CB4E5`) and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. The project uses General Sans — pair it appropriately. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules

- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
