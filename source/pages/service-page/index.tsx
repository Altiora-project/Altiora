import { FC } from 'react'

import classes from './styles/styles.module.scss'
import { typeServiceDetailsProps } from './types/types'
import clsx from 'clsx'

import { PostscriptumSection } from '@features/postscriptum-section'

import { getServiceAction } from '@entities/service-page/api/server-action'

import { NotFound } from '@shared/ui/not-found'

export const ServiceDetails: FC<typeServiceDetailsProps> = async ({ slug, className, ...otherProps }) => {
  //TODO: тут используем сущность которая через slug получает данные из api для запрашиваемой услуги
  // далее парсим данные и наполняем страницу
  const response = await getServiceAction(slug)

  if (!response) return <NotFound />
  if ('error' in response) return <NotFound />

  const pageData = response.data.data

  return (
    <div className={clsx(classes.wrapper, className)} {...otherProps}>
      <h1>{slug}</h1>

      <PostscriptumSection pageData={pageData} />
    </div>
  )
}
