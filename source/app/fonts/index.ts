import localFont from 'next/font/local'

export const montserratFont = localFont({
  src: [
    {
      path: './montserrat-400.woff2',
      weight: '400'
    },
    {
      path: './montserrat-500.woff2',
      weight: '500'
    },
    {
      path: './montserrat-700.woff2',
      weight: '700'
    }
  ],
  display: 'block',
  variable: '--font-main',
  preload: true
})
