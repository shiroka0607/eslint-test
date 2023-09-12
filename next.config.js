/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // index.htmlを全ページで生成
  trailingSlash: true,
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
