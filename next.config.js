// This file is not needed for Create React App, but keeping for reference
// If you migrate to Next.js later, you can use this configuration

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig