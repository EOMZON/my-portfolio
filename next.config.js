//20231114 不加repo前缀github pages无法加载资源
/** @type {import('next').NextConfig} */

const repo = 'my-portfolio';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  basePath,
  assetPrefix,
  output: 'export',
};

module.exports = nextConfig;
