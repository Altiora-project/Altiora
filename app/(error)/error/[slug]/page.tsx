'use client'

import { FC } from 'react'
import { ErrorCard } from '@shared/ui/error'

type ErrorPageProps = {
  params: { slug: string }
}

const ErrorSlugPage: FC<ErrorPageProps> = ({ params }) => {
  return (
    <ErrorCard
      field="Что-то пошло не так"
      text={`Ошибка: ${params.slug}. Давайте попробуем еще раз`}
      onClick={() => window.location.reload()}
    />
  )
}

export default ErrorSlugPage
