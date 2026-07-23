import path from "node:path";
import type { NextConfig } from "next";
import { basePath } from "./src/config/site";

/**
 * Static export configuration for GitHub Pages.
 * - `output: "export"` emits a fully static site into `out/`.
 * - `basePath` / `assetPrefix` scope routing + `_next` assets under the repo path.
 * - `images.unoptimized` is required because the Next image optimizer needs a
 *   server; static export has none.
 */
const nextConfig: NextConfig = {
  output: "export",
  // Pin the workspace root to this project so a sibling lockfile elsewhere on the
  // machine doesn't get inferred as the root (silences the multi-lockfile warning).
  outputFileTracingRoot: path.join(__dirname),
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  // Emits `/about/index.html` style paths so deep links work on static hosts.
  trailingSlash: true,
  // Fail the build on type/lint errors rather than silently shipping them.
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },
};

export default nextConfig;
