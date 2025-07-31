import classes from './styles.module.scss'
import clsx from 'clsx'
import type { FC, HTMLAttributes } from 'react'
import { Footer } from '@widgets/footer'
import { getPageDataAction } from '@entities/main-page/api/server-actions'
import { NotFound } from '@shared/ui/not-found'
import { HeroSection } from '@features/hero-feature'

export const MainPage: FC<HTMLAttributes<HTMLDivElement>> = async ({ className, ...otherProps }) => {
  const response = await getPageDataAction()

  if (!response) return <NotFound />
  if ('error' in response) return <NotFound />

  const pageData = response.data.data
  const phrases = pageData.services_data.map(service => service.name)

  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <HeroSection title={pageData.hero_title} imgUrl={pageData.hero_image} phrases={phrases} />

      <div className={clsx(classes.content, classes.container)}>MAIN-PAGE CONTENT</div>
      <div className={classes.container}>
        <Footer />
      </div>
    </div>
  )
}
