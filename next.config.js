/** @type {import('next').NextConfig} */

const pathPrefix = process.env.NODE_ENV === 'production'
? '/FontechOrder'
: '';

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

  assetPrefix: pathPrefix,
  basePath: "/FontechOrder",
  env: {
      pathPrefix,
  },

  reactStrictMode: true,
}

module.exports = nextConfig
