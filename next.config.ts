import type { NextConfig } from 'next'
import path from 'node:path'

import { imageHost } from '@shared/lib/environment/public'

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
      }
    ]
  }
}

export default nextConfig
