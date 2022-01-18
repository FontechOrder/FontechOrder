/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  },
  images: {
    domains: [
      'firebasestorage.googleapis.com', 
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
