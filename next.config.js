/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  experimental: {
    forceSwcTransforms: false,
  },
}

module.exports = nextConfig