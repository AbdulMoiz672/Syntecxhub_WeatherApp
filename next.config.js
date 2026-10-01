const repoBasePath = '/Syntecxhub_WeatherApp';
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || Boolean(process.env.NEXT_PUBLIC_BASE_PATH);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? repoBasePath : '',
  assetPrefix: isGitHubPages ? repoBasePath : '',
  distDir: isGitHubPages ? '.next-pages' : '.next',
  trailingSlash: true,
};

export default nextConfig;