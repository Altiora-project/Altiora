import { PropsWithChildren } from 'react'

import '@app/styles/globals.scss'
import clsx from 'clsx'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'

import { mainMenu } from '@app/configs/main-menu.config'
import { drukWideCyrFont, manropeFont } from '@app/fonts'

import { Footer } from '@widgets/footer'
import { Header } from '@widgets/header'

export const metadata: Metadata = {
  title: 'Error | Nextjs project',
  description: 'Страница ошибки'
}

export default function ErrorLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={clsx(`${manropeFont.variable} ${drukWideCyrFont.variable}`, 'bg')}>
        <NextTopLoader color="#000000" shadow={false} showSpinner={false} />
        <Header menuList={mainMenu} isErrorPage />
        <main>{children}</main>
        <Footer title="Контакты" className="footer" />
      </body>
    </html>
  )
}
