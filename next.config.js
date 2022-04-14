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
  env: {
      pathPrefix,
  },

  // trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/order': { page: '/order' },
      '/order/[id]': { page: '/order/[id]'},
      '/order/create': { page: '/order/create' },
      '/order/history/[id]': { page: '/order/history/[id]' },
      '/restaurant': { page: '/restaurant' },
      '/restaurant/[id]': { page: '/restaurant/[id]' },
      '/restaurant/[id]/create': { page: '/restaurant/[id]/create' },
      '/table': { page: '/table' },

      /* api */
      '/api/requestNewUser': { page: '/api/requestNewUser' },
      '/api/requestUsers': { page: '/api/requestUsers' },

      /* database api */
      '/api/database/createUserTable': { page: '/api/database/createUserTable' },
      '/api/database/dropUserTable': { page: '/api/database/dropUserTable' },

    }
  },

  reactStrictMode: true,
}

module.exports = nextConfig
