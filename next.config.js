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
      // '/menus': { page: '/menus' },
      '/orders': { page: '/orders' },
      '/orders/detail': { page: '/orders/detail' },
      // '/order/[id]': { page: '/order/[id]'},
      // '/order/create': { page: '/order/create' },
      // '/order/history/[id]': { page: '/order/history/[id]' },
      '/restaurants': { page: '/restaurants' },
      '/restaurants/detail': { page: '/restaurants/detail' },
      // '/restaurant/[id]': { page: '/restaurant/[id]' },
      // '/restaurant/[id]/create': { page: '/restaurant/[id]/create' },
      // '/table': { page: '/table' },
    }
  },

  reactStrictMode: true,
}

module.exports = nextConfig
