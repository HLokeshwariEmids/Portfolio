/** @type {import('next').NextConfig} */

// When building in the GitHub Pages workflow, the site is served from
// https://<user>.github.io/Portfolio, so it needs a base path. Local dev and
// local builds leave GITHUB_PAGES unset and serve from the root.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "Portfolio";
const basePath = isGithubPages ? `/${repo}` : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
