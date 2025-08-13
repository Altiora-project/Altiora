import { imageHost } from '@shared/lib/environment/public'
import type { NextConfig } from 'next'
import path from 'node:path'

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'source/app/styles')],
    prependData: `@use "bp.scss" as bp;`
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: imageHost,
        pathname: '/media/**/*'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3006',
        pathname: '/media/**/*'
      },
      {
        protocol: 'http',
        hostname: '192.168.50.151',
        port: '3006',
        pathname: '/media/**/*'
      }
    ]
  }
}

export default nextConfig
