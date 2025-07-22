import localFont from 'next/font/local'

export const manropeFont = localFont({
  src: [
    {
      path: './manrope-400.woff2',
      weight: '400'
    },
    {
      path: './manrope-500.woff2',
      weight: '500'
    },
    {
      path: './manrope-600.woff2',
      weight: '600'
    },
    {
      path: './manrope-700.woff2',
      weight: '700'
    }
  ],
  display: 'block',
  variable: '--font-main',
  preload: true
})

export const drukWideCyrFont = localFont({
  src: [
    {
      path: './druk-wide-cyr-700.woff2',
      weight: '700'
    }
  ],
  display: 'block',
  variable: '--font-secondary',
  preload: true
})
