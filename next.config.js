//20231114 不加repo前缀github pages无法加载资源,但是加了repo前缀本地无法识别，所以要根据是否上传github进行判定

// /** @type {import('next').NextConfig} */

// const repo = 'my-portfolio';
// const assetPrefix = `/${repo}/`;
// const basePath = `/${repo}`;

// const nextConfig = {
//   basePath,
//   assetPrefix,
//   output: 'export',
// };

// module.exports = nextConfig;

/**20231114 参考一个可以根据是否在github actions中运行加前缀**/
/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // 去掉 `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  basePath,
  assetPrefix,
  output: 'export',
};

module.exports = nextConfig;
