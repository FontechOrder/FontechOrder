/** @type {import('next').NextConfig} */

// const pathPrefix = process.env.NODE_ENV === 'production'
// ? '/FontechOrder'
// : '';

const nextConfig = {
  experimental: {
    eslint: true,
    esmExternals: false,
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  },
  images: {
    domains: [
      'cjehjnuqvihotvcwpyzr.supabase.co', 
    ],
    loader: "imgix",
    path: "",
  },
  // assetPrefix: "./",

  // assetPrefix: pathPrefix,
  // env: {
  //     pathPrefix,
  // },

  // trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/orders': { page: '/orders' },
      '/orders/detail': { page: '/orders/detail' },
      '/restaurants': { page: '/restaurants' },
      '/restaurants/detail': { page: '/restaurants/detail' },
    }
  },

  reactStrictMode: true,
}

module.exports = nextConfig
