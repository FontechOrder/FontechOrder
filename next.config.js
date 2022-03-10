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

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/order': { page: '/order' },
      '/order/[id]': { page: '/order/[id]' },
      '/order/create': { page: '/order/create' },
      '/order/history': { page: '/order/history' },
      '/restaurant': { page: '/restaurant' },
      '/restaurant/[id]': { page: '/restaurant/[id]' },
      '/restaurant/[id]/create': { page: '/restaurant/[id]/create' },
    }
  },

  reactStrictMode: true,
}

module.exports = nextConfig
