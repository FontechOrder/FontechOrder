/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    jsconfigPaths: true, // enables it for both jsconfig.json and tsconfig.json
  },
  reactStrictMode: true,
}

module.exports = nextConfig
