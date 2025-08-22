import { PropsWithChildren } from 'react'
import '@app/styles/globals.scss'
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import clsx from 'clsx'

import { mainMenu } from '@app/configs/main-menu.config'
import { drukWideCyrFont, manropeFont } from '@app/fonts'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'

export const metadata: Metadata = {
  title: '404 Not Found',
  description: 'Страница не найдена'
}

export default function NotFoundLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={clsx(`${manropeFont.variable} ${drukWideCyrFont.variable}`, 'bg')}>
        <NextTopLoader color="#000000" shadow={false} showSpinner={false} />
        <Header menuList={mainMenu} />
        <main>{children}</main>
        <Footer title="Контакты" className="footer" />
      </body>
    </html>
  )
}
