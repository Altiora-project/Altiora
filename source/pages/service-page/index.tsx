import { FC } from 'react'

import classes from './styles/styles.module.scss'
import { typeServiceDetailsProps } from './types/types'
import clsx from 'clsx'
import { notFound } from 'next/navigation'

import { PostscriptumSection } from '@features/postscriptum-section'
import { ServiceHeroSection } from '@features/service-hero-section'
import { ServiceInformation } from '@features/service-information'

import { getServiceDetailsAction } from '@entities/service-page/api/server-action'

export const ServiceDetails: FC<typeServiceDetailsProps> = async ({ slug, className, ...otherProps }) => {
  //TODO: тут используем сущность которая через slug получает данные из api для запрашиваемой услуги
  // далее парсим данные и наполняем страницу
  const response = await getServiceDetailsAction(slug)

  if (!response || 'error' in response || !response.data.data) notFound()

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
