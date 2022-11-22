/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
  headers: [
    {
      key: 'Cache-Control',
      value: 'public, max-age=9999999999, must-revalidate',
    }
  ],
}

module.exports = nextConfig
