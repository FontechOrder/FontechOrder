/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  experimental: {
    eslint: true,
    esmExternals: false,
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  },
  images: {
    domains: [
      'firebasestorage.googleapis.com', 
    ],
    loader: "imgix",
    path: "",
  },
  // assetPrefix: "./",
  assetPrefix: !debug ? 'https://fontechorder.github.io/FontechOrder/' : '',

  reactStrictMode: true,
}

module.exports = nextConfig
