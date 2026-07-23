# Wasif Ali — Portfolio

Personal portfolio for **Wasif Ali, Senior Full-Stack Engineer**. Built with
Next.js (App Router) + TypeScript + Tailwind CSS, exported as a fully static site
for GitHub Pages. No backend, no runtime server, no paid services, no environment
variables.

- **Framework:** Next.js 15 (App Router) with `output: "export"`
- **Styling:** Tailwind CSS v4 — warm dark + amber theme with a light/dark toggle
- **Typography:** editorial serif headings (**Fraunces**, via `next/font`) over a
  clean sans body (**Inter**); mono labels for eyebrows/metadata
- **Content:** everything renders from a single typed file — `src/data/portfolio.ts`
- **Deploy:** GitHub Actions → GitHub Pages

### Design direction

The site uses a **warm dark + amber, editorial-serif** identity: a warm stone base
(`#0c0a09` / `#1c1917`) with an **amber** accent (`#fbbf24` on dark, `#b45309` on
the warm off-white `#faf7f2` light theme). Headings and the wordmark are set in the
Fraunces serif; body and UI use Inter; section eyebrows and metadata use a
letter-spaced uppercase mono. Layout leans on a big serif name in the hero, an
inline serif-numeral stat row, a ledger-style experience timeline, numbered project
cards, and amber-underline navigation.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run locally (http://localhost:3000)
npm run dev

# 3. Create a production build (static export → ./out)
npm run build

# 4. Test the static export exactly as it will ship
npm run serve        # serves ./out at http://localhost:3000
```

Other useful scripts:

```bash
npm run lint         # ESLint
npm run typecheck    # TypeScript, no emit
```

> **Note on local vs. deployed paths.** In development the site runs at the root
> (`http://localhost:3000`). In a production build the base path
> (`/wasif-portfolio`) is applied automatically so assets resolve under the
> GitHub Pages sub-path. This is controlled in one place — see below.

---

## The one file to configure: `src/config/site.ts`

```ts
export const repoName = "wasif-portfolio";                       // your GitHub repo name
export const siteUrl  = "https://your-username.github.io/wasif-portfolio";
```

- `repoName` sets the base path (`/wasif-portfolio`) used by routing and assets in
  production. **If your repository has a different name, change it here.**
- `siteUrl` is used for SEO (canonical URL, sitemap, Open Graph).

---

## Deploying to GitHub Pages

The repository includes a ready-to-go workflow at
`.github/workflows/deploy.yml`. It builds the static export and publishes it to
GitHub Pages on every push to `main`.

### 5. Create the GitHub repository

Create a new repository named **`wasif-portfolio`** (or any name — just update
`repoName` in `src/config/site.ts` to match).

### 6. Push the code

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/wasif-portfolio.git
git push -u origin main
```

### 7. Enable GitHub Pages with GitHub Actions

In the repository: **Settings → Pages → Build and deployment → Source →
"GitHub Actions"**. The next push to `main` (or a manual run from the **Actions**
tab) will build and deploy. Your site will be live at:

```
https://<your-username>.github.io/wasif-portfolio/
```

### 8. Updating the repository base path

If you rename the repo (or host it elsewhere), update `repoName` in
`src/config/site.ts`. For a **user/organization page** (repo named
`<username>.github.io`) or a **custom domain**, set `repoName = ""` so no base
path is applied.

---

## Adding your real content

### 9. Replace project screenshots and URLs

- **Screenshots:** drop images in `public/projects/` and set each project's
  `image` field in `src/data/portfolio.ts` (e.g. `image: "/projects/healthcare-billing.png"`).
  Until then, a clean placeholder panel renders automatically.
- **Repository / demo links:** set `repoUrl` / `demoUrl` on a project to a real
  URL to render its button. Leave `null` to hide it. Private projects show a
  **"Private production project"** label instead.

See `CONTENT_GUIDE.md` for a field-by-field walkthrough and the full list of
placeholders.

### 10. (Optional) Connect a custom domain later

1. In **Settings → Pages → Custom domain**, add your domain (e.g. `wasif.dev`).
2. Create a file `public/CNAME` containing just your domain:
   ```
   wasif.dev
   ```
3. Set `repoName = ""` in `src/config/site.ts` (custom domains serve from the
   root, so no base path) and set `siteUrl = "https://wasif.dev"`.
4. Configure your DNS per GitHub's instructions (A/ALIAS or CNAME records).

---

## Project structure

```
wasif-portfolio/
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── public/
│   ├── og.svg                     # Open Graph / social preview image
│   └── projects/                  # Project screenshots (+ README)
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Metadata, fonts (Fraunces + Inter), theme script, JSON-LD
│   │   ├── page.tsx               # Assembles all sections
│   │   ├── globals.css            # Tailwind v4 theme tokens + a11y
│   │   ├── icon.svg               # WA monogram favicon
│   │   ├── robots.ts              # Static robots.txt
│   │   └── sitemap.ts             # Static sitemap.xml
│   ├── components/                # Nav, Hero, sections, UI primitives
│   ├── config/site.ts            # ⭐ repo name / base path / site URL
│   └── data/portfolio.ts         # ⭐ all content
├── next.config.ts                 # output: "export", basePath, images.unoptimized
├── eslint.config.mjs
├── postcss.config.mjs             # Tailwind v4 PostCSS plugin
├── tsconfig.json
└── package.json
```

---

## Notes, assumptions & limitations

- **Static export:** the Next image optimizer is disabled (`images.unoptimized`)
  because there is no server. Project images use plain `<img>` with explicit
  dimensions to avoid layout shift.
- **robots.txt / sitemap.xml** are generated at build time. On a GitHub Pages
  *project* site they live under the repo sub-path; update `siteUrl` so their
  URLs are correct.
- **Open Graph image** is an SVG (`public/og.svg`). Most platforms render it, but
  a few social crawlers prefer PNG/JPG — swap in a raster version if needed.
- **Theme** (warm dark + amber) defaults to dark, respects the OS
  `prefers-color-scheme`, and remembers the user's toggle choice in `localStorage`.
  Swap the palette by editing the `--accent` / `--bg` / stone tokens in
  `src/app/globals.css`; swap the serif by changing the `Fraunces` import in
  `src/app/layout.tsx` and the `--font-serif` mapping in `globals.css`.
- All content is derived from the provided material; no employers, metrics, or
  testimonials were invented.
