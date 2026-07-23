# Content update guide

Almost everything on this site is data, not markup. To change content, edit
**`src/data/portfolio.ts`** — the components re-render from it. The only other
file you normally touch is **`src/config/site.ts`** (repo name + URL).

## Placeholders you must replace before publishing

Search the project for `TODO:` to jump to each of these.

| What | File | Field |
|------|------|-------|
| GitHub URL | `src/data/portfolio.ts` | `social.github` |
| LinkedIn URL | `src/data/portfolio.ts` | `social.linkedin` |
| Email address | `src/data/portfolio.ts` | `social.email` |
| Phone number | `src/data/portfolio.ts` | `social.phone` |
| Location | `src/data/portfolio.ts` | `profile.location` |
| Project screenshots | `public/projects/` + `projects[].image` | image paths |
| Public repo links | `src/data/portfolio.ts` | `projects[].repoUrl` |
| Live site links | `src/data/portfolio.ts` | `projects[].demoUrl` |
| Repo base path | `src/config/site.ts` | `repoName` |
| Canonical / site URL | `src/config/site.ts` | `siteUrl` |

## Common edits

### Change hero text, tagline, or title
Edit `profile` (`name`, `title`, `tagline`, `heroSecondary`) in
`src/data/portfolio.ts`.

### Edit the credibility stats
Edit the `metrics` array (`value` + `label`).

### Add / edit / remove a navigation link
Edit `navItems`. Each `href` is an in-page anchor (e.g. `#projects`) that must
match a section `id` in `src/app/page.tsx`.

### Add or edit a project
Add an object to the `projects` array. Required fields:

```ts
{
  id: "unique-slug",
  name: "Project name",
  context: "Business context…",
  problem: "The problem…",
  contribution: ["Did X.", "Did Y."],
  approach: "Technical approach…",
  architecture: "Architecture / workflow…",
  outcome: "Measured outcome…",
  tags: ["React", "Node.js"],
  repoUrl: null,   // or "https://github.com/…" to show a Repository button
  demoUrl: null,   // or "https://…" to show a Live site button
  isPrivate: true, // shows the "Private production project" label
  image: null,     // or "/projects/your-shot.png"
}
```

Numbered project cards are auto-indexed (`01`, `02`, …) from array order.

### Edit experience, skills, AI workflow, or consulting steps
Each has its own exported array/object: `experience`, `skillGroups`,
`aiWorkflow`, `architectureCards`, `consulting`.

### Edit education & achievements
Edit the `education` array (`degree`, `school`, `period`) and the `achievements`
string array — both render in the **Education & achievements** section
(`src/components/Education.tsx`).

## Design tokens (colors / theme)

The site ships a **warm dark + amber, editorial-serif** identity. Colors live as
CSS variables in `src/app/globals.css` under `:root` (warm off-white light theme)
and `.dark` (warm stone dark theme). Change `--accent` (and `--accent-strong`,
`--ring`) to swap the amber accent across the whole site, or the `--bg` / stone
tokens to reshape the base.

Fonts are wired in `src/app/layout.tsx` via `next/font/google` — **Fraunces**
(serif, `--font-fraunces`) for headings/wordmark and **Inter** (sans,
`--font-inter`) for body — and mapped to Tailwind's `--font-serif` / `--font-sans`
in `globals.css`. Section eyebrows and metadata use `font-mono`.

## After editing, always verify

```bash
npm run lint
npm run build
npm run serve   # then open http://localhost:3000
```
