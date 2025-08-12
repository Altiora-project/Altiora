import { FC } from 'react'

import classes from './styles/styles.module.scss'
import { typeServiceDetailsProps } from './types/types'
import clsx from 'clsx'
import { PostscriptumSection } from '@features/postscriptum-section'
import { ServiceHeroSection } from '@features/service-hero-section'
import { getServiceDetailsAction } from '@entities/service-page/api/server-action'
import { NotFound } from '@shared/ui/not-found'
import { ServiceInformation } from '@features/service-information'

export const ServiceDetails: FC<typeServiceDetailsProps> = async ({ slug, className, ...otherProps }) => {
  //TODO: тут используем сущность которая через slug получает данные из api для запрашиваемой услуги
  // далее парсим данные и наполняем страницу
  const response = await getServiceDetailsAction(slug)

  if (!response) return <NotFound />
  if ('error' in response) return <NotFound />

  const pageData = response.data.data

  const content = pageData.content

  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <ServiceHeroSection pageData={pageData} />
      <ServiceInformation content={content} />
      <PostscriptumSection pageData={pageData} />
    </div>
  )
}
