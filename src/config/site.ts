/**
 * ────────────────────────────────────────────────────────────────────────────
 *  SITE / DEPLOYMENT CONFIG — the ONE place to change for GitHub Pages.
 * ────────────────────────────────────────────────────────────────────────────
 *
 *  If your GitHub repository is named `wasif-portfolio`, your site will be served
 *  from:  https://<your-username>.github.io/wasif-portfolio/
 *
 *  1. Set `repoName` to your repository name below.
 *  2. Set `siteUrl` to your final URL (used for SEO canonical / sitemap / OG).
 *
 *  In development (`npm run dev`) the base path is disabled so the site loads at
 *  http://localhost:3000/ . In a production build it is applied automatically so
 *  assets and links resolve under the repository sub-path.
 */

// TODO: Change this to your GitHub repository name.
export const repoName = "wasif-portfolio";

// TODO: Change this to your live URL once deployed.
//   Project page:  https://<username>.github.io/wasif-portfolio
//   User/org page: https://<username>.github.io   (then set repoName = "")
//   Custom domain: https://your-domain.com        (then set repoName = "")
export const siteUrl = "https://wasif-ali-dev123.github.io/wasif-portfolio";

const isProd = process.env.NODE_ENV === "production";

/**
 * Base path applied to routing and assets in production only.
 * Empty string in dev so the site works at the localhost root.
 */
export const basePath = isProd && repoName ? `/${repoName}` : "";

/**
 * Prefix a path in `/public` (or any absolute app path) with the base path.
 * Use this for plain <a href> / <img src> that point at static files, e.g.
 *   withBasePath("/projects/maple-hr.png")
 * next/link and next/image handle the base path automatically — this helper is
 * only needed for raw anchors and images.
 */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return `${basePath}/${path}`;
  return `${basePath}${path}`;
}
